goog.provide('chia.reactive$macros');
goog.require('cljs.core');
goog.require('chia.util.macros');
goog.require('applied_science.js_interop');


/**
 * The reader being evaluated
 */
chia.reactive$macros._STAR_reader_STAR_ = null;
/**
 * Flag to temporarily suspend reactivity
 */
chia.reactive$macros._STAR_silent_STAR_ = false;
/**
 * Keeps track of what data sources a reader accesses during compute
 */
chia.reactive$macros._STAR_reader_dependency_log_STAR_ = null;
chia.reactive$macros.handle_next_deps_BANG_ = (function chia$reactive$macros$handle_next_deps_BANG_(reader,next_deps){
if(cljs.core.truth_(reader)){
} else {
throw (new Error("Assert failed: reader"));
}

var prev_deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive$macros.dependencies),reader);
var seq__70194 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(next_deps)),cljs.core.keys(prev_deps)));
var chunk__70195 = null;
var count__70196 = (0);
var i__70197 = (0);
while(true){
if((i__70197 < count__70196)){
var source = chunk__70195.cljs$core$IIndexed$_nth$arity$2(null,i__70197);
var G__70229_70406 = source;
var G__70230_70407 = reader;
var G__70231_70408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__70232_70409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__70229_70406,G__70230_70407,G__70231_70408,G__70232_70409) : chia.reactive$macros.transition_BANG_.call(null,G__70229_70406,G__70230_70407,G__70231_70408,G__70232_70409));


var G__70413 = seq__70194;
var G__70414 = chunk__70195;
var G__70415 = count__70196;
var G__70416 = (i__70197 + (1));
seq__70194 = G__70413;
chunk__70195 = G__70414;
count__70196 = G__70415;
i__70197 = G__70416;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__70194);
if(temp__5720__auto__){
var seq__70194__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70194__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__70194__$1);
var G__70417 = cljs.core.chunk_rest(seq__70194__$1);
var G__70418 = c__4550__auto__;
var G__70419 = cljs.core.count(c__4550__auto__);
var G__70420 = (0);
seq__70194 = G__70417;
chunk__70195 = G__70418;
count__70196 = G__70419;
i__70197 = G__70420;
continue;
} else {
var source = cljs.core.first(seq__70194__$1);
var G__70233_70421 = source;
var G__70234_70422 = reader;
var G__70235_70423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__70236_70424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__70233_70421,G__70234_70422,G__70235_70423,G__70236_70424) : chia.reactive$macros.transition_BANG_.call(null,G__70233_70421,G__70234_70422,G__70235_70423,G__70236_70424));


var G__70425 = cljs.core.next(seq__70194__$1);
var G__70426 = null;
var G__70427 = (0);
var G__70428 = (0);
seq__70194 = G__70425;
chunk__70195 = G__70426;
count__70196 = G__70427;
i__70197 = G__70428;
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
chia.reactive$macros.IInvalidate = function(){};

/**
 * We 'invalidate' a reader whenever one of its dependencies has changed.
 *   Implementors should ensure that a call to `invalidate` will cause the
 *   reader to re-evaluate.
 */
