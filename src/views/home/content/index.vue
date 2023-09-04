<template>
    <div class="content">
        <div class="content-left">
            <div class="article-title">{{ result.article?.title }}</div>
            <div class="article-content" v-html="result.article?.content"></div>
        </div>
        <div v-if="result.titleList" class="content-right">
            <Nav title="文章内容导航">
                <div class="title">
                    <div class="title-item" v-for="(item, index) in result.titleList" :key="index"
                        @click="getSeriesArticle(item)">
                        {{ item }}
                    </div>
                </div>
            </Nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getArticleContent } from '@/apis'
import { ref, onActivated } from 'vue';



const route = useRoute()

const result = ref<any>({})
onActivated(() => {
    getArticleContent(route.query.title as string, route.query.type as any, route.query.seriesTitle as any).then(res => {
        result.value = res.data
    })
})
function getSeriesArticle(title: string) {
    getArticleContent(title, route.query.type as any, route.query.seriesTitle as any).then(res => {
        result.value = res.data
    })
}
</script>

<style scoped>
.content {
    width: 100%;
    margin-top: 10px;
    display: flex;
    gap: 20px;
    box-sizing: border-box;
    padding: 0 2.5rem;
}

.content .content-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
}

/* .content .content-right {

} */

.content .content-left .article-title {
    background-color: white;
    text-align: center;
    font-size: 18px;
    font-weight: 550;
}

.content .content-left .article-content {
    background-color: white;
}

.title {
    padding: 1rem 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow: hidden;
}

.title .title-item {
    cursor: pointer;
}

.title .title-item:hover {
    color: #F56C6C;
}
</style>