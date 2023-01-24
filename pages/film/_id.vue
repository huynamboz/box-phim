<template>
    <div class="container-view">

        <div class="main__content">
            
        <div class="main__load-film">
            <div class="film__detail">
                <div class="tag__film" @click="$router.push('/')">Home</div>
                <p class="film__name">Enjoy film 
                <img src="../../assets/icon/tv.png" alt="" class="film__tvTag--img">
            <bookmark :listSaved="listSaved" class="bookmark-responsived"/>
                    
            </p>
                <div class="header__search">
            <search/>
          </div>
            <bookmark :listSaved="listSaved" class="bookmark-nonresponsive"/>
            </div>
            <div class="film__thumb">
                <img class="film__poster--img" :src="currentFilm?.movie.poster_url" alt="">
                <img :src="currentFilm?.movie.thumb_url" alt="" class="film__thumb--img">
                <img src="../../assets/icon/hd.png" alt="" class="hd__icon">
                <p class="film__thumb-name">{{ currentFilm?.movie.name }}
                </p>
                
                <p class="film_thumb-year">{{ currentFilm?.movie.year  }}</p>
                </div>
            <div class="video__content">
                <video id="video" controls></video>
            </div>
            <div class="icon__action">
                <div class="icon__action-item orange" @click="addFavourite()" v-if="checkFavourited()">
                    <img src="../../assets/icon/save.png" alt="" class="icon__action-item--img">
                    <p class="icon__action-item--title">Unsave</p>
                </div>
                <div class="icon__action-item orange" @click="addFavourite()" v-else>
                    <img src="../../assets/icon/save.png" alt="" class="icon__action-item--img">
                    <p class="icon__action-item--title">Save</p>
                </div>

                <div class="icon__action-item blue">
                    <img src="../../assets/icon/detail.png" alt="" style="margin-right: 5px;" class="icon__action-item--img">
                    <p class="icon__action-item--title">Report</p>
                </div>


            </div>
            <div id="film__thumb-des">
                <p class="film__thumb-des-title">Description
                    <img class="film__thumb-des--icon" src="../../assets/icon/des.png" alt="">
                </p>
                <div id="film__thumb-des-title-content">

                </div>
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

        <div class="right__content">
            <div class="right__content-noti">
                <p class="right__content-noti-title">Notification
                <img src="../../assets/icon/speaker.jpg" alt="" class="right__content-noti-title--img">
                </p>
                <div class="right__content-noti-content">
                    <p class="right__content-noti-content--text">
                        Hello ! welcome to my mini project
                        check my github for more information
                        <a href="https://github.com/huynamboz/box-phim" class="right__content-noti-content--link">Github</a>
                        have fun and thanks so much =>.<=
                    </p>
                </div>
            </div>
        <tab-right :film="listFilm"  />
        </div>
    </div>
    </div>
