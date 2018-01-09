<template>
  <div class="news_nav_collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(item, index) in collapseData"
        :title="item.skillName" :name="index" :key="index">
          <div class="point_item" 
            v-for="point in item.include" :key="point">
              {{ point }} 
          </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Vue from 'vue'
import { Collapse } from 'element-ui';
import { CollapseItem } from 'element-ui';

Vue.use(Collapse)
Vue.use(CollapseItem)

export default {
  name: 'newsNavCollapse',
  data () {
    return {
      activeName: '1',    //被选中的项
      tags:["html5", "css3","javascript" , "jquery", "vue", "node"],
      collapseData: [
        {
          skillName: "Html5/Css3",
          include: []
        },
        {
          skillName: "Javascript",
          include: ["Prototype", "原型", "闭包", "作用域"]
        },
        {
          skillName: "Jquery",
          include: []
        },
        {
          skillName: "Vue",
          include: ["Vuex", "Vue-Router"]
        },
        {
          skillName: "Node",
          include: ["express", "代理", "爬虫"]
        }
      ]
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
      .news_nav_collapse{
        text-align: left;

        .point_item{
          font-family:$font-point-item;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
          cursor: pointer;

          &:hover{
            background:$bg-point-item;
          }
        }
      }
</style>
