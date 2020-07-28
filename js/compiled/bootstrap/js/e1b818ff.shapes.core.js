goog.provide('shapes.core');

/**
 * @interface
 */
shapes.core.IListen = function(){};

/**
 * Attach event listeners to shape.
 */
shapes.core._listen = (function shapes$core$_listen(this$,listeners){
if((((!((this$ == null)))) && ((!((this$.shapes$core$IListen$_listen$arity$2 == null)))))){
return this$.shapes$core$IListen$_listen$arity$2(this$,listeners);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shapes.core._listen[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,listeners) : m__4434__auto__.call(null,this$,listeners));
} else {
var m__4431__auto__ = (shapes.core._listen["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,listeners) : m__4431__auto__.call(null,this$,listeners));
} else {
throw cljs.core.missing_protocol("IListen.-listen",this$);
}
}
}
});

shapes.core.listen = (function shapes$core$listen(var_args){
var G__51817 = arguments.length;
switch (G__51817) {
case 3:
return shapes.core.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___52621 = arguments.length;
var i__4731__auto___52622 = (0);
while(true){
if((i__4731__auto___52622 < len__4730__auto___52621)){
args_arr__4751__auto__.push((arguments[i__4731__auto___52622]));

var G__52623 = (i__4731__auto___52622 + (1));
i__4731__auto___52622 = G__52623;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return shapes.core.listen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

shapes.core.listen.cljs$core$IFn$_invoke$arity$3 = (function (event,listener,shape){
return shapes.core._listen(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,listener], null));
});

shapes.core.listen.cljs$core$IFn$_invoke$arity$variadic = (function (event_1,listener_1,event_2,listener_2,args){
return shapes.core._listen(cljs.core.last(args),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_1,listener_1,event_2,listener_2], null),cljs.core.butlast(args)));
});

/** @this {Function} */
shapes.core.listen.cljs$lang$applyTo = (function (seq51812){
var G__51813 = cljs.core.first(seq51812);
var seq51812__$1 = cljs.core.next(seq51812);
var G__51814 = cljs.core.first(seq51812__$1);
var seq51812__$2 = cljs.core.next(seq51812__$1);
var G__51815 = cljs.core.first(seq51812__$2);
var seq51812__$3 = cljs.core.next(seq51812__$2);
var G__51816 = cljs.core.first(seq51812__$3);
var seq51812__$4 = cljs.core.next(seq51812__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51813,G__51814,G__51815,G__51816,seq51812__$4);
});

shapes.core.listen.cljs$lang$maxFixedArity = (4);


/**
* @constructor
*/
shapes.core.BBox = (function (x1,y1,x2,y2){
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
});

shapes.core.BBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x1","x1",-223390720,null),new cljs.core.Symbol(null,"y1","y1",-2065312303,null),new cljs.core.Symbol(null,"x2","x2",278018052,null),new cljs.core.Symbol(null,"y2","y2",921840226,null)], null);
});

shapes.core.BBox.cljs$lang$type = true;

shapes.core.BBox.cljs$lang$ctorStr = "shapes.core/BBox";

shapes.core.BBox.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shapes.core/BBox");
});

/**
 * Positional factory function for shapes.core/BBox.
 */
shapes.core.__GT_BBox = (function shapes$core$__GT_BBox(x1,y1,x2,y2){
return (new shapes.core.BBox(x1,y1,x2,y2));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {shapes.core.IListen}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shapes.core.Shape = (function (kind,x,y,height,width,stroke,stroke_width,fill,rotate,opacity,bbox,children,cx,cy,r,rx,ry,points,font_size,font_weight,font_family,text,href,__meta,__extmap,__hash){
this.kind = kind;
this.x = x;
this.y = y;
this.height = height;
this.width = width;
this.stroke = stroke;
this.stroke_width = stroke_width;
this.fill = fill;
this.rotate = rotate;
this.opacity = opacity;
this.bbox = bbox;
this.children = children;
this.cx = cx;
this.cy = cy;
this.r = r;
this.rx = rx;
this.ry = ry;
this.points = points;
this.font_size = font_size;
this.font_weight = font_weight;
this.font_family = font_family;
this.text = text;
this.href = href;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shapes.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shapes.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k51840,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__51858 = k51840;
var G__51858__$1 = (((G__51858 instanceof cljs.core.Keyword))?G__51858.fqn:null);
switch (G__51858__$1) {
case "kind":
return self__.kind;

break;
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "height":
return self__.height;

break;
case "width":
return self__.width;

break;
case "stroke":
return self__.stroke;

break;
case "stroke-width":
return self__.stroke_width;

break;
case "fill":
return self__.fill;

break;
case "rotate":
return self__.rotate;

break;
case "opacity":
return self__.opacity;

break;
case "bbox":
return self__.bbox;

break;
case "children":
return self__.children;

break;
case "cx":
return self__.cx;

break;
case "cy":
return self__.cy;

break;
case "r":
return self__.r;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
case "points":
return self__.points;

break;
case "font-size":
return self__.font_size;

break;
case "font-weight":
return self__.font_weight;

break;
case "font-family":
return self__.font_family;

break;
case "text":
return self__.text;

break;
case "href":
return self__.href;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51840,else__4388__auto__);

}
});

shapes.core.Shape.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__51866){
var vec__51867 = p__51866;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51867,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51867,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shapes.core.Shape.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shapes.core.Shape{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opacity","opacity",397153780),self__.opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bbox","bbox",678077025),self__.bbox],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cx","cx",1272694324),self__.cx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cy","cy",755331060),self__.cy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font-size","font-size",-1847940346),self__.font_size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),self__.font_weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font-family","font-family",-667419874),self__.font_family],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"href","href",-793805698),self__.href],null))], null),self__.__extmap));
});

