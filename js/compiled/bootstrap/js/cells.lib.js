goog.provide('cells.lib');
goog.require('cljs.core');
goog.require('cells.cell');
goog.require('goog.net.XhrIo');
goog.require('goog.net.ErrorCode');
goog.require('cells.util');
goog.require('applied_science.js_interop');
goog.require('chia.util');
goog.require('goog.Uri');
cells.lib._on_frame = (function cells$lib$_on_frame(var_args){
var G__68611 = arguments.length;
switch (G__68611) {
case 1:
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib._on_frame.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2(f,null);
});

cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2 = (function (f,initial_value){
var self = cells.cell._STAR_self_STAR_;
var disposed_QMARK_ = cljs.core.volatile_BANG_(false);
var interval_f = (function (){var cell__67907__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__67908__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__67907__auto__,error_handler__67908__auto__,self,disposed_QMARK_){
return (function() { 
var G__68885__delegate = function (args__67909__auto__){
var _STAR_self_STAR__orig_val__68635 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__68636 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__68637 = cell__67907__auto__;
var _STAR_error_handler_STAR__temp_val__68638 = error_handler__67908__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68637;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__68638;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__68635,_STAR_error_handler_STAR__orig_val__68636,_STAR_self_STAR__temp_val__68637,_STAR_error_handler_STAR__temp_val__68638,cell__67907__auto__,error_handler__67908__auto__,self,disposed_QMARK_){
return (function cells$lib$frame_f(){
if(cljs.core.deref(disposed_QMARK_) === false){
cljs.core.reset_BANG_(self,(function (){var G__68649 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68649) : f.call(null,G__68649));
})());

return window.requestAnimationFrame(cells$lib$frame_f);
} else {
return null;
}
});})(_STAR_self_STAR__orig_val__68635,_STAR_error_handler_STAR__orig_val__68636,_STAR_self_STAR__temp_val__68637,_STAR_error_handler_STAR__temp_val__68638,cell__67907__auto__,error_handler__67908__auto__,self,disposed_QMARK_))
,args__67909__auto__);
}catch (e68641){if((e68641 instanceof Error)){
var e__67910__auto__ = e68641;
return cells.cell.error_BANG_(cell__67907__auto__,e__67910__auto__);
} else {
throw e68641;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__68636;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68635;
}};
var G__68885 = function (var_args){
var args__67909__auto__ = null;
if (arguments.length > 0) {
var G__68889__i = 0, G__68889__a = new Array(arguments.length -  0);
while (G__68889__i < G__68889__a.length) {G__68889__a[G__68889__i] = arguments[G__68889__i + 0]; ++G__68889__i;}
  args__67909__auto__ = new cljs.core.IndexedSeq(G__68889__a,0,null);
} 
return G__68885__delegate.call(this,args__67909__auto__);};
G__68885.cljs$lang$maxFixedArity = 0;
G__68885.cljs$lang$applyTo = (function (arglist__68890){
var args__67909__auto__ = cljs.core.seq(arglist__68890);
return G__68885__delegate(args__67909__auto__);
});
G__68885.cljs$core$IFn$_invoke$arity$variadic = G__68885__delegate;
return G__68885;
})()
;
;})(cell__67907__auto__,error_handler__67908__auto__,self,disposed_QMARK_))
})();
cells.cell.on_dispose(self,new cljs.core.Keyword(null,"on-frame","on-frame",1656727698),((function (self,disposed_QMARK_,interval_f){
return (function (){
return cljs.core.vreset_BANG_(disposed_QMARK_,true);
});})(self,disposed_QMARK_,interval_f))
);

cljs.core.reset_BANG_(self,initial_value);

return window.requestAnimationFrame(interval_f);
});

cells.lib._on_frame.cljs$lang$maxFixedArity = 2;

