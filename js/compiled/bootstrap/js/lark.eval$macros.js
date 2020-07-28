goog.provide('lark.eval$macros');
goog.require('cljs.core');
var ret__4776__auto___70146 = (function (){
/**
 * Define a repl-special function. It will receive current compiler-state and compiler-env as first two args.
 */
lark.eval$macros.defspecial = (function lark$eval$macros$defspecial(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70147 = arguments.length;
var i__4731__auto___70148 = (0);
while(true){
if((i__4731__auto___70148 < len__4730__auto___70147)){
args__4736__auto__.push((arguments[i__4731__auto___70148]));

var G__70152 = (i__4731__auto___70148 + (1));
i__4731__auto___70148 = G__70152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return lark.eval$macros.defspecial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

lark.eval$macros.defspecial.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
var docstring = ((typeof cljs.core.first(body) === 'string')?cljs.core.first(body):null);
var body__$1 = (function (){var G__70129 = body;
if(cljs.core.truth_(docstring)){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__70129);
} else {
return G__70129;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"c-state__70119__auto__","c-state__70119__auto__",-819341204,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c-env__70120__auto__","c-env__70120__auto__",-1148494179,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"source__70121__auto__","source__70121__auto__",1917047857,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__70122__auto__","args__70122__auto__",-369938647,null),null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&source","&source",1566711904,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"source__70121__auto__","source__70121__auto__",1917047857,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-state__70119__auto__","c-state__70119__auto__",-819341204,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c-env__70120__auto__","c-env__70120__auto__",-1148494179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__70122__auto__","args__70122__auto__",-369938647,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,body__$1))))], null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("lark.eval","swap-repl-specials!","lark.eval/swap-repl-specials!",-1060157503,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))], 0)))),null,(1),null))], 0))));
});

lark.eval$macros.defspecial.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
lark.eval$macros.defspecial.cljs$lang$applyTo = (function (seq70123){
var G__70124 = cljs.core.first(seq70123);
var seq70123__$1 = cljs.core.next(seq70123);
var G__70125 = cljs.core.first(seq70123__$1);
var seq70123__$2 = cljs.core.next(seq70123__$1);
var G__70126 = cljs.core.first(seq70123__$2);
var seq70123__$3 = cljs.core.next(seq70123__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70124,G__70125,G__70126,seq70123__$3);
});

return null;
})()
;
lark.eval$macros.defspecial.cljs$lang$macro = true;


//# sourceMappingURL=lark.eval$macros.js.map