shapes.core.Shape.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51839){
var self__ = this;
var G__51839__$1 = this;
return (new cljs.core.RecordIter((0),G__51839__$1,23,new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"bbox","bbox",678077025),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"href","href",-793805698)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shapes.core.Shape.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shapes.core.Shape.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,self__.__hash));
});

shapes.core.Shape.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (23 + cljs.core.count(self__.__extmap));
});

shapes.core.Shape.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__51871 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1430556453 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__51871(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shapes.core.Shape.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51841,other51842){
var self__ = this;
var this51841__$1 = this;
return (((!((other51842 == null)))) && ((this51841__$1.constructor === other51842.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.kind,other51842.kind)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.x,other51842.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.y,other51842.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.height,other51842.height)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.width,other51842.width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.stroke,other51842.stroke)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.stroke_width,other51842.stroke_width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.fill,other51842.fill)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.rotate,other51842.rotate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.opacity,other51842.opacity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.bbox,other51842.bbox)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.children,other51842.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.cx,other51842.cx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.cy,other51842.cy)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.r,other51842.r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.rx,other51842.rx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.ry,other51842.ry)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.points,other51842.points)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.font_size,other51842.font_size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.font_weight,other51842.font_weight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.font_family,other51842.font_family)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.text,other51842.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.href,other51842.href)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51841__$1.__extmap,other51842.__extmap)));
});

shapes.core.Shape.prototype.shapes$core$IListen$ = cljs.core.PROTOCOL_SENTINEL;

shapes.core.Shape.prototype.shapes$core$IListen$_listen$arity$2 = (function (this$,listeners){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (m,p__51953){
var vec__51958 = p__51953;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51958,(0),null);
var listener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51958,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["on-",cljs.core.name(event)].join('')),listener);
});})(this$__$1))
,this$__$1,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),listeners));
});

shapes.core.Shape.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 23, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"bbox","bbox",678077025),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"cx","cx",1272694324),null,new cljs.core.Keyword(null,"cy","cy",755331060),null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null,new cljs.core.Keyword(null,"href","href",-793805698),null,new cljs.core.Keyword(null,"font-family","font-family",-667419874),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shapes.core.Shape.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__51839){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__51988 = cljs.core.keyword_identical_QMARK_;
var expr__51989 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__51991 = new cljs.core.Keyword(null,"kind","kind",-717265803);
var G__51992 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__51991,G__51992) : pred__51988.call(null,G__51991,G__51992));
})())){
return (new shapes.core.Shape(G__51839,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51995 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__51996 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__51995,G__51996) : pred__51988.call(null,G__51995,G__51996));
})())){
return (new shapes.core.Shape(self__.kind,G__51839,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52002 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__52003 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52002,G__52003) : pred__51988.call(null,G__52002,G__52003));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,G__51839,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52007 = new cljs.core.Keyword(null,"height","height",1025178622);
var G__52008 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52007,G__52008) : pred__51988.call(null,G__52007,G__52008));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,G__51839,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52009 = new cljs.core.Keyword(null,"width","width",-384071477);
var G__52010 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52009,G__52010) : pred__51988.call(null,G__52009,G__52010));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,G__51839,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52014 = new cljs.core.Keyword(null,"stroke","stroke",1741823555);
var G__52015 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52014,G__52015) : pred__51988.call(null,G__52014,G__52015));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,G__51839,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52016 = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435);
var G__52017 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52016,G__52017) : pred__51988.call(null,G__52016,G__52017));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,G__51839,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52018 = new cljs.core.Keyword(null,"fill","fill",883462889);
var G__52019 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52018,G__52019) : pred__51988.call(null,G__52018,G__52019));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,G__51839,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52020 = new cljs.core.Keyword(null,"rotate","rotate",152705015);
var G__52021 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52020,G__52021) : pred__51988.call(null,G__52020,G__52021));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,G__51839,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52022 = new cljs.core.Keyword(null,"opacity","opacity",397153780);
var G__52023 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52022,G__52023) : pred__51988.call(null,G__52022,G__52023));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,G__51839,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52030 = new cljs.core.Keyword(null,"bbox","bbox",678077025);
var G__52031 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52030,G__52031) : pred__51988.call(null,G__52030,G__52031));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,G__51839,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52032 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__52033 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52032,G__52033) : pred__51988.call(null,G__52032,G__52033));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,G__51839,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52034 = new cljs.core.Keyword(null,"cx","cx",1272694324);
var G__52035 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52034,G__52035) : pred__51988.call(null,G__52034,G__52035));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,G__51839,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52036 = new cljs.core.Keyword(null,"cy","cy",755331060);
var G__52037 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52036,G__52037) : pred__51988.call(null,G__52036,G__52037));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,G__51839,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52038 = new cljs.core.Keyword(null,"r","r",-471384190);
var G__52039 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52038,G__52039) : pred__51988.call(null,G__52038,G__52039));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,G__51839,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52041 = new cljs.core.Keyword(null,"rx","rx",1627208482);
var G__52042 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52041,G__52042) : pred__51988.call(null,G__52041,G__52042));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,G__51839,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52045 = new cljs.core.Keyword(null,"ry","ry",-334598563);
var G__52046 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52045,G__52046) : pred__51988.call(null,G__52045,G__52046));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,G__51839,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52047 = new cljs.core.Keyword(null,"points","points",-1486596883);
var G__52048 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52047,G__52048) : pred__51988.call(null,G__52047,G__52048));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,G__51839,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52049 = new cljs.core.Keyword(null,"font-size","font-size",-1847940346);
var G__52050 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52049,G__52050) : pred__51988.call(null,G__52049,G__52050));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,G__51839,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52051 = new cljs.core.Keyword(null,"font-weight","font-weight",2085804583);
var G__52052 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52051,G__52052) : pred__51988.call(null,G__52051,G__52052));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,G__51839,self__.font_family,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52058 = new cljs.core.Keyword(null,"font-family","font-family",-667419874);
var G__52059 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52058,G__52059) : pred__51988.call(null,G__52058,G__52059));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,G__51839,self__.text,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52060 = new cljs.core.Keyword(null,"text","text",-1790561697);
var G__52061 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52060,G__52061) : pred__51988.call(null,G__52060,G__52061));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,G__51839,self__.href,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52082 = new cljs.core.Keyword(null,"href","href",-793805698);
var G__52083 = expr__51989;
return (pred__51988.cljs$core$IFn$_invoke$arity$2 ? pred__51988.cljs$core$IFn$_invoke$arity$2(G__52082,G__52083) : pred__51988.call(null,G__52082,G__52083));
})())){
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,G__51839,self__.__meta,self__.__extmap,null));
} else {
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__51839),null));
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
});

