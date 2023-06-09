<template>
    <div class="workbenches">
        <ChatGpt></ChatGpt>
        <BaiduTranslate></BaiduTranslate>
    </div>
</template>

<script setup lang="ts">
import { BaiduTranslate, ChatGpt } from './components'
</script>

<style scoped>
.workbenches {
    display: flex;
    justify-content: space-around;
    height: 100vh;
    background-color: #fff;
}
</style>