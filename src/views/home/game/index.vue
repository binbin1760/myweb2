<template>
    <div class="game-daily">
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
import { Search } from '../components';
import { getArticle } from '@/apis'
import { ref } from 'vue';

const articleList = ref<any>([])
getArticle(2).then(res => {
    articleList.value = res.data.title
})
</script>

<style scoped>
.game-daily {
    display: flex;
    gap: 20px;
    justify-content: center;
}
</style>