goog.provide('cells.cell');
goog.require('cljs.core');
goog.require('cells.linked_graph');
goog.require('chia.util');
goog.require('chia.reactive');
goog.require('applied_science.js_interop');
goog.require('chia.util.perf');
/**
 * Tracks the currently-evaluating cell.
 */
cells.cell._STAR_self_STAR_ = null;
/**
 * Views are implemented as metadata on cells. A rendering environment
 * (such as a notebook) can override the default view for cells
 * without affecting views attached to particular cells.
 */
cells.cell._STAR_default_view_STAR_ = cljs.core.identity;
/**
 * Errors are caught during evaluation of cells and their bound-fns.
 * By default, we re-throw the error with information about where it
 * originated. This behaviour can be overridden here.
 */
cells.cell._STAR_error_handler_STAR_ = (function cells$cell$_STAR_error_handler_STAR_(error){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Error evaluating cell",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),cells.cell._STAR_self_STAR_], null),error);
});

/**
 * Marker protocol to determine if a thing is a cell
 * @interface
 */
cells.cell.ICell = function(){};

/**
 * Returns true of `x` is a cell.
 */
cells.cell.cell_QMARK_ = (function cells$cell$cell_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cells$cell$ICell$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cells.cell.ICell,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cells.cell.ICell,x);
}
});
cells.cell._STAR_read_log_STAR_ = null;
cells.cell.log_observation_BANG_ = (function cells$cell$log_observation_BANG_(cell){
(cells.cell.maybe_activate.cljs$core$IFn$_invoke$arity$1 ? cells.cell.maybe_activate.cljs$core$IFn$_invoke$arity$1(cell) : cells.cell.maybe_activate.call(null,cell));

if((cell === cells.cell._STAR_self_STAR_)){
} else {
var G__67969_68561 = cells.cell._STAR_read_log_STAR_;
if((G__67969_68561 == null)){
} else {
cljs.core._vreset_BANG_(G__67969_68561,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(G__67969_68561),cell));
}

if((!((chia.reactive._STAR_reader_STAR_ == null)))){
cljs.core._vreset_BANG_(chia.reactive._STAR_reader_dependency_log_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(chia.reactive._STAR_reader_dependency_log_STAR_),cell,new cljs.core.Keyword("chia.reactive","simple","chia.reactive/simple",1822791207)));
} else {
}

}

return cell;
});
cells.cell.get_async = (function cells$cell$get_async(cell){
cells.cell.log_observation_BANG_(cell);

return cell.state.async;
});
cells.cell.set_async_BANG_ = (function cells$cell$set_async_BANG_(cell,v){
var state = cell.state;
var before = state.async;
if((before === v)){
} else {
state.async = v;

(cells.cell.mark_changed_BANG_.cljs$core$IFn$_invoke$arity$1 ? cells.cell.mark_changed_BANG_.cljs$core$IFn$_invoke$arity$1(cell) : cells.cell.mark_changed_BANG_.call(null,cell));
}

return cell;
});
cells.cell.loading_BANG_ = (function cells$cell$loading_BANG_(cell){
return cells.cell.set_async_BANG_(cell,new cljs.core.Keyword(null,"loading","loading",-737050189));
});
cells.cell.error_BANG_ = (function cells$cell$error_BANG_(cell,error){
cells.cell.set_async_BANG_(cell,error);

(cells.cell._STAR_error_handler_STAR_.cljs$core$IFn$_invoke$arity$1 ? cells.cell._STAR_error_handler_STAR_.cljs$core$IFn$_invoke$arity$1(error) : cells.cell._STAR_error_handler_STAR_.call(null,error));

return cell;
});
cells.cell.complete_BANG_ = (function cells$cell$complete_BANG_(cell){
return cells.cell.set_async_BANG_(cell,null);
});
/**
 * Returns :error, :loading, or nil
 */
