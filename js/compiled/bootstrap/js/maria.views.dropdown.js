goog.provide('maria.views.dropdown');
goog.require('cljs.core');
goog.require('chia.view');
goog.require('lark.commands.exec');
goog.require('lark.commands.registry');
goog.require('maria.util');
goog.require('chia.db');
goog.require('maria.views.icons');
goog.require('maria.views.error');
lark.commands.registry.register_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"doc","doc",1913296891)],[new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),null,true,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Up"], null),new cljs.core.Keyword("dropdown","up","dropdown/up",-642952992),(function maria$views$dropdown$dropdown_up(p__99770){
var map__99771 = p__99770;
var map__99771__$1 = (((((!((map__99771 == null))))?(((((map__99771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99771):map__99771);
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99771__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
return dropdown.up();
}),(9),null]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Up"], null));
lark.commands.registry.register_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"doc","doc",1913296891)],[new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),null,true,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Down"], null),new cljs.core.Keyword("dropdown","down","dropdown/down",-276038479),(function maria$views$dropdown$dropdown_down(p__99777){
var map__99778 = p__99777;
var map__99778__$1 = (((((!((map__99778 == null))))?(((((map__99778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99778):map__99778);
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99778__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
return dropdown.down();
}),(9),null]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Down"], null));
lark.commands.registry.register_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"doc","doc",1913296891)],[(function (p__99782){
var map__99783 = p__99782;
var map__99783__$1 = (((((!((map__99783 == null))))?(((((map__99783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99783):map__99783);
var context = map__99783__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99783__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99783__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
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
}),null,true,(function (p__99788){
var map__99789 = p__99788;
var map__99789__$1 = (((((!((map__99789 == null))))?(((((map__99789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99789):map__99789);
var context = map__99789__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99789__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99789__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
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
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Enter"], null),new cljs.core.Keyword("dropdown","select","dropdown/select",983847088),(function maria$views$dropdown$dropdown_select(p__99794){
var map__99795 = p__99794;
var map__99795__$1 = (((((!((map__99795 == null))))?(((((map__99795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99795):map__99795);
var dropdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99795__$1,new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716));
return dropdown.select();
}),(9),null]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Enter"], null));
maria.views.dropdown.DEFAULT_PAGE_SIZE = (9);
maria.views.dropdown.page_count = (function maria$views$dropdown$page_count(item_count,page_size){
return Math.ceil((item_count / page_size));
});
maria.views.dropdown.numbered_list = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({down:(function (){var v__52352__auto__ = (function (p__99810){
var map__99813 = p__99810;
var map__99813__$1 = (((((!((map__99813 == null))))?(((((map__99813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99813):map__99813);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99813__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99813__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.seq(items)){
var map__99820 = cljs.core.deref(state);
var map__99820__$1 = (((((!((map__99820 == null))))?(((((map__99820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99820):map__99820);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99820__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99820__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99820__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var item_count = cljs.core.count(items);
var page_count = maria.views.dropdown.page_count(item_count,PAGE_SIZE);
var last_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,(page_count - (1)));
var current_max_selection = ((last_page_QMARK_)?((item_count - (page * PAGE_SIZE)) - (1)):(PAGE_SIZE - (1)));
var vec__99821 = (((selection >= current_max_selection))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((last_page_QMARK_)?(0):(page + (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4222__auto__ = (selection + (1));
var y__4223__auto__ = (PAGE_SIZE - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),page], null));
var selection__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99821,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99821,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),selection__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page","page",849072397),page__$1], 0));
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__52352__auto__)){
return ((function (v__52352__auto__){
return (function() { 
var G__100071__delegate = function (args__52353__auto__){
var this__52354__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__52352__auto__,this__52354__auto__,args__52353__auto__);
};
var G__100071 = function (var_args){
var args__52353__auto__ = null;
if (arguments.length > 0) {
var G__100075__i = 0, G__100075__a = new Array(arguments.length -  0);
while (G__100075__i < G__100075__a.length) {G__100075__a[G__100075__i] = arguments[G__100075__i + 0]; ++G__100075__i;}
  args__52353__auto__ = new cljs.core.IndexedSeq(G__100075__a,0,null);
} 
return G__100071__delegate.call(this,args__52353__auto__);};
G__100071.cljs$lang$maxFixedArity = 0;
G__100071.cljs$lang$applyTo = (function (arglist__100076){
var args__52353__auto__ = cljs.core.seq(arglist__100076);
return G__100071__delegate(args__52353__auto__);
});
G__100071.cljs$core$IFn$_invoke$arity$variadic = G__100071__delegate;
return G__100071;
})()
;
;})(v__52352__auto__))
} else {
return v__52352__auto__;
}
})(),selectN:(function (){var v__52352__auto__ = (function (p__99826,n){
var map__99827 = p__99826;
var map__99827__$1 = (((((!((map__99827 == null))))?(((((map__99827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99827):map__99827);
var on_select_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99827__$1,new cljs.core.Keyword(null,"on-select!","on-select!",1441641124));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99827__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99827__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var map__99829 = cljs.core.deref(state);
var map__99829__$1 = (((((!((map__99829 == null))))?(((((map__99829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99829):map__99829);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99829__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99829__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var offset = (PAGE_SIZE * page);
var n__$1 = (offset + n);
if((((n__$1 < cljs.core.count(items))) && ((n__$1 > (-1))))){
var G__99831_100092 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,n__$1));
(on_select_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_select_BANG_.cljs$core$IFn$_invoke$arity$1(G__99831_100092) : on_select_BANG_.call(null,G__99831_100092));

return true;
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__52352__auto__)){
return ((function (v__52352__auto__){
return (function() { 
var G__100093__delegate = function (args__52353__auto__){
var this__52354__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__52352__auto__,this__52354__auto__,args__52353__auto__);
};
var G__100093 = function (var_args){
var args__52353__auto__ = null;
if (arguments.length > 0) {
var G__100095__i = 0, G__100095__a = new Array(arguments.length -  0);
while (G__100095__i < G__100095__a.length) {G__100095__a[G__100095__i] = arguments[G__100095__i + 0]; ++G__100095__i;}
  args__52353__auto__ = new cljs.core.IndexedSeq(G__100095__a,0,null);
} 
return G__100093__delegate.call(this,args__52353__auto__);};
G__100093.cljs$lang$maxFixedArity = 0;
G__100093.cljs$lang$applyTo = (function (arglist__100096){
var args__52353__auto__ = cljs.core.seq(arglist__100096);
return G__100093__delegate(args__52353__auto__);
});
G__100093.cljs$core$IFn$_invoke$arity$variadic = G__100093__delegate;
return G__100093;
})()
;
;})(v__52352__auto__))
} else {
return v__52352__auto__;
}
})(),up:(function (){var v__52352__auto__ = (function (p__99832){
var map__99833 = p__99832;
var map__99833__$1 = (((((!((map__99833 == null))))?(((((map__99833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99833):map__99833);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99833__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99833__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.seq(items)){
var map__99837 = cljs.core.deref(state);
var map__99837__$1 = (((((!((map__99837 == null))))?(((((map__99837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99837):map__99837);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99837__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99837__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99837__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var item_count = cljs.core.count(items);
var vec__99838 = (((selection <= (0)))?(function (){var page__$1 = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (page - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var selection__$1 = (function (){var x__4222__auto__ = (PAGE_SIZE - (1));
var y__4223__auto__ = ((item_count - (page__$1 * PAGE_SIZE)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection__$1,page__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(selection - (1)),page], null));
var selection__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99838,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99838,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),selection__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page","page",849072397),page__$1], 0));
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__52352__auto__)){
return ((function (v__52352__auto__){
return (function() { 
var G__100119__delegate = function (args__52353__auto__){
var this__52354__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__52352__auto__,this__52354__auto__,args__52353__auto__);
};
var G__100119 = function (var_args){
var args__52353__auto__ = null;
if (arguments.length > 0) {
var G__100120__i = 0, G__100120__a = new Array(arguments.length -  0);
while (G__100120__i < G__100120__a.length) {G__100120__a[G__100120__i] = arguments[G__100120__i + 0]; ++G__100120__i;}
  args__52353__auto__ = new cljs.core.IndexedSeq(G__100120__a,0,null);
} 
return G__100119__delegate.call(this,args__52353__auto__);};
G__100119.cljs$lang$maxFixedArity = 0;
G__100119.cljs$lang$applyTo = (function (arglist__100122){
var args__52353__auto__ = cljs.core.seq(arglist__100122);
return G__100119__delegate(args__52353__auto__);
});
G__100119.cljs$core$IFn$_invoke$arity$variadic = G__100119__delegate;
return G__100119;
})()
;
;})(v__52352__auto__))
} else {
return v__52352__auto__;
}
})(),select:(function (){var v__52352__auto__ = (function (this$){
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$)));
return this$.selectN(selection);
});
if(cljs.core.fn_QMARK_(v__52352__auto__)){
return ((function (v__52352__auto__){
return (function() { 
var G__100125__delegate = function (args__52353__auto__){
var this__52354__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__52352__auto__,this__52354__auto__,args__52353__auto__);
};
var G__100125 = function (var_args){
var args__52353__auto__ = null;
if (arguments.length > 0) {
var G__100126__i = 0, G__100126__a = new Array(arguments.length -  0);
while (G__100126__i < G__100126__a.length) {G__100126__a[G__100126__i] = arguments[G__100126__i + 0]; ++G__100126__i;}
  args__52353__auto__ = new cljs.core.IndexedSeq(G__100126__a,0,null);
} 
return G__100125__delegate.call(this,args__52353__auto__);};
G__100125.cljs$lang$maxFixedArity = 0;
G__100125.cljs$lang$applyTo = (function (arglist__100127){
var args__52353__auto__ = cljs.core.seq(arglist__100127);
return G__100125__delegate(args__52353__auto__);
});
G__100125.cljs$core$IFn$_invoke$arity$variadic = G__100125__delegate;
return G__100125;
})()
;
;})(v__52352__auto__))
} else {
return v__52352__auto__;
}
})()}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$views$dropdown$__numbered_list(p__99866){
var map__99868 = p__99866;
var map__99868__$1 = (((((!((map__99868 == null))))?(((((map__99868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99868):map__99868);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99868__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var on_select_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99868__$1,new cljs.core.Keyword(null,"on-select!","on-select!",1441641124));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99868__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99868__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99868__$1,new cljs.core.Keyword("ui","max-height","ui/max-height",-612568256));
var numbered_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99868__$1,new cljs.core.Keyword(null,"numbered?","numbered?",-435212600));
return chia.view.props.to_element((function (){var map__99876 = cljs.core.deref(state);
var map__99876__$1 = (((((!((map__99876 == null))))?(((((map__99876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99876):map__99876);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99876__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99876__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99876__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var waiting_QMARK_ = (items == null);
var mobile_QMARK_ = (function (){var G__99895 = new cljs.core.Keyword(null,"UI","UI",1941965563);
var G__99896 = new cljs.core.Keyword(null,"mobile-width?","mobile-width?",-597074049);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__99895,G__99896) : chia.db.get.call(null,G__99895,G__99896));
})();
var legend = ((function (map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (p1__99803_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.o-70.monospace.gray.mh2.ph1.inline-flex.items-center.f7","span.o-70.monospace.gray.mh2.ph1.inline-flex.items-center.f7",584316622),p1__99803_SHARP_], null);
});})(map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
;
var items__$1 = ((waiting_QMARK_)?new cljs.core.Keyword(null,"last-items","last-items",-1217586866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)):items);
var trigger_event = (cljs.core.truth_(mobile_QMARK_)?new cljs.core.Keyword(null,"on-click","on-click",1632826543):new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var offset = (page * PAGE_SIZE);
var less_QMARK_ = (page > (0));
var more_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.bounded_count(((offset + PAGE_SIZE) + (1)),items__$1),((offset + PAGE_SIZE) + (1)));
var page_count = maria.views.dropdown.page_count(cljs.core.count(items__$1),PAGE_SIZE);
var items__$2 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(offset,items__$1);
var G__99908 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["View error: numbered-list"], 0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed","fixed",-562004358)], null);
});})(map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
], null);
var G__99909 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.br1.overflow-y-auto","div.bg-white.br1.overflow-y-auto",-850082938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",((waiting_QMARK_)?"o-50":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(function (){var x__4222__auto__ = (max_height - (32));
var y__4223__auto__ = (300);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()], null)], null),((waiting_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".progress-indeterminate",".progress-indeterminate",1029899870)], null):null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__99908,map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (i,p__99914){
var map__99916 = p__99914;
var map__99916__$1 = (((((!((map__99916 == null))))?(((((map__99916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99916):map__99916);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99916__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99916__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nowrap.flex.items-center.pointer.items-stretch",".nowrap.flex.items-center.pointer.items-stretch",-1668740087),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"key","key",-1516042587),(offset + i),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__99916,map__99916__$1,value,label,G__99908,map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),i);
});})(map__99916,map__99916__$1,value,label,G__99908,map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
,new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,selection))?"bg-darken-lightly":null),(cljs.core.truth_(numbered_QMARK_)?null:" pl2")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid rgba(0,0,0,0.05)"], null),trigger_event,((function (map__99916,map__99916__$1,value,label,G__99908,map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_){
return (function (p1__99804_SHARP_){
(on_select_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_select_BANG_.cljs$core$IFn$_invoke$arity$1(value) : on_select_BANG_.call(null,value));

return maria.util.stop_BANG_(p1__99804_SHARP_);
});})(map__99916,map__99916__$1,value,label,G__99908,map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
]),(cljs.core.truth_((function (){var and__4120__auto__ = numbered_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(mobile_QMARK_);
} else {
return and__4120__auto__;
}
})())?legend((((i < (9)))?(i + (1)):" ")):null),label], null);
});})(G__99908,map__99876,map__99876__$1,selection,page,PAGE_SIZE,waiting_QMARK_,mobile_QMARK_,legend,items__$1,trigger_event,offset,less_QMARK_,more_QMARK_,page_count,items__$2,map__99868,map__99868__$1,state,on_select_BANG_,items,class$,max_height,numbered_QMARK_))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(PAGE_SIZE,items__$2))], null);
return (maria.views.error.error_boundary.cljs$core$IFn$_invoke$arity$2 ? maria.views.error.error_boundary.cljs$core$IFn$_invoke$arity$2(G__99908,G__99909) : maria.views.error.error_boundary.call(null,G__99908,G__99909));
})());
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),(function (p__99923){
var map__99924 = p__99923;
var map__99924__$1 = (((((!((map__99924 == null))))?(((((map__99924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99924):map__99924);
var this$ = map__99924__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99924__$1,new cljs.core.Keyword(null,"props","props",453281727));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99924__$1,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297));
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

var map__99932 = this$;
var map__99932__$1 = (((((!((map__99932 == null))))?(((((map__99932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99932):map__99932);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99932__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99932__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
var on_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99932__$1,new cljs.core.Keyword(null,"on-selection","on-selection",1657604405));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99932__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),prev_state)){
var map__99939 = cljs.core.deref(state);
var map__99939__$1 = (((((!((map__99939 == null))))?(((((map__99939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99939):map__99939);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99939__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99939__$1,new cljs.core.Keyword(null,"page","page",849072397));
var PAGE_SIZE = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99939__$1,new cljs.core.Keyword(null,"PAGE_SIZE","PAGE_SIZE",-2069099877));
var item_i = (selection + (page * PAGE_SIZE));
if(cljs.core.truth_((function (){var and__4120__auto__ = on_selection;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(prev_state));
} else {
return and__4120__auto__;
}
})())){
var G__99951 = (((((item_i > (-1))) && ((item_i < cljs.core.count(items)))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,item_i)):null);
return (on_selection.cljs$core$IFn$_invoke$arity$1 ? on_selection.cljs$core$IFn$_invoke$arity$1(G__99951) : on_selection.call(null,G__99951));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (p1__99802_SHARP_){
return lark.commands.exec.set_context_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),p1__99802_SHARP_,new cljs.core.Keyword("modal","numbered-dropdown","modal/numbered-dropdown",-723716167),new cljs.core.Keyword(null,"numbered?","numbered?",-435212600).cljs$core$IFn$_invoke$arity$1(p1__99802_SHARP_)], null));
}),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (){
return lark.commands.exec.set_context_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("modal","dropdown","modal/dropdown",1310362716),null,new cljs.core.Keyword("modal","numbered-dropdown","modal/numbered-dropdown",-723716167),null], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"views.dropdown/numbered-list"})], null),(function maria$views$dropdown$numbered_list99806(props99807){
var G__99805 = this;
chia.view.class$.Component.call(G__99805,props99807);

var obj99959_100166 = G__99805;
var obj99961_100167 = (((!((obj99959_100166 == null))))?obj99959_100166:({}));
obj99961_100167.state = ({});


chia.view.class$.populate_initial_state_BANG_(G__99805,props99807,((function (G__99805){
return (function (p__99975){
var map__99976 = p__99975;
var map__99976__$1 = (((((!((map__99976 == null))))?(((((map__99976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99976):map__99976);
var this$ = map__99976__$1;
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99976__$1,new cljs.core.Keyword("ui","max-height","ui/max-height",-612568256));
var on_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99976__$1,new cljs.core.Keyword(null,"on-selection","on-selection",1657604405));
var default_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99976__$1,new cljs.core.Keyword(null,"default-selection","default-selection",-697850865));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99976__$1,new cljs.core.Keyword(null,"items","items",1031954938));
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
var G__99991_100174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,default_selection);
var G__99991_100175__$1 = (((G__99991_100174 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__99991_100174));
if((G__99991_100175__$1 == null)){
} else {
(on_selection.cljs$core$IFn$_invoke$arity$1 ? on_selection.cljs$core$IFn$_invoke$arity$1(G__99991_100175__$1) : on_selection.call(null,G__99991_100175__$1));
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
});})(G__99805))
);

return G__99805;
}));

//# sourceMappingURL=maria.views.dropdown.js.map
