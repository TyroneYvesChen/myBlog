<template>
  <div class="headerCommon">
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'headerCommon',
  components: {
    
  },
  data () {
    return {
      imgSrc: {
        headerBg: require('./img/headerBg.png')
      },
    }
  },
  computed: {
    ...mapGetters(["isCoverShow"])
  },
  methods: {
  },
  mounted (){
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .headerCommon{
        background: url('./img/headerBg.png') no-repeat center center;
        background-size: 100%;
        height: 500px;

        img{
          width: 100%;
        }

      }
</style>
