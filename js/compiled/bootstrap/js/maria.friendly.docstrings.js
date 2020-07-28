goog.provide('maria.friendly.docstrings');
goog.require('cljs.core');
maria.friendly.docstrings.clojure_core = new cljs.core.PersistentArrayMap(null, 2, ["map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"docstring","docstring",879233117),"Applies the given function `f` to each element of the collection `coll`.\n\nIf given more than one collection (e.g. `(map f c1 c2)`), applies the given function `f` to the set of first items of each coll, followed by applying f to the set of second items in each coll, until any one of the colls is exhausted. (Any remaining items in other collections are ignored.)\n\nReturns a lazy sequence, regardless of the type of the input collections. See `mapv` if you want a similar function that returns a vector.\n\nThe function `f` should accept the same number of arguments as the number of collections provided.\n\nReturns a [transducer](https://clojure.org/reference/transducers) when no collection is provided."], null),"fn",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"docstring","docstring",879233117),"Defines a function that will evaluate its arguments `params*` (a vector of zero or more names) according to the expressions `exprs*`."], null)], null);

//# sourceMappingURL=maria.friendly.docstrings.js.map
