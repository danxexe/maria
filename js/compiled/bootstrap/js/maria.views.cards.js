goog.provide('maria.views.cards');
goog.require('cljs.core');
goog.require('maria.views.icons');
maria.views.cards.card_classes = "mb3 nl3 nr3 bg-darken-lightly pv1";
maria.views.cards.arrow = (function maria$views$cards$arrow(direction){
return maria.views.icons.style(maria.views.icons.ArrowPointingDown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all ease 0.2s",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__66314 = direction;
var G__66314__$1 = (((G__66314 instanceof cljs.core.Keyword))?G__66314.fqn:null);
switch (G__66314__$1) {
case "down":
return (0);

break;
case "left":
return (90);

break;
case "up":
return (180);

break;
case "right":
return (-90);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66314__$1)].join('')));

}
})()),"deg)"].join('')], null));
});

//# sourceMappingURL=maria.views.cards.js.map