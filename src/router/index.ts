import { createRouter, createWebHashHistory } from 'vue-router'

// 路由懒加载
const Home = () => import('@/views/home/index.vue')
const Dashboard = () => ('@/views/dashboard/index.vue')
const ReadArticle = () => ('@/views/readarticle/index.vue')
const routes = [
  { path: "/home", name: "主页", component: Home, },
  { path: "/ReadArticle", name: "文章浏览", component: ReadArticle, },
  { path: "/", redirect: '/home' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
