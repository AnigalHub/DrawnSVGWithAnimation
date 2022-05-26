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
    /*Компонент - СменаЦвета (colorChange)*/
    #colorChange{
        /*контейнер, который включает в себя повтор блоков*/
        .flex-container{
            width: 70%;
            margin: 0 auto;
            /*блоки, которые повторяются*/
            &> div {width: 33%;}
        }
    }
    /*переключатель вкл-выкл*/
    .switch {
        position: relative;
        display: inline-block;
        width: 190px;
        height: 34px;
        margin-left: 20px;
    }
    /*элемент с галочкой*/
    input {display: none;}
    /*ползунок переключения*/
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
        /*шарик - который перемещается в ползунке переключения*/
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
    /*элемент ползунка переключения в момент переключения*/
    input:checked + .slider {
        background-color: #2196F3;
        padding: 5px 0 0 20px;
    }
    /*на сколько перемещаем шарик от элемента начала ползунка переключения*/
    input:checked + .slider:before {transform: translateX(145px);}
    /*сам шарик который перемещаем в ползунке переключения*/
    .slider.round {
        border-radius: 34px;
        &:before {border-radius: 50%;}
    }
    /*svg*/
    svg{
       width: 200px;
       height: 200px;
       margin: 15px;
    }

    /*Адаптивность*/
    @media screen and (min-width: 500px) and (max-width: 768px) {
        /*Компонент - СменаЦвета (colorChange) - контейнер, который включает в себя повтор блоков*/
        #colorChange .flex-container {width: 100%;}
        /*svg*/
        svg {
            width: 135px;
            height: 135px;
            margin: 5px;
        }
        /*ползунок переключения*/
        .slider {padding: 5px 45px 0 90px;}
        /*переключатель вкл-выкл*/
        .switch {
            margin-left: 0;
            width: 130px;
            height: 32px;
        }
        /*на сколько перемещаем шарик от элемента начала ползунка переключения*/
        input:checked + .slider:before {transform: translateX(85px);}
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        /*Компонент - СменаЦвета (colorChange) - контейнер, который включает в себя повтор блоков*/
        #colorChange .flex-container {width: 85%;}
        /*svg*/
        svg{
            width: 190px;
            height: 190px;
        }
        /*ползунок переключения*/
        .slider {padding: 5px 45px 0 105px;}
        /*переключатель вкл-выкл*/
        .switch {
            width: 190px;
            height: 32px;
        }
        /*на сколько перемещаем шарик от элемента начала ползунка переключения*/
        input:checked + .slider:before {transform: translateX(105px);}
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        /*Компонент - СменаЦвета (colorChange) - контейнер, который включает в себя повтор блоков*/
        #colorChange .flex-container {width: 85%;}
        /*svg*/
        svg{
            width: 190px;
            height: 190px;
        }
    }
</style>

