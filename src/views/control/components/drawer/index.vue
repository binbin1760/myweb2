<template>
    <el-drawer v-model="show" direction="rtl">
        {{ props.data }}
    </el-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps<{
    data: Record<string, unknown>,
}>()
const emits = defineEmits<{
    (e: 'update:show', val: unknown): void
    (e: 'update:data', val: unknown): void
}>()
const show = ref(false)

emits('update:show', show)

watch(show, val => {
    if (val) {
        emits('update:data', props.data)
    }
})
</script>

<style scoped></style>