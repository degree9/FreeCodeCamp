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
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"charset","charset",-1063822193),"utf8"),hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"shortcut icon",new cljs.core.Keyword(null,"href","href",-793805698),"favicon.ico"),hoplon.core.title.call(null,"React2Cljs App"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"https://unpkg.com/tachyons@4.5.3/css/tachyons.min.css"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"App.css"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"Home.css")),hoplon.core.body.call(null,(function (){hoplon.bidi.validate.call(null,app.routing.routes);

var G__13460 = (new cljs.core.Delay((function (){
return app.home.index.call(null);
}),null));
var G__13461 = (new cljs.core.Delay(((function (G__13460){
return (function (){
return app.picture.index.call(null);
});})(G__13460))
,null));
var G__13462 = (new cljs.core.Delay(((function (G__13460,G__13461){
return (function (){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"missing");
});})(G__13460,G__13461))
,null));
var G__13463 = (new cljs.core.Delay(((function (G__13460,G__13461,G__13462){
return (function (){
return null;
});})(G__13460,G__13461,G__13462))
,null));
var tpl__10753__auto__ = ((function (G__13460,G__13461,G__13462,G__13463){
return (function (expr__10754__auto__){
return cljs.core.deref.call(null,(function (){var or__6455__auto__ = (function (){var G__13465 = (((expr__10754__auto__ instanceof cljs.core.Keyword))?expr__10754__auto__.fqn:null);
switch (G__13465) {
case "index":
return G__13460;

break;
case "picture":
return G__13461;

break;
case "not-found":
return G__13462;

break;
default:
return G__13463;

}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(G__13460,G__13461,G__13462,G__13463))
;
return javelin.core.formula.call(null,tpl__10753__auto__).call(null,hoplon.bidi.wrap_route.call(null,app.routing.routes,hoplon.bidi._STAR_route_STAR_));
})()));

//# sourceMappingURL=_index_DOT_html.js.map