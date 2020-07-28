goog.provide('chia.view.class$macros');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('chia.view.class$.util');
goog.require('chia.util');
var ret__4776__auto___71294 = chia.view.class$macros.apply_fn = (function chia$view$class$macros$apply_fn(_AMPERSAND_form,_AMPERSAND_env,f,this$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"children__70960__auto__","children__70960__auto__",982356549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","-state","chia.view.class/-state",-1546504439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","-children","chia.view.class/-children",1417117359,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","to-array","cljs.core/to-array",-1520976800,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"children__70960__auto__","children__70960__auto__",982356549,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))], 0)))),null,(1),null))], 0))));
});
chia.view.class$macros.apply_fn.cljs$lang$macro = true;

/**
 * Generate a meaningful name to identify React components while debugging
 */
chia.view.class$macros.get_display_name = (function chia$view$class$macros$get_display_name(ns,given_name){
var segments = cljs.core.take_last((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.ns_name(ns)),/\./)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",segments)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = given_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("view");
}
})())].join('');
});
/**
 * Wrap body in anonymous function form.
 */
chia.view.class$macros.wrap_render_body = (function chia$view$class$macros$wrap_render_body(name,argv,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,argv,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.view.props","to-element","chia.view.props/to-element",-1416809237,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
});
chia.view.class$macros.make_constructor = (function chia$view$class$macros$make_constructor(the_name,initial_state){
var this_name = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var fn_name = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(the_name);
var props_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("props");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,props_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("core","this-as","core/this-as",-843609657,null),null,(1),null)),(new cljs.core.List(null,this_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","Component","chia.view.class/Component",-293183919,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,this_name,null,(1),null)),(new cljs.core.List(null,props_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","assoc!","applied-science.js-interop/assoc!",-359513083,null),null,(1),null)),(new cljs.core.List(null,this_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,".-state",".-state",2145135971,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"js-obj","js-obj",342383250,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(initial_state)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","populate-initial-state!","chia.view.class/populate-initial-state!",-883092337,null),null,(1),null)),(new cljs.core.List(null,this_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,props_sym,null,(1),null)),(new cljs.core.List(null,initial_state,null,(1),null))], 0)))):null),null,(1),null)),(new cljs.core.List(null,this_name,null,(1),null))], 0)))),null,(1),null))], 0))));
});
chia.view.class$macros.__GT_js_with_camelCase = (function chia$view$class$macros$__GT_js_with_camelCase(renamable_QMARK_,m){
var m__$1 = chia.util.update_keys(m,cljs.core.comp.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(renamable_QMARK_)?(function (s){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
}):cljs.core.keyword),chia.util.camel_case,cljs.core.name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),null,(1),null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m__$1))));
});
chia.view.class$macros.bind_vals = (function chia$view$class$macros$bind_vals(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"v__71017__auto__","v__71017__auto__",1166241488,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__71017__auto__","v__71017__auto__",1166241488,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71018__auto__","args__71018__auto__",1191285333,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__71019__auto__","this__71019__auto__",-982638496,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__71017__auto__","v__71017__auto__",1166241488,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__71019__auto__","this__71019__auto__",-982638496,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71018__auto__","args__71018__auto__",1191285333,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__71017__auto__","v__71017__auto__",1166241488,null),null,(1),null))], 0)))),null,(1),null))], 0)))));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
chia.view.class$macros.__deprecated_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),null,new cljs.core.Keyword("view","will-update","view/will-update",323358447),null,new cljs.core.Keyword("view","will-mount","view/will-mount",-435076322),null], null), null);
/**
 * Groups methods by role in a React component.
 */
