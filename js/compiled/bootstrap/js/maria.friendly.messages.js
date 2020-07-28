goog.provide('maria.friendly.messages');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.analyzer');
goog.require('maria.live.ns_utils');
/**
 * Recursively walk down the search `trie` matching `tokens` along `path`, returning the matching message template and match context.
 */
maria.friendly.messages.match_in_tokens = (function maria$friendly$messages$match_in_tokens(var_args){
var G__66631 = arguments.length;
switch (G__66631) {
case 2:
return maria.friendly.messages.match_in_tokens.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return maria.friendly.messages.match_in_tokens.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.friendly.messages.match_in_tokens.cljs$core$IFn$_invoke$arity$2 = (function (trie,tokens){
return maria.friendly.messages.match_in_tokens.cljs$core$IFn$_invoke$arity$3(trie,tokens,cljs.core.PersistentVector.EMPTY);
});

maria.friendly.messages.match_in_tokens.cljs$core$IFn$_invoke$arity$3 = (function (trie,p__66633,context){
var vec__66634 = p__66633;
var seq__66635 = cljs.core.seq(vec__66634);
var first__66636 = cljs.core.first(seq__66635);
var seq__66635__$1 = cljs.core.next(seq__66635);
var token = first__66636;
var remaining_tokens = seq__66635__$1;
var capture = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"%"),cljs.core.keys(trie)));
var temp__5718__auto__ = (function (){var or__4131__auto__ = (trie.cljs$core$IFn$_invoke$arity$1 ? trie.cljs$core$IFn$_invoke$arity$1(token) : trie.call(null,token));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (trie.cljs$core$IFn$_invoke$arity$1 ? trie.cljs$core$IFn$_invoke$arity$1(capture) : trie.call(null,capture));
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var trie_match = temp__5718__auto__;
var context__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = capture;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((trie.cljs$core$IFn$_invoke$arity$1 ? trie.cljs$core$IFn$_invoke$arity$1(token) : trie.call(null,token)));
} else {
return and__4120__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(context,token):context);
var next_match = maria.friendly.messages.match_in_tokens.cljs$core$IFn$_invoke$arity$3(trie_match,remaining_tokens,context__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(trie_match))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trie_match,new cljs.core.Keyword(null,"context","context",-830191113),context__$1);
} else {
return next_match;
}
} else {
return context;
}
});

maria.friendly.messages.match_in_tokens.cljs$lang$maxFixedArity = 3;

maria.friendly.messages.sanitize_js_error = (function maria$friendly$messages$sanitize_js_error(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"(...).call",""),".call",""),"cljs.core/",""),"shapes.core/",""),"maria.user/",""),"cljs.core.",""),"shapes.core.",""),"maria.user.","");
});
/**
 * Returns lowercase tokens from `s`, limited to the letters [a-z], numbers [0-9], full stop [.], dash [-] (including converted underscore [_]), and colon [:].
 */
maria.friendly.messages.tokenize = (function maria$friendly$messages$tokenize(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66642_SHARP_){
return clojure.string.replace(p1__66642_SHARP_,"_","-");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(maria.friendly.messages.sanitize_js_error(clojure.string.lower_case(s)),/[^a-z%0-9%\.%:%_]/))));
});
/**
 * Convert a sequence of pattern/output `templates` into a search trie.
 */
maria.friendly.messages.build_error_message_trie = (function maria$friendly$messages$build_error_message_trie(templates){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (trie,p__66646){
var vec__66647 = p__66646;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66647,(0),null);
var output = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66647,(1),null);
return cljs.core.assoc_in(trie,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(maria.friendly.messages.tokenize(pattern),new cljs.core.Keyword(null,"message","message",-406056002)),output);
}),cljs.core.PersistentArrayMap.EMPTY,templates);
});
/**
 * A search trie for matching error messages to templates.
 */
