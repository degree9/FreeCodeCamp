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
return (function (p1__9847_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9847_SHARP_),path);
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
var seq__9852 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9853 = null;
var count__9854 = (0);
var i__9855 = (0);
while(true){
if((i__9855 < count__9854)){
var s = cljs.core._nth.call(null,chunk__9853,i__9855);
var temp__4425__auto___9856 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9856)){
var sheet_9857 = temp__4425__auto___9856;
var temp__4425__auto___9858__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9857.href,changed);
if(cljs.core.truth_(temp__4425__auto___9858__$1)){
var href_uri_9859 = temp__4425__auto___9858__$1;
sheet_9857.ownerNode.href = href_uri_9859.makeUnique().toString();
} else {
}
} else {
}

var G__9860 = seq__9852;
var G__9861 = chunk__9853;
var G__9862 = count__9854;
var G__9863 = (i__9855 + (1));
seq__9852 = G__9860;
chunk__9853 = G__9861;
count__9854 = G__9862;
i__9855 = G__9863;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9852);
if(temp__4425__auto__){
var seq__9852__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9852__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9852__$1);
var G__9864 = cljs.core.chunk_rest.call(null,seq__9852__$1);
var G__9865 = c__7258__auto__;
var G__9866 = cljs.core.count.call(null,c__7258__auto__);
var G__9867 = (0);
seq__9852 = G__9864;
chunk__9853 = G__9865;
count__9854 = G__9866;
i__9855 = G__9867;
continue;
} else {
var s = cljs.core.first.call(null,seq__9852__$1);
var temp__4425__auto___9868__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9868__$1)){
var sheet_9869 = temp__4425__auto___9868__$1;
var temp__4425__auto___9870__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9869.href,changed);
if(cljs.core.truth_(temp__4425__auto___9870__$2)){
var href_uri_9871 = temp__4425__auto___9870__$2;
sheet_9869.ownerNode.href = href_uri_9871.makeUnique().toString();
} else {
}
} else {
}

var G__9872 = cljs.core.next.call(null,seq__9852__$1);
var G__9873 = null;
var G__9874 = (0);
var G__9875 = (0);
seq__9852 = G__9872;
chunk__9853 = G__9873;
count__9854 = G__9874;
i__9855 = G__9875;
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
var seq__9880 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9881 = null;
var count__9882 = (0);
var i__9883 = (0);
while(true){
if((i__9883 < count__9882)){
var s = cljs.core._nth.call(null,chunk__9881,i__9883);
var temp__4425__auto___9884 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9884)){
var image_9885 = temp__4425__auto___9884;
var temp__4425__auto___9886__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9885.src,changed);
if(cljs.core.truth_(temp__4425__auto___9886__$1)){
var href_uri_9887 = temp__4425__auto___9886__$1;
image_9885.src = href_uri_9887.makeUnique().toString();
} else {
}
} else {
}

var G__9888 = seq__9880;
var G__9889 = chunk__9881;
var G__9890 = count__9882;
var G__9891 = (i__9883 + (1));
seq__9880 = G__9888;
chunk__9881 = G__9889;
count__9882 = G__9890;
i__9883 = G__9891;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9880);
if(temp__4425__auto__){
var seq__9880__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9880__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9880__$1);
var G__9892 = cljs.core.chunk_rest.call(null,seq__9880__$1);
var G__9893 = c__7258__auto__;
var G__9894 = cljs.core.count.call(null,c__7258__auto__);
var G__9895 = (0);
seq__9880 = G__9892;
chunk__9881 = G__9893;
count__9882 = G__9894;
i__9883 = G__9895;
continue;
} else {
var s = cljs.core.first.call(null,seq__9880__$1);
var temp__4425__auto___9896__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9896__$1)){
var image_9897 = temp__4425__auto___9896__$1;
var temp__4425__auto___9898__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9897.src,changed);
if(cljs.core.truth_(temp__4425__auto___9898__$2)){
var href_uri_9899 = temp__4425__auto___9898__$2;
image_9897.src = href_uri_9899.makeUnique().toString();
} else {
}
} else {
}

