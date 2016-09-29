// Compiled by ClojureScript 1.7.228 {}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('clojure.walk');
/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
if((s == null)){
return false;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,s),(0));
}
});
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.contains_QMARK_ = (function cuerdas$core$contains_QMARK_(s,subs){
if((s == null)){
return null;
} else {
return cljs.core.not_EQ_.call(null,s.indexOf(subs),(-1));
}
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var args11286 = [];
var len__7513__auto___11289 = arguments.length;
var i__7514__auto___11290 = (0);
while(true){
if((i__7514__auto___11290 < len__7513__auto___11289)){
args11286.push((arguments[i__7514__auto___11290]));

var G__11291 = (i__7514__auto___11290 + (1));
i__7514__auto___11290 = G__11291;
continue;
} else {
}
break;
}

var G__11288 = args11286.length;
switch (G__11288) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11286.length)].join('')));

}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if((s == null)){
return null;
} else {
return s.slice(begin);
}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if((s == null)){
return null;
} else {
return s.slice(begin,end);
}
});

cuerdas.core.slice.cljs$lang$maxFixedArity = 3;
/**
 * Build or derive regexp instance.
 */
cuerdas.core.regexp = (function cuerdas$core$regexp(var_args){
var args11293 = [];
var len__7513__auto___11296 = arguments.length;
var i__7514__auto___11297 = (0);
while(true){
if((i__7514__auto___11297 < len__7513__auto___11296)){
args11293.push((arguments[i__7514__auto___11297]));

var G__11298 = (i__7514__auto___11297 + (1));
i__7514__auto___11297 = G__11298;
continue;
} else {
}
break;
}

var G__11295 = args11293.length;
switch (G__11295) {
case 1:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11293.length)].join('')));

}
});

cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(cljs.core.regexp_QMARK_.call(null,s)){
return s;
} else {
return (new RegExp(s));
}
});

cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$2 = (function (s,flags){
if(cljs.core.regexp_QMARK_.call(null,s)){
return (new RegExp(s.source,flags));
} else {
return (new RegExp(s,flags));
}
});

cuerdas.core.regexp.cljs$lang$maxFixedArity = 2;
/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
if((s == null)){
return null;
} else {
return cljs.core._EQ_.call(null,s.lastIndexOf(prefix,(0)),(0));
}
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
if((s == null)){
return null;
} else {
var l = (cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix));
return ((l >= (0))) && (cljs.core._EQ_.call(null,s.indexOf(suffix,l),l));
}
});
cuerdas.core.startswith_QMARK_ = cuerdas.core.starts_with_QMARK_;
cuerdas.core.endswith_QMARK_ = cuerdas.core.ends_with_QMARK_;
/**
 * Converts string to all lower-case.
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if((s == null)){
return null;
} else {
return s.toLowerCase();
}
});
/**
 * Converts string to all upper-case.
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if((s == null)){
return null;
} else {
return s.toUpperCase();
}
});
/**
 * Checks if a string is empty or contains only whitespace.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
cuerdas.core.char_range_check = (function cuerdas$core$char_range_check(re){
return (function (s){
if((s == null)){
return false;
} else {
return cljs.core.re_matches.call(null,re,s);
}
});
});
/**
 * Checks if a string contains only alpha characters.
 */
cuerdas.core.alpha_QMARK_ = cuerdas.core.char_range_check.call(null,/^[a-zA-Z]+$/);
/**
 * Checks if a string contains only numeric characters.
 */
cuerdas.core.numeric_QMARK_ = cuerdas.core.char_range_check.call(null,/^[0-9]+$/);
/**
 * Checks if a string contains only alphanumeric characters.
 */
cuerdas.core.alpha_numeric_QMARK_ = cuerdas.core.char_range_check.call(null,/^[a-zA-Z0-9]+$/);
/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var args11300 = [];
var len__7513__auto___11303 = arguments.length;
var i__7514__auto___11304 = (0);
while(true){
if((i__7514__auto___11304 < len__7513__auto___11303)){
args11300.push((arguments[i__7514__auto___11304]));

var G__11305 = (i__7514__auto___11304 + (1));
i__7514__auto___11304 = G__11305;
continue;
} else {
}
break;
}

