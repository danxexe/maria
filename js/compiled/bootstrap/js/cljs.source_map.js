goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__58438){
var vec__58440 = p__58438;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(1),null);
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
var vec__58453 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58453,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58453,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58453,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58453,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58453,(4),null);
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
var vec__58458 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(4),null);
var vec__58461 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(4),null);
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
var map__58470 = segmap;
var map__58470__$1 = (((((!((map__58470 == null))))?(((((map__58470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58470):map__58470);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__58470,map__58470__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__58470,map__58470__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__58470,map__58470__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__58470,map__58470__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__58470,map__58470__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__58470,map__58470__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__58481 = arguments.length;
switch (G__58481) {
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
var vec__58503 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__60249 = cljs.core.next(segs__$1);
var G__60250 = nrelseg;
var G__60251 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__60249;
relseg__$1 = G__60250;
result__$1 = G__60251;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(1),null);
var G__60254 = (gline + (1));
var G__60255 = cljs.core.next(lines__$1);
var G__60256 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__60257 = result__$1;
gline = G__60254;
lines__$1 = G__60255;
relseg = G__60256;
result = G__60257;
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
var map__58510 = segmap;
var map__58510__$1 = (((((!((map__58510 == null))))?(((((map__58510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58510):map__58510);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__58510,map__58510__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__58510,map__58510__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__58509_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__58509_SHARP_,d__$1);
});})(map__58510,map__58510__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__58510,map__58510__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__58516 = arguments.length;
switch (G__58516) {
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
var vec__58534 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__60274 = cljs.core.next(segs__$1);
var G__60275 = nrelseg;
var G__60276 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__60274;
relseg__$1 = G__60275;
result__$1 = G__60276;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(1),null);
var G__60279 = (gline + (1));
var G__60280 = cljs.core.next(lines__$1);
var G__60281 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__60282 = result__$1;
gline = G__60279;
lines__$1 = G__60280;
relseg = G__60281;
result = G__60282;
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
return (function (p__58538){
var vec__58539 = p__58538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58539,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58539,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58539,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58539,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58539,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__58542){
var vec__58543 = p__58542;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(4),null);
var seg = vec__58543;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__58543,gcol,sidx,line,col,name,seg,relseg){
return (function (p__58546){
var vec__58547 = p__58546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__58543,gcol,sidx,line,col,name,seg,relseg))
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
var seq__58557 = cljs.core.seq(infos);
var chunk__58558 = null;
var count__58559 = (0);
var i__58560 = (0);
while(true){
if((i__58560 < count__58559)){
var info = chunk__58558.cljs$core$IIndexed$_nth$arity$2(null,i__58560);
var segv_60299 = info__GT_segv(info,source_idx,line,col);
var gline_60300 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_60301 = cljs.core.count(cljs.core.deref(lines));
if((gline_60300 > (lc_60301 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__58557,chunk__58558,count__58559,i__58560,segv_60299,gline_60300,lc_60301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_60300 - (lc_60301 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_60299], null));
});})(seq__58557,chunk__58558,count__58559,i__58560,segv_60299,gline_60300,lc_60301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__58557,chunk__58558,count__58559,i__58560,segv_60299,gline_60300,lc_60301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60300], null),cljs.core.conj,segv_60299);
});})(seq__58557,chunk__58558,count__58559,i__58560,segv_60299,gline_60300,lc_60301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__60305 = seq__58557;
var G__60306 = chunk__58558;
var G__60307 = count__58559;
var G__60308 = (i__58560 + (1));
seq__58557 = G__60305;
chunk__58558 = G__60306;
count__58559 = G__60307;
i__58560 = G__60308;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58557);
if(temp__5720__auto__){
var seq__58557__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58557__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58557__$1);
var G__60312 = cljs.core.chunk_rest(seq__58557__$1);
var G__60313 = c__4550__auto__;
var G__60314 = cljs.core.count(c__4550__auto__);
var G__60315 = (0);
seq__58557 = G__60312;
chunk__58558 = G__60313;
count__58559 = G__60314;
i__58560 = G__60315;
continue;
} else {
var info = cljs.core.first(seq__58557__$1);
var segv_60319 = info__GT_segv(info,source_idx,line,col);
var gline_60320 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_60321 = cljs.core.count(cljs.core.deref(lines));
if((gline_60320 > (lc_60321 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__58557,chunk__58558,count__58559,i__58560,segv_60319,gline_60320,lc_60321,info,seq__58557__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_60320 - (lc_60321 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_60319], null));
});})(seq__58557,chunk__58558,count__58559,i__58560,segv_60319,gline_60320,lc_60321,info,seq__58557__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__58557,chunk__58558,count__58559,i__58560,segv_60319,gline_60320,lc_60321,info,seq__58557__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60320], null),cljs.core.conj,segv_60319);
});})(seq__58557,chunk__58558,count__58559,i__58560,segv_60319,gline_60320,lc_60321,info,seq__58557__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__60329 = cljs.core.next(seq__58557__$1);
var G__60330 = null;
var G__60331 = (0);
var G__60332 = (0);
seq__58557 = G__60329;
chunk__58558 = G__60330;
count__58559 = G__60331;
i__58560 = G__60332;
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
var seq__58591_60333 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__58592_60334 = null;
var count__58593_60335 = (0);
var i__58594_60336 = (0);
while(true){
if((i__58594_60336 < count__58593_60335)){
var vec__58932_60340 = chunk__58592_60334.cljs$core$IIndexed$_nth$arity$2(null,i__58594_60336);
var source_idx_60341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58932_60340,(0),null);
var vec__58935_60342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58932_60340,(1),null);
var __60343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58935_60342,(0),null);
var lines_60344__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58935_60342,(1),null);
var seq__58939_60346 = cljs.core.seq(lines_60344__$1);
var chunk__58940_60347 = null;
var count__58941_60348 = (0);
var i__58942_60349 = (0);
while(true){
if((i__58942_60349 < count__58941_60348)){
var vec__59081_60350 = chunk__58940_60347.cljs$core$IIndexed$_nth$arity$2(null,i__58942_60349);
var line_60351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59081_60350,(0),null);
var cols_60352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59081_60350,(1),null);
var seq__59087_60353 = cljs.core.seq(cols_60352);
var chunk__59088_60354 = null;
var count__59089_60355 = (0);
var i__59090_60356 = (0);
while(true){
if((i__59090_60356 < count__59089_60355)){
var vec__59102_60357 = chunk__59088_60354.cljs$core$IIndexed$_nth$arity$2(null,i__59090_60356);
var col_60358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59102_60357,(0),null);
var infos_60359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59102_60357,(1),null);
encode_cols(infos_60359,source_idx_60341,line_60351,col_60358);


