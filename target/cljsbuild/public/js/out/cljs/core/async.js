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
var args40776 = [];
var len__37879__auto___40782 = arguments.length;
var i__37880__auto___40783 = (0);
while(true){
if((i__37880__auto___40783 < len__37879__auto___40782)){
args40776.push((arguments[i__37880__auto___40783]));

var G__40784 = (i__37880__auto___40783 + (1));
i__37880__auto___40783 = G__40784;
continue;
} else {
}
break;
}

var G__40778 = args40776.length;
switch (G__40778) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40776.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40779 = (function (f,blockable,meta40780){
this.f = f;
this.blockable = blockable;
this.meta40780 = meta40780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40781,meta40780__$1){
var self__ = this;
var _40781__$1 = this;
return (new cljs.core.async.t_cljs$core$async40779(self__.f,self__.blockable,meta40780__$1));
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
return true;
});

cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40780","meta40780",-1724266611,null)], null);
});

cljs.core.async.t_cljs$core$async40779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40779";

cljs.core.async.t_cljs$core$async40779.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async40779");
});

cljs.core.async.__GT_t_cljs$core$async40779 = (function cljs$core$async$__GT_t_cljs$core$async40779(f__$1,blockable__$1,meta40780){
return (new cljs.core.async.t_cljs$core$async40779(f__$1,blockable__$1,meta40780));
});

}

return (new cljs.core.async.t_cljs$core$async40779(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40788 = [];
var len__37879__auto___40791 = arguments.length;
var i__37880__auto___40792 = (0);
while(true){
if((i__37880__auto___40792 < len__37879__auto___40791)){
args40788.push((arguments[i__37880__auto___40792]));

var G__40793 = (i__37880__auto___40792 + (1));
i__37880__auto___40792 = G__40793;
continue;
} else {
}
break;
}

var G__40790 = args40788.length;
switch (G__40790) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40788.length)].join('')));

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
var args40795 = [];
var len__37879__auto___40798 = arguments.length;
var i__37880__auto___40799 = (0);
while(true){
if((i__37880__auto___40799 < len__37879__auto___40798)){
args40795.push((arguments[i__37880__auto___40799]));

var G__40800 = (i__37880__auto___40799 + (1));
i__37880__auto___40799 = G__40800;
continue;
} else {
}
break;
}

var G__40797 = args40795.length;
switch (G__40797) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40795.length)].join('')));

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
var args40802 = [];
var len__37879__auto___40805 = arguments.length;
var i__37880__auto___40806 = (0);
while(true){
if((i__37880__auto___40806 < len__37879__auto___40805)){
args40802.push((arguments[i__37880__auto___40806]));

var G__40807 = (i__37880__auto___40806 + (1));
i__37880__auto___40806 = G__40807;
continue;
} else {
}
break;
}

var G__40804 = args40802.length;
switch (G__40804) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40802.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40809 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40809);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40809,ret){
return (function (){
return fn1.call(null,val_40809);
});})(val_40809,ret))
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
var args40810 = [];
var len__37879__auto___40813 = arguments.length;
var i__37880__auto___40814 = (0);
while(true){
if((i__37880__auto___40814 < len__37879__auto___40813)){
args40810.push((arguments[i__37880__auto___40814]));

var G__40815 = (i__37880__auto___40814 + (1));
i__37880__auto___40814 = G__40815;
continue;
} else {
}
break;
}

var G__40812 = args40810.length;
switch (G__40812) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40810.length)].join('')));

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
var n__37719__auto___40817 = n;
var x_40818 = (0);
while(true){
if((x_40818 < n__37719__auto___40817)){
(a[x_40818] = (0));

var G__40819 = (x_40818 + (1));
x_40818 = G__40819;
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

var G__40820 = (i + (1));
i = G__40820;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40824 = (function (alt_flag,flag,meta40825){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40825 = meta40825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40826,meta40825__$1){
var self__ = this;
var _40826__$1 = this;
return (new cljs.core.async.t_cljs$core$async40824(self__.alt_flag,self__.flag,meta40825__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40826){
var self__ = this;
var _40826__$1 = this;
return self__.meta40825;
});})(flag))
;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40824.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40825","meta40825",1291025425,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40824";

cljs.core.async.t_cljs$core$async40824.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async40824");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40824 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40824(alt_flag__$1,flag__$1,meta40825){
return (new cljs.core.async.t_cljs$core$async40824(alt_flag__$1,flag__$1,meta40825));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40824(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40830 = (function (alt_handler,flag,cb,meta40831){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40831 = meta40831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40832,meta40831__$1){
var self__ = this;
var _40832__$1 = this;
return (new cljs.core.async.t_cljs$core$async40830(self__.alt_handler,self__.flag,self__.cb,meta40831__$1));
});

cljs.core.async.t_cljs$core$async40830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40832){
var self__ = this;
var _40832__$1 = this;
return self__.meta40831;
});

cljs.core.async.t_cljs$core$async40830.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40831","meta40831",-1871935728,null)], null);
});

cljs.core.async.t_cljs$core$async40830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40830";

cljs.core.async.t_cljs$core$async40830.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async40830");
});

cljs.core.async.__GT_t_cljs$core$async40830 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40830(alt_handler__$1,flag__$1,cb__$1,meta40831){
return (new cljs.core.async.t_cljs$core$async40830(alt_handler__$1,flag__$1,cb__$1,meta40831));
});

}

