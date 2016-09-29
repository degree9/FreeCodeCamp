// Compiled by ClojureScript 1.7.228 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__10831_SHARP_,p2__10832_SHARP_){
return cljs.core.assoc.call(null,p1__10831_SHARP_,p2__10832_SHARP_.getAttribute("static-id"),p2__10832_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args10833 = [];
var len__7513__auto___10836 = arguments.length;
var i__7514__auto___10837 = (0);
while(true){
if((i__7514__auto___10837 < len__7513__auto___10836)){
args10833.push((arguments[i__7514__auto___10837]));

var G__10838 = (i__7514__auto___10837 + (1));
i__7514__auto___10837 = G__10838;
continue;
} else {
}
break;
}

var G__10835 = args10833.length;
switch (G__10835) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10833.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__10842 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__10842,(0),null);
var more = cljs.core.nthnext.call(null,vec__10842,(1));
var vec__10843 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__10843,(0),null);
var f2 = cljs.core.nth.call(null,vec__10843,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("84deb243de174c918d6441026cfb673c")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__6455__auto__ = (function (){var and__6443__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__6443__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var G__10844 = (i + (1));
var G__10845 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__10844;
ret = G__10845;
continue;
}
break;
}
});

/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core.node[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$);
} else {
var m__7111__auto____$1 = (hoplon.core.node["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return hoplon.core.$text.call(null,this$);
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
return hoplon.core.$text.call(null,[cljs.core.str(this$)].join(''));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || (x.hoplon$core$INode$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x))){
return hoplon.core.node.call(null,x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__10858 = new$__$1;
var vec__10860 = G__10858;
var x = cljs.core.nth.call(null,vec__10860,(0),null);
var xs = cljs.core.nthnext.call(null,vec__10860,(1));
var G__10859 = hoplon.core.child_vec.call(null,this$);
var vec__10861 = G__10859;
var k = cljs.core.nth.call(null,vec__10861,(0),null);
var ks = cljs.core.nthnext.call(null,vec__10861,(1));
var kids = vec__10861;
var G__10858__$1 = G__10858;
var G__10859__$1 = G__10859;
while(true){
var vec__10862 = G__10858__$1;
var x__$1 = cljs.core.nth.call(null,vec__10862,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__10862,(1));
var vec__10863 = G__10859__$1;
var k__$1 = cljs.core.nth.call(null,vec__10863,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__10863,(1));
var kids__$1 = vec__10863;
if(cljs.core.truth_((function (){var or__6455__auto__ = x__$1;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return k__$1;
}
})())){
var G__10864 = xs__$1;
var G__10865 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node.call(null,x__$1));

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node.call(null,k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node.call(null,x__$1),hoplon.core.__GT_node.call(null,k__$1));

return kids__$2;
})()
)));
G__10858__$1 = G__10864;
G__10859__$1 = G__10865;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_10866 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_10866;

