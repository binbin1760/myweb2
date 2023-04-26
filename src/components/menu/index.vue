<template>
    <div class="sidebar-item" @click="isShow">
        <img :src="siderBar.url" alt="">
        <div v-show="show" class="sidebar-item-title">{{ siderBar.key }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

//  侧栏菜单--数据结构：[{key:dashborad ,value:url}]
type sidebar = {
    [key: string]: string
}
defineProps<{
    siderBar: sidebar
}>()
// 菜单栏动画效果触发事件
let show = ref(false)
function isShow() {
    console.log("1");
    show.value = !show.value
}
</script>

<style scoped>
.sidebar-item {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background: rgb(95, 94, 94);
    line-height: 50px;
    margin-top: 20px;
    text-align: center;
}

.sidebar-item img {
    width: 40px;
    height: 40px;
}

.sidebar-item-title {
    position: absolute;
    width: 200px;
    height: 40px;
    background: rgb(95, 94, 94);
    top: 0;
    left: 50px;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 5px;
}
</style>