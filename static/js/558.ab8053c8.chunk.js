"use strict";(self.webpackChunkreact_filesystem_routing=self.webpackChunkreact_filesystem_routing||[]).push([[558],{890:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(3366),a=r(7462),o=r(2791),i=r(8182),u=r(8519),c=r(2039),d=r(7630),l=r(1046),s=r(4036),f=r(9818);function p(e){return(0,f.Z)("MuiTypography",e)}(0,r(2152).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(184),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t["align".concat((0,s.Z)(r.align))],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({margin:0},r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},P=o.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiTypography"}),o=function(e){return y[e]||e}(r.color),d=(0,u.Z)((0,a.Z)({},r,{color:o})),f=d.align,P=void 0===f?"inherit":f,b=d.className,_=d.component,O=d.gutterBottom,R=void 0!==O&&O,N=d.noWrap,S=void 0!==N&&N,M=d.paragraph,T=void 0!==M&&M,w=d.variant,A=void 0===w?"body1":w,I=d.variantMapping,E=void 0===I?h:I,W=(0,n.Z)(d,v),j=(0,a.Z)({},d,{align:P,color:o,className:b,component:_,gutterBottom:R,noWrap:S,paragraph:T,variant:A,variantMapping:E}),x=_||(T?"p":E[A]||h[A])||"span",k=function(e){var t=e.align,r=e.gutterBottom,n=e.noWrap,a=e.paragraph,o=e.variant,i=e.classes,u={root:["root",o,"inherit"!==e.align&&"align".concat((0,s.Z)(t)),r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,c.Z)(u,p,i)}(j);return(0,m.jsx)(g,(0,a.Z)({as:x,ref:t,ownerState:j,className:(0,i.Z)(k.root,b)},W))}))},4910:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.FORMATS=t.FORMAT_PLAIN=t.FORMAT_HTML=void 0;var r="html";t.FORMAT_HTML=r;var n="plain";t.FORMAT_PLAIN=n;var a=[r,n];t.FORMATS=a},1597:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LINE_ENDINGS=void 0;t.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},9351:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SUPPORTED_PLATFORMS=void 0;t.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},3140:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UNITS=t.UNIT_PARAGRAPH=t.UNIT_PARAGRAPHS=t.UNIT_SENTENCE=t.UNIT_SENTENCES=t.UNIT_WORD=t.UNIT_WORDS=void 0;var r="words";t.UNIT_WORDS=r;var n="word";t.UNIT_WORD=n;var a="sentences";t.UNIT_SENTENCES=a;var o="sentence";t.UNIT_SENTENCE=o;var i="paragraphs";t.UNIT_PARAGRAPHS=i;var u="paragraph";t.UNIT_PARAGRAPH=u;var c=[r,n,a,o,i,u];t.UNITS=c},3411:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WORDS=void 0;t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},3880:function(e,t,r){Object.defineProperty(t,"Ap",{enumerable:!0,get:function(){return u.default}});var n,a=r(4910),o=r(3140),i=r(3411),u=(n=r(5353))&&n.__esModule?n:{default:n}},5353:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(4910),o=r(1597),i=(n=r(7694))&&n.__esModule?n:{default:n},u=r(40);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.FORMAT_PLAIN,n=arguments.length>2?arguments[2]:void 0;if(c(this,e),this.format=r,this.suffix=n,l(this,"generator",void 0),-1===a.FORMATS.indexOf(r.toLowerCase()))throw new Error("".concat(r," is an invalid format. Please use ").concat(a.FORMATS.join(" or "),"."));this.generator=new i.default(t)}var t,r,n;return t=e,(r=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,u.isReactNative)()&&(0,u.isNode)()&&(0,u.isWindows)()?o.LINE_ENDINGS.WIN32:o.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(e){return this.format===a.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{key:"formatStrings",value:function(e){var t=this;return e.map((function(e){return t.formatString(e)}))}},{key:"generateWords",value:function(e){return this.formatString(this.generator.generateRandomWords(e))}},{key:"generateSentences",value:function(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{key:"generateParagraphs",value:function(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,u.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}])&&d(t.prototype,r),n&&d(t,n),e}(),f=s;t.default=f},7694:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(3411),a=r(40);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.sentencesPerParagraph,a=void 0===r?{max:7,min:3}:r,i=t.wordsPerSentence,c=void 0===i?{max:15,min:5}:i,d=t.random,l=(t.seed,t.words),s=void 0===l?n.WORDS:l;if(o(this,e),u(this,"sentencesPerParagraph",void 0),u(this,"wordsPerSentence",void 0),u(this,"random",void 0),u(this,"words",void 0),a.min>a.max)throw new Error("Minimum number of sentences per paragraph (".concat(a.min,") cannot exceed maximum (").concat(a.max,")."));if(c.min>c.max)throw new Error("Minimum number of words per sentence (".concat(c.min,") cannot exceed maximum (").concat(c.max,")."));this.sentencesPerParagraph=a,this.words=s,this.wordsPerSentence=c,this.random=d||Math.random}var t,r,c;return t=e,(r=[{key:"generateRandomInteger",value:function(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{key:"generateRandomWords",value:function(e){var t=this,r=this.wordsPerSentence,n=r.min,o=r.max,i=e||this.generateRandomInteger(n,o);return(0,a.makeArrayOfLength)(i).reduce((function(e,r){return"".concat(t.pluckRandomWord()," ").concat(e)}),"").trim()}},{key:"generateRandomSentence",value:function(e){return"".concat((0,a.capitalize)(this.generateRandomWords(e)),".")}},{key:"generateRandomParagraph",value:function(e){var t=this,r=this.sentencesPerParagraph,n=r.min,o=r.max,i=e||this.generateRandomInteger(n,o);return(0,a.makeArrayOfLength)(i).reduce((function(e,r){return"".concat(t.generateRandomSentence()," ").concat(e)}),"").trim()}},{key:"pluckRandomWord",value:function(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}])&&i(t.prototype,r),c&&i(t,c),e}(),d=c;t.default=d},7130:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)};t.default=r},40:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"capitalize",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"isReactNative",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"isWindows",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"makeArrayOfLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"makeArrayOfStrings",{enumerable:!0,get:function(){return c.default}});var n=d(r(7130)),a=d(r(2970)),o=d(r(5254)),i=d(r(9963)),u=d(r(9403)),c=d(r(6625));function d(e){return e&&e.__esModule?e:{default:e}}},2970:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return!!e.exports};t.default=r},5254:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e};t.default=r},9963:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(9351),a=function(){var e=!1;try{e=process.platform===n.SUPPORTED_PLATFORMS.WIN32}catch(t){e=!1}return e};t.default=a},9403:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,t){return t}))};t.default=r},6625:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(40),a=function(e,t){return(0,n.makeArrayOfLength)(e).map((function(){return t()}))};t.default=a}}]);
//# sourceMappingURL=558.ab8053c8.chunk.js.map