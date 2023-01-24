<template>
    <div class="saved" >
          <img src="../assets/icon/save-header.png" alt="" class="icon__saved"  @click="openBookmark()" >
            <div class="count__saved" @click="openBookmark()" >{{ countSaved }}</div>
            <div class="bookmark__container" v-if="isOpenBM">
            <div class="bookMark" >
            <div class="bookMark__item" v-for="item in listSaved" @click="$router.push(`/film/${item?.slug}`)">
                <div class="bookmark__item-content">
                <div class="bookMark__item--thumb">
                    <img class="bookMark__item--thumb--img"
                        :src="item?.thumb_url"
                        alt="">
                </div>
                <div class="bookMark__item--name" >
                    <p class="film__name">{{ item?.name }}</p>
                    <p class="film__year">{{item?.year}}</p>
                </div>
            </div>
                <div class="bookMark__remove" @click="removeFavou(item?._id)">
                    <img src="../assets/icon/remove.png" alt="" class="bookMark__remove-img"/>
                </div>
            </div>
        </div>
          </div>
        </div>
</template>

<script>

export default {
    props: {
        listSaved: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            countSaved: 0,
            isOpenBM: false,
        }
    },
    watch: {
        listSaved: function (val) {
            this.countSaved = this.listSaved.length;
        }
    },
    mounted() {
    },

    
    methods: {
        removeFavou(id) {
            let index = this.listSaved.findIndex(item => item._id === id);
            this.listSaved.splice(index, 1);
            localStorage.setItem('listSaved', JSON.stringify(this.listSaved));
            this.countSaved = this.listSaved.length;
        },
        openBookmark() {
            this.isOpenBM = !this.isOpenBM;
        }
    }
}
</script>
<style scoped>
.saved{
    margin-left: 20px;
    position: relative;
    z-index: 2;
}
.count__saved{
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fc7770;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.bookMark__remove-img{
    width: 20px;
    height: 20px;
    float: right;
    position: relative;
    z-index: 2;
}
.icon__saved{
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-top: 6px;
}
.bookmark__container::after{
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    top: -18px;
    left: 20px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #ffffff;
}
.bookmark__container{
    position: absolute;
    left: -17px;
top: 40px;
margin-top: 15px;
padding: 10px 0;
background-color: rgb(255, 255, 255);
border-radius: 15px;
z-index: 2;
transition: 0.5s;
box-shadow: 1px 0px 20px 0px rgba(0, 0, 0, 0.21);


}
.bookMark {

    overflow-y: auto;
    width: 350px;
    height: 250px;
    
    
    
    padding: 10px 5px 0 5px;
    animation: fade 0.3s;
}

.saved:hover{
    cursor: pointer;
}
.bookMark::-webkit-scrollbar {
    width: 5px;
}
.bookMark::-webkit-scrollbar-track {
    background: transparent;
}
.bookMark::-webkit-scrollbar-thumb {
    background: #62c7f9;
}
.bookMark::-webkit-scrollbar-thumb:hover {
    background: #62c7f9;
}


@keyframes fade{
    0%{
        opacity: 0;
        transform: translateY(15px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}
.removebookMark:hover{
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 1px 0px 20px 0px rgba(0, 0, 0, 0.21);
}
.bookMark__item {
    display: flex;
    padding: 5px 10px;
    align-items: center;
    border-radius: 15px;
    justify-content: space-between;

}
.bookmark__item-content{
    display: flex;
    align-items: center;
}
.bookMark__item:hover{
    cursor: pointer;
    background-color: #f2f2f2;
}

p {
    margin: 0;
}

.bookMark__item--thumb--img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 6px;
}

.bookMark__item--name {
    margin-left: 10px;
}

.film__name {
    font-size: 14px;
    font-weight: 600;
}

.film__year {
    font-size: 12px;
    margin-bottom: 5px;
}
@media (max-width: 576px){
    .bookmark__container::after{
        position: absolute;
        content: '';
        width: 0px;
        height: 0px;
        top: -18px;
        left: 65%;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid #ffffff;
    }
    .bookmark__container{
        position: absolute;
        left: -600%;
    }
}
</style>