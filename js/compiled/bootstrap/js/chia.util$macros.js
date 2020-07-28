goog.provide('chia.util$macros');
goog.require('cljs.core');
goog.require('chia.util.macros');
goog.require('clojure.string');
goog.require('applied_science.js_interop');
chia.util$macros.guard = (function chia$util$macros$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
chia.util$macros.guard__GT__GT_ = (function chia$util$macros$guard__GT__GT_(f,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
chia.util$macros.some_str = (function chia$util$macros$some_str(s){
if(cljs.core.truth_((function (){var and__4120__auto__ = s;
if(cljs.core.truth_(and__4120__auto__)){
return ((typeof s === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"")));
} else {
return and__4120__auto__;
}
})())){
return s;
} else {
return null;
}
});
chia.util$macros.nilable = (function chia$util$macros$nilable(pred){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}
});
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
chia.util$macros.dissoc_in = (function chia$util$macros$dissoc_in(m,p__69387){
var vec__69388 = p__69387;
var seq__69389 = cljs.core.seq(vec__69388);
var first__69390 = cljs.core.first(seq__69389);
var seq__69389__$1 = cljs.core.next(seq__69389);
var k = first__69390;
var ks = seq__69389__$1;
var keys = vec__69388;
if(ks){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = (chia.util$macros.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? chia.util$macros.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : chia.util$macros.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Dis[join]'s `value` from set at `path` returning a new nested structure.
 * The set, if empty, and any empty maps that result, will not be present in the new structure.
 */
chia.util$macros.disj_in = (function chia$util$macros$disj_in(m,p__69400,value){
var vec__69404 = p__69400;
var seq__69405 = cljs.core.seq(vec__69404);
var first__69406 = cljs.core.first(seq__69405);
var seq__69405__$1 = cljs.core.next(seq__69405);
var k = first__69406;
var ks = seq__69405__$1;
var path = vec__69404;
if(ks){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = (chia.util$macros.disj_in.cljs$core$IFn$_invoke$arity$3 ? chia.util$macros.disj_in.cljs$core$IFn$_invoke$arity$3(nextmap,ks,value) : chia.util$macros.disj_in.call(null,nextmap,ks,value));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
var new_set = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),value);
if(cljs.core.empty_QMARK_(new_set)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new_set);
}
}
});
chia.util$macros.update_map = (function chia$util$macros$update_map(m,key_f,val_f){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(key_f.cljs$core$IFn$_invoke$arity$1 ? key_f.cljs$core$IFn$_invoke$arity$1(k) : key_f.call(null,k)),(val_f.cljs$core$IFn$_invoke$arity$1 ? val_f.cljs$core$IFn$_invoke$arity$1(v) : val_f.call(null,v)));
}),cljs.core.transient$(cljs.core.empty(m)),m));
});
chia.util$macros.update_keys = (function chia$util$macros$update_keys(m,f){
return chia.util$macros.update_map(m,f,cljs.core.identity);
});
chia.util$macros.update_vals = (function chia$util$macros$update_vals(m,f){
return chia.util$macros.update_map(m,cljs.core.identity,f);
});
chia.util$macros.update_some_keys = (function chia$util$macros$update_some_keys(m,ks,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function chia$util$macros$update_some_keys_$_update_k(m__$1,k){
var G__69418 = m__$1;
if(cljs.core.contains_QMARK_(m__$1,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69418,k,(function (){var G__69419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69419) : f.call(null,G__69419));
})());
} else {
return G__69418;
}
}),m,ks);
});
chia.util$macros.update_some = (function chia$util$macros$update_some(m,updaters){
return cljs.core.reduce_kv((function (m__$1,k,update_f){
var G__69426 = m__$1;
if(cljs.core.contains_QMARK_(m__$1,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__69426,k,update_f);
} else {
return G__69426;
}
}),m,updaters);
});
chia.util$macros.first_when = (function chia$util$macros$first_when(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,coll);
});
chia.util$macros.last_while = (function chia$util$macros$last_while(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (found,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.reduced(found);
}
}),null,coll);
});
chia.util$macros.apply_if_fn = (function chia$util$macros$apply_if_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69739 = arguments.length;
var i__4731__auto___69740 = (0);
while(true){
if((i__4731__auto___69740 < len__4730__auto___69739)){
args__4736__auto__.push((arguments[i__4731__auto___69740]));

var G__69741 = (i__4731__auto___69740 + (1));
i__4731__auto___69740 = G__69741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.util$macros.apply_if_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.util$macros.apply_if_fn.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return f;
}
});

