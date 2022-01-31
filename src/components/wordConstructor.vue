<template>
    <div id="wordConstructor" >
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Собери слово - название животного</h1>
            <div class="animal">
                <component :is="currentSvg.svg"/>
            </div>
           <div class="letters" >
                <div class="letter" v-for="(n,index) in  randomLettersAnimal" :key="index"
                     draggable @dragstart="startDrag($event,n,index)">{{n}}</div>
            </div>
            <div class="name_animal" >
                <div class="letter" v-for="(x,index) in animalName" :key="index" :id="index"
                     @dragover.prevent @dragenter.prevent  @drop="onDrop($event, animalName)"
                     draggable @dragstart="startDrag($event,x,index)">{{x}}</div>
            </div>
            <b-modal ref="modalError">
                <p>Ошибка!</p>
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
            <b-button class="help" @click="showNameAnimal()">Подсказка</b-button>
            <div class="buttonGame">
                <b-button @click="newAnimal()">Далее</b-button>
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
            }
        },
        created() {
          this.newAnimal()
        },
        methods:{
            showModal(){
                this.$refs['modalEnd'].show()
            },
            showNameAnimal(){
             this.$refs['modalHelp'].show()
            },
            newAnimal:function(){
                this.currentSvg = this.getRandomSvg()
                this.randomLettersAnimal = this.randomLetters(this.currentSvg.letters)
                this.animalName = new Array(this.randomLettersAnimal.length)
            },
            randomLetters:function (array) {
              return  array.map(i=>[Math.random(), i]).sort().map(i=>i[1])
            },
            startDrag(evt,item,id){
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                evt.dataTransfer.setData('letter', JSON.stringify({item:item,id:id}))
            },
            onDrop(evt,list){
                const data = evt.dataTransfer.getData('letter')
                let parsedData = JSON.parse(data)
                list[evt.toElement.id]=parsedData.item
                console.log(list[evt.toElement.id])

                /*удаление*/
                let a = this.randomLettersAnimal.splice(parsedData.id,1)
                //console.log(a)
            }
        }
    }

</script>

<style scoped lang="scss">
    .modal-body svg{
        display: block;
        width: 400px;
        margin-bottom: 0 !important;
        margin-left: 50px !important;
        margin-top: -170px !important;
    }
    .nameSelectAnimal{
        margin-top: -140px;
        font-size: 3.2rem;
    }
     svg {
         display: block;
         width: 650px;
         height: 480px;
         margin: -115px auto 0 !important;
     }
     .buttonGame{margin-top: 25px;}
     .letters{margin-top: -20px !important;}
    .letters,.name_animal{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .letter{
            background: rgba(255, 255, 255, 0.5);
            border: 1.8px solid #9a9797;
            float: left;
            margin: 0 10px;
            font-size: 2.25rem;
            text-align: center;
            width: 60px;
            height: 60px;
        }
    }
    .name_animal{
        margin-top: 20px !important;
        height: 60px;
    }
     @media screen and (min-width: 500px) and (max-width: 768px) {
         svg {
             width: 400px !important;
             margin: -180px auto 0 !important;
         }
         .letters,.name_animal{
             margin-left: -25px;
             .letter{
                 width: 45px;
                 height: 45px;
                 margin: 0 4px;
                 font-size: 1.5rem;
             }
         }
         .letters{margin-top: -120px !important;}
     }
     @media screen and (min-width: 768px) and (max-width: 992px) {
         svg {
             width: 550px !important;
             margin: -145px auto 0 !important;
         }
         .letters,.name_animal{
             .letter{
                 width: 50px;
                 height: 50px;
                 margin: 0 8px;
                 font-size: 2rem;
             }
         }
         .letters{margin-top: -60px !important;}
     }
</style>


