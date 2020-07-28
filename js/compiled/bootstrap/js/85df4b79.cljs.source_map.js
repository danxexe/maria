goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__42444){
var vec__42446 = p__42444;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42446,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__42454 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__42461 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42461,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42461,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42461,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42461,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42461,(4),null);
var vec__42464 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__42473 = segmap;
var map__42473__$1 = (((((!((map__42473 == null))))?(((((map__42473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42473):map__42473);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__42473,map__42473__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__42473,map__42473__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__42473,map__42473__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__42473,map__42473__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__42473,map__42473__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__42473,map__42473__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__42488 = arguments.length;
switch (G__42488) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__42505 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__44177 = cljs.core.next(segs__$1);
var G__44178 = nrelseg;
var G__44179 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__44177;
relseg__$1 = G__44178;
result__$1 = G__44179;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(1),null);
var G__44181 = (gline + (1));
var G__44182 = cljs.core.next(lines__$1);
var G__44183 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__44184 = result__$1;
gline = G__44181;
lines__$1 = G__44182;
relseg = G__44183;
result = G__44184;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__42519 = segmap;
var map__42519__$1 = (((((!((map__42519 == null))))?(((((map__42519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42519):map__42519);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__42519,map__42519__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__42519,map__42519__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__42513_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__42513_SHARP_,d__$1);
});})(map__42519,map__42519__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__42519,map__42519__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__42536 = arguments.length;
switch (G__42536) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__42546 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__44207 = cljs.core.next(segs__$1);
var G__44208 = nrelseg;
var G__44209 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__44207;
relseg__$1 = G__44208;
result__$1 = G__44209;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42546,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42546,(1),null);
var G__44210 = (gline + (1));
var G__44211 = cljs.core.next(lines__$1);
var G__44212 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__44213 = result__$1;
gline = G__44210;
lines__$1 = G__44211;
relseg = G__44212;
result = G__44213;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__42555){
var vec__42556 = p__42555;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42556,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42556,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42556,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42556,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42556,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__42559){
var vec__42561 = p__42559;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(4),null);
var seg = vec__42561;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__42561,gcol,sidx,line,col,name,seg,relseg){
return (function (p__42568){
var vec__42573 = p__42568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__42561,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__42589 = cljs.core.seq(infos);
var chunk__42590 = null;
var count__42591 = (0);
var i__42592 = (0);
while(true){
if((i__42592 < count__42591)){
var info = chunk__42590.cljs$core$IIndexed$_nth$arity$2(null,i__42592);
var segv_44230 = info__GT_segv(info,source_idx,line,col);
var gline_44231 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_44232 = cljs.core.count(cljs.core.deref(lines));
if((gline_44231 > (lc_44232 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__42589,chunk__42590,count__42591,i__42592,segv_44230,gline_44231,lc_44232,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_44231 - (lc_44232 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_44230], null));
});})(seq__42589,chunk__42590,count__42591,i__42592,segv_44230,gline_44231,lc_44232,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__42589,chunk__42590,count__42591,i__42592,segv_44230,gline_44231,lc_44232,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44231], null),cljs.core.conj,segv_44230);
});})(seq__42589,chunk__42590,count__42591,i__42592,segv_44230,gline_44231,lc_44232,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__44237 = seq__42589;
var G__44238 = chunk__42590;
var G__44239 = count__42591;
var G__44240 = (i__42592 + (1));
seq__42589 = G__44237;
chunk__42590 = G__44238;
count__42591 = G__44239;
i__42592 = G__44240;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42589);
if(temp__5720__auto__){
var seq__42589__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42589__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42589__$1);
var G__44241 = cljs.core.chunk_rest(seq__42589__$1);
var G__44242 = c__4550__auto__;
var G__44243 = cljs.core.count(c__4550__auto__);
var G__44244 = (0);
seq__42589 = G__44241;
chunk__42590 = G__44242;
count__42591 = G__44243;
i__42592 = G__44244;
continue;
} else {
var info = cljs.core.first(seq__42589__$1);
var segv_44245 = info__GT_segv(info,source_idx,line,col);
var gline_44246 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_44247 = cljs.core.count(cljs.core.deref(lines));
if((gline_44246 > (lc_44247 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__42589,chunk__42590,count__42591,i__42592,segv_44245,gline_44246,lc_44247,info,seq__42589__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_44246 - (lc_44247 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_44245], null));
});})(seq__42589,chunk__42590,count__42591,i__42592,segv_44245,gline_44246,lc_44247,info,seq__42589__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__42589,chunk__42590,count__42591,i__42592,segv_44245,gline_44246,lc_44247,info,seq__42589__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44246], null),cljs.core.conj,segv_44245);
});})(seq__42589,chunk__42590,count__42591,i__42592,segv_44245,gline_44246,lc_44247,info,seq__42589__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__44253 = cljs.core.next(seq__42589__$1);
var G__44254 = null;
var G__44255 = (0);
var G__44256 = (0);
seq__42589 = G__44253;
chunk__42590 = G__44254;
count__42591 = G__44255;
i__42592 = G__44256;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__42598_44257 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__42599_44258 = null;
var count__42600_44259 = (0);
var i__42601_44260 = (0);
while(true){
if((i__42601_44260 < count__42600_44259)){
var vec__42865_44263 = chunk__42599_44258.cljs$core$IIndexed$_nth$arity$2(null,i__42601_44260);
var source_idx_44264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42865_44263,(0),null);
var vec__42868_44265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42865_44263,(1),null);
var __44266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868_44265,(0),null);
var lines_44267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868_44265,(1),null);
var seq__42872_44268 = cljs.core.seq(lines_44267__$1);
var chunk__42873_44269 = null;
var count__42874_44270 = (0);
var i__42875_44271 = (0);
while(true){
if((i__42875_44271 < count__42874_44270)){
var vec__42953_44272 = chunk__42873_44269.cljs$core$IIndexed$_nth$arity$2(null,i__42875_44271);
var line_44273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953_44272,(0),null);
var cols_44274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953_44272,(1),null);
var seq__42956_44275 = cljs.core.seq(cols_44274);
var chunk__42957_44276 = null;
var count__42958_44277 = (0);
var i__42959_44278 = (0);
while(true){
if((i__42959_44278 < count__42958_44277)){
var vec__42969_44279 = chunk__42957_44276.cljs$core$IIndexed$_nth$arity$2(null,i__42959_44278);
var col_44280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42969_44279,(0),null);
var infos_44281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42969_44279,(1),null);
encode_cols(infos_44281,source_idx_44264,line_44273,col_44280);


