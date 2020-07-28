goog.provide('lark.tree.nav');
goog.require('cljs.core');
goog.require('fast_zip.core');
goog.require('lark.tree.node');
goog.require('lark.tree.reader');
goog.require('lark.tree.range');
lark.tree.nav.prefix_parents = cljs.core.reduce_kv((function (parents,tag,p__65046){
var vec__65047 = p__65046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65047,(0),null);
var right_bracket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65047,(1),null);
if((right_bracket == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,tag);
} else {
return parents;
}
}),cljs.core.PersistentHashSet.EMPTY,lark.tree.reader.edges);
lark.tree.nav.include_prefix_parents = (function lark$tree$nav$include_prefix_parents(loc){
if(cljs.core.truth_(loc)){
if(cljs.core.contains_QMARK_(lark.tree.nav.prefix_parents,(function (){var G__65068 = fast_zip.core.up(loc);
var G__65068__$1 = (((G__65068 == null))?null:G__65068.node);
if((G__65068__$1 == null)){
return null;
} else {
return G__65068__$1.tag;
}
})())){
var G__65073 = fast_zip.core.up(loc);
return (lark.tree.nav.include_prefix_parents.cljs$core$IFn$_invoke$arity$1 ? lark.tree.nav.include_prefix_parents.cljs$core$IFn$_invoke$arity$1(G__65073) : lark.tree.nav.include_prefix_parents.call(null,G__65073));
} else {
return loc;
}
} else {
return null;
}
});
lark.tree.nav.iteratev_while = (function lark$tree$nav$iteratev_while(f,start_loc){
if(cljs.core.truth_(start_loc)){
var loc = start_loc;
var out = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_loc], null);
while(true){
var temp__5718__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5718__auto__)){
var next_loc = temp__5718__auto__;
var G__65179 = next_loc;
var G__65180 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,next_loc);
loc = G__65179;
out = G__65180;
continue;
} else {
return out;
}
break;
}
} else {
return null;
}
});
lark.tree.nav.child_locs = (function lark$tree$nav$child_locs(loc){
return lark.tree.nav.iteratev_while(fast_zip.core.right,fast_zip.core.down(loc));
});
lark.tree.nav.right_locs = (function lark$tree$nav$right_locs(loc){
return lark.tree.nav.iteratev_while(fast_zip.core.right,lark.tree.nav.include_prefix_parents(fast_zip.core.right(loc)));
});
lark.tree.nav.left_locs = (function lark$tree$nav$left_locs(loc){
return lark.tree.nav.iteratev_while(fast_zip.core.left,lark.tree.nav.include_prefix_parents(fast_zip.core.left(loc)));
});
lark.tree.nav.right_up = (function lark$tree$nav$right_up(loc){
var or__4131__auto__ = fast_zip.core.right(loc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__65101 = fast_zip.core.up(loc);
if((G__65101 == null)){
return null;
} else {
return lark.tree.nav.include_prefix_parents(G__65101);
}
}
});
lark.tree.nav.left_up = (function lark$tree$nav$left_up(loc){
var or__4131__auto__ = fast_zip.core.left(loc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__65103 = fast_zip.core.up(loc);
if((G__65103 == null)){
return null;
} else {
return lark.tree.nav.include_prefix_parents(G__65103);
}
}
});
lark.tree.nav.before_QMARK_ = (function lark$tree$nav$before_QMARK_(pos1,pos2){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos1,new cljs.core.Keyword(null,"line","line",212345235)) <= cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos2,new cljs.core.Keyword(null,"line","line",212345235)))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos1,new cljs.core.Keyword(null,"column","column",2078222095)) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos2,new cljs.core.Keyword(null,"column","column",2078222095)))));
});
lark.tree.nav.after_QMARK_ = (function lark$tree$nav$after_QMARK_(pos1,pos2){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos1,new cljs.core.Keyword(null,"line","line",212345235)) >= cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos2,new cljs.core.Keyword(null,"line","line",212345235)))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos1,new cljs.core.Keyword(null,"column","column",2078222095)) > cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos2,new cljs.core.Keyword(null,"column","column",2078222095)))));
});
/**
 * Navigate to a position within a zipper (returns loc) or ast (returns node).
 */