maria.friendly.messages.error_message_trie = maria.friendly.messages.build_error_message_trie(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f is null",["Expected a function but found `nil`.","\n\nAt some point I found `nil` where a function should be, such as in a higher-order function like `map` or `keep`. `nil` is not a valid function."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pred is null",["Expected a predicate function but found `nil`.","\n\nAt some point I found `nil` where a predicate function should be, like in a `filter` or `some`. Predicate functions cannot be `nil`."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% is null",["Expected a composable function but found `nil`.","\n\nAt some point I found `nil` where a function should be passed to a higher-order composition function, like a `comp` or `juxt`. It was found at position `%1`. `nil` is not a valid part of function composition."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["invalid arity: %",["%1 is the wrong number of arguments for this function.","\n\nSomething is being called like a function, but that function doesn't know how to handle %1 arguments. This is called an 'invalid arity' error, which can be caused by passing too few or too many arguments, or by putting something like a vector or set (which can be called like a function) in the function position without any arguments."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no item % in vector of length %",["Couldn't find element %1 in vector of length %2.","\n\nThis expression tries to access (probably with `nth`) a non-existent place in some vector. This is an 'index out of bounds' error."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Index out of bounds",["This expression tries to access a non-existent part of a sequence.","\n\nThis expression is looking for a non-existent place in some list. This is an 'index out of bounds' error."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nth not supported on this type % % % % % %",["You're treating a non-sequential value like a sequence.","\n\nIt seems like you're trying to iterate over a value that isn't sequential. This probably means you are treating a value (like a keyword) or a collection (like a map or set) as if it were a sequential value (like a vector, list, or String). This can happen by destructuring or by using `nth` on a non-sequence."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no protocol method icollection. % defined for type % %",["`%3` is not a collection, but you're treating it like one.","\n\n`%1` is trying to use the %2 `%3` as a collection, but `%3` can't be interpreted as a collection."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% is not iseqable",["The value `%1` can't be used as a sequence.","\n\nThis expression tries to use `%1` as a sequential value, but `%1` isn't sequential. That value doesn't implement the `ISeqable` protocol, which lets a value be interpreted as a sequence."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% is not a function","The value `%1` isn't a function, but it's being called like one."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new keyword % % % % % % % is not a function",["A keyword is being called as a function on %7 arguments.","\n\nKeywords can act as functions on a single collection (such as a map or set), but keywords-as-functions can't take %7 arguments."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not compile",["Compile error.","\n\nWe were unable to turn this expression into JavaScript. \uD83D\uDE30"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["illegal character %","This expression contains an illegal character. Often this is because a name contains an emoji, which is not allowed in JavaScript and therefore ClojureScript."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cannot read property call of %","It looks like you're trying to call a function that has not been defined yet. \uD83D\uDE40"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parameter declaration missing","This function is missing its 'parameter declaration', the vector of arguments that comes after its name or docstring."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["let requires an even number","`let` requires an even number of forms in its binding vector."], null)], null));
/**
 * Take an error `message` string and return a prettified version.
 */
maria.friendly.messages.prettify_error_message = (function maria$friendly$messages$prettify_error_message(message){
var match = maria.friendly.messages.match_in_tokens.cljs$core$IFn$_invoke$arity$2(maria.friendly.messages.error_message_trie,maria.friendly.messages.tokenize(message));
if(cljs.core.truth_((function (){var G__66654 = match;
if((G__66654 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__66654,new cljs.core.Keyword(null,"message","message",-406056002));
}
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (match){
return (function (message__$1,p__66655){
var vec__66657 = p__66655;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66657,(0),null);
var replacement = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66657,(1),null);
return clojure.string.replace(message__$1,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join(''),replacement);
});})(match))
,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(match)));
} else {
return message;
}
});
/**
 * Returns friendly variants of messages from `error` and its cause
 */