var G__44284 = seq__42956_44275;
var G__44285 = chunk__42957_44276;
var G__44286 = count__42958_44277;
var G__44287 = (i__42959_44278 + (1));
seq__42956_44275 = G__44284;
chunk__42957_44276 = G__44285;
count__42958_44277 = G__44286;
i__42959_44278 = G__44287;
continue;
} else {
var temp__5720__auto___44294 = cljs.core.seq(seq__42956_44275);
if(temp__5720__auto___44294){
var seq__42956_44295__$1 = temp__5720__auto___44294;
if(cljs.core.chunked_seq_QMARK_(seq__42956_44295__$1)){
var c__4550__auto___44296 = cljs.core.chunk_first(seq__42956_44295__$1);
var G__44297 = cljs.core.chunk_rest(seq__42956_44295__$1);
var G__44298 = c__4550__auto___44296;
var G__44299 = cljs.core.count(c__4550__auto___44296);
var G__44300 = (0);
seq__42956_44275 = G__44297;
chunk__42957_44276 = G__44298;
count__42958_44277 = G__44299;
i__42959_44278 = G__44300;
continue;
} else {
var vec__42976_44301 = cljs.core.first(seq__42956_44295__$1);
var col_44302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42976_44301,(0),null);
var infos_44303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42976_44301,(1),null);
encode_cols(infos_44303,source_idx_44264,line_44273,col_44302);


var G__44304 = cljs.core.next(seq__42956_44295__$1);
var G__44305 = null;
var G__44306 = (0);
var G__44307 = (0);
seq__42956_44275 = G__44304;
chunk__42957_44276 = G__44305;
count__42958_44277 = G__44306;
i__42959_44278 = G__44307;
continue;
}
} else {
}
}
break;
}


var G__44308 = seq__42872_44268;
var G__44309 = chunk__42873_44269;
var G__44310 = count__42874_44270;
var G__44311 = (i__42875_44271 + (1));
seq__42872_44268 = G__44308;
chunk__42873_44269 = G__44309;
count__42874_44270 = G__44310;
i__42875_44271 = G__44311;
continue;
} else {
var temp__5720__auto___44312 = cljs.core.seq(seq__42872_44268);
if(temp__5720__auto___44312){
var seq__42872_44315__$1 = temp__5720__auto___44312;
if(cljs.core.chunked_seq_QMARK_(seq__42872_44315__$1)){
var c__4550__auto___44316 = cljs.core.chunk_first(seq__42872_44315__$1);
var G__44317 = cljs.core.chunk_rest(seq__42872_44315__$1);
var G__44318 = c__4550__auto___44316;
var G__44319 = cljs.core.count(c__4550__auto___44316);
var G__44320 = (0);
seq__42872_44268 = G__44317;
chunk__42873_44269 = G__44318;
count__42874_44270 = G__44319;
i__42875_44271 = G__44320;
continue;
} else {
var vec__42979_44321 = cljs.core.first(seq__42872_44315__$1);
var line_44322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42979_44321,(0),null);
var cols_44323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42979_44321,(1),null);
var seq__42982_44324 = cljs.core.seq(cols_44323);
var chunk__42983_44325 = null;
var count__42984_44326 = (0);
var i__42985_44327 = (0);
while(true){
if((i__42985_44327 < count__42984_44326)){
var vec__43011_44328 = chunk__42983_44325.cljs$core$IIndexed$_nth$arity$2(null,i__42985_44327);
var col_44329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43011_44328,(0),null);
var infos_44330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43011_44328,(1),null);
encode_cols(infos_44330,source_idx_44264,line_44322,col_44329);


var G__44331 = seq__42982_44324;
var G__44332 = chunk__42983_44325;
var G__44333 = count__42984_44326;
var G__44334 = (i__42985_44327 + (1));
seq__42982_44324 = G__44331;
chunk__42983_44325 = G__44332;
count__42984_44326 = G__44333;
i__42985_44327 = G__44334;
continue;
} else {
var temp__5720__auto___44335__$1 = cljs.core.seq(seq__42982_44324);
if(temp__5720__auto___44335__$1){
var seq__42982_44336__$1 = temp__5720__auto___44335__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42982_44336__$1)){
var c__4550__auto___44337 = cljs.core.chunk_first(seq__42982_44336__$1);
var G__44338 = cljs.core.chunk_rest(seq__42982_44336__$1);
var G__44339 = c__4550__auto___44337;
var G__44340 = cljs.core.count(c__4550__auto___44337);
var G__44341 = (0);
seq__42982_44324 = G__44338;
chunk__42983_44325 = G__44339;
count__42984_44326 = G__44340;
i__42985_44327 = G__44341;
continue;
} else {
var vec__43020_44342 = cljs.core.first(seq__42982_44336__$1);
var col_44343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43020_44342,(0),null);
var infos_44344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43020_44342,(1),null);
encode_cols(infos_44344,source_idx_44264,line_44322,col_44343);


