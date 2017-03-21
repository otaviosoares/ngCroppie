/*************************
 * Croppie
 * Copyright 2016
 * Foliotek
 * Version: 2.4.0
 *************************/
!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("object"==typeof exports&&"string"!=typeof exports.nodeName?exports:e.commonJsStrict={})}(this,function(exports){function e(e){if(e in O)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=N.length;n--;)if(e=N[n]+t,e in O)return e}function t(e,n){e=e||{};for(var i in n)n[i]&&n[i].constructor&&n[i].constructor===Object?(e[i]=e[i]||{},t(e[i],n[i])):e[i]=n[i];return e}function n(e,t,n){var i;return function(){var o=this,r=arguments,a=function(){i=null,n||e.apply(o,r)},l=n&&!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(o,r)}}function i(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function o(e,t,n){if("string"==typeof t){var i=t;t={},t[i]=n}for(var o in t)e.style[o]=t[o]}function r(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function a(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}function l(e){return parseInt(e,10)}function s(e,t,n){var i,o=t||new Image;return o.src===e?i=new Promise(function(e){e(o)}):(i=new Promise(function(t){n&&"http"===e.substring(0,4).toLowerCase()&&o.setAttribute("crossOrigin","anonymous"),o.onload=function(){setTimeout(function(){t(o)},1)}}),o.src=e),o.style.opacity=0,i}function u(e,t){window.EXIF||t(0),EXIF.getData(e,function(){var e=EXIF.getTag(this,"Orientation");t(e)})}function c(e,t,n){var i=t.width,o=t.height,r=e.getContext("2d");switch(e.width=t.width,e.height=t.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1);break;case 3:r.translate(i,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:e.width=o,e.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1);break;case 8:e.width=o,e.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180)}r.drawImage(t,0,0,i,o),r.restore()}function p(){var e,t,n,i,a,l,s=this,u="croppie-container",c=s.options.viewport.type?"cr-vp-"+s.options.viewport.type:null;s.options.useCanvas=s.options.enableOrientation||h.call(s),s.data={},s.elements={},e=s.elements.boundary=document.createElement("div"),n=s.elements.viewport=document.createElement("div"),t=s.elements.img=document.createElement("img"),i=s.elements.overlay=document.createElement("div"),s.options.useCanvas?(s.elements.canvas=document.createElement("canvas"),s.elements.preview=s.elements.canvas):s.elements.preview=s.elements.img,r(e,"cr-boundary"),a=s.options.boundary.width,l=s.options.boundary.height,o(e,{width:a+(isNaN(a)?"":"px"),height:l+(isNaN(l)?"":"px")}),r(n,"cr-viewport"),c&&r(n,c),o(n,{width:s.options.viewport.width+"px",height:s.options.viewport.height+"px"}),n.setAttribute("tabindex",0),r(s.elements.preview,"cr-image"),r(i,"cr-overlay"),s.element.appendChild(e),e.appendChild(s.elements.preview),e.appendChild(n),e.appendChild(i),r(s.element,u),s.options.customClass&&r(s.element,s.options.customClass),w.call(this),s.options.enableZoom&&d.call(s)}function h(){return this.options.enableExif&&window.EXIF}function m(e){if(this.options.enableZoom){var t=this.elements.zoomer,n=F(e,4);t.value=Math.max(t.min,Math.min(t.max,n))}}function d(){function e(){f.call(n,{value:parseFloat(o.value),origin:new q(n.elements.preview),viewportRect:n.elements.viewport.getBoundingClientRect(),transform:D.parse(n.elements.preview)})}function t(t){var i,o;i=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/-60:0,o=n._currentZoom+i*n._currentZoom,t.preventDefault(),m.call(n,o),e.call(n)}var n=this,i=n.elements.zoomerWrap=document.createElement("div"),o=n.elements.zoomer=document.createElement("input");r(i,"cr-slider-wrap"),r(o,"cr-slider"),o.type="range",o.step="0.0001",o.value=1,o.style.display=n.options.showZoomer?"":"none",n.element.appendChild(i),i.appendChild(o),n._currentZoom=1,n.elements.zoomer.addEventListener("input",e),n.elements.zoomer.addEventListener("change",e),n.options.mouseWheelZoom&&(n.elements.boundary.addEventListener("mousewheel",t),n.elements.boundary.addEventListener("DOMMouseScroll",t))}function f(e){function t(){var e={};e[P]=i.toString(),e[W]=a.toString(),o(n.elements.preview,e)}var n=this,i=e?e.transform:D.parse(n.elements.preview),r=e?e.viewportRect:n.elements.viewport.getBoundingClientRect(),a=e?e.origin:new q(n.elements.preview);if(n._currentZoom=e?e.value:n._currentZoom,i.scale=n._currentZoom,t(),n.options.enforceBoundary){var l=v.call(n,r),s=l.translate,u=l.origin;i.x>=s.maxX&&(a.x=u.minX,i.x=s.maxX),i.x<=s.minX&&(a.x=u.maxX,i.x=s.minX),i.y>=s.maxY&&(a.y=u.minY,i.y=s.maxY),i.y<=s.minY&&(a.y=u.maxY,i.y=s.minY)}t(),U.call(n),b.call(n)}function v(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.elements.boundary.clientWidth/2,a=t.elements.boundary.clientHeight/2,l=t.elements.preview.getBoundingClientRect(),s=l.width,u=l.height,c=i/2,p=o/2,h=-1*(c/n-r),m=h-(s*(1/n)-i*(1/n)),d=-1*(p/n-a),f=d-(u*(1/n)-o*(1/n)),v=1/n*c,g=s*(1/n)-v,w=1/n*p,y=u*(1/n)-w;return{translate:{maxX:h,minX:m,maxY:d,minY:f},origin:{maxX:g,minX:v,maxY:y,minY:w}}}function g(){var e=this,t=e._currentZoom,n=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),r=D.parse(e.elements.preview.style[P]),a=new q(e.elements.preview),l=i.top-n.top+i.height/2,s=i.left-n.left+i.width/2,u={},c={};u.y=l/t,u.x=s/t,c.y=(u.y-a.y)*(1-t),c.x=(u.x-a.x)*(1-t),r.x-=c.x,r.y-=c.y;var p={};p[W]=u.x+"px "+u.y+"px",p[P]=r.toString(),o(e.elements.preview,p)}function w(){function e(e,t){var n=d.elements.preview.getBoundingClientRect(),i=h.y+t,o=h.x+e;d.options.enforceBoundary?(p.top>n.top+t&&p.bottom<n.bottom+t&&(h.y=i),p.left>n.left+e&&p.right<n.right+e&&(h.x=o)):(h.y=i,h.x=o)}function t(e){function t(e){switch(e){case i:return[1,0];case o:return[0,1];case r:return[-1,0];case a:return[0,-1]}}var i=37,o=38,r=39,a=40;if(!e.shiftKey||e.keyCode!=o&&e.keyCode!=a){if(e.keyCode>=37&&e.keyCode<=40){e.preventDefault();var l=t(e.keyCode);h=D.parse(d.elements.preview),document.body.style[H]="none",p=d.elements.viewport.getBoundingClientRect(),n(l)}}else{var s=0;s=e.keyCode==o?parseFloat(d.elements.zoomer.value,10)+parseFloat(d.elements.zoomer.step,10):parseFloat(d.elements.zoomer.value,10)-parseFloat(d.elements.zoomer.step,10),d.setZoom(s)}}function n(t){var n=t[0],i=t[1],r={};e(n,i),r[P]=h.toString(),o(d.elements.preview,r),y.call(d),document.body.style[H]="",g.call(d),b.call(d),c=0}function r(e){if(e.preventDefault(),!f){if(f=!0,s=e.pageX,u=e.pageY,e.touches){var t=e.touches[0];s=t.pageX,u=t.pageY}h=D.parse(d.elements.preview),window.addEventListener("mousemove",a),window.addEventListener("touchmove",a),window.addEventListener("mouseup",l),window.addEventListener("touchend",l),document.body.style[H]="none",p=d.elements.viewport.getBoundingClientRect()}}function a(t){t.preventDefault();var n=t.pageX,r=t.pageY;if(t.touches){var a=t.touches[0];n=a.pageX,r=a.pageY}var l=n-s,p=r-u,f={};if("touchmove"==t.type&&t.touches.length>1){var v=t.touches[0],g=t.touches[1],w=Math.sqrt((v.pageX-g.pageX)*(v.pageX-g.pageX)+(v.pageY-g.pageY)*(v.pageY-g.pageY));c||(c=w/d._currentZoom);var b=w/c;return m.call(d,b),void i(d.elements.zoomer)}e(l,p),f[P]=h.toString(),o(d.elements.preview,f),y.call(d),u=r,s=n}function l(){f=!1,window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",l),window.removeEventListener("touchend",l),document.body.style[H]="",g.call(d),b.call(d),c=0}var s,u,c,p,h,d=this,f=!1;d.elements.overlay.addEventListener("mousedown",r),d.elements.viewport.addEventListener("keydown",t),d.elements.overlay.addEventListener("touchstart",r)}function y(){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect();o(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}function b(){var e,t=this,n=t.get();if(x.call(t))if(t.options.update.call(t,n),t.$)t.$(t.element).trigger("update",n);else{var e;window.CustomEvent?e=new CustomEvent("update",{detail:n}):(e=document.createEvent("CustomEvent"),e.initCustomEvent("update",!0,!0,n)),t.element.dispatchEvent(e)}}function x(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function C(){var e,t,n,r,a,l=this,s=0,u=1.5,c=1,p={},h=l.elements.preview,d=l.elements.zoomer,f=new D(0,0,c),v=new q,w=x.call(l);if(w&&!l.data.bound){if(l.data.bound=!0,p[P]=f.toString(),p[W]=v.toString(),p.opacity=1,o(h,p),e=h.getBoundingClientRect(),t=l.elements.viewport.getBoundingClientRect(),n=l.elements.boundary.getBoundingClientRect(),l._originalImageWidth=e.width,l._originalImageHeight=e.height,l.options.enableZoom){l.options.enforceBoundary&&(r=t.width/e.width,a=t.height/e.height,s=Math.max(r,a)),s>=u&&(u=s+1),d.min=F(s,4),d.max=F(u,4);var b=Math.max(n.width/e.width,n.height/e.height);c=null!==l.data.boundZoom?l.data.boundZoom:b,m.call(l,c),i(d)}else l._currentZoom=c;f.scale=l._currentZoom,p[P]=f.toString(),o(h,p),l.data.points.length?E.call(l,l.data.points):_.call(l),g.call(l),y.call(l)}}function E(e){if(4!=e.length)throw"Croppie - Invalid number of points supplied: "+e;var t=this,n=e[2]-e[0],i=t.elements.viewport.getBoundingClientRect(),r=t.elements.boundary.getBoundingClientRect(),a={left:i.left-r.left,top:i.top-r.top},l=i.width/n,s=e[1],u=e[0],c=-1*e[1]+a.top,p=-1*e[0]+a.left,h={};h[W]=u+"px "+s+"px",h[P]=new D(p,c,l).toString(),o(t.elements.preview,h),m.call(t,l),t._currentZoom=l}function _(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=e.elements.boundary.getBoundingClientRect(),r=n.left-i.left,a=n.top-i.top,l=r-(t.width-n.width)/2,s=a-(t.height-n.height)/2,u=new D(l,s,e._currentZoom);o(e.elements.preview,P,u.toString())}function B(e){var t=this,n=t.elements.canvas,i=t.elements.img,o=n.getContext("2d"),r=h.call(t),e=t.options.enableOrientation&&e;o.clearRect(0,0,n.width,n.height),n.width=i.width,n.height=i.height,r?u(i,function(t){c(n,i,l(t,10)),e&&c(n,i,e)}):e&&c(n,i,e)}function I(e){var t=this,n=e.points,i=l(n[0]),o=l(n[1]),r=n[2]-n[0],a=n[3]-n[1],s=e.circle,u=document.createElement("canvas"),c=u.getContext("2d"),p=r,h=a,m=0,d=0;return e.outputWidth&&e.outputHeight&&(p=e.outputWidth,h=e.outputHeight),u.width=p,u.height=h,e.backgroundColor&&(c.fillStyle=e.backgroundColor,c.fillRect(0,0,p,h)),0>i&&(m=Math.abs(i),i=0),0>o&&(d=Math.abs(o),o=0),i+r>t._originalImageWidth&&(r=t._originalImageWidth-i,p=r),o+a>t._originalImageHeight&&(a=t._originalImageHeight-o,h=a),c.drawImage(this.elements.preview,i,o,r,a,m,d,p,h),s&&(c.fillStyle="#fff",c.globalCompositeOperation="destination-in",c.beginPath(),c.arc(p/2,h/2,p/2,0,2*Math.PI,!0),c.closePath(),c.fill()),u}function R(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),a=t[2]-t[0],l=t[3]-t[1];return r(n,"croppie-result"),n.appendChild(i),o(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,o(n,{width:a+"px",height:l+"px"}),n}function Z(e){return I.call(this,e).toDataURL(e.format,e.quality)}function L(e){var t=this;return new Promise(function(n){I.call(t,e).toBlob(function(e){n(e)},e.format,e.quality)})}function M(e,t){var n,i=this,o=[],r=null;if("string"==typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if("undefined"==typeof e&&i.data.url)return C.call(i),b.call(i),null;n=e.url,o=e.points||[],r="undefined"==typeof e.zoom?null:e.zoom}i.data.bound=!1,i.data.url=n||i.data.url,i.data.points=(o||i.data.points).map(function(e){return parseFloat(e)}),i.data.boundZoom=r;var a=s(n,i.elements.img,i.options.useCanvas);return a.then(function(){i.options.useCanvas&&(i.elements.img.exifdata=null,B.call(i,e.orientation||1)),C.call(i),b.call(i),t&&t()}),a}function F(e,t){return parseFloat(e).toFixed(t||0)}function X(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=(n.width-e.elements.viewport.offsetWidth)/2,a=(n.height-e.elements.viewport.offsetHeight)/2,l=i+e.elements.viewport.offsetWidth+r,s=o+e.elements.viewport.offsetHeight+a,u=e._currentZoom;(u===1/0||isNaN(u))&&(u=1);var c=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(c,i/u),o=Math.max(c,o/u),l=Math.max(c,l/u),s=Math.max(c,s/u),{points:[F(i),F(o),F(l),F(s)],zoom:u}}function k(e){var n,i=this,o=X.call(i),r=t(Q,t({},e)),a="string"==typeof e?e:r.type||"base64",l=r.size,s=r.format,u=r.quality,c=r.backgroundColor,p="boolean"==typeof r.circle?r.circle:"circle"===i.options.viewport.type,h=i.elements.viewport.getBoundingClientRect(),m=h.width/h.height;return"viewport"===l?(o.outputWidth=h.width,o.outputHeight=h.height):"object"==typeof l&&(l.width&&l.height?(o.outputWidth=l.width,o.outputHeight=l.height):l.width?(o.outputWidth=l.width,o.outputHeight=l.width/m):l.height&&(o.outputWidth=l.height*m,o.outputHeight=l.height)),G.indexOf(s)>-1&&(o.format="image/"+s,o.quality=u),o.circle=p,o.url=i.data.url,o.backgroundColor=c,n=new Promise(function(e){switch(a.toLowerCase()){case"rawcanvas":e(I.call(i,o));break;case"canvas":case"base64":e(Z.call(i,o));break;case"blob":L.call(i,o).then(e);break;default:e(R.call(i,o))}})}function Y(){C.call(this)}function j(e){if(!this.options.useCanvas)throw"Croppie: Cannot rotate without enableOrientation";var t=this,n=t.elements.canvas,i=(t.elements.img,document.createElement("canvas")),o=1;i.width=n.width,i.height=n.height;var r=i.getContext("2d");r.drawImage(n,0,0),(90===e||-270===e)&&(o=6),(-90===e||270===e)&&(o=8),(180===e||-180===e)&&(o=3),c(n,i,o),f.call(t)}function S(){var e=this;e.element.removeChild(e.elements.boundary),a(e.element,"croppie-container"),e.options.enableZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}function z(e,n){if(this.element=e,this.options=t(t({},z.defaults),n),"img"===this.element.tagName.toLowerCase()){var i=this.element;r(i,"cr-original-image");var o=document.createElement("div");this.element.parentNode.appendChild(o),o.appendChild(i),this.element=o,this.options.url=this.options.url||i.src}if(p.call(this),this.options.url){var a={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,M.call(this,a)}}"function"!=typeof Promise&&!function(e){function t(e,t){return function(){e.apply(t,arguments)}}function n(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(e,t(o,this),t(r,this))}function i(e){var t=this;return null===this._state?void this._deferreds.push(e):void c(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var i;try{i=n(t._value)}catch(o){return void e.reject(o)}e.resolve(i)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void s(t(n,e),t(o,this),t(r,this))}this._state=!0,this._value=e,a.call(this)}catch(i){r.call(this,i)}}function r(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)i.call(this,this._deferreds[e]);this._deferreds=null}function l(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function s(e,t,n){var i=!1;try{e(function(e){i||(i=!0,t(e))},function(e){i||(i=!0,n(e))})}catch(o){if(i)return;i=!0,n(o)}}var u=setTimeout,c="function"==typeof setImmediate&&setImmediate||function(e){u(e,1)},p=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};n.prototype["catch"]=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var o=this;return new n(function(n,r){i.call(o,new l(e,t,n,r))})},n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&p(arguments[0])?arguments[0]:arguments);return new n(function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var l=a.then;if("function"==typeof l)return void l.call(a,function(e){i(r,e)},n)}e[r]=a,0===--o&&t(e)}catch(s){n(s)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,n){n(e)})},n.race=function(e){return new n(function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)})},n._setImmediateFn=function(e){c=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(this),"function"!=typeof window.CustomEvent&&!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var i=atob(this.toDataURL(t,n).split(",")[1]),o=i.length,r=new Uint8Array(o),a=0;o>a;a++)r[a]=i.charCodeAt(a);e(new Blob([r],{type:t||"image/png"}))}});var W,P,H,N=["Webkit","Moz","ms"],O=document.createElement("div").style;P=e("transform"),W=e("transformOrigin"),H=e("userSelect");var A="translate3d",T=", 0px",D=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};D.parse=function(e){return e.style?D.parse(e.style[P]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?D.fromMatrix(e):D.fromString(e)},D.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new D(l(t[4]),l(t[5]),parseFloat(t[0]))},D.fromString=function(e){var t=e.split(") "),n=t[0].substring(A.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new D(o,r,i)},D.prototype.toString=function(){return A+"("+this.x+"px, "+this.y+"px"+T+") scale("+this.scale+")"};var q=function(e){if(!e||!e.style[W])return this.x=0,void(this.y=0);var t=e.style[W].split(" ");this.x=parseFloat(t[0]),this.y=parseFloat(t[1])};q.prototype.toString=function(){return this.x+"px "+this.y+"px"};var U=n(y,500),Q={type:"canvas",format:"png",quality:1},G=["jpeg","webp","png"];if(window.jQuery){var $=window.jQuery;$.fn.croppie=function(e){var t=typeof e;if("string"===t){var n=Array.prototype.slice.call(arguments,1),i=$(this).data("croppie");return"get"===e?i.get():"result"===e?i.result.apply(i,n):"bind"===e?i.bind.apply(i,n):this.each(function(){var t=$(this).data("croppie");if(t){var i=t[e];if(!$.isFunction(i))throw"Croppie "+e+" method not found";i.apply(t,n),"destroy"===e&&$(this).removeData("croppie")}})}return this.each(function(){var t=new z(this,e);t.$=$,$(this).data("croppie",t)})}}z.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},customClass:"",showZoomer:!0,enableZoom:!0,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,update:function(){}},t(z.prototype,{bind:function(e,t){return M.call(this,e,t)},get:function(){return X.call(this)},result:function(e){return k.call(this,e)},refresh:function(){return Y.call(this)},setZoom:function(e){m.call(this,e),i(this.elements.zoomer)},rotate:function(e){j.call(this,e)},destroy:function(){return S.call(this)}}),exports.Croppie=window.Croppie=z,"object"==typeof module&&module.exports&&(module.exports=z)});

/*************************
 * ACroppie
 * Orif N. Jr.
 * Version: 1.0.0
 *************************/
angular.module('ngAcroppie', []).directive('ngAcroppie', [
  function ($compile) {
    return {
        restrict: 'AE',
        scope:{
          src: '=',
          rotation: '=',
          viewport: '=',
          boundry: '=',
          type: '@',
          zoom: '@',
          mousezoom: '@',
          update: '=',
          ngModel: '='
        },
        link: function(scope, elem, attr) {

                // defaults
                if(scope.viewport == undefined){
                  scope.viewport = {w: null, h: null}
                }

                if(scope.boundry == undefined){
                  scope.boundry = {w: null, h: null}
                }

                // catches
                scope.viewport.w = (scope.viewport.w != undefined) ? scope.viewport.w : 300;
                scope.viewport.h = (scope.viewport.h != undefined) ? scope.viewport.h : 300;
                scope.boundry.w = (scope.boundry.w != undefined) ? scope.boundry.w : 400;
                scope.boundry.h = (scope.boundry.h != undefined) ? scope.boundry.h : 400;

                // viewport cannot be larger than the boundaries
                if(scope.viewport.w > scope.boundry.w){ scope.viewport.w = scope.boundry.w }
                if(scope.viewport.h > scope.boundry.h){ scope.viewport.h = scope.boundry.h }

                // convert string to Boolean
                var zoom = (scope.zoom === "true"),
                    mouseZoom = (scope.mousezoom === "true");

                // define options
                var options =  {
                    viewport: {
                      width: scope.viewport.w,
                      height: scope.viewport.h,
                      type: scope.type || 'square'
                    },
                    boundary: {
                      width: scope.boundry.w,
                      height: scope.boundry.h
                    },
                    showZoom: zoom,
                    mouseWheelZoom: mouseZoom,
                    enableOrientation: true
                };

                if (scope.update != undefined){
                  options.update = scope.update
                }

                // create new croppie and settime for updates
                var c = new Croppie(elem[0], options);
                //Get Croppie elements for further calculations
                var croppieBody = angular.element(document.getElementsByTagName('ng-croppie'))[0];
                var croppieCanvas = angular.element(document.getElementsByClassName('cr-boundary'))[0];

                var intervalID;

                var croppieCanvasRectangle = croppieCanvas.getBoundingClientRect();

                //Initialize interval only if action regitered within ngCroppie container
                croppieBody.addEventListener("mousedown", function () {
                  intervalID = window.setInterval(function(){
                    c.result('canvas').then(function(img){
                      scope.$apply(function(){
                        scope.ngModel = img
                      })
                    })
                  }, 250);
                }, false);

                //Check mouseZoom property to avoid needless event listener initialization
                if (mouseZoom) {
                  //Separated "wheel" event listener to prevent conflict with Croppie default "wheel" event listener
                  croppieBody.addEventListener("wheel", function (evt) {
                    console.log("Wheel event called");
                    evt.preventDefault();
                    if ((evt.clientX > croppieCanvasRectangle.left) && (evt.clientX < croppieCanvasRectangle.right) && (evt.clientY < croppieCanvasRectangle.bottom) && (evt.clientY > croppieCanvasRectangle.top)) {
                      c.result('canvas').then(function(img){
                        scope.$apply(function(){
                          scope.ngModel = img
                        })
                      });
                    }
                  }, false);
                }

                // Destroy all created intervals
                croppieBody.addEventListener("mouseup", function () {
                  clearInterval(intervalID);
                }, false);
                croppieBody.addEventListener("mouseleave", function () {
                  clearInterval(intervalID);
                }, false);
                croppieBody.addEventListener("mouseout", function () {
                  clearInterval(intervalID);
                }, false);

                scope.$on("$destroy",
                    function( event ) {
                        clearInterval(intervalID);
                    }
                );

                // image rotation
                scope.$watch('rotation', function(newValue, oldValue) {
                    c.rotate(newValue - oldValue);
                });

                // respond to changes in src
                scope.$watch('src', function(newValue, oldValue) {
                    if(scope.src != undefined){
                          c.bind(scope.src);
                          c.result('canvas').then(function(img){
                            scope.$apply(function(){
                              scope.ngModel = img
                            })
                          })
                    }
              })


        }

    };
  }
]);
