// Compiled by ClojureScript 1.7.228 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__8224 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8222_SHARP_,p2__8223_SHARP_){
return cljs.core.assoc.call(null,p1__8222_SHARP_,p2__8223_SHARP_,p2__8223_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8224;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e8226){if((e8226 instanceof Error)){
var _ = e8226;
return null;
} else {
throw e8226;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8229 = c;
javelin.core.add_sync_BANG_.call(null,G__8229);

return G__8229;
} else {
var G__8230 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8230));

return G__8230;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8239 = arguments.length;
var i__7514__auto___8240 = (0);
while(true){
if((i__7514__auto___8240 < len__7513__auto___8239)){
args__7520__auto__.push((arguments[i__7514__auto___8240]));

var G__8241 = (i__7514__auto___8240 + (1));
i__7514__auto___8240 = G__8241;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8233){
var vec__8234 = p__8233;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8234,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8235 = cljs.core.seq.call(null,srcs);
var chunk__8236 = null;
var count__8237 = (0);
var i__8238 = (0);
while(true){
if((i__8238 < count__8237)){
var src = cljs.core._nth.call(null,chunk__8236,i__8238);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8242 = seq__8235;
var G__8243 = chunk__8236;
var G__8244 = count__8237;
var G__8245 = (i__8238 + (1));
seq__8235 = G__8242;
chunk__8236 = G__8243;
count__8237 = G__8244;
i__8238 = G__8245;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8235);
if(temp__4425__auto__){
var seq__8235__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8235__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__8235__$1);
var G__8246 = cljs.core.chunk_rest.call(null,seq__8235__$1);
var G__8247 = c__7258__auto__;
var G__8248 = cljs.core.count.call(null,c__7258__auto__);
var G__8249 = (0);
seq__8235 = G__8246;
chunk__8236 = G__8247;
count__8237 = G__8248;
i__8238 = G__8249;
continue;
} else {
var src = cljs.core.first.call(null,seq__8235__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8250 = cljs.core.next.call(null,seq__8235__$1);
var G__8251 = null;
var G__8252 = (0);
var G__8253 = (0);
seq__8235 = G__8250;
chunk__8236 = G__8251;
count__8237 = G__8252;
i__8238 = G__8253;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8231){
var G__8232 = cljs.core.first.call(null,seq8231);
var seq8231__$1 = cljs.core.next.call(null,seq8231);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8232,seq8231__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8272 = arguments.length;
var i__7514__auto___8273 = (0);
while(true){
if((i__7514__auto___8273 < len__7513__auto___8272)){
args__7520__auto__.push((arguments[i__7514__auto___8273]));

var G__8274 = (i__7514__auto___8273 + (1));
i__7514__auto___8273 = G__8274;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8258){
var vec__8259 = p__8258;
var f = cljs.core.nth.call(null,vec__8259,(0),null);
var sources = cljs.core.nth.call(null,vec__8259,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8260_8275 = cljs.core.seq.call(null,this$.sources);
var chunk__8261_8276 = null;
var count__8262_8277 = (0);
var i__8263_8278 = (0);
while(true){
if((i__8263_8278 < count__8262_8277)){
var source_8279 = cljs.core._nth.call(null,chunk__8261_8276,i__8263_8278);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8279))){
source_8279.sinks = cljs.core.conj.call(null,source_8279.sinks,this$);

if((source_8279.rank > this$.rank)){
var seq__8264_8280 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8260_8275,chunk__8261_8276,count__8262_8277,i__8263_8278,source_8279,vec__8259,f,sources){
return (function (p1__8254_SHARP_){
return p1__8254_SHARP_.sinks;
});})(seq__8260_8275,chunk__8261_8276,count__8262_8277,i__8263_8278,source_8279,vec__8259,f,sources))
,source_8279));
var chunk__8265_8281 = null;
var count__8266_8282 = (0);
var i__8267_8283 = (0);
while(true){
if((i__8267_8283 < count__8266_8282)){
var dep_8284 = cljs.core._nth.call(null,chunk__8265_8281,i__8267_8283);
dep_8284.rank = javelin.core.next_rank.call(null);

var G__8285 = seq__8264_8280;
var G__8286 = chunk__8265_8281;
var G__8287 = count__8266_8282;
var G__8288 = (i__8267_8283 + (1));
seq__8264_8280 = G__8285;
chunk__8265_8281 = G__8286;
count__8266_8282 = G__8287;
i__8267_8283 = G__8288;
continue;
} else {
var temp__4425__auto___8289 = cljs.core.seq.call(null,seq__8264_8280);
if(temp__4425__auto___8289){
var seq__8264_8290__$1 = temp__4425__auto___8289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8264_8290__$1)){
var c__7258__auto___8291 = cljs.core.chunk_first.call(null,seq__8264_8290__$1);
var G__8292 = cljs.core.chunk_rest.call(null,seq__8264_8290__$1);
var G__8293 = c__7258__auto___8291;
var G__8294 = cljs.core.count.call(null,c__7258__auto___8291);
var G__8295 = (0);
seq__8264_8280 = G__8292;
chunk__8265_8281 = G__8293;
count__8266_8282 = G__8294;
i__8267_8283 = G__8295;
continue;
} else {
var dep_8296 = cljs.core.first.call(null,seq__8264_8290__$1);
dep_8296.rank = javelin.core.next_rank.call(null);

var G__8297 = cljs.core.next.call(null,seq__8264_8290__$1);
var G__8298 = null;
var G__8299 = (0);
var G__8300 = (0);
seq__8264_8280 = G__8297;
chunk__8265_8281 = G__8298;
count__8266_8282 = G__8299;
i__8267_8283 = G__8300;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8301 = seq__8260_8275;
var G__8302 = chunk__8261_8276;
var G__8303 = count__8262_8277;
var G__8304 = (i__8263_8278 + (1));
seq__8260_8275 = G__8301;
chunk__8261_8276 = G__8302;
count__8262_8277 = G__8303;
i__8263_8278 = G__8304;
continue;
} else {
var temp__4425__auto___8305 = cljs.core.seq.call(null,seq__8260_8275);
if(temp__4425__auto___8305){
var seq__8260_8306__$1 = temp__4425__auto___8305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8260_8306__$1)){
var c__7258__auto___8307 = cljs.core.chunk_first.call(null,seq__8260_8306__$1);
var G__8308 = cljs.core.chunk_rest.call(null,seq__8260_8306__$1);
var G__8309 = c__7258__auto___8307;
var G__8310 = cljs.core.count.call(null,c__7258__auto___8307);
var G__8311 = (0);
seq__8260_8275 = G__8308;
chunk__8261_8276 = G__8309;
count__8262_8277 = G__8310;
i__8263_8278 = G__8311;
continue;
} else {
var source_8312 = cljs.core.first.call(null,seq__8260_8306__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8312))){
source_8312.sinks = cljs.core.conj.call(null,source_8312.sinks,this$);

if((source_8312.rank > this$.rank)){
var seq__8268_8313 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8260_8275,chunk__8261_8276,count__8262_8277,i__8263_8278,source_8312,seq__8260_8306__$1,temp__4425__auto___8305,vec__8259,f,sources){
return (function (p1__8254_SHARP_){
return p1__8254_SHARP_.sinks;
});})(seq__8260_8275,chunk__8261_8276,count__8262_8277,i__8263_8278,source_8312,seq__8260_8306__$1,temp__4425__auto___8305,vec__8259,f,sources))
,source_8312));
var chunk__8269_8314 = null;
var count__8270_8315 = (0);
var i__8271_8316 = (0);
while(true){
if((i__8271_8316 < count__8270_8315)){
var dep_8317 = cljs.core._nth.call(null,chunk__8269_8314,i__8271_8316);
dep_8317.rank = javelin.core.next_rank.call(null);

var G__8318 = seq__8268_8313;
var G__8319 = chunk__8269_8314;
var G__8320 = count__8270_8315;
var G__8321 = (i__8271_8316 + (1));
seq__8268_8313 = G__8318;
chunk__8269_8314 = G__8319;
count__8270_8315 = G__8320;
i__8271_8316 = G__8321;
continue;
} else {
var temp__4425__auto___8322__$1 = cljs.core.seq.call(null,seq__8268_8313);
if(temp__4425__auto___8322__$1){
var seq__8268_8323__$1 = temp__4425__auto___8322__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8268_8323__$1)){
var c__7258__auto___8324 = cljs.core.chunk_first.call(null,seq__8268_8323__$1);
var G__8325 = cljs.core.chunk_rest.call(null,seq__8268_8323__$1);
var G__8326 = c__7258__auto___8324;
var G__8327 = cljs.core.count.call(null,c__7258__auto___8324);
var G__8328 = (0);
seq__8268_8313 = G__8325;
chunk__8269_8314 = G__8326;
count__8270_8315 = G__8327;
i__8271_8316 = G__8328;
continue;
} else {
var dep_8329 = cljs.core.first.call(null,seq__8268_8323__$1);
dep_8329.rank = javelin.core.next_rank.call(null);

var G__8330 = cljs.core.next.call(null,seq__8268_8323__$1);
var G__8331 = null;
var G__8332 = (0);
var G__8333 = (0);
seq__8268_8313 = G__8330;
chunk__8269_8314 = G__8331;
count__8270_8315 = G__8332;
i__8271_8316 = G__8333;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8334 = cljs.core.next.call(null,seq__8260_8306__$1);
var G__8335 = null;
var G__8336 = (0);
var G__8337 = (0);
seq__8260_8275 = G__8334;
chunk__8261_8276 = G__8335;
count__8262_8277 = G__8336;
i__8263_8278 = G__8337;
continue;
}
} else {
}
}
break;
}

