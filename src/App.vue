<template>
  <div id="app">
    <b-container>
        <router-view></router-view>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style lang="scss">
  /*квадрат у Svg  играх (животные)*/
  #Square {fill:#F8F8FF; stroke:#000000; stroke-width:0.9709; stroke-miterlimit:10;}
  /*"крестик" (размер) - кнопка закрытия модального окна*/
  .close{
      border: none !important;
      background: none !important;
      font-size: 30px;
  }
  /*модальное окно*/
  .modal-dialog:first-child {margin-top: 5% !important;}
  /*заголовок модального окна*/
  .modal-header{
      border: none !important;
      padding: 10px !important;
  }
  /*тело модального окна*/
  .modal-body {
      padding: 10px !important;
      min-height: 100px;
      text-align: center;
      font-size: 30px;
  }
  /*выделенный текст*/
  u{
      font-weight: 600 !important;
      font-family: 'Bad Script', cursive;
  }
  /*footer-модального окна*/
  .modal-footer{display: none !important;}
  /*Компонент в котором вызываются все другие компоненты*/
  #app{
      height: 100%;
      min-height: 100vh;
      background: #EAF5FC;
  }
  /*заголовок*/
  h1{
      text-align: center;
      font-size: 2rem !important;
      margin-bottom: 25px !important;
      font-weight: 600 !important;
      font-family: 'Bad Script', cursive;
  }
  /*контент всех компонентов*/
  #content{padding-top: 2%;}
  /*Компонент - ГлавноеМеню (mainMenu), Компонент - МенюИгры (gameMenu)*/
  #mainMenu, #gameMenu{
      padding-top: 15%;
      padding-bottom: 20px;
      /*кнопки*/
      button{
          display: block;
          background-color: #7eb0cb;
          font-family: 'Lora', serif;
          width: 450px;
          padding: 20px 32px;
          margin: 20px auto;
          cursor: pointer;
          transition-duration: 0.4s;
      }
  }
  /*Компоненты - ГлавноеМеню (mainMenu), МенюИгры (gameMenu), Алфавит (alphabet), СменаЦвета (colorChange),
  ЦикличнаяАнимация (loopingAnimation), КонструкторСлов(wordConstructor), СобериПару (CollectCouple), ТерриторияРоссии (territory) */
  #mainMenu, #gameMenu, #alphabet, #colorChange, #loopingAnimation, #wordConstructor, #collectCouple, #territory{
      /*кнопки*/
      button{
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.15rem;
          text-align: center;
          text-decoration: none;
          transition-duration: 0.4s;
          /*кнопки при наведении*/
          &:hover {box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);}
      }
  }
  /*Компоненты - Алфавит (alphabet), СменаЦвета (colorChange), ЦикличнаяАнимация (loopingAnimation),
   КонструкторСлов(wordConstructor), СобериПару (CollectCouple), ТерриторияРоссии (territory) */
  #alphabet, #colorChange, #loopingAnimation, #wordConstructor, #collectCouple, #territory{padding-top: 15px;}
  /*кнопка назад в компонентах игры*/
  .back{
      width: 150px;
      padding: 10px 32px;
      transition-duration: 0.4s;
      display: block;
      margin: 0 auto;
      background-color: #5288a5 !important;
  }
  /*блок под кнопки управления игрой (СобериПару, КонструкторCлов)*/
  .buttonGame{
      font-size: 1.15rem;
      text-align: center;
      text-decoration: none;
      transition-duration: 0.4s;
      display: flex !important;
      margin: 10px auto 15px;
      padding-bottom: 40px;
      width: 700px;
      /*кнопки*/
      button{
          width: 155px;
          padding: 10px !important;
          margin: 0 8px;
          background: #517952;
          /*кнопки при наведении*/
          &:hover {background: #326132;}
      }
  }
  /*контейнер, который включает в себя повтор блоков*/
  .flex-container{
      display: flex;
      flex-wrap: wrap;
  }
  /*Компонент - ПоворотЭкрана (ScreenRotation) */
  #screenRotation{display: none;}


  /*Адаптивность*/
  @media screen and (max-width: 499px) {
      /*Компонент - Алфавит (alphabet)*/
      #alphabet{padding-left: 0;}
      /*Компонент - ГлавноеМеню (mainMenu), Компонент - МенюИгры (gameMenu) - кнопки*/
      #mainMenu button, #gameMenu button{width: 100%;}
      /*контент всех компонентов*/
      #content{display: none;}
      /*Компонент - ПоворотЭкрана (ScreenRotation) */
      #screenRotation{display: block;}
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {
      /*заголовок компонентов СобериПару (CollectCouple), КонструкторСлов(wordConstructor)*/
      #collectCouple h1, #wordConstructor h1{margin-left: -40px;}
      /*блок под кнопки управления игрой (СобериПару, КонструкторCлов)*/
      .buttonGame{
          width: 100%;
          margin-top: 10px !important;
      }
  }
  @media (min-width: 992px) {
      /*ширина модального окна на разных экранах*/
      .modal-lg, .modal-xl{max-width: 750px !important;}
  }
  @media screen and (max-width: 992px) {
      /*Компоненты - Алфавит (alphabet), СменаЦвета (colorChange), ЦикличнаяАнимация (loopingAnimation),
      КонструкторСлов(wordConstructor), СобериПару (CollectCouple), ТерриторияРоссии (territory) */
      #alphabet, #colorChange, #loopingAnimation, #wordConstructor, #collectCouple, #territory{
          /*кнопки*/
          button{padding:7px;}
      }
      /*Компонент - ГлавноеМеню (mainMenu), Компонент - МенюИгры (gameMenu)*/
      #mainMenu, #gameMenu {
          padding-top: 8%;
          /*кнопки*/
          button{
              padding: 15px;
              margin: 10px auto;
          }
      }
      /*заголовок*/
      h1{font-size: 1.5rem !important;}
      /*Компоненты - ГлавноеМеню (mainMenu), МенюИгры (gameMenu), Алфавит (alphabet), СменаЦвета (colorChange),
      ЦикличнаяАнимация (loopingAnimation), КонструкторСлов(wordConstructor), СобериПару (CollectCouple), ТерриторияРоссии (territory) */
      #mainMenu, #gameMenu, #alphabet, #colorChange, #loopingAnimation, #wordConstructor, #collectCouple,#territory{
          /*кнопки*/
          button{font-size: .9rem;}
      }
  }
</style>
