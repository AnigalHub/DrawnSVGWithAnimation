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
            <b-col><giraffe/></b-col>
            <b-col><hamster/></b-col>
            <b-col><iguana/></b-col>
            <b-col><jellyfish/></b-col>
            <b-col><kangaroo/></b-col>
            <b-col><lion/></b-col>
        </b-row>
        <b-row>
            <b-col><mouse/></b-col>
            <b-col><numbat/></b-col>
            <b-col><octopus/></b-col>
            <b-col><panda/></b-col>
            <b-col><quetzal/></b-col>
            <b-col><raccoon/></b-col>
        </b-row>
        <b-row>
            <b-col><sheep/></b-col>
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
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
    import Giraffe from "./animals_svg/giraffe";
    import Hamster from "./animals_svg/hamster";
    import Iguana from "./animals_svg/iguana";
    import Jellyfish from "./animals_svg/jellyfish";
    import Kangaroo from "./animals_svg/kangaroo";
    import Mouse from "./animals_svg/mouse";
    import Lion from "./animals_svg/lion";
    import Numbat from "./animals_svg/numbat";
    import Octopus from "./animals_svg/octopus";
    import Panda from "./animals_svg/panda";
    import Quetzal from "./animals_svg/quetzal";
    import Raccoon from "./animals_svg/raccoon";
    import Sheep from "./animals_svg/sheep";
    export default {
        name: "alphabet",
        components: {
            Sheep,
            Raccoon,
            Quetzal,
            Panda,
            Octopus,
            Numbat,
            Lion, Mouse, Kangaroo, Jellyfish, Iguana, Hamster, Giraffe, Frog, Aligator, Bee, Cat, Dog, Elefant}
    }
</script>

<style scoped>
    svg{
        margin-left: -145px;
        margin-bottom: 10px;
    }
    h1{
        margin-top: -5px !important;
        margin-bottom: 40px !important;
        font-family: 'Zen Antique', serif;
    }
</style>