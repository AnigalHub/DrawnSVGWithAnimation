<template>
    <div id="collectCouple">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Собери пару - букву и животное</h1>
            <b-row v-for="(letter,index) in currentSvgs" :key="index">
                <b-col>
                    <div class="animal"><component :is="currentSvgs[index].svg"/></div>
                </b-col>
                <b-col>
                    <div class="card" >
                        <div class="letters"> {{lettersSvgs[index].letter}}</div>
                        <br>
                        <div class="name_animals">{{lettersSvgs[index].letters.join('')}}</div>
                    </div>
                </b-col>
            </b-row>
            <b-modal ref="modal">
                <p>Игра завершена!</p>
            </b-modal>
            <div class="buttonGame">
                <b-button @click="newWords()">Далее</b-button>
                <b-button @click="showModal()">Завершить</b-button>
            </div>
        </div>
        <screen-rotation/>
    </div>
</template>

<script>
    import mixinLetters from "../mixins/mixinLetters";
    import ScreenRotation from "./screenRotation";

    export default {
        components: {ScreenRotation},
        mixins: [mixinLetters],
        name: "collectCouple",
        data(){

            return {
                svgsAmount: 4,
                currentSvgs: [],
                lettersSvgs:[],
            }
        },
        methods:{
            showModal(){
                this.$refs['modal'].show()
            },
            newWords:function () {
                this.currentSvgs = []
                for(let i = 0; i < this.svgsAmount; i++){
                    let isDuplicate = false
                    do{
                        let svgCollect = this.getRandomSvg()
                        isDuplicate = !this.currentSvgs.includes(svgCollect);
                        if(isDuplicate){
                            this.currentSvgs.push(svgCollect)
                        }
                    } while (!isDuplicate)
                }
                this.lettersSvgs = this.currentSvgs.map(i=>[Math.random(), i]).sort().map(i=>i[1])
            }
        },
        created() {
            this.newWords()
        }
    }
</script>

<style scoped lang="scss">
    .animal{
        width: 400px !important;
        margin-left: 120px;
    }
    h1{margin-bottom: 40px !important;}
    svg {
        display: block;
        margin-bottom: 25px;
        margin-top: -50px;
        margin-left: 80px;
    }
    .card{
        border: 1.5px solid #8e8a8a;
        display: flex;
        align-items: center;justify-content: center;
        width: 135px;
        margin-top: -17px;
        font-family: 'Merriweather', serif;
        font-weight: 300 !important;
        height: 135px; margin-left: 80px;
        background: rgba(255, 255, 255, 0.2);
    }
    .letters{
        font-size:60px;
        letter-spacing: 2px;
    }
    .name_animals{
        margin-top: -15px;
        font-size:20px;
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        .animal{
            width: 320px !important;
            margin-left: -120px;
        }
        .letters{font-size:30px;}
        .card{
            width: 102px;
            margin-top: -25px;
            height: 102px;
            margin-bottom: 45px;
            margin-left: 40px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        .animal{
            width: 360px !important;
            margin-left: -60px;
        }
        .letters{font-size:50px;}
        .card{
            width: 120px;
            margin-top: -20px;
            margin-bottom: 45px;
            font-weight: 300 !important;
            height: 120px;
            margin-left: 80px;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        .animal{
            width: 400px !important;
            margin-left: 0;
        }
    }
</style>
<style  lang="scss">
    #collectCouple{
        #Square{fill: rgba(255, 255, 255, 0.2);stroke:#000000;stroke-width:0.9709;stroke-miterlimit:10;}
    }
</style>