<template>
    <div class="tabRight">
        <p class="tabRight__title">Film hot</p>
        <div class="list__hot-film">
            <div class="list__hot-film--item" v-for="index in filmHot" :title="film[index]?.name">
                <div class="list__hot-film--item__bg">
                    <img class="list__hot-film--item__bg--img" :src="pathImage + film[index]?.poster_url" alt="">
                </div>
                <div class="list__hot-film--item__info">
                    <div class="list__hot-film--item__info--play-btn" @click="$router.push(`film/${film[index]?.slug}`)">
                        <img class="list__hot-film--item__info--play" src="../assets/icon/play1.png" alt="">
                    </div>
                    <div class="list__film-hot-text">
                        <p class="list__hot-film--item__info--title">{{ film[index]?.name }}</p>
                    <p class="list__hot-film--item__info--time">{{film[index]?.year}}</p>
                    </div>
                    <div class="hr"></div>
                    <div class="star">
                        <img src="../assets/icon/star.png" alt="" class="star--img">
                        4.2/5
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['film'],
    data() {
        return {
            dataFilm: this.film,
            filmHot:[9,10,11,12,13,14],
            pathImage:'https://img.hiephanhthienha.com/uploads/movies/'
        }
    },
    mounted() {
        console.log("hhhhhhhhhhhhhhhhh",this.film)
    },
    methods: {
    }
}
</script>
<style scoped>
.tabRight{
    margin-left: 25px;
}
.list__hot-film--item{
    position: relative;
    margin-bottom: 20px;
}
.list__hot-film--item__bg{
}
.list__hot-film--item__bg--img{
    width: 260px;
    height: 150px;
    border-radius: 11px;
    object-fit: cover;
}
.list__hot-film--item__info--play{
    width: 25px;
    height: 25px;
    display: block;
}
.list__hot-film--item__info--play-btn{
    width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 50%;
    height: 28px;
}
.list__hot-film--item__info--play-btn:hover{
    cursor: pointer;
    background-color: rgb(143 143 143);
    transition: 0.4s;
    
}
p{
    margin: 0;
}
.list__film-hot-text{
    margin: 0 10px;
    color: #fff;
}
.list__hot-film--item__info--title{
    font-size: 0.9em;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.list__hot-film--item__info--time{
    font-size: 0.8em;
    font-weight: 300;
    line-height: 10px;
}
.star--img{
    width: 12px;
    height: 12px;
    margin:0 5px;
}
.hr{
    height: 70%;
    width: 0.5px;
    margin: 0 5px;
    background-color: #fff;
}
.star{
    color: #fff;
    font-size: 0.9em;
}
.list__hot-film--item__info{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 50px;
    border-radius: 11px;
}
.list__hot-film--item{}
</style>