// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k44378,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__44380 = (((k44378 instanceof cljs.core.Keyword))?k44378.fqn:null);
switch (G__44380) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44378,else__37427__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__44381,opts){
var self__ = this;
var map__44382 = p__44381;
var map__44382__$1 = ((((!((map__44382 == null)))?((((map__44382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44382):map__44382);
var request__$1 = cljs.core.get.call(null,map__44382__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__44384 = this;
var map__44384__$1 = ((((!((map__44384 == null)))?((((map__44384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44384):map__44384);
var request__$2 = cljs.core.get.call(null,map__44384__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__44386,xhrio){
var self__ = this;
var map__44387 = p__44386;
var map__44387__$1 = ((((!((map__44387 == null)))?((((map__44387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44387):map__44387);
var response__$1 = cljs.core.get.call(null,map__44387__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__44389 = this;
var map__44389__$1 = ((((!((map__44389 == null)))?((((map__44389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44389):map__44389);
var response__$2 = cljs.core.get.call(null,map__44389__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44377){
var self__ = this;
var G__44377__$1 = this;
return (new cljs.core.RecordIter((0),G__44377__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__44377){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__44391 = cljs.core.keyword_identical_QMARK_;
var expr__44392 = k__37432__auto__;
if(cljs.core.truth_(pred__44391.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__44392))){
return (new ajax.core.StandardInterceptor(G__44377,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44391.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__44392))){
return (new ajax.core.StandardInterceptor(self__.name,G__44377,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44391.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__44392))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__44377,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__44377),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__44377){
var self__ = this;
var this__37423__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__44377,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__44379){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44379),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__44379),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__44379),null,cljs.core.dissoc.call(null,G__44379,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__36802__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__44395,xhrio){
var map__44398 = p__44395;
var map__44398__$1 = ((((!((map__44398 == null)))?((((map__44398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44398):map__44398);
var description = cljs.core.get.call(null,map__44398__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44404 = arguments.length;
var i__37878__auto___44405 = (0);
while(true){
if((i__37878__auto___44405 < len__37877__auto___44404)){
args__37884__auto__.push((arguments[i__37878__auto___44405]));

var G__44406 = (i__37878__auto___44405 + (1));
i__37878__auto___44405 = G__44406;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((3) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37885__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq44400){
var G__44401 = cljs.core.first.call(null,seq44400);
var seq44400__$1 = cljs.core.next.call(null,seq44400);
var G__44402 = cljs.core.first.call(null,seq44400__$1);
var seq44400__$2 = cljs.core.next.call(null,seq44400__$1);
var G__44403 = cljs.core.first.call(null,seq44400__$2);
var seq44400__$3 = cljs.core.next.call(null,seq44400__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__44401,G__44402,G__44403,seq44400__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k44409,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__44411 = (((k44409 instanceof cljs.core.Keyword))?k44409.fqn:null);
switch (G__44411) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44409,else__37427__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__44412,request){
var self__ = this;
var map__44413 = p__44412;
var map__44413__$1 = ((((!((map__44413 == null)))?((((map__44413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44413):map__44413);
var content_type__$1 = cljs.core.get.call(null,map__44413__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__44415 = this;
var map__44415__$1 = ((((!((map__44415 == null)))?((((map__44415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44415):map__44415);
var content_type__$2 = cljs.core.get.call(null,map__44415__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__44415,map__44415__$1,content_type__$2,map__44413,map__44413__$1,content_type__$1){
return (function (p1__44407_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__36802__auto__ = p1__44407_SHARP_;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__44415,map__44415__$1,content_type__$2,map__44413,map__44413__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__44417,xhrio){
var self__ = this;
var map__44418 = p__44417;
var map__44418__$1 = ((((!((map__44418 == null)))?((((map__44418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44418):map__44418);
var format = map__44418__$1;
var read__$1 = cljs.core.get.call(null,map__44418__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__44420 = this;
var map__44420__$1 = ((((!((map__44420 == null)))?((((map__44420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44420):map__44420);
var format__$1 = map__44420__$1;
var read__$2 = cljs.core.get.call(null,map__44420__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__44423 = status;
switch (G__44423) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e44424){if((e44424 instanceof Object)){
var e = e44424;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e44424;

}
}
}
}catch (e44422){if((e44422 instanceof Object)){
var e = e44422;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e44422;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44408){
var self__ = this;
var G__44408__$1 = this;
return (new cljs.core.RecordIter((0),G__44408__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__44408){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__44425 = cljs.core.keyword_identical_QMARK_;
var expr__44426 = k__37432__auto__;
if(cljs.core.truth_(pred__44425.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__44426))){
return (new ajax.core.ResponseFormat(G__44408,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44425.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__44426))){
return (new ajax.core.ResponseFormat(self__.read,G__44408,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44425.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__44426))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__44408,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__44408),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__44408){
var self__ = this;
var this__37423__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__44408,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__44410){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__44410),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__44410),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__44410),null,cljs.core.dissoc.call(null,G__44410,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args44430 = [];
var len__37877__auto___44433 = arguments.length;
var i__37878__auto___44434 = (0);
while(true){
if((i__37878__auto___44434 < len__37877__auto___44433)){
args44430.push((arguments[i__37878__auto___44434]));

var G__44435 = (i__37878__auto___44434 + (1));
i__37878__auto___44434 = G__44435;
continue;
} else {
}
break;
}

var G__44432 = args44430.length;
switch (G__44432) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44430.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args44437 = [];
var len__37877__auto___44448 = arguments.length;
var i__37878__auto___44449 = (0);
while(true){
if((i__37878__auto___44449 < len__37877__auto___44448)){
args44437.push((arguments[i__37878__auto___44449]));

var G__44450 = (i__37878__auto___44449 + (1));
i__37878__auto___44449 = G__44450;
continue;
} else {
}
break;
}

var G__44439 = args44437.length;
switch (G__44439) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44437.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__44440){
var vec__44441 = p__44440;
var key = cljs.core.nth.call(null,vec__44441,(0),null);
var value = cljs.core.nth.call(null,vec__44441,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__44444){
var vec__44445 = p__44444;
var key = cljs.core.nth.call(null,vec__44445,(0),null);
var value = cljs.core.nth.call(null,vec__44445,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;

ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__44456){
var vec__44457 = p__44456;
var k = cljs.core.nth.call(null,vec__44457,(0),null);
var v = cljs.core.nth.call(null,vec__44457,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args44460 = [];
var len__37877__auto___44463 = arguments.length;
var i__37878__auto___44464 = (0);
while(true){
if((i__37878__auto___44464 < len__37877__auto___44463)){
args44460.push((arguments[i__37878__auto___44464]));

var G__44465 = (i__37878__auto___44464 + (1));
i__37878__auto___44464 = G__44465;
continue;
} else {
}
break;
}

var G__44462 = args44460.length;
switch (G__44462) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44460.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k44468,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__44470 = (((k44468 instanceof cljs.core.Keyword))?k44468.fqn:null);
switch (G__44470) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44468,else__37427__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__44471){
var self__ = this;
var map__44472 = p__44471;
var map__44472__$1 = ((((!((map__44472 == null)))?((((map__44472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44472):map__44472);
var request = map__44472__$1;
var method = cljs.core.get.call(null,map__44472__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#ajax.core.ProcessGet{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44467){
var self__ = this;
var G__44467__$1 = this;
return (new cljs.core.RecordIter((0),G__44467__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),null], null), null),k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__44467){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__44474 = cljs.core.keyword_identical_QMARK_;
var expr__44475 = k__37432__auto__;
if(cljs.core.truth_(pred__44474.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),expr__44475))){
return (new ajax.core.ProcessGet(G__44467,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__44467),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__44467){
var self__ = this;
var this__37423__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__44467,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",705662419,null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__44469){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108).cljs$core$IFn$_invoke$arity$1(G__44469),null,cljs.core.dissoc.call(null,G__44469,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k44479,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__44481 = k44479;
switch (G__44481) {
default:
return cljs.core.get.call(null,self__.__extmap,k44479,else__37427__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__44482){
var self__ = this;
var map__44483 = p__44482;
var map__44483__$1 = ((((!((map__44483 == null)))?((((map__44483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44483):map__44483);
var request = map__44483__$1;
var body = cljs.core.get.call(null,map__44483__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__44483__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44478){
var self__ = this;
var G__44478__$1 = this;
return (new cljs.core.RecordIter((0),G__44478__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__44478){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__44485 = cljs.core.keyword_identical_QMARK_;
var expr__44486 = k__37432__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__44478),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__44478){
var self__ = this;
var this__37423__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__44478,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__44480){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__44480),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k44490,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__44492 = k44490;
switch (G__44492) {
default:
return cljs.core.get.call(null,self__.__extmap,k44490,else__37427__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__44493){
var self__ = this;
var map__44494 = p__44493;
var map__44494__$1 = ((((!((map__44494 == null)))?((((map__44494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44494):map__44494);
var request = map__44494__$1;
var uri = cljs.core.get.call(null,map__44494__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__44494__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__44494__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__44494__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__44494__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__44496 = ajax.core.get_request_format.call(null,format);
var map__44496__$1 = ((((!((map__44496 == null)))?((((map__44496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44496):map__44496);
var write = cljs.core.get.call(null,map__44496__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__44496__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__36802__auto__ = headers;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44489){
var self__ = this;
var G__44489__$1 = this;
return (new cljs.core.RecordIter((0),G__44489__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__44489){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__44498 = cljs.core.keyword_identical_QMARK_;
var expr__44499 = k__37432__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__44489),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__44489){
var self__ = this;
var this__37423__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__44489,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__44491){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__44491),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__44502){
var map__44505 = p__44502;
var map__44505__$1 = ((((!((map__44505 == null)))?((((map__44505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44505):map__44505);
var type = cljs.core.get.call(null,map__44505__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__36802__auto__ = type;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__36802__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args44507 = [];
var len__37877__auto___44510 = arguments.length;
var i__37878__auto___44511 = (0);
while(true){
if((i__37878__auto___44511 < len__37877__auto___44510)){
args44507.push((arguments[i__37878__auto___44511]));

var G__44512 = (i__37878__auto___44511 + (1));
i__37878__auto___44511 = G__44512;
continue;
} else {
}
break;
}

var G__44509 = args44507.length;
switch (G__44509) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44507.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__36802__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args44514 = [];
var len__37877__auto___44517 = arguments.length;
var i__37878__auto___44518 = (0);
while(true){
if((i__37878__auto___44518 < len__37877__auto___44517)){
args44514.push((arguments[i__37878__auto___44518]));

var G__44519 = (i__37878__auto___44518 + (1));
i__37878__auto___44518 = G__44519;
continue;
} else {
}
break;
}

var G__44516 = args44514.length;
switch (G__44516) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44514.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args44521 = [];
var len__37877__auto___44524 = arguments.length;
var i__37878__auto___44525 = (0);
while(true){
if((i__37878__auto___44525 < len__37877__auto___44524)){
args44521.push((arguments[i__37878__auto___44525]));

var G__44526 = (i__37878__auto___44525 + (1));
i__37878__auto___44525 = G__44526;
continue;
} else {
}
break;
}

var G__44523 = args44521.length;
switch (G__44523) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44521.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__36790__auto__ = prefix;
if(cljs.core.truth_(and__36790__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__36790__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args44528 = [];
var len__37877__auto___44531 = arguments.length;
var i__37878__auto___44532 = (0);
while(true){
if((i__37878__auto___44532 < len__37877__auto___44531)){
args44528.push((arguments[i__37878__auto___44532]));

var G__44533 = (i__37878__auto___44532 + (1));
i__37878__auto___44532 = G__44533;
continue;
} else {
}
break;
}

var G__44530 = args44528.length;
switch (G__44530) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44528.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args44535 = [];
var len__37877__auto___44541 = arguments.length;
var i__37878__auto___44542 = (0);
while(true){
if((i__37878__auto___44542 < len__37877__auto___44541)){
args44535.push((arguments[i__37878__auto___44542]));

var G__44543 = (i__37878__auto___44542 + (1));
i__37878__auto___44542 = G__44543;
continue;
} else {
}
break;
}

var G__44537 = args44535.length;
switch (G__44537) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44535.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__44538){
var map__44539 = p__44538;
var map__44539__$1 = ((((!((map__44539 == null)))?((((map__44539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44539):map__44539);
var prefix = cljs.core.get.call(null,map__44539__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__44539__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__44539__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args44545 = [];
var len__37877__auto___44548 = arguments.length;
var i__37878__auto___44549 = (0);
while(true){
if((i__37878__auto___44549 < len__37877__auto___44548)){
args44545.push((arguments[i__37878__auto___44549]));

var G__44550 = (i__37878__auto___44549 + (1));
i__37878__auto___44549 = G__44550;
continue;
} else {
}
break;
}

var G__44547 = args44545.length;
switch (G__44547) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44545.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args44552 = [];
var len__37877__auto___44555 = arguments.length;
var i__37878__auto___44556 = (0);
while(true){
if((i__37878__auto___44556 < len__37877__auto___44555)){
args44552.push((arguments[i__37878__auto___44556]));

var G__44557 = (i__37878__auto___44556 + (1));
i__37878__auto___44556 = G__44557;
continue;
} else {
}
break;
}

var G__44554 = args44552.length;
switch (G__44554) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44552.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args44559 = [];
var len__37877__auto___44562 = arguments.length;
var i__37878__auto___44563 = (0);
while(true){
if((i__37878__auto___44563 < len__37877__auto___44562)){
args44559.push((arguments[i__37878__auto___44563]));

var G__44564 = (i__37878__auto___44563 + (1));
i__37878__auto___44563 = G__44564;
continue;
} else {
}
break;
}

var G__44561 = args44559.length;
switch (G__44561) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44559.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args44566 = [];
var len__37877__auto___44569 = arguments.length;
var i__37878__auto___44570 = (0);
while(true){
if((i__37878__auto___44570 < len__37877__auto___44569)){
args44566.push((arguments[i__37878__auto___44570]));

var G__44571 = (i__37878__auto___44570 + (1));
i__37878__auto___44570 = G__44571;
continue;
} else {
}
break;
}

var G__44568 = args44566.length;
switch (G__44568) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44566.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__44573){
var map__44576 = p__44573;
var map__44576__$1 = ((((!((map__44576 == null)))?((((map__44576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44576):map__44576);
var request = map__44576__$1;
var response_format = cljs.core.get.call(null,map__44576__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args44578 = [];
var len__37877__auto___44581 = arguments.length;
var i__37878__auto___44582 = (0);
while(true){
if((i__37878__auto___44582 < len__37877__auto___44581)){
args44578.push((arguments[i__37878__auto___44582]));

var G__44583 = (i__37878__auto___44582 + (1));
i__37878__auto___44582 = G__44583;
continue;
} else {
}
break;
}

var G__44580 = args44578.length;
switch (G__44580) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44578.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__44585){
var map__44588 = p__44585;
var map__44588__$1 = ((((!((map__44588 == null)))?((((map__44588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44588):map__44588);
var request = map__44588__$1;
var response_format = cljs.core.get.call(null,map__44588__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args44590 = [];
var len__37877__auto___44593 = arguments.length;
var i__37878__auto___44594 = (0);
while(true){
if((i__37878__auto___44594 < len__37877__auto___44593)){
args44590.push((arguments[i__37878__auto___44594]));

var G__44595 = (i__37878__auto___44594 + (1));
i__37878__auto___44594 = G__44595;
continue;
} else {
}
break;
}

var G__44592 = args44590.length;
switch (G__44592) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44590.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__44597){
var map__44600 = p__44597;
var map__44600__$1 = ((((!((map__44600 == null)))?((((map__44600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44600):map__44600);
var opts = map__44600__$1;
var response_format = cljs.core.get.call(null,map__44600__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args44602 = [];
var len__37877__auto___44605 = arguments.length;
var i__37878__auto___44606 = (0);
while(true){
if((i__37878__auto___44606 < len__37877__auto___44605)){
args44602.push((arguments[i__37878__auto___44606]));

var G__44607 = (i__37878__auto___44606 + (1));
i__37878__auto___44606 = G__44607;
continue;
} else {
}
break;
}

var G__44604 = args44602.length;
switch (G__44604) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44602.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__44609){
var map__44612 = p__44609;
var map__44612__$1 = ((((!((map__44612 == null)))?((((map__44612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44612):map__44612);
var handler = cljs.core.get.call(null,map__44612__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__44614_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__36802__auto__ = p1__44614_SHARP_;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__44615){
var map__44618 = p__44615;
var map__44618__$1 = ((((!((map__44618 == null)))?((((map__44618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44618):map__44618);
var request = map__44618__$1;
var interceptors = cljs.core.get.call(null,map__44618__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__36802__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__44621 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__44621) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__44624 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__44624) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__44626_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__44626_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.call(null,"CLJS-AJAX response:",response);
});
ajax.core.default_handler = cljs.core.atom.call(null,ajax.core.print_response);
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str(response)].join(''));
} else {
return cljs.core.println.call(null,"CLJS-AJAX ERROR:",response);

}
}
});
ajax.core.default_error_handler = cljs.core.atom.call(null,ajax.core.print_error_response);
ajax.core.transform_handler = (function ajax$core$transform_handler(p__44627){
var map__44637 = p__44627;
var map__44637__$1 = ((((!((map__44637 == null)))?((((map__44637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44637):map__44637);
var handler = cljs.core.get.call(null,map__44637__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__44637__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__44637__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var h = (function (){var or__36802__auto__ = handler;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_handler);
}
})();
var e = (function (){var or__36802__auto__ = error_handler;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_error_handler);
}
})();
return ((function (h,e,map__44637,map__44637__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__44639){
var vec__44643 = p__44639;
var ok = cljs.core.nth.call(null,vec__44643,(0),null);
var result = cljs.core.nth.call(null,vec__44643,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(h,e,map__44637,map__44637__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__44646){
var map__44649 = p__44646;
var map__44649__$1 = ((((!((map__44649 == null)))?((((map__44649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44649):map__44649);
var opts = map__44649__$1;
var method = cljs.core.get.call(null,map__44649__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__44649__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__44649__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__44649__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__44649__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__36802__auto__ = format;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44653 = arguments.length;
var i__37878__auto___44654 = (0);
while(true){
if((i__37878__auto___44654 < len__37877__auto___44653)){
args__37884__auto__.push((arguments[i__37878__auto___44654]));

var G__44655 = (i__37878__auto___44654 + (1));
i__37878__auto___44654 = G__44655;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq44651){
var G__44652 = cljs.core.first.call(null,seq44651);
var seq44651__$1 = cljs.core.next.call(null,seq44651);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__44652,seq44651__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44658 = arguments.length;
var i__37878__auto___44659 = (0);
while(true){
if((i__37878__auto___44659 < len__37877__auto___44658)){
args__37884__auto__.push((arguments[i__37878__auto___44659]));

var G__44660 = (i__37878__auto___44659 + (1));
i__37878__auto___44659 = G__44660;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq44656){
var G__44657 = cljs.core.first.call(null,seq44656);
var seq44656__$1 = cljs.core.next.call(null,seq44656);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__44657,seq44656__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44663 = arguments.length;
var i__37878__auto___44664 = (0);
while(true){
if((i__37878__auto___44664 < len__37877__auto___44663)){
args__37884__auto__.push((arguments[i__37878__auto___44664]));

var G__44665 = (i__37878__auto___44664 + (1));
i__37878__auto___44664 = G__44665;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq44661){
var G__44662 = cljs.core.first.call(null,seq44661);
var seq44661__$1 = cljs.core.next.call(null,seq44661);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__44662,seq44661__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44668 = arguments.length;
var i__37878__auto___44669 = (0);
while(true){
if((i__37878__auto___44669 < len__37877__auto___44668)){
args__37884__auto__.push((arguments[i__37878__auto___44669]));

var G__44670 = (i__37878__auto___44669 + (1));
i__37878__auto___44669 = G__44670;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq44666){
var G__44667 = cljs.core.first.call(null,seq44666);
var seq44666__$1 = cljs.core.next.call(null,seq44666);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__44667,seq44666__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44673 = arguments.length;
var i__37878__auto___44674 = (0);
while(true){
if((i__37878__auto___44674 < len__37877__auto___44673)){
args__37884__auto__.push((arguments[i__37878__auto___44674]));

var G__44675 = (i__37878__auto___44674 + (1));
i__37878__auto___44674 = G__44675;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq44671){
var G__44672 = cljs.core.first.call(null,seq44671);
var seq44671__$1 = cljs.core.next.call(null,seq44671);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__44672,seq44671__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44678 = arguments.length;
var i__37878__auto___44679 = (0);
while(true){
if((i__37878__auto___44679 < len__37877__auto___44678)){
args__37884__auto__.push((arguments[i__37878__auto___44679]));

var G__44680 = (i__37878__auto___44679 + (1));
i__37878__auto___44679 = G__44680;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq44676){
var G__44677 = cljs.core.first.call(null,seq44676);
var seq44676__$1 = cljs.core.next.call(null,seq44676);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__44677,seq44676__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44683 = arguments.length;
var i__37878__auto___44684 = (0);
while(true){
if((i__37878__auto___44684 < len__37877__auto___44683)){
args__37884__auto__.push((arguments[i__37878__auto___44684]));

var G__44685 = (i__37878__auto___44684 + (1));
i__37878__auto___44684 = G__44685;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq44681){
var G__44682 = cljs.core.first.call(null,seq44681);
var seq44681__$1 = cljs.core.next.call(null,seq44681);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__44682,seq44681__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44688 = arguments.length;
var i__37878__auto___44689 = (0);
while(true){
if((i__37878__auto___44689 < len__37877__auto___44688)){
args__37884__auto__.push((arguments[i__37878__auto___44689]));

var G__44690 = (i__37878__auto___44689 + (1));
i__37878__auto___44689 = G__44690;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__44242__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__44242__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__44242__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq44686){
var G__44687 = cljs.core.first.call(null,seq44686);
var seq44686__$1 = cljs.core.next.call(null,seq44686);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__44687,seq44686__$1);
});


//# sourceMappingURL=core.js.map