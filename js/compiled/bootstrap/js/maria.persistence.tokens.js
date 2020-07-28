goog.provide('maria.persistence.tokens');
goog.require('cljs.core');
goog.require('maria.persistence.local');
maria.persistence.tokens.clear_tokens = (function maria$persistence$tokens$clear_tokens(){
return maria.persistence.local.local_put_BANG_("auth/accessToken",null);
});
maria.persistence.tokens.put_token = (function maria$persistence$tokens$put_token(provider,token){
return maria.persistence.local.local_update_BANG_.cljs$core$IFn$_invoke$arity$variadic("auth/accessToken",cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([provider,token])], 0));
});
maria.persistence.tokens.get_token = (function maria$persistence$tokens$get_token(provider){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(maria.persistence.local.local_get("auth/accessToken"),provider);
});
maria.persistence.tokens.auth_headers = (function maria$persistence$tokens$auth_headers(provider){
var temp__5720__auto__ = maria.persistence.tokens.get_token(provider);
if(cljs.core.truth_(temp__5720__auto__)){
var token = temp__5720__auto__;
return ({"Authorization": ["token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')});
} else {
return null;
}
});

//# sourceMappingURL=maria.persistence.tokens.js.map
