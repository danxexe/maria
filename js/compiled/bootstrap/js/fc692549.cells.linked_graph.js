goog.provide('cells.linked_graph');

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
var cells$linked_graph$transitive_sorted_$__transitive_sorted__2 = (function (p__51498,dep){
var vec__51500 = p__51498;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51500,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51500,(1),null);
var new$ = clojure.set.difference.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(dep) : f.call(null,dep)),seen);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cells$linked_graph$transitive_sorted_$__transitive_sorted,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,dep),new$),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__51669 = results;
if(cljs.core.not((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(dep) : seen.call(null,dep)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51669,dep);
} else {
return G__51669;
}
})(),new$)], null),new$);
});
cells$linked_graph$transitive_sorted_$__transitive_sorted = function(p__51498,dep){
switch(arguments.length){
case 1:
return cells$linked_graph$transitive_sorted_$__transitive_sorted__1.call(this,p__51498);
case 2:
return cells$linked_graph$transitive_sorted_$__transitive_sorted__2.call(this,p__51498,dep);
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
var seq__51672_51691 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_dependencies,prev_dependencies));
var chunk__51673_51692 = null;
var count__51674_51693 = (0);
var i__51675_51694 = (0);
while(true){
if((i__51675_51694 < count__51674_51693)){
var added_51695 = chunk__51673_51692.cljs$core$IIndexed$_nth$arity$2(null,i__51675_51694);
cells.linked_graph.depend_BANG_(node,added_51695);


var G__51696 = seq__51672_51691;
var G__51697 = chunk__51673_51692;
var G__51698 = count__51674_51693;
var G__51699 = (i__51675_51694 + (1));
seq__51672_51691 = G__51696;
chunk__51673_51692 = G__51697;
count__51674_51693 = G__51698;
i__51675_51694 = G__51699;
continue;
} else {
var temp__5720__auto___51700 = cljs.core.seq(seq__51672_51691);
if(temp__5720__auto___51700){
var seq__51672_51701__$1 = temp__5720__auto___51700;
if(cljs.core.chunked_seq_QMARK_(seq__51672_51701__$1)){
var c__4550__auto___51702 = cljs.core.chunk_first(seq__51672_51701__$1);
var G__51703 = cljs.core.chunk_rest(seq__51672_51701__$1);
var G__51704 = c__4550__auto___51702;
var G__51705 = cljs.core.count(c__4550__auto___51702);
var G__51706 = (0);
seq__51672_51691 = G__51703;
chunk__51673_51692 = G__51704;
count__51674_51693 = G__51705;
i__51675_51694 = G__51706;
continue;
} else {
var added_51707 = cljs.core.first(seq__51672_51701__$1);
cells.linked_graph.depend_BANG_(node,added_51707);


var G__51708 = cljs.core.next(seq__51672_51701__$1);
var G__51709 = null;
var G__51710 = (0);
var G__51711 = (0);
seq__51672_51691 = G__51708;
chunk__51673_51692 = G__51709;
count__51674_51693 = G__51710;
i__51675_51694 = G__51711;
continue;
}
} else {
}
}
break;
}

var seq__51676_51712 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_dependencies,next_dependencies));
var chunk__51677_51713 = null;
var count__51678_51714 = (0);
var i__51679_51715 = (0);
while(true){
if((i__51679_51715 < count__51678_51714)){
var removed_51716 = chunk__51677_51713.cljs$core$IIndexed$_nth$arity$2(null,i__51679_51715);
cells.linked_graph.un_depend_BANG_(node,removed_51716);


var G__51717 = seq__51676_51712;
var G__51718 = chunk__51677_51713;
var G__51719 = count__51678_51714;
var G__51720 = (i__51679_51715 + (1));
seq__51676_51712 = G__51717;
chunk__51677_51713 = G__51718;
count__51678_51714 = G__51719;
i__51679_51715 = G__51720;
continue;
} else {
var temp__5720__auto___51721 = cljs.core.seq(seq__51676_51712);
if(temp__5720__auto___51721){
var seq__51676_51722__$1 = temp__5720__auto___51721;
if(cljs.core.chunked_seq_QMARK_(seq__51676_51722__$1)){
var c__4550__auto___51723 = cljs.core.chunk_first(seq__51676_51722__$1);
var G__51724 = cljs.core.chunk_rest(seq__51676_51722__$1);
var G__51725 = c__4550__auto___51723;
var G__51726 = cljs.core.count(c__4550__auto___51723);
var G__51727 = (0);
seq__51676_51712 = G__51724;
chunk__51677_51713 = G__51725;
count__51678_51714 = G__51726;
i__51679_51715 = G__51727;
continue;
} else {
var removed_51728 = cljs.core.first(seq__51676_51722__$1);
cells.linked_graph.un_depend_BANG_(node,removed_51728);


var G__51729 = cljs.core.next(seq__51676_51722__$1);
var G__51730 = null;
var G__51731 = (0);
var G__51732 = (0);
seq__51676_51712 = G__51729;
chunk__51677_51713 = G__51730;
count__51678_51714 = G__51731;
i__51679_51715 = G__51732;
continue;
}
} else {
}
}
break;
}

return null;
});
