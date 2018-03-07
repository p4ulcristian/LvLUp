// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__49448,handler){
var map__49449 = p__49448;
var map__49449__$1 = ((((!((map__49449 == null)))?((((map__49449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49449):map__49449);
var uri = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__49449,map__49449__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__49447_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__49447_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__49449,map__49449__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___49461 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___49461)){
var response_type_49462 = temp__4657__auto___49461;
this$__$1.responseType = cljs.core.name.call(null,response_type_49462);
} else {
}

var seq__49451_49463 = cljs.core.seq.call(null,headers);
var chunk__49452_49464 = null;
var count__49453_49465 = (0);
var i__49454_49466 = (0);
while(true){
if((i__49454_49466 < count__49453_49465)){
var vec__49455_49467 = cljs.core._nth.call(null,chunk__49452_49464,i__49454_49466);
var k_49468 = cljs.core.nth.call(null,vec__49455_49467,(0),null);
var v_49469 = cljs.core.nth.call(null,vec__49455_49467,(1),null);
this$__$1.setRequestHeader(k_49468,v_49469);

var G__49470 = seq__49451_49463;
var G__49471 = chunk__49452_49464;
var G__49472 = count__49453_49465;
var G__49473 = (i__49454_49466 + (1));
seq__49451_49463 = G__49470;
chunk__49452_49464 = G__49471;
count__49453_49465 = G__49472;
i__49454_49466 = G__49473;
continue;
} else {
var temp__4657__auto___49474 = cljs.core.seq.call(null,seq__49451_49463);
if(temp__4657__auto___49474){
var seq__49451_49475__$1 = temp__4657__auto___49474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49451_49475__$1)){
var c__37615__auto___49476 = cljs.core.chunk_first.call(null,seq__49451_49475__$1);
var G__49477 = cljs.core.chunk_rest.call(null,seq__49451_49475__$1);
var G__49478 = c__37615__auto___49476;
var G__49479 = cljs.core.count.call(null,c__37615__auto___49476);
var G__49480 = (0);
seq__49451_49463 = G__49477;
chunk__49452_49464 = G__49478;
count__49453_49465 = G__49479;
i__49454_49466 = G__49480;
continue;
} else {
var vec__49458_49481 = cljs.core.first.call(null,seq__49451_49475__$1);
var k_49482 = cljs.core.nth.call(null,vec__49458_49481,(0),null);
var v_49483 = cljs.core.nth.call(null,vec__49458_49481,(1),null);
this$__$1.setRequestHeader(k_49482,v_49483);

var G__49484 = cljs.core.next.call(null,seq__49451_49475__$1);
var G__49485 = null;
var G__49486 = (0);
var G__49487 = (0);
seq__49451_49463 = G__49484;
chunk__49452_49464 = G__49485;
count__49453_49465 = G__49486;
i__49454_49466 = G__49487;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36804__auto__ = body;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
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