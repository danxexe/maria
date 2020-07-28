goog.provide('applied_science.js_interop$macros');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('clojure.string');
goog.require('applied_science.js_interop.destructure');
goog.require('applied_science.js_interop.inference');
applied_science.js_interop$macros.reflect_property = new cljs.core.Symbol("js","goog.reflect.objectProperty","js/goog.reflect.objectProperty",-1769769352,null);
applied_science.js_interop$macros.lookup_sentinel = new cljs.core.Symbol("applied-science.js-interop.impl","lookup-sentinel","applied-science.js-interop.impl/lookup-sentinel",-2020182184,null);
applied_science.js_interop$macros.wrap_key_STAR_ = new cljs.core.Symbol("applied-science.js-interop.impl","wrap-key","applied-science.js-interop.impl/wrap-key",-1752937003,null);
applied_science.js_interop$macros.empty_obj = cljs.core.list(new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null));
applied_science.js_interop$macros._STAR_let = new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null);
applied_science.js_interop$macros.dot_sym_QMARK_ = (function applied_science$js_interop$macros$dot_sym_QMARK_(k){
return (((k instanceof cljs.core.Symbol)) && (clojure.string.starts_with_QMARK_(cljs.core.name(k),".")));
});
applied_science.js_interop$macros.dot_name = (function applied_science$js_interop$macros$dot_name(sym){
return clojure.string.replace(cljs.core.name(sym),/^\.\-?/,"");
});
applied_science.js_interop$macros.dot_get = (function applied_science$js_interop$macros$dot_get(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(sym))].join(''));
});
applied_science.js_interop$macros.dot_call = (function applied_science$js_interop$macros$dot_call(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(sym))].join(''));
});
applied_science.js_interop$macros.as_string = (function applied_science$js_interop$macros$as_string(x){
return cljs.core.with_meta(x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"string","string",-349010059,null)], null));
});
/**
 * Convert key to string at compile time when possible.
 */
applied_science.js_interop$macros.wrap_key = (function applied_science$js_interop$macros$wrap_key(env,obj,k){
if(((typeof k === 'string') || (typeof k === 'number'))){
return k;
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
if((((k instanceof cljs.core.Symbol)) || (cljs.core.seq_QMARK_(k)))){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros.reflect_property,null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0)))));
} else {
var tags = applied_science.js_interop.inference.infer_tags(env,k);
if(applied_science.js_interop.inference.within_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null),tags)){
return k;
} else {
if(applied_science.js_interop.inference.within_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null"], null), null),tags)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)))));
} else {
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))));

}
}
}
} else {
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))));

}
}
}
});
/**
 * Fallback to wrapping keys at runtime
 */
