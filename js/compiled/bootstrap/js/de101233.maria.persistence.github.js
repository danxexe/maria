goog.provide('maria.persistence.github');
var G__51163_51313 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc.owner","username","doc.owner/username",-1637915923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null)], null);
(chia.db.merge_schema_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.merge_schema_BANG_.cljs$core$IFn$_invoke$arity$1(G__51163_51313) : chia.db.merge_schema_BANG_.call(null,G__51163_51313));
maria.persistence.github.send = (function maria$persistence$github$send(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51315 = arguments.length;
var i__4731__auto___51316 = (0);
while(true){
if((i__4731__auto___51316 < len__4730__auto___51315)){
args__4736__auto__.push((arguments[i__4731__auto___51316]));

var G__51317 = (i__4731__auto___51316 + (1));
i__4731__auto___51316 = G__51317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic = (function (url,cb,args){
var G__51167_51318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("remote","status","remote/status",2067360937),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51167_51318) : chia.db.transact_BANG_.call(null,G__51167_51318));

return goog.net.XhrIo.send.apply(null,cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?ts=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())].join(''),(function (e){
var G__51176_51322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("remote","status","remote/status",2067360937),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.dec], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51176_51322) : chia.db.transact_BANG_.call(null,G__51176_51322));

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(e) : cb.call(null,e));
})], null),args)),args);
});

maria.persistence.github.send.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
maria.persistence.github.send.cljs$lang$applyTo = (function (seq51164){
var G__51165 = cljs.core.first(seq51164);
var seq51164__$1 = cljs.core.next(seq51164);
var G__51166 = cljs.core.first(seq51164__$1);
var seq51164__$2 = cljs.core.next(seq51164__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51165,G__51166,seq51164__$2);
});

maria.persistence.github.gist_person = (function maria$persistence$github$gist_person(p__51177){
var map__51178 = p__51177;
var map__51178__$1 = (((((!((map__51178 == null))))?(((((map__51178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51178):map__51178);
var person = map__51178__$1;
var html_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"html_url","html_url",-1914714112));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"url","url",276297046));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var login = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"login","login",55217519));
var gists_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"gists_url","gists_url",-29752034));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),login,new cljs.core.Keyword(null,"local-url","local-url",2020238236),["/gists/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(login)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null);
});
/**
 * Convert a gist to local project format
 */
maria.persistence.github.gist__GT_project = (function maria$persistence$github$gist__GT_project(p__51183){
var map__51184 = p__51183;
var map__51184__$1 = (((((!((map__51184 == null))))?(((((map__51184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51184):map__51184);
var gist_data = map__51184__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"updated_at","updated_at",-460224592));
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var html_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"html_url","html_url",-1914714112));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var map__51186 = ((cljs.core.contains_QMARK_(maria.curriculum.by_id,id))?maria.curriculum.owner:maria.persistence.github.gist_person(owner));
var map__51186__$1 = (((((!((map__51186 == null))))?(((((map__51186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51186):map__51186);
var owner__$1 = map__51186__$1;
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var files__$1 = cljs.core.reduce_kv(((function (map__51186,map__51186__$1,owner__$1,username,map__51184,map__51184__$1,gist_data,description,files,updated_at,owner,html_url,id,history){
return (function (m,filename,p__51188){
var map__51189 = p__51188;
var map__51189__$1 = (((((!((map__51189 == null))))?(((((map__51189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51189):map__51189);
var file = map__51189__$1;
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51189__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var G__51191 = m;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(language,"Clojure")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51191,cljs.core.name(filename),cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"truncated","truncated",298102102),new cljs.core.Keyword(null,"content","content",15833224)], null)));
} else {
return G__51191;
}
});})(map__51186,map__51186__$1,owner__$1,username,map__51184,map__51184__$1,gist_data,description,files,updated_at,owner,html_url,id,history))
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
maria.persistence.github.project__GT_gist = (function maria$persistence$github$project__GT_gist(p__51197){
var map__51198 = p__51197;
var map__51198__$1 = (((((!((map__51198 == null))))?(((((map__51198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51198):map__51198);
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var G__51200 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.reduce_kv(((function (map__51198,map__51198__$1,files,description){
return (function (m,filename,file){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,filename,cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"content","content",15833224)], null)));
});})(map__51198,map__51198__$1,files,description))
,cljs.core.PersistentArrayMap.EMPTY,files)], null);
if(cljs.core.truth_(description)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51200,new cljs.core.Keyword(null,"description","description",-1428560544),description);
} else {
return G__51200;
}
});
maria.persistence.github.get_gist = (function maria$persistence$github$get_gist(id,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/gists/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__51207 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),maria.persistence.github.gist__GT_project(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51207) : cb.call(null,G__51207));
} else {
var G__51208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51208) : cb.call(null,G__51208));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET",null,maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.get_url = (function maria$persistence$github$get_url(url,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(url,(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__51211 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),target.getResponseText()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51211) : cb.call(null,G__51211));
} else {
var G__51212 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51212) : cb.call(null,G__51212));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET"], 0));
});
maria.persistence.github.load_gist = (function maria$persistence$github$load_gist(id){
if(cljs.core.truth_((function (){var G__51216 = id;
var G__51217 = new cljs.core.Keyword(null,"persisted","persisted",-900171345);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__51216,G__51217) : chia.db.get.call(null,G__51216,G__51217));
})())){
} else {
var G__51221_51349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),"Loading gist..."], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51221_51349) : chia.db.transact_BANG_.call(null,G__51221_51349));
}

