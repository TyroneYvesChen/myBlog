<template>
  <div class="list_bg">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'listBg',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .list_bg{
        background-color: $white-base;
        border-radius: 12px 12px 0 0;
        box-shadow:0 4px 8px 1px rgba(158, 158, 158, 0.5);
      }
</style>
