<template>
  <div class="layout_wrap">

    <header-common></header-common>

    <div class="content">
      <!-- tags标签栏 -->
      <tags></tags>
      <list-bg>
        
        <content-header titleContent="NEWS"></content-header>

        <transition 
          enter-active-class="animated fadeIn">
          <router-view/>
        </transition>
      </list-bg>
    </div>
  </div>
</template>

<script>
import headerCommon from '@/components/headerCommon/headerCommon'
import contentHeader from '@/components/contentHeader/contentHeader'
import listBg from '@/components/listBg/listBg'
import tags from '@/components/tags/tags'

export default {
  name: 'layout',
  components: {
    headerCommon,
    contentHeader,
    listBg,
    tags
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
    .layout_wrap{
      
      .content{
        position: relative;
        top: $news-content-top;
        width: $news-content-width;
        min-width: $min-width;
        margin: 0 auto;
      }
    }
</style>
