<template>
  <div class="content_header">
    <div class="big_title">{{ titleContent }}</div>
  </div>
</template>

<script>
export default {
  name: 'contentHeader',
  props: {
    titleContent: {
      type: String,
      default: "TITLE"
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .content_header{
        height: 80px;
        line-height: 80px;
        border-bottom:1px solid #d1d1d1;

        .big_title{
          display: inline-block;
          font-family:$content-font;
          font-size:$medium-font-size;
          padding: 0 $padding-medium;
          color:#000000;
          letter-spacing:0.6px;
          border-bottom:2px solid #3f3f3f;
          transform: translate(0, -1px);
        }
      }
</style>
