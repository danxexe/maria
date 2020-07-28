goog.provide('lark.editors.codemirror');
goog.require('cljs.core');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
goog.require('fast_zip.core');
goog.require('goog.events');
goog.require('lark.tree.core');
goog.require('goog.dom');
goog.require('lark.editor');
goog.require('clojure.string');
goog.require('lark.tree.range');
goog.require('lark.tree.node');
goog.require('lark.tree.nav');
goog.require('applied_science.js_interop');
lark.editors.codemirror._STAR_get_ns_STAR_ = (function lark$editors$codemirror$_STAR_get_ns_STAR_(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("cljs.user");
});
lark.editors.codemirror.Pos = module$node_modules$codemirror$lib$codemirror.Pos;
lark.editors.codemirror.changeEnd = module$node_modules$codemirror$lib$codemirror.changeEnd;
module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return module$node_modules$codemirror$lib$codemirror.cmpPos(x__$1,y);
});

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (x,y){
var x__$1 = this;
var and__4120__auto__ = y;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1.ch,cljs.core.get.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword(null,"column","column",2078222095)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1.line,cljs.core.get.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword(null,"line","line",212345235)))));
} else {
return and__4120__auto__;
}
});

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (pos,writer,_){
var pos__$1 = this;
return cljs.core._write(writer,["#Pos[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos__$1.line),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos__$1.ch),"]"].join(''));
});

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (o,k,v){
var o__$1 = this;
var G__66585 = k;
var G__66585__$1 = (((G__66585 instanceof cljs.core.Keyword))?G__66585.fqn:null);
switch (G__66585__$1) {
case "line":
var G__66587 = v;
var G__66588 = o__$1.ch;
return module$node_modules$codemirror$lib$codemirror.Pos(G__66587,G__66588);

break;
case "column":
var G__66590 = o__$1.line;
var G__66591 = v;
return module$node_modules$codemirror$lib$codemirror.Pos(G__66590,G__66591);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66585__$1)].join('')));

}
});

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
var G__66592 = k;
var G__66592__$1 = (((G__66592 instanceof cljs.core.Keyword))?G__66592.fqn:null);
switch (G__66592__$1) {
case "line":
return o__$1.line;

break;
case "column":
return o__$1.ch;

break;
default:
var obj66598 = o__$1;
var k66599 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj66601 = obj66598;
return (((!((obj66601 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66599,obj66601)));
})()){
return (obj66598[k66599]);
} else {
return undefined;
}

}
});

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
var G__66604 = k;
var G__66604__$1 = (((G__66604 instanceof cljs.core.Keyword))?G__66604.fqn:null);
switch (G__66604__$1) {
case "line":
return o__$1.line;

break;
case "column":
return o__$1.column;

break;
default:
var obj66609 = o__$1;
var k66610 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj66611 = obj66609;
return (((!((obj66611 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66610,obj66611)));
})()){
return (obj66609[k66610]);
} else {
return not_found;
}

}
});
/**
 * Coerces Clojure maps to CodeMirror positions.
 */
lark.editors.codemirror.range__GT_Pos = (function lark$editors$codemirror$range__GT_Pos(p__66615){
var map__66616 = p__66615;
var map__66616__$1 = (((((!((map__66616 == null))))?(((((map__66616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66616):map__66616);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66616__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66616__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return module$node_modules$codemirror$lib$codemirror.Pos(line,column);
});
lark.editors.codemirror.Pos__GT_range = (function lark$editors$codemirror$Pos__GT_range(cursor){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),cursor.line,new cljs.core.Keyword(null,"column","column",2078222095),cursor.ch,new cljs.core.Keyword(null,"end-line","end-line",1837326455),cursor.line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),cursor.ch], null);
});
lark.editors.codemirror.cursor_bookmark = (function lark$editors$codemirror$cursor_bookmark(){
var G__66623 = "div";
var G__66624 = ({"className": "cursor-marker"});
return goog.dom.createDom(G__66623,G__66624);
});
/**
 * Current sexp, or nearest sexp to the left, or parent.
 */
lark.editors.codemirror.sexp_near = (function lark$editors$codemirror$sexp_near(var_args){
var G__66628 = arguments.length;
switch (G__66628) {
case 2:
return lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$2 = (function (pos,loc){
return lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$3(pos,loc,null);
});

lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$3 = (function (pos,loc,p__66632){
var map__66638 = p__66632;
var map__66638__$1 = (((((!((map__66638 == null))))?(((((map__66638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66638):map__66638);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66638__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"left","left",-399115937));
var ignore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66638__$1,new cljs.core.Keyword(null,"ignore?","ignore?",1868915892),lark.tree.node.whitespace_QMARK_);
var nav = (function (){var G__66640 = direction;
var G__66640__$1 = (((G__66640 instanceof cljs.core.Keyword))?G__66640.fqn:null);
switch (G__66640__$1) {
case "left":
return fast_zip.core.left;

break;
case "right":
return fast_zip.core.right;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66640__$1)].join('')));

}
})();
var the_loc = ((cljs.core.not((function (){var G__66643 = fast_zip.core.node(loc);
return (ignore_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ignore_QMARK_.cljs$core$IFn$_invoke$arity$1(G__66643) : ignore_QMARK_.call(null,G__66643));
})()))?loc:(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.select_keys(fast_zip.core.node(loc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)));
if(and__4120__auto__){
var and__4120__auto____$1 = (nav.cljs$core$IFn$_invoke$arity$1 ? nav.cljs$core$IFn$_invoke$arity$1(loc) : nav.call(null,loc));
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not((function (){var G__66644 = fast_zip.core.node((nav.cljs$core$IFn$_invoke$arity$1 ? nav.cljs$core$IFn$_invoke$arity$1(loc) : nav.call(null,loc)));
return (ignore_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ignore_QMARK_.cljs$core$IFn$_invoke$arity$1(G__66644) : ignore_QMARK_.call(null,G__66644));
})());
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?(nav.cljs$core$IFn$_invoke$arity$1 ? nav.cljs$core$IFn$_invoke$arity$1(loc) : nav.call(null,loc)):loc));
return lark.tree.nav.include_prefix_parents(the_loc);
});

lark.editors.codemirror.sexp_near.cljs$lang$maxFixedArity = 3;

lark.editors.codemirror.set_temp_marker_BANG_ = (function lark$editors$codemirror$set_temp_marker_BANG_(cm){
if(cljs.core.truth_(new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(cm))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cm,cljs.core.assoc,new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258),(cljs.core.truth_(cm.somethingSelected())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),cm.listSelections()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cm.setBookmark(cm.getCursor(),({"widget": lark.editors.codemirror.cursor_bookmark()}))], null)));
}
});
lark.editors.codemirror.unset_temp_marker_BANG_ = (function lark$editors$codemirror$unset_temp_marker_BANG_(cm){
var vec__66651_67231 = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(cm);
var kind_67232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66651_67231,(0),null);
var marker_67233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66651_67231,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_67232,new cljs.core.Keyword(null,"cursor","cursor",1011937484))){
marker_67233.clear();
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cm,cljs.core.dissoc,new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258));
});
lark.editors.codemirror.temp_marker_cursor_pos = (function lark$editors$codemirror$temp_marker_cursor_pos(cm){
var vec__66660 = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(cm);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66660,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66660,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"cursor","cursor",1011937484))){
return marker.find();
} else {
return null;
}
});
lark.editors.codemirror.temp_marker_selections = (function lark$editors$codemirror$temp_marker_selections(cm){
var vec__66668 = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(cm);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66668,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66668,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"selections","selections",-1277610233))){
return marker;
} else {
return null;
}
});
lark.editors.codemirror.return_to_temp_marker_BANG_ = (function lark$editors$codemirror$return_to_temp_marker_BANG_(editor){
var temp__5720__auto__ = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(editor);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__66674 = temp__5720__auto__;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66674,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66674,(1),null);
var G__66677_67235 = kind;
var G__66677_67236__$1 = (((G__66677_67235 instanceof cljs.core.Keyword))?G__66677_67235.fqn:null);
switch (G__66677_67236__$1) {
case "cursor":
var temp__5720__auto___67238__$1 = data.find();
if(cljs.core.truth_(temp__5720__auto___67238__$1)){
var pos_67239 = temp__5720__auto___67238__$1;
editor.setCursor(pos_67239,null,({"scroll": false}));
} else {
}

break;
case "selections":
var temp__5720__auto___67240__$1 = data;
if(cljs.core.truth_(temp__5720__auto___67240__$1)){
var sels_67241 = temp__5720__auto___67240__$1;
editor.setSelections(sels_67241,null,({"scroll": false}));
} else {
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66677_67236__$1)].join('')));

}

