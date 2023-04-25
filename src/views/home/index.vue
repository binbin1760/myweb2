<template>
  <div class="home-page">
    <div class="menu"></div>
    <div class="Dashboard">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-page{
  display: flex;
  width: 1270px;
  justify-content: space-around;
  height: 100%;
}
.home-page .menu{
  background: aqua;
  width: 50px;
  height:80%;
  border-radius: 25px;
  opacity: 0.5;
  align-self: center;
}
.home-page .Dashboard{
  width: 1200px;
  height: 100%;
}
</style>