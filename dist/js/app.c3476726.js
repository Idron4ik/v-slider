(function(t){function e(e){for(var s,o,r=e[0],d=e[1],l=e[2],u=0,c=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);h&&h(e);while(c.length)c.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var d=i[r];0!==n[d]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var h=d;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1355:function(t,e,i){},4547:function(t,e,i){"use strict";var s=i("e8c1"),n=i.n(s);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v(" New 1")]),i("h1",[t._v("0: 1 \\ 600: fixedWidth 224 \\ 1024: 4")]),i("VSlider",{attrs:{sliderData:t.sliderData,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:600,settings:{fixedWidth:224,slidesToScroll:3,slidesToShow:3}},{breakpoint:1024,settings:{fixedWidth:0,slidesToShow:4,slidesToScroll:4}}]},scopedSlots:t._u([{key:"slide",fn:function(e){var s=e.item;return[i("div",[t._v(" "+t._s(s.name)+" "),i("a",{attrs:{href:"/"}},[t._v(" LINK")])])]}}])}),i("h1",[t._v("0: fixedWidth 224 \\ 600: \\ 1024: 5")]),i("VSlider",{attrs:{sliderData:t.sliderData,fixedWidth:224,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:600,settings:{fixedWidth:!1,slidesToShow:3,slidesToScroll:3}},{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5}}]},scopedSlots:t._u([{key:"slide",fn:function(e){var s=e.item;return[i("div",[t._v(" "+t._s(s.name))])]}}])}),i("h1",[t._v("0: 2 \\ 600: 1 \\ 1024: fixedWidth 224")]),i("VSlider",{attrs:{sliderData:t.sliderData,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:1024,settings:{fixedWidth:224,slidesToShow:4,slidesToScroll:4}}]},scopedSlots:t._u([{key:"slide",fn:function(e){var s=e.item;return[i("div",[t._v(" "+t._s(s.name))])]}}])})],1)},r=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",class:["v-slider",{"v-slide--ssr":t.isSSR,"v-slider--loaded":t.data.isLoaded}]},[i("div",{class:["v-slider__wrapper",{disabled:t.data.statusAnimationClass},{dragging:t.data.isDrag}],on:{touchstart:t.dragStart,touchend:t.dragEnd,touchmove:t.dragAction}},[i("div",{ref:"slides",staticClass:"v-slider__items",style:[{width:(t.isSSR?"10000":t.data.width.container)+"%",transform:"translateX("+t.data.translateX+"%)"},t.data.transitionDuration&&{transitionDuration:t.data.transitionDuration+"ms"}]},t._l(t.sliderData,(function(e,s){return i("div",{key:s,class:["v-slider__item"],style:[!t.isSSR&&{width:t.data.width.slide+"%"}]},[t._t("slide",null,{item:e})],2)})),0)]),t.settings.dots?i("div",{class:["v-slider__nav",{disabled:t.data.statusAnimationClass}]},t._l(t.data.pages,(function(e,s){return i("button",{key:s,class:["v-page",{"v-page--active":s===t.indexPage}],attrs:{tabindex:"-1","aria-label":"Carousel Page "+s},on:{click:function(e){return t.goToSlide(s)}}})})),0):t._e(),t.settings.navButtons?[i("button",{class:["v-slider__control prev",{disabled:t.isFirstElement}],attrs:{"aria-label":"prev button",disabled:t.isFirstElement},on:{click:t.prev}},[t._v(" < ")]),i("button",{class:["v-slider__control next",{disabled:t.isLastElement}],attrs:{"aria-label":"next button",disabled:t.isLastElement},on:{click:t.next}},[t._v(" > ")])]:t._e()],2)},l=[],h={computed:{isFirstElement:function(){return this.data.index<=0},isLastElement:function(){return this.data.index+this.settings.slidesToShow>this.data.countItems-1},indexPage:function(){var t=Math.round(this.data.index/this.settings.slidesToShow);return t<0?t=0:(t>=this.data.pages-1||this.isLastElement)&&(t=this.data.pages-1),t}},methods:{convertPixelsToPercent:function(t){return t/this.data.width.wrapper*100/this.data.countItems},convertPercentToPixels:function(t){return t*this.data.width.wrapper/100*this.data.countItems},normalizeEvent:function(t){return t.touches?t.touches[0]:t},getIndex:function(){return Math.abs(Math.round(this.data.translateX/this.data.width.slide))},normalizeIndex:function(t){var e=t;return t<0?e=0:t>this.data.countItems-1&&(e=this.data.countItems-1),e},dispatchEvent:function(t){this.$emit(t,{data:this.data,settings:this.settings,pos:this.pos})}}},u=h,c=(i("d81d"),i("a9e3"),i("5530")),p=i("15fd"),f={props:{sliderData:{type:Array,default:function(){return[]}},dots:{type:Boolean,default:!0},fixedWidth:{type:Number,default:0},navButtons:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}},responsive:{type:Array,default:function(){return null}},slidesToShow:{type:Number,default:1},slidesToScroll:{type:Number,default:1},speed:{type:Number,default:300},swipeDistance:{type:Number,default:100}},created:function(){this.setSettings()},methods:{setSettings:function(){var t=this.$props,e=t.options,i=Object(p["a"])(t,["options"]);e&&(i=Object(c["a"])(Object(c["a"])({},i),e)),i.responsive&&(i.responsive=this.orderBy(i.responsive,"breakpoint"),this.data.breakpoint=i.responsive.map((function(t){return t.breakpoint}))),this.settings=i,this.data.oldSettings=this.settings}}},m=f,v={methods:{next:function(){this.isLastElement||this.goTo(this.data.index+this.settings.slidesToScroll)},prev:function(){this.isFirstElement||this.goTo(this.data.index-this.settings.slidesToScroll)},dragStart:function(t){this.data.transitionDuration=0,this.pos.initial=this.data.translateX,this.pos.x1=this.normalizeEvent(t).clientX,this.pos.indexStart=this.getIndex(),this.data.isDrag=!0},dragAction:function(t){t.preventDefault(),this.pos.x2=this.pos.x1-this.normalizeEvent(t).clientX,this.pos.current=-this.data.width.slide*this.pos.indexStart+this.convertPixelsToPercent(-this.pos.x2*this.settings.slidesToShow),this.data.locked||(this.data.locked=!0,this.ids.dragRequestAnimationFrameId=requestAnimationFrame(this.updatePosition))},goToSlide:function(t){this.goTo(t*Math.round(this.settings.slidesToShow))},dragEnd:function(){this.data.locked&&cancelAnimationFrame(this.ids.dragRequestAnimationFrameId),this.data.isDrag=!1,this.pos.final=this.data.translateX;var t=this.convertPercentToPixels(this.pos.final-this.pos.initial);Math.abs(t)<this.settings.swipeDistance?this.prepareGoTo(this.getIndex()):this.prepareGoTo(Math.abs(Math[t>0?"ceil":"floor"](this.data.translateX/this.data.width.slide)))}}},g=v,b=(i("4160"),i("13d5"),i("fb6a"),i("159b"),{methods:{throttle:function(t,e){var i=!1,s=null,n=null;function a(){if(i)return s=arguments,void(n=this);t.apply(this,arguments),i=!0,setTimeout((function(){i=!1,s&&(a.apply(n,s),s=n=null)}),e)}return a},orderBy:function(t,e){return t.sort((function(t,i){return t[e]>i[e]?1:i[e]>t[e]?-1:0}))},setSettingsOfCurrentBreakpoint:function(){var t=this,e=0,i=0;if(this.data.breakpoint.forEach((function(s,n){s<=t.data.width.window&&(e=s,i=n)})),e||i){var s=this.settings.responsive.slice(0,i)||[];s=s.reduce((function(t,e){return Object(c["a"])(Object(c["a"])({},t),e.settings)}),{}),this.settings=Object(c["a"])(Object(c["a"])(Object(c["a"])({},this.data.oldSettings),s),this.settings.responsive[i].settings)}else this.settings=this.data.oldSettings},computedMetricsCarousel:function(){this.data.width.window=window.innerWidth,this.setSettingsOfCurrentBreakpoint(),this.data.width.wrapper=this.$refs["slider"].offsetWidth,this.settings.fixedWidth?(this.data.width.container=this.settings.fixedWidth/this.data.width.wrapper*1e3,this.settings.slidesToShow=this.data.countItems/this.data.width.container*100):this.data.width.container=this.data.countItems*(100/this.settings.slidesToShow),this.data.pages=Math.ceil(this.data.countItems/this.settings.slidesToShow),this.data.width.slide=100/this.data.countItems},transitionend:function(){this.data.locked=!1,this.data.statusAnimationClass=!1,this.data.transitionDuration=0,this.dispatchEvent("afterChange")},updatePosition:function(){this.data.locked=!1,this.data.translateX=this.pos.current},prepareGoTo:function(t){this.data.translateX>0&&(t=0),t+this.settings.slidesToShow>this.data.countItems-1&&(t=this.data.countItems-this.settings.slidesToShow),this.data.locked=!1,this.goTo(t,200)}}}),S=b,w={name:"VSlider",mixins:[u,m,g,S],data:function(){return{isSSR:!0,settings:{},data:{slides:null,index:0,countItems:0,pages:0,translateX:0,locked:!1,statusAnimationClass:!1,oldSettings:null,breakpoint:[],transitionDuration:0,isLoaded:!1,width:{container:0,wrapper:0,slide:0,window:0}},pos:{x1:0,x2:0,y1:0,y2:0,final:0,initial:0,indexStart:0,current:0},ids:{dragRequestAnimationFrameId:null,resizeTimer:null}}},beforeDestroy:function(){this.destroy(),window.removeEventListener("resize",this.resize)},beforeMount:function(){this.goTo=this.throttle(this.goTo,this.settings.speed)},mounted:function(){this.isSSR=!1,this.initSlider(),window.addEventListener("resize",this.resize)},methods:{initSlider:function(){this.data.slides=this.$refs["slides"],this.data.countItems=this.sliderData.length,this.computedMetricsCarousel(),this.data.isLoaded=!0,this.dispatchEvent("init")},reset:function(){this.data.index=0,this.pos.indexStart=0,this.data.translateX=0},rebuild:function(){this.reset(),this.computedMetricsCarousel(),this.dispatchEvent("rebuild")},resize:function(){var t=this;clearTimeout(this.ids.resizeTimer),this.ids.resizeTimer=setTimeout((function(){t.rebuild(),t.dispatchEvent("breakpoint")}),250)},destroy:function(){this.dispatchEvent("destroy")},goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.speed;if(!this.data.locked){this.data.index=this.normalizeIndex(t),this.data.locked=!0,this.data.statusAnimationClass=!0,this.data.transitionDuration=e;var i=-this.data.width.slide*this.data.index;this.data.countItems%this.settings.slidesToShow!==0&&this.data.index+this.settings.slidesToShow>=this.data.countItems&&(i=-this.data.width.slide*(this.data.countItems-this.settings.slidesToShow)),this.data.translateX=i,setTimeout(this.transitionend,e),this.dispatchEvent("beforeChange")}}}},T=w,x=(i("4547"),i("2877")),y=Object(x["a"])(T,d,l,!1,null,null,null),_=y.exports,k={name:"HelloWorld",components:{VSlider:_},data:function(){return{sliderData:[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12},{name:13}]}}},E=k,I=(i("7d5b"),Object(x["a"])(E,o,r,!1,null,null,null)),O=I.exports,D={name:"App",components:{HelloWorld:O}},j=D,P=Object(x["a"])(j,n,a,!1,null,null,null),W=P.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app")},"7d5b":function(t,e,i){"use strict";var s=i("1355"),n=i.n(s);n.a},e8c1:function(t,e,i){}});
//# sourceMappingURL=app.c3476726.js.map