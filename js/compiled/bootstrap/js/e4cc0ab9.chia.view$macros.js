goog.provide('chia.view$macros');
chia.view$macros.parse_functional_view_args = (function chia$view$macros$parse_functional_view_args(args){
var view_map = cljs.spec.alpha.conform(cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword("view","options","view/options",95987220),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.symbol_QMARK_,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.maybe_impl(cljs.core.string_QMARK_,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.maybe_impl(cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),args);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_map,new cljs.core.Keyword("view","name","view/name",1848834788),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view_map))));
});
var ret__4776__auto___55078 = (function (){
chia.view$macros.defn = (function chia$view$macros$defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55080 = arguments.length;
var i__4731__auto___55082 = (0);
while(true){
if((i__4731__auto___55082 < len__4730__auto___55080)){
args__4736__auto__.push((arguments[i__4731__auto___55082]));

var G__55084 = (i__4731__auto___55082 + (1));
i__4731__auto___55082 = G__55084;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.view$macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.view$macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var map__55018 = chia.view$macros.parse_functional_view_args(args);
var map__55018__$1 = (((((!((map__55018 == null))))?(((((map__55018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55018):map__55018);
var view_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55018__$1,new cljs.core.Keyword("view","name","view/name",1848834788));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55018__$1,new cljs.core.Keyword("view","options","view/options",95987220));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55018__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__55019 = options;
var map__55019__$1 = (((((!((map__55019 == null))))?(((((map__55019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55019):map__55019);
var forward_ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55019__$1,new cljs.core.Keyword("view","forward-ref?","view/forward-ref?",-552082829));
var f_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var keyf_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("key");
var key_fn = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(options);
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,keyf_sym,null,(1),null)),(new cljs.core.List(null,key_fn,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.view","-functional-render","chia.view/-functional-render",-151298305,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("view","name","view/name",1848834788),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_name),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("view","fn","view/fn",-1171578695),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("view","should-update?","view/should-update?",1307710400),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("view","should-update?","view/should-update?",1307710400).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("view","forward-ref?","view/forward-ref?",-552082829),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("view","forward-ref?","view/forward-ref?",-552082829).cljs$core$IFn$_invoke$arity$2(options,false),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("core","defn","core/defn",-139531537,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,args_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"props__55009__auto__","props__55009__auto__",1800945152,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__4131__auto__ = keyf_sym;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return forward_ref_QMARK_;
}
})(),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),null,(1),null)),(cljs.core.truth_(key_fn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,keyf_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args_sym,null,(1),null))], 0))))], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(forward_ref_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ref","ref",1289896967),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,args_sym,null,(1),null))))),null,(1),null)))))], null):null)], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("chia.view","-create-element","chia.view/-create-element",188676135,null),null,(1),null)),(new cljs.core.List(null,f_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"props__55009__auto__","props__55009__auto__",1800945152,null),null,(1),null)),(new cljs.core.List(null,args_sym,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

chia.view$macros.defn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.view$macros.defn.cljs$lang$applyTo = (function (seq55010){
var G__55011 = cljs.core.first(seq55010);
var seq55010__$1 = cljs.core.next(seq55010);
var G__55012 = cljs.core.first(seq55010__$1);
var seq55010__$2 = cljs.core.next(seq55010__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55011,G__55012,seq55010__$2);
});

return null;
})()
;
chia.view$macros.defn.cljs$lang$macro = true;

var ret__4776__auto___55146 = (function (){
/**
 * Define a view function.
 * 
 * Expects optional docstring and methods map, followed by
 *  the argslist and body for the render function, which should
 *  return a Hiccup vector or React element.
 */
chia.view$macros.defclass = (function chia$view$macros$defclass(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55147 = arguments.length;
var i__4731__auto___55148 = (0);
while(true){
if((i__4731__auto___55148 < len__4730__auto___55147)){
args__4736__auto__.push((arguments[i__4731__auto___55148]));

var G__55152 = (i__4731__auto___55148 + (1));
i__4731__auto___55148 = G__55152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.view$macros.defclass.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.view$macros.defclass.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","defclass","chia.view.class/defclass",1112280602,null),null,(1),null)),args)));
});

chia.view$macros.defclass.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.view$macros.defclass.cljs$lang$applyTo = (function (seq55059){
var G__55060 = cljs.core.first(seq55059);
var seq55059__$1 = cljs.core.next(seq55059);
var G__55061 = cljs.core.first(seq55059__$1);
var seq55059__$2 = cljs.core.next(seq55059__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55060,G__55061,seq55059__$2);
});

return null;
})()
;
chia.view$macros.defclass.cljs$lang$macro = true;

