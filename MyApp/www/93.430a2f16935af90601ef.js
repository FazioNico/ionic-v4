(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{hOrt:function(o,t,e){"use strict";e.r(t),e.d(t,"IonBackdrop",function(){return r});var n=e("exFm"),r=function(){function o(){this.lastClick=-1e4,this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return o.prototype.componentDidLoad=function(){var o;o=this.doc,i.add(this),o.body.classList.add(a)},o.prototype.componentDidUnload=function(){var o;o=this.doc,i.delete(this),0===i.size&&o.body.classList.remove(a)},o.prototype.onTouchStart=function(o){this.lastClick=Object(n.a)(o),this.emitTap(o)},o.prototype.onMouseDown=function(o){this.lastClick<Object(n.a)(o)-2500&&this.emitTap(o)},o.prototype.emitTap=function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},o.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(o,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"host",{get:function(){return{theme:"backdrop"}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return"ion-backdrop{left:0;right:0;top:0;bottom:0;position:absolute;z-index:2;display:block;cursor:pointer;opacity:.01;-webkit-transform:translateZ(0);transform:translateZ(0);-ms-touch-action:none;touch-action:none;contain:strict}ion-backdrop.backdrop-hide{background:0 0}ion-backdrop.backdrop-no-tappable{cursor:auto}body.backdrop-no-scroll{overflow:hidden}.backdrop-ios{background-color:var(--ion-backdrop-ios-color,var(--ion-backdrop-color,#000))}"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),o}(),a="backdrop-no-scroll",i=new Set}}]);