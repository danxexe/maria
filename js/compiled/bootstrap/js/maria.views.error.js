goog.provide('maria.views.error');
goog.require('cljs.core');
goog.require('chia.view');
goog.require('maria.eval');
goog.require('applied_science.js_interop');
/**
 * Error boundary, per React 16
 */
maria.views.error.error_boundary = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","did-catch","view/did-catch",2134788208),(function (p__66721,error,info){
var map__66722 = p__66721;
var map__66722__$1 = (((((!((map__66722 == null))))?(((((map__66722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66722):map__66722);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66722__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(error,info) : on_error.call(null,error,info));
} else {
return null;
}
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$error$__error_boundary(p__66724,child){
var map__66725 = p__66724;
var map__66725__$1 = (((((!((map__66725 == null))))?(((((map__66725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66725):map__66725);
var this$ = map__66725__$1;
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66725__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
return chia.view.props.to_element((function (){var temp__5722__auto__ = (function (){var obj66732 = (function (){var obj66730 = this$;
var k66731 = "state";
if((function (){var obj66734 = obj66730;
return (((!((obj66734 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66731,obj66734)));
})()){
return (obj66730[k66731]);
} else {
return undefined;
}
})();
var k66733 = "error-state";
if((function (){var obj66735 = obj66732;
return (((!((obj66735 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66733,obj66735)));
})()){
return (obj66732[k66733]);
} else {
return undefined;
}
})();
if((temp__5722__auto__ == null)){
return child;
} else {
var vec__66737 = temp__5722__auto__;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66737,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66737,(1),null);
var or__4131__auto__ = (cljs.core.truth_(fallback)?(fallback.cljs$core$IFn$_invoke$arity$2 ? fallback.cljs$core$IFn$_invoke$arity$2(error,info) : fallback.call(null,error,info)):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bg-washed-red.flex.items-center.tc.pa2",".bg-washed-red.flex.items-center.tc.pa2",-346030410),(function (){var or__4131__auto____$1 = (function (){var G__66743 = error;
if((G__66743 == null)){
return null;
} else {
return G__66743.message;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return "Render error";
}
})()], null);
}
}
})());
})], null),new cljs.core.Keyword(null,"static-keys","static-keys",-2004424157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("static","get-derived-state-from-error","static/get-derived-state-from-error",-1959325310),(function (error,info){
return ({"error-state": [error,info]});
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.error/error-boundary","doc":"Error boundary, per React 16"}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$error$error_boundary66719(props66720){
var G__66718 = this;
chia.view.class$.Component.call(G__66718,props66720);

var obj66748_66784 = G__66718;
var obj66749_66785 = (((!((obj66748_66784 == null))))?obj66748_66784:({}));
obj66749_66785.state = ({});



return G__66718;
}));

//# sourceMappingURL=maria.views.error.js.map
