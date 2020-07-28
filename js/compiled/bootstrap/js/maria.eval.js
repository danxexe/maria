goog.provide('maria.eval');
goog.require('cljs.core');
goog.require('lark.eval');
goog.require('shadow.cljs.bootstrap.browser');
goog.require('chia.db');
goog.require('kitchen_async.promise');
maria.eval.bootstrap_path = "/js/compiled/bootstrap";
if((typeof maria !== 'undefined') && (typeof maria.eval !== 'undefined') && (typeof maria.eval.c_state !== 'undefined')){
} else {
maria.eval.c_state = lark.eval.c_state;
}
if((typeof maria !== 'undefined') && (typeof maria.eval !== 'undefined') && (typeof maria.eval.c_env !== 'undefined')){
} else {
maria.eval.c_env = lark.eval.c_env;
}
if((typeof maria !== 'undefined') && (typeof maria.eval !== 'undefined') && (typeof maria.eval.resolve_var !== 'undefined')){
} else {
maria.eval.resolve_var = lark.eval.resolve_var;
}
if((typeof maria !== 'undefined') && (typeof maria.eval !== 'undefined') && (typeof maria.eval._block_eval_log !== 'undefined')){
} else {
maria.eval._block_eval_log = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
maria.eval.add_error_position = lark.eval.add_error_position;
maria.eval.handle_block_error = (function maria$eval$handle_block_error(block_id,error){
var eval_log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(maria.eval._block_eval_log),block_id);
var result = lark.eval.add_error_position(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(eval_log),new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__4131__auto__ = error;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new Error("Unknown error"));
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("error","kind","error/kind",-1414352259),new cljs.core.Keyword(null,"eval","eval",-1103567905)], 0)));
maria.eval._block_eval_log.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(maria.eval._block_eval_log.cljs$core$IDeref$_deref$arity$1(null),block_id,((function (eval_log,result){
return (function (p1__65490_SHARP_){
return cljs.core.cons(result,cljs.core.rest(p1__65490_SHARP_));
});})(eval_log,result))
));

return null;
});
if((typeof maria !== 'undefined') && (typeof maria.eval !== 'undefined') && (typeof maria.eval.eval_log !== 'undefined')){
} else {
maria.eval.eval_log = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
}
maria.eval.eval_log_wrap = (function maria$eval$eval_log_wrap(f){
return (function() { 
var G__65534__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(maria.eval.eval_log,cljs.core.conj,result);

return result;
};
var G__65534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65535__i = 0, G__65535__a = new Array(arguments.length -  0);
while (G__65535__i < G__65535__a.length) {G__65535__a[G__65535__i] = arguments[G__65535__i + 0]; ++G__65535__i;}
  args = new cljs.core.IndexedSeq(G__65535__a,0,null);
} 
return G__65534__delegate.call(this,args);};
G__65534.cljs$lang$maxFixedArity = 0;
G__65534.cljs$lang$applyTo = (function (arglist__65539){
var args = cljs.core.seq(arglist__65539);
return G__65534__delegate(args);
});
G__65534.cljs$core$IFn$_invoke$arity$variadic = G__65534__delegate;
return G__65534;
})()
;
});
maria.eval.eval_form_STAR_ = maria.eval.eval_log_wrap(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lark.eval.eval,maria.eval.c_state,maria.eval.c_env));
maria.eval.eval_str_STAR_ = maria.eval.eval_log_wrap(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lark.eval.eval_str,maria.eval.c_state,maria.eval.c_env));
maria.eval.compile_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lark.eval.compile_str,maria.eval.c_state,maria.eval.c_env);
maria.eval.log_eval_result_BANG_ = (function maria$eval$log_eval_result_BANG_(result){
var result__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),(chia.db.unique_id.cljs$core$IFn$_invoke$arity$0 ? chia.db.unique_id.cljs$core$IFn$_invoke$arity$0() : chia.db.unique_id.call(null)));
var G__65502_65540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-attr","db/update-attr",-1289204448),new cljs.core.Keyword("repl","state","repl/state",-1991938786),new cljs.core.Keyword(null,"eval-log","eval-log",-1149726895),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),result__$1], null)], null);
(chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? chia.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__65502_65540) : chia.db.transact_BANG_.call(null,G__65502_65540));

