<template>
    <ul class="list">
        <li class="item" 
        v-for="item of letters" 
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >
        {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object   //城市
    },
    computed: {  //计算属性   letters 上面 v-for用到
        letters () {
            const letters = []    //获取含有字母的数组  ['A','B' ...]
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus:false,
            startY:0,
            timer:null   //函数节流 handleTouchMove 防止滑动得太快
        }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop  ////获取A元素距离顶部的高度
    },
    methods: {
        handleLetterClick (e) {
            // console.log(e.target.innerText)  //打印点击的字母
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true   //当手指触摸时  上下拖动时
        },
        handleTouchMove (e) {  //将 startY去掉，放在updated中，是为了不用每次都去计算
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    // const startY = this.$refs['A'][0].offsetTop  //获取A元素距离顶部的高度
                    // console.log(startY)
                    // const touchY = e.touches[0].clientY //距离顶部的高度
                    const touchY = e.touches[0].clientY - 79 //拖动的地方距离输入框下沿的高度
                    const index = Math.floor((touchY - this.startY) / 20)      //每个字母的高度为20像素 .4rem * 50 = 20
                    // console.log(index)
                    if (index >=0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                },16)   //延迟16ms的时间去执行这个方法
            }
        },
        handleTouchEnd () { 
            this.touchStatus = false   //当手指结束触摸时
        }
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


