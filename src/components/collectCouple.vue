<template>
    <div id="collectCouple">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Собери пару - букву и животное</h1>
            <b-row v-for="(letter,index) in currentSvgs" :key="index">
                <b-col>
                    <div class="animal"  draggable @dragstart="startDrag($event)">
                        <component :is="currentSvgs[index].svg"/>
                    </div>
                </b-col>
                <b-col>
                    <div class="card"></div>
                </b-col>
                <b-col>
                    <hr size=3.5px width=134px>
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
</style>
<style scoped lang="scss">
    .modal-body svg{
        display: block;
        margin-bottom: 5px;
        margin-top: -30px;
        margin-left: 100px;
    }
    .animal{
        width: 400px !important;
        margin-left: 35px;
    }
    .help{
        margin-top: -30px !important;
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
        height: 135px;
        background: rgba(255, 255, 255, 0.2);
    }
    .col:nth-child(2) .card{
            margin-left: -60px;
    }
    .col:nth-child(3){
        padding-top: 30px;
        margin-left: -168px;
        hr{
            background-color: #8e8a8a !important;
            opacity: 1 !important;
        }
    }
    .col:nth-child(4) .card{
            margin-left: -110px;
    }
    .col:nth-child(5) .card{
        margin-left: -160px;
    }
    .letters{
        font-size:60px;
        letter-spacing: 2px;
    }
    .name_animals{
        margin-top: -15px;
        font-size:20px;
    }
</style>
