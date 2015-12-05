// Compiled by ClojureScript 0.0-3297 {}
goog.provide('thi.ng.geom.core.intersect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
thi.ng.geom.core.intersect.sq = (function thi$ng$geom$core$intersect$sq(x){
return (x * x);
});
thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_circle_circle_QMARK_(){
var G__26405 = arguments.length;
switch (G__26405) {
case 2:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26406,p__26407){
var map__26408 = p__26406;
var map__26408__$1 = ((cljs.core.seq_QMARK_.call(null,map__26408))?cljs.core.apply.call(null,cljs.core.hash_map,map__26408):map__26408);
var p = cljs.core.get.call(null,map__26408__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__26408__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__26409 = p__26407;
var map__26409__$1 = ((cljs.core.seq_QMARK_.call(null,map__26409))?cljs.core.apply.call(null,cljs.core.hash_map,map__26409):map__26409);
var q = cljs.core.get.call(null,map__26409__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__26409__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.call(null,p,r1,q,r2);
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.geom.core._.call(null,q,p);
var d = thi.ng.geom.core.mag.call(null,delta);
if(((d <= (r1 + r2))) && ((d >= thi.ng.math.core.abs.call(null,(r1 - r2))))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.geom.core.madd.call(null,delta,(a * invd),p);
var h = Math.sqrt(((r1 * r1) - (a * a)));
var perp = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normal.call(null,delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,perp),thi.ng.geom.core._.call(null,p__$1,perp)], null);
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_rect_QMARK_(){
var G__26412 = arguments.length;
switch (G__26412) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26413,p__26414){
var map__26415 = p__26413;
var map__26415__$1 = ((cljs.core.seq_QMARK_.call(null,map__26415))?cljs.core.apply.call(null,cljs.core.hash_map,map__26415):map__26415);
var vec__26416 = cljs.core.get.call(null,map__26415__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__26416,(0),null);
var py = cljs.core.nth.call(null,vec__26416,(1),null);
var vec__26417 = cljs.core.get.call(null,map__26415__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__26417,(0),null);
var h = cljs.core.nth.call(null,vec__26417,(1),null);
var map__26418 = p__26414;
var map__26418__$1 = ((cljs.core.seq_QMARK_.call(null,map__26418))?cljs.core.apply.call(null,cljs.core.hash_map,map__26418):map__26418);
var vec__26419 = cljs.core.get.call(null,map__26418__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.call(null,vec__26419,(0),null);
var qy = cljs.core.nth.call(null,vec__26419,(1),null);
var vec__26420 = cljs.core.get.call(null,map__26418__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.call(null,vec__26420,(0),null);
var qh = cljs.core.nth.call(null,vec__26420,(1),null);
return !(((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__26421,p__26422,p__26423,p__26424){
var vec__26425 = p__26421;
var px1 = cljs.core.nth.call(null,vec__26425,(0),null);
var py1 = cljs.core.nth.call(null,vec__26425,(1),null);
var vec__26426 = p__26422;
var qx1 = cljs.core.nth.call(null,vec__26426,(0),null);
var qy1 = cljs.core.nth.call(null,vec__26426,(1),null);
var vec__26427 = p__26423;
var px2 = cljs.core.nth.call(null,vec__26427,(0),null);
var py2 = cljs.core.nth.call(null,vec__26427,(1),null);
var vec__26428 = p__26424;
var qx2 = cljs.core.nth.call(null,vec__26428,(0),null);
var qy2 = cljs.core.nth.call(null,vec__26428,(1),null);
return !(((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_circle_QMARK_(){
var G__26431 = arguments.length;
switch (G__26431) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26432,p__26433){
var map__26434 = p__26432;
var map__26434__$1 = ((cljs.core.seq_QMARK_.call(null,map__26434))?cljs.core.apply.call(null,cljs.core.hash_map,map__26434):map__26434);
var p = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__26435 = p__26433;
var map__26435__$1 = ((cljs.core.seq_QMARK_.call(null,map__26435))?cljs.core.apply.call(null,cljs.core.hash_map,map__26435):map__26435);
var s = cljs.core.get.call(null,map__26435__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__26435__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__26436,p__26437,p__26438,r){
var vec__26439 = p__26436;
var px = cljs.core.nth.call(null,vec__26439,(0),null);
var py = cljs.core.nth.call(null,vec__26439,(1),null);
var vec__26440 = p__26437;
var qx = cljs.core.nth.call(null,vec__26440,(0),null);
var qy = cljs.core.nth.call(null,vec__26440,(1),null);
var vec__26441 = p__26438;
var cx = cljs.core.nth.call(null,vec__26441,(0),null);
var cy = cljs.core.nth.call(null,vec__26441,(1),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq.call(null,(cy - qy)):0.0)));
return (ds__$1 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_aabb_QMARK_(){
var G__26444 = arguments.length;
switch (G__26444) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26445,p__26446){
var map__26447 = p__26445;
var map__26447__$1 = ((cljs.core.seq_QMARK_.call(null,map__26447))?cljs.core.apply.call(null,cljs.core.hash_map,map__26447):map__26447);
var pa = cljs.core.get.call(null,map__26447__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__26447__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__26448 = p__26446;
var map__26448__$1 = ((cljs.core.seq_QMARK_.call(null,map__26448))?cljs.core.apply.call(null,cljs.core.hash_map,map__26448):map__26448);
var pb = cljs.core.get.call(null,map__26448__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__26448__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.call(null,pa,pb,thi.ng.geom.core._PLUS_.call(null,pa,sa),thi.ng.geom.core._PLUS_.call(null,pb,sb));
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((pa.call(null,(0)) <= qb.call(null,(0)))) && ((pb.call(null,(0)) <= qa.call(null,(0))))){
if(((pa.call(null,(1)) <= qb.call(null,(1)))) && ((pb.call(null,(1)) <= qa.call(null,(1))))){
return ((pa.call(null,(2)) <= qb.call(null,(2)))) && ((pb.call(null,(2)) <= qa.call(null,(2))));
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_sphere_QMARK_(){
var G__26451 = arguments.length;
switch (G__26451) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26452,p__26453){
var map__26454 = p__26452;
var map__26454__$1 = ((cljs.core.seq_QMARK_.call(null,map__26454))?cljs.core.apply.call(null,cljs.core.hash_map,map__26454):map__26454);
var p = cljs.core.get.call(null,map__26454__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__26454__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__26455 = p__26453;
var map__26455__$1 = ((cljs.core.seq_QMARK_.call(null,map__26455))?cljs.core.apply.call(null,cljs.core.hash_map,map__26455):map__26455);
var s = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__26456,p__26457,p__26458,r){
var vec__26459 = p__26456;
var px = cljs.core.nth.call(null,vec__26459,(0),null);
var py = cljs.core.nth.call(null,vec__26459,(1),null);
var pz = cljs.core.nth.call(null,vec__26459,(2),null);
var vec__26460 = p__26457;
var qx = cljs.core.nth.call(null,vec__26460,(0),null);
var qy = cljs.core.nth.call(null,vec__26460,(1),null);
var qz = cljs.core.nth.call(null,vec__26460,(2),null);
var vec__26461 = p__26458;
var cx = cljs.core.nth.call(null,vec__26461,(0),null);
var cy = cljs.core.nth.call(null,vec__26461,(1),null);
var cz = cljs.core.nth.call(null,vec__26461,(2),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq.call(null,(cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.core.intersect.sq.call(null,(cz - pz)):(((cz > qz))?thi.ng.geom.core.intersect.sq.call(null,(cz - qz)):0.0)));
return (ds__$2 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
/**
 * Takes 2 vectors defining an AABB (min-p & size) and a seq of plane
 * parameters (each element [normal w]). The plane normals must be
 * pointing *inwards*. Returns :inside, :intersect or :outside
 */
thi.ng.geom.core.intersect.intersect_aabb_frustum_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_frustum_QMARK_(p__26463,size,planes){
var vec__26469 = p__26463;
var px = cljs.core.nth.call(null,vec__26469,(0),null);
var py = cljs.core.nth.call(null,vec__26469,(1),null);
var pz = cljs.core.nth.call(null,vec__26469,(2),null);
var p = vec__26469;
var vec__26470 = thi.ng.geom.core._PLUS_.call(null,p,size);
var qx = cljs.core.nth.call(null,vec__26470,(0),null);
var qy = cljs.core.nth.call(null,vec__26470,(1),null);
var qz = cljs.core.nth.call(null,vec__26470,(2),null);
return cljs.core.reduce.call(null,((function (vec__26470,qx,qy,qz,vec__26469,px,py,pz,p){
return (function (res,p__26471){
var vec__26472 = p__26471;
var vec__26473 = cljs.core.nth.call(null,vec__26472,(0),null);
var nx = cljs.core.nth.call(null,vec__26473,(0),null);
var ny = cljs.core.nth.call(null,vec__26473,(1),null);
var nz = cljs.core.nth.call(null,vec__26473,(2),null);
var w = cljs.core.nth.call(null,vec__26472,(1),null);
var vx = (((nx > (0)))?px:qx);
var vy = (((ny > (0)))?py:qy);
var vz = (((nz > (0)))?pz:qz);
if((((((nx * vx) + (ny * vy)) + (nz * vz)) + w) > (0))){
return cljs.core.reduced.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
} else {
var vx__$1 = (((nx > (0)))?qx:px);
var vy__$1 = (((ny > (0)))?qy:py);
var vz__$1 = (((nz > (0)))?qz:pz);
if((((((nx * vx__$1) + (ny * vy__$1)) + (nz * vz__$1)) + w) > (0))){
return new cljs.core.Keyword(null,"intersect","intersect",-2039792392);
} else {
return res;
}
}
});})(vec__26470,qx,qy,qz,vec__26469,px,py,pz,p))
,new cljs.core.Keyword(null,"inside","inside",1972503011),planes);
});
thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_sphere_sphere_QMARK_(){
var G__26475 = arguments.length;
switch (G__26475) {
case 2:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26476,p__26477){
var map__26478 = p__26476;
var map__26478__$1 = ((cljs.core.seq_QMARK_.call(null,map__26478))?cljs.core.apply.call(null,cljs.core.hash_map,map__26478):map__26478);
var p1 = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__26479 = p__26477;
var map__26479__$1 = ((cljs.core.seq_QMARK_.call(null,map__26479))?cljs.core.apply.call(null,cljs.core.hash_map,map__26479):map__26479);
var p2 = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.call(null,p1,r1,p2,r2);
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared.call(null,p1,p2) <= ((r1 + r2) * (r1 + r2)));
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_sphere_QMARK_(){
var G__26482 = arguments.length;
switch (G__26482) {
case 2:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26483,p__26484){
var map__26485 = p__26483;
var map__26485__$1 = ((cljs.core.seq_QMARK_.call(null,map__26485))?cljs.core.apply.call(null,cljs.core.hash_map,map__26485):map__26485);
var rp = cljs.core.get.call(null,map__26485__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.call(null,map__26485__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__26486 = p__26484;
var map__26486__$1 = ((cljs.core.seq_QMARK_.call(null,map__26486))?cljs.core.apply.call(null,cljs.core.hash_map,map__26486):map__26486);
var p = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.call(null,rp,dir,p,r);
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.geom.core._.call(null,p,rp);
var ds = thi.ng.geom.core.mag_squared.call(null,q);
var v = (- thi.ng.geom.core.dot.call(null,q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if(!(((a < (0))) && ((b < (0))))){
if(((a > (0))) && ((b > (0)))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.geom.core._.call(null,b,a);
var v = thi.ng.geom.core._.call(null,c,a);
var n = thi.ng.geom.core.cross.call(null,u,v);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.geom.core._.call(null,p,a);
var a_SINGLEQUOTE_ = (- thi.ng.geom.core.dot.call(null,n,w0));
var b_SINGLEQUOTE_ = thi.ng.geom.core.dot.call(null,n,d);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.geom.core.madd.call(null,d,r,p);
var vec__26489 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,i,u,v);
var u__$1 = cljs.core.nth.call(null,vec__26489,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__26489,(1),null);
var w = cljs.core.nth.call(null,vec__26489,(2),null);
if(cljs.core.truth_((function (){var and__16096__auto__ = (u__$1 >= 0.0);
if(and__16096__auto__){
var and__16096__auto____$1 = (w >= 0.0);
if(and__16096__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.core.intersect.triaabb_axis_test = (function thi$ng$geom$core$intersect$triaabb_axis_test(pa1,pb1,pa2,pb2,a,b,fa,fb,sa,sb){
var q = ((a * pa1) + (b * pb1));
var r = ((a * pa2) + (b * pb2));
var vec__26491 = (((q < r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
var min = cljs.core.nth.call(null,vec__26491,(0),null);
var max = cljs.core.nth.call(null,vec__26491,(1),null);
var rad = ((fa * sa) + (fb * sb));
if((min <= rad)){
return (max >= (- rad));
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e0 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e0(p__26492,p__26493,p__26494,p__26495,p__26496){
var vec__26503 = p__26492;
var ax = cljs.core.nth.call(null,vec__26503,(0),null);
var ay = cljs.core.nth.call(null,vec__26503,(1),null);
var az = cljs.core.nth.call(null,vec__26503,(2),null);
var a = vec__26503;
var vec__26504 = p__26493;
var bx = cljs.core.nth.call(null,vec__26504,(0),null);
var by = cljs.core.nth.call(null,vec__26504,(1),null);
var bz = cljs.core.nth.call(null,vec__26504,(2),null);
var b = vec__26504;
var vec__26505 = p__26494;
var cx = cljs.core.nth.call(null,vec__26505,(0),null);
var cy = cljs.core.nth.call(null,vec__26505,(1),null);
var cz = cljs.core.nth.call(null,vec__26505,(2),null);
var vec__26506 = p__26495;
var ex = cljs.core.nth.call(null,vec__26506,(0),null);
var ey = cljs.core.nth.call(null,vec__26506,(1),null);
var ez = cljs.core.nth.call(null,vec__26506,(2),null);
var e = vec__26506;
var vec__26507 = p__26496;
var sx = cljs.core.nth.call(null,vec__26507,(0),null);
var sy = cljs.core.nth.call(null,vec__26507,(1),null);
var sz = cljs.core.nth.call(null,vec__26507,(2),null);
var vec__26508 = thi.ng.geom.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__26508,(0),null);
var fy = cljs.core.nth.call(null,vec__26508,(1),null);
var fz = cljs.core.nth.call(null,vec__26508,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e1 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e1(p__26509,p__26510,p__26511,p__26512,p__26513){
var vec__26520 = p__26509;
var ax = cljs.core.nth.call(null,vec__26520,(0),null);
var ay = cljs.core.nth.call(null,vec__26520,(1),null);
var az = cljs.core.nth.call(null,vec__26520,(2),null);
var vec__26521 = p__26510;
var bx = cljs.core.nth.call(null,vec__26521,(0),null);
var by = cljs.core.nth.call(null,vec__26521,(1),null);
var bz = cljs.core.nth.call(null,vec__26521,(2),null);
var b = vec__26521;
var vec__26522 = p__26511;
var cx = cljs.core.nth.call(null,vec__26522,(0),null);
var cy = cljs.core.nth.call(null,vec__26522,(1),null);
var cz = cljs.core.nth.call(null,vec__26522,(2),null);
var c = vec__26522;
var vec__26523 = p__26512;
var ex = cljs.core.nth.call(null,vec__26523,(0),null);
var ey = cljs.core.nth.call(null,vec__26523,(1),null);
var ez = cljs.core.nth.call(null,vec__26523,(2),null);
var e = vec__26523;
var vec__26524 = p__26513;
var sx = cljs.core.nth.call(null,vec__26524,(0),null);
var sy = cljs.core.nth.call(null,vec__26524,(1),null);
var sz = cljs.core.nth.call(null,vec__26524,(2),null);
var vec__26525 = thi.ng.geom.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__26525,(0),null);
var fy = cljs.core.nth.call(null,vec__26525,(1),null);
var fz = cljs.core.nth.call(null,vec__26525,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,ey,fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,ay,bx,by,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e2 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e2(p__26526,p__26527,p__26528,p__26529,p__26530){
var vec__26537 = p__26526;
var ax = cljs.core.nth.call(null,vec__26537,(0),null);
var ay = cljs.core.nth.call(null,vec__26537,(1),null);
var az = cljs.core.nth.call(null,vec__26537,(2),null);
var a = vec__26537;
var vec__26538 = p__26527;
var bx = cljs.core.nth.call(null,vec__26538,(0),null);
var by = cljs.core.nth.call(null,vec__26538,(1),null);
var bz = cljs.core.nth.call(null,vec__26538,(2),null);
var vec__26539 = p__26528;
var cx = cljs.core.nth.call(null,vec__26539,(0),null);
var cy = cljs.core.nth.call(null,vec__26539,(1),null);
var cz = cljs.core.nth.call(null,vec__26539,(2),null);
var c = vec__26539;
var vec__26540 = p__26529;
var ex = cljs.core.nth.call(null,vec__26540,(0),null);
var ey = cljs.core.nth.call(null,vec__26540,(1),null);
var ez = cljs.core.nth.call(null,vec__26540,(2),null);
var e = vec__26540;
var vec__26541 = p__26530;
var sx = cljs.core.nth.call(null,vec__26541,(0),null);
var sy = cljs.core.nth.call(null,vec__26541,(1),null);
var sz = cljs.core.nth.call(null,vec__26541,(2),null);
var vec__26542 = thi.ng.geom.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__26542,(0),null);
var fy = cljs.core.nth.call(null,vec__26542,(1),null);
var fz = cljs.core.nth.call(null,vec__26542,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ay,az,by,bz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,az,bx,bz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_minmax = (function thi$ng$geom$core$intersect$triaabb_edge_minmax(a,b,c,s){
if(((function (){var x__16427__auto__ = (function (){var x__16427__auto__ = a;
var y__16428__auto__ = b;
return ((x__16427__auto__ < y__16428__auto__) ? x__16427__auto__ : y__16428__auto__);
})();
var y__16428__auto__ = c;
return ((x__16427__auto__ < y__16428__auto__) ? x__16427__auto__ : y__16428__auto__);
})() < s)){
return ((function (){var x__16420__auto__ = (function (){var x__16420__auto__ = a;
var y__16421__auto__ = b;
return ((x__16420__auto__ > y__16421__auto__) ? x__16420__auto__ : y__16421__auto__);
})();
var y__16421__auto__ = c;
return ((x__16420__auto__ > y__16421__auto__) ? x__16420__auto__ : y__16421__auto__);
})() >= (- s));
} else {
return null;
}
});
thi.ng.geom.core.intersect.intersect_triangle3_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_triangle3_aabb_QMARK_(a,b,c,p,s){
var vec__26547 = thi.ng.geom.core._STAR_.call(null,s,0.5);
var sx = cljs.core.nth.call(null,vec__26547,(0),null);
var sy = cljs.core.nth.call(null,vec__26547,(1),null);
var sz = cljs.core.nth.call(null,vec__26547,(2),null);
var s__$1 = vec__26547;
var p__$1 = thi.ng.geom.core._PLUS_.call(null,p,s__$1);
var vec__26548 = thi.ng.geom.core._.call(null,a,p__$1);
var ax = cljs.core.nth.call(null,vec__26548,(0),null);
var ay = cljs.core.nth.call(null,vec__26548,(1),null);
var az = cljs.core.nth.call(null,vec__26548,(2),null);
var a__$1 = vec__26548;
var vec__26549 = thi.ng.geom.core._.call(null,b,p__$1);
var bx = cljs.core.nth.call(null,vec__26549,(0),null);
var by = cljs.core.nth.call(null,vec__26549,(1),null);
var bz = cljs.core.nth.call(null,vec__26549,(2),null);
var b__$1 = vec__26549;
var vec__26550 = thi.ng.geom.core._.call(null,c,p__$1);
var cx = cljs.core.nth.call(null,vec__26550,(0),null);
var cy = cljs.core.nth.call(null,vec__26550,(1),null);
var cz = cljs.core.nth.call(null,vec__26550,(2),null);
var c__$1 = vec__26550;
var e0 = thi.ng.geom.core._.call(null,b__$1,a__$1);
var e1 = thi.ng.geom.core._.call(null,c__$1,b__$1);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e0.call(null,a__$1,b__$1,c__$1,e0,s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e1.call(null,a__$1,b__$1,c__$1,e1,s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e2.call(null,a__$1,b__$1,c__$1,thi.ng.geom.core._.call(null,a__$1,c__$1),s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax.call(null,ax,bx,cx,sx))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax.call(null,ay,by,cy,sy))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax.call(null,az,bz,cz,sz))){
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.call(null,a__$1,thi.ng.geom.core.cross.call(null,e0,e1),s__$1);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_line2_QMARK_(p__26551,p__26552,p__26553,p__26554){
var vec__26559 = p__26551;
var px1 = cljs.core.nth.call(null,vec__26559,(0),null);
var py1 = cljs.core.nth.call(null,vec__26559,(1),null);
var p = vec__26559;
var vec__26560 = p__26552;
var qx1 = cljs.core.nth.call(null,vec__26560,(0),null);
var qy1 = cljs.core.nth.call(null,vec__26560,(1),null);
var q = vec__26560;
var vec__26561 = p__26553;
var px2 = cljs.core.nth.call(null,vec__26561,(0),null);
var py2 = cljs.core.nth.call(null,vec__26561,(1),null);
var lp = vec__26561;
var vec__26562 = p__26554;
var qx2 = cljs.core.nth.call(null,vec__26562,(0),null);
var qy2 = cljs.core.nth.call(null,vec__26562,(1),null);
var lq = vec__26562;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if(((na === (0))) && ((nb === (0)))){
var ip = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lp,p,q);
var iq = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lq,p,q);
if(cljs.core.truth_((function (){var or__16108__auto__ = thi.ng.math.core.delta_EQ_.call(null,ip,lp);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.geom.core.mix.call(null,p,q,ua);
if(((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first.call(null,cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__26566){
var vec__26567 = p__26566;
var p = cljs.core.nth.call(null,vec__26567,(0),null);
var q = cljs.core.nth.call(null,vec__26567,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_.call(null,rp,rq,p,q);
})),cljs.core.filter.call(null,(function (p1__26563_SHARP_){
var and__16096__auto__ = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p1__26563_SHARP_);
if(cljs.core.truth_(and__16096__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__26563_SHARP_));
} else {
return and__16096__auto__;
}
}))),cljs.core.completing.call(null,(function (closest,isec){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(isec);
var d = thi.ng.geom.core.dist_squared.call(null,rp,p);
if((d < closest.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_.call(null,rp,thi.ng.geom.core.madd.call(null,rd,1.0E29,rp),edges);
});
thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__16108__auto__ = thi.ng.math.core.delta_EQ_.call(null,aw,bw,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,an,bn,thi.ng.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.geom.core.dot.call(null,an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.geom.core.madd.call(null,an,u,thi.ng.geom.core._STAR_.call(null,bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.core.utils.ortho_normal.call(null,an,bn)], null);
}
});
thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.geom.core.dot.call(null,n,dir);
var dn = (thi.ng.geom.core.dot.call(null,n,rp) + w);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,dp,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.geom.core.madd.call(null,dir,du,rp);
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
/**
 * Takes a point & normal defining a plane and 2 vectors defining an
 * AABB (min-p & size). Returns true if plane intersects box.
 */
thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_aabb_QMARK_(){
var G__26569 = arguments.length;
switch (G__26569) {
case 4:
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,n,q,s){
var s2 = thi.ng.geom.core._STAR_.call(null,s,0.5);
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.call(null,thi.ng.geom.core._.call(null,p,thi.ng.geom.core._PLUS_.call(null,q,s2)),n,s2);
});

thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (p__26570,p__26571,p__26572){
var vec__26573 = p__26570;
var px = cljs.core.nth.call(null,vec__26573,(0),null);
var py = cljs.core.nth.call(null,vec__26573,(1),null);
var pz = cljs.core.nth.call(null,vec__26573,(2),null);
var vec__26574 = p__26571;
var nx = cljs.core.nth.call(null,vec__26574,(0),null);
var ny = cljs.core.nth.call(null,vec__26574,(1),null);
var nz = cljs.core.nth.call(null,vec__26574,(2),null);
var n = vec__26574;
var vec__26575 = p__26572;
var sx = cljs.core.nth.call(null,vec__26575,(0),null);
var sy = cljs.core.nth.call(null,vec__26575,(1),null);
var sz = cljs.core.nth.call(null,vec__26575,(2),null);
var vec__26576 = (((nx > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sx) - px),(sx - px)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - px),((- sx) - px)], null));
var vx1 = cljs.core.nth.call(null,vec__26576,(0),null);
var vx2 = cljs.core.nth.call(null,vec__26576,(1),null);
var vec__26577 = (((ny > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sy) - py),(sy - py)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sy - py),((- sy) - py)], null));
var vy1 = cljs.core.nth.call(null,vec__26577,(0),null);
var vy2 = cljs.core.nth.call(null,vec__26577,(1),null);
var vec__26578 = (((nz > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sz) - pz),(sz - pz)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sz - pz),((- sz) - pz)], null));
var vz1 = cljs.core.nth.call(null,vec__26578,(0),null);
var vz2 = cljs.core.nth.call(null,vec__26578,(1),null);
if(((((nx * vx1) + (ny * vy1)) + (nz * vz1)) <= 0.0)){
return ((((nx * vx2) + (ny * vy2)) + (nz * vz2)) >= 0.0);
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
return (thi.ng.math.core.abs.call(null,(thi.ng.geom.core.dot.call(null,n,p) + w)) <= r);
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.core.intersect.subdot = (function thi$ng$geom$core$intersect$subdot(a,b,c){
var d = thi.ng.geom.core.subm.call(null,a,b,c);
return ((d.call(null,(0)) + d.call(null,(1))) + d.call(null,(2)));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 * Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.core.intersect.face_a = (function thi$ng$geom$core$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.call(null,f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((((aff.call(null,(0)) > (0)))?(1):(0)) | (((aff.call(null,(1)) > (0)))?(2):(0))) | (((aff.call(null,(2)) > (0)))?(4):(0))) | (((aff.call(null,(3)) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 * Returns true if all dot products are positive.
 */
thi.ng.geom.core.intersect.face_b1_QMARK_ = (function thi$ng$geom$core$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_.call(null,(function (p1__26580_SHARP_){
return (thi.ng.geom.core.dot.call(null,p1__26580_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.core.intersect.face_b2_QMARK_ = (function thi$ng$geom$core$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_.call(null,(function (p1__26581_SHARP_){
return (thi.ng.geom.core.intersect.subdot.call(null,p1__26581_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 * separating plane between the faces shared by that edge.
 */
thi.ng.geom.core.intersect.edge_a = (function thi$ng$geom$core$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = ((function (xa,xb){
return (function (a,b,i,j){
var cp = ((ea.call(null,i) * eb.call(null,j)) - (ea.call(null,j) * eb.call(null,i)));
return (((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0)))) || (((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))));
});})(xa,xb))
;
return cljs.core.not.call(null,(function (){var or__16108__auto__ = cljs.core.not_EQ_.call(null,(15),(ma | mb));
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = edge.call(null,(1),(2),(1),(0));
if(cljs.core.truth_(or__16108__auto____$1)){
return or__16108__auto____$1;
} else {
var or__16108__auto____$2 = edge.call(null,(1),(4),(2),(0));
if(cljs.core.truth_(or__16108__auto____$2)){
return or__16108__auto____$2;
} else {
var or__16108__auto____$3 = edge.call(null,(1),(8),(3),(0));
if(cljs.core.truth_(or__16108__auto____$3)){
return or__16108__auto____$3;
} else {
var or__16108__auto____$4 = edge.call(null,(2),(4),(2),(1));
if(cljs.core.truth_(or__16108__auto____$4)){
return or__16108__auto____$4;
} else {
var or__16108__auto____$5 = edge.call(null,(2),(8),(3),(1));
if(cljs.core.truth_(or__16108__auto____$5)){
return or__16108__auto____$5;
} else {
return edge.call(null,(4),(8),(3),(2));
}
}
}
}
}
}
})());
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 * points and an edge id. Looks up edge for given id and if not yet
 * present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.core.intersect.get_edge = (function thi$ng$geom$core$intersect$get_edge(edges,epoints,id){
var e = edges.call(null,id);
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = epoints.call(null,id);
var e__$1 = thi.ng.geom.core._.call(null,ep.call(null,(0)),ep.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 * of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 * and a seq of specs, each encoding a specific check (either calls to
 * face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.core.intersect.check_faces_a = (function thi$ng$geom$core$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__26588 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__26588,(0),null);
var a = cljs.core.nth.call(null,vec__26588,(1),null);
var b = cljs.core.nth.call(null,vec__26588,(2),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f*","f*",-689873734),f))){
var vec__26589 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__26589,(0),null);
var ea = cljs.core.nth.call(null,vec__26589,(1),null);
var vec__26590 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__26590,(0),null);
var eb = cljs.core.nth.call(null,vec__26590,(1),null);
var n = thi.ng.geom.core.cross.call(null,ea,eb);
var vec__26591 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__26589,edges__$1,ea,vec__26590,edges__$2,eb,n,vec__26588,f,a,b){
return (function (p1__26582_SHARP_){
return thi.ng.geom.core.dot.call(null,p1__26582_SHARP_,n);
});})(masks,affine,edges,s,vec__26589,edges__$1,ea,vec__26590,edges__$2,eb,n,vec__26588,f,a,b))
,deltas):thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__26589,edges__$1,ea,vec__26590,edges__$2,eb,n,vec__26588,f,a,b){
return (function (p1__26583_SHARP_){
return thi.ng.geom.core.intersect.subdot.call(null,p1__26583_SHARP_,p,n);
});})(masks,affine,edges,s,vec__26589,edges__$1,ea,vec__26590,edges__$2,eb,n,vec__26588,f,a,b))
,verts));
var m = cljs.core.nth.call(null,vec__26591,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__26591,(1),null);
if((m < (15))){
var G__26592 = cljs.core.conj.call(null,masks,m);
var G__26593 = cljs.core.conj.call(null,affine,a__$1);
var G__26594 = edges__$2;
var G__26595 = cljs.core.next.call(null,s);
masks = G__26592;
affine = G__26593;
edges = G__26594;
s = G__26595;
continue;
} else {
return null;
}
} else {
if(cljs.core.not.call(null,thi.ng.geom.core.intersect.edge_a.call(null,masks.call(null,a),masks.call(null,b),affine.call(null,a),affine.call(null,b)))){
var G__26596 = masks;
var G__26597 = affine;
var G__26598 = edges;
var G__26599 = cljs.core.next.call(null,s);
masks = G__26596;
affine = G__26597;
edges = G__26598;
s = G__26599;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 * Returns true if tetras do intersect.
 */
thi.ng.geom.core.intersect.check_faces_b = (function thi$ng$geom$core$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__26603 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__26603,(0),null);
var a = cljs.core.nth.call(null,vec__26603,(1),null);
var b = cljs.core.nth.call(null,vec__26603,(2),null);
var vec__26604 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__26604,(0),null);
var ea = cljs.core.nth.call(null,vec__26604,(1),null);
var vec__26605 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__26605,(0),null);
var eb = cljs.core.nth.call(null,vec__26605,(1),null);
if(cljs.core.not.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_b1_QMARK_.call(null,deltas,thi.ng.geom.core.cross.call(null,ea,eb)):thi.ng.geom.core.intersect.face_b2_QMARK_.call(null,verts,p,thi.ng.geom.core.cross.call(null,ea,eb))))){
var G__26606 = edges__$2;
var G__26607 = cljs.core.next.call(null,s);
edges = G__26606;
s = G__26607;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 * true if they intersect. Orientation of points is irrelevant (unlike
 * in the original algorithm this implementation is based on).
 */
thi.ng.geom.core.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$core$intersect$intersect_tetrahedra_QMARK_(p__26610,p__26611){
var vec__26614 = p__26610;
var pa = cljs.core.nth.call(null,vec__26614,(0),null);
var pb = cljs.core.nth.call(null,vec__26614,(1),null);
var pc = cljs.core.nth.call(null,vec__26614,(2),null);
var pd = cljs.core.nth.call(null,vec__26614,(3),null);
var p = vec__26614;
var vec__26615 = p__26611;
var qa = cljs.core.nth.call(null,vec__26615,(0),null);
var qb = cljs.core.nth.call(null,vec__26615,(1),null);
var qc = cljs.core.nth.call(null,vec__26615,(2),null);
var qd = cljs.core.nth.call(null,vec__26615,(3),null);
var q = vec__26615;
var masks = thi.ng.geom.core.intersect.check_faces_a.call(null,cljs.core.map.call(null,((function (vec__26614,pa,pb,pc,pd,p,vec__26615,qa,qb,qc,qd,q){
return (function (p1__26608_SHARP_){
return thi.ng.geom.core._.call(null,p1__26608_SHARP_,pa);
});})(vec__26614,pa,pb,pc,pd,p,vec__26615,qa,qb,qc,qd,q))
,q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__16108__auto__ = cljs.core.not_EQ_.call(null,(15),cljs.core.reduce.call(null,cljs.core.bit_or,masks));
if(or__16108__auto__){
return or__16108__auto__;
} else {
return thi.ng.geom.core.intersect.check_faces_b.call(null,cljs.core.map.call(null,((function (or__16108__auto__,masks,vec__26614,pa,pb,pc,pd,p,vec__26615,qa,qb,qc,qd,q){
return (function (p1__26609_SHARP_){
return thi.ng.geom.core._.call(null,p1__26609_SHARP_,qa);
});})(or__16108__auto__,masks,vec__26614,pa,pb,pc,pd,p,vec__26615,qa,qb,qc,qd,q))
,p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=intersect.js.map?rel=1449311569058