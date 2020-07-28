goog.provide('kitchen_async.promise$macros');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('kitchen_async.specs.promise_macros');
var ret__4776__auto___71044 = (function (){
kitchen_async.promise$macros.promise = (function kitchen_async$promise$macros$promise(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71046 = arguments.length;
var i__4731__auto___71047 = (0);
while(true){
if((i__4731__auto___71047 < len__4730__auto___71046)){
args__4736__auto__.push((arguments[i__4731__auto___71047]));

var G__71050 = (i__4731__auto___71047 + (1));
i__4731__auto___71047 = G__71050;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.promise.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.promise.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__70668,body){
var vec__70669 = p__70668;
var resolve = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70669,(0),null);
var reject = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70669,(1),null);
var params = (function (){var G__70672 = cljs.core.PersistentVector.EMPTY;
var G__70672__$1 = (cljs.core.truth_(resolve)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70672,resolve):G__70672);
if(cljs.core.truth_(reject)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70672__$1,reject);
} else {
return G__70672__$1;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","let","cc/let",358091210,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"p__70655__auto__","p__70655__auto__",1415948853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","promise-impl","kitchen-async.promise/promise-impl",-1868028501,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__70655__auto__","p__70655__auto__",1415948853,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,params,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

kitchen_async.promise$macros.promise.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.promise.cljs$lang$applyTo = (function (seq70656){
var G__70657 = cljs.core.first(seq70656);
var seq70656__$1 = cljs.core.next(seq70656);
var G__70658 = cljs.core.first(seq70656__$1);
var seq70656__$2 = cljs.core.next(seq70656__$1);
var G__70659 = cljs.core.first(seq70656__$2);
var seq70656__$3 = cljs.core.next(seq70656__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70657,G__70658,G__70659,seq70656__$3);
});

return null;
})()
;
kitchen_async.promise$macros.promise.cljs$lang$macro = true;

var ret__4776__auto___71057 = (function (){
kitchen_async.promise$macros.with_error_handling = (function kitchen_async$promise$macros$with_error_handling(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71058 = arguments.length;
var i__4731__auto___71059 = (0);
while(true){
if((i__4731__auto___71059 < len__4730__auto___71058)){
args__4736__auto__.push((arguments[i__4731__auto___71059]));

var G__71060 = (i__4731__auto___71059 + (1));
i__4731__auto___71059 = G__71060;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kitchen_async.promise$macros.with_error_handling.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.with_error_handling.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__70673__auto__","e__70673__auto__",-1576965983,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","reject","kitchen-async.promise/reject",490748512,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__70673__auto__","e__70673__auto__",-1576965983,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

kitchen_async.promise$macros.with_error_handling.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.with_error_handling.cljs$lang$applyTo = (function (seq70674){
var G__70675 = cljs.core.first(seq70674);
var seq70674__$1 = cljs.core.next(seq70674);
var G__70676 = cljs.core.first(seq70674__$1);
var seq70674__$2 = cljs.core.next(seq70674__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70675,G__70676,seq70674__$2);
});

return null;
})()
;
kitchen_async.promise$macros.with_error_handling.cljs$lang$macro = true;

var ret__4776__auto___71068 = (function (){
kitchen_async.promise$macros.do_STAR_ = (function kitchen_async$promise$macros$do_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71069 = arguments.length;
var i__4731__auto___71070 = (0);
while(true){
if((i__4731__auto___71070 < len__4730__auto___71069)){
args__4736__auto__.push((arguments[i__4731__auto___71070]));

var G__71071 = (i__4731__auto___71070 + (1));
i__4731__auto___71070 = G__71071;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kitchen_async.promise$macros.do_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.do_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
if(cljs.core.empty_QMARK_(exprs)){
return null;
} else {
var rec = (function kitchen_async$promise$macros$rec(expr,exprs__$1){
if(cljs.core.empty_QMARK_(exprs__$1)){
return expr;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___70687__auto__","___70687__auto__",-1979375616,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,kitchen_async$promise$macros$rec(cljs.core.first(exprs__$1),cljs.core.rest(exprs__$1)),null,(1),null))], 0)))),null,(1),null))], 0))));
}
});
return rec(cljs.core.first(exprs),cljs.core.rest(exprs));
}
});

kitchen_async.promise$macros.do_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.do_STAR_.cljs$lang$applyTo = (function (seq70688){
var G__70689 = cljs.core.first(seq70688);
var seq70688__$1 = cljs.core.next(seq70688);
var G__70690 = cljs.core.first(seq70688__$1);
var seq70688__$2 = cljs.core.next(seq70688__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70689,G__70690,seq70688__$2);
});

return null;
})()
;
kitchen_async.promise$macros.do_STAR_.cljs$lang$macro = true;

var ret__4776__auto___71080 = (function (){
kitchen_async.promise$macros.do$ = (function kitchen_async$promise$macros$do(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71083 = arguments.length;
var i__4731__auto___71084 = (0);
while(true){
if((i__4731__auto___71084 < len__4730__auto___71083)){
args__4736__auto__.push((arguments[i__4731__auto___71084]));

var G__71089 = (i__4731__auto___71084 + (1));
i__4731__auto___71084 = G__71089;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kitchen_async.promise$macros.do$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.do$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.empty_QMARK_(body)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","resolve","kitchen-async.promise/resolve",1505605469,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","->promise","kitchen-async.promise/->promise",92939413,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}
});

kitchen_async.promise$macros.do$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.do$.cljs$lang$applyTo = (function (seq70707){
var G__70708 = cljs.core.first(seq70707);
var seq70707__$1 = cljs.core.next(seq70707);
var G__70709 = cljs.core.first(seq70707__$1);
var seq70707__$2 = cljs.core.next(seq70707__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70708,G__70709,seq70707__$2);
});

return null;
})()
;
kitchen_async.promise$macros.do$.cljs$lang$macro = true;

var ret__4776__auto___71101 = (function (){
kitchen_async.promise$macros.let$ = (function kitchen_async$promise$macros$let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71102 = arguments.length;
var i__4731__auto___71103 = (0);
while(true){
if((i__4731__auto___71103 < len__4730__auto___71102)){
args__4736__auto__.push((arguments[i__4731__auto___71103]));

var G__71104 = (i__4731__auto___71103 + (1));
i__4731__auto___71103 = G__71104;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var rec = (function kitchen_async$promise$macros$rec(p__70773,body__$1){
var vec__70774 = p__70773;
var seq__70775 = cljs.core.seq(vec__70774);
var first__70776 = cljs.core.first(seq__70775);
var seq__70775__$1 = cljs.core.next(seq__70775);
var name = first__70776;
var first__70776__$1 = cljs.core.first(seq__70775__$1);
var seq__70775__$2 = cljs.core.next(seq__70775__$1);
var init = first__70776__$1;
var bindings__$1 = seq__70775__$2;
if(cljs.core.not(name)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),body__$1)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,init,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,kitchen_async$promise$macros$rec(bindings__$1,body__$1),null,(1),null))], 0)))),null,(1),null))], 0))));
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","->promise","kitchen-async.promise/->promise",92939413,null),null,(1),null)),(new cljs.core.List(null,rec(bindings,body),null,(1),null))))),null,(1),null)))));
});

