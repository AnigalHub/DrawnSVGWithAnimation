<template>
    <div id="territory">
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <div>
            <territory-russia/>
        </div>
    </div>
</template>

<script>
    import TerritoryRussia from "./svg/territoryRussia";
    export default {
        name: "territory",
        components: {TerritoryRussia}
    }
</script>

<style scoped lang="scss">

</style>