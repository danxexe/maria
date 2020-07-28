goog.provide('cljs.js');
goog.provide("cljs.core$macros");
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48474 = arguments.length;
var i__4731__auto___48475 = (0);
while(true){
if((i__4731__auto___48475 < len__4730__auto___48474)){
args__4736__auto__.push((arguments[i__4731__auto___48475]));

var G__48476 = (i__4731__auto___48475 + (1));
i__4731__auto___48475 = G__48476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__47144 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__47145 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47145;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47144;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq47136){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47136));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__47194 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__47195 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__47195;

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__47194;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__47209){
var map__47210 = p__47209;
var map__47210__$1 = (((((!((map__47210 == null))))?(((((map__47210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47210):map__47210);
var resource = map__47210__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47210__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__47230 = arguments.length;
switch (G__47230) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__47232 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__47232,((function (G__47232){
return (function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),cljs.core.PersistentHashMap.EMPTY);
});})(G__47232))
);

return G__47232;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__47233 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__47233,init);

return G__47233;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map(),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__47267){
var map__47268 = p__47267;
var map__47268__$1 = (((((!((map__47268 == null))))?(((((map__47268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47268):map__47268);
var opts = map__47268__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47268__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47268__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47268__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__47278 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__47278,".","/");
} else {
return G__47278;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4131__auto__ = output_dir;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__47280 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__47280__$1 = ((source_map_timestamp === true)?[G__47280,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__47280);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__47280__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__47280__$1;
}
})();
var file = (function (){var G__47282 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__47282__$1 = ((source_map_timestamp === true)?[G__47282,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__47282);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__47282__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__47282__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__47290 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__47268,map__47268__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__47291){
var vec__47292 = p__47291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47292,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47292,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__47268,map__47268__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__47290);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47298){
var vec__47299 = p__47298;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47299,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__47313 = cljs.core.first(coll);
var G__47314 = ((function (G__47313){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__47319 = proc;
var G__47320 = cljs.core.rest(coll);
var G__47321 = break_QMARK_;
var G__47322 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__47319,G__47320,G__47321,G__47322) : cljs.js.run_async_BANG_.call(null,G__47319,G__47320,G__47321,G__47322));
}
});})(G__47313))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__47313,G__47314) : proc.call(null,G__47313,G__47314));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"defs","defs",1398449717)], null));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var fexpr__47331 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null);
return (fexpr__47331.cljs$core$IFn$_invoke$arity$1 ? fexpr__47331.cljs$core$IFn$_invoke$arity$1(name) : fexpr__47331.call(null,name));
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__47335 = arguments.length;
switch (G__47335) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__47349 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__47349);
} else {
return G__47349;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)," namespace"].join('')], 0));
} else {
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname)))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__47363 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name)], null);
var G__47364 = ((function (G__47363,env,bound_vars__$1,aname){
return (function (resource){

if(cljs.core.truth_(resource)){
var map__47368 = resource;
var map__47368__$1 = (((((!((map__47368 == null))))?(((((map__47368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47368):map__47368);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__47370 = cljs.core.keyword_identical_QMARK_;
var expr__47371 = lang;
if(cljs.core.truth_((function (){var G__47377 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__47378 = expr__47371;
return (pred__47370.cljs$core$IFn$_invoke$arity$2 ? pred__47370.cljs$core$IFn$_invoke$arity$2(G__47377,G__47378) : pred__47370.call(null,G__47377,G__47378));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__47370,expr__47371,map__47368,map__47368__$1,lang,source,cache,source_map,file,G__47363,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__47386 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47386) : cb.call(null,G__47386));
}
});})(pred__47370,expr__47371,map__47368,map__47368__$1,lang,source,cache,source_map,file,G__47363,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__47389 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__47391 = expr__47371;
return (pred__47370.cljs$core$IFn$_invoke$arity$2 ? pred__47370.cljs$core$IFn$_invoke$arity$2(G__47389,G__47391) : pred__47370.call(null,G__47389,G__47391));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__47370,expr__47371,map__47368,map__47368__$1,lang,source,cache,source_map,file,G__47363,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__47370,expr__47371,map__47368,map__47368__$1,lang,source,cache,source_map,file,G__47363,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__47394_48690 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__47394_48690.cljs$core$IFn$_invoke$arity$1 ? fexpr__47394_48690.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__47394_48690.call(null,resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e47393){var cause = e47393;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__47399 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47399) : cb.call(null,G__47399));
}
}
});})(pred__47370,expr__47371,map__47368,map__47368__$1,lang,source,cache,source_map,file,G__47363,env,bound_vars__$1,aname))
);
}
});})(pred__47370,expr__47371,map__47368,map__47368__$1,lang,source,cache,source_map,file,G__47363,env,bound_vars__$1,aname))
);
} else {
var G__47400 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47400) : cb.call(null,G__47400));
}
}
} else {
var G__47401 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__47402 = (cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812));
var G__47403 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__47402,G__47403) : cljs.analyzer.error_message.call(null,G__47402,G__47403));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47401) : cb.call(null,G__47401));
}
});})(G__47363,env,bound_vars__$1,aname))
;
var fexpr__47362 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__47362.cljs$core$IFn$_invoke$arity$2 ? fexpr__47362.cljs$core$IFn$_invoke$arity$2(G__47363,G__47364) : fexpr__47362.call(null,G__47363,G__47364));
}catch (e47356){var cause = e47356;
var G__47357 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47357) : cb.call(null,G__47357));
}} else {
var G__47404 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47404) : cb.call(null,G__47404));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4120__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__47405){
var vec__47406 = p__47405;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(1),null);
var entry = vec__47406;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch(new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames(new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames(new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4120__auto__ = new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4120__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4120__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__47413 = arguments.length;
switch (G__47413) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__47414 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__47415 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__47415;

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415){
return (function (p1__47411_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__47411_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415))
,deps)))){
var G__47417 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47417) : cb.call(null,G__47417));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5718__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cljs_dep = temp__5718__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__47452 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47452) : cb.call(null,G__47452));
}
});})(cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415))
);
}
});})(cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47414,_STAR_cljs_dep_set_STAR__temp_val__47415))
);
} else {
var G__47459 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47459) : cb.call(null,G__47459));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__47414;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__47475 = arguments.length;
switch (G__47475) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__47476 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__47477 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__47477;

