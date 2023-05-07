<template>
  <LayOut>
    <template v-slot:header>
      <Header />
    </template>
    <div class="main">
      <Menu :menu="menu"></Menu>
      <div class="main-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </LayOut>
</template>

<script setup lang="ts">
import { LayOut, Menu, Header } from '@/components'

//测试数据
const menu = [
  { key: "主页", routerUrl: "/home", },
  { key: "胡思乱想", routerUrl: "xxxx", },
  { key: "游戏daily", routerUrl: "xxxx", },
  { key: "工作daily", routerUrl: "xxxx", },
  { key: "知识库", routerUrl: "xxxx", },
  { key: "时间轴", routerUrl: "xxxx", },
]

</script>

<style scoped></style>
