<template>
  <div class="nav_trigger" @click="showSide">
      <!-- <img :src="imgSrc.navTrigger" alt="点我点我点我！"> -->
  </div>
</template>

<script>
export default {
  name: 'navTrigger',
  data () {
    return {
      imgSrc: {
        // navTrigger: require('./img/nav.png')
      }
    }
  },
  methods: {
    showSide: function(){    
      this.$store.dispatch('isCoverShow')
    }
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .nav_trigger{
        position: absolute;
        right: 0;
        width: $nav_trigger;
        height: $nav_trigger;
        margin-right: $nav_trigger_scale * 2;
        margin-top: $nav_trigger_scale;
        background: url('../../../static/img/nav.png') no-repeat center;
        background-size: 100%;
        box-shadow: 0px 1px 10px 1px #ffffff;
        border-radius: 5px;
        transition: all 0.3s;
        cursor: pointer;

        &:hover{
          background: url('../../../static/img/navHover.png') no-repeat center;
          background-size: 100%;
          background-color: #ffffff;
        }
        img{
          width: 100%;
        }
      }
</style>