maria.friendly.messages.error_messages = (function maria$friendly$messages$error_messages(error){
if((error instanceof Error)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66671 = cljs.core.ex_message(cljs.core.ex_cause(error));
if((G__66671 == null)){
return null;
} else {
return maria.friendly.messages.prettify_error_message(G__66671);
}
})(),(function (){var G__66672 = cljs.core.ex_message(error);
if((G__66672 == null)){
return null;
} else {
return maria.friendly.messages.prettify_error_message(G__66672);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join('')], null);
}
});
/**
 * Return a string representation of the type indicated by the symbol `thing`.
 */
maria.friendly.messages.type_to_name = (function maria$friendly$messages$type_to_name(thing){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"string","string",-349010059,null),thing)){
return "a string";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"number","number",-1084057331,null),thing)){
return "a number";
} else {
if(clojure.string.includes_QMARK_(cljs.core.name(thing),"Vector")){
return "a vector";
} else {
if(clojure.string.includes_QMARK_(cljs.core.name(thing),"List")){
return "a list";
} else {
if(clojure.string.includes_QMARK_(cljs.core.name(thing),"Keyword")){
return "a keyword";
} else {
if(clojure.string.includes_QMARK_(cljs.core.name(thing),"PersistentArrayMap")){
return "a map";
} else {
return thing;

}
}
}
}
}
}
});
/**
 * Given a sequence of strings, collects them together into a comma separated list with grammatically correct use of `or`.
 */
maria.friendly.messages.humanize_sequence = (function maria$friendly$messages$humanize_sequence(sq){
var G__66678 = cljs.core.count(sq);
switch (G__66678) {
case (1):
return cljs.core.first(sq);

break;
case (2):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sq))," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(sq))].join('');

break;
default:
var chunks = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",sq);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.butlast(chunks))),"or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(chunks))].join('');

}
});
maria.friendly.messages.bad_types = (function maria$friendly$messages$bad_types(info){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(maria.friendly.messages.type_to_name,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Symbol(null,"number","number",-1084057331,null)),new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(info)));
});
/**
 * computes the next row using the prev-row current-element and the other seq
 */
maria.friendly.messages.compute_next_row = (function maria$friendly$messages$compute_next_row(prev_row,current_element,other_seq,pred){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (row,p__66681){
var vec__66682 = p__66681;
var diagonal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66682,(0),null);
var above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66682,(1),null);
var other_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66682,(2),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(row,(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(other_element,current_element) : pred.call(null,other_element,current_element)))?diagonal:((function (){var x__4222__auto__ = (function (){var x__4222__auto__ = diagonal;
var y__4223__auto__ = above;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4223__auto__ = cljs.core.peek(row);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() + (1))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(prev_row) + (1))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,prev_row,cljs.core.next(prev_row),other_seq));
});
/**
 * Levenshtein Distance - http://en.wikipedia.org/wiki/Levenshtein_distance
 *   In information theory and computer science, the Levenshtein distance is a metric for measuring the amount of difference between two sequences. This is a functional implementation of the levenshtein edit
 *   distance with as little mutability as possible.
 *   Still maintains the O(n*m) guarantee.
 */
maria.friendly.messages.levenshtein_distance = (function maria$friendly$messages$levenshtein_distance(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66839 = arguments.length;
var i__4731__auto___66840 = (0);
while(true){
if((i__4731__auto___66840 < len__4730__auto___66839)){
args__4736__auto__.push((arguments[i__4731__auto___66840]));

var G__66841 = (i__4731__auto___66840 + (1));
i__4731__auto___66840 = G__66841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return maria.friendly.messages.levenshtein_distance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

maria.friendly.messages.levenshtein_distance.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,p__66690){
var map__66692 = p__66690;
var map__66692__$1 = (((((!((map__66692 == null))))?(((((map__66692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66692):map__66692);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66692__$1,new cljs.core.Keyword(null,"predicate","predicate",-1742501860),cljs.core._EQ_);
return cljs.core.peek(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__66692,map__66692__$1,p){
return (function (prev_row,current_element){
return maria.friendly.messages.compute_next_row(prev_row,current_element,b,p);
});})(map__66692,map__66692__$1,p))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__66692,map__66692__$1,p){
return (function (p1__66686_SHARP_,p2__66685_SHARP_){
return cljs.core.identity(p2__66685_SHARP_);
});})(map__66692,map__66692__$1,p))
,cljs.core.cons(null,b),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),a));
});

