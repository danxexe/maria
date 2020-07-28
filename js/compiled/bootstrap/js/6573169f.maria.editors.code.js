goog.provide('maria.editors.code');
maria.editors.code.eldoc_view = (function maria$editors$code$eldoc_view(sym){
var G__51408 = sym;
var G__51408__$1 = (((G__51408 == null))?null:maria.live.ns_utils.resolve_var_or_special.cljs$core$IFn$_invoke$arity$1(G__51408));
if((G__51408__$1 == null)){
return null;
} else {
return maria.views.bottom_bar.ShowVar(G__51408__$1);
}
});
maria.editors.code.update_completions_BANG_ = (function (){var G__51409 = (function() { 
var G__51508__delegate = function (p__51411,p__51412){
var map__51413 = p__51411;
var map__51413__$1 = (((((!((map__51413 == null))))?(((((map__51413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51413):map__51413);
var editor = map__51413__$1;
var map__51414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51413__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51414__$1 = (((((!((map__51414 == null))))?(((((map__51414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51414):map__51414);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51414__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51414__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var vec__51415 = p__51412;
var hide_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51415,(0),null);
var temp__5720__auto__ = (function (){var G__51421 = lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$2(pos,loc);
if((G__51421 == null)){
return null;
} else {
return fast_zip.core.node(G__51421);
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
return maria.views.floating.float_ui.floating_view_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),maria.views.dropdown.numbered_list,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-selection","on-selection",1657604405),((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_){
return (function (p__51422){
var vec__51423 = p__51422;
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51423,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51423,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51423,(2),null);
var G__51426 = maria.editors.code.eldoc_view(full_name);
if((G__51426 == null)){
return null;
} else {
return maria.views.bottom_bar.add_bottom_bar_BANG_(new cljs.core.Keyword("eldoc","completion","eldoc/completion",-618626045),G__51426);
}
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_))
,new cljs.core.Keyword(null,"class","class",-2030961996),"shadow-4 bg-white",new cljs.core.Keyword(null,"on-select!","on-select!",1441641124),((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_){
return (function (p__51427){
var vec__51428 = p__51427;
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51428,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51428,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51428,(2),null);
maria.views.floating.float_ui.clear_BANG_();

return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,completion,node);
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_))
,new cljs.core.Keyword(null,"select-on-enter","select-on-enter",1969560213),true,new cljs.core.Keyword(null,"items","items",1031954938),(function (){var iter__4523__auto__ = ((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_){
return (function maria$editors$code$iter__51431(s__51432){
return (new cljs.core.LazySeq(null,((function (completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_){
return (function (){
var s__51432__$1 = s__51432;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__51432__$1);
if(temp__5720__auto____$1){
var s__51432__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51432__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51432__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51434 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51433 = (0);
while(true){
if((i__51433 < size__4522__auto__)){
var vec__51435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51433);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51435,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51435,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51435,(2),null);
cljs.core.chunk_append(b__51434,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,completion,full_name], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.w-100.monospace.f7.ma2.ml0",".flex.items-center.w-100.monospace.f7.ma2.ml0",1306959589),alias,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.pl3",".gray.pl3",-275284910),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.namespace(full_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return full_name;
}
})())], null)], null)], null));

var G__51522 = (i__51433 + (1));
i__51433 = G__51522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51434),maria$editors$code$iter__51431(cljs.core.chunk_rest(s__51432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51434),null);
}
} else {
var vec__51438 = cljs.core.first(s__51432__$2);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51438,(0),null);
var completion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51438,(1),null);
var full_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51438,(2),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,completion,full_name], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.w-100.monospace.f7.ma2.ml0",".flex.items-center.w-100.monospace.f7.ma2.ml0",1306959589),alias,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.pl3",".gray.pl3",-275284910),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.namespace(full_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return full_name;
}
})())], null)], null)], null),maria$editors$code$iter__51431(cljs.core.rest(s__51432__$2)));
}
} else {
return null;
}
break;
}
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_))
,null,null));
});})(completion_data,temp__5718__auto__,node,temp__5720__auto__,map__51413,map__51413__$1,editor,map__51414,map__51414__$1,loc,pos,vec__51415,hide_QMARK_))
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
var G__51508 = function (p__51411,var_args){
var p__51412 = null;
if (arguments.length > 1) {
var G__51532__i = 0, G__51532__a = new Array(arguments.length -  1);
while (G__51532__i < G__51532__a.length) {G__51532__a[G__51532__i] = arguments[G__51532__i + 1]; ++G__51532__i;}
  p__51412 = new cljs.core.IndexedSeq(G__51532__a,0,null);
} 
return G__51508__delegate.call(this,p__51411,p__51412);};
G__51508.cljs$lang$maxFixedArity = 1;
G__51508.cljs$lang$applyTo = (function (arglist__51533){
var p__51411 = cljs.core.first(arglist__51533);
var p__51412 = cljs.core.rest(arglist__51533);
return G__51508__delegate(p__51411,p__51412);
});
G__51508.cljs$core$IFn$_invoke$arity$variadic = G__51508__delegate;
return G__51508;
})()
;
var G__51410 = (75);
return goog.functions.debounce(G__51409,G__51410);
})();
maria.editors.code.options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyMap","keyMap",945500512),new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),new cljs.core.Keyword(null,"configureMouse","configureMouse",580153508),new cljs.core.Keyword(null,"styleSelectedText","styleSelectedText",1005912522),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cursorScrollMargin","cursorScrollMargin",-1121435954),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"magicEdit","magicEdit",-339149932),new cljs.core.Keyword(null,"magicBrackets","magicBrackets",-607807914),new cljs.core.Keyword(null,"flattenSpans","flattenSpans",1538601693),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941)],["default",true,(function (cm,repeat,e){
return ({"moveOnDrag": (cljs.core.truth_(e.shiftKey)?false:true)});
}),true,"clojure",(40),"maria-light",true,true,true,false]);
maria.editors.code.reset_value_BANG_ = (function maria$editors$code$reset_value_BANG_(p__51442){
var map__51443 = p__51442;
var map__51443__$1 = (((((!((map__51443 == null))))?(((((map__51443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51443):map__51443);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51443__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51443__$1,new cljs.core.Keyword(null,"value","value",305978217));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51443__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return lark.editors.codemirror.set_value_and_refresh_BANG_(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_value;
}
})());
});
maria.editors.code.CodeView = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (p__51452){
var map__51453 = p__51452;
var map__51453__$1 = (((((!((map__51453 == null))))?(((((map__51453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51453):map__51453);
var this$ = map__51453__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var error_ranges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"error-ranges","error-ranges",2077002208));
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var on_selection_activity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"on-selection-activity","on-selection-activity",645321921));
var cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"value","value",305978217));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var keymap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"keymap","keymap",-499605268));
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var before_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"before-change","before-change",-514763340));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var auto_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231));
var dom_node = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var editor = (function (){var G__51455 = dom_node;
var G__51456 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cm_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_value;
}
})())], null),(function (){var G__51457 = maria.editors.code.options;
var G__51457__$1 = (cljs.core.truth_(keymap)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51457,new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),cljs.core.clj__GT_js(keymap)):G__51457);
if(cljs.core.truth_(read_only_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(G__51457__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985)], null)),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tabindex","tabindex",338877510),(-1)], 0));
} else {
return G__51457__$1;
}
})()], 0)));
return module$node_modules$codemirror$lib$codemirror(G__51455,G__51456);
})();
cljs.core.add_watch(editor,new cljs.core.Keyword(null,"maria","maria",-327259398),((function (dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (editor__$1,p__51458,p__51459){
var map__51460 = p__51458;
var map__51460__$1 = (((((!((map__51460 == null))))?(((((map__51460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51460):map__51460);
var map__51461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51461__$1 = (((((!((map__51461 == null))))?(((((map__51461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51461):map__51461);
var prev_loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var prev_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__51462 = p__51459;
var map__51462__$1 = (((((!((map__51462 == null))))?(((((map__51462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51462):map__51462);
var map__51463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51462__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51463__$1 = (((((!((map__51463 == null))))?(((((map__51463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51463):map__51463);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51463__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51463__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return setTimeout(((function (map__51460,map__51460__$1,map__51461,map__51461__$1,prev_loc,prev_pos,map__51462,map__51462__$1,map__51463,map__51463__$1,loc,pos,dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (){
if(cljs.core.truth_(editor__$1.hasFocus())){
var G__51468_51580 = lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$2(loc,pos);
var G__51468_51581__$1 = (((G__51468_51580 == null))?null:maria.editors.code.eldoc_view(G__51468_51580));
if((G__51468_51581__$1 == null)){
} else {
maria.views.bottom_bar.add_bottom_bar_BANG_(new cljs.core.Keyword("eldoc","cursor","eldoc/cursor",512934939),G__51468_51581__$1);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,prev_pos)){
return null;
} else {
var G__51469 = editor__$1;
var G__51470 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(prev_pos))) || ((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(pos) < new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(prev_pos))));
return (maria.editors.code.update_completions_BANG_.cljs$core$IFn$_invoke$arity$2 ? maria.editors.code.update_completions_BANG_.cljs$core$IFn$_invoke$arity$2(G__51469,G__51470) : maria.editors.code.update_completions_BANG_.call(null,G__51469,G__51470));
}
} else {
return null;
}
});})(map__51460,map__51460__$1,map__51461,map__51461__$1,prev_loc,prev_pos,map__51462,map__51462__$1,map__51463,map__51463__$1,loc,pos,dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
,(0));
});})(dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
);

editor.on("blur",((function (dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (){
return maria.views.bottom_bar.retract_bottom_bar_BANG_(new cljs.core.Keyword("eldoc","cursor","eldoc/cursor",512934939));
});})(dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
);

editor.view = this$;

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(editor,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),this$);

editor.setValueAndRefresh = ((function (dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (p1__51445_SHARP_){
lark.editors.codemirror.set_preserve_cursor_BANG_(editor,p1__51445_SHARP_);

return editor.refresh();
});})(dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
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
editor.on("change",((function (dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus){
return (function (p1__51446_SHARP_){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-update","on-update",1680216496),p1__51446_SHARP_.getValue()], 0));

var G__51471 = p1__51446_SHARP_.getValue();
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__51471) : on_update.call(null,G__51471));
});})(dom_node,editor,map__51453,map__51453__$1,this$,props,error_ranges,on_mount,on_selection_activity,cm_opts,value,default_value,keymap,on_update,state,before_change,read_only_QMARK_,auto_focus))
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
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__51472){
var map__51473 = p__51472;
var map__51473__$1 = (((((!((map__51473 == null))))?(((((map__51473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51473):map__51473);
var this$ = map__51473__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51473__$1,new cljs.core.Keyword(null,"value","value",305978217));
var editor_51588 = this$.getEditor();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,editor_51588.getValue())){
this$.resetValue();
} else {
}

return false;
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$editors$code$__CodeView(p__51475){
var map__51476 = p__51475;
var map__51476__$1 = (((((!((map__51476 == null))))?(((((map__51476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51476):map__51476);
var this$ = map__51476__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51476__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51476__$1,new cljs.core.Keyword("view","props","view/props",449562012));
return chia.view.props.to_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".cursor-text",".cursor-text",1681513109),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__51476,map__51476__$1,this$,state,props){
return (function (p1__51448_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__51448_SHARP_.target,p1__51448_SHARP_.currentTarget)){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var G__51478 = editor;
G__51478.setCursor(editor.lineCount(),(0));

G__51478.focus();

return G__51478;
} else {
return null;
}
});})(map__51476,map__51476__$1,this$,state,props))
,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),""], null)], null)], 0))], null));
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({getEditor:(function (){var v__23188__auto__ = (function (p1__51447_SHARP_){
return new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(p1__51447_SHARP_)));
});
if(cljs.core.fn_QMARK_(v__23188__auto__)){
return ((function (v__23188__auto__){
return (function() { 
var G__51599__delegate = function (args__23189__auto__){
var this__23190__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__23188__auto__,this__23190__auto__,args__23189__auto__);
};
var G__51599 = function (var_args){
var args__23189__auto__ = null;
if (arguments.length > 0) {
var G__51600__i = 0, G__51600__a = new Array(arguments.length -  0);
while (G__51600__i < G__51600__a.length) {G__51600__a[G__51600__i] = arguments[G__51600__i + 0]; ++G__51600__i;}
  args__23189__auto__ = new cljs.core.IndexedSeq(G__51600__a,0,null);
} 
return G__51599__delegate.call(this,args__23189__auto__);};
G__51599.cljs$lang$maxFixedArity = 0;
G__51599.cljs$lang$applyTo = (function (arglist__51601){
var args__23189__auto__ = cljs.core.seq(arglist__51601);
return G__51599__delegate(args__23189__auto__);
});
G__51599.cljs$core$IFn$_invoke$arity$variadic = G__51599__delegate;
return G__51599;
})()
;
;})(v__23188__auto__))
} else {
return v__23188__auto__;
}
})(),setValue:(function (){var v__23188__auto__ = (function (p__51479){
var map__51480 = p__51479;
var map__51480__$1 = (((((!((map__51480 == null))))?(((((map__51480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51480):map__51480);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5720__auto__ = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5720__auto__)){
var editor = temp__5720__auto__;
return lark.editors.codemirror.set_preserve_cursor_BANG_(editor,value);
} else {
return null;
}
});
if(cljs.core.fn_QMARK_(v__23188__auto__)){
return ((function (v__23188__auto__){
return (function() { 
var G__51602__delegate = function (args__23189__auto__){
var this__23190__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__23188__auto__,this__23190__auto__,args__23189__auto__);
};
var G__51602 = function (var_args){
var args__23189__auto__ = null;
if (arguments.length > 0) {
var G__51603__i = 0, G__51603__a = new Array(arguments.length -  0);
while (G__51603__i < G__51603__a.length) {G__51603__a[G__51603__i] = arguments[G__51603__i + 0]; ++G__51603__i;}
  args__23189__auto__ = new cljs.core.IndexedSeq(G__51603__a,0,null);
} 
return G__51602__delegate.call(this,args__23189__auto__);};
G__51602.cljs$lang$maxFixedArity = 0;
G__51602.cljs$lang$applyTo = (function (arglist__51604){
var args__23189__auto__ = cljs.core.seq(arglist__51604);
return G__51602__delegate(args__23189__auto__);
});
G__51602.cljs$core$IFn$_invoke$arity$variadic = G__51602__delegate;
return G__51602;
})()
;
;})(v__23188__auto__))
} else {
return v__23188__auto__;
}
})(),resetValue:(function (){var v__23188__auto__ = (function (p__51482){
var map__51483 = p__51482;
var map__51483__$1 = (((((!((map__51483 == null))))?(((((map__51483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51483):map__51483);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51483__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51483__$1,new cljs.core.Keyword(null,"value","value",305978217));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51483__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)).setValueAndRefresh((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_value;
}
})());
});
if(cljs.core.fn_QMARK_(v__23188__auto__)){
return ((function (v__23188__auto__){
return (function() { 
var G__51607__delegate = function (args__23189__auto__){
var this__23190__auto__ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v__23188__auto__,this__23190__auto__,args__23189__auto__);
};
var G__51607 = function (var_args){
var args__23189__auto__ = null;
if (arguments.length > 0) {
var G__51609__i = 0, G__51609__a = new Array(arguments.length -  0);
while (G__51609__i < G__51609__a.length) {G__51609__a[G__51609__i] = arguments[G__51609__i + 0]; ++G__51609__i;}
  args__23189__auto__ = new cljs.core.IndexedSeq(G__51609__a,0,null);
} 
return G__51607__delegate.call(this,args__23189__auto__);};
G__51607.cljs$lang$maxFixedArity = 0;
G__51607.cljs$lang$applyTo = (function (arglist__51613){
var args__23189__auto__ = cljs.core.seq(arglist__51613);
return G__51607__delegate(args__23189__auto__);
});
G__51607.cljs$core$IFn$_invoke$arity$variadic = G__51607__delegate;
return G__51607;
})()
;
;})(v__23188__auto__))
} else {
return v__23188__auto__;
}
})()}),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"editors.code/CodeView"})], null),(function maria$editors$code$CodeView51450(props51451){
var G__51449 = this;
chia.view.class$.Component.call(G__51449,props51451);

var obj51485_51614 = G__51449;
var obj51486_51615 = (((!((obj51485_51614 == null))))?obj51485_51614:({}));
obj51486_51615.state = ({});



return G__51449;
}));
maria.editors.code.viewer = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"editors.code/viewer"}),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function maria$editors$code$__viewer(p__51494,source){
var map__51495 = p__51494;
var map__51495__$1 = (((((!((map__51495 == null))))?(((((map__51495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51495):map__51495);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51495__$1,new cljs.core.Keyword("view","props","view/props",449562012));
return chia.view.props.to_element((function (){var G__51497 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),true,new cljs.core.Keyword(null,"value","value",305978217),source], null),props], 0));
return (maria.editors.code.CodeView.cljs$core$IFn$_invoke$arity$1 ? maria.editors.code.CodeView.cljs$core$IFn$_invoke$arity$1(G__51497) : maria.editors.code.CodeView.call(null,G__51497));
})());
})], null),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function maria$editors$code$viewer51492(props51493){
var G__51491 = this;
chia.view.class$.Component.call(G__51491,props51493);

var obj51499_51658 = G__51491;
var obj51501_51659 = (((!((obj51499_51658 == null))))?obj51499_51658:({}));
obj51501_51659.state = ({});



return G__51491;
}));
