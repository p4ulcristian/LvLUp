// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__49420,handler){
var map__49421 = p__49420;
var map__49421__$1 = ((((!((map__49421 == null)))?((((map__49421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49421):map__49421);
var uri = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__49421,map__49421__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__49419_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__49419_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__49421,map__49421__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___49433 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___49433)){
var response_type_49434 = temp__4657__auto___49433;
this$__$1.responseType = cljs.core.name.call(null,response_type_49434);
} else {
}

var seq__49423_49435 = cljs.core.seq.call(null,headers);
var chunk__49424_49436 = null;
var count__49425_49437 = (0);
var i__49426_49438 = (0);
while(true){
if((i__49426_49438 < count__49425_49437)){
var vec__49427_49439 = cljs.core._nth.call(null,chunk__49424_49436,i__49426_49438);
var k_49440 = cljs.core.nth.call(null,vec__49427_49439,(0),null);
var v_49441 = cljs.core.nth.call(null,vec__49427_49439,(1),null);
this$__$1.setRequestHeader(k_49440,v_49441);

var G__49442 = seq__49423_49435;
var G__49443 = chunk__49424_49436;
var G__49444 = count__49425_49437;
var G__49445 = (i__49426_49438 + (1));
seq__49423_49435 = G__49442;
chunk__49424_49436 = G__49443;
count__49425_49437 = G__49444;
i__49426_49438 = G__49445;
continue;
} else {
var temp__4657__auto___49446 = cljs.core.seq.call(null,seq__49423_49435);
if(temp__4657__auto___49446){
var seq__49423_49447__$1 = temp__4657__auto___49446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49423_49447__$1)){
var c__37587__auto___49448 = cljs.core.chunk_first.call(null,seq__49423_49447__$1);
var G__49449 = cljs.core.chunk_rest.call(null,seq__49423_49447__$1);
var G__49450 = c__37587__auto___49448;
var G__49451 = cljs.core.count.call(null,c__37587__auto___49448);
var G__49452 = (0);
seq__49423_49435 = G__49449;
chunk__49424_49436 = G__49450;
count__49425_49437 = G__49451;
i__49426_49438 = G__49452;
continue;
} else {
var vec__49430_49453 = cljs.core.first.call(null,seq__49423_49447__$1);
var k_49454 = cljs.core.nth.call(null,vec__49430_49453,(0),null);
var v_49455 = cljs.core.nth.call(null,vec__49430_49453,(1),null);
this$__$1.setRequestHeader(k_49454,v_49455);

var G__49456 = cljs.core.next.call(null,seq__49423_49447__$1);
var G__49457 = null;
var G__49458 = (0);
var G__49459 = (0);
seq__49423_49435 = G__49456;
chunk__49424_49436 = G__49457;
count__49425_49437 = G__49458;
i__49426_49438 = G__49459;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36776__auto__ = body;
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
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