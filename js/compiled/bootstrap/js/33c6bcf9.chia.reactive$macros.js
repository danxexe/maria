goog.provide('chia.reactive$macros');


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

var prev_deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive$macros.dependencies),reader);
var seq__54222 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(next_deps)),cljs.core.keys(prev_deps)));
var chunk__54223 = null;
var count__54224 = (0);
var i__54225 = (0);
while(true){
if((i__54225 < count__54224)){
var source = chunk__54223.cljs$core$IIndexed$_nth$arity$2(null,i__54225);
var G__54247_54417 = source;
var G__54248_54418 = reader;
var G__54249_54419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__54250_54420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__54247_54417,G__54248_54418,G__54249_54419,G__54250_54420) : chia.reactive$macros.transition_BANG_.call(null,G__54247_54417,G__54248_54418,G__54249_54419,G__54250_54420));


var G__54421 = seq__54222;
var G__54422 = chunk__54223;
var G__54423 = count__54224;
var G__54424 = (i__54225 + (1));
seq__54222 = G__54421;
chunk__54223 = G__54422;
count__54224 = G__54423;
i__54225 = G__54424;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54222);
if(temp__5720__auto__){
var seq__54222__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54222__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54222__$1);
var G__54425 = cljs.core.chunk_rest(seq__54222__$1);
var G__54426 = c__4550__auto__;
var G__54427 = cljs.core.count(c__4550__auto__);
var G__54428 = (0);
seq__54222 = G__54425;
chunk__54223 = G__54426;
count__54224 = G__54427;
i__54225 = G__54428;
continue;
} else {
var source = cljs.core.first(seq__54222__$1);
var G__54259_54431 = source;
var G__54260_54432 = reader;
var G__54261_54433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_deps,source);
var G__54262_54434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_deps,source);
(chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4 ? chia.reactive$macros.transition_BANG_.cljs$core$IFn$_invoke$arity$4(G__54259_54431,G__54260_54432,G__54261_54433,G__54262_54434) : chia.reactive$macros.transition_BANG_.call(null,G__54259_54431,G__54260_54432,G__54261_54433,G__54262_54434));


var G__54435 = cljs.core.next(seq__54222__$1);
var G__54436 = null;
var G__54437 = (0);
var G__54438 = (0);
seq__54222 = G__54435;
chunk__54223 = G__54436;
count__54224 = G__54437;
i__54225 = G__54438;
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
var G__54280 = arguments.length;
switch (G__54280) {
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
var seq__54290_54464 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive$macros.dependents),source)));
var chunk__54291_54465 = null;
var count__54292_54466 = (0);
var i__54293_54467 = (0);
while(true){
if((i__54293_54467 < count__54292_54466)){
var reader_54474 = chunk__54291_54465.cljs$core$IIndexed$_nth$arity$2(null,i__54293_54467);
chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_54474);


var G__54475 = seq__54290_54464;
var G__54476 = chunk__54291_54465;
var G__54477 = count__54292_54466;
var G__54478 = (i__54293_54467 + (1));
seq__54290_54464 = G__54475;
chunk__54291_54465 = G__54476;
count__54292_54466 = G__54477;
i__54293_54467 = G__54478;
continue;
} else {
var temp__5720__auto___54479 = cljs.core.seq(seq__54290_54464);
if(temp__5720__auto___54479){
var seq__54290_54480__$1 = temp__5720__auto___54479;
if(cljs.core.chunked_seq_QMARK_(seq__54290_54480__$1)){
var c__4550__auto___54481 = cljs.core.chunk_first(seq__54290_54480__$1);
var G__54482 = cljs.core.chunk_rest(seq__54290_54480__$1);
var G__54483 = c__4550__auto___54481;
var G__54484 = cljs.core.count(c__4550__auto___54481);
var G__54485 = (0);
seq__54290_54464 = G__54482;
chunk__54291_54465 = G__54483;
count__54292_54466 = G__54484;
i__54293_54467 = G__54485;
continue;
} else {
var reader_54487 = cljs.core.first(seq__54290_54480__$1);
chia.reactive$macros.invalidate_BANG_.cljs$core$IFn$_invoke$arity$1(reader_54487);


var G__54488 = cljs.core.next(seq__54290_54480__$1);
var G__54489 = null;
var G__54490 = (0);
var G__54491 = (0);
seq__54290_54464 = G__54488;
chunk__54291_54465 = G__54489;
count__54292_54466 = G__54490;
i__54293_54467 = G__54491;
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
var seq__54394_54506 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(chia.reactive$macros.dependencies),reader));
var chunk__54395_54507 = null;
var count__54396_54508 = (0);
var i__54397_54509 = (0);
while(true){
if((i__54397_54509 < count__54396_54508)){
var vec__54404_54511 = chunk__54395_54507.cljs$core$IIndexed$_nth$arity$2(null,i__54397_54509);
var source_54512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54404_54511,(0),null);
var patterns_54513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54404_54511,(1),null);
chia.reactive$macros.transition_BANG_(source_54512,reader,patterns_54513,null);


var G__54520 = seq__54394_54506;
var G__54521 = chunk__54395_54507;
var G__54522 = count__54396_54508;
var G__54523 = (i__54397_54509 + (1));
seq__54394_54506 = G__54520;
chunk__54395_54507 = G__54521;
count__54396_54508 = G__54522;
i__54397_54509 = G__54523;
continue;
} else {
var temp__5720__auto___54528 = cljs.core.seq(seq__54394_54506);
if(temp__5720__auto___54528){
var seq__54394_54532__$1 = temp__5720__auto___54528;
if(cljs.core.chunked_seq_QMARK_(seq__54394_54532__$1)){
var c__4550__auto___54533 = cljs.core.chunk_first(seq__54394_54532__$1);
var G__54534 = cljs.core.chunk_rest(seq__54394_54532__$1);
var G__54535 = c__4550__auto___54533;
var G__54536 = cljs.core.count(c__4550__auto___54533);
var G__54537 = (0);
seq__54394_54506 = G__54534;
chunk__54395_54507 = G__54535;
count__54396_54508 = G__54536;
i__54397_54509 = G__54537;
continue;
} else {
var vec__54407_54538 = cljs.core.first(seq__54394_54532__$1);
var source_54539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54407_54538,(0),null);
var patterns_54540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54407_54538,(1),null);
chia.reactive$macros.transition_BANG_(source_54539,reader,patterns_54540,null);


var G__54543 = cljs.core.next(seq__54394_54532__$1);
var G__54544 = null;
var G__54545 = (0);
var G__54546 = (0);
seq__54394_54506 = G__54543;
chunk__54395_54507 = G__54544;
count__54396_54508 = G__54545;
i__54397_54509 = G__54546;
continue;
}
} else {
}
}
break;
}

return reader;
});
