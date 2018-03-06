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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51402_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51402_SHARP_));
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
var seq__51407 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51408 = null;
var count__51409 = (0);
var i__51410 = (0);
while(true){
if((i__51410 < count__51409)){
var n = cljs.core._nth.call(null,chunk__51408,i__51410);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51411 = seq__51407;
var G__51412 = chunk__51408;
var G__51413 = count__51409;
var G__51414 = (i__51410 + (1));
seq__51407 = G__51411;
chunk__51408 = G__51412;
count__51409 = G__51413;
i__51410 = G__51414;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51407);
if(temp__4657__auto__){
var seq__51407__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51407__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__51407__$1);
var G__51415 = cljs.core.chunk_rest.call(null,seq__51407__$1);
var G__51416 = c__37613__auto__;
var G__51417 = cljs.core.count.call(null,c__37613__auto__);
var G__51418 = (0);
seq__51407 = G__51415;
chunk__51408 = G__51416;
count__51409 = G__51417;
i__51410 = G__51418;
continue;
} else {
var n = cljs.core.first.call(null,seq__51407__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51419 = cljs.core.next.call(null,seq__51407__$1);
var G__51420 = null;
var G__51421 = (0);
var G__51422 = (0);
seq__51407 = G__51419;
chunk__51408 = G__51420;
count__51409 = G__51421;
i__51410 = G__51422;
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

var seq__51473_51484 = cljs.core.seq.call(null,deps);
var chunk__51474_51485 = null;
var count__51475_51486 = (0);
var i__51476_51487 = (0);
while(true){
if((i__51476_51487 < count__51475_51486)){
var dep_51488 = cljs.core._nth.call(null,chunk__51474_51485,i__51476_51487);
topo_sort_helper_STAR_.call(null,dep_51488,(depth + (1)),state);

var G__51489 = seq__51473_51484;
var G__51490 = chunk__51474_51485;
var G__51491 = count__51475_51486;
var G__51492 = (i__51476_51487 + (1));
seq__51473_51484 = G__51489;
chunk__51474_51485 = G__51490;
count__51475_51486 = G__51491;
i__51476_51487 = G__51492;
continue;
} else {
var temp__4657__auto___51493 = cljs.core.seq.call(null,seq__51473_51484);
if(temp__4657__auto___51493){
var seq__51473_51494__$1 = temp__4657__auto___51493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51473_51494__$1)){
var c__37613__auto___51495 = cljs.core.chunk_first.call(null,seq__51473_51494__$1);
var G__51496 = cljs.core.chunk_rest.call(null,seq__51473_51494__$1);
var G__51497 = c__37613__auto___51495;
var G__51498 = cljs.core.count.call(null,c__37613__auto___51495);
var G__51499 = (0);
seq__51473_51484 = G__51496;
chunk__51474_51485 = G__51497;
count__51475_51486 = G__51498;
i__51476_51487 = G__51499;
continue;
} else {
var dep_51500 = cljs.core.first.call(null,seq__51473_51494__$1);
topo_sort_helper_STAR_.call(null,dep_51500,(depth + (1)),state);

var G__51501 = cljs.core.next.call(null,seq__51473_51494__$1);
var G__51502 = null;
var G__51503 = (0);
var G__51504 = (0);
seq__51473_51484 = G__51501;
chunk__51474_51485 = G__51502;
count__51475_51486 = G__51503;
i__51476_51487 = G__51504;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51477){
var vec__51481 = p__51477;
var seq__51482 = cljs.core.seq.call(null,vec__51481);
var first__51483 = cljs.core.first.call(null,seq__51482);
var seq__51482__$1 = cljs.core.next.call(null,seq__51482);
var x = first__51483;
var xs = seq__51482__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51481,seq__51482,first__51483,seq__51482__$1,x,xs,get_deps__$1){
return (function (p1__51423_SHARP_){
return clojure.set.difference.call(null,p1__51423_SHARP_,x);
});})(vec__51481,seq__51482,first__51483,seq__51482__$1,x,xs,get_deps__$1))
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
var seq__51517 = cljs.core.seq.call(null,provides);
var chunk__51518 = null;
var count__51519 = (0);
var i__51520 = (0);
while(true){
if((i__51520 < count__51519)){
var prov = cljs.core._nth.call(null,chunk__51518,i__51520);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51521_51529 = cljs.core.seq.call(null,requires);
var chunk__51522_51530 = null;
var count__51523_51531 = (0);
var i__51524_51532 = (0);
while(true){
if((i__51524_51532 < count__51523_51531)){
var req_51533 = cljs.core._nth.call(null,chunk__51522_51530,i__51524_51532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51533,prov);

var G__51534 = seq__51521_51529;
var G__51535 = chunk__51522_51530;
var G__51536 = count__51523_51531;
var G__51537 = (i__51524_51532 + (1));
seq__51521_51529 = G__51534;
chunk__51522_51530 = G__51535;
count__51523_51531 = G__51536;
i__51524_51532 = G__51537;
continue;
} else {
var temp__4657__auto___51538 = cljs.core.seq.call(null,seq__51521_51529);
if(temp__4657__auto___51538){
var seq__51521_51539__$1 = temp__4657__auto___51538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51521_51539__$1)){
var c__37613__auto___51540 = cljs.core.chunk_first.call(null,seq__51521_51539__$1);
var G__51541 = cljs.core.chunk_rest.call(null,seq__51521_51539__$1);
var G__51542 = c__37613__auto___51540;
var G__51543 = cljs.core.count.call(null,c__37613__auto___51540);
var G__51544 = (0);
seq__51521_51529 = G__51541;
chunk__51522_51530 = G__51542;
count__51523_51531 = G__51543;
i__51524_51532 = G__51544;
continue;
} else {
var req_51545 = cljs.core.first.call(null,seq__51521_51539__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51545,prov);

var G__51546 = cljs.core.next.call(null,seq__51521_51539__$1);
var G__51547 = null;
var G__51548 = (0);
var G__51549 = (0);
seq__51521_51529 = G__51546;
chunk__51522_51530 = G__51547;
count__51523_51531 = G__51548;
i__51524_51532 = G__51549;
continue;
}
} else {
}
}
break;
}

var G__51550 = seq__51517;
var G__51551 = chunk__51518;
var G__51552 = count__51519;
var G__51553 = (i__51520 + (1));
seq__51517 = G__51550;
chunk__51518 = G__51551;
count__51519 = G__51552;
i__51520 = G__51553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51517);
if(temp__4657__auto__){
var seq__51517__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51517__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__51517__$1);
var G__51554 = cljs.core.chunk_rest.call(null,seq__51517__$1);
var G__51555 = c__37613__auto__;
var G__51556 = cljs.core.count.call(null,c__37613__auto__);
var G__51557 = (0);
seq__51517 = G__51554;
chunk__51518 = G__51555;
count__51519 = G__51556;
i__51520 = G__51557;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51517__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51525_51558 = cljs.core.seq.call(null,requires);
var chunk__51526_51559 = null;
var count__51527_51560 = (0);
var i__51528_51561 = (0);
while(true){
if((i__51528_51561 < count__51527_51560)){
var req_51562 = cljs.core._nth.call(null,chunk__51526_51559,i__51528_51561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51562,prov);

var G__51563 = seq__51525_51558;
var G__51564 = chunk__51526_51559;
var G__51565 = count__51527_51560;
var G__51566 = (i__51528_51561 + (1));
seq__51525_51558 = G__51563;
chunk__51526_51559 = G__51564;
count__51527_51560 = G__51565;
i__51528_51561 = G__51566;
continue;
} else {
var temp__4657__auto___51567__$1 = cljs.core.seq.call(null,seq__51525_51558);
if(temp__4657__auto___51567__$1){
var seq__51525_51568__$1 = temp__4657__auto___51567__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51525_51568__$1)){
var c__37613__auto___51569 = cljs.core.chunk_first.call(null,seq__51525_51568__$1);
var G__51570 = cljs.core.chunk_rest.call(null,seq__51525_51568__$1);
var G__51571 = c__37613__auto___51569;
var G__51572 = cljs.core.count.call(null,c__37613__auto___51569);
var G__51573 = (0);
seq__51525_51558 = G__51570;
chunk__51526_51559 = G__51571;
count__51527_51560 = G__51572;
i__51528_51561 = G__51573;
continue;
} else {
var req_51574 = cljs.core.first.call(null,seq__51525_51568__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51574,prov);

var G__51575 = cljs.core.next.call(null,seq__51525_51568__$1);
var G__51576 = null;
var G__51577 = (0);
var G__51578 = (0);
seq__51525_51558 = G__51575;
chunk__51526_51559 = G__51576;
count__51527_51560 = G__51577;
i__51528_51561 = G__51578;
continue;
}
} else {
}
}
break;
}

