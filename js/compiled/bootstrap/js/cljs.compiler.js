goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__62268 = s;
var map__62268__$1 = (((((!((map__62268 == null))))?(((((map__62268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62268):map__62268);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62268__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__62272 = info;
var map__62273 = G__62272;
var map__62273__$1 = (((((!((map__62273 == null))))?(((((map__62273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62273):map__62273);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62273__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__62272__$1 = G__62272;
while(true){
var d__$2 = d__$1;
var map__62283 = G__62272__$1;
var map__62283__$1 = (((((!((map__62283 == null))))?(((((map__62283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62283):map__62283);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62283__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__63754 = (d__$2 + (1));
var G__63755 = shadow__$2;
d__$1 = G__63754;
G__62272__$1 = G__63755;
continue;
} else {
if(cljs.core.truth_((cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)) : cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__62292){
var map__62293 = p__62292;
var map__62293__$1 = (((((!((map__62293 == null))))?(((((map__62293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62293):map__62293);
var name_var = map__62293__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62293__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62293__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__62296 = info;
var map__62296__$1 = (((((!((map__62296 == null))))?(((((map__62296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62296):map__62296);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__62298 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__62298) : cljs.compiler.munge.call(null,G__62298));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__62300 = arguments.length;
switch (G__62300) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__62313 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",17,1,11478,11478,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__62313.cljs$core$IFn$_invoke$arity$1 ? fexpr__62313.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__62313.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__62314 = cp;
switch (G__62314) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__62320_63771 = cljs.core.seq(s);
var chunk__62321_63772 = null;
var count__62322_63773 = (0);
var i__62323_63774 = (0);
while(true){
if((i__62323_63774 < count__62322_63773)){
var c_63777 = chunk__62321_63772.cljs$core$IIndexed$_nth$arity$2(null,i__62323_63774);
sb.append(cljs.compiler.escape_char(c_63777));


var G__63781 = seq__62320_63771;
var G__63782 = chunk__62321_63772;
var G__63783 = count__62322_63773;
var G__63784 = (i__62323_63774 + (1));
seq__62320_63771 = G__63781;
chunk__62321_63772 = G__63782;
count__62322_63773 = G__63783;
i__62323_63774 = G__63784;
continue;
} else {
var temp__5720__auto___63785 = cljs.core.seq(seq__62320_63771);
if(temp__5720__auto___63785){
var seq__62320_63786__$1 = temp__5720__auto___63785;
if(cljs.core.chunked_seq_QMARK_(seq__62320_63786__$1)){
var c__4550__auto___63787 = cljs.core.chunk_first(seq__62320_63786__$1);
var G__63788 = cljs.core.chunk_rest(seq__62320_63786__$1);
var G__63789 = c__4550__auto___63787;
var G__63790 = cljs.core.count(c__4550__auto___63787);
var G__63791 = (0);
seq__62320_63771 = G__63788;
chunk__62321_63772 = G__63789;
count__62322_63773 = G__63790;
i__62323_63774 = G__63791;
continue;
} else {
var c_63793 = cljs.core.first(seq__62320_63786__$1);
sb.append(cljs.compiler.escape_char(c_63793));


var G__63794 = cljs.core.next(seq__62320_63786__$1);
var G__63795 = null;
var G__63796 = (0);
var G__63797 = (0);
seq__62320_63771 = G__63794;
chunk__62321_63772 = G__63795;
count__62322_63773 = G__63796;
i__62323_63774 = G__63797;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62333 = cljs.core.get_global_hierarchy;
return (fexpr__62333.cljs$core$IFn$_invoke$arity$0 ? fexpr__62333.cljs$core$IFn$_invoke$arity$0() : fexpr__62333.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__62340_63802 = ast;
var map__62340_63803__$1 = (((((!((map__62340_63802 == null))))?(((((map__62340_63802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62340_63802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62340_63802):map__62340_63802);
var env_63804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62340_63803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_63804))){
var map__62346_63805 = env_63804;
var map__62346_63806__$1 = (((((!((map__62346_63805 == null))))?(((((map__62346_63805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62346_63805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62346_63805):map__62346_63805);
var line_63807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346_63806__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346_63806__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__62346_63805,map__62346_63806__$1,line_63807,column_63808,map__62340_63802,map__62340_63803__$1,env_63804){
return (function (m){
var minfo = (function (){var G__62349 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__62355 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__62354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__62354.cljs$core$IFn$_invoke$arity$1 ? fexpr__62354.cljs$core$IFn$_invoke$arity$1(G__62355) : fexpr__62354.call(null,G__62355));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62349,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__62349;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_63807 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__62346_63805,map__62346_63806__$1,line_63807,column_63808,map__62340_63802,map__62340_63803__$1,env_63804){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_63808)?(column_63808 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__62346_63805,map__62346_63806__$1,line_63807,column_63808,map__62340_63802,map__62340_63803__$1,env_63804){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__62346_63805,map__62346_63806__$1,line_63807,column_63808,map__62340_63802,map__62340_63803__$1,env_63804))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__62346_63805,map__62346_63806__$1,line_63807,column_63808,map__62340_63802,map__62340_63803__$1,env_63804))
,cljs.core.sorted_map()));
});})(map__62346_63805,map__62346_63806__$1,line_63807,column_63808,map__62340_63802,map__62340_63803__$1,env_63804))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__62379 = arguments.length;
switch (G__62379) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___63828 = arguments.length;
var i__4731__auto___63829 = (0);
while(true){
if((i__4731__auto___63829 < len__4730__auto___63828)){
args_arr__4751__auto__.push((arguments[i__4731__auto___63829]));

var G__63830 = (i__4731__auto___63829 + (1));
i__4731__auto___63829 = G__63830;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_63836 = (function (){var G__62393 = a;
if((!(typeof a === 'string'))){
return G__62393.toString();
} else {
return G__62393;
}
})();
var temp__5724__auto___63837 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___63837 == null)){
} else {
var sm_data_63838 = temp__5724__auto___63837;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_63838,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_63838,temp__5724__auto___63837,s_63836){
return (function (p1__62364_SHARP_){
return (p1__62364_SHARP_ + s_63836.length);
});})(sm_data_63838,temp__5724__auto___63837,s_63836))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_63836], 0));

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__62409 = cljs.core.seq(xs);
var chunk__62410 = null;
var count__62411 = (0);
var i__62412 = (0);
while(true){
if((i__62412 < count__62411)){
var x = chunk__62410.cljs$core$IIndexed$_nth$arity$2(null,i__62412);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__63843 = seq__62409;
var G__63844 = chunk__62410;
var G__63845 = count__62411;
var G__63846 = (i__62412 + (1));
seq__62409 = G__63843;
chunk__62410 = G__63844;
count__62411 = G__63845;
i__62412 = G__63846;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62409);
if(temp__5720__auto__){
var seq__62409__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62409__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62409__$1);
var G__63847 = cljs.core.chunk_rest(seq__62409__$1);
var G__63848 = c__4550__auto__;
var G__63849 = cljs.core.count(c__4550__auto__);
var G__63850 = (0);
seq__62409 = G__63847;
chunk__62410 = G__63848;
count__62411 = G__63849;
i__62412 = G__63850;
continue;
} else {
var x = cljs.core.first(seq__62409__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__63851 = cljs.core.next(seq__62409__$1);
var G__63852 = null;
var G__63853 = (0);
var G__63854 = (0);
seq__62409 = G__63851;
chunk__62410 = G__63852;
count__62411 = G__63853;
i__62412 = G__63854;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq62373){
var G__62374 = cljs.core.first(seq62373);
var seq62373__$1 = cljs.core.next(seq62373);
var G__62375 = cljs.core.first(seq62373__$1);
var seq62373__$2 = cljs.core.next(seq62373__$1);
var G__62376 = cljs.core.first(seq62373__$2);
var seq62373__$3 = cljs.core.next(seq62373__$2);
var G__62377 = cljs.core.first(seq62373__$3);
var seq62373__$4 = cljs.core.next(seq62373__$3);
var G__62378 = cljs.core.first(seq62373__$4);
var seq62373__$5 = cljs.core.next(seq62373__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62374,G__62375,G__62376,G__62377,G__62378,seq62373__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__62435){
var map__62437 = p__62435;
var map__62437__$1 = (((((!((map__62437 == null))))?(((((map__62437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62437):map__62437);
var m = map__62437__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62437__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__62455 = arguments.length;
switch (G__62455) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___63857 = arguments.length;
var i__4731__auto___63858 = (0);
while(true){
if((i__4731__auto___63858 < len__4730__auto___63857)){
args_arr__4751__auto__.push((arguments[i__4731__auto___63858]));

var G__63859 = (i__4731__auto___63858 + (1));
i__4731__auto___63858 = G__63859;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__62489_63867 = cljs.core.seq(xs);
var chunk__62490_63868 = null;
var count__62491_63869 = (0);
var i__62492_63870 = (0);
while(true){
if((i__62492_63870 < count__62491_63869)){
var x_63871 = chunk__62490_63868.cljs$core$IIndexed$_nth$arity$2(null,i__62492_63870);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_63871);


var G__63872 = seq__62489_63867;
var G__63873 = chunk__62490_63868;
var G__63874 = count__62491_63869;
var G__63875 = (i__62492_63870 + (1));
seq__62489_63867 = G__63872;
chunk__62490_63868 = G__63873;
count__62491_63869 = G__63874;
i__62492_63870 = G__63875;
continue;
} else {
var temp__5720__auto___63876 = cljs.core.seq(seq__62489_63867);
if(temp__5720__auto___63876){
var seq__62489_63878__$1 = temp__5720__auto___63876;
if(cljs.core.chunked_seq_QMARK_(seq__62489_63878__$1)){
var c__4550__auto___63879 = cljs.core.chunk_first(seq__62489_63878__$1);
var G__63880 = cljs.core.chunk_rest(seq__62489_63878__$1);
var G__63881 = c__4550__auto___63879;
var G__63882 = cljs.core.count(c__4550__auto___63879);
var G__63883 = (0);
seq__62489_63867 = G__63880;
chunk__62490_63868 = G__63881;
count__62491_63869 = G__63882;
i__62492_63870 = G__63883;
continue;
} else {
var x_63884 = cljs.core.first(seq__62489_63878__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_63884);


var G__63886 = cljs.core.next(seq__62489_63878__$1);
var G__63887 = null;
var G__63888 = (0);
var G__63889 = (0);
seq__62489_63867 = G__63886;
chunk__62490_63868 = G__63887;
count__62491_63869 = G__63888;
i__62492_63870 = G__63889;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq62447){
var G__62448 = cljs.core.first(seq62447);
var seq62447__$1 = cljs.core.next(seq62447);
var G__62449 = cljs.core.first(seq62447__$1);
var seq62447__$2 = cljs.core.next(seq62447__$1);
var G__62450 = cljs.core.first(seq62447__$2);
var seq62447__$3 = cljs.core.next(seq62447__$2);
var G__62451 = cljs.core.first(seq62447__$3);
var seq62447__$4 = cljs.core.next(seq62447__$3);
var G__62452 = cljs.core.first(seq62447__$4);
var seq62447__$5 = cljs.core.next(seq62447__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62448,G__62449,G__62450,G__62451,G__62452,seq62447__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62507_63892 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62508_63893 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62509_63894 = true;
var _STAR_print_fn_STAR__temp_val__62510_63895 = ((function (_STAR_print_newline_STAR__orig_val__62507_63892,_STAR_print_fn_STAR__orig_val__62508_63893,_STAR_print_newline_STAR__temp_val__62509_63894,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__62507_63892,_STAR_print_fn_STAR__orig_val__62508_63893,_STAR_print_newline_STAR__temp_val__62509_63894,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62509_63894;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62510_63895;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62508_63893;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62507_63892;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62520 = cljs.core.get_global_hierarchy;
return (fexpr__62520.cljs$core$IFn$_invoke$arity$0 ? fexpr__62520.cljs$core$IFn$_invoke$arity$0() : fexpr__62520.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__62527 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62527,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62527,(1),null);
var G__62530 = ns;
var G__62531 = name;
var G__62532 = ((function (G__62530,G__62531,vec__62527,ns,name){
return (function (){
var G__62533 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__62533) : cljs.compiler.emit_constant.call(null,G__62533));
});})(G__62530,G__62531,vec__62527,ns,name))
;
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__62530,G__62531,G__62532) : cljs.compiler.emit_record_value.call(null,G__62530,G__62531,G__62532));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__62536 = cljs.core.keys(x);
var G__62537 = cljs.core.vals(x);
var G__62538 = cljs.compiler.emit_constants_comma_sep;
var G__62539 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__62536,G__62537,G__62538,G__62539) : cljs.compiler.emit_map.call(null,G__62536,G__62537,G__62538,G__62539));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return (cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.compiler.emit_constant_STAR_.call(null,x));

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__62546 = ((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta(v);
});})(m))
;
var G__62547 = ((function (G__62546,m){
return (function (){
return cljs.compiler.emit_constant_no_meta(m);
});})(G__62546,m))
;
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__62546,G__62547) : cljs.compiler.emit_with_meta.call(null,G__62546,G__62547));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__62567 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__62586 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__62586) : x.call(null,G__62586));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__62591 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__62591) : x.call(null,G__62591));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__62619 = items;
var G__62620 = ((function (G__62619,items){
return (function (p1__62614_SHARP_){
return ((function (G__62619,items){
return (function (){
return cljs.compiler.emit_constant(p1__62614_SHARP_);
});
;})(G__62619,items))
});})(G__62619,items))
;
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__62619,G__62620) : cljs.compiler.emit_js_object.call(null,G__62619,G__62620));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__62633){
var map__62634 = p__62633;
var map__62634__$1 = (((((!((map__62634 == null))))?(((((map__62634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62634):map__62634);
var ast = map__62634__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62634__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62634__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__62644 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__62644__$1 = (((((!((map__62644 == null))))?(((((map__62644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62644):map__62644);
var cenv = map__62644__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62644__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__62656 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__62658 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__62658) : cljs.compiler.es5_GT__EQ_.call(null,G__62658));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__62656,cljs.analyzer.es5_allowed);
} else {
return G__62656;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__62662 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__62662,reserved);
} else {
return G__62662;
}
})();
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__62666_63926 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__62666_63927__$1 = (((G__62666_63926 instanceof cljs.core.Keyword))?G__62666_63926.fqn:null);
switch (G__62666_63927__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__62679){
var map__62681 = p__62679;
var map__62681__$1 = (((((!((map__62681 == null))))?(((((map__62681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62681):map__62681);
var arg = map__62681__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__62689 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__62689__$1 = (((((!((map__62689 == null))))?(((((map__62689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62689):map__62689);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62689__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__62704){
var map__62707 = p__62704;
var map__62707__$1 = (((((!((map__62707 == null))))?(((((map__62707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62707):map__62707);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62707__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62707__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_(((function (keys__$1){
return (function (p1__62709_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__62709_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__62716 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__62716) : comma_sep.call(null,G__62716));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__62717 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__62717) : comma_sep.call(null,G__62717));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__62718){
var map__62719 = p__62718;
var map__62719__$1 = (((((!((map__62719 == null))))?(((((map__62719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62719):map__62719);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__62730){
var map__62731 = p__62730;
var map__62731__$1 = (((((!((map__62731 == null))))?(((((map__62731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62731):map__62731);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_(((function (items__$1){
return (function (p1__62735_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__62735_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__62742 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__62742) : comma_sep.call(null,G__62742));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__62745){
var map__62746 = p__62745;
var map__62746__$1 = (((((!((map__62746 == null))))?(((((map__62746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62746):map__62746);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62746__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62746__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5720__auto___63961 = cljs.core.seq(items);
if(temp__5720__auto___63961){
var items_63962__$1 = temp__5720__auto___63961;
var vec__62756_63963 = items_63962__$1;
var seq__62757_63964 = cljs.core.seq(vec__62756_63963);
var first__62758_63965 = cljs.core.first(seq__62757_63964);
var seq__62757_63966__$1 = cljs.core.next(seq__62757_63964);
var vec__62759_63967 = first__62758_63965;
var k_63968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62759_63967,(0),null);
var v_63969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62759_63967,(1),null);
var r_63970 = seq__62757_63966__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_63968),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_63969) : emit_js_object_val.call(null,v_63969)));

var seq__62765_63980 = cljs.core.seq(r_63970);
var chunk__62766_63981 = null;
var count__62767_63982 = (0);
var i__62768_63983 = (0);
while(true){
if((i__62768_63983 < count__62767_63982)){
var vec__62775_63984 = chunk__62766_63981.cljs$core$IIndexed$_nth$arity$2(null,i__62768_63983);
var k_63985__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62775_63984,(0),null);
var v_63986__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62775_63984,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_63985__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_63986__$1) : emit_js_object_val.call(null,v_63986__$1)));


var G__63987 = seq__62765_63980;
var G__63988 = chunk__62766_63981;
var G__63989 = count__62767_63982;
var G__63990 = (i__62768_63983 + (1));
seq__62765_63980 = G__63987;
chunk__62766_63981 = G__63988;
count__62767_63982 = G__63989;
i__62768_63983 = G__63990;
continue;
} else {
var temp__5720__auto___63991__$1 = cljs.core.seq(seq__62765_63980);
if(temp__5720__auto___63991__$1){
var seq__62765_63992__$1 = temp__5720__auto___63991__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62765_63992__$1)){
var c__4550__auto___63994 = cljs.core.chunk_first(seq__62765_63992__$1);
var G__63995 = cljs.core.chunk_rest(seq__62765_63992__$1);
var G__63996 = c__4550__auto___63994;
var G__63997 = cljs.core.count(c__4550__auto___63994);
var G__63998 = (0);
seq__62765_63980 = G__63995;
chunk__62766_63981 = G__63996;
count__62767_63982 = G__63997;
i__62768_63983 = G__63998;
continue;
} else {
var vec__62778_63999 = cljs.core.first(seq__62765_63992__$1);
var k_64000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62778_63999,(0),null);
var v_64001__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62778_63999,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_64000__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_64001__$1) : emit_js_object_val.call(null,v_64001__$1)));


var G__64002 = cljs.core.next(seq__62765_63992__$1);
var G__64003 = null;
var G__64004 = (0);
var G__64005 = (0);
seq__62765_63980 = G__64002;
chunk__62766_63981 = G__64003;
count__62767_63982 = G__64004;
i__62768_63983 = G__64005;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__62781){
var map__62782 = p__62781;
var map__62782__$1 = (((((!((map__62782 == null))))?(((((map__62782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62782):map__62782);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62782__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62782__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62782__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__62798){
var map__62802 = p__62798;
var map__62802__$1 = (((((!((map__62802 == null))))?(((((map__62802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62802):map__62802);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62802__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__62820){
var map__62821 = p__62820;
var map__62821__$1 = (((((!((map__62821 == null))))?(((((map__62821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62821):map__62821);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62821__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__62828){
var map__62829 = p__62828;
var map__62829__$1 = (((((!((map__62829 == null))))?(((((map__62829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62829):map__62829);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62829__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__62847 = cljs.analyzer.unwrap_quote(expr);
var map__62847__$1 = (((((!((map__62847 == null))))?(((((map__62847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62847):map__62847);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62847__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62847__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62847__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__62854 = cljs.analyzer.unwrap_quote(expr);
var map__62854__$1 = (((((!((map__62854 == null))))?(((((map__62854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62854):map__62854);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62854__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62854__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62854__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4131__auto__ = (function (){var fexpr__62857 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__62857.cljs$core$IFn$_invoke$arity$1 ? fexpr__62857.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__62857.call(null,tag));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__62862){
var map__62867 = p__62862;
var map__62867__$1 = (((((!((map__62867 == null))))?(((((map__62867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62867):map__62867);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__62874){
var map__62875 = p__62874;
var map__62875__$1 = (((((!((map__62875 == null))))?(((((map__62875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62875):map__62875);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62875__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62875__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62875__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__62880_64033 = cljs.core.seq(nodes);
var chunk__62881_64034 = null;
var count__62882_64035 = (0);
var i__62883_64036 = (0);
while(true){
if((i__62883_64036 < count__62882_64035)){
var map__62947_64037 = chunk__62881_64034.cljs$core$IIndexed$_nth$arity$2(null,i__62883_64036);
var map__62947_64038__$1 = (((((!((map__62947_64037 == null))))?(((((map__62947_64037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62947_64037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62947_64037):map__62947_64037);
var ts_64039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947_64038__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__62948_64040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947_64038__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__62948_64041__$1 = (((((!((map__62948_64040 == null))))?(((((map__62948_64040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62948_64040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62948_64040):map__62948_64040);
var then_64042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62948_64041__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__62967_64049 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_64039));
var chunk__62968_64050 = null;
var count__62969_64051 = (0);
var i__62970_64052 = (0);
while(true){
if((i__62970_64052 < count__62969_64051)){
var test_64053 = chunk__62968_64050.cljs$core$IIndexed$_nth$arity$2(null,i__62970_64052);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_64053,":");


var G__64054 = seq__62967_64049;
var G__64055 = chunk__62968_64050;
var G__64056 = count__62969_64051;
var G__64057 = (i__62970_64052 + (1));
seq__62967_64049 = G__64054;
chunk__62968_64050 = G__64055;
count__62969_64051 = G__64056;
i__62970_64052 = G__64057;
continue;
} else {
var temp__5720__auto___64061 = cljs.core.seq(seq__62967_64049);
if(temp__5720__auto___64061){
var seq__62967_64064__$1 = temp__5720__auto___64061;
if(cljs.core.chunked_seq_QMARK_(seq__62967_64064__$1)){
var c__4550__auto___64065 = cljs.core.chunk_first(seq__62967_64064__$1);
var G__64066 = cljs.core.chunk_rest(seq__62967_64064__$1);
var G__64067 = c__4550__auto___64065;
var G__64068 = cljs.core.count(c__4550__auto___64065);
var G__64069 = (0);
seq__62967_64049 = G__64066;
chunk__62968_64050 = G__64067;
count__62969_64051 = G__64068;
i__62970_64052 = G__64069;
continue;
} else {
var test_64070 = cljs.core.first(seq__62967_64064__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_64070,":");


var G__64071 = cljs.core.next(seq__62967_64064__$1);
var G__64072 = null;
var G__64073 = (0);
var G__64074 = (0);
seq__62967_64049 = G__64071;
chunk__62968_64050 = G__64072;
count__62969_64051 = G__64073;
i__62970_64052 = G__64074;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_64042);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_64042);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__64079 = seq__62880_64033;
var G__64080 = chunk__62881_64034;
var G__64081 = count__62882_64035;
var G__64082 = (i__62883_64036 + (1));
seq__62880_64033 = G__64079;
chunk__62881_64034 = G__64080;
count__62882_64035 = G__64081;
i__62883_64036 = G__64082;
continue;
} else {
var temp__5720__auto___64084 = cljs.core.seq(seq__62880_64033);
if(temp__5720__auto___64084){
var seq__62880_64085__$1 = temp__5720__auto___64084;
if(cljs.core.chunked_seq_QMARK_(seq__62880_64085__$1)){
var c__4550__auto___64086 = cljs.core.chunk_first(seq__62880_64085__$1);
var G__64087 = cljs.core.chunk_rest(seq__62880_64085__$1);
var G__64088 = c__4550__auto___64086;
var G__64089 = cljs.core.count(c__4550__auto___64086);
var G__64090 = (0);
seq__62880_64033 = G__64087;
chunk__62881_64034 = G__64088;
count__62882_64035 = G__64089;
i__62883_64036 = G__64090;
continue;
} else {
var map__62990_64091 = cljs.core.first(seq__62880_64085__$1);
var map__62990_64092__$1 = (((((!((map__62990_64091 == null))))?(((((map__62990_64091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62990_64091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62990_64091):map__62990_64091);
var ts_64093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62990_64092__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__62991_64094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62990_64092__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__62991_64095__$1 = (((((!((map__62991_64094 == null))))?(((((map__62991_64094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62991_64094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62991_64094):map__62991_64094);
var then_64096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62991_64095__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__62997_64097 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_64093));
var chunk__62998_64098 = null;
var count__62999_64099 = (0);
var i__63000_64100 = (0);
while(true){
if((i__63000_64100 < count__62999_64099)){
var test_64101 = chunk__62998_64098.cljs$core$IIndexed$_nth$arity$2(null,i__63000_64100);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_64101,":");


var G__64102 = seq__62997_64097;
var G__64103 = chunk__62998_64098;
var G__64104 = count__62999_64099;
var G__64105 = (i__63000_64100 + (1));
seq__62997_64097 = G__64102;
chunk__62998_64098 = G__64103;
count__62999_64099 = G__64104;
i__63000_64100 = G__64105;
continue;
} else {
var temp__5720__auto___64106__$1 = cljs.core.seq(seq__62997_64097);
if(temp__5720__auto___64106__$1){
var seq__62997_64107__$1 = temp__5720__auto___64106__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62997_64107__$1)){
var c__4550__auto___64108 = cljs.core.chunk_first(seq__62997_64107__$1);
var G__64109 = cljs.core.chunk_rest(seq__62997_64107__$1);
var G__64110 = c__4550__auto___64108;
var G__64111 = cljs.core.count(c__4550__auto___64108);
var G__64112 = (0);
seq__62997_64097 = G__64109;
chunk__62998_64098 = G__64110;
count__62999_64099 = G__64111;
i__63000_64100 = G__64112;
continue;
} else {
var test_64113 = cljs.core.first(seq__62997_64107__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_64113,":");


var G__64114 = cljs.core.next(seq__62997_64107__$1);
var G__64115 = null;
var G__64116 = (0);
var G__64117 = (0);
seq__62997_64097 = G__64114;
chunk__62998_64098 = G__64115;
count__62999_64099 = G__64116;
i__63000_64100 = G__64117;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_64096);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_64096);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__64118 = cljs.core.next(seq__62880_64085__$1);
var G__64119 = null;
var G__64120 = (0);
var G__64121 = (0);
seq__62880_64033 = G__64118;
chunk__62881_64034 = G__64119;
count__62882_64035 = G__64120;
i__62883_64036 = G__64121;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__63002){
var map__63003 = p__63002;
var map__63003__$1 = (((((!((map__63003 == null))))?(((((map__63003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63003):map__63003);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63003__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__63009 = env;
var G__63010 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__63009,G__63010) : cljs.compiler.resolve_type.call(null,G__63009,G__63010));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__63011 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63011,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63011,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__63011,fstr,rstr,ret_t,axstr){
return (function (p1__63006_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__63006_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__63006_SHARP_));
});})(idx,vec__63011,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__63014 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__63014,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__63014;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__63017 = env;
var G__63018 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__63017,G__63018) : cljs.compiler.resolve_type.call(null,G__63017,G__63018));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__63019_SHARP_){
return cljs.compiler.resolve_type(env,p1__63019_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__63020 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__63021 = cljs.core.seq(vec__63020);
var first__63022 = cljs.core.first(seq__63021);
var seq__63021__$1 = cljs.core.next(seq__63021);
var p = first__63022;
var first__63022__$1 = cljs.core.first(seq__63021__$1);
var seq__63021__$2 = cljs.core.next(seq__63021__$1);
var ts = first__63022__$1;
var first__63022__$2 = cljs.core.first(seq__63021__$2);
var seq__63021__$3 = cljs.core.next(seq__63021__$2);
var n = first__63022__$2;
var xs = seq__63021__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__63023 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__63024 = cljs.core.seq(vec__63023);
var first__63025 = cljs.core.first(seq__63024);
var seq__63024__$1 = cljs.core.next(seq__63024);
var p = first__63025;
var first__63025__$1 = cljs.core.first(seq__63024__$1);
var seq__63024__$2 = cljs.core.next(seq__63024__$1);
var ts = first__63025__$1;
var xs = seq__63024__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__63027 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__63026 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__63026.cljs$core$IFn$_invoke$arity$1 ? fexpr__63026.cljs$core$IFn$_invoke$arity$1(G__63027) : fexpr__63026.call(null,G__63027));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__63030 = arguments.length;
switch (G__63030) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__63047 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__63028_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__63028_SHARP_);
} else {
return p1__63028_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__63048 = cljs.core.seq(vec__63047);
var first__63049 = cljs.core.first(seq__63048);
var seq__63048__$1 = cljs.core.next(seq__63048);
var x = first__63049;
var ys = seq__63048__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__63052 = cljs.core.seq(ys);
var chunk__63053 = null;
var count__63054 = (0);
var i__63055 = (0);
while(true){
if((i__63055 < count__63054)){
var next_line = chunk__63053.cljs$core$IIndexed$_nth$arity$2(null,i__63055);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__64165 = seq__63052;
var G__64166 = chunk__63053;
var G__64167 = count__63054;
var G__64168 = (i__63055 + (1));
seq__63052 = G__64165;
chunk__63053 = G__64166;
count__63054 = G__64167;
i__63055 = G__64168;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63052);
if(temp__5720__auto__){
var seq__63052__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63052__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63052__$1);
var G__64169 = cljs.core.chunk_rest(seq__63052__$1);
var G__64170 = c__4550__auto__;
var G__64171 = cljs.core.count(c__4550__auto__);
var G__64172 = (0);
seq__63052 = G__64169;
chunk__63053 = G__64170;
count__63054 = G__64171;
i__63055 = G__64172;
continue;
} else {
var next_line = cljs.core.first(seq__63052__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__64173 = cljs.core.next(seq__63052__$1);
var G__64174 = null;
var G__64175 = (0);
var G__64176 = (0);
seq__63052 = G__64173;
chunk__63053 = G__64174;
count__63054 = G__64175;
i__63055 = G__64176;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__63062_64177 = cljs.core.seq(docs__$2);
var chunk__63063_64178 = null;
var count__63064_64179 = (0);
var i__63065_64180 = (0);
while(true){
if((i__63065_64180 < count__63064_64179)){
var e_64182 = chunk__63063_64178.cljs$core$IIndexed$_nth$arity$2(null,i__63065_64180);
if(cljs.core.truth_(e_64182)){
print_comment_lines(e_64182);
} else {
}


var G__64184 = seq__63062_64177;
var G__64185 = chunk__63063_64178;
var G__64186 = count__63064_64179;
var G__64187 = (i__63065_64180 + (1));
seq__63062_64177 = G__64184;
chunk__63063_64178 = G__64185;
count__63064_64179 = G__64186;
i__63065_64180 = G__64187;
continue;
} else {
var temp__5720__auto___64188 = cljs.core.seq(seq__63062_64177);
if(temp__5720__auto___64188){
var seq__63062_64189__$1 = temp__5720__auto___64188;
if(cljs.core.chunked_seq_QMARK_(seq__63062_64189__$1)){
var c__4550__auto___64190 = cljs.core.chunk_first(seq__63062_64189__$1);
var G__64191 = cljs.core.chunk_rest(seq__63062_64189__$1);
var G__64192 = c__4550__auto___64190;
var G__64193 = cljs.core.count(c__4550__auto___64190);
var G__64194 = (0);
seq__63062_64177 = G__64191;
chunk__63063_64178 = G__64192;
count__63064_64179 = G__64193;
i__63065_64180 = G__64194;
continue;
} else {
var e_64195 = cljs.core.first(seq__63062_64189__$1);
if(cljs.core.truth_(e_64195)){
print_comment_lines(e_64195);
} else {
}


var G__64197 = cljs.core.next(seq__63062_64189__$1);
var G__64198 = null;
var G__64199 = (0);
var G__64200 = (0);
seq__63062_64177 = G__64197;
chunk__63063_64178 = G__64198;
count__63064_64179 = G__64199;
i__63065_64180 = G__64200;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4120__auto__ = cljs.core.some(((function (opts){
return (function (p1__63077_SHARP_){
return goog.string.startsWith(p1__63077_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__63081){
var map__63082 = p__63081;
var map__63082__$1 = (((((!((map__63082 == null))))?(((((map__63082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63082):map__63082);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__63090){
var map__63091 = p__63090;
var map__63091__$1 = (((((!((map__63091 == null))))?(((((map__63091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63091):map__63091);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63091__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__63094_64234 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__63095_64235 = null;
var count__63096_64236 = (0);
var i__63097_64237 = (0);
while(true){
if((i__63097_64237 < count__63096_64236)){
var vec__63108_64239 = chunk__63095_64235.cljs$core$IIndexed$_nth$arity$2(null,i__63097_64237);
var i_64240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63108_64239,(0),null);
var param_64241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63108_64239,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_64241);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__64244 = seq__63094_64234;
var G__64245 = chunk__63095_64235;
var G__64246 = count__63096_64236;
var G__64247 = (i__63097_64237 + (1));
seq__63094_64234 = G__64244;
chunk__63095_64235 = G__64245;
count__63096_64236 = G__64246;
i__63097_64237 = G__64247;
continue;
} else {
var temp__5720__auto___64248 = cljs.core.seq(seq__63094_64234);
if(temp__5720__auto___64248){
var seq__63094_64250__$1 = temp__5720__auto___64248;
if(cljs.core.chunked_seq_QMARK_(seq__63094_64250__$1)){
var c__4550__auto___64251 = cljs.core.chunk_first(seq__63094_64250__$1);
var G__64252 = cljs.core.chunk_rest(seq__63094_64250__$1);
var G__64253 = c__4550__auto___64251;
var G__64254 = cljs.core.count(c__4550__auto___64251);
var G__64255 = (0);
seq__63094_64234 = G__64252;
chunk__63095_64235 = G__64253;
count__63096_64236 = G__64254;
i__63097_64237 = G__64255;
continue;
} else {
var vec__63112_64256 = cljs.core.first(seq__63094_64250__$1);
var i_64257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63112_64256,(0),null);
var param_64258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63112_64256,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_64258);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__64266 = cljs.core.next(seq__63094_64250__$1);
var G__64267 = null;
var G__64268 = (0);
var G__64269 = (0);
seq__63094_64234 = G__64266;
chunk__63095_64235 = G__64267;
count__63096_64236 = G__64268;
i__63097_64237 = G__64269;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__63119_64274 = cljs.core.seq(params);
var chunk__63120_64275 = null;
var count__63121_64276 = (0);
var i__63122_64277 = (0);
while(true){
if((i__63122_64277 < count__63121_64276)){
var param_64279 = chunk__63120_64275.cljs$core$IIndexed$_nth$arity$2(null,i__63122_64277);
cljs.compiler.emit(param_64279);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64279,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64280 = seq__63119_64274;
var G__64281 = chunk__63120_64275;
var G__64282 = count__63121_64276;
var G__64283 = (i__63122_64277 + (1));
seq__63119_64274 = G__64280;
chunk__63120_64275 = G__64281;
count__63121_64276 = G__64282;
i__63122_64277 = G__64283;
continue;
} else {
var temp__5720__auto___64284 = cljs.core.seq(seq__63119_64274);
if(temp__5720__auto___64284){
var seq__63119_64289__$1 = temp__5720__auto___64284;
if(cljs.core.chunked_seq_QMARK_(seq__63119_64289__$1)){
var c__4550__auto___64291 = cljs.core.chunk_first(seq__63119_64289__$1);
var G__64292 = cljs.core.chunk_rest(seq__63119_64289__$1);
var G__64293 = c__4550__auto___64291;
var G__64294 = cljs.core.count(c__4550__auto___64291);
var G__64295 = (0);
seq__63119_64274 = G__64292;
chunk__63120_64275 = G__64293;
count__63121_64276 = G__64294;
i__63122_64277 = G__64295;
continue;
} else {
var param_64296 = cljs.core.first(seq__63119_64289__$1);
cljs.compiler.emit(param_64296);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64296,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64301 = cljs.core.next(seq__63119_64289__$1);
var G__64302 = null;
var G__64303 = (0);
var G__64304 = (0);
seq__63119_64274 = G__64301;
chunk__63120_64275 = G__64302;
count__63121_64276 = G__64303;
i__63122_64277 = G__64304;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__63156_64309 = cljs.core.seq(params);
var chunk__63157_64310 = null;
var count__63158_64311 = (0);
var i__63159_64312 = (0);
while(true){
if((i__63159_64312 < count__63158_64311)){
var param_64314 = chunk__63157_64310.cljs$core$IIndexed$_nth$arity$2(null,i__63159_64312);
cljs.compiler.emit(param_64314);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64314,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64318 = seq__63156_64309;
var G__64319 = chunk__63157_64310;
var G__64320 = count__63158_64311;
var G__64321 = (i__63159_64312 + (1));
seq__63156_64309 = G__64318;
chunk__63157_64310 = G__64319;
count__63158_64311 = G__64320;
i__63159_64312 = G__64321;
continue;
} else {
var temp__5720__auto___64327 = cljs.core.seq(seq__63156_64309);
if(temp__5720__auto___64327){
var seq__63156_64328__$1 = temp__5720__auto___64327;
if(cljs.core.chunked_seq_QMARK_(seq__63156_64328__$1)){
var c__4550__auto___64329 = cljs.core.chunk_first(seq__63156_64328__$1);
var G__64330 = cljs.core.chunk_rest(seq__63156_64328__$1);
var G__64331 = c__4550__auto___64329;
var G__64332 = cljs.core.count(c__4550__auto___64329);
var G__64333 = (0);
seq__63156_64309 = G__64330;
chunk__63157_64310 = G__64331;
count__63158_64311 = G__64332;
i__63159_64312 = G__64333;
continue;
} else {
var param_64334 = cljs.core.first(seq__63156_64328__$1);
cljs.compiler.emit(param_64334);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64334,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64336 = cljs.core.next(seq__63156_64328__$1);
var G__64337 = null;
var G__64338 = (0);
var G__64339 = (0);
seq__63156_64309 = G__64336;
chunk__63157_64310 = G__64337;
count__63158_64311 = G__64338;
i__63159_64312 = G__64339;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__63191 = cljs.core.seq(params);
var chunk__63192 = null;
var count__63193 = (0);
var i__63194 = (0);
while(true){
if((i__63194 < count__63193)){
var param = chunk__63192.cljs$core$IIndexed$_nth$arity$2(null,i__63194);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64344 = seq__63191;
var G__64345 = chunk__63192;
var G__64346 = count__63193;
var G__64347 = (i__63194 + (1));
seq__63191 = G__64344;
chunk__63192 = G__64345;
count__63193 = G__64346;
i__63194 = G__64347;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63191);
if(temp__5720__auto__){
var seq__63191__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63191__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63191__$1);
var G__64349 = cljs.core.chunk_rest(seq__63191__$1);
var G__64350 = c__4550__auto__;
var G__64351 = cljs.core.count(c__4550__auto__);
var G__64352 = (0);
seq__63191 = G__64349;
chunk__63192 = G__64350;
count__63193 = G__64351;
i__63194 = G__64352;
continue;
} else {
var param = cljs.core.first(seq__63191__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64355 = cljs.core.next(seq__63191__$1);
var G__64356 = null;
var G__64358 = (0);
var G__64359 = (0);
seq__63191 = G__64355;
chunk__63192 = G__64356;
count__63193 = G__64358;
i__63194 = G__64359;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__63200){
var map__63201 = p__63200;
var map__63201__$1 = (((((!((map__63201 == null))))?(((((map__63201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63201):map__63201);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__63214){
var map__63215 = p__63214;
var map__63215__$1 = (((((!((map__63215 == null))))?(((((map__63215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63215):map__63215);
var f = map__63215__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_64369__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_64370 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_64369__$1);
var delegate_name_64371 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_64370),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_64371," = function (");

var seq__63218_64372 = cljs.core.seq(params);
var chunk__63219_64373 = null;
var count__63220_64374 = (0);
var i__63221_64375 = (0);
while(true){
if((i__63221_64375 < count__63220_64374)){
var param_64380 = chunk__63219_64373.cljs$core$IIndexed$_nth$arity$2(null,i__63221_64375);
cljs.compiler.emit(param_64380);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64380,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64381 = seq__63218_64372;
var G__64382 = chunk__63219_64373;
var G__64383 = count__63220_64374;
var G__64384 = (i__63221_64375 + (1));
seq__63218_64372 = G__64381;
chunk__63219_64373 = G__64382;
count__63220_64374 = G__64383;
i__63221_64375 = G__64384;
continue;
} else {
var temp__5720__auto___64385 = cljs.core.seq(seq__63218_64372);
if(temp__5720__auto___64385){
var seq__63218_64386__$1 = temp__5720__auto___64385;
if(cljs.core.chunked_seq_QMARK_(seq__63218_64386__$1)){
var c__4550__auto___64387 = cljs.core.chunk_first(seq__63218_64386__$1);
var G__64388 = cljs.core.chunk_rest(seq__63218_64386__$1);
var G__64389 = c__4550__auto___64387;
var G__64390 = cljs.core.count(c__4550__auto___64387);
var G__64391 = (0);
seq__63218_64372 = G__64388;
chunk__63219_64373 = G__64389;
count__63220_64374 = G__64390;
i__63221_64375 = G__64391;
continue;
} else {
var param_64392 = cljs.core.first(seq__63218_64386__$1);
cljs.compiler.emit(param_64392);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64392,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64393 = cljs.core.next(seq__63218_64386__$1);
var G__64394 = null;
var G__64395 = (0);
var G__64396 = (0);
seq__63218_64372 = G__64393;
chunk__63219_64373 = G__64394;
count__63220_64374 = G__64395;
i__63221_64375 = G__64396;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_64370," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_64401 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_64401,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_64371,".call(this,");

var seq__63227_64402 = cljs.core.seq(params);
var chunk__63228_64403 = null;
var count__63229_64404 = (0);
var i__63230_64405 = (0);
while(true){
if((i__63230_64405 < count__63229_64404)){
var param_64406 = chunk__63228_64403.cljs$core$IIndexed$_nth$arity$2(null,i__63230_64405);
cljs.compiler.emit(param_64406);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64406,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64411 = seq__63227_64402;
var G__64412 = chunk__63228_64403;
var G__64413 = count__63229_64404;
var G__64414 = (i__63230_64405 + (1));
seq__63227_64402 = G__64411;
chunk__63228_64403 = G__64412;
count__63229_64404 = G__64413;
i__63230_64405 = G__64414;
continue;
} else {
var temp__5720__auto___64415 = cljs.core.seq(seq__63227_64402);
if(temp__5720__auto___64415){
var seq__63227_64416__$1 = temp__5720__auto___64415;
if(cljs.core.chunked_seq_QMARK_(seq__63227_64416__$1)){
var c__4550__auto___64417 = cljs.core.chunk_first(seq__63227_64416__$1);
var G__64418 = cljs.core.chunk_rest(seq__63227_64416__$1);
var G__64419 = c__4550__auto___64417;
var G__64420 = cljs.core.count(c__4550__auto___64417);
var G__64421 = (0);
seq__63227_64402 = G__64418;
chunk__63228_64403 = G__64419;
count__63229_64404 = G__64420;
i__63230_64405 = G__64421;
continue;
} else {
var param_64422 = cljs.core.first(seq__63227_64416__$1);
cljs.compiler.emit(param_64422);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_64422,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__64423 = cljs.core.next(seq__63227_64416__$1);
var G__64424 = null;
var G__64425 = (0);
var G__64426 = (0);
seq__63227_64402 = G__64423;
chunk__63228_64403 = G__64424;
count__63229_64404 = G__64425;
i__63230_64405 = G__64426;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_64370,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_64370,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_64369__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_64370,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_64371,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_64370,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__63244){
var map__63246 = p__63244;
var map__63246__$1 = (((((!((map__63246 == null))))?(((((map__63246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63246):map__63246);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63246__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63246__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63246__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63246__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63246__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63246__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__63240_SHARP_){
var and__4120__auto__ = p1__63240_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__63240_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_64439__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_64440 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_64439__$1);
var maxparams_64441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_64442 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_64439__$1,mname_64440,maxparams_64441,loop_locals,map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_64440),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_64439__$1,mname_64440,maxparams_64441,loop_locals,map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_64443 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_64439__$1,mname_64440,maxparams_64441,mmap_64442,loop_locals,map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__63241_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63241_SHARP_)));
});})(name_64439__$1,mname_64440,maxparams_64441,mmap_64442,loop_locals,map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq(mmap_64442));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_64440," = null;");

var seq__63254_64457 = cljs.core.seq(ms_64443);
var chunk__63255_64458 = null;
var count__63256_64459 = (0);
var i__63257_64460 = (0);
while(true){
if((i__63257_64460 < count__63256_64459)){
var vec__63267_64461 = chunk__63255_64458.cljs$core$IIndexed$_nth$arity$2(null,i__63257_64460);
var n_64462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63267_64461,(0),null);
var meth_64463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63267_64461,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_64462," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_64463))){
cljs.compiler.emit_variadic_fn_method(meth_64463);
} else {
cljs.compiler.emit_fn_method(meth_64463);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__64464 = seq__63254_64457;
var G__64465 = chunk__63255_64458;
var G__64466 = count__63256_64459;
var G__64467 = (i__63257_64460 + (1));
seq__63254_64457 = G__64464;
chunk__63255_64458 = G__64465;
count__63256_64459 = G__64466;
i__63257_64460 = G__64467;
continue;
} else {
var temp__5720__auto___64469 = cljs.core.seq(seq__63254_64457);
if(temp__5720__auto___64469){
var seq__63254_64470__$1 = temp__5720__auto___64469;
if(cljs.core.chunked_seq_QMARK_(seq__63254_64470__$1)){
var c__4550__auto___64472 = cljs.core.chunk_first(seq__63254_64470__$1);
var G__64473 = cljs.core.chunk_rest(seq__63254_64470__$1);
var G__64474 = c__4550__auto___64472;
var G__64475 = cljs.core.count(c__4550__auto___64472);
var G__64476 = (0);
seq__63254_64457 = G__64473;
chunk__63255_64458 = G__64474;
count__63256_64459 = G__64475;
i__63257_64460 = G__64476;
continue;
} else {
var vec__63271_64478 = cljs.core.first(seq__63254_64470__$1);
var n_64479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63271_64478,(0),null);
var meth_64480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63271_64478,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_64479," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_64480))){
cljs.compiler.emit_variadic_fn_method(meth_64480);
} else {
cljs.compiler.emit_fn_method(meth_64480);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__64481 = cljs.core.next(seq__63254_64470__$1);
var G__64482 = null;
var G__64483 = (0);
var G__64484 = (0);
seq__63254_64457 = G__64481;
chunk__63255_64458 = G__64482;
count__63256_64459 = G__64483;
i__63257_64460 = G__64484;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_64440," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_64441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_64441)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_64441));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__63274_64489 = cljs.core.seq(ms_64443);
var chunk__63275_64490 = null;
var count__63276_64491 = (0);
var i__63277_64492 = (0);
while(true){
if((i__63277_64492 < count__63276_64491)){
var vec__63294_64493 = chunk__63275_64490.cljs$core$IIndexed$_nth$arity$2(null,i__63277_64492);
var n_64494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294_64493,(0),null);
var meth_64495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294_64493,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_64495))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_64496 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_64496," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_64497 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_64496," = new cljs.core.IndexedSeq(",a_64497,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_64494,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_64441)),(((cljs.core.count(maxparams_64441) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_64496,");"], 0));
} else {
var pcnt_64499 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_64495));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_64499,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_64494,".call(this",(((pcnt_64499 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_64499,maxparams_64441)),null,(1),null)),(2),null))),");");
}


var G__64502 = seq__63274_64489;
var G__64503 = chunk__63275_64490;
var G__64504 = count__63276_64491;
var G__64505 = (i__63277_64492 + (1));
seq__63274_64489 = G__64502;
chunk__63275_64490 = G__64503;
count__63276_64491 = G__64504;
i__63277_64492 = G__64505;
continue;
} else {
var temp__5720__auto___64506 = cljs.core.seq(seq__63274_64489);
if(temp__5720__auto___64506){
var seq__63274_64507__$1 = temp__5720__auto___64506;
if(cljs.core.chunked_seq_QMARK_(seq__63274_64507__$1)){
var c__4550__auto___64508 = cljs.core.chunk_first(seq__63274_64507__$1);
var G__64514 = cljs.core.chunk_rest(seq__63274_64507__$1);
var G__64515 = c__4550__auto___64508;
var G__64516 = cljs.core.count(c__4550__auto___64508);
var G__64517 = (0);
seq__63274_64489 = G__64514;
chunk__63275_64490 = G__64515;
count__63276_64491 = G__64516;
i__63277_64492 = G__64517;
continue;
} else {
var vec__63301_64518 = cljs.core.first(seq__63274_64507__$1);
var n_64519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63301_64518,(0),null);
var meth_64520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63301_64518,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_64520))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_64521 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_64521," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_64522 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_64521," = new cljs.core.IndexedSeq(",a_64522,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_64519,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_64441)),(((cljs.core.count(maxparams_64441) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_64521,");"], 0));
} else {
var pcnt_64524 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_64520));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_64524,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_64519,".call(this",(((pcnt_64524 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_64524,maxparams_64441)),null,(1),null)),(2),null))),");");
}


var G__64525 = cljs.core.next(seq__63274_64507__$1);
var G__64526 = null;
var G__64527 = (0);
var G__64528 = (0);
seq__63274_64489 = G__64525;
chunk__63275_64490 = G__64526;
count__63276_64491 = G__64527;
i__63277_64492 = G__64528;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_64529 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_64443)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_64529,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_64440,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_64440,".cljs$lang$applyTo = ",cljs.core.some(((function (name_64439__$1,mname_64440,maxparams_64441,mmap_64442,ms_64443,loop_locals,map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__63243_SHARP_){
var vec__63312 = p1__63243_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63312,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63312,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_64439__$1,mname_64440,maxparams_64441,mmap_64442,ms_64443,loop_locals,map__63246,map__63246__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_64443),".cljs$lang$applyTo;");
} else {
}

var seq__63315_64530 = cljs.core.seq(ms_64443);
var chunk__63316_64531 = null;
var count__63317_64532 = (0);
var i__63318_64533 = (0);
while(true){
if((i__63318_64533 < count__63317_64532)){
var vec__63328_64534 = chunk__63316_64531.cljs$core$IIndexed$_nth$arity$2(null,i__63318_64533);
var n_64535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63328_64534,(0),null);
var meth_64536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63328_64534,(1),null);
var c_64537 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_64536));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_64536))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_64440,".cljs$core$IFn$_invoke$arity$variadic = ",n_64535,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_64440,".cljs$core$IFn$_invoke$arity$",c_64537," = ",n_64535,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__64540 = seq__63315_64530;
var G__64541 = chunk__63316_64531;
var G__64542 = count__63317_64532;
var G__64543 = (i__63318_64533 + (1));
seq__63315_64530 = G__64540;
chunk__63316_64531 = G__64541;
count__63317_64532 = G__64542;
i__63318_64533 = G__64543;
continue;
} else {
var temp__5720__auto___64545 = cljs.core.seq(seq__63315_64530);
if(temp__5720__auto___64545){
var seq__63315_64546__$1 = temp__5720__auto___64545;
if(cljs.core.chunked_seq_QMARK_(seq__63315_64546__$1)){
var c__4550__auto___64547 = cljs.core.chunk_first(seq__63315_64546__$1);
var G__64548 = cljs.core.chunk_rest(seq__63315_64546__$1);
var G__64549 = c__4550__auto___64547;
var G__64550 = cljs.core.count(c__4550__auto___64547);
var G__64551 = (0);
seq__63315_64530 = G__64548;
chunk__63316_64531 = G__64549;
count__63317_64532 = G__64550;
i__63318_64533 = G__64551;
continue;
} else {
var vec__63335_64552 = cljs.core.first(seq__63315_64546__$1);
var n_64553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63335_64552,(0),null);
var meth_64554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63335_64552,(1),null);
var c_64555 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_64554));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_64554))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_64440,".cljs$core$IFn$_invoke$arity$variadic = ",n_64553,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_64440,".cljs$core$IFn$_invoke$arity$",c_64555," = ",n_64553,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__64580 = cljs.core.next(seq__63315_64546__$1);
var G__64581 = null;
var G__64582 = (0);
var G__64583 = (0);
seq__63315_64530 = G__64580;
chunk__63316_64531 = G__64581;
count__63317_64532 = G__64582;
i__63318_64533 = G__64583;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_64440,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__63338){
var map__63339 = p__63338;
var map__63339__$1 = (((((!((map__63339 == null))))?(((((map__63339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63339):map__63339);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63339__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63339__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__63343_64586 = cljs.core.seq(statements);
var chunk__63344_64587 = null;
var count__63345_64588 = (0);
var i__63346_64589 = (0);
while(true){
if((i__63346_64589 < count__63345_64588)){
var s_64591 = chunk__63344_64587.cljs$core$IIndexed$_nth$arity$2(null,i__63346_64589);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_64591);


var G__64592 = seq__63343_64586;
var G__64593 = chunk__63344_64587;
var G__64594 = count__63345_64588;
var G__64595 = (i__63346_64589 + (1));
seq__63343_64586 = G__64592;
chunk__63344_64587 = G__64593;
count__63345_64588 = G__64594;
i__63346_64589 = G__64595;
continue;
} else {
var temp__5720__auto___64596 = cljs.core.seq(seq__63343_64586);
if(temp__5720__auto___64596){
var seq__63343_64597__$1 = temp__5720__auto___64596;
if(cljs.core.chunked_seq_QMARK_(seq__63343_64597__$1)){
var c__4550__auto___64599 = cljs.core.chunk_first(seq__63343_64597__$1);
var G__64600 = cljs.core.chunk_rest(seq__63343_64597__$1);
var G__64601 = c__4550__auto___64599;
var G__64602 = cljs.core.count(c__4550__auto___64599);
var G__64603 = (0);
seq__63343_64586 = G__64600;
chunk__63344_64587 = G__64601;
count__63345_64588 = G__64602;
i__63346_64589 = G__64603;
continue;
} else {
var s_64605 = cljs.core.first(seq__63343_64597__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_64605);


var G__64606 = cljs.core.next(seq__63343_64597__$1);
var G__64607 = null;
var G__64608 = (0);
var G__64609 = (0);
seq__63343_64586 = G__64606;
chunk__63344_64587 = G__64607;
count__63345_64588 = G__64608;
i__63346_64589 = G__64609;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__63347){
var map__63348 = p__63347;
var map__63348__$1 = (((((!((map__63348 == null))))?(((((map__63348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63348):map__63348);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__63350,is_loop){
var map__63351 = p__63350;
var map__63351__$1 = (((((!((map__63351 == null))))?(((((map__63351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63351):map__63351);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63351__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63351__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__63354_64627 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__63355_64628 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR__orig_val__63354_64627,context,map__63351,map__63351__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__63354_64627,context,map__63351,map__63351__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__63355_64628;

try{var seq__63356_64632 = cljs.core.seq(bindings);
var chunk__63357_64633 = null;
var count__63358_64634 = (0);
var i__63359_64635 = (0);
while(true){
if((i__63359_64635 < count__63358_64634)){
var map__63367_64636 = chunk__63357_64633.cljs$core$IIndexed$_nth$arity$2(null,i__63359_64635);
var map__63367_64637__$1 = (((((!((map__63367_64636 == null))))?(((((map__63367_64636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63367_64636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63367_64636):map__63367_64636);
var binding_64638 = map__63367_64637__$1;
var init_64639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63367_64637__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_64638);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_64639,";");


var G__64641 = seq__63356_64632;
var G__64642 = chunk__63357_64633;
var G__64643 = count__63358_64634;
var G__64644 = (i__63359_64635 + (1));
seq__63356_64632 = G__64641;
chunk__63357_64633 = G__64642;
count__63358_64634 = G__64643;
i__63359_64635 = G__64644;
continue;
} else {
var temp__5720__auto___64667 = cljs.core.seq(seq__63356_64632);
if(temp__5720__auto___64667){
var seq__63356_64668__$1 = temp__5720__auto___64667;
if(cljs.core.chunked_seq_QMARK_(seq__63356_64668__$1)){
var c__4550__auto___64669 = cljs.core.chunk_first(seq__63356_64668__$1);
var G__64670 = cljs.core.chunk_rest(seq__63356_64668__$1);
var G__64671 = c__4550__auto___64669;
var G__64672 = cljs.core.count(c__4550__auto___64669);
var G__64673 = (0);
seq__63356_64632 = G__64670;
chunk__63357_64633 = G__64671;
count__63358_64634 = G__64672;
i__63359_64635 = G__64673;
continue;
} else {
var map__63371_64674 = cljs.core.first(seq__63356_64668__$1);
var map__63371_64675__$1 = (((((!((map__63371_64674 == null))))?(((((map__63371_64674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63371_64674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63371_64674):map__63371_64674);
var binding_64676 = map__63371_64675__$1;
var init_64677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63371_64675__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_64676);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_64677,";");


var G__64678 = cljs.core.next(seq__63356_64668__$1);
var G__64679 = null;
var G__64680 = (0);
var G__64681 = (0);
seq__63356_64632 = G__64678;
chunk__63357_64633 = G__64679;
count__63358_64634 = G__64680;
i__63359_64635 = G__64681;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__63354_64627;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__63374){
var map__63375 = p__63374;
var map__63375__$1 = (((((!((map__63375 == null))))?(((((map__63375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63375):map__63375);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___64689 = cljs.core.count(exprs);
var i_64690 = (0);
while(true){
if((i_64690 < n__4607__auto___64689)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_64690) : temps.call(null,i_64690))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_64690) : exprs.call(null,i_64690)),";");

var G__64693 = (i_64690 + (1));
i_64690 = G__64693;
continue;
} else {
}
break;
}

var n__4607__auto___64694 = cljs.core.count(exprs);
var i_64695 = (0);
while(true){
if((i_64695 < n__4607__auto___64694)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_64695) : params.call(null,i_64695)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_64695) : temps.call(null,i_64695)),";");

var G__64696 = (i_64695 + (1));
i_64695 = G__64696;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__63380){
var map__63381 = p__63380;
var map__63381__$1 = (((((!((map__63381 == null))))?(((((map__63381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63381):map__63381);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63381__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63381__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__63383_64701 = cljs.core.seq(bindings);
var chunk__63384_64702 = null;
var count__63385_64703 = (0);
var i__63386_64704 = (0);
while(true){
if((i__63386_64704 < count__63385_64703)){
var map__63395_64706 = chunk__63384_64702.cljs$core$IIndexed$_nth$arity$2(null,i__63386_64704);
var map__63395_64707__$1 = (((((!((map__63395_64706 == null))))?(((((map__63395_64706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63395_64706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63395_64706):map__63395_64706);
var binding_64708 = map__63395_64707__$1;
var init_64709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63395_64707__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_64708)," = ",init_64709,";");


var G__64715 = seq__63383_64701;
var G__64716 = chunk__63384_64702;
var G__64717 = count__63385_64703;
var G__64718 = (i__63386_64704 + (1));
seq__63383_64701 = G__64715;
chunk__63384_64702 = G__64716;
count__63385_64703 = G__64717;
i__63386_64704 = G__64718;
continue;
} else {
var temp__5720__auto___64719 = cljs.core.seq(seq__63383_64701);
if(temp__5720__auto___64719){
var seq__63383_64720__$1 = temp__5720__auto___64719;
if(cljs.core.chunked_seq_QMARK_(seq__63383_64720__$1)){
var c__4550__auto___64722 = cljs.core.chunk_first(seq__63383_64720__$1);
var G__64723 = cljs.core.chunk_rest(seq__63383_64720__$1);
var G__64724 = c__4550__auto___64722;
var G__64725 = cljs.core.count(c__4550__auto___64722);
var G__64726 = (0);
seq__63383_64701 = G__64723;
chunk__63384_64702 = G__64724;
count__63385_64703 = G__64725;
i__63386_64704 = G__64726;
continue;
} else {
var map__63397_64728 = cljs.core.first(seq__63383_64720__$1);
var map__63397_64729__$1 = (((((!((map__63397_64728 == null))))?(((((map__63397_64728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63397_64728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63397_64728):map__63397_64728);
var binding_64730 = map__63397_64729__$1;
var init_64731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63397_64729__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_64730)," = ",init_64731,";");


var G__64732 = cljs.core.next(seq__63383_64720__$1);
var G__64733 = null;
var G__64734 = (0);
var G__64735 = (0);
seq__63383_64701 = G__64732;
chunk__63384_64702 = G__64733;
count__63385_64703 = G__64734;
i__63386_64704 = G__64735;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__63407){
var map__63408 = p__63407;
var map__63408__$1 = (((((!((map__63408 == null))))?(((((map__63408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63408):map__63408);
var expr = map__63408__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63408__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63408__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63408__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not((function (){var fexpr__63421 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__63421.cljs$core$IFn$_invoke$arity$1 ? fexpr__63421.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__63421.call(null,tag));
})());
if(and__4120__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag(env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__63410 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env){
return (function (p1__63404_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63404_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env){
return (function (p1__63406_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63406_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63408,map__63408__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63410,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63410,(1),null);
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_64798 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_64798,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_64801 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_64801,args)),(((mfa_64801 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_64801,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var G__63439 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__63438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__63438.cljs$core$IFn$_invoke$arity$1 ? fexpr__63438.cljs$core$IFn$_invoke$arity$1(G__63439) : fexpr__63438.call(null,G__63439));
} else {
return and__4120__auto__;
}
})())){
var fprop_64804 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_64804," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_64804,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_64804," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_64804,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__63444){
var map__63445 = p__63444;
var map__63445__$1 = (((((!((map__63445 == null))))?(((((map__63445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63445):map__63445);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63445__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63445__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63445__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__63447){
var map__63448 = p__63447;
var map__63448__$1 = (((((!((map__63448 == null))))?(((((map__63448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63448):map__63448);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63448__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63448__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target," = ",val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__63461 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__63461__$1 = (((((!((map__63461 == null))))?(((((map__63461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63461):map__63461);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63461__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63461__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__63462 = options;
var map__63462__$1 = (((((!((map__63462 == null))))?(((((map__63462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63462):map__63462);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63462__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63462__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__63463 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__63480 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__63480__$1 = (((((!((map__63480 == null))))?(((((map__63480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63480):map__63480);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63480__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63480__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63463,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63463,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__63482_64846 = cljs.core.seq(libs_to_load);
var chunk__63483_64847 = null;
var count__63484_64848 = (0);
var i__63485_64849 = (0);
while(true){
if((i__63485_64849 < count__63484_64848)){
var lib_64853 = chunk__63483_64847.cljs$core$IIndexed$_nth$arity$2(null,i__63485_64849);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_64853)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_64853),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_64853),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_64853),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_64853),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_64853,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_64853),"');");
}

}
}
}


var G__64863 = seq__63482_64846;
var G__64864 = chunk__63483_64847;
var G__64865 = count__63484_64848;
var G__64866 = (i__63485_64849 + (1));
seq__63482_64846 = G__64863;
chunk__63483_64847 = G__64864;
count__63484_64848 = G__64865;
i__63485_64849 = G__64866;
continue;
} else {
var temp__5720__auto___64868 = cljs.core.seq(seq__63482_64846);
if(temp__5720__auto___64868){
var seq__63482_64869__$1 = temp__5720__auto___64868;
if(cljs.core.chunked_seq_QMARK_(seq__63482_64869__$1)){
var c__4550__auto___64870 = cljs.core.chunk_first(seq__63482_64869__$1);
var G__64878 = cljs.core.chunk_rest(seq__63482_64869__$1);
var G__64879 = c__4550__auto___64870;
var G__64880 = cljs.core.count(c__4550__auto___64870);
var G__64881 = (0);
seq__63482_64846 = G__64878;
chunk__63483_64847 = G__64879;
count__63484_64848 = G__64880;
i__63485_64849 = G__64881;
continue;
} else {
var lib_64882 = cljs.core.first(seq__63482_64869__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_64882)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_64882),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_64882),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_64882),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_64882),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_64882,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_64882),"');");
}

}
}
}


var G__64884 = cljs.core.next(seq__63482_64869__$1);
var G__64885 = null;
var G__64886 = (0);
var G__64887 = (0);
seq__63482_64846 = G__64884;
chunk__63483_64847 = G__64885;
count__63484_64848 = G__64886;
i__63485_64849 = G__64887;
continue;
}
} else {
}
}
break;
}

var seq__63494_64890 = cljs.core.seq(node_libs);
var chunk__63495_64891 = null;
var count__63496_64892 = (0);
var i__63497_64893 = (0);
while(true){
if((i__63497_64893 < count__63496_64892)){
var lib_64894 = chunk__63495_64891.cljs$core$IIndexed$_nth$arity$2(null,i__63497_64893);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_64894)," = require('",lib_64894,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__64899 = seq__63494_64890;
var G__64900 = chunk__63495_64891;
var G__64901 = count__63496_64892;
var G__64902 = (i__63497_64893 + (1));
seq__63494_64890 = G__64899;
chunk__63495_64891 = G__64900;
count__63496_64892 = G__64901;
i__63497_64893 = G__64902;
continue;
} else {
var temp__5720__auto___64903 = cljs.core.seq(seq__63494_64890);
if(temp__5720__auto___64903){
var seq__63494_64904__$1 = temp__5720__auto___64903;
if(cljs.core.chunked_seq_QMARK_(seq__63494_64904__$1)){
var c__4550__auto___64905 = cljs.core.chunk_first(seq__63494_64904__$1);
var G__64906 = cljs.core.chunk_rest(seq__63494_64904__$1);
var G__64907 = c__4550__auto___64905;
var G__64908 = cljs.core.count(c__4550__auto___64905);
var G__64909 = (0);
seq__63494_64890 = G__64906;
chunk__63495_64891 = G__64907;
count__63496_64892 = G__64908;
i__63497_64893 = G__64909;
continue;
} else {
var lib_64910 = cljs.core.first(seq__63494_64904__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_64910)," = require('",lib_64910,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__64911 = cljs.core.next(seq__63494_64904__$1);
var G__64912 = null;
var G__64913 = (0);
var G__64914 = (0);
seq__63494_64890 = G__64911;
chunk__63495_64891 = G__64912;
count__63496_64892 = G__64913;
i__63497_64893 = G__64914;
continue;
}
} else {
}
}
break;
}

var seq__63510_64915 = cljs.core.seq(global_exports_libs);
var chunk__63511_64916 = null;
var count__63512_64917 = (0);
var i__63513_64918 = (0);
while(true){
if((i__63513_64918 < count__63512_64917)){
var lib_64920 = chunk__63511_64916.cljs$core$IIndexed$_nth$arity$2(null,i__63513_64918);
var map__63536_64921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_64920));
var map__63536_64922__$1 = (((((!((map__63536_64921 == null))))?(((((map__63536_64921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63536_64921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63536_64921):map__63536_64921);
var global_exports_64923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63536_64922__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_64923,lib_64920);


var G__64925 = seq__63510_64915;
var G__64926 = chunk__63511_64916;
var G__64927 = count__63512_64917;
var G__64928 = (i__63513_64918 + (1));
seq__63510_64915 = G__64925;
chunk__63511_64916 = G__64926;
count__63512_64917 = G__64927;
i__63513_64918 = G__64928;
continue;
} else {
var temp__5720__auto___64929 = cljs.core.seq(seq__63510_64915);
if(temp__5720__auto___64929){
var seq__63510_64930__$1 = temp__5720__auto___64929;
if(cljs.core.chunked_seq_QMARK_(seq__63510_64930__$1)){
var c__4550__auto___64931 = cljs.core.chunk_first(seq__63510_64930__$1);
var G__64932 = cljs.core.chunk_rest(seq__63510_64930__$1);
var G__64933 = c__4550__auto___64931;
var G__64934 = cljs.core.count(c__4550__auto___64931);
var G__64935 = (0);
seq__63510_64915 = G__64932;
chunk__63511_64916 = G__64933;
count__63512_64917 = G__64934;
i__63513_64918 = G__64935;
continue;
} else {
var lib_64936 = cljs.core.first(seq__63510_64930__$1);
var map__63538_64937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_64936));
var map__63538_64938__$1 = (((((!((map__63538_64937 == null))))?(((((map__63538_64937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63538_64937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63538_64937):map__63538_64937);
var global_exports_64939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63538_64938__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_64939,lib_64936);


var G__64942 = cljs.core.next(seq__63510_64930__$1);
var G__64943 = null;
var G__64944 = (0);
var G__64945 = (0);
seq__63510_64915 = G__64942;
chunk__63511_64916 = G__64943;
count__63512_64917 = G__64944;
i__63513_64918 = G__64945;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__63540){
var map__63541 = p__63540;
var map__63541__$1 = (((((!((map__63541 == null))))?(((((map__63541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63541):map__63541);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63541__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63541__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63541__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63541__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63541__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63541__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__63543){
var map__63544 = p__63543;
var map__63544__$1 = (((((!((map__63544 == null))))?(((((map__63544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63544):map__63544);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__63546){
var map__63547 = p__63546;
var map__63547__$1 = (((((!((map__63547 == null))))?(((((map__63547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63547):map__63547);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63547__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63547__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63547__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63547__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63547__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__63549_64946 = cljs.core.seq(protocols);
var chunk__63550_64947 = null;
var count__63551_64948 = (0);
var i__63552_64949 = (0);
while(true){
if((i__63552_64949 < count__63551_64948)){
var protocol_64950 = chunk__63550_64947.cljs$core$IIndexed$_nth$arity$2(null,i__63552_64949);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_64950)),"}");


var G__64951 = seq__63549_64946;
var G__64952 = chunk__63550_64947;
var G__64953 = count__63551_64948;
var G__64954 = (i__63552_64949 + (1));
seq__63549_64946 = G__64951;
chunk__63550_64947 = G__64952;
count__63551_64948 = G__64953;
i__63552_64949 = G__64954;
continue;
} else {
var temp__5720__auto___64955 = cljs.core.seq(seq__63549_64946);
if(temp__5720__auto___64955){
var seq__63549_64956__$1 = temp__5720__auto___64955;
if(cljs.core.chunked_seq_QMARK_(seq__63549_64956__$1)){
var c__4550__auto___64957 = cljs.core.chunk_first(seq__63549_64956__$1);
var G__64958 = cljs.core.chunk_rest(seq__63549_64956__$1);
var G__64959 = c__4550__auto___64957;
var G__64960 = cljs.core.count(c__4550__auto___64957);
var G__64961 = (0);
seq__63549_64946 = G__64958;
chunk__63550_64947 = G__64959;
count__63551_64948 = G__64960;
i__63552_64949 = G__64961;
continue;
} else {
var protocol_64962 = cljs.core.first(seq__63549_64956__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_64962)),"}");


var G__64963 = cljs.core.next(seq__63549_64956__$1);
var G__64964 = null;
var G__64965 = (0);
var G__64966 = (0);
seq__63549_64946 = G__64963;
chunk__63550_64947 = G__64964;
count__63551_64948 = G__64965;
i__63552_64949 = G__64966;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__63565_64967 = cljs.core.seq(fields__$1);
var chunk__63566_64968 = null;
var count__63567_64969 = (0);
var i__63568_64970 = (0);
while(true){
if((i__63568_64970 < count__63567_64969)){
var fld_64971 = chunk__63566_64968.cljs$core$IIndexed$_nth$arity$2(null,i__63568_64970);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_64971," = ",fld_64971,";");


var G__64973 = seq__63565_64967;
var G__64974 = chunk__63566_64968;
var G__64975 = count__63567_64969;
var G__64976 = (i__63568_64970 + (1));
seq__63565_64967 = G__64973;
chunk__63566_64968 = G__64974;
count__63567_64969 = G__64975;
i__63568_64970 = G__64976;
continue;
} else {
var temp__5720__auto___64977 = cljs.core.seq(seq__63565_64967);
if(temp__5720__auto___64977){
var seq__63565_64979__$1 = temp__5720__auto___64977;
if(cljs.core.chunked_seq_QMARK_(seq__63565_64979__$1)){
var c__4550__auto___64980 = cljs.core.chunk_first(seq__63565_64979__$1);
var G__64981 = cljs.core.chunk_rest(seq__63565_64979__$1);
var G__64982 = c__4550__auto___64980;
var G__64983 = cljs.core.count(c__4550__auto___64980);
var G__64984 = (0);
seq__63565_64967 = G__64981;
chunk__63566_64968 = G__64982;
count__63567_64969 = G__64983;
i__63568_64970 = G__64984;
continue;
} else {
var fld_64985 = cljs.core.first(seq__63565_64979__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_64985," = ",fld_64985,";");


var G__64986 = cljs.core.next(seq__63565_64979__$1);
var G__64987 = null;
var G__64988 = (0);
var G__64989 = (0);
seq__63565_64967 = G__64986;
chunk__63566_64968 = G__64987;
count__63567_64969 = G__64988;
i__63568_64970 = G__64989;
continue;
}
} else {
}
}
break;
}

var seq__63569_64990 = cljs.core.seq(pmasks);
var chunk__63570_64991 = null;
var count__63571_64992 = (0);
var i__63572_64993 = (0);
while(true){
if((i__63572_64993 < count__63571_64992)){
var vec__63592_64994 = chunk__63570_64991.cljs$core$IIndexed$_nth$arity$2(null,i__63572_64993);
var pno_64995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63592_64994,(0),null);
var pmask_64996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63592_64994,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_64995,"$ = ",pmask_64996,";");


var G__64998 = seq__63569_64990;
var G__64999 = chunk__63570_64991;
var G__65000 = count__63571_64992;
var G__65001 = (i__63572_64993 + (1));
seq__63569_64990 = G__64998;
chunk__63570_64991 = G__64999;
count__63571_64992 = G__65000;
i__63572_64993 = G__65001;
continue;
} else {
var temp__5720__auto___65004 = cljs.core.seq(seq__63569_64990);
if(temp__5720__auto___65004){
var seq__63569_65005__$1 = temp__5720__auto___65004;
if(cljs.core.chunked_seq_QMARK_(seq__63569_65005__$1)){
var c__4550__auto___65006 = cljs.core.chunk_first(seq__63569_65005__$1);
var G__65007 = cljs.core.chunk_rest(seq__63569_65005__$1);
var G__65008 = c__4550__auto___65006;
var G__65009 = cljs.core.count(c__4550__auto___65006);
var G__65010 = (0);
seq__63569_64990 = G__65007;
chunk__63570_64991 = G__65008;
count__63571_64992 = G__65009;
i__63572_64993 = G__65010;
continue;
} else {
var vec__63600_65011 = cljs.core.first(seq__63569_65005__$1);
var pno_65012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600_65011,(0),null);
var pmask_65013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600_65011,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_65012,"$ = ",pmask_65013,";");


var G__65014 = cljs.core.next(seq__63569_65005__$1);
var G__65015 = null;
var G__65016 = (0);
var G__65017 = (0);
seq__63569_64990 = G__65014;
chunk__63570_64991 = G__65015;
count__63571_64992 = G__65016;
i__63572_64993 = G__65017;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__63603){
var map__63604 = p__63603;
var map__63604__$1 = (((((!((map__63604 == null))))?(((((map__63604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63604):map__63604);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__63606_65018 = cljs.core.seq(protocols);
var chunk__63607_65019 = null;
var count__63608_65020 = (0);
var i__63609_65021 = (0);
while(true){
if((i__63609_65021 < count__63608_65020)){
var protocol_65023 = chunk__63607_65019.cljs$core$IIndexed$_nth$arity$2(null,i__63609_65021);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_65023)),"}");


var G__65026 = seq__63606_65018;
var G__65027 = chunk__63607_65019;
var G__65028 = count__63608_65020;
var G__65029 = (i__63609_65021 + (1));
seq__63606_65018 = G__65026;
chunk__63607_65019 = G__65027;
count__63608_65020 = G__65028;
i__63609_65021 = G__65029;
continue;
} else {
var temp__5720__auto___65030 = cljs.core.seq(seq__63606_65018);
if(temp__5720__auto___65030){
var seq__63606_65031__$1 = temp__5720__auto___65030;
if(cljs.core.chunked_seq_QMARK_(seq__63606_65031__$1)){
var c__4550__auto___65032 = cljs.core.chunk_first(seq__63606_65031__$1);
var G__65033 = cljs.core.chunk_rest(seq__63606_65031__$1);
var G__65034 = c__4550__auto___65032;
var G__65035 = cljs.core.count(c__4550__auto___65032);
var G__65036 = (0);
seq__63606_65018 = G__65033;
chunk__63607_65019 = G__65034;
count__63608_65020 = G__65035;
i__63609_65021 = G__65036;
continue;
} else {
var protocol_65037 = cljs.core.first(seq__63606_65031__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_65037)),"}");


var G__65038 = cljs.core.next(seq__63606_65031__$1);
var G__65039 = null;
var G__65040 = (0);
var G__65041 = (0);
seq__63606_65018 = G__65038;
chunk__63607_65019 = G__65039;
count__63608_65020 = G__65040;
i__63609_65021 = G__65041;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__63613_65042 = cljs.core.seq(fields__$1);
var chunk__63614_65043 = null;
var count__63615_65044 = (0);
var i__63616_65045 = (0);
while(true){
if((i__63616_65045 < count__63615_65044)){
var fld_65050 = chunk__63614_65043.cljs$core$IIndexed$_nth$arity$2(null,i__63616_65045);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_65050," = ",fld_65050,";");


var G__65052 = seq__63613_65042;
var G__65053 = chunk__63614_65043;
var G__65054 = count__63615_65044;
var G__65055 = (i__63616_65045 + (1));
seq__63613_65042 = G__65052;
chunk__63614_65043 = G__65053;
count__63615_65044 = G__65054;
i__63616_65045 = G__65055;
continue;
} else {
var temp__5720__auto___65056 = cljs.core.seq(seq__63613_65042);
if(temp__5720__auto___65056){
var seq__63613_65057__$1 = temp__5720__auto___65056;
if(cljs.core.chunked_seq_QMARK_(seq__63613_65057__$1)){
var c__4550__auto___65058 = cljs.core.chunk_first(seq__63613_65057__$1);
var G__65059 = cljs.core.chunk_rest(seq__63613_65057__$1);
var G__65060 = c__4550__auto___65058;
var G__65061 = cljs.core.count(c__4550__auto___65058);
var G__65062 = (0);
seq__63613_65042 = G__65059;
chunk__63614_65043 = G__65060;
count__63615_65044 = G__65061;
i__63616_65045 = G__65062;
continue;
} else {
var fld_65063 = cljs.core.first(seq__63613_65057__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_65063," = ",fld_65063,";");


var G__65064 = cljs.core.next(seq__63613_65057__$1);
var G__65065 = null;
var G__65066 = (0);
var G__65067 = (0);
seq__63613_65042 = G__65064;
chunk__63614_65043 = G__65065;
count__63615_65044 = G__65066;
i__63616_65045 = G__65067;
continue;
}
} else {
}
}
break;
}

var seq__63622_65069 = cljs.core.seq(pmasks);
var chunk__63623_65070 = null;
var count__63624_65071 = (0);
var i__63625_65072 = (0);
while(true){
if((i__63625_65072 < count__63624_65071)){
var vec__63653_65074 = chunk__63623_65070.cljs$core$IIndexed$_nth$arity$2(null,i__63625_65072);
var pno_65075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63653_65074,(0),null);
var pmask_65076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63653_65074,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_65075,"$ = ",pmask_65076,";");


var G__65077 = seq__63622_65069;
var G__65078 = chunk__63623_65070;
var G__65079 = count__63624_65071;
var G__65080 = (i__63625_65072 + (1));
seq__63622_65069 = G__65077;
chunk__63623_65070 = G__65078;
count__63624_65071 = G__65079;
i__63625_65072 = G__65080;
continue;
} else {
var temp__5720__auto___65081 = cljs.core.seq(seq__63622_65069);
if(temp__5720__auto___65081){
var seq__63622_65082__$1 = temp__5720__auto___65081;
if(cljs.core.chunked_seq_QMARK_(seq__63622_65082__$1)){
var c__4550__auto___65083 = cljs.core.chunk_first(seq__63622_65082__$1);
var G__65084 = cljs.core.chunk_rest(seq__63622_65082__$1);
var G__65085 = c__4550__auto___65083;
var G__65086 = cljs.core.count(c__4550__auto___65083);
var G__65087 = (0);
seq__63622_65069 = G__65084;
chunk__63623_65070 = G__65085;
count__63624_65071 = G__65086;
i__63625_65072 = G__65087;
continue;
} else {
var vec__63663_65088 = cljs.core.first(seq__63622_65082__$1);
var pno_65089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63663_65088,(0),null);
var pmask_65090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63663_65088,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_65089,"$ = ",pmask_65090,";");


var G__65091 = cljs.core.next(seq__63622_65082__$1);
var G__65092 = null;
var G__65093 = (0);
var G__65094 = (0);
seq__63622_65069 = G__65091;
chunk__63623_65070 = G__65092;
count__63624_65071 = G__65093;
i__63625_65072 = G__65094;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__63668){
var map__63669 = p__63668;
var map__63669__$1 = (((((!((map__63669 == null))))?(((((map__63669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63669):map__63669);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__63688){
var map__63689 = p__63688;
var map__63689__$1 = (((((!((map__63689 == null))))?(((((map__63689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63689):map__63689);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
var G__63705 = clojure.string.trim(code);
var G__63706 = "/*";
return goog.string.startsWith(G__63705,G__63706);
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__62208__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__62208__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__63716 = cljs.core.seq(table);
var chunk__63717 = null;
var count__63718 = (0);
var i__63719 = (0);
while(true){
if((i__63719 < count__63718)){
var vec__63740 = chunk__63717.cljs$core$IIndexed$_nth$arity$2(null,i__63719);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63740,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63740,(1),null);
var ns_65106 = cljs.core.namespace(sym);
var name_65107 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__65114 = seq__63716;
var G__65115 = chunk__63717;
var G__65116 = count__63718;
var G__65117 = (i__63719 + (1));
seq__63716 = G__65114;
chunk__63717 = G__65115;
count__63718 = G__65116;
i__63719 = G__65117;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63716);
if(temp__5720__auto__){
var seq__63716__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63716__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63716__$1);
var G__65120 = cljs.core.chunk_rest(seq__63716__$1);
var G__65121 = c__4550__auto__;
var G__65122 = cljs.core.count(c__4550__auto__);
var G__65123 = (0);
seq__63716 = G__65120;
chunk__63717 = G__65121;
count__63718 = G__65122;
i__63719 = G__65123;
continue;
} else {
var vec__63744 = cljs.core.first(seq__63716__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63744,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63744,(1),null);
var ns_65124 = cljs.core.namespace(sym);
var name_65125 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__65131 = cljs.core.next(seq__63716__$1);
var G__65132 = null;
var G__65133 = (0);
var G__65134 = (0);
seq__63716 = G__65131;
chunk__63717 = G__65132;
count__63718 = G__65133;
i__63719 = G__65134;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__63748 = arguments.length;
switch (G__63748) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_65140 = cljs.core.first(ks);
var vec__63749_65141 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_65140);
var top_65142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63749_65141,(0),null);
var prefix_SINGLEQUOTE__65143 = vec__63749_65141;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_65140)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__65143) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_65142)) || (cljs.core.contains_QMARK_(known_externs,top_65142)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__65143)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_65142);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__65143)),";");
}
} else {
}

var m_65151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_65140);
if(cljs.core.empty_QMARK_(m_65151)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__65143,m_65151,top_level,known_externs);
}

var G__65153 = cljs.core.next(ks);
ks = G__65153;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=cljs.compiler.js.map