cells.lib.interval = (function cells$lib$interval(var_args){
var G__68664 = arguments.length;
switch (G__68664) {
case 2:
return cells.lib.interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.lib.interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib.interval.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return cells.lib.interval.cljs$core$IFn$_invoke$arity$3(n,f,null);
});

cells.lib.interval.cljs$core$IFn$_invoke$arity$3 = (function (n,f,initial_value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"frame","frame",-1711082588))){
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2(f,initial_value);
} else {
var self = cells.cell._STAR_self_STAR_;
var clear_key = cljs.core.volatile_BANG_(null);
var _ = cells.cell.on_dispose(self,new cljs.core.Keyword(null,"interval","interval",1708495417),((function (self,clear_key){
return (function (){
var G__68684 = cljs.core.deref(clear_key);
if((G__68684 == null)){
return null;
} else {
return clearInterval(G__68684);
}
});})(self,clear_key))
);
var interval_f = (function (){var cell__67907__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__67908__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_){
return (function() { 
var G__68899__delegate = function (args__67909__auto__){
var _STAR_self_STAR__orig_val__68688 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__68689 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__68690 = cell__67907__auto__;
var _STAR_error_handler_STAR__temp_val__68691 = error_handler__67908__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68690;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__68691;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__68688,_STAR_error_handler_STAR__orig_val__68689,_STAR_self_STAR__temp_val__68690,_STAR_error_handler_STAR__temp_val__68691,cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_){
return (function (){
return cljs.core.reset_BANG_(self,(function (){var G__68696 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68696) : f.call(null,G__68696));
})());
});})(_STAR_self_STAR__orig_val__68688,_STAR_error_handler_STAR__orig_val__68689,_STAR_self_STAR__temp_val__68690,_STAR_error_handler_STAR__temp_val__68691,cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_))
,args__67909__auto__);
}catch (e68692){if((e68692 instanceof Error)){
var e__67910__auto__ = e68692;
return cells.cell.error_BANG_(cell__67907__auto__,e__67910__auto__);
} else {
throw e68692;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__68689;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68688;
}};
var G__68899 = function (var_args){
var args__67909__auto__ = null;
if (arguments.length > 0) {
var G__68902__i = 0, G__68902__a = new Array(arguments.length -  0);
while (G__68902__i < G__68902__a.length) {G__68902__a[G__68902__i] = arguments[G__68902__i + 0]; ++G__68902__i;}
  args__67909__auto__ = new cljs.core.IndexedSeq(G__68902__a,0,null);
} 
return G__68899__delegate.call(this,args__67909__auto__);};
G__68899.cljs$lang$maxFixedArity = 0;
G__68899.cljs$lang$applyTo = (function (arglist__68903){
var args__67909__auto__ = cljs.core.seq(arglist__68903);
return G__68899__delegate(args__67909__auto__);
});
G__68899.cljs$core$IFn$_invoke$arity$variadic = G__68899__delegate;
return G__68899;
})()
;
;})(cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_))
})();
cljs.core.vreset_BANG_(clear_key,setInterval(interval_f,n));

return cljs.core.reset_BANG_(self,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(initial_value) : f.call(null,initial_value)));
}
});

cells.lib.interval.cljs$lang$maxFixedArity = 3;