kitchen_async.promise$macros.let$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.let$.cljs$lang$applyTo = (function (seq70748){
var G__70749 = cljs.core.first(seq70748);
var seq70748__$1 = cljs.core.next(seq70748);
var G__70750 = cljs.core.first(seq70748__$1);
var seq70748__$2 = cljs.core.next(seq70748__$1);
var G__70751 = cljs.core.first(seq70748__$2);
var seq70748__$3 = cljs.core.next(seq70748__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70749,G__70750,G__70751,seq70748__$3);
});

return null;
})()
;
kitchen_async.promise$macros.let$.cljs$lang$macro = true;

var ret__4776__auto___71113 = (function (){
kitchen_async.promise$macros.plet = (function kitchen_async$promise$macros$plet(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71114 = arguments.length;
var i__4731__auto___71115 = (0);
while(true){
if((i__4731__auto___71115 < len__4730__auto___71114)){
args__4736__auto__.push((arguments[i__4731__auto___71115]));

var G__71116 = (i__4731__auto___71115 + (1));
i__4731__auto___71115 = G__71116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.plet.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.plet.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),bindings);
var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var inits = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,names){
return (function (p__70799){
var vec__70800 = p__70799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70800,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70800,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","->promise","kitchen-async.promise/->promise",92939413,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))));
});})(pairs,names))
,pairs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"goog.Promise.all","goog.Promise.all",-1380509268,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into-array","cljs.core/into-array",1215545861,null),null,(1),null)),(new cljs.core.List(null,inits,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,names,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))));
});

