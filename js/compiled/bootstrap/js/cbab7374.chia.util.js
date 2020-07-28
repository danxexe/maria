goog.provide('chia.util');
chia.util.guard = (function chia$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
chia.util.guard__GT__GT_ = (function chia$util$guard__GT__GT_(f,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
chia.util.some_str = (function chia$util$some_str(s){
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
chia.util.nilable = (function chia$util$nilable(pred){
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
chia.util.dissoc_in = (function chia$util$dissoc_in(m,p__41201){
var vec__41202 = p__41201;
var seq__41203 = cljs.core.seq(vec__41202);
var first__41204 = cljs.core.first(seq__41203);
var seq__41203__$1 = cljs.core.next(seq__41203);
var k = first__41204;
var ks = seq__41203__$1;
var keys = vec__41202;
if(ks){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = (chia.util.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? chia.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : chia.util.dissoc_in.call(null,nextmap,ks));
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
chia.util.disj_in = (function chia$util$disj_in(m,p__41212,value){
var vec__41213 = p__41212;
var seq__41214 = cljs.core.seq(vec__41213);
var first__41215 = cljs.core.first(seq__41214);
var seq__41214__$1 = cljs.core.next(seq__41214);
var k = first__41215;
var ks = seq__41214__$1;
var path = vec__41213;
if(ks){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = (chia.util.disj_in.cljs$core$IFn$_invoke$arity$3 ? chia.util.disj_in.cljs$core$IFn$_invoke$arity$3(nextmap,ks,value) : chia.util.disj_in.call(null,nextmap,ks,value));
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
chia.util.update_map = (function chia$util$update_map(m,key_f,val_f){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(key_f.cljs$core$IFn$_invoke$arity$1 ? key_f.cljs$core$IFn$_invoke$arity$1(k) : key_f.call(null,k)),(val_f.cljs$core$IFn$_invoke$arity$1 ? val_f.cljs$core$IFn$_invoke$arity$1(v) : val_f.call(null,v)));
}),cljs.core.transient$(cljs.core.empty(m)),m));
});
chia.util.update_keys = (function chia$util$update_keys(m,f){
return chia.util.update_map(m,f,cljs.core.identity);
});
chia.util.update_vals = (function chia$util$update_vals(m,f){
return chia.util.update_map(m,cljs.core.identity,f);
});
chia.util.update_some_keys = (function chia$util$update_some_keys(m,ks,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function chia$util$update_some_keys_$_update_k(m__$1,k){
var G__41224 = m__$1;
if(cljs.core.contains_QMARK_(m__$1,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41224,k,(function (){var G__41228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41228) : f.call(null,G__41228));
})());
} else {
return G__41224;
}
}),m,ks);
});
chia.util.update_some = (function chia$util$update_some(m,updaters){
return cljs.core.reduce_kv((function (m__$1,k,update_f){
var G__41230 = m__$1;
if(cljs.core.contains_QMARK_(m__$1,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__41230,k,update_f);
} else {
return G__41230;
}
}),m,updaters);
});
chia.util.first_when = (function chia$util$first_when(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,coll);
});
chia.util.last_while = (function chia$util$last_while(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (found,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.reduced(found);
}
}),null,coll);
});
chia.util.apply_if_fn = (function chia$util$apply_if_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41361 = arguments.length;
var i__4731__auto___41362 = (0);
while(true){
if((i__4731__auto___41362 < len__4730__auto___41361)){
args__4736__auto__.push((arguments[i__4731__auto___41362]));

var G__41363 = (i__4731__auto___41362 + (1));
i__4731__auto___41362 = G__41363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.util.apply_if_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.util.apply_if_fn.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return f;
}
});

chia.util.apply_if_fn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.util.apply_if_fn.cljs$lang$applyTo = (function (seq41231){
var G__41234 = cljs.core.first(seq41231);
var seq41231__$1 = cljs.core.next(seq41231);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41234,seq41231__$1);
});

/**
 * Like memoize, but uses `key-f` to compute the memoization key from passed-in args.
 */
