goog.provide('cells.lib');
cells.lib._on_frame = (function cells$lib$_on_frame(var_args){
var G__52230 = arguments.length;
switch (G__52230) {
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
var interval_f = (function (){var cell__34483__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__34484__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__34483__auto__,error_handler__34484__auto__,self,disposed_QMARK_){
return (function() { 
var G__52462__delegate = function (args__34485__auto__){
var _STAR_self_STAR__orig_val__52251 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__52252 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__52253 = cell__34483__auto__;
var _STAR_error_handler_STAR__temp_val__52254 = error_handler__34484__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__52253;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__52254;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__52251,_STAR_error_handler_STAR__orig_val__52252,_STAR_self_STAR__temp_val__52253,_STAR_error_handler_STAR__temp_val__52254,cell__34483__auto__,error_handler__34484__auto__,self,disposed_QMARK_){
return (function cells$lib$frame_f(){
if(cljs.core.deref(disposed_QMARK_) === false){
cljs.core.reset_BANG_(self,(function (){var G__52256 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52256) : f.call(null,G__52256));
})());

return window.requestAnimationFrame(cells$lib$frame_f);
} else {
return null;
}
});})(_STAR_self_STAR__orig_val__52251,_STAR_error_handler_STAR__orig_val__52252,_STAR_self_STAR__temp_val__52253,_STAR_error_handler_STAR__temp_val__52254,cell__34483__auto__,error_handler__34484__auto__,self,disposed_QMARK_))
,args__34485__auto__);
}catch (e52255){if((e52255 instanceof Error)){
var e__34486__auto__ = e52255;
return cells.cell.error_BANG_(cell__34483__auto__,e__34486__auto__);
} else {
throw e52255;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__52252;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__52251;
}};
var G__52462 = function (var_args){
var args__34485__auto__ = null;
if (arguments.length > 0) {
var G__52483__i = 0, G__52483__a = new Array(arguments.length -  0);
while (G__52483__i < G__52483__a.length) {G__52483__a[G__52483__i] = arguments[G__52483__i + 0]; ++G__52483__i;}
  args__34485__auto__ = new cljs.core.IndexedSeq(G__52483__a,0,null);
} 
return G__52462__delegate.call(this,args__34485__auto__);};
G__52462.cljs$lang$maxFixedArity = 0;
G__52462.cljs$lang$applyTo = (function (arglist__52484){
var args__34485__auto__ = cljs.core.seq(arglist__52484);
return G__52462__delegate(args__34485__auto__);
});
G__52462.cljs$core$IFn$_invoke$arity$variadic = G__52462__delegate;
return G__52462;
})()
;
;})(cell__34483__auto__,error_handler__34484__auto__,self,disposed_QMARK_))
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
var G__52269 = arguments.length;
switch (G__52269) {
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
var G__52279 = cljs.core.deref(clear_key);
if((G__52279 == null)){
return null;
} else {
return clearInterval(G__52279);
}
});})(self,clear_key))
);
var interval_f = (function (){var cell__34483__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__34484__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_){
return (function() { 
var G__52506__delegate = function (args__34485__auto__){
var _STAR_self_STAR__orig_val__52290 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__52291 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__52292 = cell__34483__auto__;
var _STAR_error_handler_STAR__temp_val__52293 = error_handler__34484__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__52292;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__52293;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__52290,_STAR_error_handler_STAR__orig_val__52291,_STAR_self_STAR__temp_val__52292,_STAR_error_handler_STAR__temp_val__52293,cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_){
return (function (){
return cljs.core.reset_BANG_(self,(function (){var G__52300 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52300) : f.call(null,G__52300));
})());
});})(_STAR_self_STAR__orig_val__52290,_STAR_error_handler_STAR__orig_val__52291,_STAR_self_STAR__temp_val__52292,_STAR_error_handler_STAR__temp_val__52293,cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_))
,args__34485__auto__);
}catch (e52296){if((e52296 instanceof Error)){
var e__34486__auto__ = e52296;
return cells.cell.error_BANG_(cell__34483__auto__,e__34486__auto__);
} else {
throw e52296;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__52291;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__52290;
}};
var G__52506 = function (var_args){
var args__34485__auto__ = null;
if (arguments.length > 0) {
var G__52512__i = 0, G__52512__a = new Array(arguments.length -  0);
while (G__52512__i < G__52512__a.length) {G__52512__a[G__52512__i] = arguments[G__52512__i + 0]; ++G__52512__i;}
  args__34485__auto__ = new cljs.core.IndexedSeq(G__52512__a,0,null);
} 
return G__52506__delegate.call(this,args__34485__auto__);};
G__52506.cljs$lang$maxFixedArity = 0;
G__52506.cljs$lang$applyTo = (function (arglist__52514){
var args__34485__auto__ = cljs.core.seq(arglist__52514);
return G__52506__delegate(args__34485__auto__);
});
G__52506.cljs$core$IFn$_invoke$arity$variadic = G__52506__delegate;
return G__52506;
})()
;
;})(cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_))
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
var G__52303 = cljs.core.deref(clear_key);
if((G__52303 == null)){
return null;
} else {
return clearTimeout(G__52303);
}
});})(self,clear_key))
);
var timeout_f = (function (){var cell__34483__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__34484__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_){
return (function() { 
var G__52518__delegate = function (args__34485__auto__){
var _STAR_self_STAR__orig_val__52305 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__52306 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__52307 = cell__34483__auto__;
var _STAR_error_handler_STAR__temp_val__52308 = error_handler__34484__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__52307;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__52308;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__52305,_STAR_error_handler_STAR__orig_val__52306,_STAR_self_STAR__temp_val__52307,_STAR_error_handler_STAR__temp_val__52308,cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_){
return (function (){
return cljs.core.reset_BANG_(self,value);
});})(_STAR_self_STAR__orig_val__52305,_STAR_error_handler_STAR__orig_val__52306,_STAR_self_STAR__temp_val__52307,_STAR_error_handler_STAR__temp_val__52308,cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_))
,args__34485__auto__);
}catch (e52310){if((e52310 instanceof Error)){
var e__34486__auto__ = e52310;
return cells.cell.error_BANG_(cell__34483__auto__,e__34486__auto__);
} else {
throw e52310;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__52306;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__52305;
}};
var G__52518 = function (var_args){
var args__34485__auto__ = null;
if (arguments.length > 0) {
var G__52521__i = 0, G__52521__a = new Array(arguments.length -  0);
while (G__52521__i < G__52521__a.length) {G__52521__a[G__52521__i] = arguments[G__52521__i + 0]; ++G__52521__i;}
  args__34485__auto__ = new cljs.core.IndexedSeq(G__52521__a,0,null);
} 
return G__52518__delegate.call(this,args__34485__auto__);};
G__52518.cljs$lang$maxFixedArity = 0;
G__52518.cljs$lang$applyTo = (function (arglist__52522){
var args__34485__auto__ = cljs.core.seq(arglist__52522);
return G__52518__delegate(args__34485__auto__);
});
G__52518.cljs$core$IFn$_invoke$arity$variadic = G__52518__delegate;
return G__52518;
})()
;
;})(cell__34483__auto__,error_handler__34484__auto__,self,clear_key,_))
})();
cljs.core.vreset_BANG_(clear_key,setTimeout(timeout_f,n));

