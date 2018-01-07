<template>
  <div class="tags_wrap">
    Tag:
      <div class="tag" v-for="(tag, index) in tags" 
      @click="openMes"
      :key="index">{{ tag }}</div>
  </div>
</template>

<script>
import { Message } from 'element-ui';

export default {
  name: 'tags',
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
      .tags_wrap{
        font-family:$font-base;
        font-size:$tag-font-size;
        font-weight: bold;
        color:#ffffff;
        letter-spacing:0;
        text-align: left;

        .tag{
          display: inline-block;
          font-weight: normal;
          padding: $padding;
          cursor: pointer;
        }
      }
</style>
