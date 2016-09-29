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

var G__10494 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__10492_SHARP_,p2__10493_SHARP_){
return cljs.core.assoc.call(null,p1__10492_SHARP_,p2__10493_SHARP_,p2__10493_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__10494;
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
}catch (e10496){if((e10496 instanceof Error)){
var _ = e10496;
return null;
} else {
throw e10496;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__10499 = c;
javelin.core.add_sync_BANG_.call(null,G__10499);

return G__10499;
} else {
var G__10500 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__10500));

return G__10500;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10509 = arguments.length;
var i__7514__auto___10510 = (0);
while(true){
if((i__7514__auto___10510 < len__7513__auto___10509)){
args__7520__auto__.push((arguments[i__7514__auto___10510]));

var G__10511 = (i__7514__auto___10510 + (1));
i__7514__auto___10510 = G__10511;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10503){
var vec__10504 = p__10503;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__10504,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__10505 = cljs.core.seq.call(null,srcs);
var chunk__10506 = null;
var count__10507 = (0);
var i__10508 = (0);
while(true){
if((i__10508 < count__10507)){
var src = cljs.core._nth.call(null,chunk__10506,i__10508);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__10512 = seq__10505;
var G__10513 = chunk__10506;
var G__10514 = count__10507;
var G__10515 = (i__10508 + (1));
seq__10505 = G__10512;
chunk__10506 = G__10513;
count__10507 = G__10514;
i__10508 = G__10515;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10505);
if(temp__4425__auto__){
var seq__10505__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10505__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__10505__$1);
var G__10516 = cljs.core.chunk_rest.call(null,seq__10505__$1);
var G__10517 = c__7258__auto__;
var G__10518 = cljs.core.count.call(null,c__7258__auto__);
var G__10519 = (0);
seq__10505 = G__10516;
chunk__10506 = G__10517;
count__10507 = G__10518;
i__10508 = G__10519;
continue;
} else {
var src = cljs.core.first.call(null,seq__10505__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__10520 = cljs.core.next.call(null,seq__10505__$1);
var G__10521 = null;
var G__10522 = (0);
var G__10523 = (0);
seq__10505 = G__10520;
chunk__10506 = G__10521;
count__10507 = G__10522;
i__10508 = G__10523;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq10501){
var G__10502 = cljs.core.first.call(null,seq10501);
var seq10501__$1 = cljs.core.next.call(null,seq10501);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10502,seq10501__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10542 = arguments.length;
var i__7514__auto___10543 = (0);
while(true){
if((i__7514__auto___10543 < len__7513__auto___10542)){
args__7520__auto__.push((arguments[i__7514__auto___10543]));

var G__10544 = (i__7514__auto___10543 + (1));
i__7514__auto___10543 = G__10544;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10528){
var vec__10529 = p__10528;
var f = cljs.core.nth.call(null,vec__10529,(0),null);
var sources = cljs.core.nth.call(null,vec__10529,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__10530_10545 = cljs.core.seq.call(null,this$.sources);
var chunk__10531_10546 = null;
var count__10532_10547 = (0);
var i__10533_10548 = (0);
while(true){
if((i__10533_10548 < count__10532_10547)){
var source_10549 = cljs.core._nth.call(null,chunk__10531_10546,i__10533_10548);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_10549))){
source_10549.sinks = cljs.core.conj.call(null,source_10549.sinks,this$);

if((source_10549.rank > this$.rank)){
var seq__10534_10550 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__10530_10545,chunk__10531_10546,count__10532_10547,i__10533_10548,source_10549,vec__10529,f,sources){
return (function (p1__10524_SHARP_){
return p1__10524_SHARP_.sinks;
});})(seq__10530_10545,chunk__10531_10546,count__10532_10547,i__10533_10548,source_10549,vec__10529,f,sources))
,source_10549));
var chunk__10535_10551 = null;
var count__10536_10552 = (0);
var i__10537_10553 = (0);
while(true){
if((i__10537_10553 < count__10536_10552)){
var dep_10554 = cljs.core._nth.call(null,chunk__10535_10551,i__10537_10553);
dep_10554.rank = javelin.core.next_rank.call(null);

var G__10555 = seq__10534_10550;
var G__10556 = chunk__10535_10551;
var G__10557 = count__10536_10552;
var G__10558 = (i__10537_10553 + (1));
seq__10534_10550 = G__10555;
chunk__10535_10551 = G__10556;
count__10536_10552 = G__10557;
i__10537_10553 = G__10558;
continue;
} else {
var temp__4425__auto___10559 = cljs.core.seq.call(null,seq__10534_10550);
if(temp__4425__auto___10559){
var seq__10534_10560__$1 = temp__4425__auto___10559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10534_10560__$1)){
var c__7258__auto___10561 = cljs.core.chunk_first.call(null,seq__10534_10560__$1);
var G__10562 = cljs.core.chunk_rest.call(null,seq__10534_10560__$1);
var G__10563 = c__7258__auto___10561;
var G__10564 = cljs.core.count.call(null,c__7258__auto___10561);
var G__10565 = (0);
seq__10534_10550 = G__10562;
chunk__10535_10551 = G__10563;
count__10536_10552 = G__10564;
i__10537_10553 = G__10565;
continue;
} else {
var dep_10566 = cljs.core.first.call(null,seq__10534_10560__$1);
dep_10566.rank = javelin.core.next_rank.call(null);

var G__10567 = cljs.core.next.call(null,seq__10534_10560__$1);
var G__10568 = null;
var G__10569 = (0);
var G__10570 = (0);
seq__10534_10550 = G__10567;
chunk__10535_10551 = G__10568;
count__10536_10552 = G__10569;
i__10537_10553 = G__10570;
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

var G__10571 = seq__10530_10545;
var G__10572 = chunk__10531_10546;
var G__10573 = count__10532_10547;
var G__10574 = (i__10533_10548 + (1));
seq__10530_10545 = G__10571;
chunk__10531_10546 = G__10572;
count__10532_10547 = G__10573;
i__10533_10548 = G__10574;
continue;
} else {
var temp__4425__auto___10575 = cljs.core.seq.call(null,seq__10530_10545);
if(temp__4425__auto___10575){
var seq__10530_10576__$1 = temp__4425__auto___10575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10530_10576__$1)){
var c__7258__auto___10577 = cljs.core.chunk_first.call(null,seq__10530_10576__$1);
var G__10578 = cljs.core.chunk_rest.call(null,seq__10530_10576__$1);
var G__10579 = c__7258__auto___10577;
var G__10580 = cljs.core.count.call(null,c__7258__auto___10577);
var G__10581 = (0);
seq__10530_10545 = G__10578;
chunk__10531_10546 = G__10579;
count__10532_10547 = G__10580;
i__10533_10548 = G__10581;
continue;
} else {
var source_10582 = cljs.core.first.call(null,seq__10530_10576__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_10582))){
source_10582.sinks = cljs.core.conj.call(null,source_10582.sinks,this$);

if((source_10582.rank > this$.rank)){
var seq__10538_10583 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__10530_10545,chunk__10531_10546,count__10532_10547,i__10533_10548,source_10582,seq__10530_10576__$1,temp__4425__auto___10575,vec__10529,f,sources){
return (function (p1__10524_SHARP_){
return p1__10524_SHARP_.sinks;
});})(seq__10530_10545,chunk__10531_10546,count__10532_10547,i__10533_10548,source_10582,seq__10530_10576__$1,temp__4425__auto___10575,vec__10529,f,sources))
,source_10582));
var chunk__10539_10584 = null;
var count__10540_10585 = (0);
var i__10541_10586 = (0);
while(true){
if((i__10541_10586 < count__10540_10585)){
var dep_10587 = cljs.core._nth.call(null,chunk__10539_10584,i__10541_10586);
dep_10587.rank = javelin.core.next_rank.call(null);

var G__10588 = seq__10538_10583;
var G__10589 = chunk__10539_10584;
var G__10590 = count__10540_10585;
var G__10591 = (i__10541_10586 + (1));
seq__10538_10583 = G__10588;
chunk__10539_10584 = G__10589;
count__10540_10585 = G__10590;
i__10541_10586 = G__10591;
continue;
} else {
var temp__4425__auto___10592__$1 = cljs.core.seq.call(null,seq__10538_10583);
if(temp__4425__auto___10592__$1){
var seq__10538_10593__$1 = temp__4425__auto___10592__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10538_10593__$1)){
var c__7258__auto___10594 = cljs.core.chunk_first.call(null,seq__10538_10593__$1);
var G__10595 = cljs.core.chunk_rest.call(null,seq__10538_10593__$1);
var G__10596 = c__7258__auto___10594;
var G__10597 = cljs.core.count.call(null,c__7258__auto___10594);
var G__10598 = (0);
seq__10538_10583 = G__10595;
chunk__10539_10584 = G__10596;
count__10540_10585 = G__10597;
i__10541_10586 = G__10598;
continue;
} else {
var dep_10599 = cljs.core.first.call(null,seq__10538_10593__$1);
dep_10599.rank = javelin.core.next_rank.call(null);

var G__10600 = cljs.core.next.call(null,seq__10538_10593__$1);
var G__10601 = null;
var G__10602 = (0);
var G__10603 = (0);
seq__10538_10583 = G__10600;
chunk__10539_10584 = G__10601;
count__10540_10585 = G__10602;
i__10541_10586 = G__10603;
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

var G__10604 = cljs.core.next.call(null,seq__10530_10576__$1);
var G__10605 = null;
var G__10606 = (0);
var G__10607 = (0);
seq__10530_10545 = G__10604;
chunk__10531_10546 = G__10605;
count__10532_10547 = G__10606;
i__10533_10548 = G__10607;
continue;
}
} else {
}
}
break;
}

