(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4981389e"],{"33a5":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container"})},a=[],i=(e("8449"),e("22a2")),o={name:"pixiContainer",mounted:function(){var n=this.$refs.container;this.addBunny({el:n,width:200,height:200,bg:16562691,imgSrc:"./img/cat.png",transparent:!1})},methods:{addBunny:function(n){var t=new i["a"]({width:n.width,height:n.height,backgroundColor:n.bg,resolution:window.devicePixelRatio||1,transparent:n.transparent});n.el.appendChild(t.view);var e=new i["c"];setInterval((function(){398905===t.renderer.backgroundColor?t.renderer.backgroundColor=16562691:t.renderer.backgroundColor=398905}),1e3),t.stage.addChild(e);var r=i["i"].from(n.imgSrc),a=new i["h"](r);a.anchor.set(.5),a.x=40,a.y=40*Math.floor(.2),e.addChild(a),e.x=t.screen.width/2,e.y=t.screen.height/2,e.pivot.x=e.width/2,e.pivot.y=e.height/2,t.ticker.add((function(n){e.rotation-=.01*n}))}}},c=o,u=(e("96b2"),e("2877")),s=Object(u["a"])(c,r,a,!1,null,"4623a30c",null);t["default"]=s.exports},"386b":function(n,t,e){var r=e("5ca1"),a=e("79e5"),i=e("be13"),o=/"/g,c=function(n,t,e,r){var a=String(i(n)),c="<"+t;return""!==e&&(c+=" "+e+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};n.exports=function(n,t){var e={};e[n]=t(c),r(r.P+r.F*a((function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",e)}},"7eca":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"canvas[data-v-4623a30c]{position:relative}",""])},8449:function(n,t,e){"use strict";e("386b")("anchor",(function(n){return function(t){return n(this,"a","name",t)}}))},"96b2":function(n,t,e){"use strict";var r=e("ca4c"),a=e.n(r);a.a},ca4c:function(n,t,e){var r=e("7eca");"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var a=e("499e").default;a("a84128fc",r,!0,{sourceMap:!1,shadowMode:!1})}}]);