chia.view.class$macros.group_methods = (function chia$view$class$macros$group_methods(methods$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.truth_((chia.view.class$macros.__deprecated_keys.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$macros.__deprecated_keys.cljs$core$IFn$_invoke$arity$1(k) : chia.view.class$macros.__deprecated_keys.call(null,k)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Deprecated lifecycle key",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
} else {
}

var vec__71040 = (function (){var G__71043 = cljs.core.namespace(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("static",G__71043)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-keys","static-keys",-2004424157),v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("spec",G__71043)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec-keys","spec-keys",1734931817),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","goog.DEBUG","js/goog.DEBUG",728057879,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("view",G__71043)){
if(cljs.core.truth_((chia.view.class$.util.lifecycle_keys.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.util.lifecycle_keys.cljs$core$IFn$_invoke$arity$1(k) : chia.view.class$.util.lifecycle_keys.call(null,k)))){
} else {
throw (new Error(["Assert failed: ",["Unknown chia/view key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),"\n","(class-util/lifecycle-keys k)"].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__71043)){
var G__71052 = cljs.core.name(k);
switch (G__71052) {
case "key":
case "doc":
case "display-name":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),v], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),v], null);

}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualified-keys","qualified-keys",775933400),v], null);

}
}
}
}
})();
var group_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71040,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71040,(1),null);
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_k,k], null),v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,methods$),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.view.class$macros.__GT_js_with_camelCase,false)),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.view.class$macros.__GT_js_with_camelCase,true),chia.view.class$macros.bind_vals));
});
chia.view.class$macros.parse_class_args = (function chia$view$class$macros$parse_class_args(args){
var view_map = cljs.spec.alpha.conform(cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword("view","options","view/options",95987220),new cljs.core.Keyword("view","arglist","view/arglist",-1795151019),new cljs.core.Keyword("view","body","view/body",-2045450856)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.symbol_QMARK_,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.maybe_impl(cljs.core.string_QMARK_,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.maybe_impl(cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.vector_QMARK_,cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),args);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_map,new cljs.core.Keyword("view","name","view/name",1848834788),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view_map))));
});
chia.view.class$macros.make_class = (function chia$view$class$macros$make_class(p__71076){
var map__71077 = p__71076;
var map__71077__$1 = (((((!((map__71077 == null))))?(((((map__71077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71077):map__71077);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71077__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71077__$1,new cljs.core.Keyword("view","options","view/options",95987220));
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71077__$1,new cljs.core.Keyword("view","arglist","view/arglist",-1795151019));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71077__$1,new cljs.core.Keyword("view","body","view/body",-2045450856));
var display_name = chia.view.class$macros.get_display_name(cljs.core._STAR_ns_STAR_,name);
var methods$ = chia.view.class$macros.group_methods(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227)),(function (){var G__71079 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),display_name,new cljs.core.Keyword("view","render","view/render",-1412767573),chia.view.class$macros.wrap_render_body(name,arglist,body)], null);
if(cljs.core.truth_(doc)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71079,new cljs.core.Keyword(null,"doc","doc",1913296891),doc);
} else {
return G__71079;
}
})()], 0)));
var constructor$ = chia.view.class$macros.make_constructor(name,new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227).cljs$core$IFn$_invoke$arity$1(options));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","view*","chia.view.class/view*",543036088,null),null,(1),null)),(new cljs.core.List(null,methods$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,constructor$,null,(1),null))], 0))));
});
var ret__4776__auto___71384 = (function (){
chia.view.class$macros.view = (function chia$view$class$macros$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71385 = arguments.length;
var i__4731__auto___71389 = (0);
while(true){
if((i__4731__auto___71389 < len__4730__auto___71385)){
args__4736__auto__.push((arguments[i__4731__auto___71389]));

var G__71390 = (i__4731__auto___71389 + (1));
i__4731__auto___71389 = G__71390;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.view.class$macros.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.view.class$macros.view.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return chia.view.class$macros.make_class(chia.view.class$macros.parse_class_args(args));
});

chia.view.class$macros.view.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.view.class$macros.view.cljs$lang$applyTo = (function (seq71098){
var G__71099 = cljs.core.first(seq71098);
var seq71098__$1 = cljs.core.next(seq71098);
var G__71100 = cljs.core.first(seq71098__$1);
var seq71098__$2 = cljs.core.next(seq71098__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71099,G__71100,seq71098__$2);
});

return null;
})()
;
chia.view.class$macros.view.cljs$lang$macro = true;

var ret__4776__auto___71395 = (function (){
/**
 * Define a view function.
 * 
 * Expects optional docstring and methods map, followed by
 *  the argslist and body for the render function, which should
 *  return a Hiccup vector or React element.
 */
chia.view.class$macros.defclass = (function chia$view$class$macros$defclass(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71397 = arguments.length;
var i__4731__auto___71399 = (0);
while(true){
if((i__4731__auto___71399 < len__4730__auto___71397)){
args__4736__auto__.push((arguments[i__4731__auto___71399]));

var G__71400 = (i__4731__auto___71399 + (1));
i__4731__auto___71399 = G__71400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.view.class$macros.defclass.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.view.class$macros.defclass.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var map__71117 = chia.view.class$macros.parse_class_args(args);
var map__71117__$1 = (((((!((map__71117 == null))))?(((((map__71117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71117):map__71117);
var view_map = map__71117__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var name__$1 = cljs.core.with_meta(name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(name),cljs.core.select_keys(view_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword("view","arglist","view/arglist",-1795151019),new cljs.core.Keyword("view","name","view/name",1848834788)], null))], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,chia.view.class$macros.make_class(view_map),null,(1),null))], 0))));
});

chia.view.class$macros.defclass.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.view.class$macros.defclass.cljs$lang$applyTo = (function (seq71107){
var G__71108 = cljs.core.first(seq71107);
var seq71107__$1 = cljs.core.next(seq71107);
var G__71109 = cljs.core.first(seq71107__$1);
var seq71107__$2 = cljs.core.next(seq71107__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71108,G__71109,seq71107__$2);
});

return null;
})()
;
chia.view.class$macros.defclass.cljs$lang$macro = true;

