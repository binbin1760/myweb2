<template>
  <div class="home">
    <LayOut>
      <template v-slot:header>
        <Header />
        <Menu :menu="menu" />
      </template>
      <div class="content">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </LayOut>
  </div>
</template>

<script setup lang="ts">
import { LayOut } from '@/components'

// page
const menu = [
  { key: "全部", routerUrl: "/home/all", },
  { key: "游戏daily", routerUrl: "/home/game", },
  { key: "工作daily", routerUrl: "/home/job", },
  { key: "胡思乱想", routerUrl: "/home/article/list", },
  { key: "读书笔记", routerUrl: '/home/konwledge', },
  { key: "我搞过的事情", routerUrl: "/home/timeAxis", },
]
</script>

<style scoped>
.home .content {
  display: flex;
  justify-content: center;
}
</style>