chia.util.memoize_by = (function chia$util$memoize_by(f,key_f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var lookup_sentinel = ({});
return ((function (mem,lookup_sentinel){
return (function() { 
var G__41366__delegate = function (args){
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
var G__41366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41367__i = 0, G__41367__a = new Array(arguments.length -  0);
while (G__41367__i < G__41367__a.length) {G__41367__a[G__41367__i] = arguments[G__41367__i + 0]; ++G__41367__i;}
  args = new cljs.core.IndexedSeq(G__41367__a,0,null);
} 
return G__41366__delegate.call(this,args);};
G__41366.cljs$lang$maxFixedArity = 0;
G__41366.cljs$lang$applyTo = (function (arglist__41368){
var args = cljs.core.seq(arglist__41368);
return G__41366__delegate(args);
});
G__41366.cljs$core$IFn$_invoke$arity$variadic = G__41366__delegate;
return G__41366;
})()
;
;})(mem,lookup_sentinel))
});
/**
 * Returns all user-assigned bindings resulting from a let binding.
 */
chia.util.user_bindings = (function chia$util$user_bindings(let_bindings){
var bound_sym_QMARK_ = cljs.core.symbol_QMARK_;
var user_syms_keywords = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bound_sym_QMARK_){
return (function (p1__41262_SHARP_){
return (((p1__41262_SHARP_ instanceof cljs.core.Symbol)) || ((p1__41262_SHARP_ instanceof cljs.core.Keyword)));
});})(bound_sym_QMARK_))
,cljs.core.group_by(((function (bound_sym_QMARK_){
return (function (p1__41261_SHARP_){
if((p1__41261_SHARP_ instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbols","symbols",1211743);
} else {
if((p1__41261_SHARP_ instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keywords","keywords",1526959054);
} else {
return null;

}
}
});})(bound_sym_QMARK_))
,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),let_bindings))))));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bound_sym_QMARK_,user_syms_keywords){
return (function (x){
var G__41265 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x));
return (bound_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bound_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(G__41265) : bound_sym_QMARK_.call(null,G__41265));
});})(bound_sym_QMARK_,user_syms_keywords))
,user_syms_keywords);
});
chia.util.promise_QMARK_ = (function chia$util$promise_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Promise.resolve(x),x);
});
chia.util.ensure_prefix = (function chia$util$ensure_prefix(s,pfx){
var G__41273 = s;
if((!(clojure.string.starts_with_QMARK_(s,pfx)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41273)].join('');
} else {
return G__41273;
}
});
chia.util.strip_prefix = (function chia$util$strip_prefix(s,prefix){
var G__41274 = s;
if(clojure.string.starts_with_QMARK_(s,prefix)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__41274,cljs.core.count(prefix));
} else {
return G__41274;
}
});
chia.util.simplify_keyword = (function chia$util$simplify_keyword(k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k));
});
chia.util.merge_maps = (function chia$util$merge_maps(x,y){
if(((cljs.core.map_QMARK_(y)) && (((cljs.core.map_QMARK_(x)) || ((x == null)))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
} else {
return y;
}
});
chia.util.deep_merge_maps = (function chia$util$deep_merge_maps(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41379 = arguments.length;
var i__4731__auto___41380 = (0);
while(true){
if((i__4731__auto___41380 < len__4730__auto___41379)){
args__4736__auto__.push((arguments[i__4731__auto___41380]));

var G__41381 = (i__4731__auto___41380 + (1));
i__4731__auto___41380 = G__41381;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return chia.util.deep_merge_maps.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

chia.util.deep_merge_maps.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,chia.util.merge_maps,ms);
});

chia.util.deep_merge_maps.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
chia.util.deep_merge_maps.cljs$lang$applyTo = (function (seq41278){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41278));
});

chia.util.update_first = (function chia$util$update_first(coll,pred,update_f){
var end = cljs.core.count(coll);
var i = (0);
while(true){
if((i >= end)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("update-first","not-found","update-first/not-found",1512875440),pred], null)], 0));

