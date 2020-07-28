goog.provide('lark.structure.edit$macros');
goog.require('cljs.core');
var ret__4776__auto___71576 = (function (){
/**
 * Wraps `body` in a CodeMirror operation, and returns the array of changes made by the operation.
 */
lark.structure.edit$macros.operation = (function lark$structure$edit$macros$operation(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71581 = arguments.length;
var i__4731__auto___71582 = (0);
while(true){
if((i__4731__auto___71582 < len__4730__auto___71581)){
args__4736__auto__.push((arguments[i__4731__auto___71582]));

var G__71583 = (i__4731__auto___71582 + (1));
i__4731__auto___71582 = G__71583;
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
lark.structure.edit$macros.operation.cljs$lang$applyTo = (function (seq71513){
var G__71514 = cljs.core.first(seq71513);
var seq71513__$1 = cljs.core.next(seq71513);
var G__71515 = cljs.core.first(seq71513__$1);
var seq71513__$2 = cljs.core.next(seq71513__$1);
var G__71516 = cljs.core.first(seq71513__$2);
var seq71513__$3 = cljs.core.next(seq71513__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71514,G__71515,G__71516,seq71513__$3);
});

return null;
})()
;
lark.structure.edit$macros.operation.cljs$lang$macro = true;

var ret__4776__auto___71603 = (function (){
lark.structure.edit$macros.with_formatting = (function lark$structure$edit$macros$with_formatting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71604 = arguments.length;
var i__4731__auto___71605 = (0);
while(true){
if((i__4731__auto___71605 < len__4730__auto___71604)){
args__4736__auto__.push((arguments[i__4731__auto___71605]));

var G__71606 = (i__4731__auto___71605 + (1));
i__4731__auto___71605 = G__71606;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return lark.structure.edit$macros.with_formatting.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

lark.structure.edit$macros.with_formatting.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,editor,body){
var vec__71571 = ((((cljs.core.map_QMARK_(cljs.core.first(body))) || ((cljs.core.first(body) instanceof cljs.core.Symbol))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body),cljs.core.rest(body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71571,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71571,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".operation",".operation",-876968048,null),null,(1),null)),(new cljs.core.List(null,editor,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"res__71557__auto__","res__71557__auto__",1524351495,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"editor__71558__auto__","editor__71558__auto__",1887692737,null),null,(1),null)),(new cljs.core.List(null,editor,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__71557__auto__","res__71557__auto__",1524351495,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("lark.structure.edit","format!","lark.structure.edit/format!",1274179629,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"editor__71558__auto__","editor__71558__auto__",1887692737,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,opts,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__71557__auto__","res__71557__auto__",1524351495,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

lark.structure.edit$macros.with_formatting.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
lark.structure.edit$macros.with_formatting.cljs$lang$applyTo = (function (seq71559){
var G__71560 = cljs.core.first(seq71559);
var seq71559__$1 = cljs.core.next(seq71559);
var G__71561 = cljs.core.first(seq71559__$1);
var seq71559__$2 = cljs.core.next(seq71559__$1);
var G__71562 = cljs.core.first(seq71559__$2);
var seq71559__$3 = cljs.core.next(seq71559__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71560,G__71561,G__71562,seq71559__$3);
});

return null;
})()
;
lark.structure.edit$macros.with_formatting.cljs$lang$macro = true;


//# sourceMappingURL=lark.structure.edit$macros.js.map
