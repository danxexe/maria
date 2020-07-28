goog.provide('chia.db.core');
cljs.core.enable_console_print_BANG_();
chia.db.core._STAR_notify_STAR_ = true;
chia.db.core._STAR_db_log_STAR_ = null;
chia.db.core.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
chia.db.core.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
/**
 * Merge additional schema options into a db. Indexes are not created for existing data.
 */
chia.db.core.merge_schema_BANG_ = (function chia$db$core$merge_schema_BANG_(db,schema){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.update,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
});
chia.db.core.get_schema = (function chia$db$core$get_schema(db_snap,a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"schema","schema",-1582001791)),a);
});
/**
 * Returns true if attribute is indexed.
 */
chia.db.core.index_QMARK_ = (function chia$db$core$index_QMARK_(var_args){
var G__45719 = arguments.length;
switch (G__45719) {
case 1:
return chia.db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.contains_QMARK_(schema,new cljs.core.Keyword("db","index","db/index",-1531680669));
});

chia.db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return chia.db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1(chia.db.core.get_schema(db_snap,a));
});

chia.db.core.index_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true for attributes with cardinality `many`, which store a set of values for each attribute.
 */
chia.db.core.many_QMARK_ = (function chia$db$core$many_QMARK_(var_args){
var G__45724 = arguments.length;
switch (G__45724) {
case 1:
return chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)) instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234).fqn === cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)).fqn)));
});

chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(chia.db.core.get_schema(db_snap,a));
});

chia.db.core.many_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true for attributes where :db/index is :db.index/unique.
 */
chia.db.core.unique_QMARK_ = (function chia$db$core$unique_QMARK_(var_args){
var G__45726 = arguments.length;
switch (G__45726) {
case 1:
return chia.db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","index","db/index",-1531680669)) instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword("db.index","unique","db.index/unique",-332402872).fqn === cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","index","db/index",-1531680669)).fqn)));
});

chia.db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return chia.db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1(chia.db.core.get_schema(db_snap,a));
});

chia.db.core.unique_QMARK_.cljs$lang$maxFixedArity = 2;

chia.db.core.ref_QMARK_ = (function chia$db$core$ref_QMARK_(schema){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","type","db/type",1174271242)) instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079).fqn === cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","type","db/type",1174271242)).fqn)));
});
/**
 * Returns id, resolving lookup refs (vectors of the form `[attribute value]`) to ids.
 *   Lookup refs are only supported for indexed attributes.
 */
chia.db.core.resolve_id_STAR_ = (function chia$db$core$resolve_id_STAR_(db_snap,id){
if(cljs.core.vector_QMARK_(id)){
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db_snap,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405)], null),id)));
} else {
return id;
}
});
/**
 * Returns id, resolving lookup refs (vectors of the form `[attribute value]`) to ids.
 *   Lookup refs are only supported for indexed attributes.
 *   The 3-arity version is for known lookup refs, and does not check for uniqueness.
 */
chia.db.core.resolve_id = (function chia$db$core$resolve_id(db,id){
if(cljs.core.vector_QMARK_(id)){
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"_av","_av",354871436),id);
} else {
}

return chia.db.core.resolve_id_STAR_(cljs.core.deref(db),id);
});
/**
 * Returns true if entity with given id exists in db.
 */
chia.db.core.contains_QMARK_ = (function chia$db$core$contains_QMARK_(db,id){
var id__$1 = chia.db.core.resolve_id(db,id);
if((id__$1 == null)){
} else {
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"e__","e__",302856739),id__$1);
}

return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1) === true;
});

chia.db.core.entity_STAR_ = (function chia$db$core$entity_STAR_(db_snap,id){
var G__45737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id);
if((G__45737 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45737,new cljs.core.Keyword("db","id","db/id",-1388397098),id);
}
});
/**
 * Returns entity for resolved id.
 */
chia.db.core.entity = (function chia$db$core$entity(db,id){
var temp__5720__auto__ = chia.db.core.resolve_id(db,id);
if(cljs.core.truth_(temp__5720__auto__)){
var id__$1 = temp__5720__auto__;
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"e__","e__",302856739),id__$1);

return chia.db.core.entity_STAR_(cljs.core.deref(db),id__$1);
} else {
return null;
}
});
/**
 * Get attribute in entity with given id.
 */
