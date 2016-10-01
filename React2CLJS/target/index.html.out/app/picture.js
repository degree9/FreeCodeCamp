// Compiled by ClojureScript 1.7.228 {}
goog.provide('app.picture');
goog.require('cljs.core');
goog.require('hoplon.bidi');
goog.require('app.routing');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
app.picture.images = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"6","6",-1107752709)],["http://mrmrs.io/photos/049.jpg","http://mrmrs.io/photos/u/002.jpg","http://mrmrs.io/photos/v/022.jpg","http://mrmrs.io/photos/u/003.jpg","http://mrmrs.io/photos/u/004.jpg","http://mrmrs.io/photos/v/024.jpg","http://mrmrs.io/photos/051.jpg","http://mrmrs.io/photos/050.jpg","http://mrmrs.io/photos/u/001.jpg"]);
app.picture.backgrounds = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"6","6",-1107752709)],["bg-light-gray","bg-light-purple","bg-light-gray","bg-moon-gray","bg-washed-red","bg-white","bg-near-white","bg-near-white","bg-white"]);
app.picture.params = hoplon.bidi.route_params.call(null,app.routing.routes);
app.picture.param_id = javelin.core.formula.call(null,(function (G__12970){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__12970);
})).call(null,app.picture.params);
app.picture.image = javelin.core.formula.call(null,(function (G__12971,G__12973,G__12974,G__12972){
if(cljs.core.truth_(G__12971)){
return G__12972.call(null,G__12973,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12974.call(null,G__12971)], null));
} else {
return null;
}
})).call(null,app.picture.param_id,app.picture.images,cljs.core.keyword,cljs.core.get_in);
app.picture.bg = javelin.core.formula.call(null,(function (G__12975,G__12977,G__12978,G__12976){
if(cljs.core.truth_(G__12975)){
return G__12976.call(null,G__12977,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12978.call(null,G__12975)], null));
} else {
return null;
}
})).call(null,app.picture.param_id,app.picture.backgrounds,cljs.core.keyword,cljs.core.get_in);
app.picture.enlarge = javelin.core.cell.call(null,null);
/**
 * @param {...*} var_args
 */
