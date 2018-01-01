<template>
  <div id="app">
    <router-view/>

    <nav-side></nav-side>

    <modal></modal>
  </div>
</template>

<script>
import modal from '@/components/modal/modal'
import navSide from '@/components/navSide/navSide'

export default {
  name: 'app',
  components: {
    modal,
    navSide
  },
}
</script>

<style rel="stylesheet/scss" type="text/css">
  @import './assets/styles/_reset.scss';
  @import './assets/styles/index.scss';
  @import './assets/styles/animate.scss';
  /* @import './assets/styles/animate.css'; */
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
