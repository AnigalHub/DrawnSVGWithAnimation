<template>
    <div id="mainMenu">
        <h1>Главное меню</h1>
        <router-link :to="{name: 'GameMenu'}" tag="button">Изучение алфавита в игровой форме</router-link>
        <router-link :to="{name: 'ColorChange'}" tag="button">Svg с анимацией по кнопке</router-link>
        <router-link :to="{name: 'LoopingAnimation'}" tag="button">Svg с цикличной анимацией</router-link>
        <router-link :to="{name: 'Territory'}" tag="button">Svg с анимацией при наведении</router-link>
    </div>
</template>

<script>
    export default {
        name: "mainMenu"
    }
</script>

<style scoped lang="scss">

</style>