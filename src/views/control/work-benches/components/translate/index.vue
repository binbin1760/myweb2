<template>
    <div class="translate">
        <div class="translate-worlds">
            <div class="translate-title">百度翻译</div>
            <!-- <el-input v-model="translateContent" :rows="10" type="textarea" :placeholder="placeholder" clearable /> -->
        </div>
        <div class="after-translate">
            <div class="title">翻译结果</div>
            <div class="content">
            </div>
        </div>
        <div class="translate-history">
            <div class="title">翻译历史</div>
            <div class="content">
                <div class="tanslate-item" v-for="(item, index) in testData " :key="index">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const placeholder = ref<string>('请输入需要翻译的内容')
const translateContent = ref<string>('')

const testData = ["测试数据", "测试数据", "测试数据", "测试数据", "测试数据", "测试数据", "测试数据",]
</script>

<style scoped>
.translate {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}

.translate .translate-title {
    padding: 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    border-bottom: 1px solid #202121;
}

/* 翻译内容 */
.translate .translate-worlds {
    flex-grow: 1;
    border-radius: 0.5rem;
}

.translate .translate-worlds:deep() .el-textarea__inner {
    color: #000;
    font-size: 1.125rem;
}

.translate .translate-worlds:deep() .el-textarea__inner::-webkit-scrollbar {
    width: 0;
}

.translate .translate-worlds:deep() .el-textarea__inner::placeholder {
    font-size: 1.0125rem;
    color: #000;
}

/* 翻译结果 */
.translate .after-translate {
    flex-grow: 1;
    border-radius: 0.5rem;
    overflow-y: auto;
    background-color: #f5f7f9;
}

.translate .after-translate .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
}

/* 翻译历史 */
.translate .translate-history {
    flex-grow: 1;
    background-color: #f5f7f9;
}

.translate-history::-webkit-scrollbar {
    width: 0;
}

.title {
    font-size: 1.125rem;
    font-weight: 600;
    padding: 8px;
    border-bottom: 1px solid #202121;
}

.translate .translate-history .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    overflow-y: scroll;
}

.translate .translate-history .content::-webkit-scrollbar {
    width: 0;
}

.translate .translate-history .content .tanslate-item {
    padding: 4px;
    border-radius: 4px;
    background-color: #66b1ff;
}
</style>