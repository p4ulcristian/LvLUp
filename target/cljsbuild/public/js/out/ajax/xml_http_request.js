// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__44024,handler){
var map__44025 = p__44024;
var map__44025__$1 = ((((!((map__44025 == null)))?((((map__44025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44025):map__44025);
var uri = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__44025,map__44025__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__44023_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__44023_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__44025,map__44025__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___44037 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___44037)){
var response_type_44038 = temp__4657__auto___44037;
this$__$1.responseType = cljs.core.name.call(null,response_type_44038);
} else {
}

var seq__44027_44039 = cljs.core.seq.call(null,headers);
var chunk__44028_44040 = null;
var count__44029_44041 = (0);
var i__44030_44042 = (0);
while(true){
if((i__44030_44042 < count__44029_44041)){
var vec__44031_44043 = cljs.core._nth.call(null,chunk__44028_44040,i__44030_44042);
var k_44044 = cljs.core.nth.call(null,vec__44031_44043,(0),null);
var v_44045 = cljs.core.nth.call(null,vec__44031_44043,(1),null);
this$__$1.setRequestHeader(k_44044,v_44045);

var G__44046 = seq__44027_44039;
var G__44047 = chunk__44028_44040;
var G__44048 = count__44029_44041;
var G__44049 = (i__44030_44042 + (1));
seq__44027_44039 = G__44046;
chunk__44028_44040 = G__44047;
count__44029_44041 = G__44048;
i__44030_44042 = G__44049;
continue;
} else {
var temp__4657__auto___44050 = cljs.core.seq.call(null,seq__44027_44039);
if(temp__4657__auto___44050){
var seq__44027_44051__$1 = temp__4657__auto___44050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44027_44051__$1)){
var c__37613__auto___44052 = cljs.core.chunk_first.call(null,seq__44027_44051__$1);
var G__44053 = cljs.core.chunk_rest.call(null,seq__44027_44051__$1);
var G__44054 = c__37613__auto___44052;
var G__44055 = cljs.core.count.call(null,c__37613__auto___44052);
var G__44056 = (0);
seq__44027_44039 = G__44053;
chunk__44028_44040 = G__44054;
count__44029_44041 = G__44055;
i__44030_44042 = G__44056;
continue;
} else {
var vec__44034_44057 = cljs.core.first.call(null,seq__44027_44051__$1);
var k_44058 = cljs.core.nth.call(null,vec__44034_44057,(0),null);
var v_44059 = cljs.core.nth.call(null,vec__44034_44057,(1),null);
this$__$1.setRequestHeader(k_44058,v_44059);

var G__44060 = cljs.core.next.call(null,seq__44027_44051__$1);
var G__44061 = null;
var G__44062 = (0);
var G__44063 = (0);
seq__44027_44039 = G__44060;
chunk__44028_44040 = G__44061;
count__44029_44041 = G__44062;
i__44030_44042 = G__44063;
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