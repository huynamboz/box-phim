<template>
    <div class="container__search">
        <input type="text" v-model="keySearch" placeholder="Search series or movie..." @input="search">
        <img class="removeSearch" style="width:25px;height:25px;" src="../assets/icon/close.png" alt="" @click="removeSearch()">
        <div class="search" v-if="isSearching">
            <div class="search__item" v-for="item in searchResult" @click="$router.push(`/film/${item?.slug}`)">
                <div class="search__item--thumb">
                    <img class="search__item--thumb--img"
                        :src="pathImage + item?.thumb_url"
                        alt="">
                </div>
                <div class="search__item--name">
                    <p class="film__name">{{ item?.name }}</p>
                    <p class="film__year">{{item?.year}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            urlSearch:'https://ophim1.cc/_next/data/x5eGH4wObN-EpnueF2sPG/tim-kiem.json?keyword=',
            keySearch: '',
            isSearching: false,
            pathImage: 'https://img.hiephanhthienha.com/uploads/movies/',
            searchResult: []
        }
    },
    mounted(){
        document.addEventListener('click', ()=>{
            this.isSearching = false
        })
    },
    methods: {
        removeSearch(){
            this.keySearch = '';
            this.isSearching = false;
        },
        search() {
            if(this.keySearch.length > 0) {
                this.isSearching = true
            } else {
                this.isSearching = false
            }
            if (this.keySearch.length > 0) {
                this.$axios.$get(this.urlSearch + this.keySearch)
                    .then(res => {
                        this.searchResult = res.pageProps.data.items 
                        console.log(this.searchResult)
                    })
            } else {
                this.searchResult = []
            }
        }
    }
}
</script>
<style scoped>
.container__search{
    display: flex;
    align-items: center;
}
.search {
    position: absolute;
    overflow-y: auto;
    width: 350px;
    height: 250px;
    left: -17px;
    border-radius: 15px;
    top: 56px;
    margin-top: 15px;
    padding: 10px 5px 0 5px;
    z-index: 2;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 0px 20px 0px rgba(0, 0, 0, 0.21);
    animation: fade 0.3s;
    transition: 0.5s;
}
.search::-webkit-scrollbar {
    width: 5px;
}
.search::-webkit-scrollbar-track {
    background: transparent;
}
.search::-webkit-scrollbar-thumb {
    background: #f96962;
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
.removeSearch:hover{
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 1px 0px 20px 0px rgba(0, 0, 0, 0.21);
}
.search__item {
    display: flex;
    padding: 5px 10px;
    align-items: center;
    border-radius: 15px;

}
.search__item:hover{
    cursor: pointer;
    background-color: #f2f2f2;
}

p {
    margin: 0;
}

.search__item--thumb--img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 6px;
}

.search__item--name {
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

input {
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    padding-right: 40px;
    height: 30px;
    background-color: transparent;

}
</style>