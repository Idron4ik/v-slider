(function(t){function i(i){for(var s,o,r=i[0],d=i[1],l=i[2],u=0,c=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);h&&h(i);while(c.length)c.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,i=0;i<a.length;i++){for(var e=a[i],s=!0,r=1;r<e.length;r++){var d=e[r];0!==n[d]&&(s=!1)}s&&(a.splice(i--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},a=[];function o(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)o.d(e,s,function(i){return t[i]}.bind(null,s));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=i,r=r.slice();for(var l=0;l<r.length;l++)i(r[l]);var h=d;a.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},1355:function(t,i,e){},4547:function(t,i,e){"use strict";var s=e("e8c1"),n=e.n(s);n.a},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h1",[t._v(" New 2")]),e("h1",[t._v("0: 1 \\ 600: fixedWidth 224 \\ 1024: 4")]),e("VSlider",{attrs:{sliderData:t.sliderData,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:600,settings:{fixedWidth:224,slidesToScroll:3,slidesToShow:3}},{breakpoint:1024,settings:{fixedWidth:0,slidesToShow:4,slidesToScroll:4}}]},scopedSlots:t._u([{key:"slide",fn:function(i){var s=i.item;return[e("div",[t._v(" "+t._s(s.name)+" "),e("a",{attrs:{href:"/"}},[t._v(" LINK")])])]}}])}),e("h1",[t._v("0: fixedWidth 224 \\ 600: \\ 1024: 5")]),e("VSlider",{attrs:{sliderData:t.sliderData,fixedWidth:224,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:600,settings:{fixedWidth:!1,slidesToShow:3,slidesToScroll:3}},{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5}}]},scopedSlots:t._u([{key:"slide",fn:function(i){var s=i.item;return[e("div",[t._v(" "+t._s(s.name))])]}}])}),e("h1",[t._v("0: 2 \\ 600: 1 \\ 1024: fixedWidth 224")]),e("VSlider",{attrs:{sliderData:t.sliderData,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:1024,settings:{fixedWidth:224,slidesToShow:4,slidesToScroll:4}}]},scopedSlots:t._u([{key:"slide",fn:function(i){var s=i.item;return[e("div",[t._v(" "+t._s(s.name))])]}}])})],1)},r=[],d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"slider",class:["v-slider",{"v-slide--ssr":t.isSSR,"v-slider--loaded":t.data.isLoaded}]},[e("div",{class:["v-slider__wrapper",{disabled:t.data.statusAnimationClass},{dragging:t.data.isDrag}],on:{touchstart:t.dragStart,touchend:t.dragEnd,touchmove:t.dragAction}},[e("div",{ref:"slides",staticClass:"v-slider__items",style:[{width:(t.isSSR?"10000":t.data.width.container)+"%",transform:"translateX("+t.data.translateX+"%)"},t.data.transitionDuration&&{transitionDuration:t.data.transitionDuration+"ms"}]},t._l(t.sliderData,(function(i,s){return e("div",{key:s,class:["v-slider__item"],style:[!t.isSSR&&{width:t.data.width.slide+"%"}]},[t._t("slide",null,{item:i})],2)})),0)]),t.settings.dots?e("div",{class:["v-slider__nav",{disabled:t.data.statusAnimationClass}]},t._l(t.data.pages,(function(i,s){return e("button",{key:s,class:["v-page",{"v-page--active":s===t.indexPage}],attrs:{tabindex:"-1","aria-label":"Carousel Page "+s},on:{click:function(i){return t.goToSlide(s)}}})})),0):t._e(),t.settings.navButtons?[e("button",{class:["v-slider__control prev",{disabled:t.isFirstElement}],attrs:{"aria-label":"prev button",disabled:t.isFirstElement},on:{click:t.prev}},[t._v(" < ")]),e("button",{class:["v-slider__control next",{disabled:t.isLastElement}],attrs:{"aria-label":"next button",disabled:t.isLastElement},on:{click:t.next}},[t._v(" > ")])]:t._e()],2)},l=[],h={computed:{isFirstElement:function(){return this.data.index<=0},isLastElement:function(){return this.data.index+this.settings.slidesToShow>this.data.countItems-1},indexPage:function(){var t=Math.round(this.data.index/this.settings.slidesToShow);return t<0?t=0:(t>=this.data.pages-1||this.isLastElement)&&(t=this.data.pages-1),t}},methods:{convertPixelsToPercent:function(t){return t/this.data.width.wrapper*100/this.data.countItems},convertPercentToPixels:function(t){return t*this.data.width.wrapper/100*this.data.countItems},normalizeEvent:function(t){return t.touches?t.touches[0]:t},getIndex:function(){return Math.abs(Math.round(this.data.translateX/this.data.width.slide))},normalizeIndex:function(t){var i=t;return t<0?i=0:t>this.data.countItems-1&&(i=this.data.countItems-1),i},dispatchEvent:function(t){this.$emit(t,{data:this.data,settings:this.settings,pos:this.pos})}}},u=h,c=(e("d81d"),e("a9e3"),e("5530")),p=e("15fd"),f={props:{sliderData:{type:Array,default:function(){return[]}},dots:{type:Boolean,default:!0},fixedWidth:{type:Number,default:0},navButtons:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}},responsive:{type:Array,default:function(){return null}},slidesToShow:{type:Number,default:1},slidesToScroll:{type:Number,default:1},speed:{type:Number,default:300},swipeDistance:{type:Number,default:100}},created:function(){this.setSettings()},methods:{setSettings:function(){var t=this.$props,i=t.options,e=Object(p["a"])(t,["options"]);i&&(e=Object(c["a"])(Object(c["a"])({},e),i)),e.responsive&&(e.responsive=this.orderBy(e.responsive,"breakpoint"),this.data.breakpoint=e.responsive.map((function(t){return t.breakpoint}))),this.settings=e,this.data.oldSettings=this.settings}}},m=f,v={methods:{next:function(){this.isLastElement||this.goTo(this.data.index+this.settings.slidesToScroll)},prev:function(){this.isFirstElement||this.goTo(this.data.index-this.settings.slidesToScroll)},dragStart:function(t){this.pos.initial=this.data.translateX,this.pos.x1=this.normalizeEvent(t).clientX,this.pos.y1=this.normalizeEvent(t).clientY,this.pos.indexStart=this.getIndex(),this.data.isDrag=!1},dragAction:function(t){this.pos.x2=this.pos.x1-this.normalizeEvent(t).clientX,this.pos.y2=this.pos.y1-this.normalizeEvent(t).clientY,!this.data.isDrag&&Math.abs(this.pos.x2)>30&&Math.abs(this.pos.y2)<12&&(this.data.isDrag=!0,this.pos.x1=this.pos.x1+30*(this.pos.x2>0?-1:1),this.pos.x2=this.pos.x1-this.normalizeEvent(t).clientX,this.data.transitionDuration=0),this.data.isDrag&&this.drag()},drag:function(){this.pos.current=-this.data.width.slide*this.pos.indexStart+this.convertPixelsToPercent(-this.pos.x2*this.settings.slidesToShow),this.data.locked||(this.data.locked=!0,this.ids.dragRequestAnimationFrameId=requestAnimationFrame(this.updatePosition))},goToSlide:function(t){this.goTo(t*Math.round(this.settings.slidesToShow))},dragEnd:function(t){this.data.isDrag=!1,this.data.locked&&cancelAnimationFrame(this.ids.dragRequestAnimationFrameId),this.pos.final=this.data.translateX;var i=this.convertPercentToPixels(this.pos.final-this.pos.initial);Math.abs(i)<this.settings.swipeDistance?i&&this.prepareGoTo(this.getIndex()):this.prepareGoTo(Math.abs(Math[i>0?"ceil":"floor"](this.data.translateX/this.data.width.slide)))}}},g=v,b=(e("4160"),e("13d5"),e("fb6a"),e("159b"),{methods:{throttle:function(t,i){var e=!1,s=null,n=null;function a(){if(e)return s=arguments,void(n=this);t.apply(this,arguments),e=!0,setTimeout((function(){e=!1,s&&(a.apply(n,s),s=n=null)}),i)}return a},orderBy:function(t,i){return t.sort((function(t,e){return t[i]>e[i]?1:e[i]>t[i]?-1:0}))},setSettingsOfCurrentBreakpoint:function(){var t=this,i=0,e=0;if(this.data.breakpoint.forEach((function(s,n){s<=t.data.width.window&&(i=s,e=n)})),i||e){var s=this.settings.responsive.slice(0,e)||[];s=s.reduce((function(t,i){return Object(c["a"])(Object(c["a"])({},t),i.settings)}),{}),this.settings=Object(c["a"])(Object(c["a"])(Object(c["a"])({},this.data.oldSettings),s),this.settings.responsive[e].settings)}else this.settings=this.data.oldSettings},computedMetricsCarousel:function(){this.data.width.window=window.innerWidth,this.setSettingsOfCurrentBreakpoint(),this.data.width.wrapper=this.$refs["slider"].offsetWidth,this.settings.fixedWidth?(this.data.width.container=this.settings.fixedWidth/this.data.width.wrapper*1e3,this.settings.slidesToShow=this.data.countItems/this.data.width.container*100):this.data.width.container=this.data.countItems*(100/this.settings.slidesToShow),this.data.pages=Math.ceil(this.data.countItems/this.settings.slidesToShow),this.data.width.slide=100/this.data.countItems},transitionend:function(){this.data.locked=!1,this.data.statusAnimationClass=!1,this.data.transitionDuration=0,this.dispatchEvent("afterChange")},updatePosition:function(){this.data.locked=!1,this.data.translateX=this.pos.current},prepareGoTo:function(t){this.data.translateX>0&&(t=0),t+this.settings.slidesToShow>this.data.countItems-1&&(t=this.data.countItems-this.settings.slidesToShow),this.data.locked=!1,this.goTo(t,200)}}}),S=b,w={name:"VSlider",mixins:[u,m,g,S],data:function(){return{isSSR:!0,settings:{},data:{slides:null,index:0,countItems:0,pages:0,translateX:0,locked:!1,statusAnimationClass:!1,oldSettings:null,breakpoint:[],transitionDuration:0,isLoaded:!1,isDrag:!1,width:{container:0,wrapper:0,slide:0,window:0}},pos:{x1:0,x2:0,y1:0,y2:0,final:0,initial:0,indexStart:0,current:0},ids:{dragRequestAnimationFrameId:null,resizeTimer:null}}},beforeDestroy:function(){this.destroy(),window.removeEventListener("resize",this.resize)},beforeMount:function(){this.goTo=this.throttle(this.goTo,this.settings.speed)},mounted:function(){this.isSSR=!1,this.initSlider(),window.addEventListener("resize",this.resize)},methods:{initSlider:function(){this.data.slides=this.$refs["slides"],this.data.countItems=this.sliderData.length,this.computedMetricsCarousel(),this.data.isLoaded=!0,this.dispatchEvent("init")},reset:function(){this.data.index=0,this.pos.indexStart=0,this.data.translateX=0},rebuild:function(){this.reset(),this.computedMetricsCarousel(),this.dispatchEvent("rebuild")},resize:function(){var t=this;clearTimeout(this.ids.resizeTimer),this.ids.resizeTimer=setTimeout((function(){t.rebuild(),t.dispatchEvent("breakpoint")}),250)},destroy:function(){this.dispatchEvent("destroy")},goTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.speed;if(!this.data.locked){this.data.index=this.normalizeIndex(t),this.data.locked=!0,this.data.statusAnimationClass=!0,this.data.transitionDuration=i;var e=-this.data.width.slide*this.data.index;this.data.countItems%this.settings.slidesToShow!==0&&this.data.index+this.settings.slidesToShow>=this.data.countItems&&(e=-this.data.width.slide*(this.data.countItems-this.settings.slidesToShow)),this.data.translateX=e,setTimeout(this.transitionend,i),this.dispatchEvent("beforeChange")}}}},x=w,T=(e("4547"),e("2877")),y=Object(T["a"])(x,d,l,!1,null,null,null),_=y.exports,k={name:"HelloWorld",components:{VSlider:_},data:function(){return{sliderData:[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12},{name:13}]}}},E=k,D=(e("7d5b"),Object(T["a"])(E,o,r,!1,null,null,null)),I=D.exports,O={name:"App",components:{HelloWorld:I}},j=O,P=Object(T["a"])(j,n,a,!1,null,null,null),M=P.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(M)}}).$mount("#app")},"7d5b":function(t,i,e){"use strict";var s=e("1355"),n=e.n(s);n.a},e8c1:function(t,i,e){}});
//# sourceMappingURL=app.7f437627.js.map