var G__11302 = args11300.length;
switch (G__11302) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11300.length)].join('')));

}
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.trim.call(null,s," ");
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rxstr__$1 = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+|"),cljs.core.str(rxstr),cljs.core.str("+$")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
var rx__$1 = cuerdas.core.replace.call(null,s,rx,"");
return rx__$1;
}
});

cuerdas.core.trim.cljs$lang$maxFixedArity = 2;
/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var args11307 = [];
var len__7513__auto___11310 = arguments.length;
var i__7514__auto___11311 = (0);
while(true){
if((i__7514__auto___11311 < len__7513__auto___11310)){
args11307.push((arguments[i__7514__auto___11311]));

var G__11312 = (i__7514__auto___11311 + (1));
i__7514__auto___11311 = G__11312;
continue;
} else {
}
break;
}

var G__11309 = args11307.length;
switch (G__11309) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11307.length)].join('')));

}
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.rtrim.call(null,s," ");
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rxstr__$1 = [cljs.core.str(rxstr),cljs.core.str("+$")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
var rx__$1 = cuerdas.core.replace.call(null,s,rx,"");
return rx__$1;
}
});

cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2;
/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var args11314 = [];
var len__7513__auto___11317 = arguments.length;
var i__7514__auto___11318 = (0);
while(true){
if((i__7514__auto___11318 < len__7513__auto___11317)){
args11314.push((arguments[i__7514__auto___11318]));

var G__11319 = (i__7514__auto___11318 + (1));
i__7514__auto___11318 = G__11319;
continue;
} else {
}
break;
}

var G__11316 = args11314.length;
switch (G__11316) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11314.length)].join('')));

}
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.ltrim.call(null,s," ");
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rxstr__$1 = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
var rx__$1 = cuerdas.core.replace.call(null,s,rx,"");
return rx__$1;
}
});

cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2;
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,s,prefix))){
return cuerdas.core.slice.call(null,s,cljs.core.count.call(null,prefix),cljs.core.count.call(null,s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,prefix){
if(cljs.core.truth_(cuerdas.core.ends_with_QMARK_.call(null,s,prefix))){
return cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,prefix)));
} else {
return s;
}
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var args11321 = [];
var len__7513__auto___11324 = arguments.length;
var i__7514__auto___11325 = (0);
while(true){
if((i__7514__auto___11325 < len__7513__auto___11324)){
args11321.push((arguments[i__7514__auto___11325]));

var G__11326 = (i__7514__auto___11325 + (1));
i__7514__auto___11325 = G__11326;
continue;
} else {
}
break;
}

var G__11323 = args11321.length;
switch (G__11323) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11321.length)].join('')));

}
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.call(null,s,(1));
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if((s == null)){
return null;
} else {
return goog.string.repeat(s,n);
}
});

cuerdas.core.repeat.cljs$lang$maxFixedArity = 2;
/**
 * Escapes characters in the string that are not safe
 * to use in a RegExp.
 */
cuerdas.core.escape_regexp = (function cuerdas$core$escape_regexp(s){
return goog.string.regExpEscape(s);
});
/**
 * Replaces all instance of match with replacement in s.
 *   The replacement is literal (i.e. none of its characters are treated
 *   specially) for all cases above except pattern / string.
 *   In match is pattern instance, replacement can contain $1, $2, etc.
 *   will be substituted with string that matcher the corresponding
 *   parenthesized group in pattern.
 *   If you wish your replacement string to be used literary,
 *   use `(escape-regexp replacement)`.
 *   Example:
 *  (replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 *  ;; => "lmostAay igPay atinLay"
 *   
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"g"),replacement);
}
});
/**
 * Replaces all instance of match with replacement in s.
 */