var compute_10608 = ((function (vec__10529,f,sources){
return (function (p1__10525_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__10525_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__10525_SHARP_)));
});})(vec__10529,f,sources))
;
this$.thunk = ((function (compute_10608,vec__10529,f,sources){
return (function (){
return this$.state = compute_10608.call(null,this$.sources);
});})(compute_10608,vec__10529,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq10526){
var G__10527 = cljs.core.first.call(null,seq10526);
var seq10526__$1 = cljs.core.next.call(null,seq10526);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10527,seq10526__$1);
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
var seq__10609 = cljs.core.seq.call(null,self__.watches);
var chunk__10610 = null;
var count__10611 = (0);
var i__10612 = (0);
while(true){
if((i__10612 < count__10611)){
var vec__10613 = cljs.core._nth.call(null,chunk__10610,i__10612);
var key = cljs.core.nth.call(null,vec__10613,(0),null);
var f = cljs.core.nth.call(null,vec__10613,(1),null);
f.call(null,key,this$__$1,o,n);

var G__10615 = seq__10609;
var G__10616 = chunk__10610;
var G__10617 = count__10611;
var G__10618 = (i__10612 + (1));
seq__10609 = G__10615;
chunk__10610 = G__10616;
count__10611 = G__10617;
i__10612 = G__10618;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10609);
if(temp__4425__auto__){
var seq__10609__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10609__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__10609__$1);
var G__10619 = cljs.core.chunk_rest.call(null,seq__10609__$1);
var G__10620 = c__7258__auto__;
var G__10621 = cljs.core.count.call(null,c__7258__auto__);
var G__10622 = (0);
seq__10609 = G__10619;
chunk__10610 = G__10620;
count__10611 = G__10621;
i__10612 = G__10622;
continue;
} else {
var vec__10614 = cljs.core.first.call(null,seq__10609__$1);
var key = cljs.core.nth.call(null,vec__10614,(0),null);
var f = cljs.core.nth.call(null,vec__10614,(1),null);
f.call(null,key,this$__$1,o,n);

var G__10623 = cljs.core.next.call(null,seq__10609__$1);
var G__10624 = null;
var G__10625 = (0);
var G__10626 = (0);
seq__10609 = G__10623;
chunk__10610 = G__10624;
count__10611 = G__10625;
i__10612 = G__10626;
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
var G__10627__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__10627 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__10628__i = 0, G__10628__a = new Array(arguments.length -  0);
while (G__10628__i < G__10628__a.length) {G__10628__a[G__10628__i] = arguments[G__10628__i + 0]; ++G__10628__i;}
  sources = new cljs.core.IndexedSeq(G__10628__a,0);
} 
return G__10627__delegate.call(this,sources);};
G__10627.cljs$lang$maxFixedArity = 0;
G__10627.cljs$lang$applyTo = (function (arglist__10629){
var sources = cljs.core.seq(arglist__10629);
return G__10627__delegate(sources);
});
G__10627.cljs$core$IFn$_invoke$arity$variadic = G__10627__delegate;
return G__10627;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args10630 = [];
var len__7513__auto___10638 = arguments.length;
var i__7514__auto___10639 = (0);
while(true){
if((i__7514__auto___10639 < len__7513__auto___10638)){
args10630.push((arguments[i__7514__auto___10639]));

var G__10640 = (i__7514__auto___10639 + (1));
i__7514__auto___10639 = G__10640;
continue;
} else {
}
break;
}

