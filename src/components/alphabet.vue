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
    #alphabet{
        padding-left: 40px;
        padding-bottom: 35px;
    }
    svg{
        margin-top: -83px !important;
        margin-left: -130px !important;
    }
    .flex-container > div {
        width: 16.5%;
        margin-bottom: 8.15px;
        margin-top: 45px;
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        h1{margin-left: -40px;}
        button{margin-left: 25%!important;}
        svg{margin-left: -98px !important;}
        .flex-container > div {
            width: 25%;
            margin-bottom: 22px;
            margin-top: 45px;
        }
    }
    @media screen and (min-width: 768px )and (max-width: 992px) {
        .flex-container > div {
            width: 17.5%;
            margin-right: 2.5%;
            margin-bottom: 2.5%;
        }
    }
</style>
<style  lang="scss">
    #alphabet{
        #Square{fill: none !important;}
    }
</style>