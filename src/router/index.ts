import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Home =()=>import('@/views/home/index.vue')
const routes=[
  {path:"/home",name:"主页",componet:Home,redirect: '/'},
]