chia.db.core.get = (function chia$db$core$get(var_args){
var G__45743 = arguments.length;
switch (G__45743) {
case 3:
return chia.db.core.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chia.db.core.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.get.cljs$core$IFn$_invoke$arity$3 = (function (db,id,attr){
return chia.db.core.get.cljs$core$IFn$_invoke$arity$4(db,id,attr,null);
});

chia.db.core.get.cljs$core$IFn$_invoke$arity$4 = (function (db,id,attr,not_found){
var temp__5720__auto__ = chia.db.core.resolve_id(db,id);
if(cljs.core.truth_(temp__5720__auto__)){
var id__$1 = temp__5720__auto__;
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,attr], null));

return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),attr,not_found);
} else {
return null;
}
});

chia.db.core.get.cljs$lang$maxFixedArity = 4;

/**
 * Get-in the entity with given id.
 */
chia.db.core.get_in = (function chia$db$core$get_in(var_args){
var G__45753 = arguments.length;
switch (G__45753) {
case 3:
return chia.db.core.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chia.db.core.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.get_in.cljs$core$IFn$_invoke$arity$3 = (function (db,id,ks){
return chia.db.core.get_in.cljs$core$IFn$_invoke$arity$4(db,id,ks,null);
});

chia.db.core.get_in.cljs$core$IFn$_invoke$arity$4 = (function (db,id,ks,not_found){
var temp__5720__auto__ = chia.db.core.resolve_id(db,id);
if(cljs.core.truth_(temp__5720__auto__)){
var id__$1 = temp__5720__auto__;
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,cljs.core.first(ks)], null));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(db),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id__$1], null),ks),not_found);
} else {
return null;
}
});

chia.db.core.get_in.cljs$lang$maxFixedArity = 4;

/**
 * Select keys from entity of id
 */
chia.db.core.select_keys = (function chia$db$core$select_keys(db,id,ks){
var temp__5720__auto__ = chia.db.core.resolve_id(db,id);
if(cljs.core.truth_(temp__5720__auto__)){
var id__$1 = temp__5720__auto__;
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (id__$1,temp__5720__auto__){
return (function (p1__45763_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,p1__45763_SHARP_], null);
});})(id__$1,temp__5720__auto__))
,ks),true);

return cljs.core.select_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),new cljs.core.Keyword("db","id","db/id",-1388397098),id__$1),ks);
} else {
return null;
}
});
/**
 * Add refs to entity
 */
