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
var or__36802__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36802__auto__){
return or__36802__auto__;
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
var or__36802__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51404_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51404_SHARP_));
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
var seq__51409 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51410 = null;
var count__51411 = (0);
var i__51412 = (0);
while(true){
if((i__51412 < count__51411)){
var n = cljs.core._nth.call(null,chunk__51410,i__51412);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51413 = seq__51409;
var G__51414 = chunk__51410;
var G__51415 = count__51411;
var G__51416 = (i__51412 + (1));
seq__51409 = G__51413;
chunk__51410 = G__51414;
count__51411 = G__51415;
i__51412 = G__51416;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51409);
if(temp__4657__auto__){
var seq__51409__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51409__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__51409__$1);
var G__51417 = cljs.core.chunk_rest.call(null,seq__51409__$1);
var G__51418 = c__37613__auto__;
var G__51419 = cljs.core.count.call(null,c__37613__auto__);
var G__51420 = (0);
seq__51409 = G__51417;
chunk__51410 = G__51418;
count__51411 = G__51419;
i__51412 = G__51420;
continue;
} else {
var n = cljs.core.first.call(null,seq__51409__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51421 = cljs.core.next.call(null,seq__51409__$1);
var G__51422 = null;
var G__51423 = (0);
var G__51424 = (0);
seq__51409 = G__51421;
chunk__51410 = G__51422;
count__51411 = G__51423;
i__51412 = G__51424;
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

var seq__51475_51486 = cljs.core.seq.call(null,deps);
var chunk__51476_51487 = null;
var count__51477_51488 = (0);
var i__51478_51489 = (0);
while(true){
if((i__51478_51489 < count__51477_51488)){
var dep_51490 = cljs.core._nth.call(null,chunk__51476_51487,i__51478_51489);
topo_sort_helper_STAR_.call(null,dep_51490,(depth + (1)),state);

var G__51491 = seq__51475_51486;
var G__51492 = chunk__51476_51487;
var G__51493 = count__51477_51488;
var G__51494 = (i__51478_51489 + (1));
seq__51475_51486 = G__51491;
chunk__51476_51487 = G__51492;
count__51477_51488 = G__51493;
i__51478_51489 = G__51494;
continue;
} else {
var temp__4657__auto___51495 = cljs.core.seq.call(null,seq__51475_51486);
if(temp__4657__auto___51495){
var seq__51475_51496__$1 = temp__4657__auto___51495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51475_51496__$1)){
var c__37613__auto___51497 = cljs.core.chunk_first.call(null,seq__51475_51496__$1);
var G__51498 = cljs.core.chunk_rest.call(null,seq__51475_51496__$1);
var G__51499 = c__37613__auto___51497;
var G__51500 = cljs.core.count.call(null,c__37613__auto___51497);
var G__51501 = (0);
seq__51475_51486 = G__51498;
chunk__51476_51487 = G__51499;
count__51477_51488 = G__51500;
i__51478_51489 = G__51501;
continue;
} else {
var dep_51502 = cljs.core.first.call(null,seq__51475_51496__$1);
topo_sort_helper_STAR_.call(null,dep_51502,(depth + (1)),state);

var G__51503 = cljs.core.next.call(null,seq__51475_51496__$1);
var G__51504 = null;
var G__51505 = (0);
var G__51506 = (0);
seq__51475_51486 = G__51503;
chunk__51476_51487 = G__51504;
count__51477_51488 = G__51505;
i__51478_51489 = G__51506;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51479){
var vec__51483 = p__51479;
var seq__51484 = cljs.core.seq.call(null,vec__51483);
var first__51485 = cljs.core.first.call(null,seq__51484);
var seq__51484__$1 = cljs.core.next.call(null,seq__51484);
var x = first__51485;
var xs = seq__51484__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51483,seq__51484,first__51485,seq__51484__$1,x,xs,get_deps__$1){
return (function (p1__51425_SHARP_){
return clojure.set.difference.call(null,p1__51425_SHARP_,x);
});})(vec__51483,seq__51484,first__51485,seq__51484__$1,x,xs,get_deps__$1))
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
var seq__51519 = cljs.core.seq.call(null,provides);
var chunk__51520 = null;
var count__51521 = (0);
var i__51522 = (0);
while(true){
if((i__51522 < count__51521)){
var prov = cljs.core._nth.call(null,chunk__51520,i__51522);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51523_51531 = cljs.core.seq.call(null,requires);
var chunk__51524_51532 = null;
var count__51525_51533 = (0);
var i__51526_51534 = (0);
while(true){
if((i__51526_51534 < count__51525_51533)){
var req_51535 = cljs.core._nth.call(null,chunk__51524_51532,i__51526_51534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51535,prov);

var G__51536 = seq__51523_51531;
var G__51537 = chunk__51524_51532;
var G__51538 = count__51525_51533;
var G__51539 = (i__51526_51534 + (1));
seq__51523_51531 = G__51536;
chunk__51524_51532 = G__51537;
count__51525_51533 = G__51538;
i__51526_51534 = G__51539;
continue;
} else {
var temp__4657__auto___51540 = cljs.core.seq.call(null,seq__51523_51531);
if(temp__4657__auto___51540){
var seq__51523_51541__$1 = temp__4657__auto___51540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51523_51541__$1)){
var c__37613__auto___51542 = cljs.core.chunk_first.call(null,seq__51523_51541__$1);
var G__51543 = cljs.core.chunk_rest.call(null,seq__51523_51541__$1);
var G__51544 = c__37613__auto___51542;
var G__51545 = cljs.core.count.call(null,c__37613__auto___51542);
var G__51546 = (0);
seq__51523_51531 = G__51543;
chunk__51524_51532 = G__51544;
count__51525_51533 = G__51545;
i__51526_51534 = G__51546;
continue;
} else {
var req_51547 = cljs.core.first.call(null,seq__51523_51541__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51547,prov);

var G__51548 = cljs.core.next.call(null,seq__51523_51541__$1);
var G__51549 = null;
var G__51550 = (0);
var G__51551 = (0);
seq__51523_51531 = G__51548;
chunk__51524_51532 = G__51549;
count__51525_51533 = G__51550;
i__51526_51534 = G__51551;
continue;
}
} else {
}
}
break;
}

var G__51552 = seq__51519;
var G__51553 = chunk__51520;
var G__51554 = count__51521;
var G__51555 = (i__51522 + (1));
seq__51519 = G__51552;
chunk__51520 = G__51553;
count__51521 = G__51554;
i__51522 = G__51555;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51519);
if(temp__4657__auto__){
var seq__51519__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51519__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__51519__$1);
var G__51556 = cljs.core.chunk_rest.call(null,seq__51519__$1);
var G__51557 = c__37613__auto__;
var G__51558 = cljs.core.count.call(null,c__37613__auto__);
var G__51559 = (0);
seq__51519 = G__51556;
chunk__51520 = G__51557;
count__51521 = G__51558;
i__51522 = G__51559;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51519__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51527_51560 = cljs.core.seq.call(null,requires);
var chunk__51528_51561 = null;
var count__51529_51562 = (0);
var i__51530_51563 = (0);
while(true){
if((i__51530_51563 < count__51529_51562)){
var req_51564 = cljs.core._nth.call(null,chunk__51528_51561,i__51530_51563);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51564,prov);

var G__51565 = seq__51527_51560;
var G__51566 = chunk__51528_51561;
var G__51567 = count__51529_51562;
var G__51568 = (i__51530_51563 + (1));
seq__51527_51560 = G__51565;
chunk__51528_51561 = G__51566;
count__51529_51562 = G__51567;
i__51530_51563 = G__51568;
continue;
} else {
var temp__4657__auto___51569__$1 = cljs.core.seq.call(null,seq__51527_51560);
if(temp__4657__auto___51569__$1){
var seq__51527_51570__$1 = temp__4657__auto___51569__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51527_51570__$1)){
var c__37613__auto___51571 = cljs.core.chunk_first.call(null,seq__51527_51570__$1);
var G__51572 = cljs.core.chunk_rest.call(null,seq__51527_51570__$1);
var G__51573 = c__37613__auto___51571;
var G__51574 = cljs.core.count.call(null,c__37613__auto___51571);
var G__51575 = (0);
seq__51527_51560 = G__51572;
chunk__51528_51561 = G__51573;
count__51529_51562 = G__51574;
i__51530_51563 = G__51575;
continue;
} else {
var req_51576 = cljs.core.first.call(null,seq__51527_51570__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51576,prov);

var G__51577 = cljs.core.next.call(null,seq__51527_51570__$1);
var G__51578 = null;
var G__51579 = (0);
var G__51580 = (0);
seq__51527_51560 = G__51577;
chunk__51528_51561 = G__51578;
count__51529_51562 = G__51579;
i__51530_51563 = G__51580;
continue;
}
} else {
}
}
break;
}

