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
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__10958_SHARP_,p2__10959_SHARP_){
return cljs.core.assoc.call(null,p1__10958_SHARP_,p2__10959_SHARP_.getAttribute("static-id"),p2__10959_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args10960 = [];
var len__7513__auto___10963 = arguments.length;
var i__7514__auto___10964 = (0);
while(true){
if((i__7514__auto___10964 < len__7513__auto___10963)){
args10960.push((arguments[i__7514__auto___10964]));

var G__10965 = (i__7514__auto___10964 + (1));
i__7514__auto___10964 = G__10965;
continue;
} else {
}
break;
}

var G__10962 = args10960.length;
switch (G__10962) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10960.length)].join('')));

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
var vec__10969 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__10969,(0),null);
var more = cljs.core.nthnext.call(null,vec__10969,(1));
var vec__10970 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__10970,(0),null);
var f2 = cljs.core.nth.call(null,vec__10970,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("f5e2bff0e0fe4c6891d5faf0ee2ef5b1")].join(''),f2], null)))));
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
var G__10971 = (i + (1));
var G__10972 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__10971;
ret = G__10972;
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
var G__10985 = new$__$1;
var vec__10987 = G__10985;
var x = cljs.core.nth.call(null,vec__10987,(0),null);
var xs = cljs.core.nthnext.call(null,vec__10987,(1));
var G__10986 = hoplon.core.child_vec.call(null,this$);
var vec__10988 = G__10986;
var k = cljs.core.nth.call(null,vec__10988,(0),null);
var ks = cljs.core.nthnext.call(null,vec__10988,(1));
var kids = vec__10988;
var G__10985__$1 = G__10985;
var G__10986__$1 = G__10986;
while(true){
var vec__10989 = G__10985__$1;
var x__$1 = cljs.core.nth.call(null,vec__10989,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__10989,(1));
var vec__10990 = G__10986__$1;
var k__$1 = cljs.core.nth.call(null,vec__10990,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__10990,(1));
var kids__$1 = vec__10990;
if(cljs.core.truth_((function (){var or__6455__auto__ = x__$1;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return k__$1;
}
})())){
var G__10991 = xs__$1;
var G__10992 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
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
G__10985__$1 = G__10991;
G__10986__$1 = G__10992;
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
var kids_10993 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_10993;

hoplon.core.do_watch.call(null,kids_10993,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
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

var kids_10996 = kidfn.call(null,this$__$1);
var i_10997 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_10996));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_10996,i_10997,x__$1,this$__$1){
return (function (p1__10995_SHARP_,p2__10994_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_10996,cljs.core.assoc,i_10997,p2__10994_SHARP_);
});})(kids_10996,i_10997,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_10996,cljs.core.assoc,i_10997,x__$1);
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
return (function (p1__10998_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__10998_SHARP_));
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
return (function (p1__10999_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__10999_SHARP_));
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
return (function (p1__11000_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__11000_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_11001 = cljs.core.keyword.call(null,k);
var attr_11002 = attrfn.call(null,this$__$1);
var has_QMARK__11003 = (function (){var and__6443__auto__ = attr_11002;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_11002),kk_11001);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__11003)){
cljs.core.swap_BANG_.call(null,attr_11002,cljs.core.assoc,kk_11001,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__11004_SHARP_){
return p1__11004_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__11005_SHARP_){
return p1__11005_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__11006_SHARP_){
return p1__11006_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__11007_SHARP_){
return p1__11007_SHARP_.hoplonKids;
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
var args11008 = [];
var len__7513__auto___11015 = arguments.length;
var i__7514__auto___11016 = (0);
while(true){
if((i__7514__auto___11016 < len__7513__auto___11015)){
args11008.push((arguments[i__7514__auto___11016]));

var G__11017 = (i__7514__auto___11016 + (1));
i__7514__auto___11016 = G__11017;
continue;
} else {
}
break;
}

var G__11014 = args11008.length;
switch (G__11014) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args11008.slice((3)),(0)));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7532__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq11009){
var G__11010 = cljs.core.first.call(null,seq11009);
var seq11009__$1 = cljs.core.next.call(null,seq11009);
var G__11011 = cljs.core.first.call(null,seq11009__$1);
var seq11009__$2 = cljs.core.next.call(null,seq11009__$1);
var G__11012 = cljs.core.first.call(null,seq11009__$2);
var seq11009__$3 = cljs.core.next.call(null,seq11009__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11010,G__11011,G__11012,seq11009__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);
hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args11019 = [];
var len__7513__auto___11026 = arguments.length;
var i__7514__auto___11027 = (0);
while(true){
if((i__7514__auto___11027 < len__7513__auto___11026)){
args11019.push((arguments[i__7514__auto___11027]));

var G__11028 = (i__7514__auto___11027 + (1));
i__7514__auto___11027 = G__11028;
continue;
} else {
}
break;
}

var G__11025 = args11019.length;
switch (G__11025) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args11019.slice((3)),(0)));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7532__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq11020){
var G__11021 = cljs.core.first.call(null,seq11020);
var seq11020__$1 = cljs.core.next.call(null,seq11020);
var G__11022 = cljs.core.first.call(null,seq11020__$1);
var seq11020__$2 = cljs.core.next.call(null,seq11020__$1);
var G__11023 = cljs.core.first.call(null,seq11020__$2);
var seq11020__$3 = cljs.core.next.call(null,seq11020__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11021,G__11022,G__11023,seq11020__$3);
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
hoplon.core._head_STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__11030_SHARP_){
return p1__11030_SHARP_.head;
}):(function (p1__11031_SHARP_){
return p1__11031_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11032_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__11032_SHARP_);
}catch (e11033){if((e11033 instanceof Error)){
var _ = e11033;
return null;
} else {
throw e11033;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11034_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__11034_SHARP_);
}catch (e11035){if((e11035 instanceof Error)){
var _ = e11035;
return null;
} else {
throw e11035;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args11036 = [];
var len__7513__auto___11040 = arguments.length;
var i__7514__auto___11041 = (0);
while(true){
if((i__7514__auto___11041 < len__7513__auto___11040)){
args11036.push((arguments[i__7514__auto___11041]));

var G__11042 = (i__7514__auto___11041 + (1));
i__7514__auto___11041 = G__11042;
continue;
} else {
}
break;
}

var G__11038 = args11036.length;
switch (G__11038) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11036.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e11039){if((e11039 instanceof Error)){
var _ = e11039;
return not_found;
} else {
throw e11039;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args11044 = [];
var len__7513__auto___11047 = arguments.length;
var i__7514__auto___11048 = (0);
while(true){
if((i__7514__auto___11048 < len__7513__auto___11047)){
args11044.push((arguments[i__7514__auto___11048]));

var G__11049 = (i__7514__auto___11048 + (1));
i__7514__auto___11048 = G__11049;
continue;
} else {
}
break;
}

var G__11046 = args11044.length;
switch (G__11046) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11044.length)].join('')));

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
var G__11059 = args;
var vec__11060 = G__11059;
var arg = cljs.core.nth.call(null,vec__11060,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__11060,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__11059__$1 = G__11059;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__11061 = G__11059__$1;
var arg__$1 = cljs.core.nth.call(null,vec__11061,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__11061,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__11062 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__11059__$1,attr__$2,kids__$2,vec__11061,arg__$1,args__$2,attr,kids,G__11059,vec__11060,arg,args__$1){
return (function (p1__11051_SHARP_,p2__11052_SHARP_,p3__11053_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__11051_SHARP_,p2__11052_SHARP_,p3__11053_SHARP_);
});})(attr__$1,kids__$1,G__11059__$1,attr__$2,kids__$2,vec__11061,arg__$1,args__$2,attr,kids,G__11059,vec__11060,arg,args__$1))
,attr__$2,arg__$1);
var G__11063 = kids__$2;
var G__11064 = args__$2;
attr__$1 = G__11062;
kids__$1 = G__11063;
G__11059__$1 = G__11064;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__11065 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__11066 = kids__$2;
var G__11067 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__11065;
kids__$1 = G__11066;
G__11059__$1 = G__11067;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__11068 = attr__$2;
var G__11069 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__11070 = args__$2;
attr__$1 = G__11068;
kids__$1 = G__11069;
G__11059__$1 = G__11070;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__11071 = attr__$2;
var G__11072 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__11073 = args__$2;
attr__$1 = G__11071;
kids__$1 = G__11072;
G__11059__$1 = G__11073;
continue;
} else {
var G__11074 = attr__$2;
var G__11075 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__11076 = args__$2;
attr__$1 = G__11074;
kids__$1 = G__11075;
G__11059__$1 = G__11076;
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
return (function (p1__11078_SHARP_,p2__11077_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__11077_SHARP_);
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__11079){
var vec__11085 = p__11079;
var child_cell = cljs.core.nth.call(null,vec__11085,(0),null);
var _ = cljs.core.nthnext.call(null,vec__11085,(1));
var kids = vec__11085;
var this$__$1 = this$;
var seq__11086_11090 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__11087_11091 = null;
var count__11088_11092 = (0);
var i__11089_11093 = (0);
while(true){
if((i__11089_11093 < count__11088_11092)){
var x_11094 = cljs.core._nth.call(null,chunk__11087_11091,i__11089_11093);
var temp__4425__auto___11095 = hoplon.core.__GT_node.call(null,x_11094);
if(cljs.core.truth_(temp__4425__auto___11095)){
var x_11096__$1 = temp__4425__auto___11095;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_11096__$1);
} else {
}

var G__11097 = seq__11086_11090;
var G__11098 = chunk__11087_11091;
var G__11099 = count__11088_11092;
var G__11100 = (i__11089_11093 + (1));
seq__11086_11090 = G__11097;
chunk__11087_11091 = G__11098;
count__11088_11092 = G__11099;
i__11089_11093 = G__11100;
continue;
} else {
var temp__4425__auto___11101 = cljs.core.seq.call(null,seq__11086_11090);
if(temp__4425__auto___11101){
var seq__11086_11102__$1 = temp__4425__auto___11101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11086_11102__$1)){
var c__7258__auto___11103 = cljs.core.chunk_first.call(null,seq__11086_11102__$1);
var G__11104 = cljs.core.chunk_rest.call(null,seq__11086_11102__$1);
var G__11105 = c__7258__auto___11103;
var G__11106 = cljs.core.count.call(null,c__7258__auto___11103);
var G__11107 = (0);
seq__11086_11090 = G__11104;
chunk__11087_11091 = G__11105;
count__11088_11092 = G__11106;
i__11089_11093 = G__11107;
continue;
} else {
var x_11108 = cljs.core.first.call(null,seq__11086_11102__$1);
var temp__4425__auto___11109__$1 = hoplon.core.__GT_node.call(null,x_11108);
if(cljs.core.truth_(temp__4425__auto___11109__$1)){
var x_11110__$1 = temp__4425__auto___11109__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_11110__$1);
} else {
}

var G__11111 = cljs.core.next.call(null,seq__11086_11102__$1);
var G__11112 = null;
var G__11113 = (0);
var G__11114 = (0);
seq__11086_11090 = G__11111;
chunk__11087_11091 = G__11112;
count__11088_11092 = G__11113;
i__11089_11093 = G__11114;
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
var G__11135__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__11116 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__11116,(0),null);
var kids = cljs.core.nth.call(null,vec__11116,(1),null);
var G__11117 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__11117,attr);

