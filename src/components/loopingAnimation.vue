<template>
    <div id="loopingAnimation">
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Цикличная анимация</h1>
            <div>
                <laptop/>
            </div>
        </div>
        <screen-rotation/>
    </div>
</template>

<script>
    import Laptop from "./svg/laptop";
    import ScreenRotation from "./screenRotation";
    export default {
        name: "loopingAnimation",
        components: {ScreenRotation, Laptop}
    }
</script>

<style scoped lang="scss">
    svg{margin-top: -5px;}
</style>
