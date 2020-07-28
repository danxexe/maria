goog.provide('chia.routing');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lambdaisland.uri');
goog.require('chia.routing.util');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
/**
 * Splits path into segments, ignoring leading and trailing slashes.
 */
chia.routing.segments = (function chia$routing$segments(route){
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.uri(route)),/\//,(-1));
var segments__$1 = (function (){var G__66702 = segments;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(segments))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__66702,(1));
} else {
return G__66702;
}
})();
var G__66706 = segments__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.last(segments__$1))){
return cljs.core.pop(G__66706);
} else {
return G__66706;
}
});
/**
 * Returns query parameters as map.
 */
chia.routing.query = (function chia$routing$query(path){
var G__66709 = lambdaisland.uri.uri(path);
var G__66709__$1 = (((G__66709 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__66709));
if((G__66709__$1 == null)){
return null;
} else {
return chia.routing.util.form_decode(G__66709__$1);
}
});
/**
 * Returns map of parsed location information for path.
 */
chia.routing.parse_path = (function chia$routing$parse_path(path){
var uri = lambdaisland.uri.uri(path);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(uri),new cljs.core.Keyword(null,"segments","segments",1937535949),chia.routing.segments(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(uri)),new cljs.core.Keyword(null,"query","query",-1288509510),chia.routing.query(uri),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(uri)], null);
});
chia.routing.browser_QMARK_ = (typeof window !== 'undefined');
chia.routing.history_support_QMARK_ = ((chia.routing.browser_QMARK_)?goog.history.Html5History.isSupported():null);
/**
 * Returns query string, including '?'. Removes empty values. Returns nil if empty.
 */
chia.routing.query_string = (function chia$routing$query_string(m){
var G__66716 = chia.routing.util.remove_empty(m);
var G__66716__$1 = (((G__66716 == null))?null:chia.routing.util.form_encode(G__66716));
if((G__66716__$1 == null)){
return null;
} else {
return chia.routing.util.some_str(G__66716__$1);
}
});
goog.history.Html5History.prototype.getUrl_ = (function (token){
var this$ = this;
if(cljs.core.truth_(this$.useFragment_)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.pathPrefix_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
}
});

/**
 * In a browsing environment, reads the current location.
 */
chia.routing.get_route = (function chia$routing$get_route(){
if(cljs.core.truth_(chia.routing.history_support_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.hash)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.location.pathname,"/")){
return window.location.hash.substring((1));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.search)].join('');
}
}
});

/**
 * Set up browser history, using HTML5 history if available.
 */
chia.routing.make_history = (function chia$routing$make_history(){
if(chia.routing.browser_QMARK_){
if(cljs.core.truth_(chia.routing.history_support_QMARK_)){
var G__66736 = (new goog.history.Html5History());
G__66736.setPathPrefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)].join(''));

G__66736.setUseFragment(false);

return G__66736;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",window.location.pathname)){
return window.location = ["/#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chia.routing.get_route())].join('');
} else {
return (new goog.History());
}
}
} else {
return null;
}
});

if((typeof chia !== 'undefined') && (typeof chia.routing !== 'undefined') && (typeof chia.routing.history !== 'undefined')){
} else {
chia.routing.history = (function (){var G__66740 = chia.routing.make_history();
if((G__66740 == null)){
return null;
} else {
var G__66742 = G__66740;
G__66742.setEnabled(true);

return G__66742;
}
})();
}

/**
 * Trigger pushstate navigation to token (path)
 */
chia.routing.nav_BANG_ = (function chia$routing$nav_BANG_(var_args){
var G__66745 = arguments.length;
switch (G__66745) {
case 1:
return chia.routing.nav_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.routing.nav_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.routing.nav_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return chia.routing.nav_BANG_.cljs$core$IFn$_invoke$arity$2(route,true);
});

chia.routing.nav_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,add_history_state_QMARK_){
if(cljs.core.truth_(add_history_state_QMARK_)){
return chia.routing.history.setToken(route);
} else {
return chia.routing.history.replaceToken(route);
}
});

chia.routing.nav_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Navigates to current route with query-string replaced by the provided `query` map.
 */
chia.routing.query_nav_BANG_ = (function chia$routing$query_nav_BANG_(query){
var location = window.location;
return chia.routing.nav_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.map__GT_URI(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),location.pathname,new cljs.core.Keyword(null,"fragment","fragment",826775688),location.hash,new cljs.core.Keyword(null,"query","query",-1288509510),chia.routing.query_string(query)], null))));
});

/**
 * Navigates to current route with query parameters modified by `f`,
 *      which is passed the current query-map followed by `args`.
 */
chia.routing.swap_query_BANG_ = (function chia$routing$swap_query_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66874 = arguments.length;
var i__4731__auto___66876 = (0);
while(true){
if((i__4731__auto___66876 < len__4730__auto___66874)){
args__4736__auto__.push((arguments[i__4731__auto___66876]));

var G__66878 = (i__4731__auto___66876 + (1));
i__4731__auto___66876 = G__66878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chia.routing.swap_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chia.routing.swap_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return chia.routing.query_nav_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,chia.routing.query(chia.routing.get_route()),args));
});