maria.friendly.messages.levenshtein_distance.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
maria.friendly.messages.levenshtein_distance.cljs$lang$applyTo = (function (seq66687){
var G__66688 = cljs.core.first(seq66687);
var seq66687__$1 = cljs.core.next(seq66687);
var G__66689 = cljs.core.first(seq66687__$1);
var seq66687__$2 = cljs.core.next(seq66687__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66688,G__66689,seq66687__$2);
});

/**
 * Finds `n` (default 4) Maria-relevant Clojure vars (as Strings) named similarly to the given String `s`.
 */
maria.friendly.messages.similar_to_vars = (function maria$friendly$messages$similar_to_vars(var_args){
var G__66707 = arguments.length;
switch (G__66707) {
case 1:
return maria.friendly.messages.similar_to_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return maria.friendly.messages.similar_to_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maria.friendly.messages.similar_to_vars.cljs$core$IFn$_invoke$arity$1 = (function (s){
return maria.friendly.messages.similar_to_vars.cljs$core$IFn$_invoke$arity$2(s,(4));
});

maria.friendly.messages.similar_to_vars.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT__EQ_,(3)),cljs.core.first),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(maria.friendly.messages.levenshtein_distance,s),cljs.core.identity),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys((maria.live.ns_utils.core_publics.cljs$core$IFn$_invoke$arity$0 ? maria.live.ns_utils.core_publics.cljs$core$IFn$_invoke$arity$0() : maria.live.ns_utils.core_publics.call(null))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["if","def","quote","var","do","recur","throw",".","try"], null)], 0))))))));
});

maria.friendly.messages.similar_to_vars.cljs$lang$maxFixedArity = 2;

