<template>
    <div class="time-axis">
        <div v-for="(item, index ) in oddData" :key="index" class="odd">{{ item }}</div>
        <div v-for="(item, index ) in evenData" :key="index" class="even">{{ item }}</div>
    </div>
</template>

<script setup lang="ts">
import { getMyEvent } from '@/apis/timeAxis';
import { reactive } from 'vue';

const myEvents = getMyEvent()
let evenData = reactive<Array<Record<string, unknown>>>([])
let oddData = reactive<Array<Record<string, unknown>>>([])

for (let item in myEvents) {
    let index = (item) as unknown as number / 2
    if (index === 0 || index === 1) {
        evenData[item] = myEvents[item]
    } else {
        oddData[item] = myEvents[item]
    }
}
</script>

<style scoped>
.time-axis {
    margin-top: 10px;
}

.time-axis .line {
    height: 20px;
    border: 1px solid aqua;
}
</style>