kitchen_async.promise$macros.plet.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.plet.cljs$lang$applyTo = (function (seq70792){
var G__70793 = cljs.core.first(seq70792);
var seq70792__$1 = cljs.core.next(seq70792);
var G__70794 = cljs.core.first(seq70792__$1);
var seq70792__$2 = cljs.core.next(seq70792__$1);
var G__70795 = cljs.core.first(seq70792__$2);
var seq70792__$3 = cljs.core.next(seq70792__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70793,G__70794,G__70795,seq70792__$3);
});

return null;
})()
;
kitchen_async.promise$macros.plet.cljs$lang$macro = true;

kitchen_async.promise$macros.LOOP_FN_NAME = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"loop-fn","loop-fn",1125545302,null));
var ret__4776__auto___71121 = (function (){
kitchen_async.promise$macros.loop = (function kitchen_async$promise$macros$loop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71126 = arguments.length;
var i__4731__auto___71127 = (0);
while(true){
if((i__4731__auto___71127 < len__4730__auto___71126)){
args__4736__auto__.push((arguments[i__4731__auto___71127]));

var G__71128 = (i__4731__auto___71127 + (1));
i__4731__auto___71127 = G__71128;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),bindings);
var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var inits = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var gensyms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pairs,names,inits){
return (function (_){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
});})(pairs,names,inits))
,names);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","letfn","cljs.core/letfn",-874326064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,kitchen_async.promise$macros.LOOP_FN_NAME,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(gensyms)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","plet","kitchen-async.promise/plet",-1044368244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(names,gensyms))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,kitchen_async.promise$macros.LOOP_FN_NAME,null,(1),null)),inits))),null,(1),null))))),null,(1),null))], 0))));
});

kitchen_async.promise$macros.loop.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.loop.cljs$lang$applyTo = (function (seq70813){
var G__70814 = cljs.core.first(seq70813);
var seq70813__$1 = cljs.core.next(seq70813);
var G__70815 = cljs.core.first(seq70813__$1);
var seq70813__$2 = cljs.core.next(seq70813__$1);
var G__70816 = cljs.core.first(seq70813__$2);
var seq70813__$3 = cljs.core.next(seq70813__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70814,G__70815,G__70816,seq70813__$3);
});

return null;
})()
;
kitchen_async.promise$macros.loop.cljs$lang$macro = true;

var ret__4776__auto___71149 = (function (){
kitchen_async.promise$macros.recur = (function kitchen_async$promise$macros$recur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71150 = arguments.length;
var i__4731__auto___71151 = (0);
while(true){
if((i__4731__auto___71151 < len__4730__auto___71150)){
args__4736__auto__.push((arguments[i__4731__auto___71151]));

var G__71152 = (i__4731__auto___71151 + (1));
i__4731__auto___71151 = G__71152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kitchen_async.promise$macros.recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),kitchen_async.promise$macros.LOOP_FN_NAME)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't call kitchen-async.promise/recur outside of kitchen-async.promise/loop",cljs.core.PersistentArrayMap.EMPTY);
} else {
var gensyms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (_){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}),args);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","plet","kitchen-async.promise/plet",-1044368244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gensyms,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,kitchen_async.promise$macros.LOOP_FN_NAME,null,(1),null)),gensyms))),null,(1),null))], 0))));
}
});

kitchen_async.promise$macros.recur.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.recur.cljs$lang$applyTo = (function (seq70826){
var G__70827 = cljs.core.first(seq70826);
var seq70826__$1 = cljs.core.next(seq70826);
var G__70828 = cljs.core.first(seq70826__$1);
var seq70826__$2 = cljs.core.next(seq70826__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70827,G__70828,seq70826__$2);
});

