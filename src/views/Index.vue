<template>
    <div>
        <home-header></home-header>
        <index-swiper></index-swiper>
        <index-icons></index-icons>
        <index-recommend></index-recommend>
    </div>
</template>
<script>
import HomeHeader from '../components/Header'
import IndexSwiper from '../components/Swiper'
import IndexIcons from '../components/Icons'
import IndexRecommend from '../components/Recommend'
export default {
    name:'Index',
    components: {
        HomeHeader,
        IndexSwiper,
        IndexIcons,
        IndexRecommend
    }
}
</script>
<style>
    
</style>