return lark.editors.codemirror.unset_temp_marker_BANG_(editor);
} else {
return null;
}
});
lark.editors.codemirror.get_cursor = (function lark$editors$codemirror$get_cursor(cm){
var or__4131__auto__ = lark.editors.codemirror.temp_marker_cursor_pos(cm);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cm.getCursor();
}
});
lark.editors.codemirror.selection_QMARK_ = (function lark$editors$codemirror$selection_QMARK_(cm){
return cm.somethingSelected();
});
/**
 * Return selected text, or nil
 */
lark.editors.codemirror.selection_text = (function lark$editors$codemirror$selection_text(cm){
if(cljs.core.truth_(cm.somethingSelected())){
return cm.getSelection();
} else {
return null;
}
});
lark.editors.codemirror.set_cursor_BANG_ = (function lark$editors$codemirror$set_cursor_BANG_(cm,pos){
lark.editors.codemirror.unset_temp_marker_BANG_(cm);

var pos_67245__$1 = (function (){var G__66711 = pos;
if(cljs.core.map_QMARK_(pos)){
return lark.editors.codemirror.range__GT_Pos(G__66711);
} else {
return G__66711;
}
})();
cm.setCursor(pos_67245__$1,null,({"scroll": false}));

return cm;
});
/**
 * If value is different from editor's current value, set value, retain cursor position
 */
lark.editors.codemirror.set_preserve_cursor_BANG_ = (function lark$editors$codemirror$set_preserve_cursor_BANG_(editor,value){
if((value === editor.getValue())){
} else {
var cursor_pos_67247 = lark.editors.codemirror.get_cursor(editor);
editor.setValue(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

if(cljs.core.truth_((editor["state"]["focused"]))){
editor.setCursor(cursor_pos_67247,null,({"scroll": false}));
} else {
}
}

return editor;
});
/**
 * Given a Clojure-style column and line range, return Codemirror-compatible `from` and `to` positions
 */
lark.editors.codemirror.range__GT_positions = (function lark$editors$codemirror$range__GT_positions(p__66717){
var map__66746 = p__66717;
var map__66746__$1 = (((((!((map__66746 == null))))?(((((map__66746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66746):map__66746);
var node = map__66746__$1;
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66746__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66746__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66746__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66746__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$codemirror$lib$codemirror.Pos(line,column),(function (){var G__66754 = (function (){var or__4131__auto__ = end_line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__66755 = (function (){var or__4131__auto__ = end_column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return column;
}
})();
return module$node_modules$codemirror$lib$codemirror.Pos(G__66754,G__66755);
})()], null);
});
/**
 * Add marks to a collection of Clojure-style ranges
 */
lark.editors.codemirror.mark_range_BANG_ = (function lark$editors$codemirror$mark_range_BANG_(cm,range,payload){
var vec__66763 = lark.editors.codemirror.range__GT_positions(range);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(1),null);
return cm.markText(from,to,payload);
});
/**
 * Add marks to a collection of Clojure-style ranges
 */
lark.editors.codemirror.mark_ranges_BANG_ = (function lark$editors$codemirror$mark_ranges_BANG_(cm,ranges,payload){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__66772){
var vec__66773 = p__66772;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66773,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66773,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cm.markText(from,to,payload));
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lark.editors.codemirror.range__GT_positions,ranges));
});
lark.editors.codemirror.range_text = (function lark$editors$codemirror$range_text(cm,range){
var vec__66781 = lark.editors.codemirror.range__GT_positions(range);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66781,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66781,(1),null);
return cm.getRange(from,to);
});
/**
 * Copy a {:line .. :column ..} range from a CodeMirror instance.
 */
lark.editors.codemirror.select_range = (function lark$editors$codemirror$select_range(cm,range){
var vec__66787 = lark.editors.codemirror.range__GT_positions(range);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66787,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66787,(1),null);
return cm.setSelection(from,to,({"scroll": false}));
});
lark.editors.codemirror.replace_range_BANG_ = (function lark$editors$codemirror$replace_range_BANG_(var_args){
var G__66794 = arguments.length;
switch (G__66794) {
case 4:
return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cm,s,from,p__66800){
var map__66801 = p__66800;
var map__66801__$1 = (((((!((map__66801 == null))))?(((((map__66801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66801):map__66801);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66801__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66801__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),column], null)], 0)));
});

lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cm,s,p__66803){
var map__66804 = p__66803;
var map__66804__$1 = (((((!((map__66804 == null))))?(((((map__66804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66804):map__66804);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66804__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66804__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66804__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66804__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cm.replaceRange(s,(lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(line,column) : lark.editors.codemirror.Pos.call(null,line,column)),(function (){var G__66806 = (function (){var or__4131__auto__ = end_line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__66807 = (function (){var or__4131__auto__ = end_column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return column;
}
})();
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__66806,G__66807) : lark.editors.codemirror.Pos.call(null,G__66806,G__66807));
})());
});

lark.editors.codemirror.replace_range_BANG_.cljs$lang$maxFixedArity = 4;

lark.editors.codemirror.temp_select_node_BANG_ = (function lark$editors$codemirror$temp_select_node_BANG_(cm,node){
lark.editors.codemirror.set_temp_marker_BANG_(cm);

return lark.editors.codemirror.select_range(cm,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(node));
});
lark.editors.codemirror.pos__GT_boundary = (function lark$editors$codemirror$pos__GT_boundary(var_args){
var G__66809 = arguments.length;
switch (G__66809) {
case 1:
return lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(function (){var or__4131__auto__ = pos.line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"column","column",2078222095),pos.ch], null);
});

lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$2 = (function (pos,side){
var G__66813 = side;
var G__66813__$1 = (((G__66813 instanceof cljs.core.Keyword))?G__66813.fqn:null);
switch (G__66813__$1) {
case "left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(function (){var or__4131__auto__ = pos.line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"column","column",2078222095),pos.ch], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),(function (){var or__4131__auto__ = pos.line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"end-column","end-column",1425389514),pos.ch], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66813__$1)].join('')));

}
});

lark.editors.codemirror.pos__GT_boundary.cljs$lang$maxFixedArity = 2;

lark.editors.codemirror.selection_bounds = (function lark$editors$codemirror$selection_bounds(sel){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$2(sel.from(),new cljs.core.Keyword(null,"left","left",-399115937)),lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$2(sel.to(),new cljs.core.Keyword(null,"right","right",-452581833))], 0));
});
lark.editors.codemirror.current_selection_bounds = (function lark$editors$codemirror$current_selection_bounds(cm){
if(cljs.core.truth_(cm.somethingSelected())){
var sel = cljs.core.first(cm.listSelections());
return lark.editors.codemirror.selection_bounds(sel);
} else {
var cur = lark.editors.codemirror.get_cursor(cm);
return lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$1(cur);
}
});
lark.editors.codemirror.highlight_range = (function lark$editors$codemirror$highlight_range(pos,node){
if(cljs.core.truth_((function (){var and__4120__auto__ = lark.tree.node.has_edges_QMARK_(node);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node));
if(and__4120__auto____$1){
var and__4120__auto____$2 = (lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2(node,pos) : lark.tree.range.within_inner_QMARK_.call(null,node,pos));
if(cljs.core.truth_(and__4120__auto____$2)){
return cljs.core.not((function (){var G__66825 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
return (lark.tree.nav.prefix_parents.cljs$core$IFn$_invoke$arity$1 ? lark.tree.nav.prefix_parents.cljs$core$IFn$_invoke$arity$1(G__66825) : lark.tree.nav.prefix_parents.call(null,G__66825));
})());
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return lark.tree.range.inner_range(node);
} else {
return node;
}
});
lark.editors.codemirror.select_at_cursor = (function lark$editors$codemirror$select_at_cursor(p__66827,top_loc_QMARK_){
var map__66829 = p__66827;
var map__66829__$1 = (((((!((map__66829 == null))))?(((((map__66829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66829):map__66829);
var cm = map__66829__$1;
var map__66830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66829__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__66830__$1 = (((((!((map__66830 == null))))?(((((map__66830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66830):map__66830);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66830__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66830__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var temp__5720__auto__ = lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$3(pos,loc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"left","left",-399115937)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var cursor_loc = temp__5720__auto__;
var pos__$1 = lark.editors.codemirror.Pos__GT_range(lark.editors.codemirror.get_cursor(cm));
var node = (cljs.core.truth_(top_loc_QMARK_)?fast_zip.core.node(lark.tree.nav.top_loc(cursor_loc)):lark.editors.codemirror.highlight_range(pos__$1,fast_zip.core.node(lark.tree.nav.include_prefix_parents(cursor_loc))));
if(cljs.core.truth_((function (){var and__4120__auto__ = node;
if(cljs.core.truth_(and__4120__auto__)){
return (!(lark.tree.node.whitespace_QMARK_(node)));
} else {
return and__4120__auto__;
}
})())){
return lark.editors.codemirror.temp_select_node_BANG_(cm,node);
} else {
return null;
}
} else {
return null;
}
});
lark.editors.codemirror.mac_QMARK_ = (function (){var platform = navigator.platform;
return ((clojure.string.starts_with_QMARK_(platform,"Mac")) || (clojure.string.starts_with_QMARK_(platform,"iP")));
})();
lark.editors.codemirror.keyup_selection_update_BANG_ = (function lark$editors$codemirror$keyup_selection_update_BANG_(cm,e){
if(cljs.core.truth_(((lark.editors.codemirror.mac_QMARK_)?e.metaKey:e.ctrlKey))){
return null;
} else {
return lark.editors.codemirror.return_to_temp_marker_BANG_(cm);
}
});
lark.editors.codemirror.clear_brackets_BANG_ = (function lark$editors$codemirror$clear_brackets_BANG_(cm){
var seq__66854_67279 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"handles","handles",-1061347879)], null)));
var chunk__66855_67280 = null;
var count__66856_67281 = (0);
var i__66857_67282 = (0);
while(true){
if((i__66857_67282 < count__66856_67281)){
var handle_67283 = chunk__66855_67280.cljs$core$IIndexed$_nth$arity$2(null,i__66857_67282);
handle_67283.clear();


var G__67285 = seq__66854_67279;
var G__67286 = chunk__66855_67280;
var G__67287 = count__66856_67281;
var G__67288 = (i__66857_67282 + (1));
seq__66854_67279 = G__67285;
chunk__66855_67280 = G__67286;
count__66856_67281 = G__67287;
i__66857_67282 = G__67288;
continue;
} else {
var temp__5720__auto___67289 = cljs.core.seq(seq__66854_67279);
if(temp__5720__auto___67289){
var seq__66854_67290__$1 = temp__5720__auto___67289;
if(cljs.core.chunked_seq_QMARK_(seq__66854_67290__$1)){
var c__4550__auto___67291 = cljs.core.chunk_first(seq__66854_67290__$1);
var G__67292 = cljs.core.chunk_rest(seq__66854_67290__$1);
var G__67293 = c__4550__auto___67291;
var G__67294 = cljs.core.count(c__4550__auto___67291);
var G__67295 = (0);
seq__66854_67279 = G__67292;
chunk__66855_67280 = G__67293;
count__66856_67281 = G__67294;
i__66857_67282 = G__67295;
continue;
} else {
var handle_67298 = cljs.core.first(seq__66854_67290__$1);
handle_67298.clear();


var G__67299 = cljs.core.next(seq__66854_67290__$1);
var G__67300 = null;
var G__67301 = (0);
var G__67302 = (0);
seq__66854_67279 = G__67299;
chunk__66855_67280 = G__67300;
count__66856_67281 = G__67301;
i__66857_67282 = G__67302;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm,cljs.core.update,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handles","handles",-1061347879)], 0));
});
lark.editors.codemirror.match_brackets_BANG_ = (function lark$editors$codemirror$match_brackets_BANG_(cm,node){
lark.editors.codemirror.clear_brackets_BANG_(cm);

if(cljs.core.truth_((function (){var G__66861 = node;
if((G__66861 == null)){
return null;
} else {
return (lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__66861) : lark.tree.node.may_contain_children_QMARK_.call(null,G__66861));
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"handles","handles",-1061347879)], null),lark.editors.codemirror.mark_ranges_BANG_(cm,lark.tree.range.node_highlights(node),({"className": "CodeMirror-matchingbracket"})));
} else {
return null;
}
});
lark.editors.codemirror.clear_parse_errors_BANG_ = (function lark$editors$codemirror$clear_parse_errors_BANG_(cm){
var seq__66862_67311 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","errors","magic/errors",-878502635),new cljs.core.Keyword(null,"handles","handles",-1061347879)], null)));
var chunk__66863_67312 = null;
var count__66864_67313 = (0);
var i__66865_67314 = (0);
while(true){
if((i__66865_67314 < count__66864_67313)){
var handle_67317 = chunk__66863_67312.cljs$core$IIndexed$_nth$arity$2(null,i__66865_67314);
handle_67317.clear();


var G__67318 = seq__66862_67311;
var G__67319 = chunk__66863_67312;
var G__67320 = count__66864_67313;
var G__67321 = (i__66865_67314 + (1));
seq__66862_67311 = G__67318;
chunk__66863_67312 = G__67319;
count__66864_67313 = G__67320;
i__66865_67314 = G__67321;
continue;
} else {
var temp__5720__auto___67322 = cljs.core.seq(seq__66862_67311);
if(temp__5720__auto___67322){
var seq__66862_67324__$1 = temp__5720__auto___67322;
if(cljs.core.chunked_seq_QMARK_(seq__66862_67324__$1)){
var c__4550__auto___67325 = cljs.core.chunk_first(seq__66862_67324__$1);
var G__67326 = cljs.core.chunk_rest(seq__66862_67324__$1);
var G__67327 = c__4550__auto___67325;
var G__67328 = cljs.core.count(c__4550__auto___67325);
var G__67329 = (0);
seq__66862_67311 = G__67326;
chunk__66863_67312 = G__67327;
count__66864_67313 = G__67328;
i__66865_67314 = G__67329;
continue;
} else {
var handle_67332 = cljs.core.first(seq__66862_67324__$1);
handle_67332.clear();


var G__67333 = cljs.core.next(seq__66862_67324__$1);
var G__67334 = null;
var G__67335 = (0);
var G__67336 = (0);
seq__66862_67311 = G__67333;
chunk__66863_67312 = G__67334;
count__66864_67313 = G__67335;
i__66865_67314 = G__67336;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm,cljs.core.update,new cljs.core.Keyword("magic","errors","magic/errors",-878502635),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handles","handles",-1061347879)], 0));
});
lark.editors.codemirror.highlight_parse_errors_BANG_ = (function lark$editors$codemirror$highlight_parse_errors_BANG_(cm,error_ranges){
lark.editors.codemirror.clear_parse_errors_BANG_(cm);

var handles = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function lark$editors$codemirror$highlight_parse_errors_BANG__$_iter__66895(s__66896){
return (new cljs.core.LazySeq(null,(function (){
var s__66896__$1 = s__66896;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__66896__$1);
if(temp__5720__auto__){
var s__66896__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66896__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__66896__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__66898 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__66897 = (0);
while(true){
if((i__66897 < size__4522__auto__)){
var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__66897);
cljs.core.chunk_append(b__66898,lark.editors.codemirror.mark_range_BANG_(cm,node,({"className": ["error-text",(function (){var temp__5720__auto____$1 = (function (){var G__66907 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
if((G__66907 == null)){
return null;
} else {
return cljs.core.name(G__66907);
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var tag = temp__5720__auto____$1;
return [" cm-",tag].join('');
} else {
return null;
}
})()].join('')})));

var G__67347 = (i__66897 + (1));
i__66897 = G__67347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66898),lark$editors$codemirror$highlight_parse_errors_BANG__$_iter__66895(cljs.core.chunk_rest(s__66896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66898),null);
}
} else {
var node = cljs.core.first(s__66896__$2);
return cljs.core.cons(lark.editors.codemirror.mark_range_BANG_(cm,node,({"className": ["error-text",(function (){var temp__5720__auto____$1 = (function (){var G__66913 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
if((G__66913 == null)){
return null;
} else {
return cljs.core.name(G__66913);
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var tag = temp__5720__auto____$1;
return [" cm-",tag].join('');
} else {
return null;
}
})()].join('')})),lark$editors$codemirror$highlight_parse_errors_BANG__$_iter__66895(cljs.core.rest(s__66896__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(error_ranges);
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","errors","magic/errors",-878502635),new cljs.core.Keyword(null,"handles","handles",-1061347879)], null),handles);
});
lark.editors.codemirror.set_value_and_refresh_BANG_ = (function lark$editors$codemirror$set_value_and_refresh_BANG_(editor,value){
lark.editors.codemirror.set_preserve_cursor_BANG_(editor,value);

return editor.refresh();
});
lark.editors.codemirror.set_zipper_BANG_ = (function lark$editors$codemirror$set_zipper_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67359 = arguments.length;
var i__4731__auto___67360 = (0);
while(true){
if((i__4731__auto___67360 < len__4730__auto___67359)){
args__4736__auto__.push((arguments[i__4731__auto___67360]));

var G__67364 = (i__4731__auto___67360 + (1));
i__4731__auto___67360 = G__67364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lark.editors.codemirror.set_zipper_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lark.editors.codemirror.set_zipper_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (editor,zipper,p__66948){
var vec__66949 = p__66948;
var map__66952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66949,(0),null);
var map__66952__$1 = (((((!((map__66952 == null))))?(((((map__66952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66952):map__66952);
var decorate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66952__$1,new cljs.core.Keyword(null,"decorate?","decorate?",-1333310590),true);
var ast = fast_zip.core.node(zipper);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(editor,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zipper","zipper",1500694438),zipper,new cljs.core.Keyword(null,"ast","ast",-860334068),ast], null));

var temp__5720__auto___67378 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"on-ast","on-ast",1252096936)], null));
if(cljs.core.truth_(temp__5720__auto___67378)){
var on_ast_67379 = temp__5720__auto___67378;
(on_ast_67379.cljs$core$IFn$_invoke$arity$1 ? on_ast_67379.cljs$core$IFn$_invoke$arity$1(ast) : on_ast_67379.call(null,ast));
} else {
}

if(cljs.core.truth_(decorate_QMARK_)){
return lark.editors.codemirror.highlight_parse_errors_BANG_(editor,cljs.core.get.cljs$core$IFn$_invoke$arity$2(fast_zip.core.node(zipper),new cljs.core.Keyword(null,"invalid-nodes","invalid-nodes",595179254)));
} else {
return null;
}
});

lark.editors.codemirror.set_zipper_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lark.editors.codemirror.set_zipper_BANG_.cljs$lang$applyTo = (function (seq66932){
var G__66934 = cljs.core.first(seq66932);
var seq66932__$1 = cljs.core.next(seq66932);
var G__66935 = cljs.core.first(seq66932__$1);
var seq66932__$2 = cljs.core.next(seq66932__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66934,G__66935,seq66932__$2);
});

lark.editors.codemirror.update_ast_BANG_ = (function lark$editors$codemirror$update_ast_BANG_(p__66968){
var map__66970 = p__66968;
var map__66970__$1 = (((((!((map__66970 == null))))?(((((map__66970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66970):map__66970);
var editor = map__66970__$1;
var map__66972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66970__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__66972__$1 = (((((!((map__66972 == null))))?(((((map__66972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66972):map__66972);
var ast = map__66972__$1;
var ast_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66972__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var value = editor.getValue();
if((((ast_source == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ast_source,value)))){
var map__66985 = (function (){try{return (lark.tree.core.ast.cljs$core$IFn$_invoke$arity$1 ? lark.tree.core.ast.cljs$core$IFn$_invoke$arity$1(value) : lark.tree.core.ast.call(null,value));
}catch (e66989){if((e66989 instanceof Error)){
var e = e66989;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error in update-ast!",e], 0));

console.log(e.stack);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
} else {
throw e66989;

}
}})();
var map__66985__$1 = (((((!((map__66985 == null))))?(((((map__66985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66985):map__66985);
var next_ast = map__66985__$1;
var invalid_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66985__$1,new cljs.core.Keyword(null,"invalid-nodes","invalid-nodes",595179254));
lark.editors.codemirror.highlight_parse_errors_BANG_(editor,invalid_nodes);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_ast,ast)){
return lark.editors.codemirror.set_zipper_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor,(lark.tree.core.ast_zip.cljs$core$IFn$_invoke$arity$1 ? lark.tree.core.ast_zip.cljs$core$IFn$_invoke$arity$1(next_ast) : lark.tree.core.ast_zip.call(null,next_ast)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decorate?","decorate?",-1333310590),false], null)], 0));
} else {
return null;
}
} else {
return null;
}
});
lark.editors.codemirror.update_cursor_BANG_ = (function lark$editors$codemirror$update_cursor_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67393 = arguments.length;
var i__4731__auto___67394 = (0);
while(true){
if((i__4731__auto___67394 < len__4730__auto___67393)){
args__4736__auto__.push((arguments[i__4731__auto___67394]));

var G__67395 = (i__4731__auto___67394 + (1));
i__4731__auto___67394 = G__67395;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lark.editors.codemirror.update_cursor_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lark.editors.codemirror.update_cursor_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__67018,p__67019){
var map__67020 = p__67018;
var map__67020__$1 = (((((!((map__67020 == null))))?(((((map__67020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67020):map__67020);
var cm = map__67020__$1;
var map__67021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67020__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67021__$1 = (((((!((map__67021 == null))))?(((((map__67021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67021):map__67021);
var prev_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67021__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var prev_zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67021__$1,new cljs.core.Keyword(null,"prev-zipper","prev-zipper",-1897943723));
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67020__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
var brackets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67020__$1,new cljs.core.Keyword("magic","brackets?","magic/brackets?",-594931171));
var vec__67022 = p__67019;
var force_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67022,(0),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = cm.hasFocus();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (prev_zipper == null);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return force_QMARK_;
}
}
})())){
var temp__5720__auto__ = lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$1(lark.editors.codemirror.get_cursor(cm));
if(cljs.core.truth_(temp__5720__auto__)){
var pos = temp__5720__auto__;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pos,prev_pos)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_zipper,zipper)))){
var temp__5720__auto____$1 = (function (){var G__67043 = zipper;
if((G__67043 == null)){
return null;
} else {
return lark.tree.nav.navigate(G__67043,pos);
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var loc = temp__5720__auto____$1;
var bracket_loc = lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$3(pos,loc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore?","ignore?",1868915892),((function (loc,temp__5720__auto____$1,pos,temp__5720__auto__,map__67020,map__67020__$1,cm,map__67021,map__67021__$1,prev_pos,prev_zipper,zipper,brackets_QMARK_,vec__67022,force_QMARK_){
return (function (p1__67001_SHARP_){
var or__4131__auto__ = lark.tree.node.whitespace_QMARK_(p1__67001_SHARP_);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__67001_SHARP_,new cljs.core.Keyword(null,"invalid?","invalid?",789397235));
}
});})(loc,temp__5720__auto____$1,pos,temp__5720__auto__,map__67020,map__67020__$1,cm,map__67021,map__67021__$1,prev_pos,prev_zipper,zipper,brackets_QMARK_,vec__67022,force_QMARK_))
], null));
var bracket_node = fast_zip.core.node(bracket_loc);
if(cljs.core.truth_(brackets_QMARK_)){
lark.editors.codemirror.match_brackets_BANG_(cm,bracket_node);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm,cljs.core.update,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"loc","loc",-584284901),loc,new cljs.core.Keyword(null,"node","node",581201198),fast_zip.core.node(loc),new cljs.core.Keyword(null,"bracket-loc","bracket-loc",1199638686),bracket_loc,new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398),bracket_node,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"prev-zipper","prev-zipper",-1897943723),zipper], null)], 0));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

lark.editors.codemirror.update_cursor_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lark.editors.codemirror.update_cursor_BANG_.cljs$lang$applyTo = (function (seq67007){
var G__67008 = cljs.core.first(seq67007);
var seq67007__$1 = cljs.core.next(seq67007);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67008,seq67007__$1);
});

lark.editors.codemirror.require_opts = (function lark$editors$codemirror$require_opts(cm,opts){
var seq__67055 = cljs.core.seq(opts);
var chunk__67056 = null;
var count__67057 = (0);
var i__67058 = (0);
while(true){
if((i__67058 < count__67057)){
var opt = chunk__67056.cljs$core$IIndexed$_nth$arity$2(null,i__67058);
cm.setOption(opt,true);


var G__67396 = seq__67055;
var G__67397 = chunk__67056;
var G__67398 = count__67057;
var G__67399 = (i__67058 + (1));
seq__67055 = G__67396;
chunk__67056 = G__67397;
count__67057 = G__67398;
i__67058 = G__67399;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__67055);
if(temp__5720__auto__){
var seq__67055__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67055__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67055__$1);
var G__67400 = cljs.core.chunk_rest(seq__67055__$1);
var G__67401 = c__4550__auto__;
var G__67402 = cljs.core.count(c__4550__auto__);
var G__67403 = (0);
seq__67055 = G__67400;
chunk__67056 = G__67401;
count__67057 = G__67402;
i__67058 = G__67403;
continue;
} else {
var opt = cljs.core.first(seq__67055__$1);
cm.setOption(opt,true);


var G__67404 = cljs.core.next(seq__67055__$1);
var G__67405 = null;
var G__67406 = (0);
var G__67407 = (0);
seq__67055 = G__67404;
chunk__67056 = G__67405;
count__67057 = G__67406;
i__67058 = G__67407;
continue;
}
} else {
return null;
}
}
break;
}
});
var x67076_67408 = module$node_modules$codemirror$lib$codemirror.prototype;
x67076_67408.cljs$core$ITransientAssociative$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = ((function (x67076_67408){
return (function (this$,key,val){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"ast","ast",-860334068))){
} else {
throw (new Error("Assert failed: (= key :ast)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.assoc,new cljs.core.Keyword(null,"ast","ast",-860334068),val);

return lark.editors.codemirror.update_ast_BANG_(this$__$1);
});})(x67076_67408))
;

x67076_67408.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.cljs$core$ILookup$_lookup$arity$2 = ((function (x67076_67408){
return (function (this$,k){
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var obj67083 = this$__$1;
var k67084 = "cljs$state";
if((function (){var obj67085 = obj67083;
return (((!((obj67085 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k67084,obj67085)));
})()){
return (obj67083[k67084]);
} else {
return undefined;
}
})(),k);
});})(x67076_67408))
;

x67076_67408.cljs$core$ILookup$_lookup$arity$3 = ((function (x67076_67408){
return (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((this$__$1["cljs$state"]),k,not_found);
});})(x67076_67408))
;

x67076_67408.lark$editor$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.lark$editor$IHistory$get_selections$arity$1 = ((function (x67076_67408){
return (function (cm){
var cm__$1 = this;
var temp__5718__auto__ = lark.editors.codemirror.temp_marker_cursor_pos(cm__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var root_cursor = temp__5718__auto__;
return [({"anchor": root_cursor, "head": root_cursor})];
} else {
return cm__$1.listSelections();
}
});})(x67076_67408))
;

x67076_67408.lark$editor$IHistory$put_selections_BANG_$arity$2 = ((function (x67076_67408){
return (function (cm,selections){
var cm__$1 = this;
return cm__$1.setSelections(selections);
});})(x67076_67408))
;

x67076_67408.lark$editor$IKind$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.lark$editor$IKind$kind$arity$1 = ((function (x67076_67408){
return (function (this$){
var this$__$1 = this;
return new cljs.core.Keyword(null,"code","code",1586293142);
});})(x67076_67408))
;

x67076_67408.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (x67076_67408){
return (function (this$,newval){
var this$__$1 = this;
var old_val = cljs.core.deref(this$__$1);
var obj67099_67411 = this$__$1;
var obj67100_67412 = (((!((obj67099_67411 == null))))?obj67099_67411:({}));
(obj67100_67412["cljs$state"] = newval);


return cljs.core._notify_watches(this$__$1,old_val,newval);
});})(x67076_67408))
;

x67076_67408.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (x67076_67408){
return (function (this$,f){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__67116 = cljs.core.deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67116) : f.call(null,G__67116));
})());
});})(x67076_67408))
;

x67076_67408.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (x67076_67408){
return (function (this$,f,a){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__67119 = cljs.core.deref(this$__$1);
var G__67120 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67119,G__67120) : f.call(null,G__67119,G__67120));
})());
});})(x67076_67408))
;

x67076_67408.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (x67076_67408){
return (function (this$,f,a,b){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__67121 = cljs.core.deref(this$__$1);
var G__67122 = a;
var G__67123 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__67121,G__67122,G__67123) : f.call(null,G__67121,G__67122,G__67123));
})());
});})(x67076_67408))
;

x67076_67408.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (x67076_67408){
return (function (this$,f,a,b,xs){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.deref(this$__$1),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null)),xs)));
});})(x67076_67408))
;

x67076_67408.lark$editor$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.lark$editor$ICursor$_focus_BANG_$arity$2 = ((function (x67076_67408){
return (function (this$,coords){
var this$__$1 = this;
var coords__$1 = (((coords instanceof cljs.core.Keyword))?(function (){var G__67128 = coords;
var G__67128__$1 = (((G__67128 instanceof cljs.core.Keyword))?G__67128.fqn:null);
switch (G__67128__$1) {
case "end":
var G__67129 = this$__$1.lineCount();
var G__67130 = cljs.core.count(this$__$1.getLine(this$__$1.lineCount()));
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__67129,G__67130) : lark.editors.codemirror.Pos.call(null,G__67129,G__67130));

break;
case "start":
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2((0),(0)) : lark.editors.codemirror.Pos.call(null,(0),(0)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67128__$1)].join('')));

}
})():coords);
var G__67137_67432 = this$__$1;
G__67137_67432.focus();

var G__67138_67434 = G__67137_67432;
if(cljs.core.truth_(coords__$1)){
G__67138_67434.setCursor(coords__$1,null,({"scroll": false}));
} else {
}


return lark.editor.scroll_into_view(lark.editor.cursor_coords(this$__$1));
});})(x67076_67408))
;

