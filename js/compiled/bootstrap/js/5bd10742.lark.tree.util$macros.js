goog.provide('lark.tree.util$macros');
lark.tree.util$macros.some_str = (function lark$tree$util$macros$some_str(s){
if(((typeof s === 'string') && ((!((s === "")))))){
return s;
} else {
return null;
}
});
lark.tree.util$macros.guard__GT_ = (function lark$tree$util$macros$guard__GT_(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
lark.tree.util$macros.guard__GT__GT_ = (function lark$tree$util$macros$guard__GT__GT_(f,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
lark.tree.util$macros.log_current_stack = (function lark$tree$util$macros$log_current_stack(){
try{throw (new Error());
}catch (e54652){if((e54652 instanceof Error)){
var e = e54652;
return console.log(e.stack);
} else {
throw e54652;

}
}});