cuerdas.core.ireplace = (function cuerdas$core$ireplace(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"ig"),replacement);
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match),replacement);
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.ireplace_first = (function cuerdas$core$ireplace_first(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"i"),replacement);
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var args11328 = [];
var len__7513__auto___11331 = arguments.length;
var i__7514__auto___11332 = (0);
while(true){
if((i__7514__auto___11332 < len__7513__auto___11331)){
args11328.push((arguments[i__7514__auto___11332]));

var G__11333 = (i__7514__auto___11332 + (1));
i__7514__auto___11332 = G__11333;
continue;
} else {
}
break;
}

var G__11330 = args11328.length;
switch (G__11330) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11328.length)].join('')));

}
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.call(null,s,num,"...");
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count.call(null,s) <= num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.call(null,cuerdas.core.upper.call(null,c),cuerdas.core.lower.call(null,c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace.call(null,cuerdas.core.slice.call(null,s,(0),(num + (1))),/.(?=\W*\w*$)/,tmpl);
var tmp = cuerdas.core.slice.call(null,template,(cljs.core.count.call(null,template) - (2)));
var template__$1 = (cljs.core.truth_(tmp.match(/\w\w/))?cuerdas.core.replace_first.call(null,template,/\s*\S+$/,""):cuerdas.core.rtrim.call(null,cuerdas.core.slice.call(null,template,(0),(cljs.core.count.call(null,template) - (1)))));
if((cljs.core.count.call(null,[cljs.core.str(template__$1),cljs.core.str(subs)].join('')) > cljs.core.count.call(null,s))){
return s;
} else {
return [cljs.core.str(cuerdas.core.slice.call(null,s,(0),cljs.core.count.call(null,template__$1))),cljs.core.str(subs)].join('');
}
}
});

cuerdas.core.prune.cljs$lang$maxFixedArity = 3;
/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace.call(null,s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string
 *   or Pattern (clj) / RegExp (cljs) instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var args11335 = [];
var len__7513__auto___11338 = arguments.length;
var i__7514__auto___11339 = (0);
while(true){
if((i__7514__auto___11339 < len__7513__auto___11338)){
args11335.push((arguments[i__7514__auto___11339]));

var G__11340 = (i__7514__auto___11339 + (1));
i__7514__auto___11339 = G__11340;
continue;
} else {
}
break;
}

var G__11337 = args11335.length;
switch (G__11337) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11335.length)].join('')));

}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.call(null,s,/\s/,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
return cuerdas.core.split.call(null,s,sep,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cljs.core.regexp_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,sep,num);
} else {
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,sep),num);

}
}
});

cuerdas.core.split.cljs$lang$maxFixedArity = 3;
/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if((s == null)){
return null;
} else {
return s.split("").reverse().join("");
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if((s == null)){
return null;
} else {
return cljs.core.js__GT_clj.call(null,s.split(""));
}
});
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.call(null,s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if((s == null)){
return s;
} else {
return clojure.string.join.call(null,"\n",s);
}
});
/**
 * Returns a vector of the words in the string.
 */