shapes.core.Shape.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),self__.height,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"opacity","opacity",397153780),self__.opacity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bbox","bbox",678077025),self__.bbox,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cx","cx",1272694324),self__.cx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cy","cy",755331060),self__.cy,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"points","points",-1486596883),self__.points,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font-size","font-size",-1847940346),self__.font_size,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),self__.font_weight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font-family","font-family",-667419874),self__.font_family,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"href","href",-793805698),self__.href,null))], null),self__.__extmap));
});

shapes.core.Shape.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__51839){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shapes.core.Shape(self__.kind,self__.x,self__.y,self__.height,self__.width,self__.stroke,self__.stroke_width,self__.fill,self__.rotate,self__.opacity,self__.bbox,self__.children,self__.cx,self__.cy,self__.r,self__.rx,self__.ry,self__.points,self__.font_size,self__.font_weight,self__.font_family,self__.text,self__.href,G__51839,self__.__extmap,self__.__hash));
});

shapes.core.Shape.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shapes.core.Shape.getBasis = (function (){
return new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"stroke","stroke",-912612214,null),new cljs.core.Symbol(null,"stroke-width","stroke-width",-1937599334,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"rotate","rotate",1793236542,null),new cljs.core.Symbol(null,"opacity","opacity",2037685307,null),new cljs.core.Symbol(null,"bbox","bbox",-1976358744,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null),new cljs.core.Symbol(null,"points","points",153934644,null),new cljs.core.Symbol(null,"font-size","font-size",-207408819,null),new cljs.core.Symbol(null,"font-weight","font-weight",-568631186,null),new cljs.core.Symbol(null,"font-family","font-family",973111653,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"href","href",846725829,null)], null);
});

shapes.core.Shape.cljs$lang$type = true;

shapes.core.Shape.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shapes.core/Shape",null,(1),null));
});

shapes.core.Shape.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shapes.core/Shape");
});

/**
 * Positional factory function for shapes.core/Shape.
 */
shapes.core.__GT_Shape = (function shapes$core$__GT_Shape(kind,x,y,height,width,stroke,stroke_width,fill,rotate,opacity,bbox,children,cx,cy,r,rx,ry,points,font_size,font_weight,font_family,text,href){
return (new shapes.core.Shape(kind,x,y,height,width,stroke,stroke_width,fill,rotate,opacity,bbox,children,cx,cy,r,rx,ry,points,font_size,font_weight,font_family,text,href,null,null,null));
});

/**
 * Factory function for shapes.core/Shape, taking a map of keywords to field values.
 */
shapes.core.map__GT_Shape = (function shapes$core$map__GT_Shape(G__51843){
var extmap__4424__auto__ = (function (){var G__52126 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51843,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"bbox","bbox",678077025),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"href","href",-793805698)], 0));
if(cljs.core.record_QMARK_(G__51843)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52126);
} else {
return G__52126;
}
})();
return (new shapes.core.Shape(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"bbox","bbox",678077025).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__51843),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(G__51843),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shapes.core.assert_number = (function shapes$core$assert_number(message,x){
if(cljs.core.truth_(isNaN(x))){
throw (new Error(message));
} else {
return parseFloat(x);
}
});
shapes.core.assert_number_range = (function shapes$core$assert_number_range(message,x_min,x_max,x){
var x_parsed = shapes.core.assert_number(message,x);
if((((x_min <= x_parsed)) && ((x_parsed <= x_max)))){
return x_parsed;
} else {
throw (new Error(message));
}
});
/**
 * Returns a circle of `radius`.
 */
