goog.provide('chia.view.class$');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('applied_science.js_interop');
goog.require('chia.view.render_loop');
goog.require('chia.reactive');
goog.require('chia.view.registry');
goog.require('cljs.spec.alpha');
goog.require('chia.view.class$.view_specs');
goog.require('chia.view.class$.util');
goog.require('chia.view.impl');
goog.require('chia.util');
chia.view.class$.Component = module$node_modules$react$index.Component;
chia.view.class$._create_element = module$node_modules$react$index.createElement;
/**
 * Return DOM node for component
 */
chia.view.class$.dom_node = module$node_modules$react_dom$index.findDOMNode;
chia.view.class$.get_derived_state_from_props = (function chia$view$class$get_derived_state_from_props(props,$state){
var obj65799 = $state;
var obj65801 = (function (){var obj65803 = (function (){var obj65804 = (function (){var obj65805 = (((!((obj65799 == null))))?obj65799:({}));
(obj65805["prev-props"] = ($state["props"]));

return obj65805;
})();
(obj65804["props"] = (props["props"]));

return obj65804;
})();
(obj65803["prev-children"] = ($state["children"]));

return obj65803;
})();
(obj65801["children"] = (props["children"]));

return obj65801;
});
chia.view.class$.bind = (function chia$view$class$bind(f){
return (function (){
var this$ = this;
var temp__5718__auto__ = this$.state.children;
if(cljs.core.truth_(temp__5718__auto__)){
var children__52334__auto__ = temp__5718__auto__;
return f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__52334__auto__)));
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
var G__65830_66042 = new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$);
if((G__65830_66042 == null)){
} else {
cljs.core.remove_watch(G__65830_66042,this$);
}

var seq__65833_66043 = cljs.core.seq((function (){var G__65843 = (this$["chia$onUnmount"]);
if((G__65843 == null)){
return null;
} else {
return cljs.core.vals(G__65843);
}
})());
var chunk__65834_66044 = null;
var count__65835_66045 = (0);
var i__65836_66046 = (0);
while(true){
if((i__65836_66046 < count__65835_66045)){
var f_66047 = chunk__65834_66044.cljs$core$IIndexed$_nth$arity$2(null,i__65836_66046);
if(cljs.core.truth_(f_66047)){
(f_66047.cljs$core$IFn$_invoke$arity$1 ? f_66047.cljs$core$IFn$_invoke$arity$1(this$) : f_66047.call(null,this$));
} else {
}


var G__66048 = seq__65833_66043;
var G__66049 = chunk__65834_66044;
var G__66050 = count__65835_66045;
var G__66051 = (i__65836_66046 + (1));
seq__65833_66043 = G__66048;
chunk__65834_66044 = G__66049;
count__65835_66045 = G__66050;
i__65836_66046 = G__66051;
continue;
} else {
var temp__5720__auto___66052 = cljs.core.seq(seq__65833_66043);
if(temp__5720__auto___66052){
var seq__65833_66053__$1 = temp__5720__auto___66052;
if(cljs.core.chunked_seq_QMARK_(seq__65833_66053__$1)){
var c__4550__auto___66054 = cljs.core.chunk_first(seq__65833_66053__$1);
var G__66055 = cljs.core.chunk_rest(seq__65833_66053__$1);
var G__66056 = c__4550__auto___66054;
var G__66057 = cljs.core.count(c__4550__auto___66054);
var G__66058 = (0);
seq__65833_66043 = G__66055;
chunk__65834_66044 = G__66056;
count__65835_66045 = G__66057;
i__65836_66046 = G__66058;
continue;
} else {
var f_66059 = cljs.core.first(seq__65833_66053__$1);
if(cljs.core.truth_(f_66059)){
(f_66059.cljs$core$IFn$_invoke$arity$1 ? f_66059.cljs$core$IFn$_invoke$arity$1(this$) : f_66059.call(null,this$));
} else {
}


var G__66060 = cljs.core.next(seq__65833_66053__$1);
var G__66061 = null;
var G__66062 = (0);
var G__66063 = (0);
seq__65833_66043 = G__66060;
chunk__65834_66044 = G__66061;
count__65835_66045 = G__66062;
i__65836_66046 = G__66063;
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
var G__65846 = (function (){var obj65848 = $state;
var obj65849 = (function (){var obj65850 = (((!((obj65848 == null))))?obj65848:({}));
(obj65850["prev-props"] = ($state["props"]));

return obj65850;
})();
(obj65849["prev-children"] = ($state["children"]));

return obj65849;
})();
if(cljs.core.truth_(state_atom)){
var obj65854 = G__65846;
var obj65855 = (((!((obj65854 == null))))?obj65854:({}));
(obj65855["prev-state"] = cljs.core.deref(state_atom));

return obj65855;
} else {
return G__65846;
}
})], null);
chia.view.class$.wrap_method = (function chia$view$class$wrap_method(k,f){
if(cljs.core.not(f)){
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(k) : chia.view.class$.default_methods.call(null,k));
} else {
var G__65866 = k;
var G__65866__$1 = (((G__65866 instanceof cljs.core.Keyword))?G__65866.fqn:null);
switch (G__65866__$1) {
case "view/should-update":
case "view/will-receive-state":
return chia.view.class$.bind(f);

break;
case "view/will-unmount":
return ((function (G__65866,G__65866__$1){
return (function (){
var this$ = this;
var temp__5718__auto___66071 = this$.state.children;
if(cljs.core.truth_(temp__5718__auto___66071)){
var children__52334__auto___66072 = temp__5718__auto___66071;
f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__52334__auto___66072)));
} else {
f.call(this$,this$);
}

return (function (){var G__65867 = new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603);
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(G__65867) : chia.view.class$.default_methods.call(null,G__65867));
})().call(this$);
});
;})(G__65866,G__65866__$1))

