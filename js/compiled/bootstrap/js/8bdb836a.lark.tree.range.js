goog.provide('lark.tree.range');
lark.tree.range.lt = (function lark$tree$range$lt(pos1,pos2){
return (((new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos1) < new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos2))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos1),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos2))) && ((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(pos1) < new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(pos2))))));
});
lark.tree.range.contains_fn = (function lark$tree$range$contains_fn(include_edges_QMARK_){
var vec__48616 = (function (){var G__48619 = include_edges_QMARK_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__48619)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT__EQ_,cljs.core._LT__EQ_], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__48619)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT_,cljs.core._LT_], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48619)].join('')));

}
}
})();
var greater_than = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48616,(0),null);
var less_than = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48616,(1),null);
return ((function (vec__48616,greater_than,less_than){
return (function lark$tree$range$contains_fn_$_within_QMARK_(container,pos){
var and__4120__auto__ = container;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(container),fast_zip.core.ZipperLocation)){
return lark$tree$range$contains_fn_$_within_QMARK_(fast_zip.core.node(container),pos);
} else {
var map__48623 = pos;
var map__48623__$1 = (((((!((map__48623 == null))))?(((((map__48623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48623):map__48623);
var pos_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48623__$1,new cljs.core.Keyword(null,"line","line",212345235));
var pos_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48623__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var map__48624 = pos;
var map__48624__$1 = (((((!((map__48624 == null))))?(((((map__48624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48624):map__48624);
var end_pos_line = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48624__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455),pos_line);
var end_pos_column = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48624__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514),pos_column);
var map__48625 = container;
var map__48625__$1 = (((((!((map__48625 == null))))?(((((map__48625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48625):map__48625);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var and__4120__auto____$1 = (pos_line >= line);
if(and__4120__auto____$1){
var and__4120__auto____$2 = (end_pos_line <= end_line);
if(and__4120__auto____$2){
var and__4120__auto____$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos_line,line))?(greater_than.cljs$core$IFn$_invoke$arity$2 ? greater_than.cljs$core$IFn$_invoke$arity$2(pos_column,column) : greater_than.call(null,pos_column,column)):true);
if(cljs.core.truth_(and__4120__auto____$3)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_pos_line,end_line)){
return (less_than.cljs$core$IFn$_invoke$arity$2 ? less_than.cljs$core$IFn$_invoke$arity$2(end_pos_column,end_column) : less_than.call(null,end_pos_column,end_column));
} else {
return true;
}
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
}
} else {
return and__4120__auto__;
}
});
;})(vec__48616,greater_than,less_than))
});
lark.tree.range.within_QMARK_ = lark.tree.range.contains_fn(true);
lark.tree.range.within_inner_QMARK_ = lark.tree.range.contains_fn(false);
lark.tree.range.edge_ranges = (function lark$tree$range$edge_ranges(node){
if(cljs.core.truth_(lark.tree.node.has_edges_QMARK_(node))){
var vec__48656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.edges,cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48656,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48656,(1),null);
var G__48661 = cljs.core.PersistentVector.EMPTY;
var G__48661__$1 = (cljs.core.truth_(left)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48661,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end-column","end-column",1425389514),(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(node) + cljs.core.count(left))], null)):G__48661);
if(cljs.core.truth_(right)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48661__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-line","end-line",1837326455).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"column","column",2078222095),(new cljs.core.Keyword(null,"end-column","end-column",1425389514).cljs$core$IFn$_invoke$arity$1(node) - cljs.core.count(right)),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"end-column","end-column",1425389514).cljs$core$IFn$_invoke$arity$1(node)], null));
} else {
return G__48661__$1;
}
} else {
return null;
}
});
lark.tree.range.inner_range = (function lark$tree$range$inner_range(p__48670){
var map__48671 = p__48670;
var map__48671__$1 = (((((!((map__48671 == null))))?(((((map__48671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48671):map__48671);
var node = map__48671__$1;
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.edges,tag);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__48695 = temp__5718__auto__;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48695,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48695,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),(column + cljs.core.count(left)),new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),(end_column - cljs.core.count(right))], null);
} else {
return node;
}
});
lark.tree.range.__GT_end = (function lark$tree$range$__GT_end(p__48703){
var map__48704 = p__48703;
var map__48704__$1 = (((((!((map__48704 == null))))?(((((map__48704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48704):map__48704);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48704__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48704__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),column], null);
});
lark.tree.range.end = (function lark$tree$range$end(p__48782){
var map__48784 = p__48782;
var map__48784__$1 = (((((!((map__48784 == null))))?(((((map__48784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48784):map__48784);
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48784__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48784__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),end_line,new cljs.core.Keyword(null,"column","column",2078222095),end_column], null);
});
/**
 * Returns position map for left or right boundary of the node.
 */
lark.tree.range.bounds = (function lark$tree$range$bounds(var_args){
var G__48793 = arguments.length;
switch (G__48793) {
case 1:
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1 = (function (node){
return cljs.core.select_keys(node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], null));
});

lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2 = (function (node,side){
var G__48794 = side;
var G__48794__$1 = (((G__48794 instanceof cljs.core.Keyword))?G__48794.fqn:null);
switch (G__48794__$1) {
case "left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"line","line",212345235)),new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"column","column",2078222095))], null);

break;
case "right":
var temp__5718__auto__ = new cljs.core.Keyword(null,"end-line","end-line",1837326455).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5718__auto__)){
var end_line = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),end_line,new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514).cljs$core$IFn$_invoke$arity$1(node)], null);
} else {
return lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"left","left",-399115937));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48794__$1)].join('')));

}
});

lark.tree.range.bounds.cljs$lang$maxFixedArity = 2;

lark.tree.range.range_EQ_ = (function lark$tree$range$range_EQ_(p1,p2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(p1),lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$1(p2));
});
lark.tree.range.pos_EQ_ = (function lark$tree$range$pos_EQ_(p1,p2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"left","left",-399115937)),lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"left","left",-399115937)));
});
lark.tree.range.empty_range_QMARK_ = (function lark$tree$range$empty_range_QMARK_(node){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end-line","end-line",1837326455).cljs$core$IFn$_invoke$arity$1(node))) || ((new cljs.core.Keyword(null,"end-line","end-line",1837326455).cljs$core$IFn$_invoke$arity$1(node) == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end-column","end-column",1425389514).cljs$core$IFn$_invoke$arity$1(node))) || ((new cljs.core.Keyword(null,"end-column","end-column",1425389514).cljs$core$IFn$_invoke$arity$1(node) == null)))));
});
/**
 * Get range(s) to highlight for a node. For a collection, only highlight brackets.
 */
lark.tree.range.node_highlights = (function lark$tree$range$node_highlights(node){
if(cljs.core.truth_((lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.node.may_contain_children_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : lark.tree.node.may_contain_children_QMARK_.call(null,node)))){
if(cljs.core.truth_(cljs.core.second(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.edges,cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"tag","tag",-1290361223)))))){
return lark.tree.range.edge_ranges(node);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(lark.tree.range.edge_ranges(cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))),(0),cljs.core.merge,lark.tree.range.bounds.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"left","left",-399115937)));
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
}
});
