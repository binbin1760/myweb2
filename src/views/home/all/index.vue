<template>
    <div class="all">
        <div class="all-left">
            <Card :trends="tsteData"></Card>
            <div>{{ a }}</div>
        </div>
        <div class="all-right">
            <Search></Search>
            <Socialize></Socialize>
            <SiderNav title="分类"></SiderNav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Card } from '@/components';
import { Socialize, Search, SiderNav } from '../components';
import { getAlldata, testAxios } from '@/apis/all';
import { ref } from 'vue';


const tsteData = getAlldata()

let a = ref({})
testAxios().then(res => {
    console.log(res.data);
    a.value = res
})

</script>

<style scoped>
.all {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>