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
var args40724 = [];
var len__37877__auto___40730 = arguments.length;
var i__37878__auto___40731 = (0);
while(true){
if((i__37878__auto___40731 < len__37877__auto___40730)){
args40724.push((arguments[i__37878__auto___40731]));

var G__40732 = (i__37878__auto___40731 + (1));
i__37878__auto___40731 = G__40732;
continue;
} else {
}
break;
}

var G__40726 = args40724.length;
switch (G__40726) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40724.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40727 = (function (f,blockable,meta40728){
this.f = f;
this.blockable = blockable;
this.meta40728 = meta40728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40729,meta40728__$1){
var self__ = this;
var _40729__$1 = this;
return (new cljs.core.async.t_cljs$core$async40727(self__.f,self__.blockable,meta40728__$1));
});

cljs.core.async.t_cljs$core$async40727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40729){
var self__ = this;
var _40729__$1 = this;
return self__.meta40728;
});

cljs.core.async.t_cljs$core$async40727.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40728","meta40728",-1869518067,null)], null);
});

cljs.core.async.t_cljs$core$async40727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40727";

cljs.core.async.t_cljs$core$async40727.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async40727");
});

cljs.core.async.__GT_t_cljs$core$async40727 = (function cljs$core$async$__GT_t_cljs$core$async40727(f__$1,blockable__$1,meta40728){
return (new cljs.core.async.t_cljs$core$async40727(f__$1,blockable__$1,meta40728));
});

}

return (new cljs.core.async.t_cljs$core$async40727(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40736 = [];
var len__37877__auto___40739 = arguments.length;
var i__37878__auto___40740 = (0);
while(true){
if((i__37878__auto___40740 < len__37877__auto___40739)){
args40736.push((arguments[i__37878__auto___40740]));

var G__40741 = (i__37878__auto___40740 + (1));
i__37878__auto___40740 = G__40741;
continue;
} else {
}
break;
}

var G__40738 = args40736.length;
switch (G__40738) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40736.length)].join('')));

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
var args40743 = [];
var len__37877__auto___40746 = arguments.length;
var i__37878__auto___40747 = (0);
while(true){
if((i__37878__auto___40747 < len__37877__auto___40746)){
args40743.push((arguments[i__37878__auto___40747]));

var G__40748 = (i__37878__auto___40747 + (1));
i__37878__auto___40747 = G__40748;
continue;
} else {
}
break;
}

var G__40745 = args40743.length;
switch (G__40745) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40743.length)].join('')));

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
var args40750 = [];
var len__37877__auto___40753 = arguments.length;
var i__37878__auto___40754 = (0);
while(true){
if((i__37878__auto___40754 < len__37877__auto___40753)){
args40750.push((arguments[i__37878__auto___40754]));

var G__40755 = (i__37878__auto___40754 + (1));
i__37878__auto___40754 = G__40755;
continue;
} else {
}
break;
}

var G__40752 = args40750.length;
switch (G__40752) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40750.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40757 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40757);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40757,ret){
return (function (){
return fn1.call(null,val_40757);
});})(val_40757,ret))
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
var args40758 = [];
var len__37877__auto___40761 = arguments.length;
var i__37878__auto___40762 = (0);
while(true){
if((i__37878__auto___40762 < len__37877__auto___40761)){
args40758.push((arguments[i__37878__auto___40762]));

var G__40763 = (i__37878__auto___40762 + (1));
i__37878__auto___40762 = G__40763;
continue;
} else {
}
break;
}

var G__40760 = args40758.length;
switch (G__40760) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40758.length)].join('')));

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
var n__37717__auto___40765 = n;
var x_40766 = (0);
while(true){
if((x_40766 < n__37717__auto___40765)){
(a[x_40766] = (0));

var G__40767 = (x_40766 + (1));
x_40766 = G__40767;
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

var G__40768 = (i + (1));
i = G__40768;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40772 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40772 = (function (alt_flag,flag,meta40773){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40773 = meta40773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40774,meta40773__$1){
var self__ = this;
var _40774__$1 = this;
return (new cljs.core.async.t_cljs$core$async40772(self__.alt_flag,self__.flag,meta40773__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40774){
var self__ = this;
var _40774__$1 = this;
return self__.meta40773;
});})(flag))
;

cljs.core.async.t_cljs$core$async40772.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40772.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40772.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40773","meta40773",-54171358,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40772.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40772";

cljs.core.async.t_cljs$core$async40772.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async40772");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40772 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40772(alt_flag__$1,flag__$1,meta40773){
return (new cljs.core.async.t_cljs$core$async40772(alt_flag__$1,flag__$1,meta40773));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40772(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40778 = (function (alt_handler,flag,cb,meta40779){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40779 = meta40779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40780,meta40779__$1){
var self__ = this;
var _40780__$1 = this;
return (new cljs.core.async.t_cljs$core$async40778(self__.alt_handler,self__.flag,self__.cb,meta40779__$1));
});

cljs.core.async.t_cljs$core$async40778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40780){
var self__ = this;
var _40780__$1 = this;
return self__.meta40779;
});

cljs.core.async.t_cljs$core$async40778.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40779","meta40779",215747227,null)], null);
});

cljs.core.async.t_cljs$core$async40778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40778";

cljs.core.async.t_cljs$core$async40778.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async40778");
});

cljs.core.async.__GT_t_cljs$core$async40778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40778(alt_handler__$1,flag__$1,cb__$1,meta40779){
return (new cljs.core.async.t_cljs$core$async40778(alt_handler__$1,flag__$1,cb__$1,meta40779));
});

}

