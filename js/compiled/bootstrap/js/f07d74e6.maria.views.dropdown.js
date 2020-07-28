goog.provide('maria.views.dropdown');
lark.commands.registry.register_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"doc","doc",1913296891)],[new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),null,true,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Up"], null),new cljs.core.Keyword("dropdown","up","dropdown/up",-642952992),(function maria$views$dropdown$dropdown_up(p__50801){
var map__50802 = p__50801;
var map__50802__$1 = (((((!((map__50802 == null))))?(((((map__50802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50802):map__50802);
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
return dropdown.up();
}),(9),null]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Up"], null));
lark.commands.registry.register_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"doc","doc",1913296891)],[new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),null,true,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Down"], null),new cljs.core.Keyword("dropdown","down","dropdown/down",-276038479),(function maria$views$dropdown$dropdown_down(p__50806){
var map__50807 = p__50806;
var map__50807__$1 = (((((!((map__50807 == null))))?(((((map__50807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50807):map__50807);
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50807__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
return dropdown.down();
}),(9),null]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Down"], null));
lark.commands.registry.register_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"doc","doc",1913296891)],[(function (p__50812){
var map__50817 = p__50812;
var map__50817__$1 = (((((!((map__50817 == null))))?(((((map__50817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50817):map__50817);
var context = map__50817__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50817__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50817__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
var and__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding,"Tab");
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"select-on-enter","select-on-enter",1969560213).cljs$core$IFn$_invoke$arity$1(dropdown);
}
} else {
return and__4120__auto__;
}
}),null,true,(function (p__50826){
var map__50827 = p__50826;
var map__50827__$1 = (((((!((map__50827 == null))))?(((((map__50827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50827):map__50827);
var context = map__50827__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50827__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50827__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
var and__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding,"Tab");
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"select-on-enter","select-on-enter",1969560213).cljs$core$IFn$_invoke$arity$1(dropdown);
}
} else {
return and__4120__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Enter"], null),new cljs.core.Keyword("dropdown","select","dropdown/select",983847088),(function maria$views$dropdown$dropdown_select(p__50829){
var map__50830 = p__50829;
var map__50830__$1 = (((((!((map__50830 == null))))?(((((map__50830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50830):map__50830);
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50830__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
return dropdown.select();
}),(9),null]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Enter"], null));
maria.views.dropdown.DEFAULT_PAGE_SIZE = (9);
maria.views.dropdown.page_count = (function maria$views$dropdown$page_count(item_count,page_size){
return Math.ceil((item_count / page_size));
});
maria.views.dropdown.numbered_list = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({down:(function (){var v__23188__auto__ = (function (p__50842){
var map__50843 = p__50842;
var map__50843__$1 = (((((!((map__50843 == null))))?(((((map__50843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50843):map__50843);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50843__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50843__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.seq(items)){
var map__50845 = cljs.core.deref(state);
var map__50845__$1 = (((((!((map__50845 == null))))?(((((map__50845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50845):map__50845);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var item_count = cljs.core.count(items);
var page_count = maria.views.dropdown.page_count(item_count,PAGE_SIZE);
var last_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,(page_count - (1)));
var current_max_selection = ((last_page_QMARK_)?((item_count - (page * PAGE_SIZE)) - (1)):(PAGE_SIZE - (1)));
var vec__50846 = (((selection >= current_max_selection))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((last_page_QMARK_)?(0):(page + (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4222__auto__ = (selection + (1));
var y__4223__auto__ = (PAGE_SIZE - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),page], null));
var selection__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50846,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50846,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),selection__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page","page",849072397),page__$1], 0));
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__23188__auto__)){
return ((function (v__23188__auto__){
return (function() { 
var G__50968__delegate = function (args__23189__auto__){
var this__23190__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__23188__auto__,this__23190__auto__,args__23189__auto__);
};
var G__50968 = function (var_args){
var args__23189__auto__ = null;
if (arguments.length > 0) {
var G__50969__i = 0, G__50969__a = new Array(arguments.length -  0);
while (G__50969__i < G__50969__a.length) {G__50969__a[G__50969__i] = arguments[G__50969__i + 0]; ++G__50969__i;}
  args__23189__auto__ = new cljs.core.IndexedSeq(G__50969__a,0,null);
} 
return G__50968__delegate.call(this,args__23189__auto__);};
G__50968.cljs$lang$maxFixedArity = 0;
G__50968.cljs$lang$applyTo = (function (arglist__50970){
var args__23189__auto__ = cljs.core.seq(arglist__50970);
return G__50968__delegate(args__23189__auto__);
});
G__50968.cljs$core$IFn$_invoke$arity$variadic = G__50968__delegate;
return G__50968;
})()
;
;})(v__23188__auto__))
} else {
return v__23188__auto__;
}
})(),selectN:(function (){var v__23188__auto__ = (function (p__50856,n){
var map__50857 = p__50856;
var map__50857__$1 = (((((!((map__50857 == null))))?(((((map__50857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50857):map__50857);
var on_select_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857__$1,new cljs.core.Keyword(null,"on-select!","on-select!",1441641124));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var map__50859 = cljs.core.deref(state);
var map__50859__$1 = (((((!((map__50859 == null))))?(((((map__50859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50859):map__50859);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50859__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50859__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var offset = (PAGE_SIZE * page);
var n__$1 = (offset + n);
if((((n__$1 < cljs.core.count(items))) && ((n__$1 > (-1))))){
var G__50877_50987 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,n__$1));
(on_select_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_select_BANG_.cljs$core$IFn$_invoke$arity$1(G__50877_50987) : on_select_BANG_.call(null,G__50877_50987));

return true;
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__23188__auto__)){
return ((function (v__23188__auto__){
return (function() { 
var G__50993__delegate = function (args__23189__auto__){
var this__23190__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__23188__auto__,this__23190__auto__,args__23189__auto__);
};
var G__50993 = function (var_args){
var args__23189__auto__ = null;
if (arguments.length > 0) {
var G__50994__i = 0, G__50994__a = new Array(arguments.length -  0);
while (G__50994__i < G__50994__a.length) {G__50994__a[G__50994__i] = arguments[G__50994__i + 0]; ++G__50994__i;}
  args__23189__auto__ = new cljs.core.IndexedSeq(G__50994__a,0,null);
} 
return G__50993__delegate.call(this,args__23189__auto__);};
G__50993.cljs$lang$maxFixedArity = 0;
G__50993.cljs$lang$applyTo = (function (arglist__50995){
var args__23189__auto__ = cljs.core.seq(arglist__50995);
return G__50993__delegate(args__23189__auto__);
});
G__50993.cljs$core$IFn$_invoke$arity$variadic = G__50993__delegate;
return G__50993;
})()
;
;})(v__23188__auto__))
} else {
return v__23188__auto__;
}
})(),up:(function (){var v__23188__auto__ = (function (p__50879){
var map__50880 = p__50879;
var map__50880__$1 = (((((!((map__50880 == null))))?(((((map__50880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50880):map__50880);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50880__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50880__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.seq(items)){
var map__50882 = cljs.core.deref(state);
var map__50882__$1 = (((((!((map__50882 == null))))?(((((map__50882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50882):map__50882);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var item_count = cljs.core.count(items);
var vec__50883 = (((selection <= (0)))?(function (){var page__$1 = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (page - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var selection__$1 = (function (){var x__4222__auto__ = (PAGE_SIZE - (1));
var y__4223__auto__ = ((item_count - (page__$1 * PAGE_SIZE)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection__$1,page__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(selection - (1)),page], null));
var selection__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50883,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50883,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),selection__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page","page",849072397),page__$1], 0));
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__23188__auto__)){
return ((function (v__23188__auto__){
return (function() { 
var G__50996__delegate = function (args__23189__auto__){
var this__23190__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__23188__auto__,this__23190__auto__,args__23189__auto__);
};
var G__50996 = function (var_args){
var args__23189__auto__ = null;
if (arguments.length > 0) {
var G__51004__i = 0, G__51004__a = new Array(arguments.length -  0);
while (G__51004__i < G__51004__a.length) {G__51004__a[G__51004__i] = arguments[G__51004__i + 0]; ++G__51004__i;}
  args__23189__auto__ = new cljs.core.IndexedSeq(G__51004__a,0,null);
} 
return G__50996__delegate.call(this,args__23189__auto__);};
G__50996.cljs$lang$maxFixedArity = 0;
G__50996.cljs$lang$applyTo = (function (arglist__51005){
var args__23189__auto__ = cljs.core.seq(arglist__51005);
return G__50996__delegate(args__23189__auto__);
});
G__50996.cljs$core$IFn$_invoke$arity$variadic = G__50996__delegate;
return G__50996;
})()
;
;})(v__23188__auto__))
} else {
return v__23188__auto__;
}
})(),select:(function (){var v__23188__auto__ = (function (this$){
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$)));
return this$.selectN(selection);
});
if(cljs.core.fn_QMARK_(v__23188__auto__)){
return ((function (v__23188__auto__){
return (function() { 
var G__51011__delegate = function (args__23189__auto__){
var this__23190__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__23188__auto__,this__23190__auto__,args__23189__auto__);
};
var G__51011 = function (var_args){
var args__23189__auto__ = null;
if (arguments.length > 0) {
var G__51012__i = 0, G__51012__a = new Array(arguments.length -  0);
while (G__51012__i < G__51012__a.length) {G__51012__a[G__51012__i] = arguments[G__51012__i + 0]; ++G__51012__i;}
  args__23189__auto__ = new cljs.core.IndexedSeq(G__51012__a,0,null);
} 
return G__51011__delegate.call(this,args__23189__auto__);};
G__51011.cljs$lang$maxFixedArity = 0;
G__51011.cljs$lang$applyTo = (function (arglist__51013){
var args__23189__auto__ = cljs.core.seq(arglist__51013);
return G__51011__delegate(args__23189__auto__);
});
G__51011.cljs$core$IFn$_invoke$arity$variadic = G__51011__delegate;
return G__51011;
})()
;
;})(v__23188__auto__))
} else {
return v__23188__auto__;
}
})()}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$dropdown$__numbered_list(p__50892){
var map__50895 = p__50892;
var map__50895__$1 = (((((!((map__50895 == null))))?(((((map__50895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50895):map__50895);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var on_select_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword(null,"on-select!","on-select!",1441641124));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword("ui","max-height","ui/max-height",-612568256));
var numbered_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword(null,"numbered?","numbered?",-435212600));
return chia.view.props.to_element((function (){var map__50897 = cljs.core.deref(state);
var map__50897__$1 = (((((!((map__50897 == null))))?(((((map__50897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50897):map__50897);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50897__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50897__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50897__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var waiting_QMARK_ = (items == null);
var mobile_QMARK_ = (function (){var G__50899 = new cljs.core.Keyword(null,"UI","UI",1941965563);
var G__50900 = new cljs.core.Keyword(null,"mobile-width?","mobile-width?",-597074049);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__50899,G__50900) : chia.db.get.call(null,G__50899,G__50900));
})();
var legend = ((function (map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (p1__50837_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.o-70.monospace.gray.mh2.ph1.inline-flex.items-center.f7","span.o-70.monospace.gray.mh2.ph1.inline-flex.items-center.f7",584316622),p1__50837_SHARP_], null);
});})(map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
;
var items__$1 = ((waiting_QMARK_)?new cljs.core.Keyword(null,"last-items","last-items",-1217586866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)):items);
var trigger_event = (cljs.core.truth_(mobile_QMARK_)?new cljs.core.Keyword(null,"on-click","on-click",1632826543):new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var offset = (page * PAGE_SIZE);
var less_QMARK_ = (page > (0));
var more_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.bounded_count(((offset + PAGE_SIZE) + (1)),items__$1),((offset + PAGE_SIZE) + (1)));
var page_count = maria.views.dropdown.page_count(cljs.core.count(items__$1),PAGE_SIZE);
var items__$2 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(offset,items__$1);
var G__50901 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["View error: numbered-list"], 0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed","fixed",-562004358)], null);
});})(map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
], null);
var G__50902 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.br1.overflow-y-auto","div.bg-white.br1.overflow-y-auto",-850082938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",((waiting_QMARK_)?"o-50":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(function (){var x__4222__auto__ = (max_height - (32));
var y__4223__auto__ = (300);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()], null)], null),((waiting_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".progress-indeterminate",".progress-indeterminate",1029899870)], null):null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__50901,map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (i,p__50903){
var map__50904 = p__50903;
var map__50904__$1 = (((((!((map__50904 == null))))?(((((map__50904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50904):map__50904);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nowrap.flex.items-center.pointer.items-stretch",".nowrap.flex.items-center.pointer.items-stretch",-1668740087),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"key","key",-1516042587),(offset + i),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__50904,map__50904__$1,value,label,G__50901,map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),i);
});})(map__50904,map__50904__$1,value,label,G__50901,map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
,new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,selection))?"bg-darken-lightly":null),(cljs.core.truth_(numbered_QMARK_)?null:" pl2")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid rgba(0,0,0,0.05)"], null),trigger_event,((function (map__50904,map__50904__$1,value,label,G__50901,map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (p1__50838_SHARP_){
(on_select_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_select_BANG_.cljs$core$IFn$_invoke$arity$1(value) : on_select_BANG_.call(null,value));

return maria.util.stop_BANG_(p1__50838_SHARP_);
});})(map__50904,map__50904__$1,value,label,G__50901,map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
]),(cljs.core.truth_((function (){var and__4120__auto__ = numbered_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(mobile_QMARK_);
} else {
return and__4120__auto__;
}
})())?legend((((i < (9)))?(i + (1)):" ")):null),label], null);
});})(G__50901,map__50897,map__50897__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__50895,map__50895__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(PAGE_SIZE,items__$2))], null);
return (maria.views.error.error_boundary.cljs$core$IFn$_invoke$arity$2 ? maria.views.error.error_boundary.cljs$core$IFn$_invoke$arity$2(G__50901,G__50902) : maria.views.error.error_boundary.call(null,G__50901,G__50902));
})());
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),(function (p__50906){
var map__50907 = p__50906;
var map__50907__$1 = (((((!((map__50907 == null))))?(((((map__50907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50907):map__50907);
var this$ = map__50907__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50907__$1,new cljs.core.Keyword(null,"props","props",453281727));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50907__$1,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(props,prev_props)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"default-selection","default-selection",-697850865).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());

if((!((props == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc,new cljs.core.Keyword(null,"last-items","last-items",-1217586866),props);
} else {
}
} else {
}

var map__50909 = this$;
var map__50909__$1 = (((((!((map__50909 == null))))?(((((map__50909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50909):map__50909);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
var on_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"on-selection","on-selection",1657604405));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),prev_state)){
var map__50911 = cljs.core.deref(state);
var map__50911__$1 = (((((!((map__50911 == null))))?(((((map__50911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50911):map__50911);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50911__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50911__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50911__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var item_i = (selection + (page * PAGE_SIZE));
if(cljs.core.truth_((function (){var and__4120__auto__ = on_selection;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(prev_state));
} else {
return and__4120__auto__;
}
})())){
var G__50931 = (((((item_i > (-1))) && ((item_i < cljs.core.count(items)))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,item_i)):null);
return (on_selection.cljs$core$IFn$_invoke$arity$1 ? on_selection.cljs$core$IFn$_invoke$arity$1(G__50931) : on_selection.call(null,G__50931));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (p1__50836_SHARP_){
return lark.commands.exec.set_context_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),p1__50836_SHARP_,new cljs.core.Keyword("modal","numbered-dropdown","modal/numbered-dropdown",-723716167),new cljs.core.Keyword(null,"numbered?","numbered?",-435212600).cljs$core$IFn$_invoke$arity$1(p1__50836_SHARP_)], null));
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (){
return lark.commands.exec.set_context_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),null,new cljs.core.Keyword("modal","numbered-dropdown","modal/numbered-dropdown",-723716167),null], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.dropdown/numbered-list"})], null),(function maria$views$dropdown$numbered_list50840(props50841){
var G__50839 = this;
chia.view.class$.Component.call(G__50839,props50841);

var obj50935_51091 = G__50839;
var obj50936_51092 = (((!((obj50935_51091 == null))))?obj50935_51091:({}));
obj50936_51092.state = ({});


chia.view.class$.populate_initial_state_BANG_(G__50839,props50841,((function (G__50839){
return (function (p__50941){
var map__50942 = p__50941;
var map__50942__$1 = (((((!((map__50942 == null))))?(((((map__50942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50942):map__50942);
var this$ = map__50942__$1;
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50942__$1,new cljs.core.Keyword("ui","max-height","ui/max-height",-612568256));
var on_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50942__$1,new cljs.core.Keyword(null,"on-selection","on-selection",1657604405));
var default_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50942__$1,new cljs.core.Keyword(null,"default-selection","default-selection",-697850865));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50942__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.truth_((function (){var and__4120__auto__ = default_selection;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = on_selection;
if(cljs.core.truth_(and__4120__auto____$1)){
return (((!((default_selection < (0))))) && ((cljs.core.bounded_count((default_selection + (1)),items) >= (default_selection + (1)))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var G__50944_51093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,default_selection);
var G__50944_51094__$1 = (((G__50944_51093 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__50944_51093));
if((G__50944_51094__$1 == null)){
} else {
(on_selection.cljs$core$IFn$_invoke$arity$1 ? on_selection.cljs$core$IFn$_invoke$arity$1(G__50944_51094__$1) : on_selection.call(null,G__50944_51094__$1));
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),(function (){var or__4131__auto__ = default_selection;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877),(cljs.core.truth_(max_height)?(function (){var x__4219__auto__ = (function (){var x__4222__auto__ = Math.floor(((max_height - (32)) / (30)));
var y__4223__auto__ = (9);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4220__auto__ = (1);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})():maria.views.dropdown.DEFAULT_PAGE_SIZE),new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
});})(G__50839))
);

return G__50839;
}));