return null;
})()
;
kitchen_async.promise$macros.recur.cljs$lang$macro = true;

var ret__4776__auto___71159 = (function (){
kitchen_async.promise$macros.while$ = (function kitchen_async$promise$macros$while(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71160 = arguments.length;
var i__4731__auto___71161 = (0);
while(true){
if((i__4731__auto___71161 < len__4730__auto___71160)){
args__4736__auto__.push((arguments[i__4731__auto___71161]));

var G__71162 = (i__4731__auto___71161 + (1));
i__4731__auto___71161 = G__71162;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,cond,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"v__70839__auto__","v__70839__auto__",-1487115019,null),null,(1),null)),(new cljs.core.List(null,cond,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__70839__auto__","v__70839__auto__",-1487115019,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___70840__auto__","___70840__auto__",-195490418,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","recur","kitchen-async.promise/recur",-384468749,null),null,(1),null)),(new cljs.core.List(null,cond,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

kitchen_async.promise$macros.while$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.while$.cljs$lang$applyTo = (function (seq70841){
var G__70842 = cljs.core.first(seq70841);
var seq70841__$1 = cljs.core.next(seq70841);
var G__70844 = cljs.core.first(seq70841__$1);
var seq70841__$2 = cljs.core.next(seq70841__$1);
var G__70847 = cljs.core.first(seq70841__$2);
var seq70841__$3 = cljs.core.next(seq70841__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70842,G__70844,G__70847,seq70841__$3);
});

return null;
})()
;
kitchen_async.promise$macros.while$.cljs$lang$macro = true;

kitchen_async.promise$macros.interop_QMARK_ = (function kitchen_async$promise$macros$interop_QMARK_(form){
return (((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(form),(0)),".")));
});
var ret__4776__auto___71179 = (function (){
kitchen_async.promise$macros.__GT_ = (function kitchen_async$promise$macros$__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71180 = arguments.length;
var i__4731__auto___71181 = (0);
while(true){
if((i__4731__auto___71181 < len__4730__auto___71180)){
args__4736__auto__.push((arguments[i__4731__auto___71181]));

var G__71188 = (i__4731__auto___71181 + (1));
i__4731__auto___71181 = G__71188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
if(cljs.core.truth_(forms)){
var vec__70884 = forms;
var seq__70885 = cljs.core.seq(vec__70884);
var first__70886 = cljs.core.first(seq__70885);
var seq__70885__$1 = cljs.core.next(seq__70885);
var form = first__70886;
var forms__$1 = seq__70885__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.seq_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__70869__auto__","v__70869__auto__",-1979823541,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__70869__auto__","v__70869__auto__",-1979823541,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(form)], 0)))),null,(1),null))], 0)))):((kitchen_async.promise$macros.interop_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__70871__auto__","v__70871__auto__",1472785205,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__70871__auto__","v__70871__auto__",1472785205,null),null,(1),null))))),null,(1),null))], 0)))):form
)),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms__$1], 0)))),null,(1),null)))));
} else {
return x;
}
});

kitchen_async.promise$macros.__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.__GT_.cljs$lang$applyTo = (function (seq70875){
var G__70876 = cljs.core.first(seq70875);
var seq70875__$1 = cljs.core.next(seq70875);
var G__70877 = cljs.core.first(seq70875__$1);
var seq70875__$2 = cljs.core.next(seq70875__$1);
var G__70878 = cljs.core.first(seq70875__$2);
var seq70875__$3 = cljs.core.next(seq70875__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70876,G__70877,G__70878,seq70875__$3);
});

return null;
})()
;
kitchen_async.promise$macros.__GT_.cljs$lang$macro = true;

