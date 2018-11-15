<template>
    <div class="icons">
        <swiper :options="swiperOption"> <!--图片轮播效果-->
            <swiper-slide v-for="(page,index) of pages" :key="index">  <!--翻页轮播-->
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-icon-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    props:{
        iconList:Array
    },
    data () {
        return {
             swiperOption:{
                 autoplay: false   //防止icons 自动滚动到第二页
             }    
        }
    },
    computed: { //计算属性，计算图标页码 这里每页展示8个图片，多余的向后展示
        pages () {
            const pages = [] //定义数组
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index/8)  //向下取整
                if (!pages[page]) {
                    pages[page] = []    //这里是创建数组
                }
                pages[page].push(item)   //将图片加入到 pages数组中
            })
            return pages
        }
    }

}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    @import '~style/mixins.styl';
    .icons >>> .swiper-container
        // overflow hidden  swiper-container 自带这个
        height  0           //按照宽度来的，写0就可以了
        padding-bottom 50%  //往下撑的高度为宽度的50%
    .icons 
            margin-top .1rem
            .icon
                position relative
                overflow hidden //图片太大了
                float left     //左浮动
                width 25%      //宽度25%
                height 0       //图片的高度高了
                padding-bottom 25%  //高度25%
                .icon-img
                    position absolute  //和上面的 position relative 对应
                    top 0
                    left 0
                    right 0
                    box-sizing border-box
                    padding .2rem
                    bottom .44rem //底部留点空间写文字
                    .img-icon-content
                        display block  //包括下一行为了图片居中 
                        height 100%    //图片居中
                        width  100%    //图片居中
                .icon-desc
                    position absolute
                    left 0
                    right 0
                    bottom 0
                    height .44rem
                    line-height .44rem
                    text-align center
                    color $darkTextColor   
                    ellipsis()
                    //下面处理文字描述太长处理
                    //  overflow hidden
                    //  white-space nowrap
                    //  text-overflow ellipsis  //ellipsis 代表省略号    
                
</style>


