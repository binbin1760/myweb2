<template>
  <div class="layout">
    <div class="header">毛毛虫的口袋世界</div>
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
  overflow-y: auto;
}

.layout .header {
  border-bottom: 1px solid #eeee;
  text-align: center;
  font-size: 24px;
  font-family: "阿里妈妈东方大楷 Regular";
  background-color: rgb(3, 50, 136);
}

.layout .content {
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
  justify-content: space-around;
  background-image: url("@/assets/被逼无奈的选择.jpg");
  background-position: center;
  background-size: 100% 100%;
  image-rendering: -webkit-optimize-contrast;
}

.layout .footer {
  background: #F6F7F8;
}
</style>
