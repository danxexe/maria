goog.provide('lark.eval');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.analyzer');
goog.require('shadow.cljs.bootstrap.browser');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('cljs.env');
goog.require('clojure.set');
goog.require('applied_science.js_interop');
lark.eval._STAR_cljs_warnings_STAR_ = null;
if((typeof lark !== 'undefined') && (typeof lark.eval !== 'undefined') && (typeof lark.eval.c_state !== 'undefined')){
} else {
lark.eval.c_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
if((typeof lark !== 'undefined') && (typeof lark.eval !== 'undefined') && (typeof lark.eval.c_env !== 'undefined')){
} else {
lark.eval.c_env = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("cljs.user")], null));
}
if((typeof lark !== 'undefined') && (typeof lark.eval !== 'undefined') && (typeof lark.eval.repl_specials !== 'undefined')){
} else {
lark.eval.repl_specials = cljs.core.PersistentArrayMap.EMPTY;
}
/**
 * Mutate repl specials available to the eval fns in this namespace.
 */
lark.eval.swap_repl_specials_BANG_ = (function lark$eval$swap_repl_specials_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65484 = arguments.length;
var i__4731__auto___65485 = (0);
while(true){
if((i__4731__auto___65485 < len__4730__auto___65484)){
args__4736__auto__.push((arguments[i__4731__auto___65485]));

var G__65486 = (i__4731__auto___65485 + (1));
i__4731__auto___65485 = G__65486;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return lark.eval.repl_specials = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,lark.eval.repl_specials,args);
});

lark.eval.swap_repl_specials_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lark.eval.swap_repl_specials_BANG_.cljs$lang$applyTo = (function (seq65218){
var G__65219 = cljs.core.first(seq65218);
var seq65218__$1 = cljs.core.next(seq65218);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65219,seq65218__$1);
});

lark.eval.c_opts = (function lark$eval$c_opts(c_state,env){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,c_state),new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(env)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
});
lark.eval.get_ns = (function lark$eval$get_ns(c_state,ns){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
});
lark.eval.toggle_macros_ns = (function lark$eval$toggle_macros_ns(sym){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(((clojure.string.ends_with_QMARK_(s,"$macros"))?clojure.string.replace(s,"$macros",""):[s,"$macros"].join('')));
});
lark.eval.resolve_var = (function lark$eval$resolve_var(var_args){
var G__65238 = arguments.length;
switch (G__65238) {
case 1:
return lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3(lark.eval.c_state,lark.eval.c_env,sym);
});

lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (c_state,c_env,sym){
var _STAR_compiler_STAR__orig_val__65243 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__65244 = c_state;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__65244;

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"ns","ns",441598760),lark.eval.get_ns(c_state,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})())),sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__65243;
}});

lark.eval.resolve_var.cljs$lang$maxFixedArity = 3;

lark.eval.var_value = (function lark$eval$var_value(the_var){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,window,cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_var),/[\.\/]/))));
});
lark.eval.resolve_symbol = (function lark$eval$resolve_symbol(var_args){
var G__65246 = arguments.length;
switch (G__65246) {
case 1:
return lark.eval.resolve_symbol.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return lark.eval.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.eval.resolve_symbol.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return lark.eval.resolve_symbol.cljs$core$IFn$_invoke$arity$3(lark.eval.c_state,lark.eval.c_env,sym);
});

lark.eval.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (c_state,c_env,sym){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,sym));
});

lark.eval.resolve_symbol.cljs$lang$maxFixedArity = 3;


/**
 * Create namespace if it doesn't exist
 */
