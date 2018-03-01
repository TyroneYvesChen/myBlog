<template>
  <div class="time_line_item clearfix">
    <div class="cntl-content">
        <h4>Title 1</h4>
        <p>Nullam congue ex diam, id tincidunt augue pellentesque ac. Phasellus ornare nulla tellus, suscipit finibus urna tincidunt non. Nunc fringilla consequat massa.</p>
      </div>
      <div class="cntl-icon cntl-center">'00</div>
  </div>
</template>

<script>
import { Message } from 'element-ui';

export default {
  name: 'timeLineItem',
  data () {
    return {
      
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
      .time_line_item{
        position: relative;
        width:100%;
        min-height: 200px;
        margin-bottom: 50px;

        .cntl-icon {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          background-color: #00313C;
          border: solid 3px #009ABB;
          box-shadow: 0px 0px 19px -9px #000;
          position: absolute;
          top: 0;
          text-align: center;
          line-height: 80px;
          font-size: 40px;
          color: #fff;

          &.cntl-center {
              left:0;
              right:0;
              margin-left:auto;
              margin-right:auto;
          }
        }

        .cntl-content {
          width: 40%;
          padding: 2%;
          background-color: rgba(238, 238, 238, 0.25);
          border-radius: 8px;
          border-bottom: solid 3px #009ABB;
          float:left;
          // opacity:0;
          position:relative;
          // margin-left:-40%;

          h4 {
            font-size:20px;
            font-weight: normal;
            margin-bottom: 10px;
          }
        }

        &:nth-child(2n+2) .cntl-content {
          float:right;
          // margin-right:-40%;
        }

        .cntl-image {
          opacity:0;
          width: 40%;
          padding: 2%;

          img {
            width:100%;
          }
        }

        &:nth-child(2n+1) .cntl-image {
          float:right;
        }

      }
</style>
