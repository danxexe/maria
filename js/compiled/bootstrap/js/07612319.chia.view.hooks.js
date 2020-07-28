goog.provide('chia.view.hooks');
if((typeof chia !== 'undefined') && (typeof chia.view !== 'undefined') && (typeof chia.view.hooks !== 'undefined') && (typeof chia.view.hooks.sentinel !== 'undefined')){
} else {
chia.view.hooks.sentinel = ({});
}
chia.view.hooks._use_effect = module$node_modules$react$index.useEffect;
chia.view.hooks._use_context = module$node_modules$react$index.useContext;
chia.view.hooks._use_memo = module$node_modules$react$index.useMemo;
chia.view.hooks._use_layout_effect = module$node_modules$react$index.useLayoutEffect;
chia.view.hooks.use_state = module$node_modules$react$index.useState;
chia.view.hooks.use_reducer = module$node_modules$react$index.useReducer;
chia.view.hooks.use_callback = module$node_modules$react$index.useCallback;
chia.view.hooks.use_ref = module$node_modules$react$index.useRef;
chia.view.hooks.use_imperative_handle = module$node_modules$react$index.useImperativeHandle;
chia.view.hooks.use_debug_value = module$node_modules$react$index.use_debug_value;
/**
 * Returns binding for context `context-k` (context can be a React context or a globally distinct keyword)
 */
chia.view.hooks.use_context = (function chia$view$hooks$use_context(context_k){
var G__49518 = chia.view.impl.lookup_context(context_k);
return (chia.view.hooks._use_context.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks._use_context.cljs$core$IFn$_invoke$arity$1(G__49518) : chia.view.hooks._use_context.call(null,G__49518));
});
/**
 * `f` is called on every render, or each time `key` is not= to the previous `key`.
 * 
 * If a function is returned from `f`, it will be called when the view unmounts.
 */
