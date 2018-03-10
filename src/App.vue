<template>
  <div id="app" @scroll="scroll()">
    <transition enter-active-class="animated fadeIn">
      <router-view/>
    </transition>
    
    <!-- 全局侧边导航栏 -->
    <nav-side></nav-side>

    <!-- 全局覆盖层 -->
    <modal></modal>
  </div>
</template>

<script>
import modal from '@/components/modal/modal'
import navSide from '@/components/navSide/navSide'
import eventBus from '@/assets/js/eventBus'

// vue生态
// import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    modal,
    navSide
  },
  methods: {
    scroll (){
      // let scrollTop = ele.currentTarget.scrollTop
      eventBus.$emit('scroll');   
    }
  }
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
  width: 100%;
  height: 100%;
  /* position: fixed; */
  overflow-y: auto;
  overflow-x: hidden;  
}
</style>
