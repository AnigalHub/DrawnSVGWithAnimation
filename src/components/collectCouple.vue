<template>
    <div id="collectCouple">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Собери пару - букву и животное</h1>
            <b-row v-for="(letter,index) in currentSvgs" :key="index" :id="index" >
                <b-col>
                    <div class="card" draggable @dragstart="startDrag($event,'currentSvgs', index)">
                        <div class="animal" >
                            <component :is="currentSvgs[index].svg"/>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="card" @dragover.prevent @dragenter.prevent @drop="onDrop($event, arraySvgs,index)">
                        <div class="animal"v-if="arraySvgs[index]" >
                            <component :is="arraySvgs[index].svg"/>
                        </div>
                    </div>
                </b-col>
                <b-col cols="1">
                    <hr size=3.5px>
                </b-col>
                <b-col>
                    <div class="card" @dragover.prevent @dragenter.prevent @drop="onDrop($event,arrayWords,index)">
                        <div v-if="arrayWords[index]">
                            <div class="letters"> {{arrayWords[index].letter}}</div>
                            <br>
                            <div class="name_animals">{{arrayWords[index].letters.join('')}}</div>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="card"  draggable @dragstart="startDrag($event,'lettersSvgs', index)">
                        <div class="letters"> {{lettersSvgs[index].letter}}</div>
                        <br>
                        <div class="name_animals">{{lettersSvgs[index].letters.join('')}}</div>
                    </div>
                </b-col>
            </b-row>
            <b-modal ref="modalError">
                <p>Ошибка!</p>
            </b-modal>
            <b-modal ref="modalEnd">
                <p>Игра завершена!</p>
                <p>Количество набранных баллов:</p>
                <p>За {{svgsAmount}} правильно собранные пары  - 1 балл.</p>
            </b-modal>
            <b-modal ref="modalHelp">
                <p><u>Животные:</u></p>
                <b-row v-for="(letter,index) in currentSvgs" :key="index">
                    <b-col>
                        <div class="card">
                            <component :is="currentSvgs[index].svg"/>
                        </div>
                    </b-col>
                </b-row>
            </b-modal>
            <div class="buttonGame">
                <b-button class="help" @click="showNameAnimal()">Подсказка</b-button>
                <b-button @click="newWords()">Далее</b-button>
                <b-button>Проверить</b-button>
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
                arrayWords: [],
                arraySvgs:[],
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
                console.log(list)
                console.log(id)
                console.log(list[id])

                //itemFromSource.splice(parsedData.index, 1, undefined)
            },
            showModal(){
                this.$refs['modalEnd'].show()
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
                this.arrayWords = new Array(this.lettersSvgs.length)
                this.arraySvgs = new Array(this.lettersSvgs.length)
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
        width: 60%;
        margin: 0 auto;
    }
    .help{margin-top: -5px !important;}
    svg {
        display: block;
        width: 100%;
    }
    .card,svg{height: 145px;}
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
   .col-1{
        width: 100px !important;
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

   @media screen and (min-width: 500px) and (max-width: 768px) {
       .row{width: 100%;}
       .col{padding: 0 !important;}
       .col-1{
           width: 55px !important;
           hr{
               margin-top: 65%;
               margin-left: -18%;
           }
       }
       .card{width: 100px;}
       .card,svg{height: 100px;}
       .letters{font-size:25px;}
       .name_animals{
           margin-top: -25px;
           font-size:15px;
       }
   }
   @media screen and (min-width: 768px) and (max-width: 992px) {
       .row{width: 100%;}
       .col-1{
           width: 55px !important;
           hr{margin-top: 90%;}
       }
       .card{width: 133px;}
       .card,svg{height: 133px;}
       .letters{font-size:35px;}
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
   @media screen and (min-width: 992px) and (max-width: 1200px) {
       .row{width: 85%;}
       .letters{font-size:35px;}
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
   @media screen and (min-width: 1200px) and (max-width: 1400px) {
       .row{width: 70%;}
       .letters{font-size:35px;}
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
</style>
