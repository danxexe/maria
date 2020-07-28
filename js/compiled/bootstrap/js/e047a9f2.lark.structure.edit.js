goog.provide('lark.structure.edit');
lark.structure.edit.format_BANG_ = (function lark$structure$edit$format_BANG_(var_args){
var G__51035 = arguments.length;
switch (G__51035) {
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

lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (editor,p__51049){
var map__51051 = p__51049;
var map__51051__$1 = (((((!((map__51051 == null))))?(((((map__51051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51051):map__51051);
var preserve_cursor_space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"preserve-cursor-space?","preserve-cursor-space?",1113496177));
var pre_val = editor.getValue();
var pre_zipper = (lark.tree.core.string_zip.cljs$core$IFn$_invoke$arity$1 ? lark.tree.core.string_zip.cljs$core$IFn$_invoke$arity$1(pre_val) : lark.tree.core.string_zip.call(null,pre_val));
var pre_pos = lark.editors.codemirror.pos__GT_boundary.cljs$core$IFn$_invoke$arity$1(lark.editors.codemirror.get_cursor(editor));
var cursor_loc = (cljs.core.truth_(preserve_cursor_space_QMARK_)?lark.tree.nav.cursor_space_loc(pre_zipper,pre_pos):null);
var post_val = (function (){var _STAR_active_cursor_node_STAR__orig_val__51056 = lark.tree.reader._STAR_active_cursor_node_STAR_;
var _STAR_active_cursor_node_STAR__temp_val__51057 = (function (){var G__51058 = cursor_loc;
if((G__51058 == null)){
return null;
} else {
return fast_zip.core.node(G__51058);
}
})();
lark.tree.reader._STAR_active_cursor_node_STAR_ = _STAR_active_cursor_node_STAR__temp_val__51057;

try{return lark.tree.core.format(pre_zipper);
}finally {lark.tree.reader._STAR_active_cursor_node_STAR_ = _STAR_active_cursor_node_STAR__orig_val__51056;
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
var textarea = (function (){var G__51060 = goog.dom.createElement("pre");
var G__51061_51404 = G__51060;
var G__51062_51405 = ({"id": "lark-tree-pasteHelper", "contentEditable": true, "className": "fixed o-0 z-0 bottom-0 right-0"});
goog.dom.setProperties(G__51061_51404,G__51062_51405);

return G__51060;
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
var G__51066_51406 = (function (){var G__51067 = (lark.structure.edit.clipboard_helper_element.cljs$core$IFn$_invoke$arity$0 ? lark.structure.edit.clipboard_helper_element.cljs$core$IFn$_invoke$arity$0() : lark.structure.edit.clipboard_helper_element.call(null));
return goog.dom.Range.createFromNodeContents(G__51067);
})();
G__51066_51406.select();


try{document.execCommand("copy");
}catch (e51068){if((e51068 instanceof Error)){
var e_51407 = e51068;
console.error("Copy command didn't work. Maybe a browser incompatibility?");
} else {
throw e51068;

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
lark.structure.edit.cursor_skip_pos = (function lark$structure$edit$cursor_skip_pos(p__51071,side){
var map__51072 = p__51071;
var map__51072__$1 = (((((!((map__51072 == null))))?(((((map__51072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51072):map__51072);
var map__51073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51073__$1 = (((((!((map__51073 == null))))?(((((map__51073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51073):map__51073);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var move = (function (){var G__51077 = side;
var G__51077__$1 = (((G__51077 instanceof cljs.core.Keyword))?G__51077.fqn:null);
switch (G__51077__$1) {
case "left":
return lark.tree.nav.left_up;

break;
case "right":
return lark.tree.nav.right_up;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51077__$1)].join('')));

}
})();
var nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (move,map__51072,map__51072__$1,map__51073,map__51073__$1,pos,loc){
return (function (node){
return (((!(lark.tree.node.whitespace_QMARK_(node)))) && ((!(lark.tree.range.pos_EQ_(pos,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node,side))))));
});})(move,map__51072,map__51072__$1,map__51073,map__51073__$1,pos,loc))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fast_zip.core.node,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(move,lark.tree.nav.include_prefix_parents(loc)))));
var G__51079 = cljs.core.first(nodes);
if((G__51079 == null)){
return null;
} else {
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(G__51079,side);
}
});
/**
 * Returns function for moving cursor left or right, touching only node boundaries.
 */
lark.structure.edit.cursor_skip_BANG_ = (function lark$structure$edit$cursor_skip_BANG_(cm,side){
var G__51082 = lark.structure.edit.cursor_skip_pos(cm,side);
if((G__51082 == null)){
return null;
} else {
return lark.editors.codemirror.set_cursor_BANG_(cm,G__51082);
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
var G__51114 = arguments.length;
switch (G__51114) {
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
var ch = (function (){var G__51120 = pos.ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos.line,change.to.line)){
return (G__51120 + ((lark.editors.codemirror.changeEnd.cljs$core$IFn$_invoke$arity$1 ? lark.editors.codemirror.changeEnd.cljs$core$IFn$_invoke$arity$1(change) : lark.editors.codemirror.changeEnd.call(null,change)).ch - change.to.ch));
} else {
return G__51120;
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
var G__51653 = lark.structure.edit.adjust_for_change(pos__$1,(changes[i]));
var G__51654 = (i + (1));
pos__$1 = G__51653;
i = G__51654;
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
var G__51670 = next_pos;
the_pos = G__51670;
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

lark.structure.edit.Pointer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k51126,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__51148 = k51126;
var G__51148__$1 = (((G__51148 instanceof cljs.core.Keyword))?G__51148.fqn:null);
switch (G__51148__$1) {
case "editor":
return self__.editor;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51126,else__4388__auto__);

}
});

lark.structure.edit.Pointer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__51151){
var vec__51153 = p__51151;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51153,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51153,(1),null);
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

lark.structure.edit.Pointer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51125){
var self__ = this;
var G__51125__$1 = this;
return (new cljs.core.RecordIter((0),G__51125__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__51162 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-691096446 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__51162(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

lark.structure.edit.Pointer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51127,other51128){
var self__ = this;
var this51127__$1 = this;
return (((!((other51128 == null)))) && ((this51127__$1.constructor === other51128.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51127__$1.editor,other51128.editor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51127__$1.pos,other51128.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51127__$1.__extmap,other51128.__extmap)));
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

lark.structure.edit.Pointer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__51125){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__51169 = cljs.core.keyword_identical_QMARK_;
var expr__51170 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__51172 = new cljs.core.Keyword(null,"editor","editor",-989377770);
var G__51173 = expr__51170;
return (pred__51169.cljs$core$IFn$_invoke$arity$2 ? pred__51169.cljs$core$IFn$_invoke$arity$2(G__51172,G__51173) : pred__51169.call(null,G__51172,G__51173));
})())){
return (new lark.structure.edit.Pointer(G__51125,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51174 = new cljs.core.Keyword(null,"pos","pos",-864607220);
var G__51175 = expr__51170;
return (pred__51169.cljs$core$IFn$_invoke$arity$2 ? pred__51169.cljs$core$IFn$_invoke$arity$2(G__51174,G__51175) : pred__51169.call(null,G__51174,G__51175));
})())){
return (new lark.structure.edit.Pointer(self__.editor,G__51125,self__.__meta,self__.__extmap,null));
} else {
return (new lark.structure.edit.Pointer(self__.editor,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__51125),null));
}
}
});

lark.structure.edit.Pointer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor","editor",-989377770),self__.editor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

lark.structure.edit.Pointer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__51125){
var self__ = this;
var this__4384__auto____$1 = this;
return (new lark.structure.edit.Pointer(self__.editor,self__.pos,G__51125,self__.__extmap,self__.__hash));
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
lark.structure.edit.map__GT_Pointer = (function lark$structure$edit$map__GT_Pointer(G__51133){
var extmap__4424__auto__ = (function (){var G__51180 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51133,new cljs.core.Keyword(null,"editor","editor",-989377770),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__51133)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51180);
} else {
return G__51180;
}
})();
return (new lark.structure.edit.Pointer(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(G__51133),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__51133),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

lark.structure.edit.pointer = (function lark$structure$edit$pointer(var_args){
var G__51182 = arguments.length;
switch (G__51182) {
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
lark.structure.edit.uneval_BANG_ = (function lark$structure$edit$uneval_BANG_(p__51192){
var map__51193 = p__51192;
var map__51193__$1 = (((((!((map__51193 == null))))?(((((map__51193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51193):map__51193);
var cm = map__51193__$1;
var map__51194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51194__$1 = (((((!((map__51194 == null))))?(((((map__51194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51194):map__51194);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51194__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var temp__5720__auto___51745 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,fast_zip.core.node),cljs.core.cons(lark.tree.nav.include_prefix_parents(loc),lark.tree.nav.left_locs(loc))));
if(cljs.core.truth_(temp__5720__auto___51745)){
var loc_51746__$1 = temp__5720__auto___51745;
var node_51747 = fast_zip.core.node(loc_51746__$1);
var a_pointer_51748 = lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$1(cm);
var changes_51749 = (function (){var _STAR_changes_STAR__orig_val__51201 = lark.structure.edit._STAR_changes_STAR_;
var _STAR_changes_STAR__temp_val__51202 = [];
lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__temp_val__51202;

try{cm.on("changes",lark.structure.edit.log_editor_changes);

cm.operation(((function (_STAR_changes_STAR__orig_val__51201,_STAR_changes_STAR__temp_val__51202,a_pointer_51748,node_51747,loc_51746__$1,temp__5720__auto___51745,map__51193,map__51193__$1,cm,map__51194,map__51194__$1,loc){
return (function (){
var or__4131__auto__ = (function (){var temp__5720__auto____$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"uneval","uneval",1932037707)),new cljs.core.Keyword(null,"tag","tag",-1290361223),fast_zip.core.node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_51746__$1,fast_zip.core.up(loc_51746__$1)], null)));
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
return lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2(cm,lark.editors.codemirror.range__GT_Pos(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node_51747,new cljs.core.Keyword(null,"left","left",-399115937)))).lark$structure$edit$IPointer$insert_BANG_$arity$2(null,"#_");
}
});})(_STAR_changes_STAR__orig_val__51201,_STAR_changes_STAR__temp_val__51202,a_pointer_51748,node_51747,loc_51746__$1,temp__5720__auto___51745,map__51193,map__51193__$1,cm,map__51194,map__51194__$1,loc))
);

cm.off("changes",lark.structure.edit.log_editor_changes);

var or__4131__auto__ = lark.structure.edit._STAR_changes_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return true;
}
}finally {lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__orig_val__51201;
}})();
lark.structure.edit.adjust_for_changes_BANG_(a_pointer_51748,changes_51749);

lark.structure.edit.set_editor_cursor_BANG_(a_pointer_51748);
} else {
}

return true;
});
var G__51209_51750 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"end-line","end-line",1837326455),(0),new cljs.core.Keyword(null,"end-column","end-column",1425389514),(22)], null);
var G__51210_51751 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"column","column",2078222095),(13)], null);
(lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(G__51209_51750,G__51210_51751) : lark.tree.range.within_QMARK_.call(null,G__51209_51750,G__51210_51751));
lark.structure.edit.kill_BANG_ = (function lark$structure$edit$kill_BANG_(p__51215){
var map__51218 = p__51215;
var map__51218__$1 = (((((!((map__51218 == null))))?(((((map__51218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51218):map__51218);
var editor = map__51218__$1;
var map__51219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51218__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51219__$1 = (((((!((map__51219 == null))))?(((((map__51219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51219):map__51219);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51218__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
editor.operation(((function (map__51218,map__51218__$1,editor,map__51219,map__51219__$1,pos,zipper){
return (function (){
var res__31542__auto__ = (function (){var loc = lark.tree.nav.navigate(zipper,pos);
var node = fast_zip.core.node(loc);
var loc__$1 = (function (){var G__51230 = loc;
if(((cljs.core.not((lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2(node,pos) : lark.tree.range.within_inner_QMARK_.call(null,node,pos)))) || (lark.tree.node.whitespace_QMARK_(node)))){
return fast_zip.core.up(G__51230);
} else {
return G__51230;
}
})();
var node__$1 = fast_zip.core.node(loc__$1);
var in_edge_QMARK_ = (cljs.core.truth_(lark.tree.node.has_edges_QMARK_(node__$1))?(function (){var inner = lark.tree.range.inner_range(node__$1);
return cljs.core.not((lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(inner,pos) : lark.tree.range.within_QMARK_.call(null,inner,pos)));
})():null);
var end_node = (cljs.core.truth_(in_edge_QMARK_)?null:((cljs.core.not((lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1(node__$1) : lark.tree.node.may_contain_children_QMARK_.call(null,node__$1))))?lark.tree.range.inner_range(node__$1):cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (loc,node,loc__$1,node__$1,in_edge_QMARK_,map__51218,map__51218__$1,editor,map__51219,map__51219__$1,pos,zipper){
return (function (p1__51214_SHARP_){
return (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(p1__51214_SHARP_) <= new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos));
});})(loc,node,loc__$1,node__$1,in_edge_QMARK_,map__51218,map__51218__$1,editor,map__51219,map__51219__$1,pos,zipper))
,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (loc,node,loc__$1,node__$1,in_edge_QMARK_,map__51218,map__51218__$1,editor,map__51219,map__51219__$1,pos,zipper){
return (function (p1__51213_SHARP_){
return lark.tree.range.lt(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(p1__51213_SHARP_,new cljs.core.Keyword(null,"right","right",-452581833)),pos);
});})(loc,node,loc__$1,node__$1,in_edge_QMARK_,map__51218,map__51218__$1,editor,map__51219,map__51219__$1,pos,zipper))
,fast_zip.core.children(loc__$1))))
));
if(cljs.core.truth_(end_node)){
return lark.structure.edit.cut_range_BANG_(editor,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos,cljs.core.select_keys(end_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], null))], 0)));
} else {
return null;
}
})();
var editor__31543__auto__ = editor;
if(res__31542__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__31543__auto__,null);
}

return res__31542__auto__;
});})(map__51218,map__51218__$1,editor,map__51219,map__51219__$1,pos,zipper))
);

return true;
});
lark.structure.edit.boundary_QMARK_ = (function lark$structure$edit$boundary_QMARK_(s){
var G__51232 = cljs.core.last(s);
var G__51232__$1 = (((G__51232 == null))?null:"\"()[]{} ".indexOf(G__51232));
if((G__51232__$1 == null)){
return null;
} else {
return (G__51232__$1 > (0));
}
});
lark.structure.edit.unwrap_BANG_ = (function lark$structure$edit$unwrap_BANG_(p__51235){
var map__51237 = p__51235;
var map__51237__$1 = (((((!((map__51237 == null))))?(((((map__51237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51237):map__51237);
var editor = map__51237__$1;
var map__51238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51237__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51238__$1 = (((((!((map__51238 == null))))?(((((map__51238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51238):map__51238);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51238__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51238__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var bracket_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51238__$1,new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398));
if(cljs.core.truth_((function (){var and__4120__auto__ = loc;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(lark.editors.codemirror.selection_QMARK_(editor));
} else {
return and__4120__auto__;
}
})())){
var temp__5720__auto___51766 = (function (){var loc__$1 = (function (){var G__51247 = loc;
if(cljs.core.not((lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2(bracket_node,pos) : lark.tree.range.within_inner_QMARK_.call(null,bracket_node,pos)))){
return fast_zip.core.up(G__51247);
} else {
return G__51247;
}
})();
while(true){
if(cljs.core.not(loc__$1)){
return null;
} else {
if(cljs.core.truth_(lark.tree.node.has_edges_QMARK_(fast_zip.core.node(loc__$1)))){
return fast_zip.core.node(loc__$1);
} else {
var G__51767 = fast_zip.core.up(loc__$1);
loc__$1 = G__51767;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(temp__5720__auto___51766)){
var edge_node_51768 = temp__5720__auto___51766;
editor.operation(((function (edge_node_51768,temp__5720__auto___51766,map__51237,map__51237__$1,editor,map__51238,map__51238__$1,pos,loc,bracket_node){
return (function (){
var res__31542__auto__ = (function (){var vec__51262 = lark.tree.node.edges(edge_node_51768);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51262,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51262,(1),null);
var vec__51265 = lark.tree.range.edge_ranges(edge_node_51768);
var left_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51265,(0),null);
var right_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51265,(1),null);
var seq__51268 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(l),left_r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(r),right_r], null)], null));
var chunk__51269 = null;
var count__51270 = (0);
var i__51271 = (0);
while(true){
if((i__51271 < count__51270)){
var vec__51280 = chunk__51269.cljs$core$IIndexed$_nth$arity$2(null,i__51271);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51280,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51280,(1),null);
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,lark.tree.format.spaces(n),range);


var G__51769 = seq__51268;
var G__51770 = chunk__51269;
var G__51771 = count__51270;
var G__51772 = (i__51271 + (1));
seq__51268 = G__51769;
chunk__51269 = G__51770;
count__51270 = G__51771;
i__51271 = G__51772;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__51268);
if(temp__5720__auto____$1){
var seq__51268__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51268__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51268__$1);
var G__51777 = cljs.core.chunk_rest(seq__51268__$1);
var G__51778 = c__4550__auto__;
var G__51779 = cljs.core.count(c__4550__auto__);
var G__51780 = (0);
seq__51268 = G__51777;
chunk__51269 = G__51778;
count__51270 = G__51779;
i__51271 = G__51780;
continue;
} else {
var vec__51283 = cljs.core.first(seq__51268__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51283,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51283,(1),null);
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,lark.tree.format.spaces(n),range);


var G__51781 = cljs.core.next(seq__51268__$1);
var G__51782 = null;
var G__51783 = (0);
var G__51784 = (0);
seq__51268 = G__51781;
chunk__51269 = G__51782;
count__51270 = G__51783;
i__51271 = G__51784;
continue;
}
} else {
return null;
}
}
break;
}
})();
var editor__31543__auto__ = editor;
if(res__31542__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__31543__auto__,null);
}

return res__31542__auto__;
});})(edge_node_51768,temp__5720__auto___51766,map__51237,map__51237__$1,editor,map__51238,map__51238__$1,pos,loc,bracket_node))
);
} else {
}
} else {
}

return true;
});
lark.structure.edit.raise_BANG_ = (function lark$structure$edit$raise_BANG_(p__51297){
var map__51298 = p__51297;
var map__51298__$1 = (((((!((map__51298 == null))))?(((((map__51298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51298):map__51298);
var editor = map__51298__$1;
var map__51299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51299__$1 = (((((!((map__51299 == null))))?(((((map__51299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51299):map__51299);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var bracket_loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,new cljs.core.Keyword(null,"bracket-loc","bracket-loc",1199638686));
var bracket_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,new cljs.core.Keyword(null,"bracket-node","bracket-node",-137189398));
if(cljs.core.truth_((function (){var and__4120__auto__ = bracket_loc;
if(cljs.core.truth_(and__4120__auto__)){
return fast_zip.core.up(bracket_loc);
} else {
return and__4120__auto__;
}
})())){
var outer_node_51785 = fast_zip.core.node(fast_zip.core.up(bracket_loc));
editor.operation(((function (outer_node_51785,map__51298,map__51298__$1,editor,map__51299,map__51299__$1,pos,bracket_loc,bracket_node){
return (function (){
var res__31542__auto__ = (function (){
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$4(editor,"",lark.tree.range.end(bracket_node),outer_node_51785);

return lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$4(editor,"",outer_node_51785,bracket_node);
})()
;
var editor__31543__auto__ = editor;
if(res__31542__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__31543__auto__,null);
}

return res__31542__auto__;
});})(outer_node_51785,map__51298,map__51298__$1,editor,map__51299,map__51299__$1,pos,bracket_loc,bracket_node))
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
var stack__$1 = (function (){var G__51329 = stack;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.first(stack));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.editors.codemirror.current_selection_bounds(cm),cljs.core.first(stack));
}
})())){
return cljs.core.rest(G__51329);
} else {
return G__51329;
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
lark.structure.edit.expand_selection = (function lark$structure$edit$expand_selection(p__51335){
var map__51336 = p__51335;
var map__51336__$1 = (((((!((map__51336 == null))))?(((((map__51336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51336):map__51336);
var cm = map__51336__$1;
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51336__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
var sel_51806 = lark.editors.codemirror.current_selection_bounds(cm);
var loc_51807 = lark.tree.nav.navigate(zipper,sel_51806);
var select_BANG__51808 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.structure.edit.tracked_select,cm);
var cursor_root_51809 = lark.editors.codemirror.temp_marker_cursor_pos(cm);
var selection_QMARK__51810 = lark.editors.codemirror.selection_QMARK_(cm);
if(cljs.core.truth_((function (){var or__4131__auto__ = cursor_root_51809;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(selection_QMARK__51810);
}
})())){
lark.structure.edit.push_cursor_BANG_(cm);

lark.structure.edit.push_stack_BANG_(cm,lark.editors.codemirror.current_selection_bounds(cm));
} else {
}

var loc_51818__$1 = loc_51807;
while(true){
if(cljs.core.not(loc_51818__$1)){
} else {
var node_51819 = fast_zip.core.node(loc_51818__$1);
var inner_range_51820 = (cljs.core.truth_(lark.tree.node.has_edges_QMARK_(node_51819))?(function (){var range = lark.tree.range.inner_range(node_51819);
if(lark.tree.range.empty_range_QMARK_(range)){
return null;
} else {
return range;
}
})():null);
if(lark.tree.range.range_EQ_(sel_51806,inner_range_51820)){
(select_BANG__51808.cljs$core$IFn$_invoke$arity$1 ? select_BANG__51808.cljs$core$IFn$_invoke$arity$1(node_51819) : select_BANG__51808.call(null,node_51819));
} else {
if(cljs.core.truth_((function (){var G__51341 = inner_range_51820;
if((G__51341 == null)){
return null;
} else {
return (lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(G__51341,sel_51806) : lark.tree.range.within_QMARK_.call(null,G__51341,sel_51806));
}
})())){
(select_BANG__51808.cljs$core$IFn$_invoke$arity$1 ? select_BANG__51808.cljs$core$IFn$_invoke$arity$1(inner_range_51820) : select_BANG__51808.call(null,inner_range_51820));
} else {
if(lark.tree.range.range_EQ_(sel_51806,node_51819)){
var G__51821 = fast_zip.core.up(loc_51818__$1);
loc_51818__$1 = G__51821;
continue;
} else {
if(cljs.core.truth_((lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(node_51819,sel_51806) : lark.tree.range.within_QMARK_.call(null,node_51819,sel_51806)))){
(select_BANG__51808.cljs$core$IFn$_invoke$arity$1 ? select_BANG__51808.cljs$core$IFn$_invoke$arity$1(node_51819) : select_BANG__51808.call(null,node_51819));
} else {
var G__51822 = fast_zip.core.up(loc_51818__$1);
loc_51818__$1 = G__51822;
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
var G__51342_51823 = lark.structure.edit.pop_stack_BANG_(cm);
if((G__51342_51823 == null)){
} else {
lark.editors.codemirror.select_range(cm,G__51342_51823);
}

return true;
});
lark.structure.edit.expand_selection_x = (function lark$structure$edit$expand_selection_x(p__51343,direction){
var map__51344 = p__51343;
var map__51344__$1 = (((((!((map__51344 == null))))?(((((map__51344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51344):map__51344);
var cm = map__51344__$1;
var zipper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51344__$1,new cljs.core.Keyword(null,"zipper","zipper",1500694438));
var selection_bounds_51825 = lark.editors.codemirror.current_selection_bounds(cm);
var selection_loc_51826 = lark.tree.nav.navigate(zipper,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_51825,direction));
var selection_node_51827 = fast_zip.core.node(selection_loc_51826);
var cursor_root_51828 = lark.editors.codemirror.temp_marker_cursor_pos(cm);
if(cljs.core.truth_(cursor_root_51828)){
lark.structure.edit.push_cursor_BANG_(cm);

lark.structure.edit.push_stack_BANG_(cm,selection_bounds_51825);
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = lark.tree.node.has_edges_QMARK_(selection_node_51827);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_51825,direction),lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(lark.tree.range.inner_range(selection_node_51827),direction));
} else {
return and__4120__auto__;
}
})())){
lark.structure.edit.expand_selection(cm);
} else {
var temp__5718__auto___51829 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.node.whitespace_QMARK_),fast_zip.core.node),(function (){var fexpr__51347 = (function (){var G__51348 = direction;
var G__51348__$1 = (((G__51348 instanceof cljs.core.Keyword))?G__51348.fqn:null);
switch (G__51348__$1) {
case "right":
return lark.tree.nav.right_locs;

break;
case "left":
return lark.tree.nav.left_locs;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51348__$1)].join('')));

}
})();
return (fexpr__51347.cljs$core$IFn$_invoke$arity$1 ? fexpr__51347.cljs$core$IFn$_invoke$arity$1(selection_loc_51826) : fexpr__51347.call(null,selection_loc_51826));
})()));
if(cljs.core.truth_(temp__5718__auto___51829)){
var adjacent_loc_51831 = temp__5718__auto___51829;
lark.structure.edit.tracked_select(cm,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(fast_zip.core.node(adjacent_loc_51831)),(function (){var G__51350 = direction;
var G__51350__$1 = (((G__51350 instanceof cljs.core.Keyword))?G__51350.fqn:null);
switch (G__51350__$1) {
case "right":
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_51825,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "left":
return lark.tree.range.__GT_end(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(selection_bounds_51825,new cljs.core.Keyword(null,"right","right",-452581833)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51350__$1)].join('')));

}
})()], 0)));
} else {
lark.structure.edit.expand_selection(cm);
}
}

return true;
});
lark.structure.edit.backspace_BANG_ = (function lark$structure$edit$backspace_BANG_(p1__51351_SHARP_){
return p1__51351_SHARP_.execCommand("delCharBefore");
});
lark.structure.edit.comment_line = (function lark$structure$edit$comment_line(var_args){
var G__51354 = arguments.length;
switch (G__51354) {
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
var _STAR_changes_STAR__orig_val__51355 = lark.structure.edit._STAR_changes_STAR_;
var _STAR_changes_STAR__temp_val__51356 = [];
lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__temp_val__51356;

try{cm.on("changes",lark.structure.edit.log_editor_changes);

cm.operation(((function (_STAR_changes_STAR__orig_val__51355,_STAR_changes_STAR__temp_val__51356){
return (function (){
if(cljs.core.truth_(lark.editors.codemirror.selection_QMARK_(cm))){
var sel = (cm.listSelections()[(0)]);
var vec__51357 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sel.anchor.line,sel.head.line], null));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51357,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51357,(1),null);
var seq__51360 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(end + (1))));
var chunk__51361 = null;
var count__51362 = (0);
var i__51363 = (0);
while(true){
if((i__51363 < count__51362)){
var line_n = chunk__51361.cljs$core$IIndexed$_nth$arity$2(null,i__51363);
lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2(cm,line_n);


var G__51844 = seq__51360;
var G__51845 = chunk__51361;
var G__51846 = count__51362;
var G__51847 = (i__51363 + (1));
seq__51360 = G__51844;
chunk__51361 = G__51845;
count__51362 = G__51846;
i__51363 = G__51847;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51360);
if(temp__5720__auto__){
var seq__51360__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51360__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51360__$1);
var G__51848 = cljs.core.chunk_rest(seq__51360__$1);
var G__51849 = c__4550__auto__;
var G__51850 = cljs.core.count(c__4550__auto__);
var G__51851 = (0);
seq__51360 = G__51848;
chunk__51361 = G__51849;
count__51362 = G__51850;
i__51363 = G__51851;
continue;
} else {
var line_n = cljs.core.first(seq__51360__$1);
lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2(cm,line_n);


var G__51852 = cljs.core.next(seq__51360__$1);
var G__51853 = null;
var G__51854 = (0);
var G__51855 = (0);
seq__51360 = G__51852;
chunk__51361 = G__51853;
count__51362 = G__51854;
i__51363 = G__51855;
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
});})(_STAR_changes_STAR__orig_val__51355,_STAR_changes_STAR__temp_val__51356))
);

cm.off("changes",lark.structure.edit.log_editor_changes);

var or__4131__auto__ = lark.structure.edit._STAR_changes_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return true;
}
}finally {lark.structure.edit._STAR_changes_STAR_ = _STAR_changes_STAR__orig_val__51355;
}});

lark.structure.edit.comment_line.cljs$core$IFn$_invoke$arity$2 = (function (cm,line_n){
var vec__51370_51860 = cljs.core.rest(cljs.core.re_find(/^(\s*)(;+)?/,cm.getLine(line_n)));
var spaces_51861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51370_51860,(0),null);
var semicolons_51862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51370_51860,(1),null);
var vec__51373_51863 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces_51861,semicolons_51862], null));
var space_n_51864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51373_51863,(0),null);
var semicolon_n_51865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51373_51863,(1),null);
if((semicolon_n_51865 > (0))){
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,"",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_n,new cljs.core.Keyword(null,"column","column",2078222095),space_n_51864,new cljs.core.Keyword(null,"end-column","end-column",1425389514),(space_n_51864 + semicolon_n_51865)], null));
} else {
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,";;",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_n,new cljs.core.Keyword(null,"column","column",2078222095),space_n_51864,new cljs.core.Keyword(null,"end-column","end-column",1425389514),space_n_51864], null));
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
var G__51870 = fast_zip.core.up(loc__$1);
loc__$1 = G__51870;
continue;
}
} else {
return null;
}
break;
}
});
lark.structure.edit.slurp_forward = (function lark$structure$edit$slurp_forward(p__51376){
var map__51377 = p__51376;
var map__51377__$1 = (((((!((map__51377 == null))))?(((((map__51377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51377):map__51377);
var cm = map__51377__$1;
var map__51378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51377__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51378__$1 = (((((!((map__51378 == null))))?(((((map__51378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51378):map__51378);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51378__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51378__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var end_edge_loc_51878 = lark.structure.edit.slurp_parent(loc,pos);
var start_edge_loc_51879 = lark.tree.nav.include_prefix_parents(end_edge_loc_51878);
var map__51381_51880 = fast_zip.core.node(start_edge_loc_51879);
var map__51381_51881__$1 = (((((!((map__51381_51880 == null))))?(((((map__51381_51880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51381_51880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51381_51880):map__51381_51880);
var node_51882 = map__51381_51881__$1;
var tag_51883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51381_51881__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.truth_((function (){var and__4120__auto__ = node_51882;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),tag_51883);
} else {
return and__4120__auto__;
}
})())){
var right_bracket_51896 = cljs.core.second(lark.tree.node.edges(fast_zip.core.node(end_edge_loc_51878)));
var last_child_51897 = (function (){var G__51383 = fast_zip.core.children(end_edge_loc_51878);
var G__51383__$1 = (((G__51383 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,G__51383));
if((G__51383__$1 == null)){
return null;
} else {
return cljs.core.last(G__51383__$1);
}
})();
var temp__5720__auto___51904 = (function (){var G__51384 = fast_zip.core.rights(start_edge_loc_51879);
var G__51384__$1 = (((G__51384 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,G__51384));
if((G__51384__$1 == null)){
return null;
} else {
return cljs.core.first(G__51384__$1);
}
})();
if(cljs.core.truth_(temp__5720__auto___51904)){
var next_form_51908 = temp__5720__auto___51904;
var form_content_51909 = lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(next_form_51908);
var replace_start_51910 = (cljs.core.truth_(last_child_51897)?lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(last_child_51897,new cljs.core.Keyword(null,"right","right",-452581833)):lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(lark.tree.range.inner_range(fast_zip.core.node(end_edge_loc_51878)),new cljs.core.Keyword(null,"right","right",-452581833)));
var replace_end_51911 = cljs.core.select_keys(next_form_51908,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], null));
var pad_start_51912 = (function (){var and__4120__auto__ = last_child_51897;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not(lark.structure.edit.boundary_QMARK_(cljs.core.first(form_content_51909)))) || (cljs.core.not(lark.structure.edit.boundary_QMARK_(cljs.core.last(lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(last_child_51897))))));
} else {
return and__4120__auto__;
}
})();
var cur_51913 = cm.getCursor();
lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(cm,[(cljs.core.truth_(pad_start_51912)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_content_51909),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_bracket_51896)].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([replace_start_51910,replace_end_51911], 0)));

cm.setCursor(cur_51913);
} else {
}
} else {
}

return true;
});
lark.structure.edit.unslurp_forward = (function lark$structure$edit$unslurp_forward(p__51385){
var map__51386 = p__51385;
var map__51386__$1 = (((((!((map__51386 == null))))?(((((map__51386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51386):map__51386);
var editor = map__51386__$1;
var map__51387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51386__$1,new cljs.core.Keyword("magic","cursor","magic/cursor",510560159));
var map__51387__$1 = (((((!((map__51387 == null))))?(((((map__51387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51387):map__51387);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var end_edge_loc_51932 = lark.structure.edit.slurp_parent(loc,pos);
var end_edge_node_51933 = (function (){var G__51390 = end_edge_loc_51932;
if((G__51390 == null)){
return null;
} else {
return fast_zip.core.node(G__51390);
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = end_edge_node_51933;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(end_edge_node_51933));
} else {
return and__4120__auto__;
}
})())){
var temp__5720__auto___51939 = cljs.core.last(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(lark.tree.node.whitespace_QMARK_,fast_zip.core.children(end_edge_loc_51932)));
if(cljs.core.truth_(temp__5720__auto___51939)){
var last_child_51941 = temp__5720__auto___51939;
editor.operation(((function (last_child_51941,temp__5720__auto___51939,end_edge_loc_51932,end_edge_node_51933,map__51386,map__51386__$1,editor,map__51387,map__51387__$1,loc,pos){
return (function (){
var res__31542__auto__ = (function (){
lark.structure.edit.pointer.cljs$core$IFn$_invoke$arity$2(editor,lark.editors.codemirror.range__GT_Pos(lark.tree.range.end(end_edge_node_51933))).lark$structure$edit$IPointer$insert_BANG_$arity$2(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(last_child_51941))," "].join(''));

lark.editors.codemirror.replace_range_BANG_.cljs$core$IFn$_invoke$arity$3(editor,clojure.string.replace(lark.editors.codemirror.range_text(editor,last_child_51941),/[^\n]/," "),last_child_51941);

return lark.editors.codemirror.set_cursor_BANG_(editor,cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.editors.codemirror.range__GT_Pos(pos),lark.editors.codemirror.range__GT_Pos(lark.tree.range.end(lark.tree.range.inner_range(end_edge_node_51933)))], null))));
})()
;
var editor__31543__auto__ = editor;
if(res__31542__auto__ === false){
} else {
lark.structure.edit.format_BANG_.cljs$core$IFn$_invoke$arity$2(editor__31543__auto__,null);
}

return res__31542__auto__;
});})(last_child_51941,temp__5720__auto___51939,end_edge_loc_51932,end_edge_node_51933,map__51386,map__51386__$1,editor,map__51387,map__51387__$1,loc,pos))
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
var cursor_51954 = lark.editors.codemirror.get_cursor(editor);
var line_i_51955 = cursor_51954.line;
var line_51956 = editor.getLine(line_i_51955);
var padding_51957 = cljs.core.count(cljs.core.second(cljs.core.re_find((function (){var G__51391 = side;
var G__51391__$1 = (((G__51391 instanceof cljs.core.Keyword))?G__51391.fqn:null);
switch (G__51391__$1) {
case "left":
return /^(\s+).*/;

break;
case "right":
return /.*?(\s+)$/;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51391__$1)].join('')));

}
})(),line_51956)));
lark.editors.codemirror.set_cursor_BANG_(editor,(function (){var G__51392 = line_i_51955;
var G__51393 = (function (){var G__51394 = side;
var G__51394__$1 = (((G__51394 instanceof cljs.core.Keyword))?G__51394.fqn:null);
switch (G__51394__$1) {
case "left":
return padding_51957;

break;
case "right":
return (cljs.core.count(line_51956) - padding_51957);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51394__$1)].join('')));

}
})();
return (lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2 ? lark.editors.codemirror.Pos.cljs$core$IFn$_invoke$arity$2(G__51392,G__51393) : lark.editors.codemirror.Pos.call(null,G__51392,G__51393));
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
var G__51397 = arguments.length;
switch (G__51397) {
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
return lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__51398 = loc;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"left","left",-399115937)),(function (){var G__51399 = loc;
var G__51399__$1 = (((G__51399 == null))?null:fast_zip.core.node(G__51399));
if((G__51399__$1 == null)){
return null;
} else {
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(G__51399__$1,new cljs.core.Keyword(null,"left","left",-399115937));
}
})())){
return fast_zip.core.up(G__51398);
} else {
return G__51398;
}
})());
});

lark.structure.edit.eldoc_symbol.cljs$core$IFn$_invoke$arity$1 = (function (loc){
var G__51400 = loc;
var G__51400__$1 = (((G__51400 == null))?null:lark.tree.nav.closest(((function (G__51400){
return (function (p1__51395_SHARP_){
var G__51402 = fast_zip.core.node(p1__51395_SHARP_).tag;
var fexpr__51401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null);
return (fexpr__51401.cljs$core$IFn$_invoke$arity$1 ? fexpr__51401.cljs$core$IFn$_invoke$arity$1(G__51402) : fexpr__51401.call(null,G__51402));
});})(G__51400))
,G__51400));
var G__51400__$2 = (((G__51400__$1 == null))?null:fast_zip.core.children(G__51400__$1));
var G__51400__$3 = (((G__51400__$2 == null))?null:cljs.core.first(G__51400__$2));
if((G__51400__$3 == null)){
return null;
} else {
return lark.structure.edit.node_symbol(G__51400__$3);
}
});

lark.structure.edit.eldoc_symbol.cljs$lang$maxFixedArity = 2;