hoplon.core.do_watch.call(null,kids_10866,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids.call(null,this$,null,null);
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_10869 = kidfn.call(null,this$__$1);
var i_10870 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_10869));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_10869,i_10870,x__$1,this$__$1){
return (function (p1__10868_SHARP_,p2__10867_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_10869,cljs.core.assoc,i_10870,p2__10867_SHARP_);
});})(kids_10869,i_10870,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_10869,cljs.core.assoc,i_10870,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__10871_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__10871_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__10872_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__10872_SHARP_));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__10873_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__10873_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_10874 = cljs.core.keyword.call(null,k);
var attr_10875 = attrfn.call(null,this$__$1);
var has_QMARK__10876 = (function (){var and__6443__auto__ = attr_10875;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_10875),kk_10874);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__10876)){
cljs.core.swap_BANG_.call(null,attr_10875,cljs.core.assoc,kk_10874,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__10877_SHARP_){
return p1__10877_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__10878_SHARP_){
return p1__10878_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__10879_SHARP_){
return p1__10879_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__10880_SHARP_){
return p1__10880_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,kvs);
} else {
var m__7111__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,kvs);
} else {
var m__7111__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,child);
} else {
var m__7111__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,child);
} else {
var m__7111__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,new$,existing);
} else {
var m__7111__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,new$,existing);
} else {
var m__7111__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args10881 = [];
var len__7513__auto___10888 = arguments.length;
var i__7514__auto___10889 = (0);
while(true){
if((i__7514__auto___10889 < len__7513__auto___10888)){
args10881.push((arguments[i__7514__auto___10889]));

var G__10890 = (i__7514__auto___10889 + (1));
i__7514__auto___10889 = G__10890;
continue;
} else {
}
break;
}

var G__10887 = args10881.length;
switch (G__10887) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args10881.slice((3)),(0)));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7532__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10882){
var G__10883 = cljs.core.first.call(null,seq10882);
var seq10882__$1 = cljs.core.next.call(null,seq10882);
var G__10884 = cljs.core.first.call(null,seq10882__$1);
var seq10882__$2 = cljs.core.next.call(null,seq10882__$1);
var G__10885 = cljs.core.first.call(null,seq10882__$2);
var seq10882__$3 = cljs.core.next.call(null,seq10882__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10883,G__10884,G__10885,seq10882__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);
hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args10892 = [];
var len__7513__auto___10899 = arguments.length;
var i__7514__auto___10900 = (0);
while(true){
if((i__7514__auto___10900 < len__7513__auto___10899)){
args10892.push((arguments[i__7514__auto___10900]));

var G__10901 = (i__7514__auto___10900 + (1));
i__7514__auto___10900 = G__10901;
continue;
} else {
}
break;
}

var G__10898 = args10892.length;
switch (G__10898) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args10892.slice((3)),(0)));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7532__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10893){
var G__10894 = cljs.core.first.call(null,seq10893);
var seq10893__$1 = cljs.core.next.call(null,seq10893);
var G__10895 = cljs.core.first.call(null,seq10893__$1);
var seq10893__$2 = cljs.core.next.call(null,seq10893__$1);
var G__10896 = cljs.core.first.call(null,seq10893__$2);
var seq10893__$3 = cljs.core.next.call(null,seq10893__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10894,G__10895,G__10896,seq10893__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);
hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not.call(null,(window["Node"]));
hoplon.core._head_STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__10903_SHARP_){
return p1__10903_SHARP_.head;
}):(function (p1__10904_SHARP_){
return p1__10904_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10905_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__10905_SHARP_);
}catch (e10906){if((e10906 instanceof Error)){
var _ = e10906;
return null;
} else {
throw e10906;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10907_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__10907_SHARP_);
}catch (e10908){if((e10908 instanceof Error)){
var _ = e10908;
return null;
} else {
throw e10908;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args10909 = [];
var len__7513__auto___10913 = arguments.length;
var i__7514__auto___10914 = (0);
while(true){
if((i__7514__auto___10914 < len__7513__auto___10913)){
args10909.push((arguments[i__7514__auto___10914]));

var G__10915 = (i__7514__auto___10914 + (1));
i__7514__auto___10914 = G__10915;
continue;
} else {
}
break;
}

var G__10911 = args10909.length;
switch (G__10911) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10909.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e10912){if((e10912 instanceof Error)){
var _ = e10912;
return not_found;
} else {
throw e10912;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args10917 = [];
var len__7513__auto___10920 = arguments.length;
var i__7514__auto___10921 = (0);
while(true){
if((i__7514__auto___10921 < len__7513__auto___10920)){
args10917.push((arguments[i__7514__auto___10921]));

var G__10922 = (i__7514__auto___10921 + (1));
i__7514__auto___10921 = G__10922;
continue;
} else {
}
break;
}

var G__10919 = args10917.length;
switch (G__10919) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10917.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,(function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__10932 = args;
var vec__10933 = G__10932;
var arg = cljs.core.nth.call(null,vec__10933,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__10933,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__10932__$1 = G__10932;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10934 = G__10932__$1;
var arg__$1 = cljs.core.nth.call(null,vec__10934,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__10934,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__10935 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__10932__$1,attr__$2,kids__$2,vec__10934,arg__$1,args__$2,attr,kids,G__10932,vec__10933,arg,args__$1){
return (function (p1__10924_SHARP_,p2__10925_SHARP_,p3__10926_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__10924_SHARP_,p2__10925_SHARP_,p3__10926_SHARP_);
});})(attr__$1,kids__$1,G__10932__$1,attr__$2,kids__$2,vec__10934,arg__$1,args__$2,attr,kids,G__10932,vec__10933,arg,args__$1))
,attr__$2,arg__$1);
var G__10936 = kids__$2;
var G__10937 = args__$2;
attr__$1 = G__10935;
kids__$1 = G__10936;
G__10932__$1 = G__10937;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__10938 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__10939 = kids__$2;
var G__10940 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__10938;
kids__$1 = G__10939;
G__10932__$1 = G__10940;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__10941 = attr__$2;
var G__10942 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__10943 = args__$2;
attr__$1 = G__10941;
kids__$1 = G__10942;
G__10932__$1 = G__10943;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__10944 = attr__$2;
var G__10945 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__10946 = args__$2;
attr__$1 = G__10944;
kids__$1 = G__10945;
G__10932__$1 = G__10946;
continue;
} else {
var G__10947 = attr__$2;
var G__10948 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__10949 = args__$2;
attr__$1 = G__10947;
kids__$1 = G__10948;
G__10932__$1 = G__10949;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,v))){
hoplon.core.do_watch.call(null,v,((function (this$__$3,this$__$1){
return (function (p1__10951_SHARP_,p2__10950_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__10950_SHARP_);
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
hoplon.core.on_BANG_.call(null,this$__$3,k,v);
} else {
hoplon.core.do_BANG_.call(null,this$__$3,k,v);

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10952){
var vec__10958 = p__10952;
var child_cell = cljs.core.nth.call(null,vec__10958,(0),null);
var _ = cljs.core.nthnext.call(null,vec__10958,(1));
var kids = vec__10958;
var this$__$1 = this$;
var seq__10959_10963 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__10960_10964 = null;
var count__10961_10965 = (0);
var i__10962_10966 = (0);
while(true){
if((i__10962_10966 < count__10961_10965)){
var x_10967 = cljs.core._nth.call(null,chunk__10960_10964,i__10962_10966);
var temp__4425__auto___10968 = hoplon.core.__GT_node.call(null,x_10967);
if(cljs.core.truth_(temp__4425__auto___10968)){
var x_10969__$1 = temp__4425__auto___10968;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10969__$1);
} else {
}

var G__10970 = seq__10959_10963;
var G__10971 = chunk__10960_10964;
var G__10972 = count__10961_10965;
var G__10973 = (i__10962_10966 + (1));
seq__10959_10963 = G__10970;
chunk__10960_10964 = G__10971;
count__10961_10965 = G__10972;
i__10962_10966 = G__10973;
continue;
} else {
var temp__4425__auto___10974 = cljs.core.seq.call(null,seq__10959_10963);
if(temp__4425__auto___10974){
var seq__10959_10975__$1 = temp__4425__auto___10974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10959_10975__$1)){
var c__7258__auto___10976 = cljs.core.chunk_first.call(null,seq__10959_10975__$1);
var G__10977 = cljs.core.chunk_rest.call(null,seq__10959_10975__$1);
var G__10978 = c__7258__auto___10976;
var G__10979 = cljs.core.count.call(null,c__7258__auto___10976);
var G__10980 = (0);
seq__10959_10963 = G__10977;
chunk__10960_10964 = G__10978;
count__10961_10965 = G__10979;
i__10962_10966 = G__10980;
continue;
} else {
var x_10981 = cljs.core.first.call(null,seq__10959_10975__$1);
var temp__4425__auto___10982__$1 = hoplon.core.__GT_node.call(null,x_10981);
if(cljs.core.truth_(temp__4425__auto___10982__$1)){
var x_10983__$1 = temp__4425__auto___10982__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10983__$1);
} else {
}

var G__10984 = cljs.core.next.call(null,seq__10959_10975__$1);
var G__10985 = null;
var G__10986 = (0);
var G__10987 = (0);
seq__10959_10963 = G__10984;
chunk__10960_10964 = G__10985;
count__10961_10965 = G__10986;
i__10962_10966 = G__10987;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__11008__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10989 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10989,(0),null);
var kids = cljs.core.nth.call(null,vec__10989,(1),null);
var G__10990 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10990,attr);

hoplon.core.add_children_BANG_.call(null,G__10990,kids);

return G__10990;
};
var G__11008 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__11009__i = 0, G__11009__a = new Array(arguments.length -  1);
while (G__11009__i < G__11009__a.length) {G__11009__a[G__11009__i] = arguments[G__11009__i + 1]; ++G__11009__i;}
  args = new cljs.core.IndexedSeq(G__11009__a,0);
} 
return G__11008__delegate.call(this,self__,args);};
G__11008.cljs$lang$maxFixedArity = 1;
G__11008.cljs$lang$applyTo = (function (arglist__11010){
var self__ = cljs.core.first(arglist__11010);
var args = cljs.core.rest(arglist__11010);
return G__11008__delegate(self__,args);
});
G__11008.cljs$core$IFn$_invoke$arity$variadic = G__11008__delegate;
return G__11008;
})()
;

