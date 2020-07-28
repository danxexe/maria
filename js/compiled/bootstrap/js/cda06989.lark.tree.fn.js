goog.provide('lark.tree.fn');
/**
 * Construct function form.
 */
lark.tree.fn.construct_fn = (function lark$tree$fn$construct_fn(syms,vararg,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(syms,(cljs.core.truth_(vararg)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
lark.tree.fn.sym_index = (function lark$tree$fn$sym_index(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"&")){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,n))){
return parseInt(n);
} else {
throw (new Error("arg literal must be %, %& or %integer."));

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
lark.tree.fn.symbol__GT_gensym = (function lark$tree$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name(sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nm.indexOf("%"),(0))){
var i = lark.tree.fn.sym_index(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,(1)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(max_n,cljs.core.max,i);

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
lark.tree.fn.fn_walk = (function lark$tree$fn$fn_walk(form){
var syms = (function (){var iter__4523__auto__ = (function lark$tree$fn$fn_walk_$_iter__48263(s__48264){
return (new cljs.core.LazySeq(null,(function (){
var s__48264__$1 = s__48264;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48264__$1);
if(temp__5720__auto__){
var s__48264__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48264__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48264__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48266 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48265 = (0);
while(true){
if((i__48265 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48265);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
cljs.core.chunk_append(b__48266,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')));

var G__48333 = (i__48265 + (1));
i__48265 = G__48333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48266),lark$tree$fn$fn_walk_$_iter__48263(cljs.core.chunk_rest(s__48264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48266),null);
}
} else {
var i = cljs.core.first(s__48264__$2);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')),lark$tree$fn$fn_walk_$_iter__48263(cljs.core.rest(s__48264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$0());
})();
var vararg_QMARK_ = false;
var max_n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var body = clojure.walk.prewalk(((function (syms,vararg_QMARK_,max_n){
return (function (p1__48255_SHARP_){
var or__4131__auto__ = lark.tree.fn.symbol__GT_gensym(syms,vararg_QMARK_,max_n,p1__48255_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p1__48255_SHARP_;
}
});})(syms,vararg_QMARK_,max_n))
,form);
return lark.tree.fn.construct_fn(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(max_n),cljs.core.rest(syms)),null,body);
});
