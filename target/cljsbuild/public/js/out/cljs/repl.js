// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53985){
var map__54010 = p__53985;
var map__54010__$1 = ((((!((map__54010 == null)))?((((map__54010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54010):map__54010);
var m = map__54010__$1;
var n = cljs.core.get.call(null,map__54010__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__54010__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__54012_54034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54013_54035 = null;
var count__54014_54036 = (0);
var i__54015_54037 = (0);
while(true){
if((i__54015_54037 < count__54014_54036)){
var f_54038 = cljs.core._nth.call(null,chunk__54013_54035,i__54015_54037);
cljs.core.println.call(null,"  ",f_54038);

var G__54039 = seq__54012_54034;
var G__54040 = chunk__54013_54035;
var G__54041 = count__54014_54036;
var G__54042 = (i__54015_54037 + (1));
seq__54012_54034 = G__54039;
chunk__54013_54035 = G__54040;
count__54014_54036 = G__54041;
i__54015_54037 = G__54042;
continue;
} else {
var temp__4657__auto___54043 = cljs.core.seq.call(null,seq__54012_54034);
if(temp__4657__auto___54043){
var seq__54012_54044__$1 = temp__4657__auto___54043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54012_54044__$1)){
var c__37587__auto___54045 = cljs.core.chunk_first.call(null,seq__54012_54044__$1);
var G__54046 = cljs.core.chunk_rest.call(null,seq__54012_54044__$1);
var G__54047 = c__37587__auto___54045;
var G__54048 = cljs.core.count.call(null,c__37587__auto___54045);
var G__54049 = (0);
seq__54012_54034 = G__54046;
chunk__54013_54035 = G__54047;
count__54014_54036 = G__54048;
i__54015_54037 = G__54049;
continue;
} else {
var f_54050 = cljs.core.first.call(null,seq__54012_54044__$1);
cljs.core.println.call(null,"  ",f_54050);

var G__54051 = cljs.core.next.call(null,seq__54012_54044__$1);
var G__54052 = null;
var G__54053 = (0);
var G__54054 = (0);
seq__54012_54034 = G__54051;
chunk__54013_54035 = G__54052;
count__54014_54036 = G__54053;
i__54015_54037 = G__54054;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54055 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36776__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_54055);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_54055)))?cljs.core.second.call(null,arglists_54055):arglists_54055));
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
var seq__54016_54056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54017_54057 = null;
var count__54018_54058 = (0);
var i__54019_54059 = (0);
while(true){
if((i__54019_54059 < count__54018_54058)){
var vec__54020_54060 = cljs.core._nth.call(null,chunk__54017_54057,i__54019_54059);
var name_54061 = cljs.core.nth.call(null,vec__54020_54060,(0),null);
var map__54023_54062 = cljs.core.nth.call(null,vec__54020_54060,(1),null);
var map__54023_54063__$1 = ((((!((map__54023_54062 == null)))?((((map__54023_54062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54023_54062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54023_54062):map__54023_54062);
var doc_54064 = cljs.core.get.call(null,map__54023_54063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54065 = cljs.core.get.call(null,map__54023_54063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54061);

cljs.core.println.call(null," ",arglists_54065);

if(cljs.core.truth_(doc_54064)){
cljs.core.println.call(null," ",doc_54064);
} else {
}

var G__54066 = seq__54016_54056;
var G__54067 = chunk__54017_54057;
var G__54068 = count__54018_54058;
var G__54069 = (i__54019_54059 + (1));
seq__54016_54056 = G__54066;
chunk__54017_54057 = G__54067;
count__54018_54058 = G__54068;
i__54019_54059 = G__54069;
continue;
} else {
var temp__4657__auto___54070 = cljs.core.seq.call(null,seq__54016_54056);
if(temp__4657__auto___54070){
var seq__54016_54071__$1 = temp__4657__auto___54070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54016_54071__$1)){
var c__37587__auto___54072 = cljs.core.chunk_first.call(null,seq__54016_54071__$1);
var G__54073 = cljs.core.chunk_rest.call(null,seq__54016_54071__$1);
var G__54074 = c__37587__auto___54072;
var G__54075 = cljs.core.count.call(null,c__37587__auto___54072);
var G__54076 = (0);
seq__54016_54056 = G__54073;
chunk__54017_54057 = G__54074;
count__54018_54058 = G__54075;
i__54019_54059 = G__54076;
continue;
} else {
var vec__54025_54077 = cljs.core.first.call(null,seq__54016_54071__$1);
var name_54078 = cljs.core.nth.call(null,vec__54025_54077,(0),null);
var map__54028_54079 = cljs.core.nth.call(null,vec__54025_54077,(1),null);
var map__54028_54080__$1 = ((((!((map__54028_54079 == null)))?((((map__54028_54079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54028_54079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54028_54079):map__54028_54079);
var doc_54081 = cljs.core.get.call(null,map__54028_54080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54082 = cljs.core.get.call(null,map__54028_54080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54078);

cljs.core.println.call(null," ",arglists_54082);

if(cljs.core.truth_(doc_54081)){
cljs.core.println.call(null," ",doc_54081);
} else {
}

var G__54083 = cljs.core.next.call(null,seq__54016_54071__$1);
var G__54084 = null;
var G__54085 = (0);
var G__54086 = (0);
seq__54016_54056 = G__54083;
chunk__54017_54057 = G__54084;
count__54018_54058 = G__54085;
i__54019_54059 = G__54086;
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

var seq__54030 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54031 = null;
var count__54032 = (0);
var i__54033 = (0);
while(true){
if((i__54033 < count__54032)){
var role = cljs.core._nth.call(null,chunk__54031,i__54033);
var temp__4657__auto___54087__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54087__$1)){
var spec_54088 = temp__4657__auto___54087__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_54088));
} else {
}

var G__54089 = seq__54030;
var G__54090 = chunk__54031;
var G__54091 = count__54032;
var G__54092 = (i__54033 + (1));
seq__54030 = G__54089;
chunk__54031 = G__54090;
count__54032 = G__54091;
i__54033 = G__54092;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__54030);
if(temp__4657__auto____$1){
var seq__54030__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54030__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__54030__$1);
var G__54093 = cljs.core.chunk_rest.call(null,seq__54030__$1);
var G__54094 = c__37587__auto__;
var G__54095 = cljs.core.count.call(null,c__37587__auto__);
var G__54096 = (0);
seq__54030 = G__54093;
chunk__54031 = G__54094;
count__54032 = G__54095;
i__54033 = G__54096;
continue;
} else {
var role = cljs.core.first.call(null,seq__54030__$1);
var temp__4657__auto___54097__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54097__$2)){
var spec_54098 = temp__4657__auto___54097__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_54098));
} else {
}

var G__54099 = cljs.core.next.call(null,seq__54030__$1);
var G__54100 = null;
var G__54101 = (0);
var G__54102 = (0);
seq__54030 = G__54099;
chunk__54031 = G__54100;
count__54032 = G__54101;
i__54033 = G__54102;
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