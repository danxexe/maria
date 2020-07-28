goog.provide('net.cgrand.macrovich$macros');
var ret__4776__auto___54830 = (function (){
/**
 * This block will only be evaluated at the correct time for macro definition, at other times its content
 * are removed.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojure.
 * For self-hosted Clojurescript the block is only visible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.deftime = (function net$cgrand$macrovich$macros$deftime(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54831 = arguments.length;
var i__4731__auto___54835 = (0);
while(true){
if((i__4731__auto___54835 < len__4730__auto___54831)){
args__4736__auto__.push((arguments[i__4731__auto___54835]));

var G__54836 = (i__4731__auto___54835 + (1));
i__4731__auto___54835 = G__54836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.deftime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

net.cgrand.macrovich$macros.deftime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.truth_(cljs.core.re_matches(/.*\$macros/,cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return null;
}
});

net.cgrand.macrovich$macros.deftime.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
net.cgrand.macrovich$macros.deftime.cljs$lang$applyTo = (function (seq54701){
var G__54702 = cljs.core.first(seq54701);
var seq54701__$1 = cljs.core.next(seq54701);
var G__54703 = cljs.core.first(seq54701__$1);
var seq54701__$2 = cljs.core.next(seq54701__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54702,G__54703,seq54701__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.deftime.cljs$lang$macro = true;

var ret__4776__auto___54847 = (function (){
/**
 * This block content is not included at macro definition time.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojurescript.
 * For self-hosted Clojurescript the block is invisible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.usetime = (function net$cgrand$macrovich$macros$usetime(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54852 = arguments.length;
var i__4731__auto___54853 = (0);
while(true){
if((i__4731__auto___54853 < len__4730__auto___54852)){
args__4736__auto__.push((arguments[i__4731__auto___54853]));

var G__54854 = (i__4731__auto___54853 + (1));
i__4731__auto___54853 = G__54854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.usetime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

net.cgrand.macrovich$macros.usetime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.not(cljs.core.re_matches(/.*\$macros/,cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return null;
}
});

net.cgrand.macrovich$macros.usetime.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
net.cgrand.macrovich$macros.usetime.cljs$lang$applyTo = (function (seq54722){
var G__54723 = cljs.core.first(seq54722);
var seq54722__$1 = cljs.core.next(seq54722);
var G__54724 = cljs.core.first(seq54722__$1);
var seq54722__$2 = cljs.core.next(seq54722__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54723,G__54724,seq54722__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.usetime.cljs$lang$macro = true;

var ret__4776__auto___54869 = (function (){
net.cgrand.macrovich$macros.case$ = (function net$cgrand$macrovich$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54875 = arguments.length;
var i__4731__auto___54876 = (0);
while(true){
if((i__4731__auto___54876 < len__4730__auto___54875)){
args__4736__auto__.push((arguments[i__4731__auto___54876]));

var G__54877 = (i__4731__auto___54876 + (1));
i__4731__auto___54876 = G__54877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__54749){
var map__54750 = p__54749;
var map__54750__$1 = (((((!((map__54750 == null))))?(((((map__54750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54750):map__54750);
var cljs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54750__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54750__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
if(cljs.core.contains_QMARK_(_AMPERSAND_env,new cljs.core.Symbol(null,"&env","&env",-919163083,null))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs__$1,null,(1),null)),(new cljs.core.List(null,clj,null,(1),null))], 0))));
} else {
return cljs__$1;

}
});

net.cgrand.macrovich$macros.case$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
net.cgrand.macrovich$macros.case$.cljs$lang$applyTo = (function (seq54743){
var G__54744 = cljs.core.first(seq54743);
var seq54743__$1 = cljs.core.next(seq54743);
var G__54745 = cljs.core.first(seq54743__$1);
var seq54743__$2 = cljs.core.next(seq54743__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54744,G__54745,seq54743__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.case$.cljs$lang$macro = true;

var ret__4776__auto___54917 = (function (){
net.cgrand.macrovich$macros.replace = (function net$cgrand$macrovich$macros$replace(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54918 = arguments.length;
var i__4731__auto___54919 = (0);
while(true){
if((i__4731__auto___54919 < len__4730__auto___54918)){
args__4736__auto__.push((arguments[i__4731__auto___54919]));

var G__54920 = (i__4731__auto___54919 + (1));
i__4731__auto___54919 = G__54920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return net.cgrand.macrovich$macros.replace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

net.cgrand.macrovich$macros.replace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,map_or_maps,body){
var smap = ((cljs.core.map_QMARK_(map_or_maps))?map_or_maps:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,map_or_maps));
var walk = ((function (smap){
return (function net$cgrand$macrovich$macros$walk(form){
if(cljs.core.contains_QMARK_(smap,form)){
return (smap.cljs$core$IFn$_invoke$arity$1 ? smap.cljs$core$IFn$_invoke$arity$1(form) : smap.call(null,form));
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),(function (){var iter__4523__auto__ = ((function (smap){
return (function net$cgrand$macrovich$macros$walk_$_iter__54802(s__54803){
return (new cljs.core.LazySeq(null,((function (smap){
return (function (){
var s__54803__$1 = s__54803;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54803__$1);
if(temp__5720__auto__){
var s__54803__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54803__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__54803__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__54805 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__54804 = (0);
while(true){
if((i__54804 < size__4522__auto__)){
var vec__54807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__54804);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54807,(1),null);
cljs.core.chunk_append(b__54805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk(k),net$cgrand$macrovich$macros$walk(v)], null));

var G__54926 = (i__54804 + (1));
i__54804 = G__54926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54805),net$cgrand$macrovich$macros$walk_$_iter__54802(cljs.core.chunk_rest(s__54803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54805),null);
}
} else {
var vec__54812 = cljs.core.first(s__54803__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54812,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk(k),net$cgrand$macrovich$macros$walk(v)], null),net$cgrand$macrovich$macros$walk_$_iter__54802(cljs.core.rest(s__54803__$2)));
}
} else {
return null;
}
break;
}
});})(smap))
,null,null));
});})(smap))
;
return iter__4523__auto__(form);
})()),cljs.core.meta(form));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta(cljs.core.map.cljs$core$IFn$_invoke$arity$2(net$cgrand$macrovich$macros$walk,form),cljs.core.meta(form));
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$1(net$cgrand$macrovich$macros$walk),form),cljs.core.meta(form));
} else {
return form;

}
}
}
}
});})(smap))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(walk,body))));
});

net.cgrand.macrovich$macros.replace.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
net.cgrand.macrovich$macros.replace.cljs$lang$applyTo = (function (seq54794){
var G__54795 = cljs.core.first(seq54794);
var seq54794__$1 = cljs.core.next(seq54794);
var G__54796 = cljs.core.first(seq54794__$1);
var seq54794__$2 = cljs.core.next(seq54794__$1);
var G__54797 = cljs.core.first(seq54794__$2);
var seq54794__$3 = cljs.core.next(seq54794__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54795,G__54796,G__54797,seq54794__$3);
});

return null;
})()
;
net.cgrand.macrovich$macros.replace.cljs$lang$macro = true;

