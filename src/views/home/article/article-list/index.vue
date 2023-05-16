<template>
    <div class="art-list">
        <div class="art-title">
            <Card :trends="tsteData"></Card>
        </div>
        <div class="title-search">
            <Search></Search>
            <SiderNav title="技术分类"></SiderNav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search, SiderNav } from '@/views/home/components';
import { getAlldata } from '@/apis/all';

const tsteData = getAlldata('article')

</script>

<style scoped>
.art-list {
    display: flex;
    gap: 20px;
}
</style>