cells.lib.delay = (function cells$lib$delay(n,value){
var self = cells.cell._STAR_self_STAR_;
var clear_key = cljs.core.volatile_BANG_(null);
var _ = cells.cell.on_dispose(self,new cljs.core.Keyword(null,"delay","delay",-574225219),((function (self,clear_key){
return (function (){
var G__68701 = cljs.core.deref(clear_key);
if((G__68701 == null)){
return null;
} else {
return clearTimeout(G__68701);
}
});})(self,clear_key))
);
var timeout_f = (function (){var cell__67907__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__67908__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_){
return (function() { 
var G__68914__delegate = function (args__67909__auto__){
var _STAR_self_STAR__orig_val__68702 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__68703 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__68704 = cell__67907__auto__;
var _STAR_error_handler_STAR__temp_val__68705 = error_handler__67908__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68704;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__68705;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__68702,_STAR_error_handler_STAR__orig_val__68703,_STAR_self_STAR__temp_val__68704,_STAR_error_handler_STAR__temp_val__68705,cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_){
return (function (){
return cljs.core.reset_BANG_(self,value);
});})(_STAR_self_STAR__orig_val__68702,_STAR_error_handler_STAR__orig_val__68703,_STAR_self_STAR__temp_val__68704,_STAR_error_handler_STAR__temp_val__68705,cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_))
,args__67909__auto__);
}catch (e68706){if((e68706 instanceof Error)){
var e__67910__auto__ = e68706;
return cells.cell.error_BANG_(cell__67907__auto__,e__67910__auto__);
} else {
throw e68706;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__68703;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68702;
}};
var G__68914 = function (var_args){
var args__67909__auto__ = null;
if (arguments.length > 0) {
var G__68915__i = 0, G__68915__a = new Array(arguments.length -  0);
while (G__68915__i < G__68915__a.length) {G__68915__a[G__68915__i] = arguments[G__68915__i + 0]; ++G__68915__i;}
  args__67909__auto__ = new cljs.core.IndexedSeq(G__68915__a,0,null);
} 
return G__68914__delegate.call(this,args__67909__auto__);};
G__68914.cljs$lang$maxFixedArity = 0;
G__68914.cljs$lang$applyTo = (function (arglist__68916){
var args__67909__auto__ = cljs.core.seq(arglist__68916);
return G__68914__delegate(args__67909__auto__);
});
G__68914.cljs$core$IFn$_invoke$arity$variadic = G__68914__delegate;
return G__68914;
})()
;
;})(cell__67907__auto__,error_handler__67908__auto__,self,clear_key,_))
})();
cljs.core.vreset_BANG_(clear_key,setTimeout(timeout_f,n));

return null;
});
cells.lib.parse_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"json->clj","json->clj",1598798328),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__68713_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__68713_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),JSON.parse),new cljs.core.Keyword(null,"json","json",1279968570),JSON.parse,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.identity], null);
cells.lib.xhrio_error_message = (function cells$lib$xhrio_error_message(xhrio){
if(cljs.core.truth_(xhrio.isSuccess())){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68721 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__68721);
})()),"\n","(check your browser console for more details)"].join('');
}
});
cells.lib.query_string = (function cells$lib$query_string(query){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(query)).toString();
});
/**
 * Fetch a resource from a url. By default, response is parsed as JSON and converted to Clojure via clj->js with :keywordize-keys true.
 *   Accepts options :format, which may be :json or :text, and :query, a map which will be
 *   appended to url as a query parameter string.
 */
