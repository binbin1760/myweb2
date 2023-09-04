<template>
    <div class="knowledge">
        <div class="letf">
            <template v-for="(item, index) in articleList" :key="index">
                <seriesCard :trends="item" />
            </template>
        </div>
        <div class="right">
            <Search />
        </div>
    </div>
</template>

<script setup lang="ts">

import { Search, seriesCard } from '../components'
import { getArticle } from '@/apis';
import { ref } from 'vue';

const articleList = ref<any>([])
getArticle(4).then(res => {
    articleList.value = res.data.title
})
</script>

<style scoped>
.knowledge {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>