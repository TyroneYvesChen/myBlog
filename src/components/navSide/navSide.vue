<template>
  <div class="nav_side">
    <div class="close_btn" @click="close">
      <img :src="imgSrc.navClose" alt="点我关闭">
    </div>
  </div>
</template>

<script>
export default {
  name: 'navSide',
  components: {
    
  },
  data () {
    return {
      imgSrc: {
        navClose: require('./img/navClose.png')
      }
    }
  },
  methods: {
    //nav关闭移出事件
    close: function(){
      this.$store.dispatch('isCoverShow')
    }
  },
  mounted (){
    
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .nav_side{
        display: inline-block;
        width: 300px;
        height: 100%;
        background:#232222;
        position: absolute;
        right: 0;
        z-index: 10;

        .close_btn{
          float: right;
          padding: 10px;
          cursor: pointer;
        }
      }
</style>
