goog.provide('maria.views.bottom_bar');
goog.require('cljs.core');
goog.require('chia.view');
goog.require('chia.db');
goog.require('maria.live.ns_utils');
goog.require('maria.util');
maria.views.bottom_bar.ShowVar = (function maria$views$bottom_bar$ShowVar(p__66921){
var map__66924 = p__66921;
var map__66924__$1 = (((((!((map__66924 == null))))?(((((map__66924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66924):map__66924);
var the_var = map__66924__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66924__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66924__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var display_namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66924__$1,new cljs.core.Keyword(null,"display-namespace","display-namespace",433182898));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66924__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
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
var G__66955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"bottom-bar-stack","bottom-bar-stack",1690244923),(function (p1__66953_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__66957){
var vec__66959 = p__66957;
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66959,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66959,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_key,key);
}),p1__66953_SHARP_);
})], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__66955) : chia.db.transact_BANG_.call(null,G__66955));
});
maria.views.bottom_bar.add_bottom_bar_BANG_ = (function maria$views$bottom_bar$add_bottom_bar_BANG_(key,view){
if((view == null)){
return maria.views.bottom_bar.retract_bottom_bar_BANG_(key);
} else {
var G__66963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"bottom-bar-stack","bottom-bar-stack",1690244923),(function (p1__66962_SHARP_){
return maria.util.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,view], null),p1__66962_SHARP_));
})], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__66963) : chia.db.transact_BANG_.call(null,G__66963));
}
});
maria.views.bottom_bar.BottomBar = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.bottom-bar/BottomBar"}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$bottom_bar$__BottomBar(this$){
return chia.view.props.to_element((function (){var bottom_bar = (function (){var G__66977 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__66978 = new cljs.core.Keyword(null,"bottom-bar-stack","bottom-bar-stack",1690244923);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__66977,G__66978) : chia.db.get.call(null,G__66977,G__66978));
})();
var vec__66974 = cljs.core.first(bottom_bar);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66974,(0),null);
var top_view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66974,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#bottom-bar.bt.monospace.flex-none.fixed.bottom-0.left-0.right-0.f7.z-999","#bottom-bar.bt.monospace.flex-none.fixed.bottom-0.left-0.right-0.f7.z-999",-1221447572),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"rgba(0,0,0,0.03)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e9e9e9"], null)], null),top_view], null);
})());
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$bottom_bar$BottomBar66966(props66967){
var G__66965 = this;
chia.view.class$.Component.call(G__66965,props66967);

var obj66982_67044 = G__66965;
var obj66983_67045 = (((!((obj66982_67044 == null))))?obj66982_67044:({}));
obj66983_67045.state = ({});



return G__66965;
}));

//# sourceMappingURL=maria.views.bottom_bar.js.map
