// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53882){
var map__53907 = p__53882;
var map__53907__$1 = ((((!((map__53907 == null)))?((((map__53907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53907):map__53907);
var m = map__53907__$1;
var n = cljs.core.get.call(null,map__53907__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53907__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53909_53931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53910_53932 = null;
var count__53911_53933 = (0);
var i__53912_53934 = (0);
while(true){
if((i__53912_53934 < count__53911_53933)){
var f_53935 = cljs.core._nth.call(null,chunk__53910_53932,i__53912_53934);
cljs.core.println.call(null,"  ",f_53935);

var G__53936 = seq__53909_53931;
var G__53937 = chunk__53910_53932;
var G__53938 = count__53911_53933;
var G__53939 = (i__53912_53934 + (1));
seq__53909_53931 = G__53936;
chunk__53910_53932 = G__53937;
count__53911_53933 = G__53938;
i__53912_53934 = G__53939;
continue;
} else {
var temp__4657__auto___53940 = cljs.core.seq.call(null,seq__53909_53931);
if(temp__4657__auto___53940){
var seq__53909_53941__$1 = temp__4657__auto___53940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53909_53941__$1)){
var c__37569__auto___53942 = cljs.core.chunk_first.call(null,seq__53909_53941__$1);
var G__53943 = cljs.core.chunk_rest.call(null,seq__53909_53941__$1);
var G__53944 = c__37569__auto___53942;
var G__53945 = cljs.core.count.call(null,c__37569__auto___53942);
var G__53946 = (0);
seq__53909_53931 = G__53943;
chunk__53910_53932 = G__53944;
count__53911_53933 = G__53945;
i__53912_53934 = G__53946;
continue;
} else {
var f_53947 = cljs.core.first.call(null,seq__53909_53941__$1);
cljs.core.println.call(null,"  ",f_53947);

var G__53948 = cljs.core.next.call(null,seq__53909_53941__$1);
var G__53949 = null;
var G__53950 = (0);
var G__53951 = (0);
seq__53909_53931 = G__53948;
chunk__53910_53932 = G__53949;
count__53911_53933 = G__53950;
i__53912_53934 = G__53951;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53952 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36758__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53952);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53952)))?cljs.core.second.call(null,arglists_53952):arglists_53952));
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
var seq__53913_53953 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53914_53954 = null;
var count__53915_53955 = (0);
var i__53916_53956 = (0);
while(true){
if((i__53916_53956 < count__53915_53955)){
var vec__53917_53957 = cljs.core._nth.call(null,chunk__53914_53954,i__53916_53956);
var name_53958 = cljs.core.nth.call(null,vec__53917_53957,(0),null);
var map__53920_53959 = cljs.core.nth.call(null,vec__53917_53957,(1),null);
var map__53920_53960__$1 = ((((!((map__53920_53959 == null)))?((((map__53920_53959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53920_53959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53920_53959):map__53920_53959);
var doc_53961 = cljs.core.get.call(null,map__53920_53960__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53962 = cljs.core.get.call(null,map__53920_53960__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53958);

cljs.core.println.call(null," ",arglists_53962);

if(cljs.core.truth_(doc_53961)){
cljs.core.println.call(null," ",doc_53961);
} else {
}

var G__53963 = seq__53913_53953;
var G__53964 = chunk__53914_53954;
var G__53965 = count__53915_53955;
var G__53966 = (i__53916_53956 + (1));
seq__53913_53953 = G__53963;
chunk__53914_53954 = G__53964;
count__53915_53955 = G__53965;
i__53916_53956 = G__53966;
continue;
} else {
var temp__4657__auto___53967 = cljs.core.seq.call(null,seq__53913_53953);
if(temp__4657__auto___53967){
var seq__53913_53968__$1 = temp__4657__auto___53967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53913_53968__$1)){
var c__37569__auto___53969 = cljs.core.chunk_first.call(null,seq__53913_53968__$1);
var G__53970 = cljs.core.chunk_rest.call(null,seq__53913_53968__$1);
var G__53971 = c__37569__auto___53969;
var G__53972 = cljs.core.count.call(null,c__37569__auto___53969);
var G__53973 = (0);
seq__53913_53953 = G__53970;
chunk__53914_53954 = G__53971;
count__53915_53955 = G__53972;
i__53916_53956 = G__53973;
continue;
} else {
var vec__53922_53974 = cljs.core.first.call(null,seq__53913_53968__$1);
var name_53975 = cljs.core.nth.call(null,vec__53922_53974,(0),null);
var map__53925_53976 = cljs.core.nth.call(null,vec__53922_53974,(1),null);
var map__53925_53977__$1 = ((((!((map__53925_53976 == null)))?((((map__53925_53976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53925_53976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53925_53976):map__53925_53976);
var doc_53978 = cljs.core.get.call(null,map__53925_53977__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53979 = cljs.core.get.call(null,map__53925_53977__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53975);

cljs.core.println.call(null," ",arglists_53979);

if(cljs.core.truth_(doc_53978)){
cljs.core.println.call(null," ",doc_53978);
} else {
}

var G__53980 = cljs.core.next.call(null,seq__53913_53968__$1);
var G__53981 = null;
var G__53982 = (0);
var G__53983 = (0);
seq__53913_53953 = G__53980;
chunk__53914_53954 = G__53981;
count__53915_53955 = G__53982;
i__53916_53956 = G__53983;
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

var seq__53927 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53928 = null;
var count__53929 = (0);
var i__53930 = (0);
while(true){
if((i__53930 < count__53929)){
var role = cljs.core._nth.call(null,chunk__53928,i__53930);
var temp__4657__auto___53984__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53984__$1)){
var spec_53985 = temp__4657__auto___53984__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53985));
} else {
}

var G__53986 = seq__53927;
var G__53987 = chunk__53928;
var G__53988 = count__53929;
var G__53989 = (i__53930 + (1));
seq__53927 = G__53986;
chunk__53928 = G__53987;
count__53929 = G__53988;
i__53930 = G__53989;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53927);
if(temp__4657__auto____$1){
var seq__53927__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53927__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__53927__$1);
var G__53990 = cljs.core.chunk_rest.call(null,seq__53927__$1);
var G__53991 = c__37569__auto__;
var G__53992 = cljs.core.count.call(null,c__37569__auto__);
var G__53993 = (0);
seq__53927 = G__53990;
chunk__53928 = G__53991;
count__53929 = G__53992;
i__53930 = G__53993;
continue;
} else {
var role = cljs.core.first.call(null,seq__53927__$1);
var temp__4657__auto___53994__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53994__$2)){
var spec_53995 = temp__4657__auto___53994__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53995));
} else {
}

var G__53996 = cljs.core.next.call(null,seq__53927__$1);
var G__53997 = null;
var G__53998 = (0);
var G__53999 = (0);
seq__53927 = G__53996;
chunk__53928 = G__53997;
count__53929 = G__53998;
i__53930 = G__53999;
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