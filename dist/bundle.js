!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.vPlayer=t()}(this,function(){"use strict";function e(e,t){t=$.extend({},{swfUrl:w.swf,loading:w.loading,bgcolor:"#000",preload:!1,loop:!1,autoplay:!1,muted:!1,volume:1,simulateFullScreen:!0},t),this.options=t,this.vid=this.getVID(),T[this.vid]=this,this.readyCalls=[m];var o=$(e);o.empty(),b.clone().appendTo(o),this.$wrap=o.find(".video-wrapper"),this.$wrap.prepend('<div id="'+this.vid+'"></div>'),this.clickUrl=$.trim(t.clickUrl||"");var n=t.clickUrlTrack||"",i=t.playTrack||"";this.clickUrlTrack=$.isFunction(n)?n:$.trim(n).replace(E,""),this.playTrack=$.isFunction(i)?i:$.trim(i).replace(E,""),t.poster&&this.$wrap.find(".vplayer-poster img").attr("src",t.poster),this.$wrap.find(".vplayer-loading").attr("src",t.loading);var r=!1===/^0{0,3}$/.test(x.ua.pv.join("")),a=x.hasFlashPlayerVersion("11.4.0");r&&a?this.createPlayer():this.$wrap.find(".flash-tip").show()}function t(){e.apply(this,arguments)}var o={swf:"//s5.ssl.qhres.com/static/fca83421739b4383.swf",sprite:"//p5.ssl.qhimg.com/t0154249c11cb1852d0.png",loading:"//p5.ssl.qhimg.com/t017699817e7d9bb0fd.gif"},n=function(e){var t=document.createElement("style");t.rel="stylesheet",t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)},i=".body__hidden{overflow:hidden !important}.video-wrapper{position:relative;width:100%;height:100%;background:#000;overflow:hidden !important;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.video-wrapper__fullscreen{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999999999}.video-wrapper>video{display:block;width:100%;height:100%;outline:0 !important}.video-control{position:absolute;bottom:-40px;left:0;right:0;width:100%;height:30px;z-index:888;padding-top:10px;background:url(__sprite) 0 -190px;_padding-top:7px;_background-position:0 -195px}.video-control>.video-progress{position:absolute;left:0;right:0;z-index:999;top:4px;width:100%;height:12px;overflow:hidden;zoom:1}.video-progress .v-p-total{position:absolute;left:0;right:0;top:5px;height:2px;width:100%;background-color:#555}.video-progress .v-p-total .v-p-cur{float:left;height:2px;width:0;background-color:#2b2b2b}.video-progress .v-p-total .v-p-ctrl{position:absolute;left:0;top:-5px;width:12px;height:12px;background:url(__sprite) 0 -20px no-repeat}.video-time,.video-volume,.video-expand{float:right}.video-control-play{float:left;overflow:hidden;padding:8px 10px 7px 20px}.video-time{display:none;float:left;font-size:12px;color:#fff;font-family:Microsoft Yahei;padding:0;line-height:30px}.video-control-play-btn:hover,.video-volume-btn:hover,.video-expand-btn:hover{opacity:.8;filter:alpha(opacity=80)}.video-control-play-btn{width:14px;height:15px;background:url(__sprite) no-repeat}.video-control-play-btn__paused{background-position:-20px -20px}.video-control-play-btn__playing{background-position:-40px -20px}.video-expand{padding:7px 20px 7px 16px}.video-expand-btn{width:18px;height:16px}.video-expand-btn__normal{background:url(__sprite) -60px -20px no-repeat}.video-volume{padding:7px 2px 7px 0}.video-volume-btn{display:block;width:19px;height:16px;background:url(__sprite) 0 0 no-repeat}.video-volume-btn__muted{background-position:0 0}.video-volume-btn__1{background-position:-20px 0}.video-volume-btn__2{background-position:-40px 0}.video-volume-btn__3{background-position:-60px 0}.video-volume-ctrl{float:right;width:30%;max-width:60px;min-width:40px;height:30px;position:relative}.volume-total{position:absolute;left:0;right:0;top:14px;height:2px;background-color:#fff}.volume-cur{float:left;height:2px;width:0;background-color:#fff}.volume-ctrl{position:absolute;left:0;top:-5px;width:12px;height:12px;background:url(__sprite) 0 -20px no-repeat}.vplayer-poster,.vplayer-poster img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:999}.vplayer-loading,.vplayer-play-btn{width:70px;height:70px;position:absolute;left:50%;top:50%;margin-top:-35px;margin-left:-35px;cursor:pointer;z-index:1000}.vplayer-play-btn{background:url(__sprite) 0 -40px no-repeat}.vplayer-play-btn:hover{background-position:-80px -40px}.vplayer-play-pause{background-position:0 -120px !important}.vplayer-play-pause:hover{opacity:.8;filter:alpha(opacity=80)}.flash-tip{display:none;position:absolute;top:0;right:0;bottom:0;left:0;z-index:1111;background:#424242}.flash-tip a{position:absolute;top:0;right:0;bottom:0;left:0;height:40px;line-height:40px;text-align:center;color:#ffff;overflow:hidden;text-overflow:ellipsis;margin:auto;text-decoration:none}\n",r={__def:i},a=' <div class="video-wrapper"> <div class="video-control"> <div class="video-progress"> <div class="v-p-total"> <div class="ctrl v-p-ctrl"></div> <div class="v-p-cur"></div> </div> </div> <div style="overflow: hidden"> <div class="video-control-play"> <div class="video-control-play-btn video-control-play-btn__paused"></div> </div> <div class="video-time">00:00/00:00</div> <div class="video-expand"> <div class="video-expand-btn video-expand-btn__normal"></div> </div> <div class="video-volume-ctrl"> <div class="volume-total"> <div class="ctrl volume-ctrl"></div> <div class="volume-cur"></div> </div> </div> <div class="video-volume"> <div class="video-volume-btn video-volume-btn__muted"></div> </div> </div> </div> <div class="vplayer-poster"> <img alt=""> </div> <div class="vplayer-play-btn"></div> <img alt="" class="vplayer-loading" style="display: none"> <div class="flash-tip"> <a href="http://www.adobe.com/go/getflashplayer" target="_blank" title="升级Flash插件"> 点击升级 Flash 插件 </a> </div> </div>',l={__def:a},s=window,d=s.So&&s.So.page&&s.So.page.timer||[],p=d,c=function(){function e(){if(!q&&document.getElementsByTagName("body")[0]){try{var e,t=w("span");t.style.display="none",e=M.getElementsByTagName("body")[0].appendChild(t),e.parentNode.removeChild(e),e=null,t=null}catch(e){return}q=!0;for(var o=z.length,n=0;n<o;n++)z[n]()}}function t(e){q?e():z[z.length]=e}function o(e){if(typeof U.addEventListener!==I)U.addEventListener("load",e,!1);else if(typeof M.addEventListener!==I)M.addEventListener("load",e,!1);else if(typeof U.attachEvent!==I)x(U,"onload",e);else if("function"==typeof U.onload){var t=U.onload;U.onload=function(){t(),e()}}else U.onload=e}function n(){var e=M.getElementsByTagName("body")[0],t=w(P);t.setAttribute("style","visibility: hidden;"),t.setAttribute("type",B);var o=e.appendChild(t);if(o){var n=0;!function r(){if(typeof o.GetVariable!==I)try{var a=o.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),G.pv=[b(a[0]),b(a[1]),b(a[2])])}catch(e){G.pv=[8,0,0]}else if(n<10){n++;var l=setTimeout(r,10);return void p.push(l)}e.removeChild(t),o=null,i()}()}else i()}function i(){var e=V.length;if(e>0)for(var t=0;t<e;t++){var o=V[t].id,n=V[t].callbackFn,i={success:!1,id:o};if(G.pv[0]>0){var d=g(o);if(d)if(!k(V[t].swfVersion)||G.wk&&G.wk<312)if(V[t].expressInstall&&a()){var p={};p.data=V[t].expressInstall,p.width=d.getAttribute("width")||"0",p.height=d.getAttribute("height")||"0",d.getAttribute("class")&&(p.styleclass=d.getAttribute("class")),d.getAttribute("align")&&(p.align=d.getAttribute("align"));for(var c={},u=d.getElementsByTagName("param"),v=u.length,f=0;f<v;f++)"movie"!==u[f].getAttribute("name").toLowerCase()&&(c[u[f].getAttribute("name")]=u[f].getAttribute("value"));l(p,c,o,n)}else s(d),n&&n(i);else E(o,!0),n&&(i.success=!0,i.ref=r(o),i.id=o,n(i))}else if(E(o,!0),n){var h=r(o);h&&typeof h.SetVariable!==I&&(i.success=!0,i.ref=h,i.id=h.id),n(i)}}}function r(e){var t=null,o=g(e);return o&&"OBJECT"===o.nodeName.toUpperCase()&&(t=typeof o.SetVariable!==I?o:o.getElementsByTagName(P)[0]||o),t}function a(){return!W&&k("6.0.65")&&(G.win||G.mac)&&!(G.wk&&G.wk<312)}function l(e,t,o,n){var i=g(o);if(o=y(o),W=!0,$=n||null,F={success:!1,id:o},i){"OBJECT"===i.nodeName.toUpperCase()?(C=d(i),S=null):(C=i,S=o),e.id=L,(typeof e.width===I||!/%$/.test(e.width)&&b(e.width)<310)&&(e.width="310"),(typeof e.height===I||!/%$/.test(e.height)&&b(e.height)<137)&&(e.height="137");var r=G.ie?"ActiveX":"PlugIn",a="MMredirectURL="+encodeURIComponent(U.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+r+"&MMdoctitle="+encodeURIComponent(M.title.slice(0,47)+" - Flash Player Installation");if(typeof t.flashvars!==I?t.flashvars+="&"+a:t.flashvars=a,G.ie&&4!=i.readyState){var l=w("div");o+="SWFObjectNew",l.setAttribute("id",o),i.parentNode.insertBefore(l,i),i.style.display="none",h(i)}v(e,t,o)}}function s(e){if(G.ie&&4!=e.readyState){e.style.display="none";var t=w("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(d(e),t),h(e)}else e.parentNode.replaceChild(d(e),e)}function d(e){var t=w("div");if(G.win&&G.ie)t.innerHTML=e.innerHTML;else{var o=e.getElementsByTagName(P)[0];if(o){var n=o.childNodes;if(n)for(var i=n.length,r=0;r<i;r++)1==n[r].nodeType&&"PARAM"===n[r].nodeName||8==n[r].nodeType||t.appendChild(n[r].cloneNode(!0))}}return t}function u(e,t){var o=w("div");return o.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+e+"'>"+t+"</object>",o.firstChild}function v(e,t,o){var n,i=g(o);if(o=y(o),G.wk&&G.wk<312)return n;if(i){var r,a,l,s=w(G.ie?"div":P);typeof e.id===I&&(e.id=o);for(l in t)t.hasOwnProperty(l)&&"movie"!==l.toLowerCase()&&f(s,l,t[l]);G.ie&&(s=u(e.data,s.innerHTML));for(r in e)e.hasOwnProperty(r)&&(a=r.toLowerCase(),"styleclass"===a?s.setAttribute("class",e[r]):"classid"!==a&&"data"!==a&&s.setAttribute(r,e[r]));G.ie?R[R.length]=e.id:(s.setAttribute("type",B),s.setAttribute("data",e.data)),i.parentNode.replaceChild(s,i),n=s}return n}function f(e,t,o){var n=w("param");n.setAttribute("name",t),n.setAttribute("value",o),e.appendChild(n)}function h(e){var t=g(e);t&&"OBJECT"===t.nodeName.toUpperCase()&&(G.ie?(t.style.display="none",function e(){if(4==t.readyState){for(var o in t)"function"==typeof t[o]&&(t[o]=null);t.parentNode.removeChild(t)}else{var n=setTimeout(e,10);p.push(n)}}()):t.parentNode.removeChild(t))}function m(e){return e&&e.nodeType&&1===e.nodeType}function y(e){return m(e)?e.id:e}function g(e){if(m(e))return e;var t=null;try{t=M.getElementById(e)}catch(e){}return t}function w(e){return M.createElement(e)}function b(e){return parseInt(e,10)}function x(e,t,o){e.attachEvent(t,o),D[D.length]=[e,t,o]}function k(e){e+="";var t=G.pv,o=e.split(".");return o[0]=b(o[0]),o[1]=b(o[1])||0,o[2]=b(o[2])||0,t[0]>o[0]||t[0]==o[0]&&t[1]>o[1]||t[0]==o[0]&&t[1]==o[1]&&t[2]>=o[2]}function _(e,t,o,n){var i=M.getElementsByTagName("head")[0];if(i){var r="string"==typeof o?o:"screen";if(n&&(N=null,A=null),!N||A!=r){var a=w("style");a.setAttribute("type","text/css"),a.setAttribute("media",r),N=i.appendChild(a),G.ie&&typeof M.styleSheets!==I&&M.styleSheets.length>0&&(N=M.styleSheets[M.styleSheets.length-1]),A=r}N&&(typeof N.addRule!==I?N.addRule(e,t):typeof M.createTextNode!==I&&N.appendChild(M.createTextNode(e+" {"+t+"}")))}}function E(e,t){if(H){var o=t?"visible":"hidden",n=g(e);q&&n?n.style.visibility=o:"string"==typeof e&&_("#"+e,"visibility:"+o)}}function T(e){return null!==/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!==I?encodeURIComponent(e):e}var C,S,$,F,N,A,I="undefined",P="object",B="application/x-shockwave-flash",L="SWFObjectExprInst",U=window,M=document,O=navigator,j=!1,z=[],V=[],R=[],D=[],q=!1,W=!1,H=!0,X=!1,G=function(){var e=typeof M.getElementById!==I&&typeof M.getElementsByTagName!==I&&typeof M.createElement!==I,t=O.userAgent.toLowerCase(),o=O.platform.toLowerCase(),n=/win/.test(o?o:t),i=/mac/.test(o?o:t),r=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),a="Microsoft Internet Explorer"===O.appName,l=[0,0,0],s=null;if(typeof O.plugins!==I&&typeof O.plugins["Shockwave Flash"]===P)(s=O.plugins["Shockwave Flash"].description)&&typeof O.mimeTypes!==I&&O.mimeTypes[B]&&O.mimeTypes[B].enabledPlugin&&(j=!0,a=!1,s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=b(s.replace(/^(.*)\..*$/,"$1")),l[1]=b(s.replace(/^.*\.(.*)\s.*$/,"$1")),l[2]=/[a-zA-Z]/.test(s)?b(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0);else if(typeof U.ActiveXObject!==I)try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");d&&(s=d.GetVariable("$version"))&&(a=!0,s=s.split(" ")[1].split(","),l=[b(s[0]),b(s[1]),b(s[2])])}catch(e){}return{w3:e,pv:l,wk:r,ie:a,win:n,mac:i}}();!function(){G.w3&&((typeof M.readyState!==I&&("complete"===M.readyState||"interactive"===M.readyState)||typeof M.readyState===I&&(M.getElementsByTagName("body")[0]||M.body))&&e(),q||(typeof M.addEventListener!==I&&M.addEventListener("DOMContentLoaded",e,!1),G.ie&&(M.attachEvent("onreadystatechange",function t(){"complete"===M.readyState&&(M.detachEvent("onreadystatechange",t),e())}),U==top&&function t(){if(!q){try{M.documentElement.doScroll("left")}catch(e){var o=setTimeout(t,0);return void p.push(o)}e()}}()),G.wk&&function t(){if(!q){if(!/loaded|complete/.test(M.readyState)){var o=setTimeout(t,0);return void p.push(o)}e()}}()))}();z[0]=function(){j?n():i()};!function(){G.ie&&window.attachEvent("onunload",function(){for(var e=D.length,t=0;t<e;t++)D[t][0].detachEvent(D[t][1],D[t][2]);for(var o=R.length,n=0;n<o;n++)h(R[n]);for(var i in G)G[i]=null;G=null;for(var r in c)c[r]=null;c=null})}();return{registerObject:function(e,t,o,n){if(G.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=o,i.callbackFn=n,V[V.length]=i,E(e,!1)}else n&&n({success:!1,id:e})},getObjectById:function(e){if(G.w3)return r(e)},embedSWF:function(e,o,n,i,r,s,d,p,c,u){var f=y(o),h={success:!1,id:f};G.w3&&!(G.wk&&G.wk<312)&&e&&o&&n&&i&&r?(E(f,!1),t(function(){n+="",i+="";var t={};if(c&&typeof c===P)for(var m in c)t[m]=c[m];t.data=e,t.width=n,t.height=i;var y={};if(p&&typeof p===P)for(var g in p)y[g]=p[g];if(d&&typeof d===P)for(var w in d)if(d.hasOwnProperty(w)){var b=X?encodeURIComponent(w):w,x=X?encodeURIComponent(d[w]):d[w];typeof y.flashvars!==I?y.flashvars+="&"+b+"="+x:y.flashvars=b+"="+x}if(k(r)){var _=v(t,y,o);t.id==f&&E(f,!0),h.success=!0,h.ref=_,h.id=_.id}else{if(s&&a())return t.data=s,void l(t,y,o,u);E(f,!0)}u&&u(h)})):u&&u(h)},switchOffAutoHideShow:function(){H=!1},enableUriEncoding:function(e){X=typeof e===I||e},ua:G,getFlashPlayerVersion:function(){return{major:G.pv[0],minor:G.pv[1],release:G.pv[2]}},hasFlashPlayerVersion:k,createSWF:function(e,t,o){return G.w3?v(e,t,o):void 0},showExpressInstall:function(e,t,o,n){G.w3&&a()&&l(e,t,o,n)},removeSWF:function(e){G.w3&&h(e)},createCSS:function(e,t,o,n){G.w3&&_(e,t,o,n)},addDomLoadEvent:t,addLoadEvent:o,getQueryParamValue:function(e){var t=M.location.search||M.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),!e)return T(t);for(var o=t.split("&"),n=0;n<o.length;n++)if(o[n].substring(0,o[n].indexOf("="))==e)return T(o[n].substring(o[n].indexOf("=")+1))}return""},expressInstallCallback:function(){if(W){var e=g(L);e&&C&&(e.parentNode.replaceChild(C,e),S&&(E(S,!0),G.ie&&(C.style.display="block")),$&&$(F)),W=!1}},version:"2.3"}}(),u=c,v=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){!function(){var t=e.exports,o="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,n=function(){for(var e,t,o=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,i=o.length,r={};n<i;n++)if((e=o[n])&&e[1]in document){for(n=0,t=e.length;n<t;n++)r[o[0][n]]=e[n];return r}return!1}(),i={request:function(e){var t=n.requestFullscreen;e=e||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[t]():e[t](o&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[n.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},raw:n};if(!n)return void(t?e.exports=!1:window.screenfull=!1);Object.defineProperties&&Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(document[n.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[n.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(document[n.fullscreenEnabled])}}}),t?e.exports=i:window.screenfull=i}()}),f=v,h=d,m=function(e,t){function o(t){var o=e.prop("volume"),n=o+t;n=n<0?0:n>1?1:n,e.prop("muted")&&n>0&&e.prop("muted",!1),e.prop("volume",n)}function n(t){if("swf"!==e.mode){var o=e.prop("duration");if(o&&!(e.prop("ended")&&t>0)){var n=e.prop("currentTime")/o,i=n+t;i=i<0?0:i>1?1:i,e.seekTo(o*i),1===i?e.options.loop?e.replay():e.pause():e.play()}}}function i(e){switch(+e){case 37:return n(-.1);case 39:return n(.1);case 38:return o(.1);case 40:return o(-.1)}}function r(){return e.prop("ended")?e.replay():e.prop("paused")?e.play():void e.pause()}function a(){return d.hasClass(K)}function l(e,t,o,n){var i,r,a,l=+new Date,s=0,d=0,p=null,c=function(){d=l,e.apply(r,a)};return function(){l=+new Date,r=this,a=arguments,i=l-(n?s:d)-t,clearTimeout(p),n?o?p=setTimeout(c,t):i>=0&&c():i>=0?c():o&&(p=setTimeout(c,-i)),h.push(p),s=l}}window["swf_"+t.id]=e;var s=$(document),d=e.$wrap,p=function(e){return d.find(e)};$.fn.ctrlSlider=function(e){var t=e.duration,o=e.current,n=e.controller,i=this;return this.on("mousedown",function(r){r.preventDefault(),e.onstart&&e.onstart();var a=i.offset().left,d=i.width(),p=function(e){var i=e.clientX-a;i=i<0?0:i>d?d:i;var r=i/t.width();return o.css("width",i),n.css("left",(d-n.width())*r),r},c="mousemove."+ +new Date,u=function(t){e.onchange&&e.onchange(p(t))};s.on(c,l(u,100,!0)),s.one("mouseup",function(t){s.off(c),e.onend&&e.onend(p(t))}),u(r)}),this};var c=p(".video-control"),u=d.find(".video-time"),v=function(){return e.prop("ended")||e.prop("paused")&&0===e.prop("currentTime")},m=function(){v()||c.animate({bottom:0,opacity:1},300)},y=function(){!v()&&e.prop("paused")||a()||c.animate({bottom:-40,opacity:0},200)};d.on("mouseenter",m).on("mouseleave",y);var g=!0,w=function(){g=c.width()<=250,g?u.hide():u.show()};w();var b=function(e){return""+(e<0?e:e<10?"0"+e:e)},x=function(e){return e=Math.round(+e),isNaN(e)&&(e=0),b(Math.floor(e/60))+":"+b(Math.floor(e%60))},k=p(".video-progress"),_=p(".v-p-total"),E=p(".v-p-cur"),T=p(".v-p-ctrl"),C=_.width(),S=function(){C=_.width()},F=!1,N=0,A=function(){if(!F){N=N||T.width();var t=e.prop("currentTime");isNaN(t)&&(t=0);var o=e.prop("duration");isNaN(o)||o<=0?u.text("--:--"):u.text(x(t)+"/"+x(o));var n=0;0!==o&&(n=t/o),n=Math.round(100*n)/100,E.css("width",C*n),T.css("left",(C-N)*n)}};k.ctrlSlider({duration:_,current:E,controller:T,onstart:function(){F=!0,e.pause()},onchange:function(t){var o=e.prop("duration");t=t<.95?t:.95,e.seekTo(t*o),u.text(x(o*t)+"/"+x(o))},onend:function(t){F=!1,t=t<.95?t:.95,e.seekTo(t*e.prop("duration")),e.play()}});var I=p(".video-control-play"),P=p(".video-control-play-btn"),B="video-control-play-btn__playing",L=p(".vplayer-poster, .vplayer-play-btn"),U=p(".vplayer-play-btn"),M=p(".vplayer-poster"),O=p(".vplayer-loading"),j=null;I.on("click",function(){r()}),U.on("click",function(){r(),m()}),e.on("loadstart",function(){"video"===e.mode&&e.options.preload&&!e.options.autoplay||(L.hide(),O.show())}),e.on("durationchange",function(){e.prop("duration")<=0?(u.hide(),k.hide()):(g||u.show(),k.show())}),e.on("canplaythrough",function(){clearInterval(j),A(),P.addClass(B),j=setInterval(function(){A()},30),h.push(j),L.hide();var e=setTimeout(function(){O.hide()},0);h.push(e)}),e.on("playing",function(){A(),P.addClass(B),clearInterval(j),j=setInterval(function(){A()},30),h.push(j),L.hide()}),e.on("pause",function(){clearInterval(j),A(),m(),P.removeClass(B),U.addClass("vplayer-play-pause").show()}),e.on("ended",function(){clearInterval(j),A(),y(),e.options.loop||(P.removeClass(B),L.show(),U.removeClass("vplayer-play-pause"))});var z=e.clickUrl,V=e.clickUrlTrack;z&&M.css("cursor","pointer");var R=function(){z&&!a()&&(e.track(V),window.open(z))};M.on("click",R),e.on("click",function(){e.pause(),R()});var D=p(".volume-total"),q=p(".volume-cur"),W=p(".volume-ctrl"),H=p(".video-volume-btn");p(".video-volume-ctrl").ctrlSlider({duration:D,current:q,controller:W,onstart:function(){},onchange:function(t){e.prop("muted",!1),e.prop("volume",t)},onend:function(t){e.prop("muted",!1),e.prop("volume",t)}});var X=function(t){var o=H[0],n=D.width();W.css("left",t*(n-W.width())),q.css("width",t*n);var i=e.prop("muted"),r="video-volume-btn__"+(0===t||i?"muted":t<1/3?1:t<2/3?2:3);o.className=o.className.replace(/video-volume-btn__(\d|muted)/g,"")+r},G=function(){X(e.prop("muted")?0:e.prop("volume"))};G(),e.on("volumechange",function(){var t=e.prop("volume");t<.01&&t>0&&e.prop("volume",0),e.prop("muted")&&(t=0),X(t)}),H.on("click",function(){e.prop("muted",!e.prop("muted"))});var J=p(".video-expand"),Y=p(".video-expand-btn"),K="isFullScreen",Z=$("html, body"),Q=function(){Z.toggleClass("body__hidden"),f?f.toggle(d[0]):d.toggleClass("video-wrapper__fullscreen"),Y.toggleClass("video-expand-btn__expanded"),d.toggleClass(K),w(),S(),G(),A()};f||e.options.simulateFullScreen?J.on("click",Q):Y.hide(),f&&$(window).on(f.raw.fullscreenchange,function(){f.isFullscreen?Z.addClass("body__hidden"):(Z.removeClass("body__hidden"),Y.removeClass("video-expand-btn__expanded"),d.removeClass("video-wrapper__fullscreen"),d.removeClass(K)),w(),S(),G(),A()}),s.on("keydown.vjs",function(e){if(a()){var t=+e.keyCode;116===t?location.reload():27===t?Q():32===t?r():i(t)}}),"swf"===e.mode&&e.on("esc",function(){a()&&Q()}),d.on("keydown.vjs",function(e){if(!a()){var t=e.keyCode;32===t?r():116===t?location.reload():i(t)}}).on("selectstart",function(e){e.preventDefault()}),$(window).on("resize",l(function(){w(),S(),G(),(e.prop("ended")||e.prop("paused"))&&A()},100))},y=r&&i||r,g=l&&a||l,w=o;!function(e){var t=document.createElement("style");t.rel="stylesheet",t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)}(y.replace(/__sprite/g,w.sprite));var b=$(g),x=u,k=d,_=$({}),E=/^on(blur|focus|focusin|focusout|load|resize|scroll|unload|click|dblclick|mousedown|mouseup|mousemove|mouseover|mouseout|mouseenter|mouseleave|change|select|submit|keydown|keypress|keyup|error|contextmenu)\=/i,T={};e.prototype={constructor:e,on:function(e,t){for(var o=e.split(/\s+/),n=0,i=o.length;n<i;n++)_.on.call(_,o[n]+"_"+this.vid,t);return this},off:function(e,t){if(e)for(var o=e.split(/\s+/),n=0,i=o.length;n<i;n++)_.off.call(_,o[n]+"_"+this.vid,t);else _.off();return this},getVID:function(){return"vjs_"+ +new Date},createPlayer:function(){this.mode="swf",this.$wrap.css("background-color",this.options.bgcolor);var e={src:this.options.src,autoplay:this.options.autoplay,preload:this.options.preload,loop:this.options.loop,volume:this.options.volume,muted:this.options.muted,allowFullScreen:!0,wmode:"transparent"},t={allowScriptAccess:"always",bgcolor:this.options.bgcolor,allowFullScreen:!0,wmode:"transparent"},o={id:this.vid,name:this.vid};x.embedSWF(this.options.swfUrl,this.vid,"100%","100%","10.3","",e,t,o),this.initEvents()},track:function(e){try{if($.isFunction(e))e();else{new Function(e)()}}catch(e){window.console&&window.console.log(e)}},applyPlayTrack:function(){var e=this.playTrack,t=this;e&&this.on("track",function(){t.track(e)})},initEvents:function(){var e=this;this.on("ready",function(){e.readyState="complete",e.vidElem=document.getElementById(e.vid);for(var t=e.readyCalls,o=0,n=t.length;o<n;o++)t[o].call(e,e,e.vidElem)}).on("stageclick",function(){_.trigger("click_"+e.vid)}).on("ended",function(){if(e.options.loop){var t=setTimeout(function(){e.replay()},100);k.push(t)}}).on("playing",function(){e.__not_first||(e.__not_first=!0,_.trigger("track_"+e.vid))}),this.applyPlayTrack()},ready:function(e){return"complete"===this.readyState?e.call(this,this,this.vidElem,this.$wrap):this.readyCalls.push(e),this},setSource:function(e){return this.vidElem.vjs_src(e),this},play:function(){var e=this.prop("duration");return e>0&&e<=this.prop("currentTime")?this.options.loop?this.replay():this.pause():this.vidElem.vjs_play(),this},pause:function(){return this.vidElem.vjs_pause(),this},seekTo:function(e){return this.prop("currentTime",e),this},replay:function(){this.seekTo(0);var e=this;e.prop("paused")&&e.play();var t=setTimeout(function(){e.prop("paused")&&e.play(),_.trigger("track_"+e.vid)},0);k.push(t)},prop:function(e,t){var o=this.vidElem;return 1===arguments.length?o.vjs_getProperty(e):(o.vjs_setProperty(e,t),this)}};var C={constructor:t,addAttrs:function(e){for(var t in e)e.hasOwnProperty(t)&&e[t]&&(this.vidElem[t]=e[t])},createPlayer:function(){this.mode="video",this.$wrap.css("background-color",this.options.bgcolor),this.$wrap.find("#"+this.vid).remove();var e=$("<video />");this.vidElem=e[0],this.addAttrs({controls:!1,id:this.vid,name:this.vid,src:this.options.preload?this.options.src:"",preload:this.options.preload,autoplay:this.options.autoplay,muted:this.options.muted}),e.css({width:"100%",height:"100%"}),this.$wrap.prepend(e),this.vidElem.volume=this.options.volume,this._lastVolume=this.options.volume,this.initEvents()},initEvents:function(){var e=this;this.on("ended",function(){if(e.options.loop){var t=setTimeout(function(){e.replay()},100);k.push(t)}}).on("playing",function(){e.__not_first||(e.__not_first=!0,_.trigger("track_"+e.vid))}),this.applyPlayTrack();var t=this.vid,o=document.getElementById(t),n=["canplaythrough","durationchange","playing","play","loadstart","pause","ended","volumechange","click"];$.each(n,function(e,n){$(o).on(n,function(){_.trigger(n+"_"+t)})});for(var i=e.readyCalls,r=null;i.length;)r=i.shift(),r.call(e,e,o);e.readyState="complete"},setSource:function(e){return this.prop("src",e),this},play:function(){this.options.preload||this.prop("currentSrc")||(this.vidElem.src=this.options.src);var e=this.prop("duration");return e>0&&e<=this.prop("currentTime")?this.options.loop?this.replay():this.pause():this.vidElem.play(),this},pause:function(){return this.vidElem.pause(),this},seekTo:function(e){return this.vidElem.currentTime=e,this},replay:function(){this.vidElem.currentTime=0,this.vidElem.play();var e=this,t=setTimeout(function(){e.prop("paused")&&e.play(),_.trigger("track_"+e.vid)},0);k.push(t)},prop:function(e,t){var o=this.vidElem;return 1===arguments.length?"lastVolume"==e?this._lastVolume>0?this._lastVolume:1:o[e]:(o[e]=t,"volume"===e&&(this._lastVolume=o.volume),this)}};t.prototype=$.extend({},e.prototype,C);var S=function(){var e=document.createElement("video"),t="";try{t=e.canPlayType&&e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")}catch(e){}return e=null,!!t}(),F=function(o,n){if(!n||!n.src)throw"option src needed!";var i,r="swf"===n.mode,a=!/mp4$/i.test(n.src+"");return!S||r||a?(i=new e(o,n),i.mode="swf"):(i=new t(o,n),i.mode="video",i.$wrap.on("contextmenu",function(e){e.preventDefault()})),i},N=$.vPlayer=F;return $.fn.vPlayer=function(){return this.each(function(e,t){var o=$(t),n={};n.mode=o.attr("mode"),n.src=o.attr("src"),void 0!==o.attr("loop")&&(n.loop=!0),void 0!==o.attr("preload")&&(n.preload=!0),void 0!==o.attr("autoplay")&&(n.autoplay=!0),void 0!==o.attr("muted")&&(n.muted=!0),void 0!==o.attr("simulatefullscreen")&&(n.simulateFullScreen=!0);var i=o.attr("volume");void 0!==i&&(n.volume=parseFloat(i));var r=o.attr("poster");r&&(n.poster=r);var a=$.trim(o.attr("href"));a&&(n.clickUrl=a);var l=$.trim(o.attr("onurlopen"));l&&(n.clickUrlTrack=l);var s=$.trim(o.attr("onplay"));s&&(n.playTrack=s);var d=$.trim(o.attr("swf"));return d&&(n.swfUrl=d),$.vPlayer(o,n)}),this},F.timers=k,F.onEvent=function(e,t){_.trigger(t+"_"+e)},F.onError=function(e,t){_.trigger("error_"+e,t)},F.onReady=function(e){_.trigger("ready_"+e)},F.debug=function(e){return e?T[e]:T},F.debug.emitter=_,_._trigger=_.trigger,_.trigger=function(e){F.debugMode&&window.console&&console.log(e),_._trigger(e)},F.toggleEventLog=function(){F.debugMode=!F.debugMode},N});
//# sourceMappingURL=bundle.js.map
