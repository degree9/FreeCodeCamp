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

var G__10367 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__10365_SHARP_,p2__10366_SHARP_){
return cljs.core.assoc.call(null,p1__10365_SHARP_,p2__10366_SHARP_,p2__10366_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__10367;
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
}catch (e10369){if((e10369 instanceof Error)){
var _ = e10369;
return null;
} else {
throw e10369;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__10372 = c;
javelin.core.add_sync_BANG_.call(null,G__10372);

return G__10372;
} else {
var G__10373 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__10373));

return G__10373;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10382 = arguments.length;
var i__7514__auto___10383 = (0);
while(true){
if((i__7514__auto___10383 < len__7513__auto___10382)){
args__7520__auto__.push((arguments[i__7514__auto___10383]));

var G__10384 = (i__7514__auto___10383 + (1));
i__7514__auto___10383 = G__10384;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10376){
var vec__10377 = p__10376;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__10377,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__10378 = cljs.core.seq.call(null,srcs);
var chunk__10379 = null;
var count__10380 = (0);
var i__10381 = (0);
while(true){
if((i__10381 < count__10380)){
var src = cljs.core._nth.call(null,chunk__10379,i__10381);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__10385 = seq__10378;
var G__10386 = chunk__10379;
var G__10387 = count__10380;
var G__10388 = (i__10381 + (1));
seq__10378 = G__10385;
chunk__10379 = G__10386;
count__10380 = G__10387;
i__10381 = G__10388;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10378);
if(temp__4425__auto__){
var seq__10378__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10378__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__10378__$1);
var G__10389 = cljs.core.chunk_rest.call(null,seq__10378__$1);
var G__10390 = c__7258__auto__;
var G__10391 = cljs.core.count.call(null,c__7258__auto__);
var G__10392 = (0);
seq__10378 = G__10389;
chunk__10379 = G__10390;
count__10380 = G__10391;
i__10381 = G__10392;
continue;
} else {
var src = cljs.core.first.call(null,seq__10378__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__10393 = cljs.core.next.call(null,seq__10378__$1);
var G__10394 = null;
var G__10395 = (0);
var G__10396 = (0);
seq__10378 = G__10393;
chunk__10379 = G__10394;
count__10380 = G__10395;
i__10381 = G__10396;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq10374){
var G__10375 = cljs.core.first.call(null,seq10374);
var seq10374__$1 = cljs.core.next.call(null,seq10374);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10375,seq10374__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10415 = arguments.length;
var i__7514__auto___10416 = (0);
while(true){
if((i__7514__auto___10416 < len__7513__auto___10415)){
args__7520__auto__.push((arguments[i__7514__auto___10416]));

var G__10417 = (i__7514__auto___10416 + (1));
i__7514__auto___10416 = G__10417;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10401){
var vec__10402 = p__10401;
var f = cljs.core.nth.call(null,vec__10402,(0),null);
var sources = cljs.core.nth.call(null,vec__10402,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__10403_10418 = cljs.core.seq.call(null,this$.sources);
var chunk__10404_10419 = null;
var count__10405_10420 = (0);
var i__10406_10421 = (0);
while(true){
if((i__10406_10421 < count__10405_10420)){
var source_10422 = cljs.core._nth.call(null,chunk__10404_10419,i__10406_10421);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_10422))){
source_10422.sinks = cljs.core.conj.call(null,source_10422.sinks,this$);

if((source_10422.rank > this$.rank)){
var seq__10407_10423 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__10403_10418,chunk__10404_10419,count__10405_10420,i__10406_10421,source_10422,vec__10402,f,sources){
return (function (p1__10397_SHARP_){
return p1__10397_SHARP_.sinks;
});})(seq__10403_10418,chunk__10404_10419,count__10405_10420,i__10406_10421,source_10422,vec__10402,f,sources))
,source_10422));
var chunk__10408_10424 = null;
var count__10409_10425 = (0);
var i__10410_10426 = (0);
while(true){
if((i__10410_10426 < count__10409_10425)){
var dep_10427 = cljs.core._nth.call(null,chunk__10408_10424,i__10410_10426);
dep_10427.rank = javelin.core.next_rank.call(null);

var G__10428 = seq__10407_10423;
var G__10429 = chunk__10408_10424;
var G__10430 = count__10409_10425;
var G__10431 = (i__10410_10426 + (1));
seq__10407_10423 = G__10428;
chunk__10408_10424 = G__10429;
count__10409_10425 = G__10430;
i__10410_10426 = G__10431;
continue;
} else {
var temp__4425__auto___10432 = cljs.core.seq.call(null,seq__10407_10423);
if(temp__4425__auto___10432){
var seq__10407_10433__$1 = temp__4425__auto___10432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10407_10433__$1)){
var c__7258__auto___10434 = cljs.core.chunk_first.call(null,seq__10407_10433__$1);
var G__10435 = cljs.core.chunk_rest.call(null,seq__10407_10433__$1);
var G__10436 = c__7258__auto___10434;
var G__10437 = cljs.core.count.call(null,c__7258__auto___10434);
var G__10438 = (0);
seq__10407_10423 = G__10435;
chunk__10408_10424 = G__10436;
count__10409_10425 = G__10437;
i__10410_10426 = G__10438;
continue;
} else {
var dep_10439 = cljs.core.first.call(null,seq__10407_10433__$1);
dep_10439.rank = javelin.core.next_rank.call(null);

var G__10440 = cljs.core.next.call(null,seq__10407_10433__$1);
var G__10441 = null;
var G__10442 = (0);
var G__10443 = (0);
seq__10407_10423 = G__10440;
chunk__10408_10424 = G__10441;
count__10409_10425 = G__10442;
i__10410_10426 = G__10443;
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

var G__10444 = seq__10403_10418;
var G__10445 = chunk__10404_10419;
var G__10446 = count__10405_10420;
var G__10447 = (i__10406_10421 + (1));
seq__10403_10418 = G__10444;
chunk__10404_10419 = G__10445;
count__10405_10420 = G__10446;
i__10406_10421 = G__10447;
continue;
} else {
var temp__4425__auto___10448 = cljs.core.seq.call(null,seq__10403_10418);
if(temp__4425__auto___10448){
var seq__10403_10449__$1 = temp__4425__auto___10448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10403_10449__$1)){
var c__7258__auto___10450 = cljs.core.chunk_first.call(null,seq__10403_10449__$1);
var G__10451 = cljs.core.chunk_rest.call(null,seq__10403_10449__$1);
var G__10452 = c__7258__auto___10450;
var G__10453 = cljs.core.count.call(null,c__7258__auto___10450);
var G__10454 = (0);
seq__10403_10418 = G__10451;
chunk__10404_10419 = G__10452;
count__10405_10420 = G__10453;
i__10406_10421 = G__10454;
continue;
} else {
var source_10455 = cljs.core.first.call(null,seq__10403_10449__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_10455))){
source_10455.sinks = cljs.core.conj.call(null,source_10455.sinks,this$);

if((source_10455.rank > this$.rank)){
var seq__10411_10456 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__10403_10418,chunk__10404_10419,count__10405_10420,i__10406_10421,source_10455,seq__10403_10449__$1,temp__4425__auto___10448,vec__10402,f,sources){
return (function (p1__10397_SHARP_){
return p1__10397_SHARP_.sinks;
});})(seq__10403_10418,chunk__10404_10419,count__10405_10420,i__10406_10421,source_10455,seq__10403_10449__$1,temp__4425__auto___10448,vec__10402,f,sources))
,source_10455));
var chunk__10412_10457 = null;
var count__10413_10458 = (0);
var i__10414_10459 = (0);
while(true){
if((i__10414_10459 < count__10413_10458)){
var dep_10460 = cljs.core._nth.call(null,chunk__10412_10457,i__10414_10459);
dep_10460.rank = javelin.core.next_rank.call(null);

var G__10461 = seq__10411_10456;
var G__10462 = chunk__10412_10457;
var G__10463 = count__10413_10458;
var G__10464 = (i__10414_10459 + (1));
seq__10411_10456 = G__10461;
chunk__10412_10457 = G__10462;
count__10413_10458 = G__10463;
i__10414_10459 = G__10464;
continue;
} else {
var temp__4425__auto___10465__$1 = cljs.core.seq.call(null,seq__10411_10456);
if(temp__4425__auto___10465__$1){
var seq__10411_10466__$1 = temp__4425__auto___10465__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10411_10466__$1)){
var c__7258__auto___10467 = cljs.core.chunk_first.call(null,seq__10411_10466__$1);
var G__10468 = cljs.core.chunk_rest.call(null,seq__10411_10466__$1);
var G__10469 = c__7258__auto___10467;
var G__10470 = cljs.core.count.call(null,c__7258__auto___10467);
var G__10471 = (0);
seq__10411_10456 = G__10468;
chunk__10412_10457 = G__10469;
count__10413_10458 = G__10470;
i__10414_10459 = G__10471;
continue;
} else {
var dep_10472 = cljs.core.first.call(null,seq__10411_10466__$1);
dep_10472.rank = javelin.core.next_rank.call(null);

var G__10473 = cljs.core.next.call(null,seq__10411_10466__$1);
var G__10474 = null;
var G__10475 = (0);
var G__10476 = (0);
seq__10411_10456 = G__10473;
chunk__10412_10457 = G__10474;
count__10413_10458 = G__10475;
i__10414_10459 = G__10476;
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

var G__10477 = cljs.core.next.call(null,seq__10403_10449__$1);
var G__10478 = null;
var G__10479 = (0);
var G__10480 = (0);
seq__10403_10418 = G__10477;
chunk__10404_10419 = G__10478;
count__10405_10420 = G__10479;
i__10406_10421 = G__10480;
continue;
}
} else {
}
}
break;
}

