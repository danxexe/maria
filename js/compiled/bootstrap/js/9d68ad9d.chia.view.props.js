goog.provide('chia.view.props');
chia.view.props.update_change_prop = (function chia$view$props$update_change_prop(props){
var G__49470 = props;
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49470,new cljs.core.Keyword(null,"on-change","on-change",-732046149),chia.view.render_loop.apply_sync_BANG_);
} else {
return G__49470;
}
});
/**
 * Wraps :on-change handlers of text inputs to apply changes synchronously.
 */
chia.view.props.wrap_props = (function chia$view$props$wrap_props(props,tag){
var G__49474 = props;
if(((("input" === tag)) || (("textarea" === tag)))){
return chia.view.props.update_change_prop(G__49474);
} else {
return G__49474;
}
});
/**
 * Converts hiccup to React element.
 */
chia.view.props.to_element = (function chia$view$props$to_element(x){
return chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),chia.view.props.wrap_props], null),x);
});
/**
 * Converts props map to JavaScript according to `options`.
 * 
 *   ->element-keys: coll of keys to convert to React elements
 *   ->js-keys:      coll of keys to convert to JavaScript via clj->js
 *   lift-nses:      coll of namespaces (as strings), keys of these namespaces
 *                  will be included (all other namespaced keys are elided)
 *   wrap-props:     arbitrary fn to modify props map after other transformations
 */
chia.view.props.adapt_props = (function chia$view$props$adapt_props(p__49475,props){
var map__49476 = p__49475;
var map__49476__$1 = (((((!((map__49476 == null))))?(((((map__49476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49476):map__49476);
var __GT_element_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49476__$1,new cljs.core.Keyword(null,"->element-keys","->element-keys",405521227));
var __GT_js_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49476__$1,new cljs.core.Keyword(null,"->js-keys","->js-keys",-1924936481));
var lift_nses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49476__$1,new cljs.core.Keyword(null,"lift-nses","lift-nses",1912769566));
var wrap_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49476__$1,new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308));
return chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$1(chia.view.props.update_change_prop((function (){var G__49482 = props;
var G__49482__$1 = (cljs.core.truth_(lift_nses)?chia.util.lift_nses(G__49482,lift_nses):G__49482);
var G__49482__$2 = (cljs.core.truth_(__GT_element_keys)?chia.util.update_some_keys(G__49482__$1,__GT_element_keys,chia.view.props.to_element):G__49482__$1);
var G__49482__$3 = (cljs.core.truth_(__GT_js_keys)?chia.util.update_some_keys(G__49482__$2,__GT_js_keys,cljs.core.clj__GT_js):G__49482__$2);
if(cljs.core.truth_(wrap_props)){
return (wrap_props.cljs$core$IFn$_invoke$arity$1 ? wrap_props.cljs$core$IFn$_invoke$arity$1(G__49482__$3) : wrap_props.call(null,G__49482__$3));
} else {
return G__49482__$3;
}
})()));
});
/**
 * Merge props, concatenating :class props and merging styles.
 */
chia.view.props.merge_props = (function chia$view$props$merge_props(m1,m2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m1,m2,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__49484_SHARP_,p2__49485_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49484_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__49485_SHARP_)].join('');
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.select_keys(m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null))], 0)),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.select_keys(m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], 0));
});
/**
 * Partially applies props to view. Keys will be merged with other props.
 */
chia.view.props.partial = (function chia$view$props$partial(view,initial_props){
return (function() { 
var G__49533__delegate = function (props,children){
var vec__49508 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49508,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49508,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,chia.view.props.merge_props(initial_props,props__$1)], null),children__$1);
};
var G__49533 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__49536__i = 0, G__49536__a = new Array(arguments.length -  1);
while (G__49536__i < G__49536__a.length) {G__49536__a[G__49536__i] = arguments[G__49536__i + 1]; ++G__49536__i;}
  children = new cljs.core.IndexedSeq(G__49536__a,0,null);
} 
return G__49533__delegate.call(this,props,children);};
G__49533.cljs$lang$maxFixedArity = 1;
G__49533.cljs$lang$applyTo = (function (arglist__49537){
var props = cljs.core.first(arglist__49537);
var children = cljs.core.rest(arglist__49537);
return G__49533__delegate(props,children);
});
G__49533.cljs$core$IFn$_invoke$arity$variadic = G__49533__delegate;
return G__49533;
})()
;
});
