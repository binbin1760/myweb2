<template>
    <div class="" @click="test">测试</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
function test() {
    console.log(router.currentRoute.value.fullPath);

}
</script>

<style scoped></style>