goog.provide('shadow.cljs.bootstrap.env');
goog.require('cljs.core');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.env !== 'undefined') && (typeof shadow.cljs.bootstrap.env.loaded_ref !== 'undefined')){
} else {
shadow.cljs.bootstrap.env.loaded_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.bootstrap.env.set_loaded = (function shadow$cljs$bootstrap$env$set_loaded(namespaces){
var loaded = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),namespaces);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,loaded);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.env !== 'undefined') && (typeof shadow.cljs.bootstrap.env.index_ref !== 'undefined')){
} else {
shadow.cljs.bootstrap.env.index_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.bootstrap.env.build_index = (function shadow$cljs$bootstrap$env$build_index(p__58652){
var map__58653 = p__58652;
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var data = map__58653__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__58653,map__58653__$1,data,sources,exclude){
return (function (idx,p__58660){
var map__58661 = p__58660;
var map__58661__$1 = (((((!((map__58661 == null))))?(((((map__58661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58661):map__58661);
var rc = map__58661__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return cljs.core.assoc_in(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),resource_id], null),rc);
});})(map__58653,map__58653__$1,data,sources,exclude))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146),sources,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),exclude], null),sources);
var idx__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (idx,map__58653,map__58653__$1,data,sources,exclude){
return (function (idx__$1,p__58669){
var vec__58674 = p__58669;
var provide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58674,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58674,(1),null);
return cljs.core.assoc_in(idx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),provide], null),resource_id);
});})(idx,map__58653,map__58653__$1,data,sources,exclude))
,idx,(function (){var iter__4523__auto__ = ((function (idx,map__58653,map__58653__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__58677(s__58678){
return (new cljs.core.LazySeq(null,((function (idx,map__58653,map__58653__$1,data,sources,exclude){
return (function (){
var s__58678__$1 = s__58678;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58678__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__58713 = cljs.core.first(xs__6277__auto__);
var map__58713__$1 = (((((!((map__58713 == null))))?(((((map__58713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58713):map__58713);
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var iterys__4519__auto__ = ((function (s__58678__$1,map__58713,map__58713__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__58653,map__58653__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__58677_$_iter__58679(s__58680){
return (new cljs.core.LazySeq(null,((function (s__58678__$1,map__58713,map__58713__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__58653,map__58653__$1,data,sources,exclude){
return (function (){
var s__58680__$1 = s__58680;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58680__$1);
if(temp__5720__auto____$1){
var s__58680__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58680__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58680__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58682 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58681 = (0);
while(true){
if((i__58681 < size__4522__auto__)){
var provide = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58681);
cljs.core.chunk_append(b__58682,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null));

var G__58847 = (i__58681 + (1));
i__58681 = G__58847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),shadow$cljs$bootstrap$env$build_index_$_iter__58677_$_iter__58679(cljs.core.chunk_rest(s__58680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),null);
}
} else {
var provide = cljs.core.first(s__58680__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null),shadow$cljs$bootstrap$env$build_index_$_iter__58677_$_iter__58679(cljs.core.rest(s__58680__$2)));
}
} else {
return null;
}
break;
}
});})(s__58678__$1,map__58713,map__58713__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__58653,map__58653__$1,data,sources,exclude))
,null,null));
});})(s__58678__$1,map__58713,map__58713__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__58653,map__58653__$1,data,sources,exclude))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(provides));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$bootstrap$env$build_index_$_iter__58677(cljs.core.rest(s__58678__$1)));
} else {
var G__58853 = cljs.core.rest(s__58678__$1);
s__58678__$1 = G__58853;
continue;
}
} else {
return null;
}
break;
}
});})(idx,map__58653,map__58653__$1,data,sources,exclude))
,null,null));
});})(idx,map__58653,map__58653__$1,data,sources,exclude))
;
return iter__4523__auto__(sources);
})());
cljs.core.reset_BANG_(shadow.cljs.bootstrap.env.index_ref,idx__$1);

return idx__$1;
});
shadow.cljs.bootstrap.env.get_ns_info = (function shadow$cljs$bootstrap$env$get_ns_info(ns){
var idx = cljs.core.deref(shadow.cljs.bootstrap.env.index_ref);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),ns], null));
var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),id], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["ns ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not available"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}
});
shadow.cljs.bootstrap.env.find_deps = (function shadow$cljs$bootstrap$env$find_deps(entries){
if(cljs.core.set_QMARK_(entries)){
} else {
throw (new Error("Assert failed: (set? entries)"));
}

if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,entries)){
} else {
throw (new Error("Assert failed: (every? symbol? entries)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__58784,p__58785){
var map__58786 = p__58784;
var map__58786__$1 = (((((!((map__58786 == null))))?(((((map__58786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58786):map__58786);
var x = map__58786__$1;
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58786__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58786__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var map__58787 = p__58785;
var map__58787__$1 = (((((!((map__58787 == null))))?(((((map__58787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58787):map__58787);
var src = map__58787__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
if(cljs.core.not(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(deps,provides)))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),clojure.set.union.cljs$core$IFn$_invoke$arity$2(deps,requires),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,src)], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),entries,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY], null),cljs.core.reverse(new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref)))))));
});

//# sourceMappingURL=shadow.cljs.bootstrap.env.js.map
