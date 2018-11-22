import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import index from '@/pages/indexPage/index'       //主页
// import layout from '@/pages/layout/layout'        //布局页面
const index = () => import('@/pages/indexPage/index')  //主页
const layout = () => import('@/pages/layout/layout')  //布局页面


const news = () => import('@/pages/newsList/newsList')  //news页面list部分
const newsInnerPage = () => import('@/pages/newsInnerPage/newsInnerPage')  //newsInnerPage news页面内页
const timeLinePage = () => import('@/pages/timeLinePage/timeLinePage')  //timeLinePage 时间轴
// import news from '@/pages/newsList/newsList'      //news页面list部分
// import newsInnerPage from '@/pages/newsInnerPage/newsInnerPage'      //newsInnerPage news页面内页
// import timeLinePage from '@/pages/timeLinePage/timeLinePage'      //timeLinePage 时间轴

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
        { path: '/news', component: news},
        { path: '/newsInnerPage/:postId', component: newsInnerPage},
        { path: '/timeLinePage', component: timeLinePage}
      ]
    },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: news
    // },
    {
      path: '/wocao',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '*',
    //   redirect: {
    //     name: 'HelloWorld'
    //   }
    // }
  ]
})
