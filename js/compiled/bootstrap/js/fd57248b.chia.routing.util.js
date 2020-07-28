goog.provide('chia.routing.util');
chia.routing.util.some_str = (function chia$routing$util$some_str(s){
if(cljs.core.truth_((function (){var and__4120__auto__ = s;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",s);
} else {
return and__4120__auto__;
}
})())){
return s;
} else {
return null;
}
});
/**
 * Ensure that string `s` begins with `prefix`
 */
chia.routing.util.ensure_leading_char = (function chia$routing$util$ensure_leading_char(prefix,s){
var G__50483 = s;
if((!(clojure.string.starts_with_QMARK_(s,prefix)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50483)].join('');
} else {
return G__50483;
}
});
/**
 * Remove leading occurrence of `ch`
 */
chia.routing.util.trim_leading_char = (function chia$routing$util$trim_leading_char(ch,s){
var G__50484 = s;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,cljs.core.first(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__50484,(1));
} else {
return G__50484;
}
});
chia.routing.util.wrap = (function chia$routing$util$wrap(p__50511,s){
var vec__50512 = p__50511;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50512,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50512,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)].join('');
});
/**
 * Remove empty values/strings from map
 */
chia.routing.util.remove_empty = (function chia$routing$util$remove_empty(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
var G__50516 = m__$1;
if((((v == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50516,k);
} else {
return G__50516;
}
}),m,m);
});
/**
 * Returns value as www-form-urlencoded string
 */
chia.routing.util.form_encode = (function chia$routing$util$form_encode(m){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(m)).toString();
});
/**
 * Returns map of decoded www-form-urlencoded data
 */
chia.routing.util.form_decode = (function chia$routing$util$form_decode(s){
var uri = (new goog.Uri(chia.routing.util.ensure_leading_char("?",s)));
var data = uri.getQueryData();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (uri,data){
return (function (m,k){
var G__50517 = m;
if(cljs.core.truth_(chia.routing.util.some_str(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50517,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),data.get(k));
} else {
return G__50517;
}
});})(uri,data))
,cljs.core.PersistentArrayMap.EMPTY,data.getKeys());
});
