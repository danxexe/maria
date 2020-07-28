goog.provide('lark.editors.codemirror');
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
var G__50357 = k;
var G__50357__$1 = (((G__50357 instanceof cljs.core.Keyword))?G__50357.fqn:null);
switch (G__50357__$1) {
case "line":
var G__50360 = v;
var G__50361 = o__$1.ch;
return module$node_modules$codemirror$lib$codemirror.Pos(G__50360,G__50361);

break;
case "column":
var G__50368 = o__$1.line;
var G__50369 = v;
return module$node_modules$codemirror$lib$codemirror.Pos(G__50368,G__50369);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50357__$1)].join('')));

}
});

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
var G__50370 = k;
var G__50370__$1 = (((G__50370 instanceof cljs.core.Keyword))?G__50370.fqn:null);
switch (G__50370__$1) {
case "line":
return o__$1.line;

break;
case "column":
return o__$1.ch;

break;
default:
var obj50371 = o__$1;
var k50372 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj50373 = obj50371;
return (((!((obj50373 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50372,obj50373)));
})()){
return (obj50371[k50372]);
} else {
return undefined;
}

}
});

module$node_modules$codemirror$lib$codemirror.Pos.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
var G__50385 = k;
var G__50385__$1 = (((G__50385 instanceof cljs.core.Keyword))?G__50385.fqn:null);
switch (G__50385__$1) {
case "line":
return o__$1.line;

break;
case "column":
return o__$1.column;

break;
default:
var obj50386 = o__$1;
var k50387 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj50388 = obj50386;
return (((!((obj50388 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50387,obj50388)));
})()){
return (obj50386[k50387]);
} else {
return not_found;
}

}
});
/**
 * Coerces Clojure maps to CodeMirror positions.
 */
lark.editors.codemirror.range__GT_Pos = (function lark$editors$codemirror$range__GT_Pos(p__50392){
var map__50393 = p__50392;
var map__50393__$1 = (((((!((map__50393 == null))))?(((((map__50393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50393):map__50393);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50393__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50393__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return module$node_modules$codemirror$lib$codemirror.Pos(line,column);
});
lark.editors.codemirror.Pos__GT_range = (function lark$editors$codemirror$Pos__GT_range(cursor){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),cursor.line,new cljs.core.Keyword(null,"column","column",2078222095),cursor.ch,new cljs.core.Keyword(null,"end-line","end-line",1837326455),cursor.line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),cursor.ch], null);
});
lark.editors.codemirror.cursor_bookmark = (function lark$editors$codemirror$cursor_bookmark(){
var G__50396 = "div";
var G__50397 = ({"className": "cursor-marker"});
return goog.dom.createDom(G__50396,G__50397);
});
/**
 * Current sexp, or nearest sexp to the left, or parent.
 */
lark.editors.codemirror.sexp_near = (function lark$editors$codemirror$sexp_near(var_args){
var G__50399 = arguments.length;
switch (G__50399) {
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

lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$3 = (function (pos,loc,p__50400){
var map__50401 = p__50400;
var map__50401__$1 = (((((!((map__50401 == null))))?(((((map__50401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50401):map__50401);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50401__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"left","left",-399115937));
var ignore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50401__$1,new cljs.core.Keyword(null,"ignore?","ignore?",1868915892),lark.tree.node.whitespace_QMARK_);
var nav = (function (){var G__50403 = direction;
var G__50403__$1 = (((G__50403 instanceof cljs.core.Keyword))?G__50403.fqn:null);
switch (G__50403__$1) {
case "left":
return fast_zip.core.left;

break;
case "right":
return fast_zip.core.right;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50403__$1)].join('')));

}
})();
var the_loc = ((cljs.core.not((function (){var G__50408 = fast_zip.core.node(loc);
return (ignore_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ignore_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50408) : ignore_QMARK_.call(null,G__50408));
})()))?loc:(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.select_keys(fast_zip.core.node(loc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)));
if(and__4120__auto__){
var and__4120__auto____$1 = (nav.cljs$core$IFn$_invoke$arity$1 ? nav.cljs$core$IFn$_invoke$arity$1(loc) : nav.call(null,loc));
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not((function (){var G__50410 = fast_zip.core.node((nav.cljs$core$IFn$_invoke$arity$1 ? nav.cljs$core$IFn$_invoke$arity$1(loc) : nav.call(null,loc)));
return (ignore_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ignore_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50410) : ignore_QMARK_.call(null,G__50410));
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
var vec__50417_50887 = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(cm);
var kind_50888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50417_50887,(0),null);
var marker_50889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50417_50887,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_50888,new cljs.core.Keyword(null,"cursor","cursor",1011937484))){
marker_50889.clear();
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cm,cljs.core.dissoc,new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258));
});
lark.editors.codemirror.temp_marker_cursor_pos = (function lark$editors$codemirror$temp_marker_cursor_pos(cm){
var vec__50422 = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(cm);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50422,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50422,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"cursor","cursor",1011937484))){
return marker.find();
} else {
return null;
}
});
lark.editors.codemirror.temp_marker_selections = (function lark$editors$codemirror$temp_marker_selections(cm){
var vec__50425 = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(cm);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50425,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50425,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"selections","selections",-1277610233))){
return marker;
} else {
return null;
}
});
lark.editors.codemirror.return_to_temp_marker_BANG_ = (function lark$editors$codemirror$return_to_temp_marker_BANG_(editor){
var temp__5720__auto__ = new cljs.core.Keyword("lark.editors.codemirror","temp-marker","lark.editors.codemirror/temp-marker",-1983469258).cljs$core$IFn$_invoke$arity$1(editor);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__50433 = temp__5720__auto__;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50433,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50433,(1),null);
var G__50439_50893 = kind;
var G__50439_50894__$1 = (((G__50439_50893 instanceof cljs.core.Keyword))?G__50439_50893.fqn:null);
switch (G__50439_50894__$1) {
case "cursor":
var temp__5720__auto___50920__$1 = data.find();
if(cljs.core.truth_(temp__5720__auto___50920__$1)){
var pos_50922 = temp__5720__auto___50920__$1;
editor.setCursor(pos_50922,null,({"scroll": false}));
} else {
}

break;
case "selections":
var temp__5720__auto___50923__$1 = data;
if(cljs.core.truth_(temp__5720__auto___50923__$1)){
var sels_50924 = temp__5720__auto___50923__$1;
editor.setSelections(sels_50924,null,({"scroll": false}));
} else {
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50439_50894__$1)].join('')));

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

