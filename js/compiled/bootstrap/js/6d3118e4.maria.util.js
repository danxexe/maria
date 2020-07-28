goog.provide('maria.util');
maria.util.loader = (function maria$util$loader(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".w-100.sans-serif.tc",".w-100.sans-serif.tc",-496754876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.gray",".pa3.gray",181608280),message], null)], null);
});
maria.util.stop_BANG_ = (function maria$util$stop_BANG_(e){
e.stopPropagation();

return e.preventDefault();
});
maria.util.clipboard_text = (function maria$util$clipboard_text(e){
var G__49922 = (function (){var or__4131__auto__ = (function (){var obj49928 = e;
var k49929 = "clipboardData";
if((function (){var obj49931 = obj49928;
return (((!((obj49931 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49929,obj49931)));
})()){
return (obj49928[k49929]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var obj49932 = window;
var k49933 = "clipboardData";
if((function (){var obj49934 = obj49932;
return (((!((obj49934 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49933,obj49934)));
})()){
return (obj49932[k49933]);
} else {
return undefined;
}
}
})();
if((G__49922 == null)){
return null;
} else {
var obj__20089__auto__ = G__49922;
var f__20090__auto__ = (obj__20089__auto__["getData"]);
return f__20090__auto__.call(obj__20089__auto__,"text");
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
maria.util.handle_captured_events = (function maria$util$handle_captured_events(p__49940){
var map__49941 = p__49940;
var map__49941__$1 = (((((!((map__49941 == null))))?(((((map__49941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49941):map__49941);
var this$ = map__49941__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49941__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var dom_node = (chia.view.dom_node.cljs$core$IFn$_invoke$arity$1 ? chia.view.dom_node.cljs$core$IFn$_invoke$arity$1(this$) : chia.view.dom_node.call(null,this$));
var seq__49944 = cljs.core.seq(props);
var chunk__49945 = null;
var count__49946 = (0);
var i__49947 = (0);
while(true){
if((i__49947 < count__49946)){
var vec__49963 = chunk__49945.cljs$core$IIndexed$_nth$arity$2(null,i__49947);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49963,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49963,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(key),"capture-event")){
var G__49966_50073 = dom_node;
var G__49967_50074 = cljs.core.name(key);
var G__49968_50075 = ((function (seq__49944,chunk__49945,count__49946,i__49947,G__49966_50073,G__49967_50074,vec__49963,key,f,dom_node,map__49941,map__49941__$1,this$,props){
return (function (p1__49938_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__49938_SHARP_,this$) : f.call(null,p1__49938_SHARP_,this$));
});})(seq__49944,chunk__49945,count__49946,i__49947,G__49966_50073,G__49967_50074,vec__49963,key,f,dom_node,map__49941,map__49941__$1,this$,props))
;
var G__49969_50076 = true;
goog.events.listen(G__49966_50073,G__49967_50074,G__49968_50075,G__49969_50076);
} else {
}


var G__50077 = seq__49944;
var G__50078 = chunk__49945;
var G__50079 = count__49946;
var G__50080 = (i__49947 + (1));
seq__49944 = G__50077;
chunk__49945 = G__50078;
count__49946 = G__50079;
i__49947 = G__50080;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49944);
if(temp__5720__auto__){
var seq__49944__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49944__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49944__$1);
var G__50081 = cljs.core.chunk_rest(seq__49944__$1);
var G__50082 = c__4550__auto__;
var G__50083 = cljs.core.count(c__4550__auto__);
var G__50084 = (0);
seq__49944 = G__50081;
chunk__49945 = G__50082;
count__49946 = G__50083;
i__49947 = G__50084;
continue;
} else {
var vec__49978 = cljs.core.first(seq__49944__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49978,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49978,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(key),"capture-event")){
var G__49985_50086 = dom_node;
var G__49986_50087 = cljs.core.name(key);
var G__49987_50088 = ((function (seq__49944,chunk__49945,count__49946,i__49947,G__49985_50086,G__49986_50087,vec__49978,key,f,seq__49944__$1,temp__5720__auto__,dom_node,map__49941,map__49941__$1,this$,props){
return (function (p1__49938_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__49938_SHARP_,this$) : f.call(null,p1__49938_SHARP_,this$));
});})(seq__49944,chunk__49945,count__49946,i__49947,G__49985_50086,G__49986_50087,vec__49978,key,f,seq__49944__$1,temp__5720__auto__,dom_node,map__49941,map__49941__$1,this$,props))
;
var G__49988_50089 = true;
goog.events.listen(G__49985_50086,G__49986_50087,G__49987_50088,G__49988_50089);
} else {
}


var G__50090 = cljs.core.next(seq__49944__$1);
var G__50091 = null;
var G__50092 = (0);
var G__50093 = (0);
seq__49944 = G__50090;
chunk__49945 = G__50091;
count__49946 = G__50092;
i__49947 = G__50093;
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
var map__49996 = applied_science.js_interop.lookup(window);
var map__49996__$1 = (((((!((map__49996 == null))))?(((((map__49996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49996):map__49996);
var scrollY = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49996__$1,new cljs.core.Keyword(null,"scrollY","scrollY",1789481542));
var innerHeight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49996__$1,new cljs.core.Keyword(null,"innerHeight","innerHeight",-217066682));
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
if(cljs.core.truth_((function (){var G__49998 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__49998) : pred.call(null,G__49998));
})())){
return cljs.core.cons(cljs.core.first(s),null);
} else {
return cljs.core.cons(cljs.core.first(s),(function (){var G__49999 = pred;
var G__50000 = cljs.core.rest(s);
return (maria.util.take_until.cljs$core$IFn$_invoke$arity$2 ? maria.util.take_until.cljs$core$IFn$_invoke$arity$2(G__49999,G__50000) : maria.util.take_until.call(null,G__49999,G__50000));
})());
}
} else {
return null;
}
}),null,null));
});
maria.util.rect__GT_abs_pos = (function maria$util$rect__GT_abs_pos(rect,p__50004){
var vec__50005 = p__50004;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50005,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50005,(1),null);
var x_offset = window.scrollX;
var y_offset = window.scrollY;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50009 = x;
var G__50009__$1 = (((G__50009 instanceof cljs.core.Keyword))?G__50009.fqn:null);
switch (G__50009__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50009__$1)].join('')));

}
})(),(function (){var G__50011 = y;
var G__50011__$1 = (((G__50011 instanceof cljs.core.Keyword))?G__50011.fqn:null);
switch (G__50011__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50011__$1)].join('')));

}
})()], null);
});
maria.util.space = "\u00A0";
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
maria.util.distinct_by = (function maria$util$distinct_by(var_args){
var G__50014 = arguments.length;
switch (G__50014) {
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
var G__50103 = null;
var G__50103__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__50103__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__50103__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__50103 = function(result,x){
switch(arguments.length){
case 0:
return G__50103__0.call(this);
case 1:
return G__50103__1.call(this,result);
case 2:
return G__50103__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50103.cljs$core$IFn$_invoke$arity$0 = G__50103__0;
G__50103.cljs$core$IFn$_invoke$arity$1 = G__50103__1;
G__50103.cljs$core$IFn$_invoke$arity$2 = G__50103__2;
return G__50103;
})()
;})(seen))
});
});

