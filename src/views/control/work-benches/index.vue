<template>
    <div class="workbenches">
        <BaiduTranslate></BaiduTranslate>
    </div>
</template>

<script setup lang="ts">
import { BaiduTranslate } from './components'
</script>

<style scoped>
.workbenches {
    display: flex;
    justify-content: space-around;
    height: 100vh;
    background-color: #fff;
}
</style>