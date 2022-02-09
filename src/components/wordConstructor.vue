<template>
    <div id="wordConstructor" >
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Собери слово - название животного</h1>
            <div class="animal">
                <component :is="currentSvg.svg"/>
            </div>
            <b-row  class="name_animal">
                <b-col v-for="(x,index) in animalName" :key="index" :id="index"
                        @dragover.prevent @dragenter.prevent  @drop="onDrop($event, 'animalName',index)">
                    <div class="letter"  draggable @dragstart="startDrag($event,'animalName',index)">
                        {{x}}
                    </div>
                </b-col>
            </b-row>
            <hr>
            <b-row class="letters">
                <b-col v-for="(n,index) in  randomLettersAnimal" :id="index" class="letters_and_words"
                        @dragover.prevent @dragenter.prevent @drop="onDrop($event,'randomLettersAnimal',index)">
                    <div class="letter" draggable @dragstart="startDrag($event,'randomLettersAnimal',index)">
                        {{n}}
                    </div>
                </b-col>
            </b-row>
            <b-modal ref="modalCheck">
                <p>{{answerGame}}</p>
            </b-modal>
            <b-modal ref="modalEnd">
                <p>Игра завершена!</p>
                <p>Количество набранных баллов:</p>
                <p>За правильное написание животного - 1 балл.</p>
            </b-modal>
            <b-modal ref="modalHelp">
                <p><u>Название животного:</u></p>
                <component :is="currentSvg.svg"/>
                <p class="nameSelectAnimal">{{currentSvg.letters.join('')}}</p>
            </b-modal>
            <div class="buttonGame">
                <b-button class="help" @click="showNameAnimal()">Подсказка</b-button>
                <b-button @click="newAnimal()">Далее</b-button>
                <b-button @click="showModalCheck()" >Проверить</b-button>
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
        name: "wordConstructor",
        data(){
            return {
                currentSvg: null,
                randomLettersAnimal:[],
                animalName:[],
                answerGame:'',
                point:0,
                show:false,
            }
        },
        methods:{
            startDrag(evt, nameOfArray, index){
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                const animalCard = JSON.stringify({ nameOfArray, index})
                evt.dataTransfer.setData('letter',animalCard)
            },
            onDrop(evt,nameFillableArray,id){
                const data = evt.dataTransfer.getData('letter')
                let sourceData = JSON.parse(data)
                let itemFromSource = this[sourceData.nameOfArray]
                let destinationArray = this[nameFillableArray]

                if(nameFillableArray == 'randomLettersAnimal' && sourceData.nameOfArray == 'animalName'){
                    if(destinationArray[id] == undefined){
                        destinationArray[id] = itemFromSource[sourceData.index]
                        itemFromSource.splice(sourceData.index, 1,undefined)
                    }
                    else {
                        let inside = destinationArray.splice(id, 1, itemFromSource[sourceData.index])
                        let c =  itemFromSource[sourceData.index]
                        itemFromSource[sourceData.index] = inside[0]
                        inside[0] = c
                    }
                }
                else{
                    let inside = destinationArray.splice(id, 1, itemFromSource[sourceData.index])
                    if(sourceData.nameOfArray == nameFillableArray){
                        if(inside)
                            destinationArray[sourceData.index] = inside[0]
                    }
                    else {
                        if((inside[0] != undefined)){
                            let c =  itemFromSource[sourceData.index]
                            itemFromSource[sourceData.index] = inside[0]
                            inside[0] = c
                        }
                        else {
                           itemFromSource.splice(sourceData.index, 1,undefined)
                        }
                    }
                }
            },
            showModal(){
                this.$refs['modal'].show()
            },
            showNameAnimal(){
                this.$refs['modalHelp'].show()

            },
            showModalCheck(){
                this.checkArrays()
                this.$refs['modalCheck'].show()
            },
            newAnimal:function(){
                this.currentSvg = this.getRandomSvg()
                this.randomLettersAnimal = this.randomLetters(this.currentSvg.letters)
                this.animalName = new Array(this.randomLettersAnimal.length)
            },
            randomLetters:function (array) {
              return  array.map(i=>[Math.random(), i]).sort().map(i=>i[1])
            },
            checkArrays:function () {
                let quantityCorrect = 0
                for (let i=0;i<this.currentSvg.letters.length;i++){
                    if(this.currentSvg.letters[i] != this.animalName[i]){
                        console.log('ghf', this.currentSvg.letters[i])
                        console.log(this.animalName[i] )
                        if(this.animalName[i] == undefined || this.animalName[i+1]==undefined){
                            this.answerGame = 'Не все ячейки заполнены!'
                        }
                        else {
                            this.answerGame = 'Неверно!'
                        }
                        break
                    }
                    this.answerGame = 'Верно!'
                    quantityCorrect++
                }
                return quantityCorrect
            }

        },
        created() {
            this.newAnimal()
        }
    }

</script>

<style scoped lang="scss">
    .modal-body svg{
        display: block;
        width: 400px;
        margin: -10% auto 0 !important;
    }
    .nameSelectAnimal{
        margin-top: -50px;
        font-size: 3.2rem;
    }
    .row{
        max-width: max-content !important;
        margin: 0 auto;
    }
    hr{
        margin: 1rem 0 0 !important;
    }
     svg {
         display: block;
         width: 450px;
         height: 450px;
         margin: -25px auto 0 !important;
     }
     .buttonGame{margin-top: 25px;}
    .letters,.name_animal{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto;

        height: 60px;
        .letter{
            background: rgba(255, 255, 255, 0.5);
            border: 1.8px solid #9a9797;
            float: left;
            margin: 5px;
            font-size: 2.25rem;
            text-align: center;
            width: 60px;
            height: 60px;
        }
    }
     @media screen and (min-width: 500px) and (max-width: 768px) {
         .letters,.name_animal{
             margin-top: 10px !important;
             .letter{
                 width: 45px;
                 height: 45px;
                 margin: 0 4px;
                 font-size: 1.5rem;
             }
         }
         svg {
             width: 250px;
             height: 250px;
         }
         .modal-body svg{margin-top: -5% !important;}
         .nameSelectAnimal{margin-top: -35px;}
     }
     @media screen and (min-width: 768px) and (max-width: 992px) {
         .letters,.name_animal{
             margin-top: 10px !important;
             .letter{
                 width: 50px;
                 height: 50px;
                 margin: 0 8px;
                 font-size: 2rem;
             }
        }
        svg {
            width: 300px;
            height: 300px;
        }
        .modal-body svg{margin-top: -5% !important;}
        .nameSelectAnimal{margin-top: -35px;}
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        svg {
            width: 350px;
            height: 350px;
        }
        .modal-body svg{margin-top: -5%  !important;}
        .nameSelectAnimal{margin-top: -35px;}
    }
</style>


