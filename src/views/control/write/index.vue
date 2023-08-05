<template>
    <div class="write">
        <div class="title">
            <el-input v-model="title" placeholder="文章标题"></el-input>
        </div>
        <div class="content">
            <Quill :type="false" @contentData="getContentData"></Quill>
        </div>
        <div class="taglist">
            <Tag v-for="(tagItem, index) in selectedTag" :key="index" :icon="tagItem"></Tag>
        </div>
        <div class="confirm-btn">
            <el-dropdown trigger="click" :hide-on-click="false">
                <span class="el-dropdown-link">
                    <el-button type="primary">选择标签</el-button>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(item, index) in TagList" :key="index" @click="getTagList(item.key)">
                            <div class="item">
                                <Tag :icon="item.key"></Tag>
                            </div>
                            <div>{{ item.value }}</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-button type="primary" @click="uploadArticle">确认</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { upload } from '@/apis';
import { Quill } from '@/components';
import { formateDate } from '@/utils';
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus'

const title = ref<string>('')
let selectedTag = reactive<Array<string>>([])
let quillData = ref('')
const TagList = [
    { key: 'JavaScript', value: "JavaScript" },
    { key: "Vue", value: "Vue" },
    { key: "shujuku", value: "数据库" },
    { key: "rengongzhineng", value: "人工智能" },
    { key: "_houduankaifa", value: "后端开发" },
    { key: "css", value: "Css" },
    { key: "webpack", value: "构建工具" },
    { key: "typescript", value: "Typescript" },
    { key: "cocos", value: "Cocos引擎" },
    { key: "youxitianchong", value: "游戏相关" },
]
// 添加标签
function getTagList(icon: string) {
    let index = selectedTag.findIndex(item => item === icon)
    if (index === -1) {
        selectedTag.push(icon)
    } else {
        selectedTag.splice(index, 1)
    }
}
// 获取富文本内容
function getContentData(val: string) {
    quillData.value = val
}
//  上传文章数据
function uploadArticle() {
    const date = formateDate(Date())
    if (quillData.value !== '') {
        upload({
            type: 'article',
            tag: selectedTag,
            title: title.value,
            content: quillData.value,
            createDate: date
        })
    } else {
        ElMessage({
            message: '动态内容不能为空',
            type: 'error',
        })
    }
}
</script>

<style scoped>
.write {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
}

.title {
    width: 30rem;
    margin: 20px 0;
}

.taglist {
    display: flex;
    gap: 10px;
    height: 2rem;
    margin: 1rem 0;
}

.confirm-btn {
    display: flex;
    gap: 10px;
}
</style>