goog.provide('chia.reactive');
goog.require('cljs.core');
goog.require('chia.util.macros');
goog.require('applied_science.js_interop');


/**
 * The reader being evaluated
 */
chia.reactive._STAR_reader_STAR_ = null;
/**
 * Flag to temporarily suspend reactivity
 */
chia.reactive._STAR_silent_STAR_ = false;
/**
 * Keeps track of what data sources a reader accesses during compute
 */
chia.reactive._STAR_reader_dependency_log_STAR_ = null;
chia.reactive.handle_next_deps_BANG_ = (function chia$reactive$handle_next_deps_BANG_(reader,next_deps){
if(cljs.core.truth_(reader)){
} else {
throw (new Error("Assert failed: reader"));
}

var prev_deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive.dependencies),reader);
var seq__61093 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(next_deps)),cljs.core.keys(prev_deps)));
var chunk__61094 = null;
var count__61095 = (0);
var i__61096 = (0);
while(true){
if((i__61096 < count__61095)){
var source = chunk__61094.cljs$core$IIndexed$_nth$arity$2(null,i__61096);
var G__61108_61221 = source;
var G__61109_61222 = reader;
var G__61110_61223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__61111_61224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__61108_61221,G__61109_61222,G__61110_61223,G__61111_61224) : chia.reactive.transition_BANG_.call(null,G__61108_61221,G__61109_61222,G__61110_61223,G__61111_61224));


var G__61225 = seq__61093;
var G__61226 = chunk__61094;
var G__61227 = count__61095;
var G__61228 = (i__61096 + (1));
seq__61093 = G__61225;
chunk__61094 = G__61226;
count__61095 = G__61227;
i__61096 = G__61228;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61093);
if(temp__5720__auto__){
var seq__61093__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61093__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61093__$1);
var G__61233 = cljs.core.chunk_rest(seq__61093__$1);
var G__61234 = c__4550__auto__;
var G__61235 = cljs.core.count(c__4550__auto__);
var G__61236 = (0);
seq__61093 = G__61233;
chunk__61094 = G__61234;
count__61095 = G__61235;
i__61096 = G__61236;
continue;
} else {
var source = cljs.core.first(seq__61093__$1);
var G__61113_61237 = source;
var G__61114_61238 = reader;
var G__61115_61239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__61116_61240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__61113_61237,G__61114_61238,G__61115_61239,G__61116_61240) : chia.reactive.transition_BANG_.call(null,G__61113_61237,G__61114_61238,G__61115_61239,G__61116_61240));


var G__61245 = cljs.core.next(seq__61093__$1);
var G__61246 = null;
var G__61247 = (0);
var G__61248 = (0);
seq__61093 = G__61245;
chunk__61094 = G__61246;
count__61095 = G__61247;
i__61096 = G__61248;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
 * @interface
 */
chia.reactive.IInvalidate = function(){};

/**
 * We 'invalidate' a reader whenever one of its dependencies has changed.
 *   Implementors should ensure that a call to `invalidate` will cause the
 *   reader to re-evaluate.
 */
chia.reactive._invalidate_BANG_ = (function chia$reactive$_invalidate_BANG_(reader){
if((((!((reader == null)))) && ((!((reader.chia$reactive$IInvalidate$_invalidate_BANG_$arity$1 == null)))))){
return reader.chia$reactive$IInvalidate$_invalidate_BANG_$arity$1(reader);
} else {
var x__4433__auto__ = (((reader == null))?null:reader);
var m__4434__auto__ = (chia.reactive._invalidate_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(reader) : m__4434__auto__.call(null,reader));
} else {
var m__4431__auto__ = (chia.reactive._invalidate_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(reader) : m__4431__auto__.call(null,reader));
} else {
throw cljs.core.missing_protocol("IInvalidate.-invalidate!",reader);
}
}
}
});

/**
 * Invalidates `reader` (triggers re-evaluation)
 */
