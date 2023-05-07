<template>
    <div class="top">
        <div class="my-Avatar">
            <img src="@/assets/Avator-多老A梦.png" alt="">
        </div>
        <div class="words">一直学习，一直寻觅</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    background-image: url('@/assets/被逼无奈的选择.jpg');
}

.top .my-Avatar img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: aqua;
}

.top .words {
    padding: 10px 10px;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
}
</style>