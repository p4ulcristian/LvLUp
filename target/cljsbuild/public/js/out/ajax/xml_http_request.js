// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__44074,handler){
var map__44075 = p__44074;
var map__44075__$1 = ((((!((map__44075 == null)))?((((map__44075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44075):map__44075);
var uri = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__44075,map__44075__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__44073_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__44073_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__44075,map__44075__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___44087 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___44087)){
var response_type_44088 = temp__4657__auto___44087;
this$__$1.responseType = cljs.core.name.call(null,response_type_44088);
} else {
}

var seq__44077_44089 = cljs.core.seq.call(null,headers);
var chunk__44078_44090 = null;
var count__44079_44091 = (0);
var i__44080_44092 = (0);
while(true){
if((i__44080_44092 < count__44079_44091)){
var vec__44081_44093 = cljs.core._nth.call(null,chunk__44078_44090,i__44080_44092);
var k_44094 = cljs.core.nth.call(null,vec__44081_44093,(0),null);
var v_44095 = cljs.core.nth.call(null,vec__44081_44093,(1),null);
this$__$1.setRequestHeader(k_44094,v_44095);

var G__44096 = seq__44077_44089;
var G__44097 = chunk__44078_44090;
var G__44098 = count__44079_44091;
var G__44099 = (i__44080_44092 + (1));
seq__44077_44089 = G__44096;
chunk__44078_44090 = G__44097;
count__44079_44091 = G__44098;
i__44080_44092 = G__44099;
continue;
} else {
var temp__4657__auto___44100 = cljs.core.seq.call(null,seq__44077_44089);
if(temp__4657__auto___44100){
var seq__44077_44101__$1 = temp__4657__auto___44100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44077_44101__$1)){
var c__37613__auto___44102 = cljs.core.chunk_first.call(null,seq__44077_44101__$1);
var G__44103 = cljs.core.chunk_rest.call(null,seq__44077_44101__$1);
var G__44104 = c__37613__auto___44102;
var G__44105 = cljs.core.count.call(null,c__37613__auto___44102);
var G__44106 = (0);
seq__44077_44089 = G__44103;
chunk__44078_44090 = G__44104;
count__44079_44091 = G__44105;
i__44080_44092 = G__44106;
continue;
} else {
var vec__44084_44107 = cljs.core.first.call(null,seq__44077_44101__$1);
var k_44108 = cljs.core.nth.call(null,vec__44084_44107,(0),null);
var v_44109 = cljs.core.nth.call(null,vec__44084_44107,(1),null);
this$__$1.setRequestHeader(k_44108,v_44109);

var G__44110 = cljs.core.next.call(null,seq__44077_44101__$1);
var G__44111 = null;
var G__44112 = (0);
var G__44113 = (0);
seq__44077_44089 = G__44110;
chunk__44078_44090 = G__44111;
count__44079_44091 = G__44112;
i__44080_44092 = G__44113;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36802__auto__ = body;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map