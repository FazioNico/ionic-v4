(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{EU76:function(e,o,t){"use strict";t.r(o),t.d(o,"IonPopover",function(){return b}),t.d(o,"IonPopoverController",function(){return y});var n=t("cBjU"),r=t("1p+f"),i=t("5VCM"),a=t("Zpxf"),s=function(e,o,t,n){return new(t||(t=Promise))(function(r,i){function a(e){try{p(n.next(e))}catch(e){i(e)}}function s(e){try{p(n.throw(e))}catch(e){i(e)}}function p(e){e.done?r(e.value):new t(function(o){o(e.value)}).then(a,s)}p((n=n.apply(e,o||[])).next())})},p=function(e,o){var t,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(r=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[0,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=o.call(e,a)}catch(e){i=[6,e],n=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function l(e,o,t){var n="top",r="left",i=o.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,p=a.height,l=window.innerWidth,d=window.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),f=u&&"top"in u?u.top:d/2-p/2,m=u&&"left"in u?u.left:l/2,b=u&&u.width||0,v=u&&u.height||0,y=o.querySelector(".popover-arrow"),h=y.getBoundingClientRect(),g=h.width,w=h.height;u||(y.style.display="none");var x={top:f+v,left:m+b/2-g/2},P={top:f+v+(w-1),left:m+b/2-s/2},k=!1,D=!1;P.left<c+25?(k=!0,P.left=c):s+c+P.left+25>l&&(D=!0,P.left=l-s-c,r="right"),f+v+p>d&&f-p>0?(x.top=f-(w+1),console.log(x),console.log(f),console.log(p),P.top=f-p-(w-1),o.className=o.className+" popover-bottom",n="bottom"):f+v+p>d&&(i.style.bottom=c+"%"),y.style.top=x.top+"px",y.style.left=x.left+"px",i.style.top=P.top+"px",i.style.left=P.left+"px",k&&(CSS.supports("left","constant(safe-area-inset-left)")?i.style.left="calc("+P.left+"px + constant(safe-area-inset-left)":CSS.supports("left","env(safe-area-inset-left)")&&(i.style.left="calc("+P.left+"px + env(safe-area-inset-left)")),D&&(CSS.supports("right","constant(safe-area-inset-right)")?i.style.left="calc("+P.left+"px - constant(safe-area-inset-right)":CSS.supports("right","env(safe-area-inset-right)")&&(i.style.left="calc("+P.left+"px - env(safe-area-inset-right)")),i.style.transformOrigin=n+" "+r;var j=new e,O=new e;O.addElement(o.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var S=new e;return S.addElement(o.querySelector(".popover-wrapper")),S.fromTo("opacity",.01,1),Promise.resolve(j.addElement(o).easing("ease").duration(100).add(O).add(S))}var c=5;function d(e,o){var t=new e,n=new e;n.addElement(o.querySelector("ion-backdrop"));var r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(n).add(r))}function u(e,o,t){var n="top",r="left",i=o.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,p=a.height,l=window.innerWidth,c=window.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),u=d&&"top"in d?d.top:c/2-p/2,m=d&&d.height||0,b={top:u,left:d&&"left"in d?d.left:l/2-s/2};b.left<f?b.left=f:s+f+b.left>l&&(b.left=l-s-f,r="right"),u+m+p>c&&u-p>0?(b.top=u-p,o.className=o.className+" popover-bottom",n="bottom"):u+m+p>c&&(i.style.bottom=f+"px"),i.style.top=b.top+"px",i.style.left=b.left+"px",i.style.transformOrigin=n+" "+r;var v=new e,y=new e;y.addElement(o.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.08);var h=new e;h.addElement(o.querySelector(".popover-wrapper")),h.fromTo("opacity",.01,1);var g=new e;g.addElement(o.querySelector(".popover-content")),g.fromTo("scale",.001,1);var w=new e;return w.addElement(o.querySelector(".popover-viewport")),w.fromTo("opacity",.01,1),Promise.resolve(v.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(h).add(g).add(w))}var f=12;function m(e,o){var t=new e,n=new e;n.addElement(o.querySelector("ion-backdrop"));var r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(n).add(r))}var b=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.enableBackdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionPopoverDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(null,i.a)},e.prototype.lifecycle=function(e){var o=this.usersElement,t=v[e.type];if(o&&t){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}},e.prototype.present=function(){return s(this,void 0,void 0,function(){var e,o,t;return p(this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),t=this,[4,Object(r.a)(this.delegate,e,this.component,["popover-viewport"],o)];case 1:return t.usersElement=n.sent(),[2,Object(i.e)(this,"popoverEnter",l,u,this.ev)]}})})},e.prototype.dismiss=function(e,o){return s(this,void 0,void 0,function(){return p(this,function(t){switch(t.label){case 0:return[4,Object(i.b)(this,e,o,"popoverLeave",d,m,this.ev)];case 1:return t.sent(),[4,Object(r.b)(this.delegate,this.usersElement)];case 2:return t.sent(),[2]}})})},e.prototype.onDidDismiss=function(e){return Object(i.c)(this.el,"ionPopoverDidDismiss",e)},e.prototype.onWillDismiss=function(e){return Object(i.c)(this.el,"ionPopoverWillDismiss",e)},e.prototype.hostData=function(){var e=this.translucent?Object(a.a)(this.mode,this.color,"popover-translucent"):{};return{style:{zIndex:1e4+this.overlayId},"no-router":!0,class:Object.assign({},e,Object(a.b)(this.cssClass))}},e.prototype.render=function(){var e=Object(a.a)(this.mode,this.color,"popover-wrapper");return[Object(n.b)("ion-backdrop",{tappable:this.enableBackdropDismiss}),Object(n.b)("div",{class:e},Object(n.b)("div",{class:"popover-arrow"}),Object(n.b)("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"popover"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},color:{type:String,attr:"color"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},ev:{type:"Any",attr:"ev"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'ion-popover{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.popover-wrapper{z-index:10;opacity:0}.popover-content{position:absolute;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.popover-content ion-content,.popover-content ion-scroll{contain:none}.popover-content ion-scroll{position:relative}ion-popover-controller{display:none}.popover-ios .popover-content{border-radius:10px;width:200px;min-width:0;min-height:0;max-height:90%;color:var(--ion-text-ios-color,var(--ion-text-color,#000));background-color:var(--ion-background-ios-color,var(--ion-background-color,#fff))}.popover-ios .popover-arrow{position:absolute;display:block;overflow:hidden;width:20px;height:10px}.popover-ios .popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;z-index:10;width:14px;height:14px;background-color:var(--ion-background-ios-color,var(--ion-background-color,#fff));content:"";-webkit-transform:rotate(45deg);transform:rotate(45deg)}.popover-ios.popover-bottom .popover-arrow{top:auto;bottom:-10px}.popover-ios.popover-bottom .popover-arrow::after{top:-6px}.popover-translucent-ios .popover-arrow::after,.popover-translucent-ios .popover-content{background:rgba(var(--ion-background-ios-color-rgb,var(--ion-background-color-rgb,255,255,255)),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),v={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillDismiss",ionPopoverDidDismiss:"ionViewDidDismiss"},y=function(){function e(){this.popovers=new Map}return e.prototype.popoverWillPresent=function(e){this.popovers.set(e.target.overlayId,e.target)},e.prototype.popoverWillDismiss=function(e){this.popovers.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){Object(i.i)(this.popovers)},e.prototype.create=function(e){return Object(i.f)(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,o,t){return void 0===t&&(t=-1),Object(i.g)(e,o,this.popovers,t)},e.prototype.getTop=function(){return Object(i.h)(this.popovers)},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionPopoverWillPresent",method:"popoverWillPresent"},{name:"body:ionPopoverWillDismiss",method:"popoverWillDismiss"},{name:"body:ionPopoverDidUnload",method:"popoverWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),e}()}}]);