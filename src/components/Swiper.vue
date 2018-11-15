<template>
<!--class="wraper" 解决窗口抖动问题-->
    <div class="wraper"> 
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide> -->
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!--左右箭头-->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!--滚动条-->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
export default {
   name:'IndexSwiper',
   props:{
       list:Array
   },
   data () {
       return {
           swiperOption:{
               pagination:'.swiper-pagination',
               loop:true
           }
       }
   },
   computed:{  //计算属性，如果没有这个的话，图片轮播默认为最后一个图，应该设置为第一个图
       showSwiper () {
           return this.list.length
       }
   }
}
</script>
<style lang="stylus" scoped>
    .wraper >>> .swiper-pagination-bullet-active  //组件样式穿透
             background #fff
    .wraper
        overflow hidden
         width 100%
         height 0
         padding-bottom 27%  //图片宽高比
         background #eee
        .swiper-img
            width 100%
</style>


