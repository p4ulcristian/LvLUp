// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53838){
var map__53863 = p__53838;
var map__53863__$1 = ((((!((map__53863 == null)))?((((map__53863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53863):map__53863);
var m = map__53863__$1;
var n = cljs.core.get.call(null,map__53863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53865_53887 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53866_53888 = null;
var count__53867_53889 = (0);
var i__53868_53890 = (0);
while(true){
if((i__53868_53890 < count__53867_53889)){
var f_53891 = cljs.core._nth.call(null,chunk__53866_53888,i__53868_53890);
cljs.core.println.call(null,"  ",f_53891);

var G__53892 = seq__53865_53887;
var G__53893 = chunk__53866_53888;
var G__53894 = count__53867_53889;
var G__53895 = (i__53868_53890 + (1));
seq__53865_53887 = G__53892;
chunk__53866_53888 = G__53893;
count__53867_53889 = G__53894;
i__53868_53890 = G__53895;
continue;
} else {
var temp__4657__auto___53896 = cljs.core.seq.call(null,seq__53865_53887);
if(temp__4657__auto___53896){
var seq__53865_53897__$1 = temp__4657__auto___53896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53865_53897__$1)){
var c__37613__auto___53898 = cljs.core.chunk_first.call(null,seq__53865_53897__$1);
var G__53899 = cljs.core.chunk_rest.call(null,seq__53865_53897__$1);
var G__53900 = c__37613__auto___53898;
var G__53901 = cljs.core.count.call(null,c__37613__auto___53898);
var G__53902 = (0);
seq__53865_53887 = G__53899;
chunk__53866_53888 = G__53900;
count__53867_53889 = G__53901;
i__53868_53890 = G__53902;
continue;
} else {
var f_53903 = cljs.core.first.call(null,seq__53865_53897__$1);
cljs.core.println.call(null,"  ",f_53903);

var G__53904 = cljs.core.next.call(null,seq__53865_53897__$1);
var G__53905 = null;
var G__53906 = (0);
var G__53907 = (0);
seq__53865_53887 = G__53904;
chunk__53866_53888 = G__53905;
count__53867_53889 = G__53906;
i__53868_53890 = G__53907;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53908 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36802__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53908);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53908)))?cljs.core.second.call(null,arglists_53908):arglists_53908));
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
var seq__53869_53909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53870_53910 = null;
var count__53871_53911 = (0);
var i__53872_53912 = (0);
while(true){
if((i__53872_53912 < count__53871_53911)){
var vec__53873_53913 = cljs.core._nth.call(null,chunk__53870_53910,i__53872_53912);
var name_53914 = cljs.core.nth.call(null,vec__53873_53913,(0),null);
var map__53876_53915 = cljs.core.nth.call(null,vec__53873_53913,(1),null);
var map__53876_53916__$1 = ((((!((map__53876_53915 == null)))?((((map__53876_53915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53876_53915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53876_53915):map__53876_53915);
var doc_53917 = cljs.core.get.call(null,map__53876_53916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53918 = cljs.core.get.call(null,map__53876_53916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53914);

cljs.core.println.call(null," ",arglists_53918);

if(cljs.core.truth_(doc_53917)){
cljs.core.println.call(null," ",doc_53917);
} else {
}

var G__53919 = seq__53869_53909;
var G__53920 = chunk__53870_53910;
var G__53921 = count__53871_53911;
var G__53922 = (i__53872_53912 + (1));
seq__53869_53909 = G__53919;
chunk__53870_53910 = G__53920;
count__53871_53911 = G__53921;
i__53872_53912 = G__53922;
continue;
} else {
var temp__4657__auto___53923 = cljs.core.seq.call(null,seq__53869_53909);
if(temp__4657__auto___53923){
var seq__53869_53924__$1 = temp__4657__auto___53923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53869_53924__$1)){
var c__37613__auto___53925 = cljs.core.chunk_first.call(null,seq__53869_53924__$1);
var G__53926 = cljs.core.chunk_rest.call(null,seq__53869_53924__$1);
var G__53927 = c__37613__auto___53925;
var G__53928 = cljs.core.count.call(null,c__37613__auto___53925);
var G__53929 = (0);
seq__53869_53909 = G__53926;
chunk__53870_53910 = G__53927;
count__53871_53911 = G__53928;
i__53872_53912 = G__53929;
continue;
} else {
var vec__53878_53930 = cljs.core.first.call(null,seq__53869_53924__$1);
var name_53931 = cljs.core.nth.call(null,vec__53878_53930,(0),null);
var map__53881_53932 = cljs.core.nth.call(null,vec__53878_53930,(1),null);
var map__53881_53933__$1 = ((((!((map__53881_53932 == null)))?((((map__53881_53932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53881_53932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53881_53932):map__53881_53932);
var doc_53934 = cljs.core.get.call(null,map__53881_53933__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53935 = cljs.core.get.call(null,map__53881_53933__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53931);

cljs.core.println.call(null," ",arglists_53935);

if(cljs.core.truth_(doc_53934)){
cljs.core.println.call(null," ",doc_53934);
} else {
}

var G__53936 = cljs.core.next.call(null,seq__53869_53924__$1);
var G__53937 = null;
var G__53938 = (0);
var G__53939 = (0);
seq__53869_53909 = G__53936;
chunk__53870_53910 = G__53937;
count__53871_53911 = G__53938;
i__53872_53912 = G__53939;
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

var seq__53883 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53884 = null;
var count__53885 = (0);
var i__53886 = (0);
while(true){
if((i__53886 < count__53885)){
var role = cljs.core._nth.call(null,chunk__53884,i__53886);
var temp__4657__auto___53940__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53940__$1)){
var spec_53941 = temp__4657__auto___53940__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53941));
} else {
}

var G__53942 = seq__53883;
var G__53943 = chunk__53884;
var G__53944 = count__53885;
var G__53945 = (i__53886 + (1));
seq__53883 = G__53942;
chunk__53884 = G__53943;
count__53885 = G__53944;
i__53886 = G__53945;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53883);
if(temp__4657__auto____$1){
var seq__53883__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53883__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__53883__$1);
var G__53946 = cljs.core.chunk_rest.call(null,seq__53883__$1);
var G__53947 = c__37613__auto__;
var G__53948 = cljs.core.count.call(null,c__37613__auto__);
var G__53949 = (0);
seq__53883 = G__53946;
chunk__53884 = G__53947;
count__53885 = G__53948;
i__53886 = G__53949;
continue;
} else {
var role = cljs.core.first.call(null,seq__53883__$1);
var temp__4657__auto___53950__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53950__$2)){
var spec_53951 = temp__4657__auto___53950__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53951));
} else {
}

var G__53952 = cljs.core.next.call(null,seq__53883__$1);
var G__53953 = null;
var G__53954 = (0);
var G__53955 = (0);
seq__53883 = G__53952;
chunk__53884 = G__53953;
count__53885 = G__53954;
i__53886 = G__53955;
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