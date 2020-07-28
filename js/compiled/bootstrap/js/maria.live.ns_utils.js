goog.provide('maria.live.ns_utils');
goog.require('cljs.core');
goog.require('maria.eval');
goog.require('lark.eval');
goog.require('clojure.string');
goog.require('lark.tree.core');
goog.require('cljs.analyzer');
goog.require('maria.util');
goog.require('cljs.tools.reader.edn');
maria.live.ns_utils.builtin_ns_QMARK_ = (function maria$live$ns_utils$builtin_ns_QMARK_(s){
var and__4120__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"maria.user","maria.user",-1582810998,null));
if(and__4120__auto__){
return cljs.core.re_find(/^(?:chia|maria|cljs|re-db|clojure)/,cljs.core.name(s));
} else {
return and__4120__auto__;
}
});
maria.live.ns_utils.analyzer_ns = (function maria$live$ns_utils$analyzer_ns(c_state,ns){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
});
maria.live.ns_utils.user_namespaces = (function maria$live$ns_utils$user_namespaces(c_state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(maria.live.ns_utils.builtin_ns_QMARK_),cljs.core.keys(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(c_state)));
});
maria.live.ns_utils.add_$macros_suffix = (function maria$live$ns_utils$add_$macros_suffix(sym){
if((!(clojure.string.ends_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"$macros")))){
cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"$macros"].join(''));
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"$macros"].join(''));
});
maria.live.ns_utils.elide_quote = (function maria$live$ns_utils$elide_quote(x){
var G__66399 = x;
if(((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(x))))){
return cljs.core.second(G__66399);
} else {
return G__66399;
}
});
/**
 * Resolve a symbol into fully qualified name. Returns vector of [namespace, name] as symbols.
 */
maria.live.ns_utils.resolve_sym = (function maria$live$ns_utils$resolve_sym(c_state,c_env,sym){
var n = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((maria.eval.resolve_var.cljs$core$IFn$_invoke$arity$3 ? maria.eval.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,sym) : maria.eval.resolve_var.call(null,c_state,c_env,sym)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(n),cljs.core.name(n)], null));
});
maria.live.ns_utils.get_ns = (function maria$live$ns_utils$get_ns(var_args){
var G__66408 = arguments.length;
switch (G__66408) {
case 0:
return maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(maria.eval.c_env)));
});

maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns_name){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(maria.eval.c_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name], null));
});

maria.live.ns_utils.get_ns.cljs$lang$maxFixedArity = 1;

/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
maria.live.ns_utils.resolve_macro_var = (function maria$live$ns_utils$resolve_macro_var(c_state,c_env,sym){
var _STAR_compiler_STAR__orig_val__66416 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__66417 = c_state;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__66417;

try{var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927));
var env = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$0()], null);
if((!((cljs.core.namespace(sym) == null)))){
var ns__$1 = cljs.core.namespace(sym);
var ns__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = maria.live.ns_utils.add_$macros_suffix(cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns__$2));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null));
} else {
if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)) == null)))){
var full_ns = maria.live.ns_utils.add_$macros_suffix(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
} else {
if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null)) == null)))){
var qualified_symbol = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null));
var full_ns = maria.live.ns_utils.add_$macros_suffix(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_symbol)));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
} else {
var ns__$1 = (((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null)) == null))))?ns:((cljs.analyzer.core_name_QMARK_(env,sym))?cljs.analyzer.CLJS_CORE_MACROS_SYM:null));
if((!((ns__$1 == null)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [maria.live.ns_utils.add_$macros_suffix(ns__$1),new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
} else {
return null;
}

}
}
}
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__66416;
}});
/**
 * Simplified resolve-var fn, looks up `def` in compiler state.
 */
maria.live.ns_utils.resolve_var = (function maria$live$ns_utils$resolve_var(var_args){
var G__66438 = arguments.length;
switch (G__66438) {
case 1:
return maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$3(maria.eval.c_state,maria.eval.c_env,sym);
});

maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (c_state,c_env,sym){
var vec__66456 = maria.live.ns_utils.resolve_sym(c_state,c_env,sym);
var namespace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66456,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66456,(1),null);
var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),namespace,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(c_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),maria.live.ns_utils.add_$macros_suffix(namespace),new cljs.core.Keyword(null,"defs","defs",1398449717),name], null));
}
});

maria.live.ns_utils.resolve_var.cljs$lang$maxFixedArity = 3;