var ret__4776__auto___71198 = (function (){
kitchen_async.promise$macros.__GT__GT_ = (function kitchen_async$promise$macros$__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71203 = arguments.length;
var i__4731__auto___71204 = (0);
while(true){
if((i__4731__auto___71204 < len__4730__auto___71203)){
args__4736__auto__.push((arguments[i__4731__auto___71204]));

var G__71205 = (i__4731__auto___71204 + (1));
i__4731__auto___71204 = G__71205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
if(cljs.core.truth_(forms)){
var vec__70914 = forms;
var seq__70915 = cljs.core.seq(vec__70914);
var first__70916 = cljs.core.first(seq__70915);
var seq__70915__$1 = cljs.core.next(seq__70915);
var form = first__70916;
var forms__$1 = seq__70915__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.seq_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__70905__auto__","v__70905__auto__",-1254535801,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(form,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__70905__auto__","v__70905__auto__",-1254535801,null),null,(1),null))))),null,(1),null))], 0)))):((kitchen_async.promise$macros.interop_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__70906__auto__","v__70906__auto__",884003211,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__70906__auto__","v__70906__auto__",884003211,null),null,(1),null))))),null,(1),null))], 0)))):form
)),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms__$1], 0)))),null,(1),null)))));
} else {
return x;
}
});

kitchen_async.promise$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.__GT__GT_.cljs$lang$applyTo = (function (seq70910){
var G__70911 = cljs.core.first(seq70910);
var seq70910__$1 = cljs.core.next(seq70910);
var G__70912 = cljs.core.first(seq70910__$1);
var seq70910__$2 = cljs.core.next(seq70910__$1);
var G__70913 = cljs.core.first(seq70910__$2);
var seq70910__$3 = cljs.core.next(seq70910__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70911,G__70912,G__70913,seq70910__$3);
});

return null;
})()
;
kitchen_async.promise$macros.__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___71207 = (function (){
kitchen_async.promise$macros.some__GT_ = (function kitchen_async$promise$macros$some__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71208 = arguments.length;
var i__4731__auto___71209 = (0);
while(true){
if((i__4731__auto___71209 < len__4730__auto___71208)){
args__4736__auto__.push((arguments[i__4731__auto___71209]));

var G__71210 = (i__4731__auto___71209 + (1));
i__4731__auto___71209 = G__71210;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (g){
return (function kitchen_async$promise$macros$iter__70927(s__70928){
return (new cljs.core.LazySeq(null,((function (g){
return (function (){
var s__70928__$1 = s__70928;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70928__$1);
if(temp__5720__auto__){
var s__70928__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70928__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__70928__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__70930 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__70929 = (0);
while(true){
if((i__70929 < size__4522__auto__)){
var form = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__70929);
cljs.core.chunk_append(b__70930,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->","cc/->",-2139604438,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))));

var G__71223 = (i__70929 + (1));
i__70929 = G__71223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70930),kitchen_async$promise$macros$iter__70927(cljs.core.chunk_rest(s__70928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70930),null);
}
} else {
var form = cljs.core.first(s__70928__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->","cc/->",-2139604438,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),kitchen_async$promise$macros$iter__70927(cljs.core.rest(s__70928__$2)));
}
} else {
return null;
}
break;
}
});})(g))
,null,null));
});})(g))
;
return iter__4523__auto__(forms);
})()], 0))));
});

kitchen_async.promise$macros.some__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.some__GT_.cljs$lang$applyTo = (function (seq70922){
var G__70923 = cljs.core.first(seq70922);
var seq70922__$1 = cljs.core.next(seq70922);
var G__70924 = cljs.core.first(seq70922__$1);
var seq70922__$2 = cljs.core.next(seq70922__$1);
var G__70925 = cljs.core.first(seq70922__$2);
var seq70922__$3 = cljs.core.next(seq70922__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70923,G__70924,G__70925,seq70922__$3);
});

return null;
})()
;
kitchen_async.promise$macros.some__GT_.cljs$lang$macro = true;

