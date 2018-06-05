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
        <router-link class="nav_item" to="/" tag="li" @click.native="close">HOME</router-link>
        <router-link class="nav_item" to="/news" tag="li" @click.native="close">NEWS</router-link>
        <router-link class="nav_item" to="/layout" tag="li" @click.native="close">DEMO</router-link>
        <router-link class="nav_item" to="/timeLinePage" tag="li" @click.native="close">LIFE</router-link>
        <li class="nav_item" @click="openMes">SHOW</li>
        <li class="nav_item" @click="openMes">CAT</li>
      </ul>

      <ul class="skill_introduce">
        <!-- 头像 -->
        <div class="headerImg">
          <img :src="imgSrc.navHeaderImg" alt="">
        </div>

        <!-- 技能槽 -->
        <li class="skill_item clearfix" 
          v-for="(item, index) in skillArr" 
          :key="index">
          <div class="s_name">{{ item.name }}</div>
          <div class="s_progress">
            <el-progress 
            :percentage="item.percentage"
            :stroke-width="10"
            :show-text="false" ></el-progress>
          </div>
        </li>
      </ul>

    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import { Message } from 'element-ui';
import { Progress  } from 'element-ui';

Vue.use(Progress)

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
        navClose: require('./img/navClose.png'),
        navHeaderImg: require('./img/cute.jpg')
      },
      skillArr: [
        {
          name: "HTML 5",
          percentage: 80
        },
        {
          name: "CSS 3",
          percentage: 85
        },
        {
          name: "JQUERY",
          percentage: 100
        },
        {
          name: "VUE",
          percentage: 80
        },
        {
          name: "NODE",
          percentage: 60
        }
      ]
    }
  },
  methods: {
    //nav关闭移出事件
    close: function(){
      this.$store.dispatch('isCoverShow', false)
    },
    openMes: () => {
      console.log(111)
      let options = {
        message: '尚未完成，敬请期待！',
        type: 'success'
      }
      Message(options)
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
        top: 0;
        right: 0;
        z-index: 10;

        .close_btn{
          float: right;
          padding: $padding;
          cursor: pointer;
        }

        .nav_body{
          padding: 25% 12% 15%;

          .nav_item{
            position: relative;
            font-family:$nav-font;
            font-size:$little-font-size;
            color:$gray-nav;
            letter-spacing:2.62px;
            padding: 0 $padding;
            height: 36px;
            line-height: 36px;
            text-align: left;
            cursor: pointer;
            
            &:hover{
              font-family:$font-base;
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

        .skill_introduce{
          position: absolute;
          bottom: 30px;
          width: 100%;

          .headerImg{
            text-align: center;
            padding: 2% 0 5%;

            img{
              width: $head-img-size;
              height: $head-img-size;
              margin: 0 auto;
              border-radius: 100%;
            }
          }

          .skill_item{
            text-align: left;
            color:$gray-nav;
            font-size:$little-font-size;
            padding: 2% 0;
            
            > div{
              // display: inline-block;
              float: left;
            }

            .s_name{
              width: 40%;
              padding-left: 15%;
            }

            .s_progress{
              width: 60%;
              padding-right: 10%;
            }
          }
        }
      }
</style>
