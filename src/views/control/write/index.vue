<template>
    <div class="write">
        <div class="title">
            <el-input v-model="title" placeholder="文章标题" @blur="titleRepeat()"></el-input>
            <div class="series-list">
                <span>
                    系列文章？<el-switch v-model="openSeriesinput" />
                </span>
                <el-dropdown trigger="click" :hide-on-click="false">
                    <span class="el-dropdown-link">
                        <el-input v-if="openSeriesinput" v-model="seriesTitle" placeholder="系列标题"
                            @focus="seriesRepeat()"></el-input>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item, index) in allSeriesTitle" :key="index"
                                @click="getSeriesValue(item)">
                                <div>{{ item.title }}</div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="article-type-list">
                <el-select v-model="articleClass" class="m-2" placeholder="文章类型选择">
                    <el-option v-for="item in classOptions" :key="item" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <div class="content">
            <Quill height="30rem" @get-value="getContentData"></Quill>
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
import { upload, getTitle, getSeries } from '@/apis';
import { Quill } from '@/components';
import { formateDate } from '@/utils';
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus'

const title = ref<string>('')
const seriesTitle = ref<string>('')
let selectedTag = reactive<Array<string>>([])
let quillData = ref('')
let allSeriesTitle = ref<Array<Record<string, string>>>([])
const articleClass = ref<any>('')
let classOptions = reactive<any>([
    { label: "技术踩坑", value: 1 },
    { label: "游戏整活", value: 2 },
    { label: "项目相关", value: 3 },
    { label: "读书笔记", value: 4 },
])
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
const openSeriesinput = ref<boolean>(false)
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

async function titleRepeat() {
    const isRepeat = await getTitle(title.value)
    if (!isRepeat.data) {
        ElMessage({
            message: '文章标题重复',
            type: 'error',
        })
    }

}
async function seriesRepeat() {
    const isRepeat = await getSeries(seriesTitle.value)
    allSeriesTitle.value = isRepeat.data.allSeriesTitle
}
function getSeriesValue(item: any) {
    seriesTitle.value = item.title
}
//  上传文章数据
function uploadArticle() {
    const date = formateDate(Date())
    const type = seriesTitle.value === '' ? 'article' : 'series'
    if (quillData.value !== '<p><br></p>') {
        upload({
            type: type,
            tag: selectedTag,
            title: title.value,
            seriesTitle: seriesTitle.value,
            content: quillData.value,
            createDate: date,
            class: articleClass.value
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
    margin-top: 1.25rem;
}

.title .series-list {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.article-type-list {
    margin-bottom: 1rem;
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
</style>@/apis/upload