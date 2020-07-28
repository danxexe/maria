goog.provide('chia.util.macros$macros');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('net.cgrand.macrovich');
var ret__4776__auto___69239 = (function (){
/**
 * Only evaluates `body` at macro-expansion time
 * (wraps macrovich/deftime)
 */
chia.util.macros$macros.macro_time = (function chia$util$macros$macros$macro_time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69240 = arguments.length;
var i__4731__auto___69241 = (0);
while(true){
if((i__4731__auto___69241 < len__4730__auto___69240)){
args__4736__auto__.push((arguments[i__4731__auto___69241]));

var G__69242 = (i__4731__auto___69241 + (1));
i__4731__auto___69241 = G__69242;
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
chia.util.macros$macros.macro_time.cljs$lang$applyTo = (function (seq69201){
var G__69202 = cljs.core.first(seq69201);
var seq69201__$1 = cljs.core.next(seq69201);
var G__69203 = cljs.core.first(seq69201__$1);
var seq69201__$2 = cljs.core.next(seq69201__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69202,G__69203,seq69201__$2);
});

return null;
})()
;
chia.util.macros$macros.macro_time.cljs$lang$macro = true;

var ret__4776__auto___69248 = (function (){
/**
 * Like defmacro, but only evaluated at macro-definition time
 */
chia.util.macros$macros.defmacro = (function chia$util$macros$macros$defmacro(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69249 = arguments.length;
var i__4731__auto___69251 = (0);
while(true){
if((i__4731__auto___69251 < len__4730__auto___69249)){
args__4736__auto__.push((arguments[i__4731__auto___69251]));

var G__69252 = (i__4731__auto___69251 + (1));
i__4731__auto___69251 = G__69252;
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
chia.util.macros$macros.defmacro.cljs$lang$applyTo = (function (seq69204){
var G__69205 = cljs.core.first(seq69204);
var seq69204__$1 = cljs.core.next(seq69204);
var G__69206 = cljs.core.first(seq69204__$1);
var seq69204__$2 = cljs.core.next(seq69204__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69205,G__69206,seq69204__$2);
});

return null;
})()
;
chia.util.macros$macros.defmacro.cljs$lang$macro = true;

var ret__4776__auto___69253 = (function (){
/**
 * Like defn, but only evaluated at macro-definition time
 */
chia.util.macros$macros.defn = (function chia$util$macros$macros$defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69255 = arguments.length;
var i__4731__auto___69256 = (0);
while(true){
if((i__4731__auto___69256 < len__4730__auto___69255)){
args__4736__auto__.push((arguments[i__4731__auto___69256]));

var G__69257 = (i__4731__auto___69256 + (1));
i__4731__auto___69256 = G__69257;
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
chia.util.macros$macros.defn.cljs$lang$applyTo = (function (seq69223){
var G__69224 = cljs.core.first(seq69223);
var seq69223__$1 = cljs.core.next(seq69223);
var G__69225 = cljs.core.first(seq69223__$1);
var seq69223__$2 = cljs.core.next(seq69223__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69224,G__69225,seq69223__$2);
});

return null;
})()
;
chia.util.macros$macros.defn.cljs$lang$macro = true;

var ret__4776__auto___69277 = (function (){
/**
 * Like reader conditionals, but reliable within macros
 * (wraps macrovich/case)
 */
chia.util.macros$macros.case$ = (function chia$util$macros$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69278 = arguments.length;
var i__4731__auto___69279 = (0);
while(true){
if((i__4731__auto___69279 < len__4730__auto___69278)){
args__4736__auto__.push((arguments[i__4731__auto___69279]));

var G__69280 = (i__4731__auto___69279 + (1));
i__4731__auto___69279 = G__69280;
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
chia.util.macros$macros.case$.cljs$lang$applyTo = (function (seq69230){
var G__69231 = cljs.core.first(seq69230);
var seq69230__$1 = cljs.core.next(seq69230);
var G__69233 = cljs.core.first(seq69230__$1);
var seq69230__$2 = cljs.core.next(seq69230__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69231,G__69233,seq69230__$2);
});

return null;
})()
;
chia.util.macros$macros.case$.cljs$lang$macro = true;


//# sourceMappingURL=chia.util.macros$macros.js.map
