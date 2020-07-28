goog.provide('lark.commands.registry$macros');
lark.commands.registry$macros.parse_opt_args = (function lark$commands$registry$macros$parse_opt_args(preds,args){
var preds__$1 = preds;
var args__$1 = args;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(preds__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,args__$1);
} else {
var match_QMARK_ = (function (){var G__55386 = cljs.core.first(args__$1);
var fexpr__55385 = cljs.core.first(preds__$1);
return (fexpr__55385.cljs$core$IFn$_invoke$arity$1 ? fexpr__55385.cljs$core$IFn$_invoke$arity$1(G__55386) : fexpr__55385.call(null,G__55386));
})();
var G__55428 = cljs.core.rest(preds__$1);
var G__55429 = (function (){var G__55387 = args__$1;
if(cljs.core.truth_(match_QMARK_)){
return cljs.core.rest(G__55387);
} else {
return G__55387;
}
})();
var G__55430 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cljs.core.truth_(match_QMARK_)?cljs.core.first(args__$1):null));
preds__$1 = G__55428;
args__$1 = G__55429;
out = G__55430;
continue;
}
break;
}
});
var ret__4776__auto___55431 = (function (){
/**
 * Defines a command. command-name should be a namespaced keyword, followed by the optional positional args:
 *   - docstring
 *   - options map, which may contain:
 *    :bindings, a vector of keymaps to bind, each containing a keyset of the form 'Cmd-X'
 *    :intercept-when, a predicate indicating whether the key binding should stopPropagation and preventDefault
 *         (if not supplied, will stop the event when :exec-when is true)
 *    :when, a predicate indicating whether the command is enabled for a given context
 *   - a vector of arguments followed by body forms, for the command function.
 * 
 *   If no arglist/body is provided, a passthrough function will be supplied, so that `defcommand`
 *   can be used for documenting existing/built-in behaviour.
 */
lark.commands.registry$macros.defcommand = (function lark$commands$registry$macros$defcommand(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55432 = arguments.length;
var i__4731__auto___55433 = (0);
while(true){
if((i__4731__auto___55433 < len__4730__auto___55432)){
args__4736__auto__.push((arguments[i__4731__auto___55433]));

var G__55434 = (i__4731__auto___55433 + (1));
i__4731__auto___55433 = G__55434;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return lark.commands.registry$macros.defcommand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

lark.commands.registry$macros.defcommand.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,command_name,args){
var vec__55412 = lark.commands.registry$macros.parse_opt_args(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),args);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55412,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55412,(1),null);
var arglist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55412,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55412,(3),null);
var map__55415 = options;
var map__55415__$1 = (((((!((map__55415 == null))))?(((((map__55415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55415):map__55415);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55415__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentVector.EMPTY);
var when_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var intercept_when_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"intercept-when","intercept-when",-1628416534));
var _ = (((arglist == null))?null:null);
var name_as_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(command_name),"_",cljs.core.name(command_name)].join(''));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"intercept-when*","intercept-when*",-1626007670),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"when*","when*",1889522501)], 0)),new cljs.core.Keyword(null,"name","name",1843675177),command_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),docstring,new cljs.core.Keyword(null,"exec-pred","exec-pred",1519533697),when_STAR_,new cljs.core.Keyword(null,"intercept-pred","intercept-pred",1705211586),((cljs.core.boolean_QMARK_(intercept_when_STAR_))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),null,(1),null)),(new cljs.core.List(null,intercept_when_STAR_,null,(1),null))))):intercept_when_STAR_),new cljs.core.Keyword(null,"command","command",-894540724),(cljs.core.truth_(arglist)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,name_as_symbol,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,arglist,null,(1),null)),body], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,name_as_symbol,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lark.commands","Pass","lark.commands/Pass",-789752069),null,(1),null))], 0)))))], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("lark.commands.registry","register!","lark.commands.registry/register!",2092065042,null),null,(1),null)),(new cljs.core.List(null,options__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bindings,null,(1),null))], 0))));
});

lark.commands.registry$macros.defcommand.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
lark.commands.registry$macros.defcommand.cljs$lang$applyTo = (function (seq55392){
var G__55393 = cljs.core.first(seq55392);
var seq55392__$1 = cljs.core.next(seq55392);
var G__55394 = cljs.core.first(seq55392__$1);
var seq55392__$2 = cljs.core.next(seq55392__$1);
var G__55395 = cljs.core.first(seq55392__$2);
var seq55392__$3 = cljs.core.next(seq55392__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55393,G__55394,G__55395,seq55392__$3);
});

return null;
})()
;
lark.commands.registry$macros.defcommand.cljs$lang$macro = true;

