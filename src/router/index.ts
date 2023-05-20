import { createRouter, createWebHashHistory } from 'vue-router'

// 前台
const Home = () => import('@/views/home/index.vue')
const All = () => import('@/views/home/all/index.vue')
const ArticleList = () => import('@/views/home/article/article-list/index.vue')
const Game = () => import("@/views/home/game/index.vue")
const Job = () => import('@/views/home/job/index.vue')
const konwledge = () => import('@/views/home/knowledge/index.vue')
const TimeAxis = () => import('@/views/home/time-axis/index.vue')
const ReadContent = () => import("@/views/home/content/index.vue")
// 后台
const Control = () => import('@/views/control/index.vue')
const IndexControl = () => import('@/views/control/index-control/index.vue')
const WrokBenches = () => import('@/views/control/work-benches/index.vue')
const routes = [
  // 前台
  {
    path: "/home", name: "主页", component: Home, children: [
      { path: '/home/all', name: "主页", component: All },
      { path: "/home/article/list", name: "文章列表", component: ArticleList },
      { path: '/home/Game', name: "游戏", component: Game },
      { path: '/home/Job', name: "工作", component: Job },
      { path: '/home/konwledge', name: "知识库", component: konwledge },
      { path: '/home/TimeAxis', name: "时间轴", component: TimeAxis },
      { path: '/home/content', name: "详情", component: ReadContent },
    ]
  },
  // 后台
  {
    path: '/control', name: "控制台", component: Control, children: [
      { path: '/control/index', name: "主控台", component: IndexControl },
      { path: '/control/workbenches', name: "工作台", component: WrokBenches },
    ]
  },
  { path: "/", redirect: '/control/index' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
