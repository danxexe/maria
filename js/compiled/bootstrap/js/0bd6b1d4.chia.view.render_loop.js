goog.provide('chia.view.render_loop');
chia.view.render_loop._batch = module$node_modules$react_dom$index.unstable_batchedUpdates;
chia.view.render_loop._raf = (function (){var or__4131__auto__ = (function (){var obj49381 = window;
var k49382 = "requestAnimationFrame";
if((function (){var obj49383 = obj49381;
return (((!((obj49383 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49382,obj49383)));
})()){
return (obj49381[k49382]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var obj49387 = window;
var k49388 = "webkitRequestAnimationFrame";
if((function (){var obj49389 = obj49387;
return (((!((obj49389 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49388,obj49389)));
})()){
return (obj49387[k49388]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var obj49393 = window;
var k49394 = "mozRequestAnimationFrame";
if((function (){var obj49395 = obj49393;
return (((!((obj49395 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49394,obj49395)));
})()){
return (obj49393[k49394]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = (function (){var obj49399 = window;
var k49400 = "oRequestAnimationFrame";
if((function (){var obj49401 = obj49399;
return (((!((obj49401 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49400,obj49401)));
})()){
return (obj49399[k49400]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
var or__4131__auto____$4 = (function (){var obj49405 = window;
var k49406 = "msRequestAnimationFrame";
if((function (){var obj49407 = obj49405;
return (((!((obj49407 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49406,obj49407)));
})()){
return (obj49405[k49406]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto____$4)){
return or__4131__auto____$4;
} else {
return ((function (or__4131__auto____$4,or__4131__auto____$3,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__){
return (function (cb){
return setTimeout(cb,((1000) / (60)));
});
;})(or__4131__auto____$4,or__4131__auto____$3,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__))
}
}
}
}
}
})();
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.render_loop !== 'undefined') && (typeof chia.view.render_loop._STAR_immediate_updates_STAR_ !== 'undefined')){
} else {
chia.view.render_loop._STAR_immediate_updates_STAR_ = false;
}
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.render_loop !== 'undefined') && (typeof chia.view.render_loop.to_render !== 'undefined')){
} else {
chia.view.render_loop.to_render = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
chia.view.render_loop.dequeue_BANG_ = (function chia$view$render_loop$dequeue_BANG_(view){
var obj49408 = view;
var obj49409 = (((!((obj49408 == null))))?obj49408:({}));
obj49409.chia$toUpdate = false;

return obj49409;
});
chia.view.render_loop.flush_STAR_ = (function chia$view$render_loop$flush_STAR_(){
var temp__5720__auto__ = cljs.core.seq(cljs.core.deref(chia.view.render_loop.to_render));
if(temp__5720__auto__){
var views = temp__5720__auto__;
cljs.core.vreset_BANG_(chia.view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__49412 = cljs.core.seq(views);
var chunk__49413 = null;
var count__49414 = (0);
var i__49415 = (0);
while(true){
if((i__49415 < count__49414)){
var c = chunk__49413.cljs$core$IIndexed$_nth$arity$2(null,i__49415);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var obj49449 = c;
var k49450 = goog.reflect.objectProperty("chia$toUpdate",obj49449);
if((function (){var obj49451 = obj49449;
return (((!((obj49451 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49450,obj49451)));
})()){
return (obj49449[k49450]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var obj49452 = c;
var k49453 = goog.reflect.objectProperty("chia$unmounted",obj49452);
if((function (){var obj49454 = obj49452;
return (((!((obj49454 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49453,obj49454)));
})()){
return (obj49452[k49453]);
} else {
return undefined;
}
})());
} else {
return and__4120__auto__;
}
})())){
var obj__20089__auto___49497 = c;
var f__20090__auto___49498 = (obj__20089__auto___49497["forceUpdate"]);
f__20090__auto___49498.call(obj__20089__auto___49497);
} else {
}


var G__49499 = seq__49412;
var G__49500 = chunk__49413;
var G__49501 = count__49414;
var G__49502 = (i__49415 + (1));
seq__49412 = G__49499;
chunk__49413 = G__49500;
count__49414 = G__49501;
i__49415 = G__49502;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__49412);
if(temp__5720__auto____$1){
var seq__49412__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49412__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49412__$1);
var G__49503 = cljs.core.chunk_rest(seq__49412__$1);
var G__49504 = c__4550__auto__;
var G__49505 = cljs.core.count(c__4550__auto__);
var G__49506 = (0);
seq__49412 = G__49503;
chunk__49413 = G__49504;
count__49414 = G__49505;
i__49415 = G__49506;
continue;
} else {
var c = cljs.core.first(seq__49412__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var obj49458 = c;
var k49459 = goog.reflect.objectProperty("chia$toUpdate",obj49458);
if((function (){var obj49460 = obj49458;
return (((!((obj49460 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49459,obj49460)));
})()){
return (obj49458[k49459]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var obj49461 = c;
var k49462 = goog.reflect.objectProperty("chia$unmounted",obj49461);
if((function (){var obj49463 = obj49461;
return (((!((obj49463 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49462,obj49463)));
})()){
return (obj49461[k49462]);
} else {
return undefined;
}
})());
} else {
return and__4120__auto__;
}
})())){
var obj__20089__auto___49511 = c;
var f__20090__auto___49512 = (obj__20089__auto___49511["forceUpdate"]);
f__20090__auto___49512.call(obj__20089__auto___49511);
} else {
}


var G__49513 = cljs.core.next(seq__49412__$1);
var G__49514 = null;
var G__49515 = (0);
var G__49516 = (0);
seq__49412 = G__49513;
chunk__49413 = G__49514;
count__49414 = G__49515;
i__49415 = G__49516;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Render all queued updates immediately.
 */
chia.view.render_loop.flush_BANG_ = (function chia$view$render_loop$flush_BANG_(){
return (chia.view.render_loop._batch.cljs$core$IFn$_invoke$arity$1 ? chia.view.render_loop._batch.cljs$core$IFn$_invoke$arity$1(chia.view.render_loop.flush_STAR_) : chia.view.render_loop._batch.call(null,chia.view.render_loop.flush_STAR_));
});
/**
 * Force-updates `view` immediately.
 */
chia.view.render_loop.force_update = (function chia$view$render_loop$force_update(view){
chia.view.render_loop.to_render.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(chia.view.render_loop.to_render.cljs$core$IDeref$_deref$arity$1(null),view));

var obj__20089__auto__ = view;
var f__20090__auto__ = (obj__20089__auto__["forceUpdate"]);
return f__20090__auto__.call(obj__20089__auto__);
});
chia.view.render_loop.schedule_update_BANG_ = (function chia$view$render_loop$schedule_update_BANG_(view){

if(chia.view.render_loop._STAR_immediate_updates_STAR_ === true){
return chia.view.render_loop.force_update(view);
} else {
var obj49465_49519 = view;
var obj49466_49520 = (((!((obj49465_49519 == null))))?obj49465_49519:({}));
obj49466_49520.chia$toUpdate = true;


chia.view.render_loop.to_render.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chia.view.render_loop.to_render.cljs$core$IDeref$_deref$arity$1(null),view));

return (chia.view.render_loop._raf.cljs$core$IFn$_invoke$arity$1 ? chia.view.render_loop._raf.cljs$core$IFn$_invoke$arity$1(chia.view.render_loop.flush_BANG_) : chia.view.render_loop._raf.call(null,chia.view.render_loop.flush_BANG_));
}
});
/**
 * Wraps function `f` to flush the render loop before returning.
 */
chia.view.render_loop.apply_sync_BANG_ = (function chia$view$render_loop$apply_sync_BANG_(f){
return (function() { 
var G__49530__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
chia.view.render_loop.flush_BANG_();

return result;
};
var G__49530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49531__i = 0, G__49531__a = new Array(arguments.length -  0);
while (G__49531__i < G__49531__a.length) {G__49531__a[G__49531__i] = arguments[G__49531__i + 0]; ++G__49531__i;}
  args = new cljs.core.IndexedSeq(G__49531__a,0,null);
} 
return G__49530__delegate.call(this,args);};
G__49530.cljs$lang$maxFixedArity = 0;
G__49530.cljs$lang$applyTo = (function (arglist__49532){
var args = cljs.core.seq(arglist__49532);
return G__49530__delegate(args);
});
G__49530.cljs$core$IFn$_invoke$arity$variadic = G__49530__delegate;
return G__49530;
})()
;
});
