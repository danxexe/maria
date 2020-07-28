goog.provide('cells.lib$macros');
var ret__4776__auto___55646 = (function (){
/**
 * Returns cell with body wrapped in timeout of n milliseconds.
 */
cells.lib$macros.timeout = (function cells$lib$macros$timeout(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55647 = arguments.length;
var i__4731__auto___55648 = (0);
while(true){
if((i__4731__auto___55648 < len__4730__auto___55647)){
args__4736__auto__.push((arguments[i__4731__auto___55648]));

var G__55649 = (i__4731__auto___55648 + (1));
i__4731__auto___55648 = G__55649;
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
cells.lib$macros.timeout.cljs$lang$applyTo = (function (seq55636){
var G__55637 = cljs.core.first(seq55636);
var seq55636__$1 = cljs.core.next(seq55636);
var G__55638 = cljs.core.first(seq55636__$1);
var seq55636__$2 = cljs.core.next(seq55636__$1);
var G__55639 = cljs.core.first(seq55636__$2);
var seq55636__$3 = cljs.core.next(seq55636__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55637,G__55638,G__55639,seq55636__$3);
});

return null;
})()
;
cells.lib$macros.timeout.cljs$lang$macro = true;