shapes.core.circle = (function shapes$core$circle(radius){
shapes.core.assert_number("radius must be a number!",radius);

return shapes.core.map__GT_Shape(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"r","r",-471384190),radius,new cljs.core.Keyword(null,"cx","cx",1272694324),radius,new cljs.core.Keyword(null,"cy","cy",755331060),radius,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(0),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
shapes.core.ellipse = (function shapes$core$ellipse(radius_x,radius_y){
shapes.core.assert_number("radius-x must be a number!",radius_x);

shapes.core.assert_number("radius-y must be a number!",radius_y);

return shapes.core.map__GT_Shape(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.Keyword(null,"rx","rx",1627208482),radius_x,new cljs.core.Keyword(null,"ry","ry",-334598563),radius_y,new cljs.core.Keyword(null,"cx","cx",1272694324),radius_x,new cljs.core.Keyword(null,"cy","cy",755331060),radius_y,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(0),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
/**
 * Returns a rectangle of `width` and `height`. See also `square`.
 */
shapes.core.rectangle = (function shapes$core$rectangle(width,height){
shapes.core.assert_number("width must be a number!",width);

shapes.core.assert_number("height must be a number!",height);

return shapes.core.map__GT_Shape(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(0),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
/**
 * Returns a square of dimension `side`.
 */
shapes.core.square = (function shapes$core$square(side){
shapes.core.assert_number("side must be a number!",side);

return shapes.core.rectangle(side,side);
});
/**
 * Add a label containing `the-text` to a drawing.
 */
shapes.core.text = (function shapes$core$text(the_text){
return shapes.core.map__GT_Shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697)],[(18),(15),"normal","#3f4245",((9) * cljs.core.count(the_text)),new cljs.core.Keyword(null,"text","text",-1790561697),(0),"Fira Code",(18),the_text]));
});
/**
 * Add an image to the drawing
 */
shapes.core.image = (function shapes$core$image(var_args){
var G__52197 = arguments.length;
switch (G__52197) {
case 1:
return shapes.core.image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shapes.core.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shapes.core.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shapes.core.image.cljs$core$IFn$_invoke$arity$1 = (function (src){
return shapes.core.image.cljs$core$IFn$_invoke$arity$3((200),(200),src);
});

shapes.core.image.cljs$core$IFn$_invoke$arity$2 = (function (size,src){
shapes.core.assert_number("size must be a number!",size);

return shapes.core.image.cljs$core$IFn$_invoke$arity$3(size,size,src);
});

shapes.core.image.cljs$core$IFn$_invoke$arity$3 = (function (width,height,src){
shapes.core.assert_number("width must be a number!",width);

shapes.core.assert_number("height must be a number!",height);

return shapes.core.map__GT_Shape(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"href","href",-793805698),src,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
});

shapes.core.image.cljs$lang$maxFixedArity = 3;

/**
 * Scale a set of `points` by `factor`.
 */
shapes.core.scale_points = (function shapes$core$scale_points(points,factor){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,factor),points);
});
shapes.core.move_points = (function shapes$core$move_points(shape,new_x,new_y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__52211_SHARP_,p2__52212_SHARP_){
return (p1__52211_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52211_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__52212_SHARP_) : p1__52211_SHARP_.call(null,p2__52212_SHARP_));
}),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__52213_SHARP_){
return (new_x + (p1__52213_SHARP_ - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape)));
}),(function (p1__52214_SHARP_){
return (new_y + (p1__52214_SHARP_ - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape)));
})], null)),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),new_x], 0));
});
/**
 * Create an arbitrary polygon from a sequence of `points`.
 */
shapes.core.polygon = (function shapes$core$polygon(points){
return shapes.core.map__GT_Shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),"none","black",(0),points,(0),new cljs.core.Keyword(null,"polygon","polygon",837053759),(0),(0)]));
});
/**
 * Create an arbitrary polyline from a sequence of `points`.
 */
shapes.core.polyline = (function shapes$core$polyline(points){
return shapes.core.map__GT_Shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),"black","none",(0),points,(1),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(0),(0)]));
});
/**
 * Returns an equilateral triangle with sides of `size`.
 */
shapes.core.triangle = (function shapes$core$triangle(size){
shapes.core.assert_number("size must be a number!",size);

var h = (0.8660259 * size);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shapes.core.polygon(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size,(size / (2)),(size - h),size,size], null)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(0),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], 0));
});
/**
 * Return `shape` with its stroke set to `color`.
 */
shapes.core.stroke = (function shapes$core$stroke(color,shape){
var s = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"stroke","stroke",1741823555),color);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1));
} else {
return s;
}
});
/**
 * Return `shape` with its stroke set to `color`.
 */
shapes.core.stroke_width = (function shapes$core$stroke_width(width,shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),width);
});
/**
 * Return `shape` with its stroke color turned off.
 */
shapes.core.no_stroke = (function shapes$core$no_stroke(shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none");
});
/**
 * Return `shape` with its fill set to `color`.
 */
shapes.core.fill = (function shapes$core$fill(color,shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"fill","fill",883462889),color);
});
/**
 * Return `shape` with its fill color turned off.
 */
shapes.core.no_fill = (function shapes$core$no_fill(shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"fill","fill",883462889),"none");
});
/**
 * Return `shape` with its color set to `color`.
 */
shapes.core.colorize = (function shapes$core$colorize(color,shape){
shapes.core.stroke(color,shape);

return shapes.core.fill(color,shape);
});
/**
 * Return `shape` scaled by `amount`.
 */
shapes.core.scale = (function shapes$core$scale(amount,shape){
shapes.core.assert_number("amount must be a number!",amount);

var G__52301 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape);
var G__52301__$1 = (((G__52301 instanceof cljs.core.Keyword))?G__52301.fqn:null);
switch (G__52301__$1) {
case "circle":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount)),new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount)),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount));

break;
case "ellipse":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"rx","rx",1627208482),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount)),new cljs.core.Keyword(null,"ry","ry",-334598563),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount)),new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount)),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount));

break;
case "polygon":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"points","points",-1486596883),shapes.core.scale_points,amount);

break;
case "polyline":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"points","points",-1486596883),shapes.core.scale_points,amount);

break;
case "rect":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount)),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,amount));

break;
default:
throw (new Error(["Can't scale non-shape: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape], 0))].join('')));

}
});
/**
 * Return `shape` with rotated by `amount`.
 */
shapes.core.rotate = (function shapes$core$rotate(amount,shape){
shapes.core.assert_number("amount must be a number!",amount);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"rotate","rotate",152705015),amount);
} else {
return null;
}
});
/**
 * Return `shape` with its x and y positions set to `x` and `y`.
 */
shapes.core.position = (function shapes$core$position(x,y,shape){
shapes.core.assert_number("x must be a number!",x);

shapes.core.assert_number("y must be a number!",y);

var G__52330 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape);
var G__52330__$1 = (((G__52330 instanceof cljs.core.Keyword))?G__52330.fqn:null);
switch (G__52330__$1) {
case "circle":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"cx","cx",1272694324),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cy","cy",755331060),y], 0));

break;
case "ellipse":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"cx","cx",1272694324),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cy","cy",755331060),y], 0));

break;
case "polygon":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shapes.core.move_points(shape,x,y),new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));

break;
case "polyline":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shapes.core.move_points(shape,x,y),new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));

