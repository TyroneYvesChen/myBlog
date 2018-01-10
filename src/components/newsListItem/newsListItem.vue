<template>
  <div class="item clearfix">
    <div class="img float_left">
      <img :src="imgSrc.pic1" alt="">
    </div>
    <!-- item右侧内容 -->
    <div class="item_text float_left">
      <div class="item_text_title">萌汤圆最最帅！！！</div>
      <div class="item_text_desc">
        <div class="text_wrap">
        萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅！！！！！！
        萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅萌汤最帅！！！！！！
      
        </div>
      </div>
      <div class="item_text_sign clearfix">
        <div class="sign_time float_left">2017-10-20</div>
        <div class="sign_tags float_right">
          <div class="tag">帅！</div>
          <div class="tag">萌！</div>
          <div class="tag">~W~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'newsListItem',
  components: {
    
  },
  data () {
    return {
      imgSrc: {
        pic1: require('./img/pic1.png')
      },
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .item{
        // border: 1px solid #ccc;
        padding: $padding $padding-large $padding $padding;
        margin-bottom: 35px;
        transition: all 0.3s;
        cursor: pointer;

        &:hover{
          box-shadow:0 0 24px 0 rgba(0,0,0,0.22);
          transform: translateY(-3px);
        }
        
        .img{
          width: 30%;
          height: 150px;
          border: 1px solid #ccc;

          img{
            width: 100%;
            height: 100%;
          }
        }
        
        .item_text{
          width: 70%;
          padding-left: 5%;

          > div{
            text-align: left;
          }

          .item_text_title{
            font-family:$font-base;
            font-size:$item_text_title;
            color:$black-base;
            padding: 0 0 $padding-medium 0;
          }

          .item_text_desc{
            font-family:$content-font;
            font-size:16px;
            color:$content-font-color;
            letter-spacing: 1px;
            text-align:left;
            padding-bottom: $padding-medium;
            border-bottom:1px dashed $gray-base;

            .text_wrap{
              @include multiLine(4);
            }
          }

          .item_text_sign{
            padding: 5px 0 0 0;
            font-family:$font-base;
            font-size:$little-font-size;
            color:#c2c2c2;

            .sign_time{
              padding: 5px 0 0px 30px;
              background: url('./img/time.png') no-repeat left center;
            }

            .sign_tags{
              padding: 5px 0 0px 30px;
              background: url('./img/tags.png') no-repeat left center;

              .tag{
                display: inline-block;
                padding: 0 5px;
              }
            }
          }
        }
      }
</style>
