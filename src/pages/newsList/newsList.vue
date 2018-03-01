<template>
  <div class="news_list">
    <!-- NEWS页面 -->
    <div class="content_body clearfix">

      <!-- 左侧列表 -->
      <div class="content_overview float_left">
        <!-- 左侧列表内item -->
        <news-list-item v-for="(item, index) in itemArr"
          :postId="index" 
          :key="index">
            {{item}}
        </news-list-item>
      </div>

      <!-- 右侧导航 -->
      <div class="content_nav float_left">
        <!-- 导航上部手风琴 -->
        <div class="collapse_wrap">
          <div class="content_nav_title">Categories</div>
          <news-nav-collapse></news-nav-collapse>
        </div>
        <!-- 导航下部实验室 -->
        <div class="lab_wrap">
          <div class="content_nav_title">Link</div>

          <news-nav-lab></news-nav-lab>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
import newsListItem from '@/components/newsListItem/newsListItem'
import newsNavCollapse from '@/components/newsNavCollapse/newsNavCollapse'
import newsNavLab from '@/components/newsNavLab/newsNavLab'

export default {
  name: 'newsList',
  components: {
    newsListItem,
    newsNavCollapse,
    newsNavLab
  },
  data () {
    return {
      imgSrc: {
        pic1: require('./img/pic1.png')
      },
      itemArr: [,,,,,,,,]
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
        

        .content_body{
          width: 100%;
          padding: 60px 30px;
          
          .content_overview{
            width: 70%;
            padding-right: 5%;
          }

          .content_nav{
            width: 30%;
            // border: 1px #ccc solid;

            .content_nav_title{
              font-family:$font-base;
              font-size:$content-nav-title;
              color:$content-font-color;
              padding: $padding 0 $padding-large;
              text-align:left;
            }

            .collapse_wrap{
              padding-bottom: 30px;
            }

            .lab_wrap{
            }
          }
        }
      }
</style>