chia.view.hooks.effect_STAR_ = (function chia$view$hooks$effect_STAR_(native_use_effect){
return (function() {
var chia$view$hooks$effect_STAR__$_use_effect_STAR_ = null;
var chia$view$hooks$effect_STAR__$_use_effect_STAR___1 = (function (f){
var G__49521 = chia.view.impl.wrap_effect(f);
return (native_use_effect.cljs$core$IFn$_invoke$arity$1 ? native_use_effect.cljs$core$IFn$_invoke$arity$1(G__49521) : native_use_effect.call(null,G__49521));
});
var chia$view$hooks$effect_STAR__$_use_effect_STAR___2 = (function (f,key){
return chia$view$hooks$effect_STAR__$_use_effect_STAR_.cljs$core$IFn$_invoke$arity$3(f,cljs.core._EQ_,key);
});
var chia$view$hooks$effect_STAR__$_use_effect_STAR___3 = (function (f,equal_QMARK_,key){
var key_ref = (function (){var obj49522 = (function (){var G__49524 = [key,(0)];
return (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__49524) : chia.view.hooks.use_ref.call(null,G__49524));
})();
var k49523 = "current";
if((function (){var obj49525 = obj49522;
return (((!((obj49525 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49523,obj49525)));
})()){
return (obj49522[k49523]);
} else {
return undefined;
}
})();
var key_count = (function (){var kcount = (key_ref[(1)]);
if(cljs.core.not((function (){var G__49526 = key;
var G__49527 = (key_ref[(0)]);
return (equal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? equal_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49526,G__49527) : equal_QMARK_.call(null,G__49526,G__49527));
})())){
return (key_ref[(1)] = (kcount + (1)));
} else {
return kcount;
}
})();
(key_ref[(0)] = key);

var G__49528 = chia.view.impl.wrap_effect(f);
var G__49529 = [key_count];
return (native_use_effect.cljs$core$IFn$_invoke$arity$2 ? native_use_effect.cljs$core$IFn$_invoke$arity$2(G__49528,G__49529) : native_use_effect.call(null,G__49528,G__49529));
});
chia$view$hooks$effect_STAR__$_use_effect_STAR_ = function(f,equal_QMARK_,key){
switch(arguments.length){
case 1:
return chia$view$hooks$effect_STAR__$_use_effect_STAR___1.call(this,f);
case 2:
return chia$view$hooks$effect_STAR__$_use_effect_STAR___2.call(this,f,equal_QMARK_);
case 3:
return chia$view$hooks$effect_STAR__$_use_effect_STAR___3.call(this,f,equal_QMARK_,key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chia$view$hooks$effect_STAR__$_use_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = chia$view$hooks$effect_STAR__$_use_effect_STAR___1;
chia$view$hooks$effect_STAR__$_use_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = chia$view$hooks$effect_STAR__$_use_effect_STAR___2;
chia$view$hooks$effect_STAR__$_use_effect_STAR_.cljs$core$IFn$_invoke$arity$3 = chia$view$hooks$effect_STAR__$_use_effect_STAR___3;
return chia$view$hooks$effect_STAR__$_use_effect_STAR_;
})()
});
/**
 * `f` is called on every render, or each time `key` is not= to the previous `key`.
 * 
 * If a function is returned from `f`, it will be called when the view unmounts.
 */
chia.view.hooks.use_effect = chia.view.hooks.effect_STAR_(chia.view.hooks._use_effect);
/**
 * Like `use-effect` but called synchronously, after DOM operations are complete.
 */
chia.view.hooks.use_layout_effect = chia.view.hooks.effect_STAR_(chia.view.hooks._use_layout_effect);
/**
 * Evaluates `f` when component unmounts.
 */
chia.view.hooks.use_will_unmount = (function chia$view$hooks$use_will_unmount(f){
var G__49534 = cljs.core.constantly(f);
var G__49535 = null;
return (chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2(G__49534,G__49535) : chia.view.hooks.use_effect.call(null,G__49534,G__49535));
});
/**
 * Evaluates `f` once, caches and returns result. Re-evaluates when `key` changes.
 * 
 * Guaranteed to only evaluate once per lifecycle.
 */
chia.view.hooks.use_memo = (function chia$view$hooks$use_memo(var_args){
var G__49539 = arguments.length;
switch (G__49539) {
case 1:
return chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$3(f,cljs.core.identical_QMARK_,chia.view.hooks.sentinel);
});

chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,key){
return chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$3(f,cljs.core._EQ_,key);
});

chia.view.hooks.use_memo.cljs$core$IFn$_invoke$arity$3 = (function (f,equal_QMARK_,key){
var mem = (function (){var obj49540 = (function (){var G__49542 = [null,null];
return (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__49542) : chia.view.hooks.use_ref.call(null,G__49542));
})();
var k49541 = "current";
if((function (){var obj49543 = obj49540;
return (((!((obj49543 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49541,obj49543)));
})()){
return (obj49540[k49541]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var G__49544 = (mem[(0)]);
var G__49545 = key;
return (equal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? equal_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49544,G__49545) : equal_QMARK_.call(null,G__49544,G__49545));
})())){
} else {
var obj49546_49677 = mem;
var obj49547_49678 = (function (){var obj49548 = (((!((obj49546_49677 == null))))?obj49546_49677:({}));
(obj49548[(0)] = key);

return obj49548;
})();
(obj49547_49678[(1)] = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));

}

return (mem[(1)]);
});

chia.view.hooks.use_memo.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
chia.view.hooks.HookAtom = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
chia.view.hooks.HookAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.state[(0)]);
});

