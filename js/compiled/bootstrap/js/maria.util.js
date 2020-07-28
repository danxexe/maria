goog.provide('maria.util');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('chia.view');
goog.require('clojure.string');
goog.require('applied_science.js_interop');
maria.util.loader = (function maria$util$loader(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".w-100.sans-serif.tc",".w-100.sans-serif.tc",-496754876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.gray",".pa3.gray",181608280),message], null)], null);
});
maria.util.stop_BANG_ = (function maria$util$stop_BANG_(e){
e.stopPropagation();

return e.preventDefault();
});
maria.util.clipboard_text = (function maria$util$clipboard_text(e){
var G__66198 = (function (){var or__4131__auto__ = (function (){var obj66204 = e;
var k66205 = "clipboardData";
if((function (){var obj66206 = obj66204;
return (((!((obj66206 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66205,obj66206)));
})()){
return (obj66204[k66205]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var obj66211 = window;
var k66212 = "clipboardData";
if((function (){var obj66214 = obj66211;
return (((!((obj66214 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66212,obj66214)));
})()){
return (obj66211[k66212]);
} else {
return undefined;
}
}
})();
if((G__66198 == null)){
return null;
} else {
var obj__50657__auto__ = G__66198;
var f__50658__auto__ = (obj__50657__auto__["getData"]);
return f__50658__auto__.call(obj__50657__auto__,"text");
}
});
maria.util.some_str = (function maria$util$some_str(s){
if(((typeof s === 'string') && ((!((s === "")))))){
return s;
} else {
return null;
}
});
maria.util.capitalize = (function maria$util$capitalize(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(s))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
});
maria.util.spaced_string = (function maria$util$spaced_string(the_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(the_name))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(the_name,(1)),"-"," "))].join('');
});
maria.util.handle_captured_events = (function maria$util$handle_captured_events(p__66238){
var map__66240 = p__66238;
var map__66240__$1 = (((((!((map__66240 == null))))?(((((map__66240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66240):map__66240);
var this$ = map__66240__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66240__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var dom_node = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var seq__66242 = cljs.core.seq(props);
var chunk__66243 = null;
var count__66244 = (0);
var i__66245 = (0);
while(true){
if((i__66245 < count__66244)){
var vec__66271 = chunk__66243.cljs$core$IIndexed$_nth$arity$2(null,i__66245);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66271,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66271,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(key),"capture-event")){
var G__66274_66370 = dom_node;
var G__66275_66371 = cljs.core.name(key);
var G__66276_66372 = ((function (seq__66242,chunk__66243,count__66244,i__66245,G__66274_66370,G__66275_66371,vec__66271,key,f,dom_node,map__66240,map__66240__$1,this$,props){
return (function (p1__66237_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__66237_SHARP_,this$) : f.call(null,p1__66237_SHARP_,this$));
});})(seq__66242,chunk__66243,count__66244,i__66245,G__66274_66370,G__66275_66371,vec__66271,key,f,dom_node,map__66240,map__66240__$1,this$,props))
;
var G__66277_66373 = true;
goog.events.listen(G__66274_66370,G__66275_66371,G__66276_66372,G__66277_66373);
} else {
}


var G__66377 = seq__66242;
var G__66378 = chunk__66243;
var G__66379 = count__66244;
var G__66380 = (i__66245 + (1));
seq__66242 = G__66377;
chunk__66243 = G__66378;
count__66244 = G__66379;
i__66245 = G__66380;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66242);
if(temp__5720__auto__){
var seq__66242__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66242__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__66242__$1);
var G__66383 = cljs.core.chunk_rest(seq__66242__$1);
var G__66384 = c__4550__auto__;
var G__66385 = cljs.core.count(c__4550__auto__);
var G__66386 = (0);
seq__66242 = G__66383;
chunk__66243 = G__66384;
count__66244 = G__66385;
i__66245 = G__66386;
continue;
} else {
var vec__66282 = cljs.core.first(seq__66242__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66282,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66282,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(key),"capture-event")){
var G__66285_66390 = dom_node;
var G__66286_66391 = cljs.core.name(key);
var G__66287_66392 = ((function (seq__66242,chunk__66243,count__66244,i__66245,G__66285_66390,G__66286_66391,vec__66282,key,f,seq__66242__$1,temp__5720__auto__,dom_node,map__66240,map__66240__$1,this$,props){
return (function (p1__66237_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__66237_SHARP_,this$) : f.call(null,p1__66237_SHARP_,this$));
});})(seq__66242,chunk__66243,count__66244,i__66245,G__66285_66390,G__66286_66391,vec__66282,key,f,seq__66242__$1,temp__5720__auto__,dom_node,map__66240,map__66240__$1,this$,props))
;
var G__66288_66393 = true;
goog.events.listen(G__66285_66390,G__66286_66391,G__66287_66392,G__66288_66393);
} else {
}


var G__66395 = cljs.core.next(seq__66242__$1);
var G__66396 = null;
var G__66397 = (0);
var G__66398 = (0);
seq__66242 = G__66395;
chunk__66243 = G__66396;
count__66244 = G__66397;
i__66245 = G__66398;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Splice items into vector at index, replacing n items
 */
maria.util.vector_splice = (function maria$util$vector_splice(the_vector,from_i,to_i,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(the_vector,(0),from_i),items),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(the_vector,(to_i + (1)),cljs.core.count(the_vector)));
});
maria.util.whitespace_string_QMARK_ = (function maria$util$whitespace_string_QMARK_(s){
return cljs.core.re_find(/^[\s\n]*$/,s);
});
maria.util.is_object_QMARK_ = (function maria$util$is_object_QMARK_(o){
return (Object(o) === o);
});
maria.util.scroll_into_view = (function maria$util$scroll_into_view(y_pos){
var map__66295 = applied_science.js_interop.lookup(window);
var map__66295__$1 = (((((!((map__66295 == null))))?(((((map__66295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66295):map__66295);
var scrollY = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"scrollY","scrollY",1789481542));
var innerHeight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"innerHeight","innerHeight",-217066682));
if((((y_pos < scrollY)) || ((y_pos > (scrollY + innerHeight))))){
return window.scrollTo((0),(y_pos - (innerHeight / (2))));
} else {
return null;
}
});
maria.util.DEBUG = true;
maria.util.log_ret = (function maria$util$log_ret(label,x){
if(maria.util.DEBUG){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,x], 0));

return x;
} else {
return x;
}
});
/**
 * Returns a lazy sequence of successive items from coll until
 * (pred item) returns true, including that item. pred must be
 * free of side-effects.
 */
maria.util.take_until = (function maria$util$take_until(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5720__auto__ = cljs.core.seq(coll);
if(temp__5720__auto__){
var s = temp__5720__auto__;
if(cljs.core.truth_((function (){var G__66299 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__66299) : pred.call(null,G__66299));
})())){
return cljs.core.cons(cljs.core.first(s),null);
} else {
return cljs.core.cons(cljs.core.first(s),(function (){var G__66300 = pred;
var G__66301 = cljs.core.rest(s);
return (maria.util.take_until.cljs$core$IFn$_invoke$arity$2 ? maria.util.take_until.cljs$core$IFn$_invoke$arity$2(G__66300,G__66301) : maria.util.take_until.call(null,G__66300,G__66301));
})());
}
} else {
return null;
}
}),null,null));
});
maria.util.rect__GT_abs_pos = (function maria$util$rect__GT_abs_pos(rect,p__66304){
var vec__66305 = p__66304;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66305,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66305,(1),null);
var x_offset = window.scrollX;
var y_offset = window.scrollY;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66308 = x;
var G__66308__$1 = (((G__66308 instanceof cljs.core.Keyword))?G__66308.fqn:null);
switch (G__66308__$1) {
case "left":
return (x_offset + rect.left);

break;
case "right":
return (x_offset + rect.right);

break;
case "center":
return ((x_offset + rect.left) + (rect.width / (2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66308__$1)].join('')));

}
})(),(function (){var G__66309 = y;
var G__66309__$1 = (((G__66309 instanceof cljs.core.Keyword))?G__66309.fqn:null);
switch (G__66309__$1) {
case "top":
return (y_offset + rect.top);

break;
case "bottom":
return (y_offset + rect.bottom);

break;
case "center":
return ((y_offset + rect.top) + (rect.height / (2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66309__$1)].join('')));

}
})()], null);
});
maria.util.space = "\u00A0";
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
maria.util.distinct_by = (function maria$util$distinct_by(var_args){
var G__66315 = arguments.length;
switch (G__66315) {
case 1:
return maria.util.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return maria.util.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.util.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__66412 = null;
var G__66412__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__66412__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__66412__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__66412 = function(result,x){
switch(arguments.length){
case 0:
return G__66412__0.call(this);
case 1:
return G__66412__1.call(this,result);
case 2:
return G__66412__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__66412.cljs$core$IFn$_invoke$arity$0 = G__66412__0;
G__66412.cljs$core$IFn$_invoke$arity$1 = G__66412__1;
G__66412.cljs$core$IFn$_invoke$arity$2 = G__66412__2;
return G__66412;
})()
;})(seen))
});
});

