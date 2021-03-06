(ns thi.ng.geom.types.utils
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.types]
   [clojure.core.reducers :as r]))

(defn bounding-rect
  [points]
  (let [[p size] (gu/bounding-rect points)]
    (if p (thi.ng.geom.types.Rect2. p size))))

(defn bounding-box
  [points]
  (let [[p size] (gu/bounding-box points)]
    (if p (thi.ng.geom.types.AABB. p size))))

(defn bounding-circle
  ([points]
     (bounding-circle (gu/centroid points) points))
  ([c r-or-points]
     (let [[c r] (gu/radial-bounds vec2 c r-or-points)]
       (thi.ng.geom.types.Circle2. c r))))

(defn bounding-sphere
  ([points]
     (bounding-sphere (gu/centroid points) points))
  ([c r-or-points]
     (let [[c r] (gu/radial-bounds vec3 c r-or-points)]
       (thi.ng.geom.types.Sphere. c r))))

(defn coll-bounds
  "Takes a seq of shape entities, calls g/bounds on each and returns
  union bounds. Does not support collections of mixed 2d/3d entities."
  [coll]
  (reduce g/union (mapv g/bounds coll)))

(defn fit-all-into-bounds
  "Takes an AABB or rect and seq of shapes, proportionally scales and
  repositions all items to fit into given bounds. Returns lazyseq of
  transformed entities. Does not support collections of mixed 2D/3D
  entities. Use rects as target bounds for 2D colls."
  [bounds coll]
  (let [b (coll-bounds coll)
        s (reduce min (g/div (:size bounds) (:size b)))
        b' (g/center (g/scale b s) (g/centroid bounds))]
    (map
     #(-> %
          (g/center (g/unmap-point b' (g/map-point b (g/centroid %))))
          (g/scale-size s))
     coll)))

(defn into-mesh
  [mesh add-face mesh-or-faces]
  (reduce
   add-face
   mesh
   (if (satisfies? g/PFaceAccess mesh-or-faces)
     (g/faces mesh-or-faces)
     mesh-or-faces)))

(defn map-mesh
  "Applies f to all faces of given mesh and adds resulting faces to
  new mesh. Thus f should return a seq of faces. Returns new mesh."
  [f mesh] (g/into (g/clear* mesh) (mapcat f (g/faces mesh))))

(defn transform-mesh
  [mesh add-face tx]
  (let [tx     (if (satisfies? g/PVectorTransform tx)
                 (fn [v] (g/transform-vector tx v))
                 tx)
        verts' (->> (g/vertices mesh)
                    (reduce
                     (fn [acc v] (assoc! acc v (tx v)))
                     (transient (hash-map)))
                    (persistent!))]
    (reduce
     (fn [mesh f] (add-face mesh (mapv verts' f)))
     (g/clear* mesh) (g/faces mesh))))