return coll;
} else {
if(cljs.core.truth_((function (){var G__41299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,i);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__41299) : pred.call(null,G__41299));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,i,(function (){var G__41305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,i);
return (update_f.cljs$core$IFn$_invoke$arity$1 ? update_f.cljs$core$IFn$_invoke$arity$1(G__41305) : update_f.call(null,G__41305));
})());
} else {
var G__41383 = (i + (1));
i = G__41383;
continue;

}
}
break;
}
});
chia.util.dissoc_ns = (function chia$util$dissoc_ns(m,ns_key){
var ns = cljs.core.name(ns_key);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ns){
return (function (m__$1,k){
var G__41317 = m__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(k))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41317,k);
} else {
return G__41317;
}
});})(ns))
,m,cljs.core.keys(m));
});
chia.util.group_ns = (function chia$util$group_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41393 = arguments.length;
var i__4731__auto___41394 = (0);
while(true){
if((i__4731__auto___41394 < len__4730__auto___41393)){
args__4736__auto__.push((arguments[i__4731__auto___41394]));

var G__41395 = (i__4731__auto___41394 + (1));
i__4731__auto___41394 = G__41395;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.util.group_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.util.group_ns.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__41329){
var map__41330 = p__41329;
var map__41330__$1 = (((((!((map__41330 == null))))?(((((map__41330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41330):map__41330);
var lift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41330__$1,new cljs.core.Keyword(null,"lift?","lift?",1086984105));
return cljs.core.reduce_kv(((function (map__41330,map__41330__$1,lift_QMARK_){
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
});})(map__41330,map__41330__$1,lift_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,m);
});

chia.util.group_ns.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.util.group_ns.cljs$lang$applyTo = (function (seq41326){
var G__41327 = cljs.core.first(seq41326);
var seq41326__$1 = cljs.core.next(seq41326);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41327,seq41326__$1);
});

chia.util.select_ns = (function chia$util$select_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41419 = arguments.length;
var i__4731__auto___41420 = (0);
while(true){
if((i__4731__auto___41420 < len__4730__auto___41419)){
args__4736__auto__.push((arguments[i__4731__auto___41420]));

var G__41421 = (i__4731__auto___41420 + (1));
i__4731__auto___41420 = G__41421;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.util.select_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.util.select_ns.cljs$core$IFn$_invoke$arity$variadic = (function (m,ns_key,p__41340){
var map__41341 = p__41340;
var map__41341__$1 = (((((!((map__41341 == null))))?(((((map__41341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41341):map__41341);
var lift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41341__$1,new cljs.core.Keyword(null,"lift?","lift?",1086984105));
var ns = (function (){var G__41343 = ns_key;
var G__41343__$1 = (((G__41343 instanceof cljs.core.Keyword))?G__41343.fqn:null);
switch (G__41343__$1) {
case "_":
return null;

break;
default:
return ns_key;

}
})();
return cljs.core.reduce_kv(((function (ns,map__41341,map__41341__$1,lift_QMARK_){
return (function (m__$1,k,v){
var G__41344 = m__$1;
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(k))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41344,(cljs.core.truth_(lift_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)):k),v);
} else {
return G__41344;
}
});})(ns,map__41341,map__41341__$1,lift_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,m);
});

chia.util.select_ns.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.util.select_ns.cljs$lang$applyTo = (function (seq41336){
var G__41337 = cljs.core.first(seq41336);
var seq41336__$1 = cljs.core.next(seq41336);
var G__41338 = cljs.core.first(seq41336__$1);
var seq41336__$2 = cljs.core.next(seq41336__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41337,G__41338,seq41336__$2);
});

chia.util.lift_nses = (function chia$util$lift_nses(m,nses){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((((k instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(nses,cljs.core.namespace(k))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v);
} else {
return m__$1;
}
}),m,m);
});
chia.util.memoize_str = (function chia$util$memoize_str(f){
var mem = ({});
return ((function (mem){
return (function (x){
var obj41347 = mem;
var k41348 = applied_science.js_interop.impl.wrap_key(x);
if((function (){var obj41349 = obj41347;
return (((!((obj41349 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41348,obj41349)));
})()){
return (obj41347[k41348]);
} else {
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
(mem[x] = v);

return v;
}
});
;})(mem))
});
chia.util.camel_case_STAR_ = (function chia$util$camel_case_STAR_(s){
return clojure.string.replace(s,/-(.)/,(function (p__41350){
var vec__41351 = p__41350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41351,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41351,(1),null);
return clojure.string.upper_case(s__$1);
}));
});
chia.util.camel_case = chia.util.memoize_str(chia.util.camel_case_STAR_);
chia.util.count_by = (function chia$util$count_by(f,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))){
return (acc + (1));
} else {
return acc;
}
}),(0),s);
});