applied_science.js_interop$macros.wrap_keys = (function applied_science$js_interop$macros$wrap_keys(ks){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null))], 0))));
});
var ret__4776__auto___69920 = applied_science.js_interop$macros.in_QMARK_ = (function applied_science$js_interop$macros$in_QMARK_(_AMPERSAND_form,_AMPERSAND_env,k,obj){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","in?*","applied-science.js-interop.impl/in?*",-1012411264,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0))));
});
applied_science.js_interop$macros.in_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___69926 = (function (){
applied_science.js_interop$macros.unchecked_get = (function applied_science$js_interop$macros$unchecked_get(var_args){
var G__69343 = arguments.length;
switch (G__69343) {
case 4:
return applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,not_found){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var k_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,k_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-get","applied-science.js-interop/unchecked-get",-1144758314,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
});

applied_science.js_interop$macros.unchecked_get.cljs$lang$maxFixedArity = 5;

return null;
})()
;
applied_science.js_interop$macros.unchecked_get.cljs$lang$macro = true;

var ret__4776__auto___69950 = (function (){
applied_science.js_interop$macros._BANG_get = (function applied_science$js_interop$macros$_BANG_get(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69951 = arguments.length;
var i__4731__auto___69952 = (0);
while(true){
if((i__4731__auto___69952 < len__4730__auto___69951)){
args__4736__auto__.push((arguments[i__4731__auto___69952]));

var G__69953 = (i__4731__auto___69952 + (1));
i__4731__auto___69952 = G__69953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros._BANG_get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop$macros._BANG_get.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-get","applied-science.js-interop/unchecked-get",-1144758314,null),null,(1),null)),args)));
});

applied_science.js_interop$macros._BANG_get.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop$macros._BANG_get.cljs$lang$applyTo = (function (seq69362){
var G__69363 = cljs.core.first(seq69362);
var seq69362__$1 = cljs.core.next(seq69362);
var G__69364 = cljs.core.first(seq69362__$1);
var seq69362__$2 = cljs.core.next(seq69362__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69363,G__69364,seq69362__$2);
});

return null;
})()
;
applied_science.js_interop$macros._BANG_get.cljs$lang$macro = true;

var ret__4776__auto___69954 = (function (){
applied_science.js_interop$macros.unchecked_set = (function applied_science$js_interop$macros$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69955 = arguments.length;
var i__4731__auto___69956 = (0);
while(true){
if((i__4731__auto___69956 < len__4730__auto___69955)){
args__4736__auto__.push((arguments[i__4731__auto___69956]));

var G__69958 = (i__4731__auto___69956 + (1));
i__4731__auto___69956 = G__69958;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (o){
return (function applied_science$js_interop$macros$iter__69373(s__69374){
return (new cljs.core.LazySeq(null,((function (o){
return (function (){
var s__69374__$1 = s__69374;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69374__$1);
if(temp__5720__auto__){
var s__69374__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69374__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69374__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69376 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69375 = (0);
while(true){
if((i__69375 < size__4522__auto__)){
var vec__69381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__69375);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69381,(1),null);
cljs.core.chunk_append(b__69376,((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))));

var G__69969 = (i__69375 + (1));
i__69375 = G__69969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69376),applied_science$js_interop$macros$iter__69373(cljs.core.chunk_rest(s__69374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69376),null);
}
} else {
var vec__69384 = cljs.core.first(s__69374__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69384,(1),null);
return cljs.core.cons(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))),applied_science$js_interop$macros$iter__69373(cljs.core.rest(s__69374__$2)));
}
} else {
return null;
}
break;
}
});})(o))
,null,null));
});})(o))
;
return iter__4523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
})(),(new cljs.core.List(null,o,null,(1),null))], 0))));
});

applied_science.js_interop$macros.unchecked_set.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop$macros.unchecked_set.cljs$lang$applyTo = (function (seq69369){
var G__69370 = cljs.core.first(seq69369);
var seq69369__$1 = cljs.core.next(seq69369);
var G__69371 = cljs.core.first(seq69369__$1);
var seq69369__$2 = cljs.core.next(seq69369__$1);
var G__69372 = cljs.core.first(seq69369__$2);
var seq69369__$3 = cljs.core.next(seq69369__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69370,G__69371,G__69372,seq69369__$3);
});

return null;
})()
;
applied_science.js_interop$macros.unchecked_set.cljs$lang$macro = true;

