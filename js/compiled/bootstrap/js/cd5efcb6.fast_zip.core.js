goog.provide('fast_zip.core');

/**
* @constructor
*/
fast_zip.core.ZipperOps = (function (branch_QMARK_,children,make_node){
this.branch_QMARK_ = branch_QMARK_;
this.children = children;
this.make_node = make_node;
});

fast_zip.core.ZipperOps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"branch?","branch?",641208520,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"make-node","make-node",-1550461835,null)], null);
});

fast_zip.core.ZipperOps.cljs$lang$type = true;

fast_zip.core.ZipperOps.cljs$lang$ctorStr = "fast-zip.core/ZipperOps";

fast_zip.core.ZipperOps.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fast-zip.core/ZipperOps");
});

/**
 * Positional factory function for fast-zip.core/ZipperOps.
 */
fast_zip.core.__GT_ZipperOps = (function fast_zip$core$__GT_ZipperOps(branch_QMARK_,children,make_node){
return (new fast_zip.core.ZipperOps(branch_QMARK_,children,make_node));
});


/**
* @constructor
*/
fast_zip.core.ZipperPath = (function (l,r,ppath,pnodes,changed_QMARK_){
this.l = l;
this.r = r;
this.ppath = ppath;
this.pnodes = pnodes;
this.changed_QMARK_ = changed_QMARK_;
});

fast_zip.core.ZipperPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"ppath","ppath",-117651257,null),new cljs.core.Symbol(null,"pnodes","pnodes",-915355204,null),new cljs.core.Symbol(null,"changed?","changed?",1202703197,null)], null);
});

fast_zip.core.ZipperPath.cljs$lang$type = true;

fast_zip.core.ZipperPath.cljs$lang$ctorStr = "fast-zip.core/ZipperPath";

fast_zip.core.ZipperPath.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fast-zip.core/ZipperPath");
});

/**
 * Positional factory function for fast-zip.core/ZipperPath.
 */
fast_zip.core.__GT_ZipperPath = (function fast_zip$core$__GT_ZipperPath(l,r,ppath,pnodes,changed_QMARK_){
return (new fast_zip.core.ZipperPath(l,r,ppath,pnodes,changed_QMARK_));
});


/**
* @constructor
*/
fast_zip.core.ZipperLocation = (function (ops,node,path){
this.ops = ops;
this.node = node;
this.path = path;
});

fast_zip.core.ZipperLocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"ops","ops",-1417105706,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"ZipperOps","ZipperOps",1158202396,null)], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"ZipperPath","ZipperPath",941189534,null)], null))], null);
});

fast_zip.core.ZipperLocation.cljs$lang$type = true;

fast_zip.core.ZipperLocation.cljs$lang$ctorStr = "fast-zip.core/ZipperLocation";

fast_zip.core.ZipperLocation.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fast-zip.core/ZipperLocation");
});

/**
 * Positional factory function for fast-zip.core/ZipperLocation.
 */
fast_zip.core.__GT_ZipperLocation = (function fast_zip$core$__GT_ZipperLocation(ops,node,path){
return (new fast_zip.core.ZipperLocation(ops,node,path));
});

/**
 * Creates a new zipper structure.
 * 
 *   branch? is a fn that, given a node, returns true if can have
 *   children, even if it currently doesn't.
 * 
 *   children is a fn that, given a branch node, returns a seq of its
 *   children.
 * 
 *   make-node is a fn that, given an existing node and a seq of
 *   children, returns a new branch node with the supplied children.
 *   root is the root node.
 */
fast_zip.core.zipper = (function fast_zip$core$zipper(branch_QMARK_,children,make_node,root){
return (new fast_zip.core.ZipperLocation((new fast_zip.core.ZipperOps(branch_QMARK_,children,make_node)),root,null));
});
/**
 * Returns a zipper for nested sequences, given a root sequence
 */