break;
case "rect":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));

break;
case "text":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));

break;
case "image":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));

break;
default:
throw (new Error(["Can't position non-shape: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape], 0))].join('')));

}
});
/**
 * Set the opacity of the shape to `o`, which should be a decimal number between 0 and 1.0
 */
shapes.core.opacity = (function shapes$core$opacity(o,shape){
shapes.core.assert_number_range("opacity must be a number between 0 and 1.0!",(0),1.0,o);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"opacity","opacity",397153780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o));
});
shapes.core.points_bbox = (function shapes$core$points_bbox(pts){
var box = shapes.core.__GT_BBox(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
var seq__52346_52787 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),pts));
var chunk__52347_52788 = null;
var count__52348_52789 = (0);
var i__52349_52790 = (0);
while(true){
if((i__52349_52790 < count__52348_52789)){
var vec__52394_52791 = chunk__52347_52788.cljs$core$IIndexed$_nth$arity$2(null,i__52349_52790);
var x_52792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52394_52791,(0),null);
var y_52793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52394_52791,(1),null);
box.x1 = (function (){var x__4222__auto__ = x_52792;
var y__4223__auto__ = box.x1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.y1 = (function (){var x__4222__auto__ = y_52793;
var y__4223__auto__ = box.y1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.x2 = (function (){var x__4219__auto__ = x_52792;
var y__4220__auto__ = box.x2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();

box.y2 = (function (){var x__4219__auto__ = y_52793;
var y__4220__auto__ = box.y2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();


var G__52826 = seq__52346_52787;
var G__52827 = chunk__52347_52788;
var G__52828 = count__52348_52789;
var G__52829 = (i__52349_52790 + (1));
seq__52346_52787 = G__52826;
chunk__52347_52788 = G__52827;
count__52348_52789 = G__52828;
i__52349_52790 = G__52829;
continue;
} else {
var temp__5720__auto___52830 = cljs.core.seq(seq__52346_52787);
if(temp__5720__auto___52830){
var seq__52346_52831__$1 = temp__5720__auto___52830;
if(cljs.core.chunked_seq_QMARK_(seq__52346_52831__$1)){
var c__4550__auto___52832 = cljs.core.chunk_first(seq__52346_52831__$1);
var G__52833 = cljs.core.chunk_rest(seq__52346_52831__$1);
var G__52834 = c__4550__auto___52832;
var G__52835 = cljs.core.count(c__4550__auto___52832);
var G__52836 = (0);
seq__52346_52787 = G__52833;
chunk__52347_52788 = G__52834;
count__52348_52789 = G__52835;
i__52349_52790 = G__52836;
continue;
} else {
var vec__52402_52837 = cljs.core.first(seq__52346_52831__$1);
var x_52838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52402_52837,(0),null);
var y_52839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52402_52837,(1),null);
box.x1 = (function (){var x__4222__auto__ = x_52838;
var y__4223__auto__ = box.x1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.y1 = (function (){var x__4222__auto__ = y_52839;
var y__4223__auto__ = box.y1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.x2 = (function (){var x__4219__auto__ = x_52838;
var y__4220__auto__ = box.x2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();

box.y2 = (function (){var x__4219__auto__ = y_52839;
var y__4220__auto__ = box.y2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();


var G__52844 = cljs.core.next(seq__52346_52831__$1);
var G__52845 = null;
var G__52846 = (0);
var G__52847 = (0);
seq__52346_52787 = G__52844;
chunk__52347_52788 = G__52845;
count__52348_52789 = G__52846;
i__52349_52790 = G__52847;
continue;
}
} else {
}
}
break;
}

return box;
});
shapes.core.max_bbox = (function shapes$core$max_bbox(boxes){
var box = shapes.core.__GT_BBox(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
var seq__52416_52848 = cljs.core.seq(boxes);
var chunk__52417_52849 = null;
var count__52418_52850 = (0);
var i__52419_52851 = (0);
while(true){
if((i__52419_52851 < count__52418_52850)){
var b_52855 = chunk__52417_52849.cljs$core$IIndexed$_nth$arity$2(null,i__52419_52851);
box.x1 = (function (){var x__4222__auto__ = b_52855.x1;
var y__4223__auto__ = box.x1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.y1 = (function (){var x__4222__auto__ = b_52855.y1;
var y__4223__auto__ = box.y1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.x2 = (function (){var x__4219__auto__ = b_52855.x2;
var y__4220__auto__ = box.x2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();

box.y2 = (function (){var x__4219__auto__ = b_52855.y2;
var y__4220__auto__ = box.y2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();


var G__52858 = seq__52416_52848;
var G__52859 = chunk__52417_52849;
var G__52860 = count__52418_52850;
var G__52861 = (i__52419_52851 + (1));
seq__52416_52848 = G__52858;
chunk__52417_52849 = G__52859;
count__52418_52850 = G__52860;
i__52419_52851 = G__52861;
continue;
} else {
var temp__5720__auto___52862 = cljs.core.seq(seq__52416_52848);
if(temp__5720__auto___52862){
var seq__52416_52863__$1 = temp__5720__auto___52862;
if(cljs.core.chunked_seq_QMARK_(seq__52416_52863__$1)){
var c__4550__auto___52864 = cljs.core.chunk_first(seq__52416_52863__$1);
var G__52865 = cljs.core.chunk_rest(seq__52416_52863__$1);
var G__52866 = c__4550__auto___52864;
var G__52867 = cljs.core.count(c__4550__auto___52864);
var G__52868 = (0);
seq__52416_52848 = G__52865;
chunk__52417_52849 = G__52866;
count__52418_52850 = G__52867;
i__52419_52851 = G__52868;
continue;
} else {
var b_52869 = cljs.core.first(seq__52416_52863__$1);
box.x1 = (function (){var x__4222__auto__ = b_52869.x1;
var y__4223__auto__ = box.x1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.y1 = (function (){var x__4222__auto__ = b_52869.y1;
var y__4223__auto__ = box.y1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();

box.x2 = (function (){var x__4219__auto__ = b_52869.x2;
var y__4220__auto__ = box.x2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();

box.y2 = (function (){var x__4219__auto__ = b_52869.y2;
var y__4220__auto__ = box.y2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();


var G__52870 = cljs.core.next(seq__52416_52863__$1);
var G__52871 = null;
var G__52872 = (0);
var G__52873 = (0);
seq__52416_52848 = G__52870;
chunk__52417_52849 = G__52871;
count__52418_52850 = G__52872;
i__52419_52851 = G__52873;
continue;
}
} else {
}
}
break;
}

return box;
});
shapes.core.bbox = (function shapes$core$bbox(shape){
var G__52463 = shape.kind;
var G__52463__$1 = (((G__52463 instanceof cljs.core.Keyword))?G__52463.fqn:null);
switch (G__52463__$1) {
case "circle":
return shapes.core.__GT_BBox((shape.cx - shape.r),(shape.cy - shape.r),(shape.cx + shape.r),(shape.cy + shape.r));

break;
case "ellipse":
return shapes.core.__GT_BBox((shape.cx - shape.rx),(shape.cy - shape.ry),(shape.cx + shape.rx),(shape.cy + shape.ry));

break;
case "polygon":
return shapes.core.points_bbox(shape.points);

break;
case "polyline":
return shapes.core.points_bbox(shape.points);

break;
case "rect":
return shapes.core.__GT_BBox(shape.x,shape.y,(shape.x + shape.width),(shape.y + shape.height));

break;
case "text":
return shapes.core.__GT_BBox(shape.x,(shape.y - shape.height),(shape.x + shape.width),shape.y);

break;
case "image":
return shapes.core.__GT_BBox(shape.x,shape.y,(shape.x + shape.width),(shape.y + shape.height));

break;
case "svg":
return shape.bbox;

break;
default:
throw (new Error(["Can't take bbox of non-shape: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape], 0))].join('')));

}
});
shapes.core.center_point = (function shapes$core$center_point(shape){
var b = shapes.core.bbox(shape);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(b.x1 + ((b.x2 - b.x1) / (2))),(b.y1 + ((b.y2 - b.y1) / (2)))], null);
});
/**
 * Returns a new shape with these `shapes` layered over each other.
 */
shapes.core.layer = (function shapes$core$layer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52891 = arguments.length;
var i__4731__auto___52892 = (0);
while(true){
if((i__4731__auto___52892 < len__4730__auto___52891)){
args__4736__auto__.push((arguments[i__4731__auto___52892]));

var G__52894 = (i__4731__auto___52892 + (1));
i__4731__auto___52892 = G__52894;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shapes.core.layer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shapes.core.layer.cljs$core$IFn$_invoke$arity$variadic = (function (shapes__$1){
var kids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,shapes__$1);
var bbox = shapes.core.max_bbox(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(shapes.core.bbox,kids));
return shapes.core.map__GT_Shape(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__52511 = bbox.x2;
return Math.ceil(G__52511);
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var G__52515 = bbox.y2;
return Math.ceil(G__52515);
})(),new cljs.core.Keyword(null,"bbox","bbox",678077025),bbox,new cljs.core.Keyword(null,"children","children",-940561982),kids], null));
});

shapes.core.layer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shapes.core.layer.cljs$lang$applyTo = (function (seq52505){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52505));
});

/**
 * Return `shapes` with their positions adjusted so they're lined up beside one another.
 */
shapes.core.beside = (function shapes$core$beside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52907 = arguments.length;
var i__4731__auto___52908 = (0);
while(true){
if((i__4731__auto___52908 < len__4730__auto___52907)){
args__4736__auto__.push((arguments[i__4731__auto___52908]));

var G__52909 = (i__4731__auto___52908 + (1));
i__4731__auto___52908 = G__52909;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shapes.core.beside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shapes.core.beside.cljs$core$IFn$_invoke$arity$variadic = (function (shapes__$1){
if(cljs.core.sequential_QMARK_(cljs.core.first(shapes__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(shapes.core.beside,cljs.core.first(shapes__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(shapes.core.layer,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__52524 = new cljs.core.Keyword(null,"out","out",-910545517);
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__52524) : state.call(null,G__52524));
})(),shapes.core.position(((cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"x","x",2099068185),(0)) + (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,new cljs.core.Keyword(null,"widths","widths",-1467327440).cljs$core$IFn$_invoke$arity$1(state))),((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()),shape)),new cljs.core.Keyword(null,"widths","widths",-1467327440),cljs.core.butlast((function (){var G__52529 = new cljs.core.Keyword(null,"widths","widths",-1467327440);
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__52529) : state.call(null,G__52529));
})())], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"widths","widths",-1467327440),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52516_SHARP_){
return p1__52516_SHARP_.x2;
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(shapes.core.bbox,cljs.core.butlast(shapes__$1)))], null),cljs.core.reverse(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,shapes__$1)))));
}
});

shapes.core.beside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shapes.core.beside.cljs$lang$applyTo = (function (seq52517){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52517));
});

/**
 * Return `shapes` with their positions adjusted so they're stacked above one another.
 */
shapes.core.above = (function shapes$core$above(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52914 = arguments.length;
var i__4731__auto___52915 = (0);
while(true){
if((i__4731__auto___52915 < len__4730__auto___52914)){
args__4736__auto__.push((arguments[i__4731__auto___52915]));

var G__52917 = (i__4731__auto___52915 + (1));
i__4731__auto___52915 = G__52917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shapes.core.above.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shapes.core.above.cljs$core$IFn$_invoke$arity$variadic = (function (shapes__$1){
if(cljs.core.sequential_QMARK_(cljs.core.first(shapes__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(shapes.core.above,cljs.core.first(shapes__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(shapes.core.layer,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__52540 = new cljs.core.Keyword(null,"out","out",-910545517);
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__52540) : state.call(null,G__52540));
})(),shapes.core.position(((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()),(((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,new cljs.core.Keyword(null,"heights","heights",-1501719023).cljs$core$IFn$_invoke$arity$1(state))),shape)),new cljs.core.Keyword(null,"heights","heights",-1501719023),cljs.core.butlast((function (){var G__52541 = new cljs.core.Keyword(null,"heights","heights",-1501719023);
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__52541) : state.call(null,G__52541));
})())], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"heights","heights",-1501719023),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52530_SHARP_){
return p1__52530_SHARP_.y2;
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(shapes.core.bbox,cljs.core.butlast(shapes__$1)))], null),cljs.core.reverse(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,shapes__$1))))));
}
});

shapes.core.above.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shapes.core.above.cljs$lang$applyTo = (function (seq52533){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52533));
});

shapes.core.shape__GT_vector = (function shapes$core$shape__GT_vector(shape){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape.kind,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52550){
var vec__52551 = p__52550;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(1),null);
if((v == null)){
return m;
} else {
if(cljs.core.truth_((function (){var fexpr__52555 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bbox","bbox",678077025),null,new cljs.core.Keyword(null,"kind","kind",-717265803),null], null), null);
return (fexpr__52555.cljs$core$IFn$_invoke$arity$1 ? fexpr__52555.cljs$core$IFn$_invoke$arity$1(k) : fexpr__52555.call(null,k));
})())){
return m;
} else {
var G__52557 = k;
var G__52557__$1 = (((G__52557 instanceof cljs.core.Keyword))?G__52557.fqn:null);
switch (G__52557__$1) {
case "points":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",shape.points)));

break;
case "rotate":
var vec__52560 = shapes.core.center_point(shape);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52560,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52560,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape.rotate),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''));

break;
default:
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);

}

}
}
}),cljs.core.PersistentArrayMap.EMPTY,shape),shape.text], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(shapes.core.shape__GT_vector,shape.children));
});
shapes.core.to_hiccup = (function shapes$core$to_hiccup(shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape.kind,new cljs.core.Keyword(null,"svg","svg",856789142))){
return shapes.core.shape__GT_vector(shape);
} else {
var bbox = shapes.core.bbox(shape);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__52568 = bbox.x2;
return Math.ceil(G__52568);
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var G__52570 = bbox.y2;
return Math.ceil(G__52570);
})()], null),shapes.core.shape__GT_vector(shape)], null);
}
});
shapes.core.rgb = (function shapes$core$rgb(red,green,blue){

shapes.core.assert_number_range("red must be a number between 0 and 255!",(0),(255),red);

shapes.core.assert_number_range("green must be a number between 0 and 255!",(0),(255),green);

shapes.core.assert_number_range("blue must be a number between 0 and 255!",(0),(255),blue);

return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(red),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(green),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blue),")"].join('');
});
shapes.core.rgba = (function shapes$core$rgba(red,green,blue,alpha){

shapes.core.assert_number_range("red must be a number between 0 and 255!",(0),(255),red);

shapes.core.assert_number_range("green must be a number between 0 and 255!",(0),(255),green);

shapes.core.assert_number_range("blue must be a number between 0 and 255!",(0),(255),blue);

shapes.core.assert_number_range("alpha must be a number between 0 and 1.0!",(0),1.0,alpha);

return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(red),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(green),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blue),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),")"].join('');
});
/**
 * Returns a color of `hue` (a number between 0-359 representing an angle on the color wheel), `saturation` percentage and `lightness` percentage.
 */