cells.lib.fetch = (function cells$lib$fetch(var_args){
var G__68729 = arguments.length;
switch (G__68729) {
case 1:
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib.fetch.cljs$core$IFn$_invoke$arity$1 = (function (url){
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
});

cells.lib.fetch.cljs$core$IFn$_invoke$arity$2 = (function (url,p__68737){
var map__68742 = p__68737;
var map__68742__$1 = (((((!((map__68742 == null))))?(((((map__68742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68742):map__68742);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68742__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json->clj","json->clj",1598798328));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68742__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var self = cells.cell._STAR_self_STAR_;
var url__$1 = (function (){var G__68763 = url;
if(cljs.core.truth_(query)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68763),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.lib.query_string(query))].join('');
} else {
return G__68763;
}
})();
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells.lib.parse_fns,format);
cells.cell.loading_BANG_(self);

var G__68769_68922 = url__$1;
var G__68770_68923 = (function (){var cell__67907__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__67908__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__67907__auto__,error_handler__67908__auto__,G__68769_68922,self,url__$1,parse,map__68742,map__68742__$1,format,query){
return (function() { 
var G__68924__delegate = function (args__67909__auto__){
var _STAR_self_STAR__orig_val__68775 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__68776 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__68777 = cell__67907__auto__;
var _STAR_error_handler_STAR__temp_val__68778 = error_handler__67908__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68777;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__68778;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__68775,_STAR_error_handler_STAR__orig_val__68776,_STAR_self_STAR__temp_val__68777,_STAR_error_handler_STAR__temp_val__68778,cell__67907__auto__,error_handler__67908__auto__,G__68769_68922,self,url__$1,parse,map__68742,map__68742__$1,format,query){
return (function (event){
var xhrio = (function (){var obj68782 = event;
var k68783 = "target";
if((function (){var obj68784 = obj68782;
return (((!((obj68784 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68783,obj68784)));
})()){
return (obj68782[k68783]);
} else {
return undefined;
}
})();
var temp__5718__auto__ = cells.lib.xhrio_error_message(xhrio);
if(cljs.core.truth_(temp__5718__auto__)){
var error_message = temp__5718__auto__;
return cells.cell.error_BANG_(self,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(error_message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),self], null)));
} else {
var formatted_value = (function (){var G__68787 = (function (){var obj__50657__auto__ = xhrio;
var f__50658__auto__ = (obj__50657__auto__["getResponseText"]);
return f__50658__auto__.call(obj__50657__auto__);
})();
var G__68787__$1 = (((G__68787 == null))?null:chia.util.some_str(G__68787));
if((G__68787__$1 == null)){
return null;
} else {
return (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(G__68787__$1) : parse.call(null,G__68787__$1));
}
})();
cells.cell.complete_BANG_(self);

return cljs.core.reset_BANG_(self,formatted_value);
}
});})(_STAR_self_STAR__orig_val__68775,_STAR_error_handler_STAR__orig_val__68776,_STAR_self_STAR__temp_val__68777,_STAR_error_handler_STAR__temp_val__68778,cell__67907__auto__,error_handler__67908__auto__,G__68769_68922,self,url__$1,parse,map__68742,map__68742__$1,format,query))
,args__67909__auto__);
}catch (e68779){if((e68779 instanceof Error)){
var e__67910__auto__ = e68779;
return cells.cell.error_BANG_(cell__67907__auto__,e__67910__auto__);
} else {
throw e68779;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__68776;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68775;
}};
var G__68924 = function (var_args){
var args__67909__auto__ = null;
if (arguments.length > 0) {
var G__68938__i = 0, G__68938__a = new Array(arguments.length -  0);
while (G__68938__i < G__68938__a.length) {G__68938__a[G__68938__i] = arguments[G__68938__i + 0]; ++G__68938__i;}
  args__67909__auto__ = new cljs.core.IndexedSeq(G__68938__a,0,null);
} 
return G__68924__delegate.call(this,args__67909__auto__);};
G__68924.cljs$lang$maxFixedArity = 0;
G__68924.cljs$lang$applyTo = (function (arglist__68941){
var args__67909__auto__ = cljs.core.seq(arglist__68941);
return G__68924__delegate(args__67909__auto__);
});
G__68924.cljs$core$IFn$_invoke$arity$variadic = G__68924__delegate;
return G__68924;
})()
;
;})(cell__67907__auto__,error_handler__67908__auto__,G__68769_68922,self,url__$1,parse,map__68742,map__68742__$1,format,query))
})();
goog.net.XhrIo.send(G__68769_68922,G__68770_68923);

return cljs.core.deref(self);
});

cells.lib.fetch.cljs$lang$maxFixedArity = 2;

