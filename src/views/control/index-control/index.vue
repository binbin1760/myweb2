<template>
    <div class="index">
        <Myinfo :my-info="getMyInfo()" />
        <div class="index-down">
            <writetrends />
            <risk />
        </div>
    </div>
</template>

<script setup lang="ts">
import Myinfo from './myinfo.vue';
import writetrends from './writetrends.vue';
import risk from './risk.vue';

import { getMyInfo } from '@/apis';

</script>

<style scoped>
.index-down {
    margin-top: 5px;
    display: flex;
    gap: 10px;
}
</style>