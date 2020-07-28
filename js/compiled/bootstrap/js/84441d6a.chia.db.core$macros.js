goog.provide('chia.db.core$macros');
var ret__4776__auto___54297 = (function (){
/**
 * Evaluates body without tracking read patterns.
 */
chia.db.core$macros.peek = (function chia$db$core$macros$peek(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54298 = arguments.length;
var i__4731__auto___54299 = (0);
while(true){
if((i__4731__auto___54299 < len__4730__auto___54298)){
args__4736__auto__.push((arguments[i__4731__auto___54299]));

var G__54300 = (i__4731__auto___54299 + (1));
i__4731__auto___54299 = G__54300;
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
chia.db.core$macros.peek.cljs$lang$applyTo = (function (seq54226){
var G__54227 = cljs.core.first(seq54226);
var seq54226__$1 = cljs.core.next(seq54226);
var G__54228 = cljs.core.first(seq54226__$1);
var seq54226__$2 = cljs.core.next(seq54226__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54227,G__54228,seq54226__$2);
});

return null;
})()
;
chia.db.core$macros.peek.cljs$lang$macro = true;

var ret__4776__auto___54309 = (function (){
/**
 * Compiled version of get-in, small performance boost over the `get-in` function.
 */
chia.db.core$macros.get_in_STAR_ = (function chia$db$core$macros$get_in_STAR_(var_args){
var G__54246 = arguments.length;
switch (G__54246) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function chia$db$core$macros$iter__54255(s__54256){
return (new cljs.core.LazySeq(null,(function (){
var s__54256__$1 = s__54256;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54256__$1);
if(temp__5720__auto__){
var s__54256__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54256__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__54256__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__54258 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__54257 = (0);
while(true){
if((i__54257 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__54257);
cljs.core.chunk_append(b__54258,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__54330 = (i__54257 + (1));
i__54257 = G__54330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54258),chia$db$core$macros$iter__54255(cljs.core.chunk_rest(s__54256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54258),null);
}
} else {
var k = cljs.core.first(s__54256__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),chia$db$core$macros$iter__54255(cljs.core.rest(s__54256__$2)));
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function chia$db$core$macros$iter__54286(s__54287){
return (new cljs.core.LazySeq(null,(function (){
var s__54287__$1 = s__54287;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54287__$1);
if(temp__5720__auto__){
var s__54287__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54287__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__54287__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__54289 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__54288 = (0);
while(true){
if((i__54288 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__54288);
cljs.core.chunk_append(b__54289,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__54337 = (i__54288 + (1));
i__54288 = G__54337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54289),chia$db$core$macros$iter__54286(cljs.core.chunk_rest(s__54287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54289),null);
}
} else {
var k = cljs.core.first(s__54287__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),chia$db$core$macros$iter__54286(cljs.core.rest(s__54287__$2)));
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

