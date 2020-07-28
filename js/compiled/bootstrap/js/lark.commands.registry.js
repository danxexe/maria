goog.provide('lark.commands.registry');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.events');
var module$node_modules$$braintripping$keypress_js$keypress=shadow.js.require("module$node_modules$$braintripping$keypress_js$keypress", {});
var G__66363_66559 = goog.object.get(window,"goog","events");
var G__66364_66560 = "listen";
var G__66365_66561 = goog.events.listen;
goog.object.set(G__66363_66559,G__66364_66560,G__66365_66561);
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.registry !== 'undefined') && (typeof lark.commands.registry.Keypress !== 'undefined')){
} else {
lark.commands.registry.Keypress = (new module$node_modules$$braintripping$keypress_js$keypress.keypress.Listener());
}
lark.commands.registry.mac_QMARK_ = (function (){var platform = navigator.platform;
return ((clojure.string.starts_with_QMARK_(platform,"Mac")) || (clojure.string.starts_with_QMARK_(platform,"iP")));
})();
lark.commands.registry.capitalize = (function lark$commands$registry$capitalize(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)).toUpperCase()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
});
lark.commands.registry.format_segment = (function lark$commands$registry$format_segment(target,modifier){
var modifier__$1 = clojure.string.lower_case(modifier);
var or__4131__auto__ = (function (){var G__66381 = target;
var G__66381__$1 = (((G__66381 instanceof cljs.core.Keyword))?G__66381.fqn:null);
switch (G__66381__$1) {
case "Keypress.js":
var G__66382 = modifier__$1;
switch (G__66382) {
case "m1":
return "meta";

break;
case "m2":
return "alt";

break;
case "m3":
if(lark.commands.registry.mac_QMARK_){
return "ctrl";
} else {
return "command";
}

break;
default:
return modifier__$1;

}

break;
case "internal":
var G__66387 = modifier__$1;
switch (G__66387) {
case "meta":
return "m1";

break;
case "alt":
case "option":
return "m2";

break;
default:
return modifier__$1;

}

break;
case "display":
var modifier__$2 = (function (){var G__66388 = new cljs.core.Keyword(null,"internal","internal",-854870097);
var G__66389 = modifier__$1;
return (lark.commands.registry.format_segment.cljs$core$IFn$_invoke$arity$2 ? lark.commands.registry.format_segment.cljs$core$IFn$_invoke$arity$2(G__66388,G__66389) : lark.commands.registry.format_segment.call(null,G__66388,G__66389));
})();
var G__66394 = modifier__$2;
switch (G__66394) {
case "m1":
if(lark.commands.registry.mac_QMARK_){
return "\u2318";
} else {
return "Ctrl";
}

break;
case "m2":
if(lark.commands.registry.mac_QMARK_){
return "Option";
} else {
return "Alt";
}

break;
case "m3":
if(lark.commands.registry.mac_QMARK_){
return "Ctrl";
} else {
return "Meta";
}

break;
case "left":
return "\u2190";

break;
case "right":
return "\u2192";

break;
case "up":
return "\u2191";

break;
case "down":
return "\u2193";

break;
case "backspace":
return "\u232B";

break;
default:
return lark.commands.registry.capitalize(modifier__$2);

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66381__$1)].join('')));

}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return modifier__$1;
}
});
lark.commands.registry.modifiers_internal = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["shift",null,"m2",null,"m1",null], null), null);
lark.commands.registry.binding_string__GT_vec = (function lark$commands$registry$binding_string__GT_vec(s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.commands.registry.format_segment,new cljs.core.Keyword(null,"internal","internal",-854870097)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\s-]/));
});
lark.commands.registry.binding_set = (function lark$commands$registry$binding_set(s){
return cljs.core.set(lark.commands.registry.binding_string__GT_vec(s));
});
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.registry !== 'undefined') && (typeof lark.commands.registry.commands !== 'undefined')){
} else {
lark.commands.registry.commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.registry !== 'undefined') && (typeof lark.commands.registry.mappings !== 'undefined')){
} else {
lark.commands.registry.mappings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.registry !== 'undefined') && (typeof lark.commands.registry.handler !== 'undefined')){
} else {
lark.commands.registry.handler = cljs.core.volatile_BANG_(null);
}
lark.commands.registry.M1_down_QMARK_ = (function lark$commands$registry$M1_down_QMARK_(e){
if(lark.commands.registry.mac_QMARK_){
return e.metaKey;
} else {
return e.ctrlKey;
}
});
/**
 * Returns command-names for a set of keys
 */
