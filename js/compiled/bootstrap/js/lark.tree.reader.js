goog.provide('lark.tree.reader');
goog.require('cljs.core');
goog.require('lark.tree.util');
goog.require('cljs.tools.reader.reader_types');
goog.require('goog.string.StringBuffer');
lark.tree.reader._STAR_invalid_nodes_STAR_ = null;
lark.tree.reader._STAR_active_cursor_node_STAR_ = null;
lark.tree.reader._STAR_delimiter_STAR_ = cljs.core.List.EMPTY;
lark.tree.reader.peek = cljs.tools.reader.reader_types.peek_char;
lark.tree.reader.current_offset = (function lark$tree$reader$current_offset(indexing_pushback_reader){
var pushback_reader = indexing_pushback_reader.rdr;
var indexing_reader = pushback_reader.rdr;
var pushback = (pushback_reader.buf_len - pushback_reader.buf_pos);
return (indexing_reader.s_pos - pushback);
});
lark.tree.reader.edges = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"reader-conditional-splice","reader-conditional-splice",244273088),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"raw-meta","raw-meta",1071151917),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"reader-meta","reader-meta",-429160846),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"reader-conditional","reader-conditional",636404282),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"map","map",1371690461)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#?@"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~@"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#_"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"","\""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#^"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#'"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2039","\u203A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null)]);
lark.tree.reader.whitespace_tag_QMARK_ = (function lark$tree$reader$whitespace_tag_QMARK_(tag){
return ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"space","space",348133475),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"newline","newline",1790071323),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"tab","tab",-559583621),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"comma","comma",1699024745),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"cursor","cursor",1011937484),tag)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651),tag)));
});
lark.tree.reader.close_bracket_QMARK_ = (function lark$tree$reader$close_bracket_QMARK_(ch){
return (((")" === ch)) || (("]" === ch)) || (("}" === ch)));
});
lark.tree.reader.open_bracket_QMARK_ = (function lark$tree$reader$open_bracket_QMARK_(ch){
return ((("(" === ch)) || (("[" === ch)) || (("{" === ch)));
});
/**
 * Throw reader exception, including line/column.
 */
lark.tree.reader.throw_reader = (function lark$tree$reader$throw_reader(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63364 = arguments.length;
var i__4731__auto___63365 = (0);
while(true){
if((i__4731__auto___63365 < len__4730__auto___63364)){
args__4736__auto__.push((arguments[i__4731__auto___63365]));

var G__63366 = (i__4731__auto___63365 + (1));
i__4731__auto___63365 = G__63366;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lark.tree.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lark.tree.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,fmt,data){
var c = reader.column;
var l = reader.line;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join('')));
});

lark.tree.reader.throw_reader.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lark.tree.reader.throw_reader.cljs$lang$applyTo = (function (seq63057){
var G__63058 = cljs.core.first(seq63057);
var seq63057__$1 = cljs.core.next(seq63057);
var G__63059 = cljs.core.first(seq63057__$1);
var seq63057__$2 = cljs.core.next(seq63057__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63058,G__63059,seq63057__$2);
});

lark.tree.reader.buf = (new goog.string.StringBuffer());
/**
 * Read while the chars fulfill the given condition. Does not consume the unmatching char.
 */
lark.tree.reader.read_while = (function lark$tree$reader$read_while(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63369 = arguments.length;
var i__4731__auto___63370 = (0);
while(true){
if((i__4731__auto___63370 < len__4730__auto___63369)){
args__4736__auto__.push((arguments[i__4731__auto___63370]));

var G__63373 = (i__4731__auto___63370 + (1));
i__4731__auto___63370 = G__63373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lark.tree.reader.read_while.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lark.tree.reader.read_while.cljs$core$IFn$_invoke$arity$variadic = (function (reader,p_QMARK_,p__63070){
var vec__63071 = p__63070;
var eof_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63071,(0),null);
var eof_QMARK___$1 = (((eof_QMARK_ == null))?cljs.core.not((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null))):eof_QMARK_);
lark.tree.reader.buf.clear();

while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char(reader);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(c) : p_QMARK_.call(null,c))){
lark.tree.reader.buf.append(c);

continue;
} else {
cljs.tools.reader.reader_types.unread(reader,c);

return lark.tree.reader.buf.toString();
}
} else {
if(eof_QMARK___$1){
return lark.tree.reader.buf.toString();
} else {
return lark.tree.reader.throw_reader(reader,"Unexpected EOF.");
}
}
break;
}
});

