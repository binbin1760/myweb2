<template>
  <LayOut>
    <template v-slot:header>
      <Header />
      <Menu :menu="menu" />
    </template>
    <div class="main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </LayOut>
</template>

<script setup lang="ts">
import { LayOut, Header, Menu } from '@/components'

// page
const menu = [
  { key: "主页", routerUrl: "/home/all", },
  { key: "游戏daily", routerUrl: "/home/game", },
  { key: "工作daily", routerUrl: "/home/job", },
  { key: "胡思乱想", routerUrl: "/home/article/list", },
  { key: "知识库", routerUrl: '/home/konwledge', },
  { key: "大事记", routerUrl: "/home/timeAxis", },
]
</script>

<style scoped></style>
