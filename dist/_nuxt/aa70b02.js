(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4,5],{284:function(t,e,o){"use strict";o.r(e);var r=o(285),n=o.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},285:function(t,e){},286:function(t,e,o){t.exports=o.p+"img/play1.45cc6e0.png"},287:function(t,e,o){t.exports=o.p+"img/star.36cb6f3.png"},288:function(t,e,o){var content=o(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("4d3cc868",content,!0,{sourceMap:!1})},289:function(t,e,o){var content=o(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("60205238",content,!0,{sourceMap:!1})},290:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("2528387c",content,!0,{sourceMap:!1})},291:function(t,e,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("108ad3e4",content,!0,{sourceMap:!1})},293:function(t,e,o){t.exports=o.p+"img/fire.552477a.png"},294:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMThhNy45NTIgNy45NTIgMCAwIDAgNC44OTctMS42ODhsNC4zOTYgNC4zOTYgMS40MTQtMS40MTQtNC4zOTYtNC4zOTZBNy45NTIgNy45NTIgMCAwIDAgMTggMTBjMC00LjQxMS0zLjU4OS04LTgtOHMtOCAzLjU4OS04IDggMy41ODkgOCA4IDh6bTAtMTRjMy4zMDkgMCA2IDIuNjkxIDYgNnMtMi42OTEgNi02IDYtNi0yLjY5MS02LTYgMi42OTEtNiA2LTZ6Ii8+PC9zdmc+"},295:function(t,e,o){"use strict";o.r(e);o(38);var r=[function(){var t=this._self._c;return t("p",{staticClass:"tabRight__title"},[this._v("Film hot "),t("img",{staticClass:"film-hot-img",attrs:{src:o(293),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"star"},[t("img",{staticClass:"star--img",attrs:{src:o(287),alt:""}}),this._v("\n                    4.2/5\n                ")])}],n={props:["film"],data:function(){return{dataFilm:this.film,filmHot:[10,11,12,13,14],pathImage:"https://img.hiephanhthienha.com/uploads/movies/"}},mounted:function(){console.log("hhhhhhhhhhhhhhhhh",this.film)},methods:{}},c=(o(298),o(46)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabRight"},[t._m(0),t._v(" "),e("div",{staticClass:"list__hot-film"},t._l(t.filmHot,(function(r){var n,c,l,d;return e("div",{staticClass:"list__hot-film--item",attrs:{title:null===(n=t.film[r])||void 0===n?void 0:n.name}},[e("div",{staticClass:"list__hot-film--item__bg"},[e("img",{staticClass:"list__hot-film--item__bg--img",attrs:{src:t.pathImage+(null===(c=t.film[r])||void 0===c?void 0:c.poster_url),alt:""}})]),t._v(" "),e("div",{staticClass:"list__hot-film--item__info"},[e("div",{staticClass:"list__hot-film--item__info--play-btn",on:{click:function(e){var o;return t.$router.push("/film/".concat(null===(o=t.film[r])||void 0===o?void 0:o.slug))}}},[e("img",{staticClass:"list__hot-film--item__info--play",attrs:{src:o(286),alt:""}})]),t._v(" "),e("div",{staticClass:"list__film-hot-text"},[e("p",{staticClass:"list__hot-film--item__info--title"},[t._v(t._s(null===(l=t.film[r])||void 0===l?void 0:l.name))]),t._v(" "),e("p",{staticClass:"list__hot-film--item__info--time"},[t._v(t._s(null===(d=t.film[r])||void 0===d?void 0:d.year))])]),t._v(" "),e("div",{staticClass:"hr"}),t._v(" "),t._m(1,!0)])])})),0)])}),r,!1,null,"1d0060bc",null);e.default=component.exports},296:function(t,e,o){"use strict";o.r(e);o(27),o(135),o(38);var r={data:function(){return{urlSearch:"https://ophim1.cc/_next/data/x5eGH4wObN-EpnueF2sPG/tim-kiem.json?keyword=",keySearch:"",isSearching:!1,pathImage:"https://img.hiephanhthienha.com/uploads/movies/",searchResult:[]}},mounted:function(){var t=this;document.addEventListener("click",(function(){t.isSearching=!0}))},methods:{removeSearch:function(){this.keySearch="",this.isSearching=!1},search:function(){var t=this;this.isSearching=!0,this.keySearch.length>0?this.isSearching=!0:this.isSearching=!1,this.keySearch.length>0?this.$axios.$get(this.urlSearch+this.keySearch).then((function(e){t.searchResult=e.pageProps.data.items,console.log(t.searchResult)})):this.searchResult=[]}}},n=(o(307),o(46)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container__search"},[e("div",{staticClass:"bx-search",on:{click:function(e){return t.search()}}},[e("img",{attrs:{src:o(294),alt:""}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keySearch,expression:"keySearch"}],attrs:{type:"text",placeholder:"Search series or movie..."},domProps:{value:t.keySearch},on:{input:function(e){e.target.composing||(t.keySearch=e.target.value)}}}),t._v(" "),e("img",{staticClass:"removeSearch",staticStyle:{width:"25px",height:"25px"},attrs:{src:o(306),alt:""},on:{click:function(e){return t.removeSearch()}}}),t._v(" "),t.isSearching?e("div",{staticClass:"search"},t._l(t.searchResult,(function(o){return e("div",{staticClass:"search__item",on:{click:function(e){return t.$router.push("/film/".concat(null==o?void 0:o.slug))}}},[e("div",{staticClass:"search__item--thumb"},[e("img",{staticClass:"search__item--thumb--img",attrs:{src:t.pathImage+(null==o?void 0:o.thumb_url),alt:""}})]),t._v(" "),e("div",{staticClass:"search__item--name"},[e("p",{staticClass:"film__name"},[t._v(t._s(null==o?void 0:o.name))]),t._v(" "),e("p",{staticClass:"film__year"},[t._v(t._s(null==o?void 0:o.year))])])])})),0):t._e()])}),[],!1,null,"63128406",null);e.default=component.exports},297:function(t,e,o){"use strict";o.r(e);o(38),o(292),o(199);var r={props:{listSaved:{type:Array,default:[]}},data:function(){return{countSaved:0,isOpenBM:!1}},watch:{listSaved:function(t){this.countSaved=this.listSaved.length}},mounted:function(){},methods:{removeFavou:function(t){var e=this.listSaved.findIndex((function(e){return e._id===t}));this.listSaved.splice(e,1),localStorage.setItem("listSaved",JSON.stringify(this.listSaved)),this.countSaved=this.listSaved.length},openBookmark:function(){this.isOpenBM=!this.isOpenBM}}},n=(o(311),o(46)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"saved"},[e("img",{staticClass:"icon__saved",attrs:{src:o(309),alt:""},on:{click:function(e){return t.openBookmark()}}}),t._v(" "),e("div",{staticClass:"count__saved",on:{click:function(e){return t.openBookmark()}}},[t._v(t._s(t.countSaved))]),t._v(" "),t.isOpenBM?e("div",{staticClass:"bookmark__container"},[e("div",{staticClass:"bookMark"},t._l(t.listSaved,(function(r){return e("div",{staticClass:"bookMark__item",on:{click:function(e){return t.$router.push("/film/".concat(null==r?void 0:r.slug))}}},[e("div",{staticClass:"bookmark__item-content"},[e("div",{staticClass:"bookMark__item--thumb"},[e("img",{staticClass:"bookMark__item--thumb--img",attrs:{src:null==r?void 0:r.thumb_url,alt:""}})]),t._v(" "),e("div",{staticClass:"bookMark__item--name"},[e("p",{staticClass:"film__name"},[t._v(t._s(null==r?void 0:r.name))]),t._v(" "),e("p",{staticClass:"film__year"},[t._v(t._s(null==r?void 0:r.year))])])]),t._v(" "),e("div",{staticClass:"bookMark__remove",on:{click:function(e){return t.removeFavou(null==r?void 0:r._id)}}},[e("img",{staticClass:"bookMark__remove-img",attrs:{src:o(310),alt:""}})])])})),0)]):t._e()])}),[],!1,null,"96138bde",null);e.default=component.exports},298:function(t,e,o){"use strict";o(288)},299:function(t,e,o){var r=o(132)(!1);r.push([t.i,".tabRight[data-v-1d0060bc]{margin-left:25px}.list__hot-film--item[data-v-1d0060bc]{position:relative;margin-bottom:20px;border-radius:11px}.list__hot-film--item__bg--img[data-v-1d0060bc]{width:260px;height:150px;border-radius:11px;-o-object-fit:cover;object-fit:cover}.list__hot-film--item__info--play[data-v-1d0060bc]{width:25px;height:25px;display:block}.list__hot-film--item__info--play-btn[data-v-1d0060bc]{width:28px;display:flex;justify-content:center;align-items:center;background-color:hsla(0,0%,56.1%,.783);padding:2px;border-radius:50%;height:28px}.list__hot-film--item__info--play-btn[data-v-1d0060bc]:hover{cursor:pointer;background-color:#606060;transition:.4s}p[data-v-1d0060bc]{margin:0}.list__film-hot-text[data-v-1d0060bc]{margin:0 10px;color:#fff}.list__hot-film--item__info--title[data-v-1d0060bc]{font-size:.9em;width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list__hot-film--item__info--time[data-v-1d0060bc]{font-size:.8em;font-weight:300;line-height:10px}.star--img[data-v-1d0060bc]{width:12px;height:12px;margin:0 5px}.hr[data-v-1d0060bc]{height:70%;width:.5px;margin:0 5px;background-color:#fff}.star[data-v-1d0060bc]{color:#fff;font-size:.9em}.list__hot-film--item__info[data-v-1d0060bc]{position:absolute;bottom:0;display:flex;justify-content:center;align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);width:100%;height:50px;border-radius:11px}.tabRight__title[data-v-1d0060bc]{margin-top:45px;font-size:1.2em;font-weight:500;margin-bottom:15px}.film-hot-img[data-v-1d0060bc]{width:20px;height:20px;margin-left:5px}@media (max-width:576px){.tabRight[data-v-1d0060bc]{margin:0}.list__hot-film--item__bg--img[data-v-1d0060bc]{width:100%}}",""]),t.exports=r},300:function(t,e,o){"use strict";o.r(e);var r=o(313),n=o(284);for(var c in n)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(c);o(304);var l=o(46),component=Object(l.a)(n.default,r.a,r.b,!1,null,"04b4cb5b",null);e.default=component.exports},301:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgM0g0Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTRjMCAxLjEwMy44OTcgMiAyIDJoMTZjMS4xMDMgMCAyLS44OTcgMi0yVjVjMC0xLjEwMy0uODk3LTItMi0yem0uMDAxIDZjLS4wMDEgMC0uMDAxIDAgMCAwaC0uNDY2bC0yLjY2Ny00SDIwbC4wMDEgNHpNOS41MzUgOSA2Ljg2OCA1aDIuNTk3bDIuNjY3IDRIOS41MzV6bTUgMC0yLjY2Ny00aDIuNTk3bDIuNjY3IDRoLTIuNTk3ek00IDVoLjQ2NWwyLjY2NyA0SDRWNXptMCAxNHYtOGgxNmwuMDAyIDhINHoiLz48L3N2Zz4="},302:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNzA3IDMuMjkzQS45OTYuOTk2IDAgMCAwIDEzIDNINGExIDEgMCAwIDAtMSAxdjljMCAuMjY2LjEwNS41Mi4yOTMuNzA3bDggOGEuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDktOWEuOTk5Ljk5OSAwIDAgMCAwLTEuNDE0bC04LTh6TTEyIDE5LjU4NmwtNy03VjVoNy41ODZsNyA3TDEyIDE5LjU4NnoiLz48Y2lyY2xlIGN4PSI4LjQ5NiIgY3k9IjguNDk1IiByPSIxLjUwNSIvPjwvc3ZnPg=="},303:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiLz48cGF0aCBkPSJNMTggMTlINVY2aDhjMC0uNzEyLjE1My0xLjM4Ny40MjItMkg1Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTNjMCAxLjEwMy44OTcgMiAyIDJoMTNjMS4xMDMgMCAyLS44OTcgMi0ydi04LjQyMkE0Ljk2MiA0Ljk2MiAwIDAgMSAxOCAxMXY4eiIvPjwvc3ZnPg=="},304:function(t,e,o){"use strict";o(289)},305:function(t,e,o){var r=o(132)(!1);r.push([t.i,".tabLeft[data-v-04b4cb5b]{padding:0 50px;height:100vh;position:fixed;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;top:0;left:0;z-index:1}.avatar[data-v-04b4cb5b]{-o-object-fit:cover;object-fit:cover;width:50px;height:50px;border-radius:50%;margin:20px 0}",""]),t.exports=r},306:function(t,e,o){t.exports=o.p+"img/close.7147934.png"},307:function(t,e,o){"use strict";o(290)},308:function(t,e,o){var r=o(132)(!1);r.push([t.i,".container__search[data-v-63128406]{display:flex;align-items:center}.search[data-v-63128406]{position:absolute;overflow-y:auto;width:350px;height:250px;left:-17px;border-radius:15px;top:56px;margin-top:15px;padding:10px 5px 0;z-index:2;background-color:#fff;box-shadow:1px 0 20px 0 rgba(0,0,0,.21);animation:fade-63128406 .3s;transition:.5s}.bx-search[data-v-63128406]{width:30px;height:30px;margin-top:6px;margin-left:10px}.search[data-v-63128406]::-webkit-scrollbar{width:5px}.search[data-v-63128406]::-webkit-scrollbar-track{background:transparent}.search[data-v-63128406]::-webkit-scrollbar-thumb{background:#f96962}@keyframes fade-63128406{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.removeSearch[data-v-63128406]:hover{cursor:pointer;border-radius:50%;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.search__item[data-v-63128406]{display:flex;padding:5px 10px;align-items:center;border-radius:15px}.search__item[data-v-63128406]:hover{cursor:pointer;background-color:#f2f2f2}p[data-v-63128406]{margin:0}.search__item--thumb--img[data-v-63128406]{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.search__item--name[data-v-63128406]{margin-left:10px}.film__name[data-v-63128406]{font-size:14px;font-weight:600}.film__year[data-v-63128406]{font-size:12px;margin-bottom:5px}input[data-v-63128406]{border:none;outline:none;font-size:16px;font-weight:500;padding-right:40px;height:30px;background-color:transparent}",""]),t.exports=r},309:function(t,e,o){t.exports=o.p+"img/save-header.818641f.png"},310:function(t,e,o){t.exports=o.p+"img/remove.8e47ad1.png"},311:function(t,e,o){"use strict";o(291)},312:function(t,e,o){var r=o(132)(!1);r.push([t.i,'.saved[data-v-96138bde]{margin-left:20px;position:relative;z-index:2}.count__saved[data-v-96138bde]{position:absolute;top:-5px;right:-5px;background-color:#fc7770;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;justify-content:center;align-items:center;font-size:12px}.bookMark__remove-img[data-v-96138bde]{width:20px;height:20px;float:right;position:relative;z-index:2}.icon__saved[data-v-96138bde]{width:30px;height:30px;margin-left:10px;margin-top:6px}.bookmark__container[data-v-96138bde]:after{position:absolute;content:"";width:0;height:0;top:-18px;left:20px;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #fff}.bookmark__container[data-v-96138bde]{position:absolute;left:-17px;top:40px;margin-top:15px;padding:10px 0;background-color:#fff;border-radius:15px;z-index:2;transition:.5s;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.bookMark[data-v-96138bde]{overflow-y:auto;width:350px;height:250px;padding:10px 5px 0;animation:fade-96138bde .3s}.saved[data-v-96138bde]:hover{cursor:pointer}.bookMark[data-v-96138bde]::-webkit-scrollbar{width:5px}.bookMark[data-v-96138bde]::-webkit-scrollbar-track{background:transparent}.bookMark[data-v-96138bde]::-webkit-scrollbar-thumb,.bookMark[data-v-96138bde]::-webkit-scrollbar-thumb:hover{background:#62c7f9}@keyframes fade-96138bde{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.removebookMark[data-v-96138bde]:hover{cursor:pointer;border-radius:50%;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.bookMark__item[data-v-96138bde]{padding:5px 10px;border-radius:15px;justify-content:space-between}.bookMark__item[data-v-96138bde],.bookmark__item-content[data-v-96138bde]{display:flex;align-items:center}.bookMark__item[data-v-96138bde]:hover{cursor:pointer;background-color:#f2f2f2}p[data-v-96138bde]{margin:0}.bookMark__item--thumb--img[data-v-96138bde]{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.bookMark__item--name[data-v-96138bde]{margin-left:10px}.film__name[data-v-96138bde]{font-size:14px;font-weight:600}.film__year[data-v-96138bde]{font-size:12px;margin-bottom:5px}@media (max-width:576px){.bookmark__container[data-v-96138bde]:after{position:absolute;content:"";width:0;height:0;top:-18px;left:65%;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #fff}.bookmark__container[data-v-96138bde]{position:absolute;left:-600%}}',""]),t.exports=r},313:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));var r=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"tabLeft"},[e("img",{staticClass:"avatar",attrs:{src:"https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/6/l65_coral-rerelease_2009_vietnam_1sht_1_.jpg",alt:""}}),t._v(" "),e("div",{staticClass:"list__menu"},[e("div",{staticClass:"menu__viewRecent"},[e("img",{attrs:{src:o(301),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__favour"},[e("img",{attrs:{src:o(302),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__notify"},[e("img",{attrs:{src:o(303),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__setting"})]),t._v(" "),e("div",{staticClass:"film__saved"},[e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"})])])}]},315:function(t,e,o){t.exports=o.p+"img/save.5a12f18.png"},316:function(t,e,o){var content=o(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("f656371c",content,!0,{sourceMap:!1})},321:function(t,e,o){t.exports=o.p+"img/tv.ac38979.png"},322:function(t,e,o){t.exports=o.p+"img/hd.9bc1780.png"},323:function(t,e,o){t.exports=o.p+"img/detail.1571faf.png"},324:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVHhe7ZotkNUwFIWfQyKRSCQSiUQikUgkciVuJRKJRCKRSCQSiUQisez93uyZuZNpumnz1+ncb+aIl5c2t6fpTdrkEgRBEATBVp6aXpk+dNZr0zPTYXhr+mP6P1h/Te9N03hi+mZKA/tt+t5Jv0xpez9M9L7hfDUpCAKjaz4yjYBHjQv3Joxq+wpdT41/oWAStybF8ZGCUdDNaZQ7P9T5BXg0iOWfaUgsPPtynaw8G5Kw4nlBQW941tXgSwomw5CoeIaMCt7xrdn3uenG9NmUZvi98snQj0AkaXooCbMpewx4bOKiddxoYVKzydNWA2iYSYuO4S4xf/Czux5idPppUrvojamaLQaQlTV5IUsT2OhRg4vWTJUYqnvCFgM+mVT3HQWTIPdw8cTBDaliiwFynqQ0G3pfadyrlBrAf6o39aXlHnqB4uEadlNqAM+e6h1hvgCKh96wm1IDfL0wgIIDoHimGsCz6OcFrUTC5T1lDdWdagDH6G2ypZj0PDTHUN14BK6/dhIGmHSiMICCDGGASfUeMoDkRZ1WyiVDxXM4A5Y+d9eIYXbJBP1/OAOW1hdqlBsS9X/kgOuvnYQBJp0oDKAgQxhgUr3UAF5aKKvV1u97imeqAf77XAuxPliKjplqAMe0ehvESNopRcdFDrj+2gkXoxOxTpjjtAYww9KJ1tbkT2sAaEFybaXl1AawDu9XWsjsKXsN4NzUr1Hu22AzA8Bvk0Esg1GmIPz2FX6X4JfSasTNYUU6Rf83MQC4yyVb5EoNYDFF6/s1Ym9At7fBFJzmbtNwboJTakBvFE9TA3L4rTTNd2nswI9eQwxgkqQG2RYzG5Kr4mmyUaIETXkZNmfjk/LaDLYpPqvPXCL3wzafy4bBc+c/eHIXloannrAzRWuRaxO3bqSbpAiCEYNpNMmol2gjHaKHPfspp9omVwNT5tYbJXPqtlEyCIIgCE7L5XIHvee96v1e3YoAAAAASUVORK5CYII="},325:function(t,e,o){t.exports=o.p+"img/speaker.24170ed.jpg"},328:function(t,e,o){"use strict";o(316)},329:function(t,e,o){var r=o(132)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap);"]),r.push([t.i,'*[data-v-73fc8eb4]{font-family:"Inter",sans-serif;margin:0;padding:0}.bookmark-responsived[data-v-73fc8eb4]{display:none}.bg-black[data-v-73fc8eb4]{margin:0;padding:0}.container-view[data-v-73fc8eb4]{background-color:#f3f9fe;border-radius:20px;padding:50px 50px 0}#video[data-v-73fc8eb4]{width:100%}.video__content[data-v-73fc8eb4]{display:flex;justify-content:center;align-items:center;width:800px;border-radius:15px}.main__load-film[data-v-73fc8eb4]{margin-right:10px;margin-top:10px}.main__content[data-v-73fc8eb4]{display:flex;border-radius:15px;justify-content:center;padding:20px}.film__detail[data-v-73fc8eb4]{margin-bottom:20px}.film__detail[data-v-73fc8eb4],.film__name[data-v-73fc8eb4]{display:flex;align-items:center}.film__name[data-v-73fc8eb4]{font-size:1.2em;margin-left:10px;font-weight:500}.tag__film[data-v-73fc8eb4]{background-color:#f96962;color:#fff;display:flex;justify-content:center;align-items:center;padding:7px 20px;border-radius:10px}.tag__film[data-v-73fc8eb4]:hover{background-color:#e42a20;color:#fff;transition:.5s;cursor:pointer}video[data-v-73fc8eb4]{margin-top:10px;border-radius:10px;box-shadow:0 8px 20px 0 hsla(0,0%,67.8%,.33);-o-object-fit:cover;object-fit:cover}.header__search[data-v-73fc8eb4]{display:flex;max-height:40px;justify-content:center;background-color:#f0f4f7;padding:6px 20px 6px 10px;border-radius:15px;align-items:center;position:relative;margin-left:100px}.area__chap[data-v-73fc8eb4]{margin-top:20px}.list__chap[data-v-73fc8eb4]{display:flex;width:800px;flex-wrap:wrap;margin-top:5px}.list__chap-item[data-v-73fc8eb4]{display:flex;justify-content:center;align-items:center;color:#000;padding:5px 10px;border-radius:5px;min-width:30px;margin-top:10px;background-color:#f0f4f7;margin-right:5px}.list__chap-item[data-v-73fc8eb4]:hover{cursor:pointer}.active[data-v-73fc8eb4],.list__chap-item[data-v-73fc8eb4]:hover{background-color:#f96962;color:#fff}.area__chap[data-v-73fc8eb4]{box-shadow:0 4px 20px 0 hsla(0,0%,67.8%,.33);border-radius:15px;padding:10px;box-sizing:content-box;max-width:780px}.film__thumb[data-v-73fc8eb4]{position:relative}.film__thumb-name[data-v-73fc8eb4]{position:absolute;bottom:50px;left:25%;color:#fff;font-size:1.5em;font-weight:500;width:70%;height:25%;overflow-y:auto;white-space:pre-wrap;text-overflow:ellipsis}.film__thumb-name[data-v-73fc8eb4]::-webkit-scrollbar-track{background-color:#f1f1f1}.film__thumb-name[data-v-73fc8eb4]::-webkit-scrollbar{width:2px}.film__thumb-name[data-v-73fc8eb4]::-webkit-scrollbar-thumb{background-color:#f96962;border-radius:10px}.film_thumb-year[data-v-73fc8eb4]{position:absolute;bottom:30px;left:25%;color:#fff;font-size:1em;font-weight:500;background-color:#f96962;border-radius:16px;padding:4px 20px}#film__thumb-des[data-v-73fc8eb4]{height:160px;max-width:780px;padding:10px;border-radius:15px;box-shadow:0 4px 20px 0 hsla(0,0%,67.8%,.33);margin-top:30px}#film__thumb-des-title-content[data-v-73fc8eb4]{text-overflow:ellipsis;overflow-y:auto;font-weight:300;white-space:pre-wrap;font-size:.9em;height:130px;margin-top:10px;line-height:1.5em}.icon__action-item--img[data-v-73fc8eb4]{width:20px;height:20px;display:block;margin-right:0}.film__thumb-des--icon[data-v-73fc8eb4]{width:20px;height:20px;display:block;float:left}.icon__action[data-v-73fc8eb4]{margin-top:30px}.icon__action[data-v-73fc8eb4],.icon__action-item[data-v-73fc8eb4]{display:flex;justify-content:center}.icon__action-item[data-v-73fc8eb4]{margin-right:30px;align-items:center;color:#fff;font-size:.8em;font-weight:400;padding:8px 30px;border-radius:8px}.orange[data-v-73fc8eb4]{box-shadow:0 9px 20px 0 rgba(252,119,112,.34902);background-color:#f96962}.blue[data-v-73fc8eb4]{box-shadow:0 10px 20px 0 rgba(68,68,68,.25882);background-color:#161616}.orange[data-v-73fc8eb4]:hover{background-color:#e42a20}.blue[data-v-73fc8eb4]:hover,.orange[data-v-73fc8eb4]:hover{color:#fff;transition:.5s;cursor:pointer}.blue[data-v-73fc8eb4]:hover{background-color:#026bdb}.film__thumb-des-title[data-v-73fc8eb4]{font-weight:500;display:inline-block;border-bottom:2px solid #f96962}#film__thumb-des-title-content[data-v-73fc8eb4]::-webkit-scrollbar-track{background-color:#f1f1f1}#film__thumb-des-title-content[data-v-73fc8eb4]::-webkit-scrollbar{width:2px}#film__thumb-des-title-content[data-v-73fc8eb4]::-webkit-scrollbar-thumb{background-color:#f96962;border-radius:10px}#film__thumb-des p[data-v-73fc8eb4]{overflow-y:auto}.film__thumb-originname[data-v-73fc8eb4]{position:absolute}.film__poster--img[data-v-73fc8eb4]{width:100%;height:300px}.film__poster--img[data-v-73fc8eb4],.film__thumb--img[data-v-73fc8eb4]{-o-object-fit:cover;object-fit:cover;border-radius:10px}.film__thumb--img[data-v-73fc8eb4]{height:80%;width:160px;position:absolute;left:20px;top:10%;box-shadow:0 4px 20px 0 rgba(0,0,0,.33)}.film__tvTag--img[data-v-73fc8eb4]{width:50px;height:50px;margin-bottom:10px;margin-right:0}.right__content-noti[data-v-73fc8eb4]{margin-top:20px;margin-left:25px;border-radius:10px;box-shadow:0 4px 20px 0 hsla(0,0%,58.8%,.247);box-sizing:border-box;width:260px;padding:15px}.right__content-noti-title[data-v-73fc8eb4]{font-size:1em;font-weight:500;margin-bottom:10px;display:inline-block;border-bottom:2px solid #f96962}.right__content-noti-content--text[data-v-73fc8eb4]{font-size:.9em;font-weight:300;line-height:1.5em}.right__content-noti-title--img[data-v-73fc8eb4]{width:20px;height:20px;margin-right:10px;margin-left:5px}a[data-v-73fc8eb4]{text-decoration:underline;color:#e42a20}p[data-v-73fc8eb4]{margin:0}.hd__icon[data-v-73fc8eb4]{position:absolute;left:36%;width:30px;height:30px;bottom:10%;display:block}@media (max-width:576px){.main__content[data-v-73fc8eb4]{display:flex;flex-direction:column}.container-view[data-v-73fc8eb4]{padding:0;width:100%}video[data-v-73fc8eb4]{width:100%}.film__detail[data-v-73fc8eb4]{display:flex;flex-direction:column}.video__content[data-v-73fc8eb4]{display:flex;width:100%}.bx-search[data-v-73fc8eb4]{width:100%}.header__search[data-v-73fc8eb4]{margin:0}.icon__action[data-v-73fc8eb4]{display:flex;justify-content:space-around}.icon__action-item[data-v-73fc8eb4]{margin:0}.right__content-noti[data-v-73fc8eb4]{margin:20px 0;width:100%}.list__chap[data-v-73fc8eb4]{width:100%}.main__load-film[data-v-73fc8eb4]{margin-right:0}.bookmark-responsived[data-v-73fc8eb4]{display:block}.bookmark-nonresponsive[data-v-73fc8eb4]{display:none}}',""]),t.exports=r},332:function(t,e,o){"use strict";o.r(e);o(38),o(314);var r,n=[function(){var t=this._self._c;return t("div",{staticClass:"video__content"},[t("video",{attrs:{id:"video",controls:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon__action-item blue"},[e("img",{staticClass:"icon__action-item--img",staticStyle:{"margin-right":"5px"},attrs:{src:o(323),alt:""}}),t._v(" "),e("p",{staticClass:"icon__action-item--title"},[t._v("Report")])])},function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"film__thumb-des"}},[e("p",{staticClass:"film__thumb-des-title"},[t._v("Description\n                "),e("img",{staticClass:"film__thumb-des--icon",attrs:{src:o(324),alt:""}})]),t._v(" "),e("div",{attrs:{id:"film__thumb-des-title-content"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right__content-noti"},[e("p",{staticClass:"right__content-noti-title"},[t._v("Notification\n            "),e("img",{staticClass:"right__content-noti-title--img",attrs:{src:o(325),alt:""}})]),t._v(" "),e("div",{staticClass:"right__content-noti-content"},[e("p",{staticClass:"right__content-noti-content--text"},[t._v("\n                    Hello ! welcome to my mini project\n                    check my github for more information\n                    "),e("a",{staticClass:"right__content-noti-content--link",attrs:{href:"https://github.com/huynamboz/box-phim"}},[t._v("Github")]),t._v("\n                    have fun and thanks so much =>.<=\n                ")])])])}],c=o(12),l=(o(326),o(17),o(292),o(199),o(31),o(63),o(327)),d=o.n(l),m=o(295),f=o(300),h=o(296),v=o(297),_={components:{tabRight:m.default,tabLeft:f.default,search:h.default,bookmark:v.default},computed:{pageParam:function(){return this.$route.query.chap}},watch:{pageParam:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getChap();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},data:function(){return{currentFilm:null,listFilm:[],currentChap:0,countSaved:0,listSaved:[]}},mounted:function(){document.body.style.margin=0,console.log(this.$route),this.pageParam?this.currentChap=Number(this.pageParam)-1:this.currentChap=0,this.fetchData(),this.getListFilm()},methods:{checkFavourited:function(){var t=this;return this.listSaved.find((function(e){return e._id==t.currentFilm.movie._id}))},addFavourite:function(){var t=this;if(this.listSaved=JSON.parse(localStorage.getItem("listSaved")),this.listSaved.length>0)if(this.listSaved.find((function(e){return e._id==t.currentFilm.movie._id}))){var e=this.listSaved.findIndex((function(e){return e._id==t.currentFilm.movie._id}));this.listSaved.splice(e,1),localStorage.setItem("listSaved",JSON.stringify(this.listSaved))}else this.listSaved.unshift(this.currentFilm.movie),localStorage.setItem("listSaved",JSON.stringify(this.listSaved));else this.listSaved.push(this.currentFilm.movie),localStorage.setItem("listSaved",JSON.stringify(this.listSaved))},getChap:function(){this.pageParam?this.currentChap=Number(this.pageParam)-1:this.currentChap=0,this.pushVideo()},changeChap:function(t){this.currentFilm.episodes[0].server_data.length>0&&(this.$router.push({query:{chap:t}}),document.querySelectorAll(".list__chap-item").forEach((function(t){t.classList.remove("active")})),document.querySelector(".list__chap-item:nth-child(".concat(t,")")).classList.add("active"))},getListFilm:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=6").then((function(e){t.listFilm=e.items})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},pushVideo:function(){var video=document.getElementById("video");if(d.a.isSupported()){var t=new d.a;t.loadSource("".concat(this.currentFilm.episodes[0].server_data[this.currentChap].link_m3u8)),t.attachMedia(video),video.play()}else video.canPlayType("application/vnd.apple.mpegurl")&&(video.src="https://hd.hdbophim.com/20230103/28650_9abab90e/index.m3u8",video.addEventListener("loadedmetadata",(function(){video.play()})))},fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://ophim1.com/phim/".concat(t.$route.params.id)).then((function(e){t.currentFilm=e,localStorage.setItem("viewRecent",JSON.stringify(t.currentFilm.movie)),t.$nextTick().then((function(){document.querySelectorAll(".list__chap-item")[t.currentChap].classList.add("active")})),document.getElementById("film__thumb-des-title-content").innerHTML=t.currentFilm.movie.content,t.pushVideo(),t.checkFavourited(),t.listSaved=JSON.parse(localStorage.getItem("listSaved")),t.listSaved?t.checkFavourited():t.listSaved=[],console.log("mmmmmmmmmmm",t.listSaved)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},x=_,k=(o(328),o(46)),component=Object(k.a)(x,(function(){var t,e,r,n,c,l=this,d=l._self._c;return d("div",{staticClass:"container-view"},[d("div",{staticClass:"main__content"},[d("div",{staticClass:"main__load-film"},[d("div",{staticClass:"film__detail"},[d("div",{staticClass:"tag__film",on:{click:function(t){return l.$router.push("/")}}},[l._v("Home")]),l._v(" "),d("p",{staticClass:"film__name"},[l._v("Enjoy film \n            "),d("img",{staticClass:"film__tvTag--img",attrs:{src:o(321),alt:""}}),l._v(" "),d("bookmark",{staticClass:"bookmark-responsived",attrs:{listSaved:l.listSaved}})],1),l._v(" "),d("div",{staticClass:"header__search"},[d("search")],1),l._v(" "),d("bookmark",{staticClass:"bookmark-nonresponsive",attrs:{listSaved:l.listSaved}})],1),l._v(" "),d("div",{staticClass:"film__thumb"},[d("img",{staticClass:"film__poster--img",attrs:{src:null===(t=l.currentFilm)||void 0===t?void 0:t.movie.poster_url,alt:""}}),l._v(" "),d("img",{staticClass:"film__thumb--img",attrs:{src:null===(e=l.currentFilm)||void 0===e?void 0:e.movie.thumb_url,alt:""}}),l._v(" "),d("img",{staticClass:"hd__icon",attrs:{src:o(322),alt:""}}),l._v(" "),d("p",{staticClass:"film__thumb-name"},[l._v(l._s(null===(r=l.currentFilm)||void 0===r?void 0:r.movie.name)+"\n            ")]),l._v(" "),d("p",{staticClass:"film_thumb-year"},[l._v(l._s(null===(n=l.currentFilm)||void 0===n?void 0:n.movie.year))])]),l._v(" "),l._m(0),l._v(" "),d("div",{staticClass:"icon__action"},[l.checkFavourited()?d("div",{staticClass:"icon__action-item orange",on:{click:function(t){return l.addFavourite()}}},[d("img",{staticClass:"icon__action-item--img",attrs:{src:o(315),alt:""}}),l._v(" "),d("p",{staticClass:"icon__action-item--title"},[l._v("Unsave")])]):d("div",{staticClass:"icon__action-item orange",on:{click:function(t){return l.addFavourite()}}},[d("img",{staticClass:"icon__action-item--img",attrs:{src:o(315),alt:""}}),l._v(" "),d("p",{staticClass:"icon__action-item--title"},[l._v("Save")])]),l._v(" "),l._m(1)]),l._v(" "),l._m(2),l._v(" "),d("div",{staticClass:"area__chap"},[d("p",{staticClass:"area__chap-title"},[l._v("Episode #"+l._s(Number(this.currentChap)+1))]),l._v(" "),d("div",{staticClass:"list__chap"},l._l(null===(c=l.currentFilm)||void 0===c?void 0:c.episodes[0].server_data,(function(t){return d("div",{staticClass:"list__chap-item",on:{click:function(e){return l.changeChap(t.name)}}},[l._v("\n            "+l._s(t.name))])})),0)])]),l._v(" "),d("div",{staticClass:"right__content"},[l._m(3),l._v(" "),d("tab-right",{attrs:{film:l.listFilm}})],1)])])}),n,!1,null,"73fc8eb4",null);e.default=component.exports;installComponents(component,{Bookmark:o(297).default,Search:o(296).default,TabRight:o(295).default})}}]);