goog.provide('lark.structure.edit');
goog.require('cljs.core');
goog.require('lark.tree.core');
goog.require('lark.tree.range');
goog.require('lark.tree.util');
goog.require('lark.tree.cursor');
goog.require('lark.editors.codemirror');
goog.require('fast_zip.core');
goog.require('goog.dom');
goog.require('goog.dom.Range');
goog.require('clojure.string');
goog.require('lark.tree.nav');
goog.require('lark.tree.parse');
goog.require('lark.tree.node');
goog.require('lark.tree.format');
goog.require('lark.tree.emit');
goog.require('lark.tree.reader');
lark.structure.edit.format_BANG_ = (function lark$structure$edit$format_BANG_(var_args){
var G__67340 = arguments.length;
switch (G__67340) {
case 1:
return lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (editor){
return lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor,cljs.core.PersistentArrayMap.EMPTY);
});

lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (editor,p__67349){
var map__67350 = p__67349;
var map__67350__$1 = (((((!((map__67350 == null))))?(((((map__67350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67350):map__67350);
var preserve_cursor_space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67350__$1,new cljs.core.Keyword(null,"preserve-cursor-space?","preserve-cursor-space?",1113496177));
var pre_val = editor.getValue();
var pre_zipper = (lark.tree.core.string_zip.cljs$core$IFn$_invoke$arity$1 ? lark.tree.core.string_zip.cljs$core$IFn$_invoke$arity$1(pre_val) : lark.tree.core.string_zip.call(null,pre_val));
var pre_pos = lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$1(lark.editors.codemirror.get_cursor(editor));
var cursor_loc = (cljs.core.truth_(preserve_cursor_space_QMARK_)?lark.tree.nav.cursor_space_loc(pre_zipper,pre_pos):null);
var post_val = (function (){var _STAR_active_cursor_node_STAR__orig_val__67354 = lark.tree.reader._STAR_active_cursor_node_STAR_;
var _STAR_active_cursor_node_STAR__temp_val__67355 = (function (){var G__67358 = cursor_loc;
if((G__67358 == null)){
return null;
} else {
return fast_zip.core.node(G__67358);
}
})();
lark.tree.reader._STAR_active_cursor_node_STAR_ = _STAR_active_cursor_node_STAR__temp_val__67355;

try{return lark.tree.core.format(pre_zipper);
}finally {lark.tree.reader._STAR_active_cursor_node_STAR_ = _STAR_active_cursor_node_STAR__orig_val__67354;
}})();
var post_zipper = (lark.tree.core.string_zip.cljs$core$IFn$_invoke$arity$1 ? lark.tree.core.string_zip.cljs$core$IFn$_invoke$arity$1(post_val) : lark.tree.core.string_zip.call(null,post_val));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pre_val,post_val)){
editor.setValue(post_val);
} else {
}

editor.setCursor(lark.editors.codemirror.range__GT_Pos(lark.tree.cursor.position(post_zipper,lark.tree.cursor.path.cljs$core$IFn$_invoke$arity$3(pre_zipper,pre_pos,cursor_loc))));

return lark.editors.codemirror.set_zipper_BANG_(editor,post_zipper);
});

lark.structure.edit.format_BANG_.cljs$lang$maxFixedArity = 2;

lark.structure.edit.other_bracket = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
lark.structure.edit.spaces = (function lark$structure$edit$spaces(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" ")));
});
lark.structure.edit.clipboard_helper_element = cljs.core.memoize((function (){
var textarea = (function (){var G__67365 = goog.dom.createElement("pre");
var G__67366_67700 = G__67365;
var G__67367_67701 = ({"id": "lark-tree-pasteHelper", "contentEditable": true, "className": "fixed o-0 z-0 bottom-0 right-0"});
goog.dom.setProperties(G__67366_67700,G__67367_67701);

return G__67365;
})();
goog.dom.appendChild(document.body,textarea);

return textarea;
}));
/**
 * Copy text to clipboard using a hidden input element.
 */
lark.structure.edit.copy = (function lark$structure$edit$copy(text){
var hadFocus = document.activeElement;
var text__$1 = clojure.string.replace(text,/[\n\r]/,"<br/>");
var _ = ((lark.structure.edit.clipboard_helper_element.cljs$core$IFn$_invoke$arity$0 ? lark.structure.edit.clipboard_helper_element.cljs$core$IFn$_invoke$arity$0() : lark.structure.edit.clipboard_helper_element.call(null))["innerHTML"] = text__$1);
var G__67368_67702 = (function (){var G__67369 = (lark.structure.edit.clipboard_helper_element.cljs$core$IFn$_invoke$arity$0 ? lark.structure.edit.clipboard_helper_element.cljs$core$IFn$_invoke$arity$0() : lark.structure.edit.clipboard_helper_element.call(null));
return goog.dom.Range.createFromNodeContents(G__67369);
})();
G__67368_67702.select();


try{document.execCommand("copy");
}catch (e67370){if((e67370 instanceof Error)){
var e_67703 = e67370;
console.error("Copy command didn't work. Maybe a browser incompatibility?");
} else {
throw e67370;

}
}
return hadFocus.focus();
});
/**
 * Copy a {:line .. :column ..} range from a CodeMirror instance.
 */
lark.structure.edit.copy_range_BANG_ = (function lark$structure$edit$copy_range_BANG_(cm,range){
lark.structure.edit.copy(lark.editors.codemirror.range_text(cm,range));

return true;
});
/**
 * Cut a {:line .. :column ..} range from a CodeMirror instance.
 */
lark.structure.edit.cut_range_BANG_ = (function lark$structure$edit$cut_range_BANG_(cm,range){
lark.structure.edit.copy(lark.editors.codemirror.range_text(cm,range));

lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,"",range);

return true;
});
lark.structure.edit.cursor_skip_pos = (function lark$structure$edit$cursor_skip_pos(p__67380,side){
var map__67381 = p__67380;
var map__67381__$1 = (((((!((map__67381 == null))))?(((((map__67381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67381):map__67381);
var map__67382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67381__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67382__$1 = (((((!((map__67382 == null))))?(((((map__67382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67382):map__67382);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var move = (function (){var G__67385 = side;
var G__67385__$1 = (((G__67385 instanceof cljs.core.Keyword))?G__67385.fqn:null);
switch (G__67385__$1) {
case "left":
return lark.tree.nav.left_up;

break;
case "right":
return lark.tree.nav.right_up;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67385__$1)].join('')));

}
})();
var nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (move,map__67381,map__67381__$1,map__67382,map__67382__$1,pos,loc){
return (function (node){
return (((!(lark.tree.node.whitespace_QMARK_(node)))) && ((!(lark.tree.range.pos_EQ_(pos,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node,side))))));
});})(move,map__67381,map__67381__$1,map__67382,map__67382__$1,pos,loc))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fast_zip.core.node,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(move,lark.tree.nav.include_prefix_parents(loc)))));
var G__67389 = cljs.core.first(nodes);
if((G__67389 == null)){
return null;
} else {
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(G__67389,side);
}
});
/**
 * Returns function for moving cursor left or right, touching only node boundaries.
 */
lark.structure.edit.cursor_skip_BANG_ = (function lark$structure$edit$cursor_skip_BANG_(cm,side){
var G__67392 = lark.structure.edit.cursor_skip_pos(cm,side);
if((G__67392 == null)){
return null;
} else {
return lark.editors.codemirror.set_cursor_BANG_(cm,G__67392);
}
});
lark.structure.edit.move_char = (function lark$structure$edit$move_char(cm,pos,amount){
return cm.findPosH(pos,amount,"char",false);
});
lark.structure.edit.char_at = (function lark$structure$edit$char_at(cm,pos){
return cm.getRange(pos,lark.structure.edit.move_char(cm,pos,(1)));
});

/**
 * @interface
 */
lark.structure.edit.IPointer = function(){};

lark.structure.edit.get_range = (function lark$structure$edit$get_range(this$,i){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$get_range$arity$2 == null)))))){
return this$.lark$structure$edit$IPointer$get_range$arity$2(this$,i);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.get_range[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,i) : m__4434__auto__.call(null,this$,i));
} else {
var m__4431__auto__ = (lark.structure.edit.get_range["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,i) : m__4431__auto__.call(null,this$,i));
} else {
throw cljs.core.missing_protocol("IPointer.get-range",this$);
}
}
}
});

