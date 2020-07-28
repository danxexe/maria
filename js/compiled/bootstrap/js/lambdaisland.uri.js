goog.provide('lambdaisland.uri');
goog.require('cljs.core');
goog.require('clojure.string');
lambdaisland.uri.uri_regex = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?$/;
lambdaisland.uri.authority_regex = /^(([^:]*)(:(.*))?@)?([^:]*)(:(\d*))?$/;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.uri.URI = (function (scheme,user,password,host,port,path,query,fragment,__meta,__extmap,__hash){
this.scheme = scheme;
this.user = user;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.fragment = fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
lambdaisland.uri.URI.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var authority_string = ((function (this$){
return (function (user__$1,password__$1,host__$1,port__$1){
if(cljs.core.truth_(host__$1)){
var G__66414 = user__$1;
var G__66414__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = user__$1;
if(cljs.core.truth_(and__4120__auto__)){
return password__$1;
} else {
return and__4120__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66414),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password__$1)].join(''):G__66414);
var G__66414__$2 = (cljs.core.truth_(user__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66414__$1),"@"].join(''):G__66414__$1);
var G__66414__$3 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66414__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host__$1)].join('')
;
if(cljs.core.truth_(port__$1)){
return [G__66414__$3,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port__$1)].join('');
} else {
return G__66414__$3;
}
} else {
return null;
}
});})(this$))
;
var authority = authority_string(self__.user,self__.password,self__.host,self__.port);
var G__66418 = "";
var G__66418__$1 = (cljs.core.truth_(self__.scheme)?[G__66418,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.scheme),":"].join(''):G__66418);
var G__66418__$2 = (cljs.core.truth_(authority)?[G__66418__$1,"//",authority].join(''):G__66418__$1);
var G__66418__$3 = [G__66418__$2,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join('')
;
var G__66418__$4 = (cljs.core.truth_(self__.query)?[G__66418__$3,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.query)].join(''):G__66418__$3);
if(cljs.core.truth_(self__.fragment)){
return [G__66418__$4,"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fragment)].join('');
} else {
return G__66418__$4;
}
});

lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k66401,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__66423 = k66401;
var G__66423__$1 = (((G__66423 instanceof cljs.core.Keyword))?G__66423.fqn:null);
switch (G__66423__$1) {
case "scheme":
return self__.scheme;

break;
case "user":
return self__.user;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "fragment":
return self__.fragment;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66401,else__4388__auto__);

}
});

lambdaisland.uri.URI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__66425){
var vec__66427 = p__66425;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66427,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66427,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#lambdaisland.uri.URI{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment],null))], null),self__.__extmap));
});

lambdaisland.uri.URI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66400){
var self__ = this;
var G__66400__$1 = this;
return (new cljs.core.RecordIter((0),G__66400__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

lambdaisland.uri.URI.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

lambdaisland.uri.URI.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,self__.__hash));
});

lambdaisland.uri.URI.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

lambdaisland.uri.URI.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__66489 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-701916260 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__66489(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

lambdaisland.uri.URI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66402,other66403){
var self__ = this;
var this66402__$1 = this;
return (((!((other66403 == null)))) && ((this66402__$1.constructor === other66403.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.scheme,other66403.scheme)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.user,other66403.user)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.password,other66403.password)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.host,other66403.host)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.port,other66403.port)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.path,other66403.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.query,other66403.query)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.fragment,other66403.fragment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66402__$1.__extmap,other66403.__extmap)));
});

lambdaisland.uri.URI.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"fragment","fragment",826775688),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"scheme","scheme",90199613),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