var ret__4776__auto___71405 = (function (){
chia.view.class$macros.extend_view = (function chia$view$class$macros$extend_view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71406 = arguments.length;
var i__4731__auto___71407 = (0);
while(true){
if((i__4731__auto___71407 < len__4730__auto___71406)){
args__4736__auto__.push((arguments[i__4731__auto___71407]));

var G__71409 = (i__4731__auto___71407 + (1));
i__4731__auto___71407 = G__71409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return chia.view.class$macros.extend_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

chia.view.class$macros.extend_view.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,view,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",-1135358948,null),null,(1),null)),(new cljs.core.List(null,view,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"chia$constructor",null,(1),null)),(new cljs.core.List(null,"prototype",null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
});

chia.view.class$macros.extend_view.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chia.view.class$macros.extend_view.cljs$lang$applyTo = (function (seq71122){
var G__71123 = cljs.core.first(seq71122);
var seq71122__$1 = cljs.core.next(seq71122);
var G__71124 = cljs.core.first(seq71122__$1);
var seq71122__$2 = cljs.core.next(seq71122__$1);
var G__71125 = cljs.core.first(seq71122__$2);
var seq71122__$3 = cljs.core.next(seq71122__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71123,G__71124,G__71125,seq71122__$3);
});

return null;
})()
;
chia.view.class$macros.extend_view.cljs$lang$macro = true;

var ret__4776__auto___71414 = (function (){
/**
 * Evaluates `body` once per component mount or, if :key is provided, once per unique key (per component mount).
 * 
 *   :on-unmount - will be called with [component, value] when component unmounts.
 */
chia.view.class$macros.once = (function chia$view$class$macros$once(var_args){
var G__71158 = arguments.length;
switch (G__71158) {
case 3:
return chia.view.class$macros.once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chia.view.class$macros.once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

chia.view.class$macros.once.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","once","chia.view.class/once",69469884,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body,null,(1),null))], 0))));
});

chia.view.class$macros.once.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,p__71163,body){
var map__71164 = p__71163;
var map__71164__$1 = (((((!((map__71164 == null))))?(((((map__71164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71164):map__71164);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71164__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var on_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71164__$1,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269));
var gname = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("once"));
var js_get = new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null);
var js_assoc_BANG_ = new cljs.core.Symbol("applied-science.js-interop","assoc!","applied-science.js-interop/assoc!",-359513083,null);
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("this");
var key_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("key");
var val_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("val");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,key_sym,null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(key)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,gname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"/",null,(1),null)),(new cljs.core.List(null,key,null,(1),null))], 0)))):gname),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("chia.reactive","*reader*","chia.reactive/*reader*",-142327810,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,js_get,null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,key_sym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,val_sym,null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,js_assoc_BANG_,null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,key_sym,null,(1),null)),(new cljs.core.List(null,val_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(on_unmount)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("chia.view","on-unmount!","chia.view/on-unmount!",-362911859,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,key_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__71155__auto__","this__71155__auto__",54628682,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,on_unmount,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__71155__auto__","this__71155__auto__",54628682,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val_sym,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))):null),null,(1),null)),(new cljs.core.List(null,val_sym,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

chia.view.class$macros.once.cljs$lang$maxFixedArity = 4;

return null;
})()
;
chia.view.class$macros.once.cljs$lang$macro = true;

