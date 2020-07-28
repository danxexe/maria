goog.provide('lark.tree.cursor');
goog.require('cljs.core');
goog.require('lark.tree.nav');
goog.require('fast_zip.core');
goog.require('lark.tree.node');
goog.require('lark.tree.range');
goog.require('lark.tree.reader');
goog.require('lark.tree.util');
lark.tree.cursor.pos_offset = (function lark$tree$cursor$pos_offset(p__67179,p__67180){
var map__67181 = p__67179;
var map__67181__$1 = (((((!((map__67181 == null))))?(((((map__67181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67181):map__67181);
var node_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67181__$1,new cljs.core.Keyword(null,"line","line",212345235));
var node_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67181__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var map__67182 = p__67180;
var map__67182__$1 = (((((!((map__67182 == null))))?(((((map__67182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67182):map__67182);
var pos_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67182__$1,new cljs.core.Keyword(null,"line","line",212345235));
var pos_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67182__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos_line - node_line),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_line,pos_line))?(pos_col - node_col):pos_col)], null);
});
lark.tree.cursor.path = (function lark$tree$cursor$path(var_args){
var G__67200 = arguments.length;
switch (G__67200) {
case 2:
return lark.tree.cursor.path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lark.tree.cursor.path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.tree.cursor.path.cljs$core$IFn$_invoke$arity$2 = (function (zipper,pos){
return lark.tree.cursor.path.cljs$core$IFn$_invoke$arity$3(zipper,pos,null);
});

lark.tree.cursor.path.cljs$core$IFn$_invoke$arity$3 = (function (zipper,pos,cursor_loc){
var loc_at_pos = lark.tree.nav.navigate(zipper,pos);
var node = fast_zip.core.node(loc_at_pos);
var vec__67201 = (function (){var or__4131__auto__ = (cljs.core.truth_(cursor_loc)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cursor_loc,new cljs.core.Keyword(null,"cursor-space","cursor-space",1045797163),lark.tree.cursor.pos_offset(fast_zip.core.node(cursor_loc),pos)], null):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = (function (){var and__4120__auto__ = lark.tree.node.has_edges_QMARK_(node);
if(cljs.core.truth_(and__4120__auto__)){
return lark.tree.range.inner_range(node);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var inner_range = temp__5720__auto__;
if(lark.tree.range.pos_EQ_(pos,inner_range)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),loc_at_pos,new cljs.core.Keyword(null,"inner-left","inner-left",-1599877614)], null);
} else {
if(lark.tree.range.pos_EQ_(pos,lark.tree.range.end(inner_range))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),loc_at_pos,new cljs.core.Keyword(null,"inner-right","inner-right",484325964)], null);
} else {
return null;
}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var temp__5720__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lark.tree.nav.path_node_pred,fast_zip.core.node),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_at_pos,fast_zip.core.left(loc_at_pos),fast_zip.core.right(loc_at_pos)], null))));
if(cljs.core.truth_(temp__5720__auto__)){
var adjacent_loc = temp__5720__auto__;
var adjacent_node = fast_zip.core.node(adjacent_loc);
if(lark.tree.range.pos_EQ_(pos,adjacent_node)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),adjacent_loc,new cljs.core.Keyword(null,"outer-left","outer-left",-1967314909)], null);
} else {
if(lark.tree.range.pos_EQ_(pos,lark.tree.range.end(adjacent_node))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),adjacent_loc,new cljs.core.Keyword(null,"outer-right","outer-right",2064081900)], null);
} else {
return null;
}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = (cljs.core.truth_((function (){var G__67223 = fast_zip.core.up(loc_at_pos);
var G__67223__$1 = (((G__67223 == null))?null:fast_zip.core.node(G__67223));
var G__67223__$2 = (((G__67223__$1 == null))?null:lark.tree.range.inner_range(G__67223__$1));
if((G__67223__$2 == null)){
return null;
} else {
return lark.tree.range.pos_EQ_(G__67223__$2,pos);
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),fast_zip.core.up(loc_at_pos),new cljs.core.Keyword(null,"inner-left","inner-left",-1599877614)], null):null);
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
var or__4131__auto____$4 = (cljs.core.truth_((function (){var and__4120__auto__ = (!(lark.tree.node.whitespace_QMARK_(node)));
if(and__4120__auto__){
var and__4120__auto____$1 = lark.tree.node.terminal_node_QMARK_(node);
if(and__4120__auto____$1){
return (lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(node,pos) : lark.tree.range.within_QMARK_.call(null,node,pos));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),loc_at_pos,new cljs.core.Keyword(null,"terminal-offset","terminal-offset",1516977400),lark.tree.cursor.pos_offset(node,pos)], null):null);
if(cljs.core.truth_(or__4131__auto____$4)){
return or__4131__auto____$4;
} else {
var or__4131__auto____$5 = (cljs.core.truth_((function (){var and__4120__auto__ = (fast_zip.core.right(loc_at_pos) == null);
if(and__4120__auto__){
return fast_zip.core.up(loc_at_pos);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),fast_zip.core.up(loc_at_pos),new cljs.core.Keyword(null,"inner-right","inner-right",484325964)], null):null);
if(cljs.core.truth_(or__4131__auto____$5)){
return or__4131__auto____$5;
} else {
var or__4131__auto____$6 = (cljs.core.truth_((function (){var G__67234 = fast_zip.core.left(loc_at_pos);
var G__67234__$1 = (((G__67234 == null))?null:fast_zip.core.node(G__67234));
var G__67234__$2 = (((G__67234__$1 == null))?null:lark.tree.util.guard__GT_(G__67234__$1,lark.tree.nav.path_node_pred));
var G__67234__$3 = (((G__67234__$2 == null))?null:lark.tree.range.end(G__67234__$2));
if((G__67234__$3 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__67234__$3,pos);
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),fast_zip.core.left(loc_at_pos),new cljs.core.Keyword(null,"outer-right","outer-right",2064081900)], null):null);
if(cljs.core.truth_(or__4131__auto____$6)){
return or__4131__auto____$6;
} else {
var or__4131__auto____$7 = (function (){var temp__5720__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.node.whitespace_QMARK_),fast_zip.core.node),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.node.newline_QMARK_),fast_zip.core.node),lark.tree.nav.right_locs(loc_at_pos))));
if(cljs.core.truth_(temp__5720__auto__)){
var loc = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),loc,new cljs.core.Keyword(null,"outer-left","outer-left",-1967314909)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$7)){
return or__4131__auto____$7;
} else {
var or__4131__auto____$8 = (function (){var temp__5720__auto__ = (function (){var or__4131__auto____$8 = (function (){var G__67246 = loc_at_pos;
if((G__67246 == null)){
return null;
} else {
return lark.tree.util.guard__GT_(G__67246,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lark.tree.node.newline_QMARK_,fast_zip.core.node));
}
})();
if(cljs.core.truth_(or__4131__auto____$8)){
return or__4131__auto____$8;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.node.whitespace_QMARK_),fast_zip.core.node),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.node.newline_QMARK_),fast_zip.core.node),lark.tree.nav.left_locs(loc_at_pos))));
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var loc = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),loc,new cljs.core.Keyword(null,"outer-right","outer-right",2064081900)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$8)){
return or__4131__auto____$8;
} else {
var or__4131__auto____$9 = (function (){var temp__5720__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(((function (or__4131__auto____$8,or__4131__auto____$7,or__4131__auto____$6,or__4131__auto____$5,or__4131__auto____$4,or__4131__auto____$3,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__,loc_at_pos,node){
return (function (p1__67190_SHARP_){
return lark.tree.range.pos_EQ_(node,p1__67190_SHARP_);
});})(or__4131__auto____$8,or__4131__auto____$7,or__4131__auto____$6,or__4131__auto____$5,or__4131__auto____$4,or__4131__auto____$3,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__,loc_at_pos,node))
,lark.tree.range.inner_range,fast_zip.core.node),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_at_pos,fast_zip.core.up(loc_at_pos)], null))));
if(cljs.core.truth_(temp__5720__auto__)){
var loc = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),loc,new cljs.core.Keyword(null,"inner-left","inner-left",-1599877614)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$9)){
return or__4131__auto____$9;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),loc_at_pos,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}
}
}
}
}
}
}
}
}
})();
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67201,(0),null);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67201,(1),null);
var sticky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67201,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67201,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.tree.nav.get_path(loc),sticky,data], null);
});

