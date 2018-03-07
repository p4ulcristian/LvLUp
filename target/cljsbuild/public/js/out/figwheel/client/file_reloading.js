// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__36804__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36804__auto__){
return or__36804__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__36804__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51459_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51459_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51464 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51465 = null;
var count__51466 = (0);
var i__51467 = (0);
while(true){
if((i__51467 < count__51466)){
var n = cljs.core._nth.call(null,chunk__51465,i__51467);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51468 = seq__51464;
var G__51469 = chunk__51465;
var G__51470 = count__51466;
var G__51471 = (i__51467 + (1));
seq__51464 = G__51468;
chunk__51465 = G__51469;
count__51466 = G__51470;
i__51467 = G__51471;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51464);
if(temp__4657__auto__){
var seq__51464__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51464__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__51464__$1);
var G__51472 = cljs.core.chunk_rest.call(null,seq__51464__$1);
var G__51473 = c__37615__auto__;
var G__51474 = cljs.core.count.call(null,c__37615__auto__);
var G__51475 = (0);
seq__51464 = G__51472;
chunk__51465 = G__51473;
count__51466 = G__51474;
i__51467 = G__51475;
continue;
} else {
var n = cljs.core.first.call(null,seq__51464__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51476 = cljs.core.next.call(null,seq__51464__$1);
var G__51477 = null;
var G__51478 = (0);
var G__51479 = (0);
seq__51464 = G__51476;
chunk__51465 = G__51477;
count__51466 = G__51478;
i__51467 = G__51479;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51530_51541 = cljs.core.seq.call(null,deps);
var chunk__51531_51542 = null;
var count__51532_51543 = (0);
var i__51533_51544 = (0);
while(true){
if((i__51533_51544 < count__51532_51543)){
var dep_51545 = cljs.core._nth.call(null,chunk__51531_51542,i__51533_51544);
topo_sort_helper_STAR_.call(null,dep_51545,(depth + (1)),state);

var G__51546 = seq__51530_51541;
var G__51547 = chunk__51531_51542;
var G__51548 = count__51532_51543;
var G__51549 = (i__51533_51544 + (1));
seq__51530_51541 = G__51546;
chunk__51531_51542 = G__51547;
count__51532_51543 = G__51548;
i__51533_51544 = G__51549;
continue;
} else {
var temp__4657__auto___51550 = cljs.core.seq.call(null,seq__51530_51541);
if(temp__4657__auto___51550){
var seq__51530_51551__$1 = temp__4657__auto___51550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51530_51551__$1)){
var c__37615__auto___51552 = cljs.core.chunk_first.call(null,seq__51530_51551__$1);
var G__51553 = cljs.core.chunk_rest.call(null,seq__51530_51551__$1);
var G__51554 = c__37615__auto___51552;
var G__51555 = cljs.core.count.call(null,c__37615__auto___51552);
var G__51556 = (0);
seq__51530_51541 = G__51553;
chunk__51531_51542 = G__51554;
count__51532_51543 = G__51555;
i__51533_51544 = G__51556;
continue;
} else {
var dep_51557 = cljs.core.first.call(null,seq__51530_51551__$1);
topo_sort_helper_STAR_.call(null,dep_51557,(depth + (1)),state);

var G__51558 = cljs.core.next.call(null,seq__51530_51551__$1);
var G__51559 = null;
var G__51560 = (0);
var G__51561 = (0);
seq__51530_51541 = G__51558;
chunk__51531_51542 = G__51559;
count__51532_51543 = G__51560;
i__51533_51544 = G__51561;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51534){
var vec__51538 = p__51534;
var seq__51539 = cljs.core.seq.call(null,vec__51538);
var first__51540 = cljs.core.first.call(null,seq__51539);
var seq__51539__$1 = cljs.core.next.call(null,seq__51539);
var x = first__51540;
var xs = seq__51539__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51538,seq__51539,first__51540,seq__51539__$1,x,xs,get_deps__$1){
return (function (p1__51480_SHARP_){
return clojure.set.difference.call(null,p1__51480_SHARP_,x);
});})(vec__51538,seq__51539,first__51540,seq__51539__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51574 = cljs.core.seq.call(null,provides);
var chunk__51575 = null;
var count__51576 = (0);
var i__51577 = (0);
while(true){
if((i__51577 < count__51576)){
var prov = cljs.core._nth.call(null,chunk__51575,i__51577);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51578_51586 = cljs.core.seq.call(null,requires);
var chunk__51579_51587 = null;
var count__51580_51588 = (0);
var i__51581_51589 = (0);
while(true){
if((i__51581_51589 < count__51580_51588)){
var req_51590 = cljs.core._nth.call(null,chunk__51579_51587,i__51581_51589);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51590,prov);

var G__51591 = seq__51578_51586;
var G__51592 = chunk__51579_51587;
var G__51593 = count__51580_51588;
var G__51594 = (i__51581_51589 + (1));
seq__51578_51586 = G__51591;
chunk__51579_51587 = G__51592;
count__51580_51588 = G__51593;
i__51581_51589 = G__51594;
continue;
} else {
var temp__4657__auto___51595 = cljs.core.seq.call(null,seq__51578_51586);
if(temp__4657__auto___51595){
var seq__51578_51596__$1 = temp__4657__auto___51595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51578_51596__$1)){
var c__37615__auto___51597 = cljs.core.chunk_first.call(null,seq__51578_51596__$1);
var G__51598 = cljs.core.chunk_rest.call(null,seq__51578_51596__$1);
var G__51599 = c__37615__auto___51597;
var G__51600 = cljs.core.count.call(null,c__37615__auto___51597);
var G__51601 = (0);
seq__51578_51586 = G__51598;
chunk__51579_51587 = G__51599;
count__51580_51588 = G__51600;
i__51581_51589 = G__51601;
continue;
} else {
var req_51602 = cljs.core.first.call(null,seq__51578_51596__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51602,prov);

var G__51603 = cljs.core.next.call(null,seq__51578_51596__$1);
var G__51604 = null;
var G__51605 = (0);
var G__51606 = (0);
seq__51578_51586 = G__51603;
chunk__51579_51587 = G__51604;
count__51580_51588 = G__51605;
i__51581_51589 = G__51606;
continue;
}
} else {
}
}
break;
}

var G__51607 = seq__51574;
var G__51608 = chunk__51575;
var G__51609 = count__51576;
var G__51610 = (i__51577 + (1));
seq__51574 = G__51607;
chunk__51575 = G__51608;
count__51576 = G__51609;
i__51577 = G__51610;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51574);
if(temp__4657__auto__){
var seq__51574__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51574__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__51574__$1);
var G__51611 = cljs.core.chunk_rest.call(null,seq__51574__$1);
var G__51612 = c__37615__auto__;
var G__51613 = cljs.core.count.call(null,c__37615__auto__);
var G__51614 = (0);
seq__51574 = G__51611;
chunk__51575 = G__51612;
count__51576 = G__51613;
i__51577 = G__51614;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51574__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51582_51615 = cljs.core.seq.call(null,requires);
var chunk__51583_51616 = null;
var count__51584_51617 = (0);
var i__51585_51618 = (0);
while(true){
if((i__51585_51618 < count__51584_51617)){
var req_51619 = cljs.core._nth.call(null,chunk__51583_51616,i__51585_51618);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51619,prov);

var G__51620 = seq__51582_51615;
var G__51621 = chunk__51583_51616;
var G__51622 = count__51584_51617;
var G__51623 = (i__51585_51618 + (1));
seq__51582_51615 = G__51620;
chunk__51583_51616 = G__51621;
count__51584_51617 = G__51622;
i__51585_51618 = G__51623;
continue;
} else {
var temp__4657__auto___51624__$1 = cljs.core.seq.call(null,seq__51582_51615);
if(temp__4657__auto___51624__$1){
var seq__51582_51625__$1 = temp__4657__auto___51624__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51582_51625__$1)){
var c__37615__auto___51626 = cljs.core.chunk_first.call(null,seq__51582_51625__$1);
var G__51627 = cljs.core.chunk_rest.call(null,seq__51582_51625__$1);
var G__51628 = c__37615__auto___51626;
var G__51629 = cljs.core.count.call(null,c__37615__auto___51626);
var G__51630 = (0);
seq__51582_51615 = G__51627;
chunk__51583_51616 = G__51628;
count__51584_51617 = G__51629;
i__51585_51618 = G__51630;
continue;
} else {
var req_51631 = cljs.core.first.call(null,seq__51582_51625__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51631,prov);

var G__51632 = cljs.core.next.call(null,seq__51582_51625__$1);
var G__51633 = null;
var G__51634 = (0);
var G__51635 = (0);
seq__51582_51615 = G__51632;
chunk__51583_51616 = G__51633;
count__51584_51617 = G__51634;
i__51585_51618 = G__51635;
continue;
}
} else {
}
}
break;
}