var G__60361 = seq__59087_60353;
var G__60362 = chunk__59088_60354;
var G__60363 = count__59089_60355;
var G__60364 = (i__59090_60356 + (1));
seq__59087_60353 = G__60361;
chunk__59088_60354 = G__60362;
count__59089_60355 = G__60363;
i__59090_60356 = G__60364;
continue;
} else {
var temp__5720__auto___60367 = cljs.core.seq(seq__59087_60353);
if(temp__5720__auto___60367){
var seq__59087_60368__$1 = temp__5720__auto___60367;
if(cljs.core.chunked_seq_QMARK_(seq__59087_60368__$1)){
var c__4550__auto___60370 = cljs.core.chunk_first(seq__59087_60368__$1);
var G__60371 = cljs.core.chunk_rest(seq__59087_60368__$1);
var G__60372 = c__4550__auto___60370;
var G__60373 = cljs.core.count(c__4550__auto___60370);
var G__60374 = (0);
seq__59087_60353 = G__60371;
chunk__59088_60354 = G__60372;
count__59089_60355 = G__60373;
i__59090_60356 = G__60374;
continue;
} else {
var vec__59108_60376 = cljs.core.first(seq__59087_60368__$1);
var col_60377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108_60376,(0),null);
var infos_60378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108_60376,(1),null);
encode_cols(infos_60378,source_idx_60341,line_60351,col_60377);


var G__60379 = cljs.core.next(seq__59087_60368__$1);
var G__60380 = null;
var G__60381 = (0);
var G__60382 = (0);
seq__59087_60353 = G__60379;
chunk__59088_60354 = G__60380;
count__59089_60355 = G__60381;
i__59090_60356 = G__60382;
continue;
}
} else {
}
}
break;
}


var G__60383 = seq__58939_60346;
var G__60384 = chunk__58940_60347;
var G__60385 = count__58941_60348;
var G__60386 = (i__58942_60349 + (1));
seq__58939_60346 = G__60383;
chunk__58940_60347 = G__60384;
count__58941_60348 = G__60385;
i__58942_60349 = G__60386;
continue;
} else {
var temp__5720__auto___60389 = cljs.core.seq(seq__58939_60346);
if(temp__5720__auto___60389){
var seq__58939_60390__$1 = temp__5720__auto___60389;
if(cljs.core.chunked_seq_QMARK_(seq__58939_60390__$1)){
var c__4550__auto___60391 = cljs.core.chunk_first(seq__58939_60390__$1);
var G__60392 = cljs.core.chunk_rest(seq__58939_60390__$1);
var G__60393 = c__4550__auto___60391;
var G__60394 = cljs.core.count(c__4550__auto___60391);
var G__60395 = (0);
seq__58939_60346 = G__60392;
chunk__58940_60347 = G__60393;
count__58941_60348 = G__60394;
i__58942_60349 = G__60395;
continue;
} else {
var vec__59111_60396 = cljs.core.first(seq__58939_60390__$1);
var line_60397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59111_60396,(0),null);
var cols_60398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59111_60396,(1),null);
var seq__59114_60399 = cljs.core.seq(cols_60398);
var chunk__59115_60400 = null;
var count__59116_60401 = (0);
var i__59117_60402 = (0);
while(true){
if((i__59117_60402 < count__59116_60401)){
var vec__59124_60403 = chunk__59115_60400.cljs$core$IIndexed$_nth$arity$2(null,i__59117_60402);
var col_60404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59124_60403,(0),null);
var infos_60405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59124_60403,(1),null);
encode_cols(infos_60405,source_idx_60341,line_60397,col_60404);


var G__60406 = seq__59114_60399;
var G__60407 = chunk__59115_60400;
var G__60408 = count__59116_60401;
var G__60409 = (i__59117_60402 + (1));
seq__59114_60399 = G__60406;
chunk__59115_60400 = G__60407;
count__59116_60401 = G__60408;
i__59117_60402 = G__60409;
continue;
} else {
var temp__5720__auto___60410__$1 = cljs.core.seq(seq__59114_60399);
if(temp__5720__auto___60410__$1){
var seq__59114_60411__$1 = temp__5720__auto___60410__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59114_60411__$1)){
var c__4550__auto___60412 = cljs.core.chunk_first(seq__59114_60411__$1);
var G__60413 = cljs.core.chunk_rest(seq__59114_60411__$1);
var G__60414 = c__4550__auto___60412;
var G__60415 = cljs.core.count(c__4550__auto___60412);
var G__60416 = (0);
seq__59114_60399 = G__60413;
chunk__59115_60400 = G__60414;
count__59116_60401 = G__60415;
i__59117_60402 = G__60416;
continue;
} else {
var vec__59127_60417 = cljs.core.first(seq__59114_60411__$1);
var col_60418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59127_60417,(0),null);
var infos_60419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59127_60417,(1),null);
encode_cols(infos_60419,source_idx_60341,line_60397,col_60418);


