<template>
    <div id="territory">
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <h1>Наведи на субъект на Карте</h1>
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