cuerdas.core.words = (function cuerdas$core$words(var_args){
var args11342 = [];
var len__7513__auto___11345 = arguments.length;
var i__7514__auto___11346 = (0);
while(true){
if((i__7514__auto___11346 < len__7513__auto___11345)){
args11342.push((arguments[i__7514__auto___11346]));

var G__11347 = (i__7514__auto___11346 + (1));
i__7514__auto___11346 = G__11347;
continue;
} else {
}
break;
}

var G__11344 = args11342.length;
switch (G__11344) {
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11342.length)].join('')));

}
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$2 = (function (s,word_re){
if((s == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.vec.call(null,cljs.core.re_seq.call(null,word_re,s));
}
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.words.call(null,s,/[a-zA-Z0-9_-]+/);
});

cuerdas.core.words.cljs$lang$maxFixedArity = 2;
cuerdas.core.interpolate_format = (function cuerdas$core$interpolate_format(s,params){
var on_match = (function cuerdas$core$interpolate_format_$_on_match(match){
var val = cljs.reader.read_string.call(null,((cljs.core._EQ_.call(null,cljs.core.subs.call(null,match,(0),(1)),"$"))?cljs.core.subs.call(null,match,(1)):cuerdas.core.slice.call(null,match,(2),(-2))));
var val__$1 = (((val instanceof cljs.core.Symbol))?cljs.core.keyword.call(null,val):val);
return [cljs.core.str(cljs.core.get.call(null,params,val__$1,""))].join('');
});
var $ = /(?:%\([\d\w\:\_\-]+\)s|\$[\w\d\:\_\-]+)/;
var $__$1 = cuerdas.core.replace.call(null,s,$,on_match);
return $__$1;
});
cuerdas.core.indexed_format = (function cuerdas$core$indexed_format(s,params){
var params__$1 = cljs.core.clj__GT_js.call(null,(function (){var or__6455__auto__ = params;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return cuerdas.core.replace.call(null,s,cuerdas.core.regexp.call(null,"%s","g"),((function (params__$1){
return (function (_){
return [cljs.core.str((((cljs.core.count.call(null,params__$1) === (0)))?"%s":params__$1.shift()))].join('');
});})(params__$1))
);
});
/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__7520__auto__ = [];
var len__7513__auto___11351 = arguments.length;
var i__7514__auto___11352 = (0);
while(true){
if((i__7514__auto___11352 < len__7513__auto___11351)){
args__7520__auto__.push((arguments[i__7514__auto___11352]));

var G__11353 = (i__7514__auto___11352 + (1));
i__7514__auto___11352 = G__11353;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,more){
if(typeof s === 'string'){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,more),(1))) && (cljs.core.associative_QMARK_.call(null,cljs.core.first.call(null,more)))){
return cuerdas.core.interpolate_format.call(null,s,cljs.core.first.call(null,more));
} else {
return cuerdas.core.indexed_format.call(null,s,more);
}
} else {
return null;
}
});

cuerdas.core.format.cljs$lang$maxFixedArity = (1);

cuerdas.core.format.cljs$lang$applyTo = (function (seq11349){
var G__11350 = cljs.core.first.call(null,seq11349);
var seq11349__$1 = cljs.core.next.call(null,seq11349);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(G__11350,seq11349__$1);
});
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var args11354 = [];
var len__7513__auto___11357 = arguments.length;
var i__7514__auto___11358 = (0);
while(true){
if((i__7514__auto___11358 < len__7513__auto___11357)){
args11354.push((arguments[i__7514__auto___11358]));

var G__11359 = (i__7514__auto___11358 + (1));
i__7514__auto___11358 = G__11359;
continue;
} else {
}
break;
}

var G__11356 = args11354.length;
switch (G__11356) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11354.length)].join('')));

}
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});

cuerdas.core.join.cljs$lang$maxFixedArity = 2;
/**
 * Surround a string with another string.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if((s == null)){
return null;
} else {
return cuerdas.core.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
}
});
/**
 * Unsurround a string surrounded by another.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var length = cljs.core.count.call(null,surrounding);
var fstr = cuerdas.core.slice.call(null,s,(0),length);
var slength = cljs.core.count.call(null,s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.call(null,s,rightend,slength);
if((cljs.core._EQ_.call(null,fstr,surrounding)) && (cljs.core._EQ_.call(null,lstr,surrounding))){
return cuerdas.core.slice.call(null,s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var args11361 = [];
var len__7513__auto___11364 = arguments.length;
var i__7514__auto___11365 = (0);
while(true){
if((i__7514__auto___11365 < len__7513__auto___11364)){
args11361.push((arguments[i__7514__auto___11365]));

var G__11366 = (i__7514__auto___11365 + (1));
i__7514__auto___11365 = G__11366;
continue;
} else {
}
break;
}

var G__11363 = args11361.length;
switch (G__11363) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11361.length)].join('')));

}
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround.call(null,s,"\"");
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround.call(null,s,qchar);
});

cuerdas.core.quote.cljs$lang$maxFixedArity = 2;
/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var args11368 = [];
var len__7513__auto___11371 = arguments.length;
var i__7514__auto___11372 = (0);
while(true){
if((i__7514__auto___11372 < len__7513__auto___11371)){
args11368.push((arguments[i__7514__auto___11372]));

var G__11373 = (i__7514__auto___11372 + (1));
i__7514__auto___11372 = G__11373;
continue;
} else {
}
break;
}

var G__11370 = args11368.length;
switch (G__11370) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11368.length)].join('')));

}
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround.call(null,s,"\"");
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround.call(null,s,qchar);
});

cuerdas.core.unquote.cljs$lang$maxFixedArity = 2;
/**
 * Converts a underscored or camelized string
 *   into an dasherized one.
 */
