<template>
  <div class="my-socialize">
    <div class="title">我的社交</div>
    <div class="content">
      <Tag v-for="(mySocialieTag, index) in mySocialieTags " :key="index" :icon="mySocialieTag" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tag } from '@/components'
const mySocialieTags = ["bilibili", "github", "email"]
</script>

<style scoped>
.my-socialize {
  margin-top: 10px;
  width: 22.5rem;
  background: #fff;
  padding: 20px;
}

.my-socialize .title {
  width: 80px;
  border-bottom: 1px solid #e67e22;
}

.my-socialize .content {
  display: flex;
  gap: 0.5rem;
  margin-top: 12px;
}
</style>
