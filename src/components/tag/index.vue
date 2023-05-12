<template>
    <div class="tag">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="iconType"></use>
        </svg>
        <div class="content">{{ title }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    icon: string,
    title?: string
}>()
const iconType = `#icon-${props.icon}`
</script>

<style scoped>
.tag {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.tag .content {
    height: 2rem;
    line-height: 32px;
    margin-left: 0.25rem;
}
</style>
