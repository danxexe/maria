goog.provide('chia.view.hiccup.impl');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('applied_science.js_interop');
goog.require('chia.util.perf');
goog.require('chia.util');
goog.require('goog.object');
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
chia.view.hiccup.impl.parse_key = (function chia$view$hiccup$impl$parse_key(x){
var match = /([^#.]+)?(?:#([^.]+))?(?:\.(.*))?/.exec(x);
var classes = (match[(3)]);
return ({tag:(function (){var or__4131__auto__ = (match[(1)]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "div";
}
})(),id:(match[(2)]),classes:(((void 0 === classes))?classes:clojure.string.replace((match[(3)]),"."," "))});
});
chia.view.hiccup.impl.parse_key_memo = chia.util.memoize_str(chia.view.hiccup.impl.parse_key);
/**
 * Return js (react) key for keyword/string.
 * 
 *   - Namespaced keywords are ignored
 *   - area- and data- prefixed keys are not camelCased
 *   - other keywords are camelCased
 */
chia.view.hiccup.impl.name__GT_react_attr = (function chia$view$hiccup$impl$name__GT_react_attr(s){
if((s === "for")){
return "htmlFor";
} else {
if((s === "class")){
return "className";
} else {
if(((clojure.string.starts_with_QMARK_(s,"data-")) || (clojure.string.starts_with_QMARK_(s,"aria-")))){
return s;
} else {
return (chia.util.camel_case.cljs$core$IFn$_invoke$arity$1 ? chia.util.camel_case.cljs$core$IFn$_invoke$arity$1(s) : chia.util.camel_case.call(null,s));

}
}
}
});
chia.view.hiccup.impl.name__GT_react_attr_memo = chia.util.memoize_str(chia.view.hiccup.impl.name__GT_react_attr);
/**
 * Return javascript object with camelCase keys (shallow)
 */
chia.view.hiccup.impl.map__GT_js = (function chia$view$hiccup$impl$map__GT_js(style){
return cljs.core.reduce_kv((function (obj,k,v){
var obj57140 = obj;
var obj57141 = (((!((obj57140 == null))))?obj57140:({}));
(obj57141[applied_science.js_interop.impl.wrap_key((function (){var G__57148 = cljs.core.name(k);
return (chia.util.camel_case.cljs$core$IFn$_invoke$arity$1 ? chia.util.camel_case.cljs$core$IFn$_invoke$arity$1(G__57148) : chia.util.camel_case.call(null,G__57148));
})())] = v);

return obj57141;
}),({}),style);
});
chia.view.hiccup.impl._STAR_wrap_props_STAR_ = null;
chia.view.hiccup.impl.map_prop_QMARK_ = (function chia$view$hiccup$impl$map_prop_QMARK_(js_key){
return (((js_key === "style")) || ((js_key === "dangerouslySetInnerHTML")));
});
chia.view.hiccup.impl.defined_QMARK_ = (function chia$view$hiccup$impl$defined_QMARK_(x){
return (!((void 0 === x)));
});
/**
 * Returns a React-conformant javascript object. An alternative to clj->js,
 *   allowing for key renaming without an extra loop through every prop map.
 */
chia.view.hiccup.impl.props__GT_js = (function chia$view$hiccup$impl$props__GT_js(var_args){
var G__57152 = arguments.length;
switch (G__57152) {
case 1:
return chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$1 = (function (props){
return chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$2(({}),props);
});

chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$2 = (function (parsed_key,props){
return cljs.core.reduce_kv((function (js_props,k,v){
var temp__5722__auto__ = ((cljs.core.qualified_keyword_QMARK_(k))?null:(function (){var G__57154 = cljs.core.name(k);
return (chia.view.hiccup.impl.name__GT_react_attr_memo.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.impl.name__GT_react_attr_memo.cljs$core$IFn$_invoke$arity$1(G__57154) : chia.view.hiccup.impl.name__GT_react_attr_memo.call(null,G__57154));
})());
if((temp__5722__auto__ == null)){
return js_props;
} else {
var js_key = temp__5722__auto__;
var obj57155 = js_props;
(obj57155[applied_science.js_interop.impl.wrap_key(js_key)] = (function (){var G__57156 = v;
if(chia.view.hiccup.impl.map_prop_QMARK_(js_key)){
return chia.view.hiccup.impl.map__GT_js(G__57156);
} else {
return G__57156;
}
})());

return obj57155;
}
}),({}),(function (){var G__57160 = (((!((props == null))))?props:cljs.core.PersistentArrayMap.EMPTY);
var G__57160__$1 = (((!((chia.view.hiccup.impl._STAR_wrap_props_STAR_ == null))))?(function (){var G__57161 = G__57160;
var G__57162 = parsed_key.tag;
return (chia.view.hiccup.impl._STAR_wrap_props_STAR_.cljs$core$IFn$_invoke$arity$2 ? chia.view.hiccup.impl._STAR_wrap_props_STAR_.cljs$core$IFn$_invoke$arity$2(G__57161,G__57162) : chia.view.hiccup.impl._STAR_wrap_props_STAR_.call(null,G__57161,G__57162));
})():G__57160);
var G__57160__$2 = ((chia.view.hiccup.impl.defined_QMARK_(parsed_key.id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57160__$1,new cljs.core.Keyword(null,"id","id",-1388402092),parsed_key.id):G__57160__$1);
if(chia.view.hiccup.impl.defined_QMARK_(parsed_key.classes)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__57160__$2,new cljs.core.Keyword(null,"class","class",-2030961996),((function (G__57160,G__57160__$1,G__57160__$2){
return (function (x){
if((!((x == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parsed_key.classes)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return parsed_key.classes;
}
});})(G__57160,G__57160__$1,G__57160__$2))
);
} else {
return G__57160__$2;
}
})());
});

chia.view.hiccup.impl.props__GT_js.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=chia.view.hiccup.impl.js.map