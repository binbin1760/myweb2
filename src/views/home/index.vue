<template>
  <div class="home">
    <Menu :menu="menu"></Menu>
    <div class="content">
      <div class="home-left">
      <Card :trends="tsteData"></Card>
    </div>
    <div class="home-right">
      <Search></Search>
      <Socialize></Socialize>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { Card ,Menu} from '@/components';
import { Search ,Socialize} from './components';
import imgCard from "@/assets/Avator-多老A梦.png"

const tsteData={
    title: "需要加点动画",
    imgurl: imgCard,
    time:'2023-12-11 12:52:00',
    intro: '我还不知道怎么去弄iconfont的svg。。。。。',
}

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

<style scoped>
.home .content{
  display: flex;
  justify-content: center;
}
.home .home-left {
  margin-right: 20px;
}
</style>
