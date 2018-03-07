// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__49449,handler){
var map__49450 = p__49449;
var map__49450__$1 = ((((!((map__49450 == null)))?((((map__49450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49450):map__49450);
var uri = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__49450,map__49450__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__49448_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__49448_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__49450,map__49450__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___49462 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___49462)){
var response_type_49463 = temp__4657__auto___49462;
this$__$1.responseType = cljs.core.name.call(null,response_type_49463);
} else {
}

var seq__49452_49464 = cljs.core.seq.call(null,headers);
var chunk__49453_49465 = null;
var count__49454_49466 = (0);
var i__49455_49467 = (0);
while(true){
if((i__49455_49467 < count__49454_49466)){
var vec__49456_49468 = cljs.core._nth.call(null,chunk__49453_49465,i__49455_49467);
var k_49469 = cljs.core.nth.call(null,vec__49456_49468,(0),null);
var v_49470 = cljs.core.nth.call(null,vec__49456_49468,(1),null);
this$__$1.setRequestHeader(k_49469,v_49470);

var G__49471 = seq__49452_49464;
var G__49472 = chunk__49453_49465;
var G__49473 = count__49454_49466;
var G__49474 = (i__49455_49467 + (1));
seq__49452_49464 = G__49471;
chunk__49453_49465 = G__49472;
count__49454_49466 = G__49473;
i__49455_49467 = G__49474;
continue;
} else {
var temp__4657__auto___49475 = cljs.core.seq.call(null,seq__49452_49464);
if(temp__4657__auto___49475){
var seq__49452_49476__$1 = temp__4657__auto___49475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49452_49476__$1)){
var c__37615__auto___49477 = cljs.core.chunk_first.call(null,seq__49452_49476__$1);
var G__49478 = cljs.core.chunk_rest.call(null,seq__49452_49476__$1);
var G__49479 = c__37615__auto___49477;
var G__49480 = cljs.core.count.call(null,c__37615__auto___49477);
var G__49481 = (0);
seq__49452_49464 = G__49478;
chunk__49453_49465 = G__49479;
count__49454_49466 = G__49480;
i__49455_49467 = G__49481;
continue;
} else {
var vec__49459_49482 = cljs.core.first.call(null,seq__49452_49476__$1);
var k_49483 = cljs.core.nth.call(null,vec__49459_49482,(0),null);
var v_49484 = cljs.core.nth.call(null,vec__49459_49482,(1),null);
this$__$1.setRequestHeader(k_49483,v_49484);

var G__49485 = cljs.core.next.call(null,seq__49452_49476__$1);
var G__49486 = null;
var G__49487 = (0);
var G__49488 = (0);
seq__49452_49464 = G__49485;
chunk__49453_49465 = G__49486;
count__49454_49466 = G__49487;
i__49455_49467 = G__49488;
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