app.picture.index = (function() { 
var app$picture$index__delegate = function (args__10690__auto__){
var vec__12986 = hoplon.core.parse_args.call(null,args__10690__auto__);
var attr = cljs.core.nth.call(null,vec__12986,(0),null);
var kids = cljs.core.nth.call(null,vec__12986,(1),null);
return hoplon.core.main.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (vec__12986,attr,kids){
return (function (G__12987,G__12988){
if(cljs.core.truth_(G__12987)){
return G__12988.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12987], null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"pa3","pa3",-1534192851),new cljs.core.Keyword(null,"pa4-m","pa4-m",-551976819),new cljs.core.Keyword(null,"pa5-l","pa5-l",-1246095633),new cljs.core.Keyword(null,"mw-100","mw-100",-1809875281),new cljs.core.Keyword(null,"min-vh-100","min-vh-100",154741719),new cljs.core.Keyword(null,"center","center",-748944368));
} else {
return null;
}
});})(vec__12986,attr,kids))
).call(null,app.picture.bg,cljs.core.conj),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fr w-100 w-80-l",hoplon.core.p.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"f6","Beitrage zut"),hoplon.core.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"link dim black hover-mid-gray",hoplon.core.h1.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"f2 f1-l lh-title mt0 mb4 mb5-ns","Kunst",hoplon.core.br.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"dn db-ns"),"des 19. und 20.Jahrhunderts"))),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"f6 lh-copy fl w-100 mb4",hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fl-ns w-100 w-20-l pr3-m pr5-l",hoplon.core.p.call(null,"Jahrbuch",hoplon.core.small.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fw6","1968/69"))),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fl-ns w-50-m w-20-l pr3-m pr5-l",hoplon.core.p.call(null,"Institut suisse pour l'\u00E9tude de l'art")),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fl-ns w-50-m w-20-l pr3-m pr5-l",hoplon.core.p.call(null,"Schweizerisches",hoplon.core.br.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"dn db-l"),"Institut f\u00FCr Kunstwissenschaft")),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fl-ns w-50-m w-20-l pr3-m pr5-l",hoplon.core.p.call(null,"Istituto svizzero di studi d'arte")),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fl-ns w-50-m w-20-l pr3-m pr5-l",hoplon.core.p.call(null,"Swiss Institute for Art Research"))),(function (){var con__10728__auto__ = (new cljs.core.Delay(((function (vec__12986,attr,kids){
return (function (){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (vec__12986,attr,kids){
return (function (G__12989,G__12990){
if(cljs.core.truth_(G__12989)){
return G__12990.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12989], null),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top-0","top-0",-272332339),new cljs.core.Keyword(null,"right-0","right-0",-874039782),new cljs.core.Keyword(null,"bottom-0","bottom-0",-1538325664),new cljs.core.Keyword(null,"left-0","left-0",878564553),new cljs.core.Keyword(null,"w-100","w-100",672107769),new cljs.core.Keyword(null,"z-999","z-999",-1001259616));
} else {
return null;
}
});})(vec__12986,attr,kids))
).call(null,app.picture.bg,cljs.core.conj),hoplon.core.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),javelin.core.formula.call(null,((function (vec__12986,attr,kids){
return (function (G__12991){
var or__6455__auto__ = G__12991;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return "";
}
});})(vec__12986,attr,kids))
).call(null,app.picture.image),new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__12986,attr,kids){
return (function (){
return cljs.core.swap_BANG_.call(null,app.picture.enlarge,cljs.core.not);
});})(vec__12986,attr,kids))
,new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-0 right-0 bottom-0 left-0 w-100 pointer",new cljs.core.Keyword(null,"role","role",-736691072),"presentation"));
});})(vec__12986,attr,kids))
,null));
var alt__10729__auto__ = (new cljs.core.Delay(((function (con__10728__auto__,vec__12986,attr,kids){
return (function (){
return hoplon.core.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),javelin.core.formula.call(null,((function (con__10728__auto__,vec__12986,attr,kids){
return (function (G__12992){
var or__6455__auto__ = G__12992;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return "";
}
});})(con__10728__auto__,vec__12986,attr,kids))
).call(null,app.picture.image),new cljs.core.Keyword(null,"click","click",1912301393),((function (con__10728__auto__,vec__12986,attr,kids){
return (function (){
return cljs.core.swap_BANG_.call(null,app.picture.enlarge,cljs.core.not);
});})(con__10728__auto__,vec__12986,attr,kids))
,new cljs.core.Keyword(null,"class","class",-2030961996),"db center grow pointer dim",new cljs.core.Keyword(null,"role","role",-736691072),"presentation");
});})(con__10728__auto__,vec__12986,attr,kids))
,null));
var tpl__10730__auto__ = ((function (con__10728__auto__,alt__10729__auto__,vec__12986,attr,kids){
return (function (p__10731__auto__){
return cljs.core.deref.call(null,(function (){var or__6455__auto__ = (cljs.core.truth_(p__10731__auto__)?con__10728__auto__:alt__10729__auto__);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(con__10728__auto__,alt__10729__auto__,vec__12986,attr,kids))
;
return javelin.core.formula.call(null,tpl__10730__auto__).call(null,app.picture.enlarge);
})());
};
var app$picture$index = function (var_args){
var args__10690__auto__ = null;
if (arguments.length > 0) {
var G__12993__i = 0, G__12993__a = new Array(arguments.length -  0);
while (G__12993__i < G__12993__a.length) {G__12993__a[G__12993__i] = arguments[G__12993__i + 0]; ++G__12993__i;}
  args__10690__auto__ = new cljs.core.IndexedSeq(G__12993__a,0);
} 
return app$picture$index__delegate.call(this,args__10690__auto__);};
app$picture$index.cljs$lang$maxFixedArity = 0;
app$picture$index.cljs$lang$applyTo = (function (arglist__12994){
var args__10690__auto__ = cljs.core.seq(arglist__12994);
return app$picture$index__delegate(args__10690__auto__);
});
app$picture$index.cljs$core$IFn$_invoke$arity$variadic = app$picture$index__delegate;
return app$picture$index;
})()
;

//# sourceMappingURL=picture.js.map