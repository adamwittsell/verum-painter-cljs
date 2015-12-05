// Compiled by ClojureScript 0.0-3297 {}
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');

/**
* @constructor
* @param {*} vertices
* @param {*} edges
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap,__hash){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27078,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27080 = (((k27078 instanceof cljs.core.Keyword))?k27078.fqn:null);
switch (G__27080) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27078,else__16706__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27077){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27081 = cljs.core.keyword_identical_QMARK_;
var expr__27082 = k__16711__auto__;
if(cljs.core.truth_(pred__27081.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__27082))){
return (new thi.ng.geom.types.Graph(G__27077,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27081.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__27082))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__27077,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27077),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27077){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__27077,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Graph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"edges","edges",945740132,null)], null);
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__27079){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__27079),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__27079),null,cljs.core.dissoc.call(null,G__27079,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27086,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27088 = (((k27086 instanceof cljs.core.Keyword))?k27086.fqn:null);
switch (G__27088) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27086,else__16706__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27085){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27089 = cljs.core.keyword_identical_QMARK_;
var expr__27090 = k__16711__auto__;
if(cljs.core.truth_(pred__27089.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27090))){
return (new thi.ng.geom.types.Bezier2(G__27085,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27085),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27085){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__27085,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Bezier2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__27087){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27087),null,cljs.core.dissoc.call(null,G__27087,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27094,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27096 = (((k27094 instanceof cljs.core.Keyword))?k27094.fqn:null);
switch (G__27096) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27094,else__16706__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27093){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27097 = cljs.core.keyword_identical_QMARK_;
var expr__27098 = k__16711__auto__;
if(cljs.core.truth_(pred__27097.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__27098))){
return (new thi.ng.geom.types.Circle2(G__27093,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27097.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__27098))){
return (new thi.ng.geom.types.Circle2(self__.p,G__27093,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27093),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27093){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__27093,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Circle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__27095){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__27095),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__27095),null,cljs.core.dissoc.call(null,G__27095,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} rx
* @param {*} ry
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap,__hash){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27102,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27104 = (((k27102 instanceof cljs.core.Keyword))?k27102.fqn:null);
switch (G__27104) {
case "p":
return self__.p;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27102,else__16706__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27101){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27105 = cljs.core.keyword_identical_QMARK_;
var expr__27106 = k__16711__auto__;
if(cljs.core.truth_(pred__27105.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__27106))){
return (new thi.ng.geom.types.Ellipse2(G__27101,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27105.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__27106))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__27101,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27105.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__27106))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__27101,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27101),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27101){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__27101,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Ellipse2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null)], null);
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__27103){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__27103),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__27103),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__27103),null,cljs.core.dissoc.call(null,G__27103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27110,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27112 = (((k27110 instanceof cljs.core.Keyword))?k27110.fqn:null);
switch (G__27112) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27110,else__16706__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27109){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27113 = cljs.core.keyword_identical_QMARK_;
var expr__27114 = k__16711__auto__;
if(cljs.core.truth_(pred__27113.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27114))){
return (new thi.ng.geom.types.Line2(G__27109,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27109),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27109){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__27109,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Line2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__27111){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27111),null,cljs.core.dissoc.call(null,G__27111,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27118,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27120 = (((k27118 instanceof cljs.core.Keyword))?k27118.fqn:null);
switch (G__27120) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27118,else__16706__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27117){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27121 = cljs.core.keyword_identical_QMARK_;
var expr__27122 = k__16711__auto__;
if(cljs.core.truth_(pred__27121.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27122))){
return (new thi.ng.geom.types.LineStrip2(G__27117,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27117),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27117){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__27117,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.LineStrip2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__27119){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27119),null,cljs.core.dissoc.call(null,G__27119,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27126,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27128 = (((k27126 instanceof cljs.core.Keyword))?k27126.fqn:null);
switch (G__27128) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27126,else__16706__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27125){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27129 = cljs.core.keyword_identical_QMARK_;
var expr__27130 = k__16711__auto__;
if(cljs.core.truth_(pred__27129.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__27130))){
return (new thi.ng.geom.types.Mesh2(G__27125,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27129.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__27130))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__27125,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27129.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__27130))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__27125,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27129.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__27130))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__27125,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27129.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__27130))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__27125,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27129.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__27130))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__27125,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27129.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__27130))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__27125,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27125),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27125){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__27125,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Mesh2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__27127){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__27127),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__27127),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__27127),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__27127),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__27127),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__27127),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__27127),null,cljs.core.dissoc.call(null,G__27127,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} segments
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap,__hash){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27134,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27136 = (((k27134 instanceof cljs.core.Keyword))?k27134.fqn:null);
switch (G__27136) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27134,else__16706__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27133){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27137 = cljs.core.keyword_identical_QMARK_;
var expr__27138 = k__16711__auto__;
if(cljs.core.truth_(pred__27137.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__27138))){
return (new thi.ng.geom.types.Path2(G__27133,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27133),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27133){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__27133,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Path2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"segments","segments",-716899820,null)], null);
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__27135){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__27135),null,cljs.core.dissoc.call(null,G__27135,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27142,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27144 = (((k27142 instanceof cljs.core.Keyword))?k27142.fqn:null);
switch (G__27144) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27142,else__16706__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27141){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27145 = cljs.core.keyword_identical_QMARK_;
var expr__27146 = k__16711__auto__;
if(cljs.core.truth_(pred__27145.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27146))){
return (new thi.ng.geom.types.Polygon2(G__27141,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27141),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27141){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__27141,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Polygon2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__27143){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27143),null,cljs.core.dissoc.call(null,G__27143,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27150,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27152 = (((k27150 instanceof cljs.core.Keyword))?k27150.fqn:null);
switch (G__27152) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27150,else__16706__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27149){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27153 = cljs.core.keyword_identical_QMARK_;
var expr__27154 = k__16711__auto__;
if(cljs.core.truth_(pred__27153.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__27154))){
return (new thi.ng.geom.types.Rect2(G__27149,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27153.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__27154))){
return (new thi.ng.geom.types.Rect2(self__.p,G__27149,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27149),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27149){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__27149,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Rect2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__27151){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__27151),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__27151),null,cljs.core.dissoc.call(null,G__27151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27158,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27160 = (((k27158 instanceof cljs.core.Keyword))?k27158.fqn:null);
switch (G__27160) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27158,else__16706__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27157){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27161 = cljs.core.keyword_identical_QMARK_;
var expr__27162 = k__16711__auto__;
if(cljs.core.truth_(pred__27161.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27162))){
return (new thi.ng.geom.types.Triangle2(G__27157,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27157),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27157){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__27157,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Triangle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__27159){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27159),null,cljs.core.dissoc.call(null,G__27159,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27166,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27168 = (((k27166 instanceof cljs.core.Keyword))?k27166.fqn:null);
switch (G__27168) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27166,else__16706__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27165){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27169 = cljs.core.keyword_identical_QMARK_;
var expr__27170 = k__16711__auto__;
if(cljs.core.truth_(pred__27169.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__27170))){
return (new thi.ng.geom.types.AABB(G__27165,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27169.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__27170))){
return (new thi.ng.geom.types.AABB(self__.p,G__27165,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27165),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27165){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__27165,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.AABB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__27167){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__27167),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__27167),null,cljs.core.dissoc.call(null,G__27167,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27174,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27176 = (((k27174 instanceof cljs.core.Keyword))?k27174.fqn:null);
switch (G__27176) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27174,else__16706__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27173){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27177 = cljs.core.keyword_identical_QMARK_;
var expr__27178 = k__16711__auto__;
if(cljs.core.truth_(pred__27177.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27178))){
return (new thi.ng.geom.types.Cuboid(G__27173,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27173),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27173){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__27173,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Cuboid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__27175){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27175),null,cljs.core.dissoc.call(null,G__27175,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27182,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27184 = (((k27182 instanceof cljs.core.Keyword))?k27182.fqn:null);
switch (G__27184) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27182,else__16706__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27181){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27185 = cljs.core.keyword_identical_QMARK_;
var expr__27186 = k__16711__auto__;
if(cljs.core.truth_(pred__27185.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27186))){
return (new thi.ng.geom.types.Bezier3(G__27181,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27181),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27181){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__27181,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Bezier3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__27183){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27183),null,cljs.core.dissoc.call(null,G__27183,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} faces
* @param {*} fnormals
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.BasicMesh = (function (vertices,faces,fnormals,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.fnormals = fnormals;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27190,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27192 = (((k27190 instanceof cljs.core.Keyword))?k27190.fqn:null);
switch (G__27192) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "fnormals":
return self__.fnormals;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27190,else__16706__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27189){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27193 = cljs.core.keyword_identical_QMARK_;
var expr__27194 = k__16711__auto__;
if(cljs.core.truth_(pred__27193.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__27194))){
return (new thi.ng.geom.types.BasicMesh(G__27189,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27193.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__27194))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__27189,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27193.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__27194))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__27189,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27193.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__27194))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__27189,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27189),null));
}
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27189){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,G__27189,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.BasicMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals,attribs){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__27191){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__27191),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__27191),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__27191),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__27191),null,cljs.core.dissoc.call(null,G__27191,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27198,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27200 = (((k27198 instanceof cljs.core.Keyword))?k27198.fqn:null);
switch (G__27200) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27198,else__16706__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27197){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27201 = cljs.core.keyword_identical_QMARK_;
var expr__27202 = k__16711__auto__;
if(cljs.core.truth_(pred__27201.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__27202))){
return (new thi.ng.geom.types.GMesh(G__27197,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27201.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__27202))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__27197,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27201.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__27202))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__27197,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27201.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__27202))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__27197,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27201.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__27202))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__27197,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27201.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__27202))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__27197,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27201.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__27202))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__27197,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27197),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27197){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__27197,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.GMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__27199){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__27199),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__27199),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__27199),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__27199),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__27199),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__27199),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__27199),null,cljs.core.dissoc.call(null,G__27199,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27206,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27208 = (((k27206 instanceof cljs.core.Keyword))?k27206.fqn:null);
switch (G__27208) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27206,else__16706__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27205){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27209 = cljs.core.keyword_identical_QMARK_;
var expr__27210 = k__16711__auto__;
if(cljs.core.truth_(pred__27209.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27210))){
return (new thi.ng.geom.types.Line3(G__27205,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27205),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27205){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__27205,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Line3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__27207){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27207),null,cljs.core.dissoc.call(null,G__27207,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27214,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27216 = (((k27214 instanceof cljs.core.Keyword))?k27214.fqn:null);
switch (G__27216) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27214,else__16706__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27213){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27217 = cljs.core.keyword_identical_QMARK_;
var expr__27218 = k__16711__auto__;
if(cljs.core.truth_(pred__27217.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27218))){
return (new thi.ng.geom.types.LineStrip3(G__27213,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27213),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27213){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__27213,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.LineStrip3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__27215){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27215),null,cljs.core.dissoc.call(null,G__27215,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Mesh3 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27222,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27224 = (((k27222 instanceof cljs.core.Keyword))?k27222.fqn:null);
switch (G__27224) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27222,else__16706__auto__);

}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Mesh3{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27221){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27225 = cljs.core.keyword_identical_QMARK_;
var expr__27226 = k__16711__auto__;
if(cljs.core.truth_(pred__27225.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__27226))){
return (new thi.ng.geom.types.Mesh3(G__27221,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27225.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__27226))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,G__27221,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27225.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__27226))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,G__27221,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27225.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__27226))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,G__27221,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27225.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__27226))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__27221,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27225.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__27226))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__27221,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27225.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__27226))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__27221,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27221),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27221){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__27221,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Mesh3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh3.cljs$lang$type = true;

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.__GT_Mesh3 = (function thi$ng$geom$types$__GT_Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh3 = (function thi$ng$geom$types$map__GT_Mesh3(G__27223){
return (new thi.ng.geom.types.Mesh3(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__27223),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__27223),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__27223),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__27223),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__27223),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__27223),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__27223),null,cljs.core.dissoc.call(null,G__27223,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} n
* @param {*} w
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap,__hash){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27230,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27232 = (((k27230 instanceof cljs.core.Keyword))?k27230.fqn:null);
switch (G__27232) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27230,else__16706__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27229){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27233 = cljs.core.keyword_identical_QMARK_;
var expr__27234 = k__16711__auto__;
if(cljs.core.truth_(pred__27233.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__27234))){
return (new thi.ng.geom.types.Plane(G__27229,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27233.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__27234))){
return (new thi.ng.geom.types.Plane(self__.n,G__27229,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27229),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27229){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__27229,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Plane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__27231){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__27231),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27231),null,cljs.core.dissoc.call(null,G__27231,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27238,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27240 = (((k27238 instanceof cljs.core.Keyword))?k27238.fqn:null);
switch (G__27240) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27238,else__16706__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27237){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27241 = cljs.core.keyword_identical_QMARK_;
var expr__27242 = k__16711__auto__;
if(cljs.core.truth_(pred__27241.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27242))){
return (new thi.ng.geom.types.Quad3(G__27237,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27237),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27237){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__27237,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Quad3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__27239){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27239),null,cljs.core.dissoc.call(null,G__27239,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27246,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27248 = (((k27246 instanceof cljs.core.Keyword))?k27246.fqn:null);
switch (G__27248) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27246,else__16706__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27245){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27249 = cljs.core.keyword_identical_QMARK_;
var expr__27250 = k__16711__auto__;
if(cljs.core.truth_(pred__27249.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__27250))){
return (new thi.ng.geom.types.Sphere(G__27245,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27249.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__27250))){
return (new thi.ng.geom.types.Sphere(self__.p,G__27245,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27245),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27245){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__27245,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Sphere.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__27247){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__27247),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__27247),null,cljs.core.dissoc.call(null,G__27247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27254,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27256 = (((k27254 instanceof cljs.core.Keyword))?k27254.fqn:null);
switch (G__27256) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27254,else__16706__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27253){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27257 = cljs.core.keyword_identical_QMARK_;
var expr__27258 = k__16711__auto__;
if(cljs.core.truth_(pred__27257.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27258))){
return (new thi.ng.geom.types.Tetrahedron(G__27253,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27253),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27253){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__27253,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Tetrahedron.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__27255){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27255),null,cljs.core.dissoc.call(null,G__27255,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16703__auto__,k__16704__auto__){
var self__ = this;
var this__16703__auto____$1 = this;
return cljs.core._lookup.call(null,this__16703__auto____$1,k__16704__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16705__auto__,k27262,else__16706__auto__){
var self__ = this;
var this__16705__auto____$1 = this;
var G__27264 = (((k27262 instanceof cljs.core.Keyword))?k27262.fqn:null);
switch (G__27264) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27262,else__16706__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16717__auto__,writer__16718__auto__,opts__16719__auto__){
var self__ = this;
var this__16717__auto____$1 = this;
var pr_pair__16720__auto__ = ((function (this__16717__auto____$1){
return (function (keyval__16721__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,cljs.core.pr_writer,""," ","",opts__16719__auto__,keyval__16721__auto__);
});})(this__16717__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16718__auto__,pr_pair__16720__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__16719__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16701__auto__){
var self__ = this;
var this__16701__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16697__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16707__auto__){
var self__ = this;
var this__16707__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16698__auto__){
var self__ = this;
var this__16698__auto____$1 = this;
var h__16524__auto__ = self__.__hash;
if(!((h__16524__auto__ == null))){
return h__16524__auto__;
} else {
var h__16524__auto____$1 = cljs.core.hash_imap.call(null,this__16698__auto____$1);
self__.__hash = h__16524__auto____$1;

return h__16524__auto____$1;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16699__auto__,other__16700__auto__){
var self__ = this;
var this__16699__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16096__auto__ = other__16700__auto__;
if(cljs.core.truth_(and__16096__auto__)){
var and__16096__auto____$1 = (this__16699__auto____$1.constructor === other__16700__auto__.constructor);
if(and__16096__auto____$1){
return cljs.core.equiv_map.call(null,this__16699__auto____$1,other__16700__auto__);
} else {
return and__16096__auto____$1;
}
} else {
return and__16096__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16712__auto__,k__16713__auto__){
var self__ = this;
var this__16712__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__16713__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16712__auto____$1),self__.__meta),k__16713__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16713__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16710__auto__,k__16711__auto__,G__27261){
var self__ = this;
var this__16710__auto____$1 = this;
var pred__27265 = cljs.core.keyword_identical_QMARK_;
var expr__27266 = k__16711__auto__;
if(cljs.core.truth_(pred__27265.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__27266))){
return (new thi.ng.geom.types.Triangle3(G__27261,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16711__auto__,G__27261),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16715__auto__){
var self__ = this;
var this__16715__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16702__auto__,G__27261){
var self__ = this;
var this__16702__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__27261,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16708__auto__,entry__16709__auto__){
var self__ = this;
var this__16708__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16709__auto__)){
return cljs.core._assoc.call(null,this__16708__auto____$1,cljs.core._nth.call(null,entry__16709__auto__,(0)),cljs.core._nth.call(null,entry__16709__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16708__auto____$1,entry__16709__auto__);
}
});

thi.ng.geom.types.Triangle3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__16737__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__16737__auto__,writer__16738__auto__){
return cljs.core._write.call(null,writer__16738__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__27263){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__27263),null,cljs.core.dissoc.call(null,G__27263,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map?rel=1449311570954