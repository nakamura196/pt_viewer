(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,_=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&_.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(_.length)_.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("19b3"),i=a.n(n);i.a},"19b3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-toolbar",{attrs:{dark:!0,flat:""}},[a("v-toolbar-title",[t._v("Parallel Text Viewer with TEI & IIIF")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.dialog_settings=!0}}},[a("v-icon",[t._v("mdi-settings")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.dialog_information=!0}}},[a("v-icon",[t._v("mdi-information")])],1),a("v-toolbar-items",{directives:[{name:"show",rawName:"v-show",value:t.return_url,expression:"return_url"}]},[a("v-btn",{attrs:{text:"",href:t.return_url}},[t._v(t._s(t.return_label))])],1)],1),a("div",{style:"height: "+t.height+"px;"},[a("splitpanes",{staticClass:"default-theme"},[a("pane",{attrs:{"min-size":"20"}},[a("iframe",{staticClass:"py-2 px-2",staticStyle:{border:"none"},attrs:{src:t.mirador_path,seamless:"seamless",width:"100%",height:t.height+"px"}})]),a("pane",[a("splitpanes",{staticClass:"default-theme",attrs:{horizontal:"horizontal"}},[a("pane",{staticClass:"py-2 mx-2"},[a("v-card",{staticClass:"scroll vertical",attrs:{flat:!0,id:"main"}},[a("v-card-text",{staticClass:"mx-2 text--primary"},[a("h2",{staticClass:"text--primary"},[t._v(t._s(t.label_main))]),a("br"),t._l(t.data_main_e,(function(e,n){return a("p",{key:n},[e.manifest?a("span",[a("img",{staticClass:"mr-2",staticStyle:{width:"30px"},attrs:{src:"https://iiif.dl.itc.u-tokyo.ac.jp/images/iiif.png"},on:{click:function(a){return t.clickIcon(e.id)}}}),a("br")]):t._e(),t._l(e.words,(function(e,n){return a("span",{key:n,style:-1!=t.hightlights.indexOf(e.id)?"background-color : yellow;":null,attrs:{id:e.id},on:{mouseover:t.mouseover_main,click:function(a){return t.scroll(e.id)}}},[t._v(t._s(e.value))])}))],2)}))],2)],1)],1),a("pane",{staticClass:"py-2 mx-2"},[a("v-card",{staticClass:"scroll vertical",attrs:{flat:!0,id:"sub"}},[a("v-list-item",[a("v-card-text",{staticClass:"mx-2 text--primary"},[a("h2",{staticClass:"text--primary"},[t._v(t._s(t.label_sub))]),a("br"),t._l(t.data_sub,(function(e,n){return a("p",{key:n},[a("span",{style:-1!=t.hightlights.indexOf(e.id)?"background-color : yellow;":null,attrs:{id:e.id},on:{mouseover:t.mouseover,click:function(a){return t.scroll(e.id)}}},[t._v(t._s(e.value))])])}))],2)],1)],1)],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{width:"600px"},model:{value:t.dialog_information,callback:function(e){t.dialog_information=e},expression:"dialog_information"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("このツールの説明")]),a("v-card-text",[t._v("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.dialog_information=!1}}},[t._v("閉じる")])],1)],1)],1),a("v-dialog",{attrs:{width:"600px"},model:{value:t.dialog_settings,callback:function(e){t.dialog_settings=e},expression:"dialog_settings"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("設定")]),a("v-card-text",[t._v("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.dialog_settings=!1}}},[t._v("閉じる")])],1)],1)],1)],1)},r=[],o=(a("99af"),a("c975"),a("fb6a"),a("b0c0"),a("ac1f"),a("841c"),a("1276"),a("498a"),a("512e")),s=a("bc3a"),l=a.n(s),c="https://nakamura196.github.io/genji/mirador2/index_params.html",u={components:{Splitpanes:o["Splitpanes"],Pane:o["Pane"]},data:function(){return{width:window.innerWidth,height:window.innerHeight,return_url:null,return_label:null,dialog_information:!1,dialog_settings:!1,url_main:"",url_sub:"",test:"",data_main:[],data_sub:[],data_main_e:[],data_sub_e:[],hightlights:[],m_s_id_map:[],s_m_id_map:[],w_l_id_map:{},l_w_id_map:{},image_map:{},label_main:"",label_sub:"",selected_manifests:[],mirador_path:"",direction:"vertical"}},mounted:function(){var t=this;window.addEventListener("resize",this.handleResize);var e=this.$route.query.u?this.$route.query.u:"assets/config_e.json";l.a.get(e).then((function(e){var a=e.data;t.return_url=a.return_url,t.return_label=a.return_label,t.url_main=a.url_main,t.label_main=a.label_main,t.label_sub=a.label_sub;var n=a.query_main,i=a.query_sub;t.direction=a.direction;var r=a.image_map;l.a.get(r).then((function(e){for(var r=[],o=e.data,s=[],l={},u=o["selections"],d=0;d<u.length;d++){var _=u[d],m=_.within,p=m.label,h=m["@id"];l[p]={manifest:h,data:{}},r.push({manifest:h}),t.selected_manifests.push(p);for(var v=_.members,f=0;f<v.length;f++){var g=v[f],b=g.label;s[b]||s.push(b),l[p].data[b]=g["@id"]}}t.image_map=l,t.mirador_path=c+"?params="+encodeURIComponent(JSON.stringify(r))+"&annotationState=on",t.exec2map(a.url_map),t.exec2main(a.url_main,s,n),t.exec2sub(a.url_sub,i)}))}))},watch:{$route:function(){this.search()}},methods:{clickIcon:function(t){for(var e=this.selected_manifests,a=[],n=0;n<e.length;n++){var i=e[n],r=this.image_map[i].data;r[t]&&a.push({manifest:this.image_map[i].manifest,canvas:r[t]}),this.mirador_path=c+"?params="+encodeURIComponent(JSON.stringify(a))+"&annotationState=on"}},scroll:function(t){var e=[],a="";if(this.m_s_id_map[this.w_l_id_map[t]]?(e=this.m_s_id_map[this.w_l_id_map[t]],a="sub"):this.l_w_id_map[this.s_m_id_map[t][0]]&&(e=this.l_w_id_map[this.s_m_id_map[t][0]],a="main"),null!=e){var n=e[0];"vertical"==this.direction?this.$SmoothScroll(document.querySelector("#"+n).getBoundingClientRect().left+document.querySelector("#"+a).scrollLeft-document.querySelector("#"+a).getBoundingClientRect().left-document.querySelector("#"+a).getBoundingClientRect().width/2+document.querySelector("#"+n).getBoundingClientRect().width,.1,null,document.querySelector("#"+a),"x"):this.$SmoothScroll(document.querySelector("#"+n).getBoundingClientRect().top+document.querySelector("#"+a).scrollTop-document.querySelector("#"+a).getBoundingClientRect().top,.1,null,document.querySelector("#"+a),"y")}},mouseover_main:function(t){if(t.target.attributes.length>0&&"id"==t.target.attributes[0].name){var e=t.target.attributes[0].value,a=this.w_l_id_map[e],n=[];if(this.m_s_id_map[a]){var i=this.m_s_id_map[a];n=i;for(var r=0;r<i.length;r++)for(var o=i[r],s=this.s_m_id_map[o],l=0;l<s.length;l++){var c=s[l],u=this.l_w_id_map[c];n=n.concat(u)}}this.hightlights=n}},mouseover:function(t){if(t.target.attributes.length>0&&"id"==t.target.attributes[0].name){var e=t.target.attributes[0].value,a=[e];if(this.s_m_id_map[e])for(var n=this.s_m_id_map[e],i=0;i<n.length;i++){var r=n[i],o=this.l_w_id_map[r];a=a.concat(o)}this.hightlights=a}},handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight},exec2map:function(t){var e=this;l.a.get(t).then((function(t){var a=t.data,n={};for(var i in a)for(var r=a[i],o=0;o<r.length;o++){var s=r[o];n[s]||(n[s]=[]),n[s].push(i)}e.m_s_id_map=n,e.s_m_id_map=a;var l={},c={};for(var u in n){var d=u.split("#"),_=d[0],m=d[1].split(":"),p=m[0],h=m[1];c[u]=[];for(var v=p;v<h;v++){var f=_+"-"+v;l[f]=u,c[u].push(f)}}e.w_l_id_map=l,e.l_w_id_map=c}))},exec2main:function(t,e,a){var n=this;l.a.get(t,{responseType:"document"}).then((function(t){for(var i=t.data,r=i.querySelectorAll(a),o=[],s=0;s<r.length;s++){for(var l=r[s],c=l.attributes[0].value,u=l.childNodes,d="",_=[],m=0;m<u.length;m++){var p=u[m],h=p.innerText||p.textContent;d+=h.trim()}for(var v=0;v<d.length;v++){var f=d.slice(v,v+1);_.push({value:f,id:c+"-"+v})}var g={id:c,words:_};-1!=e.indexOf(c)&&(g["manifest"]=!0),o.push(g),n.data_main_e=o}}))},exec2sub:function(t,e){var a=this;l.a.get(t,{responseType:"document"}).then((function(t){for(var n=t.data,i=n.querySelectorAll(e),r=[],o=0;o<i.length;o++){for(var s=i[o],l=s.attributes[0].value,c=s.childNodes,u="",d=0;d<c.length;d++){var _=c[d],m=_.innerText||_.textContent;u+=m.trim()}var p={id:l,value:u};r.push(p)}a.data_sub=r}))}},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},d=u,_=(a("034f"),a("2877")),m=a("6544"),p=a.n(m),h=a("7496"),v=a("8336"),f=a("b0af"),g=a("99d9"),b=a("a75b"),y=a("169a"),w=a("132d"),x=a("da13"),S=a("2fa4"),C=a("71d9"),k=a("2a7f"),T=Object(_["a"])(d,i,r,!1,null,null,null),O=T.exports;p()(T,{VApp:h["a"],VBtn:v["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VContent:b["a"],VDialog:y["a"],VIcon:w["a"],VListItem:x["a"],VSpacer:S["a"],VToolbar:C["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var q=a("8c4f");n["a"].use(q["a"]);var V=[{path:"/",name:"index"}],j=new q["a"]({base:"",routes:V,scrollBehavior:function(){return{x:0,y:0}}}),P=j,I=a("f309");n["a"].use(I["a"]);var R=new I["a"]({}),z=a("c4e8"),B=a.n(z);n["a"].use(B.a),n["a"].config.productionTip=!1,new n["a"]({router:P,vuetify:R,render:function(t){return t(O)}}).$mount("#app")}});
//# sourceMappingURL=app.f2060bdb.js.map