goog.provide('maria.views.bottom_bar');
maria.views.bottom_bar.ShowVar = (function maria$views$bottom_bar$ShowVar(p__50777){
var map__50778 = p__50777;
var map__50778__$1 = (((((!((map__50778 == null))))?(((((map__50778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50778):map__50778);
var the_var = map__50778__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var display_namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778__$1,new cljs.core.Keyword(null,"display-namespace","display-namespace",433182898));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
if(cljs.core.truth_(the_var)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ph3.pv2.flex.items-center",".ph3.pv2.flex.items-center",904784670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.flex-none.nowrap",".gray.flex-none.nowrap",1917763645),(function (){var or__4131__auto__ = display_namespace;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(name));
}
})(),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nowrap.b.mr2","span.nowrap.b.mr2",-189624048),(function (){var or__4131__auto__ = display_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(name);
}
})()], null)," ",(function (){var temp__5720__auto__ = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(meta);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return arglists;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var arglists__$1 = temp__5720__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".mr2.truncate.blue.flex-none.nowrap",".mr2.truncate.blue.flex-none.nowrap",168629844)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,maria.live.ns_utils.elide_quote(arglists__$1))));
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.nowrap.truncate",".gray.nowrap.truncate",1979078454),(function (){var or__4131__auto__ = doc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(meta);
}
})()], null)], null);
} else {
return null;
}
});
maria.views.bottom_bar.retract_bottom_bar_BANG_ = (function maria$views$bottom_bar$retract_bottom_bar_BANG_(key){
var G__50794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"bottom-bar-stack","bottom-bar-stack",1690244923),(function (p1__50793_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50797){
var vec__50798 = p__50797;
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50798,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50798,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_key,key);
}),p1__50793_SHARP_);
})], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__50794) : chia.db.transact_BANG_.call(null,G__50794));
});
maria.views.bottom_bar.add_bottom_bar_BANG_ = (function maria$views$bottom_bar$add_bottom_bar_BANG_(key,view){
if((view == null)){
return maria.views.bottom_bar.retract_bottom_bar_BANG_(key);
} else {
var G__50805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"bottom-bar-stack","bottom-bar-stack",1690244923),(function (p1__50804_SHARP_){
return maria.util.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,view], null),p1__50804_SHARP_));
})], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__50805) : chia.db.transact_BANG_.call(null,G__50805));
}
});
maria.views.bottom_bar.BottomBar = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.bottom-bar/BottomBar"}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$bottom_bar$__BottomBar(this$){
return chia.view.props.to_element((function (){var bottom_bar = (function (){var G__50863 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__50864 = new cljs.core.Keyword(null,"bottom-bar-stack","bottom-bar-stack",1690244923);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__50863,G__50864) : chia.db.get.call(null,G__50863,G__50864));
})();
var vec__50860 = cljs.core.first(bottom_bar);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50860,(0),null);
var top_view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50860,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#bottom-bar.bt.monospace.flex-none.fixed.bottom-0.left-0.right-0.f7.z-999","#bottom-bar.bt.monospace.flex-none.fixed.bottom-0.left-0.right-0.f7.z-999",-1221447572),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"rgba(0,0,0,0.03)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e9e9e9"], null)], null),top_view], null);
})());
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$bottom_bar$BottomBar50810(props50811){
var G__50809 = this;
chia.view.class$.Component.call(G__50809,props50811);

var obj50869_50890 = G__50809;
var obj50870_50891 = (((!((obj50869_50890 == null))))?obj50869_50890:({}));
obj50870_50891.state = ({});



return G__50809;
}));
