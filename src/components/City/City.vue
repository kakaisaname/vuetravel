<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './Header'
import CitySearch from './Search'
import CityList from './List'
import CityAlphabet from './Alphabet'
export default {
    name:'City',
    components: {
        // 'city-header':CityHeader
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>

