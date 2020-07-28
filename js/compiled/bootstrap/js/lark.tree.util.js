goog.provide('lark.tree.util');
goog.require('cljs.core');
lark.tree.util.some_str = (function lark$tree$util$some_str(s){
if(((typeof s === 'string') && ((!((s === "")))))){
return s;
} else {
return null;
}
});
lark.tree.util.guard__GT_ = (function lark$tree$util$guard__GT_(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
lark.tree.util.guard__GT__GT_ = (function lark$tree$util$guard__GT__GT_(f,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
lark.tree.util.log_current_stack = (function lark$tree$util$log_current_stack(){
try{throw (new Error());
}catch (e63005){if((e63005 instanceof Error)){
var e = e63005;
return console.log(e.stack);
} else {
throw e63005;

}
}});

//# sourceMappingURL=lark.tree.util.js.map
