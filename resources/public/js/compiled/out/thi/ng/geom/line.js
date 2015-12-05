// Compiled by ClojureScript 0.0-3297 {}
goog.provide('thi.ng.geom.line');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.line.line2 = (function thi$ng$geom$line$line2(){
var G__26768 = arguments.length;
switch (G__26768) {
case 1:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1 = (function (p__26769){
var vec__26770 = p__26769;
var p = cljs.core.nth.call(null,vec__26770,(0),null);
var q = cljs.core.nth.call(null,vec__26770,(1),null);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,p),thi.ng.geom.core.vector.vec2.call(null,q)], null)));
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,p),thi.ng.geom.core.vector.vec2.call(null,q)], null)));
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,px,py),thi.ng.geom.core.vector.vec2.call(null,qx,qy)], null)));
});

thi.ng.geom.line.line2.cljs$lang$maxFixedArity = 4;
thi.ng.geom.line.line3 = (function thi$ng$geom$line$line3(){
var G__26773 = arguments.length;
switch (G__26773) {
case 1:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1 = (function (p__26774){
var vec__26775 = p__26774;
var p = cljs.core.nth.call(null,vec__26775,(0),null);
var q = cljs.core.nth.call(null,vec__26775,(1),null);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,p),thi.ng.geom.core.vector.vec3.call(null,q)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,p),thi.ng.geom.core.vector.vec3.call(null,q)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,px,py),thi.ng.geom.core.vector.vec3.call(null,qx,qy)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6 = (function (px,py,pz,qx,qy,qz){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,px,py,pz),thi.ng.geom.core.vector.vec3.call(null,qx,qy,qz)], null)));
});

thi.ng.geom.line.line3.cljs$lang$maxFixedArity = 6;
thi.ng.geom.line.linestrip2 = (function thi$ng$geom$line$linestrip2(){
var G__26780 = arguments.length;
switch (G__26780) {
case 1:
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__17159__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17159__auto__);

}
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,points)));
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,cljs.core.cons.call(null,p,more))));
});

thi.ng.geom.line.linestrip2.cljs$lang$applyTo = (function (seq26777){
var G__26778 = cljs.core.first.call(null,seq26777);
var seq26777__$1 = cljs.core.next.call(null,seq26777);
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic(G__26778,seq26777__$1);
});