var G__44345 = cljs.core.next(seq__42982_44336__$1);
var G__44346 = null;
var G__44347 = (0);
var G__44348 = (0);
seq__42982_44324 = G__44345;
chunk__42983_44325 = G__44346;
count__42984_44326 = G__44347;
i__42985_44327 = G__44348;
continue;
}
} else {
}
}
break;
}


var G__44349 = cljs.core.next(seq__42872_44315__$1);
var G__44350 = null;
var G__44351 = (0);
var G__44352 = (0);
seq__42872_44268 = G__44349;
chunk__42873_44269 = G__44350;
count__42874_44270 = G__44351;
i__42875_44271 = G__44352;
continue;
}
} else {
}
}
break;
}


var G__44353 = seq__42598_44257;
var G__44354 = chunk__42599_44258;
var G__44355 = count__42600_44259;
var G__44356 = (i__42601_44260 + (1));
seq__42598_44257 = G__44353;
chunk__42599_44258 = G__44354;
count__42600_44259 = G__44355;
i__42601_44260 = G__44356;
continue;
} else {
var temp__5720__auto___44357 = cljs.core.seq(seq__42598_44257);
if(temp__5720__auto___44357){
var seq__42598_44361__$1 = temp__5720__auto___44357;
if(cljs.core.chunked_seq_QMARK_(seq__42598_44361__$1)){
var c__4550__auto___44362 = cljs.core.chunk_first(seq__42598_44361__$1);
var G__44363 = cljs.core.chunk_rest(seq__42598_44361__$1);
var G__44364 = c__4550__auto___44362;
var G__44365 = cljs.core.count(c__4550__auto___44362);
var G__44366 = (0);
seq__42598_44257 = G__44363;
chunk__42599_44258 = G__44364;
count__42600_44259 = G__44365;
i__42601_44260 = G__44366;
continue;
} else {
var vec__43023_44367 = cljs.core.first(seq__42598_44361__$1);
var source_idx_44368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43023_44367,(0),null);
var vec__43026_44369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43023_44367,(1),null);
var __44370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43026_44369,(0),null);
var lines_44371__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43026_44369,(1),null);
var seq__43029_44372 = cljs.core.seq(lines_44371__$1);
var chunk__43030_44373 = null;
var count__43031_44374 = (0);
var i__43032_44375 = (0);
while(true){
if((i__43032_44375 < count__43031_44374)){
var vec__43076_44376 = chunk__43030_44373.cljs$core$IIndexed$_nth$arity$2(null,i__43032_44375);
var line_44377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43076_44376,(0),null);
var cols_44378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43076_44376,(1),null);
var seq__43079_44379 = cljs.core.seq(cols_44378);
var chunk__43080_44380 = null;
var count__43081_44381 = (0);
var i__43082_44382 = (0);
while(true){
if((i__43082_44382 < count__43081_44381)){
var vec__43090_44390 = chunk__43080_44380.cljs$core$IIndexed$_nth$arity$2(null,i__43082_44382);
var col_44391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43090_44390,(0),null);
var infos_44392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43090_44390,(1),null);
encode_cols(infos_44392,source_idx_44368,line_44377,col_44391);


var G__44393 = seq__43079_44379;
var G__44394 = chunk__43080_44380;
var G__44395 = count__43081_44381;
var G__44396 = (i__43082_44382 + (1));
seq__43079_44379 = G__44393;
chunk__43080_44380 = G__44394;
count__43081_44381 = G__44395;
i__43082_44382 = G__44396;
continue;
} else {
var temp__5720__auto___44397__$1 = cljs.core.seq(seq__43079_44379);
if(temp__5720__auto___44397__$1){
var seq__43079_44398__$1 = temp__5720__auto___44397__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43079_44398__$1)){
var c__4550__auto___44399 = cljs.core.chunk_first(seq__43079_44398__$1);
var G__44400 = cljs.core.chunk_rest(seq__43079_44398__$1);
var G__44401 = c__4550__auto___44399;
var G__44402 = cljs.core.count(c__4550__auto___44399);
var G__44403 = (0);
seq__43079_44379 = G__44400;
chunk__43080_44380 = G__44401;
count__43081_44381 = G__44402;
i__43082_44382 = G__44403;
continue;
} else {
var vec__43093_44404 = cljs.core.first(seq__43079_44398__$1);
var col_44405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43093_44404,(0),null);
var infos_44406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43093_44404,(1),null);
encode_cols(infos_44406,source_idx_44368,line_44377,col_44405);


var G__44407 = cljs.core.next(seq__43079_44398__$1);
var G__44408 = null;
var G__44409 = (0);
var G__44410 = (0);
seq__43079_44379 = G__44407;
chunk__43080_44380 = G__44408;
count__43081_44381 = G__44409;
i__43082_44382 = G__44410;
continue;
}
} else {
}
}
break;
}


