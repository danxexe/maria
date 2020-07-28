goog.provide('chia.view');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('chia.view.hooks');
goog.require('chia.view.props');
goog.require('chia.view.impl');
goog.require('chia.view.render_loop');
goog.require('chia.view.registry');
goog.require('chia.view.util');
goog.require('chia.view.class$');
goog.require('chia.view.hiccup');
goog.require('chia.view.hiccup.impl');
goog.require('chia.reactive');
goog.require('chia.util');
goog.require('applied_science.js_interop');
chia.view._create_element = module$node_modules$react$index.createElement;
chia.view._create_portal = module$node_modules$react_dom$index.createPortal;
chia.view._create_context = module$node_modules$react$index.createContext;
chia.view._is_valid_element_QMARK_ = module$node_modules$react$index.isValidElement;
chia.view._forward_ref = module$node_modules$react$index.forwardRef;
chia.view.to_element = chia.view.props.to_element;
chia.view.dom_node = module$node_modules$react_dom$index.findDOMNode;
chia.view.element_QMARK_ = (function chia$view$element_QMARK_(x){
var and__4120__auto__ = x;
if(cljs.core.truth_(and__4120__auto__)){
return (chia.view._is_valid_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? chia.view._is_valid_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : chia.view._is_valid_element_QMARK_.call(null,x));
} else {
return and__4120__auto__;
}
});
/**
 * Adds React contexts to the component tree.
 * `bindings` should be a map of {<keyword-or-Context>, <value-to-be-bound>}.
 */
chia.view.provide = (function chia$view$provide(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66166 = arguments.length;
var i__4731__auto___66167 = (0);
while(true){
if((i__4731__auto___66167 < len__4730__auto___66166)){
args__4736__auto__.push((arguments[i__4731__auto___66167]));

var G__66168 = (i__4731__auto___66167 + (1));
i__4731__auto___66167 = G__66168;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.view.provide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.view.provide.cljs$core$IFn$_invoke$arity$variadic = (function (binding_map,body){
var bindings = cljs.core.seq(binding_map);
var out = (function (){var G__66066 = cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"<>","<>",1280186386),body));
return (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(G__66066) : chia.view.to_element.call(null,G__66066));
})();
while(true){
if(cljs.core.empty_QMARK_(bindings)){
return out;
} else {
var G__66169 = cljs.core.rest(bindings);
var G__66170 = (function (){var vec__66068 = cljs.core.first(bindings);
var context_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66068,(0),null);
var context_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66068,(1),null);
var G__66073 = (function (){var obj66076 = chia.view.impl.lookup_context(context_k);
var k66077 = "Provider";
if((function (){var obj66078 = obj66076;
return (((!((obj66078 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66077,obj66078)));
})()){
return (obj66076[k66077]);
} else {
return undefined;
}
})();
var G__66074 = ({"value": context_v});
var G__66075 = out;
return (chia.view._create_element.cljs$core$IFn$_invoke$arity$3 ? chia.view._create_element.cljs$core$IFn$_invoke$arity$3(G__66073,G__66074,G__66075) : chia.view._create_element.call(null,G__66073,G__66074,G__66075));
})();
bindings = G__66169;
out = G__66170;
continue;
}
break;
}
});

chia.view.provide.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.view.provide.cljs$lang$applyTo = (function (seq66064){
var G__66065 = cljs.core.first(seq66064);
var seq66064__$1 = cljs.core.next(seq66064);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66065,seq66064__$1);
});

chia.view.use_context = chia.view.hooks.use_context;
chia.view.merge_props = chia.view.props.merge_props;
chia.view.partial = chia.view.props.partial;
chia.view.swap_silently_BANG_ = (function chia$view$swap_silently_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66171 = arguments.length;
var i__4731__auto___66172 = (0);
while(true){
if((i__4731__auto___66172 < len__4730__auto___66171)){
args__4736__auto__.push((arguments[i__4731__auto___66172]));

var G__66173 = (i__4731__auto___66172 + (1));
i__4731__auto___66172 = G__66173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,args){
var _STAR_silent_STAR__orig_val__66086 = chia.reactive._STAR_silent_STAR_;
var _STAR_silent_STAR__temp_val__66087 = true;
chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__temp_val__66087;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,ref,args);
}finally {chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__orig_val__66086;
}});

