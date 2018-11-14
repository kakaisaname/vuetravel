<template>
<!--class="wraper" 解决窗口抖动问题-->
    <div class="wraper"> 
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgurl" alt="item.name">
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
   data () {
       return {
           swiperOption:{
               pagination:'.swiper-pagination',
               loop:true
           },
           swiperList:[
               {
                id:'1',
                imgurl:'https://imgs.qunarzz.com/piao/fusion/1811/93/5fcdf1aeb85b4802.jpg_890x330_39f934c8.jpg',
                name:'国色天香陆地乐园'
              },
             {
                 id:'2',
                 imgurl:'https://imgs.qunarzz.com/piao/fusion/1810/d1/7dd61ed311c7dd02.jpg_890x330_0262a5ca.jpg',
                 name:'国色天香陆地乐园'
             },
             {
                 id:'3',
                 imgurl:'https://imgs.qunarzz.com/piao/fusion/1810/23/e24143794d9cbb02.jpg_890x330_9689bdd2.jpg',
                 name:'国色天香陆地乐园'
             }
           ]
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