cuerdas.core.dasherize = (function cuerdas$core$dasherize(s){
var G__11376 = s;
var G__11376__$1 = (((G__11376 == null))?null:cuerdas.core.trim.call(null,G__11376));
var G__11376__$2 = (((G__11376__$1 == null))?null:cuerdas.core.replace.call(null,G__11376__$1,/([A-Z]+)/,"-$1"));
var G__11376__$3 = (((G__11376__$2 == null))?null:cuerdas.core.replace.call(null,G__11376__$2,/[-_\s]+/,"-"));
var G__11376__$4 = (((G__11376__$3 == null))?null:cuerdas.core.strip_prefix.call(null,G__11376__$3,"-"));
var G__11376__$5 = (((G__11376__$4 == null))?null:cuerdas.core.lower.call(null,G__11376__$4));
return G__11376__$5;
});
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slugify = (function cuerdas$core$slugify(s){
if(cljs.core.truth_(s)){
var from = "\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E";
var to = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";
var regex = cljs.core.re_pattern.call(null,[cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,from)),cljs.core.str("]")].join(''));
return cuerdas.core.dasherize.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.lower.call(null,s),regex,((function (from,to,regex){
return (function (c){
var index = from.indexOf(c);
var res = to.charAt(index);
if(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,res))){
return "-";
} else {
return res;
}
});})(from,to,regex))
),/[^\w\s-]/,""));
} else {
return null;
}
});
/**
 * Converts first letter of the string to uppercase.
 */
cuerdas.core.capitalize = (function cuerdas$core$capitalize(s){
if((s == null)){
return null;
} else {
return [cljs.core.str(cuerdas.core.upper.call(null,s.charAt((0)))),cljs.core.str(cuerdas.core.slice.call(null,s,(1)))].join('');
}
});
/**
 * Converts a string from selector-case to camelCase.
 */
cuerdas.core.camelize = (function cuerdas$core$camelize(s){
var G__11380 = s;
var G__11380__$1 = (((G__11380 == null))?null:cuerdas.core.trim.call(null,G__11380));
var G__11380__$2 = (((G__11380__$1 == null))?null:cuerdas.core.replace.call(null,G__11380__$1,cuerdas.core.regexp.call(null,/[-_\s]+(.)?/,"g"),((function (G__11380,G__11380__$1){
return (function (p__11381){
var vec__11382 = p__11381;
var match = cljs.core.nth.call(null,vec__11382,(0),null);
var c = cljs.core.nth.call(null,vec__11382,(1),null);
if(cljs.core.truth_(c)){
return cuerdas.core.upper.call(null,c);
} else {
return "";
}
});})(G__11380,G__11380__$1))
));
return G__11380__$2;
});
/**
 * Converts a camelized or dasherized string
 *   into an underscored one.
 */
cuerdas.core.underscored = (function cuerdas$core$underscored(s){
var G__11384 = s;
var G__11384__$1 = (((G__11384 == null))?null:cuerdas.core.trim.call(null,G__11384));
var G__11384__$2 = (((G__11384__$1 == null))?null:cuerdas.core.replace.call(null,G__11384__$1,cuerdas.core.regexp.call(null,/([a-z\d])([A-Z]+)/,"g"),"$1_$2"));
var G__11384__$3 = (((G__11384__$2 == null))?null:cuerdas.core.replace.call(null,G__11384__$2,cuerdas.core.regexp.call(null,/[-\s]+/,"g"),"_"));
var G__11384__$4 = (((G__11384__$3 == null))?null:cuerdas.core.lower.call(null,G__11384__$3));
return G__11384__$4;
});
/**
 * Converts an underscored, camelized, or
 *   dasherized string into a humanized one.
 */
