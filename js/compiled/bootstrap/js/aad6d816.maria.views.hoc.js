goog.provide('maria.views.hoc');
/**
 * Calls component with value of atom & re-renders when atom changes.
 */
maria.views.hoc.bind_atom = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"key":(function (_,___$1,prop_atom){
var args = cljs.core.deref(prop_atom);
var map__50008 = ((cljs.core.map_QMARK_(args))?args:cljs.core.first(args));
var map__50008__$1 = (((((!((map__50008 == null))))?(((((map__50008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50008):map__50008);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__50012 = atom;
if((G__50012 == null)){
return null;
} else {
return cljs.core.add_watch(G__50012,this$,((function (G__50012){
return (function (_,___$1,old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return (chia.view.force_update.cljs$core$IFn$_invoke$arity$1 ? chia.view.force_update.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.force_update.call(null,this$));
} else {
return null;
}
});})(G__50012))
);
}
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (this$,_,atom){
var G__50015 = atom;
if((G__50015 == null)){
return null;
} else {
return cljs.core.remove_watch(G__50015,this$);
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
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$hoc$bind_atom50002(props50003){
var G__50001 = this;
chia.view.class$.Component.call(G__50001,props50003);

var obj50016_50284 = G__50001;
var obj50017_50285 = (((!((obj50016_50284 == null))))?obj50016_50284:({}));
obj50017_50285.state = ({});



return G__50001;
}));
maria.views.hoc.get_frame_element = (function maria$views$hoc$get_frame_element(this$){
var G__50176 = (function (){var obj50179 = (function (){var obj50177 = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var k50178 = "contentDocument";
if((function (){var obj50182 = obj50177;
return (((!((obj50182 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50178,obj50182)));
})()){
return (obj50177[k50178]);
} else {
return undefined;
}
})();
var k50180 = "body";
if((function (){var obj50188 = obj50179;
return (((!((obj50188 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50180,obj50188)));
})()){
return (obj50179[k50180]);
} else {
return undefined;
}
})();
return goog.dom.getFirstElementChild(G__50176);
});
maria.views.hoc.render_frame_BANG_ = (function maria$views$hoc$render_frame_BANG_(this$,content){
return chia.view.render_to_dom.cljs$core$IFn$_invoke$arity$2(chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"/app.css"], null)], null),content], null)),maria.views.hoc.get_frame_element(this$));
});
/**
 * Renders component (passed in as child) to an iFrame.
 */
maria.views.hoc.Frame = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spec-keys","spec-keys",1734931817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec","children","spec/children",-946200067),(cljs.core.truth_(goog.DEBUG)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455)], null):null)], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,content){
var G__50196_50289 = (function (){var obj50200 = (function (){var obj50198 = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var k50199 = "contentDocument";
if((function (){var obj50203 = obj50198;
return (((!((obj50203 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50199,obj50203)));
})()){
return (obj50198[k50199]);
} else {
return undefined;
}
})();
var k50201 = "body";
if((function (){var obj50211 = obj50200;
return (((!((obj50211 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50201,obj50211)));
})()){
return (obj50200[k50201]);
} else {
return undefined;
}
})();
var G__50197_50290 = goog.dom.createDom("div");
goog.dom.appendChild(G__50196_50289,G__50197_50290);

return maria.views.hoc.render_frame_BANG_(this$,content);
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (this$){
var G__50216 = maria.views.hoc.get_frame_element(this$);
return module$node_modules$react_dom$index.unmountComponentAtNode(G__50216);
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$hoc$__Frame(p__50221,component){
var map__50222 = p__50221;
var map__50222__$1 = (((((!((map__50222 == null))))?(((((map__50222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50222):map__50222);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword("view","props","view/props",449562012));
return chia.view.props.to_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.bn.shadow-2","iframe.bn.shadow-2",-478678594),props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.hoc/Frame","doc":"Renders component (passed in as child) to an iFrame."}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$hoc$Frame50194(props50195){
var G__50193 = this;
chia.view.class$.Component.call(G__50193,props50195);

var obj50264_50295 = G__50193;
var obj50265_50296 = (((!((obj50264_50295 == null))))?obj50264_50295:({}));
obj50265_50296.state = ({});



return G__50193;
}));