var G__10634 = args10630.length;
switch (G__10634) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args10630.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__10635){
var map__10636 = p__10635;
var map__10636__$1 = ((((!((map__10636 == null)))?((((map__10636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10636):map__10636);
var meta = cljs.core.get.call(null,map__10636__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq10631){
var G__10632 = cljs.core.first.call(null,seq10631);
var seq10631__$1 = cljs.core.next.call(null,seq10631);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__10632,seq10631__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__10642_SHARP_){
var _STAR_tx_STAR_10645 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__10642_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_10645;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_10646 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_10646;
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
var len__7513__auto___10653 = arguments.length;
var i__7514__auto___10654 = (0);
while(true){
if((i__7514__auto___10654 < len__7513__auto___10653)){
args__7520__auto__.push((arguments[i__7514__auto___10654]));

var G__10655 = (i__7514__auto___10654 + (1));
i__7514__auto___10654 = G__10655;
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
return (function (p1__10647_SHARP_,p2__10648_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__10647_SHARP_,p2__10648_SHARP_),p2__10648_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__10650_SHARP_,p2__10649_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__10650_SHARP_,p2__10649_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10656__delegate = function (rest__10651_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__10651_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__10651_SHARP_);

return news;
};
var G__10656 = function (var_args){
var rest__10651_SHARP_ = null;
if (arguments.length > 0) {
var G__10657__i = 0, G__10657__a = new Array(arguments.length -  0);
while (G__10657__i < G__10657__a.length) {G__10657__a[G__10657__i] = arguments[G__10657__i + 0]; ++G__10657__i;}
  rest__10651_SHARP_ = new cljs.core.IndexedSeq(G__10657__a,0);
} 
return G__10656__delegate.call(this,rest__10651_SHARP_);};
G__10656.cljs$lang$maxFixedArity = 0;
G__10656.cljs$lang$applyTo = (function (arglist__10658){
var rest__10651_SHARP_ = cljs.core.seq(arglist__10658);
return G__10656__delegate(rest__10651_SHARP_);
});
G__10656.cljs$core$IFn$_invoke$arity$variadic = G__10656__delegate;
return G__10656;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq10652){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10652));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__10659_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__10659_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__10660_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__10660_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__10665_10669 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__10666_10670 = null;
var count__10667_10671 = (0);
var i__10668_10672 = (0);
while(true){
if((i__10668_10672 < count__10667_10671)){
var i_10673 = cljs.core._nth.call(null,chunk__10666_10670,i__10668_10672);
f__$1.call(null,ith_item__$1.call(null,i_10673));

var G__10674 = seq__10665_10669;
var G__10675 = chunk__10666_10670;
var G__10676 = count__10667_10671;
var G__10677 = (i__10668_10672 + (1));
seq__10665_10669 = G__10674;
chunk__10666_10670 = G__10675;
count__10667_10671 = G__10676;
i__10668_10672 = G__10677;
continue;
} else {
var temp__4425__auto___10678 = cljs.core.seq.call(null,seq__10665_10669);
if(temp__4425__auto___10678){
var seq__10665_10679__$1 = temp__4425__auto___10678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10665_10679__$1)){
var c__7258__auto___10680 = cljs.core.chunk_first.call(null,seq__10665_10679__$1);
var G__10681 = cljs.core.chunk_rest.call(null,seq__10665_10679__$1);
var G__10682 = c__7258__auto___10680;
var G__10683 = cljs.core.count.call(null,c__7258__auto___10680);
var G__10684 = (0);
seq__10665_10669 = G__10681;
chunk__10666_10670 = G__10682;
count__10667_10671 = G__10683;
i__10668_10672 = G__10684;
continue;
} else {
var i_10685 = cljs.core.first.call(null,seq__10665_10679__$1);
f__$1.call(null,ith_item__$1.call(null,i_10685));

var G__10686 = cljs.core.next.call(null,seq__10665_10679__$1);
var G__10687 = null;
var G__10688 = (0);
var G__10689 = (0);
seq__10665_10669 = G__10686;
chunk__10666_10670 = G__10687;
count__10667_10671 = G__10688;
i__10668_10672 = G__10689;
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