lark.eval.ensure_ns_BANG_ = (function lark$eval$ensure_ns_BANG_(c_state,c_env,ns){
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)),ns)){
return null;
} else {
var G__65248 = c_state;
var G__65249 = c_env;
var G__65250 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null)))));
return (lark.eval.eval.cljs$core$IFn$_invoke$arity$3 ? lark.eval.eval.cljs$core$IFn$_invoke$arity$3(G__65248,G__65249,G__65250) : lark.eval.eval.call(null,G__65248,G__65249,G__65250));
}
});
lark.eval.__GT_macro_sym = (function lark$eval$__GT_macro_sym(sym){
var ns_QMARK_ = cljs.core.namespace(sym);
var ns = (function (){var or__4131__auto__ = ns_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(sym);
}
})();
var name = (cljs.core.truth_(ns_QMARK_)?cljs.core.name(ns):null);
if(clojure.string.ends_with_QMARK_(ns,"$macros")){
return ns;
} else {
if(cljs.core.truth_(ns_QMARK_)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([ns,"$macros"].join(''),name);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([ns,"$macros"].join(''));
}
}
});
lark.eval.elide_quote = (function lark$eval$elide_quote(x){
var G__65251 = x;
if(((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(x))))){
return cljs.core.second(G__65251);
} else {
return G__65251;
}
});
lark.eval.in_ns = cljs.core.with_meta((function (c_state__65195__auto__,c_env__65196__auto__,source__65197__auto__,p__65252){
var vec__65253 = p__65252;
var seq__65254 = cljs.core.seq(vec__65253);
var first__65255 = cljs.core.first(seq__65254);
var seq__65254__$1 = cljs.core.next(seq__65254);
var _ = first__65255;
var args__65198__auto__ = seq__65254__$1;
var _AMPERSAND_source = source__65197__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__65253,seq__65254,first__65255,seq__65254__$1,_,args__65198__auto__){
return (function (c_state,c_env,namespace){
var namespace__$1 = lark.eval.elide_quote(namespace);
if((namespace__$1 instanceof cljs.core.Symbol)){
} else {
throw (new Error("`in-ns` must be passed a symbol."));
}

if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)),namespace__$1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),namespace__$1], null);
} else {
var G__65256 = c_state;
var G__65257 = c_env;
var G__65258 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,(1),null)),(new cljs.core.List(null,namespace__$1,null,(1),null)))));
return (lark.eval.eval.cljs$core$IFn$_invoke$arity$3 ? lark.eval.eval.cljs$core$IFn$_invoke$arity$3(G__65256,G__65257,G__65258) : lark.eval.eval.call(null,G__65256,G__65257,G__65258));
}
});})(_AMPERSAND_source,vec__65253,seq__65254,first__65255,seq__65254__$1,_,args__65198__auto__))
,c_state__65195__auto__,c_env__65196__auto__,args__65198__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("lark.eval","in-ns","lark.eval/in-ns",-764485206,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"namespace","namespace",1263021155,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Switch to namespace"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),lark.eval.in_ns], 0));
lark.eval.ns = cljs.core.with_meta((function (c_state__65195__auto__,c_env__65196__auto__,source__65197__auto__,p__65259){
var vec__65260 = p__65259;
var seq__65261 = cljs.core.seq(vec__65260);
var first__65262 = cljs.core.first(seq__65261);
var seq__65261__$1 = cljs.core.next(seq__65261);
var _ = first__65262;
var args__65198__auto__ = seq__65261__$1;
var _AMPERSAND_source = source__65197__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__65260,seq__65261,first__65262,seq__65261__$1,_,args__65198__auto__){
return (function() { 
var G__65528__delegate = function (c_state,c_env,body){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__65264 = c_state;
var G__65265 = c_env;
var G__65266 = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"ns","ns",2082130287,null),body),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lark.eval","skip-repl-special","lark.eval/skip-repl-special",1755692242),true], null));
return (lark.eval.eval.cljs$core$IFn$_invoke$arity$3 ? lark.eval.eval.cljs$core$IFn$_invoke$arity$3(G__65264,G__65265,G__65266) : lark.eval.eval.call(null,G__65264,G__65265,G__65266));
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.first(body));
};
var G__65528 = function (c_state,c_env,var_args){
var body = null;
if (arguments.length > 2) {
var G__65529__i = 0, G__65529__a = new Array(arguments.length -  2);
while (G__65529__i < G__65529__a.length) {G__65529__a[G__65529__i] = arguments[G__65529__i + 2]; ++G__65529__i;}
  body = new cljs.core.IndexedSeq(G__65529__a,0,null);
} 
return G__65528__delegate.call(this,c_state,c_env,body);};
G__65528.cljs$lang$maxFixedArity = 2;
G__65528.cljs$lang$applyTo = (function (arglist__65530){
var c_state = cljs.core.first(arglist__65530);
arglist__65530 = cljs.core.next(arglist__65530);
var c_env = cljs.core.first(arglist__65530);
var body = cljs.core.rest(arglist__65530);
return G__65528__delegate(c_state,c_env,body);
});
G__65528.cljs$core$IFn$_invoke$arity$variadic = G__65528__delegate;
return G__65528;
})()
;})(_AMPERSAND_source,vec__65260,seq__65261,first__65262,seq__65261__$1,_,args__65198__auto__))
,c_state__65195__auto__,c_env__65196__auto__,args__65198__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("lark.eval","ns","lark.eval/ns",218129803,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps `ns` to return :ns in result map"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"ns","ns",2082130287,null),lark.eval.ns], 0));
lark.eval.repl_special = (function lark$eval$repl_special(c_state,c_env,body){
var special_sym = cljs.core.first(body);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.eval.repl_specials,special_sym);
var special_source = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(body));
if(cljs.core.truth_(temp__5720__auto__)){
var source = temp__5720__auto__;
var source__$1 = source;
var source__$2 = clojure.string.replace_first(source__$1,cljs.core.re_pattern(["[^]+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(special_sym)].join('')),"");
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(source__$2,(0),(cljs.core.count(source__$2) - (1)));
} else {
return null;
}
})();
try{return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(c_state,c_env,special_source,body) : f.call(null,c_state,c_env,special_source,body));
}catch (e65267){if((e65267 instanceof Error)){
var e = e65267;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["repl-special error",body], 0));

console.error(e);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null);
} else {
throw e65267;

}
}});
/**
 * Position information from the ClojureScript reader is 1-indexed - decrement line and column.
 */
