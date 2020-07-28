goog.provide('shadow.cljs.bootstrap.browser');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.browser !== 'undefined') && (typeof shadow.cljs.bootstrap.browser.init_opts !== 'undefined')){
} else {
shadow.cljs.bootstrap.browser.init_opts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),cljs.core.PersistentVector.EMPTY], null));
}
shadow.cljs.bootstrap.browser.asset_path = (function shadow$cljs$bootstrap$browser$asset_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48523 = arguments.length;
var i__4731__auto___48524 = (0);
while(true){
if((i__4731__auto___48524 < len__4730__auto___48523)){
args__4736__auto__.push((arguments[i__4731__auto___48524]));

var G__48525 = (i__4731__auto___48524 + (1));
i__4731__auto___48524 = G__48525;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts)),args);
});

shadow.cljs.bootstrap.browser.asset_path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.cljs.bootstrap.browser.asset_path.cljs$lang$applyTo = (function (seq48478){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48478));
});

shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_ = (function shadow$cljs$bootstrap$browser$compile_state_ref_QMARK_(x){
return (((x instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(x))));
});
shadow.cljs.bootstrap.browser.transit_read = (function shadow$cljs$bootstrap$browser$transit_read(txt){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(r,txt);
});
shadow.cljs.bootstrap.browser.transit_load = (function shadow$cljs$bootstrap$browser$transit_load(path,callback){
var G__48481 = path;
var G__48482 = ((function (G__48481){
return (function (res){
var req = this;
if(cljs.core.not(req.isSuccess())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed to download boostrap file:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," status:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(req.getStatus())].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null));
} else {
var data = shadow.cljs.bootstrap.browser.transit_read(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(data) : callback.call(null,data));
}
});})(G__48481))
;
return goog.net.XhrIo.send(G__48481,G__48482);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.bootstrap.browser.script_eval = (function shadow$cljs$bootstrap$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.bootstrap.browser.execute_load_BANG_ = (function shadow$cljs$bootstrap$browser$execute_load_BANG_(compile_state_ref,p__48484){
var map__48485 = p__48484;
var map__48485__$1 = (((((!((map__48485 == null))))?(((((map__48485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48485):map__48485);
var load_info = map__48485__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var temp__5720__auto___48528 = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts));
if(cljs.core.truth_(temp__5720__auto___48528)){
var load_fn_48529 = temp__5720__auto___48528;
(load_fn_48529.cljs$core$IFn$_invoke$arity$1 ? load_fn_48529.cljs$core$IFn$_invoke$arity$1(load_info) : load_fn_48529.call(null,load_info));
} else {
}

var G__48487 = type;
var G__48487__$1 = (((G__48487 instanceof cljs.core.Keyword))?G__48487.fqn:null);
switch (G__48487__$1) {
case "analyzer":
var data = shadow.cljs.bootstrap.browser.transit_read(text);
return cljs.js.load_analysis_cache_BANG_(compile_state_ref,ns,data);

break;
case "js":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,provides);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,provides);

var js = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"\n"].join('');
return shadow.cljs.bootstrap.browser.script_eval(js);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48487__$1)].join('')));

}
});
shadow.cljs.bootstrap.browser.queue_task_BANG_ = (function shadow$cljs$bootstrap$browser$queue_task_BANG_(task){
return goog.async.run(task);
});
/**
 * loads a set of namespaces, must be called after init
 */
shadow.cljs.bootstrap.browser.load_namespaces = (function shadow$cljs$bootstrap$browser$load_namespaces(compile_state_ref,namespaces,cb){




var deps_to_load_for_ns = shadow.cljs.bootstrap.env.find_deps(namespaces);
var macro_deps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns){
return (function (p1__48489_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48489_SHARP_),"$macros"].join(''));
});})(deps_to_load_for_ns))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro-requires","macro-requires",-798347981),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns){
return (function (p1__48488_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48488_SHARP_));
});})(deps_to_load_for_ns))
,deps_to_load_for_ns)))));
var deps_to_load_with_macros = shadow.cljs.bootstrap.env.find_deps(clojure.set.union.cljs$core$IFn$_invoke$arity$2(namespaces,macro_deps));
var compile_state = cljs.core.deref(compile_state_ref);
var things_already_loaded = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provides","provides",-1634397992),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state){
return (function (p1__48490_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__48490_SHARP_));
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state))
,deps_to_load_with_macros)));
var js_files_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded){
return (function (p__48496){
var map__48497 = p__48496;
var map__48497__$1 = (((((!((map__48497 == null))))?(((((map__48497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48497):map__48497);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48497__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48497__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48497__$1,new cljs.core.Keyword(null,"js-name","js-name",-1555671279));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"provides","provides",-1634397992),provides,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_name], 0))], null);
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded){
return (function (p1__48491_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__48491_SHARP_));
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded))
,deps_to_load_with_macros));
var analyzer_data_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load){
return (function (p__48499){
var map__48500 = p__48499;
var map__48500__$1 = (((((!((map__48500 == null))))?(((((map__48500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48500):map__48500);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48500__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ana_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48500__$1,new cljs.core.Keyword(null,"ana-name","ana-name",-1835677673));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"analyzer","analyzer",2075759383),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ana_name], 0))], null);
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load){
return (function (p1__48493_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compile_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(p1__48493_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177)], null)) == null);
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load){
return (function (p1__48492_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48492_SHARP_));
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load))
,deps_to_load_with_macros)));
var load_info = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,js_files_to_load),analyzer_data_to_load);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,things_already_loaded);

