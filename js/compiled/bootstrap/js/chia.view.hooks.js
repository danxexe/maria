goog.provide('chia.view.hooks');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('chia.view.impl');
goog.require('chia.view.render_loop');
goog.require('chia.reactive');
goog.require('applied_science.js_interop');
goog.require('chia.view.registry');
goog.require('chia.view.hiccup');
goog.require('chia.view.props');
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
var G__65793 = chia.view.impl.lookup_context(context_k);
return (chia.view.hooks._use_context.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks._use_context.cljs$core$IFn$_invoke$arity$1(G__65793) : chia.view.hooks._use_context.call(null,G__65793));
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
var G__65796 = chia.view.impl.wrap_effect(f);
return (native_use_effect.cljs$core$IFn$_invoke$arity$1 ? native_use_effect.cljs$core$IFn$_invoke$arity$1(G__65796) : native_use_effect.call(null,G__65796));
});
var chia$view$hooks$effect_STAR__$_use_effect_STAR___2 = (function (f,key){
return chia$view$hooks$effect_STAR__$_use_effect_STAR_.cljs$core$IFn$_invoke$arity$3(f,cljs.core._EQ_,key);
});
var chia$view$hooks$effect_STAR__$_use_effect_STAR___3 = (function (f,equal_QMARK_,key){
var key_ref = (function (){var obj65797 = (function (){var G__65800 = [key,(0)];
return (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__65800) : chia.view.hooks.use_ref.call(null,G__65800));
})();
var k65798 = "current";
if((function (){var obj65802 = obj65797;
return (((!((obj65802 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65798,obj65802)));
})()){
return (obj65797[k65798]);
} else {
return undefined;
}
})();
var key_count = (function (){var kcount = (key_ref[(1)]);
if(cljs.core.not((function (){var G__65808 = key;
var G__65809 = (key_ref[(0)]);
return (equal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? equal_QMARK_.cljs$core$IFn$_invoke$arity$2(G__65808,G__65809) : equal_QMARK_.call(null,G__65808,G__65809));
})())){
return (key_ref[(1)] = (kcount + (1)));
} else {
return kcount;
}
})();
(key_ref[(0)] = key);

var G__65810 = chia.view.impl.wrap_effect(f);
var G__65811 = [key_count];
return (native_use_effect.cljs$core$IFn$_invoke$arity$2 ? native_use_effect.cljs$core$IFn$_invoke$arity$2(G__65810,G__65811) : native_use_effect.call(null,G__65810,G__65811));
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
var G__65812 = cljs.core.constantly(f);
var G__65813 = null;
return (chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2(G__65812,G__65813) : chia.view.hooks.use_effect.call(null,G__65812,G__65813));
});
/**
 * Evaluates `f` once, caches and returns result. Re-evaluates when `key` changes.
 * 
 * Guaranteed to only evaluate once per lifecycle.
 */
chia.view.hooks.use_memo = (function chia$view$hooks$use_memo(var_args){
var G__65815 = arguments.length;
switch (G__65815) {
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
var mem = (function (){var obj65816 = (function (){var G__65818 = [null,null];
return (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__65818) : chia.view.hooks.use_ref.call(null,G__65818));
})();
var k65817 = "current";
if((function (){var obj65819 = obj65816;
return (((!((obj65819 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65817,obj65819)));
})()){
return (obj65816[k65817]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var G__65820 = (mem[(0)]);
var G__65821 = key;
return (equal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? equal_QMARK_.cljs$core$IFn$_invoke$arity$2(G__65820,G__65821) : equal_QMARK_.call(null,G__65820,G__65821));
})())){
} else {
var obj65822_65928 = mem;
var obj65823_65929 = (function (){var obj65824 = (((!((obj65822_65928 == null))))?obj65822_65928:({}));
(obj65824[(0)] = key);

return obj65824;
})();
(obj65823_65929[(1)] = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));

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
var G__65832 = cljs.core.constantly(value);
var fexpr__65831 = (self__.state[(1)]);
return (fexpr__65831.cljs$core$IFn$_invoke$arity$1 ? fexpr__65831.cljs$core$IFn$_invoke$arity$1(G__65832) : fexpr__65831.call(null,G__65832));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var fexpr__65838 = (self__.state[(1)]);
return (fexpr__65838.cljs$core$IFn$_invoke$arity$1 ? fexpr__65838.cljs$core$IFn$_invoke$arity$1(f) : fexpr__65838.call(null,f));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,a){
var self__ = this;
var ___$1 = this;
var G__65840 = ((function (___$1){
return (function (p1__65827_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__65827_SHARP_,a) : f.call(null,p1__65827_SHARP_,a));
});})(___$1))
;
var fexpr__65839 = (self__.state[(1)]);
return (fexpr__65839.cljs$core$IFn$_invoke$arity$1 ? fexpr__65839.cljs$core$IFn$_invoke$arity$1(G__65840) : fexpr__65839.call(null,G__65840));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,a,b){
var self__ = this;
var ___$1 = this;
var G__65842 = ((function (___$1){
return (function (p1__65828_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__65828_SHARP_,a,b) : f.call(null,p1__65828_SHARP_,a,b));
});})(___$1))
;
var fexpr__65841 = (self__.state[(1)]);
return (fexpr__65841.cljs$core$IFn$_invoke$arity$1 ? fexpr__65841.cljs$core$IFn$_invoke$arity$1(G__65842) : fexpr__65841.call(null,G__65842));
});

