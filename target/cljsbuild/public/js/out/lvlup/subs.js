// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db,p__39625){
var vec__39626 = p__39625;
var _ = cljs.core.nth.call(null,vec__39626,(0),null);
var the_key = cljs.core.nth.call(null,vec__39626,(1),null);
return cljs.core.get.call(null,db,cljs.core.keyword.call(null,the_key));
}));

//# sourceMappingURL=subs.js.map