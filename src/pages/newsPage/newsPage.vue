<template>
  <div class="news_page">

    <header-common></header-common>

    <div class="content">
      <!-- tags标签栏 -->
      <tags></tags>

      <news-list></news-list>
      
    </div>
  </div>
</template>

<script>
import headerCommon from '@/components/headerCommon/headerCommon'
import tags from '@/components/tags/tags'
import newsList from '@/components/newsList/newsList'

export default {
  name: 'news_page',
  components: {
    headerCommon,
    tags,
    newsList
  },
  data: () => {
    return {
      imgSrc: {
        
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
    .news_page{
      
      .content{
        position: relative;
        top: $news-content-top;
        width: $news-content-width;
        min-width: $min-width;
        margin: 0 auto;
      }
    }
</style>
