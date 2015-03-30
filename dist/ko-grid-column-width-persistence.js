/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function n(p){return function(l){return l}(function(l,a,c){c.defineExtension("ko-grid-column-width-persistence",{I:["ko-grid-view-state-storage","ko-grid-column-sizing"],H:function(c,g,d){function b(b){return b.filter(function(b){return!a.e.h(e,b.key)}).forEach(function(b){e[b.key]=!0;h(b)&&m.bind("column["+b.id+"].width",b.width)})}var m=d.extensions["ko-grid-view-state-storage"].modeDependent,h=d.extensions["ko-grid-column-sizing"].isResizable,e={},f=d.columns.all.subscribe(b);b(d.columns.all());
this.dispose=function(){f.dispose()}}});return c.declareExtensionAlias("columnWidthPersistence","ko-grid-column-width-persistence")}({},function(){var l;l=function(){function a(c,a){return Object.prototype.hasOwnProperty.call(c,a)}return{n:function(c,a){if(c===a)return!0;var g=!!a&&"function"===typeof a.valueOf;return!!c&&"function"===typeof c.valueOf&&g&&c.valueOf()===a.valueOf()},extend:function(c,a){Array.prototype.slice.call(arguments,1).forEach(function(a){for(var d=Object.keys(a),b=0,m=d.length;b<
m;b++){var h=d[b],e=Object.getOwnPropertyDescriptor(a,h);void 0!==e&&e.enumerable&&Object.defineProperty(c,h,e)}});return c},t:function(c,k){for(var g in c)a(c,g)&&k(g,c[g])},h:a,w:function(c,k){var g={},d;for(d in c)a(c,d)&&(g[d]=k(c[d],d,c));return g}}}();return function(a){return a}(function(a,c,k,g){return{c:a,d:c,e:k,i:g}}(function(a){function c(b){return b.filter(function(b,c,a){return a.lastIndexOf(b)===c})}function k(b,c){for(var a=b.length,e=-1,f=0;f<a;++f)if(c(b[f])){if(0<=e)throw Error("Multiple elements match the predicate.");
e=f}return e}function g(b,c){return b&&"function"===typeof b.valueOf&&c&&"function"===typeof c.valueOf?b.valueOf()<=c.valueOf()?b.valueOf()<c.valueOf()?-1:0:1:b<=c?b<c?-1:0:1}function d(b,c){var a=b.length,e=Array(a),f=Array(a),d;for(d=0;d<a;++d)e[d]=d,f[d]=b[d];d=b;b=f;f=d;e.sort(function(a,d){return c(b[a],b[d])||a-d});for(d=0;d<a;++d)f[d]=b[e[d]];return f}return{contains:function(b,c){return 0<=b.indexOf(c)},r:function(b){if(50<b.length){for(var d=b.length,h={},e,f=0;f<d;++f)if(e=b[f],"string"===
typeof e)if(a.h(h,e))break;else h[e]=!0;else if(b.lastIndexOf(e)!==f)break;if(!(f>=d)){for(var g=b.slice(0,f);f<d;++f)e=b[f],"string"===typeof e?a.h(h,e)||(h[e]=!0,g.push(e)):b.lastIndexOf(e)===f&&g.push(e);b=g}}else b=c(b);return b},s:function(b,c){return Array.prototype.concat.apply([],b.map(c))},B:function(b,c){var a=k(b,c);if(0>a)throw Error("None of the elements matches the predicate.");return b[a]},C:function(b,c){var a=k(b,c);return 0<=a?b[a]:null},D:function(b,c){var a=c||g;window.chrome?
a=d(b,a):(b.sort(a),a=b);return a}}}(l),function(){function a(a){return function(){return a}}return{W:a(!0),L:a(!1),Q:a(void 0),R:a(null),X:a(0),o:a,u:function(a){return a}}}(),l,{p:function(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})},q:function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},format:function(a){var c=arguments;return a.replace(/{(\d+)}/g,function(a,g){var d=parseInt(g,10)+1;return typeof c.length<=d?a:c[d]})}}))}(),p))}
"function"===typeof define&&define.amd?define("ko-grid ko-grid-column-sizing ko-grid-view-state-storage ko-data-source ko-indexed-repeat ko-grid-view-modes knockout".split(" "),n):window["ko-grid-column-width-persistence"]=n(window.ko.bindingHandlers.grid);