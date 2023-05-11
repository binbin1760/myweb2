import { createRouter, createWebHashHistory } from 'vue-router'


const Home = () => import('@/views/home/index.vue')

const routes = [
  { path: "/home", name: "主页", component: Home, },
  { path: "/", redirect: '/home' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