x67076_67408.lark$editor$ICursor$get_cursor$arity$1 = ((function (x67076_67408){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.somethingSelected())){
return null;
} else {
return lark.editors.codemirror.get_cursor(this$__$1);
}
});})(x67076_67408))
;

x67076_67408.lark$editor$ICursor$set_cursor$arity$2 = ((function (x67076_67408){
return (function (this$,position){
var this$__$1 = this;
return this$__$1.setCursor(position);
});})(x67076_67408))
;

x67076_67408.lark$editor$ICursor$coords_cursor$arity$3 = ((function (x67076_67408){
return (function (this$,client_x,client_y){
var this$__$1 = this;
return this$__$1.coordsChar(({"left": client_x, "top": client_y}),"window");
});})(x67076_67408))
;

x67076_67408.lark$editor$ICursor$cursor_coords$arity$1 = ((function (x67076_67408){
return (function (this$){
var this$__$1 = this;
var coords = this$__$1.cursorCoords();
return ({"left": (coords.left - window.scrollX), "right": (coords.right - window.scrollX), "top": (coords.top - window.scrollY), "bottom": (coords.bottom - window.scrollY)});
});})(x67076_67408))
;

x67076_67408.lark$editor$ICursor$start$arity$1 = ((function (x67076_67408){
return (function (this$){
var this$__$1 = this;
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2((0),(0)) : lark.editors.codemirror.Pos.call(null,(0),(0)));
});})(x67076_67408))
;

