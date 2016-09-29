// Compiled by ClojureScript 1.7.228 {}
goog.provide('hoplon.bidi');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('schema.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
goog.require('bidi.schema');
goog.require('cuerdas.core');
hoplon.bidi.match_route = bidi.bidi.match_route;
hoplon.bidi._STAR_route_STAR_ = hoplon.core.route_cell.call(null,"");
/**
 * Takes `routes` and a (route-cell).
 * Returns formula cell containing current matching handler.
 */
hoplon.bidi.wrap_route = (function hoplon$bidi$wrap_route(routes,routec){
return javelin.core.formula.call(null,(function (G__11442,G__11441,G__11440,G__11443){
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__11440.call(null,G__11441,G__11442.call(null,G__11443,"#")));
})).call(null,cuerdas.core.strip_prefix,routes,bidi.bidi.match_route,routec);
});
/**
 * Takes `routes` and a (route-cell).
 * Returns formula cell containing current route params.
 */
hoplon.bidi.wrap_route_params = (function hoplon$bidi$wrap_route_params(routes,routec){
return javelin.core.formula.call(null,(function (G__11450,G__11449,G__11448,G__11451){
return new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(G__11448.call(null,G__11449,G__11450.call(null,G__11451,"#")));
})).call(null,cuerdas.core.strip_prefix,routes,bidi.bidi.match_route,routec);
});
/**
 * Takes `routes`, returns a formula cell with the current route handler.
 */
hoplon.bidi.route = (function hoplon$bidi$route(routes){
return hoplon.bidi.wrap_route.call(null,routes,hoplon.bidi._STAR_route_STAR_);
});
/**
 * Takes `routes`, returns a formula cell with the current route params.
 */
hoplon.bidi.route_params = (function hoplon$bidi$route_params(routes){
return hoplon.bidi.wrap_route_params.call(null,routes,hoplon.bidi._STAR_route_STAR_);
});
/**
 * Takes `routes` and `handler`, returns formula cell.
 * Formula cell is true if `route` is currently active.
 */
hoplon.bidi.route_QMARK_ = (function hoplon$bidi$route_QMARK_(routes,handler){
return javelin.core.formula.call(null,(function (G__11455,G__11457,G__11456){
return G__11455.call(null,G__11456,G__11456.call(null,G__11457));
})).call(null,cljs.core._EQ_,routes,hoplon.bidi.route);
});
/**
 * Generate a valid route. (includes '#' character)
 */
hoplon.bidi.mkroute = (function hoplon$bidi$mkroute(var_args){
var args__7520__auto__ = [];
var len__7513__auto___11460 = arguments.length;
var i__7514__auto___11461 = (0);
while(true){
if((i__7514__auto___11461 < len__7513__auto___11460)){
args__7520__auto__.push((arguments[i__7514__auto___11461]));

var G__11462 = (i__7514__auto___11461 + (1));
i__7514__auto___11461 = G__11462;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return hoplon.bidi.mkroute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

hoplon.bidi.mkroute.cljs$core$IFn$_invoke$arity$variadic = (function (routes,routeopts){
return cuerdas.core.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",cljs.core.apply.call(null,bidi.bidi.path_for,routes,routeopts)], null));
});

hoplon.bidi.mkroute.cljs$lang$maxFixedArity = (1);

hoplon.bidi.mkroute.cljs$lang$applyTo = (function (seq11458){
var G__11459 = cljs.core.first.call(null,seq11458);
var seq11458__$1 = cljs.core.next.call(null,seq11458);
return hoplon.bidi.mkroute.cljs$core$IFn$_invoke$arity$variadic(G__11459,seq11458__$1);
});
/**
 * Change URL hash, does not reload the page.
 */
hoplon.bidi.route_BANG_ = (function hoplon$bidi$route_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___11465 = arguments.length;
var i__7514__auto___11466 = (0);
while(true){
if((i__7514__auto___11466 < len__7513__auto___11465)){
args__7520__auto__.push((arguments[i__7514__auto___11466]));

var G__11467 = (i__7514__auto___11466 + (1));
i__7514__auto___11466 = G__11467;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return hoplon.bidi.route_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

hoplon.bidi.route_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (routes,routeopts){
return (window["location"]["hash"] = cljs.core.apply.call(null,hoplon.bidi.mkroute,routes,routeopts));
});

hoplon.bidi.route_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.bidi.route_BANG_.cljs$lang$applyTo = (function (seq11463){
var G__11464 = cljs.core.first.call(null,seq11463);
var seq11463__$1 = cljs.core.next.call(null,seq11463);
return hoplon.bidi.route_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11464,seq11463__$1);
});
/**
 * Validate `routes` against bidi schema.
 */
hoplon.bidi.validate = (function hoplon$bidi$validate(routes){
return schema.core.validate.call(null,bidi.schema.RoutePair,routes);
});

//# sourceMappingURL=bidi.js.map