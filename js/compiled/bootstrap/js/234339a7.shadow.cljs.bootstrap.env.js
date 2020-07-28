goog.provide('shadow.cljs.bootstrap.env');
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
shadow.cljs.bootstrap.env.build_index = (function shadow$cljs$bootstrap$env$build_index(p__43417){
var map__43419 = p__43417;
var map__43419__$1 = (((((!((map__43419 == null))))?(((((map__43419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43419):map__43419);
var data = map__43419__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__43419,map__43419__$1,data,sources,exclude){
return (function (idx,p__43426){
var map__43427 = p__43426;
var map__43427__$1 = (((((!((map__43427 == null))))?(((((map__43427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43427):map__43427);
var rc = map__43427__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43427__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return cljs.core.assoc_in(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),resource_id], null),rc);
});})(map__43419,map__43419__$1,data,sources,exclude))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146),sources,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),exclude], null),sources);
var idx__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (idx,map__43419,map__43419__$1,data,sources,exclude){
return (function (idx__$1,p__43438){
var vec__43439 = p__43438;
var provide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43439,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43439,(1),null);
return cljs.core.assoc_in(idx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),provide], null),resource_id);
});})(idx,map__43419,map__43419__$1,data,sources,exclude))
,idx,(function (){var iter__4523__auto__ = ((function (idx,map__43419,map__43419__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__43443(s__43444){
return (new cljs.core.LazySeq(null,((function (idx,map__43419,map__43419__$1,data,sources,exclude){
return (function (){
var s__43444__$1 = s__43444;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43444__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__43450 = cljs.core.first(xs__6277__auto__);
var map__43450__$1 = (((((!((map__43450 == null))))?(((((map__43450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43450):map__43450);
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var iterys__4519__auto__ = ((function (s__43444__$1,map__43450,map__43450__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__43419,map__43419__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__43443_$_iter__43445(s__43446){
return (new cljs.core.LazySeq(null,((function (s__43444__$1,map__43450,map__43450__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__43419,map__43419__$1,data,sources,exclude){
return (function (){
var s__43446__$1 = s__43446;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__43446__$1);
if(temp__5720__auto____$1){
var s__43446__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43446__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43446__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43448 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43447 = (0);
while(true){
if((i__43447 < size__4522__auto__)){
var provide = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43447);
cljs.core.chunk_append(b__43448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null));

var G__43577 = (i__43447 + (1));
i__43447 = G__43577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43448),shadow$cljs$bootstrap$env$build_index_$_iter__43443_$_iter__43445(cljs.core.chunk_rest(s__43446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43448),null);
}
} else {
var provide = cljs.core.first(s__43446__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null),shadow$cljs$bootstrap$env$build_index_$_iter__43443_$_iter__43445(cljs.core.rest(s__43446__$2)));
}
} else {
return null;
}
break;
}
});})(s__43444__$1,map__43450,map__43450__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__43419,map__43419__$1,data,sources,exclude))
,null,null));
});})(s__43444__$1,map__43450,map__43450__$1,resource_id,provides,xs__6277__auto__,temp__5720__auto__,idx,map__43419,map__43419__$1,data,sources,exclude))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(provides));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$bootstrap$env$build_index_$_iter__43443(cljs.core.rest(s__43444__$1)));
} else {
var G__43579 = cljs.core.rest(s__43444__$1);
s__43444__$1 = G__43579;
continue;
}
} else {
return null;
}
break;
}
});})(idx,map__43419,map__43419__$1,data,sources,exclude))
,null,null));
});})(idx,map__43419,map__43419__$1,data,sources,exclude))
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


return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43530,p__43531){
var map__43532 = p__43530;
var map__43532__$1 = (((((!((map__43532 == null))))?(((((map__43532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43532):map__43532);
var x = map__43532__$1;
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43532__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43532__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var map__43533 = p__43531;
var map__43533__$1 = (((((!((map__43533 == null))))?(((((map__43533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43533):map__43533);
var src = map__43533__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43533__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43533__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43533__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43533__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
if(cljs.core.not(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(deps,provides)))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),clojure.set.union.cljs$core$IFn$_invoke$arity$2(deps,requires),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,src)], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),entries,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY], null),cljs.core.reverse(new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref)))))));
});
