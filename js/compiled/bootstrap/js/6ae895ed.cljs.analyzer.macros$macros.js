goog.provide('cljs.analyzer.macros$macros');
var ret__4776__auto___53707 = (function (){
cljs.analyzer.macros$macros.with_warning_handlers = (function cljs$analyzer$macros$macros$with_warning_handlers(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53708 = arguments.length;
var i__4731__auto___53709 = (0);
while(true){
if((i__4731__auto___53709 < len__4730__auto___53708)){
args__4736__auto__.push((arguments[i__4731__auto___53709]));

var G__53710 = (i__4731__auto___53709 + (1));
i__4731__auto___53709 = G__53710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warning-handlers*","cljs.analyzer/*cljs-warning-handlers*",882579751,null),null,(1),null)),(new cljs.core.List(null,handlers,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$applyTo = (function (seq53546){
var G__53547 = cljs.core.first(seq53546);
var seq53546__$1 = cljs.core.next(seq53546);
var G__53548 = cljs.core.first(seq53546__$1);
var seq53546__$2 = cljs.core.next(seq53546__$1);
var G__53549 = cljs.core.first(seq53546__$2);
var seq53546__$3 = cljs.core.next(seq53546__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53547,G__53548,G__53549,seq53546__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$macro = true;

var ret__4776__auto___53717 = (function (){
cljs.analyzer.macros$macros.no_warn = (function cljs$analyzer$macros$macros$no_warn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53719 = arguments.length;
var i__4731__auto___53720 = (0);
while(true){
if((i__4731__auto___53720 < len__4730__auto___53719)){
args__4736__auto__.push((arguments[i__4731__auto___53720]));

var G__53721 = (i__4731__auto___53720 + (1));
i__4731__auto___53720 = G__53721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.analyzer.macros$macros.no_warn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.analyzer.macros$macros.no_warn.cljs$lang$applyTo = (function (seq53550){
var G__53551 = cljs.core.first(seq53550);
var seq53550__$1 = cljs.core.next(seq53550);
var G__53552 = cljs.core.first(seq53550__$1);
var seq53550__$2 = cljs.core.next(seq53550__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53551,G__53552,seq53550__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.no_warn.cljs$lang$macro = true;

var ret__4776__auto___53725 = (function (){
cljs.analyzer.macros$macros.with_core_macros = (function cljs$analyzer$macros$macros$with_core_macros(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53726 = arguments.length;
var i__4731__auto___53727 = (0);
while(true){
if((i__4731__auto___53727 < len__4730__auto___53726)){
args__4736__auto__.push((arguments[i__4731__auto___53727]));

var G__53728 = (i__4731__auto___53727 + (1));
i__4731__auto___53727 = G__53728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
});

cljs.analyzer.macros$macros.with_core_macros.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.analyzer.macros$macros.with_core_macros.cljs$lang$applyTo = (function (seq53616){
var G__53617 = cljs.core.first(seq53616);
var seq53616__$1 = cljs.core.next(seq53616);
var G__53618 = cljs.core.first(seq53616__$1);
var seq53616__$2 = cljs.core.next(seq53616__$1);
var G__53619 = cljs.core.first(seq53616__$2);
var seq53616__$3 = cljs.core.next(seq53616__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53617,G__53618,G__53619,seq53616__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.with_core_macros.cljs$lang$macro = true;

var ret__4776__auto___53735 = (function (){
cljs.analyzer.macros$macros.with_core_macros_file = (function cljs$analyzer$macros$macros$with_core_macros_file(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53736 = arguments.length;
var i__4731__auto___53737 = (0);
while(true){
if((i__4731__auto___53737 < len__4730__auto___53736)){
args__4736__auto__.push((arguments[i__4731__auto___53737]));

var G__53738 = (i__4731__auto___53737 + (1));
i__4731__auto___53737 = G__53738;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-is-classpath*","cljs.analyzer/*cljs-macros-is-classpath*",1674023778,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
});

cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$applyTo = (function (seq53628){
var G__53629 = cljs.core.first(seq53628);
var seq53628__$1 = cljs.core.next(seq53628);
var G__53630 = cljs.core.first(seq53628__$1);
var seq53628__$2 = cljs.core.next(seq53628__$1);
var G__53631 = cljs.core.first(seq53628__$2);
var seq53628__$3 = cljs.core.next(seq53628__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53629,G__53630,G__53631,seq53628__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$macro = true;

var ret__4776__auto___53752 = (function (){
cljs.analyzer.macros$macros.wrapping_errors = (function cljs$analyzer$macros$macros$wrapping_errors(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53757 = arguments.length;
var i__4731__auto___53758 = (0);
while(true){
if((i__4731__auto___53758 < len__4730__auto___53757)){
args__4736__auto__.push((arguments[i__4731__auto___53758]));

var G__53759 = (i__4731__auto___53758 + (1));
i__4731__auto___53758 = G__53759;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__53635__auto__","err__53635__auto__",984138913,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","has-error-data?","cljs.analyzer/has-error-data?",-2145150806,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__53635__auto__","err__53635__auto__",984138913,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__53635__auto__","err__53635__auto__",984138913,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","analysis-error?","cljs.analyzer/analysis-error?",-1824961346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__53635__auto__","err__53635__auto__",984138913,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__53635__auto__","err__53635__auto__",984138913,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error","cljs.analyzer/error",1575241885,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__53635__auto__","err__53635__auto__",984138913,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__53635__auto__","err__53635__auto__",984138913,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$applyTo = (function (seq53642){
var G__53643 = cljs.core.first(seq53642);
var seq53642__$1 = cljs.core.next(seq53642);
var G__53644 = cljs.core.first(seq53642__$1);
var seq53642__$2 = cljs.core.next(seq53642__$1);
var G__53645 = cljs.core.first(seq53642__$2);
var seq53642__$3 = cljs.core.next(seq53642__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53643,G__53644,G__53645,seq53642__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$macro = true;

var ret__4776__auto___53779 = (function (){
cljs.analyzer.macros$macros.disallowing_recur = (function cljs$analyzer$macros$macros$disallowing_recur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53782 = arguments.length;
var i__4731__auto___53783 = (0);
while(true){
if((i__4731__auto___53783 < len__4730__auto___53782)){
args__4736__auto__.push((arguments[i__4731__auto___53783]));

var G__53784 = (i__4731__auto___53783 + (1));
i__4731__auto___53783 = G__53784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$applyTo = (function (seq53651){
var G__53652 = cljs.core.first(seq53651);
var seq53651__$1 = cljs.core.next(seq53651);
var G__53653 = cljs.core.first(seq53651__$1);
var seq53651__$2 = cljs.core.next(seq53651__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53652,G__53653,seq53651__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$macro = true;

var ret__4776__auto___53802 = (function (){
cljs.analyzer.macros$macros.allowing_redef = (function cljs$analyzer$macros$macros$allowing_redef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53810 = arguments.length;
var i__4731__auto___53811 = (0);
while(true){
if((i__4731__auto___53811 < len__4730__auto___53810)){
args__4736__auto__.push((arguments[i__4731__auto___53811]));

var G__53812 = (i__4731__auto___53811 + (1));
i__4731__auto___53811 = G__53812;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-redef*","cljs.analyzer/*allow-redef*",-501091249,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.analyzer.macros$macros.allowing_redef.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.analyzer.macros$macros.allowing_redef.cljs$lang$applyTo = (function (seq53676){
var G__53677 = cljs.core.first(seq53676);
var seq53676__$1 = cljs.core.next(seq53676);
var G__53678 = cljs.core.first(seq53676__$1);
var seq53676__$2 = cljs.core.next(seq53676__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53677,G__53678,seq53676__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.allowing_redef.cljs$lang$macro = true;

var ret__4776__auto___53817 = (function (){
cljs.analyzer.macros$macros.disallowing_ns_STAR_ = (function cljs$analyzer$macros$macros$disallowing_ns_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53818 = arguments.length;
var i__4731__auto___53819 = (0);
while(true){
if((i__4731__auto___53819 < len__4730__auto___53818)){
args__4736__auto__.push((arguments[i__4731__auto___53819]));

var G__53820 = (i__4731__auto___53819 + (1));
i__4731__auto___53819 = G__53820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-ns*","cljs.analyzer/*allow-ns*",-141648458,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$applyTo = (function (seq53681){
var G__53682 = cljs.core.first(seq53681);
var seq53681__$1 = cljs.core.next(seq53681);
var G__53683 = cljs.core.first(seq53681__$1);
var seq53681__$2 = cljs.core.next(seq53681__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53682,G__53683,seq53681__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$macro = true;

