<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" 
            src="https://img1.qunarzz.com/travel/d5/1810/14/3e4d6fb5b6c4beb5.jpg  " alt="">
            <div class="banner-info">
                <div class="banner-title">
                    资阳市政府大广场（AAAAAA广场）
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe662;</span>
                    50
                </div>
            </div>
         </div>
        <common-gallary 
            :imgs="imgs"
            v-show="showGallary"
            @close="handleGallaryClose"
            >
        </common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/Gallary'
export default {
    name:'Detail',
    data () {
        return {
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/201305/08/c5c262c16bebca42c8d65eac.jpg_710x360_b2667df4.jpg',
                'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_710x360_6933edac.jpg']   
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    },
    components:{
        CommonGallary
    } 
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 66.7%
        .banner-img
            width 100% 
        .banner-info
            display flex  //弹性布局
            position absolute
            line-height   .6rem
            left 0                  
            right 0                 //设置了left 0 设置 right没什么用
            bottom 0  
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))  //图片渐变的效果 、片【967 
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                padding 0 .4rem    
                line-height .32rem
                height .32rem
                border-radius .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                margin-top .14rem
            .banner-icon
                font-size .24rem    
</style>


