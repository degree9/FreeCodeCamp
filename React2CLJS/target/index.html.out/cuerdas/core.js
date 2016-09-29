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
var args11292 = [];
var len__7513__auto___11295 = arguments.length;
var i__7514__auto___11296 = (0);
while(true){
if((i__7514__auto___11296 < len__7513__auto___11295)){
args11292.push((arguments[i__7514__auto___11296]));

var G__11297 = (i__7514__auto___11296 + (1));
i__7514__auto___11296 = G__11297;
continue;
} else {
}
break;
}

var G__11294 = args11292.length;
switch (G__11294) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11292.length)].join('')));

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
var args11299 = [];
var len__7513__auto___11302 = arguments.length;
var i__7514__auto___11303 = (0);
while(true){
if((i__7514__auto___11303 < len__7513__auto___11302)){
args11299.push((arguments[i__7514__auto___11303]));

var G__11304 = (i__7514__auto___11303 + (1));
i__7514__auto___11303 = G__11304;
continue;
} else {
}
break;
}

var G__11301 = args11299.length;
switch (G__11301) {
case 1:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11299.length)].join('')));

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
var args11306 = [];
var len__7513__auto___11309 = arguments.length;
var i__7514__auto___11310 = (0);
while(true){
if((i__7514__auto___11310 < len__7513__auto___11309)){
args11306.push((arguments[i__7514__auto___11310]));

var G__11311 = (i__7514__auto___11310 + (1));
i__7514__auto___11310 = G__11311;
continue;
} else {
}
break;
}

var G__11308 = args11306.length;
switch (G__11308) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11306.length)].join('')));

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
var args11313 = [];
var len__7513__auto___11316 = arguments.length;
var i__7514__auto___11317 = (0);
while(true){
if((i__7514__auto___11317 < len__7513__auto___11316)){
args11313.push((arguments[i__7514__auto___11317]));

var G__11318 = (i__7514__auto___11317 + (1));
i__7514__auto___11317 = G__11318;
continue;
} else {
}
break;
}

var G__11315 = args11313.length;
switch (G__11315) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11313.length)].join('')));

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
var args11320 = [];
var len__7513__auto___11323 = arguments.length;
var i__7514__auto___11324 = (0);
while(true){
if((i__7514__auto___11324 < len__7513__auto___11323)){
args11320.push((arguments[i__7514__auto___11324]));

var G__11325 = (i__7514__auto___11324 + (1));
i__7514__auto___11324 = G__11325;
continue;
} else {
}
break;
}

var G__11322 = args11320.length;
switch (G__11322) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11320.length)].join('')));

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
var args11327 = [];
var len__7513__auto___11330 = arguments.length;
var i__7514__auto___11331 = (0);
while(true){
if((i__7514__auto___11331 < len__7513__auto___11330)){
args11327.push((arguments[i__7514__auto___11331]));

var G__11332 = (i__7514__auto___11331 + (1));
i__7514__auto___11331 = G__11332;
continue;
} else {
}
break;
}

var G__11329 = args11327.length;
switch (G__11329) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11327.length)].join('')));

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
var args11334 = [];
var len__7513__auto___11337 = arguments.length;
var i__7514__auto___11338 = (0);
while(true){
if((i__7514__auto___11338 < len__7513__auto___11337)){
args11334.push((arguments[i__7514__auto___11338]));

var G__11339 = (i__7514__auto___11338 + (1));
i__7514__auto___11338 = G__11339;
continue;
} else {
}
break;
}

var G__11336 = args11334.length;
switch (G__11336) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11334.length)].join('')));

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
var args11341 = [];
var len__7513__auto___11344 = arguments.length;
var i__7514__auto___11345 = (0);
while(true){
if((i__7514__auto___11345 < len__7513__auto___11344)){
args11341.push((arguments[i__7514__auto___11345]));

var G__11346 = (i__7514__auto___11345 + (1));
i__7514__auto___11345 = G__11346;
continue;
} else {
}
break;
}

