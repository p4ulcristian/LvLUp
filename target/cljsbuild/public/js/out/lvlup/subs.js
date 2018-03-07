// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db,p__39576){
var vec__39577 = p__39576;
var _ = cljs.core.nth.call(null,vec__39577,(0),null);
var the_key = cljs.core.nth.call(null,vec__39577,(1),null);
return cljs.core.get.call(null,db,cljs.core.keyword.call(null,the_key));
}));

//# sourceMappingURL=subs.js.map