chia.reactive$macros._invalidate_BANG_ = (function chia$reactive$macros$_invalidate_BANG_(reader){
if((((!((reader == null)))) && ((!((reader.chia$reactive$macros$IInvalidate$_invalidate_BANG_$arity$1 == null)))))){
return reader.chia$reactive$macros$IInvalidate$_invalidate_BANG_$arity$1(reader);
} else {
var x__4433__auto__ = (((reader == null))?null:reader);
var m__4434__auto__ = (chia.reactive$macros._invalidate_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(reader) : m__4434__auto__.call(null,reader));
} else {
var m__4431__auto__ = (chia.reactive$macros._invalidate_BANG_["_"]);
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
chia.reactive$macros.invalidate_BANG_ = (function chia$reactive$macros$invalidate_BANG_(var_args){
var G__70253 = arguments.length;
switch (G__70253) {
case 1:
return chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2(reader,null);
});

chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reader,info){
if(chia.reactive$macros._STAR_silent_STAR_){
return null;
} else {
if((((!((reader == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === reader.chia$reactive$macros$IInvalidate$))))?true:(((!reader.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chia.reactive$macros.IInvalidate,reader):false)):cljs.core.native_satisfies_QMARK_(chia.reactive$macros.IInvalidate,reader))){
return chia.reactive$macros._invalidate_BANG_(reader);
} else {
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(info) : reader.call(null,info));
}
}
});

chia.reactive$macros.invalidate_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Invalidates all readers of `source`
 */
chia.reactive$macros.invalidate_readers_BANG_ = (function chia$reactive$macros$invalidate_readers_BANG_(source){
var seq__70260_70441 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive$macros.dependents),source)));
var chunk__70261_70442 = null;
var count__70262_70443 = (0);
var i__70263_70444 = (0);
while(true){
if((i__70263_70444 < count__70262_70443)){
var reader_70445 = chunk__70261_70442.cljs$core$IIndexed$_nth$arity$2(null,i__70263_70444);
chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_70445);


var G__70446 = seq__70260_70441;
var G__70447 = chunk__70261_70442;
var G__70448 = count__70262_70443;
var G__70449 = (i__70263_70444 + (1));
seq__70260_70441 = G__70446;
chunk__70261_70442 = G__70447;
count__70262_70443 = G__70448;
i__70263_70444 = G__70449;
continue;
} else {
var temp__5720__auto___70450 = cljs.core.seq(seq__70260_70441);
if(temp__5720__auto___70450){
var seq__70260_70451__$1 = temp__5720__auto___70450;
if(cljs.core.chunked_seq_QMARK_(seq__70260_70451__$1)){
var c__4550__auto___70452 = cljs.core.chunk_first(seq__70260_70451__$1);
var G__70453 = cljs.core.chunk_rest(seq__70260_70451__$1);
var G__70454 = c__4550__auto___70452;
var G__70455 = cljs.core.count(c__4550__auto___70452);
var G__70456 = (0);
seq__70260_70441 = G__70453;
chunk__70261_70442 = G__70454;
count__70262_70443 = G__70455;
i__70263_70444 = G__70456;
continue;
} else {
var reader_70457 = cljs.core.first(seq__70260_70451__$1);
chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_70457);


var G__70458 = cljs.core.next(seq__70260_70451__$1);
var G__70459 = null;
var G__70460 = (0);
var G__70461 = (0);
seq__70260_70441 = G__70458;
chunk__70261_70442 = G__70459;
count__70262_70443 = G__70460;
i__70263_70444 = G__70461;
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
chia.reactive$macros.ITransitionSimple = function(){};

/**
 * Called when `source` is added or removed from the reactive graph.
 */
chia.reactive$macros.on_transition = (function chia$reactive$macros$on_transition(source,observed_QMARK_){
if((((!((source == null)))) && ((!((source.chia$reactive$macros$ITransitionSimple$on_transition$arity$2 == null)))))){
return source.chia$reactive$macros$ITransitionSimple$on_transition$arity$2(source,observed_QMARK_);
} else {
var x__4433__auto__ = (((source == null))?null:source);
var m__4434__auto__ = (chia.reactive$macros.on_transition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(source,observed_QMARK_) : m__4434__auto__.call(null,source,observed_QMARK_));
} else {
var m__4431__auto__ = (chia.reactive$macros.on_transition["_"]);
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
chia.reactive$macros.ITransitionPattern = function(){};

/**
 * Called when a reader has evaluated, and `source` is in prev- or next-patterns.
 * 
 *  `next-patterns` is the result of successive applications of `observe-pattern!` during a read.
 *  `prev-patterns` is for comparison with the last read.
 */
chia.reactive$macros.on_transition_pattern = (function chia$reactive$macros$on_transition_pattern(source,reader,prev_patterns,next_patterns){
if((((!((source == null)))) && ((!((source.chia$reactive$macros$ITransitionPattern$on_transition_pattern$arity$4 == null)))))){
return source.chia$reactive$macros$ITransitionPattern$on_transition_pattern$arity$4(source,reader,prev_patterns,next_patterns);
} else {
var x__4433__auto__ = (((source == null))?null:source);
var m__4434__auto__ = (chia.reactive$macros.on_transition_pattern[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(source,reader,prev_patterns,next_patterns) : m__4434__auto__.call(null,source,reader,prev_patterns,next_patterns));
} else {
var m__4431__auto__ = (chia.reactive$macros.on_transition_pattern["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(source,reader,prev_patterns,next_patterns) : m__4431__auto__.call(null,source,reader,prev_patterns,next_patterns));
} else {
throw cljs.core.missing_protocol("ITransitionPattern.on-transition-pattern",source);
}
}
}
});

if((typeof chia !== 'undefined') && (typeof chia.reactive$macros !== 'undefined') && (typeof chia.reactive$macros.dependents !== 'undefined')){
} else {
chia.reactive$macros.dependents = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof chia !== 'undefined') && (typeof chia.reactive$macros !== 'undefined') && (typeof chia.reactive$macros.dependencies !== 'undefined')){
} else {
chia.reactive$macros.dependencies = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
chia.reactive$macros.add_dependent = (function chia$reactive$macros$add_dependent(dependents,source,reader,edge_data){
return cljs.core.assoc_in(dependents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,reader], null),edge_data);
});
chia.reactive$macros.remove_dependent = (function chia$reactive$macros$remove_dependent(dependents,source,reader){
if((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dependents,source)) > (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(dependents,source,cljs.core.dissoc,reader);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dependents,source);
}
});
chia.reactive$macros.add_dependency = (function chia$reactive$macros$add_dependency(dependencies,reader,source,edge_data){
return cljs.core.assoc_in(dependencies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reader,source], null),edge_data);
});
chia.reactive$macros.remove_dependency = (function chia$reactive$macros$remove_dependency(dependencies,reader,source){
if((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dependencies,reader)) > (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(dependencies,reader,cljs.core.dissoc,source);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dependencies,reader);
}
});
chia.reactive$macros.add_dependent_BANG_ = (function chia$reactive$macros$add_dependent_BANG_(source,reader,edge_data){
var first_edge_QMARK_ = (!(cljs.core.contains_QMARK_(cljs.core.deref(chia.reactive$macros.dependents),source)));
chia.reactive$macros.dependents.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive$macros.add_dependent(chia.reactive$macros.dependents.cljs$core$IDeref$_deref$arity$1(null),source,reader,edge_data));

chia.reactive$macros.dependencies.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive$macros.add_dependency(chia.reactive$macros.dependencies.cljs$core$IDeref$_deref$arity$1(null),reader,source,edge_data));

