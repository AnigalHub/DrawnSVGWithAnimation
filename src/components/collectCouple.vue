<template>
    <div id="collectCouple">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Собери пару - букву и животное</h1>
            <b-row v-for="(letter,index) in littleCurrentSvgs" :key="index"  :id="index" class="cardsGame">
                <b-col>
                    <div class="card">
                        <div class="animal" >
                            <component :is="currentSvgs[index].svg"/>
                        </div>
                    </div>
                </b-col>

                <b-col cols="3">
                    <hr size=3.5px>
                </b-col>
                <b-col>
                    <div class="card" @dragover.prevent @dragenter.prevent @drop="onDrop($event,arrayWords,index)" >
                        <div v-if="arrayWords[index]">
                            <div class="letters" v-if="arrayWords[index]"> {{arrayWords[index].letter}}</div>
                            <br>
                            <div class="name_animals">{{arrayWords[index].letters.join('')}}</div>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="words">
                <b-col v-for="(letter,index) in lettersSvgs" :key="index" :id="index" class="letters_and_words">
                    <div class="card"  draggable @dragstart="startDrag($event,'lettersSvgs',index)">
                        <div class="letters"> {{lettersSvgs[index].letter}}</div>
                        <br>
                        <div class="name_animals">{{lettersSvgs[index].letters.join('')}}</div>
                    </div>
                </b-col>
            </b-row>
            <b-modal ref="modalCheck">
                <p>{{answerGame}}</p>
            </b-modal>
            <b-modal ref="modalEnd">
                <p>Игра завершена!</p>
                <p>Количество набранных баллов:</p>
                <p>За {{svgsAmount}} правильно собранные пары  - 1 балл.</p>
            </b-modal>
            <b-modal ref="modalHelp">
                <p><u>Животные:</u></p>
                <b-row v-for="(letter,index) in littleCurrentSvgs" :key="index">
                    <b-col>
                        <div class="card">
                            <component :is="littleCurrentSvgs[index].svg"/>
                        </div>
                    </b-col>
                </b-row>
            </b-modal>
            <div class="buttonGame">
                <b-button class="help" @click="showNameAnimal()">Подсказка</b-button>
                <b-button @click="newWords()">Далее</b-button>
                <b-button @click="checkArrays">Проверить</b-button>
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
                svgsAmount: 5,
                currentSvgs: [],
                littleCurrentSvgs: [],
                lettersSvgs:[],
                arrayWords: [],
                answerGame:'',
            }
        },
        methods:{
            startDrag(evt, nameOfArray, index){
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                const animalCard = JSON.stringify({ nameOfArray, index})
                evt.dataTransfer.setData('animalCard',animalCard)
                console.log("drag", animalCard)
            },
            onDrop(evt,list,id){
                console.log(evt)
                const data = evt.dataTransfer.getData('animalCard')
                let parsedData = JSON.parse(data)
                console.log("DROP", parsedData)
                let itemFromSource = this[parsedData.nameOfArray]
                console.log("массив",itemFromSource)
                list.splice(id, 1, itemFromSource[parsedData.index])


                console.log('new',this.arrayWords)
                console.log('new0',this.littleCurrentSvgs)
               itemFromSource.splice(parsedData.index, 1)
            },
            checkArrays:function(){
                for(let i =0; i < this.littleCurrentSvgs.length; i++){
                    if(this.littleCurrentSvgs[i] != this.arrayWords[i]){
                        console.log('неверно')
                        this.answerGame = 'неверно'
                        break
                    }
                    console.log('верно')
                    this.answerGame = 'верно'
                }
                this.$refs['modalCheck'].show()
            },
            showModal(){
                this.$refs['modalEnd'].show()
            },
            showNameAnimal(){
                this.$refs['modalHelp'].show()
            },
            showNewSvgs:function(arraySvg,currentSvg){
                for(let i = 0; i < arraySvg; i++){
                    let isDuplicate = false
                    do{
                        let svgCollect = this.getRandomSvg()
                        isDuplicate = !currentSvg.includes(svgCollect);
                        if(isDuplicate){
                            currentSvg.push(svgCollect)
                        }
                    } while (!isDuplicate)
                }
            },
            newWords:function () {
               this.currentSvgs = []
               this.showNewSvgs(this.svgsAmount,this.currentSvgs)
               this.littleCurrentSvgs = this.currentSvgs.slice(0,3)

               this.lettersSvgs = this.currentSvgs.map(i=>[Math.random(), i]).sort().map(i=>i[1])
               console.log(this.lettersSvgs)
               this.arrayWords = new Array(this.littleCurrentSvgs.length)
            }
        },
        created() {
            this.newWords()
        }
    }
</script>
<style scoped lang="scss">
    .modal-body .card{
        display: block;
        margin: 0 auto 7px;
        border: 1.5px solid #bfbaba;
    }
    .row{
        width: 70%;
        margin: 0 auto;
    }
    .cardsGame {
        width: 40%;
    }
    .help{margin-top: -5px !important;}
    svg {
        display: block;
        width: 100%;
    }
    .card,svg,.words{height: 145px;}
    .card{
        border: 1.5px solid #8e8a8a;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -5px;
        margin-bottom: 20px;
        font-family: "Merriweather", serif;
        font-weight: 300 !important;
        width: 145px;
        background: rgba(255, 255, 255, 0.4);
    }
   .col-3{
        width: 100px !important;
        margin-left: -70px;
        padding: 0 !important;
        hr{
            background-color: #8e8a8a !important;
            opacity: 1 !important;
            width: 100%;
            margin-top: 50%;
        }
   }
   .letters{
       font-size:48px;
       letter-spacing: 2px;
   }
   .name_animals{
       margin-top: -28px;
       font-size:20px;
   }
   .letters,.name_animals{
      text-align: center;
   }

   @media screen and (min-width: 500px) and (max-width: 768px) {
       .row{width: 100%;}
       .cardsGame {width: 77%;}
       .col-3{
           width: 80px !important;
           margin-left: 0;
       }
       .letters_and_words:nth-child(4){margin-left: 10%;}
       .card{width: 110px;}
       .card,svg{height: 110px;}
       .letters{font-size:25px;}
       .name_animals{
           margin-top: -25px;
           font-size:15px;
       }
   }
   @media screen and (min-width: 768px) and (max-width: 992px) {
       .row{width: 100%;}
       .cardsGame {width: 60%;}
       .col-3{margin-left: -20px;}
       .card{width: 123px;}
       .letters_and_words{
           padding: 0 5px;
       }
       .card,svg{height: 123px;}
       .letters{font-size:35px;}
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
   @media screen and (min-width: 992px) and (max-width: 1200px) {
       .row{width: 95%;}
       .cardsGame {width: 50%;}
       .col-3{margin-left: -20px;}
       .letters{font-size:35px;}
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
   @media screen and (min-width: 1200px) and (max-width: 1400px) {
       .letters{font-size:35px;}
       .row{width: 80%;}
       .cardsGame {width: 40%;}
       .col-3{
           margin-left: -20px;
       }
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
</style>