var ret__4776__auto___71457 = (function (){
chia.view.class$macros.defspec = (function chia$view$class$macros$defspec(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71458 = arguments.length;
var i__4731__auto___71459 = (0);
while(true){
if((i__4731__auto___71459 < len__4730__auto___71458)){
args__4736__auto__.push((arguments[i__4731__auto___71459]));

var G__71460 = (i__4731__auto___71459 + (1));
i__4731__auto___71459 = G__71460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return chia.view.class$macros.defspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

chia.view.class$macros.defspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kw,doc,args){
var vec__71224 = ((typeof doc === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(doc,args)], null));
var doc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71224,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71224,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","goog.DEBUG","js/goog.DEBUG",728057879,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("chia.view.class.view-specs","spec-meta","chia.view.class.view-specs/spec-meta",137869918,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,kw,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,(1),null)),(new cljs.core.List(null,doc__$1,null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.spec.alpha","def","clojure.spec.alpha/def",-1972414870,null),null,(1),null)),(new cljs.core.List(null,kw,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args__$1], 0)))),null,(1),null))], 0))));
});

chia.view.class$macros.defspec.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
chia.view.class$macros.defspec.cljs$lang$applyTo = (function (seq71218){
var G__71219 = cljs.core.first(seq71218);
var seq71218__$1 = cljs.core.next(seq71218);
var G__71220 = cljs.core.first(seq71218__$1);
var seq71218__$2 = cljs.core.next(seq71218__$1);
var G__71221 = cljs.core.first(seq71218__$2);
var seq71218__$3 = cljs.core.next(seq71218__$2);
var G__71222 = cljs.core.first(seq71218__$3);
var seq71218__$4 = cljs.core.next(seq71218__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71219,G__71220,G__71221,G__71222,seq71218__$4);
});

return null;
})()
;
chia.view.class$macros.defspec.cljs$lang$macro = true;

var ret__4776__auto___71475 = (function (){
chia.view.class$macros.consume = (function chia$view$class$macros$consume(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71477 = arguments.length;
var i__4731__auto___71478 = (0);
while(true){
if((i__4731__auto___71478 < len__4730__auto___71477)){
args__4736__auto__.push((arguments[i__4731__auto___71478]));

var G__71479 = (i__4731__auto___71478 + (1));
i__4731__auto___71478 = G__71479;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return chia.view.class$macros.consume.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

chia.view.class$macros.consume.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindings__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var out = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
while(true){
var temp__5718__auto__ = cljs.core.first(bindings__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__71278 = temp__5718__auto__;
var ctx_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71278,(0),null);
var ctx_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71278,(1),null);
var G__71481 = cljs.core.rest(bindings__$1);
var G__71482 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("chia.view.class","consume*","chia.view.class/consume*",-1979695890,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("chia.view.impl","lookup-context","chia.view.impl/lookup-context",602540637,null),null,(1),null)),(new cljs.core.List(null,ctx_k,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,ctx_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,out,null,(1),null))], 0)))),null,(1),null))], 0))));
bindings__$1 = G__71481;
out = G__71482;
continue;
} else {
return out;
}
break;
}
});

chia.view.class$macros.consume.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chia.view.class$macros.consume.cljs$lang$applyTo = (function (seq71262){
var G__71263 = cljs.core.first(seq71262);
var seq71262__$1 = cljs.core.next(seq71262);
var G__71264 = cljs.core.first(seq71262__$1);
var seq71262__$2 = cljs.core.next(seq71262__$1);
var G__71265 = cljs.core.first(seq71262__$2);
var seq71262__$3 = cljs.core.next(seq71262__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71263,G__71264,G__71265,seq71262__$3);
});

return null;
})()
;
chia.view.class$macros.consume.cljs$lang$macro = true;


//# sourceMappingURL=chia.view.class$macros.js.map
