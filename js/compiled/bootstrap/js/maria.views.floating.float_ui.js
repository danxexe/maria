goog.provide('maria.views.floating.float_ui');
goog.require('cljs.core');
goog.require('chia.view');
goog.require('lark.commands.registry');
goog.require('chia.db');
goog.require('chia.routing');
goog.require('goog.events');
goog.require('maria.views.error');
goog.require('chia.reactive');
goog.require('goog.events.EventType');
maria.views.floating.float_ui.tear_down_BANG_ = (function maria$views$floating$float_ui$tear_down_BANG_(p__98777){
var map__98780 = p__98777;
var map__98780__$1 = (((((!((map__98780 == null))))?(((((map__98780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98780):map__98780);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98780__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var temp__5720__auto__ = new cljs.core.Keyword(null,"teardown","teardown",-1259295493).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5720__auto__)){
var teardown = temp__5720__auto__;
return (teardown.cljs$core$IFn$_invoke$arity$0 ? teardown.cljs$core$IFn$_invoke$arity$0() : teardown.call(null));
} else {
return null;
}
});
maria.views.floating.float_ui.setup_listener_BANG_ = (function maria$views$floating$float_ui$setup_listener_BANG_(p__98798){
var map__98801 = p__98798;
var map__98801__$1 = (((((!((map__98801 == null))))?(((((map__98801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98801):map__98801);
var this$ = map__98801__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98801__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var cancel_events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__98801__$1,new cljs.core.Keyword(null,"cancel-events","cancel-events",113283190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mousedown","focus","scroll"], null));
maria.views.floating.float_ui.tear_down_BANG_(this$);

var the_events = cljs.core.to_array(cancel_events);
var this_node = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var callback = ((function (the_events,this_node,map__98801,map__98801__$1,this$,state,cancel_events){
return (function (e){
if(((cljs.core.not(chia.routing.closest(e.target,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,this_node)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"scroll")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,document)))))){
maria.views.floating.float_ui.tear_down_BANG_(this$);

var G__98815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract-attr","db/retract-attr",-634281438),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107)], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__98815) : chia.db.transact_BANG_.call(null,G__98815));
} else {
return null;
}
});})(the_events,this_node,map__98801,map__98801__$1,this$,state,cancel_events))
;
goog.events.listen(window,the_events,callback,true);

var _STAR_silent_STAR__orig_val__98818 = chia.reactive._STAR_silent_STAR_;
var _STAR_silent_STAR__temp_val__98819 = true;
chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__temp_val__98819;

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"teardown","teardown",-1259295493),((function (_STAR_silent_STAR__orig_val__98818,_STAR_silent_STAR__temp_val__98819,the_events,this_node,callback,map__98801,map__98801__$1,this$,state,cancel_events){
return (function (){
goog.events.unlisten(window,the_events,callback,true);

var _STAR_silent_STAR__orig_val__98826 = chia.reactive._STAR_silent_STAR_;
var _STAR_silent_STAR__temp_val__98827 = true;
chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__temp_val__98827;

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"teardown","teardown",-1259295493));
}finally {chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__orig_val__98826;
}});})(_STAR_silent_STAR__orig_val__98818,_STAR_silent_STAR__temp_val__98819,the_events,this_node,callback,map__98801,map__98801__$1,this$,state,cancel_events))
);
}finally {chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__orig_val__98818;
}});
maria.views.floating.float_ui.FloatingContainer = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$){
return maria.views.floating.float_ui.setup_listener_BANG_(this$);
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),(function (p__98849){
var map__98858 = p__98849;
var map__98858__$1 = (((((!((map__98858 == null))))?(((((map__98858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98858):map__98858);
var this$ = map__98858__$1;
var cancel_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98858__$1,new cljs.core.Keyword(null,"cancel-events","cancel-events",113283190));
var map__98859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98858__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var map__98859__$1 = (((((!((map__98859 == null))))?(((((map__98859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98859):map__98859);
var prev_cancel_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98859__$1,new cljs.core.Keyword(null,"cancel-events","cancel-events",113283190));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cancel_events,prev_cancel_events)){
return null;
} else {
return maria.views.floating.float_ui.setup_listener_BANG_(this$);
}
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (this$){
return maria.views.floating.float_ui.tear_down_BANG_(this$);
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$floating$float_ui$__FloatingContainer(p__98877){
var map__98878 = p__98877;
var map__98878__$1 = (((((!((map__98878 == null))))?(((((map__98878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98878):map__98878);
var vec__98879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98878__$1,new cljs.core.Keyword("float","pos","float/pos",-223934032));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98879,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98879,(1),null);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98878__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98878__$1,new cljs.core.Keyword(null,"props","props",453281727));
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98878__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__98878__$1,new cljs.core.Keyword("float","offset","float/offset",349967907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return chia.view.props.to_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [maria.views.error.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (map__98878,map__98878__$1,vec__98879,left,top,component,props,element,offset){
return (function (_,___$1){
return null;
});})(map__98878,map__98878__$1,vec__98879,left,top,component,props,element,offset))
], null),(function (){var left__$1 = (left + cljs.core.first(offset));
var top__$1 = (top + cljs.core.second(offset));
var BOTTOM_PADDING = (function (){var or__4131__auto__ = document.getElementById("bottom-bar").width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var max_height = ((window.innerHeight - (top__$1 - window.scrollY)) - BOTTOM_PADDING);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".absolute.z-9999",".absolute.z-9999",-1626684753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),top__$1,new cljs.core.Keyword(null,"left","left",-399115937),left__$1], null)], null),(function (){var or__4131__auto__ = element;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__98893 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","top","ui/top",-1856268277),top__$1,new cljs.core.Keyword("ui","left","ui/left",-399129133),left__$1,new cljs.core.Keyword("ui","max-height","ui/max-height",-612568256),max_height], null)], 0));
return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__98893) : component.call(null,G__98893));
}
})()], null);
})()], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"floating.float-ui/FloatingContainer"}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$floating$float_ui$FloatingContainer98846(props98847){
var G__98845 = this;
chia.view.class$.Component.call(G__98845,props98847);

var obj98895_99072 = G__98845;
var obj98897_99074 = (((!((obj98895_99072 == null))))?obj98895_99072:({}));
obj98897_99074.state = ({});



return G__98845;
}));
maria.views.floating.float_ui.show_floating_view = (function maria$views$floating$float_ui$show_floating_view(){
var G__98912 = (function (){var G__98916 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__98917 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__98916,G__98917) : chia.db.get.call(null,G__98916,G__98917));
})();
if((G__98912 == null)){
return null;
} else {
return (maria.views.floating.float_ui.FloatingContainer.cljs$core$IFn$_invoke$arity$1 ? maria.views.floating.float_ui.FloatingContainer.cljs$core$IFn$_invoke$arity$1(G__98912) : maria.views.floating.float_ui.FloatingContainer.call(null,G__98912));
}
});
maria.views.floating.float_ui.floating_view_BANG_ = (function maria$views$floating$float_ui$floating_view_BANG_(data){
var G__98933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107),data], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__98933) : chia.db.transact_BANG_.call(null,G__98933));
});
maria.views.floating.float_ui.current_view = (function maria$views$floating$float_ui$current_view(){
var G__98939 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__98940 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__98939,G__98940) : chia.db.get.call(null,G__98939,G__98940));
});
maria.views.floating.float_ui.clear_BANG_ = (function maria$views$floating$float_ui$clear_BANG_(){
var G__98949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract-attr","db/retract-attr",-634281438),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107)], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__98949) : chia.db.transact_BANG_.call(null,G__98949));
});
lark.commands.registry.register_BANG_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esc"], null),new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"when","when",-576417306),(function (){
var G__98953 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__98954 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 ? chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2(G__98953,G__98954) : chia.db.contains_QMARK_.call(null,G__98953,G__98954));
}),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("floating-ui","exit","floating-ui/exit",1783805147),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),(function (){
var G__98956 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__98959 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 ? chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2(G__98956,G__98959) : chia.db.contains_QMARK_.call(null,G__98956,G__98959));
}),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),null,new cljs.core.Keyword(null,"command","command",-894540724),(function maria$views$floating$float_ui$floating_ui_exit(context){
return maria.views.floating.float_ui.clear_BANG_();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esc"], null));

//# sourceMappingURL=maria.views.floating.float_ui.js.map
