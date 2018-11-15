<template>
    <div>
        <home-header :city="city"></home-header>
        <index-swiper :list="swiperList"></index-swiper>
        <index-icons :iconList="iconList"></index-icons>
        <index-recommend :recommendList="recommendList"></index-recommend>
        <index-Weekend :weekendList="weekendList"></index-Weekend>
    </div>
</template>
<script>
import HomeHeader from '../components/Header'
import IndexSwiper from '../components/Swiper'
import IndexIcons from '../components/Icons'
import IndexRecommend from '../components/Recommend'
import IndexWeekend from '../components/Weekend'
import axios from 'axios'

export default {
    name:'Index',
    components: {
        HomeHeader,
        IndexSwiper,
        IndexIcons,
        IndexRecommend,
        IndexWeekend
    },
    data () {
        return {
            city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    methods: {
        getIndexInfo () {
            axios.get('/api/index.json').then(this.getIndexInfoSucc)
        },
        getIndexInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.city = data.city
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        this.getIndexInfo()
    }
}
</script>
<style>
    
</style>


