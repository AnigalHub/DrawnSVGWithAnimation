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
            margin-left: 10%;
            &> div {
                width: 33%;
                margin-left: -40px;
            }
        }
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 210px;
        height: 34px;
    }
    input{display: none;}
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
    input:checked + .slider:before {transform: translateX(125px);}
    .slider.round {border-radius: 34px;}
    .slider.round:before {border-radius: 50%;}
    svg{
        width: 520px;
        margin-top: 0;
        margin-bottom:30px;
        margin-left: -210px;
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        svg{width: 320px;}
        #colorChange{
            .flex-container{
                margin-left: 30%;
                &> div {
                    width: 44%;
                    margin-left: -40px;
                    margin-right: 55px;
                }
            }
        }
        .slider {padding: 5px 45px 0 90px;}
        .switch {
            margin-left: -60%;
            width: 170px;
            height: 32px;
        }
        input:checked + .slider:before {transform: translateX(85px);}
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        svg{width: 380px;}
        #colorChange{
            .flex-container{
                margin-left: 5%;
                &> div {
                    margin-right: 35px;
                }
            }
        }
        .slider {padding: 5px 45px 0 105px;}
        .switch {
            margin-left: -22%;
            width: 190px;
            height: 32px;
        }
        input:checked + .slider:before {transform: translateX(105px);}
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        svg{width: 460px;}
    }
</style>

