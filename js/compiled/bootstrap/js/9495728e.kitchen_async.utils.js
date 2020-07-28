goog.provide('kitchen_async.utils');
kitchen_async.utils.fixup_alias = (function kitchen_async$utils$fixup_alias(sym){
var or__4131__auto__ = (function (){var temp__5720__auto__ = (function (){var G__54336 = cljs.core.namespace(sym);
if((G__54336 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__54336);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var prefix = temp__5720__auto__;
var ns_name = cljs.core.ns_name(cljs.core._STAR_ns_STAR_);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns_name);
var temp__5720__auto____$1 = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),prefix], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927),prefix], null));
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var full_name = temp__5720__auto____$1;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(full_name),cljs.core.name(sym));
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return sym;
}
});
