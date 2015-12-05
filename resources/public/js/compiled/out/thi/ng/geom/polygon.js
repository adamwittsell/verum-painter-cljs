// Compiled by ClojureScript 0.0-3297 {}
goog.provide('thi.ng.geom.polygon');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.triangle');
goog.require('thi.ng.geom.line');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.polygon.polygon2 = (function thi$ng$geom$polygon$polygon2(){
var G__26260 = arguments.length;
switch (G__26260) {
case 1:
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__17159__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17159__auto__);

}
});

thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,points)));
});

thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,cljs.core.cons.call(null,p,more))));
});

thi.ng.geom.polygon.polygon2.cljs$lang$applyTo = (function (seq26257){
var G__26258 = cljs.core.first.call(null,seq26257);
var seq26257__$1 = cljs.core.next.call(null,seq26257);
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic(G__26258,seq26257__$1);
});

thi.ng.geom.polygon.polygon2.cljs$lang$maxFixedArity = (1);
thi.ng.geom.polygon.cog = (function thi$ng$geom$polygon$cog(radius,teeth,profile){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,(function (p,v){
return thi.ng.geom.core._STAR_.call(null,v,p);
}),cljs.core.cycle.call(null,profile),thi.ng.geom.core.vertices.call(null,(new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null),radius)),(teeth * cljs.core.count.call(null,profile))))));
});
thi.ng.geom.polygon.clip_convex_STAR_ = (function thi$ng$geom$polygon$clip_convex_STAR_(verts,bounds){
var verts__$1 = cljs.core.conj.call(null,verts,cljs.core.first.call(null,verts));
var bc = thi.ng.geom.core.centroid.call(null,bounds);
var ec_pos = ((function (verts__$1,bc){
return (function (e,p,q){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.intersect_line.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,q], null)));
});})(verts__$1,bc))
;
var cedges = cljs.core.mapv.call(null,thi.ng.geom.line.line2,thi.ng.geom.core.edges.call(null,bounds));
var points = verts__$1;
var clipped = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cedges)){
var ce = cljs.core.first.call(null,cedges);
var sign = thi.ng.geom.core.classify_point.call(null,ce,bc);
var clipped__$1 = cljs.core.reduce.call(null,((function (cedges,points,clipped,ce,sign,verts__$1,bc,ec_pos){
return (function (clipped__$1,p__26264){
var vec__26265 = p__26264;
var p = cljs.core.nth.call(null,vec__26265,(0),null);
var q = cljs.core.nth.call(null,vec__26265,(1),null);
if(cljs.core._EQ_.call(null,sign,thi.ng.geom.core.classify_point.call(null,ce,p))){
if(cljs.core._EQ_.call(null,sign,thi.ng.geom.core.classify_point.call(null,ce,q))){
return cljs.core.conj.call(null,clipped__$1,q);
} else {
return cljs.core.conj.call(null,clipped__$1,ec_pos.call(null,ce,p,q));
}
} else {
if(cljs.core._EQ_.call(null,sign,thi.ng.geom.core.classify_point.call(null,ce,q))){
return cljs.core.conj.call(null,clipped__$1,ec_pos.call(null,ce,p,q),q);
} else {
return clipped__$1;
}
}
});})(cedges,points,clipped,ce,sign,verts__$1,bc,ec_pos))
,cljs.core.PersistentVector.EMPTY,thi.ng.dstruct.core.successive_nth.call(null,(2),points));
var clipped__$2 = ((((cljs.core.count.call(null,clipped__$1) > (0))) && (cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,clipped__$1),cljs.core.peek.call(null,clipped__$1)))))?cljs.core.conj.call(null,clipped__$1,cljs.core.first.call(null,clipped__$1)):clipped__$1);
var G__26266 = cljs.core.next.call(null,cedges);
var G__26267 = clipped__$2;
var G__26268 = points;
cedges = G__26266;
points = G__26267;
clipped = G__26268;
continue;
} else {
return cljs.core.distinct.call(null,cljs.core.butlast.call(null,points));
}
break;
}
});
thi.ng.geom.polygon.h_segment = (function thi$ng$geom$polygon$h_segment(verts,p__26269,pred,theta,ps){
while(true){
var vec__26274 = p__26269;
var px = cljs.core.nth.call(null,vec__26274,(0),null);
var py = cljs.core.nth.call(null,vec__26274,(1),null);
var p = vec__26274;
var vec__26275 = cljs.core.reduce.call(null,((function (verts,p__26269,pred,theta,ps,vec__26274,px,py,p){
return (function (state,p__26276){
var vec__26277 = p__26276;
var qx = cljs.core.nth.call(null,vec__26277,(0),null);
var qy = cljs.core.nth.call(null,vec__26277,(1),null);
var q = vec__26277;
if(cljs.core.truth_(pred.call(null,qy,py))){
var d = thi.ng.math.core.abs_diff.call(null,theta,thi.ng.geom.core.heading_xy.call(null,thi.ng.geom.core.vector.vec2.call(null,(qx - px),(qy - py))));
if((d < state.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d], null);
} else {
return state;
}
} else {
return state;
}
});})(verts,p__26269,pred,theta,ps,vec__26274,px,py,p))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.HALF_PI], null),ps);
var q = cljs.core.nth.call(null,vec__26275,(0),null);
if(cljs.core.truth_(q)){
var G__26278 = cljs.core.conj.call(null,verts,q);
var G__26279 = q;
var G__26280 = pred;
var G__26281 = theta;
var G__26282 = thi.ng.dstruct.core.all_after.call(null,q,ps);
verts = G__26278;
p__26269 = G__26279;
pred = G__26280;
theta = G__26281;
ps = G__26282;
continue;
} else {
return verts;
}
break;
}
});
thi.ng.geom.polygon.convex_hull_STAR_ = (function thi$ng$geom$polygon$convex_hull_STAR_(points){
var vec__26286 = cljs.core.sort_by.call(null,cljs.core.first,points);
var p = cljs.core.nth.call(null,vec__26286,(0),null);
var more = cljs.core.nthnext.call(null,vec__26286,(1));
var ps = vec__26286;
var rps = cljs.core.reverse.call(null,ps);
return cljs.core.butlast.call(null,cljs.core.reduce.call(null,((function (vec__26286,p,more,ps,rps){
return (function (v,p__26287){
var vec__26288 = p__26287;
var pred = cljs.core.nth.call(null,vec__26288,(0),null);
var t = cljs.core.nth.call(null,vec__26288,(1),null);
var ps__$1 = cljs.core.nth.call(null,vec__26288,(2),null);
return thi.ng.geom.polygon.h_segment.call(null,v,cljs.core.peek.call(null,v),pred,t,thi.ng.dstruct.core.all_after.call(null,cljs.core.peek.call(null,v),ps__$1));
});})(vec__26286,p,more,ps,rps))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._LT__EQ_,thi.ng.math.core.THREE_HALVES_PI,more], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT__EQ_,0.0,more], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT__EQ_,thi.ng.math.core.HALF_PI,rps], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._LT__EQ_,thi.ng.math.core.PI,rps], null)], null)));
});
thi.ng.geom.polygon.snip = (function thi$ng$geom$polygon$snip(points,a,b,c,nv,verts){
var vec__26293 = a;
var ax = cljs.core.nth.call(null,vec__26293,(0),null);
var ay = cljs.core.nth.call(null,vec__26293,(1),null);
var vec__26294 = b;
var bx = cljs.core.nth.call(null,vec__26294,(0),null);
var by = cljs.core.nth.call(null,vec__26294,(1),null);
var vec__26295 = c;
var cx = cljs.core.nth.call(null,vec__26295,(0),null);
var cy = cljs.core.nth.call(null,vec__26295,(1),null);
var cp = (((bx - ax) * (cy - ay)) - ((by - ay) * (cx - ax)));
if((thi.ng.math.core._STAR_eps_STAR_ < cp)){
return cljs.core.not.call(null,cljs.core.some.call(null,((function (vec__26293,ax,ay,vec__26294,bx,by,vec__26295,cx,cy,cp){
return (function (p1__26289_SHARP_){
return thi.ng.geom.core.utils.point_in_triangle2_QMARK_.call(null,p1__26289_SHARP_,a,b,c);
});})(vec__26293,ax,ay,vec__26294,bx,by,vec__26295,cx,cy,cp))
,cljs.core.disj.call(null,cljs.core.set.call(null,cljs.core.map.call(null,points,cljs.core.subvec.call(null,verts,(0),nv))),a,b,c)));
} else {
return null;
}
});
thi.ng.geom.polygon.tessellate_STAR_ = (function thi$ng$geom$polygon$tessellate_STAR_(p){
var vec__26297 = (((p instanceof thi.ng.geom.types.Polygon2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.core.area.call(null,p)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,p),thi.ng.geom.core.area.call(null,thi.ng.geom.polygon.polygon2.call(null,p))], null));
var points = cljs.core.nth.call(null,vec__26297,(0),null);
var area = cljs.core.nth.call(null,vec__26297,(1),null);
var nv = cljs.core.count.call(null,points);
var verts = cljs.core.vec.call(null,(((area > (0)))?cljs.core.range.call(null,nv):cljs.core.range.call(null,(nv - (1)),(-1),(-1))));
var result = cljs.core.PersistentVector.EMPTY;
var verts__$1 = verts;
var v = (nv - (1));
var nv__$1 = nv;
var cnt = (((2) * nv__$1) - (1));
while(true){
if(cljs.core._EQ_.call(null,nv__$1,(2))){
return result;
} else {
if((cnt > (0))){
var u = (((nv__$1 <= v))?(0):v);
var v__$1 = (u + (1));
var v__$2 = (((nv__$1 <= v__$1))?(0):v__$1);
var w = (v__$2 + (1));
var w__$1 = (((nv__$1 <= w))?(0):w);
var a = points.call(null,verts__$1.call(null,u));
var b = points.call(null,verts__$1.call(null,v__$2));
var c = points.call(null,verts__$1.call(null,w__$1));
if(cljs.core.truth_(thi.ng.geom.polygon.snip.call(null,points,a,b,c,nv__$1,verts__$1))){
var result__$1 = cljs.core.conj.call(null,result,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null));
var verts__$2 = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,verts__$1,(0),v__$2),cljs.core.subvec.call(null,verts__$1,(v__$2 + (1)))));
var nv__$2 = (nv__$1 - (1));
var G__26298 = result__$1;
var G__26299 = verts__$2;
var G__26300 = v__$2;
var G__26301 = nv__$2;
var G__26302 = ((2) * nv__$2);
result = G__26298;
verts__$1 = G__26299;
v = G__26300;
nv__$1 = G__26301;
cnt = G__26302;
continue;
} else {
var G__26303 = result;
var G__26304 = verts__$1;
var G__26305 = v__$2;
var G__26306 = nv__$1;
var G__26307 = (cnt - (1));
result = G__26303;
verts__$1 = G__26304;
v = G__26305;
nv__$1 = G__26306;
cnt = G__26307;
continue;
}
} else {
return null;
}
}
break;
}
});
thi.ng.geom.polygon.inset_corner = (function thi$ng$geom$polygon$inset_corner(prev,curr,next,d){
var vec__26310 = thi.ng.geom.core._.call(null,curr,prev);
var dx1 = cljs.core.nth.call(null,vec__26310,(0),null);
var dy1 = cljs.core.nth.call(null,vec__26310,(1),null);
var d1 = vec__26310;
var vec__26311 = thi.ng.geom.core._.call(null,next,curr);
var dx2 = cljs.core.nth.call(null,vec__26311,(0),null);
var dy2 = cljs.core.nth.call(null,vec__26311,(1),null);
var d2 = vec__26311;
var d1__$1 = thi.ng.geom.core.mag.call(null,d1);
var d2__$1 = thi.ng.geom.core.mag.call(null,d2);
if(cljs.core.not.call(null,(function (){var or__16108__auto__ = thi.ng.math.core.delta_EQ_.call(null,0.0,d1__$1);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,0.0,d2__$1);
}
})())){
var i1 = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.vector.vec2.call(null,dy1,(- dx1)),((1) / d1__$1)),d);
var i2 = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.vector.vec2.call(null,dy2,(- dx2)),((1) / d2__$1)),d);
var c1 = thi.ng.geom.core._PLUS_.call(null,curr,i1);
var c2 = thi.ng.geom.core._PLUS_.call(null,curr,i2);
var prev__$1 = thi.ng.geom.core._PLUS_.call(null,prev,i1);
var next__$1 = thi.ng.geom.core._PLUS_.call(null,next,i2);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,c1,c2))){
return c1;
} else {
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_.call(null,prev__$1,c1,c2,next__$1));
}
} else {
return curr;
}
});
/**
 * For CW polygons, use positive distance to inset or negative to outset.
 * For CCW polygons, use opposite.
 */