return first_edge_QMARK_;
});
chia.reactive$macros.remove_dependent_BANG_ = (function chia$reactive$macros$remove_dependent_BANG_(source,reader){
chia.reactive$macros.dependents.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive$macros.remove_dependent(chia.reactive$macros.dependents.cljs$core$IDeref$_deref$arity$1(null),source,reader));

chia.reactive$macros.dependencies.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,chia.reactive$macros.remove_dependency(chia.reactive$macros.dependencies.cljs$core$IDeref$_deref$arity$1(null),reader,source));

return (!(cljs.core.contains_QMARK_(cljs.core.deref(chia.reactive$macros.dependents),source)));
});
chia.reactive$macros.transition_simple_BANG_ = (function chia$reactive$macros$transition_simple_BANG_(source,reader,prev,next){
if((prev == null)){
var first_dep_QMARK_ = chia.reactive$macros.add_dependent_BANG_(source,reader,new cljs.core.Keyword("chia.reactive","simple","chia.reactive/simple",1822791207));
if(first_dep_QMARK_ === true){
return chia.reactive$macros.on_transition(source,true);
} else {
return null;
}
} else {
if((next == null)){
var last_dep_QMARK_ = chia.reactive$macros.remove_dependent_BANG_(source,reader);
if(last_dep_QMARK_ === true){
return chia.reactive$macros.on_transition(source,false);
} else {
return null;
}
} else {
return null;
}
}
});
chia.reactive$macros.transition_patterns_BANG_ = (function chia$reactive$macros$transition_patterns_BANG_(source,reader,prev,next){
if(cljs.core.empty_QMARK_(next)){
chia.reactive$macros.remove_dependent_BANG_(source,reader);
} else {
chia.reactive$macros.add_dependent_BANG_(source,reader,next);
}

return chia.reactive$macros.on_transition_pattern(source,reader,prev,next);
});
/**
 * Updates watch for a source<>reader combo. Handles effectful updating of `source`.
 */
