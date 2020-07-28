goog.provide('chia.util.macros$macros');
var ret__4776__auto___53105 = (function (){
/**
 * Only evaluates `body` at macro-expansion time
 * (wraps macrovich/deftime)
 */
chia.util.macros$macros.macro_time = (function chia$util$macros$macros$macro_time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53106 = arguments.length;
var i__4731__auto___53107 = (0);
while(true){
if((i__4731__auto___53107 < len__4730__auto___53106)){
args__4736__auto__.push((arguments[i__4731__auto___53107]));

var G__53108 = (i__4731__auto___53107 + (1));
i__4731__auto___53107 = G__53108;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros$macros.macro_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros$macros.macro_time.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("net.cgrand.macrovich","deftime","net.cgrand.macrovich/deftime",159212910,null),null,(1),null)),body)));
});

chia.util.macros$macros.macro_time.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros$macros.macro_time.cljs$lang$applyTo = (function (seq53060){
var G__53061 = cljs.core.first(seq53060);
var seq53060__$1 = cljs.core.next(seq53060);
var G__53062 = cljs.core.first(seq53060__$1);
var seq53060__$2 = cljs.core.next(seq53060__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53061,G__53062,seq53060__$2);
});

return null;
})()
;
chia.util.macros$macros.macro_time.cljs$lang$macro = true;

var ret__4776__auto___53116 = (function (){
/**
 * Like defmacro, but only evaluated at macro-definition time
 */
chia.util.macros$macros.defmacro = (function chia$util$macros$macros$defmacro(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53117 = arguments.length;
var i__4731__auto___53118 = (0);
while(true){
if((i__4731__auto___53118 < len__4730__auto___53117)){
args__4736__auto__.push((arguments[i__4731__auto___53118]));

var G__53120 = (i__4731__auto___53118 + (1));
i__4731__auto___53118 = G__53120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.util.macros","macro-time","chia.util.macros/macro-time",-152519590,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null),null,(1),null)),body))),null,(1),null)))));
});

chia.util.macros$macros.defmacro.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros$macros.defmacro.cljs$lang$applyTo = (function (seq53067){
var G__53068 = cljs.core.first(seq53067);
var seq53067__$1 = cljs.core.next(seq53067);
var G__53069 = cljs.core.first(seq53067__$1);
var seq53067__$2 = cljs.core.next(seq53067__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53068,G__53069,seq53067__$2);
});

return null;
})()
;
chia.util.macros$macros.defmacro.cljs$lang$macro = true;

var ret__4776__auto___53126 = (function (){
/**
 * Like defn, but only evaluated at macro-definition time
 */
chia.util.macros$macros.defn = (function chia$util$macros$macros$defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53128 = arguments.length;
var i__4731__auto___53129 = (0);
while(true){
if((i__4731__auto___53129 < len__4730__auto___53128)){
args__4736__auto__.push((arguments[i__4731__auto___53129]));

var G__53130 = (i__4731__auto___53129 + (1));
i__4731__auto___53129 = G__53130;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros$macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros$macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.util.macros","macro-time","chia.util.macros/macro-time",-152519590,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),body))),null,(1),null)))));
});

chia.util.macros$macros.defn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros$macros.defn.cljs$lang$applyTo = (function (seq53075){
var G__53076 = cljs.core.first(seq53075);
var seq53075__$1 = cljs.core.next(seq53075);
var G__53077 = cljs.core.first(seq53075__$1);
var seq53075__$2 = cljs.core.next(seq53075__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53076,G__53077,seq53075__$2);
});

return null;
})()
;
chia.util.macros$macros.defn.cljs$lang$macro = true;

var ret__4776__auto___53132 = (function (){
/**
 * Like reader conditionals, but reliable within macros
 * (wraps macrovich/case)
 */
chia.util.macros$macros.case$ = (function chia$util$macros$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53133 = arguments.length;
var i__4731__auto___53134 = (0);
while(true){
if((i__4731__auto___53134 < len__4730__auto___53133)){
args__4736__auto__.push((arguments[i__4731__auto___53134]));

var G__53135 = (i__4731__auto___53134 + (1));
i__4731__auto___53134 = G__53135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("net.cgrand.macrovich","case","net.cgrand.macrovich/case",-935304309,null),null,(1),null)),body)));
});

chia.util.macros$macros.case$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros$macros.case$.cljs$lang$applyTo = (function (seq53086){
var G__53087 = cljs.core.first(seq53086);
var seq53086__$1 = cljs.core.next(seq53086);
var G__53088 = cljs.core.first(seq53086__$1);
var seq53086__$2 = cljs.core.next(seq53086__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53087,G__53088,seq53086__$2);
});

return null;
})()
;
chia.util.macros$macros.case$.cljs$lang$macro = true;

