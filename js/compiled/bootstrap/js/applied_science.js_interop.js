goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56944 = arguments.length;
var i__4731__auto___56945 = (0);
while(true){
if((i__4731__auto___56945 < len__4730__auto___56944)){
args__4736__auto__.push((arguments[i__4731__auto___56945]));

var G__56946 = (i__4731__auto___56945 + (1));
i__4731__auto___56945 = G__56946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__56730_56947 = keyvals;
var vec__56731_56948 = G__56730_56947;
var seq__56732_56949 = cljs.core.seq(vec__56731_56948);
var first__56733_56950 = cljs.core.first(seq__56732_56949);
var seq__56732_56951__$1 = cljs.core.next(seq__56732_56949);
var k_56952 = first__56733_56950;
var first__56733_56953__$1 = cljs.core.first(seq__56732_56951__$1);
var seq__56732_56954__$2 = cljs.core.next(seq__56732_56951__$1);
var v_56955 = first__56733_56953__$1;
var keyvals_56956__$1 = seq__56732_56954__$2;
var G__56730_56957__$1 = G__56730_56947;
while(true){
var vec__56737_56958 = G__56730_56957__$1;
var seq__56738_56959 = cljs.core.seq(vec__56737_56958);
var first__56739_56960 = cljs.core.first(seq__56738_56959);
var seq__56738_56961__$1 = cljs.core.next(seq__56738_56959);
var k_56962__$1 = first__56739_56960;
var first__56739_56963__$1 = cljs.core.first(seq__56738_56961__$1);
var seq__56738_56964__$2 = cljs.core.next(seq__56738_56961__$1);
var v_56965__$1 = first__56739_56963__$1;
var keyvals_56966__$2 = seq__56738_56964__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_56962__$1)] = v_56965__$1);

