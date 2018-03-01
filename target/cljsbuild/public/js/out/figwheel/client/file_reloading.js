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
var or__36758__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36758__auto__){
return or__36758__auto__;
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
var or__36758__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51448_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51448_SHARP_));
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
var seq__51453 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51454 = null;
var count__51455 = (0);
var i__51456 = (0);
while(true){
if((i__51456 < count__51455)){
var n = cljs.core._nth.call(null,chunk__51454,i__51456);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51457 = seq__51453;
var G__51458 = chunk__51454;
var G__51459 = count__51455;
var G__51460 = (i__51456 + (1));
seq__51453 = G__51457;
chunk__51454 = G__51458;
count__51455 = G__51459;
i__51456 = G__51460;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51453);
if(temp__4657__auto__){
var seq__51453__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51453__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__51453__$1);
var G__51461 = cljs.core.chunk_rest.call(null,seq__51453__$1);
var G__51462 = c__37569__auto__;
var G__51463 = cljs.core.count.call(null,c__37569__auto__);
var G__51464 = (0);
seq__51453 = G__51461;
chunk__51454 = G__51462;
count__51455 = G__51463;
i__51456 = G__51464;
continue;
} else {
var n = cljs.core.first.call(null,seq__51453__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51465 = cljs.core.next.call(null,seq__51453__$1);
var G__51466 = null;
var G__51467 = (0);
var G__51468 = (0);
seq__51453 = G__51465;
chunk__51454 = G__51466;
count__51455 = G__51467;
i__51456 = G__51468;
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

var seq__51519_51530 = cljs.core.seq.call(null,deps);
var chunk__51520_51531 = null;
var count__51521_51532 = (0);
var i__51522_51533 = (0);
while(true){
if((i__51522_51533 < count__51521_51532)){
var dep_51534 = cljs.core._nth.call(null,chunk__51520_51531,i__51522_51533);
topo_sort_helper_STAR_.call(null,dep_51534,(depth + (1)),state);

var G__51535 = seq__51519_51530;
var G__51536 = chunk__51520_51531;
var G__51537 = count__51521_51532;
var G__51538 = (i__51522_51533 + (1));
seq__51519_51530 = G__51535;
chunk__51520_51531 = G__51536;
count__51521_51532 = G__51537;
i__51522_51533 = G__51538;
continue;
} else {
var temp__4657__auto___51539 = cljs.core.seq.call(null,seq__51519_51530);
if(temp__4657__auto___51539){
var seq__51519_51540__$1 = temp__4657__auto___51539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51519_51540__$1)){
var c__37569__auto___51541 = cljs.core.chunk_first.call(null,seq__51519_51540__$1);
var G__51542 = cljs.core.chunk_rest.call(null,seq__51519_51540__$1);
var G__51543 = c__37569__auto___51541;
var G__51544 = cljs.core.count.call(null,c__37569__auto___51541);
var G__51545 = (0);
seq__51519_51530 = G__51542;
chunk__51520_51531 = G__51543;
count__51521_51532 = G__51544;
i__51522_51533 = G__51545;
continue;
} else {
var dep_51546 = cljs.core.first.call(null,seq__51519_51540__$1);
topo_sort_helper_STAR_.call(null,dep_51546,(depth + (1)),state);

var G__51547 = cljs.core.next.call(null,seq__51519_51540__$1);
var G__51548 = null;
var G__51549 = (0);
var G__51550 = (0);
seq__51519_51530 = G__51547;
chunk__51520_51531 = G__51548;
count__51521_51532 = G__51549;
i__51522_51533 = G__51550;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51523){
var vec__51527 = p__51523;
var seq__51528 = cljs.core.seq.call(null,vec__51527);
var first__51529 = cljs.core.first.call(null,seq__51528);
var seq__51528__$1 = cljs.core.next.call(null,seq__51528);
var x = first__51529;
var xs = seq__51528__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51527,seq__51528,first__51529,seq__51528__$1,x,xs,get_deps__$1){
return (function (p1__51469_SHARP_){
return clojure.set.difference.call(null,p1__51469_SHARP_,x);
});})(vec__51527,seq__51528,first__51529,seq__51528__$1,x,xs,get_deps__$1))
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
var seq__51563 = cljs.core.seq.call(null,provides);
var chunk__51564 = null;
var count__51565 = (0);
var i__51566 = (0);
while(true){
if((i__51566 < count__51565)){
var prov = cljs.core._nth.call(null,chunk__51564,i__51566);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51567_51575 = cljs.core.seq.call(null,requires);
var chunk__51568_51576 = null;
var count__51569_51577 = (0);
var i__51570_51578 = (0);
while(true){
if((i__51570_51578 < count__51569_51577)){
var req_51579 = cljs.core._nth.call(null,chunk__51568_51576,i__51570_51578);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51579,prov);

var G__51580 = seq__51567_51575;
var G__51581 = chunk__51568_51576;
var G__51582 = count__51569_51577;
var G__51583 = (i__51570_51578 + (1));
seq__51567_51575 = G__51580;
chunk__51568_51576 = G__51581;
count__51569_51577 = G__51582;
i__51570_51578 = G__51583;
continue;
} else {
var temp__4657__auto___51584 = cljs.core.seq.call(null,seq__51567_51575);
if(temp__4657__auto___51584){
var seq__51567_51585__$1 = temp__4657__auto___51584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51567_51585__$1)){
var c__37569__auto___51586 = cljs.core.chunk_first.call(null,seq__51567_51585__$1);
var G__51587 = cljs.core.chunk_rest.call(null,seq__51567_51585__$1);
var G__51588 = c__37569__auto___51586;
var G__51589 = cljs.core.count.call(null,c__37569__auto___51586);
var G__51590 = (0);
seq__51567_51575 = G__51587;
chunk__51568_51576 = G__51588;
count__51569_51577 = G__51589;
i__51570_51578 = G__51590;
continue;
} else {
var req_51591 = cljs.core.first.call(null,seq__51567_51585__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51591,prov);

var G__51592 = cljs.core.next.call(null,seq__51567_51585__$1);
var G__51593 = null;
var G__51594 = (0);
var G__51595 = (0);
seq__51567_51575 = G__51592;
chunk__51568_51576 = G__51593;
count__51569_51577 = G__51594;
i__51570_51578 = G__51595;
continue;
}
} else {
}
}
break;
}