maria.util.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function maria$util$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__66321 = (function (p__66322,seen__$1){
while(true){
var vec__66323 = p__66322;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66323,(0),null);
var xs__$1 = vec__66323;
var temp__5720__auto__ = cljs.core.seq(xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__66419 = cljs.core.rest(s);
var G__66420 = seen__$1;
p__66322 = G__66419;
seen__$1 = G__66420;
continue;
} else {
return cljs.core.cons(x,maria$util$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
});
return fexpr__66321(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

maria.util.distinct_by.cljs$lang$maxFixedArity = 2;

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
maria.util.map_vals = (function maria$util$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__66185__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
var seq__66327_66430 = cljs.core.seq(m);
var chunk__66328_66431 = null;
var count__66329_66432 = (0);
var i__66330_66433 = (0);
while(true){
if((i__66330_66433 < count__66329_66432)){
var vec__66337_66434 = chunk__66328_66431.cljs$core$IIndexed$_nth$arity$2(null,i__66330_66433);
var k_66435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66337_66434,(0),null);
var v_66436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66337_66434,(1),null);
var m66326_66439 = cljs.core.deref(m_atom__66185__auto__);
cljs.core.reset_BANG_(m_atom__66185__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m66326_66439,k_66435,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_66436) : f.call(null,v_66436))));


var G__66440 = seq__66327_66430;
var G__66441 = chunk__66328_66431;
var G__66442 = count__66329_66432;
var G__66443 = (i__66330_66433 + (1));
seq__66327_66430 = G__66440;
chunk__66328_66431 = G__66441;
count__66329_66432 = G__66442;
i__66330_66433 = G__66443;
continue;
} else {
var temp__5720__auto___66444 = cljs.core.seq(seq__66327_66430);
if(temp__5720__auto___66444){
var seq__66327_66447__$1 = temp__5720__auto___66444;
if(cljs.core.chunked_seq_QMARK_(seq__66327_66447__$1)){
var c__4550__auto___66448 = cljs.core.chunk_first(seq__66327_66447__$1);
var G__66449 = cljs.core.chunk_rest(seq__66327_66447__$1);
var G__66450 = c__4550__auto___66448;
var G__66451 = cljs.core.count(c__4550__auto___66448);
var G__66452 = (0);
seq__66327_66430 = G__66449;
chunk__66328_66431 = G__66450;
count__66329_66432 = G__66451;
i__66330_66433 = G__66452;
continue;
} else {
var vec__66340_66453 = cljs.core.first(seq__66327_66447__$1);
var k_66454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66340_66453,(0),null);
var v_66455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66340_66453,(1),null);
var m66326_66459 = cljs.core.deref(m_atom__66185__auto__);
cljs.core.reset_BANG_(m_atom__66185__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m66326_66459,k_66454,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_66455) : f.call(null,v_66455))));


