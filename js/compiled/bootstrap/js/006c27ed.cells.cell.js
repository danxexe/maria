goog.provide('cells.cell');
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
var G__51690_52198 = cells.cell._STAR_read_log_STAR_;
if((G__51690_52198 == null)){
} else {
cljs.core._vreset_BANG_(G__51690_52198,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(G__51690_52198),cell));
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
var seq__51752_52220 = cljs.core.seq(cljs.core.vals(cell.state.on_dispose));
var chunk__51753_52221 = null;
var count__51754_52222 = (0);
var i__51755_52223 = (0);
while(true){
if((i__51755_52223 < count__51754_52222)){
var f_52224 = chunk__51753_52221.cljs$core$IIndexed$_nth$arity$2(null,i__51755_52223);
(f_52224.cljs$core$IFn$_invoke$arity$0 ? f_52224.cljs$core$IFn$_invoke$arity$0() : f_52224.call(null));


var G__52226 = seq__51752_52220;
var G__52227 = chunk__51753_52221;
var G__52228 = count__51754_52222;
var G__52229 = (i__51755_52223 + (1));
seq__51752_52220 = G__52226;
chunk__51753_52221 = G__52227;
count__51754_52222 = G__52228;
i__51755_52223 = G__52229;
continue;
} else {
var temp__5720__auto___52231 = cljs.core.seq(seq__51752_52220);
if(temp__5720__auto___52231){
var seq__51752_52232__$1 = temp__5720__auto___52231;
if(cljs.core.chunked_seq_QMARK_(seq__51752_52232__$1)){
var c__4550__auto___52233 = cljs.core.chunk_first(seq__51752_52232__$1);
var G__52240 = cljs.core.chunk_rest(seq__51752_52232__$1);
var G__52241 = c__4550__auto___52233;
var G__52242 = cljs.core.count(c__4550__auto___52233);
var G__52243 = (0);
seq__51752_52220 = G__52240;
chunk__51753_52221 = G__52241;
count__51754_52222 = G__52242;
i__51755_52223 = G__52243;
continue;
} else {
var f_52244 = cljs.core.first(seq__51752_52232__$1);
(f_52244.cljs$core$IFn$_invoke$arity$0 ? f_52244.cljs$core$IFn$_invoke$arity$0() : f_52244.call(null));


var G__52245 = cljs.core.next(seq__51752_52232__$1);
var G__52246 = null;
var G__52247 = (0);
var G__52248 = (0);
seq__51752_52220 = G__52245;
chunk__51753_52221 = G__52246;
count__51754_52222 = G__52247;
i__51755_52223 = G__52248;
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

var obj51756 = cell;
var obj51756__$1 = (((!((obj51756 == null))))?obj51756:({}));
var inner_obj__20073__auto__ = (function (){var child51757 = obj51756__$1.state;
if((!((child51757 == null)))){
return child51757;
} else {
var new_child__20022__auto__ = ({});
var obj51762_52257 = obj51756__$1;
obj51762_52257.state = new_child__20022__auto__;


return new_child__20022__auto__;
}
})();
var o__20067__auto___52258 = inner_obj__20073__auto__;
var o__20061__auto___52265 = (((!((o__20067__auto___52258 == null))))?o__20067__auto___52258:({}));
var obj51765_52266 = o__20061__auto___52265;
obj51765_52266.on_dispose = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o__20061__auto___52265.on_dispose,key,f);


return obj51756__$1;
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

if(cljs.core.truth_((function (){var and__4120__auto__ = cells.cell.active_QMARK_(cell);
if(cljs.core.truth_(and__4120__auto__)){
return (((!(cells.cell.watched_QMARK_(cell)))) && ((!(cells.cell.necessary_QMARK_(cell)))));
} else {
return and__4120__auto__;
}
})())){
var seq__51773_52270 = cljs.core.seq(cells.linked_graph.immediate_dependencies(cell));
var chunk__51774_52271 = null;
var count__51775_52272 = (0);
var i__51776_52273 = (0);
while(true){
if((i__51776_52273 < count__51775_52272)){
var dep_52274 = chunk__51774_52271.cljs$core$IIndexed$_nth$arity$2(null,i__51776_52273);
cells.linked_graph.un_depend_BANG_(cell,dep_52274);


var G__52275 = seq__51773_52270;
var G__52276 = chunk__51774_52271;
var G__52277 = count__51775_52272;
var G__52278 = (i__51776_52273 + (1));
seq__51773_52270 = G__52275;
chunk__51774_52271 = G__52276;
count__51775_52272 = G__52277;
i__51776_52273 = G__52278;
continue;
} else {
var temp__5720__auto___52281 = cljs.core.seq(seq__51773_52270);
if(temp__5720__auto___52281){
var seq__51773_52284__$1 = temp__5720__auto___52281;
if(cljs.core.chunked_seq_QMARK_(seq__51773_52284__$1)){
var c__4550__auto___52285 = cljs.core.chunk_first(seq__51773_52284__$1);
var G__52286 = cljs.core.chunk_rest(seq__51773_52284__$1);
var G__52287 = c__4550__auto___52285;
var G__52288 = cljs.core.count(c__4550__auto___52285);
var G__52289 = (0);
seq__51773_52270 = G__52286;
chunk__51774_52271 = G__52287;
count__51775_52272 = G__52288;
i__51776_52273 = G__52289;
continue;
} else {
var dep_52294 = cljs.core.first(seq__51773_52284__$1);
cells.linked_graph.un_depend_BANG_(cell,dep_52294);


var G__52295 = cljs.core.next(seq__51773_52284__$1);
var G__52297 = null;
var G__52298 = (0);
var G__52299 = (0);
seq__51773_52270 = G__52295;
chunk__51774_52271 = G__52297;
count__51775_52272 = G__52298;
i__51776_52273 = G__52299;
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
var f = (function (){var obj51788 = (function (){var obj51786 = cell;
var k51787 = goog.reflect.objectProperty("state",obj51786);
if((function (){var obj51790 = obj51786;
return (((!((obj51790 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51787,obj51790)));
})()){
return (obj51786[k51787]);
} else {
return undefined;
}
})();
var k51789 = goog.reflect.objectProperty("f",obj51788);
if((function (){var obj51791 = obj51788;
return (((!((obj51791 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51789,obj51791)));
})()){
return (obj51788[k51789]);
} else {
return undefined;
}
})();
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cell) : f.call(null,cell));
}catch (e51792){var e = e51792;
cells.cell.dispose_BANG_(cell);

return cells.cell.error_BANG_(cell,e);
}});
cells.cell._STAR_to_evaluate_STAR_ = null;
cells.cell._STAR_changed_STAR_ = null;
cells.cell._STAR_evaluated_STAR_ = null;
cells.cell.eval_and_set_BANG_ = (function cells$cell$eval_and_set_BANG_(cell){
if((cell === cells.cell._STAR_self_STAR_)){
} else {
var _STAR_self_STAR__orig_val__51793_52311 = cells.cell._STAR_self_STAR_;
var _STAR_read_log_STAR__orig_val__51794_52312 = cells.cell._STAR_read_log_STAR_;
var _STAR_self_STAR__temp_val__51795_52313 = cell;
var _STAR_read_log_STAR__temp_val__51796_52314 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__51795_52313;

cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__temp_val__51796_52314;

try{cells.cell.dispose_BANG_(cell);

var value_52315 = cells.cell.eval_cell(cell);
var next_deps_52316 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cells.cell._STAR_read_log_STAR_),cell);
cells.linked_graph.transition_deps_BANG_(cell,next_deps_52316);

cljs.core._reset_BANG_(cell,value_52315);
}finally {cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__orig_val__51794_52312;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__51793_52311;
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
var _STAR_to_evaluate_STAR__orig_val__51797 = cells.cell._STAR_to_evaluate_STAR_;
var _STAR_changed_STAR__orig_val__51798 = cells.cell._STAR_changed_STAR_;
var _STAR_evaluated_STAR__orig_val__51799 = cells.cell._STAR_evaluated_STAR_;
var _STAR_to_evaluate_STAR__temp_val__51800 = cljs.core.volatile_BANG_(cljs.core.vec(cells.linked_graph.immediate_dependents(cell)));
var _STAR_changed_STAR__temp_val__51801 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.createAsIfByAssoc([cell]));
var _STAR_evaluated_STAR__temp_val__51802 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
cells.cell._STAR_to_evaluate_STAR_ = _STAR_to_evaluate_STAR__temp_val__51800;

cells.cell._STAR_changed_STAR_ = _STAR_changed_STAR__temp_val__51801;

cells.cell._STAR_evaluated_STAR_ = _STAR_evaluated_STAR__temp_val__51802;

try{var i_52323 = (0);
while(true){
var temp__5724__auto___52324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cells.cell._STAR_to_evaluate_STAR_),i_52323,null);
if((temp__5724__auto___52324 == null)){
} else {
var cell_52325__$1 = temp__5724__auto___52324;
if(((cljs.core.not((function (){var fexpr__51805 = cljs.core.deref(cells.cell._STAR_changed_STAR_);
return (fexpr__51805.cljs$core$IFn$_invoke$arity$1 ? fexpr__51805.cljs$core$IFn$_invoke$arity$1(cell_52325__$1) : fexpr__51805.call(null,cell_52325__$1));
})())) && (cljs.core.not((function (){var fexpr__51824 = cljs.core.deref(cells.cell._STAR_evaluated_STAR_);
return (fexpr__51824.cljs$core$IFn$_invoke$arity$1 ? fexpr__51824.cljs$core$IFn$_invoke$arity$1(cell_52325__$1) : fexpr__51824.call(null,cell_52325__$1));
})())))){
cljs.core._vreset_BANG_(cells.cell._STAR_evaluated_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cells.cell._STAR_evaluated_STAR_),cell_52325__$1));

cells.cell.eval_and_set_BANG_(cell_52325__$1);
} else {
}

var G__52329 = (i_52323 + (1));
i_52323 = G__52329;
continue;
}
break;
}

return cljs.core.deref(cells.cell._STAR_changed_STAR_);
}finally {cells.cell._STAR_evaluated_STAR_ = _STAR_evaluated_STAR__orig_val__51799;

cells.cell._STAR_changed_STAR_ = _STAR_changed_STAR__orig_val__51798;

cells.cell._STAR_to_evaluate_STAR_ = _STAR_to_evaluate_STAR__orig_val__51797;
}});
cells.cell.mark_changed_BANG_ = (function cells$cell$mark_changed_BANG_(cell){
if((cells.cell._STAR_to_evaluate_STAR_ == null)){
var seq__51833_52331 = cljs.core.seq(cells.cell.stabilize_BANG_(cell));
var chunk__51834_52332 = null;
var count__51835_52333 = (0);
var i__51836_52334 = (0);
while(true){
if((i__51836_52334 < count__51835_52333)){
var changed_52345 = chunk__51834_52332.cljs$core$IIndexed$_nth$arity$2(null,i__51836_52334);
cells.cell.notify_watches(changed_52345);


var G__52350 = seq__51833_52331;
var G__52351 = chunk__51834_52332;
var G__52352 = count__51835_52333;
var G__52353 = (i__51836_52334 + (1));
seq__51833_52331 = G__52350;
chunk__51834_52332 = G__52351;
count__51835_52333 = G__52352;
i__51836_52334 = G__52353;
continue;
} else {
var temp__5720__auto___52354 = cljs.core.seq(seq__51833_52331);
if(temp__5720__auto___52354){
var seq__51833_52359__$1 = temp__5720__auto___52354;
if(cljs.core.chunked_seq_QMARK_(seq__51833_52359__$1)){
var c__4550__auto___52362 = cljs.core.chunk_first(seq__51833_52359__$1);
var G__52363 = cljs.core.chunk_rest(seq__51833_52359__$1);
var G__52364 = c__4550__auto___52362;
var G__52365 = cljs.core.count(c__4550__auto___52362);
var G__52366 = (0);
seq__51833_52331 = G__52363;
chunk__51834_52332 = G__52364;
count__51835_52333 = G__52365;
i__51836_52334 = G__52366;
continue;
} else {
var changed_52367 = cljs.core.first(seq__51833_52359__$1);
cells.cell.notify_watches(changed_52367);


var G__52368 = cljs.core.next(seq__51833_52359__$1);
var G__52369 = null;
var G__52370 = (0);
var G__52371 = (0);
seq__51833_52331 = G__52368;
chunk__51834_52332 = G__52369;
count__51835_52333 = G__52370;
i__51836_52334 = G__52371;
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
var fexpr__51857 = cells.cell.view_fn(cell);
return (fexpr__51857.cljs$core$IFn$_invoke$arity$1 ? fexpr__51857.cljs$core$IFn$_invoke$arity$1(cell) : fexpr__51857.call(null,cell));
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
var oldval_52408 = self__.state.value;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldval_52408,newval)){
var obj51886_52409 = self__.state;
var obj51887_52410 = (((!((obj51886_52409 == null))))?obj51886_52409:({}));
obj51887_52410.value = newval;


cells.cell.mark_changed_BANG_(this$__$1);
} else {
}

return newval;
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__51898 = (function (){var obj51901 = (function (){var obj51899 = this$__$1;
var k51900 = goog.reflect.objectProperty("state",obj51899);
if((function (){var obj51905 = obj51899;
return (((!((obj51905 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51900,obj51905)));
})()){
return (obj51899[k51900]);
} else {
return undefined;
}
})();
var k51902 = goog.reflect.objectProperty("value",obj51901);
if((function (){var obj51914 = obj51901;
return (((!((obj51914 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51902,obj51914)));
})()){
return (obj51901[k51902]);
} else {
return undefined;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51898) : f.call(null,G__51898));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__51920 = (function (){var obj51924 = (function (){var obj51922 = this$__$1;
var k51923 = goog.reflect.objectProperty("state",obj51922);
if((function (){var obj51926 = obj51922;
return (((!((obj51926 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51923,obj51926)));
})()){
return (obj51922[k51923]);
} else {
return undefined;
}
})();
var k51925 = goog.reflect.objectProperty("value",obj51924);
if((function (){var obj51928 = obj51924;
return (((!((obj51928 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51925,obj51928)));
})()){
return (obj51924[k51925]);
} else {
return undefined;
}
})();
var G__51921 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__51920,G__51921) : f.call(null,G__51920,G__51921));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__51929 = (function (){var obj51936 = (function (){var obj51934 = this$__$1;
var k51935 = goog.reflect.objectProperty("state",obj51934);
if((function (){var obj51938 = obj51934;
return (((!((obj51938 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51935,obj51938)));
})()){
return (obj51934[k51935]);
} else {
return undefined;
}
})();
var k51937 = goog.reflect.objectProperty("value",obj51936);
if((function (){var obj51940 = obj51936;
return (((!((obj51940 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51937,obj51940)));
})()){
return (obj51936[k51937]);
} else {
return undefined;
}
})();
var G__51930 = a;
var G__51931 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__51929,G__51930,G__51931) : f.call(null,G__51929,G__51930,G__51931));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(function (){var obj51947 = (function (){var obj51945 = this$__$1;
var k51946 = goog.reflect.objectProperty("state",obj51945);
if((function (){var obj51951 = obj51945;
return (((!((obj51951 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51946,obj51951)));
})()){
return (obj51945[k51946]);
} else {
return undefined;
}
})();
var k51948 = goog.reflect.objectProperty("value",obj51947);
if((function (){var obj51952 = obj51947;
return (((!((obj51952 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51948,obj51952)));
})()){
return (obj51947[k51948]);
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
var seq__51973 = cljs.core.seq(cljs.core.vals(self__.state.watches));
var chunk__51974 = null;
var count__51975 = (0);
var i__51976 = (0);
while(true){
if((i__51976 < count__51975)){
var f = chunk__51974.cljs$core$IIndexed$_nth$arity$2(null,i__51976);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f.call(null,this$__$1,oldval,newval));


var G__52458 = seq__51973;
var G__52459 = chunk__51974;
var G__52460 = count__51975;
var G__52461 = (i__51976 + (1));
seq__51973 = G__52458;
chunk__51974 = G__52459;
count__51975 = G__52460;
i__51976 = G__52461;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51973);
if(temp__5720__auto__){
var seq__51973__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51973__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51973__$1);
var G__52466 = cljs.core.chunk_rest(seq__51973__$1);
var G__52467 = c__4550__auto__;
var G__52468 = cljs.core.count(c__4550__auto__);
var G__52469 = (0);
seq__51973 = G__52466;
chunk__51974 = G__52467;
count__51975 = G__52468;
i__51976 = G__52469;
continue;
} else {
var f = cljs.core.first(seq__51973__$1);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f.call(null,this$__$1,oldval,newval));


var G__52475 = cljs.core.next(seq__51973__$1);
var G__52476 = null;
var G__52477 = (0);
var G__52478 = (0);
seq__51973 = G__52475;
chunk__51974 = G__52476;
count__51975 = G__52477;
i__51976 = G__52478;
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
var o__20067__auto__ = self__.state;
var o__20061__auto__ = (((!((o__20067__auto__ == null))))?o__20067__auto__:({}));
var obj51997 = o__20061__auto__;
obj51997.watches = (function (){var G__51999 = o__20061__auto__.watches;
var G__52000 = key;
var G__52001 = f;
var fexpr__51998 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY);
return (fexpr__51998.cljs$core$IFn$_invoke$arity$3 ? fexpr__51998.cljs$core$IFn$_invoke$arity$3(G__51999,G__52000,G__52001) : fexpr__51998.call(null,G__51999,G__52000,G__52001));
})();

return obj51997;
});

cells.cell.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var o__20067__auto___52493 = self__.state;
var o__20061__auto___52494 = (((!((o__20067__auto___52493 == null))))?o__20067__auto___52493:({}));
var obj52013_52498 = o__20061__auto___52494;
obj52013_52498.watches = cells.cell.dissoc_empty(o__20061__auto___52494.watches,key);


return cells.cell.maybe_deactivate(this$__$1);
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$add_dependency_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__20067__auto__ = self__.state;
var o__20061__auto__ = (((!((o__20067__auto__ == null))))?o__20067__auto__:({}));
var obj52055 = o__20061__auto__;
obj52055.dependencies = (function (){var G__52056 = o__20061__auto__.dependencies;
var G__52057 = dep;
return (cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2 ? cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2(G__52056,G__52057) : cells.cell.set_conj.call(null,G__52056,G__52057));
})();

return obj52055;
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$remove_dependency_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__20067__auto__ = self__.state;
var o__20061__auto__ = (((!((o__20067__auto__ == null))))?o__20067__auto__:({}));
var obj52070 = o__20061__auto__;
obj52070.dependencies = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(o__20061__auto__.dependencies,dep);

return obj52070;
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$add_dependent_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__20067__auto__ = self__.state;
var o__20061__auto__ = (((!((o__20067__auto__ == null))))?o__20067__auto__:({}));
var obj52079 = o__20061__auto__;
obj52079.dependents = (function (){var G__52080 = o__20061__auto__.dependents;
var G__52081 = dep;
return (cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2 ? cells.cell.set_conj.cljs$core$IFn$_invoke$arity$2(G__52080,G__52081) : cells.cell.set_conj.call(null,G__52080,G__52081));
})();

return obj52079;
});

cells.cell.Cell.prototype.cells$linked_graph$ILinkedGraph$remove_dependent_BANG_$arity$2 = (function (this$,dep){
var self__ = this;
var this$__$1 = this;
var o__20067__auto___52509 = self__.state;
var o__20061__auto___52510 = (((!((o__20067__auto___52509 == null))))?o__20067__auto___52509:({}));
var obj52101_52513 = o__20061__auto___52510;
obj52101_52513.dependents = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(o__20061__auto___52510.dependents,dep);


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
var obj52109_52519 = cell.state;
var obj52116_52520 = (function (){var obj52117 = (((!((obj52109_52519 == null))))?obj52109_52519:({}));
obj52117.f = f;

return obj52117;
})();
obj52116_52520.value = null;


return cells.cell.eval_and_set_BANG_(cell);
});
/**
 * Returns cell for function `f`. Optional `memo-key`, a string, will cause cell to
 * be memoized on the currently-evaluating cell or reactive reader.
 */
cells.cell.cell_STAR_ = (function cells$cell$cell_STAR_(var_args){
var G__52138 = arguments.length;
switch (G__52138) {
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
var or__4131__auto__ = (function (){var obj52163 = owner;
var k52164 = applied_science.js_interop.impl.wrap_key(memo_key);
if((function (){var obj52165 = obj52163;
return (((!((obj52165 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52164,obj52165)));
})()){
return (obj52163[k52164]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__52166 = cells.cell.make_cell(f,owner);
var obj52173_52527 = owner;
var obj52174_52528 = (((!((obj52173_52527 == null))))?obj52173_52527:({}));
(obj52174_52528[applied_science.js_interop.impl.wrap_key(memo_key)] = G__52166);


return G__52166;
}
} else {
return cells.cell.make_cell(f,owner);
}
});

cells.cell.cell_STAR_.cljs$lang$maxFixedArity = 2;

cells.cell.cell = (function cells$cell$cell(key,value){

return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(value),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(key))].join(''));
});
cells.cell.immediate_dependencies = cells.linked_graph.immediate_dependencies;
cells.cell.immediate_dependents = cells.linked_graph.immediate_dependents;
cells.cell.dependencies = cells.linked_graph.dependencies;
cells.cell.dependents = cells.linked_graph.dependents;