break;
case "view/render":
return ((function (G__65866,G__65866__$1){
return (function (){
var this$ = this;
var obj65871_66079 = this$;
var obj65872_66080 = (((!((obj65871_66079 == null))))?obj65871_66079:({}));
obj65872_66080.chia$toUpdate = false;


var reader__51578__auto__ = this$;
var result__51579__auto__ = (function (){var _STAR_reader_STAR__orig_val__65877 = chia.reactive._STAR_reader_STAR_;
var _STAR_reader_dependency_log_STAR__orig_val__65878 = chia.reactive._STAR_reader_dependency_log_STAR_;
var _STAR_reader_STAR__temp_val__65879 = reader__51578__auto__;
var _STAR_reader_dependency_log_STAR__temp_val__65880 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__temp_val__65879;

chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__temp_val__65880;

try{var value__51580__auto__ = (function (){var temp__5718__auto__ = this$.state.children;
if(cljs.core.truth_(temp__5718__auto__)){
var children__52334__auto__ = temp__5718__auto__;
return f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__52334__auto__)));
} else {
return f.call(this$,this$);
}
})();
return ({value:value__51580__auto__,deps:cljs.core.deref(chia.reactive._STAR_reader_dependency_log_STAR_)});
}finally {chia.reactive._STAR_reader_dependency_log_STAR_ = _STAR_reader_dependency_log_STAR__orig_val__65878;

chia.reactive._STAR_reader_STAR_ = _STAR_reader_STAR__orig_val__65877;
}})();
((function (reader__51578__auto__,result__51579__auto__,this$,G__65866,G__65866__$1){
return (function (){
return chia.reactive.handle_next_deps_BANG_(reader__51578__auto__,result__51579__auto__.deps);
});})(reader__51578__auto__,result__51579__auto__,this$,G__65866,G__65866__$1))
.call();

return result__51579__auto__.value;
});
;})(G__65866,G__65866__$1))