cuerdas.core.humanize = (function cuerdas$core$humanize(s){
var G__11386 = s;
var G__11386__$1 = (((G__11386 == null))?null:cuerdas.core.underscored.call(null,G__11386));
var G__11386__$2 = (((G__11386__$1 == null))?null:cuerdas.core.replace.call(null,G__11386__$1,/_id$/,""));
var G__11386__$3 = (((G__11386__$2 == null))?null:cuerdas.core.replace.call(null,G__11386__$2,cuerdas.core.regexp.call(null,"_","g")," "));
var G__11386__$4 = (((G__11386__$3 == null))?null:cuerdas.core.capitalize.call(null,G__11386__$3));
return G__11386__$4;
});
/**
 * Converts a string into TitleCase.
 */
cuerdas.core.titleize = (function cuerdas$core$titleize(var_args){
var args11387 = [];
var len__7513__auto___11390 = arguments.length;
var i__7514__auto___11391 = (0);
while(true){
if((i__7514__auto___11391 < len__7513__auto___11390)){
args11387.push((arguments[i__7514__auto___11391]));

var G__11392 = (i__7514__auto___11391 + (1));
i__7514__auto___11391 = G__11392;
continue;
} else {
}
break;
}

var G__11389 = args11387.length;
switch (G__11389) {
case 1:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11387.length)].join('')));

}
});

cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$1 = (function (s){
if((s == null)){
return null;
} else {
return goog.string.toTitleCase(s);
}
});

cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$2 = (function (s,delimeters){
return goog.string.toTitleCase(s,delimeters);
});

cuerdas.core.titleize.cljs$lang$maxFixedArity = 2;
/**
 * Converts string to camelized class name. First letter is always upper case.
 */
cuerdas.core.classify = (function cuerdas$core$classify(s){
var G__11395 = s;
var G__11395__$1 = (((G__11395 == null))?null:[cljs.core.str(G__11395)].join(''));
var G__11395__$2 = (((G__11395__$1 == null))?null:cuerdas.core.replace.call(null,G__11395__$1,/[\W_]/," "));
var G__11395__$3 = (((G__11395__$2 == null))?null:cuerdas.core.camelize.call(null,G__11395__$2));
var G__11395__$4 = (((G__11395__$3 == null))?null:cuerdas.core.replace.call(null,G__11395__$3,/\s/,""));
var G__11395__$5 = (((G__11395__$4 == null))?null:cuerdas.core.capitalize.call(null,G__11395__$4));
return G__11395__$5;
});
cuerdas.core.parse_number_impl = (function cuerdas$core$parse_number_impl(source){
var or__6455__auto__ = (source * (1));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
});
/**
 * General purpose function for parse number like
 *   string to number. It works with both integers
 *   and floats.
 */
cuerdas.core.parse_number = (function cuerdas$core$parse_number(var_args){
var args11396 = [];
var len__7513__auto___11399 = arguments.length;
var i__7514__auto___11400 = (0);
while(true){
if((i__7514__auto___11400 < len__7513__auto___11399)){
args11396.push((arguments[i__7514__auto___11400]));

var G__11401 = (i__7514__auto___11400 + (1));
i__7514__auto___11400 = G__11401;
continue;
} else {
}
break;
}

var G__11398 = args11396.length;
switch (G__11398) {
case 1:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11396.length)].join('')));

}
});

cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.parse_number.call(null,s,(0));
});

cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$2 = (function (s,precision){
if((s == null)){
return (0);
} else {
var s__$1 = cuerdas.core.trim.call(null,s);
var rx = /^-?\d+(?:\.\d+)?$/;
if(cljs.core.truth_(s__$1.match(rx))){
return cuerdas.core.parse_number_impl.call(null,cuerdas.core.parse_number_impl.call(null,s__$1).toFixed(precision));
} else {
return NaN;
}
}
});

