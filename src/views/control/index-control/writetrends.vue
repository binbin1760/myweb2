<template>
    <div class="writetrends">
        <div class="write">
            <!-- 富文本编辑器 type=true 表示动态编辑器  false表示文章编辑器 -->
            <Quill :type="true" @contentData="getContentData" />
            <div class="confirm">
                <div class="confirm-tag">
                    <Tag v-for="(tagItem, index) in selectedTag" :key="index" :icon="tagItem"></Tag>
                </div>
                <div class="confirm-btn">
                    <el-dropdown trigger="click" :hide-on-click="false">
                        <span class="el-dropdown-link">
                            <el-button type="primary">选择标签</el-button>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item v-for="item in TagList" :key="item" @click="getTagList(item.key)">
                                    <div class="item">
                                        <Tag :icon="item.key"></Tag>
                                    </div>
                                    <div>{{ item.value }}</div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-button type="primary" @click="uploadTrends">确认</el-button>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-title">动态</div>
            <div class="list-content">动态浏览</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Quill, Tag } from '@/components';
import { reactive, ref } from 'vue';
import { upload } from '@/apis';
import { formateDate } from '@/utils'
import { ElMessage } from 'element-plus'

let quillData = ref('')
let selectedTag = reactive<Array<string>>([])

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
//  获取富文本内容
function getContentData(val: string) {
    quillData.value = val
}
// 获取tag
function getTagList(icon: string) {
    let index = selectedTag.findIndex(item => item === icon)
    if (index === -1) {
        selectedTag.push(icon)
    } else {
        selectedTag.splice(index, 1)
    }
}
// 上传内容
function uploadTrends() {
    const date = formateDate(Date())
    if (quillData.value !== '') {
        upload({
            type: 'trends',
            tag: selectedTag,
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
.writetrends {
    width: 70%;
    margin-left: 5px;
}

.writetrends .write {
    height: auto;
    background-color: #fff;
}

.writetrends .write::-webkit-scrollbar {
    width: 0;
}

.writetrends .list {
    margin-top: 5px;
    background-color: #fff;
}

.writetrends .list .list-title {
    border-bottom: 1px solid #ccc;
}

.writetrends .list .list-content {
    height: 600px;
    overflow-y: auto;
}

.list-content::-webkit-scrollbar {
    width: 0;
}

.confirm {
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
}

.confirm .confirm-btn,
.confirm-tag {
    display: flex;
    gap: 5px;
}

/*  下拉菜单 */
.el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>