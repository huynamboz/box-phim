(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5],{285:function(t,e,o){"use strict";o.r(e);var r=o(286),c=o.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(n);e.default=c.a},286:function(t,e){},287:function(t,e,o){t.exports=o.p+"img/play1.45cc6e0.png"},288:function(t,e,o){t.exports=o.p+"img/star.36cb6f3.png"},289:function(t,e,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("4d3cc868",content,!0,{sourceMap:!1})},290:function(t,e,o){var content=o(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("60205238",content,!0,{sourceMap:!1})},291:function(t,e,o){var content=o(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("b3bf21e4",content,!0,{sourceMap:!1})},292:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("108ad3e4",content,!0,{sourceMap:!1})},293:function(t,e,o){"use strict";var r=o(2),c=o(80).findIndex,n=o(134),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n(l)},294:function(t,e,o){t.exports=o.p+"img/fire.552477a.png"},295:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMThhNy45NTIgNy45NTIgMCAwIDAgNC44OTctMS42ODhsNC4zOTYgNC4zOTYgMS40MTQtMS40MTQtNC4zOTYtNC4zOTZBNy45NTIgNy45NTIgMCAwIDAgMTggMTBjMC00LjQxMS0zLjU4OS04LTgtOHMtOCAzLjU4OS04IDggMy41ODkgOCA4IDh6bTAtMTRjMy4zMDkgMCA2IDIuNjkxIDYgNnMtMi42OTEgNi02IDYtNi0yLjY5MS02LTYgMi42OTEtNiA2LTZ6Ii8+PC9zdmc+"},296:function(t,e,o){"use strict";o.r(e);o(28);var r=[function(){var t=this._self._c;return t("p",{staticClass:"tabRight__title"},[this._v("Film hot "),t("img",{staticClass:"film-hot-img",attrs:{src:o(294),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"star"},[t("img",{staticClass:"star--img",attrs:{src:o(288),alt:""}}),this._v("\n                    4.2/5\n                ")])}],c={props:["film"],data:function(){return{dataFilm:this.film,filmHot:[10,11,12,13,14],pathImage:"https://img.hiephanhthienha.com/uploads/movies/"}},mounted:function(){console.log("hhhhhhhhhhhhhhhhh",this.film)},methods:{}},n=(o(299),o(46)),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabRight"},[t._m(0),t._v(" "),e("div",{staticClass:"list__hot-film"},t._l(t.filmHot,(function(r){var c,n,l,d;return e("div",{staticClass:"list__hot-film--item",attrs:{title:null===(c=t.film[r])||void 0===c?void 0:c.name}},[e("div",{staticClass:"list__hot-film--item__bg"},[e("img",{staticClass:"list__hot-film--item__bg--img",attrs:{src:t.pathImage+(null===(n=t.film[r])||void 0===n?void 0:n.poster_url),alt:""}})]),t._v(" "),e("div",{staticClass:"list__hot-film--item__info"},[e("div",{staticClass:"list__hot-film--item__info--play-btn",on:{click:function(e){var o;return t.$router.push("/film/".concat(null===(o=t.film[r])||void 0===o?void 0:o.slug))}}},[e("img",{staticClass:"list__hot-film--item__info--play",attrs:{src:o(287),alt:""}})]),t._v(" "),e("div",{staticClass:"list__film-hot-text"},[e("p",{staticClass:"list__hot-film--item__info--title"},[t._v(t._s(null===(l=t.film[r])||void 0===l?void 0:l.name))]),t._v(" "),e("p",{staticClass:"list__hot-film--item__info--time"},[t._v(t._s(null===(d=t.film[r])||void 0===d?void 0:d.year))])]),t._v(" "),e("div",{staticClass:"hr"}),t._v(" "),t._m(1,!0)])])})),0)])}),r,!1,null,"1d0060bc",null);e.default=component.exports},297:function(t,e,o){"use strict";o.r(e);o(29),o(135),o(28);var r={data:function(){return{urlSearch:"https://ophim1.cc/_next/data/x5eGH4wObN-EpnueF2sPG/tim-kiem.json?keyword=",keySearch:"",isSearching:!1,pathImage:"https://img.hiephanhthienha.com/uploads/movies/",searchResult:[]}},mounted:function(){var t=this;document.addEventListener("click",(function(){t.isSearching=!1}))},methods:{removeSearch:function(){this.keySearch="",this.isSearching=!1},search:function(){var t=this;this.keySearch.length>0?this.isSearching=!0:this.isSearching=!1,this.keySearch.length>0?this.$axios.$get(this.urlSearch+this.keySearch).then((function(e){t.searchResult=e.pageProps.data.items,console.log(t.searchResult)})):this.searchResult=[]}}},c=(o(308),o(46)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container__search"},[e("div",{staticClass:"bx-search",on:{click:t.search}},[e("img",{attrs:{src:o(295),alt:""}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keySearch,expression:"keySearch"}],attrs:{type:"text",placeholder:"Search series or movie..."},domProps:{value:t.keySearch},on:{input:[function(e){e.target.composing||(t.keySearch=e.target.value)},t.search]}}),t._v(" "),e("img",{staticClass:"removeSearch",staticStyle:{width:"25px",height:"25px"},attrs:{src:o(307),alt:""},on:{click:function(e){return t.removeSearch()}}}),t._v(" "),t.isSearching?e("div",{staticClass:"search"},t._l(t.searchResult,(function(o){return e("div",{staticClass:"search__item",on:{click:function(e){return t.$router.push("/film/".concat(null==o?void 0:o.slug))}}},[e("div",{staticClass:"search__item--thumb"},[e("img",{staticClass:"search__item--thumb--img",attrs:{src:t.pathImage+(null==o?void 0:o.thumb_url),alt:""}})]),t._v(" "),e("div",{staticClass:"search__item--name"},[e("p",{staticClass:"film__name"},[t._v(t._s(null==o?void 0:o.name))]),t._v(" "),e("p",{staticClass:"film__year"},[t._v(t._s(null==o?void 0:o.year))])])])})),0):t._e()])}),[],!1,null,"731585f7",null);e.default=component.exports},298:function(t,e,o){"use strict";o.r(e);o(28),o(293),o(200);var r={props:{listSaved:{type:Array,default:[]}},data:function(){return{countSaved:0,isOpenBM:!1}},watch:{listSaved:function(t){this.countSaved=this.listSaved.length}},mounted:function(){},methods:{removeFavou:function(t){var e=this.listSaved.findIndex((function(e){return e._id===t}));this.listSaved.splice(e,1),localStorage.setItem("listSaved",JSON.stringify(this.listSaved)),this.countSaved=this.listSaved.length},openBookmark:function(){this.isOpenBM=!this.isOpenBM}}},c=(o(312),o(46)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"saved"},[e("img",{staticClass:"icon__saved",attrs:{src:o(310),alt:""},on:{click:function(e){return t.openBookmark()}}}),t._v(" "),e("div",{staticClass:"count__saved",on:{click:function(e){return t.openBookmark()}}},[t._v(t._s(t.countSaved))]),t._v(" "),t.isOpenBM?e("div",{staticClass:"bookmark__container"},[e("div",{staticClass:"bookMark"},t._l(t.listSaved,(function(r){return e("div",{staticClass:"bookMark__item",on:{click:function(e){return t.$router.push("/film/".concat(null==r?void 0:r.slug))}}},[e("div",{staticClass:"bookmark__item-content"},[e("div",{staticClass:"bookMark__item--thumb"},[e("img",{staticClass:"bookMark__item--thumb--img",attrs:{src:null==r?void 0:r.thumb_url,alt:""}})]),t._v(" "),e("div",{staticClass:"bookMark__item--name"},[e("p",{staticClass:"film__name"},[t._v(t._s(null==r?void 0:r.name))]),t._v(" "),e("p",{staticClass:"film__year"},[t._v(t._s(null==r?void 0:r.year))])])]),t._v(" "),e("div",{staticClass:"bookMark__remove",on:{click:function(e){return t.removeFavou(null==r?void 0:r._id)}}},[e("img",{staticClass:"bookMark__remove-img",attrs:{src:o(311),alt:""}})])])})),0)]):t._e()])}),[],!1,null,"96138bde",null);e.default=component.exports},299:function(t,e,o){"use strict";o(289)},300:function(t,e,o){var r=o(132)(!1);r.push([t.i,".tabRight[data-v-1d0060bc]{margin-left:25px}.list__hot-film--item[data-v-1d0060bc]{position:relative;margin-bottom:20px;border-radius:11px}.list__hot-film--item__bg--img[data-v-1d0060bc]{width:260px;height:150px;border-radius:11px;-o-object-fit:cover;object-fit:cover}.list__hot-film--item__info--play[data-v-1d0060bc]{width:25px;height:25px;display:block}.list__hot-film--item__info--play-btn[data-v-1d0060bc]{width:28px;display:flex;justify-content:center;align-items:center;background-color:hsla(0,0%,56.1%,.783);padding:2px;border-radius:50%;height:28px}.list__hot-film--item__info--play-btn[data-v-1d0060bc]:hover{cursor:pointer;background-color:#606060;transition:.4s}p[data-v-1d0060bc]{margin:0}.list__film-hot-text[data-v-1d0060bc]{margin:0 10px;color:#fff}.list__hot-film--item__info--title[data-v-1d0060bc]{font-size:.9em;width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list__hot-film--item__info--time[data-v-1d0060bc]{font-size:.8em;font-weight:300;line-height:10px}.star--img[data-v-1d0060bc]{width:12px;height:12px;margin:0 5px}.hr[data-v-1d0060bc]{height:70%;width:.5px;margin:0 5px;background-color:#fff}.star[data-v-1d0060bc]{color:#fff;font-size:.9em}.list__hot-film--item__info[data-v-1d0060bc]{position:absolute;bottom:0;display:flex;justify-content:center;align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);width:100%;height:50px;border-radius:11px}.tabRight__title[data-v-1d0060bc]{margin-top:45px;font-size:1.2em;font-weight:500;margin-bottom:15px}.film-hot-img[data-v-1d0060bc]{width:20px;height:20px;margin-left:5px}@media (max-width:576px){.tabRight[data-v-1d0060bc]{margin:0}.list__hot-film--item__bg--img[data-v-1d0060bc]{width:100%}}",""]),t.exports=r},301:function(t,e,o){"use strict";o.r(e);var r=o(314),c=o(285);for(var n in c)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return c[t]}))}(n);o(305);var l=o(46),component=Object(l.a)(c.default,r.a,r.b,!1,null,"04b4cb5b",null);e.default=component.exports},302:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgM0g0Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTRjMCAxLjEwMy44OTcgMiAyIDJoMTZjMS4xMDMgMCAyLS44OTcgMi0yVjVjMC0xLjEwMy0uODk3LTItMi0yem0uMDAxIDZjLS4wMDEgMC0uMDAxIDAgMCAwaC0uNDY2bC0yLjY2Ny00SDIwbC4wMDEgNHpNOS41MzUgOSA2Ljg2OCA1aDIuNTk3bDIuNjY3IDRIOS41MzV6bTUgMC0yLjY2Ny00aDIuNTk3bDIuNjY3IDRoLTIuNTk3ek00IDVoLjQ2NWwyLjY2NyA0SDRWNXptMCAxNHYtOGgxNmwuMDAyIDhINHoiLz48L3N2Zz4="},303:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNzA3IDMuMjkzQS45OTYuOTk2IDAgMCAwIDEzIDNINGExIDEgMCAwIDAtMSAxdjljMCAuMjY2LjEwNS41Mi4yOTMuNzA3bDggOGEuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDktOWEuOTk5Ljk5OSAwIDAgMCAwLTEuNDE0bC04LTh6TTEyIDE5LjU4NmwtNy03VjVoNy41ODZsNyA3TDEyIDE5LjU4NnoiLz48Y2lyY2xlIGN4PSI4LjQ5NiIgY3k9IjguNDk1IiByPSIxLjUwNSIvPjwvc3ZnPg=="},304:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiLz48cGF0aCBkPSJNMTggMTlINVY2aDhjMC0uNzEyLjE1My0xLjM4Ny40MjItMkg1Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTNjMCAxLjEwMy44OTcgMiAyIDJoMTNjMS4xMDMgMCAyLS44OTcgMi0ydi04LjQyMkE0Ljk2MiA0Ljk2MiAwIDAgMSAxOCAxMXY4eiIvPjwvc3ZnPg=="},305:function(t,e,o){"use strict";o(290)},306:function(t,e,o){var r=o(132)(!1);r.push([t.i,".tabLeft[data-v-04b4cb5b]{padding:0 50px;height:100vh;position:fixed;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;top:0;left:0;z-index:1}.avatar[data-v-04b4cb5b]{-o-object-fit:cover;object-fit:cover;width:50px;height:50px;border-radius:50%;margin:20px 0}",""]),t.exports=r},307:function(t,e,o){t.exports=o.p+"img/close.7147934.png"},308:function(t,e,o){"use strict";o(291)},309:function(t,e,o){var r=o(132)(!1);r.push([t.i,".container__search[data-v-731585f7]{display:flex;align-items:center}.search[data-v-731585f7]{position:absolute;overflow-y:auto;width:350px;height:250px;left:-17px;border-radius:15px;top:56px;margin-top:15px;padding:10px 5px 0;z-index:2;background-color:#fff;box-shadow:1px 0 20px 0 rgba(0,0,0,.21);animation:fade-731585f7 .3s;transition:.5s}.bx-search[data-v-731585f7]{width:30px;height:30px;margin-top:6px;margin-left:10px}.search[data-v-731585f7]::-webkit-scrollbar{width:5px}.search[data-v-731585f7]::-webkit-scrollbar-track{background:transparent}.search[data-v-731585f7]::-webkit-scrollbar-thumb{background:#f96962}@keyframes fade-731585f7{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.removeSearch[data-v-731585f7]:hover{cursor:pointer;border-radius:50%;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.search__item[data-v-731585f7]{display:flex;padding:5px 10px;align-items:center;border-radius:15px}.search__item[data-v-731585f7]:hover{cursor:pointer;background-color:#f2f2f2}p[data-v-731585f7]{margin:0}.search__item--thumb--img[data-v-731585f7]{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.search__item--name[data-v-731585f7]{margin-left:10px}.film__name[data-v-731585f7]{font-size:14px;font-weight:600}.film__year[data-v-731585f7]{font-size:12px;margin-bottom:5px}input[data-v-731585f7]{border:none;outline:none;font-size:16px;font-weight:500;padding-right:40px;height:30px;background-color:transparent}",""]),t.exports=r},310:function(t,e,o){t.exports=o.p+"img/save-header.818641f.png"},311:function(t,e,o){t.exports=o.p+"img/remove.8e47ad1.png"},312:function(t,e,o){"use strict";o(292)},313:function(t,e,o){var r=o(132)(!1);r.push([t.i,'.saved[data-v-96138bde]{margin-left:20px;position:relative;z-index:2}.count__saved[data-v-96138bde]{position:absolute;top:-5px;right:-5px;background-color:#fc7770;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;justify-content:center;align-items:center;font-size:12px}.bookMark__remove-img[data-v-96138bde]{width:20px;height:20px;float:right;position:relative;z-index:2}.icon__saved[data-v-96138bde]{width:30px;height:30px;margin-left:10px;margin-top:6px}.bookmark__container[data-v-96138bde]:after{position:absolute;content:"";width:0;height:0;top:-18px;left:20px;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #fff}.bookmark__container[data-v-96138bde]{position:absolute;left:-17px;top:40px;margin-top:15px;padding:10px 0;background-color:#fff;border-radius:15px;z-index:2;transition:.5s;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.bookMark[data-v-96138bde]{overflow-y:auto;width:350px;height:250px;padding:10px 5px 0;animation:fade-96138bde .3s}.saved[data-v-96138bde]:hover{cursor:pointer}.bookMark[data-v-96138bde]::-webkit-scrollbar{width:5px}.bookMark[data-v-96138bde]::-webkit-scrollbar-track{background:transparent}.bookMark[data-v-96138bde]::-webkit-scrollbar-thumb,.bookMark[data-v-96138bde]::-webkit-scrollbar-thumb:hover{background:#62c7f9}@keyframes fade-96138bde{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.removebookMark[data-v-96138bde]:hover{cursor:pointer;border-radius:50%;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.bookMark__item[data-v-96138bde]{padding:5px 10px;border-radius:15px;justify-content:space-between}.bookMark__item[data-v-96138bde],.bookmark__item-content[data-v-96138bde]{display:flex;align-items:center}.bookMark__item[data-v-96138bde]:hover{cursor:pointer;background-color:#f2f2f2}p[data-v-96138bde]{margin:0}.bookMark__item--thumb--img[data-v-96138bde]{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.bookMark__item--name[data-v-96138bde]{margin-left:10px}.film__name[data-v-96138bde]{font-size:14px;font-weight:600}.film__year[data-v-96138bde]{font-size:12px;margin-bottom:5px}@media (max-width:576px){.bookmark__container[data-v-96138bde]:after{position:absolute;content:"";width:0;height:0;top:-18px;left:65%;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #fff}.bookmark__container[data-v-96138bde]{position:absolute;left:-600%}}',""]),t.exports=r},314:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return c}));var r=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},c=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"tabLeft"},[e("img",{staticClass:"avatar",attrs:{src:"https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/6/l65_coral-rerelease_2009_vietnam_1sht_1_.jpg",alt:""}}),t._v(" "),e("div",{staticClass:"list__menu"},[e("div",{staticClass:"menu__viewRecent"},[e("img",{attrs:{src:o(302),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__favour"},[e("img",{attrs:{src:o(303),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__notify"},[e("img",{attrs:{src:o(304),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__setting"})]),t._v(" "),e("div",{staticClass:"film__saved"},[e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"})])])}]},318:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("6ed1d1fe",content,!0,{sourceMap:!1})},331:function(t,e,o){"use strict";o(318)},332:function(t,e,o){var r=o(132)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap);"]),r.push([t.i,'*[data-v-355ce0c8]{font-family:"Inter",sans-serif}.header[data-v-355ce0c8]{display:flex;align-items:center}.header__title[data-v-355ce0c8]{font-size:20px;font-weight:600;margin:20px 0}.header__search[data-v-355ce0c8]{display:flex;max-height:56px;justify-content:center;background-color:#f0f4f7;padding:10px 20px 10px 10px;border-radius:15px;align-items:center;position:relative}.header-main__title[data-v-355ce0c8]{font-size:1.6em;font-weight:600;margin-right:50px}.bx-search[data-v-355ce0c8]{width:30px;height:30px;margin-top:6px;margin-left:10px}.header__search input[data-v-355ce0c8]{border:none;outline:none;font-size:16px;font-weight:500;padding-right:40px;height:30px;background-color:transparent}.header__search input[data-v-355ce0c8]::-moz-placeholder{color:#d1d3d7}.header__search input[data-v-355ce0c8]::placeholder{color:#d1d3d7}.tabMain[data-v-355ce0c8]{padding:0 10px 0 150px;margin-top:40px}.film__lasted[data-v-355ce0c8]{display:flex;margin-top:40px}.lasted__item-1-bg[data-v-355ce0c8],.lasted__item-2-bg[data-v-355ce0c8]{position:relative}.lasted__item-1-bg--img[data-v-355ce0c8]{width:450px;height:252px;border-radius:28px;-o-object-fit:cover;object-fit:cover;display:block}.content__lasted-item--blur[data-v-355ce0c8]{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;background:linear-gradient(0deg,rgba(0,0,0,.7120973389355743),rgba(249,239,240,0));z-index:0;border-radius:28px}.lasted__item-1-name[data-v-355ce0c8]{width:350px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lasted__item-1-name[data-v-355ce0c8],.lasted__item-2-name[data-v-355ce0c8]{position:absolute;bottom:40px;font-size:1.1em;color:#fff;font-weight:500;left:35px}.lasted__item-2-name[data-v-355ce0c8]{width:100px}.lasted__item-1-year[data-v-355ce0c8]{bottom:15px}.lasted__item-1-year[data-v-355ce0c8],.lasted__item-2-year[data-v-355ce0c8]{position:absolute;color:#fff;font-weight:300;left:35px}.lasted__item-2-year[data-v-355ce0c8]{bottom:20px}.lasted__item-1-play[data-v-355ce0c8]{bottom:20px;right:25px;position:absolute;border-radius:50%;width:40px;height:40px;display:flex;justify-content:center;align-items:center;background-color:#8f8f8f}.blur__lasted-film[data-v-355ce0c8]{box-shadow:1px 0 20px 0 hsla(0,0%,67.8%,.78);border-radius:28px}.lasted__item-1-play[data-v-355ce0c8]:hover{cursor:pointer;transition:.5s;box-shadow:1px 0 20px 1px #e6e6e6}.lasted__item-2-play[data-v-355ce0c8]{bottom:20px;right:25px;position:absolute;border-radius:50%;width:40px;height:40px;display:flex;justify-content:center;align-items:center;opacity:.9;background-color:hsla(0,0%,44.3%,.83137)}.lasted__item-1-play-img[data-v-355ce0c8]{width:30px;height:30px}.lasted__item-1-tag[data-v-355ce0c8]{background-color:#fff;border-radius:20px;text-align:center;position:absolute;font-weight:500;padding:4px 18px;top:30px;left:40px}.lasted__item-1-tag--fire[data-v-355ce0c8]{width:20px;height:20px}.lasted__item-tag--icon[data-v-355ce0c8]{width:12px;height:12px}.lasted__item-2-tag[data-v-355ce0c8]{left:40px}.lasted__item-1-tag-star[data-v-355ce0c8],.lasted__item-2-tag[data-v-355ce0c8]{position:absolute;top:38px;color:#fff;font-weight:500}.lasted__item-1-tag-star[data-v-355ce0c8]{right:40px}.film__lasted-item-2[data-v-355ce0c8]{margin-left:30px}.lasted__item-2-bg--img[data-v-355ce0c8]{width:252px;height:252px;border-radius:28px;-o-object-fit:cover;object-fit:cover;display:block}.film__continue-watch--header[data-v-355ce0c8]{display:flex;align-items:center}.continue__watch-count[data-v-355ce0c8]{font-size:1em;margin:4px 20px 0;color:#d1d3d7;font-weight:500}.continue__watch-title[data-v-355ce0c8]{font-size:1.6em;font-weight:600}.film__continue-watch--list[data-v-355ce0c8]{display:flex;flex-wrap:wrap;margin-top:30px;max-width:560px}.film__continue-watch--item--bg--img[data-v-355ce0c8]{width:240px;height:160px;border-radius:20px;-o-object-fit:cover;object-fit:cover;display:block}.watch__item-bar--text[data-v-355ce0c8]{display:flex}p[data-v-355ce0c8]{margin:0}.film__continue-watch--container[data-v-355ce0c8]{display:flex;margin-top:40px}.film__continue-watch--item[data-v-355ce0c8]{margin-right:30px;margin-bottom:20px}.continue__watch-item-bar[data-v-355ce0c8]{padding:8px 10px;margin-top:10px;border-radius:10px;width:230px;display:flex;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:1px 0 20px 1px #e6e6e6}.watch__item-bar--text--name[data-v-355ce0c8]{width:110px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.8em;font-weight:500}.continue__watch-play[data-v-355ce0c8]:hover{cursor:pointer;transition:.5s;box-shadow:1px 0 20px 0 rgba(245,75,75,.59)}.continue__watch-play--img[data-v-355ce0c8]{width:20px;height:20px}.continue__watch-play[data-v-355ce0c8]{background-color:#f54b4b;display:flex;justify-content:center;align-items:center;border-radius:50%;width:30px;height:30px}.watch__item-bar--text--year[data-v-355ce0c8]{font-weight:500;font-size:.8em}.continue-watch-film-bg--img[data-v-355ce0c8]{width:200px;height:270px;border-radius:30px;-o-object-fit:cover;object-fit:cover;display:block}.continue-watch-film-bg[data-v-355ce0c8]{position:relative}.film__continue-watch-film p[data-v-355ce0c8]{font-weight:500}.continue-watch-film-bg-blur[data-v-355ce0c8]{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;background:linear-gradient(0deg,rgba(0,0,0,.7120973389355743) 25%,rgba(249,239,240,0) 77%);border-radius:30px;z-index:1}.continue-watch-film-star[data-v-355ce0c8]{position:absolute;top:20px;right:50%;transform:translateX(50%);color:#fff;font-weight:500}.continue-watch-film-name[data-v-355ce0c8]{position:absolute;bottom:60px;left:50%;transform:translateX(-50%);color:#fff;z-index:2;font-weight:500;width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.continue-watch-film-watchNow[data-v-355ce0c8]{position:absolute;bottom:20px;right:50%;transform:translateX(50%);background-color:#646b6b;width:130px;padding:5px;border-radius:10px;display:flex;color:#fff;z-index:2;align-items:center}.continue-watch-film-watchNow--img[data-v-355ce0c8]{width:20px;height:20px;margin-right:5px}.continue-watch-film-star--img[data-v-355ce0c8]{width:12px;height:12px}.tab-container[data-v-355ce0c8]{display:flex;justify-content:center}',""]),t.exports=r},334:function(t,e,o){"use strict";o.r(e);o(28);var r=[function(){var t=this._self._c;return t("div",{staticClass:"bx-search"},[t("img",{attrs:{src:o(295),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"lasted__item-1-tag"},[this._v("#1 in chart\n\n              "),t("img",{staticClass:"lasted__item-1-tag--fire",attrs:{src:o(294),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"lasted__item-1-tag-star"},[t("img",{staticClass:"lasted__item-tag--icon",attrs:{src:o(288),alt:""}}),this._v("\n              4.4/5\n            ")])},function(){var t=this._self._c;return t("div",{staticClass:"lasted__item-2-tag"},[t("img",{staticClass:"lasted__item-tag--icon",attrs:{src:o(288),alt:""}}),this._v("\n              4.2/5\n            ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"film__continue-watch--header"},[e("div",{staticClass:"continue__watch-title"},[t._v("Suggest watch")]),t._v(" "),e("div",{staticClass:"continue__watch-seemore"},[t._v("see more")])])},function(){var t=this._self._c;return t("div",{staticClass:"continue-watch-film-star"},[t("img",{staticClass:"continue-watch-film-star--img",attrs:{src:o(288),alt:""}}),this._v("\n              4.2/5\n            ")])}],c=o(10),n=(o(63),o(301)),l=o(296),d=o(297),m=o(298),_={components:{tabLeft:n.default,tabRight:l.default,search:d.default,bookmark:m.default},data:function(){return{film:[],listSaved:[],viewRecent:{},suggestFilm:[3,4],pathImage:"https://img.hiephanhthienha.com/uploads/movies/"}},mounted:function(){console.log(this.$route),this.fetchData(),this.listSaved=JSON.parse(localStorage.getItem("listSaved")),this.listSaved||(this.listSaved=[])},methods:{fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=6");case 2:o=e.sent,t.film=o.items,console.log("aaaaaaaaaa",t.film),localStorage.getItem("viewRecent")||(t.film[6].thumb_url=t.pathImage+t.film[10].thumb_url,t.film[6].poster_url=t.pathImage+t.film[10].poster_url,console.log(t.film[10]),localStorage.setItem("viewRecent",JSON.stringify(t.film[6]))),t.viewRecent=JSON.parse(localStorage.getItem("viewRecent"));case 7:case"end":return e.stop()}}),e)})))()}}},f=(o(331),o(46)),component=Object(f.a)(_,(function(){var t,e,r,c,n,l,d,m=this,_=m._self._c;return _("div",{attrs:{id:"app"}},[_("tab-left",{attrs:{film:m.film}}),m._v(" "),_("div",{staticClass:"tab-container"},[_("div",{staticClass:"tabMain"},[_("div",{staticClass:"header"},[_("div",{staticClass:"header-main__title"},[m._v("\n          Discover your movies.\n        ")]),m._v(" "),_("div",{staticClass:"header__search"},[m._m(0),m._v(" "),_("search")],1),m._v(" "),_("bookmark",{attrs:{"list-saved":m.listSaved}}),m._v(" "),_("div",{staticClass:"header__option"})],1),m._v(" "),_("div",{staticClass:"film__lasted"},[_("div",{staticClass:"film__lasted-item-1 blur__lasted-film",attrs:{title:null===(t=m.film[0])||void 0===t?void 0:t.name}},[_("div",{staticClass:"lasted__item-1-bg"},[_("img",{staticClass:"lasted__item-1-bg--img",attrs:{src:m.pathImage+(null===(e=m.film[0])||void 0===e?void 0:e.poster_url),alt:""}}),m._v(" "),_("div",{staticClass:"content__lasted-item--blur"}),m._v(" "),m._m(1),m._v(" "),m._m(2),m._v(" "),_("div",{staticClass:"lasted__item-1-name"},[m._v(m._s(null===(r=m.film[0])||void 0===r?void 0:r.name))]),m._v(" "),_("div",{staticClass:"lasted__item-1-year"},[m._v(m._s(null===(c=m.film[0])||void 0===c?void 0:c.year))]),m._v(" "),_("div",{staticClass:"lasted__item-1-play",on:{click:function(t){var e;return m.$router.push("/film/".concat(null===(e=m.film[0])||void 0===e?void 0:e.slug))}}},[_("img",{staticClass:"lasted__item-1-play-img",attrs:{src:o(287),alt:""}})])])]),m._v(" "),_("div",{staticClass:"film__lasted-item-2 blur__lasted-film"},[_("div",{staticClass:"lasted__item-2-bg"},[_("img",{staticClass:"lasted__item-2-bg--img",attrs:{src:m.pathImage+(null===(n=m.film[1])||void 0===n?void 0:n.thumb_url),alt:""}}),m._v(" "),_("div",{staticClass:"content__lasted-item--blur"}),m._v(" "),m._m(3),m._v(" "),_("div",{staticClass:"lasted__item-2-name"},[m._v(m._s(null===(l=m.film[1])||void 0===l?void 0:l.name))]),m._v(" "),_("div",{staticClass:"lasted__item-2-year"},[m._v(m._s(null===(d=m.film[1])||void 0===d?void 0:d.year))]),m._v(" "),_("div",{staticClass:"lasted__item-1-play",on:{click:function(t){var e;return m.$router.push("/film/".concat(null===(e=m.film[1])||void 0===e?void 0:e.slug))}}},[_("img",{staticClass:"lasted__item-1-play-img",attrs:{src:o(287),alt:""}})])])])]),m._v(" "),_("div",{staticClass:"film__continue-watch--container"},[_("div",{staticClass:"film__continue-watch"},[m._m(4),m._v(" "),_("div",{staticClass:"film__continue-watch--list"},m._l(m.suggestFilm,(function(t){var e,r,c;return _("div",{staticClass:"film__continue-watch--item"},[_("div",{staticClass:"film__continue-watch--item--bg"},[_("img",{staticClass:"film__continue-watch--item--bg--img",attrs:{src:m.pathImage+(null===(e=m.film[t])||void 0===e?void 0:e.poster_url),alt:""}})]),m._v(" "),_("div",{staticClass:"continue__watch-item-bar"},[_("div",{staticClass:"watch__item-bar--text"},[_("p",{staticClass:"watch__item-bar--text--name"},[m._v(m._s(null===(r=m.film[t])||void 0===r?void 0:r.name))]),m._v(" "),_("p",{staticClass:"watch__item-bar--text--year"},[m._v("  | "+m._s(null===(c=m.film[t])||void 0===c?void 0:c.year))])]),m._v(" "),_("div",{staticClass:"continue__watch-play",on:{click:function(e){var o;return m.$router.push("/film/".concat(null===(o=m.film[t])||void 0===o?void 0:o.slug))}}},[_("img",{staticClass:"continue__watch-play--img",attrs:{src:o(287),alt:""}})])])])})),0)]),m._v(" "),_("div",{staticClass:"film__continue-watch-film",attrs:{title:m.viewRecent.name}},[_("div",{staticClass:"continue-watch-film-bg"},[_("div",{staticClass:"continue-watch-film-bg-blur"}),m._v(" "),_("img",{staticClass:"continue-watch-film-bg--img",attrs:{src:m.viewRecent.thumb_url,alt:""}}),m._v(" "),m._m(5),m._v(" "),_("div",{staticClass:"continue-watch-film-name",attrs:{title:m.viewRecent.name}},[m._v(m._s(m.viewRecent.name))]),m._v(" "),_("div",{staticClass:"continue-watch-film-watchNow",on:{click:function(t){return m.$router.push("/film/".concat(m.viewRecent.slug))}}},[_("img",{staticClass:"continue-watch-film-watchNow--img",attrs:{src:o(287),alt:""}}),m._v("\n              Continue\n            ")])])])])]),m._v(" "),_("tab-right",{attrs:{film:m.film}})],1)],1)}),r,!1,null,"355ce0c8",null);e.default=component.exports;installComponents(component,{TabLeft:o(301).default,Search:o(297).default,Bookmark:o(298).default,TabRight:o(296).default})}}]);