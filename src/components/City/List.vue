<template>
    <div class="list" ref="wrapper">
        <div>
            <!-- <dir class="area"> -->
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.currentCity}}</div>
                </div>
            </div>
        <!-- </dir> -->
        <!-- <dir class="area"> -->
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" 
                    v-for="item of hot" 
                    :key="item.id"
                    @click="handleHotCityClick(item.name)"
                    >
                    <div class="button">
                        {{item.name}}
                    </div>
                </div>
            </div>
            <div class="area" 
            v-for="(item,key) of cities" 
            :key="key"
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                    v-for="innerItem of item" 
                    :key="innerItem.id"
                    @click="handleHotCityClick(innerItem.name)"
                    >
                    {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import  Bscroll from 'better-scroll' //滚动显示
import { mapState,mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        cities:Object,
        hot:Array,
        letter:String
    },
    methods: {
      handleHotCityClick (hotcityname) {
        //   alert(hotcityname)
        //vuex  数据共享 在store.js中写入这个方法
        // this.$store.dispatch('changeCity',hotcityname) 有异步操作或大量数据用这个方法
        // this.$store.commit('changeCity',hotcityname) //下面用了...mapMutations 可以更改为以下方式
        this.changeCity(hotcityname) 
        //页面间的跳转
        this.$router.push('/')
      },
       ...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper) //Bscroll 方法里必须为一个dom元素
    },
    watch: {    //侦听器，监听letter变化了
        letter () {
            if (this.letter) { //如果letter不为空
                const element = this.$refs[this.letter][0]   //通过字母获取到 class=area对应字母下的区域
                // console.log(element)
                this.scroll.scrollToElement(element)  //element必须要为一个dom元素
            }
            // console.log(this.letter)
        }
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })   //将city这个公用数据映射到city这个公用属性当中
    }    
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden  //因为下面设置了 float left 
            padding .1rem .6rem .1rem .1rem   //上 右 下 左
            .button-wrapper
                float left
                width 33.33%
                .button
                    padding .1rem 0
                    margin .1rem
                    text-align center
                    border .02rem solid #ccc    
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem            
</style>