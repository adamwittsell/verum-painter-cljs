// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24543 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24543 = (function (fn_handler,f,meta24544){
this.fn_handler = fn_handler;
this.f = f;
this.meta24544 = meta24544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24545,meta24544__$1){
var self__ = this;
var _24545__$1 = this;
return (new cljs.core.async.t24543(self__.fn_handler,self__.f,meta24544__$1));
});

cljs.core.async.t24543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24545){
var self__ = this;
var _24545__$1 = this;
return self__.meta24544;
});

cljs.core.async.t24543.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24544","meta24544",-1535536471,null)], null);
});

cljs.core.async.t24543.cljs$lang$type = true;

cljs.core.async.t24543.cljs$lang$ctorStr = "cljs.core.async/t24543";

cljs.core.async.t24543.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t24543");
});

cljs.core.async.__GT_t24543 = (function cljs$core$async$fn_handler_$___GT_t24543(fn_handler__$1,f__$1,meta24544){
return (new cljs.core.async.t24543(fn_handler__$1,f__$1,meta24544));
});

}

return (new cljs.core.async.t24543(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24547 = buff;
if(G__24547){
var bit__16782__auto__ = null;
if(cljs.core.truth_((function (){var or__16108__auto__ = bit__16782__auto__;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return G__24547.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24547.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24547);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24547);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__24549 = arguments.length;
switch (G__24549) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__24552 = arguments.length;
switch (G__24552) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24554 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24554);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24554,ret){
return (function (){
return fn1.call(null,val_24554);
});})(val_24554,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__24556 = arguments.length;
switch (G__24556) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__16993__auto___24558 = n;
var x_24559 = (0);
while(true){
if((x_24559 < n__16993__auto___24558)){
(a[x_24559] = (0));

var G__24560 = (x_24559 + (1));
x_24559 = G__24560;
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

var G__24561 = (i + (1));
i = G__24561;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24565 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24565 = (function (alt_flag,flag,meta24566){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24566 = meta24566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24567,meta24566__$1){
var self__ = this;
var _24567__$1 = this;
return (new cljs.core.async.t24565(self__.alt_flag,self__.flag,meta24566__$1));
});})(flag))
;

cljs.core.async.t24565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24567){
var self__ = this;
var _24567__$1 = this;
return self__.meta24566;
});})(flag))
;

cljs.core.async.t24565.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24565.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24566","meta24566",1913274275,null)], null);
});})(flag))
;

cljs.core.async.t24565.cljs$lang$type = true;

cljs.core.async.t24565.cljs$lang$ctorStr = "cljs.core.async/t24565";

cljs.core.async.t24565.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t24565");
});})(flag))
;

cljs.core.async.__GT_t24565 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24565(alt_flag__$1,flag__$1,meta24566){
return (new cljs.core.async.t24565(alt_flag__$1,flag__$1,meta24566));
});})(flag))
;

}

return (new cljs.core.async.t24565(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24571 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24571 = (function (alt_handler,flag,cb,meta24572){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24572 = meta24572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24573,meta24572__$1){
var self__ = this;
var _24573__$1 = this;
return (new cljs.core.async.t24571(self__.alt_handler,self__.flag,self__.cb,meta24572__$1));
});

cljs.core.async.t24571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24573){
var self__ = this;
var _24573__$1 = this;
return self__.meta24572;
});

cljs.core.async.t24571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24572","meta24572",-384137547,null)], null);
});

cljs.core.async.t24571.cljs$lang$type = true;

cljs.core.async.t24571.cljs$lang$ctorStr = "cljs.core.async/t24571";

cljs.core.async.t24571.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t24571");
});

cljs.core.async.__GT_t24571 = (function cljs$core$async$alt_handler_$___GT_t24571(alt_handler__$1,flag__$1,cb__$1,meta24572){
return (new cljs.core.async.t24571(alt_handler__$1,flag__$1,cb__$1,meta24572));
});

}

