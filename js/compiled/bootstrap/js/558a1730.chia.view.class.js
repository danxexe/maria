goog.provide('chia.view.class$');
chia.view.class$.Component = module$node_modules$react$index.Component;
chia.view.class$._create_element = module$node_modules$react$index.createElement;
/**
 * Return DOM node for component
 */
chia.view.class$.dom_node = module$node_modules$react_dom$index.findDOMNode;
chia.view.class$.get_derived_state_from_props = (function chia$view$class$get_derived_state_from_props(props,$state){
var obj49607 = $state;
var obj49609 = (function (){var obj49614 = (function (){var obj49615 = (function (){var obj49616 = (((!((obj49607 == null))))?obj49607:({}));
(obj49616["prev-props"] = ($state["props"]));

return obj49616;
})();
(obj49615["props"] = (props["props"]));

return obj49615;
})();
(obj49614["prev-children"] = ($state["children"]));

return obj49614;
})();
(obj49609["children"] = (props["children"]));

return obj49609;
});
chia.view.class$.bind = (function chia$view$class$bind(f){
return (function (){
var this$ = this;
var temp__5718__auto__ = this$.state.children;
if(cljs.core.truth_(temp__5718__auto__)){
var children__23174__auto__ = temp__5718__auto__;
return f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__23174__auto__)));
} else {
return f.call(this$,this$);
}
});
});
chia.view.class$.default_methods = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (){
var this$ = this;
var or__4131__auto__ = chia.view.registry._STAR_reload_STAR_ === true;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var $state = (this$["state"]);
var or__4131__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(($state["props"]),($state["prev-props"]));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(($state["children"]),($state["prev-children"]));
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
var temp__5720__auto__ = ($state["state-atom"]);
if(cljs.core.truth_(temp__5720__auto__)){
var state = temp__5720__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),($state["prev-state"]));
} else {
return null;
}
}
}
}
}),new cljs.core.Keyword("static","get-derived-state-from-props","static/get-derived-state-from-props",-945258502),chia.view.class$.get_derived_state_from_props,new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (){
var this$ = this;
var G__49635_49809 = new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$);
if((G__49635_49809 == null)){
} else {
cljs.core.remove_watch(G__49635_49809,this$);
}

var seq__49636_49828 = cljs.core.seq((function (){var G__49641 = (this$["chia$onUnmount"]);
if((G__49641 == null)){
return null;
} else {
return cljs.core.vals(G__49641);
}
})());
var chunk__49637_49829 = null;
var count__49638_49830 = (0);
var i__49639_49831 = (0);
while(true){
if((i__49639_49831 < count__49638_49830)){
var f_49832 = chunk__49637_49829.cljs$core$IIndexed$_nth$arity$2(null,i__49639_49831);
if(cljs.core.truth_(f_49832)){
(f_49832.cljs$core$IFn$_invoke$arity$1 ? f_49832.cljs$core$IFn$_invoke$arity$1(this$) : f_49832.call(null,this$));
} else {
}


var G__49833 = seq__49636_49828;
var G__49834 = chunk__49637_49829;
var G__49835 = count__49638_49830;
var G__49836 = (i__49639_49831 + (1));
seq__49636_49828 = G__49833;
chunk__49637_49829 = G__49834;
count__49638_49830 = G__49835;
i__49639_49831 = G__49836;
continue;
} else {
var temp__5720__auto___49839 = cljs.core.seq(seq__49636_49828);
if(temp__5720__auto___49839){
var seq__49636_49841__$1 = temp__5720__auto___49839;
if(cljs.core.chunked_seq_QMARK_(seq__49636_49841__$1)){
var c__4550__auto___49842 = cljs.core.chunk_first(seq__49636_49841__$1);
var G__49843 = cljs.core.chunk_rest(seq__49636_49841__$1);
var G__49844 = c__4550__auto___49842;
var G__49845 = cljs.core.count(c__4550__auto___49842);
var G__49846 = (0);
seq__49636_49828 = G__49843;
chunk__49637_49829 = G__49844;
count__49638_49830 = G__49845;
i__49639_49831 = G__49846;
continue;
} else {
var f_49847 = cljs.core.first(seq__49636_49841__$1);
if(cljs.core.truth_(f_49847)){
(f_49847.cljs$core$IFn$_invoke$arity$1 ? f_49847.cljs$core$IFn$_invoke$arity$1(this$) : f_49847.call(null,this$));
} else {
}


var G__49850 = cljs.core.next(seq__49636_49841__$1);
var G__49851 = null;
var G__49852 = (0);
var G__49853 = (0);
seq__49636_49828 = G__49850;
chunk__49637_49829 = G__49851;
count__49638_49830 = G__49852;
i__49639_49831 = G__49853;
continue;
}
} else {
}
}
break;
}