lark.structure.edit.move = (function lark$structure$edit$move(this$,amount){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$move$arity$2 == null)))))){
return this$.lark$structure$edit$IPointer$move$arity$2(this$,amount);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.move[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,amount) : m__4434__auto__.call(null,this$,amount));
} else {
var m__4431__auto__ = (lark.structure.edit.move["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,amount) : m__4431__auto__.call(null,this$,amount));
} else {
throw cljs.core.missing_protocol("IPointer.move",this$);
}
}
}
});

lark.structure.edit.move_while_BANG_ = (function lark$structure$edit$move_while_BANG_(this$,i,pred){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$move_while_BANG_$arity$3 == null)))))){
return this$.lark$structure$edit$IPointer$move_while_BANG_$arity$3(this$,i,pred);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.move_while_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,i,pred) : m__4434__auto__.call(null,this$,i,pred));
} else {
var m__4431__auto__ = (lark.structure.edit.move_while_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,i,pred) : m__4431__auto__.call(null,this$,i,pred));
} else {
throw cljs.core.missing_protocol("IPointer.move-while!",this$);
}
}
}
});

lark.structure.edit.move_while = (function lark$structure$edit$move_while(this$,i,pred){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$move_while$arity$3 == null)))))){
return this$.lark$structure$edit$IPointer$move_while$arity$3(this$,i,pred);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.move_while[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,i,pred) : m__4434__auto__.call(null,this$,i,pred));
} else {
var m__4431__auto__ = (lark.structure.edit.move_while["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,i,pred) : m__4431__auto__.call(null,this$,i,pred));
} else {
throw cljs.core.missing_protocol("IPointer.move-while",this$);
}
}
}
});

lark.structure.edit.insert_BANG_ = (function lark$structure$edit$insert_BANG_(var_args){
var G__67410 = arguments.length;
switch (G__67410) {
case 2:
return lark.structure.edit.insert_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lark.structure.edit.insert_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.structure.edit.insert_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,s){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$insert_BANG_$arity$2 == null)))))){
return this$.lark$structure$edit$IPointer$insert_BANG_$arity$2(this$,s);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.insert_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__4434__auto__.call(null,this$,s));
} else {
var m__4431__auto__ = (lark.structure.edit.insert_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__4431__auto__.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("IPointer.insert!",this$);
}
}
}
});

lark.structure.edit.insert_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,replace_i,s){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$insert_BANG_$arity$3 == null)))))){
return this$.lark$structure$edit$IPointer$insert_BANG_$arity$3(this$,replace_i,s);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.insert_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,replace_i,s) : m__4434__auto__.call(null,this$,replace_i,s));
} else {
var m__4431__auto__ = (lark.structure.edit.insert_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,replace_i,s) : m__4431__auto__.call(null,this$,replace_i,s));
} else {
throw cljs.core.missing_protocol("IPointer.insert!",this$);
}
}
}
});

lark.structure.edit.insert_BANG_.cljs$lang$maxFixedArity = 3;


lark.structure.edit.set_editor_cursor_BANG_ = (function lark$structure$edit$set_editor_cursor_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$set_editor_cursor_BANG_$arity$1 == null)))))){
return this$.lark$structure$edit$IPointer$set_editor_cursor_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.set_editor_cursor_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (lark.structure.edit.set_editor_cursor_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPointer.set-editor-cursor!",this$);
}
}
}
});

lark.structure.edit.adjust_for_changes_BANG_ = (function lark$structure$edit$adjust_for_changes_BANG_(this$,changes){
if((((!((this$ == null)))) && ((!((this$.lark$structure$edit$IPointer$adjust_for_changes_BANG_$arity$2 == null)))))){
return this$.lark$structure$edit$IPointer$adjust_for_changes_BANG_$arity$2(this$,changes);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.structure.edit.adjust_for_changes_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,changes) : m__4434__auto__.call(null,this$,changes));
} else {
var m__4431__auto__ = (lark.structure.edit.adjust_for_changes_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,changes) : m__4431__auto__.call(null,this$,changes));
} else {
throw cljs.core.missing_protocol("IPointer.adjust-for-changes!",this$);
}
}
}
});

