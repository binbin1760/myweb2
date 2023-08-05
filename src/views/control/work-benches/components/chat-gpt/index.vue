<template>
    <div class="chat-gpt">
        <div class="chat-gpt-title">ChatGPT3.5</div>
        <div class="chat-content">
            <div v-for="(item, index ) in testData" :key="index" :class="item.role === 'User' ? 'user1' : 'user'">
                <div class="user-name">{{ item.role }} at {{ item.time }}</div>
                <div class="user-say">
                    <span class="say-item">{{ item.content }}</span>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <el-input v-model="chatContet" :rows="4" type="textarea" placeholder="请说人话！" />
            <el-button type="primary">发送</el-button>
        </div>
    </div>
</template>
<!--  会话数据结构：
    role：GPT  |  user 
    时间
    content
    [
    {role:User,time:'2013-06-06 18:02:30',content："13213"},
    {role:Gpt,time:'2013-06-06 18:02:30',content："13213"},
    ]
-->
<script setup lang="ts">
import { ref } from 'vue';

const chatContet = ref<string>('')

const testData = [
    { role: 'User', time: '2013-06-06 18:02:30', content: "你是谁？" },
    { role: 'Gpt', time: '2013-06-06 18:02:30', content: "我是你爹" },
]
</script>

<style scoped>
.chat-gpt {
    width: 40%;
    background-color: #141b2c;
    color: white;
    display: flex;
    flex-direction: column;

}

.chat-gpt .chat-gpt-title {
    height: 3rem;
    font-size: 20px;
    font-weight: 500;
    line-height: 3rem;
    background-color: #3375b9;
    padding: 0.5rem;
}

/* 聊天框 */
.chat-gpt .chat-content {
    flex: 1;
    overflow: auto;
    padding: 10px 2px;
}

.chat-content .user1 {
    text-align: end;
}

.chat-content .user-say {
    padding: 0.5rem;
    margin-top: 10px;
}

.chat-content .user-say .say-item {
    padding: 8px;
    border-radius: 4px;
    background: #0066ff;
    color: #eee;
}

/* 输入框 */
.chat-gpt .chat-input {
    display: flex;
    flex-direction: column;
}

.chat-input :deep() .el-textarea__inner {
    color: #000;
    font-size: 18px;
}

.chat-input :deep() .el-textarea__inner::-webkit-scrollbar {
    width: 0;
}

.chat-input :deep() .el-textarea__inner::placeholder {
    color: #000;
}
</style>