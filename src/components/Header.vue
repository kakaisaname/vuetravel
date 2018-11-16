<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                <div class="header-right-city">
                    {{this.city}}
                    <span class="iconfont arrow-icon">&#xe64a;</span>
                </div>
            </div>
        </router-link>
    
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}
</script>

<!--scoped 作用域    移动端的布局一般采用rem方式  
1rem = html font-size = 50px(在reset.css中设置的) 
vue中@符号代表src目录  css中引用@前加~  ~@-->
<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    // @import '~style/mixins.styl';
    .header
        display flex
        line-height .86rem
        background $bgColor
        color #fff
        .header-left
            width .64rem
            float left
            .back-icon
                text-align center
                font-size .4rem
        .header-input 
            flex 1
            height .64rem
            line-height .64rem
            padding-left .2rem
            margin-top .12rem
            margin-left .2rem
            margin-right  .2rem
            height .62rem
            background #fff
            color #ccc
            border-radius .1rem
        .header-right
            color #fff //router-link会改变字体颜色 这里设置颜色
            width 2rem
            .header-right-city
                float right 
                padding-right .3rem
            // ellipsis()
            .arrow-icon
                margin-left -.04rem
                font-size .24rem
</style>