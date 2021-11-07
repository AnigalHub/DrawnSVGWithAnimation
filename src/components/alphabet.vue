<template>
    <div>
        <h1>Alphabet</h1>
        <b-row>
            <b-col><aligator/></b-col>
            <b-col><bee/></b-col>
            <b-col><cat/></b-col>
            <b-col><dog/></b-col>
            <b-col><elefant/></b-col>
            <b-col><frog/></b-col>
        </b-row>
        <b-row>
            <b-col><bee/></b-col>
            <b-col><frog/></b-col>
            <b-col><dog/></b-col>
            <b-col><elefant/></b-col>
            <b-col><aligator/></b-col>
            <b-col><cat/></b-col>
        </b-row>
        <b-row>
            <b-col><aligator/></b-col>
            <b-col><bee/></b-col>
            <b-col><frog/></b-col>
            <b-col><dog/></b-col>
            <b-col><elefant/></b-col>
            <b-col><cat/></b-col>
        </b-row>
        <b-row>
            <b-col><elefant/></b-col>
            <b-col><dog/></b-col>
            <b-col><aligator/></b-col>
            <b-col><cat/></b-col>
            <b-col><bee/></b-col>
            <b-col><frog/></b-col>
        </b-row>
        <b-row>
            <b-col><bee/></b-col>
            <b-col><dog/></b-col>
            <b-col><aligator/></b-col>
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>

<script>
    import Aligator from "./animals_svg/aligator";
    import Bee from "./animals_svg/bee";
    import Cat from "./animals_svg/cat";
    import Dog from "./animals_svg/dog";
    import Elefant from "./animals_svg/elefant";
    import Frog from "./animals_svg/frog";
    export default {
        name: "alphabet",
        components: {Frog, Aligator, Bee, Cat, Dog, Elefant}
    }
</script>

<style scoped>
    svg{
        margin-left: -170px;
        margin-bottom: -25px;
    }
    h1{
        margin-bottom: 35px !important;
        font-family: 'Zen Antique', serif;
    }
</style>