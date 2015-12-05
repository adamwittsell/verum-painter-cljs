// Compiled by ClojureScript 0.0-3297 {}
goog.provide('thi.ng.geom.circle');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.circle.circle = (function thi$ng$geom$circle$circle(){
var G__28887 = arguments.length;
switch (G__28887) {
case 0:
return thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null),1.0));
});

thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$1 = (function (r){
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null),r));
});

thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$2 = (function (p,r){
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null,p),r));
});

thi.ng.geom.circle.circle.cljs$core$IFn$_invoke$arity$3 = (function (x,y,r){
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null,x,y),r));
});

thi.ng.geom.circle.circle.cljs$lang$maxFixedArity = 3;
thi.ng.geom.circle.tangent_points = (function thi$ng$geom$circle$tangent_points(p__28889,q){
var map__28891 = p__28889;
var map__28891__$1 = ((cljs.core.seq_QMARK_.call(null,map__28891))?cljs.core.apply.call(null,cljs.core.hash_map,map__28891):map__28891);
var c = map__28891__$1;
var p = cljs.core.get.call(null,map__28891__$1,new cljs.core.Keyword(null,"p","p",151049309));
var m = thi.ng.geom.core.mix.call(null,p,q);
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.call(null,c,thi.ng.geom.circle.circle.call(null,m,thi.ng.geom.core.dist.call(null,m,p)));
});
thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),m);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.rotate.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),theta),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,p){
var ___$1 = this;
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null,p),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_polygon.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$2 = (function (_,res){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.vec.call(null,thi.ng.geom.core.vertices.call(null,___$1,res))));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1),(t * thi.ng.math.core.TWO_PI))));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.call(null,___$1,thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.vector.randvec2.call(null,thi.ng.math.core.random.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
var points = thi.ng.geom.core.vertices.call(null,___$1);
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,cljs.core.vec.call(null,points),cljs.core.first.call(null,points)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.math.core.signum.call(null,(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1) - thi.ng.geom.core.dist.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),q)),thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (_,p__28895){
var map__28896 = p__28895;
var map__28896__$1 = ((cljs.core.seq_QMARK_.call(null,map__28896))?cljs.core.apply.call(null,cljs.core.hash_map,map__28896):map__28896);
var mesh = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var res = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"res","res",-1395007879),thi.ng.geom.core._STAR_resolution_STAR_);
var depth = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var top_QMARK_ = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796),true);
var bottom_QMARK_ = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true);
var ___$1 = this;
var points = thi.ng.geom.core.vertices.call(null,___$1,res);
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points:thi.ng.geom.core.vertices.call(null,thi.ng.geom.circle.circle.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),(scale * new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1))),res));
var off = (function (){var or__16108__auto__ = offset;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var points3 = cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points);
var tpoints3 = cljs.core.mapv.call(null,((function (points,tpoints,off,points3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p1__28892_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__28892_SHARP_);
});})(points,tpoints,off,points3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,tpoints);
return thi.ng.geom.core.into.call(null,(function (){var or__16108__auto__ = mesh;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.concat.call(null,(cljs.core.truth_(bottom_QMARK_)?cljs.core.mapv.call(null,((function (points,tpoints,off,points3,tpoints3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__28897){
var vec__28898 = p__28897;
var a = cljs.core.nth.call(null,vec__28898,(0),null);
var b = cljs.core.nth.call(null,vec__28898,(1),null);
var c = cljs.core.nth.call(null,vec__28898,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,c)], null);
});})(points,tpoints,off,points3,tpoints3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.geom.core.utils.tessellate_with_point.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),points)):null),cljs.core.mapcat.call(null,((function (points,tpoints,off,points3,tpoints3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__28899,p__28900){
var vec__28901 = p__28899;
var a1 = cljs.core.nth.call(null,vec__28901,(0),null);
var b1 = cljs.core.nth.call(null,vec__28901,(1),null);
var vec__28902 = p__28900;
var a2 = cljs.core.nth.call(null,vec__28902,(0),null);
var b2 = cljs.core.nth.call(null,vec__28902,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(points,tpoints,off,points3,tpoints3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,points3,points3.call(null,(0)))),thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,tpoints3,tpoints3.call(null,(0))))),(cljs.core.truth_(top_QMARK_)?cljs.core.mapv.call(null,((function (points,tpoints,off,points3,tpoints3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__28903){
var vec__28904 = p__28903;
var a = cljs.core.nth.call(null,vec__28904,(0),null);
var b = cljs.core.nth.call(null,vec__28904,(1),null);
var c = cljs.core.nth.call(null,vec__28904,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,off,a),thi.ng.geom.core._PLUS_.call(null,off,b),thi.ng.geom.core._PLUS_.call(null,off,c)], null);
});})(points,tpoints,off,points3,tpoints3,___$1,map__28896,map__28896__$1,mesh,res,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.geom.core.utils.tessellate_with_point.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),tpoints)):null)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.edges.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
var verts = thi.ng.geom.core.vertices.call(null,___$1,res);
return thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,verts,cljs.core.first.call(null,verts)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__28905,q){
var map__28906 = p__28905;
var map__28906__$1 = ((cljs.core.seq_QMARK_.call(null,map__28906))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var p = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__28907 = this;
var map__28907__$1 = ((cljs.core.seq_QMARK_.call(null,map__28907))?cljs.core.apply.call(null,cljs.core.hash_map,map__28907):map__28907);
var p__$1 = cljs.core.get.call(null,map__28907__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r__$1 = cljs.core.get.call(null,map__28907__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (thi.ng.geom.core.dist_squared.call(null,p__$1,q) <= (r__$1 * r__$1));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Circle2)){
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.call(null,___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Rect2)){
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.call(null,s,___$1);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Circle2",s);

}
}
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),t),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),s),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1) * s)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1) * s)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (p__28911,res){
var map__28912 = p__28911;
var map__28912__$1 = ((cljs.core.seq_QMARK_.call(null,map__28912))?cljs.core.apply.call(null,cljs.core.hash_map,map__28912):map__28912);
var _ = map__28912__$1;
var p = cljs.core.get.call(null,map__28912__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__28913 = this;
var map__28913__$1 = ((cljs.core.seq_QMARK_.call(null,map__28913))?cljs.core.apply.call(null,cljs.core.hash_map,map__28913):map__28913);
var ___$1 = map__28913__$1;
var p__$1 = cljs.core.get.call(null,map__28913__$1,new cljs.core.Keyword(null,"p","p",151049309));
return cljs.core.map.call(null,((function (map__28913,map__28913__$1,___$1,p__$1,map__28912,map__28912__$1,_,p){
return (function (p1__28894_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__28894_SHARP_));
});})(map__28913,map__28913__$1,___$1,p__$1,map__28912,map__28912__$1,_,p))
,thi.ng.geom.core.utils.tessellate_with_point.call(null,p__$1,thi.ng.geom.core.vertices.call(null,___$1,res)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return (thi.ng.math.core.TWO_PI * new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (p__28914){
var map__28915 = p__28914;
var map__28915__$1 = ((cljs.core.seq_QMARK_.call(null,map__28915))?cljs.core.apply.call(null,cljs.core.hash_map,map__28915):map__28915);
var p = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__28916 = this;
var map__28916__$1 = ((cljs.core.seq_QMARK_.call(null,map__28916))?cljs.core.apply.call(null,cljs.core.hash_map,map__28916):map__28916);
var p__$1 = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r__$1 = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var d = ((2) * r__$1);
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._.call(null,p__$1,r__$1),thi.ng.geom.core.vector.vec2.call(null,d)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.vertices.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (_,res){
var ___$1 = this;
return cljs.core.mapv.call(null,((function (___$1){
return (function (p1__28893_SHARP_){
return thi.ng.geom.core.point_at.call(null,___$1,p1__28893_SHARP_);
});})(___$1))
,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,res)));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"res","res",-1395007879),thi.ng.geom.core._STAR_resolution_STAR_], null));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__28917){
var map__28918 = p__28917;
var map__28918__$1 = ((cljs.core.seq_QMARK_.call(null,map__28918))?cljs.core.apply.call(null,cljs.core.hash_map,map__28918):map__28918);
var mesh = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var res = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var ___$1 = this;
return thi.ng.geom.core.into.call(null,thi.ng.geom.basicmesh.basic_mesh.call(null),thi.ng.geom.core.utils.tessellate_with_point.call(null,thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1)),cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,thi.ng.geom.core.vertices.call(null,___$1,res))));
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__28919,q){
var map__28920 = p__28919;
var map__28920__$1 = ((cljs.core.seq_QMARK_.call(null,map__28920))?cljs.core.apply.call(null,cljs.core.hash_map,map__28920):map__28920);
var p = cljs.core.get.call(null,map__28920__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__28920__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__28921 = this;
var map__28921__$1 = ((cljs.core.seq_QMARK_.call(null,map__28921))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var p__$1 = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r__$1 = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core._PLUS__BANG_.call(null,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q,p__$1),r__$1),p__$1);
});

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Circle2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__28908){
var map__28909 = p__28908;
var map__28909__$1 = ((cljs.core.seq_QMARK_.call(null,map__28909))?cljs.core.apply.call(null,cljs.core.hash_map,map__28909):map__28909);
var r = cljs.core.get.call(null,map__28909__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__28910 = this;
var map__28910__$1 = ((cljs.core.seq_QMARK_.call(null,map__28910))?cljs.core.apply.call(null,cljs.core.hash_map,map__28910):map__28910);
var r__$1 = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (thi.ng.math.core.PI * (r__$1 * r__$1));
});

//# sourceMappingURL=circle.js.map?rel=1449311572783