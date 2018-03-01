// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__37840__auto__ = [];
var len__37833__auto___54022 = arguments.length;
var i__37834__auto___54023 = (0);
while(true){
if((i__37834__auto___54023 < len__37833__auto___54022)){
args__37840__auto__.push((arguments[i__37834__auto___54023]));

var G__54024 = (i__37834__auto___54023 + (1));
i__37834__auto___54023 = G__54024;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__54014_54025 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__54015_54026 = null;
var count__54016_54027 = (0);
var i__54017_54028 = (0);
while(true){
if((i__54017_54028 < count__54016_54027)){
var k_54029 = cljs.core._nth.call(null,chunk__54015_54026,i__54017_54028);
e.setAttribute(cljs.core.name.call(null,k_54029),cljs.core.get.call(null,attrs,k_54029));

var G__54030 = seq__54014_54025;
var G__54031 = chunk__54015_54026;
var G__54032 = count__54016_54027;
var G__54033 = (i__54017_54028 + (1));
seq__54014_54025 = G__54030;
chunk__54015_54026 = G__54031;
count__54016_54027 = G__54032;
i__54017_54028 = G__54033;
continue;
} else {
var temp__4657__auto___54034 = cljs.core.seq.call(null,seq__54014_54025);
if(temp__4657__auto___54034){
var seq__54014_54035__$1 = temp__4657__auto___54034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54014_54035__$1)){
var c__37569__auto___54036 = cljs.core.chunk_first.call(null,seq__54014_54035__$1);
var G__54037 = cljs.core.chunk_rest.call(null,seq__54014_54035__$1);
var G__54038 = c__37569__auto___54036;
var G__54039 = cljs.core.count.call(null,c__37569__auto___54036);
var G__54040 = (0);
seq__54014_54025 = G__54037;
chunk__54015_54026 = G__54038;
count__54016_54027 = G__54039;
i__54017_54028 = G__54040;
continue;
} else {
var k_54041 = cljs.core.first.call(null,seq__54014_54035__$1);
e.setAttribute(cljs.core.name.call(null,k_54041),cljs.core.get.call(null,attrs,k_54041));

var G__54042 = cljs.core.next.call(null,seq__54014_54035__$1);
var G__54043 = null;
var G__54044 = (0);
var G__54045 = (0);
seq__54014_54025 = G__54042;
chunk__54015_54026 = G__54043;
count__54016_54027 = G__54044;
i__54017_54028 = G__54045;
continue;
}
} else {
}
}
break;
}