shapes.core.hsl = (function shapes$core$hsl(hue,saturation,lightness){
shapes.core.assert_number_range("hue must be a number between 0 and 359!",(0),(359),hue);

shapes.core.assert_number_range("saturation must be a number between 0 and 100!",(0),(100),saturation);

shapes.core.assert_number_range("lightness must be a number between 0 and 100!",(0),(100),lightness);

return ["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness),"%)"].join('');
});
/**
 * Returns a color of `hue` (a number between 0-359 representing an angle on the color wheel)/`saturation` (percentage)/`lightness` (percentage)/`alpha` (0.0-1.0).
 */
shapes.core.hsla = (function shapes$core$hsla(hue,saturation,lightness,alpha){
shapes.core.assert_number_range("hue must be a number between 0 and 359!",(0),(359),hue);

shapes.core.assert_number_range("saturation must be a number between 0 and 100!",(0),(100),saturation);

shapes.core.assert_number_range("lightness must be a number between 0 and 100!",(0),(100),lightness);

shapes.core.assert_number_range("alpha must be a number between 0 and 1.0!",(0),1.0,alpha);

return ["hsla(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness),"%, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),")"].join('');
});
/**
 * Rescales value from range [old-min, old-max] to [new-min, new-max]
 */
shapes.core.rescale = (function shapes$core$rescale(value,old_min,old_max,new_min,new_max){
shapes.core.assert_number("value must be a number!",value);

shapes.core.assert_number("old-min must be a number!",old_min);

shapes.core.assert_number("old-max must be a number!",old_max);

shapes.core.assert_number("new-min must be a number!",new_min);

shapes.core.assert_number("new-max must be a number!",new_max);

var old_spread = (old_max - old_min);
var new_spread = (new_max - new_min);
return (((value - old_min) * (new_spread / old_spread)) + new_min);
});
/**
 * Recognized SVG color keyword names, mapped to their RGB value.
 */