lark.commands.registry.get_keyset_commands = (function lark$commands$registry$get_keyset_commands(keyset){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lark.commands.registry.mappings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyset,new cljs.core.Keyword(null,"exec","exec",1625568743)], null));
});
lark.commands.registry.spaced_name = (function lark$commands$registry$spaced_name(the_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(the_name))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(the_name,(1)),"-"," "))].join('');
});
/**
 * Removes `x` from `coll`
 */
lark.commands.registry.seq_disj = (function lark$commands$registry$seq_disj(coll,x){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66405_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66405_SHARP_,x);
}),coll);
});
/**
 * Conj `x` to coll, distinct
 */
lark.commands.registry.distinct_conj = (function lark$commands$registry$distinct_conj(coll,x){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x));
});
lark.commands.registry.normalize_binding = (function lark$commands$registry$normalize_binding(binding){
var map__66413 = ((cljs.core.map_QMARK_(binding))?binding:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-string","key-string",914848745),binding], null));
var map__66413__$1 = (((((!((map__66413 == null))))?(((((map__66413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66413):map__66413);
var binding_map = map__66413__$1;
var key_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66413__$1,new cljs.core.Keyword(null,"key-string","key-string",914848745));
var binding_vec = lark.commands.registry.binding_string__GT_vec(key_string);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(binding_map,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.to_array(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.commands.registry.format_segment,new cljs.core.Keyword(null,"Keypress.js","Keypress.js",972963374)),binding_vec)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"binding-vec","binding-vec",-996641208),binding_vec], 0));
});
lark.commands.registry.add_binding = (function lark$commands$registry$add_binding(mappings,name,binding){
var map__66421 = lark.commands.registry.normalize_binding(binding);
var map__66421__$1 = (((((!((map__66421 == null))))?(((((map__66421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66421):map__66421);
var binding_map = map__66421__$1;
var binding_vec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66421__$1,new cljs.core.Keyword(null,"binding-vec","binding-vec",-996641208));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66421__$1,new cljs.core.Keyword(null,"event","event",301435442));
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set(binding_vec),new cljs.core.Keyword(null,"exec","exec",1625568743)], null);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mappings,path))){
} else {
lark.commands.registry.Keypress.register_combo(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"is_solitary","is_solitary",252367977),true,new cljs.core.Keyword(null,"is_unordered","is_unordered",1185575015),true,(function (){var G__66424 = event;
var G__66424__$1 = (((G__66424 instanceof cljs.core.Keyword))?G__66424.fqn:null);
switch (G__66424__$1) {
case "keydown":
return new cljs.core.Keyword(null,"on_keydown","on_keydown",1585385032);

break;
case "keyup":
return new cljs.core.Keyword(null,"on_keyup","on_keyup",-1539788459);

break;
default:
return new cljs.core.Keyword(null,"on_keydown","on_keydown",1585385032);

}
})(),((function (map__66421,map__66421__$1,binding_map,binding_vec,event,path){
return (function (){
var fexpr__66426 = cljs.core.deref(lark.commands.registry.handler);
return (fexpr__66426.cljs$core$IFn$_invoke$arity$2 ? fexpr__66426.cljs$core$IFn$_invoke$arity$2(binding,binding_vec) : fexpr__66426.call(null,binding,binding_vec));
});})(map__66421,map__66421__$1,binding_map,binding_vec,event,path))
]),binding_map], 0))));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(mappings,path,lark.commands.registry.distinct_conj,name);
});
lark.commands.registry.remove_binding = (function lark$commands$registry$remove_binding(mappings,name,binding){
var map__66445 = lark.commands.registry.normalize_binding(binding);
var map__66445__$1 = (((((!((map__66445 == null))))?(((((map__66445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66445):map__66445);
var binding_map = map__66445__$1;
var binding_vec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66445__$1,new cljs.core.Keyword(null,"binding-vec","binding-vec",-996641208));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66445__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set(binding_vec),new cljs.core.Keyword(null,"exec","exec",1625568743)], null);
var mappings__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(mappings,path,lark.commands.registry.seq_disj,name);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mappings__$1,path))){
} else {
lark.commands.registry.Keypress.unregister_combo(({"keys": keys}));
}

return mappings__$1;
});
/**
 * Takes a map of {<command-name>, <binding>} and registers keybindings.
 */
