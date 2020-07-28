goog.provide('chia.view.props');
goog.require('cljs.core');
goog.require('chia.util');
goog.require('chia.view.hiccup.impl');
goog.require('chia.view.render_loop');
goog.require('chia.view.hiccup');
chia.view.props.update_change_prop = (function chia$view$props$update_change_prop(props){
var G__65760 = props;
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__65760,new cljs.core.Keyword(null,"on-change","on-change",-732046149),chia.view.render_loop.apply_sync_BANG_);
} else {
return G__65760;
}
});
/**
 * Wraps :on-change handlers of text inputs to apply changes synchronously.
 */
chia.view.props.wrap_props = (function chia$view$props$wrap_props(props,tag){
var G__65761 = props;
if(((("input" === tag)) || (("textarea" === tag)))){
return chia.view.props.update_change_prop(G__65761);
} else {
return G__65761;
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
chia.view.props.adapt_props = (function chia$view$props$adapt_props(p__65762,props){
var map__65763 = p__65762;
var map__65763__$1 = (((((!((map__65763 == null))))?(((((map__65763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65763):map__65763);
var __GT_element_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65763__$1,new cljs.core.Keyword(null,"->element-keys","->element-keys",405521227));
var __GT_js_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65763__$1,new cljs.core.Keyword(null,"->js-keys","->js-keys",-1924936481));
var lift_nses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65763__$1,new cljs.core.Keyword(null,"lift-nses","lift-nses",1912769566));
var wrap_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65763__$1,new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308));
return chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$1(chia.view.props.update_change_prop((function (){var G__65771 = props;
var G__65771__$1 = (cljs.core.truth_(lift_nses)?chia.util.lift_nses(G__65771,lift_nses):G__65771);
var G__65771__$2 = (cljs.core.truth_(__GT_element_keys)?chia.util.update_some_keys(G__65771__$1,__GT_element_keys,chia.view.props.to_element):G__65771__$1);
var G__65771__$3 = (cljs.core.truth_(__GT_js_keys)?chia.util.update_some_keys(G__65771__$2,__GT_js_keys,cljs.core.clj__GT_js):G__65771__$2);
if(cljs.core.truth_(wrap_props)){
return (wrap_props.cljs$core$IFn$_invoke$arity$1 ? wrap_props.cljs$core$IFn$_invoke$arity$1(G__65771__$3) : wrap_props.call(null,G__65771__$3));
} else {
return G__65771__$3;
}
})()));
});
/**
 * Merge props, concatenating :class props and merging styles.
 */
chia.view.props.merge_props = (function chia$view$props$merge_props(m1,m2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m1,m2,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__65776_SHARP_,p2__65777_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65776_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__65777_SHARP_)].join('');
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.select_keys(m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null))], 0)),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.select_keys(m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], 0));
});
/**
 * Partially applies props to view. Keys will be merged with other props.
 */
chia.view.props.partial = (function chia$view$props$partial(view,initial_props){
return (function() { 
var G__65792__delegate = function (props,children){
var vec__65784 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65784,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65784,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,chia.view.props.merge_props(initial_props,props__$1)], null),children__$1);
};
var G__65792 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__65794__i = 0, G__65794__a = new Array(arguments.length -  1);
while (G__65794__i < G__65794__a.length) {G__65794__a[G__65794__i] = arguments[G__65794__i + 1]; ++G__65794__i;}
  children = new cljs.core.IndexedSeq(G__65794__a,0,null);
} 
return G__65792__delegate.call(this,props,children);};
G__65792.cljs$lang$maxFixedArity = 1;
G__65792.cljs$lang$applyTo = (function (arglist__65795){
var props = cljs.core.first(arglist__65795);
var children = cljs.core.rest(arglist__65795);
return G__65792__delegate(props,children);
});
G__65792.cljs$core$IFn$_invoke$arity$variadic = G__65792__delegate;
return G__65792;
})()
;
});

//# sourceMappingURL=chia.view.props.js.map
