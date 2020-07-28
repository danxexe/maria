goog.provide('lark.commands.exec');
goog.require('cljs.core');
goog.require('lark.commands.registry');
goog.require('clojure.set');
lark.commands.exec.debug_QMARK_ = false;
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.exec !== 'undefined') && (typeof lark.commands.exec.context !== 'undefined')){
} else {
lark.commands.exec.context = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.exec !== 'undefined') && (typeof lark.commands.exec.last_selections !== 'undefined')){
} else {
lark.commands.exec.last_selections = cljs.core.volatile_BANG_(cljs.core.List.EMPTY);
}
lark.commands.exec.which_key_time = (1000);
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.exec !== 'undefined') && (typeof lark.commands.exec.WHICH_KEY_STATE !== 'undefined')){
} else {
lark.commands.exec.WHICH_KEY_STATE = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("which-key","active?","which-key/active?",-1730482225),false], null));
}
/**
 * Fn which toggles which-key off, clearing timeout if it exists.
 */
lark.commands.exec.clear_which_key = (function lark$commands$exec$clear_which_key(p__66816){
var map__66817 = p__66816;
var map__66817__$1 = (((((!((map__66817 == null))))?(((((map__66817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66817):map__66817);
var current_state = map__66817__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66817__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var G__66819_67059 = timeout;
if((G__66819_67059 == null)){
} else {
clearTimeout(G__66819_67059);
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(current_state,new cljs.core.Keyword(null,"timeout","timeout",-318625318),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("which-key","active?","which-key/active?",-1730482225)], 0));
});
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.exec !== 'undefined') && (typeof lark.commands.exec._ !== 'undefined')){
} else {
lark.commands.exec._ = (function (){var seq__66821 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shift","alt","meta"], null));
var chunk__66822 = null;
var count__66823 = (0);
var i__66824 = (0);
while(true){
if((i__66824 < count__66823)){
var modifier = chunk__66822.cljs$core$IIndexed$_nth$arity$2(null,i__66824);
var internal_modifier_67060 = lark.commands.registry.format_segment(new cljs.core.Keyword(null,"internal","internal",-854870097),modifier);
lark.commands.registry.Keypress.register_combo(({"keys": [modifier], "is_exclusive": false, "is_solitary": false, "on_keydown": ((function (seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67060,modifier){
return (function (){
var map__66849 = cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE);
var map__66849__$1 = (((((!((map__66849 == null))))?(((((map__66849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66849):map__66849);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66849__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,(function (){var G__66853 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.conj,internal_modifier_67060);
if((timeout == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66853,new cljs.core.Keyword(null,"timeout","timeout",-318625318),setTimeout(((function (seq__66821,chunk__66822,count__66823,i__66824,G__66853,map__66849,map__66849__$1,timeout,internal_modifier_67060,modifier){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lark.commands.exec.WHICH_KEY_STATE,cljs.core.assoc,new cljs.core.Keyword("which-key","active?","which-key/active?",-1730482225),true);
});})(seq__66821,chunk__66822,count__66823,i__66824,G__66853,map__66849,map__66849__$1,timeout,internal_modifier_67060,modifier))
,lark.commands.exec.which_key_time));
} else {
return G__66853;
}
})());

return true;
});})(seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67060,modifier))
, "on_keyup": ((function (seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67060,modifier){
return (function (){
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,lark.commands.exec.clear_which_key(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.disj,internal_modifier_67060)));

return true;
});})(seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67060,modifier))
}));


var G__67067 = seq__66821;
var G__67068 = chunk__66822;
var G__67069 = count__66823;
var G__67070 = (i__66824 + (1));
seq__66821 = G__67067;
chunk__66822 = G__67068;
count__66823 = G__67069;
i__66824 = G__67070;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66821);
if(temp__5720__auto__){
var seq__66821__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66821__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__66821__$1);
var G__67072 = cljs.core.chunk_rest(seq__66821__$1);
var G__67073 = c__4550__auto__;
var G__67074 = cljs.core.count(c__4550__auto__);
var G__67075 = (0);
seq__66821 = G__67072;
chunk__66822 = G__67073;
count__66823 = G__67074;
i__66824 = G__67075;
continue;
} else {
var modifier = cljs.core.first(seq__66821__$1);
var internal_modifier_67079 = lark.commands.registry.format_segment(new cljs.core.Keyword(null,"internal","internal",-854870097),modifier);
lark.commands.registry.Keypress.register_combo(({"keys": [modifier], "is_exclusive": false, "is_solitary": false, "on_keydown": ((function (seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67079,modifier,seq__66821__$1,temp__5720__auto__){
return (function (){
var map__66858 = cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE);
var map__66858__$1 = (((((!((map__66858 == null))))?(((((map__66858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66858):map__66858);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66858__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,(function (){var G__66860 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.conj,internal_modifier_67079);
if((timeout == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66860,new cljs.core.Keyword(null,"timeout","timeout",-318625318),setTimeout(((function (seq__66821,chunk__66822,count__66823,i__66824,G__66860,map__66858,map__66858__$1,timeout,internal_modifier_67079,modifier,seq__66821__$1,temp__5720__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lark.commands.exec.WHICH_KEY_STATE,cljs.core.assoc,new cljs.core.Keyword("which-key","active?","which-key/active?",-1730482225),true);
});})(seq__66821,chunk__66822,count__66823,i__66824,G__66860,map__66858,map__66858__$1,timeout,internal_modifier_67079,modifier,seq__66821__$1,temp__5720__auto__))
,lark.commands.exec.which_key_time));
} else {
return G__66860;
}
})());

return true;
});})(seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67079,modifier,seq__66821__$1,temp__5720__auto__))
, "on_keyup": ((function (seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67079,modifier,seq__66821__$1,temp__5720__auto__){
return (function (){
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,lark.commands.exec.clear_which_key(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.disj,internal_modifier_67079)));

return true;
});})(seq__66821,chunk__66822,count__66823,i__66824,internal_modifier_67079,modifier,seq__66821__$1,temp__5720__auto__))
}));


var G__67086 = cljs.core.next(seq__66821__$1);
var G__67087 = null;
var G__67088 = (0);
var G__67089 = (0);
seq__66821 = G__67086;
chunk__66822 = G__67087;
count__66823 = G__67088;
i__66824 = G__67089;
continue;
}
} else {
return null;
}
}
break;
}
})();
}
/**
 * Mutates command-context by merging provided context map.
 */
