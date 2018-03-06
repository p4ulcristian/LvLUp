// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__44022,handler){
var map__44023 = p__44022;
var map__44023__$1 = ((((!((map__44023 == null)))?((((map__44023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44023):map__44023);
var uri = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__44023,map__44023__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__44021_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__44021_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__44023,map__44023__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___44035 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___44035)){
var response_type_44036 = temp__4657__auto___44035;
this$__$1.responseType = cljs.core.name.call(null,response_type_44036);
} else {
}

var seq__44025_44037 = cljs.core.seq.call(null,headers);
var chunk__44026_44038 = null;
var count__44027_44039 = (0);
var i__44028_44040 = (0);
while(true){
if((i__44028_44040 < count__44027_44039)){
var vec__44029_44041 = cljs.core._nth.call(null,chunk__44026_44038,i__44028_44040);
var k_44042 = cljs.core.nth.call(null,vec__44029_44041,(0),null);
var v_44043 = cljs.core.nth.call(null,vec__44029_44041,(1),null);
this$__$1.setRequestHeader(k_44042,v_44043);

var G__44044 = seq__44025_44037;
var G__44045 = chunk__44026_44038;
var G__44046 = count__44027_44039;
var G__44047 = (i__44028_44040 + (1));
seq__44025_44037 = G__44044;
chunk__44026_44038 = G__44045;
count__44027_44039 = G__44046;
i__44028_44040 = G__44047;
continue;
} else {
var temp__4657__auto___44048 = cljs.core.seq.call(null,seq__44025_44037);
if(temp__4657__auto___44048){
var seq__44025_44049__$1 = temp__4657__auto___44048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44025_44049__$1)){
var c__37613__auto___44050 = cljs.core.chunk_first.call(null,seq__44025_44049__$1);
var G__44051 = cljs.core.chunk_rest.call(null,seq__44025_44049__$1);
var G__44052 = c__37613__auto___44050;
var G__44053 = cljs.core.count.call(null,c__37613__auto___44050);
var G__44054 = (0);
seq__44025_44037 = G__44051;
chunk__44026_44038 = G__44052;
count__44027_44039 = G__44053;
i__44028_44040 = G__44054;
continue;
} else {
var vec__44032_44055 = cljs.core.first.call(null,seq__44025_44049__$1);
var k_44056 = cljs.core.nth.call(null,vec__44032_44055,(0),null);
var v_44057 = cljs.core.nth.call(null,vec__44032_44055,(1),null);
this$__$1.setRequestHeader(k_44056,v_44057);

var G__44058 = cljs.core.next.call(null,seq__44025_44049__$1);
var G__44059 = null;
var G__44060 = (0);
var G__44061 = (0);
seq__44025_44037 = G__44058;
chunk__44026_44038 = G__44059;
count__44027_44039 = G__44060;
i__44028_44040 = G__44061;
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