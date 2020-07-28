goog.provide('chia.view');
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
var len__4730__auto___49914 = arguments.length;
var i__4731__auto___49915 = (0);
while(true){
if((i__4731__auto___49915 < len__4730__auto___49914)){
args__4736__auto__.push((arguments[i__4731__auto___49915]));

var G__49916 = (i__4731__auto___49915 + (1));
i__4731__auto___49915 = G__49916;
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
var out = (function (){var G__49812 = cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"<>","<>",1280186386),body));
return (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(G__49812) : chia.view.to_element.call(null,G__49812));
})();
while(true){
if(cljs.core.empty_QMARK_(bindings)){
return out;
} else {
var G__49917 = cljs.core.rest(bindings);
var G__49918 = (function (){var vec__49813 = cljs.core.first(bindings);
var context_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49813,(0),null);
var context_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49813,(1),null);
var G__49816 = (function (){var obj49819 = chia.view.impl.lookup_context(context_k);
var k49820 = "Provider";
if((function (){var obj49821 = obj49819;
return (((!((obj49821 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49820,obj49821)));
})()){
return (obj49819[k49820]);
} else {
return undefined;
}
})();
var G__49817 = ({"value": context_v});
var G__49818 = out;
return (chia.view._create_element.cljs$core$IFn$_invoke$arity$3 ? chia.view._create_element.cljs$core$IFn$_invoke$arity$3(G__49816,G__49817,G__49818) : chia.view._create_element.call(null,G__49816,G__49817,G__49818));
})();
bindings = G__49917;
out = G__49918;
continue;
}
break;
}
});

chia.view.provide.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.view.provide.cljs$lang$applyTo = (function (seq49810){
var G__49811 = cljs.core.first(seq49810);
var seq49810__$1 = cljs.core.next(seq49810);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49811,seq49810__$1);
});

chia.view.use_context = chia.view.hooks.use_context;
chia.view.merge_props = chia.view.props.merge_props;
chia.view.partial = chia.view.props.partial;
chia.view.swap_silently_BANG_ = (function chia$view$swap_silently_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49919 = arguments.length;
var i__4731__auto___49920 = (0);
while(true){
if((i__4731__auto___49920 < len__4730__auto___49919)){
args__4736__auto__.push((arguments[i__4731__auto___49920]));

var G__49921 = (i__4731__auto___49920 + (1));
i__4731__auto___49920 = G__49921;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,args){
var _STAR_silent_STAR__orig_val__49824 = chia.reactive._STAR_silent_STAR_;
var _STAR_silent_STAR__temp_val__49825 = true;
chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__temp_val__49825;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,ref,args);
}finally {chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__orig_val__49824;
}});

chia.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq49822){
var G__49823 = cljs.core.first(seq49822);
var seq49822__$1 = cljs.core.next(seq49822);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49823,seq49822__$1);
});

/**
 * Render view to element, which should be a DOM element or id of element on page.
 */