var G__9900 = cljs.core.next.call(null,seq__9880__$1);
var G__9901 = null;
var G__9902 = (0);
var G__9903 = (0);
seq__9880 = G__9900;
chunk__9881 = G__9901;
count__9882 = G__9902;
i__9883 = G__9903;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9906){
var map__9909 = p__9906;
var map__9909__$1 = ((((!((map__9909 == null)))?((((map__9909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9909):map__9909);
var on_jsload = cljs.core.get.call(null,map__9909__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9909,map__9909__$1,on_jsload){
return (function (p1__9904_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9904_SHARP_,".js");
});})(map__9909,map__9909__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9909,map__9909__$1,on_jsload){
return (function (p1__9905_SHARP_){
return goog.Uri.parse(p1__9905_SHARP_).makeUnique();
});})(js_files,map__9909,map__9909__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9909,map__9909__$1,on_jsload){
return (function() { 
var G__9911__delegate = function (_){
return on_jsload.call(null);
};
var G__9911 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9912__i = 0, G__9912__a = new Array(arguments.length -  0);
while (G__9912__i < G__9912__a.length) {G__9912__a[G__9912__i] = arguments[G__9912__i + 0]; ++G__9912__i;}
  _ = new cljs.core.IndexedSeq(G__9912__a,0);
} 
return G__9911__delegate.call(this,_);};
G__9911.cljs$lang$maxFixedArity = 0;
G__9911.cljs$lang$applyTo = (function (arglist__9913){
var _ = cljs.core.seq(arglist__9913);
return G__9911__delegate(_);
});
G__9911.cljs$core$IFn$_invoke$arity$variadic = G__9911__delegate;
return G__9911;
})()
;})(js_files,map__9909,map__9909__$1,on_jsload))
,((function (js_files,map__9909,map__9909__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9909,map__9909__$1,on_jsload))
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

var seq__9918_9922 = cljs.core.seq.call(null,things_to_log);
var chunk__9919_9923 = null;
var count__9920_9924 = (0);
var i__9921_9925 = (0);
while(true){
if((i__9921_9925 < count__9920_9924)){
var t_9926 = cljs.core._nth.call(null,chunk__9919_9923,i__9921_9925);
console.log(t_9926);

var G__9927 = seq__9918_9922;
var G__9928 = chunk__9919_9923;
var G__9929 = count__9920_9924;
var G__9930 = (i__9921_9925 + (1));
seq__9918_9922 = G__9927;
chunk__9919_9923 = G__9928;
count__9920_9924 = G__9929;
i__9921_9925 = G__9930;
continue;
} else {
var temp__4425__auto___9931 = cljs.core.seq.call(null,seq__9918_9922);
if(temp__4425__auto___9931){
var seq__9918_9932__$1 = temp__4425__auto___9931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9918_9932__$1)){
var c__7258__auto___9933 = cljs.core.chunk_first.call(null,seq__9918_9932__$1);
var G__9934 = cljs.core.chunk_rest.call(null,seq__9918_9932__$1);
var G__9935 = c__7258__auto___9933;
var G__9936 = cljs.core.count.call(null,c__7258__auto___9933);
var G__9937 = (0);
seq__9918_9922 = G__9934;
chunk__9919_9923 = G__9935;
count__9920_9924 = G__9936;
i__9921_9925 = G__9937;
continue;
} else {
var t_9938 = cljs.core.first.call(null,seq__9918_9932__$1);
console.log(t_9938);

var G__9939 = cljs.core.next.call(null,seq__9918_9932__$1);
var G__9940 = null;
var G__9941 = (0);
var G__9942 = (0);
seq__9918_9922 = G__9939;
chunk__9919_9923 = G__9940;
count__9920_9924 = G__9941;
i__9921_9925 = G__9942;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9943_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9943_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9945 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9945);

adzerk.boot_reload.reload.reload_css.call(null,G__9945);

adzerk.boot_reload.reload.reload_img.call(null,G__9945);

return G__9945;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map