var compute_10481 = ((function (vec__10402,f,sources){
return (function (p1__10398_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__10398_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__10398_SHARP_)));
});})(vec__10402,f,sources))
;
this$.thunk = ((function (compute_10481,vec__10402,f,sources){
return (function (){
return this$.state = compute_10481.call(null,this$.sources);
});})(compute_10481,vec__10402,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq10399){
var G__10400 = cljs.core.first.call(null,seq10399);
var seq10399__$1 = cljs.core.next.call(null,seq10399);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10400,seq10399__$1);
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
var seq__10482 = cljs.core.seq.call(null,self__.watches);
var chunk__10483 = null;
var count__10484 = (0);
var i__10485 = (0);
while(true){
if((i__10485 < count__10484)){
var vec__10486 = cljs.core._nth.call(null,chunk__10483,i__10485);
var key = cljs.core.nth.call(null,vec__10486,(0),null);
var f = cljs.core.nth.call(null,vec__10486,(1),null);
f.call(null,key,this$__$1,o,n);

var G__10488 = seq__10482;
var G__10489 = chunk__10483;
var G__10490 = count__10484;
var G__10491 = (i__10485 + (1));
seq__10482 = G__10488;
chunk__10483 = G__10489;
count__10484 = G__10490;
i__10485 = G__10491;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10482);
if(temp__4425__auto__){
var seq__10482__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10482__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__10482__$1);
var G__10492 = cljs.core.chunk_rest.call(null,seq__10482__$1);
var G__10493 = c__7258__auto__;
var G__10494 = cljs.core.count.call(null,c__7258__auto__);
var G__10495 = (0);
seq__10482 = G__10492;
chunk__10483 = G__10493;
count__10484 = G__10494;
i__10485 = G__10495;
continue;
} else {
var vec__10487 = cljs.core.first.call(null,seq__10482__$1);
var key = cljs.core.nth.call(null,vec__10487,(0),null);
var f = cljs.core.nth.call(null,vec__10487,(1),null);
f.call(null,key,this$__$1,o,n);

var G__10496 = cljs.core.next.call(null,seq__10482__$1);
var G__10497 = null;
var G__10498 = (0);
var G__10499 = (0);
seq__10482 = G__10496;
chunk__10483 = G__10497;
count__10484 = G__10498;
i__10485 = G__10499;
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
var G__10500__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__10500 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__10501__i = 0, G__10501__a = new Array(arguments.length -  0);
while (G__10501__i < G__10501__a.length) {G__10501__a[G__10501__i] = arguments[G__10501__i + 0]; ++G__10501__i;}
  sources = new cljs.core.IndexedSeq(G__10501__a,0);
} 
return G__10500__delegate.call(this,sources);};
G__10500.cljs$lang$maxFixedArity = 0;
G__10500.cljs$lang$applyTo = (function (arglist__10502){
var sources = cljs.core.seq(arglist__10502);
return G__10500__delegate(sources);
});
G__10500.cljs$core$IFn$_invoke$arity$variadic = G__10500__delegate;
return G__10500;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args10503 = [];
var len__7513__auto___10511 = arguments.length;
var i__7514__auto___10512 = (0);
while(true){
if((i__7514__auto___10512 < len__7513__auto___10511)){
args10503.push((arguments[i__7514__auto___10512]));

var G__10513 = (i__7514__auto___10512 + (1));
i__7514__auto___10512 = G__10513;
continue;
} else {
}
break;
}

