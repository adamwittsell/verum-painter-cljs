// Compiled by ClojureScript 0.0-3297 {}
goog.provide('thi.ng.geom.triangle');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.triangle.triangle2 = (function thi$ng$geom$triangle$triangle2(){
var G__26619 = arguments.length;
switch (G__26619) {
case 1:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(t))], null)));
} else {
if(cljs.core.sequential_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,cljs.core.first.call(null,t)),thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,t,(1))),thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,t,(2)))], null)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,t);

}
}
});

thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,a),thi.ng.geom.core.vector.vec2.call(null,b),thi.ng.geom.core.vector.vec2.call(null,c)], null)));
});

thi.ng.geom.triangle.triangle2.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.triangle3 = (function thi$ng$geom$triangle$triangle3(){
var G__26622 = arguments.length;
switch (G__26622) {
case 1:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(t))], null)));
} else {
if(cljs.core.sequential_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,cljs.core.first.call(null,t)),thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,t,(1))),thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,t,(2)))], null)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,t);

}
}
});

thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,c)], null)));
});

thi.ng.geom.triangle.triangle3.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.equilateral2 = (function thi$ng$geom$triangle$equilateral2(){
var G__26625 = arguments.length;
switch (G__26625) {
case 1:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1 = (function (l){
if(cljs.core.map_QMARK_.call(null,l)){
return thi.ng.geom.triangle.equilateral2.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(l));
} else {
if(cljs.core.sequential_QMARK_.call(null,l)){
return thi.ng.geom.triangle.equilateral2.call(null,cljs.core.first.call(null,l),cljs.core.nth.call(null,l,(1)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,l);

}
}
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = thi.ng.geom.core.vector.vec2.call(null,a);
var b__$1 = thi.ng.geom.core.vector.vec2.call(null,b);
var dir = thi.ng.geom.core._.call(null,a__$1,b__$1);
var n = thi.ng.geom.core.normal.call(null,dir);
var c = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.normalize.call(null,n,((thi.ng.geom.core.mag.call(null,dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.geom.core.mix.call(null,a__$1,b__$1));
return thi.ng.geom.triangle.triangle2.call(null,a__$1,b__$1,c);
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return thi.ng.geom.triangle.equilateral2.call(null,thi.ng.geom.core.vector.vec2.call(null,x1,y1),thi.ng.geom.core.vector.vec2.call(null,x2,y2));
});

thi.ng.geom.triangle.equilateral2.cljs$lang$maxFixedArity = 4;
thi.ng.geom.triangle.equilateral3 = (function thi$ng$geom$triangle$equilateral3(a,b,n){
var a__$1 = thi.ng.geom.core.vector.vec3.call(null,a);
var b__$1 = thi.ng.geom.core.vector.vec3.call(null,b);
var dir = thi.ng.geom.core._.call(null,b__$1,a__$1);
var n__$1 = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,dir,n));
var c = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.normalize.call(null,n__$1,((thi.ng.geom.core.mag.call(null,dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.geom.core.mix.call(null,a__$1,b__$1));
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c], null)));
});
thi.ng.geom.triangle.other_point_in_tri = (function thi$ng$geom$triangle$other_point_in_tri(p__26627,a,b){
var vec__26629 = p__26627;
var ta = cljs.core.nth.call(null,vec__26629,(0),null);
var tb = cljs.core.nth.call(null,vec__26629,(1),null);
var tc = cljs.core.nth.call(null,vec__26629,(2),null);
if(cljs.core._EQ_.call(null,a,ta)){
if(cljs.core._EQ_.call(null,b,tb)){
return tc;
} else {
return tb;
}
} else {
if(cljs.core._EQ_.call(null,a,tb)){
if(cljs.core._EQ_.call(null,b,ta)){
return tc;
} else {
return ta;
}
} else {
if(cljs.core._EQ_.call(null,b,ta)){
return tb;
} else {
return ta;
}
}
}
});
thi.ng.geom.triangle.altitude = (function thi$ng$geom$triangle$altitude(){
var G__26631 = arguments.length;
switch (G__26631) {
case 2:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2 = (function (p__26632,id){
var vec__26633 = p__26632;
var a = cljs.core.nth.call(null,vec__26633,(0),null);
var b = cljs.core.nth.call(null,vec__26633,(1),null);
var c = cljs.core.nth.call(null,vec__26633,(2),null);
var G__26634 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__26634) {
case "a":
return thi.ng.geom.triangle.altitude.call(null,b,c,a);

break;
case "b":
return thi.ng.geom.triangle.altitude.call(null,a,c,b);

break;
case "c":
return thi.ng.geom.triangle.altitude.call(null,a,b,c);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(id)].join('')));

}
});

thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,c,a,b)),c], null);
});

