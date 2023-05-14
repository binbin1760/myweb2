import { createRouter, createWebHashHistory } from 'vue-router'

// 前台
const Home = () => import('@/views/home/index.vue')
const All = () => import('@/views/home/all/index.vue')

// article page 
const Article = () => import('@/views/home/article/index.vue')
const ArticleList = () => import('@/views/home/article/article-list/index.vue')

const Game = () => import("@/views/home/game/index.vue")
const Job = () => import('@/views/home/job/index.vue')
const konwledge = () => import('@/views/home/knowledge/index.vue')
const TimeAxis = () => import('@/views/home/time-axis/index.vue')

const ReadContent = () => import("@/views/home/content/index.vue")

const routes = [
  // 前台
  {
    path: "/home", name: "主页", component: Home, children: [
      { path: '/home/all', name: "主页", component: All },
      {
        path: '/home/article', name: "胡思乱写", component: Article, children: [
          { path: "/home/article/list", name: "文章列表", component: ArticleList },
        ]
      },
      { path: '/home/Game', name: "游戏", component: Game },
      { path: '/home/Job', name: "工作", component: Job },
      { path: '/home/konwledge', name: "知识库", component: konwledge },
      { path: '/home/TimeAxis', name: "时间轴", component: TimeAxis },
      { path: '/home/content', name: "详情", component: ReadContent },
    ]
  },
  { path: "/", redirect: '/home/all' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
