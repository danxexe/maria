goog.provide('lark.tree.core');
/**
 * Given ClojureScript source, returns AST
 */
lark.tree.core.ast = lark.tree.parse.ast;
lark.tree.core.ast_zip = lark.tree.node.ast_zip;
/**
 * Given ClojureScript source, returns zipper
 */
lark.tree.core.string_zip = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lark.tree.core.ast_zip,lark.tree.parse.ast);
lark.tree.core.format = (function lark$tree$core$format(x){
var x__$1 = (function (){var G__49334 = x;
if(typeof x === 'string'){
return lark.tree.parse.ast(G__49334);
} else {
return G__49334;
}
})();
var _STAR_pretty_STAR__orig_val__49335 = lark.tree.format._STAR_pretty_STAR_;
var _STAR_pretty_STAR__temp_val__49336 = true;
lark.tree.format._STAR_pretty_STAR_ = _STAR_pretty_STAR__temp_val__49336;

try{return lark.tree.emit.string.cljs$core$IFn$_invoke$arity$1(x__$1);
}finally {lark.tree.format._STAR_pretty_STAR_ = _STAR_pretty_STAR__orig_val__49335;
}});
