<template>
    <el-row class="tac">
        <el-col :span="3">
            <el-menu default-active="1" background-color="#001428" class="el-menu-vertical-demo" @open="handleOpen"
                @close="handleClose" text-color="#fff" active-text-color="#fff" :collapse="false">
                <el-sub-menu :index="index" v-for="(item, index) in menuData" :key="index">
                    <template #title>
                        <el-icon>
                            <House />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                </el-sub-menu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    House,
    Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const menuData = [
    { index: "index", name: '主控台', path: '/control/index' },
    { index: "index", name: '工作台', path: '/control/index' },
    { index: "index", name: '胡思乱写', path: '/control/index' },
    { index: "index", name: '行为分析', path: '/control/index' },
    { index: "index", name: '设置', path: '/control/index' },
]
</script>
<style scoped>
.tac {
    height: 100vh;
    background-color: #eee;
}

.el-menu-vertical-demo {
    height: 100%;
}

.tac .title {
    text-align: center;
    padding: 10px;
    font-size: 18px;
    font-weight: 800;
    color: #fff;
}

.el-menu-item:hover {
    background-color: #0066FF;
}
</style>