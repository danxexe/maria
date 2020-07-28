goog.provide('applied_science.js_interop$macros');
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
var ret__4776__auto___53406 = applied_science.js_interop$macros.in_QMARK_ = (function applied_science$js_interop$macros$in_QMARK_(_AMPERSAND_form,_AMPERSAND_env,k,obj){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","in?*","applied-science.js-interop.impl/in?*",-1012411264,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0))));
});
applied_science.js_interop$macros.in_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___53407 = (function (){
applied_science.js_interop$macros.unchecked_get = (function applied_science$js_interop$macros$unchecked_get(var_args){
var G__52924 = arguments.length;
switch (G__52924) {
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

var ret__4776__auto___53450 = (function (){
applied_science.js_interop$macros._BANG_get = (function applied_science$js_interop$macros$_BANG_get(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53451 = arguments.length;
var i__4731__auto___53452 = (0);
while(true){
if((i__4731__auto___53452 < len__4730__auto___53451)){
args__4736__auto__.push((arguments[i__4731__auto___53452]));

var G__53453 = (i__4731__auto___53452 + (1));
i__4731__auto___53452 = G__53453;
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
applied_science.js_interop$macros._BANG_get.cljs$lang$applyTo = (function (seq52933){
var G__52934 = cljs.core.first(seq52933);
var seq52933__$1 = cljs.core.next(seq52933);
var G__52935 = cljs.core.first(seq52933__$1);
var seq52933__$2 = cljs.core.next(seq52933__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52934,G__52935,seq52933__$2);
});

return null;
})()
;
applied_science.js_interop$macros._BANG_get.cljs$lang$macro = true;

var ret__4776__auto___53460 = (function (){
applied_science.js_interop$macros.unchecked_set = (function applied_science$js_interop$macros$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53461 = arguments.length;
var i__4731__auto___53462 = (0);
while(true){
if((i__4731__auto___53462 < len__4730__auto___53461)){
args__4736__auto__.push((arguments[i__4731__auto___53462]));

var G__53465 = (i__4731__auto___53462 + (1));
i__4731__auto___53462 = G__53465;
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
return (function applied_science$js_interop$macros$iter__52944(s__52945){
return (new cljs.core.LazySeq(null,((function (o){
return (function (){
var s__52945__$1 = s__52945;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52945__$1);
if(temp__5720__auto__){
var s__52945__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52945__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52945__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52947 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52946 = (0);
while(true){
if((i__52946 < size__4522__auto__)){
var vec__52952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52952,(1),null);
cljs.core.chunk_append(b__52947,((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))));

var G__53475 = (i__52946 + (1));
i__52946 = G__53475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52947),applied_science$js_interop$macros$iter__52944(cljs.core.chunk_rest(s__52945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52947),null);
}
} else {
var vec__52956 = cljs.core.first(s__52945__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52956,(1),null);
return cljs.core.cons(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))),applied_science$js_interop$macros$iter__52944(cljs.core.rest(s__52945__$2)));
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
applied_science.js_interop$macros.unchecked_set.cljs$lang$applyTo = (function (seq52940){
var G__52941 = cljs.core.first(seq52940);
var seq52940__$1 = cljs.core.next(seq52940);
var G__52942 = cljs.core.first(seq52940__$1);
var seq52940__$2 = cljs.core.next(seq52940__$1);
var G__52943 = cljs.core.first(seq52940__$2);
var seq52940__$3 = cljs.core.next(seq52940__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52941,G__52942,G__52943,seq52940__$3);
});

return null;
})()
;
applied_science.js_interop$macros.unchecked_set.cljs$lang$macro = true;

var ret__4776__auto___53480 = (function (){
applied_science.js_interop$macros._BANG_set = (function applied_science$js_interop$macros$_BANG_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53485 = arguments.length;
var i__4731__auto___53486 = (0);
while(true){
if((i__4731__auto___53486 < len__4730__auto___53485)){
args__4736__auto__.push((arguments[i__4731__auto___53486]));

var G__53490 = (i__4731__auto___53486 + (1));
i__4731__auto___53486 = G__53490;
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
applied_science.js_interop$macros._BANG_set.cljs$lang$applyTo = (function (seq52965){
var G__52966 = cljs.core.first(seq52965);
var seq52965__$1 = cljs.core.next(seq52965);
var G__52967 = cljs.core.first(seq52965__$1);
var seq52965__$2 = cljs.core.next(seq52965__$1);
var G__52968 = cljs.core.first(seq52965__$2);
var seq52965__$3 = cljs.core.next(seq52965__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52966,G__52967,G__52968,seq52965__$3);
});

return null;
})()
;
applied_science.js_interop$macros._BANG_set.cljs$lang$macro = true;

var ret__4776__auto___53496 = applied_science.js_interop$macros.contains_QMARK_ = (function applied_science$js_interop$macros$contains_QMARK_(_AMPERSAND_form,_AMPERSAND_env,obj,k){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.contains_QMARK_.cljs$lang$macro = true;

applied_science.js_interop$macros.get_STAR_ = (function applied_science$js_interop$macros$get_STAR_(var_args){
var G__52984 = arguments.length;
switch (G__52984) {
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

var ret__4776__auto___53498 = (function (){
applied_science.js_interop$macros.get = (function applied_science$js_interop$macros$get(var_args){
var G__53006 = arguments.length;
switch (G__53006) {
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

var ret__4776__auto___53515 = (function (){
applied_science.js_interop$macros.get_in = (function applied_science$js_interop$macros$get_in(var_args){
var G__53014 = arguments.length;
switch (G__53014) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__53012__auto__","out__53012__auto__",-1107804026,null),null,(1),null)),(new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__53011__auto__","out__53011__auto__",-349021118,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__53011__auto__","out__53011__auto__",-349021118,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__53011__auto__","out__53011__auto__",-349021118,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),obj,ks),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"out__53012__auto__","out__53012__auto__",-1107804026,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__53012__auto__","out__53012__auto__",-1107804026,null),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","get-in*","applied-science.js-interop.impl/get-in*",400975371,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.get_in.cljs$lang$maxFixedArity = 5;

return null;
})()
;
applied_science.js_interop$macros.get_in.cljs$lang$macro = true;

var ret__4776__auto___53537 = applied_science.js_interop$macros._BANG_get_in = (function applied_science$js_interop$macros$_BANG_get_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0))));
}),obj,ks);
});
applied_science.js_interop$macros._BANG_get_in.cljs$lang$macro = true;

var ret__4776__auto___53540 = applied_science.js_interop$macros.select_keys = (function applied_science$js_interop$macros$select_keys(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var out = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("out");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,out,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (o,out){
return (function applied_science$js_interop$macros$select_keys_$_iter__53036(s__53037){
return (new cljs.core.LazySeq(null,((function (o,out){
return (function (){
var s__53037__$1 = s__53037;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__53037__$1);
if(temp__5720__auto__){
var s__53037__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53037__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__53037__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__53039 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__53038 = (0);
while(true){
if((i__53038 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__53038);
cljs.core.chunk_append(b__53039,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))));

var G__53553 = (i__53038 + (1));
i__53038 = G__53553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53039),applied_science$js_interop$macros$select_keys_$_iter__53036(cljs.core.chunk_rest(s__53037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53039),null);
}
} else {
var k = cljs.core.first(s__53037__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__53027__auto__","k__53027__auto__",1099218214,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),applied_science$js_interop$macros$select_keys_$_iter__53036(cljs.core.rest(s__53037__$2)));
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

var ret__4776__auto___53570 = /**
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,child,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,child,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__53055__auto__","new-child__53055__auto__",-90801481,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__53055__auto__","new-child__53055__auto__",-90801481,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__53055__auto__","new-child__53055__auto__",-90801481,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.get_in_PLUS__BANG_ = (function applied_science$js_interop$macros$get_in_PLUS__BANG_(o,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop$macros.get_PLUS__BANG_,o,ks);
});
var ret__4776__auto___53600 = (function (){
applied_science.js_interop$macros.assoc_BANG_ = (function applied_science$js_interop$macros$assoc_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53601 = arguments.length;
var i__4731__auto___53602 = (0);
while(true){
if((i__4731__auto___53602 < len__4730__auto___53601)){
args__4736__auto__.push((arguments[i__4731__auto___53602]));

var G__53604 = (i__4731__auto___53602 + (1));
i__4731__auto___53602 = G__53604;
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
return (function applied_science$js_interop$macros$iter__53071(s__53072){
return (new cljs.core.LazySeq(null,((function (o){
return (function (){
var s__53072__$1 = s__53072;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__53072__$1);
if(temp__5720__auto__){
var s__53072__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53072__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__53072__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__53074 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__53073 = (0);
while(true){
if((i__53073 < size__4522__auto__)){
var vec__53078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__53073);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53078,(1),null);
cljs.core.chunk_append(b__53074,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__53611 = (i__53073 + (1));
i__53073 = G__53611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53074),applied_science$js_interop$macros$iter__53071(cljs.core.chunk_rest(s__53072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53074),null);
}
} else {
var vec__53081 = cljs.core.first(s__53072__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53081,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__53071(cljs.core.rest(s__53072__$2)));
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
applied_science.js_interop$macros.assoc_BANG_.cljs$lang$applyTo = (function (seq53063){
var G__53064 = cljs.core.first(seq53063);
var seq53063__$1 = cljs.core.next(seq53063);
var G__53065 = cljs.core.first(seq53063__$1);
var seq53063__$2 = cljs.core.next(seq53063__$1);
var G__53066 = cljs.core.first(seq53063__$2);
var seq53063__$3 = cljs.core.next(seq53063__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53064,G__53065,G__53066,seq53063__$3);
});

return null;
})()
;
applied_science.js_interop$macros.assoc_BANG_.cljs$lang$macro = true;

var ret__4776__auto___53612 = applied_science.js_interop$macros.assoc_in_BANG_ = (function applied_science$js_interop$macros$assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","assoc-in*","applied-science.js-interop.impl/assoc-in*",45744373,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))));
}
});
applied_science.js_interop$macros.assoc_in_BANG_.cljs$lang$macro = true;

var ret__4776__auto___53620 = applied_science.js_interop$macros._BANG_assoc_in_BANG_ = (function applied_science$js_interop$macros$_BANG_assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53097__auto__","obj__53097__auto__",-409244577,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53097__auto__","obj__53097__auto__",-409244577,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53097__auto__","obj__53097__auto__",-409244577,null),null,(1),null))], 0))));
});
applied_science.js_interop$macros._BANG_assoc_in_BANG_.cljs$lang$macro = true;

var ret__4776__auto___53624 = (function (){
applied_science.js_interop$macros._BANG_update = (function applied_science$js_interop$macros$_BANG_update(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53625 = arguments.length;
var i__4731__auto___53626 = (0);
while(true){
if((i__4731__auto___53626 < len__4730__auto___53625)){
args__4736__auto__.push((arguments[i__4731__auto___53626]));

var G__53627 = (i__4731__auto___53626 + (1));
i__4731__auto___53626 = G__53627;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__53109__auto__","o__53109__auto__",1606196575,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__53109__auto__","o__53109__auto__",1606196575,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__53109__auto__","o__53109__auto__",1606196575,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

applied_science.js_interop$macros._BANG_update.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
applied_science.js_interop$macros._BANG_update.cljs$lang$applyTo = (function (seq53110){
var G__53111 = cljs.core.first(seq53110);
var seq53110__$1 = cljs.core.next(seq53110);
var G__53112 = cljs.core.first(seq53110__$1);
var seq53110__$2 = cljs.core.next(seq53110__$1);
var G__53113 = cljs.core.first(seq53110__$2);
var seq53110__$3 = cljs.core.next(seq53110__$2);
var G__53114 = cljs.core.first(seq53110__$3);
var seq53110__$4 = cljs.core.next(seq53110__$3);
var G__53115 = cljs.core.first(seq53110__$4);
var seq53110__$5 = cljs.core.next(seq53110__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53111,G__53112,G__53113,G__53114,G__53115,seq53110__$5);
});

return null;
})()
;
applied_science.js_interop$macros._BANG_update.cljs$lang$macro = true;

var ret__4776__auto___53647 = (function (){
applied_science.js_interop$macros.update_BANG_ = (function applied_science$js_interop$macros$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53648 = arguments.length;
var i__4731__auto___53649 = (0);
while(true){
if((i__4731__auto___53649 < len__4730__auto___53648)){
args__4736__auto__.push((arguments[i__4731__auto___53649]));

var G__53650 = (i__4731__auto___53649 + (1));
i__4731__auto___53649 = G__53650;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__53137__auto__","o__53137__auto__",-763994769,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!update","applied-science.js-interop/!update",-868872919,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__53137__auto__","o__53137__auto__",-763994769,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null))], 0))));
});

applied_science.js_interop$macros.update_BANG_.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
applied_science.js_interop$macros.update_BANG_.cljs$lang$applyTo = (function (seq53139){
var G__53140 = cljs.core.first(seq53139);
var seq53139__$1 = cljs.core.next(seq53139);
var G__53141 = cljs.core.first(seq53139__$1);
var seq53139__$2 = cljs.core.next(seq53139__$1);
var G__53142 = cljs.core.first(seq53139__$2);
var seq53139__$3 = cljs.core.next(seq53139__$2);
var G__53143 = cljs.core.first(seq53139__$3);
var seq53139__$4 = cljs.core.next(seq53139__$3);
var G__53144 = cljs.core.first(seq53139__$4);
var seq53139__$5 = cljs.core.next(seq53139__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53140,G__53141,G__53142,G__53143,G__53144,seq53139__$5);
});

return null;
})()
;
applied_science.js_interop$macros.update_BANG_.cljs$lang$macro = true;

var ret__4776__auto___53654 = (function (){
applied_science.js_interop$macros.update_in_BANG_ = (function applied_science$js_interop$macros$update_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53655 = arguments.length;
var i__4731__auto___53656 = (0);
while(true){
if((i__4731__auto___53656 < len__4730__auto___53655)){
args__4736__auto__.push((arguments[i__4731__auto___53656]));

var G__53657 = (i__4731__auto___53656 + (1));
i__4731__auto___53656 = G__53657;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__53171__auto__","inner-obj__53171__auto__",-1325343617,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","update!","applied-science.js-interop/update!",1834803760,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__53171__auto__","inner-obj__53171__auto__",-1325343617,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","update-in*","applied-science.js-interop.impl/update-in*",-1172951159,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(args),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.update_in_BANG_.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
applied_science.js_interop$macros.update_in_BANG_.cljs$lang$applyTo = (function (seq53172){
var G__53173 = cljs.core.first(seq53172);
var seq53172__$1 = cljs.core.next(seq53172);
var G__53174 = cljs.core.first(seq53172__$1);
var seq53172__$2 = cljs.core.next(seq53172__$1);
var G__53175 = cljs.core.first(seq53172__$2);
var seq53172__$3 = cljs.core.next(seq53172__$2);
var G__53176 = cljs.core.first(seq53172__$3);
var seq53172__$4 = cljs.core.next(seq53172__$3);
var G__53177 = cljs.core.first(seq53172__$4);
var seq53172__$5 = cljs.core.next(seq53172__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53173,G__53174,G__53175,G__53176,G__53177,seq53172__$5);
});

return null;
})()
;
applied_science.js_interop$macros.update_in_BANG_.cljs$lang$macro = true;

var ret__4776__auto___53679 = applied_science.js_interop$macros.push_BANG_ = (function applied_science$js_interop$macros$push_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
var sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("array"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Array","js/Array",-423508366,null)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,array,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
applied_science.js_interop$macros.push_BANG_.cljs$lang$macro = true;

var ret__4776__auto___53680 = applied_science.js_interop$macros.unshift_BANG_ = (function applied_science$js_interop$macros$unshift_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".unshift",".unshift",549569771,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.unshift_BANG_.cljs$lang$macro = true;

var ret__4776__auto___53684 = (function (){
applied_science.js_interop$macros.call = (function applied_science$js_interop$macros$call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53688 = arguments.length;
var i__4731__auto___53689 = (0);
while(true){
if((i__4731__auto___53689 < len__4730__auto___53688)){
args__4736__auto__.push((arguments[i__4731__auto___53689]));

var G__53690 = (i__4731__auto___53689 + (1));
i__4731__auto___53689 = G__53690;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53197__auto__","obj__53197__auto__",-597067233,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__53198__auto__","f__53198__auto__",-1465668592,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53197__auto__","obj__53197__auto__",-597067233,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__53198__auto__","f__53198__auto__",-1465668592,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53197__auto__","obj__53197__auto__",-597067233,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.call.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
applied_science.js_interop$macros.call.cljs$lang$applyTo = (function (seq53199){
var G__53200 = cljs.core.first(seq53199);
var seq53199__$1 = cljs.core.next(seq53199);
var G__53201 = cljs.core.first(seq53199__$1);
var seq53199__$2 = cljs.core.next(seq53199__$1);
var G__53202 = cljs.core.first(seq53199__$2);
var seq53199__$3 = cljs.core.next(seq53199__$2);
var G__53203 = cljs.core.first(seq53199__$3);
var seq53199__$4 = cljs.core.next(seq53199__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53200,G__53201,G__53202,G__53203,seq53199__$4);
});

return null;
})()
;
applied_science.js_interop$macros.call.cljs$lang$macro = true;

var ret__4776__auto___53714 = (function (){
applied_science.js_interop$macros.call_in = (function applied_science$js_interop$macros$call_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53715 = arguments.length;
var i__4731__auto___53716 = (0);
while(true){
if((i__4731__auto___53716 < len__4730__auto___53715)){
args__4736__auto__.push((arguments[i__4731__auto___53716]));

var G__53718 = (i__4731__auto___53716 + (1));
i__4731__auto___53716 = G__53718;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__53215__auto__","parent__53215__auto__",-1015576316,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__53216__auto__","f__53216__auto__",18938387,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__53215__auto__","parent__53215__auto__",-1015576316,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__53216__auto__","f__53216__auto__",18938387,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__53215__auto__","parent__53215__auto__",-1015576316,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),args))),null,(1),null))], 0))));
}
});

applied_science.js_interop$macros.call_in.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
applied_science.js_interop$macros.call_in.cljs$lang$applyTo = (function (seq53219){
var G__53220 = cljs.core.first(seq53219);
var seq53219__$1 = cljs.core.next(seq53219);
var G__53221 = cljs.core.first(seq53219__$1);
var seq53219__$2 = cljs.core.next(seq53219__$1);
var G__53222 = cljs.core.first(seq53219__$2);
var seq53219__$3 = cljs.core.next(seq53219__$2);
var G__53223 = cljs.core.first(seq53219__$3);
var seq53219__$4 = cljs.core.next(seq53219__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53220,G__53221,G__53222,G__53223,seq53219__$4);
});

return null;
})()
;
applied_science.js_interop$macros.call_in.cljs$lang$macro = true;

var ret__4776__auto___53756 = applied_science.js_interop$macros.apply = (function applied_science$js_interop$macros$apply(_AMPERSAND_form,_AMPERSAND_env,obj,k,arg_array){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53236__auto__","obj__53236__auto__",-1156554240,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__53237__auto__","f__53237__auto__",-349127787,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,22,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53236__auto__","obj__53236__auto__",-1156554240,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__53237__auto__","f__53237__auto__",-349127787,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__53236__auto__","obj__53236__auto__",-1156554240,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.apply.cljs$lang$macro = true;

var ret__4776__auto___53766 = applied_science.js_interop$macros.apply_in = (function applied_science$js_interop$macros$apply_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks,arg_array){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__53251__auto__","parent__53251__auto__",1344010076,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__53252__auto__","f__53252__auto__",-361652523,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__53251__auto__","parent__53251__auto__",1344010076,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__53252__auto__","f__53252__auto__",-361652523,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__53251__auto__","parent__53251__auto__",1344010076,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0))));
}
});
applied_science.js_interop$macros.apply_in.cljs$lang$macro = true;

applied_science.js_interop$macros.literal_obj = (function applied_science$js_interop$macros$literal_obj(keyvals){
var keyvals_str = ["({",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53270){
var vec__53271 = p__53270;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53271,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53271,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)):["\"",cljs.core.name(k),"\""].join(''))),":~{}"].join('');
}),keyvals))),"})"].join('');
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),keyvals_str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,keyvals)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4776__auto___53791 = (function (){
applied_science.js_interop$macros.obj = (function applied_science$js_interop$macros$obj(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53792 = arguments.length;
var i__4731__auto___53793 = (0);
while(true){
if((i__4731__auto___53793 < len__4730__auto___53792)){
args__4736__auto__.push((arguments[i__4731__auto___53793]));

var G__53794 = (i__4731__auto___53793 + (1));
i__4731__auto___53793 = G__53794;
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
return (function (p1__53278_SHARP_){
return (((p1__53278_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__53278_SHARP_ === 'string') || (applied_science.js_interop$macros.dot_sym_QMARK_(p1__53278_SHARP_)));
});})(kvs))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,kvs))){
return applied_science.js_interop$macros.literal_obj(kvs);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (kvs){
return (function applied_science$js_interop$macros$iter__53289(s__53290){
return (new cljs.core.LazySeq(null,((function (kvs){
return (function (){
var s__53290__$1 = s__53290;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__53290__$1);
if(temp__5720__auto__){
var s__53290__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53290__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__53290__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__53292 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__53291 = (0);
while(true){
if((i__53291 < size__4522__auto__)){
var vec__53297 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__53291);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53297,(1),null);
cljs.core.chunk_append(b__53292,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__53816 = (i__53291 + (1));
i__53291 = G__53816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53292),applied_science$js_interop$macros$iter__53289(cljs.core.chunk_rest(s__53290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53292),null);
}
} else {
var vec__53302 = cljs.core.first(s__53290__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53302,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__53289(cljs.core.rest(s__53290__$2)));
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
applied_science.js_interop$macros.obj.cljs$lang$applyTo = (function (seq53282){
var G__53283 = cljs.core.first(seq53282);
var seq53282__$1 = cljs.core.next(seq53282);
var G__53284 = cljs.core.first(seq53282__$1);
var seq53282__$2 = cljs.core.next(seq53282__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53283,G__53284,seq53282__$2);
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
var G__53323 = arguments.length;
switch (G__53323) {
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

applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__53332,x){
var map__53333 = p__53332;
var map__53333__$1 = (((((!((map__53333 == null))))?(((((map__53333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53333):map__53333);
var opts = map__53333__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53333__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.identity);
if(cljs.core.map_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),cljs.core.reduce_kv(((function (map__53333,map__53333__$1,opts,keyfn){
return (function (p1__53315_SHARP_,p2__53316_SHARP_,p3__53317_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(p1__53315_SHARP_,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(p2__53316_SHARP_) : keyfn.call(null,p2__53316_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(opts,p3__53317_SHARP_)], 0));
});})(map__53333,map__53333__$1,opts,keyfn))
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

var ret__4776__auto___53822 = /**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * (using j/obj and cljs.core/array)
 */
applied_science.js_interop$macros.lit = (function applied_science$js_interop$macros$lit(_AMPERSAND_form,_AMPERSAND_env,form){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1(form);
});
applied_science.js_interop$macros.lit.cljs$lang$macro = true;

var ret__4776__auto___53829 = (function (){
/**
 * `let` with destructuring that supports js property and array access.
 * Use ^:js metadata on the binding form to invoke. Eg/
 * 
 * (let [^:js {:keys [a]} obj] …)
 */
applied_science.js_interop$macros.let$ = (function applied_science$js_interop$macros$let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53831 = arguments.length;
var i__4731__auto___53832 = (0);
while(true){
if((i__4731__auto___53832 < len__4730__auto___53831)){
args__4736__auto__.push((arguments[i__4731__auto___53832]));

var G__53833 = (i__4731__auto___53832 + (1));
i__4731__auto___53832 = G__53833;
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
applied_science.js_interop$macros.let$.cljs$lang$applyTo = (function (seq53348){
var G__53349 = cljs.core.first(seq53348);
var seq53348__$1 = cljs.core.next(seq53348);
var G__53350 = cljs.core.first(seq53348__$1);
var seq53348__$2 = cljs.core.next(seq53348__$1);
var G__53351 = cljs.core.first(seq53348__$2);
var seq53348__$3 = cljs.core.next(seq53348__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53349,G__53350,G__53351,seq53348__$3);
});

return null;
})()
;
applied_science.js_interop$macros.let$.cljs$lang$macro = true;

var ret__4776__auto___53841 = (function (){
/**
 * `fn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke. Eg/
 * 
 * (fn [^:js {:keys [a]}] …)
 */
applied_science.js_interop$macros.fn = (function applied_science$js_interop$macros$fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53842 = arguments.length;
var i__4731__auto___53843 = (0);
while(true){
if((i__4731__auto___53843 < len__4730__auto___53842)){
args__4736__auto__.push((arguments[i__4731__auto___53843]));

var G__53844 = (i__4731__auto___53843 + (1));
i__4731__auto___53843 = G__53844;
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
applied_science.js_interop$macros.fn.cljs$lang$applyTo = (function (seq53358){
var G__53359 = cljs.core.first(seq53358);
var seq53358__$1 = cljs.core.next(seq53358);
var G__53360 = cljs.core.first(seq53358__$1);
var seq53358__$2 = cljs.core.next(seq53358__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53359,G__53360,seq53358__$2);
});

return null;
})()
;
applied_science.js_interop$macros.fn.cljs$lang$macro = true;

var ret__4776__auto___53852 = (function (){
/**
 * `defn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke.
 */
applied_science.js_interop$macros.defn = (function applied_science$js_interop$macros$defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53853 = arguments.length;
var i__4731__auto___53854 = (0);
while(true){
if((i__4731__auto___53854 < len__4730__auto___53853)){
args__4736__auto__.push((arguments[i__4731__auto___53854]));

var G__53855 = (i__4731__auto___53854 + (1));
i__4731__auto___53854 = G__53855;
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
applied_science.js_interop$macros.defn.cljs$lang$applyTo = (function (seq53372){
var G__53373 = cljs.core.first(seq53372);
var seq53372__$1 = cljs.core.next(seq53372);
var G__53374 = cljs.core.first(seq53372__$1);
var seq53372__$2 = cljs.core.next(seq53372__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53373,G__53374,seq53372__$2);
});

return null;
})()
;
applied_science.js_interop$macros.defn.cljs$lang$macro = true;