chia.reactive.dispose_reader_BANG_(this$);

return chia.view.render_loop.dequeue_BANG_(this$);
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),(function (){
var this$ = this;
var $state = (this$["state"]);
var state_atom = ($state["state-atom"]);
var G__49642 = (function (){var obj49643 = $state;
var obj49644 = (function (){var obj49645 = (((!((obj49643 == null))))?obj49643:({}));
(obj49645["prev-props"] = ($state["props"]));

return obj49645;
})();
(obj49644["prev-children"] = ($state["children"]));

return obj49644;
})();
if(cljs.core.truth_(state_atom)){
var obj49650 = G__49642;
var obj49651 = (((!((obj49650 == null))))?obj49650:({}));
(obj49651["prev-state"] = cljs.core.deref(state_atom));

return obj49651;
} else {
return G__49642;
}
})], null);
chia.view.class$.wrap_method = (function chia$view$class$wrap_method(k,f){
if(cljs.core.not(f)){
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(k) : chia.view.class$.default_methods.call(null,k));
} else {
var G__49657 = k;
var G__49657__$1 = (((G__49657 instanceof cljs.core.Keyword))?G__49657.fqn:null);
switch (G__49657__$1) {
case "view/should-update":
case "view/will-receive-state":
return chia.view.class$.bind(f);

break;
case "view/will-unmount":
return ((function (G__49657,G__49657__$1){
return (function (){
var this$ = this;
var temp__5718__auto___49859 = this$.state.children;
if(cljs.core.truth_(temp__5718__auto___49859)){
var children__23174__auto___49860 = temp__5718__auto___49859;
f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__23174__auto___49860)));
} else {
f.call(this$,this$);
}

return (function (){var G__49661 = new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603);
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(G__49661) : chia.view.class$.default_methods.call(null,G__49661));
})().call(this$);
});
;})(G__49657,G__49657__$1))

break;
case "view/render":
return ((function (G__49657,G__49657__$1){
return (function (){
var this$ = this;
var obj49662_49865 = this$;
var obj49663_49867 = (((!((obj49662_49865 == null))))?obj49662_49865:({}));
obj49663_49867.chia$toUpdate = false;


var reader__20496__auto__ = this$;
var result__20497__auto__ = (function (){var _STAR_reader_STAR__orig_val__49667 = chia.reactive._STAR_reader_STAR_;
var _STAR_reader_dependency_log_STAR__orig_val__49668 = chia.reactive._STAR_reader_dependency_log_STAR_;
var _STAR_reader_STAR__temp_val__49669 = reader__20496__auto__;
var _STAR_reader_dependency_log_STAR__temp_val__49670 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__temp_val__49669;

chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__temp_val__49670;

try{var value__20498__auto__ = (function (){var temp__5718__auto__ = this$.state.children;
if(cljs.core.truth_(temp__5718__auto__)){
var children__23174__auto__ = temp__5718__auto__;
return f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__23174__auto__)));
} else {
return f.call(this$,this$);
}
})();
return ({value:value__20498__auto__,deps:cljs.core.deref(chia.reactive._STAR_reader_dependency_log_STAR_)});
}finally {chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__orig_val__49668;

chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__orig_val__49667;
}})();
((function (reader__20496__auto__,result__20497__auto__,this$,G__49657,G__49657__$1){
return (function (){
return chia.reactive.handle_next_deps_BANG_(reader__20496__auto__,result__20497__auto__.deps);
});})(reader__20496__auto__,result__20497__auto__,this$,G__49657,G__49657__$1))
.call();

return result__20497__auto__.value;
});
;})(G__49657,G__49657__$1))

break;
case "view/did-update":
return ((function (G__49657,G__49657__$1){
return (function (){
var this$ = this;
var temp__5718__auto___49868 = this$.state.children;
if(cljs.core.truth_(temp__5718__auto___49868)){
var children__23174__auto___49874 = temp__5718__auto___49868;
f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__23174__auto___49874)));
} else {
f.call(this$,this$);
}

return (function (){var G__49672 = new cljs.core.Keyword("view","did-update","view/did-update",-2147322383);
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(G__49672) : chia.view.class$.default_methods.call(null,G__49672));
})().call(this$);
});
;})(G__49657,G__49657__$1))

