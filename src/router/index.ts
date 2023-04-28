import { createRouter, createWebHashHistory } from 'vue-router'

// 路由懒加载
const Home =()=>import('@/views/home/index.vue')
const Dashboard=()=>('@/views/home/dashboard/index.vue')
const routes=[
  {path:"/home",name:"主页",component:Home,children:[]},
  {path:"/home",redirect: '/'}
]
const router=createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
