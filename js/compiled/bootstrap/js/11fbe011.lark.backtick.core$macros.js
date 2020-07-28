goog.provide('lark.backtick.core$macros');
lark.backtick.core$macros.resolve_sym = (function lark$backtick$core$macros$resolve_sym(sym){
var n = cljs.core.name(sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(n),"#")){
var temp__5718__auto__ = (function (){var fexpr__54752 = cljs.core.deref(lark.backtick.core$macros._STAR_gensyms_STAR_);
return (fexpr__54752.cljs$core$IFn$_invoke$arity$1 ? fexpr__54752.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__54752.call(null,sym));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var gs = temp__5718__auto__;
return gs;
} else {
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),(cljs.core.count(n) - (1)))),"__auto__"].join(''));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lark.backtick.core$macros._STAR_gensyms_STAR_,cljs.core.assoc,sym,gs);

return gs;
}
} else {
return sym;
}
});
lark.backtick.core$macros.unquote_QMARK_ = (function lark$backtick$core$macros$unquote_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null))));
});
lark.backtick.core$macros.unquote_splicing_QMARK_ = (function lark$backtick$core$macros$unquote_splicing_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null))));
});
lark.backtick.core$macros.quote_fn_STAR_ = (function lark$backtick$core$macros$quote_fn_STAR_(form){
if((form instanceof cljs.core.Symbol)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,lark.backtick.core$macros.resolve_sym(form),null,(1),null)))));
} else {
if(lark.backtick.core$macros.unquote_QMARK_(form)){
return cljs.core.second(form);
} else {
if(lark.backtick.core$macros.unquote_splicing_QMARK_(form)){
throw "splice not in list";
} else {
if(cljs.core.record_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
} else {
if(cljs.core.coll_QMARK_(form)){
var xs = ((cljs.core.map_QMARK_(form))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,form):form);
var parts = (function (){var iter__4523__auto__ = ((function (xs){
return (function lark$backtick$core$macros$quote_fn_STAR__$_iter__54776(s__54777){
return (new cljs.core.LazySeq(null,((function (xs){
return (function (){
var s__54777__$1 = s__54777;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54777__$1);
if(temp__5720__auto__){
var s__54777__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54777__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__54777__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__54779 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__54778 = (0);
while(true){
if((i__54778 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__54778);
cljs.core.chunk_append(b__54779,((lark.backtick.core$macros.unquote_splicing_QMARK_(x))?cljs.core.second(x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lark.backtick.core$macros.quote_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? lark.backtick.core$macros.quote_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : lark.backtick.core$macros.quote_fn_STAR_.call(null,x))], null)));

var G__54893 = (i__54778 + (1));
i__54778 = G__54893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54779),lark$backtick$core$macros$quote_fn_STAR__$_iter__54776(cljs.core.chunk_rest(s__54777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54779),null);
}
} else {
var x = cljs.core.first(s__54777__$2);
return cljs.core.cons(((lark.backtick.core$macros.unquote_splicing_QMARK_(x))?cljs.core.second(x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lark.backtick.core$macros.quote_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? lark.backtick.core$macros.quote_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : lark.backtick.core$macros.quote_fn_STAR_.call(null,x))], null)),lark$backtick$core$macros$quote_fn_STAR__$_iter__54776(cljs.core.rest(s__54777__$2)));
}
} else {
return null;
}
break;
}
});})(xs))
,null,null));
});})(xs))
;
return iter__4523__auto__(xs);
})();
var cat = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),parts))));
if(cljs.core.vector_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null),null,(1),null)),(new cljs.core.List(null,cat,null,(1),null)))));
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cat,null,(1),null))], 0))));
} else {
if(cljs.core.set_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),null,(1),null)),(new cljs.core.List(null,cat,null,(1),null)))));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cat,null,(1),null))], 0))));
} else {
throw "Unknown collection type";

}
}
}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));

}
}
}
}
}
});
var ret__4776__auto___54921 = lark.backtick.core$macros.template = (function lark$backtick$core$macros$template(_AMPERSAND_form,_AMPERSAND_env,form){
var _STAR_gensyms_STAR__orig_val__54810 = lark.backtick.core$macros._STAR_gensyms_STAR_;
var _STAR_gensyms_STAR__temp_val__54811 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lark.backtick.core$macros._STAR_gensyms_STAR_ = _STAR_gensyms_STAR__temp_val__54811;

try{return lark.backtick.core$macros.quote_fn_STAR_(form);
}finally {lark.backtick.core$macros._STAR_gensyms_STAR_ = _STAR_gensyms_STAR__orig_val__54810;
}});
lark.backtick.core$macros.template.cljs$lang$macro = true;

