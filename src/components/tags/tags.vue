<template>
  <div class="tags_wrap">
    Tag:
      <div class="tag" v-for="(tag, index) in tags" :key="index">{{ tag }}</div>
  </div>
</template>

<script>
export default {
  name: 'tags',
  data () {
    return {
      tags:["html5", "css3","javascript" , "jquery", "vue", "node"]
    }
  },
  methods: {
    
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