maria.live.ns_utils.ns_publics_STAR_ = (function maria$live$ns_utils$ns_publics_STAR_(var_args){
var G__66474 = arguments.length;
switch (G__66474) {
case 2:
return maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (the_ns,only_doc_QMARK_){
return maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$3(the_ns,only_doc_QMARK_,null);
});

maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (the_ns,only_doc_QMARK_,p__66492){
var map__66494 = p__66492;
var map__66494__$1 = (((((!((map__66494 == null))))?(((((map__66494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66494):map__66494);
var include = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66494__$1,new cljs.core.Keyword(null,"include","include",153360230));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__66494,map__66494__$1,include){
return (function (names,p__66516){
var map__66520 = p__66516;
var map__66520__$1 = (((((!((map__66520 == null))))?(((((map__66520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66520):map__66520);
var the_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var anonymous = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66520__$1,new cljs.core.Keyword(null,"anonymous","anonymous",447897231));
var private$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66520__$1,new cljs.core.Keyword(null,"private","private",-558947994));
var G__66523 = names;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(anonymous);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not(private$);
if(and__4120__auto____$1){
var or__4131__auto__ = cljs.core.not(only_doc_QMARK_);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = doc;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var and__4120__auto____$2 = include;
if(cljs.core.truth_(and__4120__auto____$2)){
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(the_name) : include.call(null,the_name));
} else {
return and__4120__auto____$2;
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66523,cljs.core.name(the_name),the_name);
} else {
return G__66523;
}
});})(map__66494,map__66494__$1,include))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(the_ns)),cljs.core.vals(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(the_ns))));
});

maria.live.ns_utils.ns_publics_STAR_.cljs$lang$maxFixedArity = 3;

maria.live.ns_utils.full_name = (function maria$live$ns_utils$full_name(kind,p__66545){
var vec__66548 = p__66545;
var the_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66548,(0),null);
var the_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66548,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_name,the_target)){
return the_target;
} else {
var G__66553 = kind;
var G__66553__$1 = (((G__66553 instanceof cljs.core.Keyword))?G__66553.fqn:null);
switch (G__66553__$1) {
case "uses":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(the_target,the_name);

break;
case "use-macros":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_target),"$macros"].join(''),the_name);

break;
case "requires":
case "require-macros":
case "imports":
return the_target;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66553__$1)].join('')));

}
}
});
maria.live.ns_utils.update_kvs = (function maria$live$ns_utils$update_kvs(m,key_f,val_f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,pair){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(key_f.cljs$core$IFn$_invoke$arity$1 ? key_f.cljs$core$IFn$_invoke$arity$1(pair) : key_f.call(null,pair)),(val_f.cljs$core$IFn$_invoke$arity$1 ? val_f.cljs$core$IFn$_invoke$arity$1(pair) : val_f.call(null,pair)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
maria.live.ns_utils.ns_aliases_STAR_ = (function maria$live$ns_utils$ns_aliases_STAR_(the_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (names,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([names,maria.live.ns_utils.update_kvs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_ns,k),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first),(function (p1__66558_SHARP_){
return maria.live.ns_utils.full_name(k,p1__66558_SHARP_);
}))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692)], null));
});
maria.live.ns_utils.special_doc_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"monitor-exit","monitor-exit",1649308096,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"monitor-enter","monitor-enter",-1460737698,null),new cljs.core.Symbol(null,"def","def",597100991,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"monitor-exit","monitor-exit",1649308096,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Synchronization primitive that should be avoided\n  in user code. Use the 'locking' macro."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"expr*","expr*",1589098295,null),new cljs.core.Symbol(null,"catch-clause*","catch-clause*",-964586959,null),new cljs.core.Symbol(null,"finally-clause?","finally-clause?",1528454240,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"catch-clause => (catch classname name expr*)\n  finally-clause => (finally expr*)\n  Catches and handles Java exceptions."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates the exprs in a lexical context in which the symbols in\nthe binding-forms are bound to their respective init-exprs or parts\ntherein."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sigs","sigs",-12588095,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"params => positional-params* , or positional-params* & next-param\npositional-param => binding-form\nnext-param => binding-form\nname => symbol\n\nDefines a function"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"exprs*","exprs*",-655728998,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates the expressions in order and returns the value of\n  the last. If no expressions are supplied, returns nil."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"then","then",2101129597,null),new cljs.core.Symbol(null,"else?","else?",1919791169,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates test. If not the singular values nil or false,\n  evaluates and yields then, otherwise, evaluates and yields else. If\n  else is not supplied it defaults to nil."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"Classname.","Classname.",-1170153725,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol(null,"Classname","Classname",1253307855,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null))], null),new cljs.core.Keyword(null,"url","url",276297046),"java_interop#new",new cljs.core.Keyword(null,"doc","doc",1913296891),"The args, if any, are evaluated from left to right, and\n  passed to the constructor of the class named by Classname. The\n  constructed object is returned."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"exprs*","exprs*",-655728998,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates the exprs in order, then, in parallel, rebinds\n  the bindings of the recursion point to the values of the exprs.\n  Execution then jumps back to the recursion point, a loop or fn method."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"var-symbol","var-symbol",-1433547785,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"instance-expr","instance-expr",-511471609,null),new cljs.core.Symbol(null,"instanceFieldName-symbol","instanceFieldName-symbol",866178706,null)),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"Classname-symbol","Classname-symbol",1491420615,null),new cljs.core.Symbol(null,"staticFieldName-symbol","staticFieldName-symbol",-789260588,null)),new cljs.core.Symbol(null,"expr","expr",-1908713478,null))], null),new cljs.core.Keyword(null,"url","url",276297046),"vars#set",new cljs.core.Keyword(null,"doc","doc",1913296891),"Used to set thread-local-bound vars, Java object instance\nfields, and Java class static fields."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"java_interop#dot",new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,".instanceMember",".instanceMember",1447027253,null),new cljs.core.Symbol(null,"instance","instance",-480817523,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),cljs.core.list(new cljs.core.Symbol(null,".instanceMember",".instanceMember",1447027253,null),new cljs.core.Symbol(null,"Classname","Classname",1253307855,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),cljs.core.list(new cljs.core.Symbol("Classname","staticMethod","Classname/staticMethod",-1937204914,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),new cljs.core.Symbol("Classname","staticField","Classname/staticField",-2052303436,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The instance member form works for both fields and methods.\n  They all expand into calls to the dot operator at macroexpansion time."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The symbol must resolve to a var, and the Var object\nitself (not its value) is returned. The reader macro #'x expands to (var x)."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"form","form",16469056,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Yields the unevaluated form."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The expr is evaluated and thrown, therefore it should\n  yield an instance of some derivee of Throwable."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"monitor-enter","monitor-enter",-1460737698,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Synchronization primitive that should be avoided\n  in user code. Use the 'locking' macro."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Symbol(null,"doc-string?","doc-string?",393166599,null),new cljs.core.Symbol(null,"init?","init?",2078713026,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and interns a global var with the name\n  of symbol in the current namespace (*ns*) or locates such a var if\n  it already exists.  If init is supplied, it is evaluated, and the\n  root binding of the var is set to the resulting value.  If init is\n  not supplied, the root binding of the var is unaffected."], null)]);
maria.live.ns_utils.special_doc = (function maria$live$ns_utils$special_doc(name_symbol){
var G__66566 = (maria.live.ns_utils.special_doc_map.cljs$core$IFn$_invoke$arity$1 ? maria.live.ns_utils.special_doc_map.cljs$core$IFn$_invoke$arity$1(name_symbol) : maria.live.ns_utils.special_doc_map.call(null,name_symbol));
if((G__66566 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__66566,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(name_symbol)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"special-form","special-form",-1326536374),true], 0));
}
});
maria.live.ns_utils.resolve_var_or_special = (function maria$live$ns_utils$resolve_var_or_special(var_args){
var G__66568 = arguments.length;
switch (G__66568) {
case 1:
return maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$1 = (function (name){
return maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$3(maria.eval.c_state,maria.eval.c_env,name);
});

maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$3 = (function (c_state,c_env,name){
if((name instanceof cljs.core.Symbol)){
var or__4131__auto__ = maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.eval.repl_specials,name);
if(cljs.core.truth_(temp__5720__auto__)){
var repl_special = temp__5720__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(repl_special),maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(repl_special)))], 0));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = maria.live.ns_utils.resolve_macro_var(c_state,c_env,name);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return maria.live.ns_utils.special_doc(name);
}
}
}
} else {
return null;
}
});

