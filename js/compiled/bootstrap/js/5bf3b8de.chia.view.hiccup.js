goog.provide('chia.view.hiccup');
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
var G__41384 = (form_count - start);
switch (G__41384) {
case (0):
return (chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$2 ? chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$2(tag,js_props) : chia.view.hiccup._react_element.call(null,tag,js_props));

break;
case (1):
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,start);
if(cljs.core.seq_QMARK_(first_child)){
var G__41385 = tag;
var G__41386 = js_props;
var G__41387 = cljs.core.vec(first_child);
var G__41388 = (0);
return (chia.view.hiccup.make_element.cljs$core$IFn$_invoke$arity$4 ? chia.view.hiccup.make_element.cljs$core$IFn$_invoke$arity$4(G__41385,G__41386,G__41387,G__41388) : chia.view.hiccup.make_element.call(null,G__41385,G__41386,G__41387,G__41388));
} else {
var G__41389 = tag;
var G__41390 = js_props;
var G__41391 = (chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1(first_child) : chia.view.hiccup.to_element.call(null,first_child));
return (chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$3 ? chia.view.hiccup._react_element.cljs$core$IFn$_invoke$arity$3(G__41389,G__41390,G__41391) : chia.view.hiccup._react_element.call(null,G__41389,G__41390,G__41391));
}

break;
default:
var out = [tag,js_props];
var i = start;
while(true){
if((i === form_count)){
return chia.view.hiccup._react_element.apply(null,out);
} else {
out.push((function (){var G__41392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,i);
return (chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1(G__41392) : chia.view.hiccup.to_element.call(null,G__41392));
})());

var G__41424 = (i + (1));
i = G__41424;
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

return _PERCENT_;
});
chia.view.hiccup.to_element = (function chia$view$hiccup$to_element(form){
var G__41398 = goog.typeOf(form);
switch (G__41398) {
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
var parsed_key = (function (){var G__41399 = cljs.core.name(tag);
return (chia.view.hiccup.impl.parse_key_memo.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.impl.parse_key_memo.cljs$core$IFn$_invoke$arity$1(G__41399) : chia.view.hiccup.impl.parse_key_memo.call(null,G__41399));
})();
var props = chia.view.hiccup.get_props(form,(1));
var props_QMARK_ = chia.view.hiccup.props_QMARK_(props);
return chia.view.hiccup.make_element(parsed_key.tag,chia.view.hiccup.impl.props__GT_js.cljs$core$IFn$_invoke$arity$2(parsed_key,((props_QMARK_)?props:null)),form,((props_QMARK_)?(2):(1)));
}
} else {
if(cljs.core.fn_QMARK_(tag)){
var G__41400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.rest(form));
return (chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1 ? chia.view.hiccup.to_element.cljs$core$IFn$_invoke$arity$1(G__41400) : chia.view.hiccup.to_element.call(null,G__41400));
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

return form;

}
}
}
}

break;
default:
var G__41402 = form;
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.chia$view$hiccup$IElement$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,form):false)):cljs.core.native_satisfies_QMARK_(chia.view.hiccup.IElement,form))){
return chia.view.hiccup._to_element(G__41402);
} else {
return G__41402;
}

}
});
chia.view.hiccup.update_props = (function chia$view$hiccup$update_props(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41426 = arguments.length;
var i__4731__auto___41427 = (0);
while(true){
if((i__4731__auto___41427 < len__4730__auto___41426)){
args__4736__auto__.push((arguments[i__4731__auto___41427]));

var G__41428 = (i__4731__auto___41427 + (1));
i__4731__auto___41427 = G__41428;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chia.view.hiccup.update_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chia.view.hiccup.update_props.cljs$core$IFn$_invoke$arity$variadic = (function (el,f,args){

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
chia.view.hiccup.update_props.cljs$lang$applyTo = (function (seq41404){
var G__41405 = cljs.core.first(seq41404);
var seq41404__$1 = cljs.core.next(seq41404);
var G__41406 = cljs.core.first(seq41404__$1);
var seq41404__$2 = cljs.core.next(seq41404__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41405,G__41406,seq41404__$2);
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
var G__41411 = arguments.length;
switch (G__41411) {
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

chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$2 = (function (p__41412,form){
var map__41413 = p__41412;
var map__41413__$1 = (((((!((map__41413 == null))))?(((((map__41413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41413):map__41413);
var wrap_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308));
var _STAR_wrap_props_STAR__orig_val__41415 = chia.view.hiccup.impl._STAR_wrap_props_STAR_;
var _STAR_wrap_props_STAR__temp_val__41416 = wrap_props;
chia.view.hiccup.impl._STAR_wrap_props_STAR_ = _STAR_wrap_props_STAR__temp_val__41416;

try{return chia.view.hiccup.to_element(form);
}finally {chia.view.hiccup.impl._STAR_wrap_props_STAR_ = _STAR_wrap_props_STAR__orig_val__41415;
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
