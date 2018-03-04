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
var args40725 = [];
var len__37878__auto___40731 = arguments.length;
var i__37879__auto___40732 = (0);
while(true){
if((i__37879__auto___40732 < len__37878__auto___40731)){
args40725.push((arguments[i__37879__auto___40732]));

var G__40733 = (i__37879__auto___40732 + (1));
i__37879__auto___40732 = G__40733;
continue;
} else {
}
break;
}

var G__40727 = args40725.length;
switch (G__40727) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40725.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40728 = (function (f,blockable,meta40729){
this.f = f;
this.blockable = blockable;
this.meta40729 = meta40729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40730,meta40729__$1){
var self__ = this;
var _40730__$1 = this;
return (new cljs.core.async.t_cljs$core$async40728(self__.f,self__.blockable,meta40729__$1));
});

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40730){
var self__ = this;
var _40730__$1 = this;
return self__.meta40729;
});

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40729","meta40729",1006138880,null)], null);
});

cljs.core.async.t_cljs$core$async40728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40728";

cljs.core.async.t_cljs$core$async40728.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async40728");
});

cljs.core.async.__GT_t_cljs$core$async40728 = (function cljs$core$async$__GT_t_cljs$core$async40728(f__$1,blockable__$1,meta40729){
return (new cljs.core.async.t_cljs$core$async40728(f__$1,blockable__$1,meta40729));
});

}

return (new cljs.core.async.t_cljs$core$async40728(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40737 = [];
var len__37878__auto___40740 = arguments.length;
var i__37879__auto___40741 = (0);
while(true){
if((i__37879__auto___40741 < len__37878__auto___40740)){
args40737.push((arguments[i__37879__auto___40741]));

var G__40742 = (i__37879__auto___40741 + (1));
i__37879__auto___40741 = G__40742;
continue;
} else {
}
break;
}

var G__40739 = args40737.length;
switch (G__40739) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40737.length)].join('')));

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
var args40744 = [];
var len__37878__auto___40747 = arguments.length;
var i__37879__auto___40748 = (0);
while(true){
if((i__37879__auto___40748 < len__37878__auto___40747)){
args40744.push((arguments[i__37879__auto___40748]));

var G__40749 = (i__37879__auto___40748 + (1));
i__37879__auto___40748 = G__40749;
continue;
} else {
}
break;
}

var G__40746 = args40744.length;
switch (G__40746) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40744.length)].join('')));

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
var args40751 = [];
var len__37878__auto___40754 = arguments.length;
var i__37879__auto___40755 = (0);
while(true){
if((i__37879__auto___40755 < len__37878__auto___40754)){
args40751.push((arguments[i__37879__auto___40755]));

var G__40756 = (i__37879__auto___40755 + (1));
i__37879__auto___40755 = G__40756;
continue;
} else {
}
break;
}

var G__40753 = args40751.length;
switch (G__40753) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40751.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40758 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40758);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40758,ret){
return (function (){
return fn1.call(null,val_40758);
});})(val_40758,ret))
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
var args40759 = [];
var len__37878__auto___40762 = arguments.length;
var i__37879__auto___40763 = (0);
while(true){
if((i__37879__auto___40763 < len__37878__auto___40762)){
args40759.push((arguments[i__37879__auto___40763]));

var G__40764 = (i__37879__auto___40763 + (1));
i__37879__auto___40763 = G__40764;
continue;
} else {
}
break;
}

var G__40761 = args40759.length;
switch (G__40761) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40759.length)].join('')));

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
var n__37717__auto___40766 = n;
var x_40767 = (0);
while(true){
if((x_40767 < n__37717__auto___40766)){
(a[x_40767] = (0));

var G__40768 = (x_40767 + (1));
x_40767 = G__40768;
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

var G__40769 = (i + (1));
i = G__40769;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40773 = (function (alt_flag,flag,meta40774){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40774 = meta40774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40775,meta40774__$1){
var self__ = this;
var _40775__$1 = this;
return (new cljs.core.async.t_cljs$core$async40773(self__.alt_flag,self__.flag,meta40774__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40775){
var self__ = this;
var _40775__$1 = this;
return self__.meta40774;
});})(flag))
;

cljs.core.async.t_cljs$core$async40773.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40773.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40773.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40774","meta40774",205700165,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40773";

cljs.core.async.t_cljs$core$async40773.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async40773");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40773 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40773(alt_flag__$1,flag__$1,meta40774){
return (new cljs.core.async.t_cljs$core$async40773(alt_flag__$1,flag__$1,meta40774));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40773(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40779 = (function (alt_handler,flag,cb,meta40780){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40780 = meta40780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40781,meta40780__$1){
var self__ = this;
var _40781__$1 = this;
return (new cljs.core.async.t_cljs$core$async40779(self__.alt_handler,self__.flag,self__.cb,meta40780__$1));
});

cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40781){
var self__ = this;
var _40781__$1 = this;
return self__.meta40780;
});

cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40780","meta40780",-1724266611,null)], null);
});

cljs.core.async.t_cljs$core$async40779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40779";

cljs.core.async.t_cljs$core$async40779.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async40779");
});

cljs.core.async.__GT_t_cljs$core$async40779 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40779(alt_handler__$1,flag__$1,cb__$1,meta40780){
return (new cljs.core.async.t_cljs$core$async40779(alt_handler__$1,flag__$1,cb__$1,meta40780));
});

}

