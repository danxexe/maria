goog.provide('maria.live.source_lookups');
maria.live.source_lookups.read_node = (function maria$live$source_lookups$read_node(reader){
return lark.tree.parse.parse_next(reader);
});
/**
 * Given an index into a string, returns the 1-indexed line+column position
 */
maria.live.source_lookups.index_position = (function maria$live$source_lookups$index_position(idx,source){
var lines = (function (){var source__$1 = source;
var source__$2 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(source__$1,(0),idx);
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(source__$2,"\n");
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.count(lines),new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.count(cljs.core.last(lines))], null);
});
/**
 * Trim string, from beginning until the provided 1-indexed line+column position.
 */
maria.live.source_lookups.source_from = (function maria$live$source_lookups$source_from(source,p__51204){
var map__51205 = p__51204;
var map__51205__$1 = (((((!((map__51205 == null))))?(((((map__51205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51205):map__51205);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51205__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51205__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source__$1 = source;
var source__$2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(source__$1,"\n");
var source__$3 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((line - (1)),source__$2);
var source__$4 = cljs.core.vec(source__$3);
var source__$5 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(source__$4,(cljs.core.count(source__$4) - (1)),((function (source__$1,source__$2,source__$3,source__$4,map__51205,map__51205__$1,line,column){
return (function (p1__51203_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__51203_SHARP_,(column - (1)),cljs.core.count(p1__51203_SHARP_));
});})(source__$1,source__$2,source__$3,source__$4,map__51205,map__51205__$1,line,column))
);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",source__$5);
});
/**
 * Given a 1-indexed position in a source string, return the first form.
 */
maria.live.source_lookups.source_of_form_at_position = (function maria$live$source_lookups$source_of_form_at_position(source,position){
var reader = lark.tree.parse.indexing_reader(maria.live.source_lookups.source_from(source,position));
var node = maria.live.source_lookups.read_node(reader);
return lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Given a 1-indexed position in a source string, return the first form.
 */
maria.live.source_lookups.source_of_top_level_form = (function maria$live$source_lookups$source_of_top_level_form(source,p__51226){
var map__51228 = p__51226;
var map__51228__$1 = (((((!((map__51228 == null))))?(((((map__51228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51228):map__51228);
var the_var = map__51228__$1;
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51228__$1,new cljs.core.Keyword(null,"line","line",212345235));
return maria.live.source_lookups.source_of_form_at_position(source,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),(1)], null));
});
maria.live.source_lookups.js_match = (function maria$live$source_lookups$js_match(js_value,js_source,p__51231){
var map__51251 = p__51231;
var map__51251__$1 = (((((!((map__51251 == null))))?(((((map__51251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51251):map__51251);
var result = map__51251__$1;
var compiled_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"compiled-js","compiled-js",-1400894052));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var intermediate_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"intermediate-values","intermediate-values",-1264737075));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"value","value",305978217));
var or__4131__auto__ = (function (){var G__51258 = intermediate_values;
var G__51258__$1 = (((G__51258 == null))?null:cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(maria.live.source_lookups.js_match,js_value,js_source),G__51258));
if((G__51258__$1 == null)){
return null;
} else {
return cljs.core.first(G__51258__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = (function (){var and__4120__auto__ = source_map;
if(cljs.core.truth_(and__4120__auto__)){
var G__51261 = compiled_js;
if((G__51261 == null)){
return null;
} else {
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(G__51261,js_source);
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var i = temp__5720__auto__;
return maria.live.source_lookups.source_of_form_at_position(source,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(lark.eval.mapped_cljs_position(maria.live.source_lookups.index_position(i,compiled_js),source_map),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.inc),new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.inc));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return null;
}
}
});
/**
 * Searches previously compiled ClojureScript<->JavaScript mappings to return the original ClojureScript
 *   corresponding to compiled JavaScript
 */
maria.live.source_lookups.js_source__GT_clj_source = (function maria$live$source_lookups$js_source__GT_clj_source(js_value,js_source){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(maria.live.source_lookups.js_match,js_value,js_source),cljs.core.deref(maria.eval.eval_log)));
});
maria.live.source_lookups.demunge_symbol_str = (function maria$live$source_lookups$demunge_symbol_str(s){
if(cljs.core.truth_(s)){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge(s),"/");
if((cljs.core.count(parts) > (1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(parts))].join('');
} else {
return cljs.core.first(parts);
}
} else {
return null;
}
});
/**
 * Look up the var for a function using its `name` property
 */
maria.live.source_lookups.fn_var = cljs.core.memoize((function (f){
if(cljs.core.fn_QMARK_(f)){
var or__4131__auto__ = (function (){var temp__5720__auto__ = maria.util.some_str((f["name"]));
if(cljs.core.truth_(temp__5720__auto__)){
var munged_sym = temp__5720__auto__;
var temp__5720__auto____$1 = maria.live.ns_utils.resolve_var.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(maria.live.source_lookups.demunge_symbol_str(munged_sym)));
if(cljs.core.truth_(temp__5720__auto____$1)){
var the_var = temp__5720__auto____$1;
return the_var;
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.first((function (){var iter__4523__auto__ = ((function (or__4131__auto__){
return (function maria$live$source_lookups$iter__51287(s__51288){
return (new cljs.core.LazySeq(null,((function (or__4131__auto__){
return (function (){
var s__51288__$1 = s__51288;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51288__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__51294 = cljs.core.first(xs__6277__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51294,(0),null);
var ns_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51294,(1),null);
var iterys__4519__auto__ = ((function (s__51288__$1,vec__51294,_,ns_data,xs__6277__auto__,temp__5720__auto__,or__4131__auto__){
return (function maria$live$source_lookups$iter__51287_$_iter__51289(s__51290){
return (new cljs.core.LazySeq(null,((function (s__51288__$1,vec__51294,_,ns_data,xs__6277__auto__,temp__5720__auto__,or__4131__auto__){
return (function (){
var s__51290__$1 = s__51290;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__51290__$1);
if(temp__5720__auto____$1){
var s__51290__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51290__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51290__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51292 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51291 = (0);
while(true){
if((i__51291 < size__4522__auto__)){
var vec__51306 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51291);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51306,(0),null);
var the_var = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51306,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,lark.eval.var_value(the_var))){
cljs.core.chunk_append(b__51292,the_var);

var G__51364 = (i__51291 + (1));
i__51291 = G__51364;
continue;
} else {
var G__51365 = (i__51291 + (1));
i__51291 = G__51365;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51292),maria$live$source_lookups$iter__51287_$_iter__51289(cljs.core.chunk_rest(s__51290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51292),null);
}
} else {
var vec__51310 = cljs.core.first(s__51290__$2);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51310,(0),null);
var the_var = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51310,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,lark.eval.var_value(the_var))){
return cljs.core.cons(the_var,maria$live$source_lookups$iter__51287_$_iter__51289(cljs.core.rest(s__51290__$2)));
} else {
var G__51368 = cljs.core.rest(s__51290__$2);
s__51290__$1 = G__51368;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__51288__$1,vec__51294,_,ns_data,xs__6277__auto__,temp__5720__auto__,or__4131__auto__))
,null,null));
});})(s__51288__$1,vec__51294,_,ns_data,xs__6277__auto__,temp__5720__auto__,or__4131__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((function (){var G__51314 = new cljs.core.Keyword(null,"defs","defs",1398449717);
return (ns_data.cljs$core$IFn$_invoke$arity$1 ? ns_data.cljs$core$IFn$_invoke$arity$1(G__51314) : ns_data.call(null,G__51314));
})()));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,maria$live$source_lookups$iter__51287(cljs.core.rest(s__51288__$1)));
} else {
var G__51369 = cljs.core.rest(s__51288__$1);
s__51288__$1 = G__51369;
continue;
}
} else {
return null;
}
break;
}
});})(or__4131__auto__))
,null,null));
});})(or__4131__auto__))
;
return iter__4523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(maria.eval.c_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null)));
})());
}
} else {
return null;
}
}));
maria.live.source_lookups.source_path = "/js/cljs_live_bundles/sources";
maria.live.source_lookups.fetch_source = (function maria$live$source_lookups$fetch_source(path,meta,cb){
var G__51319 = path;
var G__51320 = ((function (G__51319){
return (function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var source = target.getResponseText();
var G__51323 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),maria.live.source_lookups.source_of_top_level_form(source,meta)], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51323) : cb.call(null,G__51323));
} else {
var G__51324 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),["File not found: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"`\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target.getLastError())].join('')], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51324) : cb.call(null,G__51324));
}
});})(G__51319))
;
var G__51321 = "GET";
return goog.net.XhrIo.send(G__51319,G__51320,G__51321);
});
/**
 * Look up the source code corresponding to a var's metadata
 */
maria.live.source_lookups.var_source = (function maria$live$source_lookups$var_source(p__51325,cb){
var map__51326 = p__51325;
var map__51326__$1 = (((((!((map__51326 == null))))?(((((map__51326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51326):map__51326);
var the_var = map__51326__$1;
var map__51327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var map__51327__$1 = (((((!((map__51327 == null))))?(((((map__51327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51327):map__51327);
var meta = map__51327__$1;
var meta_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51327__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var temp__5718__auto__ = (function (){var G__51331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lark.eval.cljs_cache),meta_file);
if((G__51331 == null)){
return null;
} else {
return maria.live.source_lookups.source_of_top_level_form(G__51331,the_var);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var logged_source = temp__5718__auto__;
var G__51332 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),logged_source], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51332) : cb.call(null,G__51332));
} else {
var temp__5718__auto____$1 = (function (){var G__51333 = cljs.core.namespace(name);
var G__51333__$1 = (((G__51333 == null))?null:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__51333));
var G__51333__$2 = (((G__51333__$1 == null))?null:shadow.cljs.bootstrap.env.get_ns_info(G__51333__$1));
if((G__51333__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"source-name","source-name",1931491805).cljs$core$IFn$_invoke$arity$1(G__51333__$2);
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var source_name = temp__5718__auto____$1;
return maria.live.source_lookups.fetch_source([maria.eval.bootstrap_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_name)].join(''),meta,cb);
} else {
var temp__5718__auto____$2 = (function (){var or__4131__auto__ = file;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return meta_file;
}
})();
if(cljs.core.truth_(temp__5718__auto____$2)){
var file__$1 = temp__5718__auto____$2;
var namespace_path = (function (){var path = cljs.core.namespace(name);
var path__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,".");
var path__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,path__$1);
var path__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",path__$2);
return clojure.string.replace(path__$3,"$macros","");
})();
var file__$2 = cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace_path),".*"].join('')),file__$1);
return maria.live.source_lookups.fetch_source([maria.live.source_lookups.source_path,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file__$2)].join(''),meta,cb);
} else {
var G__51334 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),["File not specified for `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"`"].join('')], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51334) : cb.call(null,G__51334));
}
}
}
});
maria.live.source_lookups.fn_source_sync = (function maria$live$source_lookups$fn_source_sync(f){
if(cljs.core.fn_QMARK_(f)){
var or__4131__auto__ = maria.live.source_lookups.js_source__GT_clj_source(f,f.toString());
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f.toString();
}
} else {
return null;
}
});
maria.live.source_lookups.fn_name = (function maria$live$source_lookups$fn_name(f){
var or__4131__auto__ = (function (){var G__51339 = (f["name"]);
if((G__51339 == null)){
return null;
} else {
return maria.live.source_lookups.demunge_symbol_str(G__51339);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((maria.live.source_lookups.fn_var.cljs$core$IFn$_invoke$arity$1 ? maria.live.source_lookups.fn_var.cljs$core$IFn$_invoke$arity$1(f) : maria.live.source_lookups.fn_var.call(null,f)));
}
});
