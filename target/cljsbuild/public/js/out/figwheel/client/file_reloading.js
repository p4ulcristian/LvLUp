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
var or__36776__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36776__auto__){
return or__36776__auto__;
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
var or__36776__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51551_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51551_SHARP_));
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
var seq__51556 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51557 = null;
var count__51558 = (0);
var i__51559 = (0);
while(true){
if((i__51559 < count__51558)){
var n = cljs.core._nth.call(null,chunk__51557,i__51559);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51560 = seq__51556;
var G__51561 = chunk__51557;
var G__51562 = count__51558;
var G__51563 = (i__51559 + (1));
seq__51556 = G__51560;
chunk__51557 = G__51561;
count__51558 = G__51562;
i__51559 = G__51563;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51556);
if(temp__4657__auto__){
var seq__51556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51556__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__51556__$1);
var G__51564 = cljs.core.chunk_rest.call(null,seq__51556__$1);
var G__51565 = c__37587__auto__;
var G__51566 = cljs.core.count.call(null,c__37587__auto__);
var G__51567 = (0);
seq__51556 = G__51564;
chunk__51557 = G__51565;
count__51558 = G__51566;
i__51559 = G__51567;
continue;
} else {
var n = cljs.core.first.call(null,seq__51556__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51568 = cljs.core.next.call(null,seq__51556__$1);
var G__51569 = null;
var G__51570 = (0);
var G__51571 = (0);
seq__51556 = G__51568;
chunk__51557 = G__51569;
count__51558 = G__51570;
i__51559 = G__51571;
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

var seq__51622_51633 = cljs.core.seq.call(null,deps);
var chunk__51623_51634 = null;
var count__51624_51635 = (0);
var i__51625_51636 = (0);
while(true){
if((i__51625_51636 < count__51624_51635)){
var dep_51637 = cljs.core._nth.call(null,chunk__51623_51634,i__51625_51636);
topo_sort_helper_STAR_.call(null,dep_51637,(depth + (1)),state);

var G__51638 = seq__51622_51633;
var G__51639 = chunk__51623_51634;
var G__51640 = count__51624_51635;
var G__51641 = (i__51625_51636 + (1));
seq__51622_51633 = G__51638;
chunk__51623_51634 = G__51639;
count__51624_51635 = G__51640;
i__51625_51636 = G__51641;
continue;
} else {
var temp__4657__auto___51642 = cljs.core.seq.call(null,seq__51622_51633);
if(temp__4657__auto___51642){
var seq__51622_51643__$1 = temp__4657__auto___51642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51622_51643__$1)){
var c__37587__auto___51644 = cljs.core.chunk_first.call(null,seq__51622_51643__$1);
var G__51645 = cljs.core.chunk_rest.call(null,seq__51622_51643__$1);
var G__51646 = c__37587__auto___51644;
var G__51647 = cljs.core.count.call(null,c__37587__auto___51644);
var G__51648 = (0);
seq__51622_51633 = G__51645;
chunk__51623_51634 = G__51646;
count__51624_51635 = G__51647;
i__51625_51636 = G__51648;
continue;
} else {
var dep_51649 = cljs.core.first.call(null,seq__51622_51643__$1);
topo_sort_helper_STAR_.call(null,dep_51649,(depth + (1)),state);

var G__51650 = cljs.core.next.call(null,seq__51622_51643__$1);
var G__51651 = null;
var G__51652 = (0);
var G__51653 = (0);
seq__51622_51633 = G__51650;
chunk__51623_51634 = G__51651;
count__51624_51635 = G__51652;
i__51625_51636 = G__51653;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51626){
var vec__51630 = p__51626;
var seq__51631 = cljs.core.seq.call(null,vec__51630);
var first__51632 = cljs.core.first.call(null,seq__51631);
var seq__51631__$1 = cljs.core.next.call(null,seq__51631);
var x = first__51632;
var xs = seq__51631__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51630,seq__51631,first__51632,seq__51631__$1,x,xs,get_deps__$1){
return (function (p1__51572_SHARP_){
return clojure.set.difference.call(null,p1__51572_SHARP_,x);
});})(vec__51630,seq__51631,first__51632,seq__51631__$1,x,xs,get_deps__$1))
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
var seq__51666 = cljs.core.seq.call(null,provides);
var chunk__51667 = null;
var count__51668 = (0);
var i__51669 = (0);
while(true){
if((i__51669 < count__51668)){
var prov = cljs.core._nth.call(null,chunk__51667,i__51669);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51670_51678 = cljs.core.seq.call(null,requires);
var chunk__51671_51679 = null;
var count__51672_51680 = (0);
var i__51673_51681 = (0);
while(true){
if((i__51673_51681 < count__51672_51680)){
var req_51682 = cljs.core._nth.call(null,chunk__51671_51679,i__51673_51681);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51682,prov);

var G__51683 = seq__51670_51678;
var G__51684 = chunk__51671_51679;
var G__51685 = count__51672_51680;
var G__51686 = (i__51673_51681 + (1));
seq__51670_51678 = G__51683;
chunk__51671_51679 = G__51684;
count__51672_51680 = G__51685;
i__51673_51681 = G__51686;
continue;
} else {
var temp__4657__auto___51687 = cljs.core.seq.call(null,seq__51670_51678);
if(temp__4657__auto___51687){
var seq__51670_51688__$1 = temp__4657__auto___51687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51670_51688__$1)){
var c__37587__auto___51689 = cljs.core.chunk_first.call(null,seq__51670_51688__$1);
var G__51690 = cljs.core.chunk_rest.call(null,seq__51670_51688__$1);
var G__51691 = c__37587__auto___51689;
var G__51692 = cljs.core.count.call(null,c__37587__auto___51689);
var G__51693 = (0);
seq__51670_51678 = G__51690;
chunk__51671_51679 = G__51691;
count__51672_51680 = G__51692;
i__51673_51681 = G__51693;
continue;
} else {
var req_51694 = cljs.core.first.call(null,seq__51670_51688__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51694,prov);

var G__51695 = cljs.core.next.call(null,seq__51670_51688__$1);
var G__51696 = null;
var G__51697 = (0);
var G__51698 = (0);
seq__51670_51678 = G__51695;
chunk__51671_51679 = G__51696;
count__51672_51680 = G__51697;
i__51673_51681 = G__51698;
continue;
}
} else {
}
}
break;
}

