import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import './index.css'
import 'animate.css'
import './iconfont.css'

// 全局注册 提示框
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
const app = createApp(App)
app.use(router)
app.mount('#app')