lark.commands.exec.set_context_BANG_ = (function lark$commands$exec$set_context_BANG_(ctx){
return lark.commands.exec.context.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lark.commands.exec.context.cljs$core$IDeref$_deref$arity$1(null),ctx], 0)));
});
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.exec !== 'undefined') && (typeof lark.commands.exec._before_exec !== 'undefined')){
} else {
lark.commands.exec._before_exec = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Registers a function `f` which will be called before any command is executed.
 */
lark.commands.exec.before_exec = (function lark$commands$exec$before_exec(key,f){
return lark.commands.exec._before_exec.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lark.commands.exec._before_exec.cljs$core$IDeref$_deref$arity$1(null),key,f));
});
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.exec !== 'undefined') && (typeof lark.commands.exec._context_augmenters !== 'undefined')){
} else {
lark.commands.exec._context_augmenters = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Registers a reducing function which will be applied to the context before it is returned from `get-context`.
 */
lark.commands.exec.add_context_augmenter_BANG_ = (function lark$commands$exec$add_context_augmenter_BANG_(key,f){
return lark.commands.exec._context_augmenters.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lark.commands.exec._context_augmenters.cljs$core$IDeref$_deref$arity$1(null),key,f));
});
/**
 * Returns the current command context, as determined by previous calls to `set-context!`,
 *    after context augmenting fns have been applied.
 */