x67076_67408.lark$editor$ICursor$end$arity$1 = ((function (x67076_67408){
return (function (this$){
var this$__$1 = this;
var G__67144 = this$__$1.lastLine();
var G__67145 = cljs.core.count(this$__$1.getLine(this$__$1.lastLine()));
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__67144,G__67145) : lark.editors.codemirror.Pos.call(null,G__67144,G__67145));
});})(x67076_67408))
;

x67076_67408.cljs$core$IWatchable$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.cljs$core$IWatchable$_add_watch$arity$3 = ((function (x67076_67408){
return (function (this$,key,f){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.update,new cljs.core.Keyword("lark.editors.codemirror","watches","lark.editors.codemirror/watches",-1335755907),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,f], 0));
});})(x67076_67408))
;

x67076_67408.cljs$core$IWatchable$_remove_watch$arity$2 = ((function (x67076_67408){
return (function (this$,key){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.update,new cljs.core.Keyword("lark.editors.codemirror","watches","lark.editors.codemirror/watches",-1335755907),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});})(x67076_67408))
;

x67076_67408.cljs$core$IWatchable$_notify_watches$arity$3 = ((function (x67076_67408){
return (function (this$,oldval,newval){
var this$__$1 = this;
var seq__67155 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("lark.editors.codemirror","watches","lark.editors.codemirror/watches",-1335755907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$__$1))));
var chunk__67156 = null;
var count__67157 = (0);
var i__67158 = (0);
while(true){
if((i__67158 < count__67157)){
var watcher = chunk__67156.cljs$core$IIndexed$_nth$arity$2(null,i__67158);
(watcher.cljs$core$IFn$_invoke$arity$3 ? watcher.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : watcher.call(null,this$__$1,oldval,newval));


var G__67454 = seq__67155;
var G__67455 = chunk__67156;
var G__67456 = count__67157;
var G__67457 = (i__67158 + (1));
seq__67155 = G__67454;
chunk__67156 = G__67455;
count__67157 = G__67456;
i__67158 = G__67457;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__67155);
if(temp__5720__auto__){
var seq__67155__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67155__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67155__$1);
var G__67461 = cljs.core.chunk_rest(seq__67155__$1);
var G__67462 = c__4550__auto__;
var G__67463 = cljs.core.count(c__4550__auto__);
var G__67464 = (0);
seq__67155 = G__67461;
chunk__67156 = G__67462;
count__67157 = G__67463;
i__67158 = G__67464;
continue;
} else {
var watcher = cljs.core.first(seq__67155__$1);
(watcher.cljs$core$IFn$_invoke$arity$3 ? watcher.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : watcher.call(null,this$__$1,oldval,newval));


var G__67466 = cljs.core.next(seq__67155__$1);
var G__67467 = null;
var G__67468 = (0);
var G__67469 = (0);
seq__67155 = G__67466;
chunk__67156 = G__67467;
count__67157 = G__67468;
i__67158 = G__67469;
continue;
}
} else {
return null;
}
}
break;
}
});})(x67076_67408))
;