cells.cell.status = (function cells$cell$status(cell){
var st = cells.cell.get_async(cell);
if((((st == null)) || ((st instanceof cljs.core.Keyword)))){
return st;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032);
}
});
cells.cell.loading_QMARK_ = (function cells$cell$loading_QMARK_(cell){
return (((cells.cell.get_async(cell) instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword(null,"loading","loading",-737050189).fqn === cells.cell.get_async(cell).fqn)));
});
cells.cell.complete_QMARK_ = (function cells$cell$complete_QMARK_(cell){
return (cells.cell.get_async(cell) == null);
});
cells.cell.error_st_QMARK_ = (function cells$cell$error_st_QMARK_(st){
return (((!((st == null)))) && ((!((((st instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword(null,"loading","loading",-737050189).fqn === st.fqn)))))));
});
cells.cell.error = (function cells$cell$error(cell){
return chia.util.guard(cells.cell.get_async(cell),cells.cell.error_st_QMARK_);
});
cells.cell.error_QMARK_ = (function cells$cell$error_QMARK_(cell){
return cells.cell.error_st_QMARK_(cells.cell.get_async(cell));
});
cells.cell.message = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cells.cell.error);
/**
 * Cleans up when a cell is deactivated.
 */
cells.cell.dispose_BANG_ = (function cells$cell$dispose_BANG_(cell){
var seq__68014_68594 = cljs.core.seq(cljs.core.vals(cell.state.on_dispose));
var chunk__68015_68595 = null;
var count__68016_68596 = (0);
var i__68017_68597 = (0);
while(true){
if((i__68017_68597 < count__68016_68596)){
var f_68612 = chunk__68015_68595.cljs$core$IIndexed$_nth$arity$2(null,i__68017_68597);
(f_68612.cljs$core$IFn$_invoke$arity$0 ? f_68612.cljs$core$IFn$_invoke$arity$0() : f_68612.call(null));


var G__68613 = seq__68014_68594;
var G__68614 = chunk__68015_68595;
var G__68615 = count__68016_68596;
var G__68616 = (i__68017_68597 + (1));
seq__68014_68594 = G__68613;
chunk__68015_68595 = G__68614;
count__68016_68596 = G__68615;
i__68017_68597 = G__68616;
continue;
} else {
var temp__5720__auto___68617 = cljs.core.seq(seq__68014_68594);
if(temp__5720__auto___68617){
var seq__68014_68618__$1 = temp__5720__auto___68617;
if(cljs.core.chunked_seq_QMARK_(seq__68014_68618__$1)){
var c__4550__auto___68622 = cljs.core.chunk_first(seq__68014_68618__$1);
var G__68623 = cljs.core.chunk_rest(seq__68014_68618__$1);
var G__68624 = c__4550__auto___68622;
var G__68625 = cljs.core.count(c__4550__auto___68622);
var G__68626 = (0);
seq__68014_68594 = G__68623;
chunk__68015_68595 = G__68624;
count__68016_68596 = G__68625;
i__68017_68597 = G__68626;
continue;
} else {
var f_68627 = cljs.core.first(seq__68014_68618__$1);
(f_68627.cljs$core$IFn$_invoke$arity$0 ? f_68627.cljs$core$IFn$_invoke$arity$0() : f_68627.call(null));


var G__68628 = cljs.core.next(seq__68014_68618__$1);
var G__68629 = null;
var G__68630 = (0);
var G__68631 = (0);
seq__68014_68594 = G__68628;
chunk__68015_68595 = G__68629;
count__68016_68596 = G__68630;
i__68017_68597 = G__68631;
continue;
}
} else {
}
}
break;
}

cell.state.on_dispose = null;

return cell;
});
/**
 * Registers function `f` at `key` to be called when cell is deactivated.
 */
cells.cell.on_dispose = (function cells$cell$on_dispose(cell,key,f){
if((!(cljs.core.contains_QMARK_(cell.state.on_dispose,key)))){
} else {
throw (new Error(["Assert failed: ","`on-dispose` was called with a key that already exists","\n","(not (contains? (.. cell -state -on-dispose) key))"].join('')));
}

var obj68050 = cell;
var obj68050__$1 = (((!((obj68050 == null))))?obj68050:({}));
var inner_obj__50641__auto__ = (function (){var child68051 = obj68050__$1.state;
if((!((child68051 == null)))){
return child68051;
} else {
var new_child__50590__auto__ = ({});
var obj68060_68639 = obj68050__$1;
obj68060_68639.state = new_child__50590__auto__;


return new_child__50590__auto__;
}
})();
var o__50635__auto___68642 = inner_obj__50641__auto__;
var o__50629__auto___68643 = (((!((o__50635__auto___68642 == null))))?o__50635__auto___68642:({}));
var obj68065_68644 = o__50629__auto___68643;
obj68065_68644.on_dispose = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o__50629__auto___68643.on_dispose,key,f);


return obj68050__$1;
});
cells.cell.active_QMARK_ = (function cells$cell$active_QMARK_(cell){
return cell.state.active;
});
/**
 * Returns true if there is a path from `cell` to any watched cell
 */
