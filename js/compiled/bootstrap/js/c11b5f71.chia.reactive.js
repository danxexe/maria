goog.provide('chia.reactive');


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

var prev_deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive.dependencies),reader);
var seq__45145 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(next_deps)),cljs.core.keys(prev_deps)));
var chunk__45146 = null;
var count__45147 = (0);
var i__45148 = (0);
while(true){
if((i__45148 < count__45147)){
var source = chunk__45146.cljs$core$IIndexed$_nth$arity$2(null,i__45148);
var G__45170_45292 = source;
var G__45171_45293 = reader;
var G__45172_45294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__45173_45295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__45170_45292,G__45171_45293,G__45172_45294,G__45173_45295) : chia.reactive.transition_BANG_.call(null,G__45170_45292,G__45171_45293,G__45172_45294,G__45173_45295));


var G__45306 = seq__45145;
var G__45307 = chunk__45146;
var G__45308 = count__45147;
var G__45309 = (i__45148 + (1));
seq__45145 = G__45306;
chunk__45146 = G__45307;
count__45147 = G__45308;
i__45148 = G__45309;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45145);
if(temp__5720__auto__){
var seq__45145__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45145__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45145__$1);
var G__45311 = cljs.core.chunk_rest(seq__45145__$1);
var G__45312 = c__4550__auto__;
var G__45313 = cljs.core.count(c__4550__auto__);
var G__45314 = (0);
seq__45145 = G__45311;
chunk__45146 = G__45312;
count__45147 = G__45313;
i__45148 = G__45314;
continue;
} else {
var source = cljs.core.first(seq__45145__$1);
var G__45179_45315 = source;
var G__45180_45316 = reader;
var G__45181_45317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__45182_45318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__45179_45315,G__45180_45316,G__45181_45317,G__45182_45318) : chia.reactive.transition_BANG_.call(null,G__45179_45315,G__45180_45316,G__45181_45317,G__45182_45318));


var G__45319 = cljs.core.next(seq__45145__$1);
var G__45320 = null;
var G__45321 = (0);
var G__45322 = (0);
seq__45145 = G__45319;
chunk__45146 = G__45320;
count__45147 = G__45321;
i__45148 = G__45322;
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
var G__45198 = arguments.length;
switch (G__45198) {
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
var seq__45214_45326 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive.dependents),source)));
var chunk__45215_45327 = null;
var count__45216_45328 = (0);
var i__45217_45329 = (0);
while(true){
if((i__45217_45329 < count__45216_45328)){
var reader_45331 = chunk__45215_45327.cljs$core$IIndexed$_nth$arity$2(null,i__45217_45329);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_45331);


var G__45333 = seq__45214_45326;
var G__45334 = chunk__45215_45327;
var G__45335 = count__45216_45328;
var G__45336 = (i__45217_45329 + (1));
seq__45214_45326 = G__45333;
chunk__45215_45327 = G__45334;
count__45216_45328 = G__45335;
i__45217_45329 = G__45336;
continue;
} else {
var temp__5720__auto___45338 = cljs.core.seq(seq__45214_45326);
if(temp__5720__auto___45338){
var seq__45214_45342__$1 = temp__5720__auto___45338;
if(cljs.core.chunked_seq_QMARK_(seq__45214_45342__$1)){
var c__4550__auto___45343 = cljs.core.chunk_first(seq__45214_45342__$1);
var G__45344 = cljs.core.chunk_rest(seq__45214_45342__$1);
var G__45345 = c__4550__auto___45343;
var G__45346 = cljs.core.count(c__4550__auto___45343);
var G__45347 = (0);
seq__45214_45326 = G__45344;
chunk__45215_45327 = G__45345;
count__45216_45328 = G__45346;
i__45217_45329 = G__45347;
continue;
} else {
var reader_45348 = cljs.core.first(seq__45214_45342__$1);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_45348);


var G__45349 = cljs.core.next(seq__45214_45342__$1);
var G__45350 = null;
var G__45351 = (0);
var G__45352 = (0);
seq__45214_45326 = G__45349;
chunk__45215_45327 = G__45350;
count__45216_45328 = G__45351;
i__45217_45329 = G__45352;
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
var seq__45263_45385 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive.dependencies),reader));
var chunk__45264_45386 = null;
var count__45265_45387 = (0);
var i__45266_45388 = (0);
while(true){
if((i__45266_45388 < count__45265_45387)){
var vec__45281_45389 = chunk__45264_45386.cljs$core$IIndexed$_nth$arity$2(null,i__45266_45388);
var source_45390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45281_45389,(0),null);
var patterns_45391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45281_45389,(1),null);
chia.reactive.transition_BANG_(source_45390,reader,patterns_45391,null);


var G__45392 = seq__45263_45385;
var G__45393 = chunk__45264_45386;
var G__45394 = count__45265_45387;
var G__45395 = (i__45266_45388 + (1));
seq__45263_45385 = G__45392;
chunk__45264_45386 = G__45393;
count__45265_45387 = G__45394;
i__45266_45388 = G__45395;
continue;
} else {
var temp__5720__auto___45396 = cljs.core.seq(seq__45263_45385);
if(temp__5720__auto___45396){
var seq__45263_45397__$1 = temp__5720__auto___45396;
if(cljs.core.chunked_seq_QMARK_(seq__45263_45397__$1)){
var c__4550__auto___45398 = cljs.core.chunk_first(seq__45263_45397__$1);
var G__45400 = cljs.core.chunk_rest(seq__45263_45397__$1);
var G__45401 = c__4550__auto___45398;
var G__45402 = cljs.core.count(c__4550__auto___45398);
var G__45403 = (0);
seq__45263_45385 = G__45400;
chunk__45264_45386 = G__45401;
count__45265_45387 = G__45402;
i__45266_45388 = G__45403;
continue;
} else {
var vec__45286_45404 = cljs.core.first(seq__45263_45397__$1);
var source_45405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45286_45404,(0),null);
var patterns_45406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45286_45404,(1),null);
chia.reactive.transition_BANG_(source_45405,reader,patterns_45406,null);


var G__45407 = cljs.core.next(seq__45263_45397__$1);
var G__45410 = null;
var G__45411 = (0);
var G__45412 = (0);
seq__45263_45385 = G__45407;
chunk__45264_45386 = G__45410;
count__45265_45387 = G__45411;
i__45266_45388 = G__45412;
continue;
}
} else {
}
}
break;
}

return reader;
});
