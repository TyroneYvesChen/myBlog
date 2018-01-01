<template>
  <div class="nav_trigger" @click="trigger">
      <!-- <img :src="imgSrc.navTrigger" alt="点我点我点我！"> -->
  </div>
</template>

<script>
export default {
  name: 'navTrigger',
  data () {
    return {
      isTrigger: false,
      imgSrc: {
        navTrigger: require('./img/nav.png')
      }
    }
  },
  methods: {
    trigger: () => {
      this.isTrigger = true
    }
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .nav_trigger{
        width: $nav_trigger;
        height: $nav_trigger;
        margin-right: $nav_trigger_scale * 2;
        margin-top: $nav_trigger_scale;
        background: url('./img/nav.png') no-repeat center;
        background-size: 100%;
        transition: all 0.3s;
        cursor: pointer;
        float: right;

        &:hover{
          background: url('./img/navHover.png') no-repeat center;
          background-size: 100%;
        }
        img{
          width: 100%;
        }
      }
</style>