var G__51596 = seq__51563;
var G__51597 = chunk__51564;
var G__51598 = count__51565;
var G__51599 = (i__51566 + (1));
seq__51563 = G__51596;
chunk__51564 = G__51597;
count__51565 = G__51598;
i__51566 = G__51599;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51563);
if(temp__4657__auto__){
var seq__51563__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51563__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__51563__$1);
var G__51600 = cljs.core.chunk_rest.call(null,seq__51563__$1);
var G__51601 = c__37569__auto__;
var G__51602 = cljs.core.count.call(null,c__37569__auto__);
var G__51603 = (0);
seq__51563 = G__51600;
chunk__51564 = G__51601;
count__51565 = G__51602;
i__51566 = G__51603;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51563__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51571_51604 = cljs.core.seq.call(null,requires);
var chunk__51572_51605 = null;
var count__51573_51606 = (0);
var i__51574_51607 = (0);
while(true){
if((i__51574_51607 < count__51573_51606)){
var req_51608 = cljs.core._nth.call(null,chunk__51572_51605,i__51574_51607);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51608,prov);

var G__51609 = seq__51571_51604;
var G__51610 = chunk__51572_51605;
var G__51611 = count__51573_51606;
var G__51612 = (i__51574_51607 + (1));
seq__51571_51604 = G__51609;
chunk__51572_51605 = G__51610;
count__51573_51606 = G__51611;
i__51574_51607 = G__51612;
continue;
} else {
var temp__4657__auto___51613__$1 = cljs.core.seq.call(null,seq__51571_51604);
if(temp__4657__auto___51613__$1){
var seq__51571_51614__$1 = temp__4657__auto___51613__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51571_51614__$1)){
var c__37569__auto___51615 = cljs.core.chunk_first.call(null,seq__51571_51614__$1);
var G__51616 = cljs.core.chunk_rest.call(null,seq__51571_51614__$1);
var G__51617 = c__37569__auto___51615;
var G__51618 = cljs.core.count.call(null,c__37569__auto___51615);
var G__51619 = (0);
seq__51571_51604 = G__51616;
chunk__51572_51605 = G__51617;
count__51573_51606 = G__51618;
i__51574_51607 = G__51619;
continue;
} else {
var req_51620 = cljs.core.first.call(null,seq__51571_51614__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51620,prov);

var G__51621 = cljs.core.next.call(null,seq__51571_51614__$1);
var G__51622 = null;
var G__51623 = (0);
var G__51624 = (0);
seq__51571_51604 = G__51621;
chunk__51572_51605 = G__51622;
count__51573_51606 = G__51623;
i__51574_51607 = G__51624;
continue;
}
} else {
}
}
break;
}

