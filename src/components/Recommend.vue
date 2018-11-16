<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link tag="li" class="item border-bottom" 
            v-for="item of recommendList" 
            :key="item.id"
            :to="'/detail/'+item.id"
            >  <!--border-bottom 1像素边框-->
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>      
    </div>
</template>

<script>
export default {
    name:'Recommend',
    props:{
        recommendList:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixins.styl';
    .recommend-title
        margin-top .2rem   //和上面有点间距
        line-height .8rem
        background #eee
        text-indent .2rem   //缩进
    .item
        overflow hidden
        display flex    //自动撑满
        height 1.9rem   //高除以50（font-size）
        .item-img       //图片的宽和高
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info    
            flex 1  //1自动撑开
            padding .1rem
            min-width 0  //min-width 属性为给定元素设置最小宽度。它可以阻止 width 属性的应用值小于 min-width 的值。
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .1rem      //上下0  左右.1rem
                border-radius .06rem  //3像素  相当于0.06
                color   #fff  
</style>


