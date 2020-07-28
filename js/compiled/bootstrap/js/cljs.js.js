goog.provide('cljs.js');
goog.provide("cljs.core$macros");
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65022 = arguments.length;
var i__4731__auto___65024 = (0);
while(true){
if((i__4731__auto___65024 < len__4730__auto___65022)){
args__4736__auto__.push((arguments[i__4731__auto___65024]));

var G__65025 = (i__4731__auto___65024 + (1));
i__4731__auto___65024 = G__65025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__63812 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__63813 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63813;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63812;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq63809){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63809));
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
var _STAR_ns_STAR__orig_val__63841 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__63842 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__63842;

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__63841;
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
cljs.js.js_eval = (function cljs$js$js_eval(p__63860){
var map__63861 = p__63860;
var map__63861__$1 = (((((!((map__63861 == null))))?(((((map__63861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63861):map__63861);
var resource = map__63861__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63861__$1,new cljs.core.Keyword(null,"source","source",-433931539));
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
var G__63866 = arguments.length;
switch (G__63866) {
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
var G__63877 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__63877,((function (G__63877){
return (function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),cljs.core.PersistentHashMap.EMPTY);
});})(G__63877))
);

return G__63877;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__63891 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__63891,init);

return G__63891;
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
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__63900){
var map__63901 = p__63900;
var map__63901__$1 = (((((!((map__63901 == null))))?(((((map__63901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63901):map__63901);
var opts = map__63901__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63901__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63901__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63901__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__63903 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__63903,".","/");
} else {
return G__63903;
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
var src = (function (){var G__63904 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__63904__$1 = ((source_map_timestamp === true)?[G__63904,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__63904);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__63904__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__63904__$1;
}
})();
var file = (function (){var G__63905 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__63905__$1 = ((source_map_timestamp === true)?[G__63905,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__63905);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__63905__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__63905__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__63911 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__63901,map__63901__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__63912){
var vec__63913 = p__63912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63913,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63913,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__63901,map__63901__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__63911);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63916){
var vec__63917 = p__63916;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63917,(1),null);
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
var G__63920 = cljs.core.first(coll);
var G__63921 = ((function (G__63920){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__63922 = proc;
var G__63923 = cljs.core.rest(coll);
var G__63924 = break_QMARK_;
var G__63925 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__63922,G__63923,G__63924,G__63925) : cljs.js.run_async_BANG_.call(null,G__63922,G__63923,G__63924,G__63925));
}
});})(G__63920))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__63920,G__63921) : proc.call(null,G__63920,G__63921));
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
return cljs.core.not((function (){var fexpr__63929 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null);
return (fexpr__63929.cljs$core$IFn$_invoke$arity$1 ? fexpr__63929.cljs$core$IFn$_invoke$arity$1(name) : fexpr__63929.call(null,name));
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
var G__63931 = arguments.length;
switch (G__63931) {
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
var aname = (function (){var G__63932 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__63932);
} else {
return G__63932;
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
try{var G__63936 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name)], null);
var G__63937 = ((function (G__63936,env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__63941 = resource;
var map__63941__$1 = (((((!((map__63941 == null))))?(((((map__63941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63941):map__63941);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63941__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63941__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63941__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63941__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__63943 = cljs.core.keyword_identical_QMARK_;
var expr__63944 = lang;
if(cljs.core.truth_((function (){var G__63946 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__63947 = expr__63944;
return (pred__63943.cljs$core$IFn$_invoke$arity$2 ? pred__63943.cljs$core$IFn$_invoke$arity$2(G__63946,G__63947) : pred__63943.call(null,G__63946,G__63947));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__63943,expr__63944,map__63941,map__63941__$1,lang,source,cache,source_map,file,G__63936,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__63948 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__63948) : cb.call(null,G__63948));
}
});})(pred__63943,expr__63944,map__63941,map__63941__$1,lang,source,cache,source_map,file,G__63936,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__63949 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__63950 = expr__63944;
return (pred__63943.cljs$core$IFn$_invoke$arity$2 ? pred__63943.cljs$core$IFn$_invoke$arity$2(G__63949,G__63950) : pred__63943.call(null,G__63949,G__63950));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__63943,expr__63944,map__63941,map__63941__$1,lang,source,cache,source_map,file,G__63936,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__63943,expr__63944,map__63941,map__63941__$1,lang,source,cache,source_map,file,G__63936,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__63953_65172 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__63953_65172.cljs$core$IFn$_invoke$arity$1 ? fexpr__63953_65172.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__63953_65172.call(null,resource));

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
}catch (e63952){var cause = e63952;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__63954 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__63954) : cb.call(null,G__63954));
}
}
});})(pred__63943,expr__63944,map__63941,map__63941__$1,lang,source,cache,source_map,file,G__63936,env,bound_vars__$1,aname))
);
}
});})(pred__63943,expr__63944,map__63941,map__63941__$1,lang,source,cache,source_map,file,G__63936,env,bound_vars__$1,aname))
);
} else {
var G__63955 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__63955) : cb.call(null,G__63955));
}
}
} else {
var G__63957 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__63958 = (cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812));
var G__63959 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__63958,G__63959) : cljs.analyzer.error_message.call(null,G__63958,G__63959));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__63957) : cb.call(null,G__63957));
}
});})(G__63936,env,bound_vars__$1,aname))
;
var fexpr__63935 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__63935.cljs$core$IFn$_invoke$arity$2 ? fexpr__63935.cljs$core$IFn$_invoke$arity$2(G__63936,G__63937) : fexpr__63935.call(null,G__63936,G__63937));
}catch (e63933){var cause = e63933;
var G__63934 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__63934) : cb.call(null,G__63934));
}} else {
var G__63960 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__63960) : cb.call(null,G__63960));
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
return (function (acc,p__63976){
var vec__63977 = p__63976;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63977,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63977,(1),null);
var entry = vec__63977;
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
var G__64007 = arguments.length;
switch (G__64007) {
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

var _STAR_cljs_dep_set_STAR__orig_val__64009 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__64010 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__64010;

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010){
return (function (p1__63993_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__63993_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010))
,deps)))){
var G__64011 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64011) : cb.call(null,G__64011));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010){
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
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__64012 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64012) : cb.call(null,G__64012));
}
});})(cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010))
);
}
});})(cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64009,_STAR_cljs_dep_set_STAR__temp_val__64010))
);
} else {
var G__64013 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64013) : cb.call(null,G__64013));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__64009;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__64016 = arguments.length;
switch (G__64016) {
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
var _STAR_cljs_dep_set_STAR__orig_val__64017 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__64018 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__64018;

try{var compiler = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018){
return (function (p1__64014_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__64014_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018))
,deps)))){
var G__64019 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64019) : cb.call(null,G__64019));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__64023 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(dep)], null);
var G__64024 = ((function (G__64023,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not(resource)){
var temp__5718__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cljs_dep = temp__5718__auto__;
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5718__auto__,G__64023,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__64043 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64043) : cb.call(null,G__64043));
}
});})(cljs_dep,temp__5718__auto__,G__64023,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018))
);
} else {
var G__64044 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__64045 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__64046 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__64045,G__64046) : cljs.analyzer.error_message.call(null,G__64045,G__64046));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64044) : cb.call(null,G__64044));
}
} else {
var map__64047 = resource;
var map__64047__$1 = (((((!((map__64047 == null))))?(((((map__64047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64047):map__64047);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__64058 = cljs.core.keyword_identical_QMARK_;
var expr__64059 = lang;
if(cljs.core.truth_((function (){var G__64062 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__64063 = expr__64059;
return (pred__64058.cljs$core$IFn$_invoke$arity$2 ? pred__64058.cljs$core$IFn$_invoke$arity$2(G__64062,G__64063) : pred__64058.call(null,G__64062,G__64063));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__64058,expr__64059,map__64047,map__64047__$1,name,lang,source,file,G__64023,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(pred__64058,expr__64059,map__64047,map__64047__$1,name,lang,source,file,G__64023,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018))
);
} else {
if(cljs.core.truth_((function (){var G__64075 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__64076 = expr__64059;
return (pred__64058.cljs$core$IFn$_invoke$arity$2 ? pred__64058.cljs$core$IFn$_invoke$arity$2(G__64075,G__64076) : pred__64058.call(null,G__64075,G__64076));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__64023,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__64017,_STAR_cljs_dep_set_STAR__temp_val__64018))
;
var fexpr__64022 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__64022.cljs$core$IFn$_invoke$arity$2 ? fexpr__64022.cljs$core$IFn$_invoke$arity$2(G__64023,G__64024) : fexpr__64022.call(null,G__64023,G__64024));
}catch (e64020){var cause = e64020;
var G__64021 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64021) : cb.call(null,G__64021));
}} else {
var G__64083 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64083) : cb.call(null,G__64083));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__64017;
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
var G__64122 = bound_vars;
var G__64123 = k__$1;
var G__64124 = cljs.core.next(macros);
var G__64125 = lib;
var G__64126 = reload;
var G__64127 = reloads;
var G__64128 = opts;
var G__64129 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__64122,G__64123,G__64124,G__64125,G__64126,G__64127,G__64128,G__64129) : cljs.js.load_macros.call(null,G__64122,G__64123,G__64124,G__64125,G__64126,G__64127,G__64128,G__64129));
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

var G__64134 = bound_vars;
var G__64135 = k__$1;
var G__64136 = cljs.core.next(macros);
var G__64137 = lib;
var G__64138 = reload;
var G__64139 = reloads;
var G__64140 = opts;
var G__64141 = ((function (G__64134,G__64135,G__64136,G__64137,G__64138,G__64139,G__64140,cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__64142 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64142) : cb.call(null,G__64142));
}
});})(G__64134,G__64135,G__64136,G__64137,G__64138,G__64139,G__64140,cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__64134,G__64135,G__64136,G__64137,G__64138,G__64139,G__64140,G__64141) : cljs.js.load_macros.call(null,G__64134,G__64135,G__64136,G__64137,G__64138,G__64139,G__64140,G__64141));
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
var G__64143 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64143) : cb.call(null,G__64143));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__64147 = arguments.length;
switch (G__64147) {
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
var vec__64148 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64148,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64148,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64148,(2),null);
var rewrite_renames = ((function (vec__64148,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__64148,uk,rk,renk){
return (function (acc,p__64151){
var vec__64152 = p__64151;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64152,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64152,(1),null);
var entry = vec__64152;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__64148,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__64148,uk,rk,renk))
;
var rewrite_deps = ((function (vec__64148,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__64148,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5718__auto__)){
var new_dep = temp__5718__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__64148,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__64148,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__64148,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__64144_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__64144_SHARP_);
});})(vec__64148,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__64148,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__64145_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__64145_SHARP_)], 0));
});})(vec__64148,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__64155,cenv){
var map__64156 = p__64155;
var map__64156__$1 = (((((!((map__64156 == null))))?(((((map__64156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64156):map__64156);
var ast = map__64156__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64156__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__64156,map__64156__$1,ast,requires,name){
return (function (p__64159){
var vec__64160 = p__64159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64160,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64160,(1),null);
var map__64163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__64163__$1 = (((((!((map__64163 == null))))?(((((map__64163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64163):map__64163);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64163__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64163__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4131__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__64156,map__64156__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__64201 = arguments.length;
switch (G__64201) {
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

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__64203,opts,cb){
var map__64204 = p__64203;
var map__64204__$1 = (((((!((map__64204 == null))))?(((((map__64204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64204):map__64204);
var ast = map__64204__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64204__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__64206 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__64206.cljs$core$IFn$_invoke$arity$1 ? fexpr__64206.cljs$core$IFn$_invoke$arity$1(op) : fexpr__64206.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__64204,map__64204__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__64259 = rewritten_ast;
var map__64259__$1 = (((((!((map__64259 == null))))?(((((map__64259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64259):map__64259);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64259__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64259__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64259__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64259__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64259__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__64259,map__64259__$1,uses,use_macros,reload,reloads,name,map__64204,map__64204__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__64270 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__64270__$1 = (((((!((map__64270 == null))))?(((((map__64270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64270):map__64270);
var rewritten_ast__$1 = map__64270__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64270__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__64270,map__64270__$1,rewritten_ast__$1,require_macros,env,map__64259,map__64259__$1,uses,use_macros,reload,reloads,name,map__64204,map__64204__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__64285 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__64285__$1 = (((((!((map__64285 == null))))?(((((map__64285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64285):map__64285);
var rewritten_ast__$2 = map__64285__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64285__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__64305_65284 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__64306_65285 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__64307_65286 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__64308_65287 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__64307_65286;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__64308_65287;

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__64306_65285;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__64305_65284;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e64298){var cause = e64298;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__64323 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__64324 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__64325 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__64326 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__64325;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__64326;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__64335 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64335) : cb.call(null,G__64335));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__64324;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__64323;
}}catch (e64313){var cause = e64313;
var G__64315 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64315) : cb.call(null,G__64315));
}}
}
});})(map__64270,map__64270__$1,rewritten_ast__$1,require_macros,env,map__64259,map__64259__$1,uses,use_macros,reload,reloads,name,map__64204,map__64204__$1,ast,op))
);
}
});})(env,map__64259,map__64259__$1,uses,use_macros,reload,reloads,name,map__64204,map__64204__$1,ast,op))
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

var G__64348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64348) : cb.call(null,G__64348));
}catch (e64340){var cause = e64340;
var G__64342 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64342) : cb.call(null,G__64342));
}}
}
});})(map__64204,map__64204__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = load;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})())){
var map__64353 = ast;
var map__64353__$1 = (((((!((map__64353 == null))))?(((((map__64353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64353):map__64353);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__64353,map__64353__$1,reload,name,deps,map__64204,map__64204__$1,ast,op){
return (function (p1__64181_SHARP_){
return check_uses_and_load_macros(p1__64181_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__64181_SHARP_)));
});})(map__64353,map__64353__$1,reload,name,deps,map__64204,map__64204__$1,ast,op))
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
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__64204,map__64204__$1,ast,op){
return (function (p1__64183_SHARP_){
return check_uses_and_load_macros(p1__64183_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__64183_SHARP_)));
});})(map__64204,map__64204__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
var G__64360 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64360) : cb.call(null,G__64360));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__64361_65325 = cljs.core.seq(deps);
var chunk__64362_65326 = null;
var count__64363_65327 = (0);
var i__64364_65328 = (0);
while(true){
if((i__64364_65328 < count__64363_65327)){
var dep_65330 = chunk__64362_65326.cljs$core$IIndexed$_nth$arity$2(null,i__64364_65328);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64397_65334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64398_65335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64399_65336 = true;
var _STAR_print_fn_STAR__temp_val__64400_65337 = ((function (seq__64361_65325,chunk__64362_65326,count__64363_65327,i__64364_65328,_STAR_print_newline_STAR__orig_val__64397_65334,_STAR_print_fn_STAR__orig_val__64398_65335,_STAR_print_newline_STAR__temp_val__64399_65336,sb__4661__auto__,dep_65330){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__64361_65325,chunk__64362_65326,count__64363_65327,i__64364_65328,_STAR_print_newline_STAR__orig_val__64397_65334,_STAR_print_fn_STAR__orig_val__64398_65335,_STAR_print_newline_STAR__temp_val__64399_65336,sb__4661__auto__,dep_65330))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64399_65336;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64400_65337;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_65330)," = require('",dep_65330,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64398_65335;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64397_65334;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__65342 = seq__64361_65325;
var G__65343 = chunk__64362_65326;
var G__65344 = count__64363_65327;
var G__65345 = (i__64364_65328 + (1));
seq__64361_65325 = G__65342;
chunk__64362_65326 = G__65343;
count__64363_65327 = G__65344;
i__64364_65328 = G__65345;
continue;
} else {
var temp__5720__auto___65346 = cljs.core.seq(seq__64361_65325);
if(temp__5720__auto___65346){
var seq__64361_65347__$1 = temp__5720__auto___65346;
if(cljs.core.chunked_seq_QMARK_(seq__64361_65347__$1)){
var c__4550__auto___65348 = cljs.core.chunk_first(seq__64361_65347__$1);
var G__65349 = cljs.core.chunk_rest(seq__64361_65347__$1);
var G__65350 = c__4550__auto___65348;
var G__65351 = cljs.core.count(c__4550__auto___65348);
var G__65352 = (0);
seq__64361_65325 = G__65349;
chunk__64362_65326 = G__65350;
count__64363_65327 = G__65351;
i__64364_65328 = G__65352;
continue;
} else {
var dep_65354 = cljs.core.first(seq__64361_65347__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64407_65355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64408_65356 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64409_65357 = true;
var _STAR_print_fn_STAR__temp_val__64410_65358 = ((function (seq__64361_65325,chunk__64362_65326,count__64363_65327,i__64364_65328,_STAR_print_newline_STAR__orig_val__64407_65355,_STAR_print_fn_STAR__orig_val__64408_65356,_STAR_print_newline_STAR__temp_val__64409_65357,sb__4661__auto__,dep_65354,seq__64361_65347__$1,temp__5720__auto___65346){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__64361_65325,chunk__64362_65326,count__64363_65327,i__64364_65328,_STAR_print_newline_STAR__orig_val__64407_65355,_STAR_print_fn_STAR__orig_val__64408_65356,_STAR_print_newline_STAR__temp_val__64409_65357,sb__4661__auto__,dep_65354,seq__64361_65347__$1,temp__5720__auto___65346))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64409_65357;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64410_65358;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_65354)," = require('",dep_65354,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64408_65356;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64407_65355;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__65359 = cljs.core.next(seq__64361_65347__$1);
var G__65360 = null;
var G__65361 = (0);
var G__65362 = (0);
seq__64361_65325 = G__65359;
chunk__64362_65326 = G__65360;
count__64363_65327 = G__65361;
i__64364_65328 = G__65362;
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
var map__64427 = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__64427__$1 = (((((!((map__64427 == null))))?(((((map__64427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64427):map__64427);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64427__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__64429_65365 = cljs.core.seq(deps);
var chunk__64430_65366 = null;
var count__64431_65367 = (0);
var i__64432_65368 = (0);
while(true){
if((i__64432_65368 < count__64431_65367)){
var dep_65369 = chunk__64430_65366.cljs$core$IIndexed$_nth$arity$2(null,i__64432_65368);
var map__64471_65370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_65369));
var map__64471_65371__$1 = (((((!((map__64471_65370 == null))))?(((((map__64471_65370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64471_65370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64471_65370):map__64471_65370);
var global_exports_65372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64471_65371__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64485_65374 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64486_65375 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64487_65376 = true;
var _STAR_print_fn_STAR__temp_val__64488_65377 = ((function (seq__64429_65365,chunk__64430_65366,count__64431_65367,i__64432_65368,_STAR_print_newline_STAR__orig_val__64485_65374,_STAR_print_fn_STAR__orig_val__64486_65375,_STAR_print_newline_STAR__temp_val__64487_65376,sb__4661__auto__,map__64471_65370,map__64471_65371__$1,global_exports_65372,dep_65369,map__64427,map__64427__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__64429_65365,chunk__64430_65366,count__64431_65367,i__64432_65368,_STAR_print_newline_STAR__orig_val__64485_65374,_STAR_print_fn_STAR__orig_val__64486_65375,_STAR_print_newline_STAR__temp_val__64487_65376,sb__4661__auto__,map__64471_65370,map__64471_65371__$1,global_exports_65372,dep_65369,map__64427,map__64427__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64487_65376;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64488_65377;

try{cljs.compiler.emit_global_export(ns_name,global_exports_65372,dep_65369);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64486_65375;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64485_65374;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__65394 = seq__64429_65365;
var G__65395 = chunk__64430_65366;
var G__65396 = count__64431_65367;
var G__65397 = (i__64432_65368 + (1));
seq__64429_65365 = G__65394;
chunk__64430_65366 = G__65395;
count__64431_65367 = G__65396;
i__64432_65368 = G__65397;
continue;
} else {
var temp__5720__auto___65399 = cljs.core.seq(seq__64429_65365);
if(temp__5720__auto___65399){
var seq__64429_65400__$1 = temp__5720__auto___65399;
if(cljs.core.chunked_seq_QMARK_(seq__64429_65400__$1)){
var c__4550__auto___65402 = cljs.core.chunk_first(seq__64429_65400__$1);
var G__65403 = cljs.core.chunk_rest(seq__64429_65400__$1);
var G__65404 = c__4550__auto___65402;
var G__65405 = cljs.core.count(c__4550__auto___65402);
var G__65406 = (0);
seq__64429_65365 = G__65403;
chunk__64430_65366 = G__65404;
count__64431_65367 = G__65405;
i__64432_65368 = G__65406;
continue;
} else {
var dep_65407 = cljs.core.first(seq__64429_65400__$1);
var map__64500_65410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_65407));
var map__64500_65411__$1 = (((((!((map__64500_65410 == null))))?(((((map__64500_65410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64500_65410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64500_65410):map__64500_65410);
var global_exports_65412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64500_65411__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64509_65415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64510_65416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64511_65417 = true;
var _STAR_print_fn_STAR__temp_val__64512_65418 = ((function (seq__64429_65365,chunk__64430_65366,count__64431_65367,i__64432_65368,_STAR_print_newline_STAR__orig_val__64509_65415,_STAR_print_fn_STAR__orig_val__64510_65416,_STAR_print_newline_STAR__temp_val__64511_65417,sb__4661__auto__,map__64500_65410,map__64500_65411__$1,global_exports_65412,dep_65407,seq__64429_65400__$1,temp__5720__auto___65399,map__64427,map__64427__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__64429_65365,chunk__64430_65366,count__64431_65367,i__64432_65368,_STAR_print_newline_STAR__orig_val__64509_65415,_STAR_print_fn_STAR__orig_val__64510_65416,_STAR_print_newline_STAR__temp_val__64511_65417,sb__4661__auto__,map__64500_65410,map__64500_65411__$1,global_exports_65412,dep_65407,seq__64429_65400__$1,temp__5720__auto___65399,map__64427,map__64427__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64511_65417;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64512_65418;

try{cljs.compiler.emit_global_export(ns_name,global_exports_65412,dep_65407);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64510_65416;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64509_65415;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__65421 = cljs.core.next(seq__64429_65400__$1);
var G__65422 = null;
var G__65423 = (0);
var G__65424 = (0);
seq__64429_65365 = G__65421;
chunk__64430_65366 = G__65422;
count__64431_65367 = G__65423;
i__64432_65368 = G__65424;
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
var bound_vars__$1 = (function (){var G__64544 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64544,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__64544;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__64556 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__64557 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__64558 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__64559 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__64560 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__64561 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__64562 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__64563 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__64564 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__64565 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__64566 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__64567 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__64568 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__64569 = ns;
var _STAR_checked_arrays_STAR__temp_val__64570 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__64571 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__64572 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__64573 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__64574 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__64575 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__64576 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__64577 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__64578 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__64579 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__64568;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__64569;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__64570;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__64571;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__64572;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__64573;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__64574;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__64575;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__64576;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__64577;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__64578;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__64579;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e64590){var cause = e64590;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__64598 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__64598__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64598,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__64598);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64598__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__64598__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e64604){var cause = e64604;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__64611 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__64610 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__64610.cljs$core$IFn$_invoke$arity$1 ? fexpr__64610.cljs$core$IFn$_invoke$arity$1(G__64611) : fexpr__64610.call(null,G__64611));
})())){
var G__64613 = bound_vars__$1;
var G__64614 = aenv__$1;
var G__64615 = ast;
var G__64616 = opts;
var G__64617 = ((function (G__64613,G__64614,G__64615,G__64616,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64556,_STAR_cljs_ns_STAR__orig_val__64557,_STAR_checked_arrays_STAR__orig_val__64558,_STAR_cljs_static_fns_STAR__orig_val__64559,_STAR_fn_invoke_direct_STAR__orig_val__64560,_STAR_ns_STAR__orig_val__64561,_STAR_passes_STAR__orig_val__64562,_STAR_alias_map_STAR__orig_val__64563,_STAR_data_readers_STAR__orig_val__64564,resolve_symbol_orig_val__64565,_STAR_source_map_data_STAR__orig_val__64566,_STAR_cljs_file_STAR__orig_val__64567,_STAR_compiler_STAR__temp_val__64568,_STAR_cljs_ns_STAR__temp_val__64569,_STAR_checked_arrays_STAR__temp_val__64570,_STAR_cljs_static_fns_STAR__temp_val__64571,_STAR_fn_invoke_direct_STAR__temp_val__64572,_STAR_ns_STAR__temp_val__64573,_STAR_passes_STAR__temp_val__64574,_STAR_alias_map_STAR__temp_val__64575,_STAR_data_readers_STAR__temp_val__64576,resolve_symbol_temp_val__64577,_STAR_source_map_data_STAR__temp_val__64578,_STAR_cljs_file_STAR__temp_val__64579,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});})(G__64613,G__64614,G__64615,G__64616,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64556,_STAR_cljs_ns_STAR__orig_val__64557,_STAR_checked_arrays_STAR__orig_val__64558,_STAR_cljs_static_fns_STAR__orig_val__64559,_STAR_fn_invoke_direct_STAR__orig_val__64560,_STAR_ns_STAR__orig_val__64561,_STAR_passes_STAR__orig_val__64562,_STAR_alias_map_STAR__orig_val__64563,_STAR_data_readers_STAR__orig_val__64564,resolve_symbol_orig_val__64565,_STAR_source_map_data_STAR__orig_val__64566,_STAR_cljs_file_STAR__orig_val__64567,_STAR_compiler_STAR__temp_val__64568,_STAR_cljs_ns_STAR__temp_val__64569,_STAR_checked_arrays_STAR__temp_val__64570,_STAR_cljs_static_fns_STAR__temp_val__64571,_STAR_fn_invoke_direct_STAR__temp_val__64572,_STAR_ns_STAR__temp_val__64573,_STAR_passes_STAR__temp_val__64574,_STAR_alias_map_STAR__temp_val__64575,_STAR_data_readers_STAR__temp_val__64576,resolve_symbol_temp_val__64577,_STAR_source_map_data_STAR__temp_val__64578,_STAR_cljs_file_STAR__temp_val__64579,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
;
var fexpr__64612 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__64612.cljs$core$IFn$_invoke$arity$5 ? fexpr__64612.cljs$core$IFn$_invoke$arity$5(G__64613,G__64614,G__64615,G__64616,G__64617) : fexpr__64612.call(null,G__64613,G__64614,G__64615,G__64616,G__64617));
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64556,_STAR_cljs_ns_STAR__orig_val__64557,_STAR_checked_arrays_STAR__orig_val__64558,_STAR_cljs_static_fns_STAR__orig_val__64559,_STAR_fn_invoke_direct_STAR__orig_val__64560,_STAR_ns_STAR__orig_val__64561,_STAR_passes_STAR__orig_val__64562,_STAR_alias_map_STAR__orig_val__64563,_STAR_data_readers_STAR__orig_val__64564,resolve_symbol_orig_val__64565,_STAR_source_map_data_STAR__orig_val__64566,_STAR_cljs_file_STAR__orig_val__64567,_STAR_compiler_STAR__temp_val__64568,_STAR_cljs_ns_STAR__temp_val__64569,_STAR_checked_arrays_STAR__temp_val__64570,_STAR_cljs_static_fns_STAR__temp_val__64571,_STAR_fn_invoke_direct_STAR__temp_val__64572,_STAR_ns_STAR__temp_val__64573,_STAR_passes_STAR__temp_val__64574,_STAR_alias_map_STAR__temp_val__64575,_STAR_data_readers_STAR__temp_val__64576,resolve_symbol_temp_val__64577,_STAR_source_map_data_STAR__temp_val__64578,_STAR_cljs_file_STAR__temp_val__64579,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64556,_STAR_cljs_ns_STAR__orig_val__64557,_STAR_checked_arrays_STAR__orig_val__64558,_STAR_cljs_static_fns_STAR__orig_val__64559,_STAR_fn_invoke_direct_STAR__orig_val__64560,_STAR_ns_STAR__orig_val__64561,_STAR_passes_STAR__orig_val__64562,_STAR_alias_map_STAR__orig_val__64563,_STAR_data_readers_STAR__orig_val__64564,resolve_symbol_orig_val__64565,_STAR_source_map_data_STAR__orig_val__64566,_STAR_cljs_file_STAR__orig_val__64567,_STAR_compiler_STAR__temp_val__64568,_STAR_cljs_ns_STAR__temp_val__64569,_STAR_checked_arrays_STAR__temp_val__64570,_STAR_cljs_static_fns_STAR__temp_val__64571,_STAR_fn_invoke_direct_STAR__temp_val__64572,_STAR_ns_STAR__temp_val__64573,_STAR_passes_STAR__temp_val__64574,_STAR_alias_map_STAR__temp_val__64575,_STAR_data_readers_STAR__temp_val__64576,resolve_symbol_temp_val__64577,_STAR_source_map_data_STAR__temp_val__64578,_STAR_cljs_file_STAR__temp_val__64579,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
var G__64618 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__64618) : cb__$1.call(null,G__64618));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__64567;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__64566;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__64565;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__64564;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__64563;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__64562;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__64561;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__64560;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__64559;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__64558;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__64557;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__64556;
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
var G__64620 = arguments.length;
switch (G__64620) {
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
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

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
var bound_vars__$1 = (function (){var G__64640 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64640,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__64640;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__64645 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__64646 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__64647 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__64648 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__64649 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__64650 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__64651 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__64652 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__64653 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__64654 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__64655 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__64656 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__64657 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__64658 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__64659 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__64660 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__64661 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__64662 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__64663 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__64664 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__64665 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__64666 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__64656;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__64657;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__64658;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__64659;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__64660;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__64661;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__64662;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__64663;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__64664;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__64665;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__64666;

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__64682 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__64682__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64682,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__64682);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64682__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__64682__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e64683){var cause = e64683;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__64684 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__64687 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__64687__$1 = (((((!((map__64687 == null))))?(((((map__64687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64687):map__64687);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64687__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64687__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64684,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64684,(1),null);
if(cljs.core.truth_((function (){var G__64692 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__64691 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__64691.cljs$core$IFn$_invoke$arity$1 ? fexpr__64691.cljs$core$IFn$_invoke$arity$1(G__64692) : fexpr__64691.call(null,G__64692));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__64684,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__64645,_STAR_eval_fn_STAR__orig_val__64646,_STAR_cljs_ns_STAR__orig_val__64647,_STAR_checked_arrays_STAR__orig_val__64648,_STAR_cljs_static_fns_STAR__orig_val__64649,_STAR_fn_invoke_direct_STAR__orig_val__64650,_STAR_ns_STAR__orig_val__64651,_STAR_alias_map_STAR__orig_val__64652,_STAR_data_readers_STAR__orig_val__64653,resolve_symbol_orig_val__64654,_STAR_source_map_data_STAR__orig_val__64655,_STAR_compiler_STAR__temp_val__64656,_STAR_eval_fn_STAR__temp_val__64657,_STAR_cljs_ns_STAR__temp_val__64658,_STAR_checked_arrays_STAR__temp_val__64659,_STAR_cljs_static_fns_STAR__temp_val__64660,_STAR_fn_invoke_direct_STAR__temp_val__64661,_STAR_ns_STAR__temp_val__64662,_STAR_alias_map_STAR__temp_val__64663,_STAR_data_readers_STAR__temp_val__64664,resolve_symbol_temp_val__64665,_STAR_source_map_data_STAR__temp_val__64666,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64697_65495 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64698_65496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64699_65497 = true;
var _STAR_print_fn_STAR__temp_val__64700_65498 = ((function (_STAR_print_newline_STAR__orig_val__64697_65495,_STAR_print_fn_STAR__orig_val__64698_65496,_STAR_print_newline_STAR__temp_val__64699_65497,sb__4661__auto__,ns_name,sb,ast,vec__64684,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__64645,_STAR_eval_fn_STAR__orig_val__64646,_STAR_cljs_ns_STAR__orig_val__64647,_STAR_checked_arrays_STAR__orig_val__64648,_STAR_cljs_static_fns_STAR__orig_val__64649,_STAR_fn_invoke_direct_STAR__orig_val__64650,_STAR_ns_STAR__orig_val__64651,_STAR_alias_map_STAR__orig_val__64652,_STAR_data_readers_STAR__orig_val__64653,resolve_symbol_orig_val__64654,_STAR_source_map_data_STAR__orig_val__64655,_STAR_compiler_STAR__temp_val__64656,_STAR_eval_fn_STAR__temp_val__64657,_STAR_cljs_ns_STAR__temp_val__64658,_STAR_checked_arrays_STAR__temp_val__64659,_STAR_cljs_static_fns_STAR__temp_val__64660,_STAR_fn_invoke_direct_STAR__temp_val__64661,_STAR_ns_STAR__temp_val__64662,_STAR_alias_map_STAR__temp_val__64663,_STAR_data_readers_STAR__temp_val__64664,resolve_symbol_temp_val__64665,_STAR_source_map_data_STAR__temp_val__64666,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64697_65495,_STAR_print_fn_STAR__orig_val__64698_65496,_STAR_print_newline_STAR__temp_val__64699_65497,sb__4661__auto__,ns_name,sb,ast,vec__64684,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__64645,_STAR_eval_fn_STAR__orig_val__64646,_STAR_cljs_ns_STAR__orig_val__64647,_STAR_checked_arrays_STAR__orig_val__64648,_STAR_cljs_static_fns_STAR__orig_val__64649,_STAR_fn_invoke_direct_STAR__orig_val__64650,_STAR_ns_STAR__orig_val__64651,_STAR_alias_map_STAR__orig_val__64652,_STAR_data_readers_STAR__orig_val__64653,resolve_symbol_orig_val__64654,_STAR_source_map_data_STAR__orig_val__64655,_STAR_compiler_STAR__temp_val__64656,_STAR_eval_fn_STAR__temp_val__64657,_STAR_cljs_ns_STAR__temp_val__64658,_STAR_checked_arrays_STAR__temp_val__64659,_STAR_cljs_static_fns_STAR__temp_val__64660,_STAR_fn_invoke_direct_STAR__temp_val__64661,_STAR_ns_STAR__temp_val__64662,_STAR_alias_map_STAR__temp_val__64663,_STAR_data_readers_STAR__temp_val__64664,resolve_symbol_temp_val__64665,_STAR_source_map_data_STAR__temp_val__64666,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64699_65497;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64700_65498;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64698_65496;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64697_65495;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

var G__64705 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64705) : cb.call(null,G__64705));
}
});})(ast,vec__64684,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__64645,_STAR_eval_fn_STAR__orig_val__64646,_STAR_cljs_ns_STAR__orig_val__64647,_STAR_checked_arrays_STAR__orig_val__64648,_STAR_cljs_static_fns_STAR__orig_val__64649,_STAR_fn_invoke_direct_STAR__orig_val__64650,_STAR_ns_STAR__orig_val__64651,_STAR_alias_map_STAR__orig_val__64652,_STAR_data_readers_STAR__orig_val__64653,resolve_symbol_orig_val__64654,_STAR_source_map_data_STAR__orig_val__64655,_STAR_compiler_STAR__temp_val__64656,_STAR_eval_fn_STAR__temp_val__64657,_STAR_cljs_ns_STAR__temp_val__64658,_STAR_checked_arrays_STAR__temp_val__64659,_STAR_cljs_static_fns_STAR__temp_val__64660,_STAR_fn_invoke_direct_STAR__temp_val__64661,_STAR_ns_STAR__temp_val__64662,_STAR_alias_map_STAR__temp_val__64663,_STAR_data_readers_STAR__temp_val__64664,resolve_symbol_temp_val__64665,_STAR_source_map_data_STAR__temp_val__64666,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64710_65503 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64711_65504 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64712_65505 = true;
var _STAR_print_fn_STAR__temp_val__64713_65506 = ((function (_STAR_print_newline_STAR__orig_val__64710_65503,_STAR_print_fn_STAR__orig_val__64711_65504,_STAR_print_newline_STAR__temp_val__64712_65505,sb__4661__auto__,ast,vec__64684,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__64645,_STAR_eval_fn_STAR__orig_val__64646,_STAR_cljs_ns_STAR__orig_val__64647,_STAR_checked_arrays_STAR__orig_val__64648,_STAR_cljs_static_fns_STAR__orig_val__64649,_STAR_fn_invoke_direct_STAR__orig_val__64650,_STAR_ns_STAR__orig_val__64651,_STAR_alias_map_STAR__orig_val__64652,_STAR_data_readers_STAR__orig_val__64653,resolve_symbol_orig_val__64654,_STAR_source_map_data_STAR__orig_val__64655,_STAR_compiler_STAR__temp_val__64656,_STAR_eval_fn_STAR__temp_val__64657,_STAR_cljs_ns_STAR__temp_val__64658,_STAR_checked_arrays_STAR__temp_val__64659,_STAR_cljs_static_fns_STAR__temp_val__64660,_STAR_fn_invoke_direct_STAR__temp_val__64661,_STAR_ns_STAR__temp_val__64662,_STAR_alias_map_STAR__temp_val__64663,_STAR_data_readers_STAR__temp_val__64664,resolve_symbol_temp_val__64665,_STAR_source_map_data_STAR__temp_val__64666,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64710_65503,_STAR_print_fn_STAR__orig_val__64711_65504,_STAR_print_newline_STAR__temp_val__64712_65505,sb__4661__auto__,ast,vec__64684,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__64645,_STAR_eval_fn_STAR__orig_val__64646,_STAR_cljs_ns_STAR__orig_val__64647,_STAR_checked_arrays_STAR__orig_val__64648,_STAR_cljs_static_fns_STAR__orig_val__64649,_STAR_fn_invoke_direct_STAR__orig_val__64650,_STAR_ns_STAR__orig_val__64651,_STAR_alias_map_STAR__orig_val__64652,_STAR_data_readers_STAR__orig_val__64653,resolve_symbol_orig_val__64654,_STAR_source_map_data_STAR__orig_val__64655,_STAR_compiler_STAR__temp_val__64656,_STAR_eval_fn_STAR__temp_val__64657,_STAR_cljs_ns_STAR__temp_val__64658,_STAR_checked_arrays_STAR__temp_val__64659,_STAR_cljs_static_fns_STAR__temp_val__64660,_STAR_fn_invoke_direct_STAR__temp_val__64661,_STAR_ns_STAR__temp_val__64662,_STAR_alias_map_STAR__temp_val__64663,_STAR_data_readers_STAR__temp_val__64664,resolve_symbol_temp_val__64665,_STAR_source_map_data_STAR__temp_val__64666,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64712_65505;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64713_65506;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64711_65504;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64710_65503;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var G__64714 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__64714) : cb.call(null,G__64714));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__64655;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__64654;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__64653;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__64652;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__64651;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__64650;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__64649;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__64648;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__64647;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__64646;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__64645;
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
var G__64727 = arguments.length;
switch (G__64727) {
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
var bound_vars__$1 = (function (){var G__64739 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64739,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__64739;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__64741 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__64742 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__64743 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__64744 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__64745 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__64746 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__64747 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__64748 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__64749 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__64750 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__64751 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__64752 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__64753 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__64754 = ns;
var _STAR_checked_arrays_STAR__temp_val__64755 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__64756 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__64757 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__64758 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__64759 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__64760 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__64761 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__64762 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__64752;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__64753;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__64754;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__64755;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__64756;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__64757;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__64758;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__64759;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__64760;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__64761;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__64762;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e64764){var cause = e64764;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__64767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__64767__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64767,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__64767);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64767__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__64767__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e64768){var cause = e64768;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__64769 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__64772 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__64772__$1 = (((((!((map__64772 == null))))?(((((map__64772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64772):map__64772);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64772__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64772__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64769,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64769,(1),null);
if(cljs.core.truth_((function (){var G__64778 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__64777 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__64777.cljs$core$IFn$_invoke$arity$1 ? fexpr__64777.cljs$core$IFn$_invoke$arity$1(G__64778) : fexpr__64777.call(null,G__64778));
})())){
var G__64780 = bound_vars__$1;
var G__64781 = aenv__$1;
var G__64782 = ast__$1;
var G__64783 = opts;
var G__64784 = ((function (G__64780,G__64781,G__64782,G__64783,ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64786_65565 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64787_65566 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64788_65567 = true;
var _STAR_print_fn_STAR__temp_val__64789_65568 = ((function (_STAR_print_newline_STAR__orig_val__64786_65565,_STAR_print_fn_STAR__orig_val__64787_65566,_STAR_print_newline_STAR__temp_val__64788_65567,sb__4661__auto__,ns_name,G__64780,G__64781,G__64782,G__64783,ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64786_65565,_STAR_print_fn_STAR__orig_val__64787_65566,_STAR_print_newline_STAR__temp_val__64788_65567,sb__4661__auto__,ns_name,G__64780,G__64781,G__64782,G__64783,ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64788_65567;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64789_65568;

try{cljs.compiler.emit(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64787_65566;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64786_65565;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});})(G__64780,G__64781,G__64782,G__64783,ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
var fexpr__64779 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__64779.cljs$core$IFn$_invoke$arity$5 ? fexpr__64779.cljs$core$IFn$_invoke$arity$5(G__64780,G__64781,G__64782,G__64783,G__64784) : fexpr__64779.call(null,G__64780,G__64781,G__64782,G__64783,G__64784));
} else {
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64791_65569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64792_65570 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64793_65571 = true;
var _STAR_print_fn_STAR__temp_val__64794_65572 = ((function (_STAR_print_newline_STAR__orig_val__64791_65569,_STAR_print_fn_STAR__orig_val__64792_65570,_STAR_print_newline_STAR__temp_val__64793_65571,sb__4661__auto__,ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64791_65569,_STAR_print_fn_STAR__orig_val__64792_65570,_STAR_print_newline_STAR__temp_val__64793_65571,sb__4661__auto__,ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64793_65571;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64794_65572;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64792_65570;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64791_65569;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

return ((function (ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
;})(ast,vec__64769,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64741,_STAR_eval_fn_STAR__orig_val__64742,_STAR_cljs_ns_STAR__orig_val__64743,_STAR_checked_arrays_STAR__orig_val__64744,_STAR_cljs_static_fns_STAR__orig_val__64745,_STAR_fn_invoke_direct_STAR__orig_val__64746,_STAR_ns_STAR__orig_val__64747,_STAR_alias_map_STAR__orig_val__64748,_STAR_data_readers_STAR__orig_val__64749,resolve_symbol_orig_val__64750,_STAR_source_map_data_STAR__orig_val__64751,_STAR_compiler_STAR__temp_val__64752,_STAR_eval_fn_STAR__temp_val__64753,_STAR_cljs_ns_STAR__temp_val__64754,_STAR_checked_arrays_STAR__temp_val__64755,_STAR_cljs_static_fns_STAR__temp_val__64756,_STAR_fn_invoke_direct_STAR__temp_val__64757,_STAR_ns_STAR__temp_val__64758,_STAR_alias_map_STAR__temp_val__64759,_STAR_data_readers_STAR__temp_val__64760,resolve_symbol_temp_val__64761,_STAR_source_map_data_STAR__temp_val__64762,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__64795 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__64795) : cb__$1.call(null,G__64795));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__64751;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__64750;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__64749;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__64748;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__64747;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__64746;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__64745;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__64744;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__64743;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__64742;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__64741;
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
var G__64800 = arguments.length;
switch (G__64800) {
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
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

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
var bound_vars__$1 = (function (){var G__64814 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64814,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__64814;
}
})();
var aname = (function (){var G__64815 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__64815);
} else {
return G__64815;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__64818 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__64819 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__64820 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__64821 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__64822 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__64823 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__64824 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__64825 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__64826 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__64827 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__64828 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__64829 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__64830 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__64831 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__64832 = ns;
var _STAR_checked_arrays_STAR__temp_val__64833 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__64834 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__64835 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__64836 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__64837 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__64838 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__64839 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__64840 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__64841 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__64830;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__64831;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__64832;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__64833;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__64834;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__64835;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__64836;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__64837;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__64838;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__64839;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__64840;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__64841;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e64842){var cause = e64842;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__64844 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__64844__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64844,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__64844);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64844__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__64844__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e64845){var cause = e64845;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__64850 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__64854 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__64854__$1 = (((((!((map__64854 == null))))?(((((map__64854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64854):map__64854);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64854__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64854__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64850,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64850,(1),null);
if(cljs.core.truth_((function (){var G__64858 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__64857 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__64857.cljs$core$IFn$_invoke$arity$1 ? fexpr__64857.cljs$core$IFn$_invoke$arity$1(G__64858) : fexpr__64857.call(null,G__64858));
})())){
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64859_65595 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64860_65596 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64861_65597 = true;
var _STAR_print_fn_STAR__temp_val__64862_65598 = ((function (_STAR_print_newline_STAR__orig_val__64859_65595,_STAR_print_fn_STAR__orig_val__64860_65596,_STAR_print_newline_STAR__temp_val__64861_65597,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64859_65595,_STAR_print_fn_STAR__orig_val__64860_65596,_STAR_print_newline_STAR__temp_val__64861_65597,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64861_65597;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64862_65598;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64860_65596;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64859_65595;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

var G__64872 = true;
var G__64873 = bound_vars__$1;
var G__64874 = aenv__$1;
var G__64875 = ast__$1;
var G__64876 = opts;
var G__64877 = ((function (G__64872,G__64873,G__64874,G__64875,G__64876,ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
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
});})(G__64872,G__64873,G__64874,G__64875,G__64876,ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var fexpr__64871 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__64871.cljs$core$IFn$_invoke$arity$6 ? fexpr__64871.cljs$core$IFn$_invoke$arity$6(G__64872,G__64873,G__64874,G__64875,G__64876,G__64877) : fexpr__64871.call(null,G__64872,G__64873,G__64874,G__64875,G__64876,G__64877));
} else {
var env__58255__auto___65605 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__58255__auto___65606__$1 = ((cljs.core.map_QMARK_(env__58255__auto___65605))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__58255__auto___65605):(((((env__58255__auto___65605 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__58255__auto___65605)))))?env__58255__auto___65605:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__58255__auto___65605))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__64888_65609 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__64889_65610 = env__58255__auto___65606__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__64889_65610;

try{sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64895_65611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64896_65612 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64897_65613 = true;
var _STAR_print_fn_STAR__temp_val__64898_65614 = ((function (_STAR_print_newline_STAR__orig_val__64895_65611,_STAR_print_fn_STAR__orig_val__64896_65612,_STAR_print_newline_STAR__temp_val__64897_65613,sb__4661__auto__,_STAR_compiler_STAR__orig_val__64888_65609,_STAR_compiler_STAR__temp_val__64889_65610,env__58255__auto___65605,env__58255__auto___65606__$1,ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64895_65611,_STAR_print_fn_STAR__orig_val__64896_65612,_STAR_print_newline_STAR__temp_val__64897_65613,sb__4661__auto__,_STAR_compiler_STAR__orig_val__64888_65609,_STAR_compiler_STAR__temp_val__64889_65610,env__58255__auto___65605,env__58255__auto___65606__$1,ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64897_65613;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64898_65614;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64896_65612;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64895_65611;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__64888_65609;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__64850,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
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
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e64919){var cause = e64919;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__64818,_STAR_eval_fn_STAR__orig_val__64819,_STAR_cljs_ns_STAR__orig_val__64820,_STAR_checked_arrays_STAR__orig_val__64821,_STAR_cljs_static_fns_STAR__orig_val__64822,_STAR_fn_invoke_direct_STAR__orig_val__64823,_STAR_ns_STAR__orig_val__64824,_STAR_alias_map_STAR__orig_val__64825,_STAR_data_readers_STAR__orig_val__64826,resolve_symbol_orig_val__64827,_STAR_source_map_data_STAR__orig_val__64828,_STAR_cljs_file_STAR__orig_val__64829,_STAR_compiler_STAR__temp_val__64830,_STAR_eval_fn_STAR__temp_val__64831,_STAR_cljs_ns_STAR__temp_val__64832,_STAR_checked_arrays_STAR__temp_val__64833,_STAR_cljs_static_fns_STAR__temp_val__64834,_STAR_fn_invoke_direct_STAR__temp_val__64835,_STAR_ns_STAR__temp_val__64836,_STAR_alias_map_STAR__temp_val__64837,_STAR_data_readers_STAR__temp_val__64838,resolve_symbol_temp_val__64839,_STAR_source_map_data_STAR__temp_val__64840,_STAR_cljs_file_STAR__temp_val__64841,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5718__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
var fexpr__64924 = cljs.js.trampoline_safe(f);
return (fexpr__64924.cljs$core$IFn$_invoke$arity$2 ? fexpr__64924.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__64924.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__64829;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__64828;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__64827;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__64826;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__64825;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__64824;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__64823;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__64822;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__64821;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__64820;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__64819;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__64818;
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
var G__64941 = arguments.length;
switch (G__64941) {
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
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

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
var G__64978 = arguments.length;
switch (G__64978) {
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
var st_65634 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_65634,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_65634,result){
return (function (p__64997){
var map__65002 = p__64997;
var map__65002__$1 = (((((!((map__65002 == null))))?(((((map__65002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65002):map__65002);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65002__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65002__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
});})(st_65634,result))
);

return cljs.core.deref(result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;

//# sourceMappingURL=cljs.js.js.map