return maria.persistence.github.get_gist(id,(function (p__51222){
var map__51224 = p__51222;
var map__51224__$1 = (((((!((map__51224 == null))))?(((((map__51224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51224):map__51224);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51224__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51224__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__51227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),false], null),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persisted-error","persisted-error",637353433),error], null);
}
})()], 0))], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51227) : chia.db.transact_BANG_.call(null,G__51227));
}));
});
maria.persistence.github.load_url_text = (function maria$persistence$github$load_url_text(url){
var id = encodeURIComponent(url);
if(cljs.core.truth_((function (){var G__51233 = id;
var G__51234 = new cljs.core.Keyword(null,"persisted","persisted",-900171345);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__51233,G__51234) : chia.db.get.call(null,G__51233,G__51234));
})())){
} else {
var G__51236_51352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),"Loading..."], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51236_51352) : chia.db.transact_BANG_.call(null,G__51236_51352));
}

return maria.persistence.github.get_url(url,((function (id){
return (function (p__51240){
var map__51241 = p__51240;
var map__51241__$1 = (((((!((map__51241 == null))))?(((((map__51241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51241):map__51241);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var filename = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\//));
var G__51244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),false], null),(function (){var or__4131__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persisted","persisted",-900171345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentArrayMap.createAsIfByAssoc([filename,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),value], null)]),new cljs.core.Keyword("persistence","provider","persistence/provider",1461796573),new cljs.core.Keyword(null,"http-text","http-text",-371186005)], null)], null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persisted-error","persisted-error",637353433),error], null);
}
})()], 0))], null);
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51244) : chia.db.transact_BANG_.call(null,G__51244));
});})(id))
);
});
maria.persistence.github.get_user_gists = (function maria$persistence$github$get_user_gists(username,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),"/gists"].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__51245 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(maria.persistence.github.gist__GT_project,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51245) : cb.call(null,G__51245));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET",null,maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.load_user_gists = (function maria$persistence$github$load_user_gists(username){
var G__51248 = username;
switch (G__51248) {
case "curriculum":
return null;

break;
default:
if(cljs.core.truth_((function (){var G__51249 = username;
var G__51250 = new cljs.core.Keyword(null,"gists","gists",-1339731384);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__51249,G__51250) : chia.db.get.call(null,G__51249,G__51250));
})())){
return null;
} else {
var G__51253_51367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),username,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),"Loading gists..."], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51253_51367) : chia.db.transact_BANG_.call(null,G__51253_51367));

return maria.persistence.github.get_user_gists(username,((function (G__51248){
return (function (p__51254){
var map__51256 = p__51254;
var map__51256__$1 = (((((!((map__51256 == null))))?(((((map__51256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51256):map__51256);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51256__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51256__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__51259 = (cljs.core.truth_(value)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),username,new cljs.core.Keyword(null,"gists","gists",-1339731384),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),username,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),false], null)], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null));
return (chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51259) : chia.db.transact_BANG_.call(null,G__51259));
});})(G__51248))
);
}

}
});
maria.persistence.github.patch_gist = (function maria$persistence$github$patch_gist(gist_id,gist_data,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/gists/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__51272 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),maria.persistence.github.gist__GT_project(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51272) : cb.call(null,G__51272));
} else {
var G__51273 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51273) : cb.call(null,G__51273));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PATCH",JSON.stringify(cljs.core.clj__GT_js(gist_data)),maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.create_gist = (function maria$persistence$github$create_gist(gist_data,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic("https://api.github.com/gists",(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__51286 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),maria.persistence.github.gist__GT_project(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target.getResponseJson(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51286) : cb.call(null,G__51286));
} else {
var G__51293 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51293) : cb.call(null,G__51293));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["POST",JSON.stringify(cljs.core.clj__GT_js(gist_data)),maria.persistence.tokens.auth_headers("github.com")], 0));
});
maria.persistence.github.get_username = (function maria$persistence$github$get_username(id,cb){
return maria.persistence.github.send.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/user/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(function (e){
var target = e.target;
if(cljs.core.truth_(target.isSuccess())){
var G__51301 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var obj51303 = target.getResponseJson();
var k51304 = "login";
if((function (){var obj51305 = obj51303;
return (((!((obj51305 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51304,obj51305)));
})()){
return (obj51303[k51304]);
} else {
return undefined;
}
})()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51301) : cb.call(null,G__51301));
} else {
var G__51309 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),target.getLastError()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__51309) : cb.call(null,G__51309));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GET",null,maria.persistence.tokens.auth_headers("github.com")], 0));
});
