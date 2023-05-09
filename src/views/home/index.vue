<template>
  <div class="home">
    <div class="home-left">
      <Card></Card>
    </div>
    <div class="home-right">
      <Search></Search>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/components';
import { Search } from './components';
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
}

.home .home-left {
  margin-right: 20px;
}
</style>