return (new cljs.core.async.t24571(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24574_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24574_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24575_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16108__auto__ = wport;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24576 = (i + (1));
i = G__24576;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16108__auto__ = ret;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16096__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16096__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16096__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17148__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17148__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24579){
var map__24580 = p__24579;
var map__24580__$1 = ((cljs.core.seq_QMARK_.call(null,map__24580))?cljs.core.apply.call(null,cljs.core.hash_map,map__24580):map__24580);
var opts = map__24580__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24577){
var G__24578 = cljs.core.first.call(null,seq24577);
var seq24577__$1 = cljs.core.next.call(null,seq24577);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24578,seq24577__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__24582 = arguments.length;
switch (G__24582) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19118__auto___24631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___24631){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___24631){
return (function (state_24606){
var state_val_24607 = (state_24606[(1)]);
if((state_val_24607 === (7))){
var inst_24602 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
var statearr_24608_24632 = state_24606__$1;
(statearr_24608_24632[(2)] = inst_24602);

(statearr_24608_24632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (1))){
var state_24606__$1 = state_24606;
var statearr_24609_24633 = state_24606__$1;
(statearr_24609_24633[(2)] = null);

(statearr_24609_24633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (4))){
var inst_24585 = (state_24606[(7)]);
var inst_24585__$1 = (state_24606[(2)]);
var inst_24586 = (inst_24585__$1 == null);
var state_24606__$1 = (function (){var statearr_24610 = state_24606;
(statearr_24610[(7)] = inst_24585__$1);

return statearr_24610;
})();
if(cljs.core.truth_(inst_24586)){
var statearr_24611_24634 = state_24606__$1;
(statearr_24611_24634[(1)] = (5));

} else {
var statearr_24612_24635 = state_24606__$1;
(statearr_24612_24635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (13))){
var state_24606__$1 = state_24606;
var statearr_24613_24636 = state_24606__$1;
(statearr_24613_24636[(2)] = null);

(statearr_24613_24636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (6))){
var inst_24585 = (state_24606[(7)]);
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24606__$1,(11),to,inst_24585);
} else {
if((state_val_24607 === (3))){
var inst_24604 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24606__$1,inst_24604);
} else {
if((state_val_24607 === (12))){
var state_24606__$1 = state_24606;
var statearr_24614_24637 = state_24606__$1;
(statearr_24614_24637[(2)] = null);

(statearr_24614_24637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (2))){
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24606__$1,(4),from);
} else {
if((state_val_24607 === (11))){
var inst_24595 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
if(cljs.core.truth_(inst_24595)){
var statearr_24615_24638 = state_24606__$1;
(statearr_24615_24638[(1)] = (12));

} else {
var statearr_24616_24639 = state_24606__$1;
(statearr_24616_24639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (9))){
var state_24606__$1 = state_24606;
var statearr_24617_24640 = state_24606__$1;
(statearr_24617_24640[(2)] = null);

(statearr_24617_24640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (5))){
var state_24606__$1 = state_24606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24618_24641 = state_24606__$1;
(statearr_24618_24641[(1)] = (8));

} else {
var statearr_24619_24642 = state_24606__$1;
(statearr_24619_24642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (14))){
var inst_24600 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
var statearr_24620_24643 = state_24606__$1;
(statearr_24620_24643[(2)] = inst_24600);

(statearr_24620_24643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (10))){
var inst_24592 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
var statearr_24621_24644 = state_24606__$1;
(statearr_24621_24644[(2)] = inst_24592);

(statearr_24621_24644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (8))){
var inst_24589 = cljs.core.async.close_BANG_.call(null,to);
var state_24606__$1 = state_24606;
var statearr_24622_24645 = state_24606__$1;
(statearr_24622_24645[(2)] = inst_24589);

(statearr_24622_24645[(1)] = (10));


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
});})(c__19118__auto___24631))
;
return ((function (switch__19056__auto__,c__19118__auto___24631){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_24626 = [null,null,null,null,null,null,null,null];
(statearr_24626[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_24626[(1)] = (1));

return statearr_24626;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_24606){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24627){if((e24627 instanceof Object)){
var ex__19060__auto__ = e24627;
var statearr_24628_24646 = state_24606;
(statearr_24628_24646[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24647 = state_24606;
state_24606 = G__24647;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_24606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_24606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___24631))
})();
var state__19120__auto__ = (function (){var statearr_24629 = f__19119__auto__.call(null);
(statearr_24629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___24631);

return statearr_24629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___24631))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24831){
var vec__24832 = p__24831;
var v = cljs.core.nth.call(null,vec__24832,(0),null);
var p = cljs.core.nth.call(null,vec__24832,(1),null);
var job = vec__24832;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19118__auto___25014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25014,res,vec__24832,v,p,job,jobs,results){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25014,res,vec__24832,v,p,job,jobs,results){
return (function (state_24837){
var state_val_24838 = (state_24837[(1)]);
if((state_val_24838 === (1))){
var state_24837__$1 = state_24837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24837__$1,(2),res,v);
} else {
if((state_val_24838 === (2))){
var inst_24834 = (state_24837[(2)]);
var inst_24835 = cljs.core.async.close_BANG_.call(null,res);
var state_24837__$1 = (function (){var statearr_24839 = state_24837;
(statearr_24839[(7)] = inst_24834);

return statearr_24839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24837__$1,inst_24835);
} else {
return null;
}
}
});})(c__19118__auto___25014,res,vec__24832,v,p,job,jobs,results))
;
return ((function (switch__19056__auto__,c__19118__auto___25014,res,vec__24832,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24843 = [null,null,null,null,null,null,null,null];
(statearr_24843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24843[(1)] = (1));

return statearr_24843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24837){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24844){if((e24844 instanceof Object)){
var ex__19060__auto__ = e24844;
var statearr_24845_25015 = state_24837;
(statearr_24845_25015[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25016 = state_24837;
state_24837 = G__25016;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25014,res,vec__24832,v,p,job,jobs,results))
})();
var state__19120__auto__ = (function (){var statearr_24846 = f__19119__auto__.call(null);
(statearr_24846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25014);

return statearr_24846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25014,res,vec__24832,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24847){
var vec__24848 = p__24847;
var v = cljs.core.nth.call(null,vec__24848,(0),null);
var p = cljs.core.nth.call(null,vec__24848,(1),null);
var job = vec__24848;
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
var n__16993__auto___25017 = n;
var __25018 = (0);
while(true){
if((__25018 < n__16993__auto___25017)){
var G__24849_25019 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24849_25019) {
case "compute":
var c__19118__auto___25021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25018,c__19118__auto___25021,G__24849_25019,n__16993__auto___25017,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (__25018,c__19118__auto___25021,G__24849_25019,n__16993__auto___25017,jobs,results,process,async){
return (function (state_24862){
var state_val_24863 = (state_24862[(1)]);
if((state_val_24863 === (1))){
var state_24862__$1 = state_24862;
var statearr_24864_25022 = state_24862__$1;
(statearr_24864_25022[(2)] = null);

(statearr_24864_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (2))){
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24862__$1,(4),jobs);
} else {
if((state_val_24863 === (3))){
var inst_24860 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24862__$1,inst_24860);
} else {
if((state_val_24863 === (4))){
var inst_24852 = (state_24862[(2)]);
var inst_24853 = process.call(null,inst_24852);
var state_24862__$1 = state_24862;
if(cljs.core.truth_(inst_24853)){
var statearr_24865_25023 = state_24862__$1;
(statearr_24865_25023[(1)] = (5));

} else {
var statearr_24866_25024 = state_24862__$1;
(statearr_24866_25024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (5))){
var state_24862__$1 = state_24862;
var statearr_24867_25025 = state_24862__$1;
(statearr_24867_25025[(2)] = null);

(statearr_24867_25025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (6))){
var state_24862__$1 = state_24862;
var statearr_24868_25026 = state_24862__$1;
(statearr_24868_25026[(2)] = null);

(statearr_24868_25026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (7))){
var inst_24858 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
var statearr_24869_25027 = state_24862__$1;
(statearr_24869_25027[(2)] = inst_24858);

(statearr_24869_25027[(1)] = (3));


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
});})(__25018,c__19118__auto___25021,G__24849_25019,n__16993__auto___25017,jobs,results,process,async))
;
return ((function (__25018,switch__19056__auto__,c__19118__auto___25021,G__24849_25019,n__16993__auto___25017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24873 = [null,null,null,null,null,null,null];
(statearr_24873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24873[(1)] = (1));

return statearr_24873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24862){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24874){if((e24874 instanceof Object)){
var ex__19060__auto__ = e24874;
var statearr_24875_25028 = state_24862;
(statearr_24875_25028[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25029 = state_24862;
state_24862 = G__25029;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(__25018,switch__19056__auto__,c__19118__auto___25021,G__24849_25019,n__16993__auto___25017,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_24876 = f__19119__auto__.call(null);
(statearr_24876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25021);

return statearr_24876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(__25018,c__19118__auto___25021,G__24849_25019,n__16993__auto___25017,jobs,results,process,async))
);


break;
case "async":
var c__19118__auto___25030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25018,c__19118__auto___25030,G__24849_25019,n__16993__auto___25017,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (__25018,c__19118__auto___25030,G__24849_25019,n__16993__auto___25017,jobs,results,process,async){
return (function (state_24889){
var state_val_24890 = (state_24889[(1)]);
if((state_val_24890 === (1))){
var state_24889__$1 = state_24889;
var statearr_24891_25031 = state_24889__$1;
(statearr_24891_25031[(2)] = null);

(statearr_24891_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (2))){
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24889__$1,(4),jobs);
} else {
if((state_val_24890 === (3))){
var inst_24887 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24889__$1,inst_24887);
} else {
if((state_val_24890 === (4))){
var inst_24879 = (state_24889[(2)]);
var inst_24880 = async.call(null,inst_24879);
var state_24889__$1 = state_24889;
if(cljs.core.truth_(inst_24880)){
var statearr_24892_25032 = state_24889__$1;
(statearr_24892_25032[(1)] = (5));

} else {
var statearr_24893_25033 = state_24889__$1;
(statearr_24893_25033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (5))){
var state_24889__$1 = state_24889;
var statearr_24894_25034 = state_24889__$1;
(statearr_24894_25034[(2)] = null);

(statearr_24894_25034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (6))){
var state_24889__$1 = state_24889;
var statearr_24895_25035 = state_24889__$1;
(statearr_24895_25035[(2)] = null);

(statearr_24895_25035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (7))){
var inst_24885 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24896_25036 = state_24889__$1;
(statearr_24896_25036[(2)] = inst_24885);

(statearr_24896_25036[(1)] = (3));


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
});})(__25018,c__19118__auto___25030,G__24849_25019,n__16993__auto___25017,jobs,results,process,async))
;
return ((function (__25018,switch__19056__auto__,c__19118__auto___25030,G__24849_25019,n__16993__auto___25017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24900 = [null,null,null,null,null,null,null];
(statearr_24900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24900[(1)] = (1));

return statearr_24900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24889){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24901){if((e24901 instanceof Object)){
var ex__19060__auto__ = e24901;
var statearr_24902_25037 = state_24889;
(statearr_24902_25037[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25038 = state_24889;
state_24889 = G__25038;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(__25018,switch__19056__auto__,c__19118__auto___25030,G__24849_25019,n__16993__auto___25017,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_24903 = f__19119__auto__.call(null);
(statearr_24903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25030);

return statearr_24903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(__25018,c__19118__auto___25030,G__24849_25019,n__16993__auto___25017,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25039 = (__25018 + (1));
__25018 = G__25039;
continue;
} else {
}
break;
}

var c__19118__auto___25040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25040,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25040,jobs,results,process,async){
return (function (state_24925){
var state_val_24926 = (state_24925[(1)]);
if((state_val_24926 === (1))){
var state_24925__$1 = state_24925;
var statearr_24927_25041 = state_24925__$1;
(statearr_24927_25041[(2)] = null);

(statearr_24927_25041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (2))){
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(4),from);
} else {
if((state_val_24926 === (3))){
var inst_24923 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else {
if((state_val_24926 === (4))){
var inst_24906 = (state_24925[(7)]);
var inst_24906__$1 = (state_24925[(2)]);
var inst_24907 = (inst_24906__$1 == null);
var state_24925__$1 = (function (){var statearr_24928 = state_24925;
(statearr_24928[(7)] = inst_24906__$1);

return statearr_24928;
})();
if(cljs.core.truth_(inst_24907)){
var statearr_24929_25042 = state_24925__$1;
(statearr_24929_25042[(1)] = (5));

} else {
var statearr_24930_25043 = state_24925__$1;
(statearr_24930_25043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (5))){
var inst_24909 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24925__$1 = state_24925;
var statearr_24931_25044 = state_24925__$1;
(statearr_24931_25044[(2)] = inst_24909);

(statearr_24931_25044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (6))){
var inst_24906 = (state_24925[(7)]);
var inst_24911 = (state_24925[(8)]);
var inst_24911__$1 = cljs.core.async.chan.call(null,(1));
var inst_24912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24913 = [inst_24906,inst_24911__$1];
var inst_24914 = (new cljs.core.PersistentVector(null,2,(5),inst_24912,inst_24913,null));
var state_24925__$1 = (function (){var statearr_24932 = state_24925;
(statearr_24932[(8)] = inst_24911__$1);

return statearr_24932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24925__$1,(8),jobs,inst_24914);
} else {
if((state_val_24926 === (7))){
var inst_24921 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
var statearr_24933_25045 = state_24925__$1;
(statearr_24933_25045[(2)] = inst_24921);

(statearr_24933_25045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (8))){
var inst_24911 = (state_24925[(8)]);
var inst_24916 = (state_24925[(2)]);
var state_24925__$1 = (function (){var statearr_24934 = state_24925;
(statearr_24934[(9)] = inst_24916);

return statearr_24934;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24925__$1,(9),results,inst_24911);
} else {
if((state_val_24926 === (9))){
var inst_24918 = (state_24925[(2)]);
var state_24925__$1 = (function (){var statearr_24935 = state_24925;
(statearr_24935[(10)] = inst_24918);

return statearr_24935;
})();
var statearr_24936_25046 = state_24925__$1;
(statearr_24936_25046[(2)] = null);

(statearr_24936_25046[(1)] = (2));


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
});})(c__19118__auto___25040,jobs,results,process,async))
;
return ((function (switch__19056__auto__,c__19118__auto___25040,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24940[(1)] = (1));

return statearr_24940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24925){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24941){if((e24941 instanceof Object)){
var ex__19060__auto__ = e24941;
var statearr_24942_25047 = state_24925;
(statearr_24942_25047[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25048 = state_24925;
state_24925 = G__25048;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25040,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_24943 = f__19119__auto__.call(null);
(statearr_24943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25040);

return statearr_24943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25040,jobs,results,process,async))
);


var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__,jobs,results,process,async){
return (function (state_24981){
var state_val_24982 = (state_24981[(1)]);
if((state_val_24982 === (7))){
var inst_24977 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24983_25049 = state_24981__$1;
(statearr_24983_25049[(2)] = inst_24977);

(statearr_24983_25049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (20))){
var state_24981__$1 = state_24981;
var statearr_24984_25050 = state_24981__$1;
(statearr_24984_25050[(2)] = null);

(statearr_24984_25050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (1))){
var state_24981__$1 = state_24981;
var statearr_24985_25051 = state_24981__$1;
(statearr_24985_25051[(2)] = null);

(statearr_24985_25051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (4))){
var inst_24946 = (state_24981[(7)]);
var inst_24946__$1 = (state_24981[(2)]);
var inst_24947 = (inst_24946__$1 == null);
var state_24981__$1 = (function (){var statearr_24986 = state_24981;
(statearr_24986[(7)] = inst_24946__$1);

return statearr_24986;
})();
if(cljs.core.truth_(inst_24947)){
var statearr_24987_25052 = state_24981__$1;
(statearr_24987_25052[(1)] = (5));

} else {
var statearr_24988_25053 = state_24981__$1;
(statearr_24988_25053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (15))){
var inst_24959 = (state_24981[(8)]);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24981__$1,(18),to,inst_24959);
} else {
if((state_val_24982 === (21))){
var inst_24972 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24989_25054 = state_24981__$1;
(statearr_24989_25054[(2)] = inst_24972);

(statearr_24989_25054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (13))){
var inst_24974 = (state_24981[(2)]);
var state_24981__$1 = (function (){var statearr_24990 = state_24981;
(statearr_24990[(9)] = inst_24974);

return statearr_24990;
})();
var statearr_24991_25055 = state_24981__$1;
(statearr_24991_25055[(2)] = null);

(statearr_24991_25055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (6))){
var inst_24946 = (state_24981[(7)]);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24981__$1,(11),inst_24946);
} else {
if((state_val_24982 === (17))){
var inst_24967 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
if(cljs.core.truth_(inst_24967)){
var statearr_24992_25056 = state_24981__$1;
(statearr_24992_25056[(1)] = (19));

} else {
var statearr_24993_25057 = state_24981__$1;
(statearr_24993_25057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (3))){
var inst_24979 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24981__$1,inst_24979);
} else {
if((state_val_24982 === (12))){
var inst_24956 = (state_24981[(10)]);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24981__$1,(14),inst_24956);
} else {
if((state_val_24982 === (2))){
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24981__$1,(4),results);
} else {
if((state_val_24982 === (19))){
var state_24981__$1 = state_24981;
var statearr_24994_25058 = state_24981__$1;
(statearr_24994_25058[(2)] = null);

(statearr_24994_25058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (11))){
var inst_24956 = (state_24981[(2)]);
var state_24981__$1 = (function (){var statearr_24995 = state_24981;
(statearr_24995[(10)] = inst_24956);

return statearr_24995;
})();
var statearr_24996_25059 = state_24981__$1;
(statearr_24996_25059[(2)] = null);

(statearr_24996_25059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (9))){
var state_24981__$1 = state_24981;
var statearr_24997_25060 = state_24981__$1;
(statearr_24997_25060[(2)] = null);

(statearr_24997_25060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (5))){
var state_24981__$1 = state_24981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24998_25061 = state_24981__$1;
(statearr_24998_25061[(1)] = (8));

} else {
var statearr_24999_25062 = state_24981__$1;
(statearr_24999_25062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (14))){
var inst_24961 = (state_24981[(11)]);
var inst_24959 = (state_24981[(8)]);
var inst_24959__$1 = (state_24981[(2)]);
var inst_24960 = (inst_24959__$1 == null);
var inst_24961__$1 = cljs.core.not.call(null,inst_24960);
var state_24981__$1 = (function (){var statearr_25000 = state_24981;
(statearr_25000[(11)] = inst_24961__$1);

(statearr_25000[(8)] = inst_24959__$1);

return statearr_25000;
})();
if(inst_24961__$1){
var statearr_25001_25063 = state_24981__$1;
(statearr_25001_25063[(1)] = (15));

} else {
var statearr_25002_25064 = state_24981__$1;
(statearr_25002_25064[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (16))){
var inst_24961 = (state_24981[(11)]);
var state_24981__$1 = state_24981;
var statearr_25003_25065 = state_24981__$1;
(statearr_25003_25065[(2)] = inst_24961);

(statearr_25003_25065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (10))){
var inst_24953 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_25004_25066 = state_24981__$1;
(statearr_25004_25066[(2)] = inst_24953);

(statearr_25004_25066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (18))){
var inst_24964 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_25005_25067 = state_24981__$1;
(statearr_25005_25067[(2)] = inst_24964);

(statearr_25005_25067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (8))){
var inst_24950 = cljs.core.async.close_BANG_.call(null,to);
var state_24981__$1 = state_24981;
var statearr_25006_25068 = state_24981__$1;
(statearr_25006_25068[(2)] = inst_24950);

(statearr_25006_25068[(1)] = (10));


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
});})(c__19118__auto__,jobs,results,process,async))
;
return ((function (switch__19056__auto__,c__19118__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_25010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_25010[(1)] = (1));

return statearr_25010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24981){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25011){if((e25011 instanceof Object)){
var ex__19060__auto__ = e25011;
var statearr_25012_25069 = state_24981;
(statearr_25012_25069[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25070 = state_24981;
state_24981 = G__25070;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_25013 = f__19119__auto__.call(null);
(statearr_25013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_25013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__,jobs,results,process,async))
);

return c__19118__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__25072 = arguments.length;
switch (G__25072) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__25075 = arguments.length;
switch (G__25075) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__25078 = arguments.length;
switch (G__25078) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19118__auto___25130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25130,tc,fc){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25130,tc,fc){
return (function (state_25104){
var state_val_25105 = (state_25104[(1)]);
if((state_val_25105 === (7))){
var inst_25100 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
var statearr_25106_25131 = state_25104__$1;
(statearr_25106_25131[(2)] = inst_25100);

(statearr_25106_25131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (1))){
var state_25104__$1 = state_25104;
var statearr_25107_25132 = state_25104__$1;
(statearr_25107_25132[(2)] = null);

(statearr_25107_25132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (4))){
var inst_25081 = (state_25104[(7)]);
var inst_25081__$1 = (state_25104[(2)]);
var inst_25082 = (inst_25081__$1 == null);
var state_25104__$1 = (function (){var statearr_25108 = state_25104;
(statearr_25108[(7)] = inst_25081__$1);

return statearr_25108;
})();
if(cljs.core.truth_(inst_25082)){
var statearr_25109_25133 = state_25104__$1;
(statearr_25109_25133[(1)] = (5));

} else {
var statearr_25110_25134 = state_25104__$1;
(statearr_25110_25134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (13))){
var state_25104__$1 = state_25104;
var statearr_25111_25135 = state_25104__$1;
(statearr_25111_25135[(2)] = null);

(statearr_25111_25135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (6))){
var inst_25081 = (state_25104[(7)]);
var inst_25087 = p.call(null,inst_25081);
var state_25104__$1 = state_25104;
if(cljs.core.truth_(inst_25087)){
var statearr_25112_25136 = state_25104__$1;
(statearr_25112_25136[(1)] = (9));

} else {
var statearr_25113_25137 = state_25104__$1;
(statearr_25113_25137[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (3))){
var inst_25102 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25104__$1,inst_25102);
} else {
if((state_val_25105 === (12))){
var state_25104__$1 = state_25104;
var statearr_25114_25138 = state_25104__$1;
(statearr_25114_25138[(2)] = null);

(statearr_25114_25138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (2))){
var state_25104__$1 = state_25104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25104__$1,(4),ch);
} else {
if((state_val_25105 === (11))){
var inst_25081 = (state_25104[(7)]);
var inst_25091 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25104__$1,(8),inst_25091,inst_25081);
} else {
if((state_val_25105 === (9))){
var state_25104__$1 = state_25104;
var statearr_25115_25139 = state_25104__$1;
(statearr_25115_25139[(2)] = tc);

(statearr_25115_25139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (5))){
var inst_25084 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25085 = cljs.core.async.close_BANG_.call(null,fc);
var state_25104__$1 = (function (){var statearr_25116 = state_25104;
(statearr_25116[(8)] = inst_25084);

return statearr_25116;
})();
var statearr_25117_25140 = state_25104__$1;
(statearr_25117_25140[(2)] = inst_25085);

(statearr_25117_25140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (14))){
var inst_25098 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
var statearr_25118_25141 = state_25104__$1;
(statearr_25118_25141[(2)] = inst_25098);

(statearr_25118_25141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (10))){
var state_25104__$1 = state_25104;
var statearr_25119_25142 = state_25104__$1;
(statearr_25119_25142[(2)] = fc);

(statearr_25119_25142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (8))){
var inst_25093 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
if(cljs.core.truth_(inst_25093)){
var statearr_25120_25143 = state_25104__$1;
(statearr_25120_25143[(1)] = (12));

} else {
var statearr_25121_25144 = state_25104__$1;
(statearr_25121_25144[(1)] = (13));

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
});})(c__19118__auto___25130,tc,fc))
;
return ((function (switch__19056__auto__,c__19118__auto___25130,tc,fc){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_25125 = [null,null,null,null,null,null,null,null,null];
(statearr_25125[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_25125[(1)] = (1));

return statearr_25125;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_25104){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25126){if((e25126 instanceof Object)){
var ex__19060__auto__ = e25126;
var statearr_25127_25145 = state_25104;
(statearr_25127_25145[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25146 = state_25104;
state_25104 = G__25146;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_25104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_25104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25130,tc,fc))
})();
var state__19120__auto__ = (function (){var statearr_25128 = f__19119__auto__.call(null);
(statearr_25128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25130);

return statearr_25128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25130,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_25193){
var state_val_25194 = (state_25193[(1)]);
if((state_val_25194 === (1))){
var inst_25179 = init;
var state_25193__$1 = (function (){var statearr_25195 = state_25193;
(statearr_25195[(7)] = inst_25179);

return statearr_25195;
})();
var statearr_25196_25211 = state_25193__$1;
(statearr_25196_25211[(2)] = null);

(statearr_25196_25211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (2))){
var state_25193__$1 = state_25193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25193__$1,(4),ch);
} else {
if((state_val_25194 === (3))){
var inst_25191 = (state_25193[(2)]);
var state_25193__$1 = state_25193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25193__$1,inst_25191);
} else {
if((state_val_25194 === (4))){
var inst_25182 = (state_25193[(8)]);
var inst_25182__$1 = (state_25193[(2)]);
var inst_25183 = (inst_25182__$1 == null);
var state_25193__$1 = (function (){var statearr_25197 = state_25193;
(statearr_25197[(8)] = inst_25182__$1);

return statearr_25197;
})();
if(cljs.core.truth_(inst_25183)){
var statearr_25198_25212 = state_25193__$1;
(statearr_25198_25212[(1)] = (5));

} else {
var statearr_25199_25213 = state_25193__$1;
(statearr_25199_25213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (5))){
var inst_25179 = (state_25193[(7)]);
var state_25193__$1 = state_25193;
var statearr_25200_25214 = state_25193__$1;
(statearr_25200_25214[(2)] = inst_25179);

(statearr_25200_25214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (6))){
var inst_25182 = (state_25193[(8)]);
var inst_25179 = (state_25193[(7)]);
var inst_25186 = f.call(null,inst_25179,inst_25182);
var inst_25179__$1 = inst_25186;
var state_25193__$1 = (function (){var statearr_25201 = state_25193;
(statearr_25201[(7)] = inst_25179__$1);

return statearr_25201;
})();
var statearr_25202_25215 = state_25193__$1;
(statearr_25202_25215[(2)] = null);

(statearr_25202_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (7))){
var inst_25189 = (state_25193[(2)]);
var state_25193__$1 = state_25193;
var statearr_25203_25216 = state_25193__$1;
(statearr_25203_25216[(2)] = inst_25189);

(statearr_25203_25216[(1)] = (3));


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
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19057__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19057__auto____0 = (function (){
var statearr_25207 = [null,null,null,null,null,null,null,null,null];
(statearr_25207[(0)] = cljs$core$async$reduce_$_state_machine__19057__auto__);

(statearr_25207[(1)] = (1));

return statearr_25207;
});
var cljs$core$async$reduce_$_state_machine__19057__auto____1 = (function (state_25193){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25208){if((e25208 instanceof Object)){
var ex__19060__auto__ = e25208;
var statearr_25209_25217 = state_25193;
(statearr_25209_25217[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25218 = state_25193;
state_25193 = G__25218;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19057__auto__ = function(state_25193){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19057__auto____1.call(this,state_25193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19057__auto____0;
cljs$core$async$reduce_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19057__auto____1;
return cljs$core$async$reduce_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_25210 = f__19119__auto__.call(null);
(statearr_25210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_25210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__25220 = arguments.length;
switch (G__25220) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_25245){
var state_val_25246 = (state_25245[(1)]);
if((state_val_25246 === (7))){
var inst_25227 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25247_25271 = state_25245__$1;
(statearr_25247_25271[(2)] = inst_25227);

(statearr_25247_25271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (1))){
var inst_25221 = cljs.core.seq.call(null,coll);
var inst_25222 = inst_25221;
var state_25245__$1 = (function (){var statearr_25248 = state_25245;
(statearr_25248[(7)] = inst_25222);

return statearr_25248;
})();
var statearr_25249_25272 = state_25245__$1;
(statearr_25249_25272[(2)] = null);

(statearr_25249_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (4))){
var inst_25222 = (state_25245[(7)]);
var inst_25225 = cljs.core.first.call(null,inst_25222);
var state_25245__$1 = state_25245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25245__$1,(7),ch,inst_25225);
} else {
if((state_val_25246 === (13))){
var inst_25239 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25250_25273 = state_25245__$1;
(statearr_25250_25273[(2)] = inst_25239);

(statearr_25250_25273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (6))){
var inst_25230 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
if(cljs.core.truth_(inst_25230)){
var statearr_25251_25274 = state_25245__$1;
(statearr_25251_25274[(1)] = (8));

} else {
var statearr_25252_25275 = state_25245__$1;
(statearr_25252_25275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (3))){
var inst_25243 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25245__$1,inst_25243);
} else {
if((state_val_25246 === (12))){
var state_25245__$1 = state_25245;
var statearr_25253_25276 = state_25245__$1;
(statearr_25253_25276[(2)] = null);

(statearr_25253_25276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (2))){
var inst_25222 = (state_25245[(7)]);
var state_25245__$1 = state_25245;
if(cljs.core.truth_(inst_25222)){
var statearr_25254_25277 = state_25245__$1;
(statearr_25254_25277[(1)] = (4));

} else {
var statearr_25255_25278 = state_25245__$1;
(statearr_25255_25278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (11))){
var inst_25236 = cljs.core.async.close_BANG_.call(null,ch);
var state_25245__$1 = state_25245;
var statearr_25256_25279 = state_25245__$1;
(statearr_25256_25279[(2)] = inst_25236);

(statearr_25256_25279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (9))){
var state_25245__$1 = state_25245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25257_25280 = state_25245__$1;
(statearr_25257_25280[(1)] = (11));

} else {
var statearr_25258_25281 = state_25245__$1;
(statearr_25258_25281[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (5))){
var inst_25222 = (state_25245[(7)]);
var state_25245__$1 = state_25245;
var statearr_25259_25282 = state_25245__$1;
(statearr_25259_25282[(2)] = inst_25222);

(statearr_25259_25282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (10))){
var inst_25241 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25260_25283 = state_25245__$1;
(statearr_25260_25283[(2)] = inst_25241);

(statearr_25260_25283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25246 === (8))){
var inst_25222 = (state_25245[(7)]);
var inst_25232 = cljs.core.next.call(null,inst_25222);
var inst_25222__$1 = inst_25232;
var state_25245__$1 = (function (){var statearr_25261 = state_25245;
(statearr_25261[(7)] = inst_25222__$1);

return statearr_25261;
})();
var statearr_25262_25284 = state_25245__$1;
(statearr_25262_25284[(2)] = null);

(statearr_25262_25284[(1)] = (2));


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
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_25266 = [null,null,null,null,null,null,null,null];
(statearr_25266[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_25266[(1)] = (1));

return statearr_25266;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_25245){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25267){if((e25267 instanceof Object)){
var ex__19060__auto__ = e25267;
var statearr_25268_25285 = state_25245;
(statearr_25268_25285[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25286 = state_25245;
state_25245 = G__25286;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_25245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_25245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_25269 = f__19119__auto__.call(null);
(statearr_25269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_25269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25288 = {};
return obj25288;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16096__auto__ = _;
if(and__16096__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16744__auto__ = (((_ == null))?null:_);
return (function (){var or__16108__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25290 = {};
return obj25290;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25512 = (function (mult,ch,cs,meta25513){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25513 = meta25513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25514,meta25513__$1){
var self__ = this;
var _25514__$1 = this;
return (new cljs.core.async.t25512(self__.mult,self__.ch,self__.cs,meta25513__$1));
});})(cs))
;

cljs.core.async.t25512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25514){
var self__ = this;
var _25514__$1 = this;
return self__.meta25513;
});})(cs))
;

cljs.core.async.t25512.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25512.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25512.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25512.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25512.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25512.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25513","meta25513",-888662893,null)], null);
});})(cs))
;

cljs.core.async.t25512.cljs$lang$type = true;

cljs.core.async.t25512.cljs$lang$ctorStr = "cljs.core.async/t25512";

cljs.core.async.t25512.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t25512");
});})(cs))
;

cljs.core.async.__GT_t25512 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25512(mult__$1,ch__$1,cs__$1,meta25513){
return (new cljs.core.async.t25512(mult__$1,ch__$1,cs__$1,meta25513));
});})(cs))
;

}

return (new cljs.core.async.t25512(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19118__auto___25733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25733,cs,m,dchan,dctr,done){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25733,cs,m,dchan,dctr,done){
return (function (state_25645){
var state_val_25646 = (state_25645[(1)]);
if((state_val_25646 === (7))){
var inst_25641 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25647_25734 = state_25645__$1;
(statearr_25647_25734[(2)] = inst_25641);

(statearr_25647_25734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (20))){
var inst_25546 = (state_25645[(7)]);
var inst_25556 = cljs.core.first.call(null,inst_25546);
var inst_25557 = cljs.core.nth.call(null,inst_25556,(0),null);
var inst_25558 = cljs.core.nth.call(null,inst_25556,(1),null);
var state_25645__$1 = (function (){var statearr_25648 = state_25645;
(statearr_25648[(8)] = inst_25557);

return statearr_25648;
})();
if(cljs.core.truth_(inst_25558)){
var statearr_25649_25735 = state_25645__$1;
(statearr_25649_25735[(1)] = (22));

} else {
var statearr_25650_25736 = state_25645__$1;
(statearr_25650_25736[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (27))){
var inst_25593 = (state_25645[(9)]);
var inst_25586 = (state_25645[(10)]);
var inst_25588 = (state_25645[(11)]);
var inst_25517 = (state_25645[(12)]);
var inst_25593__$1 = cljs.core._nth.call(null,inst_25586,inst_25588);
var inst_25594 = cljs.core.async.put_BANG_.call(null,inst_25593__$1,inst_25517,done);
var state_25645__$1 = (function (){var statearr_25651 = state_25645;
(statearr_25651[(9)] = inst_25593__$1);

return statearr_25651;
})();
if(cljs.core.truth_(inst_25594)){
var statearr_25652_25737 = state_25645__$1;
(statearr_25652_25737[(1)] = (30));

} else {
var statearr_25653_25738 = state_25645__$1;
(statearr_25653_25738[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (1))){
var state_25645__$1 = state_25645;
var statearr_25654_25739 = state_25645__$1;
(statearr_25654_25739[(2)] = null);

(statearr_25654_25739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (24))){
var inst_25546 = (state_25645[(7)]);
var inst_25563 = (state_25645[(2)]);
var inst_25564 = cljs.core.next.call(null,inst_25546);
var inst_25526 = inst_25564;
var inst_25527 = null;
var inst_25528 = (0);
var inst_25529 = (0);
var state_25645__$1 = (function (){var statearr_25655 = state_25645;
(statearr_25655[(13)] = inst_25526);

(statearr_25655[(14)] = inst_25528);

(statearr_25655[(15)] = inst_25529);

(statearr_25655[(16)] = inst_25563);

(statearr_25655[(17)] = inst_25527);

return statearr_25655;
})();
var statearr_25656_25740 = state_25645__$1;
(statearr_25656_25740[(2)] = null);

(statearr_25656_25740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (39))){
var state_25645__$1 = state_25645;
var statearr_25660_25741 = state_25645__$1;
(statearr_25660_25741[(2)] = null);

(statearr_25660_25741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (4))){
var inst_25517 = (state_25645[(12)]);
var inst_25517__$1 = (state_25645[(2)]);
var inst_25518 = (inst_25517__$1 == null);
var state_25645__$1 = (function (){var statearr_25661 = state_25645;
(statearr_25661[(12)] = inst_25517__$1);

return statearr_25661;
})();
if(cljs.core.truth_(inst_25518)){
var statearr_25662_25742 = state_25645__$1;
(statearr_25662_25742[(1)] = (5));

} else {
var statearr_25663_25743 = state_25645__$1;
(statearr_25663_25743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (15))){
var inst_25526 = (state_25645[(13)]);
var inst_25528 = (state_25645[(14)]);
var inst_25529 = (state_25645[(15)]);
var inst_25527 = (state_25645[(17)]);
var inst_25542 = (state_25645[(2)]);
var inst_25543 = (inst_25529 + (1));
var tmp25657 = inst_25526;
var tmp25658 = inst_25528;
var tmp25659 = inst_25527;
var inst_25526__$1 = tmp25657;
var inst_25527__$1 = tmp25659;
var inst_25528__$1 = tmp25658;
var inst_25529__$1 = inst_25543;
var state_25645__$1 = (function (){var statearr_25664 = state_25645;
(statearr_25664[(18)] = inst_25542);

(statearr_25664[(13)] = inst_25526__$1);

(statearr_25664[(14)] = inst_25528__$1);

(statearr_25664[(15)] = inst_25529__$1);

(statearr_25664[(17)] = inst_25527__$1);

return statearr_25664;
})();
var statearr_25665_25744 = state_25645__$1;
(statearr_25665_25744[(2)] = null);

(statearr_25665_25744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (21))){
var inst_25567 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25669_25745 = state_25645__$1;
(statearr_25669_25745[(2)] = inst_25567);

(statearr_25669_25745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (31))){
var inst_25593 = (state_25645[(9)]);
var inst_25597 = done.call(null,null);
var inst_25598 = cljs.core.async.untap_STAR_.call(null,m,inst_25593);
var state_25645__$1 = (function (){var statearr_25670 = state_25645;
(statearr_25670[(19)] = inst_25597);

return statearr_25670;
})();
var statearr_25671_25746 = state_25645__$1;
(statearr_25671_25746[(2)] = inst_25598);

(statearr_25671_25746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (32))){
var inst_25587 = (state_25645[(20)]);
var inst_25586 = (state_25645[(10)]);
var inst_25588 = (state_25645[(11)]);
var inst_25585 = (state_25645[(21)]);
var inst_25600 = (state_25645[(2)]);
var inst_25601 = (inst_25588 + (1));
var tmp25666 = inst_25587;
var tmp25667 = inst_25586;
var tmp25668 = inst_25585;
var inst_25585__$1 = tmp25668;
var inst_25586__$1 = tmp25667;
var inst_25587__$1 = tmp25666;
var inst_25588__$1 = inst_25601;
var state_25645__$1 = (function (){var statearr_25672 = state_25645;
(statearr_25672[(22)] = inst_25600);

(statearr_25672[(20)] = inst_25587__$1);

(statearr_25672[(10)] = inst_25586__$1);

(statearr_25672[(11)] = inst_25588__$1);

(statearr_25672[(21)] = inst_25585__$1);

return statearr_25672;
})();
var statearr_25673_25747 = state_25645__$1;
(statearr_25673_25747[(2)] = null);

(statearr_25673_25747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (40))){
var inst_25613 = (state_25645[(23)]);
var inst_25617 = done.call(null,null);
var inst_25618 = cljs.core.async.untap_STAR_.call(null,m,inst_25613);
var state_25645__$1 = (function (){var statearr_25674 = state_25645;
(statearr_25674[(24)] = inst_25617);

return statearr_25674;
})();
var statearr_25675_25748 = state_25645__$1;
(statearr_25675_25748[(2)] = inst_25618);

(statearr_25675_25748[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (33))){
var inst_25604 = (state_25645[(25)]);
var inst_25606 = cljs.core.chunked_seq_QMARK_.call(null,inst_25604);
var state_25645__$1 = state_25645;
if(inst_25606){
var statearr_25676_25749 = state_25645__$1;
(statearr_25676_25749[(1)] = (36));

} else {
var statearr_25677_25750 = state_25645__$1;
(statearr_25677_25750[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (13))){
var inst_25536 = (state_25645[(26)]);
var inst_25539 = cljs.core.async.close_BANG_.call(null,inst_25536);
var state_25645__$1 = state_25645;
var statearr_25678_25751 = state_25645__$1;
(statearr_25678_25751[(2)] = inst_25539);

(statearr_25678_25751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (22))){
var inst_25557 = (state_25645[(8)]);
var inst_25560 = cljs.core.async.close_BANG_.call(null,inst_25557);
var state_25645__$1 = state_25645;
var statearr_25679_25752 = state_25645__$1;
(statearr_25679_25752[(2)] = inst_25560);

(statearr_25679_25752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (36))){
var inst_25604 = (state_25645[(25)]);
var inst_25608 = cljs.core.chunk_first.call(null,inst_25604);
var inst_25609 = cljs.core.chunk_rest.call(null,inst_25604);
var inst_25610 = cljs.core.count.call(null,inst_25608);
var inst_25585 = inst_25609;
var inst_25586 = inst_25608;
var inst_25587 = inst_25610;
var inst_25588 = (0);
var state_25645__$1 = (function (){var statearr_25680 = state_25645;
(statearr_25680[(20)] = inst_25587);

(statearr_25680[(10)] = inst_25586);

(statearr_25680[(11)] = inst_25588);

(statearr_25680[(21)] = inst_25585);

return statearr_25680;
})();
var statearr_25681_25753 = state_25645__$1;
(statearr_25681_25753[(2)] = null);

(statearr_25681_25753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (41))){
var inst_25604 = (state_25645[(25)]);
var inst_25620 = (state_25645[(2)]);
var inst_25621 = cljs.core.next.call(null,inst_25604);
var inst_25585 = inst_25621;
var inst_25586 = null;
var inst_25587 = (0);
var inst_25588 = (0);
var state_25645__$1 = (function (){var statearr_25682 = state_25645;
(statearr_25682[(20)] = inst_25587);

(statearr_25682[(10)] = inst_25586);

(statearr_25682[(11)] = inst_25588);

(statearr_25682[(27)] = inst_25620);

(statearr_25682[(21)] = inst_25585);

return statearr_25682;
})();
var statearr_25683_25754 = state_25645__$1;
(statearr_25683_25754[(2)] = null);

(statearr_25683_25754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (43))){
var state_25645__$1 = state_25645;
var statearr_25684_25755 = state_25645__$1;
(statearr_25684_25755[(2)] = null);

(statearr_25684_25755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (29))){
var inst_25629 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25685_25756 = state_25645__$1;
(statearr_25685_25756[(2)] = inst_25629);

(statearr_25685_25756[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (44))){
var inst_25638 = (state_25645[(2)]);
var state_25645__$1 = (function (){var statearr_25686 = state_25645;
(statearr_25686[(28)] = inst_25638);

return statearr_25686;
})();
var statearr_25687_25757 = state_25645__$1;
(statearr_25687_25757[(2)] = null);

(statearr_25687_25757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (6))){
var inst_25577 = (state_25645[(29)]);
var inst_25576 = cljs.core.deref.call(null,cs);
var inst_25577__$1 = cljs.core.keys.call(null,inst_25576);
var inst_25578 = cljs.core.count.call(null,inst_25577__$1);
var inst_25579 = cljs.core.reset_BANG_.call(null,dctr,inst_25578);
var inst_25584 = cljs.core.seq.call(null,inst_25577__$1);
var inst_25585 = inst_25584;
var inst_25586 = null;
var inst_25587 = (0);
var inst_25588 = (0);
var state_25645__$1 = (function (){var statearr_25688 = state_25645;
(statearr_25688[(29)] = inst_25577__$1);

(statearr_25688[(20)] = inst_25587);

(statearr_25688[(10)] = inst_25586);

(statearr_25688[(30)] = inst_25579);

(statearr_25688[(11)] = inst_25588);

(statearr_25688[(21)] = inst_25585);

return statearr_25688;
})();
var statearr_25689_25758 = state_25645__$1;
(statearr_25689_25758[(2)] = null);

(statearr_25689_25758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (28))){
var inst_25604 = (state_25645[(25)]);
var inst_25585 = (state_25645[(21)]);
var inst_25604__$1 = cljs.core.seq.call(null,inst_25585);
var state_25645__$1 = (function (){var statearr_25690 = state_25645;
(statearr_25690[(25)] = inst_25604__$1);

return statearr_25690;
})();
if(inst_25604__$1){
var statearr_25691_25759 = state_25645__$1;
(statearr_25691_25759[(1)] = (33));

} else {
var statearr_25692_25760 = state_25645__$1;
(statearr_25692_25760[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (25))){
var inst_25587 = (state_25645[(20)]);
var inst_25588 = (state_25645[(11)]);
var inst_25590 = (inst_25588 < inst_25587);
var inst_25591 = inst_25590;
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25591)){
var statearr_25693_25761 = state_25645__$1;
(statearr_25693_25761[(1)] = (27));

} else {
var statearr_25694_25762 = state_25645__$1;
(statearr_25694_25762[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (34))){
var state_25645__$1 = state_25645;
var statearr_25695_25763 = state_25645__$1;
(statearr_25695_25763[(2)] = null);

(statearr_25695_25763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (17))){
var state_25645__$1 = state_25645;
var statearr_25696_25764 = state_25645__$1;
(statearr_25696_25764[(2)] = null);

(statearr_25696_25764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (3))){
var inst_25643 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25645__$1,inst_25643);
} else {
if((state_val_25646 === (12))){
var inst_25572 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25697_25765 = state_25645__$1;
(statearr_25697_25765[(2)] = inst_25572);

(statearr_25697_25765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (2))){
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(4),ch);
} else {
if((state_val_25646 === (23))){
var state_25645__$1 = state_25645;
var statearr_25698_25766 = state_25645__$1;
(statearr_25698_25766[(2)] = null);

(statearr_25698_25766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (35))){
var inst_25627 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25699_25767 = state_25645__$1;
(statearr_25699_25767[(2)] = inst_25627);

(statearr_25699_25767[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (19))){
var inst_25546 = (state_25645[(7)]);
var inst_25550 = cljs.core.chunk_first.call(null,inst_25546);
var inst_25551 = cljs.core.chunk_rest.call(null,inst_25546);
var inst_25552 = cljs.core.count.call(null,inst_25550);
var inst_25526 = inst_25551;
var inst_25527 = inst_25550;
var inst_25528 = inst_25552;
var inst_25529 = (0);
var state_25645__$1 = (function (){var statearr_25700 = state_25645;
(statearr_25700[(13)] = inst_25526);

(statearr_25700[(14)] = inst_25528);

(statearr_25700[(15)] = inst_25529);

(statearr_25700[(17)] = inst_25527);

return statearr_25700;
})();
var statearr_25701_25768 = state_25645__$1;
(statearr_25701_25768[(2)] = null);

(statearr_25701_25768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (11))){
var inst_25546 = (state_25645[(7)]);
var inst_25526 = (state_25645[(13)]);
var inst_25546__$1 = cljs.core.seq.call(null,inst_25526);
var state_25645__$1 = (function (){var statearr_25702 = state_25645;
(statearr_25702[(7)] = inst_25546__$1);

return statearr_25702;
})();
if(inst_25546__$1){
var statearr_25703_25769 = state_25645__$1;
(statearr_25703_25769[(1)] = (16));

} else {
var statearr_25704_25770 = state_25645__$1;
(statearr_25704_25770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (9))){
var inst_25574 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25705_25771 = state_25645__$1;
(statearr_25705_25771[(2)] = inst_25574);

(statearr_25705_25771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (5))){
var inst_25524 = cljs.core.deref.call(null,cs);
var inst_25525 = cljs.core.seq.call(null,inst_25524);
var inst_25526 = inst_25525;
var inst_25527 = null;
var inst_25528 = (0);
var inst_25529 = (0);
var state_25645__$1 = (function (){var statearr_25706 = state_25645;
(statearr_25706[(13)] = inst_25526);

(statearr_25706[(14)] = inst_25528);

(statearr_25706[(15)] = inst_25529);

(statearr_25706[(17)] = inst_25527);

return statearr_25706;
})();
var statearr_25707_25772 = state_25645__$1;
(statearr_25707_25772[(2)] = null);

(statearr_25707_25772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (14))){
var state_25645__$1 = state_25645;
var statearr_25708_25773 = state_25645__$1;
(statearr_25708_25773[(2)] = null);

(statearr_25708_25773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (45))){
var inst_25635 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25709_25774 = state_25645__$1;
(statearr_25709_25774[(2)] = inst_25635);

(statearr_25709_25774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (26))){
var inst_25577 = (state_25645[(29)]);
var inst_25631 = (state_25645[(2)]);
var inst_25632 = cljs.core.seq.call(null,inst_25577);
var state_25645__$1 = (function (){var statearr_25710 = state_25645;
(statearr_25710[(31)] = inst_25631);

return statearr_25710;
})();
if(inst_25632){
var statearr_25711_25775 = state_25645__$1;
(statearr_25711_25775[(1)] = (42));

} else {
var statearr_25712_25776 = state_25645__$1;
(statearr_25712_25776[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (16))){
var inst_25546 = (state_25645[(7)]);
var inst_25548 = cljs.core.chunked_seq_QMARK_.call(null,inst_25546);
var state_25645__$1 = state_25645;
if(inst_25548){
var statearr_25713_25777 = state_25645__$1;
(statearr_25713_25777[(1)] = (19));

} else {
var statearr_25714_25778 = state_25645__$1;
(statearr_25714_25778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (38))){
var inst_25624 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25715_25779 = state_25645__$1;
(statearr_25715_25779[(2)] = inst_25624);

(statearr_25715_25779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (30))){
var state_25645__$1 = state_25645;
var statearr_25716_25780 = state_25645__$1;
(statearr_25716_25780[(2)] = null);

(statearr_25716_25780[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (10))){
var inst_25529 = (state_25645[(15)]);
var inst_25527 = (state_25645[(17)]);
var inst_25535 = cljs.core._nth.call(null,inst_25527,inst_25529);
var inst_25536 = cljs.core.nth.call(null,inst_25535,(0),null);
var inst_25537 = cljs.core.nth.call(null,inst_25535,(1),null);
var state_25645__$1 = (function (){var statearr_25717 = state_25645;
(statearr_25717[(26)] = inst_25536);

return statearr_25717;
})();
if(cljs.core.truth_(inst_25537)){
var statearr_25718_25781 = state_25645__$1;
(statearr_25718_25781[(1)] = (13));

} else {
var statearr_25719_25782 = state_25645__$1;
(statearr_25719_25782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (18))){
var inst_25570 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25720_25783 = state_25645__$1;
(statearr_25720_25783[(2)] = inst_25570);

(statearr_25720_25783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (42))){
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(45),dchan);
} else {
if((state_val_25646 === (37))){
var inst_25604 = (state_25645[(25)]);
var inst_25613 = (state_25645[(23)]);
var inst_25517 = (state_25645[(12)]);
var inst_25613__$1 = cljs.core.first.call(null,inst_25604);
var inst_25614 = cljs.core.async.put_BANG_.call(null,inst_25613__$1,inst_25517,done);
var state_25645__$1 = (function (){var statearr_25721 = state_25645;
(statearr_25721[(23)] = inst_25613__$1);

return statearr_25721;
})();
if(cljs.core.truth_(inst_25614)){
var statearr_25722_25784 = state_25645__$1;
(statearr_25722_25784[(1)] = (39));

} else {
var statearr_25723_25785 = state_25645__$1;
(statearr_25723_25785[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (8))){
var inst_25528 = (state_25645[(14)]);
var inst_25529 = (state_25645[(15)]);
var inst_25531 = (inst_25529 < inst_25528);
var inst_25532 = inst_25531;
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25532)){
var statearr_25724_25786 = state_25645__$1;
(statearr_25724_25786[(1)] = (10));

} else {
var statearr_25725_25787 = state_25645__$1;
(statearr_25725_25787[(1)] = (11));

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
});})(c__19118__auto___25733,cs,m,dchan,dctr,done))
;
return ((function (switch__19056__auto__,c__19118__auto___25733,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19057__auto__ = null;
var cljs$core$async$mult_$_state_machine__19057__auto____0 = (function (){
var statearr_25729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25729[(0)] = cljs$core$async$mult_$_state_machine__19057__auto__);

(statearr_25729[(1)] = (1));

return statearr_25729;
});
var cljs$core$async$mult_$_state_machine__19057__auto____1 = (function (state_25645){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25730){if((e25730 instanceof Object)){
var ex__19060__auto__ = e25730;
var statearr_25731_25788 = state_25645;
(statearr_25731_25788[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25789 = state_25645;
state_25645 = G__25789;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19057__auto__ = function(state_25645){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19057__auto____1.call(this,state_25645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19057__auto____0;
cljs$core$async$mult_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19057__auto____1;
return cljs$core$async$mult_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25733,cs,m,dchan,dctr,done))
})();
var state__19120__auto__ = (function (){var statearr_25732 = f__19119__auto__.call(null);
(statearr_25732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25733);

return statearr_25732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25733,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__25791 = arguments.length;
switch (G__25791) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj25794 = {};
return obj25794;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17148__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17148__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25799){
var map__25800 = p__25799;
var map__25800__$1 = ((cljs.core.seq_QMARK_.call(null,map__25800))?cljs.core.apply.call(null,cljs.core.hash_map,map__25800):map__25800);
var opts = map__25800__$1;
var statearr_25801_25804 = state;
(statearr_25801_25804[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25800,map__25800__$1,opts){
return (function (val){
var statearr_25802_25805 = state;
(statearr_25802_25805[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25800,map__25800__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25803_25806 = state;
(statearr_25803_25806[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25795){
var G__25796 = cljs.core.first.call(null,seq25795);
var seq25795__$1 = cljs.core.next.call(null,seq25795);
var G__25797 = cljs.core.first.call(null,seq25795__$1);
var seq25795__$2 = cljs.core.next.call(null,seq25795__$1);
var G__25798 = cljs.core.first.call(null,seq25795__$2);
var seq25795__$3 = cljs.core.next.call(null,seq25795__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25796,G__25797,G__25798,seq25795__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t25926 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25926 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25927){
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
this.meta25927 = meta25927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25928,meta25927__$1){
var self__ = this;
var _25928__$1 = this;
return (new cljs.core.async.t25926(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25928){
var self__ = this;
var _25928__$1 = this;
return self__.meta25927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25927","meta25927",128528058,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25926.cljs$lang$type = true;

cljs.core.async.t25926.cljs$lang$ctorStr = "cljs.core.async/t25926";

cljs.core.async.t25926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t25926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25926(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25927){
return (new cljs.core.async.t25926(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25926(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19118__auto___26045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25998){
var state_val_25999 = (state_25998[(1)]);
if((state_val_25999 === (7))){
var inst_25942 = (state_25998[(7)]);
var inst_25947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25942);
var state_25998__$1 = state_25998;
var statearr_26000_26046 = state_25998__$1;
(statearr_26000_26046[(2)] = inst_25947);

(statearr_26000_26046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (20))){
var inst_25957 = (state_25998[(8)]);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25998__$1,(23),out,inst_25957);
} else {
if((state_val_25999 === (1))){
var inst_25932 = (state_25998[(9)]);
var inst_25932__$1 = calc_state.call(null);
var inst_25933 = cljs.core.seq_QMARK_.call(null,inst_25932__$1);
var state_25998__$1 = (function (){var statearr_26001 = state_25998;
(statearr_26001[(9)] = inst_25932__$1);

return statearr_26001;
})();
if(inst_25933){
var statearr_26002_26047 = state_25998__$1;
(statearr_26002_26047[(1)] = (2));

} else {
var statearr_26003_26048 = state_25998__$1;
(statearr_26003_26048[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (24))){
var inst_25950 = (state_25998[(10)]);
var inst_25942 = inst_25950;
var state_25998__$1 = (function (){var statearr_26004 = state_25998;
(statearr_26004[(7)] = inst_25942);

return statearr_26004;
})();
var statearr_26005_26049 = state_25998__$1;
(statearr_26005_26049[(2)] = null);

(statearr_26005_26049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (4))){
var inst_25932 = (state_25998[(9)]);
var inst_25938 = (state_25998[(2)]);
var inst_25939 = cljs.core.get.call(null,inst_25938,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25940 = cljs.core.get.call(null,inst_25938,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25941 = cljs.core.get.call(null,inst_25938,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25942 = inst_25932;
var state_25998__$1 = (function (){var statearr_26006 = state_25998;
(statearr_26006[(11)] = inst_25941);

(statearr_26006[(7)] = inst_25942);

(statearr_26006[(12)] = inst_25940);

(statearr_26006[(13)] = inst_25939);

return statearr_26006;
})();
var statearr_26007_26050 = state_25998__$1;
(statearr_26007_26050[(2)] = null);

(statearr_26007_26050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (15))){
var state_25998__$1 = state_25998;
var statearr_26008_26051 = state_25998__$1;
(statearr_26008_26051[(2)] = null);

(statearr_26008_26051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (21))){
var inst_25950 = (state_25998[(10)]);
var inst_25942 = inst_25950;
var state_25998__$1 = (function (){var statearr_26009 = state_25998;
(statearr_26009[(7)] = inst_25942);

return statearr_26009;
})();
var statearr_26010_26052 = state_25998__$1;
(statearr_26010_26052[(2)] = null);

(statearr_26010_26052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (13))){
var inst_25994 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26011_26053 = state_25998__$1;
(statearr_26011_26053[(2)] = inst_25994);

(statearr_26011_26053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (22))){
var inst_25992 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26012_26054 = state_25998__$1;
(statearr_26012_26054[(2)] = inst_25992);

(statearr_26012_26054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (6))){
var inst_25996 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25998__$1,inst_25996);
} else {
if((state_val_25999 === (25))){
var state_25998__$1 = state_25998;
var statearr_26013_26055 = state_25998__$1;
(statearr_26013_26055[(2)] = null);

(statearr_26013_26055[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (17))){
var inst_25972 = (state_25998[(14)]);
var state_25998__$1 = state_25998;
var statearr_26014_26056 = state_25998__$1;
(statearr_26014_26056[(2)] = inst_25972);

(statearr_26014_26056[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (3))){
var inst_25932 = (state_25998[(9)]);
var state_25998__$1 = state_25998;
var statearr_26015_26057 = state_25998__$1;
(statearr_26015_26057[(2)] = inst_25932);

(statearr_26015_26057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (12))){
var inst_25958 = (state_25998[(15)]);
var inst_25972 = (state_25998[(14)]);
var inst_25951 = (state_25998[(16)]);
var inst_25972__$1 = inst_25951.call(null,inst_25958);
var state_25998__$1 = (function (){var statearr_26016 = state_25998;
(statearr_26016[(14)] = inst_25972__$1);

return statearr_26016;
})();
if(cljs.core.truth_(inst_25972__$1)){
var statearr_26017_26058 = state_25998__$1;
(statearr_26017_26058[(1)] = (17));

} else {
var statearr_26018_26059 = state_25998__$1;
(statearr_26018_26059[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (2))){
var inst_25932 = (state_25998[(9)]);
var inst_25935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25932);
var state_25998__$1 = state_25998;
var statearr_26019_26060 = state_25998__$1;
(statearr_26019_26060[(2)] = inst_25935);

(statearr_26019_26060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (23))){
var inst_25983 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
if(cljs.core.truth_(inst_25983)){
var statearr_26020_26061 = state_25998__$1;
(statearr_26020_26061[(1)] = (24));

} else {
var statearr_26021_26062 = state_25998__$1;
(statearr_26021_26062[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (19))){
var inst_25980 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
if(cljs.core.truth_(inst_25980)){
var statearr_26022_26063 = state_25998__$1;
(statearr_26022_26063[(1)] = (20));

} else {
var statearr_26023_26064 = state_25998__$1;
(statearr_26023_26064[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (11))){
var inst_25957 = (state_25998[(8)]);
var inst_25963 = (inst_25957 == null);
var state_25998__$1 = state_25998;
if(cljs.core.truth_(inst_25963)){
var statearr_26024_26065 = state_25998__$1;
(statearr_26024_26065[(1)] = (14));

} else {
var statearr_26025_26066 = state_25998__$1;
(statearr_26025_26066[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (9))){
var inst_25950 = (state_25998[(10)]);
var inst_25950__$1 = (state_25998[(2)]);
var inst_25951 = cljs.core.get.call(null,inst_25950__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25952 = cljs.core.get.call(null,inst_25950__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25953 = cljs.core.get.call(null,inst_25950__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25998__$1 = (function (){var statearr_26026 = state_25998;
(statearr_26026[(16)] = inst_25951);

(statearr_26026[(17)] = inst_25952);

(statearr_26026[(10)] = inst_25950__$1);

return statearr_26026;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25998__$1,(10),inst_25953);
} else {
if((state_val_25999 === (5))){
var inst_25942 = (state_25998[(7)]);
var inst_25945 = cljs.core.seq_QMARK_.call(null,inst_25942);
var state_25998__$1 = state_25998;
if(inst_25945){
var statearr_26027_26067 = state_25998__$1;
(statearr_26027_26067[(1)] = (7));

} else {
var statearr_26028_26068 = state_25998__$1;
(statearr_26028_26068[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (14))){
var inst_25958 = (state_25998[(15)]);
var inst_25965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25958);
var state_25998__$1 = state_25998;
var statearr_26029_26069 = state_25998__$1;
(statearr_26029_26069[(2)] = inst_25965);

(statearr_26029_26069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (26))){
var inst_25988 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26030_26070 = state_25998__$1;
(statearr_26030_26070[(2)] = inst_25988);

(statearr_26030_26070[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (16))){
var inst_25968 = (state_25998[(2)]);
var inst_25969 = calc_state.call(null);
var inst_25942 = inst_25969;
var state_25998__$1 = (function (){var statearr_26031 = state_25998;
(statearr_26031[(18)] = inst_25968);

(statearr_26031[(7)] = inst_25942);

return statearr_26031;
})();
var statearr_26032_26071 = state_25998__$1;
(statearr_26032_26071[(2)] = null);

(statearr_26032_26071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (10))){
var inst_25958 = (state_25998[(15)]);
var inst_25957 = (state_25998[(8)]);
var inst_25956 = (state_25998[(2)]);
var inst_25957__$1 = cljs.core.nth.call(null,inst_25956,(0),null);
var inst_25958__$1 = cljs.core.nth.call(null,inst_25956,(1),null);
var inst_25959 = (inst_25957__$1 == null);
var inst_25960 = cljs.core._EQ_.call(null,inst_25958__$1,change);
var inst_25961 = (inst_25959) || (inst_25960);
var state_25998__$1 = (function (){var statearr_26033 = state_25998;
(statearr_26033[(15)] = inst_25958__$1);

(statearr_26033[(8)] = inst_25957__$1);

return statearr_26033;
})();
if(cljs.core.truth_(inst_25961)){
var statearr_26034_26072 = state_25998__$1;
(statearr_26034_26072[(1)] = (11));

} else {
var statearr_26035_26073 = state_25998__$1;
(statearr_26035_26073[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (18))){
var inst_25958 = (state_25998[(15)]);
var inst_25951 = (state_25998[(16)]);
var inst_25952 = (state_25998[(17)]);
var inst_25975 = cljs.core.empty_QMARK_.call(null,inst_25951);
var inst_25976 = inst_25952.call(null,inst_25958);
var inst_25977 = cljs.core.not.call(null,inst_25976);
var inst_25978 = (inst_25975) && (inst_25977);
var state_25998__$1 = state_25998;
var statearr_26036_26074 = state_25998__$1;
(statearr_26036_26074[(2)] = inst_25978);

(statearr_26036_26074[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (8))){
var inst_25942 = (state_25998[(7)]);
var state_25998__$1 = state_25998;
var statearr_26037_26075 = state_25998__$1;
(statearr_26037_26075[(2)] = inst_25942);

(statearr_26037_26075[(1)] = (9));


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
});})(c__19118__auto___26045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19056__auto__,c__19118__auto___26045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19057__auto__ = null;
var cljs$core$async$mix_$_state_machine__19057__auto____0 = (function (){
var statearr_26041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26041[(0)] = cljs$core$async$mix_$_state_machine__19057__auto__);

(statearr_26041[(1)] = (1));

return statearr_26041;
});
var cljs$core$async$mix_$_state_machine__19057__auto____1 = (function (state_25998){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26042){if((e26042 instanceof Object)){
var ex__19060__auto__ = e26042;
var statearr_26043_26076 = state_25998;
(statearr_26043_26076[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26077 = state_25998;
state_25998 = G__26077;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19057__auto__ = function(state_25998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19057__auto____1.call(this,state_25998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19057__auto____0;
cljs$core$async$mix_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19057__auto____1;
return cljs$core$async$mix_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19120__auto__ = (function (){var statearr_26044 = f__19119__auto__.call(null);
(statearr_26044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26045);

return statearr_26044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj26079 = {};
return obj26079;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26081 = arguments.length;
switch (G__26081) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__26085 = arguments.length;
switch (G__26085) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16108__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16108__auto__,mults){
return (function (p1__26083_SHARP_){
if(cljs.core.truth_(p1__26083_SHARP_.call(null,topic))){
return p1__26083_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26083_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16108__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26086 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26086 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26087){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26087 = meta26087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26088,meta26087__$1){
var self__ = this;
var _26088__$1 = this;
return (new cljs.core.async.t26086(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26087__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26088){
var self__ = this;
var _26088__$1 = this;
return self__.meta26087;
});})(mults,ensure_mult))
;

cljs.core.async.t26086.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26086.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26086.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26086.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26086.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26087","meta26087",-1948584637,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t26086.cljs$lang$type = true;

cljs.core.async.t26086.cljs$lang$ctorStr = "cljs.core.async/t26086";

cljs.core.async.t26086.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26086");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26086 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26086(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26087){
return (new cljs.core.async.t26086(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26087));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26086(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19118__auto___26209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26209,mults,ensure_mult,p){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26209,mults,ensure_mult,p){
return (function (state_26160){
var state_val_26161 = (state_26160[(1)]);
if((state_val_26161 === (7))){
var inst_26156 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26162_26210 = state_26160__$1;
(statearr_26162_26210[(2)] = inst_26156);

(statearr_26162_26210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (20))){
var state_26160__$1 = state_26160;
var statearr_26163_26211 = state_26160__$1;
(statearr_26163_26211[(2)] = null);

(statearr_26163_26211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (1))){
var state_26160__$1 = state_26160;
var statearr_26164_26212 = state_26160__$1;
(statearr_26164_26212[(2)] = null);

(statearr_26164_26212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (24))){
var inst_26139 = (state_26160[(7)]);
var inst_26148 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26139);
var state_26160__$1 = state_26160;
var statearr_26165_26213 = state_26160__$1;
(statearr_26165_26213[(2)] = inst_26148);

(statearr_26165_26213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (4))){
var inst_26091 = (state_26160[(8)]);
var inst_26091__$1 = (state_26160[(2)]);
var inst_26092 = (inst_26091__$1 == null);
var state_26160__$1 = (function (){var statearr_26166 = state_26160;
(statearr_26166[(8)] = inst_26091__$1);

return statearr_26166;
})();
if(cljs.core.truth_(inst_26092)){
var statearr_26167_26214 = state_26160__$1;
(statearr_26167_26214[(1)] = (5));

} else {
var statearr_26168_26215 = state_26160__$1;
(statearr_26168_26215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (15))){
var inst_26133 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26169_26216 = state_26160__$1;
(statearr_26169_26216[(2)] = inst_26133);

(statearr_26169_26216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (21))){
var inst_26153 = (state_26160[(2)]);
var state_26160__$1 = (function (){var statearr_26170 = state_26160;
(statearr_26170[(9)] = inst_26153);

return statearr_26170;
})();
var statearr_26171_26217 = state_26160__$1;
(statearr_26171_26217[(2)] = null);

(statearr_26171_26217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (13))){
var inst_26115 = (state_26160[(10)]);
var inst_26117 = cljs.core.chunked_seq_QMARK_.call(null,inst_26115);
var state_26160__$1 = state_26160;
if(inst_26117){
var statearr_26172_26218 = state_26160__$1;
(statearr_26172_26218[(1)] = (16));

} else {
var statearr_26173_26219 = state_26160__$1;
(statearr_26173_26219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (22))){
var inst_26145 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
if(cljs.core.truth_(inst_26145)){
var statearr_26174_26220 = state_26160__$1;
(statearr_26174_26220[(1)] = (23));

} else {
var statearr_26175_26221 = state_26160__$1;
(statearr_26175_26221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (6))){
var inst_26091 = (state_26160[(8)]);
var inst_26139 = (state_26160[(7)]);
var inst_26141 = (state_26160[(11)]);
var inst_26139__$1 = topic_fn.call(null,inst_26091);
var inst_26140 = cljs.core.deref.call(null,mults);
var inst_26141__$1 = cljs.core.get.call(null,inst_26140,inst_26139__$1);
var state_26160__$1 = (function (){var statearr_26176 = state_26160;
(statearr_26176[(7)] = inst_26139__$1);

(statearr_26176[(11)] = inst_26141__$1);

return statearr_26176;
})();
if(cljs.core.truth_(inst_26141__$1)){
var statearr_26177_26222 = state_26160__$1;
(statearr_26177_26222[(1)] = (19));

} else {
var statearr_26178_26223 = state_26160__$1;
(statearr_26178_26223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (25))){
var inst_26150 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26179_26224 = state_26160__$1;
(statearr_26179_26224[(2)] = inst_26150);

(statearr_26179_26224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (17))){
var inst_26115 = (state_26160[(10)]);
var inst_26124 = cljs.core.first.call(null,inst_26115);
var inst_26125 = cljs.core.async.muxch_STAR_.call(null,inst_26124);
var inst_26126 = cljs.core.async.close_BANG_.call(null,inst_26125);
var inst_26127 = cljs.core.next.call(null,inst_26115);
var inst_26101 = inst_26127;
var inst_26102 = null;
var inst_26103 = (0);
var inst_26104 = (0);
var state_26160__$1 = (function (){var statearr_26180 = state_26160;
(statearr_26180[(12)] = inst_26103);

(statearr_26180[(13)] = inst_26101);

(statearr_26180[(14)] = inst_26126);

(statearr_26180[(15)] = inst_26104);

(statearr_26180[(16)] = inst_26102);

return statearr_26180;
})();
var statearr_26181_26225 = state_26160__$1;
(statearr_26181_26225[(2)] = null);

(statearr_26181_26225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (3))){
var inst_26158 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26160__$1,inst_26158);
} else {
if((state_val_26161 === (12))){
var inst_26135 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26182_26226 = state_26160__$1;
(statearr_26182_26226[(2)] = inst_26135);

(statearr_26182_26226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (2))){
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26160__$1,(4),ch);
} else {
if((state_val_26161 === (23))){
var state_26160__$1 = state_26160;
var statearr_26183_26227 = state_26160__$1;
(statearr_26183_26227[(2)] = null);

(statearr_26183_26227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (19))){
var inst_26091 = (state_26160[(8)]);
var inst_26141 = (state_26160[(11)]);
var inst_26143 = cljs.core.async.muxch_STAR_.call(null,inst_26141);
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26160__$1,(22),inst_26143,inst_26091);
} else {
if((state_val_26161 === (11))){
var inst_26115 = (state_26160[(10)]);
var inst_26101 = (state_26160[(13)]);
var inst_26115__$1 = cljs.core.seq.call(null,inst_26101);
var state_26160__$1 = (function (){var statearr_26184 = state_26160;
(statearr_26184[(10)] = inst_26115__$1);

return statearr_26184;
})();
if(inst_26115__$1){
var statearr_26185_26228 = state_26160__$1;
(statearr_26185_26228[(1)] = (13));

} else {
var statearr_26186_26229 = state_26160__$1;
(statearr_26186_26229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (9))){
var inst_26137 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26187_26230 = state_26160__$1;
(statearr_26187_26230[(2)] = inst_26137);

(statearr_26187_26230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (5))){
var inst_26098 = cljs.core.deref.call(null,mults);
var inst_26099 = cljs.core.vals.call(null,inst_26098);
var inst_26100 = cljs.core.seq.call(null,inst_26099);
var inst_26101 = inst_26100;
var inst_26102 = null;
var inst_26103 = (0);
var inst_26104 = (0);
var state_26160__$1 = (function (){var statearr_26188 = state_26160;
(statearr_26188[(12)] = inst_26103);

(statearr_26188[(13)] = inst_26101);

(statearr_26188[(15)] = inst_26104);

(statearr_26188[(16)] = inst_26102);

return statearr_26188;
})();
var statearr_26189_26231 = state_26160__$1;
(statearr_26189_26231[(2)] = null);

(statearr_26189_26231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (14))){
var state_26160__$1 = state_26160;
var statearr_26193_26232 = state_26160__$1;
(statearr_26193_26232[(2)] = null);

(statearr_26193_26232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (16))){
var inst_26115 = (state_26160[(10)]);
var inst_26119 = cljs.core.chunk_first.call(null,inst_26115);
var inst_26120 = cljs.core.chunk_rest.call(null,inst_26115);
var inst_26121 = cljs.core.count.call(null,inst_26119);
var inst_26101 = inst_26120;
var inst_26102 = inst_26119;
var inst_26103 = inst_26121;
var inst_26104 = (0);
var state_26160__$1 = (function (){var statearr_26194 = state_26160;
(statearr_26194[(12)] = inst_26103);

(statearr_26194[(13)] = inst_26101);

(statearr_26194[(15)] = inst_26104);

(statearr_26194[(16)] = inst_26102);

return statearr_26194;
})();
var statearr_26195_26233 = state_26160__$1;
(statearr_26195_26233[(2)] = null);

(statearr_26195_26233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (10))){
var inst_26103 = (state_26160[(12)]);
var inst_26101 = (state_26160[(13)]);
var inst_26104 = (state_26160[(15)]);
var inst_26102 = (state_26160[(16)]);
var inst_26109 = cljs.core._nth.call(null,inst_26102,inst_26104);
var inst_26110 = cljs.core.async.muxch_STAR_.call(null,inst_26109);
var inst_26111 = cljs.core.async.close_BANG_.call(null,inst_26110);
var inst_26112 = (inst_26104 + (1));
var tmp26190 = inst_26103;
var tmp26191 = inst_26101;
var tmp26192 = inst_26102;
var inst_26101__$1 = tmp26191;
var inst_26102__$1 = tmp26192;
var inst_26103__$1 = tmp26190;
var inst_26104__$1 = inst_26112;
var state_26160__$1 = (function (){var statearr_26196 = state_26160;
(statearr_26196[(12)] = inst_26103__$1);

(statearr_26196[(13)] = inst_26101__$1);

(statearr_26196[(17)] = inst_26111);

(statearr_26196[(15)] = inst_26104__$1);

(statearr_26196[(16)] = inst_26102__$1);

return statearr_26196;
})();
var statearr_26197_26234 = state_26160__$1;
(statearr_26197_26234[(2)] = null);

(statearr_26197_26234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (18))){
var inst_26130 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26198_26235 = state_26160__$1;
(statearr_26198_26235[(2)] = inst_26130);

(statearr_26198_26235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (8))){
var inst_26103 = (state_26160[(12)]);
var inst_26104 = (state_26160[(15)]);
var inst_26106 = (inst_26104 < inst_26103);
var inst_26107 = inst_26106;
var state_26160__$1 = state_26160;
if(cljs.core.truth_(inst_26107)){
var statearr_26199_26236 = state_26160__$1;
(statearr_26199_26236[(1)] = (10));

} else {
var statearr_26200_26237 = state_26160__$1;
(statearr_26200_26237[(1)] = (11));

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
});})(c__19118__auto___26209,mults,ensure_mult,p))
;
return ((function (switch__19056__auto__,c__19118__auto___26209,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26204[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26204[(1)] = (1));

return statearr_26204;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26160){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26205){if((e26205 instanceof Object)){
var ex__19060__auto__ = e26205;
var statearr_26206_26238 = state_26160;
(statearr_26206_26238[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26239 = state_26160;
state_26160 = G__26239;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26209,mults,ensure_mult,p))
})();
var state__19120__auto__ = (function (){var statearr_26207 = f__19119__auto__.call(null);
(statearr_26207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26209);

return statearr_26207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26209,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__26241 = arguments.length;
switch (G__26241) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__26244 = arguments.length;
switch (G__26244) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__26247 = arguments.length;
switch (G__26247) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__19118__auto___26317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26286){
var state_val_26287 = (state_26286[(1)]);
if((state_val_26287 === (7))){
var state_26286__$1 = state_26286;
var statearr_26288_26318 = state_26286__$1;
(statearr_26288_26318[(2)] = null);

(statearr_26288_26318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (1))){
var state_26286__$1 = state_26286;
var statearr_26289_26319 = state_26286__$1;
(statearr_26289_26319[(2)] = null);

(statearr_26289_26319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (4))){
var inst_26250 = (state_26286[(7)]);
var inst_26252 = (inst_26250 < cnt);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26252)){
var statearr_26290_26320 = state_26286__$1;
(statearr_26290_26320[(1)] = (6));

} else {
var statearr_26291_26321 = state_26286__$1;
(statearr_26291_26321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (15))){
var inst_26282 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26292_26322 = state_26286__$1;
(statearr_26292_26322[(2)] = inst_26282);

(statearr_26292_26322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (13))){
var inst_26275 = cljs.core.async.close_BANG_.call(null,out);
var state_26286__$1 = state_26286;
var statearr_26293_26323 = state_26286__$1;
(statearr_26293_26323[(2)] = inst_26275);

(statearr_26293_26323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (6))){
var state_26286__$1 = state_26286;
var statearr_26294_26324 = state_26286__$1;
(statearr_26294_26324[(2)] = null);

(statearr_26294_26324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (3))){
var inst_26284 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26286__$1,inst_26284);
} else {
if((state_val_26287 === (12))){
var inst_26272 = (state_26286[(8)]);
var inst_26272__$1 = (state_26286[(2)]);
var inst_26273 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26272__$1);
var state_26286__$1 = (function (){var statearr_26295 = state_26286;
(statearr_26295[(8)] = inst_26272__$1);

return statearr_26295;
})();
if(cljs.core.truth_(inst_26273)){
var statearr_26296_26325 = state_26286__$1;
(statearr_26296_26325[(1)] = (13));

} else {
var statearr_26297_26326 = state_26286__$1;
(statearr_26297_26326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (2))){
var inst_26249 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26250 = (0);
var state_26286__$1 = (function (){var statearr_26298 = state_26286;
(statearr_26298[(7)] = inst_26250);

(statearr_26298[(9)] = inst_26249);

return statearr_26298;
})();
var statearr_26299_26327 = state_26286__$1;
(statearr_26299_26327[(2)] = null);

(statearr_26299_26327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (11))){
var inst_26250 = (state_26286[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26286,(10),Object,null,(9));
var inst_26259 = chs__$1.call(null,inst_26250);
var inst_26260 = done.call(null,inst_26250);
var inst_26261 = cljs.core.async.take_BANG_.call(null,inst_26259,inst_26260);
var state_26286__$1 = state_26286;
var statearr_26300_26328 = state_26286__$1;
(statearr_26300_26328[(2)] = inst_26261);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26286__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (9))){
var inst_26250 = (state_26286[(7)]);
var inst_26263 = (state_26286[(2)]);
var inst_26264 = (inst_26250 + (1));
var inst_26250__$1 = inst_26264;
var state_26286__$1 = (function (){var statearr_26301 = state_26286;
(statearr_26301[(7)] = inst_26250__$1);

(statearr_26301[(10)] = inst_26263);

return statearr_26301;
})();
var statearr_26302_26329 = state_26286__$1;
(statearr_26302_26329[(2)] = null);

(statearr_26302_26329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (5))){
var inst_26270 = (state_26286[(2)]);
var state_26286__$1 = (function (){var statearr_26303 = state_26286;
(statearr_26303[(11)] = inst_26270);

return statearr_26303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(12),dchan);
} else {
if((state_val_26287 === (14))){
var inst_26272 = (state_26286[(8)]);
var inst_26277 = cljs.core.apply.call(null,f,inst_26272);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26286__$1,(16),out,inst_26277);
} else {
if((state_val_26287 === (16))){
var inst_26279 = (state_26286[(2)]);
var state_26286__$1 = (function (){var statearr_26304 = state_26286;
(statearr_26304[(12)] = inst_26279);

return statearr_26304;
})();
var statearr_26305_26330 = state_26286__$1;
(statearr_26305_26330[(2)] = null);

(statearr_26305_26330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (10))){
var inst_26254 = (state_26286[(2)]);
var inst_26255 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26286__$1 = (function (){var statearr_26306 = state_26286;
(statearr_26306[(13)] = inst_26254);

return statearr_26306;
})();
var statearr_26307_26331 = state_26286__$1;
(statearr_26307_26331[(2)] = inst_26255);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26286__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (8))){
var inst_26268 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26308_26332 = state_26286__$1;
(statearr_26308_26332[(2)] = inst_26268);

(statearr_26308_26332[(1)] = (5));


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
});})(c__19118__auto___26317,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19056__auto__,c__19118__auto___26317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26312[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26312[(1)] = (1));

return statearr_26312;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26286){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26313){if((e26313 instanceof Object)){
var ex__19060__auto__ = e26313;
var statearr_26314_26333 = state_26286;
(statearr_26314_26333[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26334 = state_26286;
state_26286 = G__26334;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26317,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19120__auto__ = (function (){var statearr_26315 = f__19119__auto__.call(null);
(statearr_26315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26317);

return statearr_26315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26317,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__26337 = arguments.length;
switch (G__26337) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26392,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26392,out){
return (function (state_26367){
var state_val_26368 = (state_26367[(1)]);
if((state_val_26368 === (7))){
var inst_26346 = (state_26367[(7)]);
var inst_26347 = (state_26367[(8)]);
var inst_26346__$1 = (state_26367[(2)]);
var inst_26347__$1 = cljs.core.nth.call(null,inst_26346__$1,(0),null);
var inst_26348 = cljs.core.nth.call(null,inst_26346__$1,(1),null);
var inst_26349 = (inst_26347__$1 == null);
var state_26367__$1 = (function (){var statearr_26369 = state_26367;
(statearr_26369[(7)] = inst_26346__$1);

(statearr_26369[(9)] = inst_26348);

(statearr_26369[(8)] = inst_26347__$1);

return statearr_26369;
})();
if(cljs.core.truth_(inst_26349)){
var statearr_26370_26393 = state_26367__$1;
(statearr_26370_26393[(1)] = (8));

} else {
var statearr_26371_26394 = state_26367__$1;
(statearr_26371_26394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (1))){
var inst_26338 = cljs.core.vec.call(null,chs);
var inst_26339 = inst_26338;
var state_26367__$1 = (function (){var statearr_26372 = state_26367;
(statearr_26372[(10)] = inst_26339);

return statearr_26372;
})();
var statearr_26373_26395 = state_26367__$1;
(statearr_26373_26395[(2)] = null);

(statearr_26373_26395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (4))){
var inst_26339 = (state_26367[(10)]);
var state_26367__$1 = state_26367;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26367__$1,(7),inst_26339);
} else {
if((state_val_26368 === (6))){
var inst_26363 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26374_26396 = state_26367__$1;
(statearr_26374_26396[(2)] = inst_26363);

(statearr_26374_26396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (3))){
var inst_26365 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26367__$1,inst_26365);
} else {
if((state_val_26368 === (2))){
var inst_26339 = (state_26367[(10)]);
var inst_26341 = cljs.core.count.call(null,inst_26339);
var inst_26342 = (inst_26341 > (0));
var state_26367__$1 = state_26367;
if(cljs.core.truth_(inst_26342)){
var statearr_26376_26397 = state_26367__$1;
(statearr_26376_26397[(1)] = (4));

} else {
var statearr_26377_26398 = state_26367__$1;
(statearr_26377_26398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (11))){
var inst_26339 = (state_26367[(10)]);
var inst_26356 = (state_26367[(2)]);
var tmp26375 = inst_26339;
var inst_26339__$1 = tmp26375;
var state_26367__$1 = (function (){var statearr_26378 = state_26367;
(statearr_26378[(11)] = inst_26356);

(statearr_26378[(10)] = inst_26339__$1);

return statearr_26378;
})();
var statearr_26379_26399 = state_26367__$1;
(statearr_26379_26399[(2)] = null);

(statearr_26379_26399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (9))){
var inst_26347 = (state_26367[(8)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26367__$1,(11),out,inst_26347);
} else {
if((state_val_26368 === (5))){
var inst_26361 = cljs.core.async.close_BANG_.call(null,out);
var state_26367__$1 = state_26367;
var statearr_26380_26400 = state_26367__$1;
(statearr_26380_26400[(2)] = inst_26361);

(statearr_26380_26400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (10))){
var inst_26359 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26381_26401 = state_26367__$1;
(statearr_26381_26401[(2)] = inst_26359);

(statearr_26381_26401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (8))){
var inst_26346 = (state_26367[(7)]);
var inst_26348 = (state_26367[(9)]);
var inst_26347 = (state_26367[(8)]);
var inst_26339 = (state_26367[(10)]);
var inst_26351 = (function (){var cs = inst_26339;
var vec__26344 = inst_26346;
var v = inst_26347;
var c = inst_26348;
return ((function (cs,vec__26344,v,c,inst_26346,inst_26348,inst_26347,inst_26339,state_val_26368,c__19118__auto___26392,out){
return (function (p1__26335_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26335_SHARP_);
});
;})(cs,vec__26344,v,c,inst_26346,inst_26348,inst_26347,inst_26339,state_val_26368,c__19118__auto___26392,out))
})();
var inst_26352 = cljs.core.filterv.call(null,inst_26351,inst_26339);
var inst_26339__$1 = inst_26352;
var state_26367__$1 = (function (){var statearr_26382 = state_26367;
(statearr_26382[(10)] = inst_26339__$1);

return statearr_26382;
})();
var statearr_26383_26402 = state_26367__$1;
(statearr_26383_26402[(2)] = null);

(statearr_26383_26402[(1)] = (2));


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
});})(c__19118__auto___26392,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26392,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26387 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26387[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26387[(1)] = (1));

return statearr_26387;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26367){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26388){if((e26388 instanceof Object)){
var ex__19060__auto__ = e26388;
var statearr_26389_26403 = state_26367;
(statearr_26389_26403[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26404 = state_26367;
state_26367 = G__26404;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26392,out))
})();
var state__19120__auto__ = (function (){var statearr_26390 = f__19119__auto__.call(null);
(statearr_26390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26392);

return statearr_26390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26392,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__26406 = arguments.length;
switch (G__26406) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26454,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26454,out){
return (function (state_26430){
var state_val_26431 = (state_26430[(1)]);
if((state_val_26431 === (7))){
var inst_26412 = (state_26430[(7)]);
var inst_26412__$1 = (state_26430[(2)]);
var inst_26413 = (inst_26412__$1 == null);
var inst_26414 = cljs.core.not.call(null,inst_26413);
var state_26430__$1 = (function (){var statearr_26432 = state_26430;
(statearr_26432[(7)] = inst_26412__$1);

return statearr_26432;
})();
if(inst_26414){
var statearr_26433_26455 = state_26430__$1;
(statearr_26433_26455[(1)] = (8));

} else {
var statearr_26434_26456 = state_26430__$1;
(statearr_26434_26456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (1))){
var inst_26407 = (0);
var state_26430__$1 = (function (){var statearr_26435 = state_26430;
(statearr_26435[(8)] = inst_26407);

return statearr_26435;
})();
var statearr_26436_26457 = state_26430__$1;
(statearr_26436_26457[(2)] = null);

(statearr_26436_26457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (4))){
var state_26430__$1 = state_26430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26430__$1,(7),ch);
} else {
if((state_val_26431 === (6))){
var inst_26425 = (state_26430[(2)]);
var state_26430__$1 = state_26430;
var statearr_26437_26458 = state_26430__$1;
(statearr_26437_26458[(2)] = inst_26425);

(statearr_26437_26458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (3))){
var inst_26427 = (state_26430[(2)]);
var inst_26428 = cljs.core.async.close_BANG_.call(null,out);
var state_26430__$1 = (function (){var statearr_26438 = state_26430;
(statearr_26438[(9)] = inst_26427);

return statearr_26438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26430__$1,inst_26428);
} else {
if((state_val_26431 === (2))){
var inst_26407 = (state_26430[(8)]);
var inst_26409 = (inst_26407 < n);
var state_26430__$1 = state_26430;
if(cljs.core.truth_(inst_26409)){
var statearr_26439_26459 = state_26430__$1;
(statearr_26439_26459[(1)] = (4));

} else {
var statearr_26440_26460 = state_26430__$1;
(statearr_26440_26460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (11))){
var inst_26407 = (state_26430[(8)]);
var inst_26417 = (state_26430[(2)]);
var inst_26418 = (inst_26407 + (1));
var inst_26407__$1 = inst_26418;
var state_26430__$1 = (function (){var statearr_26441 = state_26430;
(statearr_26441[(8)] = inst_26407__$1);

(statearr_26441[(10)] = inst_26417);

return statearr_26441;
})();
var statearr_26442_26461 = state_26430__$1;
(statearr_26442_26461[(2)] = null);

(statearr_26442_26461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (9))){
var state_26430__$1 = state_26430;
var statearr_26443_26462 = state_26430__$1;
(statearr_26443_26462[(2)] = null);

(statearr_26443_26462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (5))){
var state_26430__$1 = state_26430;
var statearr_26444_26463 = state_26430__$1;
(statearr_26444_26463[(2)] = null);

(statearr_26444_26463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (10))){
var inst_26422 = (state_26430[(2)]);
var state_26430__$1 = state_26430;
var statearr_26445_26464 = state_26430__$1;
(statearr_26445_26464[(2)] = inst_26422);

(statearr_26445_26464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (8))){
var inst_26412 = (state_26430[(7)]);
var state_26430__$1 = state_26430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26430__$1,(11),out,inst_26412);
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
});})(c__19118__auto___26454,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26454,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26449[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26449[(1)] = (1));

return statearr_26449;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26430){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26450){if((e26450 instanceof Object)){
var ex__19060__auto__ = e26450;
var statearr_26451_26465 = state_26430;
(statearr_26451_26465[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26466 = state_26430;
state_26430 = G__26466;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26454,out))
})();
var state__19120__auto__ = (function (){var statearr_26452 = f__19119__auto__.call(null);
(statearr_26452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26454);

return statearr_26452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26454,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26474 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26474 = (function (map_LT_,f,ch,meta26475){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26475 = meta26475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26476,meta26475__$1){
var self__ = this;
var _26476__$1 = this;
return (new cljs.core.async.t26474(self__.map_LT_,self__.f,self__.ch,meta26475__$1));
});

cljs.core.async.t26474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26476){
var self__ = this;
var _26476__$1 = this;
return self__.meta26475;
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26477 = (function (map_LT_,f,ch,meta26475,_,fn1,meta26478){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26475 = meta26475;
this._ = _;
this.fn1 = fn1;
this.meta26478 = meta26478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26479,meta26478__$1){
var self__ = this;
var _26479__$1 = this;
return (new cljs.core.async.t26477(self__.map_LT_,self__.f,self__.ch,self__.meta26475,self__._,self__.fn1,meta26478__$1));
});})(___$1))
;

cljs.core.async.t26477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26479){
var self__ = this;
var _26479__$1 = this;
return self__.meta26478;
});})(___$1))
;

cljs.core.async.t26477.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26467_SHARP_){
return f1.call(null,(((p1__26467_SHARP_ == null))?null:self__.f.call(null,p1__26467_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26477.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26475","meta26475",-421623457,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26478","meta26478",487381144,null)], null);
});})(___$1))
;

cljs.core.async.t26477.cljs$lang$type = true;

cljs.core.async.t26477.cljs$lang$ctorStr = "cljs.core.async/t26477";

cljs.core.async.t26477.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26477");
});})(___$1))
;

cljs.core.async.__GT_t26477 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26477(map_LT___$1,f__$1,ch__$1,meta26475__$1,___$2,fn1__$1,meta26478){
return (new cljs.core.async.t26477(map_LT___$1,f__$1,ch__$1,meta26475__$1,___$2,fn1__$1,meta26478));
});})(___$1))
;

}

return (new cljs.core.async.t26477(self__.map_LT_,self__.f,self__.ch,self__.meta26475,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16096__auto__ = ret;
if(cljs.core.truth_(and__16096__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16096__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26475","meta26475",-421623457,null)], null);
});

cljs.core.async.t26474.cljs$lang$type = true;

cljs.core.async.t26474.cljs$lang$ctorStr = "cljs.core.async/t26474";

cljs.core.async.t26474.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26474");
});

cljs.core.async.__GT_t26474 = (function cljs$core$async$map_LT__$___GT_t26474(map_LT___$1,f__$1,ch__$1,meta26475){
return (new cljs.core.async.t26474(map_LT___$1,f__$1,ch__$1,meta26475));
});

}

return (new cljs.core.async.t26474(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26483 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26483 = (function (map_GT_,f,ch,meta26484){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26484 = meta26484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26485,meta26484__$1){
var self__ = this;
var _26485__$1 = this;
return (new cljs.core.async.t26483(self__.map_GT_,self__.f,self__.ch,meta26484__$1));
});

cljs.core.async.t26483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26485){
var self__ = this;
var _26485__$1 = this;
return self__.meta26484;
});

cljs.core.async.t26483.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26483.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26483.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26484","meta26484",-1780430841,null)], null);
});

cljs.core.async.t26483.cljs$lang$type = true;

cljs.core.async.t26483.cljs$lang$ctorStr = "cljs.core.async/t26483";

cljs.core.async.t26483.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26483");
});

cljs.core.async.__GT_t26483 = (function cljs$core$async$map_GT__$___GT_t26483(map_GT___$1,f__$1,ch__$1,meta26484){
return (new cljs.core.async.t26483(map_GT___$1,f__$1,ch__$1,meta26484));
});

}

return (new cljs.core.async.t26483(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26489 = (function (filter_GT_,p,ch,meta26490){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26490 = meta26490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26491,meta26490__$1){
var self__ = this;
var _26491__$1 = this;
return (new cljs.core.async.t26489(self__.filter_GT_,self__.p,self__.ch,meta26490__$1));
});

cljs.core.async.t26489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26491){
var self__ = this;
var _26491__$1 = this;
return self__.meta26490;
});

cljs.core.async.t26489.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26489.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26489.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26490","meta26490",1899339910,null)], null);
});

cljs.core.async.t26489.cljs$lang$type = true;

cljs.core.async.t26489.cljs$lang$ctorStr = "cljs.core.async/t26489";

cljs.core.async.t26489.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26489");
});

cljs.core.async.__GT_t26489 = (function cljs$core$async$filter_GT__$___GT_t26489(filter_GT___$1,p__$1,ch__$1,meta26490){
return (new cljs.core.async.t26489(filter_GT___$1,p__$1,ch__$1,meta26490));
});

}

return (new cljs.core.async.t26489(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__26493 = arguments.length;
switch (G__26493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26536,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26536,out){
return (function (state_26514){
var state_val_26515 = (state_26514[(1)]);
if((state_val_26515 === (7))){
var inst_26510 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26516_26537 = state_26514__$1;
(statearr_26516_26537[(2)] = inst_26510);

(statearr_26516_26537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (1))){
var state_26514__$1 = state_26514;
var statearr_26517_26538 = state_26514__$1;
(statearr_26517_26538[(2)] = null);

(statearr_26517_26538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (4))){
var inst_26496 = (state_26514[(7)]);
var inst_26496__$1 = (state_26514[(2)]);
var inst_26497 = (inst_26496__$1 == null);
var state_26514__$1 = (function (){var statearr_26518 = state_26514;
(statearr_26518[(7)] = inst_26496__$1);

return statearr_26518;
})();
if(cljs.core.truth_(inst_26497)){
var statearr_26519_26539 = state_26514__$1;
(statearr_26519_26539[(1)] = (5));

} else {
var statearr_26520_26540 = state_26514__$1;
(statearr_26520_26540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (6))){
var inst_26496 = (state_26514[(7)]);
var inst_26501 = p.call(null,inst_26496);
var state_26514__$1 = state_26514;
if(cljs.core.truth_(inst_26501)){
var statearr_26521_26541 = state_26514__$1;
(statearr_26521_26541[(1)] = (8));

} else {
var statearr_26522_26542 = state_26514__$1;
(statearr_26522_26542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (3))){
var inst_26512 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26514__$1,inst_26512);
} else {
if((state_val_26515 === (2))){
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26514__$1,(4),ch);
} else {
if((state_val_26515 === (11))){
var inst_26504 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26523_26543 = state_26514__$1;
(statearr_26523_26543[(2)] = inst_26504);

(statearr_26523_26543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (9))){
var state_26514__$1 = state_26514;
var statearr_26524_26544 = state_26514__$1;
(statearr_26524_26544[(2)] = null);

(statearr_26524_26544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (5))){
var inst_26499 = cljs.core.async.close_BANG_.call(null,out);
var state_26514__$1 = state_26514;
var statearr_26525_26545 = state_26514__$1;
(statearr_26525_26545[(2)] = inst_26499);

(statearr_26525_26545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (10))){
var inst_26507 = (state_26514[(2)]);
var state_26514__$1 = (function (){var statearr_26526 = state_26514;
(statearr_26526[(8)] = inst_26507);

return statearr_26526;
})();
var statearr_26527_26546 = state_26514__$1;
(statearr_26527_26546[(2)] = null);

(statearr_26527_26546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (8))){
var inst_26496 = (state_26514[(7)]);
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26514__$1,(11),out,inst_26496);
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
});})(c__19118__auto___26536,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26536,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26531 = [null,null,null,null,null,null,null,null,null];
(statearr_26531[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26531[(1)] = (1));

return statearr_26531;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26514){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26532){if((e26532 instanceof Object)){
var ex__19060__auto__ = e26532;
var statearr_26533_26547 = state_26514;
(statearr_26533_26547[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26548 = state_26514;
state_26514 = G__26548;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26536,out))
})();
var state__19120__auto__ = (function (){var statearr_26534 = f__19119__auto__.call(null);
(statearr_26534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26536);

return statearr_26534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26536,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__26550 = arguments.length;
switch (G__26550) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_26717){
var state_val_26718 = (state_26717[(1)]);
if((state_val_26718 === (7))){
var inst_26713 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26719_26760 = state_26717__$1;
(statearr_26719_26760[(2)] = inst_26713);

(statearr_26719_26760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (20))){
var inst_26683 = (state_26717[(7)]);
var inst_26694 = (state_26717[(2)]);
var inst_26695 = cljs.core.next.call(null,inst_26683);
var inst_26669 = inst_26695;
var inst_26670 = null;
var inst_26671 = (0);
var inst_26672 = (0);
var state_26717__$1 = (function (){var statearr_26720 = state_26717;
(statearr_26720[(8)] = inst_26671);

(statearr_26720[(9)] = inst_26670);

(statearr_26720[(10)] = inst_26669);

(statearr_26720[(11)] = inst_26694);

(statearr_26720[(12)] = inst_26672);

return statearr_26720;
})();
var statearr_26721_26761 = state_26717__$1;
(statearr_26721_26761[(2)] = null);

(statearr_26721_26761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (1))){
var state_26717__$1 = state_26717;
var statearr_26722_26762 = state_26717__$1;
(statearr_26722_26762[(2)] = null);

(statearr_26722_26762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (4))){
var inst_26658 = (state_26717[(13)]);
var inst_26658__$1 = (state_26717[(2)]);
var inst_26659 = (inst_26658__$1 == null);
var state_26717__$1 = (function (){var statearr_26723 = state_26717;
(statearr_26723[(13)] = inst_26658__$1);

return statearr_26723;
})();
if(cljs.core.truth_(inst_26659)){
var statearr_26724_26763 = state_26717__$1;
(statearr_26724_26763[(1)] = (5));

} else {
var statearr_26725_26764 = state_26717__$1;
(statearr_26725_26764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (15))){
var state_26717__$1 = state_26717;
var statearr_26729_26765 = state_26717__$1;
(statearr_26729_26765[(2)] = null);

(statearr_26729_26765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (21))){
var state_26717__$1 = state_26717;
var statearr_26730_26766 = state_26717__$1;
(statearr_26730_26766[(2)] = null);

(statearr_26730_26766[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (13))){
var inst_26671 = (state_26717[(8)]);
var inst_26670 = (state_26717[(9)]);
var inst_26669 = (state_26717[(10)]);
var inst_26672 = (state_26717[(12)]);
var inst_26679 = (state_26717[(2)]);
var inst_26680 = (inst_26672 + (1));
var tmp26726 = inst_26671;
var tmp26727 = inst_26670;
var tmp26728 = inst_26669;
var inst_26669__$1 = tmp26728;
var inst_26670__$1 = tmp26727;
var inst_26671__$1 = tmp26726;
var inst_26672__$1 = inst_26680;
var state_26717__$1 = (function (){var statearr_26731 = state_26717;
(statearr_26731[(8)] = inst_26671__$1);

(statearr_26731[(9)] = inst_26670__$1);

(statearr_26731[(10)] = inst_26669__$1);

(statearr_26731[(12)] = inst_26672__$1);

(statearr_26731[(14)] = inst_26679);

return statearr_26731;
})();
var statearr_26732_26767 = state_26717__$1;
(statearr_26732_26767[(2)] = null);

(statearr_26732_26767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (22))){
var state_26717__$1 = state_26717;
var statearr_26733_26768 = state_26717__$1;
(statearr_26733_26768[(2)] = null);

(statearr_26733_26768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (6))){
var inst_26658 = (state_26717[(13)]);
var inst_26667 = f.call(null,inst_26658);
var inst_26668 = cljs.core.seq.call(null,inst_26667);
var inst_26669 = inst_26668;
var inst_26670 = null;
var inst_26671 = (0);
var inst_26672 = (0);
var state_26717__$1 = (function (){var statearr_26734 = state_26717;
(statearr_26734[(8)] = inst_26671);

(statearr_26734[(9)] = inst_26670);

(statearr_26734[(10)] = inst_26669);

(statearr_26734[(12)] = inst_26672);

return statearr_26734;
})();
var statearr_26735_26769 = state_26717__$1;
(statearr_26735_26769[(2)] = null);

(statearr_26735_26769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (17))){
var inst_26683 = (state_26717[(7)]);
var inst_26687 = cljs.core.chunk_first.call(null,inst_26683);
var inst_26688 = cljs.core.chunk_rest.call(null,inst_26683);
var inst_26689 = cljs.core.count.call(null,inst_26687);
var inst_26669 = inst_26688;
var inst_26670 = inst_26687;
var inst_26671 = inst_26689;
var inst_26672 = (0);
var state_26717__$1 = (function (){var statearr_26736 = state_26717;
(statearr_26736[(8)] = inst_26671);

(statearr_26736[(9)] = inst_26670);

(statearr_26736[(10)] = inst_26669);

(statearr_26736[(12)] = inst_26672);

return statearr_26736;
})();
var statearr_26737_26770 = state_26717__$1;
(statearr_26737_26770[(2)] = null);

(statearr_26737_26770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (3))){
var inst_26715 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26717__$1,inst_26715);
} else {
if((state_val_26718 === (12))){
var inst_26703 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26738_26771 = state_26717__$1;
(statearr_26738_26771[(2)] = inst_26703);

(statearr_26738_26771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (2))){
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26717__$1,(4),in$);
} else {
if((state_val_26718 === (23))){
var inst_26711 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26739_26772 = state_26717__$1;
(statearr_26739_26772[(2)] = inst_26711);

(statearr_26739_26772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (19))){
var inst_26698 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26740_26773 = state_26717__$1;
(statearr_26740_26773[(2)] = inst_26698);

(statearr_26740_26773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (11))){
var inst_26683 = (state_26717[(7)]);
var inst_26669 = (state_26717[(10)]);
var inst_26683__$1 = cljs.core.seq.call(null,inst_26669);
var state_26717__$1 = (function (){var statearr_26741 = state_26717;
(statearr_26741[(7)] = inst_26683__$1);

return statearr_26741;
})();
if(inst_26683__$1){
var statearr_26742_26774 = state_26717__$1;
(statearr_26742_26774[(1)] = (14));

} else {
var statearr_26743_26775 = state_26717__$1;
(statearr_26743_26775[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (9))){
var inst_26705 = (state_26717[(2)]);
var inst_26706 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26717__$1 = (function (){var statearr_26744 = state_26717;
(statearr_26744[(15)] = inst_26705);

return statearr_26744;
})();
if(cljs.core.truth_(inst_26706)){
var statearr_26745_26776 = state_26717__$1;
(statearr_26745_26776[(1)] = (21));

} else {
var statearr_26746_26777 = state_26717__$1;
(statearr_26746_26777[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (5))){
var inst_26661 = cljs.core.async.close_BANG_.call(null,out);
var state_26717__$1 = state_26717;
var statearr_26747_26778 = state_26717__$1;
(statearr_26747_26778[(2)] = inst_26661);

(statearr_26747_26778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (14))){
var inst_26683 = (state_26717[(7)]);
var inst_26685 = cljs.core.chunked_seq_QMARK_.call(null,inst_26683);
var state_26717__$1 = state_26717;
if(inst_26685){
var statearr_26748_26779 = state_26717__$1;
(statearr_26748_26779[(1)] = (17));

} else {
var statearr_26749_26780 = state_26717__$1;
(statearr_26749_26780[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (16))){
var inst_26701 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26750_26781 = state_26717__$1;
(statearr_26750_26781[(2)] = inst_26701);

(statearr_26750_26781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (10))){
var inst_26670 = (state_26717[(9)]);
var inst_26672 = (state_26717[(12)]);
var inst_26677 = cljs.core._nth.call(null,inst_26670,inst_26672);
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26717__$1,(13),out,inst_26677);
} else {
if((state_val_26718 === (18))){
var inst_26683 = (state_26717[(7)]);
var inst_26692 = cljs.core.first.call(null,inst_26683);
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26717__$1,(20),out,inst_26692);
} else {
if((state_val_26718 === (8))){
var inst_26671 = (state_26717[(8)]);
var inst_26672 = (state_26717[(12)]);
var inst_26674 = (inst_26672 < inst_26671);
var inst_26675 = inst_26674;
var state_26717__$1 = state_26717;
if(cljs.core.truth_(inst_26675)){
var statearr_26751_26782 = state_26717__$1;
(statearr_26751_26782[(1)] = (10));

} else {
var statearr_26752_26783 = state_26717__$1;
(statearr_26752_26783[(1)] = (11));

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
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_26756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26756[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__);

(statearr_26756[(1)] = (1));

return statearr_26756;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____1 = (function (state_26717){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26757){if((e26757 instanceof Object)){
var ex__19060__auto__ = e26757;
var statearr_26758_26784 = state_26717;
(statearr_26758_26784[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26785 = state_26717;
state_26717 = G__26785;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__ = function(state_26717){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____1.call(this,state_26717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_26759 = f__19119__auto__.call(null);
(statearr_26759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_26759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__26787 = arguments.length;
switch (G__26787) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__26790 = arguments.length;
switch (G__26790) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__26793 = arguments.length;
switch (G__26793) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26843,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26843,out){
return (function (state_26817){
var state_val_26818 = (state_26817[(1)]);
if((state_val_26818 === (7))){
var inst_26812 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26819_26844 = state_26817__$1;
(statearr_26819_26844[(2)] = inst_26812);

(statearr_26819_26844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (1))){
var inst_26794 = null;
var state_26817__$1 = (function (){var statearr_26820 = state_26817;
(statearr_26820[(7)] = inst_26794);

return statearr_26820;
})();
var statearr_26821_26845 = state_26817__$1;
(statearr_26821_26845[(2)] = null);

(statearr_26821_26845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (4))){
var inst_26797 = (state_26817[(8)]);
var inst_26797__$1 = (state_26817[(2)]);
var inst_26798 = (inst_26797__$1 == null);
var inst_26799 = cljs.core.not.call(null,inst_26798);
var state_26817__$1 = (function (){var statearr_26822 = state_26817;
(statearr_26822[(8)] = inst_26797__$1);

return statearr_26822;
})();
if(inst_26799){
var statearr_26823_26846 = state_26817__$1;
(statearr_26823_26846[(1)] = (5));

} else {
var statearr_26824_26847 = state_26817__$1;
(statearr_26824_26847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (6))){
var state_26817__$1 = state_26817;
var statearr_26825_26848 = state_26817__$1;
(statearr_26825_26848[(2)] = null);

(statearr_26825_26848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (3))){
var inst_26814 = (state_26817[(2)]);
var inst_26815 = cljs.core.async.close_BANG_.call(null,out);
var state_26817__$1 = (function (){var statearr_26826 = state_26817;
(statearr_26826[(9)] = inst_26814);

return statearr_26826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26817__$1,inst_26815);
} else {
if((state_val_26818 === (2))){
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26817__$1,(4),ch);
} else {
if((state_val_26818 === (11))){
var inst_26797 = (state_26817[(8)]);
var inst_26806 = (state_26817[(2)]);
var inst_26794 = inst_26797;
var state_26817__$1 = (function (){var statearr_26827 = state_26817;
(statearr_26827[(10)] = inst_26806);

(statearr_26827[(7)] = inst_26794);

return statearr_26827;
})();
var statearr_26828_26849 = state_26817__$1;
(statearr_26828_26849[(2)] = null);

(statearr_26828_26849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (9))){
var inst_26797 = (state_26817[(8)]);
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26817__$1,(11),out,inst_26797);
} else {
if((state_val_26818 === (5))){
var inst_26797 = (state_26817[(8)]);
var inst_26794 = (state_26817[(7)]);
var inst_26801 = cljs.core._EQ_.call(null,inst_26797,inst_26794);
var state_26817__$1 = state_26817;
if(inst_26801){
var statearr_26830_26850 = state_26817__$1;
(statearr_26830_26850[(1)] = (8));

} else {
var statearr_26831_26851 = state_26817__$1;
(statearr_26831_26851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (10))){
var inst_26809 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26832_26852 = state_26817__$1;
(statearr_26832_26852[(2)] = inst_26809);

(statearr_26832_26852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (8))){
var inst_26794 = (state_26817[(7)]);
var tmp26829 = inst_26794;
var inst_26794__$1 = tmp26829;
var state_26817__$1 = (function (){var statearr_26833 = state_26817;
(statearr_26833[(7)] = inst_26794__$1);

return statearr_26833;
})();
var statearr_26834_26853 = state_26817__$1;
(statearr_26834_26853[(2)] = null);

(statearr_26834_26853[(1)] = (2));


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
});})(c__19118__auto___26843,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26843,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26838[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26838[(1)] = (1));

return statearr_26838;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26817){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26839){if((e26839 instanceof Object)){
var ex__19060__auto__ = e26839;
var statearr_26840_26854 = state_26817;
(statearr_26840_26854[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26855 = state_26817;
state_26817 = G__26855;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26843,out))
})();
var state__19120__auto__ = (function (){var statearr_26841 = f__19119__auto__.call(null);
(statearr_26841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26843);

return statearr_26841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26843,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__26857 = arguments.length;
switch (G__26857) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26926,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26926,out){
return (function (state_26895){
var state_val_26896 = (state_26895[(1)]);
if((state_val_26896 === (7))){
var inst_26891 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
var statearr_26897_26927 = state_26895__$1;
(statearr_26897_26927[(2)] = inst_26891);

(statearr_26897_26927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (1))){
var inst_26858 = (new Array(n));
var inst_26859 = inst_26858;
var inst_26860 = (0);
var state_26895__$1 = (function (){var statearr_26898 = state_26895;
(statearr_26898[(7)] = inst_26859);

(statearr_26898[(8)] = inst_26860);

return statearr_26898;
})();
var statearr_26899_26928 = state_26895__$1;
(statearr_26899_26928[(2)] = null);

(statearr_26899_26928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (4))){
var inst_26863 = (state_26895[(9)]);
var inst_26863__$1 = (state_26895[(2)]);
var inst_26864 = (inst_26863__$1 == null);
var inst_26865 = cljs.core.not.call(null,inst_26864);
var state_26895__$1 = (function (){var statearr_26900 = state_26895;
(statearr_26900[(9)] = inst_26863__$1);

return statearr_26900;
})();
if(inst_26865){
var statearr_26901_26929 = state_26895__$1;
(statearr_26901_26929[(1)] = (5));

} else {
var statearr_26902_26930 = state_26895__$1;
(statearr_26902_26930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (15))){
var inst_26885 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
var statearr_26903_26931 = state_26895__$1;
(statearr_26903_26931[(2)] = inst_26885);

(statearr_26903_26931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (13))){
var state_26895__$1 = state_26895;
var statearr_26904_26932 = state_26895__$1;
(statearr_26904_26932[(2)] = null);

(statearr_26904_26932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (6))){
var inst_26860 = (state_26895[(8)]);
var inst_26881 = (inst_26860 > (0));
var state_26895__$1 = state_26895;
if(cljs.core.truth_(inst_26881)){
var statearr_26905_26933 = state_26895__$1;
(statearr_26905_26933[(1)] = (12));

} else {
var statearr_26906_26934 = state_26895__$1;
(statearr_26906_26934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (3))){
var inst_26893 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26895__$1,inst_26893);
} else {
if((state_val_26896 === (12))){
var inst_26859 = (state_26895[(7)]);
var inst_26883 = cljs.core.vec.call(null,inst_26859);
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26895__$1,(15),out,inst_26883);
} else {
if((state_val_26896 === (2))){
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26895__$1,(4),ch);
} else {
if((state_val_26896 === (11))){
var inst_26875 = (state_26895[(2)]);
var inst_26876 = (new Array(n));
var inst_26859 = inst_26876;
var inst_26860 = (0);
var state_26895__$1 = (function (){var statearr_26907 = state_26895;
(statearr_26907[(10)] = inst_26875);

(statearr_26907[(7)] = inst_26859);

(statearr_26907[(8)] = inst_26860);

return statearr_26907;
})();
var statearr_26908_26935 = state_26895__$1;
(statearr_26908_26935[(2)] = null);

(statearr_26908_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (9))){
var inst_26859 = (state_26895[(7)]);
var inst_26873 = cljs.core.vec.call(null,inst_26859);
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26895__$1,(11),out,inst_26873);
} else {
if((state_val_26896 === (5))){
var inst_26868 = (state_26895[(11)]);
var inst_26863 = (state_26895[(9)]);
var inst_26859 = (state_26895[(7)]);
var inst_26860 = (state_26895[(8)]);
var inst_26867 = (inst_26859[inst_26860] = inst_26863);
var inst_26868__$1 = (inst_26860 + (1));
var inst_26869 = (inst_26868__$1 < n);
var state_26895__$1 = (function (){var statearr_26909 = state_26895;
(statearr_26909[(11)] = inst_26868__$1);

(statearr_26909[(12)] = inst_26867);

return statearr_26909;
})();
if(cljs.core.truth_(inst_26869)){
var statearr_26910_26936 = state_26895__$1;
(statearr_26910_26936[(1)] = (8));

} else {
var statearr_26911_26937 = state_26895__$1;
(statearr_26911_26937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (14))){
var inst_26888 = (state_26895[(2)]);
var inst_26889 = cljs.core.async.close_BANG_.call(null,out);
var state_26895__$1 = (function (){var statearr_26913 = state_26895;
(statearr_26913[(13)] = inst_26888);

return statearr_26913;
})();
var statearr_26914_26938 = state_26895__$1;
(statearr_26914_26938[(2)] = inst_26889);

(statearr_26914_26938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (10))){
var inst_26879 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
var statearr_26915_26939 = state_26895__$1;
(statearr_26915_26939[(2)] = inst_26879);

(statearr_26915_26939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (8))){
var inst_26868 = (state_26895[(11)]);
var inst_26859 = (state_26895[(7)]);
var tmp26912 = inst_26859;
var inst_26859__$1 = tmp26912;
var inst_26860 = inst_26868;
var state_26895__$1 = (function (){var statearr_26916 = state_26895;
(statearr_26916[(7)] = inst_26859__$1);

(statearr_26916[(8)] = inst_26860);

return statearr_26916;
})();
var statearr_26917_26940 = state_26895__$1;
(statearr_26917_26940[(2)] = null);

(statearr_26917_26940[(1)] = (2));


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
});})(c__19118__auto___26926,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26926,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26921[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26921[(1)] = (1));

return statearr_26921;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26895){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26922){if((e26922 instanceof Object)){
var ex__19060__auto__ = e26922;
var statearr_26923_26941 = state_26895;
(statearr_26923_26941[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26942 = state_26895;
state_26895 = G__26942;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26926,out))
})();
var state__19120__auto__ = (function (){var statearr_26924 = f__19119__auto__.call(null);
(statearr_26924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26926);

return statearr_26924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26926,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__26944 = arguments.length;
switch (G__26944) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___27017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___27017,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___27017,out){
return (function (state_26986){
var state_val_26987 = (state_26986[(1)]);
if((state_val_26987 === (7))){
var inst_26982 = (state_26986[(2)]);
var state_26986__$1 = state_26986;
var statearr_26988_27018 = state_26986__$1;
(statearr_26988_27018[(2)] = inst_26982);

(statearr_26988_27018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (1))){
var inst_26945 = [];
var inst_26946 = inst_26945;
var inst_26947 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26986__$1 = (function (){var statearr_26989 = state_26986;
(statearr_26989[(7)] = inst_26947);

(statearr_26989[(8)] = inst_26946);

return statearr_26989;
})();
var statearr_26990_27019 = state_26986__$1;
(statearr_26990_27019[(2)] = null);

(statearr_26990_27019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (4))){
var inst_26950 = (state_26986[(9)]);
var inst_26950__$1 = (state_26986[(2)]);
var inst_26951 = (inst_26950__$1 == null);
var inst_26952 = cljs.core.not.call(null,inst_26951);
var state_26986__$1 = (function (){var statearr_26991 = state_26986;
(statearr_26991[(9)] = inst_26950__$1);

return statearr_26991;
})();
if(inst_26952){
var statearr_26992_27020 = state_26986__$1;
(statearr_26992_27020[(1)] = (5));

} else {
var statearr_26993_27021 = state_26986__$1;
(statearr_26993_27021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (15))){
var inst_26976 = (state_26986[(2)]);
var state_26986__$1 = state_26986;
var statearr_26994_27022 = state_26986__$1;
(statearr_26994_27022[(2)] = inst_26976);

(statearr_26994_27022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (13))){
var state_26986__$1 = state_26986;
var statearr_26995_27023 = state_26986__$1;
(statearr_26995_27023[(2)] = null);

(statearr_26995_27023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (6))){
var inst_26946 = (state_26986[(8)]);
var inst_26971 = inst_26946.length;
var inst_26972 = (inst_26971 > (0));
var state_26986__$1 = state_26986;
if(cljs.core.truth_(inst_26972)){
var statearr_26996_27024 = state_26986__$1;
(statearr_26996_27024[(1)] = (12));

} else {
var statearr_26997_27025 = state_26986__$1;
(statearr_26997_27025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (3))){
var inst_26984 = (state_26986[(2)]);
var state_26986__$1 = state_26986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26986__$1,inst_26984);
} else {
if((state_val_26987 === (12))){
var inst_26946 = (state_26986[(8)]);
var inst_26974 = cljs.core.vec.call(null,inst_26946);
var state_26986__$1 = state_26986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26986__$1,(15),out,inst_26974);
} else {
if((state_val_26987 === (2))){
var state_26986__$1 = state_26986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26986__$1,(4),ch);
} else {
if((state_val_26987 === (11))){
var inst_26954 = (state_26986[(10)]);
var inst_26950 = (state_26986[(9)]);
var inst_26964 = (state_26986[(2)]);
var inst_26965 = [];
var inst_26966 = inst_26965.push(inst_26950);
var inst_26946 = inst_26965;
var inst_26947 = inst_26954;
var state_26986__$1 = (function (){var statearr_26998 = state_26986;
(statearr_26998[(7)] = inst_26947);

(statearr_26998[(11)] = inst_26964);

(statearr_26998[(12)] = inst_26966);

(statearr_26998[(8)] = inst_26946);

return statearr_26998;
})();
var statearr_26999_27026 = state_26986__$1;
(statearr_26999_27026[(2)] = null);

(statearr_26999_27026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (9))){
var inst_26946 = (state_26986[(8)]);
var inst_26962 = cljs.core.vec.call(null,inst_26946);
var state_26986__$1 = state_26986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26986__$1,(11),out,inst_26962);
} else {
if((state_val_26987 === (5))){
var inst_26947 = (state_26986[(7)]);
var inst_26954 = (state_26986[(10)]);
var inst_26950 = (state_26986[(9)]);
var inst_26954__$1 = f.call(null,inst_26950);
var inst_26955 = cljs.core._EQ_.call(null,inst_26954__$1,inst_26947);
var inst_26956 = cljs.core.keyword_identical_QMARK_.call(null,inst_26947,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26957 = (inst_26955) || (inst_26956);
var state_26986__$1 = (function (){var statearr_27000 = state_26986;
(statearr_27000[(10)] = inst_26954__$1);

return statearr_27000;
})();
if(cljs.core.truth_(inst_26957)){
var statearr_27001_27027 = state_26986__$1;
(statearr_27001_27027[(1)] = (8));

} else {
var statearr_27002_27028 = state_26986__$1;
(statearr_27002_27028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (14))){
var inst_26979 = (state_26986[(2)]);
var inst_26980 = cljs.core.async.close_BANG_.call(null,out);
var state_26986__$1 = (function (){var statearr_27004 = state_26986;
(statearr_27004[(13)] = inst_26979);

return statearr_27004;
})();
var statearr_27005_27029 = state_26986__$1;
(statearr_27005_27029[(2)] = inst_26980);

(statearr_27005_27029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (10))){
var inst_26969 = (state_26986[(2)]);
var state_26986__$1 = state_26986;
var statearr_27006_27030 = state_26986__$1;
(statearr_27006_27030[(2)] = inst_26969);

(statearr_27006_27030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (8))){
var inst_26954 = (state_26986[(10)]);
var inst_26946 = (state_26986[(8)]);
var inst_26950 = (state_26986[(9)]);
var inst_26959 = inst_26946.push(inst_26950);
var tmp27003 = inst_26946;
var inst_26946__$1 = tmp27003;
var inst_26947 = inst_26954;
var state_26986__$1 = (function (){var statearr_27007 = state_26986;
(statearr_27007[(7)] = inst_26947);

(statearr_27007[(14)] = inst_26959);

(statearr_27007[(8)] = inst_26946__$1);

return statearr_27007;
})();
var statearr_27008_27031 = state_26986__$1;
(statearr_27008_27031[(2)] = null);

(statearr_27008_27031[(1)] = (2));


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
});})(c__19118__auto___27017,out))
;
return ((function (switch__19056__auto__,c__19118__auto___27017,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_27012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27012[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_27012[(1)] = (1));

return statearr_27012;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26986){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e27013){if((e27013 instanceof Object)){
var ex__19060__auto__ = e27013;
var statearr_27014_27032 = state_26986;
(statearr_27014_27032[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27033 = state_26986;
state_26986 = G__27033;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___27017,out))
})();
var state__19120__auto__ = (function (){var statearr_27015 = f__19119__auto__.call(null);
(statearr_27015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___27017);

return statearr_27015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___27017,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449240483976