return result__$1;
});
maria.eval.eval_str = (function maria$eval$eval_str(source){
return maria.eval.log_eval_result_BANG_((maria.eval.eval_str_STAR_.cljs$core$IFn$_invoke$arity$1 ? maria.eval.eval_str_STAR_.cljs$core$IFn$_invoke$arity$1(source) : maria.eval.eval_str_STAR_.call(null,source)));
});
maria.eval.eval_form = (function maria$eval$eval_form(form){
return maria.eval.log_eval_result_BANG_((maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1 ? maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1(form) : maria.eval.eval_form_STAR_.call(null,form)));
});
maria.eval.eval_STAR_ = (function maria$eval$eval_STAR_(form){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1 ? maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1(form) : maria.eval.eval_form_STAR_.call(null,form)),new cljs.core.Keyword(null,"value","value",305978217));
});
if((typeof maria !== 'undefined') && (typeof maria.eval !== 'undefined') && (typeof maria.eval.compiler_ready !== 'undefined')){
} else {
maria.eval.compiler_ready = (new cljs.core.Delay((function (){
var p__62430__auto__ = kitchen_async.promise.promise_impl();
return (new p__62430__auto__(((function (p__62430__auto__){
return (function (resolve,reject){
return shadow.cljs.bootstrap.browser.init(maria.eval.c_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),maria.eval.bootstrap_path,new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"maria.user","maria.user",-1582810998,null),"null",new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),"null",new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),"null"], null), null)], null),((function (p__62430__auto__){
return (function (){
var G__65521_65542 = cljs.core.list(new cljs.core.Symbol(null,"inject","inject",-242104006,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"what-is","what-is",34746727,null),new cljs.core.Symbol("maria.friendly.kinds","what-is","maria.friendly.kinds/what-is",834934555,null),new cljs.core.Symbol(null,"load-gist","load-gist",127138012,null),new cljs.core.Symbol("maria.user.loaders","load-gist","maria.user.loaders/load-gist",-1712667533,null),new cljs.core.Symbol(null,"load-js","load-js",-1204894562,null),new cljs.core.Symbol("maria.user.loaders","load-js","maria.user.loaders/load-js",641044491,null),new cljs.core.Symbol(null,"load-npm","load-npm",1266176394,null),new cljs.core.Symbol("maria.user.loaders","load-npm","maria.user.loaders/load-npm",-719911919,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol("chia.view.hiccup","element","chia.view.hiccup/element",671646264,null)], null)));
(maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1 ? maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1(G__65521_65542) : maria.eval.eval_form_STAR_.call(null,G__65521_65542));

var seq__65524_65543 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null)),cljs.core.list(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),new cljs.core.Symbol(null,"maria.user","maria.user",-1582810998,null))], null));
var chunk__65525_65544 = null;
var count__65526_65545 = (0);
var i__65527_65546 = (0);
while(true){
if((i__65527_65546 < count__65526_65545)){
var form_65548 = chunk__65525_65544.cljs$core$IIndexed$_nth$arity$2(null,i__65527_65546);
(maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1 ? maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1(form_65548) : maria.eval.eval_form_STAR_.call(null,form_65548));


var G__65549 = seq__65524_65543;
var G__65550 = chunk__65525_65544;
var G__65551 = count__65526_65545;
var G__65552 = (i__65527_65546 + (1));
seq__65524_65543 = G__65549;
chunk__65525_65544 = G__65550;
count__65526_65545 = G__65551;
i__65527_65546 = G__65552;
continue;
} else {
var temp__5720__auto___65553 = cljs.core.seq(seq__65524_65543);
if(temp__5720__auto___65553){
var seq__65524_65554__$1 = temp__5720__auto___65553;
if(cljs.core.chunked_seq_QMARK_(seq__65524_65554__$1)){
var c__4550__auto___65555 = cljs.core.chunk_first(seq__65524_65554__$1);
var G__65556 = cljs.core.chunk_rest(seq__65524_65554__$1);
var G__65557 = c__4550__auto___65555;
var G__65558 = cljs.core.count(c__4550__auto___65555);
var G__65559 = (0);
seq__65524_65543 = G__65556;
chunk__65525_65544 = G__65557;
count__65526_65545 = G__65558;
i__65527_65546 = G__65559;
continue;
} else {
var form_65560 = cljs.core.first(seq__65524_65554__$1);
(maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1 ? maria.eval.eval_form_STAR_.cljs$core$IFn$_invoke$arity$1(form_65560) : maria.eval.eval_form_STAR_.call(null,form_65560));


var G__65561 = cljs.core.next(seq__65524_65554__$1);
var G__65562 = null;
var G__65563 = (0);
var G__65564 = (0);
seq__65524_65543 = G__65561;
chunk__65525_65544 = G__65562;
count__65526_65545 = G__65563;
i__65527_65546 = G__65564;
continue;
}
} else {
}
}
break;
}

return (resolve.cljs$core$IFn$_invoke$arity$0 ? resolve.cljs$core$IFn$_invoke$arity$0() : resolve.call(null));
});})(p__62430__auto__))
);
});})(p__62430__auto__))
));
}),null));
}
cljs.core._STAR_eval_STAR_ = maria.eval.eval_STAR_;

//# sourceMappingURL=maria.eval.js.map
