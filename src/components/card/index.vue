<template>
    <n-card 
    :title="props.title" 
    embedded 
    :header-style="Headstyle">
        <div v-for="(web, index ) in props.website" :key="index">
            <a :href="web">{{index}}</a>
        </div>
    </n-card>
</template>

<script lang="ts">
export default {
    name: 'Card',
    inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { NCard } from 'naive-ui'
const props = defineProps<{
    title: string,
    website: object,
}>()
// 标题样式---为什么没法设置字体颜色（有些样式会不生失效）
const Headstyle =
    "padding:10px 24px 10px 24px; border-bottom: 1px solid #000; color:red;"
</script>

<style scoped>
.n-card {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 200px;
    margin-top: 10px;
}
</style>