break;
case "view/did-catch":
return ((function (G__49657,G__49657__$1){
return (function (error,info){
var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$,error,info) : f.call(null,this$,error,info));
});
;})(G__49657,G__49657__$1))

break;
case "static/get-derived-state-from-props":
return ((function (G__49657,G__49657__$1){
return (function (props,state){
var default$ = (function (){var G__49673 = new cljs.core.Keyword("static","get-derived-state-from-props","static/get-derived-state-from-props",-945258502);
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(G__49673) : chia.view.class$.default_methods.call(null,G__49673));
})();
var G__49674 = props;
var G__49675 = (default$.cljs$core$IFn$_invoke$arity$2 ? default$.cljs$core$IFn$_invoke$arity$2(props,state) : default$.call(null,props,state));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__49674,G__49675) : f.call(null,G__49674,G__49675));
});
;})(G__49657,G__49657__$1))

break;
default:
if(cljs.core.fn_QMARK_(f)){
var G__49676 = cljs.core.namespace(k);
switch (G__49676) {
case "view":
return chia.view.class$.bind(f);

break;
case "static":
return f;

break;
default:
return ((function (G__49676,G__49657,G__49657__$1){
return (function() { 
var G__49890__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__49890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49893__i = 0, G__49893__a = new Array(arguments.length -  0);
while (G__49893__i < G__49893__a.length) {G__49893__a[G__49893__i] = arguments[G__49893__i + 0]; ++G__49893__i;}
  args = new cljs.core.IndexedSeq(G__49893__a,0,null);
} 
return G__49890__delegate.call(this,args);};
G__49890.cljs$lang$maxFixedArity = 0;
G__49890.cljs$lang$applyTo = (function (arglist__49894){
var args = cljs.core.seq(arglist__49894);
return G__49890__delegate(args);
});
G__49890.cljs$core$IFn$_invoke$arity$variadic = G__49890__delegate;
return G__49890;
})()
;
;})(G__49676,G__49657,G__49657__$1))

}
} else {
return f;
}

}
}
});
/**
 * Augment lifecycle methods with default behaviour.
 */
chia.view.class$.wrap_methods = (function chia$view$class$wrap_methods(methods$,required_keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (obj,k){
var obj49679 = obj;
var obj49680 = (((!((obj49679 == null))))?obj49679:({}));
(obj49680[applied_science.js_interop.impl.wrap_key((function (){var or__4131__auto__ = (chia.view.class$.util.lifecycle_keys.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.util.lifecycle_keys.cljs$core$IFn$_invoke$arity$1(k) : chia.view.class$.util.lifecycle_keys.call(null,k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__49684 = cljs.core.name(k);
return (chia.util.camel_case.cljs$core$IFn$_invoke$arity$1 ? chia.util.camel_case.cljs$core$IFn$_invoke$arity$1(G__49684) : chia.util.camel_case.call(null,G__49684));
}
})())] = chia.view.class$.wrap_method(k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,k)));

return obj49680;
}),({}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(required_keys,cljs.core.keys(methods$)));
});
/**
 * Bind a component to an IWatchable/IDeref thing.
 */
chia.view.class$.init_state_BANG_ = (function chia$view$class$init_state_BANG_(this$,watchable){
var obj49685_49900 = (this$["state"]);
var obj49686_49901 = (function (){var obj49687 = (((!((obj49685_49900 == null))))?obj49685_49900:({}));
(obj49687["state-atom"] = watchable);

return obj49687;
})();
(obj49686_49901["prev-state"] = cljs.core.deref(watchable));


cljs.core.add_watch(watchable,this$,(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var obj49691_49906 = this$;
var obj49691_49907__$1 = (((!((obj49691_49906 == null))))?obj49691_49906:({}));
var obj49695_49908 = (function (){var child49692 = (obj49691_49907__$1["state"]);
if((!((child49692 == null)))){
return child49692;
} else {
var new_child__20022__auto__ = ({});
var obj49698_49909 = obj49691_49907__$1;
(obj49698_49909["state"] = new_child__20022__auto__);


return new_child__20022__auto__;
}
})();
(obj49695_49908["prev-state"] = old_state);



var temp__5720__auto___49911 = (this$["componentWillReceiveState"]);
if(cljs.core.truth_(temp__5720__auto___49911)){
var will_receive_49912 = temp__5720__auto___49911;
will_receive_49912.call(this$);
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = (!(chia.reactive._STAR_silent_STAR_));
if(and__4120__auto__){
var temp__5718__auto__ = (this$["shouldComponentUpdate"]);
if(cljs.core.truth_(temp__5718__auto__)){
var should_update = temp__5718__auto__;
return should_update.call(this$);
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())){
return chia.view.render_loop.schedule_update_BANG_(this$);
} else {
return null;
}
} else {
return null;
}
}));

return watchable;
});
/**
 * Populate initial state for `component`.
 */