hoplon.core.add_children_BANG_.call(null,G__11117,kids);

return G__11117;
};
var G__11135 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__11136__i = 0, G__11136__a = new Array(arguments.length -  1);
while (G__11136__i < G__11136__a.length) {G__11136__a[G__11136__i] = arguments[G__11136__i + 1]; ++G__11136__i;}
  args = new cljs.core.IndexedSeq(G__11136__a,0);
} 
return G__11135__delegate.call(this,self__,args);};
G__11135.cljs$lang$maxFixedArity = 1;
G__11135.cljs$lang$applyTo = (function (arglist__11137){
var self__ = cljs.core.first(arglist__11137);
var args = cljs.core.rest(arglist__11137);
return G__11135__delegate(self__,args);
});
G__11135.cljs$core$IFn$_invoke$arity$variadic = G__11135__delegate;
return G__11135;
})()
;

Element.prototype.apply = (function (self__,args11115){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11115)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11138__delegate = function (args){
var this$ = this;
var vec__11118 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__11118,(0),null);
var kids = cljs.core.nth.call(null,vec__11118,(1),null);
var G__11119 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__11119,attr);

hoplon.core.add_children_BANG_.call(null,G__11119,kids);

return G__11119;
};
var G__11138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11139__i = 0, G__11139__a = new Array(arguments.length -  0);
while (G__11139__i < G__11139__a.length) {G__11139__a[G__11139__i] = arguments[G__11139__i + 0]; ++G__11139__i;}
  args = new cljs.core.IndexedSeq(G__11139__a,0);
} 
return G__11138__delegate.call(this,args);};
G__11138.cljs$lang$maxFixedArity = 0;
G__11138.cljs$lang$applyTo = (function (arglist__11140){
var args = cljs.core.seq(arglist__11140);
return G__11138__delegate(args);
});
G__11138.cljs$core$IFn$_invoke$arity$variadic = G__11138__delegate;
return G__11138;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__11120 = cljs.core.seq.call(null,kvs);
var chunk__11122 = null;
var count__11123 = (0);
var i__11124 = (0);
while(true){
if((i__11124 < count__11123)){
var vec__11126 = cljs.core._nth.call(null,chunk__11122,i__11124);
var k = cljs.core.nth.call(null,vec__11126,(0),null);
var v = cljs.core.nth.call(null,vec__11126,(1),null);
var k_11141__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_11141__$1);
} else {
e.setAttribute(k_11141__$1,((cljs.core._EQ_.call(null,true,v))?k_11141__$1:v));
}