return (new cljs.core.async.t_cljs$core$async40779(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40782_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40782_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40783_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40783_SHARP_,port], null));
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
var G__40784 = (i + (1));
i = G__40784;
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
var args__37885__auto__ = [];
var len__37878__auto___40790 = arguments.length;
var i__37879__auto___40791 = (0);
while(true){
if((i__37879__auto___40791 < len__37878__auto___40790)){
args__37885__auto__.push((arguments[i__37879__auto___40791]));

var G__40792 = (i__37879__auto___40791 + (1));
i__37879__auto___40791 = G__40792;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40787){
var map__40788 = p__40787;
var map__40788__$1 = ((((!((map__40788 == null)))?((((map__40788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40788):map__40788);
var opts = map__40788__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40785){
var G__40786 = cljs.core.first.call(null,seq40785);
var seq40785__$1 = cljs.core.next.call(null,seq40785);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40786,seq40785__$1);
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
var args40793 = [];
var len__37878__auto___40843 = arguments.length;
var i__37879__auto___40844 = (0);
while(true){
if((i__37879__auto___40844 < len__37878__auto___40843)){
args40793.push((arguments[i__37879__auto___40844]));

var G__40845 = (i__37879__auto___40844 + (1));
i__37879__auto___40844 = G__40845;
continue;
} else {
}
break;
}

var G__40795 = args40793.length;
switch (G__40795) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40793.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40680__auto___40847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___40847){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___40847){
return (function (state_40819){
var state_val_40820 = (state_40819[(1)]);
if((state_val_40820 === (7))){
var inst_40815 = (state_40819[(2)]);
var state_40819__$1 = state_40819;
var statearr_40821_40848 = state_40819__$1;
(statearr_40821_40848[(2)] = inst_40815);

(statearr_40821_40848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (1))){
var state_40819__$1 = state_40819;
var statearr_40822_40849 = state_40819__$1;
(statearr_40822_40849[(2)] = null);

(statearr_40822_40849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (4))){
var inst_40798 = (state_40819[(7)]);
var inst_40798__$1 = (state_40819[(2)]);
var inst_40799 = (inst_40798__$1 == null);
var state_40819__$1 = (function (){var statearr_40823 = state_40819;
(statearr_40823[(7)] = inst_40798__$1);

return statearr_40823;
})();
if(cljs.core.truth_(inst_40799)){
var statearr_40824_40850 = state_40819__$1;
(statearr_40824_40850[(1)] = (5));

} else {
var statearr_40825_40851 = state_40819__$1;
(statearr_40825_40851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (13))){
var state_40819__$1 = state_40819;
var statearr_40826_40852 = state_40819__$1;
(statearr_40826_40852[(2)] = null);

(statearr_40826_40852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (6))){
var inst_40798 = (state_40819[(7)]);
var state_40819__$1 = state_40819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40819__$1,(11),to,inst_40798);
} else {
if((state_val_40820 === (3))){
var inst_40817 = (state_40819[(2)]);
var state_40819__$1 = state_40819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40819__$1,inst_40817);
} else {
if((state_val_40820 === (12))){
var state_40819__$1 = state_40819;
var statearr_40827_40853 = state_40819__$1;
(statearr_40827_40853[(2)] = null);

(statearr_40827_40853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (2))){
var state_40819__$1 = state_40819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40819__$1,(4),from);
} else {
if((state_val_40820 === (11))){
var inst_40808 = (state_40819[(2)]);
var state_40819__$1 = state_40819;
if(cljs.core.truth_(inst_40808)){
var statearr_40828_40854 = state_40819__$1;
(statearr_40828_40854[(1)] = (12));

} else {
var statearr_40829_40855 = state_40819__$1;
(statearr_40829_40855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (9))){
var state_40819__$1 = state_40819;
var statearr_40830_40856 = state_40819__$1;
(statearr_40830_40856[(2)] = null);

(statearr_40830_40856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (5))){
var state_40819__$1 = state_40819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40831_40857 = state_40819__$1;
(statearr_40831_40857[(1)] = (8));

} else {
var statearr_40832_40858 = state_40819__$1;
(statearr_40832_40858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (14))){
var inst_40813 = (state_40819[(2)]);
var state_40819__$1 = state_40819;
var statearr_40833_40859 = state_40819__$1;
(statearr_40833_40859[(2)] = inst_40813);

(statearr_40833_40859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (10))){
var inst_40805 = (state_40819[(2)]);
var state_40819__$1 = state_40819;
var statearr_40834_40860 = state_40819__$1;
(statearr_40834_40860[(2)] = inst_40805);

(statearr_40834_40860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40820 === (8))){
var inst_40802 = cljs.core.async.close_BANG_.call(null,to);
var state_40819__$1 = state_40819;
var statearr_40835_40861 = state_40819__$1;
(statearr_40835_40861[(2)] = inst_40802);

(statearr_40835_40861[(1)] = (10));


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
});})(c__40680__auto___40847))
;
return ((function (switch__40568__auto__,c__40680__auto___40847){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_40839 = [null,null,null,null,null,null,null,null];
(statearr_40839[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_40839[(1)] = (1));

return statearr_40839;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_40819){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_40819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e40840){if((e40840 instanceof Object)){
var ex__40572__auto__ = e40840;
var statearr_40841_40862 = state_40819;
(statearr_40841_40862[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40863 = state_40819;
state_40819 = G__40863;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_40819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_40819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___40847))
})();
var state__40682__auto__ = (function (){var statearr_40842 = f__40681__auto__.call(null);
(statearr_40842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___40847);

return statearr_40842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___40847))
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
return (function (p__41051){
var vec__41052 = p__41051;
var v = cljs.core.nth.call(null,vec__41052,(0),null);
var p = cljs.core.nth.call(null,vec__41052,(1),null);
var job = vec__41052;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40680__auto___41238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___41238,res,vec__41052,v,p,job,jobs,results){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___41238,res,vec__41052,v,p,job,jobs,results){
return (function (state_41059){
var state_val_41060 = (state_41059[(1)]);
if((state_val_41060 === (1))){
var state_41059__$1 = state_41059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41059__$1,(2),res,v);
} else {
if((state_val_41060 === (2))){
var inst_41056 = (state_41059[(2)]);
var inst_41057 = cljs.core.async.close_BANG_.call(null,res);
var state_41059__$1 = (function (){var statearr_41061 = state_41059;
(statearr_41061[(7)] = inst_41056);

return statearr_41061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41059__$1,inst_41057);
} else {
return null;
}
}
});})(c__40680__auto___41238,res,vec__41052,v,p,job,jobs,results))
;
return ((function (switch__40568__auto__,c__40680__auto___41238,res,vec__41052,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0 = (function (){
var statearr_41065 = [null,null,null,null,null,null,null,null];
(statearr_41065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__);

(statearr_41065[(1)] = (1));

return statearr_41065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1 = (function (state_41059){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41066){if((e41066 instanceof Object)){
var ex__40572__auto__ = e41066;
var statearr_41067_41239 = state_41059;
(statearr_41067_41239[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41240 = state_41059;
state_41059 = G__41240;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = function(state_41059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1.call(this,state_41059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___41238,res,vec__41052,v,p,job,jobs,results))
})();
var state__40682__auto__ = (function (){var statearr_41068 = f__40681__auto__.call(null);
(statearr_41068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___41238);

return statearr_41068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___41238,res,vec__41052,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41069){
var vec__41070 = p__41069;
var v = cljs.core.nth.call(null,vec__41070,(0),null);
var p = cljs.core.nth.call(null,vec__41070,(1),null);
var job = vec__41070;
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
var n__37717__auto___41241 = n;
var __41242 = (0);
while(true){
if((__41242 < n__37717__auto___41241)){
var G__41073_41243 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41073_41243) {
case "compute":
var c__40680__auto___41245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41242,c__40680__auto___41245,G__41073_41243,n__37717__auto___41241,jobs,results,process,async){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (__41242,c__40680__auto___41245,G__41073_41243,n__37717__auto___41241,jobs,results,process,async){
return (function (state_41086){
var state_val_41087 = (state_41086[(1)]);
if((state_val_41087 === (1))){
var state_41086__$1 = state_41086;
var statearr_41088_41246 = state_41086__$1;
(statearr_41088_41246[(2)] = null);

(statearr_41088_41246[(1)] = (2));


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
var inst_41077 = process.call(null,inst_41076);
var state_41086__$1 = state_41086;
if(cljs.core.truth_(inst_41077)){
var statearr_41089_41247 = state_41086__$1;
(statearr_41089_41247[(1)] = (5));

} else {
var statearr_41090_41248 = state_41086__$1;
(statearr_41090_41248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (5))){
var state_41086__$1 = state_41086;
var statearr_41091_41249 = state_41086__$1;
(statearr_41091_41249[(2)] = null);

(statearr_41091_41249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (6))){
var state_41086__$1 = state_41086;
var statearr_41092_41250 = state_41086__$1;
(statearr_41092_41250[(2)] = null);

(statearr_41092_41250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (7))){
var inst_41082 = (state_41086[(2)]);
var state_41086__$1 = state_41086;
var statearr_41093_41251 = state_41086__$1;
(statearr_41093_41251[(2)] = inst_41082);

(statearr_41093_41251[(1)] = (3));


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
});})(__41242,c__40680__auto___41245,G__41073_41243,n__37717__auto___41241,jobs,results,process,async))
;
return ((function (__41242,switch__40568__auto__,c__40680__auto___41245,G__41073_41243,n__37717__auto___41241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0 = (function (){
var statearr_41097 = [null,null,null,null,null,null,null];
(statearr_41097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__);

(statearr_41097[(1)] = (1));

return statearr_41097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1 = (function (state_41086){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41098){if((e41098 instanceof Object)){
var ex__40572__auto__ = e41098;
var statearr_41099_41252 = state_41086;
(statearr_41099_41252[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41253 = state_41086;
state_41086 = G__41253;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = function(state_41086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1.call(this,state_41086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__;
})()
;})(__41242,switch__40568__auto__,c__40680__auto___41245,G__41073_41243,n__37717__auto___41241,jobs,results,process,async))
})();
var state__40682__auto__ = (function (){var statearr_41100 = f__40681__auto__.call(null);
(statearr_41100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___41245);

return statearr_41100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(__41242,c__40680__auto___41245,G__41073_41243,n__37717__auto___41241,jobs,results,process,async))
);


break;
case "async":
var c__40680__auto___41254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41242,c__40680__auto___41254,G__41073_41243,n__37717__auto___41241,jobs,results,process,async){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (__41242,c__40680__auto___41254,G__41073_41243,n__37717__auto___41241,jobs,results,process,async){
return (function (state_41113){
var state_val_41114 = (state_41113[(1)]);
if((state_val_41114 === (1))){
var state_41113__$1 = state_41113;
var statearr_41115_41255 = state_41113__$1;
(statearr_41115_41255[(2)] = null);

(statearr_41115_41255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (2))){
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41113__$1,(4),jobs);
} else {
if((state_val_41114 === (3))){
var inst_41111 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41113__$1,inst_41111);
} else {
if((state_val_41114 === (4))){
var inst_41103 = (state_41113[(2)]);
var inst_41104 = async.call(null,inst_41103);
var state_41113__$1 = state_41113;
if(cljs.core.truth_(inst_41104)){
var statearr_41116_41256 = state_41113__$1;
(statearr_41116_41256[(1)] = (5));

} else {
var statearr_41117_41257 = state_41113__$1;
(statearr_41117_41257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (5))){
var state_41113__$1 = state_41113;
var statearr_41118_41258 = state_41113__$1;
(statearr_41118_41258[(2)] = null);

(statearr_41118_41258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (6))){
var state_41113__$1 = state_41113;
var statearr_41119_41259 = state_41113__$1;
(statearr_41119_41259[(2)] = null);

(statearr_41119_41259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (7))){
var inst_41109 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
var statearr_41120_41260 = state_41113__$1;
(statearr_41120_41260[(2)] = inst_41109);

(statearr_41120_41260[(1)] = (3));


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
});})(__41242,c__40680__auto___41254,G__41073_41243,n__37717__auto___41241,jobs,results,process,async))
;
return ((function (__41242,switch__40568__auto__,c__40680__auto___41254,G__41073_41243,n__37717__auto___41241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0 = (function (){
var statearr_41124 = [null,null,null,null,null,null,null];
(statearr_41124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__);

(statearr_41124[(1)] = (1));

return statearr_41124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1 = (function (state_41113){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41125){if((e41125 instanceof Object)){
var ex__40572__auto__ = e41125;
var statearr_41126_41261 = state_41113;
(statearr_41126_41261[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41262 = state_41113;
state_41113 = G__41262;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = function(state_41113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1.call(this,state_41113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__;
})()
;})(__41242,switch__40568__auto__,c__40680__auto___41254,G__41073_41243,n__37717__auto___41241,jobs,results,process,async))
})();
var state__40682__auto__ = (function (){var statearr_41127 = f__40681__auto__.call(null);
(statearr_41127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___41254);

return statearr_41127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(__41242,c__40680__auto___41254,G__41073_41243,n__37717__auto___41241,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41263 = (__41242 + (1));
__41242 = G__41263;
continue;
} else {
}
break;
}

var c__40680__auto___41264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___41264,jobs,results,process,async){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___41264,jobs,results,process,async){
return (function (state_41149){
var state_val_41150 = (state_41149[(1)]);
if((state_val_41150 === (1))){
var state_41149__$1 = state_41149;
var statearr_41151_41265 = state_41149__$1;
(statearr_41151_41265[(2)] = null);

(statearr_41151_41265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41150 === (2))){
var state_41149__$1 = state_41149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41149__$1,(4),from);
} else {
if((state_val_41150 === (3))){
var inst_41147 = (state_41149[(2)]);
var state_41149__$1 = state_41149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41149__$1,inst_41147);
} else {
if((state_val_41150 === (4))){
var inst_41130 = (state_41149[(7)]);
var inst_41130__$1 = (state_41149[(2)]);
var inst_41131 = (inst_41130__$1 == null);
var state_41149__$1 = (function (){var statearr_41152 = state_41149;
(statearr_41152[(7)] = inst_41130__$1);

return statearr_41152;
})();
if(cljs.core.truth_(inst_41131)){
var statearr_41153_41266 = state_41149__$1;
(statearr_41153_41266[(1)] = (5));

} else {
var statearr_41154_41267 = state_41149__$1;
(statearr_41154_41267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41150 === (5))){
var inst_41133 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41149__$1 = state_41149;
var statearr_41155_41268 = state_41149__$1;
(statearr_41155_41268[(2)] = inst_41133);

(statearr_41155_41268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41150 === (6))){
var inst_41130 = (state_41149[(7)]);
var inst_41135 = (state_41149[(8)]);
var inst_41135__$1 = cljs.core.async.chan.call(null,(1));
var inst_41136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41137 = [inst_41130,inst_41135__$1];
var inst_41138 = (new cljs.core.PersistentVector(null,2,(5),inst_41136,inst_41137,null));
var state_41149__$1 = (function (){var statearr_41156 = state_41149;
(statearr_41156[(8)] = inst_41135__$1);

return statearr_41156;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41149__$1,(8),jobs,inst_41138);
} else {
if((state_val_41150 === (7))){
var inst_41145 = (state_41149[(2)]);
var state_41149__$1 = state_41149;
var statearr_41157_41269 = state_41149__$1;
(statearr_41157_41269[(2)] = inst_41145);

(statearr_41157_41269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41150 === (8))){
var inst_41135 = (state_41149[(8)]);
var inst_41140 = (state_41149[(2)]);
var state_41149__$1 = (function (){var statearr_41158 = state_41149;
(statearr_41158[(9)] = inst_41140);

return statearr_41158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41149__$1,(9),results,inst_41135);
} else {
if((state_val_41150 === (9))){
var inst_41142 = (state_41149[(2)]);
var state_41149__$1 = (function (){var statearr_41159 = state_41149;
(statearr_41159[(10)] = inst_41142);

return statearr_41159;
})();
var statearr_41160_41270 = state_41149__$1;
(statearr_41160_41270[(2)] = null);

(statearr_41160_41270[(1)] = (2));


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
});})(c__40680__auto___41264,jobs,results,process,async))
;
return ((function (switch__40568__auto__,c__40680__auto___41264,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0 = (function (){
var statearr_41164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__);

(statearr_41164[(1)] = (1));

return statearr_41164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1 = (function (state_41149){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41165){if((e41165 instanceof Object)){
var ex__40572__auto__ = e41165;
var statearr_41166_41271 = state_41149;
(statearr_41166_41271[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41272 = state_41149;
state_41149 = G__41272;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = function(state_41149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1.call(this,state_41149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___41264,jobs,results,process,async))
})();
var state__40682__auto__ = (function (){var statearr_41167 = f__40681__auto__.call(null);
(statearr_41167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___41264);

return statearr_41167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___41264,jobs,results,process,async))
);


var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__,jobs,results,process,async){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__,jobs,results,process,async){
return (function (state_41205){
var state_val_41206 = (state_41205[(1)]);
if((state_val_41206 === (7))){
var inst_41201 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
var statearr_41207_41273 = state_41205__$1;
(statearr_41207_41273[(2)] = inst_41201);

(statearr_41207_41273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (20))){
var state_41205__$1 = state_41205;
var statearr_41208_41274 = state_41205__$1;
(statearr_41208_41274[(2)] = null);

(statearr_41208_41274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (1))){
var state_41205__$1 = state_41205;
var statearr_41209_41275 = state_41205__$1;
(statearr_41209_41275[(2)] = null);

(statearr_41209_41275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (4))){
var inst_41170 = (state_41205[(7)]);
var inst_41170__$1 = (state_41205[(2)]);
var inst_41171 = (inst_41170__$1 == null);
var state_41205__$1 = (function (){var statearr_41210 = state_41205;
(statearr_41210[(7)] = inst_41170__$1);

return statearr_41210;
})();
if(cljs.core.truth_(inst_41171)){
var statearr_41211_41276 = state_41205__$1;
(statearr_41211_41276[(1)] = (5));

} else {
var statearr_41212_41277 = state_41205__$1;
(statearr_41212_41277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (15))){
var inst_41183 = (state_41205[(8)]);
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41205__$1,(18),to,inst_41183);
} else {
if((state_val_41206 === (21))){
var inst_41196 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
var statearr_41213_41278 = state_41205__$1;
(statearr_41213_41278[(2)] = inst_41196);

(statearr_41213_41278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (13))){
var inst_41198 = (state_41205[(2)]);
var state_41205__$1 = (function (){var statearr_41214 = state_41205;
(statearr_41214[(9)] = inst_41198);

return statearr_41214;
})();
var statearr_41215_41279 = state_41205__$1;
(statearr_41215_41279[(2)] = null);

(statearr_41215_41279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (6))){
var inst_41170 = (state_41205[(7)]);
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41205__$1,(11),inst_41170);
} else {
if((state_val_41206 === (17))){
var inst_41191 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
if(cljs.core.truth_(inst_41191)){
var statearr_41216_41280 = state_41205__$1;
(statearr_41216_41280[(1)] = (19));

} else {
var statearr_41217_41281 = state_41205__$1;
(statearr_41217_41281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (3))){
var inst_41203 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41205__$1,inst_41203);
} else {
if((state_val_41206 === (12))){
var inst_41180 = (state_41205[(10)]);
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41205__$1,(14),inst_41180);
} else {
if((state_val_41206 === (2))){
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41205__$1,(4),results);
} else {
if((state_val_41206 === (19))){
var state_41205__$1 = state_41205;
var statearr_41218_41282 = state_41205__$1;
(statearr_41218_41282[(2)] = null);

(statearr_41218_41282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (11))){
var inst_41180 = (state_41205[(2)]);
var state_41205__$1 = (function (){var statearr_41219 = state_41205;
(statearr_41219[(10)] = inst_41180);

return statearr_41219;
})();
var statearr_41220_41283 = state_41205__$1;
(statearr_41220_41283[(2)] = null);

(statearr_41220_41283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (9))){
var state_41205__$1 = state_41205;
var statearr_41221_41284 = state_41205__$1;
(statearr_41221_41284[(2)] = null);

(statearr_41221_41284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (5))){
var state_41205__$1 = state_41205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41222_41285 = state_41205__$1;
(statearr_41222_41285[(1)] = (8));

} else {
var statearr_41223_41286 = state_41205__$1;
(statearr_41223_41286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (14))){
var inst_41183 = (state_41205[(8)]);
var inst_41185 = (state_41205[(11)]);
var inst_41183__$1 = (state_41205[(2)]);
var inst_41184 = (inst_41183__$1 == null);
var inst_41185__$1 = cljs.core.not.call(null,inst_41184);
var state_41205__$1 = (function (){var statearr_41224 = state_41205;
(statearr_41224[(8)] = inst_41183__$1);

(statearr_41224[(11)] = inst_41185__$1);

return statearr_41224;
})();
if(inst_41185__$1){
var statearr_41225_41287 = state_41205__$1;
(statearr_41225_41287[(1)] = (15));

} else {
var statearr_41226_41288 = state_41205__$1;
(statearr_41226_41288[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (16))){
var inst_41185 = (state_41205[(11)]);
var state_41205__$1 = state_41205;
var statearr_41227_41289 = state_41205__$1;
(statearr_41227_41289[(2)] = inst_41185);

(statearr_41227_41289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (10))){
var inst_41177 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
var statearr_41228_41290 = state_41205__$1;
(statearr_41228_41290[(2)] = inst_41177);

(statearr_41228_41290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (18))){
var inst_41188 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
var statearr_41229_41291 = state_41205__$1;
(statearr_41229_41291[(2)] = inst_41188);

(statearr_41229_41291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (8))){
var inst_41174 = cljs.core.async.close_BANG_.call(null,to);
var state_41205__$1 = state_41205;
var statearr_41230_41292 = state_41205__$1;
(statearr_41230_41292[(2)] = inst_41174);

(statearr_41230_41292[(1)] = (10));


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
});})(c__40680__auto__,jobs,results,process,async))
;
return ((function (switch__40568__auto__,c__40680__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0 = (function (){
var statearr_41234 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__);

(statearr_41234[(1)] = (1));

return statearr_41234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1 = (function (state_41205){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41235){if((e41235 instanceof Object)){
var ex__40572__auto__ = e41235;
var statearr_41236_41293 = state_41205;
(statearr_41236_41293[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41294 = state_41205;
state_41205 = G__41294;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__ = function(state_41205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1.call(this,state_41205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__,jobs,results,process,async))
})();
var state__40682__auto__ = (function (){var statearr_41237 = f__40681__auto__.call(null);
(statearr_41237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_41237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__,jobs,results,process,async))
);

return c__40680__auto__;
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
var args41295 = [];
var len__37878__auto___41298 = arguments.length;
var i__37879__auto___41299 = (0);
while(true){
if((i__37879__auto___41299 < len__37878__auto___41298)){
args41295.push((arguments[i__37879__auto___41299]));

var G__41300 = (i__37879__auto___41299 + (1));
i__37879__auto___41299 = G__41300;
continue;
} else {
}
break;
}

var G__41297 = args41295.length;
switch (G__41297) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41295.length)].join('')));

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
var args41302 = [];
var len__37878__auto___41305 = arguments.length;
var i__37879__auto___41306 = (0);
while(true){
if((i__37879__auto___41306 < len__37878__auto___41305)){
args41302.push((arguments[i__37879__auto___41306]));

var G__41307 = (i__37879__auto___41306 + (1));
i__37879__auto___41306 = G__41307;
continue;
} else {
}
break;
}

var G__41304 = args41302.length;
switch (G__41304) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41302.length)].join('')));

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
var args41309 = [];
var len__37878__auto___41362 = arguments.length;
var i__37879__auto___41363 = (0);
while(true){
if((i__37879__auto___41363 < len__37878__auto___41362)){
args41309.push((arguments[i__37879__auto___41363]));

var G__41364 = (i__37879__auto___41363 + (1));
i__37879__auto___41363 = G__41364;
continue;
} else {
}
break;
}

var G__41311 = args41309.length;
switch (G__41311) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41309.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40680__auto___41366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___41366,tc,fc){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___41366,tc,fc){
return (function (state_41337){
var state_val_41338 = (state_41337[(1)]);
if((state_val_41338 === (7))){
var inst_41333 = (state_41337[(2)]);
var state_41337__$1 = state_41337;
var statearr_41339_41367 = state_41337__$1;
(statearr_41339_41367[(2)] = inst_41333);

(statearr_41339_41367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (1))){
var state_41337__$1 = state_41337;
var statearr_41340_41368 = state_41337__$1;
(statearr_41340_41368[(2)] = null);

(statearr_41340_41368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (4))){
var inst_41314 = (state_41337[(7)]);
var inst_41314__$1 = (state_41337[(2)]);
var inst_41315 = (inst_41314__$1 == null);
var state_41337__$1 = (function (){var statearr_41341 = state_41337;
(statearr_41341[(7)] = inst_41314__$1);

return statearr_41341;
})();
if(cljs.core.truth_(inst_41315)){
var statearr_41342_41369 = state_41337__$1;
(statearr_41342_41369[(1)] = (5));

} else {
var statearr_41343_41370 = state_41337__$1;
(statearr_41343_41370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (13))){
var state_41337__$1 = state_41337;
var statearr_41344_41371 = state_41337__$1;
(statearr_41344_41371[(2)] = null);

(statearr_41344_41371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (6))){
var inst_41314 = (state_41337[(7)]);
var inst_41320 = p.call(null,inst_41314);
var state_41337__$1 = state_41337;
if(cljs.core.truth_(inst_41320)){
var statearr_41345_41372 = state_41337__$1;
(statearr_41345_41372[(1)] = (9));

} else {
var statearr_41346_41373 = state_41337__$1;
(statearr_41346_41373[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (3))){
var inst_41335 = (state_41337[(2)]);
var state_41337__$1 = state_41337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41337__$1,inst_41335);
} else {
if((state_val_41338 === (12))){
var state_41337__$1 = state_41337;
var statearr_41347_41374 = state_41337__$1;
(statearr_41347_41374[(2)] = null);

(statearr_41347_41374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (2))){
var state_41337__$1 = state_41337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41337__$1,(4),ch);
} else {
if((state_val_41338 === (11))){
var inst_41314 = (state_41337[(7)]);
var inst_41324 = (state_41337[(2)]);
var state_41337__$1 = state_41337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41337__$1,(8),inst_41324,inst_41314);
} else {
if((state_val_41338 === (9))){
var state_41337__$1 = state_41337;
var statearr_41348_41375 = state_41337__$1;
(statearr_41348_41375[(2)] = tc);

(statearr_41348_41375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (5))){
var inst_41317 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41318 = cljs.core.async.close_BANG_.call(null,fc);
var state_41337__$1 = (function (){var statearr_41349 = state_41337;
(statearr_41349[(8)] = inst_41317);

return statearr_41349;
})();
var statearr_41350_41376 = state_41337__$1;
(statearr_41350_41376[(2)] = inst_41318);

(statearr_41350_41376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (14))){
var inst_41331 = (state_41337[(2)]);
var state_41337__$1 = state_41337;
var statearr_41351_41377 = state_41337__$1;
(statearr_41351_41377[(2)] = inst_41331);

(statearr_41351_41377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (10))){
var state_41337__$1 = state_41337;
var statearr_41352_41378 = state_41337__$1;
(statearr_41352_41378[(2)] = fc);

(statearr_41352_41378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41338 === (8))){
var inst_41326 = (state_41337[(2)]);
var state_41337__$1 = state_41337;
if(cljs.core.truth_(inst_41326)){
var statearr_41353_41379 = state_41337__$1;
(statearr_41353_41379[(1)] = (12));

} else {
var statearr_41354_41380 = state_41337__$1;
(statearr_41354_41380[(1)] = (13));

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
});})(c__40680__auto___41366,tc,fc))
;
return ((function (switch__40568__auto__,c__40680__auto___41366,tc,fc){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_41358 = [null,null,null,null,null,null,null,null,null];
(statearr_41358[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_41358[(1)] = (1));

return statearr_41358;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_41337){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41359){if((e41359 instanceof Object)){
var ex__40572__auto__ = e41359;
var statearr_41360_41381 = state_41337;
(statearr_41360_41381[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41382 = state_41337;
state_41337 = G__41382;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_41337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_41337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___41366,tc,fc))
})();
var state__40682__auto__ = (function (){var statearr_41361 = f__40681__auto__.call(null);
(statearr_41361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___41366);

return statearr_41361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___41366,tc,fc))
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
var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__){
return (function (state_41446){
var state_val_41447 = (state_41446[(1)]);
if((state_val_41447 === (7))){
var inst_41442 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
var statearr_41448_41469 = state_41446__$1;
(statearr_41448_41469[(2)] = inst_41442);

(statearr_41448_41469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (1))){
var inst_41426 = init;
var state_41446__$1 = (function (){var statearr_41449 = state_41446;
(statearr_41449[(7)] = inst_41426);

return statearr_41449;
})();
var statearr_41450_41470 = state_41446__$1;
(statearr_41450_41470[(2)] = null);

(statearr_41450_41470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (4))){
var inst_41429 = (state_41446[(8)]);
var inst_41429__$1 = (state_41446[(2)]);
var inst_41430 = (inst_41429__$1 == null);
var state_41446__$1 = (function (){var statearr_41451 = state_41446;
(statearr_41451[(8)] = inst_41429__$1);

return statearr_41451;
})();
if(cljs.core.truth_(inst_41430)){
var statearr_41452_41471 = state_41446__$1;
(statearr_41452_41471[(1)] = (5));

} else {
var statearr_41453_41472 = state_41446__$1;
(statearr_41453_41472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (6))){
var inst_41429 = (state_41446[(8)]);
var inst_41433 = (state_41446[(9)]);
var inst_41426 = (state_41446[(7)]);
var inst_41433__$1 = f.call(null,inst_41426,inst_41429);
var inst_41434 = cljs.core.reduced_QMARK_.call(null,inst_41433__$1);
var state_41446__$1 = (function (){var statearr_41454 = state_41446;
(statearr_41454[(9)] = inst_41433__$1);

return statearr_41454;
})();
if(inst_41434){
var statearr_41455_41473 = state_41446__$1;
(statearr_41455_41473[(1)] = (8));

} else {
var statearr_41456_41474 = state_41446__$1;
(statearr_41456_41474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (3))){
var inst_41444 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41446__$1,inst_41444);
} else {
if((state_val_41447 === (2))){
var state_41446__$1 = state_41446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41446__$1,(4),ch);
} else {
if((state_val_41447 === (9))){
var inst_41433 = (state_41446[(9)]);
var inst_41426 = inst_41433;
var state_41446__$1 = (function (){var statearr_41457 = state_41446;
(statearr_41457[(7)] = inst_41426);

return statearr_41457;
})();
var statearr_41458_41475 = state_41446__$1;
(statearr_41458_41475[(2)] = null);

(statearr_41458_41475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (5))){
var inst_41426 = (state_41446[(7)]);
var state_41446__$1 = state_41446;
var statearr_41459_41476 = state_41446__$1;
(statearr_41459_41476[(2)] = inst_41426);

(statearr_41459_41476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (10))){
var inst_41440 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
var statearr_41460_41477 = state_41446__$1;
(statearr_41460_41477[(2)] = inst_41440);

(statearr_41460_41477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (8))){
var inst_41433 = (state_41446[(9)]);
var inst_41436 = cljs.core.deref.call(null,inst_41433);
var state_41446__$1 = state_41446;
var statearr_41461_41478 = state_41446__$1;
(statearr_41461_41478[(2)] = inst_41436);

(statearr_41461_41478[(1)] = (10));


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
});})(c__40680__auto__))
;
return ((function (switch__40568__auto__,c__40680__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40569__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40569__auto____0 = (function (){
var statearr_41465 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41465[(0)] = cljs$core$async$reduce_$_state_machine__40569__auto__);

(statearr_41465[(1)] = (1));

return statearr_41465;
});
var cljs$core$async$reduce_$_state_machine__40569__auto____1 = (function (state_41446){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41466){if((e41466 instanceof Object)){
var ex__40572__auto__ = e41466;
var statearr_41467_41479 = state_41446;
(statearr_41467_41479[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41480 = state_41446;
state_41446 = G__41480;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40569__auto__ = function(state_41446){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40569__auto____1.call(this,state_41446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40569__auto____0;
cljs$core$async$reduce_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40569__auto____1;
return cljs$core$async$reduce_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__))
})();
var state__40682__auto__ = (function (){var statearr_41468 = f__40681__auto__.call(null);
(statearr_41468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_41468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__))
);

return c__40680__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__,f__$1){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__,f__$1){
return (function (state_41500){
var state_val_41501 = (state_41500[(1)]);
if((state_val_41501 === (1))){
var inst_41495 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41500__$1 = state_41500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41500__$1,(2),inst_41495);
} else {
if((state_val_41501 === (2))){
var inst_41497 = (state_41500[(2)]);
var inst_41498 = f__$1.call(null,inst_41497);
var state_41500__$1 = state_41500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41500__$1,inst_41498);
} else {
return null;
}
}
});})(c__40680__auto__,f__$1))
;
return ((function (switch__40568__auto__,c__40680__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40569__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40569__auto____0 = (function (){
var statearr_41505 = [null,null,null,null,null,null,null];
(statearr_41505[(0)] = cljs$core$async$transduce_$_state_machine__40569__auto__);

(statearr_41505[(1)] = (1));

return statearr_41505;
});
var cljs$core$async$transduce_$_state_machine__40569__auto____1 = (function (state_41500){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41506){if((e41506 instanceof Object)){
var ex__40572__auto__ = e41506;
var statearr_41507_41509 = state_41500;
(statearr_41507_41509[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41510 = state_41500;
state_41500 = G__41510;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40569__auto__ = function(state_41500){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40569__auto____1.call(this,state_41500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40569__auto____0;
cljs$core$async$transduce_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40569__auto____1;
return cljs$core$async$transduce_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__,f__$1))
})();
var state__40682__auto__ = (function (){var statearr_41508 = f__40681__auto__.call(null);
(statearr_41508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_41508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__,f__$1))
);

return c__40680__auto__;
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
var args41511 = [];
var len__37878__auto___41563 = arguments.length;
var i__37879__auto___41564 = (0);
while(true){
if((i__37879__auto___41564 < len__37878__auto___41563)){
args41511.push((arguments[i__37879__auto___41564]));

var G__41565 = (i__37879__auto___41564 + (1));
i__37879__auto___41564 = G__41565;
continue;
} else {
}
break;
}

var G__41513 = args41511.length;
switch (G__41513) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41511.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__){
return (function (state_41538){
var state_val_41539 = (state_41538[(1)]);
if((state_val_41539 === (7))){
var inst_41520 = (state_41538[(2)]);
var state_41538__$1 = state_41538;
var statearr_41540_41567 = state_41538__$1;
(statearr_41540_41567[(2)] = inst_41520);

(statearr_41540_41567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (1))){
var inst_41514 = cljs.core.seq.call(null,coll);
var inst_41515 = inst_41514;
var state_41538__$1 = (function (){var statearr_41541 = state_41538;
(statearr_41541[(7)] = inst_41515);

return statearr_41541;
})();
var statearr_41542_41568 = state_41538__$1;
(statearr_41542_41568[(2)] = null);

(statearr_41542_41568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (4))){
var inst_41515 = (state_41538[(7)]);
var inst_41518 = cljs.core.first.call(null,inst_41515);
var state_41538__$1 = state_41538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41538__$1,(7),ch,inst_41518);
} else {
if((state_val_41539 === (13))){
var inst_41532 = (state_41538[(2)]);
var state_41538__$1 = state_41538;
var statearr_41543_41569 = state_41538__$1;
(statearr_41543_41569[(2)] = inst_41532);

(statearr_41543_41569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (6))){
var inst_41523 = (state_41538[(2)]);
var state_41538__$1 = state_41538;
if(cljs.core.truth_(inst_41523)){
var statearr_41544_41570 = state_41538__$1;
(statearr_41544_41570[(1)] = (8));

} else {
var statearr_41545_41571 = state_41538__$1;
(statearr_41545_41571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (3))){
var inst_41536 = (state_41538[(2)]);
var state_41538__$1 = state_41538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41538__$1,inst_41536);
} else {
if((state_val_41539 === (12))){
var state_41538__$1 = state_41538;
var statearr_41546_41572 = state_41538__$1;
(statearr_41546_41572[(2)] = null);

(statearr_41546_41572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (2))){
var inst_41515 = (state_41538[(7)]);
var state_41538__$1 = state_41538;
if(cljs.core.truth_(inst_41515)){
var statearr_41547_41573 = state_41538__$1;
(statearr_41547_41573[(1)] = (4));

} else {
var statearr_41548_41574 = state_41538__$1;
(statearr_41548_41574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (11))){
var inst_41529 = cljs.core.async.close_BANG_.call(null,ch);
var state_41538__$1 = state_41538;
var statearr_41549_41575 = state_41538__$1;
(statearr_41549_41575[(2)] = inst_41529);

(statearr_41549_41575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (9))){
var state_41538__$1 = state_41538;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41550_41576 = state_41538__$1;
(statearr_41550_41576[(1)] = (11));

} else {
var statearr_41551_41577 = state_41538__$1;
(statearr_41551_41577[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (5))){
var inst_41515 = (state_41538[(7)]);
var state_41538__$1 = state_41538;
var statearr_41552_41578 = state_41538__$1;
(statearr_41552_41578[(2)] = inst_41515);

(statearr_41552_41578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (10))){
var inst_41534 = (state_41538[(2)]);
var state_41538__$1 = state_41538;
var statearr_41553_41579 = state_41538__$1;
(statearr_41553_41579[(2)] = inst_41534);

(statearr_41553_41579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41539 === (8))){
var inst_41515 = (state_41538[(7)]);
var inst_41525 = cljs.core.next.call(null,inst_41515);
var inst_41515__$1 = inst_41525;
var state_41538__$1 = (function (){var statearr_41554 = state_41538;
(statearr_41554[(7)] = inst_41515__$1);

return statearr_41554;
})();
var statearr_41555_41580 = state_41538__$1;
(statearr_41555_41580[(2)] = null);

(statearr_41555_41580[(1)] = (2));


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
});})(c__40680__auto__))
;
return ((function (switch__40568__auto__,c__40680__auto__){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_41559 = [null,null,null,null,null,null,null,null];
(statearr_41559[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_41559[(1)] = (1));

return statearr_41559;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_41538){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e41560){if((e41560 instanceof Object)){
var ex__40572__auto__ = e41560;
var statearr_41561_41581 = state_41538;
(statearr_41561_41581[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41582 = state_41538;
state_41538 = G__41582;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_41538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_41538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__))
})();
var state__40682__auto__ = (function (){var statearr_41562 = f__40681__auto__.call(null);
(statearr_41562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_41562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__))
);

return c__40680__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async41808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41808 = (function (mult,ch,cs,meta41809){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41809 = meta41809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41810,meta41809__$1){
var self__ = this;
var _41810__$1 = this;
return (new cljs.core.async.t_cljs$core$async41808(self__.mult,self__.ch,self__.cs,meta41809__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41810){
var self__ = this;
var _41810__$1 = this;
return self__.meta41809;
});})(cs))
;

cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41808.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41808.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41809","meta41809",-1302474721,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41808";

cljs.core.async.t_cljs$core$async41808.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async41808");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41808 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41808(mult__$1,ch__$1,cs__$1,meta41809){
return (new cljs.core.async.t_cljs$core$async41808(mult__$1,ch__$1,cs__$1,meta41809));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41808(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40680__auto___42033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___42033,cs,m,dchan,dctr,done){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___42033,cs,m,dchan,dctr,done){
return (function (state_41945){
var state_val_41946 = (state_41945[(1)]);
if((state_val_41946 === (7))){
var inst_41941 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_41947_42034 = state_41945__$1;
(statearr_41947_42034[(2)] = inst_41941);

(statearr_41947_42034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (20))){
var inst_41844 = (state_41945[(7)]);
var inst_41856 = cljs.core.first.call(null,inst_41844);
var inst_41857 = cljs.core.nth.call(null,inst_41856,(0),null);
var inst_41858 = cljs.core.nth.call(null,inst_41856,(1),null);
var state_41945__$1 = (function (){var statearr_41948 = state_41945;
(statearr_41948[(8)] = inst_41857);

return statearr_41948;
})();
if(cljs.core.truth_(inst_41858)){
var statearr_41949_42035 = state_41945__$1;
(statearr_41949_42035[(1)] = (22));

} else {
var statearr_41950_42036 = state_41945__$1;
(statearr_41950_42036[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (27))){
var inst_41813 = (state_41945[(9)]);
var inst_41893 = (state_41945[(10)]);
var inst_41888 = (state_41945[(11)]);
var inst_41886 = (state_41945[(12)]);
var inst_41893__$1 = cljs.core._nth.call(null,inst_41886,inst_41888);
var inst_41894 = cljs.core.async.put_BANG_.call(null,inst_41893__$1,inst_41813,done);
var state_41945__$1 = (function (){var statearr_41951 = state_41945;
(statearr_41951[(10)] = inst_41893__$1);

return statearr_41951;
})();
if(cljs.core.truth_(inst_41894)){
var statearr_41952_42037 = state_41945__$1;
(statearr_41952_42037[(1)] = (30));

} else {
var statearr_41953_42038 = state_41945__$1;
(statearr_41953_42038[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (1))){
var state_41945__$1 = state_41945;
var statearr_41954_42039 = state_41945__$1;
(statearr_41954_42039[(2)] = null);

(statearr_41954_42039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (24))){
var inst_41844 = (state_41945[(7)]);
var inst_41863 = (state_41945[(2)]);
var inst_41864 = cljs.core.next.call(null,inst_41844);
var inst_41822 = inst_41864;
var inst_41823 = null;
var inst_41824 = (0);
var inst_41825 = (0);
var state_41945__$1 = (function (){var statearr_41955 = state_41945;
(statearr_41955[(13)] = inst_41825);

(statearr_41955[(14)] = inst_41822);

(statearr_41955[(15)] = inst_41863);

(statearr_41955[(16)] = inst_41823);

(statearr_41955[(17)] = inst_41824);

return statearr_41955;
})();
var statearr_41956_42040 = state_41945__$1;
(statearr_41956_42040[(2)] = null);

(statearr_41956_42040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (39))){
var state_41945__$1 = state_41945;
var statearr_41960_42041 = state_41945__$1;
(statearr_41960_42041[(2)] = null);

(statearr_41960_42041[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (4))){
var inst_41813 = (state_41945[(9)]);
var inst_41813__$1 = (state_41945[(2)]);
var inst_41814 = (inst_41813__$1 == null);
var state_41945__$1 = (function (){var statearr_41961 = state_41945;
(statearr_41961[(9)] = inst_41813__$1);

return statearr_41961;
})();
if(cljs.core.truth_(inst_41814)){
var statearr_41962_42042 = state_41945__$1;
(statearr_41962_42042[(1)] = (5));

} else {
var statearr_41963_42043 = state_41945__$1;
(statearr_41963_42043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (15))){
var inst_41825 = (state_41945[(13)]);
var inst_41822 = (state_41945[(14)]);
var inst_41823 = (state_41945[(16)]);
var inst_41824 = (state_41945[(17)]);
var inst_41840 = (state_41945[(2)]);
var inst_41841 = (inst_41825 + (1));
var tmp41957 = inst_41822;
var tmp41958 = inst_41823;
var tmp41959 = inst_41824;
var inst_41822__$1 = tmp41957;
var inst_41823__$1 = tmp41958;
var inst_41824__$1 = tmp41959;
var inst_41825__$1 = inst_41841;
var state_41945__$1 = (function (){var statearr_41964 = state_41945;
(statearr_41964[(13)] = inst_41825__$1);

(statearr_41964[(14)] = inst_41822__$1);

(statearr_41964[(18)] = inst_41840);

(statearr_41964[(16)] = inst_41823__$1);

(statearr_41964[(17)] = inst_41824__$1);

return statearr_41964;
})();
var statearr_41965_42044 = state_41945__$1;
(statearr_41965_42044[(2)] = null);

(statearr_41965_42044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (21))){
var inst_41867 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_41969_42045 = state_41945__$1;
(statearr_41969_42045[(2)] = inst_41867);

(statearr_41969_42045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (31))){
var inst_41893 = (state_41945[(10)]);
var inst_41897 = done.call(null,null);
var inst_41898 = cljs.core.async.untap_STAR_.call(null,m,inst_41893);
var state_41945__$1 = (function (){var statearr_41970 = state_41945;
(statearr_41970[(19)] = inst_41897);

return statearr_41970;
})();
var statearr_41971_42046 = state_41945__$1;
(statearr_41971_42046[(2)] = inst_41898);

(statearr_41971_42046[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (32))){
var inst_41887 = (state_41945[(20)]);
var inst_41885 = (state_41945[(21)]);
var inst_41888 = (state_41945[(11)]);
var inst_41886 = (state_41945[(12)]);
var inst_41900 = (state_41945[(2)]);
var inst_41901 = (inst_41888 + (1));
var tmp41966 = inst_41887;
var tmp41967 = inst_41885;
var tmp41968 = inst_41886;
var inst_41885__$1 = tmp41967;
var inst_41886__$1 = tmp41968;
var inst_41887__$1 = tmp41966;
var inst_41888__$1 = inst_41901;
var state_41945__$1 = (function (){var statearr_41972 = state_41945;
(statearr_41972[(22)] = inst_41900);

(statearr_41972[(20)] = inst_41887__$1);

(statearr_41972[(21)] = inst_41885__$1);

(statearr_41972[(11)] = inst_41888__$1);

(statearr_41972[(12)] = inst_41886__$1);

return statearr_41972;
})();
var statearr_41973_42047 = state_41945__$1;
(statearr_41973_42047[(2)] = null);

(statearr_41973_42047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (40))){
var inst_41913 = (state_41945[(23)]);
var inst_41917 = done.call(null,null);
var inst_41918 = cljs.core.async.untap_STAR_.call(null,m,inst_41913);
var state_41945__$1 = (function (){var statearr_41974 = state_41945;
(statearr_41974[(24)] = inst_41917);

return statearr_41974;
})();
var statearr_41975_42048 = state_41945__$1;
(statearr_41975_42048[(2)] = inst_41918);

(statearr_41975_42048[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (33))){
var inst_41904 = (state_41945[(25)]);
var inst_41906 = cljs.core.chunked_seq_QMARK_.call(null,inst_41904);
var state_41945__$1 = state_41945;
if(inst_41906){
var statearr_41976_42049 = state_41945__$1;
(statearr_41976_42049[(1)] = (36));

} else {
var statearr_41977_42050 = state_41945__$1;
(statearr_41977_42050[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (13))){
var inst_41834 = (state_41945[(26)]);
var inst_41837 = cljs.core.async.close_BANG_.call(null,inst_41834);
var state_41945__$1 = state_41945;
var statearr_41978_42051 = state_41945__$1;
(statearr_41978_42051[(2)] = inst_41837);

(statearr_41978_42051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (22))){
var inst_41857 = (state_41945[(8)]);
var inst_41860 = cljs.core.async.close_BANG_.call(null,inst_41857);
var state_41945__$1 = state_41945;
var statearr_41979_42052 = state_41945__$1;
(statearr_41979_42052[(2)] = inst_41860);

(statearr_41979_42052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (36))){
var inst_41904 = (state_41945[(25)]);
var inst_41908 = cljs.core.chunk_first.call(null,inst_41904);
var inst_41909 = cljs.core.chunk_rest.call(null,inst_41904);
var inst_41910 = cljs.core.count.call(null,inst_41908);
var inst_41885 = inst_41909;
var inst_41886 = inst_41908;
var inst_41887 = inst_41910;
var inst_41888 = (0);
var state_41945__$1 = (function (){var statearr_41980 = state_41945;
(statearr_41980[(20)] = inst_41887);

(statearr_41980[(21)] = inst_41885);

(statearr_41980[(11)] = inst_41888);

(statearr_41980[(12)] = inst_41886);

return statearr_41980;
})();
var statearr_41981_42053 = state_41945__$1;
(statearr_41981_42053[(2)] = null);

(statearr_41981_42053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (41))){
var inst_41904 = (state_41945[(25)]);
var inst_41920 = (state_41945[(2)]);
var inst_41921 = cljs.core.next.call(null,inst_41904);
var inst_41885 = inst_41921;
var inst_41886 = null;
var inst_41887 = (0);
var inst_41888 = (0);
var state_41945__$1 = (function (){var statearr_41982 = state_41945;
(statearr_41982[(27)] = inst_41920);

(statearr_41982[(20)] = inst_41887);

(statearr_41982[(21)] = inst_41885);

(statearr_41982[(11)] = inst_41888);

(statearr_41982[(12)] = inst_41886);

return statearr_41982;
})();
var statearr_41983_42054 = state_41945__$1;
(statearr_41983_42054[(2)] = null);

(statearr_41983_42054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (43))){
var state_41945__$1 = state_41945;
var statearr_41984_42055 = state_41945__$1;
(statearr_41984_42055[(2)] = null);

(statearr_41984_42055[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (29))){
var inst_41929 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_41985_42056 = state_41945__$1;
(statearr_41985_42056[(2)] = inst_41929);

(statearr_41985_42056[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (44))){
var inst_41938 = (state_41945[(2)]);
var state_41945__$1 = (function (){var statearr_41986 = state_41945;
(statearr_41986[(28)] = inst_41938);

return statearr_41986;
})();
var statearr_41987_42057 = state_41945__$1;
(statearr_41987_42057[(2)] = null);

(statearr_41987_42057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (6))){
var inst_41877 = (state_41945[(29)]);
var inst_41876 = cljs.core.deref.call(null,cs);
var inst_41877__$1 = cljs.core.keys.call(null,inst_41876);
var inst_41878 = cljs.core.count.call(null,inst_41877__$1);
var inst_41879 = cljs.core.reset_BANG_.call(null,dctr,inst_41878);
var inst_41884 = cljs.core.seq.call(null,inst_41877__$1);
var inst_41885 = inst_41884;
var inst_41886 = null;
var inst_41887 = (0);
var inst_41888 = (0);
var state_41945__$1 = (function (){var statearr_41988 = state_41945;
(statearr_41988[(30)] = inst_41879);

(statearr_41988[(29)] = inst_41877__$1);

(statearr_41988[(20)] = inst_41887);

(statearr_41988[(21)] = inst_41885);

(statearr_41988[(11)] = inst_41888);

(statearr_41988[(12)] = inst_41886);

return statearr_41988;
})();
var statearr_41989_42058 = state_41945__$1;
(statearr_41989_42058[(2)] = null);

(statearr_41989_42058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (28))){
var inst_41885 = (state_41945[(21)]);
var inst_41904 = (state_41945[(25)]);
var inst_41904__$1 = cljs.core.seq.call(null,inst_41885);
var state_41945__$1 = (function (){var statearr_41990 = state_41945;
(statearr_41990[(25)] = inst_41904__$1);

return statearr_41990;
})();
if(inst_41904__$1){
var statearr_41991_42059 = state_41945__$1;
(statearr_41991_42059[(1)] = (33));

} else {
var statearr_41992_42060 = state_41945__$1;
(statearr_41992_42060[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (25))){
var inst_41887 = (state_41945[(20)]);
var inst_41888 = (state_41945[(11)]);
var inst_41890 = (inst_41888 < inst_41887);
var inst_41891 = inst_41890;
var state_41945__$1 = state_41945;
if(cljs.core.truth_(inst_41891)){
var statearr_41993_42061 = state_41945__$1;
(statearr_41993_42061[(1)] = (27));

} else {
var statearr_41994_42062 = state_41945__$1;
(statearr_41994_42062[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (34))){
var state_41945__$1 = state_41945;
var statearr_41995_42063 = state_41945__$1;
(statearr_41995_42063[(2)] = null);

(statearr_41995_42063[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (17))){
var state_41945__$1 = state_41945;
var statearr_41996_42064 = state_41945__$1;
(statearr_41996_42064[(2)] = null);

(statearr_41996_42064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (3))){
var inst_41943 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41945__$1,inst_41943);
} else {
if((state_val_41946 === (12))){
var inst_41872 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_41997_42065 = state_41945__$1;
(statearr_41997_42065[(2)] = inst_41872);

(statearr_41997_42065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (2))){
var state_41945__$1 = state_41945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41945__$1,(4),ch);
} else {
if((state_val_41946 === (23))){
var state_41945__$1 = state_41945;
var statearr_41998_42066 = state_41945__$1;
(statearr_41998_42066[(2)] = null);

(statearr_41998_42066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (35))){
var inst_41927 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_41999_42067 = state_41945__$1;
(statearr_41999_42067[(2)] = inst_41927);

(statearr_41999_42067[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (19))){
var inst_41844 = (state_41945[(7)]);
var inst_41848 = cljs.core.chunk_first.call(null,inst_41844);
var inst_41849 = cljs.core.chunk_rest.call(null,inst_41844);
var inst_41850 = cljs.core.count.call(null,inst_41848);
var inst_41822 = inst_41849;
var inst_41823 = inst_41848;
var inst_41824 = inst_41850;
var inst_41825 = (0);
var state_41945__$1 = (function (){var statearr_42000 = state_41945;
(statearr_42000[(13)] = inst_41825);

(statearr_42000[(14)] = inst_41822);

(statearr_42000[(16)] = inst_41823);

(statearr_42000[(17)] = inst_41824);

return statearr_42000;
})();
var statearr_42001_42068 = state_41945__$1;
(statearr_42001_42068[(2)] = null);

(statearr_42001_42068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (11))){
var inst_41844 = (state_41945[(7)]);
var inst_41822 = (state_41945[(14)]);
var inst_41844__$1 = cljs.core.seq.call(null,inst_41822);
var state_41945__$1 = (function (){var statearr_42002 = state_41945;
(statearr_42002[(7)] = inst_41844__$1);

return statearr_42002;
})();
if(inst_41844__$1){
var statearr_42003_42069 = state_41945__$1;
(statearr_42003_42069[(1)] = (16));

} else {
var statearr_42004_42070 = state_41945__$1;
(statearr_42004_42070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (9))){
var inst_41874 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_42005_42071 = state_41945__$1;
(statearr_42005_42071[(2)] = inst_41874);

(statearr_42005_42071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (5))){
var inst_41820 = cljs.core.deref.call(null,cs);
var inst_41821 = cljs.core.seq.call(null,inst_41820);
var inst_41822 = inst_41821;
var inst_41823 = null;
var inst_41824 = (0);
var inst_41825 = (0);
var state_41945__$1 = (function (){var statearr_42006 = state_41945;
(statearr_42006[(13)] = inst_41825);

(statearr_42006[(14)] = inst_41822);

(statearr_42006[(16)] = inst_41823);

(statearr_42006[(17)] = inst_41824);

return statearr_42006;
})();
var statearr_42007_42072 = state_41945__$1;
(statearr_42007_42072[(2)] = null);

(statearr_42007_42072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (14))){
var state_41945__$1 = state_41945;
var statearr_42008_42073 = state_41945__$1;
(statearr_42008_42073[(2)] = null);

(statearr_42008_42073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (45))){
var inst_41935 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_42009_42074 = state_41945__$1;
(statearr_42009_42074[(2)] = inst_41935);

(statearr_42009_42074[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (26))){
var inst_41877 = (state_41945[(29)]);
var inst_41931 = (state_41945[(2)]);
var inst_41932 = cljs.core.seq.call(null,inst_41877);
var state_41945__$1 = (function (){var statearr_42010 = state_41945;
(statearr_42010[(31)] = inst_41931);

return statearr_42010;
})();
if(inst_41932){
var statearr_42011_42075 = state_41945__$1;
(statearr_42011_42075[(1)] = (42));

} else {
var statearr_42012_42076 = state_41945__$1;
(statearr_42012_42076[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (16))){
var inst_41844 = (state_41945[(7)]);
var inst_41846 = cljs.core.chunked_seq_QMARK_.call(null,inst_41844);
var state_41945__$1 = state_41945;
if(inst_41846){
var statearr_42013_42077 = state_41945__$1;
(statearr_42013_42077[(1)] = (19));

} else {
var statearr_42014_42078 = state_41945__$1;
(statearr_42014_42078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (38))){
var inst_41924 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_42015_42079 = state_41945__$1;
(statearr_42015_42079[(2)] = inst_41924);

(statearr_42015_42079[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (30))){
var state_41945__$1 = state_41945;
var statearr_42016_42080 = state_41945__$1;
(statearr_42016_42080[(2)] = null);

(statearr_42016_42080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (10))){
var inst_41825 = (state_41945[(13)]);
var inst_41823 = (state_41945[(16)]);
var inst_41833 = cljs.core._nth.call(null,inst_41823,inst_41825);
var inst_41834 = cljs.core.nth.call(null,inst_41833,(0),null);
var inst_41835 = cljs.core.nth.call(null,inst_41833,(1),null);
var state_41945__$1 = (function (){var statearr_42017 = state_41945;
(statearr_42017[(26)] = inst_41834);

return statearr_42017;
})();
if(cljs.core.truth_(inst_41835)){
var statearr_42018_42081 = state_41945__$1;
(statearr_42018_42081[(1)] = (13));

} else {
var statearr_42019_42082 = state_41945__$1;
(statearr_42019_42082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (18))){
var inst_41870 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_42020_42083 = state_41945__$1;
(statearr_42020_42083[(2)] = inst_41870);

(statearr_42020_42083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (42))){
var state_41945__$1 = state_41945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41945__$1,(45),dchan);
} else {
if((state_val_41946 === (37))){
var inst_41813 = (state_41945[(9)]);
var inst_41913 = (state_41945[(23)]);
var inst_41904 = (state_41945[(25)]);
var inst_41913__$1 = cljs.core.first.call(null,inst_41904);
var inst_41914 = cljs.core.async.put_BANG_.call(null,inst_41913__$1,inst_41813,done);
var state_41945__$1 = (function (){var statearr_42021 = state_41945;
(statearr_42021[(23)] = inst_41913__$1);

return statearr_42021;
})();
if(cljs.core.truth_(inst_41914)){
var statearr_42022_42084 = state_41945__$1;
(statearr_42022_42084[(1)] = (39));

} else {
var statearr_42023_42085 = state_41945__$1;
(statearr_42023_42085[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (8))){
var inst_41825 = (state_41945[(13)]);
var inst_41824 = (state_41945[(17)]);
var inst_41827 = (inst_41825 < inst_41824);
var inst_41828 = inst_41827;
var state_41945__$1 = state_41945;
if(cljs.core.truth_(inst_41828)){
var statearr_42024_42086 = state_41945__$1;
(statearr_42024_42086[(1)] = (10));

} else {
var statearr_42025_42087 = state_41945__$1;
(statearr_42025_42087[(1)] = (11));

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
});})(c__40680__auto___42033,cs,m,dchan,dctr,done))
;
return ((function (switch__40568__auto__,c__40680__auto___42033,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40569__auto__ = null;
var cljs$core$async$mult_$_state_machine__40569__auto____0 = (function (){
var statearr_42029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42029[(0)] = cljs$core$async$mult_$_state_machine__40569__auto__);

(statearr_42029[(1)] = (1));

return statearr_42029;
});
var cljs$core$async$mult_$_state_machine__40569__auto____1 = (function (state_41945){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_41945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e42030){if((e42030 instanceof Object)){
var ex__40572__auto__ = e42030;
var statearr_42031_42088 = state_41945;
(statearr_42031_42088[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42089 = state_41945;
state_41945 = G__42089;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40569__auto__ = function(state_41945){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40569__auto____1.call(this,state_41945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40569__auto____0;
cljs$core$async$mult_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40569__auto____1;
return cljs$core$async$mult_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___42033,cs,m,dchan,dctr,done))
})();
var state__40682__auto__ = (function (){var statearr_42032 = f__40681__auto__.call(null);
(statearr_42032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___42033);

return statearr_42032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___42033,cs,m,dchan,dctr,done))
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
var args42090 = [];
var len__37878__auto___42093 = arguments.length;
var i__37879__auto___42094 = (0);
while(true){
if((i__37879__auto___42094 < len__37878__auto___42093)){
args42090.push((arguments[i__37879__auto___42094]));

var G__42095 = (i__37879__auto___42094 + (1));
i__37879__auto___42094 = G__42095;
continue;
} else {
}
break;
}

var G__42092 = args42090.length;
switch (G__42092) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42090.length)].join('')));

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
var args__37885__auto__ = [];
var len__37878__auto___42107 = arguments.length;
var i__37879__auto___42108 = (0);
while(true){
if((i__37879__auto___42108 < len__37878__auto___42107)){
args__37885__auto__.push((arguments[i__37879__auto___42108]));

var G__42109 = (i__37879__auto___42108 + (1));
i__37879__auto___42108 = G__42109;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((3) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37886__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42101){
var map__42102 = p__42101;
var map__42102__$1 = ((((!((map__42102 == null)))?((((map__42102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42102):map__42102);
var opts = map__42102__$1;
var statearr_42104_42110 = state;
(statearr_42104_42110[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42102,map__42102__$1,opts){
return (function (val){
var statearr_42105_42111 = state;
(statearr_42105_42111[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42102,map__42102__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42106_42112 = state;
(statearr_42106_42112[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42097){
var G__42098 = cljs.core.first.call(null,seq42097);
var seq42097__$1 = cljs.core.next.call(null,seq42097);
var G__42099 = cljs.core.first.call(null,seq42097__$1);
var seq42097__$2 = cljs.core.next.call(null,seq42097__$1);
var G__42100 = cljs.core.first.call(null,seq42097__$2);
var seq42097__$3 = cljs.core.next.call(null,seq42097__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42098,G__42099,G__42100,seq42097__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42278 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42279){
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
this.meta42279 = meta42279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42280,meta42279__$1){
var self__ = this;
var _42280__$1 = this;
return (new cljs.core.async.t_cljs$core$async42278(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42279__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42280){
var self__ = this;
var _42280__$1 = this;
return self__.meta42279;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42278.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42279","meta42279",-966341566,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42278";

cljs.core.async.t_cljs$core$async42278.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42278");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42278 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42278(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42279){
return (new cljs.core.async.t_cljs$core$async42278(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42279));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42278(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40680__auto___42443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___42443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___42443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42380){
var state_val_42381 = (state_42380[(1)]);
if((state_val_42381 === (7))){
var inst_42296 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42382_42444 = state_42380__$1;
(statearr_42382_42444[(2)] = inst_42296);

(statearr_42382_42444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (20))){
var inst_42308 = (state_42380[(7)]);
var state_42380__$1 = state_42380;
var statearr_42383_42445 = state_42380__$1;
(statearr_42383_42445[(2)] = inst_42308);

(statearr_42383_42445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (27))){
var state_42380__$1 = state_42380;
var statearr_42384_42446 = state_42380__$1;
(statearr_42384_42446[(2)] = null);

(statearr_42384_42446[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (1))){
var inst_42284 = (state_42380[(8)]);
var inst_42284__$1 = calc_state.call(null);
var inst_42286 = (inst_42284__$1 == null);
var inst_42287 = cljs.core.not.call(null,inst_42286);
var state_42380__$1 = (function (){var statearr_42385 = state_42380;
(statearr_42385[(8)] = inst_42284__$1);

return statearr_42385;
})();
if(inst_42287){
var statearr_42386_42447 = state_42380__$1;
(statearr_42386_42447[(1)] = (2));

} else {
var statearr_42387_42448 = state_42380__$1;
(statearr_42387_42448[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (24))){
var inst_42331 = (state_42380[(9)]);
var inst_42340 = (state_42380[(10)]);
var inst_42354 = (state_42380[(11)]);
var inst_42354__$1 = inst_42331.call(null,inst_42340);
var state_42380__$1 = (function (){var statearr_42388 = state_42380;
(statearr_42388[(11)] = inst_42354__$1);

return statearr_42388;
})();
if(cljs.core.truth_(inst_42354__$1)){
var statearr_42389_42449 = state_42380__$1;
(statearr_42389_42449[(1)] = (29));

} else {
var statearr_42390_42450 = state_42380__$1;
(statearr_42390_42450[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (4))){
var inst_42299 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42299)){
var statearr_42391_42451 = state_42380__$1;
(statearr_42391_42451[(1)] = (8));

} else {
var statearr_42392_42452 = state_42380__$1;
(statearr_42392_42452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (15))){
var inst_42325 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42325)){
var statearr_42393_42453 = state_42380__$1;
(statearr_42393_42453[(1)] = (19));

} else {
var statearr_42394_42454 = state_42380__$1;
(statearr_42394_42454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (21))){
var inst_42330 = (state_42380[(12)]);
var inst_42330__$1 = (state_42380[(2)]);
var inst_42331 = cljs.core.get.call(null,inst_42330__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42332 = cljs.core.get.call(null,inst_42330__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42333 = cljs.core.get.call(null,inst_42330__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42380__$1 = (function (){var statearr_42395 = state_42380;
(statearr_42395[(9)] = inst_42331);

(statearr_42395[(13)] = inst_42332);

(statearr_42395[(12)] = inst_42330__$1);

return statearr_42395;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42380__$1,(22),inst_42333);
} else {
if((state_val_42381 === (31))){
var inst_42362 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42362)){
var statearr_42396_42455 = state_42380__$1;
(statearr_42396_42455[(1)] = (32));

} else {
var statearr_42397_42456 = state_42380__$1;
(statearr_42397_42456[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (32))){
var inst_42339 = (state_42380[(14)]);
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42380__$1,(35),out,inst_42339);
} else {
if((state_val_42381 === (33))){
var inst_42330 = (state_42380[(12)]);
var inst_42308 = inst_42330;
var state_42380__$1 = (function (){var statearr_42398 = state_42380;
(statearr_42398[(7)] = inst_42308);

return statearr_42398;
})();
var statearr_42399_42457 = state_42380__$1;
(statearr_42399_42457[(2)] = null);

(statearr_42399_42457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (13))){
var inst_42308 = (state_42380[(7)]);
var inst_42315 = inst_42308.cljs$lang$protocol_mask$partition0$;
var inst_42316 = (inst_42315 & (64));
var inst_42317 = inst_42308.cljs$core$ISeq$;
var inst_42318 = (inst_42316) || (inst_42317);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42318)){
var statearr_42400_42458 = state_42380__$1;
(statearr_42400_42458[(1)] = (16));

} else {
var statearr_42401_42459 = state_42380__$1;
(statearr_42401_42459[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (22))){
var inst_42340 = (state_42380[(10)]);
var inst_42339 = (state_42380[(14)]);
var inst_42338 = (state_42380[(2)]);
var inst_42339__$1 = cljs.core.nth.call(null,inst_42338,(0),null);
var inst_42340__$1 = cljs.core.nth.call(null,inst_42338,(1),null);
var inst_42341 = (inst_42339__$1 == null);
var inst_42342 = cljs.core._EQ_.call(null,inst_42340__$1,change);
var inst_42343 = (inst_42341) || (inst_42342);
var state_42380__$1 = (function (){var statearr_42402 = state_42380;
(statearr_42402[(10)] = inst_42340__$1);

(statearr_42402[(14)] = inst_42339__$1);

return statearr_42402;
})();
if(cljs.core.truth_(inst_42343)){
var statearr_42403_42460 = state_42380__$1;
(statearr_42403_42460[(1)] = (23));

} else {
var statearr_42404_42461 = state_42380__$1;
(statearr_42404_42461[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (36))){
var inst_42330 = (state_42380[(12)]);
var inst_42308 = inst_42330;
var state_42380__$1 = (function (){var statearr_42405 = state_42380;
(statearr_42405[(7)] = inst_42308);

return statearr_42405;
})();
var statearr_42406_42462 = state_42380__$1;
(statearr_42406_42462[(2)] = null);

(statearr_42406_42462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (29))){
var inst_42354 = (state_42380[(11)]);
var state_42380__$1 = state_42380;
var statearr_42407_42463 = state_42380__$1;
(statearr_42407_42463[(2)] = inst_42354);

(statearr_42407_42463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (6))){
var state_42380__$1 = state_42380;
var statearr_42408_42464 = state_42380__$1;
(statearr_42408_42464[(2)] = false);

(statearr_42408_42464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (28))){
var inst_42350 = (state_42380[(2)]);
var inst_42351 = calc_state.call(null);
var inst_42308 = inst_42351;
var state_42380__$1 = (function (){var statearr_42409 = state_42380;
(statearr_42409[(7)] = inst_42308);

(statearr_42409[(15)] = inst_42350);

return statearr_42409;
})();
var statearr_42410_42465 = state_42380__$1;
(statearr_42410_42465[(2)] = null);

(statearr_42410_42465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (25))){
var inst_42376 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42411_42466 = state_42380__$1;
(statearr_42411_42466[(2)] = inst_42376);

(statearr_42411_42466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (34))){
var inst_42374 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42412_42467 = state_42380__$1;
(statearr_42412_42467[(2)] = inst_42374);

(statearr_42412_42467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (17))){
var state_42380__$1 = state_42380;
var statearr_42413_42468 = state_42380__$1;
(statearr_42413_42468[(2)] = false);

(statearr_42413_42468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (3))){
var state_42380__$1 = state_42380;
var statearr_42414_42469 = state_42380__$1;
(statearr_42414_42469[(2)] = false);

(statearr_42414_42469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (12))){
var inst_42378 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42380__$1,inst_42378);
} else {
if((state_val_42381 === (2))){
var inst_42284 = (state_42380[(8)]);
var inst_42289 = inst_42284.cljs$lang$protocol_mask$partition0$;
var inst_42290 = (inst_42289 & (64));
var inst_42291 = inst_42284.cljs$core$ISeq$;
var inst_42292 = (inst_42290) || (inst_42291);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42292)){
var statearr_42415_42470 = state_42380__$1;
(statearr_42415_42470[(1)] = (5));

} else {
var statearr_42416_42471 = state_42380__$1;
(statearr_42416_42471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (23))){
var inst_42339 = (state_42380[(14)]);
var inst_42345 = (inst_42339 == null);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42345)){
var statearr_42417_42472 = state_42380__$1;
(statearr_42417_42472[(1)] = (26));

} else {
var statearr_42418_42473 = state_42380__$1;
(statearr_42418_42473[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (35))){
var inst_42365 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42365)){
var statearr_42419_42474 = state_42380__$1;
(statearr_42419_42474[(1)] = (36));

} else {
var statearr_42420_42475 = state_42380__$1;
(statearr_42420_42475[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (19))){
var inst_42308 = (state_42380[(7)]);
var inst_42327 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42308);
var state_42380__$1 = state_42380;
var statearr_42421_42476 = state_42380__$1;
(statearr_42421_42476[(2)] = inst_42327);

(statearr_42421_42476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (11))){
var inst_42308 = (state_42380[(7)]);
var inst_42312 = (inst_42308 == null);
var inst_42313 = cljs.core.not.call(null,inst_42312);
var state_42380__$1 = state_42380;
if(inst_42313){
var statearr_42422_42477 = state_42380__$1;
(statearr_42422_42477[(1)] = (13));

} else {
var statearr_42423_42478 = state_42380__$1;
(statearr_42423_42478[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (9))){
var inst_42284 = (state_42380[(8)]);
var state_42380__$1 = state_42380;
var statearr_42424_42479 = state_42380__$1;
(statearr_42424_42479[(2)] = inst_42284);

(statearr_42424_42479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (5))){
var state_42380__$1 = state_42380;
var statearr_42425_42480 = state_42380__$1;
(statearr_42425_42480[(2)] = true);

(statearr_42425_42480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (14))){
var state_42380__$1 = state_42380;
var statearr_42426_42481 = state_42380__$1;
(statearr_42426_42481[(2)] = false);

(statearr_42426_42481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (26))){
var inst_42340 = (state_42380[(10)]);
var inst_42347 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42340);
var state_42380__$1 = state_42380;
var statearr_42427_42482 = state_42380__$1;
(statearr_42427_42482[(2)] = inst_42347);

(statearr_42427_42482[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (16))){
var state_42380__$1 = state_42380;
var statearr_42428_42483 = state_42380__$1;
(statearr_42428_42483[(2)] = true);

(statearr_42428_42483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (38))){
var inst_42370 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42429_42484 = state_42380__$1;
(statearr_42429_42484[(2)] = inst_42370);

(statearr_42429_42484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (30))){
var inst_42331 = (state_42380[(9)]);
var inst_42340 = (state_42380[(10)]);
var inst_42332 = (state_42380[(13)]);
var inst_42357 = cljs.core.empty_QMARK_.call(null,inst_42331);
var inst_42358 = inst_42332.call(null,inst_42340);
var inst_42359 = cljs.core.not.call(null,inst_42358);
var inst_42360 = (inst_42357) && (inst_42359);
var state_42380__$1 = state_42380;
var statearr_42430_42485 = state_42380__$1;
(statearr_42430_42485[(2)] = inst_42360);

(statearr_42430_42485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (10))){
var inst_42284 = (state_42380[(8)]);
var inst_42304 = (state_42380[(2)]);
var inst_42305 = cljs.core.get.call(null,inst_42304,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42306 = cljs.core.get.call(null,inst_42304,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42307 = cljs.core.get.call(null,inst_42304,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42308 = inst_42284;
var state_42380__$1 = (function (){var statearr_42431 = state_42380;
(statearr_42431[(7)] = inst_42308);

(statearr_42431[(16)] = inst_42306);

(statearr_42431[(17)] = inst_42307);

(statearr_42431[(18)] = inst_42305);

return statearr_42431;
})();
var statearr_42432_42486 = state_42380__$1;
(statearr_42432_42486[(2)] = null);

(statearr_42432_42486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (18))){
var inst_42322 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42433_42487 = state_42380__$1;
(statearr_42433_42487[(2)] = inst_42322);

(statearr_42433_42487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (37))){
var state_42380__$1 = state_42380;
var statearr_42434_42488 = state_42380__$1;
(statearr_42434_42488[(2)] = null);

(statearr_42434_42488[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (8))){
var inst_42284 = (state_42380[(8)]);
var inst_42301 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42284);
var state_42380__$1 = state_42380;
var statearr_42435_42489 = state_42380__$1;
(statearr_42435_42489[(2)] = inst_42301);

(statearr_42435_42489[(1)] = (10));


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
});})(c__40680__auto___42443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40568__auto__,c__40680__auto___42443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40569__auto__ = null;
var cljs$core$async$mix_$_state_machine__40569__auto____0 = (function (){
var statearr_42439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42439[(0)] = cljs$core$async$mix_$_state_machine__40569__auto__);

(statearr_42439[(1)] = (1));

return statearr_42439;
});
var cljs$core$async$mix_$_state_machine__40569__auto____1 = (function (state_42380){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_42380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e42440){if((e42440 instanceof Object)){
var ex__40572__auto__ = e42440;
var statearr_42441_42490 = state_42380;
(statearr_42441_42490[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42491 = state_42380;
state_42380 = G__42491;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40569__auto__ = function(state_42380){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40569__auto____1.call(this,state_42380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40569__auto____0;
cljs$core$async$mix_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40569__auto____1;
return cljs$core$async$mix_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___42443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40682__auto__ = (function (){var statearr_42442 = f__40681__auto__.call(null);
(statearr_42442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___42443);

return statearr_42442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___42443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args42492 = [];
var len__37878__auto___42495 = arguments.length;
var i__37879__auto___42496 = (0);
while(true){
if((i__37879__auto___42496 < len__37878__auto___42495)){
args42492.push((arguments[i__37879__auto___42496]));

var G__42497 = (i__37879__auto___42496 + (1));
i__37879__auto___42496 = G__42497;
continue;
} else {
}
break;
}

var G__42494 = args42492.length;
switch (G__42494) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42492.length)].join('')));

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
var args42500 = [];
var len__37878__auto___42625 = arguments.length;
var i__37879__auto___42626 = (0);
while(true){
if((i__37879__auto___42626 < len__37878__auto___42625)){
args42500.push((arguments[i__37879__auto___42626]));

var G__42627 = (i__37879__auto___42626 + (1));
i__37879__auto___42626 = G__42627;
continue;
} else {
}
break;
}

var G__42502 = args42500.length;
switch (G__42502) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42500.length)].join('')));

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
return (function (p1__42499_SHARP_){
if(cljs.core.truth_(p1__42499_SHARP_.call(null,topic))){
return p1__42499_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42499_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36802__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42503 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42504){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42504 = meta42504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42505,meta42504__$1){
var self__ = this;
var _42505__$1 = this;
return (new cljs.core.async.t_cljs$core$async42503(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42504__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42505){
var self__ = this;
var _42505__$1 = this;
return self__.meta42504;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42503.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42504","meta42504",-538557450,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42503";

cljs.core.async.t_cljs$core$async42503.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42503");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42503 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42503(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42504){
return (new cljs.core.async.t_cljs$core$async42503(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42504));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42503(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40680__auto___42629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___42629,mults,ensure_mult,p){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___42629,mults,ensure_mult,p){
return (function (state_42577){
var state_val_42578 = (state_42577[(1)]);
if((state_val_42578 === (7))){
var inst_42573 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42579_42630 = state_42577__$1;
(statearr_42579_42630[(2)] = inst_42573);

(statearr_42579_42630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (20))){
var state_42577__$1 = state_42577;
var statearr_42580_42631 = state_42577__$1;
(statearr_42580_42631[(2)] = null);

(statearr_42580_42631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (1))){
var state_42577__$1 = state_42577;
var statearr_42581_42632 = state_42577__$1;
(statearr_42581_42632[(2)] = null);

(statearr_42581_42632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (24))){
var inst_42556 = (state_42577[(7)]);
var inst_42565 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42556);
var state_42577__$1 = state_42577;
var statearr_42582_42633 = state_42577__$1;
(statearr_42582_42633[(2)] = inst_42565);

(statearr_42582_42633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (4))){
var inst_42508 = (state_42577[(8)]);
var inst_42508__$1 = (state_42577[(2)]);
var inst_42509 = (inst_42508__$1 == null);
var state_42577__$1 = (function (){var statearr_42583 = state_42577;
(statearr_42583[(8)] = inst_42508__$1);

return statearr_42583;
})();
if(cljs.core.truth_(inst_42509)){
var statearr_42584_42634 = state_42577__$1;
(statearr_42584_42634[(1)] = (5));

} else {
var statearr_42585_42635 = state_42577__$1;
(statearr_42585_42635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (15))){
var inst_42550 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42586_42636 = state_42577__$1;
(statearr_42586_42636[(2)] = inst_42550);

(statearr_42586_42636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (21))){
var inst_42570 = (state_42577[(2)]);
var state_42577__$1 = (function (){var statearr_42587 = state_42577;
(statearr_42587[(9)] = inst_42570);

return statearr_42587;
})();
var statearr_42588_42637 = state_42577__$1;
(statearr_42588_42637[(2)] = null);

(statearr_42588_42637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (13))){
var inst_42532 = (state_42577[(10)]);
var inst_42534 = cljs.core.chunked_seq_QMARK_.call(null,inst_42532);
var state_42577__$1 = state_42577;
if(inst_42534){
var statearr_42589_42638 = state_42577__$1;
(statearr_42589_42638[(1)] = (16));

} else {
var statearr_42590_42639 = state_42577__$1;
(statearr_42590_42639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (22))){
var inst_42562 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
if(cljs.core.truth_(inst_42562)){
var statearr_42591_42640 = state_42577__$1;
(statearr_42591_42640[(1)] = (23));

} else {
var statearr_42592_42641 = state_42577__$1;
(statearr_42592_42641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (6))){
var inst_42508 = (state_42577[(8)]);
var inst_42556 = (state_42577[(7)]);
var inst_42558 = (state_42577[(11)]);
var inst_42556__$1 = topic_fn.call(null,inst_42508);
var inst_42557 = cljs.core.deref.call(null,mults);
var inst_42558__$1 = cljs.core.get.call(null,inst_42557,inst_42556__$1);
var state_42577__$1 = (function (){var statearr_42593 = state_42577;
(statearr_42593[(7)] = inst_42556__$1);

(statearr_42593[(11)] = inst_42558__$1);

return statearr_42593;
})();
if(cljs.core.truth_(inst_42558__$1)){
var statearr_42594_42642 = state_42577__$1;
(statearr_42594_42642[(1)] = (19));

} else {
var statearr_42595_42643 = state_42577__$1;
(statearr_42595_42643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (25))){
var inst_42567 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42596_42644 = state_42577__$1;
(statearr_42596_42644[(2)] = inst_42567);

(statearr_42596_42644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (17))){
var inst_42532 = (state_42577[(10)]);
var inst_42541 = cljs.core.first.call(null,inst_42532);
var inst_42542 = cljs.core.async.muxch_STAR_.call(null,inst_42541);
var inst_42543 = cljs.core.async.close_BANG_.call(null,inst_42542);
var inst_42544 = cljs.core.next.call(null,inst_42532);
var inst_42518 = inst_42544;
var inst_42519 = null;
var inst_42520 = (0);
var inst_42521 = (0);
var state_42577__$1 = (function (){var statearr_42597 = state_42577;
(statearr_42597[(12)] = inst_42518);

(statearr_42597[(13)] = inst_42521);

(statearr_42597[(14)] = inst_42543);

(statearr_42597[(15)] = inst_42520);

(statearr_42597[(16)] = inst_42519);

return statearr_42597;
})();
var statearr_42598_42645 = state_42577__$1;
(statearr_42598_42645[(2)] = null);

(statearr_42598_42645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (3))){
var inst_42575 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42577__$1,inst_42575);
} else {
if((state_val_42578 === (12))){
var inst_42552 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42599_42646 = state_42577__$1;
(statearr_42599_42646[(2)] = inst_42552);

(statearr_42599_42646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (2))){
var state_42577__$1 = state_42577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42577__$1,(4),ch);
} else {
if((state_val_42578 === (23))){
var state_42577__$1 = state_42577;
var statearr_42600_42647 = state_42577__$1;
(statearr_42600_42647[(2)] = null);

(statearr_42600_42647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (19))){
var inst_42508 = (state_42577[(8)]);
var inst_42558 = (state_42577[(11)]);
var inst_42560 = cljs.core.async.muxch_STAR_.call(null,inst_42558);
var state_42577__$1 = state_42577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42577__$1,(22),inst_42560,inst_42508);
} else {
if((state_val_42578 === (11))){
var inst_42518 = (state_42577[(12)]);
var inst_42532 = (state_42577[(10)]);
var inst_42532__$1 = cljs.core.seq.call(null,inst_42518);
var state_42577__$1 = (function (){var statearr_42601 = state_42577;
(statearr_42601[(10)] = inst_42532__$1);

return statearr_42601;
})();
if(inst_42532__$1){
var statearr_42602_42648 = state_42577__$1;
(statearr_42602_42648[(1)] = (13));

} else {
var statearr_42603_42649 = state_42577__$1;
(statearr_42603_42649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (9))){
var inst_42554 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42604_42650 = state_42577__$1;
(statearr_42604_42650[(2)] = inst_42554);

(statearr_42604_42650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (5))){
var inst_42515 = cljs.core.deref.call(null,mults);
var inst_42516 = cljs.core.vals.call(null,inst_42515);
var inst_42517 = cljs.core.seq.call(null,inst_42516);
var inst_42518 = inst_42517;
var inst_42519 = null;
var inst_42520 = (0);
var inst_42521 = (0);
var state_42577__$1 = (function (){var statearr_42605 = state_42577;
(statearr_42605[(12)] = inst_42518);

(statearr_42605[(13)] = inst_42521);

(statearr_42605[(15)] = inst_42520);

(statearr_42605[(16)] = inst_42519);

return statearr_42605;
})();
var statearr_42606_42651 = state_42577__$1;
(statearr_42606_42651[(2)] = null);

(statearr_42606_42651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (14))){
var state_42577__$1 = state_42577;
var statearr_42610_42652 = state_42577__$1;
(statearr_42610_42652[(2)] = null);

(statearr_42610_42652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (16))){
var inst_42532 = (state_42577[(10)]);
var inst_42536 = cljs.core.chunk_first.call(null,inst_42532);
var inst_42537 = cljs.core.chunk_rest.call(null,inst_42532);
var inst_42538 = cljs.core.count.call(null,inst_42536);
var inst_42518 = inst_42537;
var inst_42519 = inst_42536;
var inst_42520 = inst_42538;
var inst_42521 = (0);
var state_42577__$1 = (function (){var statearr_42611 = state_42577;
(statearr_42611[(12)] = inst_42518);

(statearr_42611[(13)] = inst_42521);

(statearr_42611[(15)] = inst_42520);

(statearr_42611[(16)] = inst_42519);

return statearr_42611;
})();
var statearr_42612_42653 = state_42577__$1;
(statearr_42612_42653[(2)] = null);

(statearr_42612_42653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (10))){
var inst_42518 = (state_42577[(12)]);
var inst_42521 = (state_42577[(13)]);
var inst_42520 = (state_42577[(15)]);
var inst_42519 = (state_42577[(16)]);
var inst_42526 = cljs.core._nth.call(null,inst_42519,inst_42521);
var inst_42527 = cljs.core.async.muxch_STAR_.call(null,inst_42526);
var inst_42528 = cljs.core.async.close_BANG_.call(null,inst_42527);
var inst_42529 = (inst_42521 + (1));
var tmp42607 = inst_42518;
var tmp42608 = inst_42520;
var tmp42609 = inst_42519;
var inst_42518__$1 = tmp42607;
var inst_42519__$1 = tmp42609;
var inst_42520__$1 = tmp42608;
var inst_42521__$1 = inst_42529;
var state_42577__$1 = (function (){var statearr_42613 = state_42577;
(statearr_42613[(12)] = inst_42518__$1);

(statearr_42613[(17)] = inst_42528);

(statearr_42613[(13)] = inst_42521__$1);

(statearr_42613[(15)] = inst_42520__$1);

(statearr_42613[(16)] = inst_42519__$1);

return statearr_42613;
})();
var statearr_42614_42654 = state_42577__$1;
(statearr_42614_42654[(2)] = null);

(statearr_42614_42654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (18))){
var inst_42547 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42615_42655 = state_42577__$1;
(statearr_42615_42655[(2)] = inst_42547);

(statearr_42615_42655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (8))){
var inst_42521 = (state_42577[(13)]);
var inst_42520 = (state_42577[(15)]);
var inst_42523 = (inst_42521 < inst_42520);
var inst_42524 = inst_42523;
var state_42577__$1 = state_42577;
if(cljs.core.truth_(inst_42524)){
var statearr_42616_42656 = state_42577__$1;
(statearr_42616_42656[(1)] = (10));

} else {
var statearr_42617_42657 = state_42577__$1;
(statearr_42617_42657[(1)] = (11));

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
});})(c__40680__auto___42629,mults,ensure_mult,p))
;
return ((function (switch__40568__auto__,c__40680__auto___42629,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_42621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42621[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_42621[(1)] = (1));

return statearr_42621;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_42577){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_42577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e42622){if((e42622 instanceof Object)){
var ex__40572__auto__ = e42622;
var statearr_42623_42658 = state_42577;
(statearr_42623_42658[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42659 = state_42577;
state_42577 = G__42659;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_42577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_42577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___42629,mults,ensure_mult,p))
})();
var state__40682__auto__ = (function (){var statearr_42624 = f__40681__auto__.call(null);
(statearr_42624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___42629);

return statearr_42624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___42629,mults,ensure_mult,p))
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
var args42660 = [];
var len__37878__auto___42663 = arguments.length;
var i__37879__auto___42664 = (0);
while(true){
if((i__37879__auto___42664 < len__37878__auto___42663)){
args42660.push((arguments[i__37879__auto___42664]));

var G__42665 = (i__37879__auto___42664 + (1));
i__37879__auto___42664 = G__42665;
continue;
} else {
}
break;
}

var G__42662 = args42660.length;
switch (G__42662) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42660.length)].join('')));

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
var args42667 = [];
var len__37878__auto___42670 = arguments.length;
var i__37879__auto___42671 = (0);
while(true){
if((i__37879__auto___42671 < len__37878__auto___42670)){
args42667.push((arguments[i__37879__auto___42671]));

var G__42672 = (i__37879__auto___42671 + (1));
i__37879__auto___42671 = G__42672;
continue;
} else {
}
break;
}

var G__42669 = args42667.length;
switch (G__42669) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42667.length)].join('')));

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
var args42674 = [];
var len__37878__auto___42745 = arguments.length;
var i__37879__auto___42746 = (0);
while(true){
if((i__37879__auto___42746 < len__37878__auto___42745)){
args42674.push((arguments[i__37879__auto___42746]));

var G__42747 = (i__37879__auto___42746 + (1));
i__37879__auto___42746 = G__42747;
continue;
} else {
}
break;
}

var G__42676 = args42674.length;
switch (G__42676) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42674.length)].join('')));

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
var c__40680__auto___42749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___42749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___42749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42715){
var state_val_42716 = (state_42715[(1)]);
if((state_val_42716 === (7))){
var state_42715__$1 = state_42715;
var statearr_42717_42750 = state_42715__$1;
(statearr_42717_42750[(2)] = null);

(statearr_42717_42750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (1))){
var state_42715__$1 = state_42715;
var statearr_42718_42751 = state_42715__$1;
(statearr_42718_42751[(2)] = null);

(statearr_42718_42751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (4))){
var inst_42679 = (state_42715[(7)]);
var inst_42681 = (inst_42679 < cnt);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42681)){
var statearr_42719_42752 = state_42715__$1;
(statearr_42719_42752[(1)] = (6));

} else {
var statearr_42720_42753 = state_42715__$1;
(statearr_42720_42753[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (15))){
var inst_42711 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42721_42754 = state_42715__$1;
(statearr_42721_42754[(2)] = inst_42711);

(statearr_42721_42754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (13))){
var inst_42704 = cljs.core.async.close_BANG_.call(null,out);
var state_42715__$1 = state_42715;
var statearr_42722_42755 = state_42715__$1;
(statearr_42722_42755[(2)] = inst_42704);

(statearr_42722_42755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (6))){
var state_42715__$1 = state_42715;
var statearr_42723_42756 = state_42715__$1;
(statearr_42723_42756[(2)] = null);

(statearr_42723_42756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (3))){
var inst_42713 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42715__$1,inst_42713);
} else {
if((state_val_42716 === (12))){
var inst_42701 = (state_42715[(8)]);
var inst_42701__$1 = (state_42715[(2)]);
var inst_42702 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42701__$1);
var state_42715__$1 = (function (){var statearr_42724 = state_42715;
(statearr_42724[(8)] = inst_42701__$1);

return statearr_42724;
})();
if(cljs.core.truth_(inst_42702)){
var statearr_42725_42757 = state_42715__$1;
(statearr_42725_42757[(1)] = (13));

} else {
var statearr_42726_42758 = state_42715__$1;
(statearr_42726_42758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (2))){
var inst_42678 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42679 = (0);
var state_42715__$1 = (function (){var statearr_42727 = state_42715;
(statearr_42727[(7)] = inst_42679);

(statearr_42727[(9)] = inst_42678);

return statearr_42727;
})();
var statearr_42728_42759 = state_42715__$1;
(statearr_42728_42759[(2)] = null);

(statearr_42728_42759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (11))){
var inst_42679 = (state_42715[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42715,(10),Object,null,(9));
var inst_42688 = chs__$1.call(null,inst_42679);
var inst_42689 = done.call(null,inst_42679);
var inst_42690 = cljs.core.async.take_BANG_.call(null,inst_42688,inst_42689);
var state_42715__$1 = state_42715;
var statearr_42729_42760 = state_42715__$1;
(statearr_42729_42760[(2)] = inst_42690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42715__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (9))){
var inst_42679 = (state_42715[(7)]);
var inst_42692 = (state_42715[(2)]);
var inst_42693 = (inst_42679 + (1));
var inst_42679__$1 = inst_42693;
var state_42715__$1 = (function (){var statearr_42730 = state_42715;
(statearr_42730[(7)] = inst_42679__$1);

(statearr_42730[(10)] = inst_42692);

return statearr_42730;
})();
var statearr_42731_42761 = state_42715__$1;
(statearr_42731_42761[(2)] = null);

(statearr_42731_42761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (5))){
var inst_42699 = (state_42715[(2)]);
var state_42715__$1 = (function (){var statearr_42732 = state_42715;
(statearr_42732[(11)] = inst_42699);

return statearr_42732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42715__$1,(12),dchan);
} else {
if((state_val_42716 === (14))){
var inst_42701 = (state_42715[(8)]);
var inst_42706 = cljs.core.apply.call(null,f,inst_42701);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42715__$1,(16),out,inst_42706);
} else {
if((state_val_42716 === (16))){
var inst_42708 = (state_42715[(2)]);
var state_42715__$1 = (function (){var statearr_42733 = state_42715;
(statearr_42733[(12)] = inst_42708);

return statearr_42733;
})();
var statearr_42734_42762 = state_42715__$1;
(statearr_42734_42762[(2)] = null);

(statearr_42734_42762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (10))){
var inst_42683 = (state_42715[(2)]);
var inst_42684 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42715__$1 = (function (){var statearr_42735 = state_42715;
(statearr_42735[(13)] = inst_42683);

return statearr_42735;
})();
var statearr_42736_42763 = state_42715__$1;
(statearr_42736_42763[(2)] = inst_42684);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42715__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (8))){
var inst_42697 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42737_42764 = state_42715__$1;
(statearr_42737_42764[(2)] = inst_42697);

(statearr_42737_42764[(1)] = (5));


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
});})(c__40680__auto___42749,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40568__auto__,c__40680__auto___42749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_42741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42741[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_42741[(1)] = (1));

return statearr_42741;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_42715){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_42715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e42742){if((e42742 instanceof Object)){
var ex__40572__auto__ = e42742;
var statearr_42743_42765 = state_42715;
(statearr_42743_42765[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42766 = state_42715;
state_42715 = G__42766;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_42715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_42715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___42749,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40682__auto__ = (function (){var statearr_42744 = f__40681__auto__.call(null);
(statearr_42744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___42749);

return statearr_42744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___42749,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42768 = [];
var len__37878__auto___42826 = arguments.length;
var i__37879__auto___42827 = (0);
while(true){
if((i__37879__auto___42827 < len__37878__auto___42826)){
args42768.push((arguments[i__37879__auto___42827]));

var G__42828 = (i__37879__auto___42827 + (1));
i__37879__auto___42827 = G__42828;
continue;
} else {
}
break;
}

var G__42770 = args42768.length;
switch (G__42770) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42768.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40680__auto___42830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___42830,out){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___42830,out){
return (function (state_42802){
var state_val_42803 = (state_42802[(1)]);
if((state_val_42803 === (7))){
var inst_42782 = (state_42802[(7)]);
var inst_42781 = (state_42802[(8)]);
var inst_42781__$1 = (state_42802[(2)]);
var inst_42782__$1 = cljs.core.nth.call(null,inst_42781__$1,(0),null);
var inst_42783 = cljs.core.nth.call(null,inst_42781__$1,(1),null);
var inst_42784 = (inst_42782__$1 == null);
var state_42802__$1 = (function (){var statearr_42804 = state_42802;
(statearr_42804[(9)] = inst_42783);

(statearr_42804[(7)] = inst_42782__$1);

(statearr_42804[(8)] = inst_42781__$1);

return statearr_42804;
})();
if(cljs.core.truth_(inst_42784)){
var statearr_42805_42831 = state_42802__$1;
(statearr_42805_42831[(1)] = (8));

} else {
var statearr_42806_42832 = state_42802__$1;
(statearr_42806_42832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (1))){
var inst_42771 = cljs.core.vec.call(null,chs);
var inst_42772 = inst_42771;
var state_42802__$1 = (function (){var statearr_42807 = state_42802;
(statearr_42807[(10)] = inst_42772);

return statearr_42807;
})();
var statearr_42808_42833 = state_42802__$1;
(statearr_42808_42833[(2)] = null);

(statearr_42808_42833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (4))){
var inst_42772 = (state_42802[(10)]);
var state_42802__$1 = state_42802;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42802__$1,(7),inst_42772);
} else {
if((state_val_42803 === (6))){
var inst_42798 = (state_42802[(2)]);
var state_42802__$1 = state_42802;
var statearr_42809_42834 = state_42802__$1;
(statearr_42809_42834[(2)] = inst_42798);

(statearr_42809_42834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (3))){
var inst_42800 = (state_42802[(2)]);
var state_42802__$1 = state_42802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42802__$1,inst_42800);
} else {
if((state_val_42803 === (2))){
var inst_42772 = (state_42802[(10)]);
var inst_42774 = cljs.core.count.call(null,inst_42772);
var inst_42775 = (inst_42774 > (0));
var state_42802__$1 = state_42802;
if(cljs.core.truth_(inst_42775)){
var statearr_42811_42835 = state_42802__$1;
(statearr_42811_42835[(1)] = (4));

} else {
var statearr_42812_42836 = state_42802__$1;
(statearr_42812_42836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (11))){
var inst_42772 = (state_42802[(10)]);
var inst_42791 = (state_42802[(2)]);
var tmp42810 = inst_42772;
var inst_42772__$1 = tmp42810;
var state_42802__$1 = (function (){var statearr_42813 = state_42802;
(statearr_42813[(10)] = inst_42772__$1);

(statearr_42813[(11)] = inst_42791);

return statearr_42813;
})();
var statearr_42814_42837 = state_42802__$1;
(statearr_42814_42837[(2)] = null);

(statearr_42814_42837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (9))){
var inst_42782 = (state_42802[(7)]);
var state_42802__$1 = state_42802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42802__$1,(11),out,inst_42782);
} else {
if((state_val_42803 === (5))){
var inst_42796 = cljs.core.async.close_BANG_.call(null,out);
var state_42802__$1 = state_42802;
var statearr_42815_42838 = state_42802__$1;
(statearr_42815_42838[(2)] = inst_42796);

(statearr_42815_42838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (10))){
var inst_42794 = (state_42802[(2)]);
var state_42802__$1 = state_42802;
var statearr_42816_42839 = state_42802__$1;
(statearr_42816_42839[(2)] = inst_42794);

(statearr_42816_42839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (8))){
var inst_42772 = (state_42802[(10)]);
var inst_42783 = (state_42802[(9)]);
var inst_42782 = (state_42802[(7)]);
var inst_42781 = (state_42802[(8)]);
var inst_42786 = (function (){var cs = inst_42772;
var vec__42777 = inst_42781;
var v = inst_42782;
var c = inst_42783;
return ((function (cs,vec__42777,v,c,inst_42772,inst_42783,inst_42782,inst_42781,state_val_42803,c__40680__auto___42830,out){
return (function (p1__42767_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42767_SHARP_);
});
;})(cs,vec__42777,v,c,inst_42772,inst_42783,inst_42782,inst_42781,state_val_42803,c__40680__auto___42830,out))
})();
var inst_42787 = cljs.core.filterv.call(null,inst_42786,inst_42772);
var inst_42772__$1 = inst_42787;
var state_42802__$1 = (function (){var statearr_42817 = state_42802;
(statearr_42817[(10)] = inst_42772__$1);

return statearr_42817;
})();
var statearr_42818_42840 = state_42802__$1;
(statearr_42818_42840[(2)] = null);

(statearr_42818_42840[(1)] = (2));


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
});})(c__40680__auto___42830,out))
;
return ((function (switch__40568__auto__,c__40680__auto___42830,out){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_42822 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42822[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_42822[(1)] = (1));

return statearr_42822;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_42802){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_42802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e42823){if((e42823 instanceof Object)){
var ex__40572__auto__ = e42823;
var statearr_42824_42841 = state_42802;
(statearr_42824_42841[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42842 = state_42802;
state_42802 = G__42842;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_42802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_42802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___42830,out))
})();
var state__40682__auto__ = (function (){var statearr_42825 = f__40681__auto__.call(null);
(statearr_42825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___42830);

return statearr_42825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___42830,out))
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
var args42843 = [];
var len__37878__auto___42892 = arguments.length;
var i__37879__auto___42893 = (0);
while(true){
if((i__37879__auto___42893 < len__37878__auto___42892)){
args42843.push((arguments[i__37879__auto___42893]));

var G__42894 = (i__37879__auto___42893 + (1));
i__37879__auto___42893 = G__42894;
continue;
} else {
}
break;
}

var G__42845 = args42843.length;
switch (G__42845) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42843.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40680__auto___42896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___42896,out){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___42896,out){
return (function (state_42869){
var state_val_42870 = (state_42869[(1)]);
if((state_val_42870 === (7))){
var inst_42851 = (state_42869[(7)]);
var inst_42851__$1 = (state_42869[(2)]);
var inst_42852 = (inst_42851__$1 == null);
var inst_42853 = cljs.core.not.call(null,inst_42852);
var state_42869__$1 = (function (){var statearr_42871 = state_42869;
(statearr_42871[(7)] = inst_42851__$1);

return statearr_42871;
})();
if(inst_42853){
var statearr_42872_42897 = state_42869__$1;
(statearr_42872_42897[(1)] = (8));

} else {
var statearr_42873_42898 = state_42869__$1;
(statearr_42873_42898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (1))){
var inst_42846 = (0);
var state_42869__$1 = (function (){var statearr_42874 = state_42869;
(statearr_42874[(8)] = inst_42846);

return statearr_42874;
})();
var statearr_42875_42899 = state_42869__$1;
(statearr_42875_42899[(2)] = null);

(statearr_42875_42899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (4))){
var state_42869__$1 = state_42869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42869__$1,(7),ch);
} else {
if((state_val_42870 === (6))){
var inst_42864 = (state_42869[(2)]);
var state_42869__$1 = state_42869;
var statearr_42876_42900 = state_42869__$1;
(statearr_42876_42900[(2)] = inst_42864);

(statearr_42876_42900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (3))){
var inst_42866 = (state_42869[(2)]);
var inst_42867 = cljs.core.async.close_BANG_.call(null,out);
var state_42869__$1 = (function (){var statearr_42877 = state_42869;
(statearr_42877[(9)] = inst_42866);

return statearr_42877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42869__$1,inst_42867);
} else {
if((state_val_42870 === (2))){
var inst_42846 = (state_42869[(8)]);
var inst_42848 = (inst_42846 < n);
var state_42869__$1 = state_42869;
if(cljs.core.truth_(inst_42848)){
var statearr_42878_42901 = state_42869__$1;
(statearr_42878_42901[(1)] = (4));

} else {
var statearr_42879_42902 = state_42869__$1;
(statearr_42879_42902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (11))){
var inst_42846 = (state_42869[(8)]);
var inst_42856 = (state_42869[(2)]);
var inst_42857 = (inst_42846 + (1));
var inst_42846__$1 = inst_42857;
var state_42869__$1 = (function (){var statearr_42880 = state_42869;
(statearr_42880[(8)] = inst_42846__$1);

(statearr_42880[(10)] = inst_42856);

return statearr_42880;
})();
var statearr_42881_42903 = state_42869__$1;
(statearr_42881_42903[(2)] = null);

(statearr_42881_42903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (9))){
var state_42869__$1 = state_42869;
var statearr_42882_42904 = state_42869__$1;
(statearr_42882_42904[(2)] = null);

(statearr_42882_42904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (5))){
var state_42869__$1 = state_42869;
var statearr_42883_42905 = state_42869__$1;
(statearr_42883_42905[(2)] = null);

(statearr_42883_42905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (10))){
var inst_42861 = (state_42869[(2)]);
var state_42869__$1 = state_42869;
var statearr_42884_42906 = state_42869__$1;
(statearr_42884_42906[(2)] = inst_42861);

(statearr_42884_42906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42870 === (8))){
var inst_42851 = (state_42869[(7)]);
var state_42869__$1 = state_42869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42869__$1,(11),out,inst_42851);
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
});})(c__40680__auto___42896,out))
;
return ((function (switch__40568__auto__,c__40680__auto___42896,out){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_42888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42888[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_42888[(1)] = (1));

return statearr_42888;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_42869){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_42869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e42889){if((e42889 instanceof Object)){
var ex__40572__auto__ = e42889;
var statearr_42890_42907 = state_42869;
(statearr_42890_42907[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42908 = state_42869;
state_42869 = G__42908;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_42869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_42869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___42896,out))
})();
var state__40682__auto__ = (function (){var statearr_42891 = f__40681__auto__.call(null);
(statearr_42891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___42896);

return statearr_42891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___42896,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42916 = (function (map_LT_,f,ch,meta42917){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42917 = meta42917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42918,meta42917__$1){
var self__ = this;
var _42918__$1 = this;
return (new cljs.core.async.t_cljs$core$async42916(self__.map_LT_,self__.f,self__.ch,meta42917__$1));
});

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42918){
var self__ = this;
var _42918__$1 = this;
return self__.meta42917;
});

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42919 = (function (map_LT_,f,ch,meta42917,_,fn1,meta42920){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42917 = meta42917;
this._ = _;
this.fn1 = fn1;
this.meta42920 = meta42920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42921,meta42920__$1){
var self__ = this;
var _42921__$1 = this;
return (new cljs.core.async.t_cljs$core$async42919(self__.map_LT_,self__.f,self__.ch,self__.meta42917,self__._,self__.fn1,meta42920__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42921){
var self__ = this;
var _42921__$1 = this;
return self__.meta42920;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42909_SHARP_){
return f1.call(null,(((p1__42909_SHARP_ == null))?null:self__.f.call(null,p1__42909_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42919.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42917","meta42917",-2034685127,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42916","cljs.core.async/t_cljs$core$async42916",789926000,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42920","meta42920",-1779291831,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42919";

cljs.core.async.t_cljs$core$async42919.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42919");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42919 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42919(map_LT___$1,f__$1,ch__$1,meta42917__$1,___$2,fn1__$1,meta42920){
return (new cljs.core.async.t_cljs$core$async42919(map_LT___$1,f__$1,ch__$1,meta42917__$1,___$2,fn1__$1,meta42920));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42919(self__.map_LT_,self__.f,self__.ch,self__.meta42917,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42917","meta42917",-2034685127,null)], null);
});

cljs.core.async.t_cljs$core$async42916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42916";

cljs.core.async.t_cljs$core$async42916.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42916");
});

cljs.core.async.__GT_t_cljs$core$async42916 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42916(map_LT___$1,f__$1,ch__$1,meta42917){
return (new cljs.core.async.t_cljs$core$async42916(map_LT___$1,f__$1,ch__$1,meta42917));
});

}

return (new cljs.core.async.t_cljs$core$async42916(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42925 = (function (map_GT_,f,ch,meta42926){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42926 = meta42926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42927,meta42926__$1){
var self__ = this;
var _42927__$1 = this;
return (new cljs.core.async.t_cljs$core$async42925(self__.map_GT_,self__.f,self__.ch,meta42926__$1));
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42927){
var self__ = this;
var _42927__$1 = this;
return self__.meta42926;
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42926","meta42926",1309369060,null)], null);
});

cljs.core.async.t_cljs$core$async42925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42925";

cljs.core.async.t_cljs$core$async42925.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42925");
});

cljs.core.async.__GT_t_cljs$core$async42925 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42925(map_GT___$1,f__$1,ch__$1,meta42926){
return (new cljs.core.async.t_cljs$core$async42925(map_GT___$1,f__$1,ch__$1,meta42926));
});

}

return (new cljs.core.async.t_cljs$core$async42925(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42931 = (function (filter_GT_,p,ch,meta42932){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42932 = meta42932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42933,meta42932__$1){
var self__ = this;
var _42933__$1 = this;
return (new cljs.core.async.t_cljs$core$async42931(self__.filter_GT_,self__.p,self__.ch,meta42932__$1));
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42933){
var self__ = this;
var _42933__$1 = this;
return self__.meta42932;
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42932","meta42932",-1258722412,null)], null);
});

cljs.core.async.t_cljs$core$async42931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42931";

cljs.core.async.t_cljs$core$async42931.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.core.async/t_cljs$core$async42931");
});

cljs.core.async.__GT_t_cljs$core$async42931 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42931(filter_GT___$1,p__$1,ch__$1,meta42932){
return (new cljs.core.async.t_cljs$core$async42931(filter_GT___$1,p__$1,ch__$1,meta42932));
});

}

return (new cljs.core.async.t_cljs$core$async42931(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42934 = [];
var len__37878__auto___42978 = arguments.length;
var i__37879__auto___42979 = (0);
while(true){
if((i__37879__auto___42979 < len__37878__auto___42978)){
args42934.push((arguments[i__37879__auto___42979]));

var G__42980 = (i__37879__auto___42979 + (1));
i__37879__auto___42979 = G__42980;
continue;
} else {
}
break;
}

var G__42936 = args42934.length;
switch (G__42936) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42934.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40680__auto___42982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___42982,out){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___42982,out){
return (function (state_42957){
var state_val_42958 = (state_42957[(1)]);
if((state_val_42958 === (7))){
var inst_42953 = (state_42957[(2)]);
var state_42957__$1 = state_42957;
var statearr_42959_42983 = state_42957__$1;
(statearr_42959_42983[(2)] = inst_42953);

(statearr_42959_42983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (1))){
var state_42957__$1 = state_42957;
var statearr_42960_42984 = state_42957__$1;
(statearr_42960_42984[(2)] = null);

(statearr_42960_42984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (4))){
var inst_42939 = (state_42957[(7)]);
var inst_42939__$1 = (state_42957[(2)]);
var inst_42940 = (inst_42939__$1 == null);
var state_42957__$1 = (function (){var statearr_42961 = state_42957;
(statearr_42961[(7)] = inst_42939__$1);

return statearr_42961;
})();
if(cljs.core.truth_(inst_42940)){
var statearr_42962_42985 = state_42957__$1;
(statearr_42962_42985[(1)] = (5));

} else {
var statearr_42963_42986 = state_42957__$1;
(statearr_42963_42986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (6))){
var inst_42939 = (state_42957[(7)]);
var inst_42944 = p.call(null,inst_42939);
var state_42957__$1 = state_42957;
if(cljs.core.truth_(inst_42944)){
var statearr_42964_42987 = state_42957__$1;
(statearr_42964_42987[(1)] = (8));

} else {
var statearr_42965_42988 = state_42957__$1;
(statearr_42965_42988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (3))){
var inst_42955 = (state_42957[(2)]);
var state_42957__$1 = state_42957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42957__$1,inst_42955);
} else {
if((state_val_42958 === (2))){
var state_42957__$1 = state_42957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42957__$1,(4),ch);
} else {
if((state_val_42958 === (11))){
var inst_42947 = (state_42957[(2)]);
var state_42957__$1 = state_42957;
var statearr_42966_42989 = state_42957__$1;
(statearr_42966_42989[(2)] = inst_42947);

(statearr_42966_42989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (9))){
var state_42957__$1 = state_42957;
var statearr_42967_42990 = state_42957__$1;
(statearr_42967_42990[(2)] = null);

(statearr_42967_42990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (5))){
var inst_42942 = cljs.core.async.close_BANG_.call(null,out);
var state_42957__$1 = state_42957;
var statearr_42968_42991 = state_42957__$1;
(statearr_42968_42991[(2)] = inst_42942);

(statearr_42968_42991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (10))){
var inst_42950 = (state_42957[(2)]);
var state_42957__$1 = (function (){var statearr_42969 = state_42957;
(statearr_42969[(8)] = inst_42950);

return statearr_42969;
})();
var statearr_42970_42992 = state_42957__$1;
(statearr_42970_42992[(2)] = null);

(statearr_42970_42992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42958 === (8))){
var inst_42939 = (state_42957[(7)]);
var state_42957__$1 = state_42957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42957__$1,(11),out,inst_42939);
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
});})(c__40680__auto___42982,out))
;
return ((function (switch__40568__auto__,c__40680__auto___42982,out){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_42974 = [null,null,null,null,null,null,null,null,null];
(statearr_42974[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_42974[(1)] = (1));

return statearr_42974;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_42957){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_42957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e42975){if((e42975 instanceof Object)){
var ex__40572__auto__ = e42975;
var statearr_42976_42993 = state_42957;
(statearr_42976_42993[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42994 = state_42957;
state_42957 = G__42994;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_42957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_42957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___42982,out))
})();
var state__40682__auto__ = (function (){var statearr_42977 = f__40681__auto__.call(null);
(statearr_42977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___42982);

return statearr_42977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___42982,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42995 = [];
var len__37878__auto___42998 = arguments.length;
var i__37879__auto___42999 = (0);
while(true){
if((i__37879__auto___42999 < len__37878__auto___42998)){
args42995.push((arguments[i__37879__auto___42999]));

var G__43000 = (i__37879__auto___42999 + (1));
i__37879__auto___42999 = G__43000;
continue;
} else {
}
break;
}

var G__42997 = args42995.length;
switch (G__42997) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42995.length)].join('')));

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
var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__){
return (function (state_43167){
var state_val_43168 = (state_43167[(1)]);
if((state_val_43168 === (7))){
var inst_43163 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43169_43210 = state_43167__$1;
(statearr_43169_43210[(2)] = inst_43163);

(statearr_43169_43210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (20))){
var inst_43133 = (state_43167[(7)]);
var inst_43144 = (state_43167[(2)]);
var inst_43145 = cljs.core.next.call(null,inst_43133);
var inst_43119 = inst_43145;
var inst_43120 = null;
var inst_43121 = (0);
var inst_43122 = (0);
var state_43167__$1 = (function (){var statearr_43170 = state_43167;
(statearr_43170[(8)] = inst_43120);

(statearr_43170[(9)] = inst_43119);

(statearr_43170[(10)] = inst_43144);

(statearr_43170[(11)] = inst_43122);

(statearr_43170[(12)] = inst_43121);

return statearr_43170;
})();
var statearr_43171_43211 = state_43167__$1;
(statearr_43171_43211[(2)] = null);

(statearr_43171_43211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (1))){
var state_43167__$1 = state_43167;
var statearr_43172_43212 = state_43167__$1;
(statearr_43172_43212[(2)] = null);

(statearr_43172_43212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (4))){
var inst_43108 = (state_43167[(13)]);
var inst_43108__$1 = (state_43167[(2)]);
var inst_43109 = (inst_43108__$1 == null);
var state_43167__$1 = (function (){var statearr_43173 = state_43167;
(statearr_43173[(13)] = inst_43108__$1);

return statearr_43173;
})();
if(cljs.core.truth_(inst_43109)){
var statearr_43174_43213 = state_43167__$1;
(statearr_43174_43213[(1)] = (5));

} else {
var statearr_43175_43214 = state_43167__$1;
(statearr_43175_43214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (15))){
var state_43167__$1 = state_43167;
var statearr_43179_43215 = state_43167__$1;
(statearr_43179_43215[(2)] = null);

(statearr_43179_43215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (21))){
var state_43167__$1 = state_43167;
var statearr_43180_43216 = state_43167__$1;
(statearr_43180_43216[(2)] = null);

(statearr_43180_43216[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (13))){
var inst_43120 = (state_43167[(8)]);
var inst_43119 = (state_43167[(9)]);
var inst_43122 = (state_43167[(11)]);
var inst_43121 = (state_43167[(12)]);
var inst_43129 = (state_43167[(2)]);
var inst_43130 = (inst_43122 + (1));
var tmp43176 = inst_43120;
var tmp43177 = inst_43119;
var tmp43178 = inst_43121;
var inst_43119__$1 = tmp43177;
var inst_43120__$1 = tmp43176;
var inst_43121__$1 = tmp43178;
var inst_43122__$1 = inst_43130;
var state_43167__$1 = (function (){var statearr_43181 = state_43167;
(statearr_43181[(8)] = inst_43120__$1);

(statearr_43181[(9)] = inst_43119__$1);

(statearr_43181[(11)] = inst_43122__$1);

(statearr_43181[(14)] = inst_43129);

(statearr_43181[(12)] = inst_43121__$1);

return statearr_43181;
})();
var statearr_43182_43217 = state_43167__$1;
(statearr_43182_43217[(2)] = null);

(statearr_43182_43217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (22))){
var state_43167__$1 = state_43167;
var statearr_43183_43218 = state_43167__$1;
(statearr_43183_43218[(2)] = null);

(statearr_43183_43218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (6))){
var inst_43108 = (state_43167[(13)]);
var inst_43117 = f.call(null,inst_43108);
var inst_43118 = cljs.core.seq.call(null,inst_43117);
var inst_43119 = inst_43118;
var inst_43120 = null;
var inst_43121 = (0);
var inst_43122 = (0);
var state_43167__$1 = (function (){var statearr_43184 = state_43167;
(statearr_43184[(8)] = inst_43120);

(statearr_43184[(9)] = inst_43119);

(statearr_43184[(11)] = inst_43122);

(statearr_43184[(12)] = inst_43121);

return statearr_43184;
})();
var statearr_43185_43219 = state_43167__$1;
(statearr_43185_43219[(2)] = null);

(statearr_43185_43219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (17))){
var inst_43133 = (state_43167[(7)]);
var inst_43137 = cljs.core.chunk_first.call(null,inst_43133);
var inst_43138 = cljs.core.chunk_rest.call(null,inst_43133);
var inst_43139 = cljs.core.count.call(null,inst_43137);
var inst_43119 = inst_43138;
var inst_43120 = inst_43137;
var inst_43121 = inst_43139;
var inst_43122 = (0);
var state_43167__$1 = (function (){var statearr_43186 = state_43167;
(statearr_43186[(8)] = inst_43120);

(statearr_43186[(9)] = inst_43119);

(statearr_43186[(11)] = inst_43122);

(statearr_43186[(12)] = inst_43121);

return statearr_43186;
})();
var statearr_43187_43220 = state_43167__$1;
(statearr_43187_43220[(2)] = null);

(statearr_43187_43220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (3))){
var inst_43165 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43167__$1,inst_43165);
} else {
if((state_val_43168 === (12))){
var inst_43153 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43188_43221 = state_43167__$1;
(statearr_43188_43221[(2)] = inst_43153);

(statearr_43188_43221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (2))){
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43167__$1,(4),in$);
} else {
if((state_val_43168 === (23))){
var inst_43161 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43189_43222 = state_43167__$1;
(statearr_43189_43222[(2)] = inst_43161);

(statearr_43189_43222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (19))){
var inst_43148 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43190_43223 = state_43167__$1;
(statearr_43190_43223[(2)] = inst_43148);

(statearr_43190_43223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (11))){
var inst_43133 = (state_43167[(7)]);
var inst_43119 = (state_43167[(9)]);
var inst_43133__$1 = cljs.core.seq.call(null,inst_43119);
var state_43167__$1 = (function (){var statearr_43191 = state_43167;
(statearr_43191[(7)] = inst_43133__$1);

return statearr_43191;
})();
if(inst_43133__$1){
var statearr_43192_43224 = state_43167__$1;
(statearr_43192_43224[(1)] = (14));

} else {
var statearr_43193_43225 = state_43167__$1;
(statearr_43193_43225[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (9))){
var inst_43155 = (state_43167[(2)]);
var inst_43156 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43167__$1 = (function (){var statearr_43194 = state_43167;
(statearr_43194[(15)] = inst_43155);

return statearr_43194;
})();
if(cljs.core.truth_(inst_43156)){
var statearr_43195_43226 = state_43167__$1;
(statearr_43195_43226[(1)] = (21));

} else {
var statearr_43196_43227 = state_43167__$1;
(statearr_43196_43227[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (5))){
var inst_43111 = cljs.core.async.close_BANG_.call(null,out);
var state_43167__$1 = state_43167;
var statearr_43197_43228 = state_43167__$1;
(statearr_43197_43228[(2)] = inst_43111);

(statearr_43197_43228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (14))){
var inst_43133 = (state_43167[(7)]);
var inst_43135 = cljs.core.chunked_seq_QMARK_.call(null,inst_43133);
var state_43167__$1 = state_43167;
if(inst_43135){
var statearr_43198_43229 = state_43167__$1;
(statearr_43198_43229[(1)] = (17));

} else {
var statearr_43199_43230 = state_43167__$1;
(statearr_43199_43230[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (16))){
var inst_43151 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43200_43231 = state_43167__$1;
(statearr_43200_43231[(2)] = inst_43151);

(statearr_43200_43231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (10))){
var inst_43120 = (state_43167[(8)]);
var inst_43122 = (state_43167[(11)]);
var inst_43127 = cljs.core._nth.call(null,inst_43120,inst_43122);
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43167__$1,(13),out,inst_43127);
} else {
if((state_val_43168 === (18))){
var inst_43133 = (state_43167[(7)]);
var inst_43142 = cljs.core.first.call(null,inst_43133);
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43167__$1,(20),out,inst_43142);
} else {
if((state_val_43168 === (8))){
var inst_43122 = (state_43167[(11)]);
var inst_43121 = (state_43167[(12)]);
var inst_43124 = (inst_43122 < inst_43121);
var inst_43125 = inst_43124;
var state_43167__$1 = state_43167;
if(cljs.core.truth_(inst_43125)){
var statearr_43201_43232 = state_43167__$1;
(statearr_43201_43232[(1)] = (10));

} else {
var statearr_43202_43233 = state_43167__$1;
(statearr_43202_43233[(1)] = (11));

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
});})(c__40680__auto__))
;
return ((function (switch__40568__auto__,c__40680__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40569__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40569__auto____0 = (function (){
var statearr_43206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43206[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40569__auto__);

(statearr_43206[(1)] = (1));

return statearr_43206;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40569__auto____1 = (function (state_43167){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_43167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e43207){if((e43207 instanceof Object)){
var ex__40572__auto__ = e43207;
var statearr_43208_43234 = state_43167;
(statearr_43208_43234[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43235 = state_43167;
state_43167 = G__43235;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40569__auto__ = function(state_43167){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40569__auto____1.call(this,state_43167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40569__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40569__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__))
})();
var state__40682__auto__ = (function (){var statearr_43209 = f__40681__auto__.call(null);
(statearr_43209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_43209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__))
);

return c__40680__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43236 = [];
var len__37878__auto___43239 = arguments.length;
var i__37879__auto___43240 = (0);
while(true){
if((i__37879__auto___43240 < len__37878__auto___43239)){
args43236.push((arguments[i__37879__auto___43240]));

var G__43241 = (i__37879__auto___43240 + (1));
i__37879__auto___43240 = G__43241;
continue;
} else {
}
break;
}

var G__43238 = args43236.length;
switch (G__43238) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43236.length)].join('')));

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
var args43243 = [];
var len__37878__auto___43246 = arguments.length;
var i__37879__auto___43247 = (0);
while(true){
if((i__37879__auto___43247 < len__37878__auto___43246)){
args43243.push((arguments[i__37879__auto___43247]));

var G__43248 = (i__37879__auto___43247 + (1));
i__37879__auto___43247 = G__43248;
continue;
} else {
}
break;
}

var G__43245 = args43243.length;
switch (G__43245) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43243.length)].join('')));

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
var args43250 = [];
var len__37878__auto___43301 = arguments.length;
var i__37879__auto___43302 = (0);
while(true){
if((i__37879__auto___43302 < len__37878__auto___43301)){
args43250.push((arguments[i__37879__auto___43302]));

var G__43303 = (i__37879__auto___43302 + (1));
i__37879__auto___43302 = G__43303;
continue;
} else {
}
break;
}

var G__43252 = args43250.length;
switch (G__43252) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43250.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40680__auto___43305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___43305,out){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___43305,out){
return (function (state_43276){
var state_val_43277 = (state_43276[(1)]);
if((state_val_43277 === (7))){
var inst_43271 = (state_43276[(2)]);
var state_43276__$1 = state_43276;
var statearr_43278_43306 = state_43276__$1;
(statearr_43278_43306[(2)] = inst_43271);

(statearr_43278_43306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (1))){
var inst_43253 = null;
var state_43276__$1 = (function (){var statearr_43279 = state_43276;
(statearr_43279[(7)] = inst_43253);

return statearr_43279;
})();
var statearr_43280_43307 = state_43276__$1;
(statearr_43280_43307[(2)] = null);

(statearr_43280_43307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (4))){
var inst_43256 = (state_43276[(8)]);
var inst_43256__$1 = (state_43276[(2)]);
var inst_43257 = (inst_43256__$1 == null);
var inst_43258 = cljs.core.not.call(null,inst_43257);
var state_43276__$1 = (function (){var statearr_43281 = state_43276;
(statearr_43281[(8)] = inst_43256__$1);

return statearr_43281;
})();
if(inst_43258){
var statearr_43282_43308 = state_43276__$1;
(statearr_43282_43308[(1)] = (5));

} else {
var statearr_43283_43309 = state_43276__$1;
(statearr_43283_43309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (6))){
var state_43276__$1 = state_43276;
var statearr_43284_43310 = state_43276__$1;
(statearr_43284_43310[(2)] = null);

(statearr_43284_43310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (3))){
var inst_43273 = (state_43276[(2)]);
var inst_43274 = cljs.core.async.close_BANG_.call(null,out);
var state_43276__$1 = (function (){var statearr_43285 = state_43276;
(statearr_43285[(9)] = inst_43273);

return statearr_43285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43276__$1,inst_43274);
} else {
if((state_val_43277 === (2))){
var state_43276__$1 = state_43276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43276__$1,(4),ch);
} else {
if((state_val_43277 === (11))){
var inst_43256 = (state_43276[(8)]);
var inst_43265 = (state_43276[(2)]);
var inst_43253 = inst_43256;
var state_43276__$1 = (function (){var statearr_43286 = state_43276;
(statearr_43286[(10)] = inst_43265);

(statearr_43286[(7)] = inst_43253);

return statearr_43286;
})();
var statearr_43287_43311 = state_43276__$1;
(statearr_43287_43311[(2)] = null);

(statearr_43287_43311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (9))){
var inst_43256 = (state_43276[(8)]);
var state_43276__$1 = state_43276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43276__$1,(11),out,inst_43256);
} else {
if((state_val_43277 === (5))){
var inst_43253 = (state_43276[(7)]);
var inst_43256 = (state_43276[(8)]);
var inst_43260 = cljs.core._EQ_.call(null,inst_43256,inst_43253);
var state_43276__$1 = state_43276;
if(inst_43260){
var statearr_43289_43312 = state_43276__$1;
(statearr_43289_43312[(1)] = (8));

} else {
var statearr_43290_43313 = state_43276__$1;
(statearr_43290_43313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (10))){
var inst_43268 = (state_43276[(2)]);
var state_43276__$1 = state_43276;
var statearr_43291_43314 = state_43276__$1;
(statearr_43291_43314[(2)] = inst_43268);

(statearr_43291_43314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (8))){
var inst_43253 = (state_43276[(7)]);
var tmp43288 = inst_43253;
var inst_43253__$1 = tmp43288;
var state_43276__$1 = (function (){var statearr_43292 = state_43276;
(statearr_43292[(7)] = inst_43253__$1);

return statearr_43292;
})();
var statearr_43293_43315 = state_43276__$1;
(statearr_43293_43315[(2)] = null);

(statearr_43293_43315[(1)] = (2));


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
});})(c__40680__auto___43305,out))
;
return ((function (switch__40568__auto__,c__40680__auto___43305,out){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_43297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43297[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_43297[(1)] = (1));

return statearr_43297;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_43276){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_43276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e43298){if((e43298 instanceof Object)){
var ex__40572__auto__ = e43298;
var statearr_43299_43316 = state_43276;
(statearr_43299_43316[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43317 = state_43276;
state_43276 = G__43317;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_43276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_43276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___43305,out))
})();
var state__40682__auto__ = (function (){var statearr_43300 = f__40681__auto__.call(null);
(statearr_43300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___43305);

return statearr_43300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___43305,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43318 = [];
var len__37878__auto___43388 = arguments.length;
var i__37879__auto___43389 = (0);
while(true){
if((i__37879__auto___43389 < len__37878__auto___43388)){
args43318.push((arguments[i__37879__auto___43389]));

var G__43390 = (i__37879__auto___43389 + (1));
i__37879__auto___43389 = G__43390;
continue;
} else {
}
break;
}

var G__43320 = args43318.length;
switch (G__43320) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43318.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40680__auto___43392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___43392,out){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___43392,out){
return (function (state_43358){
var state_val_43359 = (state_43358[(1)]);
if((state_val_43359 === (7))){
var inst_43354 = (state_43358[(2)]);
var state_43358__$1 = state_43358;
var statearr_43360_43393 = state_43358__$1;
(statearr_43360_43393[(2)] = inst_43354);

(statearr_43360_43393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (1))){
var inst_43321 = (new Array(n));
var inst_43322 = inst_43321;
var inst_43323 = (0);
var state_43358__$1 = (function (){var statearr_43361 = state_43358;
(statearr_43361[(7)] = inst_43322);

(statearr_43361[(8)] = inst_43323);

return statearr_43361;
})();
var statearr_43362_43394 = state_43358__$1;
(statearr_43362_43394[(2)] = null);

(statearr_43362_43394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (4))){
var inst_43326 = (state_43358[(9)]);
var inst_43326__$1 = (state_43358[(2)]);
var inst_43327 = (inst_43326__$1 == null);
var inst_43328 = cljs.core.not.call(null,inst_43327);
var state_43358__$1 = (function (){var statearr_43363 = state_43358;
(statearr_43363[(9)] = inst_43326__$1);

return statearr_43363;
})();
if(inst_43328){
var statearr_43364_43395 = state_43358__$1;
(statearr_43364_43395[(1)] = (5));

} else {
var statearr_43365_43396 = state_43358__$1;
(statearr_43365_43396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (15))){
var inst_43348 = (state_43358[(2)]);
var state_43358__$1 = state_43358;
var statearr_43366_43397 = state_43358__$1;
(statearr_43366_43397[(2)] = inst_43348);

(statearr_43366_43397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (13))){
var state_43358__$1 = state_43358;
var statearr_43367_43398 = state_43358__$1;
(statearr_43367_43398[(2)] = null);

(statearr_43367_43398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (6))){
var inst_43323 = (state_43358[(8)]);
var inst_43344 = (inst_43323 > (0));
var state_43358__$1 = state_43358;
if(cljs.core.truth_(inst_43344)){
var statearr_43368_43399 = state_43358__$1;
(statearr_43368_43399[(1)] = (12));

} else {
var statearr_43369_43400 = state_43358__$1;
(statearr_43369_43400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (3))){
var inst_43356 = (state_43358[(2)]);
var state_43358__$1 = state_43358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43358__$1,inst_43356);
} else {
if((state_val_43359 === (12))){
var inst_43322 = (state_43358[(7)]);
var inst_43346 = cljs.core.vec.call(null,inst_43322);
var state_43358__$1 = state_43358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43358__$1,(15),out,inst_43346);
} else {
if((state_val_43359 === (2))){
var state_43358__$1 = state_43358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43358__$1,(4),ch);
} else {
if((state_val_43359 === (11))){
var inst_43338 = (state_43358[(2)]);
var inst_43339 = (new Array(n));
var inst_43322 = inst_43339;
var inst_43323 = (0);
var state_43358__$1 = (function (){var statearr_43370 = state_43358;
(statearr_43370[(7)] = inst_43322);

(statearr_43370[(8)] = inst_43323);

(statearr_43370[(10)] = inst_43338);

return statearr_43370;
})();
var statearr_43371_43401 = state_43358__$1;
(statearr_43371_43401[(2)] = null);

(statearr_43371_43401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (9))){
var inst_43322 = (state_43358[(7)]);
var inst_43336 = cljs.core.vec.call(null,inst_43322);
var state_43358__$1 = state_43358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43358__$1,(11),out,inst_43336);
} else {
if((state_val_43359 === (5))){
var inst_43322 = (state_43358[(7)]);
var inst_43323 = (state_43358[(8)]);
var inst_43326 = (state_43358[(9)]);
var inst_43331 = (state_43358[(11)]);
var inst_43330 = (inst_43322[inst_43323] = inst_43326);
var inst_43331__$1 = (inst_43323 + (1));
var inst_43332 = (inst_43331__$1 < n);
var state_43358__$1 = (function (){var statearr_43372 = state_43358;
(statearr_43372[(12)] = inst_43330);

(statearr_43372[(11)] = inst_43331__$1);

return statearr_43372;
})();
if(cljs.core.truth_(inst_43332)){
var statearr_43373_43402 = state_43358__$1;
(statearr_43373_43402[(1)] = (8));

} else {
var statearr_43374_43403 = state_43358__$1;
(statearr_43374_43403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (14))){
var inst_43351 = (state_43358[(2)]);
var inst_43352 = cljs.core.async.close_BANG_.call(null,out);
var state_43358__$1 = (function (){var statearr_43376 = state_43358;
(statearr_43376[(13)] = inst_43351);

return statearr_43376;
})();
var statearr_43377_43404 = state_43358__$1;
(statearr_43377_43404[(2)] = inst_43352);

(statearr_43377_43404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (10))){
var inst_43342 = (state_43358[(2)]);
var state_43358__$1 = state_43358;
var statearr_43378_43405 = state_43358__$1;
(statearr_43378_43405[(2)] = inst_43342);

(statearr_43378_43405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43359 === (8))){
var inst_43322 = (state_43358[(7)]);
var inst_43331 = (state_43358[(11)]);
var tmp43375 = inst_43322;
var inst_43322__$1 = tmp43375;
var inst_43323 = inst_43331;
var state_43358__$1 = (function (){var statearr_43379 = state_43358;
(statearr_43379[(7)] = inst_43322__$1);

(statearr_43379[(8)] = inst_43323);

return statearr_43379;
})();
var statearr_43380_43406 = state_43358__$1;
(statearr_43380_43406[(2)] = null);

(statearr_43380_43406[(1)] = (2));


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
});})(c__40680__auto___43392,out))
;
return ((function (switch__40568__auto__,c__40680__auto___43392,out){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_43384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43384[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_43384[(1)] = (1));

return statearr_43384;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_43358){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_43358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e43385){if((e43385 instanceof Object)){
var ex__40572__auto__ = e43385;
var statearr_43386_43407 = state_43358;
(statearr_43386_43407[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43408 = state_43358;
state_43358 = G__43408;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_43358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_43358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___43392,out))
})();
var state__40682__auto__ = (function (){var statearr_43387 = f__40681__auto__.call(null);
(statearr_43387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___43392);

return statearr_43387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___43392,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43409 = [];
var len__37878__auto___43483 = arguments.length;
var i__37879__auto___43484 = (0);
while(true){
if((i__37879__auto___43484 < len__37878__auto___43483)){
args43409.push((arguments[i__37879__auto___43484]));

var G__43485 = (i__37879__auto___43484 + (1));
i__37879__auto___43484 = G__43485;
continue;
} else {
}
break;
}

var G__43411 = args43409.length;
switch (G__43411) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43409.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40680__auto___43487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___43487,out){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___43487,out){
return (function (state_43453){
var state_val_43454 = (state_43453[(1)]);
if((state_val_43454 === (7))){
var inst_43449 = (state_43453[(2)]);
var state_43453__$1 = state_43453;
var statearr_43455_43488 = state_43453__$1;
(statearr_43455_43488[(2)] = inst_43449);

(statearr_43455_43488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (1))){
var inst_43412 = [];
var inst_43413 = inst_43412;
var inst_43414 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43453__$1 = (function (){var statearr_43456 = state_43453;
(statearr_43456[(7)] = inst_43413);

(statearr_43456[(8)] = inst_43414);

return statearr_43456;
})();
var statearr_43457_43489 = state_43453__$1;
(statearr_43457_43489[(2)] = null);

(statearr_43457_43489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (4))){
var inst_43417 = (state_43453[(9)]);
var inst_43417__$1 = (state_43453[(2)]);
var inst_43418 = (inst_43417__$1 == null);
var inst_43419 = cljs.core.not.call(null,inst_43418);
var state_43453__$1 = (function (){var statearr_43458 = state_43453;
(statearr_43458[(9)] = inst_43417__$1);

return statearr_43458;
})();
if(inst_43419){
var statearr_43459_43490 = state_43453__$1;
(statearr_43459_43490[(1)] = (5));

} else {
var statearr_43460_43491 = state_43453__$1;
(statearr_43460_43491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (15))){
var inst_43443 = (state_43453[(2)]);
var state_43453__$1 = state_43453;
var statearr_43461_43492 = state_43453__$1;
(statearr_43461_43492[(2)] = inst_43443);

(statearr_43461_43492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (13))){
var state_43453__$1 = state_43453;
var statearr_43462_43493 = state_43453__$1;
(statearr_43462_43493[(2)] = null);

(statearr_43462_43493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (6))){
var inst_43413 = (state_43453[(7)]);
var inst_43438 = inst_43413.length;
var inst_43439 = (inst_43438 > (0));
var state_43453__$1 = state_43453;
if(cljs.core.truth_(inst_43439)){
var statearr_43463_43494 = state_43453__$1;
(statearr_43463_43494[(1)] = (12));

} else {
var statearr_43464_43495 = state_43453__$1;
(statearr_43464_43495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (3))){
var inst_43451 = (state_43453[(2)]);
var state_43453__$1 = state_43453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43453__$1,inst_43451);
} else {
if((state_val_43454 === (12))){
var inst_43413 = (state_43453[(7)]);
var inst_43441 = cljs.core.vec.call(null,inst_43413);
var state_43453__$1 = state_43453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43453__$1,(15),out,inst_43441);
} else {
if((state_val_43454 === (2))){
var state_43453__$1 = state_43453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43453__$1,(4),ch);
} else {
if((state_val_43454 === (11))){
var inst_43421 = (state_43453[(10)]);
var inst_43417 = (state_43453[(9)]);
var inst_43431 = (state_43453[(2)]);
var inst_43432 = [];
var inst_43433 = inst_43432.push(inst_43417);
var inst_43413 = inst_43432;
var inst_43414 = inst_43421;
var state_43453__$1 = (function (){var statearr_43465 = state_43453;
(statearr_43465[(11)] = inst_43431);

(statearr_43465[(7)] = inst_43413);

(statearr_43465[(12)] = inst_43433);

(statearr_43465[(8)] = inst_43414);

return statearr_43465;
})();
var statearr_43466_43496 = state_43453__$1;
(statearr_43466_43496[(2)] = null);

(statearr_43466_43496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (9))){
var inst_43413 = (state_43453[(7)]);
var inst_43429 = cljs.core.vec.call(null,inst_43413);
var state_43453__$1 = state_43453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43453__$1,(11),out,inst_43429);
} else {
if((state_val_43454 === (5))){
var inst_43414 = (state_43453[(8)]);
var inst_43421 = (state_43453[(10)]);
var inst_43417 = (state_43453[(9)]);
var inst_43421__$1 = f.call(null,inst_43417);
var inst_43422 = cljs.core._EQ_.call(null,inst_43421__$1,inst_43414);
var inst_43423 = cljs.core.keyword_identical_QMARK_.call(null,inst_43414,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43424 = (inst_43422) || (inst_43423);
var state_43453__$1 = (function (){var statearr_43467 = state_43453;
(statearr_43467[(10)] = inst_43421__$1);

return statearr_43467;
})();
if(cljs.core.truth_(inst_43424)){
var statearr_43468_43497 = state_43453__$1;
(statearr_43468_43497[(1)] = (8));

} else {
var statearr_43469_43498 = state_43453__$1;
(statearr_43469_43498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (14))){
var inst_43446 = (state_43453[(2)]);
var inst_43447 = cljs.core.async.close_BANG_.call(null,out);
var state_43453__$1 = (function (){var statearr_43471 = state_43453;
(statearr_43471[(13)] = inst_43446);

return statearr_43471;
})();
var statearr_43472_43499 = state_43453__$1;
(statearr_43472_43499[(2)] = inst_43447);

(statearr_43472_43499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (10))){
var inst_43436 = (state_43453[(2)]);
var state_43453__$1 = state_43453;
var statearr_43473_43500 = state_43453__$1;
(statearr_43473_43500[(2)] = inst_43436);

(statearr_43473_43500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43454 === (8))){
var inst_43413 = (state_43453[(7)]);
var inst_43421 = (state_43453[(10)]);
var inst_43417 = (state_43453[(9)]);
var inst_43426 = inst_43413.push(inst_43417);
var tmp43470 = inst_43413;
var inst_43413__$1 = tmp43470;
var inst_43414 = inst_43421;
var state_43453__$1 = (function (){var statearr_43474 = state_43453;
(statearr_43474[(7)] = inst_43413__$1);

(statearr_43474[(14)] = inst_43426);

(statearr_43474[(8)] = inst_43414);

return statearr_43474;
})();
var statearr_43475_43501 = state_43453__$1;
(statearr_43475_43501[(2)] = null);

(statearr_43475_43501[(1)] = (2));


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
});})(c__40680__auto___43487,out))
;
return ((function (switch__40568__auto__,c__40680__auto___43487,out){
return (function() {
var cljs$core$async$state_machine__40569__auto__ = null;
var cljs$core$async$state_machine__40569__auto____0 = (function (){
var statearr_43479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43479[(0)] = cljs$core$async$state_machine__40569__auto__);

(statearr_43479[(1)] = (1));

return statearr_43479;
});
var cljs$core$async$state_machine__40569__auto____1 = (function (state_43453){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_43453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e43480){if((e43480 instanceof Object)){
var ex__40572__auto__ = e43480;
var statearr_43481_43502 = state_43453;
(statearr_43481_43502[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43503 = state_43453;
state_43453 = G__43503;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
cljs$core$async$state_machine__40569__auto__ = function(state_43453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40569__auto____1.call(this,state_43453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40569__auto____0;
cljs$core$async$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40569__auto____1;
return cljs$core$async$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___43487,out))
})();
var state__40682__auto__ = (function (){var statearr_43482 = f__40681__auto__.call(null);
(statearr_43482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___43487);

return statearr_43482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___43487,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map