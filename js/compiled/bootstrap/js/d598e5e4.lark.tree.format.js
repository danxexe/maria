goog.provide('lark.tree.format');
lark.tree.format.SPACES = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((200),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" ")));
lark.tree.format.spaces = (function lark$tree$format$spaces(n){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(lark.tree.format.SPACES,(0),n);
});
lark.tree.format._STAR_pretty_STAR_ = false;
lark.tree.format.emit_space_QMARK_ = (function lark$tree$format$emit_space_QMARK_(loc){
return (((!((fast_zip.core.left(loc) == null)))) && ((!((fast_zip.core.right(loc) == null)))) && ((!(lark.tree.node.newline_QMARK_((function (){var G__48853 = fast_zip.core.left(loc);
if((G__48853 == null)){
return null;
} else {
return fast_zip.core.node(G__48853);
}
})())))));
});
lark.tree.format.indentation_for = (function lark$tree$format$indentation_for(x){
var G__48855 = x;
switch (G__48855) {
case "bound-fn":
case "extend":
case "extend-protocol":
case "extend-type":
case "fn":
case "ns":
case "reify":
return new cljs.core.Keyword(null,"indent","indent",-148200125);

break;
case "cond":
case "do":
case "finally":
case "try":
case "with-out-str":
case "go":
return (0);

break;
case "assoc":
case "apply":
case "binding":
case "case":
case "definterface":
case "defstruct":
case "deftype":
case "doseq":
case "dotimes":
case "doto":
case "for":
case "if":
case "if-let":
case "if-not":
case "if-some":
case "let":
case "letfn":
case "locking":
case "loop":
case "struct-map":
case "when":
case "when-first":
case "when-let":
case "when-not":
case "when-some":
case "while":
case "with-bindings":
case "with-local-vars":
case "with-open":
case "with-redefs":
case "with-redefs-fn":
case "go-loop":
case "are":
case "deftest":
case "testing":
return (1);

break;
case "catch":
case "condp":
case "proxy":
return (2);

break;
default:
if(clojure.string.starts_with_QMARK_(x,"def")){
return new cljs.core.Keyword(null,"indent","indent",-148200125);
} else {
if(cljs.core.truth_(cljs.core.re_find(/with|when|if/,x))){
return (1);
} else {
return (0);

}
}

}
});
lark.tree.format.threading_node_QMARK_ = (function lark$tree$format$threading_node_QMARK_(node){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.tag,new cljs.core.Keyword(null,"list","list",765357683));
if(and__4120__auto__){
var G__48870 = node;
var G__48870__$1 = (((G__48870 == null))?null:G__48870.children);
if((G__48870__$1 == null)){
return null;
} else {
return cljs.core.first(G__48870__$1);
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var operator = temp__5720__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),operator.tag)) && (clojure.string.ends_with_QMARK_(operator.value,"->")));
} else {
return null;
}
});
lark.tree.format.node_length = (function lark$tree$format$node_length(p__48886){
var map__48892 = p__48886;
var map__48892__$1 = (((((!((map__48892 == null))))?(((((map__48892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48892):map__48892);
var node = map__48892__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__48902 = tag;
var G__48902__$1 = (((G__48902 instanceof cljs.core.Keyword))?G__48902.fqn:null);
switch (G__48902__$1) {
case "space":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,lark.tree.reader._STAR_active_cursor_node_STAR_)){
return cljs.core.count(value);
} else {
return (1);
}

break;
case "tab":
return (1);

break;
case "cursor":
case "selection":
return (0);

break;
default:
return (end_column - column);

}
});
lark.tree.format.whitespace_tag_QMARK_ = (function lark$tree$format$whitespace_tag_QMARK_(t){
return ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"space","space",348133475),t)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"cursor","cursor",1011937484),t)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651),t)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"tab","tab",-559583621),t)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"newline","newline",1790071323),t)));
});
lark.tree.format.butlast_vec = (function lark$tree$format$butlast_vec(v){
var G__48930 = v;
if((!(cljs.core.empty_QMARK_(v)))){
return cljs.core.pop(G__48930);
} else {
return G__48930;
}
});
lark.tree.format.body_indent_STAR_ = (function lark$tree$format$body_indent_STAR_(var_args){
var G__48934 = arguments.length;
switch (G__48934) {
case 2:
return lark.tree.format.body_indent_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lark.tree.format.body_indent_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.tree.format.body_indent_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (indent_level,node){
return lark.tree.format.body_indent_STAR_.cljs$core$IFn$_invoke$arity$3(indent_level,node,null);
});

lark.tree.format.body_indent_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (indent_level,loc,child){

var node = loc.node;
var tag = node.tag;
var children = node.children;
var operator = cljs.core.first(children);
var threading_QMARK_ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"list","list",765357683));
if(and__4120__auto__){
var G__48963 = fast_zip.core.up(loc);
var G__48963__$1 = (((G__48963 == null))?null:G__48963.node);
if((G__48963__$1 == null)){
return null;
} else {
return lark.tree.format.threading_node_QMARK_(G__48963__$1);
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"list","list",765357683),tag);
if(and__4120__auto__){
var and__4120__auto____$1 = operator;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),operator.tag);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var indent_type = lark.tree.format.indentation_for(cljs.core.name(operator.value));
var G__48975 = indent_type;
var G__48975__$1 = (((G__48975 instanceof cljs.core.Keyword))?G__48975.fqn:null);
switch (G__48975__$1) {
case "indent":
return (indent_level + (1));

break;
default:
var indent_offset = (function (){var G__48982 = indent_type;
if(cljs.core.truth_(threading_QMARK_)){
return (G__48982 - (1));
} else {
return G__48982;
}
})();
var split_after = ((2) + indent_offset);
var vec__48979 = lark.tree.reader.split_after_n(split_after,lark.tree.node.sexp_QMARK_,((function (indent_offset,split_after,G__48975,G__48975__$1,indent_type,node,tag,children,operator,threading_QMARK_){
return (function (node__$1){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"newline","newline",1790071323),node__$1.tag)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node__$1,child)));
});})(indent_offset,split_after,G__48975,G__48975__$1,indent_type,node,tag,children,operator,threading_QMARK_))
,(function (){var G__48996 = children;
if(lark.tree.node.whitespace_QMARK_(operator)){
return lark.tree.format.butlast_vec(G__48996);
} else {
return G__48996;
}
})());
var exact_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(0),null);
var taken = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(2),null);
var num_passed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(3),null);
return (indent_level + (cljs.core.truth_(exact_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lark.tree.format.node_length,cljs.core.pop(taken))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_passed,(1))) && (cljs.core.not(threading_QMARK_))))?(0):(1)
)));

}
} else {
return indent_level;
}
});