break;
case "view/did-update":
return ((function (G__65866,G__65866__$1){
return (function (){
var this$ = this;
var temp__5718__auto___66081 = this$.state.children;
if(cljs.core.truth_(temp__5718__auto___66081)){
var children__52334__auto___66082 = temp__5718__auto___66081;
f.apply(this$,cljs.core.to_array(cljs.core.cons(this$,children__52334__auto___66082)));
} else {
f.call(this$,this$);
}

return (function (){var G__65887 = new cljs.core.Keyword("view","did-update","view/did-update",-2147322383);
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(G__65887) : chia.view.class$.default_methods.call(null,G__65887));
})().call(this$);
});
;})(G__65866,G__65866__$1))

break;
case "view/did-catch":
return ((function (G__65866,G__65866__$1){
return (function (error,info){
var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$,error,info) : f.call(null,this$,error,info));
});
;})(G__65866,G__65866__$1))

break;
case "static/get-derived-state-from-props":
return ((function (G__65866,G__65866__$1){
return (function (props,state){
var default$ = (function (){var G__65889 = new cljs.core.Keyword("static","get-derived-state-from-props","static/get-derived-state-from-props",-945258502);
return (chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.default_methods.cljs$core$IFn$_invoke$arity$1(G__65889) : chia.view.class$.default_methods.call(null,G__65889));
})();
var G__65892 = props;
var G__65893 = (default$.cljs$core$IFn$_invoke$arity$2 ? default$.cljs$core$IFn$_invoke$arity$2(props,state) : default$.call(null,props,state));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__65892,G__65893) : f.call(null,G__65892,G__65893));
});
;})(G__65866,G__65866__$1))

break;
default:
if(cljs.core.fn_QMARK_(f)){
var G__65895 = cljs.core.namespace(k);
switch (G__65895) {
case "view":
return chia.view.class$.bind(f);

break;
case "static":
return f;

break;
default:
return ((function (G__65895,G__65866,G__65866__$1){
return (function() { 
var G__66088__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__66088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66089__i = 0, G__66089__a = new Array(arguments.length -  0);
while (G__66089__i < G__66089__a.length) {G__66089__a[G__66089__i] = arguments[G__66089__i + 0]; ++G__66089__i;}
  args = new cljs.core.IndexedSeq(G__66089__a,0,null);
} 
return G__66088__delegate.call(this,args);};
G__66088.cljs$lang$maxFixedArity = 0;
G__66088.cljs$lang$applyTo = (function (arglist__66090){
var args = cljs.core.seq(arglist__66090);
return G__66088__delegate(args);
});
G__66088.cljs$core$IFn$_invoke$arity$variadic = G__66088__delegate;
return G__66088;
})()
;
;})(G__65895,G__65866,G__65866__$1))

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
var obj65899 = obj;
var obj65902 = (((!((obj65899 == null))))?obj65899:({}));
(obj65902[applied_science.js_interop.impl.wrap_key((function (){var or__4131__auto__ = (chia.view.class$.util.lifecycle_keys.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.util.lifecycle_keys.cljs$core$IFn$_invoke$arity$1(k) : chia.view.class$.util.lifecycle_keys.call(null,k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__65908 = cljs.core.name(k);
return (chia.util.camel_case.cljs$core$IFn$_invoke$arity$1 ? chia.util.camel_case.cljs$core$IFn$_invoke$arity$1(G__65908) : chia.util.camel_case.call(null,G__65908));
}
})())] = chia.view.class$.wrap_method(k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,k)));

return obj65902;
}),({}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(required_keys,cljs.core.keys(methods$)));
});
/**
 * Bind a component to an IWatchable/IDeref thing.
 */