lark.eval.dec_pos = (function lark$eval$dec_pos(p__65268){
var map__65269 = p__65268;
var map__65269__$1 = (((((!((map__65269 == null))))?(((((map__65269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65269):map__65269);
var pos = map__65269__$1;
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pos,new cljs.core.Keyword(null,"line","line",212345235),(line - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095),(column - (1))], 0));
});
lark.eval.relative_pos = (function lark$eval$relative_pos(p__65272,p__65273){
var map__65275 = p__65272;
var map__65275__$1 = (((((!((map__65275 == null))))?(((((map__65275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65275):map__65275);
var target = map__65275__$1;
var target_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"line","line",212345235));
var target_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var map__65276 = p__65273;
var map__65276__$1 = (((((!((map__65276 == null))))?(((((map__65276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65276):map__65276);
var start_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65276__$1,new cljs.core.Keyword(null,"line","line",212345235));
var start_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65276__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(start_line)){
return target;
} else {
var G__65283 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(target,new cljs.core.Keyword(null,"line","line",212345235),cljs.core._PLUS_,start_line);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_line,start_line)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__65283,new cljs.core.Keyword(null,"column","column",2078222095),cljs.core._PLUS_,start_col);
} else {
return G__65283;
}
}
});
/**
 * Collect warnings in a dynamic var
 */
lark.eval.warning_handler = (function lark$eval$warning_handler(form,source,warning_type,env,extra){
if(cljs.core.truth_((cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1(warning_type) : cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type)))){
var G__65289 = lark.eval._STAR_cljs_warnings_STAR_;
if((G__65289 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(G__65289,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),warning_type,new cljs.core.Keyword(null,"warning-position","warning-position",-1838916790),lark.eval.relative_pos(lark.eval.dec_pos(cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null))),(((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IMeta$))))?true:(((!form.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,form):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,form)))?(function (){var G__65293 = cljs.core.meta(form);
if((G__65293 == null)){
return null;
} else {
return lark.eval.dec_pos(G__65293);
}
})():null)),new cljs.core.Keyword(null,"extra","extra",1612569067),extra,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
lark.eval.stack_error_position = (function lark$eval$stack_error_position(error){
var vec__65295 = (function (){var G__65298 = (function (){var obj65299 = error;
var k65300 = "stack";
if((function (){var obj65301 = obj65299;
return (((!((obj65301 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65300,obj65301)));
})()){
return (obj65299[k65300]);
} else {
return undefined;
}
})();
var G__65298__$1 = (((G__65298 == null))?null:cljs.core.re_find(/<anonymous>:(\d+)(?::(\d+))/,G__65298));
var G__65298__$2 = (((G__65298__$1 == null))?null:cljs.core.rest(G__65298__$1));
if((G__65298__$2 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,G__65298__$2);
}
})();
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65295,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65295,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
lark.eval.mapped_cljs_position = (function lark$eval$mapped_cljs_position(p__65304,source_map){
var map__65305 = p__65304;
var map__65305__$1 = (((((!((map__65305 == null))))?(((((map__65305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65305):map__65305);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var temp__5720__auto__ = (function (){try{var G__65310 = goog.crypt.base64.decodeString(source_map);
var G__65310__$1 = (((G__65310 == null))?null:JSON.parse(G__65310));
if((G__65310__$1 == null)){
return null;
} else {
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(G__65310__$1);
}
}catch (e65309){var e = e65309;
return null;
}})();
if(cljs.core.truth_(temp__5720__auto__)){
var source_map__$1 = temp__5720__auto__;
var G__65313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map__$1,(line - (1)));
var G__65313__$1 = (((G__65313 == null))?null:cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(G__65313,cljs.core._LT__EQ_,column));
var G__65313__$2 = (((G__65313__$1 == null))?null:cljs.core.last(G__65313__$1));
var G__65313__$3 = (((G__65313__$2 == null))?null:cljs.core.second(G__65313__$2));
var G__65313__$4 = (((G__65313__$3 == null))?null:cljs.core.last(G__65313__$3));
var G__65313__$5 = (((G__65313__$4 == null))?null:cljs.core.select_keys(G__65313__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084)], null)));
if((G__65313__$5 == null)){
return null;
} else {
return clojure.set.rename_keys(G__65313__$5,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"column","column",2078222095)], null));
}
} else {
return null;
}
});
lark.eval.add_error_position = (function lark$eval$add_error_position(p__65321){
var map__65323 = p__65321;
var map__65323__$1 = (((((!((map__65323 == null))))?(((((map__65323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65323):map__65323);
var result = map__65323__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword("error","position","error/position",840406592));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword("error","kind","error/kind",-1414352259));
var start_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"start-position","start-position",-576733324));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var G__65339 = result;
if(cljs.core.truth_((function (){var and__4120__auto__ = error;
if(cljs.core.truth_(and__4120__auto__)){
return (position == null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65339,new cljs.core.Keyword("error","position","error/position",840406592),(function (){var G__65340 = kind;
var G__65340__$1 = (((G__65340 instanceof cljs.core.Keyword))?G__65340.fqn:null);
switch (G__65340__$1) {
case "compile":
var G__65341 = cljs.core.ex_cause(error);
var G__65341__$1 = (((G__65341 == null))?null:cljs.core.ex_data(G__65341));
var G__65341__$2 = (((G__65341__$1 == null))?null:cljs.core.select_keys(G__65341__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)));
var G__65341__$3 = (((G__65341__$2 == null))?null:lark.eval.dec_pos(G__65341__$2));
if((G__65341__$3 == null)){
return null;
} else {
return lark.eval.relative_pos(G__65341__$3,start_position);
}

break;
case "eval":
var G__65353 = lark.eval.stack_error_position(error);
var G__65353__$1 = (((G__65353 == null))?null:lark.eval.mapped_cljs_position(G__65353,source_map));
if((G__65353__$1 == null)){
return null;
} else {
return lark.eval.relative_pos(G__65353__$1,start_position);
}

break;
default:
return null;

}
})());
} else {
return G__65339;
}
});
if((typeof lark !== 'undefined') && (typeof lark.eval !== 'undefined') && (typeof lark.eval.cljs_cache !== 'undefined')){
} else {
lark.eval.cljs_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
lark.eval.compile_str = (function lark$eval$compile_str(var_args){
var G__65364 = arguments.length;
switch (G__65364) {
case 3:
return lark.eval.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lark.eval.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.eval.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (c_state,c_env,source){
return lark.eval.compile_str.cljs$core$IFn$_invoke$arity$4(c_state,c_env,source,cljs.core.PersistentArrayMap.EMPTY);
});

lark.eval.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (c_state,c_env,source,p__65373){
var map__65378 = p__65373;
var map__65378__$1 = (((((!((map__65378 == null))))?(((((map__65378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65378):map__65378);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65378__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65378__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65378__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var start_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65378__$1,new cljs.core.Keyword(null,"start-position","start-position",-576733324));
var the_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env));
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.eval.c_opts(c_state,c_env),opts], 0));
var file_name__$1 = (function (){var or__4131__auto__ = file_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_ns),".","/")),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("cljs_live_")),((clojure.string.ends_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_ns),"$macros"))?".clj":".cljs")].join('');
}
})();
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_cljs_warning_handlers_STAR__orig_val__65380 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_data_readers_STAR__orig_val__65381 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__65382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lark.eval.warning_handler,form,source)], null);
var _STAR_data_readers_STAR__temp_val__65383 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader._STAR_data_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_], 0));
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__65382;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__65383;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lark.eval.cljs_cache,cljs.core.assoc,file_name__$1,source);

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(c_state,source,file_name__$1,opts__$1,((function (_STAR_cljs_warning_handlers_STAR__orig_val__65380,_STAR_data_readers_STAR__orig_val__65381,_STAR_cljs_warning_handlers_STAR__temp_val__65382,_STAR_data_readers_STAR__temp_val__65383,the_ns,opts__$1,file_name__$1,result,map__65378,map__65378__$1,form,file_name,opts,start_position){
return (function (p__65384){
var map__65385 = p__65384;
var map__65385__$1 = (((((!((map__65385 == null))))?(((((map__65385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65385):map__65385);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65385__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var compiled_js_with_source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65385__$1,new cljs.core.Keyword(null,"value","value",305978217));
var vec__65387 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(compiled_js_with_source_map,/\n\/\/#\ssourceURL[^;]+;base64,/);
var compiled_js = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65387,(0),null);
var source_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65387,(1),null);
return cljs.core.reset_BANG_(result,lark.eval.add_error_position(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(error)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword("error","kind","error/kind",-1414352259),new cljs.core.Keyword(null,"compile","compile",608186429)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compiled-js","compiled-js",-1400894052),compiled_js,new cljs.core.Keyword(null,"source-map","source-map",1706252311),source_map,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.deref(c_env)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"start-position","start-position",-576733324),start_position], null)], 0))));
});})(_STAR_cljs_warning_handlers_STAR__orig_val__65380,_STAR_data_readers_STAR__orig_val__65381,_STAR_cljs_warning_handlers_STAR__temp_val__65382,_STAR_data_readers_STAR__temp_val__65383,the_ns,opts__$1,file_name__$1,result,map__65378,map__65378__$1,form,file_name,opts,start_position))
);

return cljs.core.deref(result);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__65381;

cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__65380;
}});

lark.eval.compile_str.cljs$lang$maxFixedArity = 4;

/**
 * Eval a single form. Arguments:
 * c-state - a cljs compiler state atom
 * c-env   - an atom for tracking the compiler environment;
 *           must contain an :ns key with the current namespace (as a symbol)
 * 
 *   Updates the `c-env` atom if the current namespace changes during eval.
 * 
 *   Eval returns a map containing:
 * 
 *   :value or :error - depending on the result of evaluation
 *   :error/position  - the 0-indexed position of the error, if present
 *   :compiled-js     - the javascript source emitted by the compiler
 *   :source          - the source code string that was evaluated
 *   :source-map      - the base64-encoded source-map string
 *   :env             - the compile environment, a map containing :ns (current namespace)
 */
lark.eval.eval = (function lark$eval$eval(var_args){
var G__65401 = arguments.length;
switch (G__65401) {
case 1:
return lark.eval.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return lark.eval.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lark.eval.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.eval.eval.cljs$core$IFn$_invoke$arity$1 = (function (form){
return lark.eval.eval.cljs$core$IFn$_invoke$arity$3(lark.eval.c_state,lark.eval.c_env,form);
});

lark.eval.eval.cljs$core$IFn$_invoke$arity$3 = (function (c_state,c_env,form){
return lark.eval.eval.cljs$core$IFn$_invoke$arity$4(c_state,c_env,form,cljs.core.PersistentArrayMap.EMPTY);
});

lark.eval.eval.cljs$core$IFn$_invoke$arity$4 = (function (c_state,c_env,form,opts){
var repl_special_QMARK_ = ((cljs.core.seq_QMARK_(form)) && (cljs.core.contains_QMARK_(lark.eval.repl_specials,cljs.core.first(form))) && (cljs.core.not(new cljs.core.Keyword("lark.eval","skip-repl-special","lark.eval/skip-repl-special",1755692242).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)))));
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.eval.c_opts(c_state,c_env),opts], 0));
var start_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts__$1);
var map__65419 = (((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IMeta$))))?true:(((!form.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,form):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,form)))?(function (){var G__65426 = cljs.core.meta(form);
if((G__65426 == null)){
return null;
} else {
return lark.eval.dec_pos(G__65426);
}
})():null);
var map__65419__$1 = (((((!((map__65419 == null))))?(((((map__65419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65419):map__65419);
var start_position = map__65419__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65419__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var map__65420 = ((repl_special_QMARK_)?lark.eval.repl_special(c_state,c_env,form):(function (){var _STAR_cljs_warning_handlers_STAR__orig_val__65428 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_data_readers_STAR__orig_val__65429 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__65430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lark.eval.warning_handler,form,source)], null);
var _STAR_data_readers_STAR__temp_val__65431 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader._STAR_data_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_], 0));
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__65430;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__65431;

try{if(cljs.core.truth_(source)){
var map__65436 = lark.eval.compile_str.cljs$core$IFn$_invoke$arity$4(c_state,c_env,source,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"opts","opts",155075701),opts__$1,new cljs.core.Keyword(null,"start-position","start-position",-576733324),start_position], null));
var map__65436__$1 = (((((!((map__65436 == null))))?(((((map__65436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65436):map__65436);
var result = map__65436__$1;
var compiled_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65436__$1,new cljs.core.Keyword(null,"compiled-js","compiled-js",-1400894052));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65436__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__65439 = result;
if(cljs.core.not(error)){
return lark.eval.add_error_position(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__65439,(function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var _STAR_ns_STAR__orig_val__65442 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__65443 = start_ns;
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__65443;

try{return eval(compiled_js);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__65442;
}})()], null);
}catch (e65441){if((e65441 instanceof Error)){
var e = e65441;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword("error","kind","error/kind",-1414352259),new cljs.core.Keyword(null,"eval","eval",-1103567905)], null);
} else {
throw e65441;

}
}})()], 0)));
} else {
return G__65439;
}
} else {
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(c_state,form,opts__$1,((function (result,_STAR_cljs_warning_handlers_STAR__orig_val__65428,_STAR_data_readers_STAR__orig_val__65429,_STAR_cljs_warning_handlers_STAR__temp_val__65430,_STAR_data_readers_STAR__temp_val__65431,repl_special_QMARK_,opts__$1,start_ns,map__65419,map__65419__$1,start_position,source){
return (function (p1__65392_SHARP_){
return cljs.core.reset_BANG_(result,p1__65392_SHARP_);
});})(result,_STAR_cljs_warning_handlers_STAR__orig_val__65428,_STAR_data_readers_STAR__orig_val__65429,_STAR_cljs_warning_handlers_STAR__temp_val__65430,_STAR_data_readers_STAR__temp_val__65431,repl_special_QMARK_,opts__$1,start_ns,map__65419,map__65419__$1,start_position,source))
);

return cljs.core.deref(result);
}
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__65429;

cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__65428;
}})());
var map__65420__$1 = (((((!((map__65420 == null))))?(((((map__65420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65420):map__65420);
var result = map__65420__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65420__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
if((((!((ns == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(c_env,cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",441598760),ns);
} else {
}

return result;
});

lark.eval.eval.cljs$lang$maxFixedArity = 4;

/**
 * Read string using indexing-push-back-reader, for errors with location information.
 */
lark.eval.read_string_indexed = (function lark$eval$read_string_indexed(s){
if(cljs.core.truth_((function (){var and__4120__auto__ = s;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",s);
} else {
return and__4120__auto__;
}
})())){
var reader = cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(s);
var forms = cljs.core.PersistentVector.EMPTY;
while(true){
var form = cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword("lark.eval","eof","lark.eval/eof",869257431)], null),reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("lark.eval","eof","lark.eval/eof",869257431))){
return forms;
} else {
var G__65593 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(forms,form);
forms = G__65593;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Eval a list of forms. Stops at the first error.
 * 
 *   Returns the result of the last form. A vector of earlier results is returned in
 *   the :intermediate-values key.
 */
lark.eval.eval_forms = (function lark$eval$eval_forms(c_state,c_env,forms,opts){
var _STAR_cljs_warnings_STAR__orig_val__65452 = lark.eval._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__65453 = (function (){var or__4131__auto__ = lark.eval._STAR_cljs_warnings_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
lark.eval._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__65453;

try{var forms__$1 = forms;
var intermediate_values = cljs.core.PersistentVector.EMPTY;
while(true){
var map__65459 = lark.eval.eval.cljs$core$IFn$_invoke$arity$4(c_state,c_env,cljs.core.first(forms__$1),opts);
var map__65459__$1 = (((((!((map__65459 == null))))?(((((map__65459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65459):map__65459);
var result = map__65459__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65459__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var remaining = cljs.core.rest(forms__$1);
if(cljs.core.truth_((function (){var or__4131__auto__ = error;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.empty_QMARK_(remaining);
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"warnings","warnings",-735437651),cljs.core.deref(lark.eval._STAR_cljs_warnings_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intermediate-values","intermediate-values",-1264737075),intermediate_values], 0));
} else {
var G__65600 = remaining;
var G__65601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(intermediate_values,result);
forms__$1 = G__65600;
intermediate_values = G__65601;
continue;
}
break;
}
}finally {lark.eval._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__65452;
}});
/**
 * Read src using indexed reader.
 */
lark.eval.read_src = (function lark$eval$read_src(c_state,c_env,src){
var resolve_symbol_orig_val__65465 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__65466 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__orig_val__65467 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__65468 = cljs.core._STAR_ns_STAR_;
var resolve_symbol_temp_val__65469 = ((function (resolve_symbol_orig_val__65465,_STAR_data_readers_STAR__orig_val__65466,_STAR_alias_map_STAR__orig_val__65467,_STAR_ns_STAR__orig_val__65468){
return (function (p1__65464_SHARP_){
return lark.eval.resolve_symbol.cljs$core$IFn$_invoke$arity$3(c_state,c_env,p1__65464_SHARP_);
});})(resolve_symbol_orig_val__65465,_STAR_data_readers_STAR__orig_val__65466,_STAR_alias_map_STAR__orig_val__65467,_STAR_ns_STAR__orig_val__65468))
;
var _STAR_data_readers_STAR__temp_val__65470 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader._STAR_data_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_], 0));
var _STAR_alias_map_STAR__temp_val__65471 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env)),new cljs.core.Keyword(null,"requires","requires",-1201390927)], null));
var _STAR_ns_STAR__temp_val__65472 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env));
cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__65469;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__65470;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__65471;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__65472;

try{try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lark.eval.read_string_indexed(src)], null);
}catch (e65473){if((e65473 instanceof Error)){
var e = e65473;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword("error","kind","error/kind",-1414352259),new cljs.core.Keyword(null,"reader","reader",169660853)], null);
} else {
throw e65473;

}
}}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__65468;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__65467;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__65466;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__65465;
}});
/**
 * Eval string by first reading all top-level forms, then eval'ing them one at a time.
 *   Stops at the first error.
 */
lark.eval.eval_str = (function lark$eval$eval_str(var_args){
var G__65477 = arguments.length;
switch (G__65477) {
case 1:
return lark.eval.eval_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return lark.eval.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lark.eval.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.eval.eval_str.cljs$core$IFn$_invoke$arity$1 = (function (src){
return lark.eval.eval_str.cljs$core$IFn$_invoke$arity$4(lark.eval.c_state,lark.eval.c_env,src,cljs.core.PersistentArrayMap.EMPTY);
});

lark.eval.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (c_state,c_env,src){
return lark.eval.eval_str.cljs$core$IFn$_invoke$arity$4(c_state,c_env,src,cljs.core.PersistentArrayMap.EMPTY);
});

lark.eval.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (c_state,c_env,src,opts){
var map__65478 = lark.eval.read_src(c_state,c_env,src);
var map__65478__$1 = (((((!((map__65478 == null))))?(((((map__65478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65478):map__65478);
var result = map__65478__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65478__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65478__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(error)?result:lark.eval.eval_forms(c_state,c_env,value,opts)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)], 0));
});

lark.eval.eval_str.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=lark.eval.js.map
