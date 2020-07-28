goog.provide('chia.view.impl');
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
var G__49342 = node_or_id;
if(typeof node_or_id === 'string'){
return document.getElementById(G__49342);
} else {
return G__49342;
}
});
chia.view.impl.kw_context_cache = cljs.core.memoize((function (k){
return module$node_modules$react$index.createContext();
}));
chia.view.impl.lookup_context = (function chia$view$impl$lookup_context(k){

if(cljs.core.object_QMARK_(k)){
return k;
} else {
return (chia.view.impl.kw_context_cache.cljs$core$IFn$_invoke$arity$1 ? chia.view.impl.kw_context_cache.cljs$core$IFn$_invoke$arity$1(k) : chia.view.impl.kw_context_cache.call(null,k));
}
});
chia.view.impl.args_not_EQ_ = (function chia$view$impl$args_not_EQ_(x,y){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj49350 = x;
var k49351 = "children";
if((function (){var obj49352 = obj49350;
return (((!((obj49352 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49351,obj49352)));
})()){
return (obj49350[k49351]);
} else {
return undefined;
}
})(),(function (){var obj49353 = y;
var k49354 = "children";
if((function (){var obj49355 = obj49353;
return (((!((obj49355 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49354,obj49355)));
})()){
return (obj49353[k49354]);
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
var G__49361 = arguments.length;
switch (G__49361) {
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
var G__49362 = f;
var G__49363 = ((function (G__49362){
return (function chia$view$impl$use_last_value_QMARK_(x,y){
if(chia.view.registry._STAR_reload_STAR_){
return false;
} else {
return cljs.core.not((function (){var G__49368 = (function (){var obj49370 = x;
var k49371 = "children";
if((function (){var obj49372 = obj49370;
return (((!((obj49372 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49371,obj49372)));
})()){
return (obj49370[k49371]);
} else {
return undefined;
}
})();
var G__49369 = (function (){var obj49373 = y;
var k49374 = "children";
if((function (){var obj49375 = obj49373;
return (((!((obj49375 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49374,obj49375)));
})()){
return (obj49373[k49374]);
} else {
return undefined;
}
})();
return (should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 ? should_update_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49368,G__49369) : should_update_QMARK_.call(null,G__49368,G__49369));
})());
}
});})(G__49362))
;
return (chia.view.impl._memoize_view.cljs$core$IFn$_invoke$arity$2 ? chia.view.impl._memoize_view.cljs$core$IFn$_invoke$arity$2(G__49362,G__49363) : chia.view.impl._memoize_view.call(null,G__49362,G__49363));
});

chia.view.impl.memoize_view.cljs$lang$maxFixedArity = 2;

