<template>
  <LayOut>
    <template v-slot:header>
      <Header />
    </template>
    <div class="main">
        <keep-alive>
          <router-view />
        </keep-alive>
    </div>
  </LayOut>
</template>

<script setup lang="ts">
import { LayOut, Header } from '@/components'
</script>

<style scoped></style>