cells.cell.necessary_QMARK_ = (function cells$cell$necessary_QMARK_(cell){
return (!(cljs.core.empty_QMARK_(cells.linked_graph.immediate_dependents(cell))));
});
/**
 * Returns true if `cell` is watched directly
 */
cells.cell.watched_QMARK_ = (function cells$cell$watched_QMARK_(cell){
return (!((cell.state.watches == null)));
});
/**
 * When a cell is unwatched and unnecessary, deactivate
 */
cells.cell.maybe_deactivate = (function cells$cell$maybe_deactivate(cell){
if(cells.cell.cell_QMARK_(cell)){
} else {
throw (new Error("Assert failed: (cell? cell)"));
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cells.cell.active_QMARK_(cell);
if(cljs.core.truth_(and__4120__auto__)){
return (((!(cells.cell.watched_QMARK_(cell)))) && ((!(cells.cell.necessary_QMARK_(cell)))));
} else {
return and__4120__auto__;
}
})())){
var seq__68088_68651 = cljs.core.seq(cells.linked_graph.immediate_dependencies(cell));
var chunk__68089_68652 = null;
var count__68090_68653 = (0);
var i__68091_68654 = (0);
while(true){
if((i__68091_68654 < count__68090_68653)){
var dep_68655 = chunk__68089_68652.cljs$core$IIndexed$_nth$arity$2(null,i__68091_68654);
cells.linked_graph.un_depend_BANG_(cell,dep_68655);


var G__68660 = seq__68088_68651;
var G__68661 = chunk__68089_68652;
var G__68662 = count__68090_68653;
var G__68663 = (i__68091_68654 + (1));
seq__68088_68651 = G__68660;
chunk__68089_68652 = G__68661;
count__68090_68653 = G__68662;
i__68091_68654 = G__68663;
continue;
} else {
var temp__5720__auto___68665 = cljs.core.seq(seq__68088_68651);
if(temp__5720__auto___68665){
var seq__68088_68666__$1 = temp__5720__auto___68665;
if(cljs.core.chunked_seq_QMARK_(seq__68088_68666__$1)){
var c__4550__auto___68667 = cljs.core.chunk_first(seq__68088_68666__$1);
var G__68668 = cljs.core.chunk_rest(seq__68088_68666__$1);
var G__68670 = c__4550__auto___68667;
var G__68671 = cljs.core.count(c__4550__auto___68667);
var G__68672 = (0);
seq__68088_68651 = G__68668;
chunk__68089_68652 = G__68670;
count__68090_68653 = G__68671;
i__68091_68654 = G__68672;
continue;
} else {
var dep_68676 = cljs.core.first(seq__68088_68666__$1);
cells.linked_graph.un_depend_BANG_(cell,dep_68676);


var G__68680 = cljs.core.next(seq__68088_68666__$1);
var G__68681 = null;
var G__68682 = (0);
var G__68683 = (0);
seq__68088_68651 = G__68680;
chunk__68089_68652 = G__68681;
count__68090_68653 = G__68682;
i__68091_68654 = G__68683;
continue;
}
} else {
}
}
break;
}

cells.cell.dispose_BANG_(cell);

cell.state.active = false;
} else {
}

return cell;
});
/**
 * When a cell gains an observor, make sure it is active
 */
