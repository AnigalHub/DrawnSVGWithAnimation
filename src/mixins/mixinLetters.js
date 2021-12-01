import Alligator from "../components/animals_svg/alligator";
import Bee from "../components/animals_svg/bee";
import Cat from "../components/animals_svg/cat";
import Dog from "../components/animals_svg/dog";
import Frog from "../components/animals_svg/frog";
import Elephant from "../components/animals_svg/elephant";
import Giraffe from "../components/animals_svg/giraffe";
import Hamster from "../components/animals_svg/hamster";
import Iguana from "../components/animals_svg/iguana";
import Jellyfish from "../components/animals_svg/jellyfish";
import Kangaroo from "../components/animals_svg/kangaroo";
import Lion from "../components/animals_svg/lion";
import Mouse from "../components/animals_svg/mouse";
import Numbut from "../components/animals_svg/numbut";
import Octopus from "../components/animals_svg/octopus";
import Panda from "../components/animals_svg/panda";
import Quetzal from "../components/animals_svg/quetzal";
import Raccoon from "../components/animals_svg/raccoon";
import Sheep from "../components/animals_svg/sheep";
import Turtle from "../components/animals_svg/turtle";
import Unicorn from "../components/animals_svg/unicorn";
import Viper from "../components/animals_svg/viper";
import Whale from "../components/animals_svg/whale";
import XRayFish from "../components/animals_svg/x-ray_fish";
import Yak from "../components/animals_svg/yak";
import Zebra from "../components/animals_svg/zebra";


export default {
    components: {
        Alligator,Bee,Cat,Dog,Frog,Elephant, Giraffe,Hamster,Iguana,Jellyfish,Kangaroo,Lion,
        Mouse, Numbut, Octopus, Panda, Quetzal, Raccoon, Sheep, Turtle,Unicorn, Viper, Whale, XRayFish,
        Yak,Zebra,
    },
    methods: {
        getRandomSvg(){
            return this.Letters[Math.floor(Math.random()*this.Letters.length)]
        }
    },
    data(){
        return{
            Letters:[
                {svg:Alligator, words:["a","l","l","i","g","a","t","o","r"],letters:"Aa"},
                {svg:Bee, words:["b","e","e"],letters:"Bb"},
                {svg:Cat, words:["c","a","t"],letters:"Cc"},
                {svg:Dog, words:["d","o","g"],letters:"Dd"},
                {svg: Elephant, words:["e","l","e","p","h","a","n","t"],letters:"Ee"},
                {svg:Frog, words:["f","r","o","g"],letters:"F f"},
                {svg: Giraffe, words:["g","i","r","a","f","f","e"],letters:"Gg"},
                {svg: Hamster, words:["h","a","m","s","t","e","r"],letters:"Hh"},
                {svg:Iguana, words:["i","g","u","a","n","a"],letters:"Ii"},
                {svg: Jellyfish, words:["j","e","l","l","y","f","i","s","h"],letters:"Jj"},
                {svg: Kangaroo, words:["k","a","n","g","a","r","o","o"],letters:"Kk"},
                {svg: Lion, words:["l","i","o","n"],letters:"L l"},
                {svg:Mouse, words:["m","o","u","s","e"],letters:"Mm"},
                {svg:Numbut, words:["n","u","m","b","u","t"],letters:"Nn"},
                {svg:Octopus, words:["o","c","t","o","p","u","s"],letters:"Oo"},
                {svg: Panda, words:["p","a","n","d","a"],letters:"Pp"},
                {svg: Quetzal, words:["q","u","e","t","z","a","l"],letters:"Qq"},
                {svg: Raccoon, words:["r","a","c","c","o","o","n"],letters:"Rr"},
                {svg:Sheep, words:["s","h","e","e","p"],letters:"Ss"},
                {svg: Turtle, words:["t","u","r","t","l","e"],letters:"Tt"},
                {svg:Unicorn, words:["u","n","i","c","o","r","n"],letters:"Uu"},
                {svg:Viper, words:["v","i","p","e","r"],letters:"Vv"},
                {svg: Whale, words:["w","h","a","l","e"],letters:"Ww"},
                {svg: XRayFish, words:["x","-","r","a","y"," ","f","i","s","h"],letters:"Xx"},
                {svg: Yak, words:["y","a","k"],letters:"Yy"},
                {svg: Zebra, words:["z","e","b","r","a"],letters:"Zz"}
            ]
        }
    },
}