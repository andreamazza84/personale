(function(t){function e(e){for(var i,r,n=e[0],c=e[1],l=e[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function r(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"42db7459"}[t]+".js"}function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=r(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b0f":function(t,e,a){t.exports=a.p+"img/nebbia.38629281.jpg"},"0d9e":function(t,e,a){t.exports=a.p+"img/jumbo.d53913dd.jpg"},"4cf8":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},s=[]},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("BaseNavbar"),i("v-main",[i("section",{attrs:{id:"hero"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-img",{attrs:{height:"calc(100vh - "+t.$vuetify.application.top+"px)",src:a("0d9e")}},[i("v-theme-provider",{attrs:{dark:""}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[i("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" ANDREA MAZZA ")]),i("br"),i("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" Web Devoloper ")])]),i("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[i("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),i("section",{attrs:{id:"about-me"}},[i("div",{staticClass:"py-12"}),i("v-container",{staticClass:"text-center"},[i("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("SU DI ME")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"1140"}},[i("div",{staticClass:"biografy"},[i("p",{staticClass:"brackets-extrems"},[t._v("Sviluppatore Web con competenze in "),i("br"),t._v(" HTML, SASS, JavaScript, jQuery, Vue, Vuetify, PHP, MySQL e Laravel.")]),i("div",{staticClass:"brackets-wrap"},[i("p",{staticClass:"brackets"},[t._v("{")]),i("p",{staticClass:"brackets-long-text"},[t._v("Il mio percorso professionale è iniziato all'interno di ARPA EMR, con il proseguimento del lavoro di tesi specialistica per lo sviluppo di un programma per la valutazione dell'impatto ambientale dei sistemi di produzione dell'energia elettrica e cogenerativi alimentati a combustibili rinnovabili. Dopo quest'esperienza ho spostato il mio interesse dalla meccanica all'energetica. In questa veste ho lavorato per 6 anni presso l'INFN-CNAF occupandomi principalmente del cooling del centro di calcolo TIER 1 come tecnologo, ruolo trasversale che abbraccia sia la ricerca e sviluppo sia l'implementazione sul campo.")]),i("p",{staticClass:"brackets-long-text"},[t._v("Ho investito in formazione concludendo un Master in Gestione dell'Energia per Edifici e Infrastrutture, seguendo corsi di programmazione di BMS presso Schneider Electric e abilitandomi come PES-PAV/PEI. Ho lavorato ancora nel settore, prima per TESI Engineering a Trento e, più recentemente, per AWS a Milano. Quest'ultima esperienza mi ha consentito di avvicinarmi maggiormente al mondo digitale e di cogliere l'opportunità per un cambio di rotta verso lo sviluppo web.")]),i("p",{staticClass:"brackets"},[t._v("}")])]),i("p",{staticClass:"brackets-extrems"},[t._v("Boolean Careers sullo sviluppo Front-end e Back-end di siti web.")])])]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-html5"})]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-css3-alt"})]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-vuejs"})]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-js-square"})]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-sass"})]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-wordpress"})]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-laravel"})]),i("v-avatar",{staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{staticClass:"fab fa-php"})]),i("div"),i("v-row",[i("v-col",{staticClass:"mt-100"},[i("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio")}}},[i("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1),i("div",{staticClass:"py-12"})],1),i("section",{attrs:{id:"portfolio"}},[i("div",{staticClass:"py-12"}),i("v-container",[i("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Portfolio")]),i("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 align-center",attrs:{"max-width":"1140"}},[i("p",[t._v("Alcuni dei lavori sviluppati durante il Corso Boolean Careers 2020/21")])]),i("v-row",t._l(t.articles,(function(e,a){var s=e.src,o=e.src_h,r=(e.text,e.title);return i("v-col",{key:a,attrs:{cols:"12",md:"4"}},[i("v-img",{staticClass:"project mb-4",attrs:{src:a===t.counter?o:s,"max-width":"489","max-height":"275","aspect-ratio":"1.7778",cover:""},on:{mouseover:function(e){return t.hover(a)},mouseleave:function(e){return t.blur()}}}),i("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(r)}})],1)})),1),i("v-row",[i("v-col",{staticClass:"mt-100"},[i("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[i("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1),i("div",{staticClass:"py-12"})],1),i("section",{attrs:{id:"stats"}},[i("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:600,src:a("0b0f")}})],1),i("v-sheet",{attrs:{id:"contact",dark:"",tag:"section",tile:""}},[i("div",{staticClass:"py-12"}),i("v-container",[i("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contatti")]),i("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-theme-provider",{attrs:{light:""}},[i("BaseContact")],1)],1),i("div",{staticClass:"py-12"})],1)],1),i("v-footer",{staticClass:"justify-center",attrs:{id:"footer","min-height":"100"}},[i("div",{staticClass:"title font-weight-light text-center",attrs:{id:"contacts"}},[i("ul",{staticClass:"contacts-list"},[i("li",[i("i",{staticClass:"far fa-envelope"}),t._v("andrea.mazza84@gmail.com")]),i("li",[i("i",{staticClass:"fas fa-phone"}),t._v("+39 329 86 29 509 ")]),i("li",[t._v("© Copyright "+t._s((new Date).getFullYear())+" - Andrea Mazza")])])])])],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{id:"navbar",app:"",height:"100","elevate-on-scroll":""}},[a("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[a("v-img",{attrs:{contain:"","max-height":"70%",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"}})],1),a("v-toolbar-title",{staticClass:"font-weight-black headline"},[t._v(" PORTFOLIO ")])],1)},n=[],c=a("2877"),l=a("6544"),u=a.n(l),d=a("40dc"),p=a("8212"),v=a("adda"),m=a("2a7f"),f={},b=Object(c["a"])(f,r,n,!1,null,null,null),h=b.exports;u()(b,{VAppBar:d["a"],VAvatar:p["a"],VImg:v["a"],VToolbarTitle:m["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Nome*",solo:"","error-messages":t.nameErrors},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Email*",solo:"","error-messages":t.emailErrors},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Oggetto*",solo:"","error-messages":t.objectErrors},on:{input:function(e){return t.$v.object.$touch()},blur:function(e){return t.$v.object.$touch()}}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{staticClass:"form-input",attrs:{flat:"",label:"Scrivi qua*",solo:"","error-messages":t.textErrors},on:{input:function(e){return t.$v.text.$touch()},blur:function(e){return t.$v.text.$touch()}}})],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{staticClass:"btn-submit",attrs:{"x-large":""}},[t._v(" Submit ")])],1)],1)},x=[],C=(a("b0c0"),a("1dce")),y=a.n(C),w=a("b5ae"),$={mixins:[C["validationMixin"]],validations:{name:{required:w["required"],maxLength:Object(w["maxLength"])(30)},email:{required:w["required"],email:w["email"]},object:{required:w["required"]},text:{required:w["required"]},checkbox:{checked:function(t){return t}}},data:function(){return{name:"",email:"",select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},computed:{checkboxErrors:function(){var t=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&t.push("Devi accettare le condizioni per continuare"),t):t},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&t.push("Richiesto"),!this.$v.name.required&&t.push("Richiesto"),t):t},objectErrors:function(){var t=[];return this.$v.object.$dirty?(!this.$v.object.maxLength&&t.push("Richiesto"),!this.$v.object.required&&t.push("Richiesto"),t):t},textErrors:function(){var t=[];return this.$v.text.$dirty?(!this.$v.text.maxLength&&t.push("Richiesto"),!this.$v.text.required&&t.push("Richiesto"),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Inserisci un indirizzo email valido"),!this.$v.email.required&&t.push("Richiesto"),t):t}},methods:{submit:function(){this.$v.$touch()},clear:function(){this.$v.$reset(),this.name="",this.email="",this.select=null,this.checkbox=!1}}},_=$,k=a("8336"),j=a("62ad"),z=a("0fd9"),E=a("8654"),V=a("a844"),S=Object(c["a"])(_,g,x,!1,null,null,null),q=S.exports;u()(S,{VBtn:k["a"],VCol:j["a"],VRow:z["a"],VTextField:E["a"],VTextarea:V["a"]});var O={name:"App",components:{BaseNavbar:h,BaseContact:q},data:function(){return{counter:-1,src_img:"",articles:[{src:"/img-boolean/Boolflix.png",src_h:"/img-boolean/Boolflix-h.png",title:"Boolflix"},{src:"/img-boolean/boolzapp.png",src_h:"/img-boolean/boolzapp-h.png",title:"Boolzapp"},{src:"/img-boolean/hubspot.png",src_h:"/img-boolean/hubspot-h.png",title:"HubSpot"},{src:"/img-boolean/spotify.png",src_h:"/img-boolean/spotify-h.png",title:"Spotify"},{src:"/img-boolean/helbiz.png",src_h:"/img-boolean/helbiz-h.png",title:"Helbiz"},{src:"/img-boolean/digitalOcean.png",src_h:"/img-boolean/digitalOcean-h.png",title:"DigitalOcean"}],features:[{icon:"mdi-account-group-outline",title:"Vibrant Community",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"},{icon:"mdi-update",title:"Frequent Updates",text:"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."},{icon:"mdi-shield-outline",title:"Long-term Support",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"}],stats:[["24k","Github Stars"],["330+","Releases"],["1m","Downloads/mo"],["5m","Total Downloads"]],colors:{background:{primary:"#c4d2ddee",complementary:"#ddcfc4ee",triadic:"#d2ddc4ee",dark:"#171718"},font:{clear:"#fdfdfd",dark:"#171718"}}}},methods:{hover:function(t){this.counter=t,console.log(t)},blur:function(){this.counter=-1}}},A=O,P=(a("5c0b"),a("7496")),I=a("a523"),T=a("ce7e"),F=a("553a"),B=a("132d"),R=a("f6c4"),L=a("8b9c"),M=a("6b53"),D=a("8dd9"),H=a("480e"),N=Object(c["a"])(A,s,o,!1,null,null,null),J=N.exports;u()(N,{VApp:P["a"],VAvatar:p["a"],VBtn:k["a"],VCol:j["a"],VContainer:I["a"],VDivider:T["a"],VFooter:F["a"],VIcon:B["a"],VImg:v["a"],VMain:R["a"],VParallax:L["a"],VResponsive:M["a"],VRow:z["a"],VSheet:D["a"],VThemeProvider:H["a"]});a("d3b7"),a("3ca3"),a("ddb0");var Q=a("8c4f"),W=a("bb51");i["a"].use(Q["a"]);var G=[{path:"/",name:"Home",component:W["default"]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],U=new Q["a"]({mode:"history",base:"/",routes:G}),Z=U,Y=a("2f62");i["a"].use(Y["a"]);var K=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=a("ade3"),tt=(a("1f54"),a("5363"),a("f309")),et=a("f107");i["a"].use(tt["a"]);var at=new tt["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{it:et["a"]},current:"it"},icons:Object(X["a"])({iconfont:"fa4"},"iconfont","mdi")});a("d5e8"),a("7f10");i["a"].use(y.a),i["a"].config.productionTip=!1,new i["a"]({router:Z,store:K,vuetify:at,render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"7ad4":function(t,e,a){"use strict";var i=a("9cae"),s=a.n(i);e["default"]=s.a},"9c0c":function(t,e,a){},"9cae":function(t,e){},bb51:function(t,e,a){"use strict";var i=a("4cf8"),s=a("7ad4"),o=a("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports}});
//# sourceMappingURL=app.2c47113b.js.map