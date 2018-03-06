// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53836){
var map__53861 = p__53836;
var map__53861__$1 = ((((!((map__53861 == null)))?((((map__53861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53861):map__53861);
var m = map__53861__$1;
var n = cljs.core.get.call(null,map__53861__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53861__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53863_53885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53864_53886 = null;
var count__53865_53887 = (0);
var i__53866_53888 = (0);
while(true){
if((i__53866_53888 < count__53865_53887)){
var f_53889 = cljs.core._nth.call(null,chunk__53864_53886,i__53866_53888);
cljs.core.println.call(null,"  ",f_53889);

var G__53890 = seq__53863_53885;
var G__53891 = chunk__53864_53886;
var G__53892 = count__53865_53887;
var G__53893 = (i__53866_53888 + (1));
seq__53863_53885 = G__53890;
chunk__53864_53886 = G__53891;
count__53865_53887 = G__53892;
i__53866_53888 = G__53893;
continue;
} else {
var temp__4657__auto___53894 = cljs.core.seq.call(null,seq__53863_53885);
if(temp__4657__auto___53894){
var seq__53863_53895__$1 = temp__4657__auto___53894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53863_53895__$1)){
var c__37613__auto___53896 = cljs.core.chunk_first.call(null,seq__53863_53895__$1);
var G__53897 = cljs.core.chunk_rest.call(null,seq__53863_53895__$1);
var G__53898 = c__37613__auto___53896;
var G__53899 = cljs.core.count.call(null,c__37613__auto___53896);
var G__53900 = (0);
seq__53863_53885 = G__53897;
chunk__53864_53886 = G__53898;
count__53865_53887 = G__53899;
i__53866_53888 = G__53900;
continue;
} else {
var f_53901 = cljs.core.first.call(null,seq__53863_53895__$1);
cljs.core.println.call(null,"  ",f_53901);

var G__53902 = cljs.core.next.call(null,seq__53863_53895__$1);
var G__53903 = null;
var G__53904 = (0);
var G__53905 = (0);
seq__53863_53885 = G__53902;
chunk__53864_53886 = G__53903;
count__53865_53887 = G__53904;
i__53866_53888 = G__53905;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53906 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36802__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53906);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53906)))?cljs.core.second.call(null,arglists_53906):arglists_53906));
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
var seq__53867_53907 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53868_53908 = null;
var count__53869_53909 = (0);
var i__53870_53910 = (0);
while(true){
if((i__53870_53910 < count__53869_53909)){
var vec__53871_53911 = cljs.core._nth.call(null,chunk__53868_53908,i__53870_53910);
var name_53912 = cljs.core.nth.call(null,vec__53871_53911,(0),null);
var map__53874_53913 = cljs.core.nth.call(null,vec__53871_53911,(1),null);
var map__53874_53914__$1 = ((((!((map__53874_53913 == null)))?((((map__53874_53913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53874_53913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53874_53913):map__53874_53913);
var doc_53915 = cljs.core.get.call(null,map__53874_53914__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53916 = cljs.core.get.call(null,map__53874_53914__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53912);

cljs.core.println.call(null," ",arglists_53916);

if(cljs.core.truth_(doc_53915)){
cljs.core.println.call(null," ",doc_53915);
} else {
}

var G__53917 = seq__53867_53907;
var G__53918 = chunk__53868_53908;
var G__53919 = count__53869_53909;
var G__53920 = (i__53870_53910 + (1));
seq__53867_53907 = G__53917;
chunk__53868_53908 = G__53918;
count__53869_53909 = G__53919;
i__53870_53910 = G__53920;
continue;
} else {
var temp__4657__auto___53921 = cljs.core.seq.call(null,seq__53867_53907);
if(temp__4657__auto___53921){
var seq__53867_53922__$1 = temp__4657__auto___53921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53867_53922__$1)){
var c__37613__auto___53923 = cljs.core.chunk_first.call(null,seq__53867_53922__$1);
var G__53924 = cljs.core.chunk_rest.call(null,seq__53867_53922__$1);
var G__53925 = c__37613__auto___53923;
var G__53926 = cljs.core.count.call(null,c__37613__auto___53923);
var G__53927 = (0);
seq__53867_53907 = G__53924;
chunk__53868_53908 = G__53925;
count__53869_53909 = G__53926;
i__53870_53910 = G__53927;
continue;
} else {
var vec__53876_53928 = cljs.core.first.call(null,seq__53867_53922__$1);
var name_53929 = cljs.core.nth.call(null,vec__53876_53928,(0),null);
var map__53879_53930 = cljs.core.nth.call(null,vec__53876_53928,(1),null);
var map__53879_53931__$1 = ((((!((map__53879_53930 == null)))?((((map__53879_53930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53879_53930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53879_53930):map__53879_53930);
var doc_53932 = cljs.core.get.call(null,map__53879_53931__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53933 = cljs.core.get.call(null,map__53879_53931__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53929);

cljs.core.println.call(null," ",arglists_53933);

if(cljs.core.truth_(doc_53932)){
cljs.core.println.call(null," ",doc_53932);
} else {
}

var G__53934 = cljs.core.next.call(null,seq__53867_53922__$1);
var G__53935 = null;
var G__53936 = (0);
var G__53937 = (0);
seq__53867_53907 = G__53934;
chunk__53868_53908 = G__53935;
count__53869_53909 = G__53936;
i__53870_53910 = G__53937;
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

var seq__53881 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53882 = null;
var count__53883 = (0);
var i__53884 = (0);
while(true){
if((i__53884 < count__53883)){
var role = cljs.core._nth.call(null,chunk__53882,i__53884);
var temp__4657__auto___53938__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53938__$1)){
var spec_53939 = temp__4657__auto___53938__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53939));
} else {
}

var G__53940 = seq__53881;
var G__53941 = chunk__53882;
var G__53942 = count__53883;
var G__53943 = (i__53884 + (1));
seq__53881 = G__53940;
chunk__53882 = G__53941;
count__53883 = G__53942;
i__53884 = G__53943;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53881);
if(temp__4657__auto____$1){
var seq__53881__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53881__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__53881__$1);
var G__53944 = cljs.core.chunk_rest.call(null,seq__53881__$1);
var G__53945 = c__37613__auto__;
var G__53946 = cljs.core.count.call(null,c__37613__auto__);
var G__53947 = (0);
seq__53881 = G__53944;
chunk__53882 = G__53945;
count__53883 = G__53946;
i__53884 = G__53947;
continue;
} else {
var role = cljs.core.first.call(null,seq__53881__$1);
var temp__4657__auto___53948__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53948__$2)){
var spec_53949 = temp__4657__auto___53948__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53949));
} else {
}

var G__53950 = cljs.core.next.call(null,seq__53881__$1);
var G__53951 = null;
var G__53952 = (0);
var G__53953 = (0);
seq__53881 = G__53950;
chunk__53882 = G__53951;
count__53883 = G__53952;
i__53884 = G__53953;
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