<template>
    <div class="tag">
        <svg :class="className" aria-hidden="true">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
        <div class="content">{{ title }}</div>
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    icon: string,
    title?: string
    className?: string
}>(),
    { className: "icon" }
)

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
