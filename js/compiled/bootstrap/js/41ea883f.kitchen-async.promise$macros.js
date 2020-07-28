goog.provide('kitchen_async.promise$macros');
var ret__4776__auto___55013 = (function (){
kitchen_async.promise$macros.promise = (function kitchen_async$promise$macros$promise(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55014 = arguments.length;
var i__4731__auto___55015 = (0);
while(true){
if((i__4731__auto___55015 < len__4730__auto___55014)){
args__4736__auto__.push((arguments[i__4731__auto___55015]));

var G__55016 = (i__4731__auto___55015 + (1));
i__4731__auto___55015 = G__55016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.promise.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.promise.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__54623,body){
var vec__54624 = p__54623;
var resolve = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54624,(0),null);
var reject = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54624,(1),null);
var params = (function (){var G__54627 = cljs.core.PersistentVector.EMPTY;
var G__54627__$1 = (cljs.core.truth_(resolve)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54627,resolve):G__54627);
if(cljs.core.truth_(reject)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54627__$1,reject);
} else {
return G__54627__$1;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","let","cc/let",358091210,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"p__54618__auto__","p__54618__auto__",-659508874,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","promise-impl","kitchen-async.promise/promise-impl",-1868028501,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__54618__auto__","p__54618__auto__",-659508874,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,params,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

kitchen_async.promise$macros.promise.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.promise.cljs$lang$applyTo = (function (seq54619){
var G__54620 = cljs.core.first(seq54619);
var seq54619__$1 = cljs.core.next(seq54619);
var G__54621 = cljs.core.first(seq54619__$1);
var seq54619__$2 = cljs.core.next(seq54619__$1);
var G__54622 = cljs.core.first(seq54619__$2);
var seq54619__$3 = cljs.core.next(seq54619__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54620,G__54621,G__54622,seq54619__$3);
});

return null;
})()
;
kitchen_async.promise$macros.promise.cljs$lang$macro = true;

var ret__4776__auto___55041 = (function (){
kitchen_async.promise$macros.with_error_handling = (function kitchen_async$promise$macros$with_error_handling(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55042 = arguments.length;
var i__4731__auto___55044 = (0);
while(true){
if((i__4731__auto___55044 < len__4730__auto___55042)){
args__4736__auto__.push((arguments[i__4731__auto___55044]));

var G__55045 = (i__4731__auto___55044 + (1));
i__4731__auto___55044 = G__55045;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kitchen_async.promise$macros.with_error_handling.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.with_error_handling.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__54630__auto__","e__54630__auto__",1961716455,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","reject","kitchen-async.promise/reject",490748512,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__54630__auto__","e__54630__auto__",1961716455,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

kitchen_async.promise$macros.with_error_handling.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.with_error_handling.cljs$lang$applyTo = (function (seq54631){
var G__54632 = cljs.core.first(seq54631);
var seq54631__$1 = cljs.core.next(seq54631);
var G__54633 = cljs.core.first(seq54631__$1);
var seq54631__$2 = cljs.core.next(seq54631__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54632,G__54633,seq54631__$2);
});

return null;
})()
;
kitchen_async.promise$macros.with_error_handling.cljs$lang$macro = true;

var ret__4776__auto___55055 = (function (){
kitchen_async.promise$macros.do_STAR_ = (function kitchen_async$promise$macros$do_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55056 = arguments.length;
var i__4731__auto___55057 = (0);
while(true){
if((i__4731__auto___55057 < len__4730__auto___55056)){
args__4736__auto__.push((arguments[i__4731__auto___55057]));

var G__55058 = (i__4731__auto___55057 + (1));
i__4731__auto___55057 = G__55058;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___54655__auto__","___54655__auto__",-814585332,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,kitchen_async$promise$macros$rec(cljs.core.first(exprs__$1),cljs.core.rest(exprs__$1)),null,(1),null))], 0)))),null,(1),null))], 0))));
}
});
return rec(cljs.core.first(exprs),cljs.core.rest(exprs));
}
});

kitchen_async.promise$macros.do_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.do_STAR_.cljs$lang$applyTo = (function (seq54656){
var G__54657 = cljs.core.first(seq54656);
var seq54656__$1 = cljs.core.next(seq54656);
var G__54658 = cljs.core.first(seq54656__$1);
var seq54656__$2 = cljs.core.next(seq54656__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54657,G__54658,seq54656__$2);
});

return null;
})()
;
kitchen_async.promise$macros.do_STAR_.cljs$lang$macro = true;

var ret__4776__auto___55066 = (function (){
kitchen_async.promise$macros.do$ = (function kitchen_async$promise$macros$do(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55067 = arguments.length;
var i__4731__auto___55069 = (0);
while(true){
if((i__4731__auto___55069 < len__4730__auto___55067)){
args__4736__auto__.push((arguments[i__4731__auto___55069]));

var G__55073 = (i__4731__auto___55069 + (1));
i__4731__auto___55069 = G__55073;
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
kitchen_async.promise$macros.do$.cljs$lang$applyTo = (function (seq54659){
var G__54660 = cljs.core.first(seq54659);
var seq54659__$1 = cljs.core.next(seq54659);
var G__54661 = cljs.core.first(seq54659__$1);
var seq54659__$2 = cljs.core.next(seq54659__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54660,G__54661,seq54659__$2);
});

return null;
})()
;
kitchen_async.promise$macros.do$.cljs$lang$macro = true;

var ret__4776__auto___55079 = (function (){
kitchen_async.promise$macros.let$ = (function kitchen_async$promise$macros$let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55081 = arguments.length;
var i__4731__auto___55083 = (0);
while(true){
if((i__4731__auto___55083 < len__4730__auto___55081)){
args__4736__auto__.push((arguments[i__4731__auto___55083]));

var G__55085 = (i__4731__auto___55083 + (1));
i__4731__auto___55083 = G__55085;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var rec = (function kitchen_async$promise$macros$rec(p__54717,body__$1){
var vec__54719 = p__54717;
var seq__54720 = cljs.core.seq(vec__54719);
var first__54721 = cljs.core.first(seq__54720);
var seq__54720__$1 = cljs.core.next(seq__54720);
var name = first__54721;
var first__54721__$1 = cljs.core.first(seq__54720__$1);
var seq__54720__$2 = cljs.core.next(seq__54720__$1);
var init = first__54721__$1;
var bindings__$1 = seq__54720__$2;
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
kitchen_async.promise$macros.let$.cljs$lang$applyTo = (function (seq54697){
var G__54698 = cljs.core.first(seq54697);
var seq54697__$1 = cljs.core.next(seq54697);
var G__54699 = cljs.core.first(seq54697__$1);
var seq54697__$2 = cljs.core.next(seq54697__$1);
var G__54700 = cljs.core.first(seq54697__$2);
var seq54697__$3 = cljs.core.next(seq54697__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54698,G__54699,G__54700,seq54697__$3);
});

return null;
})()
;
kitchen_async.promise$macros.let$.cljs$lang$macro = true;

var ret__4776__auto___55136 = (function (){
kitchen_async.promise$macros.plet = (function kitchen_async$promise$macros$plet(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55137 = arguments.length;
var i__4731__auto___55138 = (0);
while(true){
if((i__4731__auto___55138 < len__4730__auto___55137)){
args__4736__auto__.push((arguments[i__4731__auto___55138]));

var G__55139 = (i__4731__auto___55138 + (1));
i__4731__auto___55138 = G__55139;
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
return (function (p__54742){
var vec__54746 = p__54742;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","->promise","kitchen-async.promise/->promise",92939413,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))));
});})(pairs,names))
,pairs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"goog.Promise.all","goog.Promise.all",-1380509268,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into-array","cljs.core/into-array",1215545861,null),null,(1),null)),(new cljs.core.List(null,inits,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,names,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))));
});

kitchen_async.promise$macros.plet.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.plet.cljs$lang$applyTo = (function (seq54734){
var G__54735 = cljs.core.first(seq54734);
var seq54734__$1 = cljs.core.next(seq54734);
var G__54736 = cljs.core.first(seq54734__$1);
var seq54734__$2 = cljs.core.next(seq54734__$1);
var G__54737 = cljs.core.first(seq54734__$2);
var seq54734__$3 = cljs.core.next(seq54734__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54735,G__54736,G__54737,seq54734__$3);
});

return null;
})()
;
kitchen_async.promise$macros.plet.cljs$lang$macro = true;

kitchen_async.promise$macros.LOOP_FN_NAME = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"loop-fn","loop-fn",1125545302,null));
var ret__4776__auto___55173 = (function (){
kitchen_async.promise$macros.loop = (function kitchen_async$promise$macros$loop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55174 = arguments.length;
var i__4731__auto___55175 = (0);
while(true){
if((i__4731__auto___55175 < len__4730__auto___55174)){
args__4736__auto__.push((arguments[i__4731__auto___55175]));

var G__55176 = (i__4731__auto___55175 + (1));
i__4731__auto___55175 = G__55176;
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
kitchen_async.promise$macros.loop.cljs$lang$applyTo = (function (seq54753){
var G__54754 = cljs.core.first(seq54753);
var seq54753__$1 = cljs.core.next(seq54753);
var G__54755 = cljs.core.first(seq54753__$1);
var seq54753__$2 = cljs.core.next(seq54753__$1);
var G__54756 = cljs.core.first(seq54753__$2);
var seq54753__$3 = cljs.core.next(seq54753__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54754,G__54755,G__54756,seq54753__$3);
});

return null;
})()
;
kitchen_async.promise$macros.loop.cljs$lang$macro = true;

var ret__4776__auto___55198 = (function (){
kitchen_async.promise$macros.recur = (function kitchen_async$promise$macros$recur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55199 = arguments.length;
var i__4731__auto___55200 = (0);
while(true){
if((i__4731__auto___55200 < len__4730__auto___55199)){
args__4736__auto__.push((arguments[i__4731__auto___55200]));

var G__55201 = (i__4731__auto___55200 + (1));
i__4731__auto___55200 = G__55201;
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
kitchen_async.promise$macros.recur.cljs$lang$applyTo = (function (seq54759){
var G__54760 = cljs.core.first(seq54759);
var seq54759__$1 = cljs.core.next(seq54759);
var G__54761 = cljs.core.first(seq54759__$1);
var seq54759__$2 = cljs.core.next(seq54759__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54760,G__54761,seq54759__$2);
});

return null;
})()
;
kitchen_async.promise$macros.recur.cljs$lang$macro = true;

var ret__4776__auto___55273 = (function (){
kitchen_async.promise$macros.while$ = (function kitchen_async$promise$macros$while(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55275 = arguments.length;
var i__4731__auto___55276 = (0);
while(true){
if((i__4731__auto___55276 < len__4730__auto___55275)){
args__4736__auto__.push((arguments[i__4731__auto___55276]));

var G__55277 = (i__4731__auto___55276 + (1));
i__4731__auto___55276 = G__55277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kitchen_async.promise$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

kitchen_async.promise$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,cond,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"v__54766__auto__","v__54766__auto__",-1093053158,null),null,(1),null)),(new cljs.core.List(null,cond,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__54766__auto__","v__54766__auto__",-1093053158,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___54767__auto__","___54767__auto__",-172494114,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","recur","kitchen-async.promise/recur",-384468749,null),null,(1),null)),(new cljs.core.List(null,cond,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

kitchen_async.promise$macros.while$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.while$.cljs$lang$applyTo = (function (seq54768){
var G__54769 = cljs.core.first(seq54768);
var seq54768__$1 = cljs.core.next(seq54768);
var G__54770 = cljs.core.first(seq54768__$1);
var seq54768__$2 = cljs.core.next(seq54768__$1);
var G__54771 = cljs.core.first(seq54768__$2);
var seq54768__$3 = cljs.core.next(seq54768__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54769,G__54770,G__54771,seq54768__$3);
});

return null;
})()
;
kitchen_async.promise$macros.while$.cljs$lang$macro = true;

kitchen_async.promise$macros.interop_QMARK_ = (function kitchen_async$promise$macros$interop_QMARK_(form){
return (((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(form),(0)),".")));
});
var ret__4776__auto___55285 = (function (){
kitchen_async.promise$macros.__GT_ = (function kitchen_async$promise$macros$__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55290 = arguments.length;
var i__4731__auto___55292 = (0);
while(true){
if((i__4731__auto___55292 < len__4730__auto___55290)){
args__4736__auto__.push((arguments[i__4731__auto___55292]));

var G__55293 = (i__4731__auto___55292 + (1));
i__4731__auto___55292 = G__55293;
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
var vec__54798 = forms;
var seq__54799 = cljs.core.seq(vec__54798);
var first__54800 = cljs.core.first(seq__54799);
var seq__54799__$1 = cljs.core.next(seq__54799);
var form = first__54800;
var forms__$1 = seq__54799__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.seq_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__54788__auto__","v__54788__auto__",615893605,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__54788__auto__","v__54788__auto__",615893605,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(form)], 0)))),null,(1),null))], 0)))):((kitchen_async.promise$macros.interop_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__54789__auto__","v__54789__auto__",-910845091,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__54789__auto__","v__54789__auto__",-910845091,null),null,(1),null))))),null,(1),null))], 0)))):form
)),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms__$1], 0)))),null,(1),null)))));
} else {
return x;
}
});