var compute_8338 = ((function (vec__8259,f,sources){
return (function (p1__8255_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8255_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8255_SHARP_)));
});})(vec__8259,f,sources))
;
this$.thunk = ((function (compute_8338,vec__8259,f,sources){
return (function (){
return this$.state = compute_8338.call(null,this$.sources);
});})(compute_8338,vec__8259,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8256){
var G__8257 = cljs.core.first.call(null,seq8256);
var seq8256__$1 = cljs.core.next.call(null,seq8256);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8257,seq8256__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__8339 = cljs.core.seq.call(null,self__.watches);
var chunk__8340 = null;
var count__8341 = (0);
var i__8342 = (0);
while(true){
if((i__8342 < count__8341)){
var vec__8343 = cljs.core._nth.call(null,chunk__8340,i__8342);
var key = cljs.core.nth.call(null,vec__8343,(0),null);
var f = cljs.core.nth.call(null,vec__8343,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8345 = seq__8339;
var G__8346 = chunk__8340;
var G__8347 = count__8341;
var G__8348 = (i__8342 + (1));
seq__8339 = G__8345;
chunk__8340 = G__8346;
count__8341 = G__8347;
i__8342 = G__8348;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8339);
if(temp__4425__auto__){
var seq__8339__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__8339__$1);
var G__8349 = cljs.core.chunk_rest.call(null,seq__8339__$1);
var G__8350 = c__7258__auto__;
var G__8351 = cljs.core.count.call(null,c__7258__auto__);
var G__8352 = (0);
seq__8339 = G__8349;
chunk__8340 = G__8350;
count__8341 = G__8351;
i__8342 = G__8352;
continue;
} else {
var vec__8344 = cljs.core.first.call(null,seq__8339__$1);
var key = cljs.core.nth.call(null,vec__8344,(0),null);
var f = cljs.core.nth.call(null,vec__8344,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8353 = cljs.core.next.call(null,seq__8339__$1);
var G__8354 = null;
var G__8355 = (0);
var G__8356 = (0);
seq__8339 = G__8353;
chunk__8340 = G__8354;
count__8341 = G__8355;
i__8342 = G__8356;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6443__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6443__auto__)){
return c.thunk;
} else {
return and__6443__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6443__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6443__auto__)){
return c.update;
} else {
return and__6443__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6443__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__6443__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__8357__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__8357 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8358__i = 0, G__8358__a = new Array(arguments.length -  0);
while (G__8358__i < G__8358__a.length) {G__8358__a[G__8358__i] = arguments[G__8358__i + 0]; ++G__8358__i;}
  sources = new cljs.core.IndexedSeq(G__8358__a,0);
} 
return G__8357__delegate.call(this,sources);};
G__8357.cljs$lang$maxFixedArity = 0;
G__8357.cljs$lang$applyTo = (function (arglist__8359){
var sources = cljs.core.seq(arglist__8359);
return G__8357__delegate(sources);
});
G__8357.cljs$core$IFn$_invoke$arity$variadic = G__8357__delegate;
return G__8357;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args8360 = [];
var len__7513__auto___8368 = arguments.length;
var i__7514__auto___8369 = (0);
while(true){
if((i__7514__auto___8369 < len__7513__auto___8368)){
args8360.push((arguments[i__7514__auto___8369]));

var G__8370 = (i__7514__auto___8369 + (1));
i__7514__auto___8369 = G__8370;
continue;
} else {
}
break;
}

var G__8364 = args8360.length;
switch (G__8364) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args8360.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8365){
var map__8366 = p__8365;
var map__8366__$1 = ((((!((map__8366 == null)))?((((map__8366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8366):map__8366);
var meta = cljs.core.get.call(null,map__8366__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8361){
var G__8362 = cljs.core.first.call(null,seq8361);
var seq8361__$1 = cljs.core.next.call(null,seq8361);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8362,seq8361__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__8372_SHARP_){
var _STAR_tx_STAR_8375 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8372_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8375;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_8376 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8376;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8383 = arguments.length;
var i__7514__auto___8384 = (0);
while(true){
if((i__7514__auto___8384 < len__7513__auto___8383)){
args__7520__auto__.push((arguments[i__7514__auto___8384]));

var G__8385 = (i__7514__auto___8384 + (1));
i__7514__auto___8384 = G__8385;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__8377_SHARP_,p2__8378_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8377_SHARP_,p2__8378_SHARP_),p2__8378_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8380_SHARP_,p2__8379_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8380_SHARP_,p2__8379_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8386__delegate = function (rest__8381_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8381_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8381_SHARP_);

return news;
};
var G__8386 = function (var_args){
var rest__8381_SHARP_ = null;
if (arguments.length > 0) {
var G__8387__i = 0, G__8387__a = new Array(arguments.length -  0);
while (G__8387__i < G__8387__a.length) {G__8387__a[G__8387__i] = arguments[G__8387__i + 0]; ++G__8387__i;}
  rest__8381_SHARP_ = new cljs.core.IndexedSeq(G__8387__a,0);
} 
return G__8386__delegate.call(this,rest__8381_SHARP_);};
G__8386.cljs$lang$maxFixedArity = 0;
G__8386.cljs$lang$applyTo = (function (arglist__8388){
var rest__8381_SHARP_ = cljs.core.seq(arglist__8388);
return G__8386__delegate(rest__8381_SHARP_);
});
G__8386.cljs$core$IFn$_invoke$arity$variadic = G__8386__delegate;
return G__8386;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8382){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8382));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8389_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8389_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8390_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__8390_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8395_8399 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8396_8400 = null;
var count__8397_8401 = (0);
var i__8398_8402 = (0);
while(true){
if((i__8398_8402 < count__8397_8401)){
var i_8403 = cljs.core._nth.call(null,chunk__8396_8400,i__8398_8402);
f__$1.call(null,ith_item__$1.call(null,i_8403));

var G__8404 = seq__8395_8399;
var G__8405 = chunk__8396_8400;
var G__8406 = count__8397_8401;
var G__8407 = (i__8398_8402 + (1));
seq__8395_8399 = G__8404;
chunk__8396_8400 = G__8405;
count__8397_8401 = G__8406;
i__8398_8402 = G__8407;
continue;
} else {
var temp__4425__auto___8408 = cljs.core.seq.call(null,seq__8395_8399);
if(temp__4425__auto___8408){
var seq__8395_8409__$1 = temp__4425__auto___8408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8395_8409__$1)){
var c__7258__auto___8410 = cljs.core.chunk_first.call(null,seq__8395_8409__$1);
var G__8411 = cljs.core.chunk_rest.call(null,seq__8395_8409__$1);
var G__8412 = c__7258__auto___8410;
var G__8413 = cljs.core.count.call(null,c__7258__auto___8410);
var G__8414 = (0);
seq__8395_8399 = G__8411;
chunk__8396_8400 = G__8412;
count__8397_8401 = G__8413;
i__8398_8402 = G__8414;
continue;
} else {
var i_8415 = cljs.core.first.call(null,seq__8395_8409__$1);
f__$1.call(null,ith_item__$1.call(null,i_8415));

var G__8416 = cljs.core.next.call(null,seq__8395_8409__$1);
var G__8417 = null;
var G__8418 = (0);
var G__8419 = (0);
seq__8395_8399 = G__8416;
chunk__8396_8400 = G__8417;
count__8397_8401 = G__8418;
i__8398_8402 = G__8419;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=core.js.map