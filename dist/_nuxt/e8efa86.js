(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{284:function(t,e,o){t.exports=o.p+"img/play1.45cc6e0.png"},285:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("ccf98f7a",content,!0,{sourceMap:!1})},286:function(t,e,o){t.exports=o.p+"img/star.36cb6f3.png"},287:function(t,e,o){"use strict";var c=o(288),l=o.n(c);e.default=l.a},288:function(t,e){},289:function(t,e,o){t.exports=o.p+"img/close.7147934.png"},290:function(t,e,o){"use strict";o(285)},291:function(t,e,o){var c=o(132)(!1);c.push([t.i,".container__search[data-v-e3194656]{display:flex;align-items:center}.search[data-v-e3194656]{position:absolute;overflow-y:auto;width:350px;height:250px;left:-17px;border-radius:15px;top:56px;margin-top:15px;padding:10px 5px 0;z-index:2;background-color:#fff;box-shadow:1px 0 20px 0 rgba(0,0,0,.21);animation:fade-e3194656 .3s;transition:.5s}@keyframes fade-e3194656{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.removeSearch[data-v-e3194656]:hover{cursor:pointer;border-radius:50%;box-shadow:1px 0 20px 0 rgba(0,0,0,.21)}.search__item[data-v-e3194656]{display:flex;padding:5px 10px;align-items:center;border-radius:15px}.search__item[data-v-e3194656]:hover{cursor:pointer;background-color:#f2f2f2}p[data-v-e3194656]{margin:0}.search__item--thumb--img[data-v-e3194656]{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.search__item--name[data-v-e3194656]{margin-left:10px}.film__name[data-v-e3194656]{font-size:14px;font-weight:600}.film__year[data-v-e3194656]{font-size:12px;margin-bottom:5px}input[data-v-e3194656]{border:none;outline:none;font-size:16px;font-weight:500;padding-right:40px;height:30px;background-color:transparent}",""]),t.exports=c},292:function(t,e,o){"use strict";o.r(e);o(27),o(134),o(38);var c={data:function(){return{urlSearch:"https://ophim1.cc/_next/data/x5eGH4wObN-EpnueF2sPG/tim-kiem.json?keyword=",keySearch:"",isSearching:!1,pathImage:"https://img.hiephanhthienha.com/uploads/movies/",searchResult:[]}},methods:{removeSearch:function(){this.keySearch="",this.isSearching=!1},search:function(){var t=this;this.keySearch.length>0?this.isSearching=!0:this.isSearching=!1,this.keySearch.length>0?this.$axios.$get(this.urlSearch+this.keySearch).then((function(e){t.searchResult=e.pageProps.data.items,console.log(t.searchResult)})):this.searchResult=[]}}},l=(o(290),o(46)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container__search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keySearch,expression:"keySearch"}],attrs:{type:"text",placeholder:"Search series or movie..."},domProps:{value:t.keySearch},on:{input:[function(e){e.target.composing||(t.keySearch=e.target.value)},t.search]}}),t._v(" "),e("img",{staticClass:"removeSearch",staticStyle:{width:"25px",height:"25px"},attrs:{src:o(289),alt:""},on:{click:function(e){return t.removeSearch()}}}),t._v(" "),t.isSearching?e("div",{staticClass:"search"},t._l(t.searchResult,(function(o){return e("div",{staticClass:"search__item",on:{click:function(e){return t.$router.push("/film/".concat(null==o?void 0:o.slug))}}},[e("div",{staticClass:"search__item--thumb"},[e("img",{staticClass:"search__item--thumb--img",attrs:{src:t.pathImage+(null==o?void 0:o.thumb_url),alt:""}})]),t._v(" "),e("div",{staticClass:"search__item--name"},[e("p",{staticClass:"film__name"},[t._v(t._s(null==o?void 0:o.name))]),t._v(" "),e("p",{staticClass:"film__year"},[t._v(t._s(null==o?void 0:o.year))])])])})),0):t._e()])}),[],!1,null,"e3194656",null);e.default=component.exports},293:function(t,e,o){t.exports=o.p+"img/fire.552477a.png"},294:function(t,e,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("00d59cea",content,!0,{sourceMap:!1})},295:function(t,e,o){var content=o(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("59fafe9f",content,!0,{sourceMap:!1})},296:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("417d2cbd",content,!0,{sourceMap:!1})},298:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMThhNy45NTIgNy45NTIgMCAwIDAgNC44OTctMS42ODhsNC4zOTYgNC4zOTYgMS40MTQtMS40MTQtNC4zOTYtNC4zOTZBNy45NTIgNy45NTIgMCAwIDAgMTggMTBjMC00LjQxMS0zLjU4OS04LTgtOHMtOCAzLjU4OS04IDggMy41ODkgOCA4IDh6bTAtMTRjMy4zMDkgMCA2IDIuNjkxIDYgNnMtMi42OTEgNi02IDYtNi0yLjY5MS02LTYgMi42OTEtNiA2LTZ6Ii8+PC9zdmc+"},299:function(t,e,o){"use strict";var c=o(309),l=o(287),n=(o(303),o(46)),component=Object(n.a)(l.default,c.a,c.b,!1,null,"24be556f",null);e.default=component.exports},300:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgM0g0Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTRjMCAxLjEwMy44OTcgMiAyIDJoMTZjMS4xMDMgMCAyLS44OTcgMi0yVjVjMC0xLjEwMy0uODk3LTItMi0yem0uMDAxIDZjLS4wMDEgMC0uMDAxIDAgMCAwaC0uNDY2bC0yLjY2Ny00SDIwbC4wMDEgNHpNOS41MzUgOSA2Ljg2OCA1aDIuNTk3bDIuNjY3IDRIOS41MzV6bTUgMC0yLjY2Ny00aDIuNTk3bDIuNjY3IDRoLTIuNTk3ek00IDVoLjQ2NWwyLjY2NyA0SDRWNXptMCAxNHYtOGgxNmwuMDAyIDhINHoiLz48L3N2Zz4="},301:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNzA3IDMuMjkzQS45OTYuOTk2IDAgMCAwIDEzIDNINGExIDEgMCAwIDAtMSAxdjljMCAuMjY2LjEwNS41Mi4yOTMuNzA3bDggOGEuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDktOWEuOTk5Ljk5OSAwIDAgMCAwLTEuNDE0bC04LTh6TTEyIDE5LjU4NmwtNy03VjVoNy41ODZsNyA3TDEyIDE5LjU4NnoiLz48Y2lyY2xlIGN4PSI4LjQ5NiIgY3k9IjguNDk1IiByPSIxLjUwNSIvPjwvc3ZnPg=="},302:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiLz48cGF0aCBkPSJNMTggMTlINVY2aDhjMC0uNzEyLjE1My0xLjM4Ny40MjItMkg1Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTNjMCAxLjEwMy44OTcgMiAyIDJoMTNjMS4xMDMgMCAyLS44OTcgMi0ydi04LjQyMkE0Ljk2MiA0Ljk2MiAwIDAgMSAxOCAxMXY4eiIvPjwvc3ZnPg=="},303:function(t,e,o){"use strict";o(294)},304:function(t,e,o){var c=o(132)(!1);c.push([t.i,".tabLeft[data-v-24be556f]{padding:0 50px;height:100vh;position:fixed;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;top:0;left:0;z-index:1}.avatar[data-v-24be556f]{-o-object-fit:cover;object-fit:cover;width:50px;height:50px;border-radius:50%;margin:20px 0}",""]),t.exports=c},305:function(t,e,o){"use strict";o(295)},306:function(t,e,o){var c=o(132)(!1);c.push([t.i,".tabRight[data-v-6869a99c]{margin-left:25px}.list__hot-film--item[data-v-6869a99c]{position:relative;margin-bottom:20px;border-radius:11px}.list__hot-film--item__bg--img[data-v-6869a99c]{width:260px;height:150px;border-radius:11px;-o-object-fit:cover;object-fit:cover}.list__hot-film--item__info--play[data-v-6869a99c]{width:25px;height:25px;display:block}.list__hot-film--item__info--play-btn[data-v-6869a99c]{width:28px;display:flex;justify-content:center;align-items:center;background-color:hsla(0,0%,56.1%,.783);padding:2px;border-radius:50%;height:28px}.list__hot-film--item__info--play-btn[data-v-6869a99c]:hover{cursor:pointer;background-color:#606060;transition:.4s}p[data-v-6869a99c]{margin:0}.list__film-hot-text[data-v-6869a99c]{margin:0 10px;color:#fff}.list__hot-film--item__info--title[data-v-6869a99c]{font-size:.9em;width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list__hot-film--item__info--time[data-v-6869a99c]{font-size:.8em;font-weight:300;line-height:10px}.star--img[data-v-6869a99c]{width:12px;height:12px;margin:0 5px}.hr[data-v-6869a99c]{height:70%;width:.5px;margin:0 5px;background-color:#fff}.star[data-v-6869a99c]{color:#fff;font-size:.9em}.list__hot-film--item__info[data-v-6869a99c]{position:absolute;bottom:0;display:flex;justify-content:center;align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);width:100%;height:50px;border-radius:11px}.tabRight__title[data-v-6869a99c]{margin-top:45px;font-size:1.2em;font-weight:500;margin-bottom:15px}.film-hot-img[data-v-6869a99c]{width:20px;height:20px;margin-left:5px}",""]),t.exports=c},307:function(t,e,o){"use strict";o(296)},308:function(t,e,o){var c=o(132)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap);"]),c.push([t.i,'*[data-v-617cfae4]{font-family:"Poppins",sans-serif}.header[data-v-617cfae4]{display:flex}.header__title[data-v-617cfae4]{font-size:20px;font-weight:600;margin:20px 0}.header__search[data-v-617cfae4]{display:flex;max-height:56px;justify-content:center;background-color:#f0f4f7;padding:10px 20px 10px 10px;border-radius:15px;align-items:center;position:relative}.header-main__title[data-v-617cfae4]{font-size:1.6em;font-weight:600;margin-top:10px;margin-right:50px}.bx-search[data-v-617cfae4]{width:30px;height:30px;margin-top:6px;margin-left:10px}.header__search input[data-v-617cfae4]{border:none;outline:none;font-size:16px;font-weight:500;padding-right:40px;height:30px;background-color:transparent}.header__search input[data-v-617cfae4]::-moz-placeholder{color:#d1d3d7}.header__search input[data-v-617cfae4]::placeholder{color:#d1d3d7}.tabMain[data-v-617cfae4]{padding:0 10px 0 150px;margin-top:40px}.film__lasted[data-v-617cfae4]{display:flex;margin-top:40px}.lasted__item-1-bg[data-v-617cfae4],.lasted__item-2-bg[data-v-617cfae4]{position:relative}.lasted__item-1-bg--img[data-v-617cfae4]{width:450px;height:252px;border-radius:28px;-o-object-fit:cover;object-fit:cover;display:block}.content__lasted-item--blur[data-v-617cfae4]{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;background:linear-gradient(0deg,rgba(0,0,0,.7120973389355743),rgba(249,239,240,0));z-index:0;border-radius:28px}.lasted__item-1-name[data-v-617cfae4],.lasted__item-2-name[data-v-617cfae4]{position:absolute;bottom:40px;font-size:1.1em;color:#fff;font-weight:500;left:35px}.lasted__item-2-name[data-v-617cfae4]{width:100px}.lasted__item-1-year[data-v-617cfae4]{bottom:15px}.lasted__item-1-year[data-v-617cfae4],.lasted__item-2-year[data-v-617cfae4]{position:absolute;color:#fff;font-weight:300;left:35px}.lasted__item-2-year[data-v-617cfae4]{bottom:20px}.lasted__item-1-play[data-v-617cfae4]{bottom:20px;right:25px;position:absolute;border-radius:50%;width:40px;height:40px;display:flex;justify-content:center;align-items:center;background-color:#8f8f8f}.blur__lasted-film[data-v-617cfae4]{box-shadow:1px 0 20px 0 hsla(0,0%,67.8%,.78);border-radius:28px}.lasted__item-1-play[data-v-617cfae4]:hover{cursor:pointer;transition:.5s;box-shadow:1px 0 20px 1px #e6e6e6}.lasted__item-2-play[data-v-617cfae4]{bottom:20px;right:25px;position:absolute;border-radius:50%;width:40px;height:40px;display:flex;justify-content:center;align-items:center;opacity:.9;background-color:hsla(0,0%,44.3%,.83137)}.lasted__item-1-play-img[data-v-617cfae4]{width:30px;height:30px}.lasted__item-1-tag[data-v-617cfae4]{background-color:#fff;border-radius:20px;text-align:center;position:absolute;font-weight:500;padding:4px 18px;top:30px;left:40px}.lasted__item-1-tag--fire[data-v-617cfae4]{width:20px;height:20px}.lasted__item-tag--icon[data-v-617cfae4]{width:12px;height:12px}.lasted__item-2-tag[data-v-617cfae4]{left:40px}.lasted__item-1-tag-star[data-v-617cfae4],.lasted__item-2-tag[data-v-617cfae4]{position:absolute;top:38px;color:#fff;font-weight:500}.lasted__item-1-tag-star[data-v-617cfae4]{right:40px}.film__lasted-item-2[data-v-617cfae4]{margin-left:30px}.lasted__item-2-bg--img[data-v-617cfae4]{width:252px;height:252px;border-radius:28px;-o-object-fit:cover;object-fit:cover;display:block}.film__continue-watch--header[data-v-617cfae4]{display:flex;align-items:center}.continue__watch-count[data-v-617cfae4]{font-size:1em;margin:4px 20px 0;color:#d1d3d7;font-weight:500}.continue__watch-title[data-v-617cfae4]{font-size:1.6em;font-weight:600}.film__continue-watch--list[data-v-617cfae4]{display:flex;flex-wrap:wrap;margin-top:30px;max-width:560px}.film__continue-watch--item--bg--img[data-v-617cfae4]{width:240px;height:160px;border-radius:20px;-o-object-fit:cover;object-fit:cover;display:block}.watch__item-bar--text[data-v-617cfae4]{display:flex}p[data-v-617cfae4]{margin:0}.film__continue-watch--container[data-v-617cfae4]{display:flex;margin-top:40px}.film__continue-watch--item[data-v-617cfae4]{margin-right:30px;margin-bottom:20px}.continue__watch-item-bar[data-v-617cfae4]{padding:8px 10px;margin-top:10px;border-radius:10px;width:230px;display:flex;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:1px 0 20px 1px #e6e6e6}.watch__item-bar--text--name[data-v-617cfae4]{width:110px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.8em;font-weight:500}.continue__watch-play[data-v-617cfae4]:hover{cursor:pointer;transition:.5s;box-shadow:1px 0 20px 0 rgba(245,75,75,.59)}.continue__watch-play--img[data-v-617cfae4]{width:20px;height:20px}.continue__watch-play[data-v-617cfae4]{background-color:#f54b4b;display:flex;justify-content:center;align-items:center;border-radius:50%;width:30px;height:30px}.watch__item-bar--text--year[data-v-617cfae4]{font-weight:500;font-size:.8em}.continue-watch-film-bg--img[data-v-617cfae4]{width:200px;height:270px;border-radius:30px;-o-object-fit:cover;object-fit:cover;display:block}.continue-watch-film-bg[data-v-617cfae4]{position:relative}.film__continue-watch-film p[data-v-617cfae4]{font-weight:500}.continue-watch-film-bg-blur[data-v-617cfae4]{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;background:linear-gradient(0deg,rgba(0,0,0,.7120973389355743) 25%,rgba(249,239,240,0) 77%);border-radius:30px;z-index:1}.continue-watch-film-star[data-v-617cfae4]{position:absolute;top:20px;right:50%;transform:translateX(50%);color:#fff;font-weight:500}.continue-watch-film-name[data-v-617cfae4]{position:absolute;bottom:60px;left:50%;transform:translateX(-50%);color:#fff;z-index:2;font-weight:500;width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.continue-watch-film-watchNow[data-v-617cfae4]{position:absolute;bottom:20px;right:50%;transform:translateX(50%);background-color:#646b6b;width:130px;padding:5px;border-radius:10px;display:flex;color:#fff;z-index:2;align-items:center}.continue-watch-film-watchNow--img[data-v-617cfae4]{width:20px;height:20px;margin-right:5px}.continue-watch-film-star--img[data-v-617cfae4]{width:12px;height:12px}.tab-container[data-v-617cfae4]{display:flex;justify-content:center}',""]),t.exports=c},309:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return l}));var c=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},l=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"tabLeft"},[e("img",{staticClass:"avatar",attrs:{src:"https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/6/l65_coral-rerelease_2009_vietnam_1sht_1_.jpg",alt:""}}),t._v(" "),e("div",{staticClass:"list__menu"},[e("div",{staticClass:"menu__viewRecent"},[e("img",{attrs:{src:o(300),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__favour"},[e("img",{attrs:{src:o(301),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__notify"},[e("img",{attrs:{src:o(302),alt:""}})]),t._v(" "),e("div",{staticClass:"menu__setting"})]),t._v(" "),e("div",{staticClass:"film__saved"},[e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"}),t._v(" "),e("div",{staticClass:"film__saved-item"})])])}]},310:function(t,e,o){"use strict";o.r(e);o(38);var c=[function(){var t=this._self._c;return t("div",{staticClass:"bx-search"},[t("img",{attrs:{src:o(298),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"lasted__item-1-tag"},[this._v("#1 in chart\n\n              "),t("img",{staticClass:"lasted__item-1-tag--fire",attrs:{src:o(293),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"lasted__item-1-tag-star"},[t("img",{staticClass:"lasted__item-tag--icon",attrs:{src:o(286),alt:""}}),this._v("\n              4.4/5\n            ")])},function(){var t=this._self._c;return t("div",{staticClass:"lasted__item-2-tag"},[t("img",{staticClass:"lasted__item-tag--icon",attrs:{src:o(286),alt:""}}),this._v("\n              4.2/5\n            ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"film__continue-watch--header"},[e("div",{staticClass:"continue__watch-title"},[t._v("Suggest watch")]),t._v(" "),e("div",{staticClass:"continue__watch-seemore"},[t._v("see more")])])},function(){var t=this._self._c;return t("div",{staticClass:"continue-watch-film-star"},[t("img",{staticClass:"continue-watch-film-star--img",attrs:{src:o(286),alt:""}}),this._v("\n              4.2/5\n            ")])}],l=o(12),n=(o(63),o(299)),r=[function(){var t=this._self._c;return t("p",{staticClass:"tabRight__title"},[this._v("Film hot "),t("img",{staticClass:"film-hot-img",attrs:{src:o(293),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"star"},[t("img",{staticClass:"star--img",attrs:{src:o(286),alt:""}}),this._v("\n                    4.2/5\n                ")])}],d={props:["film"],data:function(){return{dataFilm:this.film,filmHot:[9,10,11,12,13,14],pathImage:"https://img.hiephanhthienha.com/uploads/movies/"}},mounted:function(){console.log("hhhhhhhhhhhhhhhhh",this.film)},methods:{}},f=(o(305),o(46)),m=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabRight"},[t._m(0),t._v(" "),e("div",{staticClass:"list__hot-film"},t._l(t.filmHot,(function(c){var l,n,r,d;return e("div",{staticClass:"list__hot-film--item",attrs:{title:null===(l=t.film[c])||void 0===l?void 0:l.name}},[e("div",{staticClass:"list__hot-film--item__bg"},[e("img",{staticClass:"list__hot-film--item__bg--img",attrs:{src:t.pathImage+(null===(n=t.film[c])||void 0===n?void 0:n.poster_url),alt:""}})]),t._v(" "),e("div",{staticClass:"list__hot-film--item__info"},[e("div",{staticClass:"list__hot-film--item__info--play-btn",on:{click:function(e){var o;return t.$router.push("film/".concat(null===(o=t.film[c])||void 0===o?void 0:o.slug))}}},[e("img",{staticClass:"list__hot-film--item__info--play",attrs:{src:o(284),alt:""}})]),t._v(" "),e("div",{staticClass:"list__film-hot-text"},[e("p",{staticClass:"list__hot-film--item__info--title"},[t._v(t._s(null===(r=t.film[c])||void 0===r?void 0:r.name))]),t._v(" "),e("p",{staticClass:"list__hot-film--item__info--time"},[t._v(t._s(null===(d=t.film[c])||void 0===d?void 0:d.year))])]),t._v(" "),e("div",{staticClass:"hr"}),t._v(" "),t._m(1,!0)])])})),0)])}),r,!1,null,"6869a99c",null).exports,_=o(292),h={components:{tabLeft:n.default,tabRight:m,search:_.default},data:function(){return{film:[],viewRecent:{},suggestFilm:[3,4],pathImage:"https://img.hiephanhthienha.com/uploads/movies/"}},mounted:function(){console.log(this.$route),this.fetchData()},methods:{fetchData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=5");case 2:o=e.sent,t.film=o.items,console.log("aaaaaaaaaa",t.film),localStorage.getItem("viewRecent")||localStorage.setItem("viewRecent",JSON.stringify(t.film[5])),t.viewRecent=JSON.parse(localStorage.getItem("viewRecent"));case 7:case"end":return e.stop()}}),e)})))()},go:function(){}}},v=(o(307),Object(f.a)(h,(function(){var t,e,c,l,n,r,d=this,f=d._self._c;return f("div",{attrs:{id:"app"}},[f("tab-left",{attrs:{film:d.film}}),d._v(" "),f("div",{staticClass:"tab-container"},[f("div",{staticClass:"tabMain"},[f("div",{staticClass:"header"},[f("div",{staticClass:"header-main__title"},[d._v("\n          Discover your movies.\n        ")]),d._v(" "),f("div",{staticClass:"header__search"},[d._m(0),d._v(" "),f("search")],1),d._v(" "),f("div",{staticClass:"header__option"})]),d._v(" "),f("div",{staticClass:"film__lasted"},[f("div",{staticClass:"film__lasted-item-1 blur__lasted-film"},[f("div",{staticClass:"lasted__item-1-bg"},[f("img",{staticClass:"lasted__item-1-bg--img",attrs:{src:d.pathImage+(null===(t=d.film[0])||void 0===t?void 0:t.poster_url),alt:""}}),d._v(" "),f("div",{staticClass:"content__lasted-item--blur"}),d._v(" "),d._m(1),d._v(" "),d._m(2),d._v(" "),f("div",{staticClass:"lasted__item-1-name"},[d._v(d._s(null===(e=d.film[0])||void 0===e?void 0:e.name))]),d._v(" "),f("div",{staticClass:"lasted__item-1-year"},[d._v(d._s(null===(c=d.film[0])||void 0===c?void 0:c.year))]),d._v(" "),f("div",{staticClass:"lasted__item-1-play",on:{click:function(t){var e;return d.$router.push("/film/".concat(null===(e=d.film[0])||void 0===e?void 0:e.slug))}}},[f("img",{staticClass:"lasted__item-1-play-img",attrs:{src:o(284),alt:""}})])])]),d._v(" "),f("div",{staticClass:"film__lasted-item-2 blur__lasted-film"},[f("div",{staticClass:"lasted__item-2-bg"},[f("img",{staticClass:"lasted__item-2-bg--img",attrs:{src:d.pathImage+(null===(l=d.film[1])||void 0===l?void 0:l.thumb_url),alt:""}}),d._v(" "),f("div",{staticClass:"content__lasted-item--blur"}),d._v(" "),d._m(3),d._v(" "),f("div",{staticClass:"lasted__item-2-name"},[d._v(d._s(null===(n=d.film[1])||void 0===n?void 0:n.name))]),d._v(" "),f("div",{staticClass:"lasted__item-2-year"},[d._v(d._s(null===(r=d.film[1])||void 0===r?void 0:r.year))]),d._v(" "),f("div",{staticClass:"lasted__item-1-play",on:{click:function(t){var e;return d.$router.push("/film/".concat(null===(e=d.film[1])||void 0===e?void 0:e.slug))}}},[f("img",{staticClass:"lasted__item-1-play-img",attrs:{src:o(284),alt:""}})])])])]),d._v(" "),f("div",{staticClass:"film__continue-watch--container"},[f("div",{staticClass:"film__continue-watch"},[d._m(4),d._v(" "),f("div",{staticClass:"film__continue-watch--list"},d._l(d.suggestFilm,(function(t){var e,c,l;return f("div",{staticClass:"film__continue-watch--item"},[f("div",{staticClass:"film__continue-watch--item--bg"},[f("img",{staticClass:"film__continue-watch--item--bg--img",attrs:{src:d.pathImage+(null===(e=d.film[t])||void 0===e?void 0:e.poster_url),alt:""}})]),d._v(" "),f("div",{staticClass:"continue__watch-item-bar"},[f("div",{staticClass:"watch__item-bar--text"},[f("p",{staticClass:"watch__item-bar--text--name"},[d._v(d._s(null===(c=d.film[t])||void 0===c?void 0:c.name))]),d._v(" "),f("p",{staticClass:"watch__item-bar--text--year"},[d._v("  | "+d._s(null===(l=d.film[t])||void 0===l?void 0:l.year))])]),d._v(" "),f("div",{staticClass:"continue__watch-play",on:{click:function(e){var o;return d.$router.push("/film/".concat(null===(o=d.film[t])||void 0===o?void 0:o.slug))}}},[f("img",{staticClass:"continue__watch-play--img",attrs:{src:o(284),alt:""}})])])])})),0)]),d._v(" "),f("div",{staticClass:"film__continue-watch-film",attrs:{title:d.viewRecent.name}},[f("div",{staticClass:"continue-watch-film-bg"},[f("div",{staticClass:"continue-watch-film-bg-blur"}),d._v(" "),f("img",{staticClass:"continue-watch-film-bg--img",attrs:{src:d.viewRecent.thumb_url,alt:""}}),d._v(" "),d._m(5),d._v(" "),f("div",{staticClass:"continue-watch-film-name",attrs:{title:d.viewRecent.name}},[d._v(d._s(d.viewRecent.name))]),d._v(" "),f("div",{staticClass:"continue-watch-film-watchNow",on:{click:function(t){return d.$router.push("/film/".concat(d.viewRecent.slug))}}},[f("img",{staticClass:"continue-watch-film-watchNow--img",attrs:{src:o(284),alt:""}}),d._v("\n              Continue\n            ")])])])])]),d._v(" "),f("tab-right",{attrs:{film:d.film}})],1)],1)}),c,!1,null,"617cfae4",null));e.default=v.exports;installComponents(v,{Search:o(292).default})}}]);