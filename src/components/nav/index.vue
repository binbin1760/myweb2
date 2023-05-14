<template>
    <div class="nav">
        <div class="title">{{ title }}</div>
        <div class="nav-box">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>() 
</script>

<style scoped>
.nav {
    width: 22rem;
    background: #fff;
    padding: 20px;
}

.nav .title {
    padding: 0 0 5px 0;
    border-bottom: 1px solid #e67e22;
}
</style>