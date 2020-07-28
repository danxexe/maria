goog.provide('lark.commands.exec');
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
lark.commands.exec.clear_which_key = (function lark$commands$exec$clear_which_key(p__50597){
var map__50599 = p__50597;
var map__50599__$1 = (((((!((map__50599 == null))))?(((((map__50599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50599):map__50599);
var current_state = map__50599__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var G__50602_50780 = timeout;
if((G__50602_50780 == null)){
} else {
clearTimeout(G__50602_50780);
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(current_state,new cljs.core.Keyword(null,"timeout","timeout",-318625318),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("which-key","active?","which-key/active?",-1730482225)], 0));
});
if((typeof lark !== 'undefined') && (typeof lark.commands !== 'undefined') && (typeof lark.commands.exec !== 'undefined') && (typeof lark.commands.exec._ !== 'undefined')){
} else {
lark.commands.exec._ = (function (){var seq__50603 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shift","alt","meta"], null));
var chunk__50604 = null;
var count__50605 = (0);
var i__50606 = (0);
while(true){
if((i__50606 < count__50605)){
var modifier = chunk__50604.cljs$core$IIndexed$_nth$arity$2(null,i__50606);
var internal_modifier_50795 = lark.commands.registry.format_segment(new cljs.core.Keyword(null,"internal","internal",-854870097),modifier);
lark.commands.registry.Keypress.register_combo(({"keys": [modifier], "is_exclusive": false, "is_solitary": false, "on_keydown": ((function (seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50795,modifier){
return (function (){
var map__50633 = cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE);
var map__50633__$1 = (((((!((map__50633 == null))))?(((((map__50633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50633):map__50633);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50633__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,(function (){var G__50635 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.conj,internal_modifier_50795);
if((timeout == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50635,new cljs.core.Keyword(null,"timeout","timeout",-318625318),setTimeout(((function (seq__50603,chunk__50604,count__50605,i__50606,G__50635,map__50633,map__50633__$1,timeout,internal_modifier_50795,modifier){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lark.commands.exec.WHICH_KEY_STATE,cljs.core.assoc,new cljs.core.Keyword("which-key","active?","which-key/active?",-1730482225),true);
});})(seq__50603,chunk__50604,count__50605,i__50606,G__50635,map__50633,map__50633__$1,timeout,internal_modifier_50795,modifier))
,lark.commands.exec.which_key_time));
} else {
return G__50635;
}
})());

return true;
});})(seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50795,modifier))
, "on_keyup": ((function (seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50795,modifier){
return (function (){
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,lark.commands.exec.clear_which_key(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.disj,internal_modifier_50795)));

return true;
});})(seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50795,modifier))
}));


var G__50813 = seq__50603;
var G__50814 = chunk__50604;
var G__50815 = count__50605;
var G__50816 = (i__50606 + (1));
seq__50603 = G__50813;
chunk__50604 = G__50814;
count__50605 = G__50815;
i__50606 = G__50816;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50603);
if(temp__5720__auto__){
var seq__50603__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50603__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50603__$1);
var G__50821 = cljs.core.chunk_rest(seq__50603__$1);
var G__50822 = c__4550__auto__;
var G__50823 = cljs.core.count(c__4550__auto__);
var G__50824 = (0);
seq__50603 = G__50821;
chunk__50604 = G__50822;
count__50605 = G__50823;
i__50606 = G__50824;
continue;
} else {
var modifier = cljs.core.first(seq__50603__$1);
var internal_modifier_50825 = lark.commands.registry.format_segment(new cljs.core.Keyword(null,"internal","internal",-854870097),modifier);
lark.commands.registry.Keypress.register_combo(({"keys": [modifier], "is_exclusive": false, "is_solitary": false, "on_keydown": ((function (seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50825,modifier,seq__50603__$1,temp__5720__auto__){
return (function (){
var map__50640 = cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE);
var map__50640__$1 = (((((!((map__50640 == null))))?(((((map__50640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50640):map__50640);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50640__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,(function (){var G__50642 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.conj,internal_modifier_50825);
if((timeout == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50642,new cljs.core.Keyword(null,"timeout","timeout",-318625318),setTimeout(((function (seq__50603,chunk__50604,count__50605,i__50606,G__50642,map__50640,map__50640__$1,timeout,internal_modifier_50825,modifier,seq__50603__$1,temp__5720__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lark.commands.exec.WHICH_KEY_STATE,cljs.core.assoc,new cljs.core.Keyword("which-key","active?","which-key/active?",-1730482225),true);
});})(seq__50603,chunk__50604,count__50605,i__50606,G__50642,map__50640,map__50640__$1,timeout,internal_modifier_50825,modifier,seq__50603__$1,temp__5720__auto__))
,lark.commands.exec.which_key_time));
} else {
return G__50642;
}
})());

return true;
});})(seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50825,modifier,seq__50603__$1,temp__5720__auto__))
, "on_keyup": ((function (seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50825,modifier,seq__50603__$1,temp__5720__auto__){
return (function (){
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,lark.commands.exec.clear_which_key(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE),new cljs.core.Keyword(null,"modifiers-down","modifiers-down",-156113809),cljs.core.disj,internal_modifier_50825)));

return true;
});})(seq__50603,chunk__50604,count__50605,i__50606,internal_modifier_50825,modifier,seq__50603__$1,temp__5720__auto__))
}));


var G__50832 = cljs.core.next(seq__50603__$1);
var G__50833 = null;
var G__50834 = (0);
var G__50835 = (0);
seq__50603 = G__50832;
chunk__50604 = G__50833;
count__50605 = G__50834;
i__50606 = G__50835;
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
var G__50647 = arguments.length;
switch (G__50647) {
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
var map__50655 = cljs.core.deref(lark.commands.exec.context);
var map__50655__$1 = (((((!((map__50655 == null))))?(((((map__50655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50655):map__50655);
var context = map__50655__$1;
var block_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50655__$1,new cljs.core.Keyword(null,"block-view","block-view",1006448755));
var augment_context = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.vals(cljs.core.deref(lark.commands.exec._context_augmenters)));
var G__50666 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,event_attrs], 0));
return (augment_context.cljs$core$IFn$_invoke$arity$1 ? augment_context.cljs$core$IFn$_invoke$arity$1(G__50666) : augment_context.call(null,G__50666));
});

lark.commands.exec.get_context.cljs$lang$maxFixedArity = 1;

/**
 * Add contextual data to command. Adds keys `:exec?`, whether the command will be evaluated
 *    given the current context, and `:intercept?`, whether the command should preventDefault
 *    even if it is not executed and returns true.
 */
lark.commands.exec.apply_context = (function lark$commands$exec$apply_context(context,p__50672){
var map__50673 = p__50672;
var map__50673__$1 = (((((!((map__50673 == null))))?(((((map__50673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50673):map__50673);
var command_entry = map__50673__$1;
var exec_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50673__$1,new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697));
var intercept_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50673__$1,new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586));
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
lark.commands.exec.exec_command = (function lark$commands$exec$exec_command(context,p__50683){
var map__50685 = p__50683;
var map__50685__$1 = (((((!((map__50685 == null))))?(((((map__50685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50685):map__50685);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var exec_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"exec?","exec?",163233175));
var intercept_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"intercept?","intercept?",-1415088651));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__50706 = arguments.length;
switch (G__50706) {
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
var G__50715 = arguments.length;
switch (G__50715) {
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
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__50720){
var vec__50721 = p__50720;
var keyset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50721,(0),null);
var map__50724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50721,(1),null);
var map__50724__$1 = (((((!((map__50724 == null))))?(((((map__50724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50724):map__50724);
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"exec","exec",1625568743));
if(clojure.set.subset_QMARK_(modifiers_down,keyset)){
var G__50751 = cljs.core.seq(exec);
var G__50751__$1 = (((G__50751 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.commands.exec.get_command,current_context),G__50751));
if((G__50751__$1 == null)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exec?","exec?",163233175),G__50751__$1);
}
} else {
return null;
}
}),cljs.core.deref(lark.commands.registry.mappings))));
});

lark.commands.exec.keyset_commands.cljs$lang$maxFixedArity = 2;

lark.commands.exec.contextual_commands = (function lark$commands$exec$contextual_commands(context){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50758_SHARP_){
return lark.commands.exec.apply_context(context,p1__50758_SHARP_);
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
return (function (p1__50762_SHARP_){
return lark.commands.exec.get_command(context,p1__50762_SHARP_);
});})(binding_set,command_names,context))
,command_names))):null);
var _ = (cljs.core.truth_(the_commands)?(function (){var seq__50771 = cljs.core.seq(cljs.core.vals(cljs.core.deref(lark.commands.exec._before_exec)));
var chunk__50772 = null;
var count__50773 = (0);
var i__50774 = (0);
while(true){
if((i__50774 < count__50773)){
var f = chunk__50772.cljs$core$IIndexed$_nth$arity$2(null,i__50774);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__50948 = seq__50771;
var G__50949 = chunk__50772;
var G__50950 = count__50773;
var G__50951 = (i__50774 + (1));
seq__50771 = G__50948;
chunk__50772 = G__50949;
count__50773 = G__50950;
i__50774 = G__50951;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50771);
if(temp__5720__auto__){
var seq__50771__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50771__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50771__$1);
var G__50952 = cljs.core.chunk_rest(seq__50771__$1);
var G__50953 = c__4550__auto__;
var G__50954 = cljs.core.count(c__4550__auto__);
var G__50955 = (0);
seq__50771 = G__50952;
chunk__50772 = G__50953;
count__50773 = G__50954;
i__50774 = G__50955;
continue;
} else {
var f = cljs.core.first(seq__50771__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__50956 = cljs.core.next(seq__50771__$1);
var G__50957 = null;
var G__50958 = (0);
var G__50959 = (0);
seq__50771 = G__50956;
chunk__50772 = G__50957;
count__50773 = G__50958;
i__50774 = G__50959;
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
return (function (p1__50763_SHARP_){
return lark.commands.exec.exec_command(context,p1__50763_SHARP_);
});})(binding_set,command_names,context,the_commands,_))
,the_commands))):null);
var prevent_default_QMARK_ = ((cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,results))) || (cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intercept?","intercept?",-1415088651),the_commands))));
cljs.core.reset_BANG_(lark.commands.exec.WHICH_KEY_STATE,(function (){var G__50776 = cljs.core.deref(lark.commands.exec.WHICH_KEY_STATE);
var G__50776__$1 = ((((((prevent_default_QMARK_) || (cljs.core.seq(the_commands)))) && ((!(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(binding_vec),lark.commands.registry.modifiers_internal)))))))?lark.commands.exec.clear_which_key(G__50776):G__50776);
if(cljs.core.truth_(the_commands)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50776__$1,new cljs.core.Keyword(null,"last-exec-keys","last-exec-keys",-95444443),binding_vec);
} else {
return G__50776__$1;
}
})());

if(prevent_default_QMARK_){
return false;
} else {
return true;
}
});
cljs.core.vreset_BANG_(lark.commands.registry.handler,lark.commands.exec.handler);
