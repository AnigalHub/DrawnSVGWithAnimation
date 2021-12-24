<template>
    <div id="collectCouple">
        <router-link :to="{name: 'GameMenu'}" tag="button" class="back">Назад</router-link>
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
    </div>
</template>

<script>
    import mixinLetters from "../mixins/mixinLetters";

    export default {
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

        },
        created() {
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
    }
</script>

<style scoped lang="scss">
    .animal{
        width: 400px !important;
    }
    svg {
        display: block;
        width: 100% !important;
        margin-bottom: 25px;
        margin-top: -50px;
        margin-left: 80px;
    }
    .card{
        border: 1.5px solid #8e8a8a;
        display: flex;
        align-items: center;justify-content: center;
        width: 170px;
        margin-top: -10px;font-family: 'Merriweather', serif;
        font-weight: 300 !important;
        height: 170px; margin-left: 80px;
        background: rgba(255, 255, 255, 0.2);
    }
    .letters{
        font-size:60px;
        letter-spacing: 2px;
    }
    .name_animals{font-size:20px;}
</style>
<style  lang="scss">
    #collectCouple{
        #Square{fill: rgba(255, 255, 255, 0.2);stroke:#000000;stroke-width:0.9709;stroke-miterlimit:10;}
    }
</style>