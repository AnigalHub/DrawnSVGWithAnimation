<template>
    <div id="colorChange">
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <div id="content">
            <h1>Нажми на кнопку</h1>
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
        <screen-rotation/>
    </div>
</template>

<script>
    import Bulb from "../components/colorChange_svg/bulb";
    import Alarm from "../components/colorChange_svg/alarm";
    import Television from "../components/colorChange_svg/television";
    import Candle from "../components/colorChange_svg/candle";
    import Toaster from "../components/colorChange_svg/toaster";
    import Kettle from "../components/colorChange_svg/kettle";
    import ScreenRotation from "./screenRotation";
    export default {
        name: "colorChange",
        components: {
            ScreenRotation,
             Bulb,Alarm,Television,Candle,Toaster,Kettle
        },
        data(){
            return{
               Svgs:[
                   {svg:Bulb,name:'bulb'}, {svg:Alarm,name:'alarm'}, {svg:Television,name:'television'},
                   {svg:Candle,name:'candle'}, {svg: Toaster,name:'toaster'}, {svg: Kettle,name:'kettle'},
               ]
            }
        },
    }
</script>

<style scoped lang="scss">
    #colorChange{
        .flex-container{
            width: 70%;
            margin: 0 auto;
            &> div {width: 33%;}
        }
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 190px;
        height: 34px;
        margin-left: 20px;
    }
    input{display: none;}
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 10px;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        padding: 5px 0 0 125px;
        font-weight: bold;
        font-family: 'Alegreya', serif;

        &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            top: 3px;
            left: 4px;
            bottom: 2px;
            background-color: white;
            transition: .4s;
        }
    }
    input:checked + .slider {
        background-color: #2196F3;
        padding: 5px 0 0 20px;
    }
    input:checked + .slider:before {transform: translateX(145px);}
    .slider.round {border-radius: 34px;}
    .slider.round:before {border-radius: 50%;}
    svg{
       width: 250px;
       height: 250px;
       margin: 15px;
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        #colorChange .flex-container{width: 100%;}
        svg{
            width: 135px;
            height: 135px;
            margin: 5px;
        }
        .slider {padding: 5px 45px 0 90px;}
        .switch {
            margin-left: 0;
            width: 130px;
            height: 32px;
        }
        input:checked + .slider:before {transform: translateX(85px);}
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        #colorChange .flex-container{width: 85%;}
        svg{
            width: 190px;
            height: 190px;
        }
        .slider {padding: 5px 45px 0 105px;}
        .switch {
            width: 190px;
            height: 32px;
        }
        input:checked + .slider:before {transform: translateX(105px);}
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        #colorChange .flex-container{width: 85%;}
        svg{
            width: 230px;
            height: 230px;
        }
    }
</style>

