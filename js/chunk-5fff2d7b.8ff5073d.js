(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fff2d7b"],{"07e3":function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},"0eb1":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"leaf-wrap",attrs:{id:"leaf-wrap"}},[e("button",{on:{click:n.add}},[n._v("添加精灵")]),e("button",{on:{click:n.remove}},[n._v("移除精灵")])])},i=[],o=(e("ac6a"),e("8449"),e("d225")),a=e("b0b4"),u=e("22a2"),c=function(){function n(t){var e=t.dom,r=t.bg;Object(o["a"])(this,n),this.dom=e,this.app=new u["a"]({backgroundColor:r||1087931})}return Object(a["a"])(n,[{key:"initView",value:function(){this.dom.appendChild(this.app.view)}},{key:"removeBunny",value:function(){this.app.stage.children.pop(),console.log(this.app.stage.children)}},{key:"createSingleBunny",value:function(n){var t=n.img,e=n.pos,r=n.dragData,i=null,o=null;return o=u["i"].from(t),i=new u["h"](o),i.interactive=!0,i.buttonMode=!0,i.anchor.set(.5),i.x=e.x||this.app.screen.width/2,i.y=e.y||this.app.screen.height/2,-1===r&&i.on("pointerdown",this.onDragStart).on("pointerup",this.onDragEnd).on("pointerupoutside",this.onDragEnd).on("pointermove",this.onDragMove),i.romove=function(){i.visible=!1},this.app.stage.addChild(i),new Promise((function(n){return n(i)}))}},{key:"createBunny",value:function(n){var t=this,e=n.img,r=n.pos,i=n.dragData,o=[],a=[];return e.forEach((function(n,t){a.push(u["i"].from(n)),o.push(new u["h"](a[t]))})),o.forEach((function(n,e){o[e].interactive=!0,o[e].buttonMode=!0,o[e].anchor.set(.5),-1===i.indexOf(e)&&o[e].on("pointerdown",t.onDragStart).on("pointerup",t.onDragEnd).on("pointerupoutside",t.onDragEnd).on("pointermove",t.onDragMove),o[e].x=r[e].x||t.app.screen.width/2,o[e].y=r[e].y||t.app.screen.height/2,t.app.stage.addChild(o[e])})),new Promise((function(n){return n(o)}))}},{key:"onDragStart",value:function(n){this.data=n.data,this.alpha=.5,this.dragging=!0}},{key:"onDragEnd",value:function(){this.alpha=1,this.dragging=!1,this.data=null}},{key:"onDragMove",value:function(){if(this.dragging){var n=this.data.getLocalPosition(this.parent);this.x=n.x,this.y=n.y}}}]),n}(),f={name:"pixi",data:function(){return{cat:null,imgArr:[],dragData:[],pos:[],bunny:[],rotation:0,visible:!0}},mounted:function(){var n=document.getElementById("leaf-wrap");this.cat=new c({dom:n,bg:0}),this.cat.initView()},methods:{addSprite:function(n){var t=this;this.imgArr.push(n.img),this.pos.push(n.pos),this.dragData.push(n.dragData);var e={img:this.imgArr,pos:this.pos,dragData:this.dragData};this.cat.createBunny(e).then((function(n){t.bunny=n,console.log(t.bunny)}))},add:function(){var n=this,t={img:"./img/cat.png",pos:{x:183,y:185},dragData:-1};this.cat.createSingleBunny(t).then((function(t){t.transform.rotation=n.rotation,t.visible=n.visible}))},remove:function(){this.visible=!1}}},s=f,p=(e("62fd"),e("2877")),l=Object(p["a"])(s,r,i,!1,null,"a0d328b8",null);t["default"]=l.exports},"1bc3":function(n,t,e){var r=e("f772");n.exports=function(n,t){if(!r(n))return n;var e,i;if(t&&"function"==typeof(e=n.toString)&&!r(i=e.call(n)))return i;if("function"==typeof(e=n.valueOf)&&!r(i=e.call(n)))return i;if(!t&&"function"==typeof(e=n.toString)&&!r(i=e.call(n)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(n,t,e){var r=e("f772"),i=e("e53d").document,o=r(i)&&r(i.createElement);n.exports=function(n){return o?i.createElement(n):{}}},"294c":function(n,t){n.exports=function(n){try{return!!n()}catch(t){return!0}}},"35e8":function(n,t,e){var r=e("d9f6"),i=e("aebd");n.exports=e("8e60")?function(n,t,e){return r.f(n,t,i(1,e))}:function(n,t,e){return n[t]=e,n}},"386b":function(n,t,e){var r=e("5ca1"),i=e("79e5"),o=e("be13"),a=/"/g,u=function(n,t,e,r){var i=String(o(n)),u="<"+t;return""!==e&&(u+=" "+e+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+i+"</"+t+">"};n.exports=function(n,t){var e={};e[n]=t(u),r(r.P+r.F*i((function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",e)}},4306:function(n,t,e){var r=e("f7db");"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var i=e("499e").default;i("d3e19acc",r,!0,{sourceMap:!1,shadowMode:!1})},"454f":function(n,t,e){e("46a7");var r=e("584a").Object;n.exports=function(n,t,e){return r.defineProperty(n,t,e)}},"46a7":function(n,t,e){var r=e("63b6");r(r.S+r.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"584a":function(n,t){var e=n.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},"62fd":function(n,t,e){"use strict";var r=e("4306"),i=e.n(r);i.a},"63b6":function(n,t,e){var r=e("e53d"),i=e("584a"),o=e("d864"),a=e("35e8"),u=e("07e3"),c="prototype",f=function(n,t,e){var s,p,l,d=n&f.F,h=n&f.G,v=n&f.S,g=n&f.P,b=n&f.B,y=n&f.W,w=h?i:i[t]||(i[t]={}),m=w[c],x=h?r:v?r[t]:(r[t]||{})[c];for(s in h&&(e=t),e)p=!d&&x&&void 0!==x[s],p&&u(w,s)||(l=p?x[s]:e[s],w[s]=h&&"function"!=typeof x[s]?e[s]:b&&p?o(l,r):y&&x[s]==l?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t[c]=n[c],t}(l):g&&"function"==typeof l?o(Function.call,l):l,g&&((w.virtual||(w.virtual={}))[s]=l,n&f.R&&m&&!m[s]&&a(m,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,n.exports=f},"794b":function(n,t,e){n.exports=!e("8e60")&&!e("294c")((function(){return 7!=Object.defineProperty(e("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},8449:function(n,t,e){"use strict";e("386b")("anchor",(function(n){return function(t){return n(this,"a","name",t)}}))},"85f2":function(n,t,e){n.exports=e("454f")},"8e60":function(n,t,e){n.exports=!e("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},aebd:function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},b0b4:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("85f2"),i=e.n(r);function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(n,r.key,r)}}function a(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}},d225:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,"a",(function(){return r}))},d864:function(n,t,e){var r=e("79aa");n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)}}return function(){return n.apply(t,arguments)}}},d9f6:function(n,t,e){var r=e("e4ae"),i=e("794b"),o=e("1bc3"),a=Object.defineProperty;t.f=e("8e60")?Object.defineProperty:function(n,t,e){if(r(n),t=o(t,!0),r(e),i)try{return a(n,t,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},e4ae:function(n,t,e){var r=e("f772");n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},e53d:function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},f772:function(n,t){n.exports=function(n){return"object"===typeof n?null!==n:"function"===typeof n}},f7db:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,".leaf-wrap[data-v-a0d328b8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}",""])}}]);