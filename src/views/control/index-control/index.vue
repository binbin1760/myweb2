<template>
    <div class="index">
        <Myinfo :my-info="getMyInfo()" />
        <div class="index-down">
        </div>
    </div>
</template>

<script setup lang="ts">
import Myinfo from './myinfo.vue';
import { getMyInfo } from '@/apis';

</script>

<style scoped>
.index-down {
    margin-top: 5px;
    display: flex;
    gap: 10px;
}
</style>