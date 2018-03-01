// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37898,handler){
var map__37899 = p__37898;
var map__37899__$1 = ((((!((map__37899 == null)))?((((map__37899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37899):map__37899);
var uri = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__37899,map__37899__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__37897_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__37897_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__37899,map__37899__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___37911 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___37911)){
var response_type_37912 = temp__4657__auto___37911;
this$__$1.responseType = cljs.core.name.call(null,response_type_37912);
} else {
}

var seq__37901_37913 = cljs.core.seq.call(null,headers);
var chunk__37902_37914 = null;
var count__37903_37915 = (0);
var i__37904_37916 = (0);
while(true){
if((i__37904_37916 < count__37903_37915)){
var vec__37905_37917 = cljs.core._nth.call(null,chunk__37902_37914,i__37904_37916);
var k_37918 = cljs.core.nth.call(null,vec__37905_37917,(0),null);
var v_37919 = cljs.core.nth.call(null,vec__37905_37917,(1),null);
this$__$1.setRequestHeader(k_37918,v_37919);

var G__37920 = seq__37901_37913;
var G__37921 = chunk__37902_37914;
var G__37922 = count__37903_37915;
var G__37923 = (i__37904_37916 + (1));
seq__37901_37913 = G__37920;
chunk__37902_37914 = G__37921;
count__37903_37915 = G__37922;
i__37904_37916 = G__37923;
continue;
} else {
var temp__4657__auto___37924 = cljs.core.seq.call(null,seq__37901_37913);
if(temp__4657__auto___37924){
var seq__37901_37925__$1 = temp__4657__auto___37924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37901_37925__$1)){
var c__37569__auto___37926 = cljs.core.chunk_first.call(null,seq__37901_37925__$1);
var G__37927 = cljs.core.chunk_rest.call(null,seq__37901_37925__$1);
var G__37928 = c__37569__auto___37926;
var G__37929 = cljs.core.count.call(null,c__37569__auto___37926);
var G__37930 = (0);
seq__37901_37913 = G__37927;
chunk__37902_37914 = G__37928;
count__37903_37915 = G__37929;
i__37904_37916 = G__37930;
continue;
} else {
var vec__37908_37931 = cljs.core.first.call(null,seq__37901_37925__$1);
var k_37932 = cljs.core.nth.call(null,vec__37908_37931,(0),null);
var v_37933 = cljs.core.nth.call(null,vec__37908_37931,(1),null);
this$__$1.setRequestHeader(k_37932,v_37933);

var G__37934 = cljs.core.next.call(null,seq__37901_37925__$1);
var G__37935 = null;
var G__37936 = (0);
var G__37937 = (0);
seq__37901_37913 = G__37934;
chunk__37902_37914 = G__37935;
count__37903_37915 = G__37936;
i__37904_37916 = G__37937;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36758__auto__ = body;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
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