var G__51699 = seq__51666;
var G__51700 = chunk__51667;
var G__51701 = count__51668;
var G__51702 = (i__51669 + (1));
seq__51666 = G__51699;
chunk__51667 = G__51700;
count__51668 = G__51701;
i__51669 = G__51702;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51666);
if(temp__4657__auto__){
var seq__51666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51666__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__51666__$1);
var G__51703 = cljs.core.chunk_rest.call(null,seq__51666__$1);
var G__51704 = c__37587__auto__;
var G__51705 = cljs.core.count.call(null,c__37587__auto__);
var G__51706 = (0);
seq__51666 = G__51703;
chunk__51667 = G__51704;
count__51668 = G__51705;
i__51669 = G__51706;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51666__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51674_51707 = cljs.core.seq.call(null,requires);
var chunk__51675_51708 = null;
var count__51676_51709 = (0);
var i__51677_51710 = (0);
while(true){
if((i__51677_51710 < count__51676_51709)){
var req_51711 = cljs.core._nth.call(null,chunk__51675_51708,i__51677_51710);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51711,prov);

var G__51712 = seq__51674_51707;
var G__51713 = chunk__51675_51708;
var G__51714 = count__51676_51709;
var G__51715 = (i__51677_51710 + (1));
seq__51674_51707 = G__51712;
chunk__51675_51708 = G__51713;
count__51676_51709 = G__51714;
i__51677_51710 = G__51715;
continue;
} else {
var temp__4657__auto___51716__$1 = cljs.core.seq.call(null,seq__51674_51707);
if(temp__4657__auto___51716__$1){
var seq__51674_51717__$1 = temp__4657__auto___51716__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51674_51717__$1)){
var c__37587__auto___51718 = cljs.core.chunk_first.call(null,seq__51674_51717__$1);
var G__51719 = cljs.core.chunk_rest.call(null,seq__51674_51717__$1);
var G__51720 = c__37587__auto___51718;
var G__51721 = cljs.core.count.call(null,c__37587__auto___51718);
var G__51722 = (0);
seq__51674_51707 = G__51719;
chunk__51675_51708 = G__51720;
count__51676_51709 = G__51721;
i__51677_51710 = G__51722;
continue;
} else {
var req_51723 = cljs.core.first.call(null,seq__51674_51717__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51723,prov);

var G__51724 = cljs.core.next.call(null,seq__51674_51717__$1);
var G__51725 = null;
var G__51726 = (0);
var G__51727 = (0);
seq__51674_51707 = G__51724;
chunk__51675_51708 = G__51725;
count__51676_51709 = G__51726;
i__51677_51710 = G__51727;
continue;
}
} else {
}
}
break;
}