var G__11343 = args11341.length;
switch (G__11343) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11341.length)].join('')));

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
var args11348 = [];
var len__7513__auto___11351 = arguments.length;
var i__7514__auto___11352 = (0);
while(true){
if((i__7514__auto___11352 < len__7513__auto___11351)){
args11348.push((arguments[i__7514__auto___11352]));

var G__11353 = (i__7514__auto___11352 + (1));
i__7514__auto___11352 = G__11353;
continue;
} else {
}
break;
}

var G__11350 = args11348.length;
switch (G__11350) {
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11348.length)].join('')));

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
var len__7513__auto___11357 = arguments.length;
var i__7514__auto___11358 = (0);
while(true){
if((i__7514__auto___11358 < len__7513__auto___11357)){
args__7520__auto__.push((arguments[i__7514__auto___11358]));

var G__11359 = (i__7514__auto___11358 + (1));
i__7514__auto___11358 = G__11359;
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

cuerdas.core.format.cljs$lang$applyTo = (function (seq11355){
var G__11356 = cljs.core.first.call(null,seq11355);
var seq11355__$1 = cljs.core.next.call(null,seq11355);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(G__11356,seq11355__$1);
});
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var args11360 = [];
var len__7513__auto___11363 = arguments.length;
var i__7514__auto___11364 = (0);
while(true){
if((i__7514__auto___11364 < len__7513__auto___11363)){
args11360.push((arguments[i__7514__auto___11364]));

var G__11365 = (i__7514__auto___11364 + (1));
i__7514__auto___11364 = G__11365;
continue;
} else {
}
break;
}

var G__11362 = args11360.length;
switch (G__11362) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11360.length)].join('')));

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
var args11367 = [];
var len__7513__auto___11370 = arguments.length;
var i__7514__auto___11371 = (0);
while(true){
if((i__7514__auto___11371 < len__7513__auto___11370)){
args11367.push((arguments[i__7514__auto___11371]));

var G__11372 = (i__7514__auto___11371 + (1));
i__7514__auto___11371 = G__11372;
continue;
} else {
}
break;
}

var G__11369 = args11367.length;
switch (G__11369) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11367.length)].join('')));

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
var args11374 = [];
var len__7513__auto___11377 = arguments.length;
var i__7514__auto___11378 = (0);
while(true){
if((i__7514__auto___11378 < len__7513__auto___11377)){
args11374.push((arguments[i__7514__auto___11378]));

var G__11379 = (i__7514__auto___11378 + (1));
i__7514__auto___11378 = G__11379;
continue;
} else {
}
break;
}

var G__11376 = args11374.length;
switch (G__11376) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11374.length)].join('')));

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
var G__11382 = s;
var G__11382__$1 = (((G__11382 == null))?null:cuerdas.core.trim.call(null,G__11382));
var G__11382__$2 = (((G__11382__$1 == null))?null:cuerdas.core.replace.call(null,G__11382__$1,/([A-Z]+)/,"-$1"));
var G__11382__$3 = (((G__11382__$2 == null))?null:cuerdas.core.replace.call(null,G__11382__$2,/[-_\s]+/,"-"));
var G__11382__$4 = (((G__11382__$3 == null))?null:cuerdas.core.strip_prefix.call(null,G__11382__$3,"-"));
var G__11382__$5 = (((G__11382__$4 == null))?null:cuerdas.core.lower.call(null,G__11382__$4));
return G__11382__$5;
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
var G__11386 = s;
var G__11386__$1 = (((G__11386 == null))?null:cuerdas.core.trim.call(null,G__11386));
var G__11386__$2 = (((G__11386__$1 == null))?null:cuerdas.core.replace.call(null,G__11386__$1,cuerdas.core.regexp.call(null,/[-_\s]+(.)?/,"g"),((function (G__11386,G__11386__$1){
return (function (p__11387){
var vec__11388 = p__11387;
var match = cljs.core.nth.call(null,vec__11388,(0),null);
var c = cljs.core.nth.call(null,vec__11388,(1),null);
if(cljs.core.truth_(c)){
return cuerdas.core.upper.call(null,c);
} else {
return "";
}
});})(G__11386,G__11386__$1))
));
return G__11386__$2;
});
/**
 * Converts a camelized or dasherized string
 *   into an underscored one.
 */
