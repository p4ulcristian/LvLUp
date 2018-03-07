// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53894){
var map__53919 = p__53894;
var map__53919__$1 = ((((!((map__53919 == null)))?((((map__53919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53919):map__53919);
var m = map__53919__$1;
var n = cljs.core.get.call(null,map__53919__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53919__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53921_53943 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53922_53944 = null;
var count__53923_53945 = (0);
var i__53924_53946 = (0);
while(true){
if((i__53924_53946 < count__53923_53945)){
var f_53947 = cljs.core._nth.call(null,chunk__53922_53944,i__53924_53946);
cljs.core.println.call(null,"  ",f_53947);

var G__53948 = seq__53921_53943;
var G__53949 = chunk__53922_53944;
var G__53950 = count__53923_53945;
var G__53951 = (i__53924_53946 + (1));
seq__53921_53943 = G__53948;
chunk__53922_53944 = G__53949;
count__53923_53945 = G__53950;
i__53924_53946 = G__53951;
continue;
} else {
var temp__4657__auto___53952 = cljs.core.seq.call(null,seq__53921_53943);
if(temp__4657__auto___53952){
var seq__53921_53953__$1 = temp__4657__auto___53952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53921_53953__$1)){
var c__37615__auto___53954 = cljs.core.chunk_first.call(null,seq__53921_53953__$1);
var G__53955 = cljs.core.chunk_rest.call(null,seq__53921_53953__$1);
var G__53956 = c__37615__auto___53954;
var G__53957 = cljs.core.count.call(null,c__37615__auto___53954);
var G__53958 = (0);
seq__53921_53943 = G__53955;
chunk__53922_53944 = G__53956;
count__53923_53945 = G__53957;
i__53924_53946 = G__53958;
continue;
} else {
var f_53959 = cljs.core.first.call(null,seq__53921_53953__$1);
cljs.core.println.call(null,"  ",f_53959);

var G__53960 = cljs.core.next.call(null,seq__53921_53953__$1);
var G__53961 = null;
var G__53962 = (0);
var G__53963 = (0);
seq__53921_53943 = G__53960;
chunk__53922_53944 = G__53961;
count__53923_53945 = G__53962;
i__53924_53946 = G__53963;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53964 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36804__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53964);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53964)))?cljs.core.second.call(null,arglists_53964):arglists_53964));
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
var seq__53925_53965 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53926_53966 = null;
var count__53927_53967 = (0);
var i__53928_53968 = (0);
while(true){
if((i__53928_53968 < count__53927_53967)){
var vec__53929_53969 = cljs.core._nth.call(null,chunk__53926_53966,i__53928_53968);
var name_53970 = cljs.core.nth.call(null,vec__53929_53969,(0),null);
var map__53932_53971 = cljs.core.nth.call(null,vec__53929_53969,(1),null);
var map__53932_53972__$1 = ((((!((map__53932_53971 == null)))?((((map__53932_53971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53932_53971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53932_53971):map__53932_53971);
var doc_53973 = cljs.core.get.call(null,map__53932_53972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53974 = cljs.core.get.call(null,map__53932_53972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53970);

cljs.core.println.call(null," ",arglists_53974);

if(cljs.core.truth_(doc_53973)){
cljs.core.println.call(null," ",doc_53973);
} else {
}

var G__53975 = seq__53925_53965;
var G__53976 = chunk__53926_53966;
var G__53977 = count__53927_53967;
var G__53978 = (i__53928_53968 + (1));
seq__53925_53965 = G__53975;
chunk__53926_53966 = G__53976;
count__53927_53967 = G__53977;
i__53928_53968 = G__53978;
continue;
} else {
var temp__4657__auto___53979 = cljs.core.seq.call(null,seq__53925_53965);
if(temp__4657__auto___53979){
var seq__53925_53980__$1 = temp__4657__auto___53979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53925_53980__$1)){
var c__37615__auto___53981 = cljs.core.chunk_first.call(null,seq__53925_53980__$1);
var G__53982 = cljs.core.chunk_rest.call(null,seq__53925_53980__$1);
var G__53983 = c__37615__auto___53981;
var G__53984 = cljs.core.count.call(null,c__37615__auto___53981);
var G__53985 = (0);
seq__53925_53965 = G__53982;
chunk__53926_53966 = G__53983;
count__53927_53967 = G__53984;
i__53928_53968 = G__53985;
continue;
} else {
var vec__53934_53986 = cljs.core.first.call(null,seq__53925_53980__$1);
var name_53987 = cljs.core.nth.call(null,vec__53934_53986,(0),null);
var map__53937_53988 = cljs.core.nth.call(null,vec__53934_53986,(1),null);
var map__53937_53989__$1 = ((((!((map__53937_53988 == null)))?((((map__53937_53988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53937_53988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53937_53988):map__53937_53988);
var doc_53990 = cljs.core.get.call(null,map__53937_53989__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53991 = cljs.core.get.call(null,map__53937_53989__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53987);

cljs.core.println.call(null," ",arglists_53991);

if(cljs.core.truth_(doc_53990)){
cljs.core.println.call(null," ",doc_53990);
} else {
}

var G__53992 = cljs.core.next.call(null,seq__53925_53980__$1);
var G__53993 = null;
var G__53994 = (0);
var G__53995 = (0);
seq__53925_53965 = G__53992;
chunk__53926_53966 = G__53993;
count__53927_53967 = G__53994;
i__53928_53968 = G__53995;
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

var seq__53939 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53940 = null;
var count__53941 = (0);
var i__53942 = (0);
while(true){
if((i__53942 < count__53941)){
var role = cljs.core._nth.call(null,chunk__53940,i__53942);
var temp__4657__auto___53996__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53996__$1)){
var spec_53997 = temp__4657__auto___53996__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53997));
} else {
}

var G__53998 = seq__53939;
var G__53999 = chunk__53940;
var G__54000 = count__53941;
var G__54001 = (i__53942 + (1));
seq__53939 = G__53998;
chunk__53940 = G__53999;
count__53941 = G__54000;
i__53942 = G__54001;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53939);
if(temp__4657__auto____$1){
var seq__53939__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53939__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__53939__$1);
var G__54002 = cljs.core.chunk_rest.call(null,seq__53939__$1);
var G__54003 = c__37615__auto__;
var G__54004 = cljs.core.count.call(null,c__37615__auto__);
var G__54005 = (0);
seq__53939 = G__54002;
chunk__53940 = G__54003;
count__53941 = G__54004;
i__53942 = G__54005;
continue;
} else {
var role = cljs.core.first.call(null,seq__53939__$1);
var temp__4657__auto___54006__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54006__$2)){
var spec_54007 = temp__4657__auto___54006__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_54007));
} else {
}

var G__54008 = cljs.core.next.call(null,seq__53939__$1);
var G__54009 = null;
var G__54010 = (0);
var G__54011 = (0);
seq__53939 = G__54008;
chunk__53940 = G__54009;
count__53941 = G__54010;
i__53942 = G__54011;
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