if(cljs.core.empty_QMARK_(load_info)){
var G__48502 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__48502) : cb.call(null,G__48502));
} else {
var uris = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847)),load_info);
var loader = (new goog.net.BulkLoader(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(uris)));
loader.listen(goog.net.EventType.SUCCESS,((function (uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (e){
var texts = loader.getResponseTexts();
var seq__48503_48562 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (p1__48494_SHARP_,p2__48495_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48494_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p2__48495_SHARP_);
});})(texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
,load_info,texts));
var chunk__48504_48563 = null;
var count__48505_48564 = (0);
var i__48506_48565 = (0);
while(true){
if((i__48506_48565 < count__48505_48564)){
var load_48566 = chunk__48504_48563.cljs$core$IIndexed$_nth$arity$2(null,i__48506_48565);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__48503_48562,chunk__48504_48563,count__48505_48564,i__48506_48565,load_48566,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_48566);
});})(seq__48503_48562,chunk__48504_48563,count__48505_48564,i__48506_48565,load_48566,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__48568 = seq__48503_48562;
var G__48569 = chunk__48504_48563;
var G__48570 = count__48505_48564;
var G__48571 = (i__48506_48565 + (1));
seq__48503_48562 = G__48568;
chunk__48504_48563 = G__48569;
count__48505_48564 = G__48570;
i__48506_48565 = G__48571;
continue;
} else {
var temp__5720__auto___48572 = cljs.core.seq(seq__48503_48562);
if(temp__5720__auto___48572){
var seq__48503_48574__$1 = temp__5720__auto___48572;
if(cljs.core.chunked_seq_QMARK_(seq__48503_48574__$1)){
var c__4550__auto___48575 = cljs.core.chunk_first(seq__48503_48574__$1);
var G__48576 = cljs.core.chunk_rest(seq__48503_48574__$1);
var G__48577 = c__4550__auto___48575;
var G__48578 = cljs.core.count(c__4550__auto___48575);
var G__48579 = (0);
seq__48503_48562 = G__48576;
chunk__48504_48563 = G__48577;
count__48505_48564 = G__48578;
i__48506_48565 = G__48579;
continue;
} else {
var load_48583 = cljs.core.first(seq__48503_48574__$1);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__48503_48562,chunk__48504_48563,count__48505_48564,i__48506_48565,load_48583,seq__48503_48574__$1,temp__5720__auto___48572,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_48583);
});})(seq__48503_48562,chunk__48504_48563,count__48505_48564,i__48506_48565,load_48583,seq__48503_48574__$1,temp__5720__auto___48572,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__48584 = cljs.core.next(seq__48503_48574__$1);
var G__48585 = null;
var G__48586 = (0);
var G__48587 = (0);
seq__48503_48562 = G__48584;
chunk__48504_48563 = G__48585;
count__48505_48564 = G__48586;
i__48506_48565 = G__48587;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
var G__48509 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__48509) : cb.call(null,G__48509));
});})(texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);
});})(uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);

return loader.load();
}
});
/**
 * :load fn for cljs.js, must be passed the compile-state as first arg
 * eg. :load (partial boot/load compile-state-ref)
 */
shadow.cljs.bootstrap.browser.load = (function shadow$cljs$bootstrap$browser$load(compile_state_ref,p__48510,cb){
var map__48511 = p__48510;
var map__48511__$1 = (((((!((map__48511 == null))))?(((((map__48511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48511):map__48511);
var rc = map__48511__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511__$1,new cljs.core.Keyword(null,"macros","macros",811339431));



var ns = (cljs.core.truth_(macros)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"$macros"].join('')):name);
var or__4131__auto___48589 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(compile_state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
if(cljs.core.truth_(or__4131__auto___48589)){
} else {
shadow.cljs.bootstrap.env.get_ns_info(ns);
}

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cb);
});
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_ = (function shadow$cljs$bootstrap$browser$fix_provide_conflict_BANG_(){
return delete cljs["core$macros"];
});
/**
 * initializes the bootstrapped compiler by loading the dependency index
 * and loading cljs.core + macros (and namespaces specified in :load-on-init)
 */
shadow.cljs.bootstrap.browser.init = (function shadow$cljs$bootstrap$browser$init(compile_state_ref,p__48516,init_cb){
var map__48517 = p__48516;
var map__48517__$1 = (((((!((map__48517 == null))))?(((((map__48517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48517):map__48517);
var opts = map__48517__$1;
var load_on_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48517__$1,new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877));




cljs.core.reset_BANG_(shadow.cljs.bootstrap.browser.init_opts,opts);

if(cljs.core.truth_(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref))){
return (init_cb.cljs$core$IFn$_invoke$arity$0 ? init_cb.cljs$core$IFn$_invoke$arity$0() : init_cb.call(null));
} else {
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_();

return shadow.cljs.bootstrap.browser.transit_load(shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/index.transit.json"], 0)),((function (map__48517,map__48517__$1,opts,load_on_init){
return (function (data){
var map__48520_48597 = shadow.cljs.bootstrap.env.build_index(data);
var map__48520_48598__$1 = (((((!((map__48520_48597 == null))))?(((((map__48520_48597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48520_48597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48520_48597):map__48520_48597);
var idx_48599 = map__48520_48598__$1;
var exclude_48600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48520_48598__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__48520_48597,map__48520_48598__$1,idx_48599,exclude_48600,map__48517,map__48517__$1,opts,load_on_init){
return (function (p1__48513_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48513_SHARP_),"$macros"].join(''));
});})(map__48520_48597,map__48520_48598__$1,idx_48599,exclude_48600,map__48517,map__48517__$1,opts,load_on_init))
),exclude_48600));

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null),load_on_init),init_cb);
});})(map__48517,map__48517__$1,opts,load_on_init))
);
}
});