var G__60420 = cljs.core.next(seq__59114_60411__$1);
var G__60421 = null;
var G__60422 = (0);
var G__60423 = (0);
seq__59114_60399 = G__60420;
chunk__59115_60400 = G__60421;
count__59116_60401 = G__60422;
i__59117_60402 = G__60423;
continue;
}
} else {
}
}
break;
}


var G__60424 = cljs.core.next(seq__58939_60390__$1);
var G__60425 = null;
var G__60426 = (0);
var G__60427 = (0);
seq__58939_60346 = G__60424;
chunk__58940_60347 = G__60425;
count__58941_60348 = G__60426;
i__58942_60349 = G__60427;
continue;
}
} else {
}
}
break;
}


var G__60428 = seq__58591_60333;
var G__60429 = chunk__58592_60334;
var G__60430 = count__58593_60335;
var G__60431 = (i__58594_60336 + (1));
seq__58591_60333 = G__60428;
chunk__58592_60334 = G__60429;
count__58593_60335 = G__60430;
i__58594_60336 = G__60431;
continue;
} else {
var temp__5720__auto___60432 = cljs.core.seq(seq__58591_60333);
if(temp__5720__auto___60432){
var seq__58591_60433__$1 = temp__5720__auto___60432;
if(cljs.core.chunked_seq_QMARK_(seq__58591_60433__$1)){
var c__4550__auto___60434 = cljs.core.chunk_first(seq__58591_60433__$1);
var G__60435 = cljs.core.chunk_rest(seq__58591_60433__$1);
var G__60436 = c__4550__auto___60434;
var G__60437 = cljs.core.count(c__4550__auto___60434);
var G__60438 = (0);
seq__58591_60333 = G__60435;
chunk__58592_60334 = G__60436;
count__58593_60335 = G__60437;
i__58594_60336 = G__60438;
continue;
} else {
var vec__59133_60439 = cljs.core.first(seq__58591_60433__$1);
var source_idx_60440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59133_60439,(0),null);
var vec__59136_60441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59133_60439,(1),null);
var __60442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136_60441,(0),null);
var lines_60443__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136_60441,(1),null);
var seq__59139_60445 = cljs.core.seq(lines_60443__$1);
var chunk__59140_60446 = null;
var count__59141_60447 = (0);
var i__59142_60448 = (0);
while(true){
if((i__59142_60448 < count__59141_60447)){
var vec__59185_60450 = chunk__59140_60446.cljs$core$IIndexed$_nth$arity$2(null,i__59142_60448);
var line_60451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59185_60450,(0),null);
var cols_60452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59185_60450,(1),null);
var seq__59190_60453 = cljs.core.seq(cols_60452);
var chunk__59191_60454 = null;
var count__59192_60455 = (0);
var i__59193_60456 = (0);
while(true){
if((i__59193_60456 < count__59192_60455)){
var vec__59200_60458 = chunk__59191_60454.cljs$core$IIndexed$_nth$arity$2(null,i__59193_60456);
var col_60459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59200_60458,(0),null);
var infos_60460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59200_60458,(1),null);
encode_cols(infos_60460,source_idx_60440,line_60451,col_60459);


var G__60461 = seq__59190_60453;
var G__60462 = chunk__59191_60454;
var G__60463 = count__59192_60455;
var G__60464 = (i__59193_60456 + (1));
seq__59190_60453 = G__60461;
chunk__59191_60454 = G__60462;
count__59192_60455 = G__60463;
i__59193_60456 = G__60464;
continue;
} else {
var temp__5720__auto___60465__$1 = cljs.core.seq(seq__59190_60453);
if(temp__5720__auto___60465__$1){
var seq__59190_60466__$1 = temp__5720__auto___60465__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59190_60466__$1)){
var c__4550__auto___60467 = cljs.core.chunk_first(seq__59190_60466__$1);
var G__60468 = cljs.core.chunk_rest(seq__59190_60466__$1);
var G__60469 = c__4550__auto___60467;
var G__60470 = cljs.core.count(c__4550__auto___60467);
var G__60471 = (0);
seq__59190_60453 = G__60468;
chunk__59191_60454 = G__60469;
count__59192_60455 = G__60470;
i__59193_60456 = G__60471;
continue;
} else {
var vec__59207_60472 = cljs.core.first(seq__59190_60466__$1);
var col_60473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59207_60472,(0),null);
var infos_60474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59207_60472,(1),null);
encode_cols(infos_60474,source_idx_60440,line_60451,col_60473);


var G__60475 = cljs.core.next(seq__59190_60466__$1);
var G__60476 = null;
var G__60477 = (0);
var G__60478 = (0);
seq__59190_60453 = G__60475;
chunk__59191_60454 = G__60476;
count__59192_60455 = G__60477;
i__59193_60456 = G__60478;
continue;
}
} else {
}
}
break;
}


