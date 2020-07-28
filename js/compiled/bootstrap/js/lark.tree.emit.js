goog.provide('lark.tree.emit');
goog.require('cljs.core');
goog.require('fast_zip.core');
goog.require('lark.tree.fn');
goog.require('clojure.string');
goog.require('lark.tree.format');
goog.require('lark.tree.reader');
goog.require('lark.tree.node');
goog.require('lark.tree.nav');
goog.require('lark.tree.util');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.tools.reader');
goog.require('goog.string.StringBuffer');
lark.tree.emit._STAR_ns_STAR_ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("lark.tree.user");
lark.tree.emit._STAR_features_STAR_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null);
lark.tree.emit._STAR_print_selections_STAR_ = false;
lark.tree.emit.edges = lark.tree.reader.edges;
lark.tree.emit.bracket_match = new cljs.core.PersistentArrayMap(null, 6, ["(",")","{","}","[","]",")","(","}","{","]","["], null);
lark.tree.emit.tag_for_print_only_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"comment-block","comment-block",-402237087),null,new cljs.core.Keyword(null,"space","space",348133475),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null,new cljs.core.Keyword(null,"uneval","uneval",1932037707),null,new cljs.core.Keyword(null,"comment","comment",532206069),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null);
lark.tree.emit.wrap_children = (function lark$tree$emit$wrap_children(start_indent,loc,children){
var tag = loc.node.tag;
var vec__65432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.edges,tag);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65432,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65432,(1),null);
if(lark.tree.format._STAR_pretty_STAR_){
var left_edge_width = (function (){var or__4131__auto__ = (function (){var G__65438 = left;
if((G__65438 == null)){
return null;
} else {
return G__65438.length;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var body_indent = (left_edge_width + lark.tree.format.body_indent_STAR_.cljs$core$IFn$_invoke$arity$3(start_indent,loc,(0)));
var topline_indent = (left_edge_width + start_indent);
var out = (cljs.core.truth_(left)?(new goog.string.StringBuffer(left)):(new goog.string.StringBuffer(left)));
var current_indent = topline_indent;
var remaining = children;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return (function (){var G__65448 = out;
if(cljs.core.truth_(right)){
return G__65448.append(right);
} else {
return G__65448;
}
})().toString();
} else {
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remaining,(0));
var tag__$1 = child.node.tag;
if(cljs.core.keyword_identical_QMARK_(tag__$1,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__65531 = out.append("\n",lark.tree.format.spaces(body_indent));
var G__65532 = body_indent;
var G__65533 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(remaining,(1));
out = G__65531;
current_indent = G__65532;
remaining = G__65533;
continue;
} else {
var child_str = (lark.tree.emit.string.cljs$core$IFn$_invoke$arity$2 ? lark.tree.emit.string.cljs$core$IFn$_invoke$arity$2(current_indent,child) : lark.tree.emit.string.call(null,current_indent,child));
var child_multiline_QMARK_ = (function (){var G__65449 = child_str;
if((G__65449 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__65449,"\n");
}
})();
var G__65536 = (function (){var G__65450 = out;
if(cljs.core.truth_(child_str)){
return G__65450.append(child_str);
} else {
return G__65450;
}
})();
var G__65537 = (cljs.core.truth_(child_multiline_QMARK_)?(function (){var last_line = cljs.core.re_find(/\n.*?$/,child_str);
return (last_line.length - (1));
})():(current_indent + (function (){var G__65451 = child_str;
if((G__65451 == null)){
return null;
} else {
return G__65451.length;
}
})()));
var G__65538 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(remaining,(1));
out = G__65536;
current_indent = G__65537;
remaining = G__65538;
continue;
}
}
break;
}
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.tree.emit.string,start_indent),children))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)].join('');
}
});
/**
 * Emit ClojureScript string from a magic-tree AST
 */
