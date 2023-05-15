<template>
    <div class="time-axis">
        <div v-for="(item, index) in myEvents" :key="index" class="events">
            <div class="time">{{ item.time }}</div>
            <svg class="time-icon" aria-hidden="true">
                <use xlink:href="#icon-shijianzhou1"></use>
            </svg>
            <div class="content">{{ item.value }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getMyEvent } from '@/apis/timeAxis';

const myEvents = getMyEvent()
</script>

<style scoped>
.time-axis {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.time-axis .time-icon {
    width: 2rem;
    height: 2rem;
}

.time-axis .events {
    display: flex;
    align-items: center;
}

.time-axis .events .time {
    padding: 20px 0 20px 20px;
}

.time-axis .events .content {
    padding: 20px 20px 20px 10px;
}
</style>