chia.view.class$.populate_initial_state_BANG_ = (function chia$view$class$populate_initial_state_BANG_(this$,$props,initial_state){
var state_data_49927 = ((cljs.core.fn_QMARK_(initial_state))?(function (){var $state = (this$["state"]);
var obj49701_49930 = this$;
(obj49701_49930["state"] = chia.view.class$.get_derived_state_from_props($props,$state));


return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(initial_state,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(this$));
})():initial_state);
chia.view.class$.init_state_BANG_(this$,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_data_49927));

return this$;
});
/**
 * Lazily create and bind a state atom for `component`
 */
chia.view.class$.get_state_BANG_ = (function chia$view$class$get_state_BANG_(this$){
var $state = (function (){var obj49704 = this$;
var k49705 = "state";
if((function (){var obj49706 = obj49704;
return (((!((obj49706 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49705,obj49706)));
})()){
return (obj49704[k49705]);
} else {
return undefined;
}
})();
if((function (){var obj49707 = $state;
return (((!((obj49707 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_("state-atom",obj49707)));
})()){
} else {
chia.view.class$.init_state_BANG_(this$,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
}

return ($state["state-atom"]);
});
chia.view.class$.get_special = (function chia$view$class$get_special(this$,k,not_found){
var G__49708 = k;
var G__49708__$1 = (((G__49708 instanceof cljs.core.Keyword))?G__49708.fqn:null);
switch (G__49708__$1) {
case "view/state":
return chia.view.class$.get_state_BANG_(this$);

break;
case "view/js-state":
var obj49709 = this$;
var k49710 = "state";
if((function (){var obj49711 = obj49709;
return (((!((obj49711 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49710,obj49711)));
})()){
return (obj49709[k49710]);
} else {
return undefined;
}

break;
default:
var or__4131__auto__ = ((this$["state"])[cljs.core.name(k)]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}

}
});
chia.view.class$.get_prop = (function chia$view$class$get_prop(this$,k,not_found){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(chia.view.class$.get_special(this$,new cljs.core.Keyword("view","props","view/props",449562012),null),k,not_found);
});
chia.view.class$.ChiaLegacyClass = (function (){var x49712 = ({});
x49712.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x49712.cljs$core$ILookup$_lookup$arity$2 = ((function (x49712){
return (function (this$,k){
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});})(x49712))
;

x49712.cljs$core$ILookup$_lookup$arity$3 = ((function (x49712){
return (function (this$,k,not_found){
var this$__$1 = this;
var G__49713 = cljs.core.namespace(k);
switch (G__49713) {
case "view":
return chia.view.class$.get_special(this$__$1,k,not_found);

break;
default:
return chia.view.class$.get_prop(this$__$1,k,not_found);

}
});})(x49712))
;

x49712.chia$reactive$IInvalidate$ = cljs.core.PROTOCOL_SENTINEL;

x49712.chia$reactive$IInvalidate$_invalidate_BANG_$arity$1 = ((function (x49712){
return (function (this$){
var this$__$1 = this;
return chia.view.render_loop.schedule_update_BANG_(this$__$1);
});})(x49712))
;

x49712.cljs$core$INamed$ = cljs.core.PROTOCOL_SENTINEL;

x49712.cljs$core$INamed$_name$arity$1 = ((function (x49712){
return (function (this$){
var this$__$1 = this;
return (this$__$1["displayName"]);
});})(x49712))
;

x49712.cljs$core$INamed$_namespace$arity$1 = ((function (x49712){
return (function (this$){
var this$__$1 = this;
return null;
});})(x49712))
;

x49712.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x49712.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x49712){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core._write(writer,["\uD83D\uDC41[",cljs.core.name(this$__$1),"]"].join(''));
});})(x49712))
;

return x49712;
})();
chia.view.class$.extend_constructor = (function chia$view$class$extend_constructor(p__49714,constructor$){
var map__49715 = p__49714;
var map__49715__$1 = (((((!((map__49715 == null))))?(((((map__49715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49715):map__49715);
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var static_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"static-keys","static-keys",-2004424157));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var unqualified_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692));
var qualified_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"qualified-keys","qualified-keys",775933400));
applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic(constructor$.prototype,chia.view.class$.Component.prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chia.view.class$.ChiaLegacyClass,chia.view.class$.wrap_methods(lifecycle_keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383)], null))], 0));

