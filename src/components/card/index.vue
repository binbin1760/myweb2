<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <div class="content-title">{{ trends.title }}</div>
                <div class="content-time">{{ trends.createTime }}</div>
            </div>
        </div>
        <div class="tag">
            <div class="tag-content">
                <template v-for="(item, index) in trends.tag">
                    <Tag :icon="item"></Tag>
                </template>
            </div>
            <div @click="toPage(trends.title, trends.class)" class="btn">阅读全文</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Tag } from '@/components'

defineProps<{ trends: any }>()

const Router = useRouter()
function toPage(title: string, type: number) {
    Router.push({
        path: '/home/content',
        query: { title, type }
    })
}
</script>

<style scoped>
.card {
    width: 750px;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
}

/* 文章配图 标题 简介 */
.card .card-content {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
}

.card .card-img {
    width: 200px;
    height: 200px;
    margin-right: 5px;
}

.card .content .content-title {
    font-size: 1.5rem;
    color: #303030;
}

.card .content .content-time {
    font-size: 1rem;
    color: #959595;
    margin-top: 0.25rem;
}

.card .content .intro {
    margin-top: 0.25rem;
    font-size: 1rem;
    color: #666;
}

/* tag */
.card .tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem;
}

.card .tag .tag-content {
    display: flex;
    gap: 0.25rem;
}

/* 按钮 */
.card .tag .btn {
    padding: 0.4rem;
    font-size: 0.875rem;
    color: #fff;
    background: #e67e22;
    cursor: pointer;
}

.card .tag .btn:hover {
    background: #303030;
}
</style>
