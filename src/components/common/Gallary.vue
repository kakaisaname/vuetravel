<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>    
</template>

<script>
export default {
    name:'CommonGallary',
    props: {
        imgs: {
            type:Array,
            default () {
                // return ['http://img1.qunarzz.com/sight/p0/201305/08/c5c262c16bebca42c8d65eac.jpg_710x360_b2667df4.jpg',
                // 'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_710x360_6933edac.jpg']
                return []
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',   //显示有几张图片。。。
                //下面两个是当点击banner触发事件时，重新计算dom宽度
                observeParents:true,
                observer:true
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed //position:fixed 的元素将相对于屏幕视口（viewport）的位置来指定其位置。并且元素的位置在屏幕滚动时不会改变。
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            background #fff
            // overflow hidden
            height 0
            width 100%
            padding-bottom 50%  //让中间区域宽高一样
            .gallary-img
                width 100%   //如果图片太大可以用这个
            .swiper-pagination
                color #fff
                bottom -1rem     
</style>


