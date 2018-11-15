<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './Header'
import CitySearch from './Search'
export default {
    name:'City',
    components: {
        // 'city-header':CityHeader
        CityHeader,
        CitySearch
    }
}
</script>

<style lang="stylus" scoped>

</style>

