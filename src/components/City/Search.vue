<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                v-for="item of list" 
                :key="item.id"
                @click="handleCityClick(item.name)"
                >{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
      cities:Object  
    },
    data () {
        return {
            keyword:'',   //输入框中的数据  input中v-model数据双向绑定
            list:[],
            timer:null    //节流
        }
    },
    watch: {  //侦听器，监听keyword的改变
        keyword () {
           if (this.timer) {
               clearTimeout(setTimeout)
           }
           if (!this.keyword) {  //关键字取消掉后，列表仍存在 处理
               this.list = []
               return
           }
           this.timer = setTimeout(() => {
               const result = []
               for (let i in this.cities) {
                   this.cities[i].forEach((value) => { //value是具体的城市数据 有id spell name
                       if (value.spell.indexOf(this.keyword) > -1 || 
                       value.name.indexOf(this.keyword) > -1) {      //如果搜索的到这个关键字
                            result.push(value)
                       }
                   });
               }
               this.list = result
           },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    },
    computed: {
        hasNoData () {   //计算属性，当input输入没有查找到的
            return !this.list.length
        }
    },
    methods: {
        handleCityClick (hotcityname) {
        //   alert(hotcityname)
        //vuex  数据共享 在store.js中写入这个方法
        // this.$store.dispatch('changeCity',hotcityname) 有异步操作或大量数据用这个方法
        // this.$store.commit('changeCity',hotcityname) //下面用了...mapMutations 可以更改为以下方式
        this.changeCity(hotcityname)
        //页面间的跳转
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    }   
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    .search
       height .72rem
       padding 0 .1rem
       background $bgColor
       .search-input
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-border-radius .06rem
            color #666
            //下面是让输入的内容太多 input框两边留点距离
            padding 0 .1rem
            box-sizing border-box
    .search-content
         overflow hidden 
         background #eee
         position absolute
         top 1.58rem       //下面4个 top left right bottom 控制上下高低
         left 0
         right 0
         bottom 0 
         z-index 1 //z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面 
         .search-item
             line-height .62rem   //每行的高度
             padding-left .2rem   //距左边的宽度
             color #666
</style>