lark.structure.edit._STAR_changes_STAR_ = null;
lark.structure.edit.log_editor_changes = (function lark$structure$edit$log_editor_changes(cm,changes){
if(cljs.core.truth_(lark.structure.edit._STAR_changes_STAR_)){
return lark.structure.edit._STAR_changes_STAR_.push.apply(lark.structure.edit._STAR_changes_STAR_,changes);
} else {
return null;
}
});
lark.structure.edit.adjust_for_change = (function lark$structure$edit$adjust_for_change(pos,change){
if((cljs.core.compare(pos,change.from) <= (0))){
return pos;
} else {
if((cljs.core.compare(pos,change.to) <= (0))){
return (lark.editors.codemirror.changeEnd.cljs$core$IFn$_invoke$arity$1 ? lark.editors.codemirror.changeEnd.cljs$core$IFn$_invoke$arity$1(change) : lark.editors.codemirror.changeEnd.call(null,change));
} else {
var line = (((pos.line + change.text.length) - (change.to.line - change.from.line)) - (1));
var ch = (function (){var G__67417 = pos.ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos.line,change.to.line)){
return (G__67417 + ((lark.editors.codemirror.changeEnd.cljs$core$IFn$_invoke$arity$1 ? lark.editors.codemirror.changeEnd.cljs$core$IFn$_invoke$arity$1(change) : lark.editors.codemirror.changeEnd.call(null,change)).ch - change.to.ch));
} else {
return G__67417;
}
})();
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(line,ch) : lark.editors.codemirror.Pos.call(null,line,ch));

}
}
});
lark.structure.edit.adjust_for_changes = (function lark$structure$edit$adjust_for_changes(pos,changes){
var pos__$1 = pos;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,changes.length)){
return pos__$1;
} else {
var G__67754 = lark.structure.edit.adjust_for_change(pos__$1,(changes[i]));
var G__67755 = (i + (1));
pos__$1 = G__67754;
i = G__67755;
continue;
}
break;
}
});
lark.structure.edit.move_while_pos = (function lark$structure$edit$move_while_pos(pos,editor,i,pred){
var the_pos = pos;
while(true){
var next_pos = lark.structure.edit.move_char(editor,the_pos,i);
var char$ = (((i > (0)))?editor.getRange(the_pos,lark.structure.edit.move_char(editor,the_pos,i)):lark.structure.edit.char_at(editor,next_pos));
if(cljs.core.truth_((function (){var and__4120__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(char$) : pred.call(null,char$));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(next_pos.hitSide);
} else {
return and__4120__auto__;
}
})())){
var G__67756 = next_pos;
the_pos = G__67756;
continue;
} else {
return the_pos;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {lark.structure.edit.IPointer}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lark.structure.edit.Pointer = (function (editor,pos,__meta,__extmap,__hash){
this.editor = editor;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
lark.structure.edit.Pointer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

lark.structure.edit.Pointer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k67428,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__67439 = k67428;
var G__67439__$1 = (((G__67439 instanceof cljs.core.Keyword))?G__67439.fqn:null);
switch (G__67439__$1) {
case "editor":
return self__.editor;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67428,else__4388__auto__);

}
});

lark.structure.edit.Pointer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__67440){
var vec__67441 = p__67440;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67441,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67441,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

lark.structure.edit.Pointer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#lark.structure.edit.Pointer{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor","editor",-989377770),self__.editor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

lark.structure.edit.Pointer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67427){
var self__ = this;
var G__67427__$1 = this;
return (new cljs.core.RecordIter((0),G__67427__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

lark.structure.edit.Pointer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

lark.structure.edit.Pointer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new lark.structure.edit.Pointer(self__.editor,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

lark.structure.edit.Pointer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

lark.structure.edit.Pointer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__67459 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-691096446 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__67459(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

lark.structure.edit.Pointer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67430,other67431){
var self__ = this;
var this67430__$1 = this;
return (((!((other67431 == null)))) && ((this67430__$1.constructor === other67431.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67430__$1.editor,other67431.editor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67430__$1.pos,other67431.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67430__$1.__extmap,other67431.__extmap)));
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$ = cljs.core.PROTOCOL_SENTINEL;

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$get_range$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if((i < (0))){
return self__.editor.getRange(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(this$__$1.lark$structure$edit$IPointer$move$arity$2(null,i)),self__.pos);
} else {
return self__.editor.getRange(self__.pos,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(this$__$1.lark$structure$edit$IPointer$move$arity$2(null,i)));
}
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$move$arity$2 = (function (this$,amount){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),lark.structure.edit.move_char(self__.editor,self__.pos,amount));
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$insert_BANG_$arity$2 = (function (this$,text){
var self__ = this;
var this$__$1 = this;
self__.editor.replaceRange(text,self__.pos,self__.pos);

return this$__$1;
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$insert_BANG_$arity$3 = (function (this$,amount,text){
var self__ = this;
var this$__$1 = this;
self__.editor.replaceRange(text,self__.pos,lark.structure.edit.move_char(self__.editor,self__.pos,amount));

return this$__$1;
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$set_editor_cursor_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.editor.setCursor(self__.pos,null,({"scroll": false}));

return this$__$1;
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$adjust_for_changes_BANG_$arity$2 = (function (this$,changes){
var self__ = this;
var this$__$1 = this;
self__.pos = lark.structure.edit.adjust_for_changes(self__.pos,changes);

return this$__$1;
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$move_while_BANG_$arity$3 = (function (this$,i,pred){
var self__ = this;
var this$__$1 = this;
self__.pos = lark.structure.edit.move_while_pos(self__.pos,self__.editor,i,pred);

return this$__$1;
});

lark.structure.edit.Pointer.prototype.lark$structure$edit$IPointer$move_while$arity$3 = (function (this$,i,pred){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),lark.structure.edit.move_while_pos(self__.pos,self__.editor,i,pred));
});

lark.structure.edit.Pointer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"editor","editor",-989377770),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new lark.structure.edit.Pointer(self__.editor,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

lark.structure.edit.Pointer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__67427){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__67491 = cljs.core.keyword_identical_QMARK_;
var expr__67492 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__67494 = new cljs.core.Keyword(null,"editor","editor",-989377770);
var G__67495 = expr__67492;
return (pred__67491.cljs$core$IFn$_invoke$arity$2 ? pred__67491.cljs$core$IFn$_invoke$arity$2(G__67494,G__67495) : pred__67491.call(null,G__67494,G__67495));
})())){
return (new lark.structure.edit.Pointer(G__67427,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67497 = new cljs.core.Keyword(null,"pos","pos",-864607220);
var G__67498 = expr__67492;
return (pred__67491.cljs$core$IFn$_invoke$arity$2 ? pred__67491.cljs$core$IFn$_invoke$arity$2(G__67497,G__67498) : pred__67491.call(null,G__67497,G__67498));
})())){
return (new lark.structure.edit.Pointer(self__.editor,G__67427,self__.__meta,self__.__extmap,null));
} else {
return (new lark.structure.edit.Pointer(self__.editor,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__67427),null));
}
}
});

lark.structure.edit.Pointer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor","editor",-989377770),self__.editor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

lark.structure.edit.Pointer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__67427){
var self__ = this;
var this__4384__auto____$1 = this;
return (new lark.structure.edit.Pointer(self__.editor,self__.pos,G__67427,self__.__extmap,self__.__hash));
});

lark.structure.edit.Pointer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

lark.structure.edit.Pointer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"editor","editor",651153757,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

lark.structure.edit.Pointer.cljs$lang$type = true;

lark.structure.edit.Pointer.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"lark.structure.edit/Pointer",null,(1),null));
});

lark.structure.edit.Pointer.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"lark.structure.edit/Pointer");
});

/**
 * Positional factory function for lark.structure.edit/Pointer.
 */
lark.structure.edit.__GT_Pointer = (function lark$structure$edit$__GT_Pointer(editor,pos){
return (new lark.structure.edit.Pointer(editor,pos,null,null,null));
});

/**
 * Factory function for lark.structure.edit/Pointer, taking a map of keywords to field values.
 */