thi.ng.geom.triangle.altitude.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.norm_altitude = (function thi$ng$geom$triangle$norm_altitude(){
var G__26638 = arguments.length;
switch (G__26638) {
case 2:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2 = (function (points,id){
var vec__26639 = thi.ng.geom.triangle.altitude.call(null,points,id);
var a = cljs.core.nth.call(null,vec__26639,(0),null);
var b = cljs.core.nth.call(null,vec__26639,(1),null);
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,b,a));
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,c,thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,c,a,b))));
});

thi.ng.geom.triangle.norm_altitude.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.centroid = (function thi$ng$geom$triangle$centroid(){
var G__26642 = arguments.length;
switch (G__26642) {
case 3:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._PLUS_.call(null,a,b,c),thi.ng.math.core.THIRD);
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1 = (function (p__26643){
var vec__26644 = p__26643;
var a = cljs.core.nth.call(null,vec__26644,(0),null);
var b = cljs.core.nth.call(null,vec__26644,(1),null);
var c = cljs.core.nth.call(null,vec__26644,(2),null);
return thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._PLUS_.call(null,a,b,c),thi.ng.math.core.THIRD);
});

thi.ng.geom.triangle.centroid.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.check_edge = (function thi$ng$geom$triangle$check_edge(splits,classifier,e,p,q,add_p_QMARK_,add_q_QMARK_){
var pc = classifier.call(null,e,p);
var qc = classifier.call(null,e,q);
var splits__$1 = (cljs.core.truth_(add_p_QMARK_)?cljs.core.conj.call(null,splits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,pc], null)):splits);
if(((pc * qc) < (0))){
var ip = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.intersect_line.call(null,e,p,q));
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null));
}
} else {
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return splits__$1;
}
}
});
thi.ng.geom.triangle.slice_with_STAR_ = (function thi$ng$geom$triangle$slice_with_STAR_(){
var G__26647 = arguments.length;
switch (G__26647) {
case 2:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (t,e){
return thi.ng.geom.triangle.slice_with_STAR_.call(null,t,e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (p__26648,e,classifier){
var vec__26649 = p__26648;
var a = cljs.core.nth.call(null,vec__26649,(0),null);
var b = cljs.core.nth.call(null,vec__26649,(1),null);
var c = cljs.core.nth.call(null,vec__26649,(2),null);
return thi.ng.geom.triangle.slice_with_STAR_.call(null,a,b,c,e,classifier);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,e,classifier){
var verts = thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,cljs.core.PersistentVector.EMPTY,classifier,e,a,b,true,true),classifier,e,b,c,false,true),classifier,e,c,a,false,false);
var cmap = ((function (verts){
return (function (ids){
return cljs.core.reduce.call(null,((function (verts){
return (function (m,p__26650){
var vec__26651 = p__26650;
var a__$1 = cljs.core.nth.call(null,vec__26651,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26651,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26651,(2),null);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(1))], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(0)),b__$1.call(null,(0)),c__$1.call(null,(0))], null));
});})(verts))
,new cljs.core.PersistentArrayMap(null, 2, [(-1),cljs.core.PersistentVector.EMPTY,(1),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,((function (verts){
return (function (p__26652){
var vec__26653 = p__26652;
var a__$1 = cljs.core.nth.call(null,vec__26653,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26653,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26653,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts.call(null,a__$1),verts.call(null,b__$1),verts.call(null,c__$1)], null);
});})(verts))
,ids));
});})(verts))
;
var pred__26654 = cljs.core._EQ_;
var expr__26655 = cljs.core.count.call(null,verts);
if(cljs.core.truth_(pred__26654.call(null,(4),expr__26655))){
var triverts = cljs.core.PersistentHashSet.fromArray([a,c,b], true);
var d = (function (){var i = (3);
while(true){
var temp__4423__auto__ = verts.call(null,i);
if(cljs.core.truth_(temp__4423__auto__)){
var vc = temp__4423__auto__;
if(cljs.core.truth_((function (){var and__16096__auto__ = (vc.call(null,(1)) === (0));
if(and__16096__auto__){
return triverts.call(null,vc.call(null,(0)));
} else {
return and__16096__auto__;
}
})())){
return i;
} else {
var G__26658 = (i - (1));
i = G__26658;
continue;
}
} else {
return null;
}
break;
}
})();
return cmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range.call(null,(d + (1)),(4)),thi.ng.math.core.wrap_range.call(null,(d + (2)),(4)),d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range.call(null,(d - (1)),(4)),d,thi.ng.math.core.wrap_range.call(null,(d + (2)),(4))], null)], null));
} else {
if(cljs.core.truth_(pred__26654.call(null,(5),expr__26655))){
if((cljs.core.get_in.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)) === (0))){
if((cljs.core.get_in.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)) === (0))){
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1)], null)], null));
} else {
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4)], null)], null));
}
} else {
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(2)], null)], null));
}
} else {
return null;
}
}
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$lang$maxFixedArity = 5;
thi.ng.geom.triangle.circumcircle_raw = (function thi$ng$geom$triangle$circumcircle_raw(p__26659,p__26660,p__26661){
var vec__26665 = p__26659;
var ax = cljs.core.nth.call(null,vec__26665,(0),null);
var ay = cljs.core.nth.call(null,vec__26665,(1),null);
var a = vec__26665;
var vec__26666 = p__26660;
var bx = cljs.core.nth.call(null,vec__26666,(0),null);
var by = cljs.core.nth.call(null,vec__26666,(1),null);
var b = vec__26666;
var vec__26667 = p__26661;
var cx = cljs.core.nth.call(null,vec__26667,(0),null);
var cy = cljs.core.nth.call(null,vec__26667,(1),null);
var c = vec__26667;
var eq_ab_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,ay,by,thi.ng.math.core._STAR_eps_STAR_);
var eq_bc_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,by,cy,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_((function (){var and__16096__auto__ = eq_ab_QMARK_;
if(cljs.core.truth_(and__16096__auto__)){
return eq_bc_QMARK_;
} else {
return and__16096__auto__;
}
})())){
return null;
} else {
var o = (cljs.core.truth_(eq_ab_QMARK_)?(function (){var cx__$1 = ((ax + bx) * 0.5);
return thi.ng.geom.core.vector.vec2.call(null,cx__$1,(((cx__$1 - ((bx + cx__$1) * 0.5)) * (- ((cx__$1 - bx) / (cy - by)))) + ((by + cy) * 0.5)));
})():(cljs.core.truth_(eq_bc_QMARK_)?(function (){var cx__$1 = ((bx + cx) * 0.5);
return thi.ng.geom.core.vector.vec2.call(null,cx__$1,(((cx__$1 - ((ax + bx) * 0.5)) * (- ((bx - ax) / (by - ay)))) + ((ay + by) * 0.5)));
})():(function (){var m1 = (- ((bx - ax) / (by - ay)));
var m2 = (- ((cx - bx) / (cy - by)));
var mx1 = ((ax + bx) * 0.5);
var my1 = ((ay + by) * 0.5);
var cx__$1 = (((((m1 * mx1) - (m2 * ((bx + cx) * 0.5))) + ((by + cy) * 0.5)) + (- my1)) / (m1 - m2));
return thi.ng.geom.core.vector.vec2.call(null,cx__$1,(((cx__$1 - mx1) * m1) + my1));
})()
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,thi.ng.geom.core.dist.call(null,o,b)], null);
}
});
thi.ng.geom.triangle.circumcircle = (function thi$ng$geom$triangle$circumcircle(){
var G__26669 = arguments.length;
switch (G__26669) {
case 1:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1 = (function (t){
return thi.ng.geom.triangle.circumcircle.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(t));
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var vec__26670 = thi.ng.geom.triangle.circumcircle_raw.call(null,a,b,c);
var o = cljs.core.nth.call(null,vec__26670,(0),null);
var r = cljs.core.nth.call(null,vec__26670,(1),null);
return (new thi.ng.geom.types.Circle2(o,r));
});

thi.ng.geom.triangle.circumcircle.cljs$lang$maxFixedArity = 3;
thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSlice$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,classifier);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26679_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__26679_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26674_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__26674_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec2.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec2.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.reverse.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__26680,t){
var map__26681 = p__26680;
var map__26681__$1 = ((cljs.core.seq_QMARK_.call(null,map__26681))?cljs.core.apply.call(null,cljs.core.hash_map,map__26681):map__26681);
var p = cljs.core.get.call(null,map__26681__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26682 = this;
var map__26682__$1 = ((cljs.core.seq_QMARK_.call(null,map__26682))?cljs.core.apply.call(null,cljs.core.hash_map,map__26682):map__26682);
var p__$1 = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__26683){
var map__26684 = p__26683;
var map__26684__$1 = ((cljs.core.seq_QMARK_.call(null,map__26684))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684):map__26684);
var p = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26685 = this;
var map__26685__$1 = ((cljs.core.seq_QMARK_.call(null,map__26685))?cljs.core.apply.call(null,cljs.core.hash_map,map__26685):map__26685);
var p__$1 = cljs.core.get.call(null,map__26685__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.from_barycentric.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (p__26686,udist,include_last_QMARK_){
var map__26687 = p__26686;
var map__26687__$1 = ((cljs.core.seq_QMARK_.call(null,map__26687))?cljs.core.apply.call(null,cljs.core.hash_map,map__26687):map__26687);
var p = cljs.core.get.call(null,map__26687__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26688 = this;
var map__26688__$1 = ((cljs.core.seq_QMARK_.call(null,map__26688))?cljs.core.apply.call(null,cljs.core.hash_map,map__26688):map__26688);
var p__$1 = cljs.core.get.call(null,map__26688__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.call(null,((function (___$1){
return (function (p1__26673_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__26673_SHARP_));
});})(___$1))
,thi.ng.geom.core.utils.tessellate_with_point.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,((function (___$1){
return (function (p1__26672_SHARP_){
return thi.ng.math.core.signum.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_coeff,p,p1__26672_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
});})(___$1))
,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (p__26689){
var map__26690 = p__26689;
var map__26690__$1 = ((cljs.core.seq_QMARK_.call(null,map__26690))?cljs.core.apply.call(null,cljs.core.hash_map,map__26690):map__26690);
var vec__26691 = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26691,(0),null);
var b = cljs.core.nth.call(null,vec__26691,(1),null);
var c = cljs.core.nth.call(null,vec__26691,(2),null);
var map__26692 = this;
var map__26692__$1 = ((cljs.core.seq_QMARK_.call(null,map__26692))?cljs.core.apply.call(null,cljs.core.hash_map,map__26692):map__26692);
var vec__26693 = cljs.core.get.call(null,map__26692__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26693,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26693,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26693,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.point_in_triangle2_QMARK_,p,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,p__26694){
var map__26695 = p__26694;
var map__26695__$1 = ((cljs.core.seq_QMARK_.call(null,map__26695))?cljs.core.apply.call(null,cljs.core.hash_map,map__26695):map__26695);
var vec__26696 = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26696,(0),null);
var q = cljs.core.nth.call(null,vec__26696,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,p);
if(cljs.core.truth_(and__16096__auto__)){
return thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,q);
} else {
return and__16096__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301)], null);
} else {
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_.call(null,p,q,thi.ng.geom.core.edges.call(null,___$1));
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__26697 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.call(null,vec__26697,(0),null);
var dir = cljs.core.nth.call(null,vec__26697,(1),null);
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_circle.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26678_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__26678_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26675_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26675_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26676_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26676_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26677_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26677_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__26698){
var map__26699 = p__26698;
var map__26699__$1 = ((cljs.core.seq_QMARK_.call(null,map__26699))?cljs.core.apply.call(null,cljs.core.hash_map,map__26699):map__26699);
var vec__26700 = cljs.core.get.call(null,map__26699__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26700,(0),null);
var b = cljs.core.nth.call(null,vec__26700,(1),null);
var c = cljs.core.nth.call(null,vec__26700,(2),null);
var map__26701 = this;
var map__26701__$1 = ((cljs.core.seq_QMARK_.call(null,map__26701))?cljs.core.apply.call(null,cljs.core.hash_map,map__26701):map__26701);
var vec__26702 = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26702,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26702,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26702,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__16108__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__26703,v){
var map__26704 = p__26703;
var map__26704__$1 = ((cljs.core.seq_QMARK_.call(null,map__26704))?cljs.core.apply.call(null,cljs.core.hash_map,map__26704):map__26704);
var vec__26705 = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26705,(0),null);
var b = cljs.core.nth.call(null,vec__26705,(1),null);
var c = cljs.core.nth.call(null,vec__26705,(2),null);
var map__26706 = this;
var map__26706__$1 = ((cljs.core.seq_QMARK_.call(null,map__26706))?cljs.core.apply.call(null,cljs.core.hash_map,map__26706):map__26706);
var vec__26707 = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26707,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26707,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26707,(2),null);
var pred__26708 = cljs.core._EQ_;
var expr__26709 = v;
if(cljs.core.truth_(pred__26708.call(null,a__$1,expr__26709))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__26708.call(null,b__$1,expr__26709))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__26708.call(null,c__$1,expr__26709))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area2,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSlice$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,classifier);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26721_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__26721_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26712_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__26712_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26713_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__26713_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26714_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__26714_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26715_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__26715_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26716_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__26716_SHARP_,axis,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec3.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.reverse.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__26722,t){
var map__26723 = p__26722;
var map__26723__$1 = ((cljs.core.seq_QMARK_.call(null,map__26723))?cljs.core.apply.call(null,cljs.core.hash_map,map__26723):map__26723);
var p = cljs.core.get.call(null,map__26723__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26724 = this;
var map__26724__$1 = ((cljs.core.seq_QMARK_.call(null,map__26724))?cljs.core.apply.call(null,cljs.core.hash_map,map__26724):map__26724);
var p__$1 = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__26725){
var map__26726 = p__26725;
var map__26726__$1 = ((cljs.core.seq_QMARK_.call(null,map__26726))?cljs.core.apply.call(null,cljs.core.hash_map,map__26726):map__26726);
var p = cljs.core.get.call(null,map__26726__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26727 = this;
var map__26727__$1 = ((cljs.core.seq_QMARK_.call(null,map__26727))?cljs.core.apply.call(null,cljs.core.hash_map,map__26727):map__26727);
var p__$1 = cljs.core.get.call(null,map__26727__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.from_barycentric.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (p__26728,udist,include_last_QMARK_){
var map__26729 = p__26728;
var map__26729__$1 = ((cljs.core.seq_QMARK_.call(null,map__26729))?cljs.core.apply.call(null,cljs.core.hash_map,map__26729):map__26729);
var p = cljs.core.get.call(null,map__26729__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26730 = this;
var map__26730__$1 = ((cljs.core.seq_QMARK_.call(null,map__26730))?cljs.core.apply.call(null,cljs.core.hash_map,map__26730):map__26730);
var p__$1 = cljs.core.get.call(null,map__26730__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.call(null,((function (___$1){
return (function (p1__26711_SHARP_){
return (new thi.ng.geom.types.Triangle3(p1__26711_SHARP_));
});})(___$1))
,thi.ng.geom.core.utils.tessellate_with_point.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (p__26731){
var map__26732 = p__26731;
var map__26732__$1 = ((cljs.core.seq_QMARK_.call(null,map__26732))?cljs.core.apply.call(null,cljs.core.hash_map,map__26732):map__26732);
var vec__26733 = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26733,(0),null);
var b = cljs.core.nth.call(null,vec__26733,(1),null);
var c = cljs.core.nth.call(null,vec__26733,(2),null);
var map__26734 = this;
var map__26734__$1 = ((cljs.core.seq_QMARK_.call(null,map__26734))?cljs.core.apply.call(null,cljs.core.hash_map,map__26734):map__26734);
var vec__26735 = cljs.core.get.call(null,map__26734__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26735,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26735,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26735,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVolume$signed_volume$arity$1 = (function (p__26736){
var map__26737 = p__26736;
var map__26737__$1 = ((cljs.core.seq_QMARK_.call(null,map__26737))?cljs.core.apply.call(null,cljs.core.hash_map,map__26737):map__26737);
var vec__26738 = cljs.core.get.call(null,map__26737__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26738,(0),null);
var b = cljs.core.nth.call(null,vec__26738,(1),null);
var c = cljs.core.nth.call(null,vec__26738,(2),null);
var map__26739 = this;
var map__26739__$1 = ((cljs.core.seq_QMARK_.call(null,map__26739))?cljs.core.apply.call(null,cljs.core.hash_map,map__26739):map__26739);
var vec__26740 = cljs.core.get.call(null,map__26739__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26740,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26740,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26740,(2),null);
return (thi.ng.geom.core.dot.call(null,a__$1,thi.ng.geom.core.cross.call(null,b__$1,c__$1)) / 6.0);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.point_in_triangle3_QMARK_,p,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (p__26741,ray){
var map__26742 = p__26741;
var map__26742__$1 = ((cljs.core.seq_QMARK_.call(null,map__26742))?cljs.core.apply.call(null,cljs.core.hash_map,map__26742):map__26742);
var vec__26743 = cljs.core.get.call(null,map__26742__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26743,(0),null);
var b = cljs.core.nth.call(null,vec__26743,(1),null);
var c = cljs.core.nth.call(null,vec__26743,(2),null);
var map__26744 = this;
var map__26744__$1 = ((cljs.core.seq_QMARK_.call(null,map__26744))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744):map__26744);
var vec__26745 = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26745,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26745,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26745,(2),null);
var vec__26746 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.call(null,vec__26746,(0),null);
var dir = cljs.core.nth.call(null,vec__26746,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (p__26747,p,dir){
var map__26748 = p__26747;
var map__26748__$1 = ((cljs.core.seq_QMARK_.call(null,map__26748))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var vec__26749 = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26749,(0),null);
var b = cljs.core.nth.call(null,vec__26749,(1),null);
var c = cljs.core.nth.call(null,vec__26749,(2),null);
var map__26750 = this;
var map__26750__$1 = ((cljs.core.seq_QMARK_.call(null,map__26750))?cljs.core.apply.call(null,cljs.core.hash_map,map__26750):map__26750);
var vec__26751 = cljs.core.get.call(null,map__26750__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26751,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26751,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26751,(2),null);
return thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26720_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__26720_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26717_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26717_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26718_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26718_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26719_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__26719_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__26752){
var map__26753 = p__26752;
var map__26753__$1 = ((cljs.core.seq_QMARK_.call(null,map__26753))?cljs.core.apply.call(null,cljs.core.hash_map,map__26753):map__26753);
var vec__26754 = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26754,(0),null);
var b = cljs.core.nth.call(null,vec__26754,(1),null);
var c = cljs.core.nth.call(null,vec__26754,(2),null);
var map__26755 = this;
var map__26755__$1 = ((cljs.core.seq_QMARK_.call(null,map__26755))?cljs.core.apply.call(null,cljs.core.hash_map,map__26755):map__26755);
var vec__26756 = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26756,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26756,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26756,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__16108__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__26757,v){
var map__26758 = p__26757;
var map__26758__$1 = ((cljs.core.seq_QMARK_.call(null,map__26758))?cljs.core.apply.call(null,cljs.core.hash_map,map__26758):map__26758);
var vec__26759 = cljs.core.get.call(null,map__26758__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26759,(0),null);
var b = cljs.core.nth.call(null,vec__26759,(1),null);
var c = cljs.core.nth.call(null,vec__26759,(2),null);
var map__26760 = this;
var map__26760__$1 = ((cljs.core.seq_QMARK_.call(null,map__26760))?cljs.core.apply.call(null,cljs.core.hash_map,map__26760):map__26760);
var vec__26761 = cljs.core.get.call(null,map__26760__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26761,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26761,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26761,(2),null);
var pred__26762 = cljs.core._EQ_;
var expr__26763 = v;
if(cljs.core.truth_(pred__26762.call(null,a__$1,expr__26763))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__26762.call(null,b__$1,expr__26763))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__26762.call(null,c__$1,expr__26763))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

//# sourceMappingURL=triangle.js.map?rel=1449311569453