lark.tree.emit.string = (function lark$tree$emit$string(var_args){
var G__65458 = arguments.length;
switch (G__65458) {
case 2:
return lark.tree.emit.string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.tree.emit.string.cljs$core$IFn$_invoke$arity$2 = (function (indent,loc){
if((!((loc == null)))){
var node = loc.node;
var children = lark.tree.nav.child_locs(loc);
var tag = node.tag;
var value = node.value;
var options = node.options;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),tag)){
return null;
} else {
var G__65461 = tag;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__65461)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-conditional-splice","reader-conditional-splice",244273088),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comment-block","comment-block",-402237087),G__65461)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__65461,node,children,tag,value,options){
return (function (p1__65454_SHARP_){
if(cljs.core.truth_(/^\s*$/.test(p1__65454_SHARP_))){
return p1__65454_SHARP_;
} else {
return [";; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65454_SHARP_)].join('');
}
});})(G__65461,node,children,tag,value,options))
),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1("\n")),clojure.string.split_lines(value)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space","space",348133475),G__65461)){
if(lark.tree.format._STAR_pretty_STAR_){
if(cljs.core.truth_((function (){var G__65463 = lark.tree.reader._STAR_active_cursor_node_STAR_;
if((G__65463 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__65463,node);
}
})())){
return value;
} else {
if(lark.tree.format.emit_space_QMARK_(loc)){
return " ";
} else {
return null;
}
}
} else {
return value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"meta","meta",1499536964),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),G__65461)){
return value;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote","unquote",1649741032),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),G__65461)){
return value;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comma","comma",1699024745),G__65461)){
return value;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uneval","uneval",1932037707),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cursor","cursor",1011937484),G__65461)){
if((!((lark.tree.emit._STAR_print_selections_STAR_ == null)))){
return "|";
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),G__65461)){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\""].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),G__65461)){
return value;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-meta","reader-meta",-429160846),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"list","list",765357683),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var","var",-769682797),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quote","quote",-262615245),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),G__65461)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolve-ns?","resolve-ns?",-1612633144).cljs$core$IFn$_invoke$arity$1(options))){
return ["::",(function (){var G__65476 = cljs.core.namespace(value);
if((G__65476 == null)){
return null;
} else {
return [G__65476,"/"].join('');
}
})(),cljs.core.name(value)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref","deref",-145586795),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comment","comment",532206069),G__65461)){
return [";",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regex","regex",939488856),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set","set",304602554),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-conditional","reader-conditional",636404282),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),G__65461)){
return lark.tree.emit.wrap_children((0),loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"newline","newline",1790071323),G__65461)){
if(lark.tree.format._STAR_pretty_STAR_){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.tree.format.spaces(indent))].join('');
} else {
return value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selection","selection",975998651),G__65461)){
if((!((lark.tree.emit._STAR_print_selections_STAR_ == null)))){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),G__65461)){
return lark.tree.emit.wrap_children(indent,loc,children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unmatched-delimiter","unmatched-delimiter",-1070290018),G__65461)){
return value;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65461)].join('')));

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
}
}
}
}
} else {
return null;
}
});

lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1 = (function (loc){
return lark.tree.emit.string.cljs$core$IFn$_invoke$arity$2((0),(function (){var G__65480 = loc;
if(cljs.core.truth_((function (){var and__4120__auto__ = loc;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(loc),fast_zip.core.ZipperLocation);
} else {
return and__4120__auto__;
}
})())){
return lark.tree.node.ast_zip(G__65480);
} else {
return G__65480;
}
})());
});

lark.tree.emit.string.cljs$lang$maxFixedArity = 2;

lark.tree.emit.splice_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-conditional-splice","reader-conditional-splice",244273088),null], null), null);
lark.tree.emit.as_code = (function lark$tree$emit$as_code(forms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__65481){
var map__65482 = p__65481;
var map__65482__$1 = (((((!((map__65482 == null))))?(((((map__65482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65482):map__65482);
var item = map__65482__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.truth_((lark.tree.emit.tag_for_print_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.emit.tag_for_print_only_QMARK_.cljs$core$IFn$_invoke$arity$1(tag) : lark.tree.emit.tag_for_print_only_QMARK_.call(null,tag)))){
return out;
} else {
var value = (lark.tree.emit.sexp.cljs$core$IFn$_invoke$arity$1 ? lark.tree.emit.sexp.cljs$core$IFn$_invoke$arity$1(item) : lark.tree.emit.sexp.call(null,item));
if((value == null)){
return out;
} else {
var fexpr__65487 = ((cljs.core.contains_QMARK_(lark.tree.emit.splice_QMARK_,tag))?cljs.core.into:cljs.core.conj);
return (fexpr__65487.cljs$core$IFn$_invoke$arity$2 ? fexpr__65487.cljs$core$IFn$_invoke$arity$2(out,value) : fexpr__65487.call(null,out,value));
}
}
}),cljs.core.PersistentVector.EMPTY,forms);
});
lark.tree.emit.sexp = (function lark$tree$emit$sexp(p__65489){
var map__65491 = p__65489;
var map__65491__$1 = (((((!((map__65491 == null))))?(((((map__65491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65491):map__65491);
var node = map__65491__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(node)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),tag)){
throw (new Error(node));
} else {
var G__65494 = tag;
var G__65494__$1 = (((G__65494 instanceof cljs.core.Keyword))?G__65494.fqn:null);
switch (G__65494__$1) {
case "base":
return lark.tree.emit.as_code(children);

break;
case "space":
case "newline":
case "comma":
case "cursor":
return null;

break;
case "selection":
var G__65499 = cljs.core.seq(children);
if((G__65499 == null)){
return null;
} else {
return lark.tree.emit.as_code(G__65499);
}

break;
case "string":
return value;

break;
case "unmatched-delimiter":
return new cljs.core.Keyword("lark.tree.emit","INVALID_TOKEN","lark.tree.emit/INVALID_TOKEN",-752966909);

break;
case "deref":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lark.tree.emit.as_code(children))], null)));

break;
case "token":
case "number":
try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(value);
}catch (e65501){if((e65501 instanceof Error)){
var e = e65501;
return new cljs.core.Keyword("lark.tree.emit","INVALID_TOKEN","lark.tree.emit/INVALID_TOKEN",-752966909);
} else {
throw e65501;

}
}
break;
case "vector":
return cljs.core.vec(lark.tree.emit.as_code(children));

break;
case "list":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,lark.tree.emit.as_code(children));

break;
case "fn":
return lark.tree.fn.fn_walk(cljs.core.first(lark.tree.emit.as_code(children)));

break;
case "map":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,lark.tree.emit.as_code(children));

break;
case "set":
return cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(lark.tree.emit.as_code(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))));