return null;
});
cells.lib.parse_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"json->clj","json->clj",1598798328),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__52317_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__52317_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),JSON.parse),new cljs.core.Keyword(null,"json","json",1279968570),JSON.parse,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.identity], null);
cells.lib.xhrio_error_message = (function cells$lib$xhrio_error_message(xhrio){
if(cljs.core.truth_(xhrio.isSuccess())){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__52322 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__52322);
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
var G__52336 = arguments.length;
switch (G__52336) {
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

cells.lib.fetch.cljs$core$IFn$_invoke$arity$2 = (function (url,p__52337){
var map__52338 = p__52337;
var map__52338__$1 = (((((!((map__52338 == null))))?(((((map__52338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52338):map__52338);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52338__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json->clj","json->clj",1598798328));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52338__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var self = cells.cell._STAR_self_STAR_;
var url__$1 = (function (){var G__52344 = url;
if(cljs.core.truth_(query)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52344),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.lib.query_string(query))].join('');
} else {
return G__52344;
}
})();
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells.lib.parse_fns,format);
cells.cell.loading_BANG_(self);

var G__52360_52531 = url__$1;
var G__52361_52532 = (function (){var cell__34483__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__34484__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__34483__auto__,error_handler__34484__auto__,G__52360_52531,self,url__$1,parse,map__52338,map__52338__$1,format,query){
return (function() { 
var G__52534__delegate = function (args__34485__auto__){
var _STAR_self_STAR__orig_val__52374 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__52375 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__52376 = cell__34483__auto__;
var _STAR_error_handler_STAR__temp_val__52377 = error_handler__34484__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__52376;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__52377;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__52374,_STAR_error_handler_STAR__orig_val__52375,_STAR_self_STAR__temp_val__52376,_STAR_error_handler_STAR__temp_val__52377,cell__34483__auto__,error_handler__34484__auto__,G__52360_52531,self,url__$1,parse,map__52338,map__52338__$1,format,query){
return (function (event){
var xhrio = (function (){var obj52384 = event;
var k52385 = "target";
if((function (){var obj52389 = obj52384;
return (((!((obj52389 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52385,obj52389)));
})()){
return (obj52384[k52385]);
} else {
return undefined;
}
})();
var temp__5718__auto__ = cells.lib.xhrio_error_message(xhrio);
if(cljs.core.truth_(temp__5718__auto__)){
var error_message = temp__5718__auto__;
return cells.cell.error_BANG_(self,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(error_message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),self], null)));
} else {
var formatted_value = (function (){var G__52397 = (function (){var obj__20089__auto__ = xhrio;
var f__20090__auto__ = (obj__20089__auto__["getResponseText"]);
return f__20090__auto__.call(obj__20089__auto__);
})();
var G__52397__$1 = (((G__52397 == null))?null:chia.util.some_str(G__52397));
if((G__52397__$1 == null)){
return null;
} else {
return (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(G__52397__$1) : parse.call(null,G__52397__$1));
}
})();
cells.cell.complete_BANG_(self);

return cljs.core.reset_BANG_(self,formatted_value);
}
});})(_STAR_self_STAR__orig_val__52374,_STAR_error_handler_STAR__orig_val__52375,_STAR_self_STAR__temp_val__52376,_STAR_error_handler_STAR__temp_val__52377,cell__34483__auto__,error_handler__34484__auto__,G__52360_52531,self,url__$1,parse,map__52338,map__52338__$1,format,query))
,args__34485__auto__);
}catch (e52379){if((e52379 instanceof Error)){
var e__34486__auto__ = e52379;
return cells.cell.error_BANG_(cell__34483__auto__,e__34486__auto__);
} else {
throw e52379;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__52375;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__52374;
}};
var G__52534 = function (var_args){
var args__34485__auto__ = null;
if (arguments.length > 0) {
var G__52542__i = 0, G__52542__a = new Array(arguments.length -  0);
while (G__52542__i < G__52542__a.length) {G__52542__a[G__52542__i] = arguments[G__52542__i + 0]; ++G__52542__i;}
  args__34485__auto__ = new cljs.core.IndexedSeq(G__52542__a,0,null);
} 
return G__52534__delegate.call(this,args__34485__auto__);};
G__52534.cljs$lang$maxFixedArity = 0;
G__52534.cljs$lang$applyTo = (function (arglist__52543){
var args__34485__auto__ = cljs.core.seq(arglist__52543);
return G__52534__delegate(args__34485__auto__);
});
G__52534.cljs$core$IFn$_invoke$arity$variadic = G__52534__delegate;
return G__52534;
})()
;
;})(cell__34483__auto__,error_handler__34484__auto__,G__52360_52531,self,url__$1,parse,map__52338,map__52338__$1,format,query))
})();
goog.net.XhrIo.send(G__52360_52531,G__52361_52532);

