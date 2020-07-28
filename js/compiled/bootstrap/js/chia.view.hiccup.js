goog.provide('chia.view.hiccup');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('applied_science.js_interop');
goog.require('chia.view.hiccup.impl');
goog.require('chia.util.perf');
goog.require('chia.util');
chia.view.hiccup._react_element = module$node_modules$react$index.createElement;
chia.view.hiccup._react_fragment = module$node_modules$react$index.Fragment;
chia.view.hiccup._react_element_QMARK_ = module$node_modules$react$index.isValidElement;

/**
 * @interface
 */
chia.view.hiccup.IElement = function(){};

/**
 * Returns a React element representing `this`
 */
chia.view.hiccup._to_element = (function chia$view$hiccup$_to_element(this$){
if((((!((this$ == null)))) && ((!((this$.chia$view$hiccup$IElement$_to_element$arity$1 == null)))))){
return this$.chia$view$hiccup$IElement$_to_element$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (chia.view.hiccup._to_element[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (chia.view.hiccup._to_element["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-element",this$);
}
}
}
});

if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.hiccup !== 'undefined') && (typeof chia.view.hiccup.sentinel !== 'undefined')){
} else {
chia.view.hiccup.sentinel = ({});
}
/**
 * Returns a React element. `tag` may be a string or a React component (a class or a function).
 * Children will be read from `form` beginning at index `start`.
 */
chia.view.hiccup.make_element = (function chia$view$hiccup$make_element(tag,js_props,form,start){
var form_count = cljs.core.count(form);
var G__57174 = (form_count - start);
switch (G__57174) {
case (0):
return (chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$2 ? chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$2(tag,js_props) : chia.view.hiccup._react_element.call(null,tag,js_props));

break;
case (1):
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,start);
if(cljs.core.seq_QMARK_(first_child)){
var G__57176 = tag;
var G__57177 = js_props;
var G__57178 = cljs.core.vec(first_child);
var G__57179 = (0);
return (chia.view.hiccup.make_element.cljs$core$IFn$_invoke$arity$4 ? chia.view.hiccup.make_element.cljs$core$IFn$_invoke$arity$4(G__57176,G__57177,G__57178,G__57179) : chia.view.hiccup.make_element.call(null,G__57176,G__57177,G__57178,G__57179));
} else {
var G__57180 = tag;
var G__57181 = js_props;
var G__57182 = (chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1(first_child) : chia.view.hiccup.to_element.call(null,first_child));
return (chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$3 ? chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$3(G__57180,G__57181,G__57182) : chia.view.hiccup._react_element.call(null,G__57180,G__57181,G__57182));
}

break;
default:
var out = [tag,js_props];
var i = start;
while(true){
if((i === form_count)){
return chia.view.hiccup._react_element.apply(null,out);
} else {
out.push((function (){var G__57184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,i);
return (chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1(G__57184) : chia.view.hiccup.to_element.call(null,G__57184));
})());

var G__57213 = (i + (1));
i = G__57213;
continue;
}
break;
}

}
});
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.hiccup !== 'undefined') && (typeof chia.view.hiccup.sentinel !== 'undefined')){
} else {
chia.view.hiccup.sentinel = ({});
}
chia.view.hiccup.props_QMARK_ = (function chia$view$hiccup$props_QMARK_(props){
return (!((props === chia.view.hiccup.sentinel)));
});
/**
 * Returns props at index `i` in `form`, or a sentinel value if props were not found.
 * Props can be `nil` or a Clojure map.
 * Call `props?` on the result to determine if props were found.
 * Props can be nil or a Clojure map.
 */
chia.view.hiccup.get_props = (function chia$view$hiccup$get_props(form,i){
var _PERCENT_ = (function (){var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(form,i,chia.view.hiccup.sentinel);
if((props === chia.view.hiccup.sentinel)){
return chia.view.hiccup.sentinel;
} else {
if((((((props == null)) || (cljs.core.map_QMARK_(props)))) && ((!((((!((props == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === props.chia$view$hiccup$IElement$))))?true:(((!props.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,props):false)):cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,props))))))){
return props;
} else {
return chia.view.hiccup.sentinel;
}
}
})();
if(cljs.core.truth_((function (){var or__4131__auto__ = (_PERCENT_ === chia.view.hiccup.sentinel);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__57188 = chia.util.nilable(cljs.core.map_QMARK_);
return (fexpr__57188.cljs$core$IFn$_invoke$arity$1 ? fexpr__57188.cljs$core$IFn$_invoke$arity$1(_PERCENT_) : fexpr__57188.call(null,_PERCENT_));
}
})())){
} else {
throw (new Error("Assert failed: (or (identical? % sentinel) ((u/nilable map?) %))"));
}

