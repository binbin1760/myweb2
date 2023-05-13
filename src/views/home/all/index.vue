<template>
    <div class="all">
        <div class="all-left">
            <Card :trends="tsteData"></Card>
        </div>
        <div class="all-right">
            <Search></Search>
            <Socialize></Socialize>
            <SiderNav></SiderNav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Card } from '@/components';
import { Socialize, Search, SiderNav } from '../components';
import { getAlldata } from '@/apis/all';

const tsteData = getAlldata()

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