return (new cljs.core.async.t_cljs$core$async40830(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40833_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40833_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40834_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40834_SHARP_,port], null));
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
var G__40835 = (i + (1));
i = G__40835;
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
var len__37879__auto___40841 = arguments.length;
var i__37880__auto___40842 = (0);
while(true){
if((i__37880__auto___40842 < len__37879__auto___40841)){
args__37886__auto__.push((arguments[i__37880__auto___40842]));

var G__40843 = (i__37880__auto___40842 + (1));
i__37880__auto___40842 = G__40843;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40838){
var map__40839 = p__40838;
var map__40839__$1 = ((((!((map__40839 == null)))?((((map__40839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40839):map__40839);
var opts = map__40839__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40836){
var G__40837 = cljs.core.first.call(null,seq40836);
var seq40836__$1 = cljs.core.next.call(null,seq40836);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40837,seq40836__$1);
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
var args40844 = [];
var len__37879__auto___40894 = arguments.length;
var i__37880__auto___40895 = (0);
while(true){
if((i__37880__auto___40895 < len__37879__auto___40894)){
args40844.push((arguments[i__37880__auto___40895]));

var G__40896 = (i__37880__auto___40895 + (1));
i__37880__auto___40895 = G__40896;
continue;
} else {
}
break;
}

var G__40846 = args40844.length;
switch (G__40846) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40844.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40731__auto___40898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___40898){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___40898){
return (function (state_40870){
var state_val_40871 = (state_40870[(1)]);
if((state_val_40871 === (7))){
var inst_40866 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
var statearr_40872_40899 = state_40870__$1;
(statearr_40872_40899[(2)] = inst_40866);

(statearr_40872_40899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (1))){
var state_40870__$1 = state_40870;
var statearr_40873_40900 = state_40870__$1;
(statearr_40873_40900[(2)] = null);

(statearr_40873_40900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (4))){
var inst_40849 = (state_40870[(7)]);
var inst_40849__$1 = (state_40870[(2)]);
var inst_40850 = (inst_40849__$1 == null);
var state_40870__$1 = (function (){var statearr_40874 = state_40870;
(statearr_40874[(7)] = inst_40849__$1);

return statearr_40874;
})();
if(cljs.core.truth_(inst_40850)){
var statearr_40875_40901 = state_40870__$1;
(statearr_40875_40901[(1)] = (5));

} else {
var statearr_40876_40902 = state_40870__$1;
(statearr_40876_40902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (13))){
var state_40870__$1 = state_40870;
var statearr_40877_40903 = state_40870__$1;
(statearr_40877_40903[(2)] = null);

(statearr_40877_40903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (6))){
var inst_40849 = (state_40870[(7)]);
var state_40870__$1 = state_40870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40870__$1,(11),to,inst_40849);
} else {
if((state_val_40871 === (3))){
var inst_40868 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40870__$1,inst_40868);
} else {
if((state_val_40871 === (12))){
var state_40870__$1 = state_40870;
var statearr_40878_40904 = state_40870__$1;
(statearr_40878_40904[(2)] = null);

(statearr_40878_40904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (2))){
var state_40870__$1 = state_40870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40870__$1,(4),from);
} else {
if((state_val_40871 === (11))){
var inst_40859 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
if(cljs.core.truth_(inst_40859)){
var statearr_40879_40905 = state_40870__$1;
(statearr_40879_40905[(1)] = (12));

} else {
var statearr_40880_40906 = state_40870__$1;
(statearr_40880_40906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (9))){
var state_40870__$1 = state_40870;
var statearr_40881_40907 = state_40870__$1;
(statearr_40881_40907[(2)] = null);

(statearr_40881_40907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (5))){
var state_40870__$1 = state_40870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40882_40908 = state_40870__$1;
(statearr_40882_40908[(1)] = (8));

} else {
var statearr_40883_40909 = state_40870__$1;
(statearr_40883_40909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (14))){
var inst_40864 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
var statearr_40884_40910 = state_40870__$1;
(statearr_40884_40910[(2)] = inst_40864);

(statearr_40884_40910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (10))){
var inst_40856 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
var statearr_40885_40911 = state_40870__$1;
(statearr_40885_40911[(2)] = inst_40856);

(statearr_40885_40911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (8))){
var inst_40853 = cljs.core.async.close_BANG_.call(null,to);
var state_40870__$1 = state_40870;
var statearr_40886_40912 = state_40870__$1;
(statearr_40886_40912[(2)] = inst_40853);

(statearr_40886_40912[(1)] = (10));


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
});})(c__40731__auto___40898))
;
return ((function (switch__40619__auto__,c__40731__auto___40898){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_40890 = [null,null,null,null,null,null,null,null];
(statearr_40890[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_40890[(1)] = (1));

return statearr_40890;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_40870){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_40870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e40891){if((e40891 instanceof Object)){
var ex__40623__auto__ = e40891;
var statearr_40892_40913 = state_40870;
(statearr_40892_40913[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40914 = state_40870;
state_40870 = G__40914;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_40870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_40870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___40898))
})();
var state__40733__auto__ = (function (){var statearr_40893 = f__40732__auto__.call(null);
(statearr_40893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___40898);

return statearr_40893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___40898))
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
return (function (p__41102){
var vec__41103 = p__41102;
var v = cljs.core.nth.call(null,vec__41103,(0),null);
var p = cljs.core.nth.call(null,vec__41103,(1),null);
var job = vec__41103;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40731__auto___41289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___41289,res,vec__41103,v,p,job,jobs,results){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___41289,res,vec__41103,v,p,job,jobs,results){
return (function (state_41110){
var state_val_41111 = (state_41110[(1)]);
if((state_val_41111 === (1))){
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41110__$1,(2),res,v);
} else {
if((state_val_41111 === (2))){
var inst_41107 = (state_41110[(2)]);
var inst_41108 = cljs.core.async.close_BANG_.call(null,res);
var state_41110__$1 = (function (){var statearr_41112 = state_41110;
(statearr_41112[(7)] = inst_41107);

return statearr_41112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41110__$1,inst_41108);
} else {
return null;
}
}
});})(c__40731__auto___41289,res,vec__41103,v,p,job,jobs,results))
;
return ((function (switch__40619__auto__,c__40731__auto___41289,res,vec__41103,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0 = (function (){
var statearr_41116 = [null,null,null,null,null,null,null,null];
(statearr_41116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__);

(statearr_41116[(1)] = (1));

return statearr_41116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1 = (function (state_41110){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41117){if((e41117 instanceof Object)){
var ex__40623__auto__ = e41117;
var statearr_41118_41290 = state_41110;
(statearr_41118_41290[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41291 = state_41110;
state_41110 = G__41291;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = function(state_41110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1.call(this,state_41110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___41289,res,vec__41103,v,p,job,jobs,results))
})();
var state__40733__auto__ = (function (){var statearr_41119 = f__40732__auto__.call(null);
(statearr_41119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___41289);

return statearr_41119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___41289,res,vec__41103,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41120){
var vec__41121 = p__41120;
var v = cljs.core.nth.call(null,vec__41121,(0),null);
var p = cljs.core.nth.call(null,vec__41121,(1),null);
var job = vec__41121;
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
var n__37719__auto___41292 = n;
var __41293 = (0);
while(true){
if((__41293 < n__37719__auto___41292)){
var G__41124_41294 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41124_41294) {
case "compute":
var c__40731__auto___41296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41293,c__40731__auto___41296,G__41124_41294,n__37719__auto___41292,jobs,results,process,async){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (__41293,c__40731__auto___41296,G__41124_41294,n__37719__auto___41292,jobs,results,process,async){
return (function (state_41137){
var state_val_41138 = (state_41137[(1)]);
if((state_val_41138 === (1))){
var state_41137__$1 = state_41137;
var statearr_41139_41297 = state_41137__$1;
(statearr_41139_41297[(2)] = null);

(statearr_41139_41297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41138 === (2))){
var state_41137__$1 = state_41137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41137__$1,(4),jobs);
} else {
if((state_val_41138 === (3))){
var inst_41135 = (state_41137[(2)]);
var state_41137__$1 = state_41137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41137__$1,inst_41135);
} else {
if((state_val_41138 === (4))){
var inst_41127 = (state_41137[(2)]);
var inst_41128 = process.call(null,inst_41127);
var state_41137__$1 = state_41137;
if(cljs.core.truth_(inst_41128)){
var statearr_41140_41298 = state_41137__$1;
(statearr_41140_41298[(1)] = (5));

} else {
var statearr_41141_41299 = state_41137__$1;
(statearr_41141_41299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41138 === (5))){
var state_41137__$1 = state_41137;
var statearr_41142_41300 = state_41137__$1;
(statearr_41142_41300[(2)] = null);

(statearr_41142_41300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41138 === (6))){
var state_41137__$1 = state_41137;
var statearr_41143_41301 = state_41137__$1;
(statearr_41143_41301[(2)] = null);

(statearr_41143_41301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41138 === (7))){
var inst_41133 = (state_41137[(2)]);
var state_41137__$1 = state_41137;
var statearr_41144_41302 = state_41137__$1;
(statearr_41144_41302[(2)] = inst_41133);

(statearr_41144_41302[(1)] = (3));


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
});})(__41293,c__40731__auto___41296,G__41124_41294,n__37719__auto___41292,jobs,results,process,async))
;
return ((function (__41293,switch__40619__auto__,c__40731__auto___41296,G__41124_41294,n__37719__auto___41292,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0 = (function (){
var statearr_41148 = [null,null,null,null,null,null,null];
(statearr_41148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__);

(statearr_41148[(1)] = (1));

return statearr_41148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1 = (function (state_41137){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41149){if((e41149 instanceof Object)){
var ex__40623__auto__ = e41149;
var statearr_41150_41303 = state_41137;
(statearr_41150_41303[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41304 = state_41137;
state_41137 = G__41304;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = function(state_41137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1.call(this,state_41137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__;
})()
;})(__41293,switch__40619__auto__,c__40731__auto___41296,G__41124_41294,n__37719__auto___41292,jobs,results,process,async))
})();
var state__40733__auto__ = (function (){var statearr_41151 = f__40732__auto__.call(null);
(statearr_41151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___41296);

return statearr_41151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(__41293,c__40731__auto___41296,G__41124_41294,n__37719__auto___41292,jobs,results,process,async))
);


break;
case "async":
var c__40731__auto___41305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41293,c__40731__auto___41305,G__41124_41294,n__37719__auto___41292,jobs,results,process,async){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (__41293,c__40731__auto___41305,G__41124_41294,n__37719__auto___41292,jobs,results,process,async){
return (function (state_41164){
var state_val_41165 = (state_41164[(1)]);
if((state_val_41165 === (1))){
var state_41164__$1 = state_41164;
var statearr_41166_41306 = state_41164__$1;
(statearr_41166_41306[(2)] = null);

(statearr_41166_41306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41165 === (2))){
var state_41164__$1 = state_41164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41164__$1,(4),jobs);
} else {
if((state_val_41165 === (3))){
var inst_41162 = (state_41164[(2)]);
var state_41164__$1 = state_41164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41164__$1,inst_41162);
} else {
if((state_val_41165 === (4))){
var inst_41154 = (state_41164[(2)]);
var inst_41155 = async.call(null,inst_41154);
var state_41164__$1 = state_41164;
if(cljs.core.truth_(inst_41155)){
var statearr_41167_41307 = state_41164__$1;
(statearr_41167_41307[(1)] = (5));

} else {
var statearr_41168_41308 = state_41164__$1;
(statearr_41168_41308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41165 === (5))){
var state_41164__$1 = state_41164;
var statearr_41169_41309 = state_41164__$1;
(statearr_41169_41309[(2)] = null);

(statearr_41169_41309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41165 === (6))){
var state_41164__$1 = state_41164;
var statearr_41170_41310 = state_41164__$1;
(statearr_41170_41310[(2)] = null);

(statearr_41170_41310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41165 === (7))){
var inst_41160 = (state_41164[(2)]);
var state_41164__$1 = state_41164;
var statearr_41171_41311 = state_41164__$1;
(statearr_41171_41311[(2)] = inst_41160);

(statearr_41171_41311[(1)] = (3));


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
});})(__41293,c__40731__auto___41305,G__41124_41294,n__37719__auto___41292,jobs,results,process,async))
;
return ((function (__41293,switch__40619__auto__,c__40731__auto___41305,G__41124_41294,n__37719__auto___41292,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0 = (function (){
var statearr_41175 = [null,null,null,null,null,null,null];
(statearr_41175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__);

(statearr_41175[(1)] = (1));

return statearr_41175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1 = (function (state_41164){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41176){if((e41176 instanceof Object)){
var ex__40623__auto__ = e41176;
var statearr_41177_41312 = state_41164;
(statearr_41177_41312[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41313 = state_41164;
state_41164 = G__41313;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = function(state_41164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1.call(this,state_41164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__;
})()
;})(__41293,switch__40619__auto__,c__40731__auto___41305,G__41124_41294,n__37719__auto___41292,jobs,results,process,async))
})();
var state__40733__auto__ = (function (){var statearr_41178 = f__40732__auto__.call(null);
(statearr_41178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___41305);

return statearr_41178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(__41293,c__40731__auto___41305,G__41124_41294,n__37719__auto___41292,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41314 = (__41293 + (1));
__41293 = G__41314;
continue;
} else {
}
break;
}

var c__40731__auto___41315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___41315,jobs,results,process,async){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___41315,jobs,results,process,async){
return (function (state_41200){
var state_val_41201 = (state_41200[(1)]);
if((state_val_41201 === (1))){
var state_41200__$1 = state_41200;
var statearr_41202_41316 = state_41200__$1;
(statearr_41202_41316[(2)] = null);

(statearr_41202_41316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41201 === (2))){
var state_41200__$1 = state_41200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41200__$1,(4),from);
} else {
if((state_val_41201 === (3))){
var inst_41198 = (state_41200[(2)]);
var state_41200__$1 = state_41200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41200__$1,inst_41198);
} else {
if((state_val_41201 === (4))){
var inst_41181 = (state_41200[(7)]);
var inst_41181__$1 = (state_41200[(2)]);
var inst_41182 = (inst_41181__$1 == null);
var state_41200__$1 = (function (){var statearr_41203 = state_41200;
(statearr_41203[(7)] = inst_41181__$1);

return statearr_41203;
})();
if(cljs.core.truth_(inst_41182)){
var statearr_41204_41317 = state_41200__$1;
(statearr_41204_41317[(1)] = (5));

} else {
var statearr_41205_41318 = state_41200__$1;
(statearr_41205_41318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41201 === (5))){
var inst_41184 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41200__$1 = state_41200;
var statearr_41206_41319 = state_41200__$1;
(statearr_41206_41319[(2)] = inst_41184);

(statearr_41206_41319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41201 === (6))){
var inst_41186 = (state_41200[(8)]);
var inst_41181 = (state_41200[(7)]);
var inst_41186__$1 = cljs.core.async.chan.call(null,(1));
var inst_41187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41188 = [inst_41181,inst_41186__$1];
var inst_41189 = (new cljs.core.PersistentVector(null,2,(5),inst_41187,inst_41188,null));
var state_41200__$1 = (function (){var statearr_41207 = state_41200;
(statearr_41207[(8)] = inst_41186__$1);

return statearr_41207;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41200__$1,(8),jobs,inst_41189);
} else {
if((state_val_41201 === (7))){
var inst_41196 = (state_41200[(2)]);
var state_41200__$1 = state_41200;
var statearr_41208_41320 = state_41200__$1;
(statearr_41208_41320[(2)] = inst_41196);

(statearr_41208_41320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41201 === (8))){
var inst_41186 = (state_41200[(8)]);
var inst_41191 = (state_41200[(2)]);
var state_41200__$1 = (function (){var statearr_41209 = state_41200;
(statearr_41209[(9)] = inst_41191);

return statearr_41209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41200__$1,(9),results,inst_41186);
} else {
if((state_val_41201 === (9))){
var inst_41193 = (state_41200[(2)]);
var state_41200__$1 = (function (){var statearr_41210 = state_41200;
(statearr_41210[(10)] = inst_41193);

return statearr_41210;
})();
var statearr_41211_41321 = state_41200__$1;
(statearr_41211_41321[(2)] = null);

(statearr_41211_41321[(1)] = (2));


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
});})(c__40731__auto___41315,jobs,results,process,async))
;
return ((function (switch__40619__auto__,c__40731__auto___41315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0 = (function (){
var statearr_41215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__);

(statearr_41215[(1)] = (1));

return statearr_41215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1 = (function (state_41200){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41216){if((e41216 instanceof Object)){
var ex__40623__auto__ = e41216;
var statearr_41217_41322 = state_41200;
(statearr_41217_41322[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41323 = state_41200;
state_41200 = G__41323;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = function(state_41200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1.call(this,state_41200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___41315,jobs,results,process,async))
})();
var state__40733__auto__ = (function (){var statearr_41218 = f__40732__auto__.call(null);
(statearr_41218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___41315);

return statearr_41218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___41315,jobs,results,process,async))
);


var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,jobs,results,process,async){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,jobs,results,process,async){
return (function (state_41256){
var state_val_41257 = (state_41256[(1)]);
if((state_val_41257 === (7))){
var inst_41252 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
var statearr_41258_41324 = state_41256__$1;
(statearr_41258_41324[(2)] = inst_41252);

(statearr_41258_41324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (20))){
var state_41256__$1 = state_41256;
var statearr_41259_41325 = state_41256__$1;
(statearr_41259_41325[(2)] = null);

(statearr_41259_41325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (1))){
var state_41256__$1 = state_41256;
var statearr_41260_41326 = state_41256__$1;
(statearr_41260_41326[(2)] = null);

(statearr_41260_41326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (4))){
var inst_41221 = (state_41256[(7)]);
var inst_41221__$1 = (state_41256[(2)]);
var inst_41222 = (inst_41221__$1 == null);
var state_41256__$1 = (function (){var statearr_41261 = state_41256;
(statearr_41261[(7)] = inst_41221__$1);

return statearr_41261;
})();
if(cljs.core.truth_(inst_41222)){
var statearr_41262_41327 = state_41256__$1;
(statearr_41262_41327[(1)] = (5));

} else {
var statearr_41263_41328 = state_41256__$1;
(statearr_41263_41328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (15))){
var inst_41234 = (state_41256[(8)]);
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41256__$1,(18),to,inst_41234);
} else {
if((state_val_41257 === (21))){
var inst_41247 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
var statearr_41264_41329 = state_41256__$1;
(statearr_41264_41329[(2)] = inst_41247);

(statearr_41264_41329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (13))){
var inst_41249 = (state_41256[(2)]);
var state_41256__$1 = (function (){var statearr_41265 = state_41256;
(statearr_41265[(9)] = inst_41249);

return statearr_41265;
})();
var statearr_41266_41330 = state_41256__$1;
(statearr_41266_41330[(2)] = null);

(statearr_41266_41330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (6))){
var inst_41221 = (state_41256[(7)]);
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41256__$1,(11),inst_41221);
} else {
if((state_val_41257 === (17))){
var inst_41242 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
if(cljs.core.truth_(inst_41242)){
var statearr_41267_41331 = state_41256__$1;
(statearr_41267_41331[(1)] = (19));

} else {
var statearr_41268_41332 = state_41256__$1;
(statearr_41268_41332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (3))){
var inst_41254 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41256__$1,inst_41254);
} else {
if((state_val_41257 === (12))){
var inst_41231 = (state_41256[(10)]);
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41256__$1,(14),inst_41231);
} else {
if((state_val_41257 === (2))){
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41256__$1,(4),results);
} else {
if((state_val_41257 === (19))){
var state_41256__$1 = state_41256;
var statearr_41269_41333 = state_41256__$1;
(statearr_41269_41333[(2)] = null);

(statearr_41269_41333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (11))){
var inst_41231 = (state_41256[(2)]);
var state_41256__$1 = (function (){var statearr_41270 = state_41256;
(statearr_41270[(10)] = inst_41231);

return statearr_41270;
})();
var statearr_41271_41334 = state_41256__$1;
(statearr_41271_41334[(2)] = null);

(statearr_41271_41334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (9))){
var state_41256__$1 = state_41256;
var statearr_41272_41335 = state_41256__$1;
(statearr_41272_41335[(2)] = null);

(statearr_41272_41335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (5))){
var state_41256__$1 = state_41256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41273_41336 = state_41256__$1;
(statearr_41273_41336[(1)] = (8));

} else {
var statearr_41274_41337 = state_41256__$1;
(statearr_41274_41337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (14))){
var inst_41236 = (state_41256[(11)]);
var inst_41234 = (state_41256[(8)]);
var inst_41234__$1 = (state_41256[(2)]);
var inst_41235 = (inst_41234__$1 == null);
var inst_41236__$1 = cljs.core.not.call(null,inst_41235);
var state_41256__$1 = (function (){var statearr_41275 = state_41256;
(statearr_41275[(11)] = inst_41236__$1);

(statearr_41275[(8)] = inst_41234__$1);

return statearr_41275;
})();
if(inst_41236__$1){
var statearr_41276_41338 = state_41256__$1;
(statearr_41276_41338[(1)] = (15));

} else {
var statearr_41277_41339 = state_41256__$1;
(statearr_41277_41339[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (16))){
var inst_41236 = (state_41256[(11)]);
var state_41256__$1 = state_41256;
var statearr_41278_41340 = state_41256__$1;
(statearr_41278_41340[(2)] = inst_41236);

(statearr_41278_41340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (10))){
var inst_41228 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
var statearr_41279_41341 = state_41256__$1;
(statearr_41279_41341[(2)] = inst_41228);

(statearr_41279_41341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (18))){
var inst_41239 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
var statearr_41280_41342 = state_41256__$1;
(statearr_41280_41342[(2)] = inst_41239);

(statearr_41280_41342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (8))){
var inst_41225 = cljs.core.async.close_BANG_.call(null,to);
var state_41256__$1 = state_41256;
var statearr_41281_41343 = state_41256__$1;
(statearr_41281_41343[(2)] = inst_41225);

(statearr_41281_41343[(1)] = (10));


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
});})(c__40731__auto__,jobs,results,process,async))
;
return ((function (switch__40619__auto__,c__40731__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0 = (function (){
var statearr_41285 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__);

(statearr_41285[(1)] = (1));

return statearr_41285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1 = (function (state_41256){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41286){if((e41286 instanceof Object)){
var ex__40623__auto__ = e41286;
var statearr_41287_41344 = state_41256;
(statearr_41287_41344[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41345 = state_41256;
state_41256 = G__41345;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__ = function(state_41256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1.call(this,state_41256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,jobs,results,process,async))
})();
var state__40733__auto__ = (function (){var statearr_41288 = f__40732__auto__.call(null);
(statearr_41288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_41288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,jobs,results,process,async))
);

return c__40731__auto__;
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
var args41346 = [];
var len__37879__auto___41349 = arguments.length;
var i__37880__auto___41350 = (0);
while(true){
if((i__37880__auto___41350 < len__37879__auto___41349)){
args41346.push((arguments[i__37880__auto___41350]));

var G__41351 = (i__37880__auto___41350 + (1));
i__37880__auto___41350 = G__41351;
continue;
} else {
}
break;
}

var G__41348 = args41346.length;
switch (G__41348) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41346.length)].join('')));

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
var args41353 = [];
var len__37879__auto___41356 = arguments.length;
var i__37880__auto___41357 = (0);
while(true){
if((i__37880__auto___41357 < len__37879__auto___41356)){
args41353.push((arguments[i__37880__auto___41357]));

var G__41358 = (i__37880__auto___41357 + (1));
i__37880__auto___41357 = G__41358;
continue;
} else {
}
break;
}

var G__41355 = args41353.length;
switch (G__41355) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41353.length)].join('')));

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
var args41360 = [];
var len__37879__auto___41413 = arguments.length;
var i__37880__auto___41414 = (0);
while(true){
if((i__37880__auto___41414 < len__37879__auto___41413)){
args41360.push((arguments[i__37880__auto___41414]));

var G__41415 = (i__37880__auto___41414 + (1));
i__37880__auto___41414 = G__41415;
continue;
} else {
}
break;
}

var G__41362 = args41360.length;
switch (G__41362) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41360.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40731__auto___41417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___41417,tc,fc){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___41417,tc,fc){
return (function (state_41388){
var state_val_41389 = (state_41388[(1)]);
if((state_val_41389 === (7))){
var inst_41384 = (state_41388[(2)]);
var state_41388__$1 = state_41388;
var statearr_41390_41418 = state_41388__$1;
(statearr_41390_41418[(2)] = inst_41384);

(statearr_41390_41418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (1))){
var state_41388__$1 = state_41388;
var statearr_41391_41419 = state_41388__$1;
(statearr_41391_41419[(2)] = null);

(statearr_41391_41419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (4))){
var inst_41365 = (state_41388[(7)]);
var inst_41365__$1 = (state_41388[(2)]);
var inst_41366 = (inst_41365__$1 == null);
var state_41388__$1 = (function (){var statearr_41392 = state_41388;
(statearr_41392[(7)] = inst_41365__$1);

return statearr_41392;
})();
if(cljs.core.truth_(inst_41366)){
var statearr_41393_41420 = state_41388__$1;
(statearr_41393_41420[(1)] = (5));

} else {
var statearr_41394_41421 = state_41388__$1;
(statearr_41394_41421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (13))){
var state_41388__$1 = state_41388;
var statearr_41395_41422 = state_41388__$1;
(statearr_41395_41422[(2)] = null);

(statearr_41395_41422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (6))){
var inst_41365 = (state_41388[(7)]);
var inst_41371 = p.call(null,inst_41365);
var state_41388__$1 = state_41388;
if(cljs.core.truth_(inst_41371)){
var statearr_41396_41423 = state_41388__$1;
(statearr_41396_41423[(1)] = (9));

} else {
var statearr_41397_41424 = state_41388__$1;
(statearr_41397_41424[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (3))){
var inst_41386 = (state_41388[(2)]);
var state_41388__$1 = state_41388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41388__$1,inst_41386);
} else {
if((state_val_41389 === (12))){
var state_41388__$1 = state_41388;
var statearr_41398_41425 = state_41388__$1;
(statearr_41398_41425[(2)] = null);

(statearr_41398_41425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (2))){
var state_41388__$1 = state_41388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41388__$1,(4),ch);
} else {
if((state_val_41389 === (11))){
var inst_41365 = (state_41388[(7)]);
var inst_41375 = (state_41388[(2)]);
var state_41388__$1 = state_41388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41388__$1,(8),inst_41375,inst_41365);
} else {
if((state_val_41389 === (9))){
var state_41388__$1 = state_41388;
var statearr_41399_41426 = state_41388__$1;
(statearr_41399_41426[(2)] = tc);

(statearr_41399_41426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (5))){
var inst_41368 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41369 = cljs.core.async.close_BANG_.call(null,fc);
var state_41388__$1 = (function (){var statearr_41400 = state_41388;
(statearr_41400[(8)] = inst_41368);

return statearr_41400;
})();
var statearr_41401_41427 = state_41388__$1;
(statearr_41401_41427[(2)] = inst_41369);

(statearr_41401_41427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (14))){
var inst_41382 = (state_41388[(2)]);
var state_41388__$1 = state_41388;
var statearr_41402_41428 = state_41388__$1;
(statearr_41402_41428[(2)] = inst_41382);

(statearr_41402_41428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (10))){
var state_41388__$1 = state_41388;
var statearr_41403_41429 = state_41388__$1;
(statearr_41403_41429[(2)] = fc);

(statearr_41403_41429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (8))){
var inst_41377 = (state_41388[(2)]);
var state_41388__$1 = state_41388;
if(cljs.core.truth_(inst_41377)){
var statearr_41404_41430 = state_41388__$1;
(statearr_41404_41430[(1)] = (12));

} else {
var statearr_41405_41431 = state_41388__$1;
(statearr_41405_41431[(1)] = (13));

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
});})(c__40731__auto___41417,tc,fc))
;
return ((function (switch__40619__auto__,c__40731__auto___41417,tc,fc){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_41409 = [null,null,null,null,null,null,null,null,null];
(statearr_41409[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_41409[(1)] = (1));

return statearr_41409;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_41388){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41410){if((e41410 instanceof Object)){
var ex__40623__auto__ = e41410;
var statearr_41411_41432 = state_41388;
(statearr_41411_41432[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41433 = state_41388;
state_41388 = G__41433;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_41388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_41388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___41417,tc,fc))
})();
var state__40733__auto__ = (function (){var statearr_41412 = f__40732__auto__.call(null);
(statearr_41412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___41417);

return statearr_41412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___41417,tc,fc))
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
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__){
return (function (state_41497){
var state_val_41498 = (state_41497[(1)]);
if((state_val_41498 === (7))){
var inst_41493 = (state_41497[(2)]);
var state_41497__$1 = state_41497;
var statearr_41499_41520 = state_41497__$1;
(statearr_41499_41520[(2)] = inst_41493);

(statearr_41499_41520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41498 === (1))){
var inst_41477 = init;
var state_41497__$1 = (function (){var statearr_41500 = state_41497;
(statearr_41500[(7)] = inst_41477);

return statearr_41500;
})();
var statearr_41501_41521 = state_41497__$1;
(statearr_41501_41521[(2)] = null);

(statearr_41501_41521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41498 === (4))){
var inst_41480 = (state_41497[(8)]);
var inst_41480__$1 = (state_41497[(2)]);
var inst_41481 = (inst_41480__$1 == null);
var state_41497__$1 = (function (){var statearr_41502 = state_41497;
(statearr_41502[(8)] = inst_41480__$1);

return statearr_41502;
})();
if(cljs.core.truth_(inst_41481)){
var statearr_41503_41522 = state_41497__$1;
(statearr_41503_41522[(1)] = (5));

} else {
var statearr_41504_41523 = state_41497__$1;
(statearr_41504_41523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41498 === (6))){
var inst_41480 = (state_41497[(8)]);
var inst_41484 = (state_41497[(9)]);
var inst_41477 = (state_41497[(7)]);
var inst_41484__$1 = f.call(null,inst_41477,inst_41480);
var inst_41485 = cljs.core.reduced_QMARK_.call(null,inst_41484__$1);
var state_41497__$1 = (function (){var statearr_41505 = state_41497;
(statearr_41505[(9)] = inst_41484__$1);

return statearr_41505;
})();
if(inst_41485){
var statearr_41506_41524 = state_41497__$1;
(statearr_41506_41524[(1)] = (8));

} else {
var statearr_41507_41525 = state_41497__$1;
(statearr_41507_41525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41498 === (3))){
var inst_41495 = (state_41497[(2)]);
var state_41497__$1 = state_41497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41497__$1,inst_41495);
} else {
if((state_val_41498 === (2))){
var state_41497__$1 = state_41497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41497__$1,(4),ch);
} else {
if((state_val_41498 === (9))){
var inst_41484 = (state_41497[(9)]);
var inst_41477 = inst_41484;
var state_41497__$1 = (function (){var statearr_41508 = state_41497;
(statearr_41508[(7)] = inst_41477);

return statearr_41508;
})();
var statearr_41509_41526 = state_41497__$1;
(statearr_41509_41526[(2)] = null);

(statearr_41509_41526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41498 === (5))){
var inst_41477 = (state_41497[(7)]);
var state_41497__$1 = state_41497;
var statearr_41510_41527 = state_41497__$1;
(statearr_41510_41527[(2)] = inst_41477);

(statearr_41510_41527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41498 === (10))){
var inst_41491 = (state_41497[(2)]);
var state_41497__$1 = state_41497;
var statearr_41511_41528 = state_41497__$1;
(statearr_41511_41528[(2)] = inst_41491);

(statearr_41511_41528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41498 === (8))){
var inst_41484 = (state_41497[(9)]);
var inst_41487 = cljs.core.deref.call(null,inst_41484);
var state_41497__$1 = state_41497;
var statearr_41512_41529 = state_41497__$1;
(statearr_41512_41529[(2)] = inst_41487);

(statearr_41512_41529[(1)] = (10));


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
});})(c__40731__auto__))
;
return ((function (switch__40619__auto__,c__40731__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40620__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40620__auto____0 = (function (){
var statearr_41516 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41516[(0)] = cljs$core$async$reduce_$_state_machine__40620__auto__);

(statearr_41516[(1)] = (1));

return statearr_41516;
});
var cljs$core$async$reduce_$_state_machine__40620__auto____1 = (function (state_41497){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41517){if((e41517 instanceof Object)){
var ex__40623__auto__ = e41517;
var statearr_41518_41530 = state_41497;
(statearr_41518_41530[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41531 = state_41497;
state_41497 = G__41531;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40620__auto__ = function(state_41497){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40620__auto____1.call(this,state_41497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40620__auto____0;
cljs$core$async$reduce_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40620__auto____1;
return cljs$core$async$reduce_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__))
})();
var state__40733__auto__ = (function (){var statearr_41519 = f__40732__auto__.call(null);
(statearr_41519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_41519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__))
);

return c__40731__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,f__$1){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,f__$1){
return (function (state_41551){
var state_val_41552 = (state_41551[(1)]);
if((state_val_41552 === (1))){
var inst_41546 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41551__$1 = state_41551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41551__$1,(2),inst_41546);
} else {
if((state_val_41552 === (2))){
var inst_41548 = (state_41551[(2)]);
var inst_41549 = f__$1.call(null,inst_41548);
var state_41551__$1 = state_41551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41551__$1,inst_41549);
} else {
return null;
}
}
});})(c__40731__auto__,f__$1))
;
return ((function (switch__40619__auto__,c__40731__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40620__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40620__auto____0 = (function (){
var statearr_41556 = [null,null,null,null,null,null,null];
(statearr_41556[(0)] = cljs$core$async$transduce_$_state_machine__40620__auto__);

(statearr_41556[(1)] = (1));

return statearr_41556;
});
var cljs$core$async$transduce_$_state_machine__40620__auto____1 = (function (state_41551){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41557){if((e41557 instanceof Object)){
var ex__40623__auto__ = e41557;
var statearr_41558_41560 = state_41551;
(statearr_41558_41560[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41561 = state_41551;
state_41551 = G__41561;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40620__auto__ = function(state_41551){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40620__auto____1.call(this,state_41551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40620__auto____0;
cljs$core$async$transduce_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40620__auto____1;
return cljs$core$async$transduce_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,f__$1))
})();
var state__40733__auto__ = (function (){var statearr_41559 = f__40732__auto__.call(null);
(statearr_41559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_41559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,f__$1))
);

return c__40731__auto__;
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
var args41562 = [];
var len__37879__auto___41614 = arguments.length;
var i__37880__auto___41615 = (0);
while(true){
if((i__37880__auto___41615 < len__37879__auto___41614)){
args41562.push((arguments[i__37880__auto___41615]));

var G__41616 = (i__37880__auto___41615 + (1));
i__37880__auto___41615 = G__41616;
continue;
} else {
}
break;
}

var G__41564 = args41562.length;
switch (G__41564) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41562.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__){
return (function (state_41589){
var state_val_41590 = (state_41589[(1)]);
if((state_val_41590 === (7))){
var inst_41571 = (state_41589[(2)]);
var state_41589__$1 = state_41589;
var statearr_41591_41618 = state_41589__$1;
(statearr_41591_41618[(2)] = inst_41571);

(statearr_41591_41618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (1))){
var inst_41565 = cljs.core.seq.call(null,coll);
var inst_41566 = inst_41565;
var state_41589__$1 = (function (){var statearr_41592 = state_41589;
(statearr_41592[(7)] = inst_41566);

return statearr_41592;
})();
var statearr_41593_41619 = state_41589__$1;
(statearr_41593_41619[(2)] = null);

(statearr_41593_41619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (4))){
var inst_41566 = (state_41589[(7)]);
var inst_41569 = cljs.core.first.call(null,inst_41566);
var state_41589__$1 = state_41589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41589__$1,(7),ch,inst_41569);
} else {
if((state_val_41590 === (13))){
var inst_41583 = (state_41589[(2)]);
var state_41589__$1 = state_41589;
var statearr_41594_41620 = state_41589__$1;
(statearr_41594_41620[(2)] = inst_41583);

(statearr_41594_41620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (6))){
var inst_41574 = (state_41589[(2)]);
var state_41589__$1 = state_41589;
if(cljs.core.truth_(inst_41574)){
var statearr_41595_41621 = state_41589__$1;
(statearr_41595_41621[(1)] = (8));

} else {
var statearr_41596_41622 = state_41589__$1;
(statearr_41596_41622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (3))){
var inst_41587 = (state_41589[(2)]);
var state_41589__$1 = state_41589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41589__$1,inst_41587);
} else {
if((state_val_41590 === (12))){
var state_41589__$1 = state_41589;
var statearr_41597_41623 = state_41589__$1;
(statearr_41597_41623[(2)] = null);

(statearr_41597_41623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (2))){
var inst_41566 = (state_41589[(7)]);
var state_41589__$1 = state_41589;
if(cljs.core.truth_(inst_41566)){
var statearr_41598_41624 = state_41589__$1;
(statearr_41598_41624[(1)] = (4));

} else {
var statearr_41599_41625 = state_41589__$1;
(statearr_41599_41625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (11))){
var inst_41580 = cljs.core.async.close_BANG_.call(null,ch);
var state_41589__$1 = state_41589;
var statearr_41600_41626 = state_41589__$1;
(statearr_41600_41626[(2)] = inst_41580);

(statearr_41600_41626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (9))){
var state_41589__$1 = state_41589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41601_41627 = state_41589__$1;
(statearr_41601_41627[(1)] = (11));

} else {
var statearr_41602_41628 = state_41589__$1;
(statearr_41602_41628[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (5))){
var inst_41566 = (state_41589[(7)]);
var state_41589__$1 = state_41589;
var statearr_41603_41629 = state_41589__$1;
(statearr_41603_41629[(2)] = inst_41566);

(statearr_41603_41629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (10))){
var inst_41585 = (state_41589[(2)]);
var state_41589__$1 = state_41589;
var statearr_41604_41630 = state_41589__$1;
(statearr_41604_41630[(2)] = inst_41585);

(statearr_41604_41630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41590 === (8))){
var inst_41566 = (state_41589[(7)]);
var inst_41576 = cljs.core.next.call(null,inst_41566);
var inst_41566__$1 = inst_41576;
var state_41589__$1 = (function (){var statearr_41605 = state_41589;
(statearr_41605[(7)] = inst_41566__$1);

return statearr_41605;
})();
var statearr_41606_41631 = state_41589__$1;
(statearr_41606_41631[(2)] = null);

(statearr_41606_41631[(1)] = (2));


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
});})(c__40731__auto__))
;
return ((function (switch__40619__auto__,c__40731__auto__){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_41610 = [null,null,null,null,null,null,null,null];
(statearr_41610[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_41610[(1)] = (1));

return statearr_41610;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_41589){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e41611){if((e41611 instanceof Object)){
var ex__40623__auto__ = e41611;
var statearr_41612_41632 = state_41589;
(statearr_41612_41632[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41633 = state_41589;
state_41589 = G__41633;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_41589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_41589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__))
})();
var state__40733__auto__ = (function (){var statearr_41613 = f__40732__auto__.call(null);
(statearr_41613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_41613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__))
);

return c__40731__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async41859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41859 = (function (mult,ch,cs,meta41860){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41860 = meta41860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41861,meta41860__$1){
var self__ = this;
var _41861__$1 = this;
return (new cljs.core.async.t_cljs$core$async41859(self__.mult,self__.ch,self__.cs,meta41860__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41861){
var self__ = this;
var _41861__$1 = this;
return self__.meta41860;
});})(cs))
;

cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41859.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41859.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41860","meta41860",905466940,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41859";

cljs.core.async.t_cljs$core$async41859.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async41859");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41859 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41859(mult__$1,ch__$1,cs__$1,meta41860){
return (new cljs.core.async.t_cljs$core$async41859(mult__$1,ch__$1,cs__$1,meta41860));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41859(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40731__auto___42084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___42084,cs,m,dchan,dctr,done){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___42084,cs,m,dchan,dctr,done){
return (function (state_41996){
var state_val_41997 = (state_41996[(1)]);
if((state_val_41997 === (7))){
var inst_41992 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_41998_42085 = state_41996__$1;
(statearr_41998_42085[(2)] = inst_41992);

(statearr_41998_42085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (20))){
var inst_41895 = (state_41996[(7)]);
var inst_41907 = cljs.core.first.call(null,inst_41895);
var inst_41908 = cljs.core.nth.call(null,inst_41907,(0),null);
var inst_41909 = cljs.core.nth.call(null,inst_41907,(1),null);
var state_41996__$1 = (function (){var statearr_41999 = state_41996;
(statearr_41999[(8)] = inst_41908);

return statearr_41999;
})();
if(cljs.core.truth_(inst_41909)){
var statearr_42000_42086 = state_41996__$1;
(statearr_42000_42086[(1)] = (22));

} else {
var statearr_42001_42087 = state_41996__$1;
(statearr_42001_42087[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (27))){
var inst_41864 = (state_41996[(9)]);
var inst_41937 = (state_41996[(10)]);
var inst_41939 = (state_41996[(11)]);
var inst_41944 = (state_41996[(12)]);
var inst_41944__$1 = cljs.core._nth.call(null,inst_41937,inst_41939);
var inst_41945 = cljs.core.async.put_BANG_.call(null,inst_41944__$1,inst_41864,done);
var state_41996__$1 = (function (){var statearr_42002 = state_41996;
(statearr_42002[(12)] = inst_41944__$1);

return statearr_42002;
})();
if(cljs.core.truth_(inst_41945)){
var statearr_42003_42088 = state_41996__$1;
(statearr_42003_42088[(1)] = (30));

} else {
var statearr_42004_42089 = state_41996__$1;
(statearr_42004_42089[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (1))){
var state_41996__$1 = state_41996;
var statearr_42005_42090 = state_41996__$1;
(statearr_42005_42090[(2)] = null);

(statearr_42005_42090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (24))){
var inst_41895 = (state_41996[(7)]);
var inst_41914 = (state_41996[(2)]);
var inst_41915 = cljs.core.next.call(null,inst_41895);
var inst_41873 = inst_41915;
var inst_41874 = null;
var inst_41875 = (0);
var inst_41876 = (0);
var state_41996__$1 = (function (){var statearr_42006 = state_41996;
(statearr_42006[(13)] = inst_41873);

(statearr_42006[(14)] = inst_41876);

(statearr_42006[(15)] = inst_41914);

(statearr_42006[(16)] = inst_41875);

(statearr_42006[(17)] = inst_41874);

return statearr_42006;
})();
var statearr_42007_42091 = state_41996__$1;
(statearr_42007_42091[(2)] = null);

(statearr_42007_42091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (39))){
var state_41996__$1 = state_41996;
var statearr_42011_42092 = state_41996__$1;
(statearr_42011_42092[(2)] = null);

(statearr_42011_42092[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (4))){
var inst_41864 = (state_41996[(9)]);
var inst_41864__$1 = (state_41996[(2)]);
var inst_41865 = (inst_41864__$1 == null);
var state_41996__$1 = (function (){var statearr_42012 = state_41996;
(statearr_42012[(9)] = inst_41864__$1);

return statearr_42012;
})();
if(cljs.core.truth_(inst_41865)){
var statearr_42013_42093 = state_41996__$1;
(statearr_42013_42093[(1)] = (5));

} else {
var statearr_42014_42094 = state_41996__$1;
(statearr_42014_42094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (15))){
var inst_41873 = (state_41996[(13)]);
var inst_41876 = (state_41996[(14)]);
var inst_41875 = (state_41996[(16)]);
var inst_41874 = (state_41996[(17)]);
var inst_41891 = (state_41996[(2)]);
var inst_41892 = (inst_41876 + (1));
var tmp42008 = inst_41873;
var tmp42009 = inst_41875;
var tmp42010 = inst_41874;
var inst_41873__$1 = tmp42008;
var inst_41874__$1 = tmp42010;
var inst_41875__$1 = tmp42009;
var inst_41876__$1 = inst_41892;
var state_41996__$1 = (function (){var statearr_42015 = state_41996;
(statearr_42015[(13)] = inst_41873__$1);

(statearr_42015[(18)] = inst_41891);

(statearr_42015[(14)] = inst_41876__$1);

(statearr_42015[(16)] = inst_41875__$1);

(statearr_42015[(17)] = inst_41874__$1);

return statearr_42015;
})();
var statearr_42016_42095 = state_41996__$1;
(statearr_42016_42095[(2)] = null);

(statearr_42016_42095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (21))){
var inst_41918 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42020_42096 = state_41996__$1;
(statearr_42020_42096[(2)] = inst_41918);

(statearr_42020_42096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (31))){
var inst_41944 = (state_41996[(12)]);
var inst_41948 = done.call(null,null);
var inst_41949 = cljs.core.async.untap_STAR_.call(null,m,inst_41944);
var state_41996__$1 = (function (){var statearr_42021 = state_41996;
(statearr_42021[(19)] = inst_41948);

return statearr_42021;
})();
var statearr_42022_42097 = state_41996__$1;
(statearr_42022_42097[(2)] = inst_41949);

(statearr_42022_42097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (32))){
var inst_41938 = (state_41996[(20)]);
var inst_41937 = (state_41996[(10)]);
var inst_41939 = (state_41996[(11)]);
var inst_41936 = (state_41996[(21)]);
var inst_41951 = (state_41996[(2)]);
var inst_41952 = (inst_41939 + (1));
var tmp42017 = inst_41938;
var tmp42018 = inst_41937;
var tmp42019 = inst_41936;
var inst_41936__$1 = tmp42019;
var inst_41937__$1 = tmp42018;
var inst_41938__$1 = tmp42017;
var inst_41939__$1 = inst_41952;
var state_41996__$1 = (function (){var statearr_42023 = state_41996;
(statearr_42023[(20)] = inst_41938__$1);

(statearr_42023[(22)] = inst_41951);

(statearr_42023[(10)] = inst_41937__$1);

(statearr_42023[(11)] = inst_41939__$1);

(statearr_42023[(21)] = inst_41936__$1);

return statearr_42023;
})();
var statearr_42024_42098 = state_41996__$1;
(statearr_42024_42098[(2)] = null);

(statearr_42024_42098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (40))){
var inst_41964 = (state_41996[(23)]);
var inst_41968 = done.call(null,null);
var inst_41969 = cljs.core.async.untap_STAR_.call(null,m,inst_41964);
var state_41996__$1 = (function (){var statearr_42025 = state_41996;
(statearr_42025[(24)] = inst_41968);

return statearr_42025;
})();
var statearr_42026_42099 = state_41996__$1;
(statearr_42026_42099[(2)] = inst_41969);

(statearr_42026_42099[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (33))){
var inst_41955 = (state_41996[(25)]);
var inst_41957 = cljs.core.chunked_seq_QMARK_.call(null,inst_41955);
var state_41996__$1 = state_41996;
if(inst_41957){
var statearr_42027_42100 = state_41996__$1;
(statearr_42027_42100[(1)] = (36));

} else {
var statearr_42028_42101 = state_41996__$1;
(statearr_42028_42101[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (13))){
var inst_41885 = (state_41996[(26)]);
var inst_41888 = cljs.core.async.close_BANG_.call(null,inst_41885);
var state_41996__$1 = state_41996;
var statearr_42029_42102 = state_41996__$1;
(statearr_42029_42102[(2)] = inst_41888);

(statearr_42029_42102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (22))){
var inst_41908 = (state_41996[(8)]);
var inst_41911 = cljs.core.async.close_BANG_.call(null,inst_41908);
var state_41996__$1 = state_41996;
var statearr_42030_42103 = state_41996__$1;
(statearr_42030_42103[(2)] = inst_41911);

(statearr_42030_42103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (36))){
var inst_41955 = (state_41996[(25)]);
var inst_41959 = cljs.core.chunk_first.call(null,inst_41955);
var inst_41960 = cljs.core.chunk_rest.call(null,inst_41955);
var inst_41961 = cljs.core.count.call(null,inst_41959);
var inst_41936 = inst_41960;
var inst_41937 = inst_41959;
var inst_41938 = inst_41961;
var inst_41939 = (0);
var state_41996__$1 = (function (){var statearr_42031 = state_41996;
(statearr_42031[(20)] = inst_41938);

(statearr_42031[(10)] = inst_41937);

(statearr_42031[(11)] = inst_41939);

(statearr_42031[(21)] = inst_41936);

return statearr_42031;
})();
var statearr_42032_42104 = state_41996__$1;
(statearr_42032_42104[(2)] = null);

(statearr_42032_42104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (41))){
var inst_41955 = (state_41996[(25)]);
var inst_41971 = (state_41996[(2)]);
var inst_41972 = cljs.core.next.call(null,inst_41955);
var inst_41936 = inst_41972;
var inst_41937 = null;
var inst_41938 = (0);
var inst_41939 = (0);
var state_41996__$1 = (function (){var statearr_42033 = state_41996;
(statearr_42033[(20)] = inst_41938);

(statearr_42033[(10)] = inst_41937);

(statearr_42033[(27)] = inst_41971);

(statearr_42033[(11)] = inst_41939);

(statearr_42033[(21)] = inst_41936);

return statearr_42033;
})();
var statearr_42034_42105 = state_41996__$1;
(statearr_42034_42105[(2)] = null);

(statearr_42034_42105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (43))){
var state_41996__$1 = state_41996;
var statearr_42035_42106 = state_41996__$1;
(statearr_42035_42106[(2)] = null);

(statearr_42035_42106[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (29))){
var inst_41980 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42036_42107 = state_41996__$1;
(statearr_42036_42107[(2)] = inst_41980);

(statearr_42036_42107[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (44))){
var inst_41989 = (state_41996[(2)]);
var state_41996__$1 = (function (){var statearr_42037 = state_41996;
(statearr_42037[(28)] = inst_41989);

return statearr_42037;
})();
var statearr_42038_42108 = state_41996__$1;
(statearr_42038_42108[(2)] = null);

(statearr_42038_42108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (6))){
var inst_41928 = (state_41996[(29)]);
var inst_41927 = cljs.core.deref.call(null,cs);
var inst_41928__$1 = cljs.core.keys.call(null,inst_41927);
var inst_41929 = cljs.core.count.call(null,inst_41928__$1);
var inst_41930 = cljs.core.reset_BANG_.call(null,dctr,inst_41929);
var inst_41935 = cljs.core.seq.call(null,inst_41928__$1);
var inst_41936 = inst_41935;
var inst_41937 = null;
var inst_41938 = (0);
var inst_41939 = (0);
var state_41996__$1 = (function (){var statearr_42039 = state_41996;
(statearr_42039[(30)] = inst_41930);

(statearr_42039[(20)] = inst_41938);

(statearr_42039[(10)] = inst_41937);

(statearr_42039[(11)] = inst_41939);

(statearr_42039[(21)] = inst_41936);

(statearr_42039[(29)] = inst_41928__$1);

return statearr_42039;
})();
var statearr_42040_42109 = state_41996__$1;
(statearr_42040_42109[(2)] = null);

(statearr_42040_42109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (28))){
var inst_41936 = (state_41996[(21)]);
var inst_41955 = (state_41996[(25)]);
var inst_41955__$1 = cljs.core.seq.call(null,inst_41936);
var state_41996__$1 = (function (){var statearr_42041 = state_41996;
(statearr_42041[(25)] = inst_41955__$1);

return statearr_42041;
})();
if(inst_41955__$1){
var statearr_42042_42110 = state_41996__$1;
(statearr_42042_42110[(1)] = (33));

} else {
var statearr_42043_42111 = state_41996__$1;
(statearr_42043_42111[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (25))){
var inst_41938 = (state_41996[(20)]);
var inst_41939 = (state_41996[(11)]);
var inst_41941 = (inst_41939 < inst_41938);
var inst_41942 = inst_41941;
var state_41996__$1 = state_41996;
if(cljs.core.truth_(inst_41942)){
var statearr_42044_42112 = state_41996__$1;
(statearr_42044_42112[(1)] = (27));

} else {
var statearr_42045_42113 = state_41996__$1;
(statearr_42045_42113[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (34))){
var state_41996__$1 = state_41996;
var statearr_42046_42114 = state_41996__$1;
(statearr_42046_42114[(2)] = null);

(statearr_42046_42114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (17))){
var state_41996__$1 = state_41996;
var statearr_42047_42115 = state_41996__$1;
(statearr_42047_42115[(2)] = null);

(statearr_42047_42115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (3))){
var inst_41994 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41996__$1,inst_41994);
} else {
if((state_val_41997 === (12))){
var inst_41923 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42048_42116 = state_41996__$1;
(statearr_42048_42116[(2)] = inst_41923);

(statearr_42048_42116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (2))){
var state_41996__$1 = state_41996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41996__$1,(4),ch);
} else {
if((state_val_41997 === (23))){
var state_41996__$1 = state_41996;
var statearr_42049_42117 = state_41996__$1;
(statearr_42049_42117[(2)] = null);

(statearr_42049_42117[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (35))){
var inst_41978 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42050_42118 = state_41996__$1;
(statearr_42050_42118[(2)] = inst_41978);

(statearr_42050_42118[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (19))){
var inst_41895 = (state_41996[(7)]);
var inst_41899 = cljs.core.chunk_first.call(null,inst_41895);
var inst_41900 = cljs.core.chunk_rest.call(null,inst_41895);
var inst_41901 = cljs.core.count.call(null,inst_41899);
var inst_41873 = inst_41900;
var inst_41874 = inst_41899;
var inst_41875 = inst_41901;
var inst_41876 = (0);
var state_41996__$1 = (function (){var statearr_42051 = state_41996;
(statearr_42051[(13)] = inst_41873);

(statearr_42051[(14)] = inst_41876);

(statearr_42051[(16)] = inst_41875);

(statearr_42051[(17)] = inst_41874);

return statearr_42051;
})();
var statearr_42052_42119 = state_41996__$1;
(statearr_42052_42119[(2)] = null);

(statearr_42052_42119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (11))){
var inst_41873 = (state_41996[(13)]);
var inst_41895 = (state_41996[(7)]);
var inst_41895__$1 = cljs.core.seq.call(null,inst_41873);
var state_41996__$1 = (function (){var statearr_42053 = state_41996;
(statearr_42053[(7)] = inst_41895__$1);

return statearr_42053;
})();
if(inst_41895__$1){
var statearr_42054_42120 = state_41996__$1;
(statearr_42054_42120[(1)] = (16));

} else {
var statearr_42055_42121 = state_41996__$1;
(statearr_42055_42121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (9))){
var inst_41925 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42056_42122 = state_41996__$1;
(statearr_42056_42122[(2)] = inst_41925);

(statearr_42056_42122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (5))){
var inst_41871 = cljs.core.deref.call(null,cs);
var inst_41872 = cljs.core.seq.call(null,inst_41871);
var inst_41873 = inst_41872;
var inst_41874 = null;
var inst_41875 = (0);
var inst_41876 = (0);
var state_41996__$1 = (function (){var statearr_42057 = state_41996;
(statearr_42057[(13)] = inst_41873);

(statearr_42057[(14)] = inst_41876);

(statearr_42057[(16)] = inst_41875);

(statearr_42057[(17)] = inst_41874);

return statearr_42057;
})();
var statearr_42058_42123 = state_41996__$1;
(statearr_42058_42123[(2)] = null);

(statearr_42058_42123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (14))){
var state_41996__$1 = state_41996;
var statearr_42059_42124 = state_41996__$1;
(statearr_42059_42124[(2)] = null);

(statearr_42059_42124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (45))){
var inst_41986 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42060_42125 = state_41996__$1;
(statearr_42060_42125[(2)] = inst_41986);

(statearr_42060_42125[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (26))){
var inst_41928 = (state_41996[(29)]);
var inst_41982 = (state_41996[(2)]);
var inst_41983 = cljs.core.seq.call(null,inst_41928);
var state_41996__$1 = (function (){var statearr_42061 = state_41996;
(statearr_42061[(31)] = inst_41982);

return statearr_42061;
})();
if(inst_41983){
var statearr_42062_42126 = state_41996__$1;
(statearr_42062_42126[(1)] = (42));

} else {
var statearr_42063_42127 = state_41996__$1;
(statearr_42063_42127[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (16))){
var inst_41895 = (state_41996[(7)]);
var inst_41897 = cljs.core.chunked_seq_QMARK_.call(null,inst_41895);
var state_41996__$1 = state_41996;
if(inst_41897){
var statearr_42064_42128 = state_41996__$1;
(statearr_42064_42128[(1)] = (19));

} else {
var statearr_42065_42129 = state_41996__$1;
(statearr_42065_42129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (38))){
var inst_41975 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42066_42130 = state_41996__$1;
(statearr_42066_42130[(2)] = inst_41975);

(statearr_42066_42130[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (30))){
var state_41996__$1 = state_41996;
var statearr_42067_42131 = state_41996__$1;
(statearr_42067_42131[(2)] = null);

(statearr_42067_42131[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (10))){
var inst_41876 = (state_41996[(14)]);
var inst_41874 = (state_41996[(17)]);
var inst_41884 = cljs.core._nth.call(null,inst_41874,inst_41876);
var inst_41885 = cljs.core.nth.call(null,inst_41884,(0),null);
var inst_41886 = cljs.core.nth.call(null,inst_41884,(1),null);
var state_41996__$1 = (function (){var statearr_42068 = state_41996;
(statearr_42068[(26)] = inst_41885);

return statearr_42068;
})();
if(cljs.core.truth_(inst_41886)){
var statearr_42069_42132 = state_41996__$1;
(statearr_42069_42132[(1)] = (13));

} else {
var statearr_42070_42133 = state_41996__$1;
(statearr_42070_42133[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (18))){
var inst_41921 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
var statearr_42071_42134 = state_41996__$1;
(statearr_42071_42134[(2)] = inst_41921);

(statearr_42071_42134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (42))){
var state_41996__$1 = state_41996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41996__$1,(45),dchan);
} else {
if((state_val_41997 === (37))){
var inst_41964 = (state_41996[(23)]);
var inst_41864 = (state_41996[(9)]);
var inst_41955 = (state_41996[(25)]);
var inst_41964__$1 = cljs.core.first.call(null,inst_41955);
var inst_41965 = cljs.core.async.put_BANG_.call(null,inst_41964__$1,inst_41864,done);
var state_41996__$1 = (function (){var statearr_42072 = state_41996;
(statearr_42072[(23)] = inst_41964__$1);

return statearr_42072;
})();
if(cljs.core.truth_(inst_41965)){
var statearr_42073_42135 = state_41996__$1;
(statearr_42073_42135[(1)] = (39));

} else {
var statearr_42074_42136 = state_41996__$1;
(statearr_42074_42136[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41997 === (8))){
var inst_41876 = (state_41996[(14)]);
var inst_41875 = (state_41996[(16)]);
var inst_41878 = (inst_41876 < inst_41875);
var inst_41879 = inst_41878;
var state_41996__$1 = state_41996;
if(cljs.core.truth_(inst_41879)){
var statearr_42075_42137 = state_41996__$1;
(statearr_42075_42137[(1)] = (10));

} else {
var statearr_42076_42138 = state_41996__$1;
(statearr_42076_42138[(1)] = (11));

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
});})(c__40731__auto___42084,cs,m,dchan,dctr,done))
;
return ((function (switch__40619__auto__,c__40731__auto___42084,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40620__auto__ = null;
var cljs$core$async$mult_$_state_machine__40620__auto____0 = (function (){
var statearr_42080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42080[(0)] = cljs$core$async$mult_$_state_machine__40620__auto__);

(statearr_42080[(1)] = (1));

return statearr_42080;
});
var cljs$core$async$mult_$_state_machine__40620__auto____1 = (function (state_41996){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_41996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e42081){if((e42081 instanceof Object)){
var ex__40623__auto__ = e42081;
var statearr_42082_42139 = state_41996;
(statearr_42082_42139[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42140 = state_41996;
state_41996 = G__42140;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40620__auto__ = function(state_41996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40620__auto____1.call(this,state_41996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40620__auto____0;
cljs$core$async$mult_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40620__auto____1;
return cljs$core$async$mult_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___42084,cs,m,dchan,dctr,done))
})();
var state__40733__auto__ = (function (){var statearr_42083 = f__40732__auto__.call(null);
(statearr_42083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___42084);

return statearr_42083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___42084,cs,m,dchan,dctr,done))
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
var args42141 = [];
var len__37879__auto___42144 = arguments.length;
var i__37880__auto___42145 = (0);
while(true){
if((i__37880__auto___42145 < len__37879__auto___42144)){
args42141.push((arguments[i__37880__auto___42145]));

var G__42146 = (i__37880__auto___42145 + (1));
i__37880__auto___42145 = G__42146;
continue;
} else {
}
break;
}

var G__42143 = args42141.length;
switch (G__42143) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42141.length)].join('')));

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
var len__37879__auto___42158 = arguments.length;
var i__37880__auto___42159 = (0);
while(true){
if((i__37880__auto___42159 < len__37879__auto___42158)){
args__37886__auto__.push((arguments[i__37880__auto___42159]));

var G__42160 = (i__37880__auto___42159 + (1));
i__37880__auto___42159 = G__42160;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((3) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37887__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42152){
var map__42153 = p__42152;
var map__42153__$1 = ((((!((map__42153 == null)))?((((map__42153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42153):map__42153);
var opts = map__42153__$1;
var statearr_42155_42161 = state;
(statearr_42155_42161[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42153,map__42153__$1,opts){
return (function (val){
var statearr_42156_42162 = state;
(statearr_42156_42162[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42153,map__42153__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42157_42163 = state;
(statearr_42157_42163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42148){
var G__42149 = cljs.core.first.call(null,seq42148);
var seq42148__$1 = cljs.core.next.call(null,seq42148);
var G__42150 = cljs.core.first.call(null,seq42148__$1);
var seq42148__$2 = cljs.core.next.call(null,seq42148__$1);
var G__42151 = cljs.core.first.call(null,seq42148__$2);
var seq42148__$3 = cljs.core.next.call(null,seq42148__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42149,G__42150,G__42151,seq42148__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42329 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42330){
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
this.meta42330 = meta42330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42331,meta42330__$1){
var self__ = this;
var _42331__$1 = this;
return (new cljs.core.async.t_cljs$core$async42329(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42330__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42331){
var self__ = this;
var _42331__$1 = this;
return self__.meta42330;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42329.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42330","meta42330",490539027,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42329";

cljs.core.async.t_cljs$core$async42329.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42329");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42329 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42329(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42330){
return (new cljs.core.async.t_cljs$core$async42329(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42330));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42329(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40731__auto___42494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___42494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___42494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42431){
var state_val_42432 = (state_42431[(1)]);
if((state_val_42432 === (7))){
var inst_42347 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
var statearr_42433_42495 = state_42431__$1;
(statearr_42433_42495[(2)] = inst_42347);

(statearr_42433_42495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (20))){
var inst_42359 = (state_42431[(7)]);
var state_42431__$1 = state_42431;
var statearr_42434_42496 = state_42431__$1;
(statearr_42434_42496[(2)] = inst_42359);

(statearr_42434_42496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (27))){
var state_42431__$1 = state_42431;
var statearr_42435_42497 = state_42431__$1;
(statearr_42435_42497[(2)] = null);

(statearr_42435_42497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (1))){
var inst_42335 = (state_42431[(8)]);
var inst_42335__$1 = calc_state.call(null);
var inst_42337 = (inst_42335__$1 == null);
var inst_42338 = cljs.core.not.call(null,inst_42337);
var state_42431__$1 = (function (){var statearr_42436 = state_42431;
(statearr_42436[(8)] = inst_42335__$1);

return statearr_42436;
})();
if(inst_42338){
var statearr_42437_42498 = state_42431__$1;
(statearr_42437_42498[(1)] = (2));

} else {
var statearr_42438_42499 = state_42431__$1;
(statearr_42438_42499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (24))){
var inst_42405 = (state_42431[(9)]);
var inst_42391 = (state_42431[(10)]);
var inst_42382 = (state_42431[(11)]);
var inst_42405__$1 = inst_42382.call(null,inst_42391);
var state_42431__$1 = (function (){var statearr_42439 = state_42431;
(statearr_42439[(9)] = inst_42405__$1);

return statearr_42439;
})();
if(cljs.core.truth_(inst_42405__$1)){
var statearr_42440_42500 = state_42431__$1;
(statearr_42440_42500[(1)] = (29));

} else {
var statearr_42441_42501 = state_42431__$1;
(statearr_42441_42501[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (4))){
var inst_42350 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
if(cljs.core.truth_(inst_42350)){
var statearr_42442_42502 = state_42431__$1;
(statearr_42442_42502[(1)] = (8));

} else {
var statearr_42443_42503 = state_42431__$1;
(statearr_42443_42503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (15))){
var inst_42376 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
if(cljs.core.truth_(inst_42376)){
var statearr_42444_42504 = state_42431__$1;
(statearr_42444_42504[(1)] = (19));

} else {
var statearr_42445_42505 = state_42431__$1;
(statearr_42445_42505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (21))){
var inst_42381 = (state_42431[(12)]);
var inst_42381__$1 = (state_42431[(2)]);
var inst_42382 = cljs.core.get.call(null,inst_42381__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42383 = cljs.core.get.call(null,inst_42381__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42384 = cljs.core.get.call(null,inst_42381__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42431__$1 = (function (){var statearr_42446 = state_42431;
(statearr_42446[(11)] = inst_42382);

(statearr_42446[(12)] = inst_42381__$1);

(statearr_42446[(13)] = inst_42383);

return statearr_42446;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42431__$1,(22),inst_42384);
} else {
if((state_val_42432 === (31))){
var inst_42413 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
if(cljs.core.truth_(inst_42413)){
var statearr_42447_42506 = state_42431__$1;
(statearr_42447_42506[(1)] = (32));

} else {
var statearr_42448_42507 = state_42431__$1;
(statearr_42448_42507[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (32))){
var inst_42390 = (state_42431[(14)]);
var state_42431__$1 = state_42431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42431__$1,(35),out,inst_42390);
} else {
if((state_val_42432 === (33))){
var inst_42381 = (state_42431[(12)]);
var inst_42359 = inst_42381;
var state_42431__$1 = (function (){var statearr_42449 = state_42431;
(statearr_42449[(7)] = inst_42359);

return statearr_42449;
})();
var statearr_42450_42508 = state_42431__$1;
(statearr_42450_42508[(2)] = null);

(statearr_42450_42508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (13))){
var inst_42359 = (state_42431[(7)]);
var inst_42366 = inst_42359.cljs$lang$protocol_mask$partition0$;
var inst_42367 = (inst_42366 & (64));
var inst_42368 = inst_42359.cljs$core$ISeq$;
var inst_42369 = (inst_42367) || (inst_42368);
var state_42431__$1 = state_42431;
if(cljs.core.truth_(inst_42369)){
var statearr_42451_42509 = state_42431__$1;
(statearr_42451_42509[(1)] = (16));

} else {
var statearr_42452_42510 = state_42431__$1;
(statearr_42452_42510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (22))){
var inst_42391 = (state_42431[(10)]);
var inst_42390 = (state_42431[(14)]);
var inst_42389 = (state_42431[(2)]);
var inst_42390__$1 = cljs.core.nth.call(null,inst_42389,(0),null);
var inst_42391__$1 = cljs.core.nth.call(null,inst_42389,(1),null);
var inst_42392 = (inst_42390__$1 == null);
var inst_42393 = cljs.core._EQ_.call(null,inst_42391__$1,change);
var inst_42394 = (inst_42392) || (inst_42393);
var state_42431__$1 = (function (){var statearr_42453 = state_42431;
(statearr_42453[(10)] = inst_42391__$1);

(statearr_42453[(14)] = inst_42390__$1);

return statearr_42453;
})();
if(cljs.core.truth_(inst_42394)){
var statearr_42454_42511 = state_42431__$1;
(statearr_42454_42511[(1)] = (23));

} else {
var statearr_42455_42512 = state_42431__$1;
(statearr_42455_42512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (36))){
var inst_42381 = (state_42431[(12)]);
var inst_42359 = inst_42381;
var state_42431__$1 = (function (){var statearr_42456 = state_42431;
(statearr_42456[(7)] = inst_42359);

return statearr_42456;
})();
var statearr_42457_42513 = state_42431__$1;
(statearr_42457_42513[(2)] = null);

(statearr_42457_42513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (29))){
var inst_42405 = (state_42431[(9)]);
var state_42431__$1 = state_42431;
var statearr_42458_42514 = state_42431__$1;
(statearr_42458_42514[(2)] = inst_42405);

(statearr_42458_42514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (6))){
var state_42431__$1 = state_42431;
var statearr_42459_42515 = state_42431__$1;
(statearr_42459_42515[(2)] = false);

(statearr_42459_42515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (28))){
var inst_42401 = (state_42431[(2)]);
var inst_42402 = calc_state.call(null);
var inst_42359 = inst_42402;
var state_42431__$1 = (function (){var statearr_42460 = state_42431;
(statearr_42460[(7)] = inst_42359);

(statearr_42460[(15)] = inst_42401);

return statearr_42460;
})();
var statearr_42461_42516 = state_42431__$1;
(statearr_42461_42516[(2)] = null);

(statearr_42461_42516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (25))){
var inst_42427 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
var statearr_42462_42517 = state_42431__$1;
(statearr_42462_42517[(2)] = inst_42427);

(statearr_42462_42517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (34))){
var inst_42425 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
var statearr_42463_42518 = state_42431__$1;
(statearr_42463_42518[(2)] = inst_42425);

(statearr_42463_42518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (17))){
var state_42431__$1 = state_42431;
var statearr_42464_42519 = state_42431__$1;
(statearr_42464_42519[(2)] = false);

(statearr_42464_42519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (3))){
var state_42431__$1 = state_42431;
var statearr_42465_42520 = state_42431__$1;
(statearr_42465_42520[(2)] = false);

(statearr_42465_42520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (12))){
var inst_42429 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42431__$1,inst_42429);
} else {
if((state_val_42432 === (2))){
var inst_42335 = (state_42431[(8)]);
var inst_42340 = inst_42335.cljs$lang$protocol_mask$partition0$;
var inst_42341 = (inst_42340 & (64));
var inst_42342 = inst_42335.cljs$core$ISeq$;
var inst_42343 = (inst_42341) || (inst_42342);
var state_42431__$1 = state_42431;
if(cljs.core.truth_(inst_42343)){
var statearr_42466_42521 = state_42431__$1;
(statearr_42466_42521[(1)] = (5));

} else {
var statearr_42467_42522 = state_42431__$1;
(statearr_42467_42522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (23))){
var inst_42390 = (state_42431[(14)]);
var inst_42396 = (inst_42390 == null);
var state_42431__$1 = state_42431;
if(cljs.core.truth_(inst_42396)){
var statearr_42468_42523 = state_42431__$1;
(statearr_42468_42523[(1)] = (26));

} else {
var statearr_42469_42524 = state_42431__$1;
(statearr_42469_42524[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (35))){
var inst_42416 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
if(cljs.core.truth_(inst_42416)){
var statearr_42470_42525 = state_42431__$1;
(statearr_42470_42525[(1)] = (36));

} else {
var statearr_42471_42526 = state_42431__$1;
(statearr_42471_42526[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (19))){
var inst_42359 = (state_42431[(7)]);
var inst_42378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42359);
var state_42431__$1 = state_42431;
var statearr_42472_42527 = state_42431__$1;
(statearr_42472_42527[(2)] = inst_42378);

(statearr_42472_42527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (11))){
var inst_42359 = (state_42431[(7)]);
var inst_42363 = (inst_42359 == null);
var inst_42364 = cljs.core.not.call(null,inst_42363);
var state_42431__$1 = state_42431;
if(inst_42364){
var statearr_42473_42528 = state_42431__$1;
(statearr_42473_42528[(1)] = (13));

} else {
var statearr_42474_42529 = state_42431__$1;
(statearr_42474_42529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (9))){
var inst_42335 = (state_42431[(8)]);
var state_42431__$1 = state_42431;
var statearr_42475_42530 = state_42431__$1;
(statearr_42475_42530[(2)] = inst_42335);

(statearr_42475_42530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (5))){
var state_42431__$1 = state_42431;
var statearr_42476_42531 = state_42431__$1;
(statearr_42476_42531[(2)] = true);

(statearr_42476_42531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (14))){
var state_42431__$1 = state_42431;
var statearr_42477_42532 = state_42431__$1;
(statearr_42477_42532[(2)] = false);

(statearr_42477_42532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (26))){
var inst_42391 = (state_42431[(10)]);
var inst_42398 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42391);
var state_42431__$1 = state_42431;
var statearr_42478_42533 = state_42431__$1;
(statearr_42478_42533[(2)] = inst_42398);

(statearr_42478_42533[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (16))){
var state_42431__$1 = state_42431;
var statearr_42479_42534 = state_42431__$1;
(statearr_42479_42534[(2)] = true);

(statearr_42479_42534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (38))){
var inst_42421 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
var statearr_42480_42535 = state_42431__$1;
(statearr_42480_42535[(2)] = inst_42421);

(statearr_42480_42535[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (30))){
var inst_42391 = (state_42431[(10)]);
var inst_42382 = (state_42431[(11)]);
var inst_42383 = (state_42431[(13)]);
var inst_42408 = cljs.core.empty_QMARK_.call(null,inst_42382);
var inst_42409 = inst_42383.call(null,inst_42391);
var inst_42410 = cljs.core.not.call(null,inst_42409);
var inst_42411 = (inst_42408) && (inst_42410);
var state_42431__$1 = state_42431;
var statearr_42481_42536 = state_42431__$1;
(statearr_42481_42536[(2)] = inst_42411);

(statearr_42481_42536[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (10))){
var inst_42335 = (state_42431[(8)]);
var inst_42355 = (state_42431[(2)]);
var inst_42356 = cljs.core.get.call(null,inst_42355,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42357 = cljs.core.get.call(null,inst_42355,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42358 = cljs.core.get.call(null,inst_42355,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42359 = inst_42335;
var state_42431__$1 = (function (){var statearr_42482 = state_42431;
(statearr_42482[(7)] = inst_42359);

(statearr_42482[(16)] = inst_42358);

(statearr_42482[(17)] = inst_42357);

(statearr_42482[(18)] = inst_42356);

return statearr_42482;
})();
var statearr_42483_42537 = state_42431__$1;
(statearr_42483_42537[(2)] = null);

(statearr_42483_42537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (18))){
var inst_42373 = (state_42431[(2)]);
var state_42431__$1 = state_42431;
var statearr_42484_42538 = state_42431__$1;
(statearr_42484_42538[(2)] = inst_42373);

(statearr_42484_42538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (37))){
var state_42431__$1 = state_42431;
var statearr_42485_42539 = state_42431__$1;
(statearr_42485_42539[(2)] = null);

(statearr_42485_42539[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42432 === (8))){
var inst_42335 = (state_42431[(8)]);
var inst_42352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42335);
var state_42431__$1 = state_42431;
var statearr_42486_42540 = state_42431__$1;
(statearr_42486_42540[(2)] = inst_42352);

(statearr_42486_42540[(1)] = (10));


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
});})(c__40731__auto___42494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40619__auto__,c__40731__auto___42494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40620__auto__ = null;
var cljs$core$async$mix_$_state_machine__40620__auto____0 = (function (){
var statearr_42490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42490[(0)] = cljs$core$async$mix_$_state_machine__40620__auto__);

(statearr_42490[(1)] = (1));

return statearr_42490;
});
var cljs$core$async$mix_$_state_machine__40620__auto____1 = (function (state_42431){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_42431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e42491){if((e42491 instanceof Object)){
var ex__40623__auto__ = e42491;
var statearr_42492_42541 = state_42431;
(statearr_42492_42541[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42542 = state_42431;
state_42431 = G__42542;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40620__auto__ = function(state_42431){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40620__auto____1.call(this,state_42431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40620__auto____0;
cljs$core$async$mix_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40620__auto____1;
return cljs$core$async$mix_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___42494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40733__auto__ = (function (){var statearr_42493 = f__40732__auto__.call(null);
(statearr_42493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___42494);

return statearr_42493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___42494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args42543 = [];
var len__37879__auto___42546 = arguments.length;
var i__37880__auto___42547 = (0);
while(true){
if((i__37880__auto___42547 < len__37879__auto___42546)){
args42543.push((arguments[i__37880__auto___42547]));

var G__42548 = (i__37880__auto___42547 + (1));
i__37880__auto___42547 = G__42548;
continue;
} else {
}
break;
}

var G__42545 = args42543.length;
switch (G__42545) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42543.length)].join('')));

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
var args42551 = [];
var len__37879__auto___42676 = arguments.length;
var i__37880__auto___42677 = (0);
while(true){
if((i__37880__auto___42677 < len__37879__auto___42676)){
args42551.push((arguments[i__37880__auto___42677]));

var G__42678 = (i__37880__auto___42677 + (1));
i__37880__auto___42677 = G__42678;
continue;
} else {
}
break;
}

var G__42553 = args42551.length;
switch (G__42553) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42551.length)].join('')));

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
return (function (p1__42550_SHARP_){
if(cljs.core.truth_(p1__42550_SHARP_.call(null,topic))){
return p1__42550_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42550_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36804__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42554 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42555){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42555 = meta42555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42556,meta42555__$1){
var self__ = this;
var _42556__$1 = this;
return (new cljs.core.async.t_cljs$core$async42554(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42555__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42556){
var self__ = this;
var _42556__$1 = this;
return self__.meta42555;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42554.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42555","meta42555",264750294,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42554";

cljs.core.async.t_cljs$core$async42554.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42554");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42554 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42555){
return (new cljs.core.async.t_cljs$core$async42554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42555));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42554(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40731__auto___42680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___42680,mults,ensure_mult,p){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___42680,mults,ensure_mult,p){
return (function (state_42628){
var state_val_42629 = (state_42628[(1)]);
if((state_val_42629 === (7))){
var inst_42624 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
var statearr_42630_42681 = state_42628__$1;
(statearr_42630_42681[(2)] = inst_42624);

(statearr_42630_42681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (20))){
var state_42628__$1 = state_42628;
var statearr_42631_42682 = state_42628__$1;
(statearr_42631_42682[(2)] = null);

(statearr_42631_42682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (1))){
var state_42628__$1 = state_42628;
var statearr_42632_42683 = state_42628__$1;
(statearr_42632_42683[(2)] = null);

(statearr_42632_42683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (24))){
var inst_42607 = (state_42628[(7)]);
var inst_42616 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42607);
var state_42628__$1 = state_42628;
var statearr_42633_42684 = state_42628__$1;
(statearr_42633_42684[(2)] = inst_42616);

(statearr_42633_42684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (4))){
var inst_42559 = (state_42628[(8)]);
var inst_42559__$1 = (state_42628[(2)]);
var inst_42560 = (inst_42559__$1 == null);
var state_42628__$1 = (function (){var statearr_42634 = state_42628;
(statearr_42634[(8)] = inst_42559__$1);

return statearr_42634;
})();
if(cljs.core.truth_(inst_42560)){
var statearr_42635_42685 = state_42628__$1;
(statearr_42635_42685[(1)] = (5));

} else {
var statearr_42636_42686 = state_42628__$1;
(statearr_42636_42686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (15))){
var inst_42601 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
var statearr_42637_42687 = state_42628__$1;
(statearr_42637_42687[(2)] = inst_42601);

(statearr_42637_42687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (21))){
var inst_42621 = (state_42628[(2)]);
var state_42628__$1 = (function (){var statearr_42638 = state_42628;
(statearr_42638[(9)] = inst_42621);

return statearr_42638;
})();
var statearr_42639_42688 = state_42628__$1;
(statearr_42639_42688[(2)] = null);

(statearr_42639_42688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (13))){
var inst_42583 = (state_42628[(10)]);
var inst_42585 = cljs.core.chunked_seq_QMARK_.call(null,inst_42583);
var state_42628__$1 = state_42628;
if(inst_42585){
var statearr_42640_42689 = state_42628__$1;
(statearr_42640_42689[(1)] = (16));

} else {
var statearr_42641_42690 = state_42628__$1;
(statearr_42641_42690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (22))){
var inst_42613 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
if(cljs.core.truth_(inst_42613)){
var statearr_42642_42691 = state_42628__$1;
(statearr_42642_42691[(1)] = (23));

} else {
var statearr_42643_42692 = state_42628__$1;
(statearr_42643_42692[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (6))){
var inst_42609 = (state_42628[(11)]);
var inst_42559 = (state_42628[(8)]);
var inst_42607 = (state_42628[(7)]);
var inst_42607__$1 = topic_fn.call(null,inst_42559);
var inst_42608 = cljs.core.deref.call(null,mults);
var inst_42609__$1 = cljs.core.get.call(null,inst_42608,inst_42607__$1);
var state_42628__$1 = (function (){var statearr_42644 = state_42628;
(statearr_42644[(11)] = inst_42609__$1);

(statearr_42644[(7)] = inst_42607__$1);

return statearr_42644;
})();
if(cljs.core.truth_(inst_42609__$1)){
var statearr_42645_42693 = state_42628__$1;
(statearr_42645_42693[(1)] = (19));

} else {
var statearr_42646_42694 = state_42628__$1;
(statearr_42646_42694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (25))){
var inst_42618 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
var statearr_42647_42695 = state_42628__$1;
(statearr_42647_42695[(2)] = inst_42618);

(statearr_42647_42695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (17))){
var inst_42583 = (state_42628[(10)]);
var inst_42592 = cljs.core.first.call(null,inst_42583);
var inst_42593 = cljs.core.async.muxch_STAR_.call(null,inst_42592);
var inst_42594 = cljs.core.async.close_BANG_.call(null,inst_42593);
var inst_42595 = cljs.core.next.call(null,inst_42583);
var inst_42569 = inst_42595;
var inst_42570 = null;
var inst_42571 = (0);
var inst_42572 = (0);
var state_42628__$1 = (function (){var statearr_42648 = state_42628;
(statearr_42648[(12)] = inst_42571);

(statearr_42648[(13)] = inst_42570);

(statearr_42648[(14)] = inst_42594);

(statearr_42648[(15)] = inst_42572);

(statearr_42648[(16)] = inst_42569);

return statearr_42648;
})();
var statearr_42649_42696 = state_42628__$1;
(statearr_42649_42696[(2)] = null);

(statearr_42649_42696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (3))){
var inst_42626 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42628__$1,inst_42626);
} else {
if((state_val_42629 === (12))){
var inst_42603 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
var statearr_42650_42697 = state_42628__$1;
(statearr_42650_42697[(2)] = inst_42603);

(statearr_42650_42697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (2))){
var state_42628__$1 = state_42628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42628__$1,(4),ch);
} else {
if((state_val_42629 === (23))){
var state_42628__$1 = state_42628;
var statearr_42651_42698 = state_42628__$1;
(statearr_42651_42698[(2)] = null);

(statearr_42651_42698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (19))){
var inst_42609 = (state_42628[(11)]);
var inst_42559 = (state_42628[(8)]);
var inst_42611 = cljs.core.async.muxch_STAR_.call(null,inst_42609);
var state_42628__$1 = state_42628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42628__$1,(22),inst_42611,inst_42559);
} else {
if((state_val_42629 === (11))){
var inst_42569 = (state_42628[(16)]);
var inst_42583 = (state_42628[(10)]);
var inst_42583__$1 = cljs.core.seq.call(null,inst_42569);
var state_42628__$1 = (function (){var statearr_42652 = state_42628;
(statearr_42652[(10)] = inst_42583__$1);

return statearr_42652;
})();
if(inst_42583__$1){
var statearr_42653_42699 = state_42628__$1;
(statearr_42653_42699[(1)] = (13));

} else {
var statearr_42654_42700 = state_42628__$1;
(statearr_42654_42700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (9))){
var inst_42605 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
var statearr_42655_42701 = state_42628__$1;
(statearr_42655_42701[(2)] = inst_42605);

(statearr_42655_42701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (5))){
var inst_42566 = cljs.core.deref.call(null,mults);
var inst_42567 = cljs.core.vals.call(null,inst_42566);
var inst_42568 = cljs.core.seq.call(null,inst_42567);
var inst_42569 = inst_42568;
var inst_42570 = null;
var inst_42571 = (0);
var inst_42572 = (0);
var state_42628__$1 = (function (){var statearr_42656 = state_42628;
(statearr_42656[(12)] = inst_42571);

(statearr_42656[(13)] = inst_42570);

(statearr_42656[(15)] = inst_42572);

(statearr_42656[(16)] = inst_42569);

return statearr_42656;
})();
var statearr_42657_42702 = state_42628__$1;
(statearr_42657_42702[(2)] = null);

(statearr_42657_42702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (14))){
var state_42628__$1 = state_42628;
var statearr_42661_42703 = state_42628__$1;
(statearr_42661_42703[(2)] = null);

(statearr_42661_42703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (16))){
var inst_42583 = (state_42628[(10)]);
var inst_42587 = cljs.core.chunk_first.call(null,inst_42583);
var inst_42588 = cljs.core.chunk_rest.call(null,inst_42583);
var inst_42589 = cljs.core.count.call(null,inst_42587);
var inst_42569 = inst_42588;
var inst_42570 = inst_42587;
var inst_42571 = inst_42589;
var inst_42572 = (0);
var state_42628__$1 = (function (){var statearr_42662 = state_42628;
(statearr_42662[(12)] = inst_42571);

(statearr_42662[(13)] = inst_42570);

(statearr_42662[(15)] = inst_42572);

(statearr_42662[(16)] = inst_42569);

return statearr_42662;
})();
var statearr_42663_42704 = state_42628__$1;
(statearr_42663_42704[(2)] = null);

(statearr_42663_42704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (10))){
var inst_42571 = (state_42628[(12)]);
var inst_42570 = (state_42628[(13)]);
var inst_42572 = (state_42628[(15)]);
var inst_42569 = (state_42628[(16)]);
var inst_42577 = cljs.core._nth.call(null,inst_42570,inst_42572);
var inst_42578 = cljs.core.async.muxch_STAR_.call(null,inst_42577);
var inst_42579 = cljs.core.async.close_BANG_.call(null,inst_42578);
var inst_42580 = (inst_42572 + (1));
var tmp42658 = inst_42571;
var tmp42659 = inst_42570;
var tmp42660 = inst_42569;
var inst_42569__$1 = tmp42660;
var inst_42570__$1 = tmp42659;
var inst_42571__$1 = tmp42658;
var inst_42572__$1 = inst_42580;
var state_42628__$1 = (function (){var statearr_42664 = state_42628;
(statearr_42664[(12)] = inst_42571__$1);

(statearr_42664[(13)] = inst_42570__$1);

(statearr_42664[(15)] = inst_42572__$1);

(statearr_42664[(16)] = inst_42569__$1);

(statearr_42664[(17)] = inst_42579);

return statearr_42664;
})();
var statearr_42665_42705 = state_42628__$1;
(statearr_42665_42705[(2)] = null);

(statearr_42665_42705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (18))){
var inst_42598 = (state_42628[(2)]);
var state_42628__$1 = state_42628;
var statearr_42666_42706 = state_42628__$1;
(statearr_42666_42706[(2)] = inst_42598);

(statearr_42666_42706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42629 === (8))){
var inst_42571 = (state_42628[(12)]);
var inst_42572 = (state_42628[(15)]);
var inst_42574 = (inst_42572 < inst_42571);
var inst_42575 = inst_42574;
var state_42628__$1 = state_42628;
if(cljs.core.truth_(inst_42575)){
var statearr_42667_42707 = state_42628__$1;
(statearr_42667_42707[(1)] = (10));

} else {
var statearr_42668_42708 = state_42628__$1;
(statearr_42668_42708[(1)] = (11));

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
});})(c__40731__auto___42680,mults,ensure_mult,p))
;
return ((function (switch__40619__auto__,c__40731__auto___42680,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_42672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42672[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_42672[(1)] = (1));

return statearr_42672;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_42628){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_42628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e42673){if((e42673 instanceof Object)){
var ex__40623__auto__ = e42673;
var statearr_42674_42709 = state_42628;
(statearr_42674_42709[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42710 = state_42628;
state_42628 = G__42710;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_42628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_42628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___42680,mults,ensure_mult,p))
})();
var state__40733__auto__ = (function (){var statearr_42675 = f__40732__auto__.call(null);
(statearr_42675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___42680);

return statearr_42675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___42680,mults,ensure_mult,p))
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
var args42711 = [];
var len__37879__auto___42714 = arguments.length;
var i__37880__auto___42715 = (0);
while(true){
if((i__37880__auto___42715 < len__37879__auto___42714)){
args42711.push((arguments[i__37880__auto___42715]));

var G__42716 = (i__37880__auto___42715 + (1));
i__37880__auto___42715 = G__42716;
continue;
} else {
}
break;
}

var G__42713 = args42711.length;
switch (G__42713) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42711.length)].join('')));

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
var args42718 = [];
var len__37879__auto___42721 = arguments.length;
var i__37880__auto___42722 = (0);
while(true){
if((i__37880__auto___42722 < len__37879__auto___42721)){
args42718.push((arguments[i__37880__auto___42722]));

var G__42723 = (i__37880__auto___42722 + (1));
i__37880__auto___42722 = G__42723;
continue;
} else {
}
break;
}

var G__42720 = args42718.length;
switch (G__42720) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42718.length)].join('')));

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
var args42725 = [];
var len__37879__auto___42796 = arguments.length;
var i__37880__auto___42797 = (0);
while(true){
if((i__37880__auto___42797 < len__37879__auto___42796)){
args42725.push((arguments[i__37880__auto___42797]));

var G__42798 = (i__37880__auto___42797 + (1));
i__37880__auto___42797 = G__42798;
continue;
} else {
}
break;
}

var G__42727 = args42725.length;
switch (G__42727) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42725.length)].join('')));

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
var c__40731__auto___42800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___42800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___42800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42766){
var state_val_42767 = (state_42766[(1)]);
if((state_val_42767 === (7))){
var state_42766__$1 = state_42766;
var statearr_42768_42801 = state_42766__$1;
(statearr_42768_42801[(2)] = null);

(statearr_42768_42801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (1))){
var state_42766__$1 = state_42766;
var statearr_42769_42802 = state_42766__$1;
(statearr_42769_42802[(2)] = null);

(statearr_42769_42802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (4))){
var inst_42730 = (state_42766[(7)]);
var inst_42732 = (inst_42730 < cnt);
var state_42766__$1 = state_42766;
if(cljs.core.truth_(inst_42732)){
var statearr_42770_42803 = state_42766__$1;
(statearr_42770_42803[(1)] = (6));

} else {
var statearr_42771_42804 = state_42766__$1;
(statearr_42771_42804[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (15))){
var inst_42762 = (state_42766[(2)]);
var state_42766__$1 = state_42766;
var statearr_42772_42805 = state_42766__$1;
(statearr_42772_42805[(2)] = inst_42762);

(statearr_42772_42805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (13))){
var inst_42755 = cljs.core.async.close_BANG_.call(null,out);
var state_42766__$1 = state_42766;
var statearr_42773_42806 = state_42766__$1;
(statearr_42773_42806[(2)] = inst_42755);

(statearr_42773_42806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (6))){
var state_42766__$1 = state_42766;
var statearr_42774_42807 = state_42766__$1;
(statearr_42774_42807[(2)] = null);

(statearr_42774_42807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (3))){
var inst_42764 = (state_42766[(2)]);
var state_42766__$1 = state_42766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42766__$1,inst_42764);
} else {
if((state_val_42767 === (12))){
var inst_42752 = (state_42766[(8)]);
var inst_42752__$1 = (state_42766[(2)]);
var inst_42753 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42752__$1);
var state_42766__$1 = (function (){var statearr_42775 = state_42766;
(statearr_42775[(8)] = inst_42752__$1);

return statearr_42775;
})();
if(cljs.core.truth_(inst_42753)){
var statearr_42776_42808 = state_42766__$1;
(statearr_42776_42808[(1)] = (13));

} else {
var statearr_42777_42809 = state_42766__$1;
(statearr_42777_42809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (2))){
var inst_42729 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42730 = (0);
var state_42766__$1 = (function (){var statearr_42778 = state_42766;
(statearr_42778[(7)] = inst_42730);

(statearr_42778[(9)] = inst_42729);

return statearr_42778;
})();
var statearr_42779_42810 = state_42766__$1;
(statearr_42779_42810[(2)] = null);

(statearr_42779_42810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (11))){
var inst_42730 = (state_42766[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42766,(10),Object,null,(9));
var inst_42739 = chs__$1.call(null,inst_42730);
var inst_42740 = done.call(null,inst_42730);
var inst_42741 = cljs.core.async.take_BANG_.call(null,inst_42739,inst_42740);
var state_42766__$1 = state_42766;
var statearr_42780_42811 = state_42766__$1;
(statearr_42780_42811[(2)] = inst_42741);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (9))){
var inst_42730 = (state_42766[(7)]);
var inst_42743 = (state_42766[(2)]);
var inst_42744 = (inst_42730 + (1));
var inst_42730__$1 = inst_42744;
var state_42766__$1 = (function (){var statearr_42781 = state_42766;
(statearr_42781[(10)] = inst_42743);

(statearr_42781[(7)] = inst_42730__$1);

return statearr_42781;
})();
var statearr_42782_42812 = state_42766__$1;
(statearr_42782_42812[(2)] = null);

(statearr_42782_42812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (5))){
var inst_42750 = (state_42766[(2)]);
var state_42766__$1 = (function (){var statearr_42783 = state_42766;
(statearr_42783[(11)] = inst_42750);

return statearr_42783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42766__$1,(12),dchan);
} else {
if((state_val_42767 === (14))){
var inst_42752 = (state_42766[(8)]);
var inst_42757 = cljs.core.apply.call(null,f,inst_42752);
var state_42766__$1 = state_42766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42766__$1,(16),out,inst_42757);
} else {
if((state_val_42767 === (16))){
var inst_42759 = (state_42766[(2)]);
var state_42766__$1 = (function (){var statearr_42784 = state_42766;
(statearr_42784[(12)] = inst_42759);

return statearr_42784;
})();
var statearr_42785_42813 = state_42766__$1;
(statearr_42785_42813[(2)] = null);

(statearr_42785_42813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (10))){
var inst_42734 = (state_42766[(2)]);
var inst_42735 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42766__$1 = (function (){var statearr_42786 = state_42766;
(statearr_42786[(13)] = inst_42734);

return statearr_42786;
})();
var statearr_42787_42814 = state_42766__$1;
(statearr_42787_42814[(2)] = inst_42735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (8))){
var inst_42748 = (state_42766[(2)]);
var state_42766__$1 = state_42766;
var statearr_42788_42815 = state_42766__$1;
(statearr_42788_42815[(2)] = inst_42748);

(statearr_42788_42815[(1)] = (5));


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
});})(c__40731__auto___42800,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40619__auto__,c__40731__auto___42800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_42792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42792[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_42792[(1)] = (1));

return statearr_42792;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_42766){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_42766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e42793){if((e42793 instanceof Object)){
var ex__40623__auto__ = e42793;
var statearr_42794_42816 = state_42766;
(statearr_42794_42816[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42817 = state_42766;
state_42766 = G__42817;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_42766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_42766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___42800,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40733__auto__ = (function (){var statearr_42795 = f__40732__auto__.call(null);
(statearr_42795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___42800);

return statearr_42795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___42800,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42819 = [];
var len__37879__auto___42877 = arguments.length;
var i__37880__auto___42878 = (0);
while(true){
if((i__37880__auto___42878 < len__37879__auto___42877)){
args42819.push((arguments[i__37880__auto___42878]));

var G__42879 = (i__37880__auto___42878 + (1));
i__37880__auto___42878 = G__42879;
continue;
} else {
}
break;
}

var G__42821 = args42819.length;
switch (G__42821) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42819.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40731__auto___42881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___42881,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___42881,out){
return (function (state_42853){
var state_val_42854 = (state_42853[(1)]);
if((state_val_42854 === (7))){
var inst_42833 = (state_42853[(7)]);
var inst_42832 = (state_42853[(8)]);
var inst_42832__$1 = (state_42853[(2)]);
var inst_42833__$1 = cljs.core.nth.call(null,inst_42832__$1,(0),null);
var inst_42834 = cljs.core.nth.call(null,inst_42832__$1,(1),null);
var inst_42835 = (inst_42833__$1 == null);
var state_42853__$1 = (function (){var statearr_42855 = state_42853;
(statearr_42855[(9)] = inst_42834);

(statearr_42855[(7)] = inst_42833__$1);

(statearr_42855[(8)] = inst_42832__$1);

return statearr_42855;
})();
if(cljs.core.truth_(inst_42835)){
var statearr_42856_42882 = state_42853__$1;
(statearr_42856_42882[(1)] = (8));

} else {
var statearr_42857_42883 = state_42853__$1;
(statearr_42857_42883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (1))){
var inst_42822 = cljs.core.vec.call(null,chs);
var inst_42823 = inst_42822;
var state_42853__$1 = (function (){var statearr_42858 = state_42853;
(statearr_42858[(10)] = inst_42823);

return statearr_42858;
})();
var statearr_42859_42884 = state_42853__$1;
(statearr_42859_42884[(2)] = null);

(statearr_42859_42884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (4))){
var inst_42823 = (state_42853[(10)]);
var state_42853__$1 = state_42853;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42853__$1,(7),inst_42823);
} else {
if((state_val_42854 === (6))){
var inst_42849 = (state_42853[(2)]);
var state_42853__$1 = state_42853;
var statearr_42860_42885 = state_42853__$1;
(statearr_42860_42885[(2)] = inst_42849);

(statearr_42860_42885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (3))){
var inst_42851 = (state_42853[(2)]);
var state_42853__$1 = state_42853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42853__$1,inst_42851);
} else {
if((state_val_42854 === (2))){
var inst_42823 = (state_42853[(10)]);
var inst_42825 = cljs.core.count.call(null,inst_42823);
var inst_42826 = (inst_42825 > (0));
var state_42853__$1 = state_42853;
if(cljs.core.truth_(inst_42826)){
var statearr_42862_42886 = state_42853__$1;
(statearr_42862_42886[(1)] = (4));

} else {
var statearr_42863_42887 = state_42853__$1;
(statearr_42863_42887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (11))){
var inst_42823 = (state_42853[(10)]);
var inst_42842 = (state_42853[(2)]);
var tmp42861 = inst_42823;
var inst_42823__$1 = tmp42861;
var state_42853__$1 = (function (){var statearr_42864 = state_42853;
(statearr_42864[(11)] = inst_42842);

(statearr_42864[(10)] = inst_42823__$1);

return statearr_42864;
})();
var statearr_42865_42888 = state_42853__$1;
(statearr_42865_42888[(2)] = null);

(statearr_42865_42888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (9))){
var inst_42833 = (state_42853[(7)]);
var state_42853__$1 = state_42853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42853__$1,(11),out,inst_42833);
} else {
if((state_val_42854 === (5))){
var inst_42847 = cljs.core.async.close_BANG_.call(null,out);
var state_42853__$1 = state_42853;
var statearr_42866_42889 = state_42853__$1;
(statearr_42866_42889[(2)] = inst_42847);

(statearr_42866_42889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (10))){
var inst_42845 = (state_42853[(2)]);
var state_42853__$1 = state_42853;
var statearr_42867_42890 = state_42853__$1;
(statearr_42867_42890[(2)] = inst_42845);

(statearr_42867_42890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (8))){
var inst_42834 = (state_42853[(9)]);
var inst_42833 = (state_42853[(7)]);
var inst_42832 = (state_42853[(8)]);
var inst_42823 = (state_42853[(10)]);
var inst_42837 = (function (){var cs = inst_42823;
var vec__42828 = inst_42832;
var v = inst_42833;
var c = inst_42834;
return ((function (cs,vec__42828,v,c,inst_42834,inst_42833,inst_42832,inst_42823,state_val_42854,c__40731__auto___42881,out){
return (function (p1__42818_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42818_SHARP_);
});
;})(cs,vec__42828,v,c,inst_42834,inst_42833,inst_42832,inst_42823,state_val_42854,c__40731__auto___42881,out))
})();
var inst_42838 = cljs.core.filterv.call(null,inst_42837,inst_42823);
var inst_42823__$1 = inst_42838;
var state_42853__$1 = (function (){var statearr_42868 = state_42853;
(statearr_42868[(10)] = inst_42823__$1);

return statearr_42868;
})();
var statearr_42869_42891 = state_42853__$1;
(statearr_42869_42891[(2)] = null);

(statearr_42869_42891[(1)] = (2));


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
});})(c__40731__auto___42881,out))
;
return ((function (switch__40619__auto__,c__40731__auto___42881,out){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_42873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42873[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_42873[(1)] = (1));

return statearr_42873;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_42853){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_42853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e42874){if((e42874 instanceof Object)){
var ex__40623__auto__ = e42874;
var statearr_42875_42892 = state_42853;
(statearr_42875_42892[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42893 = state_42853;
state_42853 = G__42893;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_42853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_42853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___42881,out))
})();
var state__40733__auto__ = (function (){var statearr_42876 = f__40732__auto__.call(null);
(statearr_42876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___42881);

return statearr_42876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___42881,out))
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
var args42894 = [];
var len__37879__auto___42943 = arguments.length;
var i__37880__auto___42944 = (0);
while(true){
if((i__37880__auto___42944 < len__37879__auto___42943)){
args42894.push((arguments[i__37880__auto___42944]));

var G__42945 = (i__37880__auto___42944 + (1));
i__37880__auto___42944 = G__42945;
continue;
} else {
}
break;
}

var G__42896 = args42894.length;
switch (G__42896) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42894.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40731__auto___42947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___42947,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___42947,out){
return (function (state_42920){
var state_val_42921 = (state_42920[(1)]);
if((state_val_42921 === (7))){
var inst_42902 = (state_42920[(7)]);
var inst_42902__$1 = (state_42920[(2)]);
var inst_42903 = (inst_42902__$1 == null);
var inst_42904 = cljs.core.not.call(null,inst_42903);
var state_42920__$1 = (function (){var statearr_42922 = state_42920;
(statearr_42922[(7)] = inst_42902__$1);

return statearr_42922;
})();
if(inst_42904){
var statearr_42923_42948 = state_42920__$1;
(statearr_42923_42948[(1)] = (8));

} else {
var statearr_42924_42949 = state_42920__$1;
(statearr_42924_42949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (1))){
var inst_42897 = (0);
var state_42920__$1 = (function (){var statearr_42925 = state_42920;
(statearr_42925[(8)] = inst_42897);

return statearr_42925;
})();
var statearr_42926_42950 = state_42920__$1;
(statearr_42926_42950[(2)] = null);

(statearr_42926_42950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (4))){
var state_42920__$1 = state_42920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42920__$1,(7),ch);
} else {
if((state_val_42921 === (6))){
var inst_42915 = (state_42920[(2)]);
var state_42920__$1 = state_42920;
var statearr_42927_42951 = state_42920__$1;
(statearr_42927_42951[(2)] = inst_42915);

(statearr_42927_42951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (3))){
var inst_42917 = (state_42920[(2)]);
var inst_42918 = cljs.core.async.close_BANG_.call(null,out);
var state_42920__$1 = (function (){var statearr_42928 = state_42920;
(statearr_42928[(9)] = inst_42917);

return statearr_42928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42920__$1,inst_42918);
} else {
if((state_val_42921 === (2))){
var inst_42897 = (state_42920[(8)]);
var inst_42899 = (inst_42897 < n);
var state_42920__$1 = state_42920;
if(cljs.core.truth_(inst_42899)){
var statearr_42929_42952 = state_42920__$1;
(statearr_42929_42952[(1)] = (4));

} else {
var statearr_42930_42953 = state_42920__$1;
(statearr_42930_42953[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (11))){
var inst_42897 = (state_42920[(8)]);
var inst_42907 = (state_42920[(2)]);
var inst_42908 = (inst_42897 + (1));
var inst_42897__$1 = inst_42908;
var state_42920__$1 = (function (){var statearr_42931 = state_42920;
(statearr_42931[(10)] = inst_42907);

(statearr_42931[(8)] = inst_42897__$1);

return statearr_42931;
})();
var statearr_42932_42954 = state_42920__$1;
(statearr_42932_42954[(2)] = null);

(statearr_42932_42954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (9))){
var state_42920__$1 = state_42920;
var statearr_42933_42955 = state_42920__$1;
(statearr_42933_42955[(2)] = null);

(statearr_42933_42955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (5))){
var state_42920__$1 = state_42920;
var statearr_42934_42956 = state_42920__$1;
(statearr_42934_42956[(2)] = null);

(statearr_42934_42956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (10))){
var inst_42912 = (state_42920[(2)]);
var state_42920__$1 = state_42920;
var statearr_42935_42957 = state_42920__$1;
(statearr_42935_42957[(2)] = inst_42912);

(statearr_42935_42957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42921 === (8))){
var inst_42902 = (state_42920[(7)]);
var state_42920__$1 = state_42920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42920__$1,(11),out,inst_42902);
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
});})(c__40731__auto___42947,out))
;
return ((function (switch__40619__auto__,c__40731__auto___42947,out){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_42939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42939[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_42939[(1)] = (1));

return statearr_42939;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_42920){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_42920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e42940){if((e42940 instanceof Object)){
var ex__40623__auto__ = e42940;
var statearr_42941_42958 = state_42920;
(statearr_42941_42958[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42959 = state_42920;
state_42920 = G__42959;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_42920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_42920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___42947,out))
})();
var state__40733__auto__ = (function (){var statearr_42942 = f__40732__auto__.call(null);
(statearr_42942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___42947);

return statearr_42942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___42947,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42967 = (function (map_LT_,f,ch,meta42968){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42968 = meta42968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42969,meta42968__$1){
var self__ = this;
var _42969__$1 = this;
return (new cljs.core.async.t_cljs$core$async42967(self__.map_LT_,self__.f,self__.ch,meta42968__$1));
});

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42969){
var self__ = this;
var _42969__$1 = this;
return self__.meta42968;
});

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42970 = (function (map_LT_,f,ch,meta42968,_,fn1,meta42971){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42968 = meta42968;
this._ = _;
this.fn1 = fn1;
this.meta42971 = meta42971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42972,meta42971__$1){
var self__ = this;
var _42972__$1 = this;
return (new cljs.core.async.t_cljs$core$async42970(self__.map_LT_,self__.f,self__.ch,self__.meta42968,self__._,self__.fn1,meta42971__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42972){
var self__ = this;
var _42972__$1 = this;
return self__.meta42971;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42960_SHARP_){
return f1.call(null,(((p1__42960_SHARP_ == null))?null:self__.f.call(null,p1__42960_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42970.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42968","meta42968",283717985,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42967","cljs.core.async/t_cljs$core$async42967",-593222382,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42971","meta42971",-797592260,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42970";

cljs.core.async.t_cljs$core$async42970.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42970");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42970 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42970(map_LT___$1,f__$1,ch__$1,meta42968__$1,___$2,fn1__$1,meta42971){
return (new cljs.core.async.t_cljs$core$async42970(map_LT___$1,f__$1,ch__$1,meta42968__$1,___$2,fn1__$1,meta42971));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42970(self__.map_LT_,self__.f,self__.ch,self__.meta42968,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42968","meta42968",283717985,null)], null);
});

cljs.core.async.t_cljs$core$async42967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42967";

cljs.core.async.t_cljs$core$async42967.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42967");
});

cljs.core.async.__GT_t_cljs$core$async42967 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42967(map_LT___$1,f__$1,ch__$1,meta42968){
return (new cljs.core.async.t_cljs$core$async42967(map_LT___$1,f__$1,ch__$1,meta42968));
});

}

return (new cljs.core.async.t_cljs$core$async42967(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42976 = (function (map_GT_,f,ch,meta42977){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42977 = meta42977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42978,meta42977__$1){
var self__ = this;
var _42978__$1 = this;
return (new cljs.core.async.t_cljs$core$async42976(self__.map_GT_,self__.f,self__.ch,meta42977__$1));
});

cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42978){
var self__ = this;
var _42978__$1 = this;
return self__.meta42977;
});

cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42977","meta42977",-687508916,null)], null);
});

cljs.core.async.t_cljs$core$async42976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42976";

cljs.core.async.t_cljs$core$async42976.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42976");
});

cljs.core.async.__GT_t_cljs$core$async42976 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42976(map_GT___$1,f__$1,ch__$1,meta42977){
return (new cljs.core.async.t_cljs$core$async42976(map_GT___$1,f__$1,ch__$1,meta42977));
});

}

return (new cljs.core.async.t_cljs$core$async42976(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42982 = (function (filter_GT_,p,ch,meta42983){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42983 = meta42983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42984,meta42983__$1){
var self__ = this;
var _42984__$1 = this;
return (new cljs.core.async.t_cljs$core$async42982(self__.filter_GT_,self__.p,self__.ch,meta42983__$1));
});

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42984){
var self__ = this;
var _42984__$1 = this;
return self__.meta42983;
});

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42983","meta42983",455055022,null)], null);
});

cljs.core.async.t_cljs$core$async42982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42982";

cljs.core.async.t_cljs$core$async42982.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42982");
});

cljs.core.async.__GT_t_cljs$core$async42982 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42982(filter_GT___$1,p__$1,ch__$1,meta42983){
return (new cljs.core.async.t_cljs$core$async42982(filter_GT___$1,p__$1,ch__$1,meta42983));
});

}

return (new cljs.core.async.t_cljs$core$async42982(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42985 = [];
var len__37879__auto___43029 = arguments.length;
var i__37880__auto___43030 = (0);
while(true){
if((i__37880__auto___43030 < len__37879__auto___43029)){
args42985.push((arguments[i__37880__auto___43030]));

var G__43031 = (i__37880__auto___43030 + (1));
i__37880__auto___43030 = G__43031;
continue;
} else {
}
break;
}

var G__42987 = args42985.length;
switch (G__42987) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42985.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40731__auto___43033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___43033,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___43033,out){
return (function (state_43008){
var state_val_43009 = (state_43008[(1)]);
if((state_val_43009 === (7))){
var inst_43004 = (state_43008[(2)]);
var state_43008__$1 = state_43008;
var statearr_43010_43034 = state_43008__$1;
(statearr_43010_43034[(2)] = inst_43004);

(statearr_43010_43034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (1))){
var state_43008__$1 = state_43008;
var statearr_43011_43035 = state_43008__$1;
(statearr_43011_43035[(2)] = null);

(statearr_43011_43035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (4))){
var inst_42990 = (state_43008[(7)]);
var inst_42990__$1 = (state_43008[(2)]);
var inst_42991 = (inst_42990__$1 == null);
var state_43008__$1 = (function (){var statearr_43012 = state_43008;
(statearr_43012[(7)] = inst_42990__$1);

return statearr_43012;
})();
if(cljs.core.truth_(inst_42991)){
var statearr_43013_43036 = state_43008__$1;
(statearr_43013_43036[(1)] = (5));

} else {
var statearr_43014_43037 = state_43008__$1;
(statearr_43014_43037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (6))){
var inst_42990 = (state_43008[(7)]);
var inst_42995 = p.call(null,inst_42990);
var state_43008__$1 = state_43008;
if(cljs.core.truth_(inst_42995)){
var statearr_43015_43038 = state_43008__$1;
(statearr_43015_43038[(1)] = (8));

} else {
var statearr_43016_43039 = state_43008__$1;
(statearr_43016_43039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (3))){
var inst_43006 = (state_43008[(2)]);
var state_43008__$1 = state_43008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43008__$1,inst_43006);
} else {
if((state_val_43009 === (2))){
var state_43008__$1 = state_43008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43008__$1,(4),ch);
} else {
if((state_val_43009 === (11))){
var inst_42998 = (state_43008[(2)]);
var state_43008__$1 = state_43008;
var statearr_43017_43040 = state_43008__$1;
(statearr_43017_43040[(2)] = inst_42998);

(statearr_43017_43040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (9))){
var state_43008__$1 = state_43008;
var statearr_43018_43041 = state_43008__$1;
(statearr_43018_43041[(2)] = null);

(statearr_43018_43041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (5))){
var inst_42993 = cljs.core.async.close_BANG_.call(null,out);
var state_43008__$1 = state_43008;
var statearr_43019_43042 = state_43008__$1;
(statearr_43019_43042[(2)] = inst_42993);

(statearr_43019_43042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (10))){
var inst_43001 = (state_43008[(2)]);
var state_43008__$1 = (function (){var statearr_43020 = state_43008;
(statearr_43020[(8)] = inst_43001);

return statearr_43020;
})();
var statearr_43021_43043 = state_43008__$1;
(statearr_43021_43043[(2)] = null);

(statearr_43021_43043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (8))){
var inst_42990 = (state_43008[(7)]);
var state_43008__$1 = state_43008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43008__$1,(11),out,inst_42990);
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
});})(c__40731__auto___43033,out))
;
return ((function (switch__40619__auto__,c__40731__auto___43033,out){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_43025 = [null,null,null,null,null,null,null,null,null];
(statearr_43025[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_43025[(1)] = (1));

return statearr_43025;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_43008){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_43008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e43026){if((e43026 instanceof Object)){
var ex__40623__auto__ = e43026;
var statearr_43027_43044 = state_43008;
(statearr_43027_43044[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43045 = state_43008;
state_43008 = G__43045;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_43008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_43008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___43033,out))
})();
var state__40733__auto__ = (function (){var statearr_43028 = f__40732__auto__.call(null);
(statearr_43028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___43033);

return statearr_43028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___43033,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43046 = [];
var len__37879__auto___43049 = arguments.length;
var i__37880__auto___43050 = (0);
while(true){
if((i__37880__auto___43050 < len__37879__auto___43049)){
args43046.push((arguments[i__37880__auto___43050]));

var G__43051 = (i__37880__auto___43050 + (1));
i__37880__auto___43050 = G__43051;
continue;
} else {
}
break;
}

var G__43048 = args43046.length;
switch (G__43048) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43046.length)].join('')));

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
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__){
return (function (state_43218){
var state_val_43219 = (state_43218[(1)]);
if((state_val_43219 === (7))){
var inst_43214 = (state_43218[(2)]);
var state_43218__$1 = state_43218;
var statearr_43220_43261 = state_43218__$1;
(statearr_43220_43261[(2)] = inst_43214);

(statearr_43220_43261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (20))){
var inst_43184 = (state_43218[(7)]);
var inst_43195 = (state_43218[(2)]);
var inst_43196 = cljs.core.next.call(null,inst_43184);
var inst_43170 = inst_43196;
var inst_43171 = null;
var inst_43172 = (0);
var inst_43173 = (0);
var state_43218__$1 = (function (){var statearr_43221 = state_43218;
(statearr_43221[(8)] = inst_43173);

(statearr_43221[(9)] = inst_43172);

(statearr_43221[(10)] = inst_43171);

(statearr_43221[(11)] = inst_43195);

(statearr_43221[(12)] = inst_43170);

return statearr_43221;
})();
var statearr_43222_43262 = state_43218__$1;
(statearr_43222_43262[(2)] = null);

(statearr_43222_43262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (1))){
var state_43218__$1 = state_43218;
var statearr_43223_43263 = state_43218__$1;
(statearr_43223_43263[(2)] = null);

(statearr_43223_43263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (4))){
var inst_43159 = (state_43218[(13)]);
var inst_43159__$1 = (state_43218[(2)]);
var inst_43160 = (inst_43159__$1 == null);
var state_43218__$1 = (function (){var statearr_43224 = state_43218;
(statearr_43224[(13)] = inst_43159__$1);

return statearr_43224;
})();
if(cljs.core.truth_(inst_43160)){
var statearr_43225_43264 = state_43218__$1;
(statearr_43225_43264[(1)] = (5));

} else {
var statearr_43226_43265 = state_43218__$1;
(statearr_43226_43265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (15))){
var state_43218__$1 = state_43218;
var statearr_43230_43266 = state_43218__$1;
(statearr_43230_43266[(2)] = null);

(statearr_43230_43266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (21))){
var state_43218__$1 = state_43218;
var statearr_43231_43267 = state_43218__$1;
(statearr_43231_43267[(2)] = null);

(statearr_43231_43267[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (13))){
var inst_43173 = (state_43218[(8)]);
var inst_43172 = (state_43218[(9)]);
var inst_43171 = (state_43218[(10)]);
var inst_43170 = (state_43218[(12)]);
var inst_43180 = (state_43218[(2)]);
var inst_43181 = (inst_43173 + (1));
var tmp43227 = inst_43172;
var tmp43228 = inst_43171;
var tmp43229 = inst_43170;
var inst_43170__$1 = tmp43229;
var inst_43171__$1 = tmp43228;
var inst_43172__$1 = tmp43227;
var inst_43173__$1 = inst_43181;
var state_43218__$1 = (function (){var statearr_43232 = state_43218;
(statearr_43232[(8)] = inst_43173__$1);

(statearr_43232[(9)] = inst_43172__$1);

(statearr_43232[(10)] = inst_43171__$1);

(statearr_43232[(12)] = inst_43170__$1);

(statearr_43232[(14)] = inst_43180);

return statearr_43232;
})();
var statearr_43233_43268 = state_43218__$1;
(statearr_43233_43268[(2)] = null);

(statearr_43233_43268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (22))){
var state_43218__$1 = state_43218;
var statearr_43234_43269 = state_43218__$1;
(statearr_43234_43269[(2)] = null);

(statearr_43234_43269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (6))){
var inst_43159 = (state_43218[(13)]);
var inst_43168 = f.call(null,inst_43159);
var inst_43169 = cljs.core.seq.call(null,inst_43168);
var inst_43170 = inst_43169;
var inst_43171 = null;
var inst_43172 = (0);
var inst_43173 = (0);
var state_43218__$1 = (function (){var statearr_43235 = state_43218;
(statearr_43235[(8)] = inst_43173);

(statearr_43235[(9)] = inst_43172);

(statearr_43235[(10)] = inst_43171);

(statearr_43235[(12)] = inst_43170);

return statearr_43235;
})();
var statearr_43236_43270 = state_43218__$1;
(statearr_43236_43270[(2)] = null);

(statearr_43236_43270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (17))){
var inst_43184 = (state_43218[(7)]);
var inst_43188 = cljs.core.chunk_first.call(null,inst_43184);
var inst_43189 = cljs.core.chunk_rest.call(null,inst_43184);
var inst_43190 = cljs.core.count.call(null,inst_43188);
var inst_43170 = inst_43189;
var inst_43171 = inst_43188;
var inst_43172 = inst_43190;
var inst_43173 = (0);
var state_43218__$1 = (function (){var statearr_43237 = state_43218;
(statearr_43237[(8)] = inst_43173);

(statearr_43237[(9)] = inst_43172);

(statearr_43237[(10)] = inst_43171);

(statearr_43237[(12)] = inst_43170);

return statearr_43237;
})();
var statearr_43238_43271 = state_43218__$1;
(statearr_43238_43271[(2)] = null);

(statearr_43238_43271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (3))){
var inst_43216 = (state_43218[(2)]);
var state_43218__$1 = state_43218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43218__$1,inst_43216);
} else {
if((state_val_43219 === (12))){
var inst_43204 = (state_43218[(2)]);
var state_43218__$1 = state_43218;
var statearr_43239_43272 = state_43218__$1;
(statearr_43239_43272[(2)] = inst_43204);

(statearr_43239_43272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (2))){
var state_43218__$1 = state_43218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43218__$1,(4),in$);
} else {
if((state_val_43219 === (23))){
var inst_43212 = (state_43218[(2)]);
var state_43218__$1 = state_43218;
var statearr_43240_43273 = state_43218__$1;
(statearr_43240_43273[(2)] = inst_43212);

(statearr_43240_43273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (19))){
var inst_43199 = (state_43218[(2)]);
var state_43218__$1 = state_43218;
var statearr_43241_43274 = state_43218__$1;
(statearr_43241_43274[(2)] = inst_43199);

(statearr_43241_43274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (11))){
var inst_43184 = (state_43218[(7)]);
var inst_43170 = (state_43218[(12)]);
var inst_43184__$1 = cljs.core.seq.call(null,inst_43170);
var state_43218__$1 = (function (){var statearr_43242 = state_43218;
(statearr_43242[(7)] = inst_43184__$1);

return statearr_43242;
})();
if(inst_43184__$1){
var statearr_43243_43275 = state_43218__$1;
(statearr_43243_43275[(1)] = (14));

} else {
var statearr_43244_43276 = state_43218__$1;
(statearr_43244_43276[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (9))){
var inst_43206 = (state_43218[(2)]);
var inst_43207 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43218__$1 = (function (){var statearr_43245 = state_43218;
(statearr_43245[(15)] = inst_43206);

return statearr_43245;
})();
if(cljs.core.truth_(inst_43207)){
var statearr_43246_43277 = state_43218__$1;
(statearr_43246_43277[(1)] = (21));

} else {
var statearr_43247_43278 = state_43218__$1;
(statearr_43247_43278[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (5))){
var inst_43162 = cljs.core.async.close_BANG_.call(null,out);
var state_43218__$1 = state_43218;
var statearr_43248_43279 = state_43218__$1;
(statearr_43248_43279[(2)] = inst_43162);

(statearr_43248_43279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (14))){
var inst_43184 = (state_43218[(7)]);
var inst_43186 = cljs.core.chunked_seq_QMARK_.call(null,inst_43184);
var state_43218__$1 = state_43218;
if(inst_43186){
var statearr_43249_43280 = state_43218__$1;
(statearr_43249_43280[(1)] = (17));

} else {
var statearr_43250_43281 = state_43218__$1;
(statearr_43250_43281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (16))){
var inst_43202 = (state_43218[(2)]);
var state_43218__$1 = state_43218;
var statearr_43251_43282 = state_43218__$1;
(statearr_43251_43282[(2)] = inst_43202);

(statearr_43251_43282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43219 === (10))){
var inst_43173 = (state_43218[(8)]);
var inst_43171 = (state_43218[(10)]);
var inst_43178 = cljs.core._nth.call(null,inst_43171,inst_43173);
var state_43218__$1 = state_43218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43218__$1,(13),out,inst_43178);
} else {
if((state_val_43219 === (18))){
var inst_43184 = (state_43218[(7)]);
var inst_43193 = cljs.core.first.call(null,inst_43184);
var state_43218__$1 = state_43218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43218__$1,(20),out,inst_43193);
} else {
if((state_val_43219 === (8))){
var inst_43173 = (state_43218[(8)]);
var inst_43172 = (state_43218[(9)]);
var inst_43175 = (inst_43173 < inst_43172);
var inst_43176 = inst_43175;
var state_43218__$1 = state_43218;
if(cljs.core.truth_(inst_43176)){
var statearr_43252_43283 = state_43218__$1;
(statearr_43252_43283[(1)] = (10));

} else {
var statearr_43253_43284 = state_43218__$1;
(statearr_43253_43284[(1)] = (11));

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
});})(c__40731__auto__))
;
return ((function (switch__40619__auto__,c__40731__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40620__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40620__auto____0 = (function (){
var statearr_43257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43257[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40620__auto__);

(statearr_43257[(1)] = (1));

return statearr_43257;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40620__auto____1 = (function (state_43218){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_43218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e43258){if((e43258 instanceof Object)){
var ex__40623__auto__ = e43258;
var statearr_43259_43285 = state_43218;
(statearr_43259_43285[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43286 = state_43218;
state_43218 = G__43286;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40620__auto__ = function(state_43218){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40620__auto____1.call(this,state_43218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40620__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40620__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__))
})();
var state__40733__auto__ = (function (){var statearr_43260 = f__40732__auto__.call(null);
(statearr_43260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_43260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__))
);

return c__40731__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43287 = [];
var len__37879__auto___43290 = arguments.length;
var i__37880__auto___43291 = (0);
while(true){
if((i__37880__auto___43291 < len__37879__auto___43290)){
args43287.push((arguments[i__37880__auto___43291]));

var G__43292 = (i__37880__auto___43291 + (1));
i__37880__auto___43291 = G__43292;
continue;
} else {
}
break;
}

var G__43289 = args43287.length;
switch (G__43289) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43287.length)].join('')));

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
var args43294 = [];
var len__37879__auto___43297 = arguments.length;
var i__37880__auto___43298 = (0);
while(true){
if((i__37880__auto___43298 < len__37879__auto___43297)){
args43294.push((arguments[i__37880__auto___43298]));

var G__43299 = (i__37880__auto___43298 + (1));
i__37880__auto___43298 = G__43299;
continue;
} else {
}
break;
}

var G__43296 = args43294.length;
switch (G__43296) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43294.length)].join('')));

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
var args43301 = [];
var len__37879__auto___43352 = arguments.length;
var i__37880__auto___43353 = (0);
while(true){
if((i__37880__auto___43353 < len__37879__auto___43352)){
args43301.push((arguments[i__37880__auto___43353]));

var G__43354 = (i__37880__auto___43353 + (1));
i__37880__auto___43353 = G__43354;
continue;
} else {
}
break;
}

var G__43303 = args43301.length;
switch (G__43303) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43301.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40731__auto___43356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___43356,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___43356,out){
return (function (state_43327){
var state_val_43328 = (state_43327[(1)]);
if((state_val_43328 === (7))){
var inst_43322 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43329_43357 = state_43327__$1;
(statearr_43329_43357[(2)] = inst_43322);

(statearr_43329_43357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (1))){
var inst_43304 = null;
var state_43327__$1 = (function (){var statearr_43330 = state_43327;
(statearr_43330[(7)] = inst_43304);

return statearr_43330;
})();
var statearr_43331_43358 = state_43327__$1;
(statearr_43331_43358[(2)] = null);

(statearr_43331_43358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (4))){
var inst_43307 = (state_43327[(8)]);
var inst_43307__$1 = (state_43327[(2)]);
var inst_43308 = (inst_43307__$1 == null);
var inst_43309 = cljs.core.not.call(null,inst_43308);
var state_43327__$1 = (function (){var statearr_43332 = state_43327;
(statearr_43332[(8)] = inst_43307__$1);

return statearr_43332;
})();
if(inst_43309){
var statearr_43333_43359 = state_43327__$1;
(statearr_43333_43359[(1)] = (5));

} else {
var statearr_43334_43360 = state_43327__$1;
(statearr_43334_43360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (6))){
var state_43327__$1 = state_43327;
var statearr_43335_43361 = state_43327__$1;
(statearr_43335_43361[(2)] = null);

(statearr_43335_43361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (3))){
var inst_43324 = (state_43327[(2)]);
var inst_43325 = cljs.core.async.close_BANG_.call(null,out);
var state_43327__$1 = (function (){var statearr_43336 = state_43327;
(statearr_43336[(9)] = inst_43324);

return statearr_43336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43327__$1,inst_43325);
} else {
if((state_val_43328 === (2))){
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(4),ch);
} else {
if((state_val_43328 === (11))){
var inst_43307 = (state_43327[(8)]);
var inst_43316 = (state_43327[(2)]);
var inst_43304 = inst_43307;
var state_43327__$1 = (function (){var statearr_43337 = state_43327;
(statearr_43337[(7)] = inst_43304);

(statearr_43337[(10)] = inst_43316);

return statearr_43337;
})();
var statearr_43338_43362 = state_43327__$1;
(statearr_43338_43362[(2)] = null);

(statearr_43338_43362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (9))){
var inst_43307 = (state_43327[(8)]);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43327__$1,(11),out,inst_43307);
} else {
if((state_val_43328 === (5))){
var inst_43304 = (state_43327[(7)]);
var inst_43307 = (state_43327[(8)]);
var inst_43311 = cljs.core._EQ_.call(null,inst_43307,inst_43304);
var state_43327__$1 = state_43327;
if(inst_43311){
var statearr_43340_43363 = state_43327__$1;
(statearr_43340_43363[(1)] = (8));

} else {
var statearr_43341_43364 = state_43327__$1;
(statearr_43341_43364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (10))){
var inst_43319 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43342_43365 = state_43327__$1;
(statearr_43342_43365[(2)] = inst_43319);

(statearr_43342_43365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (8))){
var inst_43304 = (state_43327[(7)]);
var tmp43339 = inst_43304;
var inst_43304__$1 = tmp43339;
var state_43327__$1 = (function (){var statearr_43343 = state_43327;
(statearr_43343[(7)] = inst_43304__$1);

return statearr_43343;
})();
var statearr_43344_43366 = state_43327__$1;
(statearr_43344_43366[(2)] = null);

(statearr_43344_43366[(1)] = (2));


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
});})(c__40731__auto___43356,out))
;
return ((function (switch__40619__auto__,c__40731__auto___43356,out){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_43348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43348[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_43348[(1)] = (1));

return statearr_43348;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_43327){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_43327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e43349){if((e43349 instanceof Object)){
var ex__40623__auto__ = e43349;
var statearr_43350_43367 = state_43327;
(statearr_43350_43367[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43368 = state_43327;
state_43327 = G__43368;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_43327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_43327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___43356,out))
})();
var state__40733__auto__ = (function (){var statearr_43351 = f__40732__auto__.call(null);
(statearr_43351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___43356);

return statearr_43351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___43356,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43369 = [];
var len__37879__auto___43439 = arguments.length;
var i__37880__auto___43440 = (0);
while(true){
if((i__37880__auto___43440 < len__37879__auto___43439)){
args43369.push((arguments[i__37880__auto___43440]));

var G__43441 = (i__37880__auto___43440 + (1));
i__37880__auto___43440 = G__43441;
continue;
} else {
}
break;
}

var G__43371 = args43369.length;
switch (G__43371) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43369.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40731__auto___43443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___43443,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___43443,out){
return (function (state_43409){
var state_val_43410 = (state_43409[(1)]);
if((state_val_43410 === (7))){
var inst_43405 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43411_43444 = state_43409__$1;
(statearr_43411_43444[(2)] = inst_43405);

(statearr_43411_43444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (1))){
var inst_43372 = (new Array(n));
var inst_43373 = inst_43372;
var inst_43374 = (0);
var state_43409__$1 = (function (){var statearr_43412 = state_43409;
(statearr_43412[(7)] = inst_43374);

(statearr_43412[(8)] = inst_43373);

return statearr_43412;
})();
var statearr_43413_43445 = state_43409__$1;
(statearr_43413_43445[(2)] = null);

(statearr_43413_43445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (4))){
var inst_43377 = (state_43409[(9)]);
var inst_43377__$1 = (state_43409[(2)]);
var inst_43378 = (inst_43377__$1 == null);
var inst_43379 = cljs.core.not.call(null,inst_43378);
var state_43409__$1 = (function (){var statearr_43414 = state_43409;
(statearr_43414[(9)] = inst_43377__$1);

return statearr_43414;
})();
if(inst_43379){
var statearr_43415_43446 = state_43409__$1;
(statearr_43415_43446[(1)] = (5));

} else {
var statearr_43416_43447 = state_43409__$1;
(statearr_43416_43447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (15))){
var inst_43399 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43417_43448 = state_43409__$1;
(statearr_43417_43448[(2)] = inst_43399);

(statearr_43417_43448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (13))){
var state_43409__$1 = state_43409;
var statearr_43418_43449 = state_43409__$1;
(statearr_43418_43449[(2)] = null);

(statearr_43418_43449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (6))){
var inst_43374 = (state_43409[(7)]);
var inst_43395 = (inst_43374 > (0));
var state_43409__$1 = state_43409;
if(cljs.core.truth_(inst_43395)){
var statearr_43419_43450 = state_43409__$1;
(statearr_43419_43450[(1)] = (12));

} else {
var statearr_43420_43451 = state_43409__$1;
(statearr_43420_43451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (3))){
var inst_43407 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43409__$1,inst_43407);
} else {
if((state_val_43410 === (12))){
var inst_43373 = (state_43409[(8)]);
var inst_43397 = cljs.core.vec.call(null,inst_43373);
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43409__$1,(15),out,inst_43397);
} else {
if((state_val_43410 === (2))){
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43409__$1,(4),ch);
} else {
if((state_val_43410 === (11))){
var inst_43389 = (state_43409[(2)]);
var inst_43390 = (new Array(n));
var inst_43373 = inst_43390;
var inst_43374 = (0);
var state_43409__$1 = (function (){var statearr_43421 = state_43409;
(statearr_43421[(10)] = inst_43389);

(statearr_43421[(7)] = inst_43374);

(statearr_43421[(8)] = inst_43373);

return statearr_43421;
})();
var statearr_43422_43452 = state_43409__$1;
(statearr_43422_43452[(2)] = null);

(statearr_43422_43452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (9))){
var inst_43373 = (state_43409[(8)]);
var inst_43387 = cljs.core.vec.call(null,inst_43373);
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43409__$1,(11),out,inst_43387);
} else {
if((state_val_43410 === (5))){
var inst_43377 = (state_43409[(9)]);
var inst_43374 = (state_43409[(7)]);
var inst_43382 = (state_43409[(11)]);
var inst_43373 = (state_43409[(8)]);
var inst_43381 = (inst_43373[inst_43374] = inst_43377);
var inst_43382__$1 = (inst_43374 + (1));
var inst_43383 = (inst_43382__$1 < n);
var state_43409__$1 = (function (){var statearr_43423 = state_43409;
(statearr_43423[(11)] = inst_43382__$1);

(statearr_43423[(12)] = inst_43381);

return statearr_43423;
})();
if(cljs.core.truth_(inst_43383)){
var statearr_43424_43453 = state_43409__$1;
(statearr_43424_43453[(1)] = (8));

} else {
var statearr_43425_43454 = state_43409__$1;
(statearr_43425_43454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (14))){
var inst_43402 = (state_43409[(2)]);
var inst_43403 = cljs.core.async.close_BANG_.call(null,out);
var state_43409__$1 = (function (){var statearr_43427 = state_43409;
(statearr_43427[(13)] = inst_43402);

return statearr_43427;
})();
var statearr_43428_43455 = state_43409__$1;
(statearr_43428_43455[(2)] = inst_43403);

(statearr_43428_43455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (10))){
var inst_43393 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43429_43456 = state_43409__$1;
(statearr_43429_43456[(2)] = inst_43393);

(statearr_43429_43456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (8))){
var inst_43382 = (state_43409[(11)]);
var inst_43373 = (state_43409[(8)]);
var tmp43426 = inst_43373;
var inst_43373__$1 = tmp43426;
var inst_43374 = inst_43382;
var state_43409__$1 = (function (){var statearr_43430 = state_43409;
(statearr_43430[(7)] = inst_43374);

(statearr_43430[(8)] = inst_43373__$1);

return statearr_43430;
})();
var statearr_43431_43457 = state_43409__$1;
(statearr_43431_43457[(2)] = null);

(statearr_43431_43457[(1)] = (2));


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
});})(c__40731__auto___43443,out))
;
return ((function (switch__40619__auto__,c__40731__auto___43443,out){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_43435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43435[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_43435[(1)] = (1));

return statearr_43435;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_43409){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_43409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e43436){if((e43436 instanceof Object)){
var ex__40623__auto__ = e43436;
var statearr_43437_43458 = state_43409;
(statearr_43437_43458[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43459 = state_43409;
state_43409 = G__43459;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_43409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_43409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___43443,out))
})();
var state__40733__auto__ = (function (){var statearr_43438 = f__40732__auto__.call(null);
(statearr_43438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___43443);

return statearr_43438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___43443,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43460 = [];
var len__37879__auto___43534 = arguments.length;
var i__37880__auto___43535 = (0);
while(true){
if((i__37880__auto___43535 < len__37879__auto___43534)){
args43460.push((arguments[i__37880__auto___43535]));

var G__43536 = (i__37880__auto___43535 + (1));
i__37880__auto___43535 = G__43536;
continue;
} else {
}
break;
}

var G__43462 = args43460.length;
switch (G__43462) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43460.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40731__auto___43538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___43538,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___43538,out){
return (function (state_43504){
var state_val_43505 = (state_43504[(1)]);
if((state_val_43505 === (7))){
var inst_43500 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
var statearr_43506_43539 = state_43504__$1;
(statearr_43506_43539[(2)] = inst_43500);

(statearr_43506_43539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (1))){
var inst_43463 = [];
var inst_43464 = inst_43463;
var inst_43465 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43504__$1 = (function (){var statearr_43507 = state_43504;
(statearr_43507[(7)] = inst_43465);

(statearr_43507[(8)] = inst_43464);

return statearr_43507;
})();
var statearr_43508_43540 = state_43504__$1;
(statearr_43508_43540[(2)] = null);

(statearr_43508_43540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (4))){
var inst_43468 = (state_43504[(9)]);
var inst_43468__$1 = (state_43504[(2)]);
var inst_43469 = (inst_43468__$1 == null);
var inst_43470 = cljs.core.not.call(null,inst_43469);
var state_43504__$1 = (function (){var statearr_43509 = state_43504;
(statearr_43509[(9)] = inst_43468__$1);

return statearr_43509;
})();
if(inst_43470){
var statearr_43510_43541 = state_43504__$1;
(statearr_43510_43541[(1)] = (5));

} else {
var statearr_43511_43542 = state_43504__$1;
(statearr_43511_43542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (15))){
var inst_43494 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
var statearr_43512_43543 = state_43504__$1;
(statearr_43512_43543[(2)] = inst_43494);

(statearr_43512_43543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (13))){
var state_43504__$1 = state_43504;
var statearr_43513_43544 = state_43504__$1;
(statearr_43513_43544[(2)] = null);

(statearr_43513_43544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (6))){
var inst_43464 = (state_43504[(8)]);
var inst_43489 = inst_43464.length;
var inst_43490 = (inst_43489 > (0));
var state_43504__$1 = state_43504;
if(cljs.core.truth_(inst_43490)){
var statearr_43514_43545 = state_43504__$1;
(statearr_43514_43545[(1)] = (12));

} else {
var statearr_43515_43546 = state_43504__$1;
(statearr_43515_43546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (3))){
var inst_43502 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43504__$1,inst_43502);
} else {
if((state_val_43505 === (12))){
var inst_43464 = (state_43504[(8)]);
var inst_43492 = cljs.core.vec.call(null,inst_43464);
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43504__$1,(15),out,inst_43492);
} else {
if((state_val_43505 === (2))){
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43504__$1,(4),ch);
} else {
if((state_val_43505 === (11))){
var inst_43472 = (state_43504[(10)]);
var inst_43468 = (state_43504[(9)]);
var inst_43482 = (state_43504[(2)]);
var inst_43483 = [];
var inst_43484 = inst_43483.push(inst_43468);
var inst_43464 = inst_43483;
var inst_43465 = inst_43472;
var state_43504__$1 = (function (){var statearr_43516 = state_43504;
(statearr_43516[(7)] = inst_43465);

(statearr_43516[(8)] = inst_43464);

(statearr_43516[(11)] = inst_43484);

(statearr_43516[(12)] = inst_43482);

return statearr_43516;
})();
var statearr_43517_43547 = state_43504__$1;
(statearr_43517_43547[(2)] = null);

(statearr_43517_43547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (9))){
var inst_43464 = (state_43504[(8)]);
var inst_43480 = cljs.core.vec.call(null,inst_43464);
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43504__$1,(11),out,inst_43480);
} else {
if((state_val_43505 === (5))){
var inst_43465 = (state_43504[(7)]);
var inst_43472 = (state_43504[(10)]);
var inst_43468 = (state_43504[(9)]);
var inst_43472__$1 = f.call(null,inst_43468);
var inst_43473 = cljs.core._EQ_.call(null,inst_43472__$1,inst_43465);
var inst_43474 = cljs.core.keyword_identical_QMARK_.call(null,inst_43465,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43475 = (inst_43473) || (inst_43474);
var state_43504__$1 = (function (){var statearr_43518 = state_43504;
(statearr_43518[(10)] = inst_43472__$1);

return statearr_43518;
})();
if(cljs.core.truth_(inst_43475)){
var statearr_43519_43548 = state_43504__$1;
(statearr_43519_43548[(1)] = (8));

} else {
var statearr_43520_43549 = state_43504__$1;
(statearr_43520_43549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (14))){
var inst_43497 = (state_43504[(2)]);
var inst_43498 = cljs.core.async.close_BANG_.call(null,out);
var state_43504__$1 = (function (){var statearr_43522 = state_43504;
(statearr_43522[(13)] = inst_43497);

return statearr_43522;
})();
var statearr_43523_43550 = state_43504__$1;
(statearr_43523_43550[(2)] = inst_43498);

(statearr_43523_43550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (10))){
var inst_43487 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
var statearr_43524_43551 = state_43504__$1;
(statearr_43524_43551[(2)] = inst_43487);

(statearr_43524_43551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (8))){
var inst_43472 = (state_43504[(10)]);
var inst_43464 = (state_43504[(8)]);
var inst_43468 = (state_43504[(9)]);
var inst_43477 = inst_43464.push(inst_43468);
var tmp43521 = inst_43464;
var inst_43464__$1 = tmp43521;
var inst_43465 = inst_43472;
var state_43504__$1 = (function (){var statearr_43525 = state_43504;
(statearr_43525[(7)] = inst_43465);

(statearr_43525[(14)] = inst_43477);

(statearr_43525[(8)] = inst_43464__$1);

return statearr_43525;
})();
var statearr_43526_43552 = state_43504__$1;
(statearr_43526_43552[(2)] = null);

(statearr_43526_43552[(1)] = (2));


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
});})(c__40731__auto___43538,out))
;
return ((function (switch__40619__auto__,c__40731__auto___43538,out){
return (function() {
var cljs$core$async$state_machine__40620__auto__ = null;
var cljs$core$async$state_machine__40620__auto____0 = (function (){
var statearr_43530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43530[(0)] = cljs$core$async$state_machine__40620__auto__);

(statearr_43530[(1)] = (1));

return statearr_43530;
});
var cljs$core$async$state_machine__40620__auto____1 = (function (state_43504){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_43504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e43531){if((e43531 instanceof Object)){
var ex__40623__auto__ = e43531;
var statearr_43532_43553 = state_43504;
(statearr_43532_43553[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43554 = state_43504;
state_43504 = G__43554;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
cljs$core$async$state_machine__40620__auto__ = function(state_43504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40620__auto____1.call(this,state_43504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40620__auto____0;
cljs$core$async$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40620__auto____1;
return cljs$core$async$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___43538,out))
})();
var state__40733__auto__ = (function (){var statearr_43533 = f__40732__auto__.call(null);
(statearr_43533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___43538);

return statearr_43533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___43538,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map