var ret__4776__auto___69978 = (function (){
applied_science.js_interop$macros._BANG_set = (function applied_science$js_interop$macros$_BANG_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69979 = arguments.length;
var i__4731__auto___69980 = (0);
while(true){
if((i__4731__auto___69980 < len__4730__auto___69979)){
args__4736__auto__.push((arguments[i__4731__auto___69980]));

var G__69981 = (i__4731__auto___69980 + (1));
i__4731__auto___69980 = G__69981;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros._BANG_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop$macros._BANG_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-set","applied-science.js-interop/unchecked-set",612468376,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keyvals], 0))));
});

applied_science.js_interop$macros._BANG_set.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop$macros._BANG_set.cljs$lang$applyTo = (function (seq69399){
var G__69401 = cljs.core.first(seq69399);
var seq69399__$1 = cljs.core.next(seq69399);
var G__69402 = cljs.core.first(seq69399__$1);
var seq69399__$2 = cljs.core.next(seq69399__$1);
var G__69403 = cljs.core.first(seq69399__$2);
var seq69399__$3 = cljs.core.next(seq69399__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69401,G__69402,G__69403,seq69399__$3);
});

return null;
})()
;
applied_science.js_interop$macros._BANG_set.cljs$lang$macro = true;

var ret__4776__auto___69982 = applied_science.js_interop$macros.contains_QMARK_ = (function applied_science$js_interop$macros$contains_QMARK_(_AMPERSAND_form,_AMPERSAND_env,obj,k){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.contains_QMARK_.cljs$lang$macro = true;

applied_science.js_interop$macros.get_STAR_ = (function applied_science$js_interop$macros$get_STAR_(var_args){
var G__69425 = arguments.length;
switch (G__69425) {
case 3:
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (env,obj,k){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4(env,obj,k,new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
});

applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (env,obj,k,not_found){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var k_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(env,o,k),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","contains?","applied-science.js-interop/contains?",-1276734795,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
});

applied_science.js_interop$macros.get_STAR_.cljs$lang$maxFixedArity = 4;

var ret__4776__auto___69984 = (function (){
applied_science.js_interop$macros.get = (function applied_science$js_interop$macros$get(var_args){
var G__69437 = arguments.length;
switch (G__69437) {
case 4:
return applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,obj,k);
});

applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,not_found){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4(_AMPERSAND_env,obj,k,not_found);
});

applied_science.js_interop$macros.get.cljs$lang$maxFixedArity = 5;

return null;
})()
;
applied_science.js_interop$macros.get.cljs$lang$macro = true;

var ret__4776__auto___69986 = (function (){
applied_science.js_interop$macros.get_in = (function applied_science$js_interop$macros$get_in(var_args){
var G__69449 = arguments.length;
switch (G__69449) {
case 4:
return applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop$macros.get_STAR_,_AMPERSAND_env),obj,ks);
});

applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,not_found){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__69447__auto__","out__69447__auto__",417843482,null),null,(1),null)),(new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__69446__auto__","out__69446__auto__",843908497,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__69446__auto__","out__69446__auto__",843908497,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__69446__auto__","out__69446__auto__",843908497,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),obj,ks),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"out__69447__auto__","out__69447__auto__",417843482,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__69447__auto__","out__69447__auto__",417843482,null),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","get-in*","applied-science.js-interop.impl/get-in*",400975371,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.get_in.cljs$lang$maxFixedArity = 5;

return null;
})()
;
applied_science.js_interop$macros.get_in.cljs$lang$macro = true;

var ret__4776__auto___69988 = applied_science.js_interop$macros._BANG_get_in = (function applied_science$js_interop$macros$_BANG_get_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0))));
}),obj,ks);
});
applied_science.js_interop$macros._BANG_get_in.cljs$lang$macro = true;

var ret__4776__auto___69989 = applied_science.js_interop$macros.select_keys = (function applied_science$js_interop$macros$select_keys(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var out = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("out");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,out,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (o,out){
return (function applied_science$js_interop$macros$select_keys_$_iter__69477(s__69478){
return (new cljs.core.LazySeq(null,((function (o,out){
return (function (){
var s__69478__$1 = s__69478;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69478__$1);
if(temp__5720__auto__){
var s__69478__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69478__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69478__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69480 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69479 = (0);
while(true){
if((i__69479 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__69479);
cljs.core.chunk_append(b__69480,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))));

var G__69999 = (i__69479 + (1));
i__69479 = G__69999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69480),applied_science$js_interop$macros$select_keys_$_iter__69477(cljs.core.chunk_rest(s__69478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69480),null);
}
} else {
var k = cljs.core.first(s__69478__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__69468__auto__","k__69468__auto__",463550318,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),applied_science$js_interop$macros$select_keys_$_iter__69477(cljs.core.rest(s__69478__$2)));
}
} else {
return null;
}
break;
}
});})(o,out))
,null,null));
});})(o,out))
;
return iter__4523__auto__(ks);
})(),(new cljs.core.List(null,out,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","select-keys*","applied-science.js-interop.impl/select-keys*",-241542668,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null))], 0))));
}
});
applied_science.js_interop$macros.select_keys.cljs$lang$macro = true;

var ret__4776__auto___70007 = /**
 * Like `or` but switches on `some?` instead of truthiness.
 */
applied_science.js_interop$macros.some_or = (function applied_science$js_interop$macros$some_or(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))], 0))));
});
applied_science.js_interop$macros.some_or.cljs$lang$macro = true;

/**
 * Returns `k` of `o`. If nil, sets and returns a new empty child object.
 */
