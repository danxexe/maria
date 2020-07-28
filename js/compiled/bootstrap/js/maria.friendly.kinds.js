goog.provide('maria.friendly.kinds');
goog.require('cljs.core');

/**
 * @interface
 */
maria.friendly.kinds.IDoc = function(){};

/**
 * Return a docstring for type
 */
maria.friendly.kinds.doc = (function maria$friendly$kinds$doc(this$){
if((((!((this$ == null)))) && ((!((this$.maria$friendly$kinds$IDoc$doc$arity$1 == null)))))){
return this$.maria$friendly$kinds$IDoc$doc$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (maria.friendly.kinds.doc[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (maria.friendly.kinds.doc["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDoc.doc",this$);
}
}
}
});

maria.friendly.kinds.kinds = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("maria.kinds","symbol","maria.kinds/symbol",-955233087),new cljs.core.Keyword("maria.kinds","number","maria.kinds/number",1136751011),new cljs.core.Keyword("maria.kinds","uneval","maria.kinds/uneval",2077242308),new cljs.core.Keyword("maria.kinds","false","maria.kinds/false",1158804326),new cljs.core.Keyword("maria.kinds","object","maria.kinds/object",1326202984),new cljs.core.Keyword("maria.kinds","character","maria.kinds/character",265668456),new cljs.core.Keyword("maria.kinds","true","maria.kinds/true",-1302780087),new cljs.core.Keyword("maria.kinds","vector","maria.kinds/vector",1749695275),new cljs.core.Keyword("maria.kinds","string","maria.kinds/string",-1273780405),new cljs.core.Keyword("maria.kinds","sequence","maria.kinds/sequence",812059533),new cljs.core.Keyword("maria.kinds","keyword","maria.kinds/keyword",693476558),new cljs.core.Keyword("maria.kinds","set","maria.kinds/set",-431061839),new cljs.core.Keyword("maria.kinds","special-form","maria.kinds/special-form",-1211628813),new cljs.core.Keyword("maria.kinds","atom","maria.kinds/atom",-218172618),new cljs.core.Keyword("maria.kinds","function","maria.kinds/function",-1978793480),new cljs.core.Keyword("maria.kinds","var","maria.kinds/var",-1460069286),new cljs.core.Keyword("maria.kinds","list","maria.kinds/list",780593082),new cljs.core.Keyword("maria.kinds","macro","maria.kinds/macro",1970002427),new cljs.core.Keyword("maria.kinds","map","maria.kinds/map",722976892),new cljs.core.Keyword("maria.kinds","nil","maria.kinds/nil",-49721922),new cljs.core.Keyword("maria.kinds","comment","maria.kinds/comment",689126206)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a symbol: a name that usually refers to something"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a number: it can be whole, a decimal, or even a ratio"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"uneval: adding `#_` in front of any expression will cause it to be completely ignored by the computer, like a comment."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"false: the Boolean value 'false'"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a javascript object: a collection of key/value pairs"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a character: a unit of writing (letter, emoji, and so on)"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"true: the Boolean value 'true'"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a vector: a collection of values, indexable by number"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a string: a run of characters that can make up a text"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a sequence: a sequence of values, each followed by the next"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a keyword: a special symbolic identifier"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a set: a collection of unique values"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a special form: a primitive which is evaluated in a special way"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"an Clojure atom, a way to manage data that can change"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a function: something you call with input that returns output"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a Clojure var"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a list: a sequence, possibly 'lazy'"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a macro: a function that transforms source code before it is evaluated."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a map: a collection of key/value pairs, where each key 'maps' to its corresponding value"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"nil: a special value meaning nothing"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"a comment: any text beginning with `;` is ignored by the computer, useful for explaining or annotating code."], null)]);
maria.friendly.kinds.kind = (function maria$friendly$kinds$kind(thing){
if((((thing instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(maria.friendly.kinds.kinds,thing)))){
return thing;
} else {
if(cljs.core.char_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","character","maria.kinds/character",265668456);
} else {
if(thing === false){
return new cljs.core.Keyword("maria.kinds","false","maria.kinds/false",1158804326);
} else {
if((thing instanceof cljs.core.Keyword)){
return new cljs.core.Keyword("maria.kinds","keyword","maria.kinds/keyword",693476558);
} else {
if(cljs.core.seq_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","sequence","maria.kinds/sequence",812059533);
} else {
if(cljs.core.list_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","list","maria.kinds/list",780593082);
} else {
if(cljs.core.map_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","map","maria.kinds/map",722976892);
} else {
if(cljs.core.var_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","var","maria.kinds/var",-1460069286);
} else {
if(cljs.core.fn_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","function","maria.kinds/function",-1978793480);
} else {
if((thing == null)){
return new cljs.core.Keyword("maria.kinds","nil","maria.kinds/nil",-49721922);
} else {
if(typeof thing === 'number'){
return new cljs.core.Keyword("maria.kinds","number","maria.kinds/number",1136751011);
} else {
if(cljs.core.set_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","set","maria.kinds/set",-431061839);
} else {
if(typeof thing === 'string'){
return new cljs.core.Keyword("maria.kinds","string","maria.kinds/string",-1273780405);
} else {
if((thing instanceof cljs.core.Symbol)){
return new cljs.core.Keyword("maria.kinds","symbol","maria.kinds/symbol",-955233087);
} else {
if(thing === true){
return new cljs.core.Keyword("maria.kinds","true","maria.kinds/true",-1302780087);
} else {
if(cljs.core.vector_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","vector","maria.kinds/vector",1749695275);
} else {
if(cljs.core.object_QMARK_(thing)){
return new cljs.core.Keyword("maria.kinds","object","maria.kinds/object",1326202984);
} else {
if((thing instanceof cljs.core.Atom)){
return new cljs.core.Keyword("maria.kinds","atom","maria.kinds/atom",-218172618);
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Returns a string describing what kind of thing `thing` is.
 */
maria.friendly.kinds.what_is = (function maria$friendly$kinds$what_is(thing){
if((((!((thing == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === thing.maria$friendly$kinds$IDoc$))))?true:(((!thing.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(maria.friendly.kinds.IDoc,thing):false)):cljs.core.native_satisfies_QMARK_(maria.friendly.kinds.IDoc,thing))){
return maria.friendly.kinds.doc(thing);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(maria.friendly.kinds.kinds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maria.friendly.kinds.kind(thing),new cljs.core.Keyword(null,"doc","doc",1913296891)], null),cljs.core.type(thing));
}
});

//# sourceMappingURL=maria.friendly.kinds.js.map
