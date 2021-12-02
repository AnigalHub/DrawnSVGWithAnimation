<template>
    <div id="wordConstructor" >
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
        <h1>Собери слово - название животного</h1>
        <div class="animal">
            <component :is="currentSvg.svg"/>
        </div>
       <div class="letters" >
            <div class="letter" v-for="(n,index) in  randomLettersAnimal" :key="index"
                 draggable @dragstart="startDrag($event,n,index)">{{n}}</div>
        </div>
        <div class="name_animal"  @dragover.prevent
             @dragenter.prevent  @drop="onDrop($event, animalName)">
            <div class="letter" v-for="(x,index) in animalName" :key="index"
                 draggable @dragstart="startDrag($event,x,index)">{{x}}</div>
        </div>
        <b-button @click="getRandomSvg()">Далее</b-button>
    </div>
</template>

<script>
    import mixinLetters from "../mixins/mixinLetters";

    export default {
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
            this.currentSvg = this.getRandomSvg()
            this.randomLettersAnimal = this.randomletters(this.currentSvg.letters)
        },
        methods:{
            randomletters:function (array) {
              return  array.map(i=>[Math.random(), i]).sort().map(i=>i[1])
            },
            startDrag(evt,item,id){
                console.log("startDrag")
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                console.log(item)
                evt.dataTransfer.setData('letter', JSON.stringify({item:item,id:id}))
            },
            onDrop(evt,list){
                console.log("onDrop")
                const data = evt.dataTransfer.getData('letter')
                let parsedData = JSON.parse(data)
                console.log(parsedData)
                list.push(parsedData.item)
                console.log(list)
                let a =   this.randomLettersAnimal.splice(parsedData.id,1)
                console.log(a)
            }
        }
    }

</script>

<style scoped lang="scss">
     svg {
         display: block;
         width: 850px !important;
         height: 550px;
         margin: -80px auto 0 !important;
     }
    .letters,.name_animal{
        width: 100%;
        margin: 0 auto !important;
        display: flex;
        align-items: center;
        justify-content: center;
        .letter{
            background: rgba(255, 255, 255, 0.5);
            border: 1.8px solid #9a9797;
            float: left;
            margin: 0 15px;
            font-size: 2.25rem;
            text-align: center;
            width: 60px;
            height: 60px;
        }
    }
    .name_animal{
        margin-top: 20px !important;
        height: 60px;
        background: rgba(255, 255, 255, 0.5);
        
    }
</style>
<style  lang="scss">
    #wordConstructor{
        #Square{fill: rgba(255, 255, 255, 0.2);stroke:#000000;stroke-width:0.9709;stroke-miterlimit:10;}
    }
</style>