applied_science.js_interop$macros.get_PLUS__BANG_ = (function applied_science$js_interop$macros$get_PLUS__BANG_(o,k){
var child = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("child");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,child,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,child,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__69507__auto__","new-child__69507__auto__",2118850983,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__69507__auto__","new-child__69507__auto__",2118850983,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__69507__auto__","new-child__69507__auto__",2118850983,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.get_in_PLUS__BANG_ = (function applied_science$js_interop$macros$get_in_PLUS__BANG_(o,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop$macros.get_PLUS__BANG_,o,ks);
});
var ret__4776__auto___70024 = (function (){
applied_science.js_interop$macros.assoc_BANG_ = (function applied_science$js_interop$macros$assoc_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70025 = arguments.length;
var i__4731__auto___70026 = (0);
while(true){
if((i__4731__auto___70026 < len__4730__auto___70025)){
args__4736__auto__.push((arguments[i__4731__auto___70026]));

var G__70027 = (i__4731__auto___70026 + (1));
i__4731__auto___70026 = G__70027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (o){
return (function applied_science$js_interop$macros$iter__69521(s__69522){
return (new cljs.core.LazySeq(null,((function (o){
return (function (){
var s__69522__$1 = s__69522;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69522__$1);
if(temp__5720__auto__){
var s__69522__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69522__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69522__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69524 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69523 = (0);
while(true){
if((i__69523 < size__4522__auto__)){
var vec__69525 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__69523);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69525,(1),null);
cljs.core.chunk_append(b__69524,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__70037 = (i__69523 + (1));
i__69523 = G__70037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69524),applied_science$js_interop$macros$iter__69521(cljs.core.chunk_rest(s__69522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69524),null);
}
} else {
var vec__69534 = cljs.core.first(s__69522__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69534,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__69521(cljs.core.rest(s__69522__$2)));
}
} else {
return null;
}
break;
}
});})(o))
,null,null));
});})(o))
;
return iter__4523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
})()], 0)))),null,(1),null))], 0))));
});

applied_science.js_interop$macros.assoc_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop$macros.assoc_BANG_.cljs$lang$applyTo = (function (seq69513){
var G__69514 = cljs.core.first(seq69513);
var seq69513__$1 = cljs.core.next(seq69513);
var G__69515 = cljs.core.first(seq69513__$1);
var seq69513__$2 = cljs.core.next(seq69513__$1);
var G__69516 = cljs.core.first(seq69513__$2);
var seq69513__$3 = cljs.core.next(seq69513__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69514,G__69515,G__69516,seq69513__$3);
});

return null;
})()
;
applied_science.js_interop$macros.assoc_BANG_.cljs$lang$macro = true;

var ret__4776__auto___70044 = applied_science.js_interop$macros.assoc_in_BANG_ = (function applied_science$js_interop$macros$assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","assoc-in*","applied-science.js-interop.impl/assoc-in*",45744373,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))));
}
});
applied_science.js_interop$macros.assoc_in_BANG_.cljs$lang$macro = true;

var ret__4776__auto___70050 = applied_science.js_interop$macros._BANG_assoc_in_BANG_ = (function applied_science$js_interop$macros$_BANG_assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69563__auto__","obj__69563__auto__",-58466387,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69563__auto__","obj__69563__auto__",-58466387,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69563__auto__","obj__69563__auto__",-58466387,null),null,(1),null))], 0))));
});
applied_science.js_interop$macros._BANG_assoc_in_BANG_.cljs$lang$macro = true;

