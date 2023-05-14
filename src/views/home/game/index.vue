<template>
    <div class="game-daily">
        <div class="left">
            <Card :trends="tsteData" />
        </div>
        <div class="right">
            <Search />
            <SiderNav />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Card } from '@/components';
import { Search, SiderNav } from '../components';
import { getAlldata } from '@/apis/all';

const tsteData = getAlldata()
</script>

<style scoped>
.game-daily {
    display: flex;
    gap: 20px;
}
</style>