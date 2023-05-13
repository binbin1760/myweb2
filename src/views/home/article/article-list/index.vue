<template>
    <div class="art-list">
        <div class="art-title">
            <Card :trends="tsteData"></Card>
        </div>
        <div class="title-search">
            <Search></Search>
            <SiderNav></SiderNav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Card } from '@/components';
import { Search, SiderNav } from '@/views/home/components';
import { getArticleList } from '@/apis/article';

const tsteData = getArticleList()

</script>

<style scoped>
.art-list {
    display: flex;
    gap: 20px;
}
</style>