chia.util$macros.apply_if_fn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.util$macros.apply_if_fn.cljs$lang$applyTo = (function (seq69431){
var G__69432 = cljs.core.first(seq69431);
var seq69431__$1 = cljs.core.next(seq69431);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69432,seq69431__$1);
});

/**
 * Like memoize, but uses `key-f` to compute the memoization key from passed-in args.
 */
chia.util$macros.memoize_by = (function chia$util$macros$memoize_by(f,key_f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var lookup_sentinel = ({});
return ((function (mem,lookup_sentinel){
return (function() { 
var G__69754__delegate = function (args){
var args_key = (key_f.cljs$core$IFn$_invoke$arity$1 ? key_f.cljs$core$IFn$_invoke$arity$1(args) : key_f.call(null,args));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(mem),args_key,lookup_sentinel);
if((v === lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args_key,ret);

return ret;
} else {
return v;
}
};
var G__69754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69762__i = 0, G__69762__a = new Array(arguments.length -  0);
while (G__69762__i < G__69762__a.length) {G__69762__a[G__69762__i] = arguments[G__69762__i + 0]; ++G__69762__i;}
  args = new cljs.core.IndexedSeq(G__69762__a,0,null);
} 
return G__69754__delegate.call(this,args);};
G__69754.cljs$lang$maxFixedArity = 0;
G__69754.cljs$lang$applyTo = (function (arglist__69763){
var args = cljs.core.seq(arglist__69763);
return G__69754__delegate(args);
});
G__69754.cljs$core$IFn$_invoke$arity$variadic = G__69754__delegate;
return G__69754;
})()
;
;})(mem,lookup_sentinel))
});
/**
 * Returns all user-assigned bindings resulting from a let binding.
 */
chia.util$macros.user_bindings = (function chia$util$macros$user_bindings(let_bindings){
var bound_sym_QMARK_ = cljs.core.symbol_QMARK_;
var user_syms_keywords = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bound_sym_QMARK_){
return (function (p1__69451_SHARP_){
return (((p1__69451_SHARP_ instanceof cljs.core.Symbol)) || ((p1__69451_SHARP_ instanceof cljs.core.Keyword)));
});})(bound_sym_QMARK_))
,cljs.core.group_by(((function (bound_sym_QMARK_){
return (function (p1__69450_SHARP_){
if((p1__69450_SHARP_ instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbols","symbols",1211743);
} else {
if((p1__69450_SHARP_ instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keywords","keywords",1526959054);
} else {
return null;

}
}
});})(bound_sym_QMARK_))
,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),let_bindings))))));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bound_sym_QMARK_,user_syms_keywords){
return (function (x){
var G__69456 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x));
return (bound_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bound_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(G__69456) : bound_sym_QMARK_.call(null,G__69456));
});})(bound_sym_QMARK_,user_syms_keywords))
,user_syms_keywords);
});
var ret__4776__auto___69797 = (function (){
chia.util$macros.log_let = (function chia$util$macros$log_let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69798 = arguments.length;
var i__4731__auto___69800 = (0);
while(true){
if((i__4731__auto___69800 < len__4730__auto___69798)){
args__4736__auto__.push((arguments[i__4731__auto___69800]));

var G__69801 = (i__4731__auto___69800 + (1));
i__4731__auto___69800 = G__69801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return chia.util$macros.log_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

chia.util$macros.log_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var map__69466 = cljs.core.meta(bindings);
var map__69466__$1 = (((((!((map__69466 == null))))?(((((map__69466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69466):map__69466);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69466__$1,new cljs.core.Keyword(null,"line","line",212345235));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","console.groupCollapsed","js/console.groupCollapsed",1629864434,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),null,(1),null))))),null,(1),null)),(function (){var iter__4523__auto__ = ((function (map__69466,map__69466__$1,file,line){
return (function chia$util$macros$iter__69469(s__69470){
return (new cljs.core.LazySeq(null,((function (map__69466,map__69466__$1,file,line){
return (function (){
var s__69470__$1 = s__69470;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69470__$1);
if(temp__5720__auto__){
var s__69470__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69470__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69470__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69472 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69471 = (0);
while(true){
if((i__69471 < size__4522__auto__)){
var user_binding = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__69471);
cljs.core.chunk_append(b__69472,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,user_binding,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(user_binding)),null,(1),null))], 0)))));

var G__69827 = (i__69471 + (1));
i__69471 = G__69827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69472),chia$util$macros$iter__69469(cljs.core.chunk_rest(s__69470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69472),null);
}
} else {
var user_binding = cljs.core.first(s__69470__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,user_binding,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(user_binding)),null,(1),null))], 0)))),chia$util$macros$iter__69469(cljs.core.rest(s__69470__$2)));
}
} else {
return null;
}
break;
}
});})(map__69466,map__69466__$1,file,line))
,null,null));
});})(map__69466,map__69466__$1,file,line))
;
return iter__4523__auto__(chia.util$macros.user_bindings(bindings));
})(),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("js","console.groupEnd","js/console.groupEnd",-662580567,null),null,(1),null))))),null,(1),null)),body], 0))));
});

