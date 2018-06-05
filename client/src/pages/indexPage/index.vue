<template>
  <div class="index_wrap">
    <!-- 主页右侧导航栏折叠按钮 -->
    <nav-trigger></nav-trigger>

    <div class="content">
      <div class="index_small_title"> &lt;/html&gt; </div>
      <div class="index_big_title">hello,TyroneYvesChen</div>
      <div class="enter_btn" @click="openNot">ENTER</div>
    </div>
  </div>
</template>

<script>
import navTrigger from '@/components/navTrigger/navTrigger'

import { Notification } from 'element-ui';

export default {
  name: 'index',
  components: {
    navTrigger
  },
  data: () => {
    return {
      imgSrc: {
        indeBg: require('./img/index_bg.png')
      }
    }
  },
  methods: {
    openNot: () => {
      console.log(111)
      let options = {
        title: '该功能暂未开放！',
        message: '敬请期待！',
        position: 'top-left'
      }
      Notification(options)
    },
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
    .index_wrap{
      // @include bgAuto('./img/index_bg.png');
      @include bgAuto('./img/index_bg_little.png');
     
      .content{
        @include center(-108%);
        text-align:left;

        .index_small_title{
          font-family:$font-base;
          font-size:$medium-font-size * 1.2;
          color:$black-base-font;
          letter-spacing:0.8px;
        }

        .index_big_title{
          font-family:$font-big-base;
          font-size:$large-font-size * 1.2;
          color:$black-base-font;
          font-weight: bold;
          padding: 15px 0 20px 0;
        }

        .enter_btn{
          border:1px solid $black-base;
          border-radius:18px;
          width:100px;
          height:36px;
          line-height: 36px;
          text-align: center;
          box-shadow: $black-base 0px 2px 5px -1px;
          cursor: pointer;
        }
      }

      @media screen and (min-width:1366px){
        .content {
          
          .index_small_title{
            font-size:$medium-font-size * 1.5;
          }
          .index_big_title{
            font-size:$large-font-size * 1.5;
          }
        }
      }

       @media screen and (max-width:1080px){
        .content {
          
          .index_small_title{
            font-size:$medium-font-size * 0.9;
          }
          .index_big_title{
            font-size:$large-font-size * 0.9;
          }
        }
      }
    }
      
</style>
