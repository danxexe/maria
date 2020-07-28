goog.provide('chia.view.class$.view_specs');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cljs.spec.alpha');
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.class$ !== 'undefined') && (typeof chia.view.class$.view_specs !== 'undefined') && (typeof chia.view.class$.view_specs.spec_meta !== 'undefined')){
} else {
chia.view.class$.view_specs.spec_meta = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
chia.view.class$.view_specs.ReactElement_QMARK_ = module$node_modules$react$index.isValidElement;
chia.view.class$.view_specs.Hiccup_QMARK_ = (function chia$view$class$view_specs$Hiccup_QMARK_(p1__65738_SHARP_){
return ((cljs.core.vector_QMARK_(p1__65738_SHARP_)) && ((cljs.core.first(p1__65738_SHARP_) instanceof cljs.core.Keyword)));
});
chia.view.class$.view_specs.SVG_QMARK_ = (function chia$view$class$view_specs$SVG_QMARK_(p1__65739_SHARP_){
return ((chia.view.class$.view_specs.Hiccup_QMARK_(p1__65739_SHARP_)) && (clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__65739_SHARP_)),"svg")));
});
/**
 * Evaluate fns sequentially, stopping if any return true.
 */
chia.view.class$.view_specs.any_pred = (function chia$view$class$view_specs$any_pred(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65756 = arguments.length;
var i__4731__auto___65757 = (0);
while(true){
if((i__4731__auto___65757 < len__4730__auto___65756)){
args__4736__auto__.push((arguments[i__4731__auto___65757]));

var G__65758 = (i__4731__auto___65757 + (1));
i__4731__auto___65757 = G__65758;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return chia.view.class$.view_specs.any_pred.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

chia.view.class$.view_specs.any_pred.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function (this$){
var fns__$1 = fns;
while(true){
if(cljs.core.empty_QMARK_(fns__$1)){
return false;
} else {
var or__4131__auto__ = (function (){var fexpr__65751 = cljs.core.first(fns__$1);
return (fexpr__65751.cljs$core$IFn$_invoke$arity$1 ? fexpr__65751.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__65751.call(null,this$));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__65759 = cljs.core.rest(fns__$1);
fns__$1 = G__65759;
continue;
}
}
break;
}
});
});

chia.view.class$.view_specs.any_pred.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
chia.view.class$.view_specs.any_pred.cljs$lang$applyTo = (function (seq65743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65743));
});

chia.view.class$.view_specs.Element_QMARK_ = chia.view.class$.view_specs.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nil_QMARK_,chia.view.class$.view_specs.ReactElement_QMARK_,chia.view.class$.view_specs.Hiccup_QMARK_,cljs.core.string_QMARK_], 0));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("view","element","view/element",1969250242),new cljs.core.Symbol("chia.view.class.view-specs","Element?","chia.view.class.view-specs/Element?",-96953417,null),chia.view.class$.view_specs.Element_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("view","svg","view/svg",852153627),new cljs.core.Symbol("chia.view.class.view-specs","SVG?","chia.view.class.view-specs/SVG?",603478869,null),chia.view.class$.view_specs.SVG_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("view","hiccup","view/hiccup",1223644647),new cljs.core.Symbol("chia.view.class.view-specs","Hiccup?","chia.view.class.view-specs/Hiccup?",382107057,null),chia.view.class$.view_specs.Hiccup_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("view","react-element","view/react-element",1729520215),new cljs.core.Symbol("chia.view.class.view-specs","ReactElement?","chia.view.class.view-specs/ReactElement?",542704490,null),chia.view.class$.view_specs.ReactElement_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dom","on-click","dom/on-click",1632792045),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dom","on-blur","dom/on-blur",814400397),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dom","on-focus","dom/on-focus",-13634522),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

//# sourceMappingURL=chia.view.class.view_specs.js.map