Element.prototype.apply = (function (self__,args10988){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10988)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11011__delegate = function (args){
var this$ = this;
var vec__10991 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10991,(0),null);
var kids = cljs.core.nth.call(null,vec__10991,(1),null);
var G__10992 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10992,attr);

hoplon.core.add_children_BANG_.call(null,G__10992,kids);

return G__10992;
};
var G__11011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11012__i = 0, G__11012__a = new Array(arguments.length -  0);
while (G__11012__i < G__11012__a.length) {G__11012__a[G__11012__i] = arguments[G__11012__i + 0]; ++G__11012__i;}
  args = new cljs.core.IndexedSeq(G__11012__a,0);
} 
return G__11011__delegate.call(this,args);};
G__11011.cljs$lang$maxFixedArity = 0;
G__11011.cljs$lang$applyTo = (function (arglist__11013){
var args = cljs.core.seq(arglist__11013);
return G__11011__delegate(args);
});
G__11011.cljs$core$IFn$_invoke$arity$variadic = G__11011__delegate;
return G__11011;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10993 = cljs.core.seq.call(null,kvs);
var chunk__10995 = null;
var count__10996 = (0);
var i__10997 = (0);
while(true){
if((i__10997 < count__10996)){
var vec__10999 = cljs.core._nth.call(null,chunk__10995,i__10997);
var k = cljs.core.nth.call(null,vec__10999,(0),null);
var v = cljs.core.nth.call(null,vec__10999,(1),null);
var k_11014__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_11014__$1);
} else {
e.setAttribute(k_11014__$1,((cljs.core._EQ_.call(null,true,v))?k_11014__$1:v));
}

