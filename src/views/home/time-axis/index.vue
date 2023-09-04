<template>
    <div class="big-events">
        <el-timeline>
            <el-timeline-item v-for="(item, index) in BigEvents" :key="index" :type="item.type" :size="item.size">
                <el-card>
                    <h4>{{ item.timestamp }}</h4>
                    <p>{{ item.content }}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>


<script setup lang="ts">
import { getMyEvent } from '@/apis/timeAxis';

const myEvents = getMyEvent()
const BigEvents: any = [
    {
        content: 'Custom icon',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
    },
    {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
    },
]
</script>

<style scoped>
.big-events {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>