cells.lib.geo_location = (function cells$lib$geo_location(){
var self = cells.cell._STAR_self_STAR_;
cells.cell.loading_BANG_(self);

var obj__50657__auto__ = (function (){var obj68796 = navigator;
var k68797 = "geolocation";
if((function (){var obj68798 = obj68796;
return (((!((obj68798 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68797,obj68798)));
})()){
return (obj68796[k68797]);
} else {
return undefined;
}
})();
var f__50658__auto__ = (obj__50657__auto__["getCurrentPosition"]);
return f__50658__auto__.call(obj__50657__auto__,(function (){var cell__67907__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__67908__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self){
return (function() { 
var G__68944__delegate = function (args__67909__auto__){
var _STAR_self_STAR__orig_val__68801 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__68802 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__68803 = cell__67907__auto__;
var _STAR_error_handler_STAR__temp_val__68804 = error_handler__67908__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68803;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__68804;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__68801,_STAR_error_handler_STAR__orig_val__68802,_STAR_self_STAR__temp_val__68803,_STAR_error_handler_STAR__temp_val__68804,cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self){
return (function (location){
cells.cell.complete_BANG_(self);

return cljs.core.reset_BANG_(self,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var obj68806 = (function (){var obj68809 = location;
var k68810 = "coords";
if((function (){var obj68811 = obj68809;
return (((!((obj68811 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68810,obj68811)));
})()){
return (obj68809[k68810]);
} else {
return undefined;
}
})();
if((!((obj68806 == null)))){
var out68807 = ({});
var k__50565__auto___68945 = "latitude";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50565__auto___68945,obj68806)){
var obj68824_68946 = out68807;
(obj68824_68946[k__50565__auto___68945] = (obj68806[k__50565__auto___68945]));

} else {
}

var k__50565__auto___68947 = "longitude";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50565__auto___68947,obj68806)){
var obj68827_68948 = out68807;
(obj68827_68948[k__50565__auto___68947] = (obj68806[k__50565__auto___68947]));

} else {
}

return out68807;
} else {
return ({});
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});})(_STAR_self_STAR__orig_val__68801,_STAR_error_handler_STAR__orig_val__68802,_STAR_self_STAR__temp_val__68803,_STAR_error_handler_STAR__temp_val__68804,cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self))
,args__67909__auto__);
}catch (e68805){if((e68805 instanceof Error)){
var e__67910__auto__ = e68805;
return cells.cell.error_BANG_(cell__67907__auto__,e__67910__auto__);
} else {
throw e68805;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__68802;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68801;
}};
var G__68944 = function (var_args){
var args__67909__auto__ = null;
if (arguments.length > 0) {
var G__68949__i = 0, G__68949__a = new Array(arguments.length -  0);
while (G__68949__i < G__68949__a.length) {G__68949__a[G__68949__i] = arguments[G__68949__i + 0]; ++G__68949__i;}
  args__67909__auto__ = new cljs.core.IndexedSeq(G__68949__a,0,null);
} 
return G__68944__delegate.call(this,args__67909__auto__);};
G__68944.cljs$lang$maxFixedArity = 0;
G__68944.cljs$lang$applyTo = (function (arglist__68950){
var args__67909__auto__ = cljs.core.seq(arglist__68950);
return G__68944__delegate(args__67909__auto__);
});
G__68944.cljs$core$IFn$_invoke$arity$variadic = G__68944__delegate;
return G__68944;
})()
;
;})(cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self))
})(),(function (){var cell__67907__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__67908__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self){
return (function() { 
var G__68952__delegate = function (args__67909__auto__){
var _STAR_self_STAR__orig_val__68839 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__68840 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__68841 = cell__67907__auto__;
var _STAR_error_handler_STAR__temp_val__68842 = error_handler__67908__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68841;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__68842;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__68839,_STAR_error_handler_STAR__orig_val__68840,_STAR_self_STAR__temp_val__68841,_STAR_error_handler_STAR__temp_val__68842,cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self){
return (function (error){
return cells.cell.error_BANG_(self,cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
});})(_STAR_self_STAR__orig_val__68839,_STAR_error_handler_STAR__orig_val__68840,_STAR_self_STAR__temp_val__68841,_STAR_error_handler_STAR__temp_val__68842,cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self))
,args__67909__auto__);
}catch (e68851){if((e68851 instanceof Error)){
var e__67910__auto__ = e68851;
return cells.cell.error_BANG_(cell__67907__auto__,e__67910__auto__);
} else {
throw e68851;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__68840;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68839;
}};
var G__68952 = function (var_args){
var args__67909__auto__ = null;
if (arguments.length > 0) {
var G__68954__i = 0, G__68954__a = new Array(arguments.length -  0);
while (G__68954__i < G__68954__a.length) {G__68954__a[G__68954__i] = arguments[G__68954__i + 0]; ++G__68954__i;}
  args__67909__auto__ = new cljs.core.IndexedSeq(G__68954__a,0,null);
} 
return G__68952__delegate.call(this,args__67909__auto__);};
G__68952.cljs$lang$maxFixedArity = 0;
G__68952.cljs$lang$applyTo = (function (arglist__68955){
var args__67909__auto__ = cljs.core.seq(arglist__68955);
return G__68952__delegate(args__67909__auto__);
});
G__68952.cljs$core$IFn$_invoke$arity$variadic = G__68952__delegate;
return G__68952;
})()
;
;})(cell__67907__auto__,error_handler__67908__auto__,obj__50657__auto__,f__50658__auto__,self))
})());
});
cells.lib._timeout = (function cells$lib$_timeout(var_args){
var G__68867 = arguments.length;
switch (G__68867) {
case 2:
return cells.lib._timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.lib._timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib._timeout.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return cells.lib._timeout.cljs$core$IFn$_invoke$arity$3(n,f,null);
});

cells.lib._timeout.cljs$core$IFn$_invoke$arity$3 = (function (n,f,initial_value){
var self = cells.cell._STAR_self_STAR_;
var _ = cells.cell.loading_BANG_(self);
var clear_key = setTimeout((function (){var cell__67907__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__67908__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__67907__auto__,error_handler__67908__auto__,self,_){
return (function() { 
var G__68957__delegate = function (args__67909__auto__){
var _STAR_self_STAR__orig_val__68874 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__68875 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__68876 = cell__67907__auto__;
var _STAR_error_handler_STAR__temp_val__68877 = error_handler__67908__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__68876;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__68877;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__68874,_STAR_error_handler_STAR__orig_val__68875,_STAR_self_STAR__temp_val__68876,_STAR_error_handler_STAR__temp_val__68877,cell__67907__auto__,error_handler__67908__auto__,self,_){
return (function (){
cells.cell.complete_BANG_(self);

return cljs.core.reset_BANG_(self,(function (){var G__68882 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68882) : f.call(null,G__68882));
})());
});})(_STAR_self_STAR__orig_val__68874,_STAR_error_handler_STAR__orig_val__68875,_STAR_self_STAR__temp_val__68876,_STAR_error_handler_STAR__temp_val__68877,cell__67907__auto__,error_handler__67908__auto__,self,_))
,args__67909__auto__);
}catch (e68880){if((e68880 instanceof Error)){
var e__67910__auto__ = e68880;
return cells.cell.error_BANG_(cell__67907__auto__,e__67910__auto__);
} else {
throw e68880;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__68875;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__68874;
}};
var G__68957 = function (var_args){
var args__67909__auto__ = null;
if (arguments.length > 0) {
var G__68962__i = 0, G__68962__a = new Array(arguments.length -  0);
while (G__68962__i < G__68962__a.length) {G__68962__a[G__68962__i] = arguments[G__68962__i + 0]; ++G__68962__i;}
  args__67909__auto__ = new cljs.core.IndexedSeq(G__68962__a,0,null);
} 
return G__68957__delegate.call(this,args__67909__auto__);};
G__68957.cljs$lang$maxFixedArity = 0;
G__68957.cljs$lang$applyTo = (function (arglist__68964){
var args__67909__auto__ = cljs.core.seq(arglist__68964);
return G__68957__delegate(args__67909__auto__);
});
G__68957.cljs$core$IFn$_invoke$arity$variadic = G__68957__delegate;
return G__68957;
})()
;
;})(cell__67907__auto__,error_handler__67908__auto__,self,_))
})(),n);
cells.cell.on_dispose(self,({}),((function (self,_,clear_key){
return (function (){
return clearTimeout(clear_key);
});})(self,_,clear_key))
);

return initial_value;
});

cells.lib._timeout.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cells.lib.js.map