chia.reactive.invalidate_BANG_ = (function chia$reactive$invalidate_BANG_(var_args){
var G__61132 = arguments.length;
switch (G__61132) {
case 1:
return chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2(reader,null);
});

chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reader,info){
if(chia.reactive._STAR_silent_STAR_){
return null;
} else {
if((((!((reader == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === reader.chia$reactive$IInvalidate$))))?true:(((!reader.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chia.reactive.IInvalidate,reader):false)):cljs.core.native_satisfies_QMARK_(chia.reactive.IInvalidate,reader))){
return chia.reactive._invalidate_BANG_(reader);
} else {
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(info) : reader.call(null,info));
}
}
});

chia.reactive.invalidate_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Invalidates all readers of `source`
 */
chia.reactive.invalidate_readers_BANG_ = (function chia$reactive$invalidate_readers_BANG_(source){
var seq__61142_61261 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive.dependents),source)));
var chunk__61143_61262 = null;
var count__61144_61263 = (0);
var i__61145_61264 = (0);
while(true){
if((i__61145_61264 < count__61144_61263)){
var reader_61268 = chunk__61143_61262.cljs$core$IIndexed$_nth$arity$2(null,i__61145_61264);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_61268);


var G__61269 = seq__61142_61261;
var G__61270 = chunk__61143_61262;
var G__61271 = count__61144_61263;
var G__61272 = (i__61145_61264 + (1));
seq__61142_61261 = G__61269;
chunk__61143_61262 = G__61270;
count__61144_61263 = G__61271;
i__61145_61264 = G__61272;
continue;
} else {
var temp__5720__auto___61273 = cljs.core.seq(seq__61142_61261);
if(temp__5720__auto___61273){
var seq__61142_61276__$1 = temp__5720__auto___61273;
if(cljs.core.chunked_seq_QMARK_(seq__61142_61276__$1)){
var c__4550__auto___61277 = cljs.core.chunk_first(seq__61142_61276__$1);
var G__61278 = cljs.core.chunk_rest(seq__61142_61276__$1);
var G__61279 = c__4550__auto___61277;
var G__61280 = cljs.core.count(c__4550__auto___61277);
var G__61281 = (0);
seq__61142_61261 = G__61278;
chunk__61143_61262 = G__61279;
count__61144_61263 = G__61280;
i__61145_61264 = G__61281;
continue;
} else {
var reader_61282 = cljs.core.first(seq__61142_61276__$1);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_61282);


var G__61283 = cljs.core.next(seq__61142_61276__$1);
var G__61284 = null;
var G__61285 = (0);
var G__61286 = (0);
seq__61142_61261 = G__61283;
chunk__61143_61262 = G__61284;
count__61144_61263 = G__61285;
i__61145_61264 = G__61286;
continue;
}
} else {
}
}
break;
}

return source;
});

/**
 * @interface
 */
chia.reactive.ITransitionSimple = function(){};

/**
 * Called when `source` is added or removed from the reactive graph.
 */
chia.reactive.on_transition = (function chia$reactive$on_transition(source,observed_QMARK_){
if((((!((source == null)))) && ((!((source.chia$reactive$ITransitionSimple$on_transition$arity$2 == null)))))){
return source.chia$reactive$ITransitionSimple$on_transition$arity$2(source,observed_QMARK_);
} else {
var x__4433__auto__ = (((source == null))?null:source);
var m__4434__auto__ = (chia.reactive.on_transition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(source,observed_QMARK_) : m__4434__auto__.call(null,source,observed_QMARK_));
} else {
var m__4431__auto__ = (chia.reactive.on_transition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(source,observed_QMARK_) : m__4431__auto__.call(null,source,observed_QMARK_));
} else {
throw cljs.core.missing_protocol("ITransitionSimple.on-transition",source);
}
}
}
});


/**
 * Protocol which enables a reactive data source to support pattern-based dependencies.
 * @interface
 */
chia.reactive.ITransitionPattern = function(){};

