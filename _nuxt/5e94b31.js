(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{285:function(t,o,e){"use strict";e.r(o);e(38);var l=e(287),n=e.n(l),c={props:["listId"],created:function(){this.getMovies()},data:function(){return{model:null,showCard:!1,dialog:!1,moviesItems:[],dislike:!1,like:!1}},methods:{openCard:function(){this.showCard=!this.showCard},getMovies:function(){var t=this;n.a.get("https://api.themoviedb.org/3/list/".concat(this.listId,"?api_key=").concat("82f9458c91622e439574d570997b3a5f")).then((function(o){t.moviesItems=o.data.items})).catch((function(t){console.error(t)}))},setDialog:function(t){this.$store.dispatch("setMovie",t)}},computed:{showInside:function(){return this.showCard?{overflow:"visible !important"}:""}}},r=e(68),d=e(274),v=e.n(d),m=e(409),h=e(408),f=e(401),_=e(403),k=e(336),C=e(397),w=e(410),y=e(402),x=e(281),S=e(298),V=e(405),I=e(411),component=Object(r.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"8",dark:""}},[e("v-slide-group",{staticClass:"pa-4",class:t.showCard&&"d-visible",attrs:{"show-arrows":""},model:{value:t.model,callback:function(o){t.model=o},expression:"model"}},t._l(t.moviesItems,(function(o){return e("v-slide-item",{key:o.id,scopedSlots:t._u([{key:"default",fn:function(l){var n=l.active,c=l.toggle;return[e("v-card",{staticClass:"ma-4",staticStyle:{border:"none"},attrs:{color:"grey lighten-1",height:"180",width:"300"},on:{mouseenter:function(o){c(),t.openCard()},mouseleave:function(o){c(),t.openCard()}}},[e("v-img",{staticClass:"img-small",attrs:{src:"https://image.tmdb.org/t/p/w500/"+o.backdrop_path}},[e("p",{staticClass:"text-image-small"},[t._v(t._s(o.title))])]),t._v(" "),n?e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("v-scale-transition",[e("v-card",{staticClass:"ma-4 card-nested-one",attrs:{color:"#262626"}},[e("v-img",{staticStyle:{cursor:"pointer"},attrs:{height:"250",src:"https://image.tmdb.org/t/p/w500/"+o.backdrop_path},on:{click:function(e){t.dialog=!0,t.setDialog(o)}}}),t._v(" "),e("v-row",[e("v-col",{staticStyle:{padding:"15px"},attrs:{cols:"12"}},[e("div",{staticStyle:{display:"flex"}},[e("div",[e("v-btn",{staticClass:"mx-2",attrs:{fab:"","x-small":"",color:"#383838"},on:{click:function(o){t.like=!t.like}}},[t.like?e("v-icon",{staticStyle:{color:"#04ac84","background-color":"transparent","font-size":"20px"}},[t._v("\n                            mdi-thumb-up\n                          ")]):e("v-icon",{staticStyle:{color:"#04ac84","background-color":"transparent","font-size":"20px"}},[t._v("\n                            mdi-thumb-up-outline\n                          ")])],1)],1),t._v(" "),e("div",[e("v-btn",{staticClass:"mx-2",attrs:{fab:"","x-small":"",color:"#383838"},on:{click:function(o){t.dislike=!t.dislike}}},[t.dislike?e("v-icon",{staticStyle:{color:"#04ac84","background-color":"transparent","font-size":"20px"}},[t._v("\n                            mdi-thumb-down\n                          ")]):e("v-icon",{staticStyle:{color:"#04ac84","background-color":"transparent","font-size":"20px"}},[t._v("\n                            mdi-thumb-down-outline\n                          ")])],1)],1),t._v(" "),e("div",{staticStyle:{"margin-left":"63%"}},[e("v-btn",{staticClass:"mx-2",attrs:{fab:"","x-small":"",color:"#383838"},on:{click:function(e){t.dialog=!0,t.setDialog(o)}}},[e("v-icon",{staticStyle:{color:"#04ac84","background-color":"transparent","font-size":"20px"}},[t._v("\n                            mdi-arrow-down-drop-circle-outline\n                          ")])],1)],1)])]),t._v(" "),e("v-col",{staticClass:"py-0",staticStyle:{padding:"15px"},attrs:{cols:"12"}},[e("p",{staticClass:"text-image-small ml-2",staticStyle:{cursor:"pointer"},on:{click:function(e){t.dialog=!0,t.setDialog(o)}}},[t._v("\n                      "+t._s(o.title)+"\n                    ")])]),t._v(" "),e("v-col",{staticStyle:{cursor:"pointer"},attrs:{cols:"12"},on:{click:function(e){t.dialog=!0,t.setDialog(o)}}},[e("div",{staticClass:"py-0",staticStyle:{display:"flex","justify-content":"space-around"}},[e("p",[t._v("◦ Emocionante")]),t._v(" "),e("p",[t._v("◦ Acción")]),t._v(" "),e("p",[t._v("◦ Aventuras")])])])],1)],1)],1)],1):t._e()],1)]}}],null,!0)})})),1)],1),t._v(" "),e("v-row",{staticStyle:{heigth:"auto",width:"auto"},attrs:{justify:"center"}},[e("v-dialog",{attrs:{justify:"center",scrollable:"","max-width":"80vw","max-heigth":"80vh"},model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[e("v-card",{staticClass:"modal-card",attrs:{color:"#262626",height:"fit-content"}},[e("v-img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+this.$store.state.urlImage}}),t._v(" "),e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-rating",{staticClass:"px-5 pt-2",attrs:{"empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",size:"30",color:"#04AC84","background-color":"#04AC84",value:Number(this.$store.state.voteAverage)/2}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"title-dialog"},[t._v(t._s(this.$store.state.title))]),t._v(" "),e("p",{staticClass:"text-dialog"},[t._v(t._s(this.$store.state.description))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;v()(component,{VBtn:m.a,VCard:h.a,VCol:f.a,VDialog:_.a,VIcon:k.a,VImg:C.a,VRating:w.a,VRow:y.a,VScaleTransition:x.b,VSheet:S.a,VSlideGroup:V.a,VSlideItem:I.a})},286:function(t,o,e){t.exports=e.p+"img/fantastic.432c916.jpg"},407:function(t,o,e){"use strict";e.r(o);e(55),e(56);var l={components:{},created:function(){this.sortMovies()},computed:{},data:function(){return{listSort:[]}},methods:{sortMovies:function(){for(var t=0;t<11;t++){var o=Math.floor(79*Math.random()+1);this.listSort.includes(o)||this.listSort.push(o)}}}},n=e(68),component=Object(n.a)(l,(function(){var t=this,o=t.$createElement,l=t._self._c||o;return l("div",{staticStyle:{"background-color":"black",heigth:"auto","padding-bottom":"200px"}},[l("img",{staticClass:"cover-image",attrs:{src:e(286)}}),t._v(" "),t._l(t.listSort,(function(t){return l("Slide",{key:t,attrs:{listId:t}})}))],2)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Slide:e(285).default})}}]);