(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{eR7g:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=function(){},u=l("ntG5"),r=l("M9A9"),i=l("ZYCi"),a=l("KkUS"),c=l("Ip0R"),s=l("gcOT"),f=l("F/XL"),h=l("mrSG"),d=l("26FU"),p=function(n,t,l,e){return new(l||(l=Promise))(function(o,u){function r(n){try{a(e.next(n))}catch(n){u(n)}}function i(n){try{a(e.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new l(function(t){t(n.value)}).then(r,i)}a((e=e.apply(n,t||[])).next())})},m=function(n,t){var l,e,o,u,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(l)throw new TypeError("Generator is already executing.");for(;r;)try{if(l=1,e&&(o=e[2&u[0]?"return":u[0]?"throw":"next"])&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[0,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(6===u[0]&&r.label<o[1]){r.label=o[1],o=u;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(u);break}o[2]&&r.ops.pop(),r.trys.pop();continue}u=t.call(n,r)}catch(n){u=[6,n],e=0}finally{l=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},v=function(n){function t(){var t=n.call(this,{name:"MotionPWA",platforms:["web"]})||this;return t.datas=new d.a(null),t}return Object(h.c)(t,n),t.prototype.echo=function(n){return p(this,void 0,void 0,function(){return m(this,function(t){return console.log("ECHO",n),[2,Promise.resolve()]})})},t.prototype.start=function(){return p(this,void 0,void 0,function(){var n=this;return m(this,function(t){switch(t.label){case 0:return console.log("starting..."),[4,window.addEventListener("deviceorientation",function(t){console.log("ready!"),console.log(t),n.datas.next(t)})];case 1:return t.sent(),[2,Promise.resolve()]}})})},t}(s.c),b=function(n,t,l,e){return new(l||(l=Promise))(function(o,u){function r(n){try{a(e.next(n))}catch(n){u(n)}}function i(n){try{a(e.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new l(function(t){t(n.value)}).then(r,i)}a((e=e.apply(n,t||[])).next())})},g=function(n,t){var l,e,o,u,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(l)throw new TypeError("Generator is already executing.");for(;r;)try{if(l=1,e&&(o=e[2&u[0]?"return":u[0]?"throw":"next"])&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[0,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(6===u[0]&&r.label<o[1]){r.label=o[1],o=u;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(u);break}o[2]&&r.ops.pop(),r.trys.pop();continue}u=t.call(n,r)}catch(n){u=[6,n],e=0}finally{l=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},w=function(n){function t(t){var l=this;if(t)return(l=n.call(this,{name:"Camera",platforms:["web"]})||this).HTMLSelector=t,l;alert("Error: No HTML selector provided!!")}return Object(h.c)(t,n),t.prototype.start=function(){return b(this,void 0,void 0,function(){var n,t;return g(this,function(l){switch(l.label){case 0:return console.log("starting..."),n={audio:!1,video:{width:window.screen.width,height:window.screen.height}},void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),[4,navigator.mediaDevices.getUserMedia(n)];case 1:return(t=l.sent())instanceof Error?(console.log("Error with web PWA Camera API:",t.message),[2,Promise.reject("Error with web PWA Camera API:"+t.message)]):[4,this.buildDOMElement(t)];case 2:return l.sent(),[4,this.addEvent()];case 3:return l.sent(),[2,Promise.resolve(t)]}})})},t.prototype.buildDOMElement=function(n){return b(this,void 0,void 0,function(){var t=this;return g(this,function(l){return this.img=document.createElement("img"),this.canvas=document.createElement("canvas"),this.video=document.createElement("video"),this.button=document.createElement("ion-button"),this.video.style.position="absolute",this.video.style.zIndex="1",this.canvas.style.display="none",this.button.innerHTML="TAKE",this.button.style.position="absolute",this.button.style.zIndex="2",document.body.insertAdjacentElement("afterbegin",this.canvas),document.body.insertAdjacentElement("afterbegin",this.video),document.body.insertAdjacentElement("afterbegin",this.button),"srcObject"in this.video?this.video.srcObject=n:this.video.src=window.URL.createObjectURL(n),this.video.onloadedmetadata=function(n){t.video.play()},[2]})})},t.prototype.addEvent=function(){return b(this,void 0,void 0,function(){var n=this;return g(this,function(t){switch(t.label){case 0:return[4,document.addEventListener("click",function(t){t.preventDefault(),n.buildPicture()})];case 1:return t.sent(),[2]}})})},t.prototype.buildPicture=function(){return b(this,void 0,void 0,function(){var n;return g(this,function(t){switch(t.label){case 0:return[4,this.canvas.getContext("2d").drawImage(this.video,0,0,window.screen.width,window.screen.height,0,0,window.screen.width,window.screen.height)];case 1:return t.sent(),n=this.img,[4,this.canvas.toDataURL("image/png")];case 2:return n.src=t.sent(),this.img.style.display="block",this.img.style.width="100%",this.img.style.height="100%",document.querySelector(this.HTMLSelector)?[4,document.querySelector(this.HTMLSelector+" .scroll-inner").insertAdjacentElement("afterbegin",this.img)]:[2,console.log("Error: HTMLSelector not found",this.HTMLSelector)];case 3:return t.sent(),this.video.remove(),this.canvas.remove(),this.button.remove(),[2]}})})},t}(s.c),y=function(n,t,l,e){return new(l||(l=Promise))(function(o,u){function r(n){try{a(e.next(n))}catch(n){u(n)}}function i(n){try{a(e.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new l(function(t){t(n.value)}).then(r,i)}a((e=e.apply(n,t||[])).next())})},k=function(n,t){var l,e,o,u,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(l)throw new TypeError("Generator is already executing.");for(;r;)try{if(l=1,e&&(o=e[2&u[0]?"return":u[0]?"throw":"next"])&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[0,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(6===u[0]&&r.label<o[1]){r.label=o[1],o=u;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(u);break}o[2]&&r.ops.pop(),r.trys.pop();continue}u=t.call(n,r)}catch(n){u=[6,n],e=0}finally{l=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},L=new v,E=new w("app-tab-three"),I=s.a.Plugins,S=I.Motion,x=I.Toast,P=function(){function n(){this.cameraPlugin=E,this.motionDatas=Object(f.a)({message:"loading..."})}return n.prototype.ngOnInit=function(){this.img=localStorage.getItem("ionic-img"),this.startMotion()},n.prototype.startMotion=function(){var n=this;if(!s.a.isPluginAvailable("Motion"))return this.handlError();S.addListener("orientation",function(t){console.log("::::: data motion",t),n.motionDatas=Object(f.a)(t)})},n.prototype.handlError=function(){return y(this,void 0,void 0,function(){var n;return k(this,function(t){switch(t.label){case 0:return n="error Capacitaor Motion not available",this.motionDatas=Object(f.a)({message:n}),this.show({message:n}),console.log("error Capacitaor Motion not available"),[4,L.start()];case 1:return t.sent(),this.motionDatas=L.datas,[2]}})})},n.prototype.show=function(n){return void 0===n&&(n={message:"Plugin not working"}),y(this,void 0,void 0,function(){return k(this,function(t){switch(t.label){case 0:return[4,x.show({text:n.message})];case 1:return t.sent(),[2]}})})},n.prototype.startCamera=function(){return y(this,void 0,void 0,function(){return k(this,function(n){switch(n.label){case 0:return[4,E.start()];case 1:return n.sent(),[2]}})})},n.prototype.savePicture=function(){if(console.log("picture saved!"),!E.img.src)return console.log("err");localStorage.setItem("ionic-img",E.img.src),console.log("img url save",E.img.src)},n}(),T=e.Ja({encapsulation:0,styles:[[""]],data:{}});function K(n){return e.Ya(0,[(n()(),e.La(0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,function(n,t){n(t,0,0,e.Na(1,"",t.component.img,""))})}function C(n){return e.Ya(0,[(n()(),e.La(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.La(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Wa(2,null,["        ","\n        ","\n        ","\n      "]))],null,function(n,t){n(t,2,0,null==t.context.ngIf?null:t.context.ngIf.alpha,null==t.context.ngIf?null:t.context.ngIf.beta,null==t.context.ngIf?null:t.context.ngIf.gamma)})}function M(n){return e.Ya(0,[(n()(),e.La(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,t,l){var o=!0,u=n.component;return"click"===t&&(o=!1!==e.Ta(n,2).onClick(l)&&o),"click"===t&&(o=!1!==u.savePicture()&&o),o},null,null)),e.Ka(1,16384,null,0,u.e,[e.k],null,null),e.Ka(2,16384,null,0,r.a,[[2,i.l],e.k],null,null),(n()(),e.Wa(-1,null,["SAVE PICTURE"]))],null,null)}function j(n){return e.Ya(0,[(n()(),e.La(0,0,null,null,15,"ion-header",[],null,null,null,null,null)),e.Ka(1,16384,null,0,u.w,[e.k],null,null),(n()(),e.La(2,0,null,null,13,"ion-toolbar",[["color","primary"]],null,null,null,null,null)),e.Ka(3,16384,null,0,u.Va,[e.k],{color:[0,"color"]},null),(n()(),e.La(4,0,null,null,8,"ion-buttons",[["slot","start"]],null,null,null,null,null)),e.Ka(5,16384,null,0,u.f,[],null,null),(n()(),e.La(6,0,null,null,6,"ion-menu-toggle",[],null,null,null,null,null)),e.Ka(7,16384,null,0,u.N,[e.k],null,null),(n()(),e.La(8,0,null,null,4,"ion-button",[],null,[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.Ta(n,10).onClick(l)&&o),o},null,null)),e.Ka(9,16384,null,0,u.e,[e.k],null,null),e.Ka(10,16384,null,0,r.a,[[2,i.l],e.k],null,null),(n()(),e.La(11,0,null,null,1,"ion-icon",[["name","menu"],["slot","icon-only"]],null,null,null,null,null)),e.Ka(12,16384,null,0,a.a,[e.k],{name:[0,"name"]},null),(n()(),e.La(13,0,null,null,2,"ion-title",[],null,null,null,null,null)),e.Ka(14,16384,null,0,u.Wa,[e.k],null,null),(n()(),e.Wa(-1,null,["Ionic Blank"])),(n()(),e.La(16,0,null,null,15,"ion-content",[["padding",""]],null,null,null,null,null)),e.Ka(17,16384,null,0,u.p,[e.k],null,null),(n()(),e.La(18,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Wa(-1,null,["Tab Three work!"])),(n()(),e.Ca(16777216,null,null,1,null,K)),e.Ka(21,16384,null,0,c.k,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(n()(),e.La(22,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Ca(16777216,null,null,2,null,C)),e.Ka(24,16384,null,0,c.k,[e.L,e.I],{ngIf:[0,"ngIf"]},null),e.Ua(131072,c.b,[e.h]),(n()(),e.La(26,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,t,l){var o=!0,u=n.component;return"click"===t&&(o=!1!==e.Ta(n,28).onClick(l)&&o),"click"===t&&(o=!1!==u.startCamera()&&o),o},null,null)),e.Ka(27,16384,null,0,u.e,[e.k],null,null),e.Ka(28,16384,null,0,r.a,[[2,i.l],e.k],null,null),(n()(),e.Wa(-1,null,["TAKE PICTURE"])),(n()(),e.Ca(16777216,null,null,1,null,M)),e.Ka(31,16384,null,0,c.k,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,3,0,"primary"),n(t,12,0,"menu"),n(t,21,0,l.img),n(t,24,0,e.Xa(t,24,0,e.Ta(t,25).transform(l.motionDatas))),n(t,31,0,null==l.cameraPlugin?null:null==l.cameraPlugin.img?null:l.cameraPlugin.img.src)},null)}var A=e.Ha("app-tab-three",P,function(n){return e.Ya(0,[(n()(),e.La(0,0,null,null,1,"app-tab-three",[],null,null,null,j,T)),e.Ka(1,114688,null,0,P,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),O=l("95zI"),D=l("9opb"),H=l("apKv"),U=l("B4/3"),W=function(){};l.d(t,"TabThreeModuleNgFactory",function(){return R});var R=e.Ia(o,[],function(n){return e.Ra([e.Sa(512,e.j,e.X,[[8,[A]],[3,e.j],e.v]),e.Sa(4608,c.m,c.l,[e.s,[2,c.r]]),e.Sa(4608,O.a,O.a,[e.x,e.g]),e.Sa(4608,D.a,D.a,[O.a,e.j,e.p]),e.Sa(4608,H.a,H.a,[O.a,e.j,e.p]),e.Sa(1073742336,c.c,c.c,[]),e.Sa(1073742336,U.a,U.a,[]),e.Sa(1073742336,i.m,i.m,[[2,i.q],[2,i.l]]),e.Sa(1073742336,W,W,[]),e.Sa(1073742336,o,o,[]),e.Sa(1024,i.j,function(){return[[{path:"",outlet:"three",component:P}]]},[])])})}}]);