cells.cell.maybe_activate = (function cells$cell$maybe_activate(cell){
if(cljs.core.truth_(cells.cell.active_QMARK_(cell))){
} else {
cell.state.active = true;

(cells.cell.eval_and_set_BANG_.cljs$core$IFn$_invoke$arity$1 ? cells.cell.eval_and_set_BANG_.cljs$core$IFn$_invoke$arity$1(cell) : cells.cell.eval_and_set_BANG_.call(null,cell));
}

return cell;
});
cells.cell.eval_cell = (function cells$cell$eval_cell(cell){
var f = (function (){var obj68130 = (function (){var obj68128 = cell;
var k68129 = goog.reflect.objectProperty("state",obj68128);
if((function (){var obj68132 = obj68128;
return (((!((obj68132 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68129,obj68132)));
})()){
return (obj68128[k68129]);
} else {
return undefined;
}
})();
var k68131 = goog.reflect.objectProperty("f",obj68130);
if((function (){var obj68137 = obj68130;
return (((!((obj68137 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68131,obj68137)));
})()){
return (obj68130[k68131]);
} else {
return undefined;
}
})();
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cell) : f.call(null,cell));
}catch (e68142){var e = e68142;
cells.cell.dispose_BANG_(cell);

return cells.cell.error_BANG_(cell,e);
}});
cells.cell._STAR_to_evaluate_STAR_ = null;
cells.cell._STAR_changed_STAR_ = null;
cells.cell._STAR_evaluated_STAR_ = null;
cells.cell.eval_and_set_BANG_ = (function cells$cell$eval_and_set_BANG_(cell){
if((cell === cells.cell._STAR_self_STAR_)){
} else {
var _STAR_self_STAR__orig_val__68150_68707 = cells.cell._STAR_self_STAR_;
var _STAR_read_log_STAR__orig_val__68151_68708 = cells.cell._STAR_read_log_STAR_;
var _STAR_self_STAR__temp_val__68152_68709 = cell;
var _STAR_read_log_STAR__temp_val__68153_68710 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68152_68709;

cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__temp_val__68153_68710;

try{cells.cell.dispose_BANG_(cell);

var value_68711 = cells.cell.eval_cell(cell);
var next_deps_68712 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cells.cell._STAR_read_log_STAR_),cell);
cells.linked_graph.transition_deps_BANG_(cell,next_deps_68712);

cljs.core._reset_BANG_(cell,value_68711);
}finally {cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__orig_val__68151_68708;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68150_68707;
}}

return cell;
});
cells.cell.notify_watches = (function cells$cell$notify_watches(cell){
var st = cell.state;
var value = st.value;
cljs.core._notify_watches(cell,st.prev_value,value);

return st.prev_value = value;
});
/**
 * Recomputes transitive dependents of `cell`.
 * Returns set of changed cells.
 */
cells.cell.stabilize_BANG_ = (function cells$cell$stabilize_BANG_(cell){
var _STAR_to_evaluate_STAR__orig_val__68175 = cells.cell._STAR_to_evaluate_STAR_;
var _STAR_changed_STAR__orig_val__68176 = cells.cell._STAR_changed_STAR_;
var _STAR_evaluated_STAR__orig_val__68177 = cells.cell._STAR_evaluated_STAR_;
var _STAR_to_evaluate_STAR__temp_val__68178 = cljs.core.volatile_BANG_(cljs.core.vec(cells.linked_graph.immediate_dependents(cell)));
var _STAR_changed_STAR__temp_val__68179 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.createAsIfByAssoc([cell]));
var _STAR_evaluated_STAR__temp_val__68180 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
cells.cell._STAR_to_evaluate_STAR_ = _STAR_to_evaluate_STAR__temp_val__68178;

cells.cell._STAR_changed_STAR_ = _STAR_changed_STAR__temp_val__68179;

cells.cell._STAR_evaluated_STAR_ = _STAR_evaluated_STAR__temp_val__68180;

try{var i_68722 = (0);
while(true){
var temp__5724__auto___68723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cells.cell._STAR_to_evaluate_STAR_),i_68722,null);
if((temp__5724__auto___68723 == null)){
} else {
var cell_68724__$1 = temp__5724__auto___68723;
if(((cljs.core.not((function (){var fexpr__68183 = cljs.core.deref(cells.cell._STAR_changed_STAR_);
return (fexpr__68183.cljs$core$IFn$_invoke$arity$1 ? fexpr__68183.cljs$core$IFn$_invoke$arity$1(cell_68724__$1) : fexpr__68183.call(null,cell_68724__$1));
})())) && (cljs.core.not((function (){var fexpr__68184 = cljs.core.deref(cells.cell._STAR_evaluated_STAR_);
return (fexpr__68184.cljs$core$IFn$_invoke$arity$1 ? fexpr__68184.cljs$core$IFn$_invoke$arity$1(cell_68724__$1) : fexpr__68184.call(null,cell_68724__$1));
})())))){
cljs.core._vreset_BANG_(cells.cell._STAR_evaluated_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cells.cell._STAR_evaluated_STAR_),cell_68724__$1));

cells.cell.eval_and_set_BANG_(cell_68724__$1);
} else {
}

