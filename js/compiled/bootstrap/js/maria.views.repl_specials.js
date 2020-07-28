goog.provide('maria.views.repl_specials');
goog.require('cljs.core');
goog.require('chia.view');
goog.require('maria.live.ns_utils');
goog.require('maria.views.icons');
goog.require('clojure.string');
goog.require('maria.live.source_lookups');
goog.require('maria.views.cards');
goog.require('maria.editors.code');
goog.require('maria.friendly.docstrings');
maria.views.repl_specials.docs_link = (function maria$views$repl_specials$docs_link(namespace,name){
if(cljs.core.truth_(cljs.core.re_find(/^(cljs|clojure)\.core(\$macros)?$/,namespace))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".mv2",".mv2",-740537131),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.f7.black","a.f7.black",-373724357),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["https://clojuredocs.org/clojure.core/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maria.live.ns_utils.cd_encode(name))].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),"clojuredocs \u2197"], null)], null);
} else {
return null;
}
});
maria.views.repl_specials.doc = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"key":new cljs.core.Keyword(null,"name","name",1843675177),"displayName":"views.repl-specials/doc"}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$repl_specials$__doc(p__42262){
var map__42263 = p__42262;
var map__42263__$1 = (((((!((map__42263 == null))))?(((((map__42263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42263):map__42263);
var this$ = map__42263__$1;
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42263__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42263__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42263__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42263__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42263__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42263__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var standalone_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42263__$1,new cljs.core.Keyword(null,"standalone?","standalone?",-1772141988));
return chia.view.props.to_element((function (){var vec__42267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this$))], null);
var namespace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(1),null);
var arglists__$1 = maria.live.ns_utils.elide_quote((function (){var or__4131__auto__ = forms;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(meta);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return arglists;
}
}
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ws-normal",".ws-normal",2014782684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(standalone_QMARK_)?maria.views.cards.card_classes:null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".code.flex.items-center.pointer.mv1.hover-opacity-parent.pl3",".code.flex.items-center.pointer.mv1.hover-opacity-parent.pl3",-602351734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__42267,namespace,name,arglists__$1,map__42263,map__42263__$1,this$,expanded_QMARK_,doc,meta,arglists,forms,props,standalone_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(vec__42267,namespace,name,arglists__$1,map__42263,map__42263__$1,this$,expanded_QMARK_,doc,meta,arglists,forms,props,standalone_QMARK_))
], null),(cljs.core.truth_(standalone_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.o-60","span.o-60",-959328366),namespace,"/"], null):null),name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.o-50.hover-opacity-child","span.o-50.hover-opacity-child",2020258398),(cljs.core.truth_((function (){var or__4131__auto__ = doc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.seq(arglists__$1);
}
})())?maria.views.cards.arrow((cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"left","left",-399115937))):null)], null)], null),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ph3",".ph3",-342092714),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".mv1.blue.f6",".mv1.blue.f6",177464403),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arglists__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.mv2.f6",".gray.mv2.f6",512164512),(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"docstring","docstring",879233117).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(maria.friendly.docstrings.clojure_core,name));
if(cljs.core.truth_(temp__5718__auto__)){
var friendly_doc = temp__5718__auto__;
return friendly_doc;
} else {
return doc;
}
})()], null),maria.views.repl_specials.docs_link(namespace,name)], null):null)], null);
})());
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$repl_specials$doc42260(props42261){
var G__42259 = this;
chia.view.class$.Component.call(G__42259,props42261);

var obj42278_42333 = G__42259;
var obj42280_42334 = (((!((obj42278_42333 == null))))?obj42278_42333:({}));
obj42280_42334.state = ({});


chia.view.class$.populate_initial_state_BANG_(G__42259,props42261,((function (G__42259){
return (function (p1__42252_SHARP_){
return new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(p1__42252_SHARP_);
});})(G__42259))
);

return G__42259;
}));
maria.views.repl_specials.var_source = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (p__42295){
var map__42297 = p__42295;
var map__42297__$1 = (((((!((map__42297 == null))))?(((((map__42297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42297):map__42297);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42297__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42297__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return maria.live.source_lookups.var_source(props,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,state));
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$repl_specials$__var_source(p__42300){
var map__42301 = p__42300;
var map__42301__$1 = (((((!((map__42301 == null))))?(((((map__42301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42301):map__42301);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var special_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,new cljs.core.Keyword(null,"special-form","special-form",-1326536374));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return chia.view.props.to_element((function (){var map__42304 = cljs.core.deref(state);
var map__42304__$1 = (((((!((map__42304 == null))))?(((((map__42304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42304):map__42304);
var result = map__42304__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42304__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42304__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if((result == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa2",".pa2",-1265800523),"Loading..."], null);
} else {
if(cljs.core.truth_(error)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ma3",".ma3",1372553040),(cljs.core.truth_(special_form)?["Source code is not available. (`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"` is a special form, not written in Clojure.)"].join(''):error)], null);
} else {
if(cljs.core.truth_(value)){
return (maria.editors.code.viewer.cljs$core$IFn$_invoke$arity$1 ? maria.editors.code.viewer.cljs$core$IFn$_invoke$arity$1(value) : maria.editors.code.viewer.call(null,value));
} else {
return null;
}
}
}
})());
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.repl-specials/var-source"}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$repl_specials$var_source42293(props42294){
var G__42292 = this;
chia.view.class$.Component.call(G__42292,props42294);

var obj42306_42354 = G__42292;
var obj42307_42355 = (((!((obj42306_42354 == null))))?obj42306_42354:({}));
obj42307_42355.state = ({});



return G__42292;
}));
maria.views.repl_specials.dir = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.repl-specials/dir"}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$repl_specials$__dir(p__42316,c_state,ns){
var map__42317 = p__42316;
var map__42317__$1 = (((((!((map__42317 == null))))?(((((map__42317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42317):map__42317);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42317__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return chia.view.props.to_element((function (){var defs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42317,map__42317__$1,state){
return (function (p1__42312_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(p1__42312_SHARP_)));
});})(map__42317,map__42317__$1,state))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(maria.live.ns_utils.analyzer_ns(c_state,ns))))));
var c = cljs.core.count(defs);
var limit = (10);
var map__42319 = cljs.core.deref(state);
var map__42319__$1 = (((((!((map__42319 == null))))?(((((map__42319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42319):map__42319);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sans-serif",".sans-serif",-309104189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),maria.views.cards.card_classes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".b.pv2.ph3.f5",".b.pv2.ph3.f5",-1697940507),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(maria.views.repl_specials.doc,(function (){var G__42321 = defs;
if(cljs.core.not(expanded_QMARK_)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,G__42321);
} else {
return G__42321;
}
})()),((((cljs.core.not(expanded_QMARK_)) && ((c > limit))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".o-50.pv2.flex.items-center.ph3.pointer.bt.b--near-white",".o-50.pv2.flex.items-center.ph3.pointer.bt.b--near-white",55634558),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (defs,c,limit,map__42319,map__42319__$1,expanded_QMARK_,map__42317,map__42317__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true);
});})(defs,c,limit,map__42319,map__42319__$1,expanded_QMARK_,map__42317,map__42317__$1,state))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Show All (",(c - limit)," more)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917)], null),maria.views.icons.ExpandMore], null):null)], null);
})());
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$repl_specials$dir42314(props42315){
var G__42313 = this;
chia.view.class$.Component.call(G__42313,props42315);

var obj42322_42385 = G__42313;
var obj42323_42386 = (((!((obj42322_42385 == null))))?obj42322_42385:({}));
obj42323_42386.state = ({});


chia.view.class$.populate_initial_state_BANG_(G__42313,props42315,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false], null));

return G__42313;
}));

//# sourceMappingURL=maria.views.repl_specials.js.map
