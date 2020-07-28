goog.provide('lark.tree.parse');
goog.require('cljs.core');
goog.require('lark.tree.reader');
goog.require('lark.tree.emit');
goog.require('lark.tree.node');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.commons');
goog.require('lark.tree.util');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.core.enable_console_print_BANG_();
lark.tree.parse.read_to_char_boundary = (function lark$tree$parse$read_to_char_boundary(reader){
var c = cljs.tools.reader.reader_types.read_char(reader);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((c === "\\"))?"":lark.tree.reader.read_until(reader,((function (c){
return (function (p1__65547_SHARP_){
return ((lark.tree.reader.whitespace_QMARK_(p1__65547_SHARP_)) || (lark.tree.reader.boundary_QMARK_(p1__65547_SHARP_)));
});})(c))
)))].join('');
});
lark.tree.parse.dispatch = (function lark$tree$parse$dispatch(c){
if((c == null)){
return new cljs.core.Keyword(null,"eof","eof",-489063237);
} else {
if((c === cljs.core.first(lark.tree.reader._STAR_delimiter_STAR_))){
return new cljs.core.Keyword(null,"matched-delimiter","matched-delimiter",885053676);
} else {
if(((("}" === c)) || (("]" === c)) || ((")" === c)))){
return new cljs.core.Keyword(null,"unmatched-delimiter","unmatched-delimiter",-1070290018);
} else {
if((c === ",")){
return new cljs.core.Keyword(null,"comma","comma",1699024745);
} else {
if((((c === " ")) || ((c === lark.tree.reader.non_breaking_space)) || ((c === "\t")))){
return new cljs.core.Keyword(null,"space","space",348133475);
} else {
if(lark.tree.reader.newline_QMARK_(c)){
return new cljs.core.Keyword(null,"newline","newline",1790071323);
} else {
if((c === "^")){
return new cljs.core.Keyword(null,"meta","meta",1499536964);
} else {
if((c === "#")){
return new cljs.core.Keyword(null,"sharp","sharp",-83698408);
} else {
if((c === "(")){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if((c === "[")){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if((c === "{")){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((c === "~")){
return new cljs.core.Keyword(null,"unquote","unquote",1649741032);
} else {
if((c === "'")){
return new cljs.core.Keyword(null,"quote","quote",-262615245);
} else {
if((c === "`")){
return new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847);
} else {
if((c === ";")){
return new cljs.core.Keyword(null,"comment","comment",532206069);
} else {
if((c === "@")){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((c === "\"")){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if((c === ":")){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
return new cljs.core.Keyword(null,"token","token",-1211463215);

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
});
lark.tree.parse.printable_only_QMARK_ = (function lark$tree$parse$printable_only_QMARK_(n){
if(cljs.core.truth_(n)){
var or__4131__auto__ = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"space","space",348133475),n.tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comma","comma",1699024745),n.tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"newline","newline",1790071323),n.tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comment","comment",532206069),n.tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comment-block","comment-block",-402237087),n.tag)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(n.options,new cljs.core.Keyword(null,"invalid?","invalid?",789397235));
}
} else {
return null;
}
});
lark.tree.parse.take_printable_children = (function lark$tree$parse$take_printable_children(reader,tag,n){
return lark.tree.reader.conj_children(lark.tree.reader.EmptyNode(tag),reader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-fn","read-fn",-899140577),lark.tree.parse.parse_next,new cljs.core.Keyword(null,"count-pred","count-pred",-66887001),cljs.core.complement(lark.tree.parse.printable_only_QMARK_),new cljs.core.Keyword(null,"take-n","take-n",1228862335),n], null));
});
lark.tree.parse.macro_char_QMARK_ = (function lark$tree$parse$macro_char_QMARK_(ch){
var G__65574 = ch;
switch (G__65574) {
case "\"":
case ":":
case ";":
case "^":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
case "#":
return true;

break;
default:
return null;

}
});
lark.tree.parse.macro_terminating_QMARK_ = (function lark$tree$parse$macro_terminating_QMARK_(ch){
var and__4120__auto__ = (!(("#" === ch)));
if(and__4120__auto__){
var and__4120__auto____$1 = (!(("'" === ch)));
if(and__4120__auto____$1){
var and__4120__auto____$2 = (!((":" === ch)));
if(and__4120__auto____$2){
return lark.tree.parse.macro_char_QMARK_(ch);
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
lark.tree.parse.read_token_STAR_ = (function lark$tree$parse$read_token_STAR_(rdr,initch){
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread(rdr,initch);

return initch;
})()
;
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = lark.tree.reader.whitespace_QMARK_(ch);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = lark.tree.parse.macro_terminating_QMARK_(ch);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (ch == null);
}
}
})())){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__65628 = (function (){var G__65578 = sb;
G__65578.append(cljs.tools.reader.reader_types.read_char(rdr));

return G__65578;
})();
var G__65629 = cljs.tools.reader.reader_types.peek_char(rdr);
sb = G__65628;
ch = G__65629;
continue;
}
break;
}
});
lark.tree.parse.parse_keyword = (function lark$tree$parse$parse_keyword(reader){
var ch = cljs.tools.reader.reader_types.read_char(reader);
var resolve_ns_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.tools.reader.reader_types.peek_char(reader));
var _ = ((resolve_ns_QMARK_)?cljs.tools.reader.reader_types.read_char(reader):null);
var token = lark.tree.parse.read_token_STAR_(reader,ch);
var expr = (function (){try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(token);
}catch (e65579){if((e65579 instanceof Error)){
var e = e65579;
return new cljs.core.Keyword("lark.tree.parse","error","lark.tree.parse/error",691475963);
} else {
throw e65579;

}
}})();
return lark.tree.reader.__GT_Node(new cljs.core.Keyword(null,"keyword","keyword",811389747),((resolve_ns_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolve-ns?","resolve-ns?",-1612633144),resolve_ns_QMARK_], null):null),null,expr,null);
});
/**
 * Parse a single token.
 */
lark.tree.parse.parse_token = (function lark$tree$parse$parse_token(reader){
var ch = cljs.tools.reader.reader_types.read_char(reader);
var token = (((ch === "\\"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),lark.tree.parse.read_to_char_boundary(reader)].join(''):lark.tree.parse.read_token_STAR_(reader,ch));
lark.tree.reader.ValueNode(new cljs.core.Keyword(null,"token","token",-1211463215),token);

if(cljs.core.truth_((function (){var G__65580 = cljs.core.first(token);
var G__65580__$1 = (((G__65580 == null))?null:parseInt(G__65580));
if((G__65580__$1 == null)){
return null;
} else {
return isNaN(G__65580__$1);
}
})())){
return lark.tree.reader.ValueNode(new cljs.core.Keyword(null,"token","token",-1211463215),token);
} else {
return lark.tree.reader.ValueNode(new cljs.core.Keyword(null,"number","number",1570378438),token);
}
});
lark.tree.parse.take_n_children = (function lark$tree$parse$take_n_children(var_args){
var G__65583 = arguments.length;
switch (G__65583) {
case 4:
return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$4 = (function (reader,tag,prefix,n){
return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5(reader,tag,prefix,n,null);
});

lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5 = (function (reader,tag,prefix,n,first_printable_child_tag){
var vec__65584 = lark.tree.reader.current_pos(reader);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65584,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65584,(1),null);
var offset = lark.tree.reader.current_offset(reader);
var vec__65587 = lark.tree.reader.take_children(reader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-fn","read-fn",-899140577),lark.tree.parse.parse_next,new cljs.core.Keyword(null,"count-pred","count-pred",-66887001),cljs.core.complement(lark.tree.parse.printable_only_QMARK_),new cljs.core.Keyword(null,"take-n","take-n",1228862335),n], null));
var valid_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65587,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65587,(1),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65587,(2),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = valid_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (((first_printable_child_tag == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(lark.tree.parse.printable_only_QMARK_),children)).tag,first_printable_child_tag)));
} else {
return and__4120__auto__;
}
})())){
var G__65590 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lark.tree.reader.EmptyNode(tag),new cljs.core.Keyword(null,"children","children",-940561982),children);
if(cljs.core.seq(after)){
return lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$2(G__65590,after);
} else {
return G__65590;
}
} else {
return lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$3(tag,prefix,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,(col - cljs.core.count(prefix)),line,col,(offset - cljs.core.count(prefix)),offset], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(children,after));
}
});

lark.tree.parse.take_n_children.cljs$lang$maxFixedArity = 5;

lark.tree.parse.parse_sharp = (function lark$tree$parse$parse_sharp(reader){
cljs.tools.reader.reader_types.read_char(reader);

var G__65591 = cljs.tools.reader.reader_types.peek_char(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__65591)){
return lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),"#");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__65591)){
return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5(reader,new cljs.core.Keyword(null,"set","set",304602554),"#",(1),new cljs.core.Keyword(null,"map","map",1371690461));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__65591)){
return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5(reader,new cljs.core.Keyword(null,"fn","fn",-1175266204),"#",(1),new cljs.core.Keyword(null,"list","list",765357683));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__65591)){
return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5(reader,new cljs.core.Keyword(null,"regex","regex",939488856),"#",(1),new cljs.core.Keyword(null,"string","string",-1989541586));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__65591)){
cljs.tools.reader.reader_types.read_char(reader);

return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$4(reader,new cljs.core.Keyword(null,"reader-meta","reader-meta",-429160846),"#^",(2));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__65591)){
cljs.tools.reader.reader_types.read_char(reader);

return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5(reader,new cljs.core.Keyword(null,"var","var",-769682797),"#'",(1),new cljs.core.Keyword(null,"token","token",-1211463215));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__65591)){
cljs.tools.reader.reader_types.read_char(reader);

return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$4(reader,new cljs.core.Keyword(null,"uneval","uneval",1932037707),"#_",(1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__65591)){
cljs.tools.reader.reader_types.read_char(reader);

var ch = cljs.tools.reader.reader_types.peek_char(reader);
var temp__5718__auto__ = (function (){var G__65592 = ch;
switch (G__65592) {
case "(":
return new cljs.core.Keyword(null,"reader-conditional","reader-conditional",636404282);

break;
case "@":
cljs.tools.reader.reader_types.read_char(reader);

return new cljs.core.Keyword(null,"reader-conditional-splice","reader-conditional-splice",244273088);

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var tag = temp__5718__auto__;
return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$5(reader,tag,["#?",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(ch,"@",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["@"], 0)))?null:null)].join(''),(1),new cljs.core.Keyword(null,"list","list",765357683));
} else {
return lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),"#?");
}
} else {
return lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),"#");

}
}
}
}
}
}
}
}
});
lark.tree.parse.parse_unquote = (function lark$tree$parse$parse_unquote(reader){
cljs.tools.reader.reader_types.read_char(reader);

var c = cljs.tools.reader.reader_types.peek_char(reader);
if((c === "@")){
cljs.tools.reader.reader_types.read_char(reader);

return lark.tree.parse.take_printable_children(reader,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),(1));
} else {
return lark.tree.parse.take_printable_children(reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1));
}
});
lark.tree.parse.parse_next_STAR_ = (function lark$tree$parse$parse_next_STAR_(reader){
var c = cljs.tools.reader.reader_types.peek_char(reader);
var tag = lark.tree.parse.dispatch(c);
var G__65599 = tag;
var G__65599__$1 = (((G__65599 instanceof cljs.core.Keyword))?G__65599.fqn:null);
switch (G__65599__$1) {
case "token":
return lark.tree.parse.parse_token(reader);

break;
case "keyword":
return lark.tree.parse.parse_keyword(reader);

break;
case "sharp":
return lark.tree.parse.parse_sharp(reader);

break;
case "comment":
lark.tree.reader.ignore(reader);

return lark.tree.reader.ValueNode(tag,lark.tree.reader.read_until(reader,((function (G__65599,G__65599__$1,c,tag){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__65603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null);
return (fexpr__65603.cljs$core$IFn$_invoke$arity$1 ? fexpr__65603.cljs$core$IFn$_invoke$arity$1(x) : fexpr__65603.call(null,x));
}
});})(G__65599,G__65599__$1,c,tag))
));

