<template>
    <div class="job-daily">
        <div class="left">
            <template v-for="(item, index) in articleList" :key="index">
                <Card :trends="item" />
            </template>
        </div>
        <div class="right">
            <Search />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search, SiderNav } from '../components';
import { getArticle } from '@/apis';

const articleList = ref<any>([])
getArticle(1).then(res => {
    articleList.value = res.data.title
})
</script>

<style scoped>
.job-daily {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>