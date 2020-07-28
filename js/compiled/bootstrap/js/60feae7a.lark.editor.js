goog.provide('lark.editor');
lark.editor.view_index = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
lark.editor.view = (function lark$editor$view(this$){
var G__50306 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(this$);
var fexpr__50305 = cljs.core.deref(lark.editor.view_index);
return (fexpr__50305.cljs$core$IFn$_invoke$arity$1 ? fexpr__50305.cljs$core$IFn$_invoke$arity$1(G__50306) : fexpr__50305.call(null,G__50306));
});
lark.editor.mount = (function lark$editor$mount(view){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

return lark.editor.view_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lark.editor.view_index.cljs$core$IDeref$_deref$arity$1(null),id,view));
});
lark.editor.unmount = (function lark$editor$unmount(view){
return lark.editor.view_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(lark.editor.view_index.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(view))));
});
lark.editor.of_block = (function lark$editor$of_block(block){
if(cljs.core.truth_(lark.editor.view(block))){
} else {
(chia.view.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? chia.view.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : chia.view.flush_BANG_.call(null));
}

var G__50307 = lark.editor.view(block);
if((G__50307 == null)){
return null;
} else {
return G__50307.getEditor();
}
});

/**
 * @interface
 */
lark.editor.IKind = function(){};

lark.editor.kind = (function lark$editor$kind(this$){
if((((!((this$ == null)))) && ((!((this$.lark$editor$IKind$kind$arity$1 == null)))))){
return this$.lark$editor$IKind$kind$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.kind[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (lark.editor.kind["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IKind.kind",this$);
}
}
}
});


/**
 * @interface
 */
lark.editor.IHistory = function(){};

lark.editor.get_selections = (function lark$editor$get_selections(this$){
if((((!((this$ == null)))) && ((!((this$.lark$editor$IHistory$get_selections$arity$1 == null)))))){
return this$.lark$editor$IHistory$get_selections$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.get_selections[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (lark.editor.get_selections["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-selections",this$);
}
}
}
});

lark.editor.put_selections_BANG_ = (function lark$editor$put_selections_BANG_(this$,selections){
if((((!((this$ == null)))) && ((!((this$.lark$editor$IHistory$put_selections_BANG_$arity$2 == null)))))){
return this$.lark$editor$IHistory$put_selections_BANG_$arity$2(this$,selections);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.put_selections_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,selections) : m__4434__auto__.call(null,this$,selections));
} else {
var m__4431__auto__ = (lark.editor.put_selections_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,selections) : m__4431__auto__.call(null,this$,selections));
} else {
throw cljs.core.missing_protocol("IHistory.put-selections!",this$);
}
}
}
});


/**
 * @interface
 */
lark.editor.ICursor = function(){};

lark.editor.get_cursor = (function lark$editor$get_cursor(this$){
if((((!((this$ == null)))) && ((!((this$.lark$editor$ICursor$get_cursor$arity$1 == null)))))){
return this$.lark$editor$ICursor$get_cursor$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.get_cursor[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (lark.editor.get_cursor["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICursor.get-cursor",this$);
}
}
}
});

lark.editor.set_cursor = (function lark$editor$set_cursor(this$,position){
if((((!((this$ == null)))) && ((!((this$.lark$editor$ICursor$set_cursor$arity$2 == null)))))){
return this$.lark$editor$ICursor$set_cursor$arity$2(this$,position);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.set_cursor[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,position) : m__4434__auto__.call(null,this$,position));
} else {
var m__4431__auto__ = (lark.editor.set_cursor["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,position) : m__4431__auto__.call(null,this$,position));
} else {
throw cljs.core.missing_protocol("ICursor.set-cursor",this$);
}
}
}
});

lark.editor.cursor_coords = (function lark$editor$cursor_coords(this$){
if((((!((this$ == null)))) && ((!((this$.lark$editor$ICursor$cursor_coords$arity$1 == null)))))){
return this$.lark$editor$ICursor$cursor_coords$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.cursor_coords[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (lark.editor.cursor_coords["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICursor.cursor-coords",this$);
}
}
}
});

lark.editor.coords_cursor = (function lark$editor$coords_cursor(this$,client_x,client_y){
if((((!((this$ == null)))) && ((!((this$.lark$editor$ICursor$coords_cursor$arity$3 == null)))))){
return this$.lark$editor$ICursor$coords_cursor$arity$3(this$,client_x,client_y);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.coords_cursor[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,client_x,client_y) : m__4434__auto__.call(null,this$,client_x,client_y));
} else {
var m__4431__auto__ = (lark.editor.coords_cursor["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,client_x,client_y) : m__4431__auto__.call(null,this$,client_x,client_y));
} else {
throw cljs.core.missing_protocol("ICursor.coords-cursor",this$);
}
}
}
});

lark.editor.start = (function lark$editor$start(this$){
if((((!((this$ == null)))) && ((!((this$.lark$editor$ICursor$start$arity$1 == null)))))){
return this$.lark$editor$ICursor$start$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.start[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (lark.editor.start["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICursor.start",this$);
}
}
}
});

lark.editor.end = (function lark$editor$end(this$){
if((((!((this$ == null)))) && ((!((this$.lark$editor$ICursor$end$arity$1 == null)))))){
return this$.lark$editor$ICursor$end$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor.end[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (lark.editor.end["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICursor.end",this$);
}
}
}
});

lark.editor._focus_BANG_ = (function lark$editor$_focus_BANG_(this$,coords){
if((((!((this$ == null)))) && ((!((this$.lark$editor$ICursor$_focus_BANG_$arity$2 == null)))))){
return this$.lark$editor$ICursor$_focus_BANG_$arity$2(this$,coords);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.editor._focus_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,coords) : m__4434__auto__.call(null,this$,coords));
} else {
var m__4431__auto__ = (lark.editor._focus_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,coords) : m__4431__auto__.call(null,this$,coords));
} else {
throw cljs.core.missing_protocol("ICursor.-focus!",this$);
}
}
}
});

lark.editor.focus_BANG_ = (function lark$editor$focus_BANG_(var_args){
var G__50344 = arguments.length;
switch (G__50344) {
case 1:
return lark.editor.focus_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.editor.focus_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.editor.focus_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (editor){
return lark.editor.focus_BANG_.cljs$core$IFn$_invoke$arity$2(editor,null);
});

lark.editor.focus_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (editor,coords){
lark.editor._focus_BANG_(editor,coords);

return true;
});

lark.editor.focus_BANG_.cljs$lang$maxFixedArity = 2;

lark.editor.at_start_QMARK_ = (function lark$editor$at_start_QMARK_(editor){
var G__50345 = lark.editor.get_cursor(editor);
if((G__50345 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__50345,lark.editor.start(editor));
}
});
lark.editor.at_end_QMARK_ = (function lark$editor$at_end_QMARK_(editor){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.editor.get_cursor(editor),lark.editor.end(editor));
});
lark.editor.scroll_into_view = (function lark$editor$scroll_into_view(coords){
var temp__5720__auto__ = (((coords.top < (0)))?((window.scrollY + coords.top) - (100)):(((coords.top > window.innerHeight))?((window.scrollY + (coords.top - window.innerHeight)) + (100)):null
));
if(cljs.core.truth_(temp__5720__auto__)){
var scroll_y = temp__5720__auto__;
return window.scrollTo((0),scroll_y);
} else {
return null;
}
});
