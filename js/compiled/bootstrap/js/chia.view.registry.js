goog.provide('chia.view.registry');
goog.require('cljs.core');
/**
 * When true, all components re-render, regardless of shouldComponentUpdate.
 */
chia.view.registry._STAR_reload_STAR_ = false;
/**
 * Increments at each reload. Use to invalidate caches.
 */
chia.view.registry.reload_count = cljs.core.volatile_BANG_((0));
chia.view.registry.reload_count_BANG_ = (function chia$view$registry$reload_count_BANG_(){
return chia.view.registry.reload_count.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(chia.view.registry.reload_count.cljs$core$IDeref$_deref$arity$1(null) + (1)));
});

//# sourceMappingURL=chia.view.registry.js.map
