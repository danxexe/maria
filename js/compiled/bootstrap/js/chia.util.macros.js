goog.provide('chia.util.macros');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('net.cgrand.macrovich');
var ret__4776__auto___56700 = (function (){
/**
 * Only evaluates `body` at macro-expansion time
 * (wraps macrovich/deftime)
 */
chia.util.macros.macro_time = (function chia$util$macros$macro_time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56701 = arguments.length;
var i__4731__auto___56702 = (0);
while(true){
if((i__4731__auto___56702 < len__4730__auto___56701)){
args__4736__auto__.push((arguments[i__4731__auto___56702]));

var G__56703 = (i__4731__auto___56702 + (1));
i__4731__auto___56702 = G__56703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros.macro_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros.macro_time.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("net.cgrand.macrovich","deftime","net.cgrand.macrovich/deftime",159212910,null),null,(1),null)),body)));
});

chia.util.macros.macro_time.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros.macro_time.cljs$lang$applyTo = (function (seq56674){
var G__56675 = cljs.core.first(seq56674);
var seq56674__$1 = cljs.core.next(seq56674);
var G__56676 = cljs.core.first(seq56674__$1);
var seq56674__$2 = cljs.core.next(seq56674__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56675,G__56676,seq56674__$2);
});

return null;
})()
;
chia.util.macros.macro_time.cljs$lang$macro = true;

var ret__4776__auto___56706 = (function (){
/**
 * Like defmacro, but only evaluated at macro-definition time
 */
chia.util.macros.defmacro = (function chia$util$macros$defmacro(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56707 = arguments.length;
var i__4731__auto___56708 = (0);
while(true){
if((i__4731__auto___56708 < len__4730__auto___56707)){
args__4736__auto__.push((arguments[i__4731__auto___56708]));

var G__56709 = (i__4731__auto___56708 + (1));
i__4731__auto___56708 = G__56709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.util.macros","macro-time","chia.util.macros/macro-time",-152519590,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null),null,(1),null)),body))),null,(1),null)))));
});

chia.util.macros.defmacro.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros.defmacro.cljs$lang$applyTo = (function (seq56681){
var G__56682 = cljs.core.first(seq56681);
var seq56681__$1 = cljs.core.next(seq56681);
var G__56683 = cljs.core.first(seq56681__$1);
var seq56681__$2 = cljs.core.next(seq56681__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56682,G__56683,seq56681__$2);
});

return null;
})()
;
chia.util.macros.defmacro.cljs$lang$macro = true;

var ret__4776__auto___56711 = (function (){
/**
 * Like defn, but only evaluated at macro-definition time
 */
chia.util.macros.defn = (function chia$util$macros$defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56714 = arguments.length;
var i__4731__auto___56715 = (0);
while(true){
if((i__4731__auto___56715 < len__4730__auto___56714)){
args__4736__auto__.push((arguments[i__4731__auto___56715]));

var G__56717 = (i__4731__auto___56715 + (1));
i__4731__auto___56715 = G__56717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.util.macros","macro-time","chia.util.macros/macro-time",-152519590,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),body))),null,(1),null)))));
});

chia.util.macros.defn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros.defn.cljs$lang$applyTo = (function (seq56688){
var G__56689 = cljs.core.first(seq56688);
var seq56688__$1 = cljs.core.next(seq56688);
var G__56690 = cljs.core.first(seq56688__$1);
var seq56688__$2 = cljs.core.next(seq56688__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56689,G__56690,seq56688__$2);
});

return null;
})()
;
chia.util.macros.defn.cljs$lang$macro = true;

var ret__4776__auto___56722 = (function (){
/**
 * Like reader conditionals, but reliable within macros
 * (wraps macrovich/case)
 */
chia.util.macros.case$ = (function chia$util$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56724 = arguments.length;
var i__4731__auto___56725 = (0);
while(true){
if((i__4731__auto___56725 < len__4730__auto___56724)){
args__4736__auto__.push((arguments[i__4731__auto___56725]));

var G__56726 = (i__4731__auto___56725 + (1));
i__4731__auto___56725 = G__56726;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("net.cgrand.macrovich","case","net.cgrand.macrovich/case",-935304309,null),null,(1),null)),body)));
});

chia.util.macros.case$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.macros.case$.cljs$lang$applyTo = (function (seq56691){
var G__56692 = cljs.core.first(seq56691);
var seq56691__$1 = cljs.core.next(seq56691);
var G__56693 = cljs.core.first(seq56691__$1);
var seq56691__$2 = cljs.core.next(seq56691__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56692,G__56693,seq56691__$2);
});

return null;
})()
;
chia.util.macros.case$.cljs$lang$macro = true;


//# sourceMappingURL=chia.util.macros.js.map