x67076_67408.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x67076_67408.cljs$core$IDeref$_deref$arity$1 = ((function (x67076_67408){
return (function (this$){
var this$__$1 = this;
var obj67167 = this$__$1;
var k67168 = "cljs$state";
if((function (){var obj67169 = obj67167;
return (((!((obj67169 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k67168,obj67169)));
})()){
return (obj67167[k67168]);
} else {
return undefined;
}
});})(x67076_67408))
;

module$node_modules$codemirror$lib$codemirror.defineOption("magicTree",false,(function (cm,on_QMARK_){
if(cljs.core.truth_(on_QMARK_)){
lark.editors.codemirror.require_opts(cm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljsState"], null));

cm.on("change",lark.editors.codemirror.update_ast_BANG_);

return lark.editors.codemirror.update_ast_BANG_(cm);
} else {
return null;
}
}));
module$node_modules$codemirror$lib$codemirror.defineOption("magicCursor",false,(function (cm,on_QMARK_){
if(cljs.core.truth_(on_QMARK_)){
lark.editors.codemirror.require_opts(cm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["magicTree"], null));

cm.on("focus",lark.editors.codemirror.update_cursor_BANG_);

cm.on("cursorActivity",lark.editors.codemirror.update_cursor_BANG_);

cm.on("change",lark.editors.codemirror.update_cursor_BANG_);

return lark.editors.codemirror.update_cursor_BANG_(cm);
} else {
return null;
}
}));
module$node_modules$codemirror$lib$codemirror.defineOption("magicBrackets",false,(function (cm,on_QMARK_){
if(cljs.core.truth_(on_QMARK_)){
lark.editors.codemirror.require_opts(cm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["magicCursor"], null));

cm.on("keyup",lark.editors.codemirror.keyup_selection_update_BANG_);

var G__67204_67477 = window;
var G__67205_67478 = "blur";
var G__67206_67479 = ((function (G__67204_67477,G__67205_67478){
return (function (){
return lark.editors.codemirror.return_to_temp_marker_BANG_(cm);
});})(G__67204_67477,G__67205_67478))
;
goog.events.listen(G__67204_67477,G__67205_67478,G__67206_67479);

var G__67207_67480 = window;
var G__67208_67481 = "blur";
var G__67209_67482 = ((function (G__67207_67480,G__67208_67481){
return (function (){
return lark.editors.codemirror.clear_brackets_BANG_(cm);
});})(G__67207_67480,G__67208_67481))
;
goog.events.listen(G__67207_67480,G__67208_67481,G__67209_67482);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cm,cljs.core.assoc,new cljs.core.Keyword("magic","brackets?","magic/brackets?",-594931171),true);
} else {
return null;
}
}));
module$node_modules$codemirror$lib$codemirror.defineOption("cljsState",false,(function (cm){
return (cm["cljs$state"] = (function (){var or__4131__auto__ = (cm["cljs$state"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lark.editors.codemirror","watches","lark.editors.codemirror/watches",-1335755907),cljs.core.PersistentArrayMap.EMPTY], null);
}
})());
}));

//# sourceMappingURL=lark.editors.codemirror.js.map