var ret__4776__auto___70070 = (function (){
applied_science.js_interop$macros._BANG_update = (function applied_science$js_interop$macros$_BANG_update(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70074 = arguments.length;
var i__4731__auto___70075 = (0);
while(true){
if((i__4731__auto___70075 < len__4730__auto___70074)){
args__4736__auto__.push((arguments[i__4731__auto___70075]));

var G__70076 = (i__4731__auto___70075 + (1));
i__4731__auto___70075 = G__70076;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__69576__auto__","o__69576__auto__",241122075,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__69576__auto__","o__69576__auto__",241122075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__69576__auto__","o__69576__auto__",241122075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

applied_science.js_interop$macros._BANG_update.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
applied_science.js_interop$macros._BANG_update.cljs$lang$applyTo = (function (seq69579){
var G__69580 = cljs.core.first(seq69579);
var seq69579__$1 = cljs.core.next(seq69579);
var G__69581 = cljs.core.first(seq69579__$1);
var seq69579__$2 = cljs.core.next(seq69579__$1);
var G__69582 = cljs.core.first(seq69579__$2);
var seq69579__$3 = cljs.core.next(seq69579__$2);
var G__69583 = cljs.core.first(seq69579__$3);
var seq69579__$4 = cljs.core.next(seq69579__$3);
var G__69584 = cljs.core.first(seq69579__$4);
var seq69579__$5 = cljs.core.next(seq69579__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69580,G__69581,G__69582,G__69583,G__69584,seq69579__$5);
});

return null;
})()
;
applied_science.js_interop$macros._BANG_update.cljs$lang$macro = true;

var ret__4776__auto___70088 = (function (){
applied_science.js_interop$macros.update_BANG_ = (function applied_science$js_interop$macros$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70089 = arguments.length;
var i__4731__auto___70090 = (0);
while(true){
if((i__4731__auto___70090 < len__4730__auto___70089)){
args__4736__auto__.push((arguments[i__4731__auto___70090]));

var G__70091 = (i__4731__auto___70090 + (1));
i__4731__auto___70090 = G__70091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__69603__auto__","o__69603__auto__",648461451,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!update","applied-science.js-interop/!update",-868872919,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__69603__auto__","o__69603__auto__",648461451,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null))], 0))));
});

applied_science.js_interop$macros.update_BANG_.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
applied_science.js_interop$macros.update_BANG_.cljs$lang$applyTo = (function (seq69606){
var G__69607 = cljs.core.first(seq69606);
var seq69606__$1 = cljs.core.next(seq69606);
var G__69608 = cljs.core.first(seq69606__$1);
var seq69606__$2 = cljs.core.next(seq69606__$1);
var G__69609 = cljs.core.first(seq69606__$2);
var seq69606__$3 = cljs.core.next(seq69606__$2);
var G__69610 = cljs.core.first(seq69606__$3);
var seq69606__$4 = cljs.core.next(seq69606__$3);
var G__69611 = cljs.core.first(seq69606__$4);
var seq69606__$5 = cljs.core.next(seq69606__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69607,G__69608,G__69609,G__69610,G__69611,seq69606__$5);
});

return null;
})()
;
applied_science.js_interop$macros.update_BANG_.cljs$lang$macro = true;

var ret__4776__auto___70113 = (function (){
applied_science.js_interop$macros.update_in_BANG_ = (function applied_science$js_interop$macros$update_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70114 = arguments.length;
var i__4731__auto___70115 = (0);
while(true){
if((i__4731__auto___70115 < len__4730__auto___70114)){
args__4736__auto__.push((arguments[i__4731__auto___70115]));

var G__70116 = (i__4731__auto___70115 + (1));
i__4731__auto___70115 = G__70116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,f,args){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__69619__auto__","inner-obj__69619__auto__",1255670905,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","update!","applied-science.js-interop/update!",1834803760,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__69619__auto__","inner-obj__69619__auto__",1255670905,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","update-in*","applied-science.js-interop.impl/update-in*",-1172951159,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(args),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.update_in_BANG_.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
applied_science.js_interop$macros.update_in_BANG_.cljs$lang$applyTo = (function (seq69621){
var G__69622 = cljs.core.first(seq69621);
var seq69621__$1 = cljs.core.next(seq69621);
var G__69623 = cljs.core.first(seq69621__$1);
var seq69621__$2 = cljs.core.next(seq69621__$1);
var G__69624 = cljs.core.first(seq69621__$2);
var seq69621__$3 = cljs.core.next(seq69621__$2);
var G__69625 = cljs.core.first(seq69621__$3);
var seq69621__$4 = cljs.core.next(seq69621__$3);
var G__69626 = cljs.core.first(seq69621__$4);
var seq69621__$5 = cljs.core.next(seq69621__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69622,G__69623,G__69624,G__69625,G__69626,seq69621__$5);
});

return null;
})()
;
applied_science.js_interop$macros.update_in_BANG_.cljs$lang$macro = true;

var ret__4776__auto___70130 = applied_science.js_interop$macros.push_BANG_ = (function applied_science$js_interop$macros$push_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
var sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("array"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Array","js/Array",-423508366,null)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,array,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
applied_science.js_interop$macros.push_BANG_.cljs$lang$macro = true;

var ret__4776__auto___70138 = applied_science.js_interop$macros.unshift_BANG_ = (function applied_science$js_interop$macros$unshift_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".unshift",".unshift",549569771,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.unshift_BANG_.cljs$lang$macro = true;

var ret__4776__auto___70142 = (function (){
applied_science.js_interop$macros.call = (function applied_science$js_interop$macros$call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70143 = arguments.length;
var i__4731__auto___70144 = (0);
while(true){
if((i__4731__auto___70144 < len__4730__auto___70143)){
args__4736__auto__.push((arguments[i__4731__auto___70144]));

var G__70145 = (i__4731__auto___70144 + (1));
i__4731__auto___70144 = G__70145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return applied_science.js_interop$macros.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.call.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,args){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros.dot_call(k),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69668__auto__","obj__69668__auto__",1356212616,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__69669__auto__","f__69669__auto__",-531555883,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69668__auto__","obj__69668__auto__",1356212616,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__69669__auto__","f__69669__auto__",-531555883,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69668__auto__","obj__69668__auto__",1356212616,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.call.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
applied_science.js_interop$macros.call.cljs$lang$applyTo = (function (seq69671){
var G__69672 = cljs.core.first(seq69671);
var seq69671__$1 = cljs.core.next(seq69671);
var G__69673 = cljs.core.first(seq69671__$1);
var seq69671__$2 = cljs.core.next(seq69671__$1);
var G__69674 = cljs.core.first(seq69671__$2);
var seq69671__$3 = cljs.core.next(seq69671__$2);
var G__69675 = cljs.core.first(seq69671__$3);
var seq69671__$4 = cljs.core.next(seq69671__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69672,G__69673,G__69674,G__69675,seq69671__$4);
});

return null;
})()
;
applied_science.js_interop$macros.call.cljs$lang$macro = true;

var ret__4776__auto___70166 = (function (){
applied_science.js_interop$macros.call_in = (function applied_science$js_interop$macros$call_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70167 = arguments.length;
var i__4731__auto___70168 = (0);
while(true){
if((i__4731__auto___70168 < len__4730__auto___70167)){
args__4736__auto__.push((arguments[i__4731__auto___70168]));

var G__70169 = (i__4731__auto___70168 + (1));
i__4731__auto___70168 = G__70169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return applied_science.js_interop$macros.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,args){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__69691__auto__","parent__69691__auto__",-2107592167,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__69692__auto__","f__69692__auto__",1918242063,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__69691__auto__","parent__69691__auto__",-2107592167,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__69692__auto__","f__69692__auto__",1918242063,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__69691__auto__","parent__69691__auto__",-2107592167,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),args))),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.call_in.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
applied_science.js_interop$macros.call_in.cljs$lang$applyTo = (function (seq69693){
var G__69694 = cljs.core.first(seq69693);
var seq69693__$1 = cljs.core.next(seq69693);
var G__69695 = cljs.core.first(seq69693__$1);
var seq69693__$2 = cljs.core.next(seq69693__$1);
var G__69696 = cljs.core.first(seq69693__$2);
var seq69693__$3 = cljs.core.next(seq69693__$2);
var G__69697 = cljs.core.first(seq69693__$3);
var seq69693__$4 = cljs.core.next(seq69693__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69694,G__69695,G__69696,G__69697,seq69693__$4);
});

return null;
})()
;
applied_science.js_interop$macros.call_in.cljs$lang$macro = true;

var ret__4776__auto___70185 = applied_science.js_interop$macros.apply = (function applied_science$js_interop$macros$apply(_AMPERSAND_form,_AMPERSAND_env,obj,k,arg_array){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69722__auto__","obj__69722__auto__",-756110602,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__69723__auto__","f__69723__auto__",104196070,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,22,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69722__auto__","obj__69722__auto__",-756110602,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__69723__auto__","f__69723__auto__",104196070,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__69722__auto__","obj__69722__auto__",-756110602,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.apply.cljs$lang$macro = true;

var ret__4776__auto___70190 = applied_science.js_interop$macros.apply_in = (function applied_science$js_interop$macros$apply_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks,arg_array){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__69727__auto__","parent__69727__auto__",1395822219,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__69728__auto__","f__69728__auto__",1719120410,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__69727__auto__","parent__69727__auto__",1395822219,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__69728__auto__","f__69728__auto__",1719120410,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__69727__auto__","parent__69727__auto__",1395822219,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0))));
}
});
applied_science.js_interop$macros.apply_in.cljs$lang$macro = true;

applied_science.js_interop$macros.literal_obj = (function applied_science$js_interop$macros$literal_obj(keyvals){
var keyvals_str = ["({",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69753){
var vec__69755 = p__69753;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69755,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69755,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)):["\"",cljs.core.name(k),"\""].join(''))),":~{}"].join('');
}),keyvals))),"})"].join('');
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),keyvals_str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,keyvals)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4776__auto___70246 = (function (){
applied_science.js_interop$macros.obj = (function applied_science$js_interop$macros$obj(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70247 = arguments.length;
var i__4731__auto___70248 = (0);
while(true){
if((i__4731__auto___70248 < len__4730__auto___70247)){
args__4736__auto__.push((arguments[i__4731__auto___70248]));

var G__70249 = (i__4731__auto___70248 + (1));
i__4731__auto___70248 = G__70249;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,keyvals){
var kvs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals);
if(cljs.core.every_QMARK_(((function (kvs){
return (function (p1__69764_SHARP_){
return (((p1__69764_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__69764_SHARP_ === 'string') || (applied_science.js_interop$macros.dot_sym_QMARK_(p1__69764_SHARP_)));
});})(kvs))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,kvs))){
return applied_science.js_interop$macros.literal_obj(kvs);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (kvs){
return (function applied_science$js_interop$macros$iter__69782(s__69783){
return (new cljs.core.LazySeq(null,((function (kvs){
return (function (){
var s__69783__$1 = s__69783;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69783__$1);
if(temp__5720__auto__){
var s__69783__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69783__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69783__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69785 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69784 = (0);
while(true){
if((i__69784 < size__4522__auto__)){
var vec__69794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__69784);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69794,(1),null);
cljs.core.chunk_append(b__69785,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__70254 = (i__69784 + (1));
i__69784 = G__70254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69785),applied_science$js_interop$macros$iter__69782(cljs.core.chunk_rest(s__69783__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69785),null);
}
} else {
var vec__69802 = cljs.core.first(s__69783__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69802,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__69782(cljs.core.rest(s__69783__$2)));
}
} else {
return null;
}
break;
}
});})(kvs))
,null,null));
});})(kvs))
;
return iter__4523__auto__(kvs);
})()], 0))));
}
});