lark.structure.edit.map__GT_Pointer = (function lark$structure$edit$map__GT_Pointer(G__67433){
var extmap__4424__auto__ = (function (){var G__67513 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67433,new cljs.core.Keyword(null,"editor","editor",-989377770),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__67433)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67513);
} else {
return G__67513;
}
})();
return (new lark.structure.edit.Pointer(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(G__67433),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__67433),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

lark.structure.edit.pointer = (function lark$structure$edit$pointer(var_args){
var G__67519 = arguments.length;
switch (G__67519) {
case 1:
return lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$1 = (function (editor){
return lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2(editor,lark.editors.codemirror.get_cursor(editor));
});

lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2 = (function (editor,pos){
return lark.structure.edit.__GT_Pointer(editor,pos);
});

lark.structure.edit.pointer.cljs$lang$maxFixedArity = 2;

lark.structure.edit.chars_around = (function lark$structure$edit$chars_around(the_pointer){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return lark.tree.util.some_str(lark.structure.edit.get_range(the_pointer,i));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null));
});
lark.structure.edit.uneval_BANG_ = (function lark$structure$edit$uneval_BANG_(p__67533){
var map__67534 = p__67533;
var map__67534__$1 = (((((!((map__67534 == null))))?(((((map__67534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67534):map__67534);
var cm = map__67534__$1;
var map__67535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67534__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67535__$1 = (((((!((map__67535 == null))))?(((((map__67535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67535):map__67535);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67535__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var temp__5720__auto___67856 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,fast_zip.core.node),cljs.core.cons(lark.tree.nav.include_prefix_parents(loc),lark.tree.nav.left_locs(loc))));
if(cljs.core.truth_(temp__5720__auto___67856)){
var loc_67860__$1 = temp__5720__auto___67856;
var node_67861 = fast_zip.core.node(loc_67860__$1);
var a_pointer_67866 = lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$1(cm);
var changes_67867 = (function (){var _STAR_changes_STAR__orig_val__67550 = lark.structure.edit._STAR_changes_STAR_;
var _STAR_changes_STAR__temp_val__67551 = [];
lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__temp_val__67551;

try{cm.on("changes",lark.structure.edit.log_editor_changes);

cm.operation(((function (_STAR_changes_STAR__orig_val__67550,_STAR_changes_STAR__temp_val__67551,a_pointer_67866,node_67861,loc_67860__$1,temp__5720__auto___67856,map__67534,map__67534__$1,cm,map__67535,map__67535__$1,loc){
return (function (){
var or__4131__auto__ = (function (){var temp__5720__auto____$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"uneval","uneval",1932037707)),new cljs.core.Keyword(null,"tag","tag",-1290361223),fast_zip.core.node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_67860__$1,fast_zip.core.up(loc_67860__$1)], null)));
if(cljs.core.truth_(temp__5720__auto____$1)){
var uneval_loc = temp__5720__auto____$1;
return lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2(cm,lark.editors.codemirror.range__GT_Pos(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(fast_zip.core.node(uneval_loc),new cljs.core.Keyword(null,"left","left",-399115937)))).lark$structure$edit$IPointer$insert_BANG_$arity$3(null,(2),"");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2(cm,lark.editors.codemirror.range__GT_Pos(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node_67861,new cljs.core.Keyword(null,"left","left",-399115937)))).lark$structure$edit$IPointer$insert_BANG_$arity$2(null,"#_");
}
});})(_STAR_changes_STAR__orig_val__67550,_STAR_changes_STAR__temp_val__67551,a_pointer_67866,node_67861,loc_67860__$1,temp__5720__auto___67856,map__67534,map__67534__$1,cm,map__67535,map__67535__$1,loc))
);

cm.off("changes",lark.structure.edit.log_editor_changes);

var or__4131__auto__ = lark.structure.edit._STAR_changes_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return true;
}
}finally {lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__orig_val__67550;
}})();
lark.structure.edit.adjust_for_changes_BANG_(a_pointer_67866,changes_67867);

lark.structure.edit.set_editor_cursor_BANG_(a_pointer_67866);
} else {
}

return true;
});
var G__67565_67889 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"end-line","end-line",1837326455),(0),new cljs.core.Keyword(null,"end-column","end-column",1425389514),(22)], null);
var G__67566_67890 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"column","column",2078222095),(13)], null);
(lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67565_67889,G__67566_67890) : lark.tree.range.within_QMARK_.call(null,G__67565_67889,G__67566_67890));
lark.structure.edit.kill_BANG_ = (function lark$structure$edit$kill_BANG_(p__67572){
var map__67574 = p__67572;
var map__67574__$1 = (((((!((map__67574 == null))))?(((((map__67574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67574):map__67574);
var editor = map__67574__$1;
var map__67575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67574__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67575__$1 = (((((!((map__67575 == null))))?(((((map__67575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67575):map__67575);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67575__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67574__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
editor.operation(((function (map__67574,map__67574__$1,editor,map__67575,map__67575__$1,pos,zipper){
return (function (){
var res__67305__auto__ = (function (){var loc = lark.tree.nav.navigate(zipper,pos);
var node = fast_zip.core.node(loc);
var loc__$1 = (function (){var G__67581 = loc;
if(((cljs.core.not((lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2(node,pos) : lark.tree.range.within_inner_QMARK_.call(null,node,pos)))) || (lark.tree.node.whitespace_QMARK_(node)))){
return fast_zip.core.up(G__67581);
} else {
return G__67581;
}
})();
var node__$1 = fast_zip.core.node(loc__$1);
var in_edge_QMARK_ = (cljs.core.truth_(lark.tree.node.has_edges_QMARK_(node__$1))?(function (){var inner = lark.tree.range.inner_range(node__$1);
return cljs.core.not((lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(inner,pos) : lark.tree.range.within_QMARK_.call(null,inner,pos)));
})():null);
var end_node = (cljs.core.truth_(in_edge_QMARK_)?null:((cljs.core.not((lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1(node__$1) : lark.tree.node.may_contain_children_QMARK_.call(null,node__$1))))?lark.tree.range.inner_range(node__$1):cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (loc,node,loc__$1,node__$1,in_edge_QMARK_,map__67574,map__67574__$1,editor,map__67575,map__67575__$1,pos,zipper){
return (function (p1__67571_SHARP_){
return (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(p1__67571_SHARP_) <= new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos));
});})(loc,node,loc__$1,node__$1,in_edge_QMARK_,map__67574,map__67574__$1,editor,map__67575,map__67575__$1,pos,zipper))
,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (loc,node,loc__$1,node__$1,in_edge_QMARK_,map__67574,map__67574__$1,editor,map__67575,map__67575__$1,pos,zipper){
return (function (p1__67570_SHARP_){
return lark.tree.range.lt(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(p1__67570_SHARP_,new cljs.core.Keyword(null,"right","right",-452581833)),pos);
});})(loc,node,loc__$1,node__$1,in_edge_QMARK_,map__67574,map__67574__$1,editor,map__67575,map__67575__$1,pos,zipper))
,fast_zip.core.children(loc__$1))))
));
if(cljs.core.truth_(end_node)){
return lark.structure.edit.cut_range_BANG_(editor,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos,cljs.core.select_keys(end_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], null))], 0)));
} else {
return null;
}
})();
var editor__67306__auto__ = editor;
if(res__67305__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__67306__auto__,null);
}

return res__67305__auto__;
});})(map__67574,map__67574__$1,editor,map__67575,map__67575__$1,pos,zipper))
);

