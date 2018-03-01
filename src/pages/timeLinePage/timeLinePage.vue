<template>
  <div class="time_line_page">
    <span class="cntl-bar cntl-center">
      <span class="cntl-bar-fill"></span>
    </span>

    <time-line-item></time-line-item>
    <time-line-item></time-line-item>
    <time-line-item></time-line-item>
  </div>
</template>

<script>
import timeLineItem from '@/components/timeLineItem/timeLineItem'

export default {
  name: 'timeLinePage',
  components: {
    timeLineItem
  },
  data () {
    return {
      imgSrc: {
        pic1: require('./img/pic1.png')
      }
    }
  },
  methods: {
    openMes: () => {
      let options = {
        message: '我是可爱的小tag~我有什么功能还不知道呢~',
        type: 'success'
      }
      Message(options)
    }
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .time_line_page{
        position: relative;
        width: 100%;
        overflow: hidden;

        .cntl-center {
          left:0;
            right:0;
            margin-left:auto;
            margin-right:auto;
        }

        .cntl-bar {
          position: absolute;
          width: 10px;
          top: 0;
          bottom: 0;
          background-color: #ccc;
          box-shadow: inset 0px 0px 7px -2px #000;

          .cntl-bar-fill {
            background-color: #009ABB;
            position: absolute;
            left:0;
            right:0;
            top:0;
            height:0;
          }
        }
      }
</style>
