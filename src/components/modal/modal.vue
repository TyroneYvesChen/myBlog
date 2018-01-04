<template>
  <transition 
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <div class="modal" v-show="isCoverShow" @click="close"></div>    
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'modal',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(["isCoverShow"])
  },
  methods: {
    close: function(){    
      this.$store.dispatch('isCoverShow')
    }
  },
  mounted (){
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .modal{
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background:rgba(72,72,72,0.69);
      }
</style>