maria.live.ns_utils.resolve_var_or_special.cljs$lang$maxFixedArity = 3;

maria.live.ns_utils.core_publics = cljs.core.memoize((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$3(maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)),true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","munge","cljs.core/munge",232476539,null),"null"], null), null)], null)),maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$3(maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null)),true,cljs.core.PersistentHashSet.EMPTY)], 0));
}));
maria.live.ns_utils.ana_env = (function maria$live$ns_utils$ana_env(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(maria.eval.c_state),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2(maria.eval.c_state,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(maria.eval.c_env))));
});
maria.live.ns_utils.completion_data = (function maria$live$ns_utils$completion_data(node){
var temp__5720__auto__ = (function (){var G__66579 = node;
if((G__66579 == null)){
return null;
} else {
return G__66579.value;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var value = temp__5720__auto__;
try{var val = cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(value);
if((val instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(val),cljs.core.name(val)], null);
} else {
return null;
}
}catch (e66580){if((e66580 instanceof Error)){
var e = e66580;
if(clojure.string.ends_with_QMARK_(value,"/")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(value.length - (1))),""], null);
} else {
return null;
}
} else {
throw e66580;

}
}} else {
return null;
}
});
maria.live.ns_utils.ns_completions = (function maria$live$ns_utils$ns_completions(var_args){
var G__66589 = arguments.length;
switch (G__66589) {
case 1:
return maria.live.ns_utils.ns_completions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return maria.live.ns_utils.ns_completions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.live.ns_utils.ns_completions.cljs$core$IFn$_invoke$arity$1 = (function (completion_data){
return maria.live.ns_utils.ns_completions.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(maria.eval.c_env)),completion_data);
});

maria.live.ns_utils.ns_completions.cljs$core$IFn$_invoke$arity$2 = (function (ns_name,p__66593){
var vec__66594 = p__66593;
var the_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66594,(0),null);
var the_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66594,(1),null);
var resolved_ns = (function (){var G__66600 = (function (){var or__4131__auto__ = the_ns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return the_name;
}
})();
var G__66600__$1 = (((G__66600 == null))?null:cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2(maria.live.ns_utils.ana_env(),G__66600));
if((G__66600__$1 == null)){
return null;
} else {
return maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1(G__66600__$1);
}
})();
var printable_ns = (function (){var or__4131__auto__ = the_ns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(resolved_ns)){
return the_name;
} else {
return null;
}
}
})();
var the_name__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = resolved_ns;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(the_ns);
} else {
return and__4120__auto__;
}
})())?"":the_name);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (resolved_ns,printable_ns,the_name__$1,vec__66594,the_ns,the_name){
return (function maria$live$ns_utils$iter__66605(s__66606){
return (new cljs.core.LazySeq(null,((function (resolved_ns,printable_ns,the_name__$1,vec__66594,the_ns,the_name){
return (function (){
var s__66606__$1 = s__66606;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__66606__$1);
if(temp__5720__auto__){
var s__66606__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66606__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__66606__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__66608 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__66607 = (0);
while(true){
if((i__66607 < size__4522__auto__)){
var vec__66612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__66607);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66612,(0),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66612,(1),null);
if(((clojure.string.starts_with_QMARK_(alias,the_name__$1)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(alias,the_name__$1)))){
var completion = (function (){var G__66618 = alias;
if(cljs.core.truth_(printable_ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(printable_ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66618)].join('');
} else {
return G__66618;
}
})();
cljs.core.chunk_append(b__66608,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,completion,full_name], null));

var G__66708 = (i__66607 + (1));
i__66607 = G__66708;
continue;
} else {
var G__66710 = (i__66607 + (1));
i__66607 = G__66710;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66608),maria$live$ns_utils$iter__66605(cljs.core.chunk_rest(s__66606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66608),null);
}
} else {
var vec__66619 = cljs.core.first(s__66606__$2);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66619,(0),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66619,(1),null);
if(((clojure.string.starts_with_QMARK_(alias,the_name__$1)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(alias,the_name__$1)))){
var completion = (function (){var G__66622 = alias;
if(cljs.core.truth_(printable_ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(printable_ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66622)].join('');
} else {
return G__66622;
}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,completion,full_name], null),maria$live$ns_utils$iter__66605(cljs.core.rest(s__66606__$2)));
} else {
var G__66712 = cljs.core.rest(s__66606__$2);
s__66606__$1 = G__66712;
continue;
}
}
} else {
return null;
}
break;
}
});})(resolved_ns,printable_ns,the_name__$1,vec__66594,the_ns,the_name))
,null,null));
});})(resolved_ns,printable_ns,the_name__$1,vec__66594,the_ns,the_name))
;
return iter__4523__auto__((cljs.core.truth_((function (){var or__4131__auto__ = the_ns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return resolved_ns;
}
})())?(function (){var G__66626 = resolved_ns;
if((G__66626 == null)){
return null;
} else {
return maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$2(G__66626,false);
}
})():cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maria.live.ns_utils.ns_aliases_STAR_(maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1(ns_name)),maria.live.ns_utils.ns_publics_STAR_.cljs$core$IFn$_invoke$arity$2(maria.live.ns_utils.get_ns.cljs$core$IFn$_invoke$arity$1(ns_name),false),(maria.live.ns_utils.core_publics.cljs$core$IFn$_invoke$arity$0 ? maria.live.ns_utils.core_publics.cljs$core$IFn$_invoke$arity$0() : maria.live.ns_utils.core_publics.call(null))], 0))));
})());
});

maria.live.ns_utils.ns_completions.cljs$lang$maxFixedArity = 2;

maria.live.ns_utils.cd_encode = (function maria$live$ns_utils$cd_encode(s){
if(cljs.core.truth_(s)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",s)){
return "_.";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",s)){
return "_..";
} else {
return clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/\//,"_fs"),/\\/,"_bs"),/\?/,"_q");

}
}
} else {
return null;
}
});

//# sourceMappingURL=maria.live.ns_utils.js.map