kitchen_async.promise$macros.__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.__GT_.cljs$lang$applyTo = (function (seq54790){
var G__54791 = cljs.core.first(seq54790);
var seq54790__$1 = cljs.core.next(seq54790);
var G__54792 = cljs.core.first(seq54790__$1);
var seq54790__$2 = cljs.core.next(seq54790__$1);
var G__54793 = cljs.core.first(seq54790__$2);
var seq54790__$3 = cljs.core.next(seq54790__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54791,G__54792,G__54793,seq54790__$3);
});

return null;
})()
;
kitchen_async.promise$macros.__GT_.cljs$lang$macro = true;

var ret__4776__auto___55301 = (function (){
kitchen_async.promise$macros.__GT__GT_ = (function kitchen_async$promise$macros$__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55305 = arguments.length;
var i__4731__auto___55306 = (0);
while(true){
if((i__4731__auto___55306 < len__4730__auto___55305)){
args__4736__auto__.push((arguments[i__4731__auto___55306]));

var G__55309 = (i__4731__auto___55306 + (1));
i__4731__auto___55306 = G__55309;
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
var vec__54832 = forms;
var seq__54833 = cljs.core.seq(vec__54832);
var first__54834 = cljs.core.first(seq__54833);
var seq__54833__$1 = cljs.core.next(seq__54833);
var form = first__54834;
var forms__$1 = seq__54833__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","with-error-handling","kitchen-async.promise/with-error-handling",1561180553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","then","kitchen-async.promise/then",-1805985731,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.seq_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__54823__auto__","v__54823__auto__",1279079568,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(form,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__54823__auto__","v__54823__auto__",1279079568,null),null,(1),null))))),null,(1),null))], 0)))):((kitchen_async.promise$macros.interop_QMARK_(form))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__54824__auto__","v__54824__auto__",-2097683867,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__54824__auto__","v__54824__auto__",-2097683867,null),null,(1),null))))),null,(1),null))], 0)))):form
)),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms__$1], 0)))),null,(1),null)))));
} else {
return x;
}
});

