<template>
    <div class="tabLeft">
        <img class="avatar"
            src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/6/l65_coral-rerelease_2009_vietnam_1sht_1_.jpg"
            alt="">
        <div class="list__menu">
            <div class="menu__viewRecent"><img src="../assets/icon/regular/bx-movie.svg" alt=""></div>
            <div class="menu__favour"><img src="../assets/icon/regular/bx-purchase-tag.svg" alt=""></div>
            <div class="menu__notify"><img src="../assets/icon/regular/bx-notification.svg" alt="">
            </div>
            <div class="menu__setting"></div>
        </div>
        <div class="film__saved">
            <div class="film__saved-item"></div>
            <div class="film__saved-item"></div>
            <div class="film__saved-item"></div>
            <div class="film__saved-item"></div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.tabLeft {
    padding: 0 50px;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;


    top: 0;
    left: 0;
    z-index: 1;
}

.avatar {
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px 0;
}
</style>