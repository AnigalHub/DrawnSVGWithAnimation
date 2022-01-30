<template>
    <div id="collectCouple">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Собери пару - букву и животное</h1>
            <b-row v-for="(letter,index) in currentSvgs" :key="index">
                <b-col>
                    <div class="card">
                        <div class="animal"  draggable @dragstart="startDrag($event)">
                            <component :is="currentSvgs[index].svg"/>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="card"></div>
                </b-col>
                <b-col>
                    <hr size=3.5px>
                </b-col>
                <b-col>
                    <div class="card"></div>
                </b-col>
                <b-col>
                    <div class="card"   draggable @dragstart="startDrag($event)">
                        <div class="letters"> {{lettersSvgs[index].letter}}</div>
                        <br>
                        <div class="name_animals">{{lettersSvgs[index].letters.join('')}}</div>
                    </div>
                </b-col>
            </b-row>
            <b-modal ref="modal">
                <p>Игра завершена!</p>
            </b-modal>
            <b-modal ref="modalHelp">
                <p><u>Животные:</u></p>
                <b-row v-for="(letter,index) in currentSvgs" :key="index">
                    <b-col>
                        <div class="animal">
                            <component :is="currentSvgs[index].svg"/>
                        </div>
                    </b-col>
                </b-row>
            </b-modal>
            <b-button class="help" @click="showNameAnimal()">Подсказка</b-button>
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
            startDrag(evt){
                console.log(evt)
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
            },
            showModal(){
                this.$refs['modal'].show()
            },
            showNameAnimal(){
                this.$refs['modalHelp'].show()
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
<style  lang="scss">
    #collectCouple{
       .animal  text{
            display: none !important;
        }
    }
    #collectCouple{
        #Square{stroke: none !important;}
    }
</style>
<style scoped lang="scss">

    .modal-body svg{
        display: block;
        margin-bottom: 5px;
        margin-top: -30px;
        margin-left: 100px;
    }
    .row{margin-left: 10%;}
    .animal{
        width: 399px !important;
        margin-left: -83px;
        margin-top: -4px;
    }
    .help{margin-top: -5px !important;}
    h1{margin-bottom: 40px !important;}
    svg {
        display: block;
        margin-top: -15px;
        margin-left: 84px;
    }
    .card{
        border: 1.5px solid #8e8a8a;
        display: flex;
        align-items: center;justify-content: center;
        width: 135px;
        margin-top: -5px;
        font-family: 'Merriweather', serif;
        font-weight: 300 !important;
        margin-bottom: 25px;
        height: 135px;
        background: rgba(255, 255, 255, 0.2);
    }
    .col:first-child .card{margin-left: 45px;}
    .col:nth-child(2) .card{margin-left: -5px;}
    .col:nth-child(3){
        padding-top: 30px;
        margin-left: -158px;
        hr{
            background-color: #8e8a8a !important;
            opacity: 1 !important;
            width: 116px;
            margin-left: 30px;
        }
    }
    .col:nth-child(4) .card{margin-left: -110px;}
    .col:nth-child(5) .card{margin-left: -160px;}
    .letters{
        font-size:60px;
        letter-spacing: 2px;
    }
    .name_animals{
        margin-top: -15px;
        font-size:20px;
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        .card{
            width: 100px;
            height: 100px;
        }
        .animal{
            width: 319px !important;
            margin-left: -83px;
            margin-top: -4px;
        }
        .row{margin-left: 0;}
        .col:first-child .card{margin-left: -55px;}
        .col:nth-child(2) .card{margin-left: -10px;}
        .col:nth-child(3){
            margin-left: 0;
            hr{
                width: 100% !important;
                margin-left: -24px;
            }
        }
        .col:nth-child(4) .card{margin-left: -50px;}
        .col:nth-child(5) .card{margin-left: 0;}
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        .col:first-child .card{margin-left: -80px;}
        .col:nth-child(2) .card{margin-left: -50px;}
        .col:nth-child(3){
            margin-left: -48px;
            hr{
                width: 20px !important;
                margin-left: 7px;
            }
        }
        .col:nth-child(4) .card{margin-left: -100px;}
        .col:nth-child(5) .card{margin-left: -65px;}
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        .col:nth-child(2) .card{margin-left: 0;}
        .col:nth-child(3){
            margin-left: -48px;
            hr{
                width: 33px !important;
                margin-left: 20px;
            }
        }
        .col:nth-child(5) .card{margin-left: -110px;}
    }
    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .col:nth-child(2) .card{margin-left: -5px;}
        .col:nth-child(3){
            hr{
                width: 52px !important;
                margin-left: 62px;
            }
        }
        .col:nth-child(5) .card{margin-left: -160px;}
    }
</style>