try{var compiler = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477){
return (function (p1__47470_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__47470_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477))
,deps)))){
var G__47484 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47484) : cb.call(null,G__47484));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__47495 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(dep)], null);
var G__47496 = ((function (G__47495,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477){
return (function (resource){

if(cljs.core.not(resource)){
var temp__5718__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cljs_dep = temp__5718__auto__;
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5718__auto__,G__47495,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__47505 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47505) : cb.call(null,G__47505));
}
});})(cljs_dep,temp__5718__auto__,G__47495,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477))
);
} else {
var G__47506 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__47507 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__47508 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__47507,G__47508) : cljs.analyzer.error_message.call(null,G__47507,G__47508));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47506) : cb.call(null,G__47506));
}
} else {
var map__47510 = resource;
var map__47510__$1 = (((((!((map__47510 == null))))?(((((map__47510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47510):map__47510);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__47513 = cljs.core.keyword_identical_QMARK_;
var expr__47514 = lang;
if(cljs.core.truth_((function (){var G__47516 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__47517 = expr__47514;
return (pred__47513.cljs$core$IFn$_invoke$arity$2 ? pred__47513.cljs$core$IFn$_invoke$arity$2(G__47516,G__47517) : pred__47513.call(null,G__47516,G__47517));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__47513,expr__47514,map__47510,map__47510__$1,name,lang,source,file,G__47495,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(pred__47513,expr__47514,map__47510,map__47510__$1,name,lang,source,file,G__47495,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477))
);
} else {
if(cljs.core.truth_((function (){var G__47518 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__47519 = expr__47514;
return (pred__47513.cljs$core$IFn$_invoke$arity$2 ? pred__47513.cljs$core$IFn$_invoke$arity$2(G__47518,G__47519) : pred__47513.call(null,G__47518,G__47519));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__47495,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__47476,_STAR_cljs_dep_set_STAR__temp_val__47477))
;
var fexpr__47494 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__47494.cljs$core$IFn$_invoke$arity$2 ? fexpr__47494.cljs$core$IFn$_invoke$arity$2(G__47495,G__47496) : fexpr__47494.call(null,G__47495,G__47496));
}catch (e47489){var cause = e47489;
var G__47490 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47490) : cb.call(null,G__47490));
}} else {
var G__47520 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47520) : cb.call(null,G__47520));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__47476;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__4131__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
var G__47525 = bound_vars;
var G__47526 = k__$1;
var G__47527 = cljs.core.next(macros);
var G__47528 = lib;
var G__47529 = reload;
var G__47530 = reloads;
var G__47531 = opts;
var G__47532 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__47525,G__47526,G__47527,G__47528,G__47529,G__47530,G__47531,G__47532) : cljs.js.load_macros.call(null,G__47525,G__47526,G__47527,G__47528,G__47529,G__47530,G__47531,G__47532));
} else {
var temp__5718__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cljs_dep = temp__5718__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__47533 = bound_vars;
var G__47534 = k__$1;
var G__47535 = cljs.core.next(macros);
var G__47536 = lib;
var G__47537 = reload;
var G__47538 = reloads;
var G__47539 = opts;
var G__47540 = ((function (G__47533,G__47534,G__47535,G__47536,G__47537,G__47538,G__47539,cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__47541 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47541) : cb.call(null,G__47541));
}
});})(G__47533,G__47534,G__47535,G__47536,G__47537,G__47538,G__47539,cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__47533,G__47534,G__47535,G__47536,G__47537,G__47538,G__47539,G__47540) : cljs.js.load_macros.call(null,G__47533,G__47534,G__47535,G__47536,G__47537,G__47538,G__47539,G__47540));
}
});})(cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__47542 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47542) : cb.call(null,G__47542));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__47557 = arguments.length;
switch (G__47557) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__47575 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(2),null);
var rewrite_renames = ((function (vec__47575,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__47575,uk,rk,renk){
return (function (acc,p__47586){
var vec__47591 = p__47586;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47591,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47591,(1),null);
var entry = vec__47591;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__47575,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__47575,uk,rk,renk))
;
var rewrite_deps = ((function (vec__47575,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__47575,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5718__auto__)){
var new_dep = temp__5718__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__47575,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__47575,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__47575,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__47554_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__47554_SHARP_);
});})(vec__47575,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__47575,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__47555_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__47555_SHARP_)], 0));
});})(vec__47575,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__47628,cenv){
var map__47631 = p__47628;
var map__47631__$1 = (((((!((map__47631 == null))))?(((((map__47631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47631):map__47631);
var ast = map__47631__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47631__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__47631,map__47631__$1,ast,requires,name){
return (function (p__47659){
var vec__47664 = p__47659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47664,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47664,(1),null);
var map__47667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__47667__$1 = (((((!((map__47667 == null))))?(((((map__47667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47667):map__47667);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4131__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__47631,map__47631__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__47681 = arguments.length;
switch (G__47681) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__47683,opts,cb){
var map__47684 = p__47683;
var map__47684__$1 = (((((!((map__47684 == null))))?(((((map__47684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47684):map__47684);
var ast = map__47684__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47684__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__47686 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__47686.cljs$core$IFn$_invoke$arity$1 ? fexpr__47686.cljs$core$IFn$_invoke$arity$1(op) : fexpr__47686.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__47684,map__47684__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__47723 = rewritten_ast;
var map__47723__$1 = (((((!((map__47723 == null))))?(((((map__47723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47723):map__47723);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47723__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47723__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47723__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47723__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__47723,map__47723__$1,uses,use_macros,reload,reloads,name,map__47684,map__47684__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__47744 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__47744__$1 = (((((!((map__47744 == null))))?(((((map__47744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47744):map__47744);
var rewritten_ast__$1 = map__47744__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47744__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__47744,map__47744__$1,rewritten_ast__$1,require_macros,env,map__47723,map__47723__$1,uses,use_macros,reload,reloads,name,map__47684,map__47684__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__47768 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__47768__$1 = (((((!((map__47768 == null))))?(((((map__47768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47768):map__47768);
var rewritten_ast__$2 = map__47768__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47768__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__47782_49113 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__47783_49114 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__47784_49115 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__47785_49116 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__47784_49115;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__47785_49116;

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__47783_49114;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__47782_49113;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e47777){var cause = e47777;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__47789 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__47790 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__47791 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__47792 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__47791;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__47792;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__47794 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47794) : cb.call(null,G__47794));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__47790;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__47789;
}}catch (e47786){var cause = e47786;
var G__47787 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47787) : cb.call(null,G__47787));
}}
}
});})(map__47744,map__47744__$1,rewritten_ast__$1,require_macros,env,map__47723,map__47723__$1,uses,use_macros,reload,reloads,name,map__47684,map__47684__$1,ast,op))
);
}
});})(env,map__47723,map__47723__$1,uses,use_macros,reload,reloads,name,map__47684,map__47684__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(uses);
} else {
return and__4120__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__47797 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47797) : cb.call(null,G__47797));
}catch (e47795){var cause = e47795;
var G__47796 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47796) : cb.call(null,G__47796));
}}
}
});})(map__47684,map__47684__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = load;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})())){
var map__47799 = ast;
var map__47799__$1 = (((((!((map__47799 == null))))?(((((map__47799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47799):map__47799);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__47799,map__47799__$1,reload,name,deps,map__47684,map__47684__$1,ast,op){
return (function (p1__47674_SHARP_){
return check_uses_and_load_macros(p1__47674_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__47674_SHARP_)));
});})(map__47799,map__47799__$1,reload,name,deps,map__47684,map__47684__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(load);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__47684,map__47684__$1,ast,op){
return (function (p1__47675_SHARP_){
return check_uses_and_load_macros(p1__47675_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__47675_SHARP_)));
});})(map__47684,map__47684__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
var G__47806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47806) : cb.call(null,G__47806));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__47812_49128 = cljs.core.seq(deps);
var chunk__47813_49129 = null;
var count__47814_49130 = (0);
var i__47815_49131 = (0);
while(true){
if((i__47815_49131 < count__47814_49130)){
var dep_49132 = chunk__47813_49129.cljs$core$IIndexed$_nth$arity$2(null,i__47815_49131);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47864_49133 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47865_49134 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47866_49135 = true;
var _STAR_print_fn_STAR__temp_val__47867_49136 = ((function (seq__47812_49128,chunk__47813_49129,count__47814_49130,i__47815_49131,_STAR_print_newline_STAR__orig_val__47864_49133,_STAR_print_fn_STAR__orig_val__47865_49134,_STAR_print_newline_STAR__temp_val__47866_49135,sb__4661__auto__,dep_49132){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__47812_49128,chunk__47813_49129,count__47814_49130,i__47815_49131,_STAR_print_newline_STAR__orig_val__47864_49133,_STAR_print_fn_STAR__orig_val__47865_49134,_STAR_print_newline_STAR__temp_val__47866_49135,sb__4661__auto__,dep_49132))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47866_49135;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47867_49136;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_49132)," = require('",dep_49132,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47865_49134;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47864_49133;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__49139 = seq__47812_49128;
var G__49140 = chunk__47813_49129;
var G__49141 = count__47814_49130;
var G__49142 = (i__47815_49131 + (1));
seq__47812_49128 = G__49139;
chunk__47813_49129 = G__49140;
count__47814_49130 = G__49141;
i__47815_49131 = G__49142;
continue;
} else {
var temp__5720__auto___49143 = cljs.core.seq(seq__47812_49128);
if(temp__5720__auto___49143){
var seq__47812_49144__$1 = temp__5720__auto___49143;
if(cljs.core.chunked_seq_QMARK_(seq__47812_49144__$1)){
var c__4550__auto___49145 = cljs.core.chunk_first(seq__47812_49144__$1);
var G__49146 = cljs.core.chunk_rest(seq__47812_49144__$1);
var G__49147 = c__4550__auto___49145;
var G__49148 = cljs.core.count(c__4550__auto___49145);
var G__49149 = (0);
seq__47812_49128 = G__49146;
chunk__47813_49129 = G__49147;
count__47814_49130 = G__49148;
i__47815_49131 = G__49149;
continue;
} else {
var dep_49150 = cljs.core.first(seq__47812_49144__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47896_49151 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47897_49152 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47898_49153 = true;
var _STAR_print_fn_STAR__temp_val__47899_49154 = ((function (seq__47812_49128,chunk__47813_49129,count__47814_49130,i__47815_49131,_STAR_print_newline_STAR__orig_val__47896_49151,_STAR_print_fn_STAR__orig_val__47897_49152,_STAR_print_newline_STAR__temp_val__47898_49153,sb__4661__auto__,dep_49150,seq__47812_49144__$1,temp__5720__auto___49143){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__47812_49128,chunk__47813_49129,count__47814_49130,i__47815_49131,_STAR_print_newline_STAR__orig_val__47896_49151,_STAR_print_fn_STAR__orig_val__47897_49152,_STAR_print_newline_STAR__temp_val__47898_49153,sb__4661__auto__,dep_49150,seq__47812_49144__$1,temp__5720__auto___49143))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47898_49153;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47899_49154;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_49150)," = require('",dep_49150,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47897_49152;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47896_49151;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__49157 = cljs.core.next(seq__47812_49144__$1);
var G__49158 = null;
var G__49159 = (0);
var G__49160 = (0);
seq__47812_49128 = G__49157;
chunk__47813_49129 = G__49158;
count__47814_49130 = G__49159;
i__47815_49131 = G__49160;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__47920 = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__47920__$1 = (((((!((map__47920 == null))))?(((((map__47920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47920):map__47920);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47920__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__47923_49163 = cljs.core.seq(deps);
var chunk__47924_49164 = null;
var count__47925_49165 = (0);
var i__47926_49166 = (0);
while(true){
if((i__47926_49166 < count__47925_49165)){
var dep_49168 = chunk__47924_49164.cljs$core$IIndexed$_nth$arity$2(null,i__47926_49166);
var map__47956_49169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_49168));
var map__47956_49170__$1 = (((((!((map__47956_49169 == null))))?(((((map__47956_49169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47956_49169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47956_49169):map__47956_49169);
var global_exports_49171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47956_49170__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47958_49173 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47959_49174 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47960_49175 = true;
var _STAR_print_fn_STAR__temp_val__47961_49176 = ((function (seq__47923_49163,chunk__47924_49164,count__47925_49165,i__47926_49166,_STAR_print_newline_STAR__orig_val__47958_49173,_STAR_print_fn_STAR__orig_val__47959_49174,_STAR_print_newline_STAR__temp_val__47960_49175,sb__4661__auto__,map__47956_49169,map__47956_49170__$1,global_exports_49171,dep_49168,map__47920,map__47920__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__47923_49163,chunk__47924_49164,count__47925_49165,i__47926_49166,_STAR_print_newline_STAR__orig_val__47958_49173,_STAR_print_fn_STAR__orig_val__47959_49174,_STAR_print_newline_STAR__temp_val__47960_49175,sb__4661__auto__,map__47956_49169,map__47956_49170__$1,global_exports_49171,dep_49168,map__47920,map__47920__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47960_49175;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47961_49176;

try{cljs.compiler.emit_global_export(ns_name,global_exports_49171,dep_49168);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47959_49174;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47958_49173;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__49178 = seq__47923_49163;
var G__49179 = chunk__47924_49164;
var G__49180 = count__47925_49165;
var G__49181 = (i__47926_49166 + (1));
seq__47923_49163 = G__49178;
chunk__47924_49164 = G__49179;
count__47925_49165 = G__49180;
i__47926_49166 = G__49181;
continue;
} else {
var temp__5720__auto___49182 = cljs.core.seq(seq__47923_49163);
if(temp__5720__auto___49182){
var seq__47923_49183__$1 = temp__5720__auto___49182;
if(cljs.core.chunked_seq_QMARK_(seq__47923_49183__$1)){
var c__4550__auto___49184 = cljs.core.chunk_first(seq__47923_49183__$1);
var G__49185 = cljs.core.chunk_rest(seq__47923_49183__$1);
var G__49186 = c__4550__auto___49184;
var G__49187 = cljs.core.count(c__4550__auto___49184);
var G__49188 = (0);
seq__47923_49163 = G__49185;
chunk__47924_49164 = G__49186;
count__47925_49165 = G__49187;
i__47926_49166 = G__49188;
continue;
} else {
var dep_49189 = cljs.core.first(seq__47923_49183__$1);
var map__47962_49190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_49189));
var map__47962_49191__$1 = (((((!((map__47962_49190 == null))))?(((((map__47962_49190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47962_49190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47962_49190):map__47962_49190);
var global_exports_49192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47962_49191__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47968_49205 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47969_49206 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47970_49207 = true;
var _STAR_print_fn_STAR__temp_val__47971_49208 = ((function (seq__47923_49163,chunk__47924_49164,count__47925_49165,i__47926_49166,_STAR_print_newline_STAR__orig_val__47968_49205,_STAR_print_fn_STAR__orig_val__47969_49206,_STAR_print_newline_STAR__temp_val__47970_49207,sb__4661__auto__,map__47962_49190,map__47962_49191__$1,global_exports_49192,dep_49189,seq__47923_49183__$1,temp__5720__auto___49182,map__47920,map__47920__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__47923_49163,chunk__47924_49164,count__47925_49165,i__47926_49166,_STAR_print_newline_STAR__orig_val__47968_49205,_STAR_print_fn_STAR__orig_val__47969_49206,_STAR_print_newline_STAR__temp_val__47970_49207,sb__4661__auto__,map__47962_49190,map__47962_49191__$1,global_exports_49192,dep_49189,seq__47923_49183__$1,temp__5720__auto___49182,map__47920,map__47920__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47970_49207;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47971_49208;

try{cljs.compiler.emit_global_export(ns_name,global_exports_49192,dep_49189);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47969_49206;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47968_49205;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__49215 = cljs.core.next(seq__47923_49183__$1);
var G__49216 = null;
var G__49217 = (0);
var G__49218 = (0);
seq__47923_49163 = G__49215;
chunk__47924_49164 = G__49216;
count__47925_49165 = G__49217;
i__47926_49166 = G__49218;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__47993 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47993,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__47993;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__48005 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__48006 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__48007 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__48008 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__48009 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__48010 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__48011 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__48012 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__48013 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__48014 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__48015 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__48016 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__48021 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__48022 = ns;
var _STAR_checked_arrays_STAR__temp_val__48023 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__48024 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__48025 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__48026 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__48027 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__48028 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__48029 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__48030 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__48031 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__48032 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__48021;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__48022;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__48023;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__48024;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__48025;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__48026;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__48027;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__48028;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__48029;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__48030;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__48031;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__48032;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e48052){var cause = e48052;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__48058 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__48058__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48058,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__48058);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48058__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__48058__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e48064){var cause = e48064;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__48070 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__48069 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__48069.cljs$core$IFn$_invoke$arity$1 ? fexpr__48069.cljs$core$IFn$_invoke$arity$1(G__48070) : fexpr__48069.call(null,G__48070));
})())){
var G__48073 = bound_vars__$1;
var G__48074 = aenv__$1;
var G__48075 = ast;
var G__48076 = opts;
var G__48077 = ((function (G__48073,G__48074,G__48075,G__48076,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48005,_STAR_cljs_ns_STAR__orig_val__48006,_STAR_checked_arrays_STAR__orig_val__48007,_STAR_cljs_static_fns_STAR__orig_val__48008,_STAR_fn_invoke_direct_STAR__orig_val__48009,_STAR_ns_STAR__orig_val__48010,_STAR_passes_STAR__orig_val__48011,_STAR_alias_map_STAR__orig_val__48012,_STAR_data_readers_STAR__orig_val__48013,resolve_symbol_orig_val__48014,_STAR_source_map_data_STAR__orig_val__48015,_STAR_cljs_file_STAR__orig_val__48016,_STAR_compiler_STAR__temp_val__48021,_STAR_cljs_ns_STAR__temp_val__48022,_STAR_checked_arrays_STAR__temp_val__48023,_STAR_cljs_static_fns_STAR__temp_val__48024,_STAR_fn_invoke_direct_STAR__temp_val__48025,_STAR_ns_STAR__temp_val__48026,_STAR_passes_STAR__temp_val__48027,_STAR_alias_map_STAR__temp_val__48028,_STAR_data_readers_STAR__temp_val__48029,resolve_symbol_temp_val__48030,_STAR_source_map_data_STAR__temp_val__48031,_STAR_cljs_file_STAR__temp_val__48032,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});})(G__48073,G__48074,G__48075,G__48076,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48005,_STAR_cljs_ns_STAR__orig_val__48006,_STAR_checked_arrays_STAR__orig_val__48007,_STAR_cljs_static_fns_STAR__orig_val__48008,_STAR_fn_invoke_direct_STAR__orig_val__48009,_STAR_ns_STAR__orig_val__48010,_STAR_passes_STAR__orig_val__48011,_STAR_alias_map_STAR__orig_val__48012,_STAR_data_readers_STAR__orig_val__48013,resolve_symbol_orig_val__48014,_STAR_source_map_data_STAR__orig_val__48015,_STAR_cljs_file_STAR__orig_val__48016,_STAR_compiler_STAR__temp_val__48021,_STAR_cljs_ns_STAR__temp_val__48022,_STAR_checked_arrays_STAR__temp_val__48023,_STAR_cljs_static_fns_STAR__temp_val__48024,_STAR_fn_invoke_direct_STAR__temp_val__48025,_STAR_ns_STAR__temp_val__48026,_STAR_passes_STAR__temp_val__48027,_STAR_alias_map_STAR__temp_val__48028,_STAR_data_readers_STAR__temp_val__48029,resolve_symbol_temp_val__48030,_STAR_source_map_data_STAR__temp_val__48031,_STAR_cljs_file_STAR__temp_val__48032,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
;
var fexpr__48072 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__48072.cljs$core$IFn$_invoke$arity$5 ? fexpr__48072.cljs$core$IFn$_invoke$arity$5(G__48073,G__48074,G__48075,G__48076,G__48077) : fexpr__48072.call(null,G__48073,G__48074,G__48075,G__48076,G__48077));
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48005,_STAR_cljs_ns_STAR__orig_val__48006,_STAR_checked_arrays_STAR__orig_val__48007,_STAR_cljs_static_fns_STAR__orig_val__48008,_STAR_fn_invoke_direct_STAR__orig_val__48009,_STAR_ns_STAR__orig_val__48010,_STAR_passes_STAR__orig_val__48011,_STAR_alias_map_STAR__orig_val__48012,_STAR_data_readers_STAR__orig_val__48013,resolve_symbol_orig_val__48014,_STAR_source_map_data_STAR__orig_val__48015,_STAR_cljs_file_STAR__orig_val__48016,_STAR_compiler_STAR__temp_val__48021,_STAR_cljs_ns_STAR__temp_val__48022,_STAR_checked_arrays_STAR__temp_val__48023,_STAR_cljs_static_fns_STAR__temp_val__48024,_STAR_fn_invoke_direct_STAR__temp_val__48025,_STAR_ns_STAR__temp_val__48026,_STAR_passes_STAR__temp_val__48027,_STAR_alias_map_STAR__temp_val__48028,_STAR_data_readers_STAR__temp_val__48029,resolve_symbol_temp_val__48030,_STAR_source_map_data_STAR__temp_val__48031,_STAR_cljs_file_STAR__temp_val__48032,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48005,_STAR_cljs_ns_STAR__orig_val__48006,_STAR_checked_arrays_STAR__orig_val__48007,_STAR_cljs_static_fns_STAR__orig_val__48008,_STAR_fn_invoke_direct_STAR__orig_val__48009,_STAR_ns_STAR__orig_val__48010,_STAR_passes_STAR__orig_val__48011,_STAR_alias_map_STAR__orig_val__48012,_STAR_data_readers_STAR__orig_val__48013,resolve_symbol_orig_val__48014,_STAR_source_map_data_STAR__orig_val__48015,_STAR_cljs_file_STAR__orig_val__48016,_STAR_compiler_STAR__temp_val__48021,_STAR_cljs_ns_STAR__temp_val__48022,_STAR_checked_arrays_STAR__temp_val__48023,_STAR_cljs_static_fns_STAR__temp_val__48024,_STAR_fn_invoke_direct_STAR__temp_val__48025,_STAR_ns_STAR__temp_val__48026,_STAR_passes_STAR__temp_val__48027,_STAR_alias_map_STAR__temp_val__48028,_STAR_data_readers_STAR__temp_val__48029,resolve_symbol_temp_val__48030,_STAR_source_map_data_STAR__temp_val__48031,_STAR_cljs_file_STAR__temp_val__48032,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
var G__48090 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__48090) : cb__$1.call(null,G__48090));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__48016;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__48015;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__48014;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__48013;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__48012;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__48011;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__48010;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__48009;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__48008;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__48007;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__48006;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__48005;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,the_ns], 0));
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__48100 = arguments.length;
switch (G__48100) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__48112 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48112,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__48112;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__48115 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__48116 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__48117 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__48118 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__48119 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__48120 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__48121 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__48122 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__48123 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__48124 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__48125 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__48126 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__48127 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__48128 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__48129 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__48130 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__48131 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__48132 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__48133 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__48134 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__48135 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__48136 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__48126;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__48127;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__48128;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__48129;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__48130;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__48131;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__48132;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__48133;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__48134;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__48135;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__48136;

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__48157 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__48157__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48157,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__48157);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48157__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__48157__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e48165){var cause = e48165;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__48166 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__48173 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__48173__$1 = (((((!((map__48173 == null))))?(((((map__48173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48173):map__48173);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48173__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48173__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166,(1),null);
if(cljs.core.truth_((function (){var G__48176 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__48175 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__48175.cljs$core$IFn$_invoke$arity$1 ? fexpr__48175.cljs$core$IFn$_invoke$arity$1(G__48176) : fexpr__48175.call(null,G__48176));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__48166,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__48115,_STAR_eval_fn_STAR__orig_val__48116,_STAR_cljs_ns_STAR__orig_val__48117,_STAR_checked_arrays_STAR__orig_val__48118,_STAR_cljs_static_fns_STAR__orig_val__48119,_STAR_fn_invoke_direct_STAR__orig_val__48120,_STAR_ns_STAR__orig_val__48121,_STAR_alias_map_STAR__orig_val__48122,_STAR_data_readers_STAR__orig_val__48123,resolve_symbol_orig_val__48124,_STAR_source_map_data_STAR__orig_val__48125,_STAR_compiler_STAR__temp_val__48126,_STAR_eval_fn_STAR__temp_val__48127,_STAR_cljs_ns_STAR__temp_val__48128,_STAR_checked_arrays_STAR__temp_val__48129,_STAR_cljs_static_fns_STAR__temp_val__48130,_STAR_fn_invoke_direct_STAR__temp_val__48131,_STAR_ns_STAR__temp_val__48132,_STAR_alias_map_STAR__temp_val__48133,_STAR_data_readers_STAR__temp_val__48134,resolve_symbol_temp_val__48135,_STAR_source_map_data_STAR__temp_val__48136,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48185_49306 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48186_49307 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48187_49308 = true;
var _STAR_print_fn_STAR__temp_val__48188_49309 = ((function (_STAR_print_newline_STAR__orig_val__48185_49306,_STAR_print_fn_STAR__orig_val__48186_49307,_STAR_print_newline_STAR__temp_val__48187_49308,sb__4661__auto__,ns_name,sb,ast,vec__48166,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__48115,_STAR_eval_fn_STAR__orig_val__48116,_STAR_cljs_ns_STAR__orig_val__48117,_STAR_checked_arrays_STAR__orig_val__48118,_STAR_cljs_static_fns_STAR__orig_val__48119,_STAR_fn_invoke_direct_STAR__orig_val__48120,_STAR_ns_STAR__orig_val__48121,_STAR_alias_map_STAR__orig_val__48122,_STAR_data_readers_STAR__orig_val__48123,resolve_symbol_orig_val__48124,_STAR_source_map_data_STAR__orig_val__48125,_STAR_compiler_STAR__temp_val__48126,_STAR_eval_fn_STAR__temp_val__48127,_STAR_cljs_ns_STAR__temp_val__48128,_STAR_checked_arrays_STAR__temp_val__48129,_STAR_cljs_static_fns_STAR__temp_val__48130,_STAR_fn_invoke_direct_STAR__temp_val__48131,_STAR_ns_STAR__temp_val__48132,_STAR_alias_map_STAR__temp_val__48133,_STAR_data_readers_STAR__temp_val__48134,resolve_symbol_temp_val__48135,_STAR_source_map_data_STAR__temp_val__48136,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48185_49306,_STAR_print_fn_STAR__orig_val__48186_49307,_STAR_print_newline_STAR__temp_val__48187_49308,sb__4661__auto__,ns_name,sb,ast,vec__48166,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__48115,_STAR_eval_fn_STAR__orig_val__48116,_STAR_cljs_ns_STAR__orig_val__48117,_STAR_checked_arrays_STAR__orig_val__48118,_STAR_cljs_static_fns_STAR__orig_val__48119,_STAR_fn_invoke_direct_STAR__orig_val__48120,_STAR_ns_STAR__orig_val__48121,_STAR_alias_map_STAR__orig_val__48122,_STAR_data_readers_STAR__orig_val__48123,resolve_symbol_orig_val__48124,_STAR_source_map_data_STAR__orig_val__48125,_STAR_compiler_STAR__temp_val__48126,_STAR_eval_fn_STAR__temp_val__48127,_STAR_cljs_ns_STAR__temp_val__48128,_STAR_checked_arrays_STAR__temp_val__48129,_STAR_cljs_static_fns_STAR__temp_val__48130,_STAR_fn_invoke_direct_STAR__temp_val__48131,_STAR_ns_STAR__temp_val__48132,_STAR_alias_map_STAR__temp_val__48133,_STAR_data_readers_STAR__temp_val__48134,resolve_symbol_temp_val__48135,_STAR_source_map_data_STAR__temp_val__48136,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48187_49308;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48188_49309;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48186_49307;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48185_49306;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

var G__48191 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__48191) : cb.call(null,G__48191));
}
});})(ast,vec__48166,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__48115,_STAR_eval_fn_STAR__orig_val__48116,_STAR_cljs_ns_STAR__orig_val__48117,_STAR_checked_arrays_STAR__orig_val__48118,_STAR_cljs_static_fns_STAR__orig_val__48119,_STAR_fn_invoke_direct_STAR__orig_val__48120,_STAR_ns_STAR__orig_val__48121,_STAR_alias_map_STAR__orig_val__48122,_STAR_data_readers_STAR__orig_val__48123,resolve_symbol_orig_val__48124,_STAR_source_map_data_STAR__orig_val__48125,_STAR_compiler_STAR__temp_val__48126,_STAR_eval_fn_STAR__temp_val__48127,_STAR_cljs_ns_STAR__temp_val__48128,_STAR_checked_arrays_STAR__temp_val__48129,_STAR_cljs_static_fns_STAR__temp_val__48130,_STAR_fn_invoke_direct_STAR__temp_val__48131,_STAR_ns_STAR__temp_val__48132,_STAR_alias_map_STAR__temp_val__48133,_STAR_data_readers_STAR__temp_val__48134,resolve_symbol_temp_val__48135,_STAR_source_map_data_STAR__temp_val__48136,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48199_49314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48200_49315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48201_49316 = true;
var _STAR_print_fn_STAR__temp_val__48202_49322 = ((function (_STAR_print_newline_STAR__orig_val__48199_49314,_STAR_print_fn_STAR__orig_val__48200_49315,_STAR_print_newline_STAR__temp_val__48201_49316,sb__4661__auto__,ast,vec__48166,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__48115,_STAR_eval_fn_STAR__orig_val__48116,_STAR_cljs_ns_STAR__orig_val__48117,_STAR_checked_arrays_STAR__orig_val__48118,_STAR_cljs_static_fns_STAR__orig_val__48119,_STAR_fn_invoke_direct_STAR__orig_val__48120,_STAR_ns_STAR__orig_val__48121,_STAR_alias_map_STAR__orig_val__48122,_STAR_data_readers_STAR__orig_val__48123,resolve_symbol_orig_val__48124,_STAR_source_map_data_STAR__orig_val__48125,_STAR_compiler_STAR__temp_val__48126,_STAR_eval_fn_STAR__temp_val__48127,_STAR_cljs_ns_STAR__temp_val__48128,_STAR_checked_arrays_STAR__temp_val__48129,_STAR_cljs_static_fns_STAR__temp_val__48130,_STAR_fn_invoke_direct_STAR__temp_val__48131,_STAR_ns_STAR__temp_val__48132,_STAR_alias_map_STAR__temp_val__48133,_STAR_data_readers_STAR__temp_val__48134,resolve_symbol_temp_val__48135,_STAR_source_map_data_STAR__temp_val__48136,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48199_49314,_STAR_print_fn_STAR__orig_val__48200_49315,_STAR_print_newline_STAR__temp_val__48201_49316,sb__4661__auto__,ast,vec__48166,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__48115,_STAR_eval_fn_STAR__orig_val__48116,_STAR_cljs_ns_STAR__orig_val__48117,_STAR_checked_arrays_STAR__orig_val__48118,_STAR_cljs_static_fns_STAR__orig_val__48119,_STAR_fn_invoke_direct_STAR__orig_val__48120,_STAR_ns_STAR__orig_val__48121,_STAR_alias_map_STAR__orig_val__48122,_STAR_data_readers_STAR__orig_val__48123,resolve_symbol_orig_val__48124,_STAR_source_map_data_STAR__orig_val__48125,_STAR_compiler_STAR__temp_val__48126,_STAR_eval_fn_STAR__temp_val__48127,_STAR_cljs_ns_STAR__temp_val__48128,_STAR_checked_arrays_STAR__temp_val__48129,_STAR_cljs_static_fns_STAR__temp_val__48130,_STAR_fn_invoke_direct_STAR__temp_val__48131,_STAR_ns_STAR__temp_val__48132,_STAR_alias_map_STAR__temp_val__48133,_STAR_data_readers_STAR__temp_val__48134,resolve_symbol_temp_val__48135,_STAR_source_map_data_STAR__temp_val__48136,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48201_49316;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48202_49322;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48200_49315;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48199_49314;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var G__48213 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__48213) : cb.call(null,G__48213));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__48125;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__48124;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__48123;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__48122;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__48121;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__48120;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__48119;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__48118;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__48117;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__48116;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__48115;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__48219 = arguments.length;
switch (G__48219) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__48232 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48232,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__48232;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__48233 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__48234 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__48235 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__48236 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__48237 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__48238 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__48239 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__48240 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__48241 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__48242 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__48243 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__48244 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__48245 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__48246 = ns;
var _STAR_checked_arrays_STAR__temp_val__48247 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__48248 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__48249 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__48250 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__48251 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__48252 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__48253 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__48254 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__48244;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__48245;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__48246;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__48247;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__48248;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__48249;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__48250;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__48251;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__48252;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__48253;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__48254;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e48268){var cause = e48268;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__48275 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__48275__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48275,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__48275);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48275__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__48275__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e48284){var cause = e48284;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__48286 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__48289 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__48289__$1 = (((((!((map__48289 == null))))?(((((map__48289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48289):map__48289);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48289__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48289__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48286,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48286,(1),null);
if(cljs.core.truth_((function (){var G__48296 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__48295 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__48295.cljs$core$IFn$_invoke$arity$1 ? fexpr__48295.cljs$core$IFn$_invoke$arity$1(G__48296) : fexpr__48295.call(null,G__48296));
})())){
var G__48298 = bound_vars__$1;
var G__48299 = aenv__$1;
var G__48300 = ast__$1;
var G__48301 = opts;
var G__48302 = ((function (G__48298,G__48299,G__48300,G__48301,ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48303_49356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48304_49357 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48305_49358 = true;
var _STAR_print_fn_STAR__temp_val__48306_49359 = ((function (_STAR_print_newline_STAR__orig_val__48303_49356,_STAR_print_fn_STAR__orig_val__48304_49357,_STAR_print_newline_STAR__temp_val__48305_49358,sb__4661__auto__,ns_name,G__48298,G__48299,G__48300,G__48301,ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48303_49356,_STAR_print_fn_STAR__orig_val__48304_49357,_STAR_print_newline_STAR__temp_val__48305_49358,sb__4661__auto__,ns_name,G__48298,G__48299,G__48300,G__48301,ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48305_49358;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48306_49359;

try{cljs.compiler.emit(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48304_49357;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48303_49356;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});})(G__48298,G__48299,G__48300,G__48301,ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
var fexpr__48297 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__48297.cljs$core$IFn$_invoke$arity$5 ? fexpr__48297.cljs$core$IFn$_invoke$arity$5(G__48298,G__48299,G__48300,G__48301,G__48302) : fexpr__48297.call(null,G__48298,G__48299,G__48300,G__48301,G__48302));
} else {
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48311_49364 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48312_49365 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48313_49366 = true;
var _STAR_print_fn_STAR__temp_val__48314_49367 = ((function (_STAR_print_newline_STAR__orig_val__48311_49364,_STAR_print_fn_STAR__orig_val__48312_49365,_STAR_print_newline_STAR__temp_val__48313_49366,sb__4661__auto__,ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48311_49364,_STAR_print_fn_STAR__orig_val__48312_49365,_STAR_print_newline_STAR__temp_val__48313_49366,sb__4661__auto__,ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48313_49366;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48314_49367;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48312_49365;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48311_49364;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

return ((function (ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
;})(ast,vec__48286,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48233,_STAR_eval_fn_STAR__orig_val__48234,_STAR_cljs_ns_STAR__orig_val__48235,_STAR_checked_arrays_STAR__orig_val__48236,_STAR_cljs_static_fns_STAR__orig_val__48237,_STAR_fn_invoke_direct_STAR__orig_val__48238,_STAR_ns_STAR__orig_val__48239,_STAR_alias_map_STAR__orig_val__48240,_STAR_data_readers_STAR__orig_val__48241,resolve_symbol_orig_val__48242,_STAR_source_map_data_STAR__orig_val__48243,_STAR_compiler_STAR__temp_val__48244,_STAR_eval_fn_STAR__temp_val__48245,_STAR_cljs_ns_STAR__temp_val__48246,_STAR_checked_arrays_STAR__temp_val__48247,_STAR_cljs_static_fns_STAR__temp_val__48248,_STAR_fn_invoke_direct_STAR__temp_val__48249,_STAR_ns_STAR__temp_val__48250,_STAR_alias_map_STAR__temp_val__48251,_STAR_data_readers_STAR__temp_val__48252,resolve_symbol_temp_val__48253,_STAR_source_map_data_STAR__temp_val__48254,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__48327 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__48327) : cb__$1.call(null,G__48327));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__48243;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__48242;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__48241;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__48240;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__48239;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__48238;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__48237;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__48236;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__48235;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__48234;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__48233;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_ns], 0));
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__48335 = arguments.length;
switch (G__48335) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__48367 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48367,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__48367;
}
})();
var aname = (function (){var G__48368 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__48368);
} else {
return G__48368;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__48369 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__48370 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__48371 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__48372 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__48373 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__48374 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__48375 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__48376 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__48377 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__48378 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__48379 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__48380 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__48381 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__48382 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__48383 = ns;
var _STAR_checked_arrays_STAR__temp_val__48384 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__48385 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__48386 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__48387 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__48388 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__48389 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__48390 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__48391 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__48392 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__48381;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__48382;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__48383;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__48384;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__48385;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__48386;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__48387;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__48388;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__48389;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__48390;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__48391;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__48392;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e48395){var cause = e48395;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__48399 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__48399__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48399,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__48399);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48399__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__48399__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e48401){var cause = e48401;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__48402 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__48405 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__48405__$1 = (((((!((map__48405 == null))))?(((((map__48405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48405):map__48405);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48402,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48402,(1),null);
if(cljs.core.truth_((function (){var G__48408 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__48407 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__48407.cljs$core$IFn$_invoke$arity$1 ? fexpr__48407.cljs$core$IFn$_invoke$arity$1(G__48408) : fexpr__48407.call(null,G__48408));
})())){
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48409_49425 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48410_49426 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48411_49427 = true;
var _STAR_print_fn_STAR__temp_val__48412_49428 = ((function (_STAR_print_newline_STAR__orig_val__48409_49425,_STAR_print_fn_STAR__orig_val__48410_49426,_STAR_print_newline_STAR__temp_val__48411_49427,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48409_49425,_STAR_print_fn_STAR__orig_val__48410_49426,_STAR_print_newline_STAR__temp_val__48411_49427,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48411_49427;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48412_49428;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48410_49426;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48409_49425;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

var G__48414 = true;
var G__48415 = bound_vars__$1;
var G__48416 = aenv__$1;
var G__48417 = ast__$1;
var G__48418 = opts;
var G__48419 = ((function (G__48414,G__48415,G__48416,G__48417,G__48418,ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$eval_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_SINGLEQUOTE_], 0));
}
});})(G__48414,G__48415,G__48416,G__48417,G__48418,ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var fexpr__48413 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__48413.cljs$core$IFn$_invoke$arity$6 ? fexpr__48413.cljs$core$IFn$_invoke$arity$6(G__48414,G__48415,G__48416,G__48417,G__48418,G__48419) : fexpr__48413.call(null,G__48414,G__48415,G__48416,G__48417,G__48418,G__48419));
} else {
var env__24897__auto___49429 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__24897__auto___49430__$1 = ((cljs.core.map_QMARK_(env__24897__auto___49429))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__24897__auto___49429):(((((env__24897__auto___49429 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__24897__auto___49429)))))?env__24897__auto___49429:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__24897__auto___49429))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__48420_49431 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__48421_49432 = env__24897__auto___49430__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__48421_49432;

try{sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48422_49433 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48423_49434 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48424_49435 = true;
var _STAR_print_fn_STAR__temp_val__48425_49436 = ((function (_STAR_print_newline_STAR__orig_val__48422_49433,_STAR_print_fn_STAR__orig_val__48423_49434,_STAR_print_newline_STAR__temp_val__48424_49435,sb__4661__auto__,_STAR_compiler_STAR__orig_val__48420_49431,_STAR_compiler_STAR__temp_val__48421_49432,env__24897__auto___49429,env__24897__auto___49430__$1,ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48422_49433,_STAR_print_fn_STAR__orig_val__48423_49434,_STAR_print_newline_STAR__temp_val__48424_49435,sb__4661__auto__,_STAR_compiler_STAR__orig_val__48420_49431,_STAR_compiler_STAR__temp_val__48421_49432,env__24897__auto___49429,env__24897__auto___49430__$1,ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48424_49435;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48425_49436;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48423_49434;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48422_49433;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__48420_49431;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__48402,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e48426){var cause = e48426;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__48369,_STAR_eval_fn_STAR__orig_val__48370,_STAR_cljs_ns_STAR__orig_val__48371,_STAR_checked_arrays_STAR__orig_val__48372,_STAR_cljs_static_fns_STAR__orig_val__48373,_STAR_fn_invoke_direct_STAR__orig_val__48374,_STAR_ns_STAR__orig_val__48375,_STAR_alias_map_STAR__orig_val__48376,_STAR_data_readers_STAR__orig_val__48377,resolve_symbol_orig_val__48378,_STAR_source_map_data_STAR__orig_val__48379,_STAR_cljs_file_STAR__orig_val__48380,_STAR_compiler_STAR__temp_val__48381,_STAR_eval_fn_STAR__temp_val__48382,_STAR_cljs_ns_STAR__temp_val__48383,_STAR_checked_arrays_STAR__temp_val__48384,_STAR_cljs_static_fns_STAR__temp_val__48385,_STAR_fn_invoke_direct_STAR__temp_val__48386,_STAR_ns_STAR__temp_val__48387,_STAR_alias_map_STAR__temp_val__48388,_STAR_data_readers_STAR__temp_val__48389,resolve_symbol_temp_val__48390,_STAR_source_map_data_STAR__temp_val__48391,_STAR_cljs_file_STAR__temp_val__48392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5718__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
var fexpr__48427 = cljs.js.trampoline_safe(f);
return (fexpr__48427.cljs$core$IFn$_invoke$arity$2 ? fexpr__48427.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__48427.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__48380;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__48379;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__48378;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__48377;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__48376;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__48375;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__48374;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__48373;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__48372;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__48371;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__48370;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__48369;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)], 0));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__48432 = arguments.length;
switch (G__48432) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_((0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_(cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.js.fn_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(cljs.js.fn_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
cljs.js.fn_refs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.js.fn_refs.cljs$core$IDeref$_deref$arity$1(null),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.js.get_fn(",cljs.js.put_fn(f),")"], 0));
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Function,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Var,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__48467 = arguments.length;
switch (G__48467) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2(form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var st_49517 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_49517,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_49517,result){
return (function (p__48471){
var map__48472 = p__48471;
var map__48472__$1 = (((((!((map__48472 == null))))?(((((map__48472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48472):map__48472);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48472__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48472__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
});})(st_49517,result))
);

return cljs.core.deref(result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;
