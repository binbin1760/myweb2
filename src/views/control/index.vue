<template>
    <div class="tac">
        <SideMenu></SideMenu>
        <div class="content">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SideMenu } from './components'
</script>

<style scoped>
.tac {
    display: flex;
    height: 100vh;
    background-color: #f5f7f9;
}

.content {
    flex: 1;
    overflow-y: auto;
}

.content::-webkit-scrollbar {
    width: 0;
}
</style>