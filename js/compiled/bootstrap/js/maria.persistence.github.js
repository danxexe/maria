goog.provide('maria.persistence.github');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('maria.persistence.tokens');
goog.require('chia.db');
goog.require('maria.curriculum');
goog.require('clojure.string');
goog.require('applied_science.js_interop');
var G__67448_67597 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc.owner","username","doc.owner/username",-1637915923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null)], null);
(chia.db.merge_schema_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.merge_schema_BANG_.cljs$core$IFn$_invoke$arity$1(G__67448_67597) : chia.db.merge_schema_BANG_.call(null,G__67448_67597));
maria.persistence.github.send = (function maria$persistence$github$send(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67598 = arguments.length;
var i__4731__auto___67599 = (0);
while(true){
if((i__4731__auto___67599 < len__4730__auto___67598)){
args__4736__auto__.push((arguments[i__4731__auto___67599]));

var G__67600 = (i__4731__auto___67599 + (1));
i__4731__auto___67599 = G__67600;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic = (function (url,cb,args){
var G__67465_67602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("remote","status","remote/status",2067360937),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67465_67602) : chia.db.transact_BANG_.call(null,G__67465_67602));

return goog.net.XhrIo.send.apply(null,cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?ts=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())].join(''),(function (e){
var G__67471_67603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("remote","status","remote/status",2067360937),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.dec], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67471_67603) : chia.db.transact_BANG_.call(null,G__67471_67603));

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(e) : cb.call(null,e));
})], null),args)),args);
});

maria.persistence.github.send.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
maria.persistence.github.send.cljs$lang$applyTo = (function (seq67450){
var G__67451 = cljs.core.first(seq67450);
var seq67450__$1 = cljs.core.next(seq67450);
var G__67452 = cljs.core.first(seq67450__$1);
var seq67450__$2 = cljs.core.next(seq67450__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67451,G__67452,seq67450__$2);
});

maria.persistence.github.gist_person = (function maria$persistence$github$gist_person(p__67473){
var map__67474 = p__67473;
var map__67474__$1 = (((((!((map__67474 == null))))?(((((map__67474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67474):map__67474);
var person = map__67474__$1;
var html_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67474__$1,new cljs.core.Keyword(null,"html_url","html_url",-1914714112));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67474__$1,new cljs.core.Keyword(null,"url","url",276297046));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67474__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var login = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67474__$1,new cljs.core.Keyword(null,"login","login",55217519));
var gists_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67474__$1,new cljs.core.Keyword(null,"gists_url","gists_url",-29752034));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),login,new cljs.core.Keyword(null,"local-url","local-url",2020238236),["/gists/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(login)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null);
});
/**
 * Convert a gist to local project format
 */
maria.persistence.github.gist__GT_project = (function maria$persistence$github$gist__GT_project(p__67483){
var map__67484 = p__67483;
var map__67484__$1 = (((((!((map__67484 == null))))?(((((map__67484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67484):map__67484);
var gist_data = map__67484__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"updated_at","updated_at",-460224592));
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var html_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"html_url","html_url",-1914714112));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var map__67486 = ((cljs.core.contains_QMARK_(maria.curriculum.by_id,id))?maria.curriculum.owner:maria.persistence.github.gist_person(owner));
var map__67486__$1 = (((((!((map__67486 == null))))?(((((map__67486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67486):map__67486);
var owner__$1 = map__67486__$1;
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67486__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var files__$1 = cljs.core.reduce_kv(((function (map__67486,map__67486__$1,owner__$1,username,map__67484,map__67484__$1,gist_data,description,files,updated_at,owner,html_url,id,history){
return (function (m,filename,p__67488){
var map__67489 = p__67488;
var map__67489__$1 = (((((!((map__67489 == null))))?(((((map__67489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67489):map__67489);
var file = map__67489__$1;
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67489__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var G__67496 = m;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(language,"Clojure")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67496,cljs.core.name(filename),cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"truncated","truncated",298102102),new cljs.core.Keyword(null,"content","content",15833224)], null)));
} else {
return G__67496;
}
});})(map__67486,map__67486__$1,owner__$1,username,map__67484,map__67484__$1,gist_data,description,files,updated_at,owner,html_url,id,history))
,cljs.core.PersistentArrayMap.EMPTY,files);
if(cljs.core.seq(files__$1)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),updated_at,new cljs.core.Keyword("doc.owner","username","doc.owner/username",-1637915923),username,new cljs.core.Keyword(null,"persisted","persisted",-900171345),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.first(history)),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"owner","owner",-392611939),owner__$1,new cljs.core.Keyword(null,"remote-url","remote-url",-1870730173),html_url,new cljs.core.Keyword("persistence","provider","persistence/provider",1461796573),new cljs.core.Keyword(null,"gist","gist",96143031),new cljs.core.Keyword(null,"files","files",-472457450),files__$1], null)], null);
} else {
return null;
}
});
/**
 * Convert a project to gist format, for persistence
 */
maria.persistence.github.project__GT_gist = (function maria$persistence$github$project__GT_gist(p__67499){
var map__67500 = p__67499;
var map__67500__$1 = (((((!((map__67500 == null))))?(((((map__67500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67500):map__67500);
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67500__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67500__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var G__67508 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.reduce_kv(((function (map__67500,map__67500__$1,files,description){
return (function (m,filename,file){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,filename,cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"content","content",15833224)], null)));
});})(map__67500,map__67500__$1,files,description))
,cljs.core.PersistentArrayMap.EMPTY,files)], null);
if(cljs.core.truth_(description)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67508,new cljs.core.Keyword(null,"description","description",-1428560544),description);
} else {
return G__67508;
}
});
maria.persistence.github.get_gist = (function maria$persistence$github$get_gist(id,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/gists/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__67512 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),maria.persistence.github.gist__GT_project(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67512) : cb.call(null,G__67512));
} else {
var G__67514 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67514) : cb.call(null,G__67514));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET",null,maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.get_url = (function maria$persistence$github$get_url(url,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(url,(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__67520 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),target.getResponseText()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67520) : cb.call(null,G__67520));
} else {
var G__67521 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67521) : cb.call(null,G__67521));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET"], 0));
});
maria.persistence.github.load_gist = (function maria$persistence$github$load_gist(id){
if(cljs.core.truth_((function (){var G__67525 = id;
var G__67526 = new cljs.core.Keyword(null,"persisted","persisted",-900171345);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__67525,G__67526) : chia.db.get.call(null,G__67525,G__67526));
})())){
} else {
var G__67527_67636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),"Loading gist..."], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67527_67636) : chia.db.transact_BANG_.call(null,G__67527_67636));
}

