// Compiled by ClojureScript 0.0-3297 {}
goog.provide('threejs_figwheel.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.polygon');
goog.require('stats');
goog.require('thi.ng.geom.core');
goog.require('figwheel.client');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.circle');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof threejs_figwheel.core.APP_STATE !== 'undefined'){
} else {
threejs_figwheel.core.APP_STATE = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null));
}
/**
 * Install the stats into the page, and into the app state.
 */
threejs_figwheel.core.startup_stats = (function threejs_figwheel$core$startup_stats(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,threejs_figwheel.core.APP_STATE)))){
return null;
} else {
var stats = (new Stats());
stats.domElement.style.position = "absolute";

stats.domElement.style.left = "0px";

stats.domElement.style.top = "0px";

document.body.appendChild(stats.domElement);

return cljs.core.swap_BANG_.call(null,threejs_figwheel.core.APP_STATE,cljs.core.assoc,new cljs.core.Keyword(null,"stats","stats",-85643011),stats);
}
});
/**
 * Remove the stats from the page and the app state.
 */
threejs_figwheel.core.teardown_stats = (function threejs_figwheel$core$teardown_stats(){
var temp__4425__auto__ = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,threejs_figwheel.core.APP_STATE));
if(cljs.core.truth_(temp__4425__auto__)){
var stats = temp__4425__auto__;
document.body.removeChild(stats.domElement);

return cljs.core.swap_BANG_.call(null,threejs_figwheel.core.APP_STATE,cljs.core.dissoc,new cljs.core.Keyword(null,"stats","stats",-85643011));
} else {
return null;
}
});
threejs_figwheel.core.three = THREE;
/**
 * Swap into the app state the renderer, and a function to stop the current animation loop.
 */
threejs_figwheel.core.startup_app = (function threejs_figwheel$core$startup_app(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,threejs_figwheel.core.APP_STATE)))){
return null;
} else {
initMat();

var scene = (new threejs_figwheel.core.three.Scene());
var camera = (new threejs_figwheel.core.three.PerspectiveCamera((75),(window.innerWidth / window.innerHeight),0.1,(1000)));
var renderer = (new threejs_figwheel.core.three.WebGLRenderer());
var geometry = (new threejs_figwheel.core.three.BoxGeometry((1),0.1,(1)));
var material = (new threejs_figwheel.core.three.MeshBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16755387),new cljs.core.Keyword(null,"wireframe","wireframe",1009957322),true], null))));
var cube = (new threejs_figwheel.core.three.Mesh(geometry,matstroke));
var teeth = (20);
var model = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.polygon.cog.call(null,0.5,teeth,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,(1),(1),0.9], null)));
var RUNNING = cljs.core.atom.call(null,true);
renderer.xxid = new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,threejs_figwheel.core.APP_STATE,cljs.core.update,new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.inc));

renderer.setSize(window.innerWidth,window.innerHeight);

console.log("Adding: ",renderer.xxid);

document.body.appendChild(renderer.domElement);

scene.add(cube);

camera.position.z = (3);

cljs.core.println.call(null,cljs.core.first.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(model))));

var animate = ((function (scene,camera,renderer,geometry,material,cube,teeth,model,RUNNING){
return (function threejs_figwheel$core$startup_app_$_animate(){
if(cljs.core.truth_(cljs.core.deref.call(null,RUNNING))){
requestAnimationFrame(threejs_figwheel$core$startup_app_$_animate);
} else {
}

cube.rotation.x = (0.02 + cube.rotation.x);

cube.rotation.y = (0.01 + cube.rotation.y);

renderer.render(scene,camera);

var temp__4425__auto__ = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,threejs_figwheel.core.APP_STATE));
if(cljs.core.truth_(temp__4425__auto__)){
var stats = temp__4425__auto__;
return stats.update();
} else {
return null;
}
});})(scene,camera,renderer,geometry,material,cube,teeth,model,RUNNING))
;
animate.call(null);

return cljs.core.swap_BANG_.call(null,threejs_figwheel.core.APP_STATE,((function (scene,camera,renderer,geometry,material,cube,teeth,model,RUNNING){
return (function (p1__29122_SHARP_){
return cljs.core.assoc.call(null,p1__29122_SHARP_,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stopper","stopper",-304934685),((function (scene,camera,renderer,geometry,material,cube,teeth,model,RUNNING){
return (function (){
return cljs.core.reset_BANG_.call(null,RUNNING,false);
});})(scene,camera,renderer,geometry,material,cube,teeth,model,RUNNING))
);
});})(scene,camera,renderer,geometry,material,cube,teeth,model,RUNNING))
);
}
});
/**
 * Stop animation cycle, tear out renderer.
 */
threejs_figwheel.core.teardown_app = (function threejs_figwheel$core$teardown_app(){
var temp__4425__auto___29123 = new cljs.core.Keyword(null,"stopper","stopper",-304934685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,threejs_figwheel.core.APP_STATE));
if(cljs.core.truth_(temp__4425__auto___29123)){
var stopper_29124 = temp__4425__auto___29123;
stopper_29124.call(null);
} else {
}

var temp__4425__auto___29125 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,threejs_figwheel.core.APP_STATE));
if(cljs.core.truth_(temp__4425__auto___29125)){
var renderer_29126 = temp__4425__auto___29125;
console.log("Removing: ",renderer_29126.xxid);

document.body.removeChild(renderer_29126.domElement);
} else {
}

return cljs.core.swap_BANG_.call(null,threejs_figwheel.core.APP_STATE,cljs.core.dissoc,new cljs.core.Keyword(null,"stopper","stopper",-304934685),new cljs.core.Keyword(null,"renderer","renderer",336841071));
});
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
threejs_figwheel.core.teardown_app.call(null);

threejs_figwheel.core.teardown_stats.call(null);

threejs_figwheel.core.startup_app.call(null);

return threejs_figwheel.core.startup_stats.call(null);
})], null));
threejs_figwheel.core.startup_app.call(null);
threejs_figwheel.core.startup_stats.call(null);

//# sourceMappingURL=core.js.map?rel=1449337325254