<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'    
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
</style>