var G__10507 = args10503.length;
switch (G__10507) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args10503.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__10508){
var map__10509 = p__10508;
var map__10509__$1 = ((((!((map__10509 == null)))?((((map__10509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10509):map__10509);
var meta = cljs.core.get.call(null,map__10509__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq10504){
var G__10505 = cljs.core.first.call(null,seq10504);
var seq10504__$1 = cljs.core.next.call(null,seq10504);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__10505,seq10504__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__10515_SHARP_){
var _STAR_tx_STAR_10518 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__10515_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_10518;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_10519 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_10519;
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
var len__7513__auto___10526 = arguments.length;
var i__7514__auto___10527 = (0);
while(true){
if((i__7514__auto___10527 < len__7513__auto___10526)){
args__7520__auto__.push((arguments[i__7514__auto___10527]));

var G__10528 = (i__7514__auto___10527 + (1));
i__7514__auto___10527 = G__10528;
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
return (function (p1__10520_SHARP_,p2__10521_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__10520_SHARP_,p2__10521_SHARP_),p2__10521_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__10523_SHARP_,p2__10522_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__10523_SHARP_,p2__10522_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10529__delegate = function (rest__10524_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__10524_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__10524_SHARP_);

return news;
};
var G__10529 = function (var_args){
var rest__10524_SHARP_ = null;
if (arguments.length > 0) {
var G__10530__i = 0, G__10530__a = new Array(arguments.length -  0);
while (G__10530__i < G__10530__a.length) {G__10530__a[G__10530__i] = arguments[G__10530__i + 0]; ++G__10530__i;}
  rest__10524_SHARP_ = new cljs.core.IndexedSeq(G__10530__a,0);
} 
return G__10529__delegate.call(this,rest__10524_SHARP_);};
G__10529.cljs$lang$maxFixedArity = 0;
G__10529.cljs$lang$applyTo = (function (arglist__10531){
var rest__10524_SHARP_ = cljs.core.seq(arglist__10531);
return G__10529__delegate(rest__10524_SHARP_);
});
G__10529.cljs$core$IFn$_invoke$arity$variadic = G__10529__delegate;
return G__10529;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq10525){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10525));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__10532_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__10532_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__10533_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__10533_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__10538_10542 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__10539_10543 = null;
var count__10540_10544 = (0);
var i__10541_10545 = (0);
while(true){
if((i__10541_10545 < count__10540_10544)){
var i_10546 = cljs.core._nth.call(null,chunk__10539_10543,i__10541_10545);
f__$1.call(null,ith_item__$1.call(null,i_10546));

var G__10547 = seq__10538_10542;
var G__10548 = chunk__10539_10543;
var G__10549 = count__10540_10544;
var G__10550 = (i__10541_10545 + (1));
seq__10538_10542 = G__10547;
chunk__10539_10543 = G__10548;
count__10540_10544 = G__10549;
i__10541_10545 = G__10550;
continue;
} else {
var temp__4425__auto___10551 = cljs.core.seq.call(null,seq__10538_10542);
if(temp__4425__auto___10551){
var seq__10538_10552__$1 = temp__4425__auto___10551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10538_10552__$1)){
var c__7258__auto___10553 = cljs.core.chunk_first.call(null,seq__10538_10552__$1);
var G__10554 = cljs.core.chunk_rest.call(null,seq__10538_10552__$1);
var G__10555 = c__7258__auto___10553;
var G__10556 = cljs.core.count.call(null,c__7258__auto___10553);
var G__10557 = (0);
seq__10538_10542 = G__10554;
chunk__10539_10543 = G__10555;
count__10540_10544 = G__10556;
i__10541_10545 = G__10557;
continue;
} else {
var i_10558 = cljs.core.first.call(null,seq__10538_10552__$1);
f__$1.call(null,ith_item__$1.call(null,i_10558));

var G__10559 = cljs.core.next.call(null,seq__10538_10552__$1);
var G__10560 = null;
var G__10561 = (0);
var G__10562 = (0);
seq__10538_10542 = G__10559;
chunk__10539_10543 = G__10560;
count__10540_10544 = G__10561;
i__10541_10545 = G__10562;
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