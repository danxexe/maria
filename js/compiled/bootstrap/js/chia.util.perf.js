goog.provide('chia.util.perf');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('chia.util.macros');
goog.require('applied_science.js_interop');
chia.util.perf.butlastv = (function chia$util$perf$butlastv(v){
var G__56977 = v;
if((cljs.core.count(v) > (0))){
return cljs.core.pop(G__56977);
} else {
return G__56977;
}
});
chia.util.perf.lastv = (function chia$util$perf$lastv(v){
var len = cljs.core.count(v);
if((len === (0))){
return null;
} else {
return cljs.core.peek(v);
}
});
chia.util.perf.assoc_lastv = (function chia$util$perf$assoc_lastv(path,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,(cljs.core.count(path) - (1)),v);
});
chia.util.perf.update_lastv = (function chia$util$perf$update_lastv(path,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(path,(cljs.core.count(path) - (1)),f);
});
chia.util.perf.mapa = (function chia$util$perf$mapa(f,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,x){
var array56979 = out;
array56979.push((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));

return array56979;
}),[],s);
});

//# sourceMappingURL=chia.util.perf.js.map
