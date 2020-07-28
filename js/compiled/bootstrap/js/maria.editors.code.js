goog.provide('maria.editors.code');
goog.require('cljs.core');
goog.require('lark.editors.codemirror');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$addon$selection$mark_selection=shadow.js.require("module$node_modules$codemirror$addon$selection$mark_selection", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
goog.require('chia.view');
goog.require('maria.util');
goog.require('maria.views.floating.float_ui');
goog.require('lark.editor');
goog.require('lark.tree.core');
goog.require('maria.live.ns_utils');
goog.require('maria.views.dropdown');
goog.require('maria.views.bottom_bar');
goog.require('lark.structure.edit');
goog.require('goog.functions');
goog.require('fast_zip.core');
goog.require('lark.tree.range');
maria.editors.code.eldoc_view = (function maria$editors$code$eldoc_view(sym){
var G__41923 = sym;
var G__41923__$1 = (((G__41923 == null))?null:maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$1(G__41923));
if((G__41923__$1 == null)){
return null;
} else {
return maria.views.bottom_bar.ShowVar(G__41923__$1);
}
});
maria.editors.code.update_completions_BANG_ = (function (){var G__41939 = (function() { 
var G__42249__delegate = function (p__41941,p__41942){
var map__41943 = p__41941;
var map__41943__$1 = (((((!((map__41943 == null))))?(((((map__41943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41943):map__41943);
var editor = map__41943__$1;
var map__41944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41943__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__41944__$1 = (((((!((map__41944 == null))))?(((((map__41944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41944):map__41944);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41944__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41944__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var vec__41945 = p__41942;
var hide_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41945,(0),null);
var temp__5720__auto__ = (function (){var G__41971 = lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$2(pos,loc);
if((G__41971 == null)){
return null;
} else {
return fast_zip.core.node(G__41971);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
var temp__5718__auto__ = (function (){var and__4120__auto__ = cljs.core.not(hide_QMARK_);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not(editor.somethingSelected());
if(and__4120__auto____$1){
var and__4120__auto____$2 = node;
if(cljs.core.truth_(and__4120__auto____$2)){
var and__4120__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"right","right",-452581833)),lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"left","left",-399115937)));
if(and__4120__auto____$3){
return maria.live.ns_utils.completion_data(node);
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var completion_data = temp__5718__auto__;
return maria.views.floating.float_ui.floating_view_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),maria.views.dropdown.numbered_list,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-selection","on-selection",1657604405),((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_){
return (function (p__41994){
var vec__41995 = p__41994;
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41995,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41995,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41995,(2),null);
var G__41999 = maria.editors.code.eldoc_view(full_name);
if((G__41999 == null)){
return null;
} else {
return maria.views.bottom_bar.add_bottom_bar_BANG_(new cljs.core.Keyword("eldoc","completion","eldoc/completion",-618626045),G__41999);
}
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_))
,new cljs.core.Keyword(null,"class","class",-2030961996),"shadow-4 bg-white",new cljs.core.Keyword(null,"on-select!","on-select!",1441641124),((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_){
return (function (p__42002){
var vec__42003 = p__42002;
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42003,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42003,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42003,(2),null);
maria.views.floating.float_ui.clear_BANG_();

return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,completion,node);
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_))
,new cljs.core.Keyword(null,"select-on-enter","select-on-enter",1969560213),true,new cljs.core.Keyword(null,"items","items",1031954938),(function (){var iter__4523__auto__ = ((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_){
return (function maria$editors$code$iter__42019(s__42020){
return (new cljs.core.LazySeq(null,((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_){
return (function (){
var s__42020__$1 = s__42020;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42020__$1);
if(temp__5720__auto____$1){
var s__42020__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42020__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42020__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42026 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42025 = (0);
while(true){
if((i__42025 < size__4522__auto__)){
var vec__42041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42025);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42041,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42041,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42041,(2),null);
cljs.core.chunk_append(b__42026,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,completion,full_name], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.w-100.monospace.f7.ma2.ml0",".flex.items-center.w-100.monospace.f7.ma2.ml0",1306959589),alias,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.pl3",".gray.pl3",-275284910),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.namespace(full_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return full_name;
}
})())], null)], null)], null));

var G__42331 = (i__42025 + (1));
i__42025 = G__42331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42026),maria$editors$code$iter__42019(cljs.core.chunk_rest(s__42020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42026),null);
}
} else {
var vec__42050 = cljs.core.first(s__42020__$2);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42050,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42050,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42050,(2),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,completion,full_name], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.w-100.monospace.f7.ma2.ml0",".flex.items-center.w-100.monospace.f7.ma2.ml0",1306959589),alias,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.pl3",".gray.pl3",-275284910),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.namespace(full_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return full_name;
}
})())], null)], null)], null),maria$editors$code$iter__42019(cljs.core.rest(s__42020__$2)));
}
} else {
return null;
}
break;
}
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_))
,null,null));
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__41943,map__41943__$1,editor,map__41944,map__41944__$1,loc,pos,vec__41945,hide_QMARK_))
;
return iter__4523__auto__(maria.live.ns_utils.ns_completions.cljs$core$IFn$_invoke$arity$1(completion_data));
})()], null),new cljs.core.Keyword("float","pos","float/pos",-223934032),maria.util.rect__GT_abs_pos(lark.editor.cursor_coords(editor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"bottom","bottom",-1550509018)], null)),new cljs.core.Keyword("float","offset","float/offset",349967907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)], null));
} else {
maria.views.floating.float_ui.clear_BANG_();

return maria.views.bottom_bar.retract_bottom_bar_BANG_(new cljs.core.Keyword("eldoc","completion","eldoc/completion",-618626045));
}
} else {
return null;
}
};
var G__42249 = function (p__41941,var_args){
var p__41942 = null;
if (arguments.length > 1) {
var G__42361__i = 0, G__42361__a = new Array(arguments.length -  1);
while (G__42361__i < G__42361__a.length) {G__42361__a[G__42361__i] = arguments[G__42361__i + 1]; ++G__42361__i;}
  p__41942 = new cljs.core.IndexedSeq(G__42361__a,0,null);
} 
return G__42249__delegate.call(this,p__41941,p__41942);};
G__42249.cljs$lang$maxFixedArity = 1;
G__42249.cljs$lang$applyTo = (function (arglist__42362){
var p__41941 = cljs.core.first(arglist__42362);
var p__41942 = cljs.core.rest(arglist__42362);
return G__42249__delegate(p__41941,p__41942);
});
G__42249.cljs$core$IFn$_invoke$arity$variadic = G__42249__delegate;
return G__42249;
})()
;
var G__41940 = (75);
return goog.functions.debounce(G__41939,G__41940);
})();
maria.editors.code.options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyMap","keyMap",945500512),new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),new cljs.core.Keyword(null,"configureMouse","configureMouse",580153508),new cljs.core.Keyword(null,"styleSelectedText","styleSelectedText",1005912522),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cursorScrollMargin","cursorScrollMargin",-1121435954),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"magicEdit","magicEdit",-339149932),new cljs.core.Keyword(null,"magicBrackets","magicBrackets",-607807914),new cljs.core.Keyword(null,"flattenSpans","flattenSpans",1538601693),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941)],["default",true,(function (cm,repeat,e){
return ({"moveOnDrag": (cljs.core.truth_(e.shiftKey)?false:true)});
}),true,"clojure",(40),"maria-light",true,true,true,false]);
maria.editors.code.reset_value_BANG_ = (function maria$editors$code$reset_value_BANG_(p__42091){
var map__42092 = p__42091;
var map__42092__$1 = (((((!((map__42092 == null))))?(((((map__42092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42092):map__42092);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42092__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42092__$1,new cljs.core.Keyword(null,"value","value",305978217));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42092__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return lark.editors.codemirror.set_value_and_refresh_BANG_(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_value;
}
})());
});
maria.editors.code.CodeView = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (p__42136){
var map__42137 = p__42136;
var map__42137__$1 = (((((!((map__42137 == null))))?(((((map__42137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42137):map__42137);
var this$ = map__42137__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var error_ranges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"error-ranges","error-ranges",2077002208));
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var on_selection_activity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"on-selection-activity","on-selection-activity",645321921));
var cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"value","value",305978217));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var keymap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"keymap","keymap",-499605268));
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var before_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"before-change","before-change",-514763340));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var auto_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231));
var dom_node = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var editor = (function (){var G__42146 = dom_node;
var G__42147 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cm_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_value;
}
})())], null),(function (){var G__42148 = maria.editors.code.options;
var G__42148__$1 = (cljs.core.truth_(keymap)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42148,new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),cljs.core.clj__GT_js(keymap)):G__42148);
if(cljs.core.truth_(read_only_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(G__42148__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985)], null)),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tabindex","tabindex",338877510),(-1)], 0));
} else {
return G__42148__$1;
}
})()], 0)));
return module$node_modules$codemirror$lib$codemirror(G__42146,G__42147);
})();
cljs.core.add_watch(editor,new cljs.core.Keyword(null,"maria","maria",-327259398),((function (dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (editor__$1,p__42149,p__42150){
var map__42151 = p__42149;
var map__42151__$1 = (((((!((map__42151 == null))))?(((((map__42151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42151):map__42151);
var map__42152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__42152__$1 = (((((!((map__42152 == null))))?(((((map__42152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42152):map__42152);
var prev_loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42152__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var prev_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42152__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__42153 = p__42150;
var map__42153__$1 = (((((!((map__42153 == null))))?(((((map__42153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42153):map__42153);
var map__42154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42153__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__42154__$1 = (((((!((map__42154 == null))))?(((((map__42154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42154):map__42154);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42154__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42154__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return setTimeout(((function (map__42151,map__42151__$1,map__42152,map__42152__$1,prev_loc,prev_pos,map__42153,map__42153__$1,map__42154,map__42154__$1,loc,pos,dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (){
if(cljs.core.truth_(editor__$1.hasFocus())){
var G__42159_42430 = lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$2(loc,pos);
var G__42159_42431__$1 = (((G__42159_42430 == null))?null:maria.editors.code.eldoc_view(G__42159_42430));
if((G__42159_42431__$1 == null)){
} else {
maria.views.bottom_bar.add_bottom_bar_BANG_(new cljs.core.Keyword("eldoc","cursor","eldoc/cursor",512934939),G__42159_42431__$1);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,prev_pos)){
return null;
} else {
var G__42164 = editor__$1;
var G__42165 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(prev_pos))) || ((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(pos) < new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(prev_pos))));
return (maria.editors.code.update_completions_BANG_.cljs$core$IFn$_invoke$arity$2 ? maria.editors.code.update_completions_BANG_.cljs$core$IFn$_invoke$arity$2(G__42164,G__42165) : maria.editors.code.update_completions_BANG_.call(null,G__42164,G__42165));
}
} else {
return null;
}
});})(map__42151,map__42151__$1,map__42152,map__42152__$1,prev_loc,prev_pos,map__42153,map__42153__$1,map__42154,map__42154__$1,loc,pos,dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
,(0));
});})(dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
);

editor.on("blur",((function (dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (){
return maria.views.bottom_bar.retract_bottom_bar_BANG_(new cljs.core.Keyword("eldoc","cursor","eldoc/cursor",512934939));
});})(dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
);

editor.view = this$;

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(editor,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),this$);

editor.setValueAndRefresh = ((function (dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (p1__42109_SHARP_){
lark.editors.codemirror.set_preserve_cursor_BANG_(editor,p1__42109_SHARP_);

return editor.refresh();
});})(dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
;

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"editor","editor",-989377770),editor);

if(cljs.core.truth_(read_only_QMARK_)){
} else {
maria.util.handle_captured_events(this$);

if(cljs.core.truth_(on_mount)){
(on_mount.cljs$core$IFn$_invoke$arity$2 ? on_mount.cljs$core$IFn$_invoke$arity$2(editor,this$) : on_mount.call(null,editor,this$));
} else {
}

if(cljs.core.truth_(on_update)){
editor.on("change",((function (dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (p1__42113_SHARP_){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-update","on-update",1680216496),p1__42113_SHARP_.getValue()], 0));

var G__42166 = p1__42113_SHARP_.getValue();
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__42166) : on_update.call(null,G__42166));
});})(dom_node,editor,map__42137,map__42137__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
);
} else {
}

if(cljs.core.truth_(before_change)){
editor.on("beforeChange",before_change);
} else {
}

if(cljs.core.truth_(on_selection_activity)){
editor.on("cursorActivity",on_selection_activity);
} else {
}
}

if(cljs.core.truth_(auto_focus)){
editor.focus();
} else {
}

return lark.editors.codemirror.mark_ranges_BANG_(editor,error_ranges,({"className": "error-text"}));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__42167){
var map__42168 = p__42167;
var map__42168__$1 = (((((!((map__42168 == null))))?(((((map__42168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42168):map__42168);
var this$ = map__42168__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42168__$1,new cljs.core.Keyword(null,"value","value",305978217));
var editor_42438 = this$.getEditor();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,editor_42438.getValue())){
this$.resetValue();
} else {
}

return false;
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$editors$code$__CodeView(p__42170){
var map__42171 = p__42170;
var map__42171__$1 = (((((!((map__42171 == null))))?(((((map__42171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42171):map__42171);
var this$ = map__42171__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword("view","props","view/props",449562012));
return chia.view.props.to_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".cursor-text",".cursor-text",1681513109),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__42171,map__42171__$1,this$,state,props){
return (function (p1__42115_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42115_SHARP_.target,p1__42115_SHARP_.currentTarget)){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var G__42196 = editor;
G__42196.setCursor(editor.lineCount(),(0));

G__42196.focus();

return G__42196;
} else {
return null;
}
});})(map__42171,map__42171__$1,this$,state,props))
,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),""], null)], null)], 0))], null));
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({getEditor:(function (){var v__41727__auto__ = (function (p1__42114_SHARP_){
return new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(p1__42114_SHARP_)));
});
if(cljs.core.fn_QMARK_(v__41727__auto__)){
return ((function (v__41727__auto__){
return (function() { 
var G__42442__delegate = function (args__41728__auto__){
var this__41729__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__41727__auto__,this__41729__auto__,args__41728__auto__);
};
var G__42442 = function (var_args){
var args__41728__auto__ = null;
if (arguments.length > 0) {
var G__42452__i = 0, G__42452__a = new Array(arguments.length -  0);
while (G__42452__i < G__42452__a.length) {G__42452__a[G__42452__i] = arguments[G__42452__i + 0]; ++G__42452__i;}
  args__41728__auto__ = new cljs.core.IndexedSeq(G__42452__a,0,null);
} 
return G__42442__delegate.call(this,args__41728__auto__);};
G__42442.cljs$lang$maxFixedArity = 0;
G__42442.cljs$lang$applyTo = (function (arglist__42453){
var args__41728__auto__ = cljs.core.seq(arglist__42453);
return G__42442__delegate(args__41728__auto__);
});
G__42442.cljs$core$IFn$_invoke$arity$variadic = G__42442__delegate;
return G__42442;
})()
;
;})(v__41727__auto__))
} else {
return v__41727__auto__;
}
})(),setValue:(function (){var v__41727__auto__ = (function (p__42215){
var map__42216 = p__42215;
var map__42216__$1 = (((((!((map__42216 == null))))?(((((map__42216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42216):map__42216);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5720__auto__ = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5720__auto__)){
var editor = temp__5720__auto__;
return lark.editors.codemirror.set_preserve_cursor_BANG_(editor,value);
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__41727__auto__)){
return ((function (v__41727__auto__){
return (function() { 
var G__42454__delegate = function (args__41728__auto__){
var this__41729__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__41727__auto__,this__41729__auto__,args__41728__auto__);
};
var G__42454 = function (var_args){
var args__41728__auto__ = null;
if (arguments.length > 0) {
var G__42455__i = 0, G__42455__a = new Array(arguments.length -  0);
while (G__42455__i < G__42455__a.length) {G__42455__a[G__42455__i] = arguments[G__42455__i + 0]; ++G__42455__i;}
  args__41728__auto__ = new cljs.core.IndexedSeq(G__42455__a,0,null);
} 
return G__42454__delegate.call(this,args__41728__auto__);};
G__42454.cljs$lang$maxFixedArity = 0;
G__42454.cljs$lang$applyTo = (function (arglist__42456){
var args__41728__auto__ = cljs.core.seq(arglist__42456);
return G__42454__delegate(args__41728__auto__);
});
G__42454.cljs$core$IFn$_invoke$arity$variadic = G__42454__delegate;
return G__42454;
})()
;
;})(v__41727__auto__))
} else {
return v__41727__auto__;
}
})(),resetValue:(function (){var v__41727__auto__ = (function (p__42226){
var map__42227 = p__42226;
var map__42227__$1 = (((((!((map__42227 == null))))?(((((map__42227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42227):map__42227);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42227__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42227__$1,new cljs.core.Keyword(null,"value","value",305978217));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42227__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)).setValueAndRefresh((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_value;
}
})());
});
if(cljs.core.fn_QMARK_(v__41727__auto__)){
return ((function (v__41727__auto__){
return (function() { 
var G__42472__delegate = function (args__41728__auto__){
var this__41729__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__41727__auto__,this__41729__auto__,args__41728__auto__);
};
var G__42472 = function (var_args){
var args__41728__auto__ = null;
if (arguments.length > 0) {
var G__42473__i = 0, G__42473__a = new Array(arguments.length -  0);
while (G__42473__i < G__42473__a.length) {G__42473__a[G__42473__i] = arguments[G__42473__i + 0]; ++G__42473__i;}
  args__41728__auto__ = new cljs.core.IndexedSeq(G__42473__a,0,null);
} 
return G__42472__delegate.call(this,args__41728__auto__);};
G__42472.cljs$lang$maxFixedArity = 0;
G__42472.cljs$lang$applyTo = (function (arglist__42474){
var args__41728__auto__ = cljs.core.seq(arglist__42474);
return G__42472__delegate(args__41728__auto__);
});
G__42472.cljs$core$IFn$_invoke$arity$variadic = G__42472__delegate;
return G__42472;
})()
;
;})(v__41727__auto__))
} else {
return v__41727__auto__;
}
})()}),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"editors.code/CodeView"})], null),(function maria$editors$code$CodeView42130(props42131){
var G__42129 = this;
chia.view.class$.Component.call(G__42129,props42131);

var obj42229_42475 = G__42129;
var obj42230_42476 = (((!((obj42229_42475 == null))))?obj42229_42475:({}));
obj42230_42476.state = ({});



return G__42129;
}));
maria.editors.code.viewer = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"editors.code/viewer"}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$editors$code$__viewer(p__42238,source){
var map__42239 = p__42238;
var map__42239__$1 = (((((!((map__42239 == null))))?(((((map__42239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42239):map__42239);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42239__$1,new cljs.core.Keyword("view","props","view/props",449562012));
return chia.view.props.to_element((function (){var G__42242 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),true,new cljs.core.Keyword(null,"value","value",305978217),source], null),props], 0));
return (maria.editors.code.CodeView.cljs$core$IFn$_invoke$arity$1 ? maria.editors.code.CodeView.cljs$core$IFn$_invoke$arity$1(G__42242) : maria.editors.code.CodeView.call(null,G__42242));
})());
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$editors$code$viewer42236(props42237){
var G__42235 = this;
chia.view.class$.Component.call(G__42235,props42237);

var obj42243_42477 = G__42235;
var obj42244_42478 = (((!((obj42243_42477 == null))))?obj42243_42477:({}));
obj42244_42478.state = ({});



return G__42235;
}));

//# sourceMappingURL=maria.editors.code.js.map