kitchen_async.promise$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kitchen_async.promise$macros.__GT__GT_.cljs$lang$applyTo = (function (seq54825){
var G__54826 = cljs.core.first(seq54825);
var seq54825__$1 = cljs.core.next(seq54825);
var G__54827 = cljs.core.first(seq54825__$1);
var seq54825__$2 = cljs.core.next(seq54825__$1);
var G__54828 = cljs.core.first(seq54825__$2);
var seq54825__$3 = cljs.core.next(seq54825__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54826,G__54827,G__54828,seq54825__$3);
});

return null;
})()
;
kitchen_async.promise$macros.__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___55320 = (function (){
kitchen_async.promise$macros.some__GT_ = (function kitchen_async$promise$macros$some__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55321 = arguments.length;
var i__4731__auto___55323 = (0);
while(true){
if((i__4731__auto___55323 < len__4730__auto___55321)){
args__4736__auto__.push((arguments[i__4731__auto___55323]));

var G__55325 = (i__4731__auto___55323 + (1));
i__4731__auto___55323 = G__55325;
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
return (function kitchen_async$promise$macros$iter__54880(s__54881){
return (new cljs.core.LazySeq(null,((function (g){
return (function (){
var s__54881__$1 = s__54881;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54881__$1);
if(temp__5720__auto__){
var s__54881__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54881__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__54881__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__54883 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__54882 = (0);
while(true){
if((i__54882 < size__4522__auto__)){
var form = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__54882);
cljs.core.chunk_append(b__54883,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->","cc/->",-2139604438,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))));

var G__55341 = (i__54882 + (1));
i__54882 = G__55341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54883),kitchen_async$promise$macros$iter__54880(cljs.core.chunk_rest(s__54881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54883),null);
}
} else {
var form = cljs.core.first(s__54881__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->","cc/->",-2139604438,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),kitchen_async$promise$macros$iter__54880(cljs.core.rest(s__54881__$2)));
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
kitchen_async.promise$macros.some__GT_.cljs$lang$applyTo = (function (seq54856){
var G__54857 = cljs.core.first(seq54856);
var seq54856__$1 = cljs.core.next(seq54856);
var G__54858 = cljs.core.first(seq54856__$1);
var seq54856__$2 = cljs.core.next(seq54856__$1);
var G__54859 = cljs.core.first(seq54856__$2);
var seq54856__$3 = cljs.core.next(seq54856__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54857,G__54858,G__54859,seq54856__$3);
});

return null;
})()
;
kitchen_async.promise$macros.some__GT_.cljs$lang$macro = true;

var ret__4776__auto___55346 = (function (){
kitchen_async.promise$macros.some__GT__GT_ = (function kitchen_async$promise$macros$some__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55351 = arguments.length;
var i__4731__auto___55352 = (0);
while(true){
if((i__4731__auto___55352 < len__4730__auto___55351)){
args__4736__auto__.push((arguments[i__4731__auto___55352]));

var G__55354 = (i__4731__auto___55352 + (1));
i__4731__auto___55352 = G__55354;
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
return (function kitchen_async$promise$macros$iter__54931(s__54932){
return (new cljs.core.LazySeq(null,((function (g){
return (function (){
var s__54932__$1 = s__54932;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54932__$1);
if(temp__5720__auto__){
var s__54932__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54932__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__54932__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__54934 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__54933 = (0);
while(true){
if((i__54933 < size__4522__auto__)){
var form = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__54933);
cljs.core.chunk_append(b__54934,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->>","cc/->>",-1874343585,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))));

var G__55363 = (i__54933 + (1));
i__54933 = G__55363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54934),kitchen_async$promise$macros$iter__54931(cljs.core.chunk_rest(s__54932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54934),null);
}
} else {
var form = cljs.core.first(s__54932__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,g,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","->>","cc/->>",-1874343585,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),kitchen_async$promise$macros$iter__54931(cljs.core.rest(s__54932__$2)));
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
kitchen_async.promise$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq54922){
var G__54923 = cljs.core.first(seq54922);
var seq54922__$1 = cljs.core.next(seq54922);
var G__54924 = cljs.core.first(seq54922__$1);
var seq54922__$2 = cljs.core.next(seq54922__$1);
var G__54925 = cljs.core.first(seq54922__$2);
var seq54922__$3 = cljs.core.next(seq54922__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54923,G__54924,G__54925,seq54922__$3);
});

return null;
})()
;
kitchen_async.promise$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___55369 = (function (){
kitchen_async.promise$macros.try$ = (function kitchen_async$promise$macros$try(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55371 = arguments.length;
var i__4731__auto___55372 = (0);
while(true){
if((i__4731__auto___55372 < len__4730__auto___55371)){
args__4736__auto__.push((arguments[i__4731__auto___55372]));

var G__55375 = (i__4731__auto___55372 + (1));
i__4731__auto___55372 = G__55375;
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
return (function kitchen_async$promise$macros$emit_catch(p__54960){
var map__54961 = p__54960;
var map__54961__$1 = (((((!((map__54961 == null))))?(((((map__54961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54961):map__54961);
var error_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"error-type","error-type",1096890596));
var error_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"error-name","error-name",-461307167));
var catch_body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"catch-body","catch-body",588849767));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(error_type),new cljs.core.Keyword(null,"default","default",-1987822328)))?new cljs.core.Keyword(null,"else","else",-1508377146):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(error_type),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,err,null,(1),null))], 0))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cc","let","cc/let",358091210,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,error_name,null,(1),null)),(new cljs.core.List(null,err,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),catch_body))),null,(1),null))], 0))))], null);
});})(conformed,try_body,err))
;
var emit_catches = ((function (conformed,try_body,err){
return (function kitchen_async$promise$macros$emit_catches(clauses){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","catch*","kitchen-async.promise/catch*",-358758953,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,err,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(emit_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clauses], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(((function (conformed,try_body,err){
return (function (p1__54938_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-type","error-type",1096890596).cljs$core$IFn$_invoke$arity$1(p1__54938_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","finally*","kitchen-async.promise/finally*",1563774677,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"v__54939__auto__","v__54939__auto__",-607048756,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("kitchen-async.promise","do*","kitchen-async.promise/do*",154869619,null),null,(1),null)),new cljs.core.Keyword(null,"finally-body","finally-body",1822091404).cljs$core$IFn$_invoke$arity$1(clause),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"v__54939__auto__","v__54939__auto__",-607048756,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
})()], 0))));
});

kitchen_async.promise$macros.try$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kitchen_async.promise$macros.try$.cljs$lang$applyTo = (function (seq54940){
var G__54941 = cljs.core.first(seq54940);
var seq54940__$1 = cljs.core.next(seq54940);
var G__54942 = cljs.core.first(seq54940__$1);
var seq54940__$2 = cljs.core.next(seq54940__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54941,G__54942,seq54940__$2);
});

return null;
})()
;
kitchen_async.promise$macros.try$.cljs$lang$macro = true;

var ret__4776__auto___55446 = (function (){
kitchen_async.promise$macros.catch$ = (function kitchen_async$promise$macros$catch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55448 = arguments.length;
var i__4731__auto___55449 = (0);
while(true){
if((i__4731__auto___55449 < len__4730__auto___55448)){
args__4736__auto__.push((arguments[i__4731__auto___55449]));

var G__55450 = (i__4731__auto___55449 + (1));
i__4731__auto___55449 = G__55450;
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
kitchen_async.promise$macros.catch$.cljs$lang$applyTo = (function (seq54980){
var G__54981 = cljs.core.first(seq54980);
var seq54980__$1 = cljs.core.next(seq54980);
var G__54982 = cljs.core.first(seq54980__$1);
var seq54980__$2 = cljs.core.next(seq54980__$1);
var G__54983 = cljs.core.first(seq54980__$2);
var seq54980__$3 = cljs.core.next(seq54980__$2);
var G__54984 = cljs.core.first(seq54980__$3);
var seq54980__$4 = cljs.core.next(seq54980__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54981,G__54982,G__54983,G__54984,seq54980__$4);
});

return null;
})()
;
kitchen_async.promise$macros.catch$.cljs$lang$macro = true;

var ret__4776__auto___55471 = (function (){
kitchen_async.promise$macros.finally$ = (function kitchen_async$promise$macros$finally(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55472 = arguments.length;
var i__4731__auto___55474 = (0);
while(true){
if((i__4731__auto___55474 < len__4730__auto___55472)){
args__4736__auto__.push((arguments[i__4731__auto___55474]));

var G__55476 = (i__4731__auto___55474 + (1));
i__4731__auto___55474 = G__55476;
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
kitchen_async.promise$macros.finally$.cljs$lang$applyTo = (function (seq54997){
var G__54998 = cljs.core.first(seq54997);
var seq54997__$1 = cljs.core.next(seq54997);
var G__54999 = cljs.core.first(seq54997__$1);
var seq54997__$2 = cljs.core.next(seq54997__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54998,G__54999,seq54997__$2);
});

return null;
})()
;
kitchen_async.promise$macros.finally$.cljs$lang$macro = true;