chia.db.core.touch = (function chia$db$core$touch(db,p__45766){
var map__45767 = p__45766;
var map__45767__$1 = (((((!((map__45767 == null))))?(((((map__45767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45767):map__45767);
var entity = map__45767__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45767__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.reduce_kv(((function (map__45767,map__45767__$1,entity,id){
return (function (m,attr,ids){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),["_",cljs.core.name(attr)].join('')),ids);
});})(map__45767,map__45767__$1,entity,id))
,entity,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"vae","vae",1087935261)),id));
});
chia.db.core.assert_uniqueness = (function chia$db$core$assert_uniqueness(db_snap,id,attr,val){
if(cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val))){
return null;
} else {
throw (new Error(["Unique index on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"; attempted to write duplicate value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)," on id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"."].join('')));
}
});
chia.db.core.add_index = (function chia$db$core$add_index(db_snap,id,a,v,schema){
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","index","db/index",-1531680669));
if((((index instanceof cljs.core.Keyword)) && ((new cljs.core.Keyword("db.index","unique","db.index/unique",-332402872).fqn === index.fqn)))){
chia.db.core.assert_uniqueness(db_snap,id,a,v);
} else {
}

var G__45782 = db_snap;
var G__45782__$1 = (((!((index == null))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45782,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),a,v], null),chia.db.core.conj_set,id):G__45782);
if(chia.db.core.ref_QMARK_(schema)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45782__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vae","vae",1087935261),v,a], null),chia.db.core.conj_set,id);
} else {
return G__45782__$1;
}
});
chia.db.core.add_index_many = (function chia$db$core$add_index_many(db_snap,id,attr,added,schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,v){
return chia.db.core.add_index(state,id,attr,v,schema);
}),db_snap,added);
});
chia.db.core.remove_index = (function chia$db$core$remove_index(db_snap,id,attr,removed,schema){
var G__45790 = db_snap;
var G__45790__$1 = ((chia.db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1(schema))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45790,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),attr,removed], null),cljs.core.disj,id):G__45790);
if(chia.db.core.ref_QMARK_(schema)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45790__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vae","vae",1087935261),removed,attr], null),cljs.core.disj,id);
} else {
return G__45790__$1;
}
});
chia.db.core.remove_index_many = (function chia$db$core$remove_index_many(db_snap,id,attr,removals,schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (db_snap__$1,v){
return chia.db.core.remove_index(db_snap__$1,id,attr,v,schema);
}),db_snap,removals);
});
chia.db.core.update_index = (function chia$db$core$update_index(db_snap,id,attr,added,removed,schema){
if(chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
var G__45794 = db_snap;
var G__45794__$1 = (cljs.core.truth_(added)?chia.db.core.add_index_many(G__45794,id,attr,added,schema):G__45794);
if(cljs.core.truth_(removed)){
return chia.db.core.remove_index_many(G__45794__$1,id,attr,removed,schema);
} else {
return G__45794__$1;
}
} else {
var G__45795 = db_snap;
var G__45795__$1 = (cljs.core.truth_(added)?chia.db.core.add_index(G__45795,id,attr,added,schema):G__45795);
if(cljs.core.truth_(removed)){
return chia.db.core.remove_index(G__45795__$1,id,attr,added,schema);
} else {
return G__45795__$1;
}
}
});
chia.db.core.clear_empty_ent = (function chia$db$core$clear_empty_ent(db_snap,id){
var G__45796 = db_snap;
if(cljs.core.truth_((function (){var G__45798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id);
var fexpr__45797 = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null),cljs.core.PersistentArrayMap.EMPTY]);
return (fexpr__45797.cljs$core$IFn$_invoke$arity$1 ? fexpr__45797.cljs$core$IFn$_invoke$arity$1(G__45798) : fexpr__45797.call(null,G__45798));
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45796,new cljs.core.Keyword(null,"eav","eav",-1118737308),cljs.core.dissoc,id);
} else {
return G__45796;
}
});
chia.db.core.retract_attr_many = (function chia$db$core$retract_attr_many(p__45799,id,attr,value,schema){
var vec__45800 = p__45799;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(1),null);
var state = vec__45800;
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
var removals = (((value == null))?prev_val:clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(value,prev_val));
var kill_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(removals,prev_val);
if(cljs.core.empty_QMARK_(removals)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chia.db.core.clear_empty_ent(chia.db.core.update_index(((kill_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),cljs.core.dissoc,attr):cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),clojure.set.difference,removals)),id,attr,null,removals,schema),id),(function (){var G__45803 = datoms;
if(chia.db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__45803,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,null,removals], null));
} else {
return G__45803;
}
})()], null);
}
});
chia.db.core.retract_attr = (function chia$db$core$retract_attr(var_args){
var G__45810 = arguments.length;
switch (G__45810) {
case 3:
return chia.db.core.retract_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chia.db.core.retract_attr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.retract_attr.cljs$core$IFn$_invoke$arity$3 = (function (state,id,attr){
return chia.db.core.retract_attr.cljs$core$IFn$_invoke$arity$4(state,id,attr,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr));
});

chia.db.core.retract_attr.cljs$core$IFn$_invoke$arity$4 = (function (p__45811,id,attr,value){
var vec__45812 = p__45811;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45812,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45812,(1),null);
var state = vec__45812;
var schema = chia.db.core.get_schema(db_snap,attr);
if(chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
return chia.db.core.retract_attr_many(state,id,attr,value,schema);
} else {
var prev_val = (((!((value == null))))?value:cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr));
if((!((prev_val == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chia.db.core.clear_empty_ent(chia.db.core.update_index(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),cljs.core.dissoc,attr),id,attr,null,prev_val,chia.db.core.get_schema(db_snap,attr)),id),(function (){var G__45815 = datoms;
if(chia.db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__45815,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,null,prev_val], null));
} else {
return G__45815;
}
})()], null);
} else {
return state;
}
}
});