var ret__4776__auto___71234 = (function (){
kitchen_async.promise$macros.some__GT__GT_ = (function kitchen_async$promise$macros$some__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71235 = arguments.length;
var i__4731__auto___71236 = (0);
while(true){
if((i__4731__auto___71236 < len__4730__auto___71235)){
args__4736__auto__.push((arguments[i__4731__auto___71236]));

var G__71237 = (i__4731__auto___71236 + (1));
i__4731__auto___71236 = G__71237;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (g){
return (function kitchen_async$promise$macros$iter__70951(s__70952){
return (new cljs.core.LazySeq(null,((function (g){
return (function (){
var s__70952__$1 = s__70952;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70952__$1);
if(temp__5720__auto__){
var s__70952__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70952__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__70952__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__70954 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__70953 = (0);
while(true){
if((i__70953 < size__4522__auto__)){
var form = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__70953);
cljs.core.chunk_append(b__70954,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->>","cc/->>",-1874343585,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))));

var G__71297 = (i__70953 + (1));
i__70953 = G__71297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70954),kitchen_async$promise$macros$iter__70951(cljs.core.chunk_rest(s__70952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70954),null);
}
} else {
var form = cljs.core.first(s__70952__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->>","cc/->>",-1874343585,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),kitchen_async$promise$macros$iter__70951(cljs.core.rest(s__70952__$2)));
}
} else {
return null;
}
break;
}
});})(g))
,null,null));
});})(g))
;
return iter__4523__auto__(forms);
})()], 0))));
});

kitchen_async.promise$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq70945){
var G__70946 = cljs.core.first(seq70945);
var seq70945__$1 = cljs.core.next(seq70945);
var G__70947 = cljs.core.first(seq70945__$1);
var seq70945__$2 = cljs.core.next(seq70945__$1);
var G__70948 = cljs.core.first(seq70945__$2);
var seq70945__$3 = cljs.core.next(seq70945__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70946,G__70947,G__70948,seq70945__$3);
});

return null;
})()
;
kitchen_async.promise$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___71305 = (function (){
kitchen_async.promise$macros.try$ = (function kitchen_async$promise$macros$try(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71306 = arguments.length;
var i__4731__auto___71307 = (0);
while(true){
if((i__4731__auto___71307 < len__4730__auto___71306)){
args__4736__auto__.push((arguments[i__4731__auto___71307]));

var G__71308 = (i__4731__auto___71307 + (1));
i__4731__auto___71307 = G__71308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kitchen_async.promise$macros.try$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.try$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var conformed = cljs.spec.alpha.conform(new cljs.core.Keyword("kitchen-async.specs.promise-macros","try-args","kitchen-async.specs.promise-macros/try-args",-903179709),body);
var try_body = cljs.spec.alpha.unform(new cljs.core.Keyword("kitchen-async.specs.promise-macros","try-body","kitchen-async.specs.promise-macros/try-body",-1405264936),new cljs.core.Keyword(null,"try-body","try-body",2041162110).cljs$core$IFn$_invoke$arity$1(conformed));
var err = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"err","err",-448925678,null));
var emit_catch = ((function (conformed,try_body,err){
return (function kitchen_async$promise$macros$emit_catch(p__70982){
var map__70983 = p__70982;
var map__70983__$1 = (((((!((map__70983 == null))))?(((((map__70983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70983):map__70983);
var error_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70983__$1,new cljs.core.Keyword(null,"error-type","error-type",1096890596));
var error_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70983__$1,new cljs.core.Keyword(null,"error-name","error-name",-461307167));
var catch_body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70983__$1,new cljs.core.Keyword(null,"catch-body","catch-body",588849767));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(error_type),new cljs.core.Keyword(null,"default","default",-1987822328)))?new cljs.core.Keyword(null,"else","else",-1508377146):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(error_type),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,err,null,(1),null))], 0))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","let","cc/let",358091210,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,error_name,null,(1),null)),(new cljs.core.List(null,err,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),catch_body))),null,(1),null))], 0))))], null);
});})(conformed,try_body,err))
;
var emit_catches = ((function (conformed,try_body,err){
return (function kitchen_async$promise$macros$emit_catches(clauses){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","catch*","kitchen-async.promise/catch*",-358758953,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,err,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(emit_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clauses], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(((function (conformed,try_body,err){
return (function (p1__70961_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-type","error-type",1096890596).cljs$core$IFn$_invoke$arity$1(p1__70961_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(conformed,try_body,err))
,clauses))?null:cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","reject","kitchen-async.promise/reject",490748512,null),null,(1),null)),(new cljs.core.List(null,err,null,(1),null))))),null,(1),null)))))))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
});})(conformed,try_body,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->","cc/->",-2139604438,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do","kitchen-async.promise/do",-1619934900,null),null,(1),null)),try_body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"catch-clauses","catch-clauses",-2098694552).cljs$core$IFn$_invoke$arity$1(conformed);
if(cljs.core.truth_(temp__5720__auto__)){
var clauses = temp__5720__auto__;
return emit_catches(clauses);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"finally-clause","finally-clause",-1033009960).cljs$core$IFn$_invoke$arity$1(conformed);
if(cljs.core.truth_(temp__5720__auto__)){
var clause = temp__5720__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","finally*","kitchen-async.promise/finally*",1563774677,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__70964__auto__","v__70964__auto__",-1794766749,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),new cljs.core.Keyword(null,"finally-body","finally-body",1822091404).cljs$core$IFn$_invoke$arity$1(clause),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"v__70964__auto__","v__70964__auto__",-1794766749,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
})()], 0))));
});

