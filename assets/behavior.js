/* Zepto v1.1.2 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function G(a){return a==null?String(a):z[A.call(a)]||"object"}function H(a){return G(a)=="function"}function I(a){return a!=null&&a==a.window}function J(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function K(a){return G(a)=="object"}function L(a){return K(a)&&!I(a)&&Object.getPrototypeOf(a)==Object.prototype}function M(a){return a instanceof Array}function N(a){return typeof a.length=="number"}function O(a){return g.call(a,function(a){return a!=null})}function P(a){return a.length>0?c.fn.concat.apply([],a):a}function Q(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function R(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function S(a,b){return typeof b=="number"&&!k[Q(a)]?b+"px":b}function T(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function U(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function V(c,d,e){for(b in d)e&&(L(d[b])||M(d[b]))?(L(d[b])&&!L(c[b])&&(c[b]={}),M(d[b])&&!M(c[b])&&(c[b]=[]),V(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function W(a,b){return b==null?c(a):c(a).filter(b)}function X(a,b,c,d){return H(b)?b.call(a,c,d):b}function Y(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function Z(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function $(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:!/^0/.test(a)&&!isNaN(b=Number(a))?b:/^[\[\{]/.test(a)?c.parseJSON(a):a):a}catch(d){return a}}function _(a,b){b(a);for(var c in a.childNodes)_(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,m=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],r=["after","prepend","before","append"],s=h.createElement("table"),t=h.createElement("tr"),u={tr:h.createElement("tbody"),tbody:s,thead:s,tfoot:s,td:t,th:t,"*":h.createElement("div")},v=/complete|loaded|interactive/,w=/^\.([\w-]+)$/,x=/^#([\w-]*)$/,y=/^[\w-]*$/,z={},A=z.toString,B={},C,D,E=h.createElement("div"),F={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};return B.matches=function(a,b){if(!b||!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=E).appendChild(a),d=~B.qsa(e,b).indexOf(a),f&&E.removeChild(a),d},C=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},D=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},B.fragment=function(b,d,e){var g,i,j;return m.test(b)&&(g=c(h.createElement(RegExp.$1))),g||(b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=l.test(b)&&RegExp.$1),d in u||(d="*"),j=u[d],j.innerHTML=""+b,g=c.each(f.call(j.childNodes),function(){j.removeChild(this)})),L(e)&&(i=c(g),c.each(e,function(a,b){q.indexOf(a)>-1?i[a](b):i.attr(a,b)})),g},B.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},B.isZ=function(a){return a instanceof B.Z},B.init=function(b,d){var e;if(!b)return B.Z();if(typeof b=="string"){b=b.trim();if(b[0]=="<"&&l.test(b))e=B.fragment(b,RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=B.qsa(h,b)}}else{if(H(b))return c(h).ready(b);if(B.isZ(b))return b;if(M(b))e=O(b);else if(K(b))e=[b],b=null;else if(l.test(b))e=B.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=B.qsa(h,b)}}return B.Z(e,b)},c=function(a,b){return B.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){V(a,c,b)}),a},B.qsa=function(a,b){var c,d=b[0]=="#",e=!d&&b[0]==".",g=d||e?b.slice(1):b,h=y.test(g);return J(a)&&h&&d?(c=a.getElementById(g))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(h&&!d?e?a.getElementsByClassName(g):a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=G,c.isFunction=H,c.isWindow=I,c.isArray=M,c.isPlainObject=L,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=C,c.trim=function(a){return a==null?"":String.prototype.trim.call(a)},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(N(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return P(d)},c.each=function(a,b){var c,d;if(N(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){z["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return v.test(h.readyState)&&h.body?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return H(a)?this.not(this.not(a)):c(g.call(this,function(b){return B.matches(b,a)}))},add:function(a,b){return c(D(this.concat(c(a,b))))},is:function(a){return this.length>0&&B.matches(this[0],a)},not:function(b){var d=[];if(H(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):N(b)&&H(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return K(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!K(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!K(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(B.qsa(this[0],a)):b=this.map(function(){return B.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:B.matches(d,a)))d=d!==b&&!J(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!J(a)&&b.indexOf(a)<0)return b.push(a),a});return W(b,a)},parent:function(a){return W(D(this.pluck("parentNode")),a)},children:function(a){return W(this.map(function(){return U(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return W(this.map(function(a,b){return g.call(U(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display")=="none"&&(this.style.display=T(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=H(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=H(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return arguments.length===0?this.length>0?this[0].innerHTML:null:this.each(function(b){var d=this.innerHTML;c(this).empty().append(X(this,a,b,d))})},text:function(b){return arguments.length===0?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b===a?"":""+b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(K(c))for(b in c)Y(this,b,c[b]);else Y(this,c,X(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&Y(this,a)})},prop:function(b,c){return b=F[b]||b,c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=X(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+b.replace(p,"-$1").toLowerCase(),c);return d!==null?$(d):a},val:function(a){return arguments.length===0?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(b){this.value=X(this,a,b,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=X(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,d){if(arguments.length<2){var e=this[0],f=getComputedStyle(e,"");if(!e)return;if(typeof a=="string")return e.style[C(a)]||f.getPropertyValue(a);if(M(a)){var g={};return c.each(M(a)?a:[a],function(a,b){g[b]=e.style[C(b)]||f.getPropertyValue(b)}),g}}var h="";if(G(a)=="string")!d&&d!==0?this.each(function(){this.style.removeProperty(Q(a))}):h=Q(a)+":"+S(a,d);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(Q(b))}):h+=Q(b)+":"+S(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+h})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?e.some.call(this,function(a){return this.test(Z(a))},R(a)):!1},addClass:function(a){return a?this.each(function(b){d=[];var e=Z(this),f=X(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&Z(this,e+(e?" ":"")+d.join(" "))}):this},removeClass:function(b){return this.each(function(c){if(b===a)return Z(this,"");d=Z(this),X(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(R(a)," ")}),Z(this,d.trim())})},toggleClass:function(b,d){return b?this.each(function(e){var f=c(this),g=X(this,b,e,Z(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})}):this},scrollTop:function(b){if(!this.length)return;var c="scrollTop"in this[0];return b===a?c?this[0].scrollTop:this[0].pageYOffset:this.each(c?function(){this.scrollTop=b}:function(){this.scrollTo(this.scrollX,b)})},scrollLeft:function(b){if(!this.length)return;var c="scrollLeft"in this[0];return b===a?c?this[0].scrollLeft:this[0].pageXOffset:this.each(c?function(){this.scrollLeft=b}:function(){this.scrollTo(b,this.scrollY)})},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){var d=b.replace(/./,function(a){return a[0].toUpperCase()});c.fn[b]=function(e){var f,g=this[0];return e===a?I(g)?g["inner"+d]:J(g)?g.documentElement["scroll"+d]:(f=this.offset())&&f[b]:this.each(function(a){g=c(this),g.css(b,X(this,e,a,g[b]()))})}}),r.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=G(b),a=="object"||a=="array"||b==null?b:B.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();_(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),B.Z.prototype=c.fn,B.uniq=D,B.deserializeValue=$,c.zepto=B,c}();window.Zepto=Zepto,window.$===undefined&&(window.$=Zepto),function(a){function m(a){return a._zid||(a._zid=c++)}function n(a,b,c,d){b=o(b);if(b.ns)var e=p(b.ns);return(h[m(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||e.test(a.ns))&&(!c||m(a.fn)===m(c))&&(!d||a.sel==d)})}function o(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function p(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function q(a,b){return a.del&&!j&&a.e in k||!!b}function r(a){return l[a]||j&&k[a]||a}function s(b,c,e,f,g,i,j){var k=m(b),n=h[k]||(h[k]=[]);c.split(/\s/).forEach(function(c){if(c=="ready")return a(document).ready(e);var h=o(c);h.fn=e,h.sel=g,h.e in l&&(e=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return h.fn.apply(this,arguments)}),h.del=i;var k=i||e;h.proxy=function(a){a=y(a);if(a.isImmediatePropagationStopped())return;a.data=f;var c=k.apply(b,a._args==d?[a]:[a].concat(a._args));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},h.i=n.length,n.push(h),"addEventListener"in b&&b.addEventListener(r(h.e),h.proxy,q(h,j))})}function t(a,b,c,d,e){var f=m(a);(b||"").split(/\s/).forEach(function(b){n(a,b,c,d).forEach(function(b){delete h[f][b.i],"removeEventListener"in a&&a.removeEventListener(r(b.e),b.proxy,q(b,e))})})}function y(b,c){if(c||!b.isDefaultPrevented){c||(c=b),a.each(x,function(a,d){var e=c[a];b[a]=function(){return this[d]=u,e&&e.apply(c,arguments)},b[d]=v});if(c.defaultPrevented!==d?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())b.isDefaultPrevented=u}return b}function z(a){var b,c={originalEvent:a};for(b in a)!w.test(b)&&a[b]!==d&&(c[b]=a[b]);return y(c,a)}var b=a.zepto.qsa,c=1,d,e=Array.prototype.slice,f=a.isFunction,g=function(a){return typeof a=="string"},h={},i={},j="onfocusin"in window,k={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};i.click=i.mousedown=i.mouseup=i.mousemove="MouseEvents",a.event={add:s,remove:t},a.proxy=function(b,c){if(f(b)){var d=function(){return b.apply(c,arguments)};return d._zid=m(b),d}if(g(c))return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b,c){return this.on(a,b,c)},a.fn.unbind=function(a,b){return this.off(a,b)},a.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var u=function(){return!0},v=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(a,b,c){return this.on(b,a,c)},a.fn.undelegate=function(a,b,c){return this.off(b,a,c)},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,h,i,j){var k,l,m=this;if(b&&!g(b))return a.each(b,function(a,b){m.on(a,c,h,b,j)}),m;!g(c)&&!f(i)&&i!==!1&&(i=h,h=c,c=d);if(f(h)||h===!1)i=h,h=d;return i===!1&&(i=v),m.each(function(d,f){j&&(k=function(a){return t(f,a.type,i),i.apply(this,arguments)}),c&&(l=function(b){var d,g=a(b.target).closest(c,f).get(0);if(g&&g!==f)return d=a.extend(z(b),{currentTarget:g,liveFired:f}),(k||i).apply(g,[d].concat(e.call(arguments,1)))}),s(f,b,i,h,c,l||k)})},a.fn.off=function(b,c,e){var h=this;return b&&!g(b)?(a.each(b,function(a,b){h.off(a,c,b)}),h):(!g(c)&&!f(e)&&e!==!1&&(e=c,c=d),e===!1&&(e=v),h.each(function(){t(this,b,e,c)}))},a.fn.trigger=function(b,c){return b=g(b)||a.isPlainObject(b)?a.Event(b):y(b),b._args=c,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(b):a(this).triggerHandler(b,c)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=z(g(b)?a.Event(b):b),d._args=c,d.target=h,a.each(n(h,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){g(a)||(b=a,a=b.type);var c=document.createEvent(i[a]||"Events"),d=!0;if(b)for(var e in b)e=="bubbles"?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),y(c)}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.isDefaultPrevented()}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c,d){var e=c.context,f="success";c.success.call(e,a,f,b),d&&d.resolveWith(e,[a,f,b]),triggerGlobal(c,e,"ajaxSuccess",[b,c,a]),ajaxComplete(f,b,c)}function ajaxError(a,b,c,d,e){var f=d.context;d.error.call(f,c,b,a),e&&e.rejectWith(f,[c,b,a]),triggerGlobal(d,f,"ajaxError",[c,d,a||b]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return b==""?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data),a.data=undefined)}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b),g=$.isPlainObject(b);$.each(b,function(b,h){e=$.type(h),d&&(b=c?d:d+"["+(g||e=="object"||e=="array"?b:"")+"]"),!d&&f?a.add(h.name,h.value):e=="array"||!c&&e=="object"?serialize(a,h,c,b):a.add(b,h)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a,b){if("type"in a){var c=a.jsonpCallback,d=($.isFunction(c)?c():c)||"jsonp"+ ++jsonpID,e=document.createElement("script"),f=window[d],g,h=function(a){$(e).triggerHandler("error",a||"abort")},i={abort:h},j;return b&&b.promise(i),$(e).on("load error",function(c,h){clearTimeout(j),$(e).off().remove(),c.type=="error"||!g?ajaxError(null,h||"error",i,a,b):ajaxSuccess(g[0],i,a,b),window[d]=f,g&&$.isFunction(f)&&f(g[0]),f=g=undefined}),ajaxBeforeSend(i,a)===!1?(h("abort"),i):(window[d]=function(){g=arguments},e.src=a.url.replace(/=\?/,"="+d),document.head.appendChild(e),a.timeout>0&&(j=setTimeout(function(){h("timeout")},a.timeout)),i)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred();for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,settings.jsonp?settings.jsonp+"=?":settings.jsonp===!1?"":"callback=?")),$.ajaxJSONP(settings,deferred);var mime=settings.accepts[dataType],headers={},setHeader=function(a,b){headers[a.toLowerCase()]=[a,b]},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),nativeSetHeader=xhr.setRequestHeader,abortTimeout;deferred&&deferred.promise(xhr),settings.crossDomain||setHeader("X-Requested-With","XMLHttpRequest"),setHeader("Accept",mime||"*/*");if(mime=settings.mimeType||mime)mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime);(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")&&setHeader("Content-Type",settings.contentType||"application/x-www-form-urlencoded");if(settings.headers)for(name in settings.headers)setHeader(name,settings.headers[name]);xhr.setRequestHeader=setHeader,xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings,deferred):ajaxSuccess(result,xhr,settings,deferred)}else ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred)}};if(ajaxBeforeSend(xhr,settings)===!1)return xhr.abort(),ajaxError(null,"abort",xhr,settings,deferred),xhr;if(settings.xhrFields)for(name in settings.xhrFields)xhr[name]=settings.xhrFields[name];var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async,settings.username,settings.password);for(name in headers)nativeSetHeader.apply(xhr,headers[name]);return settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings,deferred)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a([].slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(a){"__proto__"in{}||a.extend(a.zepto,{Z:function(b,c){return b=b||[],a.extend(b,a.fn),b.selector=c||"",b.__Z=!0,b},isZ:function(b){return a.type(b)==="array"&&"__Z"in b}});try{getComputedStyle(undefined)}catch(b){var c=getComputedStyle;window.getComputedStyle=function(a){try{return c(a)}catch(b){return null}}}}(Zepto);/*
## Table of Contents

Schema:
```javascript
var File, Folder, Headline, index;
Headline = {
  type: "heading",
  depth: Number,
  data: {
    level: Number,
    title: String,
    slug: String,
    isFileHeader: Boolean
  },
  children: [Headline]
};
File = {
  type: "file",
  depth: Number,
  data: {
    title: String,
    pageTitle: String,
    sourcePath: String,
    projectPath: String,
    targetPath: String,
    language: {
      nameMatchers: [String],
      commentsOnly: Boolean,
      name: String
    },
    firstHeader: Headline
  },
  outline: [Headline],
  children: [(File||Folder)]
};
Folder = {
  type: "folder",
  data: {
    path: String,
    title: String
  },
  depth: Number,
  children: [(File||Folder)]
};
index = [(File||Folder)];
```
*/


(function() {
  var $, buildFileTree, buildHeadlinesTree, buildNav, createMenuToggle, createNav, globalFileTree, searchTree;

  globalFileTree = [
    {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".md"],
          "commentsOnly": true,
          "name": "Markdown"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/README.md",
        "projectPath": "README.md",
        "targetPath": "index",
        "pageTitle": "index",
        "firstHeader": {
          "type": "heading",
          "data": {
            "level": 1,
            "title": "groc",
            "slug": "groc",
            "isFileHeader": true
          },
          "depth": 1,
          "children": [
            {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "What does it give you?",
                "slug": "what-does-it-give-you"
              },
              "depth": 2
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "How?",
                "slug": "how"
              },
              "depth": 2,
              "children": [
                {
                  "type": "heading",
                  "data": {
                    "level": 3,
                    "title": "Installing groc",
                    "slug": "installing-groc"
                  },
                  "depth": 3
                }, {
                  "type": "heading",
                  "data": {
                    "level": 3,
                    "title": "Using groc (CLI)",
                    "slug": "using-groc-cli"
                  },
                  "depth": 3
                }, {
                  "type": "heading",
                  "data": {
                    "level": 3,
                    "title": "Configuring groc (.groc.json)",
                    "slug": "configuring-groc-grocjson"
                  },
                  "depth": 3
                }
              ]
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "Literate programming?",
                "slug": "literate-programming"
              },
              "depth": 2
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "Known Issues",
                "slug": "known-issues"
              },
              "depth": 2
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "What&#39;s in the works?",
                "slug": "what39s-in-the-works"
              },
              "depth": 2
            }
          ]
        },
        "title": "groc"
      },
      "depth": 1,
      "outline": [
        {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "What does it give you?",
            "slug": "what-does-it-give-you"
          },
          "depth": 2
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "How?",
            "slug": "how"
          },
          "depth": 2,
          "children": [
            {
              "type": "heading",
              "data": {
                "level": 3,
                "title": "Installing groc",
                "slug": "installing-groc"
              },
              "depth": 3
            }, {
              "type": "heading",
              "data": {
                "level": 3,
                "title": "Using groc (CLI)",
                "slug": "using-groc-cli"
              },
              "depth": 3
            }, {
              "type": "heading",
              "data": {
                "level": 3,
                "title": "Configuring groc (.groc.json)",
                "slug": "configuring-groc-grocjson"
              },
              "depth": 3
            }
          ]
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "Literate programming?",
            "slug": "literate-programming"
          },
          "depth": 2
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "Known Issues",
            "slug": "known-issues"
          },
          "depth": 2
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "What&#39;s in the works?",
            "slug": "what39s-in-the-works"
          },
          "depth": 2
        }
      ]
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".json"],
          "pygmentsLexer": "json",
          "codeOnly": true,
          "name": "JSON"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/.groc.json",
        "projectPath": ".groc.json",
        "targetPath": ".groc",
        "pageTitle": ".groc",
        "title": ".groc"
      },
      "depth": 1,
      "outline": []
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".coffee", "Cakefile"],
          "pygmentsLexer": "coffee-script",
          "highlightJS": "coffeescript",
          "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
          "strictMultiLineEnd": false,
          "singleLineComment": ["#"],
          "ignorePrefix": "}",
          "foldPrefix": "^",
          "name": "CoffeeScript"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/cli.coffee",
        "projectPath": "lib/cli.coffee",
        "targetPath": "cli",
        "pageTitle": "cli",
        "firstHeader": {
          "type": "heading",
          "data": {
            "level": 1,
            "title": "Command Line Interface",
            "slug": "command-line-interface",
            "isFileHeader": true
          },
          "depth": 1,
          "children": [
            {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "CLI Overview",
                "slug": "cli-overview"
              },
              "depth": 2
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "CLI Options",
                "slug": "cli-options"
              },
              "depth": 2
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "Argument processing",
                "slug": "argument-processing"
              },
              "depth": 2
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "Project Generation",
                "slug": "project-generation"
              },
              "depth": 2
            }, {
              "type": "heading",
              "data": {
                "level": 2,
                "title": "GitHub",
                "slug": "github"
              },
              "depth": 2
            }
          ]
        },
        "title": "Command Line Interface"
      },
      "depth": 1,
      "outline": [
        {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "CLI Overview",
            "slug": "cli-overview"
          },
          "depth": 2
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "CLI Options",
            "slug": "cli-options"
          },
          "depth": 2
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "Argument processing",
            "slug": "argument-processing"
          },
          "depth": 2
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "Project Generation",
            "slug": "project-generation"
          },
          "depth": 2
        }, {
          "type": "heading",
          "data": {
            "level": 2,
            "title": "GitHub",
            "slug": "github"
          },
          "depth": 2
        }
      ]
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".coffee", "Cakefile"],
          "pygmentsLexer": "coffee-script",
          "highlightJS": "coffeescript",
          "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
          "strictMultiLineEnd": false,
          "singleLineComment": ["#"],
          "ignorePrefix": "}",
          "foldPrefix": "^",
          "name": "CoffeeScript"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/doc_tags.coffee",
        "projectPath": "lib/doc_tags.coffee",
        "targetPath": "doc_tags",
        "pageTitle": "doc_tags",
        "firstHeader": {
          "type": "heading",
          "data": {
            "level": 1,
            "title": "Known Doc Tags",
            "slug": "known-doc-tags",
            "isFileHeader": true
          },
          "depth": 1
        },
        "title": "Known Doc Tags"
      },
      "depth": 1,
      "outline": []
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".coffee", "Cakefile"],
          "pygmentsLexer": "coffee-script",
          "highlightJS": "coffeescript",
          "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
          "strictMultiLineEnd": false,
          "singleLineComment": ["#"],
          "ignorePrefix": "}",
          "foldPrefix": "^",
          "name": "CoffeeScript"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/languages.coffee",
        "projectPath": "lib/languages.coffee",
        "targetPath": "languages",
        "pageTitle": "languages",
        "firstHeader": {
          "type": "heading",
          "data": {
            "level": 1,
            "title": "Supported Languages",
            "slug": "supported-languages",
            "isFileHeader": true
          },
          "depth": 1
        },
        "title": "Supported Languages"
      },
      "depth": 1,
      "outline": []
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".json"],
          "pygmentsLexer": "json",
          "codeOnly": true,
          "name": "JSON"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/package.json",
        "projectPath": "package.json",
        "targetPath": "package",
        "pageTitle": "package",
        "title": "package"
      },
      "depth": 1,
      "outline": []
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".coffee", "Cakefile"],
          "pygmentsLexer": "coffee-script",
          "highlightJS": "coffeescript",
          "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
          "strictMultiLineEnd": false,
          "singleLineComment": ["#"],
          "ignorePrefix": "}",
          "foldPrefix": "^",
          "name": "CoffeeScript"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/project.coffee",
        "projectPath": "lib/project.coffee",
        "targetPath": "project",
        "pageTitle": "project",
        "firstHeader": {
          "type": "heading",
          "data": {
            "level": 1,
            "title": "groc API",
            "slug": "groc-api",
            "isFileHeader": true
          },
          "depth": 1
        },
        "title": "groc API"
      },
      "depth": 1,
      "outline": []
    }, {
      "type": "folder",
      "data": {
        "path": "scripts",
        "title": "scripts"
      },
      "depth": 1,
      "children": [
        {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".sh"],
              "pygmentsLexer": "sh",
              "highlightJS": "bash",
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "Shell"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/scripts/publish-git-pages.sh",
            "projectPath": "scripts/publish-git-pages.sh",
            "targetPath": "scripts/publish-git-pages",
            "pageTitle": "scripts/publish-git-pages",
            "title": "publish-git-pages"
          },
          "depth": 2,
          "outline": []
        }
      ]
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".coffee", "Cakefile"],
          "pygmentsLexer": "coffee-script",
          "highlightJS": "coffeescript",
          "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
          "strictMultiLineEnd": false,
          "singleLineComment": ["#"],
          "ignorePrefix": "}",
          "foldPrefix": "^",
          "name": "CoffeeScript"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles.coffee",
        "projectPath": "lib/styles.coffee",
        "targetPath": "styles",
        "pageTitle": "styles",
        "title": "styles"
      },
      "depth": 1,
      "outline": [],
      "children": [
        {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/base.coffee",
            "projectPath": "lib/styles/base.coffee",
            "targetPath": "styles/base",
            "pageTitle": "styles/base",
            "title": "base"
          },
          "depth": 2,
          "outline": []
        }, {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/default.coffee",
            "projectPath": "lib/styles/default.coffee",
            "targetPath": "styles/default",
            "pageTitle": "styles/default",
            "title": "default"
          },
          "depth": 2,
          "outline": [],
          "children": [
            {
              "type": "file",
              "data": {
                "language": {
                  "nameMatchers": [".coffee", "Cakefile"],
                  "pygmentsLexer": "coffee-script",
                  "highlightJS": "coffeescript",
                  "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
                  "strictMultiLineEnd": false,
                  "singleLineComment": ["#"],
                  "ignorePrefix": "}",
                  "foldPrefix": "^",
                  "name": "CoffeeScript"
                },
                "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/default/behavior.coffee",
                "projectPath": "lib/styles/default/behavior.coffee",
                "targetPath": "styles/default/behavior",
                "pageTitle": "styles/default/behavior",
                "title": "behavior"
              },
              "depth": 3,
              "outline": [
                {
                  "type": "heading",
                  "data": {
                    "level": 1,
                    "title": "Page Behavior",
                    "slug": "page-behavior"
                  },
                  "depth": 1,
                  "children": [
                    {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Table of Contents",
                        "slug": "table-of-contents"
                      },
                      "depth": 2,
                      "children": [
                        {
                          "type": "heading",
                          "data": {
                            "level": 3,
                            "title": "Node Navigation",
                            "slug": "node-navigation"
                          },
                          "depth": 3
                        }
                      ]
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Node Search",
                        "slug": "node-search"
                      },
                      "depth": 2
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "DOM Construction",
                        "slug": "dom-construction"
                      },
                      "depth": 2
                    }
                  ]
                }
              ]
            }, {
              "type": "file",
              "data": {
                "language": {
                  "nameMatchers": [".jade"],
                  "pygmentsLexer": "jade",
                  "highlightJS": "AUTO",
                  "singleLineComment": ["//", "//-"],
                  "ignorePrefix": "}",
                  "foldPrefix": "^",
                  "name": "Jade"
                },
                "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/default/docPage.jade",
                "projectPath": "lib/styles/default/docPage.jade",
                "targetPath": "styles/default/docPage",
                "pageTitle": "styles/default/docPage",
                "title": "docPage"
              },
              "depth": 3,
              "outline": []
            }, {
              "type": "file",
              "data": {
                "language": {
                  "nameMatchers": [".sass"],
                  "pygmentsLexer": "sass",
                  "highlightJS": "AUTO",
                  "singleLineComment": ["//"],
                  "ignorePrefix": "}",
                  "foldPrefix": "^",
                  "name": "Sass"
                },
                "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/default/style.sass",
                "projectPath": "lib/styles/default/style.sass",
                "targetPath": "styles/default/style",
                "pageTitle": "styles/default/style",
                "title": "style"
              },
              "depth": 3,
              "outline": [
                {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Configuration",
                    "slug": "configuration"
                  },
                  "depth": 2,
                  "children": [
                    {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "Sizing",
                        "slug": "sizing"
                      },
                      "depth": 3
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "Color Scheme",
                        "slug": "color-scheme"
                      },
                      "depth": 3
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "Typography",
                        "slug": "typography"
                      },
                      "depth": 3
                    }
                  ]
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Two-Column Layout",
                    "slug": "two-column-layout"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Two-Column Scaling",
                    "slug": "two-column-scaling"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Single-Column Layout",
                    "slug": "single-column-layout"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Navigation",
                    "slug": "navigation"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Behavior",
                    "slug": "behavior"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Typography",
                    "slug": "typography"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Visual Design",
                    "slug": "visual-design"
                  },
                  "depth": 2,
                  "children": [
                    {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "Commentary Elements",
                        "slug": "commentary-elements"
                      },
                      "depth": 3
                    }
                  ]
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Browser-Specific Tweaks",
                    "slug": "browser-specific-tweaks"
                  },
                  "depth": 2,
                  "children": [
                    {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "Doc Tags",
                        "slug": "doc-tags"
                      },
                      "depth": 3
                    }
                  ]
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Code folding",
                    "slug": "code-folding"
                  },
                  "depth": 2
                }
              ]
            }
          ]
        }, {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/solarized.coffee",
            "projectPath": "lib/styles/solarized.coffee",
            "targetPath": "styles/solarized",
            "pageTitle": "styles/solarized",
            "firstHeader": {
              "type": "heading",
              "data": {
                "level": 1,
                "title": "Solarized",
                "slug": "solarized",
                "isFileHeader": true
              },
              "depth": 1
            },
            "title": "Solarized"
          },
          "depth": 2,
          "outline": [],
          "children": [
            {
              "type": "file",
              "data": {
                "language": {
                  "nameMatchers": [".coffee", "Cakefile"],
                  "pygmentsLexer": "coffee-script",
                  "highlightJS": "coffeescript",
                  "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
                  "strictMultiLineEnd": false,
                  "singleLineComment": ["#"],
                  "ignorePrefix": "}",
                  "foldPrefix": "^",
                  "name": "CoffeeScript"
                },
                "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/solarized/behavior.coffee",
                "projectPath": "lib/styles/solarized/behavior.coffee",
                "targetPath": "styles/solarized/behavior",
                "pageTitle": "styles/solarized/behavior",
                "firstHeader": {
                  "type": "heading",
                  "data": {
                    "level": 1,
                    "title": "Side Menu",
                    "slug": "side-menu",
                    "isFileHeader": true
                  },
                  "depth": 1,
                  "children": [
                    {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Table of Contents",
                        "slug": "table-of-contents"
                      },
                      "depth": 2
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Build File Tree Recursively",
                        "slug": "build-file-tree-recursively"
                      },
                      "depth": 2
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Build Headlines Tree Recursively",
                        "slug": "build-headlines-tree-recursively"
                      },
                      "depth": 2
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Create Navigation Element",
                        "slug": "create-navigation-element"
                      },
                      "depth": 2
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Add Button to Toggle Side Menu Visibility",
                        "slug": "add-button-to-toggle-side-menu-visibility"
                      },
                      "depth": 2
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Search Tree",
                        "slug": "search-tree"
                      },
                      "depth": 2
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 2,
                        "title": "Build Navigation",
                        "slug": "build-navigation"
                      },
                      "depth": 2
                    }
                  ]
                },
                "title": "Side Menu"
              },
              "depth": 3,
              "outline": [
                {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Table of Contents",
                    "slug": "table-of-contents"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Build File Tree Recursively",
                    "slug": "build-file-tree-recursively"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Build Headlines Tree Recursively",
                    "slug": "build-headlines-tree-recursively"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Create Navigation Element",
                    "slug": "create-navigation-element"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Add Button to Toggle Side Menu Visibility",
                    "slug": "add-button-to-toggle-side-menu-visibility"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Search Tree",
                    "slug": "search-tree"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Build Navigation",
                    "slug": "build-navigation"
                  },
                  "depth": 2
                }
              ]
            }, {
              "type": "file",
              "data": {
                "language": {
                  "nameMatchers": [".jade"],
                  "pygmentsLexer": "jade",
                  "highlightJS": "AUTO",
                  "singleLineComment": ["//", "//-"],
                  "ignorePrefix": "}",
                  "foldPrefix": "^",
                  "name": "Jade"
                },
                "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/solarized/docPage.jade",
                "projectPath": "lib/styles/solarized/docPage.jade",
                "targetPath": "styles/solarized/docPage",
                "pageTitle": "styles/solarized/docPage",
                "title": "docPage"
              },
              "depth": 3,
              "outline": []
            }, {
              "type": "file",
              "data": {
                "language": {
                  "nameMatchers": [".scss"],
                  "pygmentsLexer": "scss",
                  "multiLineComment": ["/*", "*", "*/"],
                  "singleLineComment": ["//"],
                  "ignorePrefix": "}",
                  "foldPrefix": "^",
                  "name": "SCSS"
                },
                "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/styles/solarized/style.scss",
                "projectPath": "lib/styles/solarized/style.scss",
                "targetPath": "styles/solarized/style",
                "pageTitle": "styles/solarized/style",
                "title": "style"
              },
              "depth": 3,
              "outline": [
                {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Fonts",
                    "slug": "fonts"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Vars",
                    "slug": "vars"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Layout",
                    "slug": "layout"
                  },
                  "depth": 2,
                  "children": [
                    {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "flex",
                        "slug": "flex"
                      },
                      "depth": 3
                    }
                  ]
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Responsive",
                    "slug": "responsive"
                  },
                  "depth": 2,
                  "children": [
                    {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "One Column",
                        "slug": "one-column"
                      },
                      "depth": 3
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "Two Columns",
                        "slug": "two-columns"
                      },
                      "depth": 3
                    }, {
                      "type": "heading",
                      "data": {
                        "level": 3,
                        "title": "Three Columns",
                        "slug": "three-columns"
                      },
                      "depth": 3
                    }
                  ]
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "Color",
                    "slug": "color"
                  },
                  "depth": 2
                }
              ]
            }
          ]
        }
      ]
    }, {
      "type": "file",
      "data": {
        "language": {
          "nameMatchers": [".coffee", "Cakefile"],
          "pygmentsLexer": "coffee-script",
          "highlightJS": "coffeescript",
          "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
          "strictMultiLineEnd": false,
          "singleLineComment": ["#"],
          "ignorePrefix": "}",
          "foldPrefix": "^",
          "name": "CoffeeScript"
        },
        "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/utils.coffee",
        "projectPath": "lib/utils.coffee",
        "targetPath": "utils",
        "pageTitle": "utils",
        "title": "utils"
      },
      "depth": 1,
      "outline": [],
      "children": [
        {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/utils/cli_helpers.coffee",
            "projectPath": "lib/utils/cli_helpers.coffee",
            "targetPath": "utils/cli_helpers",
            "pageTitle": "utils/cli_helpers",
            "title": "cli_helpers"
          },
          "depth": 2,
          "outline": [
            {
              "type": "heading",
              "data": {
                "level": 1,
                "title": "Command Line Helpers",
                "slug": "command-line-helpers"
              },
              "depth": 1,
              "children": [
                {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "configureOptimist",
                    "slug": "configureoptimist"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "extractArgv",
                    "slug": "extractargv"
                  },
                  "depth": 2
                }, {
                  "type": "heading",
                  "data": {
                    "level": 2,
                    "title": "guessPrimaryGitHubURL",
                    "slug": "guessprimarygithuburl"
                  },
                  "depth": 2
                }
              ]
            }
          ]
        }, {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/utils/compatibility_helpers.coffee",
            "projectPath": "lib/utils/compatibility_helpers.coffee",
            "targetPath": "utils/compatibility_helpers",
            "pageTitle": "utils/compatibility_helpers",
            "title": "compatibility_helpers"
          },
          "depth": 2,
          "outline": []
        }, {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/utils/humanize.coffee",
            "projectPath": "lib/utils/humanize.coffee",
            "targetPath": "utils/humanize",
            "pageTitle": "utils/humanize",
            "title": "humanize"
          },
          "depth": 2,
          "outline": []
        }, {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/utils/logger.coffee",
            "projectPath": "lib/utils/logger.coffee",
            "targetPath": "utils/logger",
            "pageTitle": "utils/logger",
            "firstHeader": {
              "type": "heading",
              "data": {
                "level": 1,
                "title": "groc.Logger",
                "slug": "groclogger",
                "isFileHeader": true
              },
              "depth": 1
            },
            "title": "groc.Logger"
          },
          "depth": 2,
          "outline": []
        }, {
          "type": "file",
          "data": {
            "language": {
              "nameMatchers": [".coffee", "Cakefile"],
              "pygmentsLexer": "coffee-script",
              "highlightJS": "coffeescript",
              "multiLineComment": ["###*", " *", " ###", "###", "#", "###"],
              "strictMultiLineEnd": false,
              "singleLineComment": ["#"],
              "ignorePrefix": "}",
              "foldPrefix": "^",
              "name": "CoffeeScript"
            },
            "sourcePath": "/Users/pascal/Projekte/tools/groc/lib/utils/style_helpers.coffee",
            "projectPath": "lib/utils/style_helpers.coffee",
            "targetPath": "utils/style_helpers",
            "pageTitle": "utils/style_helpers",
            "title": "style_helpers"
          },
          "depth": 2,
          "outline": [
            {
              "type": "heading",
              "data": {
                "level": 1,
                "title": "Style Helpers",
                "slug": "style-helpers"
              },
              "depth": 1
            }
          ]
        }
      ]
    }
  ];

  $ = Zepto || jQuery;

  /*
  ## Build File Tree Recursively
  @param {Array} tree List of file or folder Objects
  @param {jQuery} ul DOM node of list to append this tree to
  @param {Object} metaInfo Project information
  @return {jQuery} The ul element
  */


  buildFileTree = function(tree, ul, metaInfo) {
    ul = $(ul);
    if (!(tree != null ? tree.length : void 0)) {
      console.warn('no tree', tree);
      return ul;
    }
    $.each(tree, function(index, node) {
      var $children, $node, currentFile, _ref;
      $node = $("<li class=\"" + node.type + "\"/>");
      if (node.type === 'file') {
        currentFile = metaInfo.documentPath === node.data.targetPath;
        if (currentFile) {
          if (metaInfo.currentFileNode) {
            console.warn('duplicate currentFile');
          }
          metaInfo.currentFileNode = node;
        }
        $node.append("<a class=\"label" + (currentFile ? ' selected' : '') + "\" href=\"" + metaInfo.relativeRoot + node.data.targetPath + ".html\" title=\"" + node.data.projectPath + "\"><span class=\"text\">" + node.data.title + "</span></a>");
      } else {
        $node.append("<a class=\"label\" data-path=\"" + node.data.path + "\" href=\"#\"><span class=\"text\">" + node.data.title + "</span></a>");
      }
      if (((_ref = node.children) != null ? _ref.length : void 0) > 0) {
        $children = $('<ol class="children"/>');
        $node.append(buildFileTree(node.children, $children, metaInfo));
      }
      ul.append($node);
    });
    return ul;
  };

  /*
  ## Build Headlines Tree Recursively
  @param {Object} tree Tree of headlines
  @param {jQuery} ul DOM node of list to append this tree to
  @param {Object} metaInfo Project information
  @return {jQuery} The ul element
  */


  buildHeadlinesTree = function(tree, ul, metaInfo) {
    ul = $(ul);
    if (!(tree != null ? tree.length : void 0)) {
      console.warn('no tree', tree);
      return ul;
    }
    $.each(tree, function(index, node) {
      var $children, $node, _ref;
      $node = $("<li class=\"" + node.type + "\"/>");
      $node.append("<a class=\"label\" href=\"#" + node.data.slug + "\"><span class=\"text\">" + node.data.title + "</span></a>");
      if (((_ref = node.children) != null ? _ref.length : void 0) > 0) {
        $children = $('<ol class="children"/>');
        $node.append(buildHeadlinesTree(node.children, $children, metaInfo));
      }
      ul.append($node);
    });
    return ul;
  };

  /*
  ## Create Navigation Element
  @param {Object} metaInfo Project information
  @return {jQuery} Navigation element
  */


  createNav = function(metaInfo) {
    var $nav;
    $nav = $("<aside id=\"side-menu\">\n  <nav id=\"headlines\">\n    <details>\n      <summary>This File</summary>\n      <ul class=\"tools\">\n        <li class=\"search\">\n          <input id=\"search-headlines\" type=\"search\" autocomplete=\"off\" placeholder=\"Search\"/>\n        </li>\n      </ul>\n      <ol class=\"tree\" id=\"headline-tree\"></ol>\n    </details>\n  </nav>\n  <nav id=\"files\">\n    <details open>\n      <summary>Files</summary>\n      <ul class=\"tools\">\n        <li class=\"search\">\n          <input id=\"search-files\" type=\"search\" autocomplete=\"off\" placeholder=\"Search\"/>\n        </li>\n      </ul>\n      <ol class=\"tree\" id=\"file-tree\"></ol>\n    </details>\n  </nav>\n</aside>");
    return $nav;
  };

  /*
  ## Add Button to Toggle Side Menu Visibility
  @param {jQuery} $container The element the button should be prepended to
  @param {jQuery} $nav The navigation element; class 'open' will be toggled
  @return {jQuery} $container element
  */


  createMenuToggle = function($container, $nav) {
    var $button;
    $button = $("<button type=\"button\" class=\"toggle-menu\">\n  Menu\n</button>");
    $button.on('click', function(event) {
      event.preventDefault();
      return $nav.toggleClass('open');
    });
    $container.prepend($button);
    return $container;
  };

  /*
  ## Search Tree
  @param {jQuery} $tree The tree element to be searched
  @param {jQuery} $search The search input field
  */


  searchTree = function($tree, $search) {
    /*
    @method throttle
    @param {Function} fn Callback
    @param {Number} timeout
    */

    var search, throttle, value;
    throttle = (function() {
      ({
        timer: null
      });
      return function(fn, timeout) {
        var timer;
        if (timeout == null) {
          timeout = 100;
        }
        if (timer) {
          window.clearTimeout(timer);
        }
        return timer = window.setTimeout((function() {
          timer = null;
          return typeof fn === "function" ? fn() : void 0;
        }), timeout);
      };
    })();
    /*
    @method search
    @param {jQuery} tree
    @param {String} value Search query
    */

    search = function($tree, value) {
      value = value.trim().toLowerCase();
      $tree.find('.matched').removeClass('matched');
      if (value === "") {
        console.log('stop searching');
        $tree.removeClass('searching');
        return;
      }
      $tree.addClass('searching');
      return $tree.find('a').each(function(index, item) {
        var $item;
        $item = $(item);
        if ($item.text().toLowerCase().indexOf(value) > -1 || $item.attr('href').toLowerCase().indexOf(value) > -1) {
          $item.addClass('matched');
          $item.parents('li').children('.label').addClass('matched');
        }
      });
    };
    value = null;
    $search.on('keyup search', function(event) {
      var newVal;
      newVal = event.target.value;
      if (newVal === value) {
        return;
      }
      if (newVal < 2 && newVal !== "") {
        return;
      }
      value = newVal;
      return throttle(function() {
        return search($tree, value);
      });
    });
    return $search.on('keydown', function(event) {
      if (event.keyCode === 27) {
        if ($search.val().trim() === '') {
          return $search.blur();
        } else {
          return $search.val('');
        }
      }
    });
  };

  /*
  ## Build Navigation
  @param {Array} fileTree List of Files
  @param {Object} metaInfo Project information
  @return {jQuery} The nav element
  */


  buildNav = function(fileTree, metaInfo) {
    var $nav, file, headlineTree;
    $nav = createNav(metaInfo);
    buildFileTree(fileTree, $nav.find('#file-tree'), metaInfo);
    searchTree($nav.find('#file-tree'), $nav.find('#search-files'));
    if (file = metaInfo.currentFileNode) {
      headlineTree = null;
      if (file.data.firstHeader) {
        headlineTree = [file.data.firstHeader];
      } else {
        headlineTree = file.outline;
      }
      buildHeadlinesTree(headlineTree, $nav.find('#headline-tree'), metaInfo);
      searchTree($nav.find('#headline-tree'), $nav.find('#search-headlines'));
    }
    return $nav;
  };

  $(function() {
    var $nav, metaInfo;
    metaInfo = {
      relativeRoot: $('meta[name="groc-relative-root"]').attr('content'),
      githubURL: $('meta[name="groc-github-url"]').attr('content'),
      documentPath: $('meta[name="groc-document-path"]').attr('content'),
      projectPath: $('meta[name="groc-project-path"]').attr('content')
    };
    $nav = buildNav(globalFileTree, metaInfo);
    $nav.prependTo($('body'));
    return createMenuToggle($('#meta'), $nav);
  });

}).call(this);
