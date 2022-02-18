<template>
    <div id="alphabet">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Алфавит с животными</h1>
            <div class="flex-container">
                <div v-for="(letter,index) in Letters" :key="index">
                    <component :is="letter.svg"/>
                </div>
            </div>
        </div>
        <screen-rotation/>
    </div>
</template>

<script>
    import mixinLetters from "../mixins/mixinLetters";
    import ScreenRotation from "./screenRotation";

    export default {
        name: "alphabet",
        components: {ScreenRotation},
        mixins: [mixinLetters],
    }
</script>

<style scoped lang="scss">
    /*Компонент - Алфавит (Alphabet)*/
    #alphabet{padding-bottom: 35px;}
    /*svg*/
    svg{margin: 3px;}
    /*контейнер, который включает в себя повтор блоков*/
    .flex-container{
        margin-top: -13px;
        & > div {width: 14%;}
    }
    /*Адаптивность*/
    @media screen and (min-width: 500px) and (max-width: 768px) {
        /*svg*/
        svg{margin: 1px;}
        /*контейнер, который включает в себя повтор блоков*/
        .flex-container > div {width: 20%;}
    }
    @media screen and (min-width: 768px )and (max-width: 992px) {
        /*контейнер, который включает в себя повтор блоков*/
        .flex-container > div {width: 16%;}
    }
</style>