var G__44412 = seq__43029_44372;
var G__44413 = chunk__43030_44373;
var G__44414 = count__43031_44374;
var G__44415 = (i__43032_44375 + (1));
seq__43029_44372 = G__44412;
chunk__43030_44373 = G__44413;
count__43031_44374 = G__44414;
i__43032_44375 = G__44415;
continue;
} else {
var temp__5720__auto___44416__$1 = cljs.core.seq(seq__43029_44372);
if(temp__5720__auto___44416__$1){
var seq__43029_44417__$1 = temp__5720__auto___44416__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43029_44417__$1)){
var c__4550__auto___44420 = cljs.core.chunk_first(seq__43029_44417__$1);
var G__44421 = cljs.core.chunk_rest(seq__43029_44417__$1);
var G__44422 = c__4550__auto___44420;
var G__44423 = cljs.core.count(c__4550__auto___44420);
var G__44424 = (0);
seq__43029_44372 = G__44421;
chunk__43030_44373 = G__44422;
count__43031_44374 = G__44423;
i__43032_44375 = G__44424;
continue;
} else {
var vec__43098_44425 = cljs.core.first(seq__43029_44417__$1);
var line_44426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_44425,(0),null);
var cols_44427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_44425,(1),null);
var seq__43101_44428 = cljs.core.seq(cols_44427);
var chunk__43102_44429 = null;
var count__43103_44430 = (0);
var i__43104_44431 = (0);
while(true){
if((i__43104_44431 < count__43103_44430)){
var vec__43116_44432 = chunk__43102_44429.cljs$core$IIndexed$_nth$arity$2(null,i__43104_44431);
var col_44433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43116_44432,(0),null);
var infos_44434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43116_44432,(1),null);
encode_cols(infos_44434,source_idx_44368,line_44426,col_44433);


var G__44435 = seq__43101_44428;
var G__44436 = chunk__43102_44429;
var G__44437 = count__43103_44430;
var G__44438 = (i__43104_44431 + (1));
seq__43101_44428 = G__44435;
chunk__43102_44429 = G__44436;
count__43103_44430 = G__44437;
i__43104_44431 = G__44438;
continue;
} else {
var temp__5720__auto___44439__$2 = cljs.core.seq(seq__43101_44428);
if(temp__5720__auto___44439__$2){
var seq__43101_44440__$1 = temp__5720__auto___44439__$2;
if(cljs.core.chunked_seq_QMARK_(seq__43101_44440__$1)){
var c__4550__auto___44441 = cljs.core.chunk_first(seq__43101_44440__$1);
var G__44442 = cljs.core.chunk_rest(seq__43101_44440__$1);
var G__44443 = c__4550__auto___44441;
var G__44444 = cljs.core.count(c__4550__auto___44441);
var G__44445 = (0);
seq__43101_44428 = G__44442;
chunk__43102_44429 = G__44443;
count__43103_44430 = G__44444;
i__43104_44431 = G__44445;
continue;
} else {
var vec__43124_44446 = cljs.core.first(seq__43101_44440__$1);
var col_44447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43124_44446,(0),null);
var infos_44448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43124_44446,(1),null);
encode_cols(infos_44448,source_idx_44368,line_44426,col_44447);


var G__44449 = cljs.core.next(seq__43101_44440__$1);
var G__44450 = null;
var G__44451 = (0);
var G__44452 = (0);
seq__43101_44428 = G__44449;
chunk__43102_44429 = G__44450;
count__43103_44430 = G__44451;
i__43104_44431 = G__44452;
continue;
}
} else {
}
}
break;
}


var G__44453 = cljs.core.next(seq__43029_44417__$1);
var G__44454 = null;
var G__44455 = (0);
var G__44456 = (0);
seq__43029_44372 = G__44453;
chunk__43030_44373 = G__44454;
count__43031_44374 = G__44455;
i__43032_44375 = G__44456;
continue;
}
} else {
}
}
break;
}


var G__44457 = cljs.core.next(seq__42598_44361__$1);
var G__44458 = null;
var G__44459 = (0);
var G__44460 = (0);
seq__42598_44257 = G__44457;
chunk__42599_44258 = G__44458;
count__42600_44259 = G__44459;
i__42601_44260 = G__44460;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__43129 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42583_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42583_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42584_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__42584_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42585_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__42585_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__43133 = G__43129;
var G__43138_44472 = G__43133;
var G__43139_44473 = "sourcesContent";
var G__43140_44474 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__43138_44472,G__43139_44473,G__43140_44474);

