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
    svg{
        margin-top: 28px;
        margin-left: -20px;
    }
    @media screen and  (min-width: 992px)and  (max-width: 1200px) {
        svg{
            margin-top: 10px;
            margin-left: -10px;
        }
    }
</style>
<style  lang="scss">

</style>