goog.provide('chia.db.core$macros');
goog.require('cljs.core');
var ret__4776__auto___70330 = (function (){
/**
 * Evaluates body without tracking read patterns.
 */
chia.db.core$macros.peek = (function chia$db$core$macros$peek(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70331 = arguments.length;
var i__4731__auto___70332 = (0);
while(true){
if((i__4731__auto___70332 < len__4730__auto___70331)){
args__4736__auto__.push((arguments[i__4731__auto___70332]));

var G__70336 = (i__4731__auto___70332 + (1));
i__4731__auto___70332 = G__70336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.db.core$macros.peek.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.db.core$macros.peek.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.db.core","*access-log*","chia.db.core/*access-log*",-1133571809,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0))));
});

chia.db.core$macros.peek.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.db.core$macros.peek.cljs$lang$applyTo = (function (seq70237){
var G__70238 = cljs.core.first(seq70237);
var seq70237__$1 = cljs.core.next(seq70237);
var G__70239 = cljs.core.first(seq70237__$1);
var seq70237__$2 = cljs.core.next(seq70237__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70238,G__70239,seq70237__$2);
});

return null;
})()
;
chia.db.core$macros.peek.cljs$lang$macro = true;

var ret__4776__auto___70340 = (function (){
/**
 * Compiled version of get-in, small performance boost over the `get-in` function.
 */
chia.db.core$macros.get_in_STAR_ = (function chia$db$core$macros$get_in_STAR_(var_args){
var G__70272 = arguments.length;
switch (G__70272) {
case 4:
return chia.db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return chia.db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

chia.db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,m,ks){
if((!(cljs.core.vector_QMARK_(ks)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function chia$db$core$macros$iter__70279(s__70280){
return (new cljs.core.LazySeq(null,(function (){
var s__70280__$1 = s__70280;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70280__$1);
if(temp__5720__auto__){
var s__70280__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70280__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__70280__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__70282 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__70281 = (0);
while(true){
if((i__70281 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__70281);
cljs.core.chunk_append(b__70282,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__70359 = (i__70281 + (1));
i__70281 = G__70359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70282),chia$db$core$macros$iter__70279(cljs.core.chunk_rest(s__70280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70282),null);
}
} else {
var k = cljs.core.first(s__70280__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),chia$db$core$macros$iter__70279(cljs.core.rest(s__70280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(ks);
})()], 0))));
}
});

chia.db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,m,ks,not_found){
if((!(cljs.core.vector_QMARK_(ks)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function chia$db$core$macros$iter__70305(s__70306){
return (new cljs.core.LazySeq(null,(function (){
var s__70306__$1 = s__70306;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70306__$1);
if(temp__5720__auto__){
var s__70306__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70306__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__70306__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__70308 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__70307 = (0);
while(true){
if((i__70307 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__70307);
cljs.core.chunk_append(b__70308,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__70372 = (i__70307 + (1));
i__70307 = G__70372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70308),chia$db$core$macros$iter__70305(cljs.core.chunk_rest(s__70306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70308),null);
}
} else {
var k = cljs.core.first(s__70306__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),chia$db$core$macros$iter__70305(cljs.core.rest(s__70306__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks));
})(),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
}
});

chia.db.core$macros.get_in_STAR_.cljs$lang$maxFixedArity = 5;

return null;
})()
;
chia.db.core$macros.get_in_STAR_.cljs$lang$macro = true;


//# sourceMappingURL=chia.db.core$macros.js.map
