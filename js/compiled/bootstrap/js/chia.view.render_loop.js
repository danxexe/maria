goog.provide('chia.view.render_loop');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('applied_science.js_interop');
goog.require('chia.view.fps');
goog.require('chia.view.impl');
goog.require('chia.util');
chia.view.render_loop._batch = module$node_modules$react_dom$index.unstable_batchedUpdates;
chia.view.render_loop._raf = (function (){var or__4131__auto__ = (function (){var obj65668 = window;
var k65669 = "requestAnimationFrame";
if((function (){var obj65670 = obj65668;
return (((!((obj65670 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65669,obj65670)));
})()){
return (obj65668[k65669]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var obj65675 = window;
var k65676 = "webkitRequestAnimationFrame";
if((function (){var obj65677 = obj65675;
return (((!((obj65677 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65676,obj65677)));
})()){
return (obj65675[k65676]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var obj65681 = window;
var k65682 = "mozRequestAnimationFrame";
if((function (){var obj65683 = obj65681;
return (((!((obj65683 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65682,obj65683)));
})()){
return (obj65681[k65682]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = (function (){var obj65687 = window;
var k65688 = "oRequestAnimationFrame";
if((function (){var obj65689 = obj65687;
return (((!((obj65689 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65688,obj65689)));
})()){
return (obj65687[k65688]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
var or__4131__auto____$4 = (function (){var obj65693 = window;
var k65694 = "msRequestAnimationFrame";
if((function (){var obj65695 = obj65693;
return (((!((obj65695 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65694,obj65695)));
})()){
return (obj65693[k65694]);
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
var obj65696 = view;
var obj65697 = (((!((obj65696 == null))))?obj65696:({}));
obj65697.chia$toUpdate = false;

return obj65697;
});
chia.view.render_loop.flush_STAR_ = (function chia$view$render_loop$flush_STAR_(){
var temp__5720__auto__ = cljs.core.seq(cljs.core.deref(chia.view.render_loop.to_render));
if(temp__5720__auto__){
var views = temp__5720__auto__;
cljs.core.vreset_BANG_(chia.view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__65700 = cljs.core.seq(views);
var chunk__65701 = null;
var count__65702 = (0);
var i__65703 = (0);
while(true){
if((i__65703 < count__65702)){
var c = chunk__65701.cljs$core$IIndexed$_nth$arity$2(null,i__65703);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var obj65727 = c;
var k65728 = goog.reflect.objectProperty("chia$toUpdate",obj65727);
if((function (){var obj65729 = obj65727;
return (((!((obj65729 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65728,obj65729)));
})()){
return (obj65727[k65728]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var obj65734 = c;
var k65735 = goog.reflect.objectProperty("chia$unmounted",obj65734);
if((function (){var obj65736 = obj65734;
return (((!((obj65736 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65735,obj65736)));
})()){
return (obj65734[k65735]);
} else {
return undefined;
}
})());
} else {
return and__4120__auto__;
}
})())){
var obj__50657__auto___65765 = c;
var f__50658__auto___65766 = (obj__50657__auto___65765["forceUpdate"]);
f__50658__auto___65766.call(obj__50657__auto___65765);
} else {
}


var G__65767 = seq__65700;
var G__65768 = chunk__65701;
var G__65769 = count__65702;
var G__65770 = (i__65703 + (1));
seq__65700 = G__65767;
chunk__65701 = G__65768;
count__65702 = G__65769;
i__65703 = G__65770;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__65700);
if(temp__5720__auto____$1){
var seq__65700__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__65700__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65700__$1);
var G__65772 = cljs.core.chunk_rest(seq__65700__$1);
var G__65773 = c__4550__auto__;
var G__65774 = cljs.core.count(c__4550__auto__);
var G__65775 = (0);
seq__65700 = G__65772;
chunk__65701 = G__65773;
count__65702 = G__65774;
i__65703 = G__65775;
continue;
} else {
var c = cljs.core.first(seq__65700__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var obj65744 = c;
var k65745 = goog.reflect.objectProperty("chia$toUpdate",obj65744);
if((function (){var obj65746 = obj65744;
return (((!((obj65746 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65745,obj65746)));
})()){
return (obj65744[k65745]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var obj65747 = c;
var k65748 = goog.reflect.objectProperty("chia$unmounted",obj65747);
if((function (){var obj65749 = obj65747;
return (((!((obj65749 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65748,obj65749)));
})()){
return (obj65747[k65748]);
} else {
return undefined;
}
})());
} else {
return and__4120__auto__;
}
})())){
var obj__50657__auto___65778 = c;
var f__50658__auto___65779 = (obj__50657__auto___65778["forceUpdate"]);
f__50658__auto___65779.call(obj__50657__auto___65778);
} else {
}


var G__65780 = cljs.core.next(seq__65700__$1);
var G__65781 = null;
var G__65782 = (0);
var G__65783 = (0);
seq__65700 = G__65780;
chunk__65701 = G__65781;
count__65702 = G__65782;
i__65703 = G__65783;
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

var obj__50657__auto__ = view;
var f__50658__auto__ = (obj__50657__auto__["forceUpdate"]);
return f__50658__auto__.call(obj__50657__auto__);
});
chia.view.render_loop.schedule_update_BANG_ = (function chia$view$render_loop$schedule_update_BANG_(view){

if(chia.view.render_loop._STAR_immediate_updates_STAR_ === true){
return chia.view.render_loop.force_update(view);
} else {
var obj65752_65787 = view;
var obj65753_65788 = (((!((obj65752_65787 == null))))?obj65752_65787:({}));
obj65753_65788.chia$toUpdate = true;


chia.view.render_loop.to_render.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chia.view.render_loop.to_render.cljs$core$IDeref$_deref$arity$1(null),view));

return (chia.view.render_loop._raf.cljs$core$IFn$_invoke$arity$1 ? chia.view.render_loop._raf.cljs$core$IFn$_invoke$arity$1(chia.view.render_loop.flush_BANG_) : chia.view.render_loop._raf.call(null,chia.view.render_loop.flush_BANG_));
}
});
/**
 * Wraps function `f` to flush the render loop before returning.
 */
chia.view.render_loop.apply_sync_BANG_ = (function chia$view$render_loop$apply_sync_BANG_(f){
return (function() { 
var G__65789__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
chia.view.render_loop.flush_BANG_();

return result;
};
var G__65789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65790__i = 0, G__65790__a = new Array(arguments.length -  0);
while (G__65790__i < G__65790__a.length) {G__65790__a[G__65790__i] = arguments[G__65790__i + 0]; ++G__65790__i;}
  args = new cljs.core.IndexedSeq(G__65790__a,0,null);
} 
return G__65789__delegate.call(this,args);};
G__65789.cljs$lang$maxFixedArity = 0;
G__65789.cljs$lang$applyTo = (function (arglist__65791){
var args = cljs.core.seq(arglist__65791);
return G__65789__delegate(args);
});
G__65789.cljs$core$IFn$_invoke$arity$variadic = G__65789__delegate;
return G__65789;
})()
;
});

//# sourceMappingURL=chia.view.render_loop.js.map
