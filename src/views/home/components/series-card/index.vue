<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <div class="content-title">{{ trends.title }}</div>
                <div class="content-time">{{ trends.createTime }}</div>
            </div>
            <div class="list">
                <div v-for="(item, index) in trends.lsit" :key="index" class="list-title"
                    @click="toPage(item.title, trends.class, trends.title)">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{ trends: any }>()

const Router = useRouter()
function toPage(title: string, type: number, seriesTitle: string) {
    Router.push({
        path: '/home/content',
        query: { title, type, seriesTitle }
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

.card .content {
    border-bottom: 1px solid #ccc;
    margin-bottom: 0.25rem;
}

/* 文章配图 标题 简介  */
.card .card-content {
    display: flex;
    padding: 1rem;
    flex-direction: column;
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

.card .list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.card .list .list-title {
    padding-left: 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
}

.card .list .list-title:hover {
    color: tomato;
}
</style>