var G__60479 = seq__59139_60445;
var G__60480 = chunk__59140_60446;
var G__60481 = count__59141_60447;
var G__60482 = (i__59142_60448 + (1));
seq__59139_60445 = G__60479;
chunk__59140_60446 = G__60480;
count__59141_60447 = G__60481;
i__59142_60448 = G__60482;
continue;
} else {
var temp__5720__auto___60483__$1 = cljs.core.seq(seq__59139_60445);
if(temp__5720__auto___60483__$1){
var seq__59139_60485__$1 = temp__5720__auto___60483__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59139_60485__$1)){
var c__4550__auto___60486 = cljs.core.chunk_first(seq__59139_60485__$1);
var G__60487 = cljs.core.chunk_rest(seq__59139_60485__$1);
var G__60488 = c__4550__auto___60486;
var G__60489 = cljs.core.count(c__4550__auto___60486);
var G__60490 = (0);
seq__59139_60445 = G__60487;
chunk__59140_60446 = G__60488;
count__59141_60447 = G__60489;
i__59142_60448 = G__60490;
continue;
} else {
var vec__59213_60495 = cljs.core.first(seq__59139_60485__$1);
var line_60496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59213_60495,(0),null);
var cols_60497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59213_60495,(1),null);
var seq__59216_60500 = cljs.core.seq(cols_60497);
var chunk__59217_60501 = null;
var count__59218_60502 = (0);
var i__59219_60503 = (0);
while(true){
if((i__59219_60503 < count__59218_60502)){
var vec__59240_60504 = chunk__59217_60501.cljs$core$IIndexed$_nth$arity$2(null,i__59219_60503);
var col_60505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59240_60504,(0),null);
var infos_60506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59240_60504,(1),null);
encode_cols(infos_60506,source_idx_60440,line_60496,col_60505);


var G__60512 = seq__59216_60500;
var G__60513 = chunk__59217_60501;
var G__60514 = count__59218_60502;
var G__60515 = (i__59219_60503 + (1));
seq__59216_60500 = G__60512;
chunk__59217_60501 = G__60513;
count__59218_60502 = G__60514;
i__59219_60503 = G__60515;
continue;
} else {
var temp__5720__auto___60516__$2 = cljs.core.seq(seq__59216_60500);
if(temp__5720__auto___60516__$2){
var seq__59216_60517__$1 = temp__5720__auto___60516__$2;
if(cljs.core.chunked_seq_QMARK_(seq__59216_60517__$1)){
var c__4550__auto___60520 = cljs.core.chunk_first(seq__59216_60517__$1);
var G__60521 = cljs.core.chunk_rest(seq__59216_60517__$1);
var G__60522 = c__4550__auto___60520;
var G__60523 = cljs.core.count(c__4550__auto___60520);
var G__60524 = (0);
seq__59216_60500 = G__60521;
chunk__59217_60501 = G__60522;
count__59218_60502 = G__60523;
i__59219_60503 = G__60524;
continue;
} else {
var vec__59247_60525 = cljs.core.first(seq__59216_60517__$1);
var col_60526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59247_60525,(0),null);
var infos_60527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59247_60525,(1),null);
encode_cols(infos_60527,source_idx_60440,line_60496,col_60526);


var G__60528 = cljs.core.next(seq__59216_60517__$1);
var G__60529 = null;
var G__60530 = (0);
var G__60531 = (0);
seq__59216_60500 = G__60528;
chunk__59217_60501 = G__60529;
count__59218_60502 = G__60530;
i__59219_60503 = G__60531;
continue;
}
} else {
}
}
break;
}


var G__60532 = cljs.core.next(seq__59139_60485__$1);
var G__60533 = null;
var G__60534 = (0);
var G__60535 = (0);
seq__59139_60445 = G__60532;
chunk__59140_60446 = G__60533;
count__59141_60447 = G__60534;
i__59142_60448 = G__60535;
continue;
}
} else {
}
}
break;
}


var G__60536 = cljs.core.next(seq__58591_60433__$1);
var G__60537 = null;
var G__60538 = (0);
var G__60539 = (0);
seq__58591_60333 = G__60536;
chunk__58592_60334 = G__60537;
count__58593_60335 = G__60538;
i__58594_60336 = G__60539;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__59256 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__58550_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58550_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__58552_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__58552_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__58553_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__58553_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__59270 = G__59256;
var G__59271_60542 = G__59270;
var G__59272_60543 = "sourcesContent";
var G__59273_60544 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__59271_60542,G__59272_60543,G__59273_60544);

