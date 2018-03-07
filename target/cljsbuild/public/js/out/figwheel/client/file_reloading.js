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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51460_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51460_SHARP_));
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
var seq__51465 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51466 = null;
var count__51467 = (0);
var i__51468 = (0);
while(true){
if((i__51468 < count__51467)){
var n = cljs.core._nth.call(null,chunk__51466,i__51468);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51469 = seq__51465;
var G__51470 = chunk__51466;
var G__51471 = count__51467;
var G__51472 = (i__51468 + (1));
seq__51465 = G__51469;
chunk__51466 = G__51470;
count__51467 = G__51471;
i__51468 = G__51472;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51465);
if(temp__4657__auto__){
var seq__51465__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51465__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__51465__$1);
var G__51473 = cljs.core.chunk_rest.call(null,seq__51465__$1);
var G__51474 = c__37615__auto__;
var G__51475 = cljs.core.count.call(null,c__37615__auto__);
var G__51476 = (0);
seq__51465 = G__51473;
chunk__51466 = G__51474;
count__51467 = G__51475;
i__51468 = G__51476;
continue;
} else {
var n = cljs.core.first.call(null,seq__51465__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51477 = cljs.core.next.call(null,seq__51465__$1);
var G__51478 = null;
var G__51479 = (0);
var G__51480 = (0);
seq__51465 = G__51477;
chunk__51466 = G__51478;
count__51467 = G__51479;
i__51468 = G__51480;
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

var seq__51531_51542 = cljs.core.seq.call(null,deps);
var chunk__51532_51543 = null;
var count__51533_51544 = (0);
var i__51534_51545 = (0);
while(true){
if((i__51534_51545 < count__51533_51544)){
var dep_51546 = cljs.core._nth.call(null,chunk__51532_51543,i__51534_51545);
topo_sort_helper_STAR_.call(null,dep_51546,(depth + (1)),state);

var G__51547 = seq__51531_51542;
var G__51548 = chunk__51532_51543;
var G__51549 = count__51533_51544;
var G__51550 = (i__51534_51545 + (1));
seq__51531_51542 = G__51547;
chunk__51532_51543 = G__51548;
count__51533_51544 = G__51549;
i__51534_51545 = G__51550;
continue;
} else {
var temp__4657__auto___51551 = cljs.core.seq.call(null,seq__51531_51542);
if(temp__4657__auto___51551){
var seq__51531_51552__$1 = temp__4657__auto___51551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51531_51552__$1)){
var c__37615__auto___51553 = cljs.core.chunk_first.call(null,seq__51531_51552__$1);
var G__51554 = cljs.core.chunk_rest.call(null,seq__51531_51552__$1);
var G__51555 = c__37615__auto___51553;
var G__51556 = cljs.core.count.call(null,c__37615__auto___51553);
var G__51557 = (0);
seq__51531_51542 = G__51554;
chunk__51532_51543 = G__51555;
count__51533_51544 = G__51556;
i__51534_51545 = G__51557;
continue;
} else {
var dep_51558 = cljs.core.first.call(null,seq__51531_51552__$1);
topo_sort_helper_STAR_.call(null,dep_51558,(depth + (1)),state);

var G__51559 = cljs.core.next.call(null,seq__51531_51552__$1);
var G__51560 = null;
var G__51561 = (0);
var G__51562 = (0);
seq__51531_51542 = G__51559;
chunk__51532_51543 = G__51560;
count__51533_51544 = G__51561;
i__51534_51545 = G__51562;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51535){
var vec__51539 = p__51535;
var seq__51540 = cljs.core.seq.call(null,vec__51539);
var first__51541 = cljs.core.first.call(null,seq__51540);
var seq__51540__$1 = cljs.core.next.call(null,seq__51540);
var x = first__51541;
var xs = seq__51540__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51539,seq__51540,first__51541,seq__51540__$1,x,xs,get_deps__$1){
return (function (p1__51481_SHARP_){
return clojure.set.difference.call(null,p1__51481_SHARP_,x);
});})(vec__51539,seq__51540,first__51541,seq__51540__$1,x,xs,get_deps__$1))
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
var seq__51575 = cljs.core.seq.call(null,provides);
var chunk__51576 = null;
var count__51577 = (0);
var i__51578 = (0);
while(true){
if((i__51578 < count__51577)){
var prov = cljs.core._nth.call(null,chunk__51576,i__51578);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51579_51587 = cljs.core.seq.call(null,requires);
var chunk__51580_51588 = null;
var count__51581_51589 = (0);
var i__51582_51590 = (0);
while(true){
if((i__51582_51590 < count__51581_51589)){
var req_51591 = cljs.core._nth.call(null,chunk__51580_51588,i__51582_51590);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51591,prov);

var G__51592 = seq__51579_51587;
var G__51593 = chunk__51580_51588;
var G__51594 = count__51581_51589;
var G__51595 = (i__51582_51590 + (1));
seq__51579_51587 = G__51592;
chunk__51580_51588 = G__51593;
count__51581_51589 = G__51594;
i__51582_51590 = G__51595;
continue;
} else {
var temp__4657__auto___51596 = cljs.core.seq.call(null,seq__51579_51587);
if(temp__4657__auto___51596){
var seq__51579_51597__$1 = temp__4657__auto___51596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51579_51597__$1)){
var c__37615__auto___51598 = cljs.core.chunk_first.call(null,seq__51579_51597__$1);
var G__51599 = cljs.core.chunk_rest.call(null,seq__51579_51597__$1);
var G__51600 = c__37615__auto___51598;
var G__51601 = cljs.core.count.call(null,c__37615__auto___51598);
var G__51602 = (0);
seq__51579_51587 = G__51599;
chunk__51580_51588 = G__51600;
count__51581_51589 = G__51601;
i__51582_51590 = G__51602;
continue;
} else {
var req_51603 = cljs.core.first.call(null,seq__51579_51597__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51603,prov);

var G__51604 = cljs.core.next.call(null,seq__51579_51597__$1);
var G__51605 = null;
var G__51606 = (0);
var G__51607 = (0);
seq__51579_51587 = G__51604;
chunk__51580_51588 = G__51605;
count__51581_51589 = G__51606;
i__51582_51590 = G__51607;
continue;
}
} else {
}
}
break;
}