var G__66460 = cljs.core.next(seq__66327_66447__$1);
var G__66461 = null;
var G__66462 = (0);
var G__66463 = (0);
seq__66327_66430 = G__66460;
chunk__66328_66431 = G__66461;
count__66329_66432 = G__66462;
i__66330_66433 = G__66463;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(cljs.core.deref(m_atom__66185__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
maria.util.map_keys = (function maria$util$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__66185__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
var seq__66344_66470 = cljs.core.seq(m);
var chunk__66345_66471 = null;
var count__66346_66472 = (0);
var i__66347_66473 = (0);
while(true){
if((i__66347_66473 < count__66346_66472)){
var vec__66354_66481 = chunk__66345_66471.cljs$core$IIndexed$_nth$arity$2(null,i__66347_66473);
var k_66482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66354_66481,(0),null);
var v_66483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66354_66481,(1),null);
var m66343_66484 = cljs.core.deref(m_atom__66185__auto__);
cljs.core.reset_BANG_(m_atom__66185__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m66343_66484,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_66482) : f.call(null,k_66482)),v_66483));


var G__66485 = seq__66344_66470;
var G__66486 = chunk__66345_66471;
var G__66487 = count__66346_66472;
var G__66488 = (i__66347_66473 + (1));
seq__66344_66470 = G__66485;
chunk__66345_66471 = G__66486;
count__66346_66472 = G__66487;
i__66347_66473 = G__66488;
continue;
} else {
var temp__5720__auto___66490 = cljs.core.seq(seq__66344_66470);
if(temp__5720__auto___66490){
var seq__66344_66491__$1 = temp__5720__auto___66490;
if(cljs.core.chunked_seq_QMARK_(seq__66344_66491__$1)){
var c__4550__auto___66493 = cljs.core.chunk_first(seq__66344_66491__$1);
var G__66495 = cljs.core.chunk_rest(seq__66344_66491__$1);
var G__66496 = c__4550__auto___66493;
var G__66497 = cljs.core.count(c__4550__auto___66493);
var G__66498 = (0);
seq__66344_66470 = G__66495;
chunk__66345_66471 = G__66496;
count__66346_66472 = G__66497;
i__66347_66473 = G__66498;
continue;
} else {
var vec__66357_66503 = cljs.core.first(seq__66344_66491__$1);
var k_66504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66357_66503,(0),null);
var v_66505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66357_66503,(1),null);
var m66343_66506 = cljs.core.deref(m_atom__66185__auto__);
cljs.core.reset_BANG_(m_atom__66185__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m66343_66506,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_66504) : f.call(null,k_66504)),v_66505));


var G__66509 = cljs.core.next(seq__66344_66491__$1);
var G__66510 = null;
var G__66511 = (0);
var G__66512 = (0);
seq__66344_66470 = G__66509;
chunk__66345_66471 = G__66510;
count__66346_66472 = G__66511;
i__66347_66473 = G__66512;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(cljs.core.deref(m_atom__66185__auto__));
}
});
maria.util.guard__GT_ = (function maria$util$guard__GT_(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
maria.util.guard__GT__GT_ = (function maria$util$guard__GT__GT_(f,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});

//# sourceMappingURL=maria.util.js.map
