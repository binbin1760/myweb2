<template>
  <LayOut>
    <template v-slot:header>
      <Header />
    </template>
    <div class="main">
      <Menu :menu="menu"></Menu>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </LayOut>
</template>

<script setup lang="ts">
import { LayOut, Menu, Header } from '@/components'

//测试数据
const menu = [
  { key: "主页", routerUrl: "/home", },
  { key: "前端", routerUrl: "xxxx", },
  { key: "游戏", routerUrl: "xxxx", },
  { key: "工具库", routerUrl: "xxxx", },
  { key: "知识库", routerUrl: "xxxx", },
  { key: "时间轴", routerUrl: "xxxx", },
]

</script>

<style scoped></style>
