<template>
    <div id="loopingAnimation">
        <router-link :to="{name: 'MainMenu'}" tag="button" class="back">Назад</router-link>
        <div>
            <laptop/>
        </div>
    </div>
</template>

<script>
    import Laptop from "./svg/laptop";
    export default {
        name: "loopingAnimation",
        components: {Laptop}
    }
</script>

<style scoped lang="scss">
    svg{ margin-top: 40px;margin-left: -100px;}
</style>
<style  lang="scss">
    #loopingAnimation{
        #Website{animation: website 4s infinite linear;}
        #Brush,#Ruler{animation: website 1.5s infinite linear;}
        @keyframes website {
            0% {transform: translate3d(0, -3%, 0);}
            50% {transform: translate3d(0, 0, 0);}
            100% {transform: translate3d(0, -3%, 0);}
        }
        #Music,#Search{animation: music 4s linear infinite;}
        @keyframes music {
            from { transform: rotate(0deg) translateX(6px) rotate(0deg); }
            to   { transform: rotate(360deg) translateX(6px) rotate(-360deg); }
        }
        #SwitchMusic,#SwitchVideo{animation: musicAndVideo 4s infinite linear;}
        @keyframes musicAndVideo {
            0% {transform: translate3d(7%, 0, 0);}
            50% {transform: translate3d(0, 0, 0);}
            100% {transform: translate3d(7%, 0, 0);}
        }
        #BodyPlayMusic,#BodySoundMusic{animation: musicBody 4s infinite linear;}
        @keyframes musicBody {
            0% { fill: #fa4b4b;}
            25% {fill: #c17f09;}
            50% {fill: #c28728;}
            100% { fill: #f8c977;}
        }
        #Cogwheel{animation: cogwheel 10s linear infinite;}
        @keyframes cogwheel {
            from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
            to   { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        #Lock{animation: lock 10s linear infinite;}
        @keyframes lock {
            from   { transform: rotate(360deg) translateX(-25px) rotate(-360deg); }
            to { transform: rotate(0deg) translateX(-25px) rotate(0deg); }
        }
        #Screwdriver{animation: screwdriver 3.5s linear infinite;}
        @keyframes screwdriver {
            from { transform: rotate(0deg) translateX(9px) rotate(0deg); }
            to   { transform: rotate(360deg) translateX(9px) rotate(-360deg); }
        }
        #Wrench{animation: wrench 3.5s linear infinite;}
        @keyframes wrench {
            from   { transform: rotate(360deg) translateX(9px) rotate(-360deg); }
            to { transform: rotate(0deg) translateX(9px) rotate(0deg); }
        }
        #Video{animation: video 4s linear infinite;}
        @keyframes video {
            0% {transform: translate3d(3%, 0, 0);}
            50% {transform: translate3d(0, 0, 0);}
            100% {transform: translate3d(3%, 0, 0);}
        }
        #Authorization{animation: authorization 4s linear infinite;}
        @keyframes authorization {
            0% {transform: translate3d(0, -4%, 0);}
            50% {transform: translate3d(0, 0, 0);}
            100% {transform: translate3d(0, -4%, 0);}
        }
        #WhiteLinesLaptop{animation: whiteLinesLaptop 10s infinite linear;}
        @keyframes whiteLinesLaptop {
            0% { stroke: #cdc4c4;}
            50% {stroke: #69b34a;}
            100% {stroke: #21b4bf;}
        }
        #BlueLinesLaptop{animation: blueLinesLaptop 10s infinite linear;}
        @keyframes blueLinesLaptop {
            0% { stroke: #41769e;}
            50% {stroke: #244fcd;}
            100% {stroke: #de4708;}
        }
        #RedLinesLaptop{animation: redLinesLaptop 10s infinite linear;}
        @keyframes redLinesLaptop {
            0% { stroke: #720d0d;}
            50% {stroke: #ff9702;}
            100% {stroke: #23b11b;}
        }
        #BodySearch,#Square11,#BigLine{animation: search 10s infinite linear;}
        @keyframes search {
            0% { fill: #720d0d;}
            50% {fill: #ff9702;}
            100% {fill: #23b11b;}
        }
        #NameLaptop,#NameComputer,#Square14,#SquareWebsite{animation: laptop 10s infinite linear;}
        @keyframes laptop {
            0% { fill: #bfb9b9;}
            50% {fill: #e88f0c;}
            100% {fill: #1e9ee2;}
        }
        #Square1,#Square2,#Square13,#BodyTv,#LinesSearchWebsite{
            animation: square 12s infinite linear;}
        @keyframes square {
            0% {fill: #bf2626;}
            50% {fill: #ff9702;}
            100% {fill: #1b8eb1;}
        }
        #Square3,#RedSquareBottomLeft,#Square12{
            animation: square3 12s infinite linear;
        }
        @keyframes square3 {
            0% {fill: #ff9702;}
            50% {fill: #1bb12a;}
            100% {fill: #bb2c2c;}
        }
    }
</style>