lark.commands.exec.get_context = (function lark$commands$exec$get_context(var_args){
var G__66883 = arguments.length;
switch (G__66883) {
case 0:
return lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$0 = (function (){
return lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$1(null);
});

lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$1 = (function (event_attrs){
var map__66886 = cljs.core.deref(lark.commands.exec.context);
var map__66886__$1 = (((((!((map__66886 == null))))?(((((map__66886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66886):map__66886);
var context = map__66886__$1;
var block_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66886__$1,new cljs.core.Keyword(null,"block-view","block-view",1006448755));
var augment_context = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.vals(cljs.core.deref(lark.commands.exec._context_augmenters)));
var G__66899 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,event_attrs], 0));
return (augment_context.cljs$core$IFn$_invoke$arity$1 ? augment_context.cljs$core$IFn$_invoke$arity$1(G__66899) : augment_context.call(null,G__66899));
});

lark.commands.exec.get_context.cljs$lang$maxFixedArity = 1;

/**
 * Add contextual data to command. Adds keys `:exec?`, whether the command will be evaluated
 *    given the current context, and `:intercept?`, whether the command should preventDefault
 *    even if it is not executed and returns true.
 */
lark.commands.exec.apply_context = (function lark$commands$exec$apply_context(context,p__66901){
var map__66902 = p__66901;
var map__66902__$1 = (((((!((map__66902 == null))))?(((((map__66902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66902):map__66902);
var command_entry = map__66902__$1;
var exec_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66902__$1,new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697));
var intercept_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66902__$1,new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586));
var exec_QMARK_ = cljs.core.boolean$((function (){var or__4131__auto__ = (exec_pred == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return (exec_pred.cljs$core$IFn$_invoke$arity$1 ? exec_pred.cljs$core$IFn$_invoke$arity$1(context) : exec_pred.call(null,context));
}
})());
var intercept_QMARK_ = (function (){var and__4120__auto__ = intercept_pred;
if(cljs.core.truth_(and__4120__auto__)){
return (intercept_pred.cljs$core$IFn$_invoke$arity$1 ? intercept_pred.cljs$core$IFn$_invoke$arity$1(context) : intercept_pred.call(null,context));
} else {
return and__4120__auto__;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(command_entry,new cljs.core.Keyword(null,"exec?","exec?",163233175),exec_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intercept?","intercept?",-1415088651),intercept_QMARK_], 0));
});
/**
 * Returns command associated with name, if it exists.
 *    Add contextual data, :exec? and :intercept?.
 */
lark.commands.exec.get_command = (function lark$commands$exec$get_command(context,name){
return lark.commands.exec.apply_context(context,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lark.commands.registry.commands),name));
});
/**
 * Returns true if the command will have an effect (either by executing or
 *    preventingDefault). Expects a command which has already had `apply-context` applied.
 */
lark.commands.exec.contextual_QMARK_ = (function lark$commands$exec$contextual_QMARK_(command){
var or__4131__auto__ = new cljs.core.Keyword(null,"exec?","exec?",163233175).cljs$core$IFn$_invoke$arity$1(command);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"intercept?","intercept?",-1415088651).cljs$core$IFn$_invoke$arity$1(command);
}
});
/**
 * Execute a command (returned by `get-command`)
 */
lark.commands.exec.exec_command = (function lark$commands$exec$exec_command(context,p__66930){
var map__66931 = p__66930;
var map__66931__$1 = (((((!((map__66931 == null))))?(((((map__66931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66931):map__66931);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66931__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var exec_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66931__$1,new cljs.core.Keyword(null,"exec?","exec?",163233175));
var intercept_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66931__$1,new cljs.core.Keyword(null,"intercept?","intercept?",-1415088651));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = (cljs.core.truth_(exec_QMARK_)?(command.cljs$core$IFn$_invoke$arity$1 ? command.cljs$core$IFn$_invoke$arity$1(context) : command.call(null,context)):null);
if(cljs.core.truth_((function (){var and__4120__auto__ = exec_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return lark.commands.exec.debug_QMARK_;
} else {
return and__4120__auto__;
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Executed command:",name], 0));
} else {
}

var and__4120__auto__ = result;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword("lark.commands","Pass","lark.commands/Pass",-789752069));
} else {
return and__4120__auto__;
}
});
/**
 * Execute a command by name.
 */
lark.commands.exec.exec_command_name = (function lark$commands$exec$exec_command_name(var_args){
var G__66958 = arguments.length;
switch (G__66958) {
case 1:
return lark.commands.exec.exec_command_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.commands.exec.exec_command_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.commands.exec.exec_command_name.cljs$core$IFn$_invoke$arity$1 = (function (name){
return lark.commands.exec.exec_command_name.cljs$core$IFn$_invoke$arity$2(name,lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$0());
});

lark.commands.exec.exec_command_name.cljs$core$IFn$_invoke$arity$2 = (function (name,context){
return lark.commands.exec.exec_command(context,lark.commands.exec.get_command(context,name));
});

lark.commands.exec.exec_command_name.cljs$lang$maxFixedArity = 2;

/**
 * Returns commands which are at least partial matches of the currently pressed keys.
 */
lark.commands.exec.keyset_commands = (function lark$commands$exec$keyset_commands(var_args){
var G__66990 = arguments.length;
switch (G__66990) {
case 0:
return lark.commands.exec.keyset_commands.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return lark.commands.exec.keyset_commands.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.commands.exec.keyset_commands.cljs$core$IFn$_invoke$arity$0 = (function (){
return lark.commands.exec.keyset_commands.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$0());
});

lark.commands.exec.keyset_commands.cljs$core$IFn$_invoke$arity$2 = (function (modifiers_down,current_context){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__67002){
var vec__67003 = p__67002;
var keyset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67003,(0),null);
var map__67006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67003,(1),null);
var map__67006__$1 = (((((!((map__67006 == null))))?(((((map__67006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67006):map__67006);
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67006__$1,new cljs.core.Keyword(null,"exec","exec",1625568743));
if(clojure.set.subset_QMARK_(modifiers_down,keyset)){
var G__67011 = cljs.core.seq(exec);
var G__67011__$1 = (((G__67011 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.commands.exec.get_command,current_context),G__67011));
if((G__67011__$1 == null)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exec?","exec?",163233175),G__67011__$1);
}
} else {
return null;
}
}),cljs.core.deref(lark.commands.registry.mappings))));
});

lark.commands.exec.keyset_commands.cljs$lang$maxFixedArity = 2;

lark.commands.exec.contextual_commands = (function lark$commands$exec$contextual_commands(context){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67017_SHARP_){
return lark.commands.exec.apply_context(context,p1__67017_SHARP_);
}),cljs.core.vals(cljs.core.deref(lark.commands.registry.commands)));
});
/**
 * Comparator function with inverse order to regular `compare`
 */
lark.commands.exec.reverse_compare = (function lark$commands$exec$reverse_compare(a,b){
return cljs.core.compare(b,a);
});
/**
 * Main handler function which is called whenever a bound keybinding is triggered.
 *    Finds context-relevant commands and executes them until one returns true.
 */
lark.commands.exec.handler = (function lark$commands$exec$handler(binding,binding_vec){
var binding_set = cljs.core.set(binding_vec);
var command_names = cljs.core.seq(lark.commands.registry.get_keyset_commands(binding_set));
var context = ((command_names)?lark.commands.exec.get_context.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"binding-vec","binding-vec",-996641208),binding_vec], null)):null);
var the_commands = ((command_names)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"priority","priority",1431093715),lark.commands.exec.reverse_compare,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(lark.commands.exec.contextual_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding_set,command_names,context){
return (function (p1__67027_SHARP_){
return lark.commands.exec.get_command(context,p1__67027_SHARP_);
});})(binding_set,command_names,context))
,command_names))):null);
var _ = (cljs.core.truth_(the_commands)?(function (){var seq__67030 = cljs.core.seq(cljs.core.vals(cljs.core.deref(lark.commands.exec._before_exec)));
var chunk__67031 = null;
var count__67032 = (0);
var i__67033 = (0);
while(true){
if((i__67033 < count__67032)){
var f = chunk__67031.cljs$core$IIndexed$_nth$arity$2(null,i__67033);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__67186 = seq__67030;
var G__67187 = chunk__67031;
var G__67188 = count__67032;
var G__67189 = (i__67033 + (1));
seq__67030 = G__67186;
chunk__67031 = G__67187;
count__67032 = G__67188;
i__67033 = G__67189;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__67030);
if(temp__5720__auto__){
var seq__67030__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67030__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67030__$1);
var G__67191 = cljs.core.chunk_rest(seq__67030__$1);
var G__67192 = c__4550__auto__;
var G__67193 = cljs.core.count(c__4550__auto__);
var G__67194 = (0);
seq__67030 = G__67191;
chunk__67031 = G__67192;
count__67032 = G__67193;
i__67033 = G__67194;
continue;
} else {
var f = cljs.core.first(seq__67030__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__67196 = cljs.core.next(seq__67030__$1);
var G__67197 = null;
var G__67198 = (0);
var G__67199 = (0);
seq__67030 = G__67196;
chunk__67031 = G__67197;
count__67032 = G__67198;
i__67033 = G__67199;
continue;
}
} else {
return null;
}
}
break;
}
})():null);
var results = (cljs.core.truth_(the_commands)?cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding_set,command_names,context,the_commands,_){
return (function (p1__67028_SHARP_){
return lark.commands.exec.exec_command(context,p1__67028_SHARP_);
});})(binding_set,command_names,context,the_commands,_))
,the_commands))):null);
var prevent_default_QMARK_ = ((cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,results))) || (cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intercept?","intercept?",-1415088651),the_commands))));
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,(function (){var G__67049 = cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE);
var G__67049__$1 = ((((((prevent_default_QMARK_) || (cljs.core.seq(the_commands)))) && ((!(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(binding_vec),lark.commands.registry.modifiers_internal)))))))?lark.commands.exec.clear_which_key(G__67049):G__67049);
if(cljs.core.truth_(the_commands)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67049__$1,new cljs.core.Keyword(null,"last-exec-keys","last-exec-keys",-95444443),binding_vec);
} else {
return G__67049__$1;
}
})());

if(prevent_default_QMARK_){
return false;
} else {
return true;
}
});
cljs.core.vreset_BANG_(lark.commands.registry.handler,lark.commands.exec.handler);

//# sourceMappingURL=lark.commands.exec.js.map
