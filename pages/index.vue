<template>

  <div id="app">
    <tab-left :film="film" />

    <div class="tab-container">
      <div class="tabMain">
        <div class="header">
          <div class="header-main__title">
            Discover your movies.
          </div>
          <div class="header__search">
            <div class="bx-search"><img src="../assets/icon/regular/bx-search.svg" alt=""></div>
            <input type="text" placeholder="Search series or movie...">
          </div>
          <div class="header__option"></div>
        </div>

        <div class="film__lasted">
          <div class="film__lasted-item-1 blur__lasted-film">

            <div class="lasted__item-1-bg">
              <img class="lasted__item-1-bg--img" :src="pathImage + film[0]?.poster_url" alt="">
              <div class="content__lasted-item--blur"></div>
              <div class="lasted__item-1-tag">#1 in chart

                <img class="lasted__item-1-tag--fire" src="../assets/icon/fire.png" alt="">
              </div>
              <div class="lasted__item-1-tag-star">
                <img class="lasted__item-tag--icon" src="../assets/icon/star.png" alt="">
                4.4/5
              </div>
              <div class="lasted__item-1-name">{{ film[0]?.name }}</div>
              <div class="lasted__item-1-year">{{ film[0]?.year }}</div>
              <div class="lasted__item-1-play" @click="$router.push(`/film/${film[0]?.slug}`)">
                <img class="lasted__item-1-play-img" src="../assets/icon/play1.png" alt="">
              </div>
            </div>
          </div>
          <div class="film__lasted-item-2 blur__lasted-film">
            <div class="lasted__item-2-bg">
              <img class="lasted__item-2-bg--img" :src="pathImage + film[1]?.thumb_url" alt="">
              <div class="content__lasted-item--blur"></div>
              <div class="lasted__item-2-tag">
                <img class="lasted__item-tag--icon" src="../assets/icon/star.png" alt="">
                4.2/5
              </div>
              <div class="lasted__item-2-name">{{ film[1]?.name }}</div>
              <div class="lasted__item-2-year">{{ film[1]?.year }}</div>
              <div class="lasted__item-1-play" @click="$router.push(`/film/${film[1]?.slug}`)">
                <img class="lasted__item-1-play-img" src="../assets/icon/play1.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="film__continue-watch--container">
          <div class="film__continue-watch">
            <div class="film__continue-watch--header">
              <div class="continue__watch-title">Suggest watch</div>
              <div class="continue__watch-seemore">see more</div>
            </div>

            <div class="film__continue-watch--list">

              <div class="film__continue-watch--item" v-for="index in suggestFilm">
                <div class="film__continue-watch--item--bg">
                  <img class="film__continue-watch--item--bg--img" :src="pathImage + film[index]?.poster_url" alt="">
                </div>
                <div class="continue__watch-item-bar">
                  <div class="watch__item-bar--text">
                    <p class="watch__item-bar--text--name">{{ film[index]?.name }}</p>
                    <p class="watch__item-bar--text--year"> &nbsp;| {{ film[index]?.year }}</p>
                  </div>
                  <div class="continue__watch-play" @click="$router.push(`/film/${film[index]?.slug}`)">
                    <img class="continue__watch-play--img" src="../assets/icon/play1.png" alt="">
                  </div>
                </div>
              </div>

            </div>





          </div>

          <div class="film__continue-watch-film" :title="viewRecent.name">
            <div class="continue-watch-film-bg">
              <div class="continue-watch-film-bg-blur"></div>
              <img class="continue-watch-film-bg--img" :src="viewRecent.thumb_url" alt="">
              <div class="continue-watch-film-star">
                <img class="continue-watch-film-star--img" src="../assets/icon/star.png" alt="">
                4.2/5
              </div>
              <div class="continue-watch-film-name" :title="viewRecent.name">{{ viewRecent.name }}</div>
              <div class="continue-watch-film-watchNow" @click="$router.push(`/film/${viewRecent.slug}`)">
                <img class="continue-watch-film-watchNow--img" src="../assets/icon/play1.png" alt="">
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
      <tab-right :film="film"/>
    </div>
  </div>
</template>

<script>
import tabLeft from '../layout/tabLeft.vue'
import tabRight from '../layout/tabRight.vue'
export default {
  components: {
    tabLeft,
    tabRight
  },
  data() {
    return {
      film: [],
      viewRecent: {},
      suggestFilm: [3, 4,5,6],
      pathImage: 'https://img.hiephanhthienha.com/uploads/movies/'
    }
  },
  mounted() {
    console.log(this.$route)
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let res = await this.$axios.$get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=5')
      this.film = res.items;
      console.log("aaaaaaaaaa", this.film)
      if (!localStorage.getItem('viewRecent'))
        localStorage.setItem('viewRecent', JSON.stringify(this.film[5]))
      this.viewRecent = JSON.parse(localStorage.getItem('viewRecent'))
    },
    go() {
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}



.header {
  display: flex;
}

.header__title {
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
}

.header__search {
  display: flex;
  max-height: 56px;
  justify-content: center;
  background-color: #f0f4f7;
  padding: 10px 20px 10px 10px;
  border-radius: 15px;
}

.header-main__title {
  font-size: 1.6em;
  font-weight: 600;
  margin-top: 10px;
  margin-right: 50px;

}

.bx-search {
  width: 30px;
  height: 30px;
  margin-top: 6px;
  margin-left: 10px;
}

.header__search input {
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  padding-right: 40px;
  height: 30px;
  background-color: transparent;

}

.header__search input::placeholder {
  color: #d1d3d7;
}

.tabMain {
  padding: 0 10px 0 150px;
  margin-top: 40px;
}


.film__lasted {
  display: flex;
  margin-top: 40px;
}

.lasted__item-1-bg {
  position: relative;

}

.lasted__item-2-bg {
  position: relative;
}

.lasted__item-1-bg--img {
  width: 450px;
  height: 252px;
  border-radius: 28px;
  object-fit: cover;
  display: block;
}

.content__lasted-item--blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7120973389355743) 0%, rgba(249, 239, 240, 0) 100%);
  z-index: 0;
  border-radius: 28px;
}

