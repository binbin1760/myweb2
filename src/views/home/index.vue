<template>
  <div class="home">
    <div class="home-left">
      <Card :trends="tsteData"></Card>
    </div>
    <div class="home-right">
      <Search></Search>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/components';
import { Search } from './components';
import imgCard from "@/assets/Avator-多老A梦.png"
const tsteData={
    title: "需要加点动画",
    imgurl: imgCard,
    time:'2023-12-11 12:52:00',
    intro: '我还不知道怎么去弄iconfont的svg。。。。。',
}
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
}

.home .home-left {
  margin-right: 20px;
}
</style>