chia.view.class$.init_state_BANG_ = (function chia$view$class$init_state_BANG_(this$,watchable){
var obj65914_66092 = (this$["state"]);
var obj65915_66093 = (function (){var obj65916 = (((!((obj65914_66092 == null))))?obj65914_66092:({}));
(obj65916["state-atom"] = watchable);

return obj65916;
})();
(obj65915_66093["prev-state"] = cljs.core.deref(watchable));


cljs.core.add_watch(watchable,this$,(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var obj65919_66095 = this$;
var obj65919_66096__$1 = (((!((obj65919_66095 == null))))?obj65919_66095:({}));
var obj65923_66097 = (function (){var child65920 = (obj65919_66096__$1["state"]);
if((!((child65920 == null)))){
return child65920;
} else {
var new_child__50590__auto__ = ({});
var obj65926_66099 = obj65919_66096__$1;
(obj65926_66099["state"] = new_child__50590__auto__);


return new_child__50590__auto__;
}
})();
(obj65923_66097["prev-state"] = old_state);



var temp__5720__auto___66102 = (this$["componentWillReceiveState"]);
if(cljs.core.truth_(temp__5720__auto___66102)){
var will_receive_66103 = temp__5720__auto___66102;
will_receive_66103.call(this$);
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
var state_data_66106 = ((cljs.core.fn_QMARK_(initial_state))?(function (){var $state = (this$["state"]);
var obj65930_66109 = this$;
(obj65930_66109["state"] = chia.view.class$.get_derived_state_from_props($props,$state));


return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(initial_state,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(this$));
})():initial_state);
chia.view.class$.init_state_BANG_(this$,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_data_66106));

return this$;
});
/**
 * Lazily create and bind a state atom for `component`
 */
chia.view.class$.get_state_BANG_ = (function chia$view$class$get_state_BANG_(this$){
var $state = (function (){var obj65931 = this$;
var k65932 = "state";
if((function (){var obj65933 = obj65931;
return (((!((obj65933 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65932,obj65933)));
})()){
return (obj65931[k65932]);
} else {
return undefined;
}
})();
if((function (){var obj65934 = $state;
return (((!((obj65934 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_("state-atom",obj65934)));
})()){
} else {
chia.view.class$.init_state_BANG_(this$,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
}

return ($state["state-atom"]);
});
chia.view.class$.get_special = (function chia$view$class$get_special(this$,k,not_found){
var G__65935 = k;
var G__65935__$1 = (((G__65935 instanceof cljs.core.Keyword))?G__65935.fqn:null);
switch (G__65935__$1) {
case "view/state":
return chia.view.class$.get_state_BANG_(this$);

break;
case "view/js-state":
var obj65937 = this$;
var k65938 = "state";
if((function (){var obj65939 = obj65937;
return (((!((obj65939 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65938,obj65939)));
})()){
return (obj65937[k65938]);
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
chia.view.class$.ChiaLegacyClass = (function (){var x65940 = ({});
x65940.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x65940.cljs$core$ILookup$_lookup$arity$2 = ((function (x65940){
return (function (this$,k){
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});})(x65940))
;

x65940.cljs$core$ILookup$_lookup$arity$3 = ((function (x65940){
return (function (this$,k,not_found){
var this$__$1 = this;
var G__65943 = cljs.core.namespace(k);
switch (G__65943) {
case "view":
return chia.view.class$.get_special(this$__$1,k,not_found);

break;
default:
return chia.view.class$.get_prop(this$__$1,k,not_found);

}
});})(x65940))
;

x65940.chia$reactive$IInvalidate$ = cljs.core.PROTOCOL_SENTINEL;

x65940.chia$reactive$IInvalidate$_invalidate_BANG_$arity$1 = ((function (x65940){
return (function (this$){
var this$__$1 = this;
return chia.view.render_loop.schedule_update_BANG_(this$__$1);
});})(x65940))
;

x65940.cljs$core$INamed$ = cljs.core.PROTOCOL_SENTINEL;

x65940.cljs$core$INamed$_name$arity$1 = ((function (x65940){
return (function (this$){
var this$__$1 = this;
return (this$__$1["displayName"]);
});})(x65940))
;

x65940.cljs$core$INamed$_namespace$arity$1 = ((function (x65940){
return (function (this$){
var this$__$1 = this;
return null;
});})(x65940))
;

x65940.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x65940.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x65940){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core._write(writer,["\uD83D\uDC41[",cljs.core.name(this$__$1),"]"].join(''));
});})(x65940))
;

return x65940;
})();
chia.view.class$.extend_constructor = (function chia$view$class$extend_constructor(p__65946,constructor$){
var map__65947 = p__65946;
var map__65947__$1 = (((((!((map__65947 == null))))?(((((map__65947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65947):map__65947);
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var static_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"static-keys","static-keys",-2004424157));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var unqualified_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692));
var qualified_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"qualified-keys","qualified-keys",775933400));
applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic(constructor$.prototype,chia.view.class$.Component.prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chia.view.class$.ChiaLegacyClass,chia.view.class$.wrap_methods(lifecycle_keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383)], null))], 0));

var G__65949_66119 = constructor$.prototype;
var obj65950_66120 = G__65949_66119;
var obj65951_66121 = (((!((obj65950_66120 == null))))?obj65950_66120:({}));
(obj65951_66121["displayName"] = react_keys.displayName);


applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(G__65949_66119,unqualified_keys);

var G__65954_66122 = G__65949_66119;
if(cljs.core.truth_(qualified_keys)){
var obj65955_66123 = G__65954_66122;
var obj65956_66124 = (((!((obj65955_66123 == null))))?obj65955_66123:({}));
(obj65956_66124["chia$class"] = qualified_keys);

} else {
}


applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic(constructor$,chia.view.class$.wrap_methods(static_keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("static","get-derived-state-from-props","static/get-derived-state-from-props",-945258502)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_keys], 0));

return constructor$;
});
goog.exportSymbol('chia.view.class$.extend_constructor', chia.view.class$.extend_constructor);
chia.view.class$.validate_specs = (function chia$view$class$validate_specs(p__65959,props,children){
var map__65960 = p__65959;
var map__65960__$1 = (((((!((map__65960 == null))))?(((((map__65960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65960):map__65960);
var prop_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
if(cljs.core.truth_(goog.DEBUG)){
var G__65962_66125 = prop_spec;
var G__65962_66126__$1 = (((G__65962_66125 == null))?null:cljs.spec.alpha.explain_data(G__65962_66125,props));
if((G__65962_66126__$1 == null)){
} else {
console.warn(G__65962_66126__$1);
}

var G__65963 = children_spec;
var G__65963__$1 = (((G__65963 == null))?null:cljs.spec.alpha.explain_data(G__65963,children));
if((G__65963__$1 == null)){
return null;
} else {
return console.warn(G__65963__$1);
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
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = (function (){var obj65973 = constructor$;
var k65974 = "key";
if((function (){var obj65975 = obj65973;
return (((!((obj65975 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k65974,obj65975)));
})()){
return (obj65973[k65974]);
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
var G__65976 = ((function (constructor$__$1){
return (function() { 
var G__66140__delegate = function (props,children){
var vec__65977 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var map__65980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65977,(0),null);
var map__65980__$1 = (((((!((map__65980 == null))))?(((((map__65980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65980):map__65980);
var props__$1 = map__65980__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65977,(1),null);
var G__65982 = constructor$__$1;
var G__65983 = ({"key": chia.view.class$.element_key(props__$1,children__$1,constructor$__$1), "ref": ref, "props": (function (){var G__65984 = props__$1;
if((G__65984 == null)){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__65984,new cljs.core.Keyword(null,"ref","ref",1289896967));
}
})(), "children": children__$1});
return (chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$2 ? chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$2(G__65982,G__65983) : chia.view.class$._create_element.call(null,G__65982,G__65983));
};
var G__66140 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__66144__i = 0, G__66144__a = new Array(arguments.length -  1);
while (G__66144__i < G__66144__a.length) {G__66144__a[G__66144__i] = arguments[G__66144__i + 1]; ++G__66144__i;}
  children = new cljs.core.IndexedSeq(G__66144__a,0,null);
} 
return G__66140__delegate.call(this,props,children);};
G__66140.cljs$lang$maxFixedArity = 1;
G__66140.cljs$lang$applyTo = (function (arglist__66145){
var props = cljs.core.first(arglist__66145);
var children = cljs.core.rest(arglist__66145);
return G__66140__delegate(props,children);
});
G__66140.cljs$core$IFn$_invoke$arity$variadic = G__66140__delegate;
return G__66140;
})()
;})(constructor$__$1))
;
var obj65985_66147 = G__65976;
var obj65986_66148 = (((!((obj65985_66147 == null))))?obj65985_66147:({}));
(obj65986_66148["chia$constructor"] = constructor$__$1);


return G__65976;
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
var G__65990 = arguments.length;
switch (G__65990) {
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
var or__4131__auto__ = (cljs.core.truth_(this$)?(function (){var temp__5720__auto__ = (function (){var or__4131__auto__ = (function (){var obj66009 = this$;
var k66010 = "chia$class";
if((function (){var obj66011 = obj66009;
return (((!((obj66011 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66010,obj66011)));
})()){
return (obj66009[k66010]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var obj66016 = (function (){var obj66014 = (function (){var obj66012 = this$;
var k66013 = "chia$constructor";
if((function (){var obj66018 = obj66012;
return (((!((obj66018 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66013,obj66018)));
})()){
return (obj66012[k66013]);
} else {
return undefined;
}
})();
var k66015 = "prototype";
if((function (){var obj66020 = obj66014;
return (((!((obj66020 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66015,obj66020)));
})()){
return (obj66014[k66015]);
} else {
return undefined;
}
})();
var k66017 = "chia$class";
if((function (){var obj66021 = obj66016;
return (((!((obj66021 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66017,obj66021)));
})()){
return (obj66016[k66017]);
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

chia.view.class$.context_observer = chia.view.class$.view_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),cljs.core.constantly(true),new cljs.core.Keyword("view","render","view/render",-1412767573),(function chia$view$class$__context_observer(p__66025){
var map__66026 = p__66025;
var map__66026__$1 = (((((!((map__66026 == null))))?(((((map__66026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66026):map__66026);
var view_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66026__$1,new cljs.core.Keyword(null,"view-fn","view-fn",-2140700655));
var context_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66026__$1,new cljs.core.Keyword(null,"context-value","context-value",1216098272));
return chia.view.props.to_element((view_fn.cljs$core$IFn$_invoke$arity$1 ? view_fn.cljs$core$IFn$_invoke$arity$1(context_value) : view_fn.call(null,context_value)));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),({"displayName":"view.class/context-observer"}),new cljs.core.Keyword(null,"unqualified-keys","unqualified-keys",-639163692),({})], null),(function chia$view$class$context_observer66023(props66024){
var G__66022 = this;
chia.view.class$.Component.call(G__66022,props66024);

var obj66028_66158 = G__66022;
var obj66029_66159 = (((!((obj66028_66158 == null))))?obj66028_66158:({}));
obj66029_66159.state = ({});



return G__66022;
}));
/**
 * Reads a React context value within component tree.
 * 
 * `context` should be a keyword or React Context instance.
 */
chia.view.class$.consume_STAR_ = (function chia$view$class$consume_STAR_(ctx,f){
var G__66035 = (function (){var obj66038 = ctx;
var k66039 = "Consumer";
if((function (){var obj66040 = obj66038;
return (((!((obj66040 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66039,obj66040)));
})()){
return (obj66038[k66039]);
} else {
return undefined;
}
})();
var G__66036 = ({});
var G__66037 = ((function (G__66035,G__66036){
return (function (p1__66034_SHARP_){
var G__66041 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-fn","view-fn",-2140700655),f,new cljs.core.Keyword(null,"context-value","context-value",1216098272),p1__66034_SHARP_], null);
return (chia.view.class$.context_observer.cljs$core$IFn$_invoke$arity$1 ? chia.view.class$.context_observer.cljs$core$IFn$_invoke$arity$1(G__66041) : chia.view.class$.context_observer.call(null,G__66041));
});})(G__66035,G__66036))
;
return (chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$3 ? chia.view.class$._create_element.cljs$core$IFn$_invoke$arity$3(G__66035,G__66036,G__66037) : chia.view.class$._create_element.call(null,G__66035,G__66036,G__66037));
});

//# sourceMappingURL=chia.view.class.js.map
