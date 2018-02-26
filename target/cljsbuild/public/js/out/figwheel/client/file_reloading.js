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
var or__36772__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36772__auto__){
return or__36772__auto__;
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
var or__36772__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40461_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40461_SHARP_));
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
var seq__40466 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40467 = null;
var count__40468 = (0);
var i__40469 = (0);
while(true){
if((i__40469 < count__40468)){
var n = cljs.core._nth.call(null,chunk__40467,i__40469);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40470 = seq__40466;
var G__40471 = chunk__40467;
var G__40472 = count__40468;
var G__40473 = (i__40469 + (1));
seq__40466 = G__40470;
chunk__40467 = G__40471;
count__40468 = G__40472;
i__40469 = G__40473;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40466);
if(temp__4657__auto__){
var seq__40466__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40466__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__40466__$1);
var G__40474 = cljs.core.chunk_rest.call(null,seq__40466__$1);
var G__40475 = c__37583__auto__;
var G__40476 = cljs.core.count.call(null,c__37583__auto__);
var G__40477 = (0);
seq__40466 = G__40474;
chunk__40467 = G__40475;
count__40468 = G__40476;
i__40469 = G__40477;
continue;
} else {
var n = cljs.core.first.call(null,seq__40466__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40478 = cljs.core.next.call(null,seq__40466__$1);
var G__40479 = null;
var G__40480 = (0);
var G__40481 = (0);
seq__40466 = G__40478;
chunk__40467 = G__40479;
count__40468 = G__40480;
i__40469 = G__40481;
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

var seq__40532_40543 = cljs.core.seq.call(null,deps);
var chunk__40533_40544 = null;
var count__40534_40545 = (0);
var i__40535_40546 = (0);
while(true){
if((i__40535_40546 < count__40534_40545)){
var dep_40547 = cljs.core._nth.call(null,chunk__40533_40544,i__40535_40546);
topo_sort_helper_STAR_.call(null,dep_40547,(depth + (1)),state);

var G__40548 = seq__40532_40543;
var G__40549 = chunk__40533_40544;
var G__40550 = count__40534_40545;
var G__40551 = (i__40535_40546 + (1));
seq__40532_40543 = G__40548;
chunk__40533_40544 = G__40549;
count__40534_40545 = G__40550;
i__40535_40546 = G__40551;
continue;
} else {
var temp__4657__auto___40552 = cljs.core.seq.call(null,seq__40532_40543);
if(temp__4657__auto___40552){
var seq__40532_40553__$1 = temp__4657__auto___40552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40532_40553__$1)){
var c__37583__auto___40554 = cljs.core.chunk_first.call(null,seq__40532_40553__$1);
var G__40555 = cljs.core.chunk_rest.call(null,seq__40532_40553__$1);
var G__40556 = c__37583__auto___40554;
var G__40557 = cljs.core.count.call(null,c__37583__auto___40554);
var G__40558 = (0);
seq__40532_40543 = G__40555;
chunk__40533_40544 = G__40556;
count__40534_40545 = G__40557;
i__40535_40546 = G__40558;
continue;
} else {
var dep_40559 = cljs.core.first.call(null,seq__40532_40553__$1);
topo_sort_helper_STAR_.call(null,dep_40559,(depth + (1)),state);

var G__40560 = cljs.core.next.call(null,seq__40532_40553__$1);
var G__40561 = null;
var G__40562 = (0);
var G__40563 = (0);
seq__40532_40543 = G__40560;
chunk__40533_40544 = G__40561;
count__40534_40545 = G__40562;
i__40535_40546 = G__40563;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40536){
var vec__40540 = p__40536;
var seq__40541 = cljs.core.seq.call(null,vec__40540);
var first__40542 = cljs.core.first.call(null,seq__40541);
var seq__40541__$1 = cljs.core.next.call(null,seq__40541);
var x = first__40542;
var xs = seq__40541__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40540,seq__40541,first__40542,seq__40541__$1,x,xs,get_deps__$1){
return (function (p1__40482_SHARP_){
return clojure.set.difference.call(null,p1__40482_SHARP_,x);
});})(vec__40540,seq__40541,first__40542,seq__40541__$1,x,xs,get_deps__$1))
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
var seq__40576 = cljs.core.seq.call(null,provides);
var chunk__40577 = null;
var count__40578 = (0);
var i__40579 = (0);
while(true){
if((i__40579 < count__40578)){
var prov = cljs.core._nth.call(null,chunk__40577,i__40579);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40580_40588 = cljs.core.seq.call(null,requires);
var chunk__40581_40589 = null;
var count__40582_40590 = (0);
var i__40583_40591 = (0);
while(true){
if((i__40583_40591 < count__40582_40590)){
var req_40592 = cljs.core._nth.call(null,chunk__40581_40589,i__40583_40591);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40592,prov);

var G__40593 = seq__40580_40588;
var G__40594 = chunk__40581_40589;
var G__40595 = count__40582_40590;
var G__40596 = (i__40583_40591 + (1));
seq__40580_40588 = G__40593;
chunk__40581_40589 = G__40594;
count__40582_40590 = G__40595;
i__40583_40591 = G__40596;
continue;
} else {
var temp__4657__auto___40597 = cljs.core.seq.call(null,seq__40580_40588);
if(temp__4657__auto___40597){
var seq__40580_40598__$1 = temp__4657__auto___40597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40580_40598__$1)){
var c__37583__auto___40599 = cljs.core.chunk_first.call(null,seq__40580_40598__$1);
var G__40600 = cljs.core.chunk_rest.call(null,seq__40580_40598__$1);
var G__40601 = c__37583__auto___40599;
var G__40602 = cljs.core.count.call(null,c__37583__auto___40599);
var G__40603 = (0);
seq__40580_40588 = G__40600;
chunk__40581_40589 = G__40601;
count__40582_40590 = G__40602;
i__40583_40591 = G__40603;
continue;
} else {
var req_40604 = cljs.core.first.call(null,seq__40580_40598__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40604,prov);

var G__40605 = cljs.core.next.call(null,seq__40580_40598__$1);
var G__40606 = null;
var G__40607 = (0);
var G__40608 = (0);
seq__40580_40588 = G__40605;
chunk__40581_40589 = G__40606;
count__40582_40590 = G__40607;
i__40583_40591 = G__40608;
continue;
}
} else {
}
}
break;
}

