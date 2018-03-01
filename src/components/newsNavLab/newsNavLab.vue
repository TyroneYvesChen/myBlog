<template>
  <div class="news_nav_lab">
    <a href="javascript:;" class="link_item" 
      v-for="(item, index) in itemData" :key="index">
      <div class="l_title">{{ item.title }}</div>
      <div class="l_img">
        <img :src="imgSrc['lab' + (index + 1)]" alt="">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'newsNavLab',
  data () {
    return {
      imgSrc: {
        lab1: require('./img/lab1.png'),
        lab2: require('./img/lab2.png'),
        lab3: require('./img/lab3.png')
      },
      itemData: [
        {
          title: '萌汤圆的实验室1'
        },
        {
          title: '萌汤圆的实验室2'
        },
        {
          title: '萌汤圆的实验室3'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
      .news_nav_lab{

        .link_item{
          display: inline-block;
          width: 80%;
          padding: 5px $padding $padding $padding;
          margin-bottom: 15px;
          transition: all 0.3s;
          cursor: pointer;

          &:hover{
            box-shadow:0 0 24px 0 rgba(0,0,0,0.22);
            transform: translateY(-3px);
          }

          .l_title{
            font-family:$font-base;            
            height: 30px;
            line-height: 30px;
            text-align: left;
            color:#434343;
          }

          .l_img{

            img{
              width: 100%;
            }
          }
        }
      }
</style>