return G__43133;
} else {
return G__43129;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__43149 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43149,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43149,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__43154 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43154,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43154,(1),null);
var G__44483 = cljs.core.next(col_map_seq);
var G__44484 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__43154,col,infos,vec__43149,line,col_map){
return (function (v,p__43165){
var map__43166 = p__43165;
var map__43166__$1 = (((((!((map__43166 == null))))?(((((map__43166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43166):map__43166);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43166__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43166__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__43154,col,infos,vec__43149,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__44483;
new_cols = G__44484;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__44491 = cljs.core.next(line_map_seq);
var G__44492 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__44491;
new_lines = G__44492;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__43176_44498 = cljs.core.seq(reverse_map);
var chunk__43177_44499 = null;
var count__43178_44500 = (0);
var i__43179_44501 = (0);
while(true){
if((i__43179_44501 < count__43178_44500)){
var vec__43550_44503 = chunk__43177_44499.cljs$core$IIndexed$_nth$arity$2(null,i__43179_44501);
var line_44504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43550_44503,(0),null);
var columns_44505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43550_44503,(1),null);
var seq__43553_44508 = cljs.core.seq(columns_44505);
var chunk__43554_44509 = null;
var count__43555_44510 = (0);
var i__43556_44511 = (0);
while(true){
if((i__43556_44511 < count__43555_44510)){
var vec__43697_44512 = chunk__43554_44509.cljs$core$IIndexed$_nth$arity$2(null,i__43556_44511);
var column_44513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43697_44512,(0),null);
var column_info_44514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43697_44512,(1),null);
var seq__43702_44518 = cljs.core.seq(column_info_44514);
var chunk__43703_44519 = null;
var count__43704_44520 = (0);
var i__43705_44521 = (0);
while(true){
if((i__43705_44521 < count__43704_44520)){
var map__43726_44522 = chunk__43703_44519.cljs$core$IIndexed$_nth$arity$2(null,i__43705_44521);
var map__43726_44523__$1 = (((((!((map__43726_44522 == null))))?(((((map__43726_44522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43726_44522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43726_44522):map__43726_44522);
var gline_44524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43726_44523__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43726_44523__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43726_44523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44524], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__43702_44518,chunk__43703_44519,count__43704_44520,i__43705_44521,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43726_44522,map__43726_44523__$1,gline_44524,gcol_44525,name_44526,vec__43697_44512,column_44513,column_info_44514,vec__43550_44503,line_44504,columns_44505,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44525], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44504,new cljs.core.Keyword(null,"col","col",-1959363084),column_44513,new cljs.core.Keyword(null,"name","name",1843675177),name_44526], null));
});})(seq__43702_44518,chunk__43703_44519,count__43704_44520,i__43705_44521,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43726_44522,map__43726_44523__$1,gline_44524,gcol_44525,name_44526,vec__43697_44512,column_44513,column_info_44514,vec__43550_44503,line_44504,columns_44505,inverted))
,cljs.core.sorted_map()));


var G__44542 = seq__43702_44518;
var G__44543 = chunk__43703_44519;
var G__44544 = count__43704_44520;
var G__44545 = (i__43705_44521 + (1));
seq__43702_44518 = G__44542;
chunk__43703_44519 = G__44543;
count__43704_44520 = G__44544;
i__43705_44521 = G__44545;
continue;
} else {
var temp__5720__auto___44546 = cljs.core.seq(seq__43702_44518);
if(temp__5720__auto___44546){
var seq__43702_44548__$1 = temp__5720__auto___44546;
if(cljs.core.chunked_seq_QMARK_(seq__43702_44548__$1)){
var c__4550__auto___44549 = cljs.core.chunk_first(seq__43702_44548__$1);
var G__44550 = cljs.core.chunk_rest(seq__43702_44548__$1);
var G__44551 = c__4550__auto___44549;
var G__44552 = cljs.core.count(c__4550__auto___44549);
var G__44553 = (0);
seq__43702_44518 = G__44550;
chunk__43703_44519 = G__44551;
count__43704_44520 = G__44552;
i__43705_44521 = G__44553;
continue;
} else {
var map__43728_44556 = cljs.core.first(seq__43702_44548__$1);
var map__43728_44557__$1 = (((((!((map__43728_44556 == null))))?(((((map__43728_44556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43728_44556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43728_44556):map__43728_44556);
var gline_44558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43728_44557__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43728_44557__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43728_44557__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44558], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__43702_44518,chunk__43703_44519,count__43704_44520,i__43705_44521,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43728_44556,map__43728_44557__$1,gline_44558,gcol_44559,name_44560,seq__43702_44548__$1,temp__5720__auto___44546,vec__43697_44512,column_44513,column_info_44514,vec__43550_44503,line_44504,columns_44505,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44559], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44504,new cljs.core.Keyword(null,"col","col",-1959363084),column_44513,new cljs.core.Keyword(null,"name","name",1843675177),name_44560], null));
});})(seq__43702_44518,chunk__43703_44519,count__43704_44520,i__43705_44521,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43728_44556,map__43728_44557__$1,gline_44558,gcol_44559,name_44560,seq__43702_44548__$1,temp__5720__auto___44546,vec__43697_44512,column_44513,column_info_44514,vec__43550_44503,line_44504,columns_44505,inverted))
,cljs.core.sorted_map()));


var G__44571 = cljs.core.next(seq__43702_44548__$1);
var G__44572 = null;
var G__44573 = (0);
var G__44574 = (0);
seq__43702_44518 = G__44571;
chunk__43703_44519 = G__44572;
count__43704_44520 = G__44573;
i__43705_44521 = G__44574;
continue;
}
} else {
}
}
break;
}


