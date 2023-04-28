<template>
    <div class="sidebar-item">
        <img class="iconfont" :src="siderBar.url" alt="">
        <div class="sidebar-item-title animate__animated animate__fadeIn">{{ siderBar.key }}</div>
    </div>
</template>

<script lang="ts">
export default {
    name:"siderbar",
    inheritAttrs:false,
}
</script>

<script setup lang="ts">
//  侧栏菜单--数据结构：[{key:dashborad ,value:url}]
type sidebar = {
    [key: string]: string
}
defineProps<{
    siderBar: sidebar
}>()
// 页面跳转
function toSiderBarPage() {

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

.sidebar-item .iconfont {
    width: 40px;
    height: 40px;
}

.sidebar-item .iconfont:hover+.sidebar-item-title {
    display: block;
}

.sidebar-item-title {
    position: absolute;
    width: 200px;
    height: 40px;
    background: rgb(0, 0, 0);
    top: 0;
    left: 50px;
    color: white;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 5px;
    display: none;
}
</style>
