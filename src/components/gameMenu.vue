<template>
    <div id="gameMenu">
        <h1>Меню игры</h1>
        <router-link :to="{name: 'Alphabet'}" tag="button">Алфавит (справочник)</router-link>
        <router-link :to="{name: 'CollectCouple'}" tag="button">Собери пару</router-link>
        <router-link :to="{name: 'WordConstructor'}" tag="button">Конструктор слов</router-link>
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
    </div>
</template>

<script>
    export default {
        name: "gameMenu"
    }
</script>

<style scoped lang="scss">

</style>