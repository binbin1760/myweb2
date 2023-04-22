<template>
  <div class="home-page">
    <Card :title="title" :website="getCardData()"></Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/card/index.vue'
import { getCardData } from "@/api/card/card"

const title = "网站"

</script>

<style scoped>
.home-page{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1200px;
}
</style>