chia.reactive$macros.transition_BANG_ = (function chia$reactive$macros$transition_BANG_(source,reader,prev_patterns,next_patterns){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,next_patterns)){
if((((prev_patterns instanceof cljs.core.Keyword)) || ((next_patterns instanceof cljs.core.Keyword)))){
return chia.reactive$macros.transition_simple_BANG_(source,reader,prev_patterns,next_patterns);
} else {
return chia.reactive$macros.transition_patterns_BANG_(source,reader,prev_patterns,next_patterns);
}
} else {
return null;
}
});
/**
 * Removes reader from reactive graph.
 */
chia.reactive$macros.dispose_reader_BANG_ = (function chia$reactive$macros$dispose_reader_BANG_(reader){
var seq__70360_70485 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive$macros.dependencies),reader));
var chunk__70361_70486 = null;
var count__70362_70487 = (0);
var i__70363_70488 = (0);
while(true){
if((i__70363_70488 < count__70362_70487)){
var vec__70383_70494 = chunk__70361_70486.cljs$core$IIndexed$_nth$arity$2(null,i__70363_70488);
var source_70495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70383_70494,(0),null);
var patterns_70496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70383_70494,(1),null);
chia.reactive$macros.transition_BANG_(source_70495,reader,patterns_70496,null);


var G__70497 = seq__70360_70485;
var G__70498 = chunk__70361_70486;
var G__70499 = count__70362_70487;
var G__70500 = (i__70363_70488 + (1));
seq__70360_70485 = G__70497;
chunk__70361_70486 = G__70498;
count__70362_70487 = G__70499;
i__70363_70488 = G__70500;
continue;
} else {
var temp__5720__auto___70502 = cljs.core.seq(seq__70360_70485);
if(temp__5720__auto___70502){
var seq__70360_70508__$1 = temp__5720__auto___70502;
if(cljs.core.chunked_seq_QMARK_(seq__70360_70508__$1)){
var c__4550__auto___70509 = cljs.core.chunk_first(seq__70360_70508__$1);
var G__70511 = cljs.core.chunk_rest(seq__70360_70508__$1);
var G__70512 = c__4550__auto___70509;
var G__70513 = cljs.core.count(c__4550__auto___70509);
var G__70514 = (0);
seq__70360_70485 = G__70511;
chunk__70361_70486 = G__70512;
count__70362_70487 = G__70513;
i__70363_70488 = G__70514;
continue;
} else {
var vec__70386_70515 = cljs.core.first(seq__70360_70508__$1);
var source_70516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70386_70515,(0),null);
var patterns_70517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70386_70515,(1),null);
chia.reactive$macros.transition_BANG_(source_70516,reader,patterns_70517,null);


var G__70518 = cljs.core.next(seq__70360_70508__$1);
var G__70519 = null;
var G__70520 = (0);
var G__70521 = (0);
seq__70360_70485 = G__70518;
chunk__70361_70486 = G__70519;
count__70362_70487 = G__70520;
i__70363_70488 = G__70521;
continue;
}
} else {
}
}
break;
}

return reader;
});

//# sourceMappingURL=chia.reactive$macros.js.map