return G__59270;
} else {
return G__59256;
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
var vec__59275 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59275,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59275,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__59280 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59280,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59280,(1),null);
var G__60545 = cljs.core.next(col_map_seq);
var G__60546 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__59280,col,infos,vec__59275,line,col_map){
return (function (v,p__59283){
var map__59284 = p__59283;
var map__59284__$1 = (((((!((map__59284 == null))))?(((((map__59284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59284):map__59284);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59284__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59284__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__59280,col,infos,vec__59275,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__60545;
new_cols = G__60546;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__60554 = cljs.core.next(line_map_seq);
var G__60555 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__60554;
new_lines = G__60555;
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
var seq__59289_60558 = cljs.core.seq(reverse_map);
var chunk__59290_60559 = null;
var count__59291_60560 = (0);
var i__59292_60561 = (0);
while(true){
if((i__59292_60561 < count__59291_60560)){
var vec__59753_60562 = chunk__59290_60559.cljs$core$IIndexed$_nth$arity$2(null,i__59292_60561);
var line_60563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59753_60562,(0),null);
var columns_60564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59753_60562,(1),null);
var seq__59757_60567 = cljs.core.seq(columns_60564);
var chunk__59758_60568 = null;
var count__59759_60569 = (0);
var i__59760_60570 = (0);
while(true){
if((i__59760_60570 < count__59759_60569)){
var vec__59875_60572 = chunk__59758_60568.cljs$core$IIndexed$_nth$arity$2(null,i__59760_60570);
var column_60573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59875_60572,(0),null);
var column_info_60574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59875_60572,(1),null);
var seq__59878_60575 = cljs.core.seq(column_info_60574);
var chunk__59879_60576 = null;
var count__59880_60577 = (0);
var i__59881_60578 = (0);
while(true){
if((i__59881_60578 < count__59880_60577)){
var map__59908_60579 = chunk__59879_60576.cljs$core$IIndexed$_nth$arity$2(null,i__59881_60578);
var map__59908_60580__$1 = (((((!((map__59908_60579 == null))))?(((((map__59908_60579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59908_60579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59908_60579):map__59908_60579);
var gline_60581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908_60580__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908_60580__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908_60580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60581], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__59878_60575,chunk__59879_60576,count__59880_60577,i__59881_60578,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59908_60579,map__59908_60580__$1,gline_60581,gcol_60582,name_60583,vec__59875_60572,column_60573,column_info_60574,vec__59753_60562,line_60563,columns_60564,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60582], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60563,new cljs.core.Keyword(null,"col","col",-1959363084),column_60573,new cljs.core.Keyword(null,"name","name",1843675177),name_60583], null));
});})(seq__59878_60575,chunk__59879_60576,count__59880_60577,i__59881_60578,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59908_60579,map__59908_60580__$1,gline_60581,gcol_60582,name_60583,vec__59875_60572,column_60573,column_info_60574,vec__59753_60562,line_60563,columns_60564,inverted))
,cljs.core.sorted_map()));


var G__60590 = seq__59878_60575;
var G__60591 = chunk__59879_60576;
var G__60592 = count__59880_60577;
var G__60593 = (i__59881_60578 + (1));
seq__59878_60575 = G__60590;
chunk__59879_60576 = G__60591;
count__59880_60577 = G__60592;
i__59881_60578 = G__60593;
continue;
} else {
var temp__5720__auto___60594 = cljs.core.seq(seq__59878_60575);
if(temp__5720__auto___60594){
var seq__59878_60595__$1 = temp__5720__auto___60594;
if(cljs.core.chunked_seq_QMARK_(seq__59878_60595__$1)){
var c__4550__auto___60596 = cljs.core.chunk_first(seq__59878_60595__$1);
var G__60598 = cljs.core.chunk_rest(seq__59878_60595__$1);
var G__60599 = c__4550__auto___60596;
var G__60600 = cljs.core.count(c__4550__auto___60596);
var G__60601 = (0);
seq__59878_60575 = G__60598;
chunk__59879_60576 = G__60599;
count__59880_60577 = G__60600;
i__59881_60578 = G__60601;
continue;
} else {
var map__59930_60603 = cljs.core.first(seq__59878_60595__$1);
var map__59930_60604__$1 = (((((!((map__59930_60603 == null))))?(((((map__59930_60603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59930_60603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59930_60603):map__59930_60603);
var gline_60605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930_60604__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930_60604__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930_60604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60605], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__59878_60575,chunk__59879_60576,count__59880_60577,i__59881_60578,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59930_60603,map__59930_60604__$1,gline_60605,gcol_60606,name_60607,seq__59878_60595__$1,temp__5720__auto___60594,vec__59875_60572,column_60573,column_info_60574,vec__59753_60562,line_60563,columns_60564,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60606], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60563,new cljs.core.Keyword(null,"col","col",-1959363084),column_60573,new cljs.core.Keyword(null,"name","name",1843675177),name_60607], null));
});})(seq__59878_60575,chunk__59879_60576,count__59880_60577,i__59881_60578,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59930_60603,map__59930_60604__$1,gline_60605,gcol_60606,name_60607,seq__59878_60595__$1,temp__5720__auto___60594,vec__59875_60572,column_60573,column_info_60574,vec__59753_60562,line_60563,columns_60564,inverted))
,cljs.core.sorted_map()));


var G__60614 = cljs.core.next(seq__59878_60595__$1);
var G__60615 = null;
var G__60616 = (0);
var G__60617 = (0);
seq__59878_60575 = G__60614;
chunk__59879_60576 = G__60615;
count__59880_60577 = G__60616;
i__59881_60578 = G__60617;
continue;
}
} else {
}
}
break;
}