var G__68730 = (i_68722 + (1));
i_68722 = G__68730;
continue;
}
break;
}

return cljs.core.deref(cells.cell._STAR_changed_STAR_);
}finally {cells.cell._STAR_evaluated_STAR_ = _STAR_evaluated_STAR__orig_val__68177;

cells.cell._STAR_changed_STAR_ = _STAR_changed_STAR__orig_val__68176;

cells.cell._STAR_to_evaluate_STAR_ = _STAR_to_evaluate_STAR__orig_val__68175;
}});
cells.cell.mark_changed_BANG_ = (function cells$cell$mark_changed_BANG_(cell){
if((cells.cell._STAR_to_evaluate_STAR_ == null)){
var seq__68187_68732 = cljs.core.seq(cells.cell.stabilize_BANG_(cell));
var chunk__68188_68733 = null;
var count__68189_68734 = (0);
var i__68190_68735 = (0);
while(true){
if((i__68190_68735 < count__68189_68734)){
var changed_68741 = chunk__68188_68733.cljs$core$IIndexed$_nth$arity$2(null,i__68190_68735);
cells.cell.notify_watches(changed_68741);


var G__68748 = seq__68187_68732;
var G__68749 = chunk__68188_68733;
var G__68750 = count__68189_68734;
var G__68751 = (i__68190_68735 + (1));
seq__68187_68732 = G__68748;
chunk__68188_68733 = G__68749;
count__68189_68734 = G__68750;
i__68190_68735 = G__68751;
continue;
} else {
var temp__5720__auto___68752 = cljs.core.seq(seq__68187_68732);
if(temp__5720__auto___68752){
var seq__68187_68753__$1 = temp__5720__auto___68752;
if(cljs.core.chunked_seq_QMARK_(seq__68187_68753__$1)){
var c__4550__auto___68754 = cljs.core.chunk_first(seq__68187_68753__$1);
var G__68759 = cljs.core.chunk_rest(seq__68187_68753__$1);
var G__68760 = c__4550__auto___68754;
var G__68761 = cljs.core.count(c__4550__auto___68754);
var G__68762 = (0);
seq__68187_68732 = G__68759;
chunk__68188_68733 = G__68760;
count__68189_68734 = G__68761;
i__68190_68735 = G__68762;
continue;
} else {
var changed_68768 = cljs.core.first(seq__68187_68753__$1);
cells.cell.notify_watches(changed_68768);


var G__68771 = cljs.core.next(seq__68187_68753__$1);
var G__68772 = null;
var G__68773 = (0);
var G__68774 = (0);
seq__68187_68732 = G__68771;
chunk__68188_68733 = G__68772;
count__68189_68734 = G__68773;
i__68190_68735 = G__68774;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core._vreset_BANG_(cells.cell._STAR_changed_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cells.cell._STAR_changed_STAR_),cell));

cljs.core._vreset_BANG_(cells.cell._STAR_to_evaluate_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cells.cell._STAR_to_evaluate_STAR_),cells.linked_graph.immediate_dependents(cell)));
}

return cell;
});
/**
 * Attaches `view-fn` to the metadata of `cell`
 */
cells.cell.with_view = (function cells$cell$with_view(cell,view_fn){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cell,cljs.core.assoc,new cljs.core.Keyword("cell","view","cell/view",1253206624),view_fn);
});
/**
 * Returns current view-fn for cell
 */
cells.cell.view_fn = (function cells$cell$view_fn(cell){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(cell),new cljs.core.Keyword("cell","view","cell/view",1253206624),cells.cell._STAR_default_view_STAR_);
});
/**
 * Returns view of `cell`
 */