return maria.persistence.github.get_gist(id,(function (p__67529){
var map__67530 = p__67529;
var map__67530__$1 = (((((!((map__67530 == null))))?(((((map__67530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67530):map__67530);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67530__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67530__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__67532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),false], null),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persisted-error","persisted-error",637353433),error], null);
}
})()], 0))], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67532) : chia.db.transact_BANG_.call(null,G__67532));
}));
});
maria.persistence.github.load_url_text = (function maria$persistence$github$load_url_text(url){
var id = encodeURIComponent(url);
if(cljs.core.truth_((function (){var G__67540 = id;
var G__67541 = new cljs.core.Keyword(null,"persisted","persisted",-900171345);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__67540,G__67541) : chia.db.get.call(null,G__67540,G__67541));
})())){
} else {
var G__67542_67638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),"Loading..."], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67542_67638) : chia.db.transact_BANG_.call(null,G__67542_67638));
}

return maria.persistence.github.get_url(url,((function (id){
return (function (p__67545){
var map__67546 = p__67545;
var map__67546__$1 = (((((!((map__67546 == null))))?(((((map__67546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67546):map__67546);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67546__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67546__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var filename = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\//));
var G__67549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),false], null),(function (){var or__4131__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persisted","persisted",-900171345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentArrayMap.createAsIfByAssoc([filename,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),value], null)]),new cljs.core.Keyword("persistence","provider","persistence/provider",1461796573),new cljs.core.Keyword(null,"http-text","http-text",-371186005)], null)], null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persisted-error","persisted-error",637353433),error], null);
}
})()], 0))], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67549) : chia.db.transact_BANG_.call(null,G__67549));
});})(id))
);
});
maria.persistence.github.get_user_gists = (function maria$persistence$github$get_user_gists(username,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),"/gists"].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__67557 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(maria.persistence.github.gist__GT_project,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67557) : cb.call(null,G__67557));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET",null,maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.load_user_gists = (function maria$persistence$github$load_user_gists(username){
var G__67559 = username;
switch (G__67559) {
case "curriculum":
return null;

break;
default:
if(cljs.core.truth_((function (){var G__67561 = username;
var G__67562 = new cljs.core.Keyword(null,"gists","gists",-1339731384);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__67561,G__67562) : chia.db.get.call(null,G__67561,G__67562));
})())){
return null;
} else {
var G__67564_67643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),username,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),"Loading gists..."], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67564_67643) : chia.db.transact_BANG_.call(null,G__67564_67643));

return maria.persistence.github.get_user_gists(username,((function (G__67559){
return (function (p__67567){
var map__67568 = p__67567;
var map__67568__$1 = (((((!((map__67568 == null))))?(((((map__67568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67568):map__67568);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67568__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67568__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__67573 = (cljs.core.truth_(value)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),username,new cljs.core.Keyword(null,"gists","gists",-1339731384),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),username,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),false], null)], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null));
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67573) : chia.db.transact_BANG_.call(null,G__67573));
});})(G__67559))
);
}

}
});
maria.persistence.github.patch_gist = (function maria$persistence$github$patch_gist(gist_id,gist_data,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/gists/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__67579 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),maria.persistence.github.gist__GT_project(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67579) : cb.call(null,G__67579));
} else {
var G__67580 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67580) : cb.call(null,G__67580));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PATCH",JSON.stringify(cljs.core.clj__GT_js(gist_data)),maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.create_gist = (function maria$persistence$github$create_gist(gist_data,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic("https://api.github.com/gists",(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__67584 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),maria.persistence.github.gist__GT_project(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67584) : cb.call(null,G__67584));
} else {
var G__67585 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67585) : cb.call(null,G__67585));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["POST",JSON.stringify(cljs.core.clj__GT_js(gist_data)),maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.get_username = (function maria$persistence$github$get_username(id,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/user/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__67587 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var obj67589 = target.getResponseJson();
var k67590 = "login";
if((function (){var obj67593 = obj67589;
return (((!((obj67593 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k67590,obj67593)));
})()){
return (obj67589[k67590]);
} else {
return undefined;
}
})()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67587) : cb.call(null,G__67587));
} else {
var G__67595 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__67595) : cb.call(null,G__67595));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET",null,maria.persistence.tokens.auth_headers("github.com")], 0));
});

//# sourceMappingURL=maria.persistence.github.js.map
