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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51454_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51454_SHARP_));
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
var seq__51459 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51460 = null;
var count__51461 = (0);
var i__51462 = (0);
while(true){
if((i__51462 < count__51461)){
var n = cljs.core._nth.call(null,chunk__51460,i__51462);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51463 = seq__51459;
var G__51464 = chunk__51460;
var G__51465 = count__51461;
var G__51466 = (i__51462 + (1));
seq__51459 = G__51463;
chunk__51460 = G__51464;
count__51461 = G__51465;
i__51462 = G__51466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51459);
if(temp__4657__auto__){
var seq__51459__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51459__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__51459__$1);
var G__51467 = cljs.core.chunk_rest.call(null,seq__51459__$1);
var G__51468 = c__37613__auto__;
var G__51469 = cljs.core.count.call(null,c__37613__auto__);
var G__51470 = (0);
seq__51459 = G__51467;
chunk__51460 = G__51468;
count__51461 = G__51469;
i__51462 = G__51470;
continue;
} else {
var n = cljs.core.first.call(null,seq__51459__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51471 = cljs.core.next.call(null,seq__51459__$1);
var G__51472 = null;
var G__51473 = (0);
var G__51474 = (0);
seq__51459 = G__51471;
chunk__51460 = G__51472;
count__51461 = G__51473;
i__51462 = G__51474;
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

var seq__51525_51536 = cljs.core.seq.call(null,deps);
var chunk__51526_51537 = null;
var count__51527_51538 = (0);
var i__51528_51539 = (0);
while(true){
if((i__51528_51539 < count__51527_51538)){
var dep_51540 = cljs.core._nth.call(null,chunk__51526_51537,i__51528_51539);
topo_sort_helper_STAR_.call(null,dep_51540,(depth + (1)),state);

var G__51541 = seq__51525_51536;
var G__51542 = chunk__51526_51537;
var G__51543 = count__51527_51538;
var G__51544 = (i__51528_51539 + (1));
seq__51525_51536 = G__51541;
chunk__51526_51537 = G__51542;
count__51527_51538 = G__51543;
i__51528_51539 = G__51544;
continue;
} else {
var temp__4657__auto___51545 = cljs.core.seq.call(null,seq__51525_51536);
if(temp__4657__auto___51545){
var seq__51525_51546__$1 = temp__4657__auto___51545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51525_51546__$1)){
var c__37613__auto___51547 = cljs.core.chunk_first.call(null,seq__51525_51546__$1);
var G__51548 = cljs.core.chunk_rest.call(null,seq__51525_51546__$1);
var G__51549 = c__37613__auto___51547;
var G__51550 = cljs.core.count.call(null,c__37613__auto___51547);
var G__51551 = (0);
seq__51525_51536 = G__51548;
chunk__51526_51537 = G__51549;
count__51527_51538 = G__51550;
i__51528_51539 = G__51551;
continue;
} else {
var dep_51552 = cljs.core.first.call(null,seq__51525_51546__$1);
topo_sort_helper_STAR_.call(null,dep_51552,(depth + (1)),state);

var G__51553 = cljs.core.next.call(null,seq__51525_51546__$1);
var G__51554 = null;
var G__51555 = (0);
var G__51556 = (0);
seq__51525_51536 = G__51553;
chunk__51526_51537 = G__51554;
count__51527_51538 = G__51555;
i__51528_51539 = G__51556;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51529){
var vec__51533 = p__51529;
var seq__51534 = cljs.core.seq.call(null,vec__51533);
var first__51535 = cljs.core.first.call(null,seq__51534);
var seq__51534__$1 = cljs.core.next.call(null,seq__51534);
var x = first__51535;
var xs = seq__51534__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51533,seq__51534,first__51535,seq__51534__$1,x,xs,get_deps__$1){
return (function (p1__51475_SHARP_){
return clojure.set.difference.call(null,p1__51475_SHARP_,x);
});})(vec__51533,seq__51534,first__51535,seq__51534__$1,x,xs,get_deps__$1))
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
var seq__51569 = cljs.core.seq.call(null,provides);
var chunk__51570 = null;
var count__51571 = (0);
var i__51572 = (0);
while(true){
if((i__51572 < count__51571)){
var prov = cljs.core._nth.call(null,chunk__51570,i__51572);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51573_51581 = cljs.core.seq.call(null,requires);
var chunk__51574_51582 = null;
var count__51575_51583 = (0);
var i__51576_51584 = (0);
while(true){
if((i__51576_51584 < count__51575_51583)){
var req_51585 = cljs.core._nth.call(null,chunk__51574_51582,i__51576_51584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51585,prov);

var G__51586 = seq__51573_51581;
var G__51587 = chunk__51574_51582;
var G__51588 = count__51575_51583;
var G__51589 = (i__51576_51584 + (1));
seq__51573_51581 = G__51586;
chunk__51574_51582 = G__51587;
count__51575_51583 = G__51588;
i__51576_51584 = G__51589;
continue;
} else {
var temp__4657__auto___51590 = cljs.core.seq.call(null,seq__51573_51581);
if(temp__4657__auto___51590){
var seq__51573_51591__$1 = temp__4657__auto___51590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51573_51591__$1)){
var c__37613__auto___51592 = cljs.core.chunk_first.call(null,seq__51573_51591__$1);
var G__51593 = cljs.core.chunk_rest.call(null,seq__51573_51591__$1);
var G__51594 = c__37613__auto___51592;
var G__51595 = cljs.core.count.call(null,c__37613__auto___51592);
var G__51596 = (0);
seq__51573_51581 = G__51593;
chunk__51574_51582 = G__51594;
count__51575_51583 = G__51595;
i__51576_51584 = G__51596;
continue;
} else {
var req_51597 = cljs.core.first.call(null,seq__51573_51591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51597,prov);

var G__51598 = cljs.core.next.call(null,seq__51573_51591__$1);
var G__51599 = null;
var G__51600 = (0);
var G__51601 = (0);
seq__51573_51581 = G__51598;
chunk__51574_51582 = G__51599;
count__51575_51583 = G__51600;
i__51576_51584 = G__51601;
continue;
}
} else {
}
}
break;
}

var G__51602 = seq__51569;
var G__51603 = chunk__51570;
var G__51604 = count__51571;
var G__51605 = (i__51572 + (1));
seq__51569 = G__51602;
chunk__51570 = G__51603;
count__51571 = G__51604;
i__51572 = G__51605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51569);
if(temp__4657__auto__){
var seq__51569__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51569__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__51569__$1);
var G__51606 = cljs.core.chunk_rest.call(null,seq__51569__$1);
var G__51607 = c__37613__auto__;
var G__51608 = cljs.core.count.call(null,c__37613__auto__);
var G__51609 = (0);
seq__51569 = G__51606;
chunk__51570 = G__51607;
count__51571 = G__51608;
i__51572 = G__51609;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51569__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51577_51610 = cljs.core.seq.call(null,requires);
var chunk__51578_51611 = null;
var count__51579_51612 = (0);
var i__51580_51613 = (0);
while(true){
if((i__51580_51613 < count__51579_51612)){
var req_51614 = cljs.core._nth.call(null,chunk__51578_51611,i__51580_51613);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51614,prov);

var G__51615 = seq__51577_51610;
var G__51616 = chunk__51578_51611;
var G__51617 = count__51579_51612;
var G__51618 = (i__51580_51613 + (1));
seq__51577_51610 = G__51615;
chunk__51578_51611 = G__51616;
count__51579_51612 = G__51617;
i__51580_51613 = G__51618;
continue;
} else {
var temp__4657__auto___51619__$1 = cljs.core.seq.call(null,seq__51577_51610);
if(temp__4657__auto___51619__$1){
var seq__51577_51620__$1 = temp__4657__auto___51619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51577_51620__$1)){
var c__37613__auto___51621 = cljs.core.chunk_first.call(null,seq__51577_51620__$1);
var G__51622 = cljs.core.chunk_rest.call(null,seq__51577_51620__$1);
var G__51623 = c__37613__auto___51621;
var G__51624 = cljs.core.count.call(null,c__37613__auto___51621);
var G__51625 = (0);
seq__51577_51610 = G__51622;
chunk__51578_51611 = G__51623;
count__51579_51612 = G__51624;
i__51580_51613 = G__51625;
continue;
} else {
var req_51626 = cljs.core.first.call(null,seq__51577_51620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51626,prov);

var G__51627 = cljs.core.next.call(null,seq__51577_51620__$1);
var G__51628 = null;
var G__51629 = (0);
var G__51630 = (0);
seq__51577_51610 = G__51627;
chunk__51578_51611 = G__51628;
count__51579_51612 = G__51629;
i__51580_51613 = G__51630;
continue;
}
} else {
}
}
break;
}