cells.cell.view = (function cells$cell$view(cell){
var fexpr__68208 = cells.cell.view_fn(cell);
return (fexpr__68208.cljs$core$IFn$_invoke$arity$1 ? fexpr__68208.cljs$core$IFn$_invoke$arity$1(cell) : fexpr__68208.call(null,cell));
});
cells.cell.dissoc_empty = (function cells$cell$dissoc_empty(coll,x){
var out = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(coll,x);
if(cljs.core.empty_QMARK_(out)){
return null;
} else {
return out;
}
});
cells.cell.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cells.linked_graph.ILinkedGraph}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cells.cell.ICell}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {chia.reactive.ITransitionSimple}
 * @implements {cljs.core.IWithMeta}
*/
cells.cell.Cell = (function (state,meta){
this.state = state;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2150006784;
this.cljs$lang$protocol_mask$partition1$ = 98306;
});
cells.cell.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u26AA\uFE0F"], 0));
});

cells.cell.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cells.cell.Cell.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,other], null),(((other instanceof cells.cell.Cell)) && ((self__.state === other.state))));
});

cells.cell.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval_68789 = self__.state.value;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldval_68789,newval)){
var obj68221_68790 = self__.state;
var obj68222_68791 = (((!((obj68221_68790 == null))))?obj68221_68790:({}));
obj68222_68791.value = newval;


cells.cell.mark_changed_BANG_(this$__$1);
} else {
}

