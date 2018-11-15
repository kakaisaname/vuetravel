<template>
    <div>
        <div class="recommend-title">周末去哪 </div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">  <!--border-bottom 1像素边框-->
                <div item-img-wrapper>
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>      
    </div>
</template>

<script>
export default {
    name:'Weekend',
    props:{
        weekendList:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixins.styl';
    .recommend-title
        // margin-top .2rem   //和上面有点间距
        line-height .8rem
        background #eee
        text-indent .2rem   //缩进
    // .item
    //     overflow hidden
    //     display flex    //自动撑满
    //     height 1.9rem   //高除以50（font-size）
    .item-img-wrapper   //图片
        overflow hidden
        // height 2.64rem
        padding-bottom 37.09%  //.item-img中设置了height  可以不需要设置
    .item-img       //图片的宽和高
            // width 1.7rem
            // height 2.64rem
            // padding .1rem
            width 100%   //图片填充
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
</style>