var G__51728 = cljs.core.next.call(null,seq__51666__$1);
var G__51729 = null;
var G__51730 = (0);
var G__51731 = (0);
seq__51666 = G__51728;
chunk__51667 = G__51729;
count__51668 = G__51730;
i__51669 = G__51731;
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
var seq__51736_51740 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51737_51741 = null;
var count__51738_51742 = (0);
var i__51739_51743 = (0);
while(true){
if((i__51739_51743 < count__51738_51742)){
var ns_51744 = cljs.core._nth.call(null,chunk__51737_51741,i__51739_51743);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51744);

var G__51745 = seq__51736_51740;
var G__51746 = chunk__51737_51741;
var G__51747 = count__51738_51742;
var G__51748 = (i__51739_51743 + (1));
seq__51736_51740 = G__51745;
chunk__51737_51741 = G__51746;
count__51738_51742 = G__51747;
i__51739_51743 = G__51748;
continue;
} else {
var temp__4657__auto___51749 = cljs.core.seq.call(null,seq__51736_51740);
if(temp__4657__auto___51749){
var seq__51736_51750__$1 = temp__4657__auto___51749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51736_51750__$1)){
var c__37587__auto___51751 = cljs.core.chunk_first.call(null,seq__51736_51750__$1);
var G__51752 = cljs.core.chunk_rest.call(null,seq__51736_51750__$1);
var G__51753 = c__37587__auto___51751;
var G__51754 = cljs.core.count.call(null,c__37587__auto___51751);
var G__51755 = (0);
seq__51736_51740 = G__51752;
chunk__51737_51741 = G__51753;
count__51738_51742 = G__51754;
i__51739_51743 = G__51755;
continue;
} else {
var ns_51756 = cljs.core.first.call(null,seq__51736_51750__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51756);

var G__51757 = cljs.core.next.call(null,seq__51736_51750__$1);
var G__51758 = null;
var G__51759 = (0);
var G__51760 = (0);
seq__51736_51740 = G__51757;
chunk__51737_51741 = G__51758;
count__51738_51742 = G__51759;
i__51739_51743 = G__51760;
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
goog.require_figwheel_backup_ = (function (){var or__36776__auto__ = goog.require__;
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
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
var G__51761__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51762__i = 0, G__51762__a = new Array(arguments.length -  0);
while (G__51762__i < G__51762__a.length) {G__51762__a[G__51762__i] = arguments[G__51762__i + 0]; ++G__51762__i;}
  args = new cljs.core.IndexedSeq(G__51762__a,0);
} 
return G__51761__delegate.call(this,args);};
G__51761.cljs$lang$maxFixedArity = 0;
G__51761.cljs$lang$applyTo = (function (arglist__51763){
var args = cljs.core.seq(arglist__51763);
return G__51761__delegate(args);
});
G__51761.cljs$core$IFn$_invoke$arity$variadic = G__51761__delegate;
return G__51761;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51765 = cljs.core._EQ_;
var expr__51766 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51765.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51766))){
var path_parts = ((function (pred__51765,expr__51766){
return (function (p1__51764_SHARP_){
return clojure.string.split.call(null,p1__51764_SHARP_,/[\/\\]/);
});})(pred__51765,expr__51766))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51765,expr__51766){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51768){if((e51768 instanceof Error)){
var e = e51768;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51768;

}
}})());
});
;})(path_parts,sep,root,pred__51765,expr__51766))
} else {
if(cljs.core.truth_(pred__51765.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51766))){
return ((function (pred__51765,expr__51766){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51765,expr__51766){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51765,expr__51766))
);

return deferred.addErrback(((function (deferred,pred__51765,expr__51766){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51765,expr__51766))
);
});
;})(pred__51765,expr__51766))
} else {
return ((function (pred__51765,expr__51766){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51765,expr__51766))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51769,callback){
var map__51772 = p__51769;
var map__51772__$1 = ((((!((map__51772 == null)))?((((map__51772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51772):map__51772);
var file_msg = map__51772__$1;
var request_url = cljs.core.get.call(null,map__51772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51772,map__51772__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51772,map__51772__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__){
return (function (state_51796){
var state_val_51797 = (state_51796[(1)]);
if((state_val_51797 === (7))){
var inst_51792 = (state_51796[(2)]);
var state_51796__$1 = state_51796;
var statearr_51798_51818 = state_51796__$1;
(statearr_51798_51818[(2)] = inst_51792);

(statearr_51798_51818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51797 === (1))){
var state_51796__$1 = state_51796;
var statearr_51799_51819 = state_51796__$1;
(statearr_51799_51819[(2)] = null);

(statearr_51799_51819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51797 === (4))){
var inst_51776 = (state_51796[(7)]);
var inst_51776__$1 = (state_51796[(2)]);
var state_51796__$1 = (function (){var statearr_51800 = state_51796;
(statearr_51800[(7)] = inst_51776__$1);

return statearr_51800;
})();
if(cljs.core.truth_(inst_51776__$1)){
var statearr_51801_51820 = state_51796__$1;
(statearr_51801_51820[(1)] = (5));

} else {
var statearr_51802_51821 = state_51796__$1;
(statearr_51802_51821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51797 === (6))){
var state_51796__$1 = state_51796;
var statearr_51803_51822 = state_51796__$1;
(statearr_51803_51822[(2)] = null);

(statearr_51803_51822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51797 === (3))){
var inst_51794 = (state_51796[(2)]);
var state_51796__$1 = state_51796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51796__$1,inst_51794);
} else {
if((state_val_51797 === (2))){
var state_51796__$1 = state_51796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51796__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51797 === (11))){
var inst_51788 = (state_51796[(2)]);
var state_51796__$1 = (function (){var statearr_51804 = state_51796;
(statearr_51804[(8)] = inst_51788);

return statearr_51804;
})();
var statearr_51805_51823 = state_51796__$1;
(statearr_51805_51823[(2)] = null);

(statearr_51805_51823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51797 === (9))){
var inst_51780 = (state_51796[(9)]);
var inst_51782 = (state_51796[(10)]);
var inst_51784 = inst_51782.call(null,inst_51780);
var state_51796__$1 = state_51796;
var statearr_51806_51824 = state_51796__$1;
(statearr_51806_51824[(2)] = inst_51784);

(statearr_51806_51824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51797 === (5))){
var inst_51776 = (state_51796[(7)]);
var inst_51778 = figwheel.client.file_reloading.blocking_load.call(null,inst_51776);
var state_51796__$1 = state_51796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51796__$1,(8),inst_51778);
} else {
if((state_val_51797 === (10))){
var inst_51780 = (state_51796[(9)]);
var inst_51786 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51780);
var state_51796__$1 = state_51796;
var statearr_51807_51825 = state_51796__$1;
(statearr_51807_51825[(2)] = inst_51786);

(statearr_51807_51825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51797 === (8))){
var inst_51782 = (state_51796[(10)]);
var inst_51776 = (state_51796[(7)]);
var inst_51780 = (state_51796[(2)]);
var inst_51781 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51782__$1 = cljs.core.get.call(null,inst_51781,inst_51776);
var state_51796__$1 = (function (){var statearr_51808 = state_51796;
(statearr_51808[(9)] = inst_51780);

(statearr_51808[(10)] = inst_51782__$1);

return statearr_51808;
})();
if(cljs.core.truth_(inst_51782__$1)){
var statearr_51809_51826 = state_51796__$1;
(statearr_51809_51826[(1)] = (9));

} else {
var statearr_51810_51827 = state_51796__$1;
(statearr_51810_51827[(1)] = (10));

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
});})(c__40653__auto__))
;
return ((function (switch__40541__auto__,c__40653__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40542__auto__ = null;
var figwheel$client$file_reloading$state_machine__40542__auto____0 = (function (){
var statearr_51814 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51814[(0)] = figwheel$client$file_reloading$state_machine__40542__auto__);

(statearr_51814[(1)] = (1));

return statearr_51814;
});
var figwheel$client$file_reloading$state_machine__40542__auto____1 = (function (state_51796){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_51796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e51815){if((e51815 instanceof Object)){
var ex__40545__auto__ = e51815;
var statearr_51816_51828 = state_51796;
(statearr_51816_51828[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51829 = state_51796;
state_51796 = G__51829;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40542__auto__ = function(state_51796){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40542__auto____1.call(this,state_51796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40542__auto____0;
figwheel$client$file_reloading$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40542__auto____1;
return figwheel$client$file_reloading$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__))
})();
var state__40655__auto__ = (function (){var statearr_51817 = f__40654__auto__.call(null);
(statearr_51817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_51817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__))
);

return c__40653__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51830,callback){
var map__51833 = p__51830;
var map__51833__$1 = ((((!((map__51833 == null)))?((((map__51833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51833):map__51833);
var file_msg = map__51833__$1;
var namespace = cljs.core.get.call(null,map__51833__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51833,map__51833__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51833,map__51833__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51835){
var map__51838 = p__51835;
var map__51838__$1 = ((((!((map__51838 == null)))?((((map__51838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51838):map__51838);
var file_msg = map__51838__$1;
var namespace = cljs.core.get.call(null,map__51838__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36764__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36764__auto__){
var or__36776__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
var or__36776__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36776__auto____$1)){
return or__36776__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36764__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51840,callback){
var map__51843 = p__51840;
var map__51843__$1 = ((((!((map__51843 == null)))?((((map__51843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51843):map__51843);
var file_msg = map__51843__$1;
var request_url = cljs.core.get.call(null,map__51843__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40653__auto___51947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___51947,out){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___51947,out){
return (function (state_51929){
var state_val_51930 = (state_51929[(1)]);
if((state_val_51930 === (1))){
var inst_51903 = cljs.core.seq.call(null,files);
var inst_51904 = cljs.core.first.call(null,inst_51903);
var inst_51905 = cljs.core.next.call(null,inst_51903);
var inst_51906 = files;
var state_51929__$1 = (function (){var statearr_51931 = state_51929;
(statearr_51931[(7)] = inst_51906);

(statearr_51931[(8)] = inst_51904);

(statearr_51931[(9)] = inst_51905);

return statearr_51931;
})();
var statearr_51932_51948 = state_51929__$1;
(statearr_51932_51948[(2)] = null);

(statearr_51932_51948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (2))){
var inst_51912 = (state_51929[(10)]);
var inst_51906 = (state_51929[(7)]);
var inst_51911 = cljs.core.seq.call(null,inst_51906);
var inst_51912__$1 = cljs.core.first.call(null,inst_51911);
var inst_51913 = cljs.core.next.call(null,inst_51911);
var inst_51914 = (inst_51912__$1 == null);
var inst_51915 = cljs.core.not.call(null,inst_51914);
var state_51929__$1 = (function (){var statearr_51933 = state_51929;
(statearr_51933[(11)] = inst_51913);

(statearr_51933[(10)] = inst_51912__$1);

return statearr_51933;
})();
if(inst_51915){
var statearr_51934_51949 = state_51929__$1;
(statearr_51934_51949[(1)] = (4));

} else {
var statearr_51935_51950 = state_51929__$1;
(statearr_51935_51950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (3))){
var inst_51927 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51929__$1,inst_51927);
} else {
if((state_val_51930 === (4))){
var inst_51912 = (state_51929[(10)]);
var inst_51917 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51912);
var state_51929__$1 = state_51929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51929__$1,(7),inst_51917);
} else {
if((state_val_51930 === (5))){
var inst_51923 = cljs.core.async.close_BANG_.call(null,out);
var state_51929__$1 = state_51929;
var statearr_51936_51951 = state_51929__$1;
(statearr_51936_51951[(2)] = inst_51923);

(statearr_51936_51951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (6))){
var inst_51925 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
var statearr_51937_51952 = state_51929__$1;
(statearr_51937_51952[(2)] = inst_51925);

(statearr_51937_51952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (7))){
var inst_51913 = (state_51929[(11)]);
var inst_51919 = (state_51929[(2)]);
var inst_51920 = cljs.core.async.put_BANG_.call(null,out,inst_51919);
var inst_51906 = inst_51913;
var state_51929__$1 = (function (){var statearr_51938 = state_51929;
(statearr_51938[(7)] = inst_51906);

(statearr_51938[(12)] = inst_51920);

return statearr_51938;
})();
var statearr_51939_51953 = state_51929__$1;
(statearr_51939_51953[(2)] = null);

(statearr_51939_51953[(1)] = (2));


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
});})(c__40653__auto___51947,out))
;
return ((function (switch__40541__auto__,c__40653__auto___51947,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto____0 = (function (){
var statearr_51943 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51943[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto__);

(statearr_51943[(1)] = (1));

return statearr_51943;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto____1 = (function (state_51929){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_51929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e51944){if((e51944 instanceof Object)){
var ex__40545__auto__ = e51944;
var statearr_51945_51954 = state_51929;
(statearr_51945_51954[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51955 = state_51929;
state_51929 = G__51955;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto__ = function(state_51929){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto____1.call(this,state_51929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___51947,out))
})();
var state__40655__auto__ = (function (){var statearr_51946 = f__40654__auto__.call(null);
(statearr_51946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___51947);

return statearr_51946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___51947,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51956,opts){
var map__51960 = p__51956;
var map__51960__$1 = ((((!((map__51960 == null)))?((((map__51960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51960):map__51960);
var eval_body__$1 = cljs.core.get.call(null,map__51960__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36764__auto__ = eval_body__$1;
if(cljs.core.truth_(and__36764__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__36764__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51962){var e = e51962;
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
return (function (p1__51963_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51963_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__51972){
var vec__51973 = p__51972;
var k = cljs.core.nth.call(null,vec__51973,(0),null);
var v = cljs.core.nth.call(null,vec__51973,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51976){
var vec__51977 = p__51976;
var k = cljs.core.nth.call(null,vec__51977,(0),null);
var v = cljs.core.nth.call(null,vec__51977,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51983,p__51984){
var map__52231 = p__51983;
var map__52231__$1 = ((((!((map__52231 == null)))?((((map__52231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52231):map__52231);
var opts = map__52231__$1;
var before_jsload = cljs.core.get.call(null,map__52231__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52231__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52231__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52232 = p__51984;
var map__52232__$1 = ((((!((map__52232 == null)))?((((map__52232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52232):map__52232);
var msg = map__52232__$1;
var files = cljs.core.get.call(null,map__52232__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52232__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52232__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52385){
var state_val_52386 = (state_52385[(1)]);
if((state_val_52386 === (7))){
var inst_52248 = (state_52385[(7)]);
var inst_52247 = (state_52385[(8)]);
var inst_52246 = (state_52385[(9)]);
var inst_52249 = (state_52385[(10)]);
var inst_52254 = cljs.core._nth.call(null,inst_52247,inst_52249);
var inst_52255 = figwheel.client.file_reloading.eval_body.call(null,inst_52254,opts);
var inst_52256 = (inst_52249 + (1));
var tmp52387 = inst_52248;
var tmp52388 = inst_52247;
var tmp52389 = inst_52246;
var inst_52246__$1 = tmp52389;
var inst_52247__$1 = tmp52388;
var inst_52248__$1 = tmp52387;
var inst_52249__$1 = inst_52256;
var state_52385__$1 = (function (){var statearr_52390 = state_52385;
(statearr_52390[(7)] = inst_52248__$1);

(statearr_52390[(8)] = inst_52247__$1);

(statearr_52390[(11)] = inst_52255);

(statearr_52390[(9)] = inst_52246__$1);

(statearr_52390[(10)] = inst_52249__$1);

return statearr_52390;
})();
var statearr_52391_52477 = state_52385__$1;
(statearr_52391_52477[(2)] = null);

(statearr_52391_52477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (20))){
var inst_52289 = (state_52385[(12)]);
var inst_52297 = figwheel.client.file_reloading.sort_files.call(null,inst_52289);
var state_52385__$1 = state_52385;
var statearr_52392_52478 = state_52385__$1;
(statearr_52392_52478[(2)] = inst_52297);

(statearr_52392_52478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (27))){
var state_52385__$1 = state_52385;
var statearr_52393_52479 = state_52385__$1;
(statearr_52393_52479[(2)] = null);

(statearr_52393_52479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (1))){
var inst_52238 = (state_52385[(13)]);
var inst_52235 = before_jsload.call(null,files);
var inst_52236 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52237 = (function (){return ((function (inst_52238,inst_52235,inst_52236,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51980_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51980_SHARP_);
});
;})(inst_52238,inst_52235,inst_52236,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52238__$1 = cljs.core.filter.call(null,inst_52237,files);
var inst_52239 = cljs.core.not_empty.call(null,inst_52238__$1);
var state_52385__$1 = (function (){var statearr_52394 = state_52385;
(statearr_52394[(14)] = inst_52236);

(statearr_52394[(13)] = inst_52238__$1);

(statearr_52394[(15)] = inst_52235);

return statearr_52394;
})();
if(cljs.core.truth_(inst_52239)){
var statearr_52395_52480 = state_52385__$1;
(statearr_52395_52480[(1)] = (2));

} else {
var statearr_52396_52481 = state_52385__$1;
(statearr_52396_52481[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (24))){
var state_52385__$1 = state_52385;
var statearr_52397_52482 = state_52385__$1;
(statearr_52397_52482[(2)] = null);

(statearr_52397_52482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (39))){
var inst_52339 = (state_52385[(16)]);
var state_52385__$1 = state_52385;
var statearr_52398_52483 = state_52385__$1;
(statearr_52398_52483[(2)] = inst_52339);

(statearr_52398_52483[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (46))){
var inst_52380 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
var statearr_52399_52484 = state_52385__$1;
(statearr_52399_52484[(2)] = inst_52380);

(statearr_52399_52484[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (4))){
var inst_52283 = (state_52385[(2)]);
var inst_52284 = cljs.core.List.EMPTY;
var inst_52285 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52284);
var inst_52286 = (function (){return ((function (inst_52283,inst_52284,inst_52285,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51981_SHARP_){
var and__36764__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51981_SHARP_);
if(cljs.core.truth_(and__36764__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51981_SHARP_));
} else {
return and__36764__auto__;
}
});
;})(inst_52283,inst_52284,inst_52285,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52287 = cljs.core.filter.call(null,inst_52286,files);
var inst_52288 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52289 = cljs.core.concat.call(null,inst_52287,inst_52288);
var state_52385__$1 = (function (){var statearr_52400 = state_52385;
(statearr_52400[(17)] = inst_52285);

(statearr_52400[(18)] = inst_52283);

(statearr_52400[(12)] = inst_52289);

return statearr_52400;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52401_52485 = state_52385__$1;
(statearr_52401_52485[(1)] = (16));

} else {
var statearr_52402_52486 = state_52385__$1;
(statearr_52402_52486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (15))){
var inst_52273 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
var statearr_52403_52487 = state_52385__$1;
(statearr_52403_52487[(2)] = inst_52273);

(statearr_52403_52487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (21))){
var inst_52299 = (state_52385[(19)]);
var inst_52299__$1 = (state_52385[(2)]);
var inst_52300 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52299__$1);
var state_52385__$1 = (function (){var statearr_52404 = state_52385;
(statearr_52404[(19)] = inst_52299__$1);

return statearr_52404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52385__$1,(22),inst_52300);
} else {
if((state_val_52386 === (31))){
var inst_52383 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52385__$1,inst_52383);
} else {
if((state_val_52386 === (32))){
var inst_52339 = (state_52385[(16)]);
var inst_52344 = inst_52339.cljs$lang$protocol_mask$partition0$;
var inst_52345 = (inst_52344 & (64));
var inst_52346 = inst_52339.cljs$core$ISeq$;
var inst_52347 = (inst_52345) || (inst_52346);
var state_52385__$1 = state_52385;
if(cljs.core.truth_(inst_52347)){
var statearr_52405_52488 = state_52385__$1;
(statearr_52405_52488[(1)] = (35));

} else {
var statearr_52406_52489 = state_52385__$1;
(statearr_52406_52489[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (40))){
var inst_52360 = (state_52385[(20)]);
var inst_52359 = (state_52385[(2)]);
var inst_52360__$1 = cljs.core.get.call(null,inst_52359,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52361 = cljs.core.get.call(null,inst_52359,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52362 = cljs.core.not_empty.call(null,inst_52360__$1);
var state_52385__$1 = (function (){var statearr_52407 = state_52385;
(statearr_52407[(21)] = inst_52361);

(statearr_52407[(20)] = inst_52360__$1);

return statearr_52407;
})();
if(cljs.core.truth_(inst_52362)){
var statearr_52408_52490 = state_52385__$1;
(statearr_52408_52490[(1)] = (41));

} else {
var statearr_52409_52491 = state_52385__$1;
(statearr_52409_52491[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (33))){
var state_52385__$1 = state_52385;
var statearr_52410_52492 = state_52385__$1;
(statearr_52410_52492[(2)] = false);

(statearr_52410_52492[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (13))){
var inst_52259 = (state_52385[(22)]);
var inst_52263 = cljs.core.chunk_first.call(null,inst_52259);
var inst_52264 = cljs.core.chunk_rest.call(null,inst_52259);
var inst_52265 = cljs.core.count.call(null,inst_52263);
var inst_52246 = inst_52264;
var inst_52247 = inst_52263;
var inst_52248 = inst_52265;
var inst_52249 = (0);
var state_52385__$1 = (function (){var statearr_52411 = state_52385;
(statearr_52411[(7)] = inst_52248);

(statearr_52411[(8)] = inst_52247);

(statearr_52411[(9)] = inst_52246);

(statearr_52411[(10)] = inst_52249);

return statearr_52411;
})();
var statearr_52412_52493 = state_52385__$1;
(statearr_52412_52493[(2)] = null);

(statearr_52412_52493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (22))){
var inst_52303 = (state_52385[(23)]);
var inst_52307 = (state_52385[(24)]);
var inst_52302 = (state_52385[(25)]);
var inst_52299 = (state_52385[(19)]);
var inst_52302__$1 = (state_52385[(2)]);
var inst_52303__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52302__$1);
var inst_52304 = (function (){var all_files = inst_52299;
var res_SINGLEQUOTE_ = inst_52302__$1;
var res = inst_52303__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52303,inst_52307,inst_52302,inst_52299,inst_52302__$1,inst_52303__$1,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51982_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51982_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52303,inst_52307,inst_52302,inst_52299,inst_52302__$1,inst_52303__$1,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52305 = cljs.core.filter.call(null,inst_52304,inst_52302__$1);
var inst_52306 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52307__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52306);
var inst_52308 = cljs.core.not_empty.call(null,inst_52307__$1);
var state_52385__$1 = (function (){var statearr_52413 = state_52385;
(statearr_52413[(26)] = inst_52305);

(statearr_52413[(23)] = inst_52303__$1);

(statearr_52413[(24)] = inst_52307__$1);

(statearr_52413[(25)] = inst_52302__$1);

return statearr_52413;
})();
if(cljs.core.truth_(inst_52308)){
var statearr_52414_52494 = state_52385__$1;
(statearr_52414_52494[(1)] = (23));

} else {
var statearr_52415_52495 = state_52385__$1;
(statearr_52415_52495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (36))){
var state_52385__$1 = state_52385;
var statearr_52416_52496 = state_52385__$1;
(statearr_52416_52496[(2)] = false);

(statearr_52416_52496[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (41))){
var inst_52360 = (state_52385[(20)]);
var inst_52364 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52365 = cljs.core.map.call(null,inst_52364,inst_52360);
var inst_52366 = cljs.core.pr_str.call(null,inst_52365);
var inst_52367 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52366)].join('');
var inst_52368 = figwheel.client.utils.log.call(null,inst_52367);
var state_52385__$1 = state_52385;
var statearr_52417_52497 = state_52385__$1;
(statearr_52417_52497[(2)] = inst_52368);

(statearr_52417_52497[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (43))){
var inst_52361 = (state_52385[(21)]);
var inst_52371 = (state_52385[(2)]);
var inst_52372 = cljs.core.not_empty.call(null,inst_52361);
var state_52385__$1 = (function (){var statearr_52418 = state_52385;
(statearr_52418[(27)] = inst_52371);

return statearr_52418;
})();
if(cljs.core.truth_(inst_52372)){
var statearr_52419_52498 = state_52385__$1;
(statearr_52419_52498[(1)] = (44));

} else {
var statearr_52420_52499 = state_52385__$1;
(statearr_52420_52499[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (29))){
var inst_52339 = (state_52385[(16)]);
var inst_52305 = (state_52385[(26)]);
var inst_52303 = (state_52385[(23)]);
var inst_52307 = (state_52385[(24)]);
var inst_52302 = (state_52385[(25)]);
var inst_52299 = (state_52385[(19)]);
var inst_52335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52338 = (function (){var all_files = inst_52299;
var res_SINGLEQUOTE_ = inst_52302;
var res = inst_52303;
var files_not_loaded = inst_52305;
var dependencies_that_loaded = inst_52307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52339,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52335,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52337){
var map__52421 = p__52337;
var map__52421__$1 = ((((!((map__52421 == null)))?((((map__52421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52421):map__52421);
var namespace = cljs.core.get.call(null,map__52421__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52339,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52335,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52339__$1 = cljs.core.group_by.call(null,inst_52338,inst_52305);
var inst_52341 = (inst_52339__$1 == null);
var inst_52342 = cljs.core.not.call(null,inst_52341);
var state_52385__$1 = (function (){var statearr_52423 = state_52385;
(statearr_52423[(28)] = inst_52335);

(statearr_52423[(16)] = inst_52339__$1);

return statearr_52423;
})();
if(inst_52342){
var statearr_52424_52500 = state_52385__$1;
(statearr_52424_52500[(1)] = (32));

} else {
var statearr_52425_52501 = state_52385__$1;
(statearr_52425_52501[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (44))){
var inst_52361 = (state_52385[(21)]);
var inst_52374 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52361);
var inst_52375 = cljs.core.pr_str.call(null,inst_52374);
var inst_52376 = [cljs.core.str("not required: "),cljs.core.str(inst_52375)].join('');
var inst_52377 = figwheel.client.utils.log.call(null,inst_52376);
var state_52385__$1 = state_52385;
var statearr_52426_52502 = state_52385__$1;
(statearr_52426_52502[(2)] = inst_52377);

(statearr_52426_52502[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (6))){
var inst_52280 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
var statearr_52427_52503 = state_52385__$1;
(statearr_52427_52503[(2)] = inst_52280);

(statearr_52427_52503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (28))){
var inst_52305 = (state_52385[(26)]);
var inst_52332 = (state_52385[(2)]);
var inst_52333 = cljs.core.not_empty.call(null,inst_52305);
var state_52385__$1 = (function (){var statearr_52428 = state_52385;
(statearr_52428[(29)] = inst_52332);

return statearr_52428;
})();
if(cljs.core.truth_(inst_52333)){
var statearr_52429_52504 = state_52385__$1;
(statearr_52429_52504[(1)] = (29));

} else {
var statearr_52430_52505 = state_52385__$1;
(statearr_52430_52505[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (25))){
var inst_52303 = (state_52385[(23)]);
var inst_52319 = (state_52385[(2)]);
var inst_52320 = cljs.core.not_empty.call(null,inst_52303);
var state_52385__$1 = (function (){var statearr_52431 = state_52385;
(statearr_52431[(30)] = inst_52319);

return statearr_52431;
})();
if(cljs.core.truth_(inst_52320)){
var statearr_52432_52506 = state_52385__$1;
(statearr_52432_52506[(1)] = (26));

} else {
var statearr_52433_52507 = state_52385__$1;
(statearr_52433_52507[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (34))){
var inst_52354 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
if(cljs.core.truth_(inst_52354)){
var statearr_52434_52508 = state_52385__$1;
(statearr_52434_52508[(1)] = (38));

} else {
var statearr_52435_52509 = state_52385__$1;
(statearr_52435_52509[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (17))){
var state_52385__$1 = state_52385;
var statearr_52436_52510 = state_52385__$1;
(statearr_52436_52510[(2)] = recompile_dependents);

(statearr_52436_52510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (3))){
var state_52385__$1 = state_52385;
var statearr_52437_52511 = state_52385__$1;
(statearr_52437_52511[(2)] = null);

(statearr_52437_52511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (12))){
var inst_52276 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
var statearr_52438_52512 = state_52385__$1;
(statearr_52438_52512[(2)] = inst_52276);

(statearr_52438_52512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (2))){
var inst_52238 = (state_52385[(13)]);
var inst_52245 = cljs.core.seq.call(null,inst_52238);
var inst_52246 = inst_52245;
var inst_52247 = null;
var inst_52248 = (0);
var inst_52249 = (0);
var state_52385__$1 = (function (){var statearr_52439 = state_52385;
(statearr_52439[(7)] = inst_52248);

(statearr_52439[(8)] = inst_52247);

(statearr_52439[(9)] = inst_52246);

(statearr_52439[(10)] = inst_52249);

return statearr_52439;
})();
var statearr_52440_52513 = state_52385__$1;
(statearr_52440_52513[(2)] = null);

(statearr_52440_52513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (23))){
var inst_52305 = (state_52385[(26)]);
var inst_52303 = (state_52385[(23)]);
var inst_52307 = (state_52385[(24)]);
var inst_52302 = (state_52385[(25)]);
var inst_52299 = (state_52385[(19)]);
var inst_52310 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52312 = (function (){var all_files = inst_52299;
var res_SINGLEQUOTE_ = inst_52302;
var res = inst_52303;
var files_not_loaded = inst_52305;
var dependencies_that_loaded = inst_52307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52310,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52311){
var map__52441 = p__52311;
var map__52441__$1 = ((((!((map__52441 == null)))?((((map__52441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52441):map__52441);
var request_url = cljs.core.get.call(null,map__52441__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52310,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52313 = cljs.core.reverse.call(null,inst_52307);
var inst_52314 = cljs.core.map.call(null,inst_52312,inst_52313);
var inst_52315 = cljs.core.pr_str.call(null,inst_52314);
var inst_52316 = figwheel.client.utils.log.call(null,inst_52315);
var state_52385__$1 = (function (){var statearr_52443 = state_52385;
(statearr_52443[(31)] = inst_52310);

return statearr_52443;
})();
var statearr_52444_52514 = state_52385__$1;
(statearr_52444_52514[(2)] = inst_52316);

(statearr_52444_52514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (35))){
var state_52385__$1 = state_52385;
var statearr_52445_52515 = state_52385__$1;
(statearr_52445_52515[(2)] = true);

(statearr_52445_52515[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (19))){
var inst_52289 = (state_52385[(12)]);
var inst_52295 = figwheel.client.file_reloading.expand_files.call(null,inst_52289);
var state_52385__$1 = state_52385;
var statearr_52446_52516 = state_52385__$1;
(statearr_52446_52516[(2)] = inst_52295);

(statearr_52446_52516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (11))){
var state_52385__$1 = state_52385;
var statearr_52447_52517 = state_52385__$1;
(statearr_52447_52517[(2)] = null);

(statearr_52447_52517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (9))){
var inst_52278 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
var statearr_52448_52518 = state_52385__$1;
(statearr_52448_52518[(2)] = inst_52278);

(statearr_52448_52518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (5))){
var inst_52248 = (state_52385[(7)]);
var inst_52249 = (state_52385[(10)]);
var inst_52251 = (inst_52249 < inst_52248);
var inst_52252 = inst_52251;
var state_52385__$1 = state_52385;
if(cljs.core.truth_(inst_52252)){
var statearr_52449_52519 = state_52385__$1;
(statearr_52449_52519[(1)] = (7));

} else {
var statearr_52450_52520 = state_52385__$1;
(statearr_52450_52520[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (14))){
var inst_52259 = (state_52385[(22)]);
var inst_52268 = cljs.core.first.call(null,inst_52259);
var inst_52269 = figwheel.client.file_reloading.eval_body.call(null,inst_52268,opts);
var inst_52270 = cljs.core.next.call(null,inst_52259);
var inst_52246 = inst_52270;
var inst_52247 = null;
var inst_52248 = (0);
var inst_52249 = (0);
var state_52385__$1 = (function (){var statearr_52451 = state_52385;
(statearr_52451[(7)] = inst_52248);

(statearr_52451[(8)] = inst_52247);

(statearr_52451[(32)] = inst_52269);

(statearr_52451[(9)] = inst_52246);

(statearr_52451[(10)] = inst_52249);

return statearr_52451;
})();
var statearr_52452_52521 = state_52385__$1;
(statearr_52452_52521[(2)] = null);

(statearr_52452_52521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (45))){
var state_52385__$1 = state_52385;
var statearr_52453_52522 = state_52385__$1;
(statearr_52453_52522[(2)] = null);

(statearr_52453_52522[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (26))){
var inst_52305 = (state_52385[(26)]);
var inst_52303 = (state_52385[(23)]);
var inst_52307 = (state_52385[(24)]);
var inst_52302 = (state_52385[(25)]);
var inst_52299 = (state_52385[(19)]);
var inst_52322 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52324 = (function (){var all_files = inst_52299;
var res_SINGLEQUOTE_ = inst_52302;
var res = inst_52303;
var files_not_loaded = inst_52305;
var dependencies_that_loaded = inst_52307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52322,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52323){
var map__52454 = p__52323;
var map__52454__$1 = ((((!((map__52454 == null)))?((((map__52454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52454):map__52454);
var namespace = cljs.core.get.call(null,map__52454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52322,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52325 = cljs.core.map.call(null,inst_52324,inst_52303);
var inst_52326 = cljs.core.pr_str.call(null,inst_52325);
var inst_52327 = figwheel.client.utils.log.call(null,inst_52326);
var inst_52328 = (function (){var all_files = inst_52299;
var res_SINGLEQUOTE_ = inst_52302;
var res = inst_52303;
var files_not_loaded = inst_52305;
var dependencies_that_loaded = inst_52307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52322,inst_52324,inst_52325,inst_52326,inst_52327,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52305,inst_52303,inst_52307,inst_52302,inst_52299,inst_52322,inst_52324,inst_52325,inst_52326,inst_52327,state_val_52386,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52329 = setTimeout(inst_52328,(10));
var state_52385__$1 = (function (){var statearr_52456 = state_52385;
(statearr_52456[(33)] = inst_52322);

(statearr_52456[(34)] = inst_52327);

return statearr_52456;
})();
var statearr_52457_52523 = state_52385__$1;
(statearr_52457_52523[(2)] = inst_52329);

(statearr_52457_52523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (16))){
var state_52385__$1 = state_52385;
var statearr_52458_52524 = state_52385__$1;
(statearr_52458_52524[(2)] = reload_dependents);

(statearr_52458_52524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (38))){
var inst_52339 = (state_52385[(16)]);
var inst_52356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52339);
var state_52385__$1 = state_52385;
var statearr_52459_52525 = state_52385__$1;
(statearr_52459_52525[(2)] = inst_52356);

(statearr_52459_52525[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (30))){
var state_52385__$1 = state_52385;
var statearr_52460_52526 = state_52385__$1;
(statearr_52460_52526[(2)] = null);

(statearr_52460_52526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (10))){
var inst_52259 = (state_52385[(22)]);
var inst_52261 = cljs.core.chunked_seq_QMARK_.call(null,inst_52259);
var state_52385__$1 = state_52385;
if(inst_52261){
var statearr_52461_52527 = state_52385__$1;
(statearr_52461_52527[(1)] = (13));

} else {
var statearr_52462_52528 = state_52385__$1;
(statearr_52462_52528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (18))){
var inst_52293 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
if(cljs.core.truth_(inst_52293)){
var statearr_52463_52529 = state_52385__$1;
(statearr_52463_52529[(1)] = (19));

} else {
var statearr_52464_52530 = state_52385__$1;
(statearr_52464_52530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (42))){
var state_52385__$1 = state_52385;
var statearr_52465_52531 = state_52385__$1;
(statearr_52465_52531[(2)] = null);

(statearr_52465_52531[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (37))){
var inst_52351 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
var statearr_52466_52532 = state_52385__$1;
(statearr_52466_52532[(2)] = inst_52351);

(statearr_52466_52532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (8))){
var inst_52259 = (state_52385[(22)]);
var inst_52246 = (state_52385[(9)]);
var inst_52259__$1 = cljs.core.seq.call(null,inst_52246);
var state_52385__$1 = (function (){var statearr_52467 = state_52385;
(statearr_52467[(22)] = inst_52259__$1);

return statearr_52467;
})();
if(inst_52259__$1){
var statearr_52468_52533 = state_52385__$1;
(statearr_52468_52533[(1)] = (10));

} else {
var statearr_52469_52534 = state_52385__$1;
(statearr_52469_52534[(1)] = (11));

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
});})(c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40541__auto__,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto____0 = (function (){
var statearr_52473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52473[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto__);

(statearr_52473[(1)] = (1));

return statearr_52473;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto____1 = (function (state_52385){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_52385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e52474){if((e52474 instanceof Object)){
var ex__40545__auto__ = e52474;
var statearr_52475_52535 = state_52385;
(statearr_52475_52535[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52536 = state_52385;
state_52385 = G__52536;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto__ = function(state_52385){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto____1.call(this,state_52385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40655__auto__ = (function (){var statearr_52476 = f__40654__auto__.call(null);
(statearr_52476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_52476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__,map__52231,map__52231__$1,opts,before_jsload,on_jsload,reload_dependents,map__52232,map__52232__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40653__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52539,link){
var map__52542 = p__52539;
var map__52542__$1 = ((((!((map__52542 == null)))?((((map__52542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52542):map__52542);
var file = cljs.core.get.call(null,map__52542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52542,map__52542__$1,file){
return (function (p1__52537_SHARP_,p2__52538_SHARP_){
if(cljs.core._EQ_.call(null,p1__52537_SHARP_,p2__52538_SHARP_)){
return p1__52537_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52542,map__52542__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52548){
var map__52549 = p__52548;
var map__52549__$1 = ((((!((map__52549 == null)))?((((map__52549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52549):map__52549);
var match_length = cljs.core.get.call(null,map__52549__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52549__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52544_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52544_SHARP_);
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
var args52551 = [];
var len__37851__auto___52554 = arguments.length;
var i__37852__auto___52555 = (0);
while(true){
if((i__37852__auto___52555 < len__37851__auto___52554)){
args52551.push((arguments[i__37852__auto___52555]));

var G__52556 = (i__37852__auto___52555 + (1));
i__37852__auto___52555 = G__52556;
continue;
} else {
}
break;
}

var G__52553 = args52551.length;
switch (G__52553) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52551.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52558_SHARP_,p2__52559_SHARP_){
return cljs.core.assoc.call(null,p1__52558_SHARP_,cljs.core.get.call(null,p2__52559_SHARP_,key),p2__52559_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52560){
var map__52563 = p__52560;
var map__52563__$1 = ((((!((map__52563 == null)))?((((map__52563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52563):map__52563);
var f_data = map__52563__$1;
var file = cljs.core.get.call(null,map__52563__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52565,p__52566){
var map__52575 = p__52565;
var map__52575__$1 = ((((!((map__52575 == null)))?((((map__52575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52575):map__52575);
var opts = map__52575__$1;
var on_cssload = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52576 = p__52566;
var map__52576__$1 = ((((!((map__52576 == null)))?((((map__52576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52576):map__52576);
var files_msg = map__52576__$1;
var files = cljs.core.get.call(null,map__52576__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52579_52583 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52580_52584 = null;
var count__52581_52585 = (0);
var i__52582_52586 = (0);
while(true){
if((i__52582_52586 < count__52581_52585)){
var f_52587 = cljs.core._nth.call(null,chunk__52580_52584,i__52582_52586);
figwheel.client.file_reloading.reload_css_file.call(null,f_52587);

var G__52588 = seq__52579_52583;
var G__52589 = chunk__52580_52584;
var G__52590 = count__52581_52585;
var G__52591 = (i__52582_52586 + (1));
seq__52579_52583 = G__52588;
chunk__52580_52584 = G__52589;
count__52581_52585 = G__52590;
i__52582_52586 = G__52591;
continue;
} else {
var temp__4657__auto___52592 = cljs.core.seq.call(null,seq__52579_52583);
if(temp__4657__auto___52592){
var seq__52579_52593__$1 = temp__4657__auto___52592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52579_52593__$1)){
var c__37587__auto___52594 = cljs.core.chunk_first.call(null,seq__52579_52593__$1);
var G__52595 = cljs.core.chunk_rest.call(null,seq__52579_52593__$1);
var G__52596 = c__37587__auto___52594;
var G__52597 = cljs.core.count.call(null,c__37587__auto___52594);
var G__52598 = (0);
seq__52579_52583 = G__52595;
chunk__52580_52584 = G__52596;
count__52581_52585 = G__52597;
i__52582_52586 = G__52598;
continue;
} else {
var f_52599 = cljs.core.first.call(null,seq__52579_52593__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52599);

var G__52600 = cljs.core.next.call(null,seq__52579_52593__$1);
var G__52601 = null;
var G__52602 = (0);
var G__52603 = (0);
seq__52579_52583 = G__52600;
chunk__52580_52584 = G__52601;
count__52581_52585 = G__52602;
i__52582_52586 = G__52603;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52575,map__52575__$1,opts,on_cssload,map__52576,map__52576__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52575,map__52575__$1,opts,on_cssload,map__52576,map__52576__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map