lark.tree.format.body_indent_STAR_.cljs$lang$maxFixedArity = 3;

lark.tree.format.indentation_parent_QMARK_ = (function lark$tree$format$indentation_parent_QMARK_(node){
return ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"vector","vector",1902966158),node.tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"list","list",765357683),node.tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"map","map",1371690461),node.tag)));
});
lark.tree.format.body_indent_string = (function lark$tree$format$body_indent_string(pos,child_loc){
var temp__5718__auto__ = cljs.core.first(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__49026_SHARP_){
var G__49028 = fast_zip.core.node(p1__49026_SHARP_);
var G__49029 = pos;
return (lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2 ? lark.tree.range.within_inner_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49028,G__49029) : lark.tree.range.within_inner_QMARK_.call(null,G__49028,G__49029));
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lark.tree.format.indentation_parent_QMARK_,fast_zip.core.node))),cljs.core.iterate(fast_zip.core.up,child_loc)));
if(cljs.core.truth_(temp__5718__auto__)){
var coll_loc = temp__5718__auto__;
var coll_node = fast_zip.core.node(coll_loc);
var child = fast_zip.core.node(child_loc);
var left_edge_width = cljs.core.count(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.edges,coll_node.tag)));
var body_indent = (left_edge_width + lark.tree.format.body_indent_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(coll_node),coll_loc,child));
return lark.tree.format.spaces(body_indent);
} else {
return (0);
}
});
/**
 * Returns true if space should be left inbetween characters c1 and c2.
 */
lark.tree.format.pad_chars_QMARK_ = (function lark$tree$format$pad_chars_QMARK_(c1,c2){
if(((lark.tree.reader.close_bracket_QMARK_(c2)) || (lark.tree.reader.open_bracket_QMARK_(c1)) || (lark.tree.reader.prefix_boundary_QMARK_(c1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",c1)))){
return false;
} else {
return true;
}
});
