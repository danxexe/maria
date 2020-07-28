goog.provide('chia.db.patterns');
/**
 * Map for building sets of patterns.
 */
chia.db.patterns.empty_pattern_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"_a_","_a_",1238688032),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"_av","_av",354871436),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.PersistentHashSet.EMPTY], null);
chia.db.patterns.added_patterns = (function chia$db$patterns$added_patterns(prev_p,next_p){
var G__45481 = next_p;
if((!((prev_p == null)))){
return cljs.core.reduce_kv(((function (G__45481){
return (function (patterns,k,next_v){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_p,k);
if(cljs.core.truth_(temp__5718__auto__)){
var prev_v = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(patterns,k,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_v,prev_v));
} else {
return patterns;
}
});})(G__45481))
,next_p,G__45481);
} else {
return G__45481;
}
});
chia.db.patterns.removed_patterns = (function chia$db$patterns$removed_patterns(prev_p,next_p){
var G__45489 = prev_p;
if((!((next_p == null)))){
return cljs.core.reduce_kv(((function (G__45489){
return (function (patterns,k,prev_v){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_p,k);
if(cljs.core.truth_(temp__5718__auto__)){
var next_v = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(patterns,k,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_v,next_v));
} else {
return patterns;
}
});})(G__45489))
,prev_p,G__45489);
} else {
return G__45489;
}
});
chia.db.patterns.supported_pattern_keys = cljs.core.set(cljs.core.keys(chia.db.patterns.empty_pattern_map));
chia.db.patterns.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
chia.db.patterns.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
/**
 * Record pattern to *pattern-log*.
 */
chia.db.patterns.log_read = (function chia$db$patterns$log_read(var_args){
var G__45502 = arguments.length;
switch (G__45502) {
case 3:
return chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3 = (function (db,kind,pattern){
if((!((chia.reactive._STAR_reader_STAR_ == null)))){
cljs.core._vreset_BANG_(chia.reactive._STAR_reader_dependency_log_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(chia.reactive._STAR_reader_dependency_log_STAR_),db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive._STAR_reader_dependency_log_STAR_),db),kind,chia.db.patterns.conj_set,pattern)));
} else {
}

return db;
});

chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$4 = (function (db,kind,pattern,multiple_QMARK_){
if((!((chia.reactive._STAR_reader_STAR_ == null)))){
cljs.core._vreset_BANG_(chia.reactive._STAR_reader_dependency_log_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(chia.reactive._STAR_reader_dependency_log_STAR_),db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive._STAR_reader_dependency_log_STAR_),db),kind,(cljs.core.truth_(multiple_QMARK_)?chia.db.patterns.into_set:chia.db.patterns.conj_set),pattern)));
} else {
}

return db;
});

chia.db.patterns.log_read.cljs$lang$maxFixedArity = 4;

/**
 * Associates value with pattern in value-map.
 */
chia.db.patterns.add_value = (function chia$db$patterns$add_value(value_map,pattern_key,pattern,value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null),chia.db.patterns.conj_set,value);
});
/**
 * Removes value associated with pattern in value-map.
 */
chia.db.patterns.remove_value = (function chia$db$patterns$remove_value(value_map,pattern_key,pattern,value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null),cljs.core.disj,value);
});

/**
 * Copied from chia.db.core.
 */
chia.db.patterns.resolve_id = (function chia$db$patterns$resolve_id(db,db_snap,attr,val){
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),attr,val], null)));
});
/**
 * Returns true if pattern has lookup ref in id position.
 */
chia.db.patterns.lookup_ref_QMARK_ = (function chia$db$patterns$lookup_ref_QMARK_(kind,pattern){
var or__4131__auto__ = (function (){var and__4120__auto__ = (((kind instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword(null,"e__","e__",302856739).fqn === kind.fqn)));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.vector_QMARK_(pattern);
if(and__4120__auto____$1){
return pattern;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (((kind instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword(null,"ea_","ea_",-139041839).fqn === kind.fqn)));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.vector_QMARK_(cljs.core.first(pattern));
if(and__4120__auto____$1){
return cljs.core.first(pattern);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
/**
 * Adds pattern listener.
 */
chia.db.patterns.listen = (function chia$db$patterns$listen(db,patterns,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.reduce_kv((function (listeners,kind,patterns__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$1,pattern){
return chia.db.patterns.add_value(listeners__$1,kind,pattern,value);
}),listeners,patterns__$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"listeners","listeners",394544445)),patterns));
});
/**
 * Removes pattern listener.
 */
chia.db.patterns.unlisten = (function chia$db$patterns$unlisten(db,patterns,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.reduce_kv((function (listeners,kind,patterns__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$1,pattern){
return chia.db.patterns.remove_value(listeners__$1,kind,pattern,value);
}),listeners,patterns__$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"listeners","listeners",394544445)),patterns));
});
/**
 * Returns list of keys for which map contains a non-empty value.
 */
