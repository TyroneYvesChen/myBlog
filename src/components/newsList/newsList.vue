<template>
  <div class="news_list">
    <content-header></content-header>
    <div class="content_body clearfix">
      <!-- 左侧列表 -->
      <div class="content_overview float_left">

        <div class="item clearfix">
          <div class="img float_left">
            <img :src="imgSrc.pic1" alt="">
          </div>
          <!-- item右侧内容 -->
          <div class="item_text float_left">
            <div class="item_text_title">萌汤圆最最帅！！！</div>
            <div class="item_text_desc">
              萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！
              萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！
              萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！萌汤圆最最帅！！！
            </div>
            <div class="item_text_sign">
              <div class="sign_time"></div>
              <div class="sign_tags"></div>
            </div>
          </div>
        </div>

      </div>

      <!-- 右侧导航 -->
      <div class="content_nav float_left"></div>
    </div>
  </div>
</template>

<script>
import contentHeader from '@/components/contentHeader/contentHeader'

export default {
  name: 'newsList',
  components: {
    contentHeader
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
      .news_list{
        background-color: $white-base;
        border-radius: 12px 12px 0 0;
        box-shadow:0 4px 8px 1px rgba(158, 158, 158, 0.5);

        .content_body{
          width: 100%;
          padding: 60px 30px;
          
          .content_overview{
            width: 70%;

            .item{
              border: 1px solid #ccc;
              padding: $padding $padding $padding-large;

              .img{
                width: 30%;
                padding-top: $padding;

                img{
                  width: 100%;
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
                  @include multiLine(3);
                }

                .item_text_sign{

                  .sign_time{

                  }

                  .sign_tags{

                  }
                }
              }
            }

          }

          .content_nav{
            width: 30%;


          }
        }
      }
</style>
