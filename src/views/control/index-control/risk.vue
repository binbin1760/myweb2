<template>
    <div class="risk">
        <div class="risk-title">任务中心</div>
        <div class="risk-list">
            任务列表
            <div class="test">1</div>
            <div class="test">1</div>
            <div class="test">1</div>
            <div class="test">1</div>
            <div class="test">1</div>
            <div class="test">1</div>
            <div class="test">1</div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.risk {
    height: 600px;
    width: 30%;
    background-color: white;
}

.risk .risk-title {
    padding: 5px;
    border-bottom: 1px solid #ccc;
}

.risk .risk-list {
    height: inherit;
    overflow-y: auto;
    background-color: aqua;
}

.risk-list::-webkit-scrollbar {
    width: 0;
}

.test {
    height: 200px;
}
</style>