<template>
  <LayOut>
    <div class="main">
      <div class="menu">
        <Menu v-for="(item, index) in siderBar" :key="index" :siderBar="item"></Menu>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </LayOut>
</template>

<script setup lang="ts">
import { LayOut,Menu} from '@/components'
// sidebar iconfont import
import home from "@/assets/iconfont/主页.png"
import editArticle from "@/assets/iconfont/编辑文章.png"
import articlelist from "@/assets/iconfont/文章.png"
import dashboard from "@/assets/iconfont/仪表盘.png"
//测试数据
const siderBar = [
  { key: "主页", routerUrl: "/home", url: home },
  { key: "仪表盘", routerUrl: "xxxx", url: dashboard },
  { key: "文章列表", routerUrl: "xxxx", url: articlelist },
  { key: "文章编辑", routerUrl: "xxxx", url: editArticle },
]

</script>

<style scoped>
.main {
  display: flex;
  width: 1200px;
  height: 80%;
}

.main .menu {
  background: rgb(36, 35, 35);
  width: 50px;
  margin-right: 10px;
  border-radius: 8px;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #fff;
}

.main .main-content {
  flex: 1;
}
</style>