kitchen_async.promise$macros.try$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.try$.cljs$lang$applyTo = (function (seq70968){
var G__70969 = cljs.core.first(seq70968);
var seq70968__$1 = cljs.core.next(seq70968);
var G__70970 = cljs.core.first(seq70968__$1);
var seq70968__$2 = cljs.core.next(seq70968__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70969,G__70970,seq70968__$2);
});

return null;
})()
;
kitchen_async.promise$macros.try$.cljs$lang$macro = true;

var ret__4776__auto___71353 = (function (){
kitchen_async.promise$macros.catch$ = (function kitchen_async$promise$macros$catch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71358 = arguments.length;
var i__4731__auto___71359 = (0);
while(true){
if((i__4731__auto___71359 < len__4730__auto___71358)){
args__4736__auto__.push((arguments[i__4731__auto___71359]));

var G__71360 = (i__4731__auto___71359 + (1));
i__4731__auto___71359 = G__71360;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return kitchen_async.promise$macros.catch$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.catch$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,classname,name,expr_STAR_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't call kitchen-async.promise/catch outside of kitchen-async.promise/try",cljs.core.PersistentArrayMap.EMPTY);
});

kitchen_async.promise$macros.catch$.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
kitchen_async.promise$macros.catch$.cljs$lang$applyTo = (function (seq71021){
var G__71022 = cljs.core.first(seq71021);
var seq71021__$1 = cljs.core.next(seq71021);
var G__71023 = cljs.core.first(seq71021__$1);
var seq71021__$2 = cljs.core.next(seq71021__$1);
var G__71024 = cljs.core.first(seq71021__$2);
var seq71021__$3 = cljs.core.next(seq71021__$2);
var G__71025 = cljs.core.first(seq71021__$3);
var seq71021__$4 = cljs.core.next(seq71021__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71022,G__71023,G__71024,G__71025,seq71021__$4);
});

return null;
})()
;
kitchen_async.promise$macros.catch$.cljs$lang$macro = true;

var ret__4776__auto___71362 = (function (){
kitchen_async.promise$macros.finally$ = (function kitchen_async$promise$macros$finally(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71363 = arguments.length;
var i__4731__auto___71364 = (0);
while(true){
if((i__4731__auto___71364 < len__4730__auto___71363)){
args__4736__auto__.push((arguments[i__4731__auto___71364]));

var G__71365 = (i__4731__auto___71364 + (1));
i__4731__auto___71364 = G__71365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kitchen_async.promise$macros.finally$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.finally$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr_STAR_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't call kitchen-async.promise/finally outside of kitchen-async.promise/try",cljs.core.PersistentArrayMap.EMPTY);
});

kitchen_async.promise$macros.finally$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.finally$.cljs$lang$applyTo = (function (seq71035){
var G__71036 = cljs.core.first(seq71035);
var seq71035__$1 = cljs.core.next(seq71035);
var G__71037 = cljs.core.first(seq71035__$1);
var seq71035__$2 = cljs.core.next(seq71035__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71036,G__71037,seq71035__$2);
});

return null;
})()
;
kitchen_async.promise$macros.finally$.cljs$lang$macro = true;


//# sourceMappingURL=kitchen-async.promise$macros.js.map