return true;
});
lark.structure.edit.boundary_QMARK_ = (function lark$structure$edit$boundary_QMARK_(s){
var G__67586 = cljs.core.last(s);
var G__67586__$1 = (((G__67586 == null))?null:"\"()[]{} ".indexOf(G__67586));
if((G__67586__$1 == null)){
return null;
} else {
return (G__67586__$1 > (0));
}
});
lark.structure.edit.unwrap_BANG_ = (function lark$structure$edit$unwrap_BANG_(p__67588){
var map__67591 = p__67588;
var map__67591__$1 = (((((!((map__67591 == null))))?(((((map__67591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67591):map__67591);
var editor = map__67591__$1;
var map__67592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67591__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67592__$1 = (((((!((map__67592 == null))))?(((((map__67592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67592):map__67592);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67592__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67592__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var bracket_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67592__$1,new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398));
if(cljs.core.truth_((function (){var and__4120__auto__ = loc;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(lark.editors.codemirror.selection_QMARK_(editor));
} else {
return and__4120__auto__;
}
})())){
var temp__5720__auto___67916 = (function (){var loc__$1 = (function (){var G__67604 = loc;
if(cljs.core.not((lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2(bracket_node,pos) : lark.tree.range.within_inner_QMARK_.call(null,bracket_node,pos)))){
return fast_zip.core.up(G__67604);
} else {
return G__67604;
}
})();
while(true){
if(cljs.core.not(loc__$1)){
return null;
} else {
if(cljs.core.truth_(lark.tree.node.has_edges_QMARK_(fast_zip.core.node(loc__$1)))){
return fast_zip.core.node(loc__$1);
} else {
var G__67921 = fast_zip.core.up(loc__$1);
loc__$1 = G__67921;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(temp__5720__auto___67916)){
var edge_node_67924 = temp__5720__auto___67916;
editor.operation(((function (edge_node_67924,temp__5720__auto___67916,map__67591,map__67591__$1,editor,map__67592,map__67592__$1,pos,loc,bracket_node){
return (function (){
var res__67305__auto__ = (function (){var vec__67605 = lark.tree.node.edges(edge_node_67924);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67605,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67605,(1),null);
var vec__67608 = lark.tree.range.edge_ranges(edge_node_67924);
var left_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67608,(0),null);
var right_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67608,(1),null);
var seq__67611 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(l),left_r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(r),right_r], null)], null));
var chunk__67612 = null;
var count__67613 = (0);
var i__67614 = (0);
while(true){
if((i__67614 < count__67613)){
var vec__67621 = chunk__67612.cljs$core$IIndexed$_nth$arity$2(null,i__67614);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67621,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67621,(1),null);
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,lark.tree.format.spaces(n),range);


var G__67960 = seq__67611;
var G__67961 = chunk__67612;
var G__67962 = count__67613;
var G__67963 = (i__67614 + (1));
seq__67611 = G__67960;
chunk__67612 = G__67961;
count__67613 = G__67962;
i__67614 = G__67963;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__67611);
if(temp__5720__auto____$1){
var seq__67611__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__67611__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67611__$1);
var G__67965 = cljs.core.chunk_rest(seq__67611__$1);
var G__67966 = c__4550__auto__;
var G__67967 = cljs.core.count(c__4550__auto__);
var G__67968 = (0);
seq__67611 = G__67965;
chunk__67612 = G__67966;
count__67613 = G__67967;
i__67614 = G__67968;
continue;
} else {
var vec__67624 = cljs.core.first(seq__67611__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67624,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67624,(1),null);
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,lark.tree.format.spaces(n),range);


var G__67977 = cljs.core.next(seq__67611__$1);
var G__67978 = null;
var G__67979 = (0);
var G__67980 = (0);
seq__67611 = G__67977;
chunk__67612 = G__67978;
count__67613 = G__67979;
i__67614 = G__67980;
continue;
}
} else {
return null;
}
}
break;
}
})();
var editor__67306__auto__ = editor;
if(res__67305__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__67306__auto__,null);
}

return res__67305__auto__;
});})(edge_node_67924,temp__5720__auto___67916,map__67591,map__67591__$1,editor,map__67592,map__67592__$1,pos,loc,bracket_node))
);
} else {
}
} else {
}

return true;
});
lark.structure.edit.raise_BANG_ = (function lark$structure$edit$raise_BANG_(p__67627){
var map__67628 = p__67627;
var map__67628__$1 = (((((!((map__67628 == null))))?(((((map__67628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67628):map__67628);
var editor = map__67628__$1;
var map__67629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67628__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67629__$1 = (((((!((map__67629 == null))))?(((((map__67629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67629):map__67629);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67629__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var bracket_loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67629__$1,new cljs.core.Keyword(null,"bracket-loc","bracket-loc",1199638686));
var bracket_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67629__$1,new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398));
if(cljs.core.truth_((function (){var and__4120__auto__ = bracket_loc;
if(cljs.core.truth_(and__4120__auto__)){
return fast_zip.core.up(bracket_loc);
} else {
return and__4120__auto__;
}
})())){
var outer_node_68005 = fast_zip.core.node(fast_zip.core.up(bracket_loc));
editor.operation(((function (outer_node_68005,map__67628,map__67628__$1,editor,map__67629,map__67629__$1,pos,bracket_loc,bracket_node){
return (function (){
var res__67305__auto__ = (function (){
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$4(editor,"",lark.tree.range.end(bracket_node),outer_node_68005);

return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$4(editor,"",outer_node_68005,bracket_node);
})()
;
var editor__67306__auto__ = editor;
if(res__67305__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__67306__auto__,null);
}

return res__67305__auto__;
});})(outer_node_68005,map__67628,map__67628__$1,editor,map__67629,map__67629__$1,pos,bracket_loc,bracket_node))
);
} else {
}

return true;
});
lark.structure.edit.copy_form = (function lark$structure$edit$copy_form(cm){
if(cljs.core.truth_(lark.editors.codemirror.selection_QMARK_(cm))){
return new cljs.core.Keyword("lark.commands","Pass","lark.commands/Pass",-789752069);
} else {
return lark.structure.edit.copy_range_BANG_(cm,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398)], null)));
}
});
lark.structure.edit.cut_form = (function lark$structure$edit$cut_form(cm){
if(cljs.core.truth_(lark.editors.codemirror.selection_QMARK_(cm))){
return new cljs.core.Keyword("lark.commands","Pass","lark.commands/Pass",-789752069);
} else {
return lark.structure.edit.cut_range_BANG_(cm,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398)], null)));
}
});
lark.structure.edit.delete_form = (function lark$structure$edit$delete_form(cm){
if(cljs.core.truth_(lark.editors.codemirror.selection_QMARK_(cm))){
return new cljs.core.Keyword("lark.commands","Pass","lark.commands/Pass",-789752069);
} else {
return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,"",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398)], null)));
}
});
lark.structure.edit.pop_stack_BANG_ = (function lark$structure$edit$pop_stack_BANG_(cm){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"stack","stack",-793405930)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var stack = temp__5720__auto__;
var stack__$1 = (function (){var G__67637 = stack;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.first(stack));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.editors.codemirror.current_selection_bounds(cm),cljs.core.first(stack));
}
})())){
return cljs.core.rest(G__67637);
} else {
return G__67637;
}
})();
var item = cljs.core.first(stack__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cm,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((lark.tree.range.empty_range_QMARK_(item))?cljs.core.empty:cljs.core.rest));

