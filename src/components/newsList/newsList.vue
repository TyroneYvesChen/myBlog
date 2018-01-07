<template>
  <div class="news_list">
    <content-header></content-header>
    <div class="content_body">
      <div class="content_overview"></div>
      <div class="content_nav"></div>
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
      tags:["html5", "css3","javascript" , "jquery", "vue", "node"]
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
      }
</style>
