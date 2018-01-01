<template>
  <div class="index_wrap">
    <!-- 主页右侧导航栏折叠按钮 -->
    <nav-trigger @click.native="openMes"></nav-trigger>

    <div class="content">
      <div class="index_small_title"> &lt;/html&gt; </div>
      <div class="index_big_title">hello,TyroneYvesChen</div>
      <div class="enter_btn">ENTER</div>
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
    openMes: () => {
      console.log(111)
      let options = {
        title: '标题名称',
        message: 'ceshi'
      }
      Notification(options)
    }
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
    .index_wrap{
      @include bgAuto('./img/index_bg.png');
     
      .content{
        @include center(-135%);
        text-align:left;

        .index_small_title{
          font-family:PingFangSC-Regular;
          font-size:$medium-font-size * 1.2;
          color:#333333;
          letter-spacing:0.8px;
        }

        .index_big_title{
          font-family:Bauhaus93;
          font-size:$large-font-size * 1.2;
          color:#333333;
          font-weight: bold;
          padding: 15px 0 20px 0;
        }

        .enter_btn{
          border:1px solid #333333;
          border-radius:18px;
          width:100px;
          height:36px;
          line-height: 36px;
          text-align: center;
          box-shadow: #333333 0px 2px 5px -1px;
          cursor: pointer;
        }
      }
    }
</style>
