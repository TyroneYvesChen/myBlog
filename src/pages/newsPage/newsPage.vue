<template>
  <div class="news_page">
    <!-- 主页右侧导航栏折叠按钮 -->
    <nav-trigger></nav-trigger>

    <header-common></header-common>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
import navTrigger from '@/components/navTrigger/navTrigger'
import headerCommon from '@/components/headerCommon/headerCommon'

export default {
  name: 'news_page',
  components: {
    navTrigger,
    headerCommon
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
      height: 800px;
    }
</style>
