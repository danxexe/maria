goog.provide('cljs.compiler');
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
var map__46050 = s;
var map__46050__$1 = (((((!((map__46050 == null))))?(((((map__46050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46050):map__46050);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46050__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46050__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__46053 = info;
var map__46054 = G__46053;
var map__46054__$1 = (((((!((map__46054 == null))))?(((((map__46054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46054):map__46054);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46054__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__46053__$1 = G__46053;
while(true){
var d__$2 = d__$1;
var map__46059 = G__46053__$1;
var map__46059__$1 = (((((!((map__46059 == null))))?(((((map__46059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46059):map__46059);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46059__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__47125 = (d__$2 + (1));
var G__47126 = shadow__$2;
d__$1 = G__47125;
G__46053__$1 = G__47126;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__46062){
var map__46063 = p__46062;
var map__46063__$1 = (((((!((map__46063 == null))))?(((((map__46063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46063):map__46063);
var name_var = map__46063__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46063__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__46071 = info;
var map__46071__$1 = (((((!((map__46071 == null))))?(((((map__46071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46071):map__46071);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46071__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46071__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__46074 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__46074) : cljs.compiler.munge.call(null,G__46074));
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
var G__46097 = arguments.length;
switch (G__46097) {
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
var ms = (function (){var fexpr__46126 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",17,1,11478,11478,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__46126.cljs$core$IFn$_invoke$arity$1 ? fexpr__46126.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__46126.call(null,ss__$3));
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
var G__46143 = cp;
switch (G__46143) {
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
var seq__46154_47150 = cljs.core.seq(s);
var chunk__46155_47151 = null;
var count__46156_47152 = (0);
var i__46157_47153 = (0);
while(true){
if((i__46157_47153 < count__46156_47152)){
var c_47158 = chunk__46155_47151.cljs$core$IIndexed$_nth$arity$2(null,i__46157_47153);
sb.append(cljs.compiler.escape_char(c_47158));


var G__47159 = seq__46154_47150;
var G__47160 = chunk__46155_47151;
var G__47161 = count__46156_47152;
var G__47162 = (i__46157_47153 + (1));
seq__46154_47150 = G__47159;
chunk__46155_47151 = G__47160;
count__46156_47152 = G__47161;
i__46157_47153 = G__47162;
continue;
} else {
var temp__5720__auto___47163 = cljs.core.seq(seq__46154_47150);
if(temp__5720__auto___47163){
var seq__46154_47164__$1 = temp__5720__auto___47163;
if(cljs.core.chunked_seq_QMARK_(seq__46154_47164__$1)){
var c__4550__auto___47165 = cljs.core.chunk_first(seq__46154_47164__$1);
var G__47170 = cljs.core.chunk_rest(seq__46154_47164__$1);
var G__47171 = c__4550__auto___47165;
var G__47172 = cljs.core.count(c__4550__auto___47165);
var G__47173 = (0);
seq__46154_47150 = G__47170;
chunk__46155_47151 = G__47171;
count__46156_47152 = G__47172;
i__46157_47153 = G__47173;
continue;
} else {
var c_47177 = cljs.core.first(seq__46154_47164__$1);
sb.append(cljs.compiler.escape_char(c_47177));


var G__47178 = cljs.core.next(seq__46154_47164__$1);
var G__47179 = null;
var G__47180 = (0);
var G__47181 = (0);
seq__46154_47150 = G__47178;
chunk__46155_47151 = G__47179;
count__46156_47152 = G__47180;
i__46157_47153 = G__47181;
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46165 = cljs.core.get_global_hierarchy;
return (fexpr__46165.cljs$core$IFn$_invoke$arity$0 ? fexpr__46165.cljs$core$IFn$_invoke$arity$0() : fexpr__46165.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__46166_47186 = ast;
var map__46166_47187__$1 = (((((!((map__46166_47186 == null))))?(((((map__46166_47186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46166_47186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46166_47186):map__46166_47186);
var env_47188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46166_47187__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_47188))){
var map__46168_47189 = env_47188;
var map__46168_47190__$1 = (((((!((map__46168_47189 == null))))?(((((map__46168_47189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46168_47189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46168_47189):map__46168_47189);
var line_47191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168_47190__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168_47190__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__46168_47189,map__46168_47190__$1,line_47191,column_47192,map__46166_47186,map__46166_47187__$1,env_47188){
return (function (m){
var minfo = (function (){var G__46170 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__46172 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__46171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__46171.cljs$core$IFn$_invoke$arity$1 ? fexpr__46171.cljs$core$IFn$_invoke$arity$1(G__46172) : fexpr__46171.call(null,G__46172));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46170,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__46170;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_47191 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__46168_47189,map__46168_47190__$1,line_47191,column_47192,map__46166_47186,map__46166_47187__$1,env_47188){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_47192)?(column_47192 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__46168_47189,map__46168_47190__$1,line_47191,column_47192,map__46166_47186,map__46166_47187__$1,env_47188){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__46168_47189,map__46168_47190__$1,line_47191,column_47192,map__46166_47186,map__46166_47187__$1,env_47188))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__46168_47189,map__46168_47190__$1,line_47191,column_47192,map__46166_47186,map__46166_47187__$1,env_47188))
,cljs.core.sorted_map()));
});})(map__46168_47189,map__46168_47190__$1,line_47191,column_47192,map__46166_47186,map__46166_47187__$1,env_47188))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__46181 = arguments.length;
switch (G__46181) {
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
var len__4730__auto___47198 = arguments.length;
var i__4731__auto___47199 = (0);
while(true){
if((i__4731__auto___47199 < len__4730__auto___47198)){
args_arr__4751__auto__.push((arguments[i__4731__auto___47199]));

var G__47200 = (i__4731__auto___47199 + (1));
i__4731__auto___47199 = G__47200;
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
var s_47201 = (function (){var G__46185 = a;
if((!(typeof a === 'string'))){
return G__46185.toString();
} else {
return G__46185;
}
})();
var temp__5724__auto___47202 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___47202 == null)){
} else {
var sm_data_47203 = temp__5724__auto___47202;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_47203,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_47203,temp__5724__auto___47202,s_47201){
return (function (p1__46173_SHARP_){
return (p1__46173_SHARP_ + s_47201.length);
});})(sm_data_47203,temp__5724__auto___47202,s_47201))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_47201], 0));

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

var seq__46186 = cljs.core.seq(xs);
var chunk__46187 = null;
var count__46188 = (0);
var i__46189 = (0);
while(true){
if((i__46189 < count__46188)){
var x = chunk__46187.cljs$core$IIndexed$_nth$arity$2(null,i__46189);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__47212 = seq__46186;
var G__47213 = chunk__46187;
var G__47214 = count__46188;
var G__47215 = (i__46189 + (1));
seq__46186 = G__47212;
chunk__46187 = G__47213;
count__46188 = G__47214;
i__46189 = G__47215;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46186);
if(temp__5720__auto__){
var seq__46186__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46186__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46186__$1);
var G__47218 = cljs.core.chunk_rest(seq__46186__$1);
var G__47219 = c__4550__auto__;
var G__47220 = cljs.core.count(c__4550__auto__);
var G__47221 = (0);
seq__46186 = G__47218;
chunk__46187 = G__47219;
count__46188 = G__47220;
i__46189 = G__47221;
continue;
} else {
var x = cljs.core.first(seq__46186__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__47223 = cljs.core.next(seq__46186__$1);
var G__47225 = null;
var G__47226 = (0);
var G__47227 = (0);
seq__46186 = G__47223;
chunk__46187 = G__47225;
count__46188 = G__47226;
i__46189 = G__47227;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq46175){
var G__46176 = cljs.core.first(seq46175);
var seq46175__$1 = cljs.core.next(seq46175);
var G__46177 = cljs.core.first(seq46175__$1);
var seq46175__$2 = cljs.core.next(seq46175__$1);
var G__46178 = cljs.core.first(seq46175__$2);
var seq46175__$3 = cljs.core.next(seq46175__$2);
var G__46179 = cljs.core.first(seq46175__$3);
var seq46175__$4 = cljs.core.next(seq46175__$3);
var G__46180 = cljs.core.first(seq46175__$4);
var seq46175__$5 = cljs.core.next(seq46175__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46176,G__46177,G__46178,G__46179,G__46180,seq46175__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__46190){
var map__46191 = p__46190;
var map__46191__$1 = (((((!((map__46191 == null))))?(((((map__46191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46191):map__46191);
var m = map__46191__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46191__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__46201 = arguments.length;
switch (G__46201) {
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
var len__4730__auto___47238 = arguments.length;
var i__4731__auto___47239 = (0);
while(true){
if((i__4731__auto___47239 < len__4730__auto___47238)){
args_arr__4751__auto__.push((arguments[i__4731__auto___47239]));

var G__47241 = (i__4731__auto___47239 + (1));
i__4731__auto___47239 = G__47241;
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

var seq__46202_47245 = cljs.core.seq(xs);
var chunk__46203_47246 = null;
var count__46204_47247 = (0);
var i__46205_47248 = (0);
while(true){
if((i__46205_47248 < count__46204_47247)){
var x_47250 = chunk__46203_47246.cljs$core$IIndexed$_nth$arity$2(null,i__46205_47248);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_47250);


var G__47251 = seq__46202_47245;
var G__47252 = chunk__46203_47246;
var G__47253 = count__46204_47247;
var G__47254 = (i__46205_47248 + (1));
seq__46202_47245 = G__47251;
chunk__46203_47246 = G__47252;
count__46204_47247 = G__47253;
i__46205_47248 = G__47254;
continue;
} else {
var temp__5720__auto___47255 = cljs.core.seq(seq__46202_47245);
if(temp__5720__auto___47255){
var seq__46202_47256__$1 = temp__5720__auto___47255;
if(cljs.core.chunked_seq_QMARK_(seq__46202_47256__$1)){
var c__4550__auto___47257 = cljs.core.chunk_first(seq__46202_47256__$1);
var G__47258 = cljs.core.chunk_rest(seq__46202_47256__$1);
var G__47259 = c__4550__auto___47257;
var G__47260 = cljs.core.count(c__4550__auto___47257);
var G__47261 = (0);
seq__46202_47245 = G__47258;
chunk__46203_47246 = G__47259;
count__46204_47247 = G__47260;
i__46205_47248 = G__47261;
continue;
} else {
var x_47262 = cljs.core.first(seq__46202_47256__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_47262);


var G__47263 = cljs.core.next(seq__46202_47256__$1);
var G__47264 = null;
var G__47265 = (0);
var G__47266 = (0);
seq__46202_47245 = G__47263;
chunk__46203_47246 = G__47264;
count__46204_47247 = G__47265;
i__46205_47248 = G__47266;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq46195){
var G__46196 = cljs.core.first(seq46195);
var seq46195__$1 = cljs.core.next(seq46195);
var G__46197 = cljs.core.first(seq46195__$1);
var seq46195__$2 = cljs.core.next(seq46195__$1);
var G__46198 = cljs.core.first(seq46195__$2);
var seq46195__$3 = cljs.core.next(seq46195__$2);
var G__46199 = cljs.core.first(seq46195__$3);
var seq46195__$4 = cljs.core.next(seq46195__$3);
var G__46200 = cljs.core.first(seq46195__$4);
var seq46195__$5 = cljs.core.next(seq46195__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46196,G__46197,G__46198,G__46199,G__46200,seq46195__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46207_47273 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46208_47274 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46209_47275 = true;
var _STAR_print_fn_STAR__temp_val__46210_47276 = ((function (_STAR_print_newline_STAR__orig_val__46207_47273,_STAR_print_fn_STAR__orig_val__46208_47274,_STAR_print_newline_STAR__temp_val__46209_47275,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__46207_47273,_STAR_print_fn_STAR__orig_val__46208_47274,_STAR_print_newline_STAR__temp_val__46209_47275,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46209_47275;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46210_47276;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46208_47274;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46207_47273;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46211 = cljs.core.get_global_hierarchy;
return (fexpr__46211.cljs$core$IFn$_invoke$arity$0 ? fexpr__46211.cljs$core$IFn$_invoke$arity$0() : fexpr__46211.call(null));
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
var vec__46224 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46224,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46224,(1),null);
var G__46227 = ns;
var G__46228 = name;
var G__46229 = ((function (G__46227,G__46228,vec__46224,ns,name){
return (function (){
var G__46230 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__46230) : cljs.compiler.emit_constant.call(null,G__46230));
});})(G__46227,G__46228,vec__46224,ns,name))
;
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__46227,G__46228,G__46229) : cljs.compiler.emit_record_value.call(null,G__46227,G__46228,G__46229));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__46231 = cljs.core.keys(x);
var G__46232 = cljs.core.vals(x);
var G__46233 = cljs.compiler.emit_constants_comma_sep;
var G__46234 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__46231,G__46232,G__46233,G__46234) : cljs.compiler.emit_map.call(null,G__46231,G__46232,G__46233,G__46234));
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
var G__46235 = ((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta(v);
});})(m))
;
var G__46236 = ((function (G__46235,m){
return (function (){
return cljs.compiler.emit_constant_no_meta(m);
});})(G__46235,m))
;
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__46235,G__46236) : cljs.compiler.emit_with_meta.call(null,G__46235,G__46236));
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
var vec__46244 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244,(2),null);
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
var G__46252 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__46252) : x.call(null,G__46252));
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
var G__46253 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__46253) : x.call(null,G__46253));
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
var G__46261 = items;
var G__46262 = ((function (G__46261,items){
return (function (p1__46259_SHARP_){
return ((function (G__46261,items){
return (function (){
return cljs.compiler.emit_constant(p1__46259_SHARP_);
});
;})(G__46261,items))
});})(G__46261,items))
;
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__46261,G__46262) : cljs.compiler.emit_js_object.call(null,G__46261,G__46262));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__46270){
var map__46274 = p__46270;
var map__46274__$1 = (((((!((map__46274 == null))))?(((((map__46274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46274):map__46274);
var ast = map__46274__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46274__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46274__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__46282 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__46282__$1 = (((((!((map__46282 == null))))?(((((map__46282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46282):map__46282);
var cenv = map__46282__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46282__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__46289 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__46292 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__46292) : cljs.compiler.es5_GT__EQ_.call(null,G__46292));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__46289,cljs.analyzer.es5_allowed);
} else {
return G__46289;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__46293 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__46293,reserved);
} else {
return G__46293;
}
})();
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__46296_47342 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__46296_47343__$1 = (((G__46296_47342 instanceof cljs.core.Keyword))?G__46296_47342.fqn:null);
switch (G__46296_47343__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__46299){
var map__46300 = p__46299;
var map__46300__$1 = (((((!((map__46300 == null))))?(((((map__46300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46300):map__46300);
var arg = map__46300__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46300__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46300__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46300__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__46303 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__46303__$1 = (((((!((map__46303 == null))))?(((((map__46303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46303):map__46303);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46303__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__46305){
var map__46306 = p__46305;
var map__46306__$1 = (((((!((map__46306 == null))))?(((((map__46306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46306):map__46306);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46306__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46306__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46306__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_(((function (keys__$1){
return (function (p1__46310_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__46310_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__46313 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__46313) : comma_sep.call(null,G__46313));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__46314 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__46314) : comma_sep.call(null,G__46314));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__46323){
var map__46324 = p__46323;
var map__46324__$1 = (((((!((map__46324 == null))))?(((((map__46324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46324):map__46324);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46324__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46324__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__46332){
var map__46333 = p__46332;
var map__46333__$1 = (((((!((map__46333 == null))))?(((((map__46333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46333):map__46333);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46333__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46333__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_(((function (items__$1){
return (function (p1__46336_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__46336_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__46339 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__46339) : comma_sep.call(null,G__46339));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__46340){
var map__46341 = p__46340;
var map__46341__$1 = (((((!((map__46341 == null))))?(((((map__46341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46341):map__46341);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46341__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46341__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5720__auto___47416 = cljs.core.seq(items);
if(temp__5720__auto___47416){
var items_47418__$1 = temp__5720__auto___47416;
var vec__46343_47419 = items_47418__$1;
var seq__46344_47420 = cljs.core.seq(vec__46343_47419);
var first__46345_47421 = cljs.core.first(seq__46344_47420);
var seq__46344_47422__$1 = cljs.core.next(seq__46344_47420);
var vec__46346_47423 = first__46345_47421;
var k_47424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46346_47423,(0),null);
var v_47425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46346_47423,(1),null);
var r_47426 = seq__46344_47422__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_47424),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_47425) : emit_js_object_val.call(null,v_47425)));

var seq__46349_47427 = cljs.core.seq(r_47426);
var chunk__46350_47428 = null;
var count__46351_47429 = (0);
var i__46352_47430 = (0);
while(true){
if((i__46352_47430 < count__46351_47429)){
var vec__46359_47433 = chunk__46350_47428.cljs$core$IIndexed$_nth$arity$2(null,i__46352_47430);
var k_47434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46359_47433,(0),null);
var v_47435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46359_47433,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_47434__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_47435__$1) : emit_js_object_val.call(null,v_47435__$1)));


var G__47438 = seq__46349_47427;
var G__47439 = chunk__46350_47428;
var G__47440 = count__46351_47429;
var G__47441 = (i__46352_47430 + (1));
seq__46349_47427 = G__47438;
chunk__46350_47428 = G__47439;
count__46351_47429 = G__47440;
i__46352_47430 = G__47441;
continue;
} else {
var temp__5720__auto___47444__$1 = cljs.core.seq(seq__46349_47427);
if(temp__5720__auto___47444__$1){
var seq__46349_47445__$1 = temp__5720__auto___47444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46349_47445__$1)){
var c__4550__auto___47446 = cljs.core.chunk_first(seq__46349_47445__$1);
var G__47447 = cljs.core.chunk_rest(seq__46349_47445__$1);
var G__47448 = c__4550__auto___47446;
var G__47449 = cljs.core.count(c__4550__auto___47446);
var G__47450 = (0);
seq__46349_47427 = G__47447;
chunk__46350_47428 = G__47448;
count__46351_47429 = G__47449;
i__46352_47430 = G__47450;
continue;
} else {
var vec__46363_47453 = cljs.core.first(seq__46349_47445__$1);
var k_47454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46363_47453,(0),null);
var v_47455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46363_47453,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_47454__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_47455__$1) : emit_js_object_val.call(null,v_47455__$1)));


var G__47466 = cljs.core.next(seq__46349_47445__$1);
var G__47467 = null;
var G__47468 = (0);
var G__47469 = (0);
seq__46349_47427 = G__47466;
chunk__46350_47428 = G__47467;
count__46351_47429 = G__47468;
i__46352_47430 = G__47469;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__46366){
var map__46367 = p__46366;
var map__46367__$1 = (((((!((map__46367 == null))))?(((((map__46367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46367):map__46367);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__46369){
var map__46370 = p__46369;
var map__46370__$1 = (((((!((map__46370 == null))))?(((((map__46370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46370):map__46370);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46370__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__46372){
var map__46373 = p__46372;
var map__46373__$1 = (((((!((map__46373 == null))))?(((((map__46373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46373):map__46373);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46373__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__46380){
var map__46381 = p__46380;
var map__46381__$1 = (((((!((map__46381 == null))))?(((((map__46381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46381):map__46381);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46381__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__46386 = cljs.analyzer.unwrap_quote(expr);
var map__46386__$1 = (((((!((map__46386 == null))))?(((((map__46386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46386):map__46386);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46386__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46386__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46386__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__46388 = cljs.analyzer.unwrap_quote(expr);
var map__46388__$1 = (((((!((map__46388 == null))))?(((((map__46388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46388):map__46388);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4131__auto__ = (function (){var fexpr__46395 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__46395.cljs$core$IFn$_invoke$arity$1 ? fexpr__46395.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__46395.call(null,tag));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__46398){
var map__46399 = p__46398;
var map__46399__$1 = (((((!((map__46399 == null))))?(((((map__46399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46399):map__46399);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__46404){
var map__46406 = p__46404;
var map__46406__$1 = (((((!((map__46406 == null))))?(((((map__46406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46406):map__46406);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46406__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46406__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46406__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46406__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__46408_47544 = cljs.core.seq(nodes);
var chunk__46409_47545 = null;
var count__46410_47546 = (0);
var i__46411_47547 = (0);
while(true){
if((i__46411_47547 < count__46410_47546)){
var map__46439_47548 = chunk__46409_47545.cljs$core$IIndexed$_nth$arity$2(null,i__46411_47547);
var map__46439_47549__$1 = (((((!((map__46439_47548 == null))))?(((((map__46439_47548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46439_47548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46439_47548):map__46439_47548);
var ts_47550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46439_47549__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__46440_47551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46439_47549__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__46440_47552__$1 = (((((!((map__46440_47551 == null))))?(((((map__46440_47551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46440_47551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46440_47551):map__46440_47551);
var then_47553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46440_47552__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__46444_47558 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_47550));
var chunk__46445_47559 = null;
var count__46446_47560 = (0);
var i__46447_47561 = (0);
while(true){
if((i__46447_47561 < count__46446_47560)){
var test_47562 = chunk__46445_47559.cljs$core$IIndexed$_nth$arity$2(null,i__46447_47561);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_47562,":");


var G__47563 = seq__46444_47558;
var G__47564 = chunk__46445_47559;
var G__47565 = count__46446_47560;
var G__47566 = (i__46447_47561 + (1));
seq__46444_47558 = G__47563;
chunk__46445_47559 = G__47564;
count__46446_47560 = G__47565;
i__46447_47561 = G__47566;
continue;
} else {
var temp__5720__auto___47567 = cljs.core.seq(seq__46444_47558);
if(temp__5720__auto___47567){
var seq__46444_47568__$1 = temp__5720__auto___47567;
if(cljs.core.chunked_seq_QMARK_(seq__46444_47568__$1)){
var c__4550__auto___47569 = cljs.core.chunk_first(seq__46444_47568__$1);
var G__47570 = cljs.core.chunk_rest(seq__46444_47568__$1);
var G__47571 = c__4550__auto___47569;
var G__47572 = cljs.core.count(c__4550__auto___47569);
var G__47573 = (0);
seq__46444_47558 = G__47570;
chunk__46445_47559 = G__47571;
count__46446_47560 = G__47572;
i__46447_47561 = G__47573;
continue;
} else {
var test_47578 = cljs.core.first(seq__46444_47568__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_47578,":");


var G__47579 = cljs.core.next(seq__46444_47568__$1);
var G__47580 = null;
var G__47581 = (0);
var G__47582 = (0);
seq__46444_47558 = G__47579;
chunk__46445_47559 = G__47580;
count__46446_47560 = G__47581;
i__46447_47561 = G__47582;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_47553);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_47553);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__47587 = seq__46408_47544;
var G__47588 = chunk__46409_47545;
var G__47589 = count__46410_47546;
var G__47590 = (i__46411_47547 + (1));
seq__46408_47544 = G__47587;
chunk__46409_47545 = G__47588;
count__46410_47546 = G__47589;
i__46411_47547 = G__47590;
continue;
} else {
var temp__5720__auto___47594 = cljs.core.seq(seq__46408_47544);
if(temp__5720__auto___47594){
var seq__46408_47595__$1 = temp__5720__auto___47594;
if(cljs.core.chunked_seq_QMARK_(seq__46408_47595__$1)){
var c__4550__auto___47597 = cljs.core.chunk_first(seq__46408_47595__$1);
var G__47598 = cljs.core.chunk_rest(seq__46408_47595__$1);
var G__47599 = c__4550__auto___47597;
var G__47600 = cljs.core.count(c__4550__auto___47597);
var G__47601 = (0);
seq__46408_47544 = G__47598;
chunk__46409_47545 = G__47599;
count__46410_47546 = G__47600;
i__46411_47547 = G__47601;
continue;
} else {
var map__46452_47606 = cljs.core.first(seq__46408_47595__$1);
var map__46452_47607__$1 = (((((!((map__46452_47606 == null))))?(((((map__46452_47606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46452_47606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46452_47606):map__46452_47606);
var ts_47608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46452_47607__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__46453_47609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46452_47607__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__46453_47610__$1 = (((((!((map__46453_47609 == null))))?(((((map__46453_47609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46453_47609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46453_47609):map__46453_47609);
var then_47611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46453_47610__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__46456_47624 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_47608));
var chunk__46457_47625 = null;
var count__46458_47626 = (0);
var i__46459_47627 = (0);
while(true){
if((i__46459_47627 < count__46458_47626)){
var test_47629 = chunk__46457_47625.cljs$core$IIndexed$_nth$arity$2(null,i__46459_47627);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_47629,":");


var G__47639 = seq__46456_47624;
var G__47640 = chunk__46457_47625;
var G__47641 = count__46458_47626;
var G__47642 = (i__46459_47627 + (1));
seq__46456_47624 = G__47639;
chunk__46457_47625 = G__47640;
count__46458_47626 = G__47641;
i__46459_47627 = G__47642;
continue;
} else {
var temp__5720__auto___47643__$1 = cljs.core.seq(seq__46456_47624);
if(temp__5720__auto___47643__$1){
var seq__46456_47647__$1 = temp__5720__auto___47643__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46456_47647__$1)){
var c__4550__auto___47649 = cljs.core.chunk_first(seq__46456_47647__$1);
var G__47650 = cljs.core.chunk_rest(seq__46456_47647__$1);
var G__47651 = c__4550__auto___47649;
var G__47652 = cljs.core.count(c__4550__auto___47649);
var G__47653 = (0);
seq__46456_47624 = G__47650;
chunk__46457_47625 = G__47651;
count__46458_47626 = G__47652;
i__46459_47627 = G__47653;
continue;
} else {
var test_47658 = cljs.core.first(seq__46456_47647__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_47658,":");


var G__47660 = cljs.core.next(seq__46456_47647__$1);
var G__47661 = null;
var G__47662 = (0);
var G__47663 = (0);
seq__46456_47624 = G__47660;
chunk__46457_47625 = G__47661;
count__46458_47626 = G__47662;
i__46459_47627 = G__47663;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_47611);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_47611);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__47669 = cljs.core.next(seq__46408_47595__$1);
var G__47670 = null;
var G__47671 = (0);
var G__47672 = (0);
seq__46408_47544 = G__47669;
chunk__46409_47545 = G__47670;
count__46410_47546 = G__47671;
i__46411_47547 = G__47672;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__46460){
var map__46461 = p__46460;
var map__46461__$1 = (((((!((map__46461 == null))))?(((((map__46461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46461):map__46461);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46461__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46461__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__46467 = env;
var G__46468 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__46467,G__46468) : cljs.compiler.resolve_type.call(null,G__46467,G__46468));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__46469 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46469,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46469,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__46469,fstr,rstr,ret_t,axstr){
return (function (p1__46464_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__46464_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__46464_SHARP_));
});})(idx,vec__46469,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__46472 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__46472,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__46472;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__46475 = env;
var G__46476 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__46475,G__46476) : cljs.compiler.resolve_type.call(null,G__46475,G__46476));
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
return (function (p1__46477_SHARP_){
return cljs.compiler.resolve_type(env,p1__46477_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__46478 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__46479 = cljs.core.seq(vec__46478);
var first__46480 = cljs.core.first(seq__46479);
var seq__46479__$1 = cljs.core.next(seq__46479);
var p = first__46480;
var first__46480__$1 = cljs.core.first(seq__46479__$1);
var seq__46479__$2 = cljs.core.next(seq__46479__$1);
var ts = first__46480__$1;
var first__46480__$2 = cljs.core.first(seq__46479__$2);
var seq__46479__$3 = cljs.core.next(seq__46479__$2);
var n = first__46480__$2;
var xs = seq__46479__$3;
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
var vec__46481 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__46482 = cljs.core.seq(vec__46481);
var first__46483 = cljs.core.first(seq__46482);
var seq__46482__$1 = cljs.core.next(seq__46482);
var p = first__46483;
var first__46483__$1 = cljs.core.first(seq__46482__$1);
var seq__46482__$2 = cljs.core.next(seq__46482__$1);
var ts = first__46483__$1;
var xs = seq__46482__$2;
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
var G__46485 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__46484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__46484.cljs$core$IFn$_invoke$arity$1 ? fexpr__46484.cljs$core$IFn$_invoke$arity$1(G__46485) : fexpr__46484.call(null,G__46485));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__46490 = arguments.length;
switch (G__46490) {
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
var vec__46501 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__46487_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__46487_SHARP_);
} else {
return p1__46487_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__46502 = cljs.core.seq(vec__46501);
var first__46503 = cljs.core.first(seq__46502);
var seq__46502__$1 = cljs.core.next(seq__46502);
var x = first__46503;
var ys = seq__46502__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__46504 = cljs.core.seq(ys);
var chunk__46505 = null;
var count__46506 = (0);
var i__46507 = (0);
while(true){
if((i__46507 < count__46506)){
var next_line = chunk__46505.cljs$core$IIndexed$_nth$arity$2(null,i__46507);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__47727 = seq__46504;
var G__47728 = chunk__46505;
var G__47729 = count__46506;
var G__47730 = (i__46507 + (1));
seq__46504 = G__47727;
chunk__46505 = G__47728;
count__46506 = G__47729;
i__46507 = G__47730;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46504);
if(temp__5720__auto__){
var seq__46504__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46504__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46504__$1);
var G__47735 = cljs.core.chunk_rest(seq__46504__$1);
var G__47736 = c__4550__auto__;
var G__47737 = cljs.core.count(c__4550__auto__);
var G__47738 = (0);
seq__46504 = G__47735;
chunk__46505 = G__47736;
count__46506 = G__47737;
i__46507 = G__47738;
continue;
} else {
var next_line = cljs.core.first(seq__46504__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__47745 = cljs.core.next(seq__46504__$1);
var G__47746 = null;
var G__47747 = (0);
var G__47748 = (0);
seq__46504 = G__47745;
chunk__46505 = G__47746;
count__46506 = G__47747;
i__46507 = G__47748;
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

var seq__46511_47751 = cljs.core.seq(docs__$2);
var chunk__46512_47752 = null;
var count__46513_47753 = (0);
var i__46514_47754 = (0);
while(true){
if((i__46514_47754 < count__46513_47753)){
var e_47757 = chunk__46512_47752.cljs$core$IIndexed$_nth$arity$2(null,i__46514_47754);
if(cljs.core.truth_(e_47757)){
print_comment_lines(e_47757);
} else {
}


var G__47758 = seq__46511_47751;
var G__47759 = chunk__46512_47752;
var G__47760 = count__46513_47753;
var G__47761 = (i__46514_47754 + (1));
seq__46511_47751 = G__47758;
chunk__46512_47752 = G__47759;
count__46513_47753 = G__47760;
i__46514_47754 = G__47761;
continue;
} else {
var temp__5720__auto___47763 = cljs.core.seq(seq__46511_47751);
if(temp__5720__auto___47763){
var seq__46511_47769__$1 = temp__5720__auto___47763;
if(cljs.core.chunked_seq_QMARK_(seq__46511_47769__$1)){
var c__4550__auto___47771 = cljs.core.chunk_first(seq__46511_47769__$1);
var G__47772 = cljs.core.chunk_rest(seq__46511_47769__$1);
var G__47773 = c__4550__auto___47771;
var G__47774 = cljs.core.count(c__4550__auto___47771);
var G__47775 = (0);
seq__46511_47751 = G__47772;
chunk__46512_47752 = G__47773;
count__46513_47753 = G__47774;
i__46514_47754 = G__47775;
continue;
} else {
var e_47776 = cljs.core.first(seq__46511_47769__$1);
if(cljs.core.truth_(e_47776)){
print_comment_lines(e_47776);
} else {
}


var G__47778 = cljs.core.next(seq__46511_47769__$1);
var G__47779 = null;
var G__47780 = (0);
var G__47781 = (0);
seq__46511_47751 = G__47778;
chunk__46512_47752 = G__47779;
count__46513_47753 = G__47780;
i__46514_47754 = G__47781;
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
return (function (p1__46522_SHARP_){
return goog.string.startsWith(p1__46522_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__46528){
var map__46529 = p__46528;
var map__46529__$1 = (((((!((map__46529 == null))))?(((((map__46529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46529):map__46529);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__46534){
var map__46535 = p__46534;
var map__46535__$1 = (((((!((map__46535 == null))))?(((((map__46535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46535):map__46535);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46535__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46535__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46535__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__46544_47823 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__46545_47824 = null;
var count__46546_47825 = (0);
var i__46547_47826 = (0);
while(true){
if((i__46547_47826 < count__46546_47825)){
var vec__46567_47831 = chunk__46545_47824.cljs$core$IIndexed$_nth$arity$2(null,i__46547_47826);
var i_47832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46567_47831,(0),null);
var param_47833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46567_47831,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_47833);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__47842 = seq__46544_47823;
var G__47843 = chunk__46545_47824;
var G__47844 = count__46546_47825;
var G__47845 = (i__46547_47826 + (1));
seq__46544_47823 = G__47842;
chunk__46545_47824 = G__47843;
count__46546_47825 = G__47844;
i__46547_47826 = G__47845;
continue;
} else {
var temp__5720__auto___47846 = cljs.core.seq(seq__46544_47823);
if(temp__5720__auto___47846){
var seq__46544_47847__$1 = temp__5720__auto___47846;
if(cljs.core.chunked_seq_QMARK_(seq__46544_47847__$1)){
var c__4550__auto___47848 = cljs.core.chunk_first(seq__46544_47847__$1);
var G__47849 = cljs.core.chunk_rest(seq__46544_47847__$1);
var G__47850 = c__4550__auto___47848;
var G__47851 = cljs.core.count(c__4550__auto___47848);
var G__47852 = (0);
seq__46544_47823 = G__47849;
chunk__46545_47824 = G__47850;
count__46546_47825 = G__47851;
i__46547_47826 = G__47852;
continue;
} else {
var vec__46575_47853 = cljs.core.first(seq__46544_47847__$1);
var i_47854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46575_47853,(0),null);
var param_47855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46575_47853,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_47855);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__47860 = cljs.core.next(seq__46544_47847__$1);
var G__47861 = null;
var G__47862 = (0);
var G__47863 = (0);
seq__46544_47823 = G__47860;
chunk__46545_47824 = G__47861;
count__46546_47825 = G__47862;
i__46547_47826 = G__47863;
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

var seq__46579_47869 = cljs.core.seq(params);
var chunk__46580_47870 = null;
var count__46581_47871 = (0);
var i__46582_47872 = (0);
while(true){
if((i__46582_47872 < count__46581_47871)){
var param_47873 = chunk__46580_47870.cljs$core$IIndexed$_nth$arity$2(null,i__46582_47872);
cljs.compiler.emit(param_47873);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_47873,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__47879 = seq__46579_47869;
var G__47880 = chunk__46580_47870;
var G__47881 = count__46581_47871;
var G__47882 = (i__46582_47872 + (1));
seq__46579_47869 = G__47879;
chunk__46580_47870 = G__47880;
count__46581_47871 = G__47881;
i__46582_47872 = G__47882;
continue;
} else {
var temp__5720__auto___47883 = cljs.core.seq(seq__46579_47869);
if(temp__5720__auto___47883){
var seq__46579_47884__$1 = temp__5720__auto___47883;
if(cljs.core.chunked_seq_QMARK_(seq__46579_47884__$1)){
var c__4550__auto___47885 = cljs.core.chunk_first(seq__46579_47884__$1);
var G__47886 = cljs.core.chunk_rest(seq__46579_47884__$1);
var G__47887 = c__4550__auto___47885;
var G__47888 = cljs.core.count(c__4550__auto___47885);
var G__47889 = (0);
seq__46579_47869 = G__47886;
chunk__46580_47870 = G__47887;
count__46581_47871 = G__47888;
i__46582_47872 = G__47889;
continue;
} else {
var param_47890 = cljs.core.first(seq__46579_47884__$1);
cljs.compiler.emit(param_47890);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_47890,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__47891 = cljs.core.next(seq__46579_47884__$1);
var G__47892 = null;
var G__47893 = (0);
var G__47894 = (0);
seq__46579_47869 = G__47891;
chunk__46580_47870 = G__47892;
count__46581_47871 = G__47893;
i__46582_47872 = G__47894;
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

var seq__46588_47901 = cljs.core.seq(params);
var chunk__46589_47902 = null;
var count__46590_47903 = (0);
var i__46591_47904 = (0);
while(true){
if((i__46591_47904 < count__46590_47903)){
var param_47905 = chunk__46589_47902.cljs$core$IIndexed$_nth$arity$2(null,i__46591_47904);
cljs.compiler.emit(param_47905);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_47905,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__47909 = seq__46588_47901;
var G__47910 = chunk__46589_47902;
var G__47911 = count__46590_47903;
var G__47912 = (i__46591_47904 + (1));
seq__46588_47901 = G__47909;
chunk__46589_47902 = G__47910;
count__46590_47903 = G__47911;
i__46591_47904 = G__47912;
continue;
} else {
var temp__5720__auto___47913 = cljs.core.seq(seq__46588_47901);
if(temp__5720__auto___47913){
var seq__46588_47914__$1 = temp__5720__auto___47913;
if(cljs.core.chunked_seq_QMARK_(seq__46588_47914__$1)){
var c__4550__auto___47915 = cljs.core.chunk_first(seq__46588_47914__$1);
var G__47916 = cljs.core.chunk_rest(seq__46588_47914__$1);
var G__47917 = c__4550__auto___47915;
var G__47918 = cljs.core.count(c__4550__auto___47915);
var G__47919 = (0);
seq__46588_47901 = G__47916;
chunk__46589_47902 = G__47917;
count__46590_47903 = G__47918;
i__46591_47904 = G__47919;
continue;
} else {
var param_47922 = cljs.core.first(seq__46588_47914__$1);
cljs.compiler.emit(param_47922);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_47922,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__47927 = cljs.core.next(seq__46588_47914__$1);
var G__47928 = null;
var G__47929 = (0);
var G__47930 = (0);
seq__46588_47901 = G__47927;
chunk__46589_47902 = G__47928;
count__46590_47903 = G__47929;
i__46591_47904 = G__47930;
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
var seq__46604 = cljs.core.seq(params);
var chunk__46605 = null;
var count__46606 = (0);
var i__46607 = (0);
while(true){
if((i__46607 < count__46606)){
var param = chunk__46605.cljs$core$IIndexed$_nth$arity$2(null,i__46607);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__47933 = seq__46604;
var G__47934 = chunk__46605;
var G__47935 = count__46606;
var G__47936 = (i__46607 + (1));
seq__46604 = G__47933;
chunk__46605 = G__47934;
count__46606 = G__47935;
i__46607 = G__47936;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46604);
if(temp__5720__auto__){
var seq__46604__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46604__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46604__$1);
var G__47941 = cljs.core.chunk_rest(seq__46604__$1);
var G__47942 = c__4550__auto__;
var G__47943 = cljs.core.count(c__4550__auto__);
var G__47944 = (0);
seq__46604 = G__47941;
chunk__46605 = G__47942;
count__46606 = G__47943;
i__46607 = G__47944;
continue;
} else {
var param = cljs.core.first(seq__46604__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__47946 = cljs.core.next(seq__46604__$1);
var G__47947 = null;
var G__47948 = (0);
var G__47949 = (0);
seq__46604 = G__47946;
chunk__46605 = G__47947;
count__46606 = G__47948;
i__46607 = G__47949;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__46609){
var map__46610 = p__46609;
var map__46610__$1 = (((((!((map__46610 == null))))?(((((map__46610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46610):map__46610);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46610__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46610__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46610__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46610__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46610__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46610__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
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

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__46617){
var map__46618 = p__46617;
var map__46618__$1 = (((((!((map__46618 == null))))?(((((map__46618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46618):map__46618);
var f = map__46618__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_47980__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_47981 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_47980__$1);
var delegate_name_47982 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_47981),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_47982," = function (");

var seq__46624_47983 = cljs.core.seq(params);
var chunk__46625_47984 = null;
var count__46626_47985 = (0);
var i__46627_47986 = (0);
while(true){
if((i__46627_47986 < count__46626_47985)){
var param_47987 = chunk__46625_47984.cljs$core$IIndexed$_nth$arity$2(null,i__46627_47986);
cljs.compiler.emit(param_47987);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_47987,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__47995 = seq__46624_47983;
var G__47996 = chunk__46625_47984;
var G__47997 = count__46626_47985;
var G__47998 = (i__46627_47986 + (1));
seq__46624_47983 = G__47995;
chunk__46625_47984 = G__47996;
count__46626_47985 = G__47997;
i__46627_47986 = G__47998;
continue;
} else {
var temp__5720__auto___47999 = cljs.core.seq(seq__46624_47983);
if(temp__5720__auto___47999){
var seq__46624_48002__$1 = temp__5720__auto___47999;
if(cljs.core.chunked_seq_QMARK_(seq__46624_48002__$1)){
var c__4550__auto___48003 = cljs.core.chunk_first(seq__46624_48002__$1);
var G__48017 = cljs.core.chunk_rest(seq__46624_48002__$1);
var G__48018 = c__4550__auto___48003;
var G__48019 = cljs.core.count(c__4550__auto___48003);
var G__48020 = (0);
seq__46624_47983 = G__48017;
chunk__46625_47984 = G__48018;
count__46626_47985 = G__48019;
i__46627_47986 = G__48020;
continue;
} else {
var param_48033 = cljs.core.first(seq__46624_48002__$1);
cljs.compiler.emit(param_48033);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_48033,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__48034 = cljs.core.next(seq__46624_48002__$1);
var G__48035 = null;
var G__48036 = (0);
var G__48037 = (0);
seq__46624_47983 = G__48034;
chunk__46625_47984 = G__48035;
count__46626_47985 = G__48036;
i__46627_47986 = G__48037;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_47981," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_48054 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_48054,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_47982,".call(this,");

var seq__46630_48059 = cljs.core.seq(params);
var chunk__46631_48060 = null;
var count__46632_48061 = (0);
var i__46633_48062 = (0);
while(true){
if((i__46633_48062 < count__46632_48061)){
var param_48063 = chunk__46631_48060.cljs$core$IIndexed$_nth$arity$2(null,i__46633_48062);
cljs.compiler.emit(param_48063);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_48063,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__48065 = seq__46630_48059;
var G__48066 = chunk__46631_48060;
var G__48067 = count__46632_48061;
var G__48068 = (i__46633_48062 + (1));
seq__46630_48059 = G__48065;
chunk__46631_48060 = G__48066;
count__46632_48061 = G__48067;
i__46633_48062 = G__48068;
continue;
} else {
var temp__5720__auto___48071 = cljs.core.seq(seq__46630_48059);
if(temp__5720__auto___48071){
var seq__46630_48078__$1 = temp__5720__auto___48071;
if(cljs.core.chunked_seq_QMARK_(seq__46630_48078__$1)){
var c__4550__auto___48079 = cljs.core.chunk_first(seq__46630_48078__$1);
var G__48081 = cljs.core.chunk_rest(seq__46630_48078__$1);
var G__48082 = c__4550__auto___48079;
var G__48083 = cljs.core.count(c__4550__auto___48079);
var G__48084 = (0);
seq__46630_48059 = G__48081;
chunk__46631_48060 = G__48082;
count__46632_48061 = G__48083;
i__46633_48062 = G__48084;
continue;
} else {
var param_48085 = cljs.core.first(seq__46630_48078__$1);
cljs.compiler.emit(param_48085);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_48085,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__48091 = cljs.core.next(seq__46630_48078__$1);
var G__48092 = null;
var G__48093 = (0);
var G__48094 = (0);
seq__46630_48059 = G__48091;
chunk__46631_48060 = G__48092;
count__46632_48061 = G__48093;
i__46633_48062 = G__48094;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_47981,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_47981,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_47980__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_47981,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_47982,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_47981,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__46650){
var map__46651 = p__46650;
var map__46651__$1 = (((((!((map__46651 == null))))?(((((map__46651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46651):map__46651);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__46639_SHARP_){
var and__4120__auto__ = p1__46639_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__46639_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_48107__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_48108 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_48107__$1);
var maxparams_48109 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_48110 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_48107__$1,mname_48108,maxparams_48109,loop_locals,map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_48108),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_48107__$1,mname_48108,maxparams_48109,loop_locals,map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_48111 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_48107__$1,mname_48108,maxparams_48109,mmap_48110,loop_locals,map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__46643_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__46643_SHARP_)));
});})(name_48107__$1,mname_48108,maxparams_48109,mmap_48110,loop_locals,map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq(mmap_48110));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_48108," = null;");

var seq__46653_48138 = cljs.core.seq(ms_48111);
var chunk__46654_48139 = null;
var count__46655_48140 = (0);
var i__46656_48141 = (0);
while(true){
if((i__46656_48141 < count__46655_48140)){
var vec__46665_48143 = chunk__46654_48139.cljs$core$IIndexed$_nth$arity$2(null,i__46656_48141);
var n_48144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46665_48143,(0),null);
var meth_48145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46665_48143,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_48144," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_48145))){
cljs.compiler.emit_variadic_fn_method(meth_48145);
} else {
cljs.compiler.emit_fn_method(meth_48145);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__48150 = seq__46653_48138;
var G__48151 = chunk__46654_48139;
var G__48152 = count__46655_48140;
var G__48153 = (i__46656_48141 + (1));
seq__46653_48138 = G__48150;
chunk__46654_48139 = G__48151;
count__46655_48140 = G__48152;
i__46656_48141 = G__48153;
continue;
} else {
var temp__5720__auto___48154 = cljs.core.seq(seq__46653_48138);
if(temp__5720__auto___48154){
var seq__46653_48155__$1 = temp__5720__auto___48154;
if(cljs.core.chunked_seq_QMARK_(seq__46653_48155__$1)){
var c__4550__auto___48156 = cljs.core.chunk_first(seq__46653_48155__$1);
var G__48158 = cljs.core.chunk_rest(seq__46653_48155__$1);
var G__48159 = c__4550__auto___48156;
var G__48160 = cljs.core.count(c__4550__auto___48156);
var G__48161 = (0);
seq__46653_48138 = G__48158;
chunk__46654_48139 = G__48159;
count__46655_48140 = G__48160;
i__46656_48141 = G__48161;
continue;
} else {
var vec__46668_48162 = cljs.core.first(seq__46653_48155__$1);
var n_48163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46668_48162,(0),null);
var meth_48164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46668_48162,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_48163," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_48164))){
cljs.compiler.emit_variadic_fn_method(meth_48164);
} else {
cljs.compiler.emit_fn_method(meth_48164);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__48169 = cljs.core.next(seq__46653_48155__$1);
var G__48170 = null;
var G__48171 = (0);
var G__48172 = (0);
seq__46653_48138 = G__48169;
chunk__46654_48139 = G__48170;
count__46655_48140 = G__48171;
i__46656_48141 = G__48172;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_48108," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_48109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_48109)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_48109));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__46671_48177 = cljs.core.seq(ms_48111);
var chunk__46672_48178 = null;
var count__46673_48179 = (0);
var i__46674_48180 = (0);
while(true){
if((i__46674_48180 < count__46673_48179)){
var vec__46682_48181 = chunk__46672_48178.cljs$core$IIndexed$_nth$arity$2(null,i__46674_48180);
var n_48182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46682_48181,(0),null);
var meth_48183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46682_48181,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_48183))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_48184 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_48184," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_48189 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_48184," = new cljs.core.IndexedSeq(",a_48189,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_48182,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_48109)),(((cljs.core.count(maxparams_48109) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_48184,");"], 0));
} else {
var pcnt_48190 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_48183));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_48190,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_48182,".call(this",(((pcnt_48190 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_48190,maxparams_48109)),null,(1),null)),(2),null))),");");
}


var G__48192 = seq__46671_48177;
var G__48193 = chunk__46672_48178;
var G__48194 = count__46673_48179;
var G__48195 = (i__46674_48180 + (1));
seq__46671_48177 = G__48192;
chunk__46672_48178 = G__48193;
count__46673_48179 = G__48194;
i__46674_48180 = G__48195;
continue;
} else {
var temp__5720__auto___48203 = cljs.core.seq(seq__46671_48177);
if(temp__5720__auto___48203){
var seq__46671_48204__$1 = temp__5720__auto___48203;
if(cljs.core.chunked_seq_QMARK_(seq__46671_48204__$1)){
var c__4550__auto___48205 = cljs.core.chunk_first(seq__46671_48204__$1);
var G__48209 = cljs.core.chunk_rest(seq__46671_48204__$1);
var G__48210 = c__4550__auto___48205;
var G__48211 = cljs.core.count(c__4550__auto___48205);
var G__48212 = (0);
seq__46671_48177 = G__48209;
chunk__46672_48178 = G__48210;
count__46673_48179 = G__48211;
i__46674_48180 = G__48212;
continue;
} else {
var vec__46687_48214 = cljs.core.first(seq__46671_48204__$1);
var n_48215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46687_48214,(0),null);
var meth_48216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46687_48214,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_48216))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_48217 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_48217," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_48220 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_48217," = new cljs.core.IndexedSeq(",a_48220,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_48215,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_48109)),(((cljs.core.count(maxparams_48109) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_48217,");"], 0));
} else {
var pcnt_48224 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_48216));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_48224,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_48215,".call(this",(((pcnt_48224 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_48224,maxparams_48109)),null,(1),null)),(2),null))),");");
}


var G__48225 = cljs.core.next(seq__46671_48204__$1);
var G__48226 = null;
var G__48227 = (0);
var G__48228 = (0);
seq__46671_48177 = G__48225;
chunk__46672_48178 = G__48226;
count__46673_48179 = G__48227;
i__46674_48180 = G__48228;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_48229 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_48111)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_48229,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_48108,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_48108,".cljs$lang$applyTo = ",cljs.core.some(((function (name_48107__$1,mname_48108,maxparams_48109,mmap_48110,ms_48111,loop_locals,map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__46649_SHARP_){
var vec__46692 = p1__46649_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46692,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46692,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_48107__$1,mname_48108,maxparams_48109,mmap_48110,ms_48111,loop_locals,map__46651,map__46651__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_48111),".cljs$lang$applyTo;");
} else {
}

var seq__46695_48256 = cljs.core.seq(ms_48111);
var chunk__46696_48257 = null;
var count__46697_48258 = (0);
var i__46698_48259 = (0);
while(true){
if((i__46698_48259 < count__46697_48258)){
var vec__46706_48260 = chunk__46696_48257.cljs$core$IIndexed$_nth$arity$2(null,i__46698_48259);
var n_48261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46706_48260,(0),null);
var meth_48262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46706_48260,(1),null);
var c_48267 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_48262));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_48262))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_48108,".cljs$core$IFn$_invoke$arity$variadic = ",n_48261,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_48108,".cljs$core$IFn$_invoke$arity$",c_48267," = ",n_48261,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__48269 = seq__46695_48256;
var G__48270 = chunk__46696_48257;
var G__48271 = count__46697_48258;
var G__48272 = (i__46698_48259 + (1));
seq__46695_48256 = G__48269;
chunk__46696_48257 = G__48270;
count__46697_48258 = G__48271;
i__46698_48259 = G__48272;
continue;
} else {
var temp__5720__auto___48273 = cljs.core.seq(seq__46695_48256);
if(temp__5720__auto___48273){
var seq__46695_48274__$1 = temp__5720__auto___48273;
if(cljs.core.chunked_seq_QMARK_(seq__46695_48274__$1)){
var c__4550__auto___48276 = cljs.core.chunk_first(seq__46695_48274__$1);
var G__48277 = cljs.core.chunk_rest(seq__46695_48274__$1);
var G__48278 = c__4550__auto___48276;
var G__48279 = cljs.core.count(c__4550__auto___48276);
var G__48280 = (0);
seq__46695_48256 = G__48277;
chunk__46696_48257 = G__48278;
count__46697_48258 = G__48279;
i__46698_48259 = G__48280;
continue;
} else {
var vec__46709_48281 = cljs.core.first(seq__46695_48274__$1);
var n_48282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46709_48281,(0),null);
var meth_48283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46709_48281,(1),null);
var c_48285 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_48283));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_48283))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_48108,".cljs$core$IFn$_invoke$arity$variadic = ",n_48282,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_48108,".cljs$core$IFn$_invoke$arity$",c_48285," = ",n_48282,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__48290 = cljs.core.next(seq__46695_48274__$1);
var G__48291 = null;
var G__48292 = (0);
var G__48293 = (0);
seq__46695_48256 = G__48290;
chunk__46696_48257 = G__48291;
count__46697_48258 = G__48292;
i__46698_48259 = G__48293;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_48108,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__46712){
var map__46713 = p__46712;
var map__46713__$1 = (((((!((map__46713 == null))))?(((((map__46713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46713):map__46713);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__46715_48307 = cljs.core.seq(statements);
var chunk__46716_48308 = null;
var count__46717_48309 = (0);
var i__46718_48310 = (0);
while(true){
if((i__46718_48310 < count__46717_48309)){
var s_48315 = chunk__46716_48308.cljs$core$IIndexed$_nth$arity$2(null,i__46718_48310);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_48315);


var G__48316 = seq__46715_48307;
var G__48317 = chunk__46716_48308;
var G__48318 = count__46717_48309;
var G__48319 = (i__46718_48310 + (1));
seq__46715_48307 = G__48316;
chunk__46716_48308 = G__48317;
count__46717_48309 = G__48318;
i__46718_48310 = G__48319;
continue;
} else {
var temp__5720__auto___48320 = cljs.core.seq(seq__46715_48307);
if(temp__5720__auto___48320){
var seq__46715_48321__$1 = temp__5720__auto___48320;
if(cljs.core.chunked_seq_QMARK_(seq__46715_48321__$1)){
var c__4550__auto___48322 = cljs.core.chunk_first(seq__46715_48321__$1);
var G__48323 = cljs.core.chunk_rest(seq__46715_48321__$1);
var G__48324 = c__4550__auto___48322;
var G__48325 = cljs.core.count(c__4550__auto___48322);
var G__48326 = (0);
seq__46715_48307 = G__48323;
chunk__46716_48308 = G__48324;
count__46717_48309 = G__48325;
i__46718_48310 = G__48326;
continue;
} else {
var s_48328 = cljs.core.first(seq__46715_48321__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_48328);


var G__48329 = cljs.core.next(seq__46715_48321__$1);
var G__48330 = null;
var G__48331 = (0);
var G__48332 = (0);
seq__46715_48307 = G__48329;
chunk__46716_48308 = G__48330;
count__46717_48309 = G__48331;
i__46718_48310 = G__48332;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__46722){
var map__46723 = p__46722;
var map__46723__$1 = (((((!((map__46723 == null))))?(((((map__46723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46723):map__46723);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46723__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46723__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46723__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__46725,is_loop){
var map__46726 = p__46725;
var map__46726__$1 = (((((!((map__46726 == null))))?(((((map__46726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46726):map__46726);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46726__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46726__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__46728_48336 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__46729_48337 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR__orig_val__46728_48336,context,map__46726,map__46726__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__46728_48336,context,map__46726,map__46726__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__46729_48337;

try{var seq__46730_48338 = cljs.core.seq(bindings);
var chunk__46731_48339 = null;
var count__46732_48340 = (0);
var i__46733_48341 = (0);
while(true){
if((i__46733_48341 < count__46732_48340)){
var map__46744_48342 = chunk__46731_48339.cljs$core$IIndexed$_nth$arity$2(null,i__46733_48341);
var map__46744_48343__$1 = (((((!((map__46744_48342 == null))))?(((((map__46744_48342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46744_48342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46744_48342):map__46744_48342);
var binding_48344 = map__46744_48343__$1;
var init_48345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46744_48343__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_48344);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_48345,";");


var G__48346 = seq__46730_48338;
var G__48347 = chunk__46731_48339;
var G__48348 = count__46732_48340;
var G__48349 = (i__46733_48341 + (1));
seq__46730_48338 = G__48346;
chunk__46731_48339 = G__48347;
count__46732_48340 = G__48348;
i__46733_48341 = G__48349;
continue;
} else {
var temp__5720__auto___48350 = cljs.core.seq(seq__46730_48338);
if(temp__5720__auto___48350){
var seq__46730_48351__$1 = temp__5720__auto___48350;
if(cljs.core.chunked_seq_QMARK_(seq__46730_48351__$1)){
var c__4550__auto___48352 = cljs.core.chunk_first(seq__46730_48351__$1);
var G__48353 = cljs.core.chunk_rest(seq__46730_48351__$1);
var G__48354 = c__4550__auto___48352;
var G__48355 = cljs.core.count(c__4550__auto___48352);
var G__48356 = (0);
seq__46730_48338 = G__48353;
chunk__46731_48339 = G__48354;
count__46732_48340 = G__48355;
i__46733_48341 = G__48356;
continue;
} else {
var map__46746_48357 = cljs.core.first(seq__46730_48351__$1);
var map__46746_48358__$1 = (((((!((map__46746_48357 == null))))?(((((map__46746_48357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46746_48357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46746_48357):map__46746_48357);
var binding_48359 = map__46746_48358__$1;
var init_48360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46746_48358__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_48359);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_48360,";");


var G__48363 = cljs.core.next(seq__46730_48351__$1);
var G__48364 = null;
var G__48365 = (0);
var G__48366 = (0);
seq__46730_48338 = G__48363;
chunk__46731_48339 = G__48364;
count__46732_48340 = G__48365;
i__46733_48341 = G__48366;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__46728_48336;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__46751){
var map__46752 = p__46751;
var map__46752__$1 = (((((!((map__46752 == null))))?(((((map__46752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46752):map__46752);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___48393 = cljs.core.count(exprs);
var i_48394 = (0);
while(true){
if((i_48394 < n__4607__auto___48393)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_48394) : temps.call(null,i_48394))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_48394) : exprs.call(null,i_48394)),";");

var G__48396 = (i_48394 + (1));
i_48394 = G__48396;
continue;
} else {
}
break;
}

var n__4607__auto___48397 = cljs.core.count(exprs);
var i_48398 = (0);
while(true){
if((i_48398 < n__4607__auto___48397)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_48398) : params.call(null,i_48398)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_48398) : temps.call(null,i_48398)),";");

var G__48400 = (i_48398 + (1));
i_48398 = G__48400;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__46758){
var map__46759 = p__46758;
var map__46759__$1 = (((((!((map__46759 == null))))?(((((map__46759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46759):map__46759);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46759__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46759__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__46761_48434 = cljs.core.seq(bindings);
var chunk__46762_48435 = null;
var count__46763_48436 = (0);
var i__46764_48437 = (0);
while(true){
if((i__46764_48437 < count__46763_48436)){
var map__46770_48438 = chunk__46762_48435.cljs$core$IIndexed$_nth$arity$2(null,i__46764_48437);
var map__46770_48439__$1 = (((((!((map__46770_48438 == null))))?(((((map__46770_48438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46770_48438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46770_48438):map__46770_48438);
var binding_48440 = map__46770_48439__$1;
var init_48441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46770_48439__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_48440)," = ",init_48441,";");


var G__48443 = seq__46761_48434;
var G__48444 = chunk__46762_48435;
var G__48445 = count__46763_48436;
var G__48446 = (i__46764_48437 + (1));
seq__46761_48434 = G__48443;
chunk__46762_48435 = G__48444;
count__46763_48436 = G__48445;
i__46764_48437 = G__48446;
continue;
} else {
var temp__5720__auto___48447 = cljs.core.seq(seq__46761_48434);
if(temp__5720__auto___48447){
var seq__46761_48448__$1 = temp__5720__auto___48447;
if(cljs.core.chunked_seq_QMARK_(seq__46761_48448__$1)){
var c__4550__auto___48449 = cljs.core.chunk_first(seq__46761_48448__$1);
var G__48450 = cljs.core.chunk_rest(seq__46761_48448__$1);
var G__48451 = c__4550__auto___48449;
var G__48452 = cljs.core.count(c__4550__auto___48449);
var G__48453 = (0);
seq__46761_48434 = G__48450;
chunk__46762_48435 = G__48451;
count__46763_48436 = G__48452;
i__46764_48437 = G__48453;
continue;
} else {
var map__46780_48454 = cljs.core.first(seq__46761_48448__$1);
var map__46780_48455__$1 = (((((!((map__46780_48454 == null))))?(((((map__46780_48454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46780_48454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46780_48454):map__46780_48454);
var binding_48456 = map__46780_48455__$1;
var init_48457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46780_48455__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_48456)," = ",init_48457,";");


var G__48458 = cljs.core.next(seq__46761_48448__$1);
var G__48459 = null;
var G__48460 = (0);
var G__48461 = (0);
seq__46761_48434 = G__48458;
chunk__46762_48435 = G__48459;
count__46763_48436 = G__48460;
i__46764_48437 = G__48461;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__46790){
var map__46791 = p__46790;
var map__46791__$1 = (((((!((map__46791 == null))))?(((((map__46791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46791):map__46791);
var expr = map__46791__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46791__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46791__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46791__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var and__4120__auto____$4 = cljs.core.not((function (){var fexpr__46807 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__46807.cljs$core$IFn$_invoke$arity$1 ? fexpr__46807.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__46807.call(null,tag));
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
var vec__46794 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env){
return (function (p1__46788_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46788_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env){
return (function (p1__46789_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46789_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46791,map__46791__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46794,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46794,(1),null);
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_48507 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_48507,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_48508 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_48508,args)),(((mfa_48508 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_48508,args)),"], 0))"], 0));
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
var G__46823 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__46822 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__46822.cljs$core$IFn$_invoke$arity$1 ? fexpr__46822.cljs$core$IFn$_invoke$arity$1(G__46823) : fexpr__46822.call(null,G__46823));
} else {
return and__4120__auto__;
}
})())){
var fprop_48514 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_48514," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_48514,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_48514," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_48514,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__46825){
var map__46826 = p__46825;
var map__46826__$1 = (((((!((map__46826 == null))))?(((((map__46826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46826):map__46826);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46826__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46826__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__46831){
var map__46832 = p__46831;
var map__46832__$1 = (((((!((map__46832 == null))))?(((((map__46832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46832):map__46832);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46832__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46832__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46832__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target," = ",val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
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
var map__46837 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__46837__$1 = (((((!((map__46837 == null))))?(((((map__46837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46837):map__46837);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46837__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46837__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__46838 = options;
var map__46838__$1 = (((((!((map__46838 == null))))?(((((map__46838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46838):map__46838);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__46839 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__46847 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__46847__$1 = (((((!((map__46847 == null))))?(((((map__46847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46847):map__46847);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46847__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46847__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46839,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46839,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__46853_48541 = cljs.core.seq(libs_to_load);
var chunk__46854_48542 = null;
var count__46855_48543 = (0);
var i__46856_48544 = (0);
while(true){
if((i__46856_48544 < count__46855_48543)){
var lib_48545 = chunk__46854_48542.cljs$core$IIndexed$_nth$arity$2(null,i__46856_48544);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_48545)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_48545),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_48545),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_48545),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_48545),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_48545,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_48545),"');");
}

}
}
}


var G__48548 = seq__46853_48541;
var G__48549 = chunk__46854_48542;
var G__48550 = count__46855_48543;
var G__48551 = (i__46856_48544 + (1));
seq__46853_48541 = G__48548;
chunk__46854_48542 = G__48549;
count__46855_48543 = G__48550;
i__46856_48544 = G__48551;
continue;
} else {
var temp__5720__auto___48552 = cljs.core.seq(seq__46853_48541);
if(temp__5720__auto___48552){
var seq__46853_48554__$1 = temp__5720__auto___48552;
if(cljs.core.chunked_seq_QMARK_(seq__46853_48554__$1)){
var c__4550__auto___48555 = cljs.core.chunk_first(seq__46853_48554__$1);
var G__48556 = cljs.core.chunk_rest(seq__46853_48554__$1);
var G__48557 = c__4550__auto___48555;
var G__48558 = cljs.core.count(c__4550__auto___48555);
var G__48559 = (0);
seq__46853_48541 = G__48556;
chunk__46854_48542 = G__48557;
count__46855_48543 = G__48558;
i__46856_48544 = G__48559;
continue;
} else {
var lib_48561 = cljs.core.first(seq__46853_48554__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_48561)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_48561),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_48561),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_48561),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_48561),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_48561,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_48561),"');");
}

}
}
}


var G__48691 = cljs.core.next(seq__46853_48554__$1);
var G__48692 = null;
var G__48693 = (0);
var G__48694 = (0);
seq__46853_48541 = G__48691;
chunk__46854_48542 = G__48692;
count__46855_48543 = G__48693;
i__46856_48544 = G__48694;
continue;
}
} else {
}
}
break;
}

var seq__46880_48698 = cljs.core.seq(node_libs);
var chunk__46881_48699 = null;
var count__46882_48700 = (0);
var i__46883_48701 = (0);
while(true){
if((i__46883_48701 < count__46882_48700)){
var lib_48702 = chunk__46881_48699.cljs$core$IIndexed$_nth$arity$2(null,i__46883_48701);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_48702)," = require('",lib_48702,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__48706 = seq__46880_48698;
var G__48707 = chunk__46881_48699;
var G__48708 = count__46882_48700;
var G__48709 = (i__46883_48701 + (1));
seq__46880_48698 = G__48706;
chunk__46881_48699 = G__48707;
count__46882_48700 = G__48708;
i__46883_48701 = G__48709;
continue;
} else {
var temp__5720__auto___48711 = cljs.core.seq(seq__46880_48698);
if(temp__5720__auto___48711){
var seq__46880_48714__$1 = temp__5720__auto___48711;
if(cljs.core.chunked_seq_QMARK_(seq__46880_48714__$1)){
var c__4550__auto___48715 = cljs.core.chunk_first(seq__46880_48714__$1);
var G__48716 = cljs.core.chunk_rest(seq__46880_48714__$1);
var G__48717 = c__4550__auto___48715;
var G__48718 = cljs.core.count(c__4550__auto___48715);
var G__48719 = (0);
seq__46880_48698 = G__48716;
chunk__46881_48699 = G__48717;
count__46882_48700 = G__48718;
i__46883_48701 = G__48719;
continue;
} else {
var lib_48720 = cljs.core.first(seq__46880_48714__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_48720)," = require('",lib_48720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__48723 = cljs.core.next(seq__46880_48714__$1);
var G__48724 = null;
var G__48725 = (0);
var G__48726 = (0);
seq__46880_48698 = G__48723;
chunk__46881_48699 = G__48724;
count__46882_48700 = G__48725;
i__46883_48701 = G__48726;
continue;
}
} else {
}
}
break;
}

var seq__46887_48727 = cljs.core.seq(global_exports_libs);
var chunk__46888_48728 = null;
var count__46889_48729 = (0);
var i__46890_48730 = (0);
while(true){
if((i__46890_48730 < count__46889_48729)){
var lib_48732 = chunk__46888_48728.cljs$core$IIndexed$_nth$arity$2(null,i__46890_48730);
var map__46907_48733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_48732));
var map__46907_48734__$1 = (((((!((map__46907_48733 == null))))?(((((map__46907_48733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46907_48733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46907_48733):map__46907_48733);
var global_exports_48735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46907_48734__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_48735,lib_48732);


var G__48746 = seq__46887_48727;
var G__48747 = chunk__46888_48728;
var G__48748 = count__46889_48729;
var G__48749 = (i__46890_48730 + (1));
seq__46887_48727 = G__48746;
chunk__46888_48728 = G__48747;
count__46889_48729 = G__48748;
i__46890_48730 = G__48749;
continue;
} else {
var temp__5720__auto___48751 = cljs.core.seq(seq__46887_48727);
if(temp__5720__auto___48751){
var seq__46887_48756__$1 = temp__5720__auto___48751;
if(cljs.core.chunked_seq_QMARK_(seq__46887_48756__$1)){
var c__4550__auto___48758 = cljs.core.chunk_first(seq__46887_48756__$1);
var G__48759 = cljs.core.chunk_rest(seq__46887_48756__$1);
var G__48760 = c__4550__auto___48758;
var G__48761 = cljs.core.count(c__4550__auto___48758);
var G__48762 = (0);
seq__46887_48727 = G__48759;
chunk__46888_48728 = G__48760;
count__46889_48729 = G__48761;
i__46890_48730 = G__48762;
continue;
} else {
var lib_48769 = cljs.core.first(seq__46887_48756__$1);
var map__46914_48771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_48769));
var map__46914_48772__$1 = (((((!((map__46914_48771 == null))))?(((((map__46914_48771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46914_48771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46914_48771):map__46914_48771);
var global_exports_48773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46914_48772__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_48773,lib_48769);


var G__48776 = cljs.core.next(seq__46887_48756__$1);
var G__48777 = null;
var G__48778 = (0);
var G__48779 = (0);
seq__46887_48727 = G__48776;
chunk__46888_48728 = G__48777;
count__46889_48729 = G__48778;
i__46890_48730 = G__48779;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__46924){
var map__46925 = p__46924;
var map__46925__$1 = (((((!((map__46925 == null))))?(((((map__46925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46925):map__46925);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__46937){
var map__46938 = p__46937;
var map__46938__$1 = (((((!((map__46938 == null))))?(((((map__46938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46938):map__46938);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__46947){
var map__46948 = p__46947;
var map__46948__$1 = (((((!((map__46948 == null))))?(((((map__46948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46948):map__46948);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__46953_48813 = cljs.core.seq(protocols);
var chunk__46954_48814 = null;
var count__46955_48815 = (0);
var i__46956_48816 = (0);
while(true){
if((i__46956_48816 < count__46955_48815)){
var protocol_48817 = chunk__46954_48814.cljs$core$IIndexed$_nth$arity$2(null,i__46956_48816);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_48817)),"}");


var G__48818 = seq__46953_48813;
var G__48819 = chunk__46954_48814;
var G__48820 = count__46955_48815;
var G__48821 = (i__46956_48816 + (1));
seq__46953_48813 = G__48818;
chunk__46954_48814 = G__48819;
count__46955_48815 = G__48820;
i__46956_48816 = G__48821;
continue;
} else {
var temp__5720__auto___48822 = cljs.core.seq(seq__46953_48813);
if(temp__5720__auto___48822){
var seq__46953_48823__$1 = temp__5720__auto___48822;
if(cljs.core.chunked_seq_QMARK_(seq__46953_48823__$1)){
var c__4550__auto___48824 = cljs.core.chunk_first(seq__46953_48823__$1);
var G__48825 = cljs.core.chunk_rest(seq__46953_48823__$1);
var G__48826 = c__4550__auto___48824;
var G__48827 = cljs.core.count(c__4550__auto___48824);
var G__48828 = (0);
seq__46953_48813 = G__48825;
chunk__46954_48814 = G__48826;
count__46955_48815 = G__48827;
i__46956_48816 = G__48828;
continue;
} else {
var protocol_48857 = cljs.core.first(seq__46953_48823__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_48857)),"}");


var G__48858 = cljs.core.next(seq__46953_48823__$1);
var G__48859 = null;
var G__48860 = (0);
var G__48861 = (0);
seq__46953_48813 = G__48858;
chunk__46954_48814 = G__48859;
count__46955_48815 = G__48860;
i__46956_48816 = G__48861;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__46966_48866 = cljs.core.seq(fields__$1);
var chunk__46967_48867 = null;
var count__46968_48868 = (0);
var i__46969_48869 = (0);
while(true){
if((i__46969_48869 < count__46968_48868)){
var fld_48871 = chunk__46967_48867.cljs$core$IIndexed$_nth$arity$2(null,i__46969_48869);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_48871," = ",fld_48871,";");


var G__48874 = seq__46966_48866;
var G__48875 = chunk__46967_48867;
var G__48876 = count__46968_48868;
var G__48877 = (i__46969_48869 + (1));
seq__46966_48866 = G__48874;
chunk__46967_48867 = G__48875;
count__46968_48868 = G__48876;
i__46969_48869 = G__48877;
continue;
} else {
var temp__5720__auto___48878 = cljs.core.seq(seq__46966_48866);
if(temp__5720__auto___48878){
var seq__46966_48879__$1 = temp__5720__auto___48878;
if(cljs.core.chunked_seq_QMARK_(seq__46966_48879__$1)){
var c__4550__auto___48880 = cljs.core.chunk_first(seq__46966_48879__$1);
var G__48881 = cljs.core.chunk_rest(seq__46966_48879__$1);
var G__48882 = c__4550__auto___48880;
var G__48883 = cljs.core.count(c__4550__auto___48880);
var G__48884 = (0);
seq__46966_48866 = G__48881;
chunk__46967_48867 = G__48882;
count__46968_48868 = G__48883;
i__46969_48869 = G__48884;
continue;
} else {
var fld_48885 = cljs.core.first(seq__46966_48879__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_48885," = ",fld_48885,";");


var G__48888 = cljs.core.next(seq__46966_48879__$1);
var G__48889 = null;
var G__48890 = (0);
var G__48891 = (0);
seq__46966_48866 = G__48888;
chunk__46967_48867 = G__48889;
count__46968_48868 = G__48890;
i__46969_48869 = G__48891;
continue;
}
} else {
}
}
break;
}

var seq__46978_48895 = cljs.core.seq(pmasks);
var chunk__46979_48896 = null;
var count__46980_48897 = (0);
var i__46981_48898 = (0);
while(true){
if((i__46981_48898 < count__46980_48897)){
var vec__46990_48899 = chunk__46979_48896.cljs$core$IIndexed$_nth$arity$2(null,i__46981_48898);
var pno_48900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46990_48899,(0),null);
var pmask_48901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46990_48899,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_48900,"$ = ",pmask_48901,";");


var G__48903 = seq__46978_48895;
var G__48904 = chunk__46979_48896;
var G__48905 = count__46980_48897;
var G__48906 = (i__46981_48898 + (1));
seq__46978_48895 = G__48903;
chunk__46979_48896 = G__48904;
count__46980_48897 = G__48905;
i__46981_48898 = G__48906;
continue;
} else {
var temp__5720__auto___48907 = cljs.core.seq(seq__46978_48895);
if(temp__5720__auto___48907){
var seq__46978_48909__$1 = temp__5720__auto___48907;
if(cljs.core.chunked_seq_QMARK_(seq__46978_48909__$1)){
var c__4550__auto___48910 = cljs.core.chunk_first(seq__46978_48909__$1);
var G__48911 = cljs.core.chunk_rest(seq__46978_48909__$1);
var G__48912 = c__4550__auto___48910;
var G__48913 = cljs.core.count(c__4550__auto___48910);
var G__48914 = (0);
seq__46978_48895 = G__48911;
chunk__46979_48896 = G__48912;
count__46980_48897 = G__48913;
i__46981_48898 = G__48914;
continue;
} else {
var vec__46993_48915 = cljs.core.first(seq__46978_48909__$1);
var pno_48916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46993_48915,(0),null);
var pmask_48917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46993_48915,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_48916,"$ = ",pmask_48917,";");


var G__48926 = cljs.core.next(seq__46978_48909__$1);
var G__48927 = null;
var G__48928 = (0);
var G__48929 = (0);
seq__46978_48895 = G__48926;
chunk__46979_48896 = G__48927;
count__46980_48897 = G__48928;
i__46981_48898 = G__48929;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__46996){
var map__46997 = p__46996;
var map__46997__$1 = (((((!((map__46997 == null))))?(((((map__46997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46997):map__46997);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46997__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46997__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46997__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46997__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46997__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__46999_48936 = cljs.core.seq(protocols);
var chunk__47000_48937 = null;
var count__47001_48938 = (0);
var i__47002_48939 = (0);
while(true){
if((i__47002_48939 < count__47001_48938)){
var protocol_48940 = chunk__47000_48937.cljs$core$IIndexed$_nth$arity$2(null,i__47002_48939);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_48940)),"}");


var G__48941 = seq__46999_48936;
var G__48942 = chunk__47000_48937;
var G__48943 = count__47001_48938;
var G__48944 = (i__47002_48939 + (1));
seq__46999_48936 = G__48941;
chunk__47000_48937 = G__48942;
count__47001_48938 = G__48943;
i__47002_48939 = G__48944;
continue;
} else {
var temp__5720__auto___48945 = cljs.core.seq(seq__46999_48936);
if(temp__5720__auto___48945){
var seq__46999_48946__$1 = temp__5720__auto___48945;
if(cljs.core.chunked_seq_QMARK_(seq__46999_48946__$1)){
var c__4550__auto___48949 = cljs.core.chunk_first(seq__46999_48946__$1);
var G__48950 = cljs.core.chunk_rest(seq__46999_48946__$1);
var G__48951 = c__4550__auto___48949;
var G__48952 = cljs.core.count(c__4550__auto___48949);
var G__48953 = (0);
seq__46999_48936 = G__48950;
chunk__47000_48937 = G__48951;
count__47001_48938 = G__48952;
i__47002_48939 = G__48953;
continue;
} else {
var protocol_48955 = cljs.core.first(seq__46999_48946__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_48955)),"}");


var G__48957 = cljs.core.next(seq__46999_48946__$1);
var G__48958 = null;
var G__48959 = (0);
var G__48960 = (0);
seq__46999_48936 = G__48957;
chunk__47000_48937 = G__48958;
count__47001_48938 = G__48959;
i__47002_48939 = G__48960;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__47009_48964 = cljs.core.seq(fields__$1);
var chunk__47010_48965 = null;
var count__47011_48966 = (0);
var i__47012_48967 = (0);
while(true){
if((i__47012_48967 < count__47011_48966)){
var fld_48969 = chunk__47010_48965.cljs$core$IIndexed$_nth$arity$2(null,i__47012_48967);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_48969," = ",fld_48969,";");


var G__48971 = seq__47009_48964;
var G__48972 = chunk__47010_48965;
var G__48973 = count__47011_48966;
var G__48974 = (i__47012_48967 + (1));
seq__47009_48964 = G__48971;
chunk__47010_48965 = G__48972;
count__47011_48966 = G__48973;
i__47012_48967 = G__48974;
continue;
} else {
var temp__5720__auto___48976 = cljs.core.seq(seq__47009_48964);
if(temp__5720__auto___48976){
var seq__47009_48978__$1 = temp__5720__auto___48976;
if(cljs.core.chunked_seq_QMARK_(seq__47009_48978__$1)){
var c__4550__auto___48984 = cljs.core.chunk_first(seq__47009_48978__$1);
var G__48986 = cljs.core.chunk_rest(seq__47009_48978__$1);
var G__48987 = c__4550__auto___48984;
var G__48988 = cljs.core.count(c__4550__auto___48984);
var G__48989 = (0);
seq__47009_48964 = G__48986;
chunk__47010_48965 = G__48987;
count__47011_48966 = G__48988;
i__47012_48967 = G__48989;
continue;
} else {
var fld_48991 = cljs.core.first(seq__47009_48978__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_48991," = ",fld_48991,";");


var G__48992 = cljs.core.next(seq__47009_48978__$1);
var G__48993 = null;
var G__48994 = (0);
var G__48995 = (0);
seq__47009_48964 = G__48992;
chunk__47010_48965 = G__48993;
count__47011_48966 = G__48994;
i__47012_48967 = G__48995;
continue;
}
} else {
}
}
break;
}

var seq__47018_48997 = cljs.core.seq(pmasks);
var chunk__47019_48998 = null;
var count__47020_48999 = (0);
var i__47021_49000 = (0);
while(true){
if((i__47021_49000 < count__47020_48999)){
var vec__47031_49001 = chunk__47019_48998.cljs$core$IIndexed$_nth$arity$2(null,i__47021_49000);
var pno_49002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031_49001,(0),null);
var pmask_49003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031_49001,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_49002,"$ = ",pmask_49003,";");


var G__49007 = seq__47018_48997;
var G__49008 = chunk__47019_48998;
var G__49009 = count__47020_48999;
var G__49010 = (i__47021_49000 + (1));
seq__47018_48997 = G__49007;
chunk__47019_48998 = G__49008;
count__47020_48999 = G__49009;
i__47021_49000 = G__49010;
continue;
} else {
var temp__5720__auto___49011 = cljs.core.seq(seq__47018_48997);
if(temp__5720__auto___49011){
var seq__47018_49012__$1 = temp__5720__auto___49011;
if(cljs.core.chunked_seq_QMARK_(seq__47018_49012__$1)){
var c__4550__auto___49013 = cljs.core.chunk_first(seq__47018_49012__$1);
var G__49014 = cljs.core.chunk_rest(seq__47018_49012__$1);
var G__49015 = c__4550__auto___49013;
var G__49016 = cljs.core.count(c__4550__auto___49013);
var G__49017 = (0);
seq__47018_48997 = G__49014;
chunk__47019_48998 = G__49015;
count__47020_48999 = G__49016;
i__47021_49000 = G__49017;
continue;
} else {
var vec__47034_49018 = cljs.core.first(seq__47018_49012__$1);
var pno_49019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47034_49018,(0),null);
var pmask_49020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47034_49018,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_49019,"$ = ",pmask_49020,";");


var G__49022 = cljs.core.next(seq__47018_49012__$1);
var G__49023 = null;
var G__49024 = (0);
var G__49025 = (0);
seq__47018_48997 = G__49022;
chunk__47019_48998 = G__49023;
count__47020_48999 = G__49024;
i__47021_49000 = G__49025;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__47037){
var map__47038 = p__47037;
var map__47038__$1 = (((((!((map__47038 == null))))?(((((map__47038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47038):map__47038);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__47047){
var map__47048 = p__47047;
var map__47048__$1 = (((((!((map__47048 == null))))?(((((map__47048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47048):map__47048);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47048__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47048__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47048__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47048__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47048__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
var G__47053 = clojure.string.trim(code);
var G__47054 = "/*";
return goog.string.startsWith(G__47053,G__47054);
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__27600__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27600__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__47066 = cljs.core.seq(table);
var chunk__47067 = null;
var count__47068 = (0);
var i__47069 = (0);
while(true){
if((i__47069 < count__47068)){
var vec__47089 = chunk__47067.cljs$core$IIndexed$_nth$arity$2(null,i__47069);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47089,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47089,(1),null);
var ns_49050 = cljs.core.namespace(sym);
var name_49051 = cljs.core.name(sym);
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


var G__49055 = seq__47066;
var G__49056 = chunk__47067;
var G__49057 = count__47068;
var G__49058 = (i__47069 + (1));
seq__47066 = G__49055;
chunk__47067 = G__49056;
count__47068 = G__49057;
i__47069 = G__49058;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__47066);
if(temp__5720__auto__){
var seq__47066__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47066__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47066__$1);
var G__49089 = cljs.core.chunk_rest(seq__47066__$1);
var G__49090 = c__4550__auto__;
var G__49091 = cljs.core.count(c__4550__auto__);
var G__49092 = (0);
seq__47066 = G__49089;
chunk__47067 = G__49090;
count__47068 = G__49091;
i__47069 = G__49092;
continue;
} else {
var vec__47093 = cljs.core.first(seq__47066__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47093,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47093,(1),null);
var ns_49093 = cljs.core.namespace(sym);
var name_49094 = cljs.core.name(sym);
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


var G__49098 = cljs.core.next(seq__47066__$1);
var G__49099 = null;
var G__49100 = (0);
var G__49101 = (0);
seq__47066 = G__49098;
chunk__47067 = G__49099;
count__47068 = G__49100;
i__47069 = G__49101;
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
var G__47098 = arguments.length;
switch (G__47098) {
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
var k_49103 = cljs.core.first(ks);
var vec__47103_49104 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_49103);
var top_49105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47103_49104,(0),null);
var prefix_SINGLEQUOTE__49106 = vec__47103_49104;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_49103)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__49106) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_49105)) || (cljs.core.contains_QMARK_(known_externs,top_49105)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__49106)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_49105);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__49106)),";");
}
} else {
}

var m_49107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_49103);
if(cljs.core.empty_QMARK_(m_49107)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__49106,m_49107,top_level,known_externs);
}

var G__49108 = cljs.core.next(ks);
ks = G__49108;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