return newval;
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__68225 = (function (){var obj68228 = (function (){var obj68226 = this$__$1;
var k68227 = goog.reflect.objectProperty("state",obj68226);
if((function (){var obj68230 = obj68226;
return (((!((obj68230 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68227,obj68230)));
})()){
return (obj68226[k68227]);
} else {
return undefined;
}
})();
var k68229 = goog.reflect.objectProperty("value",obj68228);
if((function (){var obj68231 = obj68228;
return (((!((obj68231 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68229,obj68231)));
})()){
return (obj68228[k68229]);
} else {
return undefined;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68225) : f.call(null,G__68225));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__68232 = (function (){var obj68236 = (function (){var obj68234 = this$__$1;
var k68235 = goog.reflect.objectProperty("state",obj68234);
if((function (){var obj68238 = obj68234;
return (((!((obj68238 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68235,obj68238)));
})()){
return (obj68234[k68235]);
} else {
return undefined;
}
})();
var k68237 = goog.reflect.objectProperty("value",obj68236);
if((function (){var obj68239 = obj68236;
return (((!((obj68239 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68237,obj68239)));
})()){
return (obj68236[k68237]);
} else {
return undefined;
}
})();
var G__68233 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68232,G__68233) : f.call(null,G__68232,G__68233));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__68240 = (function (){var obj68245 = (function (){var obj68243 = this$__$1;
var k68244 = goog.reflect.objectProperty("state",obj68243);
if((function (){var obj68253 = obj68243;
return (((!((obj68253 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68244,obj68253)));
})()){
return (obj68243[k68244]);
} else {
return undefined;
}
})();
var k68246 = goog.reflect.objectProperty("value",obj68245);
if((function (){var obj68255 = obj68245;
return (((!((obj68255 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68246,obj68255)));
})()){
return (obj68245[k68246]);
} else {
return undefined;
}
})();
var G__68241 = a;
var G__68242 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__68240,G__68241,G__68242) : f.call(null,G__68240,G__68241,G__68242));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(function (){var obj68258 = (function (){var obj68256 = this$__$1;
var k68257 = goog.reflect.objectProperty("state",obj68256);
if((function (){var obj68260 = obj68256;
return (((!((obj68260 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68257,obj68260)));
})()){
return (obj68256[k68257]);
} else {
return undefined;
}
})();
var k68259 = goog.reflect.objectProperty("value",obj68258);
if((function (){var obj68261 = obj68258;
return (((!((obj68261 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68259,obj68261)));
})()){
return (obj68258[k68259]);
} else {
return undefined;
}
})(),a,b,xs));
});

cells.cell.Cell.prototype.chia$reactive$ITransitionSimple$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.chia$reactive$ITransitionSimple$on_transition$arity$2 = (function (this$,observed_QMARK_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(observed_QMARK_)){
this$__$1.cljs$core$IWatchable$_add_watch$arity$3(null,new cljs.core.Keyword("chia.reactive","transition","chia.reactive/transition",-1130738455),((function (this$__$1){
return (function (_,___$1,___$2,___$3){
return chia.reactive.invalidate_readers_BANG_(this$__$1);
});})(this$__$1))
);

return cells.cell.maybe_activate(this$__$1);
} else {
this$__$1.cljs$core$IWatchable$_remove_watch$arity$2(null,new cljs.core.Keyword("chia.reactive","transition","chia.reactive/transition",-1130738455));

return cells.cell.maybe_deactivate(this$__$1);
}
});

cells.cell.Cell.prototype.cells$cell$ICell$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__68267 = cljs.core.seq(cljs.core.vals(self__.state.watches));
var chunk__68268 = null;
var count__68269 = (0);
var i__68270 = (0);
while(true){
if((i__68270 < count__68269)){
var f = chunk__68268.cljs$core$IIndexed$_nth$arity$2(null,i__68270);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f.call(null,this$__$1,oldval,newval));


var G__68855 = seq__68267;
var G__68856 = chunk__68268;
var G__68857 = count__68269;
var G__68858 = (i__68270 + (1));
seq__68267 = G__68855;
chunk__68268 = G__68856;
count__68269 = G__68857;
i__68270 = G__68858;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68267);
if(temp__5720__auto__){
var seq__68267__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68267__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68267__$1);
var G__68863 = cljs.core.chunk_rest(seq__68267__$1);
var G__68864 = c__4550__auto__;
var G__68865 = cljs.core.count(c__4550__auto__);
var G__68866 = (0);
seq__68267 = G__68863;
chunk__68268 = G__68864;
count__68269 = G__68865;
i__68270 = G__68866;
continue;
} else {
var f = cljs.core.first(seq__68267__$1);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f.call(null,this$__$1,oldval,newval));


var G__68870 = cljs.core.next(seq__68267__$1);
var G__68871 = null;
var G__68872 = (0);
var G__68873 = (0);
seq__68267 = G__68870;
chunk__68268 = G__68871;
count__68269 = G__68872;
i__68270 = G__68873;
continue;
}
} else {
return null;
}
}
break;
}
});

cells.cell.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
var o__50635__auto__ = self__.state;
var o__50629__auto__ = (((!((o__50635__auto__ == null))))?o__50635__auto__:({}));
var obj68279 = o__50629__auto__;
obj68279.watches = (function (){var G__68281 = o__50629__auto__.watches;
var G__68282 = key;
var G__68283 = f;
var fexpr__68280 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY);
return (fexpr__68280.cljs$core$IFn$_invoke$arity$3 ? fexpr__68280.cljs$core$IFn$_invoke$arity$3(G__68281,G__68282,G__68283) : fexpr__68280.call(null,G__68281,G__68282,G__68283));
})();

return obj68279;
});

cells.cell.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var o__50635__auto___68878 = self__.state;
var o__50629__auto___68879 = (((!((o__50635__auto___68878 == null))))?o__50635__auto___68878:({}));
var obj68286_68881 = o__50629__auto___68879;
obj68286_68881.watches = cells.cell.dissoc_empty(o__50629__auto___68879.watches,key);


return cells.cell.maybe_deactivate(this$__$1);
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$add_dependency_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__50635__auto__ = self__.state;
var o__50629__auto__ = (((!((o__50635__auto__ == null))))?o__50635__auto__:({}));
var obj68290 = o__50629__auto__;
obj68290.dependencies = (function (){var G__68291 = o__50629__auto__.dependencies;
var G__68292 = dep;
return (cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2 ? cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2(G__68291,G__68292) : cells.cell.set_conj.call(null,G__68291,G__68292));
})();

return obj68290;
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$remove_dependency_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__50635__auto__ = self__.state;
var o__50629__auto__ = (((!((o__50635__auto__ == null))))?o__50635__auto__:({}));
var obj68309 = o__50629__auto__;
obj68309.dependencies = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(o__50629__auto__.dependencies,dep);

