<template>
    <div class="knowledge">
        <div class="letf">
            <Card :trends="test"></Card>
        </div>
        <div class="right">
            <Search />
            <SiderNav title="书籍名称" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAlldata } from '@/apis/all';
import { Search, SiderNav } from '../components'
const test = getAlldata("article")
</script>

<style scoped>
.knowledge {
    display: flex;
    gap: 20px;
}
</style>