break;
case "deref":
case "quote":
case "syntax-quote":
cljs.tools.reader.reader_types.read_char(reader);

return lark.tree.parse.take_n_children.cljs$core$IFn$_invoke$arity$4(reader,tag,c,(1));

break;
case "unquote":
return lark.tree.parse.parse_unquote(reader);

break;
case "newline":
lark.tree.reader.ignore(reader);

return lark.tree.reader.ValueNode(tag,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.tree.reader.read_while(reader,lark.tree.reader.space_QMARK_))].join(''));

break;
case "comma":
return lark.tree.reader.ValueNode(tag,lark.tree.reader.read_while(reader,((function (G__65599,G__65599__$1,c,tag){
return (function (p1__65594_SHARP_){
return (p1__65594_SHARP_ === c);
});})(G__65599,G__65599__$1,c,tag))
));

break;
case "space":
return lark.tree.reader.ValueNode(tag,lark.tree.reader.read_while(reader,lark.tree.reader.space_QMARK_));

break;
case "list":
case "vector":
case "map":
return lark.tree.reader.NodeWithChildren(reader,lark.tree.parse.parse_next,tag,cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.emit.bracket_match,c));

break;
case "matched-delimiter":
return lark.tree.reader.ValueNode(tag,cljs.tools.reader.reader_types.read_char(reader));

