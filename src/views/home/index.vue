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

const menu = [
  { key: "技术踩坑", routerUrl: "/home/job", },
  { key: "游戏整活", routerUrl: "/home/game", },
  { key: "项目相关", routerUrl: "/home/article/list", },
  { key: "读书笔记", routerUrl: '/home/konwledge', },
  { key: "我搞过的事情", routerUrl: "/home/timeAxis", },
]
</script>

<style scoped></style>