.lasted__item-1-name {
  position: absolute;
  bottom: 40px;
  font-size: 1.1em;
  color: #fff;
  font-weight: 500;
  left: 35px;
}

.lasted__item-2-name {
  width: 100px;
  position: absolute;
  bottom: 40px;
  font-size: 1.1em;
  color: #fff;
  font-weight: 500;
  left: 35px;
}

.lasted__item-1-year {
  position: absolute;
  bottom: 15px;
  color: #fff;
  font-weight: 300;
  left: 35px;
}

.lasted__item-2-year {
  position: absolute;
  bottom: 20px;
  color: #fff;
  font-weight: 300;
  left: 35px;
}

.lasted__item-1-play {
  bottom: 20px;
  right: 25px;
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(143 143 143);
}

.blur__lasted-film {
  box-shadow: 1px 0px 20px 0px rgb(173 173 173 / 78%);
  border-radius: 28px;
}

.lasted__item-1-play:hover {
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 1px 0px 20px 1px rgb(230 230 230);
}

.lasted__item-2-play {
  bottom: 20px;
  right: 25px;
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  background-color: #717171d4;
}

.lasted__item-1-play-img {
  width: 30px;
  height: 30px;

}

.lasted__item-1-tag {
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  position: absolute;
  font-weight: 500;
  padding: 4px 18px;
  top: 30px;
  left: 40px;
}

.lasted__item-1-tag--fire {
  width: 20px;
  height: 20px;
}

.lasted__item-tag--icon {
  width: 12px;
  height: 12px;
}

.lasted__item-2-tag {
  position: absolute;
  top: 38px;
  left: 40px;
  color: #fff;
  font-weight: 500;
}

.lasted__item-1-tag-star {
  position: absolute;
  top: 38px;
  right: 40px;
  color: #fff;
  font-weight: 500;
}

.film__lasted-item-2 {
  margin-left: 30px;
}

.lasted__item-2-bg--img {
  width: 252px;
  height: 252px;
  border-radius: 28px;
  object-fit: cover;
  display: block;
}


/* sêond content */
.film__continue-watch {}

.film__continue-watch--header {
  display: flex;
  align-items: center;
}

.continue__watch-count {
  margin: 0 20px;
  font-size: 1em;
  margin-top: 4px;
  color: #d1d3d7;
  font-weight: 500;
}

.continue__watch-title {
  font-size: 1.6em;
  font-weight: 600;
}

.film__continue-watch--list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  max-width: 560px;
  
}

.film__continue-watch--item--bg--img {
  width: 240px;
  height: 160px;
  border-radius: 20px;
  object-fit: cover;
  display: block;
}

.watch__item-bar--text {
  display: flex;
}

p {
  margin: 0;

}

.film__continue-watch--container {
  display: flex;
  margin-top: 40px;

}

.film__continue-watch--item {
  margin-right: 30px;
  margin-bottom: 20px;
}

.continue__watch-item-bar {
  padding: 8px 10px;
  margin-top: 10px;
  border-radius: 10px;
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 1px 0px 20px 1px rgb(230 230 230);
}

.watch__item-bar--text--name {
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8em;
  font-weight: 500;
}

.continue__watch-play:hover {
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 1px 0px 20px 0px rgb(245 75 75 / 59%);
}

.continue__watch-play--img {
  width: 20px;
  height: 20px;
}

.continue__watch-play {
  background-color: #f54b4b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.watch__item-bar--text--year {
  font-weight: 500;
  font-size: 0.8em;
}

.continue-watch-film-bg--img {
  width: 200px;
  height: 270px;
  border-radius: 30px;
  object-fit: cover;
  display: block;
}

.continue-watch-film-bg {
  position: relative;
}

.film__continue-watch-film p {
  font-weight: 500;
}

.continue-watch-film-bg-blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7120973389355743) 25%, rgba(249, 239, 240, 0) 77%);
  border-radius: 30px;
  z-index: 1;
}

.continue-watch-film-star {
  position: absolute;
  top: 20px;
  right: 50%;
  transform: translateX(50%);
  color: #fff;
  font-weight: 500;
}

.continue-watch-film-name {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 2;
  font-weight: 500;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.continue-watch-film-watchNow {
  position: absolute;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
  background-color: #646b6b;
  width: 130px;
  padding: 5px 5px;
  border-radius: 10px;
  display: flex;
  color: #fff;
  z-index: 2;
  align-items: center;
}

.continue-watch-film-watchNow--img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.continue-watch-film-star--img {
  width: 12px;
  height: 12px;
}
.tab-container{
  display: flex;
  justify-content: center;
}
</style>