return item;
} else {
return null;
}
});
lark.structure.edit.push_stack_BANG_ = (function lark$structure$edit$push_stack_BANG_(cm,node){
if(lark.tree.range.empty_range_QMARK_(node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cm,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.empty);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"stack","stack",-793405930)], null))))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("magic","cursor","magic/cursor",510560159),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(node)], 0));
}

return true;
});
lark.structure.edit.tracked_select = (function lark$structure$edit$tracked_select(cm,node){
if(cljs.core.truth_(node)){
lark.editors.codemirror.select_range(cm,node);

return lark.structure.edit.push_stack_BANG_(cm,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(node));
} else {
return null;
}
});
lark.structure.edit.push_cursor_BANG_ = (function lark$structure$edit$push_cursor_BANG_(cm){
lark.structure.edit.push_stack_BANG_(cm,lark.editors.codemirror.Pos__GT_range(lark.editors.codemirror.get_cursor(cm)));

return lark.editors.codemirror.unset_temp_marker_BANG_(cm);
});
lark.structure.edit.expand_selection = (function lark$structure$edit$expand_selection(p__67639){
var map__67640 = p__67639;
var map__67640__$1 = (((((!((map__67640 == null))))?(((((map__67640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67640):map__67640);
var cm = map__67640__$1;
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67640__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
var sel_68018 = lark.editors.codemirror.current_selection_bounds(cm);
var loc_68019 = lark.tree.nav.navigate(zipper,sel_68018);
var select_BANG__68020 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.structure.edit.tracked_select,cm);
var cursor_root_68021 = lark.editors.codemirror.temp_marker_cursor_pos(cm);
var selection_QMARK__68022 = lark.editors.codemirror.selection_QMARK_(cm);
if(cljs.core.truth_((function (){var or__4131__auto__ = cursor_root_68021;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(selection_QMARK__68022);
}
})())){
lark.structure.edit.push_cursor_BANG_(cm);

lark.structure.edit.push_stack_BANG_(cm,lark.editors.codemirror.current_selection_bounds(cm));
} else {
}

var loc_68035__$1 = loc_68019;
while(true){
if(cljs.core.not(loc_68035__$1)){
} else {
var node_68036 = fast_zip.core.node(loc_68035__$1);
var inner_range_68037 = (cljs.core.truth_(lark.tree.node.has_edges_QMARK_(node_68036))?(function (){var range = lark.tree.range.inner_range(node_68036);
if(lark.tree.range.empty_range_QMARK_(range)){
return null;
} else {
return range;
}
})():null);
if(lark.tree.range.range_EQ_(sel_68018,inner_range_68037)){
(select_BANG__68020.cljs$core$IFn$_invoke$arity$1 ? select_BANG__68020.cljs$core$IFn$_invoke$arity$1(node_68036) : select_BANG__68020.call(null,node_68036));
} else {
if(cljs.core.truth_((function (){var G__67645 = inner_range_68037;
if((G__67645 == null)){
return null;
} else {
return (lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67645,sel_68018) : lark.tree.range.within_QMARK_.call(null,G__67645,sel_68018));
}
})())){
(select_BANG__68020.cljs$core$IFn$_invoke$arity$1 ? select_BANG__68020.cljs$core$IFn$_invoke$arity$1(inner_range_68037) : select_BANG__68020.call(null,inner_range_68037));
} else {
if(lark.tree.range.range_EQ_(sel_68018,node_68036)){
var G__68045 = fast_zip.core.up(loc_68035__$1);
loc_68035__$1 = G__68045;
continue;
} else {
if(cljs.core.truth_((lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(node_68036,sel_68018) : lark.tree.range.within_QMARK_.call(null,node_68036,sel_68018)))){
(select_BANG__68020.cljs$core$IFn$_invoke$arity$1 ? select_BANG__68020.cljs$core$IFn$_invoke$arity$1(node_68036) : select_BANG__68020.call(null,node_68036));
} else {
var G__68048 = fast_zip.core.up(loc_68035__$1);
loc_68035__$1 = G__68048;
continue;

}
}
}
}
}
break;
}

return true;
});
lark.structure.edit.shrink_selection = (function lark$structure$edit$shrink_selection(cm){
var G__67646_68049 = lark.structure.edit.pop_stack_BANG_(cm);
if((G__67646_68049 == null)){
} else {
lark.editors.codemirror.select_range(cm,G__67646_68049);
}

return true;
});
lark.structure.edit.expand_selection_x = (function lark$structure$edit$expand_selection_x(p__67647,direction){
var map__67648 = p__67647;
var map__67648__$1 = (((((!((map__67648 == null))))?(((((map__67648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67648):map__67648);
var cm = map__67648__$1;
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67648__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
var selection_bounds_68054 = lark.editors.codemirror.current_selection_bounds(cm);
var selection_loc_68055 = lark.tree.nav.navigate(zipper,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_68054,direction));
var selection_node_68056 = fast_zip.core.node(selection_loc_68055);
var cursor_root_68057 = lark.editors.codemirror.temp_marker_cursor_pos(cm);
if(cljs.core.truth_(cursor_root_68057)){
lark.structure.edit.push_cursor_BANG_(cm);

lark.structure.edit.push_stack_BANG_(cm,selection_bounds_68054);
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = lark.tree.node.has_edges_QMARK_(selection_node_68056);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_68054,direction),lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(lark.tree.range.inner_range(selection_node_68056),direction));
} else {
return and__4120__auto__;
}
})())){
lark.structure.edit.expand_selection(cm);
} else {
var temp__5718__auto___68068 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.node.whitespace_QMARK_),fast_zip.core.node),(function (){var fexpr__67651 = (function (){var G__67652 = direction;
var G__67652__$1 = (((G__67652 instanceof cljs.core.Keyword))?G__67652.fqn:null);
switch (G__67652__$1) {
case "right":
return lark.tree.nav.right_locs;

break;
case "left":
return lark.tree.nav.left_locs;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67652__$1)].join('')));

}
})();
return (fexpr__67651.cljs$core$IFn$_invoke$arity$1 ? fexpr__67651.cljs$core$IFn$_invoke$arity$1(selection_loc_68055) : fexpr__67651.call(null,selection_loc_68055));
})()));
if(cljs.core.truth_(temp__5718__auto___68068)){
var adjacent_loc_68070 = temp__5718__auto___68068;
lark.structure.edit.tracked_select(cm,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(fast_zip.core.node(adjacent_loc_68070)),(function (){var G__67653 = direction;
var G__67653__$1 = (((G__67653 instanceof cljs.core.Keyword))?G__67653.fqn:null);
switch (G__67653__$1) {
case "right":
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_68054,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "left":
return lark.tree.range.__GT_end(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_68054,new cljs.core.Keyword(null,"right","right",-452581833)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67653__$1)].join('')));

}
})()], 0)));
} else {
lark.structure.edit.expand_selection(cm);
}
}

