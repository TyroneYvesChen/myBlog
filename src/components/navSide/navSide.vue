<template>
  <transition 
    enter-active-class="animated fadeInRight" 
    leave-active-class="animated fadeOutRight">

    <div class="nav_side" v-show="isCoverShow">
      <!-- 右上角隐藏nav按钮 -->
      <div class="close_btn" @click="close">
        <img :src="imgSrc.navClose" alt="点我隐藏">
      </div>

        <!-- nav主体导航栏 -->
      <ul class="nav_body">
        <li class="nav_item">HOME</li>
        <li class="nav_item">NEWS</li>
        <li class="nav_item">DEMO</li>
        <li class="nav_item">LIFE</li>
        <li class="nav_item">SHOW</li>
        <li class="nav_item">CAT</li>
      </ul>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'navSide',
  components: {
    
  },
  computed: {
    ...mapGetters(["isCoverShow"])
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
        width: $nav-side-width;
        height: 100%;
        background:#232222;
        position: absolute;
        right: 0;
        // transform: translate3d(100%, 0, 0);
        z-index: 10;

        .close_btn{
          float: right;
          padding: $padding;
          cursor: pointer;
        }

        .nav_body{
          padding: 60px 35px;

          .nav_item{
            position: relative;
            font-family:PingFangSC-Light;
            font-size:$little-font-size;
            color:$gray-nav;
            letter-spacing:2.62px;
            padding: $padding;
            text-align: left;
            cursor: pointer;
            
            &:hover{
              font-family:PingFangSC-Regular;
              font-size:$nav-hover;
              color:$white-base;
              letter-spacing:3px;
              // border-bottom: 1px solid $white-base;

              &:before{
                position: absolute;
                content: "";
                border: 1px solid $white-base;
                width: 80px;
                top: 18px;
                left: -2px;
              }
            }
          }
        }
      }
</style>
