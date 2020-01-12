(function(e){function t(t){for(var r,o,a=t[0],l=t[1],d=t[2],u=0,h=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(h.length)h.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=r,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(i,r,function(t){return e[t]}.bind(null,r));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var c=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var r=i("85ec"),n=i.n(r);n.a},"56d7":function(e,t,i){"use strict";i.r(t);var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"small"===e.size?"small":"medium"===e.size?"medium":"big",attrs:{id:"main-box"}},[i("div",{attrs:{id:"control-box"}},[i("div",{staticClass:"row",attrs:{id:"upper-row"}},[i("div",{staticClass:"counter"},[e._v("💣 "+e._s(e.mines)+" ")]),i("div",{attrs:{id:"restart"},on:{click:function(t){return e.changeField(e.size)}}},[i("span",{class:e.isLost?"far fa-frown":e.isWon?"far fa-grin-tongue":e.clicked?"far fa-surprise":"far fa-smile",attrs:{id:"status"}}),i("br"),e._v(" Restart ")]),i("div",{staticClass:"counter"},[e._v("🕔 "+e._s(e.time)+" ")])]),i("div",{staticClass:"row",attrs:{id:"bottom-row"}},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],class:"small"===e.size?"difficulty-small":"",attrs:{id:"difficulty"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.size=t.target.multiple?i:i[0]},function(t){return e.changeField(e.size)}]}},[i("option",{attrs:{value:"small",selected:""}},[e._v("Easy")]),i("option",{attrs:{value:"medium"}},[e._v("Intermediate")]),i("option",{attrs:{value:"big"}},[e._v("Advanced")])]),i("div",{attrs:{id:"spacer"}}),i("button",{attrs:{id:"show-records-button"},on:{click:function(t){return e.changeRecordsVisibility()}}},[e._v(e._s(e.buttonText))])])]),i("div",{attrs:{id:"field-box"}},[i("div",{class:e.showRecords?"":"hide",attrs:{id:"records"}},[i("div",{attrs:{id:"records-text"}},[i("div",{attrs:{id:"records-title"}},[e._v("Records:")]),i("br"),i("div",{attrs:{id:"records-themselves"}},[e._v(" Easy: "+e._s(e.recordEasy)+" "),i("br"),i("br"),e._v(" Intermediate: "+e._s(e.recordIntermediate)+" "),i("br"),i("br"),e._v(" Advanced: "+e._s(e.recordAdvanced)+" "),i("br"),i("br"),i("br"),i("button",{attrs:{id:"clear-records-button"},on:{click:function(t){return e.clearRecords()}}},[e._v("Clear Records")]),i("br"),i("br")]),e._v(" Tips: "),i("br"),i("br"),i("div",{staticClass:"text-space"},[e._v(" The cells can be empty, contain mines or be numbered, with the number meaning how many mines are placed directly around that cell. They are initially hidden, your goal is to disclose all the empty and numbered cells without disclosing any of the mines. Click the left mouse button to disclose a hidden cell, the right mouse button to mark or unmark a hidden cell as containing a mine, or any mouse button to disclose all the hidden cells around a numbered cell, assuming you have marked the corresponding amount of mines directly around it. ")])])]),e._l(e.field,(function(t,r){return i("Cell",{key:r,attrs:{content:t.content,index:r,hidden:t.hidden,marked:t.marked,questioned:t.questioned,size:e.size,lost:e.isLost},on:{"disclose-cell":function(t){return e.discloseCell(r)},"mark-cell":function(t){return e.markCell(r)}},nativeOn:{contextmenu:function(e){e.preventDefault()}}})}))],2)])},s=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cell",style:e.style,on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:"button"in t&&0!==t.button?null:e.$emit("disclose-cell")},contextmenu:function(t){return e.$emit("mark-cell")}}},[e._v(" "+e._s(this.val)+" ")])},a=[],l=(i("caad"),{1:"blue",2:"green",3:"red",4:"purple",5:"maroon",6:"turquoise",7:"black",8:"gray"}),d=l,c={name:"Cell",props:["content","index","hidden","marked","questioned","size","lost"],data:function(){return{val:""}},beforeUpdate:function(){this.val=this.marked&&"💣"!==this.content&&this.lost?"╳":this.marked?"🚩":this.lost&&"💣"===this.content?"💣":this.questioned&&this.hidden?"❓":this.hidden?"":this.content},computed:{style:function(){var e=this.lost&&this.hidden?"hsl(0, 100%, 85%)":this.lost&&!this.hidden?"hsl(0, 100%, 95%)":this.hidden?"silver":"whitesmoke",t=this.marked?"red":this.questioned&&this.hidden?"dimgrey":[1,2,3,4,5,6,7,8].includes(this.content)?d[this.content]:"black",i="small"===this.size?9:"medium"===this.size?16:30;return this.index>0&&(this.index+1)%i===0?{color:t,backgroundColor:e}:{borderRight:"1px solid black",color:t,backgroundColor:e}}}},u=c,h=i("2877"),m=Object(h["a"])(u,o,a,!1,null,null,null),f=m.exports;i("b0c0");function v(e){var t;try{t=window[e];var i="__storage_test__";return t.setItem(i,i),t.removeItem(i),!0}catch(r){return r instanceof DOMException&&(22===r.code||1014===r.code||"QuotaExceededError"===r.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.name)&&t&&0!==t.length}}var p=v;function b(){p("localStorage")&&(this.recordEasy=localStorage.getItem("recordEasy")?localStorage.getItem("recordEasy"):"---",this.recordIntermediate=localStorage.getItem("recordIntermediate")?localStorage.getItem("recordIntermediate"):"---",this.recordAdvanced=localStorage.getItem("recordAdvanced")?localStorage.getItem("recordAdvanced"):"---")}function y(){this.showRecords=!this.showRecords,this.timeStop=!(this.timeStop&&0!==this.time&&!this.isWon&&!this.isLost),this.buttonText=this.showRecords?"Back to Game":"Records & Tips"}function g(){p("localStorage")&&(localStorage.removeItem("recordEasy"),localStorage.removeItem("recordIntermediate"),localStorage.removeItem("recordAdvanced")),this.recordEasy="---",this.recordIntermediate="---",this.recordAdvanced="---"}function k(){var e=this;this.interval=setInterval((function(){document.hidden||e.timeStop||e.time++,999===e.time&&(e.timeStop=!0)}),1e3)}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.size;this.time=0,this.timeStop=!0,this.isWon=!1,this.isLost=!1,this.showRecords=!1,this.buttonText="Records & Tips",this.makeField(e)}i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("a9e3"),i("d3b7"),i("3ca3"),i("ddb0");function w(e){if(!this.isWon){var t="small"===e?10:"medium"===e?40:99,i=0,r=!0,n=!1,s=void 0;try{for(var o,a=this.field[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var l=o.value;l.hidden&&i++}}catch(y){n=!0,s=y}finally{try{r||null==a.return||a.return()}finally{if(n)throw s}}if(i===t){if(p("localStorage")){var d="small"===e?"recordEasy":"medium"===e?"recordIntermediate":"recordAdvanced",c=localStorage.getItem(d);c?!isNaN(c)&&Number(c)>this.time&&localStorage.setItem(d,this.time):localStorage.setItem(d,this.time)}this.renewRecords(),this.isWon=!0,this.mines=0,this.timeStop=!0;var u=!0,h=!1,m=void 0;try{for(var f,v=this.field[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var b=f.value;b.hidden&&!b.marked&&(b.marked=!0)}}catch(y){h=!0,m=y}finally{try{u||null==v.return||v.return()}finally{if(h)throw m}}}}}i("99af"),i("d81d"),i("13d5");function S(e){this.renewRecords();var t=[],i="small"===e?81:"medium"===e?256:480,r="small"===e?10:"medium"===e?40:99;this.mines=r;while(0!==r){var n=Math.floor(Math.random()*i);t.includes(n)||(r--,t.push(n))}for(var s=[],o="small"===e?9:16,a="small"===e?9:"medium"===e?16:30,l=0,d=0;d<o;d++){for(var c=[],u=0;u<a;u++)c.push(t.includes(l)?"💣":""),l++;s.push(c)}for(var h=0;h<o;h++)for(var m=0;m<a;m++){var f=0;h-1>=0&&m-1>=0&&"💣"===s[h-1][m-1]&&f++,h+1<o&&m-1>=0&&"💣"===s[h+1][m-1]&&f++,h-1>=0&&m+1<a&&"💣"===s[h-1][m+1]&&f++,h-1>=0&&"💣"===s[h-1][m]&&f++,h+1<o&&"💣"===s[h+1][m]&&f++,m-1>=0&&"💣"===s[h][m-1]&&f++,m+1<a&&"💣"===s[h][m+1]&&f++,h+1<o&&m+1<a&&"💣"===s[h+1][m+1]&&f++,f>0&&"💣"!==s[h][m]&&(s[h][m]=f)}var v=s.reduce((function(e,t){return e.concat(t)}),[]);this.field=v.map((function(e){return{content:e,hidden:!0,marked:!1,questioned:!1}}))}i("4de4"),i("2532");function x(e){var t,i="small"===this.size?[0,9,18,27,36,45,54,63,72]:"medium"===this.size?[0,16,32,48,64,80,96,112,128,144,160,176,192,208,224,240]:[0,30,60,90,120,150,180,210,240,270,300,330,360,390,420,450],r="small"===this.size?[8,17,26,35,44,53,62,71,80]:"medium"===this.size?[15,31,47,63,79,95,111,127,143,159,175,191,207,223,239,255]:[29,59,89,119,149,179,209,239,269,299,329,359,389,419,449,479],n="small"===this.size?9:"medium"===this.size?16:30,s="small"===this.size?80:"medium"===this.size?255:479;return t=i.includes(e)?[e+1,e-n+1,e-n,e+n,e+n+1]:r.includes(e)?[e-1,e-n,e-n-1,e+n-1,e+n]:[e-1,e+1,e-n+1,e-n,e-n-1,e+n-1,e+n,e+n+1],t=t.filter((function(e){return e>=0&&e<=s})),t}function I(e){var t=Number(this.field[e].content),i=this.calculateVicinity(e),r=0,n=!0,s=!1,o=void 0;try{for(var a,l=i[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var d=a.value;this.field[d].marked&&r++}}catch(p){s=!0,o=p}finally{try{n||null==l.return||l.return()}finally{if(s)throw o}}if(r===t){var c=!0,u=!1,h=void 0;try{for(var m,f=i[Symbol.iterator]();!(c=(m=f.next()).done);c=!0){var v=m.value;this.discloseCell(v,!0)}}catch(p){u=!0,h=p}finally{try{c||null==f.return||f.return()}finally{if(u)throw h}}}}i("4160"),i("6062"),i("159b");var z=i("2909");function R(e,t){var i=this;if(!this.isLost&&!this.isWon)if(0===this.time&&(this.timeStop=!1),this.field[e].hidden){if(!this.field[e].marked)if(this.clicked=!0,setTimeout((function(){return i.clicked=!1}),200),this.field[e].hidden=!1,""===this.field[e].content){var r=this.calculateVicinity(e),n=function(){r.forEach((function(e){return i.field[e].hidden=!!i.field[e].marked})),r=r.filter((function(e){return""===i.field[e].content}));var e=[];r.forEach((function(t){return e.push(i.calculateVicinity(t))})),r=e.reduce((function(e,t){return e.concat(t)}),[]).filter((function(e){return i.field[e].hidden})),r=Object(z["a"])(new Set(r))};while(0!==r.length)n()}else"💣"===this.field[e].content&&(this.isLost=!0,this.timeStop=!0,this.$forceUpdate())}else!0!==t&&this.riskyBunch(e)}function C(e){this.isLost||this.isWon||(this.field[e].hidden?(this.mines=this.field[e].marked||this.field[e].questioned?this.field[e].marked?this.mines+1:this.mines:this.mines-1,this.field[e].marked=!this.field[e].marked&&!this.field[e].questioned,this.field[e].questioned=!this.field[e].marked&&!this.field[e].questioned):this.riskyBunch(e))}var E={name:"app",components:{Cell:f},data:function(){return{field:{},isLost:!1,isWon:!1,size:"small",mines:10,clicked:!1,time:0,timeStop:!0,showRecords:!1,buttonText:"Records & Tips",recordEasy:"---",recordIntermediate:"---",recordAdvanced:"---"}},created:function(){this.makeField(this.size),this.timer()},beforeUpdate:function(){this.checkIfWon(this.size)},methods:{renewRecords:b,changeRecordsVisibility:y,clearRecords:g,timer:k,changeField:_,checkIfWon:w,makeField:S,calculateVicinity:x,riskyBunch:I,discloseCell:R,markCell:C}},O=E,T=(i("034f"),Object(h["a"])(O,n,s,!1,null,null,null)),A=T.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.ba860dfb.js.map