var G__60619 = seq__59757_60567;
var G__60620 = chunk__59758_60568;
var G__60621 = count__59759_60569;
var G__60622 = (i__59760_60570 + (1));
seq__59757_60567 = G__60619;
chunk__59758_60568 = G__60620;
count__59759_60569 = G__60621;
i__59760_60570 = G__60622;
continue;
} else {
var temp__5720__auto___60623 = cljs.core.seq(seq__59757_60567);
if(temp__5720__auto___60623){
var seq__59757_60625__$1 = temp__5720__auto___60623;
if(cljs.core.chunked_seq_QMARK_(seq__59757_60625__$1)){
var c__4550__auto___60626 = cljs.core.chunk_first(seq__59757_60625__$1);
var G__60627 = cljs.core.chunk_rest(seq__59757_60625__$1);
var G__60628 = c__4550__auto___60626;
var G__60629 = cljs.core.count(c__4550__auto___60626);
var G__60630 = (0);
seq__59757_60567 = G__60627;
chunk__59758_60568 = G__60628;
count__59759_60569 = G__60629;
i__59760_60570 = G__60630;
continue;
} else {
var vec__59933_60631 = cljs.core.first(seq__59757_60625__$1);
var column_60632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59933_60631,(0),null);
var column_info_60633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59933_60631,(1),null);
var seq__59937_60634 = cljs.core.seq(column_info_60633);
var chunk__59938_60635 = null;
var count__59939_60636 = (0);
var i__59940_60637 = (0);
while(true){
if((i__59940_60637 < count__59939_60636)){
var map__59961_60638 = chunk__59938_60635.cljs$core$IIndexed$_nth$arity$2(null,i__59940_60637);
var map__59961_60639__$1 = (((((!((map__59961_60638 == null))))?(((((map__59961_60638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59961_60638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59961_60638):map__59961_60638);
var gline_60640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59961_60639__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59961_60639__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59961_60639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60640], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__59937_60634,chunk__59938_60635,count__59939_60636,i__59940_60637,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59961_60638,map__59961_60639__$1,gline_60640,gcol_60641,name_60642,vec__59933_60631,column_60632,column_info_60633,seq__59757_60625__$1,temp__5720__auto___60623,vec__59753_60562,line_60563,columns_60564,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60641], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60563,new cljs.core.Keyword(null,"col","col",-1959363084),column_60632,new cljs.core.Keyword(null,"name","name",1843675177),name_60642], null));
});})(seq__59937_60634,chunk__59938_60635,count__59939_60636,i__59940_60637,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59961_60638,map__59961_60639__$1,gline_60640,gcol_60641,name_60642,vec__59933_60631,column_60632,column_info_60633,seq__59757_60625__$1,temp__5720__auto___60623,vec__59753_60562,line_60563,columns_60564,inverted))
,cljs.core.sorted_map()));


var G__60655 = seq__59937_60634;
var G__60656 = chunk__59938_60635;
var G__60657 = count__59939_60636;
var G__60658 = (i__59940_60637 + (1));
seq__59937_60634 = G__60655;
chunk__59938_60635 = G__60656;
count__59939_60636 = G__60657;
i__59940_60637 = G__60658;
continue;
} else {
var temp__5720__auto___60660__$1 = cljs.core.seq(seq__59937_60634);
if(temp__5720__auto___60660__$1){
var seq__59937_60661__$1 = temp__5720__auto___60660__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59937_60661__$1)){
var c__4550__auto___60664 = cljs.core.chunk_first(seq__59937_60661__$1);
var G__60665 = cljs.core.chunk_rest(seq__59937_60661__$1);
var G__60666 = c__4550__auto___60664;
var G__60667 = cljs.core.count(c__4550__auto___60664);
var G__60668 = (0);
seq__59937_60634 = G__60665;
chunk__59938_60635 = G__60666;
count__59939_60636 = G__60667;
i__59940_60637 = G__60668;
continue;
} else {
var map__59973_60671 = cljs.core.first(seq__59937_60661__$1);
var map__59973_60672__$1 = (((((!((map__59973_60671 == null))))?(((((map__59973_60671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59973_60671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59973_60671):map__59973_60671);
var gline_60673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59973_60672__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59973_60672__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59973_60672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60673], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__59937_60634,chunk__59938_60635,count__59939_60636,i__59940_60637,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59973_60671,map__59973_60672__$1,gline_60673,gcol_60674,name_60675,seq__59937_60661__$1,temp__5720__auto___60660__$1,vec__59933_60631,column_60632,column_info_60633,seq__59757_60625__$1,temp__5720__auto___60623,vec__59753_60562,line_60563,columns_60564,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60674], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60563,new cljs.core.Keyword(null,"col","col",-1959363084),column_60632,new cljs.core.Keyword(null,"name","name",1843675177),name_60675], null));
});})(seq__59937_60634,chunk__59938_60635,count__59939_60636,i__59940_60637,seq__59757_60567,chunk__59758_60568,count__59759_60569,i__59760_60570,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__59973_60671,map__59973_60672__$1,gline_60673,gcol_60674,name_60675,seq__59937_60661__$1,temp__5720__auto___60660__$1,vec__59933_60631,column_60632,column_info_60633,seq__59757_60625__$1,temp__5720__auto___60623,vec__59753_60562,line_60563,columns_60564,inverted))
,cljs.core.sorted_map()));


var G__60680 = cljs.core.next(seq__59937_60661__$1);
var G__60681 = null;
var G__60682 = (0);
var G__60683 = (0);
seq__59937_60634 = G__60680;
chunk__59938_60635 = G__60681;
count__59939_60636 = G__60682;
i__59940_60637 = G__60683;
continue;
}
} else {
}
}
break;
}


var G__60684 = cljs.core.next(seq__59757_60625__$1);
var G__60685 = null;
var G__60686 = (0);
var G__60687 = (0);
seq__59757_60567 = G__60684;
chunk__59758_60568 = G__60685;
count__59759_60569 = G__60686;
i__59760_60570 = G__60687;
continue;
}
} else {
}
}
break;
}


