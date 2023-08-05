<template>
    <el-drawer v-model="show" direction="rtl">
        {{ value }}
    </el-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    show: Boolean,
    data: Object,
})
const emit = defineEmits(["update:show", "update:data"])
const value = computed({
    get() {
        return props.data
    },
    set(value: unknown) {
        emit("update:data", value)
    }
})
const show = computed({
    get() {
        return props.show
    },
    set(value: unknown) {
        emit("update:show", value)
    }
})
</script>

<style scoped></style>