var G__40609 = seq__40576;
var G__40610 = chunk__40577;
var G__40611 = count__40578;
var G__40612 = (i__40579 + (1));
seq__40576 = G__40609;
chunk__40577 = G__40610;
count__40578 = G__40611;
i__40579 = G__40612;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40576);
if(temp__4657__auto__){
var seq__40576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40576__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__40576__$1);
var G__40613 = cljs.core.chunk_rest.call(null,seq__40576__$1);
var G__40614 = c__37583__auto__;
var G__40615 = cljs.core.count.call(null,c__37583__auto__);
var G__40616 = (0);
seq__40576 = G__40613;
chunk__40577 = G__40614;
count__40578 = G__40615;
i__40579 = G__40616;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40576__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40584_40617 = cljs.core.seq.call(null,requires);
var chunk__40585_40618 = null;
var count__40586_40619 = (0);
var i__40587_40620 = (0);
while(true){
if((i__40587_40620 < count__40586_40619)){
var req_40621 = cljs.core._nth.call(null,chunk__40585_40618,i__40587_40620);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40621,prov);

var G__40622 = seq__40584_40617;
var G__40623 = chunk__40585_40618;
var G__40624 = count__40586_40619;
var G__40625 = (i__40587_40620 + (1));
seq__40584_40617 = G__40622;
chunk__40585_40618 = G__40623;
count__40586_40619 = G__40624;
i__40587_40620 = G__40625;
continue;
} else {
var temp__4657__auto___40626__$1 = cljs.core.seq.call(null,seq__40584_40617);
if(temp__4657__auto___40626__$1){
var seq__40584_40627__$1 = temp__4657__auto___40626__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40584_40627__$1)){
var c__37583__auto___40628 = cljs.core.chunk_first.call(null,seq__40584_40627__$1);
var G__40629 = cljs.core.chunk_rest.call(null,seq__40584_40627__$1);
var G__40630 = c__37583__auto___40628;
var G__40631 = cljs.core.count.call(null,c__37583__auto___40628);
var G__40632 = (0);
seq__40584_40617 = G__40629;
chunk__40585_40618 = G__40630;
count__40586_40619 = G__40631;
i__40587_40620 = G__40632;
continue;
} else {
var req_40633 = cljs.core.first.call(null,seq__40584_40627__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40633,prov);

var G__40634 = cljs.core.next.call(null,seq__40584_40627__$1);
var G__40635 = null;
var G__40636 = (0);
var G__40637 = (0);
seq__40584_40617 = G__40634;
chunk__40585_40618 = G__40635;
count__40586_40619 = G__40636;
i__40587_40620 = G__40637;
continue;
}
} else {
}
}
break;
}