thi.ng.geom.polygon.inset_polygon = (function thi$ng$geom$polygon$inset_polygon(points,d){
return cljs.core.mapv.call(null,(function (p__26314){
var vec__26315 = p__26314;
var p = cljs.core.nth.call(null,vec__26315,(0),null);
var c = cljs.core.nth.call(null,vec__26315,(1),null);
var n = cljs.core.nth.call(null,vec__26315,(2),null);
return thi.ng.geom.polygon.inset_corner.call(null,p,c,n,d);
}),thi.ng.dstruct.core.successive_nth.call(null,(3),thi.ng.dstruct.core.wrap_seq.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,points)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});
thi.ng.geom.polygon.smooth = (function thi$ng$geom$polygon$smooth(p__26316,amp,base_weight){
var map__26320 = p__26316;
var map__26320__$1 = ((cljs.core.seq_QMARK_.call(null,map__26320))?cljs.core.apply.call(null,cljs.core.hash_map,map__26320):map__26320);
var _ = map__26320__$1;
var points = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var pc = thi.ng.geom.core.centroid.call(null,_);
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (pc,map__26320,map__26320__$1,_,points){
return (function (p__26321){
var vec__26322 = p__26321;
var p = cljs.core.nth.call(null,vec__26322,(0),null);
var c = cljs.core.nth.call(null,vec__26322,(1),null);
var n = cljs.core.nth.call(null,vec__26322,(2),null);
var d = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core._.call(null,p,c),thi.ng.geom.core._.call(null,n,c));
var d__$1 = thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,c,pc),base_weight,d);
return thi.ng.geom.core.madd.call(null,d__$1,amp,c);
});})(pc,map__26320,map__26320__$1,_,points))
,thi.ng.dstruct.core.successive_nth.call(null,(3),thi.ng.dstruct.core.wrap_seq.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,points)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))))));
});
thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26338_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__26338_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26333_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__26333_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec2.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec2.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__26339){
var map__26340 = p__26339;
var map__26340__$1 = ((cljs.core.seq_QMARK_.call(null,map__26340))?cljs.core.apply.call(null,cljs.core.hash_map,map__26340):map__26340);
var _ = map__26340__$1;
var points = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26341 = this;
var map__26341__$1 = ((cljs.core.seq_QMARK_.call(null,map__26341))?cljs.core.apply.call(null,cljs.core.hash_map,map__26341):map__26341);
var ___$1 = map__26341__$1;
var points__$1 = cljs.core.get.call(null,map__26341__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var c = cljs.core.first.call(null,cljs.core.reduce.call(null,((function (map__26341,map__26341__$1,___$1,points__$1,map__26340,map__26340__$1,_,points){
return (function (p__26342,v){
var vec__26343 = p__26342;
var c = cljs.core.nth.call(null,vec__26343,(0),null);
var p = cljs.core.nth.call(null,vec__26343,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd.call(null,thi.ng.geom.core._PLUS_.call(null,p,v),thi.ng.geom.core.cross.call(null,p,v),c),v], null);
});})(map__26341,map__26341__$1,___$1,points__$1,map__26340,map__26340__$1,_,points))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null),cljs.core.first.call(null,points__$1)], null),thi.ng.dstruct.core.rotate_left.call(null,(1),points__$1)));
return thi.ng.geom.core._STAR_.call(null,c,(1.0 / (6.0 * thi.ng.geom.core.area.call(null,___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PConvexHull$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PConvexHull$convex_hull$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.polygon.polygon2.call(null,thi.ng.geom.polygon.convex_hull_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.reverse.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__26344,t){
var map__26345 = p__26344;
var map__26345__$1 = ((cljs.core.seq_QMARK_.call(null,map__26345))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var points = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26346 = this;
var map__26346__$1 = ((cljs.core.seq_QMARK_.call(null,map__26346))?cljs.core.apply.call(null,cljs.core.hash_map,map__26346):map__26346);
var points__$1 = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,points__$1,cljs.core.first.call(null,points__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.call(null,___$1,thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (p__26347,udist,include_last_QMARK_){
var map__26348 = p__26347;
var map__26348__$1 = ((cljs.core.seq_QMARK_.call(null,map__26348))?cljs.core.apply.call(null,cljs.core.hash_map,map__26348):map__26348);
var points = cljs.core.get.call(null,map__26348__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26349 = this;
var map__26349__$1 = ((cljs.core.seq_QMARK_.call(null,map__26349))?cljs.core.apply.call(null,cljs.core.hash_map,map__26349):map__26349);
var points__$1 = cljs.core.get.call(null,map__26349__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,points__$1,cljs.core.first.call(null,points__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__26350,p__26351){
var map__26352 = p__26350;
var map__26352__$1 = ((cljs.core.seq_QMARK_.call(null,map__26352))?cljs.core.apply.call(null,cljs.core.hash_map,map__26352):map__26352);
var _ = map__26352__$1;
var points = cljs.core.get.call(null,map__26352__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26353 = p__26351;
var map__26353__$1 = ((cljs.core.seq_QMARK_.call(null,map__26353))?cljs.core.apply.call(null,cljs.core.hash_map,map__26353):map__26353);
var mesh = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var top_QMARK_ = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796),true);
var bottom_QMARK_ = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true);
var map__26354 = this;
var map__26354__$1 = ((cljs.core.seq_QMARK_.call(null,map__26354))?cljs.core.apply.call(null,cljs.core.hash_map,map__26354):map__26354);
var ___$1 = map__26354__$1;
var points__$1 = cljs.core.get.call(null,map__26354__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points__$2 = (((thi.ng.geom.core.area.call(null,___$1) < (0)))?cljs.core.reverse.call(null,points__$1):points__$1);
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$2:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,thi.ng.geom.polygon.polygon2.call(null,points__$2),scale)));
var off = (function (){var or__16108__auto__ = offset;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var points3 = cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$2);
var tpoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,off,points3,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p1__26323_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__26323_SHARP_);
});})(points__$2,tpoints,off,points3,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,tpoints);
var quad_QMARK_ = ((4) === cljs.core.count.call(null,points__$2));
return thi.ng.geom.core.into.call(null,(function (){var or__16108__auto__ = mesh;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.concat.call(null,(cljs.core.truth_(bottom_QMARK_)?((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq.call(null,cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$2))], null):cljs.core.map.call(null,((function (points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__26355){
var vec__26356 = p__26355;
var a = cljs.core.nth.call(null,vec__26356,(0),null);
var b = cljs.core.nth.call(null,vec__26356,(1),null);
var c = cljs.core.nth.call(null,vec__26356,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,c)], null);
});})(points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,points__$2))):null),cljs.core.mapv.call(null,((function (points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__26357,p__26358){
var vec__26359 = p__26357;
var a1 = cljs.core.nth.call(null,vec__26359,(0),null);
var b1 = cljs.core.nth.call(null,vec__26359,(1),null);
var vec__26360 = p__26358;
var a2 = cljs.core.nth.call(null,vec__26360,(0),null);
var b2 = cljs.core.nth.call(null,vec__26360,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null);
});})(points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,points3,points3.call(null,(0)))),thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,tpoints3,tpoints3.call(null,(0))))),(cljs.core.truth_(top_QMARK_)?((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tpoints3], null):cljs.core.mapv.call(null,((function (points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__26361){
var vec__26362 = p__26361;
var a = cljs.core.nth.call(null,vec__26362,(0),null);
var b = cljs.core.nth.call(null,vec__26362,(1),null);
var c = cljs.core.nth.call(null,vec__26362,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,off,a),thi.ng.geom.core._PLUS_.call(null,off,b),thi.ng.geom.core._PLUS_.call(null,off,c)], null);
});})(points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__26354,map__26354__$1,___$1,points__$1,map__26352,map__26352__$1,_,points,map__26353,map__26353__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,tpoints))):null)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (p__26363,p__26364){
var map__26365 = p__26363;
var map__26365__$1 = ((cljs.core.seq_QMARK_.call(null,map__26365))?cljs.core.apply.call(null,cljs.core.hash_map,map__26365):map__26365);
var _ = map__26365__$1;
var points = cljs.core.get.call(null,map__26365__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26366 = p__26364;
var map__26366__$1 = ((cljs.core.seq_QMARK_.call(null,map__26366))?cljs.core.apply.call(null,cljs.core.hash_map,map__26366):map__26366);
var mesh = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var inset = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"inset","inset",-396367740),0.0);
var top_QMARK_ = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796),false);
var bottom_QMARK_ = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),false);
var wall = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"wall","wall",-787661558),1.0);
var nump = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"nump","nump",1779362414));
var map__26367 = this;
var map__26367__$1 = ((cljs.core.seq_QMARK_.call(null,map__26367))?cljs.core.apply.call(null,cljs.core.hash_map,map__26367):map__26367);
var ___$1 = map__26367__$1;
var points__$1 = cljs.core.get.call(null,map__26367__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points__$2 = (((thi.ng.geom.core.area.call(null,___$1) < (0)))?cljs.core.reverse.call(null,points__$1):points__$1);
var tpoints = (((inset === (0)))?points__$2:thi.ng.geom.polygon.inset_polygon.call(null,points__$2,(- inset)));
var ipoints = thi.ng.geom.polygon.inset_polygon.call(null,points__$2,(- wall));
var itpoints = thi.ng.geom.polygon.inset_polygon.call(null,points__$2,((- inset) - wall));
var off = (function (){var or__16108__auto__ = offset;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var ioff = (cljs.core.truth_(bottom_QMARK_)?thi.ng.geom.core.normalize.call(null,off,wall):thi.ng.geom.core.vector.vec3.call(null));
var itoff = (cljs.core.truth_(top_QMARK_)?thi.ng.geom.core.normalize.call(null,off,(thi.ng.geom.core.mag.call(null,off) - wall)):off);
var maxp = (cljs.core.count.call(null,points__$2) + (1));
var quad_QMARK_ = ((4) === cljs.core.count.call(null,points__$2));
var nump__$1 = (cljs.core.truth_(nump)?thi.ng.math.core.clamp.call(null,nump,(2),maxp):maxp);
var np1 = (nump__$1 - (1));
var complete_QMARK_ = cljs.core._EQ_.call(null,nump__$1,maxp);
var maybe_loop = ((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26324_SHARP_){
if(complete_QMARK_){
return cljs.core.conj.call(null,p1__26324_SHARP_,p1__26324_SHARP_.call(null,(0)));
} else {
return cljs.core.take.call(null,nump__$1,p1__26324_SHARP_);
}
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
;
var drop_wrap = ((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26325_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,np1,p1__26325_SHARP_)),cljs.core.first.call(null,p1__26325_SHARP_));
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
;
var quad_strip = ((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (a,b,flip_QMARK_){
return cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__26368,p__26369){
var vec__26370 = p__26368;
var a1 = cljs.core.nth.call(null,vec__26370,(0),null);
var b1 = cljs.core.nth.call(null,vec__26370,(1),null);
var vec__26371 = p__26369;
var a2 = cljs.core.nth.call(null,vec__26371,(0),null);
var b2 = cljs.core.nth.call(null,vec__26371,(1),null);
if(cljs.core.truth_(flip_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,b2,b1], null);
}
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.dstruct.core.successive_nth.call(null,(2),a),thi.ng.dstruct.core.successive_nth.call(null,(2),b));
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
;
var points3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26326_SHARP_){
return thi.ng.geom.core.vector.vec3.call(null,p1__26326_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,points__$2);
var ipoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26327_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,ioff,p1__26327_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,ipoints);
var tpoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26328_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__26328_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,tpoints);
var itpoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26329_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,itoff,p1__26329_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,itpoints);
var outsides = quad_strip.call(null,maybe_loop.call(null,points3),maybe_loop.call(null,tpoints3),true);
var insides = quad_strip.call(null,maybe_loop.call(null,ipoints3),maybe_loop.call(null,itpoints3),false);
return thi.ng.geom.core.into.call(null,(function (){var or__16108__auto__ = mesh;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.concat.call(null,(cljs.core.truth_(bottom_QMARK_)?cljs.core.concat.call(null,((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq.call(null,cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$2))], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__26372){
var vec__26373 = p__26372;
var a = cljs.core.nth.call(null,vec__26373,(0),null);
var b = cljs.core.nth.call(null,vec__26373,(1),null);
var c = cljs.core.nth.call(null,vec__26373,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,points__$2))),((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26330_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,ioff,p1__26330_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,ipoints)], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__26374){
var vec__26375 = p__26374;
var a = cljs.core.nth.call(null,vec__26375,(0),null);
var b = cljs.core.nth.call(null,vec__26375,(1),null);
var c = cljs.core.nth.call(null,vec__26375,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,ioff,a),thi.ng.geom.core._PLUS_.call(null,ioff,b),thi.ng.geom.core._PLUS_.call(null,ioff,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,ipoints))),((complete_QMARK_)?null:quad_strip.call(null,drop_wrap.call(null,points3),drop_wrap.call(null,ipoints3),true))):quad_strip.call(null,maybe_loop.call(null,points3),maybe_loop.call(null,ipoints3),false)),outsides,insides,((complete_QMARK_)?null:(function (){var a = points3.call(null,(0));
var b = ipoints3.call(null,(0));
var c = itpoints3.call(null,(0));
var d = tpoints3.call(null,(0));
var e = points3.call(null,np1);
var f = ipoints3.call(null,np1);
var g = itpoints3.call(null,np1);
var h = tpoints3.call(null,np1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,c,b,a], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null)], null);
})()),(cljs.core.truth_(top_QMARK_)?cljs.core.concat.call(null,((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26331_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__26331_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,tpoints)], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__26376){
var vec__26377 = p__26376;
var a = cljs.core.nth.call(null,vec__26377,(0),null);
var b = cljs.core.nth.call(null,vec__26377,(1),null);
var c = cljs.core.nth.call(null,vec__26377,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,off,a),thi.ng.geom.core._PLUS_.call(null,off,b),thi.ng.geom.core._PLUS_.call(null,off,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,tpoints))),((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq.call(null,cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__26332_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,itoff,p1__26332_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,itpoints))], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__26378){
var vec__26379 = p__26378;
var a = cljs.core.nth.call(null,vec__26379,(0),null);
var b = cljs.core.nth.call(null,vec__26379,(1),null);
var c = cljs.core.nth.call(null,vec__26379,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,itoff,b),thi.ng.geom.core._PLUS_.call(null,itoff,a),thi.ng.geom.core._PLUS_.call(null,itoff,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__26367,map__26367__$1,___$1,points__$1,map__26365,map__26365__$1,_,points,map__26366,map__26366__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,itpoints))),((complete_QMARK_)?null:quad_strip.call(null,drop_wrap.call(null,tpoints3),drop_wrap.call(null,itpoints3),false))):quad_strip.call(null,maybe_loop.call(null,tpoints3),maybe_loop.call(null,itpoints3),true))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (p__26380){
var map__26381 = p__26380;
var map__26381__$1 = ((cljs.core.seq_QMARK_.call(null,map__26381))?cljs.core.apply.call(null,cljs.core.hash_map,map__26381):map__26381);
var points = cljs.core.get.call(null,map__26381__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26382 = this;
var map__26382__$1 = ((cljs.core.seq_QMARK_.call(null,map__26382))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var points__$1 = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,points__$1,cljs.core.first.call(null,points__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__26383,p){
var map__26384 = p__26383;
var map__26384__$1 = ((cljs.core.seq_QMARK_.call(null,map__26384))?cljs.core.apply.call(null,cljs.core.hash_map,map__26384):map__26384);
var points = cljs.core.get.call(null,map__26384__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26385 = this;
var map__26385__$1 = ((cljs.core.seq_QMARK_.call(null,map__26385))?cljs.core.apply.call(null,cljs.core.hash_map,map__26385):map__26385);
var points__$1 = cljs.core.get.call(null,map__26385__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p], true),points__$1))){
return true;
} else {
var vec__26386 = p;
var x = cljs.core.nth.call(null,vec__26386,(0),null);
var y = cljs.core.nth.call(null,vec__26386,(1),null);
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (vec__26386,x,y,map__26385,map__26385__$1,points__$1,map__26384,map__26384__$1,points){
return (function (p__26387,p__26388){
var vec__26389 = p__26387;
var in$ = cljs.core.nth.call(null,vec__26389,(0),null);
var vec__26390 = cljs.core.nth.call(null,vec__26389,(1),null);
var px = cljs.core.nth.call(null,vec__26390,(0),null);
var py = cljs.core.nth.call(null,vec__26390,(1),null);
var vec__26391 = p__26388;
var vx = cljs.core.nth.call(null,vec__26391,(0),null);
var vy = cljs.core.nth.call(null,vec__26391,(1),null);
if(((((vy < y)) && ((py >= y))) || (((py < y)) && ((vy >= y)))) && (((vx + (((y - vy) / (py - vy)) * (px - vx))) < x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not.call(null,in$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null)], null);
}
});})(vec__26386,x,y,map__26385,map__26385__$1,points__$1,map__26384,map__26384__$1,points))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.last.call(null,points__$1)], null),points__$1));
}
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,r){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_circle.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26337_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__26337_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26334_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26334_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26335_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26335_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26336_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26336_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.polygon.tessellate_STAR_.call(null,___$1);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClip$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClip$clip_with$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.polygon.polygon2.call(null,thi.ng.geom.polygon.clip_convex_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),s));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__26397){
var map__26398 = p__26397;
var map__26398__$1 = ((cljs.core.seq_QMARK_.call(null,map__26398))?cljs.core.apply.call(null,cljs.core.hash_map,map__26398):map__26398);
var p = cljs.core.get.call(null,map__26398__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26399 = this;
var map__26399__$1 = ((cljs.core.seq_QMARK_.call(null,map__26399))?cljs.core.apply.call(null,cljs.core.hash_map,map__26399):map__26399);
var p__$1 = cljs.core.get.call(null,map__26399__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.arc_length.call(null,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into.call(null,(function (){var or__16108__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.map.call(null,((function (___$1){
return (function (p__26400){
var vec__26401 = p__26400;
var a = cljs.core.nth.call(null,vec__26401,(0),null);
var b = cljs.core.nth.call(null,vec__26401,(1),null);
var c = cljs.core.nth.call(null,vec__26401,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,c)], null);
});})(___$1))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,___$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,thi.ng.geom.core.vertices.call(null,___$1)).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__26392){
var map__26393 = p__26392;
var map__26393__$1 = ((cljs.core.seq_QMARK_.call(null,map__26393))?cljs.core.apply.call(null,cljs.core.hash_map,map__26393):map__26393);
var points = cljs.core.get.call(null,map__26393__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26394 = this;
var map__26394__$1 = ((cljs.core.seq_QMARK_.call(null,map__26394))?cljs.core.apply.call(null,cljs.core.hash_map,map__26394):map__26394);
var points__$1 = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (0.5 * cljs.core.first.call(null,cljs.core.reduce.call(null,((function (map__26394,map__26394__$1,points__$1,map__26393,map__26393__$1,points){
return (function (p__26395,v){
var vec__26396 = p__26395;
var a = cljs.core.nth.call(null,vec__26396,(0),null);
var p = cljs.core.nth.call(null,vec__26396,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a + thi.ng.geom.core.cross.call(null,p,v)),v], null);
});})(map__26394,map__26394__$1,points__$1,map__26393,map__26393__$1,points))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,cljs.core.first.call(null,points__$1)], null),thi.ng.dstruct.core.rotate_left.call(null,(1),points__$1))));
});

//# sourceMappingURL=polygon.js.map?rel=1449311568671