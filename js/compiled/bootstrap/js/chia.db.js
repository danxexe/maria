goog.provide('chia.db');
goog.require('cljs.core');
goog.require('chia.db.core');
if((typeof chia !== 'undefined') && (typeof chia.db !== 'undefined') && (typeof chia.db._STAR_db_STAR_ !== 'undefined')){
} else {
chia.db._STAR_db_STAR_ = chia.db.core.create.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
chia.db.entity = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.entity,chia.db._STAR_db_STAR_);
chia.db.get = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.get,chia.db._STAR_db_STAR_);
chia.db.get_in = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.get_in,chia.db._STAR_db_STAR_);
chia.db.select_keys = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.select_keys,chia.db._STAR_db_STAR_);
chia.db.entity_ids = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.entity_ids,chia.db._STAR_db_STAR_);
chia.db.entities = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.entities,chia.db._STAR_db_STAR_);
chia.db.contains_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.contains_QMARK_,chia.db._STAR_db_STAR_);
chia.db.touch = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.touch,chia.db._STAR_db_STAR_);
chia.db.transact_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.transact_BANG_,chia.db._STAR_db_STAR_);
chia.db.listen = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.listen,chia.db._STAR_db_STAR_);
chia.db.unlisten = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.unlisten,chia.db._STAR_db_STAR_);
chia.db.merge_schema_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.db.core.merge_schema_BANG_,chia.db._STAR_db_STAR_);
chia.db.unique_id = chia.db.core.unique_id;

//# sourceMappingURL=chia.db.js.map
