<template>
  <div id="app" class="blue lighten-5">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#app{
  //padding-bottom: 20px;
  min-height: 100vh;
  padding-bottom: 20px;
}
*{
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}
</style>