chia.db.core.retract_attr.cljs$lang$maxFixedArity = 4;

chia.db.core.retract_entity = (function chia$db$core$retract_entity(state,id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__45818){
var vec__45819 = p__45818;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45819,(1),null);
return chia.db.core.retract_attr.cljs$core$IFn$_invoke$arity$4(state__$1,id,a,v);
}),state,chia.db.core.entity_STAR_((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),id));
});
chia.db.core.add = (function chia$db$core$add(p__45825,id,attr,val){
var vec__45826 = p__45825;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45826,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45826,(1),null);
var state = vec__45826;

var schema = chia.db.core.get_schema(db_snap,attr);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
if(chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
var additions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val);
if(cljs.core.empty_QMARK_(additions)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chia.db.core.update_index(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),chia.db.core.into_set,additions),id,attr,additions,null,schema),(function (){var G__45829 = datoms;
if(chia.db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__45829,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,additions,null], null));
} else {
return G__45829;
}
})()], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_val,val)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chia.db.core.update_index(cljs.core.assoc_in(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),val),id,attr,val,prev_val,schema),(function (){var G__45831 = datoms;
if(chia.db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__45831,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,val,prev_val], null));
} else {
return G__45831;
}
})()], null);
}
}
});
chia.db.core.add_map_indexes = (function chia$db$core$add_map_indexes(db_snap,id,m,prev_m){
return cljs.core.reduce_kv((function (db_snap__$1,attr,val){
var schema = chia.db.core.get_schema(db_snap__$1,attr);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_m,attr);
if(chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
return chia.db.core.update_index(db_snap__$1,id,attr,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,val),schema);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,prev_val)){
return chia.db.core.update_index(db_snap__$1,id,attr,val,prev_val,schema);
} else {
return db_snap__$1;

}
}
}),db_snap,m);
});
chia.db.core.add_map_datoms = (function chia$db$core$add_map_datoms(datoms,id,m,prev_m,db_snap){
return cljs.core.reduce_kv((function (datoms__$1,attr,val){
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_m,attr);
var G__45834 = datoms__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,prev_val)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__45834,((chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,val)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,val,prev_val], null)));
} else {
return G__45834;
}
}),datoms,m);
});
chia.db.core.remove_nils = (function chia$db$core$remove_nils(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
var G__45839 = m__$1;
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45839,k);
} else {
return G__45839;
}
}),m,m);
});
chia.db.core.add_map = (function chia$db$core$add_map(p__45840,m){
var vec__45841 = p__45840;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45841,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45841,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","id","db/id",-1388397098));
var m__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","id","db/id",-1388397098));
var prev_m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chia.db.core.clear_empty_ent(chia.db.core.add_map_indexes(cljs.core.assoc_in(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),chia.db.core.remove_nils(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_m,m__$1], 0)))),id,m__$1,prev_m),id),(function (){var G__45846 = datoms;
if(chia.db.core._STAR_notify_STAR_ === true){
return chia.db.core.add_map_datoms(G__45846,id,m__$1,prev_m,db_snap);
} else {
return G__45846;
}
})()], null);
});
chia.db.core.update_attr = (function chia$db$core$update_attr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46047 = arguments.length;
var i__4731__auto___46048 = (0);
while(true){
if((i__4731__auto___46048 < len__4730__auto___46047)){
args__4736__auto__.push((arguments[i__4731__auto___46048]));

var G__46049 = (i__4731__auto___46048 + (1));
i__4731__auto___46048 = G__46049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return chia.db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

chia.db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic = (function (p__45861,id,attr,f,args){
var vec__45863 = p__45861;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45863,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45863,(1),null);
var state = vec__45863;
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,prev_val,args);
if(chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr)){
var additions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_val,prev_val);
var removals = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,new_val);
var G__45868 = state;
var G__45868__$1 = (((!(cljs.core.empty_QMARK_(additions))))?chia.db.core.add(G__45868,id,attr,additions):G__45868);
if((!(cljs.core.empty_QMARK_(removals)))){
return chia.db.core.add(G__45868__$1,id,attr,removals);
} else {
return G__45868__$1;
}
} else {
return chia.db.core.add(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_snap,datoms], null),id,attr,new_val);
}
});

