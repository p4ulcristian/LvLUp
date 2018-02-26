// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42895){
var map__42920 = p__42895;
var map__42920__$1 = ((((!((map__42920 == null)))?((((map__42920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42920):map__42920);
var m = map__42920__$1;
var n = cljs.core.get.call(null,map__42920__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42920__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__42922_42944 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42923_42945 = null;
var count__42924_42946 = (0);
var i__42925_42947 = (0);
while(true){
if((i__42925_42947 < count__42924_42946)){
var f_42948 = cljs.core._nth.call(null,chunk__42923_42945,i__42925_42947);
cljs.core.println.call(null,"  ",f_42948);

var G__42949 = seq__42922_42944;
var G__42950 = chunk__42923_42945;
var G__42951 = count__42924_42946;
var G__42952 = (i__42925_42947 + (1));
seq__42922_42944 = G__42949;
chunk__42923_42945 = G__42950;
count__42924_42946 = G__42951;
i__42925_42947 = G__42952;
continue;
} else {
var temp__4657__auto___42953 = cljs.core.seq.call(null,seq__42922_42944);
if(temp__4657__auto___42953){
var seq__42922_42954__$1 = temp__4657__auto___42953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42922_42954__$1)){
var c__37583__auto___42955 = cljs.core.chunk_first.call(null,seq__42922_42954__$1);
var G__42956 = cljs.core.chunk_rest.call(null,seq__42922_42954__$1);
var G__42957 = c__37583__auto___42955;
var G__42958 = cljs.core.count.call(null,c__37583__auto___42955);
var G__42959 = (0);
seq__42922_42944 = G__42956;
chunk__42923_42945 = G__42957;
count__42924_42946 = G__42958;
i__42925_42947 = G__42959;
continue;
} else {
var f_42960 = cljs.core.first.call(null,seq__42922_42954__$1);
cljs.core.println.call(null,"  ",f_42960);

var G__42961 = cljs.core.next.call(null,seq__42922_42954__$1);
var G__42962 = null;
var G__42963 = (0);
var G__42964 = (0);
seq__42922_42944 = G__42961;
chunk__42923_42945 = G__42962;
count__42924_42946 = G__42963;
i__42925_42947 = G__42964;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42965 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36772__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42965);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42965)))?cljs.core.second.call(null,arglists_42965):arglists_42965));
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
var seq__42926_42966 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42927_42967 = null;
var count__42928_42968 = (0);
var i__42929_42969 = (0);
while(true){
if((i__42929_42969 < count__42928_42968)){
var vec__42930_42970 = cljs.core._nth.call(null,chunk__42927_42967,i__42929_42969);
var name_42971 = cljs.core.nth.call(null,vec__42930_42970,(0),null);
var map__42933_42972 = cljs.core.nth.call(null,vec__42930_42970,(1),null);
var map__42933_42973__$1 = ((((!((map__42933_42972 == null)))?((((map__42933_42972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42933_42972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42933_42972):map__42933_42972);
var doc_42974 = cljs.core.get.call(null,map__42933_42973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42975 = cljs.core.get.call(null,map__42933_42973__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42971);

cljs.core.println.call(null," ",arglists_42975);

if(cljs.core.truth_(doc_42974)){
cljs.core.println.call(null," ",doc_42974);
} else {
}

var G__42976 = seq__42926_42966;
var G__42977 = chunk__42927_42967;
var G__42978 = count__42928_42968;
var G__42979 = (i__42929_42969 + (1));
seq__42926_42966 = G__42976;
chunk__42927_42967 = G__42977;
count__42928_42968 = G__42978;
i__42929_42969 = G__42979;
continue;
} else {
var temp__4657__auto___42980 = cljs.core.seq.call(null,seq__42926_42966);
if(temp__4657__auto___42980){
var seq__42926_42981__$1 = temp__4657__auto___42980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42926_42981__$1)){
var c__37583__auto___42982 = cljs.core.chunk_first.call(null,seq__42926_42981__$1);
var G__42983 = cljs.core.chunk_rest.call(null,seq__42926_42981__$1);
var G__42984 = c__37583__auto___42982;
var G__42985 = cljs.core.count.call(null,c__37583__auto___42982);
var G__42986 = (0);
seq__42926_42966 = G__42983;
chunk__42927_42967 = G__42984;
count__42928_42968 = G__42985;
i__42929_42969 = G__42986;
continue;
} else {
var vec__42935_42987 = cljs.core.first.call(null,seq__42926_42981__$1);
var name_42988 = cljs.core.nth.call(null,vec__42935_42987,(0),null);
var map__42938_42989 = cljs.core.nth.call(null,vec__42935_42987,(1),null);
var map__42938_42990__$1 = ((((!((map__42938_42989 == null)))?((((map__42938_42989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42938_42989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42938_42989):map__42938_42989);
var doc_42991 = cljs.core.get.call(null,map__42938_42990__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42992 = cljs.core.get.call(null,map__42938_42990__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42988);

cljs.core.println.call(null," ",arglists_42992);

if(cljs.core.truth_(doc_42991)){
cljs.core.println.call(null," ",doc_42991);
} else {
}

var G__42993 = cljs.core.next.call(null,seq__42926_42981__$1);
var G__42994 = null;
var G__42995 = (0);
var G__42996 = (0);
seq__42926_42966 = G__42993;
chunk__42927_42967 = G__42994;
count__42928_42968 = G__42995;
i__42929_42969 = G__42996;
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

var seq__42940 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42941 = null;
var count__42942 = (0);
var i__42943 = (0);
while(true){
if((i__42943 < count__42942)){
var role = cljs.core._nth.call(null,chunk__42941,i__42943);
var temp__4657__auto___42997__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42997__$1)){
var spec_42998 = temp__4657__auto___42997__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42998));
} else {
}

var G__42999 = seq__42940;
var G__43000 = chunk__42941;
var G__43001 = count__42942;
var G__43002 = (i__42943 + (1));
seq__42940 = G__42999;
chunk__42941 = G__43000;
count__42942 = G__43001;
i__42943 = G__43002;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42940);
if(temp__4657__auto____$1){
var seq__42940__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42940__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__42940__$1);
var G__43003 = cljs.core.chunk_rest.call(null,seq__42940__$1);
var G__43004 = c__37583__auto__;
var G__43005 = cljs.core.count.call(null,c__37583__auto__);
var G__43006 = (0);
seq__42940 = G__43003;
chunk__42941 = G__43004;
count__42942 = G__43005;
i__42943 = G__43006;
continue;
} else {
var role = cljs.core.first.call(null,seq__42940__$1);
var temp__4657__auto___43007__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___43007__$2)){
var spec_43008 = temp__4657__auto___43007__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_43008));
} else {
}

var G__43009 = cljs.core.next.call(null,seq__42940__$1);
var G__43010 = null;
var G__43011 = (0);
var G__43012 = (0);
seq__42940 = G__43009;
chunk__42941 = G__43010;
count__42942 = G__43011;
i__42943 = G__43012;
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