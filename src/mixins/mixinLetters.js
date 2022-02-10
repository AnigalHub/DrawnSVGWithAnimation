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
                {svg: Alligator,letters:["a","l","l","i","g","a","t","o","r"],letter:"Aa"},
                {svg: Bee,letters:["b","e","e"],letter:"Bb"},
                {svg: Cat,letters:["c","a","t"],letter:"Cc"},
                {svg: Dog,letters:["d","o","g"],letter:"Dd"},
                {svg: Elephant,letters:["e","l","e","p","h","a","n","t"],letter:"Ee"},
                {svg: Frog,letters:["f","r","o","g"],letter:"Ff"},
                {svg: Giraffe,letters:["g","i","r","a","f","f","e"],letter:"Gg"},
                {svg: Hamster,letters:["h","a","m","s","t","e","r"],letter:"Hh"},
                {svg: Iguana,letters:["i","g","u","a","n","a"],letter:"Ii"},
                {svg: Jellyfish,letters:["j","e","l","l","y","f","i","s","h"],letter:"Jj"},
                {svg: Kangaroo,letters:["k","a","n","g","a","r","o","o"],letter:"Kk"},
                {svg: Lion,letters:["l","i","o","n"],letter:"Ll"},
                {svg: Mouse,letters:["m","o","u","s","e"],letter:"Mm"},
                {svg: Numbut,letters:["n","u","m","b","u","t"],letter:"Nn"},
                {svg: Octopus,letters:["o","c","t","o","p","u","s"],letter:"Oo"},
                {svg: Panda,letters:["p","a","n","d","a"],letter:"Pp"},
                {svg: Quetzal,letters:["q","u","e","t","z","a","l"],letter:"Qq"},
                {svg: Raccoon,letters:["r","a","c","c","o","o","n"],letter:"Rr"},
                {svg: Sheep,letters:["s","h","e","e","p"],letter:"Ss"},
                {svg: Turtle,letters:["t","u","r","t","l","e"],letter:"Tt"},
                {svg: Unicorn,letters:["u","n","i","c","o","r","n"],letter:"Uu"},
                {svg: Viper,letters:["v","i","p","e","r"],letter:"Vv"},
                {svg: Whale,letters:["w","h","a","l","e"],letter:"Ww"},
                {svg: XRayFish,letters:["x","-","r","a","y","_","f","i","s","h"],letter:"Xx"},
                {svg: Yak,letters:["y","a","k"],letter:"Yy"},
                {svg: Zebra,letters:["z","e","b","r","a"],letter:"Zz"}
            ]
        }
    },
}