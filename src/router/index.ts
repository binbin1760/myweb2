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
const Write = () => import('@/views/control/write/index.vue')
const Article = () => import('@/views/control/article/index.vue')


const BehaviorAnalysis = () => import('@/views/control/behavior-analysis/index.vue')
const Translate = () => import('@/views/control/behavior-analysis/Translate.vue')
const Gpt = () => import('@/views/control/behavior-analysis/Gpt.vue')

// 设置
const Set = () => import('@/views/control/set/index.vue')
const Personal = () => import('@/views/control/set/userInfo.vue')
const System = () => import('@/views/control/set/system.vue')
const Career = () => import('@/views/control/set/career.vue')
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
    path: '/control',
    name: "控制台",
    component: Control,
    children: [
      {
        path: '/control/index', name: "主控台", component: IndexControl, meta: {
          icon: "zhuye", role: ['admin']
        }
      },
      {
        path: '/control/workbenches', name: "工作台", meta: {
          icon: 'zhukongtai ', role: ["admin", "friends"]
        }, component: WrokBenches
      },
      {
        path: '/control/write', name: "文章编写", meta: {
          icon: 'bianxie ', role: ["admin",]
        }, component: Write
      },
      {
        path: '/control/article', name: "文章管理", meta: {
          icon: 'bianxie ', role: ["admin"]
        }, component: Article
      },
      {
        path: '/control/behavior', name: "行为分析", meta: {
          icon: 'tongji ', role: ["admin", "friends"]
        }, component: BehaviorAnalysis,
        children: [
          { path: "/control/behavior/translate", name: "百度翻译", component: Translate },
          { path: "/control/behavior/gpt", name: "ChatGpt", component: Gpt }
        ]
      },
      {
        path: '/control/set', name: "设置", meta: {
          icon: 'a-shezhi ', role: ["admin", "friends"]
        }, component: Set,
        children: [
          { path: "/control/set/userInfo", name: "个人设置", component: Personal },
          { path: "/control/set/Career", name: "生涯设置", component: Career },
          { path: "/control/set/system", name: "系统设置", component: System },
        ]
      },
    ],
    // beforeEnter: (to: unknown, from: unknown, next: unknown) => {

    // }

  },
  { path: "/", redirect: '/home/all' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