cuerdas.core.parse_number.cljs$lang$maxFixedArity = 2;
/**
 * Return the float value, wraps parseFloat.
 */
cuerdas.core.parse_float = (function cuerdas$core$parse_float(var_args){
var args11403 = [];
var len__7513__auto___11406 = arguments.length;
var i__7514__auto___11407 = (0);
while(true){
if((i__7514__auto___11407 < len__7513__auto___11406)){
args11403.push((arguments[i__7514__auto___11407]));

var G__11408 = (i__7514__auto___11407 + (1));
i__7514__auto___11407 = G__11408;
continue;
} else {
}
break;
}

var G__11405 = args11403.length;
switch (G__11405) {
case 1:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11403.length)].join('')));

}
});

cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$1 = (function (s){
return parseFloat(s);
});

cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$2 = (function (s,precision){
if((precision == null)){
return parseFloat(s);
} else {
return parseFloat(parseFloat(s).toFixed(precision));
}
});

cuerdas.core.parse_float.cljs$lang$maxFixedArity = 2;
/**
 * Return the number value in integer form.
 */
cuerdas.core.parse_int = (function cuerdas$core$parse_int(s){
var rx = cuerdas.core.regexp.call(null,"^\\s*-?0x","i");
if(cljs.core.truth_(rx.test(s))){
return parseInt(s,(16));
} else {
return parseInt(s,(10));
}
});
/**
 * Returns true if s can be found in coll.
 */
cuerdas.core.one_of_QMARK_ = (function cuerdas$core$one_of_QMARK_(coll,s){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__11410_SHARP_){
return cljs.core._EQ_.call(null,p1__11410_SHARP_,s);
}),coll));
});
/**
 * Returns true for 1/on/true/yes string values (case-insensitive),
 *   false otherwise.
 */
cuerdas.core.to_bool = (function cuerdas$core$to_bool(s){
return cuerdas.core.one_of_QMARK_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","on","true","yes"], null),cuerdas.core.lower.call(null,s));
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var args__7520__auto__ = [];
var len__7513__auto___11420 = arguments.length;
var i__7514__auto___11421 = (0);
while(true){
if((i__7514__auto___11421 < len__7513__auto___11420)){
args__7520__auto__.push((arguments[i__7514__auto___11421]));

var G__11422 = (i__7514__auto___11421 + (1));
i__7514__auto___11421 = G__11422;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__11413){
var vec__11414 = p__11413;
var map__11415 = cljs.core.nth.call(null,vec__11414,(0),null);
var map__11415__$1 = ((((!((map__11415 == null)))?((((map__11415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11415):map__11415);
var length = cljs.core.get.call(null,map__11415__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));
var padding = cljs.core.get.call(null,map__11415__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");
var type = cljs.core.get.call(null,map__11415__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));
if((s == null)){
return null;
} else {
var padding__$1 = cuerdas.core.slice.call(null,padding,(0),(1));
var padlen = (length - cljs.core.count.call(null,s));
var pred__11417 = cljs.core._EQ_;
var expr__11418 = type;
if(cljs.core.truth_(pred__11417.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__11418))){
return [cljs.core.str(s),cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_(pred__11417.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__11418))){
var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen / (2))));
var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen / (2))));
return [cljs.core.str(first),cljs.core.str(s),cljs.core.str(second)].join('');
} else {
if(cljs.core.truth_(pred__11417.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__11418))){
return [cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen)),cljs.core.str(s)].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11418)].join('')));
}
}
}
}
});

cuerdas.core.pad.cljs$lang$maxFixedArity = (1);

