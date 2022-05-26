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
                    <div class="card" @dragover.prevent @dragenter.prevent @drop="onDrop($event,'fillableArrayWords',index)"
                         draggable @dragstart="startDrag($event,'fillableArrayWords',index)">
                        <div v-if="fillableArrayWords[index]">
                            <div class="letters" v-if="fillableArrayWords[index]"> {{fillableArrayWords[index].letter}}</div>
                            <br>
                            <div class="name_animals">{{fillableArrayWords[index].letters.join('')}}</div>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="words">
                <b-col v-for="(letter,index) in lettersSvgs" :key="index" :id="index" class="letters_and_words"
                       @dragover.prevent @dragenter.prevent @drop="onDrop($event,'lettersSvgs',index)">
                        <div class="card"  draggable @dragstart="startDrag($event,'lettersSvgs',index)">
                            <div>
                                <div class="letters"> {{lettersSvgs[index].letter}}</div>
                                <br>
                                <div class="name_animals">{{lettersSvgs[index].letters.join('')}}</div>
                            </div>
                        </div>
                </b-col>
            </b-row>
            <b-modal ref="modalCheck">
                <p>{{answerGame}}</p>
            </b-modal>
            <b-modal ref="modalEnd">
                <p>Игра завершена!</p>
                <p>Количество набранных баллов: {{point}}</p>
                <p>За одну игру дается 1 балл</p>
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
                <b-button @click="next()">Далее</b-button>
                <b-button @click="showModalCheck()">Проверить</b-button>
                <b-button @click="showModalEnd()">Завершить</b-button>
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
                fillableArrayWords: [],
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
                evt.dataTransfer.setData('animalCard',animalCard)
            },
            onDrop(evt,nameFillableArray,id){
                const data = evt.dataTransfer.getData('animalCard')
                let sourceData = JSON.parse(data)
                let itemFromSource = this[sourceData.nameOfArray]
                let destinationArray = this[nameFillableArray]

                if(nameFillableArray == 'lettersSvgs' && itemFromSource[sourceData.index] != undefined && sourceData.nameOfArray == 'fillableArrayWords'){
                    destinationArray.length++
                    destinationArray[destinationArray.length-1] = itemFromSource[sourceData.index]
                    itemFromSource.splice(sourceData.index, 1,undefined)
                }
                else{
                    let inside = destinationArray.splice(id, 1, itemFromSource[sourceData.index])
                    if(sourceData.nameOfArray == nameFillableArray){
                        if(inside)
                            destinationArray[sourceData.index] = inside[0]
                    }
                    else {
                        if(inside[0] != undefined){
                            itemFromSource[sourceData.index] = this.swap(itemFromSource[sourceData.index],inside[0]).argument_1
                            inside[0] = this.swap(itemFromSource[sourceData.index],inside[0]).argument_2
                        }
                        else {
                            itemFromSource.splice(sourceData.index, 1)
                        }
                    }
                }
            },
            checkArrays:function(){
                let quantityCorrect = 0
                for(let i =0; i < this.littleCurrentSvgs.length; i++){
                    if(this.littleCurrentSvgs[i] != this.fillableArrayWords[i]){
                        if(this.fillableArrayWords[i] == undefined){
                            this.answerGame = 'Не все пары заполнены!'
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
            },
            showModalCheck(){
                this.checkArrays()
                this.$refs['modalCheck'].show()
            },
            showModalEnd(){
                this.scoreCalculation()
                this.newWords()
                this.$refs['modalEnd'].show()
                this.show = true
            },
            next(){
                this.scoreCalculation()
                this.newWords()
            },
            showNameAnimal(){
                this.$refs['modalHelp'].show()
            },
            scoreCalculation:function(){
                if(this.show == true){
                    this.point = 0
                }
                if(this.checkArrays() == 3){
                    this.point++
                }
                this.show = false
                return this.point
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
               this.littleCurrentSvgs = this.currentSvgs.slice(0,3)
               this.lettersSvgs = this.currentSvgs.map(i=>[Math.random(), i]).sort().map(i=>i[1])
               this.fillableArrayWords = new Array(this.littleCurrentSvgs.length)
            }
        },
        created() {
            this.newWords()
        }
    }
</script>
<style lang="scss">
    /*Компонент - СобериПару (collectCouple) - буквы у SVG*/
    #collectCouple #Letters{display: none;}
</style>
<style scoped lang="scss">
    /*тело модального окна - карточка игры*/
    .modal-body .card{
        display: block;
        margin: 0 auto 7px;
        border: 1.5px solid #bfbaba;
    }
    /*параметры сетки бутстрап*/
    .row{
        width: 70%;
        margin: 0 auto;
    }
    /*блок для пары карточек*/
    .cardsGame {width: 40%;}
    /*svg*/
    svg {
        display: block;
        width: 100%;
    }
    /*карточка в игре, svg, блок с выбором карточек (для перетаскивания)*/
    .card,svg,.words{height: 108px;}
    /*карточка в игре*/
    .card{
        border: 1.5px solid #8e8a8a;
        justify-content: center;
        margin-top: -5px;
        margin-bottom: 20px;
        font-family: "Merriweather", serif;
        font-weight: 300 !important;
        width: 108px;
        background: rgba(255, 255, 255, 0.4);
    }
   /*параметры сетки бутстрап (изменен отступ)*/
   .col-3{
        width: 100px !important;
        margin-left: -70px;
        padding: 0 !important;
       /*горизонтальная линия*/
        hr{
            background-color: #8e8a8a !important;
            opacity: 1 !important;
            width: 100%;
            margin-top: 50%;
        }
   }
   /*буквы в карточке*/
   .letters{
       font-size:48px;
       letter-spacing: 2px;
   }
   /*название животного в карточке*/
   .name_animals{
       margin-top: -28px;
       font-size:18px;
   }
    /*буквы в карточке, название животного в карточке*/
   .letters,.name_animals{text-align: center;}

   /*Адаптивность*/
   @media screen and (min-width: 500px) and (max-width: 768px) {
       /*параметры сетки бутстрап*/
       .row{width: 100%;}
       /*блок с выбором карточек (для перетаскивания)*/
       .words{
           height: 220px;
           margin-bottom: 30px;
       }
       /*блок для пары карточек*/
       .cardsGame {width: 77%;}
       /*параметры сетки бутстрап (изменена ширина) - блок под горизонтальную линию*/
       .col-3{
           width: 80px !important;
           margin-left: 0;
       }
       .letters_and_words:nth-child(4){margin-left: 10%;}
       /*карточка в игре*/
       .card{width: 103px;}
       /*карточка в игре, svg*/
       .card,svg{height: 103px;}
       /*буквы в карточке*/
       .letters{font-size:25px;}
       /*название животного в карточке*/
       .name_animals{
           margin-top: -25px;
           font-size:15px;
       }
   }
   @media screen and (min-width: 768px) and (max-width: 992px) {
       /*параметры сетки бутстрап*/
       .row{width: 100%;}
       /*блок для пары карточек*/
       .cardsGame {width: 60%;}
       /*параметры сетки бутстрап (изменен отступ) - блок под горизонтальную линию*/
       .col-3{margin-left: -20px;}
       /*карточка в игре*/
       .card{width: 103px;}
       /*блок под каждую карточку в блоке с выбором карточек (для перетаскивания)*/
       .letters_and_words{padding: 0 5px;}
       /*карточка в игре, svg*/
       .card,svg{height: 103px;}
       /*буквы в карточке*/
       .letters{font-size:35px;}
       /*название животного в карточке*/
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
   @media screen and (min-width: 992px) and (max-width: 1200px) {
       /*параметры сетки бутстрап*/
       .row{width: 95%;}
       /*блок для пары карточек*/
       .cardsGame {width: 50%;}
       /*параметры сетки бутстрап (изменен отступ) - блок под горизонтальную линию*/
       .col-3{margin-left: -20px;}
       /*буквы в карточке*/
       .letters{font-size:35px;}
       /*название животного в карточке*/
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
   @media screen and (min-width: 1200px) and (max-width: 1400px) {
       .letters{font-size:35px;}
       /*параметры сетки бутстрап*/
       .row{width: 80%;}
       /*блок для пары карточек*/
       .cardsGame {width: 40%;}
       /*параметры сетки бутстрап (изменен отступ) - блок под горизонтальную линию*/
       .col-3{margin-left: -20px;}
       /*название животного в карточке*/
       .name_animals{
           margin-top: -30px;
           font-size:18px;
       }
   }
</style>
