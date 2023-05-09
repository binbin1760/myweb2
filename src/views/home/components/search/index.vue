<template>
    <div class="search">
        <div class="title">搜索</div>
        <div class="search-box">
            <input class="search-input" type="text" placeholder="不要搜站内没有的东西">
            <div class="btn">站内搜索</div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.search {
    margin-top: 10px;
    width: 22.5rem;
    height: 7em;
    background: #fff;
    padding: 20px;
}

.search .title {
    width: 80px;
    border-bottom: 1px solid #e67e22;
}

.search .search-box {
    display: flex;
    align-items: center;
    width: 22.5rem;
    margin-top: 1.375rem;
    position: relative;
    margin-top: 2.5rem;
}

.search .search-box .search-input {
    width: 260px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding-left: 0.25rem;
    outline: none;
    font-size: 14px;
}

.search .search-box .btn {
    width: 80px;
    height: 32px;
    background: #e67e22;
    color: #fff;
    text-align: center;
    line-height: 32px;
    position: absolute;
    right: 25px;
    cursor: pointer;
}
</style>