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
  #Square{fill: rgba(104, 241, 253, 0.45);stroke:#000000;stroke-width:0.9709;stroke-miterlimit:10;}
  .close { /*"крестик" (размер) - кнопка закрытия модального окна*/
      border: none !important;
      background: none !important;
      font-size: 30px;
  }
  .modal-dialog:first-child{margin-top: 5% !important;}
  .modal-header{
      border: none !important;
      padding: 10px !important;
  }
  .modal-body { /*тело модального окна*/
      padding:10px !important;
      min-height: 100px;
      text-align: center;
      font-size: 30px;
      font-family: 'Poiret One', cursive;
      font-weight: 800 !important;
  }
  .modal-footer{ /*footer-модального окна*/
      display: none !important;
  }
  @media (min-width: 992px){
      .modal-lg, .modal-xl { /*ширина модального окна на разных экранах*/
          max-width: 750px !important;
      }
  }
  $background: #8dccee;
  #app{
      height: 100%;
      min-height: 100vh;
      background: $background;
  }
  h1{
      text-align: center;
      margin-bottom: 25px !important;
      font-family: 'Poiret One', cursive;
      font-weight: 800 !important;
  }
  #mainMenu, #gameMenu{
      padding-top: 15%;
      padding-bottom: 20px;
      button{
          display: block;
          background-color: #269e2b;
          width: 450px;
          padding:20px 32px;
          margin: 20px auto;
          cursor: pointer;
          transition-duration: 0.4s;
      }
  }
  #mainMenu, #gameMenu, #alphabet,#colorChange,#loopingAnimation,#wordConstructor, #collectCouple,#territory {
      button {
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.15rem;
          text-align: center;
          text-decoration: none;
          transition-duration: 0.4s;
          &:hover {box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);}
      }
  }
  #alphabet,#colorChange,#loopingAnimation,#wordConstructor,#collectCouple,#territory{
      padding-top: 15px;
  }
  .back{
      width: 150px;
      padding:10px 32px;
      transition-duration: 0.4s;
      display: block;
      margin-left: auto;
      margin-right: auto;
      background-color: #517952 !important;
  }
  .buttonGame{
      font-size: 1.15rem;
      text-align: center;
      text-decoration: none;
      transition-duration: 0.4s;
      display: flex !important;
      margin: 10px auto 15px;
      padding-bottom: 40px;
      width: 700px;
      button{
          width: 155px;
          padding:10px !important;
          margin: 0 8px;
          &:first-child{background: #517952;}
          &:last-child{background: #3a6f3a;}
      }
  }
  .flex-container {
      display: flex;
      flex-wrap: wrap;
  }
  #screenRotation{display: none;}
  @media screen and  (max-width: 499px) {
      #alphabet{padding-left: 0;}
      #mainMenu, #gameMenu{
          button{width: 100%;}
      }
      #content{display: none;}
      #screenRotation{display: block;}
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {
      #collectCouple, #wordConstructor {
          h1 {margin-left: -40px;}
      }
      .buttonGame {
          width: 100%;
          margin-top: 10px !important;
      }
  }
  @media screen and (max-width: 992px) {
      #alphabet,#colorChange,#loopingAnimation,#wordConstructor,#collectCouple,#territory{
          button{padding:7px;}
      }
      #mainMenu, #gameMenu{
          padding-top: 8%;
          button{
              padding:15px;
              margin: 10px auto;
          }
      }
      h1{font-size: 1.5rem !important;}
      #mainMenu, #gameMenu, #alphabet,#colorChange,#loopingAnimation,#wordConstructor, #collectCouple,#territory {
          button {font-size: .9rem;}
      }
  }
</style>
