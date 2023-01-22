<template>
    <div class="container">
    <p>hiiiiiiiiii {{ $route.params.id }}</p>
    <video id="video" controls></video>
    </div>
</template>
<script>
import Hls from 'hls.js'

export default {
    data(){
        return{
            film: null
        }
    },
    mounted(){
        console.log(this.$route)
        this.fetchData();
        
        },
    methods: {
        async fetchData() {
            let res = await this.$axios.$get(`https://ophim1.com/phim/${this.$route.params.id}`)
            this.film = res;
            localStorage.setItem('viewRecent', JSON.stringify(this.film.movie))
            var video = document.getElementById('video');
            if (Hls.isSupported()) {
                var hls = new Hls();
                hls.loadSource(`${this.film.episodes[0].server_data[0].link_m3u8}`);
                hls.attachMedia(video);
                video.play();
            }
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = 'https://hd.hdbophim.com/20230103/28650_9abab90e/index.m3u8';
                video.addEventListener('loadedmetadata', function () {
                    video.play();
                });
            }
        }
    }
}
</script>