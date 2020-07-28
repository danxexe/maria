goog.provide('net.cgrand.macrovich$macros');
goog.require('cljs.core');
var ret__4776__auto___70858 = (function (){
/**
 * This block will only be evaluated at the correct time for macro definition, at other times its content
 * are removed.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojure.
 * For self-hosted Clojurescript the block is only visible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.deftime = (function net$cgrand$macrovich$macros$deftime(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70861 = arguments.length;
var i__4731__auto___70862 = (0);
while(true){
if((i__4731__auto___70862 < len__4730__auto___70861)){
args__4736__auto__.push((arguments[i__4731__auto___70862]));

var G__70863 = (i__4731__auto___70862 + (1));
i__4731__auto___70862 = G__70863;
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
net.cgrand.macrovich$macros.deftime.cljs$lang$applyTo = (function (seq70781){
var G__70782 = cljs.core.first(seq70781);
var seq70781__$1 = cljs.core.next(seq70781);
var G__70783 = cljs.core.first(seq70781__$1);
var seq70781__$2 = cljs.core.next(seq70781__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70782,G__70783,seq70781__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.deftime.cljs$lang$macro = true;

var ret__4776__auto___70864 = (function (){
/**
 * This block content is not included at macro definition time.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojurescript.
 * For self-hosted Clojurescript the block is invisible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.usetime = (function net$cgrand$macrovich$macros$usetime(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70865 = arguments.length;
var i__4731__auto___70866 = (0);
while(true){
if((i__4731__auto___70866 < len__4730__auto___70865)){
args__4736__auto__.push((arguments[i__4731__auto___70866]));

var G__70868 = (i__4731__auto___70866 + (1));
i__4731__auto___70866 = G__70868;
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
net.cgrand.macrovich$macros.usetime.cljs$lang$applyTo = (function (seq70796){
var G__70797 = cljs.core.first(seq70796);
var seq70796__$1 = cljs.core.next(seq70796);
var G__70798 = cljs.core.first(seq70796__$1);
var seq70796__$2 = cljs.core.next(seq70796__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70797,G__70798,seq70796__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.usetime.cljs$lang$macro = true;

var ret__4776__auto___70880 = (function (){
net.cgrand.macrovich$macros.case$ = (function net$cgrand$macrovich$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70881 = arguments.length;
var i__4731__auto___70882 = (0);
while(true){
if((i__4731__auto___70882 < len__4730__auto___70881)){
args__4736__auto__.push((arguments[i__4731__auto___70882]));

var G__70883 = (i__4731__auto___70882 + (1));
i__4731__auto___70882 = G__70883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__70817){
var map__70818 = p__70817;
var map__70818__$1 = (((((!((map__70818 == null))))?(((((map__70818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70818):map__70818);
var cljs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70818__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70818__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
if(cljs.core.contains_QMARK_(_AMPERSAND_env,new cljs.core.Symbol(null,"&env","&env",-919163083,null))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs__$1,null,(1),null)),(new cljs.core.List(null,clj,null,(1),null))], 0))));
} else {
return cljs__$1;

}
});

net.cgrand.macrovich$macros.case$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
net.cgrand.macrovich$macros.case$.cljs$lang$applyTo = (function (seq70806){
var G__70807 = cljs.core.first(seq70806);
var seq70806__$1 = cljs.core.next(seq70806);
var G__70808 = cljs.core.first(seq70806__$1);
var seq70806__$2 = cljs.core.next(seq70806__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70807,G__70808,seq70806__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.case$.cljs$lang$macro = true;

var ret__4776__auto___70887 = (function (){
net.cgrand.macrovich$macros.replace = (function net$cgrand$macrovich$macros$replace(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70895 = arguments.length;
var i__4731__auto___70896 = (0);
while(true){
if((i__4731__auto___70896 < len__4730__auto___70895)){
args__4736__auto__.push((arguments[i__4731__auto___70896]));

var G__70897 = (i__4731__auto___70896 + (1));
i__4731__auto___70896 = G__70897;
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
return (function net$cgrand$macrovich$macros$walk_$_iter__70829(s__70830){
return (new cljs.core.LazySeq(null,((function (smap){
return (function (){
var s__70830__$1 = s__70830;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70830__$1);
if(temp__5720__auto__){
var s__70830__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70830__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__70830__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__70832 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__70831 = (0);
while(true){
if((i__70831 < size__4522__auto__)){
var vec__70833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__70831);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70833,(1),null);
cljs.core.chunk_append(b__70832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk(k),net$cgrand$macrovich$macros$walk(v)], null));

var G__70917 = (i__70831 + (1));
i__70831 = G__70917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70832),net$cgrand$macrovich$macros$walk_$_iter__70829(cljs.core.chunk_rest(s__70830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70832),null);
}
} else {
var vec__70836 = cljs.core.first(s__70830__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70836,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk(k),net$cgrand$macrovich$macros$walk(v)], null),net$cgrand$macrovich$macros$walk_$_iter__70829(cljs.core.rest(s__70830__$2)));
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
net.cgrand.macrovich$macros.replace.cljs$lang$applyTo = (function (seq70820){
var G__70821 = cljs.core.first(seq70820);
var seq70820__$1 = cljs.core.next(seq70820);
var G__70822 = cljs.core.first(seq70820__$1);
var seq70820__$2 = cljs.core.next(seq70820__$1);
var G__70823 = cljs.core.first(seq70820__$2);
var seq70820__$3 = cljs.core.next(seq70820__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70821,G__70822,G__70823,seq70820__$3);
});

return null;
})()
;
net.cgrand.macrovich$macros.replace.cljs$lang$macro = true;


//# sourceMappingURL=net.cgrand.macrovich$macros.js.map