lark.tree.cursor.path.cljs$lang$maxFixedArity = 3;

lark.tree.cursor.resolve_offset = (function lark$tree$cursor$resolve_offset(p__67248,p__67249){
var vec__67250 = p__67248;
var line_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67250,(0),null);
var column_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67250,(1),null);
var map__67253 = p__67249;
var map__67253__$1 = (((((!((map__67253 == null))))?(((((map__67253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67253):map__67253);
var node_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67253__$1,new cljs.core.Keyword(null,"line","line",212345235));
var node_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67253__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(line_offset + node_line),new cljs.core.Keyword(null,"column","column",2078222095),(((line_offset === (0)))?(node_col + column_offset):column_offset)], null);
});
lark.tree.cursor.position = (function lark$tree$cursor$position(zipper,p__67258){
var vec__67259 = p__67258;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67259,(0),null);
var sticky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67259,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67259,(2),null);
var G__67262 = sticky;
var G__67262__$1 = (((G__67262 instanceof cljs.core.Keyword))?G__67262.fqn:null);
switch (G__67262__$1) {
case "cursor-space":
var space_loc = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.last(path)))?fast_zip.core.down(lark.tree.nav.get_loc(zipper,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path))):fast_zip.core.right(lark.tree.nav.get_loc(zipper,cljs.core.seq(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(path),(cljs.core.count(path) - (1)),cljs.core.dec)))));
return lark.tree.cursor.resolve_offset(data,fast_zip.core.node(space_loc));

break;
default:
var loc = lark.tree.nav.get_loc(zipper,path);
var node = fast_zip.core.node(loc);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__67265 = sticky;
var G__67265__$1 = (((G__67265 instanceof cljs.core.Keyword))?G__67265.fqn:null);
switch (G__67265__$1) {
case "outer-right":
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "outer-left":
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "inner-right":
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(lark.tree.range.inner_range(node),new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "inner-left":
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(lark.tree.range.inner_range(node),new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "terminal-offset":
return lark.tree.cursor.resolve_offset(data,node);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67265__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"node","node",581201198),node);

}
});

//# sourceMappingURL=lark.tree.cursor.js.map