var seq__54018_54046 = cljs.core.seq.call(null,children);
var chunk__54019_54047 = null;
var count__54020_54048 = (0);
var i__54021_54049 = (0);
while(true){
if((i__54021_54049 < count__54020_54048)){
var ch_54050 = cljs.core._nth.call(null,chunk__54019_54047,i__54021_54049);
e.appendChild(ch_54050);

var G__54051 = seq__54018_54046;
var G__54052 = chunk__54019_54047;
var G__54053 = count__54020_54048;
var G__54054 = (i__54021_54049 + (1));
seq__54018_54046 = G__54051;
chunk__54019_54047 = G__54052;
count__54020_54048 = G__54053;
i__54021_54049 = G__54054;
continue;
} else {
var temp__4657__auto___54055 = cljs.core.seq.call(null,seq__54018_54046);
if(temp__4657__auto___54055){
var seq__54018_54056__$1 = temp__4657__auto___54055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54018_54056__$1)){
var c__37569__auto___54057 = cljs.core.chunk_first.call(null,seq__54018_54056__$1);
var G__54058 = cljs.core.chunk_rest.call(null,seq__54018_54056__$1);
var G__54059 = c__37569__auto___54057;
var G__54060 = cljs.core.count.call(null,c__37569__auto___54057);
var G__54061 = (0);
seq__54018_54046 = G__54058;
chunk__54019_54047 = G__54059;
count__54020_54048 = G__54060;
i__54021_54049 = G__54061;
continue;
} else {
var ch_54062 = cljs.core.first.call(null,seq__54018_54056__$1);
e.appendChild(ch_54062);

var G__54063 = cljs.core.next.call(null,seq__54018_54056__$1);
var G__54064 = null;
var G__54065 = (0);
var G__54066 = (0);
seq__54018_54046 = G__54063;
chunk__54019_54047 = G__54064;
count__54020_54048 = G__54065;
i__54021_54049 = G__54066;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq54011){
var G__54012 = cljs.core.first.call(null,seq54011);
var seq54011__$1 = cljs.core.next.call(null,seq54011);
var G__54013 = cljs.core.first.call(null,seq54011__$1);
var seq54011__$2 = cljs.core.next.call(null,seq54011__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__54012,G__54013,seq54011__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__37683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37687__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__37683__auto__,prefer_table__37684__auto__,method_cache__37685__auto__,cached_hierarchy__37686__auto__,hierarchy__37687__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__37683__auto__,prefer_table__37684__auto__,method_cache__37685__auto__,cached_hierarchy__37686__auto__,hierarchy__37687__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37687__auto__,method_table__37683__auto__,prefer_table__37684__auto__,method_cache__37685__auto__,cached_hierarchy__37686__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_54067 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_54067.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_54067.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_54067.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_54067);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__54068,st_map){
var map__54075 = p__54068;
var map__54075__$1 = ((((!((map__54075 == null)))?((((map__54075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54075):map__54075);
var container_el = cljs.core.get.call(null,map__54075__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__54075,map__54075__$1,container_el){
return (function (p__54077){
var vec__54078 = p__54077;
var k = cljs.core.nth.call(null,vec__54078,(0),null);
var v = cljs.core.nth.call(null,vec__54078,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__54075,map__54075__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__54081,dom_str){
var map__54084 = p__54081;
var map__54084__$1 = ((((!((map__54084 == null)))?((((map__54084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54084):map__54084);
var c = map__54084__$1;
var content_area_el = cljs.core.get.call(null,map__54084__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__54086){
var map__54089 = p__54086;
var map__54089__$1 = ((((!((map__54089 == null)))?((((map__54089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54089):map__54089);
var content_area_el = cljs.core.get.call(null,map__54089__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_54132){
var state_val_54133 = (state_54132[(1)]);
if((state_val_54133 === (1))){
var inst_54117 = (state_54132[(7)]);
var inst_54117__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_54118 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54119 = ["10px","10px","100%","68px","1.0"];
var inst_54120 = cljs.core.PersistentHashMap.fromArrays(inst_54118,inst_54119);
var inst_54121 = cljs.core.merge.call(null,inst_54120,style);
var inst_54122 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54117__$1,inst_54121);
var inst_54123 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_54117__$1,msg);
var inst_54124 = cljs.core.async.timeout.call(null,(300));
var state_54132__$1 = (function (){var statearr_54134 = state_54132;
(statearr_54134[(7)] = inst_54117__$1);

(statearr_54134[(8)] = inst_54123);

(statearr_54134[(9)] = inst_54122);

return statearr_54134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54132__$1,(2),inst_54124);
} else {
if((state_val_54133 === (2))){
var inst_54117 = (state_54132[(7)]);
var inst_54126 = (state_54132[(2)]);
var inst_54127 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_54128 = ["auto"];
var inst_54129 = cljs.core.PersistentHashMap.fromArrays(inst_54127,inst_54128);
var inst_54130 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54117,inst_54129);
var state_54132__$1 = (function (){var statearr_54135 = state_54132;
(statearr_54135[(10)] = inst_54126);

return statearr_54135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54132__$1,inst_54130);
} else {
return null;
}
}
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto____0 = (function (){
var statearr_54139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54139[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto__);

(statearr_54139[(1)] = (1));

return statearr_54139;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto____1 = (function (state_54132){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_54132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e54140){if((e54140 instanceof Object)){
var ex__41462__auto__ = e54140;
var statearr_54141_54143 = state_54132;
(statearr_54141_54143[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54144 = state_54132;
state_54132 = G__54144;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto__ = function(state_54132){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto____1.call(this,state_54132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_54142 = f__41621__auto__.call(null);
(statearr_54142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_54142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args54145 = [];
var len__37833__auto___54148 = arguments.length;
var i__37834__auto___54149 = (0);
while(true){
if((i__37834__auto___54149 < len__37833__auto___54148)){
args54145.push((arguments[i__37834__auto___54149]));

var G__54150 = (i__37834__auto___54149 + (1));
i__37834__auto___54149 = G__54150;
continue;
} else {
}
break;
}

var G__54147 = args54145.length;
switch (G__54147) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54145.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__54152){
var map__54155 = p__54152;
var map__54155__$1 = ((((!((map__54155 == null)))?((((map__54155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54155):map__54155);
var file = cljs.core.get.call(null,map__54155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54155__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54155__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__36758__auto__ = file;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__54157){
var vec__54164 = p__54157;
var typ = cljs.core.nth.call(null,vec__54164,(0),null);
var line_number = cljs.core.nth.call(null,vec__54164,(1),null);
var line = cljs.core.nth.call(null,vec__54164,(2),null);
var pred__54167 = cljs.core._EQ_;
var expr__54168 = typ;
if(cljs.core.truth_(pred__54167.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__54168))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__54167.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__54168))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__54167.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__54168))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__54170_SHARP_){
return cljs.core.update_in.call(null,p1__54170_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; overflow-x: scroll; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__54173){
var map__54176 = p__54173;
var map__54176__$1 = ((((!((map__54176 == null)))?((((map__54176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54176):map__54176);
var exception = map__54176__$1;
var failed_compiling = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__54176__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__36746__auto__ = file;
if(cljs.core.truth_(and__36746__auto__)){
return line;
} else {
return and__36746__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__54176,map__54176__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__54171_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__54171_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__54176,map__54176__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__54176,map__54176__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__54172_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__54172_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__54172_SHARP_)))].join('');
});})(last_message,map__54176,map__54176__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__54178){
var map__54181 = p__54178;
var map__54181__$1 = ((((!((map__54181 == null)))?((((map__54181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54181):map__54181);
var file = cljs.core.get.call(null,map__54181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54181__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54181__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__54186 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__54186__$1 = ((((!((map__54186 == null)))?((((map__54186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54186):map__54186);
var head = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__54189){
var map__54192 = p__54189;
var map__54192__$1 = ((((!((map__54192 == null)))?((((map__54192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54192):map__54192);
var warning_data = map__54192__$1;
var file = cljs.core.get.call(null,map__54192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54192__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__54192__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__54192__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__36746__auto__ = file;
if(cljs.core.truth_(and__36746__auto__)){
return line;
} else {
return and__36746__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__54192,map__54192__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__54188_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__54188_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__54192,map__54192__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__54196 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__54196__$1 = ((((!((map__54196 == null)))?((((map__54196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54196):map__54196);
var head = cljs.core.get.call(null,map__54196__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__54196__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__54196__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__54196__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__54196__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54196__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54196__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__54198){
var map__54202 = p__54198;
var map__54202__$1 = ((((!((map__54202 == null)))?((((map__54202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54202):map__54202);
var warning_data = map__54202__$1;
var message = cljs.core.get.call(null,map__54202__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__54202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54202__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54202__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54204 = message;
var G__54204__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__54204),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__54204);
var G__54204__$2 = (cljs.core.truth_((function (){var and__36746__auto__ = line;
if(cljs.core.truth_(and__36746__auto__)){
return column;
} else {
return and__36746__auto__;
}
})())?[cljs.core.str(G__54204__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__54204__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__54204__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__54204__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__54205){
var map__54210 = p__54205;
var map__54210__$1 = ((((!((map__54210 == null)))?((((map__54210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54210):map__54210);
var warning_data = map__54210__$1;
var message = cljs.core.get.call(null,map__54210__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__54210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54210__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54210__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__54212 = figwheel.client.heads_up.ensure_container.call(null);
var map__54212__$1 = ((((!((map__54212 == null)))?((((map__54212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54212):map__54212);
var content_area_el = cljs.core.get.call(null,map__54212__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_54260){
var state_val_54261 = (state_54260[(1)]);
if((state_val_54261 === (1))){
var inst_54243 = (state_54260[(7)]);
var inst_54243__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_54244 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54245 = ["0.0"];
var inst_54246 = cljs.core.PersistentHashMap.fromArrays(inst_54244,inst_54245);
var inst_54247 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54243__$1,inst_54246);
var inst_54248 = cljs.core.async.timeout.call(null,(300));
var state_54260__$1 = (function (){var statearr_54262 = state_54260;
(statearr_54262[(8)] = inst_54247);

(statearr_54262[(7)] = inst_54243__$1);

return statearr_54262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54260__$1,(2),inst_54248);
} else {
if((state_val_54261 === (2))){
var inst_54243 = (state_54260[(7)]);
var inst_54250 = (state_54260[(2)]);
var inst_54251 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_54252 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_54253 = cljs.core.PersistentHashMap.fromArrays(inst_54251,inst_54252);
var inst_54254 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54243,inst_54253);
var inst_54255 = cljs.core.async.timeout.call(null,(200));
var state_54260__$1 = (function (){var statearr_54263 = state_54260;
(statearr_54263[(9)] = inst_54254);

(statearr_54263[(10)] = inst_54250);

return statearr_54263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54260__$1,(3),inst_54255);
} else {
if((state_val_54261 === (3))){
var inst_54243 = (state_54260[(7)]);
var inst_54257 = (state_54260[(2)]);
var inst_54258 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_54243,"");
var state_54260__$1 = (function (){var statearr_54264 = state_54260;
(statearr_54264[(11)] = inst_54257);

return statearr_54264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54260__$1,inst_54258);
} else {
return null;
}
}
}
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__41459__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__41459__auto____0 = (function (){
var statearr_54268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54268[(0)] = figwheel$client$heads_up$clear_$_state_machine__41459__auto__);

(statearr_54268[(1)] = (1));

return statearr_54268;
});
var figwheel$client$heads_up$clear_$_state_machine__41459__auto____1 = (function (state_54260){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_54260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e54269){if((e54269 instanceof Object)){
var ex__41462__auto__ = e54269;
var statearr_54270_54272 = state_54260;
(statearr_54270_54272[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54273 = state_54260;
state_54260 = G__54273;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__41459__auto__ = function(state_54260){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__41459__auto____1.call(this,state_54260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__41459__auto____0;
figwheel$client$heads_up$clear_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__41459__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_54271 = f__41621__auto__.call(null);
(statearr_54271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_54271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_54305){
var state_val_54306 = (state_54305[(1)]);
if((state_val_54306 === (1))){
var inst_54295 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_54305__$1 = state_54305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54305__$1,(2),inst_54295);
} else {
if((state_val_54306 === (2))){
var inst_54297 = (state_54305[(2)]);
var inst_54298 = cljs.core.async.timeout.call(null,(400));
var state_54305__$1 = (function (){var statearr_54307 = state_54305;
(statearr_54307[(7)] = inst_54297);

return statearr_54307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54305__$1,(3),inst_54298);
} else {
if((state_val_54306 === (3))){
var inst_54300 = (state_54305[(2)]);
var inst_54301 = figwheel.client.heads_up.clear.call(null);
var state_54305__$1 = (function (){var statearr_54308 = state_54305;
(statearr_54308[(8)] = inst_54300);

return statearr_54308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54305__$1,(4),inst_54301);
} else {
if((state_val_54306 === (4))){
var inst_54303 = (state_54305[(2)]);
var state_54305__$1 = state_54305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54305__$1,inst_54303);
} else {
return null;
}
}
}
}
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto____0 = (function (){
var statearr_54312 = [null,null,null,null,null,null,null,null,null];
(statearr_54312[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto__);

(statearr_54312[(1)] = (1));

return statearr_54312;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto____1 = (function (state_54305){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_54305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e54313){if((e54313 instanceof Object)){
var ex__41462__auto__ = e54313;
var statearr_54314_54316 = state_54305;
(statearr_54314_54316[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54317 = state_54305;
state_54305 = G__54317;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto__ = function(state_54305){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto____1.call(this,state_54305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_54315 = f__41621__auto__.call(null);
(statearr_54315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_54315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map