<template>
    <div class="writetrends">
        <div class="write">
            富文本编辑器---动态编写
        </div>
        <div class="list">
            <div class="list-title">动态</div>
            <div class="list-content">动态浏览</div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.writetrends {
    margin-left: 5px;
    flex-grow: 1;
}

.writetrends .write {
    padding: 10px;
    height: 150px;
    background-color: #fff;
}

.writetrends .list {
    margin-top: 5px;
    background-color: #fff;
}

.writetrends .list .list-title {
    border-bottom: 1px solid #ccc;
}

.writetrends .list .list-content {
    height: 600px;
    overflow-y: auto;
}

.list-content::-webkit-scrollbar {
    width: 0;
}
</style>