var G__51631 = cljs.core.next.call(null,seq__51569__$1);
var G__51632 = null;
var G__51633 = (0);
var G__51634 = (0);
seq__51569 = G__51631;
chunk__51570 = G__51632;
count__51571 = G__51633;
i__51572 = G__51634;
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
var seq__51639_51643 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51640_51644 = null;
var count__51641_51645 = (0);
var i__51642_51646 = (0);
while(true){
if((i__51642_51646 < count__51641_51645)){
var ns_51647 = cljs.core._nth.call(null,chunk__51640_51644,i__51642_51646);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51647);

var G__51648 = seq__51639_51643;
var G__51649 = chunk__51640_51644;
var G__51650 = count__51641_51645;
var G__51651 = (i__51642_51646 + (1));
seq__51639_51643 = G__51648;
chunk__51640_51644 = G__51649;
count__51641_51645 = G__51650;
i__51642_51646 = G__51651;
continue;
} else {
var temp__4657__auto___51652 = cljs.core.seq.call(null,seq__51639_51643);
if(temp__4657__auto___51652){
var seq__51639_51653__$1 = temp__4657__auto___51652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51639_51653__$1)){
var c__37613__auto___51654 = cljs.core.chunk_first.call(null,seq__51639_51653__$1);
var G__51655 = cljs.core.chunk_rest.call(null,seq__51639_51653__$1);
var G__51656 = c__37613__auto___51654;
var G__51657 = cljs.core.count.call(null,c__37613__auto___51654);
var G__51658 = (0);
seq__51639_51643 = G__51655;
chunk__51640_51644 = G__51656;
count__51641_51645 = G__51657;
i__51642_51646 = G__51658;
continue;
} else {
var ns_51659 = cljs.core.first.call(null,seq__51639_51653__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51659);

var G__51660 = cljs.core.next.call(null,seq__51639_51653__$1);
var G__51661 = null;
var G__51662 = (0);
var G__51663 = (0);
seq__51639_51643 = G__51660;
chunk__51640_51644 = G__51661;
count__51641_51645 = G__51662;
i__51642_51646 = G__51663;
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
var G__51664__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51665__i = 0, G__51665__a = new Array(arguments.length -  0);
while (G__51665__i < G__51665__a.length) {G__51665__a[G__51665__i] = arguments[G__51665__i + 0]; ++G__51665__i;}
  args = new cljs.core.IndexedSeq(G__51665__a,0);
} 
return G__51664__delegate.call(this,args);};
G__51664.cljs$lang$maxFixedArity = 0;
G__51664.cljs$lang$applyTo = (function (arglist__51666){
var args = cljs.core.seq(arglist__51666);
return G__51664__delegate(args);
});
G__51664.cljs$core$IFn$_invoke$arity$variadic = G__51664__delegate;
return G__51664;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51668 = cljs.core._EQ_;
var expr__51669 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51668.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51669))){
var path_parts = ((function (pred__51668,expr__51669){
return (function (p1__51667_SHARP_){
return clojure.string.split.call(null,p1__51667_SHARP_,/[\/\\]/);
});})(pred__51668,expr__51669))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51668,expr__51669){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51671){if((e51671 instanceof Error)){
var e = e51671;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51671;

}
}})());
});
;})(path_parts,sep,root,pred__51668,expr__51669))
} else {
if(cljs.core.truth_(pred__51668.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51669))){
return ((function (pred__51668,expr__51669){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51668,expr__51669){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51668,expr__51669))
);

return deferred.addErrback(((function (deferred,pred__51668,expr__51669){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51668,expr__51669))
);
});
;})(pred__51668,expr__51669))
} else {
return ((function (pred__51668,expr__51669){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51668,expr__51669))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51672,callback){
var map__51675 = p__51672;
var map__51675__$1 = ((((!((map__51675 == null)))?((((map__51675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51675):map__51675);
var file_msg = map__51675__$1;
var request_url = cljs.core.get.call(null,map__51675__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51675,map__51675__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51675,map__51675__$1,file_msg,request_url))
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
return (function (state_51699){
var state_val_51700 = (state_51699[(1)]);
if((state_val_51700 === (7))){
var inst_51695 = (state_51699[(2)]);
var state_51699__$1 = state_51699;
var statearr_51701_51721 = state_51699__$1;
(statearr_51701_51721[(2)] = inst_51695);

(statearr_51701_51721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (1))){
var state_51699__$1 = state_51699;
var statearr_51702_51722 = state_51699__$1;
(statearr_51702_51722[(2)] = null);

(statearr_51702_51722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (4))){
var inst_51679 = (state_51699[(7)]);
var inst_51679__$1 = (state_51699[(2)]);
var state_51699__$1 = (function (){var statearr_51703 = state_51699;
(statearr_51703[(7)] = inst_51679__$1);

return statearr_51703;
})();
if(cljs.core.truth_(inst_51679__$1)){
var statearr_51704_51723 = state_51699__$1;
(statearr_51704_51723[(1)] = (5));

} else {
var statearr_51705_51724 = state_51699__$1;
(statearr_51705_51724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (6))){
var state_51699__$1 = state_51699;
var statearr_51706_51725 = state_51699__$1;
(statearr_51706_51725[(2)] = null);

(statearr_51706_51725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (3))){
var inst_51697 = (state_51699[(2)]);
var state_51699__$1 = state_51699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51699__$1,inst_51697);
} else {
if((state_val_51700 === (2))){
var state_51699__$1 = state_51699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51699__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51700 === (11))){
var inst_51691 = (state_51699[(2)]);
var state_51699__$1 = (function (){var statearr_51707 = state_51699;
(statearr_51707[(8)] = inst_51691);

return statearr_51707;
})();
var statearr_51708_51726 = state_51699__$1;
(statearr_51708_51726[(2)] = null);

(statearr_51708_51726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (9))){
var inst_51683 = (state_51699[(9)]);
var inst_51685 = (state_51699[(10)]);
var inst_51687 = inst_51685.call(null,inst_51683);
var state_51699__$1 = state_51699;
var statearr_51709_51727 = state_51699__$1;
(statearr_51709_51727[(2)] = inst_51687);

(statearr_51709_51727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (5))){
var inst_51679 = (state_51699[(7)]);
var inst_51681 = figwheel.client.file_reloading.blocking_load.call(null,inst_51679);
var state_51699__$1 = state_51699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51699__$1,(8),inst_51681);
} else {
if((state_val_51700 === (10))){
var inst_51683 = (state_51699[(9)]);
var inst_51689 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51683);
var state_51699__$1 = state_51699;
var statearr_51710_51728 = state_51699__$1;
(statearr_51710_51728[(2)] = inst_51689);

(statearr_51710_51728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (8))){
var inst_51679 = (state_51699[(7)]);
var inst_51685 = (state_51699[(10)]);
var inst_51683 = (state_51699[(2)]);
var inst_51684 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51685__$1 = cljs.core.get.call(null,inst_51684,inst_51679);
var state_51699__$1 = (function (){var statearr_51711 = state_51699;
(statearr_51711[(9)] = inst_51683);

(statearr_51711[(10)] = inst_51685__$1);

return statearr_51711;
})();
if(cljs.core.truth_(inst_51685__$1)){
var statearr_51712_51729 = state_51699__$1;
(statearr_51712_51729[(1)] = (9));

} else {
var statearr_51713_51730 = state_51699__$1;
(statearr_51713_51730[(1)] = (10));

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
var statearr_51717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51717[(0)] = figwheel$client$file_reloading$state_machine__40620__auto__);

(statearr_51717[(1)] = (1));

return statearr_51717;
});
var figwheel$client$file_reloading$state_machine__40620__auto____1 = (function (state_51699){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_51699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e51718){if((e51718 instanceof Object)){
var ex__40623__auto__ = e51718;
var statearr_51719_51731 = state_51699;
(statearr_51719_51731[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51732 = state_51699;
state_51699 = G__51732;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40620__auto__ = function(state_51699){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40620__auto____1.call(this,state_51699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40620__auto____0;
figwheel$client$file_reloading$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40620__auto____1;
return figwheel$client$file_reloading$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__))
})();
var state__40733__auto__ = (function (){var statearr_51720 = f__40732__auto__.call(null);
(statearr_51720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_51720;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51733,callback){
var map__51736 = p__51733;
var map__51736__$1 = ((((!((map__51736 == null)))?((((map__51736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51736):map__51736);
var file_msg = map__51736__$1;
var namespace = cljs.core.get.call(null,map__51736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51736,map__51736__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51736,map__51736__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51738){
var map__51741 = p__51738;
var map__51741__$1 = ((((!((map__51741 == null)))?((((map__51741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51741):map__51741);
var file_msg = map__51741__$1;
var namespace = cljs.core.get.call(null,map__51741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51743,callback){
var map__51746 = p__51743;
var map__51746__$1 = ((((!((map__51746 == null)))?((((map__51746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51746):map__51746);
var file_msg = map__51746__$1;
var request_url = cljs.core.get.call(null,map__51746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40731__auto___51850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___51850,out){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___51850,out){
return (function (state_51832){
var state_val_51833 = (state_51832[(1)]);
if((state_val_51833 === (1))){
var inst_51806 = cljs.core.seq.call(null,files);
var inst_51807 = cljs.core.first.call(null,inst_51806);
var inst_51808 = cljs.core.next.call(null,inst_51806);
var inst_51809 = files;
var state_51832__$1 = (function (){var statearr_51834 = state_51832;
(statearr_51834[(7)] = inst_51807);

(statearr_51834[(8)] = inst_51809);

(statearr_51834[(9)] = inst_51808);

return statearr_51834;
})();
var statearr_51835_51851 = state_51832__$1;
(statearr_51835_51851[(2)] = null);

(statearr_51835_51851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51833 === (2))){
var inst_51809 = (state_51832[(8)]);
var inst_51815 = (state_51832[(10)]);
var inst_51814 = cljs.core.seq.call(null,inst_51809);
var inst_51815__$1 = cljs.core.first.call(null,inst_51814);
var inst_51816 = cljs.core.next.call(null,inst_51814);
var inst_51817 = (inst_51815__$1 == null);
var inst_51818 = cljs.core.not.call(null,inst_51817);
var state_51832__$1 = (function (){var statearr_51836 = state_51832;
(statearr_51836[(11)] = inst_51816);

(statearr_51836[(10)] = inst_51815__$1);

return statearr_51836;
})();
if(inst_51818){
var statearr_51837_51852 = state_51832__$1;
(statearr_51837_51852[(1)] = (4));

} else {
var statearr_51838_51853 = state_51832__$1;
(statearr_51838_51853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51833 === (3))){
var inst_51830 = (state_51832[(2)]);
var state_51832__$1 = state_51832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51832__$1,inst_51830);
} else {
if((state_val_51833 === (4))){
var inst_51815 = (state_51832[(10)]);
var inst_51820 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51815);
var state_51832__$1 = state_51832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51832__$1,(7),inst_51820);
} else {
if((state_val_51833 === (5))){
var inst_51826 = cljs.core.async.close_BANG_.call(null,out);
var state_51832__$1 = state_51832;
var statearr_51839_51854 = state_51832__$1;
(statearr_51839_51854[(2)] = inst_51826);

(statearr_51839_51854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51833 === (6))){
var inst_51828 = (state_51832[(2)]);
var state_51832__$1 = state_51832;
var statearr_51840_51855 = state_51832__$1;
(statearr_51840_51855[(2)] = inst_51828);

(statearr_51840_51855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51833 === (7))){
var inst_51816 = (state_51832[(11)]);
var inst_51822 = (state_51832[(2)]);
var inst_51823 = cljs.core.async.put_BANG_.call(null,out,inst_51822);
var inst_51809 = inst_51816;
var state_51832__$1 = (function (){var statearr_51841 = state_51832;
(statearr_51841[(12)] = inst_51823);

(statearr_51841[(8)] = inst_51809);

return statearr_51841;
})();
var statearr_51842_51856 = state_51832__$1;
(statearr_51842_51856[(2)] = null);

(statearr_51842_51856[(1)] = (2));


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
});})(c__40731__auto___51850,out))
;
return ((function (switch__40619__auto__,c__40731__auto___51850,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____0 = (function (){
var statearr_51846 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51846[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__);

(statearr_51846[(1)] = (1));

return statearr_51846;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____1 = (function (state_51832){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_51832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e51847){if((e51847 instanceof Object)){
var ex__40623__auto__ = e51847;
var statearr_51848_51857 = state_51832;
(statearr_51848_51857[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51858 = state_51832;
state_51832 = G__51858;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__ = function(state_51832){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____1.call(this,state_51832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___51850,out))
})();
var state__40733__auto__ = (function (){var statearr_51849 = f__40732__auto__.call(null);
(statearr_51849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___51850);

return statearr_51849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___51850,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51859,opts){
var map__51863 = p__51859;
var map__51863__$1 = ((((!((map__51863 == null)))?((((map__51863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51863):map__51863);
var eval_body__$1 = cljs.core.get.call(null,map__51863__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e51865){var e = e51865;
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
return (function (p1__51866_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51866_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__51875){
var vec__51876 = p__51875;
var k = cljs.core.nth.call(null,vec__51876,(0),null);
var v = cljs.core.nth.call(null,vec__51876,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51879){
var vec__51880 = p__51879;
var k = cljs.core.nth.call(null,vec__51880,(0),null);
var v = cljs.core.nth.call(null,vec__51880,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51886,p__51887){
var map__52134 = p__51886;
var map__52134__$1 = ((((!((map__52134 == null)))?((((map__52134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52134):map__52134);
var opts = map__52134__$1;
var before_jsload = cljs.core.get.call(null,map__52134__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52134__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52134__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52135 = p__51887;
var map__52135__$1 = ((((!((map__52135 == null)))?((((map__52135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52135):map__52135);
var msg = map__52135__$1;
var files = cljs.core.get.call(null,map__52135__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52135__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52135__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52288){
var state_val_52289 = (state_52288[(1)]);
if((state_val_52289 === (7))){
var inst_52150 = (state_52288[(7)]);
var inst_52152 = (state_52288[(8)]);
var inst_52151 = (state_52288[(9)]);
var inst_52149 = (state_52288[(10)]);
var inst_52157 = cljs.core._nth.call(null,inst_52150,inst_52152);
var inst_52158 = figwheel.client.file_reloading.eval_body.call(null,inst_52157,opts);
var inst_52159 = (inst_52152 + (1));
var tmp52290 = inst_52150;
var tmp52291 = inst_52151;
var tmp52292 = inst_52149;
var inst_52149__$1 = tmp52292;
var inst_52150__$1 = tmp52290;
var inst_52151__$1 = tmp52291;
var inst_52152__$1 = inst_52159;
var state_52288__$1 = (function (){var statearr_52293 = state_52288;
(statearr_52293[(7)] = inst_52150__$1);

(statearr_52293[(8)] = inst_52152__$1);

(statearr_52293[(11)] = inst_52158);

(statearr_52293[(9)] = inst_52151__$1);

(statearr_52293[(10)] = inst_52149__$1);

return statearr_52293;
})();
var statearr_52294_52380 = state_52288__$1;
(statearr_52294_52380[(2)] = null);

(statearr_52294_52380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (20))){
var inst_52192 = (state_52288[(12)]);
var inst_52200 = figwheel.client.file_reloading.sort_files.call(null,inst_52192);
var state_52288__$1 = state_52288;
var statearr_52295_52381 = state_52288__$1;
(statearr_52295_52381[(2)] = inst_52200);

(statearr_52295_52381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (27))){
var state_52288__$1 = state_52288;
var statearr_52296_52382 = state_52288__$1;
(statearr_52296_52382[(2)] = null);

(statearr_52296_52382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (1))){
var inst_52141 = (state_52288[(13)]);
var inst_52138 = before_jsload.call(null,files);
var inst_52139 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52140 = (function (){return ((function (inst_52141,inst_52138,inst_52139,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51883_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51883_SHARP_);
});
;})(inst_52141,inst_52138,inst_52139,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52141__$1 = cljs.core.filter.call(null,inst_52140,files);
var inst_52142 = cljs.core.not_empty.call(null,inst_52141__$1);
var state_52288__$1 = (function (){var statearr_52297 = state_52288;
(statearr_52297[(14)] = inst_52139);

(statearr_52297[(13)] = inst_52141__$1);

(statearr_52297[(15)] = inst_52138);

return statearr_52297;
})();
if(cljs.core.truth_(inst_52142)){
var statearr_52298_52383 = state_52288__$1;
(statearr_52298_52383[(1)] = (2));

} else {
var statearr_52299_52384 = state_52288__$1;
(statearr_52299_52384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (24))){
var state_52288__$1 = state_52288;
var statearr_52300_52385 = state_52288__$1;
(statearr_52300_52385[(2)] = null);

(statearr_52300_52385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (39))){
var inst_52242 = (state_52288[(16)]);
var state_52288__$1 = state_52288;
var statearr_52301_52386 = state_52288__$1;
(statearr_52301_52386[(2)] = inst_52242);

(statearr_52301_52386[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (46))){
var inst_52283 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
var statearr_52302_52387 = state_52288__$1;
(statearr_52302_52387[(2)] = inst_52283);

(statearr_52302_52387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (4))){
var inst_52186 = (state_52288[(2)]);
var inst_52187 = cljs.core.List.EMPTY;
var inst_52188 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52187);
var inst_52189 = (function (){return ((function (inst_52186,inst_52187,inst_52188,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51884_SHARP_){
var and__36790__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51884_SHARP_);
if(cljs.core.truth_(and__36790__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51884_SHARP_));
} else {
return and__36790__auto__;
}
});
;})(inst_52186,inst_52187,inst_52188,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52190 = cljs.core.filter.call(null,inst_52189,files);
var inst_52191 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52192 = cljs.core.concat.call(null,inst_52190,inst_52191);
var state_52288__$1 = (function (){var statearr_52303 = state_52288;
(statearr_52303[(12)] = inst_52192);

(statearr_52303[(17)] = inst_52188);

(statearr_52303[(18)] = inst_52186);

return statearr_52303;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52304_52388 = state_52288__$1;
(statearr_52304_52388[(1)] = (16));

} else {
var statearr_52305_52389 = state_52288__$1;
(statearr_52305_52389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (15))){
var inst_52176 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
var statearr_52306_52390 = state_52288__$1;
(statearr_52306_52390[(2)] = inst_52176);

(statearr_52306_52390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (21))){
var inst_52202 = (state_52288[(19)]);
var inst_52202__$1 = (state_52288[(2)]);
var inst_52203 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52202__$1);
var state_52288__$1 = (function (){var statearr_52307 = state_52288;
(statearr_52307[(19)] = inst_52202__$1);

return statearr_52307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52288__$1,(22),inst_52203);
} else {
if((state_val_52289 === (31))){
var inst_52286 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52288__$1,inst_52286);
} else {
if((state_val_52289 === (32))){
var inst_52242 = (state_52288[(16)]);
var inst_52247 = inst_52242.cljs$lang$protocol_mask$partition0$;
var inst_52248 = (inst_52247 & (64));
var inst_52249 = inst_52242.cljs$core$ISeq$;
var inst_52250 = (inst_52248) || (inst_52249);
var state_52288__$1 = state_52288;
if(cljs.core.truth_(inst_52250)){
var statearr_52308_52391 = state_52288__$1;
(statearr_52308_52391[(1)] = (35));

} else {
var statearr_52309_52392 = state_52288__$1;
(statearr_52309_52392[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (40))){
var inst_52263 = (state_52288[(20)]);
var inst_52262 = (state_52288[(2)]);
var inst_52263__$1 = cljs.core.get.call(null,inst_52262,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52264 = cljs.core.get.call(null,inst_52262,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52265 = cljs.core.not_empty.call(null,inst_52263__$1);
var state_52288__$1 = (function (){var statearr_52310 = state_52288;
(statearr_52310[(21)] = inst_52264);

(statearr_52310[(20)] = inst_52263__$1);

return statearr_52310;
})();
if(cljs.core.truth_(inst_52265)){
var statearr_52311_52393 = state_52288__$1;
(statearr_52311_52393[(1)] = (41));

} else {
var statearr_52312_52394 = state_52288__$1;
(statearr_52312_52394[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (33))){
var state_52288__$1 = state_52288;
var statearr_52313_52395 = state_52288__$1;
(statearr_52313_52395[(2)] = false);

(statearr_52313_52395[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (13))){
var inst_52162 = (state_52288[(22)]);
var inst_52166 = cljs.core.chunk_first.call(null,inst_52162);
var inst_52167 = cljs.core.chunk_rest.call(null,inst_52162);
var inst_52168 = cljs.core.count.call(null,inst_52166);
var inst_52149 = inst_52167;
var inst_52150 = inst_52166;
var inst_52151 = inst_52168;
var inst_52152 = (0);
var state_52288__$1 = (function (){var statearr_52314 = state_52288;
(statearr_52314[(7)] = inst_52150);

(statearr_52314[(8)] = inst_52152);

(statearr_52314[(9)] = inst_52151);

(statearr_52314[(10)] = inst_52149);

return statearr_52314;
})();
var statearr_52315_52396 = state_52288__$1;
(statearr_52315_52396[(2)] = null);

(statearr_52315_52396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (22))){
var inst_52210 = (state_52288[(23)]);
var inst_52202 = (state_52288[(19)]);
var inst_52205 = (state_52288[(24)]);
var inst_52206 = (state_52288[(25)]);
var inst_52205__$1 = (state_52288[(2)]);
var inst_52206__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52205__$1);
var inst_52207 = (function (){var all_files = inst_52202;
var res_SINGLEQUOTE_ = inst_52205__$1;
var res = inst_52206__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52210,inst_52202,inst_52205,inst_52206,inst_52205__$1,inst_52206__$1,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51885_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51885_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52210,inst_52202,inst_52205,inst_52206,inst_52205__$1,inst_52206__$1,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52208 = cljs.core.filter.call(null,inst_52207,inst_52205__$1);
var inst_52209 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52210__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52209);
var inst_52211 = cljs.core.not_empty.call(null,inst_52210__$1);
var state_52288__$1 = (function (){var statearr_52316 = state_52288;
(statearr_52316[(23)] = inst_52210__$1);

(statearr_52316[(26)] = inst_52208);

(statearr_52316[(24)] = inst_52205__$1);

(statearr_52316[(25)] = inst_52206__$1);

return statearr_52316;
})();
if(cljs.core.truth_(inst_52211)){
var statearr_52317_52397 = state_52288__$1;
(statearr_52317_52397[(1)] = (23));

} else {
var statearr_52318_52398 = state_52288__$1;
(statearr_52318_52398[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (36))){
var state_52288__$1 = state_52288;
var statearr_52319_52399 = state_52288__$1;
(statearr_52319_52399[(2)] = false);

(statearr_52319_52399[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (41))){
var inst_52263 = (state_52288[(20)]);
var inst_52267 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52268 = cljs.core.map.call(null,inst_52267,inst_52263);
var inst_52269 = cljs.core.pr_str.call(null,inst_52268);
var inst_52270 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52269)].join('');
var inst_52271 = figwheel.client.utils.log.call(null,inst_52270);
var state_52288__$1 = state_52288;
var statearr_52320_52400 = state_52288__$1;
(statearr_52320_52400[(2)] = inst_52271);

(statearr_52320_52400[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (43))){
var inst_52264 = (state_52288[(21)]);
var inst_52274 = (state_52288[(2)]);
var inst_52275 = cljs.core.not_empty.call(null,inst_52264);
var state_52288__$1 = (function (){var statearr_52321 = state_52288;
(statearr_52321[(27)] = inst_52274);

return statearr_52321;
})();
if(cljs.core.truth_(inst_52275)){
var statearr_52322_52401 = state_52288__$1;
(statearr_52322_52401[(1)] = (44));

} else {
var statearr_52323_52402 = state_52288__$1;
(statearr_52323_52402[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (29))){
var inst_52242 = (state_52288[(16)]);
var inst_52210 = (state_52288[(23)]);
var inst_52208 = (state_52288[(26)]);
var inst_52202 = (state_52288[(19)]);
var inst_52205 = (state_52288[(24)]);
var inst_52206 = (state_52288[(25)]);
var inst_52238 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52241 = (function (){var all_files = inst_52202;
var res_SINGLEQUOTE_ = inst_52205;
var res = inst_52206;
var files_not_loaded = inst_52208;
var dependencies_that_loaded = inst_52210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52242,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52238,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52240){
var map__52324 = p__52240;
var map__52324__$1 = ((((!((map__52324 == null)))?((((map__52324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52324):map__52324);
var namespace = cljs.core.get.call(null,map__52324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52242,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52238,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52242__$1 = cljs.core.group_by.call(null,inst_52241,inst_52208);
var inst_52244 = (inst_52242__$1 == null);
var inst_52245 = cljs.core.not.call(null,inst_52244);
var state_52288__$1 = (function (){var statearr_52326 = state_52288;
(statearr_52326[(16)] = inst_52242__$1);

(statearr_52326[(28)] = inst_52238);

return statearr_52326;
})();
if(inst_52245){
var statearr_52327_52403 = state_52288__$1;
(statearr_52327_52403[(1)] = (32));

} else {
var statearr_52328_52404 = state_52288__$1;
(statearr_52328_52404[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (44))){
var inst_52264 = (state_52288[(21)]);
var inst_52277 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52264);
var inst_52278 = cljs.core.pr_str.call(null,inst_52277);
var inst_52279 = [cljs.core.str("not required: "),cljs.core.str(inst_52278)].join('');
var inst_52280 = figwheel.client.utils.log.call(null,inst_52279);
var state_52288__$1 = state_52288;
var statearr_52329_52405 = state_52288__$1;
(statearr_52329_52405[(2)] = inst_52280);

(statearr_52329_52405[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (6))){
var inst_52183 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
var statearr_52330_52406 = state_52288__$1;
(statearr_52330_52406[(2)] = inst_52183);

(statearr_52330_52406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (28))){
var inst_52208 = (state_52288[(26)]);
var inst_52235 = (state_52288[(2)]);
var inst_52236 = cljs.core.not_empty.call(null,inst_52208);
var state_52288__$1 = (function (){var statearr_52331 = state_52288;
(statearr_52331[(29)] = inst_52235);

return statearr_52331;
})();
if(cljs.core.truth_(inst_52236)){
var statearr_52332_52407 = state_52288__$1;
(statearr_52332_52407[(1)] = (29));

} else {
var statearr_52333_52408 = state_52288__$1;
(statearr_52333_52408[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (25))){
var inst_52206 = (state_52288[(25)]);
var inst_52222 = (state_52288[(2)]);
var inst_52223 = cljs.core.not_empty.call(null,inst_52206);
var state_52288__$1 = (function (){var statearr_52334 = state_52288;
(statearr_52334[(30)] = inst_52222);

return statearr_52334;
})();
if(cljs.core.truth_(inst_52223)){
var statearr_52335_52409 = state_52288__$1;
(statearr_52335_52409[(1)] = (26));

} else {
var statearr_52336_52410 = state_52288__$1;
(statearr_52336_52410[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (34))){
var inst_52257 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
if(cljs.core.truth_(inst_52257)){
var statearr_52337_52411 = state_52288__$1;
(statearr_52337_52411[(1)] = (38));

} else {
var statearr_52338_52412 = state_52288__$1;
(statearr_52338_52412[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (17))){
var state_52288__$1 = state_52288;
var statearr_52339_52413 = state_52288__$1;
(statearr_52339_52413[(2)] = recompile_dependents);

(statearr_52339_52413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (3))){
var state_52288__$1 = state_52288;
var statearr_52340_52414 = state_52288__$1;
(statearr_52340_52414[(2)] = null);

(statearr_52340_52414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (12))){
var inst_52179 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
var statearr_52341_52415 = state_52288__$1;
(statearr_52341_52415[(2)] = inst_52179);

(statearr_52341_52415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (2))){
var inst_52141 = (state_52288[(13)]);
var inst_52148 = cljs.core.seq.call(null,inst_52141);
var inst_52149 = inst_52148;
var inst_52150 = null;
var inst_52151 = (0);
var inst_52152 = (0);
var state_52288__$1 = (function (){var statearr_52342 = state_52288;
(statearr_52342[(7)] = inst_52150);

(statearr_52342[(8)] = inst_52152);

(statearr_52342[(9)] = inst_52151);

(statearr_52342[(10)] = inst_52149);

return statearr_52342;
})();
var statearr_52343_52416 = state_52288__$1;
(statearr_52343_52416[(2)] = null);

(statearr_52343_52416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (23))){
var inst_52210 = (state_52288[(23)]);
var inst_52208 = (state_52288[(26)]);
var inst_52202 = (state_52288[(19)]);
var inst_52205 = (state_52288[(24)]);
var inst_52206 = (state_52288[(25)]);
var inst_52213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52215 = (function (){var all_files = inst_52202;
var res_SINGLEQUOTE_ = inst_52205;
var res = inst_52206;
var files_not_loaded = inst_52208;
var dependencies_that_loaded = inst_52210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52213,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52214){
var map__52344 = p__52214;
var map__52344__$1 = ((((!((map__52344 == null)))?((((map__52344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52344):map__52344);
var request_url = cljs.core.get.call(null,map__52344__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52213,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52216 = cljs.core.reverse.call(null,inst_52210);
var inst_52217 = cljs.core.map.call(null,inst_52215,inst_52216);
var inst_52218 = cljs.core.pr_str.call(null,inst_52217);
var inst_52219 = figwheel.client.utils.log.call(null,inst_52218);
var state_52288__$1 = (function (){var statearr_52346 = state_52288;
(statearr_52346[(31)] = inst_52213);

return statearr_52346;
})();
var statearr_52347_52417 = state_52288__$1;
(statearr_52347_52417[(2)] = inst_52219);

(statearr_52347_52417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (35))){
var state_52288__$1 = state_52288;
var statearr_52348_52418 = state_52288__$1;
(statearr_52348_52418[(2)] = true);

(statearr_52348_52418[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (19))){
var inst_52192 = (state_52288[(12)]);
var inst_52198 = figwheel.client.file_reloading.expand_files.call(null,inst_52192);
var state_52288__$1 = state_52288;
var statearr_52349_52419 = state_52288__$1;
(statearr_52349_52419[(2)] = inst_52198);

(statearr_52349_52419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (11))){
var state_52288__$1 = state_52288;
var statearr_52350_52420 = state_52288__$1;
(statearr_52350_52420[(2)] = null);

(statearr_52350_52420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (9))){
var inst_52181 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
var statearr_52351_52421 = state_52288__$1;
(statearr_52351_52421[(2)] = inst_52181);

(statearr_52351_52421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (5))){
var inst_52152 = (state_52288[(8)]);
var inst_52151 = (state_52288[(9)]);
var inst_52154 = (inst_52152 < inst_52151);
var inst_52155 = inst_52154;
var state_52288__$1 = state_52288;
if(cljs.core.truth_(inst_52155)){
var statearr_52352_52422 = state_52288__$1;
(statearr_52352_52422[(1)] = (7));

} else {
var statearr_52353_52423 = state_52288__$1;
(statearr_52353_52423[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (14))){
var inst_52162 = (state_52288[(22)]);
var inst_52171 = cljs.core.first.call(null,inst_52162);
var inst_52172 = figwheel.client.file_reloading.eval_body.call(null,inst_52171,opts);
var inst_52173 = cljs.core.next.call(null,inst_52162);
var inst_52149 = inst_52173;
var inst_52150 = null;
var inst_52151 = (0);
var inst_52152 = (0);
var state_52288__$1 = (function (){var statearr_52354 = state_52288;
(statearr_52354[(7)] = inst_52150);

(statearr_52354[(8)] = inst_52152);

(statearr_52354[(9)] = inst_52151);

(statearr_52354[(32)] = inst_52172);

(statearr_52354[(10)] = inst_52149);

return statearr_52354;
})();
var statearr_52355_52424 = state_52288__$1;
(statearr_52355_52424[(2)] = null);

(statearr_52355_52424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (45))){
var state_52288__$1 = state_52288;
var statearr_52356_52425 = state_52288__$1;
(statearr_52356_52425[(2)] = null);

(statearr_52356_52425[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (26))){
var inst_52210 = (state_52288[(23)]);
var inst_52208 = (state_52288[(26)]);
var inst_52202 = (state_52288[(19)]);
var inst_52205 = (state_52288[(24)]);
var inst_52206 = (state_52288[(25)]);
var inst_52225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52227 = (function (){var all_files = inst_52202;
var res_SINGLEQUOTE_ = inst_52205;
var res = inst_52206;
var files_not_loaded = inst_52208;
var dependencies_that_loaded = inst_52210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52225,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52226){
var map__52357 = p__52226;
var map__52357__$1 = ((((!((map__52357 == null)))?((((map__52357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52357):map__52357);
var namespace = cljs.core.get.call(null,map__52357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52225,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52228 = cljs.core.map.call(null,inst_52227,inst_52206);
var inst_52229 = cljs.core.pr_str.call(null,inst_52228);
var inst_52230 = figwheel.client.utils.log.call(null,inst_52229);
var inst_52231 = (function (){var all_files = inst_52202;
var res_SINGLEQUOTE_ = inst_52205;
var res = inst_52206;
var files_not_loaded = inst_52208;
var dependencies_that_loaded = inst_52210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52225,inst_52227,inst_52228,inst_52229,inst_52230,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52210,inst_52208,inst_52202,inst_52205,inst_52206,inst_52225,inst_52227,inst_52228,inst_52229,inst_52230,state_val_52289,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52232 = setTimeout(inst_52231,(10));
var state_52288__$1 = (function (){var statearr_52359 = state_52288;
(statearr_52359[(33)] = inst_52230);

(statearr_52359[(34)] = inst_52225);

return statearr_52359;
})();
var statearr_52360_52426 = state_52288__$1;
(statearr_52360_52426[(2)] = inst_52232);

(statearr_52360_52426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (16))){
var state_52288__$1 = state_52288;
var statearr_52361_52427 = state_52288__$1;
(statearr_52361_52427[(2)] = reload_dependents);

(statearr_52361_52427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (38))){
var inst_52242 = (state_52288[(16)]);
var inst_52259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52242);
var state_52288__$1 = state_52288;
var statearr_52362_52428 = state_52288__$1;
(statearr_52362_52428[(2)] = inst_52259);

(statearr_52362_52428[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (30))){
var state_52288__$1 = state_52288;
var statearr_52363_52429 = state_52288__$1;
(statearr_52363_52429[(2)] = null);

(statearr_52363_52429[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (10))){
var inst_52162 = (state_52288[(22)]);
var inst_52164 = cljs.core.chunked_seq_QMARK_.call(null,inst_52162);
var state_52288__$1 = state_52288;
if(inst_52164){
var statearr_52364_52430 = state_52288__$1;
(statearr_52364_52430[(1)] = (13));

} else {
var statearr_52365_52431 = state_52288__$1;
(statearr_52365_52431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (18))){
var inst_52196 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
if(cljs.core.truth_(inst_52196)){
var statearr_52366_52432 = state_52288__$1;
(statearr_52366_52432[(1)] = (19));

} else {
var statearr_52367_52433 = state_52288__$1;
(statearr_52367_52433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (42))){
var state_52288__$1 = state_52288;
var statearr_52368_52434 = state_52288__$1;
(statearr_52368_52434[(2)] = null);

(statearr_52368_52434[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (37))){
var inst_52254 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
var statearr_52369_52435 = state_52288__$1;
(statearr_52369_52435[(2)] = inst_52254);

(statearr_52369_52435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (8))){
var inst_52162 = (state_52288[(22)]);
var inst_52149 = (state_52288[(10)]);
var inst_52162__$1 = cljs.core.seq.call(null,inst_52149);
var state_52288__$1 = (function (){var statearr_52370 = state_52288;
(statearr_52370[(22)] = inst_52162__$1);

return statearr_52370;
})();
if(inst_52162__$1){
var statearr_52371_52436 = state_52288__$1;
(statearr_52371_52436[(1)] = (10));

} else {
var statearr_52372_52437 = state_52288__$1;
(statearr_52372_52437[(1)] = (11));

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
});})(c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40619__auto__,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____0 = (function (){
var statearr_52376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52376[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__);

(statearr_52376[(1)] = (1));

return statearr_52376;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____1 = (function (state_52288){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_52288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e52377){if((e52377 instanceof Object)){
var ex__40623__auto__ = e52377;
var statearr_52378_52438 = state_52288;
(statearr_52378_52438[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52439 = state_52288;
state_52288 = G__52439;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__ = function(state_52288){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____1.call(this,state_52288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40733__auto__ = (function (){var statearr_52379 = f__40732__auto__.call(null);
(statearr_52379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_52379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,map__52134,map__52134__$1,opts,before_jsload,on_jsload,reload_dependents,map__52135,map__52135__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40731__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52442,link){
var map__52445 = p__52442;
var map__52445__$1 = ((((!((map__52445 == null)))?((((map__52445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52445):map__52445);
var file = cljs.core.get.call(null,map__52445__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52445,map__52445__$1,file){
return (function (p1__52440_SHARP_,p2__52441_SHARP_){
if(cljs.core._EQ_.call(null,p1__52440_SHARP_,p2__52441_SHARP_)){
return p1__52440_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52445,map__52445__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52451){
var map__52452 = p__52451;
var map__52452__$1 = ((((!((map__52452 == null)))?((((map__52452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52452):map__52452);
var match_length = cljs.core.get.call(null,map__52452__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52452__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52447_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52447_SHARP_);
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
var args52454 = [];
var len__37877__auto___52457 = arguments.length;
var i__37878__auto___52458 = (0);
while(true){
if((i__37878__auto___52458 < len__37877__auto___52457)){
args52454.push((arguments[i__37878__auto___52458]));

var G__52459 = (i__37878__auto___52458 + (1));
i__37878__auto___52458 = G__52459;
continue;
} else {
}
break;
}

var G__52456 = args52454.length;
switch (G__52456) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52454.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52461_SHARP_,p2__52462_SHARP_){
return cljs.core.assoc.call(null,p1__52461_SHARP_,cljs.core.get.call(null,p2__52462_SHARP_,key),p2__52462_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52463){
var map__52466 = p__52463;
var map__52466__$1 = ((((!((map__52466 == null)))?((((map__52466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52466):map__52466);
var f_data = map__52466__$1;
var file = cljs.core.get.call(null,map__52466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52468,p__52469){
var map__52478 = p__52468;
var map__52478__$1 = ((((!((map__52478 == null)))?((((map__52478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52478):map__52478);
var opts = map__52478__$1;
var on_cssload = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52479 = p__52469;
var map__52479__$1 = ((((!((map__52479 == null)))?((((map__52479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52479):map__52479);
var files_msg = map__52479__$1;
var files = cljs.core.get.call(null,map__52479__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52482_52486 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52483_52487 = null;
var count__52484_52488 = (0);
var i__52485_52489 = (0);
while(true){
if((i__52485_52489 < count__52484_52488)){
var f_52490 = cljs.core._nth.call(null,chunk__52483_52487,i__52485_52489);
figwheel.client.file_reloading.reload_css_file.call(null,f_52490);

var G__52491 = seq__52482_52486;
var G__52492 = chunk__52483_52487;
var G__52493 = count__52484_52488;
var G__52494 = (i__52485_52489 + (1));
seq__52482_52486 = G__52491;
chunk__52483_52487 = G__52492;
count__52484_52488 = G__52493;
i__52485_52489 = G__52494;
continue;
} else {
var temp__4657__auto___52495 = cljs.core.seq.call(null,seq__52482_52486);
if(temp__4657__auto___52495){
var seq__52482_52496__$1 = temp__4657__auto___52495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52482_52496__$1)){
var c__37613__auto___52497 = cljs.core.chunk_first.call(null,seq__52482_52496__$1);
var G__52498 = cljs.core.chunk_rest.call(null,seq__52482_52496__$1);
var G__52499 = c__37613__auto___52497;
var G__52500 = cljs.core.count.call(null,c__37613__auto___52497);
var G__52501 = (0);
seq__52482_52486 = G__52498;
chunk__52483_52487 = G__52499;
count__52484_52488 = G__52500;
i__52485_52489 = G__52501;
continue;
} else {
var f_52502 = cljs.core.first.call(null,seq__52482_52496__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52502);

var G__52503 = cljs.core.next.call(null,seq__52482_52496__$1);
var G__52504 = null;
var G__52505 = (0);
var G__52506 = (0);
seq__52482_52486 = G__52503;
chunk__52483_52487 = G__52504;
count__52484_52488 = G__52505;
i__52485_52489 = G__52506;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52478,map__52478__$1,opts,on_cssload,map__52479,map__52479__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52478,map__52478__$1,opts,on_cssload,map__52479,map__52479__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map