var G__49717_49989 = constructor$.prototype;
var obj49718_49990 = G__49717_49989;
var obj49719_49991 = (((!((obj49718_49990 == null))))?obj49718_49990:({}));
(obj49719_49991["displayName"] = react_keys.displayName);


applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(G__49717_49989,unqualified_keys);

var G__49722_49992 = G__49717_49989;
if(cljs.core.truth_(qualified_keys)){
var obj49723_49993 = G__49722_49992;
var obj49724_49994 = (((!((obj49723_49993 == null))))?obj49723_49993:({}));
(obj49724_49994["chia$class"] = qualified_keys);

} else {
}


applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic(constructor$,chia.view.class$.wrap_methods(static_keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("static","get-derived-state-from-props","static/get-derived-state-from-props",-945258502)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_keys], 0));

return constructor$;
});
goog.exportSymbol('chia.view.class$.extend_constructor', chia.view.class$.extend_constructor);
chia.view.class$.validate_specs = (function chia$view$class$validate_specs(p__49727,props,children){
var map__49728 = p__49727;
var map__49728__$1 = (((((!((map__49728 == null))))?(((((map__49728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49728):map__49728);
var prop_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49728__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49728__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
if(cljs.core.truth_(goog.DEBUG)){
var G__49730_50048 = prop_spec;
var G__49730_50049__$1 = (((G__49730_50048 == null))?null:cljs.spec.alpha.explain_data(G__49730_50048,props));
if((G__49730_50049__$1 == null)){
} else {
console.warn(G__49730_50049__$1);
}

var G__49731 = children_spec;
var G__49731__$1 = (((G__49731 == null))?null:cljs.spec.alpha.explain_data(G__49731,children));
if((G__49731__$1 == null)){
return null;
} else {
return console.warn(G__49731__$1);
}
} else {
return null;
}
});
chia.view.class$.element_key = (function chia$view$class$element_key(props,children,constructor$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = (function (){var obj49741 = constructor$;
var k49742 = "key";
if((function (){var obj49743 = obj49741;
return (((!((obj49743 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49742,obj49743)));
})()){
return (obj49741[k49742]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var class_react_key = temp__5720__auto__;
if(typeof class_react_key === 'string'){
return class_react_key;
} else {
if((class_react_key instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,class_react_key);
} else {
if(cljs.core.fn_QMARK_(class_react_key)){
return class_react_key.apply(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("view","children","view/children",-946116505),children),cljs.core.to_array(children));
} else {
throw Error("Invalid key supplied to component");

}
}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (constructor$["displayName"]);
}
}
})());
});
/**
 * Return a React element factory.
 */
chia.view.class$.view_STAR_ = (function chia$view$class$view_STAR_(view_base,constructor$){
var constructor$__$1 = chia.view.class$.extend_constructor(view_base,constructor$);
var G__49744 = ((function (constructor$__$1){
return (function() { 
var G__50064__delegate = function (props,children){
var vec__49745 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var map__49748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49745,(0),null);
var map__49748__$1 = (((((!((map__49748 == null))))?(((((map__49748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49748):map__49748);
var props__$1 = map__49748__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49748__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49745,(1),null);
var G__49750 = constructor$__$1;
var G__49751 = ({"key": chia.view.class$.element_key(props__$1,children__$1,constructor$__$1), "ref": ref, "props": (function (){var G__49752 = props__$1;
if((G__49752 == null)){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49752,new cljs.core.Keyword(null,"ref","ref",1289896967));
}
})(), "children": children__$1});
return (chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$2 ? chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$2(G__49750,G__49751) : chia.view.class$._create_element.call(null,G__49750,G__49751));
};
var G__50064 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__50068__i = 0, G__50068__a = new Array(arguments.length -  1);
while (G__50068__i < G__50068__a.length) {G__50068__a[G__50068__i] = arguments[G__50068__i + 1]; ++G__50068__i;}
  children = new cljs.core.IndexedSeq(G__50068__a,0,null);
} 
return G__50064__delegate.call(this,props,children);};
G__50064.cljs$lang$maxFixedArity = 1;
G__50064.cljs$lang$applyTo = (function (arglist__50069){
var props = cljs.core.first(arglist__50069);
var children = cljs.core.rest(arglist__50069);
return G__50064__delegate(props,children);
});
G__50064.cljs$core$IFn$_invoke$arity$variadic = G__50064__delegate;
return G__50064;
})()
;})(constructor$__$1))
;
var obj49753_50070 = G__49744;
var obj49754_50071 = (((!((obj49753_50070 == null))))?obj49753_50070:({}));
(obj49754_50071["chia$constructor"] = constructor$__$1);


return G__49744;
});
chia.view.class$.component_QMARK_ = (function chia$view$class$component_QMARK_(x){
return (chia.view.class$.Component === x);
});
/**
 * Get (qualified) keys from the view's methods map.
 * 
 * Does not return lifecycle methods
 */
chia.view.class$.class_get = (function chia$view$class$class_get(var_args){
var G__49758 = arguments.length;
switch (G__49758) {
case 2:
return chia.view.class$.class_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chia.view.class$.class_get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.class$.class_get.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
return chia.view.class$.class_get.cljs$core$IFn$_invoke$arity$3(this$,k,null);
});

chia.view.class$.class_get.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__4131__auto__ = (cljs.core.truth_(this$)?(function (){var temp__5720__auto__ = (function (){var or__4131__auto__ = (function (){var obj49777 = this$;
var k49778 = "chia$class";
if((function (){var obj49779 = obj49777;
return (((!((obj49779 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49778,obj49779)));
})()){
return (obj49777[k49778]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var obj49784 = (function (){var obj49782 = (function (){var obj49780 = this$;
var k49781 = "chia$constructor";
if((function (){var obj49786 = obj49780;
return (((!((obj49786 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49781,obj49786)));
})()){
return (obj49780[k49781]);
} else {
return undefined;
}
})();
var k49783 = "prototype";
if((function (){var obj49787 = obj49782;
return (((!((obj49787 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49783,obj49787)));
})()){
return (obj49782[k49783]);
} else {
return undefined;
}
})();
var k49785 = "chia$class";
if((function (){var obj49788 = obj49784;
return (((!((obj49788 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49785,obj49788)));
})()){
return (obj49784[k49785]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var class$ = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class$,k);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

chia.view.class$.class_get.cljs$lang$maxFixedArity = 3;

chia.view.class$.context_observer = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),cljs.core.constantly(true),new cljs.core.Keyword("view","render","view/render",-1412767573),(function chia$view$class$__context_observer(p__49792){
var map__49793 = p__49792;
var map__49793__$1 = (((((!((map__49793 == null))))?(((((map__49793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49793):map__49793);
var view_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49793__$1,new cljs.core.Keyword(null,"view-fn","view-fn",-2140700655));
var context_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49793__$1,new cljs.core.Keyword(null,"context-value","context-value",1216098272));
return chia.view.props.to_element((view_fn.cljs$core$IFn$_invoke$arity$1 ? view_fn.cljs$core$IFn$_invoke$arity$1(context_value) : view_fn.call(null,context_value)));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"view.class/context-observer"}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function chia$view$class$context_observer49790(props49791){
var G__49789 = this;
chia.view.class$.Component.call(G__49789,props49791);

var obj49795_50185 = G__49789;
var obj49796_50186 = (((!((obj49795_50185 == null))))?obj49795_50185:({}));
obj49796_50186.state = ({});



return G__49789;
}));
/**
 * Reads a React context value within component tree.
 * 
 * `context` should be a keyword or React Context instance.
 */
chia.view.class$.consume_STAR_ = (function chia$view$class$consume_STAR_(ctx,f){
var G__49802 = (function (){var obj49805 = ctx;
var k49806 = "Consumer";
if((function (){var obj49807 = obj49805;
return (((!((obj49807 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k49806,obj49807)));
})()){
return (obj49805[k49806]);
} else {
return undefined;
}
})();
var G__49803 = ({});
var G__49804 = ((function (G__49802,G__49803){
return (function (p1__49801_SHARP_){
var G__49808 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-fn","view-fn",-2140700655),f,new cljs.core.Keyword(null,"context-value","context-value",1216098272),p1__49801_SHARP_], null);
return (chia.view.class$.context_observer.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.context_observer.cljs$core$IFn$_invoke$arity$1(G__49808) : chia.view.class$.context_observer.call(null,G__49808));
});})(G__49802,G__49803))
;
return (chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$3 ? chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$3(G__49802,G__49803,G__49804) : chia.view.class$._create_element.call(null,G__49802,G__49803,G__49804));
});