</template>
<script>
import Hls from 'hls.js'
import tabRight from '../../components/tabRight.vue'
import tabLeft from '../../components/tabLeft.vue'
import search from '../../components/search.vue'
import bookmark from '../../components/bookmark.vue'
export default {
    components: {
        tabRight,
        tabLeft,
        search,
        bookmark
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
            currentChap: 0,
            countSaved:0,
            listSaved: []
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
        checkFavourited(){
            return this.listSaved.find(item => item._id == this.currentFilm.movie._id)
        },
        addFavourite(){
            this.listSaved = JSON.parse(localStorage.getItem('listSaved'))
            if(this.listSaved.length > 0){
                let check = this.listSaved.find(item => item._id == this.currentFilm.movie._id)
                if(check){
                    let index = this.listSaved.findIndex(item => item._id == this.currentFilm.movie._id)
                    this.listSaved.splice(index, 1)
                    localStorage.setItem('listSaved', JSON.stringify(this.listSaved))
                }else{
                    this.listSaved.unshift(this.currentFilm.movie)
                    localStorage.setItem('listSaved', JSON.stringify(this.listSaved))
                }
            }else{
                this.listSaved.push(this.currentFilm.movie)
                localStorage.setItem('listSaved', JSON.stringify(this.listSaved))
            }
        },
        getChap(){
            if(this.pageParam)
            this.currentChap = Number(this.pageParam) - 1
            else this.currentChap = 0
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
                    localStorage.setItem('viewRecent', JSON.stringify(this.currentFilm.movie))
                    this.$nextTick().then(() => {
                        document.querySelectorAll('.list__chap-item')[this.currentChap].classList.add('active')
                    })
                    document.getElementById("film__thumb-des-title-content").innerHTML = this.currentFilm.movie.content
                    this.pushVideo()
                    this.checkFavourited()
                    this.listSaved = JSON.parse(localStorage.getItem('listSaved'))
                    
                    if(this.listSaved) this.checkFavourited();
                    else {
                        this.listSaved = []
                        localStorage.setItem('listSaved', JSON.stringify(this.listSaved))
                    }
                    console.log("mmmmmmmmmmm",this.listSaved)
                }).catch(err => {
                    console.log(err)
                })

        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');
* {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
}
.bookmark-responsived{
    display: none;
}
.bg-black {
    margin: 0;
    padding: 0;
}

.container-view {
    background-color: #f3f9fe;
  border-radius: 20px;
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
    justify-content: center;
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
    display: flex;
    align-items: center;
}
.tag__film{
    background-color:#f96962;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    border-radius: 10px;
}
.tag__film:hover{
    background-color: #e42a20;
    color: #fff;
    transition: .5s;
    cursor: pointer;
}
video{
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0px 8px 20px 0px rgb(173 173 173 / 33%);
    object-fit: cover;
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
    bottom: 50px;
    left: 25%;
    color: #fff;
    font-size: 1.5em;
    font-weight: 500;
    width: 70%;
    height: 25%;
    overflow-y: auto;
    white-space: pre-wrap;
    text-overflow: ellipsis;
}

.film__thumb-name::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
.film__thumb-name::-webkit-scrollbar {
    width: 2px;
}
.film__thumb-name::-webkit-scrollbar-thumb {
    background-color: #f96962;
    border-radius: 10px;
}
.film_thumb-year{
    position: absolute;
    bottom: 30px;
    left: 25%;
    color: #fff;
    font-size: 1em;
    font-weight: 500;
    background-color: #f96962;
    border-radius: 16px;
    padding: 4px 20px;
}
#film__thumb-des{
    height: 160px;
    max-width: 780px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 20px 0px  rgb(173 173 173 / 33%);
    margin-top: 30px;
    
}
#film__thumb-des-title-content{
    text-overflow: ellipsis;
    overflow-y: auto;
    font-weight: 300;
    white-space: pre-wrap;
    font-size: 0.9em;
    height: 130px;
    margin-top: 10px;
    line-height: 1.5em;
}
.icon__action-item--img{
    width: 20px;
    height: 20px;
    display: block;
    margin-right: 0px;
}
.film__thumb-des--icon{
    width: 20px;
    height: 20px;
    display: block;
    float: left;
}
.icon__action{
    display: flex;
    margin-top: 30px;
    justify-content: center;

}
.icon__action-item{
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.8em;
    font-weight: 400;
    padding: 8px 30px;
    border-radius: 8px;

}
.orange{
    box-shadow: 0px 9px 20px 0px #fc777059;
    background-color: #f96962;
}
.blue{
    box-shadow: 0px 10px 20px 0px #44444442;
    background-color: #161616;
}
.orange:hover{
    background-color: #e42a20;
    color: #fff;
    transition: .5s;
    cursor: pointer;
}
.blue:hover{
    color: #fff;
    transition: .5s;
    cursor: pointer;
    background-color: #026bdb;
}
.film__thumb-des-title{
    font-weight: 500;
    display: inline-block;
    border-bottom:solid 2px #f96962;
}
#film__thumb-des-title-content::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
#film__thumb-des-title-content::-webkit-scrollbar {
    width: 2px;
}
#film__thumb-des-title-content::-webkit-scrollbar-thumb {
    background-color: #f96962;
    border-radius: 10px;
}
#film__thumb-des p{
    overflow-y  : auto;
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
    width: 160px;
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
    margin-bottom: 10px;margin-right: 0px;
}
.right__content-noti{
    margin-top: 20px;
    margin-left: 25px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px  rgba(150, 150, 150, 0.247);
    box-sizing: border-box;
    width: 260px;
    padding: 15px;

}
.right__content-noti-title{
    font-size: 1em;
    font-weight: 500;
    margin-bottom: 10px;
    display: inline-block;
    border-bottom: #f96962 2px solid;
}
.right__content-noti-content--text{
    font-size: 0.9em;
    font-weight: 300;
    line-height: 1.5em;
}
.right__content-noti-title--img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-left: 5px;
}
a{
    text-decoration:underline;
    color:#e42a20;
}
p{
    margin: 0;

}
.hd__icon{
    position: absolute;
    left: 36%;
    width: 30px;
    height: 30px;
    bottom: 10%;
    display: block;
}

@media (max-width: 576px) {
    .main__content{
        display: flex;
        flex-direction: column;
    }
    .container-view{
        padding: 0;
        width: 100%;
    }
    video{
        width: 100%;
    }
    .film__detail{
        display: flex;
        flex-direction: column;
    }
    .video__content{
        display: flex;
        width: 100%;
    }
    .bx-search{
        width: 100%;
    }
    .header__search{
        margin: 0;
    }
    .icon__action{
        display: flex;
        justify-content: space-around;
    }
    .icon__action-item{
        margin: 0;
    }
    .right__content-noti{
        margin: 20px 0;
        width: 100%;
    }
    .list__chap{
        width: 100%;
    }
    .main__load-film{
        margin-right: 0;
    }
    .bookmark-responsived{
        display: block;
    }
    .bookmark-nonresponsive{
        display: none;
    }
    
}
</style>