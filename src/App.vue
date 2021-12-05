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
  $background: #8dccee;
  #app{
      height: 100vh;
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
          &:hover {
              box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
          }
      }
  }
  #colorChange{
      h1{
          padding-top: 20px;
          margin-bottom: 0 !important;
      }
  }
  #alphabet,#colorChange,#loopingAnimation,#wordConstructor,#collectCouple,#territory{
      margin-left: 60px;
      button{
          width: 150px;
          padding:10px 32px;
          transition-duration: 0.4s;
          position: sticky;
          top: 35px;
          margin-left: -250px;
      }
  }
  .back{background-color: #517952 !important;}
  .flex-container {
      display: flex;
      flex-wrap: wrap;
      //margin-top: 1.5%;
      //margin-left: 20px;
  }
</style>
