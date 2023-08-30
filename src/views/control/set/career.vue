<template>
    <div class="career">
        <div class="career-edit">
            <div class="career-edit-form">
                <span>事件：</span>
                <div><el-input v-model="content" placeholder="事件内容！"></el-input></div>
            </div>
            <div class="demo-date-picker">
                <div class="block">
                    <span class="demonstration"> 时间：</span>
                    <el-config-provider :locale="zhCn">
                        <el-date-picker v-model="time" type="date" placeholder="选择时间" size="default" format="YYYY-MM-DD"
                            value-format="YYYY-MM-DD" popper-class="date-pick-th" />
                    </el-config-provider>
                </div>
            </div>
            <div>
                <el-button type="primary" @click="addEvents(content, time)">确认添加</el-button>
            </div>
        </div>
        <div class="carrer-list">
            <el-timeline>
                <el-timeline-item v-for="(item, index) in BigEvents" :key="index" :type="(item.type as any)"
                    :size="(item.size as any)" @click="editEvents(item)">
                    <el-card>
                        <h4>{{ item.timestamp }}</h4>
                        <p>{{ item.content }}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>
<!-- 
    时间轴数据结构：
    content：
    time:
    size: 'large',
    type: 'primary',
 -->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const content = ref<string>("")
const time = ref<string>('')
const BigEvents = reactive<Array<Record<string, string>>>([
    {
        content: 'Custom icon',
        timestamp: '2018-04-12',
        size: 'large',
        type: 'primary',
    },
    {
        content: 'Custom color',
        timestamp: '2018-04-03',
        size: 'large',
        type: 'primary',
    },
])
function addEvents(events: string, time: string) {
    BigEvents.push({
        size: 'large',
        type: 'primary',
        content: events,
        timestamp: time
    })
}
function editEvents(item: Record<string, string>) {
    const index = BigEvents.findIndex(index => index.content === item.content)
    content.value = item.content
    time.value = item.timestamp
}
</script>
<style scoped>
.career {
    padding: 0.5rem;
    display: flex;
}

.career .career-edit {
    display: flex;
    flex-grow: 1;
    line-height: 2rem;
    flex-direction: column;
    gap: 0.5rem;
}

.career .career-edit .career-edit-form {
    display: flex;
    gap: 0.5rem;
}

.career .carrer-list {
    flex-grow: 1;
}

.career .career-edit .demo-date-picker {
    display: flex;
    width: 100%;
}

.career .career-edit .demo-date-picker .block {
    display: flex;
    gap: 0.5rem;
    padding: 30px 0;
    text-align: left;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
    font-size: 14px;
}

.career .career-edit .demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    font-size: 16px;
}
</style>

<style>
.date-pick-th .el-date-table th {
    font-size: 14px;
}
</style>
