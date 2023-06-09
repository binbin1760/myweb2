<template>
    <div class="translate">
        <div class="translate-title">百度翻译</div>
        <div class="translate-worlds">
            <el-input v-model="translateContent" :rows="10" type="textarea" :placeholder="placeholder" clearable />
        </div>
        <div class="after-translate">
            <div class="title">翻译结果</div>
            <div class="content"></div>
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

const testData = ["测试数据", "测试数据", "测试数据", "测试数据", "测试数据", "测试数据", "测试数据"]
</script>

<style scoped>
.translate {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;
}

.translate .translate-title {
    padding: 8px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #202121;
}

/* 翻译内容 */
.translate .translate-worlds {
    border-radius: 8px;
}

.translate .translate-worlds:deep() .el-textarea__inner {
    color: #000;
    font-size: 18px;
}

.translate .translate-worlds:deep() .el-textarea__inner::-webkit-scrollbar {
    width: 0;
}

.translate .translate-worlds:deep() .el-textarea__inner::placeholder {
    font-size: 18px;
    color: #000;
}

/* 翻译结果 */
.translate .after-translate {
    border-radius: 8px;
    height: 20rem;
    overflow-y: auto;
    overflow-wrap: break-word;
    background-color: #f5f7f9;
}

.translate .after-translate .content {
    padding: 8px;
}

/* 翻译历史 */
.translate .translate-history {
    background-color: #f5f7f9;
    height: 300px;
    overflow-y: auto;
}

.translate-history::-webkit-scrollbar {
    width: 0;
}

.title {
    font-size: 18px;
    font-weight: 600;
    padding: 8px;
    border-bottom: 1px solid #202121;
}

.translate .translate-history .content {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 8px;
}

.translate .translate-history .content .tanslate-item {
    padding: 4px;
    border-radius: 4px;
    background-color: #66b1ff;
}
</style>