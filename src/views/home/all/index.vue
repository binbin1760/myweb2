<template>
    <div class="all">
        <div class="all-left">
            <Card :trends="tsteData"></Card>
        </div>
        <div class="all-right">
            <Search></Search>
            <Socialize></Socialize>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Card } from '@/components';
import imgCard from "@/assets/Avator-多老A梦.png"
import { Search, Socialize } from '../components';
const tsteData = {
    title: "需要加点动画",
    imgurl: imgCard,
    time: '2023-12-11 12:52:00',
    intro: '我还不知道怎么去弄iconfont的svg。。。。。',
}
</script>

<style scoped>
.all {
    display: flex;
    justify-content: center;
}

.all .all-left {
    margin-right: 20px;
}
</style>