/**
 * Called when a reader has evaluated, and `source` is in prev- or next-patterns.
 * 
 *  `next-patterns` is the result of successive applications of `observe-pattern!` during a read.
 *  `prev-patterns` is for comparison with the last read.
 */
chia.reactive.on_transition_pattern = (function chia$reactive$on_transition_pattern(source,reader,prev_patterns,next_patterns){
if((((!((source == null)))) && ((!((source.chia$reactive$ITransitionPattern$on_transition_pattern$arity$4 == null)))))){
return source.chia$reactive$ITransitionPattern$on_transition_pattern$arity$4(source,reader,prev_patterns,next_patterns);
} else {
var x__4433__auto__ = (((source == null))?null:source);
var m__4434__auto__ = (chia.reactive.on_transition_pattern[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(source,reader,prev_patterns,next_patterns) : m__4434__auto__.call(null,source,reader,prev_patterns,next_patterns));
} else {
var m__4431__auto__ = (chia.reactive.on_transition_pattern["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(source,reader,prev_patterns,next_patterns) : m__4431__auto__.call(null,source,reader,prev_patterns,next_patterns));
} else {
throw cljs.core.missing_protocol("ITransitionPattern.on-transition-pattern",source);
}
}
}
});

if((typeof chia !== 'undefined') && (typeof chia.reactive !== 'undefined') && (typeof chia.reactive.dependents !== 'undefined')){
} else {
chia.reactive.dependents = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof chia !== 'undefined') && (typeof chia.reactive !== 'undefined') && (typeof chia.reactive.dependencies !== 'undefined')){
} else {
chia.reactive.dependencies = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
chia.reactive.add_dependent = (function chia$reactive$add_dependent(dependents,source,reader,edge_data){
return cljs.core.assoc_in(dependents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,reader], null),edge_data);
});
chia.reactive.remove_dependent = (function chia$reactive$remove_dependent(dependents,source,reader){
if((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dependents,source)) > (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(dependents,source,cljs.core.dissoc,reader);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dependents,source);
}
});
chia.reactive.add_dependency = (function chia$reactive$add_dependency(dependencies,reader,source,edge_data){
return cljs.core.assoc_in(dependencies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reader,source], null),edge_data);
});
chia.reactive.remove_dependency = (function chia$reactive$remove_dependency(dependencies,reader,source){
if((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dependencies,reader)) > (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(dependencies,reader,cljs.core.dissoc,source);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dependencies,reader);
}
});
chia.reactive.add_dependent_BANG_ = (function chia$reactive$add_dependent_BANG_(source,reader,edge_data){
var first_edge_QMARK_ = (!(cljs.core.contains_QMARK_(cljs.core.deref(chia.reactive.dependents),source)));
chia.reactive.dependents.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive.add_dependent(chia.reactive.dependents.cljs$core$IDeref$_deref$arity$1(null),source,reader,edge_data));

chia.reactive.dependencies.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive.add_dependency(chia.reactive.dependencies.cljs$core$IDeref$_deref$arity$1(null),reader,source,edge_data));

return first_edge_QMARK_;
});
chia.reactive.remove_dependent_BANG_ = (function chia$reactive$remove_dependent_BANG_(source,reader){
chia.reactive.dependents.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive.remove_dependent(chia.reactive.dependents.cljs$core$IDeref$_deref$arity$1(null),source,reader));

chia.reactive.dependencies.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive.remove_dependency(chia.reactive.dependencies.cljs$core$IDeref$_deref$arity$1(null),reader,source));

