<template>
    <div id="territory">
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Наведи на субъект на Карте</h1>
            <div>
                <territory-russia/>
            </div>
        </div>
        <screen-rotation/>
    </div>
</template>

<script>
    import TerritoryRussia from "./svg/territoryRussia";
    import ScreenRotation from "./screenRotation";
    export default {
        name: "territory",
        components: {ScreenRotation, TerritoryRussia}
    }
</script>

<style scoped lang="scss">
    /*блок территория*/
    #territory {
        width: 78%;
        margin: 0 auto;
    }
    /*svg*/
    svg {margin-top: -15px;}

    /*Адаптивность*/
    @media screen and (min-width: 500px) and (max-width: 768px) {
        /*svg*/
        svg {margin-bottom: 20px;}
    }
</style>