var G__51579 = cljs.core.next.call(null,seq__51517__$1);
var G__51580 = null;
var G__51581 = (0);
var G__51582 = (0);
seq__51517 = G__51579;
chunk__51518 = G__51580;
count__51519 = G__51581;
i__51520 = G__51582;
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
var seq__51587_51591 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51588_51592 = null;
var count__51589_51593 = (0);
var i__51590_51594 = (0);
while(true){
if((i__51590_51594 < count__51589_51593)){
var ns_51595 = cljs.core._nth.call(null,chunk__51588_51592,i__51590_51594);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51595);

var G__51596 = seq__51587_51591;
var G__51597 = chunk__51588_51592;
var G__51598 = count__51589_51593;
var G__51599 = (i__51590_51594 + (1));
seq__51587_51591 = G__51596;
chunk__51588_51592 = G__51597;
count__51589_51593 = G__51598;
i__51590_51594 = G__51599;
continue;
} else {
var temp__4657__auto___51600 = cljs.core.seq.call(null,seq__51587_51591);
if(temp__4657__auto___51600){
var seq__51587_51601__$1 = temp__4657__auto___51600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51587_51601__$1)){
var c__37613__auto___51602 = cljs.core.chunk_first.call(null,seq__51587_51601__$1);
var G__51603 = cljs.core.chunk_rest.call(null,seq__51587_51601__$1);
var G__51604 = c__37613__auto___51602;
var G__51605 = cljs.core.count.call(null,c__37613__auto___51602);
var G__51606 = (0);
seq__51587_51591 = G__51603;
chunk__51588_51592 = G__51604;
count__51589_51593 = G__51605;
i__51590_51594 = G__51606;
continue;
} else {
var ns_51607 = cljs.core.first.call(null,seq__51587_51601__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51607);

var G__51608 = cljs.core.next.call(null,seq__51587_51601__$1);
var G__51609 = null;
var G__51610 = (0);
var G__51611 = (0);
seq__51587_51591 = G__51608;
chunk__51588_51592 = G__51609;
count__51589_51593 = G__51610;
i__51590_51594 = G__51611;
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
var G__51612__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51613__i = 0, G__51613__a = new Array(arguments.length -  0);
while (G__51613__i < G__51613__a.length) {G__51613__a[G__51613__i] = arguments[G__51613__i + 0]; ++G__51613__i;}
  args = new cljs.core.IndexedSeq(G__51613__a,0);
} 
return G__51612__delegate.call(this,args);};
G__51612.cljs$lang$maxFixedArity = 0;
G__51612.cljs$lang$applyTo = (function (arglist__51614){
var args = cljs.core.seq(arglist__51614);
return G__51612__delegate(args);
});
G__51612.cljs$core$IFn$_invoke$arity$variadic = G__51612__delegate;
return G__51612;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51616 = cljs.core._EQ_;
var expr__51617 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51616.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51617))){
var path_parts = ((function (pred__51616,expr__51617){
return (function (p1__51615_SHARP_){
return clojure.string.split.call(null,p1__51615_SHARP_,/[\/\\]/);
});})(pred__51616,expr__51617))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51616,expr__51617){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51619){if((e51619 instanceof Error)){
var e = e51619;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51619;

}
}})());
});
;})(path_parts,sep,root,pred__51616,expr__51617))
} else {
if(cljs.core.truth_(pred__51616.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51617))){
return ((function (pred__51616,expr__51617){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51616,expr__51617){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51616,expr__51617))
);

return deferred.addErrback(((function (deferred,pred__51616,expr__51617){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51616,expr__51617))
);
});
;})(pred__51616,expr__51617))
} else {
return ((function (pred__51616,expr__51617){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51616,expr__51617))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51620,callback){
var map__51623 = p__51620;
var map__51623__$1 = ((((!((map__51623 == null)))?((((map__51623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51623):map__51623);
var file_msg = map__51623__$1;
var request_url = cljs.core.get.call(null,map__51623__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51623,map__51623__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51623,map__51623__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__){
return (function (state_51647){
var state_val_51648 = (state_51647[(1)]);
if((state_val_51648 === (7))){
var inst_51643 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
var statearr_51649_51669 = state_51647__$1;
(statearr_51649_51669[(2)] = inst_51643);

(statearr_51649_51669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (1))){
var state_51647__$1 = state_51647;
var statearr_51650_51670 = state_51647__$1;
(statearr_51650_51670[(2)] = null);

(statearr_51650_51670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (4))){
var inst_51627 = (state_51647[(7)]);
var inst_51627__$1 = (state_51647[(2)]);
var state_51647__$1 = (function (){var statearr_51651 = state_51647;
(statearr_51651[(7)] = inst_51627__$1);

return statearr_51651;
})();
if(cljs.core.truth_(inst_51627__$1)){
var statearr_51652_51671 = state_51647__$1;
(statearr_51652_51671[(1)] = (5));

} else {
var statearr_51653_51672 = state_51647__$1;
(statearr_51653_51672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (6))){
var state_51647__$1 = state_51647;
var statearr_51654_51673 = state_51647__$1;
(statearr_51654_51673[(2)] = null);

(statearr_51654_51673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (3))){
var inst_51645 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51647__$1,inst_51645);
} else {
if((state_val_51648 === (2))){
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51647__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51648 === (11))){
var inst_51639 = (state_51647[(2)]);
var state_51647__$1 = (function (){var statearr_51655 = state_51647;
(statearr_51655[(8)] = inst_51639);

return statearr_51655;
})();
var statearr_51656_51674 = state_51647__$1;
(statearr_51656_51674[(2)] = null);

(statearr_51656_51674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (9))){
var inst_51631 = (state_51647[(9)]);
var inst_51633 = (state_51647[(10)]);
var inst_51635 = inst_51633.call(null,inst_51631);
var state_51647__$1 = state_51647;
var statearr_51657_51675 = state_51647__$1;
(statearr_51657_51675[(2)] = inst_51635);

(statearr_51657_51675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (5))){
var inst_51627 = (state_51647[(7)]);
var inst_51629 = figwheel.client.file_reloading.blocking_load.call(null,inst_51627);
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51647__$1,(8),inst_51629);
} else {
if((state_val_51648 === (10))){
var inst_51631 = (state_51647[(9)]);
var inst_51637 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51631);
var state_51647__$1 = state_51647;
var statearr_51658_51676 = state_51647__$1;
(statearr_51658_51676[(2)] = inst_51637);

(statearr_51658_51676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (8))){
var inst_51627 = (state_51647[(7)]);
var inst_51633 = (state_51647[(10)]);
var inst_51631 = (state_51647[(2)]);
var inst_51632 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51633__$1 = cljs.core.get.call(null,inst_51632,inst_51627);
var state_51647__$1 = (function (){var statearr_51659 = state_51647;
(statearr_51659[(9)] = inst_51631);

(statearr_51659[(10)] = inst_51633__$1);

return statearr_51659;
})();
if(cljs.core.truth_(inst_51633__$1)){
var statearr_51660_51677 = state_51647__$1;
(statearr_51660_51677[(1)] = (9));

} else {
var statearr_51661_51678 = state_51647__$1;
(statearr_51661_51678[(1)] = (10));

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
});})(c__40679__auto__))
;
return ((function (switch__40567__auto__,c__40679__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40568__auto__ = null;
var figwheel$client$file_reloading$state_machine__40568__auto____0 = (function (){
var statearr_51665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51665[(0)] = figwheel$client$file_reloading$state_machine__40568__auto__);

(statearr_51665[(1)] = (1));

return statearr_51665;
});
var figwheel$client$file_reloading$state_machine__40568__auto____1 = (function (state_51647){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_51647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e51666){if((e51666 instanceof Object)){
var ex__40571__auto__ = e51666;
var statearr_51667_51679 = state_51647;
(statearr_51667_51679[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51680 = state_51647;
state_51647 = G__51680;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40568__auto__ = function(state_51647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40568__auto____1.call(this,state_51647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40568__auto____0;
figwheel$client$file_reloading$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40568__auto____1;
return figwheel$client$file_reloading$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__))
})();
var state__40681__auto__ = (function (){var statearr_51668 = f__40680__auto__.call(null);
(statearr_51668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_51668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__))
);

return c__40679__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51681,callback){
var map__51684 = p__51681;
var map__51684__$1 = ((((!((map__51684 == null)))?((((map__51684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51684):map__51684);
var file_msg = map__51684__$1;
var namespace = cljs.core.get.call(null,map__51684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51684,map__51684__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51684,map__51684__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51686){
var map__51689 = p__51686;
var map__51689__$1 = ((((!((map__51689 == null)))?((((map__51689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51689):map__51689);
var file_msg = map__51689__$1;
var namespace = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51691,callback){
var map__51694 = p__51691;
var map__51694__$1 = ((((!((map__51694 == null)))?((((map__51694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51694):map__51694);
var file_msg = map__51694__$1;
var request_url = cljs.core.get.call(null,map__51694__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40679__auto___51798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___51798,out){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___51798,out){
return (function (state_51780){
var state_val_51781 = (state_51780[(1)]);
if((state_val_51781 === (1))){
var inst_51754 = cljs.core.seq.call(null,files);
var inst_51755 = cljs.core.first.call(null,inst_51754);
var inst_51756 = cljs.core.next.call(null,inst_51754);
var inst_51757 = files;
var state_51780__$1 = (function (){var statearr_51782 = state_51780;
(statearr_51782[(7)] = inst_51756);

(statearr_51782[(8)] = inst_51757);

(statearr_51782[(9)] = inst_51755);

return statearr_51782;
})();
var statearr_51783_51799 = state_51780__$1;
(statearr_51783_51799[(2)] = null);

(statearr_51783_51799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (2))){
var inst_51757 = (state_51780[(8)]);
var inst_51763 = (state_51780[(10)]);
var inst_51762 = cljs.core.seq.call(null,inst_51757);
var inst_51763__$1 = cljs.core.first.call(null,inst_51762);
var inst_51764 = cljs.core.next.call(null,inst_51762);
var inst_51765 = (inst_51763__$1 == null);
var inst_51766 = cljs.core.not.call(null,inst_51765);
var state_51780__$1 = (function (){var statearr_51784 = state_51780;
(statearr_51784[(11)] = inst_51764);

(statearr_51784[(10)] = inst_51763__$1);

return statearr_51784;
})();
if(inst_51766){
var statearr_51785_51800 = state_51780__$1;
(statearr_51785_51800[(1)] = (4));

} else {
var statearr_51786_51801 = state_51780__$1;
(statearr_51786_51801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (3))){
var inst_51778 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51780__$1,inst_51778);
} else {
if((state_val_51781 === (4))){
var inst_51763 = (state_51780[(10)]);
var inst_51768 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51763);
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51780__$1,(7),inst_51768);
} else {
if((state_val_51781 === (5))){
var inst_51774 = cljs.core.async.close_BANG_.call(null,out);
var state_51780__$1 = state_51780;
var statearr_51787_51802 = state_51780__$1;
(statearr_51787_51802[(2)] = inst_51774);

(statearr_51787_51802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (6))){
var inst_51776 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
var statearr_51788_51803 = state_51780__$1;
(statearr_51788_51803[(2)] = inst_51776);

(statearr_51788_51803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (7))){
var inst_51764 = (state_51780[(11)]);
var inst_51770 = (state_51780[(2)]);
var inst_51771 = cljs.core.async.put_BANG_.call(null,out,inst_51770);
var inst_51757 = inst_51764;
var state_51780__$1 = (function (){var statearr_51789 = state_51780;
(statearr_51789[(8)] = inst_51757);

(statearr_51789[(12)] = inst_51771);

return statearr_51789;
})();
var statearr_51790_51804 = state_51780__$1;
(statearr_51790_51804[(2)] = null);

(statearr_51790_51804[(1)] = (2));


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
});})(c__40679__auto___51798,out))
;
return ((function (switch__40567__auto__,c__40679__auto___51798,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto____0 = (function (){
var statearr_51794 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51794[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto__);

(statearr_51794[(1)] = (1));

return statearr_51794;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto____1 = (function (state_51780){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_51780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e51795){if((e51795 instanceof Object)){
var ex__40571__auto__ = e51795;
var statearr_51796_51805 = state_51780;
(statearr_51796_51805[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51806 = state_51780;
state_51780 = G__51806;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto__ = function(state_51780){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto____1.call(this,state_51780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___51798,out))
})();
var state__40681__auto__ = (function (){var statearr_51797 = f__40680__auto__.call(null);
(statearr_51797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___51798);

return statearr_51797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___51798,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51807,opts){
var map__51811 = p__51807;
var map__51811__$1 = ((((!((map__51811 == null)))?((((map__51811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51811):map__51811);
var eval_body__$1 = cljs.core.get.call(null,map__51811__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e51813){var e = e51813;
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
return (function (p1__51814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51814_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__51823){
var vec__51824 = p__51823;
var k = cljs.core.nth.call(null,vec__51824,(0),null);
var v = cljs.core.nth.call(null,vec__51824,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51827){
var vec__51828 = p__51827;
var k = cljs.core.nth.call(null,vec__51828,(0),null);
var v = cljs.core.nth.call(null,vec__51828,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51834,p__51835){
var map__52082 = p__51834;
var map__52082__$1 = ((((!((map__52082 == null)))?((((map__52082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52082):map__52082);
var opts = map__52082__$1;
var before_jsload = cljs.core.get.call(null,map__52082__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52082__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52082__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52083 = p__51835;
var map__52083__$1 = ((((!((map__52083 == null)))?((((map__52083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52083):map__52083);
var msg = map__52083__$1;
var files = cljs.core.get.call(null,map__52083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52083__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52083__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52236){
var state_val_52237 = (state_52236[(1)]);
if((state_val_52237 === (7))){
var inst_52098 = (state_52236[(7)]);
var inst_52099 = (state_52236[(8)]);
var inst_52097 = (state_52236[(9)]);
var inst_52100 = (state_52236[(10)]);
var inst_52105 = cljs.core._nth.call(null,inst_52098,inst_52100);
var inst_52106 = figwheel.client.file_reloading.eval_body.call(null,inst_52105,opts);
var inst_52107 = (inst_52100 + (1));
var tmp52238 = inst_52098;
var tmp52239 = inst_52099;
var tmp52240 = inst_52097;
var inst_52097__$1 = tmp52240;
var inst_52098__$1 = tmp52238;
var inst_52099__$1 = tmp52239;
var inst_52100__$1 = inst_52107;
var state_52236__$1 = (function (){var statearr_52241 = state_52236;
(statearr_52241[(11)] = inst_52106);

(statearr_52241[(7)] = inst_52098__$1);

(statearr_52241[(8)] = inst_52099__$1);

(statearr_52241[(9)] = inst_52097__$1);

(statearr_52241[(10)] = inst_52100__$1);

return statearr_52241;
})();
var statearr_52242_52328 = state_52236__$1;
(statearr_52242_52328[(2)] = null);

(statearr_52242_52328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (20))){
var inst_52140 = (state_52236[(12)]);
var inst_52148 = figwheel.client.file_reloading.sort_files.call(null,inst_52140);
var state_52236__$1 = state_52236;
var statearr_52243_52329 = state_52236__$1;
(statearr_52243_52329[(2)] = inst_52148);

(statearr_52243_52329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (27))){
var state_52236__$1 = state_52236;
var statearr_52244_52330 = state_52236__$1;
(statearr_52244_52330[(2)] = null);

(statearr_52244_52330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (1))){
var inst_52089 = (state_52236[(13)]);
var inst_52086 = before_jsload.call(null,files);
var inst_52087 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52088 = (function (){return ((function (inst_52089,inst_52086,inst_52087,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51831_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51831_SHARP_);
});
;})(inst_52089,inst_52086,inst_52087,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52089__$1 = cljs.core.filter.call(null,inst_52088,files);
var inst_52090 = cljs.core.not_empty.call(null,inst_52089__$1);
var state_52236__$1 = (function (){var statearr_52245 = state_52236;
(statearr_52245[(14)] = inst_52087);

(statearr_52245[(15)] = inst_52086);

(statearr_52245[(13)] = inst_52089__$1);

return statearr_52245;
})();
if(cljs.core.truth_(inst_52090)){
var statearr_52246_52331 = state_52236__$1;
(statearr_52246_52331[(1)] = (2));

} else {
var statearr_52247_52332 = state_52236__$1;
(statearr_52247_52332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (24))){
var state_52236__$1 = state_52236;
var statearr_52248_52333 = state_52236__$1;
(statearr_52248_52333[(2)] = null);

(statearr_52248_52333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (39))){
var inst_52190 = (state_52236[(16)]);
var state_52236__$1 = state_52236;
var statearr_52249_52334 = state_52236__$1;
(statearr_52249_52334[(2)] = inst_52190);

(statearr_52249_52334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (46))){
var inst_52231 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52250_52335 = state_52236__$1;
(statearr_52250_52335[(2)] = inst_52231);

(statearr_52250_52335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (4))){
var inst_52134 = (state_52236[(2)]);
var inst_52135 = cljs.core.List.EMPTY;
var inst_52136 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52135);
var inst_52137 = (function (){return ((function (inst_52134,inst_52135,inst_52136,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51832_SHARP_){
var and__36790__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51832_SHARP_);
if(cljs.core.truth_(and__36790__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51832_SHARP_));
} else {
return and__36790__auto__;
}
});
;})(inst_52134,inst_52135,inst_52136,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52138 = cljs.core.filter.call(null,inst_52137,files);
var inst_52139 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52140 = cljs.core.concat.call(null,inst_52138,inst_52139);
var state_52236__$1 = (function (){var statearr_52251 = state_52236;
(statearr_52251[(12)] = inst_52140);

(statearr_52251[(17)] = inst_52134);

(statearr_52251[(18)] = inst_52136);

return statearr_52251;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52252_52336 = state_52236__$1;
(statearr_52252_52336[(1)] = (16));

} else {
var statearr_52253_52337 = state_52236__$1;
(statearr_52253_52337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (15))){
var inst_52124 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52254_52338 = state_52236__$1;
(statearr_52254_52338[(2)] = inst_52124);

(statearr_52254_52338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (21))){
var inst_52150 = (state_52236[(19)]);
var inst_52150__$1 = (state_52236[(2)]);
var inst_52151 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52150__$1);
var state_52236__$1 = (function (){var statearr_52255 = state_52236;
(statearr_52255[(19)] = inst_52150__$1);

return statearr_52255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52236__$1,(22),inst_52151);
} else {
if((state_val_52237 === (31))){
var inst_52234 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52236__$1,inst_52234);
} else {
if((state_val_52237 === (32))){
var inst_52190 = (state_52236[(16)]);
var inst_52195 = inst_52190.cljs$lang$protocol_mask$partition0$;
var inst_52196 = (inst_52195 & (64));
var inst_52197 = inst_52190.cljs$core$ISeq$;
var inst_52198 = (inst_52196) || (inst_52197);
var state_52236__$1 = state_52236;
if(cljs.core.truth_(inst_52198)){
var statearr_52256_52339 = state_52236__$1;
(statearr_52256_52339[(1)] = (35));

} else {
var statearr_52257_52340 = state_52236__$1;
(statearr_52257_52340[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (40))){
var inst_52211 = (state_52236[(20)]);
var inst_52210 = (state_52236[(2)]);
var inst_52211__$1 = cljs.core.get.call(null,inst_52210,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52212 = cljs.core.get.call(null,inst_52210,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52213 = cljs.core.not_empty.call(null,inst_52211__$1);
var state_52236__$1 = (function (){var statearr_52258 = state_52236;
(statearr_52258[(20)] = inst_52211__$1);

(statearr_52258[(21)] = inst_52212);

return statearr_52258;
})();
if(cljs.core.truth_(inst_52213)){
var statearr_52259_52341 = state_52236__$1;
(statearr_52259_52341[(1)] = (41));

} else {
var statearr_52260_52342 = state_52236__$1;
(statearr_52260_52342[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (33))){
var state_52236__$1 = state_52236;
var statearr_52261_52343 = state_52236__$1;
(statearr_52261_52343[(2)] = false);

(statearr_52261_52343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (13))){
var inst_52110 = (state_52236[(22)]);
var inst_52114 = cljs.core.chunk_first.call(null,inst_52110);
var inst_52115 = cljs.core.chunk_rest.call(null,inst_52110);
var inst_52116 = cljs.core.count.call(null,inst_52114);
var inst_52097 = inst_52115;
var inst_52098 = inst_52114;
var inst_52099 = inst_52116;
var inst_52100 = (0);
var state_52236__$1 = (function (){var statearr_52262 = state_52236;
(statearr_52262[(7)] = inst_52098);

(statearr_52262[(8)] = inst_52099);

(statearr_52262[(9)] = inst_52097);

(statearr_52262[(10)] = inst_52100);

return statearr_52262;
})();
var statearr_52263_52344 = state_52236__$1;
(statearr_52263_52344[(2)] = null);

(statearr_52263_52344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (22))){
var inst_52150 = (state_52236[(19)]);
var inst_52158 = (state_52236[(23)]);
var inst_52153 = (state_52236[(24)]);
var inst_52154 = (state_52236[(25)]);
var inst_52153__$1 = (state_52236[(2)]);
var inst_52154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52153__$1);
var inst_52155 = (function (){var all_files = inst_52150;
var res_SINGLEQUOTE_ = inst_52153__$1;
var res = inst_52154__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52150,inst_52158,inst_52153,inst_52154,inst_52153__$1,inst_52154__$1,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51833_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51833_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52150,inst_52158,inst_52153,inst_52154,inst_52153__$1,inst_52154__$1,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52156 = cljs.core.filter.call(null,inst_52155,inst_52153__$1);
var inst_52157 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52158__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52157);
var inst_52159 = cljs.core.not_empty.call(null,inst_52158__$1);
var state_52236__$1 = (function (){var statearr_52264 = state_52236;
(statearr_52264[(23)] = inst_52158__$1);

(statearr_52264[(24)] = inst_52153__$1);

(statearr_52264[(25)] = inst_52154__$1);

(statearr_52264[(26)] = inst_52156);

return statearr_52264;
})();
if(cljs.core.truth_(inst_52159)){
var statearr_52265_52345 = state_52236__$1;
(statearr_52265_52345[(1)] = (23));

} else {
var statearr_52266_52346 = state_52236__$1;
(statearr_52266_52346[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (36))){
var state_52236__$1 = state_52236;
var statearr_52267_52347 = state_52236__$1;
(statearr_52267_52347[(2)] = false);

(statearr_52267_52347[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (41))){
var inst_52211 = (state_52236[(20)]);
var inst_52215 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52216 = cljs.core.map.call(null,inst_52215,inst_52211);
var inst_52217 = cljs.core.pr_str.call(null,inst_52216);
var inst_52218 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52217)].join('');
var inst_52219 = figwheel.client.utils.log.call(null,inst_52218);
var state_52236__$1 = state_52236;
var statearr_52268_52348 = state_52236__$1;
(statearr_52268_52348[(2)] = inst_52219);

(statearr_52268_52348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (43))){
var inst_52212 = (state_52236[(21)]);
var inst_52222 = (state_52236[(2)]);
var inst_52223 = cljs.core.not_empty.call(null,inst_52212);
var state_52236__$1 = (function (){var statearr_52269 = state_52236;
(statearr_52269[(27)] = inst_52222);

return statearr_52269;
})();
if(cljs.core.truth_(inst_52223)){
var statearr_52270_52349 = state_52236__$1;
(statearr_52270_52349[(1)] = (44));

} else {
var statearr_52271_52350 = state_52236__$1;
(statearr_52271_52350[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (29))){
var inst_52150 = (state_52236[(19)]);
var inst_52158 = (state_52236[(23)]);
var inst_52153 = (state_52236[(24)]);
var inst_52154 = (state_52236[(25)]);
var inst_52190 = (state_52236[(16)]);
var inst_52156 = (state_52236[(26)]);
var inst_52186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52189 = (function (){var all_files = inst_52150;
var res_SINGLEQUOTE_ = inst_52153;
var res = inst_52154;
var files_not_loaded = inst_52156;
var dependencies_that_loaded = inst_52158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52190,inst_52156,inst_52186,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52188){
var map__52272 = p__52188;
var map__52272__$1 = ((((!((map__52272 == null)))?((((map__52272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52272):map__52272);
var namespace = cljs.core.get.call(null,map__52272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52190,inst_52156,inst_52186,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52190__$1 = cljs.core.group_by.call(null,inst_52189,inst_52156);
var inst_52192 = (inst_52190__$1 == null);
var inst_52193 = cljs.core.not.call(null,inst_52192);
var state_52236__$1 = (function (){var statearr_52274 = state_52236;
(statearr_52274[(28)] = inst_52186);

(statearr_52274[(16)] = inst_52190__$1);

return statearr_52274;
})();
if(inst_52193){
var statearr_52275_52351 = state_52236__$1;
(statearr_52275_52351[(1)] = (32));

} else {
var statearr_52276_52352 = state_52236__$1;
(statearr_52276_52352[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (44))){
var inst_52212 = (state_52236[(21)]);
var inst_52225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52212);
var inst_52226 = cljs.core.pr_str.call(null,inst_52225);
var inst_52227 = [cljs.core.str("not required: "),cljs.core.str(inst_52226)].join('');
var inst_52228 = figwheel.client.utils.log.call(null,inst_52227);
var state_52236__$1 = state_52236;
var statearr_52277_52353 = state_52236__$1;
(statearr_52277_52353[(2)] = inst_52228);

(statearr_52277_52353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (6))){
var inst_52131 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52278_52354 = state_52236__$1;
(statearr_52278_52354[(2)] = inst_52131);

(statearr_52278_52354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (28))){
var inst_52156 = (state_52236[(26)]);
var inst_52183 = (state_52236[(2)]);
var inst_52184 = cljs.core.not_empty.call(null,inst_52156);
var state_52236__$1 = (function (){var statearr_52279 = state_52236;
(statearr_52279[(29)] = inst_52183);

return statearr_52279;
})();
if(cljs.core.truth_(inst_52184)){
var statearr_52280_52355 = state_52236__$1;
(statearr_52280_52355[(1)] = (29));

} else {
var statearr_52281_52356 = state_52236__$1;
(statearr_52281_52356[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (25))){
var inst_52154 = (state_52236[(25)]);
var inst_52170 = (state_52236[(2)]);
var inst_52171 = cljs.core.not_empty.call(null,inst_52154);
var state_52236__$1 = (function (){var statearr_52282 = state_52236;
(statearr_52282[(30)] = inst_52170);

return statearr_52282;
})();
if(cljs.core.truth_(inst_52171)){
var statearr_52283_52357 = state_52236__$1;
(statearr_52283_52357[(1)] = (26));

} else {
var statearr_52284_52358 = state_52236__$1;
(statearr_52284_52358[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (34))){
var inst_52205 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
if(cljs.core.truth_(inst_52205)){
var statearr_52285_52359 = state_52236__$1;
(statearr_52285_52359[(1)] = (38));

} else {
var statearr_52286_52360 = state_52236__$1;
(statearr_52286_52360[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (17))){
var state_52236__$1 = state_52236;
var statearr_52287_52361 = state_52236__$1;
(statearr_52287_52361[(2)] = recompile_dependents);

(statearr_52287_52361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (3))){
var state_52236__$1 = state_52236;
var statearr_52288_52362 = state_52236__$1;
(statearr_52288_52362[(2)] = null);

(statearr_52288_52362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (12))){
var inst_52127 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52289_52363 = state_52236__$1;
(statearr_52289_52363[(2)] = inst_52127);

(statearr_52289_52363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (2))){
var inst_52089 = (state_52236[(13)]);
var inst_52096 = cljs.core.seq.call(null,inst_52089);
var inst_52097 = inst_52096;
var inst_52098 = null;
var inst_52099 = (0);
var inst_52100 = (0);
var state_52236__$1 = (function (){var statearr_52290 = state_52236;
(statearr_52290[(7)] = inst_52098);

(statearr_52290[(8)] = inst_52099);

(statearr_52290[(9)] = inst_52097);

(statearr_52290[(10)] = inst_52100);

return statearr_52290;
})();
var statearr_52291_52364 = state_52236__$1;
(statearr_52291_52364[(2)] = null);

(statearr_52291_52364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (23))){
var inst_52150 = (state_52236[(19)]);
var inst_52158 = (state_52236[(23)]);
var inst_52153 = (state_52236[(24)]);
var inst_52154 = (state_52236[(25)]);
var inst_52156 = (state_52236[(26)]);
var inst_52161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52163 = (function (){var all_files = inst_52150;
var res_SINGLEQUOTE_ = inst_52153;
var res = inst_52154;
var files_not_loaded = inst_52156;
var dependencies_that_loaded = inst_52158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52156,inst_52161,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52162){
var map__52292 = p__52162;
var map__52292__$1 = ((((!((map__52292 == null)))?((((map__52292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52292):map__52292);
var request_url = cljs.core.get.call(null,map__52292__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52156,inst_52161,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52164 = cljs.core.reverse.call(null,inst_52158);
var inst_52165 = cljs.core.map.call(null,inst_52163,inst_52164);
var inst_52166 = cljs.core.pr_str.call(null,inst_52165);
var inst_52167 = figwheel.client.utils.log.call(null,inst_52166);
var state_52236__$1 = (function (){var statearr_52294 = state_52236;
(statearr_52294[(31)] = inst_52161);

return statearr_52294;
})();
var statearr_52295_52365 = state_52236__$1;
(statearr_52295_52365[(2)] = inst_52167);

(statearr_52295_52365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (35))){
var state_52236__$1 = state_52236;
var statearr_52296_52366 = state_52236__$1;
(statearr_52296_52366[(2)] = true);

(statearr_52296_52366[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (19))){
var inst_52140 = (state_52236[(12)]);
var inst_52146 = figwheel.client.file_reloading.expand_files.call(null,inst_52140);
var state_52236__$1 = state_52236;
var statearr_52297_52367 = state_52236__$1;
(statearr_52297_52367[(2)] = inst_52146);

(statearr_52297_52367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (11))){
var state_52236__$1 = state_52236;
var statearr_52298_52368 = state_52236__$1;
(statearr_52298_52368[(2)] = null);

(statearr_52298_52368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (9))){
var inst_52129 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52299_52369 = state_52236__$1;
(statearr_52299_52369[(2)] = inst_52129);

(statearr_52299_52369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (5))){
var inst_52099 = (state_52236[(8)]);
var inst_52100 = (state_52236[(10)]);
var inst_52102 = (inst_52100 < inst_52099);
var inst_52103 = inst_52102;
var state_52236__$1 = state_52236;
if(cljs.core.truth_(inst_52103)){
var statearr_52300_52370 = state_52236__$1;
(statearr_52300_52370[(1)] = (7));

} else {
var statearr_52301_52371 = state_52236__$1;
(statearr_52301_52371[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (14))){
var inst_52110 = (state_52236[(22)]);
var inst_52119 = cljs.core.first.call(null,inst_52110);
var inst_52120 = figwheel.client.file_reloading.eval_body.call(null,inst_52119,opts);
var inst_52121 = cljs.core.next.call(null,inst_52110);
var inst_52097 = inst_52121;
var inst_52098 = null;
var inst_52099 = (0);
var inst_52100 = (0);
var state_52236__$1 = (function (){var statearr_52302 = state_52236;
(statearr_52302[(32)] = inst_52120);

(statearr_52302[(7)] = inst_52098);

(statearr_52302[(8)] = inst_52099);

(statearr_52302[(9)] = inst_52097);

(statearr_52302[(10)] = inst_52100);

return statearr_52302;
})();
var statearr_52303_52372 = state_52236__$1;
(statearr_52303_52372[(2)] = null);

(statearr_52303_52372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (45))){
var state_52236__$1 = state_52236;
var statearr_52304_52373 = state_52236__$1;
(statearr_52304_52373[(2)] = null);

(statearr_52304_52373[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (26))){
var inst_52150 = (state_52236[(19)]);
var inst_52158 = (state_52236[(23)]);
var inst_52153 = (state_52236[(24)]);
var inst_52154 = (state_52236[(25)]);
var inst_52156 = (state_52236[(26)]);
var inst_52173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52175 = (function (){var all_files = inst_52150;
var res_SINGLEQUOTE_ = inst_52153;
var res = inst_52154;
var files_not_loaded = inst_52156;
var dependencies_that_loaded = inst_52158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52156,inst_52173,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52174){
var map__52305 = p__52174;
var map__52305__$1 = ((((!((map__52305 == null)))?((((map__52305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52305):map__52305);
var namespace = cljs.core.get.call(null,map__52305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52305__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52156,inst_52173,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52176 = cljs.core.map.call(null,inst_52175,inst_52154);
var inst_52177 = cljs.core.pr_str.call(null,inst_52176);
var inst_52178 = figwheel.client.utils.log.call(null,inst_52177);
var inst_52179 = (function (){var all_files = inst_52150;
var res_SINGLEQUOTE_ = inst_52153;
var res = inst_52154;
var files_not_loaded = inst_52156;
var dependencies_that_loaded = inst_52158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52156,inst_52173,inst_52175,inst_52176,inst_52177,inst_52178,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52150,inst_52158,inst_52153,inst_52154,inst_52156,inst_52173,inst_52175,inst_52176,inst_52177,inst_52178,state_val_52237,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52180 = setTimeout(inst_52179,(10));
var state_52236__$1 = (function (){var statearr_52307 = state_52236;
(statearr_52307[(33)] = inst_52178);

(statearr_52307[(34)] = inst_52173);

return statearr_52307;
})();
var statearr_52308_52374 = state_52236__$1;
(statearr_52308_52374[(2)] = inst_52180);

(statearr_52308_52374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (16))){
var state_52236__$1 = state_52236;
var statearr_52309_52375 = state_52236__$1;
(statearr_52309_52375[(2)] = reload_dependents);

(statearr_52309_52375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (38))){
var inst_52190 = (state_52236[(16)]);
var inst_52207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52190);
var state_52236__$1 = state_52236;
var statearr_52310_52376 = state_52236__$1;
(statearr_52310_52376[(2)] = inst_52207);

(statearr_52310_52376[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (30))){
var state_52236__$1 = state_52236;
var statearr_52311_52377 = state_52236__$1;
(statearr_52311_52377[(2)] = null);

(statearr_52311_52377[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (10))){
var inst_52110 = (state_52236[(22)]);
var inst_52112 = cljs.core.chunked_seq_QMARK_.call(null,inst_52110);
var state_52236__$1 = state_52236;
if(inst_52112){
var statearr_52312_52378 = state_52236__$1;
(statearr_52312_52378[(1)] = (13));

} else {
var statearr_52313_52379 = state_52236__$1;
(statearr_52313_52379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (18))){
var inst_52144 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
if(cljs.core.truth_(inst_52144)){
var statearr_52314_52380 = state_52236__$1;
(statearr_52314_52380[(1)] = (19));

} else {
var statearr_52315_52381 = state_52236__$1;
(statearr_52315_52381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (42))){
var state_52236__$1 = state_52236;
var statearr_52316_52382 = state_52236__$1;
(statearr_52316_52382[(2)] = null);

(statearr_52316_52382[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (37))){
var inst_52202 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52317_52383 = state_52236__$1;
(statearr_52317_52383[(2)] = inst_52202);

(statearr_52317_52383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (8))){
var inst_52110 = (state_52236[(22)]);
var inst_52097 = (state_52236[(9)]);
var inst_52110__$1 = cljs.core.seq.call(null,inst_52097);
var state_52236__$1 = (function (){var statearr_52318 = state_52236;
(statearr_52318[(22)] = inst_52110__$1);

return statearr_52318;
})();
if(inst_52110__$1){
var statearr_52319_52384 = state_52236__$1;
(statearr_52319_52384[(1)] = (10));

} else {
var statearr_52320_52385 = state_52236__$1;
(statearr_52320_52385[(1)] = (11));

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
});})(c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40567__auto__,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto____0 = (function (){
var statearr_52324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52324[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto__);

(statearr_52324[(1)] = (1));

return statearr_52324;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto____1 = (function (state_52236){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_52236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e52325){if((e52325 instanceof Object)){
var ex__40571__auto__ = e52325;
var statearr_52326_52386 = state_52236;
(statearr_52326_52386[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52387 = state_52236;
state_52236 = G__52387;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto__ = function(state_52236){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto____1.call(this,state_52236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40681__auto__ = (function (){var statearr_52327 = f__40680__auto__.call(null);
(statearr_52327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_52327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,map__52082,map__52082__$1,opts,before_jsload,on_jsload,reload_dependents,map__52083,map__52083__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40679__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52390,link){
var map__52393 = p__52390;
var map__52393__$1 = ((((!((map__52393 == null)))?((((map__52393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52393):map__52393);
var file = cljs.core.get.call(null,map__52393__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52393,map__52393__$1,file){
return (function (p1__52388_SHARP_,p2__52389_SHARP_){
if(cljs.core._EQ_.call(null,p1__52388_SHARP_,p2__52389_SHARP_)){
return p1__52388_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52393,map__52393__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52399){
var map__52400 = p__52399;
var map__52400__$1 = ((((!((map__52400 == null)))?((((map__52400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52400):map__52400);
var match_length = cljs.core.get.call(null,map__52400__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52400__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52395_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52395_SHARP_);
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
var args52402 = [];
var len__37877__auto___52405 = arguments.length;
var i__37878__auto___52406 = (0);
while(true){
if((i__37878__auto___52406 < len__37877__auto___52405)){
args52402.push((arguments[i__37878__auto___52406]));

var G__52407 = (i__37878__auto___52406 + (1));
i__37878__auto___52406 = G__52407;
continue;
} else {
}
break;
}

var G__52404 = args52402.length;
switch (G__52404) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52402.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52409_SHARP_,p2__52410_SHARP_){
return cljs.core.assoc.call(null,p1__52409_SHARP_,cljs.core.get.call(null,p2__52410_SHARP_,key),p2__52410_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52411){
var map__52414 = p__52411;
var map__52414__$1 = ((((!((map__52414 == null)))?((((map__52414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52414):map__52414);
var f_data = map__52414__$1;
var file = cljs.core.get.call(null,map__52414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52416,p__52417){
var map__52426 = p__52416;
var map__52426__$1 = ((((!((map__52426 == null)))?((((map__52426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52426):map__52426);
var opts = map__52426__$1;
var on_cssload = cljs.core.get.call(null,map__52426__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52427 = p__52417;
var map__52427__$1 = ((((!((map__52427 == null)))?((((map__52427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52427):map__52427);
var files_msg = map__52427__$1;
var files = cljs.core.get.call(null,map__52427__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52430_52434 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52431_52435 = null;
var count__52432_52436 = (0);
var i__52433_52437 = (0);
while(true){
if((i__52433_52437 < count__52432_52436)){
var f_52438 = cljs.core._nth.call(null,chunk__52431_52435,i__52433_52437);
figwheel.client.file_reloading.reload_css_file.call(null,f_52438);

var G__52439 = seq__52430_52434;
var G__52440 = chunk__52431_52435;
var G__52441 = count__52432_52436;
var G__52442 = (i__52433_52437 + (1));
seq__52430_52434 = G__52439;
chunk__52431_52435 = G__52440;
count__52432_52436 = G__52441;
i__52433_52437 = G__52442;
continue;
} else {
var temp__4657__auto___52443 = cljs.core.seq.call(null,seq__52430_52434);
if(temp__4657__auto___52443){
var seq__52430_52444__$1 = temp__4657__auto___52443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52430_52444__$1)){
var c__37613__auto___52445 = cljs.core.chunk_first.call(null,seq__52430_52444__$1);
var G__52446 = cljs.core.chunk_rest.call(null,seq__52430_52444__$1);
var G__52447 = c__37613__auto___52445;
var G__52448 = cljs.core.count.call(null,c__37613__auto___52445);
var G__52449 = (0);
seq__52430_52434 = G__52446;
chunk__52431_52435 = G__52447;
count__52432_52436 = G__52448;
i__52433_52437 = G__52449;
continue;
} else {
var f_52450 = cljs.core.first.call(null,seq__52430_52444__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52450);

var G__52451 = cljs.core.next.call(null,seq__52430_52444__$1);
var G__52452 = null;
var G__52453 = (0);
var G__52454 = (0);
seq__52430_52434 = G__52451;
chunk__52431_52435 = G__52452;
count__52432_52436 = G__52453;
i__52433_52437 = G__52454;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52426,map__52426__$1,opts,on_cssload,map__52427,map__52427__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52426,map__52426__$1,opts,on_cssload,map__52427,map__52427__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map