applied_science.js_interop$macros.obj.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop$macros.obj.cljs$lang$applyTo = (function (seq69771){
var G__69772 = cljs.core.first(seq69771);
var seq69771__$1 = cljs.core.next(seq69771);
var G__69773 = cljs.core.first(seq69771__$1);
var seq69771__$2 = cljs.core.next(seq69771__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69772,G__69773,seq69771__$2);
});

return null;
})()
;
applied_science.js_interop$macros.obj.cljs$lang$macro = true;

/**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * 
 *   Options map accepts a :keyfn for custom key conversions.
 */
applied_science.js_interop$macros.lit_STAR_ = (function applied_science$js_interop$macros$lit_STAR_(var_args){
var G__69819 = arguments.length;
switch (G__69819) {
case 1:
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(null,x);
});

applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__69824,x){
var map__69825 = p__69824;
var map__69825__$1 = (((((!((map__69825 == null))))?(((((map__69825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69825):map__69825);
var opts = map__69825__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69825__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.identity);
if(cljs.core.map_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),cljs.core.reduce_kv(((function (map__69825,map__69825__$1,opts,keyfn){
return (function (p1__69815_SHARP_,p2__69816_SHARP_,p3__69817_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(p1__69815_SHARP_,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(p2__69816_SHARP_) : keyfn.call(null,p2__69816_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(opts,p3__69817_SHARP_)], 0));
});})(map__69825,map__69825__$1,opts,keyfn))
,cljs.core.PersistentVector.EMPTY,x));
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop$macros.lit_STAR_,x));
} else {
return x;

}
}
});