lark.tree.reader.read_while.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lark.tree.reader.read_while.cljs$lang$applyTo = (function (seq63066){
var G__63067 = cljs.core.first(seq63066);
var seq63066__$1 = cljs.core.next(seq63066);
var G__63068 = cljs.core.first(seq63066__$1);
var seq63066__$2 = cljs.core.next(seq63066__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63067,G__63068,seq63066__$2);
});

/**
 * Read until a char fulfills the given condition. Does not consume the matching char.
 */
lark.tree.reader.read_until = (function lark$tree$reader$read_until(reader,p_QMARK_){
return lark.tree.reader.read_while.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.complement(p_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null))], 0));
});
/**
 * Read next char.
 */
lark.tree.reader.next = (function lark$tree$reader$next(reader){
return cljs.tools.reader.reader_types.read_char(reader);
});
/**
 * Ignore the next character.
 */
lark.tree.reader.ignore = (function lark$tree$reader$ignore(reader){
return cljs.tools.reader.reader_types.read_char(reader);
});
/**
 * Unreads a char. Puts the char back on the reader.
 */
lark.tree.reader.unread = (function lark$tree$reader$unread(reader,ch){
return cljs.tools.reader.reader_types.unread(reader,ch);
});
/**
 * Returns 0-indexed vector of [line, column] for current reader position.
 */
lark.tree.reader.position = (function lark$tree$reader$position(reader){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(reader.line - (1)),(reader.column - (1))], null);
});

/**
 * @interface
 */
lark.tree.reader.IRange = function(){};

lark.tree.reader.assoc_range_BANG_ = (function lark$tree$reader$assoc_range_BANG_(this$,position){
if((((!((this$ == null)))) && ((!((this$.lark$tree$reader$IRange$assoc_range_BANG_$arity$2 == null)))))){
return this$.lark$tree$reader$IRange$assoc_range_BANG_$arity$2(this$,position);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.tree.reader.assoc_range_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,position) : m__4434__auto__.call(null,this$,position));
} else {
var m__4431__auto__ = (lark.tree.reader.assoc_range_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,position) : m__4431__auto__.call(null,this$,position));
} else {
throw cljs.core.missing_protocol("IRange.assoc-range!",this$);
}
}
}
});


/**
 * @interface
 */
lark.tree.reader.IAppend = function(){};

lark.tree.reader.append = (function lark$tree$reader$append(this$,x){
if((((!((this$ == null)))) && ((!((this$.lark$tree$reader$IAppend$append$arity$2 == null)))))){
return this$.lark$tree$reader$IAppend$append$arity$2(this$,x);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lark.tree.reader.append[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4434__auto__.call(null,this$,x));
} else {
var m__4431__auto__ = (lark.tree.reader.append["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4431__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("IAppend.append",this$);
}
}
}
});


/**
* @constructor
 * @implements {lark.tree.reader.IAppend}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.IAssociative}
 * @implements {lark.tree.reader.IRange}
 * @implements {cljs.core.ILookup}
*/
lark.tree.reader.Node = (function (tag,options,range,value,children){
this.tag = tag;
this.options = options;
this.range = range;
this.value = value;
this.children = children;
this.cljs$lang$protocol_mask$partition1$ = 2064;
this.cljs$lang$protocol_mask$partition0$ = 2149581576;
});
lark.tree.reader.Node.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,k,val){
var self__ = this;
var this$__$1 = this;
var G__63098_63389 = k;
var G__63098_63390__$1 = (((G__63098_63389 instanceof cljs.core.Keyword))?G__63098_63389.fqn:null);
switch (G__63098_63390__$1) {
case "tag":
self__.tag = val;

break;
case "value":
self__.value = val;

break;
case "children":
self__.children = val;

break;
case "range":
self__.range = val;

break;
case "options":
self__.options = val;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63098_63390__$1)].join('')));

}