return obj68309;
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$add_dependent_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__50635__auto__ = self__.state;
var o__50629__auto__ = (((!((o__50635__auto__ == null))))?o__50635__auto__:({}));
var obj68315 = o__50629__auto__;
obj68315.dependents = (function (){var G__68316 = o__50629__auto__.dependents;
var G__68317 = dep;
return (cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2 ? cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2(G__68316,G__68317) : cells.cell.set_conj.call(null,G__68316,G__68317));
})();

return obj68315;
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$remove_dependent_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__50635__auto___68886 = self__.state;
var o__50629__auto___68887 = (((!((o__50635__auto___68886 == null))))?o__50635__auto___68886:({}));
var obj68325_68888 = o__50629__auto___68887;
obj68325_68888.dependents = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(o__50629__auto___68887.dependents,dep);


return cells.cell.maybe_deactivate(this$__$1);
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$immediate_dependencies$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.state.dependencies;
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$immediate_dependents$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.state.dependents;
});

cells.cell.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return (new cells.cell.Cell(self__.state,m));
});

cells.cell.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cells.cell.log_observation_BANG_(this$__$1);

return self__.state.value;
});

cells.cell.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

cells.cell.Cell.cljs$lang$type = true;

cells.cell.Cell.cljs$lang$ctorStr = "cells.cell/Cell";

cells.cell.Cell.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cells.cell/Cell");
});

/**
 * Positional factory function for cells.cell/Cell.
 */
cells.cell.__GT_Cell = (function cells$cell$__GT_Cell(state,meta){
return (new cells.cell.Cell(state,meta));
});

cells.cell.make_cell = (function cells$cell$make_cell(f,owner){
return (new cells.cell.Cell(({f:f,value:null,dependencies:cljs.core.PersistentHashSet.EMPTY,dependents:cljs.core.PersistentHashSet.EMPTY,owner:owner,active:false,async:null}),null));
});
cells.cell.update_cell_STAR_ = (function cells$cell$update_cell_STAR_(cell,f){
var obj68425_68897 = cell.state;
var obj68426_68898 = (function (){var obj68427 = (((!((obj68425_68897 == null))))?obj68425_68897:({}));
obj68427.f = f;

return obj68427;
})();
obj68426_68898.value = null;


return cells.cell.eval_and_set_BANG_(cell);
});
/**
 * Returns cell for function `f`. Optional `memo-key`, a string, will cause cell to
 * be memoized on the currently-evaluating cell or reactive reader.
 */
cells.cell.cell_STAR_ = (function cells$cell$cell_STAR_(var_args){
var G__68434 = arguments.length;
switch (G__68434) {
case 1:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(f,null);
});

cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,memo_key){
var owner = (function (){var or__4131__auto__ = cells.cell._STAR_self_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chia.reactive._STAR_reader_STAR_;
}
})();
if((!((memo_key == null)))){
var or__4131__auto__ = (function (){var obj68448 = owner;
var k68449 = applied_science.js_interop.impl.wrap_key(memo_key);
if((function (){var obj68450 = obj68448;
return (((!((obj68450 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68449,obj68450)));
})()){
return (obj68448[k68449]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__68463 = cells.cell.make_cell(f,owner);
var obj68531_68912 = owner;
var obj68533_68913 = (((!((obj68531_68912 == null))))?obj68531_68912:({}));
(obj68533_68913[applied_science.js_interop.impl.wrap_key(memo_key)] = G__68463);


return G__68463;
}
} else {
return cells.cell.make_cell(f,owner);
}
});

cells.cell.cell_STAR_.cljs$lang$maxFixedArity = 2;

cells.cell.cell = (function cells$cell$cell(key,value){
if(cljs.core.truth_(key)){
} else {
throw (new Error(["Assert failed: ","Cells created by functions require a key","\n","key"].join('')));
}

return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(value),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(key))].join(''));
});
cells.cell.immediate_dependencies = cells.linked_graph.immediate_dependencies;
cells.cell.immediate_dependents = cells.linked_graph.immediate_dependents;
cells.cell.dependencies = cells.linked_graph.dependencies;
cells.cell.dependents = cells.linked_graph.dependents;

//# sourceMappingURL=cells.cell.js.map