maria.friendly.messages.analyzer_messages = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044)],[(function (_type,info){
return ["Your implementation of protocol `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),"` has two versions of the method `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info)),"`. Consider deleting one."].join('');
}),(function (type,info){
return ["The function `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maria.friendly.messages.sanitize_js_error((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
}
})())),"` needs to be called with ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"argc","argc",-1452839519).cljs$core$IFn$_invoke$arity$1(info)))?"more":"a different number of")," arguments."].join('');
}),(function (_type,info){
return ["The function `",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info));
}
})()),"` is deprecated, meaning it is not intended to be used."].join('');
}),(function (type,p__66727){
var map__66728 = p__66727;
var map__66728__$1 = (((((!((map__66728 == null))))?(((((map__66728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66728):map__66728);
var missing_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66728__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var macro_present_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66728__$1,new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205));
if(cljs.core.truth_(macro_present_QMARK_)){
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing_name),"` is a macro, which can only be used in the first position of a list. A macro doesn't have a value on its own, so it doesn't make sense in this position."].join('');
} else {
var temp__5718__auto__ = ((((3) <= cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing_name))))?cljs.core.seq(maria.friendly.messages.similar_to_vars.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing_name))):null);
if(cljs.core.truth_(temp__5718__auto__)){
var proposed = temp__5718__auto__;
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing_name),"` hasn't been defined.","\n\nDid you mean `",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count(proposed) > (1)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("`, `",cljs.core.butlast(proposed))),"`, or `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(proposed)),"`"].join(''):cljs.core.first(proposed))),"? Or maybe the definition of `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing_name),"` has not yet been evaluated."].join('');
} else {
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing_name),"` hasn't been defined.\n\nPerhaps there is a misspelling, or this expression depends on a name that has not yet been evaluated?"].join('');
}
}
}),(function (_type,info){

return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),"` cannot be defined with arglist `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"defined","defined",-1805032318).cljs$core$IFn$_invoke$arity$1(info)),"` because it was declared with arglist `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(info)),"`.","\n\nEarlier, you declared `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),"` as a function with one arglist. This expression defines that function with an incompatible arglist, which is not allowed. Make the declaration match the definition."].join('');
}),(function (_type,info){
return ["You're not allowed to dynamically change the value of `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),"`, because it is a static var. Consider redefining it to be `^:dynamic`."].join('');
}),new cljs.core.Keyword("maria.friendly.messages","pass","maria.friendly.messages/pass",52119636),(function (type,info){
return ["The arithmetic operator `",cljs.core.name(new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(info)),"` can't be used on non-numbers, like ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maria.friendly.messages.humanize_sequence(maria.friendly.messages.bad_types(info))),"."].join('');
}),(function (_type,info){
return ["The protocol `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),"` is deprecated. That means you shouldn't use or implement it."].join('');
}),(function (type,info){
return ["Function `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),"` is not allowed to have multiple definitions for the same number of arguments.","\n\nFunctions which can alternately take more than one number of arguments must ensure that these argument lists (arglists) do not overlap. This is called 'overloading arities' and is not permitted because it is unclear which definition to use when receiving that number of arguments."].join('');
})]);
maria.friendly.messages.override_analyzer_messages_BANG_ = (function maria$friendly$messages$override_analyzer_messages_BANG_(){
var seq__66756 = cljs.core.seq(maria.friendly.messages.analyzer_messages);
var chunk__66757 = null;
var count__66758 = (0);
var i__66759 = (0);
while(true){
if((i__66759 < count__66758)){
var vec__66769 = chunk__66757.cljs$core$IIndexed$_nth$arity$2(null,i__66759);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66769,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66769,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("maria.friendly.messages","pass","maria.friendly.messages/pass",52119636),f)){
} else {
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,k,f);
}


var G__66869 = seq__66756;
var G__66870 = chunk__66757;
var G__66871 = count__66758;
var G__66872 = (i__66759 + (1));
seq__66756 = G__66869;
chunk__66757 = G__66870;
count__66758 = G__66871;
i__66759 = G__66872;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66756);
if(temp__5720__auto__){
var seq__66756__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66756__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__66756__$1);
var G__66879 = cljs.core.chunk_rest(seq__66756__$1);
var G__66880 = c__4550__auto__;
var G__66881 = cljs.core.count(c__4550__auto__);
var G__66882 = (0);
seq__66756 = G__66879;
chunk__66757 = G__66880;
count__66758 = G__66881;
i__66759 = G__66882;
continue;
} else {
var vec__66776 = cljs.core.first(seq__66756__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66776,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66776,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("maria.friendly.messages","pass","maria.friendly.messages/pass",52119636),f)){
} else {
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,k,f);
}


var G__66887 = cljs.core.next(seq__66756__$1);
var G__66888 = null;
var G__66889 = (0);
var G__66890 = (0);
seq__66756 = G__66887;
chunk__66757 = G__66888;
count__66758 = G__66889;
i__66759 = G__66890;
continue;
}
} else {
return null;
}
}
break;
}
});
maria.friendly.messages.ignored_warning_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),null], null), null);
maria.friendly.messages.reformat_warning = (function maria$friendly$messages$reformat_warning(warning){
if(cljs.core.truth_((function (){var G__66786 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(warning);
return (maria.friendly.messages.ignored_warning_types.cljs$core$IFn$_invoke$arity$1 ? maria.friendly.messages.ignored_warning_types.cljs$core$IFn$_invoke$arity$1(G__66786) : maria.friendly.messages.ignored_warning_types.call(null,G__66786));
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__66790 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(warning);
var G__66791 = new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(warning);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__66790,G__66791) : cljs.analyzer.error_message.call(null,G__66790,G__66791));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".o-50.i.mv2",".o-50.i.mv2",725518640),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(warning)),")"], null)], null);
}
});

//# sourceMappingURL=maria.friendly.messages.js.map
