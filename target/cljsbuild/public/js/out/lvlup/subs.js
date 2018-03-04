// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db,p__39574){
var vec__39575 = p__39574;
var _ = cljs.core.nth.call(null,vec__39575,(0),null);
var the_key = cljs.core.nth.call(null,vec__39575,(1),null);
return cljs.core.get.call(null,db,cljs.core.keyword.call(null,the_key));
}));

//# sourceMappingURL=subs.js.map