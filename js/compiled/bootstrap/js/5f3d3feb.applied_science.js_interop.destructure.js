goog.provide('applied_science.js_interop.destructure');
applied_science.js_interop.destructure.dequote = (function applied_science$js_interop$destructure$dequote(x){
if(((cljs.core.list_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(x))))){
return cljs.core.second(x);
} else {
return x;
}
});
applied_science.js_interop.destructure.dot_access_QMARK_ = (function applied_science$js_interop$destructure$dot_access_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (clojure.string.starts_with_QMARK_(cljs.core.name(x),".-")));
});
applied_science.js_interop.destructure.dot_access = (function applied_science$js_interop$destructure$dot_access(s){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(cljs.core.name(s),/^(?:\.\-)?/,".-"));
});
applied_science.js_interop.destructure._STAR_js_QMARK__STAR_ = false;
/**
 * Destructure with direct array and object access.
 * 
 *   Invoked via ^:js metadata on binding form:
 * 
 *   (let [^:js {:keys [a]} obj] ...)
 * 
 *   Keywords compile to static keys, symbols to renamable keys,
 *   and array access to `aget`.
 */
applied_science.js_interop.destructure.destructure = (function applied_science$js_interop$destructure$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function applied_science$js_interop$destructure$destructure_$_pb(bvec,b,v){
var _STAR_js_QMARK__STAR__orig_val__52659 = applied_science.js_interop.destructure._STAR_js_QMARK__STAR_;
var _STAR_js_QMARK__STAR__temp_val__52660 = (cljs.core.truth_(new cljs.core.Keyword(null,"clj","clj",-660495428).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(b)))?false:((applied_science.js_interop.destructure._STAR_js_QMARK__STAR_)?true:new cljs.core.Keyword(null,"js","js",1768080579).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(b)) === true
));
applied_science.js_interop.destructure._STAR_js_QMARK__STAR_ = _STAR_js_QMARK__STAR__temp_val__52660;

