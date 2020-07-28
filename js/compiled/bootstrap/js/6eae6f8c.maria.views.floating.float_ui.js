goog.provide('maria.views.floating.float_ui');
maria.views.floating.float_ui.tear_down_BANG_ = (function maria$views$floating$float_ui$tear_down_BANG_(p__50696){
var map__50697 = p__50696;
var map__50697__$1 = (((((!((map__50697 == null))))?(((((map__50697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50697):map__50697);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50697__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var temp__5720__auto__ = new cljs.core.Keyword(null,"teardown","teardown",-1259295493).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5720__auto__)){
var teardown = temp__5720__auto__;
return (teardown.cljs$core$IFn$_invoke$arity$0 ? teardown.cljs$core$IFn$_invoke$arity$0() : teardown.call(null));
} else {
return null;
}
});
maria.views.floating.float_ui.setup_listener_BANG_ = (function maria$views$floating$float_ui$setup_listener_BANG_(p__50704){
var map__50705 = p__50704;
var map__50705__$1 = (((((!((map__50705 == null))))?(((((map__50705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50705):map__50705);
var this$ = map__50705__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50705__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var cancel_events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50705__$1,new cljs.core.Keyword(null,"cancel-events","cancel-events",113283190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mousedown","focus","scroll"], null));
maria.views.floating.float_ui.tear_down_BANG_(this$);

var the_events = cljs.core.to_array(cancel_events);
var this_node = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var callback = ((function (the_events,this_node,map__50705,map__50705__$1,this$,state,cancel_events){
return (function (e){
if(((cljs.core.not(chia.routing.closest(e.target,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,this_node)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"scroll")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,document)))))){
maria.views.floating.float_ui.tear_down_BANG_(this$);

var G__50714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract-attr","db/retract-attr",-634281438),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107)], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__50714) : chia.db.transact_BANG_.call(null,G__50714));
} else {
return null;
}
});})(the_events,this_node,map__50705,map__50705__$1,this$,state,cancel_events))
;
goog.events.listen(window,the_events,callback,true);

var _STAR_silent_STAR__orig_val__50716 = chia.reactive._STAR_silent_STAR_;
var _STAR_silent_STAR__temp_val__50717 = true;
chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__temp_val__50717;

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"teardown","teardown",-1259295493),((function (_STAR_silent_STAR__orig_val__50716,_STAR_silent_STAR__temp_val__50717,the_events,this_node,callback,map__50705,map__50705__$1,this$,state,cancel_events){
return (function (){
goog.events.unlisten(window,the_events,callback,true);

var _STAR_silent_STAR__orig_val__50718 = chia.reactive._STAR_silent_STAR_;
var _STAR_silent_STAR__temp_val__50719 = true;
chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__temp_val__50719;

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"teardown","teardown",-1259295493));
}finally {chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__orig_val__50718;
}});})(_STAR_silent_STAR__orig_val__50716,_STAR_silent_STAR__temp_val__50717,the_events,this_node,callback,map__50705,map__50705__$1,this$,state,cancel_events))
);
}finally {chia.reactive._STAR_silent_STAR_ = _STAR_silent_STAR__orig_val__50716;
}});
maria.views.floating.float_ui.FloatingContainer = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$){
return maria.views.floating.float_ui.setup_listener_BANG_(this$);
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),(function (p__50729){
var map__50730 = p__50729;
var map__50730__$1 = (((((!((map__50730 == null))))?(((((map__50730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50730):map__50730);
var this$ = map__50730__$1;
var cancel_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50730__$1,new cljs.core.Keyword(null,"cancel-events","cancel-events",113283190));
var map__50731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50730__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var map__50731__$1 = (((((!((map__50731 == null))))?(((((map__50731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50731):map__50731);
var prev_cancel_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50731__$1,new cljs.core.Keyword(null,"cancel-events","cancel-events",113283190));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cancel_events,prev_cancel_events)){
return null;
} else {
return maria.views.floating.float_ui.setup_listener_BANG_(this$);
}
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (this$){
return maria.views.floating.float_ui.tear_down_BANG_(this$);
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$floating$float_ui$__FloatingContainer(p__50740){
var map__50741 = p__50740;
var map__50741__$1 = (((((!((map__50741 == null))))?(((((map__50741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50741):map__50741);
var vec__50742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword("float","pos","float/pos",-223934032));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742,(1),null);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"props","props",453281727));
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50741__$1,new cljs.core.Keyword("float","offset","float/offset",349967907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return chia.view.props.to_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [maria.views.error.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (map__50741,map__50741__$1,vec__50742,left,top,component,props,element,offset){
return (function (_,___$1){
return null;
});})(map__50741,map__50741__$1,vec__50742,left,top,component,props,element,offset))
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
var G__50746 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","top","ui/top",-1856268277),top__$1,new cljs.core.Keyword("ui","left","ui/left",-399129133),left__$1,new cljs.core.Keyword("ui","max-height","ui/max-height",-612568256),max_height], null)], 0));
return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__50746) : component.call(null,G__50746));
}
})()], null);
})()], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"floating.float-ui/FloatingContainer"}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$views$floating$float_ui$FloatingContainer50727(props50728){
var G__50726 = this;
chia.view.class$.Component.call(G__50726,props50728);

var obj50749_50819 = G__50726;
var obj50750_50820 = (((!((obj50749_50819 == null))))?obj50749_50819:({}));
obj50750_50820.state = ({});



return G__50726;
}));
maria.views.floating.float_ui.show_floating_view = (function maria$views$floating$float_ui$show_floating_view(){
var G__50757 = (function (){var G__50759 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__50760 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__50759,G__50760) : chia.db.get.call(null,G__50759,G__50760));
})();
if((G__50757 == null)){
return null;
} else {
return (maria.views.floating.float_ui.FloatingContainer.cljs$core$IFn$_invoke$arity$1 ? maria.views.floating.float_ui.FloatingContainer.cljs$core$IFn$_invoke$arity$1(G__50757) : maria.views.floating.float_ui.FloatingContainer.call(null,G__50757));
}
});
maria.views.floating.float_ui.floating_view_BANG_ = (function maria$views$floating$float_ui$floating_view_BANG_(data){
var G__50761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107),data], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__50761) : chia.db.transact_BANG_.call(null,G__50761));
});
maria.views.floating.float_ui.current_view = (function maria$views$floating$float_ui$current_view(){
var G__50764 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__50765 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__50764,G__50765) : chia.db.get.call(null,G__50764,G__50765));
});
maria.views.floating.float_ui.clear_BANG_ = (function maria$views$floating$float_ui$clear_BANG_(){
var G__50766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract-attr","db/retract-attr",-634281438),new cljs.core.Keyword("ui","globals","ui/globals",1713595914),new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107)], null)], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__50766) : chia.db.transact_BANG_.call(null,G__50766));
});
lark.commands.registry.register_BANG_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esc"], null),new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"when","when",-576417306),(function (){
var G__50767 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__50768 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 ? chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2(G__50767,G__50768) : chia.db.contains_QMARK_.call(null,G__50767,G__50768));
}),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("floating-ui","exit","floating-ui/exit",1783805147),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),(function (){
var G__50769 = new cljs.core.Keyword("ui","globals","ui/globals",1713595914);
var G__50770 = new cljs.core.Keyword(null,"floating-hint","floating-hint",773470107);
return (chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 ? chia.db.contains_QMARK_.cljs$core$IFn$_invoke$arity$2(G__50769,G__50770) : chia.db.contains_QMARK_.call(null,G__50769,G__50770));
}),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),null,new cljs.core.Keyword(null,"command","command",-894540724),(function maria$views$floating$float_ui$floating_ui_exit(context){
return maria.views.floating.float_ui.clear_BANG_();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esc"], null));