var G__51608 = seq__51575;
var G__51609 = chunk__51576;
var G__51610 = count__51577;
var G__51611 = (i__51578 + (1));
seq__51575 = G__51608;
chunk__51576 = G__51609;
count__51577 = G__51610;
i__51578 = G__51611;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51575);
if(temp__4657__auto__){
var seq__51575__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51575__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__51575__$1);
var G__51612 = cljs.core.chunk_rest.call(null,seq__51575__$1);
var G__51613 = c__37615__auto__;
var G__51614 = cljs.core.count.call(null,c__37615__auto__);
var G__51615 = (0);
seq__51575 = G__51612;
chunk__51576 = G__51613;
count__51577 = G__51614;
i__51578 = G__51615;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51575__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51583_51616 = cljs.core.seq.call(null,requires);
var chunk__51584_51617 = null;
var count__51585_51618 = (0);
var i__51586_51619 = (0);
while(true){
if((i__51586_51619 < count__51585_51618)){
var req_51620 = cljs.core._nth.call(null,chunk__51584_51617,i__51586_51619);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51620,prov);

var G__51621 = seq__51583_51616;
var G__51622 = chunk__51584_51617;
var G__51623 = count__51585_51618;
var G__51624 = (i__51586_51619 + (1));
seq__51583_51616 = G__51621;
chunk__51584_51617 = G__51622;
count__51585_51618 = G__51623;
i__51586_51619 = G__51624;
continue;
} else {
var temp__4657__auto___51625__$1 = cljs.core.seq.call(null,seq__51583_51616);
if(temp__4657__auto___51625__$1){
var seq__51583_51626__$1 = temp__4657__auto___51625__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51583_51626__$1)){
var c__37615__auto___51627 = cljs.core.chunk_first.call(null,seq__51583_51626__$1);
var G__51628 = cljs.core.chunk_rest.call(null,seq__51583_51626__$1);
var G__51629 = c__37615__auto___51627;
var G__51630 = cljs.core.count.call(null,c__37615__auto___51627);
var G__51631 = (0);
seq__51583_51616 = G__51628;
chunk__51584_51617 = G__51629;
count__51585_51618 = G__51630;
i__51586_51619 = G__51631;
continue;
} else {
var req_51632 = cljs.core.first.call(null,seq__51583_51626__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51632,prov);

var G__51633 = cljs.core.next.call(null,seq__51583_51626__$1);
var G__51634 = null;
var G__51635 = (0);
var G__51636 = (0);
seq__51583_51616 = G__51633;
chunk__51584_51617 = G__51634;
count__51585_51618 = G__51635;
i__51586_51619 = G__51636;
continue;
}
} else {
}
}
break;
}