chia.util$macros.log_let.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chia.util$macros.log_let.cljs$lang$applyTo = (function (seq69457){
var G__69458 = cljs.core.first(seq69457);
var seq69457__$1 = cljs.core.next(seq69457);
var G__69459 = cljs.core.first(seq69457__$1);
var seq69457__$2 = cljs.core.next(seq69457__$1);
var G__69460 = cljs.core.first(seq69457__$2);
var seq69457__$3 = cljs.core.next(seq69457__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69458,G__69459,G__69460,seq69457__$3);
});

return null;
})()
;
chia.util$macros.log_let.cljs$lang$macro = true;

var ret__4776__auto___69842 = chia.util$macros.log_sym = (function chia$util$macros$log_sym(_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),":"].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0)))),null,(1),null)))));
});
chia.util$macros.log_sym.cljs$lang$macro = true;

var ret__4776__auto___69855 = chia.util$macros.as_promise = (function chia$util$macros$as_promise(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Promise.","js/Promise.",1532938122,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"resolve__69528__auto__","resolve__69528__auto__",-329064755,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reject__69529__auto__","reject__69529__auto__",1217877445,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(expr,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"err__69530__auto__","err__69530__auto__",1115460270,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__69531__auto__","result__69531__auto__",756996419,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__69530__auto__","err__69530__auto__",1115460270,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"reject__69529__auto__","reject__69529__auto__",1217877445,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__69530__auto__","err__69530__auto__",1115460270,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"resolve__69528__auto__","resolve__69528__auto__",-329064755,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__69531__auto__","result__69531__auto__",756996419,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))));
});
chia.util$macros.as_promise.cljs$lang$macro = true;

chia.util$macros.promise_QMARK_ = (function chia$util$macros$promise_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Promise.resolve(x),x);
});
chia.util$macros.ensure_prefix = (function chia$util$macros$ensure_prefix(s,pfx){
var G__69571 = s;
if((!(clojure.string.starts_with_QMARK_(s,pfx)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69571)].join('');
} else {
return G__69571;
}
});
chia.util$macros.strip_prefix = (function chia$util$macros$strip_prefix(s,prefix){
var G__69585 = s;
if(clojure.string.starts_with_QMARK_(s,prefix)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__69585,cljs.core.count(prefix));
} else {
return G__69585;
}
});
chia.util$macros.simplify_keyword = (function chia$util$macros$simplify_keyword(k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k));
});
chia.util$macros.merge_maps = (function chia$util$macros$merge_maps(x,y){
if(((cljs.core.map_QMARK_(y)) && (((cljs.core.map_QMARK_(x)) || ((x == null)))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
} else {
return y;
}
});
chia.util$macros.deep_merge_maps = (function chia$util$macros$deep_merge_maps(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69883 = arguments.length;
var i__4731__auto___69885 = (0);
while(true){
if((i__4731__auto___69885 < len__4730__auto___69883)){
args__4736__auto__.push((arguments[i__4731__auto___69885]));

var G__69888 = (i__4731__auto___69885 + (1));
i__4731__auto___69885 = G__69888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return chia.util$macros.deep_merge_maps.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

chia.util$macros.deep_merge_maps.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,chia.util$macros.merge_maps,ms);
});

chia.util$macros.deep_merge_maps.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
chia.util$macros.deep_merge_maps.cljs$lang$applyTo = (function (seq69592){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69592));
});

chia.util$macros.update_first = (function chia$util$macros$update_first(coll,pred,update_f){
var end = cljs.core.count(coll);
var i = (0);
while(true){
if((i >= end)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("update-first","not-found","update-first/not-found",1512875440),pred], null)], 0));