return true;
});
lark.structure.edit.backspace_BANG_ = (function lark$structure$edit$backspace_BANG_(p1__67654_SHARP_){
return p1__67654_SHARP_.execCommand("delCharBefore");
});
lark.structure.edit.comment_line = (function lark$structure$edit$comment_line(var_args){
var G__67656 = arguments.length;
switch (G__67656) {
case 1:
return lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$1 = (function (cm){
var _STAR_changes_STAR__orig_val__67657 = lark.structure.edit._STAR_changes_STAR_;
var _STAR_changes_STAR__temp_val__67658 = [];
lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__temp_val__67658;

try{cm.on("changes",lark.structure.edit.log_editor_changes);

cm.operation(((function (_STAR_changes_STAR__orig_val__67657,_STAR_changes_STAR__temp_val__67658){
return (function (){
if(cljs.core.truth_(lark.editors.codemirror.selection_QMARK_(cm))){
var sel = (cm.listSelections()[(0)]);
var vec__67659 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sel.anchor.line,sel.head.line], null));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67659,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67659,(1),null);
var seq__67662 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(end + (1))));
var chunk__67663 = null;
var count__67664 = (0);
var i__67665 = (0);
while(true){
if((i__67665 < count__67664)){
var line_n = chunk__67663.cljs$core$IIndexed$_nth$arity$2(null,i__67665);
lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2(cm,line_n);


var G__68096 = seq__67662;
var G__68097 = chunk__67663;
var G__68098 = count__67664;
var G__68099 = (i__67665 + (1));
seq__67662 = G__68096;
chunk__67663 = G__68097;
count__67664 = G__68098;
i__67665 = G__68099;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__67662);
if(temp__5720__auto__){
var seq__67662__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67662__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67662__$1);
var G__68100 = cljs.core.chunk_rest(seq__67662__$1);
var G__68101 = c__4550__auto__;
var G__68102 = cljs.core.count(c__4550__auto__);
var G__68103 = (0);
seq__67662 = G__68100;
chunk__67663 = G__68101;
count__67664 = G__68102;
i__67665 = G__68103;
continue;
} else {
var line_n = cljs.core.first(seq__67662__$1);
lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2(cm,line_n);


var G__68104 = cljs.core.next(seq__67662__$1);
var G__68105 = null;
var G__68106 = (0);
var G__68107 = (0);
seq__67662 = G__68104;
chunk__67663 = G__68105;
count__67664 = G__68106;
i__67665 = G__68107;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2(cm,lark.editors.codemirror.get_cursor(cm).line);
}
});})(_STAR_changes_STAR__orig_val__67657,_STAR_changes_STAR__temp_val__67658))
);

cm.off("changes",lark.structure.edit.log_editor_changes);

var or__4131__auto__ = lark.structure.edit._STAR_changes_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return true;
}
}finally {lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__orig_val__67657;
}});

lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2 = (function (cm,line_n){
var vec__67666_68112 = cljs.core.rest(cljs.core.re_find(/^(\s*)(;+)?/,cm.getLine(line_n)));
var spaces_68113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67666_68112,(0),null);
var semicolons_68114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67666_68112,(1),null);
var vec__67669_68115 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces_68113,semicolons_68114], null));
var space_n_68116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67669_68115,(0),null);
var semicolon_n_68117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67669_68115,(1),null);
if((semicolon_n_68117 > (0))){
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,"",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_n,new cljs.core.Keyword(null,"column","column",2078222095),space_n_68116,new cljs.core.Keyword(null,"end-column","end-column",1425389514),(space_n_68116 + semicolon_n_68117)], null));
} else {
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,";;",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_n,new cljs.core.Keyword(null,"column","column",2078222095),space_n_68116,new cljs.core.Keyword(null,"end-column","end-column",1425389514),space_n_68116], null));
}

return true;
});

lark.structure.edit.comment_line.cljs$lang$maxFixedArity = 2;

