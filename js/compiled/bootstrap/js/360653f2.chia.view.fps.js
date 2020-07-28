goog.provide('chia.view.fps');

/** @define {boolean} */
goog.define("chia.view.fps.count_fps_QMARK__STAR_",false);
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.fps !== 'undefined') && (typeof chia.view.fps.count_fps_QMARK_ !== 'undefined')){
} else {
chia.view.fps.count_fps_QMARK_ = chia.view.fps.count_fps_QMARK__STAR_;
}
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.fps !== 'undefined') && (typeof chia.view.fps.last_fps_time !== 'undefined')){
} else {
chia.view.fps.last_fps_time = (1);
}
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.fps !== 'undefined') && (typeof chia.view.fps.frame_rate !== 'undefined')){
} else {
chia.view.fps.frame_rate = (0);
}
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.fps !== 'undefined') && (typeof chia.view.fps.frame_count !== 'undefined')){
} else {
chia.view.fps.frame_count = (0);
}
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.fps !== 'undefined') && (typeof chia.view.fps.fps_element !== 'undefined')){
} else {
chia.view.fps.fps_element = cljs.core.memoize((function (){
return (function (){var obj49339 = document;
var k49340 = "body";
if((function (){var obj49341 = obj49339;
return (((!((obj49341 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49340,obj49341)));
})()){
return (obj49339[k49340]);
} else {
return undefined;
}
})().appendChild((function (){var G__49343 = document.createElement("div");
G__49343.setAttribute("style","padding: 3px 3px 0 0; font-size: 9px;");

G__49343.setAttribute("class","fixed top-0 right-0 z-max monospace gray");

return G__49343;
})());
}));
}
chia.view.fps.render_fps = (function chia$view$fps$render_fps(){
var G__49344 = (function (){var G__49346 = "div";
var G__49347 = ({});
var G__49348 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(chia.view.fps.frame_rate));
return module$node_modules$react$index.createElement(G__49346,G__49347,G__49348);
})();
var G__49345 = (chia.view.fps.fps_element.cljs$core$IFn$_invoke$arity$0 ? chia.view.fps.fps_element.cljs$core$IFn$_invoke$arity$0() : chia.view.fps.fps_element.call(null));
return module$node_modules$react_dom$index.render(G__49344,G__49345);
});
chia.view.fps.measure_frame_rate_BANG_ = (function chia$view$fps$measure_frame_rate_BANG_(value){
return chia.view.fps.count_fps_QMARK_ = value;
});
chia.view.fps.tick_BANG_ = (function chia$view$fps$tick_BANG_(frame_ms){
if(chia.view.fps.count_fps_QMARK_ === true){
chia.view.fps.frame_count = (chia.view.fps.frame_count + (1));

if(((0) === cljs.core.mod(chia.view.fps.frame_count,(29)))){
chia.view.fps.frame_rate = ((1000) * ((30) / (frame_ms - chia.view.fps.last_fps_time)));

chia.view.fps.last_fps_time = frame_ms;

return chia.view.fps.render_fps();
} else {
return null;
}
} else {
return null;
}
});