return (new cljs.core.async.t_cljs$core$async40778(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40781_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40781_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40782_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40782_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36802__auto__ = wport;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40783 = (i + (1));
i = G__40783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36802__auto__ = ret;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36790__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36790__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36790__auto__;
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
var args__37884__auto__ = [];
var len__37877__auto___40789 = arguments.length;
var i__37878__auto___40790 = (0);
while(true){
if((i__37878__auto___40790 < len__37877__auto___40789)){
args__37884__auto__.push((arguments[i__37878__auto___40790]));

var G__40791 = (i__37878__auto___40790 + (1));
i__37878__auto___40790 = G__40791;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40786){
var map__40787 = p__40786;
var map__40787__$1 = ((((!((map__40787 == null)))?((((map__40787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40787):map__40787);
var opts = map__40787__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40784){
var G__40785 = cljs.core.first.call(null,seq40784);
var seq40784__$1 = cljs.core.next.call(null,seq40784);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40785,seq40784__$1);
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
var args40792 = [];
var len__37877__auto___40842 = arguments.length;
var i__37878__auto___40843 = (0);
while(true){
if((i__37878__auto___40843 < len__37877__auto___40842)){
args40792.push((arguments[i__37878__auto___40843]));

var G__40844 = (i__37878__auto___40843 + (1));
i__37878__auto___40843 = G__40844;
continue;
} else {
}
break;
}

var G__40794 = args40792.length;
switch (G__40794) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40792.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40679__auto___40846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___40846){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___40846){
return (function (state_40818){
var state_val_40819 = (state_40818[(1)]);
if((state_val_40819 === (7))){
var inst_40814 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40820_40847 = state_40818__$1;
(statearr_40820_40847[(2)] = inst_40814);

(statearr_40820_40847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (1))){
var state_40818__$1 = state_40818;
var statearr_40821_40848 = state_40818__$1;
(statearr_40821_40848[(2)] = null);

(statearr_40821_40848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (4))){
var inst_40797 = (state_40818[(7)]);
var inst_40797__$1 = (state_40818[(2)]);
var inst_40798 = (inst_40797__$1 == null);
var state_40818__$1 = (function (){var statearr_40822 = state_40818;
(statearr_40822[(7)] = inst_40797__$1);

return statearr_40822;
})();
if(cljs.core.truth_(inst_40798)){
var statearr_40823_40849 = state_40818__$1;
(statearr_40823_40849[(1)] = (5));

} else {
var statearr_40824_40850 = state_40818__$1;
(statearr_40824_40850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (13))){
var state_40818__$1 = state_40818;
var statearr_40825_40851 = state_40818__$1;
(statearr_40825_40851[(2)] = null);

(statearr_40825_40851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (6))){
var inst_40797 = (state_40818[(7)]);
var state_40818__$1 = state_40818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40818__$1,(11),to,inst_40797);
} else {
if((state_val_40819 === (3))){
var inst_40816 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40818__$1,inst_40816);
} else {
if((state_val_40819 === (12))){
var state_40818__$1 = state_40818;
var statearr_40826_40852 = state_40818__$1;
(statearr_40826_40852[(2)] = null);

(statearr_40826_40852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (2))){
var state_40818__$1 = state_40818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40818__$1,(4),from);
} else {
if((state_val_40819 === (11))){
var inst_40807 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
if(cljs.core.truth_(inst_40807)){
var statearr_40827_40853 = state_40818__$1;
(statearr_40827_40853[(1)] = (12));

} else {
var statearr_40828_40854 = state_40818__$1;
(statearr_40828_40854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (9))){
var state_40818__$1 = state_40818;
var statearr_40829_40855 = state_40818__$1;
(statearr_40829_40855[(2)] = null);

(statearr_40829_40855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (5))){
var state_40818__$1 = state_40818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40830_40856 = state_40818__$1;
(statearr_40830_40856[(1)] = (8));

} else {
var statearr_40831_40857 = state_40818__$1;
(statearr_40831_40857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (14))){
var inst_40812 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40832_40858 = state_40818__$1;
(statearr_40832_40858[(2)] = inst_40812);

(statearr_40832_40858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (10))){
var inst_40804 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40833_40859 = state_40818__$1;
(statearr_40833_40859[(2)] = inst_40804);

(statearr_40833_40859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (8))){
var inst_40801 = cljs.core.async.close_BANG_.call(null,to);
var state_40818__$1 = state_40818;
var statearr_40834_40860 = state_40818__$1;
(statearr_40834_40860[(2)] = inst_40801);

(statearr_40834_40860[(1)] = (10));


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
});})(c__40679__auto___40846))
;
return ((function (switch__40567__auto__,c__40679__auto___40846){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_40838 = [null,null,null,null,null,null,null,null];
(statearr_40838[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_40838[(1)] = (1));

return statearr_40838;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_40818){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_40818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e40839){if((e40839 instanceof Object)){
var ex__40571__auto__ = e40839;
var statearr_40840_40861 = state_40818;
(statearr_40840_40861[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40862 = state_40818;
state_40818 = G__40862;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_40818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_40818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___40846))
})();
var state__40681__auto__ = (function (){var statearr_40841 = f__40680__auto__.call(null);
(statearr_40841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___40846);

return statearr_40841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___40846))
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
return (function (p__41050){
var vec__41051 = p__41050;
var v = cljs.core.nth.call(null,vec__41051,(0),null);
var p = cljs.core.nth.call(null,vec__41051,(1),null);
var job = vec__41051;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40679__auto___41237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___41237,res,vec__41051,v,p,job,jobs,results){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___41237,res,vec__41051,v,p,job,jobs,results){
return (function (state_41058){
var state_val_41059 = (state_41058[(1)]);
if((state_val_41059 === (1))){
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41058__$1,(2),res,v);
} else {
if((state_val_41059 === (2))){
var inst_41055 = (state_41058[(2)]);
var inst_41056 = cljs.core.async.close_BANG_.call(null,res);
var state_41058__$1 = (function (){var statearr_41060 = state_41058;
(statearr_41060[(7)] = inst_41055);

return statearr_41060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41058__$1,inst_41056);
} else {
return null;
}
}
});})(c__40679__auto___41237,res,vec__41051,v,p,job,jobs,results))
;
return ((function (switch__40567__auto__,c__40679__auto___41237,res,vec__41051,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0 = (function (){
var statearr_41064 = [null,null,null,null,null,null,null,null];
(statearr_41064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__);

(statearr_41064[(1)] = (1));

return statearr_41064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1 = (function (state_41058){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41065){if((e41065 instanceof Object)){
var ex__40571__auto__ = e41065;
var statearr_41066_41238 = state_41058;
(statearr_41066_41238[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41239 = state_41058;
state_41058 = G__41239;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = function(state_41058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1.call(this,state_41058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___41237,res,vec__41051,v,p,job,jobs,results))
})();
var state__40681__auto__ = (function (){var statearr_41067 = f__40680__auto__.call(null);
(statearr_41067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___41237);

return statearr_41067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___41237,res,vec__41051,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41068){
var vec__41069 = p__41068;
var v = cljs.core.nth.call(null,vec__41069,(0),null);
var p = cljs.core.nth.call(null,vec__41069,(1),null);
var job = vec__41069;
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
var n__37717__auto___41240 = n;
var __41241 = (0);
while(true){
if((__41241 < n__37717__auto___41240)){
var G__41072_41242 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41072_41242) {
case "compute":
var c__40679__auto___41244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41241,c__40679__auto___41244,G__41072_41242,n__37717__auto___41240,jobs,results,process,async){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (__41241,c__40679__auto___41244,G__41072_41242,n__37717__auto___41240,jobs,results,process,async){
return (function (state_41085){
var state_val_41086 = (state_41085[(1)]);
if((state_val_41086 === (1))){
var state_41085__$1 = state_41085;
var statearr_41087_41245 = state_41085__$1;
(statearr_41087_41245[(2)] = null);

(statearr_41087_41245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (2))){
var state_41085__$1 = state_41085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41085__$1,(4),jobs);
} else {
if((state_val_41086 === (3))){
var inst_41083 = (state_41085[(2)]);
var state_41085__$1 = state_41085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41085__$1,inst_41083);
} else {
if((state_val_41086 === (4))){
var inst_41075 = (state_41085[(2)]);
var inst_41076 = process.call(null,inst_41075);
var state_41085__$1 = state_41085;
if(cljs.core.truth_(inst_41076)){
var statearr_41088_41246 = state_41085__$1;
(statearr_41088_41246[(1)] = (5));

} else {
var statearr_41089_41247 = state_41085__$1;
(statearr_41089_41247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (5))){
var state_41085__$1 = state_41085;
var statearr_41090_41248 = state_41085__$1;
(statearr_41090_41248[(2)] = null);

(statearr_41090_41248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (6))){
var state_41085__$1 = state_41085;
var statearr_41091_41249 = state_41085__$1;
(statearr_41091_41249[(2)] = null);

(statearr_41091_41249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (7))){
var inst_41081 = (state_41085[(2)]);
var state_41085__$1 = state_41085;
var statearr_41092_41250 = state_41085__$1;
(statearr_41092_41250[(2)] = inst_41081);

(statearr_41092_41250[(1)] = (3));


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
});})(__41241,c__40679__auto___41244,G__41072_41242,n__37717__auto___41240,jobs,results,process,async))
;
return ((function (__41241,switch__40567__auto__,c__40679__auto___41244,G__41072_41242,n__37717__auto___41240,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0 = (function (){
var statearr_41096 = [null,null,null,null,null,null,null];
(statearr_41096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__);

(statearr_41096[(1)] = (1));

return statearr_41096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1 = (function (state_41085){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41097){if((e41097 instanceof Object)){
var ex__40571__auto__ = e41097;
var statearr_41098_41251 = state_41085;
(statearr_41098_41251[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41252 = state_41085;
state_41085 = G__41252;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = function(state_41085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1.call(this,state_41085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__;
})()
;})(__41241,switch__40567__auto__,c__40679__auto___41244,G__41072_41242,n__37717__auto___41240,jobs,results,process,async))
})();
var state__40681__auto__ = (function (){var statearr_41099 = f__40680__auto__.call(null);
(statearr_41099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___41244);

return statearr_41099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(__41241,c__40679__auto___41244,G__41072_41242,n__37717__auto___41240,jobs,results,process,async))
);


break;
case "async":
var c__40679__auto___41253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41241,c__40679__auto___41253,G__41072_41242,n__37717__auto___41240,jobs,results,process,async){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (__41241,c__40679__auto___41253,G__41072_41242,n__37717__auto___41240,jobs,results,process,async){
return (function (state_41112){
var state_val_41113 = (state_41112[(1)]);
if((state_val_41113 === (1))){
var state_41112__$1 = state_41112;
var statearr_41114_41254 = state_41112__$1;
(statearr_41114_41254[(2)] = null);

(statearr_41114_41254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41113 === (2))){
var state_41112__$1 = state_41112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41112__$1,(4),jobs);
} else {
if((state_val_41113 === (3))){
var inst_41110 = (state_41112[(2)]);
var state_41112__$1 = state_41112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41112__$1,inst_41110);
} else {
if((state_val_41113 === (4))){
var inst_41102 = (state_41112[(2)]);
var inst_41103 = async.call(null,inst_41102);
var state_41112__$1 = state_41112;
if(cljs.core.truth_(inst_41103)){
var statearr_41115_41255 = state_41112__$1;
(statearr_41115_41255[(1)] = (5));

} else {
var statearr_41116_41256 = state_41112__$1;
(statearr_41116_41256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41113 === (5))){
var state_41112__$1 = state_41112;
var statearr_41117_41257 = state_41112__$1;
(statearr_41117_41257[(2)] = null);

(statearr_41117_41257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41113 === (6))){
var state_41112__$1 = state_41112;
var statearr_41118_41258 = state_41112__$1;
(statearr_41118_41258[(2)] = null);

(statearr_41118_41258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41113 === (7))){
var inst_41108 = (state_41112[(2)]);
var state_41112__$1 = state_41112;
var statearr_41119_41259 = state_41112__$1;
(statearr_41119_41259[(2)] = inst_41108);

(statearr_41119_41259[(1)] = (3));


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
});})(__41241,c__40679__auto___41253,G__41072_41242,n__37717__auto___41240,jobs,results,process,async))
;
return ((function (__41241,switch__40567__auto__,c__40679__auto___41253,G__41072_41242,n__37717__auto___41240,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0 = (function (){
var statearr_41123 = [null,null,null,null,null,null,null];
(statearr_41123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__);

(statearr_41123[(1)] = (1));

return statearr_41123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1 = (function (state_41112){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41124){if((e41124 instanceof Object)){
var ex__40571__auto__ = e41124;
var statearr_41125_41260 = state_41112;
(statearr_41125_41260[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41261 = state_41112;
state_41112 = G__41261;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = function(state_41112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1.call(this,state_41112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__;
})()
;})(__41241,switch__40567__auto__,c__40679__auto___41253,G__41072_41242,n__37717__auto___41240,jobs,results,process,async))
})();
var state__40681__auto__ = (function (){var statearr_41126 = f__40680__auto__.call(null);
(statearr_41126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___41253);

return statearr_41126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(__41241,c__40679__auto___41253,G__41072_41242,n__37717__auto___41240,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41262 = (__41241 + (1));
__41241 = G__41262;
continue;
} else {
}
break;
}

var c__40679__auto___41263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___41263,jobs,results,process,async){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___41263,jobs,results,process,async){
return (function (state_41148){
var state_val_41149 = (state_41148[(1)]);
if((state_val_41149 === (1))){
var state_41148__$1 = state_41148;
var statearr_41150_41264 = state_41148__$1;
(statearr_41150_41264[(2)] = null);

(statearr_41150_41264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (2))){
var state_41148__$1 = state_41148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41148__$1,(4),from);
} else {
if((state_val_41149 === (3))){
var inst_41146 = (state_41148[(2)]);
var state_41148__$1 = state_41148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41148__$1,inst_41146);
} else {
if((state_val_41149 === (4))){
var inst_41129 = (state_41148[(7)]);
var inst_41129__$1 = (state_41148[(2)]);
var inst_41130 = (inst_41129__$1 == null);
var state_41148__$1 = (function (){var statearr_41151 = state_41148;
(statearr_41151[(7)] = inst_41129__$1);

return statearr_41151;
})();
if(cljs.core.truth_(inst_41130)){
var statearr_41152_41265 = state_41148__$1;
(statearr_41152_41265[(1)] = (5));

} else {
var statearr_41153_41266 = state_41148__$1;
(statearr_41153_41266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (5))){
var inst_41132 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41148__$1 = state_41148;
var statearr_41154_41267 = state_41148__$1;
(statearr_41154_41267[(2)] = inst_41132);

(statearr_41154_41267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (6))){
var inst_41129 = (state_41148[(7)]);
var inst_41134 = (state_41148[(8)]);
var inst_41134__$1 = cljs.core.async.chan.call(null,(1));
var inst_41135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41136 = [inst_41129,inst_41134__$1];
var inst_41137 = (new cljs.core.PersistentVector(null,2,(5),inst_41135,inst_41136,null));
var state_41148__$1 = (function (){var statearr_41155 = state_41148;
(statearr_41155[(8)] = inst_41134__$1);

return statearr_41155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41148__$1,(8),jobs,inst_41137);
} else {
if((state_val_41149 === (7))){
var inst_41144 = (state_41148[(2)]);
var state_41148__$1 = state_41148;
var statearr_41156_41268 = state_41148__$1;
(statearr_41156_41268[(2)] = inst_41144);

(statearr_41156_41268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (8))){
var inst_41134 = (state_41148[(8)]);
var inst_41139 = (state_41148[(2)]);
var state_41148__$1 = (function (){var statearr_41157 = state_41148;
(statearr_41157[(9)] = inst_41139);

return statearr_41157;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41148__$1,(9),results,inst_41134);
} else {
if((state_val_41149 === (9))){
var inst_41141 = (state_41148[(2)]);
var state_41148__$1 = (function (){var statearr_41158 = state_41148;
(statearr_41158[(10)] = inst_41141);

return statearr_41158;
})();
var statearr_41159_41269 = state_41148__$1;
(statearr_41159_41269[(2)] = null);

(statearr_41159_41269[(1)] = (2));


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
});})(c__40679__auto___41263,jobs,results,process,async))
;
return ((function (switch__40567__auto__,c__40679__auto___41263,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0 = (function (){
var statearr_41163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__);

(statearr_41163[(1)] = (1));

return statearr_41163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1 = (function (state_41148){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41164){if((e41164 instanceof Object)){
var ex__40571__auto__ = e41164;
var statearr_41165_41270 = state_41148;
(statearr_41165_41270[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41271 = state_41148;
state_41148 = G__41271;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = function(state_41148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1.call(this,state_41148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___41263,jobs,results,process,async))
})();
var state__40681__auto__ = (function (){var statearr_41166 = f__40680__auto__.call(null);
(statearr_41166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___41263);

return statearr_41166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___41263,jobs,results,process,async))
);


var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,jobs,results,process,async){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,jobs,results,process,async){
return (function (state_41204){
var state_val_41205 = (state_41204[(1)]);
if((state_val_41205 === (7))){
var inst_41200 = (state_41204[(2)]);
var state_41204__$1 = state_41204;
var statearr_41206_41272 = state_41204__$1;
(statearr_41206_41272[(2)] = inst_41200);

(statearr_41206_41272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (20))){
var state_41204__$1 = state_41204;
var statearr_41207_41273 = state_41204__$1;
(statearr_41207_41273[(2)] = null);

(statearr_41207_41273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (1))){
var state_41204__$1 = state_41204;
var statearr_41208_41274 = state_41204__$1;
(statearr_41208_41274[(2)] = null);

(statearr_41208_41274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (4))){
var inst_41169 = (state_41204[(7)]);
var inst_41169__$1 = (state_41204[(2)]);
var inst_41170 = (inst_41169__$1 == null);
var state_41204__$1 = (function (){var statearr_41209 = state_41204;
(statearr_41209[(7)] = inst_41169__$1);

return statearr_41209;
})();
if(cljs.core.truth_(inst_41170)){
var statearr_41210_41275 = state_41204__$1;
(statearr_41210_41275[(1)] = (5));

} else {
var statearr_41211_41276 = state_41204__$1;
(statearr_41211_41276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (15))){
var inst_41182 = (state_41204[(8)]);
var state_41204__$1 = state_41204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41204__$1,(18),to,inst_41182);
} else {
if((state_val_41205 === (21))){
var inst_41195 = (state_41204[(2)]);
var state_41204__$1 = state_41204;
var statearr_41212_41277 = state_41204__$1;
(statearr_41212_41277[(2)] = inst_41195);

(statearr_41212_41277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (13))){
var inst_41197 = (state_41204[(2)]);
var state_41204__$1 = (function (){var statearr_41213 = state_41204;
(statearr_41213[(9)] = inst_41197);

return statearr_41213;
})();
var statearr_41214_41278 = state_41204__$1;
(statearr_41214_41278[(2)] = null);

(statearr_41214_41278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (6))){
var inst_41169 = (state_41204[(7)]);
var state_41204__$1 = state_41204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41204__$1,(11),inst_41169);
} else {
if((state_val_41205 === (17))){
var inst_41190 = (state_41204[(2)]);
var state_41204__$1 = state_41204;
if(cljs.core.truth_(inst_41190)){
var statearr_41215_41279 = state_41204__$1;
(statearr_41215_41279[(1)] = (19));

} else {
var statearr_41216_41280 = state_41204__$1;
(statearr_41216_41280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (3))){
var inst_41202 = (state_41204[(2)]);
var state_41204__$1 = state_41204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41204__$1,inst_41202);
} else {
if((state_val_41205 === (12))){
var inst_41179 = (state_41204[(10)]);
var state_41204__$1 = state_41204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41204__$1,(14),inst_41179);
} else {
if((state_val_41205 === (2))){
var state_41204__$1 = state_41204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41204__$1,(4),results);
} else {
if((state_val_41205 === (19))){
var state_41204__$1 = state_41204;
var statearr_41217_41281 = state_41204__$1;
(statearr_41217_41281[(2)] = null);

(statearr_41217_41281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (11))){
var inst_41179 = (state_41204[(2)]);
var state_41204__$1 = (function (){var statearr_41218 = state_41204;
(statearr_41218[(10)] = inst_41179);

return statearr_41218;
})();
var statearr_41219_41282 = state_41204__$1;
(statearr_41219_41282[(2)] = null);

(statearr_41219_41282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (9))){
var state_41204__$1 = state_41204;
var statearr_41220_41283 = state_41204__$1;
(statearr_41220_41283[(2)] = null);

(statearr_41220_41283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (5))){
var state_41204__$1 = state_41204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41221_41284 = state_41204__$1;
(statearr_41221_41284[(1)] = (8));

} else {
var statearr_41222_41285 = state_41204__$1;
(statearr_41222_41285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (14))){
var inst_41184 = (state_41204[(11)]);
var inst_41182 = (state_41204[(8)]);
var inst_41182__$1 = (state_41204[(2)]);
var inst_41183 = (inst_41182__$1 == null);
var inst_41184__$1 = cljs.core.not.call(null,inst_41183);
var state_41204__$1 = (function (){var statearr_41223 = state_41204;
(statearr_41223[(11)] = inst_41184__$1);

(statearr_41223[(8)] = inst_41182__$1);

return statearr_41223;
})();
if(inst_41184__$1){
var statearr_41224_41286 = state_41204__$1;
(statearr_41224_41286[(1)] = (15));

} else {
var statearr_41225_41287 = state_41204__$1;
(statearr_41225_41287[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (16))){
var inst_41184 = (state_41204[(11)]);
var state_41204__$1 = state_41204;
var statearr_41226_41288 = state_41204__$1;
(statearr_41226_41288[(2)] = inst_41184);

(statearr_41226_41288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (10))){
var inst_41176 = (state_41204[(2)]);
var state_41204__$1 = state_41204;
var statearr_41227_41289 = state_41204__$1;
(statearr_41227_41289[(2)] = inst_41176);

(statearr_41227_41289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (18))){
var inst_41187 = (state_41204[(2)]);
var state_41204__$1 = state_41204;
var statearr_41228_41290 = state_41204__$1;
(statearr_41228_41290[(2)] = inst_41187);

(statearr_41228_41290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41205 === (8))){
var inst_41173 = cljs.core.async.close_BANG_.call(null,to);
var state_41204__$1 = state_41204;
var statearr_41229_41291 = state_41204__$1;
(statearr_41229_41291[(2)] = inst_41173);

(statearr_41229_41291[(1)] = (10));


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
});})(c__40679__auto__,jobs,results,process,async))
;
return ((function (switch__40567__auto__,c__40679__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0 = (function (){
var statearr_41233 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__);

(statearr_41233[(1)] = (1));

return statearr_41233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1 = (function (state_41204){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41234){if((e41234 instanceof Object)){
var ex__40571__auto__ = e41234;
var statearr_41235_41292 = state_41204;
(statearr_41235_41292[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41293 = state_41204;
state_41204 = G__41293;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__ = function(state_41204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1.call(this,state_41204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,jobs,results,process,async))
})();
var state__40681__auto__ = (function (){var statearr_41236 = f__40680__auto__.call(null);
(statearr_41236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_41236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,jobs,results,process,async))
);

return c__40679__auto__;
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
var args41294 = [];
var len__37877__auto___41297 = arguments.length;
var i__37878__auto___41298 = (0);
while(true){
if((i__37878__auto___41298 < len__37877__auto___41297)){
args41294.push((arguments[i__37878__auto___41298]));

var G__41299 = (i__37878__auto___41298 + (1));
i__37878__auto___41298 = G__41299;
continue;
} else {
}
break;
}

var G__41296 = args41294.length;
switch (G__41296) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41294.length)].join('')));

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
var args41301 = [];
var len__37877__auto___41304 = arguments.length;
var i__37878__auto___41305 = (0);
while(true){
if((i__37878__auto___41305 < len__37877__auto___41304)){
args41301.push((arguments[i__37878__auto___41305]));

var G__41306 = (i__37878__auto___41305 + (1));
i__37878__auto___41305 = G__41306;
continue;
} else {
}
break;
}

var G__41303 = args41301.length;
switch (G__41303) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41301.length)].join('')));

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
var args41308 = [];
var len__37877__auto___41361 = arguments.length;
var i__37878__auto___41362 = (0);
while(true){
if((i__37878__auto___41362 < len__37877__auto___41361)){
args41308.push((arguments[i__37878__auto___41362]));

var G__41363 = (i__37878__auto___41362 + (1));
i__37878__auto___41362 = G__41363;
continue;
} else {
}
break;
}

var G__41310 = args41308.length;
switch (G__41310) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41308.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40679__auto___41365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___41365,tc,fc){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___41365,tc,fc){
return (function (state_41336){
var state_val_41337 = (state_41336[(1)]);
if((state_val_41337 === (7))){
var inst_41332 = (state_41336[(2)]);
var state_41336__$1 = state_41336;
var statearr_41338_41366 = state_41336__$1;
(statearr_41338_41366[(2)] = inst_41332);

(statearr_41338_41366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (1))){
var state_41336__$1 = state_41336;
var statearr_41339_41367 = state_41336__$1;
(statearr_41339_41367[(2)] = null);

(statearr_41339_41367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (4))){
var inst_41313 = (state_41336[(7)]);
var inst_41313__$1 = (state_41336[(2)]);
var inst_41314 = (inst_41313__$1 == null);
var state_41336__$1 = (function (){var statearr_41340 = state_41336;
(statearr_41340[(7)] = inst_41313__$1);

return statearr_41340;
})();
if(cljs.core.truth_(inst_41314)){
var statearr_41341_41368 = state_41336__$1;
(statearr_41341_41368[(1)] = (5));

} else {
var statearr_41342_41369 = state_41336__$1;
(statearr_41342_41369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (13))){
var state_41336__$1 = state_41336;
var statearr_41343_41370 = state_41336__$1;
(statearr_41343_41370[(2)] = null);

(statearr_41343_41370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (6))){
var inst_41313 = (state_41336[(7)]);
var inst_41319 = p.call(null,inst_41313);
var state_41336__$1 = state_41336;
if(cljs.core.truth_(inst_41319)){
var statearr_41344_41371 = state_41336__$1;
(statearr_41344_41371[(1)] = (9));

} else {
var statearr_41345_41372 = state_41336__$1;
(statearr_41345_41372[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (3))){
var inst_41334 = (state_41336[(2)]);
var state_41336__$1 = state_41336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41336__$1,inst_41334);
} else {
if((state_val_41337 === (12))){
var state_41336__$1 = state_41336;
var statearr_41346_41373 = state_41336__$1;
(statearr_41346_41373[(2)] = null);

(statearr_41346_41373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (2))){
var state_41336__$1 = state_41336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41336__$1,(4),ch);
} else {
if((state_val_41337 === (11))){
var inst_41313 = (state_41336[(7)]);
var inst_41323 = (state_41336[(2)]);
var state_41336__$1 = state_41336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41336__$1,(8),inst_41323,inst_41313);
} else {
if((state_val_41337 === (9))){
var state_41336__$1 = state_41336;
var statearr_41347_41374 = state_41336__$1;
(statearr_41347_41374[(2)] = tc);

(statearr_41347_41374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (5))){
var inst_41316 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41317 = cljs.core.async.close_BANG_.call(null,fc);
var state_41336__$1 = (function (){var statearr_41348 = state_41336;
(statearr_41348[(8)] = inst_41316);

return statearr_41348;
})();
var statearr_41349_41375 = state_41336__$1;
(statearr_41349_41375[(2)] = inst_41317);

(statearr_41349_41375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (14))){
var inst_41330 = (state_41336[(2)]);
var state_41336__$1 = state_41336;
var statearr_41350_41376 = state_41336__$1;
(statearr_41350_41376[(2)] = inst_41330);

(statearr_41350_41376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (10))){
var state_41336__$1 = state_41336;
var statearr_41351_41377 = state_41336__$1;
(statearr_41351_41377[(2)] = fc);

(statearr_41351_41377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41337 === (8))){
var inst_41325 = (state_41336[(2)]);
var state_41336__$1 = state_41336;
if(cljs.core.truth_(inst_41325)){
var statearr_41352_41378 = state_41336__$1;
(statearr_41352_41378[(1)] = (12));

} else {
var statearr_41353_41379 = state_41336__$1;
(statearr_41353_41379[(1)] = (13));

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
});})(c__40679__auto___41365,tc,fc))
;
return ((function (switch__40567__auto__,c__40679__auto___41365,tc,fc){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_41357 = [null,null,null,null,null,null,null,null,null];
(statearr_41357[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_41357[(1)] = (1));

return statearr_41357;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_41336){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41358){if((e41358 instanceof Object)){
var ex__40571__auto__ = e41358;
var statearr_41359_41380 = state_41336;
(statearr_41359_41380[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41381 = state_41336;
state_41336 = G__41381;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_41336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_41336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___41365,tc,fc))
})();
var state__40681__auto__ = (function (){var statearr_41360 = f__40680__auto__.call(null);
(statearr_41360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___41365);

return statearr_41360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___41365,tc,fc))
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
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__){
return (function (state_41445){
var state_val_41446 = (state_41445[(1)]);
if((state_val_41446 === (7))){
var inst_41441 = (state_41445[(2)]);
var state_41445__$1 = state_41445;
var statearr_41447_41468 = state_41445__$1;
(statearr_41447_41468[(2)] = inst_41441);

(statearr_41447_41468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (1))){
var inst_41425 = init;
var state_41445__$1 = (function (){var statearr_41448 = state_41445;
(statearr_41448[(7)] = inst_41425);

return statearr_41448;
})();
var statearr_41449_41469 = state_41445__$1;
(statearr_41449_41469[(2)] = null);

(statearr_41449_41469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (4))){
var inst_41428 = (state_41445[(8)]);
var inst_41428__$1 = (state_41445[(2)]);
var inst_41429 = (inst_41428__$1 == null);
var state_41445__$1 = (function (){var statearr_41450 = state_41445;
(statearr_41450[(8)] = inst_41428__$1);

return statearr_41450;
})();
if(cljs.core.truth_(inst_41429)){
var statearr_41451_41470 = state_41445__$1;
(statearr_41451_41470[(1)] = (5));

} else {
var statearr_41452_41471 = state_41445__$1;
(statearr_41452_41471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (6))){
var inst_41428 = (state_41445[(8)]);
var inst_41432 = (state_41445[(9)]);
var inst_41425 = (state_41445[(7)]);
var inst_41432__$1 = f.call(null,inst_41425,inst_41428);
var inst_41433 = cljs.core.reduced_QMARK_.call(null,inst_41432__$1);
var state_41445__$1 = (function (){var statearr_41453 = state_41445;
(statearr_41453[(9)] = inst_41432__$1);

return statearr_41453;
})();
if(inst_41433){
var statearr_41454_41472 = state_41445__$1;
(statearr_41454_41472[(1)] = (8));

} else {
var statearr_41455_41473 = state_41445__$1;
(statearr_41455_41473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (3))){
var inst_41443 = (state_41445[(2)]);
var state_41445__$1 = state_41445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41445__$1,inst_41443);
} else {
if((state_val_41446 === (2))){
var state_41445__$1 = state_41445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41445__$1,(4),ch);
} else {
if((state_val_41446 === (9))){
var inst_41432 = (state_41445[(9)]);
var inst_41425 = inst_41432;
var state_41445__$1 = (function (){var statearr_41456 = state_41445;
(statearr_41456[(7)] = inst_41425);

return statearr_41456;
})();
var statearr_41457_41474 = state_41445__$1;
(statearr_41457_41474[(2)] = null);

(statearr_41457_41474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (5))){
var inst_41425 = (state_41445[(7)]);
var state_41445__$1 = state_41445;
var statearr_41458_41475 = state_41445__$1;
(statearr_41458_41475[(2)] = inst_41425);

(statearr_41458_41475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (10))){
var inst_41439 = (state_41445[(2)]);
var state_41445__$1 = state_41445;
var statearr_41459_41476 = state_41445__$1;
(statearr_41459_41476[(2)] = inst_41439);

(statearr_41459_41476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (8))){
var inst_41432 = (state_41445[(9)]);
var inst_41435 = cljs.core.deref.call(null,inst_41432);
var state_41445__$1 = state_41445;
var statearr_41460_41477 = state_41445__$1;
(statearr_41460_41477[(2)] = inst_41435);

(statearr_41460_41477[(1)] = (10));


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
});})(c__40679__auto__))
;
return ((function (switch__40567__auto__,c__40679__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40568__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40568__auto____0 = (function (){
var statearr_41464 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41464[(0)] = cljs$core$async$reduce_$_state_machine__40568__auto__);

(statearr_41464[(1)] = (1));

return statearr_41464;
});
var cljs$core$async$reduce_$_state_machine__40568__auto____1 = (function (state_41445){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41465){if((e41465 instanceof Object)){
var ex__40571__auto__ = e41465;
var statearr_41466_41478 = state_41445;
(statearr_41466_41478[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41479 = state_41445;
state_41445 = G__41479;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40568__auto__ = function(state_41445){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40568__auto____1.call(this,state_41445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40568__auto____0;
cljs$core$async$reduce_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40568__auto____1;
return cljs$core$async$reduce_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__))
})();
var state__40681__auto__ = (function (){var statearr_41467 = f__40680__auto__.call(null);
(statearr_41467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_41467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__))
);

return c__40679__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,f__$1){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,f__$1){
return (function (state_41499){
var state_val_41500 = (state_41499[(1)]);
if((state_val_41500 === (1))){
var inst_41494 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41499__$1 = state_41499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41499__$1,(2),inst_41494);
} else {
if((state_val_41500 === (2))){
var inst_41496 = (state_41499[(2)]);
var inst_41497 = f__$1.call(null,inst_41496);
var state_41499__$1 = state_41499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41499__$1,inst_41497);
} else {
return null;
}
}
});})(c__40679__auto__,f__$1))
;
return ((function (switch__40567__auto__,c__40679__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40568__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40568__auto____0 = (function (){
var statearr_41504 = [null,null,null,null,null,null,null];
(statearr_41504[(0)] = cljs$core$async$transduce_$_state_machine__40568__auto__);

(statearr_41504[(1)] = (1));

return statearr_41504;
});
var cljs$core$async$transduce_$_state_machine__40568__auto____1 = (function (state_41499){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41505){if((e41505 instanceof Object)){
var ex__40571__auto__ = e41505;
var statearr_41506_41508 = state_41499;
(statearr_41506_41508[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41509 = state_41499;
state_41499 = G__41509;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40568__auto__ = function(state_41499){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40568__auto____1.call(this,state_41499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40568__auto____0;
cljs$core$async$transduce_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40568__auto____1;
return cljs$core$async$transduce_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,f__$1))
})();
var state__40681__auto__ = (function (){var statearr_41507 = f__40680__auto__.call(null);
(statearr_41507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_41507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,f__$1))
);

return c__40679__auto__;
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
var args41510 = [];
var len__37877__auto___41562 = arguments.length;
var i__37878__auto___41563 = (0);
while(true){
if((i__37878__auto___41563 < len__37877__auto___41562)){
args41510.push((arguments[i__37878__auto___41563]));

var G__41564 = (i__37878__auto___41563 + (1));
i__37878__auto___41563 = G__41564;
continue;
} else {
}
break;
}

var G__41512 = args41510.length;
switch (G__41512) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41510.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__){
return (function (state_41537){
var state_val_41538 = (state_41537[(1)]);
if((state_val_41538 === (7))){
var inst_41519 = (state_41537[(2)]);
var state_41537__$1 = state_41537;
var statearr_41539_41566 = state_41537__$1;
(statearr_41539_41566[(2)] = inst_41519);

(statearr_41539_41566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (1))){
var inst_41513 = cljs.core.seq.call(null,coll);
var inst_41514 = inst_41513;
var state_41537__$1 = (function (){var statearr_41540 = state_41537;
(statearr_41540[(7)] = inst_41514);

return statearr_41540;
})();
var statearr_41541_41567 = state_41537__$1;
(statearr_41541_41567[(2)] = null);

(statearr_41541_41567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (4))){
var inst_41514 = (state_41537[(7)]);
var inst_41517 = cljs.core.first.call(null,inst_41514);
var state_41537__$1 = state_41537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41537__$1,(7),ch,inst_41517);
} else {
if((state_val_41538 === (13))){
var inst_41531 = (state_41537[(2)]);
var state_41537__$1 = state_41537;
var statearr_41542_41568 = state_41537__$1;
(statearr_41542_41568[(2)] = inst_41531);

(statearr_41542_41568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (6))){
var inst_41522 = (state_41537[(2)]);
var state_41537__$1 = state_41537;
if(cljs.core.truth_(inst_41522)){
var statearr_41543_41569 = state_41537__$1;
(statearr_41543_41569[(1)] = (8));

} else {
var statearr_41544_41570 = state_41537__$1;
(statearr_41544_41570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (3))){
var inst_41535 = (state_41537[(2)]);
var state_41537__$1 = state_41537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41537__$1,inst_41535);
} else {
if((state_val_41538 === (12))){
var state_41537__$1 = state_41537;
var statearr_41545_41571 = state_41537__$1;
(statearr_41545_41571[(2)] = null);

(statearr_41545_41571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (2))){
var inst_41514 = (state_41537[(7)]);
var state_41537__$1 = state_41537;
if(cljs.core.truth_(inst_41514)){
var statearr_41546_41572 = state_41537__$1;
(statearr_41546_41572[(1)] = (4));

} else {
var statearr_41547_41573 = state_41537__$1;
(statearr_41547_41573[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (11))){
var inst_41528 = cljs.core.async.close_BANG_.call(null,ch);
var state_41537__$1 = state_41537;
var statearr_41548_41574 = state_41537__$1;
(statearr_41548_41574[(2)] = inst_41528);

(statearr_41548_41574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (9))){
var state_41537__$1 = state_41537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41549_41575 = state_41537__$1;
(statearr_41549_41575[(1)] = (11));

} else {
var statearr_41550_41576 = state_41537__$1;
(statearr_41550_41576[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (5))){
var inst_41514 = (state_41537[(7)]);
var state_41537__$1 = state_41537;
var statearr_41551_41577 = state_41537__$1;
(statearr_41551_41577[(2)] = inst_41514);

(statearr_41551_41577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (10))){
var inst_41533 = (state_41537[(2)]);
var state_41537__$1 = state_41537;
var statearr_41552_41578 = state_41537__$1;
(statearr_41552_41578[(2)] = inst_41533);

(statearr_41552_41578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41538 === (8))){
var inst_41514 = (state_41537[(7)]);
var inst_41524 = cljs.core.next.call(null,inst_41514);
var inst_41514__$1 = inst_41524;
var state_41537__$1 = (function (){var statearr_41553 = state_41537;
(statearr_41553[(7)] = inst_41514__$1);

return statearr_41553;
})();
var statearr_41554_41579 = state_41537__$1;
(statearr_41554_41579[(2)] = null);

(statearr_41554_41579[(1)] = (2));


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
});})(c__40679__auto__))
;
return ((function (switch__40567__auto__,c__40679__auto__){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_41558 = [null,null,null,null,null,null,null,null];
(statearr_41558[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_41558[(1)] = (1));

return statearr_41558;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_41537){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e41559){if((e41559 instanceof Object)){
var ex__40571__auto__ = e41559;
var statearr_41560_41580 = state_41537;
(statearr_41560_41580[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41581 = state_41537;
state_41537 = G__41581;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_41537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_41537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__))
})();
var state__40681__auto__ = (function (){var statearr_41561 = f__40680__auto__.call(null);
(statearr_41561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_41561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__))
);

return c__40679__auto__;
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
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_);
} else {
var m__37466__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_);
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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37466__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m,ch);
} else {
var m__37466__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m,ch);
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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m);
} else {
var m__37466__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41807 = (function (mult,ch,cs,meta41808){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41808 = meta41808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41809,meta41808__$1){
var self__ = this;
var _41809__$1 = this;
return (new cljs.core.async.t_cljs$core$async41807(self__.mult,self__.ch,self__.cs,meta41808__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41809){
var self__ = this;
var _41809__$1 = this;
return self__.meta41808;
});})(cs))
;

cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41807.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41807.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41808","meta41808",1042356643,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41807";

cljs.core.async.t_cljs$core$async41807.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async41807");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41807 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41807(mult__$1,ch__$1,cs__$1,meta41808){
return (new cljs.core.async.t_cljs$core$async41807(mult__$1,ch__$1,cs__$1,meta41808));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41807(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40679__auto___42032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___42032,cs,m,dchan,dctr,done){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___42032,cs,m,dchan,dctr,done){
return (function (state_41944){
var state_val_41945 = (state_41944[(1)]);
if((state_val_41945 === (7))){
var inst_41940 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_41946_42033 = state_41944__$1;
(statearr_41946_42033[(2)] = inst_41940);

(statearr_41946_42033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (20))){
var inst_41843 = (state_41944[(7)]);
var inst_41855 = cljs.core.first.call(null,inst_41843);
var inst_41856 = cljs.core.nth.call(null,inst_41855,(0),null);
var inst_41857 = cljs.core.nth.call(null,inst_41855,(1),null);
var state_41944__$1 = (function (){var statearr_41947 = state_41944;
(statearr_41947[(8)] = inst_41856);

return statearr_41947;
})();
if(cljs.core.truth_(inst_41857)){
var statearr_41948_42034 = state_41944__$1;
(statearr_41948_42034[(1)] = (22));

} else {
var statearr_41949_42035 = state_41944__$1;
(statearr_41949_42035[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (27))){
var inst_41892 = (state_41944[(9)]);
var inst_41812 = (state_41944[(10)]);
var inst_41887 = (state_41944[(11)]);
var inst_41885 = (state_41944[(12)]);
var inst_41892__$1 = cljs.core._nth.call(null,inst_41885,inst_41887);
var inst_41893 = cljs.core.async.put_BANG_.call(null,inst_41892__$1,inst_41812,done);
var state_41944__$1 = (function (){var statearr_41950 = state_41944;
(statearr_41950[(9)] = inst_41892__$1);

return statearr_41950;
})();
if(cljs.core.truth_(inst_41893)){
var statearr_41951_42036 = state_41944__$1;
(statearr_41951_42036[(1)] = (30));

} else {
var statearr_41952_42037 = state_41944__$1;
(statearr_41952_42037[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (1))){
var state_41944__$1 = state_41944;
var statearr_41953_42038 = state_41944__$1;
(statearr_41953_42038[(2)] = null);

(statearr_41953_42038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (24))){
var inst_41843 = (state_41944[(7)]);
var inst_41862 = (state_41944[(2)]);
var inst_41863 = cljs.core.next.call(null,inst_41843);
var inst_41821 = inst_41863;
var inst_41822 = null;
var inst_41823 = (0);
var inst_41824 = (0);
var state_41944__$1 = (function (){var statearr_41954 = state_41944;
(statearr_41954[(13)] = inst_41822);

(statearr_41954[(14)] = inst_41862);

(statearr_41954[(15)] = inst_41823);

(statearr_41954[(16)] = inst_41821);

(statearr_41954[(17)] = inst_41824);

return statearr_41954;
})();
var statearr_41955_42039 = state_41944__$1;
(statearr_41955_42039[(2)] = null);

(statearr_41955_42039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (39))){
var state_41944__$1 = state_41944;
var statearr_41959_42040 = state_41944__$1;
(statearr_41959_42040[(2)] = null);

(statearr_41959_42040[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (4))){
var inst_41812 = (state_41944[(10)]);
var inst_41812__$1 = (state_41944[(2)]);
var inst_41813 = (inst_41812__$1 == null);
var state_41944__$1 = (function (){var statearr_41960 = state_41944;
(statearr_41960[(10)] = inst_41812__$1);

return statearr_41960;
})();
if(cljs.core.truth_(inst_41813)){
var statearr_41961_42041 = state_41944__$1;
(statearr_41961_42041[(1)] = (5));

} else {
var statearr_41962_42042 = state_41944__$1;
(statearr_41962_42042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (15))){
var inst_41822 = (state_41944[(13)]);
var inst_41823 = (state_41944[(15)]);
var inst_41821 = (state_41944[(16)]);
var inst_41824 = (state_41944[(17)]);
var inst_41839 = (state_41944[(2)]);
var inst_41840 = (inst_41824 + (1));
var tmp41956 = inst_41822;
var tmp41957 = inst_41823;
var tmp41958 = inst_41821;
var inst_41821__$1 = tmp41958;
var inst_41822__$1 = tmp41956;
var inst_41823__$1 = tmp41957;
var inst_41824__$1 = inst_41840;
var state_41944__$1 = (function (){var statearr_41963 = state_41944;
(statearr_41963[(13)] = inst_41822__$1);

(statearr_41963[(15)] = inst_41823__$1);

(statearr_41963[(18)] = inst_41839);

(statearr_41963[(16)] = inst_41821__$1);

(statearr_41963[(17)] = inst_41824__$1);

return statearr_41963;
})();
var statearr_41964_42043 = state_41944__$1;
(statearr_41964_42043[(2)] = null);

(statearr_41964_42043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (21))){
var inst_41866 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_41968_42044 = state_41944__$1;
(statearr_41968_42044[(2)] = inst_41866);

(statearr_41968_42044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (31))){
var inst_41892 = (state_41944[(9)]);
var inst_41896 = done.call(null,null);
var inst_41897 = cljs.core.async.untap_STAR_.call(null,m,inst_41892);
var state_41944__$1 = (function (){var statearr_41969 = state_41944;
(statearr_41969[(19)] = inst_41896);

return statearr_41969;
})();
var statearr_41970_42045 = state_41944__$1;
(statearr_41970_42045[(2)] = inst_41897);

(statearr_41970_42045[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (32))){
var inst_41884 = (state_41944[(20)]);
var inst_41887 = (state_41944[(11)]);
var inst_41885 = (state_41944[(12)]);
var inst_41886 = (state_41944[(21)]);
var inst_41899 = (state_41944[(2)]);
var inst_41900 = (inst_41887 + (1));
var tmp41965 = inst_41884;
var tmp41966 = inst_41885;
var tmp41967 = inst_41886;
var inst_41884__$1 = tmp41965;
var inst_41885__$1 = tmp41966;
var inst_41886__$1 = tmp41967;
var inst_41887__$1 = inst_41900;
var state_41944__$1 = (function (){var statearr_41971 = state_41944;
(statearr_41971[(20)] = inst_41884__$1);

(statearr_41971[(11)] = inst_41887__$1);

(statearr_41971[(12)] = inst_41885__$1);

(statearr_41971[(21)] = inst_41886__$1);

(statearr_41971[(22)] = inst_41899);

return statearr_41971;
})();
var statearr_41972_42046 = state_41944__$1;
(statearr_41972_42046[(2)] = null);

(statearr_41972_42046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (40))){
var inst_41912 = (state_41944[(23)]);
var inst_41916 = done.call(null,null);
var inst_41917 = cljs.core.async.untap_STAR_.call(null,m,inst_41912);
var state_41944__$1 = (function (){var statearr_41973 = state_41944;
(statearr_41973[(24)] = inst_41916);

return statearr_41973;
})();
var statearr_41974_42047 = state_41944__$1;
(statearr_41974_42047[(2)] = inst_41917);

(statearr_41974_42047[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (33))){
var inst_41903 = (state_41944[(25)]);
var inst_41905 = cljs.core.chunked_seq_QMARK_.call(null,inst_41903);
var state_41944__$1 = state_41944;
if(inst_41905){
var statearr_41975_42048 = state_41944__$1;
(statearr_41975_42048[(1)] = (36));

} else {
var statearr_41976_42049 = state_41944__$1;
(statearr_41976_42049[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (13))){
var inst_41833 = (state_41944[(26)]);
var inst_41836 = cljs.core.async.close_BANG_.call(null,inst_41833);
var state_41944__$1 = state_41944;
var statearr_41977_42050 = state_41944__$1;
(statearr_41977_42050[(2)] = inst_41836);

(statearr_41977_42050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (22))){
var inst_41856 = (state_41944[(8)]);
var inst_41859 = cljs.core.async.close_BANG_.call(null,inst_41856);
var state_41944__$1 = state_41944;
var statearr_41978_42051 = state_41944__$1;
(statearr_41978_42051[(2)] = inst_41859);

(statearr_41978_42051[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (36))){
var inst_41903 = (state_41944[(25)]);
var inst_41907 = cljs.core.chunk_first.call(null,inst_41903);
var inst_41908 = cljs.core.chunk_rest.call(null,inst_41903);
var inst_41909 = cljs.core.count.call(null,inst_41907);
var inst_41884 = inst_41908;
var inst_41885 = inst_41907;
var inst_41886 = inst_41909;
var inst_41887 = (0);
var state_41944__$1 = (function (){var statearr_41979 = state_41944;
(statearr_41979[(20)] = inst_41884);

(statearr_41979[(11)] = inst_41887);

(statearr_41979[(12)] = inst_41885);

(statearr_41979[(21)] = inst_41886);

return statearr_41979;
})();
var statearr_41980_42052 = state_41944__$1;
(statearr_41980_42052[(2)] = null);

(statearr_41980_42052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (41))){
var inst_41903 = (state_41944[(25)]);
var inst_41919 = (state_41944[(2)]);
var inst_41920 = cljs.core.next.call(null,inst_41903);
var inst_41884 = inst_41920;
var inst_41885 = null;
var inst_41886 = (0);
var inst_41887 = (0);
var state_41944__$1 = (function (){var statearr_41981 = state_41944;
(statearr_41981[(27)] = inst_41919);

(statearr_41981[(20)] = inst_41884);

(statearr_41981[(11)] = inst_41887);

(statearr_41981[(12)] = inst_41885);

(statearr_41981[(21)] = inst_41886);

return statearr_41981;
})();
var statearr_41982_42053 = state_41944__$1;
(statearr_41982_42053[(2)] = null);

(statearr_41982_42053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (43))){
var state_41944__$1 = state_41944;
var statearr_41983_42054 = state_41944__$1;
(statearr_41983_42054[(2)] = null);

(statearr_41983_42054[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (29))){
var inst_41928 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_41984_42055 = state_41944__$1;
(statearr_41984_42055[(2)] = inst_41928);

(statearr_41984_42055[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (44))){
var inst_41937 = (state_41944[(2)]);
var state_41944__$1 = (function (){var statearr_41985 = state_41944;
(statearr_41985[(28)] = inst_41937);

return statearr_41985;
})();
var statearr_41986_42056 = state_41944__$1;
(statearr_41986_42056[(2)] = null);

(statearr_41986_42056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (6))){
var inst_41876 = (state_41944[(29)]);
var inst_41875 = cljs.core.deref.call(null,cs);
var inst_41876__$1 = cljs.core.keys.call(null,inst_41875);
var inst_41877 = cljs.core.count.call(null,inst_41876__$1);
var inst_41878 = cljs.core.reset_BANG_.call(null,dctr,inst_41877);
var inst_41883 = cljs.core.seq.call(null,inst_41876__$1);
var inst_41884 = inst_41883;
var inst_41885 = null;
var inst_41886 = (0);
var inst_41887 = (0);
var state_41944__$1 = (function (){var statearr_41987 = state_41944;
(statearr_41987[(20)] = inst_41884);

(statearr_41987[(29)] = inst_41876__$1);

(statearr_41987[(11)] = inst_41887);

(statearr_41987[(12)] = inst_41885);

(statearr_41987[(21)] = inst_41886);

(statearr_41987[(30)] = inst_41878);

return statearr_41987;
})();
var statearr_41988_42057 = state_41944__$1;
(statearr_41988_42057[(2)] = null);

(statearr_41988_42057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (28))){
var inst_41884 = (state_41944[(20)]);
var inst_41903 = (state_41944[(25)]);
var inst_41903__$1 = cljs.core.seq.call(null,inst_41884);
var state_41944__$1 = (function (){var statearr_41989 = state_41944;
(statearr_41989[(25)] = inst_41903__$1);

return statearr_41989;
})();
if(inst_41903__$1){
var statearr_41990_42058 = state_41944__$1;
(statearr_41990_42058[(1)] = (33));

} else {
var statearr_41991_42059 = state_41944__$1;
(statearr_41991_42059[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (25))){
var inst_41887 = (state_41944[(11)]);
var inst_41886 = (state_41944[(21)]);
var inst_41889 = (inst_41887 < inst_41886);
var inst_41890 = inst_41889;
var state_41944__$1 = state_41944;
if(cljs.core.truth_(inst_41890)){
var statearr_41992_42060 = state_41944__$1;
(statearr_41992_42060[(1)] = (27));

} else {
var statearr_41993_42061 = state_41944__$1;
(statearr_41993_42061[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (34))){
var state_41944__$1 = state_41944;
var statearr_41994_42062 = state_41944__$1;
(statearr_41994_42062[(2)] = null);

(statearr_41994_42062[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (17))){
var state_41944__$1 = state_41944;
var statearr_41995_42063 = state_41944__$1;
(statearr_41995_42063[(2)] = null);

(statearr_41995_42063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (3))){
var inst_41942 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41944__$1,inst_41942);
} else {
if((state_val_41945 === (12))){
var inst_41871 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_41996_42064 = state_41944__$1;
(statearr_41996_42064[(2)] = inst_41871);

(statearr_41996_42064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (2))){
var state_41944__$1 = state_41944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41944__$1,(4),ch);
} else {
if((state_val_41945 === (23))){
var state_41944__$1 = state_41944;
var statearr_41997_42065 = state_41944__$1;
(statearr_41997_42065[(2)] = null);

(statearr_41997_42065[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (35))){
var inst_41926 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_41998_42066 = state_41944__$1;
(statearr_41998_42066[(2)] = inst_41926);

(statearr_41998_42066[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (19))){
var inst_41843 = (state_41944[(7)]);
var inst_41847 = cljs.core.chunk_first.call(null,inst_41843);
var inst_41848 = cljs.core.chunk_rest.call(null,inst_41843);
var inst_41849 = cljs.core.count.call(null,inst_41847);
var inst_41821 = inst_41848;
var inst_41822 = inst_41847;
var inst_41823 = inst_41849;
var inst_41824 = (0);
var state_41944__$1 = (function (){var statearr_41999 = state_41944;
(statearr_41999[(13)] = inst_41822);

(statearr_41999[(15)] = inst_41823);

(statearr_41999[(16)] = inst_41821);

(statearr_41999[(17)] = inst_41824);

return statearr_41999;
})();
var statearr_42000_42067 = state_41944__$1;
(statearr_42000_42067[(2)] = null);

(statearr_42000_42067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (11))){
var inst_41843 = (state_41944[(7)]);
var inst_41821 = (state_41944[(16)]);
var inst_41843__$1 = cljs.core.seq.call(null,inst_41821);
var state_41944__$1 = (function (){var statearr_42001 = state_41944;
(statearr_42001[(7)] = inst_41843__$1);

return statearr_42001;
})();
if(inst_41843__$1){
var statearr_42002_42068 = state_41944__$1;
(statearr_42002_42068[(1)] = (16));

} else {
var statearr_42003_42069 = state_41944__$1;
(statearr_42003_42069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (9))){
var inst_41873 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_42004_42070 = state_41944__$1;
(statearr_42004_42070[(2)] = inst_41873);

(statearr_42004_42070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (5))){
var inst_41819 = cljs.core.deref.call(null,cs);
var inst_41820 = cljs.core.seq.call(null,inst_41819);
var inst_41821 = inst_41820;
var inst_41822 = null;
var inst_41823 = (0);
var inst_41824 = (0);
var state_41944__$1 = (function (){var statearr_42005 = state_41944;
(statearr_42005[(13)] = inst_41822);

(statearr_42005[(15)] = inst_41823);

(statearr_42005[(16)] = inst_41821);

(statearr_42005[(17)] = inst_41824);

return statearr_42005;
})();
var statearr_42006_42071 = state_41944__$1;
(statearr_42006_42071[(2)] = null);

(statearr_42006_42071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (14))){
var state_41944__$1 = state_41944;
var statearr_42007_42072 = state_41944__$1;
(statearr_42007_42072[(2)] = null);

(statearr_42007_42072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (45))){
var inst_41934 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_42008_42073 = state_41944__$1;
(statearr_42008_42073[(2)] = inst_41934);

(statearr_42008_42073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (26))){
var inst_41876 = (state_41944[(29)]);
var inst_41930 = (state_41944[(2)]);
var inst_41931 = cljs.core.seq.call(null,inst_41876);
var state_41944__$1 = (function (){var statearr_42009 = state_41944;
(statearr_42009[(31)] = inst_41930);

return statearr_42009;
})();
if(inst_41931){
var statearr_42010_42074 = state_41944__$1;
(statearr_42010_42074[(1)] = (42));

} else {
var statearr_42011_42075 = state_41944__$1;
(statearr_42011_42075[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (16))){
var inst_41843 = (state_41944[(7)]);
var inst_41845 = cljs.core.chunked_seq_QMARK_.call(null,inst_41843);
var state_41944__$1 = state_41944;
if(inst_41845){
var statearr_42012_42076 = state_41944__$1;
(statearr_42012_42076[(1)] = (19));

} else {
var statearr_42013_42077 = state_41944__$1;
(statearr_42013_42077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (38))){
var inst_41923 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_42014_42078 = state_41944__$1;
(statearr_42014_42078[(2)] = inst_41923);

(statearr_42014_42078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (30))){
var state_41944__$1 = state_41944;
var statearr_42015_42079 = state_41944__$1;
(statearr_42015_42079[(2)] = null);

(statearr_42015_42079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (10))){
var inst_41822 = (state_41944[(13)]);
var inst_41824 = (state_41944[(17)]);
var inst_41832 = cljs.core._nth.call(null,inst_41822,inst_41824);
var inst_41833 = cljs.core.nth.call(null,inst_41832,(0),null);
var inst_41834 = cljs.core.nth.call(null,inst_41832,(1),null);
var state_41944__$1 = (function (){var statearr_42016 = state_41944;
(statearr_42016[(26)] = inst_41833);

return statearr_42016;
})();
if(cljs.core.truth_(inst_41834)){
var statearr_42017_42080 = state_41944__$1;
(statearr_42017_42080[(1)] = (13));

} else {
var statearr_42018_42081 = state_41944__$1;
(statearr_42018_42081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (18))){
var inst_41869 = (state_41944[(2)]);
var state_41944__$1 = state_41944;
var statearr_42019_42082 = state_41944__$1;
(statearr_42019_42082[(2)] = inst_41869);

(statearr_42019_42082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (42))){
var state_41944__$1 = state_41944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41944__$1,(45),dchan);
} else {
if((state_val_41945 === (37))){
var inst_41812 = (state_41944[(10)]);
var inst_41903 = (state_41944[(25)]);
var inst_41912 = (state_41944[(23)]);
var inst_41912__$1 = cljs.core.first.call(null,inst_41903);
var inst_41913 = cljs.core.async.put_BANG_.call(null,inst_41912__$1,inst_41812,done);
var state_41944__$1 = (function (){var statearr_42020 = state_41944;
(statearr_42020[(23)] = inst_41912__$1);

return statearr_42020;
})();
if(cljs.core.truth_(inst_41913)){
var statearr_42021_42083 = state_41944__$1;
(statearr_42021_42083[(1)] = (39));

} else {
var statearr_42022_42084 = state_41944__$1;
(statearr_42022_42084[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41945 === (8))){
var inst_41823 = (state_41944[(15)]);
var inst_41824 = (state_41944[(17)]);
var inst_41826 = (inst_41824 < inst_41823);
var inst_41827 = inst_41826;
var state_41944__$1 = state_41944;
if(cljs.core.truth_(inst_41827)){
var statearr_42023_42085 = state_41944__$1;
(statearr_42023_42085[(1)] = (10));

} else {
var statearr_42024_42086 = state_41944__$1;
(statearr_42024_42086[(1)] = (11));

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
});})(c__40679__auto___42032,cs,m,dchan,dctr,done))
;
return ((function (switch__40567__auto__,c__40679__auto___42032,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40568__auto__ = null;
var cljs$core$async$mult_$_state_machine__40568__auto____0 = (function (){
var statearr_42028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42028[(0)] = cljs$core$async$mult_$_state_machine__40568__auto__);

(statearr_42028[(1)] = (1));

return statearr_42028;
});
var cljs$core$async$mult_$_state_machine__40568__auto____1 = (function (state_41944){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_41944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e42029){if((e42029 instanceof Object)){
var ex__40571__auto__ = e42029;
var statearr_42030_42087 = state_41944;
(statearr_42030_42087[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42088 = state_41944;
state_41944 = G__42088;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40568__auto__ = function(state_41944){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40568__auto____1.call(this,state_41944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40568__auto____0;
cljs$core$async$mult_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40568__auto____1;
return cljs$core$async$mult_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___42032,cs,m,dchan,dctr,done))
})();
var state__40681__auto__ = (function (){var statearr_42031 = f__40680__auto__.call(null);
(statearr_42031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___42032);

return statearr_42031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___42032,cs,m,dchan,dctr,done))
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
var args42089 = [];
var len__37877__auto___42092 = arguments.length;
var i__37878__auto___42093 = (0);
while(true){
if((i__37878__auto___42093 < len__37877__auto___42092)){
args42089.push((arguments[i__37878__auto___42093]));

var G__42094 = (i__37878__auto___42093 + (1));
i__37878__auto___42093 = G__42094;
continue;
} else {
}
break;
}

var G__42091 = args42089.length;
switch (G__42091) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42089.length)].join('')));

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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m,ch);
} else {
var m__37466__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m,ch);
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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m,ch);
} else {
var m__37466__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m,ch);
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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m);
} else {
var m__37466__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m);
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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m,state_map);
} else {
var m__37466__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m,state_map);
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
var x__37465__auto__ = (((m == null))?null:m);
var m__37466__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,m,mode);
} else {
var m__37466__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___42106 = arguments.length;
var i__37878__auto___42107 = (0);
while(true){
if((i__37878__auto___42107 < len__37877__auto___42106)){
args__37884__auto__.push((arguments[i__37878__auto___42107]));

var G__42108 = (i__37878__auto___42107 + (1));
i__37878__auto___42107 = G__42108;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((3) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42100){
var map__42101 = p__42100;
var map__42101__$1 = ((((!((map__42101 == null)))?((((map__42101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42101):map__42101);
var opts = map__42101__$1;
var statearr_42103_42109 = state;
(statearr_42103_42109[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42101,map__42101__$1,opts){
return (function (val){
var statearr_42104_42110 = state;
(statearr_42104_42110[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42101,map__42101__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42105_42111 = state;
(statearr_42105_42111[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42096){
var G__42097 = cljs.core.first.call(null,seq42096);
var seq42096__$1 = cljs.core.next.call(null,seq42096);
var G__42098 = cljs.core.first.call(null,seq42096__$1);
var seq42096__$2 = cljs.core.next.call(null,seq42096__$1);
var G__42099 = cljs.core.first.call(null,seq42096__$2);
var seq42096__$3 = cljs.core.next.call(null,seq42096__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42097,G__42098,G__42099,seq42096__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42277 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42278){
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
this.meta42278 = meta42278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42279,meta42278__$1){
var self__ = this;
var _42279__$1 = this;
return (new cljs.core.async.t_cljs$core$async42277(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42278__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42279){
var self__ = this;
var _42279__$1 = this;
return self__.meta42278;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42277.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42278","meta42278",-1745591834,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42277";

cljs.core.async.t_cljs$core$async42277.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42277");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42277 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42277(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42278){
return (new cljs.core.async.t_cljs$core$async42277(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42278));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42277(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40679__auto___42442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___42442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___42442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42379){
var state_val_42380 = (state_42379[(1)]);
if((state_val_42380 === (7))){
var inst_42295 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42381_42443 = state_42379__$1;
(statearr_42381_42443[(2)] = inst_42295);

(statearr_42381_42443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (20))){
var inst_42307 = (state_42379[(7)]);
var state_42379__$1 = state_42379;
var statearr_42382_42444 = state_42379__$1;
(statearr_42382_42444[(2)] = inst_42307);

(statearr_42382_42444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (27))){
var state_42379__$1 = state_42379;
var statearr_42383_42445 = state_42379__$1;
(statearr_42383_42445[(2)] = null);

(statearr_42383_42445[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (1))){
var inst_42283 = (state_42379[(8)]);
var inst_42283__$1 = calc_state.call(null);
var inst_42285 = (inst_42283__$1 == null);
var inst_42286 = cljs.core.not.call(null,inst_42285);
var state_42379__$1 = (function (){var statearr_42384 = state_42379;
(statearr_42384[(8)] = inst_42283__$1);

return statearr_42384;
})();
if(inst_42286){
var statearr_42385_42446 = state_42379__$1;
(statearr_42385_42446[(1)] = (2));

} else {
var statearr_42386_42447 = state_42379__$1;
(statearr_42386_42447[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (24))){
var inst_42330 = (state_42379[(9)]);
var inst_42339 = (state_42379[(10)]);
var inst_42353 = (state_42379[(11)]);
var inst_42353__$1 = inst_42330.call(null,inst_42339);
var state_42379__$1 = (function (){var statearr_42387 = state_42379;
(statearr_42387[(11)] = inst_42353__$1);

return statearr_42387;
})();
if(cljs.core.truth_(inst_42353__$1)){
var statearr_42388_42448 = state_42379__$1;
(statearr_42388_42448[(1)] = (29));

} else {
var statearr_42389_42449 = state_42379__$1;
(statearr_42389_42449[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (4))){
var inst_42298 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42298)){
var statearr_42390_42450 = state_42379__$1;
(statearr_42390_42450[(1)] = (8));

} else {
var statearr_42391_42451 = state_42379__$1;
(statearr_42391_42451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (15))){
var inst_42324 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42324)){
var statearr_42392_42452 = state_42379__$1;
(statearr_42392_42452[(1)] = (19));

} else {
var statearr_42393_42453 = state_42379__$1;
(statearr_42393_42453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (21))){
var inst_42329 = (state_42379[(12)]);
var inst_42329__$1 = (state_42379[(2)]);
var inst_42330 = cljs.core.get.call(null,inst_42329__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42331 = cljs.core.get.call(null,inst_42329__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42332 = cljs.core.get.call(null,inst_42329__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42379__$1 = (function (){var statearr_42394 = state_42379;
(statearr_42394[(13)] = inst_42331);

(statearr_42394[(9)] = inst_42330);

(statearr_42394[(12)] = inst_42329__$1);

return statearr_42394;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42379__$1,(22),inst_42332);
} else {
if((state_val_42380 === (31))){
var inst_42361 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42361)){
var statearr_42395_42454 = state_42379__$1;
(statearr_42395_42454[(1)] = (32));

} else {
var statearr_42396_42455 = state_42379__$1;
(statearr_42396_42455[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (32))){
var inst_42338 = (state_42379[(14)]);
var state_42379__$1 = state_42379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42379__$1,(35),out,inst_42338);
} else {
if((state_val_42380 === (33))){
var inst_42329 = (state_42379[(12)]);
var inst_42307 = inst_42329;
var state_42379__$1 = (function (){var statearr_42397 = state_42379;
(statearr_42397[(7)] = inst_42307);

return statearr_42397;
})();
var statearr_42398_42456 = state_42379__$1;
(statearr_42398_42456[(2)] = null);

(statearr_42398_42456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (13))){
var inst_42307 = (state_42379[(7)]);
var inst_42314 = inst_42307.cljs$lang$protocol_mask$partition0$;
var inst_42315 = (inst_42314 & (64));
var inst_42316 = inst_42307.cljs$core$ISeq$;
var inst_42317 = (inst_42315) || (inst_42316);
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42317)){
var statearr_42399_42457 = state_42379__$1;
(statearr_42399_42457[(1)] = (16));

} else {
var statearr_42400_42458 = state_42379__$1;
(statearr_42400_42458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (22))){
var inst_42338 = (state_42379[(14)]);
var inst_42339 = (state_42379[(10)]);
var inst_42337 = (state_42379[(2)]);
var inst_42338__$1 = cljs.core.nth.call(null,inst_42337,(0),null);
var inst_42339__$1 = cljs.core.nth.call(null,inst_42337,(1),null);
var inst_42340 = (inst_42338__$1 == null);
var inst_42341 = cljs.core._EQ_.call(null,inst_42339__$1,change);
var inst_42342 = (inst_42340) || (inst_42341);
var state_42379__$1 = (function (){var statearr_42401 = state_42379;
(statearr_42401[(14)] = inst_42338__$1);

(statearr_42401[(10)] = inst_42339__$1);

return statearr_42401;
})();
if(cljs.core.truth_(inst_42342)){
var statearr_42402_42459 = state_42379__$1;
(statearr_42402_42459[(1)] = (23));

} else {
var statearr_42403_42460 = state_42379__$1;
(statearr_42403_42460[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (36))){
var inst_42329 = (state_42379[(12)]);
var inst_42307 = inst_42329;
var state_42379__$1 = (function (){var statearr_42404 = state_42379;
(statearr_42404[(7)] = inst_42307);

return statearr_42404;
})();
var statearr_42405_42461 = state_42379__$1;
(statearr_42405_42461[(2)] = null);

(statearr_42405_42461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (29))){
var inst_42353 = (state_42379[(11)]);
var state_42379__$1 = state_42379;
var statearr_42406_42462 = state_42379__$1;
(statearr_42406_42462[(2)] = inst_42353);

(statearr_42406_42462[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (6))){
var state_42379__$1 = state_42379;
var statearr_42407_42463 = state_42379__$1;
(statearr_42407_42463[(2)] = false);

(statearr_42407_42463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (28))){
var inst_42349 = (state_42379[(2)]);
var inst_42350 = calc_state.call(null);
var inst_42307 = inst_42350;
var state_42379__$1 = (function (){var statearr_42408 = state_42379;
(statearr_42408[(15)] = inst_42349);

(statearr_42408[(7)] = inst_42307);

return statearr_42408;
})();
var statearr_42409_42464 = state_42379__$1;
(statearr_42409_42464[(2)] = null);

(statearr_42409_42464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (25))){
var inst_42375 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42410_42465 = state_42379__$1;
(statearr_42410_42465[(2)] = inst_42375);

(statearr_42410_42465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (34))){
var inst_42373 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42411_42466 = state_42379__$1;
(statearr_42411_42466[(2)] = inst_42373);

(statearr_42411_42466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (17))){
var state_42379__$1 = state_42379;
var statearr_42412_42467 = state_42379__$1;
(statearr_42412_42467[(2)] = false);

(statearr_42412_42467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (3))){
var state_42379__$1 = state_42379;
var statearr_42413_42468 = state_42379__$1;
(statearr_42413_42468[(2)] = false);

(statearr_42413_42468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (12))){
var inst_42377 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42379__$1,inst_42377);
} else {
if((state_val_42380 === (2))){
var inst_42283 = (state_42379[(8)]);
var inst_42288 = inst_42283.cljs$lang$protocol_mask$partition0$;
var inst_42289 = (inst_42288 & (64));
var inst_42290 = inst_42283.cljs$core$ISeq$;
var inst_42291 = (inst_42289) || (inst_42290);
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42291)){
var statearr_42414_42469 = state_42379__$1;
(statearr_42414_42469[(1)] = (5));

} else {
var statearr_42415_42470 = state_42379__$1;
(statearr_42415_42470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (23))){
var inst_42338 = (state_42379[(14)]);
var inst_42344 = (inst_42338 == null);
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42344)){
var statearr_42416_42471 = state_42379__$1;
(statearr_42416_42471[(1)] = (26));

} else {
var statearr_42417_42472 = state_42379__$1;
(statearr_42417_42472[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (35))){
var inst_42364 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42364)){
var statearr_42418_42473 = state_42379__$1;
(statearr_42418_42473[(1)] = (36));

} else {
var statearr_42419_42474 = state_42379__$1;
(statearr_42419_42474[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (19))){
var inst_42307 = (state_42379[(7)]);
var inst_42326 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42307);
var state_42379__$1 = state_42379;
var statearr_42420_42475 = state_42379__$1;
(statearr_42420_42475[(2)] = inst_42326);

(statearr_42420_42475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (11))){
var inst_42307 = (state_42379[(7)]);
var inst_42311 = (inst_42307 == null);
var inst_42312 = cljs.core.not.call(null,inst_42311);
var state_42379__$1 = state_42379;
if(inst_42312){
var statearr_42421_42476 = state_42379__$1;
(statearr_42421_42476[(1)] = (13));

} else {
var statearr_42422_42477 = state_42379__$1;
(statearr_42422_42477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (9))){
var inst_42283 = (state_42379[(8)]);
var state_42379__$1 = state_42379;
var statearr_42423_42478 = state_42379__$1;
(statearr_42423_42478[(2)] = inst_42283);

(statearr_42423_42478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (5))){
var state_42379__$1 = state_42379;
var statearr_42424_42479 = state_42379__$1;
(statearr_42424_42479[(2)] = true);

(statearr_42424_42479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (14))){
var state_42379__$1 = state_42379;
var statearr_42425_42480 = state_42379__$1;
(statearr_42425_42480[(2)] = false);

(statearr_42425_42480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (26))){
var inst_42339 = (state_42379[(10)]);
var inst_42346 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42339);
var state_42379__$1 = state_42379;
var statearr_42426_42481 = state_42379__$1;
(statearr_42426_42481[(2)] = inst_42346);

(statearr_42426_42481[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (16))){
var state_42379__$1 = state_42379;
var statearr_42427_42482 = state_42379__$1;
(statearr_42427_42482[(2)] = true);

(statearr_42427_42482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (38))){
var inst_42369 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42428_42483 = state_42379__$1;
(statearr_42428_42483[(2)] = inst_42369);

(statearr_42428_42483[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (30))){
var inst_42331 = (state_42379[(13)]);
var inst_42330 = (state_42379[(9)]);
var inst_42339 = (state_42379[(10)]);
var inst_42356 = cljs.core.empty_QMARK_.call(null,inst_42330);
var inst_42357 = inst_42331.call(null,inst_42339);
var inst_42358 = cljs.core.not.call(null,inst_42357);
var inst_42359 = (inst_42356) && (inst_42358);
var state_42379__$1 = state_42379;
var statearr_42429_42484 = state_42379__$1;
(statearr_42429_42484[(2)] = inst_42359);

(statearr_42429_42484[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (10))){
var inst_42283 = (state_42379[(8)]);
var inst_42303 = (state_42379[(2)]);
var inst_42304 = cljs.core.get.call(null,inst_42303,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42305 = cljs.core.get.call(null,inst_42303,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42306 = cljs.core.get.call(null,inst_42303,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42307 = inst_42283;
var state_42379__$1 = (function (){var statearr_42430 = state_42379;
(statearr_42430[(16)] = inst_42306);

(statearr_42430[(7)] = inst_42307);

(statearr_42430[(17)] = inst_42304);

(statearr_42430[(18)] = inst_42305);

return statearr_42430;
})();
var statearr_42431_42485 = state_42379__$1;
(statearr_42431_42485[(2)] = null);

(statearr_42431_42485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (18))){
var inst_42321 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42432_42486 = state_42379__$1;
(statearr_42432_42486[(2)] = inst_42321);

(statearr_42432_42486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (37))){
var state_42379__$1 = state_42379;
var statearr_42433_42487 = state_42379__$1;
(statearr_42433_42487[(2)] = null);

(statearr_42433_42487[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (8))){
var inst_42283 = (state_42379[(8)]);
var inst_42300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42283);
var state_42379__$1 = state_42379;
var statearr_42434_42488 = state_42379__$1;
(statearr_42434_42488[(2)] = inst_42300);

(statearr_42434_42488[(1)] = (10));


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
});})(c__40679__auto___42442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40567__auto__,c__40679__auto___42442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40568__auto__ = null;
var cljs$core$async$mix_$_state_machine__40568__auto____0 = (function (){
var statearr_42438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42438[(0)] = cljs$core$async$mix_$_state_machine__40568__auto__);

(statearr_42438[(1)] = (1));

return statearr_42438;
});
var cljs$core$async$mix_$_state_machine__40568__auto____1 = (function (state_42379){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_42379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e42439){if((e42439 instanceof Object)){
var ex__40571__auto__ = e42439;
var statearr_42440_42489 = state_42379;
(statearr_42440_42489[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42490 = state_42379;
state_42379 = G__42490;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40568__auto__ = function(state_42379){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40568__auto____1.call(this,state_42379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40568__auto____0;
cljs$core$async$mix_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40568__auto____1;
return cljs$core$async$mix_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___42442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40681__auto__ = (function (){var statearr_42441 = f__40680__auto__.call(null);
(statearr_42441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___42442);

return statearr_42441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___42442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37465__auto__ = (((p == null))?null:p);
var m__37466__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37466__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37465__auto__ = (((p == null))?null:p);
var m__37466__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,p,v,ch);
} else {
var m__37466__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42491 = [];
var len__37877__auto___42494 = arguments.length;
var i__37878__auto___42495 = (0);
while(true){
if((i__37878__auto___42495 < len__37877__auto___42494)){
args42491.push((arguments[i__37878__auto___42495]));

var G__42496 = (i__37878__auto___42495 + (1));
i__37878__auto___42495 = G__42496;
continue;
} else {
}
break;
}

var G__42493 = args42491.length;
switch (G__42493) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42491.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37465__auto__ = (((p == null))?null:p);
var m__37466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,p);
} else {
var m__37466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,p);
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
var x__37465__auto__ = (((p == null))?null:p);
var m__37466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,p,v);
} else {
var m__37466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,p,v);
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
var args42499 = [];
var len__37877__auto___42624 = arguments.length;
var i__37878__auto___42625 = (0);
while(true){
if((i__37878__auto___42625 < len__37877__auto___42624)){
args42499.push((arguments[i__37878__auto___42625]));

var G__42626 = (i__37878__auto___42625 + (1));
i__37878__auto___42625 = G__42626;
continue;
} else {
}
break;
}

var G__42501 = args42499.length;
switch (G__42501) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42499.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36802__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36802__auto__,mults){
return (function (p1__42498_SHARP_){
if(cljs.core.truth_(p1__42498_SHARP_.call(null,topic))){
return p1__42498_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42498_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36802__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42502 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42503){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42503 = meta42503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42504,meta42503__$1){
var self__ = this;
var _42504__$1 = this;
return (new cljs.core.async.t_cljs$core$async42502(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42503__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42504){
var self__ = this;
var _42504__$1 = this;
return self__.meta42503;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42502.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42503","meta42503",895628741,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42502";

cljs.core.async.t_cljs$core$async42502.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42502");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42502 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42503){
return (new cljs.core.async.t_cljs$core$async42502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42503));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42502(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40679__auto___42628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___42628,mults,ensure_mult,p){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___42628,mults,ensure_mult,p){
return (function (state_42576){
var state_val_42577 = (state_42576[(1)]);
if((state_val_42577 === (7))){
var inst_42572 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
var statearr_42578_42629 = state_42576__$1;
(statearr_42578_42629[(2)] = inst_42572);

(statearr_42578_42629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (20))){
var state_42576__$1 = state_42576;
var statearr_42579_42630 = state_42576__$1;
(statearr_42579_42630[(2)] = null);

(statearr_42579_42630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (1))){
var state_42576__$1 = state_42576;
var statearr_42580_42631 = state_42576__$1;
(statearr_42580_42631[(2)] = null);

(statearr_42580_42631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (24))){
var inst_42555 = (state_42576[(7)]);
var inst_42564 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42555);
var state_42576__$1 = state_42576;
var statearr_42581_42632 = state_42576__$1;
(statearr_42581_42632[(2)] = inst_42564);

(statearr_42581_42632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (4))){
var inst_42507 = (state_42576[(8)]);
var inst_42507__$1 = (state_42576[(2)]);
var inst_42508 = (inst_42507__$1 == null);
var state_42576__$1 = (function (){var statearr_42582 = state_42576;
(statearr_42582[(8)] = inst_42507__$1);

return statearr_42582;
})();
if(cljs.core.truth_(inst_42508)){
var statearr_42583_42633 = state_42576__$1;
(statearr_42583_42633[(1)] = (5));

} else {
var statearr_42584_42634 = state_42576__$1;
(statearr_42584_42634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (15))){
var inst_42549 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
var statearr_42585_42635 = state_42576__$1;
(statearr_42585_42635[(2)] = inst_42549);

(statearr_42585_42635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (21))){
var inst_42569 = (state_42576[(2)]);
var state_42576__$1 = (function (){var statearr_42586 = state_42576;
(statearr_42586[(9)] = inst_42569);

return statearr_42586;
})();
var statearr_42587_42636 = state_42576__$1;
(statearr_42587_42636[(2)] = null);

(statearr_42587_42636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (13))){
var inst_42531 = (state_42576[(10)]);
var inst_42533 = cljs.core.chunked_seq_QMARK_.call(null,inst_42531);
var state_42576__$1 = state_42576;
if(inst_42533){
var statearr_42588_42637 = state_42576__$1;
(statearr_42588_42637[(1)] = (16));

} else {
var statearr_42589_42638 = state_42576__$1;
(statearr_42589_42638[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (22))){
var inst_42561 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
if(cljs.core.truth_(inst_42561)){
var statearr_42590_42639 = state_42576__$1;
(statearr_42590_42639[(1)] = (23));

} else {
var statearr_42591_42640 = state_42576__$1;
(statearr_42591_42640[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (6))){
var inst_42507 = (state_42576[(8)]);
var inst_42555 = (state_42576[(7)]);
var inst_42557 = (state_42576[(11)]);
var inst_42555__$1 = topic_fn.call(null,inst_42507);
var inst_42556 = cljs.core.deref.call(null,mults);
var inst_42557__$1 = cljs.core.get.call(null,inst_42556,inst_42555__$1);
var state_42576__$1 = (function (){var statearr_42592 = state_42576;
(statearr_42592[(7)] = inst_42555__$1);

(statearr_42592[(11)] = inst_42557__$1);

return statearr_42592;
})();
if(cljs.core.truth_(inst_42557__$1)){
var statearr_42593_42641 = state_42576__$1;
(statearr_42593_42641[(1)] = (19));

} else {
var statearr_42594_42642 = state_42576__$1;
(statearr_42594_42642[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (25))){
var inst_42566 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
var statearr_42595_42643 = state_42576__$1;
(statearr_42595_42643[(2)] = inst_42566);

(statearr_42595_42643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (17))){
var inst_42531 = (state_42576[(10)]);
var inst_42540 = cljs.core.first.call(null,inst_42531);
var inst_42541 = cljs.core.async.muxch_STAR_.call(null,inst_42540);
var inst_42542 = cljs.core.async.close_BANG_.call(null,inst_42541);
var inst_42543 = cljs.core.next.call(null,inst_42531);
var inst_42517 = inst_42543;
var inst_42518 = null;
var inst_42519 = (0);
var inst_42520 = (0);
var state_42576__$1 = (function (){var statearr_42596 = state_42576;
(statearr_42596[(12)] = inst_42518);

(statearr_42596[(13)] = inst_42542);

(statearr_42596[(14)] = inst_42520);

(statearr_42596[(15)] = inst_42519);

(statearr_42596[(16)] = inst_42517);

return statearr_42596;
})();
var statearr_42597_42644 = state_42576__$1;
(statearr_42597_42644[(2)] = null);

(statearr_42597_42644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (3))){
var inst_42574 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42576__$1,inst_42574);
} else {
if((state_val_42577 === (12))){
var inst_42551 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
var statearr_42598_42645 = state_42576__$1;
(statearr_42598_42645[(2)] = inst_42551);

(statearr_42598_42645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (2))){
var state_42576__$1 = state_42576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42576__$1,(4),ch);
} else {
if((state_val_42577 === (23))){
var state_42576__$1 = state_42576;
var statearr_42599_42646 = state_42576__$1;
(statearr_42599_42646[(2)] = null);

(statearr_42599_42646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (19))){
var inst_42507 = (state_42576[(8)]);
var inst_42557 = (state_42576[(11)]);
var inst_42559 = cljs.core.async.muxch_STAR_.call(null,inst_42557);
var state_42576__$1 = state_42576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42576__$1,(22),inst_42559,inst_42507);
} else {
if((state_val_42577 === (11))){
var inst_42531 = (state_42576[(10)]);
var inst_42517 = (state_42576[(16)]);
var inst_42531__$1 = cljs.core.seq.call(null,inst_42517);
var state_42576__$1 = (function (){var statearr_42600 = state_42576;
(statearr_42600[(10)] = inst_42531__$1);

return statearr_42600;
})();
if(inst_42531__$1){
var statearr_42601_42647 = state_42576__$1;
(statearr_42601_42647[(1)] = (13));

} else {
var statearr_42602_42648 = state_42576__$1;
(statearr_42602_42648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (9))){
var inst_42553 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
var statearr_42603_42649 = state_42576__$1;
(statearr_42603_42649[(2)] = inst_42553);

(statearr_42603_42649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (5))){
var inst_42514 = cljs.core.deref.call(null,mults);
var inst_42515 = cljs.core.vals.call(null,inst_42514);
var inst_42516 = cljs.core.seq.call(null,inst_42515);
var inst_42517 = inst_42516;
var inst_42518 = null;
var inst_42519 = (0);
var inst_42520 = (0);
var state_42576__$1 = (function (){var statearr_42604 = state_42576;
(statearr_42604[(12)] = inst_42518);

(statearr_42604[(14)] = inst_42520);

(statearr_42604[(15)] = inst_42519);

(statearr_42604[(16)] = inst_42517);

return statearr_42604;
})();
var statearr_42605_42650 = state_42576__$1;
(statearr_42605_42650[(2)] = null);

(statearr_42605_42650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (14))){
var state_42576__$1 = state_42576;
var statearr_42609_42651 = state_42576__$1;
(statearr_42609_42651[(2)] = null);

(statearr_42609_42651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (16))){
var inst_42531 = (state_42576[(10)]);
var inst_42535 = cljs.core.chunk_first.call(null,inst_42531);
var inst_42536 = cljs.core.chunk_rest.call(null,inst_42531);
var inst_42537 = cljs.core.count.call(null,inst_42535);
var inst_42517 = inst_42536;
var inst_42518 = inst_42535;
var inst_42519 = inst_42537;
var inst_42520 = (0);
var state_42576__$1 = (function (){var statearr_42610 = state_42576;
(statearr_42610[(12)] = inst_42518);

(statearr_42610[(14)] = inst_42520);

(statearr_42610[(15)] = inst_42519);

(statearr_42610[(16)] = inst_42517);

return statearr_42610;
})();
var statearr_42611_42652 = state_42576__$1;
(statearr_42611_42652[(2)] = null);

(statearr_42611_42652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (10))){
var inst_42518 = (state_42576[(12)]);
var inst_42520 = (state_42576[(14)]);
var inst_42519 = (state_42576[(15)]);
var inst_42517 = (state_42576[(16)]);
var inst_42525 = cljs.core._nth.call(null,inst_42518,inst_42520);
var inst_42526 = cljs.core.async.muxch_STAR_.call(null,inst_42525);
var inst_42527 = cljs.core.async.close_BANG_.call(null,inst_42526);
var inst_42528 = (inst_42520 + (1));
var tmp42606 = inst_42518;
var tmp42607 = inst_42519;
var tmp42608 = inst_42517;
var inst_42517__$1 = tmp42608;
var inst_42518__$1 = tmp42606;
var inst_42519__$1 = tmp42607;
var inst_42520__$1 = inst_42528;
var state_42576__$1 = (function (){var statearr_42612 = state_42576;
(statearr_42612[(12)] = inst_42518__$1);

(statearr_42612[(17)] = inst_42527);

(statearr_42612[(14)] = inst_42520__$1);

(statearr_42612[(15)] = inst_42519__$1);

(statearr_42612[(16)] = inst_42517__$1);

return statearr_42612;
})();
var statearr_42613_42653 = state_42576__$1;
(statearr_42613_42653[(2)] = null);

(statearr_42613_42653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (18))){
var inst_42546 = (state_42576[(2)]);
var state_42576__$1 = state_42576;
var statearr_42614_42654 = state_42576__$1;
(statearr_42614_42654[(2)] = inst_42546);

(statearr_42614_42654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42577 === (8))){
var inst_42520 = (state_42576[(14)]);
var inst_42519 = (state_42576[(15)]);
var inst_42522 = (inst_42520 < inst_42519);
var inst_42523 = inst_42522;
var state_42576__$1 = state_42576;
if(cljs.core.truth_(inst_42523)){
var statearr_42615_42655 = state_42576__$1;
(statearr_42615_42655[(1)] = (10));

} else {
var statearr_42616_42656 = state_42576__$1;
(statearr_42616_42656[(1)] = (11));

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
});})(c__40679__auto___42628,mults,ensure_mult,p))
;
return ((function (switch__40567__auto__,c__40679__auto___42628,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_42620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42620[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_42620[(1)] = (1));

return statearr_42620;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_42576){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_42576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e42621){if((e42621 instanceof Object)){
var ex__40571__auto__ = e42621;
var statearr_42622_42657 = state_42576;
(statearr_42622_42657[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42658 = state_42576;
state_42576 = G__42658;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_42576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_42576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___42628,mults,ensure_mult,p))
})();
var state__40681__auto__ = (function (){var statearr_42623 = f__40680__auto__.call(null);
(statearr_42623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___42628);

return statearr_42623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___42628,mults,ensure_mult,p))
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
var args42659 = [];
var len__37877__auto___42662 = arguments.length;
var i__37878__auto___42663 = (0);
while(true){
if((i__37878__auto___42663 < len__37877__auto___42662)){
args42659.push((arguments[i__37878__auto___42663]));

var G__42664 = (i__37878__auto___42663 + (1));
i__37878__auto___42663 = G__42664;
continue;
} else {
}
break;
}

var G__42661 = args42659.length;
switch (G__42661) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42659.length)].join('')));

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
var args42666 = [];
var len__37877__auto___42669 = arguments.length;
var i__37878__auto___42670 = (0);
while(true){
if((i__37878__auto___42670 < len__37877__auto___42669)){
args42666.push((arguments[i__37878__auto___42670]));

var G__42671 = (i__37878__auto___42670 + (1));
i__37878__auto___42670 = G__42671;
continue;
} else {
}
break;
}

var G__42668 = args42666.length;
switch (G__42668) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42666.length)].join('')));

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
var args42673 = [];
var len__37877__auto___42744 = arguments.length;
var i__37878__auto___42745 = (0);
while(true){
if((i__37878__auto___42745 < len__37877__auto___42744)){
args42673.push((arguments[i__37878__auto___42745]));

var G__42746 = (i__37878__auto___42745 + (1));
i__37878__auto___42745 = G__42746;
continue;
} else {
}
break;
}

var G__42675 = args42673.length;
switch (G__42675) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42673.length)].join('')));

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
var c__40679__auto___42748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___42748,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___42748,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42714){
var state_val_42715 = (state_42714[(1)]);
if((state_val_42715 === (7))){
var state_42714__$1 = state_42714;
var statearr_42716_42749 = state_42714__$1;
(statearr_42716_42749[(2)] = null);

(statearr_42716_42749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (1))){
var state_42714__$1 = state_42714;
var statearr_42717_42750 = state_42714__$1;
(statearr_42717_42750[(2)] = null);

(statearr_42717_42750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (4))){
var inst_42678 = (state_42714[(7)]);
var inst_42680 = (inst_42678 < cnt);
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42680)){
var statearr_42718_42751 = state_42714__$1;
(statearr_42718_42751[(1)] = (6));

} else {
var statearr_42719_42752 = state_42714__$1;
(statearr_42719_42752[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (15))){
var inst_42710 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42720_42753 = state_42714__$1;
(statearr_42720_42753[(2)] = inst_42710);

(statearr_42720_42753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (13))){
var inst_42703 = cljs.core.async.close_BANG_.call(null,out);
var state_42714__$1 = state_42714;
var statearr_42721_42754 = state_42714__$1;
(statearr_42721_42754[(2)] = inst_42703);

(statearr_42721_42754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (6))){
var state_42714__$1 = state_42714;
var statearr_42722_42755 = state_42714__$1;
(statearr_42722_42755[(2)] = null);

(statearr_42722_42755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (3))){
var inst_42712 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42714__$1,inst_42712);
} else {
if((state_val_42715 === (12))){
var inst_42700 = (state_42714[(8)]);
var inst_42700__$1 = (state_42714[(2)]);
var inst_42701 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42700__$1);
var state_42714__$1 = (function (){var statearr_42723 = state_42714;
(statearr_42723[(8)] = inst_42700__$1);

return statearr_42723;
})();
if(cljs.core.truth_(inst_42701)){
var statearr_42724_42756 = state_42714__$1;
(statearr_42724_42756[(1)] = (13));

} else {
var statearr_42725_42757 = state_42714__$1;
(statearr_42725_42757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (2))){
var inst_42677 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42678 = (0);
var state_42714__$1 = (function (){var statearr_42726 = state_42714;
(statearr_42726[(9)] = inst_42677);

(statearr_42726[(7)] = inst_42678);

return statearr_42726;
})();
var statearr_42727_42758 = state_42714__$1;
(statearr_42727_42758[(2)] = null);

(statearr_42727_42758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (11))){
var inst_42678 = (state_42714[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42714,(10),Object,null,(9));
var inst_42687 = chs__$1.call(null,inst_42678);
var inst_42688 = done.call(null,inst_42678);
var inst_42689 = cljs.core.async.take_BANG_.call(null,inst_42687,inst_42688);
var state_42714__$1 = state_42714;
var statearr_42728_42759 = state_42714__$1;
(statearr_42728_42759[(2)] = inst_42689);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (9))){
var inst_42678 = (state_42714[(7)]);
var inst_42691 = (state_42714[(2)]);
var inst_42692 = (inst_42678 + (1));
var inst_42678__$1 = inst_42692;
var state_42714__$1 = (function (){var statearr_42729 = state_42714;
(statearr_42729[(10)] = inst_42691);

(statearr_42729[(7)] = inst_42678__$1);

return statearr_42729;
})();
var statearr_42730_42760 = state_42714__$1;
(statearr_42730_42760[(2)] = null);

(statearr_42730_42760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (5))){
var inst_42698 = (state_42714[(2)]);
var state_42714__$1 = (function (){var statearr_42731 = state_42714;
(statearr_42731[(11)] = inst_42698);

return statearr_42731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42714__$1,(12),dchan);
} else {
if((state_val_42715 === (14))){
var inst_42700 = (state_42714[(8)]);
var inst_42705 = cljs.core.apply.call(null,f,inst_42700);
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42714__$1,(16),out,inst_42705);
} else {
if((state_val_42715 === (16))){
var inst_42707 = (state_42714[(2)]);
var state_42714__$1 = (function (){var statearr_42732 = state_42714;
(statearr_42732[(12)] = inst_42707);

return statearr_42732;
})();
var statearr_42733_42761 = state_42714__$1;
(statearr_42733_42761[(2)] = null);

(statearr_42733_42761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (10))){
var inst_42682 = (state_42714[(2)]);
var inst_42683 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42714__$1 = (function (){var statearr_42734 = state_42714;
(statearr_42734[(13)] = inst_42682);

return statearr_42734;
})();
var statearr_42735_42762 = state_42714__$1;
(statearr_42735_42762[(2)] = inst_42683);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (8))){
var inst_42696 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42736_42763 = state_42714__$1;
(statearr_42736_42763[(2)] = inst_42696);

(statearr_42736_42763[(1)] = (5));


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
});})(c__40679__auto___42748,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40567__auto__,c__40679__auto___42748,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_42740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42740[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_42740[(1)] = (1));

return statearr_42740;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_42714){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_42714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e42741){if((e42741 instanceof Object)){
var ex__40571__auto__ = e42741;
var statearr_42742_42764 = state_42714;
(statearr_42742_42764[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42765 = state_42714;
state_42714 = G__42765;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_42714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_42714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___42748,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40681__auto__ = (function (){var statearr_42743 = f__40680__auto__.call(null);
(statearr_42743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___42748);

return statearr_42743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___42748,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42767 = [];
var len__37877__auto___42825 = arguments.length;
var i__37878__auto___42826 = (0);
while(true){
if((i__37878__auto___42826 < len__37877__auto___42825)){
args42767.push((arguments[i__37878__auto___42826]));

var G__42827 = (i__37878__auto___42826 + (1));
i__37878__auto___42826 = G__42827;
continue;
} else {
}
break;
}

var G__42769 = args42767.length;
switch (G__42769) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42767.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40679__auto___42829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___42829,out){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___42829,out){
return (function (state_42801){
var state_val_42802 = (state_42801[(1)]);
if((state_val_42802 === (7))){
var inst_42780 = (state_42801[(7)]);
var inst_42781 = (state_42801[(8)]);
var inst_42780__$1 = (state_42801[(2)]);
var inst_42781__$1 = cljs.core.nth.call(null,inst_42780__$1,(0),null);
var inst_42782 = cljs.core.nth.call(null,inst_42780__$1,(1),null);
var inst_42783 = (inst_42781__$1 == null);
var state_42801__$1 = (function (){var statearr_42803 = state_42801;
(statearr_42803[(7)] = inst_42780__$1);

(statearr_42803[(9)] = inst_42782);

(statearr_42803[(8)] = inst_42781__$1);

return statearr_42803;
})();
if(cljs.core.truth_(inst_42783)){
var statearr_42804_42830 = state_42801__$1;
(statearr_42804_42830[(1)] = (8));

} else {
var statearr_42805_42831 = state_42801__$1;
(statearr_42805_42831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (1))){
var inst_42770 = cljs.core.vec.call(null,chs);
var inst_42771 = inst_42770;
var state_42801__$1 = (function (){var statearr_42806 = state_42801;
(statearr_42806[(10)] = inst_42771);

return statearr_42806;
})();
var statearr_42807_42832 = state_42801__$1;
(statearr_42807_42832[(2)] = null);

(statearr_42807_42832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (4))){
var inst_42771 = (state_42801[(10)]);
var state_42801__$1 = state_42801;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42801__$1,(7),inst_42771);
} else {
if((state_val_42802 === (6))){
var inst_42797 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
var statearr_42808_42833 = state_42801__$1;
(statearr_42808_42833[(2)] = inst_42797);

(statearr_42808_42833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (3))){
var inst_42799 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42801__$1,inst_42799);
} else {
if((state_val_42802 === (2))){
var inst_42771 = (state_42801[(10)]);
var inst_42773 = cljs.core.count.call(null,inst_42771);
var inst_42774 = (inst_42773 > (0));
var state_42801__$1 = state_42801;
if(cljs.core.truth_(inst_42774)){
var statearr_42810_42834 = state_42801__$1;
(statearr_42810_42834[(1)] = (4));

} else {
var statearr_42811_42835 = state_42801__$1;
(statearr_42811_42835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (11))){
var inst_42771 = (state_42801[(10)]);
var inst_42790 = (state_42801[(2)]);
var tmp42809 = inst_42771;
var inst_42771__$1 = tmp42809;
var state_42801__$1 = (function (){var statearr_42812 = state_42801;
(statearr_42812[(11)] = inst_42790);

(statearr_42812[(10)] = inst_42771__$1);

return statearr_42812;
})();
var statearr_42813_42836 = state_42801__$1;
(statearr_42813_42836[(2)] = null);

(statearr_42813_42836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (9))){
var inst_42781 = (state_42801[(8)]);
var state_42801__$1 = state_42801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42801__$1,(11),out,inst_42781);
} else {
if((state_val_42802 === (5))){
var inst_42795 = cljs.core.async.close_BANG_.call(null,out);
var state_42801__$1 = state_42801;
var statearr_42814_42837 = state_42801__$1;
(statearr_42814_42837[(2)] = inst_42795);

(statearr_42814_42837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (10))){
var inst_42793 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
var statearr_42815_42838 = state_42801__$1;
(statearr_42815_42838[(2)] = inst_42793);

(statearr_42815_42838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (8))){
var inst_42780 = (state_42801[(7)]);
var inst_42782 = (state_42801[(9)]);
var inst_42781 = (state_42801[(8)]);
var inst_42771 = (state_42801[(10)]);
var inst_42785 = (function (){var cs = inst_42771;
var vec__42776 = inst_42780;
var v = inst_42781;
var c = inst_42782;
return ((function (cs,vec__42776,v,c,inst_42780,inst_42782,inst_42781,inst_42771,state_val_42802,c__40679__auto___42829,out){
return (function (p1__42766_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42766_SHARP_);
});
;})(cs,vec__42776,v,c,inst_42780,inst_42782,inst_42781,inst_42771,state_val_42802,c__40679__auto___42829,out))
})();
var inst_42786 = cljs.core.filterv.call(null,inst_42785,inst_42771);
var inst_42771__$1 = inst_42786;
var state_42801__$1 = (function (){var statearr_42816 = state_42801;
(statearr_42816[(10)] = inst_42771__$1);

return statearr_42816;
})();
var statearr_42817_42839 = state_42801__$1;
(statearr_42817_42839[(2)] = null);

(statearr_42817_42839[(1)] = (2));


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
});})(c__40679__auto___42829,out))
;
return ((function (switch__40567__auto__,c__40679__auto___42829,out){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_42821 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42821[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_42821[(1)] = (1));

return statearr_42821;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_42801){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_42801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e42822){if((e42822 instanceof Object)){
var ex__40571__auto__ = e42822;
var statearr_42823_42840 = state_42801;
(statearr_42823_42840[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42841 = state_42801;
state_42801 = G__42841;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_42801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_42801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___42829,out))
})();
var state__40681__auto__ = (function (){var statearr_42824 = f__40680__auto__.call(null);
(statearr_42824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___42829);

return statearr_42824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___42829,out))
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
var args42842 = [];
var len__37877__auto___42891 = arguments.length;
var i__37878__auto___42892 = (0);
while(true){
if((i__37878__auto___42892 < len__37877__auto___42891)){
args42842.push((arguments[i__37878__auto___42892]));

var G__42893 = (i__37878__auto___42892 + (1));
i__37878__auto___42892 = G__42893;
continue;
} else {
}
break;
}

var G__42844 = args42842.length;
switch (G__42844) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42842.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40679__auto___42895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___42895,out){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___42895,out){
return (function (state_42868){
var state_val_42869 = (state_42868[(1)]);
if((state_val_42869 === (7))){
var inst_42850 = (state_42868[(7)]);
var inst_42850__$1 = (state_42868[(2)]);
var inst_42851 = (inst_42850__$1 == null);
var inst_42852 = cljs.core.not.call(null,inst_42851);
var state_42868__$1 = (function (){var statearr_42870 = state_42868;
(statearr_42870[(7)] = inst_42850__$1);

return statearr_42870;
})();
if(inst_42852){
var statearr_42871_42896 = state_42868__$1;
(statearr_42871_42896[(1)] = (8));

} else {
var statearr_42872_42897 = state_42868__$1;
(statearr_42872_42897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (1))){
var inst_42845 = (0);
var state_42868__$1 = (function (){var statearr_42873 = state_42868;
(statearr_42873[(8)] = inst_42845);

return statearr_42873;
})();
var statearr_42874_42898 = state_42868__$1;
(statearr_42874_42898[(2)] = null);

(statearr_42874_42898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (4))){
var state_42868__$1 = state_42868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42868__$1,(7),ch);
} else {
if((state_val_42869 === (6))){
var inst_42863 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
var statearr_42875_42899 = state_42868__$1;
(statearr_42875_42899[(2)] = inst_42863);

(statearr_42875_42899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (3))){
var inst_42865 = (state_42868[(2)]);
var inst_42866 = cljs.core.async.close_BANG_.call(null,out);
var state_42868__$1 = (function (){var statearr_42876 = state_42868;
(statearr_42876[(9)] = inst_42865);

return statearr_42876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42868__$1,inst_42866);
} else {
if((state_val_42869 === (2))){
var inst_42845 = (state_42868[(8)]);
var inst_42847 = (inst_42845 < n);
var state_42868__$1 = state_42868;
if(cljs.core.truth_(inst_42847)){
var statearr_42877_42900 = state_42868__$1;
(statearr_42877_42900[(1)] = (4));

} else {
var statearr_42878_42901 = state_42868__$1;
(statearr_42878_42901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (11))){
var inst_42845 = (state_42868[(8)]);
var inst_42855 = (state_42868[(2)]);
var inst_42856 = (inst_42845 + (1));
var inst_42845__$1 = inst_42856;
var state_42868__$1 = (function (){var statearr_42879 = state_42868;
(statearr_42879[(10)] = inst_42855);

(statearr_42879[(8)] = inst_42845__$1);

return statearr_42879;
})();
var statearr_42880_42902 = state_42868__$1;
(statearr_42880_42902[(2)] = null);

(statearr_42880_42902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (9))){
var state_42868__$1 = state_42868;
var statearr_42881_42903 = state_42868__$1;
(statearr_42881_42903[(2)] = null);

(statearr_42881_42903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (5))){
var state_42868__$1 = state_42868;
var statearr_42882_42904 = state_42868__$1;
(statearr_42882_42904[(2)] = null);

(statearr_42882_42904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (10))){
var inst_42860 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
var statearr_42883_42905 = state_42868__$1;
(statearr_42883_42905[(2)] = inst_42860);

(statearr_42883_42905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42869 === (8))){
var inst_42850 = (state_42868[(7)]);
var state_42868__$1 = state_42868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42868__$1,(11),out,inst_42850);
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
});})(c__40679__auto___42895,out))
;
return ((function (switch__40567__auto__,c__40679__auto___42895,out){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_42887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42887[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_42887[(1)] = (1));

return statearr_42887;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_42868){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_42868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e42888){if((e42888 instanceof Object)){
var ex__40571__auto__ = e42888;
var statearr_42889_42906 = state_42868;
(statearr_42889_42906[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42907 = state_42868;
state_42868 = G__42907;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_42868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_42868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___42895,out))
})();
var state__40681__auto__ = (function (){var statearr_42890 = f__40680__auto__.call(null);
(statearr_42890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___42895);

return statearr_42890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___42895,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42915 = (function (map_LT_,f,ch,meta42916){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42916 = meta42916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42917,meta42916__$1){
var self__ = this;
var _42917__$1 = this;
return (new cljs.core.async.t_cljs$core$async42915(self__.map_LT_,self__.f,self__.ch,meta42916__$1));
});

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42917){
var self__ = this;
var _42917__$1 = this;
return self__.meta42916;
});

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42918 = (function (map_LT_,f,ch,meta42916,_,fn1,meta42919){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42916 = meta42916;
this._ = _;
this.fn1 = fn1;
this.meta42919 = meta42919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42920,meta42919__$1){
var self__ = this;
var _42920__$1 = this;
return (new cljs.core.async.t_cljs$core$async42918(self__.map_LT_,self__.f,self__.ch,self__.meta42916,self__._,self__.fn1,meta42919__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42920){
var self__ = this;
var _42920__$1 = this;
return self__.meta42919;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42908_SHARP_){
return f1.call(null,(((p1__42908_SHARP_ == null))?null:self__.f.call(null,p1__42908_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42918.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42916","meta42916",1887588026,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42915","cljs.core.async/t_cljs$core$async42915",-1617462188,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42919","meta42919",794648158,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42918";

cljs.core.async.t_cljs$core$async42918.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42918");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42918 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42918(map_LT___$1,f__$1,ch__$1,meta42916__$1,___$2,fn1__$1,meta42919){
return (new cljs.core.async.t_cljs$core$async42918(map_LT___$1,f__$1,ch__$1,meta42916__$1,___$2,fn1__$1,meta42919));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42918(self__.map_LT_,self__.f,self__.ch,self__.meta42916,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36790__auto__ = ret;
if(cljs.core.truth_(and__36790__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36790__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42916","meta42916",1887588026,null)], null);
});

cljs.core.async.t_cljs$core$async42915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42915";

cljs.core.async.t_cljs$core$async42915.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42915");
});

cljs.core.async.__GT_t_cljs$core$async42915 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42915(map_LT___$1,f__$1,ch__$1,meta42916){
return (new cljs.core.async.t_cljs$core$async42915(map_LT___$1,f__$1,ch__$1,meta42916));
});

}

return (new cljs.core.async.t_cljs$core$async42915(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42924 = (function (map_GT_,f,ch,meta42925){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42925 = meta42925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42926,meta42925__$1){
var self__ = this;
var _42926__$1 = this;
return (new cljs.core.async.t_cljs$core$async42924(self__.map_GT_,self__.f,self__.ch,meta42925__$1));
});

cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42926){
var self__ = this;
var _42926__$1 = this;
return self__.meta42925;
});

cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42925","meta42925",58310249,null)], null);
});

cljs.core.async.t_cljs$core$async42924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42924";

cljs.core.async.t_cljs$core$async42924.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42924");
});

cljs.core.async.__GT_t_cljs$core$async42924 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42924(map_GT___$1,f__$1,ch__$1,meta42925){
return (new cljs.core.async.t_cljs$core$async42924(map_GT___$1,f__$1,ch__$1,meta42925));
});

}

return (new cljs.core.async.t_cljs$core$async42924(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42930 = (function (filter_GT_,p,ch,meta42931){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42931 = meta42931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42932,meta42931__$1){
var self__ = this;
var _42932__$1 = this;
return (new cljs.core.async.t_cljs$core$async42930(self__.filter_GT_,self__.p,self__.ch,meta42931__$1));
});

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42932){
var self__ = this;
var _42932__$1 = this;
return self__.meta42931;
});

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42931","meta42931",1005073224,null)], null);
});

cljs.core.async.t_cljs$core$async42930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42930";

cljs.core.async.t_cljs$core$async42930.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42930");
});

cljs.core.async.__GT_t_cljs$core$async42930 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42930(filter_GT___$1,p__$1,ch__$1,meta42931){
return (new cljs.core.async.t_cljs$core$async42930(filter_GT___$1,p__$1,ch__$1,meta42931));
});

}

return (new cljs.core.async.t_cljs$core$async42930(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42933 = [];
var len__37877__auto___42977 = arguments.length;
var i__37878__auto___42978 = (0);
while(true){
if((i__37878__auto___42978 < len__37877__auto___42977)){
args42933.push((arguments[i__37878__auto___42978]));

var G__42979 = (i__37878__auto___42978 + (1));
i__37878__auto___42978 = G__42979;
continue;
} else {
}
break;
}

var G__42935 = args42933.length;
switch (G__42935) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42933.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40679__auto___42981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___42981,out){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___42981,out){
return (function (state_42956){
var state_val_42957 = (state_42956[(1)]);
if((state_val_42957 === (7))){
var inst_42952 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42958_42982 = state_42956__$1;
(statearr_42958_42982[(2)] = inst_42952);

(statearr_42958_42982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (1))){
var state_42956__$1 = state_42956;
var statearr_42959_42983 = state_42956__$1;
(statearr_42959_42983[(2)] = null);

(statearr_42959_42983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (4))){
var inst_42938 = (state_42956[(7)]);
var inst_42938__$1 = (state_42956[(2)]);
var inst_42939 = (inst_42938__$1 == null);
var state_42956__$1 = (function (){var statearr_42960 = state_42956;
(statearr_42960[(7)] = inst_42938__$1);

return statearr_42960;
})();
if(cljs.core.truth_(inst_42939)){
var statearr_42961_42984 = state_42956__$1;
(statearr_42961_42984[(1)] = (5));

} else {
var statearr_42962_42985 = state_42956__$1;
(statearr_42962_42985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (6))){
var inst_42938 = (state_42956[(7)]);
var inst_42943 = p.call(null,inst_42938);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42943)){
var statearr_42963_42986 = state_42956__$1;
(statearr_42963_42986[(1)] = (8));

} else {
var statearr_42964_42987 = state_42956__$1;
(statearr_42964_42987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (3))){
var inst_42954 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42956__$1,inst_42954);
} else {
if((state_val_42957 === (2))){
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(4),ch);
} else {
if((state_val_42957 === (11))){
var inst_42946 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42965_42988 = state_42956__$1;
(statearr_42965_42988[(2)] = inst_42946);

(statearr_42965_42988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (9))){
var state_42956__$1 = state_42956;
var statearr_42966_42989 = state_42956__$1;
(statearr_42966_42989[(2)] = null);

(statearr_42966_42989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (5))){
var inst_42941 = cljs.core.async.close_BANG_.call(null,out);
var state_42956__$1 = state_42956;
var statearr_42967_42990 = state_42956__$1;
(statearr_42967_42990[(2)] = inst_42941);

(statearr_42967_42990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (10))){
var inst_42949 = (state_42956[(2)]);
var state_42956__$1 = (function (){var statearr_42968 = state_42956;
(statearr_42968[(8)] = inst_42949);

return statearr_42968;
})();
var statearr_42969_42991 = state_42956__$1;
(statearr_42969_42991[(2)] = null);

(statearr_42969_42991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (8))){
var inst_42938 = (state_42956[(7)]);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42956__$1,(11),out,inst_42938);
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
});})(c__40679__auto___42981,out))
;
return ((function (switch__40567__auto__,c__40679__auto___42981,out){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_42973 = [null,null,null,null,null,null,null,null,null];
(statearr_42973[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_42973[(1)] = (1));

return statearr_42973;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_42956){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_42956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e42974){if((e42974 instanceof Object)){
var ex__40571__auto__ = e42974;
var statearr_42975_42992 = state_42956;
(statearr_42975_42992[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42993 = state_42956;
state_42956 = G__42993;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_42956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_42956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___42981,out))
})();
var state__40681__auto__ = (function (){var statearr_42976 = f__40680__auto__.call(null);
(statearr_42976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___42981);

return statearr_42976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___42981,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42994 = [];
var len__37877__auto___42997 = arguments.length;
var i__37878__auto___42998 = (0);
while(true){
if((i__37878__auto___42998 < len__37877__auto___42997)){
args42994.push((arguments[i__37878__auto___42998]));

var G__42999 = (i__37878__auto___42998 + (1));
i__37878__auto___42998 = G__42999;
continue;
} else {
}
break;
}

var G__42996 = args42994.length;
switch (G__42996) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42994.length)].join('')));

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
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__){
return (function (state_43166){
var state_val_43167 = (state_43166[(1)]);
if((state_val_43167 === (7))){
var inst_43162 = (state_43166[(2)]);
var state_43166__$1 = state_43166;
var statearr_43168_43209 = state_43166__$1;
(statearr_43168_43209[(2)] = inst_43162);

(statearr_43168_43209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (20))){
var inst_43132 = (state_43166[(7)]);
var inst_43143 = (state_43166[(2)]);
var inst_43144 = cljs.core.next.call(null,inst_43132);
var inst_43118 = inst_43144;
var inst_43119 = null;
var inst_43120 = (0);
var inst_43121 = (0);
var state_43166__$1 = (function (){var statearr_43169 = state_43166;
(statearr_43169[(8)] = inst_43143);

(statearr_43169[(9)] = inst_43118);

(statearr_43169[(10)] = inst_43120);

(statearr_43169[(11)] = inst_43119);

(statearr_43169[(12)] = inst_43121);

return statearr_43169;
})();
var statearr_43170_43210 = state_43166__$1;
(statearr_43170_43210[(2)] = null);

(statearr_43170_43210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (1))){
var state_43166__$1 = state_43166;
var statearr_43171_43211 = state_43166__$1;
(statearr_43171_43211[(2)] = null);

(statearr_43171_43211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (4))){
var inst_43107 = (state_43166[(13)]);
var inst_43107__$1 = (state_43166[(2)]);
var inst_43108 = (inst_43107__$1 == null);
var state_43166__$1 = (function (){var statearr_43172 = state_43166;
(statearr_43172[(13)] = inst_43107__$1);

return statearr_43172;
})();
if(cljs.core.truth_(inst_43108)){
var statearr_43173_43212 = state_43166__$1;
(statearr_43173_43212[(1)] = (5));

} else {
var statearr_43174_43213 = state_43166__$1;
(statearr_43174_43213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (15))){
var state_43166__$1 = state_43166;
var statearr_43178_43214 = state_43166__$1;
(statearr_43178_43214[(2)] = null);

(statearr_43178_43214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (21))){
var state_43166__$1 = state_43166;
var statearr_43179_43215 = state_43166__$1;
(statearr_43179_43215[(2)] = null);

(statearr_43179_43215[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (13))){
var inst_43118 = (state_43166[(9)]);
var inst_43120 = (state_43166[(10)]);
var inst_43119 = (state_43166[(11)]);
var inst_43121 = (state_43166[(12)]);
var inst_43128 = (state_43166[(2)]);
var inst_43129 = (inst_43121 + (1));
var tmp43175 = inst_43118;
var tmp43176 = inst_43120;
var tmp43177 = inst_43119;
var inst_43118__$1 = tmp43175;
var inst_43119__$1 = tmp43177;
var inst_43120__$1 = tmp43176;
var inst_43121__$1 = inst_43129;
var state_43166__$1 = (function (){var statearr_43180 = state_43166;
(statearr_43180[(9)] = inst_43118__$1);

(statearr_43180[(14)] = inst_43128);

(statearr_43180[(10)] = inst_43120__$1);

(statearr_43180[(11)] = inst_43119__$1);

(statearr_43180[(12)] = inst_43121__$1);

return statearr_43180;
})();
var statearr_43181_43216 = state_43166__$1;
(statearr_43181_43216[(2)] = null);

(statearr_43181_43216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (22))){
var state_43166__$1 = state_43166;
var statearr_43182_43217 = state_43166__$1;
(statearr_43182_43217[(2)] = null);

(statearr_43182_43217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (6))){
var inst_43107 = (state_43166[(13)]);
var inst_43116 = f.call(null,inst_43107);
var inst_43117 = cljs.core.seq.call(null,inst_43116);
var inst_43118 = inst_43117;
var inst_43119 = null;
var inst_43120 = (0);
var inst_43121 = (0);
var state_43166__$1 = (function (){var statearr_43183 = state_43166;
(statearr_43183[(9)] = inst_43118);

(statearr_43183[(10)] = inst_43120);

(statearr_43183[(11)] = inst_43119);

(statearr_43183[(12)] = inst_43121);

return statearr_43183;
})();
var statearr_43184_43218 = state_43166__$1;
(statearr_43184_43218[(2)] = null);

(statearr_43184_43218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (17))){
var inst_43132 = (state_43166[(7)]);
var inst_43136 = cljs.core.chunk_first.call(null,inst_43132);
var inst_43137 = cljs.core.chunk_rest.call(null,inst_43132);
var inst_43138 = cljs.core.count.call(null,inst_43136);
var inst_43118 = inst_43137;
var inst_43119 = inst_43136;
var inst_43120 = inst_43138;
var inst_43121 = (0);
var state_43166__$1 = (function (){var statearr_43185 = state_43166;
(statearr_43185[(9)] = inst_43118);

(statearr_43185[(10)] = inst_43120);

(statearr_43185[(11)] = inst_43119);

(statearr_43185[(12)] = inst_43121);

return statearr_43185;
})();
var statearr_43186_43219 = state_43166__$1;
(statearr_43186_43219[(2)] = null);

(statearr_43186_43219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (3))){
var inst_43164 = (state_43166[(2)]);
var state_43166__$1 = state_43166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43166__$1,inst_43164);
} else {
if((state_val_43167 === (12))){
var inst_43152 = (state_43166[(2)]);
var state_43166__$1 = state_43166;
var statearr_43187_43220 = state_43166__$1;
(statearr_43187_43220[(2)] = inst_43152);

(statearr_43187_43220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (2))){
var state_43166__$1 = state_43166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43166__$1,(4),in$);
} else {
if((state_val_43167 === (23))){
var inst_43160 = (state_43166[(2)]);
var state_43166__$1 = state_43166;
var statearr_43188_43221 = state_43166__$1;
(statearr_43188_43221[(2)] = inst_43160);

(statearr_43188_43221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (19))){
var inst_43147 = (state_43166[(2)]);
var state_43166__$1 = state_43166;
var statearr_43189_43222 = state_43166__$1;
(statearr_43189_43222[(2)] = inst_43147);

(statearr_43189_43222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (11))){
var inst_43118 = (state_43166[(9)]);
var inst_43132 = (state_43166[(7)]);
var inst_43132__$1 = cljs.core.seq.call(null,inst_43118);
var state_43166__$1 = (function (){var statearr_43190 = state_43166;
(statearr_43190[(7)] = inst_43132__$1);

return statearr_43190;
})();
if(inst_43132__$1){
var statearr_43191_43223 = state_43166__$1;
(statearr_43191_43223[(1)] = (14));

} else {
var statearr_43192_43224 = state_43166__$1;
(statearr_43192_43224[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (9))){
var inst_43154 = (state_43166[(2)]);
var inst_43155 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43166__$1 = (function (){var statearr_43193 = state_43166;
(statearr_43193[(15)] = inst_43154);

return statearr_43193;
})();
if(cljs.core.truth_(inst_43155)){
var statearr_43194_43225 = state_43166__$1;
(statearr_43194_43225[(1)] = (21));

} else {
var statearr_43195_43226 = state_43166__$1;
(statearr_43195_43226[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (5))){
var inst_43110 = cljs.core.async.close_BANG_.call(null,out);
var state_43166__$1 = state_43166;
var statearr_43196_43227 = state_43166__$1;
(statearr_43196_43227[(2)] = inst_43110);

(statearr_43196_43227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (14))){
var inst_43132 = (state_43166[(7)]);
var inst_43134 = cljs.core.chunked_seq_QMARK_.call(null,inst_43132);
var state_43166__$1 = state_43166;
if(inst_43134){
var statearr_43197_43228 = state_43166__$1;
(statearr_43197_43228[(1)] = (17));

} else {
var statearr_43198_43229 = state_43166__$1;
(statearr_43198_43229[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (16))){
var inst_43150 = (state_43166[(2)]);
var state_43166__$1 = state_43166;
var statearr_43199_43230 = state_43166__$1;
(statearr_43199_43230[(2)] = inst_43150);

(statearr_43199_43230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43167 === (10))){
var inst_43119 = (state_43166[(11)]);
var inst_43121 = (state_43166[(12)]);
var inst_43126 = cljs.core._nth.call(null,inst_43119,inst_43121);
var state_43166__$1 = state_43166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43166__$1,(13),out,inst_43126);
} else {
if((state_val_43167 === (18))){
var inst_43132 = (state_43166[(7)]);
var inst_43141 = cljs.core.first.call(null,inst_43132);
var state_43166__$1 = state_43166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43166__$1,(20),out,inst_43141);
} else {
if((state_val_43167 === (8))){
var inst_43120 = (state_43166[(10)]);
var inst_43121 = (state_43166[(12)]);
var inst_43123 = (inst_43121 < inst_43120);
var inst_43124 = inst_43123;
var state_43166__$1 = state_43166;
if(cljs.core.truth_(inst_43124)){
var statearr_43200_43231 = state_43166__$1;
(statearr_43200_43231[(1)] = (10));

} else {
var statearr_43201_43232 = state_43166__$1;
(statearr_43201_43232[(1)] = (11));

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
});})(c__40679__auto__))
;
return ((function (switch__40567__auto__,c__40679__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40568__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40568__auto____0 = (function (){
var statearr_43205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43205[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40568__auto__);

(statearr_43205[(1)] = (1));

return statearr_43205;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40568__auto____1 = (function (state_43166){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_43166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e43206){if((e43206 instanceof Object)){
var ex__40571__auto__ = e43206;
var statearr_43207_43233 = state_43166;
(statearr_43207_43233[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43234 = state_43166;
state_43166 = G__43234;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40568__auto__ = function(state_43166){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40568__auto____1.call(this,state_43166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40568__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40568__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__))
})();
var state__40681__auto__ = (function (){var statearr_43208 = f__40680__auto__.call(null);
(statearr_43208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_43208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__))
);

return c__40679__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43235 = [];
var len__37877__auto___43238 = arguments.length;
var i__37878__auto___43239 = (0);
while(true){
if((i__37878__auto___43239 < len__37877__auto___43238)){
args43235.push((arguments[i__37878__auto___43239]));

var G__43240 = (i__37878__auto___43239 + (1));
i__37878__auto___43239 = G__43240;
continue;
} else {
}
break;
}

var G__43237 = args43235.length;
switch (G__43237) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43235.length)].join('')));

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
var args43242 = [];
var len__37877__auto___43245 = arguments.length;
var i__37878__auto___43246 = (0);
while(true){
if((i__37878__auto___43246 < len__37877__auto___43245)){
args43242.push((arguments[i__37878__auto___43246]));

var G__43247 = (i__37878__auto___43246 + (1));
i__37878__auto___43246 = G__43247;
continue;
} else {
}
break;
}

var G__43244 = args43242.length;
switch (G__43244) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43242.length)].join('')));

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
var args43249 = [];
var len__37877__auto___43300 = arguments.length;
var i__37878__auto___43301 = (0);
while(true){
if((i__37878__auto___43301 < len__37877__auto___43300)){
args43249.push((arguments[i__37878__auto___43301]));

var G__43302 = (i__37878__auto___43301 + (1));
i__37878__auto___43301 = G__43302;
continue;
} else {
}
break;
}

var G__43251 = args43249.length;
switch (G__43251) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43249.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40679__auto___43304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___43304,out){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___43304,out){
return (function (state_43275){
var state_val_43276 = (state_43275[(1)]);
if((state_val_43276 === (7))){
var inst_43270 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43277_43305 = state_43275__$1;
(statearr_43277_43305[(2)] = inst_43270);

(statearr_43277_43305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (1))){
var inst_43252 = null;
var state_43275__$1 = (function (){var statearr_43278 = state_43275;
(statearr_43278[(7)] = inst_43252);

return statearr_43278;
})();
var statearr_43279_43306 = state_43275__$1;
(statearr_43279_43306[(2)] = null);

(statearr_43279_43306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (4))){
var inst_43255 = (state_43275[(8)]);
var inst_43255__$1 = (state_43275[(2)]);
var inst_43256 = (inst_43255__$1 == null);
var inst_43257 = cljs.core.not.call(null,inst_43256);
var state_43275__$1 = (function (){var statearr_43280 = state_43275;
(statearr_43280[(8)] = inst_43255__$1);

return statearr_43280;
})();
if(inst_43257){
var statearr_43281_43307 = state_43275__$1;
(statearr_43281_43307[(1)] = (5));

} else {
var statearr_43282_43308 = state_43275__$1;
(statearr_43282_43308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (6))){
var state_43275__$1 = state_43275;
var statearr_43283_43309 = state_43275__$1;
(statearr_43283_43309[(2)] = null);

(statearr_43283_43309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (3))){
var inst_43272 = (state_43275[(2)]);
var inst_43273 = cljs.core.async.close_BANG_.call(null,out);
var state_43275__$1 = (function (){var statearr_43284 = state_43275;
(statearr_43284[(9)] = inst_43272);

return statearr_43284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43275__$1,inst_43273);
} else {
if((state_val_43276 === (2))){
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(4),ch);
} else {
if((state_val_43276 === (11))){
var inst_43255 = (state_43275[(8)]);
var inst_43264 = (state_43275[(2)]);
var inst_43252 = inst_43255;
var state_43275__$1 = (function (){var statearr_43285 = state_43275;
(statearr_43285[(7)] = inst_43252);

(statearr_43285[(10)] = inst_43264);

return statearr_43285;
})();
var statearr_43286_43310 = state_43275__$1;
(statearr_43286_43310[(2)] = null);

(statearr_43286_43310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (9))){
var inst_43255 = (state_43275[(8)]);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43275__$1,(11),out,inst_43255);
} else {
if((state_val_43276 === (5))){
var inst_43252 = (state_43275[(7)]);
var inst_43255 = (state_43275[(8)]);
var inst_43259 = cljs.core._EQ_.call(null,inst_43255,inst_43252);
var state_43275__$1 = state_43275;
if(inst_43259){
var statearr_43288_43311 = state_43275__$1;
(statearr_43288_43311[(1)] = (8));

} else {
var statearr_43289_43312 = state_43275__$1;
(statearr_43289_43312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (10))){
var inst_43267 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43290_43313 = state_43275__$1;
(statearr_43290_43313[(2)] = inst_43267);

(statearr_43290_43313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (8))){
var inst_43252 = (state_43275[(7)]);
var tmp43287 = inst_43252;
var inst_43252__$1 = tmp43287;
var state_43275__$1 = (function (){var statearr_43291 = state_43275;
(statearr_43291[(7)] = inst_43252__$1);

return statearr_43291;
})();
var statearr_43292_43314 = state_43275__$1;
(statearr_43292_43314[(2)] = null);

(statearr_43292_43314[(1)] = (2));


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
});})(c__40679__auto___43304,out))
;
return ((function (switch__40567__auto__,c__40679__auto___43304,out){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_43296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43296[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_43296[(1)] = (1));

return statearr_43296;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_43275){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_43275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e43297){if((e43297 instanceof Object)){
var ex__40571__auto__ = e43297;
var statearr_43298_43315 = state_43275;
(statearr_43298_43315[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43316 = state_43275;
state_43275 = G__43316;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_43275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_43275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___43304,out))
})();
var state__40681__auto__ = (function (){var statearr_43299 = f__40680__auto__.call(null);
(statearr_43299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___43304);

return statearr_43299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___43304,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43317 = [];
var len__37877__auto___43387 = arguments.length;
var i__37878__auto___43388 = (0);
while(true){
if((i__37878__auto___43388 < len__37877__auto___43387)){
args43317.push((arguments[i__37878__auto___43388]));

var G__43389 = (i__37878__auto___43388 + (1));
i__37878__auto___43388 = G__43389;
continue;
} else {
}
break;
}

var G__43319 = args43317.length;
switch (G__43319) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43317.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40679__auto___43391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___43391,out){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___43391,out){
return (function (state_43357){
var state_val_43358 = (state_43357[(1)]);
if((state_val_43358 === (7))){
var inst_43353 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43359_43392 = state_43357__$1;
(statearr_43359_43392[(2)] = inst_43353);

(statearr_43359_43392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (1))){
var inst_43320 = (new Array(n));
var inst_43321 = inst_43320;
var inst_43322 = (0);
var state_43357__$1 = (function (){var statearr_43360 = state_43357;
(statearr_43360[(7)] = inst_43322);

(statearr_43360[(8)] = inst_43321);

return statearr_43360;
})();
var statearr_43361_43393 = state_43357__$1;
(statearr_43361_43393[(2)] = null);

(statearr_43361_43393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (4))){
var inst_43325 = (state_43357[(9)]);
var inst_43325__$1 = (state_43357[(2)]);
var inst_43326 = (inst_43325__$1 == null);
var inst_43327 = cljs.core.not.call(null,inst_43326);
var state_43357__$1 = (function (){var statearr_43362 = state_43357;
(statearr_43362[(9)] = inst_43325__$1);

return statearr_43362;
})();
if(inst_43327){
var statearr_43363_43394 = state_43357__$1;
(statearr_43363_43394[(1)] = (5));

} else {
var statearr_43364_43395 = state_43357__$1;
(statearr_43364_43395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (15))){
var inst_43347 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43365_43396 = state_43357__$1;
(statearr_43365_43396[(2)] = inst_43347);

(statearr_43365_43396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (13))){
var state_43357__$1 = state_43357;
var statearr_43366_43397 = state_43357__$1;
(statearr_43366_43397[(2)] = null);

(statearr_43366_43397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (6))){
var inst_43322 = (state_43357[(7)]);
var inst_43343 = (inst_43322 > (0));
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43343)){
var statearr_43367_43398 = state_43357__$1;
(statearr_43367_43398[(1)] = (12));

} else {
var statearr_43368_43399 = state_43357__$1;
(statearr_43368_43399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (3))){
var inst_43355 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43357__$1,inst_43355);
} else {
if((state_val_43358 === (12))){
var inst_43321 = (state_43357[(8)]);
var inst_43345 = cljs.core.vec.call(null,inst_43321);
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43357__$1,(15),out,inst_43345);
} else {
if((state_val_43358 === (2))){
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43357__$1,(4),ch);
} else {
if((state_val_43358 === (11))){
var inst_43337 = (state_43357[(2)]);
var inst_43338 = (new Array(n));
var inst_43321 = inst_43338;
var inst_43322 = (0);
var state_43357__$1 = (function (){var statearr_43369 = state_43357;
(statearr_43369[(7)] = inst_43322);

(statearr_43369[(10)] = inst_43337);

(statearr_43369[(8)] = inst_43321);

return statearr_43369;
})();
var statearr_43370_43400 = state_43357__$1;
(statearr_43370_43400[(2)] = null);

(statearr_43370_43400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (9))){
var inst_43321 = (state_43357[(8)]);
var inst_43335 = cljs.core.vec.call(null,inst_43321);
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43357__$1,(11),out,inst_43335);
} else {
if((state_val_43358 === (5))){
var inst_43330 = (state_43357[(11)]);
var inst_43322 = (state_43357[(7)]);
var inst_43321 = (state_43357[(8)]);
var inst_43325 = (state_43357[(9)]);
var inst_43329 = (inst_43321[inst_43322] = inst_43325);
var inst_43330__$1 = (inst_43322 + (1));
var inst_43331 = (inst_43330__$1 < n);
var state_43357__$1 = (function (){var statearr_43371 = state_43357;
(statearr_43371[(11)] = inst_43330__$1);

(statearr_43371[(12)] = inst_43329);

return statearr_43371;
})();
if(cljs.core.truth_(inst_43331)){
var statearr_43372_43401 = state_43357__$1;
(statearr_43372_43401[(1)] = (8));

} else {
var statearr_43373_43402 = state_43357__$1;
(statearr_43373_43402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (14))){
var inst_43350 = (state_43357[(2)]);
var inst_43351 = cljs.core.async.close_BANG_.call(null,out);
var state_43357__$1 = (function (){var statearr_43375 = state_43357;
(statearr_43375[(13)] = inst_43350);

return statearr_43375;
})();
var statearr_43376_43403 = state_43357__$1;
(statearr_43376_43403[(2)] = inst_43351);

(statearr_43376_43403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (10))){
var inst_43341 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43377_43404 = state_43357__$1;
(statearr_43377_43404[(2)] = inst_43341);

(statearr_43377_43404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (8))){
var inst_43330 = (state_43357[(11)]);
var inst_43321 = (state_43357[(8)]);
var tmp43374 = inst_43321;
var inst_43321__$1 = tmp43374;
var inst_43322 = inst_43330;
var state_43357__$1 = (function (){var statearr_43378 = state_43357;
(statearr_43378[(7)] = inst_43322);

(statearr_43378[(8)] = inst_43321__$1);

return statearr_43378;
})();
var statearr_43379_43405 = state_43357__$1;
(statearr_43379_43405[(2)] = null);

(statearr_43379_43405[(1)] = (2));


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
});})(c__40679__auto___43391,out))
;
return ((function (switch__40567__auto__,c__40679__auto___43391,out){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_43383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43383[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_43383[(1)] = (1));

return statearr_43383;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_43357){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_43357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e43384){if((e43384 instanceof Object)){
var ex__40571__auto__ = e43384;
var statearr_43385_43406 = state_43357;
(statearr_43385_43406[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43407 = state_43357;
state_43357 = G__43407;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_43357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_43357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___43391,out))
})();
var state__40681__auto__ = (function (){var statearr_43386 = f__40680__auto__.call(null);
(statearr_43386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___43391);

return statearr_43386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___43391,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43408 = [];
var len__37877__auto___43482 = arguments.length;
var i__37878__auto___43483 = (0);
while(true){
if((i__37878__auto___43483 < len__37877__auto___43482)){
args43408.push((arguments[i__37878__auto___43483]));

var G__43484 = (i__37878__auto___43483 + (1));
i__37878__auto___43483 = G__43484;
continue;
} else {
}
break;
}

var G__43410 = args43408.length;
switch (G__43410) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43408.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40679__auto___43486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___43486,out){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___43486,out){
return (function (state_43452){
var state_val_43453 = (state_43452[(1)]);
if((state_val_43453 === (7))){
var inst_43448 = (state_43452[(2)]);
var state_43452__$1 = state_43452;
var statearr_43454_43487 = state_43452__$1;
(statearr_43454_43487[(2)] = inst_43448);

(statearr_43454_43487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (1))){
var inst_43411 = [];
var inst_43412 = inst_43411;
var inst_43413 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43452__$1 = (function (){var statearr_43455 = state_43452;
(statearr_43455[(7)] = inst_43413);

(statearr_43455[(8)] = inst_43412);

return statearr_43455;
})();
var statearr_43456_43488 = state_43452__$1;
(statearr_43456_43488[(2)] = null);

(statearr_43456_43488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (4))){
var inst_43416 = (state_43452[(9)]);
var inst_43416__$1 = (state_43452[(2)]);
var inst_43417 = (inst_43416__$1 == null);
var inst_43418 = cljs.core.not.call(null,inst_43417);
var state_43452__$1 = (function (){var statearr_43457 = state_43452;
(statearr_43457[(9)] = inst_43416__$1);

return statearr_43457;
})();
if(inst_43418){
var statearr_43458_43489 = state_43452__$1;
(statearr_43458_43489[(1)] = (5));

} else {
var statearr_43459_43490 = state_43452__$1;
(statearr_43459_43490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (15))){
var inst_43442 = (state_43452[(2)]);
var state_43452__$1 = state_43452;
var statearr_43460_43491 = state_43452__$1;
(statearr_43460_43491[(2)] = inst_43442);

(statearr_43460_43491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (13))){
var state_43452__$1 = state_43452;
var statearr_43461_43492 = state_43452__$1;
(statearr_43461_43492[(2)] = null);

(statearr_43461_43492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (6))){
var inst_43412 = (state_43452[(8)]);
var inst_43437 = inst_43412.length;
var inst_43438 = (inst_43437 > (0));
var state_43452__$1 = state_43452;
if(cljs.core.truth_(inst_43438)){
var statearr_43462_43493 = state_43452__$1;
(statearr_43462_43493[(1)] = (12));

} else {
var statearr_43463_43494 = state_43452__$1;
(statearr_43463_43494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (3))){
var inst_43450 = (state_43452[(2)]);
var state_43452__$1 = state_43452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43452__$1,inst_43450);
} else {
if((state_val_43453 === (12))){
var inst_43412 = (state_43452[(8)]);
var inst_43440 = cljs.core.vec.call(null,inst_43412);
var state_43452__$1 = state_43452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43452__$1,(15),out,inst_43440);
} else {
if((state_val_43453 === (2))){
var state_43452__$1 = state_43452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43452__$1,(4),ch);
} else {
if((state_val_43453 === (11))){
var inst_43420 = (state_43452[(10)]);
var inst_43416 = (state_43452[(9)]);
var inst_43430 = (state_43452[(2)]);
var inst_43431 = [];
var inst_43432 = inst_43431.push(inst_43416);
var inst_43412 = inst_43431;
var inst_43413 = inst_43420;
var state_43452__$1 = (function (){var statearr_43464 = state_43452;
(statearr_43464[(7)] = inst_43413);

(statearr_43464[(8)] = inst_43412);

(statearr_43464[(11)] = inst_43432);

(statearr_43464[(12)] = inst_43430);

return statearr_43464;
})();
var statearr_43465_43495 = state_43452__$1;
(statearr_43465_43495[(2)] = null);

(statearr_43465_43495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (9))){
var inst_43412 = (state_43452[(8)]);
var inst_43428 = cljs.core.vec.call(null,inst_43412);
var state_43452__$1 = state_43452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43452__$1,(11),out,inst_43428);
} else {
if((state_val_43453 === (5))){
var inst_43413 = (state_43452[(7)]);
var inst_43420 = (state_43452[(10)]);
var inst_43416 = (state_43452[(9)]);
var inst_43420__$1 = f.call(null,inst_43416);
var inst_43421 = cljs.core._EQ_.call(null,inst_43420__$1,inst_43413);
var inst_43422 = cljs.core.keyword_identical_QMARK_.call(null,inst_43413,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43423 = (inst_43421) || (inst_43422);
var state_43452__$1 = (function (){var statearr_43466 = state_43452;
(statearr_43466[(10)] = inst_43420__$1);

return statearr_43466;
})();
if(cljs.core.truth_(inst_43423)){
var statearr_43467_43496 = state_43452__$1;
(statearr_43467_43496[(1)] = (8));

} else {
var statearr_43468_43497 = state_43452__$1;
(statearr_43468_43497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (14))){
var inst_43445 = (state_43452[(2)]);
var inst_43446 = cljs.core.async.close_BANG_.call(null,out);
var state_43452__$1 = (function (){var statearr_43470 = state_43452;
(statearr_43470[(13)] = inst_43445);

return statearr_43470;
})();
var statearr_43471_43498 = state_43452__$1;
(statearr_43471_43498[(2)] = inst_43446);

(statearr_43471_43498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (10))){
var inst_43435 = (state_43452[(2)]);
var state_43452__$1 = state_43452;
var statearr_43472_43499 = state_43452__$1;
(statearr_43472_43499[(2)] = inst_43435);

(statearr_43472_43499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43453 === (8))){
var inst_43420 = (state_43452[(10)]);
var inst_43412 = (state_43452[(8)]);
var inst_43416 = (state_43452[(9)]);
var inst_43425 = inst_43412.push(inst_43416);
var tmp43469 = inst_43412;
var inst_43412__$1 = tmp43469;
var inst_43413 = inst_43420;
var state_43452__$1 = (function (){var statearr_43473 = state_43452;
(statearr_43473[(7)] = inst_43413);

(statearr_43473[(14)] = inst_43425);

(statearr_43473[(8)] = inst_43412__$1);

return statearr_43473;
})();
var statearr_43474_43500 = state_43452__$1;
(statearr_43474_43500[(2)] = null);

(statearr_43474_43500[(1)] = (2));


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
});})(c__40679__auto___43486,out))
;
return ((function (switch__40567__auto__,c__40679__auto___43486,out){
return (function() {
var cljs$core$async$state_machine__40568__auto__ = null;
var cljs$core$async$state_machine__40568__auto____0 = (function (){
var statearr_43478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43478[(0)] = cljs$core$async$state_machine__40568__auto__);

(statearr_43478[(1)] = (1));

return statearr_43478;
});
var cljs$core$async$state_machine__40568__auto____1 = (function (state_43452){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_43452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e43479){if((e43479 instanceof Object)){
var ex__40571__auto__ = e43479;
var statearr_43480_43501 = state_43452;
(statearr_43480_43501[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43502 = state_43452;
state_43452 = G__43502;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
cljs$core$async$state_machine__40568__auto__ = function(state_43452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40568__auto____1.call(this,state_43452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40568__auto____0;
cljs$core$async$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40568__auto____1;
return cljs$core$async$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___43486,out))
})();
var state__40681__auto__ = (function (){var statearr_43481 = f__40680__auto__.call(null);
(statearr_43481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___43486);

return statearr_43481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___43486,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map