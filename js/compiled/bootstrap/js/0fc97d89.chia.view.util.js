goog.provide('chia.view.util');
chia.view.util.find_or_append_element = (function chia$view$util$find_or_append_element(var_args){
var G__49473 = arguments.length;
switch (G__49473) {
case 1:
return chia.view.util.find_or_append_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.view.util.find_or_append_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.view.util.find_or_append_element.cljs$core$IFn$_invoke$arity$1 = (function (id){
return chia.view.util.find_or_append_element.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"div","div",1057191632));
});

chia.view.util.find_or_append_element.cljs$core$IFn$_invoke$arity$2 = (function (id,tag){
var or__4131__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var element = (function (){var obj49478 = document.createElement(cljs.core.name(tag));
var obj49479 = (((!((obj49478 == null))))?obj49478:({}));
(obj49479["id"] = cljs.core.name(id));

return obj49479;
})();
return document.body.appendChild(element);
}
});

chia.view.util.find_or_append_element.cljs$lang$maxFixedArity = 2;

