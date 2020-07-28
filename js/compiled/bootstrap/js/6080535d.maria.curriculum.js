goog.provide('maria.curriculum');
maria.curriculum.repo_path = (function maria$curriculum$repo_path(path){
return encodeURIComponent(["https://raw.githubusercontent.com/mhuebert/maria/master/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
maria.curriculum.modules = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["intro","Learn Clojure with Shapes",maria.curriculum.repo_path("curriculum/Learn Clojure with Shapes.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quickstart","Editor Quickstart",maria.curriculum.repo_path("curriculum/Editor Quickstart.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gallery","Example Gallery",maria.curriculum.repo_path("curriculum/Example Gallery.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["animation-quickstart","Animation Quickstart",maria.curriculum.repo_path("curriculum/Animation Quickstart.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["what-if","What if?",maria.curriculum.repo_path("curriculum/What If.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cells","Welcome to Cells",maria.curriculum.repo_path("curriculum/Welcome to Cells.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data-flow","Data Flow",maria.curriculum.repo_path("curriculum/Data Flow.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shannons-entropy","Shannon's Entropy",maria.curriculum.repo_path("curriculum/Shannon's Entropy.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cb-intro","Learn Clojure with Shapes (ClojureBridge)",maria.curriculum.repo_path("curriculum/Learn Clojure with Shapes (ClojureBridge).cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cb-london","London ClojureBridge",encodeURIComponent("https://gist.githubusercontent.com/londonclojurians/9afbc2adf3638f1bcf6a6c08b6f33226/raw/clojurebridge-shapes.cljs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cb-coaches","ClojureBridge Coaches' Copy",maria.curriculum.repo_path("curriculum/ClojureBridge Coaches' Copy.cljs")], null)], null);
maria.curriculum.owner = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"curriculum",new cljs.core.Keyword(null,"local-url","local-url",2020238236),"/curriculum"], null);
maria.curriculum.docs = (function (){var iter__4523__auto__ = (function maria$curriculum$iter__51121(s__51122){
return (new cljs.core.LazySeq(null,(function (){
var s__51122__$1 = s__51122;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51122__$1);
if(temp__5720__auto__){
var s__51122__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51122__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51122__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51124 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51123 = (0);
while(true){
if((i__51123 < size__4522__auto__)){
var vec__51138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51123);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51138,(0),null);
var friendly_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51138,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51138,(2),null);
cljs.core.chunk_append(b__51124,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("doc.owner","username","doc.owner/username",-1637915923),"curriculum",new cljs.core.Keyword(null,"owner","owner",-392611939),maria.curriculum.owner,new cljs.core.Keyword(null,"slug","slug",2029314850),slug,new cljs.core.Keyword("persistence","provider","persistence/provider",1461796573),new cljs.core.Keyword("maria","curriculum","maria/curriculum",-1327391708),new cljs.core.Keyword(null,"persisted","persisted",-900171345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),maria.curriculum.owner,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentArrayMap.createAsIfByAssoc([friendly_name,cljs.core.PersistentArrayMap.EMPTY])], null)], null));

var G__51168 = (i__51123 + (1));
i__51123 = G__51168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51124),maria$curriculum$iter__51121(cljs.core.chunk_rest(s__51122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51124),null);
}
} else {
var vec__51145 = cljs.core.first(s__51122__$2);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51145,(0),null);
var friendly_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51145,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51145,(2),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("doc.owner","username","doc.owner/username",-1637915923),"curriculum",new cljs.core.Keyword(null,"owner","owner",-392611939),maria.curriculum.owner,new cljs.core.Keyword(null,"slug","slug",2029314850),slug,new cljs.core.Keyword("persistence","provider","persistence/provider",1461796573),new cljs.core.Keyword("maria","curriculum","maria/curriculum",-1327391708),new cljs.core.Keyword(null,"persisted","persisted",-900171345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),maria.curriculum.owner,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentArrayMap.createAsIfByAssoc([friendly_name,cljs.core.PersistentArrayMap.EMPTY])], null)], null),maria$curriculum$iter__51121(cljs.core.rest(s__51122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(maria.curriculum.modules);
})();
maria.curriculum.by_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__51149){
var map__51150 = p__51149;
var map__51150__$1 = (((((!((map__51150 == null))))?(((((map__51150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51150):map__51150);
var item = map__51150__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51150__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,item);
}),cljs.core.PersistentArrayMap.EMPTY,maria.curriculum.docs);
maria.curriculum.slugs = cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),maria.curriculum.docs));
