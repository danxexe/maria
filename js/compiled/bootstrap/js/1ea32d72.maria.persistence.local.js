goog.provide('maria.persistence.local');
maria.persistence.local.local_id = (function maria$persistence$local$local_id(id){
return ["maria.local/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
});
maria.persistence.local.local_get = (function maria$persistence$local$local_get(id){
var G__51015 = (function (){var obj51018 = (function (){var obj51016 = window;
var k51017 = "localStorage";
if((function (){var obj51020 = obj51016;
return (((!((obj51020 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51017,obj51020)));
})()){
return (obj51016[k51017]);
} else {
return undefined;
}
})();
var k51019 = maria.persistence.local.local_id(id);
if((function (){var obj51021 = obj51018;
return (((!((obj51021 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51019,obj51021)));
})()){
return (obj51018[k51019]);
} else {
return undefined;
}
})();
if((G__51015 == null)){
return null;
} else {
return maria.persistence.transit.deserialize(G__51015);
}
});
maria.persistence.local.local_put_BANG_ = (function maria$persistence$local$local_put_BANG_(id,data){
var obj51022 = window.localStorage;
var obj51023 = (((!((obj51022 == null))))?obj51022:({}));
(obj51023[maria.persistence.local.local_id(id)] = maria.persistence.transit.serialize(data));

return obj51023;
});
maria.persistence.local.local_update_BANG_ = (function maria$persistence$local$local_update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51095 = arguments.length;
var i__4731__auto___51096 = (0);
while(true){
if((i__4731__auto___51096 < len__4730__auto___51095)){
args__4736__auto__.push((arguments[i__4731__auto___51096]));

var G__51101 = (i__4731__auto___51096 + (1));
i__4731__auto___51096 = G__51101;
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
maria.persistence.local.local_update_BANG_.cljs$lang$applyTo = (function (seq51026){
var G__51027 = cljs.core.first(seq51026);
var seq51026__$1 = cljs.core.next(seq51026);
var G__51028 = cljs.core.first(seq51026__$1);
var seq51026__$2 = cljs.core.next(seq51026__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51027,G__51028,seq51026__$2);
});

/**
 * Given a unique id, initialize a local-storage backed source
 */
maria.persistence.local.init_storage = cljs.core.memoize((function() {
var G__51111 = null;
var G__51111__1 = (function (id){
var G__51084_51112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"local","local",-1497766724),maria.persistence.local.local_get(id),new cljs.core.Keyword("db","id","db/id",-1388397098),id], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__51084_51112) : chia.db.transact_BANG_.call(null,G__51084_51112));

var G__51085 = (function (){var G__51087 = (function (){
return maria.persistence.local.local_put_BANG_(id,(function (){var G__51089 = id;
var G__51090 = new cljs.core.Keyword(null,"local","local",-1497766724);
return (chia.db.get.cljs$core$IFn$_invoke$arity$2 ? chia.db.get.cljs$core$IFn$_invoke$arity$2(G__51089,G__51090) : chia.db.get.call(null,G__51089,G__51090));
})());
});
var G__51088 = (300);
return goog.functions.throttle(G__51087,G__51088);
})();
var G__51086 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"local","local",-1497766724)], null)], null)], null);
return (chia.db.listen.cljs$core$IFn$_invoke$arity$2 ? chia.db.listen.cljs$core$IFn$_invoke$arity$2(G__51085,G__51086) : chia.db.listen.call(null,G__51085,G__51086));
});
var G__51111__2 = (function (id,initial_content){
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
G__51111 = function(id,initial_content){
switch(arguments.length){
case 1:
return G__51111__1.call(this,id);
case 2:
return G__51111__2.call(this,id,initial_content);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51111.cljs$core$IFn$_invoke$arity$1 = G__51111__1;
G__51111.cljs$core$IFn$_invoke$arity$2 = G__51111__2;
return G__51111;
})()
);