chia.db.patterns.non_empty_keys = (function chia$db$patterns$non_empty_keys(m){
return cljs.core.reduce_kv((function (ks,k,v){
var G__45546 = ks;
if((!(cljs.core.empty_QMARK_(v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45546,k);
} else {
return G__45546;
}
}),cljs.core.PersistentHashSet.EMPTY,m);
});
/**
 * Returns a map of patterns matched by a list of datoms.
 *   Limits patterns to those listed in pattern-keys.
 *   many? should return true for attributes which have schema value :db.cardinality/many?.
 */
chia.db.patterns.datom_patterns = (function chia$db$patterns$datom_patterns(var_args){
var G__45554 = arguments.length;
switch (G__45554) {
case 2:
return chia.db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chia.db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$2 = (function (datoms,many_QMARK_){
return chia.db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3(datoms,many_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e__","e__",302856739),new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.Keyword(null,"_a_","_a_",1238688032)], null));
});

chia.db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3 = (function (datoms,many_QMARK_,pattern_keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pattern_map,p__45560){
var vec__45561 = p__45560;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45561,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45561,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45561,(2),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45561,(3),null);
var G__45564 = pattern_map;
var G__45564__$1 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"e__","e__",302856739)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45564,new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.conj,e):G__45564);
var G__45564__$2 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"ea_","ea_",-139041839)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45564__$1,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)):G__45564__$1);
var G__45564__$3 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_av","_av",354871436)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45564__$2,new cljs.core.Keyword(null,"_av","_av",354871436),cljs.core.into,(cljs.core.truth_((many_QMARK_.cljs$core$IFn$_invoke$arity$1 ? many_QMARK_.cljs$core$IFn$_invoke$arity$1(a) : many_QMARK_.call(null,a)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__45564,G__45564__$1,G__45564__$2,vec__45561,e,a,v,pv){
return (function (patterns,v__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(patterns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v__$1], null));
});})(G__45564,G__45564__$1,G__45564__$2,vec__45561,e,a,v,pv))
,cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,pv)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,pv], null)], null))):G__45564__$2);
if(cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_a_","_a_",1238688032))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45564__$3,new cljs.core.Keyword(null,"_a_","_a_",1238688032),cljs.core.conj,a);
} else {
return G__45564__$3;
}
}),cljs.core.select_keys(chia.db.patterns.empty_pattern_map,pattern_keys),datoms);
});

chia.db.patterns.datom_patterns.cljs$lang$maxFixedArity = 3;

/**
 * Returns values associated with patterns.
 * 
 *   value-map is of form {<pattern-key> {<pattern> #{...set of values...}}}.
 *   pattern-map is of form {<pattern-key> #{...set of patterns...}}
 */
chia.db.patterns.pattern_values = (function chia$db$patterns$pattern_values(pattern_map,value_map){
return cljs.core.reduce_kv((function (values,pattern_key,patterns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (values__$1,pattern){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(values__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null)));
}),values,patterns);
}),cljs.core.PersistentHashSet.EMPTY,pattern_map);
});
/**
 * Returns the set of values in value-map associated with patterns matched by datoms.
 */
chia.db.patterns.datom_values = (function chia$db$patterns$datom_values(value_map,datoms,many_QMARK_){
var active_keys = chia.db.patterns.non_empty_keys(value_map);
return chia.db.patterns.pattern_values(chia.db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3(datoms,many_QMARK_,active_keys),value_map);
});
/**
 * Invalidate a pattern, ie. invoke callbacks that match pattern
 */
chia.db.patterns.invalidate_BANG_ = (function chia$db$patterns$invalidate_BANG_(db,pattern_key,pattern){
var seq__45577 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),pattern_key,pattern], null)));
var chunk__45578 = null;
var count__45579 = (0);
var i__45580 = (0);
while(true){
if((i__45580 < count__45579)){
var f = chunk__45578.cljs$core$IIndexed$_nth$arity$2(null,i__45580);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__45628 = seq__45577;
var G__45629 = chunk__45578;
var G__45630 = count__45579;
var G__45631 = (i__45580 + (1));
seq__45577 = G__45628;
chunk__45578 = G__45629;
count__45579 = G__45630;
i__45580 = G__45631;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45577);
if(temp__5720__auto__){
var seq__45577__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45577__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45577__$1);
var G__45632 = cljs.core.chunk_rest(seq__45577__$1);
var G__45633 = c__4550__auto__;
var G__45634 = cljs.core.count(c__4550__auto__);
var G__45635 = (0);
seq__45577 = G__45632;
chunk__45578 = G__45633;
count__45579 = G__45634;
i__45580 = G__45635;
continue;
} else {
var f = cljs.core.first(seq__45577__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__45638 = cljs.core.next(seq__45577__$1);
var G__45639 = null;
var G__45640 = (0);
var G__45641 = (0);
seq__45577 = G__45638;
chunk__45578 = G__45639;
count__45579 = G__45640;
i__45580 = G__45641;
continue;
}
} else {
return null;
}
}
break;
}
});
