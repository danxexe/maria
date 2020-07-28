goog.provide('maria.views.error');
/**
 * Error boundary, per React 16
 */
maria.views.error.error_boundary = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","did-catch","view/did-catch",2134788208),(function (p__50529,error,info){
var map__50535 = p__50529;
var map__50535__$1 = (((((!((map__50535 == null))))?(((((map__50535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50535):map__50535);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(error,info) : on_error.call(null,error,info));
} else {
return null;
}
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$error$__error_boundary(p__50537,child){
var map__50538 = p__50537;
var map__50538__$1 = (((((!((map__50538 == null))))?(((((map__50538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50538):map__50538);
var this$ = map__50538__$1;
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50538__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
return chia.view.props.to_element((function (){var temp__5722__auto__ = (function (){var obj50543 = (function (){var obj50541 = this$;
var k50542 = "state";
if((function (){var obj50545 = obj50541;
return (((!((obj50545 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50542,obj50545)));
})()){
return (obj50541[k50542]);
} else {
return undefined;
}
})();
var k50544 = "error-state";
if((function (){var obj50550 = obj50543;
return (((!((obj50550 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50544,obj50550)));
})()){
return (obj50543[k50544]);
} else {
return undefined;
}
})();
if((temp__5722__auto__ == null)){
return child;
} else {
var vec__50551 = temp__5722__auto__;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(1),null);
var or__4131__auto__ = (cljs.core.truth_(fallback)?(fallback.cljs$core$IFn$_invoke$arity$2 ? fallback.cljs$core$IFn$_invoke$arity$2(error,info) : fallback.call(null,error,info)):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bg-washed-red.flex.items-center.tc.pa2",".bg-washed-red.flex.items-center.tc.pa2",-346030410),(function (){var or__4131__auto____$1 = (function (){var G__50555 = error;
if((G__50555 == null)){
return null;
} else {
return G__50555.message;
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
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.error/error-boundary","doc":"Error boundary, per React 16"}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$error$error_boundary50527(props50528){
var G__50526 = this;
chia.view.class$.Component.call(G__50526,props50528);

var obj50556_50566 = G__50526;
var obj50557_50567 = (((!((obj50556_50566 == null))))?obj50556_50566:({}));
obj50557_50567.state = ({});



return G__50526;
}));