chia.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq66083){
var G__66084 = cljs.core.first(seq66083);
var seq66083__$1 = cljs.core.next(seq66083);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66084,seq66083__$1);
});

/**
 * Render view to element, which should be a DOM element or id of element on page.
 */
chia.view.render_to_dom = (function chia$view$render_to_dom(var_args){
var G__66094 = arguments.length;
switch (G__66094) {
case 2:
return chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$2 = (function (react_element,dom_element){
return chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$3(react_element,dom_element,null);
});

chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$3 = (function (react_element,dom_element,p__66098){
var map__66100 = p__66098;
var map__66100__$1 = (((((!((map__66100 == null))))?(((((map__66100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66100):map__66100);
var reload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66100__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true);
var _STAR_reload_STAR__orig_val__66104 = chia.view.registry._STAR_reload_STAR_;
var _STAR_reload_STAR__temp_val__66105 = reload_QMARK_;
chia.view.registry._STAR_reload_STAR_ = _STAR_reload_STAR__temp_val__66105;

try{var G__66107 = (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(react_element) : chia.view.to_element.call(null,react_element));
var G__66108 = chia.view.impl.resolve_node(dom_element);
return (chia.view.impl._render.cljs$core$IFn$_invoke$arity$2 ? chia.view.impl._render.cljs$core$IFn$_invoke$arity$2(G__66107,G__66108) : chia.view.impl._render.call(null,G__66107,G__66108));
}finally {chia.view.registry._STAR_reload_STAR_ = _STAR_reload_STAR__orig_val__66104;
}});

chia.view.render_to_dom.cljs$lang$maxFixedArity = 3;

/**
 * Unmounts React view at given DOM node.
 */
chia.view.unmount_from_dom = chia.view.impl._unmount_component_at_node;
/**
 * Mounts `element` at `dom-node` as React portal.
 */
chia.view.portal = (function chia$view$portal(element,dom_node){
var G__66110 = (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(element) : chia.view.to_element.call(null,element));
var G__66111 = chia.view.impl.resolve_node(dom_node);
return (chia.view._create_portal.cljs$core$IFn$_invoke$arity$2 ? chia.view._create_portal.cljs$core$IFn$_invoke$arity$2(G__66110,G__66111) : chia.view._create_portal.call(null,G__66110,G__66111));
});
/**
 * Register an unmount callback for `component`. This is not a hook - can be used anywhere/anytime.
 */
chia.view.on_unmount_BANG_ = (function chia$view$on_unmount_BANG_(this$,key,f){
var o__50635__auto__ = this$;
var o__50629__auto__ = (((!((o__50635__auto__ == null))))?o__50635__auto__:({}));
var obj66115 = o__50629__auto__;
(obj66115["chia$onUnmount"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((o__50629__auto__["chia$onUnmount"]),key,f));

return obj66115;
});
/**
 * Flush pending operations to DOM
 */
chia.view.flush_BANG_ = chia.view.render_loop.flush_BANG_;
/**
 * Force a component to update
 */
chia.view.force_update = chia.view.render_loop.force_update;
/**
 * Wraps a vanilla React component so that it can be used like any other view.
 * 
 *   See props/adapt-props for options.
 */
chia.view.adapt_js_component = (function chia$view$adapt_js_component(var_args){
var G__66117 = arguments.length;
switch (G__66117) {
case 1:
return chia.view.adapt_js_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.view.adapt_js_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.adapt_js_component.cljs$core$IFn$_invoke$arity$1 = (function (js_component){
return chia.view.adapt_js_component.cljs$core$IFn$_invoke$arity$2(null,js_component);
});

chia.view.adapt_js_component.cljs$core$IFn$_invoke$arity$2 = (function (options,js_component){
return (function() { 
var G__66187__delegate = function (args){
var props = chia.view.hiccup.get_props(args,(0));
var props_QMARK_ = chia.view.hiccup.props_QMARK_(props);
return chia.view.hiccup.make_element(js_component,chia.view.props.adapt_props(options,((props_QMARK_)?props:cljs.core.PersistentArrayMap.EMPTY)),args,((props_QMARK_)?(1):(0)));
};
var G__66187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66189__i = 0, G__66189__a = new Array(arguments.length -  0);
while (G__66189__i < G__66189__a.length) {G__66189__a[G__66189__i] = arguments[G__66189__i + 0]; ++G__66189__i;}
  args = new cljs.core.IndexedSeq(G__66189__a,0,null);
} 
return G__66187__delegate.call(this,args);};
G__66187.cljs$lang$maxFixedArity = 0;
G__66187.cljs$lang$applyTo = (function (arglist__66190){
var args = cljs.core.seq(arglist__66190);
return G__66187__delegate(args);
});
G__66187.cljs$core$IFn$_invoke$arity$variadic = G__66187__delegate;
return G__66187;
})()
;
});

chia.view.adapt_js_component.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {chia.reactive.IInvalidate}
 * @implements {cljs.core.IPrintWithWriter}
*/
chia.view.FunctionalView = (function (chia$name,update_BANG_){
this.chia$name = chia$name;
this.update_BANG_ = update_BANG_;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chia.view.FunctionalView.prototype.forceUpdate = (function (){
var self__ = this;
var this$ = this;
return (self__.update_BANG_.cljs$core$IFn$_invoke$arity$0 ? self__.update_BANG_.cljs$core$IFn$_invoke$arity$0() : self__.update_BANG_.call(null));
});

chia.view.FunctionalView.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["\uD83D\uDC41<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.chia$name),">"].join(''));
});

chia.view.FunctionalView.prototype.chia$reactive$IInvalidate$ = cljs.core.PROTOCOL_SENTINEL;

chia.view.FunctionalView.prototype.chia$reactive$IInvalidate$_invalidate_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chia.view.render_loop.schedule_update_BANG_(this$__$1);
});

chia.view.FunctionalView.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chia$name","chia$name",-1645423347,null),new cljs.core.Symbol(null,"update!","update!",187022941,null)], null);
});

chia.view.FunctionalView.cljs$lang$type = true;

chia.view.FunctionalView.cljs$lang$ctorStr = "chia.view/FunctionalView";

chia.view.FunctionalView.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"chia.view/FunctionalView");
});

/**
 * Positional factory function for chia.view/FunctionalView.
 */
chia.view.__GT_FunctionalView = (function chia$view$__GT_FunctionalView(chia$name,update_BANG_){
return (new chia.view.FunctionalView(chia$name,update_BANG_));
});

chia.view._use_chia = (function chia$view$_use_chia(view_name,ref){
var force_update = chia.view.hooks.use_schedule_update();
var chia$view = chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$1(((function (force_update){
return (function (){
var G__66127 = (new chia.view.FunctionalView(view_name,force_update));
if(cljs.core.not(new cljs.core.Keyword("chia.view","no-ref","chia.view/no-ref",-352701262).cljs$core$IFn$_invoke$arity$1(ref))){
var obj66128 = G__66127;
var obj66129 = (((!((obj66128 == null))))?obj66128:({}));
obj66129.chia$forwardRef = ref;

return obj66129;
} else {
return G__66127;
}
});})(force_update))
);
chia.view.hooks.use_will_unmount(((function (force_update,chia$view){
return (function (){
chia.view.render_loop.dequeue_BANG_(chia$view);

chia.reactive.dispose_reader_BANG_(chia$view);

var seq__66132 = cljs.core.seq((function (){var G__66141 = (function (){var obj66142 = chia$view;
var k66143 = "chia$onUnmount";
if((function (){var obj66146 = obj66142;
return (((!((obj66146 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66143,obj66146)));
})()){
return (obj66142[k66143]);
} else {
return undefined;
}
})();
if((G__66141 == null)){
return null;
} else {
return cljs.core.vals(G__66141);
}
})());
var chunk__66133 = null;
var count__66134 = (0);
var i__66135 = (0);
while(true){
if((i__66135 < count__66134)){
var f = chunk__66133.cljs$core$IIndexed$_nth$arity$2(null,i__66135);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__66207 = seq__66132;
var G__66208 = chunk__66133;
var G__66209 = count__66134;
var G__66210 = (i__66135 + (1));
seq__66132 = G__66207;
chunk__66133 = G__66208;
count__66134 = G__66209;
i__66135 = G__66210;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66132);
if(temp__5720__auto__){
var seq__66132__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66132__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__66132__$1);
var G__66215 = cljs.core.chunk_rest(seq__66132__$1);
var G__66216 = c__4550__auto__;
var G__66217 = cljs.core.count(c__4550__auto__);
var G__66218 = (0);
seq__66132 = G__66215;
chunk__66133 = G__66216;
count__66134 = G__66217;
i__66135 = G__66218;
continue;
} else {
var f = cljs.core.first(seq__66132__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__66219 = cljs.core.next(seq__66132__$1);
var G__66220 = null;
var G__66221 = (0);
var G__66222 = (0);
seq__66132 = G__66219;
chunk__66133 = G__66220;
count__66134 = G__66221;
i__66135 = G__66222;
continue;
}
} else {
return null;
}
}
break;
}
});})(force_update,chia$view))
);

return chia$view;
});
chia.view._functional_render = (function chia$view$_functional_render(p__66150){
var map__66151 = p__66150;
var map__66151__$1 = (((((!((map__66151 == null))))?(((((map__66151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66151):map__66151);
var view_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66151__$1,new cljs.core.Keyword("view","name","view/name",1848834788));
var view_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66151__$1,new cljs.core.Keyword("view","fn","view/fn",-1171578695));
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66151__$1,new cljs.core.Keyword("view","forward-ref?","view/forward-ref?",-552082829));
var should_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66151__$1,new cljs.core.Keyword("view","should-update?","view/should-update?",1307710400));
return chia.view.impl.memoize_view.cljs$core$IFn$_invoke$arity$2((function (){var G__66153 = (function (){var G__66154 = ((function (map__66151,map__66151__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_){
return (function (props,ref){
var children = (function (){var obj66155 = props;
var k66156 = "children";
if((function (){var obj66157 = obj66155;
return (((!((obj66157 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66156,obj66157)));
})()){
return (obj66155[k66156]);
} else {
return undefined;
}
})();
var reader__51578__auto__ = chia.view._use_chia(view_name,((ref_QMARK_)?ref:new cljs.core.Keyword("chia.view","no-ref","chia.view/no-ref",-352701262)));
var result__51579__auto__ = (function (){var _STAR_reader_STAR__orig_val__66160 = chia.reactive._STAR_reader_STAR_;
var _STAR_reader_dependency_log_STAR__orig_val__66161 = chia.reactive._STAR_reader_dependency_log_STAR_;
var _STAR_reader_STAR__temp_val__66162 = reader__51578__auto__;
var _STAR_reader_dependency_log_STAR__temp_val__66163 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__temp_val__66162;

chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__temp_val__66163;

try{var value__51580__auto__ = (function (){var G__66164 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(view_fn,children);
return (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(G__66164) : chia.view.to_element.call(null,G__66164));
})();
return ({value:value__51580__auto__,deps:cljs.core.deref(chia.reactive._STAR_reader_dependency_log_STAR_)});
}finally {chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__orig_val__66161;

chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__orig_val__66160;
}})();
var G__66165_66235 = ((function (reader__51578__auto__,result__51579__auto__,children,map__66151,map__66151__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_){
return (function (){
return chia.reactive.handle_next_deps_BANG_(reader__51578__auto__,result__51579__auto__.deps);
});})(reader__51578__auto__,result__51579__auto__,children,map__66151,map__66151__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_))
;
(chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1(G__66165_66235) : chia.view.hooks.use_layout_effect.call(null,G__66165_66235));

return result__51579__auto__.value;
});})(map__66151,map__66151__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_))
;
Object.defineProperty(G__66154,"name",({"value":view_name}));

return G__66154;
})();
if(ref_QMARK_){
return (chia.view._forward_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view._forward_ref.cljs$core$IFn$_invoke$arity$1(G__66153) : chia.view._forward_ref.call(null,G__66153));
} else {
return G__66153;
}
})(),should_update_QMARK_);
});

//# sourceMappingURL=chia.view.js.map
