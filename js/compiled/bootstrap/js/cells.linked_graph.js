goog.provide('cells.linked_graph');
goog.require('cljs.core');
goog.require('clojure.set');

/**
 * Protocol for graphs that store relationships directly on nodes.
 * @interface
 */
cells.linked_graph.ILinkedGraph = function(){};

cells.linked_graph.add_dependency_BANG_ = (function cells$linked_graph$add_dependency_BANG_(cell,dep){
if((((!((cell == null)))) && ((!((cell.cells$linked_graph$ILinkedGraph$add_dependency_BANG_$arity$2 == null)))))){
return cell.cells$linked_graph$ILinkedGraph$add_dependency_BANG_$arity$2(cell,dep);
} else {
var x__4433__auto__ = (((cell == null))?null:cell);
var m__4434__auto__ = (cells.linked_graph.add_dependency_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4434__auto__.call(null,cell,dep));
} else {
var m__4431__auto__ = (cells.linked_graph.add_dependency_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4431__auto__.call(null,cell,dep));
} else {
throw cljs.core.missing_protocol("ILinkedGraph.add-dependency!",cell);
}
}
}
});

cells.linked_graph.remove_dependency_BANG_ = (function cells$linked_graph$remove_dependency_BANG_(cell,dep){
if((((!((cell == null)))) && ((!((cell.cells$linked_graph$ILinkedGraph$remove_dependency_BANG_$arity$2 == null)))))){
return cell.cells$linked_graph$ILinkedGraph$remove_dependency_BANG_$arity$2(cell,dep);
} else {
var x__4433__auto__ = (((cell == null))?null:cell);
var m__4434__auto__ = (cells.linked_graph.remove_dependency_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4434__auto__.call(null,cell,dep));
} else {
var m__4431__auto__ = (cells.linked_graph.remove_dependency_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4431__auto__.call(null,cell,dep));
} else {
throw cljs.core.missing_protocol("ILinkedGraph.remove-dependency!",cell);
}
}
}
});

cells.linked_graph.add_dependent_BANG_ = (function cells$linked_graph$add_dependent_BANG_(cell,dep){
if((((!((cell == null)))) && ((!((cell.cells$linked_graph$ILinkedGraph$add_dependent_BANG_$arity$2 == null)))))){
return cell.cells$linked_graph$ILinkedGraph$add_dependent_BANG_$arity$2(cell,dep);
} else {
var x__4433__auto__ = (((cell == null))?null:cell);
var m__4434__auto__ = (cells.linked_graph.add_dependent_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4434__auto__.call(null,cell,dep));
} else {
var m__4431__auto__ = (cells.linked_graph.add_dependent_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4431__auto__.call(null,cell,dep));
} else {
throw cljs.core.missing_protocol("ILinkedGraph.add-dependent!",cell);
}
}
}
});

cells.linked_graph.remove_dependent_BANG_ = (function cells$linked_graph$remove_dependent_BANG_(cell,dep){
if((((!((cell == null)))) && ((!((cell.cells$linked_graph$ILinkedGraph$remove_dependent_BANG_$arity$2 == null)))))){
return cell.cells$linked_graph$ILinkedGraph$remove_dependent_BANG_$arity$2(cell,dep);
} else {
var x__4433__auto__ = (((cell == null))?null:cell);
var m__4434__auto__ = (cells.linked_graph.remove_dependent_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4434__auto__.call(null,cell,dep));
} else {
var m__4431__auto__ = (cells.linked_graph.remove_dependent_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(cell,dep) : m__4431__auto__.call(null,cell,dep));
} else {
throw cljs.core.missing_protocol("ILinkedGraph.remove-dependent!",cell);
}
}
}
});