lark.commands.registry.bind_BANG_ = (function lark$commands$registry$bind_BANG_(bindings){
var vec__66464 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66468,p__66469){
var vec__66475 = p__66468;
var mappings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66475,(0),null);
var commands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66475,(1),null);
var vec__66478 = p__66469;
var the_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66478,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66478,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.commands.registry.add_binding(mappings,the_name,binding),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(commands,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_name,new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct,cljs.core.conj),binding)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(lark.commands.registry.mappings),cljs.core.deref(lark.commands.registry.commands)], null),bindings);
var mappings_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66464,(0),null);
var commands_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66464,(1),null);
cljs.core.reset_BANG_(lark.commands.registry.mappings,mappings_STAR_);

return cljs.core.reset_BANG_(lark.commands.registry.commands,commands_STAR_);
});
/**
 * Takes a map of {<command-name>, <binding string>} and removes keybindings.
 */
lark.commands.registry.unbind_BANG_ = (function lark$commands$registry$unbind_BANG_(bindings){
var vec__66500 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66507,p__66508){
var vec__66513 = p__66507;
var mappings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66513,(0),null);
var commands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66513,(1),null);
var vec__66517 = p__66508;
var the_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66517,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66517,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.commands.registry.remove_binding(mappings,the_name,binding),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(commands,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_name,new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),lark.commands.registry.seq_disj,binding)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(lark.commands.registry.mappings),cljs.core.deref(lark.commands.registry.commands)], null),bindings);
var mappings_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66500,(0),null);
var commands_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66500,(1),null);
cljs.core.reset_BANG_(lark.commands.registry.mappings,mappings_STAR_);

return cljs.core.reset_BANG_(lark.commands.registry.commands,commands_STAR_);
});
lark.commands.registry.register_BANG_ = (function lark$commands$registry$register_BANG_(p__66525,bindings){
var map__66526 = p__66525;
var map__66526__$1 = (((((!((map__66526 == null))))?(((((map__66526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66526):map__66526);
var the_command = map__66526__$1;
var the_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66526__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lark.commands.registry.commands,cljs.core.assoc,the_name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_command,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-namespace","display-namespace",433182898),(function (){var G__66528 = cljs.core.namespace(the_name);
if((G__66528 == null)){
return null;
} else {
return lark.commands.registry.spaced_name(G__66528);
}
})(),new cljs.core.Keyword(null,"display-name","display-name",694513143),lark.commands.registry.spaced_name(cljs.core.name(the_name)),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings,new cljs.core.Keyword(null,"priority","priority",1431093715),(function (){var or__4131__auto__ = priority;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()], null)], 0)));

return cljs.core.reset_BANG_(lark.commands.registry.mappings,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__66526,map__66526__$1,the_command,the_name,priority){
return (function (mappings,pattern){
return lark.commands.registry.add_binding(mappings,the_name,pattern);
});})(map__66526,map__66526__$1,the_command,the_name,priority))
,cljs.core.deref(lark.commands.registry.mappings),bindings));
});
lark.commands.registry.deregister_BANG_ = (function lark$commands$registry$deregister_BANG_(the_name){
var map__66539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lark.commands.registry.commands),the_name);
var map__66539__$1 = (((((!((map__66539 == null))))?(((((map__66539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66539):map__66539);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
lark.commands.registry.unbind_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(the_name),bindings)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lark.commands.registry.commands,cljs.core.dissoc,the_name);
});
lark.commands.registry.sort_ks = (function lark$commands$registry$sort_ks(p1__66556_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
}
}),p1__66556_SHARP_);
});
lark.commands.registry.binding_segment_compare = (function lark$commands$registry$binding_segment_compare(segment){
if(cljs.core.truth_((function (){var fexpr__66557 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["shift",null,"m2",null,"m1",null], null), null);
return (fexpr__66557.cljs$core$IFn$_invoke$arity$1 ? fexpr__66557.cljs$core$IFn$_invoke$arity$1(segment) : fexpr__66557.call(null,segment));
})())){
return (0);
} else {
return (1);
}
});
lark.commands.registry.keyset_string = (function lark$commands$registry$keyset_string(keyset){
var modifiers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["shift",null,"m2",null,"m1",null], null), null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.commands.registry.format_segment,new cljs.core.Keyword(null,"display","display",242065432)),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(lark.commands.registry.binding_segment_compare,cljs.core.seq(keyset)))));
});

//# sourceMappingURL=lark.commands.registry.js.map
