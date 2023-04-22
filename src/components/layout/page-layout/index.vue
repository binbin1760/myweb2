<template>
  <div class="layout">
    <div class="header">头部</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
      <div class="beian">
        <div style="width:300px;margin:0 auto; padding:20px 0;"><a target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012202001421"
            style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
            <img src="@/assets/备案图标 .png" style="float:left;" />
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">川公网安备
              51012202001421号
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.layout .header{
  text-align: center;
}
.layout .content{
  flex: 1;
  align-self: center;
}
</style>