var G__51625 = cljs.core.next.call(null,seq__51563__$1);
var G__51626 = null;
var G__51627 = (0);
var G__51628 = (0);
seq__51563 = G__51625;
chunk__51564 = G__51626;
count__51565 = G__51627;
i__51566 = G__51628;
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
var seq__51633_51637 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51634_51638 = null;
var count__51635_51639 = (0);
var i__51636_51640 = (0);
while(true){
if((i__51636_51640 < count__51635_51639)){
var ns_51641 = cljs.core._nth.call(null,chunk__51634_51638,i__51636_51640);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51641);

var G__51642 = seq__51633_51637;
var G__51643 = chunk__51634_51638;
var G__51644 = count__51635_51639;
var G__51645 = (i__51636_51640 + (1));
seq__51633_51637 = G__51642;
chunk__51634_51638 = G__51643;
count__51635_51639 = G__51644;
i__51636_51640 = G__51645;
continue;
} else {
var temp__4657__auto___51646 = cljs.core.seq.call(null,seq__51633_51637);
if(temp__4657__auto___51646){
var seq__51633_51647__$1 = temp__4657__auto___51646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51633_51647__$1)){
var c__37569__auto___51648 = cljs.core.chunk_first.call(null,seq__51633_51647__$1);
var G__51649 = cljs.core.chunk_rest.call(null,seq__51633_51647__$1);
var G__51650 = c__37569__auto___51648;
var G__51651 = cljs.core.count.call(null,c__37569__auto___51648);
var G__51652 = (0);
seq__51633_51637 = G__51649;
chunk__51634_51638 = G__51650;
count__51635_51639 = G__51651;
i__51636_51640 = G__51652;
continue;
} else {
var ns_51653 = cljs.core.first.call(null,seq__51633_51647__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51653);

var G__51654 = cljs.core.next.call(null,seq__51633_51647__$1);
var G__51655 = null;
var G__51656 = (0);
var G__51657 = (0);
seq__51633_51637 = G__51654;
chunk__51634_51638 = G__51655;
count__51635_51639 = G__51656;
i__51636_51640 = G__51657;
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
goog.require_figwheel_backup_ = (function (){var or__36758__auto__ = goog.require__;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
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
var G__51658__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51659__i = 0, G__51659__a = new Array(arguments.length -  0);
while (G__51659__i < G__51659__a.length) {G__51659__a[G__51659__i] = arguments[G__51659__i + 0]; ++G__51659__i;}
  args = new cljs.core.IndexedSeq(G__51659__a,0);
} 
return G__51658__delegate.call(this,args);};
G__51658.cljs$lang$maxFixedArity = 0;
G__51658.cljs$lang$applyTo = (function (arglist__51660){
var args = cljs.core.seq(arglist__51660);
return G__51658__delegate(args);
});
G__51658.cljs$core$IFn$_invoke$arity$variadic = G__51658__delegate;
return G__51658;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51662 = cljs.core._EQ_;
var expr__51663 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51662.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51663))){
var path_parts = ((function (pred__51662,expr__51663){
return (function (p1__51661_SHARP_){
return clojure.string.split.call(null,p1__51661_SHARP_,/[\/\\]/);
});})(pred__51662,expr__51663))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51662,expr__51663){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51665){if((e51665 instanceof Error)){
var e = e51665;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51665;

}
}})());
});
;})(path_parts,sep,root,pred__51662,expr__51663))
} else {
if(cljs.core.truth_(pred__51662.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51663))){
return ((function (pred__51662,expr__51663){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51662,expr__51663){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51662,expr__51663))
);

return deferred.addErrback(((function (deferred,pred__51662,expr__51663){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51662,expr__51663))
);
});
;})(pred__51662,expr__51663))
} else {
return ((function (pred__51662,expr__51663){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51662,expr__51663))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51666,callback){
var map__51669 = p__51666;
var map__51669__$1 = ((((!((map__51669 == null)))?((((map__51669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51669):map__51669);
var file_msg = map__51669__$1;
var request_url = cljs.core.get.call(null,map__51669__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51669,map__51669__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51669,map__51669__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_51693){
var state_val_51694 = (state_51693[(1)]);
if((state_val_51694 === (7))){
var inst_51689 = (state_51693[(2)]);
var state_51693__$1 = state_51693;
var statearr_51695_51715 = state_51693__$1;
(statearr_51695_51715[(2)] = inst_51689);

(statearr_51695_51715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (1))){
var state_51693__$1 = state_51693;
var statearr_51696_51716 = state_51693__$1;
(statearr_51696_51716[(2)] = null);

(statearr_51696_51716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (4))){
var inst_51673 = (state_51693[(7)]);
var inst_51673__$1 = (state_51693[(2)]);
var state_51693__$1 = (function (){var statearr_51697 = state_51693;
(statearr_51697[(7)] = inst_51673__$1);

return statearr_51697;
})();
if(cljs.core.truth_(inst_51673__$1)){
var statearr_51698_51717 = state_51693__$1;
(statearr_51698_51717[(1)] = (5));

} else {
var statearr_51699_51718 = state_51693__$1;
(statearr_51699_51718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (6))){
var state_51693__$1 = state_51693;
var statearr_51700_51719 = state_51693__$1;
(statearr_51700_51719[(2)] = null);

(statearr_51700_51719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (3))){
var inst_51691 = (state_51693[(2)]);
var state_51693__$1 = state_51693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51693__$1,inst_51691);
} else {
if((state_val_51694 === (2))){
var state_51693__$1 = state_51693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51693__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51694 === (11))){
var inst_51685 = (state_51693[(2)]);
var state_51693__$1 = (function (){var statearr_51701 = state_51693;
(statearr_51701[(8)] = inst_51685);

return statearr_51701;
})();
var statearr_51702_51720 = state_51693__$1;
(statearr_51702_51720[(2)] = null);

(statearr_51702_51720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (9))){
var inst_51677 = (state_51693[(9)]);
var inst_51679 = (state_51693[(10)]);
var inst_51681 = inst_51679.call(null,inst_51677);
var state_51693__$1 = state_51693;
var statearr_51703_51721 = state_51693__$1;
(statearr_51703_51721[(2)] = inst_51681);

(statearr_51703_51721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (5))){
var inst_51673 = (state_51693[(7)]);
var inst_51675 = figwheel.client.file_reloading.blocking_load.call(null,inst_51673);
var state_51693__$1 = state_51693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51693__$1,(8),inst_51675);
} else {
if((state_val_51694 === (10))){
var inst_51677 = (state_51693[(9)]);
var inst_51683 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51677);
var state_51693__$1 = state_51693;
var statearr_51704_51722 = state_51693__$1;
(statearr_51704_51722[(2)] = inst_51683);

(statearr_51704_51722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (8))){
var inst_51679 = (state_51693[(10)]);
var inst_51673 = (state_51693[(7)]);
var inst_51677 = (state_51693[(2)]);
var inst_51678 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51679__$1 = cljs.core.get.call(null,inst_51678,inst_51673);
var state_51693__$1 = (function (){var statearr_51705 = state_51693;
(statearr_51705[(9)] = inst_51677);

(statearr_51705[(10)] = inst_51679__$1);

return statearr_51705;
})();
if(cljs.core.truth_(inst_51679__$1)){
var statearr_51706_51723 = state_51693__$1;
(statearr_51706_51723[(1)] = (9));

} else {
var statearr_51707_51724 = state_51693__$1;
(statearr_51707_51724[(1)] = (10));

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
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__41459__auto__ = null;
var figwheel$client$file_reloading$state_machine__41459__auto____0 = (function (){
var statearr_51711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51711[(0)] = figwheel$client$file_reloading$state_machine__41459__auto__);

(statearr_51711[(1)] = (1));

return statearr_51711;
});
var figwheel$client$file_reloading$state_machine__41459__auto____1 = (function (state_51693){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_51693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e51712){if((e51712 instanceof Object)){
var ex__41462__auto__ = e51712;
var statearr_51713_51725 = state_51693;
(statearr_51713_51725[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51726 = state_51693;
state_51693 = G__51726;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__41459__auto__ = function(state_51693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__41459__auto____1.call(this,state_51693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__41459__auto____0;
figwheel$client$file_reloading$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__41459__auto____1;
return figwheel$client$file_reloading$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_51714 = f__41621__auto__.call(null);
(statearr_51714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_51714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51727,callback){
var map__51730 = p__51727;
var map__51730__$1 = ((((!((map__51730 == null)))?((((map__51730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51730):map__51730);
var file_msg = map__51730__$1;
var namespace = cljs.core.get.call(null,map__51730__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51730,map__51730__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51730,map__51730__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51732){
var map__51735 = p__51732;
var map__51735__$1 = ((((!((map__51735 == null)))?((((map__51735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51735):map__51735);
var file_msg = map__51735__$1;
var namespace = cljs.core.get.call(null,map__51735__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36746__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36746__auto__){
var or__36758__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
var or__36758__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36758__auto____$1)){
return or__36758__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36746__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51737,callback){
var map__51740 = p__51737;
var map__51740__$1 = ((((!((map__51740 == null)))?((((map__51740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51740):map__51740);
var file_msg = map__51740__$1;
var request_url = cljs.core.get.call(null,map__51740__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__41620__auto___51844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___51844,out){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___51844,out){
return (function (state_51826){
var state_val_51827 = (state_51826[(1)]);
if((state_val_51827 === (1))){
var inst_51800 = cljs.core.seq.call(null,files);
var inst_51801 = cljs.core.first.call(null,inst_51800);
var inst_51802 = cljs.core.next.call(null,inst_51800);
var inst_51803 = files;
var state_51826__$1 = (function (){var statearr_51828 = state_51826;
(statearr_51828[(7)] = inst_51802);

(statearr_51828[(8)] = inst_51803);

(statearr_51828[(9)] = inst_51801);

return statearr_51828;
})();
var statearr_51829_51845 = state_51826__$1;
(statearr_51829_51845[(2)] = null);

(statearr_51829_51845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51827 === (2))){
var inst_51803 = (state_51826[(8)]);
var inst_51809 = (state_51826[(10)]);
var inst_51808 = cljs.core.seq.call(null,inst_51803);
var inst_51809__$1 = cljs.core.first.call(null,inst_51808);
var inst_51810 = cljs.core.next.call(null,inst_51808);
var inst_51811 = (inst_51809__$1 == null);
var inst_51812 = cljs.core.not.call(null,inst_51811);
var state_51826__$1 = (function (){var statearr_51830 = state_51826;
(statearr_51830[(11)] = inst_51810);

(statearr_51830[(10)] = inst_51809__$1);

return statearr_51830;
})();
if(inst_51812){
var statearr_51831_51846 = state_51826__$1;
(statearr_51831_51846[(1)] = (4));

} else {
var statearr_51832_51847 = state_51826__$1;
(statearr_51832_51847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51827 === (3))){
var inst_51824 = (state_51826[(2)]);
var state_51826__$1 = state_51826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51826__$1,inst_51824);
} else {
if((state_val_51827 === (4))){
var inst_51809 = (state_51826[(10)]);
var inst_51814 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51809);
var state_51826__$1 = state_51826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51826__$1,(7),inst_51814);
} else {
if((state_val_51827 === (5))){
var inst_51820 = cljs.core.async.close_BANG_.call(null,out);
var state_51826__$1 = state_51826;
var statearr_51833_51848 = state_51826__$1;
(statearr_51833_51848[(2)] = inst_51820);

(statearr_51833_51848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51827 === (6))){
var inst_51822 = (state_51826[(2)]);
var state_51826__$1 = state_51826;
var statearr_51834_51849 = state_51826__$1;
(statearr_51834_51849[(2)] = inst_51822);

(statearr_51834_51849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51827 === (7))){
var inst_51810 = (state_51826[(11)]);
var inst_51816 = (state_51826[(2)]);
var inst_51817 = cljs.core.async.put_BANG_.call(null,out,inst_51816);
var inst_51803 = inst_51810;
var state_51826__$1 = (function (){var statearr_51835 = state_51826;
(statearr_51835[(8)] = inst_51803);

(statearr_51835[(12)] = inst_51817);

return statearr_51835;
})();
var statearr_51836_51850 = state_51826__$1;
(statearr_51836_51850[(2)] = null);

(statearr_51836_51850[(1)] = (2));


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
});})(c__41620__auto___51844,out))
;
return ((function (switch__41458__auto__,c__41620__auto___51844,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto____0 = (function (){
var statearr_51840 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51840[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto__);

(statearr_51840[(1)] = (1));

return statearr_51840;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto____1 = (function (state_51826){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_51826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e51841){if((e51841 instanceof Object)){
var ex__41462__auto__ = e51841;
var statearr_51842_51851 = state_51826;
(statearr_51842_51851[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51852 = state_51826;
state_51826 = G__51852;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto__ = function(state_51826){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto____1.call(this,state_51826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___51844,out))
})();
var state__41622__auto__ = (function (){var statearr_51843 = f__41621__auto__.call(null);
(statearr_51843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___51844);

return statearr_51843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___51844,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51853,opts){
var map__51857 = p__51853;
var map__51857__$1 = ((((!((map__51857 == null)))?((((map__51857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51857):map__51857);
var eval_body__$1 = cljs.core.get.call(null,map__51857__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36746__auto__ = eval_body__$1;
if(cljs.core.truth_(and__36746__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__36746__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51859){var e = e51859;
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
return (function (p1__51860_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51860_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__51869){
var vec__51870 = p__51869;
var k = cljs.core.nth.call(null,vec__51870,(0),null);
var v = cljs.core.nth.call(null,vec__51870,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51873){
var vec__51874 = p__51873;
var k = cljs.core.nth.call(null,vec__51874,(0),null);
var v = cljs.core.nth.call(null,vec__51874,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51880,p__51881){
var map__52128 = p__51880;
var map__52128__$1 = ((((!((map__52128 == null)))?((((map__52128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52128):map__52128);
var opts = map__52128__$1;
var before_jsload = cljs.core.get.call(null,map__52128__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52128__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52128__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52129 = p__51881;
var map__52129__$1 = ((((!((map__52129 == null)))?((((map__52129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52129):map__52129);
var msg = map__52129__$1;
var files = cljs.core.get.call(null,map__52129__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52129__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52129__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52282){
var state_val_52283 = (state_52282[(1)]);
if((state_val_52283 === (7))){
var inst_52145 = (state_52282[(7)]);
var inst_52146 = (state_52282[(8)]);
var inst_52144 = (state_52282[(9)]);
var inst_52143 = (state_52282[(10)]);
var inst_52151 = cljs.core._nth.call(null,inst_52144,inst_52146);
var inst_52152 = figwheel.client.file_reloading.eval_body.call(null,inst_52151,opts);
var inst_52153 = (inst_52146 + (1));
var tmp52284 = inst_52145;
var tmp52285 = inst_52144;
var tmp52286 = inst_52143;
var inst_52143__$1 = tmp52286;
var inst_52144__$1 = tmp52285;
var inst_52145__$1 = tmp52284;
var inst_52146__$1 = inst_52153;
var state_52282__$1 = (function (){var statearr_52287 = state_52282;
(statearr_52287[(11)] = inst_52152);

(statearr_52287[(7)] = inst_52145__$1);

(statearr_52287[(8)] = inst_52146__$1);

(statearr_52287[(9)] = inst_52144__$1);

(statearr_52287[(10)] = inst_52143__$1);

return statearr_52287;
})();
var statearr_52288_52374 = state_52282__$1;
(statearr_52288_52374[(2)] = null);

(statearr_52288_52374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (20))){
var inst_52186 = (state_52282[(12)]);
var inst_52194 = figwheel.client.file_reloading.sort_files.call(null,inst_52186);
var state_52282__$1 = state_52282;
var statearr_52289_52375 = state_52282__$1;
(statearr_52289_52375[(2)] = inst_52194);

(statearr_52289_52375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (27))){
var state_52282__$1 = state_52282;
var statearr_52290_52376 = state_52282__$1;
(statearr_52290_52376[(2)] = null);

(statearr_52290_52376[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (1))){
var inst_52135 = (state_52282[(13)]);
var inst_52132 = before_jsload.call(null,files);
var inst_52133 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52134 = (function (){return ((function (inst_52135,inst_52132,inst_52133,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51877_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51877_SHARP_);
});
;})(inst_52135,inst_52132,inst_52133,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52135__$1 = cljs.core.filter.call(null,inst_52134,files);
var inst_52136 = cljs.core.not_empty.call(null,inst_52135__$1);
var state_52282__$1 = (function (){var statearr_52291 = state_52282;
(statearr_52291[(14)] = inst_52133);

(statearr_52291[(13)] = inst_52135__$1);

(statearr_52291[(15)] = inst_52132);

return statearr_52291;
})();
if(cljs.core.truth_(inst_52136)){
var statearr_52292_52377 = state_52282__$1;
(statearr_52292_52377[(1)] = (2));

} else {
var statearr_52293_52378 = state_52282__$1;
(statearr_52293_52378[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (24))){
var state_52282__$1 = state_52282;
var statearr_52294_52379 = state_52282__$1;
(statearr_52294_52379[(2)] = null);

(statearr_52294_52379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (39))){
var inst_52236 = (state_52282[(16)]);
var state_52282__$1 = state_52282;
var statearr_52295_52380 = state_52282__$1;
(statearr_52295_52380[(2)] = inst_52236);

(statearr_52295_52380[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (46))){
var inst_52277 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
var statearr_52296_52381 = state_52282__$1;
(statearr_52296_52381[(2)] = inst_52277);

(statearr_52296_52381[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (4))){
var inst_52180 = (state_52282[(2)]);
var inst_52181 = cljs.core.List.EMPTY;
var inst_52182 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52181);
var inst_52183 = (function (){return ((function (inst_52180,inst_52181,inst_52182,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51878_SHARP_){
var and__36746__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51878_SHARP_);
if(cljs.core.truth_(and__36746__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51878_SHARP_));
} else {
return and__36746__auto__;
}
});
;})(inst_52180,inst_52181,inst_52182,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52184 = cljs.core.filter.call(null,inst_52183,files);
var inst_52185 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52186 = cljs.core.concat.call(null,inst_52184,inst_52185);
var state_52282__$1 = (function (){var statearr_52297 = state_52282;
(statearr_52297[(17)] = inst_52182);

(statearr_52297[(12)] = inst_52186);

(statearr_52297[(18)] = inst_52180);

return statearr_52297;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52298_52382 = state_52282__$1;
(statearr_52298_52382[(1)] = (16));

} else {
var statearr_52299_52383 = state_52282__$1;
(statearr_52299_52383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (15))){
var inst_52170 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
var statearr_52300_52384 = state_52282__$1;
(statearr_52300_52384[(2)] = inst_52170);

(statearr_52300_52384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (21))){
var inst_52196 = (state_52282[(19)]);
var inst_52196__$1 = (state_52282[(2)]);
var inst_52197 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52196__$1);
var state_52282__$1 = (function (){var statearr_52301 = state_52282;
(statearr_52301[(19)] = inst_52196__$1);

return statearr_52301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52282__$1,(22),inst_52197);
} else {
if((state_val_52283 === (31))){
var inst_52280 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52282__$1,inst_52280);
} else {
if((state_val_52283 === (32))){
var inst_52236 = (state_52282[(16)]);
var inst_52241 = inst_52236.cljs$lang$protocol_mask$partition0$;
var inst_52242 = (inst_52241 & (64));
var inst_52243 = inst_52236.cljs$core$ISeq$;
var inst_52244 = (inst_52242) || (inst_52243);
var state_52282__$1 = state_52282;
if(cljs.core.truth_(inst_52244)){
var statearr_52302_52385 = state_52282__$1;
(statearr_52302_52385[(1)] = (35));

} else {
var statearr_52303_52386 = state_52282__$1;
(statearr_52303_52386[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (40))){
var inst_52257 = (state_52282[(20)]);
var inst_52256 = (state_52282[(2)]);
var inst_52257__$1 = cljs.core.get.call(null,inst_52256,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52258 = cljs.core.get.call(null,inst_52256,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52259 = cljs.core.not_empty.call(null,inst_52257__$1);
var state_52282__$1 = (function (){var statearr_52304 = state_52282;
(statearr_52304[(20)] = inst_52257__$1);

(statearr_52304[(21)] = inst_52258);

return statearr_52304;
})();
if(cljs.core.truth_(inst_52259)){
var statearr_52305_52387 = state_52282__$1;
(statearr_52305_52387[(1)] = (41));

} else {
var statearr_52306_52388 = state_52282__$1;
(statearr_52306_52388[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (33))){
var state_52282__$1 = state_52282;
var statearr_52307_52389 = state_52282__$1;
(statearr_52307_52389[(2)] = false);

(statearr_52307_52389[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (13))){
var inst_52156 = (state_52282[(22)]);
var inst_52160 = cljs.core.chunk_first.call(null,inst_52156);
var inst_52161 = cljs.core.chunk_rest.call(null,inst_52156);
var inst_52162 = cljs.core.count.call(null,inst_52160);
var inst_52143 = inst_52161;
var inst_52144 = inst_52160;
var inst_52145 = inst_52162;
var inst_52146 = (0);
var state_52282__$1 = (function (){var statearr_52308 = state_52282;
(statearr_52308[(7)] = inst_52145);

(statearr_52308[(8)] = inst_52146);

(statearr_52308[(9)] = inst_52144);

(statearr_52308[(10)] = inst_52143);

return statearr_52308;
})();
var statearr_52309_52390 = state_52282__$1;
(statearr_52309_52390[(2)] = null);

(statearr_52309_52390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (22))){
var inst_52199 = (state_52282[(23)]);
var inst_52200 = (state_52282[(24)]);
var inst_52196 = (state_52282[(19)]);
var inst_52204 = (state_52282[(25)]);
var inst_52199__$1 = (state_52282[(2)]);
var inst_52200__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52199__$1);
var inst_52201 = (function (){var all_files = inst_52196;
var res_SINGLEQUOTE_ = inst_52199__$1;
var res = inst_52200__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52199,inst_52200,inst_52196,inst_52204,inst_52199__$1,inst_52200__$1,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51879_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51879_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52199,inst_52200,inst_52196,inst_52204,inst_52199__$1,inst_52200__$1,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52202 = cljs.core.filter.call(null,inst_52201,inst_52199__$1);
var inst_52203 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52204__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52203);
var inst_52205 = cljs.core.not_empty.call(null,inst_52204__$1);
var state_52282__$1 = (function (){var statearr_52310 = state_52282;
(statearr_52310[(23)] = inst_52199__$1);

(statearr_52310[(26)] = inst_52202);

(statearr_52310[(24)] = inst_52200__$1);

(statearr_52310[(25)] = inst_52204__$1);

return statearr_52310;
})();
if(cljs.core.truth_(inst_52205)){
var statearr_52311_52391 = state_52282__$1;
(statearr_52311_52391[(1)] = (23));

} else {
var statearr_52312_52392 = state_52282__$1;
(statearr_52312_52392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (36))){
var state_52282__$1 = state_52282;
var statearr_52313_52393 = state_52282__$1;
(statearr_52313_52393[(2)] = false);

(statearr_52313_52393[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (41))){
var inst_52257 = (state_52282[(20)]);
var inst_52261 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52262 = cljs.core.map.call(null,inst_52261,inst_52257);
var inst_52263 = cljs.core.pr_str.call(null,inst_52262);
var inst_52264 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52263)].join('');
var inst_52265 = figwheel.client.utils.log.call(null,inst_52264);
var state_52282__$1 = state_52282;
var statearr_52314_52394 = state_52282__$1;
(statearr_52314_52394[(2)] = inst_52265);

(statearr_52314_52394[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (43))){
var inst_52258 = (state_52282[(21)]);
var inst_52268 = (state_52282[(2)]);
var inst_52269 = cljs.core.not_empty.call(null,inst_52258);
var state_52282__$1 = (function (){var statearr_52315 = state_52282;
(statearr_52315[(27)] = inst_52268);

return statearr_52315;
})();
if(cljs.core.truth_(inst_52269)){
var statearr_52316_52395 = state_52282__$1;
(statearr_52316_52395[(1)] = (44));

} else {
var statearr_52317_52396 = state_52282__$1;
(statearr_52317_52396[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (29))){
var inst_52236 = (state_52282[(16)]);
var inst_52199 = (state_52282[(23)]);
var inst_52202 = (state_52282[(26)]);
var inst_52200 = (state_52282[(24)]);
var inst_52196 = (state_52282[(19)]);
var inst_52204 = (state_52282[(25)]);
var inst_52232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52235 = (function (){var all_files = inst_52196;
var res_SINGLEQUOTE_ = inst_52199;
var res = inst_52200;
var files_not_loaded = inst_52202;
var dependencies_that_loaded = inst_52204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52236,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52232,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52234){
var map__52318 = p__52234;
var map__52318__$1 = ((((!((map__52318 == null)))?((((map__52318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52318):map__52318);
var namespace = cljs.core.get.call(null,map__52318__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52236,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52232,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52236__$1 = cljs.core.group_by.call(null,inst_52235,inst_52202);
var inst_52238 = (inst_52236__$1 == null);
var inst_52239 = cljs.core.not.call(null,inst_52238);
var state_52282__$1 = (function (){var statearr_52320 = state_52282;
(statearr_52320[(28)] = inst_52232);

(statearr_52320[(16)] = inst_52236__$1);

return statearr_52320;
})();
if(inst_52239){
var statearr_52321_52397 = state_52282__$1;
(statearr_52321_52397[(1)] = (32));

} else {
var statearr_52322_52398 = state_52282__$1;
(statearr_52322_52398[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (44))){
var inst_52258 = (state_52282[(21)]);
var inst_52271 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52258);
var inst_52272 = cljs.core.pr_str.call(null,inst_52271);
var inst_52273 = [cljs.core.str("not required: "),cljs.core.str(inst_52272)].join('');
var inst_52274 = figwheel.client.utils.log.call(null,inst_52273);
var state_52282__$1 = state_52282;
var statearr_52323_52399 = state_52282__$1;
(statearr_52323_52399[(2)] = inst_52274);

(statearr_52323_52399[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (6))){
var inst_52177 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
var statearr_52324_52400 = state_52282__$1;
(statearr_52324_52400[(2)] = inst_52177);

(statearr_52324_52400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (28))){
var inst_52202 = (state_52282[(26)]);
var inst_52229 = (state_52282[(2)]);
var inst_52230 = cljs.core.not_empty.call(null,inst_52202);
var state_52282__$1 = (function (){var statearr_52325 = state_52282;
(statearr_52325[(29)] = inst_52229);

return statearr_52325;
})();
if(cljs.core.truth_(inst_52230)){
var statearr_52326_52401 = state_52282__$1;
(statearr_52326_52401[(1)] = (29));

} else {
var statearr_52327_52402 = state_52282__$1;
(statearr_52327_52402[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (25))){
var inst_52200 = (state_52282[(24)]);
var inst_52216 = (state_52282[(2)]);
var inst_52217 = cljs.core.not_empty.call(null,inst_52200);
var state_52282__$1 = (function (){var statearr_52328 = state_52282;
(statearr_52328[(30)] = inst_52216);

return statearr_52328;
})();
if(cljs.core.truth_(inst_52217)){
var statearr_52329_52403 = state_52282__$1;
(statearr_52329_52403[(1)] = (26));

} else {
var statearr_52330_52404 = state_52282__$1;
(statearr_52330_52404[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (34))){
var inst_52251 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
if(cljs.core.truth_(inst_52251)){
var statearr_52331_52405 = state_52282__$1;
(statearr_52331_52405[(1)] = (38));

} else {
var statearr_52332_52406 = state_52282__$1;
(statearr_52332_52406[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (17))){
var state_52282__$1 = state_52282;
var statearr_52333_52407 = state_52282__$1;
(statearr_52333_52407[(2)] = recompile_dependents);

(statearr_52333_52407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (3))){
var state_52282__$1 = state_52282;
var statearr_52334_52408 = state_52282__$1;
(statearr_52334_52408[(2)] = null);

(statearr_52334_52408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (12))){
var inst_52173 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
var statearr_52335_52409 = state_52282__$1;
(statearr_52335_52409[(2)] = inst_52173);

(statearr_52335_52409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (2))){
var inst_52135 = (state_52282[(13)]);
var inst_52142 = cljs.core.seq.call(null,inst_52135);
var inst_52143 = inst_52142;
var inst_52144 = null;
var inst_52145 = (0);
var inst_52146 = (0);
var state_52282__$1 = (function (){var statearr_52336 = state_52282;
(statearr_52336[(7)] = inst_52145);

(statearr_52336[(8)] = inst_52146);

(statearr_52336[(9)] = inst_52144);

(statearr_52336[(10)] = inst_52143);

return statearr_52336;
})();
var statearr_52337_52410 = state_52282__$1;
(statearr_52337_52410[(2)] = null);

(statearr_52337_52410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (23))){
var inst_52199 = (state_52282[(23)]);
var inst_52202 = (state_52282[(26)]);
var inst_52200 = (state_52282[(24)]);
var inst_52196 = (state_52282[(19)]);
var inst_52204 = (state_52282[(25)]);
var inst_52207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52209 = (function (){var all_files = inst_52196;
var res_SINGLEQUOTE_ = inst_52199;
var res = inst_52200;
var files_not_loaded = inst_52202;
var dependencies_that_loaded = inst_52204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52207,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52208){
var map__52338 = p__52208;
var map__52338__$1 = ((((!((map__52338 == null)))?((((map__52338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52338):map__52338);
var request_url = cljs.core.get.call(null,map__52338__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52207,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52210 = cljs.core.reverse.call(null,inst_52204);
var inst_52211 = cljs.core.map.call(null,inst_52209,inst_52210);
var inst_52212 = cljs.core.pr_str.call(null,inst_52211);
var inst_52213 = figwheel.client.utils.log.call(null,inst_52212);
var state_52282__$1 = (function (){var statearr_52340 = state_52282;
(statearr_52340[(31)] = inst_52207);

return statearr_52340;
})();
var statearr_52341_52411 = state_52282__$1;
(statearr_52341_52411[(2)] = inst_52213);

(statearr_52341_52411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (35))){
var state_52282__$1 = state_52282;
var statearr_52342_52412 = state_52282__$1;
(statearr_52342_52412[(2)] = true);

(statearr_52342_52412[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (19))){
var inst_52186 = (state_52282[(12)]);
var inst_52192 = figwheel.client.file_reloading.expand_files.call(null,inst_52186);
var state_52282__$1 = state_52282;
var statearr_52343_52413 = state_52282__$1;
(statearr_52343_52413[(2)] = inst_52192);

(statearr_52343_52413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (11))){
var state_52282__$1 = state_52282;
var statearr_52344_52414 = state_52282__$1;
(statearr_52344_52414[(2)] = null);

(statearr_52344_52414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (9))){
var inst_52175 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
var statearr_52345_52415 = state_52282__$1;
(statearr_52345_52415[(2)] = inst_52175);

(statearr_52345_52415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (5))){
var inst_52145 = (state_52282[(7)]);
var inst_52146 = (state_52282[(8)]);
var inst_52148 = (inst_52146 < inst_52145);
var inst_52149 = inst_52148;
var state_52282__$1 = state_52282;
if(cljs.core.truth_(inst_52149)){
var statearr_52346_52416 = state_52282__$1;
(statearr_52346_52416[(1)] = (7));

} else {
var statearr_52347_52417 = state_52282__$1;
(statearr_52347_52417[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (14))){
var inst_52156 = (state_52282[(22)]);
var inst_52165 = cljs.core.first.call(null,inst_52156);
var inst_52166 = figwheel.client.file_reloading.eval_body.call(null,inst_52165,opts);
var inst_52167 = cljs.core.next.call(null,inst_52156);
var inst_52143 = inst_52167;
var inst_52144 = null;
var inst_52145 = (0);
var inst_52146 = (0);
var state_52282__$1 = (function (){var statearr_52348 = state_52282;
(statearr_52348[(7)] = inst_52145);

(statearr_52348[(32)] = inst_52166);

(statearr_52348[(8)] = inst_52146);

(statearr_52348[(9)] = inst_52144);

(statearr_52348[(10)] = inst_52143);

return statearr_52348;
})();
var statearr_52349_52418 = state_52282__$1;
(statearr_52349_52418[(2)] = null);

(statearr_52349_52418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (45))){
var state_52282__$1 = state_52282;
var statearr_52350_52419 = state_52282__$1;
(statearr_52350_52419[(2)] = null);

(statearr_52350_52419[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (26))){
var inst_52199 = (state_52282[(23)]);
var inst_52202 = (state_52282[(26)]);
var inst_52200 = (state_52282[(24)]);
var inst_52196 = (state_52282[(19)]);
var inst_52204 = (state_52282[(25)]);
var inst_52219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52221 = (function (){var all_files = inst_52196;
var res_SINGLEQUOTE_ = inst_52199;
var res = inst_52200;
var files_not_loaded = inst_52202;
var dependencies_that_loaded = inst_52204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52219,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52220){
var map__52351 = p__52220;
var map__52351__$1 = ((((!((map__52351 == null)))?((((map__52351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52351):map__52351);
var namespace = cljs.core.get.call(null,map__52351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52219,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52222 = cljs.core.map.call(null,inst_52221,inst_52200);
var inst_52223 = cljs.core.pr_str.call(null,inst_52222);
var inst_52224 = figwheel.client.utils.log.call(null,inst_52223);
var inst_52225 = (function (){var all_files = inst_52196;
var res_SINGLEQUOTE_ = inst_52199;
var res = inst_52200;
var files_not_loaded = inst_52202;
var dependencies_that_loaded = inst_52204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52219,inst_52221,inst_52222,inst_52223,inst_52224,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52199,inst_52202,inst_52200,inst_52196,inst_52204,inst_52219,inst_52221,inst_52222,inst_52223,inst_52224,state_val_52283,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52226 = setTimeout(inst_52225,(10));
var state_52282__$1 = (function (){var statearr_52353 = state_52282;
(statearr_52353[(33)] = inst_52224);

(statearr_52353[(34)] = inst_52219);

return statearr_52353;
})();
var statearr_52354_52420 = state_52282__$1;
(statearr_52354_52420[(2)] = inst_52226);

(statearr_52354_52420[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (16))){
var state_52282__$1 = state_52282;
var statearr_52355_52421 = state_52282__$1;
(statearr_52355_52421[(2)] = reload_dependents);

(statearr_52355_52421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (38))){
var inst_52236 = (state_52282[(16)]);
var inst_52253 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52236);
var state_52282__$1 = state_52282;
var statearr_52356_52422 = state_52282__$1;
(statearr_52356_52422[(2)] = inst_52253);

(statearr_52356_52422[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (30))){
var state_52282__$1 = state_52282;
var statearr_52357_52423 = state_52282__$1;
(statearr_52357_52423[(2)] = null);

(statearr_52357_52423[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (10))){
var inst_52156 = (state_52282[(22)]);
var inst_52158 = cljs.core.chunked_seq_QMARK_.call(null,inst_52156);
var state_52282__$1 = state_52282;
if(inst_52158){
var statearr_52358_52424 = state_52282__$1;
(statearr_52358_52424[(1)] = (13));

} else {
var statearr_52359_52425 = state_52282__$1;
(statearr_52359_52425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (18))){
var inst_52190 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
if(cljs.core.truth_(inst_52190)){
var statearr_52360_52426 = state_52282__$1;
(statearr_52360_52426[(1)] = (19));

} else {
var statearr_52361_52427 = state_52282__$1;
(statearr_52361_52427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (42))){
var state_52282__$1 = state_52282;
var statearr_52362_52428 = state_52282__$1;
(statearr_52362_52428[(2)] = null);

(statearr_52362_52428[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (37))){
var inst_52248 = (state_52282[(2)]);
var state_52282__$1 = state_52282;
var statearr_52363_52429 = state_52282__$1;
(statearr_52363_52429[(2)] = inst_52248);

(statearr_52363_52429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52283 === (8))){
var inst_52143 = (state_52282[(10)]);
var inst_52156 = (state_52282[(22)]);
var inst_52156__$1 = cljs.core.seq.call(null,inst_52143);
var state_52282__$1 = (function (){var statearr_52364 = state_52282;
(statearr_52364[(22)] = inst_52156__$1);

return statearr_52364;
})();
if(inst_52156__$1){
var statearr_52365_52430 = state_52282__$1;
(statearr_52365_52430[(1)] = (10));

} else {
var statearr_52366_52431 = state_52282__$1;
(statearr_52366_52431[(1)] = (11));

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
});})(c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__41458__auto__,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto____0 = (function (){
var statearr_52370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52370[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto__);

(statearr_52370[(1)] = (1));

return statearr_52370;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto____1 = (function (state_52282){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_52282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e52371){if((e52371 instanceof Object)){
var ex__41462__auto__ = e52371;
var statearr_52372_52432 = state_52282;
(statearr_52372_52432[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52433 = state_52282;
state_52282 = G__52433;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto__ = function(state_52282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto____1.call(this,state_52282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__41622__auto__ = (function (){var statearr_52373 = f__41621__auto__.call(null);
(statearr_52373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_52373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,map__52128,map__52128__$1,opts,before_jsload,on_jsload,reload_dependents,map__52129,map__52129__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__41620__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52436,link){
var map__52439 = p__52436;
var map__52439__$1 = ((((!((map__52439 == null)))?((((map__52439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52439):map__52439);
var file = cljs.core.get.call(null,map__52439__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52439,map__52439__$1,file){
return (function (p1__52434_SHARP_,p2__52435_SHARP_){
if(cljs.core._EQ_.call(null,p1__52434_SHARP_,p2__52435_SHARP_)){
return p1__52434_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52439,map__52439__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52445){
var map__52446 = p__52445;
var map__52446__$1 = ((((!((map__52446 == null)))?((((map__52446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52446):map__52446);
var match_length = cljs.core.get.call(null,map__52446__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52446__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52441_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52441_SHARP_);
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
var args52448 = [];
var len__37833__auto___52451 = arguments.length;
var i__37834__auto___52452 = (0);
while(true){
if((i__37834__auto___52452 < len__37833__auto___52451)){
args52448.push((arguments[i__37834__auto___52452]));

var G__52453 = (i__37834__auto___52452 + (1));
i__37834__auto___52452 = G__52453;
continue;
} else {
}
break;
}

var G__52450 = args52448.length;
switch (G__52450) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52448.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52455_SHARP_,p2__52456_SHARP_){
return cljs.core.assoc.call(null,p1__52455_SHARP_,cljs.core.get.call(null,p2__52456_SHARP_,key),p2__52456_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52457){
var map__52460 = p__52457;
var map__52460__$1 = ((((!((map__52460 == null)))?((((map__52460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52460):map__52460);
var f_data = map__52460__$1;
var file = cljs.core.get.call(null,map__52460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52462,p__52463){
var map__52472 = p__52462;
var map__52472__$1 = ((((!((map__52472 == null)))?((((map__52472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52472):map__52472);
var opts = map__52472__$1;
var on_cssload = cljs.core.get.call(null,map__52472__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52473 = p__52463;
var map__52473__$1 = ((((!((map__52473 == null)))?((((map__52473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52473):map__52473);
var files_msg = map__52473__$1;
var files = cljs.core.get.call(null,map__52473__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52476_52480 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52477_52481 = null;
var count__52478_52482 = (0);
var i__52479_52483 = (0);
while(true){
if((i__52479_52483 < count__52478_52482)){
var f_52484 = cljs.core._nth.call(null,chunk__52477_52481,i__52479_52483);
figwheel.client.file_reloading.reload_css_file.call(null,f_52484);

var G__52485 = seq__52476_52480;
var G__52486 = chunk__52477_52481;
var G__52487 = count__52478_52482;
var G__52488 = (i__52479_52483 + (1));
seq__52476_52480 = G__52485;
chunk__52477_52481 = G__52486;
count__52478_52482 = G__52487;
i__52479_52483 = G__52488;
continue;
} else {
var temp__4657__auto___52489 = cljs.core.seq.call(null,seq__52476_52480);
if(temp__4657__auto___52489){
var seq__52476_52490__$1 = temp__4657__auto___52489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52476_52490__$1)){
var c__37569__auto___52491 = cljs.core.chunk_first.call(null,seq__52476_52490__$1);
var G__52492 = cljs.core.chunk_rest.call(null,seq__52476_52490__$1);
var G__52493 = c__37569__auto___52491;
var G__52494 = cljs.core.count.call(null,c__37569__auto___52491);
var G__52495 = (0);
seq__52476_52480 = G__52492;
chunk__52477_52481 = G__52493;
count__52478_52482 = G__52494;
i__52479_52483 = G__52495;
continue;
} else {
var f_52496 = cljs.core.first.call(null,seq__52476_52490__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52496);

var G__52497 = cljs.core.next.call(null,seq__52476_52490__$1);
var G__52498 = null;
var G__52499 = (0);
var G__52500 = (0);
seq__52476_52480 = G__52497;
chunk__52477_52481 = G__52498;
count__52478_52482 = G__52499;
i__52479_52483 = G__52500;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52472,map__52472__$1,opts,on_cssload,map__52473,map__52473__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52472,map__52472__$1,opts,on_cssload,map__52473,map__52473__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map