lark.structure.edit.slurp_parent_QMARK_ = (function lark$structure$edit$slurp_parent_QMARK_(node,pos){
var and__4120__auto__ = (lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : lark.tree.node.may_contain_children_QMARK_.call(null,node));
if(cljs.core.truth_(and__4120__auto__)){
return (lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2(node,pos) : lark.tree.range.within_inner_QMARK_.call(null,node,pos));
} else {
return and__4120__auto__;
}
});
lark.structure.edit.slurp_parent = (function lark$structure$edit$slurp_parent(loc,pos){
var loc__$1 = loc;
while(true){
if(cljs.core.truth_(loc__$1)){
if(cljs.core.truth_(lark.structure.edit.slurp_parent_QMARK_(fast_zip.core.node(loc__$1),pos))){
return loc__$1;
} else {
var G__68146 = fast_zip.core.up(loc__$1);
loc__$1 = G__68146;
continue;
}
} else {
return null;
}
break;
}
});
lark.structure.edit.slurp_forward = (function lark$structure$edit$slurp_forward(p__67672){
var map__67673 = p__67672;
var map__67673__$1 = (((((!((map__67673 == null))))?(((((map__67673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67673):map__67673);
var cm = map__67673__$1;
var map__67674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67673__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67674__$1 = (((((!((map__67674 == null))))?(((((map__67674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67674):map__67674);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var end_edge_loc_68154 = lark.structure.edit.slurp_parent(loc,pos);
var start_edge_loc_68155 = lark.tree.nav.include_prefix_parents(end_edge_loc_68154);
var map__67677_68156 = fast_zip.core.node(start_edge_loc_68155);
var map__67677_68157__$1 = (((((!((map__67677_68156 == null))))?(((((map__67677_68156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67677_68156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67677_68156):map__67677_68156);
var node_68158 = map__67677_68157__$1;
var tag_68159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67677_68157__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.truth_((function (){var and__4120__auto__ = node_68158;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),tag_68159);
} else {
return and__4120__auto__;
}
})())){
var right_bracket_68163 = cljs.core.second(lark.tree.node.edges(fast_zip.core.node(end_edge_loc_68154)));
var last_child_68164 = (function (){var G__67679 = fast_zip.core.children(end_edge_loc_68154);
var G__67679__$1 = (((G__67679 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,G__67679));
if((G__67679__$1 == null)){
return null;
} else {
return cljs.core.last(G__67679__$1);
}
})();
var temp__5720__auto___68168 = (function (){var G__67680 = fast_zip.core.rights(start_edge_loc_68155);
var G__67680__$1 = (((G__67680 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,G__67680));
if((G__67680__$1 == null)){
return null;
} else {
return cljs.core.first(G__67680__$1);
}
})();
if(cljs.core.truth_(temp__5720__auto___68168)){
var next_form_68169 = temp__5720__auto___68168;
var form_content_68170 = lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(next_form_68169);
var replace_start_68171 = (cljs.core.truth_(last_child_68164)?lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(last_child_68164,new cljs.core.Keyword(null,"right","right",-452581833)):lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(lark.tree.range.inner_range(fast_zip.core.node(end_edge_loc_68154)),new cljs.core.Keyword(null,"right","right",-452581833)));
var replace_end_68172 = cljs.core.select_keys(next_form_68169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], null));
var pad_start_68173 = (function (){var and__4120__auto__ = last_child_68164;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not(lark.structure.edit.boundary_QMARK_(cljs.core.first(form_content_68170)))) || (cljs.core.not(lark.structure.edit.boundary_QMARK_(cljs.core.last(lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(last_child_68164))))));
} else {
return and__4120__auto__;
}
})();
var cur_68174 = cm.getCursor();
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,[(cljs.core.truth_(pad_start_68173)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_content_68170),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_bracket_68163)].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([replace_start_68171,replace_end_68172], 0)));

cm.setCursor(cur_68174);
} else {
}
} else {
}

return true;
});
lark.structure.edit.unslurp_forward = (function lark$structure$edit$unslurp_forward(p__67681){
var map__67682 = p__67681;
var map__67682__$1 = (((((!((map__67682 == null))))?(((((map__67682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67682):map__67682);
var editor = map__67682__$1;
var map__67683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67682__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__67683__$1 = (((((!((map__67683 == null))))?(((((map__67683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67683):map__67683);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var end_edge_loc_68185 = lark.structure.edit.slurp_parent(loc,pos);
var end_edge_node_68186 = (function (){var G__67686 = end_edge_loc_68185;
if((G__67686 == null)){
return null;
} else {
return fast_zip.core.node(G__67686);
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = end_edge_node_68186;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(end_edge_node_68186));
} else {
return and__4120__auto__;
}
})())){
var temp__5720__auto___68195 = cljs.core.last(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,fast_zip.core.children(end_edge_loc_68185)));
if(cljs.core.truth_(temp__5720__auto___68195)){
var last_child_68196 = temp__5720__auto___68195;
editor.operation(((function (last_child_68196,temp__5720__auto___68195,end_edge_loc_68185,end_edge_node_68186,map__67682,map__67682__$1,editor,map__67683,map__67683__$1,loc,pos){
return (function (){
var res__67305__auto__ = (function (){
lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2(editor,lark.editors.codemirror.range__GT_Pos(lark.tree.range.end(end_edge_node_68186))).lark$structure$edit$IPointer$insert_BANG_$arity$2(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(last_child_68196))," "].join(''));

lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,clojure.string.replace(lark.editors.codemirror.range_text(editor,last_child_68196),/[^\n]/," "),last_child_68196);

return lark.editors.codemirror.set_cursor_BANG_(editor,cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.editors.codemirror.range__GT_Pos(pos),lark.editors.codemirror.range__GT_Pos(lark.tree.range.end(lark.tree.range.inner_range(end_edge_node_68186)))], null))));
})()
;
var editor__67306__auto__ = editor;
if(res__67305__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__67306__auto__,null);
}

return res__67305__auto__;
});})(last_child_68196,temp__5720__auto___68195,end_edge_loc_68185,end_edge_node_68186,map__67682,map__67682__$1,editor,map__67683,map__67683__$1,loc,pos))
);
} else {
}
} else {
}

return true;
});
lark.structure.edit.cursor_selection_edge = (function lark$structure$edit$cursor_selection_edge(editor,side){
lark.editors.codemirror.set_cursor_BANG_(editor,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(lark.editors.codemirror.current_selection_bounds(editor),side));

return true;
});
lark.structure.edit.cursor_line_edge = (function lark$structure$edit$cursor_line_edge(editor,side){
var cursor_68197 = lark.editors.codemirror.get_cursor(editor);
var line_i_68198 = cursor_68197.line;
var line_68199 = editor.getLine(line_i_68198);
var padding_68200 = cljs.core.count(cljs.core.second(cljs.core.re_find((function (){var G__67687 = side;
var G__67687__$1 = (((G__67687 instanceof cljs.core.Keyword))?G__67687.fqn:null);
switch (G__67687__$1) {
case "left":
return /^(\s+).*/;

break;
case "right":
return /.*?(\s+)$/;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67687__$1)].join('')));

}
})(),line_68199)));
lark.editors.codemirror.set_cursor_BANG_(editor,(function (){var G__67688 = line_i_68198;
var G__67689 = (function (){var G__67690 = side;
var G__67690__$1 = (((G__67690 instanceof cljs.core.Keyword))?G__67690.fqn:null);
switch (G__67690__$1) {
case "left":
return padding_68200;

break;
case "right":
return (cljs.core.count(line_68199) - padding_68200);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67690__$1)].join('')));

}
})();
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__67688,G__67689) : lark.editors.codemirror.Pos.call(null,G__67688,G__67689));
})());

return true;
});
lark.structure.edit.node_symbol = (function lark$structure$edit$node_symbol(node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),node.tag)){
return lark.tree.util.guard__GT_(lark.tree.emit.sexp(node),cljs.core.symbol_QMARK_);
} else {
return null;
}
});
lark.structure.edit.eldoc_symbol = (function lark$structure$edit$eldoc_symbol(var_args){
var G__67693 = arguments.length;
switch (G__67693) {
case 2:
return lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$2 = (function (loc,pos){
return lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__67694 = loc;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"left","left",-399115937)),(function (){var G__67695 = loc;
var G__67695__$1 = (((G__67695 == null))?null:fast_zip.core.node(G__67695));
if((G__67695__$1 == null)){
return null;
} else {
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(G__67695__$1,new cljs.core.Keyword(null,"left","left",-399115937));
}
})())){
return fast_zip.core.up(G__67694);
} else {
return G__67694;
}
})());
});

lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$1 = (function (loc){
var G__67696 = loc;
var G__67696__$1 = (((G__67696 == null))?null:lark.tree.nav.closest(((function (G__67696){
return (function (p1__67691_SHARP_){
var G__67698 = fast_zip.core.node(p1__67691_SHARP_).tag;
var fexpr__67697 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null);
return (fexpr__67697.cljs$core$IFn$_invoke$arity$1 ? fexpr__67697.cljs$core$IFn$_invoke$arity$1(G__67698) : fexpr__67697.call(null,G__67698));
});})(G__67696))
,G__67696));
var G__67696__$2 = (((G__67696__$1 == null))?null:fast_zip.core.children(G__67696__$1));
var G__67696__$3 = (((G__67696__$2 == null))?null:cljs.core.first(G__67696__$2));
if((G__67696__$3 == null)){
return null;
} else {
return lark.structure.edit.node_symbol(G__67696__$3);
}
});

lark.structure.edit.eldoc_symbol.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=lark.structure.edit.js.map