maria.util.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function maria$util$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__50026 = (function (p__50027,seen__$1){
while(true){
var vec__50028 = p__50027;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50028,(0),null);
var xs__$1 = vec__50028;
var temp__5720__auto__ = cljs.core.seq(xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__50123 = cljs.core.rest(s);
var G__50124 = seen__$1;
p__50027 = G__50123;
seen__$1 = G__50124;
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
return fexpr__50026(xs,seen);
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
var m_atom__30126__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
var seq__50032_50127 = cljs.core.seq(m);
var chunk__50033_50128 = null;
var count__50034_50129 = (0);
var i__50035_50130 = (0);
while(true){
if((i__50035_50130 < count__50034_50129)){
var vec__50042_50131 = chunk__50033_50128.cljs$core$IIndexed$_nth$arity$2(null,i__50035_50130);
var k_50132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042_50131,(0),null);
var v_50133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042_50131,(1),null);
var m50031_50134 = cljs.core.deref(m_atom__30126__auto__);
cljs.core.reset_BANG_(m_atom__30126__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50031_50134,k_50132,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50133) : f.call(null,v_50133))));


var G__50135 = seq__50032_50127;
var G__50136 = chunk__50033_50128;
var G__50137 = count__50034_50129;
var G__50138 = (i__50035_50130 + (1));
seq__50032_50127 = G__50135;
chunk__50033_50128 = G__50136;
count__50034_50129 = G__50137;
i__50035_50130 = G__50138;
continue;
} else {
var temp__5720__auto___50140 = cljs.core.seq(seq__50032_50127);
if(temp__5720__auto___50140){
var seq__50032_50141__$1 = temp__5720__auto___50140;
if(cljs.core.chunked_seq_QMARK_(seq__50032_50141__$1)){
var c__4550__auto___50142 = cljs.core.chunk_first(seq__50032_50141__$1);
var G__50144 = cljs.core.chunk_rest(seq__50032_50141__$1);
var G__50145 = c__4550__auto___50142;
var G__50146 = cljs.core.count(c__4550__auto___50142);
var G__50147 = (0);
seq__50032_50127 = G__50144;
chunk__50033_50128 = G__50145;
count__50034_50129 = G__50146;
i__50035_50130 = G__50147;
continue;
} else {
var vec__50045_50148 = cljs.core.first(seq__50032_50141__$1);
var k_50149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50045_50148,(0),null);
var v_50150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50045_50148,(1),null);
var m50031_50151 = cljs.core.deref(m_atom__30126__auto__);
cljs.core.reset_BANG_(m_atom__30126__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50031_50151,k_50149,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50150) : f.call(null,v_50150))));