cuerdas.core.underscored = (function cuerdas$core$underscored(s){
var G__11390 = s;
var G__11390__$1 = (((G__11390 == null))?null:cuerdas.core.trim.call(null,G__11390));
var G__11390__$2 = (((G__11390__$1 == null))?null:cuerdas.core.replace.call(null,G__11390__$1,cuerdas.core.regexp.call(null,/([a-z\d])([A-Z]+)/,"g"),"$1_$2"));
var G__11390__$3 = (((G__11390__$2 == null))?null:cuerdas.core.replace.call(null,G__11390__$2,cuerdas.core.regexp.call(null,/[-\s]+/,"g"),"_"));
var G__11390__$4 = (((G__11390__$3 == null))?null:cuerdas.core.lower.call(null,G__11390__$3));
return G__11390__$4;
});
/**
 * Converts an underscored, camelized, or
 *   dasherized string into a humanized one.
 */
cuerdas.core.humanize = (function cuerdas$core$humanize(s){
var G__11392 = s;
var G__11392__$1 = (((G__11392 == null))?null:cuerdas.core.underscored.call(null,G__11392));
var G__11392__$2 = (((G__11392__$1 == null))?null:cuerdas.core.replace.call(null,G__11392__$1,/_id$/,""));
var G__11392__$3 = (((G__11392__$2 == null))?null:cuerdas.core.replace.call(null,G__11392__$2,cuerdas.core.regexp.call(null,"_","g")," "));
var G__11392__$4 = (((G__11392__$3 == null))?null:cuerdas.core.capitalize.call(null,G__11392__$3));
return G__11392__$4;
});
/**
 * Converts a string into TitleCase.
 */
cuerdas.core.titleize = (function cuerdas$core$titleize(var_args){
var args11393 = [];
var len__7513__auto___11396 = arguments.length;
var i__7514__auto___11397 = (0);
while(true){
if((i__7514__auto___11397 < len__7513__auto___11396)){
args11393.push((arguments[i__7514__auto___11397]));

var G__11398 = (i__7514__auto___11397 + (1));
i__7514__auto___11397 = G__11398;
continue;
} else {
}
break;
}

var G__11395 = args11393.length;
switch (G__11395) {
case 1:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11393.length)].join('')));

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
var G__11401 = s;
var G__11401__$1 = (((G__11401 == null))?null:[cljs.core.str(G__11401)].join(''));
var G__11401__$2 = (((G__11401__$1 == null))?null:cuerdas.core.replace.call(null,G__11401__$1,/[\W_]/," "));
var G__11401__$3 = (((G__11401__$2 == null))?null:cuerdas.core.camelize.call(null,G__11401__$2));
var G__11401__$4 = (((G__11401__$3 == null))?null:cuerdas.core.replace.call(null,G__11401__$3,/\s/,""));
var G__11401__$5 = (((G__11401__$4 == null))?null:cuerdas.core.capitalize.call(null,G__11401__$4));
return G__11401__$5;
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
var args11402 = [];
var len__7513__auto___11405 = arguments.length;
var i__7514__auto___11406 = (0);
while(true){
if((i__7514__auto___11406 < len__7513__auto___11405)){
args11402.push((arguments[i__7514__auto___11406]));

var G__11407 = (i__7514__auto___11406 + (1));
i__7514__auto___11406 = G__11407;
continue;
} else {
}
break;
}