applied_science.js_interop$macros.lit_STAR_.cljs$lang$maxFixedArity = 2;

var ret__4776__auto___70285 = /**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * (using j/obj and cljs.core/array)
 */
applied_science.js_interop$macros.lit = (function applied_science$js_interop$macros$lit(_AMPERSAND_form,_AMPERSAND_env,form){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1(form);
});
applied_science.js_interop$macros.lit.cljs$lang$macro = true;

var ret__4776__auto___70288 = (function (){
/**
 * `let` with destructuring that supports js property and array access.
 * Use ^:js metadata on the binding form to invoke. Eg/
 * 
 * (let [^:js {:keys [a]} obj] …)
 */
applied_science.js_interop$macros.let$ = (function applied_science$js_interop$macros$let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70289 = arguments.length;
var i__4731__auto___70290 = (0);
while(true){
if((i__4731__auto___70290 < len__4730__auto___70289)){
args__4736__auto__.push((arguments[i__4731__auto___70290]));

var G__70291 = (i__4731__auto___70290 + (1));
i__4731__auto___70290 = G__70291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(applied_science.js_interop.destructure.destructure(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),bindings))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","let","applied-science.js-interop/let",-142128647,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),bindings)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.let$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop$macros.let$.cljs$lang$applyTo = (function (seq69838){
var G__69839 = cljs.core.first(seq69838);
var seq69838__$1 = cljs.core.next(seq69838);
var G__69840 = cljs.core.first(seq69838__$1);
var seq69838__$2 = cljs.core.next(seq69838__$1);
var G__69841 = cljs.core.first(seq69838__$2);
var seq69838__$3 = cljs.core.next(seq69838__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69839,G__69840,G__69841,seq69838__$3);
});

return null;
})()
;
applied_science.js_interop$macros.let$.cljs$lang$macro = true;

