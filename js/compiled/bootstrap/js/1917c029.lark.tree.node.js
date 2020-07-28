goog.provide('lark.tree.node');
/**
 * Returns true if node is a comment - either `;` or `#_` but not `(comment ...)`
 */
lark.tree.node.comment_QMARK_ = (function lark$tree$node$comment_QMARK_(node){
return ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comment","comment",532206069),node.tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"uneval","uneval",1932037707),node.tag)));
});
lark.tree.node.whitespace_QMARK_ = (function lark$tree$node$whitespace_QMARK_(node){
return lark.tree.reader.whitespace_tag_QMARK_(node.tag);
});
lark.tree.node.newline_QMARK_ = (function lark$tree$node$newline_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"newline","newline",1790071323),node.tag);
});
/**
 * Returns false if node does not have corresponding s-expression (eg. comments and whitespace)
 */
lark.tree.node.sexp_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.node.comment_QMARK_),cljs.core.complement(lark.tree.node.whitespace_QMARK_));
lark.tree.node.terminal_node_QMARK_ = (function lark$tree$node$terminal_node_QMARK_(node){
var tag = node.tag;
return (((!(((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"list","list",765357683),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"vector","vector",1902966158),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"map","map",1371690461),tag)))))) && (((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"space","space",348133475),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"keyword","keyword",811389747),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"token","token",-1211463215),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"string","string",-1989541586),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"number","number",1570378438),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"newline","newline",1790071323),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comma","comma",1699024745),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comment","comment",532206069),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comment-block","comment-block",-402237087),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"unmatched-delimiter","unmatched-delimiter",-1070290018),tag)))));
});
lark.tree.node.may_contain_children_QMARK_ = cljs.core.complement(lark.tree.node.terminal_node_QMARK_);
/**
 * Returns true if node has 'edges' that mark boundaries. See unwrap/edges for details.
 */
lark.tree.node.has_edges_QMARK_ = (function lark$tree$node$has_edges_QMARK_(node){
if(cljs.core.truth_(node)){
return cljs.core.contains_QMARK_(lark.tree.reader.edges,node.tag);
} else {
return null;
}
});
lark.tree.node.edges = (function lark$tree$node$edges(node){
if(cljs.core.truth_(node)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.edges,node.tag);
} else {
return null;
}
});
/**
 * Given AST, returns zipper
 */
lark.tree.node.ast_zip = (function lark$tree$node$ast_zip(ast){
return fast_zip.core.zipper(lark.tree.node.may_contain_children_QMARK_,(function (p__48468){
var map__48469 = p__48468;
var map__48469__$1 = (((((!((map__48469 == null))))?(((((map__48469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48469):map__48469);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.empty_QMARK_(children)){
return null;
} else {
return children;
}
}),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),children);
}),ast);
});