var G__51636 = cljs.core.next.call(null,seq__51574__$1);
var G__51637 = null;
var G__51638 = (0);
var G__51639 = (0);
seq__51574 = G__51636;
chunk__51575 = G__51637;
count__51576 = G__51638;
i__51577 = G__51639;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51644_51648 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51645_51649 = null;
var count__51646_51650 = (0);
var i__51647_51651 = (0);
while(true){
if((i__51647_51651 < count__51646_51650)){
var ns_51652 = cljs.core._nth.call(null,chunk__51645_51649,i__51647_51651);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51652);

var G__51653 = seq__51644_51648;
var G__51654 = chunk__51645_51649;
var G__51655 = count__51646_51650;
var G__51656 = (i__51647_51651 + (1));
seq__51644_51648 = G__51653;
chunk__51645_51649 = G__51654;
count__51646_51650 = G__51655;
i__51647_51651 = G__51656;
continue;
} else {
var temp__4657__auto___51657 = cljs.core.seq.call(null,seq__51644_51648);
if(temp__4657__auto___51657){
var seq__51644_51658__$1 = temp__4657__auto___51657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51644_51658__$1)){
var c__37615__auto___51659 = cljs.core.chunk_first.call(null,seq__51644_51658__$1);
var G__51660 = cljs.core.chunk_rest.call(null,seq__51644_51658__$1);
var G__51661 = c__37615__auto___51659;
var G__51662 = cljs.core.count.call(null,c__37615__auto___51659);
var G__51663 = (0);
seq__51644_51648 = G__51660;
chunk__51645_51649 = G__51661;
count__51646_51650 = G__51662;
i__51647_51651 = G__51663;
continue;
} else {
var ns_51664 = cljs.core.first.call(null,seq__51644_51658__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51664);

var G__51665 = cljs.core.next.call(null,seq__51644_51658__$1);
var G__51666 = null;
var G__51667 = (0);
var G__51668 = (0);
seq__51644_51648 = G__51665;
chunk__51645_51649 = G__51666;
count__51646_51650 = G__51667;
i__51647_51651 = G__51668;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__36804__auto__ = goog.require__;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51669__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51670__i = 0, G__51670__a = new Array(arguments.length -  0);
while (G__51670__i < G__51670__a.length) {G__51670__a[G__51670__i] = arguments[G__51670__i + 0]; ++G__51670__i;}
  args = new cljs.core.IndexedSeq(G__51670__a,0);
} 
return G__51669__delegate.call(this,args);};
G__51669.cljs$lang$maxFixedArity = 0;
G__51669.cljs$lang$applyTo = (function (arglist__51671){
var args = cljs.core.seq(arglist__51671);
return G__51669__delegate(args);
});
G__51669.cljs$core$IFn$_invoke$arity$variadic = G__51669__delegate;
return G__51669;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51673 = cljs.core._EQ_;
var expr__51674 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51673.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51674))){
var path_parts = ((function (pred__51673,expr__51674){
return (function (p1__51672_SHARP_){
return clojure.string.split.call(null,p1__51672_SHARP_,/[\/\\]/);
});})(pred__51673,expr__51674))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51673,expr__51674){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51676){if((e51676 instanceof Error)){
var e = e51676;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51676;

}
}})());
});
;})(path_parts,sep,root,pred__51673,expr__51674))
} else {
if(cljs.core.truth_(pred__51673.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51674))){
return ((function (pred__51673,expr__51674){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51673,expr__51674){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51673,expr__51674))
);

return deferred.addErrback(((function (deferred,pred__51673,expr__51674){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51673,expr__51674))
);
});
;})(pred__51673,expr__51674))
} else {
return ((function (pred__51673,expr__51674){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51673,expr__51674))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51677,callback){
var map__51680 = p__51677;
var map__51680__$1 = ((((!((map__51680 == null)))?((((map__51680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51680):map__51680);
var file_msg = map__51680__$1;
var request_url = cljs.core.get.call(null,map__51680__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51680,map__51680__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51680,map__51680__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__){
return (function (state_51704){
var state_val_51705 = (state_51704[(1)]);
if((state_val_51705 === (7))){
var inst_51700 = (state_51704[(2)]);
var state_51704__$1 = state_51704;
var statearr_51706_51726 = state_51704__$1;
(statearr_51706_51726[(2)] = inst_51700);

(statearr_51706_51726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51705 === (1))){
var state_51704__$1 = state_51704;
var statearr_51707_51727 = state_51704__$1;
(statearr_51707_51727[(2)] = null);

(statearr_51707_51727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51705 === (4))){
var inst_51684 = (state_51704[(7)]);
var inst_51684__$1 = (state_51704[(2)]);
var state_51704__$1 = (function (){var statearr_51708 = state_51704;
(statearr_51708[(7)] = inst_51684__$1);

return statearr_51708;
})();
if(cljs.core.truth_(inst_51684__$1)){
var statearr_51709_51728 = state_51704__$1;
(statearr_51709_51728[(1)] = (5));

} else {
var statearr_51710_51729 = state_51704__$1;
(statearr_51710_51729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51705 === (6))){
var state_51704__$1 = state_51704;
var statearr_51711_51730 = state_51704__$1;
(statearr_51711_51730[(2)] = null);

(statearr_51711_51730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51705 === (3))){
var inst_51702 = (state_51704[(2)]);
var state_51704__$1 = state_51704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51704__$1,inst_51702);
} else {
if((state_val_51705 === (2))){
var state_51704__$1 = state_51704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51704__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51705 === (11))){
var inst_51696 = (state_51704[(2)]);
var state_51704__$1 = (function (){var statearr_51712 = state_51704;
(statearr_51712[(8)] = inst_51696);

return statearr_51712;
})();
var statearr_51713_51731 = state_51704__$1;
(statearr_51713_51731[(2)] = null);

(statearr_51713_51731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51705 === (9))){
var inst_51688 = (state_51704[(9)]);
var inst_51690 = (state_51704[(10)]);
var inst_51692 = inst_51690.call(null,inst_51688);
var state_51704__$1 = state_51704;
var statearr_51714_51732 = state_51704__$1;
(statearr_51714_51732[(2)] = inst_51692);

(statearr_51714_51732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51705 === (5))){
var inst_51684 = (state_51704[(7)]);
var inst_51686 = figwheel.client.file_reloading.blocking_load.call(null,inst_51684);
var state_51704__$1 = state_51704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51704__$1,(8),inst_51686);
} else {
if((state_val_51705 === (10))){
var inst_51688 = (state_51704[(9)]);
var inst_51694 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51688);
var state_51704__$1 = state_51704;
var statearr_51715_51733 = state_51704__$1;
(statearr_51715_51733[(2)] = inst_51694);

(statearr_51715_51733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51705 === (8))){
var inst_51684 = (state_51704[(7)]);
var inst_51690 = (state_51704[(10)]);
var inst_51688 = (state_51704[(2)]);
var inst_51689 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51690__$1 = cljs.core.get.call(null,inst_51689,inst_51684);
var state_51704__$1 = (function (){var statearr_51716 = state_51704;
(statearr_51716[(9)] = inst_51688);

(statearr_51716[(10)] = inst_51690__$1);

return statearr_51716;
})();
if(cljs.core.truth_(inst_51690__$1)){
var statearr_51717_51734 = state_51704__$1;
(statearr_51717_51734[(1)] = (9));

} else {
var statearr_51718_51735 = state_51704__$1;
(statearr_51718_51735[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40731__auto__))
;
return ((function (switch__40619__auto__,c__40731__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40620__auto__ = null;
var figwheel$client$file_reloading$state_machine__40620__auto____0 = (function (){
var statearr_51722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51722[(0)] = figwheel$client$file_reloading$state_machine__40620__auto__);

(statearr_51722[(1)] = (1));

return statearr_51722;
});
var figwheel$client$file_reloading$state_machine__40620__auto____1 = (function (state_51704){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_51704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e51723){if((e51723 instanceof Object)){
var ex__40623__auto__ = e51723;
var statearr_51724_51736 = state_51704;
(statearr_51724_51736[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51737 = state_51704;
state_51704 = G__51737;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40620__auto__ = function(state_51704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40620__auto____1.call(this,state_51704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40620__auto____0;
figwheel$client$file_reloading$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40620__auto____1;
return figwheel$client$file_reloading$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__))
})();
var state__40733__auto__ = (function (){var statearr_51725 = f__40732__auto__.call(null);
(statearr_51725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_51725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__))
);

return c__40731__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51738,callback){
var map__51741 = p__51738;
var map__51741__$1 = ((((!((map__51741 == null)))?((((map__51741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51741):map__51741);
var file_msg = map__51741__$1;
var namespace = cljs.core.get.call(null,map__51741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51741,map__51741__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51741,map__51741__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51743){
var map__51746 = p__51743;
var map__51746__$1 = ((((!((map__51746 == null)))?((((map__51746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51746):map__51746);
var file_msg = map__51746__$1;
var namespace = cljs.core.get.call(null,map__51746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36792__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36792__auto__){
var or__36804__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var or__36804__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36804__auto____$1)){
return or__36804__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36792__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51748,callback){
var map__51751 = p__51748;
var map__51751__$1 = ((((!((map__51751 == null)))?((((map__51751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51751):map__51751);
var file_msg = map__51751__$1;
var request_url = cljs.core.get.call(null,map__51751__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__40731__auto___51855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___51855,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___51855,out){
return (function (state_51837){
var state_val_51838 = (state_51837[(1)]);
if((state_val_51838 === (1))){
var inst_51811 = cljs.core.seq.call(null,files);
var inst_51812 = cljs.core.first.call(null,inst_51811);
var inst_51813 = cljs.core.next.call(null,inst_51811);
var inst_51814 = files;
var state_51837__$1 = (function (){var statearr_51839 = state_51837;
(statearr_51839[(7)] = inst_51812);

(statearr_51839[(8)] = inst_51813);

(statearr_51839[(9)] = inst_51814);

return statearr_51839;
})();
var statearr_51840_51856 = state_51837__$1;
(statearr_51840_51856[(2)] = null);

(statearr_51840_51856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51838 === (2))){
var inst_51814 = (state_51837[(9)]);
var inst_51820 = (state_51837[(10)]);
var inst_51819 = cljs.core.seq.call(null,inst_51814);
var inst_51820__$1 = cljs.core.first.call(null,inst_51819);
var inst_51821 = cljs.core.next.call(null,inst_51819);
var inst_51822 = (inst_51820__$1 == null);
var inst_51823 = cljs.core.not.call(null,inst_51822);
var state_51837__$1 = (function (){var statearr_51841 = state_51837;
(statearr_51841[(11)] = inst_51821);

(statearr_51841[(10)] = inst_51820__$1);

return statearr_51841;
})();
if(inst_51823){
var statearr_51842_51857 = state_51837__$1;
(statearr_51842_51857[(1)] = (4));

} else {
var statearr_51843_51858 = state_51837__$1;
(statearr_51843_51858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51838 === (3))){
var inst_51835 = (state_51837[(2)]);
var state_51837__$1 = state_51837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51837__$1,inst_51835);
} else {
if((state_val_51838 === (4))){
var inst_51820 = (state_51837[(10)]);
var inst_51825 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51820);
var state_51837__$1 = state_51837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51837__$1,(7),inst_51825);
} else {
if((state_val_51838 === (5))){
var inst_51831 = cljs.core.async.close_BANG_.call(null,out);
var state_51837__$1 = state_51837;
var statearr_51844_51859 = state_51837__$1;
(statearr_51844_51859[(2)] = inst_51831);

(statearr_51844_51859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51838 === (6))){
var inst_51833 = (state_51837[(2)]);
var state_51837__$1 = state_51837;
var statearr_51845_51860 = state_51837__$1;
(statearr_51845_51860[(2)] = inst_51833);

(statearr_51845_51860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51838 === (7))){
var inst_51821 = (state_51837[(11)]);
var inst_51827 = (state_51837[(2)]);
var inst_51828 = cljs.core.async.put_BANG_.call(null,out,inst_51827);
var inst_51814 = inst_51821;
var state_51837__$1 = (function (){var statearr_51846 = state_51837;
(statearr_51846[(12)] = inst_51828);

(statearr_51846[(9)] = inst_51814);

return statearr_51846;
})();
var statearr_51847_51861 = state_51837__$1;
(statearr_51847_51861[(2)] = null);

(statearr_51847_51861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40731__auto___51855,out))
;
return ((function (switch__40619__auto__,c__40731__auto___51855,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____0 = (function (){
var statearr_51851 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51851[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__);

(statearr_51851[(1)] = (1));

return statearr_51851;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____1 = (function (state_51837){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_51837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e51852){if((e51852 instanceof Object)){
var ex__40623__auto__ = e51852;
var statearr_51853_51862 = state_51837;
(statearr_51853_51862[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51863 = state_51837;
state_51837 = G__51863;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__ = function(state_51837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____1.call(this,state_51837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___51855,out))
})();
var state__40733__auto__ = (function (){var statearr_51854 = f__40732__auto__.call(null);
(statearr_51854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___51855);

return statearr_51854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___51855,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51864,opts){
var map__51868 = p__51864;
var map__51868__$1 = ((((!((map__51868 == null)))?((((map__51868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51868):map__51868);
var eval_body__$1 = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36792__auto__ = eval_body__$1;
if(cljs.core.truth_(and__36792__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__36792__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51870){var e = e51870;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51871_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51871_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51880){
var vec__51881 = p__51880;
var k = cljs.core.nth.call(null,vec__51881,(0),null);
var v = cljs.core.nth.call(null,vec__51881,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51884){
var vec__51885 = p__51884;
var k = cljs.core.nth.call(null,vec__51885,(0),null);
var v = cljs.core.nth.call(null,vec__51885,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51891,p__51892){
var map__52139 = p__51891;
var map__52139__$1 = ((((!((map__52139 == null)))?((((map__52139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52139):map__52139);
var opts = map__52139__$1;
var before_jsload = cljs.core.get.call(null,map__52139__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52139__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52139__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52140 = p__51892;
var map__52140__$1 = ((((!((map__52140 == null)))?((((map__52140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52140):map__52140);
var msg = map__52140__$1;
var files = cljs.core.get.call(null,map__52140__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52140__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52140__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52293){
var state_val_52294 = (state_52293[(1)]);
if((state_val_52294 === (7))){
var inst_52157 = (state_52293[(7)]);
var inst_52154 = (state_52293[(8)]);
var inst_52155 = (state_52293[(9)]);
var inst_52156 = (state_52293[(10)]);
var inst_52162 = cljs.core._nth.call(null,inst_52155,inst_52157);
var inst_52163 = figwheel.client.file_reloading.eval_body.call(null,inst_52162,opts);
var inst_52164 = (inst_52157 + (1));
var tmp52295 = inst_52154;
var tmp52296 = inst_52155;
var tmp52297 = inst_52156;
var inst_52154__$1 = tmp52295;
var inst_52155__$1 = tmp52296;
var inst_52156__$1 = tmp52297;
var inst_52157__$1 = inst_52164;
var state_52293__$1 = (function (){var statearr_52298 = state_52293;
(statearr_52298[(11)] = inst_52163);

(statearr_52298[(7)] = inst_52157__$1);

(statearr_52298[(8)] = inst_52154__$1);

(statearr_52298[(9)] = inst_52155__$1);

(statearr_52298[(10)] = inst_52156__$1);

return statearr_52298;
})();
var statearr_52299_52385 = state_52293__$1;
(statearr_52299_52385[(2)] = null);

(statearr_52299_52385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (20))){
var inst_52197 = (state_52293[(12)]);
var inst_52205 = figwheel.client.file_reloading.sort_files.call(null,inst_52197);
var state_52293__$1 = state_52293;
var statearr_52300_52386 = state_52293__$1;
(statearr_52300_52386[(2)] = inst_52205);

(statearr_52300_52386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (27))){
var state_52293__$1 = state_52293;
var statearr_52301_52387 = state_52293__$1;
(statearr_52301_52387[(2)] = null);

(statearr_52301_52387[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (1))){
var inst_52146 = (state_52293[(13)]);
var inst_52143 = before_jsload.call(null,files);
var inst_52144 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52145 = (function (){return ((function (inst_52146,inst_52143,inst_52144,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51888_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51888_SHARP_);
});
;})(inst_52146,inst_52143,inst_52144,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52146__$1 = cljs.core.filter.call(null,inst_52145,files);
var inst_52147 = cljs.core.not_empty.call(null,inst_52146__$1);
var state_52293__$1 = (function (){var statearr_52302 = state_52293;
(statearr_52302[(13)] = inst_52146__$1);

(statearr_52302[(14)] = inst_52144);

(statearr_52302[(15)] = inst_52143);

return statearr_52302;
})();
if(cljs.core.truth_(inst_52147)){
var statearr_52303_52388 = state_52293__$1;
(statearr_52303_52388[(1)] = (2));

} else {
var statearr_52304_52389 = state_52293__$1;
(statearr_52304_52389[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (24))){
var state_52293__$1 = state_52293;
var statearr_52305_52390 = state_52293__$1;
(statearr_52305_52390[(2)] = null);

(statearr_52305_52390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (39))){
var inst_52247 = (state_52293[(16)]);
var state_52293__$1 = state_52293;
var statearr_52306_52391 = state_52293__$1;
(statearr_52306_52391[(2)] = inst_52247);

(statearr_52306_52391[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (46))){
var inst_52288 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52307_52392 = state_52293__$1;
(statearr_52307_52392[(2)] = inst_52288);

(statearr_52307_52392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (4))){
var inst_52191 = (state_52293[(2)]);
var inst_52192 = cljs.core.List.EMPTY;
var inst_52193 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52192);
var inst_52194 = (function (){return ((function (inst_52191,inst_52192,inst_52193,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51889_SHARP_){
var and__36792__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51889_SHARP_);
if(cljs.core.truth_(and__36792__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51889_SHARP_));
} else {
return and__36792__auto__;
}
});
;})(inst_52191,inst_52192,inst_52193,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52195 = cljs.core.filter.call(null,inst_52194,files);
var inst_52196 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52197 = cljs.core.concat.call(null,inst_52195,inst_52196);
var state_52293__$1 = (function (){var statearr_52308 = state_52293;
(statearr_52308[(17)] = inst_52193);

(statearr_52308[(18)] = inst_52191);

(statearr_52308[(12)] = inst_52197);

return statearr_52308;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52309_52393 = state_52293__$1;
(statearr_52309_52393[(1)] = (16));

} else {
var statearr_52310_52394 = state_52293__$1;
(statearr_52310_52394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (15))){
var inst_52181 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52311_52395 = state_52293__$1;
(statearr_52311_52395[(2)] = inst_52181);

(statearr_52311_52395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (21))){
var inst_52207 = (state_52293[(19)]);
var inst_52207__$1 = (state_52293[(2)]);
var inst_52208 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52207__$1);
var state_52293__$1 = (function (){var statearr_52312 = state_52293;
(statearr_52312[(19)] = inst_52207__$1);

return statearr_52312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52293__$1,(22),inst_52208);
} else {
if((state_val_52294 === (31))){
var inst_52291 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52293__$1,inst_52291);
} else {
if((state_val_52294 === (32))){
var inst_52247 = (state_52293[(16)]);
var inst_52252 = inst_52247.cljs$lang$protocol_mask$partition0$;
var inst_52253 = (inst_52252 & (64));
var inst_52254 = inst_52247.cljs$core$ISeq$;
var inst_52255 = (inst_52253) || (inst_52254);
var state_52293__$1 = state_52293;
if(cljs.core.truth_(inst_52255)){
var statearr_52313_52396 = state_52293__$1;
(statearr_52313_52396[(1)] = (35));

} else {
var statearr_52314_52397 = state_52293__$1;
(statearr_52314_52397[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (40))){
var inst_52268 = (state_52293[(20)]);
var inst_52267 = (state_52293[(2)]);
var inst_52268__$1 = cljs.core.get.call(null,inst_52267,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52269 = cljs.core.get.call(null,inst_52267,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52270 = cljs.core.not_empty.call(null,inst_52268__$1);
var state_52293__$1 = (function (){var statearr_52315 = state_52293;
(statearr_52315[(21)] = inst_52269);

(statearr_52315[(20)] = inst_52268__$1);

return statearr_52315;
})();
if(cljs.core.truth_(inst_52270)){
var statearr_52316_52398 = state_52293__$1;
(statearr_52316_52398[(1)] = (41));

} else {
var statearr_52317_52399 = state_52293__$1;
(statearr_52317_52399[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (33))){
var state_52293__$1 = state_52293;
var statearr_52318_52400 = state_52293__$1;
(statearr_52318_52400[(2)] = false);

(statearr_52318_52400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (13))){
var inst_52167 = (state_52293[(22)]);
var inst_52171 = cljs.core.chunk_first.call(null,inst_52167);
var inst_52172 = cljs.core.chunk_rest.call(null,inst_52167);
var inst_52173 = cljs.core.count.call(null,inst_52171);
var inst_52154 = inst_52172;
var inst_52155 = inst_52171;
var inst_52156 = inst_52173;
var inst_52157 = (0);
var state_52293__$1 = (function (){var statearr_52319 = state_52293;
(statearr_52319[(7)] = inst_52157);

(statearr_52319[(8)] = inst_52154);

(statearr_52319[(9)] = inst_52155);

(statearr_52319[(10)] = inst_52156);

return statearr_52319;
})();
var statearr_52320_52401 = state_52293__$1;
(statearr_52320_52401[(2)] = null);

(statearr_52320_52401[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (22))){
var inst_52215 = (state_52293[(23)]);
var inst_52207 = (state_52293[(19)]);
var inst_52211 = (state_52293[(24)]);
var inst_52210 = (state_52293[(25)]);
var inst_52210__$1 = (state_52293[(2)]);
var inst_52211__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52210__$1);
var inst_52212 = (function (){var all_files = inst_52207;
var res_SINGLEQUOTE_ = inst_52210__$1;
var res = inst_52211__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52215,inst_52207,inst_52211,inst_52210,inst_52210__$1,inst_52211__$1,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51890_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51890_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52215,inst_52207,inst_52211,inst_52210,inst_52210__$1,inst_52211__$1,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52213 = cljs.core.filter.call(null,inst_52212,inst_52210__$1);
var inst_52214 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52215__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52214);
var inst_52216 = cljs.core.not_empty.call(null,inst_52215__$1);
var state_52293__$1 = (function (){var statearr_52321 = state_52293;
(statearr_52321[(23)] = inst_52215__$1);

(statearr_52321[(24)] = inst_52211__$1);

(statearr_52321[(25)] = inst_52210__$1);

(statearr_52321[(26)] = inst_52213);

return statearr_52321;
})();
if(cljs.core.truth_(inst_52216)){
var statearr_52322_52402 = state_52293__$1;
(statearr_52322_52402[(1)] = (23));

} else {
var statearr_52323_52403 = state_52293__$1;
(statearr_52323_52403[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (36))){
var state_52293__$1 = state_52293;
var statearr_52324_52404 = state_52293__$1;
(statearr_52324_52404[(2)] = false);

(statearr_52324_52404[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (41))){
var inst_52268 = (state_52293[(20)]);
var inst_52272 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52273 = cljs.core.map.call(null,inst_52272,inst_52268);
var inst_52274 = cljs.core.pr_str.call(null,inst_52273);
var inst_52275 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52274)].join('');
var inst_52276 = figwheel.client.utils.log.call(null,inst_52275);
var state_52293__$1 = state_52293;
var statearr_52325_52405 = state_52293__$1;
(statearr_52325_52405[(2)] = inst_52276);

(statearr_52325_52405[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (43))){
var inst_52269 = (state_52293[(21)]);
var inst_52279 = (state_52293[(2)]);
var inst_52280 = cljs.core.not_empty.call(null,inst_52269);
var state_52293__$1 = (function (){var statearr_52326 = state_52293;
(statearr_52326[(27)] = inst_52279);

return statearr_52326;
})();
if(cljs.core.truth_(inst_52280)){
var statearr_52327_52406 = state_52293__$1;
(statearr_52327_52406[(1)] = (44));

} else {
var statearr_52328_52407 = state_52293__$1;
(statearr_52328_52407[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (29))){
var inst_52215 = (state_52293[(23)]);
var inst_52207 = (state_52293[(19)]);
var inst_52211 = (state_52293[(24)]);
var inst_52210 = (state_52293[(25)]);
var inst_52213 = (state_52293[(26)]);
var inst_52247 = (state_52293[(16)]);
var inst_52243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52246 = (function (){var all_files = inst_52207;
var res_SINGLEQUOTE_ = inst_52210;
var res = inst_52211;
var files_not_loaded = inst_52213;
var dependencies_that_loaded = inst_52215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52247,inst_52243,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52245){
var map__52329 = p__52245;
var map__52329__$1 = ((((!((map__52329 == null)))?((((map__52329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52329):map__52329);
var namespace = cljs.core.get.call(null,map__52329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52247,inst_52243,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52247__$1 = cljs.core.group_by.call(null,inst_52246,inst_52213);
var inst_52249 = (inst_52247__$1 == null);
var inst_52250 = cljs.core.not.call(null,inst_52249);
var state_52293__$1 = (function (){var statearr_52331 = state_52293;
(statearr_52331[(16)] = inst_52247__$1);

(statearr_52331[(28)] = inst_52243);

return statearr_52331;
})();
if(inst_52250){
var statearr_52332_52408 = state_52293__$1;
(statearr_52332_52408[(1)] = (32));

} else {
var statearr_52333_52409 = state_52293__$1;
(statearr_52333_52409[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (44))){
var inst_52269 = (state_52293[(21)]);
var inst_52282 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52269);
var inst_52283 = cljs.core.pr_str.call(null,inst_52282);
var inst_52284 = [cljs.core.str("not required: "),cljs.core.str(inst_52283)].join('');
var inst_52285 = figwheel.client.utils.log.call(null,inst_52284);
var state_52293__$1 = state_52293;
var statearr_52334_52410 = state_52293__$1;
(statearr_52334_52410[(2)] = inst_52285);

(statearr_52334_52410[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (6))){
var inst_52188 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52335_52411 = state_52293__$1;
(statearr_52335_52411[(2)] = inst_52188);

(statearr_52335_52411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (28))){
var inst_52213 = (state_52293[(26)]);
var inst_52240 = (state_52293[(2)]);
var inst_52241 = cljs.core.not_empty.call(null,inst_52213);
var state_52293__$1 = (function (){var statearr_52336 = state_52293;
(statearr_52336[(29)] = inst_52240);

return statearr_52336;
})();
if(cljs.core.truth_(inst_52241)){
var statearr_52337_52412 = state_52293__$1;
(statearr_52337_52412[(1)] = (29));

} else {
var statearr_52338_52413 = state_52293__$1;
(statearr_52338_52413[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (25))){
var inst_52211 = (state_52293[(24)]);
var inst_52227 = (state_52293[(2)]);
var inst_52228 = cljs.core.not_empty.call(null,inst_52211);
var state_52293__$1 = (function (){var statearr_52339 = state_52293;
(statearr_52339[(30)] = inst_52227);

return statearr_52339;
})();
if(cljs.core.truth_(inst_52228)){
var statearr_52340_52414 = state_52293__$1;
(statearr_52340_52414[(1)] = (26));

} else {
var statearr_52341_52415 = state_52293__$1;
(statearr_52341_52415[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (34))){
var inst_52262 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
if(cljs.core.truth_(inst_52262)){
var statearr_52342_52416 = state_52293__$1;
(statearr_52342_52416[(1)] = (38));

} else {
var statearr_52343_52417 = state_52293__$1;
(statearr_52343_52417[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (17))){
var state_52293__$1 = state_52293;
var statearr_52344_52418 = state_52293__$1;
(statearr_52344_52418[(2)] = recompile_dependents);

(statearr_52344_52418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (3))){
var state_52293__$1 = state_52293;
var statearr_52345_52419 = state_52293__$1;
(statearr_52345_52419[(2)] = null);

(statearr_52345_52419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (12))){
var inst_52184 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52346_52420 = state_52293__$1;
(statearr_52346_52420[(2)] = inst_52184);

(statearr_52346_52420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (2))){
var inst_52146 = (state_52293[(13)]);
var inst_52153 = cljs.core.seq.call(null,inst_52146);
var inst_52154 = inst_52153;
var inst_52155 = null;
var inst_52156 = (0);
var inst_52157 = (0);
var state_52293__$1 = (function (){var statearr_52347 = state_52293;
(statearr_52347[(7)] = inst_52157);

(statearr_52347[(8)] = inst_52154);

(statearr_52347[(9)] = inst_52155);

(statearr_52347[(10)] = inst_52156);

return statearr_52347;
})();
var statearr_52348_52421 = state_52293__$1;
(statearr_52348_52421[(2)] = null);

(statearr_52348_52421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (23))){
var inst_52215 = (state_52293[(23)]);
var inst_52207 = (state_52293[(19)]);
var inst_52211 = (state_52293[(24)]);
var inst_52210 = (state_52293[(25)]);
var inst_52213 = (state_52293[(26)]);
var inst_52218 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52220 = (function (){var all_files = inst_52207;
var res_SINGLEQUOTE_ = inst_52210;
var res = inst_52211;
var files_not_loaded = inst_52213;
var dependencies_that_loaded = inst_52215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52218,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52219){
var map__52349 = p__52219;
var map__52349__$1 = ((((!((map__52349 == null)))?((((map__52349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52349):map__52349);
var request_url = cljs.core.get.call(null,map__52349__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52218,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52221 = cljs.core.reverse.call(null,inst_52215);
var inst_52222 = cljs.core.map.call(null,inst_52220,inst_52221);
var inst_52223 = cljs.core.pr_str.call(null,inst_52222);
var inst_52224 = figwheel.client.utils.log.call(null,inst_52223);
var state_52293__$1 = (function (){var statearr_52351 = state_52293;
(statearr_52351[(31)] = inst_52218);

return statearr_52351;
})();
var statearr_52352_52422 = state_52293__$1;
(statearr_52352_52422[(2)] = inst_52224);

(statearr_52352_52422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (35))){
var state_52293__$1 = state_52293;
var statearr_52353_52423 = state_52293__$1;
(statearr_52353_52423[(2)] = true);

(statearr_52353_52423[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (19))){
var inst_52197 = (state_52293[(12)]);
var inst_52203 = figwheel.client.file_reloading.expand_files.call(null,inst_52197);
var state_52293__$1 = state_52293;
var statearr_52354_52424 = state_52293__$1;
(statearr_52354_52424[(2)] = inst_52203);

(statearr_52354_52424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (11))){
var state_52293__$1 = state_52293;
var statearr_52355_52425 = state_52293__$1;
(statearr_52355_52425[(2)] = null);

(statearr_52355_52425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (9))){
var inst_52186 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52356_52426 = state_52293__$1;
(statearr_52356_52426[(2)] = inst_52186);

(statearr_52356_52426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (5))){
var inst_52157 = (state_52293[(7)]);
var inst_52156 = (state_52293[(10)]);
var inst_52159 = (inst_52157 < inst_52156);
var inst_52160 = inst_52159;
var state_52293__$1 = state_52293;
if(cljs.core.truth_(inst_52160)){
var statearr_52357_52427 = state_52293__$1;
(statearr_52357_52427[(1)] = (7));

} else {
var statearr_52358_52428 = state_52293__$1;
(statearr_52358_52428[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (14))){
var inst_52167 = (state_52293[(22)]);
var inst_52176 = cljs.core.first.call(null,inst_52167);
var inst_52177 = figwheel.client.file_reloading.eval_body.call(null,inst_52176,opts);
var inst_52178 = cljs.core.next.call(null,inst_52167);
var inst_52154 = inst_52178;
var inst_52155 = null;
var inst_52156 = (0);
var inst_52157 = (0);
var state_52293__$1 = (function (){var statearr_52359 = state_52293;
(statearr_52359[(7)] = inst_52157);

(statearr_52359[(8)] = inst_52154);

(statearr_52359[(9)] = inst_52155);

(statearr_52359[(32)] = inst_52177);

(statearr_52359[(10)] = inst_52156);

return statearr_52359;
})();
var statearr_52360_52429 = state_52293__$1;
(statearr_52360_52429[(2)] = null);

(statearr_52360_52429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (45))){
var state_52293__$1 = state_52293;
var statearr_52361_52430 = state_52293__$1;
(statearr_52361_52430[(2)] = null);

(statearr_52361_52430[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (26))){
var inst_52215 = (state_52293[(23)]);
var inst_52207 = (state_52293[(19)]);
var inst_52211 = (state_52293[(24)]);
var inst_52210 = (state_52293[(25)]);
var inst_52213 = (state_52293[(26)]);
var inst_52230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52232 = (function (){var all_files = inst_52207;
var res_SINGLEQUOTE_ = inst_52210;
var res = inst_52211;
var files_not_loaded = inst_52213;
var dependencies_that_loaded = inst_52215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52230,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52231){
var map__52362 = p__52231;
var map__52362__$1 = ((((!((map__52362 == null)))?((((map__52362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52362):map__52362);
var namespace = cljs.core.get.call(null,map__52362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52362__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52230,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52233 = cljs.core.map.call(null,inst_52232,inst_52211);
var inst_52234 = cljs.core.pr_str.call(null,inst_52233);
var inst_52235 = figwheel.client.utils.log.call(null,inst_52234);
var inst_52236 = (function (){var all_files = inst_52207;
var res_SINGLEQUOTE_ = inst_52210;
var res = inst_52211;
var files_not_loaded = inst_52213;
var dependencies_that_loaded = inst_52215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52230,inst_52232,inst_52233,inst_52234,inst_52235,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52215,inst_52207,inst_52211,inst_52210,inst_52213,inst_52230,inst_52232,inst_52233,inst_52234,inst_52235,state_val_52294,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52237 = setTimeout(inst_52236,(10));
var state_52293__$1 = (function (){var statearr_52364 = state_52293;
(statearr_52364[(33)] = inst_52230);

(statearr_52364[(34)] = inst_52235);

return statearr_52364;
})();
var statearr_52365_52431 = state_52293__$1;
(statearr_52365_52431[(2)] = inst_52237);

(statearr_52365_52431[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (16))){
var state_52293__$1 = state_52293;
var statearr_52366_52432 = state_52293__$1;
(statearr_52366_52432[(2)] = reload_dependents);

(statearr_52366_52432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (38))){
var inst_52247 = (state_52293[(16)]);
var inst_52264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52247);
var state_52293__$1 = state_52293;
var statearr_52367_52433 = state_52293__$1;
(statearr_52367_52433[(2)] = inst_52264);

(statearr_52367_52433[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (30))){
var state_52293__$1 = state_52293;
var statearr_52368_52434 = state_52293__$1;
(statearr_52368_52434[(2)] = null);

(statearr_52368_52434[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (10))){
var inst_52167 = (state_52293[(22)]);
var inst_52169 = cljs.core.chunked_seq_QMARK_.call(null,inst_52167);
var state_52293__$1 = state_52293;
if(inst_52169){
var statearr_52369_52435 = state_52293__$1;
(statearr_52369_52435[(1)] = (13));

} else {
var statearr_52370_52436 = state_52293__$1;
(statearr_52370_52436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (18))){
var inst_52201 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
if(cljs.core.truth_(inst_52201)){
var statearr_52371_52437 = state_52293__$1;
(statearr_52371_52437[(1)] = (19));

} else {
var statearr_52372_52438 = state_52293__$1;
(statearr_52372_52438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (42))){
var state_52293__$1 = state_52293;
var statearr_52373_52439 = state_52293__$1;
(statearr_52373_52439[(2)] = null);

(statearr_52373_52439[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (37))){
var inst_52259 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52374_52440 = state_52293__$1;
(statearr_52374_52440[(2)] = inst_52259);

(statearr_52374_52440[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (8))){
var inst_52154 = (state_52293[(8)]);
var inst_52167 = (state_52293[(22)]);
var inst_52167__$1 = cljs.core.seq.call(null,inst_52154);
var state_52293__$1 = (function (){var statearr_52375 = state_52293;
(statearr_52375[(22)] = inst_52167__$1);

return statearr_52375;
})();
if(inst_52167__$1){
var statearr_52376_52441 = state_52293__$1;
(statearr_52376_52441[(1)] = (10));

} else {
var statearr_52377_52442 = state_52293__$1;
(statearr_52377_52442[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40619__auto__,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____0 = (function (){
var statearr_52381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52381[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__);

(statearr_52381[(1)] = (1));

return statearr_52381;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____1 = (function (state_52293){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_52293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e52382){if((e52382 instanceof Object)){
var ex__40623__auto__ = e52382;
var statearr_52383_52443 = state_52293;
(statearr_52383_52443[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52444 = state_52293;
state_52293 = G__52444;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__ = function(state_52293){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____1.call(this,state_52293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40733__auto__ = (function (){var statearr_52384 = f__40732__auto__.call(null);
(statearr_52384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_52384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,map__52139,map__52139__$1,opts,before_jsload,on_jsload,reload_dependents,map__52140,map__52140__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40731__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52447,link){
var map__52450 = p__52447;
var map__52450__$1 = ((((!((map__52450 == null)))?((((map__52450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52450):map__52450);
var file = cljs.core.get.call(null,map__52450__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52450,map__52450__$1,file){
return (function (p1__52445_SHARP_,p2__52446_SHARP_){
if(cljs.core._EQ_.call(null,p1__52445_SHARP_,p2__52446_SHARP_)){
return p1__52445_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52450,map__52450__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52456){
var map__52457 = p__52456;
var map__52457__$1 = ((((!((map__52457 == null)))?((((map__52457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52457):map__52457);
var match_length = cljs.core.get.call(null,map__52457__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52457__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52452_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52452_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args52459 = [];
var len__37879__auto___52462 = arguments.length;
var i__37880__auto___52463 = (0);
while(true){
if((i__37880__auto___52463 < len__37879__auto___52462)){
args52459.push((arguments[i__37880__auto___52463]));

var G__52464 = (i__37880__auto___52463 + (1));
i__37880__auto___52463 = G__52464;
continue;
} else {
}
break;
}

var G__52461 = args52459.length;
switch (G__52461) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52459.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52466_SHARP_,p2__52467_SHARP_){
return cljs.core.assoc.call(null,p1__52466_SHARP_,cljs.core.get.call(null,p2__52467_SHARP_,key),p2__52467_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52468){
var map__52471 = p__52468;
var map__52471__$1 = ((((!((map__52471 == null)))?((((map__52471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52471):map__52471);
var f_data = map__52471__$1;
var file = cljs.core.get.call(null,map__52471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52473,p__52474){
var map__52483 = p__52473;
var map__52483__$1 = ((((!((map__52483 == null)))?((((map__52483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52483):map__52483);
var opts = map__52483__$1;
var on_cssload = cljs.core.get.call(null,map__52483__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52484 = p__52474;
var map__52484__$1 = ((((!((map__52484 == null)))?((((map__52484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52484):map__52484);
var files_msg = map__52484__$1;
var files = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52487_52491 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52488_52492 = null;
var count__52489_52493 = (0);
var i__52490_52494 = (0);
while(true){
if((i__52490_52494 < count__52489_52493)){
var f_52495 = cljs.core._nth.call(null,chunk__52488_52492,i__52490_52494);
figwheel.client.file_reloading.reload_css_file.call(null,f_52495);

var G__52496 = seq__52487_52491;
var G__52497 = chunk__52488_52492;
var G__52498 = count__52489_52493;
var G__52499 = (i__52490_52494 + (1));
seq__52487_52491 = G__52496;
chunk__52488_52492 = G__52497;
count__52489_52493 = G__52498;
i__52490_52494 = G__52499;
continue;
} else {
var temp__4657__auto___52500 = cljs.core.seq.call(null,seq__52487_52491);
if(temp__4657__auto___52500){
var seq__52487_52501__$1 = temp__4657__auto___52500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52487_52501__$1)){
var c__37615__auto___52502 = cljs.core.chunk_first.call(null,seq__52487_52501__$1);
var G__52503 = cljs.core.chunk_rest.call(null,seq__52487_52501__$1);
var G__52504 = c__37615__auto___52502;
var G__52505 = cljs.core.count.call(null,c__37615__auto___52502);
var G__52506 = (0);
seq__52487_52491 = G__52503;
chunk__52488_52492 = G__52504;
count__52489_52493 = G__52505;
i__52490_52494 = G__52506;
continue;
} else {
var f_52507 = cljs.core.first.call(null,seq__52487_52501__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52507);

var G__52508 = cljs.core.next.call(null,seq__52487_52501__$1);
var G__52509 = null;
var G__52510 = (0);
var G__52511 = (0);
seq__52487_52491 = G__52508;
chunk__52488_52492 = G__52509;
count__52489_52493 = G__52510;
i__52490_52494 = G__52511;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52483,map__52483__$1,opts,on_cssload,map__52484,map__52484__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52483,map__52483__$1,opts,on_cssload,map__52484,map__52484__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map