var G__51637 = cljs.core.next.call(null,seq__51575__$1);
var G__51638 = null;
var G__51639 = (0);
var G__51640 = (0);
seq__51575 = G__51637;
chunk__51576 = G__51638;
count__51577 = G__51639;
i__51578 = G__51640;
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
var seq__51645_51649 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51646_51650 = null;
var count__51647_51651 = (0);
var i__51648_51652 = (0);
while(true){
if((i__51648_51652 < count__51647_51651)){
var ns_51653 = cljs.core._nth.call(null,chunk__51646_51650,i__51648_51652);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51653);

var G__51654 = seq__51645_51649;
var G__51655 = chunk__51646_51650;
var G__51656 = count__51647_51651;
var G__51657 = (i__51648_51652 + (1));
seq__51645_51649 = G__51654;
chunk__51646_51650 = G__51655;
count__51647_51651 = G__51656;
i__51648_51652 = G__51657;
continue;
} else {
var temp__4657__auto___51658 = cljs.core.seq.call(null,seq__51645_51649);
if(temp__4657__auto___51658){
var seq__51645_51659__$1 = temp__4657__auto___51658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51645_51659__$1)){
var c__37615__auto___51660 = cljs.core.chunk_first.call(null,seq__51645_51659__$1);
var G__51661 = cljs.core.chunk_rest.call(null,seq__51645_51659__$1);
var G__51662 = c__37615__auto___51660;
var G__51663 = cljs.core.count.call(null,c__37615__auto___51660);
var G__51664 = (0);
seq__51645_51649 = G__51661;
chunk__51646_51650 = G__51662;
count__51647_51651 = G__51663;
i__51648_51652 = G__51664;
continue;
} else {
var ns_51665 = cljs.core.first.call(null,seq__51645_51659__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51665);

var G__51666 = cljs.core.next.call(null,seq__51645_51659__$1);
var G__51667 = null;
var G__51668 = (0);
var G__51669 = (0);
seq__51645_51649 = G__51666;
chunk__51646_51650 = G__51667;
count__51647_51651 = G__51668;
i__51648_51652 = G__51669;
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
var G__51670__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51671__i = 0, G__51671__a = new Array(arguments.length -  0);
while (G__51671__i < G__51671__a.length) {G__51671__a[G__51671__i] = arguments[G__51671__i + 0]; ++G__51671__i;}
  args = new cljs.core.IndexedSeq(G__51671__a,0);
} 
return G__51670__delegate.call(this,args);};
G__51670.cljs$lang$maxFixedArity = 0;
G__51670.cljs$lang$applyTo = (function (arglist__51672){
var args = cljs.core.seq(arglist__51672);
return G__51670__delegate(args);
});
G__51670.cljs$core$IFn$_invoke$arity$variadic = G__51670__delegate;
return G__51670;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51674 = cljs.core._EQ_;
var expr__51675 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51674.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51675))){
var path_parts = ((function (pred__51674,expr__51675){
return (function (p1__51673_SHARP_){
return clojure.string.split.call(null,p1__51673_SHARP_,/[\/\\]/);
});})(pred__51674,expr__51675))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51674,expr__51675){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51677){if((e51677 instanceof Error)){
var e = e51677;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51677;

}
}})());
});
;})(path_parts,sep,root,pred__51674,expr__51675))
} else {
if(cljs.core.truth_(pred__51674.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51675))){
return ((function (pred__51674,expr__51675){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51674,expr__51675){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51674,expr__51675))
);

return deferred.addErrback(((function (deferred,pred__51674,expr__51675){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51674,expr__51675))
);
});
;})(pred__51674,expr__51675))
} else {
return ((function (pred__51674,expr__51675){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51674,expr__51675))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51678,callback){
var map__51681 = p__51678;
var map__51681__$1 = ((((!((map__51681 == null)))?((((map__51681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51681):map__51681);
var file_msg = map__51681__$1;
var request_url = cljs.core.get.call(null,map__51681__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51681,map__51681__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51681,map__51681__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__){
return (function (state_51705){
var state_val_51706 = (state_51705[(1)]);
if((state_val_51706 === (7))){
var inst_51701 = (state_51705[(2)]);
var state_51705__$1 = state_51705;
var statearr_51707_51727 = state_51705__$1;
(statearr_51707_51727[(2)] = inst_51701);

(statearr_51707_51727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51706 === (1))){
var state_51705__$1 = state_51705;
var statearr_51708_51728 = state_51705__$1;
(statearr_51708_51728[(2)] = null);

(statearr_51708_51728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51706 === (4))){
var inst_51685 = (state_51705[(7)]);
var inst_51685__$1 = (state_51705[(2)]);
var state_51705__$1 = (function (){var statearr_51709 = state_51705;
(statearr_51709[(7)] = inst_51685__$1);

return statearr_51709;
})();
if(cljs.core.truth_(inst_51685__$1)){
var statearr_51710_51729 = state_51705__$1;
(statearr_51710_51729[(1)] = (5));

} else {
var statearr_51711_51730 = state_51705__$1;
(statearr_51711_51730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51706 === (6))){
var state_51705__$1 = state_51705;
var statearr_51712_51731 = state_51705__$1;
(statearr_51712_51731[(2)] = null);

(statearr_51712_51731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51706 === (3))){
var inst_51703 = (state_51705[(2)]);
var state_51705__$1 = state_51705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51705__$1,inst_51703);
} else {
if((state_val_51706 === (2))){
var state_51705__$1 = state_51705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51705__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51706 === (11))){
var inst_51697 = (state_51705[(2)]);
var state_51705__$1 = (function (){var statearr_51713 = state_51705;
(statearr_51713[(8)] = inst_51697);

return statearr_51713;
})();
var statearr_51714_51732 = state_51705__$1;
(statearr_51714_51732[(2)] = null);

(statearr_51714_51732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51706 === (9))){
var inst_51691 = (state_51705[(9)]);
var inst_51689 = (state_51705[(10)]);
var inst_51693 = inst_51691.call(null,inst_51689);
var state_51705__$1 = state_51705;
var statearr_51715_51733 = state_51705__$1;
(statearr_51715_51733[(2)] = inst_51693);

(statearr_51715_51733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51706 === (5))){
var inst_51685 = (state_51705[(7)]);
var inst_51687 = figwheel.client.file_reloading.blocking_load.call(null,inst_51685);
var state_51705__$1 = state_51705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51705__$1,(8),inst_51687);
} else {
if((state_val_51706 === (10))){
var inst_51689 = (state_51705[(10)]);
var inst_51695 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51689);
var state_51705__$1 = state_51705;
var statearr_51716_51734 = state_51705__$1;
(statearr_51716_51734[(2)] = inst_51695);

(statearr_51716_51734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51706 === (8))){
var inst_51691 = (state_51705[(9)]);
var inst_51685 = (state_51705[(7)]);
var inst_51689 = (state_51705[(2)]);
var inst_51690 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51691__$1 = cljs.core.get.call(null,inst_51690,inst_51685);
var state_51705__$1 = (function (){var statearr_51717 = state_51705;
(statearr_51717[(9)] = inst_51691__$1);

(statearr_51717[(10)] = inst_51689);

return statearr_51717;
})();
if(cljs.core.truth_(inst_51691__$1)){
var statearr_51718_51735 = state_51705__$1;
(statearr_51718_51735[(1)] = (9));

} else {
var statearr_51719_51736 = state_51705__$1;
(statearr_51719_51736[(1)] = (10));

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
});})(c__40682__auto__))
;
return ((function (switch__40570__auto__,c__40682__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40571__auto__ = null;
var figwheel$client$file_reloading$state_machine__40571__auto____0 = (function (){
var statearr_51723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51723[(0)] = figwheel$client$file_reloading$state_machine__40571__auto__);

(statearr_51723[(1)] = (1));

return statearr_51723;
});
var figwheel$client$file_reloading$state_machine__40571__auto____1 = (function (state_51705){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_51705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e51724){if((e51724 instanceof Object)){
var ex__40574__auto__ = e51724;
var statearr_51725_51737 = state_51705;
(statearr_51725_51737[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51738 = state_51705;
state_51705 = G__51738;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40571__auto__ = function(state_51705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40571__auto____1.call(this,state_51705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40571__auto____0;
figwheel$client$file_reloading$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40571__auto____1;
return figwheel$client$file_reloading$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__))
})();
var state__40684__auto__ = (function (){var statearr_51726 = f__40683__auto__.call(null);
(statearr_51726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_51726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__))
);

return c__40682__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51739,callback){
var map__51742 = p__51739;
var map__51742__$1 = ((((!((map__51742 == null)))?((((map__51742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51742):map__51742);
var file_msg = map__51742__$1;
var namespace = cljs.core.get.call(null,map__51742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51742,map__51742__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51742,map__51742__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51744){
var map__51747 = p__51744;
var map__51747__$1 = ((((!((map__51747 == null)))?((((map__51747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51747):map__51747);
var file_msg = map__51747__$1;
var namespace = cljs.core.get.call(null,map__51747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51749,callback){
var map__51752 = p__51749;
var map__51752__$1 = ((((!((map__51752 == null)))?((((map__51752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51752):map__51752);
var file_msg = map__51752__$1;
var request_url = cljs.core.get.call(null,map__51752__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40682__auto___51856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___51856,out){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___51856,out){
return (function (state_51838){
var state_val_51839 = (state_51838[(1)]);
if((state_val_51839 === (1))){
var inst_51812 = cljs.core.seq.call(null,files);
var inst_51813 = cljs.core.first.call(null,inst_51812);
var inst_51814 = cljs.core.next.call(null,inst_51812);
var inst_51815 = files;
var state_51838__$1 = (function (){var statearr_51840 = state_51838;
(statearr_51840[(7)] = inst_51813);

(statearr_51840[(8)] = inst_51815);

(statearr_51840[(9)] = inst_51814);

return statearr_51840;
})();
var statearr_51841_51857 = state_51838__$1;
(statearr_51841_51857[(2)] = null);

(statearr_51841_51857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (2))){
var inst_51815 = (state_51838[(8)]);
var inst_51821 = (state_51838[(10)]);
var inst_51820 = cljs.core.seq.call(null,inst_51815);
var inst_51821__$1 = cljs.core.first.call(null,inst_51820);
var inst_51822 = cljs.core.next.call(null,inst_51820);
var inst_51823 = (inst_51821__$1 == null);
var inst_51824 = cljs.core.not.call(null,inst_51823);
var state_51838__$1 = (function (){var statearr_51842 = state_51838;
(statearr_51842[(10)] = inst_51821__$1);

(statearr_51842[(11)] = inst_51822);

return statearr_51842;
})();
if(inst_51824){
var statearr_51843_51858 = state_51838__$1;
(statearr_51843_51858[(1)] = (4));

} else {
var statearr_51844_51859 = state_51838__$1;
(statearr_51844_51859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (3))){
var inst_51836 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51838__$1,inst_51836);
} else {
if((state_val_51839 === (4))){
var inst_51821 = (state_51838[(10)]);
var inst_51826 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51821);
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51838__$1,(7),inst_51826);
} else {
if((state_val_51839 === (5))){
var inst_51832 = cljs.core.async.close_BANG_.call(null,out);
var state_51838__$1 = state_51838;
var statearr_51845_51860 = state_51838__$1;
(statearr_51845_51860[(2)] = inst_51832);

(statearr_51845_51860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (6))){
var inst_51834 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
var statearr_51846_51861 = state_51838__$1;
(statearr_51846_51861[(2)] = inst_51834);

(statearr_51846_51861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (7))){
var inst_51822 = (state_51838[(11)]);
var inst_51828 = (state_51838[(2)]);
var inst_51829 = cljs.core.async.put_BANG_.call(null,out,inst_51828);
var inst_51815 = inst_51822;
var state_51838__$1 = (function (){var statearr_51847 = state_51838;
(statearr_51847[(8)] = inst_51815);

(statearr_51847[(12)] = inst_51829);

return statearr_51847;
})();
var statearr_51848_51862 = state_51838__$1;
(statearr_51848_51862[(2)] = null);

(statearr_51848_51862[(1)] = (2));


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
});})(c__40682__auto___51856,out))
;
return ((function (switch__40570__auto__,c__40682__auto___51856,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto____0 = (function (){
var statearr_51852 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51852[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto__);

(statearr_51852[(1)] = (1));

return statearr_51852;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto____1 = (function (state_51838){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_51838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e51853){if((e51853 instanceof Object)){
var ex__40574__auto__ = e51853;
var statearr_51854_51863 = state_51838;
(statearr_51854_51863[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51864 = state_51838;
state_51838 = G__51864;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto__ = function(state_51838){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto____1.call(this,state_51838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___51856,out))
})();
var state__40684__auto__ = (function (){var statearr_51855 = f__40683__auto__.call(null);
(statearr_51855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___51856);

return statearr_51855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___51856,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51865,opts){
var map__51869 = p__51865;
var map__51869__$1 = ((((!((map__51869 == null)))?((((map__51869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51869):map__51869);
var eval_body__$1 = cljs.core.get.call(null,map__51869__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e51871){var e = e51871;
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
return (function (p1__51872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51872_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__51881){
var vec__51882 = p__51881;
var k = cljs.core.nth.call(null,vec__51882,(0),null);
var v = cljs.core.nth.call(null,vec__51882,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51885){
var vec__51886 = p__51885;
var k = cljs.core.nth.call(null,vec__51886,(0),null);
var v = cljs.core.nth.call(null,vec__51886,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51892,p__51893){
var map__52140 = p__51892;
var map__52140__$1 = ((((!((map__52140 == null)))?((((map__52140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52140):map__52140);
var opts = map__52140__$1;
var before_jsload = cljs.core.get.call(null,map__52140__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52140__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52140__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52141 = p__51893;
var map__52141__$1 = ((((!((map__52141 == null)))?((((map__52141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52141):map__52141);
var msg = map__52141__$1;
var files = cljs.core.get.call(null,map__52141__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52141__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52141__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52294){
var state_val_52295 = (state_52294[(1)]);
if((state_val_52295 === (7))){
var inst_52157 = (state_52294[(7)]);
var inst_52158 = (state_52294[(8)]);
var inst_52155 = (state_52294[(9)]);
var inst_52156 = (state_52294[(10)]);
var inst_52163 = cljs.core._nth.call(null,inst_52156,inst_52158);
var inst_52164 = figwheel.client.file_reloading.eval_body.call(null,inst_52163,opts);
var inst_52165 = (inst_52158 + (1));
var tmp52296 = inst_52157;
var tmp52297 = inst_52155;
var tmp52298 = inst_52156;
var inst_52155__$1 = tmp52297;
var inst_52156__$1 = tmp52298;
var inst_52157__$1 = tmp52296;
var inst_52158__$1 = inst_52165;
var state_52294__$1 = (function (){var statearr_52299 = state_52294;
(statearr_52299[(11)] = inst_52164);

(statearr_52299[(7)] = inst_52157__$1);

(statearr_52299[(8)] = inst_52158__$1);

(statearr_52299[(9)] = inst_52155__$1);

(statearr_52299[(10)] = inst_52156__$1);

return statearr_52299;
})();
var statearr_52300_52386 = state_52294__$1;
(statearr_52300_52386[(2)] = null);

(statearr_52300_52386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (20))){
var inst_52198 = (state_52294[(12)]);
var inst_52206 = figwheel.client.file_reloading.sort_files.call(null,inst_52198);
var state_52294__$1 = state_52294;
var statearr_52301_52387 = state_52294__$1;
(statearr_52301_52387[(2)] = inst_52206);

(statearr_52301_52387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (27))){
var state_52294__$1 = state_52294;
var statearr_52302_52388 = state_52294__$1;
(statearr_52302_52388[(2)] = null);

(statearr_52302_52388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (1))){
var inst_52147 = (state_52294[(13)]);
var inst_52144 = before_jsload.call(null,files);
var inst_52145 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52146 = (function (){return ((function (inst_52147,inst_52144,inst_52145,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51889_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51889_SHARP_);
});
;})(inst_52147,inst_52144,inst_52145,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52147__$1 = cljs.core.filter.call(null,inst_52146,files);
var inst_52148 = cljs.core.not_empty.call(null,inst_52147__$1);
var state_52294__$1 = (function (){var statearr_52303 = state_52294;
(statearr_52303[(13)] = inst_52147__$1);

(statearr_52303[(14)] = inst_52145);

(statearr_52303[(15)] = inst_52144);

return statearr_52303;
})();
if(cljs.core.truth_(inst_52148)){
var statearr_52304_52389 = state_52294__$1;
(statearr_52304_52389[(1)] = (2));

} else {
var statearr_52305_52390 = state_52294__$1;
(statearr_52305_52390[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (24))){
var state_52294__$1 = state_52294;
var statearr_52306_52391 = state_52294__$1;
(statearr_52306_52391[(2)] = null);

(statearr_52306_52391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (39))){
var inst_52248 = (state_52294[(16)]);
var state_52294__$1 = state_52294;
var statearr_52307_52392 = state_52294__$1;
(statearr_52307_52392[(2)] = inst_52248);

(statearr_52307_52392[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (46))){
var inst_52289 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52308_52393 = state_52294__$1;
(statearr_52308_52393[(2)] = inst_52289);

(statearr_52308_52393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (4))){
var inst_52192 = (state_52294[(2)]);
var inst_52193 = cljs.core.List.EMPTY;
var inst_52194 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52193);
var inst_52195 = (function (){return ((function (inst_52192,inst_52193,inst_52194,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51890_SHARP_){
var and__36792__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51890_SHARP_);
if(cljs.core.truth_(and__36792__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51890_SHARP_));
} else {
return and__36792__auto__;
}
});
;})(inst_52192,inst_52193,inst_52194,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52196 = cljs.core.filter.call(null,inst_52195,files);
var inst_52197 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52198 = cljs.core.concat.call(null,inst_52196,inst_52197);
var state_52294__$1 = (function (){var statearr_52309 = state_52294;
(statearr_52309[(17)] = inst_52192);

(statearr_52309[(12)] = inst_52198);

(statearr_52309[(18)] = inst_52194);

return statearr_52309;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52310_52394 = state_52294__$1;
(statearr_52310_52394[(1)] = (16));

} else {
var statearr_52311_52395 = state_52294__$1;
(statearr_52311_52395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (15))){
var inst_52182 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52312_52396 = state_52294__$1;
(statearr_52312_52396[(2)] = inst_52182);

(statearr_52312_52396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (21))){
var inst_52208 = (state_52294[(19)]);
var inst_52208__$1 = (state_52294[(2)]);
var inst_52209 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52208__$1);
var state_52294__$1 = (function (){var statearr_52313 = state_52294;
(statearr_52313[(19)] = inst_52208__$1);

return statearr_52313;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52294__$1,(22),inst_52209);
} else {
if((state_val_52295 === (31))){
var inst_52292 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52294__$1,inst_52292);
} else {
if((state_val_52295 === (32))){
var inst_52248 = (state_52294[(16)]);
var inst_52253 = inst_52248.cljs$lang$protocol_mask$partition0$;
var inst_52254 = (inst_52253 & (64));
var inst_52255 = inst_52248.cljs$core$ISeq$;
var inst_52256 = (inst_52254) || (inst_52255);
var state_52294__$1 = state_52294;
if(cljs.core.truth_(inst_52256)){
var statearr_52314_52397 = state_52294__$1;
(statearr_52314_52397[(1)] = (35));

} else {
var statearr_52315_52398 = state_52294__$1;
(statearr_52315_52398[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (40))){
var inst_52269 = (state_52294[(20)]);
var inst_52268 = (state_52294[(2)]);
var inst_52269__$1 = cljs.core.get.call(null,inst_52268,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52270 = cljs.core.get.call(null,inst_52268,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52271 = cljs.core.not_empty.call(null,inst_52269__$1);
var state_52294__$1 = (function (){var statearr_52316 = state_52294;
(statearr_52316[(21)] = inst_52270);

(statearr_52316[(20)] = inst_52269__$1);

return statearr_52316;
})();
if(cljs.core.truth_(inst_52271)){
var statearr_52317_52399 = state_52294__$1;
(statearr_52317_52399[(1)] = (41));

} else {
var statearr_52318_52400 = state_52294__$1;
(statearr_52318_52400[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (33))){
var state_52294__$1 = state_52294;
var statearr_52319_52401 = state_52294__$1;
(statearr_52319_52401[(2)] = false);

(statearr_52319_52401[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (13))){
var inst_52168 = (state_52294[(22)]);
var inst_52172 = cljs.core.chunk_first.call(null,inst_52168);
var inst_52173 = cljs.core.chunk_rest.call(null,inst_52168);
var inst_52174 = cljs.core.count.call(null,inst_52172);
var inst_52155 = inst_52173;
var inst_52156 = inst_52172;
var inst_52157 = inst_52174;
var inst_52158 = (0);
var state_52294__$1 = (function (){var statearr_52320 = state_52294;
(statearr_52320[(7)] = inst_52157);

(statearr_52320[(8)] = inst_52158);

(statearr_52320[(9)] = inst_52155);

(statearr_52320[(10)] = inst_52156);

return statearr_52320;
})();
var statearr_52321_52402 = state_52294__$1;
(statearr_52321_52402[(2)] = null);

(statearr_52321_52402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (22))){
var inst_52211 = (state_52294[(23)]);
var inst_52212 = (state_52294[(24)]);
var inst_52208 = (state_52294[(19)]);
var inst_52216 = (state_52294[(25)]);
var inst_52211__$1 = (state_52294[(2)]);
var inst_52212__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52211__$1);
var inst_52213 = (function (){var all_files = inst_52208;
var res_SINGLEQUOTE_ = inst_52211__$1;
var res = inst_52212__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52211,inst_52212,inst_52208,inst_52216,inst_52211__$1,inst_52212__$1,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51891_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51891_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52211,inst_52212,inst_52208,inst_52216,inst_52211__$1,inst_52212__$1,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52214 = cljs.core.filter.call(null,inst_52213,inst_52211__$1);
var inst_52215 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52216__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52215);
var inst_52217 = cljs.core.not_empty.call(null,inst_52216__$1);
var state_52294__$1 = (function (){var statearr_52322 = state_52294;
(statearr_52322[(23)] = inst_52211__$1);

(statearr_52322[(24)] = inst_52212__$1);

(statearr_52322[(26)] = inst_52214);

(statearr_52322[(25)] = inst_52216__$1);

return statearr_52322;
})();
if(cljs.core.truth_(inst_52217)){
var statearr_52323_52403 = state_52294__$1;
(statearr_52323_52403[(1)] = (23));

} else {
var statearr_52324_52404 = state_52294__$1;
(statearr_52324_52404[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (36))){
var state_52294__$1 = state_52294;
var statearr_52325_52405 = state_52294__$1;
(statearr_52325_52405[(2)] = false);

(statearr_52325_52405[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (41))){
var inst_52269 = (state_52294[(20)]);
var inst_52273 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52274 = cljs.core.map.call(null,inst_52273,inst_52269);
var inst_52275 = cljs.core.pr_str.call(null,inst_52274);
var inst_52276 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52275)].join('');
var inst_52277 = figwheel.client.utils.log.call(null,inst_52276);
var state_52294__$1 = state_52294;
var statearr_52326_52406 = state_52294__$1;
(statearr_52326_52406[(2)] = inst_52277);

(statearr_52326_52406[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (43))){
var inst_52270 = (state_52294[(21)]);
var inst_52280 = (state_52294[(2)]);
var inst_52281 = cljs.core.not_empty.call(null,inst_52270);
var state_52294__$1 = (function (){var statearr_52327 = state_52294;
(statearr_52327[(27)] = inst_52280);

return statearr_52327;
})();
if(cljs.core.truth_(inst_52281)){
var statearr_52328_52407 = state_52294__$1;
(statearr_52328_52407[(1)] = (44));

} else {
var statearr_52329_52408 = state_52294__$1;
(statearr_52329_52408[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (29))){
var inst_52248 = (state_52294[(16)]);
var inst_52211 = (state_52294[(23)]);
var inst_52212 = (state_52294[(24)]);
var inst_52214 = (state_52294[(26)]);
var inst_52208 = (state_52294[(19)]);
var inst_52216 = (state_52294[(25)]);
var inst_52244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52247 = (function (){var all_files = inst_52208;
var res_SINGLEQUOTE_ = inst_52211;
var res = inst_52212;
var files_not_loaded = inst_52214;
var dependencies_that_loaded = inst_52216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52248,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52244,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52246){
var map__52330 = p__52246;
var map__52330__$1 = ((((!((map__52330 == null)))?((((map__52330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52330):map__52330);
var namespace = cljs.core.get.call(null,map__52330__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52248,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52244,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52248__$1 = cljs.core.group_by.call(null,inst_52247,inst_52214);
var inst_52250 = (inst_52248__$1 == null);
var inst_52251 = cljs.core.not.call(null,inst_52250);
var state_52294__$1 = (function (){var statearr_52332 = state_52294;
(statearr_52332[(28)] = inst_52244);

(statearr_52332[(16)] = inst_52248__$1);

return statearr_52332;
})();
if(inst_52251){
var statearr_52333_52409 = state_52294__$1;
(statearr_52333_52409[(1)] = (32));

} else {
var statearr_52334_52410 = state_52294__$1;
(statearr_52334_52410[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (44))){
var inst_52270 = (state_52294[(21)]);
var inst_52283 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52270);
var inst_52284 = cljs.core.pr_str.call(null,inst_52283);
var inst_52285 = [cljs.core.str("not required: "),cljs.core.str(inst_52284)].join('');
var inst_52286 = figwheel.client.utils.log.call(null,inst_52285);
var state_52294__$1 = state_52294;
var statearr_52335_52411 = state_52294__$1;
(statearr_52335_52411[(2)] = inst_52286);

(statearr_52335_52411[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (6))){
var inst_52189 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52336_52412 = state_52294__$1;
(statearr_52336_52412[(2)] = inst_52189);

(statearr_52336_52412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (28))){
var inst_52214 = (state_52294[(26)]);
var inst_52241 = (state_52294[(2)]);
var inst_52242 = cljs.core.not_empty.call(null,inst_52214);
var state_52294__$1 = (function (){var statearr_52337 = state_52294;
(statearr_52337[(29)] = inst_52241);

return statearr_52337;
})();
if(cljs.core.truth_(inst_52242)){
var statearr_52338_52413 = state_52294__$1;
(statearr_52338_52413[(1)] = (29));

} else {
var statearr_52339_52414 = state_52294__$1;
(statearr_52339_52414[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (25))){
var inst_52212 = (state_52294[(24)]);
var inst_52228 = (state_52294[(2)]);
var inst_52229 = cljs.core.not_empty.call(null,inst_52212);
var state_52294__$1 = (function (){var statearr_52340 = state_52294;
(statearr_52340[(30)] = inst_52228);

return statearr_52340;
})();
if(cljs.core.truth_(inst_52229)){
var statearr_52341_52415 = state_52294__$1;
(statearr_52341_52415[(1)] = (26));

} else {
var statearr_52342_52416 = state_52294__$1;
(statearr_52342_52416[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (34))){
var inst_52263 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
if(cljs.core.truth_(inst_52263)){
var statearr_52343_52417 = state_52294__$1;
(statearr_52343_52417[(1)] = (38));

} else {
var statearr_52344_52418 = state_52294__$1;
(statearr_52344_52418[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (17))){
var state_52294__$1 = state_52294;
var statearr_52345_52419 = state_52294__$1;
(statearr_52345_52419[(2)] = recompile_dependents);

(statearr_52345_52419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (3))){
var state_52294__$1 = state_52294;
var statearr_52346_52420 = state_52294__$1;
(statearr_52346_52420[(2)] = null);

(statearr_52346_52420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (12))){
var inst_52185 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52347_52421 = state_52294__$1;
(statearr_52347_52421[(2)] = inst_52185);

(statearr_52347_52421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (2))){
var inst_52147 = (state_52294[(13)]);
var inst_52154 = cljs.core.seq.call(null,inst_52147);
var inst_52155 = inst_52154;
var inst_52156 = null;
var inst_52157 = (0);
var inst_52158 = (0);
var state_52294__$1 = (function (){var statearr_52348 = state_52294;
(statearr_52348[(7)] = inst_52157);

(statearr_52348[(8)] = inst_52158);

(statearr_52348[(9)] = inst_52155);

(statearr_52348[(10)] = inst_52156);

return statearr_52348;
})();
var statearr_52349_52422 = state_52294__$1;
(statearr_52349_52422[(2)] = null);

(statearr_52349_52422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (23))){
var inst_52211 = (state_52294[(23)]);
var inst_52212 = (state_52294[(24)]);
var inst_52214 = (state_52294[(26)]);
var inst_52208 = (state_52294[(19)]);
var inst_52216 = (state_52294[(25)]);
var inst_52219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52221 = (function (){var all_files = inst_52208;
var res_SINGLEQUOTE_ = inst_52211;
var res = inst_52212;
var files_not_loaded = inst_52214;
var dependencies_that_loaded = inst_52216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52219,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52220){
var map__52350 = p__52220;
var map__52350__$1 = ((((!((map__52350 == null)))?((((map__52350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52350):map__52350);
var request_url = cljs.core.get.call(null,map__52350__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52219,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52222 = cljs.core.reverse.call(null,inst_52216);
var inst_52223 = cljs.core.map.call(null,inst_52221,inst_52222);
var inst_52224 = cljs.core.pr_str.call(null,inst_52223);
var inst_52225 = figwheel.client.utils.log.call(null,inst_52224);
var state_52294__$1 = (function (){var statearr_52352 = state_52294;
(statearr_52352[(31)] = inst_52219);

return statearr_52352;
})();
var statearr_52353_52423 = state_52294__$1;
(statearr_52353_52423[(2)] = inst_52225);

(statearr_52353_52423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (35))){
var state_52294__$1 = state_52294;
var statearr_52354_52424 = state_52294__$1;
(statearr_52354_52424[(2)] = true);

(statearr_52354_52424[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (19))){
var inst_52198 = (state_52294[(12)]);
var inst_52204 = figwheel.client.file_reloading.expand_files.call(null,inst_52198);
var state_52294__$1 = state_52294;
var statearr_52355_52425 = state_52294__$1;
(statearr_52355_52425[(2)] = inst_52204);

(statearr_52355_52425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (11))){
var state_52294__$1 = state_52294;
var statearr_52356_52426 = state_52294__$1;
(statearr_52356_52426[(2)] = null);

(statearr_52356_52426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (9))){
var inst_52187 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52357_52427 = state_52294__$1;
(statearr_52357_52427[(2)] = inst_52187);

(statearr_52357_52427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (5))){
var inst_52157 = (state_52294[(7)]);
var inst_52158 = (state_52294[(8)]);
var inst_52160 = (inst_52158 < inst_52157);
var inst_52161 = inst_52160;
var state_52294__$1 = state_52294;
if(cljs.core.truth_(inst_52161)){
var statearr_52358_52428 = state_52294__$1;
(statearr_52358_52428[(1)] = (7));

} else {
var statearr_52359_52429 = state_52294__$1;
(statearr_52359_52429[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (14))){
var inst_52168 = (state_52294[(22)]);
var inst_52177 = cljs.core.first.call(null,inst_52168);
var inst_52178 = figwheel.client.file_reloading.eval_body.call(null,inst_52177,opts);
var inst_52179 = cljs.core.next.call(null,inst_52168);
var inst_52155 = inst_52179;
var inst_52156 = null;
var inst_52157 = (0);
var inst_52158 = (0);
var state_52294__$1 = (function (){var statearr_52360 = state_52294;
(statearr_52360[(7)] = inst_52157);

(statearr_52360[(8)] = inst_52158);

(statearr_52360[(32)] = inst_52178);

(statearr_52360[(9)] = inst_52155);

(statearr_52360[(10)] = inst_52156);

return statearr_52360;
})();
var statearr_52361_52430 = state_52294__$1;
(statearr_52361_52430[(2)] = null);

(statearr_52361_52430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (45))){
var state_52294__$1 = state_52294;
var statearr_52362_52431 = state_52294__$1;
(statearr_52362_52431[(2)] = null);

(statearr_52362_52431[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (26))){
var inst_52211 = (state_52294[(23)]);
var inst_52212 = (state_52294[(24)]);
var inst_52214 = (state_52294[(26)]);
var inst_52208 = (state_52294[(19)]);
var inst_52216 = (state_52294[(25)]);
var inst_52231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52233 = (function (){var all_files = inst_52208;
var res_SINGLEQUOTE_ = inst_52211;
var res = inst_52212;
var files_not_loaded = inst_52214;
var dependencies_that_loaded = inst_52216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52231,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52232){
var map__52363 = p__52232;
var map__52363__$1 = ((((!((map__52363 == null)))?((((map__52363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52363):map__52363);
var namespace = cljs.core.get.call(null,map__52363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52363__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52231,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52234 = cljs.core.map.call(null,inst_52233,inst_52212);
var inst_52235 = cljs.core.pr_str.call(null,inst_52234);
var inst_52236 = figwheel.client.utils.log.call(null,inst_52235);
var inst_52237 = (function (){var all_files = inst_52208;
var res_SINGLEQUOTE_ = inst_52211;
var res = inst_52212;
var files_not_loaded = inst_52214;
var dependencies_that_loaded = inst_52216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52231,inst_52233,inst_52234,inst_52235,inst_52236,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52211,inst_52212,inst_52214,inst_52208,inst_52216,inst_52231,inst_52233,inst_52234,inst_52235,inst_52236,state_val_52295,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52238 = setTimeout(inst_52237,(10));
var state_52294__$1 = (function (){var statearr_52365 = state_52294;
(statearr_52365[(33)] = inst_52236);

(statearr_52365[(34)] = inst_52231);

return statearr_52365;
})();
var statearr_52366_52432 = state_52294__$1;
(statearr_52366_52432[(2)] = inst_52238);

(statearr_52366_52432[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (16))){
var state_52294__$1 = state_52294;
var statearr_52367_52433 = state_52294__$1;
(statearr_52367_52433[(2)] = reload_dependents);

(statearr_52367_52433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (38))){
var inst_52248 = (state_52294[(16)]);
var inst_52265 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52248);
var state_52294__$1 = state_52294;
var statearr_52368_52434 = state_52294__$1;
(statearr_52368_52434[(2)] = inst_52265);

(statearr_52368_52434[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (30))){
var state_52294__$1 = state_52294;
var statearr_52369_52435 = state_52294__$1;
(statearr_52369_52435[(2)] = null);

(statearr_52369_52435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (10))){
var inst_52168 = (state_52294[(22)]);
var inst_52170 = cljs.core.chunked_seq_QMARK_.call(null,inst_52168);
var state_52294__$1 = state_52294;
if(inst_52170){
var statearr_52370_52436 = state_52294__$1;
(statearr_52370_52436[(1)] = (13));

} else {
var statearr_52371_52437 = state_52294__$1;
(statearr_52371_52437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (18))){
var inst_52202 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
if(cljs.core.truth_(inst_52202)){
var statearr_52372_52438 = state_52294__$1;
(statearr_52372_52438[(1)] = (19));

} else {
var statearr_52373_52439 = state_52294__$1;
(statearr_52373_52439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (42))){
var state_52294__$1 = state_52294;
var statearr_52374_52440 = state_52294__$1;
(statearr_52374_52440[(2)] = null);

(statearr_52374_52440[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (37))){
var inst_52260 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52375_52441 = state_52294__$1;
(statearr_52375_52441[(2)] = inst_52260);

(statearr_52375_52441[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (8))){
var inst_52155 = (state_52294[(9)]);
var inst_52168 = (state_52294[(22)]);
var inst_52168__$1 = cljs.core.seq.call(null,inst_52155);
var state_52294__$1 = (function (){var statearr_52376 = state_52294;
(statearr_52376[(22)] = inst_52168__$1);

return statearr_52376;
})();
if(inst_52168__$1){
var statearr_52377_52442 = state_52294__$1;
(statearr_52377_52442[(1)] = (10));

} else {
var statearr_52378_52443 = state_52294__$1;
(statearr_52378_52443[(1)] = (11));

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
});})(c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40570__auto__,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto____0 = (function (){
var statearr_52382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52382[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto__);

(statearr_52382[(1)] = (1));

return statearr_52382;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto____1 = (function (state_52294){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_52294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e52383){if((e52383 instanceof Object)){
var ex__40574__auto__ = e52383;
var statearr_52384_52444 = state_52294;
(statearr_52384_52444[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52445 = state_52294;
state_52294 = G__52445;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto__ = function(state_52294){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto____1.call(this,state_52294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40684__auto__ = (function (){var statearr_52385 = f__40683__auto__.call(null);
(statearr_52385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_52385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__,map__52140,map__52140__$1,opts,before_jsload,on_jsload,reload_dependents,map__52141,map__52141__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40682__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52448,link){
var map__52451 = p__52448;
var map__52451__$1 = ((((!((map__52451 == null)))?((((map__52451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52451):map__52451);
var file = cljs.core.get.call(null,map__52451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52451,map__52451__$1,file){
return (function (p1__52446_SHARP_,p2__52447_SHARP_){
if(cljs.core._EQ_.call(null,p1__52446_SHARP_,p2__52447_SHARP_)){
return p1__52446_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52451,map__52451__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52457){
var map__52458 = p__52457;
var map__52458__$1 = ((((!((map__52458 == null)))?((((map__52458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52458):map__52458);
var match_length = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52453_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52453_SHARP_);
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
var args52460 = [];
var len__37879__auto___52463 = arguments.length;
var i__37880__auto___52464 = (0);
while(true){
if((i__37880__auto___52464 < len__37879__auto___52463)){
args52460.push((arguments[i__37880__auto___52464]));

var G__52465 = (i__37880__auto___52464 + (1));
i__37880__auto___52464 = G__52465;
continue;
} else {
}
break;
}

var G__52462 = args52460.length;
switch (G__52462) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52460.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52467_SHARP_,p2__52468_SHARP_){
return cljs.core.assoc.call(null,p1__52467_SHARP_,cljs.core.get.call(null,p2__52468_SHARP_,key),p2__52468_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52469){
var map__52472 = p__52469;
var map__52472__$1 = ((((!((map__52472 == null)))?((((map__52472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52472):map__52472);
var f_data = map__52472__$1;
var file = cljs.core.get.call(null,map__52472__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52474,p__52475){
var map__52484 = p__52474;
var map__52484__$1 = ((((!((map__52484 == null)))?((((map__52484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52484):map__52484);
var opts = map__52484__$1;
var on_cssload = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52485 = p__52475;
var map__52485__$1 = ((((!((map__52485 == null)))?((((map__52485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52485):map__52485);
var files_msg = map__52485__$1;
var files = cljs.core.get.call(null,map__52485__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52488_52492 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52489_52493 = null;
var count__52490_52494 = (0);
var i__52491_52495 = (0);
while(true){
if((i__52491_52495 < count__52490_52494)){
var f_52496 = cljs.core._nth.call(null,chunk__52489_52493,i__52491_52495);
figwheel.client.file_reloading.reload_css_file.call(null,f_52496);

var G__52497 = seq__52488_52492;
var G__52498 = chunk__52489_52493;
var G__52499 = count__52490_52494;
var G__52500 = (i__52491_52495 + (1));
seq__52488_52492 = G__52497;
chunk__52489_52493 = G__52498;
count__52490_52494 = G__52499;
i__52491_52495 = G__52500;
continue;
} else {
var temp__4657__auto___52501 = cljs.core.seq.call(null,seq__52488_52492);
if(temp__4657__auto___52501){
var seq__52488_52502__$1 = temp__4657__auto___52501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52488_52502__$1)){
var c__37615__auto___52503 = cljs.core.chunk_first.call(null,seq__52488_52502__$1);
var G__52504 = cljs.core.chunk_rest.call(null,seq__52488_52502__$1);
var G__52505 = c__37615__auto___52503;
var G__52506 = cljs.core.count.call(null,c__37615__auto___52503);
var G__52507 = (0);
seq__52488_52492 = G__52504;
chunk__52489_52493 = G__52505;
count__52490_52494 = G__52506;
i__52491_52495 = G__52507;
continue;
} else {
var f_52508 = cljs.core.first.call(null,seq__52488_52502__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52508);

var G__52509 = cljs.core.next.call(null,seq__52488_52502__$1);
var G__52510 = null;
var G__52511 = (0);
var G__52512 = (0);
seq__52488_52492 = G__52509;
chunk__52489_52493 = G__52510;
count__52490_52494 = G__52511;
i__52491_52495 = G__52512;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52484,map__52484__$1,opts,on_cssload,map__52485,map__52485__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52484,map__52484__$1,opts,on_cssload,map__52485,map__52485__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map