cuerdas.core.pad.cljs$lang$applyTo = (function (seq11411){
var G__11412 = cljs.core.first.call(null,seq11411);
var seq11411__$1 = cljs.core.next.call(null,seq11411);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic(G__11412,seq11411__$1);
});
/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__11424 = s;
var G__11424__$1 = (((G__11424 == null))?null:cuerdas.core.replace.call(null,G__11424,/[\s\xa0]+/," "));
var G__11424__$2 = (((G__11424__$1 == null))?null:cuerdas.core.replace.call(null,G__11424__$1,/^\s+|\s+$/,""));
return G__11424__$2;
});
cuerdas.core.html_escape_chars = new cljs.core.PersistentArrayMap(null, 5, ["lt","<","gt",">","quot","\"","amp","&","apos","'"], null);
cuerdas.core.reversed_html_escape_chars = clojure.set.map_invert.call(null,cuerdas.core.html_escape_chars);
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

var escapechars = cljs.core.assoc.call(null,cuerdas.core.reversed_html_escape_chars,"'","#39");
var rx = cljs.core.re_pattern.call(null,"[&<>\"']");
return cuerdas.core.replace.call(null,s,rx,((function (escapechars,rx){
return (function (x){
return [cljs.core.str("&"),cljs.core.str(cljs.core.get.call(null,escapechars,x)),cljs.core.str(";")].join('');
});})(escapechars,rx))
);
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
return cuerdas.core.replace.call(null,s,/\&(\w+);/,(function (x,y){
if(cljs.core.contains_QMARK_.call(null,cuerdas.core.html_escape_chars,y)){
return cljs.core.get.call(null,cuerdas.core.html_escape_chars,y);
} else {
return y;

}
}));
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.call(null,cljs.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.fromArray([kwdize.call(null,tags)],true):((cljs.core.sequential_QMARK_.call(null,tags))?cljs.core.set.call(null,cljs.core.map.call(null,kwdize,tags)):null)));
var rx = cljs.core.re_pattern.call(null,"<\\/?([^<>]*)>");
var replacer = (((tags__$1 == null))?((function (kwdize,tags__$1,rx){
return (function (match,tag){
var tag__$1 = kwdize.call(null,tag);
return cljs.core.get.call(null,mappings,tag__$1,"");
});})(kwdize,tags__$1,rx))
:((function (kwdize,tags__$1,rx){
return (function (match,tag){
var tag__$1 = kwdize.call(null,tag);
if(cljs.core.truth_(tags__$1.call(null,tag__$1))){
return cljs.core.get.call(null,mappings,tag__$1,"");
} else {
return match;
}
});})(kwdize,tags__$1,rx))
);
return cuerdas.core.replace.call(null,s,rx,replacer);
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var args11425 = [];
var len__7513__auto___11428 = arguments.length;
var i__7514__auto___11429 = (0);
while(true){
if((i__7514__auto___11429 < len__7513__auto___11428)){
args11425.push((arguments[i__7514__auto___11429]));

var G__11430 = (i__7514__auto___11429 + (1));
i__7514__auto___11429 = G__11430;
continue;
} else {
}
break;
}

var G__11427 = args11425.length;
switch (G__11427) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11425.length)].join('')));

}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl.call(null,s,null,cljs.core.PersistentArrayMap.EMPTY);
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_.call(null,tags)){
return cuerdas.core.strip_tags_impl.call(null,s,null,tags);
} else {
return cuerdas.core.strip_tags_impl.call(null,s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl.call(null,s,tags,mapping);
});

cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3;
/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
return cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),/\s+/," ");
});
/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if((s == null)){
return null;
} else {
if((prefix == null)){
return null;
} else {
if((suffix == null)){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,s,prefix))){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,s,suffix))){
return null;
} else {
var G__11433 = s;
var G__11433__$1 = (((G__11433 == null))?null:cuerdas.core.split.call(null,G__11433,prefix));
var G__11433__$2 = (((G__11433__$1 == null))?null:cljs.core.second.call(null,G__11433__$1));
var G__11433__$3 = (((G__11433__$2 == null))?null:cuerdas.core.split.call(null,G__11433__$2,suffix));
var G__11433__$4 = (((G__11433__$3 == null))?null:cljs.core.first.call(null,G__11433__$3));
return G__11433__$4;

}
}
}
}
}
});

//# sourceMappingURL=core.js.map