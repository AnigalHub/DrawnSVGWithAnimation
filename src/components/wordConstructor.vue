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
            <b-modal ref="modal">
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
                this.$refs['modal'].show()
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
                console.log(evt)
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                console.log(item)
                evt.dataTransfer.setData('letter', JSON.stringify({item:item,id:id}))
            },
            onDrop(evt,list){
                const data = evt.dataTransfer.getData('letter')
                let parsedData = JSON.parse(data)
                console.log(evt)
                list[evt.toElement.id]=parsedData.item

                /*удаление*/
                let a = this.randomLettersAnimal.splice(parsedData.id,1)
                console.log(a)
            }
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


