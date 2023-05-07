<template>
  <div class="layout">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
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
</template>
<script setup lang="ts">
</script>
<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  background-color: #ebebeb;
}

.layout .content {
  flex: 1;
}

.layout .footer {
  background: #111;
}
</style>
