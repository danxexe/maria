goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41159 = arguments.length;
var i__4731__auto___41160 = (0);
while(true){
if((i__4731__auto___41160 < len__4730__auto___41159)){
args__4736__auto__.push((arguments[i__4731__auto___41160]));

var G__41161 = (i__4731__auto___41160 + (1));
i__4731__auto___41160 = G__41161;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__40974_41162 = keyvals;
var vec__40976_41163 = G__40974_41162;
var seq__40977_41164 = cljs.core.seq(vec__40976_41163);
var first__40978_41165 = cljs.core.first(seq__40977_41164);
var seq__40977_41166__$1 = cljs.core.next(seq__40977_41164);
var k_41167 = first__40978_41165;
var first__40978_41168__$1 = cljs.core.first(seq__40977_41166__$1);
var seq__40977_41169__$2 = cljs.core.next(seq__40977_41166__$1);
var v_41170 = first__40978_41168__$1;
var keyvals_41171__$1 = seq__40977_41169__$2;
var G__40974_41175__$1 = G__40974_41162;
while(true){
var vec__40980_41176 = G__40974_41175__$1;
var seq__40981_41177 = cljs.core.seq(vec__40980_41176);
var first__40982_41178 = cljs.core.first(seq__40981_41177);
var seq__40981_41179__$1 = cljs.core.next(seq__40981_41177);
var k_41180__$1 = first__40982_41178;
var first__40982_41181__$1 = cljs.core.first(seq__40981_41179__$1);
var seq__40981_41182__$2 = cljs.core.next(seq__40981_41179__$1);
var v_41183__$1 = first__40982_41181__$1;
var keyvals_41184__$2 = seq__40981_41182__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_41180__$1)] = v_41183__$1);

if(keyvals_41184__$2){
var G__41186 = keyvals_41184__$2;
G__40974_41175__$1 = G__41186;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq40966){
var G__40967 = cljs.core.first(seq40966);
var seq40966__$1 = cljs.core.next(seq40966);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40967,seq40966__$1);
});

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__40989 = arguments.length;
switch (G__40989) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj40991 = obj;
var k40992 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj40993 = obj40991;
return (((!((obj40993 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k40992,obj40993)));
})()){
return (obj40991[k40992]);
} else {
return undefined;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj40994 = obj;
var k40995 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj40997 = obj40994;
return (((!((obj40997 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k40995,obj40997)));
})()){
return (obj40994[k40995]);
} else {
return not_found;
}
});

applied_science.js_interop.get.cljs$lang$maxFixedArity = 3;

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__40999 = arguments.length;
switch (G__40999) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
});

applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3;

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj41004 = self__.obj;
var k41005 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41006 = obj41004;
return (((!((obj41006 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41005,obj41006)));
})()){
return (obj41004[k41005]);
} else {
return undefined;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj41011 = self__.obj;
var k41012 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41013 = obj41011;
return (((!((obj41013 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41012,obj41013)));
})()){
return (obj41011[k41012]);
} else {
return not_found;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
});

applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

applied_science.js_interop.JSLookup.cljs$lang$type = true;

applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup";

applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"applied-science.js-interop/JSLookup");
});

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41190 = arguments.length;
var i__4731__auto___41191 = (0);
while(true){
if((i__4731__auto___41191 < len__4730__auto___41190)){
args__4736__auto__.push((arguments[i__4731__auto___41191]));

var G__41192 = (i__4731__auto___41191 + (1));
i__4731__auto___41191 = G__41192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__41025 = keyvals;
var vec__41026 = G__41025;
var seq__41027 = cljs.core.seq(vec__41026);
var first__41028 = cljs.core.first(seq__41027);
var seq__41027__$1 = cljs.core.next(seq__41027);
var k = first__41028;
var first__41028__$1 = cljs.core.first(seq__41027__$1);
var seq__41027__$2 = cljs.core.next(seq__41027__$1);
var v = first__41028__$1;
var kvs = seq__41027__$2;
var G__41025__$1 = G__41025;
while(true){
var vec__41034 = G__41025__$1;
var seq__41035 = cljs.core.seq(vec__41034);
var first__41036 = cljs.core.first(seq__41035);
var seq__41035__$1 = cljs.core.next(seq__41035);
var k__$1 = first__41036;
var first__41036__$1 = cljs.core.first(seq__41035__$1);
var seq__41035__$2 = cljs.core.next(seq__41035__$1);
var v__$1 = first__41036__$1;
var kvs__$1 = seq__41035__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__41205 = kvs__$1;
G__41025__$1 = G__41205;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq41015){
var G__41016 = cljs.core.first(seq41015);
var seq41015__$1 = cljs.core.next(seq41015);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41016,seq41015__$1);
});

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41207 = arguments.length;
var i__4731__auto___41208 = (0);
while(true){
if((i__4731__auto___41208 < len__4730__auto___41207)){
args__4736__auto__.push((arguments[i__4731__auto___41208]));

var G__41211 = (i__4731__auto___41208 + (1));
i__4731__auto___41208 = G__41211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
});

applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq41041){
var G__41042 = cljs.core.first(seq41041);
var seq41041__$1 = cljs.core.next(seq41041);
var G__41043 = cljs.core.first(seq41041__$1);
var seq41041__$2 = cljs.core.next(seq41041__$1);
var G__41044 = cljs.core.first(seq41041__$2);
var seq41041__$3 = cljs.core.next(seq41041__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41042,G__41043,G__41044,seq41041__$3);
});

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41220 = arguments.length;
var i__4731__auto___41221 = (0);
while(true){
if((i__4731__auto___41221 < len__4730__auto___41220)){
args__4736__auto__.push((arguments[i__4731__auto___41221]));

var G__41222 = (i__4731__auto___41221 + (1));
i__4731__auto___41221 = G__41222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
});

applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq41051){
var G__41052 = cljs.core.first(seq41051);
var seq41051__$1 = cljs.core.next(seq41051);
var G__41053 = cljs.core.first(seq41051__$1);
var seq41051__$2 = cljs.core.next(seq41051__$1);
var G__41054 = cljs.core.first(seq41051__$2);
var seq41051__$3 = cljs.core.next(seq41051__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41052,G__41053,G__41054,seq41051__$3);
});

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__41064 = arguments.length;
switch (G__41064) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___41225 = arguments.length;
var i__4731__auto___41226 = (0);
while(true){
if((i__4731__auto___41226 < len__4730__auto___41225)){
args_arr__4751__auto__.push((arguments[i__4731__auto___41226]));

var G__41227 = (i__4731__auto___41226 + (1));
i__4731__auto___41226 = G__41227;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__41065_41240 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__41066_41241 = null;
var count__41067_41242 = (0);
var i__41068_41243 = (0);
while(true){
if((i__41068_41243 < count__41067_41242)){
var k_41244 = chunk__41066_41241.cljs$core$IIndexed$_nth$arity$2(null,i__41068_41243);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41244,applied_science.js_interop.unchecked_get(x,k_41244)], 0));


var G__41245 = seq__41065_41240;
var G__41246 = chunk__41066_41241;
var G__41247 = count__41067_41242;
var G__41248 = (i__41068_41243 + (1));
seq__41065_41240 = G__41245;
chunk__41066_41241 = G__41246;
count__41067_41242 = G__41247;
i__41068_41243 = G__41248;
continue;
} else {
var temp__5720__auto___41249 = cljs.core.seq(seq__41065_41240);
if(temp__5720__auto___41249){
var seq__41065_41250__$1 = temp__5720__auto___41249;
if(cljs.core.chunked_seq_QMARK_(seq__41065_41250__$1)){
var c__4550__auto___41251 = cljs.core.chunk_first(seq__41065_41250__$1);
var G__41252 = cljs.core.chunk_rest(seq__41065_41250__$1);
var G__41253 = c__4550__auto___41251;
var G__41254 = cljs.core.count(c__4550__auto___41251);
var G__41255 = (0);
seq__41065_41240 = G__41252;
chunk__41066_41241 = G__41253;
count__41067_41242 = G__41254;
i__41068_41243 = G__41255;
continue;
} else {
var k_41256 = cljs.core.first(seq__41065_41250__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41256,applied_science.js_interop.unchecked_get(x,k_41256)], 0));


var G__41257 = cljs.core.next(seq__41065_41250__$1);
var G__41258 = null;
var G__41259 = (0);
var G__41260 = (0);
seq__41065_41240 = G__41257;
chunk__41066_41241 = G__41258;
count__41067_41242 = G__41259;
i__41068_41243 = G__41260;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
});

/** @this {Function} */
applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq41061){
var G__41062 = cljs.core.first(seq41061);
var seq41061__$1 = cljs.core.next(seq41061);
var G__41063 = cljs.core.first(seq41061__$1);
var seq41061__$2 = cljs.core.next(seq41061__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41062,G__41063,seq41061__$2);
});

applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__41075 = array;
G__41075.push(x);

return G__41075;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__41076 = array;
G__41076.unshift(x);