lambdaisland.uri.URI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__66400){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__66529 = cljs.core.keyword_identical_QMARK_;
var expr__66530 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__66533 = new cljs.core.Keyword(null,"scheme","scheme",90199613);
var G__66534 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66533,G__66534) : pred__66529.call(null,G__66533,G__66534));
})())){
return (new lambdaisland.uri.URI(G__66400,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__66535 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__66536 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66535,G__66536) : pred__66529.call(null,G__66535,G__66536));
})())){
return (new lambdaisland.uri.URI(self__.scheme,G__66400,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__66537 = new cljs.core.Keyword(null,"password","password",417022471);
var G__66538 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66537,G__66538) : pred__66529.call(null,G__66537,G__66538));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,G__66400,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__66540 = new cljs.core.Keyword(null,"host","host",-1558485167);
var G__66541 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66540,G__66541) : pred__66529.call(null,G__66540,G__66541));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,G__66400,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__66543 = new cljs.core.Keyword(null,"port","port",1534937262);
var G__66544 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66543,G__66544) : pred__66529.call(null,G__66543,G__66544));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,G__66400,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__66546 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__66547 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66546,G__66547) : pred__66529.call(null,G__66546,G__66547));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,G__66400,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__66551 = new cljs.core.Keyword(null,"query","query",-1288509510);
var G__66552 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66551,G__66552) : pred__66529.call(null,G__66551,G__66552));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,G__66400,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__66554 = new cljs.core.Keyword(null,"fragment","fragment",826775688);
var G__66555 = expr__66530;
return (pred__66529.cljs$core$IFn$_invoke$arity$2 ? pred__66529.cljs$core$IFn$_invoke$arity$2(G__66554,G__66555) : pred__66529.call(null,G__66554,G__66555));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,G__66400,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__66400),null));
}
}
}
}
}
}
}
}
});

lambdaisland.uri.URI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user","user",1532431356),self__.user,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"password","password",417022471),self__.password,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"host","host",-1558485167),self__.host,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"port","port",1534937262),self__.port,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"query","query",-1288509510),self__.query,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment,null))], null),self__.__extmap));
});

lambdaisland.uri.URI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__66400){
var self__ = this;
var this__4384__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,G__66400,self__.__extmap,self__.__hash));
});

lambdaisland.uri.URI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

lambdaisland.uri.URI.prototype.call = (function (self__,kw){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,kw);
});

lambdaisland.uri.URI.prototype.apply = (function (self__,args66410){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args66410)));
});

lambdaisland.uri.URI.prototype.cljs$core$IFn$_invoke$arity$1 = (function (kw){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,kw);
});

lambdaisland.uri.URI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scheme","scheme",1730731140,null),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"fragment","fragment",-1827660081,null)], null);
});

lambdaisland.uri.URI.cljs$lang$type = true;

lambdaisland.uri.URI.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"lambdaisland.uri/URI",null,(1),null));
});

lambdaisland.uri.URI.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"lambdaisland.uri/URI");
});

/**
 * Positional factory function for lambdaisland.uri/URI.
 */
lambdaisland.uri.__GT_URI = (function lambdaisland$uri$__GT_URI(scheme,user,password,host,port,path,query,fragment){
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
});

/**
 * Factory function for lambdaisland.uri/URI, taking a map of keywords to field values.
 */
lambdaisland.uri.map__GT_URI = (function lambdaisland$uri$map__GT_URI(G__66407){
var extmap__4424__auto__ = (function (){var G__66569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66407,new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)], 0));
if(cljs.core.record_QMARK_(G__66407)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66569);
} else {
return G__66569;
}
})();
return (new lambdaisland.uri.URI(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(G__66407),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(G__66407),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__66407),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__66407),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__66407),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__66407),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__66407),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(G__66407),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

lambdaisland.uri.match_uri = (function lambdaisland$uri$match_uri(uri){
var matches = cljs.core.re_matches(lambdaisland.uri.uri_regex,uri);
var vec__66570 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(1),null);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(3),null);
var authority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(4),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(5),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(6),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(7),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(8),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66570,(9),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheme,authority,((cljs.core.seq(path))?path:null),query,fragment], null);
});
lambdaisland.uri.match_authority = (function lambdaisland$uri$match_authority(authority){
var matches = cljs.core.re_matches(lambdaisland.uri.authority_regex,authority);
var vec__66573 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(1),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(3),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(4),null);
var host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(5),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(6),null);
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66573,(7),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,password,host,port], null);
});
/**
 * Parse a URI string into a lambadisland.uri.URI record.
 */
lambdaisland.uri.parse = (function lambdaisland$uri$parse(uri){
var vec__66576 = lambdaisland.uri.match_uri(uri);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66576,(0),null);
var authority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66576,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66576,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66576,(3),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66576,(4),null);
if(cljs.core.truth_(authority)){
var vec__66581 = lambdaisland.uri.match_authority(authority);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66581,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66581,(1),null);
var host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66581,(2),null);
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66581,(3),null);
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
} else {
return (new lambdaisland.uri.URI(scheme,null,null,null,null,path,query,fragment,null,null,null));
}
});
/**
 * Turn the given value into a lambdaisland.uri.URI record, if it isn't one
 *   already. Supports String, java.net.URI.
 */
