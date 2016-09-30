// Compiled by ClojureScript 1.7.228 {}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('app.home');
goog.require('hoplon.bidi');
goog.require('app.routing');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
goog.require('app.picture');
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.not_found = (function() { 
var hoplon$app_pages$_index_DOT_html$not_found__delegate = function (args__10690__auto__){
var vec__12918 = hoplon.core.parse_args.call(null,args__10690__auto__);
var attr = cljs.core.nth.call(null,vec__12918,(0),null);
var kids = cljs.core.nth.call(null,vec__12918,(1),null);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"dt w-100 h-100 pv4 ph2 tc ",hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"dtc v-mid",hoplon.core.h1.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"f1 mt0","404 Page Not Found")));
};
var hoplon$app_pages$_index_DOT_html$not_found = function (var_args){
var args__10690__auto__ = null;
if (arguments.length > 0) {
var G__12919__i = 0, G__12919__a = new Array(arguments.length -  0);
while (G__12919__i < G__12919__a.length) {G__12919__a[G__12919__i] = arguments[G__12919__i + 0]; ++G__12919__i;}
  args__10690__auto__ = new cljs.core.IndexedSeq(G__12919__a,0);
} 
return hoplon$app_pages$_index_DOT_html$not_found__delegate.call(this,args__10690__auto__);};
hoplon$app_pages$_index_DOT_html$not_found.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$not_found.cljs$lang$applyTo = (function (arglist__12920){
var args__10690__auto__ = cljs.core.seq(arglist__12920);
return hoplon$app_pages$_index_DOT_html$not_found__delegate(args__10690__auto__);
});
hoplon$app_pages$_index_DOT_html$not_found.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$not_found__delegate;
return hoplon$app_pages$_index_DOT_html$not_found;
})()
;
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"charset","charset",-1063822193),"utf8"),hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"shortcut icon",new cljs.core.Keyword(null,"href","href",-793805698),"favicon.ico"),hoplon.core.title.call(null,"React2Cljs App"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"https://unpkg.com/tachyons@4.5.3/css/tachyons.min.css"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"App.css"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"Home.css")),hoplon.core.body.call(null,(function (){hoplon.bidi.validate.call(null,app.routing.routes);

var G__12921 = (new cljs.core.Delay((function (){
return app.home.index.call(null);
}),null));
var G__12922 = (new cljs.core.Delay(((function (G__12921){
return (function (){
return app.picture.index.call(null);
});})(G__12921))
,null));
var G__12923 = (new cljs.core.Delay(((function (G__12921,G__12922){
return (function (){
return hoplon.app_pages._index_DOT_html.not_found.call(null);
});})(G__12921,G__12922))
,null));
var G__12924 = (new cljs.core.Delay(((function (G__12921,G__12922,G__12923){
return (function (){
return null;
});})(G__12921,G__12922,G__12923))
,null));
var tpl__10753__auto__ = ((function (G__12921,G__12922,G__12923,G__12924){
return (function (expr__10754__auto__){
return cljs.core.deref.call(null,(function (){var or__6455__auto__ = (function (){var G__12926 = (((expr__10754__auto__ instanceof cljs.core.Keyword))?expr__10754__auto__.fqn:null);
switch (G__12926) {
case "index":
return G__12921;

break;
case "picture":
return G__12922;

break;
case "not-found":
return G__12923;

break;
default:
return G__12924;

}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(G__12921,G__12922,G__12923,G__12924))
;
return javelin.core.formula.call(null,tpl__10753__auto__).call(null,hoplon.bidi.wrap_route.call(null,app.routing.routes,hoplon.bidi._STAR_route_STAR_));
})()));

//# sourceMappingURL=_index_DOT_html.js.map