var G__44575 = seq__43553_44508;
var G__44576 = chunk__43554_44509;
var G__44577 = count__43555_44510;
var G__44578 = (i__43556_44511 + (1));
seq__43553_44508 = G__44575;
chunk__43554_44509 = G__44576;
count__43555_44510 = G__44577;
i__43556_44511 = G__44578;
continue;
} else {
var temp__5720__auto___44581 = cljs.core.seq(seq__43553_44508);
if(temp__5720__auto___44581){
var seq__43553_44582__$1 = temp__5720__auto___44581;
if(cljs.core.chunked_seq_QMARK_(seq__43553_44582__$1)){
var c__4550__auto___44583 = cljs.core.chunk_first(seq__43553_44582__$1);
var G__44587 = cljs.core.chunk_rest(seq__43553_44582__$1);
var G__44588 = c__4550__auto___44583;
var G__44589 = cljs.core.count(c__4550__auto___44583);
var G__44590 = (0);
seq__43553_44508 = G__44587;
chunk__43554_44509 = G__44588;
count__43555_44510 = G__44589;
i__43556_44511 = G__44590;
continue;
} else {
var vec__43747_44593 = cljs.core.first(seq__43553_44582__$1);
var column_44594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43747_44593,(0),null);
var column_info_44595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43747_44593,(1),null);
var seq__43751_44598 = cljs.core.seq(column_info_44595);
var chunk__43752_44599 = null;
var count__43753_44600 = (0);
var i__43754_44601 = (0);
while(true){
if((i__43754_44601 < count__43753_44600)){
var map__43799_44602 = chunk__43752_44599.cljs$core$IIndexed$_nth$arity$2(null,i__43754_44601);
var map__43799_44603__$1 = (((((!((map__43799_44602 == null))))?(((((map__43799_44602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43799_44602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43799_44602):map__43799_44602);
var gline_44604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43799_44603__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43799_44603__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43799_44603__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44604], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__43751_44598,chunk__43752_44599,count__43753_44600,i__43754_44601,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43799_44602,map__43799_44603__$1,gline_44604,gcol_44605,name_44606,vec__43747_44593,column_44594,column_info_44595,seq__43553_44582__$1,temp__5720__auto___44581,vec__43550_44503,line_44504,columns_44505,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44605], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44504,new cljs.core.Keyword(null,"col","col",-1959363084),column_44594,new cljs.core.Keyword(null,"name","name",1843675177),name_44606], null));
});})(seq__43751_44598,chunk__43752_44599,count__43753_44600,i__43754_44601,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43799_44602,map__43799_44603__$1,gline_44604,gcol_44605,name_44606,vec__43747_44593,column_44594,column_info_44595,seq__43553_44582__$1,temp__5720__auto___44581,vec__43550_44503,line_44504,columns_44505,inverted))
,cljs.core.sorted_map()));


var G__44611 = seq__43751_44598;
var G__44612 = chunk__43752_44599;
var G__44613 = count__43753_44600;
var G__44614 = (i__43754_44601 + (1));
seq__43751_44598 = G__44611;
chunk__43752_44599 = G__44612;
count__43753_44600 = G__44613;
i__43754_44601 = G__44614;
continue;
} else {
var temp__5720__auto___44616__$1 = cljs.core.seq(seq__43751_44598);
if(temp__5720__auto___44616__$1){
var seq__43751_44617__$1 = temp__5720__auto___44616__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43751_44617__$1)){
var c__4550__auto___44618 = cljs.core.chunk_first(seq__43751_44617__$1);
var G__44619 = cljs.core.chunk_rest(seq__43751_44617__$1);
var G__44620 = c__4550__auto___44618;
var G__44621 = cljs.core.count(c__4550__auto___44618);
var G__44622 = (0);
seq__43751_44598 = G__44619;
chunk__43752_44599 = G__44620;
count__43753_44600 = G__44621;
i__43754_44601 = G__44622;
continue;
} else {
var map__43803_44623 = cljs.core.first(seq__43751_44617__$1);
var map__43803_44624__$1 = (((((!((map__43803_44623 == null))))?(((((map__43803_44623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43803_44623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43803_44623):map__43803_44623);
var gline_44625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43803_44624__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43803_44624__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43803_44624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44625], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__43751_44598,chunk__43752_44599,count__43753_44600,i__43754_44601,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43803_44623,map__43803_44624__$1,gline_44625,gcol_44626,name_44627,seq__43751_44617__$1,temp__5720__auto___44616__$1,vec__43747_44593,column_44594,column_info_44595,seq__43553_44582__$1,temp__5720__auto___44581,vec__43550_44503,line_44504,columns_44505,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44626], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44504,new cljs.core.Keyword(null,"col","col",-1959363084),column_44594,new cljs.core.Keyword(null,"name","name",1843675177),name_44627], null));
});})(seq__43751_44598,chunk__43752_44599,count__43753_44600,i__43754_44601,seq__43553_44508,chunk__43554_44509,count__43555_44510,i__43556_44511,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__43803_44623,map__43803_44624__$1,gline_44625,gcol_44626,name_44627,seq__43751_44617__$1,temp__5720__auto___44616__$1,vec__43747_44593,column_44594,column_info_44595,seq__43553_44582__$1,temp__5720__auto___44581,vec__43550_44503,line_44504,columns_44505,inverted))
,cljs.core.sorted_map()));


var G__44670 = cljs.core.next(seq__43751_44617__$1);
var G__44671 = null;
var G__44672 = (0);
var G__44673 = (0);
seq__43751_44598 = G__44670;
chunk__43752_44599 = G__44671;
count__43753_44600 = G__44672;
i__43754_44601 = G__44673;
continue;
}
} else {
}
}
break;
}


var G__44674 = cljs.core.next(seq__43553_44582__$1);
var G__44675 = null;
var G__44676 = (0);
var G__44677 = (0);
seq__43553_44508 = G__44674;
chunk__43554_44509 = G__44675;
count__43555_44510 = G__44676;
i__43556_44511 = G__44677;
continue;
}
} else {
}
}
break;
}


