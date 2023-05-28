<template>
    <div class="writetrends">
        <div class="write">
            <!-- 富文本编辑器 type=true 表示动态编辑器  false表示文章编辑器 -->
            <Quill :type="true" />
        </div>
        <div class="list">
            <div class="list-title">动态</div>
            <div class="list-content">动态浏览</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Quill } from '@/components';

</script>

<style scoped>
.writetrends {
    width: 70%;
    margin-left: 5px;
}

.writetrends .write {
    height: auto;
    background-color: #fff;
}

.writetrends .write::-webkit-scrollbar {
    width: 0;
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