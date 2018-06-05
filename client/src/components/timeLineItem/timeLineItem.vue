<template>
  <div class="time_line_item clearfix" ref="tlItem">
    <transition :enter-active-class="style">
      <div class="cntl-content"  v-show="isShow">
        <h4>Title 1</h4>
        <p @click="openMes">Nulla
          m congue ex diam, id tincidunt augue p
          ellentesque ac. Phasellus ornare nulla tell
          us, suscipit finibus urna tincidunt non. Nunc fringilla consequat massa.
          m congue ex diam, id tincidunt augue p
          ellentesque ac. Phasellus ornare nulla tell
          us, suscipit finibus urna tincidunt non. Nunc fringilla consequat massa.
          m congue ex diam, id tincidunt augue p
          ellentesque ac. Phasellus ornare nulla tell
          us, suscipit finibus urna tincidunt non. Nunc fringilla consequat massa.
          </p>
      </div>
    </transition>
    <div class="cntl-icon cntl-center">{{ index }}</div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import eventBus from '@/util/eventBus'

export default {
  name: 'timeLineItem',
  props: {
    index: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    /*判断飞入动画左右方向*/
    style (){
      return `animated ${this.index % 2 === 0 ? 'fadeInLeftBig' : 'fadeInRightBig'}`
    }
  },
  created (){
    eventBus.$on('scroll', () => {
      if (this.isShow) return
    
      let dom = this.$refs.tlItem,
      getBoundingClientRect = dom.getBoundingClientRect(),
      height = getBoundingClientRect.height,
      domTop = getBoundingClientRect.top + 200,
      windowHeight  = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      console.log(window.getComputedStyle(dom), "clientHeight")
      windowHeight > domTop && this.isCanShow(height)
    });
  },
  methods: {
    openMes: () => {
      let options = {
        message: '我是可爱的小tag~我有什么功能还不知道呢~',
        type: 'success'
      }
      Message(options)
    },
    isCanShow (h){
      this.isShow = true
      this.$emit('getBarHeight', h)
    }
  },
  mounted (){
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      $circleSize: 50px;

      .time_line_item{
        position: relative;
        width:100%;
        height: 200px;
        // padding-bottom: 50px;

        .cntl-icon {
          border-radius: 50%;
          width: $circleSize;
          height: $circleSize;
          background-color: #00313C;
          border: solid 3px #009ABB;
          box-shadow: 0px 0px 19px -9px rgb(31, 11, 11);
          position: absolute;
          top: 0;
          text-align: center;
          line-height: $circleSize - 4;
          font-size: $medium-font-size;
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
          position:relative;
          // opacity:0;
          // margin-left:-40%;
          cursor: pointer;
          transition: all 0.3s;
          
          &:hover{
            box-shadow:0 0 24px 0 rgba(0,0,0,0.22);
            transform: translateY(-3px);
          }

          h4 {
            font-size:$medium-font-size;
            font-weight: normal;
            margin-bottom: 10px;
          }

          p {
            font-size: 18px;
            @include multiLine(4);
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