var G__44680 = seq__43176_44498;
var G__44681 = chunk__43177_44499;
var G__44682 = count__43178_44500;
var G__44683 = (i__43179_44501 + (1));
seq__43176_44498 = G__44680;
chunk__43177_44499 = G__44681;
count__43178_44500 = G__44682;
i__43179_44501 = G__44683;
continue;
} else {
var temp__5720__auto___44684 = cljs.core.seq(seq__43176_44498);
if(temp__5720__auto___44684){
var seq__43176_44685__$1 = temp__5720__auto___44684;
if(cljs.core.chunked_seq_QMARK_(seq__43176_44685__$1)){
var c__4550__auto___44686 = cljs.core.chunk_first(seq__43176_44685__$1);
var G__44687 = cljs.core.chunk_rest(seq__43176_44685__$1);
var G__44688 = c__4550__auto___44686;
var G__44689 = cljs.core.count(c__4550__auto___44686);
var G__44690 = (0);
seq__43176_44498 = G__44687;
chunk__43177_44499 = G__44688;
count__43178_44500 = G__44689;
i__43179_44501 = G__44690;
continue;
} else {
var vec__43820_44691 = cljs.core.first(seq__43176_44685__$1);
var line_44692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43820_44691,(0),null);
var columns_44693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43820_44691,(1),null);
var seq__43841_44697 = cljs.core.seq(columns_44693);
var chunk__43842_44698 = null;
var count__43843_44699 = (0);
var i__43844_44700 = (0);
while(true){
if((i__43844_44700 < count__43843_44699)){
var vec__43994_44703 = chunk__43842_44698.cljs$core$IIndexed$_nth$arity$2(null,i__43844_44700);
var column_44704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43994_44703,(0),null);
var column_info_44705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43994_44703,(1),null);
var seq__43997_44706 = cljs.core.seq(column_info_44705);
var chunk__43998_44707 = null;
var count__43999_44708 = (0);
var i__44000_44709 = (0);
while(true){
if((i__44000_44709 < count__43999_44708)){
var map__44005_44710 = chunk__43998_44707.cljs$core$IIndexed$_nth$arity$2(null,i__44000_44709);
var map__44005_44711__$1 = (((((!((map__44005_44710 == null))))?(((((map__44005_44710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44005_44710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44005_44710):map__44005_44710);
var gline_44712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44005_44711__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44005_44711__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44005_44711__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44712], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__43997_44706,chunk__43998_44707,count__43999_44708,i__44000_44709,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44005_44710,map__44005_44711__$1,gline_44712,gcol_44713,name_44714,vec__43994_44703,column_44704,column_info_44705,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44713], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44692,new cljs.core.Keyword(null,"col","col",-1959363084),column_44704,new cljs.core.Keyword(null,"name","name",1843675177),name_44714], null));
});})(seq__43997_44706,chunk__43998_44707,count__43999_44708,i__44000_44709,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44005_44710,map__44005_44711__$1,gline_44712,gcol_44713,name_44714,vec__43994_44703,column_44704,column_info_44705,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted))
,cljs.core.sorted_map()));


var G__44718 = seq__43997_44706;
var G__44719 = chunk__43998_44707;
var G__44720 = count__43999_44708;
var G__44721 = (i__44000_44709 + (1));
seq__43997_44706 = G__44718;
chunk__43998_44707 = G__44719;
count__43999_44708 = G__44720;
i__44000_44709 = G__44721;
continue;
} else {
var temp__5720__auto___44722__$1 = cljs.core.seq(seq__43997_44706);
if(temp__5720__auto___44722__$1){
var seq__43997_44723__$1 = temp__5720__auto___44722__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43997_44723__$1)){
var c__4550__auto___44724 = cljs.core.chunk_first(seq__43997_44723__$1);
var G__44725 = cljs.core.chunk_rest(seq__43997_44723__$1);
var G__44726 = c__4550__auto___44724;
var G__44727 = cljs.core.count(c__4550__auto___44724);
var G__44728 = (0);
seq__43997_44706 = G__44725;
chunk__43998_44707 = G__44726;
count__43999_44708 = G__44727;
i__44000_44709 = G__44728;
continue;
} else {
var map__44010_44737 = cljs.core.first(seq__43997_44723__$1);
var map__44010_44738__$1 = (((((!((map__44010_44737 == null))))?(((((map__44010_44737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44010_44737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44010_44737):map__44010_44737);
var gline_44739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010_44738__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010_44738__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010_44738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44739], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__43997_44706,chunk__43998_44707,count__43999_44708,i__44000_44709,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44010_44737,map__44010_44738__$1,gline_44739,gcol_44740,name_44741,seq__43997_44723__$1,temp__5720__auto___44722__$1,vec__43994_44703,column_44704,column_info_44705,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44740], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44692,new cljs.core.Keyword(null,"col","col",-1959363084),column_44704,new cljs.core.Keyword(null,"name","name",1843675177),name_44741], null));
});})(seq__43997_44706,chunk__43998_44707,count__43999_44708,i__44000_44709,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44010_44737,map__44010_44738__$1,gline_44739,gcol_44740,name_44741,seq__43997_44723__$1,temp__5720__auto___44722__$1,vec__43994_44703,column_44704,column_info_44705,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted))
,cljs.core.sorted_map()));


var G__44767 = cljs.core.next(seq__43997_44723__$1);
var G__44768 = null;
var G__44769 = (0);
var G__44770 = (0);
seq__43997_44706 = G__44767;
chunk__43998_44707 = G__44768;
count__43999_44708 = G__44769;
i__44000_44709 = G__44770;
continue;
}
} else {
}
}
break;
}


