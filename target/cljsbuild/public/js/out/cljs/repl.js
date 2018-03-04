// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53888){
var map__53913 = p__53888;
var map__53913__$1 = ((((!((map__53913 == null)))?((((map__53913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53913):map__53913);
var m = map__53913__$1;
var n = cljs.core.get.call(null,map__53913__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53915_53937 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53916_53938 = null;
var count__53917_53939 = (0);
var i__53918_53940 = (0);
while(true){
if((i__53918_53940 < count__53917_53939)){
var f_53941 = cljs.core._nth.call(null,chunk__53916_53938,i__53918_53940);
cljs.core.println.call(null,"  ",f_53941);

var G__53942 = seq__53915_53937;
var G__53943 = chunk__53916_53938;
var G__53944 = count__53917_53939;
var G__53945 = (i__53918_53940 + (1));
seq__53915_53937 = G__53942;
chunk__53916_53938 = G__53943;
count__53917_53939 = G__53944;
i__53918_53940 = G__53945;
continue;
} else {
var temp__4657__auto___53946 = cljs.core.seq.call(null,seq__53915_53937);
if(temp__4657__auto___53946){
var seq__53915_53947__$1 = temp__4657__auto___53946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53915_53947__$1)){
var c__37613__auto___53948 = cljs.core.chunk_first.call(null,seq__53915_53947__$1);
var G__53949 = cljs.core.chunk_rest.call(null,seq__53915_53947__$1);
var G__53950 = c__37613__auto___53948;
var G__53951 = cljs.core.count.call(null,c__37613__auto___53948);
var G__53952 = (0);
seq__53915_53937 = G__53949;
chunk__53916_53938 = G__53950;
count__53917_53939 = G__53951;
i__53918_53940 = G__53952;
continue;
} else {
var f_53953 = cljs.core.first.call(null,seq__53915_53947__$1);
cljs.core.println.call(null,"  ",f_53953);

var G__53954 = cljs.core.next.call(null,seq__53915_53947__$1);
var G__53955 = null;
var G__53956 = (0);
var G__53957 = (0);
seq__53915_53937 = G__53954;
chunk__53916_53938 = G__53955;
count__53917_53939 = G__53956;
i__53918_53940 = G__53957;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53958 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36802__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53958);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53958)))?cljs.core.second.call(null,arglists_53958):arglists_53958));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53919_53959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53920_53960 = null;
var count__53921_53961 = (0);
var i__53922_53962 = (0);
while(true){
if((i__53922_53962 < count__53921_53961)){
var vec__53923_53963 = cljs.core._nth.call(null,chunk__53920_53960,i__53922_53962);
var name_53964 = cljs.core.nth.call(null,vec__53923_53963,(0),null);
var map__53926_53965 = cljs.core.nth.call(null,vec__53923_53963,(1),null);
var map__53926_53966__$1 = ((((!((map__53926_53965 == null)))?((((map__53926_53965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53926_53965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53926_53965):map__53926_53965);
var doc_53967 = cljs.core.get.call(null,map__53926_53966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53968 = cljs.core.get.call(null,map__53926_53966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53964);

cljs.core.println.call(null," ",arglists_53968);

if(cljs.core.truth_(doc_53967)){
cljs.core.println.call(null," ",doc_53967);
} else {
}

var G__53969 = seq__53919_53959;
var G__53970 = chunk__53920_53960;
var G__53971 = count__53921_53961;
var G__53972 = (i__53922_53962 + (1));
seq__53919_53959 = G__53969;
chunk__53920_53960 = G__53970;
count__53921_53961 = G__53971;
i__53922_53962 = G__53972;
continue;
} else {
var temp__4657__auto___53973 = cljs.core.seq.call(null,seq__53919_53959);
if(temp__4657__auto___53973){
var seq__53919_53974__$1 = temp__4657__auto___53973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53919_53974__$1)){
var c__37613__auto___53975 = cljs.core.chunk_first.call(null,seq__53919_53974__$1);
var G__53976 = cljs.core.chunk_rest.call(null,seq__53919_53974__$1);
var G__53977 = c__37613__auto___53975;
var G__53978 = cljs.core.count.call(null,c__37613__auto___53975);
var G__53979 = (0);
seq__53919_53959 = G__53976;
chunk__53920_53960 = G__53977;
count__53921_53961 = G__53978;
i__53922_53962 = G__53979;
continue;
} else {
var vec__53928_53980 = cljs.core.first.call(null,seq__53919_53974__$1);
var name_53981 = cljs.core.nth.call(null,vec__53928_53980,(0),null);
var map__53931_53982 = cljs.core.nth.call(null,vec__53928_53980,(1),null);
var map__53931_53983__$1 = ((((!((map__53931_53982 == null)))?((((map__53931_53982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53931_53982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53931_53982):map__53931_53982);
var doc_53984 = cljs.core.get.call(null,map__53931_53983__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53985 = cljs.core.get.call(null,map__53931_53983__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53981);

cljs.core.println.call(null," ",arglists_53985);

if(cljs.core.truth_(doc_53984)){
cljs.core.println.call(null," ",doc_53984);
} else {
}

var G__53986 = cljs.core.next.call(null,seq__53919_53974__$1);
var G__53987 = null;
var G__53988 = (0);
var G__53989 = (0);
seq__53919_53959 = G__53986;
chunk__53920_53960 = G__53987;
count__53921_53961 = G__53988;
i__53922_53962 = G__53989;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__53933 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53934 = null;
var count__53935 = (0);
var i__53936 = (0);
while(true){
if((i__53936 < count__53935)){
var role = cljs.core._nth.call(null,chunk__53934,i__53936);
var temp__4657__auto___53990__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53990__$1)){
var spec_53991 = temp__4657__auto___53990__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53991));
} else {
}

var G__53992 = seq__53933;
var G__53993 = chunk__53934;
var G__53994 = count__53935;
var G__53995 = (i__53936 + (1));
seq__53933 = G__53992;
chunk__53934 = G__53993;
count__53935 = G__53994;
i__53936 = G__53995;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53933);
if(temp__4657__auto____$1){
var seq__53933__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53933__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__53933__$1);
var G__53996 = cljs.core.chunk_rest.call(null,seq__53933__$1);
var G__53997 = c__37613__auto__;
var G__53998 = cljs.core.count.call(null,c__37613__auto__);
var G__53999 = (0);
seq__53933 = G__53996;
chunk__53934 = G__53997;
count__53935 = G__53998;
i__53936 = G__53999;
continue;
} else {
var role = cljs.core.first.call(null,seq__53933__$1);
var temp__4657__auto___54000__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54000__$2)){
var spec_54001 = temp__4657__auto___54000__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_54001));
} else {
}

var G__54002 = cljs.core.next.call(null,seq__53933__$1);
var G__54003 = null;
var G__54004 = (0);
var G__54005 = (0);
seq__53933 = G__54002;
chunk__53934 = G__54003;
count__53935 = G__54004;
i__53936 = G__54005;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map