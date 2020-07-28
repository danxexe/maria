goog.provide('lark.structure.edit$macros');
var ret__4776__auto___55547 = (function (){
/**
 * Wraps `body` in a CodeMirror operation, and returns the array of changes made by the operation.
 */
lark.structure.edit$macros.operation = (function lark$structure$edit$macros$operation(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55548 = arguments.length;
var i__4731__auto___55549 = (0);
while(true){
if((i__4731__auto___55549 < len__4730__auto___55548)){
args__4736__auto__.push((arguments[i__4731__auto___55549]));

var G__55550 = (i__4731__auto___55549 + (1));
i__4731__auto___55549 = G__55550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return lark.structure.edit$macros.operation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

lark.structure.edit$macros.operation.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,editor,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("lark.structure.edit","*changes*","lark.structure.edit/*changes*",-609036311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".on",".on",444793949,null),null,(1),null)),(new cljs.core.List(null,editor,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"changes",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("lark.structure.edit","log-editor-changes","lark.structure.edit/log-editor-changes",-1243380887,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".operation",".operation",-876968048,null),null,(1),null)),(new cljs.core.List(null,editor,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".off",".off",-329355780,null),null,(1),null)),(new cljs.core.List(null,editor,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"changes",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("lark.structure.edit","log-editor-changes","lark.structure.edit/log-editor-changes",-1243380887,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("lark.structure.edit","*changes*","lark.structure.edit/*changes*",-609036311,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0))));
});

lark.structure.edit$macros.operation.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
lark.structure.edit$macros.operation.cljs$lang$applyTo = (function (seq55499){
var G__55500 = cljs.core.first(seq55499);
var seq55499__$1 = cljs.core.next(seq55499);
var G__55501 = cljs.core.first(seq55499__$1);
var seq55499__$2 = cljs.core.next(seq55499__$1);
var G__55502 = cljs.core.first(seq55499__$2);
var seq55499__$3 = cljs.core.next(seq55499__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55500,G__55501,G__55502,seq55499__$3);
});

return null;
})()
;
lark.structure.edit$macros.operation.cljs$lang$macro = true;

var ret__4776__auto___55573 = (function (){
lark.structure.edit$macros.with_formatting = (function lark$structure$edit$macros$with_formatting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55574 = arguments.length;
var i__4731__auto___55575 = (0);
while(true){
if((i__4731__auto___55575 < len__4730__auto___55574)){
args__4736__auto__.push((arguments[i__4731__auto___55575]));

var G__55576 = (i__4731__auto___55575 + (1));
i__4731__auto___55575 = G__55576;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return lark.structure.edit$macros.with_formatting.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

lark.structure.edit$macros.with_formatting.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,editor,body){
var vec__55534 = ((((cljs.core.map_QMARK_(cljs.core.first(body))) || ((cljs.core.first(body) instanceof cljs.core.Symbol))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body),cljs.core.rest(body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55534,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55534,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".operation",".operation",-876968048,null),null,(1),null)),(new cljs.core.List(null,editor,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"res__55526__auto__","res__55526__auto__",899022991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"editor__55527__auto__","editor__55527__auto__",-2039200356,null),null,(1),null)),(new cljs.core.List(null,editor,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__55526__auto__","res__55526__auto__",899022991,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("lark.structure.edit","format!","lark.structure.edit/format!",1274179629,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"editor__55527__auto__","editor__55527__auto__",-2039200356,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,opts,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__55526__auto__","res__55526__auto__",899022991,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

lark.structure.edit$macros.with_formatting.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
lark.structure.edit$macros.with_formatting.cljs$lang$applyTo = (function (seq55528){
var G__55529 = cljs.core.first(seq55528);
var seq55528__$1 = cljs.core.next(seq55528);
var G__55530 = cljs.core.first(seq55528__$1);
var seq55528__$2 = cljs.core.next(seq55528__$1);
var G__55531 = cljs.core.first(seq55528__$2);
var seq55528__$3 = cljs.core.next(seq55528__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55529,G__55530,G__55531,seq55528__$3);
});

return null;
})()
;
lark.structure.edit$macros.with_formatting.cljs$lang$macro = true;