lark.tree.nav.navigate = (function lark$tree$nav$navigate(ast,pos){
if(cljs.core.truth_(pos)){
} else {
throw (new Error("Assert failed: pos"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(ast),fast_zip.core.ZipperLocation)){
var loc = ast;
var node = loc.node;
var children = node.children;
var found = (cljs.core.truth_((lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(node,pos) : lark.tree.range.within_QMARK_.call(null,node,pos)))?((((lark.tree.node.terminal_node_QMARK_(node)) || (cljs.core.empty_QMARK_(children))))?loc:(function (){var or__4131__auto__ = (function (){var G__65129 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (loc,node,children){
return (function (p1__65118_SHARP_){
return (lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__65118_SHARP_,pos) : lark.tree.range.within_QMARK_.call(null,p1__65118_SHARP_,pos));
});})(loc,node,children))
,lark.tree.nav.child_locs(loc));
var G__65129__$1 = (((G__65129 == null))?null:cljs.core.first(G__65129));
if((G__65129__$1 == null)){
return null;
} else {
return (lark.tree.nav.navigate.cljs$core$IFn$_invoke$arity$2 ? lark.tree.nav.navigate.cljs$core$IFn$_invoke$arity$2(G__65129__$1,pos) : lark.tree.nav.navigate.call(null,G__65129__$1,pos));
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loc;
}
})()):null);
if((function (){var found_node = (function (){var G__65139 = found;
if((G__65139 == null)){
return null;
} else {
return G__65139.node;
}
})();
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(found_node,new cljs.core.Keyword(null,"end-line","end-line",1837326455)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(found_node,new cljs.core.Keyword(null,"end-column","end-column",1425389514)))));
})()){
var or__4131__auto__ = fast_zip.core.right(found);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return found;
}
} else {
return found;
}
} else {
if(cljs.core.truth_((lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(ast,pos) : lark.tree.range.within_QMARK_.call(null,ast,pos)))){
if(((lark.tree.node.terminal_node_QMARK_(ast)) || (cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"children","children",-940561982)))))){
return ast;
} else {
var or__4131__auto__ = (function (){var G__65152 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65119_SHARP_){
return (lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__65119_SHARP_,pos) : lark.tree.range.within_QMARK_.call(null,p1__65119_SHARP_,pos));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"children","children",-940561982)));
var G__65152__$1 = (((G__65152 == null))?null:cljs.core.first(G__65152));
if((G__65152__$1 == null)){
return null;
} else {
return (lark.tree.nav.navigate.cljs$core$IFn$_invoke$arity$2 ? lark.tree.nav.navigate.cljs$core$IFn$_invoke$arity$2(G__65152__$1,pos) : lark.tree.nav.navigate.call(null,G__65152__$1,pos));
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"tag","tag",-1290361223)))){
return null;
} else {
return ast;
}
}
}
} else {
return null;
}
}
});
/**
 * Select sexp under the mouse. Whitespace defers to parent.
 */
lark.tree.nav.mouse_eval_region = (function lark$tree$nav$mouse_eval_region(loc){
var or__4131__auto__ = (function (){var and__4120__auto__ = (function (){var G__65157 = loc.node;
return (lark.tree.node.sexp_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.node.sexp_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65157) : lark.tree.node.sexp_QMARK_.call(null,G__65157));
})();
if(cljs.core.truth_(and__4120__auto__)){
return loc;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fast_zip.core.up(loc);
}
});
lark.tree.nav.top_loc = (function lark$tree$nav$top_loc(loc){
var loc__$1 = loc;
while(true){
if(cljs.core.not(loc__$1)){
return loc__$1;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(loc__$1.node))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),(function (){var G__65163 = fast_zip.core.up(loc__$1);
var G__65163__$1 = (((G__65163 == null))?null:G__65163.node);
if((G__65163__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__65163__$1);
}
})())))){
return loc__$1;
} else {
var G__65202 = fast_zip.core.up(loc__$1);
loc__$1 = G__65202;
continue;
}
}
break;
}
});
lark.tree.nav.closest = (function lark$tree$nav$closest(pred,loc){
while(true){
if(cljs.core.not(loc)){
return null;
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(loc) : pred.call(null,loc)))){
return loc;
} else {
var G__65203 = pred;
var G__65204 = fast_zip.core.up(loc);
pred = G__65203;
loc = G__65204;
continue;
}
}
break;
}
});
lark.tree.nav.cursor_space_loc = (function lark$tree$nav$cursor_space_loc(zipper,pos){
var temp__5720__auto__ = lark.tree.nav.navigate(zipper,pos);
if(cljs.core.truth_(temp__5720__auto__)){
var loc = temp__5720__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (loc,temp__5720__auto__){
return (function (p1__65164_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__65164_SHARP_.node.tag,new cljs.core.Keyword(null,"space","space",348133475));
});})(loc,temp__5720__auto__))
,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,fast_zip.core.left(loc)], null))));
} else {
return null;
}
});
lark.tree.nav.path_node_pred = (function lark$tree$nav$path_node_pred(p__65167){
var map__65170 = p__65167;
var map__65170__$1 = (((((!((map__65170 == null))))?(((((map__65170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65170):map__65170);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65170__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || ((!(lark.tree.reader.whitespace_tag_QMARK_(tag)))));
});
lark.tree.nav.get_loc = (function lark$tree$nav$get_loc(zipper,path){
var segments = path;
var loc = zipper;
while(true){
if(((cljs.core.not(loc)) || (cljs.core.empty_QMARK_(segments)))){
return loc;
} else {
var G__65213 = cljs.core.rest(segments);
var G__65214 = cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.first(segments),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lark.tree.nav.path_node_pred,fast_zip.core.node),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(fast_zip.core.right,fast_zip.core.down(loc))))));
segments = G__65213;
loc = G__65214;
continue;
}
break;
}
});
lark.tree.nav.get_path = (function lark$tree$nav$get_path(loc){
var loc__$1 = loc;
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not(loc__$1)){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),out);
} else {
var G__65216 = fast_zip.core.up(loc__$1);
var G__65217 = cljs.core.cons(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(lark.tree.nav.path_node_pred,fast_zip.core.lefts(loc__$1))),out);
loc__$1 = G__65216;
out = G__65217;
continue;
}
break;
}
});
lark.tree.nav.find_next = (function lark$tree$nav$find_next(ast,pred){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(pred,fast_zip.core.node),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__65177_SHARP_){
var and__4120__auto__ = p1__65177_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return (!(fast_zip.core.end_QMARK_(p1__65177_SHARP_)));
} else {
return and__4120__auto__;
}
}),cljs.core.iterate(fast_zip.core.next,ast))));
});

//# sourceMappingURL=lark.tree.nav.js.map