return G__41076;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41266 = arguments.length;
var i__4731__auto___41267 = (0);
while(true){
if((i__4731__auto___41267 < len__4730__auto___41266)){
args__4736__auto__.push((arguments[i__4731__auto___41267]));

var G__41268 = (i__4731__auto___41267 + (1));
i__4731__auto___41267 = G__41268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj41088 = obj;
var k41089 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41090 = obj41088;
return (((!((obj41090 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41089,obj41090)));
})()){
return (obj41088[k41089]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq41077){
var G__41078 = cljs.core.first(seq41077);
var seq41077__$1 = cljs.core.next(seq41077);
var G__41079 = cljs.core.first(seq41077__$1);
var seq41077__$2 = cljs.core.next(seq41077__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41078,G__41079,seq41077__$2);
});

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj41096 = obj;
var k41097 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41098 = obj41096;
return (((!((obj41098 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41097,obj41098)));
})()){
return (obj41096[k41097]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41275 = arguments.length;
var i__4731__auto___41276 = (0);
while(true){
if((i__4731__auto___41276 < len__4730__auto___41275)){
args__4736__auto__.push((arguments[i__4731__auto___41276]));

var G__41277 = (i__4731__auto___41276 + (1));
i__4731__auto___41276 = G__41277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
});

applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq41100){
var G__41101 = cljs.core.first(seq41100);
var seq41100__$1 = cljs.core.next(seq41100);
var G__41102 = cljs.core.first(seq41100__$1);
var seq41100__$2 = cljs.core.next(seq41100__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41101,G__41102,seq41100__$2);
});

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41279 = arguments.length;
var i__4731__auto___41280 = (0);
while(true){
if((i__4731__auto___41280 < len__4730__auto___41279)){
args__4736__auto__.push((arguments[i__4731__auto___41280]));

var G__41285 = (i__4731__auto___41280 + (1));
i__4731__auto___41280 = G__41285;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__41112_41286 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__41113_41287 = null;
var count__41114_41288 = (0);
var i__41115_41289 = (0);
while(true){
if((i__41115_41289 < count__41114_41288)){
var vec__41137_41290 = chunk__41113_41287.cljs$core$IIndexed$_nth$arity$2(null,i__41115_41289);
var k_41291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41137_41290,(0),null);
var v_41292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41137_41290,(1),null);
var obj41141_41293 = obj;
var obj41142_41294 = (((!((obj41141_41293 == null))))?obj41141_41293:({}));
(obj41142_41294[applied_science.js_interop.impl.wrap_key(k_41291)] = v_41292);



var G__41295 = seq__41112_41286;
var G__41296 = chunk__41113_41287;
var G__41297 = count__41114_41288;
var G__41298 = (i__41115_41289 + (1));
seq__41112_41286 = G__41295;
chunk__41113_41287 = G__41296;
count__41114_41288 = G__41297;
i__41115_41289 = G__41298;
continue;
} else {
var temp__5720__auto___41304 = cljs.core.seq(seq__41112_41286);
if(temp__5720__auto___41304){
var seq__41112_41306__$1 = temp__5720__auto___41304;
if(cljs.core.chunked_seq_QMARK_(seq__41112_41306__$1)){
var c__4550__auto___41307 = cljs.core.chunk_first(seq__41112_41306__$1);
var G__41308 = cljs.core.chunk_rest(seq__41112_41306__$1);
var G__41309 = c__4550__auto___41307;
var G__41310 = cljs.core.count(c__4550__auto___41307);
var G__41311 = (0);
seq__41112_41286 = G__41308;
chunk__41113_41287 = G__41309;
count__41114_41288 = G__41310;
i__41115_41289 = G__41311;
continue;
} else {
var vec__41150_41312 = cljs.core.first(seq__41112_41306__$1);
var k_41313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41150_41312,(0),null);
var v_41314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41150_41312,(1),null);
var obj41153_41315 = obj;
var obj41154_41316 = (((!((obj41153_41315 == null))))?obj41153_41315:({}));
(obj41154_41316[applied_science.js_interop.impl.wrap_key(k_41313)] = v_41314);



var G__41318 = cljs.core.next(seq__41112_41306__$1);
var G__41319 = null;
var G__41320 = (0);
var G__41321 = (0);
seq__41112_41286 = G__41318;
chunk__41113_41287 = G__41319;
count__41114_41288 = G__41320;
i__41115_41289 = G__41321;
continue;
}
} else {
}
}
break;
}

return obj;
});

applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq41109){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41109));
});

