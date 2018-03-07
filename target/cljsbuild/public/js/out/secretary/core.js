// Compiled by ClojureScript 1.9.229 {}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__37467__auto__ = (((this$ == null))?null:this$);
var m__37468__auto__ = (secretary.core.route_matches[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,this$,route);
} else {
var m__37468__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,this$,route);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__37467__auto__ = (((this$ == null))?null:this$);
var m__37468__auto__ = (secretary.core.route_value[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,this$);
} else {
var m__37468__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args55252 = [];
var len__37879__auto___55255 = arguments.length;
var i__37880__auto___55256 = (0);
while(true){
if((i__37880__auto___55256 < len__37879__auto___55255)){
args55252.push((arguments[i__37880__auto___55256]));

var G__55257 = (i__37880__auto___55256 + (1));
i__37880__auto___55256 = G__55257;
continue;
} else {
}
break;
}

var G__55254 = args55252.length;
switch (G__55254) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55252.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__37467__auto__ = (((this$ == null))?null:this$);
var m__37468__auto__ = (secretary.core.render_route[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,this$);
} else {
var m__37468__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__37467__auto__ = (((this$ == null))?null:this$);
var m__37468__auto__ = (secretary.core.render_route[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,this$,params);
} else {
var m__37468__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__37729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37731__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37733__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"secretary.core","encode-pair"),((function (method_table__37729__auto__,prefer_table__37730__auto__,method_cache__37731__auto__,cached_hierarchy__37732__auto__,hierarchy__37733__auto__){
return (function (p__55259){
var vec__55260 = p__55259;
var k = cljs.core.nth.call(null,vec__55260,(0),null);
var v = cljs.core.nth.call(null,vec__55260,(1),null);
if((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else {
if((function (){var or__36804__auto__ = cljs.core.map_QMARK_.call(null,v);
if(or__36804__auto__){
return or__36804__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || (v.cljs$core$IRecord$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
}
}
})()){
return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else {
return null;
}
}
});})(method_table__37729__auto__,prefer_table__37730__auto__,method_cache__37731__auto__,cached_hierarchy__37732__auto__,hierarchy__37733__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37733__auto__,method_table__37729__auto__,prefer_table__37730__auto__,method_cache__37731__auto__,cached_hierarchy__37732__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args55265 = [];
var len__37879__auto___55268 = arguments.length;
var i__37880__auto___55269 = (0);
while(true){
if((i__37880__auto___55269 < len__37879__auto___55268)){
args55265.push((arguments[i__37880__auto___55269]));

var G__55270 = (i__37880__auto___55269 + (1));
i__37880__auto___55269 = G__55270;
continue;
} else {
}
break;
}

var G__55267 = args55265.length;
switch (G__55267) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55265.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__55272){
var vec__55273 = p__55272;
var k = cljs.core.nth.call(null,vec__55273,(0),null);
var v = cljs.core.nth.call(null,vec__55273,(1),null);
var encoded = cljs.core.map_indexed.call(null,((function (vec__55273,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));
return secretary.core.encode_pair.call(null,pair);
});})(vec__55273,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__55276){
var vec__55277 = p__55276;
var k = cljs.core.nth.call(null,vec__55277,(0),null);
var v = cljs.core.nth.call(null,vec__55277,(1),null);
var encoded = cljs.core.map.call(null,((function (vec__55277,k,v){
return (function (p__55280){
var vec__55281 = p__55280;
var ik = cljs.core.nth.call(null,vec__55281,(0),null);
var iv = cljs.core.nth.call(null,vec__55281,(1),null);
return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
});})(vec__55277,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__55284){
var vec__55285 = p__55284;
var k = cljs.core.nth.call(null,vec__55285,(0),null);
var v = cljs.core.nth.call(null,vec__55285,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(secretary.core.encode.call(null,[cljs.core.str(v)].join('')))].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq.call(null,index_re,path);
return cljs.core.map.call(null,((function (index_re,parts){
return (function (p__55292){
var vec__55293 = p__55292;
var _ = cljs.core.nth.call(null,vec__55293,(0),null);
var part = cljs.core.nth.call(null,vec__55293,(1),null);
if(cljs.core.empty_QMARK_.call(null,part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__55299 = cljs.core.re_matches.call(null,re,k);
var _ = cljs.core.nth.call(null,vec__55299,(0),null);
var key = cljs.core.nth.call(null,vec__55299,(1),null);
var path = cljs.core.nth.call(null,vec__55299,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);
return cljs.core.cons.call(null,key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.call(null,(function (i,_){
return cljs.core.take.call(null,(i + (1)),xs);
}),xs);
});
var hs = heads.call(null,path);
var m__$1 = cljs.core.reduce.call(null,((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last.call(null,h) === 'number') && (!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h)))))){
return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last.call(null,path) === (0))){
return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.call(null,query_string,/&/);
var params = cljs.core.reduce.call(null,((function (parts){
return (function (m,part){
var vec__55305 = clojure.string.split.call(null,part,/=/,(2));
var k = cljs.core.nth.call(null,vec__55305,(0),null);
var v = cljs.core.nth.call(null,vec__55305,(1),null);
return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys.call(null,params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches.call(null,re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_.call(null,ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.call(null,(function (s__$1,c){
if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some.call(null,(function (p__55315){
var vec__55316 = p__55315;
var re = cljs.core.nth.call(null,vec__55316,(0),null);
var action = cljs.core.nth.call(null,vec__55316,(1),null);
var temp__4657__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__55319 = temp__4657__auto__;
var m = cljs.core.nth.call(null,vec__55319,(0),null);
var c = cljs.core.nth.call(null,vec__55319,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s__$1)){
var vec__55328 = secretary.core.lex_STAR_.call(null,s__$1,clauses);
var s__$2 = cljs.core.nth.call(null,vec__55328,(0),null);
var vec__55331 = cljs.core.nth.call(null,vec__55328,(1),null);
var r = cljs.core.nth.call(null,vec__55331,(0),null);
var p = cljs.core.nth.call(null,vec__55331,(1),null);
var G__55334 = s__$2;
var G__55335 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__55336 = cljs.core.conj.call(null,params,p);
s__$1 = G__55334;
pattern = G__55335;
params = G__55336;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",-1294732318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.call(null,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape.call(null,v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__55346 = secretary.core.lex_route.call(null,orig_route,clauses);
var re = cljs.core.nth.call(null,vec__55346,(0),null);
var params = cljs.core.nth.call(null,vec__55346,(1),null);
if(typeof secretary.core.t_secretary$core55349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core55349 = (function (compile_route,orig_route,clauses,vec__55346,re,params,meta55350){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__55346 = vec__55346;
this.re = re;
this.params = params;
this.meta55350 = meta55350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core55349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__55346,re,params){
return (function (_55351,meta55350__$1){
var self__ = this;
var _55351__$1 = this;
return (new secretary.core.t_secretary$core55349(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__55346,self__.re,self__.params,meta55350__$1));
});})(clauses,vec__55346,re,params))
;

secretary.core.t_secretary$core55349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__55346,re,params){
return (function (_55351){
var self__ = this;
var _55351__$1 = this;
return self__.meta55350;
});})(clauses,vec__55346,re,params))
;

secretary.core.t_secretary$core55349.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t_secretary$core55349.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__55346,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__55346,re,params))
;

secretary.core.t_secretary$core55349.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t_secretary$core55349.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__55346,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__55352 = temp__4657__auto__;
var seq__55353 = cljs.core.seq.call(null,vec__55352);
var first__55354 = cljs.core.first.call(null,seq__55353);
var seq__55353__$1 = cljs.core.next.call(null,seq__55353);
var ___$2 = first__55354;
var ms = seq__55353__$1;
return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else {
return null;
}
});})(clauses,vec__55346,re,params))
;

secretary.core.t_secretary$core55349.getBasis = ((function (clauses,vec__55346,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"compile-route","compile-route",-1479918120,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a route return an instance of IRouteMatches."], null)),new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__55346","vec__55346",-1908964161,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta55350","meta55350",1083777847,null)], null);
});})(clauses,vec__55346,re,params))
;

secretary.core.t_secretary$core55349.cljs$lang$type = true;

secretary.core.t_secretary$core55349.cljs$lang$ctorStr = "secretary.core/t_secretary$core55349";

secretary.core.t_secretary$core55349.cljs$lang$ctorPrWriter = ((function (clauses,vec__55346,re,params){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"secretary.core/t_secretary$core55349");
});})(clauses,vec__55346,re,params))
;

secretary.core.__GT_t_secretary$core55349 = ((function (clauses,vec__55346,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core55349(compile_route__$1,orig_route__$1,clauses__$1,vec__55346__$1,re__$1,params__$1,meta55350){
return (new secretary.core.t_secretary$core55349(compile_route__$1,orig_route__$1,clauses__$1,vec__55346__$1,re__$1,params__$1,meta55350));
});})(clauses,vec__55346,re,params))
;

}

return (new secretary.core.t_secretary$core55349(secretary$core$compile_route,orig_route,clauses,vec__55346,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___55358 = arguments.length;
var i__37880__auto___55359 = (0);
while(true){
if((i__37880__auto___55359 < len__37879__auto___55358)){
args__37886__auto__.push((arguments[i__37880__auto___55359]));

var G__55360 = (i__37880__auto___55359 + (1));
i__37880__auto___55359 = G__55360;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || (obj.secretary$core$IRenderRoute$))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj))){
return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq55355){
var G__55356 = cljs.core.first.call(null,seq55355);
var seq55355__$1 = cljs.core.next.call(null,seq55355);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__55356,seq55355__$1);
});

secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv.call(null,(function (p__55365){
var vec__55366 = p__55365;
var x = cljs.core.nth.call(null,vec__55366,(0),null);
var _ = cljs.core.nth.call(null,vec__55366,(1),null);
return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some.call(null,(function (p__55373){
var vec__55374 = p__55373;
var compiled_route = cljs.core.nth.call(null,vec__55374,(0),null);
var action = cljs.core.nth.call(null,vec__55374,(1),null);
var temp__4657__auto__ = secretary.core.route_matches.call(null,compiled_route,route);
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else {
return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace.call(null,uri,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(secretary.core.prefix.call(null))].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.call(null,"/",cljs.core.first.call(null,uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__55382 = clojure.string.split.call(null,secretary.core.uri_without_prefix.call(null,uri),/\?/);
var uri_path = cljs.core.nth.call(null,vec__55382,(0),null);
var query_string = cljs.core.nth.call(null,vec__55382,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash.call(null,uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params.call(null,query_string)], null):null);
var map__55385 = secretary.core.locate_route.call(null,uri_path__$1);
var map__55385__$1 = ((((!((map__55385 == null)))?((((map__55385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55385):map__55385);
var action = cljs.core.get.call(null,map__55385__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var params = cljs.core.get.call(null,map__55385__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action__$1 = (function (){var or__36804__auto__ = action;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.call(null,params,query_params);
return action__$1.call(null,params__$1);
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.call(null,(function (m,p__55391){
var vec__55392 = p__55391;
var key = cljs.core.nth.call(null,vec__55392,(0),null);
var validation = cljs.core.nth.call(null,vec__55392,(1),null);
var value = cljs.core.get.call(null,params,key);
if(cljs.core.truth_(cljs.core.re_matches.call(null,validation,value))){
return m;
} else {
return cljs.core.assoc.call(null,m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_.call(null,secretary.core.invalid_params.call(null,params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__55395 = temp__4657__auto__;
var seq__55396 = cljs.core.seq.call(null,vec__55395);
var first__55397 = cljs.core.first.call(null,seq__55396);
var seq__55396__$1 = cljs.core.next.call(null,seq__55396);
var _ = first__55397;
var ms = seq__55396__$1;
return cljs.core.vec.call(null,ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__55398,route){
var vec__55399 = p__55398;
var seq__55400 = cljs.core.seq.call(null,vec__55399);
var first__55401 = cljs.core.first.call(null,seq__55400);
var seq__55400__$1 = cljs.core.next.call(null,seq__55400);
var route_string = first__55401;
var validations = seq__55400__$1;
var vec__55402 = this;
var seq__55403 = cljs.core.seq.call(null,vec__55402);
var first__55404 = cljs.core.first.call(null,seq__55403);
var seq__55403__$1 = cljs.core.next.call(null,seq__55403);
var route_string__$1 = first__55404;
var validations__$1 = seq__55403__$1;
var params = secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_.call(null,params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__55405){
var vec__55406 = p__55405;
var seq__55407 = cljs.core.seq.call(null,vec__55406);
var first__55408 = cljs.core.first.call(null,seq__55407);
var seq__55407__$1 = cljs.core.next.call(null,seq__55407);
var route_string = first__55408;
var validations = seq__55407__$1;
var vec__55409 = this;
var seq__55410 = cljs.core.seq.call(null,vec__55409);
var first__55411 = cljs.core.first.call(null,seq__55410);
var seq__55410__$1 = cljs.core.next.call(null,seq__55410);
var route_string__$1 = first__55411;
var validations__$1 = seq__55410__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,secretary.core.route_value.call(null,route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__55421 = null;
var G__55421__1 = (function (this$){
return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__55421__2 = (function (this$,params){
var map__55412 = params;
var map__55412__$1 = ((((!((map__55412 == null)))?((((map__55412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55412):map__55412);
var m = map__55412__$1;
var query_params = cljs.core.get.call(null,map__55412__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var a = cljs.core.atom.call(null,m);
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__55412,map__55412__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,(1))));
var v = cljs.core.get.call(null,cljs.core.deref.call(null,a),lookup);
var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){
cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));

return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));
return replacement;
});})(map__55412,map__55412__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))),cljs.core.str(path)].join('');
var temp__4655__auto__ = (function (){var and__36792__auto__ = query_params;
if(cljs.core.truth_(and__36792__auto__)){
return secretary.core.encode_query_params.call(null,query_params);
} else {
return and__36792__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var query_string = temp__4655__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__55421 = function(this$,params){
switch(arguments.length){
case 1:
return G__55421__1.call(this,this$);
case 2:
return G__55421__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55421.cljs$core$IFn$_invoke$arity$1 = G__55421__1;
G__55421.cljs$core$IFn$_invoke$arity$2 = G__55421__2;
return G__55421;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__55414,params){
var vec__55415 = p__55414;
var seq__55416 = cljs.core.seq.call(null,vec__55415);
var first__55417 = cljs.core.first.call(null,seq__55416);
var seq__55416__$1 = cljs.core.next.call(null,seq__55416);
var route_string = first__55417;
var validations = seq__55416__$1;
var vec__55418 = this;
var seq__55419 = cljs.core.seq.call(null,vec__55418);
var first__55420 = cljs.core.first.call(null,seq__55419);
var seq__55419__$1 = cljs.core.next.call(null,seq__55419);
var route_string__$1 = first__55420;
var validations__$1 = seq__55419__$1;
var invalid = secretary.core.invalid_params.call(null,params,validations__$1);
if(cljs.core.empty_QMARK_.call(null,invalid)){
return secretary.core.render_route.call(null,route_string__$1,params);
} else {
throw cljs.core.ex_info.call(null,"Could not build route: invalid params",invalid);
}
});

//# sourceMappingURL=core.js.map