var ret__4776__auto___70301 = (function (){
/**
 * `fn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke. Eg/
 * 
 * (fn [^:js {:keys [a]}] …)
 */
applied_science.js_interop$macros.fn = (function applied_science$js_interop$macros$fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70302 = arguments.length;
var i__4731__auto___70303 = (0);
while(true){
if((i__4731__auto___70303 < len__4730__auto___70302)){
args__4736__auto__.push((arguments[i__4731__auto___70303]));

var G__70304 = (i__4731__auto___70303 + (1));
i__4731__auto___70303 = G__70304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),applied_science.js_interop.destructure.destructure_fn_args(args));
});

applied_science.js_interop$macros.fn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop$macros.fn.cljs$lang$applyTo = (function (seq69862){
var G__69863 = cljs.core.first(seq69862);
var seq69862__$1 = cljs.core.next(seq69862);
var G__69864 = cljs.core.first(seq69862__$1);
var seq69862__$2 = cljs.core.next(seq69862__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69863,G__69864,seq69862__$2);
});

return null;
})()
;
applied_science.js_interop$macros.fn.cljs$lang$macro = true;

var ret__4776__auto___70316 = (function (){
/**
 * `defn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke.
 */
applied_science.js_interop$macros.defn = (function applied_science$js_interop$macros$defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70320 = arguments.length;
var i__4731__auto___70321 = (0);
while(true){
if((i__4731__auto___70321 < len__4730__auto___70320)){
args__4736__auto__.push((arguments[i__4731__auto___70321]));

var G__70322 = (i__4731__auto___70321 + (1));
i__4731__auto___70321 = G__70322;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),applied_science.js_interop.destructure.destructure_fn_args(args));
});

applied_science.js_interop$macros.defn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop$macros.defn.cljs$lang$applyTo = (function (seq69872){
var G__69873 = cljs.core.first(seq69872);
var seq69872__$1 = cljs.core.next(seq69872);
var G__69874 = cljs.core.first(seq69872__$1);
var seq69872__$2 = cljs.core.next(seq69872__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69873,G__69874,seq69872__$2);
});

return null;
})()
;
applied_science.js_interop$macros.defn.cljs$lang$macro = true;


//# sourceMappingURL=applied-science.js-interop$macros.js.map