chia.view.render_to_dom = (function chia$view$render_to_dom(var_args){
var G__49827 = arguments.length;
switch (G__49827) {
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

chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$3 = (function (react_element,dom_element,p__49837){
var map__49838 = p__49837;
var map__49838__$1 = (((((!((map__49838 == null))))?(((((map__49838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49838):map__49838);
var reload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49838__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true);
var _STAR_reload_STAR__orig_val__49848 = chia.view.registry._STAR_reload_STAR_;
var _STAR_reload_STAR__temp_val__49849 = reload_QMARK_;
chia.view.registry._STAR_reload_STAR_ = _STAR_reload_STAR__temp_val__49849;

try{var G__49854 = (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(react_element) : chia.view.to_element.call(null,react_element));
var G__49855 = chia.view.impl.resolve_node(dom_element);
return (chia.view.impl._render.cljs$core$IFn$_invoke$arity$2 ? chia.view.impl._render.cljs$core$IFn$_invoke$arity$2(G__49854,G__49855) : chia.view.impl._render.call(null,G__49854,G__49855));
}finally {chia.view.registry._STAR_reload_STAR_ = _STAR_reload_STAR__orig_val__49848;
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
var G__49856 = (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(element) : chia.view.to_element.call(null,element));
var G__49857 = chia.view.impl.resolve_node(dom_node);
return (chia.view._create_portal.cljs$core$IFn$_invoke$arity$2 ? chia.view._create_portal.cljs$core$IFn$_invoke$arity$2(G__49856,G__49857) : chia.view._create_portal.call(null,G__49856,G__49857));
});
/**
 * Register an unmount callback for `component`. This is not a hook - can be used anywhere/anytime.
 */
chia.view.on_unmount_BANG_ = (function chia$view$on_unmount_BANG_(this$,key,f){
var o__20067__auto__ = this$;
var o__20061__auto__ = (((!((o__20067__auto__ == null))))?o__20067__auto__:({}));
var obj49863 = o__20061__auto__;
(obj49863["chia$onUnmount"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((o__20061__auto__["chia$onUnmount"]),key,f));

return obj49863;
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
var G__49866 = arguments.length;
switch (G__49866) {
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
var G__49937__delegate = function (args){
var props = chia.view.hiccup.get_props(args,(0));
var props_QMARK_ = chia.view.hiccup.props_QMARK_(props);
return chia.view.hiccup.make_element(js_component,chia.view.props.adapt_props(options,((props_QMARK_)?props:cljs.core.PersistentArrayMap.EMPTY)),args,((props_QMARK_)?(1):(0)));
};
var G__49937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49939__i = 0, G__49939__a = new Array(arguments.length -  0);
while (G__49939__i < G__49939__a.length) {G__49939__a[G__49939__i] = arguments[G__49939__i + 0]; ++G__49939__i;}
  args = new cljs.core.IndexedSeq(G__49939__a,0,null);
} 
return G__49937__delegate.call(this,args);};
G__49937.cljs$lang$maxFixedArity = 0;
G__49937.cljs$lang$applyTo = (function (arglist__49942){
var args = cljs.core.seq(arglist__49942);
return G__49937__delegate(args);
});
G__49937.cljs$core$IFn$_invoke$arity$variadic = G__49937__delegate;
return G__49937;
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
var G__49869 = (new chia.view.FunctionalView(view_name,force_update));
if(cljs.core.not(new cljs.core.Keyword("chia.view","no-ref","chia.view/no-ref",-352701262).cljs$core$IFn$_invoke$arity$1(ref))){
var obj49870 = G__49869;
var obj49871 = (((!((obj49870 == null))))?obj49870:({}));
obj49871.chia$forwardRef = ref;

return obj49871;
} else {
return G__49869;
}
});})(force_update))
);
chia.view.hooks.use_will_unmount(((function (force_update,chia$view){
return (function (){
chia.view.render_loop.dequeue_BANG_(chia$view);

chia.reactive.dispose_reader_BANG_(chia$view);

var seq__49875 = cljs.core.seq((function (){var G__49884 = (function (){var obj49885 = chia$view;
var k49886 = "chia$onUnmount";
if((function (){var obj49887 = obj49885;
return (((!((obj49887 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49886,obj49887)));
})()){
return (obj49885[k49886]);
} else {
return undefined;
}
})();
if((G__49884 == null)){
return null;
} else {
return cljs.core.vals(G__49884);
}
})());
var chunk__49876 = null;
var count__49877 = (0);
var i__49878 = (0);
while(true){
if((i__49878 < count__49877)){
var f = chunk__49876.cljs$core$IIndexed$_nth$arity$2(null,i__49878);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__49970 = seq__49875;
var G__49971 = chunk__49876;
var G__49972 = count__49877;
var G__49973 = (i__49878 + (1));
seq__49875 = G__49970;
chunk__49876 = G__49971;
count__49877 = G__49972;
i__49878 = G__49973;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49875);
if(temp__5720__auto__){
var seq__49875__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49875__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49875__$1);
var G__49974 = cljs.core.chunk_rest(seq__49875__$1);
var G__49975 = c__4550__auto__;
var G__49976 = cljs.core.count(c__4550__auto__);
var G__49977 = (0);
seq__49875 = G__49974;
chunk__49876 = G__49975;
count__49877 = G__49976;
i__49878 = G__49977;
continue;
} else {
var f = cljs.core.first(seq__49875__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__49981 = cljs.core.next(seq__49875__$1);
var G__49982 = null;
var G__49983 = (0);
var G__49984 = (0);
seq__49875 = G__49981;
chunk__49876 = G__49982;
count__49877 = G__49983;
i__49878 = G__49984;
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
chia.view._functional_render = (function chia$view$_functional_render(p__49889){
var map__49891 = p__49889;
var map__49891__$1 = (((((!((map__49891 == null))))?(((((map__49891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49891):map__49891);
var view_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword("view","name","view/name",1848834788));
var view_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword("view","fn","view/fn",-1171578695));
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword("view","forward-ref?","view/forward-ref?",-552082829));
var should_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword("view","should-update?","view/should-update?",1307710400));
return chia.view.impl.memoize_view.cljs$core$IFn$_invoke$arity$2((function (){var G__49895 = (function (){var G__49896 = ((function (map__49891,map__49891__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_){
return (function (props,ref){
var children = (function (){var obj49897 = props;
var k49898 = "children";
if((function (){var obj49899 = obj49897;
return (((!((obj49899 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49898,obj49899)));
})()){
return (obj49897[k49898]);
} else {
return undefined;
}
})();
var reader__20496__auto__ = chia.view._use_chia(view_name,((ref_QMARK_)?ref:new cljs.core.Keyword("chia.view","no-ref","chia.view/no-ref",-352701262)));
var result__20497__auto__ = (function (){var _STAR_reader_STAR__orig_val__49902 = chia.reactive._STAR_reader_STAR_;
var _STAR_reader_dependency_log_STAR__orig_val__49903 = chia.reactive._STAR_reader_dependency_log_STAR_;
var _STAR_reader_STAR__temp_val__49904 = reader__20496__auto__;
var _STAR_reader_dependency_log_STAR__temp_val__49905 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__temp_val__49904;

chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__temp_val__49905;

try{var value__20498__auto__ = (function (){var G__49910 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(view_fn,children);
return (chia.view.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.to_element.cljs$core$IFn$_invoke$arity$1(G__49910) : chia.view.to_element.call(null,G__49910));
})();
return ({value:value__20498__auto__,deps:cljs.core.deref(chia.reactive._STAR_reader_dependency_log_STAR_)});
}finally {chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__orig_val__49903;

chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__orig_val__49902;
}})();
var G__49913_49995 = ((function (reader__20496__auto__,result__20497__auto__,children,map__49891,map__49891__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_){
return (function (){
return chia.reactive.handle_next_deps_BANG_(reader__20496__auto__,result__20497__auto__.deps);
});})(reader__20496__auto__,result__20497__auto__,children,map__49891,map__49891__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_))
;
(chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1(G__49913_49995) : chia.view.hooks.use_layout_effect.call(null,G__49913_49995));

return result__20497__auto__.value;
});})(map__49891,map__49891__$1,view_name,view_fn,ref_QMARK_,should_update_QMARK_))
;
Object.defineProperty(G__49896,"name",({"value":view_name}));

return G__49896;
})();
if(ref_QMARK_){
return (chia.view._forward_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view._forward_ref.cljs$core$IFn$_invoke$arity$1(G__49895) : chia.view._forward_ref.call(null,G__49895));
} else {
return G__49895;
}
})(),should_update_QMARK_);
});
