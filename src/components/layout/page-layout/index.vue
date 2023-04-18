<template>
  <n-layout  vertical >
    <n-layout-header bordered>我还没想好加什么</n-layout-header>
    <n-layout-content>
      <slot />
    </n-layout-content>
    <n-layout-footer>这个不用说了 必定个备案</n-layout-footer>
  </n-layout>
</template>
<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter } from "naive-ui"
</script>
<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}
.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
.n-layout{
  display: flex;
  flex-direction: column;

}
</style>