chia.db.core.update_attr.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
chia.db.core.update_attr.cljs$lang$applyTo = (function (seq45847){
var G__45848 = cljs.core.first(seq45847);
var seq45847__$1 = cljs.core.next(seq45847);
var G__45849 = cljs.core.first(seq45847__$1);
var seq45847__$2 = cljs.core.next(seq45847__$1);
var G__45850 = cljs.core.first(seq45847__$2);
var seq45847__$3 = cljs.core.next(seq45847__$2);
var G__45851 = cljs.core.first(seq45847__$3);
var seq45847__$4 = cljs.core.next(seq45847__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45848,G__45849,G__45850,G__45851,seq45847__$4);
});

chia.db.core.assoc_in_attr = (function chia$db$core$assoc_in_attr(p__45872,id,attr,path,new_val){
var vec__45873 = p__45872;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(1),null);
return chia.db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_snap,datoms], null),id,attr,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_val], 0));
});
/**
 * Returns set of attribute keys with db.cardinality/schema
 */
chia.db.core.many_attrs = (function chia$db$core$many_attrs(schema){
return cljs.core.reduce_kv((function (s,attr,k_schema){
var G__45880 = s;
if(chia.db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(k_schema)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45880,attr);
} else {
return G__45880;
}
}),cljs.core.PersistentHashSet.EMPTY,schema);
});
/**
 * Remove listener from patterns (if provided) or :tx-log.
 */
chia.db.core.unlisten = (function chia$db$core$unlisten(var_args){
var G__45884 = arguments.length;
switch (G__45884) {
case 2:
return chia.db.core.unlisten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chia.db.core.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.unlisten.cljs$core$IFn$_invoke$arity$2 = (function (db,reader){
var G__45889 = db;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45889,cljs.core.update,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reader], 0));

return G__45889;
});

chia.db.core.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (db,reader,patterns){
return chia.db.patterns.unlisten(db,patterns,reader);
});

chia.db.core.unlisten.cljs$lang$maxFixedArity = 3;

/**
 * Adds listener for transactions which contain datom(s) matching the provided pattern. If patterns not provided, matches all transactions.
 * 
 * Patterns should be a map containing any of the following keys, each containing a collection of patterns:
 * 
 *  :e__      entity                              [id _ _]
 *  :ea_      entity-attribute                    [id attr _]
 *  :_av      attribute-value                     [_ attr val]
 *  :_a_      attribute                           [_ attr _]
 */
chia.db.core.listen = (function chia$db$core$listen(var_args){
var G__45895 = arguments.length;
switch (G__45895) {
case 2:
return chia.db.core.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chia.db.core.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.listen.cljs$core$IFn$_invoke$arity$2 = (function (db,reader){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.update,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001),chia.db.core.conj_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reader], 0));

return (function (){
return chia.db.core.unlisten.cljs$core$IFn$_invoke$arity$2(db,reader);
});
});

chia.db.core.listen.cljs$core$IFn$_invoke$arity$3 = (function (db,reader,patterns){
chia.db.patterns.listen(db,patterns,reader);

return (function (){
return chia.db.core.unlisten.cljs$core$IFn$_invoke$arity$3(db,patterns,reader);
});
});

chia.db.core.listen.cljs$lang$maxFixedArity = 3;

/**
 * Notify listeners for supported patterns matched by datoms in transaction.
 * 
 *   Listeners are called with the complete :tx-report. A listener is called at most once per transaction.
 */