var G__51581 = cljs.core.next.call(null,seq__51519__$1);
var G__51582 = null;
var G__51583 = (0);
var G__51584 = (0);
seq__51519 = G__51581;
chunk__51520 = G__51582;
count__51521 = G__51583;
i__51522 = G__51584;
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
var seq__51589_51593 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51590_51594 = null;
var count__51591_51595 = (0);
var i__51592_51596 = (0);
while(true){
if((i__51592_51596 < count__51591_51595)){
var ns_51597 = cljs.core._nth.call(null,chunk__51590_51594,i__51592_51596);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51597);

var G__51598 = seq__51589_51593;
var G__51599 = chunk__51590_51594;
var G__51600 = count__51591_51595;
var G__51601 = (i__51592_51596 + (1));
seq__51589_51593 = G__51598;
chunk__51590_51594 = G__51599;
count__51591_51595 = G__51600;
i__51592_51596 = G__51601;
continue;
} else {
var temp__4657__auto___51602 = cljs.core.seq.call(null,seq__51589_51593);
if(temp__4657__auto___51602){
var seq__51589_51603__$1 = temp__4657__auto___51602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51589_51603__$1)){
var c__37613__auto___51604 = cljs.core.chunk_first.call(null,seq__51589_51603__$1);
var G__51605 = cljs.core.chunk_rest.call(null,seq__51589_51603__$1);
var G__51606 = c__37613__auto___51604;
var G__51607 = cljs.core.count.call(null,c__37613__auto___51604);
var G__51608 = (0);
seq__51589_51593 = G__51605;
chunk__51590_51594 = G__51606;
count__51591_51595 = G__51607;
i__51592_51596 = G__51608;
continue;
} else {
var ns_51609 = cljs.core.first.call(null,seq__51589_51603__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51609);

var G__51610 = cljs.core.next.call(null,seq__51589_51603__$1);
var G__51611 = null;
var G__51612 = (0);
var G__51613 = (0);
seq__51589_51593 = G__51610;
chunk__51590_51594 = G__51611;
count__51591_51595 = G__51612;
i__51592_51596 = G__51613;
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
goog.require_figwheel_backup_ = (function (){var or__36802__auto__ = goog.require__;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
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
var G__51614__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51615__i = 0, G__51615__a = new Array(arguments.length -  0);
while (G__51615__i < G__51615__a.length) {G__51615__a[G__51615__i] = arguments[G__51615__i + 0]; ++G__51615__i;}
  args = new cljs.core.IndexedSeq(G__51615__a,0);
} 
return G__51614__delegate.call(this,args);};
G__51614.cljs$lang$maxFixedArity = 0;
G__51614.cljs$lang$applyTo = (function (arglist__51616){
var args = cljs.core.seq(arglist__51616);
return G__51614__delegate(args);
});
G__51614.cljs$core$IFn$_invoke$arity$variadic = G__51614__delegate;
return G__51614;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51618 = cljs.core._EQ_;
var expr__51619 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51618.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51619))){
var path_parts = ((function (pred__51618,expr__51619){
return (function (p1__51617_SHARP_){
return clojure.string.split.call(null,p1__51617_SHARP_,/[\/\\]/);
});})(pred__51618,expr__51619))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51618,expr__51619){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51621){if((e51621 instanceof Error)){
var e = e51621;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51621;

}
}})());
});
;})(path_parts,sep,root,pred__51618,expr__51619))
} else {
if(cljs.core.truth_(pred__51618.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51619))){
return ((function (pred__51618,expr__51619){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51618,expr__51619){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51618,expr__51619))
);

return deferred.addErrback(((function (deferred,pred__51618,expr__51619){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51618,expr__51619))
);
});
;})(pred__51618,expr__51619))
} else {
return ((function (pred__51618,expr__51619){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51618,expr__51619))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51622,callback){
var map__51625 = p__51622;
var map__51625__$1 = ((((!((map__51625 == null)))?((((map__51625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51625):map__51625);
var file_msg = map__51625__$1;
var request_url = cljs.core.get.call(null,map__51625__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51625,map__51625__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51625,map__51625__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__){
return (function (state_51649){
var state_val_51650 = (state_51649[(1)]);
if((state_val_51650 === (7))){
var inst_51645 = (state_51649[(2)]);
var state_51649__$1 = state_51649;
var statearr_51651_51671 = state_51649__$1;
(statearr_51651_51671[(2)] = inst_51645);

(statearr_51651_51671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51650 === (1))){
var state_51649__$1 = state_51649;
var statearr_51652_51672 = state_51649__$1;
(statearr_51652_51672[(2)] = null);

(statearr_51652_51672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51650 === (4))){
var inst_51629 = (state_51649[(7)]);
var inst_51629__$1 = (state_51649[(2)]);
var state_51649__$1 = (function (){var statearr_51653 = state_51649;
(statearr_51653[(7)] = inst_51629__$1);

return statearr_51653;
})();
if(cljs.core.truth_(inst_51629__$1)){
var statearr_51654_51673 = state_51649__$1;
(statearr_51654_51673[(1)] = (5));

} else {
var statearr_51655_51674 = state_51649__$1;
(statearr_51655_51674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51650 === (6))){
var state_51649__$1 = state_51649;
var statearr_51656_51675 = state_51649__$1;
(statearr_51656_51675[(2)] = null);

(statearr_51656_51675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51650 === (3))){
var inst_51647 = (state_51649[(2)]);
var state_51649__$1 = state_51649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51649__$1,inst_51647);
} else {
if((state_val_51650 === (2))){
var state_51649__$1 = state_51649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51649__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51650 === (11))){
var inst_51641 = (state_51649[(2)]);
var state_51649__$1 = (function (){var statearr_51657 = state_51649;
(statearr_51657[(8)] = inst_51641);

return statearr_51657;
})();
var statearr_51658_51676 = state_51649__$1;
(statearr_51658_51676[(2)] = null);

(statearr_51658_51676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51650 === (9))){
var inst_51633 = (state_51649[(9)]);
var inst_51635 = (state_51649[(10)]);
var inst_51637 = inst_51635.call(null,inst_51633);
var state_51649__$1 = state_51649;
var statearr_51659_51677 = state_51649__$1;
(statearr_51659_51677[(2)] = inst_51637);

(statearr_51659_51677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51650 === (5))){
var inst_51629 = (state_51649[(7)]);
var inst_51631 = figwheel.client.file_reloading.blocking_load.call(null,inst_51629);
var state_51649__$1 = state_51649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51649__$1,(8),inst_51631);
} else {
if((state_val_51650 === (10))){
var inst_51633 = (state_51649[(9)]);
var inst_51639 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51633);
var state_51649__$1 = state_51649;
var statearr_51660_51678 = state_51649__$1;
(statearr_51660_51678[(2)] = inst_51639);

(statearr_51660_51678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51650 === (8))){
var inst_51629 = (state_51649[(7)]);
var inst_51635 = (state_51649[(10)]);
var inst_51633 = (state_51649[(2)]);
var inst_51634 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51635__$1 = cljs.core.get.call(null,inst_51634,inst_51629);
var state_51649__$1 = (function (){var statearr_51661 = state_51649;
(statearr_51661[(9)] = inst_51633);

(statearr_51661[(10)] = inst_51635__$1);

return statearr_51661;
})();
if(cljs.core.truth_(inst_51635__$1)){
var statearr_51662_51679 = state_51649__$1;
(statearr_51662_51679[(1)] = (9));

} else {
var statearr_51663_51680 = state_51649__$1;
(statearr_51663_51680[(1)] = (10));

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
});})(c__40680__auto__))
;
return ((function (switch__40568__auto__,c__40680__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40569__auto__ = null;
var figwheel$client$file_reloading$state_machine__40569__auto____0 = (function (){
var statearr_51667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51667[(0)] = figwheel$client$file_reloading$state_machine__40569__auto__);

(statearr_51667[(1)] = (1));

return statearr_51667;
});
var figwheel$client$file_reloading$state_machine__40569__auto____1 = (function (state_51649){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_51649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e51668){if((e51668 instanceof Object)){
var ex__40572__auto__ = e51668;
var statearr_51669_51681 = state_51649;
(statearr_51669_51681[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51682 = state_51649;
state_51649 = G__51682;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40569__auto__ = function(state_51649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40569__auto____1.call(this,state_51649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40569__auto____0;
figwheel$client$file_reloading$state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40569__auto____1;
return figwheel$client$file_reloading$state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__))
})();
var state__40682__auto__ = (function (){var statearr_51670 = f__40681__auto__.call(null);
(statearr_51670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_51670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__))
);

return c__40680__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51683,callback){
var map__51686 = p__51683;
var map__51686__$1 = ((((!((map__51686 == null)))?((((map__51686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51686):map__51686);
var file_msg = map__51686__$1;
var namespace = cljs.core.get.call(null,map__51686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51686,map__51686__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51686,map__51686__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51688){
var map__51691 = p__51688;
var map__51691__$1 = ((((!((map__51691 == null)))?((((map__51691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51691):map__51691);
var file_msg = map__51691__$1;
var namespace = cljs.core.get.call(null,map__51691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36790__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36790__auto__){
var or__36802__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36790__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51693,callback){
var map__51696 = p__51693;
var map__51696__$1 = ((((!((map__51696 == null)))?((((map__51696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51696):map__51696);
var file_msg = map__51696__$1;
var request_url = cljs.core.get.call(null,map__51696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51696__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40680__auto___51800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___51800,out){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___51800,out){
return (function (state_51782){
var state_val_51783 = (state_51782[(1)]);
if((state_val_51783 === (1))){
var inst_51756 = cljs.core.seq.call(null,files);
var inst_51757 = cljs.core.first.call(null,inst_51756);
var inst_51758 = cljs.core.next.call(null,inst_51756);
var inst_51759 = files;
var state_51782__$1 = (function (){var statearr_51784 = state_51782;
(statearr_51784[(7)] = inst_51757);

(statearr_51784[(8)] = inst_51758);

(statearr_51784[(9)] = inst_51759);

return statearr_51784;
})();
var statearr_51785_51801 = state_51782__$1;
(statearr_51785_51801[(2)] = null);

(statearr_51785_51801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51783 === (2))){
var inst_51765 = (state_51782[(10)]);
var inst_51759 = (state_51782[(9)]);
var inst_51764 = cljs.core.seq.call(null,inst_51759);
var inst_51765__$1 = cljs.core.first.call(null,inst_51764);
var inst_51766 = cljs.core.next.call(null,inst_51764);
var inst_51767 = (inst_51765__$1 == null);
var inst_51768 = cljs.core.not.call(null,inst_51767);
var state_51782__$1 = (function (){var statearr_51786 = state_51782;
(statearr_51786[(11)] = inst_51766);

(statearr_51786[(10)] = inst_51765__$1);

return statearr_51786;
})();
if(inst_51768){
var statearr_51787_51802 = state_51782__$1;
(statearr_51787_51802[(1)] = (4));

} else {
var statearr_51788_51803 = state_51782__$1;
(statearr_51788_51803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51783 === (3))){
var inst_51780 = (state_51782[(2)]);
var state_51782__$1 = state_51782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51782__$1,inst_51780);
} else {
if((state_val_51783 === (4))){
var inst_51765 = (state_51782[(10)]);
var inst_51770 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51765);
var state_51782__$1 = state_51782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51782__$1,(7),inst_51770);
} else {
if((state_val_51783 === (5))){
var inst_51776 = cljs.core.async.close_BANG_.call(null,out);
var state_51782__$1 = state_51782;
var statearr_51789_51804 = state_51782__$1;
(statearr_51789_51804[(2)] = inst_51776);

(statearr_51789_51804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51783 === (6))){
var inst_51778 = (state_51782[(2)]);
var state_51782__$1 = state_51782;
var statearr_51790_51805 = state_51782__$1;
(statearr_51790_51805[(2)] = inst_51778);

(statearr_51790_51805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51783 === (7))){
var inst_51766 = (state_51782[(11)]);
var inst_51772 = (state_51782[(2)]);
var inst_51773 = cljs.core.async.put_BANG_.call(null,out,inst_51772);
var inst_51759 = inst_51766;
var state_51782__$1 = (function (){var statearr_51791 = state_51782;
(statearr_51791[(12)] = inst_51773);

(statearr_51791[(9)] = inst_51759);

return statearr_51791;
})();
var statearr_51792_51806 = state_51782__$1;
(statearr_51792_51806[(2)] = null);

(statearr_51792_51806[(1)] = (2));


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
});})(c__40680__auto___51800,out))
;
return ((function (switch__40568__auto__,c__40680__auto___51800,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto____0 = (function (){
var statearr_51796 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51796[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto__);

(statearr_51796[(1)] = (1));

return statearr_51796;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto____1 = (function (state_51782){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_51782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e51797){if((e51797 instanceof Object)){
var ex__40572__auto__ = e51797;
var statearr_51798_51807 = state_51782;
(statearr_51798_51807[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51808 = state_51782;
state_51782 = G__51808;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto__ = function(state_51782){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto____1.call(this,state_51782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___51800,out))
})();
var state__40682__auto__ = (function (){var statearr_51799 = f__40681__auto__.call(null);
(statearr_51799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___51800);

return statearr_51799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___51800,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51809,opts){
var map__51813 = p__51809;
var map__51813__$1 = ((((!((map__51813 == null)))?((((map__51813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51813):map__51813);
var eval_body__$1 = cljs.core.get.call(null,map__51813__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51813__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36790__auto__ = eval_body__$1;
if(cljs.core.truth_(and__36790__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__36790__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51815){var e = e51815;
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
return (function (p1__51816_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51816_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__51825){
var vec__51826 = p__51825;
var k = cljs.core.nth.call(null,vec__51826,(0),null);
var v = cljs.core.nth.call(null,vec__51826,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51829){
var vec__51830 = p__51829;
var k = cljs.core.nth.call(null,vec__51830,(0),null);
var v = cljs.core.nth.call(null,vec__51830,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51836,p__51837){
var map__52084 = p__51836;
var map__52084__$1 = ((((!((map__52084 == null)))?((((map__52084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52084):map__52084);
var opts = map__52084__$1;
var before_jsload = cljs.core.get.call(null,map__52084__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52084__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52084__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52085 = p__51837;
var map__52085__$1 = ((((!((map__52085 == null)))?((((map__52085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52085):map__52085);
var msg = map__52085__$1;
var files = cljs.core.get.call(null,map__52085__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52085__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52085__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52238){
var state_val_52239 = (state_52238[(1)]);
if((state_val_52239 === (7))){
var inst_52102 = (state_52238[(7)]);
var inst_52099 = (state_52238[(8)]);
var inst_52101 = (state_52238[(9)]);
var inst_52100 = (state_52238[(10)]);
var inst_52107 = cljs.core._nth.call(null,inst_52100,inst_52102);
var inst_52108 = figwheel.client.file_reloading.eval_body.call(null,inst_52107,opts);
var inst_52109 = (inst_52102 + (1));
var tmp52240 = inst_52099;
var tmp52241 = inst_52101;
var tmp52242 = inst_52100;
var inst_52099__$1 = tmp52240;
var inst_52100__$1 = tmp52242;
var inst_52101__$1 = tmp52241;
var inst_52102__$1 = inst_52109;
var state_52238__$1 = (function (){var statearr_52243 = state_52238;
(statearr_52243[(7)] = inst_52102__$1);

(statearr_52243[(8)] = inst_52099__$1);

(statearr_52243[(9)] = inst_52101__$1);

(statearr_52243[(11)] = inst_52108);

(statearr_52243[(10)] = inst_52100__$1);

return statearr_52243;
})();
var statearr_52244_52330 = state_52238__$1;
(statearr_52244_52330[(2)] = null);

(statearr_52244_52330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (20))){
var inst_52142 = (state_52238[(12)]);
var inst_52150 = figwheel.client.file_reloading.sort_files.call(null,inst_52142);
var state_52238__$1 = state_52238;
var statearr_52245_52331 = state_52238__$1;
(statearr_52245_52331[(2)] = inst_52150);

(statearr_52245_52331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (27))){
var state_52238__$1 = state_52238;
var statearr_52246_52332 = state_52238__$1;
(statearr_52246_52332[(2)] = null);

(statearr_52246_52332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (1))){
var inst_52091 = (state_52238[(13)]);
var inst_52088 = before_jsload.call(null,files);
var inst_52089 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52090 = (function (){return ((function (inst_52091,inst_52088,inst_52089,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51833_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51833_SHARP_);
});
;})(inst_52091,inst_52088,inst_52089,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52091__$1 = cljs.core.filter.call(null,inst_52090,files);
var inst_52092 = cljs.core.not_empty.call(null,inst_52091__$1);
var state_52238__$1 = (function (){var statearr_52247 = state_52238;
(statearr_52247[(14)] = inst_52088);

(statearr_52247[(15)] = inst_52089);

(statearr_52247[(13)] = inst_52091__$1);

return statearr_52247;
})();
if(cljs.core.truth_(inst_52092)){
var statearr_52248_52333 = state_52238__$1;
(statearr_52248_52333[(1)] = (2));

} else {
var statearr_52249_52334 = state_52238__$1;
(statearr_52249_52334[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (24))){
var state_52238__$1 = state_52238;
var statearr_52250_52335 = state_52238__$1;
(statearr_52250_52335[(2)] = null);

(statearr_52250_52335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (39))){
var inst_52192 = (state_52238[(16)]);
var state_52238__$1 = state_52238;
var statearr_52251_52336 = state_52238__$1;
(statearr_52251_52336[(2)] = inst_52192);

(statearr_52251_52336[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (46))){
var inst_52233 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52252_52337 = state_52238__$1;
(statearr_52252_52337[(2)] = inst_52233);

(statearr_52252_52337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (4))){
var inst_52136 = (state_52238[(2)]);
var inst_52137 = cljs.core.List.EMPTY;
var inst_52138 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52137);
var inst_52139 = (function (){return ((function (inst_52136,inst_52137,inst_52138,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51834_SHARP_){
var and__36790__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51834_SHARP_);
if(cljs.core.truth_(and__36790__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51834_SHARP_));
} else {
return and__36790__auto__;
}
});
;})(inst_52136,inst_52137,inst_52138,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52140 = cljs.core.filter.call(null,inst_52139,files);
var inst_52141 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52142 = cljs.core.concat.call(null,inst_52140,inst_52141);
var state_52238__$1 = (function (){var statearr_52253 = state_52238;
(statearr_52253[(12)] = inst_52142);

(statearr_52253[(17)] = inst_52136);

(statearr_52253[(18)] = inst_52138);

return statearr_52253;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52254_52338 = state_52238__$1;
(statearr_52254_52338[(1)] = (16));

} else {
var statearr_52255_52339 = state_52238__$1;
(statearr_52255_52339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (15))){
var inst_52126 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52256_52340 = state_52238__$1;
(statearr_52256_52340[(2)] = inst_52126);

(statearr_52256_52340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (21))){
var inst_52152 = (state_52238[(19)]);
var inst_52152__$1 = (state_52238[(2)]);
var inst_52153 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52152__$1);
var state_52238__$1 = (function (){var statearr_52257 = state_52238;
(statearr_52257[(19)] = inst_52152__$1);

return statearr_52257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52238__$1,(22),inst_52153);
} else {
if((state_val_52239 === (31))){
var inst_52236 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52238__$1,inst_52236);
} else {
if((state_val_52239 === (32))){
var inst_52192 = (state_52238[(16)]);
var inst_52197 = inst_52192.cljs$lang$protocol_mask$partition0$;
var inst_52198 = (inst_52197 & (64));
var inst_52199 = inst_52192.cljs$core$ISeq$;
var inst_52200 = (inst_52198) || (inst_52199);
var state_52238__$1 = state_52238;
if(cljs.core.truth_(inst_52200)){
var statearr_52258_52341 = state_52238__$1;
(statearr_52258_52341[(1)] = (35));

} else {
var statearr_52259_52342 = state_52238__$1;
(statearr_52259_52342[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (40))){
var inst_52213 = (state_52238[(20)]);
var inst_52212 = (state_52238[(2)]);
var inst_52213__$1 = cljs.core.get.call(null,inst_52212,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52214 = cljs.core.get.call(null,inst_52212,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52215 = cljs.core.not_empty.call(null,inst_52213__$1);
var state_52238__$1 = (function (){var statearr_52260 = state_52238;
(statearr_52260[(20)] = inst_52213__$1);

(statearr_52260[(21)] = inst_52214);

return statearr_52260;
})();
if(cljs.core.truth_(inst_52215)){
var statearr_52261_52343 = state_52238__$1;
(statearr_52261_52343[(1)] = (41));

} else {
var statearr_52262_52344 = state_52238__$1;
(statearr_52262_52344[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (33))){
var state_52238__$1 = state_52238;
var statearr_52263_52345 = state_52238__$1;
(statearr_52263_52345[(2)] = false);

(statearr_52263_52345[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (13))){
var inst_52112 = (state_52238[(22)]);
var inst_52116 = cljs.core.chunk_first.call(null,inst_52112);
var inst_52117 = cljs.core.chunk_rest.call(null,inst_52112);
var inst_52118 = cljs.core.count.call(null,inst_52116);
var inst_52099 = inst_52117;
var inst_52100 = inst_52116;
var inst_52101 = inst_52118;
var inst_52102 = (0);
var state_52238__$1 = (function (){var statearr_52264 = state_52238;
(statearr_52264[(7)] = inst_52102);

(statearr_52264[(8)] = inst_52099);

(statearr_52264[(9)] = inst_52101);

(statearr_52264[(10)] = inst_52100);

return statearr_52264;
})();
var statearr_52265_52346 = state_52238__$1;
(statearr_52265_52346[(2)] = null);

(statearr_52265_52346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (22))){
var inst_52152 = (state_52238[(19)]);
var inst_52160 = (state_52238[(23)]);
var inst_52155 = (state_52238[(24)]);
var inst_52156 = (state_52238[(25)]);
var inst_52155__$1 = (state_52238[(2)]);
var inst_52156__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52155__$1);
var inst_52157 = (function (){var all_files = inst_52152;
var res_SINGLEQUOTE_ = inst_52155__$1;
var res = inst_52156__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52152,inst_52160,inst_52155,inst_52156,inst_52155__$1,inst_52156__$1,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51835_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51835_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52152,inst_52160,inst_52155,inst_52156,inst_52155__$1,inst_52156__$1,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52158 = cljs.core.filter.call(null,inst_52157,inst_52155__$1);
var inst_52159 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52160__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52159);
var inst_52161 = cljs.core.not_empty.call(null,inst_52160__$1);
var state_52238__$1 = (function (){var statearr_52266 = state_52238;
(statearr_52266[(26)] = inst_52158);

(statearr_52266[(23)] = inst_52160__$1);

(statearr_52266[(24)] = inst_52155__$1);

(statearr_52266[(25)] = inst_52156__$1);

return statearr_52266;
})();
if(cljs.core.truth_(inst_52161)){
var statearr_52267_52347 = state_52238__$1;
(statearr_52267_52347[(1)] = (23));

} else {
var statearr_52268_52348 = state_52238__$1;
(statearr_52268_52348[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (36))){
var state_52238__$1 = state_52238;
var statearr_52269_52349 = state_52238__$1;
(statearr_52269_52349[(2)] = false);

(statearr_52269_52349[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (41))){
var inst_52213 = (state_52238[(20)]);
var inst_52217 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52218 = cljs.core.map.call(null,inst_52217,inst_52213);
var inst_52219 = cljs.core.pr_str.call(null,inst_52218);
var inst_52220 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52219)].join('');
var inst_52221 = figwheel.client.utils.log.call(null,inst_52220);
var state_52238__$1 = state_52238;
var statearr_52270_52350 = state_52238__$1;
(statearr_52270_52350[(2)] = inst_52221);

(statearr_52270_52350[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (43))){
var inst_52214 = (state_52238[(21)]);
var inst_52224 = (state_52238[(2)]);
var inst_52225 = cljs.core.not_empty.call(null,inst_52214);
var state_52238__$1 = (function (){var statearr_52271 = state_52238;
(statearr_52271[(27)] = inst_52224);

return statearr_52271;
})();
if(cljs.core.truth_(inst_52225)){
var statearr_52272_52351 = state_52238__$1;
(statearr_52272_52351[(1)] = (44));

} else {
var statearr_52273_52352 = state_52238__$1;
(statearr_52273_52352[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (29))){
var inst_52152 = (state_52238[(19)]);
var inst_52192 = (state_52238[(16)]);
var inst_52158 = (state_52238[(26)]);
var inst_52160 = (state_52238[(23)]);
var inst_52155 = (state_52238[(24)]);
var inst_52156 = (state_52238[(25)]);
var inst_52188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52191 = (function (){var all_files = inst_52152;
var res_SINGLEQUOTE_ = inst_52155;
var res = inst_52156;
var files_not_loaded = inst_52158;
var dependencies_that_loaded = inst_52160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52192,inst_52158,inst_52160,inst_52155,inst_52156,inst_52188,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52190){
var map__52274 = p__52190;
var map__52274__$1 = ((((!((map__52274 == null)))?((((map__52274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52274):map__52274);
var namespace = cljs.core.get.call(null,map__52274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52192,inst_52158,inst_52160,inst_52155,inst_52156,inst_52188,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52192__$1 = cljs.core.group_by.call(null,inst_52191,inst_52158);
var inst_52194 = (inst_52192__$1 == null);
var inst_52195 = cljs.core.not.call(null,inst_52194);
var state_52238__$1 = (function (){var statearr_52276 = state_52238;
(statearr_52276[(16)] = inst_52192__$1);

(statearr_52276[(28)] = inst_52188);

return statearr_52276;
})();
if(inst_52195){
var statearr_52277_52353 = state_52238__$1;
(statearr_52277_52353[(1)] = (32));

} else {
var statearr_52278_52354 = state_52238__$1;
(statearr_52278_52354[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (44))){
var inst_52214 = (state_52238[(21)]);
var inst_52227 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52214);
var inst_52228 = cljs.core.pr_str.call(null,inst_52227);
var inst_52229 = [cljs.core.str("not required: "),cljs.core.str(inst_52228)].join('');
var inst_52230 = figwheel.client.utils.log.call(null,inst_52229);
var state_52238__$1 = state_52238;
var statearr_52279_52355 = state_52238__$1;
(statearr_52279_52355[(2)] = inst_52230);

(statearr_52279_52355[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (6))){
var inst_52133 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52280_52356 = state_52238__$1;
(statearr_52280_52356[(2)] = inst_52133);

(statearr_52280_52356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (28))){
var inst_52158 = (state_52238[(26)]);
var inst_52185 = (state_52238[(2)]);
var inst_52186 = cljs.core.not_empty.call(null,inst_52158);
var state_52238__$1 = (function (){var statearr_52281 = state_52238;
(statearr_52281[(29)] = inst_52185);

return statearr_52281;
})();
if(cljs.core.truth_(inst_52186)){
var statearr_52282_52357 = state_52238__$1;
(statearr_52282_52357[(1)] = (29));

} else {
var statearr_52283_52358 = state_52238__$1;
(statearr_52283_52358[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (25))){
var inst_52156 = (state_52238[(25)]);
var inst_52172 = (state_52238[(2)]);
var inst_52173 = cljs.core.not_empty.call(null,inst_52156);
var state_52238__$1 = (function (){var statearr_52284 = state_52238;
(statearr_52284[(30)] = inst_52172);

return statearr_52284;
})();
if(cljs.core.truth_(inst_52173)){
var statearr_52285_52359 = state_52238__$1;
(statearr_52285_52359[(1)] = (26));

} else {
var statearr_52286_52360 = state_52238__$1;
(statearr_52286_52360[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (34))){
var inst_52207 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
if(cljs.core.truth_(inst_52207)){
var statearr_52287_52361 = state_52238__$1;
(statearr_52287_52361[(1)] = (38));

} else {
var statearr_52288_52362 = state_52238__$1;
(statearr_52288_52362[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (17))){
var state_52238__$1 = state_52238;
var statearr_52289_52363 = state_52238__$1;
(statearr_52289_52363[(2)] = recompile_dependents);

(statearr_52289_52363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (3))){
var state_52238__$1 = state_52238;
var statearr_52290_52364 = state_52238__$1;
(statearr_52290_52364[(2)] = null);

(statearr_52290_52364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (12))){
var inst_52129 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52291_52365 = state_52238__$1;
(statearr_52291_52365[(2)] = inst_52129);

(statearr_52291_52365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (2))){
var inst_52091 = (state_52238[(13)]);
var inst_52098 = cljs.core.seq.call(null,inst_52091);
var inst_52099 = inst_52098;
var inst_52100 = null;
var inst_52101 = (0);
var inst_52102 = (0);
var state_52238__$1 = (function (){var statearr_52292 = state_52238;
(statearr_52292[(7)] = inst_52102);

(statearr_52292[(8)] = inst_52099);

(statearr_52292[(9)] = inst_52101);

(statearr_52292[(10)] = inst_52100);

return statearr_52292;
})();
var statearr_52293_52366 = state_52238__$1;
(statearr_52293_52366[(2)] = null);

(statearr_52293_52366[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (23))){
var inst_52152 = (state_52238[(19)]);
var inst_52158 = (state_52238[(26)]);
var inst_52160 = (state_52238[(23)]);
var inst_52155 = (state_52238[(24)]);
var inst_52156 = (state_52238[(25)]);
var inst_52163 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52165 = (function (){var all_files = inst_52152;
var res_SINGLEQUOTE_ = inst_52155;
var res = inst_52156;
var files_not_loaded = inst_52158;
var dependencies_that_loaded = inst_52160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52158,inst_52160,inst_52155,inst_52156,inst_52163,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52164){
var map__52294 = p__52164;
var map__52294__$1 = ((((!((map__52294 == null)))?((((map__52294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52294):map__52294);
var request_url = cljs.core.get.call(null,map__52294__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52158,inst_52160,inst_52155,inst_52156,inst_52163,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52166 = cljs.core.reverse.call(null,inst_52160);
var inst_52167 = cljs.core.map.call(null,inst_52165,inst_52166);
var inst_52168 = cljs.core.pr_str.call(null,inst_52167);
var inst_52169 = figwheel.client.utils.log.call(null,inst_52168);
var state_52238__$1 = (function (){var statearr_52296 = state_52238;
(statearr_52296[(31)] = inst_52163);

return statearr_52296;
})();
var statearr_52297_52367 = state_52238__$1;
(statearr_52297_52367[(2)] = inst_52169);

(statearr_52297_52367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (35))){
var state_52238__$1 = state_52238;
var statearr_52298_52368 = state_52238__$1;
(statearr_52298_52368[(2)] = true);

(statearr_52298_52368[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (19))){
var inst_52142 = (state_52238[(12)]);
var inst_52148 = figwheel.client.file_reloading.expand_files.call(null,inst_52142);
var state_52238__$1 = state_52238;
var statearr_52299_52369 = state_52238__$1;
(statearr_52299_52369[(2)] = inst_52148);

(statearr_52299_52369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (11))){
var state_52238__$1 = state_52238;
var statearr_52300_52370 = state_52238__$1;
(statearr_52300_52370[(2)] = null);

(statearr_52300_52370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (9))){
var inst_52131 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52301_52371 = state_52238__$1;
(statearr_52301_52371[(2)] = inst_52131);

(statearr_52301_52371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (5))){
var inst_52102 = (state_52238[(7)]);
var inst_52101 = (state_52238[(9)]);
var inst_52104 = (inst_52102 < inst_52101);
var inst_52105 = inst_52104;
var state_52238__$1 = state_52238;
if(cljs.core.truth_(inst_52105)){
var statearr_52302_52372 = state_52238__$1;
(statearr_52302_52372[(1)] = (7));

} else {
var statearr_52303_52373 = state_52238__$1;
(statearr_52303_52373[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (14))){
var inst_52112 = (state_52238[(22)]);
var inst_52121 = cljs.core.first.call(null,inst_52112);
var inst_52122 = figwheel.client.file_reloading.eval_body.call(null,inst_52121,opts);
var inst_52123 = cljs.core.next.call(null,inst_52112);
var inst_52099 = inst_52123;
var inst_52100 = null;
var inst_52101 = (0);
var inst_52102 = (0);
var state_52238__$1 = (function (){var statearr_52304 = state_52238;
(statearr_52304[(7)] = inst_52102);

(statearr_52304[(8)] = inst_52099);

(statearr_52304[(9)] = inst_52101);

(statearr_52304[(32)] = inst_52122);

(statearr_52304[(10)] = inst_52100);

return statearr_52304;
})();
var statearr_52305_52374 = state_52238__$1;
(statearr_52305_52374[(2)] = null);

(statearr_52305_52374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (45))){
var state_52238__$1 = state_52238;
var statearr_52306_52375 = state_52238__$1;
(statearr_52306_52375[(2)] = null);

(statearr_52306_52375[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (26))){
var inst_52152 = (state_52238[(19)]);
var inst_52158 = (state_52238[(26)]);
var inst_52160 = (state_52238[(23)]);
var inst_52155 = (state_52238[(24)]);
var inst_52156 = (state_52238[(25)]);
var inst_52175 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52177 = (function (){var all_files = inst_52152;
var res_SINGLEQUOTE_ = inst_52155;
var res = inst_52156;
var files_not_loaded = inst_52158;
var dependencies_that_loaded = inst_52160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52158,inst_52160,inst_52155,inst_52156,inst_52175,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52176){
var map__52307 = p__52176;
var map__52307__$1 = ((((!((map__52307 == null)))?((((map__52307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52307):map__52307);
var namespace = cljs.core.get.call(null,map__52307__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52158,inst_52160,inst_52155,inst_52156,inst_52175,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52178 = cljs.core.map.call(null,inst_52177,inst_52156);
var inst_52179 = cljs.core.pr_str.call(null,inst_52178);
var inst_52180 = figwheel.client.utils.log.call(null,inst_52179);
var inst_52181 = (function (){var all_files = inst_52152;
var res_SINGLEQUOTE_ = inst_52155;
var res = inst_52156;
var files_not_loaded = inst_52158;
var dependencies_that_loaded = inst_52160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52158,inst_52160,inst_52155,inst_52156,inst_52175,inst_52177,inst_52178,inst_52179,inst_52180,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52152,inst_52158,inst_52160,inst_52155,inst_52156,inst_52175,inst_52177,inst_52178,inst_52179,inst_52180,state_val_52239,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52182 = setTimeout(inst_52181,(10));
var state_52238__$1 = (function (){var statearr_52309 = state_52238;
(statearr_52309[(33)] = inst_52175);

(statearr_52309[(34)] = inst_52180);

return statearr_52309;
})();
var statearr_52310_52376 = state_52238__$1;
(statearr_52310_52376[(2)] = inst_52182);

(statearr_52310_52376[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (16))){
var state_52238__$1 = state_52238;
var statearr_52311_52377 = state_52238__$1;
(statearr_52311_52377[(2)] = reload_dependents);

(statearr_52311_52377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (38))){
var inst_52192 = (state_52238[(16)]);
var inst_52209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52192);
var state_52238__$1 = state_52238;
var statearr_52312_52378 = state_52238__$1;
(statearr_52312_52378[(2)] = inst_52209);

(statearr_52312_52378[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (30))){
var state_52238__$1 = state_52238;
var statearr_52313_52379 = state_52238__$1;
(statearr_52313_52379[(2)] = null);

(statearr_52313_52379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (10))){
var inst_52112 = (state_52238[(22)]);
var inst_52114 = cljs.core.chunked_seq_QMARK_.call(null,inst_52112);
var state_52238__$1 = state_52238;
if(inst_52114){
var statearr_52314_52380 = state_52238__$1;
(statearr_52314_52380[(1)] = (13));

} else {
var statearr_52315_52381 = state_52238__$1;
(statearr_52315_52381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (18))){
var inst_52146 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
if(cljs.core.truth_(inst_52146)){
var statearr_52316_52382 = state_52238__$1;
(statearr_52316_52382[(1)] = (19));

} else {
var statearr_52317_52383 = state_52238__$1;
(statearr_52317_52383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (42))){
var state_52238__$1 = state_52238;
var statearr_52318_52384 = state_52238__$1;
(statearr_52318_52384[(2)] = null);

(statearr_52318_52384[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (37))){
var inst_52204 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52319_52385 = state_52238__$1;
(statearr_52319_52385[(2)] = inst_52204);

(statearr_52319_52385[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (8))){
var inst_52099 = (state_52238[(8)]);
var inst_52112 = (state_52238[(22)]);
var inst_52112__$1 = cljs.core.seq.call(null,inst_52099);
var state_52238__$1 = (function (){var statearr_52320 = state_52238;
(statearr_52320[(22)] = inst_52112__$1);

return statearr_52320;
})();
if(inst_52112__$1){
var statearr_52321_52386 = state_52238__$1;
(statearr_52321_52386[(1)] = (10));

} else {
var statearr_52322_52387 = state_52238__$1;
(statearr_52322_52387[(1)] = (11));

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
});})(c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40568__auto__,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto____0 = (function (){
var statearr_52326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52326[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto__);

(statearr_52326[(1)] = (1));

return statearr_52326;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto____1 = (function (state_52238){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_52238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e52327){if((e52327 instanceof Object)){
var ex__40572__auto__ = e52327;
var statearr_52328_52388 = state_52238;
(statearr_52328_52388[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52389 = state_52238;
state_52238 = G__52389;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto__ = function(state_52238){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto____1.call(this,state_52238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40682__auto__ = (function (){var statearr_52329 = f__40681__auto__.call(null);
(statearr_52329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_52329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__,map__52084,map__52084__$1,opts,before_jsload,on_jsload,reload_dependents,map__52085,map__52085__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40680__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52392,link){
var map__52395 = p__52392;
var map__52395__$1 = ((((!((map__52395 == null)))?((((map__52395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52395):map__52395);
var file = cljs.core.get.call(null,map__52395__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52395,map__52395__$1,file){
return (function (p1__52390_SHARP_,p2__52391_SHARP_){
if(cljs.core._EQ_.call(null,p1__52390_SHARP_,p2__52391_SHARP_)){
return p1__52390_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52395,map__52395__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52401){
var map__52402 = p__52401;
var map__52402__$1 = ((((!((map__52402 == null)))?((((map__52402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52402):map__52402);
var match_length = cljs.core.get.call(null,map__52402__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52402__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52397_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52397_SHARP_);
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
var args52404 = [];
var len__37878__auto___52407 = arguments.length;
var i__37879__auto___52408 = (0);
while(true){
if((i__37879__auto___52408 < len__37878__auto___52407)){
args52404.push((arguments[i__37879__auto___52408]));

var G__52409 = (i__37879__auto___52408 + (1));
i__37879__auto___52408 = G__52409;
continue;
} else {
}
break;
}

var G__52406 = args52404.length;
switch (G__52406) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52404.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52411_SHARP_,p2__52412_SHARP_){
return cljs.core.assoc.call(null,p1__52411_SHARP_,cljs.core.get.call(null,p2__52412_SHARP_,key),p2__52412_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52413){
var map__52416 = p__52413;
var map__52416__$1 = ((((!((map__52416 == null)))?((((map__52416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52416):map__52416);
var f_data = map__52416__$1;
var file = cljs.core.get.call(null,map__52416__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52418,p__52419){
var map__52428 = p__52418;
var map__52428__$1 = ((((!((map__52428 == null)))?((((map__52428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52428):map__52428);
var opts = map__52428__$1;
var on_cssload = cljs.core.get.call(null,map__52428__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52429 = p__52419;
var map__52429__$1 = ((((!((map__52429 == null)))?((((map__52429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52429):map__52429);
var files_msg = map__52429__$1;
var files = cljs.core.get.call(null,map__52429__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52432_52436 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52433_52437 = null;
var count__52434_52438 = (0);
var i__52435_52439 = (0);
while(true){
if((i__52435_52439 < count__52434_52438)){
var f_52440 = cljs.core._nth.call(null,chunk__52433_52437,i__52435_52439);
figwheel.client.file_reloading.reload_css_file.call(null,f_52440);

var G__52441 = seq__52432_52436;
var G__52442 = chunk__52433_52437;
var G__52443 = count__52434_52438;
var G__52444 = (i__52435_52439 + (1));
seq__52432_52436 = G__52441;
chunk__52433_52437 = G__52442;
count__52434_52438 = G__52443;
i__52435_52439 = G__52444;
continue;
} else {
var temp__4657__auto___52445 = cljs.core.seq.call(null,seq__52432_52436);
if(temp__4657__auto___52445){
var seq__52432_52446__$1 = temp__4657__auto___52445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52432_52446__$1)){
var c__37613__auto___52447 = cljs.core.chunk_first.call(null,seq__52432_52446__$1);
var G__52448 = cljs.core.chunk_rest.call(null,seq__52432_52446__$1);
var G__52449 = c__37613__auto___52447;
var G__52450 = cljs.core.count.call(null,c__37613__auto___52447);
var G__52451 = (0);
seq__52432_52436 = G__52448;
chunk__52433_52437 = G__52449;
count__52434_52438 = G__52450;
i__52435_52439 = G__52451;
continue;
} else {
var f_52452 = cljs.core.first.call(null,seq__52432_52446__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52452);

var G__52453 = cljs.core.next.call(null,seq__52432_52446__$1);
var G__52454 = null;
var G__52455 = (0);
var G__52456 = (0);
seq__52432_52436 = G__52453;
chunk__52433_52437 = G__52454;
count__52434_52438 = G__52455;
i__52435_52439 = G__52456;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52428,map__52428__$1,opts,on_cssload,map__52429,map__52429__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52428,map__52428__$1,opts,on_cssload,map__52429,map__52429__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map