return _PERCENT_;
});
chia.view.hiccup.to_element = (function chia$view$hiccup$to_element(form){
var G__57189 = goog.typeOf(form);
switch (G__57189) {
case "array":
if(cljs.core.fn_QMARK_((form[(0)]))){
var props = chia.view.hiccup.get_props(form,(1));
var props_QMARK_ = chia.view.hiccup.props_QMARK_(props);
return chia.view.hiccup.make_element((form[(0)]),((props_QMARK_)?chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$1(props):null),form,((props_QMARK_)?(2):(1)));
} else {
return chia.view.hiccup.make_element(chia.view.hiccup._react_fragment,null,form,(0));
}

break;
case "object":
if((!(("object" === goog.typeOf(form))))){
return form;
} else {
if(cljs.core.vector_QMARK_(form)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(form,(0));
if((tag instanceof cljs.core.Keyword)){
if((((tag instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword(null,"<>","<>",1280186386).fqn === tag.fqn)))){
return chia.view.hiccup.make_element(chia.view.hiccup._react_fragment,null,form,(1));
} else {
var parsed_key = (function (){var G__57190 = cljs.core.name(tag);
return (chia.view.hiccup.impl.parse_key_memo.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.impl.parse_key_memo.cljs$core$IFn$_invoke$arity$1(G__57190) : chia.view.hiccup.impl.parse_key_memo.call(null,G__57190));
})();
var props = chia.view.hiccup.get_props(form,(1));
var props_QMARK_ = chia.view.hiccup.props_QMARK_(props);
return chia.view.hiccup.make_element(parsed_key.tag,chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$2(parsed_key,((props_QMARK_)?props:null)),form,((props_QMARK_)?(2):(1)));
}
} else {
if(cljs.core.fn_QMARK_(tag)){
var G__57191 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.rest(form));
return (chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1(G__57191) : chia.view.hiccup.to_element.call(null,G__57191));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid hiccup vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null));

}
}
} else {
if(cljs.core.seq_QMARK_(form)){
return chia.view.hiccup.make_element(chia.view.hiccup._react_fragment,null,form,(0));
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.chia$view$hiccup$IElement$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,form):false)):cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,form))){
return chia.view.hiccup._to_element(form);
} else {
if((((!((form instanceof cljs.core.Keyword)))) && ((!(cljs.core.map_QMARK_(form)))))){
} else {
throw (new Error("Assert failed: (and (not (keyword? form)) (not (map? form)))"));
}

return form;

}
}
}
}

break;
default:
var G__57193 = form;
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.chia$view$hiccup$IElement$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,form):false)):cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,form))){
return chia.view.hiccup._to_element(G__57193);
} else {
return G__57193;
}

}
});
chia.view.hiccup.update_props = (function chia$view$hiccup$update_props(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57217 = arguments.length;
var i__4731__auto___57218 = (0);
while(true){
if((i__4731__auto___57218 < len__4730__auto___57217)){
args__4736__auto__.push((arguments[i__4731__auto___57218]));

var G__57219 = (i__4731__auto___57218 + (1));
i__4731__auto___57218 = G__57219;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.view.hiccup.update_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.view.hiccup.update_props.cljs$core$IFn$_invoke$arity$variadic = (function (el,f,args){
if(cljs.core.vector_QMARK_(el)){
} else {
throw (new Error("Assert failed: (vector? el)"));
}

var props = chia.view.hiccup.get_props(el,(1));
var props_QMARK_ = chia.view.hiccup.props_QMARK_(props);
if(props_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(el,(1),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,props,args));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(el.cljs$core$IFn$_invoke$arity$1 ? el.cljs$core$IFn$_invoke$arity$1((0)) : el.call(null,(0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args)], null),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(el,(1)));
}
});

chia.view.hiccup.update_props.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chia.view.hiccup.update_props.cljs$lang$applyTo = (function (seq57195){
var G__57196 = cljs.core.first(seq57195);
var seq57195__$1 = cljs.core.next(seq57195);
var G__57197 = cljs.core.first(seq57195__$1);
var seq57195__$2 = cljs.core.next(seq57195__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57196,G__57197,seq57195__$2);
});

/**
 * Converts Hiccup form into a React element. If a non-vector form
 * is supplied, it is returned untouched. Attribute and style keys
 * are converted from `dashed-names` to `camelCase` as spec'd by React.
 * 
 * - optional -
 * :wrap-props (fn) is applied to all props maps during parsing.
 * :create-element (fn) overrides React.createElement.
 */
chia.view.hiccup.element = (function chia$view$hiccup$element(var_args){
var G__57202 = arguments.length;
switch (G__57202) {
case 1:
return chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return chia.view.hiccup.to_element(form);
});

chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$2 = (function (p__57203,form){
var map__57204 = p__57203;
var map__57204__$1 = (((((!((map__57204 == null))))?(((((map__57204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57204):map__57204);
var wrap_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57204__$1,new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308));
var _STAR_wrap_props_STAR__orig_val__57206 = chia.view.hiccup.impl._STAR_wrap_props_STAR_;
var _STAR_wrap_props_STAR__temp_val__57207 = wrap_props;
chia.view.hiccup.impl._STAR_wrap_props_STAR_ = _STAR_wrap_props_STAR__temp_val__57207;

try{return chia.view.hiccup.to_element(form);
}finally {chia.view.hiccup.impl._STAR_wrap_props_STAR_ = _STAR_wrap_props_STAR__orig_val__57206;
}});

chia.view.hiccup.element.cljs$lang$maxFixedArity = 2;

if((typeof Symbol !== 'undefined')){
Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
});
} else {
}

//# sourceMappingURL=chia.view.hiccup.js.map
