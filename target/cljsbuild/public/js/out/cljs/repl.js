// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53893){
var map__53918 = p__53893;
var map__53918__$1 = ((((!((map__53918 == null)))?((((map__53918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53918):map__53918);
var m = map__53918__$1;
var n = cljs.core.get.call(null,map__53918__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53920_53942 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53921_53943 = null;
var count__53922_53944 = (0);
var i__53923_53945 = (0);
while(true){
if((i__53923_53945 < count__53922_53944)){
var f_53946 = cljs.core._nth.call(null,chunk__53921_53943,i__53923_53945);
cljs.core.println.call(null,"  ",f_53946);

var G__53947 = seq__53920_53942;
var G__53948 = chunk__53921_53943;
var G__53949 = count__53922_53944;
var G__53950 = (i__53923_53945 + (1));
seq__53920_53942 = G__53947;
chunk__53921_53943 = G__53948;
count__53922_53944 = G__53949;
i__53923_53945 = G__53950;
continue;
} else {
var temp__4657__auto___53951 = cljs.core.seq.call(null,seq__53920_53942);
if(temp__4657__auto___53951){
var seq__53920_53952__$1 = temp__4657__auto___53951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53920_53952__$1)){
var c__37615__auto___53953 = cljs.core.chunk_first.call(null,seq__53920_53952__$1);
var G__53954 = cljs.core.chunk_rest.call(null,seq__53920_53952__$1);
var G__53955 = c__37615__auto___53953;
var G__53956 = cljs.core.count.call(null,c__37615__auto___53953);
var G__53957 = (0);
seq__53920_53942 = G__53954;
chunk__53921_53943 = G__53955;
count__53922_53944 = G__53956;
i__53923_53945 = G__53957;
continue;
} else {
var f_53958 = cljs.core.first.call(null,seq__53920_53952__$1);
cljs.core.println.call(null,"  ",f_53958);

var G__53959 = cljs.core.next.call(null,seq__53920_53952__$1);
var G__53960 = null;
var G__53961 = (0);
var G__53962 = (0);
seq__53920_53942 = G__53959;
chunk__53921_53943 = G__53960;
count__53922_53944 = G__53961;
i__53923_53945 = G__53962;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53963 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36804__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53963);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53963)))?cljs.core.second.call(null,arglists_53963):arglists_53963));
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
var seq__53924_53964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53925_53965 = null;
var count__53926_53966 = (0);
var i__53927_53967 = (0);
while(true){
if((i__53927_53967 < count__53926_53966)){
var vec__53928_53968 = cljs.core._nth.call(null,chunk__53925_53965,i__53927_53967);
var name_53969 = cljs.core.nth.call(null,vec__53928_53968,(0),null);
var map__53931_53970 = cljs.core.nth.call(null,vec__53928_53968,(1),null);
var map__53931_53971__$1 = ((((!((map__53931_53970 == null)))?((((map__53931_53970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53931_53970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53931_53970):map__53931_53970);
var doc_53972 = cljs.core.get.call(null,map__53931_53971__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53973 = cljs.core.get.call(null,map__53931_53971__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53969);

cljs.core.println.call(null," ",arglists_53973);

if(cljs.core.truth_(doc_53972)){
cljs.core.println.call(null," ",doc_53972);
} else {
}

var G__53974 = seq__53924_53964;
var G__53975 = chunk__53925_53965;
var G__53976 = count__53926_53966;
var G__53977 = (i__53927_53967 + (1));
seq__53924_53964 = G__53974;
chunk__53925_53965 = G__53975;
count__53926_53966 = G__53976;
i__53927_53967 = G__53977;
continue;
} else {
var temp__4657__auto___53978 = cljs.core.seq.call(null,seq__53924_53964);
if(temp__4657__auto___53978){
var seq__53924_53979__$1 = temp__4657__auto___53978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53924_53979__$1)){
var c__37615__auto___53980 = cljs.core.chunk_first.call(null,seq__53924_53979__$1);
var G__53981 = cljs.core.chunk_rest.call(null,seq__53924_53979__$1);
var G__53982 = c__37615__auto___53980;
var G__53983 = cljs.core.count.call(null,c__37615__auto___53980);
var G__53984 = (0);
seq__53924_53964 = G__53981;
chunk__53925_53965 = G__53982;
count__53926_53966 = G__53983;
i__53927_53967 = G__53984;
continue;
} else {
var vec__53933_53985 = cljs.core.first.call(null,seq__53924_53979__$1);
var name_53986 = cljs.core.nth.call(null,vec__53933_53985,(0),null);
var map__53936_53987 = cljs.core.nth.call(null,vec__53933_53985,(1),null);
var map__53936_53988__$1 = ((((!((map__53936_53987 == null)))?((((map__53936_53987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53936_53987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53936_53987):map__53936_53987);
var doc_53989 = cljs.core.get.call(null,map__53936_53988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53990 = cljs.core.get.call(null,map__53936_53988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53986);

cljs.core.println.call(null," ",arglists_53990);

if(cljs.core.truth_(doc_53989)){
cljs.core.println.call(null," ",doc_53989);
} else {
}

var G__53991 = cljs.core.next.call(null,seq__53924_53979__$1);
var G__53992 = null;
var G__53993 = (0);
var G__53994 = (0);
seq__53924_53964 = G__53991;
chunk__53925_53965 = G__53992;
count__53926_53966 = G__53993;
i__53927_53967 = G__53994;
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

var seq__53938 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53939 = null;
var count__53940 = (0);
var i__53941 = (0);
while(true){
if((i__53941 < count__53940)){
var role = cljs.core._nth.call(null,chunk__53939,i__53941);
var temp__4657__auto___53995__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53995__$1)){
var spec_53996 = temp__4657__auto___53995__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53996));
} else {
}

var G__53997 = seq__53938;
var G__53998 = chunk__53939;
var G__53999 = count__53940;
var G__54000 = (i__53941 + (1));
seq__53938 = G__53997;
chunk__53939 = G__53998;
count__53940 = G__53999;
i__53941 = G__54000;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53938);
if(temp__4657__auto____$1){
var seq__53938__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53938__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__53938__$1);
var G__54001 = cljs.core.chunk_rest.call(null,seq__53938__$1);
var G__54002 = c__37615__auto__;
var G__54003 = cljs.core.count.call(null,c__37615__auto__);
var G__54004 = (0);
seq__53938 = G__54001;
chunk__53939 = G__54002;
count__53940 = G__54003;
i__53941 = G__54004;
continue;
} else {
var role = cljs.core.first.call(null,seq__53938__$1);
var temp__4657__auto___54005__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54005__$2)){
var spec_54006 = temp__4657__auto___54005__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_54006));
} else {
}

var G__54007 = cljs.core.next.call(null,seq__53938__$1);
var G__54008 = null;
var G__54009 = (0);
var G__54010 = (0);
seq__53938 = G__54007;
chunk__53939 = G__54008;
count__53940 = G__54009;
i__53941 = G__54010;
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