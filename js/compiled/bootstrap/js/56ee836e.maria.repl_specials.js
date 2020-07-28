goog.provide('maria.repl_specials');
maria.repl_specials.dir = cljs.core.with_meta((function (c_state__29821__auto__,c_env__29822__auto__,source__29823__auto__,p__51589){
var vec__51590 = p__51589;
var seq__51591 = cljs.core.seq(vec__51590);
var first__51592 = cljs.core.first(seq__51591);
var seq__51591__$1 = cljs.core.next(seq__51591);
var _ = first__51592;
var args__29824__auto__ = seq__51591__$1;
var _AMPERSAND_source = source__29823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__51590,seq__51591,first__51592,seq__51591__$1,_,args__29824__auto__){
return (function (c_state,c_env,ns){
var ns__$1 = (function (){var or__4131__auto__ = ns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c_env));
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(maria.views.repl_specials.dir.cljs$core$IFn$_invoke$arity$2 ? maria.views.repl_specials.dir.cljs$core$IFn$_invoke$arity$2(c_state,ns__$1) : maria.views.repl_specials.dir.call(null,c_state,ns__$1))], null);
});})(_AMPERSAND_source,vec__51590,seq__51591,first__51592,seq__51591__$1,_,args__29824__auto__))
,c_state__29821__auto__,c_env__29822__auto__,args__29824__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","dir","maria.repl-specials/dir",645478700,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Display public vars in namespace"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"dir","dir",-919681108,null),maria.repl_specials.dir], 0));
maria.repl_specials.what_is = cljs.core.with_meta((function (c_state__29821__auto__,c_env__29822__auto__,source__29823__auto__,p__51595){
var vec__51596 = p__51595;
var seq__51597 = cljs.core.seq(vec__51596);
var first__51598 = cljs.core.first(seq__51597);
var seq__51597__$1 = cljs.core.next(seq__51597);
var _ = first__51598;
var args__29824__auto__ = seq__51597__$1;
var _AMPERSAND_source = source__29823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__51596,seq__51597,first__51598,seq__51597__$1,_,args__29824__auto__){
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
});})(_AMPERSAND_source,vec__51596,seq__51597,first__51598,seq__51597__$1,_,args__29824__auto__))
,c_state__29821__auto__,c_env__29822__auto__,args__29824__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","what-is","maria.repl-specials/what-is",1835720679,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thing","thing",1911057242,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Defers to maria.messages/what-is; this is only here to handle the edge case of repl-special functions."], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"what-is","what-is",34746727,null),maria.repl_specials.what_is], 0));
maria.repl_specials.doc = cljs.core.with_meta((function (c_state__29821__auto__,c_env__29822__auto__,source__29823__auto__,p__51608){
var vec__51610 = p__51608;
var seq__51611 = cljs.core.seq(vec__51610);
var first__51612 = cljs.core.first(seq__51611);
var seq__51611__$1 = cljs.core.next(seq__51611);
var _ = first__51612;
var args__29824__auto__ = seq__51611__$1;
var _AMPERSAND_source = source__29823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__51610,seq__51611,first__51612,seq__51611__$1,_,args__29824__auto__){
return (function (c_state,c_env,name){
var temp__5718__auto__ = maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$3(c_state,c_env,name);
if(cljs.core.truth_(temp__5718__auto__)){
var the_var = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__51616 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"standalone?","standalone?",-1772141988),true], null),the_var], 0));
return (maria.views.repl_specials.doc.cljs$core$IFn$_invoke$arity$1 ? maria.views.repl_specials.doc.cljs$core$IFn$_invoke$arity$1(G__51616) : maria.views.repl_specials.doc.call(null,G__51616));
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(new Error((((name instanceof cljs.core.Symbol))?["Could not resolve the symbol `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim_newline((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51621_51680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51622_51681 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51623_51682 = true;
var _STAR_print_fn_STAR__temp_val__51624_51683 = ((function (_STAR_print_newline_STAR__orig_val__51621_51680,_STAR_print_fn_STAR__orig_val__51622_51681,_STAR_print_newline_STAR__temp_val__51623_51682,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__51610,seq__51611,first__51612,seq__51611__$1,_,args__29824__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__51621_51680,_STAR_print_fn_STAR__orig_val__51622_51681,_STAR_print_newline_STAR__temp_val__51623_51682,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__51610,seq__51611,first__51612,seq__51611__$1,_,args__29824__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51623_51682;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51624_51683;

try{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51622_51681;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51621_51680;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})())),"`. Maybe it has not been defined?"].join(''):["`doc` requires a symbol, but a ",cljs.core.name(maria.friendly.kinds.kind(name))," was passed."].join(''))))], null);
}
});})(_AMPERSAND_source,vec__51610,seq__51611,first__51612,seq__51611__$1,_,args__29824__auto__))
,c_state__29821__auto__,c_env__29822__auto__,args__29824__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","doc","maria.repl-specials/doc",-1099174974,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show documentation for given symbol"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"doc","doc",-741138878,null),maria.repl_specials.doc], 0));
maria.repl_specials.source = cljs.core.with_meta((function (c_state__29821__auto__,c_env__29822__auto__,source__29823__auto__,p__51625){
var vec__51628 = p__51625;
var seq__51629 = cljs.core.seq(vec__51628);
var first__51630 = cljs.core.first(seq__51629);
var seq__51629__$1 = cljs.core.next(seq__51629);
var _ = first__51630;
var args__29824__auto__ = seq__51629__$1;
var _AMPERSAND_source = source__29823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__51628,seq__51629,first__51630,seq__51629__$1,_,args__29824__auto__){
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
var _STAR_print_newline_STAR__orig_val__51635_51685 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51636_51686 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51637_51687 = true;
var _STAR_print_fn_STAR__temp_val__51638_51688 = ((function (_STAR_print_newline_STAR__orig_val__51635_51685,_STAR_print_fn_STAR__orig_val__51636_51686,_STAR_print_newline_STAR__temp_val__51637_51687,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__51628,seq__51629,first__51630,seq__51629__$1,_,args__29824__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__51635_51685,_STAR_print_fn_STAR__orig_val__51636_51686,_STAR_print_newline_STAR__temp_val__51637_51687,sb__4661__auto__,temp__5718__auto__,_AMPERSAND_source,vec__51628,seq__51629,first__51630,seq__51629__$1,_,args__29824__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51637_51687;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51638_51688;

try{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51636_51686;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51635_51685;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})())),"`"].join('')))], null);
}
});})(_AMPERSAND_source,vec__51628,seq__51629,first__51630,seq__51629__$1,_,args__29824__auto__))
,c_state__29821__auto__,c_env__29822__auto__,args__29824__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","source","maria.repl-specials/source",553866164,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show source code for given symbol"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"source","source",1206599988,null),maria.repl_specials.source], 0));
maria.repl_specials.js_source = cljs.core.with_meta((function (c_state__29821__auto__,c_env__29822__auto__,source__29823__auto__,p__51639){
var vec__51640 = p__51639;
var seq__51641 = cljs.core.seq(vec__51640);
var first__51642 = cljs.core.first(seq__51641);
var seq__51641__$1 = cljs.core.next(seq__51641);
var _ = first__51642;
var args__29824__auto__ = seq__51641__$1;
var _AMPERSAND_source = source__29823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__51640,seq__51641,first__51642,seq__51641__$1,_,args__29824__auto__){
return (function (c_state,c_env,form){
var map__51643 = lark.eval.compile_str.cljs$core$IFn$_invoke$arity$3(c_state,c_env,_AMPERSAND_source);
var map__51643__$1 = (((((!((map__51643 == null))))?(((((map__51643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51643):map__51643);
var result = map__51643__$1;
var compiled_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51643__$1,new cljs.core.Keyword(null,"compiled-js","compiled-js",-1400894052));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51643__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return result;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),compiled_js], null))], null);
}
});})(_AMPERSAND_source,vec__51640,seq__51641,first__51642,seq__51641__$1,_,args__29824__auto__))
,c_state__29821__auto__,c_env__29822__auto__,args__29824__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","js-source","maria.repl-specials/js-source",728867233,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show compiled javascript for `form`"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"js-source","js-source",-708201951,null),maria.repl_specials.js_source], 0));
maria.repl_specials.inject = cljs.core.with_meta((function (c_state__29821__auto__,c_env__29822__auto__,source__29823__auto__,p__51645){
var vec__51646 = p__51645;
var seq__51647 = cljs.core.seq(vec__51646);
var first__51648 = cljs.core.first(seq__51647);
var seq__51647__$1 = cljs.core.next(seq__51647);
var _ = first__51648;
var args__29824__auto__ = seq__51647__$1;
var _AMPERSAND_source = source__29823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(((function (_AMPERSAND_source,vec__51646,seq__51647,first__51648,seq__51647__$1,_,args__29824__auto__){
return (function (c_state,c_env,ns,mappings){
var ns__$1 = maria.live.ns_utils.elide_quote(ns);
var seq__51649 = cljs.core.seq(cljs.core.seq(maria.live.ns_utils.elide_quote(mappings)));
var chunk__51650 = null;
var count__51651 = (0);
var i__51652 = (0);
while(true){
if((i__51652 < count__51651)){
var vec__51663 = chunk__51650.cljs$core$IIndexed$_nth$arity$2(null,i__51652);
var inject_as = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51663,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51663,(1),null);
lark.eval.eval.cljs$core$IFn$_invoke$arity$4(c_state,c_env,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,inject_as,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),inject_as], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,sym)], 0));


var G__51733 = seq__51649;
var G__51734 = chunk__51650;
var G__51735 = count__51651;
var G__51736 = (i__51652 + (1));
seq__51649 = G__51733;
chunk__51650 = G__51734;
count__51651 = G__51735;
i__51652 = G__51736;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51649);
if(temp__5720__auto__){
var seq__51649__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51649__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51649__$1);
var G__51737 = cljs.core.chunk_rest(seq__51649__$1);
var G__51738 = c__4550__auto__;
var G__51739 = cljs.core.count(c__4550__auto__);
var G__51740 = (0);
seq__51649 = G__51737;
chunk__51650 = G__51738;
count__51651 = G__51739;
i__51652 = G__51740;
continue;
} else {
var vec__51666 = cljs.core.first(seq__51649__$1);
var inject_as = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(1),null);
lark.eval.eval.cljs$core$IFn$_invoke$arity$4(c_state,c_env,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,inject_as,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),inject_as], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.eval.resolve_var.cljs$core$IFn$_invoke$arity$3(c_state,c_env,sym)], 0));


var G__51741 = cljs.core.next(seq__51649__$1);
var G__51742 = null;
var G__51743 = (0);
var G__51744 = (0);
seq__51649 = G__51741;
chunk__51650 = G__51742;
count__51651 = G__51743;
i__51652 = G__51744;
continue;
}
} else {
return null;
}
}
break;
}
});})(_AMPERSAND_source,vec__51646,seq__51647,first__51648,seq__51647__$1,_,args__29824__auto__))
,c_state__29821__auto__,c_env__29822__auto__,args__29824__auto__);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("maria.repl-specials","inject","maria.repl-specials/inject",385481658,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"mappings","mappings",1895055298,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inject vars into a namespace, preserving all metadata (inc. name)"], null));

lark.eval.swap_repl_specials_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"inject","inject",-242104006,null),maria.repl_specials.inject], 0));