chia.view.hooks.HookAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var G__49555 = cljs.core.constantly(value);
var fexpr__49554 = (self__.state[(1)]);
return (fexpr__49554.cljs$core$IFn$_invoke$arity$1 ? fexpr__49554.cljs$core$IFn$_invoke$arity$1(G__49555) : fexpr__49554.call(null,G__49555));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var fexpr__49556 = (self__.state[(1)]);
return (fexpr__49556.cljs$core$IFn$_invoke$arity$1 ? fexpr__49556.cljs$core$IFn$_invoke$arity$1(f) : fexpr__49556.call(null,f));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,a){
var self__ = this;
var ___$1 = this;
var G__49577 = ((function (___$1){
return (function (p1__49551_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__49551_SHARP_,a) : f.call(null,p1__49551_SHARP_,a));
});})(___$1))
;
var fexpr__49576 = (self__.state[(1)]);
return (fexpr__49576.cljs$core$IFn$_invoke$arity$1 ? fexpr__49576.cljs$core$IFn$_invoke$arity$1(G__49577) : fexpr__49576.call(null,G__49577));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,a,b){
var self__ = this;
var ___$1 = this;
var G__49585 = ((function (___$1){
return (function (p1__49552_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__49552_SHARP_,a,b) : f.call(null,p1__49552_SHARP_,a,b));
});})(___$1))
;
var fexpr__49584 = (self__.state[(1)]);
return (fexpr__49584.cljs$core$IFn$_invoke$arity$1 ? fexpr__49584.cljs$core$IFn$_invoke$arity$1(G__49585) : fexpr__49584.call(null,G__49585));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,a,b,xs){
var self__ = this;
var ___$1 = this;
var G__49587 = ((function (___$1){
return (function (p1__49553_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__49553_SHARP_,a,b,xs);
});})(___$1))
;
var fexpr__49586 = (self__.state[(1)]);
return (fexpr__49586.cljs$core$IFn$_invoke$arity$1 ? fexpr__49586.cljs$core$IFn$_invoke$arity$1(G__49587) : fexpr__49586.call(null,G__49587));
});

chia.view.hooks.HookAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

chia.view.hooks.HookAtom.cljs$lang$type = true;

chia.view.hooks.HookAtom.cljs$lang$ctorStr = "chia.view.hooks/HookAtom";

chia.view.hooks.HookAtom.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"chia.view.hooks/HookAtom");
});

/**
 * Positional factory function for chia.view.hooks/HookAtom.
 */
chia.view.hooks.__GT_HookAtom = (function chia$view$hooks$__GT_HookAtom(state){
return (new chia.view.hooks.HookAtom(state));
});

/**
 * Returns an atom with `initial-state`. Current view will re-render when value of atom changes.
 */