cells.linked_graph.immediate_dependencies = (function cells$linked_graph$immediate_dependencies(cell){
if((((!((cell == null)))) && ((!((cell.cells$linked_graph$ILinkedGraph$immediate_dependencies$arity$1 == null)))))){
return cell.cells$linked_graph$ILinkedGraph$immediate_dependencies$arity$1(cell);
} else {
var x__4433__auto__ = (((cell == null))?null:cell);
var m__4434__auto__ = (cells.linked_graph.immediate_dependencies[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(cell) : m__4434__auto__.call(null,cell));
} else {
var m__4431__auto__ = (cells.linked_graph.immediate_dependencies["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(cell) : m__4431__auto__.call(null,cell));
} else {
throw cljs.core.missing_protocol("ILinkedGraph.immediate-dependencies",cell);
}
}
}
});

cells.linked_graph.immediate_dependents = (function cells$linked_graph$immediate_dependents(cell){
if((((!((cell == null)))) && ((!((cell.cells$linked_graph$ILinkedGraph$immediate_dependents$arity$1 == null)))))){
return cell.cells$linked_graph$ILinkedGraph$immediate_dependents$arity$1(cell);
} else {
var x__4433__auto__ = (((cell == null))?null:cell);
var m__4434__auto__ = (cells.linked_graph.immediate_dependents[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(cell) : m__4434__auto__.call(null,cell));
} else {
var m__4431__auto__ = (cells.linked_graph.immediate_dependents["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(cell) : m__4431__auto__.call(null,cell));
} else {
throw cljs.core.missing_protocol("ILinkedGraph.immediate-dependents",cell);
}
}
}
});

cells.linked_graph.transitive_sorted = (function cells$linked_graph$transitive_sorted(f){
return (function() {
var cells$linked_graph$transitive_sorted_$__transitive_sorted = null;
var cells$linked_graph$transitive_sorted_$__transitive_sorted__1 = (function (dep){
return cljs.core.second(cells$linked_graph$transitive_sorted_$__transitive_sorted.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([dep]),cljs.core.PersistentVector.EMPTY], null),dep));
});
var cells$linked_graph$transitive_sorted_$__transitive_sorted__2 = (function (p__67718,dep){
var vec__67719 = p__67718;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67719,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67719,(1),null);
var new$ = clojure.set.difference.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(dep) : f.call(null,dep)),seen);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cells$linked_graph$transitive_sorted_$__transitive_sorted,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,dep),new$),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__67722 = results;
if(cljs.core.not((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(dep) : seen.call(null,dep)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67722,dep);
} else {
return G__67722;
}
})(),new$)], null),new$);
});
cells$linked_graph$transitive_sorted_$__transitive_sorted = function(p__67718,dep){
switch(arguments.length){
case 1:
return cells$linked_graph$transitive_sorted_$__transitive_sorted__1.call(this,p__67718);
case 2:
return cells$linked_graph$transitive_sorted_$__transitive_sorted__2.call(this,p__67718,dep);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cells$linked_graph$transitive_sorted_$__transitive_sorted.cljs$core$IFn$_invoke$arity$1 = cells$linked_graph$transitive_sorted_$__transitive_sorted__1;
cells$linked_graph$transitive_sorted_$__transitive_sorted.cljs$core$IFn$_invoke$arity$2 = cells$linked_graph$transitive_sorted_$__transitive_sorted__2;
return cells$linked_graph$transitive_sorted_$__transitive_sorted;
})()
});
cells.linked_graph.dependencies = cells.linked_graph.transitive_sorted(cells.linked_graph.immediate_dependencies);
cells.linked_graph.dependents = cells.linked_graph.transitive_sorted(cells.linked_graph.immediate_dependents);
cells.linked_graph.depend_BANG_ = (function cells$linked_graph$depend_BANG_(node,dep){
cells.linked_graph.add_dependency_BANG_(node,dep);

return cells.linked_graph.add_dependent_BANG_(dep,node);
});
cells.linked_graph.un_depend_BANG_ = (function cells$linked_graph$un_depend_BANG_(node,dep){
cells.linked_graph.remove_dependency_BANG_(node,dep);

return cells.linked_graph.remove_dependent_BANG_(dep,node);
});
cells.linked_graph.transition_deps_BANG_ = (function cells$linked_graph$transition_deps_BANG_(node,next_dependencies){
var prev_dependencies = cells.linked_graph.immediate_dependencies(node);
var seq__67737_67787 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_dependencies,prev_dependencies));
var chunk__67738_67788 = null;
var count__67739_67789 = (0);
var i__67740_67790 = (0);
while(true){
if((i__67740_67790 < count__67739_67789)){
var added_67792 = chunk__67738_67788.cljs$core$IIndexed$_nth$arity$2(null,i__67740_67790);
cells.linked_graph.depend_BANG_(node,added_67792);


var G__67793 = seq__67737_67787;
var G__67794 = chunk__67738_67788;
var G__67795 = count__67739_67789;
var G__67796 = (i__67740_67790 + (1));
seq__67737_67787 = G__67793;
chunk__67738_67788 = G__67794;
count__67739_67789 = G__67795;
i__67740_67790 = G__67796;
continue;
} else {
var temp__5720__auto___67799 = cljs.core.seq(seq__67737_67787);
if(temp__5720__auto___67799){
var seq__67737_67800__$1 = temp__5720__auto___67799;
if(cljs.core.chunked_seq_QMARK_(seq__67737_67800__$1)){
var c__4550__auto___67801 = cljs.core.chunk_first(seq__67737_67800__$1);
var G__67802 = cljs.core.chunk_rest(seq__67737_67800__$1);
var G__67803 = c__4550__auto___67801;
var G__67804 = cljs.core.count(c__4550__auto___67801);
var G__67805 = (0);
seq__67737_67787 = G__67802;
chunk__67738_67788 = G__67803;
count__67739_67789 = G__67804;
i__67740_67790 = G__67805;
continue;
} else {
var added_67808 = cljs.core.first(seq__67737_67800__$1);
cells.linked_graph.depend_BANG_(node,added_67808);


var G__67809 = cljs.core.next(seq__67737_67800__$1);
var G__67810 = null;
var G__67811 = (0);
var G__67812 = (0);
seq__67737_67787 = G__67809;
chunk__67738_67788 = G__67810;
count__67739_67789 = G__67811;
i__67740_67790 = G__67812;
continue;
}
} else {
}
}
break;
}