var G__60688 = seq__59289_60558;
var G__60689 = chunk__59290_60559;
var G__60690 = count__59291_60560;
var G__60691 = (i__59292_60561 + (1));
seq__59289_60558 = G__60688;
chunk__59290_60559 = G__60689;
count__59291_60560 = G__60690;
i__59292_60561 = G__60691;
continue;
} else {
var temp__5720__auto___60692 = cljs.core.seq(seq__59289_60558);
if(temp__5720__auto___60692){
var seq__59289_60693__$1 = temp__5720__auto___60692;
if(cljs.core.chunked_seq_QMARK_(seq__59289_60693__$1)){
var c__4550__auto___60694 = cljs.core.chunk_first(seq__59289_60693__$1);
var G__60695 = cljs.core.chunk_rest(seq__59289_60693__$1);
var G__60696 = c__4550__auto___60694;
var G__60697 = cljs.core.count(c__4550__auto___60694);
var G__60698 = (0);
seq__59289_60558 = G__60695;
chunk__59290_60559 = G__60696;
count__59291_60560 = G__60697;
i__59292_60561 = G__60698;
continue;
} else {
var vec__59995_60699 = cljs.core.first(seq__59289_60693__$1);
var line_60700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59995_60699,(0),null);
var columns_60701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59995_60699,(1),null);
var seq__59999_60702 = cljs.core.seq(columns_60701);
var chunk__60000_60703 = null;
var count__60001_60704 = (0);
var i__60002_60705 = (0);
while(true){
if((i__60002_60705 < count__60001_60704)){
var vec__60091_60711 = chunk__60000_60703.cljs$core$IIndexed$_nth$arity$2(null,i__60002_60705);
var column_60712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60091_60711,(0),null);
var column_info_60713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60091_60711,(1),null);
var seq__60096_60714 = cljs.core.seq(column_info_60713);
var chunk__60097_60715 = null;
var count__60098_60716 = (0);
var i__60099_60717 = (0);
while(true){
if((i__60099_60717 < count__60098_60716)){
var map__60124_60719 = chunk__60097_60715.cljs$core$IIndexed$_nth$arity$2(null,i__60099_60717);
var map__60124_60720__$1 = (((((!((map__60124_60719 == null))))?(((((map__60124_60719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60124_60719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60124_60719):map__60124_60719);
var gline_60721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60124_60720__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60124_60720__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60124_60720__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60721], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__60096_60714,chunk__60097_60715,count__60098_60716,i__60099_60717,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60124_60719,map__60124_60720__$1,gline_60721,gcol_60722,name_60723,vec__60091_60711,column_60712,column_info_60713,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60722], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60700,new cljs.core.Keyword(null,"col","col",-1959363084),column_60712,new cljs.core.Keyword(null,"name","name",1843675177),name_60723], null));
});})(seq__60096_60714,chunk__60097_60715,count__60098_60716,i__60099_60717,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60124_60719,map__60124_60720__$1,gline_60721,gcol_60722,name_60723,vec__60091_60711,column_60712,column_info_60713,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted))
,cljs.core.sorted_map()));


var G__60725 = seq__60096_60714;
var G__60726 = chunk__60097_60715;
var G__60727 = count__60098_60716;
var G__60728 = (i__60099_60717 + (1));
seq__60096_60714 = G__60725;
chunk__60097_60715 = G__60726;
count__60098_60716 = G__60727;
i__60099_60717 = G__60728;
continue;
} else {
var temp__5720__auto___60729__$1 = cljs.core.seq(seq__60096_60714);
if(temp__5720__auto___60729__$1){
var seq__60096_60730__$1 = temp__5720__auto___60729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60096_60730__$1)){
var c__4550__auto___60731 = cljs.core.chunk_first(seq__60096_60730__$1);
var G__60732 = cljs.core.chunk_rest(seq__60096_60730__$1);
var G__60733 = c__4550__auto___60731;
var G__60734 = cljs.core.count(c__4550__auto___60731);
var G__60735 = (0);
seq__60096_60714 = G__60732;
chunk__60097_60715 = G__60733;
count__60098_60716 = G__60734;
i__60099_60717 = G__60735;
continue;
} else {
var map__60137_60736 = cljs.core.first(seq__60096_60730__$1);
var map__60137_60737__$1 = (((((!((map__60137_60736 == null))))?(((((map__60137_60736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60137_60736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60137_60736):map__60137_60736);
var gline_60738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60137_60737__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60137_60737__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60137_60737__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60738], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__60096_60714,chunk__60097_60715,count__60098_60716,i__60099_60717,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60137_60736,map__60137_60737__$1,gline_60738,gcol_60739,name_60740,seq__60096_60730__$1,temp__5720__auto___60729__$1,vec__60091_60711,column_60712,column_info_60713,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60739], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60700,new cljs.core.Keyword(null,"col","col",-1959363084),column_60712,new cljs.core.Keyword(null,"name","name",1843675177),name_60740], null));
});})(seq__60096_60714,chunk__60097_60715,count__60098_60716,i__60099_60717,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60137_60736,map__60137_60737__$1,gline_60738,gcol_60739,name_60740,seq__60096_60730__$1,temp__5720__auto___60729__$1,vec__60091_60711,column_60712,column_info_60713,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted))
,cljs.core.sorted_map()));


var G__60760 = cljs.core.next(seq__60096_60730__$1);
var G__60761 = null;
var G__60762 = (0);
var G__60763 = (0);
seq__60096_60714 = G__60760;
chunk__60097_60715 = G__60761;
count__60098_60716 = G__60762;
i__60099_60717 = G__60763;
continue;
}
} else {
}
}
break;
}


