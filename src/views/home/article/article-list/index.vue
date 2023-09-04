<template>
    <div class="art-list">
        <div class="art-title">
            <template v-for="(item, index) in articleList" :key="index">
                <seriesCard :trends="item" />
            </template>
        </div>
        <div class="title-search">
            <Search></Search>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search, seriesCard } from '@/views/home/components';
import { getArticle } from '@/apis';
import { ref } from 'vue';

const articleList = ref<any>([])
getArticle(3).then(res => {
    articleList.value = res.data.title
})

</script>

<style scoped>
.art-list {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>