<template>
    <div class="my-info">
        <img class="avator" :src="myInfo.avator ? myInfo.avator : defaultAvator" @click="toHome">
        <div class="signature">
            <div class="name">{{ myInfo.name }}</div>
            <div class="my-signature">{{ myInfo.signature }}</div>
        </div>
        <div class="Risk">
            <div class="unRisk">未完成任务:{{ myInfo.risk }}</div>
            <div class="Risked">已完成任务:{{ myInfo.risked }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import defaultAvator from '@/assets/Avator-多老A梦.png'
import { useRouter } from 'vue-router';
defineProps<{
    myInfo: Record<string, any>
}>()
const Router = useRouter()
function toHome() {
    Router.push('/home/all')
}
</script>

<style scoped>
.my-info {
    display: flex;
    background-color: #fff;
    padding: 10px;
    align-items: center;
}

.avator {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
}

.signature {
    margin-left: 5px;
    font-size: 20px;
}

.signature .name {
    font-size: 20px;
}

.signature .my-signature {
    font-size: 12px;
    color: #a3a7b0;
}

.Risk {
    margin-left: 50px;
}

.Risk .Risked {
    color: #a3a7b0;
}

.Risk .unRisk {
    color: red;
}
</style>