break;
case "var":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lark.tree.emit.as_code(children))], null)));

break;
case "quote":
case "syntax-quote":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",1377916282,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lark.tree.emit.as_code(children))], null)));

break;
case "unquote":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lark.tree.emit.as_code(children))], null)));

break;
case "unquote-splicing":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lark.tree.emit.as_code(children))], null)));

break;
case "reader-macro":
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(node));

break;
case "reader-conditional":
case "reader-conditional-splice":
var vec__65507 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__65494,G__65494__$1,map__65491,map__65491__$1,node,tag,value,children,options){
return (function (p__65510){
var vec__65511 = p__65510;
var map__65514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65511,(0),null);
var map__65514__$1 = (((((!((map__65514 == null))))?(((((map__65514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65514):map__65514);
var feature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65514__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65511,(1),null);
return cljs.core.contains_QMARK_(lark.tree.emit._STAR_features_STAR_,feature);
});})(G__65494,G__65494__$1,map__65491,map__65491__$1,node,tag,value,children,options))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (G__65494,G__65494__$1,map__65491,map__65491__$1,node,tag,value,children,options){
return (function (p1__65488_SHARP_){
var G__65516 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__65488_SHARP_);
return (lark.tree.emit.tag_for_print_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lark.tree.emit.tag_for_print_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65516) : lark.tree.emit.tag_for_print_only_QMARK_.call(null,G__65516));
});})(G__65494,G__65494__$1,map__65491,map__65491__$1,node,tag,value,children,options))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))));
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65507,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65507,(1),null);
if(cljs.core.truth_(feature)){
return (lark.tree.emit.sexp.cljs$core$IFn$_invoke$arity$1 ? lark.tree.emit.sexp.cljs$core$IFn$_invoke$arity$1(form) : lark.tree.emit.sexp.call(null,form));
} else {
return null;
}

break;
case "meta":
case "reader-meta":
var vec__65518 = lark.tree.emit.as_code(children);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65518,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65518,(1),null);
var G__65522 = data;
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.with_meta(G__65522,((cljs.core.map_QMARK_(m))?m:cljs.core.PersistentArrayMap.createAsIfByAssoc([m,true])));
} else {
return G__65522;
}

break;
case "regex":
return cljs.core.re_pattern(cljs.core.first(lark.tree.emit.as_code(children)));

break;
case "keyword":
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolve-ns?","resolve-ns?",-1612633144).cljs$core$IFn$_invoke$arity$1(options))){
var resolved_ns = (function (){var temp__5718__auto__ = cljs.core.namespace(value);
if(cljs.core.truth_(temp__5718__auto__)){
var the_ns = temp__5718__auto__;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.tools.reader._STAR_alias_map_STAR_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(the_ns),the_ns));
} else {
return lark.tree.emit._STAR_ns_STAR_;
}
})();
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(resolved_ns,cljs.core.name(value));
} else {
return value;
}

break;
case "comment":
case "comment-block":
case "uneval":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65494__$1)].join('')));

}
}
} else {
return null;
}
});

//# sourceMappingURL=lark.tree.emit.js.map