chia.view.hooks.use_atom = (function chia$view$hooks$use_atom(var_args){
var G__49593 = arguments.length;
switch (G__49593) {
case 0:
return chia.view.hooks.use_atom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chia.view.hooks.use_atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.hooks.use_atom.cljs$core$IFn$_invoke$arity$0 = (function (){
return chia.view.hooks.use_atom.cljs$core$IFn$_invoke$arity$1(null);
});

chia.view.hooks.use_atom.cljs$core$IFn$_invoke$arity$1 = (function (initial_state){
var obj49599 = (function (){var obj49600 = (function (){var G__49602 = (new chia.view.hooks.HookAtom(null));
return (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__49602) : chia.view.hooks.use_ref.call(null,G__49602));
})();
var k49601 = "current";
if((function (){var obj49603 = obj49600;
return (((!((obj49603 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49601,obj49603)));
})()){
return (obj49600[k49601]);
} else {
return undefined;
}
})();
var obj49604 = (((!((obj49599 == null))))?obj49599:({}));
obj49604.state = (chia.view.hooks.use_state.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_state.cljs$core$IFn$_invoke$arity$1(initial_state) : chia.view.hooks.use_state.call(null,initial_state));

return obj49604;
});

chia.view.hooks.use_atom.cljs$lang$maxFixedArity = 1;

/**
 * Returns a `forceUpdate`-like function for the current view (not synchronous).
 */
chia.view.hooks.use_schedule_update = (function chia$view$hooks$use_schedule_update(){
return ((chia.view.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)) : chia.view.hooks.use_reducer.call(null,cljs.core.inc,(0)))[(1)]);
});
chia.view.hooks.use_interval = (function chia$view$hooks$use_interval(p__49608,f){
var map__49610 = p__49608;
var map__49610__$1 = (((((!((map__49610 == null))))?(((((map__49610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49610):map__49610);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49610__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var now_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49610__$1,new cljs.core.Keyword(null,"now?","now?",448642703));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49610__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__49617 = ((function (map__49610,map__49610__$1,interval,now_QMARK_,key){
return (function (){
if(cljs.core.truth_(now_QMARK_)){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
}

var i = setInterval(f,interval);
return ((function (i,map__49610,map__49610__$1,interval,now_QMARK_,key){
return (function (){
return clearInterval(i);
});
;})(i,map__49610,map__49610__$1,interval,now_QMARK_,key))
});})(map__49610,map__49610__$1,interval,now_QMARK_,key))
;
var G__49618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,interval], null);
return (chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2(G__49617,G__49618) : chia.view.hooks.use_effect.call(null,G__49617,G__49618));
});
/**
 * Returns a ref to be passed as the `:key` to a react view.
 *   When mounted, `f` is called once with the referenced DOM element.
 */
chia.view.hooks.use_dom_ref = (function chia$view$hooks$use_dom_ref(f){
var dom_ref = (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0() : chia.view.hooks.use_ref.call(null));
var G__49622_49699 = ((function (dom_ref){
return (function (){
var G__49624 = (function (){var obj49625 = dom_ref;
var k49626 = "current";
if((function (){var obj49627 = obj49625;
return (((!((obj49627 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49626,obj49627)));
})()){
return (obj49625[k49626]);
} else {
return undefined;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49624) : f.call(null,G__49624));
});})(dom_ref))
;
var G__49623_49700 = null;
(chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2(G__49622_49699,G__49623_49700) : chia.view.hooks.use_layout_effect.call(null,G__49622_49699,G__49623_49700));

return dom_ref;
});
chia.view.hooks.use_listener = (function chia$view$hooks$use_listener(target,event,f,capture_phase){
var f_ref = (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(f) : chia.view.hooks.use_ref.call(null,f));
var G__49628 = ((function (f_ref){
return (function (){
target.addEventListener(event,(function (){var obj49629 = f_ref;
var k49630 = "current";
if((function (){var obj49631 = obj49629;
return (((!((obj49631 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49630,obj49631)));
})()){
return (obj49629[k49630]);
} else {
return undefined;
}
})(),capture_phase);

return ((function (f_ref){
return (function (){
return target.removeEventListener(event,(function (){var obj49632 = f_ref;
var k49633 = "current";
if((function (){var obj49634 = obj49632;
return (((!((obj49634 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49633,obj49634)));
})()){
return (obj49632[k49633]);
} else {
return undefined;
}
})(),capture_phase);
});
;})(f_ref))
});})(f_ref))
;
return (chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$1(G__49628) : chia.view.hooks.use_effect.call(null,G__49628));
});
/**
 * Returns a `ref` which will be forwarded to parent.
 *   Requires `:view/forward-ref?` option on this view to be true.
 */
chia.view.hooks.use_forwarded_ref = (function chia$view$hooks$use_forwarded_ref(){
var forwarded_ref = (function (){var obj49648 = chia.reactive._STAR_reader_STAR_;
var k49649 = goog.reflect.objectProperty("chia$forwardRef",obj49648);
if((function (){var obj49652 = obj49648;
return (((!((obj49652 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49649,obj49652)));
})()){
return (obj49648[k49649]);
} else {
return undefined;
}
})();
var ref = (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0() : chia.view.hooks.use_ref.call(null));

var G__49655_49702 = forwarded_ref;
var G__49656_49703 = ((function (G__49655_49702,forwarded_ref,ref){
return (function (){
var obj49658 = ref;
var k49659 = "current";
if((function (){var obj49660 = obj49658;
return (((!((obj49660 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49659,obj49660)));
})()){
return (obj49658[k49659]);
} else {
return undefined;
}
});})(G__49655_49702,forwarded_ref,ref))
;
(chia.view.hooks.use_imperative_handle.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_imperative_handle.cljs$core$IFn$_invoke$arity$2(G__49655_49702,G__49656_49703) : chia.view.hooks.use_imperative_handle.call(null,G__49655_49702,G__49656_49703));

return ref;
});
