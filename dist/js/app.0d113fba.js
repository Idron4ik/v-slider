(function(t){function e(e){for(var i,o,r=e[0],d=e[1],l=e[2],u=0,c=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);h&&h(e);while(c.length)c.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,r=1;r<s.length;r++){var d=s[r];0!==n[d]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={app:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var h=d;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1355:function(t,e,s){},4547:function(t,e,s){"use strict";var i=s("e8c1"),n=s.n(i);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("VSlider",{attrs:{sliderData:t.sliderData,slidesToShow:3.4,slidesToScroll:4,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:1024,settings:{slidesToShow:7,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},scopedSlots:t._u([{key:"slide",fn:function(e){var i=e.item;return[s("div",[t._v(" "+t._s(i.name))])]}}])}),s("VSlider",{attrs:{sliderData:t.sliderData,slidesToShow:1,slidesToScroll:3,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},scopedSlots:t._u([{key:"slide",fn:function(e){var i=e.item;return[s("div",[t._v(" "+t._s(i.name))])]}}])}),s("VSlider",{attrs:{sliderData:t.sliderData,slidesToShow:1.4,slidesToScroll:2,responsive:[{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},scopedSlots:t._u([{key:"slide",fn:function(e){var i=e.item;return[s("div",[t._v(" "+t._s(i.name))])]}}])})],1)},r=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"slider",class:["v-slider",{"v-slide--ssr":t.isSSR}]},[s("div",{class:["v-slider__wrapper",{disabled:t.data.statusAnimationClass},{dragging:t.data.isDrag}],on:{touchstart:t.dragStart,touchend:t.dragEnd,touchmove:t.dragAction}},[s("div",{ref:"slides",staticClass:"v-slider__items",style:{width:(t.isSSR?"10000":t.data.width.container)+"%",transform:"translateX("+t.data.translateX+"%)",transitionDuration:t.data.transitionDuration+"ms"}},t._l(t.sliderData,(function(e,i){return s("div",{key:i,class:["v-slider__item"],style:[!t.isSSR&&{width:t.data.width.slide+"%"}]},[t._t("slide",null,{item:e})],2)})),0)]),t.settings.dots?s("div",{class:["v-slider__nav",{disabled:t.data.statusAnimationClass}]},t._l(t.data.pages,(function(e,i){return s("button",{key:i,class:["v-page",{"v-page--active":i===t.indexPage}],attrs:{tabindex:"-1","aria-label":"Carousel Page "+i},on:{click:function(e){return t.goToSlide(i)}}})})),0):t._e(),t.settings.navButtons?[s("button",{class:["v-slider__control prev",{disabled:t.isFirstElement}],attrs:{"aria-label":"prev button",disabled:t.isFirstElement},on:{click:t.prev}},[t._v(" < ")]),s("button",{class:["v-slider__control next",{disabled:t.isLastElement}],attrs:{"aria-label":"next button",disabled:t.isLastElement},on:{click:t.next}},[t._v(" > ")])]:t._e()],2)},l=[],h={computed:{isFirstElement:function(){return this.data.index<=0},isLastElement:function(){return this.data.index+this.settings.slidesToShow>this.data.countItems-1},indexPage:function(){var t=Math.round(this.data.index/this.settings.slidesToShow);return t<0?t=0:(t>=this.data.pages-1||this.isLastElement)&&(t=this.data.pages-1),t}},methods:{convertPixelsToPercent:function(t){return t/this.data.width.wrapper*100/this.data.countItems},convertPercentToPixels:function(t){return t*this.data.width.wrapper/100*this.data.countItems},normalizeEvent:function(t){return t.touches?t.touches[0]:t},getIndex:function(){return Math.abs(Math.round(this.data.translateX/this.data.width.slide))},normalizeIndex:function(t){var e=t;return t<0?e=0:t>this.data.countItems-1&&(e=this.data.countItems-1),e},dispatchEvent:function(t){this.$emit(t,{data:this.data,settings:this.settings,pos:this.pos})}}},u=h,c=(s("d81d"),s("a9e3"),s("5530")),p=s("15fd"),f={props:{sliderData:{type:Array,default:function(){return[]}},dots:{type:Boolean,default:!0},navButtons:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}},responsive:{type:Array,default:function(){return null}},slidesToShow:{type:Number,default:1},slidesToScroll:{type:Number,default:1},speed:{type:Number,default:300},swipeDistance:{type:Number,default:100}},created:function(){this.setSettings()},methods:{setSettings:function(){var t=this.$props,e=t.options,s=Object(p["a"])(t,["options"]);e&&(s=Object(c["a"])(Object(c["a"])({},s),e)),s.responsive&&(s.responsive=this.orderBy(s.responsive,"breakpoint"),this.data.breakpoint=s.responsive.map((function(t){return t.breakpoint}))),this.settings=s,this.data.oldSettings=this.settings}}},m=f,g={methods:{next:function(){this.isLastElement||this.goTo(this.data.index+this.settings.slidesToScroll)},prev:function(){this.isFirstElement||this.goTo(this.data.index-this.settings.slidesToScroll)},dragStart:function(t){t.preventDefault(),this.data.transitionDuration=0,this.pos.initial=this.data.translateX,this.pos.x1=this.normalizeEvent(t).clientX,this.pos.indexStart=this.getIndex(),this.data.isDrag=!0},dragAction:function(t){this.pos.x2=this.pos.x1-this.normalizeEvent(t).clientX,this.pos.current=-this.data.width.slide*this.pos.indexStart+this.convertPixelsToPercent(-this.pos.x2*this.settings.slidesToShow),this.data.locked||(this.data.locked=!0,this.ids.dragRequestAnimationFrameId=requestAnimationFrame(this.updatePosition))},goToSlide:function(t){this.goTo(t*Math.round(this.settings.slidesToShow))},dragEnd:function(){this.data.locked&&cancelAnimationFrame(this.ids.dragRequestAnimationFrameId),this.data.isDrag=!1,this.pos.final=this.data.translateX;var t=this.convertPercentToPixels(this.pos.final-this.pos.initial);Math.abs(t)<this.settings.swipeDistance?this.prepareGoTo(this.getIndex()):this.prepareGoTo(Math.abs(Math[t>0?"ceil":"floor"](this.data.translateX/this.data.width.slide)))}}},v=g,S=(s("4160"),s("13d5"),s("fb6a"),s("159b"),{methods:{throttle:function(t,e){var s=!1,i=null,n=null;function a(){if(s)return i=arguments,void(n=this);t.apply(this,arguments),s=!0,setTimeout((function(){s=!1,i&&(a.apply(n,i),i=n=null)}),e)}return a},orderBy:function(t,e){return t.sort((function(t,s){return t[e]>s[e]?1:s[e]>t[e]?-1:0}))},setSettingsOfCurrentBreakpoint:function(){var t=this,e=0,s=0;if(this.data.breakpoint.forEach((function(i,n){i<=t.data.width.window&&(e=i,s=n)})),e||s){var i=this.settings.responsive.slice(0,s)||[];i=i.reduce((function(t,e){return Object(c["a"])(Object(c["a"])({},t),e.settings)}),{}),this.settings=Object(c["a"])(Object(c["a"])(Object(c["a"])({},this.data.oldSettings),i),this.settings.responsive[s].settings)}else this.settings=this.data.oldSettings},computedMetricsCarousel:function(){this.data.width.window=window.innerWidth,this.setSettingsOfCurrentBreakpoint(),this.data.pages=Math.ceil(this.data.countItems/this.settings.slidesToShow),this.data.width.container=this.data.countItems*(100/this.settings.slidesToShow),this.data.width.wrapper=this.$refs.slider.offsetWidth,this.data.width.slide=100/this.data.countItems},transitionend:function(){this.data.locked=!1,this.data.statusAnimationClass=!1,this.data.transitionDuration=0,this.dispatchEvent("afterChange")},updatePosition:function(){this.data.locked=!1,this.data.translateX=this.pos.current},prepareGoTo:function(t){this.data.translateX>0&&(t=0),t+this.settings.slidesToShow>this.data.countItems-1&&(t=this.data.countItems-this.settings.slidesToShow),this.data.locked=!1,this.goTo(t,200)}}}),b=S,w={name:"VSlider",mixins:[u,m,v,b],data:function(){return{isSSR:!0,settings:{},data:{slides:null,index:0,countItems:0,pages:0,translateX:0,locked:!1,statusAnimationClass:!1,oldSettings:null,breakpoint:[],transitionDuration:0,width:{container:0,wrapper:0,slide:0,window:0}},pos:{x1:0,x2:0,final:0,initial:0,indexStart:0,current:0},ids:{dragRequestAnimationFrameId:null,resizeTimer:null}}},beforeDestroy:function(){this.destroy(),window.removeEventListener("resize",this.resize)},beforeMount:function(){this.goTo=this.throttle(this.goTo,this.settings.speed)},mounted:function(){this.isSSR=!1,this.initSlider(),window.addEventListener("resize",this.resize)},methods:{initSlider:function(){this.data.slides=this.$refs.slides,this.data.countItems=this.sliderData.length,this.computedMetricsCarousel(),this.dispatchEvent("init")},reset:function(){this.data.index=0,this.pos.indexStart=0,this.data.translateX=0},rebuild:function(){this.reset(),this.computedMetricsCarousel(),this.dispatchEvent("rebuild")},resize:function(){var t=this;clearTimeout(this.ids.resizeTimer),this.ids.resizeTimer=setTimeout((function(){t.rebuild(),t.dispatchEvent("breakpoint")}),250)},destroy:function(){this.dispatchEvent("destroy")},goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.speed;if(!this.data.locked){this.data.index=this.normalizeIndex(t),this.data.locked=!0,this.data.statusAnimationClass=!0,this.data.transitionDuration=e;var s=-this.data.width.slide*this.data.index;this.data.countItems%this.settings.slidesToShow!==0&&this.data.index+this.settings.slidesToShow>=this.data.countItems&&(s=-this.data.width.slide*(this.data.countItems-this.settings.slidesToShow)),this.data.translateX=s,setTimeout(this.transitionend,e),this.dispatchEvent("beforeChange")}}}},T=w,x=(s("4547"),s("2877")),y=Object(x["a"])(T,d,l,!1,null,null,null),_=y.exports,k={name:"HelloWorld",components:{VSlider:_},data:function(){return{sliderData:[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12},{name:13}]}}},E=k,O=(s("7d5b"),Object(x["a"])(E,o,r,!1,null,null,null)),D=O.exports,I={name:"App",components:{HelloWorld:D}},j=I,P=Object(x["a"])(j,n,a,!1,null,null,null),A=P.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(A)}}).$mount("#app")},"7d5b":function(t,e,s){"use strict";var i=s("1355"),n=s.n(i);n.a},e8c1:function(t,e,s){}});
//# sourceMappingURL=app.0d113fba.js.map