return (!(cljs.core.contains_QMARK_(cljs.core.deref(chia.reactive.dependents),source)));
});
chia.reactive.transition_simple_BANG_ = (function chia$reactive$transition_simple_BANG_(source,reader,prev,next){
if((prev == null)){
var first_dep_QMARK_ = chia.reactive.add_dependent_BANG_(source,reader,new cljs.core.Keyword("chia.reactive","simple","chia.reactive/simple",1822791207));
if(first_dep_QMARK_ === true){
return chia.reactive.on_transition(source,true);
} else {
return null;
}
} else {
if((next == null)){
var last_dep_QMARK_ = chia.reactive.remove_dependent_BANG_(source,reader);
if(last_dep_QMARK_ === true){
return chia.reactive.on_transition(source,false);
} else {
return null;
}
} else {
return null;
}
}
});
chia.reactive.transition_patterns_BANG_ = (function chia$reactive$transition_patterns_BANG_(source,reader,prev,next){
if(cljs.core.empty_QMARK_(next)){
chia.reactive.remove_dependent_BANG_(source,reader);
} else {
chia.reactive.add_dependent_BANG_(source,reader,next);
}

return chia.reactive.on_transition_pattern(source,reader,prev,next);
});
/**
 * Updates watch for a source<>reader combo. Handles effectful updating of `source`.
 */
chia.reactive.transition_BANG_ = (function chia$reactive$transition_BANG_(source,reader,prev_patterns,next_patterns){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,next_patterns)){
if((((prev_patterns instanceof cljs.core.Keyword)) || ((next_patterns instanceof cljs.core.Keyword)))){
return chia.reactive.transition_simple_BANG_(source,reader,prev_patterns,next_patterns);
} else {
return chia.reactive.transition_patterns_BANG_(source,reader,prev_patterns,next_patterns);
}
} else {
return null;
}
});
/**
 * Removes reader from reactive graph.
 */
chia.reactive.dispose_reader_BANG_ = (function chia$reactive$dispose_reader_BANG_(reader){
var seq__61187_61315 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive.dependencies),reader));
var chunk__61188_61316 = null;
var count__61189_61317 = (0);
var i__61190_61318 = (0);
while(true){
if((i__61190_61318 < count__61189_61317)){
var vec__61204_61319 = chunk__61188_61316.cljs$core$IIndexed$_nth$arity$2(null,i__61190_61318);
var source_61320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61204_61319,(0),null);
var patterns_61321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61204_61319,(1),null);
chia.reactive.transition_BANG_(source_61320,reader,patterns_61321,null);


var G__61322 = seq__61187_61315;
var G__61323 = chunk__61188_61316;
var G__61324 = count__61189_61317;
var G__61325 = (i__61190_61318 + (1));
seq__61187_61315 = G__61322;
chunk__61188_61316 = G__61323;
count__61189_61317 = G__61324;
i__61190_61318 = G__61325;
continue;
} else {
var temp__5720__auto___61327 = cljs.core.seq(seq__61187_61315);
if(temp__5720__auto___61327){
var seq__61187_61331__$1 = temp__5720__auto___61327;
if(cljs.core.chunked_seq_QMARK_(seq__61187_61331__$1)){
var c__4550__auto___61332 = cljs.core.chunk_first(seq__61187_61331__$1);
var G__61333 = cljs.core.chunk_rest(seq__61187_61331__$1);
var G__61334 = c__4550__auto___61332;
var G__61335 = cljs.core.count(c__4550__auto___61332);
var G__61336 = (0);
seq__61187_61315 = G__61333;
chunk__61188_61316 = G__61334;
count__61189_61317 = G__61335;
i__61190_61318 = G__61336;
continue;
} else {
var vec__61210_61339 = cljs.core.first(seq__61187_61331__$1);
var source_61340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61210_61339,(0),null);
var patterns_61341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61210_61339,(1),null);
chia.reactive.transition_BANG_(source_61340,reader,patterns_61341,null);


var G__61342 = cljs.core.next(seq__61187_61331__$1);
var G__61343 = null;
var G__61344 = (0);
var G__61345 = (0);
seq__61187_61315 = G__61342;
chunk__61188_61316 = G__61343;
count__61189_61317 = G__61344;
i__61190_61318 = G__61345;
continue;
}
} else {
}
}
break;
}

return reader;
});

//# sourceMappingURL=chia.reactive.js.map