shapes.core.color_swatches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__52589){
var vec__52590 = p__52589;
var color_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52590,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52590,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_name,shapes.core.colorize(color_name,shapes.core.square((25)))], null);
}),cljs.core.PersistentHashMap.fromArrays(["springgreen","aqua","blue","olivedrab","lightskyblue","greenyellow","ivory","navajowhite","cyan","mediumturquoise","darkslateblue","lawngreen","saddlebrown","white","silver","purple","gainsboro","plum","midnightblue","magenta","paleturquoise","hotpink","mediumorchid","gold","powderblue","papayawhip","bisque","salmon","forestgreen","blanchedalmond","grey","crimson","darkturquoise","steelblue","mediumvioletred","aquamarine","darkgoldenrod","orange","darkgray","lime","cornflowerblue","aliceblue","lightgoldenrodyellow","lemonchiffon","lightsalmon","deepskyblue","lightgreen","palegoldenrod","darkred","violet","gray","goldenrod","darksalmon","skyblue","darkviolet","fuchsia","lightcoral","moccasin","darkgreen","lightyellow","lavenderblush","sienna","burlywood","ghostwhite","coral","linen","lightslategray","azure","darkolivegreen","floralwhite","yellow","beige","wheat","slategray","darkmagenta","darkcyan","dodgerblue","mediumseagreen","darkgrey","mediumblue","pink","mistyrose","teal","olive","navy","darkkhaki","green","darkblue","red","maroon","limegreen","brown","seashell","chocolate","antiquewhite","tan","seagreen","palevioletred","rosybrown","cornsilk","lavender","mediumpurple","black","snow","lightseagreen","palegreen","deeppink","dimgray","blueviolet","cadetblue","slateblue","mediumspringgreen","lightpink","firebrick","dimgrey","khaki","royalblue","sandybrown","orangered","darkslategray","orchid","indianred","darkorchid","honeydew","oldlace","whitesmoke","mediumaquamarine","lightgrey","peru","chartreuse","lightcyan","lightblue","tomato","mintcream","peachpuff","thistle","lightsteelblue","mediumslateblue","darkslategrey","turquoise","slategrey","indigo","lightslategrey","darkorange","yellowgreen","lightgray","darkseagreen"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(127)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(107),(142),(35)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(135),(206),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(173),(255),(47)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(240)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(222),(173)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(72),(209),(204)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(72),(61),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(252),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(69),(19)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(192),(192),(192)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(0),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),(220),(220)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(221),(160),(221)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(25),(112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(175),(238),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(105),(180)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(186),(85),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(215),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(176),(224),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(239),(213)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(228),(196)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(128),(114)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(34),(139),(34)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(235),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),(20),(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(206),(209)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(70),(130),(180)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(199),(21),(133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127),(255),(212)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(184),(134),(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(165),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(169),(169),(169)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(149),(237)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(248),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(210)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(250),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(160),(122)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(191),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(144),(238),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(238),(232),(170)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(238),(130),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(218),(165),(32)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(233),(150),(122)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(135),(206),(235)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(148),(0),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(228),(181)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(224)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(240),(245)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(160),(82),(45)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(222),(184),(135)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(248),(248),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(127),(80)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(240),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(119),(136),(153)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(85),(107),(47)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(250),(240)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(245),(220)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(222),(179)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(128),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(0),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(139),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(144),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(179),(113)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(169),(169),(169)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(192),(203)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(228),(225)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(189),(183),(107)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(205),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(42),(42)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(245),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(105),(30)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(235),(215)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(180),(140)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(139),(87)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(219),(112),(147)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(188),(143),(143)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(248),(220)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(230),(230),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(147),(112),(219)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(250),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(178),(170)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(152),(251),(152)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(20),(147)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(105),(105),(105)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(138),(43),(226)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),(158),(160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(106),(90),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(250),(154)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(182),(193)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(178),(34),(34)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(105),(105),(105)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(230),(140)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(65),(105),(225)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(244),(164),(96)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(69),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(47),(79),(79)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(218),(112),(214)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(205),(92),(92)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(153),(50),(204)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(255),(240)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(253),(245),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(245),(245)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(205),(170)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(211),(211),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(205),(133),(63)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(224),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(173),(216),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(99),(71)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(255),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(218),(185)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(216),(191),(216)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(176),(196),(222)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),(104),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(47),(79),(79)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(224),(208)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(128),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(75),(0),(130)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(119),(136),(153)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(140),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(154),(205),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(211),(211),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(143),(188),(143)], null)])));
/**
 * Set of valid color names
 */
