(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347405cf"],{"06a2":function(t,e,i){"use strict";var n=i("fc81")(!0);i("492d")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})}))},2395:function(t,e,i){},"2fd4":function(t,e,i){var n=i("fb68"),o=i("75c4"),s=i("cb3d")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},"4ba2":function(t,e,i){var n=i("2ea2"),o=i("2f77"),s=i("69b3"),r=i("e7ad").Reflect;t.exports=r&&r.ownKeys||function(t){var e=n.f(s(t)),i=o.f;return i?e.concat(i(t)):e}},5158:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-reader"},[i("div",{staticClass:"ebook-reader-mask",on:{touchmove:t.move,touchend:t.moveEnd,mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseEnter(e)},mousemove:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseMove(e)},mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseEnd(e)},click:t.onMaskClick}}),t._m(0)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"read-wrapper"},[i("div",{attrs:{id:"read"}})])}],s=i("ab58"),r=s["a"],a=(i("a08c"),i("4023")),c=Object(a["a"])(r,n,o,!1,null,"53cc7090",null);e["default"]=c.exports},"5ab2":function(t,e,i){var n=i("e46b"),o=i("4ba2"),s=i("09b9"),r=i("dcb7"),a=i("ebc3");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,i,n=s(t),c=r.f,u=o(n),h={},f=0;while(u.length>f)i=c(n,e=u[f++]),void 0!==i&&a(h,e,i);return h}})},6491:function(t,e,i){"use strict";var n=i("e46b"),o=i("eafa"),s=i("7c0a"),r="startsWith",a=""[r];n(n.P+n.F*i("bc96")(r),"String",{startsWith:function(t){var e=s(this,t,r),i=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return a?a.call(e,n,i):e.slice(i,i+n.length)===n}})},"7c0a":function(t,e,i){var n=i("2fd4"),o=i("f6b4");t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(t))}},"9a33":function(t,e,i){"use strict";var n=i("2fd4"),o=i("69b3"),s=i("f63e"),r=i("e754"),a=i("eafa"),c=i("7108"),u=i("8714"),h=i("238a"),f=Math.min,l=[].push,d="split",m="length",b="lastIndex",v=4294967295,g=!h((function(){RegExp(v,"y")}));i("0aed")("split",2,(function(t,e,i,h){var p;return p="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[m]||2!="ab"[d](/(?:ab)*/)[m]||4!="."[d](/(.?)(.?)/)[m]||"."[d](/()()/)[m]>1||""[d](/.?/)[m]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(o,t,e);var s,r,a,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?v:e>>>0,g=new RegExp(t.source,h+"g");while(s=u.call(g,o)){if(r=g[b],r>f&&(c.push(o.slice(f,s.index)),s[m]>1&&s.index<o[m]&&l.apply(c,s.slice(1)),a=s[0][m],f=r,c[m]>=d))break;g[b]===s.index&&g[b]++}return f===o[m]?!a&&g.test("")||c.push(""):c.push(o.slice(f)),c[m]>d?c.slice(0,d):c}:"0"[d](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var o=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,o,n):p.call(String(o),i,n)},function(t,e){var n=h(p,t,this,e,p!==i);if(n.done)return n.value;var u=o(t),l=String(this),d=s(u,RegExp),m=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),y=new d(g?u:"^(?:"+u.source+")",b),k=void 0===e?v:e>>>0;if(0===k)return[];if(0===l.length)return null===c(y,l)?[l]:[];var O=0,S=0,F=[];while(S<l.length){y.lastIndex=g?S:0;var w,j=c(y,g?l:l.slice(S));if(null===j||(w=f(a(y.lastIndex+(g?0:S)),l.length))===O)S=r(l,S,m);else{if(F.push(l.slice(O,S)),F.length===k)return F;for(var P=1;P<=j.length-1;P++)if(F.push(j[P]),F.length===k)return F;S=O=w}}return F.push(l.slice(O)),F}]}))},"9e76":function(t,e,i){"use strict";var n=i("69b3"),o=i("eafa"),s=i("e754"),r=i("7108");i("0aed")("match",1,(function(t,e,i,a){return[function(i){var n=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=a(i,t,this);if(e.done)return e.value;var c=n(t),u=String(this);if(!c.global)return r(c,u);var h=c.unicode;c.lastIndex=0;var f,l=[],d=0;while(null!==(f=r(c,u))){var m=String(f[0]);l[d]=m,""===m&&(c.lastIndex=s(u,o(c.lastIndex),h)),d++}return 0===d?null:l}]}))},a08c:function(t,e,i){"use strict";var n=i("2395"),o=i.n(n);o.a},ab58:function(t,e,i){"use strict";(function(t){i("9a33"),i("9e76");var n=i("c52d"),o=(i("6d57"),i("06a2"),i("cc57"),i("6c9a")),s=i("ac0d"),r=i("101f"),a=i("e8ec");t.ePub=o["a"],e["a"]={mixins:[s["b"]],data:function(){return{havePaginate:!1,isOnline:!1}},methods:{move:function(t){var e=0;this.firstOffsetY?(e=t.changedTouches[0].clientY-this.firstOffsetY,this.$store.commit("SET_OFFSETY",e)):this.firstOffsetY=t.changedTouches[0].clientY,t.preventDefault(),t.stopPropagation()},onMouseEnter:function(t){this.mouseMove=1,this.mouseStartTime=t.timeStamp,t.preventDefault(),t.stopPropagation()},onMouseMove:function(t){if(1===this.mouseMove)this.mouseMove=2;else if(2===this.mouseMove){var e=0;this.firstOffsetY?(e=t.clientY-this.firstOffsetY,this.$store.commit("SET_OFFSETY",e)):this.firstOffsetY=t.clientY}t.preventDefault(),t.stopPropagation()},onMouseEnd:function(t){2===this.mouseMove&&(this.$store.dispatch("setOffsetY",0),this.firstOffsetY=0,this.mouseMove=3),this.mouseEndTime=t.timeStamp;var e=this.mouseEndTime-this.mouseStartTime;e<200&&(this.mouseMove=1),t.preventDefault(),t.stopPropagation()},moveEnd:function(t){this.$store.dispatch("setOffsetY",0),this.firstOffsetY=0},onMaskClick:function(t){if(2===this.mouseMove);else if(1===this.mouseMove||4===this.mouseMove){var e=t.offsetX,i=window.innerWidth;e>0&&e<.3*i?this.prevPage():e>0&&e>.7*i?this.nextPage():this.toggleMenuVisible()}this.mouseMove=4},prevPage:function(){this.rendition&&(this.rendition.prev(),this.refreshLocation()),this.hideMenuVisible()},nextPage:function(){this.rendition&&(this.rendition.next(),this.refreshLocation()),this.hideMenuVisible()},initGuest:function(){var t=this;this.rendition.on("touchstart",(function(e){t.touchStartX=e.changedTouches[0].clientX,t.touchStartTime=e.timeStamp})),this.rendition.on("touchend",(function(e){var i=e.changedTouches[0].clientX-t.touchStartX,n=e.timeStamp-t.touchStartTime;n<500&&i>40?t.prevPage():n<500&&i<-40?t.nextPage():t.toggleMenuVisible(),e.preventDefault(),e.stopPropagation()}))},initTheme:function(){var t=Object(a["j"])(this.fileName);return t||(t=this.themeList[0].name,Object(a["u"])(this.fileName,t)),t},initFontSize:function(){var t=Object(a["d"])(this.fileName);return t||(t=16,Object(a["n"])(this.fileName,t)),t},initFontFamily:function(){var t=Object(a["c"])(this.fileName);return t||(t="Default",Object(a["m"])(this.fileName,t)),t},initRendition:function(){var t=this;this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight,method:"default"}),Promise.all([this.setDefaultTheme(this.initTheme()),this.setDefaultFontSize(this.initFontSize()),this.setDefaultFontFamily(this.initFontFamily())]).then((function(){if(t.switchTheme(),t.$route.query.navigation)t.display(t.$route.query.navigation);else{var e=Object(a["h"])(t.fileName);e?t.display(e):t.display()}})),this.rendition.hooks.content.register((function(t){Promise.all([t.addStylesheet("".concat("http://47.99.166.157/book/res","/fonts/daysOne.css")),t.addStylesheet("".concat("http://47.99.166.157/book/res","/fonts/tangerine.css")),t.addStylesheet("".concat("http://47.99.166.157/book/res","/fonts/montserrat.css")),t.addStylesheet("".concat("http://47.99.166.157/book/res","/fonts/cabin.css"))]).then((function(){}))}))},parseBook:function(){var t=this;this.book.loaded.metadata.then((function(e){t.setMetadata(e),Object(a["r"])(t.fileName,e)})),this.isOnline?this.book.coverUrl().then((function(e){t.setCover(e)})):this.book.loaded.cover.then((function(e){t.book.archive.createUrl(e).then((function(e){t.setCover(e)}))})),this.book.loaded.navigation.then((function(e){console.log(e);var i=function t(e){var i;return(i=[]).concat.apply(i,Object(n["a"])(e.map((function(e){return[e].concat(Object(n["a"])(t(e.subitems)))}))))}(e.toc);function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=i.filter((function(e){return e.id===t.parent}))[0];return t.parent&&n?o(n,++e):e}i.forEach((function(t){t.level=o(t),t.total=0,t.pagelist=[],t.href.match(/^(.*)\.html$/)?t.idhref=t.href.match(/^(.*)\.html$/)[1]:t.href.match(/^(.*)\.xhtml$/)&&(t.idhref=t.href.match(/^(.*)\.xhtml$/)[1])})),t.setNavigation(i)})),this.book.ready.then((function(){return t.setCurrentBook(t.book),t.book.locations.generate(window.innerWidth/375*750*(Object(a["d"])(t.fileName)/16))})).then((function(e){e.forEach((function(e){var i=e.match(/\[(.*)\]!/)[1];console.log(i),t.navigation.forEach((function(t){t.idhref&&t.idhref.indexOf(i)>=0&&t.pagelist.push(e)}));var n=1;t.navigation.forEach((function(t,e){t.page=0===e?1:n,n+=t.pagelist.length+1}))})),t.setPagelist(e),t.setBookAvailable(!0),t.setIsPaginating(!1),t.refreshLocation()}))},initEpub:function(t){this.book=new o["a"](t),this.setCurrentBook(this.book),this.setIsPaginating(!0),this.setPaginate(this.$t("book.paginating")),this.initRendition(),this.initGuest(),this.parseBook()}},mounted:function(){var t=this;this.$route.params.fileName.indexOf("|")>0?this.setFileName(this.$route.params.fileName.split("|").join("/")).then((function(){t.initEpub("".concat("http://47.99.166.157/epub","/").concat(t.fileName,".epub")),t.isOnline=!1})):this.setFileName(this.$route.params.fileName).then((function(){Object(r["b"])(t.fileName,(function(e,i){if(!e)if(i)t.isOnline=!1,t.initEpub(i);else{t.isOnline=!0;var n=t.$route.query.opf;n&&t.initEpub(n)}}))}))}}}).call(this,i("9edd"))},ac0d:function(t,e,i){"use strict";i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return f}));i("5ab2"),i("e10e"),i("f548"),i("6491"),i("cc57"),i("6d57");function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o=i("ae8c"),s=i("5de6"),r=i("fa7d"),a=i("e8ec");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={computed:u(u({},Object(o["c"])(["fileName","menuVisible","settingVisible","defaultFontSize","defaultFontFamily","fontFamilyVisible","defaultTheme","bookAvailable","progress","section","isPaginating","currentBook","navigation","cover","metadata","paginate","pagelist","offsetY","isBookmark","speakingIconBottom"])),{},{themeList:function(){return Object(s["o"])(this)},getSectionName:function(){if(this.section){var t=this.currentBook.section(this.section);if(t&&t.href&&this.currentBook&&this.currentBook.navigation)return this.navigation[this.section].label}}}),data:function(){return{fontSizeList:s["b"],fontFamily:s["a"]}},methods:u(u({},Object(o["b"])(["setFileName","setMenuVisible","setSettingVisible","setDefaultFontSize","setDefaultFontFamily","setFontFamilyVisible","setDefaultTheme","setBookAvailable","setProgress","setSection","setIsPaginating","setCurrentBook","setNavigation","setCover","setMetadata","setPaginate","setPagelist","setOffsetY","setIsBookmark","setSpeakingIconBottom"])),{},{showFontFamilySetting:function(){this.setFontFamilyVisible(!0)},showSetting:function(t){this.setSettingVisible(t)},hideMenuVisible:function(){this.setMenuVisible(!1),this.setSettingVisible(-1),this.setFontFamilyVisible(!1)},toggleMenuVisible:function(){this.menuVisible&&(this.setSettingVisible(-1),this.setFontFamilyVisible(!1)),this.setMenuVisible(!this.menuVisible)},hideFontFamilySetting:function(){this.setFontFamilyVisible(!1)},setGlobalTheme:function(t){switch(Object(r["e"])(),t){case"Default":Object(r["a"])("".concat("http://47.99.166.157/book/res","/theme/theme_default.css"));break;case"Eye":Object(r["a"])("".concat("http://47.99.166.157/book/res","/theme/theme_eye.css"));break;case"Gold":Object(r["a"])("".concat("http://47.99.166.157/book/res","/theme/theme_gold.css"));break;case"Night":Object(r["a"])("".concat("http://47.99.166.157/book/res","/theme/theme_night.css"));break;default:this.setDefaultTheme("Default"),Object(r["a"])("".concat("http://47.99.166.157/book/res","/theme/theme_default.css"));break}},registerTheme:function(){var t=this;this.themeList.forEach((function(e){t.currentBook.rendition.themes.register(e.name,e.style)}))},switchTheme:function(){var t=this,e=this.themeList.filter((function(e){return e.name===t.defaultTheme}))[0];this.defaultFontFamily&&"Default"!==this.defaultFontFamily?e.style.body["font-family"]="".concat(this.defaultFontFamily,"!important"):e.style.body["font-family"]="Times New Roman!important",this.registerTheme(),this.currentBook.rendition.themes.select(this.defaultTheme),this.currentBook.rendition.themes.fontSize(this.defaultFontSize),this.setGlobalTheme(this.defaultTheme)},setFontSize:function(t){var e=this;this.setDefaultFontSize(t).then((function(){e.switchTheme(),a["n"](e.fileName,t)}))},setTheme:function(t){var e=this;this.setDefaultTheme(t).then((function(){e.switchTheme(),a["u"](e.fileName,t)}))},setFontFamily:function(t){var e=this;this.setDefaultFontFamily(t).then((function(){e.switchTheme(),a["m"](e.fileName,t)}))},displaySection:function(t){var e=this,i=this.currentBook.section(this.section);i&&i.href&&this.currentBook.rendition.display(i.href).then((function(){e.refreshLocation(),t&&t()}))},displayProgress:function(){var t=this,e=this.currentBook.locations.cfiFromPercentage(this.progress/100);this.currentBook.rendition.display(e).then((function(){t.refreshLocation()}))},display:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this.currentBook.rendition.display(t).then((function(){i&&t.startsWith("epubcfi")&&e.currentBook.getRange(t).then((function(i){e.currentBook.rendition.annotations.highlight(t,{},(function(t){}))})),e.refreshLocation()})):this.currentBook.rendition.display().then((function(){e.refreshLocation()})),this.hideMenuVisible()},refreshLocation:function(){var t=this.currentBook.rendition.currentLocation();if(t.start&&t.start.index){this.setSection(t.start.index);var e=this.currentBook.locations.percentageFromCfi(t.start.cfi);this.setProgress(Math.floor(100*e)),this.pagelist?t.start.location<=0?this.setPaginate(""):this.setPaginate(t.start.location+" / "+this.pagelist.length):this.setPaginate("");var i=t.start.cfi,n=a["b"](this.fileName);n&&n.some((function(t){return t.cfi===i}))?this.setIsBookmark(!0):this.setIsBookmark(!1),a["q"](this.fileName,i)}},getReadTime:function(){return this.$t("book.haveRead").replace("$1",Object(s["i"])(this.fileName))}})},f={methods:{showBookDetail:function(t){Object(s["m"])(this,t)}}}},bc96:function(t,e,i){var n=i("cb3d")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},c52d:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(t){if(Array.isArray(t))return n(t)}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t,e){if(t){if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return o(t)||s(t)||r(t)||a()}i.d(e,"a",(function(){return c}))},cc57:function(t,e,i){var n=i("064e").f,o=Function.prototype,s=/^\s*function ([^ (]*)/,r="name";r in o||i("149f")&&n(o,r,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},e10e:function(t,e,i){var n=i("008a"),o=i("80a9");i("f0cc")("keys",(function(){return function(t){return o(n(t))}}))},ebc3:function(t,e,i){"use strict";var n=i("064e"),o=i("cc33");t.exports=function(t,e,i){e in t?n.f(t,e,o(0,i)):t[e]=i}},f0cc:function(t,e,i){var n=i("e46b"),o=i("7ddc"),s=i("238a");t.exports=function(t,e){var i=(o.Object||{})[t]||Object[t],r={};r[t]=e(i),n(n.S+n.F*s((function(){i(1)})),"Object",r)}}}]);
//# sourceMappingURL=chunk-347405cf.f03605bc.js.map