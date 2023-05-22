<template>
    <el-row class="tac">
        <SideMenu></SideMenu>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </el-row>
</template>

<script setup lang="ts">
import { SideMenu } from './components'
</script>

<style scoped>
.tac {
    height: 100vh;
    background-color: #eee;
}
</style>