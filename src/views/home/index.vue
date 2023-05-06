<template>
  <div class="home">
    <div class="home-top">
      <LifeTrends></LifeTrends>
      <div class="home-top-right">
        <ArticleList></ArticleList>
        <TaskList></TaskList>
      </div>
    </div>
    <div class="home-buttom">
      <WebNav></WebNav>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ArticleList,WebNav,TaskList,LifeTrends} from './components'

</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.home .home-top {
  display: flex;
  justify-content: space-between;
}
</style>
