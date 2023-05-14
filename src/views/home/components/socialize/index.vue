<template>
  <div class="my-socialize">
    <Nav title="我的社交">
      <div class="content">
        <Tag v-for="(mySocialieTag, index) in mySocialieTags " :key="index" :icon="mySocialieTag" />
      </div>
    </Nav>
  </div>
</template>

<script setup lang="ts">
import { Tag, Nav } from '@/components'
import { getMysocial } from '@/apis/all';

const mySocialieTags = getMysocial()

</script>

<style scoped>
.my-socialize {
  margin-top: 10px;
}

.my-socialize .content {
  display: flex;
  gap: 0.5rem;
  margin-top: 12px;
}
</style>
