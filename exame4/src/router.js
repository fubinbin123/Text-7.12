import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=>import("./views/Home.vue")
    },{
      path:"/mine",
      name:"mine",
      component:()=>import("./views/mine.vue")
    },
    {
      path:"/",
      redirect:'/home'
    }
  ]
})
