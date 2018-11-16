<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>       
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'    
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    .header
        position relative
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        background $bgColor
        font-size .32rem       //设置字体大小
        .header-back
            position absolute
            top 0              //没有这个得话不显示          
            left 0
            width .64rem
            font-size .4rem
            text-align center
            color #fff
</style>


