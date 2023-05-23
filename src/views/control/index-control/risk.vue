<template>
    <div class="risk">
        <div class="risk-title">任务中心</div>
        <div class="risk-list">
            任务列表
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.risk {
    background-color: white;
    flex-grow: 1;
}

.risk .risk-title {
    border-bottom: 1px solid #ccc;
}

.risk .risk-list {
    overflow-y: auto;
}

.risk-list::-webkit-scrollbar {
    width: 0;
}
</style>