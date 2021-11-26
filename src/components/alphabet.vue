<template>
    <div id="alphabet">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <h1>Алфавит с животными</h1>
        <div class="flex-container">
            <div v-for="(letter,index) in Letters" :key="index">
                <component :is="letter.svg"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Alligator from "./animals_svg/alligator";
    import Bee from "./animals_svg/bee";
    import Cat from "./animals_svg/cat";
    import Dog from "./animals_svg/dog";
    import Frog from "./animals_svg/frog";
    import Elephant from "./animals_svg/elephant";
    import Giraffe from "./animals_svg/giraffe";
    import Hamster from "./animals_svg/hamster";
    import Iguana from "./animals_svg/iguana";
    import Jellyfish from "./animals_svg/jellyfish";
    import Kangaroo from "./animals_svg/kangaroo";
    import Lion from "./animals_svg/lion";
    import Mouse from "./animals_svg/mouse";
    import Numbat from "./animals_svg/numbat";
    import Octopus from "./animals_svg/octopus";
    import Panda from "./animals_svg/panda";
    import Quetzal from "./animals_svg/quetzal";
    import Raccoon from "./animals_svg/raccoon";
    import Sheep from "./animals_svg/sheep";
    import Turtle from "./animals_svg/turtle";
    import Unicorn from "./animals_svg/unicorn";
    import Viper from "./animals_svg/viper";
    import Whale from "./animals_svg/whale";
    import XRayFish from "./animals_svg/x-ray_fish";
    import Yak from "./animals_svg/yak";
    import Zebra from "./animals_svg/zebra";
    export default {
        name: "alphabet",
        components: {
            Alligator,Bee,Cat,Dog,Frog,Elephant, Giraffe,Hamster,Iguana,Jellyfish,Kangaroo,Lion,
            Mouse, Numbat, Octopus, Panda, Quetzal, Raccoon, Sheep, Turtle,Unicorn, Viper, Whale, XRayFish,
            Yak,Zebra,
        },
        data(){
            return{
                Letters:[
                    {svg:Alligator}, {svg:Bee},{svg:Cat},{svg:Dog},{svg: Elephant},{svg:Frog},
                    {svg: Giraffe},{svg: Hamster},{svg:Iguana},{svg: Jellyfish},{svg: Kangaroo},{svg: Lion},
                    {svg:Mouse},{svg:Numbat},{svg:Octopus},{svg: Panda},{svg: Quetzal},{svg: Raccoon},
                    {svg:Sheep},{svg: Turtle},{svg:Unicorn},{svg:Viper},{svg: Whale},{svg: XRayFish},
                    {svg: Yak},{svg: Zebra}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #alphabet{
        padding-left: 40px;
        padding-bottom: 35px;
    }
    svg{
        margin-top: -83px;
        margin-left: -130px;
    }
    .flex-container > div {
        width: 16.5%;
        margin-bottom: 8.15px;
        margin-top: 45px;
    }
</style>