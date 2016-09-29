// Compiled by ClojureScript 1.7.228 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7704_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7704_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4425__auto__)){
var changed__$1 = temp__4425__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7709 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7710 = null;
var count__7711 = (0);
var i__7712 = (0);
while(true){
if((i__7712 < count__7711)){
var s = cljs.core._nth.call(null,chunk__7710,i__7712);
var temp__4425__auto___7713 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7713)){
var sheet_7714 = temp__4425__auto___7713;
var temp__4425__auto___7715__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7714.href,changed);
if(cljs.core.truth_(temp__4425__auto___7715__$1)){
var href_uri_7716 = temp__4425__auto___7715__$1;
sheet_7714.ownerNode.href = href_uri_7716.makeUnique().toString();
} else {
}
} else {
}

var G__7717 = seq__7709;
var G__7718 = chunk__7710;
var G__7719 = count__7711;
var G__7720 = (i__7712 + (1));
seq__7709 = G__7717;
chunk__7710 = G__7718;
count__7711 = G__7719;
i__7712 = G__7720;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7709);
if(temp__4425__auto__){
var seq__7709__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7709__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__7709__$1);
var G__7721 = cljs.core.chunk_rest.call(null,seq__7709__$1);
var G__7722 = c__7258__auto__;
var G__7723 = cljs.core.count.call(null,c__7258__auto__);
var G__7724 = (0);
seq__7709 = G__7721;
chunk__7710 = G__7722;
count__7711 = G__7723;
i__7712 = G__7724;
continue;
} else {
var s = cljs.core.first.call(null,seq__7709__$1);
var temp__4425__auto___7725__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7725__$1)){
var sheet_7726 = temp__4425__auto___7725__$1;
var temp__4425__auto___7727__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7726.href,changed);
if(cljs.core.truth_(temp__4425__auto___7727__$2)){
var href_uri_7728 = temp__4425__auto___7727__$2;
sheet_7726.ownerNode.href = href_uri_7728.makeUnique().toString();
} else {
}
} else {
}

var G__7729 = cljs.core.next.call(null,seq__7709__$1);
var G__7730 = null;
var G__7731 = (0);
var G__7732 = (0);
seq__7709 = G__7729;
chunk__7710 = G__7730;
count__7711 = G__7731;
i__7712 = G__7732;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7737 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7738 = null;
var count__7739 = (0);
var i__7740 = (0);
while(true){
if((i__7740 < count__7739)){
var s = cljs.core._nth.call(null,chunk__7738,i__7740);
var temp__4425__auto___7741 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7741)){
var image_7742 = temp__4425__auto___7741;
var temp__4425__auto___7743__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_7742.src,changed);
if(cljs.core.truth_(temp__4425__auto___7743__$1)){
var href_uri_7744 = temp__4425__auto___7743__$1;
image_7742.src = href_uri_7744.makeUnique().toString();
} else {
}
} else {
}

var G__7745 = seq__7737;
var G__7746 = chunk__7738;
var G__7747 = count__7739;
var G__7748 = (i__7740 + (1));
seq__7737 = G__7745;
chunk__7738 = G__7746;
count__7739 = G__7747;
i__7740 = G__7748;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7737);
if(temp__4425__auto__){
var seq__7737__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7737__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__7737__$1);
var G__7749 = cljs.core.chunk_rest.call(null,seq__7737__$1);
var G__7750 = c__7258__auto__;
var G__7751 = cljs.core.count.call(null,c__7258__auto__);
var G__7752 = (0);
seq__7737 = G__7749;
chunk__7738 = G__7750;
count__7739 = G__7751;
i__7740 = G__7752;
continue;
} else {
var s = cljs.core.first.call(null,seq__7737__$1);
var temp__4425__auto___7753__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7753__$1)){
var image_7754 = temp__4425__auto___7753__$1;
var temp__4425__auto___7755__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_7754.src,changed);
if(cljs.core.truth_(temp__4425__auto___7755__$2)){
var href_uri_7756 = temp__4425__auto___7755__$2;
image_7754.src = href_uri_7756.makeUnique().toString();
} else {
}
} else {
}

