<template>
    <div id="loopingAnimation">
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <h1>Цикличная анимация</h1>
        <div>
            <laptop/>
        </div>
    </div>
</template>

<script>
    import Laptop from "./svg/laptop";
    export default {
        name: "loopingAnimation",
        components: {Laptop}
    }
</script>

<style scoped lang="scss">
    svg{ margin-top: 20px;margin-left: -9 0px;}
</style>
<style  lang="scss">

</style>