lambdaisland.uri.uri = (function lambdaisland$uri$uri(uri_like){
if((uri_like instanceof lambdaisland.uri.URI)){
return uri_like;
} else {
return lambdaisland.uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri_like));
}
});
lambdaisland.uri.absolute_path_QMARK_ = (function lambdaisland$uri$absolute_path_QMARK_(path){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path),"/");
});
/**
 * As per RFC 3986 section 5.2.4
 */
lambdaisland.uri.remove_dot_segments = (function lambdaisland$uri$remove_dot_segments(path){
if(cljs.core.truth_(path)){
var in$ = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/(?=\/)/);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var G__66603 = cljs.core.first(in$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/.",G__66603)){
if(cljs.core.next(in$)){
var G__66694 = cljs.core.next(in$);
var G__66695 = out;
in$ = G__66694;
out = G__66695;
continue;
} else {
var G__66696 = null;
var G__66697 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,"/");
in$ = G__66696;
out = G__66697;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/..",G__66603)){
if(cljs.core.next(in$)){
var G__66698 = cljs.core.next(in$);
var G__66699 = cljs.core.vec(cljs.core.butlast(out));
in$ = G__66698;
out = G__66699;
continue;
} else {
var G__66700 = null;
var G__66701 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(out)),"/");
in$ = G__66700;
out = G__66701;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__66603)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(out);
} else {
var G__66703 = cljs.core.next(in$);
var G__66704 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(in$));
in$ = G__66703;
out = G__66704;
continue;

}
}
}
break;
}
} else {
return null;
}
});
lambdaisland.uri.merge_paths = (function lambdaisland$uri$merge_paths(a,b){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/",null], null), null),a))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/^.*\//,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
if(lambdaisland.uri.absolute_path_QMARK_(b)){
return b;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}
}
});
/**
 * Join two URI records as per RFC 3986. Handles relative URIs.
 */
lambdaisland.uri.join_STAR_ = (function lambdaisland$uri$join_STAR_(base,ref){
if(cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(ref))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ref,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.remove_dot_segments);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(ref))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(base),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ref)], 0)):(((new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.some(new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,base], null))):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.remove_dot_segments(((lambdaisland.uri.absolute_path_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref)))?new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref):lambdaisland.uri.merge_paths(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ref)], 0)))),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(ref));
}
});
/**
 * Joins any number of URIs as per RFC3986. Arguments can be strings, they will
 *   be coerced to URI records.
 */
lambdaisland.uri.join = (function lambdaisland$uri$join(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66713 = arguments.length;
var i__4731__auto___66714 = (0);
while(true){
if((i__4731__auto___66714 < len__4730__auto___66713)){
args__4736__auto__.push((arguments[i__4731__auto___66714]));

var G__66715 = (i__4731__auto___66714 + (1));
i__4731__auto___66714 = G__66715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic = (function (uris){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.join_STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.uri,uris));
});

lambdaisland.uri.join.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lambdaisland.uri.join.cljs$lang$applyTo = (function (seq66625){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66625));
});

/**
 * Is the URI relative? Returns true if the URI does not have a scheme (protocol).
 */
lambdaisland.uri.relative_QMARK_ = (function lambdaisland$uri$relative_QMARK_(uri){
return (new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(uri) == null);
});
/**
 * Is the URI absolute? Returns true if the URI has a scheme (protocol), and hence also an origin.
 */
lambdaisland.uri.absolute_QMARK_ = cljs.core.complement(lambdaisland.uri.relative_QMARK_);
lambdaisland.uri.edn_tag = new cljs.core.Symbol("lambdaisland","uri","lambdaisland/uri",-75335492,null);
lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.edn_tag)," ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1.toString()], 0))], 0));
});
/**
 * A map that can be passed to clojure.edn/read, so tagged URI literals are
 *   read back correctly.
 */
lambdaisland.uri.edn_readers = cljs.core.PersistentArrayMap.createAsIfByAssoc([lambdaisland.uri.edn_tag,lambdaisland.uri.parse]);

//# sourceMappingURL=lambdaisland.uri.js.map