thi.ng.geom.line.linestrip2.cljs$lang$maxFixedArity = (1);
thi.ng.geom.line.reflect_on_ray = (function thi$ng$geom$line$reflect_on_ray(ctor,p,q,rc,dir){
return ctor.call(null,thi.ng.geom.core._PLUS_.call(null,rc,thi.ng.geom.core.reflect.call(null,thi.ng.geom.core._.call(null,p,rc),dir)),thi.ng.geom.core._PLUS_.call(null,rc,thi.ng.geom.core.reflect.call(null,thi.ng.geom.core._.call(null,q,rc),dir)));
});
thi.ng.geom.line.reflect_on_line = (function thi$ng$geom$line$reflect_on_line(ctor,p,q,rp,rq){
return thi.ng.geom.line.reflect_on_ray.call(null,ctor,p,q,thi.ng.geom.core.mix.call(null,rp,rq),thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,rq,rp)));
});
thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__26782,m){
var map__26783 = p__26782;
var map__26783__$1 = ((cljs.core.seq_QMARK_.call(null,map__26783))?cljs.core.apply.call(null,cljs.core.hash_map,map__26783):map__26783);
var p = cljs.core.get.call(null,map__26783__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26784 = this;
var map__26784__$1 = ((cljs.core.seq_QMARK_.call(null,map__26784))?cljs.core.apply.call(null,cljs.core.hash_map,map__26784):map__26784);
var p__$1 = cljs.core.get.call(null,map__26784__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(0))),thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(1)))], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__26785,theta){
var map__26786 = p__26785;
var map__26786__$1 = ((cljs.core.seq_QMARK_.call(null,map__26786))?cljs.core.apply.call(null,cljs.core.hash_map,map__26786):map__26786);
var p = cljs.core.get.call(null,map__26786__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26787 = this;
var map__26787__$1 = ((cljs.core.seq_QMARK_.call(null,map__26787))?cljs.core.apply.call(null,cljs.core.hash_map,map__26787):map__26787);
var p__$1 = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__26788){
var map__26789 = p__26788;
var map__26789__$1 = ((cljs.core.seq_QMARK_.call(null,map__26789))?cljs.core.apply.call(null,cljs.core.hash_map,map__26789):map__26789);
var vec__26790 = cljs.core.get.call(null,map__26789__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26790,(0),null);
var q = cljs.core.nth.call(null,vec__26790,(1),null);
var map__26791 = this;
var map__26791__$1 = ((cljs.core.seq_QMARK_.call(null,map__26791))?cljs.core.apply.call(null,cljs.core.hash_map,map__26791):map__26791);
var vec__26792 = cljs.core.get.call(null,map__26791__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26792,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26792,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__26793,n){
var map__26794 = p__26793;
var map__26794__$1 = ((cljs.core.seq_QMARK_.call(null,map__26794))?cljs.core.apply.call(null,cljs.core.hash_map,map__26794):map__26794);
var vec__26795 = cljs.core.get.call(null,map__26794__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26795,(0),null);
var q = cljs.core.nth.call(null,vec__26795,(1),null);
var map__26796 = this;
var map__26796__$1 = ((cljs.core.seq_QMARK_.call(null,map__26796))?cljs.core.apply.call(null,cljs.core.hash_map,map__26796):map__26796);
var vec__26797 = cljs.core.get.call(null,map__26796__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26797,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26797,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1),n);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__26798,r){
var map__26799 = p__26798;
var map__26799__$1 = ((cljs.core.seq_QMARK_.call(null,map__26799))?cljs.core.apply.call(null,cljs.core.hash_map,map__26799):map__26799);
var vec__26800 = cljs.core.get.call(null,map__26799__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26800,(0),null);
var q = cljs.core.nth.call(null,vec__26800,(1),null);
var map__26801 = this;
var map__26801__$1 = ((cljs.core.seq_QMARK_.call(null,map__26801))?cljs.core.apply.call(null,cljs.core.hash_map,map__26801):map__26801);
var vec__26802 = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26802,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26802,(1),null);
if((r instanceof thi.ng.geom.types.Line2)){
var vec__26803 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.call(null,vec__26803,(0),null);
var qr = cljs.core.nth.call(null,vec__26803,(1),null);
return thi.ng.geom.line.reflect_on_line.call(null,thi.ng.geom.line.line2,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect.call(null,p__$1,r),thi.ng.geom.core.reflect.call(null,q__$1,r)], null)));
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__26804){
var map__26805 = p__26804;
var map__26805__$1 = ((cljs.core.seq_QMARK_.call(null,map__26805))?cljs.core.apply.call(null,cljs.core.hash_map,map__26805):map__26805);
var vec__26806 = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26806,(0),null);
var q = cljs.core.nth.call(null,vec__26806,(1),null);
var map__26807 = this;
var map__26807__$1 = ((cljs.core.seq_QMARK_.call(null,map__26807))?cljs.core.apply.call(null,cljs.core.hash_map,map__26807):map__26807);
var vec__26808 = cljs.core.get.call(null,map__26807__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26808,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26808,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.call(null,p__$1,c),thi.ng.geom.core._.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__26809,o){
var map__26810 = p__26809;
var map__26810__$1 = ((cljs.core.seq_QMARK_.call(null,map__26810))?cljs.core.apply.call(null,cljs.core.hash_map,map__26810):map__26810);
var vec__26811 = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26811,(0),null);
var q = cljs.core.nth.call(null,vec__26811,(1),null);
var map__26812 = this;
var map__26812__$1 = ((cljs.core.seq_QMARK_.call(null,map__26812))?cljs.core.apply.call(null,cljs.core.hash_map,map__26812):map__26812);
var vec__26813 = cljs.core.get.call(null,map__26812__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26813,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26813,(1),null);
var c = thi.ng.geom.core._.call(null,o,thi.ng.geom.core.mix.call(null,p__$1,q__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,c),thi.ng.geom.core._PLUS_.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__26814){
var map__26815 = p__26814;
var map__26815__$1 = ((cljs.core.seq_QMARK_.call(null,map__26815))?cljs.core.apply.call(null,cljs.core.hash_map,map__26815):map__26815);
var p = cljs.core.get.call(null,map__26815__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26816 = this;
var map__26816__$1 = ((cljs.core.seq_QMARK_.call(null,map__26816))?cljs.core.apply.call(null,cljs.core.hash_map,map__26816):map__26816);
var p__$1 = cljs.core.get.call(null,map__26816__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__26817,t){
var map__26818 = p__26817;
var map__26818__$1 = ((cljs.core.seq_QMARK_.call(null,map__26818))?cljs.core.apply.call(null,cljs.core.hash_map,map__26818):map__26818);
var p = cljs.core.get.call(null,map__26818__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26819 = this;
var map__26819__$1 = ((cljs.core.seq_QMARK_.call(null,map__26819))?cljs.core.apply.call(null,cljs.core.hash_map,map__26819):map__26819);
var p__$1 = cljs.core.get.call(null,map__26819__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),t);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__26820){
var map__26821 = p__26820;
var map__26821__$1 = ((cljs.core.seq_QMARK_.call(null,map__26821))?cljs.core.apply.call(null,cljs.core.hash_map,map__26821):map__26821);
var p = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26822 = this;
var map__26822__$1 = ((cljs.core.seq_QMARK_.call(null,map__26822))?cljs.core.apply.call(null,cljs.core.hash_map,map__26822):map__26822);
var p__$1 = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__26823){
var map__26824 = p__26823;
var map__26824__$1 = ((cljs.core.seq_QMARK_.call(null,map__26824))?cljs.core.apply.call(null,cljs.core.hash_map,map__26824):map__26824);
var p = cljs.core.get.call(null,map__26824__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26825 = this;
var map__26825__$1 = ((cljs.core.seq_QMARK_.call(null,map__26825))?cljs.core.apply.call(null,cljs.core.hash_map,map__26825):map__26825);
var p__$1 = cljs.core.get.call(null,map__26825__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,dist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__26826,v){
var map__26827 = p__26826;
var map__26827__$1 = ((cljs.core.seq_QMARK_.call(null,map__26827))?cljs.core.apply.call(null,cljs.core.hash_map,map__26827):map__26827);
var vec__26828 = cljs.core.get.call(null,map__26827__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26828,(0),null);
var q = cljs.core.nth.call(null,vec__26828,(1),null);
var map__26829 = this;
var map__26829__$1 = ((cljs.core.seq_QMARK_.call(null,map__26829))?cljs.core.apply.call(null,cljs.core.hash_map,map__26829):map__26829);
var vec__26830 = cljs.core.get.call(null,map__26829__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26830,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26830,(1),null);
return thi.ng.math.core.signum.call(null,thi.ng.geom.core.dot.call(null,thi.ng.geom.core._.call(null,thi.ng.geom.core.vector.vec2.call(null,v),p__$1),thi.ng.geom.core.normal.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1))),thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__26831,p__26832){
var map__26833 = p__26831;
var map__26833__$1 = ((cljs.core.seq_QMARK_.call(null,map__26833))?cljs.core.apply.call(null,cljs.core.hash_map,map__26833):map__26833);
var _ = map__26833__$1;
var points = cljs.core.get.call(null,map__26833__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26834 = p__26832;
var map__26834__$1 = ((cljs.core.seq_QMARK_.call(null,map__26834))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);
var mesh = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var map__26835 = this;
var map__26835__$1 = ((cljs.core.seq_QMARK_.call(null,map__26835))?cljs.core.apply.call(null,cljs.core.hash_map,map__26835):map__26835);
var ___$1 = map__26835__$1;
var points__$1 = cljs.core.get.call(null,map__26835__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__16108__auto__ = offset;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(0)));
var b = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(1)));
var ta = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(0)));
var tb = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(1)));
return thi.ng.geom.core.add_face.call(null,(function (){var or__16108__auto__ = mesh;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)], null);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__26836,q){
var map__26837 = p__26836;
var map__26837__$1 = ((cljs.core.seq_QMARK_.call(null,map__26837))?cljs.core.apply.call(null,cljs.core.hash_map,map__26837):map__26837);
var p = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26838 = this;
var map__26838__$1 = ((cljs.core.seq_QMARK_.call(null,map__26838))?cljs.core.apply.call(null,cljs.core.hash_map,map__26838):map__26838);
var p__$1 = cljs.core.get.call(null,map__26838__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff.call(null,thi.ng.geom.core.vector.vec2.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__26839,l){
var map__26840 = p__26839;
var map__26840__$1 = ((cljs.core.seq_QMARK_.call(null,map__26840))?cljs.core.apply.call(null,cljs.core.hash_map,map__26840):map__26840);
var vec__26841 = cljs.core.get.call(null,map__26840__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26841,(0),null);
var b = cljs.core.nth.call(null,vec__26841,(1),null);
var map__26842 = this;
var map__26842__$1 = ((cljs.core.seq_QMARK_.call(null,map__26842))?cljs.core.apply.call(null,cljs.core.hash_map,map__26842):map__26842);
var vec__26843 = cljs.core.get.call(null,map__26842__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26843,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26843,(1),null);
var vec__26844 = (function (){var or__16108__auto__ = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.call(null,vec__26844,(0),null);
var d = cljs.core.nth.call(null,vec__26844,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_.call(null,a__$1,b__$1,c,d);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (p__26845){
var map__26846 = p__26845;
var map__26846__$1 = ((cljs.core.seq_QMARK_.call(null,map__26846))?cljs.core.apply.call(null,cljs.core.hash_map,map__26846):map__26846);
var vec__26847 = cljs.core.get.call(null,map__26846__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26847,(0),null);
var q = cljs.core.nth.call(null,vec__26847,(1),null);
var map__26848 = this;
var map__26848__$1 = ((cljs.core.seq_QMARK_.call(null,map__26848))?cljs.core.apply.call(null,cljs.core.hash_map,map__26848):map__26848);
var vec__26849 = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26849,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26849,(1),null);
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.mix.call(null,p__$1,q__$1),(0.5 * thi.ng.geom.core.dist.call(null,p__$1,q__$1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__26850,t){
var map__26851 = p__26850;
var map__26851__$1 = ((cljs.core.seq_QMARK_.call(null,map__26851))?cljs.core.apply.call(null,cljs.core.hash_map,map__26851):map__26851);
var p = cljs.core.get.call(null,map__26851__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26852 = this;
var map__26852__$1 = ((cljs.core.seq_QMARK_.call(null,map__26852))?cljs.core.apply.call(null,cljs.core.hash_map,map__26852):map__26852);
var p__$1 = cljs.core.get.call(null,map__26852__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(0)),t),thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(1)),t)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__26853,s){
var map__26854 = p__26853;
var map__26854__$1 = ((cljs.core.seq_QMARK_.call(null,map__26854))?cljs.core.apply.call(null,cljs.core.hash_map,map__26854):map__26854);
var p = cljs.core.get.call(null,map__26854__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26855 = this;
var map__26855__$1 = ((cljs.core.seq_QMARK_.call(null,map__26855))?cljs.core.apply.call(null,cljs.core.hash_map,map__26855):map__26855);
var p__$1 = cljs.core.get.call(null,map__26855__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),s),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),s)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__26856,sx,sy){
var map__26857 = p__26856;
var map__26857__$1 = ((cljs.core.seq_QMARK_.call(null,map__26857))?cljs.core.apply.call(null,cljs.core.hash_map,map__26857):map__26857);
var p = cljs.core.get.call(null,map__26857__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26858 = this;
var map__26858__$1 = ((cljs.core.seq_QMARK_.call(null,map__26858))?cljs.core.apply.call(null,cljs.core.hash_map,map__26858):map__26858);
var p__$1 = cljs.core.get.call(null,map__26858__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),sx,sy),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),sx,sy)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__26859,s){
var map__26860 = p__26859;
var map__26860__$1 = ((cljs.core.seq_QMARK_.call(null,map__26860))?cljs.core.apply.call(null,cljs.core.hash_map,map__26860):map__26860);
var vec__26861 = cljs.core.get.call(null,map__26860__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26861,(0),null);
var q = cljs.core.nth.call(null,vec__26861,(1),null);
var map__26862 = this;
var map__26862__$1 = ((cljs.core.seq_QMARK_.call(null,map__26862))?cljs.core.apply.call(null,cljs.core.hash_map,map__26862):map__26862);
var vec__26863 = cljs.core.get.call(null,map__26862__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26863,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26863,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p__$1,c),s,c),thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__26864){
var map__26865 = p__26864;
var map__26865__$1 = ((cljs.core.seq_QMARK_.call(null,map__26865))?cljs.core.apply.call(null,cljs.core.hash_map,map__26865):map__26865);
var p = cljs.core.get.call(null,map__26865__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26866 = this;
var map__26866__$1 = ((cljs.core.seq_QMARK_.call(null,map__26866))?cljs.core.apply.call(null,cljs.core.hash_map,map__26866):map__26866);
var p__$1 = cljs.core.get.call(null,map__26866__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__26867){
var map__26868 = p__26867;
var map__26868__$1 = ((cljs.core.seq_QMARK_.call(null,map__26868))?cljs.core.apply.call(null,cljs.core.hash_map,map__26868):map__26868);
var p = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26869 = this;
var map__26869__$1 = ((cljs.core.seq_QMARK_.call(null,map__26869))?cljs.core.apply.call(null,cljs.core.hash_map,map__26869):map__26869);
var p__$1 = cljs.core.get.call(null,map__26869__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(0)) - p__$1.call(null,(1)).call(null,(0))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__26870){
var map__26871 = p__26870;
var map__26871__$1 = ((cljs.core.seq_QMARK_.call(null,map__26871))?cljs.core.apply.call(null,cljs.core.hash_map,map__26871):map__26871);
var p = cljs.core.get.call(null,map__26871__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26872 = this;
var map__26872__$1 = ((cljs.core.seq_QMARK_.call(null,map__26872))?cljs.core.apply.call(null,cljs.core.hash_map,map__26872):map__26872);
var p__$1 = cljs.core.get.call(null,map__26872__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(1)) - p__$1.call(null,(1)).call(null,(1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__26873,res){
var map__26874 = p__26873;
var map__26874__$1 = ((cljs.core.seq_QMARK_.call(null,map__26874))?cljs.core.apply.call(null,cljs.core.hash_map,map__26874):map__26874);
var p = cljs.core.get.call(null,map__26874__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26875 = this;
var map__26875__$1 = ((cljs.core.seq_QMARK_.call(null,map__26875))?cljs.core.apply.call(null,cljs.core.hash_map,map__26875):map__26875);
var p__$1 = cljs.core.get.call(null,map__26875__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_segment_with_res.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),res,true);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__26876){
var map__26877 = p__26876;
var map__26877__$1 = ((cljs.core.seq_QMARK_.call(null,map__26877))?cljs.core.apply.call(null,cljs.core.hash_map,map__26877):map__26877);
var p = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26878 = this;
var map__26878__$1 = ((cljs.core.seq_QMARK_.call(null,map__26878))?cljs.core.apply.call(null,cljs.core.hash_map,map__26878):map__26878);
var p__$1 = cljs.core.get.call(null,map__26878__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__26879){
var map__26880 = p__26879;
var map__26880__$1 = ((cljs.core.seq_QMARK_.call(null,map__26880))?cljs.core.apply.call(null,cljs.core.hash_map,map__26880):map__26880);
var p = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26881 = this;
var map__26881__$1 = ((cljs.core.seq_QMARK_.call(null,map__26881))?cljs.core.apply.call(null,cljs.core.hash_map,map__26881):map__26881);
var p__$1 = cljs.core.get.call(null,map__26881__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist_squared.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__26882,v){
var map__26883 = p__26882;
var map__26883__$1 = ((cljs.core.seq_QMARK_.call(null,map__26883))?cljs.core.apply.call(null,cljs.core.hash_map,map__26883):map__26883);
var vec__26884 = cljs.core.get.call(null,map__26883__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26884,(0),null);
var q = cljs.core.nth.call(null,vec__26884,(1),null);
var map__26885 = this;
var map__26885__$1 = ((cljs.core.seq_QMARK_.call(null,map__26885))?cljs.core.apply.call(null,cljs.core.hash_map,map__26885):map__26885);
var vec__26886 = cljs.core.get.call(null,map__26885__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26886,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26886,(1),null);
var pred__26887 = cljs.core._EQ_;
var expr__26888 = v;
if(cljs.core.truth_(pred__26887.call(null,p__$1,expr__26888))){
return q__$1;
} else {
if(cljs.core.truth_(pred__26887.call(null,q__$1,expr__26888))){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__26890,v){
var map__26891 = p__26890;
var map__26891__$1 = ((cljs.core.seq_QMARK_.call(null,map__26891))?cljs.core.apply.call(null,cljs.core.hash_map,map__26891):map__26891);
var p = cljs.core.get.call(null,map__26891__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26892 = this;
var map__26892__$1 = ((cljs.core.seq_QMARK_.call(null,map__26892))?cljs.core.apply.call(null,cljs.core.hash_map,map__26892):map__26892);
var p__$1 = cljs.core.get.call(null,map__26892__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if((cljs.core._EQ_.call(null,v,p__$1.call(null,(0)))) || (cljs.core._EQ_.call(null,v,p__$1.call(null,(1))))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__26893,q){
var map__26894 = p__26893;
var map__26894__$1 = ((cljs.core.seq_QMARK_.call(null,map__26894))?cljs.core.apply.call(null,cljs.core.hash_map,map__26894):map__26894);
var p = cljs.core.get.call(null,map__26894__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26895 = this;
var map__26895__$1 = ((cljs.core.seq_QMARK_.call(null,map__26895))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895):map__26895);
var p__$1 = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.closest_point_on_segment.call(null,thi.ng.geom.core.vector.vec2.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return (0);
});
thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__26896,m){
var map__26897 = p__26896;
var map__26897__$1 = ((cljs.core.seq_QMARK_.call(null,map__26897))?cljs.core.apply.call(null,cljs.core.hash_map,map__26897):map__26897);
var p = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26898 = this;
var map__26898__$1 = ((cljs.core.seq_QMARK_.call(null,map__26898))?cljs.core.apply.call(null,cljs.core.hash_map,map__26898):map__26898);
var p__$1 = cljs.core.get.call(null,map__26898__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(0))),thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(1)))], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__26899,theta){
var map__26900 = p__26899;
var map__26900__$1 = ((cljs.core.seq_QMARK_.call(null,map__26900))?cljs.core.apply.call(null,cljs.core.hash_map,map__26900):map__26900);
var p = cljs.core.get.call(null,map__26900__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26901 = this;
var map__26901__$1 = ((cljs.core.seq_QMARK_.call(null,map__26901))?cljs.core.apply.call(null,cljs.core.hash_map,map__26901):map__26901);
var p__$1 = cljs.core.get.call(null,map__26901__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__26902){
var map__26903 = p__26902;
var map__26903__$1 = ((cljs.core.seq_QMARK_.call(null,map__26903))?cljs.core.apply.call(null,cljs.core.hash_map,map__26903):map__26903);
var vec__26904 = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26904,(0),null);
var q = cljs.core.nth.call(null,vec__26904,(1),null);
var map__26905 = this;
var map__26905__$1 = ((cljs.core.seq_QMARK_.call(null,map__26905))?cljs.core.apply.call(null,cljs.core.hash_map,map__26905):map__26905);
var vec__26906 = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26906,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26906,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__26907,n){
var map__26908 = p__26907;
var map__26908__$1 = ((cljs.core.seq_QMARK_.call(null,map__26908))?cljs.core.apply.call(null,cljs.core.hash_map,map__26908):map__26908);
var vec__26909 = cljs.core.get.call(null,map__26908__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26909,(0),null);
var q = cljs.core.nth.call(null,vec__26909,(1),null);
var map__26910 = this;
var map__26910__$1 = ((cljs.core.seq_QMARK_.call(null,map__26910))?cljs.core.apply.call(null,cljs.core.hash_map,map__26910):map__26910);
var vec__26911 = cljs.core.get.call(null,map__26910__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26911,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26911,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1),n);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (p__26912,theta){
var map__26913 = p__26912;
var map__26913__$1 = ((cljs.core.seq_QMARK_.call(null,map__26913))?cljs.core.apply.call(null,cljs.core.hash_map,map__26913):map__26913);
var p = cljs.core.get.call(null,map__26913__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26914 = this;
var map__26914__$1 = ((cljs.core.seq_QMARK_.call(null,map__26914))?cljs.core.apply.call(null,cljs.core.hash_map,map__26914):map__26914);
var p__$1 = cljs.core.get.call(null,map__26914__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_x.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate_x.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (p__26915,theta){
var map__26916 = p__26915;
var map__26916__$1 = ((cljs.core.seq_QMARK_.call(null,map__26916))?cljs.core.apply.call(null,cljs.core.hash_map,map__26916):map__26916);
var p = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26917 = this;
var map__26917__$1 = ((cljs.core.seq_QMARK_.call(null,map__26917))?cljs.core.apply.call(null,cljs.core.hash_map,map__26917):map__26917);
var p__$1 = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_y.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate_y.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (p__26918,theta){
var map__26919 = p__26918;
var map__26919__$1 = ((cljs.core.seq_QMARK_.call(null,map__26919))?cljs.core.apply.call(null,cljs.core.hash_map,map__26919):map__26919);
var p = cljs.core.get.call(null,map__26919__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26920 = this;
var map__26920__$1 = ((cljs.core.seq_QMARK_.call(null,map__26920))?cljs.core.apply.call(null,cljs.core.hash_map,map__26920):map__26920);
var p__$1 = cljs.core.get.call(null,map__26920__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_z.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate_z.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (p__26921,axis,theta){
var map__26922 = p__26921;
var map__26922__$1 = ((cljs.core.seq_QMARK_.call(null,map__26922))?cljs.core.apply.call(null,cljs.core.hash_map,map__26922):map__26922);
var p = cljs.core.get.call(null,map__26922__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26923 = this;
var map__26923__$1 = ((cljs.core.seq_QMARK_.call(null,map__26923))?cljs.core.apply.call(null,cljs.core.hash_map,map__26923):map__26923);
var p__$1 = cljs.core.get.call(null,map__26923__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_around_axis.call(null,p__$1.call(null,(0)),axis,theta),thi.ng.geom.core.rotate_around_axis.call(null,p__$1.call(null,(1)),axis,theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__26924,r){
var map__26925 = p__26924;
var map__26925__$1 = ((cljs.core.seq_QMARK_.call(null,map__26925))?cljs.core.apply.call(null,cljs.core.hash_map,map__26925):map__26925);
var vec__26926 = cljs.core.get.call(null,map__26925__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26926,(0),null);
var q = cljs.core.nth.call(null,vec__26926,(1),null);
var map__26927 = this;
var map__26927__$1 = ((cljs.core.seq_QMARK_.call(null,map__26927))?cljs.core.apply.call(null,cljs.core.hash_map,map__26927):map__26927);
var vec__26928 = cljs.core.get.call(null,map__26927__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26928,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26928,(1),null);
if((r instanceof thi.ng.geom.types.Line3)){
var vec__26929 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.call(null,vec__26929,(0),null);
var qr = cljs.core.nth.call(null,vec__26929,(1),null);
return thi.ng.geom.line.reflect_on_line.call(null,thi.ng.geom.line.line3,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect.call(null,p__$1,r),thi.ng.geom.core.reflect.call(null,q__$1,r)], null)));
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__26930){
var map__26931 = p__26930;
var map__26931__$1 = ((cljs.core.seq_QMARK_.call(null,map__26931))?cljs.core.apply.call(null,cljs.core.hash_map,map__26931):map__26931);
var vec__26932 = cljs.core.get.call(null,map__26931__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26932,(0),null);
var q = cljs.core.nth.call(null,vec__26932,(1),null);
var map__26933 = this;
var map__26933__$1 = ((cljs.core.seq_QMARK_.call(null,map__26933))?cljs.core.apply.call(null,cljs.core.hash_map,map__26933):map__26933);
var vec__26934 = cljs.core.get.call(null,map__26933__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26934,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26934,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.call(null,p__$1,c),thi.ng.geom.core._.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__26935,o){
var map__26936 = p__26935;
var map__26936__$1 = ((cljs.core.seq_QMARK_.call(null,map__26936))?cljs.core.apply.call(null,cljs.core.hash_map,map__26936):map__26936);
var vec__26937 = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26937,(0),null);
var q = cljs.core.nth.call(null,vec__26937,(1),null);
var map__26938 = this;
var map__26938__$1 = ((cljs.core.seq_QMARK_.call(null,map__26938))?cljs.core.apply.call(null,cljs.core.hash_map,map__26938):map__26938);
var vec__26939 = cljs.core.get.call(null,map__26938__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26939,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26939,(1),null);
var c = thi.ng.geom.core._.call(null,o,thi.ng.geom.core.mix.call(null,p__$1,q__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,c),thi.ng.geom.core._PLUS_.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__26940){
var map__26941 = p__26940;
var map__26941__$1 = ((cljs.core.seq_QMARK_.call(null,map__26941))?cljs.core.apply.call(null,cljs.core.hash_map,map__26941):map__26941);
var p = cljs.core.get.call(null,map__26941__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26942 = this;
var map__26942__$1 = ((cljs.core.seq_QMARK_.call(null,map__26942))?cljs.core.apply.call(null,cljs.core.hash_map,map__26942):map__26942);
var p__$1 = cljs.core.get.call(null,map__26942__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__26943,t){
var map__26944 = p__26943;
var map__26944__$1 = ((cljs.core.seq_QMARK_.call(null,map__26944))?cljs.core.apply.call(null,cljs.core.hash_map,map__26944):map__26944);
var p = cljs.core.get.call(null,map__26944__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26945 = this;
var map__26945__$1 = ((cljs.core.seq_QMARK_.call(null,map__26945))?cljs.core.apply.call(null,cljs.core.hash_map,map__26945):map__26945);
var p__$1 = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),t);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__26946){
var map__26947 = p__26946;
var map__26947__$1 = ((cljs.core.seq_QMARK_.call(null,map__26947))?cljs.core.apply.call(null,cljs.core.hash_map,map__26947):map__26947);
var p = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26948 = this;
var map__26948__$1 = ((cljs.core.seq_QMARK_.call(null,map__26948))?cljs.core.apply.call(null,cljs.core.hash_map,map__26948):map__26948);
var p__$1 = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__26949){
var map__26950 = p__26949;
var map__26950__$1 = ((cljs.core.seq_QMARK_.call(null,map__26950))?cljs.core.apply.call(null,cljs.core.hash_map,map__26950):map__26950);
var p = cljs.core.get.call(null,map__26950__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26951 = this;
var map__26951__$1 = ((cljs.core.seq_QMARK_.call(null,map__26951))?cljs.core.apply.call(null,cljs.core.hash_map,map__26951):map__26951);
var p__$1 = cljs.core.get.call(null,map__26951__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,dist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__26952,p){
var map__26953 = p__26952;
var map__26953__$1 = ((cljs.core.seq_QMARK_.call(null,map__26953))?cljs.core.apply.call(null,cljs.core.hash_map,map__26953):map__26953);
var p__$1 = cljs.core.get.call(null,map__26953__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26954 = this;
var map__26954__$1 = ((cljs.core.seq_QMARK_.call(null,map__26954))?cljs.core.apply.call(null,cljs.core.hash_map,map__26954):map__26954);
var p__$2 = cljs.core.get.call(null,map__26954__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__26955,p__26956){
var map__26957 = p__26955;
var map__26957__$1 = ((cljs.core.seq_QMARK_.call(null,map__26957))?cljs.core.apply.call(null,cljs.core.hash_map,map__26957):map__26957);
var _ = map__26957__$1;
var points = cljs.core.get.call(null,map__26957__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26958 = p__26956;
var map__26958__$1 = ((cljs.core.seq_QMARK_.call(null,map__26958))?cljs.core.apply.call(null,cljs.core.hash_map,map__26958):map__26958);
var mesh = cljs.core.get.call(null,map__26958__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__26958__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.call(null,map__26958__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.call(null,map__26958__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var map__26959 = this;
var map__26959__$1 = ((cljs.core.seq_QMARK_.call(null,map__26959))?cljs.core.apply.call(null,cljs.core.hash_map,map__26959):map__26959);
var ___$1 = map__26959__$1;
var points__$1 = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__16108__auto__ = offset;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(0)));
var b = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(1)));
var ta = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(0)));
var tb = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(1)));
return thi.ng.geom.core.add_face.call(null,(function (){var or__16108__auto__ = mesh;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)], null);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__26960,q){
var map__26961 = p__26960;
var map__26961__$1 = ((cljs.core.seq_QMARK_.call(null,map__26961))?cljs.core.apply.call(null,cljs.core.hash_map,map__26961):map__26961);
var p = cljs.core.get.call(null,map__26961__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26962 = this;
var map__26962__$1 = ((cljs.core.seq_QMARK_.call(null,map__26962))?cljs.core.apply.call(null,cljs.core.hash_map,map__26962):map__26962);
var p__$1 = cljs.core.get.call(null,map__26962__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff.call(null,thi.ng.geom.core.vector.vec3.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__26963,l){
var map__26964 = p__26963;
var map__26964__$1 = ((cljs.core.seq_QMARK_.call(null,map__26964))?cljs.core.apply.call(null,cljs.core.hash_map,map__26964):map__26964);
var vec__26965 = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26965,(0),null);
var b = cljs.core.nth.call(null,vec__26965,(1),null);
var map__26966 = this;
var map__26966__$1 = ((cljs.core.seq_QMARK_.call(null,map__26966))?cljs.core.apply.call(null,cljs.core.hash_map,map__26966):map__26966);
var vec__26967 = cljs.core.get.call(null,map__26966__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26967,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26967,(1),null);
var vec__26968 = (function (){var or__16108__auto__ = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.call(null,vec__26968,(0),null);
var d = cljs.core.nth.call(null,vec__26968,(1),null);
return thi.ng.geom.core.utils.closest_line_between.call(null,a__$1,b__$1,c,d);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,r){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__26969,t){
var map__26970 = p__26969;
var map__26970__$1 = ((cljs.core.seq_QMARK_.call(null,map__26970))?cljs.core.apply.call(null,cljs.core.hash_map,map__26970):map__26970);
var p = cljs.core.get.call(null,map__26970__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26971 = this;
var map__26971__$1 = ((cljs.core.seq_QMARK_.call(null,map__26971))?cljs.core.apply.call(null,cljs.core.hash_map,map__26971):map__26971);
var p__$1 = cljs.core.get.call(null,map__26971__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(0)),t),thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(1)),t)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__26972){
var map__26973 = p__26972;
var map__26973__$1 = ((cljs.core.seq_QMARK_.call(null,map__26973))?cljs.core.apply.call(null,cljs.core.hash_map,map__26973):map__26973);
var vec__26974 = cljs.core.get.call(null,map__26973__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26974,(0),null);
var q = cljs.core.nth.call(null,vec__26974,(1),null);
var map__26975 = this;
var map__26975__$1 = ((cljs.core.seq_QMARK_.call(null,map__26975))?cljs.core.apply.call(null,cljs.core.hash_map,map__26975):map__26975);
var vec__26976 = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26976,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26976,(1),null);
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.mix.call(null,p__$1,q__$1),(0.5 * thi.ng.geom.core.dist.call(null,p__$1,q__$1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__26977,s){
var map__26978 = p__26977;
var map__26978__$1 = ((cljs.core.seq_QMARK_.call(null,map__26978))?cljs.core.apply.call(null,cljs.core.hash_map,map__26978):map__26978);
var p = cljs.core.get.call(null,map__26978__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26979 = this;
var map__26979__$1 = ((cljs.core.seq_QMARK_.call(null,map__26979))?cljs.core.apply.call(null,cljs.core.hash_map,map__26979):map__26979);
var p__$1 = cljs.core.get.call(null,map__26979__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),s),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),s)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__26980,sx,sy){
var map__26981 = p__26980;
var map__26981__$1 = ((cljs.core.seq_QMARK_.call(null,map__26981))?cljs.core.apply.call(null,cljs.core.hash_map,map__26981):map__26981);
var p = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26982 = this;
var map__26982__$1 = ((cljs.core.seq_QMARK_.call(null,map__26982))?cljs.core.apply.call(null,cljs.core.hash_map,map__26982):map__26982);
var p__$1 = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),sx,sy),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),sx,sy)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__26983,s){
var map__26984 = p__26983;
var map__26984__$1 = ((cljs.core.seq_QMARK_.call(null,map__26984))?cljs.core.apply.call(null,cljs.core.hash_map,map__26984):map__26984);
var vec__26985 = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26985,(0),null);
var q = cljs.core.nth.call(null,vec__26985,(1),null);
var map__26986 = this;
var map__26986__$1 = ((cljs.core.seq_QMARK_.call(null,map__26986))?cljs.core.apply.call(null,cljs.core.hash_map,map__26986):map__26986);
var vec__26987 = cljs.core.get.call(null,map__26986__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__26987,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__26987,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p__$1,c),s,c),thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__26988){
var map__26989 = p__26988;
var map__26989__$1 = ((cljs.core.seq_QMARK_.call(null,map__26989))?cljs.core.apply.call(null,cljs.core.hash_map,map__26989):map__26989);
var p = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26990 = this;
var map__26990__$1 = ((cljs.core.seq_QMARK_.call(null,map__26990))?cljs.core.apply.call(null,cljs.core.hash_map,map__26990):map__26990);
var p__$1 = cljs.core.get.call(null,map__26990__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__26991){
var map__26992 = p__26991;
var map__26992__$1 = ((cljs.core.seq_QMARK_.call(null,map__26992))?cljs.core.apply.call(null,cljs.core.hash_map,map__26992):map__26992);
var p = cljs.core.get.call(null,map__26992__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26993 = this;
var map__26993__$1 = ((cljs.core.seq_QMARK_.call(null,map__26993))?cljs.core.apply.call(null,cljs.core.hash_map,map__26993):map__26993);
var p__$1 = cljs.core.get.call(null,map__26993__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(0)) - p__$1.call(null,(1)).call(null,(0))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__26994){
var map__26995 = p__26994;
var map__26995__$1 = ((cljs.core.seq_QMARK_.call(null,map__26995))?cljs.core.apply.call(null,cljs.core.hash_map,map__26995):map__26995);
var p = cljs.core.get.call(null,map__26995__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26996 = this;
var map__26996__$1 = ((cljs.core.seq_QMARK_.call(null,map__26996))?cljs.core.apply.call(null,cljs.core.hash_map,map__26996):map__26996);
var p__$1 = cljs.core.get.call(null,map__26996__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(1)) - p__$1.call(null,(1)).call(null,(1))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (p__26997){
var map__26998 = p__26997;
var map__26998__$1 = ((cljs.core.seq_QMARK_.call(null,map__26998))?cljs.core.apply.call(null,cljs.core.hash_map,map__26998):map__26998);
var p = cljs.core.get.call(null,map__26998__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26999 = this;
var map__26999__$1 = ((cljs.core.seq_QMARK_.call(null,map__26999))?cljs.core.apply.call(null,cljs.core.hash_map,map__26999):map__26999);
var p__$1 = cljs.core.get.call(null,map__26999__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(2)) - p__$1.call(null,(1)).call(null,(2))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__27000,res){
var map__27001 = p__27000;
var map__27001__$1 = ((cljs.core.seq_QMARK_.call(null,map__27001))?cljs.core.apply.call(null,cljs.core.hash_map,map__27001):map__27001);
var p = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27002 = this;
var map__27002__$1 = ((cljs.core.seq_QMARK_.call(null,map__27002))?cljs.core.apply.call(null,cljs.core.hash_map,map__27002):map__27002);
var p__$1 = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_segment_with_res.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),res,true);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__27003){
var map__27004 = p__27003;
var map__27004__$1 = ((cljs.core.seq_QMARK_.call(null,map__27004))?cljs.core.apply.call(null,cljs.core.hash_map,map__27004):map__27004);
var p = cljs.core.get.call(null,map__27004__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27005 = this;
var map__27005__$1 = ((cljs.core.seq_QMARK_.call(null,map__27005))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);
var p__$1 = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__27006){
var map__27007 = p__27006;
var map__27007__$1 = ((cljs.core.seq_QMARK_.call(null,map__27007))?cljs.core.apply.call(null,cljs.core.hash_map,map__27007):map__27007);
var p = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27008 = this;
var map__27008__$1 = ((cljs.core.seq_QMARK_.call(null,map__27008))?cljs.core.apply.call(null,cljs.core.hash_map,map__27008):map__27008);
var p__$1 = cljs.core.get.call(null,map__27008__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist_squared.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__27009,v){
var map__27010 = p__27009;
var map__27010__$1 = ((cljs.core.seq_QMARK_.call(null,map__27010))?cljs.core.apply.call(null,cljs.core.hash_map,map__27010):map__27010);
var vec__27011 = cljs.core.get.call(null,map__27010__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__27011,(0),null);
var q = cljs.core.nth.call(null,vec__27011,(1),null);
var map__27012 = this;
var map__27012__$1 = ((cljs.core.seq_QMARK_.call(null,map__27012))?cljs.core.apply.call(null,cljs.core.hash_map,map__27012):map__27012);
var vec__27013 = cljs.core.get.call(null,map__27012__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__27013,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__27013,(1),null);
var pred__27014 = cljs.core._EQ_;
var expr__27015 = v;
if(cljs.core.truth_(pred__27014.call(null,p__$1,expr__27015))){
return q__$1;
} else {
if(cljs.core.truth_(pred__27014.call(null,q__$1,expr__27015))){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__27017,v){
var map__27018 = p__27017;
var map__27018__$1 = ((cljs.core.seq_QMARK_.call(null,map__27018))?cljs.core.apply.call(null,cljs.core.hash_map,map__27018):map__27018);
var p = cljs.core.get.call(null,map__27018__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27019 = this;
var map__27019__$1 = ((cljs.core.seq_QMARK_.call(null,map__27019))?cljs.core.apply.call(null,cljs.core.hash_map,map__27019):map__27019);
var p__$1 = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if((cljs.core._EQ_.call(null,v,p__$1.call(null,(0)))) || (cljs.core._EQ_.call(null,v,p__$1.call(null,(1))))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__27020,q){
var map__27021 = p__27020;
var map__27021__$1 = ((cljs.core.seq_QMARK_.call(null,map__27021))?cljs.core.apply.call(null,cljs.core.hash_map,map__27021):map__27021);
var p = cljs.core.get.call(null,map__27021__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27022 = this;
var map__27022__$1 = ((cljs.core.seq_QMARK_.call(null,map__27022))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var p__$1 = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.closest_point_on_segment.call(null,thi.ng.geom.core.vector.vec3.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});
thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27031_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__27031_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27026_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__27026_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27025_SHARP_){
return thi.ng.geom.core.reflect.call(null,p1__27025_SHARP_,r);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec2.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec2.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,t,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point.call(null,___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__27032,p__27033){
var map__27034 = p__27032;
var map__27034__$1 = ((cljs.core.seq_QMARK_.call(null,map__27034))?cljs.core.apply.call(null,cljs.core.hash_map,map__27034):map__27034);
var _ = map__27034__$1;
var points = cljs.core.get.call(null,map__27034__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27035 = p__27033;
var map__27035__$1 = ((cljs.core.seq_QMARK_.call(null,map__27035))?cljs.core.apply.call(null,cljs.core.hash_map,map__27035):map__27035);
var mesh = cljs.core.get.call(null,map__27035__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__27035__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__27035__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.call(null,map__27035__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var map__27036 = this;
var map__27036__$1 = ((cljs.core.seq_QMARK_.call(null,map__27036))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);
var ___$1 = map__27036__$1;
var points__$1 = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__16108__auto__ = offset;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var bottom = cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$1);
var top = cljs.core.mapv.call(null,((function (tpoints,off,bottom,map__27036,map__27036__$1,___$1,points__$1,map__27034,map__27034__$1,_,points,map__27035,map__27035__$1,mesh,depth,offset,scale){
return (function (p1__27023_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__27023_SHARP_);
});})(tpoints,off,bottom,map__27036,map__27036__$1,___$1,points__$1,map__27034,map__27034__$1,_,points,map__27035,map__27035__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into.call(null,(function (){var or__16108__auto__ = mesh;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.mapcat.call(null,((function (tpoints,off,bottom,top,map__27036,map__27036__$1,___$1,points__$1,map__27034,map__27034__$1,_,points,map__27035,map__27035__$1,mesh,depth,offset,scale){
return (function (p__27037,p__27038){
var vec__27039 = p__27037;
var a1 = cljs.core.nth.call(null,vec__27039,(0),null);
var a2 = cljs.core.nth.call(null,vec__27039,(1),null);
var vec__27040 = p__27038;
var b1 = cljs.core.nth.call(null,vec__27040,(0),null);
var b2 = cljs.core.nth.call(null,vec__27040,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,bottom,top,map__27036,map__27036__$1,___$1,points__$1,map__27034,map__27034__$1,_,points,map__27035,map__27035__$1,mesh,depth,offset,scale))
,thi.ng.dstruct.core.successive_nth.call(null,(2),bottom),thi.ng.dstruct.core.successive_nth.call(null,(2),top)));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_circle.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27030_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__27030_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27027_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__27027_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27028_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__27028_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27029_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__27029_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.mag.call(null,___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__27041,res){
var map__27042 = p__27041;
var map__27042__$1 = ((cljs.core.seq_QMARK_.call(null,map__27042))?cljs.core.apply.call(null,cljs.core.hash_map,map__27042):map__27042);
var points = cljs.core.get.call(null,map__27042__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27043 = this;
var map__27043__$1 = ((cljs.core.seq_QMARK_.call(null,map__27043))?cljs.core.apply.call(null,cljs.core.hash_map,map__27043):map__27043);
var points__$1 = cljs.core.get.call(null,map__27043__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.call(null,((function (map__27043,map__27043__$1,points__$1,map__27042,map__27042__$1,points){
return (function (p1__27024_SHARP_){
return thi.ng.geom.core.utils.point_at.call(null,p1__27024_SHARP_,points__$1);
});})(map__27043,map__27043__$1,points__$1,map__27042,map__27042__$1,points))
,thi.ng.math.core.norm_range.call(null,res));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist_squared,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__27044,v){
var map__27045 = p__27044;
var map__27045__$1 = ((cljs.core.seq_QMARK_.call(null,map__27045))?cljs.core.apply.call(null,cljs.core.hash_map,map__27045):map__27045);
var points = cljs.core.get.call(null,map__27045__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27046 = this;
var map__27046__$1 = ((cljs.core.seq_QMARK_.call(null,map__27046))?cljs.core.apply.call(null,cljs.core.hash_map,map__27046):map__27046);
var points__$1 = cljs.core.get.call(null,map__27046__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var temp__4423__auto__ = thi.ng.dstruct.core.neighbors.call(null,v,points__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,points__$1),cljs.core.peek.call(null,points__$1))){
return (2);
} else {
if((cljs.core._EQ_.call(null,p,cljs.core.first.call(null,points__$1))) || (cljs.core._EQ_.call(null,p,cljs.core.peek.call(null,points__$1)))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});
thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27059_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__27059_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27050_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__27050_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27051_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__27051_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27052_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__27052_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27053_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__27053_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27054_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__27054_SHARP_,axis,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27049_SHARP_){
return thi.ng.geom.core.reflect.call(null,p1__27049_SHARP_,r);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec3.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,t,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point.call(null,___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__27060,p__27061){
var map__27062 = p__27060;
var map__27062__$1 = ((cljs.core.seq_QMARK_.call(null,map__27062))?cljs.core.apply.call(null,cljs.core.hash_map,map__27062):map__27062);
var _ = map__27062__$1;
var points = cljs.core.get.call(null,map__27062__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27063 = p__27061;
var map__27063__$1 = ((cljs.core.seq_QMARK_.call(null,map__27063))?cljs.core.apply.call(null,cljs.core.hash_map,map__27063):map__27063);
var mesh = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var map__27064 = this;
var map__27064__$1 = ((cljs.core.seq_QMARK_.call(null,map__27064))?cljs.core.apply.call(null,cljs.core.hash_map,map__27064):map__27064);
var ___$1 = map__27064__$1;
var points__$1 = cljs.core.get.call(null,map__27064__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__16108__auto__ = offset;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var top = cljs.core.mapv.call(null,((function (tpoints,off,map__27064,map__27064__$1,___$1,points__$1,map__27062,map__27062__$1,_,points,map__27063,map__27063__$1,mesh,depth,offset,scale){
return (function (p1__27047_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__27047_SHARP_);
});})(tpoints,off,map__27064,map__27064__$1,___$1,points__$1,map__27062,map__27062__$1,_,points,map__27063,map__27063__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into.call(null,(function (){var or__16108__auto__ = mesh;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.mapcat.call(null,((function (tpoints,off,top,map__27064,map__27064__$1,___$1,points__$1,map__27062,map__27062__$1,_,points,map__27063,map__27063__$1,mesh,depth,offset,scale){
return (function (p__27065,p__27066){
var vec__27067 = p__27065;
var a1 = cljs.core.nth.call(null,vec__27067,(0),null);
var a2 = cljs.core.nth.call(null,vec__27067,(1),null);
var vec__27068 = p__27066;
var b1 = cljs.core.nth.call(null,vec__27068,(0),null);
var b2 = cljs.core.nth.call(null,vec__27068,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,top,map__27064,map__27064__$1,___$1,points__$1,map__27062,map__27062__$1,_,points,map__27063,map__27063__$1,mesh,depth,offset,scale))
,thi.ng.dstruct.core.successive_nth.call(null,(2),points__$1),thi.ng.dstruct.core.successive_nth.call(null,(2),top)));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27058_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__27058_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27055_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__27055_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27056_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__27056_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__27057_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__27057_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.mag.call(null,___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__27069,res){
var map__27070 = p__27069;
var map__27070__$1 = ((cljs.core.seq_QMARK_.call(null,map__27070))?cljs.core.apply.call(null,cljs.core.hash_map,map__27070):map__27070);
var points = cljs.core.get.call(null,map__27070__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27071 = this;
var map__27071__$1 = ((cljs.core.seq_QMARK_.call(null,map__27071))?cljs.core.apply.call(null,cljs.core.hash_map,map__27071):map__27071);
var points__$1 = cljs.core.get.call(null,map__27071__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.call(null,((function (map__27071,map__27071__$1,points__$1,map__27070,map__27070__$1,points){
return (function (p1__27048_SHARP_){
return thi.ng.geom.core.utils.point_at.call(null,p1__27048_SHARP_,points__$1);
});})(map__27071,map__27071__$1,points__$1,map__27070,map__27070__$1,points))
,thi.ng.math.core.norm_range.call(null,res));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist_squared,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__27072,v){
var map__27073 = p__27072;
var map__27073__$1 = ((cljs.core.seq_QMARK_.call(null,map__27073))?cljs.core.apply.call(null,cljs.core.hash_map,map__27073):map__27073);
var points = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27074 = this;
var map__27074__$1 = ((cljs.core.seq_QMARK_.call(null,map__27074))?cljs.core.apply.call(null,cljs.core.hash_map,map__27074):map__27074);
var points__$1 = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var temp__4423__auto__ = thi.ng.dstruct.core.neighbors.call(null,v,points__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,points__$1),cljs.core.peek.call(null,points__$1))){
return (2);
} else {
if((cljs.core._EQ_.call(null,p,cljs.core.first.call(null,points__$1))) || (cljs.core._EQ_.call(null,p,cljs.core.peek.call(null,points__$1)))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

//# sourceMappingURL=line.js.map?rel=1449311570026