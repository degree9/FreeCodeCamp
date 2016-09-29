// Compiled by ClojureScript 1.7.228 {}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('hoplon.bidi');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"/",null], null), null),new cljs.core.Keyword(null,"index","index",-1531685915),"/picture",cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"picture","picture",-921943404)], true, false),true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], true, false)], null);
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"charset","charset",-1063822193),"utf8"),hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"shortcut icon",new cljs.core.Keyword(null,"href","href",-793805698),"favicon.ico"),hoplon.core.title.call(null,"React2Cljs App")),hoplon.core.body.call(null,(function (){hoplon.bidi.validate.call(null,hoplon.app_pages._index_DOT_html.routes);

var G__12738 = (new cljs.core.Delay((function (){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"app");
}),null));
var G__12739 = (new cljs.core.Delay(((function (G__12738){
return (function (){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"picture");
});})(G__12738))
,null));
var G__12740 = (new cljs.core.Delay(((function (G__12738,G__12739){
return (function (){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"missing");
});})(G__12738,G__12739))
,null));
var G__12741 = (new cljs.core.Delay(((function (G__12738,G__12739,G__12740){
return (function (){
return null;
});})(G__12738,G__12739,G__12740))
,null));
var tpl__10880__auto__ = ((function (G__12738,G__12739,G__12740,G__12741){
return (function (expr__10881__auto__){
return cljs.core.deref.call(null,(function (){var or__6455__auto__ = (function (){var G__12743 = (((expr__10881__auto__ instanceof cljs.core.Keyword))?expr__10881__auto__.fqn:null);
switch (G__12743) {
case "index":
return G__12738;

break;
case "picture":
return G__12739;

break;
case "not-found":
return G__12740;

break;
default:
return G__12741;

}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(G__12738,G__12739,G__12740,G__12741))
;
return javelin.core.formula.call(null,tpl__10880__auto__).call(null,hoplon.bidi.wrap_route.call(null,hoplon.app_pages._index_DOT_html.routes,hoplon.bidi._STAR_route_STAR_));
})()));

//# sourceMappingURL=_index_DOT_html.js.map