break;
case "unmatched-delimiter":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lark.tree.reader.ValueNode(tag,cljs.tools.reader.reader_types.read_char(reader)),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"backward","backward",554036364),new cljs.core.Keyword(null,"expects","expects",-2087881265),cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.emit.bracket_match,c)], null));

break;
case "eof":
return null;

break;
case "meta":
cljs.tools.reader.reader_types.read_char(reader);

return lark.tree.parse.take_printable_children(reader,tag,(2));

break;
case "string":
return lark.tree.reader.read_string_data(lark.tree.reader.EmptyNode(tag),reader);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65599__$1)].join('')));

}
});
lark.tree.parse.parse_next = (function lark$tree$parse$parse_next(reader){
return lark.tree.reader.read_with_position(reader,lark.tree.parse.parse_next_STAR_);
});
/**
 * Create reader for strings.
 */
lark.tree.parse.indexing_reader = (function lark$tree$parse$indexing_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$2(s,(10)));
});
lark.tree.parse.ast = (function lark$tree$parse$ast(s){
var _STAR_invalid_nodes_STAR__orig_val__65607 = lark.tree.reader._STAR_invalid_nodes_STAR_;
var _STAR_invalid_nodes_STAR__temp_val__65608 = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
lark.tree.reader._STAR_invalid_nodes_STAR_ = _STAR_invalid_nodes_STAR__temp_val__65608;

try{var reader = lark.tree.parse.indexing_reader(s);
var base = lark.tree.reader.__GT_Node(new cljs.core.Keyword(null,"base","base",185279322),null,null,null,null);
var base__$1 = lark.tree.reader.conj_children(base,reader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-fn","read-fn",-899140577),lark.tree.parse.parse_next], null));
var base__$2 = lark.tree.reader.assoc_range_BANG_(base__$1,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),reader.line,reader.column,(0),s.length], null));
var vec__65615 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (base,base__$1,base__$2,reader,_STAR_invalid_nodes_STAR__orig_val__65607,_STAR_invalid_nodes_STAR__temp_val__65608){
return (function (p__65618,p__65619){
var vec__65620 = p__65618;
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65620,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65620,(1),null);
var map__65623 = p__65619;
var map__65623__$1 = (((((!((map__65623 == null))))?(((((map__65623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65623):map__65623);
var node = map__65623__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var end_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"end-offset","end-offset",-1290057545));
var node_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,offset,end_offset);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(source),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_str)].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(values,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"source","source",-433931539),node_str))], null);
});})(base,base__$1,base__$2,reader,_STAR_invalid_nodes_STAR__orig_val__65607,_STAR_invalid_nodes_STAR__temp_val__65608))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentVector.EMPTY], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(base__$2,new cljs.core.Keyword(null,"children","children",-940561982)));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65615,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65615,(1),null);
var base__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base__$2,new cljs.core.Keyword(null,"source","source",-433931539),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"invalid-nodes","invalid-nodes",595179254),lark.tree.util.guard__GT_(cljs.core.deref(lark.tree.reader._STAR_invalid_nodes_STAR_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.empty_QMARK_))], 0));
return base__$3;
}finally {lark.tree.reader._STAR_invalid_nodes_STAR_ = _STAR_invalid_nodes_STAR__orig_val__65607;
}});

//# sourceMappingURL=lark.tree.parse.js.map