var G__7757 = cljs.core.next.call(null,seq__7737__$1);
var G__7758 = null;
var G__7759 = (0);
var G__7760 = (0);
seq__7737 = G__7757;
chunk__7738 = G__7758;
count__7739 = G__7759;
i__7740 = G__7760;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7763){
var map__7766 = p__7763;
var map__7766__$1 = ((((!((map__7766 == null)))?((((map__7766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7766):map__7766);
var on_jsload = cljs.core.get.call(null,map__7766__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7766,map__7766__$1,on_jsload){
return (function (p1__7761_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7761_SHARP_,".js");
});})(map__7766,map__7766__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7766,map__7766__$1,on_jsload){
return (function (p1__7762_SHARP_){
return goog.Uri.parse(p1__7762_SHARP_).makeUnique();
});})(js_files,map__7766,map__7766__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7766,map__7766__$1,on_jsload){
return (function() { 
var G__7768__delegate = function (_){
return on_jsload.call(null);
};
var G__7768 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7769__i = 0, G__7769__a = new Array(arguments.length -  0);
while (G__7769__i < G__7769__a.length) {G__7769__a[G__7769__i] = arguments[G__7769__i + 0]; ++G__7769__i;}
  _ = new cljs.core.IndexedSeq(G__7769__a,0);
} 
return G__7768__delegate.call(this,_);};
G__7768.cljs$lang$maxFixedArity = 0;
G__7768.cljs$lang$applyTo = (function (arglist__7770){
var _ = cljs.core.seq(arglist__7770);
return G__7768__delegate(_);
});
G__7768.cljs$core$IFn$_invoke$arity$variadic = G__7768__delegate;
return G__7768;
})()
;})(js_files,map__7766,map__7766__$1,on_jsload))
,((function (js_files,map__7766,map__7766__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7766,map__7766__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7775_7779 = cljs.core.seq.call(null,things_to_log);
var chunk__7776_7780 = null;
var count__7777_7781 = (0);
var i__7778_7782 = (0);
while(true){
if((i__7778_7782 < count__7777_7781)){
var t_7783 = cljs.core._nth.call(null,chunk__7776_7780,i__7778_7782);
console.log(t_7783);

var G__7784 = seq__7775_7779;
var G__7785 = chunk__7776_7780;
var G__7786 = count__7777_7781;
var G__7787 = (i__7778_7782 + (1));
seq__7775_7779 = G__7784;
chunk__7776_7780 = G__7785;
count__7777_7781 = G__7786;
i__7778_7782 = G__7787;
continue;
} else {
var temp__4425__auto___7788 = cljs.core.seq.call(null,seq__7775_7779);
if(temp__4425__auto___7788){
var seq__7775_7789__$1 = temp__4425__auto___7788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7775_7789__$1)){
var c__7258__auto___7790 = cljs.core.chunk_first.call(null,seq__7775_7789__$1);
var G__7791 = cljs.core.chunk_rest.call(null,seq__7775_7789__$1);
var G__7792 = c__7258__auto___7790;
var G__7793 = cljs.core.count.call(null,c__7258__auto___7790);
var G__7794 = (0);
seq__7775_7779 = G__7791;
chunk__7776_7780 = G__7792;
count__7777_7781 = G__7793;
i__7778_7782 = G__7794;
continue;
} else {
var t_7795 = cljs.core.first.call(null,seq__7775_7789__$1);
console.log(t_7795);

var G__7796 = cljs.core.next.call(null,seq__7775_7789__$1);
var G__7797 = null;
var G__7798 = (0);
var G__7799 = (0);
seq__7775_7779 = G__7796;
chunk__7776_7780 = G__7797;
count__7777_7781 = G__7798;
i__7778_7782 = G__7799;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__7800_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__7800_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__7802 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__7802);

adzerk.boot_reload.reload.reload_css.call(null,G__7802);

adzerk.boot_reload.reload.reload_img.call(null,G__7802);

return G__7802;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map