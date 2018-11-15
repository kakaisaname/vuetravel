<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from './Header'
import CitySearch from './Search'
import CityList from './List'
export default {
    name:'City',
    components: {
        // 'city-header':CityHeader
        CityHeader,
        CitySearch,
        CityList
    }
}
</script>

<style lang="stylus" scoped>

</style>

