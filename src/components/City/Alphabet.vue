<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object   //城市
    }    
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    .list
         position absolute
         top 1.58rem       //距离顶部的距离
         right 0           //让list去到右边
         bottom 0          //距离下方区域0 就是接触到底部
         width .4rem       //给出一个宽度  字母表的宽度
         justify-content center     //项目位于容器的中心
         flex-direction column        //城市字母是垂直的，不设置这个是水平的 ABC...
         display flex                //Flex 是 Flexible Box 的缩写，意为"弹性布局" 任何一个容器都可以指定为 Flex 布局
         .item
             line-height .4rem
             text-align center       //让文字水平方向居中
             color $bgColor
</style>


