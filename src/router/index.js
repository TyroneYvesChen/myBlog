import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/indexPage/index'       //主页
import layout from '@/pages/layout/layout'        //布局页面
import news from '@/pages/newsList/newsList'      //news页面list部分

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children:[
        { path: '/news', component: news}
    ]
    },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: news
    // },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: {
        name: 'HelloWorld'
      }
    }
  ]
})
