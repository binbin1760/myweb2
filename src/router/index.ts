import { createRouter, createWebHashHistory } from 'vue-router'
import { isLogin } from "@/apis"
import { ElMessage } from 'element-plus'
// 前台
const Home = () => import('@/views/home/index.vue')
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
    path: "/home", name: "home", component: Home, children: [
      { path: "/home/article/list", name: "文章列表", component: ArticleList },
      { path: '/home/Game', name: "Game", component: Game },
      { path: '/home/Job', name: "JOB", component: Job },
      { path: '/home/konwledge', name: "konwledge", component: konwledge },
      { path: '/home/TimeAxis', name: "TimeAxis", component: TimeAxis },
      { path: '/home/content', name: "content", component: ReadContent },
    ]
  },
  // 后台
  {
    path: '/control',
    name: "控制台",
    component: Control,
    children: [
      {
        path: '/control/index', name: "control-control", component: IndexControl, meta: {
          icon: "zhuye", role: ['admin'], name: "主控台"
        }
      },
      {
        path: '/control/workbenches', name: "control-workbenches", meta: {
          icon: 'zhukongtai ', role: ["admin", "friends"], name: "工作台"
        }, component: WrokBenches
      },
      {
        path: '/control/write', name: "control-write", meta: {
          icon: 'bianxie ', role: ["admin",], name: "文章编写"
        }, component: Write
      },
      {
        path: '/control/article', name: "control-article", meta: {
          icon: 'bianxie ', role: ["admin"], name: "文章管理"
        }, component: Article
      },
      {
        path: '/control/behavior', name: "control-behavior", meta: {
          icon: 'tongji ', role: ["admin", "friends"], name: "行为分析"
        }, component: BehaviorAnalysis,
        children: [
          { path: "/control/behavior/translate", name: "translate", component: Translate, meta: { name: "百度翻译" } },
          { path: "/control/behavior/gpt", name: "ChatGpt", component: Gpt, meta: { name: "ChatGpt" } }
        ]
      },
      {
        path: '/control/set', name: "set", meta: {
          icon: 'a-shezhi ', role: ["admin", "friends"], name: "设置",
        }, component: Set,
        children: [
          { path: "/control/set/userInfo", name: "userInfo", component: Personal, meta: { name: "个人设置" } },
          { path: "/control/set/Career", name: "Career", component: Career, meta: { name: "生涯设置" } },
          { path: "/control/set/system", name: "system", component: System, meta: { name: "系统设置" } },
        ]
      },
    ],
    beforeEnter: (to: unknown, from: unknown, next: any) => {
      isLogin().then(res => {
        if (res.data) {
          next()
        } else {
          ElMessage.error('请登陆后进入后台')
          next('/')
        }
      })
    }
  },
  { path: "/", redirect: '/home/Job' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
