goog.provide('maria.repl_specials');
goog.require('cljs.core');
goog.require('lark.eval');
goog.require('maria.views.repl_specials');
goog.require('maria.friendly.kinds');
goog.require('maria.live.ns_utils');
goog.require('clojure.string');
goog.require('maria.editors.code');
goog.require('maria.views.cards');
goog.require('maria.util');
goog.require('chia.view.hiccup');
goog.require('chia.view');
maria.repl_specials.dir = cljs.core.with_meta((function (c_state__41339__auto__,c_env__41340__auto__,source__41341__auto__,p__42342){
var vec__42343 = p__42342;
var seq__42344 = cljs.core.seq(vec__42343);
var first__42345 = cljs.core.first(seq__42344);
var seq__42344__$1 = cljs.core.next(seq__42344);
var _ = first__42345;
var args__41342__auto__ = seq__42344__$1;
var _AMPERSAND_source = source__41341__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__42343,seq__42344,first__42345,seq__42344__$1,_,args__41342__auto__){
return (function (c_state,c_env,ns){
var ns__$1 = (function (){var or__4131__auto__ = ns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env));
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(maria.views.repl_specials.dir.cljs$core$IFn$_invoke$arity$2 ? maria.views.repl_specials.dir.cljs$core$IFn$_invoke$arity$2(c_state,ns__$1) : maria.views.repl_specials.dir.call(null,c_state,ns__$1))], null);
});})(_AMPERSAND_source,vec__42343,seq__42344,first__42345,seq__42344__$1,_,args__41342__auto__))
,c_state__41339__auto__,c_env__41340__auto__,args__41342__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","dir","maria.repl-specials/dir",645478700,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Display public vars in namespace"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"dir","dir",-919681108,null),maria.repl_specials.dir], 0));
maria.repl_specials.what_is = cljs.core.with_meta((function (c_state__41339__auto__,c_env__41340__auto__,source__41341__auto__,p__42346){
var vec__42347 = p__42346;
var seq__42348 = cljs.core.seq(vec__42347);
var first__42349 = cljs.core.first(seq__42348);
var seq__42348__$1 = cljs.core.next(seq__42348);
var _ = first__42349;
var args__41342__auto__ = seq__42348__$1;
var _AMPERSAND_source = source__41341__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__42347,seq__42348,first__42349,seq__42348__$1,_,args__41342__auto__){
return (function (c_state,c_env,thing){
return lark.eval.eval_str.cljs$core$IFn$_invoke$arity$3(c_state,c_env,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("maria.friendly.kinds","what-is","maria.friendly.kinds/what-is",834934555,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_((function (){var and__4120__auto__ = (thing instanceof cljs.core.Symbol);
if(and__4120__auto__){
return (maria.live.ns_utils.special_doc_map.cljs$core$IFn$_invoke$arity$1 ? maria.live.ns_utils.special_doc_map.cljs$core$IFn$_invoke$arity$1(thing) : maria.live.ns_utils.special_doc_map.call(null,thing));
} else {
return and__4120__auto__;
}
})())?new cljs.core.Keyword("maria.kinds","special-form","maria.kinds/special-form",-1211628813):(cljs.core.truth_((function (){var and__4120__auto__ = (thing instanceof cljs.core.Symbol);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,thing));
} else {
return and__4120__auto__;
}
})())?new cljs.core.Keyword("maria.kinds","macro","maria.kinds/macro",1970002427):((cljs.core.contains_QMARK_(lark.eval.repl_specials,thing))?new cljs.core.Keyword("maria.kinds","function","maria.kinds/function",-1978793480):thing
))),null,(1),null)))))));
});})(_AMPERSAND_source,vec__42347,seq__42348,first__42349,seq__42348__$1,_,args__41342__auto__))
,c_state__41339__auto__,c_env__41340__auto__,args__41342__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","what-is","maria.repl-specials/what-is",1835720679,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thing","thing",1911057242,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Defers to maria.messages/what-is; this is only here to handle the edge case of repl-special functions."], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"what-is","what-is",34746727,null),maria.repl_specials.what_is], 0));
maria.repl_specials.doc = cljs.core.with_meta((function (c_state__41339__auto__,c_env__41340__auto__,source__41341__auto__,p__42350){
var vec__42351 = p__42350;
var seq__42352 = cljs.core.seq(vec__42351);
var first__42353 = cljs.core.first(seq__42352);
var seq__42352__$1 = cljs.core.next(seq__42352);
var _ = first__42353;
var args__41342__auto__ = seq__42352__$1;
var _AMPERSAND_source = source__41341__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__42351,seq__42352,first__42353,seq__42352__$1,_,args__41342__auto__){
return (function (c_state,c_env,name){
var temp__5718__auto__ = maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$3(c_state,c_env,name);
if(cljs.core.truth_(temp__5718__auto__)){
var the_var = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__42356 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"standalone?","standalone?",-1772141988),true], null),the_var], 0));
return (maria.views.repl_specials.doc.cljs$core$IFn$_invoke$arity$1 ? maria.views.repl_specials.doc.cljs$core$IFn$_invoke$arity$1(G__42356) : maria.views.repl_specials.doc.call(null,G__42356));
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(new Error((((name instanceof cljs.core.Symbol))?["Could not resolve the symbol `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim_newline((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42366_42420 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42367_42421 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42368_42422 = true;
var _STAR_print_fn_STAR__temp_val__42369_42423 = ((function (_STAR_print_newline_STAR__orig_val__42366_42420,_STAR_print_fn_STAR__orig_val__42367_42421,_STAR_print_newline_STAR__temp_val__42368_42422,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__42351,seq__42352,first__42353,seq__42352__$1,_,args__41342__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__42366_42420,_STAR_print_fn_STAR__orig_val__42367_42421,_STAR_print_newline_STAR__temp_val__42368_42422,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__42351,seq__42352,first__42353,seq__42352__$1,_,args__41342__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42368_42422;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42369_42423;

try{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42367_42421;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42366_42420;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})())),"`. Maybe it has not been defined?"].join(''):["`doc` requires a symbol, but a ",cljs.core.name(maria.friendly.kinds.kind(name))," was passed."].join(''))))], null);
}
});})(_AMPERSAND_source,vec__42351,seq__42352,first__42353,seq__42352__$1,_,args__41342__auto__))
,c_state__41339__auto__,c_env__41340__auto__,args__41342__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","doc","maria.repl-specials/doc",-1099174974,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show documentation for given symbol"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"doc","doc",-741138878,null),maria.repl_specials.doc], 0));
maria.repl_specials.source = cljs.core.with_meta((function (c_state__41339__auto__,c_env__41340__auto__,source__41341__auto__,p__42370){
var vec__42371 = p__42370;
var seq__42372 = cljs.core.seq(vec__42371);
var first__42373 = cljs.core.first(seq__42372);
var seq__42372__$1 = cljs.core.next(seq__42372);
var _ = first__42373;
var args__41342__auto__ = seq__42372__$1;
var _AMPERSAND_source = source__41341__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__42371,seq__42372,first__42373,seq__42372__$1,_,args__41342__auto__){
return (function (c_state,c_env,name){
var temp__5718__auto__ = (function (){var and__4120__auto__ = (name instanceof cljs.core.Symbol);
if(and__4120__auto__){
return maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$3(c_state,c_env,name);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var the_var = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[maria.views.cards.card_classes," ph3"].join('')], null),(maria.views.repl_specials.var_source.cljs$core$IFn$_invoke$arity$1 ? maria.views.repl_specials.var_source.cljs$core$IFn$_invoke$arity$1(the_var) : maria.views.repl_specials.var_source.call(null,the_var))], null))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(new Error(["Could not resolve the symbol `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim_newline((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42381_42425 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42382_42426 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42383_42427 = true;
var _STAR_print_fn_STAR__temp_val__42384_42428 = ((function (_STAR_print_newline_STAR__orig_val__42381_42425,_STAR_print_fn_STAR__orig_val__42382_42426,_STAR_print_newline_STAR__temp_val__42383_42427,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__42371,seq__42372,first__42373,seq__42372__$1,_,args__41342__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__42381_42425,_STAR_print_fn_STAR__orig_val__42382_42426,_STAR_print_newline_STAR__temp_val__42383_42427,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__42371,seq__42372,first__42373,seq__42372__$1,_,args__41342__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42383_42427;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42384_42428;

try{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42382_42426;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42381_42425;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})())),"`"].join('')))], null);
}
});})(_AMPERSAND_source,vec__42371,seq__42372,first__42373,seq__42372__$1,_,args__41342__auto__))
,c_state__41339__auto__,c_env__41340__auto__,args__41342__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","source","maria.repl-specials/source",553866164,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show source code for given symbol"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"source","source",1206599988,null),maria.repl_specials.source], 0));
maria.repl_specials.js_source = cljs.core.with_meta((function (c_state__41339__auto__,c_env__41340__auto__,source__41341__auto__,p__42390){
var vec__42391 = p__42390;
var seq__42392 = cljs.core.seq(vec__42391);
var first__42393 = cljs.core.first(seq__42392);
var seq__42392__$1 = cljs.core.next(seq__42392);
var _ = first__42393;
var args__41342__auto__ = seq__42392__$1;
var _AMPERSAND_source = source__41341__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__42391,seq__42392,first__42393,seq__42392__$1,_,args__41342__auto__){
return (function (c_state,c_env,form){
var map__42394 = lark.eval.compile_str.cljs$core$IFn$_invoke$arity$3(c_state,c_env,_AMPERSAND_source);
var map__42394__$1 = (((((!((map__42394 == null))))?(((((map__42394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42394):map__42394);
var result = map__42394__$1;
var compiled_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"compiled-js","compiled-js",-1400894052));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return result;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),compiled_js], null))], null);
}
});})(_AMPERSAND_source,vec__42391,seq__42392,first__42393,seq__42392__$1,_,args__41342__auto__))
,c_state__41339__auto__,c_env__41340__auto__,args__41342__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","js-source","maria.repl-specials/js-source",728867233,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show compiled javascript for `form`"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"js-source","js-source",-708201951,null),maria.repl_specials.js_source], 0));
maria.repl_specials.inject = cljs.core.with_meta((function (c_state__41339__auto__,c_env__41340__auto__,source__41341__auto__,p__42396){
var vec__42397 = p__42396;
var seq__42398 = cljs.core.seq(vec__42397);
var first__42399 = cljs.core.first(seq__42398);
var seq__42398__$1 = cljs.core.next(seq__42398);
var _ = first__42399;
var args__41342__auto__ = seq__42398__$1;
var _AMPERSAND_source = source__41341__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__42397,seq__42398,first__42399,seq__42398__$1,_,args__41342__auto__){
return (function (c_state,c_env,ns,mappings){
var ns__$1 = maria.live.ns_utils.elide_quote(ns);
var seq__42400 = cljs.core.seq(cljs.core.seq(maria.live.ns_utils.elide_quote(mappings)));
var chunk__42401 = null;
var count__42402 = (0);
var i__42403 = (0);
while(true){
if((i__42403 < count__42402)){
var vec__42414 = chunk__42401.cljs$core$IIndexed$_nth$arity$2(null,i__42403);
var inject_as = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42414,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42414,(1),null);
lark.eval.eval.cljs$core$IFn$_invoke$arity$4(c_state,c_env,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,inject_as,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),inject_as], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,sym)], 0));


var G__42443 = seq__42400;
var G__42444 = chunk__42401;
var G__42445 = count__42402;
var G__42446 = (i__42403 + (1));
seq__42400 = G__42443;
chunk__42401 = G__42444;
count__42402 = G__42445;
i__42403 = G__42446;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42400);
if(temp__5720__auto__){
var seq__42400__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42400__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42400__$1);
var G__42448 = cljs.core.chunk_rest(seq__42400__$1);
var G__42449 = c__4550__auto__;
var G__42450 = cljs.core.count(c__4550__auto__);
var G__42451 = (0);
seq__42400 = G__42448;
chunk__42401 = G__42449;
count__42402 = G__42450;
i__42403 = G__42451;
continue;
} else {
var vec__42417 = cljs.core.first(seq__42400__$1);
var inject_as = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42417,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42417,(1),null);
lark.eval.eval.cljs$core$IFn$_invoke$arity$4(c_state,c_env,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,inject_as,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),inject_as], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,sym)], 0));


var G__42457 = cljs.core.next(seq__42400__$1);
var G__42458 = null;
var G__42459 = (0);
var G__42460 = (0);
seq__42400 = G__42457;
chunk__42401 = G__42458;
count__42402 = G__42459;
i__42403 = G__42460;
continue;
}
} else {
return null;
}
}
break;
}
});})(_AMPERSAND_source,vec__42397,seq__42398,first__42399,seq__42398__$1,_,args__41342__auto__))
,c_state__41339__auto__,c_env__41340__auto__,args__41342__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","inject","maria.repl-specials/inject",385481658,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"mappings","mappings",1895055298,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inject vars into a namespace, preserving all metadata (inc. name)"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"inject","inject",-242104006,null),maria.repl_specials.inject], 0));

//# sourceMappingURL=maria.repl_specials.js.map