chia.db.core.notify_listeners = (function chia$db$core$notify_listeners(p__45903){
var map__45904 = p__45903;
var map__45904__$1 = (((((!((map__45904 == null))))?(((((map__45904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45904):map__45904);
var tx_report = map__45904__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45904__$1,new cljs.core.Keyword("chia.db.core","db-after","chia.db.core/db-after",-2132158236));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45904__$1,new cljs.core.Keyword("chia.db.core","datoms","chia.db.core/datoms",430552924));
var temp__5720__auto___46106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_after,new cljs.core.Keyword(null,"listeners","listeners",394544445));
if(cljs.core.truth_(temp__5720__auto___46106)){
var pattern_value_map_46107 = temp__5720__auto___46106;
var seq__45908_46108 = cljs.core.seq(chia.db.patterns.datom_values(pattern_value_map_46107,datoms,chia.db.core.many_attrs(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after))));
var chunk__45909_46109 = null;
var count__45910_46110 = (0);
var i__45911_46111 = (0);
while(true){
if((i__45911_46111 < count__45910_46110)){
var reader_46118 = chunk__45909_46109.cljs$core$IIndexed$_nth$arity$2(null,i__45911_46111);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2(reader_46118,tx_report);


var G__46122 = seq__45908_46108;
var G__46123 = chunk__45909_46109;
var G__46124 = count__45910_46110;
var G__46125 = (i__45911_46111 + (1));
seq__45908_46108 = G__46122;
chunk__45909_46109 = G__46123;
count__45910_46110 = G__46124;
i__45911_46111 = G__46125;
continue;
} else {
var temp__5720__auto___46127__$1 = cljs.core.seq(seq__45908_46108);
if(temp__5720__auto___46127__$1){
var seq__45908_46128__$1 = temp__5720__auto___46127__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45908_46128__$1)){
var c__4550__auto___46129 = cljs.core.chunk_first(seq__45908_46128__$1);
var G__46130 = cljs.core.chunk_rest(seq__45908_46128__$1);
var G__46131 = c__4550__auto___46129;
var G__46132 = cljs.core.count(c__4550__auto___46129);
var G__46133 = (0);
seq__45908_46108 = G__46130;
chunk__45909_46109 = G__46131;
count__45910_46110 = G__46132;
i__45911_46111 = G__46133;
continue;
} else {
var reader_46134 = cljs.core.first(seq__45908_46128__$1);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2(reader_46134,tx_report);


var G__46135 = cljs.core.next(seq__45908_46128__$1);
var G__46136 = null;
var G__46137 = (0);
var G__46138 = (0);
seq__45908_46108 = G__46135;
chunk__45909_46109 = G__46136;
count__45910_46110 = G__46137;
i__45911_46111 = G__46138;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__45927 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_after,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001)));
var chunk__45928 = null;
var count__45929 = (0);
var i__45930 = (0);
while(true){
if((i__45930 < count__45929)){
var reader = chunk__45928.cljs$core$IIndexed$_nth$arity$2(null,i__45930);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2(reader,tx_report);


var G__46145 = seq__45927;
var G__46146 = chunk__45928;
var G__46147 = count__45929;
var G__46148 = (i__45930 + (1));
seq__45927 = G__46145;
chunk__45928 = G__46146;
count__45929 = G__46147;
i__45930 = G__46148;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45927);
if(temp__5720__auto__){
var seq__45927__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45927__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45927__$1);
var G__46149 = cljs.core.chunk_rest(seq__45927__$1);
var G__46150 = c__4550__auto__;
var G__46151 = cljs.core.count(c__4550__auto__);
var G__46152 = (0);
seq__45927 = G__46149;
chunk__45928 = G__46150;
count__45929 = G__46151;
i__45930 = G__46152;
continue;
} else {
var reader = cljs.core.first(seq__45927__$1);
chia.reactive.invalidate_BANG_.cljs$core$IFn$_invoke$arity$2(reader,tx_report);


var G__46158 = cljs.core.next(seq__45927__$1);
var G__46159 = null;
var G__46160 = (0);
var G__46161 = (0);
seq__45927 = G__46158;
chunk__45928 = G__46159;
count__45929 = G__46160;
i__45930 = G__46161;
continue;
}
} else {
return null;
}
}
break;
}
});
chia.db.core.commit_tx = (function chia$db$core$commit_tx(state,tx){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__45932 = (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1((0)) : tx.call(null,(0)));
var G__45932__$1 = (((G__45932 instanceof cljs.core.Keyword))?G__45932.fqn:null);
switch (G__45932__$1) {
case "db/add":
return chia.db.core.add;

break;
case "db/add-map":
return chia.db.core.add_map;

break;
case "db/update-attr":
return chia.db.core.update_attr;

break;
case "db/assoc-in-attr":
return chia.db.core.assoc_in_attr;

break;
case "db/retract-entity":
return chia.db.core.retract_entity;

break;
case "db/retract-attr":
return chia.db.core.retract_attr;

break;
default:
return ((function (G__45932,G__45932__$1){
return (function (){
throw Error(["No chia.db op: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1((0)) : tx.call(null,(0))))].join(''));
});
;})(G__45932,G__45932__$1))

}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx,(0),state));
});
chia.db.core.transaction = (function chia$db$core$transaction(db_before,new_txs){
var resolve_id = (function (p1__45934_SHARP_){
return chia.db.core.resolve_id_STAR_(db_before,p1__45934_SHARP_);
});
var vec__45938 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (resolve_id){
return (function (state,tx){
if(cljs.core.vector_QMARK_(tx)){
return chia.db.core.commit_tx(state,cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx,(1),resolve_id));
} else {
return chia.db.core.commit_tx(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add-map","db/add-map",679156732),cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.Keyword("db","id","db/id",-1388397098),resolve_id)], null));
}
});})(resolve_id))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_before,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),new_txs);
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45938,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45938,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chia.db.core","db-before","chia.db.core/db-before",872327306),db_before,new cljs.core.Keyword("chia.db.core","db-after","chia.db.core/db-after",-2132158236),db_after,new cljs.core.Keyword("chia.db.core","datoms","chia.db.core/datoms",430552924),cljs.core.persistent_BANG_(datoms)], null);
});
chia.db.core._STAR_prevent_notify_STAR_ = false;
chia.db.core.transact_BANG_ = (function chia$db$core$transact_BANG_(var_args){
var G__45945 = arguments.length;
switch (G__45945) {
case 2:
return chia.db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chia.db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (db,txs){
return chia.db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(db,txs,cljs.core.PersistentArrayMap.EMPTY);
});

chia.db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (db,txs,p__45947){
var map__45948 = p__45947;
var map__45948__$1 = (((((!((map__45948 == null))))?(((((map__45948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45948):map__45948);
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45948__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814),true);
var log_datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45948__$1,new cljs.core.Keyword(null,"log-datoms","log-datoms",-1857368166));
var _STAR_notify_STAR__orig_val__45950 = chia.db.core._STAR_notify_STAR_;
var _STAR_notify_STAR__temp_val__45951 = (function (){var or__4131__auto__ = notify;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return log_datoms;
}
})();
chia.db.core._STAR_notify_STAR_ = _STAR_notify_STAR__temp_val__45951;

try{var temp__5720__auto__ = (((txs == null))?null:((((cljs.core.map_QMARK_(txs)) && (cljs.core.contains_QMARK_(txs,new cljs.core.Keyword("chia.db.core","datoms","chia.db.core/datoms",430552924)))))?txs:((((cljs.core.vector_QMARK_(txs)) || (cljs.core.list_QMARK_(txs)) || (cljs.core.seq_QMARK_(txs))))?chia.db.core.transaction(cljs.core.deref(db),txs):(function(){throw Error("Transact! was not passed a valid transaction")})()
)));
if(cljs.core.truth_(temp__5720__auto__)){
var map__45955 = temp__5720__auto__;
var map__45955__$1 = (((((!((map__45955 == null))))?(((((map__45955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45955):map__45955);
var tx = map__45955__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45955__$1,new cljs.core.Keyword("chia.db.core","db-after","chia.db.core/db-after",-2132158236));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45955__$1,new cljs.core.Keyword("chia.db.core","datoms","chia.db.core/datoms",430552924));
cljs.core.reset_BANG_(db,db_after);

if((chia.db.core._STAR_db_log_STAR_ == null)){
} else {
cljs.core.reset_BANG_(chia.db.core._STAR_db_log_STAR_,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(chia.db.core._STAR_db_log_STAR_),new cljs.core.Keyword("chia.db.core","db-after","chia.db.core/db-after",-2132158236),db_after),new cljs.core.Keyword("chia.db.core","datoms","chia.db.core/datoms",430552924),cljs.core.into,datoms));
}

if(cljs.core.truth_((function (){var and__4120__auto__ = notify;
if(cljs.core.truth_(and__4120__auto__)){
return (!(chia.db.core._STAR_prevent_notify_STAR_));
} else {
return and__4120__auto__;
}
})())){
chia.db.core.notify_listeners(tx);
} else {
}

return db;
} else {
return null;
}
}finally {chia.db.core._STAR_notify_STAR_ = _STAR_notify_STAR__orig_val__45950;
}});

chia.db.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

chia.db.core.entity_ids = (function chia$db$core$entity_ids(db,qs){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (q){
return cljs.core.set(((cljs.core.fn_QMARK_(q))?cljs.core.reduce_kv((function (s,id,entity){
if((q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(entity) : q.call(null,entity))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,id);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"eav","eav",-1118737308))):(((q instanceof cljs.core.Keyword))?(function (){
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"_a_","_a_",1238688032),q);

return cljs.core.reduce_kv((function (s,id,entity){
if(cljs.core.contains_QMARK_(entity,q)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,id);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"eav","eav",-1118737308)));
})()
:(function (){var vec__45967 = q;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45967,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45967,(1),null);
var db_snap = cljs.core.deref(db);
chia.db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

if(chia.db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val);
} else {
var G__45971 = db;
var G__45972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (G__45971,vec__45967,attr,val,db_snap){
return (function (p1__45962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__45962_SHARP_,attr));
});})(G__45971,vec__45967,attr,val,db_snap))
], null);
return (chia.db.core.entity_ids.cljs$core$IFn$_invoke$arity$2 ? chia.db.core.entity_ids.cljs$core$IFn$_invoke$arity$2(G__45971,G__45972) : chia.db.core.entity_ids.call(null,G__45971,G__45972));
}
})()
)));
}),qs));
});
chia.db.core.entities = (function chia$db$core$entities(db,qs){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45973_SHARP_){
return chia.db.core.entity(db,p1__45973_SHARP_);
}),chia.db.core.entity_ids(db,qs));
});
/**
 * Returns a unique id (string).
 */