var seq__67747_67813 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_dependencies,next_dependencies));
var chunk__67748_67814 = null;
var count__67749_67815 = (0);
var i__67750_67816 = (0);
while(true){
if((i__67750_67816 < count__67749_67815)){
var removed_67818 = chunk__67748_67814.cljs$core$IIndexed$_nth$arity$2(null,i__67750_67816);
cells.linked_graph.un_depend_BANG_(node,removed_67818);


var G__67820 = seq__67747_67813;
var G__67821 = chunk__67748_67814;
var G__67822 = count__67749_67815;
var G__67823 = (i__67750_67816 + (1));
seq__67747_67813 = G__67820;
chunk__67748_67814 = G__67821;
count__67749_67815 = G__67822;
i__67750_67816 = G__67823;
continue;
} else {
var temp__5720__auto___67826 = cljs.core.seq(seq__67747_67813);
if(temp__5720__auto___67826){
var seq__67747_67827__$1 = temp__5720__auto___67826;
if(cljs.core.chunked_seq_QMARK_(seq__67747_67827__$1)){
var c__4550__auto___67829 = cljs.core.chunk_first(seq__67747_67827__$1);
var G__67830 = cljs.core.chunk_rest(seq__67747_67827__$1);
var G__67831 = c__4550__auto___67829;
var G__67832 = cljs.core.count(c__4550__auto___67829);
var G__67833 = (0);
seq__67747_67813 = G__67830;
chunk__67748_67814 = G__67831;
count__67749_67815 = G__67832;
i__67750_67816 = G__67833;
continue;
} else {
var removed_67834 = cljs.core.first(seq__67747_67827__$1);
cells.linked_graph.un_depend_BANG_(node,removed_67834);


var G__67835 = cljs.core.next(seq__67747_67827__$1);
var G__67836 = null;
var G__67837 = (0);
var G__67838 = (0);
seq__67747_67813 = G__67835;
chunk__67748_67814 = G__67836;
count__67749_67815 = G__67837;
i__67750_67816 = G__67838;
continue;
}
} else {
}
}
break;
}

return null;
});

//# sourceMappingURL=cells.linked_graph.js.map