var G__11015 = seq__10993;
var G__11016 = chunk__10995;
var G__11017 = count__10996;
var G__11018 = (i__10997 + (1));
seq__10993 = G__11015;
chunk__10995 = G__11016;
count__10996 = G__11017;
i__10997 = G__11018;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10993);
if(temp__4425__auto__){
var seq__10993__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10993__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__10993__$1);
var G__11019 = cljs.core.chunk_rest.call(null,seq__10993__$1);
var G__11020 = c__7258__auto__;
var G__11021 = cljs.core.count.call(null,c__7258__auto__);
var G__11022 = (0);
seq__10993 = G__11019;
chunk__10995 = G__11020;
count__10996 = G__11021;
i__10997 = G__11022;
continue;
} else {
var vec__11000 = cljs.core.first.call(null,seq__10993__$1);
var k = cljs.core.nth.call(null,vec__11000,(0),null);
var v = cljs.core.nth.call(null,vec__11000,(1),null);
var k_11023__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_11023__$1);
} else {
e.setAttribute(k_11023__$1,((cljs.core._EQ_.call(null,true,v))?k_11023__$1:v));
}

var G__11024 = cljs.core.next.call(null,seq__10993__$1);
var G__11025 = null;
var G__11026 = (0);
var G__11027 = (0);
seq__10993 = G__11024;
chunk__10995 = G__11025;
count__10996 = G__11026;
i__10997 = G__11027;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__11001 = cljs.core.seq.call(null,kvs);
var chunk__11002 = null;
var count__11003 = (0);
var i__11004 = (0);
while(true){
if((i__11004 < count__11003)){
var vec__11005 = cljs.core._nth.call(null,chunk__11002,i__11004);
var k = cljs.core.nth.call(null,vec__11005,(0),null);
var v = cljs.core.nth.call(null,vec__11005,(1),null);
(e["style"][cljs.core.name.call(null,k)] = [cljs.core.str(v)].join(''));

var G__11028 = seq__11001;
var G__11029 = chunk__11002;
var G__11030 = count__11003;
var G__11031 = (i__11004 + (1));
seq__11001 = G__11028;
chunk__11002 = G__11029;
count__11003 = G__11030;
i__11004 = G__11031;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11001);
if(temp__4425__auto__){
var seq__11001__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11001__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__11001__$1);
var G__11032 = cljs.core.chunk_rest.call(null,seq__11001__$1);
var G__11033 = c__7258__auto__;
var G__11034 = cljs.core.count.call(null,c__7258__auto__);
var G__11035 = (0);
seq__11001 = G__11032;
chunk__11002 = G__11033;
count__11003 = G__11034;
i__11004 = G__11035;
continue;
} else {
var vec__11006 = cljs.core.first.call(null,seq__11001__$1);
var k = cljs.core.nth.call(null,vec__11006,(0),null);
var v = cljs.core.nth.call(null,vec__11006,(1),null);
(e["style"][cljs.core.name.call(null,k)] = [cljs.core.str(v)].join(''));

var G__11036 = cljs.core.next.call(null,seq__11001__$1);
var G__11037 = null;
var G__11038 = (0);
var G__11039 = (0);
seq__11001 = G__11036;
chunk__11002 = G__11037;
count__11003 = G__11038;
i__11004 = G__11039;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e11007){if((e11007 instanceof Error)){
var _ = e11007;
return null;
} else {
throw e11007;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__11042__delegate = function (args){
var vec__11041 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__11041,(0),null);
var kids = cljs.core.nth.call(null,vec__11041,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__11042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11043__i = 0, G__11043__a = new Array(arguments.length -  0);
while (G__11043__i < G__11043__a.length) {G__11043__a[G__11043__i] = arguments[G__11043__i + 0]; ++G__11043__i;}
  args = new cljs.core.IndexedSeq(G__11043__a,0);
} 
return G__11042__delegate.call(this,args);};
G__11042.cljs$lang$maxFixedArity = 0;
G__11042.cljs$lang$applyTo = (function (arglist__11044){
var args = cljs.core.seq(arglist__11044);
return G__11042__delegate(args);
});
G__11042.cljs$core$IFn$_invoke$arity$variadic = G__11042__delegate;
return G__11042;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__11048__delegate = function (rest__11045_SHARP_){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),rest__11045_SHARP_);
};
var G__11048 = function (var_args){
var rest__11045_SHARP_ = null;
if (arguments.length > 0) {
var G__11049__i = 0, G__11049__a = new Array(arguments.length -  0);
while (G__11049__i < G__11049__a.length) {G__11049__a[G__11049__i] = arguments[G__11049__i + 0]; ++G__11049__i;}
  rest__11045_SHARP_ = new cljs.core.IndexedSeq(G__11049__a,0);
} 
return G__11048__delegate.call(this,rest__11045_SHARP_);};
G__11048.cljs$lang$maxFixedArity = 0;
G__11048.cljs$lang$applyTo = (function (arglist__11050){
var rest__11045_SHARP_ = cljs.core.seq(arglist__11050);
return G__11048__delegate(rest__11045_SHARP_);
});
G__11048.cljs$core$IFn$_invoke$arity$variadic = G__11048__delegate;
return G__11048;
})()
;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__11051__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e11047){if((e11047 instanceof Error)){
var _ = e11047;
return cljs.core.apply.call(null,hoplon$core$make_elem_ctor.call(null,"div"),args);
} else {
throw e11047;

}
}};
var G__11051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11052__i = 0, G__11052__a = new Array(arguments.length -  0);
while (G__11052__i < G__11052__a.length) {G__11052__a[G__11052__i] = arguments[G__11052__i + 0]; ++G__11052__i;}
  args = new cljs.core.IndexedSeq(G__11052__a,0);
} 
return G__11051__delegate.call(this,args);};
G__11051.cljs$lang$maxFixedArity = 0;
G__11051.cljs$lang$applyTo = (function (arglist__11053){
var args = cljs.core.seq(arglist__11053);
return G__11051__delegate(args);
});
G__11051.cljs$core$IFn$_invoke$arity$variadic = G__11051__delegate;
return G__11051;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7520__auto__ = [];
var len__7513__auto___11055 = arguments.length;
var i__7514__auto___11056 = (0);
while(true){
if((i__7514__auto___11056 < len__7513__auto___11055)){
args__7520__auto__.push((arguments[i__7514__auto___11056]));

var G__11057 = (i__7514__auto___11056 + (1));
i__7514__auto___11056 = G__11057;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.nth.call(null,hoplon.core.parse_args.call(null,args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq11054){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11054));
});
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,document.body);
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,hoplon.core._head_STAR_.call(null,document));
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor.call(null,"dialog");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor.call(null,"multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.picture = hoplon.core.make_elem_ctor.call(null,"picture");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor.call(null,"rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.shadow = hoplon.core.make_elem_ctor.call(null,"shadow");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.template = hoplon.core.make_elem_ctor.call(null,"template");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__11058_SHARP_){
return document.createTextNode(p1__11058_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__11059_SHARP_){
return document.createComment(p1__11059_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return document.body.addEventListener("submit",(function (p1__11060_SHARP_){
var e = p1__11060_SHARP_.target;
if(cljs.core.truth_((function (){var or__6455__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__11060_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7372__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function (elem,key,val){
var temp__4423__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7372__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function (elem,key,val){
var temp__4423__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__11072,G__11073){
return G__11072.call(null,G__11073);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__11061_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__11075,G__11076,G__11074){
return G__11074.call(null,G__11075,G__11076);
});})(on_deck,items_seq))
).call(null,items_seq,p1__11061_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__11062_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__11062_SHARP_));
cljs.core.swap_BANG_.call(null,p1__11062_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__11077 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__11078 = null;
var count__11079 = (0);
var i__11080 = (0);
while(true){
if((i__11080 < count__11079)){
var i = cljs.core._nth.call(null,chunk__11078,i__11080);
var e_11081 = (function (){var or__6455__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11081);

var G__11082 = seq__11077;
var G__11083 = chunk__11078;
var G__11084 = count__11079;
var G__11085 = (i__11080 + (1));
seq__11077 = G__11082;
chunk__11078 = G__11083;
count__11079 = G__11084;
i__11080 = G__11085;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11077);
if(temp__4425__auto__){
var seq__11077__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11077__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__11077__$1);
var G__11086 = cljs.core.chunk_rest.call(null,seq__11077__$1);
var G__11087 = c__7258__auto__;
var G__11088 = cljs.core.count.call(null,c__7258__auto__);
var G__11089 = (0);
seq__11077 = G__11086;
chunk__11078 = G__11087;
count__11079 = G__11088;
i__11080 = G__11089;
continue;
} else {
var i = cljs.core.first.call(null,seq__11077__$1);
var e_11090 = (function (){var or__6455__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11090);

var G__11091 = cljs.core.next.call(null,seq__11077__$1);
var G__11092 = null;
var G__11093 = (0);
var G__11094 = (0);
seq__11077 = G__11091;
chunk__11078 = G__11092;
count__11079 = G__11093;
i__11080 = G__11094;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7358__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7358__auto__)){
var e_11095 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_11095);

var G__11096 = (_ + (1));
_ = G__11096;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7520__auto__ = [];
var len__7513__auto___11103 = arguments.length;
var i__7514__auto___11104 = (0);
while(true){
if((i__7514__auto___11104 < len__7513__auto___11103)){
args__7520__auto__.push((arguments[i__7514__auto___11104]));

var G__11105 = (i__7514__auto___11104 + (1));
i__7514__auto___11104 = G__11105;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11098){
var vec__11099 = p__11098;
var default$ = cljs.core.nth.call(null,vec__11099,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__11099,default$){
return (function (G__11100,G__11102,G__11101){
var or__6455__auto__ = (function (){var and__6443__auto__ = G__11100.call(null,G__11101);
if(cljs.core.truth_(and__6443__auto__)){
return G__11101;
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return G__11102;
}
});})(c,vec__11099,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__11099,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__11099,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq11097){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11097));
});

//# sourceMappingURL=core.js.map