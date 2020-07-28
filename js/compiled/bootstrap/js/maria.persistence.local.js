goog.provide('maria.persistence.local');
goog.require('cljs.core');
goog.require('chia.db');
goog.require('chia.reactive');
goog.require('maria.persistence.transit');
goog.require('goog.functions');
goog.require('applied_science.js_interop');
maria.persistence.local.local_id = (function maria$persistence$local$local_id(id){
return ["maria.local/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
});
maria.persistence.local.local_get = (function maria$persistence$local$local_get(id){
var G__67341 = (function (){var obj67344 = (function (){var obj67342 = window;
var k67343 = "localStorage";
if((function (){var obj67346 = obj67342;
return (((!((obj67346 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k67343,obj67346)));
})()){
return (obj67342[k67343]);
} else {
return undefined;
}
})();
var k67345 = maria.persistence.local.local_id(id);
if((function (){var obj67348 = obj67344;
return (((!((obj67348 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k67345,obj67348)));
})()){
return (obj67344[k67345]);
} else {
return undefined;
}
})();
if((G__67341 == null)){
return null;
} else {
return maria.persistence.transit.deserialize(G__67341);
}
});
maria.persistence.local.local_put_BANG_ = (function maria$persistence$local$local_put_BANG_(id,data){
var obj67352 = window.localStorage;
var obj67353 = (((!((obj67352 == null))))?obj67352:({}));
(obj67353[maria.persistence.local.local_id(id)] = maria.persistence.transit.serialize(data));

return obj67353;
});
maria.persistence.local.local_update_BANG_ = (function maria$persistence$local$local_update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67386 = arguments.length;
var i__4731__auto___67387 = (0);
while(true){
if((i__4731__auto___67387 < len__4730__auto___67386)){
args__4736__auto__.push((arguments[i__4731__auto___67387]));

var G__67388 = (i__4731__auto___67387 + (1));
i__4731__auto___67387 = G__67388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return maria.persistence.local.local_update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

maria.persistence.local.local_update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,f,args){
return maria.persistence.local.local_put_BANG_(id,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,maria.persistence.local.local_get(id),args));
});

maria.persistence.local.local_update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
maria.persistence.local.local_update_BANG_.cljs$lang$applyTo = (function (seq67361){
var G__67362 = cljs.core.first(seq67361);
var seq67361__$1 = cljs.core.next(seq67361);
var G__67363 = cljs.core.first(seq67361__$1);
var seq67361__$2 = cljs.core.next(seq67361__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67362,G__67363,seq67361__$2);
});

/**
 * Given a unique id, initialize a local-storage backed source
 */
maria.persistence.local.init_storage = cljs.core.memoize((function() {
var G__67390 = null;
var G__67390__1 = (function (id){
var G__67371_67391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"local","local",-1497766724),maria.persistence.local.local_get(id),new cljs.core.Keyword("db","id","db/id",-1388397098),id], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__67371_67391) : chia.db.transact_BANG_.call(null,G__67371_67391));

var G__67372 = (function (){var G__67374 = (function (){
return maria.persistence.local.local_put_BANG_(id,(function (){var G__67376 = id;
var G__67377 = new cljs.core.Keyword(null,"local","local",-1497766724);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__67376,G__67377) : chia.db.get.call(null,G__67376,G__67377));
})());
});
var G__67375 = (300);
return goog.functions.throttle(G__67374,G__67375);
})();
var G__67373 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"local","local",-1497766724)], null)], null)], null);
return (chia.db.listen.cljs$core$IFn$_invoke$arity$2 ? chia.db.listen.cljs$core$IFn$_invoke$arity$2(G__67372,G__67373) : chia.db.listen.call(null,G__67372,G__67373));
});
var G__67390__2 = (function (id,initial_content){
if(cljs.core.truth_((function (){var and__4120__auto__ = (maria.persistence.local.local_get(id) == null);
if(and__4120__auto__){
return initial_content;
} else {
return and__4120__auto__;
}
})())){
maria.persistence.local.local_put_BANG_(id,initial_content);
} else {
}

return (maria.persistence.local.init_storage.cljs$core$IFn$_invoke$arity$1 ? maria.persistence.local.init_storage.cljs$core$IFn$_invoke$arity$1(id) : maria.persistence.local.init_storage.call(null,id));
});
G__67390 = function(id,initial_content){
switch(arguments.length){
case 1:
return G__67390__1.call(this,id);
case 2:
return G__67390__2.call(this,id,initial_content);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67390.cljs$core$IFn$_invoke$arity$1 = G__67390__1;
G__67390.cljs$core$IFn$_invoke$arity$2 = G__67390__2;
return G__67390;
})()
);

//# sourceMappingURL=maria.persistence.local.js.map