if(keyvals_56966__$2){
var G__56967 = keyvals_56966__$2;
G__56730_56957__$1 = G__56967;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq56720){
var G__56721 = cljs.core.first(seq56720);
var seq56720__$1 = cljs.core.next(seq56720);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56721,seq56720__$1);
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
var G__56746 = arguments.length;
switch (G__56746) {
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
var obj56750 = obj;
var k56751 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj56752 = obj56750;
return (((!((obj56752 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k56751,obj56752)));
})()){
return (obj56750[k56751]);
} else {
return undefined;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj56754 = obj;
var k56755 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj56757 = obj56754;
return (((!((obj56757 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k56755,obj56757)));
})()){
return (obj56754[k56755]);
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
var G__56763 = arguments.length;
switch (G__56763) {
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
var obj56769 = self__.obj;
var k56770 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj56771 = obj56769;
return (((!((obj56771 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k56770,obj56771)));
})()){
return (obj56769[k56770]);
} else {
return undefined;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj56772 = self__.obj;
var k56773 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj56776 = obj56772;
return (((!((obj56776 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k56773,obj56776)));
})()){
return (obj56772[k56773]);
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
var len__4730__auto___56984 = arguments.length;
var i__4731__auto___56985 = (0);
while(true){
if((i__4731__auto___56985 < len__4730__auto___56984)){
args__4736__auto__.push((arguments[i__4731__auto___56985]));

var G__56986 = (i__4731__auto___56985 + (1));
i__4731__auto___56985 = G__56986;
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
var G__56803 = keyvals;
var vec__56804 = G__56803;
var seq__56805 = cljs.core.seq(vec__56804);
var first__56806 = cljs.core.first(seq__56805);
var seq__56805__$1 = cljs.core.next(seq__56805);
var k = first__56806;
var first__56806__$1 = cljs.core.first(seq__56805__$1);
var seq__56805__$2 = cljs.core.next(seq__56805__$1);
var v = first__56806__$1;
var kvs = seq__56805__$2;
var G__56803__$1 = G__56803;
while(true){
var vec__56807 = G__56803__$1;
var seq__56808 = cljs.core.seq(vec__56807);
var first__56809 = cljs.core.first(seq__56808);
var seq__56808__$1 = cljs.core.next(seq__56808);
var k__$1 = first__56809;
var first__56809__$1 = cljs.core.first(seq__56808__$1);
var seq__56808__$2 = cljs.core.next(seq__56808__$1);
var v__$1 = first__56809__$1;
var kvs__$1 = seq__56808__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__56991 = kvs__$1;
G__56803__$1 = G__56991;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq56787){
var G__56790 = cljs.core.first(seq56787);
var seq56787__$1 = cljs.core.next(seq56787);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56790,seq56787__$1);
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
var len__4730__auto___56992 = arguments.length;
var i__4731__auto___56993 = (0);
while(true){
if((i__4731__auto___56993 < len__4730__auto___56992)){
args__4736__auto__.push((arguments[i__4731__auto___56993]));

var G__56994 = (i__4731__auto___56993 + (1));
i__4731__auto___56993 = G__56994;
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
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq56821){
var G__56822 = cljs.core.first(seq56821);
var seq56821__$1 = cljs.core.next(seq56821);
var G__56823 = cljs.core.first(seq56821__$1);
var seq56821__$2 = cljs.core.next(seq56821__$1);
var G__56824 = cljs.core.first(seq56821__$2);
var seq56821__$3 = cljs.core.next(seq56821__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56822,G__56823,G__56824,seq56821__$3);
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
var len__4730__auto___56995 = arguments.length;
var i__4731__auto___56996 = (0);
while(true){
if((i__4731__auto___56996 < len__4730__auto___56995)){
args__4736__auto__.push((arguments[i__4731__auto___56996]));

var G__56998 = (i__4731__auto___56996 + (1));
i__4731__auto___56996 = G__56998;
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
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq56835){
var G__56836 = cljs.core.first(seq56835);
var seq56835__$1 = cljs.core.next(seq56835);
var G__56837 = cljs.core.first(seq56835__$1);
var seq56835__$2 = cljs.core.next(seq56835__$1);
var G__56838 = cljs.core.first(seq56835__$2);
var seq56835__$3 = cljs.core.next(seq56835__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56836,G__56837,G__56838,seq56835__$3);
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
var G__56850 = arguments.length;
switch (G__56850) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___57007 = arguments.length;
var i__4731__auto___57008 = (0);
while(true){
if((i__4731__auto___57008 < len__4730__auto___57007)){
args_arr__4751__auto__.push((arguments[i__4731__auto___57008]));

var G__57009 = (i__4731__auto___57008 + (1));
i__4731__auto___57008 = G__57009;
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
var seq__56852_57010 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__56853_57011 = null;
var count__56854_57012 = (0);
var i__56855_57013 = (0);
while(true){
if((i__56855_57013 < count__56854_57012)){
var k_57014 = chunk__56853_57011.cljs$core$IIndexed$_nth$arity$2(null,i__56855_57013);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_57014,applied_science.js_interop.unchecked_get(x,k_57014)], 0));


var G__57016 = seq__56852_57010;
var G__57017 = chunk__56853_57011;
var G__57018 = count__56854_57012;
var G__57019 = (i__56855_57013 + (1));
seq__56852_57010 = G__57016;
chunk__56853_57011 = G__57017;
count__56854_57012 = G__57018;
i__56855_57013 = G__57019;
continue;
} else {
var temp__5720__auto___57022 = cljs.core.seq(seq__56852_57010);
if(temp__5720__auto___57022){
var seq__56852_57023__$1 = temp__5720__auto___57022;
if(cljs.core.chunked_seq_QMARK_(seq__56852_57023__$1)){
var c__4550__auto___57024 = cljs.core.chunk_first(seq__56852_57023__$1);
var G__57025 = cljs.core.chunk_rest(seq__56852_57023__$1);
var G__57026 = c__4550__auto___57024;
var G__57027 = cljs.core.count(c__4550__auto___57024);
var G__57028 = (0);
seq__56852_57010 = G__57025;
chunk__56853_57011 = G__57026;
count__56854_57012 = G__57027;
i__56855_57013 = G__57028;
continue;
} else {
var k_57030 = cljs.core.first(seq__56852_57023__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_57030,applied_science.js_interop.unchecked_get(x,k_57030)], 0));


var G__57034 = cljs.core.next(seq__56852_57023__$1);
var G__57035 = null;
var G__57036 = (0);
var G__57037 = (0);
seq__56852_57010 = G__57034;
chunk__56853_57011 = G__57035;
count__56854_57012 = G__57036;
i__56855_57013 = G__57037;
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
applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq56847){
var G__56848 = cljs.core.first(seq56847);
var seq56847__$1 = cljs.core.next(seq56847);
var G__56849 = cljs.core.first(seq56847__$1);
var seq56847__$2 = cljs.core.next(seq56847__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56848,G__56849,seq56847__$2);
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
var G__56861 = array;
G__56861.push(x);

return G__56861;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__56862 = array;
G__56862.unshift(x);

return G__56862;
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
var len__4730__auto___57038 = arguments.length;
var i__4731__auto___57039 = (0);
while(true){
if((i__4731__auto___57039 < len__4730__auto___57038)){
args__4736__auto__.push((arguments[i__4731__auto___57039]));

var G__57040 = (i__4731__auto___57039 + (1));
i__4731__auto___57039 = G__57040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj56876 = obj;
var k56877 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj56878 = obj56876;
return (((!((obj56878 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k56877,obj56878)));
})()){
return (obj56876[k56877]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq56867){
var G__56868 = cljs.core.first(seq56867);
var seq56867__$1 = cljs.core.next(seq56867);
var G__56869 = cljs.core.first(seq56867__$1);
var seq56867__$2 = cljs.core.next(seq56867__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56868,G__56869,seq56867__$2);
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
return (function (){var obj56883 = obj;
var k56884 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj56888 = obj56883;
return (((!((obj56888 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k56884,obj56888)));
})()){
return (obj56883[k56884]);
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
var len__4730__auto___57044 = arguments.length;
var i__4731__auto___57045 = (0);
while(true){
if((i__4731__auto___57045 < len__4730__auto___57044)){
args__4736__auto__.push((arguments[i__4731__auto___57045]));

var G__57046 = (i__4731__auto___57045 + (1));
i__4731__auto___57045 = G__57046;
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
applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq56890){
var G__56891 = cljs.core.first(seq56890);
var seq56890__$1 = cljs.core.next(seq56890);
var G__56892 = cljs.core.first(seq56890__$1);
var seq56890__$2 = cljs.core.next(seq56890__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56891,G__56892,seq56890__$2);
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
var len__4730__auto___57053 = arguments.length;
var i__4731__auto___57056 = (0);
while(true){
if((i__4731__auto___57056 < len__4730__auto___57053)){
args__4736__auto__.push((arguments[i__4731__auto___57056]));

var G__57059 = (i__4731__auto___57056 + (1));
i__4731__auto___57056 = G__57059;
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
var seq__56902_57062 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__56903_57063 = null;
var count__56904_57064 = (0);
var i__56905_57065 = (0);
while(true){
if((i__56905_57065 < count__56904_57064)){
var vec__56926_57067 = chunk__56903_57063.cljs$core$IIndexed$_nth$arity$2(null,i__56905_57065);
var k_57068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926_57067,(0),null);
var v_57069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926_57067,(1),null);
var obj56929_57070 = obj;
var obj56930_57071 = (((!((obj56929_57070 == null))))?obj56929_57070:({}));
(obj56930_57071[applied_science.js_interop.impl.wrap_key(k_57068)] = v_57069);



var G__57072 = seq__56902_57062;
var G__57073 = chunk__56903_57063;
var G__57074 = count__56904_57064;
var G__57075 = (i__56905_57065 + (1));
seq__56902_57062 = G__57072;
chunk__56903_57063 = G__57073;
count__56904_57064 = G__57074;
i__56905_57065 = G__57075;
continue;
} else {
var temp__5720__auto___57077 = cljs.core.seq(seq__56902_57062);
if(temp__5720__auto___57077){
var seq__56902_57078__$1 = temp__5720__auto___57077;
if(cljs.core.chunked_seq_QMARK_(seq__56902_57078__$1)){
var c__4550__auto___57079 = cljs.core.chunk_first(seq__56902_57078__$1);
var G__57080 = cljs.core.chunk_rest(seq__56902_57078__$1);
var G__57081 = c__4550__auto___57079;
var G__57082 = cljs.core.count(c__4550__auto___57079);
var G__57083 = (0);
seq__56902_57062 = G__57080;
chunk__56903_57063 = G__57081;
count__56904_57064 = G__57082;
i__56905_57065 = G__57083;
continue;
} else {
var vec__56937_57084 = cljs.core.first(seq__56902_57078__$1);
var k_57085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56937_57084,(0),null);
var v_57086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56937_57084,(1),null);
var obj56940_57087 = obj;
var obj56941_57088 = (((!((obj56940_57087 == null))))?obj56940_57087:({}));
(obj56941_57088[applied_science.js_interop.impl.wrap_key(k_57085)] = v_57086);



var G__57089 = cljs.core.next(seq__56902_57078__$1);
var G__57090 = null;
var G__57091 = (0);
var G__57092 = (0);
seq__56902_57062 = G__57089;
chunk__56903_57063 = G__57090;
count__56904_57064 = G__57091;
i__56905_57065 = G__57092;
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
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq56898){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56898));
});


//# sourceMappingURL=applied_science.js_interop.js.map