var G__60764 = seq__59999_60702;
var G__60765 = chunk__60000_60703;
var G__60766 = count__60001_60704;
var G__60767 = (i__60002_60705 + (1));
seq__59999_60702 = G__60764;
chunk__60000_60703 = G__60765;
count__60001_60704 = G__60766;
i__60002_60705 = G__60767;
continue;
} else {
var temp__5720__auto___60768__$1 = cljs.core.seq(seq__59999_60702);
if(temp__5720__auto___60768__$1){
var seq__59999_60770__$1 = temp__5720__auto___60768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59999_60770__$1)){
var c__4550__auto___60771 = cljs.core.chunk_first(seq__59999_60770__$1);
var G__60776 = cljs.core.chunk_rest(seq__59999_60770__$1);
var G__60777 = c__4550__auto___60771;
var G__60778 = cljs.core.count(c__4550__auto___60771);
var G__60779 = (0);
seq__59999_60702 = G__60776;
chunk__60000_60703 = G__60777;
count__60001_60704 = G__60778;
i__60002_60705 = G__60779;
continue;
} else {
var vec__60144_60785 = cljs.core.first(seq__59999_60770__$1);
var column_60786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60144_60785,(0),null);
var column_info_60787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60144_60785,(1),null);
var seq__60147_60790 = cljs.core.seq(column_info_60787);
var chunk__60148_60791 = null;
var count__60149_60792 = (0);
var i__60150_60793 = (0);
while(true){
if((i__60150_60793 < count__60149_60792)){
var map__60177_60794 = chunk__60148_60791.cljs$core$IIndexed$_nth$arity$2(null,i__60150_60793);
var map__60177_60795__$1 = (((((!((map__60177_60794 == null))))?(((((map__60177_60794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60177_60794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60177_60794):map__60177_60794);
var gline_60796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60177_60795__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60177_60795__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60177_60795__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60796], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__60147_60790,chunk__60148_60791,count__60149_60792,i__60150_60793,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60177_60794,map__60177_60795__$1,gline_60796,gcol_60797,name_60798,vec__60144_60785,column_60786,column_info_60787,seq__59999_60770__$1,temp__5720__auto___60768__$1,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60797], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60700,new cljs.core.Keyword(null,"col","col",-1959363084),column_60786,new cljs.core.Keyword(null,"name","name",1843675177),name_60798], null));
});})(seq__60147_60790,chunk__60148_60791,count__60149_60792,i__60150_60793,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60177_60794,map__60177_60795__$1,gline_60796,gcol_60797,name_60798,vec__60144_60785,column_60786,column_info_60787,seq__59999_60770__$1,temp__5720__auto___60768__$1,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted))
,cljs.core.sorted_map()));


var G__60817 = seq__60147_60790;
var G__60818 = chunk__60148_60791;
var G__60819 = count__60149_60792;
var G__60820 = (i__60150_60793 + (1));
seq__60147_60790 = G__60817;
chunk__60148_60791 = G__60818;
count__60149_60792 = G__60819;
i__60150_60793 = G__60820;
continue;
} else {
var temp__5720__auto___60829__$2 = cljs.core.seq(seq__60147_60790);
if(temp__5720__auto___60829__$2){
var seq__60147_60830__$1 = temp__5720__auto___60829__$2;
if(cljs.core.chunked_seq_QMARK_(seq__60147_60830__$1)){
var c__4550__auto___60832 = cljs.core.chunk_first(seq__60147_60830__$1);
var G__60836 = cljs.core.chunk_rest(seq__60147_60830__$1);
var G__60837 = c__4550__auto___60832;
var G__60838 = cljs.core.count(c__4550__auto___60832);
var G__60839 = (0);
seq__60147_60790 = G__60836;
chunk__60148_60791 = G__60837;
count__60149_60792 = G__60838;
i__60150_60793 = G__60839;
continue;
} else {
var map__60181_60842 = cljs.core.first(seq__60147_60830__$1);
var map__60181_60843__$1 = (((((!((map__60181_60842 == null))))?(((((map__60181_60842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60181_60842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60181_60842):map__60181_60842);
var gline_60844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60181_60843__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60181_60843__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60181_60843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60844], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__60147_60790,chunk__60148_60791,count__60149_60792,i__60150_60793,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60181_60842,map__60181_60843__$1,gline_60844,gcol_60845,name_60846,seq__60147_60830__$1,temp__5720__auto___60829__$2,vec__60144_60785,column_60786,column_info_60787,seq__59999_60770__$1,temp__5720__auto___60768__$1,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60845], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60700,new cljs.core.Keyword(null,"col","col",-1959363084),column_60786,new cljs.core.Keyword(null,"name","name",1843675177),name_60846], null));
});})(seq__60147_60790,chunk__60148_60791,count__60149_60792,i__60150_60793,seq__59999_60702,chunk__60000_60703,count__60001_60704,i__60002_60705,seq__59289_60558,chunk__59290_60559,count__59291_60560,i__59292_60561,map__60181_60842,map__60181_60843__$1,gline_60844,gcol_60845,name_60846,seq__60147_60830__$1,temp__5720__auto___60829__$2,vec__60144_60785,column_60786,column_info_60787,seq__59999_60770__$1,temp__5720__auto___60768__$1,vec__59995_60699,line_60700,columns_60701,seq__59289_60693__$1,temp__5720__auto___60692,inverted))
,cljs.core.sorted_map()));


var G__60861 = cljs.core.next(seq__60147_60830__$1);
var G__60862 = null;
var G__60863 = (0);
var G__60864 = (0);
seq__60147_60790 = G__60861;
chunk__60148_60791 = G__60862;
count__60149_60792 = G__60863;
i__60150_60793 = G__60864;
continue;
}
} else {
}
}
break;
}


var G__60867 = cljs.core.next(seq__59999_60770__$1);
var G__60868 = null;
var G__60869 = (0);
var G__60870 = (0);
seq__59999_60702 = G__60867;
chunk__60000_60703 = G__60868;
count__60001_60704 = G__60869;
i__60002_60705 = G__60870;
continue;
}
} else {
}
}
break;
}


var G__60871 = cljs.core.next(seq__59289_60693__$1);
var G__60872 = null;
var G__60873 = (0);
var G__60874 = (0);
seq__59289_60558 = G__60871;
chunk__59290_60559 = G__60872;
count__59291_60560 = G__60873;
i__59292_60561 = G__60874;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
