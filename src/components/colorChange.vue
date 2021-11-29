<template>
    <div id="colorChange">
        <h1>Нажми на кнопку</h1>
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <div class="flex-container">
            <div v-for="(letter,index) in Svgs" :key="index" >
                    <label  class="switch">
                        <input type="checkbox" v-model="Svgs[index].checked" >
                        <span class="slider round">{{Svgs[index].checked ? "Вкл" : "Выкл"}}</span>
                    </label>
                    <component :isTurnOn="Svgs[index].checked" :is="letter.svg" :id="letter.name"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Bulb from "../components/colorChange_svg/bulb";
    import Alarm from "../components/colorChange_svg/alarm";
    import Television from "../components/colorChange_svg/television";
    import Candle from "../components/colorChange_svg/candle";
    import Toaster from "../components/colorChange_svg/toaster";
    import Kettle from "../components/colorChange_svg/kettle";
    export default {
        name: "colorChange",
        components: {
             Bulb,Alarm,Television,Candle,Toaster,Kettle
        },
        data(){
            return{
               Svgs:[
                   {svg:Bulb,name:'bulb', checked:false},
                   {svg:Alarm,name:'alarm', checked:false,},
                   {svg:Television,name:'television'}, {svg:Candle,name:'candle'}, {svg: Toaster,name:'toaster'},  {svg: Kettle,name:'kettle'}
               ]
            }
        },
    }
</script>

<style scoped lang="scss">
    #colorChange{
        .flex-container > div {
            width: 33%;
            margin-left: -40px;
        }
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 210px;
        height: 34px;
    }
    input{
        display: none;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 50px;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        padding: 5px 0 0 105px;
        font-weight: bold;
        font-family: 'Alegreya', serif;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
    }
    input:checked + .slider {
        background-color: #2196F3;
        padding: 5px 0 0 20px;
    }
    input:checked + .slider:before {transform: translateX(125px);}
    .slider.round {border-radius: 34px;}
    .slider.round:before {border-radius: 50%;}
    svg{ margin-top: -40px; margin-bottom:45px;margin-left: -210px;}
</style>
<!-- <style  lang="scss">
    .check{
        #bulb{
           #Body{fill:#FDEF9F !important;stroke: #e2d079 !important;}
           #Middle{fill:#FDEF9F !important;}
           #Sleeve{fill:#FBCF73 !important;}
           #RightLine{fill:#FBCF73 !important;stroke:#FCEE21 !important;}
           #LeftLine{fill:#FFFAFA !important;stroke:#FFFFFF !important;}
        }
        #alarm{
            #Lines,#Arrow2{display: block !important;}
            #Arrow1{display: none !important;}
        }
        #television{
            #Colors,#Switch2{display: block !important;}
            #Switch1{display: none !important;}
        }
        #candle{
            #Fire{display: block !important;}
        }
        #toaster{
            #Bread,#Button2{display: block !important;}
            #Button1,#Fire{display: none !important;}
        }
        #kettle{
            #Steam,#Arrow2{display: block !important;}
            #Arrow1{display: none !important;}
        }
    }
</style> -->
