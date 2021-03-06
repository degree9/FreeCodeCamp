// Compiled by ClojureScript 1.7.228 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args11108 = [];
var len__7513__auto___11111 = arguments.length;
var i__7514__auto___11112 = (0);
while(true){
if((i__7514__auto___11112 < len__7513__auto___11111)){
args11108.push((arguments[i__7514__auto___11112]));

var G__11113 = (i__7514__auto___11112 + (1));
i__7514__auto___11112 = G__11113;
continue;
} else {
}
break;
}

var G__11110 = args11108.length;
switch (G__11110) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11108.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args11115 = [];
var len__7513__auto___11118 = arguments.length;
var i__7514__auto___11119 = (0);
while(true){
if((i__7514__auto___11119 < len__7513__auto___11118)){
args11115.push((arguments[i__7514__auto___11119]));

var G__11120 = (i__7514__auto___11119 + (1));
i__7514__auto___11119 = G__11120;
continue;
} else {
}
break;
}

var G__11117 = args11115.length;
switch (G__11117) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11115.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.core.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__11122__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__11122 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__11123__i = 0, G__11123__a = new Array(arguments.length -  2);
while (G__11123__i < G__11123__a.length) {G__11123__a[G__11123__i] = arguments[G__11123__i + 2]; ++G__11123__i;}
  args = new cljs.core.IndexedSeq(G__11123__a,0);
} 
return G__11122__delegate.call(this,elem,_,args);};
G__11122.cljs$lang$maxFixedArity = 2;
G__11122.cljs$lang$applyTo = (function (arglist__11124){
var elem = cljs.core.first(arglist__11124);
arglist__11124 = cljs.core.next(arglist__11124);
var _ = cljs.core.first(arglist__11124);
var args = cljs.core.rest(arglist__11124);
return G__11122__delegate(elem,_,args);
});
G__11122.cljs$core$IFn$_invoke$arity$variadic = G__11122__delegate;
return G__11122;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__11125_SHARP_){
return cljs.core.zipmap.call(null,p1__11125_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__11126 = cljs.core.seq.call(null,clmap);
var chunk__11127 = null;
var count__11128 = (0);
var i__11129 = (0);
while(true){
if((i__11129 < count__11128)){
var vec__11130 = cljs.core._nth.call(null,chunk__11127,i__11129);
var c = cljs.core.nth.call(null,vec__11130,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__11130,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__11132 = seq__11126;
var G__11133 = chunk__11127;
var G__11134 = count__11128;
var G__11135 = (i__11129 + (1));
seq__11126 = G__11132;
chunk__11127 = G__11133;
count__11128 = G__11134;
i__11129 = G__11135;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11126);
if(temp__4425__auto__){
var seq__11126__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11126__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__11126__$1);
var G__11136 = cljs.core.chunk_rest.call(null,seq__11126__$1);
var G__11137 = c__7258__auto__;
var G__11138 = cljs.core.count.call(null,c__7258__auto__);
var G__11139 = (0);
seq__11126 = G__11136;
chunk__11127 = G__11137;
count__11128 = G__11138;
i__11129 = G__11139;
continue;
} else {
var vec__11131 = cljs.core.first.call(null,seq__11126__$1);
var c = cljs.core.nth.call(null,vec__11131,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__11131,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__11140 = cljs.core.next.call(null,seq__11126__$1);
var G__11141 = null;
var G__11142 = (0);
var G__11143 = (0);
seq__11126 = G__11140;
chunk__11127 = G__11141;
count__11128 = G__11142;
i__11129 = G__11143;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));

//# sourceMappingURL=jquery.js.map