var pos_50926__$1 = (function (){var G__50445 = pos;
if(cljs.core.map_QMARK_(pos)){
return lark.editors.codemirror.range__GT_Pos(G__50445);
} else {
return G__50445;
}
})();
cm.setCursor(pos_50926__$1,null,({"scroll": false}));

return cm;
});
/**
 * If value is different from editor's current value, set value, retain cursor position
 */
lark.editors.codemirror.set_preserve_cursor_BANG_ = (function lark$editors$codemirror$set_preserve_cursor_BANG_(editor,value){
if((value === editor.getValue())){
} else {
var cursor_pos_50930 = lark.editors.codemirror.get_cursor(editor);
editor.setValue(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

if(cljs.core.truth_((editor["state"]["focused"]))){
editor.setCursor(cursor_pos_50930,null,({"scroll": false}));
} else {
}
}

return editor;
});
/**
 * Given a Clojure-style column and line range, return Codemirror-compatible `from` and `to` positions
 */
lark.editors.codemirror.range__GT_positions = (function lark$editors$codemirror$range__GT_positions(p__50446){
var map__50447 = p__50446;
var map__50447__$1 = (((((!((map__50447 == null))))?(((((map__50447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50447):map__50447);
var node = map__50447__$1;
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50447__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50447__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50447__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50447__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$codemirror$lib$codemirror.Pos(line,column),(function (){var G__50449 = (function (){var or__4131__auto__ = end_line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__50450 = (function (){var or__4131__auto__ = end_column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return column;
}
})();
return module$node_modules$codemirror$lib$codemirror.Pos(G__50449,G__50450);
})()], null);
});
/**
 * Add marks to a collection of Clojure-style ranges
 */
lark.editors.codemirror.mark_range_BANG_ = (function lark$editors$codemirror$mark_range_BANG_(cm,range,payload){
var vec__50464 = lark.editors.codemirror.range__GT_positions(range);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50464,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50464,(1),null);
return cm.markText(from,to,payload);
});
/**
 * Add marks to a collection of Clojure-style ranges
 */
lark.editors.codemirror.mark_ranges_BANG_ = (function lark$editors$codemirror$mark_ranges_BANG_(cm,ranges,payload){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__50473){
var vec__50474 = p__50473;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50474,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50474,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cm.markText(from,to,payload));
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lark.editors.codemirror.range__GT_positions,ranges));
});
lark.editors.codemirror.range_text = (function lark$editors$codemirror$range_text(cm,range){
var vec__50477 = lark.editors.codemirror.range__GT_positions(range);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477,(1),null);
return cm.getRange(from,to);
});
/**
 * Copy a {:line .. :column ..} range from a CodeMirror instance.
 */
lark.editors.codemirror.select_range = (function lark$editors$codemirror$select_range(cm,range){
var vec__50480 = lark.editors.codemirror.range__GT_positions(range);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(1),null);
return cm.setSelection(from,to,({"scroll": false}));
});
lark.editors.codemirror.replace_range_BANG_ = (function lark$editors$codemirror$replace_range_BANG_(var_args){
var G__50486 = arguments.length;
switch (G__50486) {
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

lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cm,s,from,p__50488){
var map__50489 = p__50488;
var map__50489__$1 = (((((!((map__50489 == null))))?(((((map__50489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50489):map__50489);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),column], null)], 0)));
});

lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cm,s,p__50495){
var map__50496 = p__50495;
var map__50496__$1 = (((((!((map__50496 == null))))?(((((map__50496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50496):map__50496);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50496__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50496__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50496__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50496__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cm.replaceRange(s,(lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(line,column) : lark.editors.codemirror.Pos.call(null,line,column)),(function (){var G__50498 = (function (){var or__4131__auto__ = end_line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__50499 = (function (){var or__4131__auto__ = end_column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return column;
}
})();
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__50498,G__50499) : lark.editors.codemirror.Pos.call(null,G__50498,G__50499));
})());
});

lark.editors.codemirror.replace_range_BANG_.cljs$lang$maxFixedArity = 4;

lark.editors.codemirror.temp_select_node_BANG_ = (function lark$editors$codemirror$temp_select_node_BANG_(cm,node){
lark.editors.codemirror.set_temp_marker_BANG_(cm);

return lark.editors.codemirror.select_range(cm,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(node));
});
lark.editors.codemirror.pos__GT_boundary = (function lark$editors$codemirror$pos__GT_boundary(var_args){
var G__50504 = arguments.length;
switch (G__50504) {
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
var G__50515 = side;
var G__50515__$1 = (((G__50515 instanceof cljs.core.Keyword))?G__50515.fqn:null);
switch (G__50515__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50515__$1)].join('')));

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
return cljs.core.not((function (){var G__50518 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
return (lark.tree.nav.prefix_parents.cljs$core$IFn$_invoke$arity$1 ? lark.tree.nav.prefix_parents.cljs$core$IFn$_invoke$arity$1(G__50518) : lark.tree.nav.prefix_parents.call(null,G__50518));
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
lark.editors.codemirror.select_at_cursor = (function lark$editors$codemirror$select_at_cursor(p__50520,top_loc_QMARK_){
var map__50521 = p__50520;
var map__50521__$1 = (((((!((map__50521 == null))))?(((((map__50521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50521):map__50521);
var cm = map__50521__$1;
var map__50522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50521__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__50522__$1 = (((((!((map__50522 == null))))?(((((map__50522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50522):map__50522);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
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
var seq__50530_50971 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"handles","handles",-1061347879)], null)));
var chunk__50531_50972 = null;
var count__50532_50973 = (0);
var i__50533_50974 = (0);
while(true){
if((i__50533_50974 < count__50532_50973)){
var handle_50975 = chunk__50531_50972.cljs$core$IIndexed$_nth$arity$2(null,i__50533_50974);
handle_50975.clear();


var G__50976 = seq__50530_50971;
var G__50977 = chunk__50531_50972;
var G__50978 = count__50532_50973;
var G__50979 = (i__50533_50974 + (1));
seq__50530_50971 = G__50976;
chunk__50531_50972 = G__50977;
count__50532_50973 = G__50978;
i__50533_50974 = G__50979;
continue;
} else {
var temp__5720__auto___50980 = cljs.core.seq(seq__50530_50971);
if(temp__5720__auto___50980){
var seq__50530_50981__$1 = temp__5720__auto___50980;
if(cljs.core.chunked_seq_QMARK_(seq__50530_50981__$1)){
var c__4550__auto___50982 = cljs.core.chunk_first(seq__50530_50981__$1);
var G__50983 = cljs.core.chunk_rest(seq__50530_50981__$1);
var G__50984 = c__4550__auto___50982;
var G__50985 = cljs.core.count(c__4550__auto___50982);
var G__50986 = (0);
seq__50530_50971 = G__50983;
chunk__50531_50972 = G__50984;
count__50532_50973 = G__50985;
i__50533_50974 = G__50986;
continue;
} else {
var handle_50988 = cljs.core.first(seq__50530_50981__$1);
handle_50988.clear();


var G__50989 = cljs.core.next(seq__50530_50981__$1);
var G__50990 = null;
var G__50991 = (0);
var G__50992 = (0);
seq__50530_50971 = G__50989;
chunk__50531_50972 = G__50990;
count__50532_50973 = G__50991;
i__50533_50974 = G__50992;
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

if(cljs.core.truth_((function (){var G__50540 = node;
if((G__50540 == null)){
return null;
} else {
return (lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50540) : lark.tree.node.may_contain_children_QMARK_.call(null,G__50540));
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"handles","handles",-1061347879)], null),lark.editors.codemirror.mark_ranges_BANG_(cm,lark.tree.range.node_highlights(node),({"className": "CodeMirror-matchingbracket"})));
} else {
return null;
}
});
lark.editors.codemirror.clear_parse_errors_BANG_ = (function lark$editors$codemirror$clear_parse_errors_BANG_(cm){
var seq__50546_51031 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","errors","magic/errors",-878502635),new cljs.core.Keyword(null,"handles","handles",-1061347879)], null)));
var chunk__50547_51032 = null;
var count__50548_51033 = (0);
var i__50549_51034 = (0);
while(true){
if((i__50549_51034 < count__50548_51033)){
var handle_51036 = chunk__50547_51032.cljs$core$IIndexed$_nth$arity$2(null,i__50549_51034);
handle_51036.clear();


var G__51037 = seq__50546_51031;
var G__51038 = chunk__50547_51032;
var G__51039 = count__50548_51033;
var G__51040 = (i__50549_51034 + (1));
seq__50546_51031 = G__51037;
chunk__50547_51032 = G__51038;
count__50548_51033 = G__51039;
i__50549_51034 = G__51040;
continue;
} else {
var temp__5720__auto___51041 = cljs.core.seq(seq__50546_51031);
if(temp__5720__auto___51041){
var seq__50546_51042__$1 = temp__5720__auto___51041;
if(cljs.core.chunked_seq_QMARK_(seq__50546_51042__$1)){
var c__4550__auto___51043 = cljs.core.chunk_first(seq__50546_51042__$1);
var G__51044 = cljs.core.chunk_rest(seq__50546_51042__$1);
var G__51045 = c__4550__auto___51043;
var G__51046 = cljs.core.count(c__4550__auto___51043);
var G__51047 = (0);
seq__50546_51031 = G__51044;
chunk__50547_51032 = G__51045;
count__50548_51033 = G__51046;
i__50549_51034 = G__51047;
continue;
} else {
var handle_51048 = cljs.core.first(seq__50546_51042__$1);
handle_51048.clear();


var G__51050 = cljs.core.next(seq__50546_51042__$1);
var G__51052 = null;
var G__51053 = (0);
var G__51054 = (0);
seq__50546_51031 = G__51050;
chunk__50547_51032 = G__51052;
count__50548_51033 = G__51053;
i__50549_51034 = G__51054;
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

var handles = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function lark$editors$codemirror$highlight_parse_errors_BANG__$_iter__50562(s__50563){
return (new cljs.core.LazySeq(null,(function (){
var s__50563__$1 = s__50563;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50563__$1);
if(temp__5720__auto__){
var s__50563__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50563__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50563__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50565 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50564 = (0);
while(true){
if((i__50564 < size__4522__auto__)){
var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50564);
cljs.core.chunk_append(b__50565,lark.editors.codemirror.mark_range_BANG_(cm,node,({"className": ["error-text",(function (){var temp__5720__auto____$1 = (function (){var G__50569 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
if((G__50569 == null)){
return null;
} else {
return cljs.core.name(G__50569);
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var tag = temp__5720__auto____$1;
return [" cm-",tag].join('');
} else {
return null;
}
})()].join('')})));

var G__51059 = (i__50564 + (1));
i__50564 = G__51059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50565),lark$editors$codemirror$highlight_parse_errors_BANG__$_iter__50562(cljs.core.chunk_rest(s__50563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50565),null);
}
} else {
var node = cljs.core.first(s__50563__$2);
return cljs.core.cons(lark.editors.codemirror.mark_range_BANG_(cm,node,({"className": ["error-text",(function (){var temp__5720__auto____$1 = (function (){var G__50574 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
if((G__50574 == null)){
return null;
} else {
return cljs.core.name(G__50574);
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var tag = temp__5720__auto____$1;
return [" cm-",tag].join('');
} else {
return null;
}
})()].join('')})),lark$editors$codemirror$highlight_parse_errors_BANG__$_iter__50562(cljs.core.rest(s__50563__$2)));
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
var len__4730__auto___51063 = arguments.length;
var i__4731__auto___51064 = (0);
while(true){
if((i__4731__auto___51064 < len__4730__auto___51063)){
args__4736__auto__.push((arguments[i__4731__auto___51064]));

var G__51065 = (i__4731__auto___51064 + (1));
i__4731__auto___51064 = G__51065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lark.editors.codemirror.set_zipper_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lark.editors.codemirror.set_zipper_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (editor,zipper,p__50580){
var vec__50581 = p__50580;
var map__50584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50581,(0),null);
var map__50584__$1 = (((((!((map__50584 == null))))?(((((map__50584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50584):map__50584);
var decorate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50584__$1,new cljs.core.Keyword(null,"decorate?","decorate?",-1333310590),true);
var ast = fast_zip.core.node(zipper);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(editor,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zipper","zipper",1500694438),zipper,new cljs.core.Keyword(null,"ast","ast",-860334068),ast], null));

var temp__5720__auto___51069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"on-ast","on-ast",1252096936)], null));
if(cljs.core.truth_(temp__5720__auto___51069)){
var on_ast_51070 = temp__5720__auto___51069;
(on_ast_51070.cljs$core$IFn$_invoke$arity$1 ? on_ast_51070.cljs$core$IFn$_invoke$arity$1(ast) : on_ast_51070.call(null,ast));
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
lark.editors.codemirror.set_zipper_BANG_.cljs$lang$applyTo = (function (seq50577){
var G__50578 = cljs.core.first(seq50577);
var seq50577__$1 = cljs.core.next(seq50577);
var G__50579 = cljs.core.first(seq50577__$1);
var seq50577__$2 = cljs.core.next(seq50577__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50578,G__50579,seq50577__$2);
});

lark.editors.codemirror.update_ast_BANG_ = (function lark$editors$codemirror$update_ast_BANG_(p__50587){
var map__50588 = p__50587;
var map__50588__$1 = (((((!((map__50588 == null))))?(((((map__50588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50588):map__50588);
var editor = map__50588__$1;
var map__50589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50588__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__50589__$1 = (((((!((map__50589 == null))))?(((((map__50589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50589):map__50589);
var ast = map__50589__$1;
var ast_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var value = editor.getValue();
if((((ast_source == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ast_source,value)))){
var map__50594 = (function (){try{return (lark.tree.core.ast.cljs$core$IFn$_invoke$arity$1 ? lark.tree.core.ast.cljs$core$IFn$_invoke$arity$1(value) : lark.tree.core.ast.call(null,value));
}catch (e50595){if((e50595 instanceof Error)){
var e = e50595;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error in update-ast!",e], 0));

console.log(e.stack);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
} else {
throw e50595;

}
}})();
var map__50594__$1 = (((((!((map__50594 == null))))?(((((map__50594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50594):map__50594);
var next_ast = map__50594__$1;
var invalid_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50594__$1,new cljs.core.Keyword(null,"invalid-nodes","invalid-nodes",595179254));
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
var len__4730__auto___51080 = arguments.length;
var i__4731__auto___51081 = (0);
while(true){
if((i__4731__auto___51081 < len__4730__auto___51080)){
args__4736__auto__.push((arguments[i__4731__auto___51081]));

var G__51083 = (i__4731__auto___51081 + (1));
i__4731__auto___51081 = G__51083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lark.editors.codemirror.update_cursor_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lark.editors.codemirror.update_cursor_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__50615,p__50616){
var map__50617 = p__50615;
var map__50617__$1 = (((((!((map__50617 == null))))?(((((map__50617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50617):map__50617);
var cm = map__50617__$1;
var map__50618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__50618__$1 = (((((!((map__50618 == null))))?(((((map__50618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50618):map__50618);
var prev_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var prev_zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618__$1,new cljs.core.Keyword(null,"prev-zipper","prev-zipper",-1897943723));
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
var brackets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("magic","brackets?","magic/brackets?",-594931171));
var vec__50619 = p__50616;
var force_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50619,(0),null);
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
var temp__5720__auto____$1 = (function (){var G__50628 = zipper;
if((G__50628 == null)){
return null;
} else {
return lark.tree.nav.navigate(G__50628,pos);
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var loc = temp__5720__auto____$1;
var bracket_loc = lark.editors.codemirror.sexp_near.cljs$core$IFn$_invoke$arity$3(pos,loc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore?","ignore?",1868915892),((function (loc,temp__5720__auto____$1,pos,temp__5720__auto__,map__50617,map__50617__$1,cm,map__50618,map__50618__$1,prev_pos,prev_zipper,zipper,brackets_QMARK_,vec__50619,force_QMARK_){
return (function (p1__50607_SHARP_){
var or__4131__auto__ = lark.tree.node.whitespace_QMARK_(p1__50607_SHARP_);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__50607_SHARP_,new cljs.core.Keyword(null,"invalid?","invalid?",789397235));
}
});})(loc,temp__5720__auto____$1,pos,temp__5720__auto__,map__50617,map__50617__$1,cm,map__50618,map__50618__$1,prev_pos,prev_zipper,zipper,brackets_QMARK_,vec__50619,force_QMARK_))
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
lark.editors.codemirror.update_cursor_BANG_.cljs$lang$applyTo = (function (seq50608){
var G__50609 = cljs.core.first(seq50608);
var seq50608__$1 = cljs.core.next(seq50608);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50609,seq50608__$1);
});

lark.editors.codemirror.require_opts = (function lark$editors$codemirror$require_opts(cm,opts){
var seq__50636 = cljs.core.seq(opts);
var chunk__50637 = null;
var count__50638 = (0);
var i__50639 = (0);
while(true){
if((i__50639 < count__50638)){
var opt = chunk__50637.cljs$core$IIndexed$_nth$arity$2(null,i__50639);
cm.setOption(opt,true);


var G__51097 = seq__50636;
var G__51098 = chunk__50637;
var G__51099 = count__50638;
var G__51100 = (i__50639 + (1));
seq__50636 = G__51097;
chunk__50637 = G__51098;
count__50638 = G__51099;
i__50639 = G__51100;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50636);
if(temp__5720__auto__){
var seq__50636__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50636__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50636__$1);
var G__51102 = cljs.core.chunk_rest(seq__50636__$1);
var G__51103 = c__4550__auto__;
var G__51104 = cljs.core.count(c__4550__auto__);
var G__51105 = (0);
seq__50636 = G__51102;
chunk__50637 = G__51103;
count__50638 = G__51104;
i__50639 = G__51105;
continue;
} else {
var opt = cljs.core.first(seq__50636__$1);
cm.setOption(opt,true);


var G__51106 = cljs.core.next(seq__50636__$1);
var G__51107 = null;
var G__51108 = (0);
var G__51109 = (0);
seq__50636 = G__51106;
chunk__50637 = G__51107;
count__50638 = G__51108;
i__50639 = G__51109;
continue;
}
} else {
return null;
}
}
break;
}
});
var x50650_51110 = module$node_modules$codemirror$lib$codemirror.prototype;
x50650_51110.cljs$core$ITransientAssociative$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = ((function (x50650_51110){
return (function (this$,key,val){
var this$__$1 = this;

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.assoc,new cljs.core.Keyword(null,"ast","ast",-860334068),val);

return lark.editors.codemirror.update_ast_BANG_(this$__$1);
});})(x50650_51110))
;

x50650_51110.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.cljs$core$ILookup$_lookup$arity$2 = ((function (x50650_51110){
return (function (this$,k){
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var obj50669 = this$__$1;
var k50670 = "cljs$state";
if((function (){var obj50671 = obj50669;
return (((!((obj50671 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50670,obj50671)));
})()){
return (obj50669[k50670]);
} else {
return undefined;
}
})(),k);
});})(x50650_51110))
;

x50650_51110.cljs$core$ILookup$_lookup$arity$3 = ((function (x50650_51110){
return (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((this$__$1["cljs$state"]),k,not_found);
});})(x50650_51110))
;

x50650_51110.lark$editor$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.lark$editor$IHistory$get_selections$arity$1 = ((function (x50650_51110){
return (function (cm){
var cm__$1 = this;
var temp__5718__auto__ = lark.editors.codemirror.temp_marker_cursor_pos(cm__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var root_cursor = temp__5718__auto__;
return [({"anchor": root_cursor, "head": root_cursor})];
} else {
return cm__$1.listSelections();
}
});})(x50650_51110))
;

x50650_51110.lark$editor$IHistory$put_selections_BANG_$arity$2 = ((function (x50650_51110){
return (function (cm,selections){
var cm__$1 = this;
return cm__$1.setSelections(selections);
});})(x50650_51110))
;

x50650_51110.lark$editor$IKind$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.lark$editor$IKind$kind$arity$1 = ((function (x50650_51110){
return (function (this$){
var this$__$1 = this;
return new cljs.core.Keyword(null,"code","code",1586293142);
});})(x50650_51110))
;

x50650_51110.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (x50650_51110){
return (function (this$,newval){
var this$__$1 = this;
var old_val = cljs.core.deref(this$__$1);
var obj50684_51115 = this$__$1;
var obj50686_51116 = (((!((obj50684_51115 == null))))?obj50684_51115:({}));
(obj50686_51116["cljs$state"] = newval);


return cljs.core._notify_watches(this$__$1,old_val,newval);
});})(x50650_51110))
;

x50650_51110.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (x50650_51110){
return (function (this$,f){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__50690 = cljs.core.deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50690) : f.call(null,G__50690));
})());
});})(x50650_51110))
;

x50650_51110.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (x50650_51110){
return (function (this$,f,a){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__50691 = cljs.core.deref(this$__$1);
var G__50692 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__50691,G__50692) : f.call(null,G__50691,G__50692));
})());
});})(x50650_51110))
;

x50650_51110.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (x50650_51110){
return (function (this$,f,a,b){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__50693 = cljs.core.deref(this$__$1);
var G__50694 = a;
var G__50695 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__50693,G__50694,G__50695) : f.call(null,G__50693,G__50694,G__50695));
})());
});})(x50650_51110))
;

x50650_51110.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (x50650_51110){
return (function (this$,f,a,b,xs){
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.deref(this$__$1),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null)),xs)));
});})(x50650_51110))
;

x50650_51110.lark$editor$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.lark$editor$ICursor$_focus_BANG_$arity$2 = ((function (x50650_51110){
return (function (this$,coords){
var this$__$1 = this;
var coords__$1 = (((coords instanceof cljs.core.Keyword))?(function (){var G__50701 = coords;
var G__50701__$1 = (((G__50701 instanceof cljs.core.Keyword))?G__50701.fqn:null);
switch (G__50701__$1) {
case "end":
var G__50702 = this$__$1.lineCount();
var G__50703 = cljs.core.count(this$__$1.getLine(this$__$1.lineCount()));
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__50702,G__50703) : lark.editors.codemirror.Pos.call(null,G__50702,G__50703));

break;
case "start":
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2((0),(0)) : lark.editors.codemirror.Pos.call(null,(0),(0)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50701__$1)].join('')));

}
})():coords);
var G__50708_51118 = this$__$1;
G__50708_51118.focus();

var G__50709_51119 = G__50708_51118;
if(cljs.core.truth_(coords__$1)){
G__50709_51119.setCursor(coords__$1,null,({"scroll": false}));
} else {
}


return lark.editor.scroll_into_view(lark.editor.cursor_coords(this$__$1));
});})(x50650_51110))
;

x50650_51110.lark$editor$ICursor$get_cursor$arity$1 = ((function (x50650_51110){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.somethingSelected())){
return null;
} else {
return lark.editors.codemirror.get_cursor(this$__$1);
}
});})(x50650_51110))
;

x50650_51110.lark$editor$ICursor$set_cursor$arity$2 = ((function (x50650_51110){
return (function (this$,position){
var this$__$1 = this;
return this$__$1.setCursor(position);
});})(x50650_51110))
;

x50650_51110.lark$editor$ICursor$coords_cursor$arity$3 = ((function (x50650_51110){
return (function (this$,client_x,client_y){
var this$__$1 = this;
return this$__$1.coordsChar(({"left": client_x, "top": client_y}),"window");
});})(x50650_51110))
;

x50650_51110.lark$editor$ICursor$cursor_coords$arity$1 = ((function (x50650_51110){
return (function (this$){
var this$__$1 = this;
var coords = this$__$1.cursorCoords();
return ({"left": (coords.left - window.scrollX), "right": (coords.right - window.scrollX), "top": (coords.top - window.scrollY), "bottom": (coords.bottom - window.scrollY)});
});})(x50650_51110))
;

x50650_51110.lark$editor$ICursor$start$arity$1 = ((function (x50650_51110){
return (function (this$){
var this$__$1 = this;
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2((0),(0)) : lark.editors.codemirror.Pos.call(null,(0),(0)));
});})(x50650_51110))
;

x50650_51110.lark$editor$ICursor$end$arity$1 = ((function (x50650_51110){
return (function (this$){
var this$__$1 = this;
var G__50733 = this$__$1.lastLine();
var G__50734 = cljs.core.count(this$__$1.getLine(this$__$1.lastLine()));
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__50733,G__50734) : lark.editors.codemirror.Pos.call(null,G__50733,G__50734));
});})(x50650_51110))
;

x50650_51110.cljs$core$IWatchable$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.cljs$core$IWatchable$_add_watch$arity$3 = ((function (x50650_51110){
return (function (this$,key,f){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.update,new cljs.core.Keyword("lark.editors.codemirror","watches","lark.editors.codemirror/watches",-1335755907),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,f], 0));
});})(x50650_51110))
;

x50650_51110.cljs$core$IWatchable$_remove_watch$arity$2 = ((function (x50650_51110){
return (function (this$,key){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.update,new cljs.core.Keyword("lark.editors.codemirror","watches","lark.editors.codemirror/watches",-1335755907),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});})(x50650_51110))
;

x50650_51110.cljs$core$IWatchable$_notify_watches$arity$3 = ((function (x50650_51110){
return (function (this$,oldval,newval){
var this$__$1 = this;
var seq__50736 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("lark.editors.codemirror","watches","lark.editors.codemirror/watches",-1335755907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$__$1))));
var chunk__50737 = null;
var count__50738 = (0);
var i__50739 = (0);
while(true){
if((i__50739 < count__50738)){
var watcher = chunk__50737.cljs$core$IIndexed$_nth$arity$2(null,i__50739);
(watcher.cljs$core$IFn$_invoke$arity$3 ? watcher.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : watcher.call(null,this$__$1,oldval,newval));


var G__51129 = seq__50736;
var G__51130 = chunk__50737;
var G__51131 = count__50738;
var G__51132 = (i__50739 + (1));
seq__50736 = G__51129;
chunk__50737 = G__51130;
count__50738 = G__51131;
i__50739 = G__51132;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50736);
if(temp__5720__auto__){
var seq__50736__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50736__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50736__$1);
var G__51134 = cljs.core.chunk_rest(seq__50736__$1);
var G__51135 = c__4550__auto__;
var G__51136 = cljs.core.count(c__4550__auto__);
var G__51137 = (0);
seq__50736 = G__51134;
chunk__50737 = G__51135;
count__50738 = G__51136;
i__50739 = G__51137;
continue;
} else {
var watcher = cljs.core.first(seq__50736__$1);
(watcher.cljs$core$IFn$_invoke$arity$3 ? watcher.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : watcher.call(null,this$__$1,oldval,newval));


var G__51141 = cljs.core.next(seq__50736__$1);
var G__51142 = null;
var G__51143 = (0);
var G__51144 = (0);
seq__50736 = G__51141;
chunk__50737 = G__51142;
count__50738 = G__51143;
i__50739 = G__51144;
continue;
}
} else {
return null;
}
}
break;
}
});})(x50650_51110))
;

x50650_51110.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x50650_51110.cljs$core$IDeref$_deref$arity$1 = ((function (x50650_51110){
return (function (this$){
var this$__$1 = this;
var obj50747 = this$__$1;
var k50748 = "cljs$state";
if((function (){var obj50775 = obj50747;
return (((!((obj50775 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k50748,obj50775)));
})()){
return (obj50747[k50748]);
} else {
return undefined;
}
});})(x50650_51110))
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

var G__50850_51156 = window;
var G__50851_51157 = "blur";
var G__50852_51158 = ((function (G__50850_51156,G__50851_51157){
return (function (){
return lark.editors.codemirror.return_to_temp_marker_BANG_(cm);
});})(G__50850_51156,G__50851_51157))
;
goog.events.listen(G__50850_51156,G__50851_51157,G__50852_51158);

var G__50853_51159 = window;
var G__50854_51160 = "blur";
var G__50855_51161 = ((function (G__50853_51159,G__50854_51160){
return (function (){
return lark.editors.codemirror.clear_brackets_BANG_(cm);
});})(G__50853_51159,G__50854_51160))
;
goog.events.listen(G__50853_51159,G__50854_51160,G__50855_51161);

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
