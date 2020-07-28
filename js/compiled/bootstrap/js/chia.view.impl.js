goog.provide('chia.view.impl');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('applied_science.js_interop');
goog.require('chia.reactive');
goog.require('chia.view.registry');
chia.view.impl.wrap_effect = (function chia$view$impl$wrap_effect(f){
return (function (){
var destroy = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(destroy)){
return destroy;
} else {
return undefined;
}
});
});
chia.view.impl._render = module$node_modules$react_dom$index.render;
chia.view.impl._unmount_component_at_node = module$node_modules$react_dom$index.unmountComponentAtNode;
chia.view.impl.resolve_node = (function chia$view$impl$resolve_node(node_or_id){
var G__65637 = node_or_id;
if(typeof node_or_id === 'string'){
return document.getElementById(G__65637);
} else {
return G__65637;
}
});
chia.view.impl.kw_context_cache = cljs.core.memoize((function (k){
return module$node_modules$react$index.createContext();
}));
chia.view.impl.lookup_context = (function chia$view$impl$lookup_context(k){
if(((cljs.core.object_QMARK_(k)) || (cljs.core.qualified_keyword_QMARK_(k)))){
} else {
throw (new Error("Assert failed: (or (object? k) (qualified-keyword? k))"));
}

if(cljs.core.object_QMARK_(k)){
return k;
} else {
return (chia.view.impl.kw_context_cache.cljs$core$IFn$_invoke$arity$1 ? chia.view.impl.kw_context_cache.cljs$core$IFn$_invoke$arity$1(k) : chia.view.impl.kw_context_cache.call(null,k));
}
});
chia.view.impl.args_not_EQ_ = (function chia$view$impl$args_not_EQ_(x,y){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj65646 = x;
var k65647 = "children";
if((function (){var obj65648 = obj65646;
return (((!((obj65648 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65647,obj65648)));
})()){
return (obj65646[k65647]);
} else {
return undefined;
}
})(),(function (){var obj65649 = y;
var k65650 = "children";
if((function (){var obj65651 = obj65649;
return (((!((obj65651 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65650,obj65651)));
})()){
return (obj65649[k65650]);
} else {
return undefined;
}
})());
});
chia.view.impl._memoize_view = ((cljs.core.fn_QMARK_(module$node_modules$react$index.memo))?module$node_modules$react$index.memo:cljs.core.identity);
/**
 * Returns a memoized version of view `f` with optional `should-update?` function.
 * 
 *   - By default, arguments are compared with cljs equality.
 *   - During dev reload, all components re-render.
 *   - A no-op in node.js
 */
chia.view.impl.memoize_view = (function chia$view$impl$memoize_view(var_args){
var G__65654 = arguments.length;
switch (G__65654) {
case 1:
return chia.view.impl.memoize_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.view.impl.memoize_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.impl.memoize_view.cljs$core$IFn$_invoke$arity$1 = (function (f){
return chia.view.impl.memoize_view.cljs$core$IFn$_invoke$arity$2(f,chia.view.impl.args_not_EQ_);
});

chia.view.impl.memoize_view.cljs$core$IFn$_invoke$arity$2 = (function (f,should_update_QMARK_){
var G__65655 = f;
var G__65656 = ((function (G__65655){
return (function chia$view$impl$use_last_value_QMARK_(x,y){
if(chia.view.registry._STAR_reload_STAR_){
return false;
} else {
return cljs.core.not((function (){var G__65657 = (function (){var obj65659 = x;
var k65660 = "children";
if((function (){var obj65661 = obj65659;
return (((!((obj65661 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65660,obj65661)));
})()){
return (obj65659[k65660]);
} else {
return undefined;
}
})();
var G__65658 = (function (){var obj65662 = y;
var k65663 = "children";
if((function (){var obj65664 = obj65662;
return (((!((obj65664 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65663,obj65664)));
})()){
return (obj65662[k65663]);
} else {
return undefined;
}
})();
return (should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 ? should_update_QMARK_.cljs$core$IFn$_invoke$arity$2(G__65657,G__65658) : should_update_QMARK_.call(null,G__65657,G__65658));
})());
}
});})(G__65655))
;
return (chia.view.impl._memoize_view.cljs$core$IFn$_invoke$arity$2 ? chia.view.impl._memoize_view.cljs$core$IFn$_invoke$arity$2(G__65655,G__65656) : chia.view.impl._memoize_view.call(null,G__65655,G__65656));
});

chia.view.impl.memoize_view.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=chia.view.impl.js.map
