(ns thi.ng.geom.basicmesh
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.core.matrix :refer [M44]]
   [thi.ng.geom.types :as types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.dstruct.core :as d]
   [thi.ng.math.core :as m :refer [*eps*]]
   [thi.ng.xerror.core :as err]
   [clojure.core.reducers :as r]))

(declare basic-mesh)

(defn add-face
  [mesh f]
  (thi.ng.geom.types.BasicMesh.
   (into (:vertices mesh) f)
   (conj (:faces mesh) f)
   (:fnormals mesh)
   (:attribs mesh)))

(defn basic-mesh
  "Builds a new 3d mesh data structure and (optionally) populates it with
  the given items (a seq of existing meshes and/or faces). Faces are defined
  as vectors of their vertices."
  [] (thi.ng.geom.types.BasicMesh. #{} #{} {} {}))

(extend-type thi.ng.geom.types.BasicMesh
g/PArea
(area
 [_] (gu/total-area-3d (:faces _)))


g/PBounds
(bounds [_] (tu/bounding-box (seq (:vertices _))))
(width [_]  (gu/axis-range 0 (:vertices _)))
(height [_] (gu/axis-range 1 (:vertices _)))
(depth [_]  (gu/axis-range 2 (:vertices _)))
g/PBoundingSphere
(bounding-sphere
 [_] (tu/bounding-sphere (g/centroid _) (:vertices _)))
g/PCenter
(center
 ([_]   (g/center _ (vec3)))
 ([_ o] (g/transform _ (g/translate M44 (g/- o (g/centroid _))))))
(centroid
 [_]    (gu/centroid (seq (:vertices _))))
g/PFlip
(flip [_] (tu/map-mesh (fn [f] [(vec (rseq f))]) _))
g/PVertexAccess
(vertices
 [_] (:vertices _))
g/PEdgeAccess
(edges
 [_]
 (into
  #{}
  (comp
   (mapcat #(d/successive-nth 2 (conj % (first %))))
   (map set))
  (:faces _)))
g/PFaceAccess
(faces
 [_] (:faces _))
(add-face
 [_ f] (add-face _ f))
(vertex-faces
 [_ v] (filter
        #(>= #?(:clj (.indexOf ^clojure.lang.PersistentVector % v) :cljs (d/index-of % v)) 0)
        (:faces _)))
(remove-face
 [_ f]
 (err/unsupported!))
g/PNormalAccess
(face-normals
 [_ force?] (if (seq (:fnormals _)) (:fnormals _) (if force? (:fnormals (g/compute-face-normals _)))))
(face-normal
 [_ f] ((:fnormals _) f))
(vertex-normals
 [_ force?] (if force? (err/unsupported!)))
(vertex-normal
 [_ v] (err/unsupported!))
(compute-face-normals
 [_]
 (loop [fnorms (transient {}), faces (:faces _)]
   (if faces
     (let [f (first faces)]
       (recur (assoc! fnorms f (gu/ortho-normal f)) (next faces)))
     (assoc _ :fnormals (persistent! fnorms)))))
(compute-vertex-normals
 [_] (err/unsupported!))
g/PGeomContainer
(into
 [_ faces] (tu/into-mesh _ add-face faces))
g/PClear
(clear*
 [_] (basic-mesh))
g/PMeshConvert
(as-mesh
 ([_] _)
 ([_ opts] (g/into (:mesh opts) (:faces _))))
g/PTessellate
(tessellate
 ([_]      (g/tessellate _ {}))
 ([_ opts] (tu/map-mesh (or (:fn opts) gu/tessellate-with-first) _)))
g/PScale
(scale
 ([_ s]
    (tu/transform-mesh _ add-face #(g/* % s)))
 ([_ sx sy sz]
    (tu/transform-mesh _ add-face #(g/* % sx sy sz))))
(scale-size
 [_ s]
 (let [c (g/centroid _)]
   (tu/transform-mesh _ add-face #(g/madd (g/- % c) s c))))
g/PTranslate
(translate
 [_ t] (tu/transform-mesh _ add-face #(g/+ % t)))
g/PTransform
(transform
 [_ m]
 (tu/transform-mesh _ add-face m))
g/PVolume
(volume
 [_] (gu/total-volume (:faces _)))
)
