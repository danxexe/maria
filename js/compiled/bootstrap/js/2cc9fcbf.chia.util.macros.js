goog.provide('chia.util.macros');
var ret__4776__auto___40939 = (function (){
/**
 * Only evaluates `body` at macro-expansion time
 * (wraps macrovich/deftime)
 */
chia.util.macros.macro_time = (function chia$util$macros$macro_time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40940 = arguments.length;
var i__4731__auto___40941 = (0);
while(true){
if((i__4731__auto___40941 < len__4730__auto___40940)){
args__4736__auto__.push((arguments[i__4731__auto___40941]));

var G__40942 = (i__4731__auto___40941 + (1));
i__4731__auto___40941 = G__40942;
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
chia.util.macros.macro_time.cljs$lang$applyTo = (function (seq40899){
var G__40900 = cljs.core.first(seq40899);
var seq40899__$1 = cljs.core.next(seq40899);
var G__40901 = cljs.core.first(seq40899__$1);
var seq40899__$2 = cljs.core.next(seq40899__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40900,G__40901,seq40899__$2);
});

return null;
})()
;
chia.util.macros.macro_time.cljs$lang$macro = true;

var ret__4776__auto___40945 = (function (){
/**
 * Like defmacro, but only evaluated at macro-definition time
 */
chia.util.macros.defmacro = (function chia$util$macros$defmacro(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40946 = arguments.length;
var i__4731__auto___40947 = (0);
while(true){
if((i__4731__auto___40947 < len__4730__auto___40946)){
args__4736__auto__.push((arguments[i__4731__auto___40947]));

var G__40948 = (i__4731__auto___40947 + (1));
i__4731__auto___40947 = G__40948;
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
chia.util.macros.defmacro.cljs$lang$applyTo = (function (seq40910){
var G__40911 = cljs.core.first(seq40910);
var seq40910__$1 = cljs.core.next(seq40910);
var G__40912 = cljs.core.first(seq40910__$1);
var seq40910__$2 = cljs.core.next(seq40910__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40911,G__40912,seq40910__$2);
});

return null;
})()
;
chia.util.macros.defmacro.cljs$lang$macro = true;

var ret__4776__auto___40953 = (function (){
/**
 * Like defn, but only evaluated at macro-definition time
 */
chia.util.macros.defn = (function chia$util$macros$defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40954 = arguments.length;
var i__4731__auto___40955 = (0);
while(true){
if((i__4731__auto___40955 < len__4730__auto___40954)){
args__4736__auto__.push((arguments[i__4731__auto___40955]));

var G__40956 = (i__4731__auto___40955 + (1));
i__4731__auto___40955 = G__40956;
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
chia.util.macros.defn.cljs$lang$applyTo = (function (seq40919){
var G__40920 = cljs.core.first(seq40919);
var seq40919__$1 = cljs.core.next(seq40919);
var G__40921 = cljs.core.first(seq40919__$1);
var seq40919__$2 = cljs.core.next(seq40919__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40920,G__40921,seq40919__$2);
});

return null;
})()
;
chia.util.macros.defn.cljs$lang$macro = true;

var ret__4776__auto___40958 = (function (){
/**
 * Like reader conditionals, but reliable within macros
 * (wraps macrovich/case)
 */
chia.util.macros.case$ = (function chia$util$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40961 = arguments.length;
var i__4731__auto___40962 = (0);
while(true){
if((i__4731__auto___40962 < len__4730__auto___40961)){
args__4736__auto__.push((arguments[i__4731__auto___40962]));

var G__40964 = (i__4731__auto___40962 + (1));
i__4731__auto___40962 = G__40964;
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
chia.util.macros.case$.cljs$lang$applyTo = (function (seq40926){
var G__40927 = cljs.core.first(seq40926);
var seq40926__$1 = cljs.core.next(seq40926);
var G__40928 = cljs.core.first(seq40926__$1);
var seq40926__$2 = cljs.core.next(seq40926__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40927,G__40928,seq40926__$2);
});

return null;
})()
;
chia.util.macros.case$.cljs$lang$macro = true;