var G__11142 = seq__11120;
var G__11143 = chunk__11122;
var G__11144 = count__11123;
var G__11145 = (i__11124 + (1));
seq__11120 = G__11142;
chunk__11122 = G__11143;
count__11123 = G__11144;
i__11124 = G__11145;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11120);
if(temp__4425__auto__){
var seq__11120__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11120__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__11120__$1);
var G__11146 = cljs.core.chunk_rest.call(null,seq__11120__$1);
var G__11147 = c__7258__auto__;
var G__11148 = cljs.core.count.call(null,c__7258__auto__);
var G__11149 = (0);
seq__11120 = G__11146;
chunk__11122 = G__11147;
count__11123 = G__11148;
i__11124 = G__11149;
continue;
} else {
var vec__11127 = cljs.core.first.call(null,seq__11120__$1);
var k = cljs.core.nth.call(null,vec__11127,(0),null);
var v = cljs.core.nth.call(null,vec__11127,(1),null);
var k_11150__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_11150__$1);
} else {
e.setAttribute(k_11150__$1,((cljs.core._EQ_.call(null,true,v))?k_11150__$1:v));
}

var G__11151 = cljs.core.next.call(null,seq__11120__$1);
var G__11152 = null;
var G__11153 = (0);
var G__11154 = (0);
seq__11120 = G__11151;
chunk__11122 = G__11152;
count__11123 = G__11153;
i__11124 = G__11154;
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
var seq__11128 = cljs.core.seq.call(null,kvs);
var chunk__11129 = null;
var count__11130 = (0);
var i__11131 = (0);
while(true){
if((i__11131 < count__11130)){
var vec__11132 = cljs.core._nth.call(null,chunk__11129,i__11131);
var k = cljs.core.nth.call(null,vec__11132,(0),null);
var v = cljs.core.nth.call(null,vec__11132,(1),null);
(e["style"][cljs.core.name.call(null,k)] = [cljs.core.str(v)].join(''));

var G__11155 = seq__11128;
var G__11156 = chunk__11129;
var G__11157 = count__11130;
var G__11158 = (i__11131 + (1));
seq__11128 = G__11155;
chunk__11129 = G__11156;
count__11130 = G__11157;
i__11131 = G__11158;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11128);
if(temp__4425__auto__){
var seq__11128__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11128__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__11128__$1);
var G__11159 = cljs.core.chunk_rest.call(null,seq__11128__$1);
var G__11160 = c__7258__auto__;
var G__11161 = cljs.core.count.call(null,c__7258__auto__);
var G__11162 = (0);
seq__11128 = G__11159;
chunk__11129 = G__11160;
count__11130 = G__11161;
i__11131 = G__11162;
continue;
} else {
var vec__11133 = cljs.core.first.call(null,seq__11128__$1);
var k = cljs.core.nth.call(null,vec__11133,(0),null);
var v = cljs.core.nth.call(null,vec__11133,(1),null);
(e["style"][cljs.core.name.call(null,k)] = [cljs.core.str(v)].join(''));

var G__11163 = cljs.core.next.call(null,seq__11128__$1);
var G__11164 = null;
var G__11165 = (0);
var G__11166 = (0);
seq__11128 = G__11163;
chunk__11129 = G__11164;
count__11130 = G__11165;
i__11131 = G__11166;
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
}catch (e11134){if((e11134 instanceof Error)){
var _ = e11134;
return null;
} else {
throw e11134;

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
var G__11169__delegate = function (args){
var vec__11168 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__11168,(0),null);
var kids = cljs.core.nth.call(null,vec__11168,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__11169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11170__i = 0, G__11170__a = new Array(arguments.length -  0);
while (G__11170__i < G__11170__a.length) {G__11170__a[G__11170__i] = arguments[G__11170__i + 0]; ++G__11170__i;}
  args = new cljs.core.IndexedSeq(G__11170__a,0);
} 
return G__11169__delegate.call(this,args);};
G__11169.cljs$lang$maxFixedArity = 0;
G__11169.cljs$lang$applyTo = (function (arglist__11171){
var args = cljs.core.seq(arglist__11171);
return G__11169__delegate(args);
});
G__11169.cljs$core$IFn$_invoke$arity$variadic = G__11169__delegate;
return G__11169;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__11175__delegate = function (rest__11172_SHARP_){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),rest__11172_SHARP_);
};
var G__11175 = function (var_args){
var rest__11172_SHARP_ = null;
if (arguments.length > 0) {
var G__11176__i = 0, G__11176__a = new Array(arguments.length -  0);
while (G__11176__i < G__11176__a.length) {G__11176__a[G__11176__i] = arguments[G__11176__i + 0]; ++G__11176__i;}
  rest__11172_SHARP_ = new cljs.core.IndexedSeq(G__11176__a,0);
} 
return G__11175__delegate.call(this,rest__11172_SHARP_);};
G__11175.cljs$lang$maxFixedArity = 0;
G__11175.cljs$lang$applyTo = (function (arglist__11177){
var rest__11172_SHARP_ = cljs.core.seq(arglist__11177);
return G__11175__delegate(rest__11172_SHARP_);
});
G__11175.cljs$core$IFn$_invoke$arity$variadic = G__11175__delegate;
return G__11175;
})()
;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__11178__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e11174){if((e11174 instanceof Error)){
var _ = e11174;
return cljs.core.apply.call(null,hoplon$core$make_elem_ctor.call(null,"div"),args);
} else {
throw e11174;

}
}};
var G__11178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11179__i = 0, G__11179__a = new Array(arguments.length -  0);
while (G__11179__i < G__11179__a.length) {G__11179__a[G__11179__i] = arguments[G__11179__i + 0]; ++G__11179__i;}
  args = new cljs.core.IndexedSeq(G__11179__a,0);
} 
return G__11178__delegate.call(this,args);};
G__11178.cljs$lang$maxFixedArity = 0;
G__11178.cljs$lang$applyTo = (function (arglist__11180){
var args = cljs.core.seq(arglist__11180);
return G__11178__delegate(args);
});
G__11178.cljs$core$IFn$_invoke$arity$variadic = G__11178__delegate;
return G__11178;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7520__auto__ = [];
var len__7513__auto___11182 = arguments.length;
var i__7514__auto___11183 = (0);
while(true){
if((i__7514__auto___11183 < len__7513__auto___11182)){
args__7520__auto__.push((arguments[i__7514__auto___11183]));

var G__11184 = (i__7514__auto___11183 + (1));
i__7514__auto___11183 = G__11184;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq11181){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11181));
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
hoplon.core.$text = (function hoplon$core$$text(p1__11185_SHARP_){
return document.createTextNode(p1__11185_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__11186_SHARP_){
return document.createComment(p1__11186_SHARP_);
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
return document.body.addEventListener("submit",(function (p1__11187_SHARP_){
var e = p1__11187_SHARP_.target;
if(cljs.core.truth_((function (){var or__6455__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__11187_SHARP_.preventDefault();
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
return (function (G__11199,G__11200){
return G__11199.call(null,G__11200);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__11188_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__11202,G__11203,G__11201){
return G__11201.call(null,G__11202,G__11203);
});})(on_deck,items_seq))
).call(null,items_seq,p1__11188_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__11189_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__11189_SHARP_));
cljs.core.swap_BANG_.call(null,p1__11189_SHARP_,cljs.core.rest);

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
var seq__11204 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__11205 = null;
var count__11206 = (0);
var i__11207 = (0);
while(true){
if((i__11207 < count__11206)){
var i = cljs.core._nth.call(null,chunk__11205,i__11207);
var e_11208 = (function (){var or__6455__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11208);

var G__11209 = seq__11204;
var G__11210 = chunk__11205;
var G__11211 = count__11206;
var G__11212 = (i__11207 + (1));
seq__11204 = G__11209;
chunk__11205 = G__11210;
count__11206 = G__11211;
i__11207 = G__11212;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11204);
if(temp__4425__auto__){
var seq__11204__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11204__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__11204__$1);
var G__11213 = cljs.core.chunk_rest.call(null,seq__11204__$1);
var G__11214 = c__7258__auto__;
var G__11215 = cljs.core.count.call(null,c__7258__auto__);
var G__11216 = (0);
seq__11204 = G__11213;
chunk__11205 = G__11214;
count__11206 = G__11215;
i__11207 = G__11216;
continue;
} else {
var i = cljs.core.first.call(null,seq__11204__$1);
var e_11217 = (function (){var or__6455__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11217);

var G__11218 = cljs.core.next.call(null,seq__11204__$1);
var G__11219 = null;
var G__11220 = (0);
var G__11221 = (0);
seq__11204 = G__11218;
chunk__11205 = G__11219;
count__11206 = G__11220;
i__11207 = G__11221;
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
var e_11222 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_11222);

var G__11223 = (_ + (1));
_ = G__11223;
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
var len__7513__auto___11230 = arguments.length;
var i__7514__auto___11231 = (0);
while(true){
if((i__7514__auto___11231 < len__7513__auto___11230)){
args__7520__auto__.push((arguments[i__7514__auto___11231]));

var G__11232 = (i__7514__auto___11231 + (1));
i__7514__auto___11231 = G__11232;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11225){
var vec__11226 = p__11225;
var default$ = cljs.core.nth.call(null,vec__11226,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__11226,default$){
return (function (G__11227,G__11229,G__11228){
var or__6455__auto__ = (function (){var and__6443__auto__ = G__11227.call(null,G__11228);
if(cljs.core.truth_(and__6443__auto__)){
return G__11228;
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return G__11229;
}
});})(c,vec__11226,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__11226,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__11226,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq11224){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11224));
});

//# sourceMappingURL=core.js.map