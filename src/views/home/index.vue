<template>
  <div class="home-page">
    <div class="menu">
      <sidebar
        v-for="(item, index) in siderBar"
        :key="index"
        :siderBar="item"
      ></sidebar>
    </div>
    <div class="router-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import sidebar from "@/components/menu/index.vue";
// sidebar iconfont import
import dashBoard from "@/assets/iconfont/主页.png";
const siderBar = [
  { key: "主页", routerUrl: "xxxx", url: dashBoard },
  { key: "主页12312313", routerUrl: "xxxx", url: dashBoard },
  { key: "主页", routerUrl: "xxxx", url: dashBoard },
];
</script>

<style scoped>
.home-page {
  display: flex;
  width: 1270px;
  justify-content: space-around;
  height: 100%;
}

.home-page .menu {
  background: rgb(36, 35, 35);
  width: 50px;
  height: 80%;
  border-radius: 8px;
  opacity: 0.5;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #fff;
}

.home-page .router-page {
  width: 1200px;
  height: 100%;
}
</style>