fast_zip.core.seq_zip = (function fast_zip$core$seq_zip(root){
return fast_zip.core.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for nested vectors, given a root vector
 */
fast_zip.core.vector_zip = (function fast_zip$core$vector_zip(root){
return fast_zip.core.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for xml elements (as from xml/parse),
 *   given a root element
 */
fast_zip.core.xml_zip = (function fast_zip$core$xml_zip(root){
return fast_zip.core.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword(null,"content","content",15833224)),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"content","content",15833224),(function (){var and__4120__auto__ = children;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else {
return and__4120__auto__;
}
})());
}),root);
});
/**
 * Returns the node at loc
 */
fast_zip.core.node = (function fast_zip$core$node(loc){
return loc.node;
});
/**
 * Returns true if the node at loc is a branch
 */
fast_zip.core.branch_QMARK_ = (function fast_zip$core$branch_QMARK_(loc){
var G__47432 = loc.node;
var fexpr__47431 = loc.ops.branch_QMARK_;
return (fexpr__47431.cljs$core$IFn$_invoke$arity$1 ? fexpr__47431.cljs$core$IFn$_invoke$arity$1(G__47432) : fexpr__47431.call(null,G__47432));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
fast_zip.core.children = (function fast_zip$core$children(loc){
var G__47437 = loc.node;
var fexpr__47436 = loc.ops.children;
return (fexpr__47436.cljs$core$IFn$_invoke$arity$1 ? fexpr__47436.cljs$core$IFn$_invoke$arity$1(G__47437) : fexpr__47436.call(null,G__47437));
});
/**
 * Returns a new branch node, given an existing node and new children.
 *   The loc is only used to supply the constructor.
 */
fast_zip.core.make_node = (function fast_zip$core$make_node(loc,node,children){
var fexpr__47451 = loc.ops.make_node;
return (fexpr__47451.cljs$core$IFn$_invoke$arity$2 ? fexpr__47451.cljs$core$IFn$_invoke$arity$2(node,children) : fexpr__47451.call(null,node,children));
});
/**
 * Returns a seq of nodes leading to this loc
 */
fast_zip.core.path = (function fast_zip$core$path(loc){
var temp__5718__auto__ = loc.path;
if(cljs.core.truth_(temp__5718__auto__)){
var p = temp__5718__auto__;
return p.pnodes;
} else {
return null;
}
});
/**
 * Returns a seq of the left siblings of this loc
 */
fast_zip.core.lefts = (function fast_zip$core$lefts(loc){
var temp__5718__auto__ = loc.path;
if(cljs.core.truth_(temp__5718__auto__)){
var p = temp__5718__auto__;
return cljs.core.seq(cljs.core.reverse(p.l));
} else {
return null;
}
});
/**
 * Returns a seq of the right siblings of this loc
 */
fast_zip.core.rights = (function fast_zip$core$rights(loc){
var temp__5718__auto__ = loc.path;
if(cljs.core.truth_(temp__5718__auto__)){
var p = temp__5718__auto__;
return p.r;
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost child of the node at this loc,
 *   or nil if no children
 */
fast_zip.core.down = (function fast_zip$core$down(loc){
if(cljs.core.truth_(fast_zip.core.branch_QMARK_(loc))){
var temp__5720__auto__ = fast_zip.core.children(loc);
if(cljs.core.truth_(temp__5720__auto__)){
var cs = temp__5720__auto__;
var node = loc.node;
var path = loc.path;
return (new fast_zip.core.ZipperLocation(loc.ops,cljs.core.first(cs),(new fast_zip.core.ZipperPath(cljs.core.List.EMPTY,cljs.core.next(cs),path,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path.pnodes,node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),null))));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at the top
 */
fast_zip.core.up = (function fast_zip$core$up(loc){
var path = loc.path;
var temp__5720__auto__ = (function (){var and__4120__auto__ = path;
if(cljs.core.truth_(and__4120__auto__)){
return path.pnodes;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var pnodes = temp__5720__auto__;
var pnode = cljs.core.peek(pnodes);
if(cljs.core.truth_(path.changed_QMARK_)){
return (new fast_zip.core.ZipperLocation(loc.ops,fast_zip.core.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(path.l),cljs.core.cons(loc.node,path.r))),(function (){var temp__5718__auto__ = path.ppath;
if(cljs.core.truth_(temp__5718__auto__)){
var ppath = temp__5718__auto__;
return (new fast_zip.core.ZipperPath(ppath.l,ppath.r,ppath.ppath,ppath.pnodes,true));
} else {
return null;
}
})()));
} else {
return (new fast_zip.core.ZipperLocation(loc.ops,pnode,path.ppath));
}
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any changes.
 */
fast_zip.core.root = (function fast_zip$core$root(loc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),loc.path)){
return loc.node;
} else {
var p = fast_zip.core.up(loc);
if(cljs.core.truth_(p)){
var G__47798 = p;
loc = G__47798;
continue;
} else {
return loc.node;
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
fast_zip.core.right = (function fast_zip$core$right(loc){
var path = loc.path;
var temp__5720__auto__ = (function (){var and__4120__auto__ = path;
if(cljs.core.truth_(and__4120__auto__)){
return path.r;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var r = temp__5720__auto__;
return (new fast_zip.core.ZipperLocation(loc.ops,cljs.core.first(r),(new fast_zip.core.ZipperPath(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path.l,loc.node),cljs.core.next(r),path.ppath,path.pnodes,path.changed_QMARK_))));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
fast_zip.core.rightmost = (function fast_zip$core$rightmost(loc){
var path = loc.path;
var temp__5718__auto__ = (function (){var and__4120__auto__ = path;
if(cljs.core.truth_(and__4120__auto__)){
return path.r;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var r = temp__5718__auto__;
return (new fast_zip.core.ZipperLocation(loc.ops,cljs.core.last(r),(new fast_zip.core.ZipperPath(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,path.l,loc.node,cljs.core.butlast(r)),null,path.ppath,path.pnodes,path.changed_QMARK_))));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
fast_zip.core.left = (function fast_zip$core$left(loc){
var path = loc.path;
if(cljs.core.truth_((function (){var and__4120__auto__ = path;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(path.l);
} else {
return and__4120__auto__;
}
})())){
return (new fast_zip.core.ZipperLocation(loc.ops,cljs.core.peek(path.l),(new fast_zip.core.ZipperPath(cljs.core.pop(path.l),cljs.core.cons(loc.node,path.r),path.ppath,path.pnodes,path.changed_QMARK_))));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
fast_zip.core.leftmost = (function fast_zip$core$leftmost(loc){
var path = loc.path;
if(cljs.core.truth_((function (){var and__4120__auto__ = path;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(path.l);
} else {
return and__4120__auto__;
}
})())){
return (new fast_zip.core.ZipperLocation(loc.ops,cljs.core.last(path.l),(new fast_zip.core.ZipperPath(cljs.core.List.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.next(cljs.core.reverse(path.l)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc.node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path.r], 0)),path.ppath,path.pnodes,path.changed_QMARK_))));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc, without moving
 */
fast_zip.core.insert_left = (function fast_zip$core$insert_left(loc,item){
var temp__5718__auto__ = loc.path;
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return (new fast_zip.core.ZipperLocation(loc.ops,loc.node,(new fast_zip.core.ZipperPath(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path.l,item),path.r,path.ppath,path.pnodes,true))));
} else {
throw (new Error("Insert at top"));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc, without moving
 */
fast_zip.core.insert_right = (function fast_zip$core$insert_right(loc,item){
var temp__5718__auto__ = loc.path;
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return (new fast_zip.core.ZipperLocation(loc.ops,loc.node,(new fast_zip.core.ZipperPath(path.l,cljs.core.cons(item,path.r),path.ppath,path.pnodes,true))));
} else {
throw (new Error("Insert at top"));
}
});
/**
 * Replaces the node at this loc, without moving
 */
fast_zip.core.replace = (function fast_zip$core$replace(loc,node){
return (new fast_zip.core.ZipperLocation(loc.ops,node,(function (){var temp__5718__auto__ = loc.path;
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return (new fast_zip.core.ZipperPath(path.l,path.r,path.ppath,path.pnodes,true));
} else {
return null;
}
})()));
});
/**
 * Inserts the item as the leftmost child of the node at this loc, without moving
 */
fast_zip.core.insert_child = (function fast_zip$core$insert_child(loc,item){
return fast_zip.core.replace(loc,fast_zip.core.make_node(loc,loc.node,cljs.core.cons(item,fast_zip.core.children(loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc, without moving
 */
fast_zip.core.append_child = (function fast_zip$core$append_child(loc,item){
return fast_zip.core.replace(loc,fast_zip.core.make_node(loc,loc.node,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fast_zip.core.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 *   the end, returns a distinguished loc detectable via end?. If already
 *   at the end, stays there.
 */
fast_zip.core.next = (function fast_zip$core$next(loc){
var path = loc.path;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),path)){
return loc;
} else {
var or__4131__auto__ = (cljs.core.truth_(fast_zip.core.branch_QMARK_(loc))?fast_zip.core.down(loc):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = fast_zip.core.right(loc);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var p = loc;
while(true){
var temp__5718__auto__ = fast_zip.core.up(p);
if(cljs.core.truth_(temp__5718__auto__)){
var u = temp__5718__auto__;
var or__4131__auto____$2 = fast_zip.core.right(u);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var G__47868 = u;
p = G__47868;
continue;
}
} else {
return (new fast_zip.core.ZipperLocation(loc.ops,p.node,new cljs.core.Keyword(null,"end","end",-268185958)));
}
break;
}
}
}
}
});
/**
 * Moves to the previous loc in the hierarchy, depth-first. If already at the root, returns nil.
 */
fast_zip.core.prev = (function fast_zip$core$prev(loc){
var temp__5718__auto__ = fast_zip.core.left(loc);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
var loc__$1 = lloc;
while(true){
var temp__5718__auto____$1 = (function (){var and__4120__auto__ = fast_zip.core.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__4120__auto__)){
return fast_zip.core.down(loc__$1);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var child = temp__5718__auto____$1;
var G__47877 = fast_zip.core.rightmost(child);
loc__$1 = G__47877;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return fast_zip.core.up(loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
fast_zip.core.end_QMARK_ = (function fast_zip$core$end_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),loc.path);
});
/**
 * Removes the node at loc, returning the loc that would have preceded it in a depth-first walk.
 */
fast_zip.core.remove = (function fast_zip$core$remove(loc){
var temp__5718__auto__ = loc.path;
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
if((cljs.core.count(path.l) > (0))){
var loc__$1 = (new fast_zip.core.ZipperLocation(loc.ops,cljs.core.peek(path.l),(new fast_zip.core.ZipperPath(cljs.core.pop(path.l),path.r,path.ppath,path.pnodes,true))));
while(true){
var temp__5718__auto____$1 = (function (){var and__4120__auto__ = fast_zip.core.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__4120__auto__)){
return fast_zip.core.down(loc__$1);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var child = temp__5718__auto____$1;
var G__47900 = fast_zip.core.rightmost(child);
loc__$1 = G__47900;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return (new fast_zip.core.ZipperLocation(loc.ops,fast_zip.core.make_node(loc,cljs.core.peek(path.pnodes),path.r),(function (){var temp__5718__auto____$1 = path.ppath;
if(cljs.core.truth_(temp__5718__auto____$1)){
var ppath = temp__5718__auto____$1;
if(cljs.core.truth_(ppath)){
return (new fast_zip.core.ZipperPath(ppath.l,ppath.r,ppath.ppath,ppath.pnodes,true));
} else {
return null;
}
} else {
return null;
}
})()));
}
} else {
throw (new Error("Remove at top"));
}
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
fast_zip.core.edit = (function fast_zip$core$edit(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47906 = arguments.length;
var i__4731__auto___47907 = (0);
while(true){
if((i__4731__auto___47907 < len__4730__auto___47906)){
args__4736__auto__.push((arguments[i__4731__auto___47907]));

var G__47908 = (i__4731__auto___47907 + (1));
i__4731__auto___47907 = G__47908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fast_zip.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fast_zip.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return fast_zip.core.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,loc.node,args));
});

fast_zip.core.edit.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fast_zip.core.edit.cljs$lang$applyTo = (function (seq47700){
var G__47701 = cljs.core.first(seq47700);
var seq47700__$1 = cljs.core.next(seq47700);
var G__47702 = cljs.core.first(seq47700__$1);
var seq47700__$2 = cljs.core.next(seq47700__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47701,G__47702,seq47700__$2);
});

