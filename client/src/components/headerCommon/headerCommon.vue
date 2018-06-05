<template>
  <div class="headerCommon">
    <nav-trigger></nav-trigger>
    <img :src="imgSrc.headerBg" alt="">


    <div class="content">
      <div class="content_tittle">
        <div class="index_small_title"> &lt;/html&gt; </div>
        <div class="index_big_title">hello,TyroneYvesChen</div>
      </div>
      
      <!-- <div class="headerImg">
        <img :src="imgSrc.navHeaderImg" alt="">
      </div> -->
      <div class="catsPaw">
        <img :src="imgSrc.catsPaw" alt="">
        <img :src="imgSrc.catsPaw" alt="">
        <img :src="imgSrc.catsPaw" alt="">
        <img :src="imgSrc.catsPaw" alt="">
        <img :src="imgSrc.catsPaw" alt="">
        <img :src="imgSrc.catsPaw" alt="">
        <img :src="imgSrc.catsPaw" alt="">
        <img :src="imgSrc.catsPaw" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import navTrigger from '@/components/navTrigger/navTrigger'

export default {
  name: 'headerCommon',
  components: {
    navTrigger
  },
  data () {
    return {
      imgSrc: {
        headerBg: require('./img/headerBg.png'),
        navHeaderImg: require('./img/cute.jpg'),
        catsPaw: require('./img/catsPawWhite.png'),
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
        // background: url('./img/headerBg.png') no-repeat center center;
        // background-size: 100% 100%;
        // height: 500px;
        position: relative;

        img{
          width: 100%;
        }

        .content{
          @include center();

          .content_tittle{
            display: inline-block;
            text-align: center;

            .index_small_title{
              font-family:$font-base;
              font-size:$medium-font-size * 1.2;
              color:$header-common-tittle;
              letter-spacing:0.8px;
              text-align: left;
            }

            .index_big_title{
              font-family:$font-big-base;
              font-size:$large-font-size * 1.2;
              color:$header-common-tittle;
              font-weight: bold;
              padding: 30px 0 50px 0;
            }
          }
          

          .headerImg{
            text-align: center;

            img{
              width: $head-img-size;
              height: $head-img-size;
              margin: 0 auto;
              border-radius: 100%;
            }
          }

          .catsPaw{
            text-align: center;

            img{
              width: 5%;
              display: inline-block;
              padding: 5px;

              &:nth-child(2n - 1){
                transform : translate(0, 10px);
              }
            }
          }
      }

      }
</style>
