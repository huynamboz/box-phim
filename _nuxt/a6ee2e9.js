(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,5,6],{284:function(t,e,o){t.exports=o.p+"img/play1.45cc6e0.png"},285:function(t,e,o){"use strict";o.r(e);var r=o(286),n=o.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},286:function(t,e){},287:function(t,e,o){t.exports=o.p+"img/star.36cb6f3.png"},289:function(t,e,o){var content=o(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("4d3cc868",content,!0,{sourceMap:!1})},290:function(t,e,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("60205238",content,!0,{sourceMap:!1})},291:function(t,e,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("12c25e14",content,!0,{sourceMap:!1})},292:function(t,e,o){var content=o(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("108ad3e4",content,!0,{sourceMap:!1})},293:function(t,e,o){"use strict";o.r(e);o(38);var r=[function(){var t=this._self._c;return t("p",{staticClass:"tabRight__title"},[this._v("Film hot "),t("img",{staticClass:"film-hot-img",attrs:{src:o(296),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"star"},[t("img",{staticClass:"star--img",attrs:{src:o(287),alt:""}}),this._v("\n                    4.2/5\n                ")])}],n={props:["film"],data:function(){return{dataFilm:this.film,filmHot:[10,11,12,13,14],pathImage:"https://img.hiephanhthienha.com/uploads/movies/"}},mounted:function(){console.log("hhhhhhhhhhhhhhhhh",this.film)},methods:{}},c=(o(298),o(46)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabRight"},[t._m(0),t._v(" "),e("div",{staticClass:"list__hot-film"},t._l(t.filmHot,(function(r){var n,c,l,d;return e("div",{staticClass:"list__hot-film--item",attrs:{title:null===(n=t.film[r])||void 0===n?void 0:n.name}},[e("div",{staticClass:"list__hot-film--item__bg"},[e("img",{staticClass:"list__hot-film--item__bg--img",attrs:{src:t.pathImage+(null===(c=t.film[r])||void 0===c?void 0:c.poster_url),alt:""}})]),t._v(" "),e("div",{staticClass:"list__hot-film--item__info"},[e("div",{staticClass:"list__hot-film--item__info--play-btn",on:{click:function(e){var o;return t.$router.push("/film/".concat(null===(o=t.film[r])||void 0===o?void 0:o.slug))}}},[e("img",{staticClass:"list__hot-film--item__info--play",attrs:{src:o(284),alt:""}})]),t._v(" "),e("div",{staticClass:"list__film-hot-text"},[e("p",{staticClass:"list__hot-film--item__info--title"},[t._v(t._s(null===(l=t.film[r])||void 0===l?void 0:l.name))]),t._v(" "),e("p",{staticClass:"list__hot-film--item__info--time"},[t._v(t._s(null===(d=t.film[r])||void 0===d?void 0:d.year))])]),t._v(" "),e("div",{staticClass:"hr"}),t._v(" "),t._m(1,!0)])])})),0)])}),r,!1,null,"1d0060bc",null);e.default=component.exports},294:function(t,e,o){"use strict";o.r(e);o(27),o(135),o(38);var r={data:function(){return{urlSearch:"https://ophim1.cc/_next/data/x5eGH4wObN-EpnueF2sPG/tim-kiem.json?keyword=",keySearch:"",isSearching:!1,pathImage:"https://img.hiephanhthienha.com/uploads/movies/",searchResult:[]}},mounted:function(){var t=this;document.addEventListener("click",(function(){t.isSearching=!1}))},methods:{removeSearch:function(){this.keySearch="",this.isSearching=!1},search:function(){var t=this;this.keySearch.length>0?this.isSearching=!0:this.isSearching=!1,this.keySearch.length>0?this.$axios.$get(this.urlSearch+this.keySearch).then((function(e){t.searchResult=e.pageProps.data.items,console.log(t.searchResult)})):this.searchResult=[]}}},n=(o(306),o(46)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container__search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keySearch,expression:"keySearch"}],attrs:{type:"text",placeholder:"Search series or movie..."},domProps:{value:t.keySearch},on:{input:[function(e){e.target.composing||(t.keySearch=e.target.value)},t.search]}}),t._v(" "),e("img",{staticClass:"removeSearch",staticStyle:{width:"25px",height:"25px"},attrs:{src:o(305),alt:""},on:{click:function(e){return t.removeSearch()}}}),t._v(" "),t.isSearching?e("div",{staticClass:"search"},t._l(t.searchResult,(function(o){return e("div",{staticClass:"search__item",on:{click:function(e){return t.$router.push("/film/".concat(null==o?void 0:o.slug))}}},[e("div",{staticClass:"search__item--thumb"},[e("img",{staticClass:"search__item--thumb--img",attrs:{src:t.pathImage+(null==o?void 0:o.thumb_url),alt:""}})]),t._v(" "),e("div",{staticClass:"search__item--name"},[e("p",{staticClass:"film__name"},[t._v(t._s(null==o?void 0:o.name))]),t._v(" "),e("p",{staticClass:"film__year"},[t._v(t._s(null==o?void 0:o.year))])])])})),0):t._e()])}),[],!1,null,"41995a32",null);e.default=component.exports},295:function(t,e,o){"use strict";o.r(e);o(38),o(288),o(199);var r={props:{listSaved:{type:Array,default:[]}},data:function(){return{countSaved:0,isOpenBM:!1}},watch:{listSaved:function(t){this.countSaved=this.listSaved.length}},mounted:function(){},methods:{removeFavou:function(t){var e=this.listSaved.findIndex((function(e){return e._id===t}));this.listSaved.splice(e,1),localStorage.setItem("listSaved",JSON.stringify(this.listSaved)),this.countSaved=this.listSaved.length},openBookmark:function(){this.isOpenBM=!this.isOpenBM}}},n=(o(310),o(46)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"saved"},[e("img",{staticClass:"icon__saved",attrs:{src:o(308),alt:""},on:{click:function(e){return t.openBookmark()}}}),t._v(" "),e("div",{staticClass:"count__saved",on:{click:function(e){return t.openBookmark()}}},[t._v(t._s(t.countSaved))]),t._v(" "),t.isOpenBM?e("div",{staticClass:"bookmark__container"},[e("div",{staticClass:"bookMark"},t._l(t.listSaved,(function(r){return e("div",{staticClass:"bookMark__item",on:{click:function(e){return t.$router.push("/film/".concat(null==r?void 0:r.slug))}}},[e("div",{staticClass:"bookmark__item-content"},[e("div",{staticClass:"bookMark__item--thumb"},[e("img",{staticClass:"bookMark__item--thumb--img",attrs:{src:null==r?void 0:r.thumb_url,alt:""}})]),t._v(" "),e("div",{staticClass:"bookMark__item--name"},[e("p",{staticClass:"film__name"},[t._v(t._s(null==r?void 0:r.name))]),t._v(" "),e("p",{staticClass:"film__year"},[t._v(t._s(null==r?void 0:r.year))])])]),t._v(" "),e("div",{staticClass:"bookMark__remove",on:{click:function(e){return t.removeFavou(null==r?void 0:r._id)}}},[e("img",{staticClass:"bookMark__remove-img",attrs:{src:o(309),alt:""}})])])})),0)]):t._e()])}),[],!1,null,"96138bde",null);e.default=component.exports},296:function(t,e,o){t.exports=o.p+"img/fire.552477a.png"},297:function(t,e,o){"use strict";o.r(e);var r=o(312),n=o(285);for(var c in n)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(c);o(303);var l=o(46),component=Object(l.a)(n.default,r.a,r.b,!1,null,"04b4cb5b",null);e.default=component.exports},298:function(t,e,o){"use strict";o(289)},299:function(t,e,o){var r=o(132)(!1);r.push([t.i,".tabRight[data-v-1d0060bc]{margin-left:25px}.list__hot-film--item[data-v-1d0060bc]{position:relative;margin-bottom:20px;border-radius:11px}.list__hot-film--item__bg--img[data-v-1d0060bc]{width:260px;height:150px;border-radius:11px;-o-object-fit:cover;object-fit:cover}.list__hot-film--item__info--play[data-v-1d0060bc]{width:25px;height:25px;display:block}.list__hot-film--item__info--play-btn[data-v-1d0060bc]{width:28px;display:flex;justify-content:center;align-items:center;background-color:hsla(0,0%,56.1%,.783);padding:2px;border-radius:50%;height:28px}.list__hot-film--item__info--play-btn[data-v-1d0060bc]:hover{cursor:pointer;background-color:#606060;transition:.4s}p[data-v-1d0060bc]{margin:0}.list__film-hot-text[data-v-1d0060bc]{margin:0 10px;color:#fff}.list__hot-film--item__info--title[data-v-1d0060bc]{font-size:.9em;width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list__hot-film--item__info--time[data-v-1d0060bc]{font-size:.8em;font-weight:300;line-height:10px}.star--img[data-v-1d0060bc]{width:12px;height:12px;margin:0 5px}.hr[data-v-1d0060bc]{height:70%;width:.5px;margin:0 5px;background-color:#fff}.star[data-v-1d0060bc]{color:#fff;font-size:.9em}.list__hot-film--item__info[data-v-1d0060bc]{position:absolute;bottom:0;display:flex;justify-content:center;align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);width:100%;height:50px;border-radius:11px}.tabRight__title[data-v-1d0060bc]{margin-top:45px;font-size:1.2em;font-weight:500;margin-bottom:15px}.film-hot-img[data-v-1d0060bc]{width:20px;height:20px;margin-left:5px}@media (max-width:576px){.tabRight[data-v-1d0060bc]{margin:0}.list__hot-film--item__bg--img[data-v-1d0060bc]{width:100%}}",""]),t.exports=r},300:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgM0g0Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTRjMCAxLjEwMy44OTcgMiAyIDJoMTZjMS4xMDMgMCAyLS44OTcgMi0yVjVjMC0xLjEwMy0uODk3LTItMi0yem0uMDAxIDZjLS4wMDEgMC0uMDAxIDAgMCAwaC0uNDY2bC0yLjY2Ny00SDIwbC4wMDEgNHpNOS41MzUgOSA2Ljg2OCA1aDIuNTk3bDIuNjY3IDRIOS41MzV6bTUgMC0yLjY2Ny00aDIuNTk3bDIuNjY3IDRoLTIuNTk3ek00IDVoLjQ2NWwyLjY2NyA0SDRWNXptMCAxNHYtOGgxNmwuMDAyIDhINHoiLz48L3N2Zz4="},301:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNzA3IDMuMjkzQS45OTYuOTk2IDAgMCAwIDEzIDNINGExIDEgMCAwIDAtMSAxdjljMCAuMjY2LjEwNS41Mi4yOTMuNzA3bDggOGEuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDktOWEuOTk5Ljk5OSAwIDAgMCAwLTEuNDE0bC04LTh6TTEyIDE5LjU4NmwtNy03VjVoNy41ODZsNyA3TDEyIDE5LjU4NnoiLz48Y2lyY2xlIGN4PSI4LjQ5NiIgY3k9IjguNDk1IiByPSIxLjUwNSIvPjwvc3ZnPg=="},302:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiLz48cGF0aCBkPSJNMTggMTlINVY2aDhjMC0uNzEyLjE1My0xLjM4Ny40MjItMkg1Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTNjMCAxLjEwMy44OTcgMiAyIDJoMTNjMS4xMDMgMCAyLS44OTcgMi0ydi04LjQyMkE0Ljk2MiA0Ljk2MiAwIDAgMSAxOCAxMXY4eiIvPjwvc3ZnPg=="},303:function(t,e,o){"use strict";o(290)},304:function(t,e,o){var r=o(132)(!1);r.push([t.i,".tabLeft[data-v-04b4cb5b]{padding:0 50px;height:100vh;position:fixed;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;top:0;left:0;z-index:1}.avatar[data-v-04b4cb5b]{-o-object-fit:cover;object-fit:cover;width:50px;height:50px;border-radius:50%;margin:20px 0}",""]),t.exports=r},305:function(t,e,o){t.exports=o.p+"img/close.7147934.png"},306:function(t,e,o){"use strict";o(291)},307:function(t,e,o){var r=o(132)(!1);r.push([t.i,".container__search[data-v-41995a32]{display:flex;align-items:center}.search[data-v-41995a32]{position:absolute;overflow-y:auto;width:350px;height:250px;left:-17px;border-radius:15px;top:56px;margin-top:15px;padding:10px 5px 0;z-index:2;background-color:#fff;box-shadow:1px 0 20px 0 rgba(0,0,0,.21);animation:fade-41995a32 .3s;transition:.5s}.search[data-v-41995a32]::-webkit-scrollbar{width:5px}.search[data-v-41995a32]::-webkit-scrollbar-track{background:transparent}.search[data-v-41995a32]::-webkit-scrollbar-thumb{background:#f96962}@keyframes fade-41995a32{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.removeSearch[data-v-41995a32]:hover{cursor:pointer;border-radius:50%;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.search__item[data-v-41995a32]{display:flex;padding:5px 10px;align-items:center;border-radius:15px}.search__item[data-v-41995a32]:hover{cursor:pointer;background-color:#f2f2f2}p[data-v-41995a32]{margin:0}.search__item--thumb--img[data-v-41995a32]{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.search__item--name[data-v-41995a32]{margin-left:10px}.film__name[data-v-41995a32]{font-size:14px;font-weight:600}.film__year[data-v-41995a32]{font-size:12px;margin-bottom:5px}input[data-v-41995a32]{border:none;outline:none;font-size:16px;font-weight:500;padding-right:40px;height:30px;background-color:transparent}",""]),t.exports=r},308:function(t,e,o){t.exports=o.p+"img/save-header.818641f.png"},309:function(t,e,o){t.exports=o.p+"img/remove.8e47ad1.png"},310:function(t,e,o){"use strict";o(292)},311:function(t,e,o){var r=o(132)(!1);r.push([t.i,'.saved[data-v-96138bde]{margin-left:20px;position:relative;z-index:2}.count__saved[data-v-96138bde]{position:absolute;top:-5px;right:-5px;background-color:#fc7770;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;justify-content:center;align-items:center;font-size:12px}.bookMark__remove-img[data-v-96138bde]{width:20px;height:20px;float:right;position:relative;z-index:2}.icon__saved[data-v-96138bde]{width:30px;height:30px;margin-left:10px;margin-top:6px}.bookmark__container[data-v-96138bde]:after{position:absolute;content:"";width:0;height:0;top:-18px;left:20px;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #fff}.bookmark__container[data-v-96138bde]{position:absolute;left:-17px;top:40px;margin-top:15px;padding:10px 0;background-color:#fff;border-radius:15px;z-index:2;transition:.5s;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.bookMark[data-v-96138bde]{overflow-y:auto;width:350px;height:250px;padding:10px 5px 0;animation:fade-96138bde .3s}.saved[data-v-96138bde]:hover{cursor:pointer}.bookMark[data-v-96138bde]::-webkit-scrollbar{width:5px}.bookMark[data-v-96138bde]::-webkit-scrollbar-track{background:transparent}.bookMark[data-v-96138bde]::-webkit-scrollbar-thumb,.bookMark[data-v-96138bde]::-webkit-scrollbar-thumb:hover{background:#62c7f9}@keyframes fade-96138bde{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.removebookMark[data-v-96138bde]:hover{cursor:pointer;border-radius:50%;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.bookMark__item[data-v-96138bde]{padding:5px 10px;border-radius:15px;justify-content:space-between}.bookMark__item[data-v-96138bde],.bookmark__item-content[data-v-96138bde]{display:flex;align-items:center}.bookMark__item[data-v-96138bde]:hover{cursor:pointer;background-color:#f2f2f2}p[data-v-96138bde]{margin:0}.bookMark__item--thumb--img[data-v-96138bde]{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.bookMark__item--name[data-v-96138bde]{margin-left:10px}.film__name[data-v-96138bde]{font-size:14px;font-weight:600}.film__year[data-v-96138bde]{font-size:12px;margin-bottom:5px}@media (max-width:576px){.bookmark__container[data-v-96138bde]:after{position:absolute;content:"";width:0;height:0;top:-18px;left:65%;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #fff}.bookmark__container[data-v-96138bde]{position:absolute;left:-600%}}',""]),t.exports=r},312:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));var r=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"tabLeft"},[e("img",{staticClass:"avatar",attrs:{src:"https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/6/l65_coral-rerelease_2009_vietnam_1sht_1_.jpg",alt:""}}),t._v(" "),e("div",{staticClass:"list__menu"},[e("div",{staticClass:"menu__viewRecent"},[e("img",{attrs:{src:o(300),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__favour"},[e("img",{attrs:{src:o(301),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__notify"},[e("img",{attrs:{src:o(302),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__setting"})]),t._v(" "),e("div",{staticClass:"film__saved"},[e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"})])])}]},315:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMThhNy45NTIgNy45NTIgMCAwIDAgNC44OTctMS42ODhsNC4zOTYgNC4zOTYgMS40MTQtMS40MTQtNC4zOTYtNC4zOTZBNy45NTIgNy45NTIgMCAwIDAgMTggMTBjMC00LjQxMS0zLjU4OS04LTgtOHMtOCAzLjU4OS04IDggMy41ODkgOCA4IDh6bTAtMTRjMy4zMDkgMCA2IDIuNjkxIDYgNnMtMi42OTEgNi02IDYtNi0yLjY5MS02LTYgMi42OTEtNiA2LTZ6Ii8+PC9zdmc+"}}]);