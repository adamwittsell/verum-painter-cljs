// Compiled by ClojureScript 0.0-3297 {}
goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.xerror.core');









/**
* @constructor
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__27272 = self__.buf;
var G__27273 = (G__27272[(0)]);
var G__27274 = (G__27272[(1)]);
(b[(0)] = ((G__27273 * c) - (G__27274 * s)));

(b[(1)] = ((G__27273 * s) + (G__27274 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27275 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27276 = v.buf;
return (((G__27275[(0)]) * (G__27276[(0)])) + ((G__27275[(1)]) * (G__27276[(1)])));
} else {
return (((G__27275[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__27275[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27277 = self__.buf;
var G__27278 = (G__27277[(0)]);
var G__27279 = (G__27277[(1)]);
var l = Math.sqrt(((G__27278 * G__27278) + (G__27279 * G__27279)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__27278 / l));

(b[(1)] = (G__27279 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__27280 = self__.buf;
var G__27281 = (G__27280[(0)]);
var G__27282 = (G__27280[(1)]);
var l = Math.sqrt(((G__27281 * G__27281) + (G__27282 * G__27282)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__27281 * l__$1));

(b[(1)] = (G__27282 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__27283 = self__.buf;
var G__27285 = (G__27283[(0)]);
var G__27286 = (G__27283[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27284 = v.buf;
var G__27287 = (G__27284[(0)]);
var G__27288 = (G__27284[(1)]);
var d = (((G__27285 * G__27287) + (G__27286 * G__27288)) + (2));
(b[(0)] = ((G__27287 * d) - G__27285));

(b[(1)] = ((G__27288 * d) - G__27286));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__27287 = cljs.core.nth.call(null,v,(0),0.0);
var G__27288 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__27285 * G__27287) + (G__27286 * G__27288)) + (2));
(b[(0)] = ((G__27287 * d) - G__27285));

(b[(1)] = ((G__27288 * d) - G__27286));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27289 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27290 = v.buf;
return (((G__27289[(0)]) * (G__27290[(1)])) - ((G__27289[(1)]) * (G__27290[(0)])));
} else {
return (((G__27289[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__27289[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27294_27621 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27295_27622 = v.buf;
(self__.buf[(0)] = ((G__27294_27621[(0)]) - (G__27295_27622[(0)])));

(self__.buf[(1)] = ((G__27294_27621[(1)]) - (G__27295_27622[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27294_27621[(0)]) - v));

(self__.buf[(1)] = ((G__27294_27621[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__27294_27621[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__27294_27621[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27303_27623 = typeof v1 === 'number';
var G__27304_27624 = typeof v2 === 'number';
if(((G__27303_27623)?G__27304_27624:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__27305_27625 = ((!(G__27303_27623))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27306_27626 = ((!(G__27304_27624))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27297_27627 = (cljs.core.truth_(G__27305_27625)?v1.buf:null);
var G__27298_27628 = (cljs.core.truth_(G__27306_27626)?v2.buf:null);
var G__27299_27629 = (cljs.core.truth_(G__27305_27625)?(G__27297_27627[(0)]):((G__27303_27623)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27300_27630 = (cljs.core.truth_(G__27305_27625)?(G__27297_27627[(1)]):((G__27303_27623)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27301_27631 = (cljs.core.truth_(G__27306_27626)?(G__27298_27628[(0)]):((G__27304_27624)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27302_27632 = (cljs.core.truth_(G__27306_27626)?(G__27298_27628[(1)]):((G__27304_27624)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__27299_27629) - G__27301_27631));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__27300_27630) - G__27302_27632));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27307_27633 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27308_27634 = v.buf;
(self__.buf[(0)] = ((G__27307_27633[(0)]) * (G__27308_27634[(0)])));

(self__.buf[(1)] = ((G__27307_27633[(1)]) * (G__27308_27634[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27307_27633[(0)]) * v));

(self__.buf[(1)] = ((G__27307_27633[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__27307_27633[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__27307_27633[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27316_27635 = typeof v1 === 'number';
var G__27317_27636 = typeof v2 === 'number';
if(((G__27316_27635)?G__27317_27636:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__27318_27637 = ((!(G__27316_27635))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27319_27638 = ((!(G__27317_27636))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27310_27639 = (cljs.core.truth_(G__27318_27637)?v1.buf:null);
var G__27311_27640 = (cljs.core.truth_(G__27319_27638)?v2.buf:null);
var G__27312_27641 = (cljs.core.truth_(G__27318_27637)?(G__27310_27639[(0)]):((G__27316_27635)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27313_27642 = (cljs.core.truth_(G__27318_27637)?(G__27310_27639[(1)]):((G__27316_27635)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27314_27643 = (cljs.core.truth_(G__27319_27638)?(G__27311_27640[(0)]):((G__27317_27636)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27315_27644 = (cljs.core.truth_(G__27319_27638)?(G__27311_27640[(1)]):((G__27317_27636)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__27312_27641) * G__27314_27643));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__27313_27642) * G__27315_27644));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__27329_27645 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27330_27646 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27331_27647 = ((!(G__27329_27645))?typeof a === 'number':null);
var G__27332_27648 = ((!(G__27330_27646))?typeof b === 'number':null);
var G__27320_27649 = self__.buf;
var G__27321_27650 = ((G__27329_27645)?a.buf:null);
var G__27322_27651 = ((G__27330_27646)?b.buf:null);
var G__27323_27652 = (G__27320_27649[(0)]);
var G__27324_27653 = (G__27320_27649[(1)]);
var G__27325_27654 = ((G__27329_27645)?(G__27321_27650[(0)]):(cljs.core.truth_(G__27331_27647)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__27326_27655 = ((G__27329_27645)?(G__27321_27650[(1)]):(cljs.core.truth_(G__27331_27647)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__27327_27656 = ((G__27330_27646)?(G__27322_27651[(0)]):(cljs.core.truth_(G__27332_27648)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__27328_27657 = ((G__27330_27646)?(G__27322_27651[(1)]):(cljs.core.truth_(G__27332_27648)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__27323_27652 - G__27325_27654) * G__27327_27656));

(self__.buf[(1)] = ((G__27324_27653 - G__27326_27655) * G__27328_27657));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__27342_27658 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27343_27659 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27344_27660 = ((!(G__27342_27658))?typeof a === 'number':null);
var G__27345_27661 = ((!(G__27343_27659))?typeof b === 'number':null);
var G__27333_27662 = self__.buf;
var G__27334_27663 = ((G__27342_27658)?a.buf:null);
var G__27335_27664 = ((G__27343_27659)?b.buf:null);
var G__27336_27665 = (G__27333_27662[(0)]);
var G__27337_27666 = (G__27333_27662[(1)]);
var G__27338_27667 = ((G__27342_27658)?(G__27334_27663[(0)]):(cljs.core.truth_(G__27344_27660)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__27339_27668 = ((G__27342_27658)?(G__27334_27663[(1)]):(cljs.core.truth_(G__27344_27660)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__27340_27669 = ((G__27343_27659)?(G__27335_27664[(0)]):(cljs.core.truth_(G__27345_27661)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__27341_27670 = ((G__27343_27659)?(G__27335_27664[(1)]):(cljs.core.truth_(G__27345_27661)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__27336_27665 * G__27338_27667) - G__27340_27669));

(self__.buf[(1)] = ((G__27337_27666 * G__27339_27668) - G__27341_27670));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__27355_27671 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27356_27672 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27357_27673 = ((!(G__27355_27671))?typeof a === 'number':null);
var G__27358_27674 = ((!(G__27356_27672))?typeof b === 'number':null);
var G__27346_27675 = self__.buf;
var G__27347_27676 = ((G__27355_27671)?a.buf:null);
var G__27348_27677 = ((G__27356_27672)?b.buf:null);
var G__27349_27678 = (G__27346_27675[(0)]);
var G__27350_27679 = (G__27346_27675[(1)]);
var G__27351_27680 = ((G__27355_27671)?(G__27347_27676[(0)]):(cljs.core.truth_(G__27357_27673)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__27352_27681 = ((G__27355_27671)?(G__27347_27676[(1)]):(cljs.core.truth_(G__27357_27673)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__27353_27682 = ((G__27356_27672)?(G__27348_27677[(0)]):(cljs.core.truth_(G__27358_27674)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__27354_27683 = ((G__27356_27672)?(G__27348_27677[(1)]):(cljs.core.truth_(G__27358_27674)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__27349_27678 * G__27351_27680) + G__27353_27682));

(self__.buf[(1)] = ((G__27350_27679 * G__27352_27681) + G__27354_27683));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27359_27684 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27360_27685 = v.buf;
(self__.buf[(0)] = ((G__27359_27684[(0)]) / (G__27360_27685[(0)])));

(self__.buf[(1)] = ((G__27359_27684[(1)]) / (G__27360_27685[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27359_27684[(0)]) / v));

(self__.buf[(1)] = ((G__27359_27684[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__27359_27684[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__27359_27684[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27368_27686 = typeof v1 === 'number';
var G__27369_27687 = typeof v2 === 'number';
if(((G__27368_27686)?G__27369_27687:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__27370_27688 = ((!(G__27368_27686))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27371_27689 = ((!(G__27369_27687))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27362_27690 = (cljs.core.truth_(G__27370_27688)?v1.buf:null);
var G__27363_27691 = (cljs.core.truth_(G__27371_27689)?v2.buf:null);
var G__27364_27692 = (cljs.core.truth_(G__27370_27688)?(G__27362_27690[(0)]):((G__27368_27686)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27365_27693 = (cljs.core.truth_(G__27370_27688)?(G__27362_27690[(1)]):((G__27368_27686)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27366_27694 = (cljs.core.truth_(G__27371_27689)?(G__27363_27691[(0)]):((G__27369_27687)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27367_27695 = (cljs.core.truth_(G__27371_27689)?(G__27363_27691[(1)]):((G__27369_27687)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__27364_27692) / G__27366_27694));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__27365_27693) / G__27367_27695));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27372_27696 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27373_27697 = v.buf;
(self__.buf[(0)] = ((G__27372_27696[(0)]) + (G__27373_27697[(0)])));

(self__.buf[(1)] = ((G__27372_27696[(1)]) + (G__27373_27697[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27372_27696[(0)]) + v));

(self__.buf[(1)] = ((G__27372_27696[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__27372_27696[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__27372_27696[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27381_27698 = typeof v1 === 'number';
var G__27382_27699 = typeof v2 === 'number';
if(((G__27381_27698)?G__27382_27699:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__27383_27700 = ((!(G__27381_27698))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27384_27701 = ((!(G__27382_27699))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27375_27702 = (cljs.core.truth_(G__27383_27700)?v1.buf:null);
var G__27376_27703 = (cljs.core.truth_(G__27384_27701)?v2.buf:null);
var G__27377_27704 = (cljs.core.truth_(G__27383_27700)?(G__27375_27702[(0)]):((G__27381_27698)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27378_27705 = (cljs.core.truth_(G__27383_27700)?(G__27375_27702[(1)]):((G__27381_27698)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27379_27706 = (cljs.core.truth_(G__27384_27701)?(G__27376_27703[(0)]):((G__27382_27699)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27380_27707 = (cljs.core.truth_(G__27384_27701)?(G__27376_27703[(1)]):((G__27382_27699)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__27377_27704) + G__27379_27706));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__27378_27705) + G__27380_27707));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__27394_27708 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27395_27709 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27396_27710 = ((!(G__27394_27708))?typeof a === 'number':null);
var G__27397_27711 = ((!(G__27395_27709))?typeof b === 'number':null);
var G__27385_27712 = self__.buf;
var G__27386_27713 = ((G__27394_27708)?a.buf:null);
var G__27387_27714 = ((G__27395_27709)?b.buf:null);
var G__27388_27715 = (G__27385_27712[(0)]);
var G__27389_27716 = (G__27385_27712[(1)]);
var G__27390_27717 = ((G__27394_27708)?(G__27386_27713[(0)]):(cljs.core.truth_(G__27396_27710)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__27391_27718 = ((G__27394_27708)?(G__27386_27713[(1)]):(cljs.core.truth_(G__27396_27710)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__27392_27719 = ((G__27395_27709)?(G__27387_27714[(0)]):(cljs.core.truth_(G__27397_27711)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__27393_27720 = ((G__27395_27709)?(G__27387_27714[(1)]):(cljs.core.truth_(G__27397_27711)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__27388_27715 + G__27390_27717) * G__27392_27719));

(self__.buf[(1)] = ((G__27389_27716 + G__27391_27718) * G__27393_27720));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__16108__auto__ = self__._hash;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27398 = self__.buf;
var G__27400 = (G__27398[(0)]);
var G__27401 = (G__27398[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27399 = v.buf;
var G__27402 = (G__27399[(0)]);
var G__27403 = (G__27399[(1)]);
var dx = (G__27400 - G__27402);
var dy = (G__27401 - G__27403);
return ((dx * dx) + (dy * dy));
} else {
var G__27402 = cljs.core.nth.call(null,v,(0),0.0);
var G__27403 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__27400 - G__27402);
var dy = (G__27401 - G__27403);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23486__auto__ = (new Float32Array((2)));
var G__27413_27721 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27414_27722 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27415_27723 = ((!(G__27413_27721))?typeof a === 'number':null);
var G__27416_27724 = ((!(G__27414_27722))?typeof b === 'number':null);
var G__27404_27725 = self__.buf;
var G__27405_27726 = ((G__27413_27721)?a.buf:null);
var G__27406_27727 = ((G__27414_27722)?b.buf:null);
var G__27407_27728 = (G__27404_27725[(0)]);
var G__27408_27729 = (G__27404_27725[(1)]);
var G__27409_27730 = ((G__27413_27721)?(G__27405_27726[(0)]):(cljs.core.truth_(G__27415_27723)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__27410_27731 = ((G__27413_27721)?(G__27405_27726[(1)]):(cljs.core.truth_(G__27415_27723)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__27411_27732 = ((G__27414_27722)?(G__27406_27727[(0)]):(cljs.core.truth_(G__27416_27724)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__27412_27733 = ((G__27414_27722)?(G__27406_27727[(1)]):(cljs.core.truth_(G__27416_27724)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__23486__auto__[(0)] = ((G__27407_27728 * G__27409_27730) - G__27411_27732));

(dest__23486__auto__[(1)] = ((G__27408_27729 * G__27410_27731) - G__27412_27733));

return (new thi.ng.geom.core.vector.Vec2(dest__23486__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27417_27734 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27418_27735 = v.buf;
(dest__23475__auto__[(0)] = ((G__27417_27734[(0)]) * (G__27418_27735[(0)])));

(dest__23475__auto__[(1)] = ((G__27417_27734[(1)]) * (G__27418_27735[(1)])));
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = ((G__27417_27734[(0)]) * v));

(dest__23475__auto__[(1)] = ((G__27417_27734[(1)]) * v));
} else {
(dest__23475__auto__[(0)] = ((G__27417_27734[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__23475__auto__[(1)] = ((G__27417_27734[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27419 = self__.buf;
var G__27422 = (new Float32Array((2)));
var G__27423 = (G__27419[(0)]);
var G__27424 = (G__27419[(1)]);
var G__27429 = typeof v1 === 'number';
var G__27430 = typeof v2 === 'number';
if(((G__27429)?G__27430:false)){
(G__27422[(0)] = (G__27423 * v1));

(G__27422[(1)] = (G__27424 * v2));
} else {
var G__27431_27736 = ((!(G__27429))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27432_27737 = ((!(G__27430))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27420_27738 = (cljs.core.truth_(G__27431_27736)?v1.buf:null);
var G__27421_27739 = (cljs.core.truth_(G__27432_27737)?v2.buf:null);
var G__27425_27740 = (cljs.core.truth_(G__27431_27736)?(G__27420_27738[(0)]):((G__27429)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__27426_27741 = (cljs.core.truth_(G__27431_27736)?(G__27420_27738[(1)]):((G__27429)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__27427_27742 = (cljs.core.truth_(G__27432_27737)?(G__27421_27739[(0)]):((G__27430)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__27428_27743 = (cljs.core.truth_(G__27432_27737)?(G__27421_27739[(1)]):((G__27430)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__27422[(0)] = ((G__27423 * G__27425_27740) * G__27427_27742));

(G__27422[(1)] = ((G__27424 * G__27426_27741) * G__27428_27743));
}

return (new thi.ng.geom.core.vector.Vec2(G__27422,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23449__auto__ = (new Float32Array((2)));
var G__27433_27744 = self__.buf;
(dest__23449__auto__[(0)] = (- (G__27433_27744[(0)])));

(dest__23449__auto__[(1)] = (- (G__27433_27744[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__23449__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27434_27745 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27435_27746 = v.buf;
(dest__23475__auto__[(0)] = ((G__27434_27745[(0)]) - (G__27435_27746[(0)])));

(dest__23475__auto__[(1)] = ((G__27434_27745[(1)]) - (G__27435_27746[(1)])));
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = ((G__27434_27745[(0)]) - v));

(dest__23475__auto__[(1)] = ((G__27434_27745[(1)]) - v));
} else {
(dest__23475__auto__[(0)] = ((G__27434_27745[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__23475__auto__[(1)] = ((G__27434_27745[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27436 = self__.buf;
var G__27439 = (new Float32Array((2)));
var G__27440 = (G__27436[(0)]);
var G__27441 = (G__27436[(1)]);
var G__27446 = typeof v1 === 'number';
var G__27447 = typeof v2 === 'number';
if(((G__27446)?G__27447:false)){
(G__27439[(0)] = (G__27440 - v1));

(G__27439[(1)] = (G__27441 - v2));
} else {
var G__27448_27747 = ((!(G__27446))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27449_27748 = ((!(G__27447))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27437_27749 = (cljs.core.truth_(G__27448_27747)?v1.buf:null);
var G__27438_27750 = (cljs.core.truth_(G__27449_27748)?v2.buf:null);
var G__27442_27751 = (cljs.core.truth_(G__27448_27747)?(G__27437_27749[(0)]):((G__27446)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27443_27752 = (cljs.core.truth_(G__27448_27747)?(G__27437_27749[(1)]):((G__27446)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27444_27753 = (cljs.core.truth_(G__27449_27748)?(G__27438_27750[(0)]):((G__27447)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27445_27754 = (cljs.core.truth_(G__27449_27748)?(G__27438_27750[(1)]):((G__27447)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__27439[(0)] = ((G__27440 - G__27442_27751) - G__27444_27753));

(G__27439[(1)] = ((G__27441 - G__27443_27752) - G__27445_27754));
}

return (new thi.ng.geom.core.vector.Vec2(G__27439,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23486__auto__ = (new Float32Array((2)));
var G__27459_27755 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27460_27756 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27461_27757 = ((!(G__27459_27755))?typeof a === 'number':null);
var G__27462_27758 = ((!(G__27460_27756))?typeof b === 'number':null);
var G__27450_27759 = self__.buf;
var G__27451_27760 = ((G__27459_27755)?a.buf:null);
var G__27452_27761 = ((G__27460_27756)?b.buf:null);
var G__27453_27762 = (G__27450_27759[(0)]);
var G__27454_27763 = (G__27450_27759[(1)]);
var G__27455_27764 = ((G__27459_27755)?(G__27451_27760[(0)]):(cljs.core.truth_(G__27461_27757)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__27456_27765 = ((G__27459_27755)?(G__27451_27760[(1)]):(cljs.core.truth_(G__27461_27757)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__27457_27766 = ((G__27460_27756)?(G__27452_27761[(0)]):(cljs.core.truth_(G__27462_27758)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__27458_27767 = ((G__27460_27756)?(G__27452_27761[(1)]):(cljs.core.truth_(G__27462_27758)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__23486__auto__[(0)] = ((G__27453_27762 * G__27455_27764) + G__27457_27766));

(dest__23486__auto__[(1)] = ((G__27454_27763 * G__27456_27765) + G__27458_27767));

return (new thi.ng.geom.core.vector.Vec2(dest__23486__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23486__auto__ = (new Float32Array((2)));
var G__27472_27768 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27473_27769 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27474_27770 = ((!(G__27472_27768))?typeof a === 'number':null);
var G__27475_27771 = ((!(G__27473_27769))?typeof b === 'number':null);
var G__27463_27772 = self__.buf;
var G__27464_27773 = ((G__27472_27768)?a.buf:null);
var G__27465_27774 = ((G__27473_27769)?b.buf:null);
var G__27466_27775 = (G__27463_27772[(0)]);
var G__27467_27776 = (G__27463_27772[(1)]);
var G__27468_27777 = ((G__27472_27768)?(G__27464_27773[(0)]):(cljs.core.truth_(G__27474_27770)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__27469_27778 = ((G__27472_27768)?(G__27464_27773[(1)]):(cljs.core.truth_(G__27474_27770)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__27470_27779 = ((G__27473_27769)?(G__27465_27774[(0)]):(cljs.core.truth_(G__27475_27771)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__27471_27780 = ((G__27473_27769)?(G__27465_27774[(1)]):(cljs.core.truth_(G__27475_27771)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__23486__auto__[(0)] = ((G__27466_27775 + G__27468_27777) * G__27470_27779));

(dest__23486__auto__[(1)] = ((G__27467_27776 + G__27469_27778) * G__27471_27780));

return (new thi.ng.geom.core.vector.Vec2(dest__23486__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23449__auto__ = (new Float32Array((2)));
var G__27476_27781 = self__.buf;
(dest__23449__auto__[(0)] = ((1) / (G__27476_27781[(0)])));

(dest__23449__auto__[(1)] = ((1) / (G__27476_27781[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__23449__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27477_27782 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27478_27783 = v.buf;
(dest__23475__auto__[(0)] = ((G__27477_27782[(0)]) / (G__27478_27783[(0)])));

(dest__23475__auto__[(1)] = ((G__27477_27782[(1)]) / (G__27478_27783[(1)])));
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = ((G__27477_27782[(0)]) / v));

(dest__23475__auto__[(1)] = ((G__27477_27782[(1)]) / v));
} else {
(dest__23475__auto__[(0)] = ((G__27477_27782[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__23475__auto__[(1)] = ((G__27477_27782[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27479 = self__.buf;
var G__27482 = (new Float32Array((2)));
var G__27483 = (G__27479[(0)]);
var G__27484 = (G__27479[(1)]);
var G__27489 = typeof v1 === 'number';
var G__27490 = typeof v2 === 'number';
if(((G__27489)?G__27490:false)){
(G__27482[(0)] = (G__27483 / v1));

(G__27482[(1)] = (G__27484 / v2));
} else {
var G__27491_27784 = ((!(G__27489))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27492_27785 = ((!(G__27490))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27480_27786 = (cljs.core.truth_(G__27491_27784)?v1.buf:null);
var G__27481_27787 = (cljs.core.truth_(G__27492_27785)?v2.buf:null);
var G__27485_27788 = (cljs.core.truth_(G__27491_27784)?(G__27480_27786[(0)]):((G__27489)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27486_27789 = (cljs.core.truth_(G__27491_27784)?(G__27480_27786[(1)]):((G__27489)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27487_27790 = (cljs.core.truth_(G__27492_27785)?(G__27481_27787[(0)]):((G__27490)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27488_27791 = (cljs.core.truth_(G__27492_27785)?(G__27481_27787[(1)]):((G__27490)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__27482[(0)] = ((G__27483 / G__27485_27788) / G__27487_27790));

(G__27482[(1)] = ((G__27484 / G__27486_27789) / G__27488_27791));
}

return (new thi.ng.geom.core.vector.Vec2(G__27482,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27493_27792 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27494_27793 = v.buf;
(dest__23475__auto__[(0)] = ((G__27493_27792[(0)]) + (G__27494_27793[(0)])));

(dest__23475__auto__[(1)] = ((G__27493_27792[(1)]) + (G__27494_27793[(1)])));
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = ((G__27493_27792[(0)]) + v));

(dest__23475__auto__[(1)] = ((G__27493_27792[(1)]) + v));
} else {
(dest__23475__auto__[(0)] = ((G__27493_27792[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__23475__auto__[(1)] = ((G__27493_27792[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27495 = self__.buf;
var G__27498 = (new Float32Array((2)));
var G__27499 = (G__27495[(0)]);
var G__27500 = (G__27495[(1)]);
var G__27505 = typeof v1 === 'number';
var G__27506 = typeof v2 === 'number';
if(((G__27505)?G__27506:false)){
(G__27498[(0)] = (G__27499 + v1));

(G__27498[(1)] = (G__27500 + v2));
} else {
var G__27507_27794 = ((!(G__27505))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27508_27795 = ((!(G__27506))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27496_27796 = (cljs.core.truth_(G__27507_27794)?v1.buf:null);
var G__27497_27797 = (cljs.core.truth_(G__27508_27795)?v2.buf:null);
var G__27501_27798 = (cljs.core.truth_(G__27507_27794)?(G__27496_27796[(0)]):((G__27505)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27502_27799 = (cljs.core.truth_(G__27507_27794)?(G__27496_27796[(1)]):((G__27505)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27503_27800 = (cljs.core.truth_(G__27508_27795)?(G__27497_27797[(0)]):((G__27506)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27504_27801 = (cljs.core.truth_(G__27508_27795)?(G__27497_27797[(1)]):((G__27506)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__27498[(0)] = ((G__27499 + G__27501_27798) + G__27503_27800));

(G__27498[(1)] = ((G__27500 + G__27502_27799) + G__27504_27801));
}

return (new thi.ng.geom.core.vector.Vec2(G__27498,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23449__auto__ = (new Float32Array((2)));
var G__27509_27802 = self__.buf;
(dest__23449__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__27509_27802[(0)])));

(dest__23449__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__27509_27802[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__23449__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23486__auto__ = (new Float32Array((2)));
var G__27519_27803 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__27520_27804 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27521_27805 = ((!(G__27519_27803))?typeof a === 'number':null);
var G__27522_27806 = ((!(G__27520_27804))?typeof b === 'number':null);
var G__27510_27807 = self__.buf;
var G__27511_27808 = ((G__27519_27803)?a.buf:null);
var G__27512_27809 = ((G__27520_27804)?b.buf:null);
var G__27513_27810 = (G__27510_27807[(0)]);
var G__27514_27811 = (G__27510_27807[(1)]);
var G__27515_27812 = ((G__27519_27803)?(G__27511_27808[(0)]):(cljs.core.truth_(G__27521_27805)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__27516_27813 = ((G__27519_27803)?(G__27511_27808[(1)]):(cljs.core.truth_(G__27521_27805)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__27517_27814 = ((G__27520_27804)?(G__27512_27809[(0)]):(cljs.core.truth_(G__27522_27806)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__27518_27815 = ((G__27520_27804)?(G__27512_27809[(1)]):(cljs.core.truth_(G__27522_27806)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__23486__auto__[(0)] = ((G__27513_27810 - G__27515_27812) * G__27517_27814));

(dest__23486__auto__[(1)] = ((G__27514_27811 - G__27516_27813) * G__27518_27815));

return (new thi.ng.geom.core.vector.Vec2(dest__23486__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27523_27816 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27524_27817 = v.buf;
(dest__23475__auto__[(0)] = ((G__27523_27816[(0)]) + (G__27524_27817[(0)])));

(dest__23475__auto__[(1)] = ((G__27523_27816[(1)]) + (G__27524_27817[(1)])));
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = ((G__27523_27816[(0)]) + v));

(dest__23475__auto__[(1)] = ((G__27523_27816[(1)]) + v));
} else {
(dest__23475__auto__[(0)] = ((G__27523_27816[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__23475__auto__[(1)] = ((G__27523_27816[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27525 = self__.buf;
var G__27528 = (new Float32Array((2)));
var G__27529 = (G__27525[(0)]);
var G__27530 = (G__27525[(1)]);
var G__27535 = typeof v1 === 'number';
var G__27536 = typeof v2 === 'number';
if(((G__27535)?G__27536:false)){
(G__27528[(0)] = (G__27529 + v1));

(G__27528[(1)] = (G__27530 + v2));
} else {
var G__27537_27818 = ((!(G__27535))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27538_27819 = ((!(G__27536))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27526_27820 = (cljs.core.truth_(G__27537_27818)?v1.buf:null);
var G__27527_27821 = (cljs.core.truth_(G__27538_27819)?v2.buf:null);
var G__27531_27822 = (cljs.core.truth_(G__27537_27818)?(G__27526_27820[(0)]):((G__27535)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27532_27823 = (cljs.core.truth_(G__27537_27818)?(G__27526_27820[(1)]):((G__27535)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27533_27824 = (cljs.core.truth_(G__27538_27819)?(G__27527_27821[(0)]):((G__27536)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27534_27825 = (cljs.core.truth_(G__27538_27819)?(G__27527_27821[(1)]):((G__27536)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__27528[(0)] = ((G__27529 + G__27531_27822) + G__27533_27824));

(G__27528[(1)] = ((G__27530 + G__27532_27823) + G__27534_27825));
}

return (new thi.ng.geom.core.vector.Vec2(G__27528,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27539_27826 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27540_27827 = v.buf;
(dest__23475__auto__[(0)] = ((G__27539_27826[(0)]) * (G__27540_27827[(0)])));

(dest__23475__auto__[(1)] = ((G__27539_27826[(1)]) * (G__27540_27827[(1)])));
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = ((G__27539_27826[(0)]) * v));

(dest__23475__auto__[(1)] = ((G__27539_27826[(1)]) * v));
} else {
(dest__23475__auto__[(0)] = ((G__27539_27826[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__23475__auto__[(1)] = ((G__27539_27826[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27541 = self__.buf;
var G__27544 = (new Float32Array((2)));
var G__27545 = (G__27541[(0)]);
var G__27546 = (G__27541[(1)]);
var G__27551 = typeof v1 === 'number';
var G__27552 = typeof v2 === 'number';
if(((G__27551)?G__27552:false)){
(G__27544[(0)] = (G__27545 * v1));

(G__27544[(1)] = (G__27546 * v2));
} else {
var G__27553_27828 = ((!(G__27551))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27554_27829 = ((!(G__27552))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__27542_27830 = (cljs.core.truth_(G__27553_27828)?v1.buf:null);
var G__27543_27831 = (cljs.core.truth_(G__27554_27829)?v2.buf:null);
var G__27547_27832 = (cljs.core.truth_(G__27553_27828)?(G__27542_27830[(0)]):((G__27551)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__27548_27833 = (cljs.core.truth_(G__27553_27828)?(G__27542_27830[(1)]):((G__27551)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__27549_27834 = (cljs.core.truth_(G__27554_27829)?(G__27543_27831[(0)]):((G__27552)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__27550_27835 = (cljs.core.truth_(G__27554_27829)?(G__27543_27831[(1)]):((G__27552)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__27544[(0)] = ((G__27545 * G__27547_27832) * G__27549_27834));

(G__27544[(1)] = ((G__27546 * G__27548_27833) * G__27550_27835));
}

return (new thi.ng.geom.core.vector.Vec2(G__27544,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.core.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__27836 = null;
var G__27836__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__27836__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__27836 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__27836__2.call(this,self__,k);
case 3:
return G__27836__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27836.cljs$core$IFn$_invoke$arity$2 = G__27836__2;
G__27836.cljs$core$IFn$_invoke$arity$3 = G__27836__3;
return G__27836;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args27271){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27271)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27555_27837 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27556_27838 = v.buf;
(dest__23475__auto__[(0)] = (function (){var a__23208__auto__ = (G__27555_27837[(0)]);
var b__23209__auto__ = (G__27556_27838[(0)]);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23475__auto__[(1)] = (function (){var a__23208__auto__ = (G__27555_27837[(1)]);
var b__23209__auto__ = (G__27556_27838[(1)]);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = (function (){var a__23208__auto__ = (G__27555_27837[(0)]);
var b__23209__auto__ = v;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23475__auto__[(1)] = (function (){var a__23208__auto__ = (G__27555_27837[(1)]);
var b__23209__auto__ = v;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());
} else {
(dest__23475__auto__[(0)] = (function (){var a__23208__auto__ = (G__27555_27837[(0)]);
var b__23209__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23475__auto__[(1)] = (function (){var a__23208__auto__ = (G__27555_27837[(1)]);
var b__23209__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__23486__auto__ = (new Float32Array((2)));
var G__27566_27839 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__27567_27840 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__27568_27841 = ((!(G__27566_27839))?typeof v === 'number':null);
var G__27569_27842 = ((!(G__27567_27840))?typeof v2 === 'number':null);
var G__27557_27843 = self__.buf;
var G__27558_27844 = ((G__27566_27839)?v.buf:null);
var G__27559_27845 = ((G__27567_27840)?v2.buf:null);
var G__27560_27846 = (G__27557_27843[(0)]);
var G__27561_27847 = (G__27557_27843[(1)]);
var G__27562_27848 = ((G__27566_27839)?(G__27558_27844[(0)]):(cljs.core.truth_(G__27568_27841)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__27563_27849 = ((G__27566_27839)?(G__27558_27844[(1)]):(cljs.core.truth_(G__27568_27841)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__27564_27850 = ((G__27567_27840)?(G__27559_27845[(0)]):(cljs.core.truth_(G__27569_27842)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27565_27851 = ((G__27567_27840)?(G__27559_27845[(1)]):(cljs.core.truth_(G__27569_27842)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__23486__auto__[(0)] = (function (){var a__23208__auto__ = (function (){var a__23208__auto__ = G__27560_27846;
var b__23209__auto__ = G__27562_27848;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})();
var b__23209__auto__ = G__27564_27850;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23486__auto__[(1)] = (function (){var a__23208__auto__ = (function (){var a__23208__auto__ = G__27561_27847;
var b__23209__auto__ = G__27563_27849;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})();
var b__23209__auto__ = G__27565_27851;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__23486__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23475__auto__ = (new Float32Array((2)));
var G__27570_27852 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27571_27853 = v.buf;
(dest__23475__auto__[(0)] = (function (){var a__23215__auto__ = (G__27570_27852[(0)]);
var b__23216__auto__ = (G__27571_27853[(0)]);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23475__auto__[(1)] = (function (){var a__23215__auto__ = (G__27570_27852[(1)]);
var b__23216__auto__ = (G__27571_27853[(1)]);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__23475__auto__[(0)] = (function (){var a__23215__auto__ = (G__27570_27852[(0)]);
var b__23216__auto__ = v;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23475__auto__[(1)] = (function (){var a__23215__auto__ = (G__27570_27852[(1)]);
var b__23216__auto__ = v;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());
} else {
(dest__23475__auto__[(0)] = (function (){var a__23215__auto__ = (G__27570_27852[(0)]);
var b__23216__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23475__auto__[(1)] = (function (){var a__23215__auto__ = (G__27570_27852[(1)]);
var b__23216__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__23475__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__23486__auto__ = (new Float32Array((2)));
var G__27581_27854 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__27582_27855 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__27583_27856 = ((!(G__27581_27854))?typeof v === 'number':null);
var G__27584_27857 = ((!(G__27582_27855))?typeof v2 === 'number':null);
var G__27572_27858 = self__.buf;
var G__27573_27859 = ((G__27581_27854)?v.buf:null);
var G__27574_27860 = ((G__27582_27855)?v2.buf:null);
var G__27575_27861 = (G__27572_27858[(0)]);
var G__27576_27862 = (G__27572_27858[(1)]);
var G__27577_27863 = ((G__27581_27854)?(G__27573_27859[(0)]):(cljs.core.truth_(G__27583_27856)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__27578_27864 = ((G__27581_27854)?(G__27573_27859[(1)]):(cljs.core.truth_(G__27583_27856)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__27579_27865 = ((G__27582_27855)?(G__27574_27860[(0)]):(cljs.core.truth_(G__27584_27857)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27580_27866 = ((G__27582_27855)?(G__27574_27860[(1)]):(cljs.core.truth_(G__27584_27857)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__23486__auto__[(0)] = (function (){var a__23215__auto__ = (function (){var a__23215__auto__ = G__27575_27861;
var b__23216__auto__ = G__27577_27863;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})();
var b__23216__auto__ = G__27579_27865;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23486__auto__[(1)] = (function (){var a__23215__auto__ = (function (){var a__23215__auto__ = G__27576_27862;
var b__23216__auto__ = G__27578_27864;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})();
var b__23216__auto__ = G__27580_27866;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__23486__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.core.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__27585 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27586 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__27585[(0)]),(G__27586[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__27585[(1)]),(G__27586[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__27585[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__27585[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27587 = self__.buf;
var G__27588 = (G__27587[(0)]);
var G__27589 = (G__27587[(1)]);
return Math.sqrt(((G__27588 * G__27588) + (G__27589 * G__27589)));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27590 = self__.buf;
var G__27591 = (G__27590[(0)]);
var G__27592 = (G__27590[(1)]);
return ((G__27591 * G__27591) + (G__27592 * G__27592));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__27593_27867 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__27594_27868 = v.buf;
(b[(0)] = (((G__27593_27867[(0)]) + (G__27594_27868[(0)])) * 0.5));

(b[(1)] = (((G__27593_27867[(1)]) + (G__27594_27868[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__27593_27867[(0)]) + v) * 0.5));

(b[(1)] = (((G__27593_27867[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__27593_27867[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__27593_27867[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__27604_27869 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__27605_27870 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__27606_27871 = ((!(G__27604_27869))?typeof v === 'number':null);
var G__27607_27872 = ((!(G__27605_27870))?typeof v2 === 'number':null);
var G__27595_27873 = self__.buf;
var G__27596_27874 = ((G__27604_27869)?v.buf:null);
var G__27597_27875 = ((G__27605_27870)?v2.buf:null);
var G__27598_27876 = (G__27595_27873[(0)]);
var G__27599_27877 = (G__27595_27873[(1)]);
var G__27600_27878 = ((G__27604_27869)?(G__27596_27874[(0)]):(cljs.core.truth_(G__27606_27871)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__27601_27879 = ((G__27604_27869)?(G__27596_27874[(1)]):(cljs.core.truth_(G__27606_27871)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__27602_27880 = ((G__27605_27870)?(G__27597_27875[(0)]):(cljs.core.truth_(G__27607_27872)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27603_27881 = ((G__27605_27870)?(G__27597_27875[(1)]):(cljs.core.truth_(G__27607_27872)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(b[(0)] = (((G__27600_27878 - G__27598_27876) * G__27602_27880) + G__27598_27876));

(b[(1)] = (((G__27601_27879 - G__27599_27877) * G__27603_27881) + G__27599_27877));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__27617_27882 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__27618_27883 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__27619_27884 = ((!(G__27617_27882))?typeof b === 'number':null);
var G__27620_27885 = ((!(G__27618_27883))?typeof c === 'number':null);
var G__27608_27886 = self__.buf;
var G__27609_27887 = ((G__27617_27882)?b.buf:null);
var G__27610_27888 = ((G__27618_27883)?c.buf:null);
var G__27611_27889 = (G__27608_27886[(0)]);
var G__27612_27890 = (G__27608_27886[(1)]);
var G__27613_27891 = ((G__27617_27882)?(G__27609_27887[(0)]):(cljs.core.truth_(G__27619_27884)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__27614_27892 = ((G__27617_27882)?(G__27609_27887[(1)]):(cljs.core.truth_(G__27619_27884)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__27615_27893 = ((G__27618_27883)?(G__27610_27888[(0)]):(cljs.core.truth_(G__27620_27885)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__27616_27894 = ((G__27618_27883)?(G__27610_27888[(1)]):(cljs.core.truth_(G__27620_27885)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_27895 = (((G__27613_27891 - G__27611_27889) * u) + G__27611_27889);
var y1_27896 = (((G__27614_27892 - G__27612_27890) * u) + G__27612_27890);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__27615_27893) * u) + G__27615_27893) - x1_27895) * v) + x1_27895));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__27616_27894) * u) + G__27616_27894) - y1_27896) * v) + y1_27896));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.geom.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27291 = self__.buf;
var G__27292 = (G__27291[(0)]);
var G__27293 = (G__27291[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__27292 * Math.cos(G__27293)));

(b[(1)] = (G__27292 * Math.sin(G__27293)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"thi.ng.geom.core.vector/Vec2");
});

thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27898 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__27899 = v.buf;
return ((((G__27898[(0)]) * (G__27899[(0)])) + ((G__27898[(1)]) * (G__27899[(1)]))) + ((G__27898[(2)]) * (G__27899[(2)])));
} else {
return ((((G__27898[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__27898[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__27898[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27900 = self__.buf;
var G__27901 = (G__27900[(0)]);
var G__27902 = (G__27900[(1)]);
var G__27903 = (G__27900[(2)]);
var l = Math.sqrt((((G__27901 * G__27901) + (G__27902 * G__27902)) + (G__27903 * G__27903)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__27901 / l));

(b[(1)] = (G__27902 / l));

(b[(2)] = (G__27903 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__27904 = self__.buf;
var G__27905 = (G__27904[(0)]);
var G__27906 = (G__27904[(1)]);
var G__27907 = (G__27904[(2)]);
var l = Math.sqrt((((G__27905 * G__27905) + (G__27906 * G__27906)) + (G__27907 * G__27907)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__27905 * l__$1));

(b[(1)] = (G__27906 * l__$1));

(b[(2)] = (G__27907 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__27908 = self__.buf;
var G__27909 = (G__27908[(0)]);
var G__27910 = (G__27908[(1)]);
var G__27911 = (G__27908[(2)]);
(b[(0)] = G__27909);

(b[(1)] = ((G__27910 * c) - (G__27911 * s)));

(b[(2)] = ((G__27910 * s) + (G__27911 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__27912 = self__.buf;
var G__27913 = (G__27912[(0)]);
var G__27914 = (G__27912[(1)]);
var G__27915 = (G__27912[(2)]);
(b[(0)] = ((G__27913 * c) + (G__27915 * s)));

(b[(1)] = G__27914);

(b[(2)] = ((G__27915 * c) - (G__27913 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__27916 = self__.buf;
var G__27917 = (G__27916[(0)]);
var G__27918 = (G__27916[(1)]);
var G__27919 = (G__27916[(2)]);
(b[(0)] = ((G__27917 * c) - (G__27918 * s)));

(b[(1)] = ((G__27917 * s) + (G__27918 * c)));

(b[(2)] = G__27919);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__27920 = self__.buf;
var G__27922 = (G__27920[(0)]);
var G__27923 = (G__27920[(1)]);
var G__27924 = (G__27920[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__27921 = v.buf;
var G__27925 = (G__27921[(0)]);
var G__27926 = (G__27921[(1)]);
var G__27927 = (G__27921[(2)]);
var ux_SINGLEQUOTE_ = (G__27925 * G__27922);
var uy_SINGLEQUOTE_ = (G__27925 * G__27923);
var uz_SINGLEQUOTE_ = (G__27925 * G__27924);
var vx_SINGLEQUOTE_ = (G__27926 * G__27922);
var vy_SINGLEQUOTE_ = (G__27926 * G__27923);
var vz_SINGLEQUOTE_ = (G__27926 * G__27924);
var wx_SINGLEQUOTE_ = (G__27927 * G__27922);
var wy_SINGLEQUOTE_ = (G__27927 * G__27923);
var wz_SINGLEQUOTE_ = (G__27927 * G__27924);
var vx2 = (G__27925 * G__27925);
var vy2 = (G__27926 * G__27926);
var vz2 = (G__27927 * G__27927);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__27925) + ((((vy2 + vz2) * G__27922) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27925)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__27926) + ((((vx2 + vz2) * G__27923) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27926)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__27927) + ((((vx2 + vy2) * G__27924) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__27927)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__27925 = cljs.core.nth.call(null,v,(0),0.0);
var G__27926 = cljs.core.nth.call(null,v,(1),0.0);
var G__27927 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__27925 * G__27922);
var uy_SINGLEQUOTE_ = (G__27925 * G__27923);
var uz_SINGLEQUOTE_ = (G__27925 * G__27924);
var vx_SINGLEQUOTE_ = (G__27926 * G__27922);
var vy_SINGLEQUOTE_ = (G__27926 * G__27923);
var vz_SINGLEQUOTE_ = (G__27926 * G__27924);
var wx_SINGLEQUOTE_ = (G__27927 * G__27922);
var wy_SINGLEQUOTE_ = (G__27927 * G__27923);
var wz_SINGLEQUOTE_ = (G__27927 * G__27924);
var vx2 = (G__27925 * G__27925);
var vy2 = (G__27926 * G__27926);
var vz2 = (G__27927 * G__27927);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__27925) + ((((vy2 + vz2) * G__27922) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27925)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__27926) + ((((vx2 + vz2) * G__27923) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27926)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__27927) + ((((vx2 + vy2) * G__27924) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__27927)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27928 = self__.buf;
var G__27930 = (G__27928[(0)]);
var G__27931 = (G__27928[(1)]);
var G__27932 = (G__27928[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__27929 = v.buf;
var G__27933 = (G__27929[(0)]);
var G__27934 = (G__27929[(1)]);
var G__27935 = (G__27929[(2)]);
var d = ((((G__27930 * G__27933) + (G__27931 * G__27934)) + (G__27932 * G__27935)) * 2.0);
(b[(0)] = ((G__27933 * d) - G__27930));

(b[(1)] = ((G__27934 * d) - G__27931));

(b[(2)] = ((G__27935 * d) - G__27932));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__27933 = cljs.core.nth.call(null,v,(0),0.0);
var G__27934 = cljs.core.nth.call(null,v,(1),0.0);
var G__27935 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__27930 * G__27933) + (G__27931 * G__27934)) + (G__27932 * G__27935)) * 2.0);
(b[(0)] = ((G__27933 * d) - G__27930));

(b[(1)] = ((G__27934 * d) - G__27931));

(b[(2)] = ((G__27935 * d) - G__27932));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27936_28349 = self__.buf;
var G__27938_28350 = (G__27936_28349[(0)]);
var G__27939_28351 = (G__27936_28349[(1)]);
var G__27940_28352 = (G__27936_28349[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__27937_28353 = v.buf;
var G__27941_28354 = (G__27937_28353[(0)]);
var G__27942_28355 = (G__27937_28353[(1)]);
var G__27943_28356 = (G__27937_28353[(2)]);
(b[(0)] = ((G__27939_28351 * G__27943_28356) - (G__27942_28355 * G__27940_28352)));

(b[(1)] = ((G__27940_28352 * G__27941_28354) - (G__27943_28356 * G__27938_28350)));

(b[(2)] = ((G__27938_28350 * G__27942_28355) - (G__27941_28354 * G__27939_28351)));
} else {
var G__27941_28357 = cljs.core.nth.call(null,v,(0),0.0);
var G__27942_28358 = cljs.core.nth.call(null,v,(1),0.0);
var G__27943_28359 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__27939_28351 * G__27943_28359) - (G__27942_28358 * G__27940_28352)));

(b[(1)] = ((G__27940_28352 * G__27941_28357) - (G__27943_28359 * G__27938_28350)));

(b[(2)] = ((G__27938_28350 * G__27942_28358) - (G__27941_28357 * G__27939_28351)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27944_28360 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__27945_28361 = v.buf;
(self__.buf[(0)] = ((G__27944_28360[(0)]) - (G__27945_28361[(0)])));

(self__.buf[(1)] = ((G__27944_28360[(1)]) - (G__27945_28361[(1)])));

(self__.buf[(2)] = ((G__27944_28360[(2)]) - (G__27945_28361[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27944_28360[(0)]) - v));

(self__.buf[(1)] = ((G__27944_28360[(1)]) - v));

(self__.buf[(2)] = ((G__27944_28360[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__27944_28360[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__27944_28360[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__27944_28360[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27958_28362 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__27959_28363 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__27960_28364 = ((!(G__27958_28362))?typeof v1 === 'number':null);
var G__27961_28365 = ((!(G__27959_28363))?typeof v2 === 'number':null);
var G__27946_28366 = self__.buf;
var G__27947_28367 = ((G__27958_28362)?v1.buf:null);
var G__27948_28368 = ((G__27959_28363)?v2.buf:null);
var G__27949_28369 = (G__27946_28366[(0)]);
var G__27950_28370 = (G__27946_28366[(1)]);
var G__27951_28371 = (G__27946_28366[(2)]);
var G__27952_28372 = ((G__27958_28362)?(G__27947_28367[(0)]):(cljs.core.truth_(G__27960_28364)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27953_28373 = ((G__27958_28362)?(G__27947_28367[(1)]):(cljs.core.truth_(G__27960_28364)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27954_28374 = ((G__27958_28362)?(G__27947_28367[(2)]):(cljs.core.truth_(G__27960_28364)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__27955_28375 = ((G__27959_28363)?(G__27948_28368[(0)]):(cljs.core.truth_(G__27961_28365)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27956_28376 = ((G__27959_28363)?(G__27948_28368[(1)]):(cljs.core.truth_(G__27961_28365)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__27957_28377 = ((G__27959_28363)?(G__27948_28368[(2)]):(cljs.core.truth_(G__27961_28365)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__27949_28369 - G__27952_28372) - G__27955_28375));

(self__.buf[(1)] = ((G__27950_28370 - G__27953_28373) - G__27956_28376));

(self__.buf[(2)] = ((G__27951_28371 - G__27954_28374) - G__27957_28377));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27962_28378 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__27963_28379 = v.buf;
(self__.buf[(0)] = ((G__27962_28378[(0)]) * (G__27963_28379[(0)])));

(self__.buf[(1)] = ((G__27962_28378[(1)]) * (G__27963_28379[(1)])));

(self__.buf[(2)] = ((G__27962_28378[(2)]) * (G__27963_28379[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27962_28378[(0)]) * v));

(self__.buf[(1)] = ((G__27962_28378[(1)]) * v));

(self__.buf[(2)] = ((G__27962_28378[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__27962_28378[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__27962_28378[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__27962_28378[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27976_28380 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__27977_28381 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__27978_28382 = ((!(G__27976_28380))?typeof v1 === 'number':null);
var G__27979_28383 = ((!(G__27977_28381))?typeof v2 === 'number':null);
var G__27964_28384 = self__.buf;
var G__27965_28385 = ((G__27976_28380)?v1.buf:null);
var G__27966_28386 = ((G__27977_28381)?v2.buf:null);
var G__27967_28387 = (G__27964_28384[(0)]);
var G__27968_28388 = (G__27964_28384[(1)]);
var G__27969_28389 = (G__27964_28384[(2)]);
var G__27970_28390 = ((G__27976_28380)?(G__27965_28385[(0)]):(cljs.core.truth_(G__27978_28382)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__27971_28391 = ((G__27976_28380)?(G__27965_28385[(1)]):(cljs.core.truth_(G__27978_28382)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__27972_28392 = ((G__27976_28380)?(G__27965_28385[(2)]):(cljs.core.truth_(G__27978_28382)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__27973_28393 = ((G__27977_28381)?(G__27966_28386[(0)]):(cljs.core.truth_(G__27979_28383)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__27974_28394 = ((G__27977_28381)?(G__27966_28386[(1)]):(cljs.core.truth_(G__27979_28383)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__27975_28395 = ((G__27977_28381)?(G__27966_28386[(2)]):(cljs.core.truth_(G__27979_28383)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__27967_28387 * G__27970_28390) * G__27973_28393));

(self__.buf[(1)] = ((G__27968_28388 * G__27971_28391) * G__27974_28394));

(self__.buf[(2)] = ((G__27969_28389 * G__27972_28392) * G__27975_28395));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__27992_28396 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__27993_28397 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__27994_28398 = ((!(G__27992_28396))?typeof a === 'number':null);
var G__27995_28399 = ((!(G__27993_28397))?typeof b === 'number':null);
var G__27980_28400 = self__.buf;
var G__27981_28401 = ((G__27992_28396)?a.buf:null);
var G__27982_28402 = ((G__27993_28397)?b.buf:null);
var G__27983_28403 = (G__27980_28400[(0)]);
var G__27984_28404 = (G__27980_28400[(1)]);
var G__27985_28405 = (G__27980_28400[(2)]);
var G__27986_28406 = ((G__27992_28396)?(G__27981_28401[(0)]):(cljs.core.truth_(G__27994_28398)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__27987_28407 = ((G__27992_28396)?(G__27981_28401[(1)]):(cljs.core.truth_(G__27994_28398)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__27988_28408 = ((G__27992_28396)?(G__27981_28401[(2)]):(cljs.core.truth_(G__27994_28398)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__27989_28409 = ((G__27993_28397)?(G__27982_28402[(0)]):(cljs.core.truth_(G__27995_28399)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__27990_28410 = ((G__27993_28397)?(G__27982_28402[(1)]):(cljs.core.truth_(G__27995_28399)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__27991_28411 = ((G__27993_28397)?(G__27982_28402[(2)]):(cljs.core.truth_(G__27995_28399)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__27983_28403 - G__27986_28406) * G__27989_28409));

(self__.buf[(1)] = ((G__27984_28404 - G__27987_28407) * G__27990_28410));

(self__.buf[(2)] = ((G__27985_28405 - G__27988_28408) * G__27991_28411));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28008_28412 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__28009_28413 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28010_28414 = ((!(G__28008_28412))?typeof a === 'number':null);
var G__28011_28415 = ((!(G__28009_28413))?typeof b === 'number':null);
var G__27996_28416 = self__.buf;
var G__27997_28417 = ((G__28008_28412)?a.buf:null);
var G__27998_28418 = ((G__28009_28413)?b.buf:null);
var G__27999_28419 = (G__27996_28416[(0)]);
var G__28000_28420 = (G__27996_28416[(1)]);
var G__28001_28421 = (G__27996_28416[(2)]);
var G__28002_28422 = ((G__28008_28412)?(G__27997_28417[(0)]):(cljs.core.truth_(G__28010_28414)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28003_28423 = ((G__28008_28412)?(G__27997_28417[(1)]):(cljs.core.truth_(G__28010_28414)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28004_28424 = ((G__28008_28412)?(G__27997_28417[(2)]):(cljs.core.truth_(G__28010_28414)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28005_28425 = ((G__28009_28413)?(G__27998_28418[(0)]):(cljs.core.truth_(G__28011_28415)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28006_28426 = ((G__28009_28413)?(G__27998_28418[(1)]):(cljs.core.truth_(G__28011_28415)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28007_28427 = ((G__28009_28413)?(G__27998_28418[(2)]):(cljs.core.truth_(G__28011_28415)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__27999_28419 * G__28002_28422) - G__28005_28425));

(self__.buf[(1)] = ((G__28000_28420 * G__28003_28423) - G__28006_28426));

(self__.buf[(2)] = ((G__28001_28421 * G__28004_28424) - G__28007_28427));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28024_28428 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__28025_28429 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28026_28430 = ((!(G__28024_28428))?typeof a === 'number':null);
var G__28027_28431 = ((!(G__28025_28429))?typeof b === 'number':null);
var G__28012_28432 = self__.buf;
var G__28013_28433 = ((G__28024_28428)?a.buf:null);
var G__28014_28434 = ((G__28025_28429)?b.buf:null);
var G__28015_28435 = (G__28012_28432[(0)]);
var G__28016_28436 = (G__28012_28432[(1)]);
var G__28017_28437 = (G__28012_28432[(2)]);
var G__28018_28438 = ((G__28024_28428)?(G__28013_28433[(0)]):(cljs.core.truth_(G__28026_28430)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28019_28439 = ((G__28024_28428)?(G__28013_28433[(1)]):(cljs.core.truth_(G__28026_28430)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28020_28440 = ((G__28024_28428)?(G__28013_28433[(2)]):(cljs.core.truth_(G__28026_28430)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28021_28441 = ((G__28025_28429)?(G__28014_28434[(0)]):(cljs.core.truth_(G__28027_28431)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28022_28442 = ((G__28025_28429)?(G__28014_28434[(1)]):(cljs.core.truth_(G__28027_28431)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28023_28443 = ((G__28025_28429)?(G__28014_28434[(2)]):(cljs.core.truth_(G__28027_28431)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__28015_28435 * G__28018_28438) + G__28021_28441));

(self__.buf[(1)] = ((G__28016_28436 * G__28019_28439) + G__28022_28442));

(self__.buf[(2)] = ((G__28017_28437 * G__28020_28440) + G__28023_28443));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28028_28444 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28029_28445 = v.buf;
(self__.buf[(0)] = ((G__28028_28444[(0)]) / (G__28029_28445[(0)])));

(self__.buf[(1)] = ((G__28028_28444[(1)]) / (G__28029_28445[(1)])));

(self__.buf[(2)] = ((G__28028_28444[(2)]) / (G__28029_28445[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28028_28444[(0)]) / v));

(self__.buf[(1)] = ((G__28028_28444[(1)]) / v));

(self__.buf[(2)] = ((G__28028_28444[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28028_28444[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28028_28444[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28028_28444[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28042_28446 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28043_28447 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28044_28448 = ((!(G__28042_28446))?typeof v1 === 'number':null);
var G__28045_28449 = ((!(G__28043_28447))?typeof v2 === 'number':null);
var G__28030_28450 = self__.buf;
var G__28031_28451 = ((G__28042_28446)?v1.buf:null);
var G__28032_28452 = ((G__28043_28447)?v2.buf:null);
var G__28033_28453 = (G__28030_28450[(0)]);
var G__28034_28454 = (G__28030_28450[(1)]);
var G__28035_28455 = (G__28030_28450[(2)]);
var G__28036_28456 = ((G__28042_28446)?(G__28031_28451[(0)]):(cljs.core.truth_(G__28044_28448)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28037_28457 = ((G__28042_28446)?(G__28031_28451[(1)]):(cljs.core.truth_(G__28044_28448)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28038_28458 = ((G__28042_28446)?(G__28031_28451[(2)]):(cljs.core.truth_(G__28044_28448)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28039_28459 = ((G__28043_28447)?(G__28032_28452[(0)]):(cljs.core.truth_(G__28045_28449)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28040_28460 = ((G__28043_28447)?(G__28032_28452[(1)]):(cljs.core.truth_(G__28045_28449)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28041_28461 = ((G__28043_28447)?(G__28032_28452[(2)]):(cljs.core.truth_(G__28045_28449)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28033_28453 / G__28036_28456) / G__28039_28459));

(self__.buf[(1)] = ((G__28034_28454 / G__28037_28457) / G__28040_28460));

(self__.buf[(2)] = ((G__28035_28455 / G__28038_28458) / G__28041_28461));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28046_28462 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28047_28463 = v.buf;
(self__.buf[(0)] = ((G__28046_28462[(0)]) + (G__28047_28463[(0)])));

(self__.buf[(1)] = ((G__28046_28462[(1)]) + (G__28047_28463[(1)])));

(self__.buf[(2)] = ((G__28046_28462[(2)]) + (G__28047_28463[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28046_28462[(0)]) + v));

(self__.buf[(1)] = ((G__28046_28462[(1)]) + v));

(self__.buf[(2)] = ((G__28046_28462[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28046_28462[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28046_28462[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28046_28462[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28060_28464 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28061_28465 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28062_28466 = ((!(G__28060_28464))?typeof v1 === 'number':null);
var G__28063_28467 = ((!(G__28061_28465))?typeof v2 === 'number':null);
var G__28048_28468 = self__.buf;
var G__28049_28469 = ((G__28060_28464)?v1.buf:null);
var G__28050_28470 = ((G__28061_28465)?v2.buf:null);
var G__28051_28471 = (G__28048_28468[(0)]);
var G__28052_28472 = (G__28048_28468[(1)]);
var G__28053_28473 = (G__28048_28468[(2)]);
var G__28054_28474 = ((G__28060_28464)?(G__28049_28469[(0)]):(cljs.core.truth_(G__28062_28466)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28055_28475 = ((G__28060_28464)?(G__28049_28469[(1)]):(cljs.core.truth_(G__28062_28466)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28056_28476 = ((G__28060_28464)?(G__28049_28469[(2)]):(cljs.core.truth_(G__28062_28466)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28057_28477 = ((G__28061_28465)?(G__28050_28470[(0)]):(cljs.core.truth_(G__28063_28467)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28058_28478 = ((G__28061_28465)?(G__28050_28470[(1)]):(cljs.core.truth_(G__28063_28467)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28059_28479 = ((G__28061_28465)?(G__28050_28470[(2)]):(cljs.core.truth_(G__28063_28467)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28051_28471 + G__28054_28474) + G__28057_28477));

(self__.buf[(1)] = ((G__28052_28472 + G__28055_28475) + G__28058_28478));

(self__.buf[(2)] = ((G__28053_28473 + G__28056_28476) + G__28059_28479));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28076_28480 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__28077_28481 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28078_28482 = ((!(G__28076_28480))?typeof a === 'number':null);
var G__28079_28483 = ((!(G__28077_28481))?typeof b === 'number':null);
var G__28064_28484 = self__.buf;
var G__28065_28485 = ((G__28076_28480)?a.buf:null);
var G__28066_28486 = ((G__28077_28481)?b.buf:null);
var G__28067_28487 = (G__28064_28484[(0)]);
var G__28068_28488 = (G__28064_28484[(1)]);
var G__28069_28489 = (G__28064_28484[(2)]);
var G__28070_28490 = ((G__28076_28480)?(G__28065_28485[(0)]):(cljs.core.truth_(G__28078_28482)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28071_28491 = ((G__28076_28480)?(G__28065_28485[(1)]):(cljs.core.truth_(G__28078_28482)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28072_28492 = ((G__28076_28480)?(G__28065_28485[(2)]):(cljs.core.truth_(G__28078_28482)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__28073_28493 = ((G__28077_28481)?(G__28066_28486[(0)]):(cljs.core.truth_(G__28079_28483)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28074_28494 = ((G__28077_28481)?(G__28066_28486[(1)]):(cljs.core.truth_(G__28079_28483)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__28075_28495 = ((G__28077_28481)?(G__28066_28486[(2)]):(cljs.core.truth_(G__28079_28483)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__28067_28487 + G__28070_28490) * G__28073_28493));

(self__.buf[(1)] = ((G__28068_28488 + G__28071_28491) * G__28074_28494));

(self__.buf[(2)] = ((G__28069_28489 + G__28072_28492) * G__28075_28495));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__16108__auto__ = self__._hash;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:thi.ng.geom.core.vector.vec3.call(null,v));
return Math.acos(thi.ng.geom.core.dot.call(null,thi.ng.geom.core.normalize.call(null,___$1),thi.ng.geom.core.normalize.call(null,v__$1)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28080 = self__.buf;
var G__28082 = (G__28080[(0)]);
var G__28083 = (G__28080[(1)]);
var G__28084 = (G__28080[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28081 = v.buf;
var G__28085 = (G__28081[(0)]);
var G__28086 = (G__28081[(1)]);
var G__28087 = (G__28081[(2)]);
var dx = (G__28082 - G__28085);
var dy = (G__28083 - G__28086);
var dz = (G__28084 - G__28087);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__28085 = cljs.core.nth.call(null,v,(0),0.0);
var G__28086 = cljs.core.nth.call(null,v,(1),0.0);
var G__28087 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__28082 - G__28085);
var dy = (G__28083 - G__28086);
var dz = (G__28084 - G__28087);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28100_28496 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__28101_28497 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28102_28498 = ((!(G__28100_28496))?typeof a === 'number':null);
var G__28103_28499 = ((!(G__28101_28497))?typeof b === 'number':null);
var G__28088_28500 = self__.buf;
var G__28089_28501 = ((G__28100_28496)?a.buf:null);
var G__28090_28502 = ((G__28101_28497)?b.buf:null);
var G__28091_28503 = (G__28088_28500[(0)]);
var G__28092_28504 = (G__28088_28500[(1)]);
var G__28093_28505 = (G__28088_28500[(2)]);
var G__28094_28506 = ((G__28100_28496)?(G__28089_28501[(0)]):(cljs.core.truth_(G__28102_28498)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28095_28507 = ((G__28100_28496)?(G__28089_28501[(1)]):(cljs.core.truth_(G__28102_28498)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28096_28508 = ((G__28100_28496)?(G__28089_28501[(2)]):(cljs.core.truth_(G__28102_28498)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28097_28509 = ((G__28101_28497)?(G__28090_28502[(0)]):(cljs.core.truth_(G__28103_28499)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28098_28510 = ((G__28101_28497)?(G__28090_28502[(1)]):(cljs.core.truth_(G__28103_28499)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28099_28511 = ((G__28101_28497)?(G__28090_28502[(2)]):(cljs.core.truth_(G__28103_28499)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__23581__auto__[(0)] = ((G__28091_28503 * G__28094_28506) - G__28097_28509));

(dest__23581__auto__[(1)] = ((G__28092_28504 * G__28095_28507) - G__28098_28510));

(dest__23581__auto__[(2)] = ((G__28093_28505 * G__28096_28508) - G__28099_28511));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28104_28512 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28105_28513 = v.buf;
(dest__23570__auto__[(0)] = ((G__28104_28512[(0)]) * (G__28105_28513[(0)])));

(dest__23570__auto__[(1)] = ((G__28104_28512[(1)]) * (G__28105_28513[(1)])));

(dest__23570__auto__[(2)] = ((G__28104_28512[(2)]) * (G__28105_28513[(2)])));
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = ((G__28104_28512[(0)]) * v));

(dest__23570__auto__[(1)] = ((G__28104_28512[(1)]) * v));

(dest__23570__auto__[(2)] = ((G__28104_28512[(2)]) * v));
} else {
(dest__23570__auto__[(0)] = ((G__28104_28512[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__23570__auto__[(1)] = ((G__28104_28512[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__23570__auto__[(2)] = ((G__28104_28512[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28118_28514 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28119_28515 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28120_28516 = ((!(G__28118_28514))?typeof v1 === 'number':null);
var G__28121_28517 = ((!(G__28119_28515))?typeof v2 === 'number':null);
var G__28106_28518 = self__.buf;
var G__28107_28519 = ((G__28118_28514)?v1.buf:null);
var G__28108_28520 = ((G__28119_28515)?v2.buf:null);
var G__28109_28521 = (G__28106_28518[(0)]);
var G__28110_28522 = (G__28106_28518[(1)]);
var G__28111_28523 = (G__28106_28518[(2)]);
var G__28112_28524 = ((G__28118_28514)?(G__28107_28519[(0)]):(cljs.core.truth_(G__28120_28516)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28113_28525 = ((G__28118_28514)?(G__28107_28519[(1)]):(cljs.core.truth_(G__28120_28516)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28114_28526 = ((G__28118_28514)?(G__28107_28519[(2)]):(cljs.core.truth_(G__28120_28516)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28115_28527 = ((G__28119_28515)?(G__28108_28520[(0)]):(cljs.core.truth_(G__28121_28517)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28116_28528 = ((G__28119_28515)?(G__28108_28520[(1)]):(cljs.core.truth_(G__28121_28517)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28117_28529 = ((G__28119_28515)?(G__28108_28520[(2)]):(cljs.core.truth_(G__28121_28517)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__23581__auto__[(0)] = ((G__28109_28521 * G__28112_28524) * G__28115_28527));

(dest__23581__auto__[(1)] = ((G__28110_28522 * G__28113_28525) * G__28116_28528));

(dest__23581__auto__[(2)] = ((G__28111_28523 * G__28114_28526) * G__28117_28529));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__28122 = self__.buf;
var dest__23559__auto__ = (new Float32Array((3)));
(dest__23559__auto__[(0)] = ((G__28122[(0)]) * x));

(dest__23559__auto__[(1)] = ((G__28122[(1)]) * y));

(dest__23559__auto__[(2)] = ((G__28122[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__23559__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23553__auto__ = (new Float32Array((3)));
var G__28123_28530 = self__.buf;
(dest__23553__auto__[(0)] = (- (G__28123_28530[(0)])));

(dest__23553__auto__[(1)] = (- (G__28123_28530[(1)])));

(dest__23553__auto__[(2)] = (- (G__28123_28530[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__23553__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28124_28531 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28125_28532 = v.buf;
(dest__23570__auto__[(0)] = ((G__28124_28531[(0)]) - (G__28125_28532[(0)])));

(dest__23570__auto__[(1)] = ((G__28124_28531[(1)]) - (G__28125_28532[(1)])));

(dest__23570__auto__[(2)] = ((G__28124_28531[(2)]) - (G__28125_28532[(2)])));
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = ((G__28124_28531[(0)]) - v));

(dest__23570__auto__[(1)] = ((G__28124_28531[(1)]) - v));

(dest__23570__auto__[(2)] = ((G__28124_28531[(2)]) - v));
} else {
(dest__23570__auto__[(0)] = ((G__28124_28531[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__23570__auto__[(1)] = ((G__28124_28531[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__23570__auto__[(2)] = ((G__28124_28531[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28138_28533 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28139_28534 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28140_28535 = ((!(G__28138_28533))?typeof v1 === 'number':null);
var G__28141_28536 = ((!(G__28139_28534))?typeof v2 === 'number':null);
var G__28126_28537 = self__.buf;
var G__28127_28538 = ((G__28138_28533)?v1.buf:null);
var G__28128_28539 = ((G__28139_28534)?v2.buf:null);
var G__28129_28540 = (G__28126_28537[(0)]);
var G__28130_28541 = (G__28126_28537[(1)]);
var G__28131_28542 = (G__28126_28537[(2)]);
var G__28132_28543 = ((G__28138_28533)?(G__28127_28538[(0)]):(cljs.core.truth_(G__28140_28535)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28133_28544 = ((G__28138_28533)?(G__28127_28538[(1)]):(cljs.core.truth_(G__28140_28535)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28134_28545 = ((G__28138_28533)?(G__28127_28538[(2)]):(cljs.core.truth_(G__28140_28535)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28135_28546 = ((G__28139_28534)?(G__28128_28539[(0)]):(cljs.core.truth_(G__28141_28536)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28136_28547 = ((G__28139_28534)?(G__28128_28539[(1)]):(cljs.core.truth_(G__28141_28536)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28137_28548 = ((G__28139_28534)?(G__28128_28539[(2)]):(cljs.core.truth_(G__28141_28536)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__23581__auto__[(0)] = ((G__28129_28540 - G__28132_28543) - G__28135_28546));

(dest__23581__auto__[(1)] = ((G__28130_28541 - G__28133_28544) - G__28136_28547));

(dest__23581__auto__[(2)] = ((G__28131_28542 - G__28134_28545) - G__28137_28548));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__28142 = self__.buf;
var dest__23559__auto__ = (new Float32Array((3)));
(dest__23559__auto__[(0)] = ((G__28142[(0)]) - x));

(dest__23559__auto__[(1)] = ((G__28142[(1)]) - y));

(dest__23559__auto__[(2)] = ((G__28142[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__23559__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28155_28549 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__28156_28550 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28157_28551 = ((!(G__28155_28549))?typeof a === 'number':null);
var G__28158_28552 = ((!(G__28156_28550))?typeof b === 'number':null);
var G__28143_28553 = self__.buf;
var G__28144_28554 = ((G__28155_28549)?a.buf:null);
var G__28145_28555 = ((G__28156_28550)?b.buf:null);
var G__28146_28556 = (G__28143_28553[(0)]);
var G__28147_28557 = (G__28143_28553[(1)]);
var G__28148_28558 = (G__28143_28553[(2)]);
var G__28149_28559 = ((G__28155_28549)?(G__28144_28554[(0)]):(cljs.core.truth_(G__28157_28551)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28150_28560 = ((G__28155_28549)?(G__28144_28554[(1)]):(cljs.core.truth_(G__28157_28551)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28151_28561 = ((G__28155_28549)?(G__28144_28554[(2)]):(cljs.core.truth_(G__28157_28551)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28152_28562 = ((G__28156_28550)?(G__28145_28555[(0)]):(cljs.core.truth_(G__28158_28552)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28153_28563 = ((G__28156_28550)?(G__28145_28555[(1)]):(cljs.core.truth_(G__28158_28552)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28154_28564 = ((G__28156_28550)?(G__28145_28555[(2)]):(cljs.core.truth_(G__28158_28552)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__23581__auto__[(0)] = ((G__28146_28556 * G__28149_28559) + G__28152_28562));

(dest__23581__auto__[(1)] = ((G__28147_28557 * G__28150_28560) + G__28153_28563));

(dest__23581__auto__[(2)] = ((G__28148_28558 * G__28151_28561) + G__28154_28564));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28171_28565 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__28172_28566 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28173_28567 = ((!(G__28171_28565))?typeof a === 'number':null);
var G__28174_28568 = ((!(G__28172_28566))?typeof b === 'number':null);
var G__28159_28569 = self__.buf;
var G__28160_28570 = ((G__28171_28565)?a.buf:null);
var G__28161_28571 = ((G__28172_28566)?b.buf:null);
var G__28162_28572 = (G__28159_28569[(0)]);
var G__28163_28573 = (G__28159_28569[(1)]);
var G__28164_28574 = (G__28159_28569[(2)]);
var G__28165_28575 = ((G__28171_28565)?(G__28160_28570[(0)]):(cljs.core.truth_(G__28173_28567)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28166_28576 = ((G__28171_28565)?(G__28160_28570[(1)]):(cljs.core.truth_(G__28173_28567)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28167_28577 = ((G__28171_28565)?(G__28160_28570[(2)]):(cljs.core.truth_(G__28173_28567)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__28168_28578 = ((G__28172_28566)?(G__28161_28571[(0)]):(cljs.core.truth_(G__28174_28568)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28169_28579 = ((G__28172_28566)?(G__28161_28571[(1)]):(cljs.core.truth_(G__28174_28568)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__28170_28580 = ((G__28172_28566)?(G__28161_28571[(2)]):(cljs.core.truth_(G__28174_28568)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__23581__auto__[(0)] = ((G__28162_28572 + G__28165_28575) * G__28168_28578));

(dest__23581__auto__[(1)] = ((G__28163_28573 + G__28166_28576) * G__28169_28579));

(dest__23581__auto__[(2)] = ((G__28164_28574 + G__28167_28577) * G__28170_28580));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23553__auto__ = (new Float32Array((3)));
var G__28175_28581 = self__.buf;
(dest__23553__auto__[(0)] = ((1) / (G__28175_28581[(0)])));

(dest__23553__auto__[(1)] = ((1) / (G__28175_28581[(1)])));

(dest__23553__auto__[(2)] = ((1) / (G__28175_28581[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__23553__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28176_28582 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28177_28583 = v.buf;
(dest__23570__auto__[(0)] = ((G__28176_28582[(0)]) / (G__28177_28583[(0)])));

(dest__23570__auto__[(1)] = ((G__28176_28582[(1)]) / (G__28177_28583[(1)])));

(dest__23570__auto__[(2)] = ((G__28176_28582[(2)]) / (G__28177_28583[(2)])));
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = ((G__28176_28582[(0)]) / v));

(dest__23570__auto__[(1)] = ((G__28176_28582[(1)]) / v));

(dest__23570__auto__[(2)] = ((G__28176_28582[(2)]) / v));
} else {
(dest__23570__auto__[(0)] = ((G__28176_28582[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__23570__auto__[(1)] = ((G__28176_28582[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__23570__auto__[(2)] = ((G__28176_28582[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28190_28584 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28191_28585 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28192_28586 = ((!(G__28190_28584))?typeof v1 === 'number':null);
var G__28193_28587 = ((!(G__28191_28585))?typeof v2 === 'number':null);
var G__28178_28588 = self__.buf;
var G__28179_28589 = ((G__28190_28584)?v1.buf:null);
var G__28180_28590 = ((G__28191_28585)?v2.buf:null);
var G__28181_28591 = (G__28178_28588[(0)]);
var G__28182_28592 = (G__28178_28588[(1)]);
var G__28183_28593 = (G__28178_28588[(2)]);
var G__28184_28594 = ((G__28190_28584)?(G__28179_28589[(0)]):(cljs.core.truth_(G__28192_28586)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28185_28595 = ((G__28190_28584)?(G__28179_28589[(1)]):(cljs.core.truth_(G__28192_28586)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28186_28596 = ((G__28190_28584)?(G__28179_28589[(2)]):(cljs.core.truth_(G__28192_28586)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28187_28597 = ((G__28191_28585)?(G__28180_28590[(0)]):(cljs.core.truth_(G__28193_28587)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28188_28598 = ((G__28191_28585)?(G__28180_28590[(1)]):(cljs.core.truth_(G__28193_28587)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28189_28599 = ((G__28191_28585)?(G__28180_28590[(2)]):(cljs.core.truth_(G__28193_28587)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__23581__auto__[(0)] = ((G__28181_28591 / G__28184_28594) / G__28187_28597));

(dest__23581__auto__[(1)] = ((G__28182_28592 / G__28185_28595) / G__28188_28598));

(dest__23581__auto__[(2)] = ((G__28183_28593 / G__28186_28596) / G__28189_28599));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__28194 = self__.buf;
var dest__23559__auto__ = (new Float32Array((3)));
(dest__23559__auto__[(0)] = ((G__28194[(0)]) / x));

(dest__23559__auto__[(1)] = ((G__28194[(1)]) / y));

(dest__23559__auto__[(2)] = ((G__28194[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__23559__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28195_28600 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28196_28601 = v.buf;
(dest__23570__auto__[(0)] = ((G__28195_28600[(0)]) + (G__28196_28601[(0)])));

(dest__23570__auto__[(1)] = ((G__28195_28600[(1)]) + (G__28196_28601[(1)])));

(dest__23570__auto__[(2)] = ((G__28195_28600[(2)]) + (G__28196_28601[(2)])));
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = ((G__28195_28600[(0)]) + v));

(dest__23570__auto__[(1)] = ((G__28195_28600[(1)]) + v));

(dest__23570__auto__[(2)] = ((G__28195_28600[(2)]) + v));
} else {
(dest__23570__auto__[(0)] = ((G__28195_28600[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__23570__auto__[(1)] = ((G__28195_28600[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__23570__auto__[(2)] = ((G__28195_28600[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28209_28602 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28210_28603 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28211_28604 = ((!(G__28209_28602))?typeof v1 === 'number':null);
var G__28212_28605 = ((!(G__28210_28603))?typeof v2 === 'number':null);
var G__28197_28606 = self__.buf;
var G__28198_28607 = ((G__28209_28602)?v1.buf:null);
var G__28199_28608 = ((G__28210_28603)?v2.buf:null);
var G__28200_28609 = (G__28197_28606[(0)]);
var G__28201_28610 = (G__28197_28606[(1)]);
var G__28202_28611 = (G__28197_28606[(2)]);
var G__28203_28612 = ((G__28209_28602)?(G__28198_28607[(0)]):(cljs.core.truth_(G__28211_28604)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28204_28613 = ((G__28209_28602)?(G__28198_28607[(1)]):(cljs.core.truth_(G__28211_28604)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28205_28614 = ((G__28209_28602)?(G__28198_28607[(2)]):(cljs.core.truth_(G__28211_28604)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28206_28615 = ((G__28210_28603)?(G__28199_28608[(0)]):(cljs.core.truth_(G__28212_28605)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28207_28616 = ((G__28210_28603)?(G__28199_28608[(1)]):(cljs.core.truth_(G__28212_28605)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28208_28617 = ((G__28210_28603)?(G__28199_28608[(2)]):(cljs.core.truth_(G__28212_28605)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__23581__auto__[(0)] = ((G__28200_28609 + G__28203_28612) + G__28206_28615));

(dest__23581__auto__[(1)] = ((G__28201_28610 + G__28204_28613) + G__28207_28616));

(dest__23581__auto__[(2)] = ((G__28202_28611 + G__28205_28614) + G__28208_28617));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__28213 = self__.buf;
var dest__23559__auto__ = (new Float32Array((3)));
(dest__23559__auto__[(0)] = ((G__28213[(0)]) + x));

(dest__23559__auto__[(1)] = ((G__28213[(1)]) + y));

(dest__23559__auto__[(2)] = ((G__28213[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__23559__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23553__auto__ = (new Float32Array((3)));
var G__28214_28618 = self__.buf;
(dest__23553__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__28214_28618[(0)])));

(dest__23553__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__28214_28618[(1)])));

(dest__23553__auto__[(2)] = thi.ng.math.core.abs.call(null,(G__28214_28618[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__23553__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28227_28619 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__28228_28620 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28229_28621 = ((!(G__28227_28619))?typeof a === 'number':null);
var G__28230_28622 = ((!(G__28228_28620))?typeof b === 'number':null);
var G__28215_28623 = self__.buf;
var G__28216_28624 = ((G__28227_28619)?a.buf:null);
var G__28217_28625 = ((G__28228_28620)?b.buf:null);
var G__28218_28626 = (G__28215_28623[(0)]);
var G__28219_28627 = (G__28215_28623[(1)]);
var G__28220_28628 = (G__28215_28623[(2)]);
var G__28221_28629 = ((G__28227_28619)?(G__28216_28624[(0)]):(cljs.core.truth_(G__28229_28621)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28222_28630 = ((G__28227_28619)?(G__28216_28624[(1)]):(cljs.core.truth_(G__28229_28621)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28223_28631 = ((G__28227_28619)?(G__28216_28624[(2)]):(cljs.core.truth_(G__28229_28621)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__28224_28632 = ((G__28228_28620)?(G__28217_28625[(0)]):(cljs.core.truth_(G__28230_28622)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28225_28633 = ((G__28228_28620)?(G__28217_28625[(1)]):(cljs.core.truth_(G__28230_28622)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__28226_28634 = ((G__28228_28620)?(G__28217_28625[(2)]):(cljs.core.truth_(G__28230_28622)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__23581__auto__[(0)] = ((G__28218_28626 - G__28221_28629) * G__28224_28632));

(dest__23581__auto__[(1)] = ((G__28219_28627 - G__28222_28630) * G__28225_28633));

(dest__23581__auto__[(2)] = ((G__28220_28628 - G__28223_28631) * G__28226_28634));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28231_28635 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28232_28636 = v.buf;
(dest__23570__auto__[(0)] = ((G__28231_28635[(0)]) + (G__28232_28636[(0)])));

(dest__23570__auto__[(1)] = ((G__28231_28635[(1)]) + (G__28232_28636[(1)])));

(dest__23570__auto__[(2)] = ((G__28231_28635[(2)]) + (G__28232_28636[(2)])));
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = ((G__28231_28635[(0)]) + v));

(dest__23570__auto__[(1)] = ((G__28231_28635[(1)]) + v));

(dest__23570__auto__[(2)] = ((G__28231_28635[(2)]) + v));
} else {
(dest__23570__auto__[(0)] = ((G__28231_28635[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__23570__auto__[(1)] = ((G__28231_28635[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__23570__auto__[(2)] = ((G__28231_28635[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28245_28637 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28246_28638 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28247_28639 = ((!(G__28245_28637))?typeof v1 === 'number':null);
var G__28248_28640 = ((!(G__28246_28638))?typeof v2 === 'number':null);
var G__28233_28641 = self__.buf;
var G__28234_28642 = ((G__28245_28637)?v1.buf:null);
var G__28235_28643 = ((G__28246_28638)?v2.buf:null);
var G__28236_28644 = (G__28233_28641[(0)]);
var G__28237_28645 = (G__28233_28641[(1)]);
var G__28238_28646 = (G__28233_28641[(2)]);
var G__28239_28647 = ((G__28245_28637)?(G__28234_28642[(0)]):(cljs.core.truth_(G__28247_28639)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28240_28648 = ((G__28245_28637)?(G__28234_28642[(1)]):(cljs.core.truth_(G__28247_28639)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28241_28649 = ((G__28245_28637)?(G__28234_28642[(2)]):(cljs.core.truth_(G__28247_28639)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28242_28650 = ((G__28246_28638)?(G__28235_28643[(0)]):(cljs.core.truth_(G__28248_28640)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28243_28651 = ((G__28246_28638)?(G__28235_28643[(1)]):(cljs.core.truth_(G__28248_28640)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28244_28652 = ((G__28246_28638)?(G__28235_28643[(2)]):(cljs.core.truth_(G__28248_28640)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__23581__auto__[(0)] = ((G__28236_28644 + G__28239_28647) + G__28242_28650));

(dest__23581__auto__[(1)] = ((G__28237_28645 + G__28240_28648) + G__28243_28651));

(dest__23581__auto__[(2)] = ((G__28238_28646 + G__28241_28649) + G__28244_28652));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__28249 = self__.buf;
var dest__23559__auto__ = (new Float32Array((3)));
(dest__23559__auto__[(0)] = ((G__28249[(0)]) + x));

(dest__23559__auto__[(1)] = ((G__28249[(1)]) + y));

(dest__23559__auto__[(2)] = ((G__28249[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__23559__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28250_28653 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28251_28654 = v.buf;
(dest__23570__auto__[(0)] = ((G__28250_28653[(0)]) * (G__28251_28654[(0)])));

(dest__23570__auto__[(1)] = ((G__28250_28653[(1)]) * (G__28251_28654[(1)])));

(dest__23570__auto__[(2)] = ((G__28250_28653[(2)]) * (G__28251_28654[(2)])));
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = ((G__28250_28653[(0)]) * v));

(dest__23570__auto__[(1)] = ((G__28250_28653[(1)]) * v));

(dest__23570__auto__[(2)] = ((G__28250_28653[(2)]) * v));
} else {
(dest__23570__auto__[(0)] = ((G__28250_28653[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__23570__auto__[(1)] = ((G__28250_28653[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__23570__auto__[(2)] = ((G__28250_28653[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28264_28655 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__28265_28656 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28266_28657 = ((!(G__28264_28655))?typeof v1 === 'number':null);
var G__28267_28658 = ((!(G__28265_28656))?typeof v2 === 'number':null);
var G__28252_28659 = self__.buf;
var G__28253_28660 = ((G__28264_28655)?v1.buf:null);
var G__28254_28661 = ((G__28265_28656)?v2.buf:null);
var G__28255_28662 = (G__28252_28659[(0)]);
var G__28256_28663 = (G__28252_28659[(1)]);
var G__28257_28664 = (G__28252_28659[(2)]);
var G__28258_28665 = ((G__28264_28655)?(G__28253_28660[(0)]):(cljs.core.truth_(G__28266_28657)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__28259_28666 = ((G__28264_28655)?(G__28253_28660[(1)]):(cljs.core.truth_(G__28266_28657)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__28260_28667 = ((G__28264_28655)?(G__28253_28660[(2)]):(cljs.core.truth_(G__28266_28657)?v1:cljs.core.nth.call(null,v1,(2),1.0)));
var G__28261_28668 = ((G__28265_28656)?(G__28254_28661[(0)]):(cljs.core.truth_(G__28267_28658)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__28262_28669 = ((G__28265_28656)?(G__28254_28661[(1)]):(cljs.core.truth_(G__28267_28658)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
var G__28263_28670 = ((G__28265_28656)?(G__28254_28661[(2)]):(cljs.core.truth_(G__28267_28658)?v2:cljs.core.nth.call(null,v2,(2),1.0)));
(dest__23581__auto__[(0)] = ((G__28255_28662 * G__28258_28665) * G__28261_28668));

(dest__23581__auto__[(1)] = ((G__28256_28663 * G__28259_28666) * G__28262_28669));

(dest__23581__auto__[(2)] = ((G__28257_28664 * G__28260_28667) * G__28263_28670));

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__28268 = self__.buf;
var dest__23559__auto__ = (new Float32Array((3)));
(dest__23559__auto__[(0)] = ((G__28268[(0)]) * x));

(dest__23559__auto__[(1)] = ((G__28268[(1)]) * y));

(dest__23559__auto__[(2)] = ((G__28268[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__23559__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__28671 = null;
var G__28671__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__28671__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__28671 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__28671__2.call(this,self__,k);
case 3:
return G__28671__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28671.cljs$core$IFn$_invoke$arity$2 = G__28671__2;
G__28671.cljs$core$IFn$_invoke$arity$3 = G__28671__3;
return G__28671;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args27897){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27897)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4423__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28269_28672 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28270_28673 = v.buf;
(dest__23570__auto__[(0)] = (function (){var a__23208__auto__ = (G__28269_28672[(0)]);
var b__23209__auto__ = (G__28270_28673[(0)]);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23570__auto__[(1)] = (function (){var a__23208__auto__ = (G__28269_28672[(1)]);
var b__23209__auto__ = (G__28270_28673[(1)]);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23570__auto__[(2)] = (function (){var a__23208__auto__ = (G__28269_28672[(2)]);
var b__23209__auto__ = (G__28270_28673[(2)]);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = (function (){var a__23208__auto__ = (G__28269_28672[(0)]);
var b__23209__auto__ = v;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23570__auto__[(1)] = (function (){var a__23208__auto__ = (G__28269_28672[(1)]);
var b__23209__auto__ = v;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23570__auto__[(2)] = (function (){var a__23208__auto__ = (G__28269_28672[(2)]);
var b__23209__auto__ = v;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());
} else {
(dest__23570__auto__[(0)] = (function (){var a__23208__auto__ = (G__28269_28672[(0)]);
var b__23209__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23570__auto__[(1)] = (function (){var a__23208__auto__ = (G__28269_28672[(1)]);
var b__23209__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23570__auto__[(2)] = (function (){var a__23208__auto__ = (G__28269_28672[(2)]);
var b__23209__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28283_28674 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__28284_28675 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28285_28676 = ((!(G__28283_28674))?typeof v === 'number':null);
var G__28286_28677 = ((!(G__28284_28675))?typeof v2 === 'number':null);
var G__28271_28678 = self__.buf;
var G__28272_28679 = ((G__28283_28674)?v.buf:null);
var G__28273_28680 = ((G__28284_28675)?v2.buf:null);
var G__28274_28681 = (G__28271_28678[(0)]);
var G__28275_28682 = (G__28271_28678[(1)]);
var G__28276_28683 = (G__28271_28678[(2)]);
var G__28277_28684 = ((G__28283_28674)?(G__28272_28679[(0)]):(cljs.core.truth_(G__28285_28676)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28278_28685 = ((G__28283_28674)?(G__28272_28679[(1)]):(cljs.core.truth_(G__28285_28676)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28279_28686 = ((G__28283_28674)?(G__28272_28679[(2)]):(cljs.core.truth_(G__28285_28676)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__28280_28687 = ((G__28284_28675)?(G__28273_28680[(0)]):(cljs.core.truth_(G__28286_28677)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28281_28688 = ((G__28284_28675)?(G__28273_28680[(1)]):(cljs.core.truth_(G__28286_28677)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28282_28689 = ((G__28284_28675)?(G__28273_28680[(2)]):(cljs.core.truth_(G__28286_28677)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__23581__auto__[(0)] = (function (){var a__23208__auto__ = (function (){var a__23208__auto__ = G__28274_28681;
var b__23209__auto__ = G__28277_28684;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})();
var b__23209__auto__ = G__28280_28687;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23581__auto__[(1)] = (function (){var a__23208__auto__ = (function (){var a__23208__auto__ = G__28275_28682;
var b__23209__auto__ = G__28278_28685;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})();
var b__23209__auto__ = G__28281_28688;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

(dest__23581__auto__[(2)] = (function (){var a__23208__auto__ = (function (){var a__23208__auto__ = G__28276_28683;
var b__23209__auto__ = G__28279_28686;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})();
var b__23209__auto__ = G__28282_28689;
if((a__23208__auto__ <= b__23209__auto__)){
return a__23208__auto__;
} else {
return b__23209__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23570__auto__ = (new Float32Array((3)));
var G__28287_28690 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28288_28691 = v.buf;
(dest__23570__auto__[(0)] = (function (){var a__23215__auto__ = (G__28287_28690[(0)]);
var b__23216__auto__ = (G__28288_28691[(0)]);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23570__auto__[(1)] = (function (){var a__23215__auto__ = (G__28287_28690[(1)]);
var b__23216__auto__ = (G__28288_28691[(1)]);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23570__auto__[(2)] = (function (){var a__23215__auto__ = (G__28287_28690[(2)]);
var b__23216__auto__ = (G__28288_28691[(2)]);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__23570__auto__[(0)] = (function (){var a__23215__auto__ = (G__28287_28690[(0)]);
var b__23216__auto__ = v;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23570__auto__[(1)] = (function (){var a__23215__auto__ = (G__28287_28690[(1)]);
var b__23216__auto__ = v;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23570__auto__[(2)] = (function (){var a__23215__auto__ = (G__28287_28690[(2)]);
var b__23216__auto__ = v;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());
} else {
(dest__23570__auto__[(0)] = (function (){var a__23215__auto__ = (G__28287_28690[(0)]);
var b__23216__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23570__auto__[(1)] = (function (){var a__23215__auto__ = (G__28287_28690[(1)]);
var b__23216__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23570__auto__[(2)] = (function (){var a__23215__auto__ = (G__28287_28690[(2)]);
var b__23216__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__23570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__23581__auto__ = (new Float32Array((3)));
var G__28301_28692 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__28302_28693 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28303_28694 = ((!(G__28301_28692))?typeof v === 'number':null);
var G__28304_28695 = ((!(G__28302_28693))?typeof v2 === 'number':null);
var G__28289_28696 = self__.buf;
var G__28290_28697 = ((G__28301_28692)?v.buf:null);
var G__28291_28698 = ((G__28302_28693)?v2.buf:null);
var G__28292_28699 = (G__28289_28696[(0)]);
var G__28293_28700 = (G__28289_28696[(1)]);
var G__28294_28701 = (G__28289_28696[(2)]);
var G__28295_28702 = ((G__28301_28692)?(G__28290_28697[(0)]):(cljs.core.truth_(G__28303_28694)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28296_28703 = ((G__28301_28692)?(G__28290_28697[(1)]):(cljs.core.truth_(G__28303_28694)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28297_28704 = ((G__28301_28692)?(G__28290_28697[(2)]):(cljs.core.truth_(G__28303_28694)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__28298_28705 = ((G__28302_28693)?(G__28291_28698[(0)]):(cljs.core.truth_(G__28304_28695)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28299_28706 = ((G__28302_28693)?(G__28291_28698[(1)]):(cljs.core.truth_(G__28304_28695)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28300_28707 = ((G__28302_28693)?(G__28291_28698[(2)]):(cljs.core.truth_(G__28304_28695)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__23581__auto__[(0)] = (function (){var a__23215__auto__ = (function (){var a__23215__auto__ = G__28292_28699;
var b__23216__auto__ = G__28295_28702;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})();
var b__23216__auto__ = G__28298_28705;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23581__auto__[(1)] = (function (){var a__23215__auto__ = (function (){var a__23215__auto__ = G__28293_28700;
var b__23216__auto__ = G__28296_28703;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})();
var b__23216__auto__ = G__28299_28706;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

(dest__23581__auto__[(2)] = (function (){var a__23215__auto__ = (function (){var a__23215__auto__ = G__28294_28701;
var b__23216__auto__ = G__28297_28704;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})();
var b__23216__auto__ = G__28300_28707;
if((a__23215__auto__ >= b__23216__auto__)){
return a__23215__auto__;
} else {
return b__23216__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__23581__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.core.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__28305 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28306 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28305[(0)]),(G__28306[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28305[(1)]),(G__28306[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28305[(2)]),(G__28306[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28305[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28305[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28305[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__28307 = self__.buf;
var G__28308 = (G__28307[(0)]);
var G__28309 = (G__28307[(1)]);
var G__28310 = (G__28307[(2)]);
return Math.sqrt((((G__28308 * G__28308) + (G__28309 * G__28309)) + (G__28310 * G__28310)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__28311 = self__.buf;
var G__28312 = (G__28311[(0)]);
var G__28313 = (G__28311[(1)]);
var G__28314 = (G__28311[(2)]);
return (((G__28312 * G__28312) + (G__28313 * G__28313)) + (G__28314 * G__28314));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28315_28708 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__28316_28709 = v.buf;
(b[(0)] = (((G__28315_28708[(0)]) + (G__28316_28709[(0)])) * 0.5));

(b[(1)] = (((G__28315_28708[(1)]) + (G__28316_28709[(1)])) * 0.5));

(b[(2)] = (((G__28315_28708[(2)]) + (G__28316_28709[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__28315_28708[(0)]) + v) * 0.5));

(b[(1)] = (((G__28315_28708[(1)]) + v) * 0.5));

(b[(2)] = (((G__28315_28708[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__28315_28708[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__28315_28708[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__28315_28708[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28329_28710 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__28330_28711 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__28331_28712 = ((!(G__28329_28710))?typeof v === 'number':null);
var G__28332_28713 = ((!(G__28330_28711))?typeof v2 === 'number':null);
var G__28317_28714 = self__.buf;
var G__28318_28715 = ((G__28329_28710)?v.buf:null);
var G__28319_28716 = ((G__28330_28711)?v2.buf:null);
var G__28320_28717 = (G__28317_28714[(0)]);
var G__28321_28718 = (G__28317_28714[(1)]);
var G__28322_28719 = (G__28317_28714[(2)]);
var G__28323_28720 = ((G__28329_28710)?(G__28318_28715[(0)]):(cljs.core.truth_(G__28331_28712)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28324_28721 = ((G__28329_28710)?(G__28318_28715[(1)]):(cljs.core.truth_(G__28331_28712)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28325_28722 = ((G__28329_28710)?(G__28318_28715[(2)]):(cljs.core.truth_(G__28331_28712)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__28326_28723 = ((G__28330_28711)?(G__28319_28716[(0)]):(cljs.core.truth_(G__28332_28713)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28327_28724 = ((G__28330_28711)?(G__28319_28716[(1)]):(cljs.core.truth_(G__28332_28713)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28328_28725 = ((G__28330_28711)?(G__28319_28716[(2)]):(cljs.core.truth_(G__28332_28713)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(b[(0)] = (((G__28323_28720 - G__28320_28717) * G__28326_28723) + G__28320_28717));

(b[(1)] = (((G__28324_28721 - G__28321_28718) * G__28327_28724) + G__28321_28718));

(b[(2)] = (((G__28325_28722 - G__28322_28719) * G__28328_28725) + G__28322_28719));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__28345_28726 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__28346_28727 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__28347_28728 = ((!(G__28345_28726))?typeof b === 'number':null);
var G__28348_28729 = ((!(G__28346_28727))?typeof c === 'number':null);
var G__28333_28730 = self__.buf;
var G__28334_28731 = ((G__28345_28726)?b.buf:null);
var G__28335_28732 = ((G__28346_28727)?c.buf:null);
var G__28336_28733 = (G__28333_28730[(0)]);
var G__28337_28734 = (G__28333_28730[(1)]);
var G__28338_28735 = (G__28333_28730[(2)]);
var G__28339_28736 = ((G__28345_28726)?(G__28334_28731[(0)]):(cljs.core.truth_(G__28347_28728)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28340_28737 = ((G__28345_28726)?(G__28334_28731[(1)]):(cljs.core.truth_(G__28347_28728)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28341_28738 = ((G__28345_28726)?(G__28334_28731[(2)]):(cljs.core.truth_(G__28347_28728)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__28342_28739 = ((G__28346_28727)?(G__28335_28732[(0)]):(cljs.core.truth_(G__28348_28729)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__28343_28740 = ((G__28346_28727)?(G__28335_28732[(1)]):(cljs.core.truth_(G__28348_28729)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__28344_28741 = ((G__28346_28727)?(G__28335_28732[(2)]):(cljs.core.truth_(G__28348_28729)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_28742 = (((G__28339_28736 - G__28336_28733) * u) + G__28336_28733);
var y1_28743 = (((G__28340_28737 - G__28337_28734) * u) + G__28337_28734);
var z1_28744 = (((G__28341_28738 - G__28338_28735) * u) + G__28338_28735);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__28342_28739) * u) + G__28342_28739) - x1_28742) * v) + x1_28742));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__28343_28740) * u) + G__28343_28740) - y1_28743) * v) + y1_28743));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__28344_28741) * u) + G__28344_28741) - z1_28744) * v) + z1_28744));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.geom.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__28747){
var G__28745 = (((G__28747 instanceof thi.ng.geom.core.vector.Vec2))?G__28747.buf:G__28747.buf);
return (G__28745[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__28750){
var G__28748 = (((G__28750 instanceof thi.ng.geom.core.vector.Vec2))?G__28750.buf:G__28750.buf);
var G__28749 = (new Float32Array(2));
(G__28749[(0)] = (G__28748[(0)]));

(G__28749[(1)] = (G__28748[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__28749,null,cljs.core.meta.call(null,G__28750)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__28753){
var G__28751 = (((G__28753 instanceof thi.ng.geom.core.vector.Vec2))?G__28753.buf:G__28753.buf);
var G__28752 = (new Float32Array(3));
(G__28752[(0)] = (G__28751[(0)]));

(G__28752[(1)] = (G__28751[(0)]));

(G__28752[(2)] = (G__28751[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28752,null,cljs.core.meta.call(null,G__28753)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__28756){
var G__28754 = (((G__28756 instanceof thi.ng.geom.core.vector.Vec2))?G__28756.buf:G__28756.buf);
var G__28755 = (new Float32Array(3));
(G__28755[(0)] = (G__28754[(0)]));

(G__28755[(1)] = (G__28754[(0)]));

(G__28755[(2)] = (G__28754[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28755,null,cljs.core.meta.call(null,G__28756)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__28759){
if((G__28759 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28759","G__28759",59750695,null))))].join('')));
}

var G__28757 = (((G__28759 instanceof thi.ng.geom.core.vector.Vec2))?G__28759.buf:G__28759.buf);
var G__28758 = (new Float32Array(3));
(G__28758[(0)] = (G__28757[(0)]));

(G__28758[(1)] = (G__28757[(0)]));

(G__28758[(2)] = (G__28757[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28758,null,cljs.core.meta.call(null,G__28759)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__28762){
var G__28760 = (((G__28762 instanceof thi.ng.geom.core.vector.Vec2))?G__28762.buf:G__28762.buf);
var G__28761 = (new Float32Array(2));
(G__28761[(0)] = (G__28760[(0)]));

(G__28761[(1)] = (G__28760[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__28761,null,cljs.core.meta.call(null,G__28762)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__28765){
var G__28763 = (((G__28765 instanceof thi.ng.geom.core.vector.Vec2))?G__28765.buf:G__28765.buf);
var G__28764 = (new Float32Array(3));
(G__28764[(0)] = (G__28763[(0)]));

(G__28764[(1)] = (G__28763[(1)]));

(G__28764[(2)] = (G__28763[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28764,null,cljs.core.meta.call(null,G__28765)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__28768){
var G__28766 = (((G__28768 instanceof thi.ng.geom.core.vector.Vec2))?G__28768.buf:G__28768.buf);
var G__28767 = (new Float32Array(3));
(G__28767[(0)] = (G__28766[(0)]));

(G__28767[(1)] = (G__28766[(1)]));

(G__28767[(2)] = (G__28766[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28767,null,cljs.core.meta.call(null,G__28768)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__28771){
if((G__28771 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28771","G__28771",890970939,null))))].join('')));
}

var G__28769 = (((G__28771 instanceof thi.ng.geom.core.vector.Vec2))?G__28771.buf:G__28771.buf);
var G__28770 = (new Float32Array(3));
(G__28770[(0)] = (G__28769[(0)]));

(G__28770[(1)] = (G__28769[(1)]));

(G__28770[(2)] = (G__28769[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28770,null,cljs.core.meta.call(null,G__28771)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__28774){
if((G__28774 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28774","G__28774",-790905588,null))))].join('')));
}

var G__28772 = (((G__28774 instanceof thi.ng.geom.core.vector.Vec2))?G__28774.buf:G__28774.buf);
var G__28773 = (new Float32Array(2));
(G__28773[(0)] = (G__28772[(0)]));

(G__28773[(1)] = (G__28772[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__28773,null,cljs.core.meta.call(null,G__28774)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__28777){
if((G__28777 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28777","G__28777",-313958485,null))))].join('')));
}

var G__28775 = (((G__28777 instanceof thi.ng.geom.core.vector.Vec2))?G__28777.buf:G__28777.buf);
var G__28776 = (new Float32Array(3));
(G__28776[(0)] = (G__28775[(0)]));

(G__28776[(1)] = (G__28775[(2)]));

(G__28776[(2)] = (G__28775[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28776,null,cljs.core.meta.call(null,G__28777)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__28780){
if((G__28780 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28780","G__28780",605119978,null))))].join('')));
}

var G__28778 = (((G__28780 instanceof thi.ng.geom.core.vector.Vec2))?G__28780.buf:G__28780.buf);
var G__28779 = (new Float32Array(3));
(G__28779[(0)] = (G__28778[(0)]));

(G__28779[(1)] = (G__28778[(2)]));

(G__28779[(2)] = (G__28778[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28779,null,cljs.core.meta.call(null,G__28780)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__28783){
if((G__28783 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28783","G__28783",678693328,null))))].join('')));
}

var G__28781 = (((G__28783 instanceof thi.ng.geom.core.vector.Vec2))?G__28783.buf:G__28783.buf);
var G__28782 = (new Float32Array(3));
(G__28782[(0)] = (G__28781[(0)]));

(G__28782[(1)] = (G__28781[(2)]));

(G__28782[(2)] = (G__28781[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28782,null,cljs.core.meta.call(null,G__28783)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__28786){
var G__28784 = (((G__28786 instanceof thi.ng.geom.core.vector.Vec2))?G__28786.buf:G__28786.buf);
return (G__28784[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__28789){
var G__28787 = (((G__28789 instanceof thi.ng.geom.core.vector.Vec2))?G__28789.buf:G__28789.buf);
var G__28788 = (new Float32Array(2));
(G__28788[(0)] = (G__28787[(1)]));

(G__28788[(1)] = (G__28787[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__28788,null,cljs.core.meta.call(null,G__28789)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__28792){
var G__28790 = (((G__28792 instanceof thi.ng.geom.core.vector.Vec2))?G__28792.buf:G__28792.buf);
var G__28791 = (new Float32Array(3));
(G__28791[(0)] = (G__28790[(1)]));

(G__28791[(1)] = (G__28790[(0)]));

(G__28791[(2)] = (G__28790[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28791,null,cljs.core.meta.call(null,G__28792)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__28795){
var G__28793 = (((G__28795 instanceof thi.ng.geom.core.vector.Vec2))?G__28795.buf:G__28795.buf);
var G__28794 = (new Float32Array(3));
(G__28794[(0)] = (G__28793[(1)]));

(G__28794[(1)] = (G__28793[(0)]));

(G__28794[(2)] = (G__28793[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28794,null,cljs.core.meta.call(null,G__28795)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__28798){
if((G__28798 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28798","G__28798",-1263724260,null))))].join('')));
}

var G__28796 = (((G__28798 instanceof thi.ng.geom.core.vector.Vec2))?G__28798.buf:G__28798.buf);
var G__28797 = (new Float32Array(3));
(G__28797[(0)] = (G__28796[(1)]));

(G__28797[(1)] = (G__28796[(0)]));

(G__28797[(2)] = (G__28796[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28797,null,cljs.core.meta.call(null,G__28798)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__28801){
var G__28799 = (((G__28801 instanceof thi.ng.geom.core.vector.Vec2))?G__28801.buf:G__28801.buf);
var G__28800 = (new Float32Array(2));
(G__28800[(0)] = (G__28799[(1)]));

(G__28800[(1)] = (G__28799[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__28800,null,cljs.core.meta.call(null,G__28801)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__28804){
var G__28802 = (((G__28804 instanceof thi.ng.geom.core.vector.Vec2))?G__28804.buf:G__28804.buf);
var G__28803 = (new Float32Array(3));
(G__28803[(0)] = (G__28802[(1)]));

(G__28803[(1)] = (G__28802[(1)]));

(G__28803[(2)] = (G__28802[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28803,null,cljs.core.meta.call(null,G__28804)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__28807){
var G__28805 = (((G__28807 instanceof thi.ng.geom.core.vector.Vec2))?G__28807.buf:G__28807.buf);
var G__28806 = (new Float32Array(3));
(G__28806[(0)] = (G__28805[(1)]));

(G__28806[(1)] = (G__28805[(1)]));

(G__28806[(2)] = (G__28805[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28806,null,cljs.core.meta.call(null,G__28807)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__28810){
if((G__28810 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28810","G__28810",-1533546408,null))))].join('')));
}

var G__28808 = (((G__28810 instanceof thi.ng.geom.core.vector.Vec2))?G__28810.buf:G__28810.buf);
var G__28809 = (new Float32Array(3));
(G__28809[(0)] = (G__28808[(1)]));

(G__28809[(1)] = (G__28808[(1)]));

(G__28809[(2)] = (G__28808[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28809,null,cljs.core.meta.call(null,G__28810)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__28813){
if((G__28813 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28813","G__28813",1434121933,null))))].join('')));
}

var G__28811 = (((G__28813 instanceof thi.ng.geom.core.vector.Vec2))?G__28813.buf:G__28813.buf);
var G__28812 = (new Float32Array(2));
(G__28812[(0)] = (G__28811[(1)]));

(G__28812[(1)] = (G__28811[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__28812,null,cljs.core.meta.call(null,G__28813)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__28816){
if((G__28816 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28816","G__28816",-915349683,null))))].join('')));
}

var G__28814 = (((G__28816 instanceof thi.ng.geom.core.vector.Vec2))?G__28816.buf:G__28816.buf);
var G__28815 = (new Float32Array(3));
(G__28815[(0)] = (G__28814[(1)]));

(G__28815[(1)] = (G__28814[(2)]));

(G__28815[(2)] = (G__28814[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28815,null,cljs.core.meta.call(null,G__28816)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__28819){
if((G__28819 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28819","G__28819",-843424848,null))))].join('')));
}

var G__28817 = (((G__28819 instanceof thi.ng.geom.core.vector.Vec2))?G__28819.buf:G__28819.buf);
var G__28818 = (new Float32Array(3));
(G__28818[(0)] = (G__28817[(1)]));

(G__28818[(1)] = (G__28817[(2)]));

(G__28818[(2)] = (G__28817[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28818,null,cljs.core.meta.call(null,G__28819)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__28822){
if((G__28822 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28822","G__28822",-537673900,null))))].join('')));
}

var G__28820 = (((G__28822 instanceof thi.ng.geom.core.vector.Vec2))?G__28822.buf:G__28822.buf);
var G__28821 = (new Float32Array(3));
(G__28821[(0)] = (G__28820[(1)]));

(G__28821[(1)] = (G__28820[(2)]));

(G__28821[(2)] = (G__28820[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28821,null,cljs.core.meta.call(null,G__28822)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__28825){
if((G__28825 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28825","G__28825",-634577139,null))))].join('')));
}

var G__28823 = (((G__28825 instanceof thi.ng.geom.core.vector.Vec2))?G__28825.buf:G__28825.buf);
return (G__28823[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__28828){
if((G__28828 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28828","G__28828",757598136,null))))].join('')));
}

var G__28826 = (((G__28828 instanceof thi.ng.geom.core.vector.Vec2))?G__28828.buf:G__28828.buf);
var G__28827 = (new Float32Array(2));
(G__28827[(0)] = (G__28826[(2)]));

(G__28827[(1)] = (G__28826[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__28827,null,cljs.core.meta.call(null,G__28828)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__28831){
if((G__28831 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28831","G__28831",589820669,null))))].join('')));
}

var G__28829 = (((G__28831 instanceof thi.ng.geom.core.vector.Vec2))?G__28831.buf:G__28831.buf);
var G__28830 = (new Float32Array(3));
(G__28830[(0)] = (G__28829[(2)]));

(G__28830[(1)] = (G__28829[(0)]));

(G__28830[(2)] = (G__28829[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28830,null,cljs.core.meta.call(null,G__28831)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__28834){
if((G__28834 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28834","G__28834",35816055,null))))].join('')));
}

var G__28832 = (((G__28834 instanceof thi.ng.geom.core.vector.Vec2))?G__28834.buf:G__28834.buf);
var G__28833 = (new Float32Array(3));
(G__28833[(0)] = (G__28832[(2)]));

(G__28833[(1)] = (G__28832[(0)]));

(G__28833[(2)] = (G__28832[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28833,null,cljs.core.meta.call(null,G__28834)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__28837){
if((G__28837 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28837","G__28837",-1230467377,null))))].join('')));
}

var G__28835 = (((G__28837 instanceof thi.ng.geom.core.vector.Vec2))?G__28837.buf:G__28837.buf);
var G__28836 = (new Float32Array(3));
(G__28836[(0)] = (G__28835[(2)]));

(G__28836[(1)] = (G__28835[(0)]));

(G__28836[(2)] = (G__28835[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28836,null,cljs.core.meta.call(null,G__28837)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__28840){
if((G__28840 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28840","G__28840",989287384,null))))].join('')));
}

var G__28838 = (((G__28840 instanceof thi.ng.geom.core.vector.Vec2))?G__28840.buf:G__28840.buf);
var G__28839 = (new Float32Array(2));
(G__28839[(0)] = (G__28838[(2)]));

(G__28839[(1)] = (G__28838[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__28839,null,cljs.core.meta.call(null,G__28840)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__28843){
if((G__28843 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28843","G__28843",-2101700654,null))))].join('')));
}

var G__28841 = (((G__28843 instanceof thi.ng.geom.core.vector.Vec2))?G__28843.buf:G__28843.buf);
var G__28842 = (new Float32Array(3));
(G__28842[(0)] = (G__28841[(2)]));

(G__28842[(1)] = (G__28841[(1)]));

(G__28842[(2)] = (G__28841[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28842,null,cljs.core.meta.call(null,G__28843)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__28846){
if((G__28846 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28846","G__28846",-1332067350,null))))].join('')));
}

var G__28844 = (((G__28846 instanceof thi.ng.geom.core.vector.Vec2))?G__28846.buf:G__28846.buf);
var G__28845 = (new Float32Array(3));
(G__28845[(0)] = (G__28844[(2)]));

(G__28845[(1)] = (G__28844[(1)]));

(G__28845[(2)] = (G__28844[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28845,null,cljs.core.meta.call(null,G__28846)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__28849){
if((G__28849 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28849","G__28849",2040662960,null))))].join('')));
}

var G__28847 = (((G__28849 instanceof thi.ng.geom.core.vector.Vec2))?G__28849.buf:G__28849.buf);
var G__28848 = (new Float32Array(3));
(G__28848[(0)] = (G__28847[(2)]));

(G__28848[(1)] = (G__28847[(1)]));

(G__28848[(2)] = (G__28847[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28848,null,cljs.core.meta.call(null,G__28849)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__28852){
if((G__28852 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28852","G__28852",1300828115,null))))].join('')));
}

var G__28850 = (((G__28852 instanceof thi.ng.geom.core.vector.Vec2))?G__28852.buf:G__28852.buf);
var G__28851 = (new Float32Array(2));
(G__28851[(0)] = (G__28850[(2)]));

(G__28851[(1)] = (G__28850[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__28851,null,cljs.core.meta.call(null,G__28852)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__28855){
if((G__28855 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28855","G__28855",1702953195,null))))].join('')));
}

var G__28853 = (((G__28855 instanceof thi.ng.geom.core.vector.Vec2))?G__28855.buf:G__28855.buf);
var G__28854 = (new Float32Array(3));
(G__28854[(0)] = (G__28853[(2)]));

(G__28854[(1)] = (G__28853[(2)]));

(G__28854[(2)] = (G__28853[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__28854,null,cljs.core.meta.call(null,G__28855)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__28858){
if((G__28858 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28858","G__28858",549055916,null))))].join('')));
}

var G__28856 = (((G__28858 instanceof thi.ng.geom.core.vector.Vec2))?G__28858.buf:G__28858.buf);
var G__28857 = (new Float32Array(3));
(G__28857[(0)] = (G__28856[(2)]));

(G__28857[(1)] = (G__28856[(2)]));

(G__28857[(2)] = (G__28856[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__28857,null,cljs.core.meta.call(null,G__28858)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__28861){
if((G__28861 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__28861","G__28861",-128332074,null))))].join('')));
}

var G__28859 = (((G__28861 instanceof thi.ng.geom.core.vector.Vec2))?G__28861.buf:G__28861.buf);
var G__28860 = (new Float32Array(3));
(G__28860[(0)] = (G__28859[(2)]));

(G__28860[(1)] = (G__28859[(2)]));

(G__28860[(2)] = (G__28859[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__28860,null,cljs.core.meta.call(null,G__28861)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__4423__auto__ = (function (){var and__16096__auto__ = ((1) === c);
if(and__16096__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__16096__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var idx = temp__4423__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__4423__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__28862 = (i + (1));
var G__28863 = cljs.core.next.call(null,n__$1);
i = G__28862;
n__$1 = G__28863;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__28864 = null;
var G__28864__1 = (function (a){
return a;
});
var G__28864__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__28864 = function(a,b){
switch(arguments.length){
case 1:
return G__28864__1.call(this,a);
case 2:
return G__28864__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28864.cljs$core$IFn$_invoke$arity$1 = G__28864__1;
G__28864.cljs$core$IFn$_invoke$arity$2 = G__28864__2;
return G__28864;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__28865 = null;
var G__28865__1 = (function (a){
return a;
});
var G__28865__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__28865 = function(a,b){
switch(arguments.length){
case 1:
return G__28865__1.call(this,a);
case 2:
return G__28865__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28865.cljs$core$IFn$_invoke$arity$1 = G__28865__1;
G__28865.cljs$core$IFn$_invoke$arity$2 = G__28865__2;
return G__28865;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(){
var G__28867 = arguments.length;
switch (G__28867) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
});

thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(){
var G__28870 = arguments.length;
switch (G__28870) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
});

thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(){
var G__28873 = arguments.length;
switch (G__28873) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(){
var G__28876 = arguments.length;
switch (G__28876) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.call(null,(1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.call(null,(0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(){
var G__28879 = arguments.length;
switch (G__28879) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1;
thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(){
var G__28882 = arguments.length;
switch (G__28882) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=vector.js.map?rel=1449311572481