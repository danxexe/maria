goog.provide('maria.user.loaders');
goog.require('cljs.core');
goog.require('chia.view');
goog.require('maria.views.hoc');
goog.require('maria.views.icons');
goog.require('chia.view.hiccup');
goog.require('maria.eval');
goog.require('maria.views.cards');
goog.require('maria.editors.code');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.set');
goog.require('maria.persistence.github');
maria.user.loaders.gist_loader_status = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"user.loaders/gist-loader-status"}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$user$loaders$__gist_loader_status(p__42256){
var map__42257 = p__42256;
var map__42257__$1 = (((((!((map__42257 == null))))?(((((map__42257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42257):map__42257);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42257__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42257__$1,new cljs.core.Keyword(null,"url","url",276297046));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42257__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42257__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42257__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return chia.view.props.to_element(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ph3",".ph3",-342092714),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),maria.views.cards.card_classes], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".b.mv2.flex.items-center",".b.mv2.flex.items-center",-130801917),(cljs.core.truth_(source)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__42257,map__42257__$1,status,url,error,source,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.not);
});})(map__42257,map__42257__$1,status,url,error,source,state))
], null):null),status,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917)], null),(cljs.core.truth_(source)?(cljs.core.truth_(cljs.core.deref(state))?maria.views.icons.ArrowPointingUp:maria.views.icons.ArrowPointingDown):null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(state);
if(cljs.core.truth_(and__4120__auto__)){
return source;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".overflow-scroll.ph3.nl3.nr3.bt.bb.b--darken.pv2",".overflow-scroll.ph3.nl3.nr3.bt.bb.b--darken.pv2",-228653417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(200)], null)], null),(maria.editors.code.viewer.cljs$core$IFn$_invoke$arity$1 ? maria.editors.code.viewer.cljs$core$IFn$_invoke$arity$1(source) : maria.editors.code.viewer.call(null,source))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.pv2.overflow-auto.w-100.pv2",".gray.pv2.overflow-auto.w-100.pv2",-1112861548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13)], null)], null),url], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bg-near-white.pa2.mv2",".bg-near-white.pa2.mv2",-577701792),error], null):null)], null));
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$user$loaders$gist_loader_status42254(props42255){
var G__42253 = this;
chia.view.class$.Component.call(G__42253,props42255);

var obj42270_42328 = G__42253;
var obj42271_42329 = (((!((obj42270_42328 == null))))?obj42270_42328:({}));
obj42271_42329.state = ({});



return G__42253;
}));
/**
 * Loads gist content, evaluating as ClojureScript code.
 */
maria.user.loaders.load_gist = (function maria$user$loaders$load_gist(id){
var status = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),id,new cljs.core.Keyword(null,"status","status",-1997798413),"Loading gist..."], null));
maria.persistence.github.get_gist(id,((function (status){
return (function (p__42276){
var map__42277 = p__42276;
var map__42277__$1 = (((((!((map__42277 == null))))?(((((map__42277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42277):map__42277);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42277__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42277__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(status,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dark-red",".dark-red",-634176777),"Error:"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),error], 0));
} else {
var project = new cljs.core.Keyword(null,"persisted","persisted",-900171345).cljs$core$IFn$_invoke$arity$1(value);
var vec__42287 = cljs.core.first(new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(project));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42287,(0),null);
var map__42290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42287,(1),null);
var map__42290__$1 = (((((!((map__42290 == null))))?(((((map__42290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42290):map__42290);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290__$1,new cljs.core.Keyword(null,"content","content",15833224));
var c_env = cljs.core.deref(maria.eval.c_env);
var map__42291 = (maria.eval.eval_str_STAR_.cljs$core$IFn$_invoke$arity$1 ? maria.eval.eval_str_STAR_.cljs$core$IFn$_invoke$arity$1(source) : maria.eval.eval_str_STAR_.call(null,source));
var map__42291__$1 = (((((!((map__42291 == null))))?(((((map__42291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42291):map__42291);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.reset_BANG_(maria.eval.c_env,c_env);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(status,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),"Gist loaded.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source","source",-433931539),source], 0));
}
});})(status))
);

return (maria.views.hoc.bind_atom.cljs$core$IFn$_invoke$arity$2 ? maria.views.hoc.bind_atom.cljs$core$IFn$_invoke$arity$2(maria.user.loaders.gist_loader_status,status) : maria.views.hoc.bind_atom.call(null,maria.user.loaders.gist_loader_status,status));
});
/**
 * Load javascript file from url. Return message indicating added global variables.
 */
maria.user.loaders.load_js = (function maria$user$loaders$load_js(url){
var start_globals = cljs.core.set(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.keys(window)));
var url__$1 = goog.html.legacyconversions.trustedResourceUrlFromString(url);
return goog.net.jsloader.safeLoad(url__$1).addCallback(((function (start_globals,url__$1){
return (function (){
var temp__5720__auto__ = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.keys(window))),start_globals));
if(temp__5720__auto__){
var new_globals = temp__5720__auto__;
return chia.view.hiccup.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Added: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_globals,temp__5720__auto__,start_globals,url__$1){
return (function (p1__42303_SHARP_){
return (new cljs.core.List(null,"window.",(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.b","span.b",-1984977699),p1__42303_SHARP_], null),null,(1),null)),(2),null));
});})(new_globals,temp__5720__auto__,start_globals,url__$1))
,new_globals))], null));
} else {
return null;
}
});})(start_globals,url__$1))
);
});
/**
 * Load package from NPM, packaged with browserify (see https://wzrd.in/).
 * Usage: `(load-npm "my-package@0.2.0")` or `(load-npm "my-package@latest")`
 */
maria.user.loaders.load_npm = (function maria$user$loaders$load_npm(package$){
return maria.user.loaders.load_js(["https://wzrd.in/standalone/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)].join(''));
});

//# sourceMappingURL=maria.user.loaders.js.map