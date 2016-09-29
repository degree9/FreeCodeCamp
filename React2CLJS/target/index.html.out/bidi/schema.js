// Compiled by ClojureScript 1.7.228 {}
goog.provide('bidi.schema');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('schema.core');
bidi.schema.Path = schema.core.Str;
bidi.schema.PatternSegment = schema.core.cond_pre.call(null,schema.core.Str,schema.core.Regex,schema.core.Keyword,schema.core.pair.call(null,schema.core.cond_pre.call(null,schema.core.Str,schema.core.Regex),"qual",schema.core.Keyword,"id"));
bidi.schema.MethodGuard = schema.core.enum$.call(null,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"options","options",99638489));
bidi.schema.GeneralGuard = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.cond_pre.call(null,schema.core.Str,schema.core.Keyword,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)))], true, false);
bidi.schema.Pattern = schema.core.cond_pre.call(null,cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,bidi.bidi.Pattern),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("bidi","Pattern","bidi/Pattern",1855252544,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__8584__8585__auto__){
if(!((p1__8584__8585__auto__ == null))){
if((false) || (p1__8584__8585__auto__.bidi$bidi$Pattern$)){
return true;
} else {
if((!p1__8584__8585__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,bidi.bidi.Pattern,p1__8584__8585__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,bidi.bidi.Pattern,p1__8584__8585__auto__);
}
})], null)),bidi.schema.Path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.schema.PatternSegment], null),bidi.schema.MethodGuard,bidi.schema.GeneralGuard,schema.core.Bool);
bidi.schema.Matched = schema.core.cond_pre.call(null,schema.core.pred.call(null,cljs.core.record_QMARK_),schema.core.Symbol,schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.recursive.call(null,new cljs.core.Var(function(){return bidi.schema.RoutePair;},new cljs.core.Symbol("bidi.schema","RoutePair","bidi.schema/RoutePair",1002135381,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bidi.schema","bidi.schema",-982991651,null),new cljs.core.Symbol(null,"RoutePair","RoutePair",646244758,null),"/Users/matt/.boot/cache/tmp/Users/matt/Projects/degree9/FreeCodeCamp/React2CLJS/qmy/-wutanx/index.html.out/bidi/schema.cljc",28,true,1,31,true,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(bidi.schema.RoutePair)?bidi.schema.RoutePair.cljs$lang$test:null)])))], null),cljs.core.PersistentArrayMap.fromArray([bidi.schema.Pattern,schema.core.recursive.call(null,new cljs.core.Var(function(){return bidi.schema.Matched;},new cljs.core.Symbol("bidi.schema","Matched","bidi.schema/Matched",-880720640,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bidi.schema","bidi.schema",-982991651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matt/.boot/cache/tmp/Users/matt/Projects/degree9/FreeCodeCamp/React2CLJS/qmy/-wutanx/index.html.out/bidi/schema.cljc",new cljs.core.Keyword(null,"line","line",212345235),33,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"Matched","Matched",-964439993,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(bidi.schema.Matched)?bidi.schema.Matched.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)))], true, false),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)));
bidi.schema.RoutePair = schema.core.pair.call(null,bidi.schema.Pattern,"Pattern",bidi.schema.Matched,"Matched");
goog.exportSymbol('bidi.schema.RoutePair', bidi.schema.RoutePair);

//# sourceMappingURL=schema.js.map