var G__44771 = seq__43841_44697;
var G__44772 = chunk__43842_44698;
var G__44773 = count__43843_44699;
var G__44774 = (i__43844_44700 + (1));
seq__43841_44697 = G__44771;
chunk__43842_44698 = G__44772;
count__43843_44699 = G__44773;
i__43844_44700 = G__44774;
continue;
} else {
var temp__5720__auto___44775__$1 = cljs.core.seq(seq__43841_44697);
if(temp__5720__auto___44775__$1){
var seq__43841_44776__$1 = temp__5720__auto___44775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43841_44776__$1)){
var c__4550__auto___44780 = cljs.core.chunk_first(seq__43841_44776__$1);
var G__44781 = cljs.core.chunk_rest(seq__43841_44776__$1);
var G__44782 = c__4550__auto___44780;
var G__44783 = cljs.core.count(c__4550__auto___44780);
var G__44784 = (0);
seq__43841_44697 = G__44781;
chunk__43842_44698 = G__44782;
count__43843_44699 = G__44783;
i__43844_44700 = G__44784;
continue;
} else {
var vec__44014_44785 = cljs.core.first(seq__43841_44776__$1);
var column_44786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44014_44785,(0),null);
var column_info_44787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44014_44785,(1),null);
var seq__44017_44792 = cljs.core.seq(column_info_44787);
var chunk__44018_44793 = null;
var count__44019_44794 = (0);
var i__44020_44795 = (0);
while(true){
if((i__44020_44795 < count__44019_44794)){
var map__44025_44796 = chunk__44018_44793.cljs$core$IIndexed$_nth$arity$2(null,i__44020_44795);
var map__44025_44797__$1 = (((((!((map__44025_44796 == null))))?(((((map__44025_44796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44025_44796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44025_44796):map__44025_44796);
var gline_44798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44025_44797__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44025_44797__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44025_44797__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44798], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__44017_44792,chunk__44018_44793,count__44019_44794,i__44020_44795,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44025_44796,map__44025_44797__$1,gline_44798,gcol_44799,name_44800,vec__44014_44785,column_44786,column_info_44787,seq__43841_44776__$1,temp__5720__auto___44775__$1,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44799], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44692,new cljs.core.Keyword(null,"col","col",-1959363084),column_44786,new cljs.core.Keyword(null,"name","name",1843675177),name_44800], null));
});})(seq__44017_44792,chunk__44018_44793,count__44019_44794,i__44020_44795,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44025_44796,map__44025_44797__$1,gline_44798,gcol_44799,name_44800,vec__44014_44785,column_44786,column_info_44787,seq__43841_44776__$1,temp__5720__auto___44775__$1,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted))
,cljs.core.sorted_map()));


var G__44806 = seq__44017_44792;
var G__44807 = chunk__44018_44793;
var G__44808 = count__44019_44794;
var G__44809 = (i__44020_44795 + (1));
seq__44017_44792 = G__44806;
chunk__44018_44793 = G__44807;
count__44019_44794 = G__44808;
i__44020_44795 = G__44809;
continue;
} else {
var temp__5720__auto___44810__$2 = cljs.core.seq(seq__44017_44792);
if(temp__5720__auto___44810__$2){
var seq__44017_44812__$1 = temp__5720__auto___44810__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44017_44812__$1)){
var c__4550__auto___44813 = cljs.core.chunk_first(seq__44017_44812__$1);
var G__44816 = cljs.core.chunk_rest(seq__44017_44812__$1);
var G__44817 = c__4550__auto___44813;
var G__44818 = cljs.core.count(c__4550__auto___44813);
var G__44819 = (0);
seq__44017_44792 = G__44816;
chunk__44018_44793 = G__44817;
count__44019_44794 = G__44818;
i__44020_44795 = G__44819;
continue;
} else {
var map__44028_44820 = cljs.core.first(seq__44017_44812__$1);
var map__44028_44821__$1 = (((((!((map__44028_44820 == null))))?(((((map__44028_44820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44028_44820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44028_44820):map__44028_44820);
var gline_44822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44028_44821__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44028_44821__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44028_44821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44822], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__44017_44792,chunk__44018_44793,count__44019_44794,i__44020_44795,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44028_44820,map__44028_44821__$1,gline_44822,gcol_44823,name_44824,seq__44017_44812__$1,temp__5720__auto___44810__$2,vec__44014_44785,column_44786,column_info_44787,seq__43841_44776__$1,temp__5720__auto___44775__$1,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_44823], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44692,new cljs.core.Keyword(null,"col","col",-1959363084),column_44786,new cljs.core.Keyword(null,"name","name",1843675177),name_44824], null));
});})(seq__44017_44792,chunk__44018_44793,count__44019_44794,i__44020_44795,seq__43841_44697,chunk__43842_44698,count__43843_44699,i__43844_44700,seq__43176_44498,chunk__43177_44499,count__43178_44500,i__43179_44501,map__44028_44820,map__44028_44821__$1,gline_44822,gcol_44823,name_44824,seq__44017_44812__$1,temp__5720__auto___44810__$2,vec__44014_44785,column_44786,column_info_44787,seq__43841_44776__$1,temp__5720__auto___44775__$1,vec__43820_44691,line_44692,columns_44693,seq__43176_44685__$1,temp__5720__auto___44684,inverted))
,cljs.core.sorted_map()));


var G__44838 = cljs.core.next(seq__44017_44812__$1);
var G__44839 = null;
var G__44840 = (0);
var G__44841 = (0);
seq__44017_44792 = G__44838;
chunk__44018_44793 = G__44839;
count__44019_44794 = G__44840;
i__44020_44795 = G__44841;
continue;
}
} else {
}
}
break;
}


var G__44844 = cljs.core.next(seq__43841_44776__$1);
var G__44845 = null;
var G__44846 = (0);
var G__44847 = (0);
seq__43841_44697 = G__44844;
chunk__43842_44698 = G__44845;
count__43843_44699 = G__44846;
i__43844_44700 = G__44847;
continue;
}
} else {
}
}
break;
}


var G__44848 = cljs.core.next(seq__43176_44685__$1);
var G__44849 = null;
var G__44850 = (0);
var G__44851 = (0);
seq__43176_44498 = G__44848;
chunk__43177_44499 = G__44849;
count__43178_44500 = G__44850;
i__43179_44501 = G__44851;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