chia.view.hooks.HookAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,a,b,xs){
var self__ = this;
var ___$1 = this;
var G__65845 = ((function (___$1){
return (function (p1__65829_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__65829_SHARP_,a,b,xs);
});})(___$1))
;
var fexpr__65844 = (self__.state[(1)]);
return (fexpr__65844.cljs$core$IFn$_invoke$arity$1 ? fexpr__65844.cljs$core$IFn$_invoke$arity$1(G__65845) : fexpr__65844.call(null,G__65845));
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
var G__65851 = arguments.length;
switch (G__65851) {
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
var obj65858 = (function (){var obj65859 = (function (){var G__65861 = (new chia.view.hooks.HookAtom(null));
return (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__65861) : chia.view.hooks.use_ref.call(null,G__65861));
})();
var k65860 = "current";
if((function (){var obj65862 = obj65859;
return (((!((obj65862 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65860,obj65862)));
})()){
return (obj65859[k65860]);
} else {
return undefined;
}
})();
var obj65863 = (((!((obj65858 == null))))?obj65858:({}));
obj65863.state = (chia.view.hooks.use_state.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_state.cljs$core$IFn$_invoke$arity$1(initial_state) : chia.view.hooks.use_state.call(null,initial_state));

return obj65863;
});

chia.view.hooks.use_atom.cljs$lang$maxFixedArity = 1;

/**
 * Returns a `forceUpdate`-like function for the current view (not synchronous).
 */
