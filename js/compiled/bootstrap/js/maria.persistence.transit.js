goog.provide('maria.persistence.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('clojure.string');
maria.persistence.transit.reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
maria.persistence.transit.writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
maria.persistence.transit.deserialize = (function maria$persistence$transit$deserialize(x){
if(((typeof x === 'string') && (clojure.string.starts_with_QMARK_(x,"transit/json:")))){
return cognitect.transit.read(maria.persistence.transit.reader,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(13)));
} else {
return null;
}
});
maria.persistence.transit.serialize = (function maria$persistence$transit$serialize(x){
return ["transit/json:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cognitect.transit.write(maria.persistence.transit.writer,x))].join('');
});

//# sourceMappingURL=maria.persistence.transit.js.map
