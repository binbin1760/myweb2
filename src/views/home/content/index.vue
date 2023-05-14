<template>
    <div class="content">
        <div class="content-left">
            {{ route.query.title }}
            {{ content }}
        </div>
        <div class="content-right">
            <Nav title="文章内容导航">

            </Nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getContent } from '@/apis/content'

const route = useRoute()
const content = getContent()

</script>

<style scoped>
.content {
    margin-top: 10px;
    display: flex;
    gap: 20px;
}

.content .content-left {
    width: 800px;
    background-color: white;
}
</style>