return this$__$1;
});

lark.tree.reader.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,key,null);
});

lark.tree.reader.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (function (){var G__63111 = key;
var G__63111__$1 = (((G__63111 instanceof cljs.core.Keyword))?G__63111.fqn:null);
switch (G__63111__$1) {
case "tag":
return self__.tag;

break;
case "value":
return self__.value;

break;
case "children":
return self__.children;

break;
case "range":
return self__.range;

break;
case "line":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(0));

break;
case "column":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(1));

break;
case "end-line":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(2));

break;
case "end-column":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(3));

break;
case "offset":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(4));

break;
case "end-offset":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(5));

break;
case "options":
return self__.options;

break;
case "start":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(0)),new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(1))], null);

break;
case "end":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(2)),new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.range,(3))], null);

break;
default:
return null;

}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.options,key,not_found);
}
});

lark.tree.reader.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
var options__$1 = (function (){var G__63118 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(self__.options,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invalid-nodes","invalid-nodes",595179254),new cljs.core.Keyword(null,"cursor","cursor",1011937484)], 0));
if(cljs.core.truth_(self__.range)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63118,new cljs.core.Keyword(null,"range","range",1639692286),self__.range);
} else {
return G__63118;
}
})();
return cljs.core._write(writer,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4131__auto__ = self__.children;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.seq(options__$1);
}
})())?(function (){var G__63124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.tag], null);
var G__63124__$1 = (cljs.core.truth_(options__$1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63124,options__$1):G__63124);
var G__63124__$2 = (cljs.core.truth_(self__.value)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63124__$1,self__.value):G__63124__$1);
if(cljs.core.truth_(self__.children)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__63124__$2,self__.children);
} else {
return G__63124__$2;
}
})():self__.tag)));
});

lark.tree.reader.Node.prototype.lark$tree$reader$IRange$ = cljs.core.PROTOCOL_SENTINEL;

lark.tree.reader.Node.prototype.lark$tree$reader$IRange$assoc_range_BANG_$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
self__.range = position;

return this$__$1;
});

lark.tree.reader.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (((!((other == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tag,other.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.children,other.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.range,other.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.options,other.options)));
});

lark.tree.reader.Node.prototype.lark$tree$reader$IAppend$ = cljs.core.PROTOCOL_SENTINEL;

lark.tree.reader.Node.prototype.lark$tree$reader$IAppend$append$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new lark.tree.reader.Node(self__.tag,self__.options,self__.range,self__.value,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.children,o)));
});

lark.tree.reader.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var G__63168 = key;
var G__63168__$1 = (((G__63168 instanceof cljs.core.Keyword))?G__63168.fqn:null);
switch (G__63168__$1) {
case "tag":
return true;

break;
case "line":
case "column":
case "end-line":
case "end-column":
return (!((cljs.core.meta == null)));

break;
case "value":
return (!((self__.value == null)));

break;
case "children":
return (!((self__.children == null)));

break;
case "range":
return (!((self__.range == null)));

break;
default:
return cljs.core.contains_QMARK_(self__.options,key);

}
});

lark.tree.reader.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,VAL){
var self__ = this;
var this$__$1 = this;
var G__63186 = k;
var G__63186__$1 = (((G__63186 instanceof cljs.core.Keyword))?G__63186.fqn:null);
switch (G__63186__$1) {
case "tag":
return (new lark.tree.reader.Node(VAL,self__.options,self__.range,self__.value,self__.children));

break;
case "value":
return (new lark.tree.reader.Node(self__.tag,self__.options,self__.range,VAL,self__.children));

break;
case "children":
return (new lark.tree.reader.Node(self__.tag,self__.options,self__.range,self__.value,VAL));

break;
case "range":
return (new lark.tree.reader.Node(self__.tag,self__.options,VAL,self__.value,self__.children));

break;
default:
return (new lark.tree.reader.Node(self__.tag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.options,k,VAL),self__.range,self__.value,self__.children));

}
});

lark.tree.reader.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return coll__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

