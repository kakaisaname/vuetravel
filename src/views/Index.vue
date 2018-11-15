<template>
    <div>
        <home-header></home-header>
        <index-swiper></index-swiper>
        <index-icons></index-icons>
    </div>
</template>
<script>
import HomeHeader from '../components/Header'
import IndexSwiper from '../components/Swiper'
import IndexIcons from '../components/Icons'
export default {
    name:'Index',
    components: {
        HomeHeader,
        IndexSwiper,
        IndexIcons
    }
}
</script>
<style>
    
</style>