chia.routing.swap_query_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chia.routing.swap_query_BANG_.cljs$lang$applyTo = (function (seq66779){
var G__66780 = cljs.core.first(seq66779);
var seq66779__$1 = cljs.core.next(seq66779);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66780,seq66779__$1);
});


/**
 * Return true if element is a link
 */
chia.routing.link_QMARK_ = (function chia$routing$link_QMARK_(el){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",(function (){var G__66795 = el;
if((G__66795 == null)){
return null;
} else {
return G__66795.tagName;
}
})());
});

/**
 * Return element or first ancestor of element that matches predicate, like jQuery's .closest().
 */
chia.routing.closest = (function chia$routing$closest(el,pred){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(el) : pred.call(null,el)))){
return el;
} else {
return goog.dom.getAncestor(el,pred);
}
});

chia.routing._STAR_click_event_STAR_ = null;

chia.routing.external_QMARK_ = (function chia$routing$external_QMARK_(link_element){
var map__66796 = applied_science.js_interop.lookup(window.location);
var map__66796__$1 = (((((!((map__66796 == null))))?(((((map__66796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66796):map__66796);
var current_host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66796__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var current_protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66796__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var map__66797 = applied_science.js_interop.lookup(link_element);
var map__66797__$1 = (((((!((map__66797 == null))))?(((((map__66797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66797):map__66797);
var link_host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66797__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var link_protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66797__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var link_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66797__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var or__4131__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_host,link_host);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_protocol,link_protocol);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.re_find(/\.[^\/]+$/,link_path);
}
}
});

chia.routing.valid_anchor_QMARK_ = (function chia$routing$valid_anchor_QMARK_(link_element){
var location = window.location;
var and__4120__auto__ = link_element.hash;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.pathname,link_element.pathname);
if(and__4120__auto____$1){
var and__4120__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(location.hash,link_element.hash);
if(and__4120__auto____$2){
return document.getElementById(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(link_element.hash,(1)));
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

/**
 * Intercept clicks on links with valid pushstate hrefs. Callback is passed the link's href value.
 */
chia.routing.click_event_handler = (function chia$routing$click_event_handler(callback,e){
var temp__5720__auto__ = chia.routing.closest(e.target,chia.routing.link_QMARK_);
if(cljs.core.truth_(temp__5720__auto__)){
var link_element = temp__5720__auto__;
var ignore_click_QMARK_ = (function (){var or__4131__auto__ = chia.routing.external_QMARK_(link_element);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = chia.routing.valid_anchor_QMARK_(link_element);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return e.defaultPrevented;
}
}
})();
if(cljs.core.truth_(ignore_click_QMARK_)){
return null;
} else {
e.preventDefault();

var _STAR_click_event_STAR__orig_val__66810 = chia.routing._STAR_click_event_STAR_;
var _STAR_click_event_STAR__temp_val__66811 = e;
chia.routing._STAR_click_event_STAR_ = _STAR_click_event_STAR__temp_val__66811;

try{var location = window.location;
var origin = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)].join('');
var G__66812 = clojure.string.replace(link_element.href,origin,"");
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__66812) : callback.call(null,G__66812));
}finally {chia.routing._STAR_click_event_STAR_ = _STAR_click_event_STAR__orig_val__66810;
}}
} else {
return null;
}
});

chia.routing.root_click_listener = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(chia.routing.click_event_handler,chia.routing.nav_BANG_);

if((typeof chia !== 'undefined') && (typeof chia.routing !== 'undefined') && (typeof chia.routing.intercept_clicks !== 'undefined')){
} else {
chia.routing.intercept_clicks = cljs.core.memoize((function() {
var chia$routing$intercept = null;
var chia$routing$intercept__0 = (function (){
if(chia.routing.browser_QMARK_){
return chia$routing$intercept.cljs$core$IFn$_invoke$arity$1(document);
} else {
return null;
}
});
var chia$routing$intercept__1 = (function (element){
if(chia.routing.browser_QMARK_){
return element.addEventListener("click",chia.routing.root_click_listener);
} else {
return null;
}
});
chia$routing$intercept = function(element){
switch(arguments.length){
case 0:
return chia$routing$intercept__0.call(this);
case 1:
return chia$routing$intercept__1.call(this,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chia$routing$intercept.cljs$core$IFn$_invoke$arity$0 = chia$routing$intercept__0;
chia$routing$intercept.cljs$core$IFn$_invoke$arity$1 = chia$routing$intercept__1;
return chia$routing$intercept;
})()
);
}

if((typeof chia !== 'undefined') && (typeof chia.routing !== 'undefined') && (typeof chia.routing.listeners !== 'undefined')){
} else {
chia.routing.listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}

chia.routing.add_listener_BANG_ = (function chia$routing$add_listener_BANG_(f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chia.routing.listeners,cljs.core.conj,f);
});

chia.routing.unlisten = (function chia$routing$unlisten(f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chia.routing.listeners,cljs.core.disj,f);
});

chia.routing.fire_BANG_ = (function chia$routing$fire_BANG_(var_args){
var G__66815 = arguments.length;
switch (G__66815) {
case 0:
return chia.routing.fire_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chia.routing.fire_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.routing.fire_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return chia.routing.fire_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(chia.routing.listeners));
});

chia.routing.fire_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (listener_fns){
var route_state = (function (){var G__66834 = chia.routing.parse_path(chia.routing.get_route());
if(cljs.core.truth_(chia.routing._STAR_click_event_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66834,new cljs.core.Keyword(null,"click-event","click-event",800040319),chia.routing._STAR_click_event_STAR_);
} else {
return G__66834;
}
})();
var seq__66835 = cljs.core.seq(listener_fns);
var chunk__66836 = null;
var count__66837 = (0);
var i__66838 = (0);
while(true){
if((i__66838 < count__66837)){
var listener = chunk__66836.cljs$core$IIndexed$_nth$arity$2(null,i__66838);
(listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(route_state) : listener.call(null,route_state));


var G__66926 = seq__66835;
var G__66927 = chunk__66836;
var G__66928 = count__66837;
var G__66929 = (i__66838 + (1));
seq__66835 = G__66926;
chunk__66836 = G__66927;
count__66837 = G__66928;
i__66838 = G__66929;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66835);
if(temp__5720__auto__){
var seq__66835__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66835__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__66835__$1);
var G__66936 = cljs.core.chunk_rest(seq__66835__$1);
var G__66937 = c__4550__auto__;
var G__66938 = cljs.core.count(c__4550__auto__);
var G__66939 = (0);
seq__66835 = G__66936;
chunk__66836 = G__66937;
count__66837 = G__66938;
i__66838 = G__66939;
continue;
} else {
var listener = cljs.core.first(seq__66835__$1);
(listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(route_state) : listener.call(null,route_state));


var G__66940 = cljs.core.next(seq__66835__$1);
var G__66941 = null;
var G__66942 = (0);
var G__66943 = (0);
seq__66835 = G__66940;
chunk__66836 = G__66941;
count__66837 = G__66942;
i__66838 = G__66943;
continue;
}
} else {
return null;
}
}
break;
}
});

chia.routing.fire_BANG_.cljs$lang$maxFixedArity = 1;


if((typeof chia !== 'undefined') && (typeof chia.routing !== 'undefined') && (typeof chia.routing.start_BANG_ !== 'undefined')){
} else {
chia.routing.start_BANG_ = cljs.core.memoize((function (){
return chia.routing.history.addEventListener("navigate",(function (){
return chia.routing.fire_BANG_.cljs$core$IFn$_invoke$arity$0();
}));
}));
}

/**
 * Set up a listener on route changes. Options:
 * 
 *     intercept-clicks? (boolean, `true`): For `click` events on local links, prevent page reload & fire listener instead.
 *     fire-now? (boolean, `true`): executes listener immediately, with current parsed route.
 * 
 *     Returns a key which can be passed to `unlisten` to remove listener.
 */
chia.routing.listen = (function chia$routing$listen(var_args){
var G__66846 = arguments.length;
switch (G__66846) {
case 1:
return chia.routing.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chia.routing.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chia.routing.listen.cljs$core$IFn$_invoke$arity$1 = (function (listener){
return chia.routing.listen.cljs$core$IFn$_invoke$arity$2(listener,cljs.core.PersistentArrayMap.EMPTY);
});

chia.routing.listen.cljs$core$IFn$_invoke$arity$2 = (function (listener,p__66848){
var map__66850 = p__66848;
var map__66850__$1 = (((((!((map__66850 == null))))?(((((map__66850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66850):map__66850);
var fire_now_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66850__$1,new cljs.core.Keyword(null,"fire-now?","fire-now?",-41680930),true);
var intercept_clicks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66850__$1,new cljs.core.Keyword(null,"intercept-clicks?","intercept-clicks?",-117789730),true);
(chia.routing.start_BANG_.cljs$core$IFn$_invoke$arity$0 ? chia.routing.start_BANG_.cljs$core$IFn$_invoke$arity$0() : chia.routing.start_BANG_.call(null));

if(cljs.core.truth_(intercept_clicks_QMARK_)){
(chia.routing.intercept_clicks.cljs$core$IFn$_invoke$arity$0 ? chia.routing.intercept_clicks.cljs$core$IFn$_invoke$arity$0() : chia.routing.intercept_clicks.call(null));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chia.routing.listeners,cljs.core.conj,listener);

if(cljs.core.truth_(fire_now_QMARK_)){
chia.routing.fire_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([listener]));
} else {
}

return listener;
});

chia.routing.listen.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=chia.routing.js.map
