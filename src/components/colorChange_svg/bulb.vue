<template>
    <svg version="1.1"  v-bind:class="{turnOn: isTurnOn}"  id="Bulb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">
        <g>
	        <path id="CentralContact" class="st0" d="M147.8,233H100c-1.3,0-2.4-1.1-2.4-2.4v-4.7c0-1.3,1.1-2.4,2.4-2.4h47.9c1.3,0,2.4,1.1,2.4,2.4v4.7C150.3,231.9,149.2,233,147.8,233z"/>
            <g id="Base">
		        <path class="st1" d="M163.2,223.5H87.3c-3.1,0-5.7-2.5-5.7-5.6v-38.6c0-3.1,2.5-5.6,5.7-5.6h74.9c2.2,0,4,1.8,4,4v42.8C166.2,222.2,164.8,223.5,163.2,223.5z"/>
                <g>
			        <path class="st2" d="M174,181.4H73.8c-0.8,0-1.3-0.7-1.3-1.5l0,0c0-0.9,0.6-1.5,1.3-1.5H174c0.8,0,1.3,0.7,1.3,1.5l0,0C175.3,180.7,174.7,181.4,174,181.4z"/>
                    <path class="st2" d="M173.5,188.3H73.3c-0.8,0-1.3-0.7-1.3-1.5l0,0c0-0.9,0.6-1.5,1.3-1.5h100.2c0.8,0,1.3,0.7,1.3,1.5l0,0C174.8,187.6,174.2,188.3,173.5,188.3z"/>
                    <path class="st2" d="M173.5,196.2H73.3c-0.8,0-1.3-0.7-1.3-1.5l0,0c0-0.9,0.6-1.5,1.3-1.5h100.2c0.8,0,1.3,0.7,1.3,1.5l0,0C174.8,195.5,174.2,196.2,173.5,196.2z"/>
                    <path class="st2" d="M173.5,203.6H73.3c-0.8,0-1.3-0.7-1.3-1.5l0,0c0-0.9,0.6-1.5,1.3-1.5h100.2c0.8,0,1.3,0.7,1.3,1.5l0,0C174.8,202.9,174.2,203.6,173.5,203.6z"/>
                    <path class="st2" d="M174,211.5H73.8c-0.8,0-1.3-0.7-1.3-1.5l0,0c0-0.9,0.6-1.5,1.3-1.5H174c0.8,0,1.3,0.7,1.3,1.5l0,0C175.3,210.9,174.7,211.5,174,211.5z"/>
                    <path class="st2" d="M174.5,218.9H74.4c-0.8,0-1.3-0.7-1.3-1.5l0,0c0-0.9,0.6-1.5,1.3-1.5h100.2c0.8,0,1.3,0.7,1.3,1.5l0,0C175.9,218.3,175.3,218.9,174.5,218.9z"/>
                </g>
            </g>
            <ellipse id="Body" class="st3" cx="123.6" cy="89.7" rx="78.4" ry="76.9"/>
            <ellipse id="LeftLine" class="st4" cx="115.6" cy="82.8" rx="59.2" ry="58.2"/>
            <ellipse id="RightLine" class="st5" cx="129" cy="91.8" rx="59.2" ry="58.2"/>
            <ellipse id="Middle" class="st6" cx="121.8" cy="88.4" rx="61.7" ry="60.5"/>
            <path id="Sleeve" class="st5" d="M162.7,173.8H85.1c-1.9,0-3.5-1.5-3.5-3.4v-13.2c0-1.9,1.6-3.4,3.5-3.4h73.9c3.9,0,7.1,3.1,7.1,7v9.7C166.2,172.2,164.6,173.8,162.7,173.8z"/>
            <g id="Electrodes">
		        <path class="st7" d="M112.1,173.8H111c-0.4,0-0.8-0.3-0.8-0.7V83.6c0-0.4,0.3-0.7,0.8-0.7h1.1c0.4,0,0.8,0.3,0.8,0.7V173C112.9,173.5,112.5,173.8,112.1,173.8z"/>
                <path class="st7" d="M130.7,173.8H130c-0.6,0-1-0.5-1-1V83.8c0-0.6,0.5-1,1-1h0.6c0.6,0,1,0.5,1,1v88.9C131.7,173.3,131.2,173.8,130.7,173.8z"/>
                <path class="st7" d="M146.3,82.4v0.2c0,0.7-0.5,1.2-1.2,1.2H99.1c-0.7,0-1.2-0.5-1.2-1.2v-0.2c0-0.7,0.5-1.2,1.2-1.2H145C145.7,81.2,146.3,81.8,146.3,82.4z"/>
            </g>
        </g>
    </svg>
</template>

<script>
    export default {
        name: "bulb",
        props:{
            isTurnOn: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style scoped lang="scss">
    /*Включено*/
    .turnOn{
        /*Тело лампочки*/
        #Body{fill:#FDEF9F !important;stroke: #e2d079 !important;}
        /*Середина лампочки*/
        #Middle{fill:#FDEF9F !important;}
        /*Гильза лампочки*/
        #Sleeve{fill:#FBCF73 !important;}
        /*Правые линии*/
        #RightLine{fill:#FBCF73 !important;stroke:#FCEE21 !important;}
        /*Левые линии*/
        #LeftLine{fill:#FFFAFA !important;stroke:#FFFFFF !important;}
    }
    .st0{fill:#636362;stroke:#B3B3B3;stroke-width:0.75;stroke-miterlimit:10;}
    .st1{fill:#808080;stroke:#808080;stroke-miterlimit:10;}
    .st2{fill:#4D4D4D;stroke:#4D4D4D;stroke-width:1.5;stroke-miterlimit:10;}
    .st3{fill: #a8d6ec;stroke: #75badc;stroke-width:9;stroke-miterlimit:10;}
    .st4{fill:#FFFAFA;stroke:#FFFFFF;stroke-miterlimit:10;}
    .st5{fill: #4c83a0;}
    .st6{fill: #a8d6ec;}
    .st7{fill:#FFFFFF;stroke:#F2F2F2;stroke-miterlimit:10;}
    .st8{fill:none;stroke:#000000;stroke-miterlimit:10;}
</style>