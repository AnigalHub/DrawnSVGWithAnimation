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
    svg{
        margin-top: 28px;
        margin-left: -20px;
    }
    @media screen and  (min-width: 500px)and  (max-width: 768px) {
        svg{
            margin-top: -20px;
            margin-bottom: 20px;
        }
    }
    @media screen and  (min-width: 768px)and  (max-width: 1200px) {
        svg{margin-top: 10px;}
    }
    @media screen and  (min-width: 500px)and  (max-width: 1200px) {
        svg{margin-left: -40px;}
    }
</style>
