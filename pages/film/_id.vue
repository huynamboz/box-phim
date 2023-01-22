<template>
    <div class="container-view">

        <div class="main__content">
            
        <div class="main__load-film">
            <div class="film__detail">
                <div class="tag__film">Watch</div>
                <p class="film__name">Enjoy film 
                <img src="../../assets/icon/tv.png" alt="" class="film__tvTag--img">
                </p>
                <div class="header__search">
            <div class="bx-search"><img src="../../assets/icon/regular/bx-search.svg" alt=""></div>
            <search/>
          </div>
            </div>
            <div class="film__thumb">
                <img class="film__poster--img" :src="currentFilm?.movie.poster_url" alt="">
                <img :src="currentFilm?.movie.thumb_url" alt="" class="film__thumb--img">
                <p class="film__thumb-name">{{ currentFilm?.movie.name }}
                </p>
                <p class="film_thumb-year">{{ currentFilm?.movie.year  }}</p>
                </div>
            <div class="video__content">
                <video id="video" controls></video>
            </div>
            <div class="area__chap">
                <p class="area__chap-title">Episode #{{ Number(this.currentChap) +1 }}</p>
            <div class="list__chap" >
                <div class="list__chap-item"  
                v-for="item in currentFilm?.episodes[0].server_data"
                @click="changeChap(item.name)">
                {{  item.name }}</div>
            </div>
        </div>
        </div>


        <tab-right :film="listFilm"  />
    </div>
    </div>
</template>
<script>
import Hls from 'hls.js'
import tabRight from '../../components/tabRight.vue'
import tabLeft from '../../components/tabLeft.vue'
import search from '../../components/search.vue'
export default {
    components: {
        tabRight,
        tabLeft,
        search
    },
    computed:{
        pageParam(){
            return this.$route.query.chap
        }
    },
    watch:{
        pageParam:async function(){
        await this.getChap()
    }
    },
    data() {
        return {
            currentFilm: null,
            listFilm: [],
            currentChap: 0
        }
    },
    mounted() {
        document.body.style.margin = 0
        console.log(this.$route)
        if(this.pageParam)
            this.currentChap = Number(this.pageParam) - 1
            else this.currentChap = 0
        this.fetchData();
        this.getListFilm()
    },
    methods: {
        getChap(){
            if(this.pageParam)
            this.currentChap = Number(this.pageParam) - 1
            else this.currentChap = 0
            console.log("chap", this.currentChap)
            this.pushVideo()
        },
        changeChap(value){
            if(this.currentFilm.episodes[0].server_data.length > 0){
                this.$router.push({ query :{ chap: value }})
            document.querySelectorAll('.list__chap-item').forEach(item => {
                item.classList.remove('active')
            })
            document.querySelector(`.list__chap-item:nth-child(${value})`).classList.add('active')
            }
        },
        async getListFilm() {
            await this.$axios.$get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=6`)
                .then(res => {
                    this.listFilm = res.items;
                    console.log("hhhhhhhhhhhh", this.listFilm)
                }).catch(err => {
                    console.log(err)
                })
        },
        pushVideo(){
            var video = document.getElementById('video');
            // document.querySelector(`.list__chap-item:nth-child(${this.currentChap})`).classList.add('active')
                    
                    if (Hls.isSupported()) {
                        var hls = new Hls();
                        hls.loadSource(`${this.currentFilm.episodes[0].server_data[this.currentChap].link_m3u8}`);
                        hls.attachMedia(video);
                        video.play();
                    }
                    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        
                        video.src = 'https://hd.hdbophim.com/20230103/28650_9abab90e/index.m3u8';
                        video.addEventListener('loadedmetadata', function () {
                            video.play();
                        });
                    }
        },
        async fetchData() {
            
            await this.$axios.$get(`https://ophim1.com/phim/${this.$route.params.id}`)
                .then(res => {
                    this.currentFilm = res;
                    console.log("currentFilm", this.currentFilm)
                    localStorage.setItem('viewRecent', JSON.stringify(this.currentFilm.movie))
                    this.$nextTick().then(() => {
                        document.querySelectorAll('.list__chap-item')[this.currentChap].classList.add('active')
                    })
                    
                    this.pushVideo()

                }).catch(err => {
                    console.log(err)
                })

        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}

.bg-black {
    margin: 0;
    padding: 0;
}

.container-view {
    
    /* background-color: #0b0b0b; */
    padding: 50px 50px 0 50px;
}

#video {
    width: 100%;
}

.video__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    /* background-color: #080808; */
    border-radius: 15px;
}
.main__load-film{
    margin-right: 10px;
    margin-top: 10px;
}
.main__content{
    display: flex;
    /* background-color: #0f1416; */
    border-radius: 15px;
    padding: 20px;
}
.film__detail{
    display: flex;
    margin-bottom: 20px;
    align-items: center;
}
.film__name{
    font-size:1.2em;
    margin-left: 10px;
    font-weight: 500;
}
.tag__film{
    background-color:#f96962;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    border-radius: 15px;
}
video{
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0px 8px 20px 0px rgb(173 173 173 / 33%);
    object-fit: cover;
}
.bx-search {
  width: 30px;
  height: 30px;
  margin-top: 6px;
  margin-left: 10px;
}
.header__search {
  display: flex;
  max-height: 40px;
  justify-content: center;
  background-color: #f0f4f7;
  padding: 6px 20px 6px 10px;
  border-radius: 15px;
  align-items: center;
  position: relative;
  margin-left: 100px;
}
.area__chap{
    margin-top: 20px;
}
.list__chap{
    display: flex;
    width: 800px;
    flex-wrap: wrap;
    margin-top: 5px;
}

.list__chap-item{
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 0, 0);
    padding: 5px 10px;
    border-radius: 5px;
    min-width: 30px;
    margin-top: 10px;
    background-color: #f0f4f7;
    /* background-color: #ad241c; */
    margin-right: 5px;
}
.list__chap-item:hover{
    background-color: #f96962;
    color: #fff;
    cursor: pointer;
}
.active{
    background-color: #f96962;
    color: #fff;
}
.area__chap{
    box-shadow: 0px 4px 20px 0px  rgb(173 173 173 / 33%);
    border-radius: 15px;
    padding: 10px;
    box-sizing: content-box;
    max-width: 780px;
}
.film__thumb{
    position: relative;
}
.film__thumb-name{
    position: absolute;
    top: 30px;
    left: 25%;
    color: #fff;
    font-size: 1.5em;
    font-weight: 500;
    width: 40%;

}
.film_thumb-year{
    position: absolute;
    bottom: 30px;
    left: 25%;
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    background-color: #f96962;
    border-radius: 16px;
    padding: 4px 20px;
}
.film__thumb-originname{
    position: absolute;
}
.film__poster--img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
}
.film__thumb--img{
    height: 80%;
    object-fit: cover;
    border-radius: 10px;
    position: absolute;
    left: 20px;
    top: 10%;
    box-shadow: 0px 4px 20px 0px  rgba(0, 0, 0, 0.33);

}
.film__tvTag--img{
    width: 50px;
    height: 50px;
}
</style>