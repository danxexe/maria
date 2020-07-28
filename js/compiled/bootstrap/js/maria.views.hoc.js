goog.provide('maria.views.hoc');
goog.require('cljs.core');
goog.require('chia.view');
goog.require('chia.view.hiccup');
goog.require('applied_science.js_interop');
goog.require('goog.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
/**
 * Calls component with value of atom & re-renders when atom changes.
 */
maria.views.hoc.bind_atom = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"key":(function (_,___$1,prop_atom){
var args = cljs.core.deref(prop_atom);
var map__66201 = ((cljs.core.map_QMARK_(args))?args:cljs.core.first(args));
var map__66201__$1 = (((((!((map__66201 == null))))?(((((map__66201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66201):map__66201);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var or__4131__auto__ = key;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = id;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return name;
}
}
}),"displayName":"views.hoc/bind-atom","doc":"Calls component with value of atom & re-renders when atom changes."}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,component,atom){
var G__66213 = atom;
if((G__66213 == null)){
return null;
} else {
return cljs.core.add_watch(G__66213,this$,((function (G__66213){
return (function (_,___$1,old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return (chia.view.force_update.cljs$core$IFn$_invoke$arity$1 ? chia.view.force_update.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.force_update.call(null,this$));
} else {
return null;
}
});})(G__66213))
);
}
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (this$,_,atom){
var G__66223 = atom;
if((G__66223 == null)){
return null;
} else {
return cljs.core.remove_watch(G__66223,this$);
}
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$hoc$__bind_atom(_,component,prop_atom){
return chia.view.props.to_element((function (){var args = cljs.core.deref(prop_atom);
if(cljs.core.vector_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(component,args);
} else {
if(cljs.core.map_QMARK_(args)){
return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(args) : component.call(null,args));
} else {
throw Error(["Invalid format of prop atom, should be vector or map: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join(''));

}
}
})());
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$hoc$bind_atom66196(props66197){
var G__66195 = this;
chia.view.class$.Component.call(G__66195,props66197);

var obj66224_66297 = G__66195;
var obj66225_66298 = (((!((obj66224_66297 == null))))?obj66224_66297:({}));
obj66225_66298.state = ({});



return G__66195;
}));
maria.views.hoc.get_frame_element = (function maria$views$hoc$get_frame_element(this$){
var G__66230 = (function (){var obj66233 = (function (){var obj66231 = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var k66232 = "contentDocument";
if((function (){var obj66236 = obj66231;
return (((!((obj66236 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66232,obj66236)));
})()){
return (obj66231[k66232]);
} else {
return undefined;
}
})();
var k66234 = "body";
if((function (){var obj66239 = obj66233;
return (((!((obj66239 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66234,obj66239)));
})()){
return (obj66233[k66234]);
} else {
return undefined;
}
})();
return goog.dom.getFirstElementChild(G__66230);
});
maria.views.hoc.render_frame_BANG_ = (function maria$views$hoc$render_frame_BANG_(this$,content){
return chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$2(chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"/app.css"], null)], null),content], null)),maria.views.hoc.get_frame_element(this$));
});
/**
 * Renders component (passed in as child) to an iFrame.
 */
maria.views.hoc.Frame = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spec-keys","spec-keys",1734931817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec","children","spec/children",-946200067),(cljs.core.truth_(goog.DEBUG)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455)], null):null)], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,content){
var G__66256_66302 = (function (){var obj66260 = (function (){var obj66258 = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var k66259 = "contentDocument";
if((function (){var obj66265 = obj66258;
return (((!((obj66265 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66259,obj66265)));
})()){
return (obj66258[k66259]);
} else {
return undefined;
}
})();
var k66261 = "body";
if((function (){var obj66270 = obj66260;
return (((!((obj66270 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66261,obj66270)));
})()){
return (obj66260[k66261]);
} else {
return undefined;
}
})();
var G__66257_66303 = goog.dom.createDom("div");
goog.dom.appendChild(G__66256_66302,G__66257_66303);

return maria.views.hoc.render_frame_BANG_(this$,content);
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (this$){
var G__66278 = maria.views.hoc.get_frame_element(this$);
return module$node_modules$react_dom$index.unmountComponentAtNode(G__66278);
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$hoc$__Frame(p__66279,component){
var map__66280 = p__66279;
var map__66280__$1 = (((((!((map__66280 == null))))?(((((map__66280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66280):map__66280);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66280__$1,new cljs.core.Keyword("view","props","view/props",449562012));
return chia.view.props.to_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.bn.shadow-2","iframe.bn.shadow-2",-478678594),props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.hoc/Frame","doc":"Renders component (passed in as child) to an iFrame."}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$hoc$Frame66254(props66255){
var G__66253 = this;
chia.view.class$.Component.call(G__66253,props66255);

var obj66289_66310 = G__66253;
var obj66290_66311 = (((!((obj66289_66310 == null))))?obj66289_66310:({}));
obj66290_66311.state = ({});



return G__66253;
}));

//# sourceMappingURL=maria.views.hoc.js.map
