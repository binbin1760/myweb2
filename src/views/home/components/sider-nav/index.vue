<template>
    <div class="sider-nav">
        <Nav title="分类">
            <div v-for="(type, index) in typeNumber" :key="index" class="type">
                <span class="key">{{ type.key }}</span>
                <span class="value">({{ type.Value }})</span>
            </div>
        </Nav>
    </div>
</template>

<script setup lang="ts">
import { Nav } from '@/components'
import { getTypeNumber } from '@/apis';

const typeNumber = getTypeNumber()
</script>
<style scoped>
.sider-nav {
    margin-top: 10px;
}

.type {
    cursor: pointer;
    margin-top: 0.5rem;
}

.type .key {
    color: #e67e22;
}

.type .value {
    color: #aaa;
    margin-left: 0.25rem;
}
</style>