var G__11404 = args11402.length;
switch (G__11404) {
case 1:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11402.length)].join('')));

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
var args11409 = [];
var len__7513__auto___11412 = arguments.length;
var i__7514__auto___11413 = (0);
while(true){
if((i__7514__auto___11413 < len__7513__auto___11412)){
args11409.push((arguments[i__7514__auto___11413]));

var G__11414 = (i__7514__auto___11413 + (1));
i__7514__auto___11413 = G__11414;
continue;
} else {
}
break;
}

var G__11411 = args11409.length;
switch (G__11411) {
case 1:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11409.length)].join('')));

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
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__11416_SHARP_){
return cljs.core._EQ_.call(null,p1__11416_SHARP_,s);
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
var len__7513__auto___11426 = arguments.length;
var i__7514__auto___11427 = (0);
while(true){
if((i__7514__auto___11427 < len__7513__auto___11426)){
args__7520__auto__.push((arguments[i__7514__auto___11427]));

var G__11428 = (i__7514__auto___11427 + (1));
i__7514__auto___11427 = G__11428;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__11419){
var vec__11420 = p__11419;
var map__11421 = cljs.core.nth.call(null,vec__11420,(0),null);
var map__11421__$1 = ((((!((map__11421 == null)))?((((map__11421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11421):map__11421);
var length = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));
var padding = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");
var type = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));
if((s == null)){
return null;
} else {
var padding__$1 = cuerdas.core.slice.call(null,padding,(0),(1));
var padlen = (length - cljs.core.count.call(null,s));
var pred__11423 = cljs.core._EQ_;
var expr__11424 = type;
if(cljs.core.truth_(pred__11423.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__11424))){
return [cljs.core.str(s),cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_(pred__11423.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__11424))){
var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen / (2))));
var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen / (2))));
return [cljs.core.str(first),cljs.core.str(s),cljs.core.str(second)].join('');
} else {
if(cljs.core.truth_(pred__11423.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__11424))){
return [cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen)),cljs.core.str(s)].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11424)].join('')));
}
}
}
}
});

cuerdas.core.pad.cljs$lang$maxFixedArity = (1);

cuerdas.core.pad.cljs$lang$applyTo = (function (seq11417){
var G__11418 = cljs.core.first.call(null,seq11417);
var seq11417__$1 = cljs.core.next.call(null,seq11417);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic(G__11418,seq11417__$1);
});
/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__11430 = s;
var G__11430__$1 = (((G__11430 == null))?null:cuerdas.core.replace.call(null,G__11430,/[\s\xa0]+/," "));
var G__11430__$2 = (((G__11430__$1 == null))?null:cuerdas.core.replace.call(null,G__11430__$1,/^\s+|\s+$/,""));
return G__11430__$2;
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
var args11431 = [];
var len__7513__auto___11434 = arguments.length;
var i__7514__auto___11435 = (0);
while(true){
if((i__7514__auto___11435 < len__7513__auto___11434)){
args11431.push((arguments[i__7514__auto___11435]));

var G__11436 = (i__7514__auto___11435 + (1));
i__7514__auto___11435 = G__11436;
continue;
} else {
}
break;
}

var G__11433 = args11431.length;
switch (G__11433) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11431.length)].join('')));

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
var G__11439 = s;
var G__11439__$1 = (((G__11439 == null))?null:cuerdas.core.split.call(null,G__11439,prefix));
var G__11439__$2 = (((G__11439__$1 == null))?null:cljs.core.second.call(null,G__11439__$1));
var G__11439__$3 = (((G__11439__$2 == null))?null:cuerdas.core.split.call(null,G__11439__$2,suffix));
var G__11439__$4 = (((G__11439__$3 == null))?null:cljs.core.first.call(null,G__11439__$3));
return G__11439__$4;

}
}
}
}
}
});

//# sourceMappingURL=core.js.map