return coll;
} else {
if(cljs.core.truth_((function (){var G__69618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,i);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__69618) : pred.call(null,G__69618));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,i,(function (){var G__69620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,i);
return (update_f.cljs$core$IFn$_invoke$arity$1 ? update_f.cljs$core$IFn$_invoke$arity$1(G__69620) : update_f.call(null,G__69620));
})());
} else {
var G__69907 = (i + (1));
i = G__69907;
continue;

}
}
break;
}
});
chia.util$macros.dissoc_ns = (function chia$util$macros$dissoc_ns(m,ns_key){
var ns = cljs.core.name(ns_key);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ns){
return (function (m__$1,k){
var G__69627 = m__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(k))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69627,k);
} else {
return G__69627;
}
});})(ns))
,m,cljs.core.keys(m));
});
chia.util$macros.group_ns = (function chia$util$macros$group_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69911 = arguments.length;
var i__4731__auto___69913 = (0);
while(true){
if((i__4731__auto___69913 < len__4730__auto___69911)){
args__4736__auto__.push((arguments[i__4731__auto___69913]));

var G__69914 = (i__4731__auto___69913 + (1));
i__4731__auto___69913 = G__69914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.util$macros.group_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.util$macros.group_ns.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__69639){
var map__69640 = p__69639;
var map__69640__$1 = (((((!((map__69640 == null))))?(((((map__69640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69640):map__69640);
var lift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69640__$1,new cljs.core.Keyword(null,"lift?","lift?",1086984105));
return cljs.core.reduce_kv(((function (map__69640,map__69640__$1,lift_QMARK_){
return (function (m__$1,k,v){
var path = (((k instanceof cljs.core.Keyword))?(function (){var temp__5718__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5718__auto__)){
var ns = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,(cljs.core.truth_(lift_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)):k)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),k], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),k], null));
return cljs.core.assoc_in(m__$1,path,v);
});})(map__69640,map__69640__$1,lift_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,m);
});

chia.util$macros.group_ns.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.util$macros.group_ns.cljs$lang$applyTo = (function (seq69634){
var G__69635 = cljs.core.first(seq69634);
var seq69634__$1 = cljs.core.next(seq69634);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69635,seq69634__$1);
});

chia.util$macros.select_ns = (function chia$util$macros$select_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69929 = arguments.length;
var i__4731__auto___69930 = (0);
while(true){
if((i__4731__auto___69930 < len__4730__auto___69929)){
args__4736__auto__.push((arguments[i__4731__auto___69930]));

var G__69933 = (i__4731__auto___69930 + (1));
i__4731__auto___69930 = G__69933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util$macros.select_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util$macros.select_ns.cljs$core$IFn$_invoke$arity$variadic = (function (m,ns_key,p__69656){
var map__69660 = p__69656;
var map__69660__$1 = (((((!((map__69660 == null))))?(((((map__69660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69660):map__69660);
var lift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69660__$1,new cljs.core.Keyword(null,"lift?","lift?",1086984105));
var ns = (function (){var G__69666 = ns_key;
var G__69666__$1 = (((G__69666 instanceof cljs.core.Keyword))?G__69666.fqn:null);
switch (G__69666__$1) {
case "_":
return null;

break;
default:
return ns_key;

}
})();
return cljs.core.reduce_kv(((function (ns,map__69660,map__69660__$1,lift_QMARK_){
return (function (m__$1,k,v){
var G__69676 = m__$1;
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(k))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69676,(cljs.core.truth_(lift_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)):k),v);
} else {
return G__69676;
}
});})(ns,map__69660,map__69660__$1,lift_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,m);
});

chia.util$macros.select_ns.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util$macros.select_ns.cljs$lang$applyTo = (function (seq69649){
var G__69650 = cljs.core.first(seq69649);
var seq69649__$1 = cljs.core.next(seq69649);
var G__69651 = cljs.core.first(seq69649__$1);
var seq69649__$2 = cljs.core.next(seq69649__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69650,G__69651,seq69649__$2);
});

chia.util$macros.lift_nses = (function chia$util$macros$lift_nses(m,nses){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((((k instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(nses,cljs.core.namespace(k))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v);
} else {
return m__$1;
}
}),m,m);
});
chia.util$macros.memoize_str = (function chia$util$macros$memoize_str(f){
var mem = ({});
return ((function (mem){
return (function (x){
var obj69688 = mem;
var k69689 = applied_science.js_interop.impl.wrap_key(x);
if((function (){var obj69690 = obj69688;
return (((!((obj69690 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69689,obj69690)));
})()){
return (obj69688[k69689]);
} else {
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
(mem[x] = v);

return v;
}
});
;})(mem))
});
chia.util$macros.camel_case_STAR_ = (function chia$util$macros$camel_case_STAR_(s){
return clojure.string.replace(s,/-(.)/,(function (p__69702){
var vec__69703 = p__69702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69703,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69703,(1),null);
return clojure.string.upper_case(s__$1);
}));
});
chia.util$macros.camel_case = chia.util$macros.memoize_str(chia.util$macros.camel_case_STAR_);
chia.util$macros.count_by = (function chia$util$macros$count_by(f,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))){
return (acc + (1));
} else {
return acc;
}
}),(0),s);
});

//# sourceMappingURL=chia.util$macros.js.map