shapes.core.color_names = cljs.core.set(cljs.core.keys(shapes.core.color_swatches));
/**
 * Subset of `color-names` whose names include the given String `s`
 */
shapes.core.colors_named = (function shapes$core$colors_named(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,shapes.core.colorize(c,shapes.core.square((25)))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (cn){
return clojure.string.includes_QMARK_(cn,s);
}),shapes.core.color_names)));
});
shapes.core.value_to_cell_BANG_ = (function shapes$core$value_to_cell_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52979 = arguments.length;
var i__4731__auto___52980 = (0);
while(true){
if((i__4731__auto___52980 < len__4730__auto___52979)){
args__4736__auto__.push((arguments[i__4731__auto___52980]));

var G__52981 = (i__4731__auto___52980 + (1));
i__4731__auto___52980 = G__52981;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shapes.core.value_to_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shapes.core.value_to_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (the_cell,cell_path){
return (function (event){
var v = parseFloat(event.target.value);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(the_cell,(cljs.core.truth_(cell_path)?((function (v){
return (function (p1__52604_SHARP_){
return cljs.core.assoc_in(p1__52604_SHARP_,cell_path,v);
});})(v))
:((function (v){
return (function (){
return cljs.core.identity(v);
});})(v))
));
});
});

shapes.core.value_to_cell_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shapes.core.value_to_cell_BANG_.cljs$lang$applyTo = (function (seq52605){
var G__52606 = cljs.core.first(seq52605);
var seq52605__$1 = cljs.core.next(seq52605);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52606,seq52605__$1);
});

