<template>
    <div>
        <div class="lite-trends">
            <div class="title">生活动态</div>
            <div class="list">
                <div class="content">..1.</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false,
}

</script>
<script setup lang="ts">
</script>

<style scoped>
.lite-trends {
    display: flex;
    flex-direction: column;
    color: white;
    width: 700px;
    border: 1px solid #fff;
}

.lite-trends .title {
    text-align: center;
    padding: 16px;
    border-bottom: 1px solid #fff;
}

.lite-trends .list {
    height: 700px;
    overflow-y: scroll;
}

.lite-trends .list::-webkit-scrollbar {
    width: 0;
}

.lite-trends .content {
    margin-top: 5px;
    width: 100%;
    height: 200px;
    background-color: aqua;
}
</style>