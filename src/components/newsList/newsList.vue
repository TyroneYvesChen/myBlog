<template>
  <div class="news_list">
    <content-header></content-header>
    <div class="content_body clearfix">
      <!-- 左侧列表 -->
      <div class="content_overview float_left">

        <!-- 左侧列表内item -->
        <news-list-item v-for="(item, index) in itemArr" :key="index">{{item}}</news-list-item>



      </div>

      <!-- 右侧导航 -->
      <div class="content_nav float_left"></div>
    </div>
  </div>
</template>

<script>
import contentHeader from '@/components/contentHeader/contentHeader'
import newsListItem from '@/components/newsListItem/newsListItem'

export default {
  name: 'newsList',
  components: {
    contentHeader,
    newsListItem
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
        background-color: $white-base;
        border-radius: 12px 12px 0 0;
        box-shadow:0 4px 8px 1px rgba(158, 158, 158, 0.5);

        .content_body{
          width: 100%;
          padding: 60px 30px;
          
          .content_overview{
            width: 70%;
          }

          .content_nav{
            width: 30%;


          }
        }
      }
</style>
