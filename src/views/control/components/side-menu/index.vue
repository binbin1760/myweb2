<template>
    <el-col :span="3">
        <el-menu :router="true" :default-active="router.currentRoute.value.fullPath" background-color="#001428"
            class="el-menu-vertical-demo" text-color="#fff" :collapse="false">
            <el-menu-item-group class="title">毛毛虫的口袋世界</el-menu-item-group>
            <template v-for="item in menuData" :key="item.path">
                <div v-if="!item.children">
                    <el-menu-item :index="item.path">
                        <el-icon>
                            <Tag :icon="item.meta?.icon"></Tag>
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </div>
                <div v-else>
                    <el-sub-menu :index="item.path">
                        <template #title>
                            <el-icon>
                                <Tag :icon="item.meta?.icon"></Tag>
                            </el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item v-for="children in item.children" :key="children" :index="children.path">
                            {{ children.name }}
                        </el-menu-item>
                    </el-sub-menu>
                </div>
            </template>
        </el-menu>
    </el-col>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Tag } from '@/components';

const router = useRouter()

const menuData = router.options.routes[1].children
</script>
<style scoped>
.el-menu-vertical-demo {
    height: 100%;
}

.title {
    text-align: center;
    padding: 10px;
    font-size: 18px;
    font-weight: 800;
    color: #fff;
}

.el-menu-item:hover {
    background-color: #0066FF;
}

.el-menu {
    border-right-width: 0;
}
</style>