lark.tree.reader.Node.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
var l = (x__$1.cljs$core$ILookup$_lookup$arity$2(null,new cljs.core.Keyword(null,"line","line",212345235)) - cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword(null,"line","line",212345235)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return l;
} else {
return (x__$1.cljs$core$ILookup$_lookup$arity$2(null,new cljs.core.Keyword(null,"column","column",2078222095)) - cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword(null,"column","column",2078222095)));
}
});

lark.tree.reader.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

lark.tree.reader.Node.cljs$lang$type = true;

lark.tree.reader.Node.cljs$lang$ctorStr = "lark.tree.reader/Node";

lark.tree.reader.Node.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"lark.tree.reader/Node");
});

/**
 * Positional factory function for lark.tree.reader/Node.
 */
lark.tree.reader.__GT_Node = (function lark$tree$reader$__GT_Node(tag,options,range,value,children){
return (new lark.tree.reader.Node(tag,options,range,value,children));
});

lark.tree.reader.delimiter_error = (function lark$tree$reader$delimiter_error(tag,reader){
var vec__63195 = lark.tree.reader.position(reader);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63195,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63195,(1),null);
return (new lark.tree.reader.Node(new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.first(lark.tree.reader._STAR_delimiter_STAR_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,col,line,(col + (1))], null),null,null));
});
lark.tree.reader.current_pos = (function lark$tree$reader$current_pos(reader){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(reader.line - (1)),(reader.column - (1))], null);
});
/**
 * Use the given function to read value, then attach row/col metadata.
 */
lark.tree.reader.read_with_position = (function lark$tree$reader$read_with_position(reader,read_fn){
var start_line = (reader.line - (1));
var start_column = (reader.column - (1));
var start_offset = lark.tree.reader.current_offset(reader);
var temp__5720__auto__ = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return lark.tree.reader.assoc_range_BANG_(node,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_line,start_column,(reader.line - (1)),(reader.column - (1)),start_offset,lark.tree.reader.current_offset(reader)], null));
} else {
return null;
}
});
lark.tree.reader.report_invalid_BANG_ = (function lark$tree$reader$report_invalid_BANG_(node){
var node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"invalid?","invalid?",789397235),true);
var G__63206_63415 = lark.tree.reader._STAR_invalid_nodes_STAR_;
if((G__63206_63415 == null)){
} else {
cljs.core._vreset_BANG_(G__63206_63415,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(G__63206_63415),node__$1));
}

