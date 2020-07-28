goog.provide('chia.util.perf$macros');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('chia.util.macros');
goog.require('applied_science.js_interop');
chia.util.perf$macros.butlastv = (function chia$util$perf$macros$butlastv(v){
var G__69317 = v;
if((cljs.core.count(v) > (0))){
return cljs.core.pop(G__69317);
} else {
return G__69317;
}
});
chia.util.perf$macros.lastv = (function chia$util$perf$macros$lastv(v){
var len = cljs.core.count(v);
if((len === (0))){
return null;
} else {
return cljs.core.peek(v);
}
});
chia.util.perf$macros.assoc_lastv = (function chia$util$perf$macros$assoc_lastv(path,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,(cljs.core.count(path) - (1)),v);
});
chia.util.perf$macros.update_lastv = (function chia$util$perf$macros$update_lastv(path,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(path,(cljs.core.count(path) - (1)),f);
});
chia.util.perf$macros.mapa = (function chia$util$perf$macros$mapa(f,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,x){
var array69331 = out;
array69331.push((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));

return array69331;
}),[],s);
});

//# sourceMappingURL=chia.util.perf$macros.js.map