var G__40638 = cljs.core.next.call(null,seq__40576__$1);
var G__40639 = null;
var G__40640 = (0);
var G__40641 = (0);
seq__40576 = G__40638;
chunk__40577 = G__40639;
count__40578 = G__40640;
i__40579 = G__40641;
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
var seq__40646_40650 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40647_40651 = null;
var count__40648_40652 = (0);
var i__40649_40653 = (0);
while(true){
if((i__40649_40653 < count__40648_40652)){
var ns_40654 = cljs.core._nth.call(null,chunk__40647_40651,i__40649_40653);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40654);

var G__40655 = seq__40646_40650;
var G__40656 = chunk__40647_40651;
var G__40657 = count__40648_40652;
var G__40658 = (i__40649_40653 + (1));
seq__40646_40650 = G__40655;
chunk__40647_40651 = G__40656;
count__40648_40652 = G__40657;
i__40649_40653 = G__40658;
continue;
} else {
var temp__4657__auto___40659 = cljs.core.seq.call(null,seq__40646_40650);
if(temp__4657__auto___40659){
var seq__40646_40660__$1 = temp__4657__auto___40659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40646_40660__$1)){
var c__37583__auto___40661 = cljs.core.chunk_first.call(null,seq__40646_40660__$1);
var G__40662 = cljs.core.chunk_rest.call(null,seq__40646_40660__$1);
var G__40663 = c__37583__auto___40661;
var G__40664 = cljs.core.count.call(null,c__37583__auto___40661);
var G__40665 = (0);
seq__40646_40650 = G__40662;
chunk__40647_40651 = G__40663;
count__40648_40652 = G__40664;
i__40649_40653 = G__40665;
continue;
} else {
var ns_40666 = cljs.core.first.call(null,seq__40646_40660__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40666);

var G__40667 = cljs.core.next.call(null,seq__40646_40660__$1);
var G__40668 = null;
var G__40669 = (0);
var G__40670 = (0);
seq__40646_40650 = G__40667;
chunk__40647_40651 = G__40668;
count__40648_40652 = G__40669;
i__40649_40653 = G__40670;
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
goog.require_figwheel_backup_ = (function (){var or__36772__auto__ = goog.require__;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
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
var G__40671__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40672__i = 0, G__40672__a = new Array(arguments.length -  0);
while (G__40672__i < G__40672__a.length) {G__40672__a[G__40672__i] = arguments[G__40672__i + 0]; ++G__40672__i;}
  args = new cljs.core.IndexedSeq(G__40672__a,0);
} 
return G__40671__delegate.call(this,args);};
G__40671.cljs$lang$maxFixedArity = 0;
G__40671.cljs$lang$applyTo = (function (arglist__40673){
var args = cljs.core.seq(arglist__40673);
return G__40671__delegate(args);
});
G__40671.cljs$core$IFn$_invoke$arity$variadic = G__40671__delegate;
return G__40671;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40675 = cljs.core._EQ_;
var expr__40676 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40675.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40676))){
var path_parts = ((function (pred__40675,expr__40676){
return (function (p1__40674_SHARP_){
return clojure.string.split.call(null,p1__40674_SHARP_,/[\/\\]/);
});})(pred__40675,expr__40676))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40675,expr__40676){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40678){if((e40678 instanceof Error)){
var e = e40678;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40678;

}
}})());
});
;})(path_parts,sep,root,pred__40675,expr__40676))
} else {
if(cljs.core.truth_(pred__40675.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40676))){
return ((function (pred__40675,expr__40676){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__40675,expr__40676){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40675,expr__40676))
);

return deferred.addErrback(((function (deferred,pred__40675,expr__40676){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40675,expr__40676))
);
});
;})(pred__40675,expr__40676))
} else {
return ((function (pred__40675,expr__40676){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40675,expr__40676))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40679,callback){
var map__40682 = p__40679;
var map__40682__$1 = ((((!((map__40682 == null)))?((((map__40682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40682):map__40682);
var file_msg = map__40682__$1;
var request_url = cljs.core.get.call(null,map__40682__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40682,map__40682__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40682,map__40682__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__39382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto__){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto__){
return (function (state_40706){
var state_val_40707 = (state_40706[(1)]);
if((state_val_40707 === (7))){
var inst_40702 = (state_40706[(2)]);
var state_40706__$1 = state_40706;
var statearr_40708_40728 = state_40706__$1;
(statearr_40708_40728[(2)] = inst_40702);

(statearr_40708_40728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40707 === (1))){
var state_40706__$1 = state_40706;
var statearr_40709_40729 = state_40706__$1;
(statearr_40709_40729[(2)] = null);

(statearr_40709_40729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40707 === (4))){
var inst_40686 = (state_40706[(7)]);
var inst_40686__$1 = (state_40706[(2)]);
var state_40706__$1 = (function (){var statearr_40710 = state_40706;
(statearr_40710[(7)] = inst_40686__$1);

return statearr_40710;
})();
if(cljs.core.truth_(inst_40686__$1)){
var statearr_40711_40730 = state_40706__$1;
(statearr_40711_40730[(1)] = (5));

} else {
var statearr_40712_40731 = state_40706__$1;
(statearr_40712_40731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40707 === (6))){
var state_40706__$1 = state_40706;
var statearr_40713_40732 = state_40706__$1;
(statearr_40713_40732[(2)] = null);

(statearr_40713_40732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40707 === (3))){
var inst_40704 = (state_40706[(2)]);
var state_40706__$1 = state_40706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40706__$1,inst_40704);
} else {
if((state_val_40707 === (2))){
var state_40706__$1 = state_40706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40706__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40707 === (11))){
var inst_40698 = (state_40706[(2)]);
var state_40706__$1 = (function (){var statearr_40714 = state_40706;
(statearr_40714[(8)] = inst_40698);

return statearr_40714;
})();
var statearr_40715_40733 = state_40706__$1;
(statearr_40715_40733[(2)] = null);

(statearr_40715_40733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40707 === (9))){
var inst_40690 = (state_40706[(9)]);
var inst_40692 = (state_40706[(10)]);
var inst_40694 = inst_40692.call(null,inst_40690);
var state_40706__$1 = state_40706;
var statearr_40716_40734 = state_40706__$1;
(statearr_40716_40734[(2)] = inst_40694);

(statearr_40716_40734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40707 === (5))){
var inst_40686 = (state_40706[(7)]);
var inst_40688 = figwheel.client.file_reloading.blocking_load.call(null,inst_40686);
var state_40706__$1 = state_40706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40706__$1,(8),inst_40688);
} else {
if((state_val_40707 === (10))){
var inst_40690 = (state_40706[(9)]);
var inst_40696 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40690);
var state_40706__$1 = state_40706;
var statearr_40717_40735 = state_40706__$1;
(statearr_40717_40735[(2)] = inst_40696);

(statearr_40717_40735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40707 === (8))){
var inst_40692 = (state_40706[(10)]);
var inst_40686 = (state_40706[(7)]);
var inst_40690 = (state_40706[(2)]);
var inst_40691 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40692__$1 = cljs.core.get.call(null,inst_40691,inst_40686);
var state_40706__$1 = (function (){var statearr_40718 = state_40706;
(statearr_40718[(9)] = inst_40690);

(statearr_40718[(10)] = inst_40692__$1);

return statearr_40718;
})();
if(cljs.core.truth_(inst_40692__$1)){
var statearr_40719_40736 = state_40706__$1;
(statearr_40719_40736[(1)] = (9));

} else {
var statearr_40720_40737 = state_40706__$1;
(statearr_40720_40737[(1)] = (10));

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
});})(c__39382__auto__))
;
return ((function (switch__39361__auto__,c__39382__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39362__auto__ = null;
var figwheel$client$file_reloading$state_machine__39362__auto____0 = (function (){
var statearr_40724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40724[(0)] = figwheel$client$file_reloading$state_machine__39362__auto__);

(statearr_40724[(1)] = (1));

return statearr_40724;
});
var figwheel$client$file_reloading$state_machine__39362__auto____1 = (function (state_40706){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_40706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e40725){if((e40725 instanceof Object)){
var ex__39365__auto__ = e40725;
var statearr_40726_40738 = state_40706;
(statearr_40726_40738[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40739 = state_40706;
state_40706 = G__40739;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39362__auto__ = function(state_40706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39362__auto____1.call(this,state_40706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39362__auto____0;
figwheel$client$file_reloading$state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39362__auto____1;
return figwheel$client$file_reloading$state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto__))
})();
var state__39384__auto__ = (function (){var statearr_40727 = f__39383__auto__.call(null);
(statearr_40727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto__);

return statearr_40727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto__))
);

return c__39382__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40740,callback){
var map__40743 = p__40740;
var map__40743__$1 = ((((!((map__40743 == null)))?((((map__40743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40743):map__40743);
var file_msg = map__40743__$1;
var namespace = cljs.core.get.call(null,map__40743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40743,map__40743__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40743,map__40743__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40745){
var map__40748 = p__40745;
var map__40748__$1 = ((((!((map__40748 == null)))?((((map__40748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40748):map__40748);
var file_msg = map__40748__$1;
var namespace = cljs.core.get.call(null,map__40748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36760__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36760__auto__){
var or__36772__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var or__36772__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36772__auto____$1)){
return or__36772__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36760__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40750,callback){
var map__40753 = p__40750;
var map__40753__$1 = ((((!((map__40753 == null)))?((((map__40753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40753):map__40753);
var file_msg = map__40753__$1;
var request_url = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__39382__auto___40857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto___40857,out){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto___40857,out){
return (function (state_40839){
var state_val_40840 = (state_40839[(1)]);
if((state_val_40840 === (1))){
var inst_40813 = cljs.core.seq.call(null,files);
var inst_40814 = cljs.core.first.call(null,inst_40813);
var inst_40815 = cljs.core.next.call(null,inst_40813);
var inst_40816 = files;
var state_40839__$1 = (function (){var statearr_40841 = state_40839;
(statearr_40841[(7)] = inst_40816);

(statearr_40841[(8)] = inst_40814);

(statearr_40841[(9)] = inst_40815);

return statearr_40841;
})();
var statearr_40842_40858 = state_40839__$1;
(statearr_40842_40858[(2)] = null);

(statearr_40842_40858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (2))){
var inst_40816 = (state_40839[(7)]);
var inst_40822 = (state_40839[(10)]);
var inst_40821 = cljs.core.seq.call(null,inst_40816);
var inst_40822__$1 = cljs.core.first.call(null,inst_40821);
var inst_40823 = cljs.core.next.call(null,inst_40821);
var inst_40824 = (inst_40822__$1 == null);
var inst_40825 = cljs.core.not.call(null,inst_40824);
var state_40839__$1 = (function (){var statearr_40843 = state_40839;
(statearr_40843[(11)] = inst_40823);

(statearr_40843[(10)] = inst_40822__$1);

return statearr_40843;
})();
if(inst_40825){
var statearr_40844_40859 = state_40839__$1;
(statearr_40844_40859[(1)] = (4));

} else {
var statearr_40845_40860 = state_40839__$1;
(statearr_40845_40860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (3))){
var inst_40837 = (state_40839[(2)]);
var state_40839__$1 = state_40839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40839__$1,inst_40837);
} else {
if((state_val_40840 === (4))){
var inst_40822 = (state_40839[(10)]);
var inst_40827 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40822);
var state_40839__$1 = state_40839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40839__$1,(7),inst_40827);
} else {
if((state_val_40840 === (5))){
var inst_40833 = cljs.core.async.close_BANG_.call(null,out);
var state_40839__$1 = state_40839;
var statearr_40846_40861 = state_40839__$1;
(statearr_40846_40861[(2)] = inst_40833);

(statearr_40846_40861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (6))){
var inst_40835 = (state_40839[(2)]);
var state_40839__$1 = state_40839;
var statearr_40847_40862 = state_40839__$1;
(statearr_40847_40862[(2)] = inst_40835);

(statearr_40847_40862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (7))){
var inst_40823 = (state_40839[(11)]);
var inst_40829 = (state_40839[(2)]);
var inst_40830 = cljs.core.async.put_BANG_.call(null,out,inst_40829);
var inst_40816 = inst_40823;
var state_40839__$1 = (function (){var statearr_40848 = state_40839;
(statearr_40848[(7)] = inst_40816);

(statearr_40848[(12)] = inst_40830);

return statearr_40848;
})();
var statearr_40849_40863 = state_40839__$1;
(statearr_40849_40863[(2)] = null);

(statearr_40849_40863[(1)] = (2));


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
});})(c__39382__auto___40857,out))
;
return ((function (switch__39361__auto__,c__39382__auto___40857,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto____0 = (function (){
var statearr_40853 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40853[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto__);

(statearr_40853[(1)] = (1));

return statearr_40853;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto____1 = (function (state_40839){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_40839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e40854){if((e40854 instanceof Object)){
var ex__39365__auto__ = e40854;
var statearr_40855_40864 = state_40839;
(statearr_40855_40864[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40865 = state_40839;
state_40839 = G__40865;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto__ = function(state_40839){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto____1.call(this,state_40839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto___40857,out))
})();
var state__39384__auto__ = (function (){var statearr_40856 = f__39383__auto__.call(null);
(statearr_40856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto___40857);

return statearr_40856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto___40857,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40866,opts){
var map__40870 = p__40866;
var map__40870__$1 = ((((!((map__40870 == null)))?((((map__40870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40870):map__40870);
var eval_body__$1 = cljs.core.get.call(null,map__40870__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40870__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36760__auto__ = eval_body__$1;
if(cljs.core.truth_(and__36760__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__36760__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40872){var e = e40872;
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
return (function (p1__40873_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40873_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40882){
var vec__40883 = p__40882;
var k = cljs.core.nth.call(null,vec__40883,(0),null);
var v = cljs.core.nth.call(null,vec__40883,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40886){
var vec__40887 = p__40886;
var k = cljs.core.nth.call(null,vec__40887,(0),null);
var v = cljs.core.nth.call(null,vec__40887,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40893,p__40894){
var map__41141 = p__40893;
var map__41141__$1 = ((((!((map__41141 == null)))?((((map__41141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41141):map__41141);
var opts = map__41141__$1;
var before_jsload = cljs.core.get.call(null,map__41141__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41141__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41141__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41142 = p__40894;
var map__41142__$1 = ((((!((map__41142 == null)))?((((map__41142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41142):map__41142);
var msg = map__41142__$1;
var files = cljs.core.get.call(null,map__41142__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41142__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41142__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41295){
var state_val_41296 = (state_41295[(1)]);
if((state_val_41296 === (7))){
var inst_41156 = (state_41295[(7)]);
var inst_41158 = (state_41295[(8)]);
var inst_41157 = (state_41295[(9)]);
var inst_41159 = (state_41295[(10)]);
var inst_41164 = cljs.core._nth.call(null,inst_41157,inst_41159);
var inst_41165 = figwheel.client.file_reloading.eval_body.call(null,inst_41164,opts);
var inst_41166 = (inst_41159 + (1));
var tmp41297 = inst_41156;
var tmp41298 = inst_41158;
var tmp41299 = inst_41157;
var inst_41156__$1 = tmp41297;
var inst_41157__$1 = tmp41299;
var inst_41158__$1 = tmp41298;
var inst_41159__$1 = inst_41166;
var state_41295__$1 = (function (){var statearr_41300 = state_41295;
(statearr_41300[(7)] = inst_41156__$1);

(statearr_41300[(8)] = inst_41158__$1);

(statearr_41300[(11)] = inst_41165);

(statearr_41300[(9)] = inst_41157__$1);

(statearr_41300[(10)] = inst_41159__$1);

return statearr_41300;
})();
var statearr_41301_41387 = state_41295__$1;
(statearr_41301_41387[(2)] = null);

(statearr_41301_41387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (20))){
var inst_41199 = (state_41295[(12)]);
var inst_41207 = figwheel.client.file_reloading.sort_files.call(null,inst_41199);
var state_41295__$1 = state_41295;
var statearr_41302_41388 = state_41295__$1;
(statearr_41302_41388[(2)] = inst_41207);

(statearr_41302_41388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (27))){
var state_41295__$1 = state_41295;
var statearr_41303_41389 = state_41295__$1;
(statearr_41303_41389[(2)] = null);

(statearr_41303_41389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (1))){
var inst_41148 = (state_41295[(13)]);
var inst_41145 = before_jsload.call(null,files);
var inst_41146 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41147 = (function (){return ((function (inst_41148,inst_41145,inst_41146,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40890_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40890_SHARP_);
});
;})(inst_41148,inst_41145,inst_41146,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41148__$1 = cljs.core.filter.call(null,inst_41147,files);
var inst_41149 = cljs.core.not_empty.call(null,inst_41148__$1);
var state_41295__$1 = (function (){var statearr_41304 = state_41295;
(statearr_41304[(13)] = inst_41148__$1);

(statearr_41304[(14)] = inst_41146);

(statearr_41304[(15)] = inst_41145);

return statearr_41304;
})();
if(cljs.core.truth_(inst_41149)){
var statearr_41305_41390 = state_41295__$1;
(statearr_41305_41390[(1)] = (2));

} else {
var statearr_41306_41391 = state_41295__$1;
(statearr_41306_41391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (24))){
var state_41295__$1 = state_41295;
var statearr_41307_41392 = state_41295__$1;
(statearr_41307_41392[(2)] = null);

(statearr_41307_41392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (39))){
var inst_41249 = (state_41295[(16)]);
var state_41295__$1 = state_41295;
var statearr_41308_41393 = state_41295__$1;
(statearr_41308_41393[(2)] = inst_41249);

(statearr_41308_41393[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (46))){
var inst_41290 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41309_41394 = state_41295__$1;
(statearr_41309_41394[(2)] = inst_41290);

(statearr_41309_41394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (4))){
var inst_41193 = (state_41295[(2)]);
var inst_41194 = cljs.core.List.EMPTY;
var inst_41195 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41194);
var inst_41196 = (function (){return ((function (inst_41193,inst_41194,inst_41195,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40891_SHARP_){
var and__36760__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40891_SHARP_);
if(cljs.core.truth_(and__36760__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40891_SHARP_));
} else {
return and__36760__auto__;
}
});
;})(inst_41193,inst_41194,inst_41195,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41197 = cljs.core.filter.call(null,inst_41196,files);
var inst_41198 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41199 = cljs.core.concat.call(null,inst_41197,inst_41198);
var state_41295__$1 = (function (){var statearr_41310 = state_41295;
(statearr_41310[(17)] = inst_41195);

(statearr_41310[(18)] = inst_41193);

(statearr_41310[(12)] = inst_41199);

return statearr_41310;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41311_41395 = state_41295__$1;
(statearr_41311_41395[(1)] = (16));

} else {
var statearr_41312_41396 = state_41295__$1;
(statearr_41312_41396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (15))){
var inst_41183 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41313_41397 = state_41295__$1;
(statearr_41313_41397[(2)] = inst_41183);

(statearr_41313_41397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (21))){
var inst_41209 = (state_41295[(19)]);
var inst_41209__$1 = (state_41295[(2)]);
var inst_41210 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41209__$1);
var state_41295__$1 = (function (){var statearr_41314 = state_41295;
(statearr_41314[(19)] = inst_41209__$1);

return statearr_41314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41295__$1,(22),inst_41210);
} else {
if((state_val_41296 === (31))){
var inst_41293 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41295__$1,inst_41293);
} else {
if((state_val_41296 === (32))){
var inst_41249 = (state_41295[(16)]);
var inst_41254 = inst_41249.cljs$lang$protocol_mask$partition0$;
var inst_41255 = (inst_41254 & (64));
var inst_41256 = inst_41249.cljs$core$ISeq$;
var inst_41257 = (inst_41255) || (inst_41256);
var state_41295__$1 = state_41295;
if(cljs.core.truth_(inst_41257)){
var statearr_41315_41398 = state_41295__$1;
(statearr_41315_41398[(1)] = (35));

} else {
var statearr_41316_41399 = state_41295__$1;
(statearr_41316_41399[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (40))){
var inst_41270 = (state_41295[(20)]);
var inst_41269 = (state_41295[(2)]);
var inst_41270__$1 = cljs.core.get.call(null,inst_41269,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41271 = cljs.core.get.call(null,inst_41269,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41272 = cljs.core.not_empty.call(null,inst_41270__$1);
var state_41295__$1 = (function (){var statearr_41317 = state_41295;
(statearr_41317[(21)] = inst_41271);

(statearr_41317[(20)] = inst_41270__$1);

return statearr_41317;
})();
if(cljs.core.truth_(inst_41272)){
var statearr_41318_41400 = state_41295__$1;
(statearr_41318_41400[(1)] = (41));

} else {
var statearr_41319_41401 = state_41295__$1;
(statearr_41319_41401[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (33))){
var state_41295__$1 = state_41295;
var statearr_41320_41402 = state_41295__$1;
(statearr_41320_41402[(2)] = false);

(statearr_41320_41402[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (13))){
var inst_41169 = (state_41295[(22)]);
var inst_41173 = cljs.core.chunk_first.call(null,inst_41169);
var inst_41174 = cljs.core.chunk_rest.call(null,inst_41169);
var inst_41175 = cljs.core.count.call(null,inst_41173);
var inst_41156 = inst_41174;
var inst_41157 = inst_41173;
var inst_41158 = inst_41175;
var inst_41159 = (0);
var state_41295__$1 = (function (){var statearr_41321 = state_41295;
(statearr_41321[(7)] = inst_41156);

(statearr_41321[(8)] = inst_41158);

(statearr_41321[(9)] = inst_41157);

(statearr_41321[(10)] = inst_41159);

return statearr_41321;
})();
var statearr_41322_41403 = state_41295__$1;
(statearr_41322_41403[(2)] = null);

(statearr_41322_41403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (22))){
var inst_41212 = (state_41295[(23)]);
var inst_41209 = (state_41295[(19)]);
var inst_41213 = (state_41295[(24)]);
var inst_41217 = (state_41295[(25)]);
var inst_41212__$1 = (state_41295[(2)]);
var inst_41213__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41212__$1);
var inst_41214 = (function (){var all_files = inst_41209;
var res_SINGLEQUOTE_ = inst_41212__$1;
var res = inst_41213__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41212,inst_41209,inst_41213,inst_41217,inst_41212__$1,inst_41213__$1,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40892_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40892_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41212,inst_41209,inst_41213,inst_41217,inst_41212__$1,inst_41213__$1,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41215 = cljs.core.filter.call(null,inst_41214,inst_41212__$1);
var inst_41216 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41217__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41216);
var inst_41218 = cljs.core.not_empty.call(null,inst_41217__$1);
var state_41295__$1 = (function (){var statearr_41323 = state_41295;
(statearr_41323[(26)] = inst_41215);

(statearr_41323[(23)] = inst_41212__$1);

(statearr_41323[(24)] = inst_41213__$1);

(statearr_41323[(25)] = inst_41217__$1);

return statearr_41323;
})();
if(cljs.core.truth_(inst_41218)){
var statearr_41324_41404 = state_41295__$1;
(statearr_41324_41404[(1)] = (23));

} else {
var statearr_41325_41405 = state_41295__$1;
(statearr_41325_41405[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (36))){
var state_41295__$1 = state_41295;
var statearr_41326_41406 = state_41295__$1;
(statearr_41326_41406[(2)] = false);

(statearr_41326_41406[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (41))){
var inst_41270 = (state_41295[(20)]);
var inst_41274 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41275 = cljs.core.map.call(null,inst_41274,inst_41270);
var inst_41276 = cljs.core.pr_str.call(null,inst_41275);
var inst_41277 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41276)].join('');
var inst_41278 = figwheel.client.utils.log.call(null,inst_41277);
var state_41295__$1 = state_41295;
var statearr_41327_41407 = state_41295__$1;
(statearr_41327_41407[(2)] = inst_41278);

(statearr_41327_41407[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (43))){
var inst_41271 = (state_41295[(21)]);
var inst_41281 = (state_41295[(2)]);
var inst_41282 = cljs.core.not_empty.call(null,inst_41271);
var state_41295__$1 = (function (){var statearr_41328 = state_41295;
(statearr_41328[(27)] = inst_41281);

return statearr_41328;
})();
if(cljs.core.truth_(inst_41282)){
var statearr_41329_41408 = state_41295__$1;
(statearr_41329_41408[(1)] = (44));

} else {
var statearr_41330_41409 = state_41295__$1;
(statearr_41330_41409[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (29))){
var inst_41215 = (state_41295[(26)]);
var inst_41212 = (state_41295[(23)]);
var inst_41209 = (state_41295[(19)]);
var inst_41213 = (state_41295[(24)]);
var inst_41249 = (state_41295[(16)]);
var inst_41217 = (state_41295[(25)]);
var inst_41245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41248 = (function (){var all_files = inst_41209;
var res_SINGLEQUOTE_ = inst_41212;
var res = inst_41213;
var files_not_loaded = inst_41215;
var dependencies_that_loaded = inst_41217;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41249,inst_41217,inst_41245,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41247){
var map__41331 = p__41247;
var map__41331__$1 = ((((!((map__41331 == null)))?((((map__41331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41331):map__41331);
var namespace = cljs.core.get.call(null,map__41331__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41249,inst_41217,inst_41245,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41249__$1 = cljs.core.group_by.call(null,inst_41248,inst_41215);
var inst_41251 = (inst_41249__$1 == null);
var inst_41252 = cljs.core.not.call(null,inst_41251);
var state_41295__$1 = (function (){var statearr_41333 = state_41295;
(statearr_41333[(16)] = inst_41249__$1);

(statearr_41333[(28)] = inst_41245);

return statearr_41333;
})();
if(inst_41252){
var statearr_41334_41410 = state_41295__$1;
(statearr_41334_41410[(1)] = (32));

} else {
var statearr_41335_41411 = state_41295__$1;
(statearr_41335_41411[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (44))){
var inst_41271 = (state_41295[(21)]);
var inst_41284 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41271);
var inst_41285 = cljs.core.pr_str.call(null,inst_41284);
var inst_41286 = [cljs.core.str("not required: "),cljs.core.str(inst_41285)].join('');
var inst_41287 = figwheel.client.utils.log.call(null,inst_41286);
var state_41295__$1 = state_41295;
var statearr_41336_41412 = state_41295__$1;
(statearr_41336_41412[(2)] = inst_41287);

(statearr_41336_41412[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (6))){
var inst_41190 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41337_41413 = state_41295__$1;
(statearr_41337_41413[(2)] = inst_41190);

(statearr_41337_41413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (28))){
var inst_41215 = (state_41295[(26)]);
var inst_41242 = (state_41295[(2)]);
var inst_41243 = cljs.core.not_empty.call(null,inst_41215);
var state_41295__$1 = (function (){var statearr_41338 = state_41295;
(statearr_41338[(29)] = inst_41242);

return statearr_41338;
})();
if(cljs.core.truth_(inst_41243)){
var statearr_41339_41414 = state_41295__$1;
(statearr_41339_41414[(1)] = (29));

} else {
var statearr_41340_41415 = state_41295__$1;
(statearr_41340_41415[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (25))){
var inst_41213 = (state_41295[(24)]);
var inst_41229 = (state_41295[(2)]);
var inst_41230 = cljs.core.not_empty.call(null,inst_41213);
var state_41295__$1 = (function (){var statearr_41341 = state_41295;
(statearr_41341[(30)] = inst_41229);

return statearr_41341;
})();
if(cljs.core.truth_(inst_41230)){
var statearr_41342_41416 = state_41295__$1;
(statearr_41342_41416[(1)] = (26));

} else {
var statearr_41343_41417 = state_41295__$1;
(statearr_41343_41417[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (34))){
var inst_41264 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
if(cljs.core.truth_(inst_41264)){
var statearr_41344_41418 = state_41295__$1;
(statearr_41344_41418[(1)] = (38));

} else {
var statearr_41345_41419 = state_41295__$1;
(statearr_41345_41419[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (17))){
var state_41295__$1 = state_41295;
var statearr_41346_41420 = state_41295__$1;
(statearr_41346_41420[(2)] = recompile_dependents);

(statearr_41346_41420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (3))){
var state_41295__$1 = state_41295;
var statearr_41347_41421 = state_41295__$1;
(statearr_41347_41421[(2)] = null);

(statearr_41347_41421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (12))){
var inst_41186 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41348_41422 = state_41295__$1;
(statearr_41348_41422[(2)] = inst_41186);

(statearr_41348_41422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (2))){
var inst_41148 = (state_41295[(13)]);
var inst_41155 = cljs.core.seq.call(null,inst_41148);
var inst_41156 = inst_41155;
var inst_41157 = null;
var inst_41158 = (0);
var inst_41159 = (0);
var state_41295__$1 = (function (){var statearr_41349 = state_41295;
(statearr_41349[(7)] = inst_41156);

(statearr_41349[(8)] = inst_41158);

(statearr_41349[(9)] = inst_41157);

(statearr_41349[(10)] = inst_41159);

return statearr_41349;
})();
var statearr_41350_41423 = state_41295__$1;
(statearr_41350_41423[(2)] = null);

(statearr_41350_41423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (23))){
var inst_41215 = (state_41295[(26)]);
var inst_41212 = (state_41295[(23)]);
var inst_41209 = (state_41295[(19)]);
var inst_41213 = (state_41295[(24)]);
var inst_41217 = (state_41295[(25)]);
var inst_41220 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41222 = (function (){var all_files = inst_41209;
var res_SINGLEQUOTE_ = inst_41212;
var res = inst_41213;
var files_not_loaded = inst_41215;
var dependencies_that_loaded = inst_41217;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41217,inst_41220,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41221){
var map__41351 = p__41221;
var map__41351__$1 = ((((!((map__41351 == null)))?((((map__41351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41351):map__41351);
var request_url = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41217,inst_41220,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41223 = cljs.core.reverse.call(null,inst_41217);
var inst_41224 = cljs.core.map.call(null,inst_41222,inst_41223);
var inst_41225 = cljs.core.pr_str.call(null,inst_41224);
var inst_41226 = figwheel.client.utils.log.call(null,inst_41225);
var state_41295__$1 = (function (){var statearr_41353 = state_41295;
(statearr_41353[(31)] = inst_41220);

return statearr_41353;
})();
var statearr_41354_41424 = state_41295__$1;
(statearr_41354_41424[(2)] = inst_41226);

(statearr_41354_41424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (35))){
var state_41295__$1 = state_41295;
var statearr_41355_41425 = state_41295__$1;
(statearr_41355_41425[(2)] = true);

(statearr_41355_41425[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (19))){
var inst_41199 = (state_41295[(12)]);
var inst_41205 = figwheel.client.file_reloading.expand_files.call(null,inst_41199);
var state_41295__$1 = state_41295;
var statearr_41356_41426 = state_41295__$1;
(statearr_41356_41426[(2)] = inst_41205);

(statearr_41356_41426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (11))){
var state_41295__$1 = state_41295;
var statearr_41357_41427 = state_41295__$1;
(statearr_41357_41427[(2)] = null);

(statearr_41357_41427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (9))){
var inst_41188 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41358_41428 = state_41295__$1;
(statearr_41358_41428[(2)] = inst_41188);

(statearr_41358_41428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (5))){
var inst_41158 = (state_41295[(8)]);
var inst_41159 = (state_41295[(10)]);
var inst_41161 = (inst_41159 < inst_41158);
var inst_41162 = inst_41161;
var state_41295__$1 = state_41295;
if(cljs.core.truth_(inst_41162)){
var statearr_41359_41429 = state_41295__$1;
(statearr_41359_41429[(1)] = (7));

} else {
var statearr_41360_41430 = state_41295__$1;
(statearr_41360_41430[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (14))){
var inst_41169 = (state_41295[(22)]);
var inst_41178 = cljs.core.first.call(null,inst_41169);
var inst_41179 = figwheel.client.file_reloading.eval_body.call(null,inst_41178,opts);
var inst_41180 = cljs.core.next.call(null,inst_41169);
var inst_41156 = inst_41180;
var inst_41157 = null;
var inst_41158 = (0);
var inst_41159 = (0);
var state_41295__$1 = (function (){var statearr_41361 = state_41295;
(statearr_41361[(7)] = inst_41156);

(statearr_41361[(8)] = inst_41158);

(statearr_41361[(32)] = inst_41179);

(statearr_41361[(9)] = inst_41157);

(statearr_41361[(10)] = inst_41159);

return statearr_41361;
})();
var statearr_41362_41431 = state_41295__$1;
(statearr_41362_41431[(2)] = null);

(statearr_41362_41431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (45))){
var state_41295__$1 = state_41295;
var statearr_41363_41432 = state_41295__$1;
(statearr_41363_41432[(2)] = null);

(statearr_41363_41432[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (26))){
var inst_41215 = (state_41295[(26)]);
var inst_41212 = (state_41295[(23)]);
var inst_41209 = (state_41295[(19)]);
var inst_41213 = (state_41295[(24)]);
var inst_41217 = (state_41295[(25)]);
var inst_41232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41234 = (function (){var all_files = inst_41209;
var res_SINGLEQUOTE_ = inst_41212;
var res = inst_41213;
var files_not_loaded = inst_41215;
var dependencies_that_loaded = inst_41217;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41217,inst_41232,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41233){
var map__41364 = p__41233;
var map__41364__$1 = ((((!((map__41364 == null)))?((((map__41364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41364):map__41364);
var namespace = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41217,inst_41232,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41235 = cljs.core.map.call(null,inst_41234,inst_41213);
var inst_41236 = cljs.core.pr_str.call(null,inst_41235);
var inst_41237 = figwheel.client.utils.log.call(null,inst_41236);
var inst_41238 = (function (){var all_files = inst_41209;
var res_SINGLEQUOTE_ = inst_41212;
var res = inst_41213;
var files_not_loaded = inst_41215;
var dependencies_that_loaded = inst_41217;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41217,inst_41232,inst_41234,inst_41235,inst_41236,inst_41237,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41215,inst_41212,inst_41209,inst_41213,inst_41217,inst_41232,inst_41234,inst_41235,inst_41236,inst_41237,state_val_41296,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41239 = setTimeout(inst_41238,(10));
var state_41295__$1 = (function (){var statearr_41366 = state_41295;
(statearr_41366[(33)] = inst_41232);

(statearr_41366[(34)] = inst_41237);

return statearr_41366;
})();
var statearr_41367_41433 = state_41295__$1;
(statearr_41367_41433[(2)] = inst_41239);

(statearr_41367_41433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (16))){
var state_41295__$1 = state_41295;
var statearr_41368_41434 = state_41295__$1;
(statearr_41368_41434[(2)] = reload_dependents);

(statearr_41368_41434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (38))){
var inst_41249 = (state_41295[(16)]);
var inst_41266 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41249);
var state_41295__$1 = state_41295;
var statearr_41369_41435 = state_41295__$1;
(statearr_41369_41435[(2)] = inst_41266);

(statearr_41369_41435[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (30))){
var state_41295__$1 = state_41295;
var statearr_41370_41436 = state_41295__$1;
(statearr_41370_41436[(2)] = null);

(statearr_41370_41436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (10))){
var inst_41169 = (state_41295[(22)]);
var inst_41171 = cljs.core.chunked_seq_QMARK_.call(null,inst_41169);
var state_41295__$1 = state_41295;
if(inst_41171){
var statearr_41371_41437 = state_41295__$1;
(statearr_41371_41437[(1)] = (13));

} else {
var statearr_41372_41438 = state_41295__$1;
(statearr_41372_41438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (18))){
var inst_41203 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
if(cljs.core.truth_(inst_41203)){
var statearr_41373_41439 = state_41295__$1;
(statearr_41373_41439[(1)] = (19));

} else {
var statearr_41374_41440 = state_41295__$1;
(statearr_41374_41440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (42))){
var state_41295__$1 = state_41295;
var statearr_41375_41441 = state_41295__$1;
(statearr_41375_41441[(2)] = null);

(statearr_41375_41441[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (37))){
var inst_41261 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41376_41442 = state_41295__$1;
(statearr_41376_41442[(2)] = inst_41261);

(statearr_41376_41442[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (8))){
var inst_41156 = (state_41295[(7)]);
var inst_41169 = (state_41295[(22)]);
var inst_41169__$1 = cljs.core.seq.call(null,inst_41156);
var state_41295__$1 = (function (){var statearr_41377 = state_41295;
(statearr_41377[(22)] = inst_41169__$1);

return statearr_41377;
})();
if(inst_41169__$1){
var statearr_41378_41443 = state_41295__$1;
(statearr_41378_41443[(1)] = (10));

} else {
var statearr_41379_41444 = state_41295__$1;
(statearr_41379_41444[(1)] = (11));

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
});})(c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39361__auto__,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto____0 = (function (){
var statearr_41383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41383[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto__);

(statearr_41383[(1)] = (1));

return statearr_41383;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto____1 = (function (state_41295){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_41295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e41384){if((e41384 instanceof Object)){
var ex__39365__auto__ = e41384;
var statearr_41385_41445 = state_41295;
(statearr_41385_41445[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41446 = state_41295;
state_41295 = G__41446;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto__ = function(state_41295){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto____1.call(this,state_41295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39384__auto__ = (function (){var statearr_41386 = f__39383__auto__.call(null);
(statearr_41386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto__);

return statearr_41386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto__,map__41141,map__41141__$1,opts,before_jsload,on_jsload,reload_dependents,map__41142,map__41142__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39382__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41449,link){
var map__41452 = p__41449;
var map__41452__$1 = ((((!((map__41452 == null)))?((((map__41452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41452):map__41452);
var file = cljs.core.get.call(null,map__41452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41452,map__41452__$1,file){
return (function (p1__41447_SHARP_,p2__41448_SHARP_){
if(cljs.core._EQ_.call(null,p1__41447_SHARP_,p2__41448_SHARP_)){
return p1__41447_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41452,map__41452__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41458){
var map__41459 = p__41458;
var map__41459__$1 = ((((!((map__41459 == null)))?((((map__41459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41459):map__41459);
var match_length = cljs.core.get.call(null,map__41459__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41459__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41454_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41454_SHARP_);
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
var args41461 = [];
var len__37847__auto___41464 = arguments.length;
var i__37848__auto___41465 = (0);
while(true){
if((i__37848__auto___41465 < len__37847__auto___41464)){
args41461.push((arguments[i__37848__auto___41465]));

var G__41466 = (i__37848__auto___41465 + (1));
i__37848__auto___41465 = G__41466;
continue;
} else {
}
break;
}

var G__41463 = args41461.length;
switch (G__41463) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41461.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41468_SHARP_,p2__41469_SHARP_){
return cljs.core.assoc.call(null,p1__41468_SHARP_,cljs.core.get.call(null,p2__41469_SHARP_,key),p2__41469_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41470){
var map__41473 = p__41470;
var map__41473__$1 = ((((!((map__41473 == null)))?((((map__41473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41473):map__41473);
var f_data = map__41473__$1;
var file = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41475,p__41476){
var map__41485 = p__41475;
var map__41485__$1 = ((((!((map__41485 == null)))?((((map__41485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41485):map__41485);
var opts = map__41485__$1;
var on_cssload = cljs.core.get.call(null,map__41485__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41486 = p__41476;
var map__41486__$1 = ((((!((map__41486 == null)))?((((map__41486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41486):map__41486);
var files_msg = map__41486__$1;
var files = cljs.core.get.call(null,map__41486__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41489_41493 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__41490_41494 = null;
var count__41491_41495 = (0);
var i__41492_41496 = (0);
while(true){
if((i__41492_41496 < count__41491_41495)){
var f_41497 = cljs.core._nth.call(null,chunk__41490_41494,i__41492_41496);
figwheel.client.file_reloading.reload_css_file.call(null,f_41497);

var G__41498 = seq__41489_41493;
var G__41499 = chunk__41490_41494;
var G__41500 = count__41491_41495;
var G__41501 = (i__41492_41496 + (1));
seq__41489_41493 = G__41498;
chunk__41490_41494 = G__41499;
count__41491_41495 = G__41500;
i__41492_41496 = G__41501;
continue;
} else {
var temp__4657__auto___41502 = cljs.core.seq.call(null,seq__41489_41493);
if(temp__4657__auto___41502){
var seq__41489_41503__$1 = temp__4657__auto___41502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41489_41503__$1)){
var c__37583__auto___41504 = cljs.core.chunk_first.call(null,seq__41489_41503__$1);
var G__41505 = cljs.core.chunk_rest.call(null,seq__41489_41503__$1);
var G__41506 = c__37583__auto___41504;
var G__41507 = cljs.core.count.call(null,c__37583__auto___41504);
var G__41508 = (0);
seq__41489_41493 = G__41505;
chunk__41490_41494 = G__41506;
count__41491_41495 = G__41507;
i__41492_41496 = G__41508;
continue;
} else {
var f_41509 = cljs.core.first.call(null,seq__41489_41503__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41509);

var G__41510 = cljs.core.next.call(null,seq__41489_41503__$1);
var G__41511 = null;
var G__41512 = (0);
var G__41513 = (0);
seq__41489_41493 = G__41510;
chunk__41490_41494 = G__41511;
count__41491_41495 = G__41512;
i__41492_41496 = G__41513;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41485,map__41485__$1,opts,on_cssload,map__41486,map__41486__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__41485,map__41485__$1,opts,on_cssload,map__41486,map__41486__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map