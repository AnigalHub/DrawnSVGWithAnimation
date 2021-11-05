<template>
    <div>
        <h3>Alphabet</h3>
        <b-row>
            <b-col><aligator/></b-col>
            <b-col><bee/></b-col>
            <b-col><cat/></b-col>
            <b-col><dog/></b-col>
            <b-col><bee/></b-col>
            <b-col><cat/></b-col>
        </b-row>
        <b-row>
            <b-col><bee/></b-col>
            <b-col><dog/></b-col>
            <b-col><aligator/></b-col>
            <b-col><cat/></b-col>
            <b-col><bee/></b-col>
            <b-col><cat/></b-col>
        </b-row>
        <b-row>
            <b-col><aligator/></b-col>
            <b-col><bee/></b-col>
            <b-col><cat/></b-col>
            <b-col><dog/></b-col>
            <b-col><bee/></b-col>
            <b-col><cat/></b-col>
        </b-row>
        <b-row>
            <b-col><bee/></b-col>
            <b-col><dog/></b-col>
            <b-col><aligator/></b-col>
            <b-col><cat/></b-col>
            <b-col><bee/></b-col>
            <b-col><cat/></b-col>
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
    export default {
        name: "alphabet",
        components: {Aligator, Bee, Cat, Dog}
    }
</script>

<style scoped>
svg{
    margin-left: -170px;
    margin-bottom: -25px;
}
    h3{
        margin-bottom: 35px !important;
    }
</style>