var G__50152 = cljs.core.next(seq__50032_50141__$1);
var G__50153 = null;
var G__50154 = (0);
var G__50155 = (0);
seq__50032_50127 = G__50152;
chunk__50033_50128 = G__50153;
count__50034_50129 = G__50154;
i__50035_50130 = G__50155;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(cljs.core.deref(m_atom__30126__auto__));

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
var m_atom__30126__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
var seq__50051_50207 = cljs.core.seq(m);
var chunk__50052_50208 = null;
var count__50053_50209 = (0);
var i__50054_50210 = (0);
while(true){
if((i__50054_50210 < count__50053_50209)){
var vec__50061_50213 = chunk__50052_50208.cljs$core$IIndexed$_nth$arity$2(null,i__50054_50210);
var k_50214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50061_50213,(0),null);
var v_50215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50061_50213,(1),null);
var m50050_50227 = cljs.core.deref(m_atom__30126__auto__);
cljs.core.reset_BANG_(m_atom__30126__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50050_50227,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50214) : f.call(null,k_50214)),v_50215));


var G__50229 = seq__50051_50207;
var G__50230 = chunk__50052_50208;
var G__50231 = count__50053_50209;
var G__50232 = (i__50054_50210 + (1));
seq__50051_50207 = G__50229;
chunk__50052_50208 = G__50230;
count__50053_50209 = G__50231;
i__50054_50210 = G__50232;
continue;
} else {
var temp__5720__auto___50234 = cljs.core.seq(seq__50051_50207);
if(temp__5720__auto___50234){
var seq__50051_50235__$1 = temp__5720__auto___50234;
if(cljs.core.chunked_seq_QMARK_(seq__50051_50235__$1)){
var c__4550__auto___50236 = cljs.core.chunk_first(seq__50051_50235__$1);
var G__50237 = cljs.core.chunk_rest(seq__50051_50235__$1);
var G__50238 = c__4550__auto___50236;
var G__50239 = cljs.core.count(c__4550__auto___50236);
var G__50240 = (0);
seq__50051_50207 = G__50237;
chunk__50052_50208 = G__50238;
count__50053_50209 = G__50239;
i__50054_50210 = G__50240;
continue;
} else {
var vec__50065_50241 = cljs.core.first(seq__50051_50235__$1);
var k_50242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50065_50241,(0),null);
var v_50243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50065_50241,(1),null);
var m50050_50244 = cljs.core.deref(m_atom__30126__auto__);
cljs.core.reset_BANG_(m_atom__30126__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50050_50244,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50242) : f.call(null,k_50242)),v_50243));


var G__50245 = cljs.core.next(seq__50051_50235__$1);
var G__50246 = null;
var G__50247 = (0);
var G__50248 = (0);
seq__50051_50207 = G__50245;
chunk__50052_50208 = G__50246;
count__50053_50209 = G__50247;
i__50054_50210 = G__50248;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(cljs.core.deref(m_atom__30126__auto__));
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
