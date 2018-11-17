<template>
    <div>
        <home-header></home-header>
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
import { mapState } from 'vuex'

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
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
            lastCity: ''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getIndexInfo () {
            axios.get('/api/index.json?city=' + this.city).then(this.getIndexInfoSucc)
        },
        getIndexInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        this.lastCity = this.city
        this.getIndexInfo()
    },
    activated () {   //当使用了keep-alive 缓存路由后
        if (this.lastCity !== this.city) {  //当城市改变了之后，重新发下ajax请求
            this.lastCity = this.city
            this.getIndexInfo()
        }
    }
}
</script>
<style>
    
</style>