return cljs.core.deref(self);
});

cells.lib.fetch.cljs$lang$maxFixedArity = 2;

cells.lib.geo_location = (function cells$lib$geo_location(){
var self = cells.cell._STAR_self_STAR_;
cells.cell.loading_BANG_(self);

var obj__20089__auto__ = (function (){var obj52405 = navigator;
var k52406 = "geolocation";
if((function (){var obj52407 = obj52405;
return (((!((obj52407 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52406,obj52407)));
})()){
return (obj52405[k52406]);
} else {
return undefined;
}
})();
var f__20090__auto__ = (obj__20089__auto__["getCurrentPosition"]);
return f__20090__auto__.call(obj__20089__auto__,(function (){var cell__34483__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__34484__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self){
return (function() { 
var G__52545__delegate = function (args__34485__auto__){
var _STAR_self_STAR__orig_val__52411 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__52412 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__52413 = cell__34483__auto__;
var _STAR_error_handler_STAR__temp_val__52414 = error_handler__34484__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__52413;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__52414;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__52411,_STAR_error_handler_STAR__orig_val__52412,_STAR_self_STAR__temp_val__52413,_STAR_error_handler_STAR__temp_val__52414,cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self){
return (function (location){
cells.cell.complete_BANG_(self);

return cljs.core.reset_BANG_(self,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var obj52420 = (function (){var obj52422 = location;
var k52423 = "coords";
if((function (){var obj52424 = obj52422;
return (((!((obj52424 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52423,obj52424)));
})()){
return (obj52422[k52423]);
} else {
return undefined;
}
})();
if((!((obj52420 == null)))){
var out52421 = ({});
var k__19997__auto___52554 = "latitude";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__19997__auto___52554,obj52420)){
var obj52427_52556 = out52421;
(obj52427_52556[k__19997__auto___52554] = (obj52420[k__19997__auto___52554]));

} else {
}

var k__19997__auto___52558 = "longitude";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__19997__auto___52558,obj52420)){
var obj52428_52559 = out52421;
(obj52428_52559[k__19997__auto___52558] = (obj52420[k__19997__auto___52558]));

} else {
}

return out52421;
} else {
return ({});
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});})(_STAR_self_STAR__orig_val__52411,_STAR_error_handler_STAR__orig_val__52412,_STAR_self_STAR__temp_val__52413,_STAR_error_handler_STAR__temp_val__52414,cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self))
,args__34485__auto__);
}catch (e52415){if((e52415 instanceof Error)){
var e__34486__auto__ = e52415;
return cells.cell.error_BANG_(cell__34483__auto__,e__34486__auto__);
} else {
throw e52415;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__52412;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__52411;
}};
var G__52545 = function (var_args){
var args__34485__auto__ = null;
if (arguments.length > 0) {
var G__52563__i = 0, G__52563__a = new Array(arguments.length -  0);
while (G__52563__i < G__52563__a.length) {G__52563__a[G__52563__i] = arguments[G__52563__i + 0]; ++G__52563__i;}
  args__34485__auto__ = new cljs.core.IndexedSeq(G__52563__a,0,null);
} 
return G__52545__delegate.call(this,args__34485__auto__);};
G__52545.cljs$lang$maxFixedArity = 0;
G__52545.cljs$lang$applyTo = (function (arglist__52564){
var args__34485__auto__ = cljs.core.seq(arglist__52564);
return G__52545__delegate(args__34485__auto__);
});
G__52545.cljs$core$IFn$_invoke$arity$variadic = G__52545__delegate;
return G__52545;
})()
;
;})(cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self))
})(),(function (){var cell__34483__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__34484__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self){
return (function() { 
var G__52565__delegate = function (args__34485__auto__){
var _STAR_self_STAR__orig_val__52433 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__52434 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__52435 = cell__34483__auto__;
var _STAR_error_handler_STAR__temp_val__52436 = error_handler__34484__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__52435;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__52436;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__52433,_STAR_error_handler_STAR__orig_val__52434,_STAR_self_STAR__temp_val__52435,_STAR_error_handler_STAR__temp_val__52436,cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self){
return (function (error){
return cells.cell.error_BANG_(self,cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
});})(_STAR_self_STAR__orig_val__52433,_STAR_error_handler_STAR__orig_val__52434,_STAR_self_STAR__temp_val__52435,_STAR_error_handler_STAR__temp_val__52436,cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self))
,args__34485__auto__);
}catch (e52437){if((e52437 instanceof Error)){
var e__34486__auto__ = e52437;
return cells.cell.error_BANG_(cell__34483__auto__,e__34486__auto__);
} else {
throw e52437;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__52434;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__52433;
}};
var G__52565 = function (var_args){
var args__34485__auto__ = null;
if (arguments.length > 0) {
var G__52566__i = 0, G__52566__a = new Array(arguments.length -  0);
while (G__52566__i < G__52566__a.length) {G__52566__a[G__52566__i] = arguments[G__52566__i + 0]; ++G__52566__i;}
  args__34485__auto__ = new cljs.core.IndexedSeq(G__52566__a,0,null);
} 
return G__52565__delegate.call(this,args__34485__auto__);};
G__52565.cljs$lang$maxFixedArity = 0;
G__52565.cljs$lang$applyTo = (function (arglist__52567){
var args__34485__auto__ = cljs.core.seq(arglist__52567);
return G__52565__delegate(args__34485__auto__);
});
G__52565.cljs$core$IFn$_invoke$arity$variadic = G__52565__delegate;
return G__52565;
})()
;
;})(cell__34483__auto__,error_handler__34484__auto__,obj__20089__auto__,f__20090__auto__,self))
})());
});
cells.lib._timeout = (function cells$lib$_timeout(var_args){
var G__52448 = arguments.length;
switch (G__52448) {
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
var clear_key = setTimeout((function (){var cell__34483__auto__ = cells.cell._STAR_self_STAR_;
var error_handler__34484__auto__ = cells.cell._STAR_error_handler_STAR_;
return ((function (cell__34483__auto__,error_handler__34484__auto__,self,_){
return (function() { 
var G__52571__delegate = function (args__34485__auto__){
var _STAR_self_STAR__orig_val__52451 = cells.cell._STAR_self_STAR_;
var _STAR_error_handler_STAR__orig_val__52452 = cells.cell._STAR_error_handler_STAR_;
var _STAR_self_STAR__temp_val__52453 = cell__34483__auto__;
var _STAR_error_handler_STAR__temp_val__52454 = error_handler__34484__auto__;
cells.cell._STAR_self_STAR_ = _STAR_self_STAR__temp_val__52453;

cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__temp_val__52454;

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_self_STAR__orig_val__52451,_STAR_error_handler_STAR__orig_val__52452,_STAR_self_STAR__temp_val__52453,_STAR_error_handler_STAR__temp_val__52454,cell__34483__auto__,error_handler__34484__auto__,self,_){
return (function (){
cells.cell.complete_BANG_(self);

return cljs.core.reset_BANG_(self,(function (){var G__52456 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52456) : f.call(null,G__52456));
})());
});})(_STAR_self_STAR__orig_val__52451,_STAR_error_handler_STAR__orig_val__52452,_STAR_self_STAR__temp_val__52453,_STAR_error_handler_STAR__temp_val__52454,cell__34483__auto__,error_handler__34484__auto__,self,_))
,args__34485__auto__);
}catch (e52455){if((e52455 instanceof Error)){
var e__34486__auto__ = e52455;
return cells.cell.error_BANG_(cell__34483__auto__,e__34486__auto__);
} else {
throw e52455;

}
}}finally {cells.cell._STAR_error_handler_STAR_ = _STAR_error_handler_STAR__orig_val__52452;

cells.cell._STAR_self_STAR_ = _STAR_self_STAR__orig_val__52451;
}};
var G__52571 = function (var_args){
var args__34485__auto__ = null;
if (arguments.length > 0) {
var G__52572__i = 0, G__52572__a = new Array(arguments.length -  0);
while (G__52572__i < G__52572__a.length) {G__52572__a[G__52572__i] = arguments[G__52572__i + 0]; ++G__52572__i;}
  args__34485__auto__ = new cljs.core.IndexedSeq(G__52572__a,0,null);
} 
return G__52571__delegate.call(this,args__34485__auto__);};
G__52571.cljs$lang$maxFixedArity = 0;
G__52571.cljs$lang$applyTo = (function (arglist__52573){
var args__34485__auto__ = cljs.core.seq(arglist__52573);
return G__52571__delegate(args__34485__auto__);
});
G__52571.cljs$core$IFn$_invoke$arity$variadic = G__52571__delegate;
return G__52571;
})()
;
;})(cell__34483__auto__,error_handler__34484__auto__,self,_))
})(),n);
cells.cell.on_dispose(self,({}),((function (self,_,clear_key){
return (function (){
return clearTimeout(clear_key);
});})(self,_,clear_key))
);

return initial_value;
});

cells.lib._timeout.cljs$lang$maxFixedArity = 3;