chia.view.hooks.use_schedule_update = (function chia$view$hooks$use_schedule_update(){
return ((chia.view.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)) : chia.view.hooks.use_reducer.call(null,cljs.core.inc,(0)))[(1)]);
});
chia.view.hooks.use_interval = (function chia$view$hooks$use_interval(p__65868,f){
var map__65869 = p__65868;
var map__65869__$1 = (((((!((map__65869 == null))))?(((((map__65869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65869):map__65869);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var now_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword(null,"now?","now?",448642703));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__65875 = ((function (map__65869,map__65869__$1,interval,now_QMARK_,key){
return (function (){
if(cljs.core.truth_(now_QMARK_)){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
}

var i = setInterval(f,interval);
return ((function (i,map__65869,map__65869__$1,interval,now_QMARK_,key){
return (function (){
return clearInterval(i);
});
;})(i,map__65869,map__65869__$1,interval,now_QMARK_,key))
});})(map__65869,map__65869__$1,interval,now_QMARK_,key))
;
var G__65876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,interval], null);
return (chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$2(G__65875,G__65876) : chia.view.hooks.use_effect.call(null,G__65875,G__65876));
});
/**
 * Returns a ref to be passed as the `:key` to a react view.
 *   When mounted, `f` is called once with the referenced DOM element.
 */
chia.view.hooks.use_dom_ref = (function chia$view$hooks$use_dom_ref(f){
var dom_ref = (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0() : chia.view.hooks.use_ref.call(null));
var G__65881_65941 = ((function (dom_ref){
return (function (){
var G__65883 = (function (){var obj65884 = dom_ref;
var k65885 = "current";
if((function (){var obj65886 = obj65884;
return (((!((obj65886 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65885,obj65886)));
})()){
return (obj65884[k65885]);
} else {
return undefined;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65883) : f.call(null,G__65883));
});})(dom_ref))
;
var G__65882_65942 = null;
(chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2(G__65881_65941,G__65882_65942) : chia.view.hooks.use_layout_effect.call(null,G__65881_65941,G__65882_65942));

return dom_ref;
});
chia.view.hooks.use_listener = (function chia$view$hooks$use_listener(target,event,f,capture_phase){
var f_ref = (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(f) : chia.view.hooks.use_ref.call(null,f));
var G__65888 = ((function (f_ref){
return (function (){
target.addEventListener(event,(function (){var obj65890 = f_ref;
var k65891 = "current";
if((function (){var obj65894 = obj65890;
return (((!((obj65894 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65891,obj65894)));
})()){
return (obj65890[k65891]);
} else {
return undefined;
}
})(),capture_phase);

return ((function (f_ref){
return (function (){
return target.removeEventListener(event,(function (){var obj65896 = f_ref;
var k65897 = "current";
if((function (){var obj65898 = obj65896;
return (((!((obj65898 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65897,obj65898)));
})()){
return (obj65896[k65897]);
} else {
return undefined;
}
})(),capture_phase);
});
;})(f_ref))
});})(f_ref))
;
return (chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$1 ? chia.view.hooks.use_effect.cljs$core$IFn$_invoke$arity$1(G__65888) : chia.view.hooks.use_effect.call(null,G__65888));
});
/**
 * Returns a `ref` which will be forwarded to parent.
 *   Requires `:view/forward-ref?` option on this view to be true.
 */
chia.view.hooks.use_forwarded_ref = (function chia$view$hooks$use_forwarded_ref(){
var forwarded_ref = (function (){var obj65900 = chia.reactive._STAR_reader_STAR_;
var k65901 = goog.reflect.objectProperty("chia$forwardRef",obj65900);
if((function (){var obj65903 = obj65900;
return (((!((obj65903 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65901,obj65903)));
})()){
return (obj65900[k65901]);
} else {
return undefined;
}
})();
var ref = (chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0 ? chia.view.hooks.use_ref.cljs$core$IFn$_invoke$arity$0() : chia.view.hooks.use_ref.call(null));
if((function (){var obj65907 = chia.reactive._STAR_reader_STAR_;
return (((!((obj65907 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(goog.reflect.objectProperty("chia$forwardRef",obj65907),obj65907)));
})()){
} else {
throw (new Error(["Assert failed: ","use-forwarded-ref requires :view/forward-ref? to be true","\n","(j/contains? r/*reader* .-chia$forwardRef)"].join('')));
}

var G__65909_65944 = forwarded_ref;
var G__65910_65945 = ((function (G__65909_65944,forwarded_ref,ref){
return (function (){
var obj65911 = ref;
var k65912 = "current";
if((function (){var obj65913 = obj65911;
return (((!((obj65913 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65912,obj65913)));
})()){
return (obj65911[k65912]);
} else {
return undefined;
}
});})(G__65909_65944,forwarded_ref,ref))
;
(chia.view.hooks.use_imperative_handle.cljs$core$IFn$_invoke$arity$2 ? chia.view.hooks.use_imperative_handle.cljs$core$IFn$_invoke$arity$2(G__65909_65944,G__65910_65945) : chia.view.hooks.use_imperative_handle.call(null,G__65909_65944,G__65910_65945));

return ref;
});

//# sourceMappingURL=chia.view.hooks.js.map
