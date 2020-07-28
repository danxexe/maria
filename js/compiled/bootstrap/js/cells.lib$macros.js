goog.provide('cells.lib$macros');
goog.require('cljs.core');
var ret__4776__auto___71637 = (function (){
/**
 * Returns cell with body wrapped in timeout of n milliseconds.
 */
cells.lib$macros.timeout = (function cells$lib$macros$timeout(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71641 = arguments.length;
var i__4731__auto___71642 = (0);
while(true){
if((i__4731__auto___71642 < len__4730__auto___71641)){
args__4736__auto__.push((arguments[i__4731__auto___71642]));

var G__71643 = (i__4731__auto___71642 + (1));
i__4731__auto___71642 = G__71643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cells.lib$macros.timeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cells.lib$macros.timeout.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cells.lib","-timeout","cells.lib/-timeout",452984313,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
});

cells.lib$macros.timeout.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cells.lib$macros.timeout.cljs$lang$applyTo = (function (seq71618){
var G__71619 = cljs.core.first(seq71618);
var seq71618__$1 = cljs.core.next(seq71618);
var G__71620 = cljs.core.first(seq71618__$1);
var seq71618__$2 = cljs.core.next(seq71618__$1);
var G__71621 = cljs.core.first(seq71618__$2);
var seq71618__$3 = cljs.core.next(seq71618__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71619,G__71620,G__71621,seq71618__$3);
});

return null;
})()
;
cells.lib$macros.timeout.cljs$lang$macro = true;


//# sourceMappingURL=cells.lib$macros.js.map