return node__$1;
});
lark.tree.reader.InvalidToken_BANG_ = (function lark$tree$reader$InvalidToken_BANG_(var_args){
var G__63213 = arguments.length;
switch (G__63213) {
case 2:
return lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (tag,value){
return lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$3(tag,value,null);
});

lark.tree.reader.InvalidToken_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (tag,value,position){
return lark.tree.reader.report_invalid_BANG_(lark.tree.reader.__GT_Node(new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid?","invalid?",789397235),true,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null)], null),position,value,null));
});

lark.tree.reader.InvalidToken_BANG_.cljs$lang$maxFixedArity = 3;

lark.tree.reader.Splice = (function lark$tree$reader$Splice(var_args){
var G__63223 = arguments.length;
switch (G__63223) {
case 1:
return lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$1 = (function (children){
return lark.tree.reader.__GT_Node(new cljs.core.Keyword(null,"splice","splice",449588165),null,null,null,children);
});

lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$2 = (function (node,children){
return lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),children));
});

lark.tree.reader.Splice.cljs$lang$maxFixedArity = 2;

lark.tree.reader.CollectionNode = (function lark$tree$reader$CollectionNode(tag,nodes){
return lark.tree.reader.__GT_Node(tag,null,null,null,nodes);
});
lark.tree.reader.ValueNode = (function lark$tree$reader$ValueNode(tag,value){
return lark.tree.reader.__GT_Node(tag,null,null,value,null);
});
lark.tree.reader.EmptyNode = (function lark$tree$reader$EmptyNode(tag){
return lark.tree.reader.__GT_Node(tag,null,null,null,null);
});
/**
 * Splits after `n` values which pass `pred`.
 * 
 *   Returns vector of the form
 *   [<took-n-values?> <taken-values> <remaining-values>]
 */
lark.tree.reader.split_after_n = (function lark$tree$reader$split_after_n(n,pred,stop_QMARK_,coll){
var remaining = coll;
var i = (0);
var taken = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,taken,remaining,i], null);
} else {
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,taken,remaining,i], null);
} else {
var next_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remaining,(0));
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((stop_QMARK_ == null)));
if(and__4120__auto__){
return (stop_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_QMARK_.cljs$core$IFn$_invoke$arity$1(next_item) : stop_QMARK_.call(null,next_item));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,taken,remaining,i], null);
} else {
var count_it_QMARK_ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(next_item) : pred.call(null,next_item));
var G__63422 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(remaining,(1));
var G__63423 = (function (){var G__63233 = i;
if(cljs.core.truth_(count_it_QMARK_)){
return (G__63233 + (1));
} else {
return G__63233;
}
})();
var G__63424 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taken,next_item);
remaining = G__63422;
i = G__63423;
taken = G__63424;
continue;
}

}
}
break;
}
});
lark.tree.reader.take_children = (function lark$tree$reader$take_children(reader,p__63237){
var map__63238 = p__63237;
var map__63238__$1 = (((((!((map__63238 == null))))?(((((map__63238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63238):map__63238);
var take_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63238__$1,new cljs.core.Keyword(null,"take-n","take-n",1228862335));
var read_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63238__$1,new cljs.core.Keyword(null,"read-fn","read-fn",-899140577));
var count_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63238__$1,new cljs.core.Keyword(null,"count-pred","count-pred",-66887001));
var reader__$1 = reader;
var i = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if((i > (10000))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"take-children","take-children",1371878528),out], 0));

console.error((new Error("Infinite loop?")));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,out,null], null);
} else {
if((((!((take_n == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,take_n)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,out,null], null);
} else {
var map__63253 = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader__$1) : read_fn.call(null,reader__$1));
var map__63253__$1 = (((((!((map__63253 == null))))?(((((map__63253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63253):map__63253);
var next_node = map__63253__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var next_i = (((((!((take_n == null)))) && ((!((count_pred == null))))))?(function (){var G__63262 = i;
if(cljs.core.truth_((count_pred.cljs$core$IFn$_invoke$arity$1 ? count_pred.cljs$core$IFn$_invoke$arity$1(next_node) : count_pred.call(null,next_node)))){
return (G__63262 + (1));
} else {
return G__63262;
}
})():(i + (1)));
var G__63263 = tag;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unmatched-delimiter","unmatched-delimiter",-1070290018),G__63263)){
if(cljs.core.contains_QMARK_(cljs.core.set(lark.tree.reader._STAR_delimiter_STAR_),value)){
lark.tree.reader.unread(reader__$1,value);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,out,null], null);
} else {
var G__63425 = reader__$1;
var G__63426 = next_i;
var G__63427 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,lark.tree.reader.report_invalid_BANG_(next_node));
reader__$1 = G__63425;
i = G__63426;
out = G__63427;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"splice","splice",449588165),G__63263)){
if(cljs.core.truth_(take_n)){
return lark.tree.reader.split_after_n(take_n,count_pred,null,children);
} else {
var G__63428 = reader__$1;
var G__63429 = next_i;
var G__63430 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,children);
reader__$1 = G__63428;
i = G__63429;
out = G__63430;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eof","eof",-489063237),G__63263)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,out,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__63263)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,out,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matched-delimiter","matched-delimiter",885053676),G__63263)){
if(cljs.core.truth_((function (){var and__4120__auto__ = take_n;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(take_n,i);
} else {
return and__4120__auto__;
}
})())){
lark.tree.reader.unread(reader__$1,value);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,out,null], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,out,null], null);
}
} else {
var G__63431 = reader__$1;
var G__63432 = next_i;
var G__63433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,next_node);
reader__$1 = G__63431;
i = G__63432;
out = G__63433;
continue;

}
}
}
}
}
}
}
break;
}
});
lark.tree.reader.conj_children = (function lark$tree$reader$conj_children(coll_node,reader,p__63278){
var map__63282 = p__63278;
var map__63282__$1 = (((((!((map__63282 == null))))?(((((map__63282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63282):map__63282);
var take_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63282__$1,new cljs.core.Keyword(null,"take-n","take-n",1228862335));
var read_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63282__$1,new cljs.core.Keyword(null,"read-fn","read-fn",-899140577));
var count_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63282__$1,new cljs.core.Keyword(null,"count-pred","count-pred",-66887001));
var vec__63284 = lark.tree.reader.current_pos(reader);
var inner_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63284,(0),null);
var inner_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63284,(1),null);
var inner_offset = lark.tree.reader.current_offset(reader);
var coll_tag = coll_node.tag;
var invalid_exit = ((function (vec__63284,inner_line,inner_col,inner_offset,coll_tag,map__63282,map__63282__$1,take_n,read_fn,count_pred){
return (function (out){
var G__63287 = coll_tag;
var G__63287__$1 = (((G__63287 instanceof cljs.core.Keyword))?G__63287.fqn:null);
switch (G__63287__$1) {
case "base":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll_node,new cljs.core.Keyword(null,"children","children",-940561982),out);

break;
default:
return lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$2((function (){var vec__63291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lark.tree.reader.edges,coll_tag);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63291,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63291,(1),null);
var width = cljs.core.count(left);
return lark.tree.reader.report_invalid_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(lark.tree.reader.EmptyNode(new cljs.core.Keyword(null,"unmatched-delimiter","unmatched-delimiter",-1070290018)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),coll_tag,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.Keyword(null,"expects","expects",-2087881265),right], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_line,(inner_col - width),inner_line,inner_col,(inner_offset - width),inner_offset], null),new cljs.core.Keyword(null,"value","value",305978217),left], 0)));
})(),out);

}
});})(vec__63284,inner_line,inner_col,inner_offset,coll_tag,map__63282,map__63282__$1,take_n,read_fn,count_pred))
;
var reader__$1 = reader;
var i = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if((i > (10000))){
console.error((new Error("Infinite loop?")));

return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(coll_node,new cljs.core.Keyword(null,"children","children",-940561982),out);
} else {
if((((!((take_n == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,take_n)))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(coll_node,new cljs.core.Keyword(null,"children","children",-940561982),out);
} else {
var map__63322 = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader__$1) : read_fn.call(null,reader__$1));
var map__63322__$1 = (((((!((map__63322 == null))))?(((((map__63322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63322):map__63322);
var next_node = map__63322__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63322__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63322__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var next_i = (((((!((take_n == null)))) && ((!((count_pred == null))))))?(function (){var G__63327 = i;
if(cljs.core.truth_((count_pred.cljs$core$IFn$_invoke$arity$1 ? count_pred.cljs$core$IFn$_invoke$arity$1(next_node) : count_pred.call(null,next_node)))){
return (G__63327 + (1));
} else {
return G__63327;
}
})():(i + (1)));
var G__63331 = tag;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unmatched-delimiter","unmatched-delimiter",-1070290018),G__63331)){
if(cljs.core.contains_QMARK_(cljs.core.set(lark.tree.reader._STAR_delimiter_STAR_),value)){
lark.tree.reader.unread(reader__$1,value);

return invalid_exit(out);
} else {
var G__63450 = reader__$1;
var G__63451 = next_i;
var G__63452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,lark.tree.reader.report_invalid_BANG_(next_node));
reader__$1 = G__63450;
i = G__63451;
out = G__63452;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"splice","splice",449588165),G__63331)){
if(cljs.core.truth_(take_n)){
var vec__63332 = lark.tree.reader.split_after_n(take_n,count_pred,null,children);
var valid_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63332,(0),null);
var taken_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63332,(1),null);
var remaining_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63332,(2),null);
if(cljs.core.truth_(valid_QMARK_)){
return lark.tree.reader.Splice.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(coll_node,new cljs.core.Keyword(null,"children","children",-940561982),taken_values),remaining_values);
} else {
return invalid_exit(cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,children));
}
} else {
var G__63453 = reader__$1;
var G__63454 = next_i;
var G__63455 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,children);
reader__$1 = G__63453;
i = G__63454;
out = G__63455;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eof","eof",-489063237),G__63331)){
return invalid_exit(out);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__63331)){
return invalid_exit(out);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matched-delimiter","matched-delimiter",885053676),G__63331)){
if(cljs.core.truth_((function (){var and__4120__auto__ = take_n;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(take_n,i);
} else {
return and__4120__auto__;
}
})())){
lark.tree.reader.unread(reader__$1,value);

return invalid_exit(out);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(coll_node,new cljs.core.Keyword(null,"children","children",-940561982),out);
}
} else {
var G__63457 = reader__$1;
var G__63458 = next_i;
var G__63459 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,next_node);
reader__$1 = G__63457;
i = G__63458;
out = G__63459;
continue;

}
}
}
}
}
}
}
break;
}
});
lark.tree.reader.NodeWithChildren = (function lark$tree$reader$NodeWithChildren(reader,read_fn,tag,delimiter){
cljs.tools.reader.reader_types.read_char(reader);

var _STAR_delimiter_STAR__orig_val__63341 = lark.tree.reader._STAR_delimiter_STAR_;
var _STAR_delimiter_STAR__temp_val__63342 = cljs.core.cons(delimiter,lark.tree.reader._STAR_delimiter_STAR_);
lark.tree.reader._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__temp_val__63342;

try{return lark.tree.reader.conj_children(lark.tree.reader.EmptyNode(tag),reader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-fn","read-fn",-899140577),read_fn], null));
}finally {lark.tree.reader._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__orig_val__63341;
}});
lark.tree.reader.read_string_data = (function lark$tree$reader$read_string_data(node,reader){
lark.tree.reader.ignore(reader);

lark.tree.reader.buf.clear();

var escape_QMARK_ = false;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char(reader);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if((((!(escape_QMARK_))) && ((c === "\"")))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"value","value",305978217),lark.tree.reader.buf.toString());
} else {
lark.tree.reader.buf.append(c);

var G__63460 = (((!(escape_QMARK_))) && ((c === "\\")));
escape_QMARK_ = G__63460;
continue;

}
} else {
return lark.tree.reader.report_invalid_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"value","value",305978217),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.tree.reader.buf.toString())].join('')], 0)));
}
break;
}
});
lark.tree.reader.non_breaking_space = "\u00A0";
lark.tree.reader.newline_QMARK_ = (function lark$tree$reader$newline_QMARK_(c){
return ((("\n" === c)) || (("\r" === c)));
});
lark.tree.reader.space_QMARK_ = (function lark$tree$reader$space_QMARK_(c){
return (((" " === c)) || (("\t" === c)) || ((lark.tree.reader.non_breaking_space === c)));
});
lark.tree.reader.whitespace_QMARK_ = (function lark$tree$reader$whitespace_QMARK_(c){
return ((((("," === c)) || ((" " === c)) || (("\t" === c)) || ((lark.tree.reader.non_breaking_space === c)))) || (lark.tree.reader.newline_QMARK_(c)));
});
lark.tree.reader.brace_QMARK_ = (function lark$tree$reader$brace_QMARK_(ch){
return ((("(" === ch)) || ((")" === ch)) || (("[" === ch)) || (("]" === ch)) || (("{" === ch)) || (("}" === ch)) || (("\"" === ch)));
});
lark.tree.reader.prefix_boundary_QMARK_ = (function lark$tree$reader$prefix_boundary_QMARK_(ch){
return (((";" === ch)) || ((":" === ch)) || (("'" === ch)) || (("@" === ch)) || (("^" === ch)) || (("`" === ch)) || (("~" === ch)) || (("\\" === ch)) || ((null === ch)));
});
lark.tree.reader.boundary_QMARK_ = (function lark$tree$reader$boundary_QMARK_(ch){
return ((lark.tree.reader.brace_QMARK_(ch)) || (lark.tree.reader.prefix_boundary_QMARK_(ch)));
});

//# sourceMappingURL=lark.tree.reader.js.map
