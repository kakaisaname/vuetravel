<template>
    <div>
        <router-link 
            tag="div" 
            to="/" 
            class="header-abs"
            v-show="showAbs"
            >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
            >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity:0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 50) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 :opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated () {  //全局事件解绑
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        text-align center
        line-height .8rem
        background rgba(0,0,0,.8)
    .header-abs-back
            color #fff
            font-size .4rem    //调节返回按钮的大小
        .header-fixed
            z-index 2      //为了景点详情往下拖动盖住下面的内容
            position fixed
            top 0
            left 0
            right 0
            height .86rem
            line-height .86rem
            text-align center
            color #fff
            background $bgColor
            font-size .32rem       //设置字体大小
            .header-fixed-back
                position absolute
                top 0              //没有这个得话不显示          
                left 0
                width .64rem
                font-size .4rem
                text-align center
                color #fff        
</style>


