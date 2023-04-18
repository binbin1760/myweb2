<template>
  <n-layout class="bg-slate-600" position="absolute">
    <n-layout-header bordered>xxxx</n-layout-header>
    <n-layout-content>
      <slot />
    </n-layout-content>
    <n-layout-footer>xxxx</n-layout-footer>
  </n-layout>
</template>
<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter } from "naive-ui"
</script>