chia.db.core.unique_id = (function chia$db$core$unique_id(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid_utils.core.make_random_uuid());
});
/**
 * Create a new db, with optional schema, which should be a mapping of attribute keys to
 *   the following options:
 * 
 *  :db/index       [true, :db.index/unique]
 *  :db/cardinality [:db.cardinality/many]
 */
chia.db.core.create = (function chia$db$core$create(var_args){
var G__45976 = arguments.length;
switch (G__45976) {
case 0:
return chia.db.core.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chia.db.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.db.core.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return chia.db.core.create.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

chia.db.core.create.cljs$core$IFn$_invoke$arity$1 = (function (schema){
var G__45982 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eav","eav",-1118737308),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ave","ave",1316899405),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null));
var x45983_46240 = G__45982;
x45983_46240.chia$reactive$ITransitionPattern$ = cljs.core.PROTOCOL_SENTINEL;

x45983_46240.chia$reactive$ITransitionPattern$on_transition_pattern$arity$4 = ((function (x45983_46240,G__45982){
return (function (source,reader,prev_patterns,next_patterns){
var source__$1 = this;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_patterns,prev_patterns)){
if(cljs.core.truth_(next_patterns)){
var G__45984_46242 = chia.db.patterns.added_patterns(prev_patterns,next_patterns);
if((G__45984_46242 == null)){
} else {
chia.db.core.listen.cljs$core$IFn$_invoke$arity$3(source__$1,reader,G__45984_46242);
}
} else {
}

if(cljs.core.truth_(prev_patterns)){
var G__45989_46243 = chia.db.patterns.removed_patterns(prev_patterns,next_patterns);
if((G__45989_46243 == null)){
} else {
chia.db.core.unlisten.cljs$core$IFn$_invoke$arity$3(source__$1,reader,G__45989_46243);
}
} else {
}
} else {
}

return next_patterns;
});})(x45983_46240,G__45982))
;

x45983_46240.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x45983_46240.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x45983_46240,G__45982){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core._write(writer,"db[]");
});})(x45983_46240,G__45982))
;


return G__45982;
});

chia.db.core.create.cljs$lang$maxFixedArity = 1;