try{var pvec = ((function (_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (bvec__$1,b__$1,v__$1){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gvec_QMARK_ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("some_vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var clj_rest_QMARK_ = (function (){var and__4120__auto__ = has_rest;
if(cljs.core.truth_(and__4120__auto__)){
return (!(applied_science.js_interop.destructure._STAR_js_QMARK__STAR_));
} else {
return and__4120__auto__;
}
})();
var get_nth = ((function (gvec,gvec_QMARK_,gseq,gfirst,has_rest,clj_rest_QMARK_,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (n){
if(applied_science.js_interop.destructure._STAR_js_QMARK__STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,gvec_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,gvec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,gvec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}
});})(gvec,gvec_QMARK_,gseq,gfirst,has_rest,clj_rest_QMARK_,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
;
var get_rest = ((function (gvec,gvec_QMARK_,gseq,gfirst,has_rest,clj_rest_QMARK_,get_nth,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (n){
if(applied_science.js_interop.destructure._STAR_js_QMARK__STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(gvec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null)], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null))))),null,(1),null))], 0))));
} else {
return gseq;
}
});})(gvec,gvec_QMARK_,gseq,gfirst,has_rest,clj_rest_QMARK_,get_nth,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
;
var ret = (function (){var ret = (function (){var G__52709 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0));
if(applied_science.js_interop.destructure._STAR_js_QMARK__STAR_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__52709,gvec_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,gvec,null,(1),null)))))], 0));
} else {
return G__52709;
}
})();
if(cljs.core.truth_(clj_rest_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),(new cljs.core.List(null,gvec,null,(1),null)),(2),null))], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__52903 = applied_science$js_interop$destructure$destructure_$_pb(ret,cljs.core.second(bs),get_rest(n));
var G__52904 = n;
var G__52905 = cljs.core.nnext(bs);
var G__52906 = true;
ret = G__52903;
n = G__52904;
bs = G__52905;
seen_rest_QMARK_ = G__52906;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return applied_science$js_interop$destructure$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__52910 = applied_science$js_interop$destructure$destructure_$_pb((cljs.core.truth_(clj_rest_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))], 0)):ret),firstb,(cljs.core.truth_(clj_rest_QMARK_)?gfirst:get_nth(n)));
var G__52911 = (n + (1));
var G__52912 = cljs.core.next(bs);
var G__52913 = seen_rest_QMARK_;
ret = G__52910;
n = G__52911;
bs = G__52912;
seen_rest_QMARK_ = G__52913;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
;
var pmap = ((function (pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = (function (){var G__52717 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gmap,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gmap,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))], 0)))));
var fexpr__52716 = ((function (G__52717,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(G__52717,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
;
return fexpr__52716(G__52717);
})();
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (p1__52637_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = mkns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.namespace(p1__52637_SHARP_);
}
})(),cljs.core.name(p1__52637_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (p1__52638_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = mkns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.namespace(p1__52638_SHARP_);
}
})(),cljs.core.name(p1__52638_SHARP_)),null,(1),null)),(2),null));
});})(mkns,mkn,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents){
return (function (p1__52639_SHARP_,p2__52640_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52639_SHARP_,p2__52640_SHARP_,(function (){var fexpr__52726 = cljs.core.val(entry);
return (fexpr__52726.cljs$core$IFn$_invoke$arity$1 ? fexpr__52726.cljs$core$IFn$_invoke$arity$1(p2__52640_SHARP_) : fexpr__52726.call(null,p2__52640_SHARP_));
})());
});})(transforms,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__52727 = cljs.core.key(entry);
return (fexpr__52727.cljs$core$IFn$_invoke$arity$1 ? fexpr__52727.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__52727.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"or","or",235744169)], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var bk__$1 = (function (){var k = applied_science.js_interop.destructure.dequote(bk);
if(((applied_science.js_interop.destructure._STAR_js_QMARK__STAR_) && ((k instanceof cljs.core.Symbol)))){
return applied_science.js_interop.destructure.dot_access(k);
} else {
return bk;
}
})();
var getf = ((applied_science.js_interop.destructure._STAR_js_QMARK__STAR_)?new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null):new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null));
var local = (((((!((bb == null))))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?(new cljs.core.List(null,getf,(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk__$1,(new cljs.core.List(null,(defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local)),null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,getf,(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk__$1,null,(1),null)),(2),null)),(3),null)));
var G__52931 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):applied_science$js_interop$destructure$destructure_$_pb(ret,bb,bv));
var G__52932 = cljs.core.next(bes);
ret = G__52931;
bes = G__52932;
continue;
} else {
return ret;
}
break;
}
});})(pvec,_STAR_js_QMARK__STAR__orig_val__52659,_STAR_js_QMARK__STAR__temp_val__52660,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
}finally {applied_science.js_interop.destructure._STAR_js_QMARK__STAR_ = _STAR_js_QMARK__STAR__orig_val__52659;
}});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__5718__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__52646_SHARP_){
return (cljs.core.first(p1__52646_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5718__auto__){
var kwbs = temp__5718__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),new cljs.core.Keyword(null,"prepost+body","prepost+body",1703890068),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"prepost","prepost",1251610712),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null)),cljs.core.identity,null,true,cljs.core.vec),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null))], null),null),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepost+body","prepost+body",1703890068),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepost","prepost",1251610712),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"prepost","prepost",1251610712),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),new cljs.core.Keyword(null,"prepost+body","prepost+body",1703890068),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"prepost","prepost",1251610712),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("applied-science.js-interop.destructure","function-args","applied-science.js-interop.destructure/function-args",-755493255),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fn-prelude","fn-prelude",419039032),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52758#","p1__52758#",-2010407855,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52758#","p1__52758#",-2010407855,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),new cljs.core.Symbol(null,"p1__52758#","p1__52758#",-2010407855,null)))))),new cljs.core.Keyword(null,"fn-tail","fn-tail",-1818869368),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),new cljs.core.Keyword(null,"arity-1","arity-1",105892478),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209),new cljs.core.Keyword(null,"arity-n","arity-n",-1049811975),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209))),new cljs.core.Keyword(null,"attr-map","attr-map",-569072860),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-prelude","fn-prelude",419039032),new cljs.core.Keyword(null,"fn-tail","fn-tail",-1818869368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),(function (p1__52758_SHARP_){
return (((!(cljs.core.vector_QMARK_(p1__52758_SHARP_)))) && ((!(cljs.core.list_QMARK_(p1__52758_SHARP_)))));
})),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity-1","arity-1",105892478),new cljs.core.Keyword(null,"arity-n","arity-n",-1049811975)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),new cljs.core.Keyword(null,"attr-map","attr-map",-569072860)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209),null,null)),cljs.spec.alpha.maybe_impl(cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209))),new cljs.core.Keyword(null,"attr-map","attr-map",-569072860),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52758#","p1__52758#",-2010407855,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52758#","p1__52758#",-2010407855,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),new cljs.core.Symbol(null,"p1__52758#","p1__52758#",-2010407855,null)))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),new cljs.core.Keyword(null,"arity-1","arity-1",105892478),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209),new cljs.core.Keyword(null,"arity-n","arity-n",-1049811975),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("applied-science.js-interop.destructure","argv+body","applied-science.js-interop.destructure/argv+body",1699154209))),new cljs.core.Keyword(null,"attr-map","attr-map",-569072860),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))))], null)));
applied_science.js_interop.destructure.spec_reform = (function applied_science$js_interop$destructure$spec_reform(spec,args,update_conf){
return cljs.spec.alpha.unform(spec,(function (){var G__52794 = cljs.spec.alpha.conform(spec,args);
return (update_conf.cljs$core$IFn$_invoke$arity$1 ? update_conf.cljs$core$IFn$_invoke$arity$1(G__52794) : update_conf.call(null,G__52794));
})());
});
applied_science.js_interop.destructure.update_argv_PLUS_body = (function applied_science$js_interop$destructure$update_argv_PLUS_body(update_fn,p__52803){
var map__52806 = p__52803;
var map__52806__$1 = (((((!((map__52806 == null))))?(((((map__52806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52806):map__52806);
var conf = map__52806__$1;
var vec__52807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806__$1,new cljs.core.Keyword(null,"fn-tail","fn-tail",-1818869368));
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52807,(0),null);
var update_pair = ((function (map__52806,map__52806__$1,conf,vec__52807,arity){
return (function (conf__$1){
var body_path = (function (){var G__52820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prepost+body","prepost+body",1703890068),cljs.core.first(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(conf__$1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52820,new cljs.core.Keyword(null,"body","body",-2049205669));
} else {
return G__52820;
}
})();
var vec__52817 = (function (){var G__52821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(conf__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(conf__$1,body_path)], null);
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__52821) : update_fn.call(null,G__52821));
})();
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52817,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52817,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(conf__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235)], null),params),body_path,body);
});})(map__52806,map__52806__$1,conf,vec__52807,arity))
;
var G__52825 = arity;
var G__52825__$1 = (((G__52825 instanceof cljs.core.Keyword))?G__52825.fqn:null);
switch (G__52825__$1) {
case "arity-1":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(conf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-tail","fn-tail",-1818869368),(1)], null),update_pair);

break;
case "arity-n":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(conf,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-tail","fn-tail",-1818869368),(1),new cljs.core.Keyword(null,"bodies","bodies",-1295887172)], null),((function (G__52825,G__52825__$1,update_pair,map__52806,map__52806__$1,conf,vec__52807,arity){
return (function (p1__52795_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(update_pair,p1__52795_SHARP_);
});})(G__52825,G__52825__$1,update_pair,map__52806,map__52806__$1,conf,vec__52807,arity))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52825__$1)].join('')));

}
});
applied_science.js_interop.destructure.maybe_destructured = (function applied_science$js_interop$destructure$maybe_destructured(p__52840){
var vec__52841 = p__52840;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(1),null);
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__52985 = cljs.core.next(params__$1);
var G__52986 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52987 = lets;
params__$1 = G__52985;
new_params = G__52986;
lets = G__52987;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52988 = cljs.core.next(params__$1);
var G__52989 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52990 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(lets,cljs.core.first(params__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gparam], 0));
params__$1 = G__52988;
new_params = G__52989;
lets = G__52990;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_params,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","let","applied-science.js-interop/let",-142128647,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))))))], null);
}
break;
}
}
});
applied_science.js_interop.destructure.destructure_fn_args = (function applied_science$js_interop$destructure$destructure_fn_args(args){
return applied_science.js_interop.destructure.spec_reform(new cljs.core.Keyword("applied-science.js-interop.destructure","function-args","applied-science.js-interop.destructure/function-args",-755493255),args,(function (p1__52857_SHARP_){
return applied_science.js_interop.destructure.update_argv_PLUS_body(applied_science.js_interop.destructure.maybe_destructured,p1__52857_SHARP_);
}));
});
