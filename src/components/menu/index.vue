<template>
    <div class="menu">
        <!-- <div class="menu-item" v-for="(menuItem, index) in menu" :key="index">{{ menuItem.key }}</div> -->
        <router-link active-class="activeClass" class="menu-item" v-for="(menuItem, index) in menu" :key="index"
            :to="menuItem.routerUrl">
            {{ menuItem.key }}
        </router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: "siderbar",
    inheritAttrs: false,
}
</script>

<script setup lang="ts">
//  侧栏菜单--数据结构：[{key:dashborad ,value:url}]
defineProps<{
    menu: Array<Record<string, any>>
}>()
// 页面跳转
</script>

<style scoped>
.menu {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
}

.menu .menu-item {
    width: auto;
    padding: 21px 21px;
    white-space: nowrap;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    color: #000;
    text-decoration: none;
}

.activeClass {
    border-bottom: 1px solid red;
}
</style>
