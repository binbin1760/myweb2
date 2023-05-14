<template>
    <div class="search">
        <Nav title="搜索">
            <div class="search-box">
                <input class="search-input" type="text" placeholder="不要搜站内没有的东西">
                <div class="btn">站内搜索</div>
            </div>
        </Nav>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.search {
    margin-top: 10px;
}

.search-box {
    display: flex;
    margin: 1.5rem 0 1rem 0;
    position: relative;
}

.search-box .search-input {
    width: 260px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding-left: 0.25rem;
    outline: none;
    font-size: 14px;
}

.search-box .btn {
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
